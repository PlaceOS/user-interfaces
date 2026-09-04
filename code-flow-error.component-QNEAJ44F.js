import {
  BookingFormService
} from "./chunk-ERYZEGAK.js";
import {
  AsyncHandler
} from "./chunk-UASD34R3.js";
import {
  ActivatedRoute,
  Component,
  MatRipple,
  MatRippleModule,
  RouterLink,
  RouterModule,
  TranslatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PKNCBQ6J.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/code-flow-error.component.ts
var _c0 = (a0) => ({ type: a0 });
var _c1 = () => ["/"];
var _c2 = () => ["/book", "code"];
var _c3 = (a0) => ({ asset_id: a0 });
var _c4 = () => ["/book", "desk"];
function CodeFlowErrorComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Booking has not started yet. Please try again once the booking has commenced. ");
  }
}
function CodeFlowErrorComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You have booking with a different resource. ");
  }
}
function CodeFlowErrorComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You do not have a booking. Would you like to book this desk? ");
  }
}
function CodeFlowErrorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c2))("queryParams", \u0275\u0275pureFunction1(6, _c3, ctx_r0.asset_id()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.WORKPLACE.TRY_AGAIN"), " ");
  }
}
function CodeFlowErrorComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c4))("queryParams", \u0275\u0275pureFunction1(6, _c3, ctx_r0.asset_id()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.BOOK"), " ");
  }
}
var CodeFlowErrorComponent = class _CodeFlowErrorComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._state = inject(BookingFormService);
    this.type = signal(
      "other",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_type = signal(
      "resource",
      ...ngDevMode ? [{ debugName: "asset_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "asset_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset = null;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      this.type.set(params.get("type") || "other");
      this.asset_type.set(params.get("asset_type") || "resource");
      this.asset_id.set(params.get("asset_id"));
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CodeFlowErrorComponent_BaseFactory;
      return function CodeFlowErrorComponent_Factory(__ngFactoryType__) {
        return (\u0275CodeFlowErrorComponent_BaseFactory || (\u0275CodeFlowErrorComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CodeFlowErrorComponent)))(__ngFactoryType__ || _CodeFlowErrorComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeFlowErrorComponent, selectors: [["code-flow-error"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 14, consts: [[1, "bg-base-100", "z-50", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "min-h-0", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-y-auto", "p-8"], [1, "text-2xl", "font-medium"], [1, "py-4"], ["src", "assets/icons/not-found.svg", 1, "h-32", "sm:h-64"], [1, "max-w-lg", "text-center"], [1, "border-base-200", "mt-4", "flex", "w-full", "shrink-0", "items-center", "justify-center", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-lg", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", "max-w-lg", 3, "routerLink"]], template: function CodeFlowErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275conditionalCreate(8, CodeFlowErrorComponent_Case_8_Template, 1, 0)(9, CodeFlowErrorComponent_Case_9_Template, 1, 0)(10, CodeFlowErrorComponent_Case_10_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "footer", 6);
        \u0275\u0275conditionalCreate(12, CodeFlowErrorComponent_Conditional_12_Template, 3, 8, "a", 7);
        \u0275\u0275conditionalCreate(13, CodeFlowErrorComponent_Conditional_13_Template, 3, 8, "a", 7);
        \u0275\u0275elementStart(14, "a", 8);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, "APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED", \u0275\u0275pureFunction1(11, _c0, ctx.asset_type())), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_1_0 = ctx.type()) === "not_started" ? 8 : tmp_1_0 === "wrong_resource" ? 9 : 10);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.type() === "not_started" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.type() !== "not_started" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c1));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "COMMON.CONTINUE"), " ");
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 50%;\n  flex: 1;\n}\n/*# sourceMappingURL=code-flow-error.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeFlowErrorComponent, [{
    type: Component,
    args: [{ selector: "code-flow-error", template: `
        <div class="bg-base-100 z-50 flex h-full w-full flex-col">
            <main
                class="flex min-h-0 flex-1 flex-col items-center justify-center space-y-2 overflow-y-auto p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{
                        'APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED'
                            | translate: { type: asset_type() }
                    }}
                </h2>
                <div class="py-4">
                    <img src="assets/icons/not-found.svg" class="h-32 sm:h-64" />
                </div>
                <p class="max-w-lg text-center">
                    @switch (type()) {
                        @case ('not_started') {
                            Booking has not started yet. Please try again once
                            the booking has commenced.
                        }
                        @case ('wrong_resource') {
                            You have booking with a different resource.
                        }
                        @default {
                            You do not have a booking. Would you like to book
                            this desk?
                        }
                    }
                </p>
            </main>
            <footer
                class="border-base-200 mt-4 flex w-full shrink-0 items-center justify-center space-x-2 border-t p-2"
            >
                @if (type() === 'not_started') {
                    <a
                        btn
                        matRipple
                        class="w-full max-w-lg"
                        [routerLink]="['/book', 'code']"
                        [queryParams]="{ asset_id: asset_id() }"
                    >
                        {{ 'APP.WORKPLACE.TRY_AGAIN' | translate }}
                    </a>
                }
                @if (type() !== 'not_started') {
                    <a
                        btn
                        matRipple
                        class="w-full max-w-lg"
                        [routerLink]="['/book', 'desk']"
                        [queryParams]="{ asset_id: asset_id() }"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </a>
                }
                <a
                    btn
                    matRipple
                    class="inverse w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `, imports: [MatRippleModule, TranslatePipe, RouterModule], styles: ["/* angular:styles/component:css;51d1a0ea61fe737f13782e94f43b2f60fe3b9b0031b7ddc3db689848ef079271;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/code-flow-error.component.ts */\n:host {\n  width: 100%;\n  height: 50%;\n  flex: 1;\n}\n/*# sourceMappingURL=code-flow-error.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeFlowErrorComponent, { className: "CodeFlowErrorComponent", filePath: "apps/workplace/src/app/book/code-flow-error.component.ts", lineNumber: 87 });
})();
export {
  CodeFlowErrorComponent
};
//# sourceMappingURL=code-flow-error.component-QNEAJ44F.js.map
