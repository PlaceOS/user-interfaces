import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-ZXGN7TMH.js";
import {
  COMMA,
  Component,
  ENTER,
  IconComponent,
  Input,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  NG_VALUE_ACCESSOR,
  ViewChild,
  computed,
  forwardRef,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-QFVYIQ26.js";

// libs/form-fields/src/lib/item-list-field.component.ts
var _c0 = ["search_field"];
function ItemListFieldComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 8);
    \u0275\u0275listener("removed", function ItemListFieldComponent_For_4_Template_mat_chip_row_removed_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const item_r4 = ctx_r2.$implicit;
      const \u0275$index_5_r5 = ctx_r2.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.remove(item_r4, \u0275$index_5_r5));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r4);
  }
}
function ItemListFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8);
  }
}
function addChipItem(control, event) {
  if (!control)
    return;
  const input2 = event.input;
  const item_list = uniqueChipItems(control.value || []);
  const new_items = `${event.value || ""}`.split(",").map((item) => item.trim()).filter((item) => !!item);
  for (const item of new_items) {
    if (!item_list.includes(item)) {
      item_list.push(item);
    }
  }
  control.setValue(item_list);
  if (input2) {
    input2.value = "";
  }
}
function removeChipItem(control, item, item_index) {
  if (!control) {
    return;
  }
  const item_list = [...control.value || []];
  const index = item_index ?? item_list.indexOf(item);
  if (index >= 0 && index < item_list.length) {
    item_list.splice(index, 1);
    control.setValue(item_list);
  }
}
function uniqueChipItems(items) {
  return [...new Set(items)];
}
var ItemListFieldComponent = class _ItemListFieldComponent {
  constructor() {
    this.separators = input(
      [ENTER, COMMA],
      ...ngDevMode ? [{ debugName: "separators" }] : (
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
    this.options = input(
      [],
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      [],
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel_open = signal(
      false,
      ...ngDevMode ? [{ debugName: "panel_open" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_field = viewChild(
      "search_field",
      ...ngDevMode ? [{ debugName: "_search_field" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._autocomplete = viewChild(
      MatAutocompleteTrigger,
      ...ngDevMode ? [{ debugName: "_autocomplete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.matching_options = computed(
      () => {
        const search = this.search().trim().toLowerCase();
        const selected = new Set(this.value().map((item) => `${item}`.toLowerCase()));
        return uniqueChipItems(this.options()).filter((option) => {
          const text = `${option}`.toLowerCase();
          return !selected.has(text) && (!search || text.includes(search));
        });
      },
      ...ngDevMode ? [{ debugName: "matching_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add = (e) => {
      if (this._autocomplete()?.activeOption)
        return;
      addChipItem({ value: this.value(), setValue: (i) => this.setValue(i) }, e);
      this._clearSearch();
    };
    this.remove = (item, index) => removeChipItem({ value: this.value(), setValue: (i) => this.setValue(i) }, item, index);
  }
  /** Add a suggestion picked from the autocomplete list */
  addSuggestion(option) {
    this.setValue([...this.value(), option]);
    this._clearSearch();
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const value = uniqueChipItems(new_value || []);
    this.value.set(value);
    if (this._onChange) {
      this._onChange(value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(uniqueChipItems(value || []));
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /** Empty the search input so the next search starts fresh */
  _clearSearch() {
    this.search.set("");
    const field = this._search_field();
    if (field)
      field.nativeElement.value = "";
  }
  static {
    this.\u0275fac = function ItemListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListFieldComponent, selectors: [["item-list-field"]], viewQuery: function ItemListFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._search_field, _c0, 5)(ctx._autocomplete, MatAutocompleteTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { separators: [1, "separators"], placeholder: [1, "placeholder"], options: [1, "options"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _ItemListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 5, consts: [["chipList", ""], ["search_field", ""], ["auto", "matAutocomplete"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Zone Tags"], [3, "input", "matChipInputTokenEnd", "placeholder", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "opened", "closed", "optionSelected"], [3, "value"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function ItemListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-chip-grid", 4, 0);
        \u0275\u0275repeaterCreate(3, ItemListFieldComponent_For_4_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 5, 1);
        \u0275\u0275listener("input", function ItemListFieldComponent_Template_input_input_5_listener() {
          \u0275\u0275restoreView(_r1);
          const search_field_r7 = \u0275\u0275reference(6);
          return \u0275\u0275resetView(ctx.search.set(search_field_r7.value));
        })("matChipInputTokenEnd", function ItemListFieldComponent_Template_input_matChipInputTokenEnd_5_listener($event) {
          return ctx.add($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-autocomplete", 6, 2);
        \u0275\u0275listener("opened", function ItemListFieldComponent_Template_mat_autocomplete_opened_7_listener() {
          return ctx.panel_open.set(true);
        })("closed", function ItemListFieldComponent_Template_mat_autocomplete_closed_7_listener() {
          return ctx.panel_open.set(false);
        })("optionSelected", function ItemListFieldComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
          return ctx.addSuggestion($event.option.value);
        });
        \u0275\u0275repeaterCreate(9, ItemListFieldComponent_For_10_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const chipList_r9 = \u0275\u0275reference(2);
        const auto_r10 = \u0275\u0275reference(8);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.value());
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", ctx.placeholder() || "User groups...")("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separators())("matChipInputAddOnBlur", !ctx.panel_open());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.matching_options());
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatChipsModule, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, MatAutocompleteModule, MatAutocomplete, MatOption, MatAutocompleteTrigger, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemListFieldComponent, [{
    type: Component,
    args: [{ selector: "item-list-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Zone Tags">
                @for (item of value(); track $index; let i = $index) {
                    <mat-chip-row (removed)="remove(item, i)">
                        <span class="max-w-md truncate">{{ item }}</span>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                #search_field
                [placeholder]="placeholder() || 'User groups...'"
                [matAutocomplete]="auto"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators()"
                [matChipInputAddOnBlur]="!panel_open()"
                (input)="search.set(search_field.value)"
                (matChipInputTokenEnd)="add($event)"
            />
        </mat-form-field>
        <mat-autocomplete
            #auto="matAutocomplete"
            (opened)="panel_open.set(true)"
            (closed)="panel_open.set(false)"
            (optionSelected)="addSuggestion($event.option.value)"
        >
            @for (option of matching_options(); track option) {
                <mat-option [value]="option">{{ option }}</mat-option>
            }
        </mat-autocomplete>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => ItemListFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      IconComponent
    ] }]
  }], null, { separators: [{ type: Input, args: [{ isSignal: true, alias: "separators", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], _search_field: [{ type: ViewChild, args: ["search_field", { isSignal: true }] }], _autocomplete: [{ type: ViewChild, args: [forwardRef(() => MatAutocompleteTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListFieldComponent, { className: "ItemListFieldComponent", filePath: "libs/form-fields/src/lib/item-list-field.component.ts", lineNumber: 139 });
})();

export {
  addChipItem,
  removeChipItem,
  uniqueChipItems,
  ItemListFieldComponent
};
//# sourceMappingURL=chunk-37NIVNVF.js.map
