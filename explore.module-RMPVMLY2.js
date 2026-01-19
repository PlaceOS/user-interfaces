import {
  DesksService,
  ExploreMapViewComponent,
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-6ZRUDDEL.js";
import {
  Component,
  MAP_FEATURE_DATA,
  NgModule,
  RouterModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-2IAXTSED.js";

// apps/workplace/src/app/explore/explore.component.ts
function ExploreComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ExploreComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var _ExploreComponent = class _ExploreComponent {
  constructor() {
    this._desks = inject(DesksService);
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  ngOnInit() {
    this._desks.error_on_host = false;
  }
};
_ExploreComponent.\u0275fac = function ExploreComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreComponent)();
};
_ExploreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["app-explore"]], decls: 5, vars: 2, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"]], template: function ExploreComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExploreComponent_Conditional_0_Template, 1, 0, "topbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
    \u0275\u0275element(3, "explore-map-view");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, ExploreComponent_Conditional_4_Template, 1, 0, "footer-menu");
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.hide_nav ? 4 : -1);
  }
}, dependencies: [TopbarComponent, FooterMenuComponent, ExploreMapViewComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */"] });
var ExploreComponent = _ExploreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreComponent, [{
    type: Component,
    args: [{ selector: "app-explore", template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="bg-base-200 flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <explore-map-view></explore-map-view>
            </main>
        </div>

        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [TopbarComponent, FooterMenuComponent, ExploreMapViewComponent], styles: ["/* angular:styles/component:css;272d43022913da8b6c60debddc182b5c3d8e2877b2c9bac0eacbbdf7c40c19c6;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/explore/explore.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/workplace/src/app/explore/explore.component.ts", lineNumber: 41 });
})();

// apps/workplace/src/app/explore/explore.module.ts
var ROUTES = [
  { path: "", component: ExploreComponent },
  { path: ":search_type", component: ExploreComponent }
];
var _ExploreModule = class _ExploreModule {
};
_ExploreModule.\u0275fac = function ExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreModule)();
};
_ExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExploreModule });
_ExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }], imports: [ExploreComponent, RouterModule.forChild(ROUTES)] });
var ExploreModule = _ExploreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [ExploreComponent, RouterModule.forChild(ROUTES)],
      providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }]
    }]
  }], null, null);
})();
export {
  ExploreModule
};
//# sourceMappingURL=explore.module-RMPVMLY2.js.map
