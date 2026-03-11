import {
  subDays
} from "./chunk-J6T4VBYH.js";
import {
  DateCalendarComponent
} from "./chunk-QH62YOE5.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  FormsModule,
  IconComponent,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Router,
  TranslatePipe,
  addDays,
  format,
  inject,
  input,
  isSameDay,
  model,
  output,
  parse,
  setClassMetadata,
  startOfMinute,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Q7N7E4GW.js";

// apps/concierge/src/app/ui/date-options.component.ts
function DateOptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "icon");
    \u0275\u0275text(2, "today");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const calendar_picker_r3 = \u0275\u0275reference(13);
    \u0275\u0275classProp("pointer-events-none", ctx_r1.disabled())("opacity-60", ctx_r1.disabled());
    \u0275\u0275property("content", calendar_picker_r3);
  }
}
function DateOptionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function DateOptionsComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextDay());
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
function DateOptionsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function DateOptionsComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextDay());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_right");
    \u0275\u0275elementEnd()();
  }
}
function DateOptionsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9)(1, "icon");
    \u0275\u0275text(2, "today");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const calendar_picker_r3 = \u0275\u0275reference(13);
    \u0275\u0275classProp("pointer-events-none", ctx_r1.disabled())("opacity-60", ctx_r1.disabled());
    \u0275\u0275property("content", calendar_picker_r3);
  }
}
function DateOptionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "date-calendar", 11);
    \u0275\u0275listener("ngModelChange", function DateOptionsComponent_ng_template_12_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.date())("offset_weekday", ctx_r1.week_start());
  }
}
var _DateOptionsComponent = class _DateOptionsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.is_new = input(false);
    this.disabled = input(false);
    this.week_start = input(0);
    this.date = model(Date.now());
    this.step = input(1);
    this.hide_today = input(false);
    this.dateChange = output();
    this.previousDay = () => this.setDate(subDays(this.date(), this.step()).valueOf());
    this.nextDay = () => this.setDate(addDays(this.date(), this.step()).valueOf());
  }
  get is_today() {
    return isSameDay(this.date(), Date.now()) && !this.hide_today();
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("date")) {
        this.timeout("set-date", () => {
          this.date.set(parse(params.get("date"), "yyyy-MM-dd", 0).valueOf());
          this.dateChange.emit(this.date());
        });
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes.date) {
      this.setDate(this.date() || Date.now(), false);
    }
  }
  setDate(date = Date.now(), emit = true) {
    date = startOfMinute(date).valueOf();
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
};
_DateOptionsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DateOptionsComponent_BaseFactory;
  return function DateOptionsComponent_Factory(__ngFactoryType__) {
    return (\u0275DateOptionsComponent_BaseFactory || (\u0275DateOptionsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateOptionsComponent)))(__ngFactoryType__ || _DateOptionsComponent);
  };
})();
_DateOptionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateOptionsComponent, selectors: [["date-options"]], inputs: { is_new: [1, "is_new"], disabled: [1, "disabled"], week_start: [1, "week_start"], date: [1, "date"], step: [1, "step"], hide_today: [1, "hide_today"] }, outputs: { date: "dateChange", dateChange: "dateChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 14, vars: 11, consts: [["calendar_picker", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 1, "relative", "rounded-sm", 3, "content", "pointer-events-none", "opacity-60"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "rounded-sm", 3, "click"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "rounded-sm"], ["matRipple", "", 1, "display", "hover:bg-base-200", "relative", "mx-4", "flex", "h-12", "w-28", "items-center", "justify-center", "rounded-sm", "leading-none", 3, "dblclick"], [1, "text-info", "absolute", "top-1", "left-1/2", "-translate-x-1/2", "text-xs"], [1, "relative"], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 1, "border-base-200", "relative", "rounded-sm", "border", 3, "content", "pointer-events-none", "opacity-60"], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 1, "relative", "rounded-sm", 3, "content"], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "top", 1, "border-base-200", "relative", "rounded-sm", "border", 3, "content"], [1, "bg-base-100", "relative", "w-76", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "offset_weekday"]], template: function DateOptionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, DateOptionsComponent_Conditional_0_Template, 3, 5, "button", 1);
    \u0275\u0275elementStart(1, "button", 2);
    \u0275\u0275listener("click", function DateOptionsComponent_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.previousDay());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, DateOptionsComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("dblclick", function DateOptionsComponent_Template_button_dblclick_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDate());
    });
    \u0275\u0275conditionalCreate(6, DateOptionsComponent_Conditional_6_Template, 3, 3, "div", 5);
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, DateOptionsComponent_Conditional_10_Template, 3, 0, "button", 3);
    \u0275\u0275conditionalCreate(11, DateOptionsComponent_Conditional_11_Template, 3, 5, "button", 7);
    \u0275\u0275template(12, DateOptionsComponent_ng_template_12_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.is_new() ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.is_new() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.is_today ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("top-2", ctx.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 8, ctx.date(), "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.is_new() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.is_new() ? 11 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  CustomTooltipComponent,
  DateCalendarComponent,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\ninput[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=date-options.component.css.map */"] });
var DateOptionsComponent = _DateOptionsComponent;
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
                [class.opacity-60]="disabled()"
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
            class="display hover:bg-base-200 relative mx-4 flex h-12 w-28 items-center justify-center rounded-sm leading-none"
        >
            @if (is_today) {
                <div
                    class="text-info absolute top-1 left-1/2 -translate-x-1/2 text-xs"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="relative" [class.top-2]="is_today">
                {{ date() | date: 'mediumDate' }}
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
            <button
                icon
                matRipple
                class="border-base-200 relative rounded-sm border"
                customTooltip
                [content]="calendar_picker"
                yPosition="top"
                [class.pointer-events-none]="disabled()"
                [class.opacity-60]="disabled()"
            >
                <icon>today</icon>
            </button>
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
      IconComponent
    ], styles: ["/* angular:styles/component:css;872692889ab3acf59963c7a3d51f716f54f9a99c1b6701008a844ae527a55c0a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/date-options.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n}\ninput {\n  opacity: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=date-options.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateOptionsComponent, { className: "DateOptionsComponent", filePath: "apps/concierge/src/app/ui/date-options.component.ts", lineNumber: 139 });
})();

export {
  DateOptionsComponent
};
//# sourceMappingURL=chunk-2VWEHOMS.js.map
