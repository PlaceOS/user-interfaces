import {
  MatSelect,
  MatSelectModule
} from "./chunk-SBGPLKMV.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-JKVESZ3F.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  buildCurrencyOptions
} from "./chunk-6ETA7VOK.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  signal,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAVCSYNX.js";

// apps/concierge/src/app/ui/app-settings/settings-currency-select.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.code;
function SettingsCurrencySelectComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.display_name, " ");
  }
}
function SettingsCurrencySelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1, " No currencies match your search ");
    \u0275\u0275elementEnd();
  }
}
var SettingsCurrencySelectComponent = class _SettingsCurrencySelectComponent {
  constructor() {
    this.field_id = input.required(
      ...ngDevMode ? [{ debugName: "field_id" }] : (
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
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = buildCurrencyOptions();
    this.filtered_options = computed(
      () => {
        const filter_text = this.filter().trim().toLowerCase();
        if (!filter_text)
          return this.options;
        return this.options.filter((option) => option.search_text.includes(filter_text));
      },
      ...ngDevMode ? [{ debugName: "filtered_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Clear the search when the select panel closes. */
  onOpenedChange(is_open) {
    if (!is_open)
      this.filter.set("");
  }
  static {
    this.\u0275fac = function SettingsCurrencySelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsCurrencySelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsCurrencySelectComponent, selectors: [["settings-currency-select"]], inputs: { field_id: [1, "field_id"], field: [1, "field"] }, decls: 11, vars: 8, consts: [[3, "id"], ["appearance", "outline", 1, "w-full"], ["placeholder", "Select currency code", 3, "openedChange", "aria-labelledby", "formField"], ["disabled", "", 1, "!h-auto", "!py-2"], ["matInput", "", "placeholder", "Search currency code or name", 3, "ngModelChange", "click", "keydown", "ngModel", "ngModelOptions"], [3, "value"], ["disabled", ""]], template: function SettingsCurrencySelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "label", 0);
        \u0275\u0275text(1, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-form-field", 1)(3, "mat-select", 2);
        \u0275\u0275listener("openedChange", function SettingsCurrencySelectComponent_Template_mat_select_openedChange_3_listener($event) {
          return ctx.onOpenedChange($event);
        });
        \u0275\u0275elementStart(4, "mat-option", 3)(5, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsCurrencySelectComponent_Template_input_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
          return $event;
        });
        \u0275\u0275listener("click", function SettingsCurrencySelectComponent_Template_input_click_5_listener($event) {
          return $event.stopPropagation();
        })("keydown", function SettingsCurrencySelectComponent_Template_input_keydown_5_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(6, SettingsCurrencySelectComponent_For_7_Template, 2, 2, "mat-option", 5, _forTrack0);
        \u0275\u0275conditionalCreate(8, SettingsCurrencySelectComponent_Conditional_8_Template, 2, 0, "mat-option", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(9, "mat-hint");
        \u0275\u0275text(10, "ISO 4217 currency code for pricing");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.field_id() + "-label");
        \u0275\u0275attribute("for", ctx.field_id());
        \u0275\u0275advance(3);
        \u0275\u0275ariaProperty("aria-labelledby", ctx.field_id() + "-label");
        \u0275\u0275property("formField", ctx.field());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_options());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_options().length ? 8 : -1);
      }
    }, dependencies: [
      FormField,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatHint,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=settings-currency-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsCurrencySelectComponent, [{
    type: Component,
    args: [{ selector: "settings-currency-select", template: `
        <label [attr.for]="field_id()" [id]="field_id() + '-label'"
            >Currency</label
        >
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [aria-labelledby]="field_id() + '-label'"
                [formField]="field()"
                placeholder="Select currency code"
                (openedChange)="onOpenedChange($event)"
            >
                <mat-option disabled class="!h-auto !py-2">
                    <input
                        matInput
                        placeholder="Search currency code or name"
                        [(ngModel)]="filter"
                        [ngModelOptions]="{ standalone: true }"
                        (click)="$event.stopPropagation()"
                        (keydown)="$event.stopPropagation()"
                    />
                </mat-option>
                @for (option of filtered_options(); track option.code) {
                    <mat-option [value]="option.code">
                        {{ option.display_name }}
                    </mat-option>
                }
                @if (!filtered_options().length) {
                    <mat-option disabled>
                        No currencies match your search
                    </mat-option>
                }
            </mat-select>
            <mat-hint>ISO 4217 currency code for pricing</mat-hint>
        </mat-form-field>
    `, imports: [
      FormField,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/settings-currency-select.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=settings-currency-select.component.css.map */\n"] }]
  }], null, { field_id: [{ type: Input, args: [{ isSignal: true, alias: "field_id", required: true }] }], field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsCurrencySelectComponent, { className: "SettingsCurrencySelectComponent", filePath: "apps/concierge/src/app/ui/app-settings/settings-currency-select.component.ts", lineNumber: 67 });
})();

export {
  SettingsCurrencySelectComponent
};
//# debugId=7ec065cc-4372-57e2-8382-e500d0675949
//# sourceMappingURL=chunk-W7XCYC53.js.map
