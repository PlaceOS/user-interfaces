import {
  toSignal
} from "./chunk-QLEMKVFT.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-HV2HGFFX.js";
import "./chunk-XMFTFGSJ.js";
import "./chunk-OVRZTAVD.js";
import "./chunk-OBIYWGWG.js";
import "./chunk-QMKF52RY.js";
import "./chunk-UJAEEDTL.js";
import "./chunk-NKGYG3ZJ.js";
import "./chunk-QRMLNMSI.js";
import "./chunk-R5SOC4IN.js";
import "./chunk-LSH5QYG4.js";
import "./chunk-LNALZBXP.js";
import "./chunk-MAHNQXNI.js";
import "./chunk-4GUWBLPC.js";
import "./chunk-ZF47YLLW.js";
import "./chunk-6KBSZM6A.js";
import "./chunk-YL5M3JVV.js";
import "./chunk-IU2VY3EB.js";
import "./chunk-OBFIS6LK.js";
import "./chunk-VQFDNFNI.js";
import "./chunk-ZZEIQAMR.js";
import "./chunk-2BQWMXYL.js";
import "./chunk-SLHPNGWP.js";
import "./chunk-6EWAPITK.js";
import {
  TranslatePipe
} from "./chunk-4C74AXN2.js";
import {
  SafePipe
} from "./chunk-5YOUSSU7.js";
import "./chunk-4X4ZISSE.js";
import {
  settingSignal
} from "./chunk-WNLQ5E42.js";
import "./chunk-GAMVBC5P.js";
import "./chunk-IAQERFY4.js";
import "./chunk-KZRD5JN7.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JVDB3H4W.js";
import "./chunk-CPSLMZ5T.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-CJAQVJ62.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UL33YUHR.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/components/embedded-url.component.ts
var _c0 = () => ["/"];
function EmbeddedUrlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 2);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const item_r1 = ctx;
    \u0275\u0275property("title", item_r1.name)("src", \u0275\u0275pipeBind2(1, 2, item_r1.url, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
function EmbeddedUrlComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.WORKPLACE.EMBED_UNAVAILABLE_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "APP.WORKPLACE.EMBED_UNAVAILABLE_MSG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
  }
}
var EmbeddedUrlComponent = class _EmbeddedUrlComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._params = toSignal(this._route.paramMap, {
      initialValue: this._route.snapshot.paramMap
    });
    this._id = computed(
      () => this._params().get("id") || "",
      ...ngDevMode ? [{ debugName: "_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = settingSignal("menu_embeds", []);
    this.item = computed(
      () => this.items().find((item) => item.id === this._id()),
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function EmbeddedUrlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmbeddedUrlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmbeddedUrlComponent, selectors: [["embedded-url"]], decls: 6, vars: 1, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"], ["referrerpolicy", "no-referrer", 1, "bg-base-100", "h-full", "w-full", "border-0", 3, "title", "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "p-8"], [1, "bg-base-100", "max-w-md", "rounded-xl", "p-8", "text-center", "shadow"], [1, "mb-2", "text-xl", "font-medium"], [1, "opacity-60"], ["btn", "", "matRipple", "", 1, "mt-6", 3, "routerLink"]], template: function EmbeddedUrlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
        \u0275\u0275conditionalCreate(3, EmbeddedUrlComponent_Conditional_3_Template, 2, 5, "iframe", 2)(4, EmbeddedUrlComponent_Conditional_4_Template, 11, 11, "div", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "footer-menu");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_0_0 = ctx.item()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      TopbarComponent,
      FooterMenuComponent,
      SafePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=embedded-url.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmbeddedUrlComponent, [{
    type: Component,
    args: [{ selector: "embedded-url", template: `
        <topbar />
        <div class="bg-base-200 flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                @if (item(); as item) {
                    <iframe
                        class="bg-base-100 h-full w-full border-0"
                        referrerpolicy="no-referrer"
                        [title]="item.name"
                        [src]="item.url | safe: 'resource'"
                    ></iframe>
                } @else {
                    <div
                        class="flex h-full w-full items-center justify-center p-8"
                    >
                        <div
                            class="bg-base-100 max-w-md rounded-xl p-8 text-center shadow"
                        >
                            <h1 class="mb-2 text-xl font-medium">
                                {{
                                    'APP.WORKPLACE.EMBED_UNAVAILABLE_TITLE'
                                        | translate
                                }}
                            </h1>
                            <p class="opacity-60">
                                {{
                                    'APP.WORKPLACE.EMBED_UNAVAILABLE_MSG'
                                        | translate
                                }}
                            </p>
                            <a btn matRipple class="mt-6" [routerLink]="['/']">
                                {{
                                    'APP.WORKPLACE.BOOKING_FINISHED' | translate
                                }}
                            </a>
                        </div>
                    </div>
                }
            </main>
        </div>
        <footer-menu />
    `, imports: [
      RouterModule,
      SafePipe,
      TranslatePipe,
      MatRippleModule,
      TopbarComponent,
      FooterMenuComponent
    ], styles: ["/* angular:styles/component:css;8bc1d5dc85507ee453280f7965cb36c6094f5095888bc871ca505505d79ce6b5;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/embedded-url.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=embedded-url.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmbeddedUrlComponent, { className: "EmbeddedUrlComponent", filePath: "apps/workplace/src/app/components/embedded-url.component.ts", lineNumber: 76 });
})();
export {
  EmbeddedUrlComponent
};
//# debugId=b564de95-fe86-56eb-92b8-9411a80261fb
//# sourceMappingURL=embedded-url.component-TA2YJGKR.js.map
