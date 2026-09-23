import {
  ControlStateService,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatSlider,
  MatSliderModule,
  MatSliderThumb,
  marked
} from "./chunk-YCADC7ZD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-X3H4IVJT.js";
import {
  TranslatePipe
} from "./chunk-Y62MIWWI.js";
import {
  SanitizePipe
} from "./chunk-ZOPWYN6C.js";
import {
  AsyncHandler,
  CdkScrollable,
  Component,
  DOCUMENT,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Injectable,
  Input,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  RouterLink,
  RouterModule,
  SafePipe,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ALRRCMHP.js";

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
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_0_Template, 1, 1)(1, FullscreenModalShellComponent_Conditional_5_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!((_a = ctx_r0.close()) == null ? void 0 : _a.length) ? 0 : 1);
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
var _FullscreenModalShellComponent = class _FullscreenModalShellComponent {
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
};
_FullscreenModalShellComponent.\u0275fac = function FullscreenModalShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FullscreenModalShellComponent)();
};
_FullscreenModalShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenModalShellComponent, selectors: [["fullscreen-modal-shell"], ["", "fs-modal-shell", ""]], inputs: { loading: [1, "loading"], heading: [1, "heading"], confirm_text: [1, "confirm_text"], confirm_hotkey: [1, "confirm_hotkey"], confirm_disabled: [1, "confirm_disabled"], close: [1, "close"], hide_confirm: [1, "hide_confirm"], hide_close: [1, "hide_close"], full_width: [1, "full_width"] }, outputs: { confirm: "confirm", closed: "closed" }, ngContentSelectors: _c0, decls: 10, vars: 14, consts: [["cdkScrollable", "", 1, "bg-base-200", "fixed", "inset-0", "flex", "flex-col", "items-center", "overflow-auto", "px-2"], [1, "border-base-300", "bg-base-100", "fixed", "top-0", "mx-auto", "h-screen", "max-w-full", "border-x"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "flex", "items-center", "text-xl", "font-medium", "capitalize", 3, "innerHTML"], [1, "z-0", "mx-auto", "h-1/2", "w-full", "flex-1", "space-y-8", "p-2"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4", "p-12"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2", 3, "max-w-156"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "h-24", "w-full"], [3, "diameter"], [1, "text-center", "opacity-50"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], [1, "border-base-300", "bg-base-100", "text-base-content", "rounded", "border", "px-2", "py-1", "text-xs", "leading-none", "shadow-sm"]], template: function FullscreenModalShellComponent_Template(rf, ctx) {
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
var FullscreenModalShellComponent = _FullscreenModalShellComponent;
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

// libs/components/src/lib/changelog-modal.component.ts
function ChangelogModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(1, 1, ctx_r0.changelog(), "html"), \u0275\u0275sanitizeHtml);
  }
}
function ChangelogModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4, "No changelog");
    \u0275\u0275elementEnd()();
  }
}
var _ChangelogModalComponent = class _ChangelogModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changelog = computed(
      () => marked(this._data.changelog || "", { async: false }),
      ...ngDevMode ? [{ debugName: "changelog" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
};
_ChangelogModalComponent.\u0275fac = function ChangelogModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangelogModalComponent)();
};
_ChangelogModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangelogModalComponent, selectors: [["changelog-modal"]], decls: 3, vars: 3, consts: [[3, "heading", "hide_confirm"], [1, "markdown", 3, "innerHTML"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "text-3xl"], [1, "text"]], template: function ChangelogModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275conditionalCreate(1, ChangelogModalComponent_Conditional_1_Template, 2, 4, "div", 1)(2, ChangelogModalComponent_Conditional_2_Template, 5, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", "Changelog")("hide_confirm", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.changelog() ? 1 : 2);
  }
}, dependencies: [FullscreenModalShellComponent, IconComponent, SafePipe], encapsulation: 2 });
var ChangelogModalComponent = _ChangelogModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangelogModalComponent, [{
    type: Component,
    args: [{ selector: "changelog-modal", template: `
        <fullscreen-modal-shell [heading]="'Changelog'" [hide_confirm]="true">
            @if (changelog()) {
                <div
                    class="markdown"
                    [innerHTML]="changelog() | safe: 'html'"
                ></div>
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2"
                >
                    <icon class="text-3xl">close</icon>
                    <div class="text">No changelog</div>
                </div>
            }
        </fullscreen-modal-shell>
    `, imports: [FullscreenModalShellComponent, SafePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangelogModalComponent, { className: "ChangelogModalComponent", filePath: "libs/components/src/lib/changelog-modal.component.ts", lineNumber: 35 });
})();

// libs/components/src/lib/changelog.service.ts
var _ChangelogService = class _ChangelogService {
  constructor() {
    this._document = inject(DOCUMENT);
    this._dialog = inject(MatDialog);
    this._changelog = signal(
      null,
      ...ngDevMode ? [{ debugName: "_changelog" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available = computed(
      () => this._changelog() !== null,
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    void this._load();
  }
  view() {
    const changelog = this._changelog();
    if (changelog === null)
      return;
    this._dialog.open(ChangelogModalComponent, { data: { changelog } });
  }
  async _load() {
    try {
      const url = new URL("CHANGELOG.md", this._document.baseURI);
      const response = await fetch(url);
      if (!response.ok)
        return;
      this._changelog.set(await response.text());
    } catch {
    }
  }
};
_ChangelogService.\u0275fac = function ChangelogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangelogService)();
};
_ChangelogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChangelogService, factory: _ChangelogService.\u0275fac, providedIn: "root" });
var ChangelogService = _ChangelogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangelogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// apps/control/src/app/ui/output-display.component.ts
function OutputDisplayComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.OUTPUT_SWITCH"), " ");
  }
}
function OutputDisplayComponent_Conditional_0_Template(rf, ctx) {
  var _a, _b, _c, _d, _e;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function OutputDisplayComponent_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchSource());
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275conditionalCreate(9, OutputDisplayComponent_Conditional_0_Conditional_9_Template, 3, 3, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function OutputDisplayComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMute(!ctx_r1.item().mute));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-slider", 9)(15, "input", 10);
    \u0275\u0275listener("ngModelChange", function OutputDisplayComponent_Conditional_0_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVolume($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", !ctx_r1.input())("bg-base-200", !ctx_r1.input());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (_a = ctx_r1.item()) == null ? void 0 : _a.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((_b = ctx_r1.input()) == null ? void 0 : _b.icon) || ctx_r1.icons[(_c = ctx_r1.input()) == null ? void 0 : _c.type] || "add_to_queue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((_d = ctx_r1.input()) == null ? void 0 : _d.name) || "Click to select input source", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_e = ctx_r1.input()) == null ? void 0 : _e.name) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.item().mute ? "volume_off" : ctx_r1.item().volume > 0 ? "volume_up" : "volume_mute");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !ctx_r1.item().mute ? ctx_r1.item().volume : 0);
    \u0275\u0275control();
  }
}
var ICON_MAP = {
  Display: "deskotp_windows",
  PC: "desktop_windows",
  Laptop: "laptop_chromebook",
  Camera: "videocam",
  TV: "tv"
};
var _OutputDisplayComponent = class _OutputDisplayComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ControlStateService);
    this._available_inputs = this._state.available_inputs;
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input = computed(
      () => {
        var _a;
        const input_id = ((_a = this.item()) == null ? void 0 : _a.source) || "";
        return this._available_inputs().find((_) => _.id === input_id || _.ref === input_id);
      },
      ...ngDevMode ? [{ debugName: "input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icons = ICON_MAP;
    this.switchSource = () => this._state.switchSource(this.item().id);
    this.setVolume = (v) => this.timeout("volume", () => this._state.setVolume(v, this.item().id));
    this.setMute = (s) => this._state.setMute(s, this.item().id);
  }
  get id() {
    return this._state.id;
  }
};
_OutputDisplayComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275OutputDisplayComponent_BaseFactory;
  return function OutputDisplayComponent_Factory(__ngFactoryType__) {
    return (\u0275OutputDisplayComponent_BaseFactory || (\u0275OutputDisplayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_OutputDisplayComponent)))(__ngFactoryType__ || _OutputDisplayComponent);
  };
})();
_OutputDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutputDisplayComponent, selectors: [["output-display"]], inputs: { item: [1, "item"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "bg-base-100", "m-2", "rounded-sm", "p-4", "text-black", "shadow-sm"], ["view", "", "matRipple", "", 1, "border-base-200", "relative", "mb-2", "flex", "h-48", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-sm", "border", 3, "click"], [1, "bg-secondary", "absolute", "top-1", "left-1", "rounded-sm", "px-2", "py-1", "text-white", "shadow-sm"], [1, "text-7xl"], [1, "font-medium"], [1, "text-xs"], [1, "opacity-50"], [1, "flex", "w-full", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex-1"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"]], template: function OutputDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OutputDisplayComponent_Conditional_0_Template, 16, 10, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.item() ? 0 : -1);
  }
}, dependencies: [
  MatSliderModule,
  MatSlider,
  MatSliderThumb,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe
], styles: ["\n[view][_ngcontent-%COMP%] {\n  width: 28vw;\n}\n/*# sourceMappingURL=output-display.component.css.map */"] });
var OutputDisplayComponent = _OutputDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutputDisplayComponent, [{
    type: Component,
    args: [{ selector: "output-display", template: `
        @if (item()) {
            <div class="bg-base-100 m-2 rounded-sm p-4 text-black shadow-sm">
                <div
                    view
                    matRipple
                    class="border-base-200 relative mb-2 flex h-48 flex-col items-center justify-center space-y-2 rounded-sm border"
                    [class.opacity-60]="!input()"
                    [class.bg-base-200]="!input()"
                    (click)="switchSource()"
                >
                    <div
                        class="bg-secondary absolute top-1 left-1 rounded-sm px-2 py-1 text-white shadow-sm"
                    >
                        {{ item()?.name }}
                    </div>
                    <icon class="text-7xl">{{
                        input()?.icon || icons[input()?.type] || 'add_to_queue'
                    }}</icon>
                    <p class="font-medium">
                        {{ input()?.name || 'Click to select input source' }}
                    </p>
                    <p class="text-xs">
                        @if (input()?.name) {
                            <span class="opacity-50">
                                {{ 'APP.CONTROL.OUTPUT_SWITCH' | translate }}
                            </span>
                        }
                    </p>
                </div>
                <div class="flex w-full items-center space-x-2">
                    <button icon matRipple (click)="setMute(!item().mute)">
                        <icon>{{
                            item().mute
                                ? 'volume_off'
                                : item().volume > 0
                                  ? 'volume_up'
                                  : 'volume_mute'
                        }}</icon>
                    </button>
                    <mat-slider class="flex-1"
                        ><input
                            matSliderThumb
                            [ngModel]="!item().mute ? item().volume : 0"
                            (ngModelChange)="setVolume($event)"
                    /></mat-slider>
                </div>
            </div>
        }
    `, imports: [
      MatSliderModule,
      FormsModule,
      IconComponent,
      MatRippleModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;f55a4bf39067e90ed3019f5becc3dc90a5ce31ed785856557a0b9e4c225fc6f8;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/ui/output-display.component.ts */\n[view] {\n  width: 28vw;\n}\n/*# sourceMappingURL=output-display.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutputDisplayComponent, { className: "OutputDisplayComponent", filePath: "apps/control/src/app/ui/output-display.component.ts", lineNumber: 85 });
})();

export {
  ChangelogService,
  ICON_MAP,
  OutputDisplayComponent
};
//# debugId=29d191b1-003a-5395-91eb-441b309dab19
//# sourceMappingURL=chunk-IMWPMWK3.js.map
