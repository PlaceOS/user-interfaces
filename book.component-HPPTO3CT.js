import {
  VirtualConciergeButtonComponent
} from "./chunk-LUIPEHT2.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-IY4LPDTW.js";
import "./chunk-UODLNYTJ.js";
import "./chunk-2GRBD76Z.js";
import "./chunk-H2DZYM74.js";
import "./chunk-HHH2GUUY.js";
import "./chunk-MZN7WG5R.js";
import "./chunk-6GIBONXV.js";
import "./chunk-TC3NM2KE.js";
import "./chunk-HEWP2W5O.js";
import "./chunk-D3VYGJ6G.js";
import "./chunk-RVKWVUYC.js";
import {
  EventFormService
} from "./chunk-U66A4PGJ.js";
import "./chunk-I3OEOK2P.js";
import {
  BookingFormService
} from "./chunk-56C27J3X.js";
import "./chunk-IVWYWRG7.js";
import "./chunk-YEF7L372.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-GBEZ2XD5.js";
import "./chunk-N4IXGM4A.js";
import "./chunk-DVFRHLZI.js";
import "./chunk-I5IZZO3Z.js";
import "./chunk-AFTIF56Q.js";
import "./chunk-5XMRXOYP.js";
import "./chunk-CRZDCPNP.js";
import "./chunk-7VF5TD5Y.js";
import "./chunk-VZSWYXPT.js";
import "./chunk-IB6WR7JO.js";
import "./chunk-JZU6NIMO.js";
import "./chunk-KTADYPHH.js";
import "./chunk-3ZDLFGP6.js";
import "./chunk-2FYBYRLM.js";
import "./chunk-LSVIIU5S.js";
import "./chunk-3E4LH6FR.js";
import "./chunk-CL7UDZVD.js";
import "./chunk-FFDIHN6G.js";
import "./chunk-CENZX4JC.js";
import "./chunk-WWAEQFU7.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-ZTX66HDZ.js";
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
} from "./chunk-6OEACKVR.js";
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
//# debugId=b8dd8921-9a92-59f9-b283-90d3b083ae74
//# sourceMappingURL=book.component-HPPTO3CT.js.map
