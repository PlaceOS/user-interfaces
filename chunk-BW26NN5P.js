import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EZ4LWYB3.js";
import {
  AsyncHandler,
  Component,
  EventEmitter,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  TranslatePipe,
  first,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L5KBQUZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/confirm-modal.component.ts
function ConfirmModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 5)(2, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.content(), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7);
    \u0275\u0275element(2, "mat-spinner", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_5_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r0.cancel_text()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.confirm_text()), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ])), {
    loading: (s) => ref.componentInstance.loading?.set(s),
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
      this._data.title || "COMMON.CONFIRM",
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Template, 3, 2, "main", 2)(4, ConfirmModalComponent_Conditional_4_Template, 5, 1, "main", 3);
        \u0275\u0275conditionalCreate(5, ConfirmModalComponent_Conditional_5_Template, 7, 6, "footer", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 3 : 4);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title() }}</h2>
        </header>
        @if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon()" class="text-5xl"></icon>
                <p content class="text-center" [innerHTML]="content()"></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading() }}</p>
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
      MatDialogModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 123 });
})();

export {
  openConfirmModal
};
//# sourceMappingURL=chunk-BW26NN5P.js.map
