import {
  NextMeetingComponent,
  OutputDisplayComponent
} from "./chunk-6FCLBXGG.js";
import {
  ControlConnectingComponent,
  ControlStatusBarComponent,
  SplashComponent,
  TopbarHeaderComponent
} from "./chunk-LRMKYHLV.js";
import "./chunk-E4W5K7JE.js";
import {
  ControlStateService,
  toSignal
} from "./chunk-UL6NDOAC.js";
import "./chunk-L2W5ECAR.js";
import {
  TranslatePipe
} from "./chunk-KUOPNTYV.js";
import {
  ActivatedRoute,
  Component,
  MatRipple,
  MatRippleModule,
  computed,
  effect,
  inject,
  linkedSignal,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CE5NOWRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
var PAGE_SIZE = 6;
var _ControlAdvancedViewComponent = class _ControlAdvancedViewComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this.outputs = this._state.output_list;
    this._page_total = computed(
      () => {
        var _a;
        return Math.max(1, Math.ceil((((_a = this.outputs()) == null ? void 0 : _a.length) || 0) / PAGE_SIZE));
      },
      ...ngDevMode ? [{ debugName: "_page_total" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "page" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._page_total,
      computation: (total, previous) => Math.min((previous == null ? void 0 : previous.value) ?? 0, total - 1)
    }));
    this.paged_outputs = computed(
      () => {
        const p = this.page();
        return this.outputs().slice(p * PAGE_SIZE, (p + 1) * PAGE_SIZE);
      },
      ...ngDevMode ? [{ debugName: "paged_outputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page_count = computed(
      () => new Array(this._page_total()).fill(0),
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlAdvancedViewComponent, { className: "ControlAdvancedViewComponent", filePath: "apps/control/src/app/advanced-view.component.ts", lineNumber: 65 });
})();

// apps/control/src/app/main-view.component.ts
function ControlMainViewComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "topbar-header")(2, "control-advanced-view", 1)(3, "control-status-bar");
    \u0275\u0275elementEnd();
  }
}
function ControlMainViewComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "control-splash");
    \u0275\u0275element(1, "next-meeting", 2);
    \u0275\u0275elementEnd();
  }
}
function ControlMainViewComponent_Conditional_0_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlMainViewComponent_Conditional_0_Conditional_0_Template, 4, 0, "div", 0)(1, ControlMainViewComponent_Conditional_0_Conditional_1_Template, 2, 0, "control-splash");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((_a = ctx_r0.system()) == null ? void 0 : _a.active) ? 0 : 1);
  }
}
function ControlMainViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "control-connecting");
  }
}
var _ControlMainViewComponent = class _ControlMainViewComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._state = inject(ControlStateService);
    this._param_map = toSignal(this._route.paramMap);
    this._query_param_map = toSignal(this._route.queryParamMap);
    this.system = this._state.system;
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
_ControlMainViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlMainViewComponent, selectors: [["app-control-main-view"]], decls: 2, vars: 1, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col"], [1, "h-1/2", "flex-1", "overflow-hidden", "bg-[#f0f0f0]", "text-black/85"], [1, "mt-8"]], template: function ControlMainViewComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlMainViewComponent_Conditional_0_Template, 2, 1)(1, ControlMainViewComponent_Conditional_1_Template, 1, 0, "control-connecting");
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.system()) == null ? void 0 : _a.connected) ? 0 : 1);
  }
}, dependencies: [
  TopbarHeaderComponent,
  ControlAdvancedViewComponent,
  SplashComponent,
  ControlStatusBarComponent,
  ControlConnectingComponent,
  NextMeetingComponent
], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=main-view.component.css.map */"] });
var ControlMainViewComponent = _ControlMainViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlMainViewComponent, [{
    type: Component,
    args: [{ selector: "app-control-main-view", template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div class="bg-base-200 absolute inset-0 flex flex-col">
                    <topbar-header></topbar-header>
                    <control-advanced-view
                        class="h-1/2 flex-1 overflow-hidden bg-[#f0f0f0] text-black/85"
                    />
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <control-splash>
                    <next-meeting class="mt-8" />
                </control-splash>
            }
        } @else {
            <control-connecting />
        }
    `, imports: [
      TopbarHeaderComponent,
      ControlAdvancedViewComponent,
      SplashComponent,
      ControlStatusBarComponent,
      ControlConnectingComponent,
      NextMeetingComponent
    ], styles: ["/* angular:styles/component:css;5653e8145a7eb9e9062a6b756348b23fd47695d22bf14c8a0efd20507a877107;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/main-view.component.ts */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n:host > div {\n  color: #fff;\n}\n/*# sourceMappingURL=main-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlMainViewComponent, { className: "ControlMainViewComponent", filePath: "apps/control/src/app/main-view.component.ts", lineNumber: 57 });
})();
export {
  ControlMainViewComponent
};
//# debugId=4944e520-5ae1-5a5c-9139-e0f4fa6e5272
//# sourceMappingURL=main-view.component-NQZFU73G.js.map
