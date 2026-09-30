import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3MJM7T67.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-YGL7BAHJ.js";
import {
  TranslatePipe
} from "./chunk-QFE2TBNQ.js";
import {
  Component,
  IconComponent,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-C5PCZO6L.js";

// libs/components/src/lib/bulk-actions-bar.component.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ count: a0 });
function BulkActionsBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275projection(4);
    \u0275\u0275elementStart(5, "button", 2);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function BulkActionsBarComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear.emit());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "COMMON.SELECTED_COUNT", \u0275\u0275pureFunction1(10, _c1, ctx_r1.count())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "COMMON.CLEAR_SELECTION"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 8, "COMMON.CLEAR_SELECTION"));
  }
}
var BulkActionsBarComponent = class _BulkActionsBarComponent {
  constructor() {
    this.count = input(
      0,
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear = output();
  }
  static {
    this.\u0275fac = function BulkActionsBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkActionsBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkActionsBarComponent, selectors: [["bulk-actions-bar"]], inputs: { count: [1, "count"] }, outputs: { clear: "clear" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["role", "toolbar", 1, "bg-base-100", "border-base-300", "fixed", "bottom-16", "left-1/2", "z-40", "flex", "-translate-x-1/2", "items-center", "gap-2", "rounded-full", "border", "py-1", "pr-1", "pl-4", "shadow-xl"], [1, "mr-2", "text-sm", "font-medium", "whitespace-nowrap"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"]], template: function BulkActionsBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, BulkActionsBarComponent_Conditional_0_Template, 10, 12, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.count() > 0 ? 0 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkActionsBarComponent, [{
    type: Component,
    args: [{
      selector: "bulk-actions-bar",
      template: `
        @if (count() > 0) {
            <div
                role="toolbar"
                class="bg-base-100 border-base-300 fixed bottom-16 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border py-1 pr-1 pl-4 shadow-xl"
            >
                <span class="mr-2 text-sm font-medium whitespace-nowrap">
                    {{
                        'COMMON.SELECTED_COUNT' | translate: { count: count() }
                    }}
                </span>
                <ng-content />
                <button
                    icon
                    matRipple
                    [matTooltip]="'COMMON.CLEAR_SELECTION' | translate"
                    [attr.aria-label]="'COMMON.CLEAR_SELECTION' | translate"
                    (click)="clear.emit()"
                >
                    <icon>close</icon>
                </button>
            </div>
        }
    `,
      imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe]
    }]
  }], null, { count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], clear: [{ type: Output, args: ["clear"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkActionsBarComponent, { className: "BulkActionsBarComponent", filePath: "libs/components/src/lib/bulk-actions-bar.component.ts", lineNumber: 41 });
})();

export {
  BulkActionsBarComponent
};
//# debugId=c1cc5c9f-e136-583e-b1b7-95420900c223
//# sourceMappingURL=chunk-NE5UUSFV.js.map
