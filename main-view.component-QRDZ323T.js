import {
  ChangelogService,
  ControlConnectingComponent,
  NextMeetingComponent,
  OutputDisplayComponent
} from "./chunk-VPK7Q6WC.js";
import {
  ControlStatusBarComponent,
  TopbarHeaderComponent
} from "./chunk-CAVSBNKP.js";
import {
  ControlStateService,
  SourceSelectComponent,
  toSignal
} from "./chunk-EORLT5VQ.js";
import {
  TranslatePipe
} from "./chunk-LVMBC5KR.js";
import "./chunk-RPLLUXAA.js";
import "./chunk-EX7Y2O3I.js";
import {
  ActivatedRoute,
  Component,
  DatePipe,
  MatRipple,
  MatRippleModule,
  VERSION,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ER7G7Q5F.js";
import "./chunk-653SOEEV.js";

// apps/control/src/app/advanced-view.component.ts
var _forTrack0 = ($index, $item) => $item.id || $item.name;
function ControlAdvancedViewComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "output-display", 3);
  }
  if (rf & 2) {
    const output_r1 = ctx.$implicit;
    \u0275\u0275property("item", output_r1);
  }
}
function ControlAdvancedViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ControlAdvancedViewComponent_Conditional_0_For_2_Template, 1, 1, "output-display", 3, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.paged_outputs());
  }
}
function ControlAdvancedViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.OUTPUTS_EMPTY"));
  }
}
function ControlAdvancedViewComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ControlAdvancedViewComponent_Conditional_2_For_2_Template_button_click_0_listener() {
      const \u0275$index_17_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.page.set(\u0275$index_17_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_17_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.page() === \u0275$index_17_r4)("text-black", ctx_r1.page() !== \u0275$index_17_r4)("bg-base-200", ctx_r1.page() !== \u0275$index_17_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275$index_17_r4 + 1, " ");
  }
}
function ControlAdvancedViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, ControlAdvancedViewComponent_Conditional_2_For_2_Template, 2, 7, "button", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.page_count());
  }
}
var _ControlAdvancedViewComponent = class _ControlAdvancedViewComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this.page = signal(
      0,
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.outputs = this._state.output_list;
    this.paged_outputs = computed(
      () => {
        const all = this.outputs();
        const p = this.page();
        return all.slice(p * 6, (p + 1) * 6);
      },
      ...ngDevMode ? [{ debugName: "paged_outputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page_count = computed(
      () => {
        var _a;
        const len = ((_a = this.outputs()) == null ? void 0 : _a.length) || 0;
        return new Array(Math.floor(len / 6) + 1).fill(0);
      },
      ...ngDevMode ? [{ debugName: "page_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
};
_ControlAdvancedViewComponent.\u0275fac = function ControlAdvancedViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlAdvancedViewComponent)();
};
_ControlAdvancedViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlAdvancedViewComponent, selectors: [["control-advanced-view"]], decls: 3, vars: 2, consts: [[1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "items-center", "overflow-auto", "sm:flex-row", "sm:flex-wrap", "sm:justify-center"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "h-12", "w-full", "items-center", "justify-center", "space-x-2", "px-2", "pb-2"], [1, "w-full", "min-w-[33%]", "sm:w-auto", 3, "item"], ["icon", "", "matRipple", "", 3, "bg-primary", "text-black", "bg-base-200"], ["icon", "", "matRipple", "", 3, "click"]], template: function ControlAdvancedViewComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlAdvancedViewComponent_Conditional_0_Template, 3, 0, "div", 0)(1, ControlAdvancedViewComponent_Conditional_1_Template, 4, 3, "div", 1);
    \u0275\u0275conditionalCreate(2, ControlAdvancedViewComponent_Conditional_2_Template, 3, 0, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.outputs()) == null ? void 0 : _a.length) ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.page_count().length > 1 ? 2 : -1);
  }
}, dependencies: [OutputDisplayComponent, MatRippleModule, MatRipple, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n/*# sourceMappingURL=advanced-view.component.css.map */"] });
var ControlAdvancedViewComponent = _ControlAdvancedViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlAdvancedViewComponent, [{
    type: Component,
    args: [{ selector: "control-advanced-view", template: `
        @if (outputs()?.length) {
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center overflow-auto sm:flex-row sm:flex-wrap sm:justify-center"
            >
                @for (
                    output of paged_outputs();
                    track output.id || output.name
                ) {
                    <output-display
                        class="w-full min-w-[33%] sm:w-auto"
                        [item]="output"
                    ></output-display>
                }
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <p>{{ 'APP.CONTROL.OUTPUTS_EMPTY' | translate }}</p>
            </div>
        }
        @if (page_count().length > 1) {
            <div
                class="flex h-12 w-full items-center justify-center space-x-2 px-2 pb-2"
            >
                @for (idx of page_count(); track i; let i = $index) {
                    <button
                        icon
                        matRipple
                        [class.bg-primary]="page() === i"
                        [class.text-black]="page() !== i"
                        [class.bg-base-200]="page() !== i"
                        (click)="page.set(i)"
                    >
                        {{ i + 1 }}
                    </button>
                }
            </div>
        }
    `, imports: [TranslatePipe, OutputDisplayComponent, MatRippleModule], styles: ["/* angular:styles/component:css;43ec02d0efcfbbdd42fe6cb5c964f86cb4daff2b68049d266c8be00385b51f9e;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/advanced-view.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n/*# sourceMappingURL=advanced-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlAdvancedViewComponent, { className: "ControlAdvancedViewComponent", filePath: "apps/control/src/app/advanced-view.component.ts", lineNumber: 63 });
})();

// apps/control/src/app/page-view.component.ts
function ControlPageViewComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "source-select", 0);
  }
}
function ControlPageViewComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "control-advanced-view");
  }
}
var _ControlPageViewComponent = class _ControlPageViewComponent {
  constructor() {
    this.view = signal(
      "advanced",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
};
_ControlPageViewComponent.\u0275fac = function ControlPageViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlPageViewComponent)();
};
_ControlPageViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlPageViewComponent, selectors: [["", "control-page-view", ""]], decls: 2, vars: 1, consts: [["output", "'ALL'"]], template: function ControlPageViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlPageViewComponent_Case_0_Template, 1, 0, "source-select", 0)(1, ControlPageViewComponent_Case_1_Template, 1, 0, "control-advanced-view");
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.view()) === "basic" ? 0 : 1);
  }
}, dependencies: [ControlAdvancedViewComponent, SourceSelectComponent], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  flex: 1;\n  height: 50%;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: rgba(0, 0, 0, 0.85);\n}\n/*# sourceMappingURL=page-view.component.css.map */"] });
var ControlPageViewComponent = _ControlPageViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlPageViewComponent, [{
    type: Component,
    args: [{ selector: "[control-page-view]", template: `
        @switch (view()) {
            @case ('basic') {
                <source-select output="'ALL'" />
            }
            @default {
                <control-advanced-view />
            }
        }
    `, imports: [ControlAdvancedViewComponent, SourceSelectComponent], styles: ["/* angular:styles/component:css;405420df6572f0e3056341d3cfbaf3906d9ff0fe780174c84056aa6473cb7e9a;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/page-view.component.ts */\n:host {\n  width: 100%;\n  flex: 1;\n  height: 50%;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: rgba(0, 0, 0, 0.85);\n}\n/*# sourceMappingURL=page-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlPageViewComponent, { className: "ControlPageViewComponent", filePath: "apps/control/src/app/page-view.component.ts", lineNumber: 31 });
})();

// apps/control/src/app/main-view.component.ts
function ControlMainViewComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "topbar-header")(2, "div", 2)(3, "control-status-bar");
    \u0275\u0275elementEnd();
  }
}
function ControlMainViewComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function ControlMainViewComponent_Conditional_0_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.powerOn());
    })("touchend", function ControlMainViewComponent_Conditional_0_Conditional_1_Template_div_touchend_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.powerOn());
    });
    \u0275\u0275elementStart(1, "h2", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "next-meeting", 6);
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
    \u0275\u0275elementContainerStart(9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function ControlMainViewComponent_Conditional_0_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewChangelog());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "APP.CONTROL.TOUCH_TO_START"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((_a = ctx_r1.system()) == null ? void 0 : _a.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 9, "COMMON.CONTROLS_VERSION"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.changelog_available());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.version.hash, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(16, 11, ctx_r1.version.time, "longDate"), " (", \u0275\u0275pipeBind2(17, 14, ctx_r1.version.time, "shortTime"), ") ");
  }
}
function ControlMainViewComponent_Conditional_0_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlMainViewComponent_Conditional_0_Conditional_0_Template, 4, 0, "div", 0)(1, ControlMainViewComponent_Conditional_0_Conditional_1_Template, 18, 17, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((_a = ctx_r1.system()) == null ? void 0 : _a.active) ? 0 : 1);
  }
}
function ControlMainViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "control-connecting");
  }
}
var _ControlMainViewComponent = class _ControlMainViewComponent {
  get id() {
    return this._state.id;
  }
  get version() {
    return VERSION;
  }
  constructor() {
    this._route = inject(ActivatedRoute);
    this._state = inject(ControlStateService);
    this._changelog = inject(ChangelogService);
    this._param_map = toSignal(this._route.paramMap);
    this._query_param_map = toSignal(this._route.queryParamMap);
    this.system = this._state.system;
    this.changelog_available = this._changelog.available;
    this.viewChangelog = () => this._changelog.view();
    this.powerOn = () => this._state.powerOn();
    effect(() => {
      const params = this._param_map();
      if (params == null ? void 0 : params.has("system"))
        this._state.setID(params.get("system"));
    });
    effect(() => {
      const params = this._query_param_map();
      if ((params == null ? void 0 : params.get("join")) === "true")
        this._state.selectMeeting();
    });
  }
};
_ControlMainViewComponent.\u0275fac = function ControlMainViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlMainViewComponent)();
};
_ControlMainViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlMainViewComponent, selectors: [["app-control-main-view"]], decls: 2, vars: 1, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col"], ["name", "splash", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-white"], ["control-page-view", ""], ["name", "splash", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-white", 3, "click", "touchend"], [1, "mb-4", "text-4xl", "font-light"], [1, "text-lg"], [1, "mt-8"], [1, "absolute", "bottom-0", "left-0", "p-2"], [1, "w-full", "text-xs", "opacity-60"], [1, "m-0", "border-none", "bg-none", "p-0", "text-xs", "underline", 3, "click", "disabled"]], template: function ControlMainViewComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlMainViewComponent_Conditional_0_Template, 2, 1)(1, ControlMainViewComponent_Conditional_1_Template, 1, 0, "control-connecting");
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.system()) == null ? void 0 : _a.connected) ? 0 : 1);
  }
}, dependencies: [
  TopbarHeaderComponent,
  ControlPageViewComponent,
  ControlStatusBarComponent,
  ControlConnectingComponent,
  NextMeetingComponent,
  TranslatePipe,
  DatePipe
], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[name=splash][_ngcontent-%COMP%] {\n  animation: crossfade 10s linear;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=main-view.component.css.map */"] });
var ControlMainViewComponent = _ControlMainViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlMainViewComponent, [{
    type: Component,
    args: [{ selector: "app-control-main-view", template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div class="bg-base-200 absolute inset-0 flex flex-col">
                    <topbar-header></topbar-header>
                    <div control-page-view></div>
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <div
                    name="splash"
                    class="absolute inset-0 flex flex-col items-center justify-center text-white"
                    (click)="powerOn()"
                    (touchend)="powerOn()"
                >
                    <h2 class="mb-4 text-4xl font-light">
                        {{ 'APP.CONTROL.TOUCH_TO_START' | translate }}
                    </h2>
                    <p class="text-lg">{{ system()?.name }}</p>
                    <next-meeting class="mt-8" />
                    <div class="absolute bottom-0 left-0 p-2">
                        <div class="w-full text-xs opacity-60">
                            <ng-container
                                >{{ 'COMMON.CONTROLS_VERSION' | translate }}:
                            </ng-container>
                            <button
                                class="m-0 border-none bg-none p-0 text-xs underline"
                                [disabled]="!changelog_available()"
                                (click)="viewChangelog()"
                            >
                                {{ version.hash }}
                            </button>
                        </div>
                        <div class="w-full text-xs opacity-60">
                            {{ version.time | date: 'longDate' }}
                            ({{ version.time | date: 'shortTime' }})
                        </div>
                    </div>
                </div>
            }
        } @else {
            <control-connecting />
        }
    `, imports: [
      TopbarHeaderComponent,
      ControlPageViewComponent,
      ControlStatusBarComponent,
      ControlConnectingComponent,
      NextMeetingComponent,
      TranslatePipe,
      DatePipe
    ], styles: ["/* angular:styles/component:css;5c9c66d69eb2d754cb71ce22bb6ef0ab9a2fd4d711316fd0e8b0d54cb6c6db5b;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/main-view.component.ts */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n:host > div {\n  color: #fff;\n}\n[name=splash] {\n  animation: crossfade 10s linear;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=main-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlMainViewComponent, { className: "ControlMainViewComponent", filePath: "apps/control/src/app/main-view.component.ts", lineNumber: 91 });
})();
export {
  ControlMainViewComponent
};
//# debugId=d27bae5f-80c1-50be-8642-a9c0a3d24f70
//# sourceMappingURL=main-view.component-QRDZ323T.js.map
