import {
  TemplateApprovalPreviewComponent,
  loadTemplateApprovalVersions
} from "./chunk-6V6UTWFZ.js";
import "./chunk-DBWLNOKZ.js";
import "./chunk-MOQN4WV5.js";
import "./chunk-SLLMOXD7.js";
import "./chunk-IAA4H3MD.js";
import {
  SignageTemplateService
} from "./chunk-FGDWCGX6.js";
import "./chunk-DOHI3I5O.js";
import "./chunk-EW627VC3.js";
import {
  SignageContextService
} from "./chunk-NVC2MTBW.js";
import "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import "./chunk-4BHMYMLA.js";
import "./chunk-HGUL5NVP.js";
import "./chunk-E72MB55H.js";
import "./chunk-DMUGOB3K.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  i18n,
  kl,
  notifyError,
  notifySuccess
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  inject,
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
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

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
function TemplateApproveModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_VERSIONS_LOAD_ERROR"), " ");
  }
}
function TemplateApproveModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "template-approval-preview", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("versions", ctx_r1.template_versions());
  }
}
function TemplateApproveModalComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function TemplateApproveModalComponent_Conditional_6_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.undoChanges());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.has_previous_version());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.UNDO_CHANGES"), " ");
  }
}
function TemplateApproveModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275conditionalCreate(1, TemplateApproveModalComponent_Conditional_6_Conditional_1_Template, 3, 3, "p", 5)(2, TemplateApproveModalComponent_Conditional_6_Conditional_2_Template, 1, 1, "template-approval-preview", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "footer", 7);
    \u0275\u0275conditionalCreate(4, TemplateApproveModalComponent_Conditional_6_Conditional_4_Template, 3, 4, "button", 8);
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function TemplateApproveModalComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.versions_error() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.can_update() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.versions_error());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "COMMON.APPROVE"), " ");
  }
}
function TemplateApproveModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main")(1, "div", 11);
    \u0275\u0275element(2, "mat-spinner", 12);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
var TemplateApproveModalComponent = class _TemplateApproveModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._context = inject(SignageContextService);
    this._template_service = inject(SignageTemplateService);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._context.can_update_templates;
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
    this.template_versions = () => this._template_versions.hasValue() ? this._template_versions.value() : [];
    this.versions_error = this._template_versions.error;
    this.has_previous_version = () => this.template_versions().length > 1;
  }
  /** Discard the pending version. The service asks the user to confirm. */
  async undoChanges() {
    const previous_version = this.template_versions()[1];
    if (!previous_version)
      return;
    const undone = await this._template_service.undoTemplateChanges(this._data.template.id, previous_version);
    if (undone)
      this._dialog_ref.close(true);
  }
  /** Approve the pending version. Blocked when the versions failed to load. */
  async approve() {
    if (this.versions_error())
      return;
    this.loading.set(i18n("SIGNAGE_MANAGER.APPROVING_TEMPLATE"));
    this._dialog_ref.disableClose = true;
    try {
      const template = await kl(this._data.template.id);
      this._template_service.updateCachedTemplate(template);
      notifySuccess(i18n("SIGNAGE_MANAGER.TEMPLATE_APPROVED"));
      this._dialog_ref.close(true);
      this._context.changed();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateApproveModalComponent, selectors: [["template-approve-modal"]], decls: 8, vars: 5, consts: [[1, "p-2"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[60vh]", "max-w-[80vw]", "min-w-xl", "gap-2", "overflow-auto", "py-2"], [1, "text-error", "p-8", "text-center"], [3, "versions"], [1, "bg-base-200", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-40", 3, "click", "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-32", "py-16"], ["diameter", "32"]], template: function TemplateApproveModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, TemplateApproveModalComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, TemplateApproveModalComponent_Conditional_6_Template, 8, 6)(7, TemplateApproveModalComponent_Conditional_7_Template, 5, 1, "main");
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
                <main
                    class="max-h-[60vh] max-w-[80vw] min-w-xl gap-2 overflow-auto py-2"
                >
                    @if (versions_error()) {
                        <p class="text-error p-8 text-center">
                            {{
                                'SIGNAGE_MANAGER.TEMPLATE_VERSIONS_LOAD_ERROR'
                                    | translate
                            }}
                        </p>
                    } @else {
                        <template-approval-preview
                            [versions]="template_versions()"
                        />
                    }
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
                        [disabled]="!!versions_error()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateApproveModalComponent, { className: "TemplateApproveModalComponent", filePath: "apps/signage-manager/src/app/shared/template-approve-modal.component.ts", lineNumber: 107 });
})();
export {
  TemplateApproveModalComponent
};
//# debugId=d0e50e6a-65ff-56b7-a10a-039a546560a6
//# sourceMappingURL=template-approve-modal.component-QLK7V57K.js.map
