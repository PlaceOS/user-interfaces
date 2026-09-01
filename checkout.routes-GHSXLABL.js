import {
  CheckinComponent,
  CheckinErrorComponent,
  CheckinQRScanComponent
} from "./chunk-PUKK4VMT.js";
import "./chunk-Q4DQ62MM.js";
import {
  CheckinStateService
} from "./chunk-UM3G5RHV.js";
import {
  Component,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  TranslatePipe,
  i18n,
  inject,
  notifySuccess,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-EPSGOQ6B.js";
import "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/checkin/checkout.component.ts
var _c0 = () => ["/welcome"];
function CheckoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 6);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.VISITOR_KIOSK.CHECKOUT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.CHECKOUT_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "COMMON.CHECK_OUT"), " ");
  }
}
function CheckoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.CHECKOUT_LOADING"), " ");
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this._state = inject(CheckinStateService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const event = this._state.event();
    if (!event)
      this._router.navigate(["/checkout"]);
  }
  async checkout() {
    this.loading.set(true);
    const result = await this._state.checkinGuest(false).then(() => true).catch(() => false);
    this.loading.set(false);
    if (!result)
      return;
    this._router.navigate(["/welcome"]);
    notifySuccess(i18n("APP.VISITOR_KIOSK.CHECKOUT_SUCCESS"));
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "flex", "w-md", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "bg-base-100", "relative", "flex", "h-80", "w-md", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded-sm", "p-8", "shadow-sm"], [1, "mb-2", "w-full", "text-xl"], [1, "mt-2", "mb-4", "w-full"], [1, "flex", "w-full", "items-center", "justify-end", "gap-2"], ["btn", "", "matRipple", "", 1, "inverse", "error", "w-32", "bg-error/10", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [3, "diameter"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckoutComponent_Conditional_0_Template, 14, 14, "div", 0)(1, CheckoutComponent_Conditional_1_Template, 5, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner, RouterModule, RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-md flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT' | translate }}
                </h3>
                <div class="mt-2 mb-4 w-full">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_MSG' | translate }}
                </div>
                <div class="flex w-full items-center justify-end gap-2">
                    <button
                        btn class="inverse error w-32 bg-error/10"
                        matRipple
                        [routerLink]="['/welcome']"
                    >
                        {{'COMMON.CANCEL' | translate}}
                    </button>
                    <button btn matRipple class="w-32" (click)="checkout()">
                        {{ 'COMMON.CHECK_OUT' | translate }}
                    </button>
                </div>
            </div>
        } @else {
            <div
                class="bg-base-100 relative flex h-80 w-md flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm p-8 shadow-sm"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_LOADING' | translate }}
                </div>
            </div>
        }
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkout.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkout.component.ts", lineNumber: 65 });
})();

// apps/visitor-kiosk/src/app/checkin/checkout.routes.ts
var ROUTES = [
  {
    path: "",
    component: CheckinComponent,
    children: [
      {
        path: "scan",
        component: CheckinQRScanComponent,
        data: { flow: "checkout" }
      },
      { path: "confirm", component: CheckoutComponent },
      { path: "error", component: CheckinErrorComponent },
      { path: "**", redirectTo: "scan" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=checkout.routes-GHSXLABL.js.map
