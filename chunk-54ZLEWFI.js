import {
  Directive,
  ElementRef,
  Output,
  inject,
  output,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-VC4MJRPT.js";

// apps/signage-manager/src/app/shared/intersect.directive.ts
var MAX_SCROLL_PARENT_DEPTH = 50;
function scrollParent(element) {
  let parent = element.parentElement;
  for (let depth = 0; parent && depth < MAX_SCROLL_PARENT_DEPTH; depth++) {
    const { overflowY } = getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll")
      return parent;
    parent = parent.parentElement;
  }
  return null;
}
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
    }, { root: scrollParent(this._el.nativeElement), rootMargin: "300px" });
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
//# debugId=349d0e32-4665-53be-b079-ab4d562972e5
//# sourceMappingURL=chunk-54ZLEWFI.js.map
