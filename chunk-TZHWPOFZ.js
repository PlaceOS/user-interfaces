import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPT6QV6G.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-UHYZ3QEX.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CAAMUB2D.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-ZVSHIGFS.js";
import {
  MatOption
} from "./chunk-JQJNBBNN.js";
import {
  TranslatePipe
} from "./chunk-JCEMX2GO.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-C5SFKFXB.js";
import {
  currentUser,
  isAfter,
  isBefore,
  reloadUserData
} from "./chunk-NAPLFNKH.js";
import {
  AsyncHandler
} from "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  addDays,
  addMinutes,
  endOfDay,
  endOfDayInTimezone,
  format,
  formatTimeInTimezone,
  getTimeInTimezone,
  getTimezoneOffsetString,
  i18n,
  markUserDateChange,
  notifyError,
  roundToNearestMinutes,
  set,
  setTimeInTimezone,
  sh,
  startOfDay,
  startOfDayInTimezone,
  startOfMinute,
  startOfWeek,
  th
} from "./chunk-PYWAX25U.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  Output,
  ViewChild,
  computed,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-EOGESHX7.js";
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
      (_t) => "",
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

// libs/users/src/lib/wfh-settings-modal.component.ts
function WFHSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-checkbox", 12);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_For_3_Template_mat_checkbox_ngModelChange_4_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setWeekdayEnabled(day_r2.getDay(), $event);
      return \u0275\u0275resetView($event && ctx_r2.initialiseDay(day_r2.getDay()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, day_r2, "EEE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.weekdays_enabled()[day_r2.getDay()]);
    \u0275\u0275control();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    \u0275\u0275property("value", type_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r7.name, " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_40_r9 = \u0275\u0275nextContext().$index;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addBlock(ctx_r2.settings()[day_r6.getDay()], \u0275$index_40_r9));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_40_r9 = \u0275\u0275nextContext().$index;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeBlock(ctx_r2.settings()[day_r6.getDay()], \u0275$index_40_r9));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_a_time_field_ngModelChange_1_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setStartTime(block_r5, day_r6.getDay(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_a_time_field_ngModelChange_2_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setEndTime(block_r5, day_r6.getDay(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "mat-form-field", 19)(4, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_mat_select_ngModelChange_4_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(block_r5.location, $event) || (block_r5.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_For_6_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template, 3, 0, "button", 21);
    \u0275\u0275conditionalCreate(8, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const \u0275$index_40_r9 = ctx.$index;
    const day_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.timeFrom(block_r5.start_time))("from", ctx_r2.timeFrom((\u0275$index_40_r9 > 0 ? ctx_r2.settings()[day_r6.getDay()].blocks[\u0275$index_40_r9 - 1]?.end_time : 0) || 0))("no_error", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.timeFrom(block_r5.end_time))("from", ctx_r2.timeFrom(block_r5.start_time + 0.25))("no_error", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", block_r5.location);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_40_r9 === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_40_r9 !== 0 ? 8 : -1);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275repeaterCreate(2, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template, 9, 9, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.settings()[day_r6.getDay()].blocks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, day_r6, "EEEE"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_Template, 7, 4, "div", 14);
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.weekdays_enabled()[day_r6.getDay()] ? 0 : -1);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.WORK_HOURS"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.WORK_SETTINGS_EMPTY"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6);
    \u0275\u0275repeaterCreate(2, WFHSettingsModalComponent_Conditional_5_For_3_Template, 5, 5, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_5_Conditional_7_Template, 6, 3, "div", 9)(8, WFHSettingsModalComponent_Conditional_5_Conditional_8_Template, 5, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "COMMON.WORK_DAYS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.has_working_days() ? 7 : 8);
  }
}
function WFHSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.WORK_SETTINGS_SAVE"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 28);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var WFHSettingsModalComponent = class _WFHSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.options = signal(
      [],
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.option = signal(
      "",
      ...ngDevMode ? [{ debugName: "option" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = signal(
      [],
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekdays_enabled = signal(
      {},
      ...ngDevMode ? [{ debugName: "weekdays_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = signal(
      false,
      ...ngDevMode ? [{ debugName: "changed" }] : (
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
    this.available_weekdays = signal(
      [],
      ...ngDevMode ? [{ debugName: "available_weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.days = new Array(7).fill(0).map((_, idx) => addDays(startOfWeek(addDays(Date.now(), 30)), idx));
    this.has_working_days = computed(
      () => {
        const weekdays_enabled = this.weekdays_enabled();
        return Object.keys(weekdays_enabled).some((day) => weekdays_enabled[day]);
      },
      ...ngDevMode ? [{ debugName: "has_working_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.option_name = computed(
      () => this.options().find((_) => _.id === this.option())?.name || "",
      ...ngDevMode ? [{ debugName: "option_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = computed(
      () => startOfMinute(Date.now()).getTime(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const user = currentUser();
    const prefs = this._data?.local ? this._data.preferences : user.work_preferences;
    const settings = [
      ...(prefs || []).map((_) => __spreadProps(__spreadValues({}, _), {
        blocks: [..._?.blocks || []]
      }))
    ];
    const weekdays_enabled = {};
    for (const day of settings) {
      if (day.blocks.length)
        weekdays_enabled[day.day_of_week] = true;
    }
    this.settings.set(settings);
    this.weekdays_enabled.set(weekdays_enabled);
    const options = [
      { id: "wfo", name: i18n("COMMON.WORK_OFFICE"), icon: "business" },
      { id: "wfh", name: i18n("COMMON.WORK_HOME"), icon: "home" },
      { id: "aol", name: i18n("COMMON.WORK_LEAVE"), icon: "event_busy" }
    ];
    this.options.set(options);
    this.option.set(options[0].id);
  }
  timeFrom(hours) {
    return startOfMinute(set(addDays(/* @__PURE__ */ new Date(), 1), {
      hours: Math.floor(hours),
      minutes: hours * 60 % 60
    })).getTime();
  }
  fromTime(time) {
    const date = new Date(time);
    return date.getHours() + date.getMinutes() / 60;
  }
  initialiseDay(day) {
    const settings = this.settings();
    if (!settings[day])
      settings[day] = { day_of_week: day, blocks: [] };
    if (!settings[day].blocks)
      settings[day].blocks = [];
    if (settings[day].blocks.length === 0) {
      this.addBlock(settings[day], 0);
    }
    this.settings.set([...settings]);
  }
  addBlock(pref, index) {
    pref.blocks.splice(index + 1, 0, {
      start_time: 9,
      end_time: 17,
      location: "wfo"
    });
    this.cleanupBlocks(pref);
    this.settings.update((settings) => [...settings]);
  }
  removeBlock(pref, index) {
    if (pref.blocks.length <= 1)
      return;
    pref.blocks.splice(index, 1);
    this.settings.update((settings) => [...settings]);
  }
  setEndTime(block, day, time) {
    setTimeout(() => {
      block.end_time = this.fromTime(time);
      this.cleanupBlocks(this.settings()[day]);
      this.settings.update((settings) => [...settings]);
    }, 50);
  }
  setStartTime(block, day, time) {
    setTimeout(() => {
      block.start_time = this.fromTime(time);
      this.cleanupBlocks(this.settings()[day]);
      this.settings.update((settings) => [...settings]);
    }, 50);
  }
  cleanupBlocks(pref) {
    if (!pref?.blocks?.length)
      return;
    for (let i = 0; i < pref.blocks.length; i++) {
      const block = pref.blocks[i];
      if (i > 0) {
        if (block.start_time < pref.blocks[i - 1].end_time) {
          block.start_time = pref.blocks[i - 1].end_time;
        }
      }
      if (block.end_time <= block.start_time) {
        block.end_time = block.start_time + 1;
      }
    }
  }
  async saveChanges(close = true) {
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const new_settings = new Array(7).fill(0).map((_, idx) => ({ day_of_week: idx, blocks: [] }));
    for (const day of this.days) {
      const day_of_week = day.getDay();
      if (this.weekdays_enabled()[day_of_week]) {
        new_settings[day_of_week] = {
          day_of_week,
          blocks: this.settings()[day_of_week].blocks
        };
      }
    }
    if (!this._data?.local) {
      try {
        const user = await th("current");
        await sh(user.id, __spreadProps(__spreadValues({}, user), {
          groups: user.groups.filter((_) => !_.startsWith("placeos_")),
          work_preferences: new_settings
        }));
      } catch (error) {
        notifyError("Unable to save user work preferences.");
        throw error;
      } finally {
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
      }
    } else {
      this.loading.set(false);
      this._dialog_ref.disableClose = false;
    }
    if (close) {
      if (!this._data?.local)
        reloadUserData();
      this._dialog_ref.close(new_settings);
    }
  }
  setWeekdayEnabled(day, enabled) {
    this.weekdays_enabled.update((current) => __spreadProps(__spreadValues({}, current), {
      [day]: enabled
    }));
  }
  static {
    this.\u0275fac = function WFHSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WFHSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WFHSettingsModalComponent, selectors: [["wfh-settings-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "relative", "flex", "max-h-[calc(100vh-9rem)]", "w-160", "max-w-full", "flex-col", "space-y-2", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "px-2", "py-4", "sm:max-h-[65vh]", "sm:p-4"], ["loading", "", 1, "bg-base-100", "relative", "flex", "h-72", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded-sm", "text-center"], [1, "border-base-200", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "border-base-300", "relative", "mb-4", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border", "p-2"], [1, "flex", "flex-1", "flex-col", "items-center", "pt-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2"], [1, "border-base-300", "relative", "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-4", "rounded-sm", "border", "px-2", "pt-6", "pb-4", "sm:px-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-8", "py-16"], [1, "text-xs", "font-bold", "uppercase"], [3, "ngModelChange", "ngModel"], [1, "bg-base-100", "absolute", "top-0", "left-2", "m-0!", "-translate-y-1/2", "px-2"], [1, "border-base-200", "relative", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border", "p-2"], [1, "w-1/2", "flex-1", "space-y-2", "pt-2"], [1, "flex", "items-center", "space-x-2"], [1, "border-base-200", "bg-base-100", "bg-opacity-50", "absolute", "top-0", "left-2", "-translate-y-1/2", "rounded-sm", "border", "px-2", "text-sm", "font-medium"], [1, "w-1/4", "flex-1", 3, "ngModelChange", "ngModel", "from", "no_error"], ["appearance", "outline", 1, "no-subscript", "w-1/4", "flex-1"], [3, "value"], ["icon", "", "matRipple", "", 1, "border-base-400", "h-12", "w-12", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "border-base-400", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["src", "assets/icons/no-results.svg", 1, "m-auto"], [1, "opacity-30"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function WFHSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, WFHSettingsModalComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, WFHSettingsModalComponent_Conditional_5_Template, 9, 4, "main", 3)(6, WFHSettingsModalComponent_Conditional_6_Template, 5, 4, "div", 4);
        \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_7_Template, 4, 3, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.WORK_LOCATION_SETTINGS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TimeFieldComponent,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WFHSettingsModalComponent, [{
    type: Component,
    args: [{ selector: `wfh-settings-modal`, template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.WORK_LOCATION_SETTINGS' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="relative flex max-h-[calc(100vh-9rem)] w-160 max-w-full flex-col space-y-2 overflow-x-hidden overflow-y-auto rounded-sm px-2 py-4 sm:max-h-[65vh] sm:p-4"
            >
                <div
                    class="border-base-300 relative mb-4 flex w-full items-center justify-between space-x-2 rounded-sm border p-2"
                >
                    @for (day of days; track day) {
                        <div class="flex flex-1 flex-col items-center pt-2">
                            <div class="text-xs font-bold uppercase">
                                {{ day | date: 'EEE' }}
                            </div>
                            <mat-checkbox
                                [ngModel]="weekdays_enabled()[day.getDay()]"
                                (ngModelChange)="
                                    setWeekdayEnabled(day.getDay(), $event);
                                    $event && initialiseDay(day.getDay())
                                "
                            >
                            </mat-checkbox>
                        </div>
                    }
                    <h3
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2"
                    >
                        {{ 'COMMON.WORK_DAYS' | translate }}
                    </h3>
                </div>
                @if (has_working_days()) {
                    <div
                        class="border-base-300 relative flex w-full flex-col items-center justify-between space-y-4 rounded-sm border px-2 pt-6 pb-4 sm:px-4"
                    >
                        @for (day of days; track day) {
                            @if (weekdays_enabled()[day.getDay()]) {
                                <div
                                    class="border-base-200 relative flex w-full items-center justify-between space-x-2 rounded-sm border p-2"
                                >
                                    <div class="w-1/2 flex-1 space-y-2 pt-2">
                                        @for (
                                            block of settings()[day.getDay()]
                                                .blocks;
                                            track block;
                                            let i = $index
                                        ) {
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(
                                                            block.start_time
                                                        )
                                                    "
                                                    (ngModelChange)="
                                                        setStartTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            (i > 0
                                                                ? settings()[
                                                                      day.getDay()
                                                                  ].blocks[
                                                                      i - 1
                                                                  ]?.end_time
                                                                : 0) || 0
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(block.end_time)
                                                    "
                                                    (ngModelChange)="
                                                        setEndTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            block.start_time +
                                                                0.25
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="no-subscript w-1/4 flex-1"
                                                >
                                                    <mat-select
                                                        [(ngModel)]="
                                                            block.location
                                                        "
                                                    >
                                                        @for (
                                                            type of options();
                                                            track type
                                                        ) {
                                                            <mat-option
                                                                [value]="
                                                                    type.id
                                                                "
                                                            >
                                                                {{ type.name }}
                                                            </mat-option>
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                                @if (i === 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        (click)="
                                                            addBlock(
                                                                settings()[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                        class="border-base-400 h-12 w-12 rounded-sm border"
                                                    >
                                                        <icon>add</icon>
                                                    </button>
                                                }
                                                @if (i !== 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        class="border-error text-error h-12 w-12 rounded-sm border"
                                                        (click)="
                                                            removeBlock(
                                                                settings()[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                    >
                                                        <icon>delete</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                    <h3
                                        class="border-base-200 bg-base-100 bg-opacity-50 absolute top-0 left-2 -translate-y-1/2 rounded-sm border px-2 text-sm font-medium"
                                    >
                                        {{ day | date: 'EEEE' }}
                                    </h3>
                                </div>
                            }
                        }
                        <h3
                            class="bg-base-100 absolute top-0 left-2 m-0! -translate-y-1/2 px-2"
                        >
                            {{ 'COMMON.WORK_HOURS' | translate }}
                        </h3>
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-8 py-16"
                    >
                        <img src="assets/icons/no-results.svg" class="m-auto" />
                        <p class="opacity-30">
                            {{ 'COMMON.WORK_SETTINGS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </main>
        } @else {
            <div
                loading
                class="bg-base-100 relative flex h-72 w-[24rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm text-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'COMMON.WORK_SETTINGS_SAVE' | translate }}
                </p>
            </div>
        }
        @if (!loading()) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button btn matRipple class="w-48" (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      CommonModule,
      MatDialogModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      TimeFieldComponent,
      MatCheckboxModule,
      FormsModule,
      IconComponent,
      MatProgressSpinnerModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WFHSettingsModalComponent, { className: "WFHSettingsModalComponent", filePath: "libs/users/src/lib/wfh-settings-modal.component.ts", lineNumber: 258 });
})();

export {
  TimeFieldComponent,
  WFHSettingsModalComponent
};
//# debugId=d004910f-0f60-5285-b686-d5571795febe
//# sourceMappingURL=chunk-TZHWPOFZ.js.map
