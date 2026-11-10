import {
  TranslatePipe
} from "./chunk-5DQQWHAA.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  provideValueAccessor
} from "./chunk-AX26ZDG4.js";
import {
  Component,
  Input,
  Output,
  computed,
  input,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AQIWUFR7.js";

// libs/form-fields/src/lib/counter.component.ts
function CounterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CounterComponent_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove($event));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.at_min());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "COMMON.DECREASE"));
  }
}
function CounterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("px-3", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.render_fn() ? ctx_r1.render_fn()(ctx_r1.value()) : ctx_r1.value()) || "0", " ");
  }
}
function CounterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function CounterComponent_Conditional_5_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add($event));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function CounterComponent_Conditional_5_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove($event));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.at_max());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "COMMON.INCREASE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.at_min());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 6, "COMMON.DECREASE"));
  }
}
function CounterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CounterComponent_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add($event));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.at_max());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "COMMON.INCREASE"));
  }
}
var CounterComponent = class _CounterComponent {
  constructor() {
    this.step = input(
      1,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max = input(
      999,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min = input(
      0,
      ...ngDevMode ? [{ debugName: "min" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.render_fn = input(
      void 0,
      ...ngDevMode ? [{ debugName: "render_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input_id = input(
      void 0,
      ...ngDevMode ? [{ debugName: "input_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.compact = input(
      false,
      ...ngDevMode ? [{ debugName: "compact" }] : (
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
    this.value = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focused = signal(
      false,
      ...ngDevMode ? [{ debugName: "focused" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.at_min = computed(
      () => (this.value() ?? this.min()) <= this.min(),
      ...ngDevMode ? [{ debugName: "at_min" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.at_max = computed(
      () => (this.value() ?? this.min()) >= this.max(),
      ...ngDevMode ? [{ debugName: "at_max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (d) => this.disabled.set(d);
  }
  /**
   * Add the `step` to the current value. Hold shift for 10 steps, or
   * ctrl/cmd for 100 steps.
   */
  add(event) {
    this.setValue(this._current() + this._stepSize(event));
  }
  /** Remove the `step` from the current value. Modifier keys work as for `add` */
  remove(event) {
    this.setValue(this._current() - this._stepSize(event));
  }
  /**
   * Current value as a number. While the user types, the input holds text,
   * so convert it. An empty value counts as the minimum.
   */
  _current() {
    const value = this.value();
    return value == null || value === "" ? this.min() : Number(value);
  }
  /** Step with ArrowUp and ArrowDown. Modifier keys work as for `add` */
  onKeydown(event) {
    if (event.key === "ArrowUp")
      this.add(event);
    else if (event.key === "ArrowDown")
      this.remove(event);
    else
      return;
    event.preventDefault();
  }
  /** Size of one change, from the modifier keys held for the event */
  _stepSize(event) {
    const step = this.step() || 1;
    const keys = event;
    if (keys?.ctrlKey || keys?.metaKey)
      return 100 * step;
    if (keys?.shiftKey)
      return 10 * step;
    return step;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (!Number.isFinite(new_value))
      new_value = this.min();
    if (new_value < this.min())
      new_value = this.min();
    if (new_value > this.max())
      new_value = this.max();
    if (new_value / this.step() % 1 !== 0) {
      new_value = Math.round(new_value * (1 / this.step())) / (1 / this.step());
    }
    this.value.set(new_value);
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  static {
    this.\u0275fac = function CounterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CounterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterComponent, selectors: [["a-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"], input_id: [1, "input_id"], compact: [1, "compact"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([provideValueAccessor(() => _CounterComponent)])], decls: 7, vars: 18, consts: [["counter", "", 1, "flex", "items-center", "text-base"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", 3, "disabled"], ["value", "", 1, "border-secondary", "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "border", "focus-within:z-20"], [3, "px-3"], ["type", "text", "inputmode", "decimal", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "keydown", "focus", "blur", "disabled", "ngModel"], [1, "flex", "flex-col", "justify-center", "space-y-1"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", 3, "disabled"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", 3, "click", "disabled"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", 3, "click", "disabled"]], template: function CounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, CounterComponent_Conditional_1_Template, 4, 4, "button", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275conditionalCreate(3, CounterComponent_Conditional_3_Template, 2, 3, "span", 3);
        \u0275\u0275elementStart(4, "input", 4);
        \u0275\u0275listener("ngModelChange", function CounterComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.value.set($event);
        })("keydown", function CounterComponent_Template_input_keydown_4_listener($event) {
          return ctx.onKeydown($event);
        })("focus", function CounterComponent_Template_input_focus_4_listener() {
          return ctx.focused.set(true);
        })("blur", function CounterComponent_Template_input_blur_4_listener() {
          ctx.setValue(+ctx.value());
          return ctx.focused.set(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, CounterComponent_Conditional_5_Template, 9, 8, "div", 5)(6, CounterComponent_Conditional_6_Template, 4, 4, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("gap-1", ctx.compact())("disabled", ctx.disabled());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.compact() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("rounded-none", !ctx.compact())("p-2", !ctx.compact())("rounded-sm", ctx.compact())("p-1", ctx.compact());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.focused() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.disabled())("ngModel", ctx.value());
        \u0275\u0275attribute("id", ctx.input_id() || null);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.compact() ? 5 : 6);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, TranslatePipe], styles: ["\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 30%;\n}\n\n/*# sourceMappingURL=counter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{ selector: "a-counter", template: `
        <div
            counter
            class="flex items-center text-base"
            [class.gap-1]="compact()"
            [class.disabled]="disabled()"
        >
            @if (!compact()) {
                <button
                    decrease
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-12 w-12 rounded-l rounded-r-none border"
                    [disabled]="disabled() || at_min()"
                    (click)="remove($event)"
                    [attr.aria-label]="'COMMON.DECREASE' | translate"
                >
                    <icon>remove</icon>
                </button>
            }
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center border focus-within:z-20"
                [class.rounded-none]="!compact()"
                [class.p-2]="!compact()"
                [class.rounded-sm]="compact()"
                [class.p-1]="compact()"
            >
                @if (!focused()) {
                    <span [class.px-3]="compact()">
                        {{
                            (render_fn() ? render_fn()(value()) : value()) ||
                                '0'
                        }}
                    </span>
                }
                <input
                    type="text"
                    inputmode="decimal"
                    class="absolute inset-0 rounded-none p-2 opacity-0 focus:opacity-100"
                    [attr.id]="input_id() || null"
                    [disabled]="disabled()"
                    [ngModel]="value()"
                    (ngModelChange)="value.set($event)"
                    (keydown)="onKeydown($event)"
                    (focus)="focused.set(true)"
                    (blur)="setValue(+value()); focused.set(false)"
                />
            </div>
            @if (compact()) {
                <div class="flex flex-col justify-center space-y-1">
                    <button
                        increase
                        icon
                        matRipple
                        type="button"
                        class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                        [disabled]="disabled() || at_max()"
                        (click)="add($event)"
                        [attr.aria-label]="'COMMON.INCREASE' | translate"
                    >
                        <icon>add</icon>
                    </button>
                    <button
                        decrease
                        icon
                        matRipple
                        type="button"
                        class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                        [disabled]="disabled() || at_min()"
                        (click)="remove($event)"
                        [attr.aria-label]="'COMMON.DECREASE' | translate"
                    >
                        <icon>remove</icon>
                    </button>
                </div>
            } @else {
                <button
                    increase
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-12 w-12 rounded-l-none rounded-r border"
                    [disabled]="disabled() || at_max()"
                    (click)="add($event)"
                    [attr.aria-label]="'COMMON.INCREASE' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `, providers: [provideValueAccessor(() => CounterComponent)], imports: [FormsModule, IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 30%;\n}\n/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=counter.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], render_fn: [{ type: Input, args: [{ isSignal: true, alias: "render_fn", required: false }] }], input_id: [{ type: Input, args: [{ isSignal: true, alias: "input_id", required: false }] }], compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "libs/form-fields/src/lib/counter.component.ts", lineNumber: 117 });
})();

export {
  CounterComponent
};
//# debugId=f28d6dd0-a461-52ce-9a12-737426c3a68f
//# sourceMappingURL=chunk-OREHM7KF.js.map
