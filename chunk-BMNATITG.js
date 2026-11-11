import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-LEFKMZNW.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HVV6Q47Y.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-EW7QYLXJ.js";
import {
  FormField
} from "./chunk-Z3HPYWT7.js";
import {
  MatOption
} from "./chunk-45QQOFY3.js";
import {
  TranslatePipe
} from "./chunk-SG45U3DS.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AQIWUFR7.js";

// libs/common/src/lib/timezones.ts
var FIXED_OFFSET_ZONES = [
  ...Array.from({ length: 12 }, (_, i) => `Etc/GMT+${i + 1}`),
  ...Array.from({ length: 14 }, (_, i) => `Etc/GMT-${i + 1}`)
];
var LEGACY_ZONE_NAMES = {
  "Africa/Asmera": "Africa/Asmara",
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Catamarca": "America/Argentina/Catamarca",
  "America/Coral_Harbour": "America/Atikokan",
  "America/Cordoba": "America/Argentina/Cordoba",
  "America/Godthab": "America/Nuuk",
  "America/Indianapolis": "America/Indiana/Indianapolis",
  "America/Jujuy": "America/Argentina/Jujuy",
  "America/Louisville": "America/Kentucky/Louisville",
  "America/Mendoza": "America/Argentina/Mendoza",
  "Asia/Calcutta": "Asia/Kolkata",
  "Asia/Katmandu": "Asia/Kathmandu",
  "Asia/Rangoon": "Asia/Yangon",
  "Asia/Saigon": "Asia/Ho_Chi_Minh",
  "Atlantic/Faeroe": "Atlantic/Faroe",
  "Europe/Kiev": "Europe/Kyiv",
  "Pacific/Enderbury": "Pacific/Kanton",
  "Pacific/Ponape": "Pacific/Pohnpei",
  "Pacific/Truk": "Pacific/Chuuk"
};
function supportedTimezones() {
  const list = Intl.supportedValuesOf?.("timeZone") || [
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ];
  return [
    .../* @__PURE__ */ new Set([
      "UTC",
      ...list.filter(Boolean).map((zone) => LEGACY_ZONE_NAMES[zone] ?? zone),
      ...FIXED_OFFSET_ZONES
    ])
  ].sort();
}
var TIMEZONES_IANA = supportedTimezones();

// apps/concierge/src/app/ui/timezone-field.component.ts
function TimezoneFieldComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r1 = ctx.$implicit;
    \u0275\u0275property("value", tz_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r1);
  }
}
function TimezoneFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
var TimezoneFieldComponent = class _TimezoneFieldComponent {
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
    this.filtered_timezones = computed(
      () => {
        const text = (this.field()().value() || "").toLowerCase();
        return TIMEZONES_IANA.filter((tz) => tz.toLowerCase().includes(text));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function TimezoneFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimezoneFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimezoneFieldComponent, selectors: [["timezone-field"]], hostAttrs: [1, "flex", "flex-col"], inputs: { field_id: [1, "field_id"], field: [1, "field"] }, decls: 13, vars: 11, consts: [["auto", "matAutocomplete"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "id", "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"]], template: function TimezoneFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "label");
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-form-field", 1)(4, "icon", 2);
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "input", 3);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(10, TimezoneFieldComponent_For_11_Template, 2, 2, "mat-option", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(12, TimezoneFieldComponent_Conditional_12_Template, 3, 4, "mat-option", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const auto_r2 = \u0275\u0275reference(9);
        \u0275\u0275attribute("for", ctx.field_id());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "COMMON.TIMEZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("id", ctx.field_id())("formField", ctx.field())("placeholder", \u0275\u0275pipeBind1(7, 9, "COMMON.TIMEZONE"))("matAutocomplete", auto_r2);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered_timezones());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_timezones().length ? 12 : -1);
      }
    }, dependencies: [
      FormField,
      IconComponent,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimezoneFieldComponent, [{
    type: Component,
    args: [{
      selector: "timezone-field",
      template: `
        <label [attr.for]="field_id()">{{
            'COMMON.TIMEZONE' | translate
        }}</label>
        <mat-form-field appearance="outline">
            <icon matPrefix class="text-2xl">search</icon>
            <input
                [id]="field_id()"
                matInput
                [formField]="field()"
                [placeholder]="'COMMON.TIMEZONE' | translate"
                [matAutocomplete]="auto"
            />
        </mat-form-field>
        <mat-autocomplete #auto="matAutocomplete">
            @for (tz of filtered_timezones(); track tz) {
                <mat-option [value]="tz">{{ tz }}</mat-option>
            }
            @if (!filtered_timezones().length) {
                <mat-option [disabled]="true">
                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                </mat-option>
            }
        </mat-autocomplete>
    `,
      host: { class: "flex flex-col" },
      imports: [
        FormField,
        IconComponent,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe
      ]
    }]
  }], null, { field_id: [{ type: Input, args: [{ isSignal: true, alias: "field_id", required: true }] }], field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimezoneFieldComponent, { className: "TimezoneFieldComponent", filePath: "apps/concierge/src/app/ui/timezone-field.component.ts", lineNumber: 52 });
})();

export {
  TimezoneFieldComponent
};
//# debugId=b7632315-c8b4-5005-928a-abdad3787021
//# sourceMappingURL=chunk-BMNATITG.js.map
