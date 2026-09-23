import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-NSHUECSS.js";
import "./chunk-ZOYVHHKL.js";
import "./chunk-IG64BHM7.js";
import "./chunk-ZAYDHTVB.js";
import "./chunk-4WC64X2O.js";
import "./chunk-PILOBDC2.js";
import "./chunk-EVA5EG2B.js";
import "./chunk-MSFEBUJ4.js";
import "./chunk-WQJLTCEO.js";
import "./chunk-K3F5MWPX.js";
import "./chunk-X4QCJGM4.js";
import "./chunk-275CIZOL.js";
import "./chunk-A6UZQTPW.js";
import "./chunk-7CYURA5J.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-7MFZA62W.js";
import "./chunk-FQ5X5VZT.js";
import "./chunk-BBWQXWRS.js";
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
} from "./chunk-C5JCVNGY.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.component.ts
function BookComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function BookComponent_Conditional_4_Template(rf, ctx) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookComponent, selectors: [["placeos-book"]], decls: 5, vars: 2, consts: [[1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"]], template: function BookComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, BookComponent_Conditional_4_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.hide_nav ? 4 : -1);
      }
    }, dependencies: [RouterModule, RouterOutlet, FooterMenuComponent, TopbarComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=book.component.css.map */"] });
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
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [RouterModule, FooterMenuComponent, TopbarComponent], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/book.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=book.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookComponent, { className: "BookComponent", filePath: "apps/workplace/src/app/book/book.component.ts", lineNumber: 33 });
})();
export {
  BookComponent
};
//# debugId=59113a30-839e-5909-9b06-f56ae412a2ed
//# sourceMappingURL=book.component-6E2IRI3E.js.map
