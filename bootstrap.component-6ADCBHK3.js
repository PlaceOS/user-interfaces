import {
  MatCheckbox,
  MatCheckboxModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  VirtualKeyboardComponent,
  toSignal
} from "./chunk-OL3XZMQI.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-CBHKSSSY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-C4WVLYL5.js";
import {
  MatOption
} from "./chunk-VCFW5EQV.js";
import "./chunk-FCVO2NPY.js";
import {
  TranslatePipe
} from "./chunk-UN2M3FQY.js";
import {
  OrganisationService,
  VERSION
} from "./chunk-MCCKOSH2.js";
import {
  AsyncHandler
} from "./chunk-HBZWLUC7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-HBUZCIWR.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-WIII3HJ5.js";
import "./chunk-XGSYTLXL.js";
import {
  IconComponent
} from "./chunk-OJNWTBAF.js";
import "./chunk-DPR4NPC4.js";
import "./chunk-KH4YRB6W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-LE5PL226.js";
import "./chunk-BCG4DI6F.js";
import "./chunk-RE2CV4MU.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LTZZT25P.js";
import "./chunk-GOMI4DH3.js";

// libs/components/src/lib/settings-toggle.component.ts
var _c0 = ["*"];
function SettingsToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function SettingsToggleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "div", 9)(3, "icon");
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
function SettingsToggleComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 10);
    \u0275\u0275listener("ngModelChange", function SettingsToggleComponent_Conditional_10_Template_mat_checkbox_ngModelChange_0_listener($event) {
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
    this.inline = input(
      true,
      ...ngDevMode ? [{ debugName: "inline" }] : (
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { toggle: [1, "toggle"], label: [1, "label"], info: [1, "info"], inline: [1, "inline"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _SettingsToggleComponent),
        multi: true
      }
    ])], ngContentSelectors: _c0, decls: 11, vars: 13, consts: [["type", "button", "matRipple", "", 1, "hover:bg-base-200", "relative", "flex", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-1", "pl-2", 3, "click"], [1, "z-10", "flex", "flex-1", "items-center", "space-x-2", "px-2", "text-left"], [1, "flex", "h-full", "w-full", "flex-col", "justify-center", "leading-none"], [1, "text-xs", "opacity-30"], [3, "matTooltip"], [1, "bg-info", "absolute", "inset-0", "z-0", "m-0!", "opacity-10"], [1, "px-2"], [1, "pointer-events-none", 3, "ngModel"], ["toggle", "", 1, "border-base-400", "relative", "h-8", "w-12", "rounded-full", "border-2"], [1, "absolute", "top-1/2", "flex", "h-6", "w-6", "-translate-x-0.5", "-translate-y-1/2", "items-center", "justify-center", "rounded-full", "text-black", "shadow-sm"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
          return ctx.setValue(!ctx.value());
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div");
        \u0275\u0275text(4);
        \u0275\u0275projection(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, SettingsToggleComponent_Conditional_7_Template, 2, 1, "icon", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SettingsToggleComponent_Conditional_8_Template, 1, 0, "div", 5);
        \u0275\u0275conditionalCreate(9, SettingsToggleComponent_Conditional_9_Template, 5, 15, "div", 6)(10, SettingsToggleComponent_Conditional_10_Template, 1, 1, "mat-checkbox", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-base-300", !ctx.value())("border-info", ctx.value());
        \u0275\u0275advance();
        \u0275\u0275classProp("py-2", !ctx.inline())("py-1", ctx.inline());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.info() && ctx.inline() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.info() && !ctx.inline() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggle() ? 9 : 10);
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
            <div
                class="z-10 flex flex-1 items-center space-x-2 px-2 text-left"
                [class.py-2]="!inline()"
                [class.py-1]="inline()"
            >
                <div
                    class="flex h-full w-full flex-col justify-center leading-none"
                >
                    <div>{{ label() }}<ng-content></ng-content></div>
                    @if (info() && inline()) {
                        <div class="text-xs opacity-30">{{ info() }}</div>
                    }
                </div>
                @if (info() && !inline()) {
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
  }], null, { toggle: [{ type: Input, args: [{ isSignal: true, alias: "toggle", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }], inline: [{ type: Input, args: [{ isSignal: true, alias: "inline", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "libs/components/src/lib/settings-toggle.component.ts", lineNumber: 93 });
})();

// apps/map-kiosk/src/app/bootstrap.component.ts
function BootstrapComponent_Conditional_11_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17)(1, "div", 18)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r3.display_name || option_r3.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r3.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Select a region from the dropdown below");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field", 12)(3, "mat-select", 13, 0);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_1_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275elementStart(5, "mat-select-trigger")(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(11, BootstrapComponent_Conditional_11_Conditional_1_For_12_Template, 10, 3, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.active_region());
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.display_name || ctx_r1.active_region()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function BootstrapComponent_Conditional_11_Conditional_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17)(1, "div", 18)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 20);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r5.display_name || option_r5.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r5.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Select a building from the dropdown below");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field", 12)(3, "mat-select", 21, 0);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_2_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275elementStart(5, "mat-select-trigger")(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(11, BootstrapComponent_Conditional_11_Conditional_2_For_12_Template, 10, 3, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.active_building());
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.display_name || ctx_r1.active_building()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17)(1, "div", 18)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r7.display_name || option_r7.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r7.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 25);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_3_Conditional_14_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.parking.set($event));
    });
    \u0275\u0275text(1, "Show as fixed parking display");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", ctx_r1.parking());
    \u0275\u0275control();
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "Select a level from the dropdown below");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 23, 0);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.active_level.set($event));
    });
    \u0275\u0275elementStart(6, "mat-select-trigger")(7, "div", 14)(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(12, BootstrapComponent_Conditional_11_Conditional_3_For_13_Template, 10, 3, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, BootstrapComponent_Conditional_11_Conditional_3_Conditional_14_Template, 2, 1, "settings-toggle", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.active_level());
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.display_name || ctx_r1.active_level()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.active_level()?.tags.includes("parking") ? 14 : -1);
  }
}
function BootstrapComponent_Conditional_11_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17)(1, "div", 18)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    \u0275\u0275property("value", option_r10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r10.display_name || option_r10.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r10.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, " Please select an orientation from the dropdown below ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 26, 0);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_4_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.active_rotation.set($event));
    });
    \u0275\u0275repeaterCreate(6, BootstrapComponent_Conditional_11_Conditional_4_For_7_Template, 10, 3, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.active_rotation());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rotations());
  }
}
function BootstrapComponent_Conditional_11_Conditional_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17)(1, "div", 18)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    \u0275\u0275property("value", option_r12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r12.display_name || option_r12.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r12.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, " Please select an fixed location from the dropdown below ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 27, 0);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_5_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.active_location.set($event));
    });
    \u0275\u0275repeaterCreate(6, BootstrapComponent_Conditional_11_Conditional_5_For_7_Template, 10, 3, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.active_location());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
function BootstrapComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, BootstrapComponent_Conditional_11_Conditional_1_Template, 13, 3);
    \u0275\u0275conditionalCreate(2, BootstrapComponent_Conditional_11_Conditional_2_Template, 13, 3);
    \u0275\u0275conditionalCreate(3, BootstrapComponent_Conditional_11_Conditional_3_Template, 15, 4);
    \u0275\u0275conditionalCreate(4, BootstrapComponent_Conditional_11_Conditional_4_Template, 8, 1);
    \u0275\u0275conditionalCreate(5, BootstrapComponent_Conditional_11_Conditional_5_Template, 8, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.regions().length > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.buildings().length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.levels().length && ctx_r1.active_building() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rotations().length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.locations().length ? 5 : -1);
  }
}
function BootstrapComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function BootstrapComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 29);
    \u0275\u0275listener("click", function BootstrapComponent_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bootstrapKiosk());
    });
    \u0275\u0275text(2, " Finish Setup ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.active_level());
  }
}
var BootstrapComponent = class _BootstrapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._query_params = toSignal(this._route.queryParamMap);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_query_params = effect(
      () => {
        if (!this._ready())
          return;
        const params = this._query_params();
        if (!params)
          return;
        untracked(() => this.handleQueryParams(params));
      },
      ...ngDevMode ? [{ debugName: "_handle_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      null,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_region = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_building = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_level = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_rotation = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_rotation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_location = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.parking = signal(
      false,
      ...ngDevMode ? [{ debugName: "parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rotations = signal(
      [],
      ...ngDevMode ? [{ debugName: "rotations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.regions = this._org.region_list;
    this.buildings = this._org.active_buildings;
    this.levels = this._org.active_levels;
    this.locations = computed(
      () => {
        const active_level = this.active_level();
        if (!active_level) {
          return [];
        }
        return active_level.locations || [];
      },
      ...ngDevMode ? [{ debugName: "locations" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get version() {
    return VERSION;
  }
  setRegion(region) {
    this._org.region = region;
    this.active_region.set(region);
    this.active_building.set(null);
    this.active_level.set(null);
    this.active_location.set(null);
    this.updateRotations();
  }
  setBuilding(building) {
    this._org.building = building;
    this.active_building.set(building);
    this.active_level.set(null);
    this.active_location.set(null);
    this.updateRotations();
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.active_region.set(this._org.region);
    this._ready.set(true);
    this.timeout("check", () => this.checkBootstrap(), 1e3);
  }
  /** React to changes in the route query parameters */
  handleQueryParams(params) {
    if (params.has("osk")) {
      const osk_enabled = params.get("osk") === "true";
      localStorage.setItem("OSK.enabled", `${osk_enabled}`);
    }
    if (params.has("clear") && params.get("clear") === "true") {
      localStorage.removeItem("KIOSK.building");
      localStorage.removeItem("KIOSK.level");
      localStorage.removeItem("KIOSK.parking");
      localStorage.removeItem("KIOSK.orientation");
      localStorage.removeItem("KIOSK.location");
    }
    if (params.has("level")) {
      const level = this._org.levelWithID([params.get("level")]);
      if (level) {
        this.active_level.set(level);
        this.bootstrapKiosk();
      }
    }
  }
  updateRotations() {
    this.rotations.set([]);
    const active_building = this.active_building();
    if (!active_building) {
      this.active_rotation.set(null);
      return;
    }
    const orientations = active_building.orientations;
    const rotations = [];
    for (const key in orientations) {
      if (orientations[key]) {
        rotations.push({
          id: key,
          name: `${key.split("_").join(" ")} (${orientations[key] * 90}\xB0)`,
          value: orientations[key]
        });
      }
    }
    this.rotations.set(rotations);
    this.active_rotation.set(rotations[0] || null);
  }
  /**
   * Store bootstrapped values and navigate to the main page
   */
  bootstrapKiosk() {
    this.loading.set("Bootstrapping application...");
    const active_level = this.active_level();
    const active_building = this.active_building();
    const active_rotation = this.active_rotation();
    const active_location = this.active_location();
    const parking = this.parking();
    if (active_level) {
      if (localStorage) {
        localStorage.setItem("KIOSK.building", active_building?.id || active_level.parent_id);
        localStorage.setItem("KIOSK.level", active_level.id);
        if (parking)
          localStorage.setItem("KIOSK.parking", `true`);
        else
          localStorage.removeItem("KIOSK.parking");
        if (active_rotation) {
          localStorage.setItem("KIOSK.orientation", `${active_rotation.id}`);
        } else
          localStorage.removeItem("KIOSK.orientation");
        if (active_location) {
          localStorage.setItem("KIOSK.location", `${active_location.id}`);
        } else
          localStorage.removeItem("KIOSK.location");
      }
      this._router.navigate([parking ? "/parking" : "/explore"]);
    }
    this.loading.set(null);
  }
  /**
   * Check for any existing bootstrapped values
   */
  checkBootstrap() {
    this.loading.set("Checking for existing parameters...");
    const building_id = localStorage?.getItem("KIOSK.building");
    const level_id = localStorage?.getItem("KIOSK.level");
    const parking = localStorage?.getItem("KIOSK.parking");
    if (building_id && level_id) {
      this._router.navigate([parking ? "/parking" : "/explore"]);
    }
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    this.loading.set(null);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BootstrapComponent_BaseFactory;
      return function BootstrapComponent_Factory(__ngFactoryType__) {
        return (\u0275BootstrapComponent_BaseFactory || (\u0275BootstrapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BootstrapComponent)))(__ngFactoryType__ || _BootstrapComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "bootstrap", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 20, consts: [["select", ""], [1, "bg-base-200", "absolute", "inset-0", "z-0"], ["form", "", 1, "border-base-200", "bg-base-100", "relative", "z-10", "mx-auto", "my-8", "w-md", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], [1, "flex", "flex-col", "px-4"], [1, "m-auto", "flex", "flex-col", "items-center", "p-8"], [1, "border-base-200", "mt-4!", "flex", "w-full", "items-center", "justify-end", "border-t", "px-4", "py-2"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-40"], ["appearance", "outline", 1, "no-subscript"], ["building", "", "placeholder", "Select region", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "bg-base-200", "mr-4!", "rounded-sm", "px-1.5", "font-mono", "text-[0.625rem]"], [3, "value"], [1, "leading-tight"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "hidden"], ["building", "", "placeholder", "Select building", 3, "ngModelChange", "ngModel"], [1, "font-mono", "text-[0.625rem]", "opacity-60"], ["level", "", "placeholder", "Select level", 3, "ngModelChange", "ngModel"], [1, "mt-2", 3, "ngModel"], [1, "mt-2", 3, "ngModelChange", "ngModel"], ["placeholder", "Select orientation", 3, "ngModelChange", "ngModel"], ["placeholder", "Select location", 3, "ngModelChange", "ngModel"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function BootstrapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "div");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "div", 5);
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(11, BootstrapComponent_Conditional_11_Template, 6, 5, "div", 7)(12, BootstrapComponent_Conditional_12_Template, 4, 2, "div", 8);
        \u0275\u0275conditionalCreate(13, BootstrapComponent_Conditional_13_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275pipe(21, "date");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "COMMON.MAP_KIOSK"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "COMMON.BOOTSTRAP_SETUP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 12, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 14, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(21, 17, ctx.version.time, "shortTime"), ") ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      SettingsToggleComponent,
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{ selector: "[bootstrap]", template: `
        <div class="bg-base-200 absolute inset-0 z-0"></div>
        <div
            form
            class="border-base-200 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
        >
            <header
                class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
            >
                <div>
                    {{ 'COMMON.MAP_KIOSK' | translate }}
                </div>
                <div class="relative overflow-hidden rounded-sm px-2 py-1">
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-10"
                    ></div>
                    <div class="relative z-10 font-mono text-sm uppercase">
                        {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                    </div>
                </div>
            </header>
            @if (!loading()) {
                <div class="flex flex-col px-4">
                    @if (regions().length > 1) {
                        <label>Select a region from the dropdown below</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                building
                                [ngModel]="active_region()"
                                (ngModelChange)="setRegion($event)"
                                placeholder="Select region"
                            >
                                <mat-select-trigger>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 truncate">
                                            {{
                                                active_region()?.display_name ||
                                                    active_region()?.name
                                            }}
                                        </div>
                                        <div
                                            class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                        >
                                            {{ active_region()?.id }}
                                        </div>
                                    </div>
                                </mat-select-trigger>
                                @for (option of regions(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (buildings().length) {
                        <label>Select a building from the dropdown below</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                building
                                [ngModel]="active_building()"
                                (ngModelChange)="setBuilding($event)"
                                placeholder="Select building"
                            >
                                <mat-select-trigger>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 truncate">
                                            {{
                                                active_building()
                                                    ?.display_name ||
                                                    active_building()?.name
                                            }}
                                        </div>
                                        <div
                                            class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                        >
                                            {{ active_building()?.id }}
                                        </div>
                                    </div>
                                </mat-select-trigger>
                                @for (option of buildings(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-60"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (levels().length && active_building()) {
                        <div></div>
                        <label>Select a level from the dropdown below</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                level
                                [ngModel]="active_level()"
                                (ngModelChange)="active_level.set($event)"
                                placeholder="Select level"
                            >
                                <mat-select-trigger>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 truncate">
                                            {{
                                                active_level()?.display_name ||
                                                    active_level()?.name
                                            }}
                                        </div>
                                        <div
                                            class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                        >
                                            {{ active_level()?.id }}
                                        </div>
                                    </div>
                                </mat-select-trigger>
                                @for (option of levels(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        @if (active_level()?.tags.includes('parking')) {
                            <settings-toggle
                                [ngModel]="parking()"
                                (ngModelChange)="parking.set($event)"
                                class="mt-2"
                                >Show as fixed parking display</settings-toggle
                            >
                        }
                    }
                    @if (rotations().length) {
                        <div></div>
                        <label>
                            Please select an orientation from the dropdown below
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                [ngModel]="active_rotation()"
                                (ngModelChange)="active_rotation.set($event)"
                                placeholder="Select orientation"
                            >
                                @for (option of rotations(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (locations().length) {
                        <div></div>
                        <label>
                            Please select an fixed location from the dropdown
                            below
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                [ngModel]="active_location()"
                                (ngModelChange)="active_location.set($event)"
                                placeholder="Select location"
                            >
                                @for (option of locations(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                </div>
            } @else {
                <div class="m-auto flex flex-col items-center p-8">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            }
            @if (!loading()) {
                <div
                    class="border-base-200 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="!active_level()"
                        (click)="bootstrapKiosk()"
                    >
                        Finish Setup
                    </button>
                </div>
            }
        </div>
        <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
            <div class="text-xs opacity-40">
                {{ 'COMMON.CONTROLS_VERSION' | translate }}: {{ version.hash }}
            </div>
            <div class="text-xs opacity-40">
                {{ version.time | date: 'longDate' }}
                ({{ version.time | date: 'shortTime' }})
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      SettingsToggleComponent,
      CommonModule,
      FormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;b5cb44247b14df9ceaa1cde6e18e7655f7940be592d59e7ac7be62a75ddd59dd;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/bootstrap.component.ts */\nmat-form-field {\n  width: 100%;\n}\nlabel {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/map-kiosk/src/app/bootstrap.component.ts", lineNumber: 354 });
})();
export {
  BootstrapComponent
};
//# debugId=ede3f47e-117d-5403-9833-2d71406d04c6
//# sourceMappingURL=bootstrap.component-6ADCBHK3.js.map
