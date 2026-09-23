import {
  TemplateApprovalPreviewComponent,
  loadTemplateApprovalVersions
} from "./chunk-MLUFJ4BC.js";
import "./chunk-CUBOPEKO.js";
import {
  SignageService
} from "./chunk-7U6WA3PD.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-XASXFKEM.js";
import "./chunk-HX6H4TOY.js";
import "./chunk-CTCSUEKQ.js";
import "./chunk-TB772EZW.js";
import "./chunk-BL3MYKDU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DEXSN3AW.js";
import {
  TranslatePipe
} from "./chunk-4DBHNJWE.js";
import "./chunk-LUPWO4EV.js";
import "./chunk-MJSE6BMT.js";
import {
  Component,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  fl,
  i18n,
  inject,
  ml,
  notifyError,
  notifySuccess,
  notifyWarn,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JL3PENQK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/template-approve-modal.component.ts
function TemplateApproveModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.CLOSE_APPROVE_TEMPLATE"));
  }
}
function TemplateApproveModalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TemplateApproveModalComponent_Conditional_6_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.undoChanges());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.has_previous_version());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.UNDO_CHANGES"), " ");
  }
}
function TemplateApproveModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "template-approval-preview", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "footer", 6);
    \u0275\u0275conditionalCreate(3, TemplateApproveModalComponent_Conditional_6_Conditional_3_Template, 3, 4, "button", 7);
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function TemplateApproveModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("versions", ctx_r2.template_versions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.can_update() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "COMMON.APPROVE"), " ");
  }
}
function TemplateApproveModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main")(1, "div", 10);
    \u0275\u0275element(2, "mat-spinner", 11);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.loading());
  }
}
var TemplateApproveModalComponent = class _TemplateApproveModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._service = inject(SignageService);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._service.can_update;
    this._template_versions = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_template_versions" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._data?.template?.id || "",
      loader: async ({ params }) => {
        if (!params)
          return [];
        this.loading.set(i18n("SIGNAGE_MANAGER.LOADING_VERSIONS"));
        try {
          return await loadTemplateApprovalVersions(params);
        } finally {
          this.loading.set("");
        }
      }
    }));
    this.template_versions = () => this._template_versions.value() || [];
    this.has_previous_version = () => this.template_versions().length > 1;
  }
  async undoChanges() {
    if (!this.can_update()) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES"));
      return;
    }
    const previous_version = this.template_versions()[1];
    if (!previous_version)
      return;
    this.loading.set(i18n("SIGNAGE_MANAGER.UNDOING_CHANGES"));
    this._dialog_ref.disableClose = true;
    try {
      await fl(this._data.template.id);
      this._service.updateCachedTemplate(previous_version);
      notifySuccess(i18n("SIGNAGE_MANAGER.TEMPLATE_REVERTED"));
      this._dialog_ref.close(true);
      this._service.changed();
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  async approve() {
    this.loading.set(i18n("SIGNAGE_MANAGER.APPROVING_TEMPLATE"));
    this._dialog_ref.disableClose = true;
    try {
      const template = await ml(this._data.template.id);
      this._service.updateCachedTemplate(template);
      notifySuccess(i18n("SIGNAGE_MANAGER.TEMPLATE_APPROVED"));
      this._dialog_ref.close(true);
      this._service.changed();
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.TEMPLATE_APPROVE_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  static {
    this.\u0275fac = function TemplateApproveModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateApproveModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateApproveModalComponent, selectors: [["template-approve-modal"]], decls: 8, vars: 5, consts: [[1, "p-2"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[60vh]", "min-w-xl", "max-w-[80vw]", "gap-2", "overflow-auto", "py-2"], [3, "versions"], [1, "bg-base-200", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-40", 3, "click"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-32", "py-16"], ["diameter", "32"]], template: function TemplateApproveModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, TemplateApproveModalComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, TemplateApproveModalComponent_Conditional_6_Template, 7, 5)(7, TemplateApproveModalComponent_Conditional_7_Template, 5, 1, "main");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.APPROVE_TEMPLATE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TemplateApprovalPreviewComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateApproveModalComponent, [{
    type: Component,
    args: [{
      selector: "template-approve-modal",
      template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.APPROVE_TEMPLATE' | translate }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        type="button"
                        matRipple
                        mat-dialog-close
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.CLOSE_APPROVE_TEMPLATE' | translate
                        "
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] min-w-xl max-w-[80vw]  gap-2 overflow-auto py-2">
                    <template-approval-preview
                        [versions]="template_versions()"
                    />
                </main>
                <footer
                    class="bg-base-200 flex items-center justify-end space-x-2 rounded-sm p-2"
                >
                    @if (can_update()) {
                        <button
                            btn
                            type="button"
                            matRipple
                            class="inverse bg-base-100 w-40"
                            [disabled]="!has_previous_version()"
                            (click)="undoChanges()"
                        >
                            {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                        </button>
                    }
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-40"
                        (click)="approve()"
                    >
                        {{ 'COMMON.APPROVE' | translate }}
                    </button>
                </footer>
            } @else {
                <main>
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-32 py-16"
                    >
                        <mat-spinner diameter="32" />
                        <p>{{ loading() }}</p>
                    </div>
                </main>
            }
        </div>
    `,
      imports: [
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        TemplateApprovalPreviewComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateApproveModalComponent, { className: "TemplateApproveModalComponent", filePath: "apps/signage-manager/src/app/shared/template-approve-modal.component.ts", lineNumber: 98 });
})();
export {
  TemplateApproveModalComponent
};
//# debugId=a205a0d1-439e-5a95-957a-4764833d2ea8
//# sourceMappingURL=template-approve-modal.component-DDFPZXQD.js.map
