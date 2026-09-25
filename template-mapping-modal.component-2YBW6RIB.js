import {
  PlaylistScheduleFormComponent,
  createPlaylistScheduleModel,
  playlistSchedulePayload,
  playlistScheduleSchema
} from "./chunk-TB4TPMQ3.js";
import "./chunk-WIKNS47I.js";
import "./chunk-XMMGZ2BZ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-TXVAG53L.js";
import "./chunk-LMC45HBY.js";
import {
  SettingsToggleComponent
} from "./chunk-I7P47UGZ.js";
import "./chunk-K5P4ENI4.js";
import {
  FullscreenModalShellComponent
} from "./chunk-IGRZAUZQ.js";
import {
  AuthenticatedImageDirective
} from "./chunk-JB3R7C37.js";
import "./chunk-AUWMHS3G.js";
import {
  HydratedSignageTemplate
} from "./chunk-QAMSNMBO.js";
import "./chunk-GXX6XZGB.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  applyWhen,
  form,
  required,
  submit
} from "./chunk-GBM5TPX5.js";
import "./chunk-W4PNQNWS.js";
import "./chunk-KOTTAT56.js";
import "./chunk-LHINQNJP.js";
import {
  TranslatePipe
} from "./chunk-3GHHB7C4.js";
import "./chunk-WEL7UXWF.js";
import "./chunk-73JW4EAQ.js";
import "./chunk-VOX6OYT2.js";
import "./chunk-7X43NIYS.js";
import "./chunk-MAKUHOJD.js";
import {
  Component,
  Gh,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatOption,
  computed,
  i18n,
  inject,
  notifyError,
  notifySuccess,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-56VJTSNA.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/template-mapping-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TemplateMappingModalComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.background_url())("alt", ctx_r0.selected_template()?.name || "");
  }
}
function TemplateMappingModalComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 8);
    \u0275\u0275text(1, "dashboard");
    \u0275\u0275elementEnd();
  }
}
function TemplateMappingModalComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selected_template()?.description, " ");
  }
}
function TemplateMappingModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, TemplateMappingModalComponent_Conditional_4_Conditional_2_Template, 1, 2, "img", 7)(3, TemplateMappingModalComponent_Conditional_4_Conditional_3_Template, 2, 0, "icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TemplateMappingModalComponent_Conditional_4_Conditional_7_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.background_url() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selected_template()?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selected_template()?.description ? 7 : -1);
  }
}
function TemplateMappingModalComponent_Conditional_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r2 = ctx.$implicit;
    \u0275\u0275property("value", template_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r2.name, " ");
  }
}
function TemplateMappingModalComponent_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_APPROVED_TEMPLATES"), " ");
  }
}
function TemplateMappingModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 13)(7, "mat-select", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275repeaterCreate(9, TemplateMappingModalComponent_Conditional_5_For_10_Template, 2, 2, "mat-option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, TemplateMappingModalComponent_Conditional_5_Conditional_14_Template, 3, 3, "p", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SIGNAGE_MANAGER.SELECT_APPROVED_TEMPLATE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r0.form_model.template_id);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 7, "SIGNAGE_MANAGER.SELECT_APPROVED_TEMPLATE"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.templates);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "SIGNAGE_MANAGER.TEMPLATE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.templates.length ? 14 : -1);
  }
}
function TemplateMappingModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "playlist-schedule-form", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("schedule", ctx_r0.form_model.schedule)("index", 0)("open", true)("can_remove", false);
  }
}
function TemplateMappingModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 17);
    \u0275\u0275text(2, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "SIGNAGE_MANAGER.DEFAULT_TEMPLATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "SIGNAGE_MANAGER.DEFAULT_TEMPLATE_HINT"), " ");
  }
}
var TemplateMappingModalComponent = class _TemplateMappingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.mapping = this._data.mapping;
    this.templates = this._data.templates;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        template_id: this.mapping?.template_id || "",
        scheduled: !!this.mapping?.schedule,
        schedule: createPlaylistScheduleModel(this.mapping?.schedule || void 0)
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_model = form(this.model, (path) => {
      required(path.template_id);
      applyWhen(path.schedule, ({ valueOf }) => valueOf(path.scheduled), playlistScheduleSchema);
    });
    this.selected_template = computed(
      () => {
        const template_id = this.model().template_id;
        return this.mapping?.template_details || this.templates.find((template) => template.id === template_id) || null;
      },
      ...ngDevMode ? [{ debugName: "selected_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background_url = computed(
      () => {
        const template = this.selected_template();
        if (!template)
          return "";
        if (template instanceof HydratedSignageTemplate && template.background_media) {
          return template.background_media.media_url;
        }
        return template.background_item_id ? Gh(template.background_item_id) : "";
      },
      ...ngDevMode ? [{ debugName: "background_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async saveMapping() {
    await submit(this.form_model, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const value = this.model();
      const schedule = value.scheduled ? playlistSchedulePayload(value.schedule) : null;
      try {
        await this._data.save(value.template_id, schedule);
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(true);
        notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_SAVED"));
      } catch (error) {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_SAVE_ERROR"));
        throw error;
      }
    });
  }
  static {
    this.\u0275fac = function TemplateMappingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateMappingModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateMappingModalComponent, selectors: [["template-mapping-modal"]], decls: 11, vars: 15, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "gap-4"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3"], [3, "label", "info", "formField"], [3, "schedule", "index", "open", "can_remove"], [1, "bg-base-200", "border-base-300", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-4"], [1, "bg-base-200", "flex", "h-16", "w-24", "shrink-0", "items-center", "justify-center", "overflow-hidden", "rounded"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source", "alt"], [1, "text-base-content/40", "text-3xl"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-base-content/70", "mt-1", "line-clamp-2", "text-sm"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["placeholder", "Select a template", 3, "formField"], [3, "value"], [1, "text-base-content/70", "-mt-3", "text-sm"], [1, "text-primary", "text-2xl"], [1, "font-medium"], [1, "text-base-content/70", "text-sm"]], template: function TemplateMappingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function TemplateMappingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveMapping();
        });
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275conditionalCreate(4, TemplateMappingModalComponent_Conditional_4_Template, 8, 3, "div", 2)(5, TemplateMappingModalComponent_Conditional_5_Template, 15, 11, "div");
        \u0275\u0275element(6, "settings-toggle", 3);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(9, TemplateMappingModalComponent_Conditional_9_Template, 1, 4, "playlist-schedule-form", 4)(10, TemplateMappingModalComponent_Conditional_10_Template, 10, 6, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 7, ctx.mapping ? "SIGNAGE_MANAGER.TEMPLATE_MAPPING_EDIT" : "SIGNAGE_MANAGER.APPLY_TEMPLATE"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 9, "SIGNAGE_MANAGER.TEMPLATE_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.mapping ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 11, "SIGNAGE_MANAGER.TEMPLATE_MAPPING_SCHEDULE"))("info", \u0275\u0275pipeBind1(8, 13, "SIGNAGE_MANAGER.TEMPLATE_MAPPING_DEFAULT_HINT"))("formField", ctx.form_model.scheduled);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().scheduled ? 9 : 10);
      }
    }, dependencies: [
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      AuthenticatedImageDirective,
      FullscreenModalShellComponent,
      IconComponent,
      PlaylistScheduleFormComponent,
      SettingsToggleComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateMappingModalComponent, [{
    type: Component,
    args: [{
      selector: "template-mapping-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                (mapping
                    ? 'SIGNAGE_MANAGER.TEMPLATE_MAPPING_EDIT'
                    : 'SIGNAGE_MANAGER.APPLY_TEMPLATE'
                ) | translate
            "
            (confirm)="saveMapping()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.TEMPLATE_SAVING' | translate) : ''
            "
        >
            <div class="flex flex-col gap-4">
                @if (mapping) {
                    <div
                        class="border-base-300 bg-base-100 flex items-center gap-3 rounded-lg border p-3"
                    >
                        <div
                            class="bg-base-200 flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded"
                        >
                            @if (background_url()) {
                                <img
                                    auth
                                    class="h-full w-full object-cover"
                                    [source]="background_url()"
                                    [alt]="selected_template()?.name || ''"
                                />
                            } @else {
                                <icon class="text-base-content/40 text-3xl"
                                    >dashboard</icon
                                >
                            }
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ selected_template()?.name }}
                            </div>
                            @if (selected_template()?.description) {
                                <div
                                    class="text-base-content/70 mt-1 line-clamp-2 text-sm"
                                >
                                    {{ selected_template()?.description }}
                                </div>
                            }
                        </div>
                    </div>
                } @else {
                    <div>
                        <label>
                            {{
                                'SIGNAGE_MANAGER.SELECT_APPROVED_TEMPLATE'
                                    | translate
                            }}
                            <span required>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                placeholder="Select a template"
                                [formField]="form_model.template_id"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SELECT_APPROVED_TEMPLATE'
                                        | translate
                                "
                            >
                                @for (
                                    template of templates;
                                    track template.id
                                ) {
                                    <mat-option [value]="template.id">
                                        {{ template.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'SIGNAGE_MANAGER.TEMPLATE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                        @if (!templates.length) {
                            <p class="text-base-content/70 -mt-3 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.NO_APPROVED_TEMPLATES'
                                        | translate
                                }}
                            </p>
                        }
                    </div>
                }

                <settings-toggle
                    [label]="
                        'SIGNAGE_MANAGER.TEMPLATE_MAPPING_SCHEDULE' | translate
                    "
                    [info]="
                        'SIGNAGE_MANAGER.TEMPLATE_MAPPING_DEFAULT_HINT'
                            | translate
                    "
                    [formField]="form_model.scheduled"
                />

                @if (model().scheduled) {
                    <playlist-schedule-form
                        [schedule]="form_model.schedule"
                        [index]="0"
                        [open]="true"
                        [can_remove]="false"
                    />
                } @else {
                    <div
                        class="bg-base-200 border-base-300 flex items-center gap-3 rounded-lg border p-4"
                    >
                        <icon class="text-primary text-2xl">home</icon>
                        <div>
                            <div class="font-medium">
                                {{
                                    'SIGNAGE_MANAGER.DEFAULT_TEMPLATE'
                                        | translate
                                }}
                            </div>
                            <div class="text-base-content/70 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.DEFAULT_TEMPLATE_HINT'
                                        | translate
                                }}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </fullscreen-modal-shell>
    `,
      imports: [
        FormField,
        MatFormFieldModule,
        MatSelectModule,
        AuthenticatedImageDirective,
        FullscreenModalShellComponent,
        IconComponent,
        PlaylistScheduleFormComponent,
        SettingsToggleComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateMappingModalComponent, { className: "TemplateMappingModalComponent", filePath: "apps/signage-manager/src/app/shared/template-mapping-modal.component.ts", lineNumber: 197 });
})();
export {
  TemplateMappingModalComponent
};
//# debugId=91d88a71-103f-5f1f-a4e5-4756fd9333eb
//# sourceMappingURL=template-mapping-modal.component-2YBW6RIB.js.map
