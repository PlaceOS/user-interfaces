import {
  TranslatePipe
} from "./chunk-4R7BTQAK.js";
import {
  Component,
  IconComponent,
  MatRipple,
  MatRippleModule,
  Output,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VC4MJRPT.js";

// libs/components/src/lib/load-error.component.ts
var LoadErrorComponent = class _LoadErrorComponent {
  constructor() {
    this.retry = output();
  }
  static {
    this.\u0275fac = function LoadErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadErrorComponent, selectors: [["load-error"]], outputs: { retry: "retry" }, decls: 9, vars: 6, consts: [["role", "alert", 1, "flex", "flex-col", "items-center", "justify-center", "gap-2", "p-8", "text-center"], [1, "text-error", "text-3xl"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"]], template: function LoadErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "icon", 1);
        \u0275\u0275text(2, "error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function LoadErrorComponent_Template_button_click_6_listener() {
          return ctx.retry.emit();
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "COMMON.LOAD_ERROR"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"), " ");
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadErrorComponent, [{
    type: Component,
    args: [{
      selector: "load-error",
      template: `
        <div
            role="alert"
            class="flex flex-col items-center justify-center gap-2 p-8 text-center"
        >
            <icon class="text-error text-3xl">error</icon>
            <p>{{ 'COMMON.LOAD_ERROR' | translate }}</p>
            <!-- type="button": inside a form the default submits it -->
            <button
                btn
                matRipple
                type="button"
                class="inverse"
                (click)="retry.emit()"
            >
                {{ 'COMMON.RETRY' | translate }}
            </button>
        </div>
    `,
      imports: [MatRippleModule, IconComponent, TranslatePipe]
    }]
  }], null, { retry: [{ type: Output, args: ["retry"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadErrorComponent, { className: "LoadErrorComponent", filePath: "libs/components/src/lib/load-error.component.ts", lineNumber: 35 });
})();

export {
  LoadErrorComponent
};
//# debugId=a606d9a1-540b-5fa2-8385-9907d94b3f96
//# sourceMappingURL=chunk-QQANERJJ.js.map
