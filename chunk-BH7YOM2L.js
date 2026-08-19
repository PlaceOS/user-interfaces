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
  NG_VALUE_ACCESSOR,
  forwardRef,
  input,
  setClassMetadata,
  signal,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L5KBQUZV.js";

// libs/form-fields/src/lib/item-list-field.component.ts
function ItemListFieldComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 4);
    \u0275\u0275listener("removed", function ItemListFieldComponent_For_4_Template_mat_chip_row_removed_0_listener() {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(item_r3, \u0275$index_5_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r3);
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
    this.value = signal(
      [],
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add = (e) => addChipItem({ value: this.value(), setValue: (i) => this.setValue(i) }, e);
    this.remove = (item, index) => removeChipItem({ value: this.value(), setValue: (i) => this.setValue(i) }, item, index);
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
  static {
    this.\u0275fac = function ItemListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListFieldComponent, selectors: [["item-list-field"]], inputs: { separators: [1, "separators"], placeholder: [1, "placeholder"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _ItemListFieldComponent),
        multi: true
      }
    ])], decls: 6, vars: 4, consts: [["chipList", ""], ["appearance", "outline", 1, "w-full"], ["aria-label", "Zone Tags"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function ItemListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-chip-grid", 2, 0);
        \u0275\u0275repeaterCreate(3, ItemListFieldComponent_For_4_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 3);
        \u0275\u0275listener("matChipInputTokenEnd", function ItemListFieldComponent_Template_input_matChipInputTokenEnd_5_listener($event) {
          return ctx.add($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const chipList_r6 = \u0275\u0275reference(2);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.value());
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", ctx.placeholder() || "User groups...")("matChipInputFor", chipList_r6)("matChipInputSeparatorKeyCodes", ctx.separators())("matChipInputAddOnBlur", true);
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatChipsModule, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, IconComponent], encapsulation: 2 });
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
                [placeholder]="placeholder() || 'User groups...'"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators()"
                [matChipInputAddOnBlur]="true"
                (matChipInputTokenEnd)="add($event)"
            />
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => ItemListFieldComponent),
        multi: true
      }
    ], imports: [MatFormFieldModule, MatChipsModule, IconComponent] }]
  }], null, { separators: [{ type: Input, args: [{ isSignal: true, alias: "separators", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListFieldComponent, { className: "ItemListFieldComponent", filePath: "libs/form-fields/src/lib/item-list-field.component.ts", lineNumber: 109 });
})();

export {
  addChipItem,
  removeChipItem,
  uniqueChipItems,
  ItemListFieldComponent
};
//# sourceMappingURL=chunk-BH7YOM2L.js.map
