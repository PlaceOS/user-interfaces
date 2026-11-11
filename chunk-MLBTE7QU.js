import {
  isSameMonth,
  startOfMonth
} from "./chunk-3ZZE5ZU4.js";
import {
  TranslatePipe
} from "./chunk-MQVSSHGI.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import {
  differenceInCalendarMonths,
  endOfMonth,
  provideValueAccessor
} from "./chunk-2TPDHADH.js";
import {
  AsyncHandler,
  SettingsService,
  addDays,
  addMonths,
  endOfDay,
  isBefore,
  isValid,
  normalizeDates,
  set,
  startOfDay,
  startOfWeek,
  toDate
} from "./chunk-4USKPYHW.js";
import {
  MatRippleModule
} from "./chunk-ZT4WQV5M.js";
import {
  MatRipple
} from "./chunk-EAD6DYEJ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  SlicePipe,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AQIWUFR7.js";

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
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

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DateCalendarComponent_For_16_Template(rf, ctx) {
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
function DateCalendarComponent_For_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275listener("click", function DateCalendarComponent_For_20_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275conditionalCreate(4, DateCalendarComponent_For_20_Conditional_4_Template, 1, 0, "div", 11);
    \u0275\u0275element(5, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-200", day_r3.id !== ctx_r3.active_date())("text-base-300!", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date())("text-base-content", day_r3.id !== ctx_r3.active_date())("bg-secondary", day_r3.id === ctx_r3.active_date())("font-normal", day_r3.id !== ctx_r3.active_date());
    \u0275\u0275property("disabled", ctx_r3.disabled() || day_r3.id < ctx_r3.from() || day_r3.id > ctx_r3.to());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 18, day_r3.id, "fullDate"))("aria-pressed", day_r3.id === ctx_r3.active_date())("aria-current", ctx_r3.today === day_r3.id ? "date" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 21, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 4 : -1);
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
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
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
    this.setDisabledState = (s) => this.disabled.set(s);
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
    if (new_value < this.from() || new_value > this.to())
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: [1, "from"], to: [1, "to"], offset_weekday: [1, "offset_weekday"] }, features: [\u0275\u0275ProvidersFeature([provideValueAccessor(() => _DateCalendarComponent)]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 21, vars: 17, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], ["type", "button", 1, "pr-2", "pl-1.5", "font-medium", 3, "dblclick", "disabled"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "type", "button", "name", "schedule-previous-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "type", "button", "name", "schedule-next-month", 3, "click", "disabled"], [1, "border-base-200", "mb-2", "flex", "items-center", "border-b", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "type", "button", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-200", "text-base-300!", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "type", "button", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "border-secondary", "absolute", "-inset-0.5", "z-20", "overflow-hidden", "rounded-full", "border"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("dblclick", function DateCalendarComponent_Template_button_dblclick_2_listener() {
          return ctx.setMonthToCurrent();
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
          return ctx.changeMonth(-1);
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_10_listener() {
          return ctx.changeMonth(1);
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "chevron_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275repeaterCreate(15, DateCalendarComponent_For_16_Template, 3, 4, "div", 7, _forTrack0);
        \u0275\u0275pipe(17, "slice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275repeaterCreate(19, DateCalendarComponent_For_20_Template, 6, 24, "button", 9, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.disabled());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, ctx.display_date(), "LLLL yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.disabled() || ctx.displayed_dates()[0]?.id < ctx.from());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 9, "COMMON.PREVIOUS_MONTH"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.disabled() || ctx.displayed_dates()[34]?.id > ctx.to());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 11, "COMMON.NEXT_MONTH"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(\u0275\u0275pipeBind3(17, 13, ctx.displayed_dates(), 0, 7));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.displayed_dates());
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, SlicePipe, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    type="button"
                    class="pr-2 pl-1.5 font-medium"
                    [disabled]="disabled()"
                    (dblclick)="setMonthToCurrent()"
                >
                    {{ display_date() | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        type="button"
                        name="schedule-previous-month"
                        [disabled]="
                            disabled() || displayed_dates()[0]?.id < from()
                        "
                        (click)="changeMonth(-1)"
                        [attr.aria-label]="'COMMON.PREVIOUS_MONTH' | translate"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        type="button"
                        name="schedule-next-month"
                        [disabled]="
                            disabled() || displayed_dates()[34]?.id > to()
                        "
                        (click)="changeMonth(1)"
                        [attr.aria-label]="'COMMON.NEXT_MONTH' | translate"
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
                        type="button"
                        name="schedule-set-date"
                        [attr.aria-label]="day.id | date: 'fullDate'"
                        [attr.aria-pressed]="day.id === active_date()"
                        [attr.aria-current]="today === day.id ? 'date' : null"
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
                        [disabled]="
                            disabled() || day.id < from() || day.id > to()
                        "
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
    `, providers: [provideValueAccessor(() => DateCalendarComponent)], imports: [CommonModule, IconComponent, MatRippleModule, TranslatePipe] }]
  }], () => [], { from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], offset_weekday: [{ type: Input, args: [{ isSignal: true, alias: "offset_weekday", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "libs/form-fields/src/lib/date-calendar.component.ts", lineNumber: 134 });
})();

export {
  compareAsc,
  differenceInMonths,
  DateCalendarComponent
};
//# debugId=dd4965bb-e6e3-5080-bd0e-a90dbbd085a1
//# sourceMappingURL=chunk-MLBTE7QU.js.map
