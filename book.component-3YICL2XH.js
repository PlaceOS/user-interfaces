import {
  VirtualConciergeButtonComponent
} from "./chunk-6U5X377B.js";
import "./chunk-URYVTSC5.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-ODMNN5ZG.js";
import "./chunk-M6F65BKH.js";
import "./chunk-ZQZG7SUH.js";
import "./chunk-CIDKMFJ6.js";
import "./chunk-567H2FVA.js";
import "./chunk-SFP655S5.js";
import "./chunk-3UUBWQGG.js";
import "./chunk-MM7VICJI.js";
import "./chunk-T7OOLXDC.js";
import "./chunk-O2QVU2UA.js";
import "./chunk-E34JWOJS.js";
import "./chunk-CIO23QQ4.js";
import "./chunk-AQKEJGOH.js";
import "./chunk-26SYQ4JX.js";
import "./chunk-DIHM337R.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-5H276KIR.js";
import "./chunk-45XEP3DZ.js";
import {
  Component,
  RouterModule,
  RouterOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-VRMULRUP.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.component.ts
function BookComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function BookComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var BookComponent = class _BookComponent {
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  static {
    this.\u0275fac = function BookComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookComponent, selectors: [["placeos-book"]], decls: 6, vars: 2, consts: [[1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"]], template: function BookComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, BookComponent_Conditional_5_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.hide_nav ? 5 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterOutlet,
      FooterMenuComponent,
      TopbarComponent,
      VirtualConciergeButtonComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=book.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookComponent, [{
    type: Component,
    args: [{ selector: "placeos-book", template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main class="flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto">
                <router-outlet></router-outlet>
            </main>
            <virtual-concierge-button />
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [
      RouterModule,
      FooterMenuComponent,
      TopbarComponent,
      VirtualConciergeButtonComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/book.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=book.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookComponent, { className: "BookComponent", filePath: "apps/workplace/src/app/book/book.component.ts", lineNumber: 40 });
})();
export {
  BookComponent
};
//# debugId=27eecd33-85e8-5b8d-ae25-d7638981b8b0
//# sourceMappingURL=book.component-3YICL2XH.js.map
