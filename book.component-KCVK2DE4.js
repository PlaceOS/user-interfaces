import {
  VirtualConciergeButtonComponent
} from "./chunk-36WIEQE3.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-46EFFIVT.js";
import "./chunk-PJ66MINV.js";
import "./chunk-JORESASJ.js";
import "./chunk-5J2M57DE.js";
import "./chunk-ZJVDTFCF.js";
import "./chunk-DKIL37WI.js";
import "./chunk-NJBMNBRD.js";
import "./chunk-54MR7FWS.js";
import "./chunk-NASYARL3.js";
import "./chunk-EIEUQAQR.js";
import "./chunk-DF7XWTBN.js";
import "./chunk-OHVS62XM.js";
import "./chunk-JC5PLLZR.js";
import "./chunk-MJ5KBT77.js";
import "./chunk-SNKRULMK.js";
import "./chunk-ASVRCHQY.js";
import "./chunk-OLNALHEI.js";
import "./chunk-RUHMR2QD.js";
import "./chunk-Q7Y4N3AM.js";
import "./chunk-UGX7JW7G.js";
import "./chunk-S52QWBRA.js";
import "./chunk-6IJXKJPP.js";
import "./chunk-4NHDD5QK.js";
import "./chunk-2SYU4RTL.js";
import "./chunk-RUQKCW72.js";
import "./chunk-UQNRZFLV.js";
import "./chunk-W35CUT4A.js";
import "./chunk-EAOFHIYL.js";
import "./chunk-JYO7LELA.js";
import "./chunk-643LYWPU.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-BG3JRCH4.js";
import "./chunk-5VJEALCQ.js";
import "./chunk-IAM33LEY.js";
import "./chunk-BTDPXRKA.js";
import "./chunk-OGV3EA5G.js";
import "./chunk-5AAPHMFE.js";
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
} from "./chunk-RLXUTJQM.js";
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
//# sourceMappingURL=book.component-KCVK2DE4.js.map
