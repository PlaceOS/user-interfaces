import {
  BookingFormService
} from "./chunk-MX6FHWCN.js";
import "./chunk-2EHUPV2S.js";
import "./chunk-4ZPX43DB.js";
import "./chunk-C6L5P757.js";
import "./chunk-LMAIQ4DZ.js";
import "./chunk-H2GPFJZZ.js";
import "./chunk-TWPPCAYQ.js";
import "./chunk-3JQPS2OO.js";
import "./chunk-SQO5Y5ZU.js";
import {
  TranslatePipe
} from "./chunk-QGI2HD4I.js";
import "./chunk-GRXVKFOQ.js";
import "./chunk-ABUJTHF5.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import "./chunk-WSQPQHCZ.js";
import "./chunk-AWPFSUBU.js";
import "./chunk-J4TWZHWN.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JJMLMF3T.js";
import "./chunk-HXQPKKM6.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-CJAQVJ62.js";
import {
  Component,
  computed,
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
} from "./chunk-UL33YUHR.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/code-flow-error.component.ts
var _c0 = (a0) => ({ type: a0 });
var _c1 = () => ["/"];
var _c2 = () => ["/book", "code"];
var _c3 = (a0) => ({ asset_id: a0 });
var _c4 = () => ["/book", "desk"];
function CodeFlowErrorComponent_Conditional_11_Template(rf, ctx) {
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
function CodeFlowErrorComponent_Conditional_12_Template(rf, ctx) {
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
    this.copy = computed(
      () => {
        switch (this.type()) {
          case "not_started":
            return {
              title: "APP.WORKPLACE.CODE_NOT_STARTED_TITLE",
              message: "APP.WORKPLACE.CODE_NOT_STARTED_MSG"
            };
          case "wrong_resource":
            return {
              title: "APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED",
              message: "APP.WORKPLACE.CODE_WRONG_RESOURCE_MSG"
            };
          case "space_error":
            return {
              title: "APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED",
              message: "APP.WORKPLACE.CODE_SPACE_ERROR_MSG"
            };
          default:
            return {
              title: "APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED",
              message: "APP.WORKPLACE.CODE_NO_BOOKING_MSG"
            };
        }
      },
      ...ngDevMode ? [{ debugName: "copy" }] : (
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeFlowErrorComponent, selectors: [["code-flow-error"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 16, consts: [[1, "bg-base-100", "z-50", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "min-h-0", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-y-auto", "p-8"], [1, "text-2xl", "font-medium"], [1, "py-4"], ["src", "assets/icons/not-found.svg", 1, "h-32", "sm:h-64"], [1, "max-w-lg", "text-center"], [1, "border-base-200", "mt-4", "flex", "w-full", "shrink-0", "items-center", "justify-center", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-lg", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", "max-w-lg", 3, "routerLink"]], template: function CodeFlowErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "footer", 6);
        \u0275\u0275conditionalCreate(11, CodeFlowErrorComponent_Conditional_11_Template, 3, 8, "a", 7);
        \u0275\u0275conditionalCreate(12, CodeFlowErrorComponent_Conditional_12_Template, 3, 8, "a", 7);
        \u0275\u0275elementStart(13, "a", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, ctx.copy().title, \u0275\u0275pureFunction1(13, _c0, ctx.asset_type())), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, ctx.copy().message), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.type() === "not_started" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.type() !== "not_started" && ctx.type() !== "space_error" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c1));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 11, "COMMON.CONTINUE"), " ");
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
                    {{ copy().title | translate: { type: asset_type() } }}
                </h2>
                <div class="py-4">
                    <img src="assets/icons/not-found.svg" class="h-32 sm:h-64" />
                </div>
                <p class="max-w-lg text-center">
                    {{ copy().message | translate }}
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
                @if (type() !== 'not_started' && type() !== 'space_error') {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeFlowErrorComponent, { className: "CodeFlowErrorComponent", filePath: "apps/workplace/src/app/book/code-flow-error.component.ts", lineNumber: 72 });
})();
export {
  CodeFlowErrorComponent
};
//# debugId=a8c98126-f316-566e-909e-484fbf07cddd
//# sourceMappingURL=code-flow-error.component-7X73ZV67.js.map
