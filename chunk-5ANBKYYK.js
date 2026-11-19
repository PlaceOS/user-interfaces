import {
  Directive,
  ElementRef,
  Input,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-DB72U2Q3.js";

// apps/concierge/src/app/ui/pulse-on-change.directive.ts
var PulseOnChangeDirective = class _PulseOnChangeDirective {
  constructor() {
    this.pulseOnChange = input.required(
      ...ngDevMode ? [{ debugName: "pulseOnChange" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._element = inject(ElementRef);
    let first = true;
    effect(() => {
      this.pulseOnChange();
      if (first) {
        first = false;
        return;
      }
      const element = this._element.nativeElement;
      element.classList.remove("motion-pulse");
      void element.offsetWidth;
      element.classList.add("motion-pulse");
    });
  }
  static {
    this.\u0275fac = function PulseOnChangeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PulseOnChangeDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PulseOnChangeDirective, selectors: [["", "pulseOnChange", ""]], inputs: { pulseOnChange: [1, "pulseOnChange"] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PulseOnChangeDirective, [{
    type: Directive,
    args: [{ selector: "[pulseOnChange]" }]
  }], () => [], { pulseOnChange: [{ type: Input, args: [{ isSignal: true, alias: "pulseOnChange", required: true }] }] });
})();

export {
  PulseOnChangeDirective
};
//# debugId=28904d6b-673e-5936-95c7-e2382e6cb0d7
//# sourceMappingURL=chunk-5ANBKYYK.js.map
