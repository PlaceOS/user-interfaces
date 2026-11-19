import {
  toSignal
} from "./chunk-BV5B5RKJ.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-O45EXSVT.js";
import "./chunk-ZGCMYIC2.js";
import "./chunk-2WMAOTWC.js";
import "./chunk-4UF6FPSO.js";
import "./chunk-JAOFWCGF.js";
import "./chunk-ZS6XXP47.js";
import "./chunk-C5V7VCTL.js";
import "./chunk-RCRU27L7.js";
import "./chunk-GNDYJYPM.js";
import "./chunk-LSJ72RGY.js";
import "./chunk-N7M2EPEC.js";
import "./chunk-2TZURGYC.js";
import "./chunk-JO56BYQ2.js";
import "./chunk-WRVRIU74.js";
import "./chunk-XMHRP67K.js";
import "./chunk-EMYTXYHA.js";
import "./chunk-IU2VY3EB.js";
import "./chunk-Z67JN255.js";
import "./chunk-Y2N5AL7S.js";
import "./chunk-JMYRG4D6.js";
import "./chunk-E7BEQ3A3.js";
import "./chunk-CRJM3UTT.js";
import {
  TranslatePipe
} from "./chunk-DWBIKYJO.js";
import {
  SafePipe
} from "./chunk-UVVPYG43.js";
import "./chunk-XE3SORXG.js";
import {
  settingSignal
} from "./chunk-SWM3L3HS.js";
import "./chunk-SEBGBNAY.js";
import "./chunk-HJE2QSCA.js";
import "./chunk-OJ5RESTA.js";
import "./chunk-3KHJRBXM.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AINIX4LN.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-GHY5Z5DH.js";
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
} from "./chunk-D5QHX5EO.js";
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
//# debugId=332babad-52bc-596d-95a4-e51afc892378
//# sourceMappingURL=embedded-url.component-QKLOO63N.js.map
