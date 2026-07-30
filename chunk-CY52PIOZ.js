import {
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  SafePipe
} from "./chunk-R6V3DERO.js";
import {
  Component,
  MatRipple,
  MatRippleModule,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵtext
} from "./chunk-CUTJ2QPZ.js";

// apps/workplace/src/app/components/fullscreen-embed.component.ts
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenEmbedComponent, selectors: [["fullscreen-embed"]], decls: 6, vars: 4, consts: [[1, "relative", "h-screen", "w-screen", "bg-base-200"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-2", "top-2", "rounded", "border", "border-base-300", "bg-base-100"], [1, "h-full", "w-full", 3, "src"]], template: function FullscreenEmbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "icon");
        \u0275\u0275text(3, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "iframe", 2);
        \u0275\u0275pipe(5, "safe");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("src", \u0275\u0275pipeBind2(5, 1, ctx.embed_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatDialogModule, MatDialogClose, SafePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenEmbedComponent, [{
    type: Component,
    args: [{ selector: "fullscreen-embed", template: `
        <div class="relative h-screen w-screen bg-base-200">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 rounded border border-base-300 bg-base-100"
            >
                <icon>close</icon>
            </button>
            <iframe
                class="h-full w-full"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
    `, imports: [IconComponent, MatRippleModule, SafePipe, MatDialogModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenEmbedComponent, { className: "FullscreenEmbedComponent", filePath: "apps/workplace/src/app/components/fullscreen-embed.component.ts", lineNumber: 27 });
})();

export {
  FullscreenEmbedComponent
};
//# sourceMappingURL=chunk-CY52PIOZ.js.map
