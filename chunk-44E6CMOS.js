import {
  ExploreStateService
} from "./chunk-KVV6O7R6.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6QAQELLN.js";
import {
  TranslatePipe
} from "./chunk-SG45U3DS.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import {
  MatRippleModule
} from "./chunk-ZT4WQV5M.js";
import {
  MatRipple
} from "./chunk-EAD6DYEJ.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-AQIWUFR7.js";

// libs/explore/src/lib/explore-zoom-control.component.ts
var ExploreZoomControlComponent = class _ExploreZoomControlComponent {
  constructor() {
    this._state = inject(ExploreStateService);
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
  }
  static {
    this.\u0275fac = function ExploreZoomControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreZoomControlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 16, vars: 18, consts: [[1, "bg-base-100", "divide-base-300", "border-base-300", "flex", "flex-col", "divide-y", "overflow-hidden", "rounded-lg", "border", "shadow-md"], ["z-in", "", "icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_1_listener() {
          return ctx.zoomIn();
        });
        \u0275\u0275elementStart(4, "icon");
        \u0275\u0275text(5, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_6_listener() {
          return ctx.zoomOut();
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 3);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_11_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(14, "icon");
        \u0275\u0275text(15, "autorenew");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 6, "EXPLORE.ZOOM_IN"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 8, "EXPLORE.ZOOM_IN"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 10, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 12, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 14, "EXPLORE.ZOOM_RESET"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 16, "EXPLORE.ZOOM_RESET"));
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, MatTooltipModule, MatTooltip, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZoomControlComponent, [{
    type: Component,
    args: [{ selector: `explore-zoom-controls`, template: `
        <div
            class="bg-base-100 divide-base-300 border-base-300 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
        >
            <button
                [attr.aria-label]="'EXPLORE.ZOOM_IN' | translate"
                z-in
                icon
                matRipple
                class="hover:bg-base-200"
                (click)="zoomIn()"
                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
            >
                <icon>add</icon>
            </button>
            <button
                [attr.aria-label]="'EXPLORE.ZOOM_OUT' | translate"
                z-out
                icon
                matRipple
                class="hover:bg-base-200"
                (click)="zoomOut()"
                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
            >
                <icon>remove</icon>
            </button>
            <button
                [attr.aria-label]="'EXPLORE.ZOOM_RESET' | translate"
                reset
                icon
                matRipple
                class="hover:bg-base-200"
                (click)="reset()"
                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
            >
                <icon>autorenew</icon>
            </button>
        </div>
    `, imports: [MatRippleModule, TranslatePipe, IconComponent, MatTooltipModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 52 });
})();

export {
  ExploreZoomControlComponent
};
//# debugId=8fcea0a0-b512-5d41-a8a5-1170373178ff
//# sourceMappingURL=chunk-44E6CMOS.js.map
