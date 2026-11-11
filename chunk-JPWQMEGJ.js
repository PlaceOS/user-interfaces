import {
  Component,
  ElementRef,
  Input,
  Output,
  inject,
  input,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-AQIWUFR7.js";

// libs/components/src/lib/viewport-visibility.component.ts
var _c0 = ["*"];
function ViewportVisibilityComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var ViewportVisibilityComponent = class _ViewportVisibilityComponent {
  constructor() {
    this._element = inject(ElementRef);
    this._observer = null;
    this.threshold = input(
      0,
      ...ngDevMode ? [{ debugName: "threshold" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.root_margin = input(
      "32px",
      ...ngDevMode ? [{ debugName: "root_margin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.continuous = input(
      true,
      ...ngDevMode ? [{ debugName: "continuous" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible = model(
      false,
      ...ngDevMode ? [{ debugName: "visible" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._setupObserver();
  }
  ngOnDestroy() {
    this._cleanupObserver();
  }
  _setupObserver() {
    const options = {
      root: null,
      rootMargin: this.root_margin(),
      threshold: this.threshold()
    };
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const is_visible = entry.isIntersecting;
        this.visible.set(is_visible);
        if (!this.continuous() && is_visible) {
          this._cleanupObserver();
        }
      });
    }, options);
    this._observer.observe(this._element.nativeElement);
  }
  _cleanupObserver() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  }
  static {
    this.\u0275fac = function ViewportVisibilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewportVisibilityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewportVisibilityComponent, selectors: [["", "viewport-only", ""]], inputs: { threshold: [1, "threshold"], root_margin: [1, "root_margin"], continuous: [1, "continuous"], visible: [1, "visible"] }, outputs: { visible: "visibleChange" }, ngContentSelectors: _c0, decls: 1, vars: 1, template: function ViewportVisibilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, ViewportVisibilityComponent_Conditional_0_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.visible() ? 0 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportVisibilityComponent, [{
    type: Component,
    args: [{
      selector: "[viewport-only]",
      template: `
        @if (visible()) {
            <ng-content />
        }
    `,
      imports: []
    }]
  }], null, { threshold: [{ type: Input, args: [{ isSignal: true, alias: "threshold", required: false }] }], root_margin: [{ type: Input, args: [{ isSignal: true, alias: "root_margin", required: false }] }], continuous: [{ type: Input, args: [{ isSignal: true, alias: "continuous", required: false }] }], visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }, { type: Output, args: ["visibleChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewportVisibilityComponent, { className: "ViewportVisibilityComponent", filePath: "libs/components/src/lib/viewport-visibility.component.ts", lineNumber: 20 });
})();

export {
  ViewportVisibilityComponent
};
//# debugId=c3df28d8-a6b0-5f4b-ad76-1b0bcbb1f955
//# sourceMappingURL=chunk-JPWQMEGJ.js.map
