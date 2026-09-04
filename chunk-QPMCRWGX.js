import {
  isSameMonth,
  startOfMonth
} from "./chunk-FZ7QJ6YA.js";
import {
  AsyncHandler,
  CommonModule,
  Component,
  ContentChild,
  CustomTooltipComponent,
  DatePipe,
  IconComponent,
  Input,
  NgControl,
  Output,
  ViewChild,
  addDays,
  addMonths,
  computed,
  contentChild,
  endOfDay,
  forwardRef,
  input,
  isAfter,
  isBefore,
  isSameDay,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-KKWVE3W4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/form-fields/src/lib/date-range-calendar.component.ts
function DateRangeCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, weekday_r1, "EEE"), " ");
  }
}
function DateRangeCalendarComponent_For_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function DateRangeCalendarComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DateRangeCalendarComponent_For_16_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectDate(day_r3.id));
    })("mouseenter", function DateRangeCalendarComponent_For_16_Template_button_mouseenter_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setHoveredDate(day_r3.id));
    });
    \u0275\u0275conditionalCreate(1, DateRangeCalendarComponent_For_16_Conditional_1_Template, 1, 0, "div", 9);
    \u0275\u0275conditionalCreate(2, DateRangeCalendarComponent_For_16_Conditional_2_Template, 1, 0, "div", 10);
    \u0275\u0275conditionalCreate(3, DateRangeCalendarComponent_For_16_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275conditionalCreate(4, DateRangeCalendarComponent_For_16_Conditional_4_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DateRangeCalendarComponent_For_16_Conditional_8_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-secondary-content", day_r3.is_start || day_r3.is_end);
    \u0275\u0275property("disabled", day_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_selected && !day_r3.is_start && !day_r3.is_end ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_start && ctx_r3.end_after_start() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_end && ctx_r3.end_after_start() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_start || day_r3.is_end ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !day_r3.is_month);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 11, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r3.is_today ? 8 : -1);
  }
}
var DateRangeCalendarComponent = class _DateRangeCalendarComponent {
  constructor() {
    this.from_date = input(startOfDay(Date.now()).valueOf(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "from_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "from" }));
    this.to_date = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "to_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "to" }));
    this.offset_weekday = input(
      0,
      ...ngDevMode ? [{ debugName: "offset_weekday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_range_days = input(
      31,
      ...ngDevMode ? [{ debugName: "max_range_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.startInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "startInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "start" }));
    this.start = linkedSignal(
      this.startInput,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.endInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "endInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "end" }));
    this.end = linkedSignal(
      this.endInput,
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.month = model(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "month" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.startChange = output();
    this.endChange = output();
    this._selecting_end = false;
    this.hovered_date = signal(
      null,
      ...ngDevMode ? [{ debugName: "hovered_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekdays = signal(
      [],
      ...ngDevMode ? [{ debugName: "weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.month_days = signal(
      [],
      ...ngDevMode ? [{ debugName: "month_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_after_start = computed(
      () => {
        const start = this.start();
        const end = this._selecting_end ? this.hovered_date() : this.end();
        return !!start && !!end && end > start && !isSameDay(end, start);
      },
      ...ngDevMode ? [{ debugName: "end_after_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._setWeekdays();
    this._setMonthDays();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this._setWeekdays();
      this._setMonthDays();
    }
    if (changes.start) {
      this._setMonthDays();
      this.month.set(this.start() || Date.now());
    }
    if (changes.month) {
      this._setMonthDays();
    }
    if (changes.end) {
      if (!this._selecting_end) {
        this._setMonthDays();
      }
    }
  }
  selectDate(date) {
    const start = this.start();
    const max_days = this.max_range_days();
    if (this._selecting_end) {
      if (date >= start) {
        let end_date = date;
        if (max_days > 0) {
          const max_end_date = addDays(start, max_days - 1).valueOf();
          end_date = Math.min(date, max_end_date);
        }
        this.end.set(end_date);
        this.endChange.emit(end_date);
      } else {
        this.start.set(date);
        this.startChange.emit(date);
        this.end.set(null);
      }
      this._selecting_end = false;
      this.hovered_date.set(null);
    } else {
      this.start.set(date);
      this.startChange.emit(date);
      this.end.set(null);
      this._selecting_end = true;
    }
    this._setMonthDays();
  }
  setHoveredDate(date) {
    if (!this._selecting_end)
      return;
    const start = this.start();
    const max_days = this.max_range_days();
    if (start && max_days > 0) {
      const max_end_date = addDays(start, max_days - 1).valueOf();
      this.hovered_date.set(Math.min(date, max_end_date));
    } else {
      this.hovered_date.set(date);
    }
    this._setMonthDays();
  }
  clearHoveredDate() {
    if (!this._selecting_end)
      return;
    this.hovered_date.set(null);
    this._setMonthDays();
  }
  trackByFn(index, day) {
    return day.id;
  }
  nextMonth() {
    this.month.set(addMonths(this.month(), 1).valueOf());
    this._setMonthDays();
  }
  previousMonth() {
    this.month.set(addMonths(this.month(), -1).valueOf());
    this._setMonthDays();
  }
  _setMonthDays() {
    const week_start = startOfWeek(startOfMonth(this.month()), {
      weekStartsOn: this.offset_weekday()
    });
    const range_start = this.start();
    const range_end = this._selecting_end ? this.hovered_date() : this.end();
    const from_date = this.from_date();
    const to_date = this.to_date();
    const max_days = this.max_range_days();
    const max_end_date = this._selecting_end && range_start && max_days > 0 ? addDays(range_start, max_days - 1).valueOf() : null;
    this.month_days.set(Array.from(Array(7 * 6).keys()).map((i) => {
      const date = addDays(week_start, i).valueOf();
      const is_start = range_start && isSameDay(date, range_start);
      const exceeds_max_range = this._selecting_end && range_start && max_end_date && date > max_end_date;
      const is_end = range_end && range_start && range_end >= range_start && isSameDay(date, range_end);
      const is_selected = range_end && range_start && range_end >= range_start && date >= startOfDay(range_start).valueOf() && date <= endOfDay(range_end).valueOf();
      return {
        id: date,
        disabled: from_date && isBefore(date, from_date) || to_date && isAfter(date, to_date) || exceeds_max_range,
        is_today: isSameDay(date, Date.now()),
        is_start,
        is_end,
        is_month: isSameMonth(date, this.month()),
        is_selected
      };
    }));
  }
  _setWeekdays() {
    const start = startOfWeek(Date.now(), {
      weekStartsOn: this.offset_weekday()
    });
    this.weekdays.set(Array.from(Array(7).keys()).map((i) => addDays(start, i)));
  }
  static {
    this.\u0275fac = function DateRangeCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateRangeCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangeCalendarComponent, selectors: [["date-range-calendar"]], inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], offset_weekday: [1, "offset_weekday"], max_range_days: [1, "max_range_days"], startInput: [1, "start", "startInput"], endInput: [1, "end", "endInput"], month: [1, "month"] }, outputs: { month: "monthChange", startChange: "startChange", endChange: "endChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 17, vars: 4, consts: [[1, "flex", "items-center", "justify-between"], ["month", "", 1, "px-2", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "grid", "h-[17.25rem]", "w-[17.25rem]", "grid-cols-7", "grid-rows-7", "gap-1", 3, "mouseleave"], [1, "border-base-200", "col-span-full", "grid", "grid-cols-7", "border-b"], ["weekday", "", 1, "relative", "flex", "items-center", "justify-center", "text-sm", "opacity-60"], [1, "hover:bg-base-200", "relative", "h-9", "w-9", "rounded-full", 3, "text-secondary-content", "disabled"], [1, "hover:bg-base-200", "relative", "h-9", "w-9", "rounded-full", 3, "click", "mouseenter", "disabled"], [1, "border-base-content", "bg-base-200", "absolute", "-inset-x-0.5", "inset-y-0", "border-y", "border-dashed"], [1, "border-base-content", "bg-base-200", "absolute", "inset-y-0", "-right-0.5", "w-[calc(50%+2px)]", "border-y", "border-dashed"], [1, "border-base-content", "bg-base-200", "absolute", "inset-y-0", "-left-0.5", "w-[calc(50%+2px)]", "border-y", "border-dashed"], [1, "bg-secondary", "absolute", "inset-0", "z-10", "flex", "items-center", "justify-center", "rounded-full"], ["matRipple", "", 1, "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "rounded-full"], [1, "border-secondary", "absolute", "-inset-[3px]", "z-10", "flex", "items-center", "justify-center", "rounded-full", "border"]], template: function DateRangeCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function DateRangeCalendarComponent_Template_button_click_5_listener() {
          return ctx.previousMonth();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function DateRangeCalendarComponent_Template_button_click_8_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "chevron_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 4);
        \u0275\u0275listener("mouseleave", function DateRangeCalendarComponent_Template_div_mouseleave_11_listener() {
          return ctx.clearHoveredDate();
        });
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275repeaterCreate(13, DateRangeCalendarComponent_For_14_Template, 3, 4, "div", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(15, DateRangeCalendarComponent_For_16_Template, 9, 14, "button", 7, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx.month(), "MMMM yyyy"), " ");
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.month_days());
      }
    }, dependencies: [CommonModule, IconComponent, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeCalendarComponent, [{
    type: Component,
    args: [{ selector: `date-range-calendar`, template: `
        <div class="flex items-center justify-between">
            <div month class="px-2 font-medium">
                {{ month() | date: 'MMMM yyyy' }}
            </div>
            <div class="flex items-center space-x-2">
                <button icon matRipple (click)="previousMonth()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextMonth()">
                    <icon>chevron_right</icon>
                </button>
            </div>
        </div>
        <div
            class="grid h-[17.25rem] w-[17.25rem] grid-cols-7 grid-rows-7 gap-1"
            (mouseleave)="clearHoveredDate()"
        >
            <div
                class="border-base-200 col-span-full grid grid-cols-7 border-b"
            >
                @for (weekday of weekdays(); track weekday) {
                    <div
                        weekday
                        class="relative flex items-center justify-center text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEE' }}
                    </div>
                }
            </div>
            @for (day of month_days(); track trackByFn($index, day)) {
                <button
                    class="hover:bg-base-200 relative h-9 w-9 rounded-full"
                    [class.text-secondary-content]="day.is_start || day.is_end"
                    [disabled]="day.disabled"
                    (click)="selectDate(day.id)"
                    (mouseenter)="setHoveredDate(day.id)"
                >
                    @if (day.is_selected && !day.is_start && !day.is_end) {
                        <div
                            class="border-base-content bg-base-200 absolute -inset-x-0.5 inset-y-0 border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start && end_after_start()) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -right-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_end && end_after_start()) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -left-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start || day.is_end) {
                        <div
                            class="bg-secondary absolute inset-0 z-10 flex items-center justify-center rounded-full"
                        ></div>
                    }
                    <div
                        matRipple
                        class="absolute inset-0 z-20 flex items-center justify-center rounded-full"
                        [class.opacity-30]="!day.is_month"
                    >
                        {{ day.id | date: 'd' }}
                    </div>
                    @if (day.is_today) {
                        <div
                            class="border-secondary absolute -inset-[3px] z-10 flex items-center justify-center rounded-full border"
                        ></div>
                    }
                </button>
            }
        </div>
    `, imports: [CommonModule, IconComponent] }]
  }], null, { from_date: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to_date: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], offset_weekday: [{ type: Input, args: [{ isSignal: true, alias: "offset_weekday", required: false }] }], max_range_days: [{ type: Input, args: [{ isSignal: true, alias: "max_range_days", required: false }] }], startInput: [{ type: Input, args: [{ isSignal: true, alias: "start", required: false }] }], endInput: [{ type: Input, args: [{ isSignal: true, alias: "end", required: false }] }], month: [{ type: Input, args: [{ isSignal: true, alias: "month", required: false }] }, { type: Output, args: ["monthChange"] }], startChange: [{ type: Output, args: ["startChange"] }], endChange: [{ type: Output, args: ["endChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangeCalendarComponent, { className: "DateRangeCalendarComponent", filePath: "libs/form-fields/src/lib/date-range-calendar.component.ts", lineNumber: 107 });
})();

// libs/form-fields/src/lib/date-range-field.component.ts
var _c0 = ["startDate"];
var _c1 = ["endDate"];
var _c2 = [[["input", "startDate", ""]], [["input", "endDate", ""]]];
var _c3 = ["input[startDate]", "input[endDate]"];
function DateRangeFieldComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "date-range-calendar", 6);
    \u0275\u0275listener("startChange", function DateRangeFieldComponent_ng_template_14_Template_date_range_calendar_startChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartDate($event));
    })("endChange", function DateRangeFieldComponent_ng_template_14_Template_date_range_calendar_endChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEndDate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("month", ctx_r1.start_date()?.control?.value || ctx_r1.now)("from", ctx_r1.from())("to", ctx_r1.until())("offset_weekday", ctx_r1.week_start());
  }
}
var DateRangeFieldComponent = class _DateRangeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
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
    this.disabled = input(
      false,
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
    this.now = Date.now();
    this.start_date = contentChild("startDate", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "start_date" } : (
      /* istanbul ignore next */
      {}
    )), { read: NgControl }));
    this.end_date = contentChild("endDate", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "end_date" } : (
      /* istanbul ignore next */
      {}
    )), { read: NgControl }));
    this.from = computed(
      () => {
        const from = this.from_date();
        return from !== void 0 ? from : startOfDay(/* @__PURE__ */ new Date()).valueOf();
      },
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.until = computed(
      () => {
        return this.to_date();
      },
      ...ngDevMode ? [{ debugName: "until" }] : (
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
  }
  setStartDate(date) {
    const start_date = this.start_date();
    if (!start_date)
      return;
    start_date.control.setValue(date);
  }
  setEndDate(date) {
    this._tooltip()?.close();
    const end_date = this.end_date();
    if (!end_date)
      return;
    end_date.control.setValue(date);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DateRangeFieldComponent_BaseFactory;
      return function DateRangeFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275DateRangeFieldComponent_BaseFactory || (\u0275DateRangeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateRangeFieldComponent)))(__ngFactoryType__ || _DateRangeFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangeFieldComponent, selectors: [["date-range-field"]], contentQueries: function DateRangeFieldComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.start_date, _c0, 5, NgControl)(dirIndex, ctx.end_date, _c1, 5, NgControl);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, viewQuery: function DateRangeFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], disabled: [1, "disabled"], short: [1, "short"] }, features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c3, decls: 16, vars: 12, consts: [["calendar_picker", ""], ["matRipple", "", "type", "button", "role", "date-picker", "customTooltip", "", "yPosition", "top", 1, "border-neutral", "outline-base-content", "hover:border-base-content", "flex", "min-w-max", "items-center", "space-x-2", "rounded-sm", "border", "px-4", "py-2", "focus:outline-2", 3, "content", "disabled"], [1, "flex-1", "whitespace-nowrap"], [1, "text-2xl"], [1, "hidden"], [1, "bg-base-100", "relative", "w-73", "rounded-sm", "px-2", "py-4"], [3, "startChange", "endChange", "month", "from", "to", "offset_weekday"]], template: function DateRangeFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275elementStart(0, "button", 1)(1, "div", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5, "\u2013");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "icon", 3);
        \u0275\u0275text(10, "today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4);
        \u0275\u0275projection(12);
        \u0275\u0275projection(13, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, DateRangeFieldComponent_ng_template_14_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const calendar_picker_r3 = \u0275\u0275reference(15);
        \u0275\u0275classProp("opacity-30", ctx.disabled());
        \u0275\u0275property("content", calendar_picker_r3)("disabled", ctx.disabled());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, ctx.start_date()?.value || ctx.now, "MMM d, yyyy"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, ctx.end_date()?.value || ctx.now, "MMM d, yyyy"), " ");
      }
    }, dependencies: [
      CommonModule,
      DateRangeCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeFieldComponent, [{
    type: Component,
    args: [{ selector: "date-range-field", template: `
        <button
            matRipple
            class="border-neutral outline-base-content hover:border-base-content flex min-w-max items-center space-x-2 rounded-sm border px-4 py-2 focus:outline-2"
            type="button"
            role="date-picker"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
        >
            <div class="flex-1 whitespace-nowrap">
                {{ start_date()?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <div>&ndash;</div>
            <div class="flex-1 whitespace-nowrap">
                {{ end_date()?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <icon class="text-2xl">today</icon>
        </button>
        <div class="hidden">
            <ng-content select="input[startDate]"></ng-content>
            <ng-content select="input[endDate]"></ng-content>
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-73 rounded-sm px-2 py-4">
                <date-range-calendar
                    [month]="start_date()?.control?.value || now"
                    [from]="from()"
                    [to]="until()"
                    [offset_weekday]="week_start()"
                    (startChange)="setStartDate($event)"
                    (endChange)="setEndDate($event)"
                ></date-range-calendar>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      DateRangeCalendarComponent,
      IconComponent,
      CustomTooltipComponent
    ] }]
  }], null, { from_date: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to_date: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], short: [{ type: Input, args: [{ isSignal: true, alias: "short", required: false }] }], start_date: [{ type: ContentChild, args: ["startDate", __spreadProps(__spreadValues({}, { read: NgControl }), { isSignal: true })] }], end_date: [{ type: ContentChild, args: ["endDate", __spreadProps(__spreadValues({}, { read: NgControl }), { isSignal: true })] }], _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangeFieldComponent, { className: "DateRangeFieldComponent", filePath: "libs/form-fields/src/lib/date-range-field.component.ts", lineNumber: 65 });
})();

export {
  DateRangeFieldComponent
};
//# sourceMappingURL=chunk-QPMCRWGX.js.map
