import {
  MatSelect,
  MatSelectModule
} from "./chunk-SBGPLKMV.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint
} from "./chunk-54KE5JKV.js";
import {
  MatOption
} from "./chunk-G7ZLBZI3.js";
import {
  FormField
} from "./chunk-GQCWKAWZ.js";
import {
  Component,
  Input,
  booleanAttribute,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/app-settings/settings-option.constants.ts
var AVAILABLE_PERIOD_SHORT_OPTIONS = [
  { value: 1, label: "1 Day" },
  { value: 2, label: "2 Days" },
  { value: 3, label: "3 Days" },
  { value: 4, label: "4 Days" },
  { value: 5, label: "5 Days" },
  { value: 6, label: "6 Days" },
  { value: 7, label: "1 Week" },
  { value: 8, label: "8 Days" },
  { value: 9, label: "9 Days" },
  { value: 10, label: "10 Days" },
  { value: 11, label: "11 Days" },
  { value: 12, label: "12 Days" },
  { value: 13, label: "13 Days" },
  { value: 14, label: "2 Weeks" },
  { value: 21, label: "3 Weeks" },
  { value: 30, label: "1 Month" }
];
var AVAILABLE_PERIOD_EXTENDED_OPTIONS = [
  ...AVAILABLE_PERIOD_SHORT_OPTIONS,
  { value: 45, label: "6 Weeks" },
  { value: 60, label: "2 Months" },
  { value: 90, label: "3 Months" },
  { value: 120, label: "4 Months" },
  { value: 150, label: "5 Months" },
  { value: 180, label: "6 Months" }
];
var MAX_DURATION_FULL_OPTIONS = [
  { value: 60, label: "1 Hour" },
  { value: 90, label: "1 Hour 30 Minutes" },
  { value: 120, label: "2 Hours" },
  { value: 180, label: "3 Hours" },
  { value: 240, label: "4 Hours" },
  { value: 300, label: "5 Hours" },
  { value: 360, label: "6 Hours" },
  { value: 420, label: "7 Hours" },
  { value: 480, label: "8 Hours" },
  { value: 540, label: "9 Hours" },
  { value: 600, label: "10 Hours" },
  { value: 660, label: "11 Hours" },
  { value: 720, label: "12 Hours" },
  { value: 780, label: "13 Hours" },
  { value: 840, label: "14 Hours" },
  { value: 900, label: "15 Hours" },
  { value: 960, label: "16 Hours" },
  { value: 1020, label: "17 Hours" },
  { value: 1080, label: "18 Hours" },
  { value: 1140, label: "19 Hours" },
  { value: 1200, label: "20 Hours" }
];
var MAX_DURATION_SHORT_OPTIONS = MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 720);
var MAX_DURATION_MINI_OPTIONS = MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 480);
var WEEK_START_OPTIONS = [
  { value: 0, label: "Sunday" },
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" }
];
var BLOCK_START_OPTIONS = [
  { value: 0, label: "12AM (Midnight)" },
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" }
];
var BLOCK_END_OPTIONS = [
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" },
  { value: 24, label: "12AM (Midnight)" }
];
var BOOKABLE_HOUR_START_OPTIONS = [
  { value: 0, label: "12AM (Midnight)" },
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" },
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" }
];
var BOOKABLE_HOUR_END_OPTIONS = [
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" },
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" },
  { value: 24, label: "12AM (Midnight)" }
];
var BLOCK_HEIGHT_OPTIONS = [
  { value: 1, label: "1rem (16px)" },
  { value: 1.5, label: "1.5rem (24px)" },
  { value: 2, label: "2rem (32px)" },
  { value: 2.5, label: "2.5rem (40px)" },
  { value: 3, label: "3rem (48px)" },
  { value: 3.5, label: "3.5rem (56px)" },
  { value: 4, label: "4rem (64px)" },
  { value: 4.5, label: "4.5rem (72px)" },
  { value: 5, label: "5rem (80px)" },
  { value: 5.5, label: "5.5rem (88px)" },
  { value: 6, label: "6rem (96px)" },
  { value: 6.5, label: "6.5rem (104px)" },
  { value: 7, label: "7rem (112px)" },
  { value: 7.5, label: "7.5rem (120px)" },
  { value: 8, label: "8rem (128px)" }
];
var SETUP_BREAKDOWN_OPTIONS = [
  { value: 5, label: "5 Minutes" },
  { value: 10, label: "10 Minutes" },
  { value: 15, label: "15 Minutes" },
  { value: 30, label: "30 Minutes" },
  { value: 45, label: "45 Minutes" },
  { value: 60, label: "1 Hour" },
  { value: 90, label: "1 Hour 30 Minutes" },
  { value: 120, label: "2 Hours" }
];
var EXPLORE_FEATURE_OPTIONS = [
  { value: "devices", label: "Devices" },
  { value: "desks", label: "Desks" },
  { value: "lockers", label: "Lockers" },
  { value: "parking", label: "Parking" },
  { value: "spaces", label: "Rooms" },
  { value: "spaces-presence", label: "Room Presence" },
  { value: "zones", label: "Zones" }
];
var BANNER_TYPE_OPTIONS = [
  { value: "", label: "None" },
  { value: "info", label: "Info" },
  { value: "warn", label: "Warning" },
  { value: "error", label: "Error" }
];
var DAY_TIMELINE_VIEW_OPTIONS = [
  { value: "default", label: "Timeline" },
  { value: "inverted", label: "Timeline (Rooms Vertical)" }
];

// apps/concierge/src/app/ui/app-settings/settings-select.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function SettingsSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.null_option());
  }
}
function SettingsSelectComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r2.label);
  }
}
function SettingsSelectComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint());
  }
}
var SettingsSelectComponent = class _SettingsSelectComponent {
  constructor() {
    this.field_id = input.required(
      ...ngDevMode ? [{ debugName: "field_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input.required(
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.field = input.required(
      ...ngDevMode ? [{ debugName: "field" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input.required(
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hint = input(
      "",
      ...ngDevMode ? [{ debugName: "hint" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = input(
      "",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.null_option = input(
      "",
      ...ngDevMode ? [{ debugName: "null_option" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.multiple = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "multiple" } : (
      /* istanbul ignore next */
      {}
    )), { transform: booleanAttribute }));
  }
  static {
    this.\u0275fac = function SettingsSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsSelectComponent, selectors: [["settings-select"]], inputs: { field_id: [1, "field_id"], label: [1, "label"], field: [1, "field"], options: [1, "options"], hint: [1, "hint"], placeholder: [1, "placeholder"], null_option: [1, "null_option"], multiple: [1, "multiple"] }, decls: 8, vars: 9, consts: [[3, "id"], ["appearance", "outline", 1, "w-full"], [3, "aria-labelledby", "formField", "placeholder", "multiple"], [3, "value"]], template: function SettingsSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "label", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-form-field", 1)(3, "mat-select", 2);
        \u0275\u0275conditionalCreate(4, SettingsSelectComponent_Conditional_4_Template, 2, 2, "mat-option", 3);
        \u0275\u0275repeaterCreate(5, SettingsSelectComponent_For_6_Template, 2, 2, "mat-option", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(7, SettingsSelectComponent_Conditional_7_Template, 2, 1, "mat-hint");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.field_id() + "-label");
        \u0275\u0275attribute("for", ctx.field_id());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275ariaProperty("aria-labelledby", ctx.field_id() + "-label");
        \u0275\u0275property("formField", ctx.field())("placeholder", ctx.placeholder())("multiple", ctx.multiple());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.null_option() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.options());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hint() ? 7 : -1);
      }
    }, dependencies: [FormField, MatFormFieldModule, MatFormField, MatHint, MatSelectModule, MatSelect, MatOption], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=settings-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsSelectComponent, [{
    type: Component,
    args: [{ selector: "settings-select", template: `
        <label [attr.for]="field_id()" [id]="field_id() + '-label'">
            {{ label() }}
        </label>
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [aria-labelledby]="field_id() + '-label'"
                [formField]="field()"
                [placeholder]="placeholder()"
                [multiple]="multiple()"
            >
                @if (null_option()) {
                    <mat-option [value]="null">{{ null_option() }}</mat-option>
                }
                @for (opt of options(); track opt.value) {
                    <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                }
            </mat-select>
            @if (hint()) {
                <mat-hint>{{ hint() }}</mat-hint>
            }
        </mat-form-field>
    `, imports: [FormField, MatFormFieldModule, MatSelectModule], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/settings-select.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=settings-select.component.css.map */\n"] }]
  }], null, { field_id: [{ type: Input, args: [{ isSignal: true, alias: "field_id", required: true }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true }] }], hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], null_option: [{ type: Input, args: [{ isSignal: true, alias: "null_option", required: false }] }], multiple: [{ type: Input, args: [{ isSignal: true, alias: "multiple", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsSelectComponent, { className: "SettingsSelectComponent", filePath: "apps/concierge/src/app/ui/app-settings/settings-select.component.ts", lineNumber: 55 });
})();

export {
  AVAILABLE_PERIOD_SHORT_OPTIONS,
  AVAILABLE_PERIOD_EXTENDED_OPTIONS,
  MAX_DURATION_FULL_OPTIONS,
  MAX_DURATION_SHORT_OPTIONS,
  MAX_DURATION_MINI_OPTIONS,
  WEEK_START_OPTIONS,
  BLOCK_START_OPTIONS,
  BLOCK_END_OPTIONS,
  BOOKABLE_HOUR_START_OPTIONS,
  BOOKABLE_HOUR_END_OPTIONS,
  BLOCK_HEIGHT_OPTIONS,
  SETUP_BREAKDOWN_OPTIONS,
  EXPLORE_FEATURE_OPTIONS,
  BANNER_TYPE_OPTIONS,
  DAY_TIMELINE_VIEW_OPTIONS,
  SettingsSelectComponent
};
//# debugId=2c4ff04c-73cc-5075-af56-b0c9c9994031
//# sourceMappingURL=chunk-DFMS6OXJ.js.map
