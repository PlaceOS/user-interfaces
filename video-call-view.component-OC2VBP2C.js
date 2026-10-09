import {
  VideoCallPageComponent
} from "./chunk-YUSJUBZY.js";
import {
  ControlConnectingComponent,
  ControlStateService,
  ControlStatusBarComponent,
  SplashComponent,
  TopbarHeaderComponent
} from "./chunk-4YY6DTCM.js";
import {
  toSignal
} from "./chunk-UQWWHFJO.js";
import "./chunk-SWIPIOMN.js";
import "./chunk-CWJOUEH4.js";
import "./chunk-VB6ZMKBF.js";
import "./chunk-4CX3KLV2.js";
import "./chunk-FSPJCLIQ.js";
import "./chunk-CPPM6OGM.js";
import "./chunk-JBZSQEYS.js";
import "./chunk-BKRN2ZWT.js";
import "./chunk-62SMBV55.js";
import "./chunk-4UEO4SY4.js";
import {
  ActivatedRoute
} from "./chunk-WI6YB6KJ.js";
import "./chunk-ZW2D7NFS.js";
import "./chunk-F6EFLGBM.js";
import "./chunk-7J4AT2TZ.js";
import "./chunk-NCNHF6GT.js";
import "./chunk-UL4LAFJD.js";
import "./chunk-ONUJXGJJ.js";
import "./chunk-RYIKCEXV.js";
import "./chunk-Y43KW6W3.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext
} from "./chunk-ZL76SY4J.js";
import "./chunk-GOMI4DH3.js";

// apps/control/src/app/video-call/video-call-view.component.ts
function ControlVideoCallViewComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "topbar-header");
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275element(3, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "control-status-bar");
    \u0275\u0275elementEnd();
  }
}
function ControlVideoCallViewComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "control-splash");
  }
}
function ControlVideoCallViewComponent_Conditional_0_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlVideoCallViewComponent_Conditional_0_Conditional_0_Template, 5, 0, "div", 0)(1, ControlVideoCallViewComponent_Conditional_0_Conditional_1_Template, 1, 0, "control-splash");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((_a = ctx_r0.system()) == null ? void 0 : _a.active) ? 0 : 1);
  }
}
function ControlVideoCallViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "control-connecting");
  }
}
var _ControlVideoCallViewComponent = class _ControlVideoCallViewComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._state = inject(ControlStateService);
    this._param_map = toSignal(this._route.paramMap, {
      initialValue: this._route.snapshot.paramMap
    });
    this._query_param_map = toSignal(this._route.queryParamMap, {
      initialValue: this._route.snapshot.queryParamMap
    });
    this.system = this._state.system;
    this.id = this._state.system_id;
    effect(() => {
      const params = this._param_map();
      if (params.has("system"))
        this._state.setID(params.get("system"));
    });
    effect(() => {
      const params = this._query_param_map();
      if (params.get("join") === "true")
        this._state.selectMeeting();
    });
  }
};
_ControlVideoCallViewComponent.\u0275fac = function ControlVideoCallViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlVideoCallViewComponent)();
};
_ControlVideoCallViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlVideoCallViewComponent, selectors: [["app-control-video-call-view"]], decls: 2, vars: 1, consts: [[1, "absolute", "inset-0", "flex", "flex-col"], [1, "h-1/2", "flex-1"], ["video-call-page", "", 1, "bg-base-100", "absolute", "inset-4", "flex", "flex-col", "rounded-sm", "shadow-sm"]], template: function ControlVideoCallViewComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlVideoCallViewComponent_Conditional_0_Template, 2, 1)(1, ControlVideoCallViewComponent_Conditional_1_Template, 1, 0, "control-connecting");
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.system()) == null ? void 0 : _a.connected) ? 0 : 1);
  }
}, dependencies: [
  TopbarHeaderComponent,
  VideoCallPageComponent,
  ControlStatusBarComponent,
  ControlConnectingComponent,
  SplashComponent
], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: var(--%NS%primary);\n  color: #fff;\n}\n/*# sourceMappingURL=video-call-view.component.css.map */"] });
var ControlVideoCallViewComponent = _ControlVideoCallViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlVideoCallViewComponent, [{
    type: Component,
    args: [{ selector: "app-control-video-call-view", template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div class="absolute inset-0 flex flex-col">
                    <topbar-header></topbar-header>
                    <div class="h-1/2 flex-1">
                        <div
                            class="bg-base-100 absolute inset-4 flex flex-col rounded-sm shadow-sm"
                            video-call-page
                        ></div>
                    </div>
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <control-splash />
            }
        } @else {
            <control-connecting />
        }
    `, imports: [
      TopbarHeaderComponent,
      VideoCallPageComponent,
      ControlStatusBarComponent,
      ControlConnectingComponent,
      SplashComponent
    ], styles: ["/* angular:styles/component:css;d600333a727a1f12948bb7f3d3430b6ee3ada307116fff862341147bc5dc590f;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/video-call/video-call-view.component.ts */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n:host > div {\n  background-color: var(--primary);\n  color: #fff;\n}\n/*# sourceMappingURL=video-call-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlVideoCallViewComponent, { className: "ControlVideoCallViewComponent", filePath: "apps/control/src/app/video-call/video-call-view.component.ts", lineNumber: 57 });
})();
export {
  ControlVideoCallViewComponent
};
//# debugId=337643d6-f6d0-5a2d-8fd6-cf9e4ea24418
//# sourceMappingURL=video-call-view.component-OC2VBP2C.js.map
