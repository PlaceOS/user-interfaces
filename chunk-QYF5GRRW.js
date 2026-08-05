import {
  FullscreenEmbedComponent
} from "./chunk-SYVUIJXH.js";
import {
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  SafePipe,
  settingSignal
} from "./chunk-YKP5746A.js";
import {
  Component,
  MatRipple,
  MatRippleModule,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtext
} from "./chunk-2XZZDWFL.js";

// apps/workplace/src/app/components/sidebar-embed.component.ts
var SidebarEmbedComponent = class _SidebarEmbedComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.embed_url = signal(
      this._data.url,
      ...ngDevMode ? [{ debugName: "embed_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close_button_side = computed(
      () => this._data.side === "right" ? "left" : "right",
      ...ngDevMode ? [{ debugName: "close_button_side" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function SidebarEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarEmbedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarEmbedComponent, selectors: [["sidebar-embed"]], decls: 6, vars: 8, consts: [[1, "sidebar-embed__container", "h-full", "w-full"], [1, "block", "h-full", "w-full", "border-0", 3, "src"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "sidebar-embed__close", "border-base-300", "bg-base-100", "fixed", "top-2", "z-10", "rounded", "border"]], template: function SidebarEmbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "iframe", 1);
        \u0275\u0275pipe(2, "safe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("src", \u0275\u0275pipeBind2(2, 5, ctx.embed_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sidebar-embed__close--left", ctx.close_button_side() === "left")("sidebar-embed__close--right", ctx.close_button_side() === "right");
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatDialogModule, MatDialogClose, SafePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-embed__container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.sidebar-embed__close[_ngcontent-%COMP%] {\n  left: 0.5rem;\n}\n@media (min-width: 640px) {\n  .sidebar-embed__close--left[_ngcontent-%COMP%] {\n    right: calc(28rem + 0.5rem);\n    left: auto;\n  }\n  .sidebar-embed__close--right[_ngcontent-%COMP%] {\n    left: calc(28rem + 0.5rem);\n  }\n}\n/*# sourceMappingURL=sidebar-embed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarEmbedComponent, [{
    type: Component,
    args: [{ selector: "sidebar-embed", template: `
        <div
            class="sidebar-embed__container h-full w-full"
        >
            <iframe
                class="block h-full w-full border-0"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
        <button
            icon
            matRipple
            mat-dialog-close
            class="sidebar-embed__close border-base-300 bg-base-100 fixed top-2 z-10 rounded border"
            [class.sidebar-embed__close--left]="close_button_side() === 'left'"
            [class.sidebar-embed__close--right]="close_button_side() === 'right'"
        >
            <icon>close</icon>
        </button>
    `, imports: [IconComponent, MatRippleModule, SafePipe, MatDialogModule], styles: ["/* angular:styles/component:css;37b9130a9b63645ace8eb09cb492dd743191bfb18c789bf580642585606aeb48;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/sidebar-embed.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-embed__container {\n  overflow: hidden;\n}\n.sidebar-embed__close {\n  left: 0.5rem;\n}\n@media (min-width: 640px) {\n  .sidebar-embed__close--left {\n    right: calc(28rem + 0.5rem);\n    left: auto;\n  }\n  .sidebar-embed__close--right {\n    left: calc(28rem + 0.5rem);\n  }\n}\n/*# sourceMappingURL=sidebar-embed.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarEmbedComponent, { className: "SidebarEmbedComponent", filePath: "apps/workplace/src/app/components/sidebar-embed.component.ts", lineNumber: 63 });
})();

// apps/workplace/src/app/components/virtual-concierge-button.component.ts
function VirtualConciergeButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function VirtualConciergeButtonComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewVirtualConcierge());
    });
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementEnd();
  }
}
var VirtualConciergeButtonComponent = class _VirtualConciergeButtonComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._configured_url = settingSignal("virtual_concierge.url", "");
    this._legacy_url = settingSignal("virtual_concierge_url", "");
    this.virtual_concierge_url = computed(
      () => this._configured_url() || this._legacy_url(),
      ...ngDevMode ? [{ debugName: "virtual_concierge_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.virtual_concierge_display = settingSignal("virtual_concierge.display", "fullscreen");
    this.virtual_concierge_side = settingSignal("virtual_concierge.side", "left");
  }
  viewVirtualConcierge() {
    const url = this.virtual_concierge_url();
    const is_sidebar = this.virtual_concierge_display() === "sidebar";
    const side = this.virtual_concierge_side();
    const position = side === "right" ? { right: "0", top: "0" } : { left: "0", top: "0" };
    if (is_sidebar) {
      this._dialog.open(SidebarEmbedComponent, {
        data: { url, side },
        height: "100vh",
        width: "28rem",
        maxWidth: "100vw",
        position,
        panelClass: [
          "sidebar-embed-dialog",
          `sidebar-embed-dialog-${side}`
        ]
      });
      return;
    }
    this._dialog.open(FullscreenEmbedComponent, {
      data: url
    });
  }
  static {
    this.\u0275fac = function VirtualConciergeButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VirtualConciergeButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualConciergeButtonComponent, selectors: [["virtual-concierge-button"]], decls: 1, vars: 1, consts: [["icon", "", "matRipple", "", 1, "bg-base-100", "border-base-300", "fixed", "top-72", "right-2", "z-10", "h-14", "w-14", "border", "shadow-md"], ["icon", "", "matRipple", "", 1, "bg-base-100", "border-base-300", "fixed", "top-72", "right-2", "z-10", "h-14", "w-14", "border", "shadow-md", 3, "click"], ["src", "assets/icons/roybot.png", 1, "z-10", "h-12"]], template: function VirtualConciergeButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, VirtualConciergeButtonComponent_Conditional_0_Template, 2, 0, "button", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.virtual_concierge_url() ? 0 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualConciergeButtonComponent, [{
    type: Component,
    args: [{ selector: "virtual-concierge-button", template: `
        @if (virtual_concierge_url()) {
            <button
                icon
                matRipple
                class="bg-base-100 border-base-300 fixed top-72 right-2 z-10 h-14 w-14 border shadow-md"
                (click)="viewVirtualConcierge()"
            >
                <img class="z-10 h-12" src="assets/icons/roybot.png" />
            </button>
        }
    `, imports: [MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualConciergeButtonComponent, { className: "VirtualConciergeButtonComponent", filePath: "apps/workplace/src/app/components/virtual-concierge-button.component.ts", lineNumber: 25 });
})();

export {
  VirtualConciergeButtonComponent
};
//# sourceMappingURL=chunk-QYF5GRRW.js.map
