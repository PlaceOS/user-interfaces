import {
  VirtualConciergeButtonComponent
} from "./chunk-B4D6JVJB.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-UUUKYCPZ.js";
import "./chunk-7HYFRV34.js";
import "./chunk-3GYVJIXI.js";
import "./chunk-QJRQUBOF.js";
import "./chunk-4XR2WT6H.js";
import "./chunk-LCWNFW2T.js";
import "./chunk-7P6NMBNU.js";
import "./chunk-GPF4A4U2.js";
import "./chunk-LYUNVA2J.js";
import "./chunk-AEX6AFQV.js";
import "./chunk-C62XJZOQ.js";
import "./chunk-PTM6YDDQ.js";
import "./chunk-4WX5XLZZ.js";
import "./chunk-Z37RGZOD.js";
import "./chunk-EKBNVLBG.js";
import "./chunk-6RESVZPV.js";
import "./chunk-OLNALHEI.js";
import "./chunk-G3YJJDYF.js";
import "./chunk-3MHAGFSK.js";
import "./chunk-F2BAFCPK.js";
import "./chunk-CJOPIBOG.js";
import "./chunk-UGXCNYLO.js";
import "./chunk-2LST4F5R.js";
import "./chunk-F5ETKGCF.js";
import "./chunk-K764B4V2.js";
import "./chunk-6WGIDKBW.js";
import "./chunk-LX74DR62.js";
import "./chunk-H4THH76O.js";
import "./chunk-LKUFAFOQ.js";
import "./chunk-CVWHMO6R.js";
import "./chunk-HNLSWNR2.js";
import "./chunk-MMACJISK.js";
import "./chunk-B6DAJTHO.js";
import "./chunk-KI7LYHXH.js";
import "./chunk-TVFY52KD.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-4ZWAZXKT.js";
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
} from "./chunk-U7ZY5HJM.js";
import "./chunk-GOMI4DH3.js";

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
//# sourceMappingURL=book.component-4IB22QBY.js.map
