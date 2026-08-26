import {
  MAP_FEATURE_DATA
} from "./chunk-4CSOAYF2.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XUPR3QCE.js";

// libs/components/src/lib/map-pin.component.ts
function MapPinComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message, " ");
  }
}
function MapPinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domListener("click", function MapPinComponent_Conditional_2_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.action());
    });
    \u0275\u0275domElementStart(1, "g");
    \u0275\u0275domElement(2, "path", 4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pointer-events-auto", ctx_r0.action);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("fill", ctx_r0.fill)("stroke", ctx_r0.stroke);
  }
}
var MapPinComponent = class _MapPinComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.message = this._details.message;
    this.fill = this._details.fill || "#e53935";
    this.stroke = this._details.stroke || "#fff";
    this.action = this._details.action || null;
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_message = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    setTimeout(() => this.show.set(true), 300);
    setTimeout(() => this.show_message.set(true), 1e3);
  }
  static {
    this.\u0275fac = function MapPinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapPinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapPinComponent, selectors: [["", "map-pin", ""]], decls: 3, vars: 2, consts: [[1, "absolute", "bottom-1/2", "left-1/2", "-z-1", "flex", "w-[24rem]", "-translate-x-1/2", "flex-col", "items-center"], ["name", "message", 1, "bg-base-100", "m-2", "rounded-sm", "p-2", "text-gray-700", "shadow-sm"], ["name", "pin", "viewBox", "0 0 380 560", 1, "w-8", 3, "pointer-events-auto"], ["name", "pin", "viewBox", "0 0 380 560", 1, "w-8", 3, "click"], ["stroke-width", "25", "d", "M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9\n            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8\n            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"]], template: function MapPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, MapPinComponent_Conditional_1_Template, 2, 1, "div", 1);
        \u0275\u0275conditionalCreate(2, MapPinComponent_Conditional_2_Template, 3, 6, ":svg:svg", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.message && ctx.show_message() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show() ? 2 : -1);
      }
    }, styles: ["\n[name=message][_ngcontent-%COMP%], \n[name=pin][_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in-top 1s;\n}\n@keyframes _ngcontent-%COMP%_fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=map-pin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapPinComponent, [{
    type: Component,
    args: [{ selector: "[map-pin]", template: `
        <div
            class="absolute bottom-1/2 left-1/2 -z-1 flex w-[24rem] -translate-x-1/2 flex-col items-center"
        >
            @if (message && show_message()) {
                <div
                    name="message"
                    class="bg-base-100 m-2 rounded-sm p-2 text-gray-700 shadow-sm"
                >
                    {{ message }}
                </div>
            }
            @if (show()) {
                <svg
                    name="pin"
                    viewBox="0 0 380 560"
                    class="w-8"
                    [class.pointer-events-auto]="action"
                    (click)="action()"
                >
                    <g>
                        <path
                            [style.fill]="fill"
                            [style.stroke]="stroke"
                            stroke-width="25"
                            d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8
            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
                        />
                    </g>
                </svg>
            }
        </div>
    `, styles: ["/* angular:styles/component:css;a9cdc3eadab8bc3e96e10ae34e252be907dc13bc9405d57b9245726773f7c391;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-pin.component.ts */\n[name=message],\n[name=pin] {\n  animation: fade-in-top 1s;\n}\n@keyframes fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=map-pin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapPinComponent, { className: "MapPinComponent", filePath: "libs/components/src/lib/map-pin.component.ts", lineNumber: 68 });
})();

export {
  MapPinComponent
};
//# sourceMappingURL=chunk-7Z754X3P.js.map
