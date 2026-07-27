import {
  Directive,
  ElementRef,
  Output,
  inject,
  output,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-W36T2HDV.js";

// apps/signage-manager/src/app/shared/intersect.directive.ts
var IntersectDirective = class _IntersectDirective {
  constructor() {
    this._el = inject(ElementRef);
    this.intersect = output();
  }
  ngAfterViewInit() {
    this._observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        this.intersect.emit();
      }
    }, { rootMargin: "300px" });
    this._observer.observe(this._el.nativeElement);
  }
  ngOnDestroy() {
    this._observer?.disconnect();
  }
  static {
    this.\u0275fac = function IntersectDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IntersectDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _IntersectDirective, selectors: [["", "intersect", ""]], outputs: { intersect: "intersect" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectDirective, [{
    type: Directive,
    args: [{
      selector: "[intersect]"
    }]
  }], null, { intersect: [{ type: Output, args: ["intersect"] }] });
})();

export {
  IntersectDirective
};
//# sourceMappingURL=chunk-WNTSOZB4.js.map
