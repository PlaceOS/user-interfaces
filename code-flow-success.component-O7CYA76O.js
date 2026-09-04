import {
  Component,
  MatRipple,
  MatRippleModule,
  RouterLink,
  RouterModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PKNCBQ6J.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/code-flow-success.component.ts
var _c0 = () => ["/"];
var CodeFlowSuccessComponent = class _CodeFlowSuccessComponent {
  static {
    this.\u0275fac = function CodeFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeFlowSuccessComponent, selectors: [["code-flow-success"]], decls: 13, vars: 11, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/success.svg"], [1, "max-w-lg", "text-center"], [1, "border-base-200", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-lg", 3, "routerLink"]], template: function CodeFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "footer", 5)(10, "a", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.WORKPLACE.RESOURCE_CHECKED_IN"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "APP.WORKPLACE.RESOURCE_CHECKED_IN_MESSAGE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "COMMON.CONTINUE"), " ");
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "code-flow-success", template: `
        <div class="bg-base-100 absolute inset-0 z-50 flex flex-col">
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{ 'APP.WORKPLACE.RESOURCE_CHECKED_IN' | translate }}
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="max-w-lg text-center">
                    {{
                        'APP.WORKPLACE.RESOURCE_CHECKED_IN_MESSAGE' | translate
                    }}
                </p>
            </main>
            <footer
                class="border-base-200 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a btn matRipple class="w-full max-w-lg" [routerLink]="['/']">
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `, imports: [MatRippleModule, TranslatePipe, RouterModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeFlowSuccessComponent, { className: "CodeFlowSuccessComponent", filePath: "apps/workplace/src/app/book/code-flow-success.component.ts", lineNumber: 35 });
})();
export {
  CodeFlowSuccessComponent
};
//# sourceMappingURL=code-flow-success.component-O7CYA76O.js.map
