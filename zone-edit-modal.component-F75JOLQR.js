import {
  ZoneSelectTreeComponent
} from "./chunk-NIXKWQGY.js";
import "./chunk-B2C6KSXY.js";
import {
  PagedSearch,
  byDisplayName
} from "./chunk-EQ5LIJEF.js";
import "./chunk-44WQOBER.js";
import {
  FullscreenModalShellComponent
} from "./chunk-PNZNXU3K.js";
import "./chunk-IDYOJSL5.js";
import "./chunk-XASXFKEM.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-XG3NPPBO.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  form,
  required,
  submit
} from "./chunk-RSKYLYEV.js";
import "./chunk-C7ELQ7TP.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import "./chunk-524GLCDK.js";
import "./chunk-O6Q3U2DX.js";
import {
  Component,
  MAT_DIALOG_DATA,
  MatDialogRef,
  Xt,
  computed,
  inject,
  linkedSignal,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/zones/zone-edit-modal.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
function ZoneEditModalComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.ZONE_PARENT"), ": ", ctx_r0.selected_parent()?.display_name || ctx_r0.selected_parent()?.name || ctx_r0.selected_parent()?.id, " ");
  }
}
function ZoneEditModalComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.ZONE_PARENT_REQUIRED"), " ");
  }
}
var ZoneEditModalComponent = class _ZoneEditModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.zone = this._data.zone;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.roots = this._data.roots;
    this.available_zones = computed(
      () => [
        ...this.roots(),
        ...this._data.zones()
      ],
      ...ngDevMode ? [{ debugName: "available_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        name: this.zone.name || "",
        display_name: this.zone.display_name || "",
        description: this.zone.description || "",
        parent_id: this.zone.parent_id || this._data.default_parent_id || ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
      required(path.parent_id);
    });
    this.selected_parent = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_parent" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.available_zones,
      computation: (zones, previous) => {
        const parent_id = this.model().parent_id;
        return zones.find((zone) => zone.id === parent_id) || previous?.value || (parent_id ? new Xt({ id: parent_id }) : null);
      }
    }));
    this.zone_list = new PagedSearch((search) => {
      const parent_id = this.selected_parent()?.id;
      return parent_id && search.trim() ? this._data.query_zones(search, parent_id) : null;
    }, byDisplayName);
    this.loadChildren = this._data.load_children;
  }
  selectParent(zone) {
    this.model.update((model) => __spreadProps(__spreadValues({}, model), { parent_id: zone.id }));
  }
  async saveZone() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      try {
        const result = await this._data.onSave(this.zone, this.model());
        if (result)
          this._dialog_ref.close(result);
      } finally {
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
      }
    });
  }
  static {
    this.\u0275fac = function ZoneEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneEditModalComponent, selectors: [["zone-edit-modal"]], decls: 43, vars: 47, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "gap-4"], ["for", "signage-zone-name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "signage-zone-name", 3, "placeholder", "formField"], ["for", "signage-zone-display-name"], ["matInput", "", "id", "signage-zone-display-name", 3, "placeholder", "formField"], ["for", "signage-zone-description"], ["matInput", "", "id", "signage-zone-description", 1, "min-h-24", 3, "placeholder", "formField"], [1, "mb-1", "font-medium"], [1, "mb-3", "text-sm", "opacity-70"], [1, "bg-base-200", "mb-3", "rounded-lg", "px-3", "py-2", "text-sm"], [1, "border-base-300", "h-80", "overflow-auto", "rounded-lg", "border", "p-2"], [3, "selectedChange", "zoneSelected", "list", "roots", "load_children", "exclude_ids", "scoped_search", "selected"], [1, "text-error", "mt-1", "text-sm"]], template: function ZoneEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function ZoneEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveZone();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "div")(5, "label", 2);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span", 3);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 4);
        \u0275\u0275element(11, "input", 5);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div")(17, "label", 6);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 4);
        \u0275\u0275element(21, "input", 7);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div")(24, "label", 8);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 4);
        \u0275\u0275element(28, "textarea", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "section")(31, "h3", 10);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "span", 3);
        \u0275\u0275text(35, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "p", 11);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, ZoneEditModalComponent_Conditional_39_Template, 3, 4, "div", 12);
        \u0275\u0275elementStart(40, "div", 13)(41, "zone-select-tree", 14);
        \u0275\u0275twoWayListener("selectedChange", function ZoneEditModalComponent_Template_zone_select_tree_selectedChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected_parent, $event) || (ctx.selected_parent = $event);
          return $event;
        });
        \u0275\u0275listener("zoneSelected", function ZoneEditModalComponent_Template_zone_select_tree_zoneSelected_41_listener($event) {
          return ctx.selectParent($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(42, ZoneEditModalComponent_Conditional_42_Template, 3, 3, "div", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 22, ctx.zone.id ? "SIGNAGE_MANAGER.ZONE_EDIT" : "SIGNAGE_MANAGER.NEW_ZONE"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 24, "SIGNAGE_MANAGER.ZONE_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 26, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 28, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 30, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 32, "FORM.DISPLAY_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 34, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 36, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 38, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 40, "SIGNAGE_MANAGER.ZONE_PARENT"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 42, "SIGNAGE_MANAGER.ZONE_PARENT_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_parent() ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("list", ctx.zone_list)("roots", ctx.roots())("load_children", ctx.loadChildren)("exclude_ids", ctx.zone.id ? \u0275\u0275pureFunction1(44, _c0, ctx.zone.id) : \u0275\u0275pureFunction0(46, _c1))("scoped_search", true);
        \u0275\u0275twoWayProperty("selected", ctx.selected_parent);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.parent_id().touched() && !ctx.model().parent_id ? 42 : -1);
      }
    }, dependencies: [
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FullscreenModalShellComponent,
      ZoneSelectTreeComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneEditModalComponent, [{
    type: Component,
    args: [{
      selector: "zone-edit-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                (zone.id
                    ? 'SIGNAGE_MANAGER.ZONE_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_ZONE'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveZone()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.ZONE_SAVING' | translate) : ''
            "
        >
            <form class="flex flex-col gap-4">
                <div>
                    <label for="signage-zone-name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            id="signage-zone-name"
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div>
                    <label for="signage-zone-display-name">{{
                        'FORM.DISPLAY_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            id="signage-zone-display-name"
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div>
                    <label for="signage-zone-description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            id="signage-zone-description"
                            class="min-h-24"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <section>
                    <h3 class="mb-1 font-medium">
                        {{ 'SIGNAGE_MANAGER.ZONE_PARENT' | translate
                        }}<span required>*</span>
                    </h3>
                    <p class="mb-3 text-sm opacity-70">
                        {{ 'SIGNAGE_MANAGER.ZONE_PARENT_HINT' | translate }}
                    </p>
                    @if (selected_parent()) {
                        <div
                            class="bg-base-200 mb-3 rounded-lg px-3 py-2 text-sm"
                        >
                            {{ 'SIGNAGE_MANAGER.ZONE_PARENT' | translate }}:
                            {{
                                selected_parent()?.display_name ||
                                    selected_parent()?.name ||
                                    selected_parent()?.id
                            }}
                        </div>
                    }
                    <div
                        class="border-base-300 h-80 overflow-auto rounded-lg border p-2"
                    >
                        <zone-select-tree
                            [list]="zone_list"
                            [roots]="roots()"
                            [load_children]="loadChildren"
                            [exclude_ids]="zone.id ? [zone.id] : []"
                            [scoped_search]="true"
                            [(selected)]="selected_parent"
                            (zoneSelected)="selectParent($event)"
                        />
                    </div>
                    @if (form.parent_id().touched() && !model().parent_id) {
                        <div class="text-error mt-1 text-sm">
                            {{
                                'SIGNAGE_MANAGER.ZONE_PARENT_REQUIRED'
                                    | translate
                            }}
                        </div>
                    }
                </section>
            </form>
        </fullscreen-modal-shell>
    `,
      imports: [
        FormField,
        MatFormFieldModule,
        MatInputModule,
        FullscreenModalShellComponent,
        TranslatePipe,
        ZoneSelectTreeComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneEditModalComponent, { className: "ZoneEditModalComponent", filePath: "apps/signage-manager/src/app/zones/zone-edit-modal.component.ts", lineNumber: 158 });
})();
export {
  ZoneEditModalComponent
};
//# debugId=e915a920-1aa8-5855-8ac6-886178ad7ac3
//# sourceMappingURL=zone-edit-modal.component-F75JOLQR.js.map
