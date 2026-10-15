import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-3NQABSQB.js";
import "./chunk-3UTDFKMK.js";
import "./chunk-FWEYY5IB.js";
import "./chunk-6EGRDYY6.js";
import "./chunk-UNCL2UFJ.js";
import "./chunk-HX3ZUXXO.js";
import "./chunk-JINKGTHK.js";
import "./chunk-SSJOM34G.js";
import "./chunk-35L5F7UF.js";
import "./chunk-KFFBVNR7.js";
import "./chunk-K4WCGEWG.js";
import "./chunk-TW6C4TGQ.js";
import "./chunk-IPZQBXKR.js";
import "./chunk-V2IVAMVG.js";
import "./chunk-6QIZJVIE.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-I5HNUYKH.js";
import "./chunk-ZDOINGPN.js";
import "./chunk-F4PUA27F.js";
import "./chunk-GZLYFHJQ.js";
import "./chunk-OO3DFB4Q.js";
import "./chunk-DXHT756L.js";
import "./chunk-U36ORJTU.js";
import "./chunk-QUE3YHNN.js";
import "./chunk-UJ7NDQOC.js";
import "./chunk-JGQT4AGY.js";
import {
  settingSignal
} from "./chunk-ODJYAEJR.js";
import {
  SafePipe
} from "./chunk-EO3LS4OX.js";
import "./chunk-TAEZKOMD.js";
import "./chunk-FMAOO4US.js";
import "./chunk-WCOHEZWX.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-H5JU7V2O.js";
import "./chunk-ZGRQUV4M.js";
import "./chunk-CJT2TRFV.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-XOZEGODY.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeResourceUrl,
  ɵɵtext
} from "./chunk-DMQTXRS5.js";
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
    \u0275\u0275text(3, " Embedded page unavailable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5, " This menu item is no longer configured. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 7);
    \u0275\u0275text(7, " Return home ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
  }
}
var EmbeddedUrlComponent = class _EmbeddedUrlComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._id = signal(
      this._route.snapshot.paramMap.get("id") || "",
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
        \u0275\u0275conditionalCreate(3, EmbeddedUrlComponent_Conditional_3_Template, 2, 5, "iframe", 2)(4, EmbeddedUrlComponent_Conditional_4_Template, 8, 2, "div", 3);
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
      SafePipe
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
                                Embedded page unavailable
                            </h1>
                            <p class="opacity-60">
                                This menu item is no longer configured.
                            </p>
                            <a btn matRipple class="mt-6" [routerLink]="['/']">
                                Return home
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
      MatRippleModule,
      TopbarComponent,
      FooterMenuComponent
    ], styles: ["/* angular:styles/component:css;8bc1d5dc85507ee453280f7965cb36c6094f5095888bc871ca505505d79ce6b5;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/embedded-url.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=embedded-url.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmbeddedUrlComponent, { className: "EmbeddedUrlComponent", filePath: "apps/workplace/src/app/components/embedded-url.component.ts", lineNumber: 66 });
})();
export {
  EmbeddedUrlComponent
};
//# debugId=8a4da8ff-33d6-5c97-8ca6-ce62a91a8662
//# sourceMappingURL=embedded-url.component-G36PRRD4.js.map
