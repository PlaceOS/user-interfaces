import {
  errorText
} from "./chunk-EHX3V5FU.js";
import "./chunk-IKTCFBO2.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-I52JNSOJ.js";
import {
  SettingsToggleComponent
} from "./chunk-YEGWJU2K.js";
import "./chunk-TW5QCAQQ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GXWVSSG.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-54KE5JKV.js";
import "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import "./chunk-I75UA7CR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SettingsService
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  _c,
  i18n,
  mc,
  notifyError,
  notifySuccess
} from "./chunk-JYQPCPCB.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import "./chunk-N4RTV55R.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAVCSYNX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/building-manager/induction-settings-modal.component.ts
function InductionSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 6);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
  }
}
function InductionSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "settings-toggle", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.is_enabled, $event) || (ctx_r1.is_enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "mat-form-field", 8)(4, "textarea", 9);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_Conditional_5_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.induction_details, $event) || (ctx_r1.induction_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.is_enabled);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.INDUCTION_ENABLE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.induction_details);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "APP.CONCIERGE.INDUCTION_DETAILS"));
    \u0275\u0275control();
  }
}
function InductionSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function InductionSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 11);
    \u0275\u0275listener("click", function InductionSettingsModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
}
var InductionSettingsModalComponent = class _InductionSettingsModalComponent {
  constructor() {
    this._zone_id = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_details = signal(
      "",
      ...ngDevMode ? [{ debugName: "induction_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_enabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    if (!this._zone_id)
      return;
    this.loadSettings();
  }
  async loadSettings() {
    this.loading.set(i18n("APP.CONCIERGE.INDUCTION_LOADING"));
    const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_metadata_key") || this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
    try {
      const [bld_metadata, org_metadata, org_settings] = await Promise.all([
        _c(this._zone_id, visitor_kiosk_app),
        _c(this._org.organisation.id, visitor_kiosk_app),
        _c(this._org.organisation.id, "settings")
      ]);
      const settings = __spreadValues(__spreadValues(__spreadValues({}, org_settings.details), org_metadata.details), bld_metadata.details);
      this.settings.set(settings);
      this.induction_details.set(settings.induction_details || "");
      this.is_enabled.set(settings.induction_enabled ?? false);
    } catch (e) {
      notifyError(`Failed to load induction settings. ${errorText(e)}`);
      this._dialog_ref.close();
    } finally {
      this.loading.set("");
    }
  }
  async save() {
    this.loading.set(i18n("APP.CONCIERGE.INDUCTION_SAVING"));
    const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_metadata_key") || this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
    const concierge_app = this._settings.get("app.concierge_metadata_key") || this._settings.get("app.concierge_app") || "concierge_app";
    const induction = {
      induction_details: this.induction_details(),
      induction_enabled: this.is_enabled()
    };
    this._dialog_ref.disableClose = true;
    try {
      for (const key of [visitor_kiosk_app, concierge_app]) {
        const metadata = await _c(this._zone_id, key);
        await mc(this._zone_id, {
          name: metadata.name || key,
          description: metadata.description || "",
          details: __spreadValues(__spreadValues({}, metadata.details), induction)
        });
      }
      notifySuccess(i18n("APP.CONCIERGE.INDUCTION_SUCCESS"));
      this._dialog_ref.close();
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: errorText(e) }));
    } finally {
      this._dialog_ref.disableClose = false;
      this.loading.set("");
    }
  }
  static {
    this.\u0275fac = function InductionSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InductionSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InductionSettingsModalComponent, selectors: [["induction-settings-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 3, "aria-label"], [1, "flex", "flex-col", "space-y-2", "px-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-32"], [1, "border-base-200", "mt-2", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "text-2xl"], [3, "ngModelChange", "ngModel", "label"], ["appearance", "outline", 1, "h-[50vh]", "w-xl", "max-w-[80vw]"], ["matInput", "", 1, "h-[calc(50vh-2rem)]", "w-136", "max-w-[calc(80vw-2rem)]", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function InductionSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, InductionSettingsModalComponent_Conditional_4_Template, 4, 3, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, InductionSettingsModalComponent_Conditional_5_Template, 6, 8, "main", 3)(6, InductionSettingsModalComponent_Conditional_6_Template, 4, 2, "main", 4);
        \u0275\u0275conditionalCreate(7, InductionSettingsModalComponent_Conditional_7_Template, 3, 0, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.INDUCTION_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      SettingsToggleComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InductionSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "induction-settings-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.INDUCTION_HEADER' | translate }}
            </h3>
            @if (!loading()) {
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    [aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="flex flex-col space-y-2 px-4">
                <settings-toggle
                    [(ngModel)]="is_enabled"
                    [label]="'APP.CONCIERGE.INDUCTION_ENABLE' | translate"
                ></settings-toggle>
                <mat-form-field
                    appearance="outline"
                    class="h-[50vh] w-xl max-w-[80vw]"
                >
                    <textarea
                        matInput
                        [(ngModel)]="induction_details"
                        [placeholder]="
                            'APP.CONCIERGE.INDUCTION_DETAILS' | translate
                        "
                        class="h-[calc(50vh-2rem)] w-136 max-w-[calc(80vw-2rem)] resize-none"
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 mt-2 flex justify-end border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        }
    `, imports: [
      MatDialogModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InductionSettingsModalComponent, { className: "InductionSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/induction-settings-modal.component.ts", lineNumber: 98 });
})();
export {
  InductionSettingsModalComponent
};
//# debugId=f9ac0cc5-8b4f-5f89-90fa-1766d57b49b1
//# sourceMappingURL=induction-settings-modal.component-CYZV3FDJ.js.map
