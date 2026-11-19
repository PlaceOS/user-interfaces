import {
  VirtualConciergeButtonComponent
} from "./chunk-L7AUDADF.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-2PSMEM6V.js";
import "./chunk-BTZCIPM4.js";
import "./chunk-UIIGRRXY.js";
import "./chunk-WS3BQHPV.js";
import "./chunk-SGCKGICA.js";
import "./chunk-POWPGIBO.js";
import "./chunk-5EPBEDMR.js";
import "./chunk-G57AXQIW.js";
import "./chunk-TZ3SWJ2Q.js";
import {
  EventFormService
} from "./chunk-6PMFQ2TN.js";
import "./chunk-XCWKC23E.js";
import "./chunk-7VIT2A64.js";
import "./chunk-PAHJHV6J.js";
import {
  BookingFormService
} from "./chunk-CZMQAAST.js";
import "./chunk-KZU6YA5M.js";
import "./chunk-XMHRP67K.js";
import "./chunk-EMYTXYHA.js";
import "./chunk-IU2VY3EB.js";
import "./chunk-Q72SJFGX.js";
import "./chunk-UKKTGEEM.js";
import "./chunk-JMYRG4D6.js";
import "./chunk-5YGEZ3F3.js";
import "./chunk-TV2KO7HE.js";
import "./chunk-DWBIKYJO.js";
import "./chunk-UVVPYG43.js";
import "./chunk-VHVF3CKX.js";
import "./chunk-ANTTLAST.js";
import "./chunk-SEBGBNAY.js";
import "./chunk-HJE2QSCA.js";
import "./chunk-OJ5RESTA.js";
import "./chunk-3KHJRBXM.js";
import "./chunk-AINIX4LN.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-GHY5Z5DH.js";
import {
  Component,
  DestroyRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-D5QHX5EO.js";
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
  constructor() {
    const booking_form = inject(BookingFormService);
    const event_form = inject(EventFormService);
    inject(DestroyRef).onDestroy(() => {
      booking_form.releaseNetwork();
      event_form.releaseNetwork();
    });
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookComponent, { className: "BookComponent", filePath: "apps/workplace/src/app/book/book.component.ts", lineNumber: 42 });
})();
export {
  BookComponent
};
//# debugId=5cf952f6-110e-5b31-954d-1e3b82442449
//# sourceMappingURL=book.component-GNGQH2QL.js.map
