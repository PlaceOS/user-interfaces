import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  forwardRef,
  input,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresolveWindow,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-FG7LXQD4.js";

// libs/form-fields/src/lib/counter.component.ts
function CounterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value()) : ctx_r0.value()) || "0", " ");
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
    this.shift_key = signal(
      false,
      ...ngDevMode ? [{ debugName: "shift_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ctrl_key = signal(
      false,
      ...ngDevMode ? [{ debugName: "ctrl_key" }] : (
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
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (d) => this.disabled.set(d);
  }
  /**
   * Add the `step` to the current value
   */
  add() {
    let value = this.value();
    if (!value) {
      value = this.min() || 0;
    }
    const step = this.ctrl_key() ? 100 * this.step() : this.shift_key() ? 10 * this.step() : this.step() || 1;
    value += step;
    if (value > this.max()) {
      value = this.max() || 10;
    }
    this.setValue(value);
  }
  /** Remove the `step` from the current value */
  remove() {
    let value = this.value();
    if (!value) {
      value = this.min() || 0;
    }
    const step = this.ctrl_key() ? 100 * this.step() : this.shift_key() ? 10 * this.step() : this.step() || 1;
    value -= step;
    if (value < this.min()) {
      value = this.min() || 0;
    }
    this.setValue(value);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterComponent, selectors: [["a-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _CounterComponent),
        multi: true
      }
    ])], decls: 10, vars: 6, consts: [["counter", "", 1, "flex", "items-center", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", 3, "click", "disabled"], ["value", "", 1, "border-secondary", "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-none", "border", "p-2", "focus-within:z-20"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", 3, "click", "disabled"]], template: function CounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("keydown.shift", function CounterComponent_Template_div_keydown_shift_0_listener() {
          return ctx.shift_key.set(true);
        }, \u0275\u0275resolveWindow)("keydown.control", function CounterComponent_Template_div_keydown_control_0_listener() {
          return ctx.ctrl_key.set(true);
        }, \u0275\u0275resolveWindow)("keydown.meta", function CounterComponent_Template_div_keydown_meta_0_listener() {
          return ctx.ctrl_key.set(true);
        }, \u0275\u0275resolveWindow)("keyup.shift", function CounterComponent_Template_div_keyup_shift_0_listener() {
          return ctx.shift_key.set(false);
        }, \u0275\u0275resolveWindow)("keyup.control", function CounterComponent_Template_div_keyup_control_0_listener() {
          return ctx.ctrl_key.set(false);
        }, \u0275\u0275resolveWindow)("keyup.meta", function CounterComponent_Template_div_keyup_meta_0_listener() {
          return ctx.ctrl_key.set(false);
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(1, "button", 1);
        \u0275\u0275listener("click", function CounterComponent_Template_button_click_1_listener() {
          return ctx.remove();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275conditionalCreate(5, CounterComponent_Conditional_5_Template, 2, 1, "span");
        \u0275\u0275elementStart(6, "input", 3);
        \u0275\u0275listener("ngModelChange", function CounterComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.value.set($event);
        })("focus", function CounterComponent_Template_input_focus_6_listener() {
          return ctx.focused.set(true);
        })("blur", function CounterComponent_Template_input_blur_6_listener() {
          ctx.setValue(+ctx.value());
          return ctx.focused.set(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function CounterComponent_Template_button_click_7_listener() {
          return ctx.add();
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("disabled", ctx.disabled());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.value() || ctx.value() === ctx.min());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.focused() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.value());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.value() === ctx.max());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 30%;\n}\n\n/*# sourceMappingURL=counter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{ selector: "a-counter", template: `
        <div
            counter
            class="flex items-center text-base"
            (window:keydown.shift)="shift_key.set(true)"
            (window:keydown.control)="ctrl_key.set(true)"
            (window:keydown.meta)="ctrl_key.set(true)"
            (window:keyup.shift)="shift_key.set(false)"
            (window:keyup.control)="ctrl_key.set(false)"
            (window:keyup.meta)="ctrl_key.set(false)"
            [class.disabled]="disabled()"
        >
            <button
                decrease
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l rounded-r-none border"
                [disabled]="!value() || value() === min()"
                (click)="remove()"
            >
                <icon>remove</icon>
            </button>
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-none border p-2 focus-within:z-20"
            >
                @if (!focused()) {
                    <span>
                        {{
                            (render_fn() ? render_fn()(value()) : value()) ||
                                '0'
                        }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 rounded-none p-2 opacity-0 focus:opacity-100"
                    [ngModel]="value()"
                    (ngModelChange)="value.set($event)"
                    (focus)="focused.set(true)"
                    (blur)="setValue(+value()); focused.set(false)"
                    limitInput
                />
            </div>
            <button
                increase
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l-none rounded-r border"
                [disabled]="value() === max()"
                (click)="add()"
            >
                <icon>add</icon>
            </button>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CounterComponent),
        multi: true
      }
    ], imports: [FormsModule, IconComponent], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 30%;\n}\n/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=counter.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], render_fn: [{ type: Input, args: [{ isSignal: true, alias: "render_fn", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "libs/form-fields/src/lib/counter.component.ts", lineNumber: 86 });
})();

export {
  CounterComponent
};
//# sourceMappingURL=chunk-Z5ZYGRRE.js.map
