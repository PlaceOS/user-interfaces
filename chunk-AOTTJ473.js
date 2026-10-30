import {
  errorText
} from "./chunk-EHX3V5FU.js";
import {
  FullscreenModalShellComponent
} from "./chunk-4D2YZQAY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-WZBYY54Y.js";
import {
  SettingsToggleComponent
} from "./chunk-YEGWJU2K.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GXWVSSG.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-54KE5JKV.js";
import {
  MatOption
} from "./chunk-G7ZLBZI3.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import {
  FormField,
  form,
  required
} from "./chunk-I75UA7CR.js";
import {
  OrganisationService
} from "./chunk-ACYV7NM4.js";
import {
  Mt,
  Sh,
  getInvalidSignalFields,
  i18n,
  kh,
  notifyError
} from "./chunk-JYQPCPCB.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/level-manager/level-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LevelModalComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    \u0275\u0275property("value", building_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
  }
}
var LevelModalComponent = class _LevelModalComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building_list = this._org.building_list;
    this.model = signal(
      {
        id: this._data?.id || "",
        display_name: this._data?.display_name || "",
        parent_id: this._data?.parent_id || "",
        map_id: this._data?.map_id || "",
        parking: this._data?.tags?.includes("parking") || false
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.display_name);
      required(p.parent_id);
      required(p.map_id);
    });
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    this.loading.set(true);
    const data = this.model();
    data.tags = data.parking ? ["level", "parking"] : ["level"];
    const body = __spreadProps(__spreadValues({}, data), {
      name: `LEVEL ${Mt().description} ${data.display_name}`
    });
    try {
      const resp = await (data.id ? kh(data.id, body) : Sh(body));
      this._dialog_ref.close(resp);
    } catch (e) {
      notifyError(`Failed to save level. ${errorText(e)}`);
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = function LevelModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelModalComponent, selectors: [["level-modal"]], decls: 36, vars: 36, consts: [[3, "confirm", "heading", "loading"], ["system", ""], [1, "flex", "flex-col"], ["for", "level-modal-zone", "id", "level-modal-zone-label"], ["appearance", "outline"], ["aria-labelledby", "level-modal-zone-label", 3, "formField", "placeholder"], [3, "value"], ["for", "level-modal-display-name"], ["id", "level-modal-display-name", "matInput", "", 3, "placeholder", "formField"], [1, "flex", "space-x-4", "pb-4"], [1, "flex-1", 3, "label", "formField"], [1, "flex-1"], ["for", "level-modal-map-id"], ["id", "level-modal-map-id", "matInput", "", 3, "placeholder", "formField"]], template: function LevelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function LevelModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 4)(11, "mat-select", 5);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275repeaterCreate(13, LevelModalComponent_For_14_Template, 2, 2, "mat-option", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(15, "mat-error");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 2)(19, "label", 7);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 4);
        \u0275\u0275element(23, "input", 8);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9);
        \u0275\u0275element(26, "settings-toggle", 10);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275element(28, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 2)(30, "label", 12);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 4);
        \u0275\u0275element(34, "input", 13);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 16, ctx.model().id ? "APP.CONCIERGE.LEVELS_EDIT" : "APP.CONCIERGE.LEVELS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 18, "APP.CONCIERGE.LEVELS_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", ctx.form.parent_id().invalid() && ctx.form.parent_id().touched());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "RESOURCE.BUILDING"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.parent_id)("placeholder", \u0275\u0275pipeBind1(12, 22, "COMMON.BUILDING_SELECT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.building_list());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "APP.CONCIERGE.LEVELS_BUILDING_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, "FORM.DISPLAY_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 28, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 30, "APP.CONCIERGE.LEVELS_HAS_PARKING"))("formField", ctx.form.parking);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 32, "APP.CONCIERGE.LEVELS_MAP_URL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 34, "APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER"))("formField", ctx.form.map_id);
        \u0275\u0275control();
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      SettingsToggleComponent,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelModalComponent, [{
    type: Component,
    args: [{ selector: "level-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.LEVELS_EDIT'
                    : 'APP.CONCIERGE.LEVELS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.LEVELS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form system>
                <div class="flex flex-col">
                    <label
                        for="level-modal-zone"
                        [class.error]="
                            form.parent_id().invalid() &&
                            form.parent_id().touched()
                        "
                        id="level-modal-zone-label"
                    >
                        {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            aria-labelledby="level-modal-zone-label"
                            [formField]="form.parent_id"
                            [placeholder]="'COMMON.BUILDING_SELECT' | translate"
                        >
                            @for (
                                building of building_list();
                                track building.id
                            ) {
                                <mat-option [value]="building.id">
                                    {{ building.display_name || building.name }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.LEVELS_BUILDING_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="level-modal-display-name">{{
                        'FORM.DISPLAY_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            id="level-modal-display-name"
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex space-x-4 pb-4">
                    <settings-toggle
                        class="flex-1"
                        [label]="'APP.CONCIERGE.LEVELS_HAS_PARKING' | translate"
                        [formField]="form.parking"
                    >
                    </settings-toggle>
                    <div class="flex-1"></div>
                </div>
                <div class="flex flex-col">
                    <label for="level-modal-map-id">{{
                        'APP.CONCIERGE.LEVELS_MAP_URL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            id="level-modal-map-id"
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER'
                                    | translate
                            "
                            [formField]="form.map_id"
                        />
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      SettingsToggleComponent,
      MatSelectModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelModalComponent, { className: "LevelModalComponent", filePath: "apps/concierge/src/app/level-manager/level-modal.component.ts", lineNumber: 121 });
})();

export {
  LevelModalComponent
};
//# debugId=d7b2476c-7c0b-5f8a-b884-c9ccc309bb39
//# sourceMappingURL=chunk-AOTTJ473.js.map
