import {
  VirtualConciergeButtonComponent
} from "./chunk-UIJVTKSR.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-SLYX3AXC.js";
import "./chunk-64CKR55Z.js";
import "./chunk-F47MZHE6.js";
import "./chunk-5OLBLN6E.js";
import "./chunk-22QX5C6L.js";
import "./chunk-K2N6BNNL.js";
import "./chunk-KTBUPPPY.js";
import "./chunk-32QZMEFD.js";
import "./chunk-TF4QY3AR.js";
import {
  EventFormService
} from "./chunk-QTGOKUEH.js";
import {
  BookingFormService
} from "./chunk-QSWC2E5G.js";
import "./chunk-B6MF5OJ2.js";
import "./chunk-MOUC7VHP.js";
import "./chunk-OWOXHDCP.js";
import "./chunk-CNUGROVV.js";
import "./chunk-J72JKTUJ.js";
import "./chunk-RMXTSHQH.js";
import "./chunk-DWCIQIE5.js";
import "./chunk-BSB45Y2A.js";
import "./chunk-OT4ZUOBN.js";
import "./chunk-XD3N65KA.js";
import "./chunk-TM7PHEFJ.js";
import "./chunk-ZPN5MVBX.js";
import "./chunk-DEI4YERS.js";
import "./chunk-E57Z7P2L.js";
import "./chunk-27D75VLC.js";
import "./chunk-5LXAM6QD.js";
import "./chunk-DKHUXGTD.js";
import "./chunk-5VBKUMJ6.js";
import "./chunk-I4UMI225.js";
import "./chunk-YIMOFMD2.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-UQJ4NR33.js";
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
} from "./chunk-JFVDZBHZ.js";
import "./chunk-RQBZITXC.js";

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
//# debugId=a1561e38-21af-5cd5-8498-26ec37a05e9a
//# sourceMappingURL=book.component-W3Q33IQW.js.map
