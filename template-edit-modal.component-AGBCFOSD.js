import {
  saveHotkey
} from "./chunk-PS2RXOUK.js";
import {
  SignageSharedWithComponent
} from "./chunk-LGMPWPZJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-TR7CE3ST.js";
import {
  SettingsToggleComponent
} from "./chunk-N7YVXSJW.js";
import "./chunk-R5ENJUXT.js";
import {
  MediaSelectModalComponent
} from "./chunk-GHZ254KO.js";
import "./chunk-DLXWMD7J.js";
import "./chunk-QVCXHNXH.js";
import "./chunk-XGU4SF5P.js";
import "./chunk-R3W72TRO.js";
import "./chunk-5QF3ODFV.js";
import "./chunk-A5VKNVMV.js";
import "./chunk-SA2MMIPT.js";
import "./chunk-5X25ZAJR.js";
import "./chunk-QGV4B7CT.js";
import "./chunk-DWKKUZHD.js";
import "./chunk-Q7TT7X76.js";
import "./chunk-7QX6Z6OR.js";
import {
  AuthenticatedImageDirective
} from "./chunk-DIWTGF6Z.js";
import "./chunk-SFBDWMNX.js";
import "./chunk-RU6AUOBE.js";
import "./chunk-I4AM7MBK.js";
import "./chunk-BGHDI6YC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-EFQKIWYD.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-HFJLXBV4.js";
import "./chunk-5INXWBHO.js";
import "./chunk-VYHIXRTW.js";
import "./chunk-BO7HXF2E.js";
import "./chunk-ZI47DHKY.js";
import "./chunk-SUHBQTO6.js";
import "./chunk-VXDPGMUS.js";
import "./chunk-CLMSFYU5.js";
import "./chunk-H3YU5OJJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-2APKA6IB.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-FYBK3ORD.js";
import {
  TranslatePipe
} from "./chunk-XDLX3ZVO.js";
import "./chunk-YVXYQM6B.js";
import "./chunk-BYJQITNS.js";
import "./chunk-4XDY7DFN.js";
import "./chunk-UXZGVRCR.js";
import {
  IconComponent
} from "./chunk-KUBCKOBU.js";
import {
  el,
  i18n,
  notifyError,
  notifySuccess,
  removeEmptyFields
} from "./chunk-C3VLFLNG.js";
import "./chunk-PWFU2DHD.js";
import "./chunk-YXB236ED.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import "./chunk-P3XWP5GT.js";
import {
  Component,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtextInterpolate1
} from "./chunk-BKT2MDTY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/template-edit-modal.component.ts
function TemplateEditModalComponent_Conditional_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function TemplateEditModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TemplateEditModalComponent_Conditional_28_Conditional_6_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.background_url())("alt", ctx_r0.selected_background()?.name || \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selected_background()?.name || \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.selected_background()?.media_type) ? 6 : -1, tmp_4_0);
  }
}
function TemplateEditModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 21);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY"), " ");
  }
}
function TemplateEditModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplateEditModalComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearBackground());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_REMOVE"));
  }
}
var TemplateEditModalComponent = class _TemplateEditModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = this._data.template;
    this.group_id = this._data.group_id || "";
    this.model = signal(
      {
        name: this.template.name || "",
        description: this.template.description || "",
        background_item_id: this.template.background_item_id || "",
        full_screen_takeover: !!this.template.full_screen_takeover,
        merge: !!this.template.merge
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_background = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_background" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background_url = computed(
      () => {
        const media_id = this.model().background_item_id;
        return media_id ? el(media_id) : "";
      },
      ...ngDevMode ? [{ debugName: "background_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
    });
    saveHotkey(this._dialog_ref, () => this.saveTemplate());
  }
  async selectBackground() {
    const ref = this._dialog.open(MediaSelectModalComponent, {
      data: { selected_id: this.model().background_item_id },
      panelClass: "mobile-fullscreen"
    });
    const media = await firstValueFrom(ref.afterClosed());
    if (!media)
      return;
    this.selected_background.set(media);
    this.model.update((value) => __spreadProps(__spreadValues({}, value), {
      background_item_id: media.id
    }));
  }
  clearBackground() {
    this.selected_background.set(null);
    this.model.update((value) => __spreadProps(__spreadValues({}, value), {
      background_item_id: ""
    }));
  }
  async saveTemplate() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const model = this.model();
      const data = __spreadProps(__spreadValues({}, model), {
        description: model.description || null,
        background_item_id: model.background_item_id || null
      });
      if (!this.template.id)
        removeEmptyFields(data);
      try {
        let result;
        if (this.template.id) {
          result = await this._data.onEdit(this.template.id, data);
        } else {
          result = await this._data.onAdd(data);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(result);
        notifySuccess(i18n("SIGNAGE_MANAGER.TEMPLATE_SAVED"));
      } catch {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.TEMPLATE_SAVE_ERROR"));
      }
    });
  }
  static {
    this.\u0275fac = function TemplateEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateEditModalComponent, selectors: [["template-edit-modal"]], decls: 43, vars: 51, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], [1, "mb-4"], [1, "mb-1"], [1, "border-base-300", "flex", "flex-wrap", "items-center", "gap-3", "rounded-lg", "border", "p-3"], [1, "ml-auto", "flex", "shrink-0", "items-center", "gap-1"], ["type", "button", "matRipple", "", 1, "hover:bg-base-200", "rounded", "px-3", "py-2", "text-sm", "font-medium", 3, "click"], ["icon", "", "type", "button", "matRipple", "", 1, "text-error"], [3, "label", "formField", "info"], [3, "label", "formField"], ["type", "templates", 3, "item_id", "group_id", "allow_unshare"], ["auth", "", 1, "bg-base-200", "h-16", "w-24", "shrink-0", "rounded", "object-cover", 3, "source", "alt"], [1, "min-w-32", "flex-1"], [1, "truncate", "font-medium"], [1, "text-base-content/70", "text-xs", "capitalize"], [1, "bg-base-200", "flex", "h-16", "w-24", "shrink-0", "items-center", "justify-center", "rounded"], [1, "text-base-content/40", "text-3xl"], [1, "text-base-content/70", "min-w-32", "flex-1"], ["icon", "", "type", "button", "matRipple", "", 1, "text-error", 3, "click"]], template: function TemplateEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function TemplateEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveTemplate();
        });
        \u0275\u0275elementStart(3, "form")(4, "label", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span", 2);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "label", 5);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 3);
        \u0275\u0275element(20, "textarea", 6);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "fieldset", 7)(24, "legend", 8);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 9);
        \u0275\u0275conditionalCreate(28, TemplateEditModalComponent_Conditional_28_Template, 7, 8)(29, TemplateEditModalComponent_Conditional_29_Template, 6, 3);
        \u0275\u0275elementStart(30, "div", 10)(31, "button", 11);
        \u0275\u0275listener("click", function TemplateEditModalComponent_Template_button_click_31_listener() {
          return ctx.selectBackground();
        });
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, TemplateEditModalComponent_Conditional_34_Template, 4, 3, "button", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 7);
        \u0275\u0275element(36, "settings-toggle", 13);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 7);
        \u0275\u0275element(40, "settings-toggle", 14);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "signage-shared-with", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 23, ctx.template.id ? "SIGNAGE_MANAGER.TEMPLATE_EDIT" : "SIGNAGE_MANAGER.NEW_TEMPLATE"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 25, "SIGNAGE_MANAGER.TEMPLATE_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 27, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 29, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 31, "SIGNAGE_MANAGER.TEMPLATE_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 33, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 35, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 37, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 39, "SIGNAGE_MANAGER.TEMPLATE_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 41, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().background_item_id ? 28 : 29);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 43, ctx.model().background_item_id ? "COMMON.CHANGE" : "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.model().background_item_id ? 34 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 45, "SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER"))("formField", ctx.form.full_screen_takeover)("info", \u0275\u0275pipeBind1(38, 47, "SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER_INFO"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(41, 49, "SIGNAGE_MANAGER.TEMPLATE_MERGE"))("formField", ctx.form.merge);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("item_id", ctx.template.id)("group_id", ctx.group_id)("allow_unshare", true);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      AuthenticatedImageDirective,
      IconComponent,
      SettingsToggleComponent,
      FormField,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      SignageSharedWithComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateEditModalComponent, [{
    type: Component,
    args: [{
      selector: "template-edit-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                (template.id
                    ? 'SIGNAGE_MANAGER.TEMPLATE_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_TEMPLATE'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveTemplate()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.TEMPLATE_SAVING' | translate) : ''
            "
        >
            <form>
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_NAME_ARIA' | translate
                        "
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_DESCRIPTION_ARIA'
                                | translate
                        "
                    ></textarea>
                </mat-form-field>
                <fieldset class="mb-4">
                    <legend class="mb-1">
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND' | translate }}
                    </legend>
                    <div
                        class="border-base-300 flex flex-wrap items-center gap-3 rounded-lg border p-3"
                    >
                        @if (model().background_item_id) {
                            <img
                                auth
                                class="bg-base-200 h-16 w-24 shrink-0 rounded object-cover"
                                [source]="background_url()"
                                [alt]="
                                    selected_background()?.name ||
                                    ('SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                        | translate)
                                "
                            />
                            <div class="min-w-32 flex-1">
                                <div class="truncate font-medium">
                                    {{
                                        selected_background()?.name ||
                                            ('SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED'
                                                | translate)
                                    }}
                                </div>
                                @if (
                                    selected_background()?.media_type;
                                    as type
                                ) {
                                    <div
                                        class="text-base-content/70 text-xs capitalize"
                                    >
                                        {{ type }}
                                    </div>
                                }
                            </div>
                        } @else {
                            <div
                                class="bg-base-200 flex h-16 w-24 shrink-0 items-center justify-center rounded"
                            >
                                <icon class="text-base-content/40 text-3xl"
                                    >image</icon
                                >
                            </div>
                            <div class="text-base-content/70 min-w-32 flex-1">
                                {{
                                    'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                        <div class="ml-auto flex shrink-0 items-center gap-1">
                            <button
                                type="button"
                                matRipple
                                class="hover:bg-base-200 rounded px-3 py-2 text-sm font-medium"
                                (click)="selectBackground()"
                            >
                                {{
                                    (model().background_item_id
                                        ? 'COMMON.CHANGE'
                                        : 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT'
                                    ) | translate
                                }}
                            </button>
                            @if (model().background_item_id) {
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="text-error"
                                    (click)="clearBackground()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_REMOVE'
                                            | translate
                                    "
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                    </div>
                </fieldset>
                <div class="mb-4">
                    <settings-toggle
                        [label]="
                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                | translate
                        "
                        [formField]="form.full_screen_takeover"
                        [info]="
                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER_INFO'
                                | translate
                        "
                    >
                    </settings-toggle>
                </div>
                <div class="mb-4">
                    <settings-toggle
                        [label]="'SIGNAGE_MANAGER.TEMPLATE_MERGE' | translate"
                        [formField]="form.merge"
                    ></settings-toggle>
                </div>
                <signage-shared-with
                    type="templates"
                    [item_id]="template.id"
                    [group_id]="group_id"
                    [allow_unshare]="true"
                ></signage-shared-with>
            </form>
        </fullscreen-modal-shell>
    `,
      imports: [
        FullscreenModalShellComponent,
        AuthenticatedImageDirective,
        IconComponent,
        SettingsToggleComponent,
        FormField,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        SignageSharedWithComponent
      ]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateEditModalComponent, { className: "TemplateEditModalComponent", filePath: "apps/signage-manager/src/app/shared/template-edit-modal.component.ts", lineNumber: 230 });
})();
export {
  TemplateEditModalComponent
};
//# debugId=25a2c4e0-1cdc-5739-8479-9c259ef13b72
//# sourceMappingURL=template-edit-modal.component-AGBCFOSD.js.map
