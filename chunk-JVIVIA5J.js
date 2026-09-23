import {
  SettingsToggleComponent
} from "./chunk-LCQDVA3T.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-V4XLJ2SN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-XG3NPPBO.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-RSKYLYEV.js";
import {
  Component,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  Input,
  MatOption,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  computed,
  effect,
  forwardRef,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QSNPLM4U.js";

// libs/components/src/lib/schema-form.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
function SchemaFormComponent_Conditional_0_For_2_Case_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(2, SchemaFormComponent_Conditional_0_For_2_Case_0_Conditional_2_Template, 2, 1, "p", 3);
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("formControlName", field_r1.key);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 2 : -1);
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.label, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "mat-select", 2);
    \u0275\u0275repeaterCreate(7, SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template, 2, 2, "mat-option", 6, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r1.key);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r1.options);
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5);
    \u0275\u0275element(6, "input", 7);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r1.key)("name", field_r1.key)("placeholder", field_r1.label);
    \u0275\u0275control();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5);
    \u0275\u0275element(6, "input", 8);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r1.key)("name", field_r1.key)("placeholder", field_r1.label);
    \u0275\u0275control();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_For_2_Case_0_Template, 3, 3)(1, SchemaFormComponent_Conditional_0_For_2_Case_1_Template, 9, 5, "div", 1)(2, SchemaFormComponent_Conditional_0_For_2_Case_2_Template, 7, 7, "div", 1)(3, SchemaFormComponent_Conditional_0_For_2_Case_3_Template, 7, 7, "div", 1);
  }
  if (rf & 2) {
    let tmp_11_0;
    const field_r1 = ctx.$implicit;
    \u0275\u0275conditional((tmp_11_0 = field_r1.type) === "boolean" ? 0 : tmp_11_0 === "select" ? 1 : tmp_11_0 === "number" ? 2 : 3);
  }
}
function SchemaFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, SchemaFormComponent_Conditional_0_For_2_Template, 4, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.defaults_form());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fields());
  }
}
function parseSchemaFields(schema) {
  if (!schema?.properties)
    return [];
  const required_keys = schema.required || [];
  const properties = schema.properties;
  return Object.entries(properties).map(([key, prop]) => {
    const json_type = prop.type;
    const has_enum = Array.isArray(prop.enum);
    let type = "string";
    if (has_enum) {
      type = "select";
    } else if (json_type === "boolean") {
      type = "boolean";
    } else if (json_type === "number" || json_type === "integer") {
      type = "number";
    }
    const options = has_enum ? prop.enum.map((v) => ({
      label: String(v),
      value: v
    })) : void 0;
    return {
      key,
      type,
      label: prop.title || key,
      description: prop.description || "",
      required: required_keys.includes(key),
      default_value: prop.default ?? null,
      options
    };
  });
}
function buildFormFromFields(fields, defaults = {}) {
  const controls = {};
  for (const field of fields) {
    const value = defaults[field.key] ?? field.default_value ?? null;
    const validators = field.required ? [Validators.required] : [];
    controls[field.key] = new FormControl(value, validators);
  }
  return new FormGroup(controls);
}
var SchemaFormComponent = class _SchemaFormComponent {
  constructor() {
    this.schema = input(
      null,
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fields = computed(
      () => {
        const s = this.schema();
        return s ? parseSchemaFields(s) : [];
      },
      ...ngDevMode ? [{ debugName: "fields" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.defaults_form = signal(
      null,
      ...ngDevMode ? [{ debugName: "defaults_form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._value = {};
    effect(() => {
      const schema_fields = this.fields();
      if (!schema_fields.length) {
        this._teardown();
        this.defaults_form.set(null);
        return;
      }
      this._teardown();
      const form = buildFormFromFields(schema_fields, this._value);
      this.defaults_form.set(form);
      this._form_sub = form.valueChanges.subscribe((val) => {
        this._value = val;
        this._on_change?.(val);
      });
    });
  }
  writeValue(value) {
    this._value = value || {};
    const form = this.defaults_form();
    if (form) {
      form.patchValue(this._value, { emitEvent: false });
    }
  }
  registerOnChange(fn) {
    this._on_change = fn;
  }
  registerOnTouched(fn) {
    this._on_touch = fn;
  }
  ngOnDestroy() {
    this._teardown();
  }
  /** Returns true if the generated defaults form is valid. */
  isValid() {
    const form = this.defaults_form();
    if (!form)
      return true;
    form.markAllAsTouched();
    return form.valid;
  }
  _teardown() {
    this._form_sub?.unsubscribe();
    this._form_sub = null;
  }
  static {
    this.\u0275fac = function SchemaFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SchemaFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchemaFormComponent, selectors: [["schema-form"]], inputs: { schema: [1, "schema"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _SchemaFormComponent),
        multi: true
      }
    ])], decls: 1, vars: 1, consts: [[1, "flex", "flex-col", "gap-2", 3, "formGroup"], [1, "field"], [3, "formControlName"], [1, "mt-0", "text-xs", "opacity-60"], [3, "for"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "value"], ["matInput", "", "type", "number", 3, "formControlName", "name", "placeholder"], ["matInput", "", 3, "formControlName", "name", "placeholder"]], template: function SchemaFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_Template, 3, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.defaults_form() ? 0 : -1);
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, SettingsToggleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchemaFormComponent, [{
    type: Component,
    args: [{ selector: "schema-form", template: `
        @if (defaults_form()) {
            <div class="flex flex-col gap-2" [formGroup]="defaults_form()">
                @for (field of fields(); track field.key) {
                    @switch (field.type) {
                        @case ('boolean') {
                            <settings-toggle [formControlName]="field.key">
                                {{ field.label }}
                            </settings-toggle>
                            @if (field.description) {
                                <p class="mt-0 text-xs opacity-60">
                                    {{ field.description }}
                                </p>
                            }
                        }
                        @case ('select') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select [formControlName]="field.key">
                                        @for (
                                            opt of field.options;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">
                                                {{ opt.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @case ('number') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formControlName]="field.key"
                                        [name]="field.key"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @default {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        [formControlName]="field.key"
                                        [name]="field.key"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    }
                }
            </div>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SchemaFormComponent),
        multi: true
      }
    ], imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      SettingsToggleComponent
    ] }]
  }], () => [], { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchemaFormComponent, { className: "SchemaFormComponent", filePath: "libs/components/src/lib/schema-form.component.ts", lineNumber: 213 });
})();

// apps/signage-manager/src/app/signage-plugin.util.ts
function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function objectHasKeys(value) {
  return isRecord(value) && Object.keys(value).length > 0;
}
function pluginSchema(schema) {
  if (!objectHasKeys(schema))
    return null;
  if ("properties" in schema)
    return schema;
  if (!Object.values(schema).every(isRecord))
    return null;
  return { type: "object", properties: schema };
}
function schemaDefaults(schema) {
  const properties = schema?.properties;
  if (!isRecord(properties))
    return {};
  return Object.entries(properties).reduce((defaults, [key, property]) => {
    if (isRecord(property) && "default" in property) {
      defaults[key] = property.default;
    }
    return defaults;
  }, {});
}

export {
  SchemaFormComponent,
  objectHasKeys,
  pluginSchema,
  schemaDefaults
};
//# debugId=12cb49a6-3373-56ea-bcf3-e51dd6eb5f5b
//# sourceMappingURL=chunk-JVIVIA5J.js.map
