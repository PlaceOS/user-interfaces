import {
  VirtualConciergeButtonComponent
} from "./chunk-ITZQXVGH.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-5RNJN3W7.js";
import "./chunk-3QNI7MAA.js";
import "./chunk-CIX7HXF5.js";
import "./chunk-3JRWOCWL.js";
import "./chunk-QEKWGWTX.js";
import "./chunk-QBNZMJAJ.js";
import "./chunk-HTR72LHE.js";
import "./chunk-KLPIX7P6.js";
import "./chunk-VQODMBHS.js";
import {
  EventFormService
} from "./chunk-3QWZUK46.js";
import "./chunk-FVQGKI65.js";
import "./chunk-4KH6UVRS.js";
import "./chunk-4EPTCEUF.js";
import {
  BookingFormService
} from "./chunk-F4WTZAFQ.js";
import "./chunk-5PFQBW57.js";
import "./chunk-UL5HEAM4.js";
import "./chunk-AQQYX5FE.js";
import "./chunk-IU2VY3EB.js";
import "./chunk-QHZ4LDEQ.js";
import "./chunk-BBWOCY2E.js";
import "./chunk-I3OY4LO5.js";
import "./chunk-EPTE6XIE.js";
import "./chunk-7PKDLSD2.js";
import "./chunk-7WQNOFKB.js";
import "./chunk-DXRKCFCB.js";
import "./chunk-UVVPYG43.js";
import "./chunk-PWQFCX4M.js";
import "./chunk-ENIXPTT5.js";
import "./chunk-UWLAJZAK.js";
import "./chunk-JNLDSZG4.js";
import "./chunk-TA2HEKLV.js";
import "./chunk-DHS6ZSNA.js";
import "./chunk-JTU2ADRZ.js";
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
//# debugId=a232ab7a-50e0-5f3c-a083-4a34cfc086ec
//# sourceMappingURL=book.component-XC56GX7U.js.map
