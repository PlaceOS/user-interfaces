import {
  ExploreStateService
} from "./chunk-G3VFILN4.js";
import {
  Component,
  IconComponent,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  TranslatePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-UZ4AUCKX.js";

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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 13, vars: 9, consts: [[1, "bg-base-100", "divide-base-300", "border-base-300", "flex", "flex-col", "divide-y", "overflow-hidden", "rounded-lg", "border", "shadow-md"], ["z-in", "", "icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_1_listener() {
          return ctx.zoomIn();
        });
        \u0275\u0275elementStart(3, "icon");
        \u0275\u0275text(4, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_5_listener() {
          return ctx.zoomOut();
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 3);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_9_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(11, "icon");
        \u0275\u0275text(12, "autorenew");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "EXPLORE.ZOOM_IN"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "EXPLORE.ZOOM_RESET"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 49 });
})();

export {
  ExploreZoomControlComponent
};
//# sourceMappingURL=chunk-N5ZNFIEU.js.map
