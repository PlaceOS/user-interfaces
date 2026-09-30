import {
  toSignal
} from "./chunk-GAX2GAXL.js";
import {
  Component,
  NavigationEnd,
  Router,
  filter,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RKFYMMSC.js";
import "./chunk-653SOEEV.js";

// apps/outlook-addin/src/app/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  constructor() {
    this._router = inject(Router);
    this.url = toSignal(this._router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => this._router.url)), { initialValue: this._router.url });
  }
  static {
    this.\u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["placeos-not-found"]], decls: 14, vars: 1, consts: [[1, "bg-base-200", "z-0", "flex", "h-full", "flex-1", "flex-col", "overflow-y-auto"], [1, "border-base-200", "flex", "h-full", "flex-col", "items-center", "justify-center", "border-b", "py-5"], [1, "mx-3", "flex", "flex-row"], ["src", "assets/not-found.svg", "alt", "graphic of magnifying glass", "width", "200px", 1, "items-center"], [1, "mb-3"], [1, "mr-auto", "text-3xl", "font-bold", "text-gray-700"], [1, "flex", "flex-row"], [1, "mx-1", "font-bold"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2);
        \u0275\u0275domElement(3, "img", 3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "div", 2)(5, "div", 4)(6, "span", 5);
        \u0275\u0275text(7, "Page not found");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(8, "div", 2)(9, "span", 6);
        \u0275\u0275text(10, " The page ");
        \u0275\u0275domElementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275domElementEnd();
        \u0275\u0275text(13, " was not found. ");
        \u0275\u0275domElementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ctx.url(), " ");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "placeos-not-found", template: `
        <div
            class="bg-base-200 z-0 flex h-full flex-1 flex-col overflow-y-auto"
        >
            <section
                class="border-base-200 flex h-full flex-col items-center justify-center border-b py-5"
            >
                <div class="mx-3 flex flex-row">
                    <img
                        src="assets/not-found.svg"
                        alt="graphic of magnifying glass"
                        width="200px"
                        class="items-center"
                    />
                </div>
                <div class="mx-3 flex flex-row">
                    <div class="mb-3">
                        <span class="mr-auto text-3xl font-bold text-gray-700"
                            >Page not found</span
                        >
                    </div>
                </div>
                <div class="mx-3 flex flex-row">
                    <span class="flex flex-row">
                        The page
                        <span class="mx-1 font-bold"> {{ url() }} </span>
                        was not found.
                    </span>
                </div>
            </section>
        </div>
    `, imports: [] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "apps/outlook-addin/src/app/not-found.component.ts", lineNumber: 43 });
})();
export {
  NotFoundComponent
};
//# debugId=25b1eca3-fb17-59df-9924-53b13acf6340
//# sourceMappingURL=not-found.component-74ADLWKB.js.map
