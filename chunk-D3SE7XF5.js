import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSuffix,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  model,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CABWWIQI.js";

// apps/concierge/src/app/ui/searchbar.component.ts
var _SearchbarComponent = class _SearchbarComponent {
  constructor() {
    this.model = model("");
    this.modelChange = output();
  }
};
_SearchbarComponent.\u0275fac = function SearchbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchbarComponent)();
};
_SearchbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchbarComponent, selectors: [["searchbar"]], inputs: { model: [1, "model"] }, outputs: { model: "modelChange", modelChange: "modelChange" }, decls: 5, vars: 4, consts: [["appearance", "outline", 1, "no-subscript"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["matSuffix", "", 1, "text-xl"]], template: function SearchbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "input", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_1_listener($event) {
      ctx.modelChange.emit($event);
      return ctx.model.set($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 2);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.SEARCH"))("ngModel", ctx.model());
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
var SearchbarComponent = _SearchbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchbarComponent, [{
    type: Component,
    args: [{ selector: "searchbar", template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <input
                matInput
                [placeholder]="'COMMON.SEARCH' | translate"
                [ngModel]="model()"
                (ngModelChange)="modelChange.emit($event); model.set($event)"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchbarComponent, { className: "SearchbarComponent", filePath: "apps/concierge/src/app/ui/searchbar.component.ts", lineNumber: 29 });
})();

export {
  SearchbarComponent
};
//# sourceMappingURL=chunk-D3SE7XF5.js.map
