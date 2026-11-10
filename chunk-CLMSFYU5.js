import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-H3YU5OJJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-2APKA6IB.js";
import {
  TranslatePipe
} from "./chunk-XDLX3ZVO.js";
import {
  AsyncHandler
} from "./chunk-UXZGVRCR.js";
import {
  IconComponent
} from "./chunk-KUBCKOBU.js";
import {
  LocaleService,
  i18n
} from "./chunk-C3VLFLNG.js";
import {
  LiveAnnouncer,
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import {
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  ViewChild,
  afterNextRender,
  afterRenderEffect,
  computed,
  first,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-BKT2MDTY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/announce.directive.ts
var AnnounceDirective = class _AnnounceDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const announcer = inject(LiveAnnouncer);
    const locale = inject(LocaleService);
    const injector = inject(Injector);
    const destroy_ref = inject(DestroyRef);
    let last_text = "";
    const announceText = () => {
      const text = el.textContent?.trim() ?? "";
      if (!text || text === last_text)
        return;
      last_text = text;
      announcer.announce(text, "polite");
    };
    afterNextRender(async () => {
      await locale.loaded();
      if (destroy_ref.destroyed)
        return;
      afterNextRender(announceText, { injector });
      const observer = new MutationObserver(announceText);
      observer.observe(el, {
        characterData: true,
        childList: true,
        subtree: true
      });
      destroy_ref.onDestroy(() => observer.disconnect());
    });
  }
  static {
    this.\u0275fac = function AnnounceDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnnounceDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AnnounceDirective, selectors: [["", "announce", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnounceDirective, [{
    type: Directive,
    args: [{ selector: "[announce]" }]
  }], () => [], null);
})();

// libs/components/src/lib/confirm-modal.component.ts
var _c0 = ["heading"];
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "icon", 6)(2, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.safe_content(), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 8);
    \u0275\u0275element(2, "mat-spinner", 9);
    \u0275\u0275elementStart(3, "p", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function ConfirmModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx_r0.cancel_text()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r0.destructive());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, ctx_r0.confirm_text()), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
var CONFIRM_CONTENT_TAGS = /* @__PURE__ */ new Set([
  "B",
  "BR",
  "EM",
  "I",
  "LI",
  "OL",
  "P",
  "STRONG",
  "UL"
]);
function filterConfirmContent(html) {
  const body = new DOMParser().parseFromString(html, "text/html").body;
  for (const el of Array.from(body.querySelectorAll("*"))) {
    if (!CONFIRM_CONTENT_TAGS.has(el.tagName)) {
      el.replaceWith(...Array.from(el.childNodes));
      continue;
    }
    for (const { name } of Array.from(el.attributes)) {
      el.removeAttribute(name);
    }
  }
  return body.innerHTML;
}
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ])), {
    loading: (s) => {
      ref.componentInstance.loading?.set(s);
      ref.disableClose = !!s;
    },
    close: () => ref.close()
  });
}
var ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = new EventEmitter();
    this.title = signal(
      this._data.title || i18n("COMMON.CONFIRM"),
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.content = signal(
      this._data.content || "Are you sure?",
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.safe_content = computed(
      () => filterConfirmContent(this.content()),
      ...ngDevMode ? [{ debugName: "safe_content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_text = signal(
      this._data.confirm_text || "COMMON.ACCEPT",
      ...ngDevMode ? [{ debugName: "confirm_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancel_text = signal(
      this._data.cancel_text || "COMMON.CANCEL",
      ...ngDevMode ? [{ debugName: "cancel_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.destructive = signal(
      !!this._data.destructive,
      ...ngDevMode ? [{ debugName: "destructive" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = signal(
      this._data.icon || {
        class: "material-symbols-rounded",
        content: "done"
      },
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disableClose = () => this._dialog_ref.disableClose = true;
    this.enableClose = () => this._dialog_ref.disableClose = false;
    this._heading = viewChild.required(
      "heading",
      ...ngDevMode ? [{ debugName: "_heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._focus_on_load = afterRenderEffect(() => {
      if (this.loading())
        this._heading().nativeElement.focus();
    });
  }
  ngOnInit() {
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], viewQuery: function ConfirmModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._heading, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["heading", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", "tabindex", "-1", 1, "px-2", "text-xl", "font-medium", "focus:outline-none"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", "[&_ul]:my-2", "[&_ul]:text-left", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32", "aria-hidden", "true"], ["announce", ""], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2, 0);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_4_Template, 3, 2, "main", 3)(5, ConfirmModalComponent_Conditional_5_Template, 5, 1, "main", 4);
        \u0275\u0275conditionalCreate(6, ConfirmModalComponent_Conditional_6_Template, 7, 8, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      AnnounceDirective,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
        >
            <h2
                #heading
                mat-dialog-title
                tabindex="-1"
                class="px-2 text-xl font-medium focus:outline-none"
            >
                {{ title() }}
            </h2>
        </header>
        @if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon()" class="text-5xl"></icon>
                <p
                    content
                    class="text-center [&_ul]:my-2 [&_ul]:text-left"
                    [innerHTML]="safe_content()"
                ></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text() | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    [class.error]="destructive()"
                    (click)="onConfirm()"
                >
                    {{ confirm_text() | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      AnnounceDirective
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/confirm-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */\n"] }]
  }], () => [], { _heading: [{ type: ViewChild, args: ["heading", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 211 });
})();

export {
  AnnounceDirective,
  openConfirmModal,
  ConfirmModalComponent
};
//# debugId=a5a10508-cd61-54de-8f91-efa4a5603f8c
//# sourceMappingURL=chunk-CLMSFYU5.js.map
