import {
  DurationFieldComponent
} from "./chunk-36X5ZAYB.js";
import {
  DateFieldComponent
} from "./chunk-Q3DS54GC.js";
import {
  ImageCarouselComponent
} from "./chunk-RKGM2L4F.js";
import {
  AssetStateService
} from "./chunk-6ZKV2FW4.js";
import {
  SettingsToggleComponent
} from "./chunk-UKJYLCYH.js";
import {
  AuthenticatedImageDirective,
  MatTooltip,
  MatTooltipModule
} from "./chunk-Y42OYCIX.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AssetRequest,
  AsyncHandler,
  FormField,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  NO_RECURR,
  SettingsService,
  addYears,
  disabled,
  firstRecurrenceInstance,
  form,
  formatRecurrence,
  fromBookingRecurrence,
  fromEventRecurrence,
  recurrenceEndDate,
  toBookingRecurrence,
  toEventRecurrence
} from "./chunk-TKBUED64.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  Injector,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  TranslatePipe,
  addDays,
  addMinutes,
  computed,
  differenceInMinutes,
  effect,
  endOfDay,
  forwardRef,
  i18n,
  inject,
  input,
  isMobileSafari,
  model,
  notifyError,
  onFieldChange,
  output,
  randomInt,
  randomString,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKWNTDV3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// libs/assets/src/lib/asset-select-modal/asset-details.component.ts
function AssetDetailsComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.NO_DESCRIPTION"), " ");
  }
}
function AssetDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function AssetDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function AssetDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "section", 8)(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AssetDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item().quantity, $event) || (ctx_r1.item().quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AssetDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.countChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "section", 11)(16, "h2", 12);
    \u0275\u0275text(17, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, AssetDetailsComponent_Conditional_0_Conditional_21_Template, 3, 3, "div", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.item().images);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item().name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.item().available != null ? ctx_r1.item().available : ctx_r1.item().assets?.length) || 0, " Available ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item().quantity);
    \u0275\u0275property("min", 1)("max", (ctx_r1.item().available != null ? ctx_r1.item().available : ctx_r1.item().assets?.length) || 1);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.item().description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.item().description ? 21 : -1);
  }
}
function AssetDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.ASSETS_SELECT"), " ");
  }
}
var AssetDetailsComponent = class _AssetDetailsComponent {
  constructor() {
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      false,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fav = input(
      false,
      ...ngDevMode ? [{ debugName: "fav" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleFav = output();
    this.activeChange = output();
    this.countChange = output();
    this.close = output();
    effect(() => {
      const item = this.item();
      if (item && !item.quantity)
        item.quantity = 1;
    });
  }
  static {
    this.\u0275fac = function AssetDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetDetailsComponent, selectors: [["asset-details"]], inputs: { item: [1, "item"], active: [1, "active"], fav: [1, "fav"] }, outputs: { toggleFav: "toggleFav", activeChange: "activeChange", countChange: "countChange", close: "close" }, decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["image", "", 1, "bg-base-200", "relative", "h-64", "w-full", "sm:h-40"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "close", "", 1, "bg-base-100", "absolute", "top-2", "left-2", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "bg-base-100", "absolute", "top-2", "right-2", 3, "click"], [3, "className"], [1, "h-1/2", "flex-1", "space-y-4", "p-2"], [1, "my-2", "px-2", "text-xl", "font-medium"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "px-2"], [3, "ngModelChange", "ngModel", "min", "max"], ["details", "", 1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-2", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2", "pb-1"], [1, "w-full", "text-center", "opacity-30"], [1, "text-center", "opacity-30"]], template: function AssetDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AssetDetailsComponent_Conditional_0_Template, 22, 11)(1, AssetDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.item() ? 0 : 1);
      }
    }, dependencies: [
      ImageCarouselComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      CounterComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetDetailsComponent, [{
    type: Component,
    args: [{ selector: "asset-details", template: `
        @if (item()) {
            <section image class="bg-base-200 relative h-64 w-full sm:h-40">
                <image-carousel
                    [images]="item().images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    close
                    (click)="close.emit()"
                    class="bg-base-100 absolute top-2 left-2 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-100 absolute top-2 right-2"
                >
                    <icon
                        [className]="
                            fav()
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        "
                        >favorite</icon
                    >
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-4 p-2">
                <h2 class="my-2 px-2 text-xl font-medium">
                    {{ item().name }}
                </h2>
                <section actions class="z-0 flex items-center justify-between">
                    <p class="px-2">
                        {{
                            ($any(item()).available != null
                                ? $any(item()).available
                                : item().assets?.length) || 0
                        }}
                        Available
                    </p>
                    <a-counter
                        [(ngModel)]="item().quantity"
                        (ngModelChange)="countChange.emit($event)"
                        [min]="1"
                        [max]="
                            ($any(item()).available != null
                                ? $any(item()).available
                                : item().assets?.length) || 1
                        "
                    ></a-counter>
                </section>
                <section
                    details
                    class="border-base-400 relative space-y-2 rounded-sm border px-3 pt-2 pb-2"
                >
                    <h2
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                    >
                        Details
                    </h2>
                    <div class="flex items-center space-x-2 px-2 pb-1">
                        <p>{{ item().description }}</p>
                        @if (!item().description) {
                            <div class="w-full text-center opacity-30">
                                {{ 'COMMON.NO_DESCRIPTION' | translate }}
                            </div>
                        }
                    </div>
                </section>
            </div>
        } @else {
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.ASSETS_SELECT' | translate }}
                </p>
            </div>
        }
    `, imports: [
      ImageCarouselComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CounterComponent,
      FormsModule
    ] }]
  }], () => [], { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], fav: [{ type: Input, args: [{ isSignal: true, alias: "fav", required: false }] }], toggleFav: [{ type: Output, args: ["toggleFav"] }], activeChange: [{ type: Output, args: ["activeChange"] }], countChange: [{ type: Output, args: ["countChange"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetDetailsComponent, { className: "AssetDetailsComponent", filePath: "libs/assets/src/lib/asset-select-modal/asset-details.component.ts", lineNumber: 111 });
})();

// libs/assets/src/lib/asset-select-modal/asset-filters-display.component.ts
var AssetFiltersDisplayComponent = class _AssetFiltersDisplayComponent {
  static {
    this.\u0275fac = function AssetFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetFiltersDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetFiltersDisplayComponent, selectors: [["asset-filters-display"]], decls: 0, vars: 0, template: function AssetFiltersDisplayComponent_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "asset-filters-display", template: `` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetFiltersDisplayComponent, { className: "AssetFiltersDisplayComponent", filePath: "libs/assets/src/lib/asset-select-modal/asset-filters-display.component.ts", lineNumber: 8 });
})();

// libs/assets/src/lib/asset-select-modal/asset-filters.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AssetFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.OPTIONS"), " ");
  }
}
function AssetFiltersComponent_Conditional_11_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275property("value", day_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, day_r4.value, "mediumDate"), " ");
  }
}
function AssetFiltersComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 13);
    \u0275\u0275listener("ngModelChange", function AssetFiltersComponent_Conditional_11_Conditional_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset_day.set($event));
    });
    \u0275\u0275repeaterCreate(5, AssetFiltersComponent_Conditional_11_Conditional_3_For_6_Template, 3, 5, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "BOOKINGS.ASSETS_DELIVER_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.offset_day());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.day_options());
  }
}
function AssetFiltersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "settings-toggle", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function AssetFiltersComponent_Conditional_11_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.at_time.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, AssetFiltersComponent_Conditional_11_Conditional_3_Template, 7, 4);
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-duration-field", 11);
    \u0275\u0275listener("ngModelChange", function AssetFiltersComponent_Conditional_11_Template_a_duration_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offset.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 11, "BOOKINGS.ASSETS_DELIVER_TOGGLE"))("ngModel", ctx_r1.at_time())("matTooltip", ctx_r1.exact_tooltip());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.day_options().length > 1 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "BOOKINGS.ASSETS_DELIVER_TIME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.offset())("time", ctx_r1.offset_day() > 0 ? ctx_r1.start_of_date() : ctx_r1.options()?.date)("step", ctx_r1.step_interval())("min", ctx_r1.min_offset())("max", ctx_r1.max_offset() - 1)("use_24hr", ctx_r1.use_24hr());
    \u0275\u0275control();
  }
}
function AssetFiltersComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 15);
    \u0275\u0275listener("ngModelChange", function AssetFiltersComponent_For_17_Template_settings_toggle_ngModelChange_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(item_r6.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", item_r6.name)("ngModel", ctx_r1.category()?.includes(item_r6.id));
    \u0275\u0275control();
  }
}
var AssetFiltersComponent = class _AssetFiltersComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(AssetStateService);
    this._settings = inject(SettingsService);
    this.search = input(
      false,
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.at_time = model(
      false,
      ...ngDevMode ? [{ debugName: "at_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = model(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_day = model(
      0,
      ...ngDevMode ? [{ debugName: "offset_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._min_offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "_min_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._max_offset = signal(
      60,
      ...ngDevMode ? [{ debugName: "_max_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_value = this._state.search;
    this.category = this._state.category;
    this.categories = this._state.category_list;
    this.options = this._state.options;
    this._step_interval = this._settings.signal("assets.step_interval", 5);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._min_offset_setting = this._settings.signal("assets.min_offset", 0);
    this._end_offset = this._settings.signal("assets.end_offset", 0);
    this.exact_tooltip = signal(
      "Deliver at exactly specified time. \nNote that changes to the booking will not be \nreflected in the order if this is set.",
      ...ngDevMode ? [{ debugName: "exact_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_of_date = computed(
      () => startOfDay(addDays(this._state.getOptions().date, this.offset_day())).valueOf(),
      ...ngDevMode ? [{ debugName: "start_of_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_offset = computed(
      () => this.offset_day() > 0 ? 0 : this._min_offset(),
      ...ngDevMode ? [{ debugName: "min_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.step_interval = computed(
      () => this._step_interval(),
      ...ngDevMode ? [{ debugName: "step_interval" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_offset = computed(
      () => {
        const end = Math.min(endOfDay(addDays(this._state.getOptions().date, this.offset_day())).valueOf(), addMinutes(this._state.getOptions().date, this._state.getOptions().duration).valueOf());
        const diff = differenceInMinutes(end, this._state.getOptions().date);
        return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset()));
      },
      ...ngDevMode ? [{ debugName: "max_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = this._use_24hr;
    this.day_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "day_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setSearch = (s) => this._state.setSearch(s);
    this.toggleCategory = (c) => this._state.toggleCategory(c);
    effect(() => {
      this._state.options();
      this._max_offset.set(Math.max(15, (this._state.getOptions().duration || 60) - this._end_offset()));
      this._updateDayOptions();
    });
  }
  ngOnInit() {
    this._min_offset.set(Math.max(this._min_offset_setting(), 0));
    this._updateDayOptions();
  }
  _updateDayOptions() {
    const { date, duration } = this._state.getOptions();
    if (duration <= 24 * 60)
      return this.day_options.set([]);
    let day = startOfDay(date);
    let count = 0;
    const end = endOfDay(addMinutes(date, duration)).valueOf();
    const options = [];
    while (day.valueOf() <= end) {
      options.push({ id: count, value: day.valueOf() });
      day = addDays(day, 1);
      count++;
    }
    this.day_options.set(options);
  }
  static {
    this.\u0275fac = function AssetFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetFiltersComponent, selectors: [["asset-filters"]], inputs: { search: [1, "search"], at_time: [1, "at_time"], offset: [1, "offset"], offset_day: [1, "offset_day"] }, outputs: { at_time: "at_timeChange", offset: "offsetChange", offset_day: "offset_dayChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 14, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "mt-3", "mb-2", "px-2"], ["appearance", "outline", 1, "h-14", "w-full"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "hidden", "px-2", "py-2", "font-medium", "sm:block"], [1, "flex", "flex-col", "space-y-2", "px-2"], [1, "hidden", "px-2", "py-4", "font-medium", "sm:block"], [3, "label", "ngModel"], [3, "ngModelChange", "label", "ngModel", "matTooltip"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "label", "ngModel"]], template: function AssetFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "mat-form-field", 3)(6, "icon", 4);
        \u0275\u0275text(7, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("ngModelChange", function AssetFiltersComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, AssetFiltersComponent_Conditional_10_Template, 3, 3, "h3", 6);
        \u0275\u0275conditionalCreate(11, AssetFiltersComponent_Conditional_11_Template, 8, 15, "div", 7);
        \u0275\u0275elementStart(12, "h3", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275repeaterCreate(16, AssetFiltersComponent_For_17_Template, 1, 2, "settings-toggle", 9, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sm:hidden", !ctx.search());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.search_value())("placeholder", \u0275\u0275pipeBind1(9, 10, "BOOKINGS.ASSETS_SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.search() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.search() ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "COMMON.CATEGORIES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categories());
      }
    }, dependencies: [
      CommonModule,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      SettingsToggleComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      DurationFieldComponent,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 16rem;\n}\n/*# sourceMappingURL=asset-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetFiltersComponent, [{
    type: Component,
    args: [{ selector: "asset-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <div class="mt-3 mb-2 px-2" [class.sm:hidden]="!search()">
            <mat-form-field appearance="outline" class="h-14 w-full">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    [ngModel]="search_value()"
                    (ngModelChange)="setSearch($event)"
                    [placeholder]="'BOOKINGS.ASSETS_SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        @if (!search()) {
            <h3 class="hidden px-2 py-2 font-medium sm:block">
                {{ 'COMMON.OPTIONS' | translate }}
            </h3>
        }
        @if (!search()) {
            <div class="flex flex-col space-y-2 px-2">
                <settings-toggle
                    [label]="'BOOKINGS.ASSETS_DELIVER_TOGGLE' | translate"
                    [ngModel]="at_time()"
                    (ngModelChange)="at_time.set($event)"
                    [matTooltip]="exact_tooltip()"
                ></settings-toggle>
                @if (day_options().length > 1) {
                    <label>{{
                        'BOOKINGS.ASSETS_DELIVER_DATE' | translate
                    }}</label>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript mb-4 w-full"
                    >
                        <mat-select
                            [ngModel]="offset_day()"
                            (ngModelChange)="offset_day.set($event)"
                        >
                            @for (day of day_options(); track day) {
                                <mat-option [value]="day.id">
                                    {{ day.value | date: 'mediumDate' }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <label>{{ 'BOOKINGS.ASSETS_DELIVER_TIME' | translate }}</label>
                <a-duration-field
                    [ngModel]="offset()"
                    (ngModelChange)="offset.set($event)"
                    [time]="
                        offset_day() > 0 ? start_of_date() : options()?.date
                    "
                    [step]="step_interval()"
                    [min]="min_offset()"
                    [max]="max_offset() - 1"
                    [use_24hr]="use_24hr()"
                ></a-duration-field>
            </div>
        }
        <h3 class="hidden px-2 py-4 font-medium sm:block">
            {{ 'COMMON.CATEGORIES' | translate }}
        </h3>
        <div class="flex flex-col space-y-2 px-2">
            @for (item of categories(); track item.id) {
                <settings-toggle
                    [label]="item.name"
                    [ngModel]="category()?.includes(item.id)"
                    (ngModelChange)="toggleCategory(item.id)"
                ></settings-toggle>
            }
        </div>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      FormsModule,
      MatSelectModule,
      MatTooltipModule,
      TranslatePipe,
      DurationFieldComponent,
      IconComponent
    ], styles: ["/* angular:styles/component:css;36d64ad43f766c5d882a6ff09652b79772b85201d683018b64b0e6a2bff9f10c;/home/runner/work/user-interfaces/user-interfaces/libs/assets/src/lib/asset-select-modal/asset-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-width: 16rem;\n}\n/*# sourceMappingURL=asset-filters.component.css.map */\n"] }]
  }], () => [], { search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }], at_time: [{ type: Input, args: [{ isSignal: true, alias: "at_time", required: false }] }, { type: Output, args: ["at_timeChange"] }], offset: [{ type: Input, args: [{ isSignal: true, alias: "offset", required: false }] }, { type: Output, args: ["offsetChange"] }], offset_day: [{ type: Input, args: [{ isSignal: true, alias: "offset_day", required: false }] }, { type: Output, args: ["offset_dayChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetFiltersComponent, { className: "AssetFiltersComponent", filePath: "libs/assets/src/lib/asset-select-modal/asset-filters.component.ts", lineNumber: 133 });
})();

// libs/assets/src/lib/asset-select-modal/asset-list.component.ts
var _c0 = (a0) => ({ count: a0 });
function AssetListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r2.quantity || 1, " ");
  }
}
function AssetListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const asset_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", asset_r2.images[0]);
  }
}
function AssetListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
}
function AssetListComponent_Conditional_6_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "button", 6);
    \u0275\u0275listener("click", function AssetListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_1_listener() {
      const asset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectAsset(asset_r2));
    });
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, AssetListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template, 3, 1, "div", 8);
    \u0275\u0275conditionalCreate(4, AssetListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 9)(5, AssetListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function AssetListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_16_listener() {
      const asset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(asset_r2));
    });
    \u0275\u0275elementStart(17, "icon", 16);
    \u0275\u0275text(18, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(asset_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(asset_r2.images?.length ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(asset_r2.name || "Asset");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r2.category, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 8, "BOOKINGS.ASSETS_AVAILABLE", \u0275\u0275pureFunction1(11, _c0, asset_r2.available || asset_r2.assets?.length || "0")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(asset_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(asset_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function AssetListComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, AssetListComponent_Conditional_6_Conditional_0_For_2_Template, 19, 13, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.assets());
  }
}
function AssetListComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.ASSETS_EMPTY"), " ");
  }
}
function AssetListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetListComponent_Conditional_6_Conditional_0_Template, 3, 0, "ul", 3)(1, AssetListComponent_Conditional_6_Conditional_1_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.assets().length ? 0 : 1);
  }
}
function AssetListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.ASSETS_LOADING"), " ");
  }
}
var AssetListComponent = class _AssetListComponent {
  constructor() {
    this._asset_state = inject(AssetStateService);
    this.selected = input(
      "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = input(
      [],
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_items = input(
      [],
      ...ngDevMode ? [{ debugName: "selected_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.requested = input(
      {},
      ...ngDevMode ? [{ debugName: "requested" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleFav = output();
    this.onSelect = output();
    this._requested_items = signal(
      {},
      ...ngDevMode ? [{ debugName: "_requested_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.counts = signal(
      {},
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._asset_state.loading;
    this.assets = computed(
      () => {
        const counts = this.counts();
        const assets = this._asset_state.filtered_assets();
        const requested = this._requested_items();
        for (const item of assets) {
          item.quantity = counts[item.id] || 0;
          const selected = this.selected_items().find((i) => i.id === item.id);
          if (selected)
            selected.assets = item.assets;
          if (requested[item.id] !== void 0) {
            item.available = Math.max((item.assets?.length || 0) - requested[item.id], 0);
          }
        }
        return assets.filter((_) => _.available != null && _.available > 0 || _.available == null && _.assets?.length > 0);
      },
      ...ngDevMode ? [{ debugName: "assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const selected_items = this.selected_items();
      const counts = {};
      if (selected_items?.length) {
        for (const item of selected_items) {
          counts[item.id] = item.quantity;
        }
      }
      this.counts.set(counts);
    });
    effect(() => {
      this._requested_items.set(this.requested());
    });
  }
  isFavourite(asset_id) {
    return this.favorites().includes(asset_id);
  }
  selectAsset(asset) {
    this.onSelect.emit(asset);
  }
  static {
    this.\u0275fac = function AssetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetListComponent, selectors: [["asset-list"]], inputs: { selected: [1, "selected"], favorites: [1, "favorites"], selected_items: [1, "selected_items"], requested: [1, "requested"] }, outputs: { toggleFav: "toggleFav", onSelect: "onSelect" }, decls: 8, vars: 11, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["asset", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["select", "", 1, "flex", "h-full", "w-full", "items-center", "pr-10", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "mr-4", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border"], [1, "border-base-300", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "text-left"], [1, "flex", "items-center", "justify-between", "font-medium"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "space-x-2", "text-sm"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-xs"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function AssetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, AssetListComponent_Conditional_6_Template, 2, 1)(7, AssetListComponent_Conditional_7_Template, 5, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 5, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(9, _c0, ctx.assets().length || 0), ctx.assets().length || 0), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      CommonModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetListComponent, [{
    type: Component,
    args: [{ selector: "asset-list", template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: assets().length || 0 }
                        : assets().length || 0
            }}
        </p>
        @if (!loading()) {
            @if (assets().length) {
                <ul class="list-style-none space-y-2">
                    @for (asset of assets(); track asset) {
                        <li
                            asset
                            matRipple
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                        >
                            <button
                                select
                                class="flex h-full w-full items-center pr-10"
                                (click)="selectAsset(asset)"
                            >
                                <div
                                    class="border-base-200 bg-base-200 relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border"
                                >
                                    @if (selected().includes(asset.id)) {
                                        <div
                                            class="border-base-300 bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border"
                                        >
                                            <span class="text-xs">
                                                {{ asset.quantity || 1 }}
                                            </span>
                                        </div>
                                    }
                                    @if (asset.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="asset.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/asset-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1 space-y-2 text-left">
                                    <div
                                        class="flex items-center justify-between font-medium"
                                    >
                                        <div>{{ asset.name || 'Asset' }}</div>
                                        <div class="text-xs opacity-60">
                                            {{ asset.category }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <p>
                                            {{
                                                'BOOKINGS.ASSETS_AVAILABLE'
                                                    | translate
                                                        : {
                                                              count:
                                                                  asset.available ||
                                                                  asset.assets
                                                                      ?.length ||
                                                                  '0',
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                fav
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(asset.id)"
                                (click)="toggleFav.emit(asset)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(asset.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.ASSETS_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.ASSETS_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], () => [], { selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], favorites: [{ type: Input, args: [{ isSignal: true, alias: "favorites", required: false }] }], selected_items: [{ type: Input, args: [{ isSignal: true, alias: "selected_items", required: false }] }], requested: [{ type: Input, args: [{ isSignal: true, alias: "requested", required: false }] }], toggleFav: [{ type: Output, args: ["toggleFav"] }], onSelect: [{ type: Output, args: ["onSelect"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetListComponent, { className: "AssetListComponent", filePath: "libs/assets/src/lib/asset-select-modal/asset-list.component.ts", lineNumber: 150 });
})();

// libs/assets/src/lib/asset-select-modal/asset-select-modal.component.ts
function AssetSelectModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function AssetSelectModalComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_filters.update((value) => !value));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_filters() ? "close" : "filter_list");
  }
}
var EMPTY_FAVS = [];
var AssetSelectModalComponent = class _AssetSelectModalComponent {
  isSelected(id) {
    return id && this.selected_ids().includes(id);
  }
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(AssetStateService);
    this._data = inject(MAT_DIALOG_DATA);
    this.show_filters = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displayed = signal(
      null,
      ...ngDevMode ? [{ debugName: "displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      [
        ...this._data.items || []
      ],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.exact_time = signal(
      this._data.exact_time ?? false,
      ...ngDevMode ? [{ debugName: "exact_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.requested = signal(
      this._data.requested,
      ...ngDevMode ? [{ debugName: "requested" }] : (
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
    this.offset_day = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._min_offset = this._settings.signal("assets.min_offset", 0);
    this._end_offset = this._settings.signal("assets.end_offset", 0);
    this._favorites = this._settings.signal("favourite_assets", EMPTY_FAVS, true);
    this.is_safari = computed(
      () => isMobileSafari(),
      ...ngDevMode ? [{ debugName: "is_safari" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = computed(
      () => this._favorites(),
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_ids = computed(
      () => this.selected().map((_) => _.id).join(","),
      ...ngDevMode ? [{ debugName: "selected_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.count = computed(
      () => this.selected().reduce((t, i) => t + i.quantity, 0),
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const { duration } = this._data.details;
    this._state.setOptions(this._data.details);
    this.offset.set(Math.min(Math.max(this._min_offset(), this._data.offset || 0), (duration || 60) - this._end_offset()));
    this.offset_day.set(this._data.offset_day || 0);
  }
  setSelected(group, state) {
    if (!group)
      return;
    const list = this.selected().filter((_) => _.id !== group.id);
    if (state)
      list.push(group);
    this.selected.set([...list]);
  }
  updateSelectedCount(count) {
    const displayed = this.displayed();
    if (!displayed)
      return;
    const item = this.selected().find((_) => _.id === displayed.id);
    if (item) {
      item.quantity = count;
      item.assets = displayed.assets;
    }
  }
  toggleFavourite(asset) {
    if (!asset)
      return;
    const fav_list = this.favorites();
    const new_state = !fav_list.includes(asset.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_assets", [
        ...fav_list,
        asset.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_assets", fav_list.filter((_) => _ !== asset.id));
    }
  }
  static {
    this.\u0275fac = function AssetSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetSelectModalComponent, selectors: [["asset-select-modal"]], decls: 32, vars: 41, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "at_timeChange", "offsetChange", "offset_dayChange", "at_time", "offset", "offset_day"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "p-2", "sm:w-[20rem]", "lg:block"], [3, "toggleFav", "onSelect", "selected", "favorites", "selected_items", "requested"], [1, "border-base-300", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "item", "active", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "asset-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-asset", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function AssetSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 4)(9, "div", 5)(10, "asset-filters", 6);
        \u0275\u0275twoWayListener("at_timeChange", function AssetSelectModalComponent_Template_asset_filters_at_timeChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exact_time, $event) || (ctx.exact_time = $event);
          return $event;
        })("offsetChange", function AssetSelectModalComponent_Template_asset_filters_offsetChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offset, $event) || (ctx.offset = $event);
          return $event;
        })("offset_dayChange", function AssetSelectModalComponent_Template_asset_filters_offset_dayChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offset_day, $event) || (ctx.offset_day = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275element(12, "asset-filters-display");
        \u0275\u0275elementStart(13, "asset-list", 8);
        \u0275\u0275listener("toggleFav", function AssetSelectModalComponent_Template_asset_list_toggleFav_13_listener($event) {
          return ctx.toggleFavourite($event);
        })("onSelect", function AssetSelectModalComponent_Template_asset_list_onSelect_13_listener($event) {
          return ctx.displayed.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "asset-details", 10);
        \u0275\u0275listener("activeChange", function AssetSelectModalComponent_Template_asset_details_activeChange_15_listener($event) {
          return ctx.setSelected(ctx.displayed(), $event);
        })("toggleFav", function AssetSelectModalComponent_Template_asset_details_toggleFav_15_listener() {
          return ctx.toggleFavourite(ctx.displayed());
        })("close", function AssetSelectModalComponent_Template_asset_details_close_15_listener() {
          return ctx.displayed.set(null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(16, AssetSelectModalComponent_Conditional_16_Template, 3, 1, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "footer", 12)(18, "button", 13)(19, "div", 14)(20, "icon", 15);
        \u0275\u0275text(21, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 16);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "button", 17);
        \u0275\u0275listener("click", function AssetSelectModalComponent_Template_button_click_25_listener() {
          return ctx.setSelected(ctx.displayed(), !ctx.isSelected(ctx.displayed()?.id));
        });
        \u0275\u0275elementStart(26, "div", 18)(27, "icon", 15);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 19);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.is_safari() ? "calc(100vh - 80px)" : "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 35, "BOOKINGS.ASSETS_ADD_HEADER"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("hidden", !ctx.show_filters());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("at_time", ctx.exact_time)("offset", ctx.offset)("offset_day", ctx.offset_day);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters() || ctx.displayed())("sm:hidden", ctx.displayed())("md:block", !ctx.displayed());
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.selected_ids())("favorites", ctx.favorites())("selected_items", ctx.selected())("requested", ctx.requested());
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters() || !ctx.displayed())("sm:hidden", !ctx.displayed())("md:block", ctx.displayed());
        \u0275\u0275advance();
        \u0275\u0275property("item", ctx.displayed())("active", ctx.selected_ids().includes(ctx.displayed()?.id || ""))("fav", !!ctx.displayed() && ctx.favorites().includes(ctx.displayed()?.id || ""));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.displayed() ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 37, "COMMON.CONFIRM_SELECTION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed()?.id));
        \u0275\u0275property("disabled", !ctx.displayed());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed()?.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 39, ctx.isSelected(ctx.displayed()?.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      AssetListComponent,
      AssetDetailsComponent,
      AssetFiltersComponent,
      AssetFiltersDisplayComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetSelectModalComponent, [{
    type: Component,
    args: [{ selector: "asset-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col space-y-2 overflow-hidden p-2 sm:h-auto sm:w-auto"
            [style.height]="is_safari() ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.ASSETS_ADD_HEADER' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <asset-filters
                        [(at_time)]="exact_time"
                        [(offset)]="offset"
                        [(offset_day)]="offset_day"
                    ></asset-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border p-2 sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                >
                    <asset-filters-display></asset-filters-display>
                    <asset-list
                        [selected]="selected_ids()"
                        [favorites]="favorites()"
                        [selected_items]="selected()"
                        [requested]="requested()"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed.set($event)"
                    ></asset-list>
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                >
                    <asset-details
                        [item]="displayed()"
                        [active]="
                            selected_ids().includes(displayed()?.id || '')
                        "
                        (activeChange)="setSelected(displayed(), $event)"
                        [fav]="
                            !!displayed() &&
                            favorites().includes(displayed()?.id || '')
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></asset-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.update((value) => !value)"
                    >
                        <icon>{{
                            show_filters() ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="bg-base-200 flex w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="asset-return"
                    [mat-dialog-close]="selected()"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">done</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CONFIRM_SELECTION' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-asset"
                    [disabled]="!displayed()"
                    [class.inverse]="isSelected(displayed()?.id)"
                    (click)="
                        setSelected(displayed(), !isSelected(displayed()?.id))
                    "
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed()?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed()?.id)
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
                                ) | translate
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      AssetListComponent,
      AssetDetailsComponent,
      AssetFiltersComponent,
      AssetFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetSelectModalComponent, { className: "AssetSelectModalComponent", filePath: "libs/assets/src/lib/asset-select-modal/asset-select-modal.component.ts", lineNumber: 151 });
})();

// libs/assets/src/lib/asset-list-field.component.ts
var _c02 = (a0, a1) => ({ date: a0, time: a1 });
function AssetListFieldComponent_Conditional_0_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r3.err_tooltip(request_r3));
  }
}
function AssetListFieldComponent_Conditional_0_For_2_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_For_2_For_28_Template_button_click_5_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const request_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeRequestItem(request_r3, item_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_For_2_For_28_Template_button_click_9_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleFavourite(item_r6));
    });
    \u0275\u0275elementStart(11, "icon", 16);
    \u0275\u0275text(12, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.name || "Item", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r6.quantity, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 7, "FORM.ASSETS_REMOVE_ITEM"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info", ctx_r3.favorites().includes(item_r6.id));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 9, ctx_r3.favorites().includes(item_r6.id) ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("className", ctx_r3.favorites().includes(item_r6.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function AssetListFieldComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AssetListFieldComponent_Conditional_0_For_2_Conditional_9_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_For_2_Template_button_click_10_listener() {
      const request_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.duplicateRequest(request_r3));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_For_2_Template_button_click_14_listener() {
      const request_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editRequest(request_r3));
    });
    \u0275\u0275elementStart(16, "icon");
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 10);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_For_2_Template_button_click_18_listener() {
      const request_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeRequest(request_r3));
    });
    \u0275\u0275elementStart(20, "icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 9);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_For_2_Template_button_click_22_listener() {
      const request_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRequest(request_r3.id));
    });
    \u0275\u0275elementStart(24, "icon");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 11);
    \u0275\u0275repeaterCreate(27, AssetListFieldComponent_Conditional_0_For_2_For_28_Template, 13, 11, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-error", ctx_r3.end_time() < request_r3.deliver_at)("border-base-300", ctx_r3.end_time() >= request_r3.deliver_at);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 18, "FORM.ASSETS_REQUESTED_FOR_DATE", \u0275\u0275pureFunction2(29, _c02, \u0275\u0275pipeBind2(6, 12, request_r3.deliver_at_time, "mediumDate"), \u0275\u0275pipeBind2(7, 15, request_r3.deliver_at_time, ctx_r3.time_format()))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.end_time() <= request_r3.deliver_at || ctx_r3.rejected_ids().includes(request_r3.id) || request_r3.conflict ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 21, "FORM.ASSETS_DUPLICATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 23, "FORM.ASSETS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(19, 25, "FORM.ASSETS_REMOVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(23, 27, ctx_r3.show_request()[request_r3.id] ? "FORM.ASSETS_HIDE" : "FORM.ASSETS_SHOW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.show_request()[request_r3.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_request()[request_r3.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r3.items);
  }
}
function AssetListFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, AssetListFieldComponent_Conditional_0_For_2_Template, 29, 32, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editRequest());
    });
    \u0275\u0275elementStart(4, "div", 3)(5, "icon");
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.asset_requests());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.disabled());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 2, "FORM.ASSETS_ADD"));
  }
}
function AssetListFieldComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 18);
    \u0275\u0275text(2, "hand_meal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, " Assets are not available for the selected space and/or time ");
    \u0275\u0275elementEnd()();
  }
}
function AssetListFieldComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2, "No asset requests for this booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function AssetListFieldComponent_Conditional_1_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editRequest());
    });
    \u0275\u0275elementStart(4, "icon", 21);
    \u0275\u0275text(5, "add_notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 1, "FORM.ASSETS_ADD"), " ");
  }
}
function AssetListFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetListFieldComponent_Conditional_1_Conditional_0_Template, 5, 0, "div", 17)(1, AssetListFieldComponent_Conditional_1_Conditional_1_Template, 9, 3, "div", 17);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.disabled() ? 0 : 1);
  }
}
var EMPTY_FAVS2 = [];
var AssetListFieldComponent = class _AssetListFieldComponent {
  err_tooltip(request) {
    return this.rejected_ids().includes(request.id) || request.conflict ? i18n("FORM.ASSETS_CLASH_ERROR") : i18n("FORM.ASSETS_TIME_ERROR");
  }
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._state = inject(AssetStateService);
    this.options = input(
      {},
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rejected_ids = input(
      [],
      ...ngDevMode ? [{ debugName: "rejected_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_requests = signal(
      [],
      ...ngDevMode ? [{ debugName: "asset_requests" }] : (
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
    this.show_request = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._favorites = this._settings.signal("favourite_assets", EMPTY_FAVS2, true);
    this.favorites = computed(
      () => this._favorites(),
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = computed(
      () => {
        const time = (this.options().date || Date.now()) + (this.options().duration || 30) * 60 * 1e3;
        return this.options().all_day ? endOfDay(time).valueOf() : time;
      },
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => {
        return this._settings.time_format_signal() || "shortTime";
      },
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    effect(() => {
      const options = this.options();
      this.asset_requests.set(untracked(() => this.asset_requests().map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event: options })))));
      this._state.setOptions(__spreadProps(__spreadValues({}, options), {
        zone: options.zone || options.zone_id
      }));
    });
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.asset_requests.set(new_value);
    if (this._onChange)
      this._onChange(this.asset_requests());
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.asset_requests.set((value || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), {
      event: this.options(),
      state: _.state
    }))));
  }
  toggleRequest(request_id) {
    this.show_request.update((state) => __spreadProps(__spreadValues({}, state), {
      [request_id]: !state[request_id]
    }));
  }
  editRequest(order = new AssetRequest()) {
    const order_list = this.asset_requests().filter((_) => _.id !== order.id);
    const requested = {};
    for (const order2 of order_list) {
      for (const item of order2.items) {
        requested[item.id] = (requested[item.id] || 0) + item?.quantity || 0;
      }
    }
    const options = this.options();
    const optionsValue = this.options();
    const ref = this._dialog.open(AssetSelectModalComponent, {
      data: {
        items: order.items,
        details: __spreadProps(__spreadValues({}, this.options()), {
          date: options.all_day ? startOfDay(options.date).valueOf() : options.date,
          duration: optionsValue.all_day ? Math.max(24 * 60, optionsValue.duration) : optionsValue.duration
        }),
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset,
        requested
      }
    });
    ref.afterClosed().subscribe((items) => {
      const orders = this.asset_requests().filter((_) => _.id !== order.id);
      if (!items?.length)
        return;
      for (const item of items) {
        if (item.assets?.length) {
          const list = [];
          item.item_ids = new Array(item.quantity).fill(0).map((_) => {
            let id = "";
            let count = 0;
            while ((!id || list.includes(id)) && count < item.assets.length) {
              id = item.assets[randomInt(item.assets.length)].id;
            }
            list.push(id);
            return id;
          });
        }
      }
      const time = new Date(this.options().date);
      const new_order = new AssetRequest(__spreadProps(__spreadValues({}, order), {
        conflict: false,
        _changed: order._changed || order.items.find((_) => items.find((__) => __.id === _.id)?.quantity !== _.quantity),
        items: items.map((_) => __spreadValues({}, _)),
        event: this.options(),
        deliver_offset: ref.componentInstance.offset(),
        deliver_time: ref.componentInstance.exact_time() ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: ref.componentInstance.offset_day() || 0
      }));
      for (const item of new_order.items) {
        const total = orders.reduce((t, c) => t += c.items.find((_) => _.id === item.id)?.quantity || 0, 0);
        if (total + item.quantity > item.assets.length) {
          notifyError(i18n("FORM.ASSETS_QUANTITY_ERROR", { name: item.name }), void 0, void 0, { duration: 5e3 });
          return;
        }
      }
      if (new_order.item_count <= 0)
        return;
      this.setValue([...orders, new_order]);
    });
  }
  removeRequest(request) {
    const updated_list = this.asset_requests().filter((_) => _.id !== request.id);
    this.setValue(updated_list);
  }
  duplicateRequest(order) {
    const new_order = new AssetRequest(__spreadProps(__spreadValues({}, order), {
      id: `order-${randomString(8)}`
    }));
    this.setValue([...this.asset_requests(), new_order]);
  }
  removeRequestItem(order, item) {
    const new_order = new AssetRequest(__spreadProps(__spreadValues({}, order), {
      items: order.items.filter((_) => _.id !== item.id)
    }));
    const updated_list = this.asset_requests().filter((_) => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else
      this.setValue(updated_list);
  }
  toggleFavourite(asset) {
    const fav_list = this.favorites();
    const new_state = !fav_list.includes(asset.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_assets", [
        ...fav_list,
        asset.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_assets", fav_list.filter((_) => _ !== asset.id));
    }
  }
  static {
    this.\u0275fac = function AssetListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetListFieldComponent, selectors: [["asset-list-field"]], inputs: { options: [1, "options"], rejected_ids: [1, "rejected_ids"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _AssetListFieldComponent),
        multi: true
      }
    ])], decls: 2, vars: 1, consts: [["list", "", 1, "space-y-2"], ["request", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow", 3, "border-error", "border-base-300"], ["btn", "", "matRipple", "", "add-space", "", 1, "inverse", "mt-2", "w-full", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["request", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], [1, "flex", "items-center", "space-x-4"], [1, "bg-error", "text-error-content", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-4", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "bg-success", "text-success-content", "rounded", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [3, "className"], [1, "bg-base-200", "flex", "w-full", "flex-col", "items-center", "space-y-2", "rounded-xl", "p-8"], [1, "text-6xl", "opacity-30"], [1, "opacity-30"], ["btn", "", "matRipple", "", 1, "inverse", "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-3"]], template: function AssetListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AssetListFieldComponent_Conditional_0_Template, 10, 4)(1, AssetListFieldComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.asset_requests().length ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      MatDialogModule,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetListFieldComponent, [{
    type: Component,
    args: [{ selector: `asset-list-field`, template: `
        @if (asset_requests().length) {
            <div list class="space-y-2">
                @for (request of asset_requests(); track request) {
                    <div
                        request
                        class="bg-base-100 overflow-hidden rounded-xl border shadow"
                        [class.border-error]="end_time() < request.deliver_at"
                        [class.border-base-300]="
                            end_time() >= request.deliver_at
                        "
                    >
                        <div class="flex items-center space-x-2 p-4">
                            <div class="flex-1">
                                <div class="flex items-center space-x-4">
                                    <div>
                                        {{
                                            'FORM.ASSETS_REQUESTED_FOR_DATE'
                                                | translate
                                                    : {
                                                          date:
                                                              request.deliver_at_time
                                                              | date
                                                                  : 'mediumDate',
                                                          time:
                                                              request.deliver_at_time
                                                              | date
                                                                  : time_format(),
                                                      }
                                        }}
                                    </div>
                                    @if (
                                        end_time() <= request.deliver_at ||
                                        rejected_ids().includes(request.id) ||
                                        request.conflict
                                    ) {
                                        <div
                                            class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                            [matTooltip]="err_tooltip(request)"
                                        >
                                            <icon>priority_high</icon>
                                        </div>
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    'FORM.ASSETS_DUPLICATE' | translate
                                "
                                (click)="duplicateRequest(request)"
                            >
                                <icon>content_copy</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'FORM.ASSETS_EDIT' | translate"
                                (click)="editRequest(request)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'FORM.ASSETS_REMOVE' | translate"
                                class="text-error"
                                (click)="removeRequest(request)"
                            >
                                <icon>delete</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    (show_request()[request.id]
                                        ? 'FORM.ASSETS_HIDE'
                                        : 'FORM.ASSETS_SHOW'
                                    ) | translate
                                "
                                (click)="toggleRequest(request.id)"
                            >
                                <icon>
                                    {{
                                        show_request()[request.id]
                                            ? 'expand_less'
                                            : 'expand_more'
                                    }}
                                </icon>
                            </button>
                        </div>
                        <div
                            class="divide-base-100 bg-base-200 flex flex-col divide-y"
                            [@show]="
                                show_request()[request.id] ? 'show' : 'hide'
                            "
                        >
                            @for (item of request.items; track item) {
                                <div
                                    class="flex items-center space-x-2 px-4 py-1 hover:opacity-90"
                                >
                                    <div class="flex flex-1 items-center">
                                        {{ item.name || 'Item' }}
                                    </div>
                                    <div
                                        class="bg-success text-success-content rounded px-2 py-1 text-xs"
                                    >
                                        x{{ item.quantity }}
                                    </div>
                                    <button
                                        icon
                                        matRipple
                                        [matTooltip]="
                                            'FORM.ASSETS_REMOVE_ITEM'
                                                | translate
                                        "
                                        class="text-error"
                                        (click)="
                                            removeRequestItem(request, item)
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                    <button
                                        icon
                                        matRipple
                                        name="toggle-catering-item-favourite"
                                        [matTooltip]="
                                            (favorites().includes(item.id)
                                                ? 'COMMON.FAVOURITES_REMOVE'
                                                : 'COMMON.FAVOURITES_ADD'
                                            ) | translate
                                        "
                                        [class.text-info]="
                                            favorites().includes(item.id)
                                        "
                                        (click)="toggleFavourite(item)"
                                    >
                                        <icon
                                            [className]="
                                                favorites().includes(item.id)
                                                    ? 'material-symbols-rounded'
                                                    : 'material-symbols-outlined'
                                            "
                                            >favorite</icon
                                        >
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            <button
                btn
                matRipple
                add-space
                class="inverse mt-2 w-full"
                [disabled]="disabled()"
                (click)="editRequest()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon>search</icon>
                    <span>{{ 'FORM.ASSETS_ADD' | translate }}</span>
                </div>
            </button>
        } @else {
            @if (disabled()) {
                <div
                    class="bg-base-200 flex w-full flex-col items-center space-y-2 rounded-xl p-8"
                >
                    <icon class="text-6xl opacity-30">hand_meal</icon>
                    <p class="opacity-30">
                        Assets are not available for the selected space and/or
                        time
                    </p>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex w-full flex-col items-center space-y-2 rounded-xl p-8"
                >
                    <p>No asset requests for this booking</p>
                    <button
                        btn
                        matRipple
                        class="inverse space-x-2"
                        (click)="editRequest()"
                    >
                        <icon class="text-2xl">add_notes</icon>
                        <span class="pr-3">
                            {{ 'FORM.ASSETS_ADD' | translate }}
                        </span>
                    </button>
                </div>
            }
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => AssetListFieldComponent),
        multi: true
      }
    ], animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatDialogModule
    ] }]
  }], () => [], { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], rejected_ids: [{ type: Input, args: [{ isSignal: true, alias: "rejected_ids", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetListFieldComponent, { className: "AssetListFieldComponent", filePath: "libs/assets/src/lib/asset-list-field.component.ts", lineNumber: 255 });
})();

// libs/form-fields/src/lib/compact-counter.component.ts
function CompactCounterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value()) : ctx_r0.value()) || "0", " ");
  }
}
var CompactCounterComponent = class _CompactCounterComponent {
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
    this.\u0275fac = function CompactCounterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompactCounterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompactCounterComponent, selectors: [["compact-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _CompactCounterComponent),
        multi: true
      }
    ])], decls: 11, vars: 6, consts: [["counter", "", 1, "flex", "items-center", "gap-1", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["value", "", 1, "border-secondary", "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-sm", "border", "p-1", "focus-within:z-20"], [1, "px-3"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], [1, "flex", "flex-col", "justify-center", "space-y-1"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"]], template: function CompactCounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("keydown.shift", function CompactCounterComponent_Template_div_keydown_shift_0_listener() {
          return ctx.shift_key.set(true);
        }, \u0275\u0275resolveWindow)("keydown.control", function CompactCounterComponent_Template_div_keydown_control_0_listener() {
          return ctx.ctrl_key.set(true);
        }, \u0275\u0275resolveWindow)("keydown.meta", function CompactCounterComponent_Template_div_keydown_meta_0_listener() {
          return ctx.ctrl_key.set(true);
        }, \u0275\u0275resolveWindow)("keyup.shift", function CompactCounterComponent_Template_div_keyup_shift_0_listener() {
          return ctx.shift_key.set(false);
        }, \u0275\u0275resolveWindow)("keyup.control", function CompactCounterComponent_Template_div_keyup_control_0_listener() {
          return ctx.ctrl_key.set(false);
        }, \u0275\u0275resolveWindow)("keyup.meta", function CompactCounterComponent_Template_div_keyup_meta_0_listener() {
          return ctx.ctrl_key.set(false);
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275conditionalCreate(2, CompactCounterComponent_Conditional_2_Template, 2, 1, "span", 2);
        \u0275\u0275elementStart(3, "input", 3);
        \u0275\u0275listener("ngModelChange", function CompactCounterComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.value.set($event);
        })("focus", function CompactCounterComponent_Template_input_focus_3_listener() {
          return ctx.focused.set(true);
        })("blur", function CompactCounterComponent_Template_input_blur_3_listener() {
          ctx.setValue(+ctx.value());
          return ctx.focused.set(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
        \u0275\u0275listener("click", function CompactCounterComponent_Template_button_click_5_listener() {
          return ctx.add();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function CompactCounterComponent_Template_button_click_8_listener() {
          return ctx.remove();
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "remove");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("disabled", ctx.disabled());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.focused() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.value());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.value() === ctx.max());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.value() || ctx.value() === ctx.min());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 30%;\n}\n\n/*# sourceMappingURL=compact-counter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompactCounterComponent, [{
    type: Component,
    args: [{ selector: "compact-counter", template: `
        <div
            counter
            class="flex items-center gap-1 text-base"
            (window:keydown.shift)="shift_key.set(true)"
            (window:keydown.control)="ctrl_key.set(true)"
            (window:keydown.meta)="ctrl_key.set(true)"
            (window:keyup.shift)="shift_key.set(false)"
            (window:keyup.control)="ctrl_key.set(false)"
            (window:keyup.meta)="ctrl_key.set(false)"
            [class.disabled]="disabled()"
        >
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-sm border p-1 focus-within:z-20"
            >
                @if (!focused()) {
                    <span class="px-3">
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
            <div class="flex flex-col justify-center space-y-1">
                <button
                    increase
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                    [disabled]="value() === max()"
                    (click)="add()"
                >
                    <icon>add</icon>
                </button>
                <button
                    decrease
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                    [disabled]="!value() || value() === min()"
                    (click)="remove()"
                >
                    <icon>remove</icon>
                </button>
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CompactCounterComponent),
        multi: true
      }
    ], imports: [FormsModule, IconComponent], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/compact-counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 30%;\n}\n/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=compact-counter.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], render_fn: [{ type: Input, args: [{ isSignal: true, alias: "render_fn", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompactCounterComponent, { className: "CompactCounterComponent", filePath: "libs/form-fields/src/lib/compact-counter.component.ts", lineNumber: 88 });
})();

// libs/form-fields/src/lib/recurrence-modal.component.ts
var _forTrack02 = ($index, $item) => $item[1];
function RecurrenceModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.model().interval === 1 ? "FORM.RECURRENCE_WEEK" : "FORM.RECURRENCE_WEEKS"));
  }
}
function RecurrenceModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.model().interval === 1 ? "FORM.RECURRENCE_MONTH" : "FORM.RECURRENCE_MONTHS"));
  }
}
function RecurrenceModalComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function RecurrenceModalComponent_Conditional_17_For_5_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDate(day_r3[1]));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const has_date_r4 = \u0275\u0275nextContext(2).hasDate(day_r3[1]);
    \u0275\u0275classProp("bg-secondary", has_date_r4)("text-secondary", !has_date_r4)("text-base-200", has_date_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 7, day_r3[0], "EEEEE"), " ");
  }
}
function RecurrenceModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, RecurrenceModalComponent_Conditional_17_For_5_Template, 3, 10, "button", 24, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.RECURRENCE_REPEAT_ON"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.weekdays);
  }
}
function RecurrenceModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 7)(2, "mat-option", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.monthly_type);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Monthly on ", ctx_r0.month_instance, " ", \u0275\u0275pipeBind2(4, 3, ctx_r0.date, "EEEE"));
  }
}
var RecurrenceModalComponent = class _RecurrenceModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.instance_fn = (v) => `${v ?? 13} instances`;
    this.date = this._data.date || Date.now();
    this.week = this._data.iom ?? 1;
    this.available_days = this._data.available_days;
    this.end_date = endOfDay(addDays(Date.now(), this.available_days)).valueOf();
    this.month_instance = this.week === -1 ? "Last" : this.week === 1 ? "1st" : this.week === 2 ? "2nd" : this.week === 3 ? "3rd" : `${this.week}th`;
    this.weekdays = new Array(7).fill(0).map((_, idx) => {
      const date = addDays(startOfWeek(Date.now()), idx);
      return [date.valueOf(), date.getDay()];
    });
    this._injector = inject(Injector);
    this.model = signal(
      {
        _custom: true,
        type: "daily",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([new Date(this.date).getDay()]),
        week: 0,
        monthly_type: "day_of_week",
        end_type: "never",
        end_date: this._defaultEndDate(),
        end_instances: 13
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      disabled(p.end_date, {
        when: () => this.model().end_type !== "date"
      });
      disabled(p.end_instances, {
        when: () => this.model().end_type !== "instances"
      });
      disabled(p.type, { when: () => this.available_days < 14 });
    });
    onFieldChange(this.model, (m) => m.type, (type) => this._onTypeChange(type), this._injector);
    onFieldChange(this.model, (m) => m, () => this._clampEndInstances(), this._injector);
  }
  ngOnInit() {
    this.model.update((m) => __spreadProps(__spreadValues(__spreadValues({}, m), this._data.value), {
      _custom: true
    }));
    if (!this.model().type || this.model().type === "none") {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { type: "daily" }));
    }
    const default_end_date = this._defaultEndDate();
    if (!this.model().end_date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_date: default_end_date }));
    }
    if (!this.model().end_instances) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_instances: 13 }));
    }
    if (this.model().end_date < this.date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_date: this.date }));
    } else if (this.model().end_date > this.end_date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_date: this.end_date }));
    }
    if (this.model().type === "monthly") {
      this._setMonthlyWeekday();
    }
    this._clampEndInstances();
  }
  hasDate(idx) {
    return this.model().weekdays.has(idx);
  }
  toggleDate(idx) {
    this.model.update((m) => {
      const set = new Set(m.weekdays);
      set.has(idx) ? set.delete(idx) : set.add(idx);
      return __spreadProps(__spreadValues({}, m), { weekdays: set });
    });
  }
  confirmValue() {
    const value = __spreadValues({}, this.model());
    value.end_date = value.end_date || this._defaultEndDate();
    if (value.end_type === "instances" && value.end_instances) {
      value.end_date = recurrenceEndDate(value, this.date);
      while (value.end_instances > 1 && value.end_date > this.end_date) {
        value.end_instances--;
        value.end_date = recurrenceEndDate(value, this.date);
      }
      value.end_date = Math.min(value.end_date, this.end_date);
    }
    if (value.end_type !== "instances") {
      value.end_instances = void 0;
    }
    if (value.end_type !== "date") {
      value.end_date = value.end_type === "instances" ? value.end_date : void 0;
    }
    return value;
  }
  maxInstances() {
    const value = this.model();
    let max_instances = 1;
    for (let count = 1; count <= 53; count++) {
      const end_date = recurrenceEndDate(__spreadProps(__spreadValues({}, value), { end_instances: count }), this.date);
      if (end_date > this.end_date)
        break;
      max_instances = count;
    }
    return max_instances;
  }
  _onTypeChange(type) {
    if (type === "monthly")
      this._setMonthlyWeekday();
  }
  _setMonthlyWeekday() {
    const set = /* @__PURE__ */ new Set();
    set.add(new Date(this.date).getDay());
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      monthly_type: "day_of_week",
      week: this.week,
      weekdays: set
    }));
  }
  _clampEndInstances() {
    if (this.model().end_type !== "instances")
      return;
    const max_instances = this.maxInstances();
    if (this.model().end_instances <= max_instances)
      return;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_instances: max_instances }));
  }
  _defaultEndDate() {
    return this.end_date;
  }
  static {
    this.\u0275fac = function RecurrenceModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurrenceModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurrenceModalComponent, selectors: [["recurrence-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 45, vars: 45, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], [1, "flex", "min-w-[24rem]", "flex-col", "space-y-2", "px-4"], [1, "w-auto"], [1, "mt-2", "flex", "items-center", "space-x-4", "pb-4"], [3, "formField", "min", "max", "step"], ["appearance", "outline", 1, "no-subscript", "flex-1"], [3, "formField"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["appearance", "outline"], [1, "pb-4"], [1, "flex", "items-center"], ["value", "never"], [1, "mt-2", "flex", "items-center"], ["value", "date"], [3, "formField", "from", "to"], ["value", "instances"], [1, "flex-1", 3, "formField", "render_fn", "min", "max"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "bg-secondary", "text-secondary", "text-base-200"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["value", "day_of_week"]], template: function RecurrenceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "main", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "compact-counter", 5);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-select", 7)(12, "mat-option", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, RecurrenceModalComponent_Conditional_15_Template, 3, 3, "mat-option", 9);
        \u0275\u0275conditionalCreate(16, RecurrenceModalComponent_Conditional_16_Template, 3, 3, "mat-option", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, RecurrenceModalComponent_Conditional_17_Template, 6, 3);
        \u0275\u0275conditionalCreate(18, RecurrenceModalComponent_Conditional_18_Template, 5, 6, "mat-form-field", 11);
        \u0275\u0275elementStart(19, "label", 3);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "mat-radio-group", 7)(24, "div", 13)(25, "mat-radio-button", 14);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "mat-radio-button", 16);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "a-date-field", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 15)(34, "mat-radio-button", 18);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "compact-counter", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "footer", 20)(39, "button", 21);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 22);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 27, "FORM.RECURRENCE_CUSTOM_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 29, "FORM.RECURRENCE_REPEAT_EVERY"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.interval)("min", 1)("max", ctx.model().type === "daily" ? 7 : 12)("step", 1);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.type);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 31, ctx.model().interval === 1 ? "FORM.RECURRENCE_DAY" : "FORM.RECURRENCE_DAYS"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.available_days >= 14 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_days >= 28 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().type === "weekly" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().type === "monthly" ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 33, "FORM.RECURRENCE_ENDS"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.end_type);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 35, "FORM.RECURRENCE_ENDS_NEVER"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 37, "FORM.RECURRENCE_ENDS_ON"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.end_date)("from", ctx.date)("to", ctx.end_date);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 39, "FORM.RECURRENCE_ENDS_AFTER"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.end_instances)("render_fn", ctx.instance_fn)("min", 1)("max", ctx.maxInstances());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 41, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.confirmValue());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 43, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatDialogModule,
      MatDialogClose,
      CompactCounterComponent,
      DateFieldComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%], \na-date-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\nmat-radio-button[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=recurrence-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurrenceModalComponent, [{
    type: Component,
    args: [{ selector: "recurrence-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'FORM.RECURRENCE_CUSTOM_HEADER' | translate }}
            </h3>
        </header>
        <main class="flex min-w-[24rem] flex-col space-y-2 px-4">
            <label class="w-auto">{{
                'FORM.RECURRENCE_REPEAT_EVERY' | translate
            }}</label>
            <div class="mt-2 flex items-center space-x-4 pb-4">
                <compact-counter
                    [formField]="form.interval"
                    [min]="1"
                    [max]="model().type === 'daily' ? 7 : 12"
                    [step]="1"
                ></compact-counter>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select [formField]="form.type">
                        <mat-option value="daily">{{
                            (model().interval === 1
                                ? 'FORM.RECURRENCE_DAY'
                                : 'FORM.RECURRENCE_DAYS'
                            ) | translate
                        }}</mat-option>
                        @if (available_days >= 14) {
                            <mat-option value="weekly">{{
                                (model().interval === 1
                                    ? 'FORM.RECURRENCE_WEEK'
                                    : 'FORM.RECURRENCE_WEEKS'
                                ) | translate
                            }}</mat-option>
                        }
                        @if (available_days >= 28) {
                            <mat-option value="monthly">{{
                                (model().interval === 1
                                    ? 'FORM.RECURRENCE_MONTH'
                                    : 'FORM.RECURRENCE_MONTHS'
                                ) | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if (model().type === 'weekly') {
                <label class="w-auto">{{
                    'FORM.RECURRENCE_REPEAT_ON' | translate
                }}</label>
                <div class="flex items-center space-x-2 pb-4">
                    @for (day of weekdays; track day[1]) {
                        @let has_date = hasDate(day[1]);
                        <button
                            icon
                            matRipple
                            class="border-secondary h-12 w-12 rounded-sm border"
                            [class.bg-secondary]="has_date"
                            [class.text-secondary]="!has_date"
                            [class.text-base-200]="has_date"
                            (click)="toggleDate(day[1])"
                        >
                            {{ day[0] | date: 'EEEEE' }}
                        </button>
                    }
                </div>
            }
            @if (model().type === 'monthly') {
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.monthly_type">
                        <mat-option value="day_of_week"
                            >Monthly on {{ month_instance }}
                            {{ date | date: 'EEEE' }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
            }
            <label class="w-auto">{{
                'FORM.RECURRENCE_ENDS' | translate
            }}</label>
            <div class="pb-4">
                <mat-radio-group [formField]="form.end_type">
                    <div class="flex items-center">
                        <mat-radio-button value="never">{{
                            'FORM.RECURRENCE_ENDS_NEVER' | translate
                        }}</mat-radio-button>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="date">{{
                            'FORM.RECURRENCE_ENDS_ON' | translate
                        }}</mat-radio-button>
                        <a-date-field
                            [formField]="form.end_date"
                            [from]="date"
                            [to]="end_date"
                        ></a-date-field>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="instances">{{
                            'FORM.RECURRENCE_ENDS_AFTER' | translate
                        }}</mat-radio-button>
                        <compact-counter
                            class="flex-1"
                            [formField]="form.end_instances"
                            [render_fn]="instance_fn"
                            [min]="1"
                            [max]="maxInstances()"
                        ></compact-counter>
                    </div>
                </mat-radio-group>
            </div>
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="confirmValue()"
            >
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      CommonModule,
      FormField,
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatDialogModule,
      CompactCounterComponent,
      DateFieldComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;08e87cc84ad893ed080b10ccb1ca1d9025acb8f4d3e0d639abb60b4f021cfe92;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/recurrence-modal.component.ts */\nmat-form-field,\na-date-field {\n  height: 3.25rem;\n}\nmat-radio-button {\n  width: 8rem;\n}\n/*# sourceMappingURL=recurrence-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurrenceModalComponent, { className: "RecurrenceModalComponent", filePath: "libs/form-fields/src/lib/recurrence-modal.component.ts", lineNumber: 180 });
})();

// libs/form-fields/src/lib/recurrence-field.component.ts
var _c03 = (a0) => ({ day: a0 });
var _c1 = (a0, a1) => ({ index: a0, day: a1 });
function RecurrenceFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatted_value(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "FORM.RECURRENCE_CUSTOM"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "FORM.RECURRENCE_DAILY"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "FORM.RECURRENCE_WEEKLY_ON", \u0275\u0275pureFunction1(7, _c03, \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "FORM.RECURRENCE_MONTH_INSTANCE", \u0275\u0275pureFunction2(7, _c1, ctx_r0.instance_of_month(), \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "FORM.RECURRENCE_NONE"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "FORM.RECURRENCE_WEEKLY_ON", \u0275\u0275pureFunction1(7, _c03, \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "FORM.RECURRENCE_MONTH_INSTANCE", \u0275\u0275pureFunction2(7, _c1, ctx_r0.instance_of_month(), \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Anually on ", \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "LLLL dd"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 2)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatted_value(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "FORM.RECURRENCE_CUSTOM"), " ");
  }
}
var RecurrenceFieldComponent = class _RecurrenceFieldComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.type = input(
      "booking",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = input(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_days = input(
      180,
      ...ngDevMode ? [{ debugName: "available_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.first_instance = output();
    this.prev_type = signal(
      "none",
      ...ngDevMode ? [{ debugName: "prev_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recurr_type = signal(
      "none",
      ...ngDevMode ? [{ debugName: "recurr_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.iom = signal(
      0,
      ...ngDevMode ? [{ debugName: "iom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.instance_of_month = signal(
      "",
      ...ngDevMode ? [{ debugName: "instance_of_month" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      NO_RECURR,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._custom_cache = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "_custom_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_value = computed(
      () => {
        const val = this.value();
        if (!val)
          return "";
        if (val.end_type === "instances" && val.end_instances) {
          return formatRecurrence(__spreadProps(__spreadValues({}, val), {
            end_date: recurrenceEndDate(val, this.date())
          }), this.date());
        }
        return formatRecurrence(val, this.date());
      },
      ...ngDevMode ? [{ debugName: "formatted_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    effect(() => {
      const date_value = this.date();
      if (!date_value)
        return;
      untracked(() => this._onDateChange(date_value));
    });
  }
  toRaw(data) {
    return this.type() === "event" ? toEventRecurrence(data, this.date()) : toBookingRecurrence(data, this.date());
  }
  fromRaw(data) {
    return this.type() === "event" ? fromEventRecurrence(data) : fromBookingRecurrence(data);
  }
  /** Update the form field value. */
  setValue(new_value) {
    new_value = this._clampValueEnd(new_value);
    this.value.set(new_value);
    this._custom_cache.set(new_value?._custom ? __spreadValues({}, new_value) : void 0);
    this._emitFirstInstance(new_value);
    if (this._onChange)
      this._onChange(this.toRaw(new_value));
  }
  /** Update local value when form control value is changed externally. */
  writeValue(value) {
    if (!value) {
      this.value.set(NO_RECURR);
      this._custom_cache.set(void 0);
      this.recurr_type.set("none");
      this.prev_type.set("none");
      return;
    }
    const next_value = this.fromRaw(value || {});
    const restored_value = this._restoreCustomEnd(next_value);
    this.value.set(restored_value);
    this._custom_cache.set(restored_value?._custom ? __spreadValues({}, restored_value) : void 0);
    this.recurr_type.set(this.value()._custom ? "custom_display" : this.value().type);
    this.prev_type.set(this.recurr_type());
  }
  openCustomRecurrenceModal() {
    const ref = this._dialog.open(RecurrenceModalComponent, {
      data: {
        value: this.value(),
        iom: this.iom(),
        date: this.date(),
        available_days: this.available_days()
      }
    });
    ref.afterClosed().subscribe((d) => setTimeout(() => {
      d ? this.setValue(__spreadValues({}, d)) : "";
      this.recurr_type.set(d ? "custom_display" : this.prev_type());
    }, 10));
  }
  setSimple(pattern) {
    const day_of_week = new Date(this.date()).getDay();
    const end_date = endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    if (pattern === "none") {
      this.setValue(NO_RECURR);
    } else if (pattern === "daily") {
      this.setValue({
        _custom: false,
        type: "daily",
        interval: 1,
        end_type: "date",
        end_date
      });
    } else if (pattern === "weekly") {
      this.setValue({
        _custom: false,
        type: "weekly",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([day_of_week]),
        end_type: "date",
        end_date
      });
    } else if (pattern === "monthly") {
      this.setValue({
        _custom: false,
        type: "monthly",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([day_of_week]),
        monthly_type: "day_of_week",
        week: this.iom(),
        end_type: "date",
        end_date
      });
    } else if (pattern === "yearly") {
      this.setValue({
        _custom: false,
        type: "yearly",
        interval: 1,
        end_type: "date",
        end_date: addYears(this.date(), 7).valueOf()
      });
    }
    this.recurr_type.set(pattern === "custom" || pattern === "custom_display" ? this.recurr_type() : pattern);
    this.prev_type.set(this.recurr_type());
  }
  // -----------------------------------------------------------------------
  // Private helpers
  // -----------------------------------------------------------------------
  /** React to a date change from either the signal input or the parent form. */
  _onDateChange(date_value) {
    const day = new Date(date_value).getDate();
    let week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
    let label = `${week}${week === 2 ? "nd" : week === 3 ? "rd" : "th"}`;
    if (week === 4 && day >= 25 || week === 5) {
      label = "Last";
      week = -1;
    }
    if (week === 1)
      label = "First";
    this.instance_of_month.set(label);
    this.iom.set(week);
    if (this._prev_date && this._prev_date !== date_value) {
      this._recalculateValue(date_value, week);
    }
    this._prev_date = date_value;
  }
  /**
   * Recalculate the stored recurrence value to match the new date.
   * Updates weekday, week-of-month, and instance-based end dates.
   * Multi-day custom weekly selections are preserved.
   */
  _recalculateValue(date_value, week) {
    const current = this.value();
    if (!current || current.type === "none")
      return;
    const day_of_week = new Date(date_value).getDay();
    const updated = {};
    const has_multi_day_custom = current._custom && current.weekdays?.size > 1;
    if (!has_multi_day_custom && (current.type === "weekly" || current.type === "monthly" && current.monthly_type === "day_of_week")) {
      updated.weekdays = /* @__PURE__ */ new Set([day_of_week]);
    }
    if (current.type === "monthly" && current.monthly_type === "day_of_week") {
      updated.week = week;
    }
    if (current.end_type === "instances" && current.end_instances) {
      updated.end_date = recurrenceEndDate(current, date_value);
    } else if (current.end_type === "date" && current.end_date && // end_date is always stored as endOfDay(), so this comparison
    // is effectively a day-boundary check: reset only when
    // the entire end day is before the new booking date.
    current.end_date < date_value) {
      updated.end_date = this._allowedEndDate();
    }
    if (Object.keys(updated).length) {
      this.setValue(__spreadValues(__spreadValues({}, current), updated));
    }
  }
  _emitFirstInstance(value) {
    if (!value || value.type === "none")
      return;
    const date_value = this.date();
    if (!date_value)
      return;
    const first_instance = firstRecurrenceInstance(value, date_value);
    if (startOfDay(first_instance).valueOf() === startOfDay(date_value).valueOf()) {
      return;
    }
    this.first_instance.emit(first_instance);
  }
  _clampValueEnd(value) {
    if (!value || value.type === "none")
      return value;
    const max_end_date = this._allowedEndDate();
    if (value.end_type === "date" && value.end_date > max_end_date) {
      return __spreadProps(__spreadValues({}, value), { end_date: max_end_date });
    }
    if (value.end_type !== "instances" || !value.end_instances) {
      return value;
    }
    const updated = __spreadValues({}, value);
    while (updated.end_instances > 1 && recurrenceEndDate(updated, this.date()) > max_end_date) {
      updated.end_instances--;
    }
    updated.end_date = Math.min(recurrenceEndDate(updated, this.date()), max_end_date);
    return updated;
  }
  _allowedEndDate() {
    return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
  }
  /**
   * When a round-tripped value comes back through writeValue, the
   * serialisation/deserialisation may lose the end_instances fields.
   * Restore them from the cached custom value when the pattern matches.
   */
  _restoreCustomEnd(next_value) {
    const custom_value = this._custom_cache() || this.value();
    if (!next_value?._custom || next_value.end_instances || !custom_value?._custom || custom_value.end_type !== "instances" || !this._samePattern(next_value, custom_value)) {
      return next_value;
    }
    return __spreadProps(__spreadValues({}, next_value), {
      end_type: "instances",
      end_instances: custom_value.end_instances,
      end_date: custom_value.end_date || next_value.end_date
    });
  }
  _samePattern(a, b) {
    const same_days = a.type === "weekly" ? this._sameWeekdays(a.weekdays, b.weekdays) : a.type === "monthly" && a.monthly_type === "day_of_week" ? this._sameWeekdays(a.weekdays, b.weekdays) : true;
    return a.type === b.type && a.interval === b.interval && a.week === b.week && a.monthly_type === b.monthly_type && same_days;
  }
  _sameWeekdays(a, b) {
    if (!a?.size && !b?.size)
      return true;
    if (!a || !b || a.size !== b.size)
      return false;
    return Array.from(a).every((day) => b.has(day));
  }
  static {
    this.\u0275fac = function RecurrenceFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurrenceFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurrenceFieldComponent, selectors: [["recurrence-field"]], inputs: { type: [1, "type"], date: [1, "date"], available_days: [1, "available_days"] }, outputs: { first_instance: "first_instance" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _RecurrenceFieldComponent),
        multi: true
      }
    ])], decls: 22, vars: 18, consts: [["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "w-full"], ["value", "none"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["value", "yearly"], ["value", "custom_display"], ["value", "custom", 3, "click"], [1, "w-1/2", "flex-1", "truncate"], [1, "bg-base-200", "border-base-300/30", "mr-2", "rounded", "border", "px-2", "py-1", "text-xs", "uppercase"]], template: function RecurrenceFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-select", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("ngModelChange", function RecurrenceFieldComponent_Template_mat_select_ngModelChange_1_listener($event) {
          return ctx.setSimple($event);
        });
        \u0275\u0275elementStart(3, "mat-select-trigger");
        \u0275\u0275conditionalCreate(4, RecurrenceFieldComponent_Conditional_4_Template, 6, 4, "div", 2)(5, RecurrenceFieldComponent_Conditional_5_Template, 2, 3)(6, RecurrenceFieldComponent_Conditional_6_Template, 3, 9)(7, RecurrenceFieldComponent_Conditional_7_Template, 3, 10)(8, RecurrenceFieldComponent_Conditional_8_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-option", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-option", 4);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, RecurrenceFieldComponent_Conditional_15_Template, 4, 9, "mat-option", 5);
        \u0275\u0275conditionalCreate(16, RecurrenceFieldComponent_Conditional_16_Template, 4, 10, "mat-option", 6);
        \u0275\u0275conditionalCreate(17, RecurrenceFieldComponent_Conditional_17_Template, 3, 4, "mat-option", 7);
        \u0275\u0275conditionalCreate(18, RecurrenceFieldComponent_Conditional_18_Template, 7, 4, "mat-option", 8);
        \u0275\u0275elementStart(19, "mat-option", 9);
        \u0275\u0275listener("click", function RecurrenceFieldComponent_Template_mat_option_click_19_listener() {
          return ctx.openCustomRecurrenceModal();
        });
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.recurr_type())("placeholder", \u0275\u0275pipeBind1(2, 10, "FORM.RECURRENCE_NONE"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.value()?._custom ? 4 : ctx.recurr_type() === "daily" ? 5 : ctx.recurr_type() === "weekly" ? 6 : ctx.recurr_type() === "monthly" ? 7 : 8);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "FORM.RECURRENCE_NONE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "FORM.RECURRENCE_DAILY"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.available_days() >= 14 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_days() >= 28 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(false ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value()?._custom ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 16, "FORM.RECURRENCE_CUSTOM"), " ");
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[value][_ngcontent-%COMP%] {\n  min-width: 3em;\n}\n/*# sourceMappingURL=recurrence-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurrenceFieldComponent, [{
    type: Component,
    args: [{ selector: "recurrence-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [ngModel]="recurr_type()"
                (ngModelChange)="setSimple($event)"
                [placeholder]="'FORM.RECURRENCE_NONE' | translate"
            >
                <mat-select-trigger>
                    @if (value()?._custom) {
                        <div class="flex w-full">
                            <div class="w-1/2 flex-1 truncate">
                                {{ formatted_value() }}
                            </div>
                            <div
                                class="bg-base-200 border-base-300/30 mr-2 rounded border px-2 py-1 text-xs uppercase"
                            >
                                {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                            </div>
                        </div>
                    } @else if (recurr_type() === 'daily') {
                        {{ 'FORM.RECURRENCE_DAILY' | translate }}
                    } @else if (recurr_type() === 'weekly') {
                        {{
                            'FORM.RECURRENCE_WEEKLY_ON'
                                | translate: { day: date() | date: 'EEEE' }
                        }}
                    } @else if (recurr_type() === 'monthly') {
                        {{
                            'FORM.RECURRENCE_MONTH_INSTANCE'
                                | translate
                                    : {
                                          index: instance_of_month(),
                                          day: date() | date: 'EEEE',
                                      }
                        }}
                    } @else {
                        {{ 'FORM.RECURRENCE_NONE' | translate }}
                    }
                </mat-select-trigger>
                <mat-option value="none">{{
                    'FORM.RECURRENCE_NONE' | translate
                }}</mat-option>
                <mat-option value="daily">{{
                    'FORM.RECURRENCE_DAILY' | translate
                }}</mat-option>
                @if (available_days() >= 14) {
                    <mat-option value="weekly">
                        {{
                            'FORM.RECURRENCE_WEEKLY_ON'
                                | translate: { day: date() | date: 'EEEE' }
                        }}
                    </mat-option>
                }
                @if (available_days() >= 28) {
                    <mat-option value="monthly">
                        {{
                            'FORM.RECURRENCE_MONTH_INSTANCE'
                                | translate
                                    : {
                                          index: instance_of_month(),
                                          day: date() | date: 'EEEE',
                                      }
                        }}
                    </mat-option>
                }
                @if (false) {
                    <mat-option value="yearly">
                        Anually on {{ date() | date: 'LLLL dd' }}
                    </mat-option>
                }
                @if (value()?._custom) {
                    <mat-option value="custom_display">
                        <div class="flex w-full">
                            <div class="w-1/2 flex-1 truncate">
                                {{ formatted_value() }}
                            </div>
                            <div
                                class="bg-base-200 border-base-300/30 mr-2 rounded border px-2 py-1 text-xs uppercase"
                            >
                                {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                            </div>
                        </div>
                    </mat-option>
                }
                <mat-option
                    value="custom"
                    (click)="openCustomRecurrenceModal()"
                >
                    {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                </mat-option>
            </mat-select>
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => RecurrenceFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatSelectModule,
      CommonModule,
      TranslatePipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;e72ff6499190df1a26a0774bf65fe07318d67ad23844c1c7de3f5b2dfdc807aa;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/recurrence-field.component.ts */\n[value] {\n  min-width: 3em;\n}\n/*# sourceMappingURL=recurrence-field.component.css.map */\n"] }]
  }], () => [], { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], available_days: [{ type: Input, args: [{ isSignal: true, alias: "available_days", required: false }] }], first_instance: [{ type: Output, args: ["first_instance"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurrenceFieldComponent, { className: "RecurrenceFieldComponent", filePath: "libs/form-fields/src/lib/recurrence-field.component.ts", lineNumber: 157 });
})();

export {
  CounterComponent,
  AssetListFieldComponent,
  RecurrenceFieldComponent
};
//# sourceMappingURL=chunk-BNNN2PTA.js.map
