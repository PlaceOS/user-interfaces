import {
  DateCalendarComponent
} from "./chunk-ORSR2N5R.js";
import {
  CustomTooltipComponent
} from "./chunk-5ZZX76XD.js";
import {
  AsyncHandler,
  IconComponent,
  addYears
} from "./chunk-ANUBDGFI.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Injector,
  Input,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  Output,
  TranslatePipe,
  ViewChild,
  computed,
  endOfDay,
  forwardRef,
  fromZonedTime,
  getTimeInTimezone,
  getTimezoneOffsetString,
  inject,
  input,
  markUserDateChange,
  model,
  set,
  setClassMetadata,
  setTimeInTimezone,
  signal,
  startOfDay,
  startOfMinute,
  toZonedTime,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-SMKVCUEU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/form-fields/src/lib/date-field.component.ts
var _c0 = ["*"];
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
        const format = `MMM d, ${this.time_format()}${this.range() === 1 ? " (z)" : ""}`;
        return this._date_pipe.transform(start, format, this.tz());
      },
      ...ngDevMode ? [{ debugName: "start_of_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_of_day = computed(
      () => {
        const end = endOfDay(this.date() || Date.now()).valueOf();
        const format = `MMM d, ${this.time_format()}${this.range() === 1 ? " (z)" : ""}`;
        return this._date_pipe.transform(end, format, this.tz());
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
    ]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c0, decls: 15, vars: 8, consts: [["calendar_picker", ""], [1, "flex", "items-center", "gap-1"], ["type", "button", "customTooltip", "", "yPosition", "top", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "flex-1", "items-center", "justify-between", "rounded-sm", "border", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "disabled"], [1, "error", "text-error", "h-5", "p-1", "text-xs"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "click", "disabled"], [1, "bg-base-100", "relative", "w-[18rem]", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
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

export {
  DateFieldComponent
};
//# sourceMappingURL=chunk-4XPHBLO6.js.map
