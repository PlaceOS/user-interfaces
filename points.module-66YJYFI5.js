import {
  PointsAssetsComponent,
  PointsOverviewComponent,
  PointsStateService
} from "./chunk-CQDCER3X.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-DF2YTEYR.js";
import "./chunk-7R5R3DKW.js";
import {
  DateOptionsComponent
} from "./chunk-NWV4SCGX.js";
import "./chunk-JDNC5NBL.js";
import "./chunk-4TKH7LIR.js";
import "./chunk-XCGU5XIL.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-4RG2QD2S.js";
import {
  AsyncHandler,
  Component,
  MatRipple,
  MatRippleModule,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  TranslatePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Z5DSMDUT.js";

// apps/concierge/src/app/points/points-topbar.component.ts
var _c0 = ["*"];
var _PointsTopbarComponent = class _PointsTopbarComponent extends AsyncHandler {
};
_PointsTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PointsTopbarComponent_BaseFactory;
  return function PointsTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275PointsTopbarComponent_BaseFactory || (\u0275PointsTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PointsTopbarComponent)))(__ngFactoryType__ || _PointsTopbarComponent);
  };
})();
_PointsTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsTopbarComponent, selectors: [["points-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "pl-2"]], template: function PointsTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2)(5, "date-options");
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275projection(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.POINTS_HEADER"), " ");
  }
}, dependencies: [DateOptionsComponent, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */"] });
var PointsTopbarComponent = _PointsTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsTopbarComponent, [{
    type: Component,
    args: [{ selector: "points-topbar", template: `
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.POINTS_HEADER' | translate }}
            </h2>
            <div class="w-px flex-1"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options></date-options>
            <div class="pl-2">
                <ng-content></ng-content>
            </div>
        </div>
    `, imports: [DateOptionsComponent, TranslatePipe], styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/points-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsTopbarComponent, { className: "PointsTopbarComponent", filePath: "apps/concierge/src/app/points/points-topbar.component.ts", lineNumber: 31 });
})();

// apps/concierge/src/app/points/points.component.ts
var _c02 = () => ["/points-management", "overview"];
var _c1 = () => ["/points-management", "assets"];
function PointsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function PointsComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newAsset());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.POINTS_ASSETS_ADD"), " ");
  }
}
var _PointsComponent = class _PointsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(PointsStateService);
    this._router = inject(Router);
    this.newAsset = () => this._state.newAsset();
  }
  ngOnInit() {
    this.subscription("route.params", this._router.events.subscribe(() => {
      const url_parts = this._router.url?.split("/") || [""];
      this.page = url_parts[url_parts.length - 1];
    }));
    const parts = this._router.url?.split("/") || [""];
    this.page = parts[parts.length - 1];
  }
};
_PointsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PointsComponent_BaseFactory;
  return function PointsComponent_Factory(__ngFactoryType__) {
    return (\u0275PointsComponent_BaseFactory || (\u0275PointsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PointsComponent)))(__ngFactoryType__ || _PointsComponent);
  };
})();
_PointsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsComponent, selectors: [["placeos-new-points"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 14, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", 1, "w-40"], [1, "mb-4", "px-8"], [1, "bg-base-200", "overflow-hidden", "rounded-sm"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function PointsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "points-topbar", 3);
    \u0275\u0275conditionalCreate(5, PointsComponent_Conditional_5_Template, 3, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "nav", 7)(9, "a", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "mat-tab-nav-panel", 9, 0);
    \u0275\u0275element(17, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tabPanel_r3 = \u0275\u0275reference(16);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.page === "assets" ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("tabPanel", tabPanel_r3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c02))("active", ctx.page === "overview");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "APP.CONCIERGE.POINTS_TAB_OVERVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c1))("active", ctx.page === "assets");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "APP.CONCIERGE.POINTS_TAB_ASSETS"), " ");
  }
}, dependencies: [
  MatTabsModule,
  MatTabNav,
  MatTabNavPanel,
  MatTabLink,
  RouterModule,
  RouterOutlet,
  RouterLink,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  PointsTopbarComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=points.component.css.map */"] });
var PointsComponent = _PointsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsComponent, [{
    type: Component,
    args: [{ selector: "placeos-new-points", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <points-topbar class="relative z-10">
                    @if (page === 'assets') {
                        <button btn matRipple class="w-40" (click)="newAsset()">
                            {{ 'APP.CONCIERGE.POINTS_ASSETS_ADD' | translate }}
                        </button>
                    }
                </points-topbar>
                <div class="mb-4 px-8">
                    <div class="bg-base-200 overflow-hidden rounded-sm">
                        <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/points-management',
                                    'overview',
                                ]"
                                [active]="page === 'overview'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_OVERVIEW'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="['/points-management', 'assets']"
                                [active]="page === 'assets'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_ASSETS'
                                        | translate
                                }}
                            </a>
                        </nav>
                    </div>
                </div>
                <mat-tab-nav-panel
                    class="h-1/2 w-full flex-1 overflow-auto px-8"
                    #tabPanel
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
            </main>
        </div>
    `, imports: [
      MatTabsModule,
      RouterModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      PointsTopbarComponent,
      MatRippleModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/points.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=points.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsComponent, { className: "PointsComponent", filePath: "apps/concierge/src/app/points/points.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/points/points.module.ts
var ROUTES = [
  {
    path: "",
    component: PointsComponent,
    children: [
      { path: "assets", component: PointsAssetsComponent },
      { path: "overview", component: PointsOverviewComponent },
      { path: "**", redirectTo: "overview", pathMatch: "full" }
    ]
  }
];
var _PointsModule = class _PointsModule {
};
_PointsModule.\u0275fac = function PointsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsModule)();
};
_PointsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PointsModule });
_PointsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  PointsComponent,
  PointsOverviewComponent,
  PointsAssetsComponent,
  RouterModule.forChild(ROUTES)
] });
var PointsModule = _PointsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        PointsComponent,
        PointsOverviewComponent,
        PointsAssetsComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  PointsModule
};
//# sourceMappingURL=points.module-66YJYFI5.js.map
