import {
  ExploreStateService
} from "./chunk-2QHNMTE5.js";
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
} from "./chunk-TPDPFSY7.js";

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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 12, vars: 9, consts: [["z-in", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_0_listener() {
          return ctx.zoomIn();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "button", 1);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_4_listener() {
          return ctx.zoomOut();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_8_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "autorenew");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "EXPLORE.ZOOM_IN"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 7, "EXPLORE.ZOOM_RESET"));
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, MatTooltipModule, MatTooltip, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZoomControlComponent, [{
    type: Component,
    args: [{ selector: `explore-zoom-controls`, template: `
        <button
            z-in
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomIn()"
            [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
        >
            <icon>add</icon>
        </button>
        <button
            z-out
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomOut()"
            [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
        >
            <icon>remove</icon>
        </button>
        <button
            reset
            icon
            matRipple
            class="bg-base-100"
            (click)="reset()"
            [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
        >
            <icon>autorenew</icon>
        </button>
    `, imports: [MatRippleModule, TranslatePipe, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;3d42ea289b866ee23d2075663b931fa5501aa5a1e18f8af721ddfffbd945ad48;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-zoom-control.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 67 });
})();

export {
  ExploreZoomControlComponent
};
//# sourceMappingURL=chunk-4G6IC5LX.js.map
