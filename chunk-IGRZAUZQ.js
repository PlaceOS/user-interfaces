import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LHINQNJP.js";
import {
  TranslatePipe
} from "./chunk-3GHHB7C4.js";
import {
  SanitizePipe
} from "./chunk-73JW4EAQ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-MAKUHOJD.js";
import {
  CdkScrollable,
  Component,
  IconComponent,
  Input,
  MatDialogClose,
  MatDialogModule,
  MatRipple,
  MatRippleModule,
  Output,
  input,
  output,
  setClassMetadata,
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
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-56VJTSNA.js";

// libs/components/src/lib/fullscreen-modal-shell.component.ts
var _c0 = ["*"];
function FullscreenModalShellComponent_Conditional_5_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FullscreenModalShellComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_0_Conditional_0_Template, 3, 0, "button", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
function FullscreenModalShellComponent_Conditional_5_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r0.close());
  }
}
function FullscreenModalShellComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_1_Conditional_0_Template, 3, 1, "a", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
function FullscreenModalShellComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_0_Template, 1, 1)(1, FullscreenModalShellComponent_Conditional_5_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.close()?.length ? 0 : 1);
  }
}
function FullscreenModalShellComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275element(1, "div", 9);
  }
}
function FullscreenModalShellComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function FullscreenModalShellComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "kbd", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.confirm_hotkey());
  }
}
function FullscreenModalShellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function FullscreenModalShellComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirm.emit());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, FullscreenModalShellComponent_Conditional_9_Conditional_4_Template, 2, 1, "kbd", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("max-w-156", !ctx_r0.full_width());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.confirm_disabled());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirm_text() || \u0275\u0275pipeBind1(3, 5, "COMMON.SAVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.confirm_hotkey() ? 4 : -1);
  }
}
var FullscreenModalShellComponent = class _FullscreenModalShellComponent {
  constructor() {
    this.loading = input(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = input(
      "Fullscreen Modal",
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_text = input(
      "",
      ...ngDevMode ? [{ debugName: "confirm_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_hotkey = input(
      "",
      ...ngDevMode ? [{ debugName: "confirm_hotkey" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_disabled = input(
      false,
      ...ngDevMode ? [{ debugName: "confirm_disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = input(
      [],
      ...ngDevMode ? [{ debugName: "close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_confirm = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_confirm" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_close = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.full_width = input(
      false,
      ...ngDevMode ? [{ debugName: "full_width" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm = output();
    this.closed = output();
  }
  static {
    this.\u0275fac = function FullscreenModalShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenModalShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenModalShellComponent, selectors: [["fullscreen-modal-shell"], ["", "fs-modal-shell", ""]], inputs: { loading: [1, "loading"], heading: [1, "heading"], confirm_text: [1, "confirm_text"], confirm_hotkey: [1, "confirm_hotkey"], confirm_disabled: [1, "confirm_disabled"], close: [1, "close"], hide_confirm: [1, "hide_confirm"], hide_close: [1, "hide_close"], full_width: [1, "full_width"] }, outputs: { confirm: "confirm", closed: "closed" }, ngContentSelectors: _c0, decls: 10, vars: 14, consts: [["cdkScrollable", "", 1, "bg-base-200", "fixed", "inset-0", "flex", "flex-col", "items-center", "overflow-auto", "px-2"], [1, "border-base-300", "bg-base-100", "fixed", "top-0", "mx-auto", "h-screen", "max-w-full", "border-x"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "flex", "items-center", "text-xl", "font-medium", "capitalize", 3, "innerHTML"], [1, "z-0", "mx-auto", "h-1/2", "w-full", "flex-1", "space-y-8", "p-2"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4", "p-12"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2", 3, "max-w-156"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "h-24", "w-full"], [3, "diameter"], [1, "text-center", "opacity-50"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], [1, "border-base-300", "bg-base-100", "text-base-content", "rounded", "border", "px-2", "py-1", "text-xs", "leading-none", "shadow-sm"]], template: function FullscreenModalShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "header", 2);
        \u0275\u0275element(3, "h2", 3);
        \u0275\u0275pipe(4, "sanitize");
        \u0275\u0275conditionalCreate(5, FullscreenModalShellComponent_Conditional_5_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "main", 4);
        \u0275\u0275conditionalCreate(7, FullscreenModalShellComponent_Conditional_7_Template, 2, 0)(8, FullscreenModalShellComponent_Conditional_8_Template, 4, 2, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, FullscreenModalShellComponent_Conditional_9_Template, 5, 7, "footer", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("w-160", !ctx.full_width())("w-full", ctx.full_width());
        \u0275\u0275advance();
        \u0275\u0275classProp("max-w-156", !ctx.full_width());
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(4, 12, ctx.heading()), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_close() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("max-w-156", !ctx.full_width());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() && !ctx.hide_confirm() ? 9 : -1);
      }
    }, dependencies: [
      CdkScrollable,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  scroll-margin-top: 60px;\n}\n/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenModalShellComponent, [{
    type: Component,
    args: [{ selector: "fullscreen-modal-shell,[fs-modal-shell]", template: `
        <div
            cdkScrollable
            class="bg-base-200 fixed inset-0 flex flex-col items-center overflow-auto px-2"
        >
            <div
                class="border-base-300 bg-base-100 fixed top-0 mx-auto h-screen max-w-full border-x"
                [class.w-160]="!full_width()"
                [class.w-full]="full_width()"
            ></div>
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex h-14 w-full items-center justify-between rounded-sm border-none px-4 py-2"
                [class.max-w-156]="!full_width()"
            >
                <h2
                    class="flex items-center text-xl font-medium capitalize"
                    [innerHTML]="heading() | sanitize"
                ></h2>
                @if (!hide_close()) {
                    @if (!close()?.length) {
                        @if (!loading()) {
                            <button icon matRipple mat-dialog-close>
                                <icon>close</icon>
                            </button>
                        }
                    } @else {
                        @if (!loading()) {
                            <a icon matRipple [routerLink]="close()">
                                <icon>close</icon>
                            </a>
                        }
                    }
                }
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-full flex-1 space-y-8 p-2"
                [class.max-w-156]="!full_width()"
            >
                @if (!loading()) {
                    <ng-content></ng-content>
                    <div class="h-24 w-full"></div>
                } @else {
                    <div
                        class="flex h-1/2 w-full flex-1 flex-col items-center justify-center space-y-4 p-12"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p class="text-center opacity-50">{{ loading() }}</p>
                    </div>
                }
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                    [class.max-w-156]="!full_width()"
                >
                    <button
                        btn
                        matRipple
                        class="flex min-w-32 items-center justify-center gap-2"
                        [disabled]="confirm_disabled()"
                        (click)="confirm.emit()"
                    >
                        {{ confirm_text() || ('COMMON.SAVE' | translate) }}
                        @if (confirm_hotkey()) {
                            <kbd
                                class="border-base-300 bg-base-100 text-base-content rounded border px-2 py-1 text-xs leading-none shadow-sm"
                                >{{ confirm_hotkey() }}</kbd
                            >
                        }
                    </button>
                </footer>
            }
        </div>
    `, imports: [
      CdkScrollable,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      RouterModule,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;9cba738a8b61f6e8c0fc50691e933d058b687b91fec8fff6415921963f4014b6;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/fullscreen-modal-shell.component.ts */\nmain {\n  scroll-margin-top: 60px;\n}\n/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */\n"] }]
  }], null, { loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false }] }], confirm_text: [{ type: Input, args: [{ isSignal: true, alias: "confirm_text", required: false }] }], confirm_hotkey: [{ type: Input, args: [{ isSignal: true, alias: "confirm_hotkey", required: false }] }], confirm_disabled: [{ type: Input, args: [{ isSignal: true, alias: "confirm_disabled", required: false }] }], close: [{ type: Input, args: [{ isSignal: true, alias: "close", required: false }] }], hide_confirm: [{ type: Input, args: [{ isSignal: true, alias: "hide_confirm", required: false }] }], hide_close: [{ type: Input, args: [{ isSignal: true, alias: "hide_close", required: false }] }], full_width: [{ type: Input, args: [{ isSignal: true, alias: "full_width", required: false }] }], confirm: [{ type: Output, args: ["confirm"] }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenModalShellComponent, { className: "FullscreenModalShellComponent", filePath: "libs/components/src/lib/fullscreen-modal-shell.component.ts", lineNumber: 105 });
})();

export {
  FullscreenModalShellComponent
};
//# debugId=9aad5e0d-d1b1-55a2-a63c-f551bd68ad03
//# sourceMappingURL=chunk-IGRZAUZQ.js.map
