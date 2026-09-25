import {
  ZoneSelectTreeComponent
} from "./chunk-APL3AFE7.js";
import "./chunk-UGPK4FZJ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-TXVAG53L.js";
import "./chunk-LMC45HBY.js";
import {
  PagedSearch,
  byDisplayName
} from "./chunk-NL4FO6ZZ.js";
import "./chunk-B4VG5N3U.js";
import {
  FullscreenModalShellComponent
} from "./chunk-IGRZAUZQ.js";
import "./chunk-XASXFKEM.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GXX6XZGB.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  form,
  required,
  submit
} from "./chunk-GBM5TPX5.js";
import "./chunk-LHINQNJP.js";
import {
  TranslatePipe
} from "./chunk-3GHHB7C4.js";
import "./chunk-73JW4EAQ.js";
import "./chunk-MAKUHOJD.js";
import {
  Component,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatOption,
  Xt,
  computed,
  inject,
  linkedSignal,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-56VJTSNA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/displays/display-edit-modal.component.ts
var _c0 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DisplayEditModalComponent_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function DisplayEditModalComponent_Conditional_56_For_2_Template_button_click_3_listener() {
      const zone_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeZone(zone_r2.id));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const zone_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(zone_r2.display_name || zone_r2.name || zone_r2.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "SIGNAGE_MANAGER.REMOVE_DISPLAY_ZONE", \u0275\u0275pureFunction1(5, _c0, zone_r2.display_name || zone_r2.name || zone_r2.id)));
  }
}
function DisplayEditModalComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, DisplayEditModalComponent_Conditional_56_For_2_Template, 7, 7, "div", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selected_zones());
  }
}
var DisplayEditModalComponent = class _DisplayEditModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._selected_zone_items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_selected_zone_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display = this._data.display;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.roots = this._data.roots;
    this.selected_zone = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_zone" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.roots,
      computation: (roots, previous) => previous?.value || roots[0] || null
    }));
    this.zone_list = new PagedSearch((search) => {
      const parent_id = this.selected_zone()?.id;
      return parent_id && search.trim() ? this._data.query_zones(search, parent_id) : null;
    }, byDisplayName);
    this.loadChildren = this._data.load_children;
    this.model = signal(
      {
        name: this.display.name || "",
        display_name: this.display.display_name || "",
        description: this.display.description || "",
        orientation: this.display.orientation || "unspecified",
        zones: this.display.id ? [...this.display.zones] : [...this._data.default_zone_ids]
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => required(path.name));
    this.selected_zones = computed(
      () => {
        const selected_zone_ids = this.model().zones;
        const zones = new Map([...this._data.zones(), ...this._selected_zone_items()].map((zone) => [zone.id, zone]));
        return selected_zone_ids.map((zone_id) => zones.get(zone_id) || new Xt({ id: zone_id }));
      },
      ...ngDevMode ? [{ debugName: "selected_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addZone(zone) {
    this._selected_zone_items.update((zones) => [
      ...zones.filter((item) => item.id !== zone.id),
      zone
    ]);
    this.model.update((model) => __spreadProps(__spreadValues({}, model), {
      zones: model.zones.includes(zone.id) ? model.zones : [...model.zones, zone.id]
    }));
  }
  removeZone(zone_id) {
    this.model.update((model) => __spreadProps(__spreadValues({}, model), {
      zones: model.zones.filter((id) => id !== zone_id)
    }));
  }
  async saveDisplay() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const form_value = this.model();
      const data = __spreadValues({
        name: form_value.name,
        display_name: form_value.display_name,
        description: form_value.description,
        orientation: form_value.orientation,
        signage: true,
        zones: form_value.zones
      }, this.display.id ? { version: this.display.version } : {});
      try {
        const result = this.display.id ? await this._data.onEdit(this.display.id, data) : await this._data.onAdd(data);
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(result);
      } finally {
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
      }
    });
  }
  static {
    this.\u0275fac = function DisplayEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayEditModalComponent, selectors: [["display-edit-modal"]], decls: 59, vars: 61, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "gap-4"], ["for", "signage-display-name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "signage-display-name", 3, "placeholder", "formField"], ["for", "signage-display-display-name"], ["matInput", "", "id", "signage-display-display-name", 3, "placeholder", "formField"], ["for", "signage-display-description"], ["matInput", "", "id", "signage-display-description", 1, "min-h-24", 3, "placeholder", "formField"], ["for", "orientation"], [3, "formField"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], [1, "mb-1", "font-medium"], [1, "mb-3", "text-sm", "opacity-70"], [1, "mb-3", "flex", "flex-wrap", "gap-2"], [1, "border-base-300", "h-80", "overflow-auto", "rounded-lg", "border", "p-2"], [3, "selectedChange", "zoneSelected", "list", "roots", "load_children", "scoped_search", "selected"], [1, "bg-base-200", "flex", "items-center", "gap-1", "rounded-full", "py-1", "pr-1", "pl-3", "text-sm"], ["icon", "", "default", "", "type", "button", 1, "rounded-full", 3, "click"]], template: function DisplayEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function DisplayEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveDisplay();
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
        \u0275\u0275elementStart(30, "div")(31, "label", 10);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-form-field", 4)(35, "mat-select", 11);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "mat-option", 12);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 13);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-option", 14);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 15);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "section")(50, "h3", 16);
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 17);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(56, DisplayEditModalComponent_Conditional_56_Template, 3, 0, "div", 18);
        \u0275\u0275elementStart(57, "div", 19)(58, "zone-select-tree", 20);
        \u0275\u0275twoWayListener("selectedChange", function DisplayEditModalComponent_Template_zone_select_tree_selectedChange_58_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected_zone, $event) || (ctx.selected_zone = $event);
          return $event;
        });
        \u0275\u0275listener("zoneSelected", function DisplayEditModalComponent_Template_zone_select_tree_zoneSelected_58_listener($event) {
          return ctx.addZone($event);
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 27, ctx.display.id ? "SIGNAGE_MANAGER.DISPLAY_EDIT" : "SIGNAGE_MANAGER.NEW_DISPLAY"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 29, "SIGNAGE_MANAGER.DISPLAY_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 31, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 33, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 35, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 37, "FORM.DISPLAY_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 39, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 41, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 43, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 45, "SIGNAGE_MANAGER.ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.orientation);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 47, "SIGNAGE_MANAGER.DISPLAY_ORIENTATION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 49, "SIGNAGE_MANAGER.ORIENTATION_UNSPECIFIED"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 51, "SIGNAGE_MANAGER.ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 53, "SIGNAGE_MANAGER.ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 55, "SIGNAGE_MANAGER.ORIENTATION_SQUARE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 57, "SIGNAGE_MANAGER.DISPLAY_ZONES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 59, "SIGNAGE_MANAGER.DISPLAY_ZONES_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_zones().length ? 56 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("list", ctx.zone_list)("roots", ctx.roots())("load_children", ctx.loadChildren)("scoped_search", true);
        \u0275\u0275twoWayProperty("selected", ctx.selected_zone);
      }
    }, dependencies: [
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FullscreenModalShellComponent,
      IconComponent,
      ZoneSelectTreeComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayEditModalComponent, [{
    type: Component,
    args: [{
      selector: "display-edit-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                (display.id
                    ? 'SIGNAGE_MANAGER.DISPLAY_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_DISPLAY'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveDisplay()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.DISPLAY_SAVING' | translate) : ''
            "
        >
            <form class="flex flex-col gap-4">
                <div>
                    <label for="signage-display-name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            id="signage-display-name"
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div>
                    <label for="signage-display-display-name">{{
                        'FORM.DISPLAY_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            id="signage-display-display-name"
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div>
                    <label for="signage-display-description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            id="signage-display-description"
                            class="min-h-24"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div>
                    <label for="orientation">{{
                        'SIGNAGE_MANAGER.ORIENTATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [formField]="form.orientation"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.DISPLAY_ORIENTATION_ARIA'
                                    | translate
                            "
                        >
                            <mat-option value="unspecified">{{
                                'SIGNAGE_MANAGER.ORIENTATION_UNSPECIFIED'
                                    | translate
                            }}</mat-option>
                            <mat-option value="landscape">{{
                                'SIGNAGE_MANAGER.ORIENTATION_LANDSCAPE'
                                    | translate
                            }}</mat-option>
                            <mat-option value="portrait">{{
                                'SIGNAGE_MANAGER.ORIENTATION_PORTRAIT'
                                    | translate
                            }}</mat-option>
                            <mat-option value="square">{{
                                'SIGNAGE_MANAGER.ORIENTATION_SQUARE' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <section>
                    <h3 class="mb-1 font-medium">
                        {{ 'SIGNAGE_MANAGER.DISPLAY_ZONES' | translate }}
                    </h3>
                    <p class="mb-3 text-sm opacity-70">
                        {{ 'SIGNAGE_MANAGER.DISPLAY_ZONES_HINT' | translate }}
                    </p>
                    @if (selected_zones().length) {
                        <div class="mb-3 flex flex-wrap gap-2">
                            @for (zone of selected_zones(); track zone.id) {
                                <div
                                    class="bg-base-200 flex items-center gap-1 rounded-full py-1 pr-1 pl-3 text-sm"
                                >
                                    <span>{{
                                        zone.display_name ||
                                            zone.name ||
                                            zone.id
                                    }}</span>
                                    <button
                                        icon
                                        default
                                        type="button"
                                        class="rounded-full"
                                        (click)="removeZone(zone.id)"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.REMOVE_DISPLAY_ZONE'
                                                | translate
                                                    : {
                                                          name:
                                                              zone.display_name ||
                                                              zone.name ||
                                                              zone.id,
                                                      }
                                        "
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                            }
                        </div>
                    }
                    <div
                        class="border-base-300 h-80 overflow-auto rounded-lg border p-2"
                    >
                        <zone-select-tree
                            [list]="zone_list"
                            [roots]="roots()"
                            [load_children]="loadChildren"
                            [scoped_search]="true"
                            [(selected)]="selected_zone"
                            (zoneSelected)="addZone($event)"
                        />
                    </div>
                </section>
            </form>
        </fullscreen-modal-shell>
    `,
      imports: [
        FormField,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FullscreenModalShellComponent,
        IconComponent,
        TranslatePipe,
        ZoneSelectTreeComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayEditModalComponent, { className: "DisplayEditModalComponent", filePath: "apps/signage-manager/src/app/displays/display-edit-modal.component.ts", lineNumber: 203 });
})();
export {
  DisplayEditModalComponent
};
//# debugId=68b8838b-31d2-5c37-8eeb-7b9626766565
//# sourceMappingURL=display-edit-modal.component-X3HBYXGW.js.map
