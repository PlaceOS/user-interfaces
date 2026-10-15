import {
  VirtualConciergeButtonComponent
} from "./chunk-2TC57AZU.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-KCRKHW53.js";
import "./chunk-7ZL4F4WD.js";
import "./chunk-EA25WZNX.js";
import "./chunk-S5HS7NHG.js";
import "./chunk-SBHTH34V.js";
import "./chunk-RKZVSUAY.js";
import "./chunk-PEQCO2KO.js";
import "./chunk-NZOADYGZ.js";
import "./chunk-BTFQJFZL.js";
import "./chunk-IT7O4DGX.js";
import "./chunk-KFFBVNR7.js";
import "./chunk-R3NV2UPK.js";
import "./chunk-SE5XQCET.js";
import "./chunk-6PPYSW7F.js";
import "./chunk-P6NDN445.js";
import "./chunk-6QIZJVIE.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-5XXGG2FQ.js";
import "./chunk-ZDOINGPN.js";
import "./chunk-F4PUA27F.js";
import "./chunk-GZLYFHJQ.js";
import "./chunk-OO3DFB4Q.js";
import "./chunk-YF2A6TVQ.js";
import "./chunk-447R336C.js";
import "./chunk-QUE3YHNN.js";
import "./chunk-UJ7NDQOC.js";
import "./chunk-S6ATPRBQ.js";
import "./chunk-2C2UBZBX.js";
import "./chunk-EO3LS4OX.js";
import "./chunk-TAEZKOMD.js";
import "./chunk-FMAOO4US.js";
import "./chunk-WCOHEZWX.js";
import "./chunk-H5JU7V2O.js";
import "./chunk-ZGRQUV4M.js";
import "./chunk-CJT2TRFV.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-XOZEGODY.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-DMQTXRS5.js";
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
//# debugId=ec67d853-fc96-5839-b555-66c9ec2daffa
//# sourceMappingURL=book.component-6QT7NEBX.js.map
