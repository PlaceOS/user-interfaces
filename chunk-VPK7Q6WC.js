import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-CAVSBNKP.js";
import {
  ControlStateService,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  marked,
  queryEvents
} from "./chunk-EORLT5VQ.js";
import {
  TranslatePipe
} from "./chunk-LVMBC5KR.js";
import {
  SanitizePipe
} from "./chunk-RPLLUXAA.js";
import {
  AsyncHandler,
  CdkScrollable,
  Component,
  DOCUMENT,
  DatePipe,
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
  differenceInMinutes,
  endOfDay,
  getUnixTime,
  inject,
  input,
  log,
  output,
  resource,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ER7G7Q5F.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// apps/control/src/app/ui/connecting.component.ts
var _c02 = (a0) => ({ id: a0 });
function ControlConnectingComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ControlConnectingComponent_Conditional_5_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeRoom());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.CHANGE_ROOM"), " ");
  }
}
function ControlConnectingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "button", 5);
    \u0275\u0275listener("click", function ControlConnectingComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ControlConnectingComponent_Conditional_5_Conditional_7_Template, 3, 3, "button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.CONTROL.CONNECTING_SLOW"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONTROL.RETRY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_change_room ? 7 : -1);
  }
}
var SLOW_CONNECT_MS = 30 * 1e3;
var _ControlConnectingComponent = class _ControlConnectingComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ControlStateService);
    this.id = this._state.system_id;
    this.can_change_room = this._state.canChangeRoom();
    this.slow = signal(
      false,
      ...ngDevMode ? [{ debugName: "slow" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.retry = () => window.location.reload();
    this.changeRoom = () => this._state.changeRoom();
    this.timeout("slow", () => this.slow.set(true), SLOW_CONNECT_MS);
  }
};
_ControlConnectingComponent.\u0275fac = function ControlConnectingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlConnectingComponent)();
};
_ControlConnectingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlConnectingComponent, selectors: [["control-connecting"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 8, consts: [["name", "loader", 1, "bg-base-100", "text-base-content", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], [1, "my-4", "text-2xl"], [1, "mb-4", "text-base", "opacity-60"], [1, "flex", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["btn", "", "matRipple", "", "change-room", "", 1, "inverse", "w-40"], ["btn", "", "matRipple", "", "change-room", "", 1, "inverse", "w-40", 3, "click"]], template: function ControlConnectingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "mat-spinner", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ControlConnectingComponent_Conditional_5_Template, 8, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 64);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, "APP.CONTROL.CONNECTING", \u0275\u0275pureFunction1(6, _c02, ctx.id())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.slow() ? 5 : -1);
  }
}, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, MatRippleModule, MatRipple, TranslatePipe], styles: [`
[name=loader][_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000' fill-opacity='0.05' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
/*# sourceMappingURL=connecting.component.css.map */`] });
var ControlConnectingComponent = _ControlConnectingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlConnectingComponent, [{
    type: Component,
    args: [{ selector: "control-connecting", template: `
        <div
            name="loader"
            class="bg-base-100 text-base-content absolute inset-0 flex flex-col items-center justify-center"
        >
            <mat-spinner class="mb-4" [diameter]="64"></mat-spinner>
            <div class="my-4 text-2xl">
                {{ 'APP.CONTROL.CONNECTING' | translate: { id: id() } }}
            </div>
            @if (slow()) {
                <p class="mb-4 text-base opacity-60">
                    {{ 'APP.CONTROL.CONNECTING_SLOW' | translate }}
                </p>
                <div class="flex space-x-2">
                    <button btn matRipple class="w-40" (click)="retry()">
                        {{ 'APP.CONTROL.RETRY' | translate }}
                    </button>
                    @if (can_change_room) {
                        <button
                            btn
                            matRipple
                            change-room
                            class="inverse w-40"
                            (click)="changeRoom()"
                        >
                            {{ 'APP.CONTROL.CHANGE_ROOM' | translate }}
                        </button>
                    }
                </div>
            }
        </div>
    `, imports: [MatProgressSpinnerModule, MatRippleModule, TranslatePipe], styles: [`/* angular:styles/component:css;754df31f511b02eb97f1a68b04c4447bf4e083500e2275f0555f7f3724af6914;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/ui/connecting.component.ts */
[name=loader] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000' fill-opacity='0.05' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
/*# sourceMappingURL=connecting.component.css.map */
`] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlConnectingComponent, { className: "ControlConnectingComponent", filePath: "apps/control/src/app/ui/connecting.component.ts", lineNumber: 59 });
})();

// apps/control/src/app/ui/next-meeting.component.ts
var _c03 = (a0) => ({ count: a0 });
function NextMeetingComponent_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.CONTROL.MEETING_NOW"), " ");
  }
}
function NextMeetingComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.CONTROL.MEETING_STARTS_IN", \u0275\u0275pureFunction1(4, _c03, ctx_r0.minutes_until())), " ");
  }
}
function NextMeetingComponent_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.CONTROL.MEETING_NEXT"), " ");
  }
}
function NextMeetingComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("touchend", function NextMeetingComponent_Conditional_0_Conditional_11_Template_button_touchend_0_listener($event) {
      return $event.stopPropagation();
    })("click", function NextMeetingComponent_Conditional_0_Conditional_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const event_r3 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startAndJoin($event, event_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.MEETING_START_JOIN"), " ");
  }
}
function NextMeetingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, NextMeetingComponent_Conditional_0_Case_2_Template, 2, 3)(3, NextMeetingComponent_Conditional_0_Case_3_Template, 2, 6)(4, NextMeetingComponent_Conditional_0_Case_4_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, NextMeetingComponent_Conditional_0_Conditional_11_Template, 3, 3, "button", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const event_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.status()) === "now" ? 2 : tmp_2_0 === "soon" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 5, event_r3.date, "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(10, 8, event_r3.date_end, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.can_join() ? 11 : -1);
  }
}
var REFRESH_MS = 5 * 60 * 1e3;
var TICK_MS = 30 * 1e3;
var COUNTDOWN_MINUTES = 60;
var _NextMeetingComponent = class _NextMeetingComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ControlStateService);
    this._now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._state.system_id(),
      loader: async ({ params: id }) => {
        if (!id)
          return [];
        try {
          return await queryEvents({
            system_ids: id,
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(endOfDay(Date.now()))
          });
        } catch (error) {
          log("Control", "Error loading room meetings:", error, "warn");
          return [];
        }
      }
    }));
    this.meeting = computed(
      () => {
        const now = this._now();
        const events = this._events.hasValue() ? this._events.value() : [];
        return events.filter((_) => _.type !== "cancelled" && _.date_end > now).sort((a, b) => a.date - b.date)[0] ?? null;
      },
      ...ngDevMode ? [{ debugName: "meeting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minutes_until = computed(
      () => {
        var _a;
        return Math.max(1, differenceInMinutes((_a = this.meeting()) == null ? void 0 : _a.date, this._now()));
      },
      ...ngDevMode ? [{ debugName: "minutes_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = computed(
      () => {
        const event = this.meeting();
        if (!event)
          return "later";
        if (event.date <= this._now())
          return "now";
        return this.minutes_until() <= COUNTDOWN_MINUTES ? "soon" : "later";
      },
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_join = computed(
      () => {
        var _a, _b, _c;
        const url = (_a = this._state.system()) == null ? void 0 : _a.meeting_url;
        return !!url && !!((_c = (_b = this.meeting()) == null ? void 0 : _b.meeting_url) == null ? void 0 : _c.startsWith(url));
      },
      ...ngDevMode ? [{ debugName: "can_join" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval("tick", () => this._now.set(Date.now()), TICK_MS);
    this.interval("refresh", () => this._events.reload(), REFRESH_MS);
  }
  /** Power on the room and push the meeting to it */
  startAndJoin(e, event) {
    e.stopPropagation();
    this._state.powerOn();
    this._state.setEvent(event);
  }
};
_NextMeetingComponent.\u0275fac = function NextMeetingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NextMeetingComponent)();
};
_NextMeetingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextMeetingComponent, selectors: [["next-meeting"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "flex", "max-w-[32rem]", "flex-col", "items-center", "rounded-sm", "bg-black/30", "px-6", "py-4", "text-center"], [1, "text-sm", "uppercase", "opacity-80"], [1, "w-full", "truncate", "text-2xl"], [1, "text-sm", "opacity-80"], ["btn", "", "matRipple", "", 1, "mt-4"], ["btn", "", "matRipple", "", 1, "mt-4", 3, "touchend", "click"]], template: function NextMeetingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NextMeetingComponent_Conditional_0_Template, 12, 11, "div", 0);
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.meeting()) ? 0 : -1, tmp_0_0);
  }
}, dependencies: [MatRippleModule, MatRipple, DatePipe, TranslatePipe], encapsulation: 2 });
var NextMeetingComponent = _NextMeetingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NextMeetingComponent, [{
    type: Component,
    args: [{
      selector: "next-meeting",
      template: `
        @if (meeting(); as event) {
            <div
                class="flex max-w-[32rem] flex-col items-center rounded-sm bg-black/30 px-6 py-4 text-center"
            >
                <div class="text-sm uppercase opacity-80">
                    @switch (status()) {
                        @case ('now') {
                            {{ 'APP.CONTROL.MEETING_NOW' | translate }}
                        }
                        @case ('soon') {
                            {{
                                'APP.CONTROL.MEETING_STARTS_IN'
                                    | translate: { count: minutes_until() }
                            }}
                        }
                        @default {
                            {{ 'APP.CONTROL.MEETING_NEXT' | translate }}
                        }
                    }
                </div>
                <div class="w-full truncate text-2xl">{{ event.title }}</div>
                <div class="text-sm opacity-80">
                    {{ event.date | date: 'shortTime' }} \u2013
                    {{ event.date_end | date: 'shortTime' }}
                </div>
                @if (can_join()) {
                    <button
                        btn
                        matRipple
                        class="mt-4"
                        (touchend)="$event.stopPropagation()"
                        (click)="startAndJoin($event, event)"
                    >
                        {{ 'APP.CONTROL.MEETING_START_JOIN' | translate }}
                    </button>
                }
            </div>
        }
    `,
      imports: [DatePipe, MatRippleModule, TranslatePipe]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextMeetingComponent, { className: "NextMeetingComponent", filePath: "apps/control/src/app/ui/next-meeting.component.ts", lineNumber: 66 });
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
  OutputDisplayComponent,
  ControlConnectingComponent,
  NextMeetingComponent
};
//# debugId=78623acb-191d-57be-a8d2-4a500ce2a348
//# sourceMappingURL=chunk-VPK7Q6WC.js.map
