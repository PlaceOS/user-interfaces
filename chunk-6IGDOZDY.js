import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-CRJM3UTT.js";
import {
  TranslatePipe
} from "./chunk-DWBIKYJO.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-UVVPYG43.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AINIX4LN.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵtext
} from "./chunk-D5QHX5EO.js";

// libs/components/src/lib/fullscreen-embed.component.ts
var FullscreenEmbedComponent = class _FullscreenEmbedComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.embed_url = signal(
      this._data,
      ...ngDevMode ? [{ debugName: "embed_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function FullscreenEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenEmbedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenEmbedComponent, selectors: [["fullscreen-embed"]], decls: 8, vars: 10, consts: [[1, "bg-base-200", "relative", "h-screen", "w-screen"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "rounded", "border"], [1, "h-full", "w-full", 3, "title", "src"]], template: function FullscreenEmbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "iframe", 2);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "safe");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "COMMON.CLOSE"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(6, 5, "APP.WORKPLACE.EMBED_TITLE"))("src", \u0275\u0275pipeBind2(7, 7, ctx.embed_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      SafePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenEmbedComponent, [{
    type: Component,
    args: [{ selector: "fullscreen-embed", template: `
        <div class="bg-base-200 relative h-screen w-screen">
            <button
                icon
                matRipple
                mat-dialog-close
                class="border-base-300 bg-base-100 absolute top-2 right-2 rounded border"
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
            <iframe
                class="h-full w-full"
                [title]="'APP.WORKPLACE.EMBED_TITLE' | translate"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
    `, imports: [
      IconComponent,
      MatRippleModule,
      SafePipe,
      TranslatePipe,
      MatDialogModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenEmbedComponent, { className: "FullscreenEmbedComponent", filePath: "libs/components/src/lib/fullscreen-embed.component.ts", lineNumber: 37 });
})();

export {
  FullscreenEmbedComponent
};
//# debugId=509abfa1-0dbd-5e58-9204-fe46ebbddbd1
//# sourceMappingURL=chunk-6IGDOZDY.js.map
