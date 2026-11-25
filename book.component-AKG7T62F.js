import {
  VirtualConciergeButtonComponent
} from "./chunk-QOM5EAXK.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-GP2K5ILP.js";
import "./chunk-CGQYG4AF.js";
import "./chunk-2YYNDRLJ.js";
import "./chunk-GYIL5GRK.js";
import "./chunk-CDO5MTVD.js";
import "./chunk-7FU4XMLC.js";
import "./chunk-UMUDFWLR.js";
import "./chunk-GVKFIS7X.js";
import "./chunk-7A3KIX6S.js";
import {
  EventFormService
} from "./chunk-2SLFO7NC.js";
import {
  BookingFormService
} from "./chunk-6UDZ35R5.js";
import "./chunk-3R2S4FMV.js";
import "./chunk-3TVQPWXZ.js";
import "./chunk-RHYUWXV2.js";
import "./chunk-PURY2JJW.js";
import "./chunk-ZKRDGH44.js";
import "./chunk-TFVNVXOU.js";
import "./chunk-J3KWNLO2.js";
import "./chunk-DWCIQIE5.js";
import "./chunk-57ETJC7G.js";
import "./chunk-D5GE5T23.js";
import "./chunk-CPAXM3GX.js";
import "./chunk-I357TL4H.js";
import "./chunk-FR3TCWPL.js";
import "./chunk-BFRLF5T2.js";
import "./chunk-CWTPLDS6.js";
import "./chunk-E6W2FBEZ.js";
import "./chunk-E57Z7P2L.js";
import "./chunk-OH6XCKMD.js";
import "./chunk-5FYRTGWS.js";
import "./chunk-PEKEXUV7.js";
import "./chunk-JKQDODFC.js";
import "./chunk-WJ3LMTGY.js";
import "./chunk-YS6B7LAQ.js";
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
//# debugId=a722f8ee-6354-5f2a-9790-99d842c8a101
//# sourceMappingURL=book.component-AKG7T62F.js.map
