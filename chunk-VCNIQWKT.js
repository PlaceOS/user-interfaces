import {
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-5URWLHVZ.js";
import {
  IconComponent
} from "./chunk-QOLUT6QZ.js";
import {
  Component,
  FormsModule,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  forwardRef,
  input,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-P3URBYOL.js";

// libs/components/src/lib/settings-toggle.component.ts
var _c0 = ["*"];
function SettingsToggleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 3);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function SettingsToggleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "div", 8)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.value())("bg-info", ctx_r0.value())("border-info!", ctx_r0.value());
    \u0275\u0275advance();
    \u0275\u0275classProp("left-1", !ctx_r0.value())("left-5", ctx_r0.value())("bg-base-400", !ctx_r0.value())("bg-info-light", ctx_r0.value());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.value() ? "done" : "remove");
  }
}
function SettingsToggleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 9);
    \u0275\u0275listener("ngModelChange", function SettingsToggleComponent_Conditional_8_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.value());
    \u0275\u0275control();
  }
}
var SettingsToggleComponent = class _SettingsToggleComponent {
  constructor() {
    this.toggle = input(
      void 0,
      ...ngDevMode ? [{ debugName: "toggle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input(
      void 0,
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.info = input(
      void 0,
      ...ngDevMode ? [{ debugName: "info" }] : (
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
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value.set(new_value);
    if (this._onChange)
      this._onChange(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  static {
    this.\u0275fac = function SettingsToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { toggle: [1, "toggle"], label: [1, "label"], info: [1, "info"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _SettingsToggleComponent),
        multi: true
      }
    ])], ngContentSelectors: _c0, decls: 9, vars: 8, consts: [["type", "button", "matRipple", "", 1, "hover:bg-base-200", "relative", "flex", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-1", "pl-2", 3, "click"], [1, "z-10", "flex", "flex-1", "items-center", "space-x-2", "p-2", "text-left"], [1, "w-full"], [3, "matTooltip"], [1, "bg-info", "absolute", "inset-0", "z-0", "m-0!", "opacity-10"], [1, "px-2"], [1, "pointer-events-none", 3, "ngModel"], ["toggle", "", 1, "border-base-400", "relative", "h-8", "w-12", "rounded-full", "border-2"], [1, "absolute", "top-1/2", "flex", "h-6", "w-6", "-translate-x-0.5", "-translate-y-1/2", "items-center", "justify-center", "rounded-full", "text-black", "shadow-sm"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
          return ctx.setValue(!ctx.value());
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, SettingsToggleComponent_Conditional_5_Template, 2, 1, "icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 1, 0, "div", 4);
        \u0275\u0275conditionalCreate(7, SettingsToggleComponent_Conditional_7_Template, 5, 15, "div", 5)(8, SettingsToggleComponent_Conditional_8_Template, 1, 1, "mat-checkbox", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-base-300", !ctx.value())("border-info", ctx.value());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.info() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggle() ? 7 : 8);
      }
    }, dependencies: [MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n[toggle][_ngcontent-%COMP%] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsToggleComponent, [{
    type: Component,
    args: [{ selector: "settings-toggle", template: `
        <button
            type="button"
            matRipple
            class="hover:bg-base-200 relative flex flex-1 items-center space-x-2 overflow-hidden rounded-sm border py-1 pr-1 pl-2"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            (click)="setValue(!value())"
        >
            <div class="z-10 flex flex-1 items-center space-x-2 p-2 text-left">
                <div class="w-full">
                    {{ label() }}
                    <ng-content></ng-content>
                </div>
                @if (info()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            @if (value()) {
                <div class="bg-info absolute inset-0 z-0 m-0! opacity-10"></div>
            }
            @if (toggle()) {
                <div class="px-2">
                    <div
                        toggle
                        class="border-base-400 relative h-8 w-12 rounded-full border-2"
                        [class.bg-base-200]="!value()"
                        [class.bg-info]="value()"
                        [class.border-info!]="value()"
                    >
                        <div
                            class="absolute top-1/2 flex h-6 w-6 -translate-x-0.5 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-sm"
                            [class.left-1]="!value()"
                            [class.left-5]="value()"
                            [class.bg-base-400]="!value()"
                            [class.bg-info-light]="value()"
                        >
                            <icon>{{ value() ? 'done' : 'remove' }}</icon>
                        </div>
                    </div>
                </div>
            } @else {
                <mat-checkbox
                    [ngModel]="value()"
                    (ngModelChange)="setValue($event)"
                    class="pointer-events-none"
                ></mat-checkbox>
            }
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SettingsToggleComponent),
        multi: true
      }
    ], imports: [MatCheckboxModule, FormsModule, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;09d472dfc67150cf01347a580874515fc3cc343b61a90041f2b167ad15a01cf4;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/settings-toggle.component.ts */\n:host {\n  display: flex;\n}\n[toggle] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */\n"] }]
  }], null, { toggle: [{ type: Input, args: [{ isSignal: true, alias: "toggle", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "libs/components/src/lib/settings-toggle.component.ts", lineNumber: 85 });
})();

export {
  SettingsToggleComponent
};
//# sourceMappingURL=chunk-VCNIQWKT.js.map
