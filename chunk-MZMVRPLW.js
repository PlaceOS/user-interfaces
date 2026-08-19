import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSuffix,
  NgControlStatus,
  NgModel,
  Output,
  TranslatePipe,
  computed,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-L5KBQUZV.js";

// apps/concierge/src/app/ui/searchbar.component.ts
var SearchbarComponent = class _SearchbarComponent {
  constructor() {
    this._internal_model = signal(
      "",
      ...ngDevMode ? [{ debugName: "_internal_model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = input(
      void 0,
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = computed(
      () => {
        const external_value = this.model();
        return external_value === void 0 ? this._internal_model() : external_value;
      },
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelChange = output();
  }
  setValue(value) {
    this._internal_model.set(value);
    this.modelChange.emit(value);
  }
  static {
    this.\u0275fac = function SearchbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchbarComponent, selectors: [["searchbar"]], inputs: { model: [1, "model"] }, outputs: { modelChange: "modelChange" }, decls: 5, vars: 4, consts: [["appearance", "outline", 1, "no-subscript"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["matSuffix", "", 1, "text-xl"]], template: function SearchbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "input", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.setValue($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(3, "icon", 2);
        \u0275\u0275text(4, "search");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.SEARCH"))("ngModel", ctx.value());
        \u0275\u0275control();
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatSuffix,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchbarComponent, [{
    type: Component,
    args: [{ selector: "searchbar", template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <input
                matInput
                [placeholder]="'COMMON.SEARCH' | translate"
                [ngModel]="value()"
                (ngModelChange)="setValue($event)"
            />
            <icon class="text-xl" matSuffix>search</icon>
        </mat-form-field>
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      IconComponent,
      TranslatePipe
    ] }]
  }], null, { model: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchbarComponent, { className: "SearchbarComponent", filePath: "apps/concierge/src/app/ui/searchbar.component.ts", lineNumber: 29 });
})();

export {
  SearchbarComponent
};
//# sourceMappingURL=chunk-MZMVRPLW.js.map
