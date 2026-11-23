import {
  TemplateApprovalPreviewComponent,
  loadTemplateApprovalVersions
} from "./chunk-GV5QPXNV.js";
import "./chunk-DBWLNOKZ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-QDNMJPPA.js";
import "./chunk-KPG3MGQK.js";
import "./chunk-G4SGP2MJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-QK7GWYWU.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-4EWUBQI4.js";
import {
  SignageTemplateService
} from "./chunk-AJWWVR72.js";
import "./chunk-UQBWKX66.js";
import "./chunk-CJWV3V4U.js";
import {
  SignageContextService
} from "./chunk-KG6MFZ6B.js";
import "./chunk-SG57ZUUB.js";
import "./chunk-5G4V6J43.js";
import "./chunk-ZRY4BTNG.js";
import "./chunk-VKSF4PS5.js";
import "./chunk-GJUEDHEJ.js";
import {
  AnnounceDirective
} from "./chunk-AUV25AH4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MNAOEVWZ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-4MZUVPXU.js";
import "./chunk-NXFWFAR7.js";
import {
  TranslatePipe
} from "./chunk-HRFYIX4C.js";
import {
  MatOption
} from "./chunk-ENFA7HCT.js";
import "./chunk-DHFZNGBM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-WG7PJTZZ.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import "./chunk-LLQ7KT7L.js";
import {
  i18n
} from "./chunk-HLJZZGGR.js";
import "./chunk-TYLQ2T3C.js";
import "./chunk-7NEE74GJ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AVEVXYGF.js";
import "./chunk-7H4OKNBG.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Y6KAMZVN.js";
import "./chunk-QQY67O5D.js";

// apps/signage-manager/src/app/shared/template-request-approval-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TemplateRequestApprovalModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.CLOSE_REQUEST_APPROVAL"));
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name || item_r4.id, " ");
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 13)(11, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_1_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selected_approver_id, $event) || (ctx_r2.selected_approver_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "mat-option", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_1_For_16_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 13)(22, "textarea", 18);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_1_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.message, $event) || (ctx_r2.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "SIGNAGE_MANAGER.TEMPLATE_LABEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data.template.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "SIGNAGE_MANAGER.APPROVER"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selected_approver_id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "SIGNAGE_MANAGER.ANYONE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.data.approvers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "SIGNAGE_MANAGER.MESSAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 16, "SIGNAGE_MANAGER.APPROVERS_NOTE_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.message);
    \u0275\u0275control();
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_VERSIONS_LOAD_ERROR"), " ");
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "template-approval-preview", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("versions", ctx_r2.template_versions());
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_12_Conditional_0_Template, 3, 3, "p", 19)(1, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_12_Conditional_1_Template, 1, 1, "template-approval-preview", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.versions_error() ? 0 : 1);
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CANCEL"), " ");
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
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
function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function TemplateRequestApprovalModalComponent_Conditional_5_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.REQUEST_APPROVAL"), " ");
  }
}
function TemplateRequestApprovalModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_1_Template, 24, 18);
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275listener("click", function TemplateRequestApprovalModalComponent_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePreview());
    });
    \u0275\u0275elementStart(3, "div")(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "icon", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_12_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "footer", 8);
    \u0275\u0275conditionalCreate(14, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_14_Template, 3, 3, "button", 9);
    \u0275\u0275conditionalCreate(15, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_15_Template, 3, 4, "button", 10);
    \u0275\u0275conditionalCreate(16, TemplateRequestApprovalModalComponent_Conditional_5_Conditional_16_Template, 3, 3, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.show_preview() ? "50rem" : "28rem");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.show_preview() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", ctx_r2.show_preview());
    \u0275\u0275attribute("aria-pressed", ctx_r2.show_preview());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, "SIGNAGE_MANAGER.PREVIEW_CHANGES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "SIGNAGE_MANAGER.PREVIEW_CHANGES_HINT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.show_preview() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_preview() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.show_preview() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_preview() && ctx_r2.can_update() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.show_preview() ? 16 : -1);
  }
}
function TemplateRequestApprovalModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 23);
    \u0275\u0275element(2, "mat-spinner", 24);
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.loading());
  }
}
var TemplateRequestApprovalModalComponent = class _TemplateRequestApprovalModalComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._template_service = inject(SignageTemplateService);
    this.data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.selected_approver_id = signal(
      this.data.selected_approver_id || "",
      ...ngDevMode ? [{ debugName: "selected_approver_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = signal(
      "",
      ...ngDevMode ? [{ debugName: "message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_preview = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_preview" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_versions = signal(
      [],
      ...ngDevMode ? [{ debugName: "template_versions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.versions_error = signal(
      false,
      ...ngDevMode ? [{ debugName: "versions_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_previous_version = () => this.template_versions().length > 1;
    this.can_update = this._context.can_update_templates;
  }
  togglePreview() {
    const show_preview = !this.show_preview();
    this.show_preview.set(show_preview);
    if (show_preview)
      void this._loadTemplateVersions();
  }
  /** Load the versions once. Sets `versions_error` and returns none on failure. */
  async _loadTemplateVersions() {
    if (this.template_versions().length)
      return this.template_versions();
    const template_id = this.data?.template?.id || "";
    if (!template_id)
      return [];
    this.loading.set(i18n("SIGNAGE_MANAGER.LOADING_VERSIONS"));
    this.versions_error.set(false);
    try {
      const versions = await loadTemplateApprovalVersions(template_id);
      this.template_versions.set(versions);
      return versions;
    } catch {
      this.versions_error.set(true);
      return [];
    } finally {
      this.loading.set("");
    }
  }
  submit() {
    this._dialog_ref.close({
      approver_id: this.selected_approver_id(),
      message: this.message().trim()
    });
  }
  /** Discard the pending version. The service asks the user to confirm. */
  async undoChanges() {
    const [, previous_version] = await this._loadTemplateVersions();
    if (!previous_version)
      return;
    const undone = await this._template_service.undoTemplateChanges(this.data.template.id, previous_version);
    if (undone)
      this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function TemplateRequestApprovalModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateRequestApprovalModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateRequestApprovalModalComponent, selectors: [["template-request-approval-modal"]], decls: 7, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[70vh]", "max-w-[calc(100vw-2rem)]", "flex-col", "gap-4", "overflow-auto", "px-4", "pt-2", "pb-4", "max-md:w-auto", "max-md:flex-1"], ["type", "button", "matRipple", "", 1, "border-base-300", "bg-base-100", "flex", "w-full", "items-center", "justify-between", "rounded-sm", "border", "p-2", "text-left", 3, "click"], [1, "font-medium"], [1, "text-base-content/70", "text-sm"], [1, "px-2", "text-2xl"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "flex", "justify-end", "gap-2", "border-t", "p-4"], ["btn", "", "type", "button", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-36"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "w-40", 3, "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-44"], ["id", "template-approval-approver-label", "for", "template-approval-approver"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["id", "template-approval-approver", "aria-labelledby", "template-approval-approver-label", "name", "template-approval-approver", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "template-approval-message"], ["matInput", "", "id", "template-approval-message", "name", "template-approval-message", 1, "min-h-28", "resize-y", 3, "ngModelChange", "placeholder", "ngModel"], ["role", "alert", 1, "text-error", "p-8", "text-center"], [3, "versions"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "w-40", 3, "click", "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-44", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-32", "py-16"], ["diameter", "32", "aria-hidden", "true"], ["announce", ""]], template: function TemplateRequestApprovalModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, TemplateRequestApprovalModalComponent_Conditional_4_Template, 4, 3, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, TemplateRequestApprovalModalComponent_Conditional_5_Template, 17, 17)(6, TemplateRequestApprovalModalComponent_Conditional_6_Template, 5, 1, "div");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.REQUEST_APPROVAL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
      }
    }, dependencies: [
      AnnounceDirective,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      TemplateApprovalPreviewComponent,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=template-request-approval-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateRequestApprovalModalComponent, [{
    type: Component,
    args: [{ selector: "template-request-approval-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.REQUEST_APPROVAL' | translate }}
            </h2>
            @if (!loading()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CLOSE_REQUEST_APPROVAL' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <div
                class="flex max-h-[70vh] max-w-[calc(100vw-2rem)] flex-col gap-4 overflow-auto px-4 pt-2 pb-4 max-md:w-auto max-md:flex-1"
                [style.width]="show_preview() ? '50rem' : '28rem'"
            >
                @if (!show_preview()) {
                    <div>
                        <div class="text-base-content/70 text-sm">
                            {{ 'SIGNAGE_MANAGER.TEMPLATE_LABEL' | translate }}
                        </div>
                        <div class="font-medium">{{ data.template.name }}</div>
                    </div>
                    <div>
                        <label
                            id="template-approval-approver-label"
                            for="template-approval-approver"
                            >{{ 'SIGNAGE_MANAGER.APPROVER' | translate }}</label
                        >
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                id="template-approval-approver"
                                aria-labelledby="template-approval-approver-label"
                                name="template-approval-approver"
                                [(ngModel)]="selected_approver_id"
                            >
                                <mat-option value="">{{
                                    'SIGNAGE_MANAGER.ANYONE' | translate
                                }}</mat-option>
                                @for (item of data.approvers; track item.id) {
                                    <mat-option [value]="item.id">
                                        {{ item.name || item.id }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="template-approval-message">{{
                            'SIGNAGE_MANAGER.MESSAGE' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <textarea
                                matInput
                                id="template-approval-message"
                                name="template-approval-message"
                                class="min-h-28 resize-y"
                                [placeholder]="
                                    'SIGNAGE_MANAGER.APPROVERS_NOTE_PLACEHOLDER'
                                        | translate
                                "
                                [(ngModel)]="message"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <button
                    type="button"
                    matRipple
                    class="border-base-300 bg-base-100 flex w-full items-center justify-between rounded-sm border p-2 text-left"
                    [class.bg-base-200]="show_preview()"
                    [attr.aria-pressed]="show_preview()"
                    (click)="togglePreview()"
                >
                    <div>
                        <div class="font-medium">
                            {{ 'SIGNAGE_MANAGER.PREVIEW_CHANGES' | translate }}
                        </div>
                        <div class="text-base-content/70 text-sm">
                            {{
                                'SIGNAGE_MANAGER.PREVIEW_CHANGES_HINT'
                                    | translate
                            }}
                        </div>
                    </div>
                    <icon class="px-2 text-2xl">{{
                        show_preview() ? 'visibility_off' : 'visibility'
                    }}</icon>
                </button>
                @if (show_preview()) {
                    @if (versions_error()) {
                        <p class="text-error p-8 text-center" role="alert">
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
                }
            </div>
            <footer
                class="border-base-300 bg-base-100 sticky bottom-0 flex justify-end gap-2 border-t p-4"
            >
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-36"
                        mat-dialog-close
                    >
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                }
                @if (show_preview() && can_update()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-40"
                        [disabled]="!has_previous_version()"
                        (click)="undoChanges()"
                    >
                        {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                    </button>
                }
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-44"
                        (click)="submit()"
                    >
                        {{ 'SIGNAGE_MANAGER.REQUEST_APPROVAL' | translate }}
                    </button>
                }
            </footer>
        } @else {
            <div>
                <div
                    class="flex flex-col items-center justify-center space-y-4 px-32 py-16"
                >
                    <mat-spinner diameter="32" aria-hidden="true" />
                    <p announce>{{ loading() }}</p>
                </div>
            </div>
        }
    `, imports: [
      AnnounceDirective,
      FormsModule,
      MatRippleModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      IconComponent,
      TemplateApprovalPreviewComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/template-request-approval-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=template-request-approval-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateRequestApprovalModalComponent, { className: "TemplateRequestApprovalModalComponent", filePath: "apps/signage-manager/src/app/shared/template-request-approval-modal.component.ts", lineNumber: 226 });
})();
export {
  TemplateRequestApprovalModalComponent
};
//# debugId=5958166f-3b5a-5e38-b4b6-60cd7c36b907
//# sourceMappingURL=template-request-approval-modal.component-RTFGZNG3.js.map
