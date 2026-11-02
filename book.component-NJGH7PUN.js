import {
  VirtualConciergeButtonComponent
} from "./chunk-E6OHVPEA.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-R27IO7BV.js";
import "./chunk-GWWSXGRK.js";
import "./chunk-75NZ7ZVL.js";
import "./chunk-PUPJJNAT.js";
import "./chunk-HYT2E5O7.js";
import "./chunk-JOCIATSW.js";
import "./chunk-LDU2ERRZ.js";
import "./chunk-Q2GEOYP4.js";
import "./chunk-XESZIALG.js";
import {
  EventFormService
} from "./chunk-APKRWYFV.js";
import "./chunk-XILU65SK.js";
import {
  BookingFormService
} from "./chunk-FVH5LY27.js";
import "./chunk-H7PSJRXX.js";
import "./chunk-4ZPX43DB.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-HV5QH4WN.js";
import "./chunk-LMAIQ4DZ.js";
import "./chunk-72DV433X.js";
import "./chunk-H2GPFJZZ.js";
import "./chunk-TWPPCAYQ.js";
import "./chunk-TSBWLHWQ.js";
import "./chunk-UJHJAQT2.js";
import "./chunk-KSBCT6R4.js";
import "./chunk-5CMHACIV.js";
import "./chunk-2S5EJNGK.js";
import "./chunk-BI3RO5ME.js";
import "./chunk-ABUJTHF5.js";
import "./chunk-HKX4F5AS.js";
import "./chunk-NCJUZBAT.js";
import "./chunk-AWPFSUBU.js";
import "./chunk-J4TWZHWN.js";
import "./chunk-JJMLMF3T.js";
import "./chunk-HXQPKKM6.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-CJAQVJ62.js";
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
} from "./chunk-UL33YUHR.js";
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
//# sourceMappingURL=book.component-NJGH7PUN.js.map
