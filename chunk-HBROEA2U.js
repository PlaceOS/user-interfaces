import {
  DateCalendarComponent
} from "./chunk-JIKO7ZGR.js";
import {
  isSameMonth
} from "./chunk-TPVLFHRT.js";
import {
  parse
} from "./chunk-UEYLNCCC.js";
import {
  subDays
} from "./chunk-H3PURLGK.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  FormsModule,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  Output,
  Router,
  TranslatePipe,
  addDays,
  computed,
  endOfWeek,
  format,
  inject,
  input,
  isSameDay,
  isValid,
  linkedSignal,
  normalizeDates,
  output,
  setClassMetadata,
  startOfMinute,
  startOfWeek,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HZ6PXTLM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/isSameYear.js
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}

// apps/concierge/src/app/ui/date-options.component.ts
function DateOptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "icon");
    \u0275\u0275text(2, "today");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const calendar_picker_r2 = \u0275\u0275reference(13);
    \u0275\u0275classProp("pointer-events-none", ctx_r0.disabled())("opacity-30", ctx_r0.disabled());
    \u0275\u0275property("content", calendar_picker_r2);
  }
}
function DateOptionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function DateOptionsComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextDay());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_right");
    \u0275\u0275elementEnd()();
  }
}
function DateOptionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function DateOptionsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.display_date(), "E, MMM d, y"), " ");
  }
}
function DateOptionsComponent_Conditional_9_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const start_r4 = \u0275\u0275readContextLet(0);
    const end_r5 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, start_r4, "MMM d"), " - ", \u0275\u0275pipeBind2(2, 5, end_r5, "d, y"), " ");
  }
}
function DateOptionsComponent_Conditional_9_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const start_r4 = \u0275\u0275readContextLet(0);
    const end_r5 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, start_r4, "MMM d"), " - ", \u0275\u0275pipeBind2(2, 5, end_r5, "MMM d, y"), " ");
  }
}
function DateOptionsComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DateOptionsComponent_Conditional_9_Conditional_2_Conditional_0_Template, 3, 8)(1, DateOptionsComponent_Conditional_9_Conditional_2_Conditional_1_Template, 3, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.is_same_month() ? 0 : 1);
  }
}
function DateOptionsComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const start_r4 = \u0275\u0275readContextLet(0);
    const end_r5 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, start_r4, "mediumDate"), " - ", \u0275\u0275pipeBind2(2, 5, end_r5, "mediumDate"), " ");
  }
}
function DateOptionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275conditionalCreate(2, DateOptionsComponent_Conditional_9_Conditional_2_Template, 2, 1)(3, DateOptionsComponent_Conditional_9_Conditional_3_Template, 3, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275storeLet(ctx_r0.display_period().start);
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r0.display_period().end);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_same_year() ? 2 : 3);
  }
}
function DateOptionsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function DateOptionsComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextDay());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_right");
    \u0275\u0275elementEnd()();
  }
}
function DateOptionsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 9)(2, "icon");
    \u0275\u0275text(3, "today");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const calendar_picker_r2 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275classProp("pointer-events-none", ctx_r0.disabled())("opacity-30", ctx_r0.disabled());
    \u0275\u0275property("content", calendar_picker_r2);
  }
}
function DateOptionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "date-calendar", 11);
    \u0275\u0275listener("ngModelChange", function DateOptionsComponent_ng_template_12_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date())("offset_weekday", ctx_r0.week_start());
    \u0275\u0275control();
  }
}
var DateOptionsComponent = class _DateOptionsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.is_new = input(
      false,
      ...ngDevMode ? [{ debugName: "is_new" }] : (
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
    this.week_start = input(
      0,
      ...ngDevMode ? [{ debugName: "week_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dateInput = input(Date.now(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "dateInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "date" }));
    this.date = linkedSignal(
      this.dateInput,
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_mode = input(
      "day",
      ...ngDevMode ? [{ debugName: "display_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.step = input(
      1,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_today = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_today" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dateChange = output();
    this.previousDay = () => this.setDate(subDays(this.date(), this.step()).valueOf());
    this.nextDay = () => this.setDate(addDays(this.date(), this.step()).valueOf());
    this.is_today = computed(
      () => this.display_mode() === "day" && isSameDay(this.date(), Date.now()) && !this.hide_today(),
      ...ngDevMode ? [{ debugName: "is_today" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_date = computed(
      () => this._validDate(this.date()),
      ...ngDevMode ? [{ debugName: "display_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_period = computed(
      () => {
        const date = this.display_date();
        const start = startOfWeek(date, {
          weekStartsOn: this._week_start
        });
        const end = endOfWeek(date, {
          weekStartsOn: this._week_start
        });
        return { start, end };
      },
      ...ngDevMode ? [{ debugName: "display_period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_same_month = computed(
      () => {
        const { start, end } = this.display_period();
        return isSameMonth(start, end);
      },
      ...ngDevMode ? [{ debugName: "is_same_month" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_same_year = computed(
      () => {
        const { start, end } = this.display_period();
        return isSameYear(start, end);
      },
      ...ngDevMode ? [{ debugName: "is_same_year" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("date")) {
        this.timeout("set-date", () => {
          const date = parse(params.get("date") || "", "yyyy-MM-dd", /* @__PURE__ */ new Date()).valueOf();
          this.date.set(this._validDate(date, this.date()));
          this.dateChange.emit(this.date());
        });
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes.date) {
      this.setDate(this._validDate(this.date()), false);
    }
  }
  setDate(date = Date.now(), emit = true) {
    date = startOfMinute(this._validDate(date)).valueOf();
    this.date.set(date);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { date: format(date, "yyyy-MM-dd") },
      queryParamsHandling: "merge"
    });
    if (emit)
      this.dateChange.emit(this.date());
    this.timeout("clear-set-date", () => this.clearTimeout("set-date"), 100);
  }
  get _week_start() {
    return this.week_start() || 0;
  }
  _validDate(date, fallback = Date.now()) {
    if (isValid(date))
      return date;
    if (isValid(fallback))
      return fallback;
    return Date.now();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DateOptionsComponent_BaseFactory;
      return function DateOptionsComponent_Factory(__ngFactoryType__) {
        return (\u0275DateOptionsComponent_BaseFactory || (\u0275DateOptionsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateOptionsComponent)))(__ngFactoryType__ || _DateOptionsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateOptionsComponent, selectors: [["date-options"]], inputs: { is_new: [1, "is_new"], disabled: [1, "disabled"], week_start: [1, "week_start"], dateInput: [1, "date", "dateInput"], display_mode: [1, "display_mode"], step: [1, "step"], hide_today: [1, "hide_today"] }, outputs: { dateChange: "dateChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 14, vars: 12, consts: [["calendar_picker", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 1, "relative", "rounded-sm", 3, "content", "pointer-events-none", "opacity-30"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "rounded-sm", 3, "click"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "rounded-sm"], ["matRipple", "", 1, "display", "hover:bg-base-200", "relative", "mx-4", "flex", "h-12", "items-center", "justify-center", "rounded-sm", "leading-none", 3, "dblclick"], [1, "text-info", "absolute", "top-1", "left-1/2", "-translate-x-1/2", "text-xs"], [1, "relative", "px-1"], ["matTooltip", "Pick Date"], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 1, "relative", "rounded-sm", 3, "content"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 3, "content"], [1, "bg-base-100", "relative", "w-76", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "offset_weekday"]], template: function DateOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DateOptionsComponent_Conditional_0_Template, 3, 5, "button", 1);
        \u0275\u0275elementStart(1, "button", 2);
        \u0275\u0275listener("click", function DateOptionsComponent_Template_button_click_1_listener() {
          return ctx.previousDay();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "keyboard_arrow_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, DateOptionsComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("dblclick", function DateOptionsComponent_Template_button_dblclick_5_listener() {
          return ctx.setDate();
        });
        \u0275\u0275conditionalCreate(6, DateOptionsComponent_Conditional_6_Template, 3, 3, "div", 5);
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275conditionalCreate(8, DateOptionsComponent_Conditional_8_Template, 2, 4)(9, DateOptionsComponent_Conditional_9_Template, 4, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, DateOptionsComponent_Conditional_10_Template, 3, 0, "button", 3);
        \u0275\u0275conditionalCreate(11, DateOptionsComponent_Conditional_11_Template, 4, 5, "div", 7);
        \u0275\u0275template(12, DateOptionsComponent_ng_template_12_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.is_new() ? 0 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.is_new() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("w-30", ctx.display_mode() === "day")("w-48", ctx.display_mode() === "week");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_today() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("top-2", ctx.is_today());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.display_mode() === "day" ? 8 : 9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_new() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_new() ? 11 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      CustomTooltipComponent,
      DateCalendarComponent,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\ninput[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=date-options.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateOptionsComponent, [{
    type: Component,
    args: [{ selector: "date-options", template: `
        @if (is_new()) {
            <button
                icon
                matRipple
                class="relative rounded-sm"
                customTooltip
                [content]="calendar_picker"
                yPosition="top"
                [class.pointer-events-none]="disabled()"
                [class.opacity-30]="disabled()"
            >
                <icon>today</icon>
            </button>
        }
        <button
            icon
            matRipple
            class="hover:bg-base-200 rounded-sm"
            (click)="previousDay()"
        >
            <icon>keyboard_arrow_left</icon>
        </button>
        @if (!is_new()) {
            <button
                icon
                matRipple
                class="hover:bg-base-200 rounded-sm"
                (click)="nextDay()"
            >
                <icon>keyboard_arrow_right</icon>
            </button>
        }
        <button
            matRipple
            (dblclick)="setDate()"
            class="display hover:bg-base-200 relative mx-4 flex h-12 items-center justify-center rounded-sm leading-none"
            [class.w-30]="display_mode() === 'day'"
            [class.w-48]="display_mode() === 'week'"
        >
            @if (is_today()) {
                <div
                    class="text-info absolute top-1 left-1/2 -translate-x-1/2 text-xs"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="relative px-1" [class.top-2]="is_today()">
                @if (display_mode() === 'day') {
                    {{  display_date() | date:'E, MMM d, y' }}
                }@else {
                    @let start = display_period().start;
                    @let end = display_period().end;
                    @if(is_same_year()) {
                        @if (is_same_month()) {
                            {{ start | date:'MMM d' }} - {{ end | date:'d, y' }}
                        } @else {
                            {{ start | date:'MMM d' }} - {{ end | date:'MMM d, y' }}
                        }
                    } @else {
                        {{ start | date:'mediumDate' }} - {{ end | date:'mediumDate' }}
                    }
                }
            </div>
        </button>
        @if (is_new()) {
            <button
                icon
                matRipple
                class="hover:bg-base-200 rounded-sm"
                (click)="nextDay()"
            >
                <icon>keyboard_arrow_right</icon>
            </button>
        }
        @if (!is_new()) {
            <div matTooltip="Pick Date">
                <button
                    icon
                    default
                    matRipple
                    customTooltip
                    [content]="calendar_picker"
                    yPosition="top"
                    [class.pointer-events-none]="disabled()"
                    [class.opacity-30]="disabled()"
                >
                    <icon>today</icon>
                </button>
            </div>
        }
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-76 rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date()"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setDate($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      FormsModule,
      MatRippleModule,
      TranslatePipe,
      CustomTooltipComponent,
      DateCalendarComponent,
      IconComponent,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;872692889ab3acf59963c7a3d51f716f54f9a99c1b6701008a844ae527a55c0a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/date-options.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n}\ninput {\n  opacity: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=date-options.component.css.map */\n"] }]
  }], null, { is_new: [{ type: Input, args: [{ isSignal: true, alias: "is_new", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], dateInput: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], display_mode: [{ type: Input, args: [{ isSignal: true, alias: "display_mode", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], hide_today: [{ type: Input, args: [{ isSignal: true, alias: "hide_today", required: false }] }], dateChange: [{ type: Output, args: ["dateChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateOptionsComponent, { className: "DateOptionsComponent", filePath: "apps/concierge/src/app/ui/date-options.component.ts", lineNumber: 167 });
})();

export {
  DateOptionsComponent
};
//# sourceMappingURL=chunk-HBROEA2U.js.map
