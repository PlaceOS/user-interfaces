import {
  LevelModalComponent
} from "./chunk-WLMO3HTG.js";
import {
  TIMEZONES_IANA
} from "./chunk-L2WKW7GY.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-PBIK5QBA.js";
import {
  confirmAction,
  errorText
} from "./chunk-A6F2GUTH.js";
import {
  LevelPipe
} from "./chunk-GBYBOQBB.js";
import {
  SimpleTableComponent
} from "./chunk-IA6BOKAS.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-NKFHWBCN.js";
import "./chunk-EFMAXE4Z.js";
import {
  ApplicationSidebarComponent
} from "./chunk-RUQXKVTF.js";
import "./chunk-JNZHGOKA.js";
import "./chunk-6DDBZJ2C.js";
import "./chunk-KRBYIRBJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-AYM5LPAN.js";
import "./chunk-GX6TJKBO.js";
import "./chunk-UTCRAK3D.js";
import {
  AuthenticatedImageDirective
} from "./chunk-IOWTVLNX.js";
import "./chunk-GAPNJ67M.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPT6QV6G.js";
import "./chunk-TZ5JUV4G.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-UHYZ3QEX.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CAAMUB2D.js";
import "./chunk-2QAVTKHL.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVNE7QXT.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-ZVSHIGFS.js";
import "./chunk-ZZZSUQ57.js";
import "./chunk-4VWJLUSZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import {
  MatOption
} from "./chunk-JQJNBBNN.js";
import {
  requestSpacesForZone
} from "./chunk-KTRJCCRD.js";
import "./chunk-OFW7WDFE.js";
import "./chunk-GQXDRDYV.js";
import "./chunk-ZR56NDHE.js";
import {
  TranslatePipe
} from "./chunk-N7R5EHVG.js";
import {
  FormField,
  form,
  required
} from "./chunk-MCWEYL2F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C5SFKFXB.js";
import {
  Clipboard,
  OrganisationService,
  SettingsService
} from "./chunk-WHXIEU2S.js";
import {
  AsyncHandler
} from "./chunk-EQB56Z5X.js";
import {
  IconComponent
} from "./chunk-J53GBIJV.js";
import {
  Mt,
  ac,
  en,
  getInvalidSignalFields,
  gh,
  hc,
  i18n,
  mh,
  nextValueFrom,
  notifyError,
  notifySuccess,
  yh
} from "./chunk-77D47I3C.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-TFYF4ALL.js";
import {
  Component,
  Injectable,
  Input,
  Output,
  computed,
  debounced,
  effect,
  inject,
  input,
  linkedSignal,
  output,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/building-manager/building-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BuildingFormComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1.display_name || region_r1.name, " ");
  }
}
function BuildingFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4)(5, "mat-select", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-option", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, BuildingFormComponent_Conditional_1_For_11_Template, 2, 2, "mat-option", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "RESOURCE.REGION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.parent_id)("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.REGION_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.default_parent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.region_list());
  }
}
function BuildingFormComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    \u0275\u0275property("value", tz_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r3);
  }
}
function BuildingFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
var BuildingFormComponent = class _BuildingFormComponent extends AsyncHandler {
  get default_parent() {
    return this._org.organisation.id;
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this.building = input(
      null,
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save = input(
      0,
      ...ngDevMode ? [{ debugName: "save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadingInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loadingInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "loading" }));
    this.loading = linkedSignal(
      this.loadingInput,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadingChange = output();
    this.done = output();
    this.timezones = TIMEZONES_IANA;
    this.region_list = this._org.region_list;
    this.model = signal(
      {
        id: "",
        parent_id: this._org.organisation.id,
        display_name: "",
        timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "",
        location: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.parent_id);
      required(p.display_name);
    });
    this.filtered_timezones = computed(
      () => {
        const timezone = (this.model().timezone || "").toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const building = this.building();
      if (!building)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: building.id ?? m.id,
        parent_id: building.parent_id ?? m.parent_id,
        display_name: building.display_name ?? m.display_name,
        timezone: building.timezone ?? m.timezone,
        location: building.location ?? m.location
      }));
    });
    effect(() => {
      if (this.save())
        untracked(() => this.saveChanges());
    });
  }
  async saveChanges() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      parent_id: m.parent_id || this._org.organisation.id
    }));
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    const data = this.model();
    this.loading.set(true);
    this.loadingChange.emit(true);
    const body = __spreadProps(__spreadValues({}, data), {
      tags: ["building"],
      name: `BLD ${Mt().description} ${data.display_name}`
    });
    const building = await (data.id ? mh(data.id, body) : gh(body)).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.BUILDINGS_SAVE_ERROR", {
        error: e.message || e.error || e
      }));
      this.loading.set(false);
      this.loadingChange.emit(false);
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_SAVE_SUCCESS"));
    this.loading.set(false);
    this.loadingChange.emit(false);
    this.done.emit(building);
  }
  static {
    this.\u0275fac = function BuildingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingFormComponent, selectors: [["building-form"]], inputs: { building: [1, "building"], save: [1, "save"], loadingInput: [1, "loading", "loadingInput"] }, outputs: { loadingChange: "loadingChange", done: "done" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 24, consts: [["auto", "matAutocomplete"], ["building", ""], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "address"], ["for", "region"], [3, "formField", "placeholder"]], template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 1);
        \u0275\u0275conditionalCreate(1, BuildingFormComponent_Conditional_1_Template, 12, 11, "div", 2);
        \u0275\u0275elementStart(2, "div", 2)(3, "label", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-form-field", 4);
        \u0275\u0275element(7, "input", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 2)(10, "label", 3);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 4)(14, "icon", 6);
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(20, BuildingFormComponent_For_21_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(22, BuildingFormComponent_Conditional_22_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 2)(24, "label", 10);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 4);
        \u0275\u0275element(28, "input", 5);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const auto_r4 = \u0275\u0275reference(19);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.region_list().length ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 12, "FORM.DISPLAY_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 14, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, "COMMON.TIMEZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.timezone)("placeholder", \u0275\u0275pipeBind1(17, 18, "COMMON.TIMEZONE"))("matAutocomplete", auto_r4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered_timezones());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.timezones.length ? 22 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "COMMON.LOCATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 22, "COMMON.LOCATION"))("formField", ctx.form.location);
        \u0275\u0275control();
      }
    }, dependencies: [
      IconComponent,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatSelectModule,
      MatSelect,
      MatInputModule,
      MatInput,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingFormComponent, [{
    type: Component,
    args: [{ selector: "building-form", template: `
        <form building>
            @if (region_list().length) {
                <div class="flex flex-col">
                    <label for="region">
                        {{ 'RESOURCE.REGION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.parent_id"
                            [placeholder]="'COMMON.REGION_SELECT' | translate"
                        >
                                <mat-option [value]="default_parent">
                                    {{ 'COMMON.NONE' | translate }}
                                </mat-option>
                                @for (
                                    region of region_list();
                                    track region.id
                                ) {
                                    <mat-option [value]="region.id">
                                        {{ region.display_name || region.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="display-name"
                        >{{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">{{
                        'COMMON.TIMEZONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            [formField]="form.timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
                            <mat-option [value]="tz">{{ tz }}</mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                <div class="flex flex-col">
                    <label for="address">
                        {{ 'COMMON.LOCATION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'COMMON.LOCATION' | translate"
                            [formField]="form.location"
                        />
                    </mat-form-field>
                </div>
            </form>
    `, imports: [
      TranslatePipe,
      IconComponent,
      FormField,
      MatFormFieldModule,
      MatAutocompleteModule,
      MatSelectModule,
      MatInputModule
    ] }]
  }], () => [], { building: [{ type: Input, args: [{ isSignal: true, alias: "building", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], loadingInput: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], loadingChange: [{ type: Output, args: ["loadingChange"] }], done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingFormComponent, { className: "BuildingFormComponent", filePath: "apps/concierge/src/app/building-manager/building-form.component.ts", lineNumber: 120 });
})();

// apps/concierge/src/app/building-manager/building-modal.component.ts
var BuildingModalComponent = class _BuildingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save_state = signal(
      0,
      ...ngDevMode ? [{ debugName: "save_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = signal(
      this._data,
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = (d) => this._dialog_ref.close(d);
    this.save = () => this.save_state.set(Date.now());
  }
  static {
    this.\u0275fac = function BuildingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingModalComponent, selectors: [["building-modal"]], decls: 4, vars: 9, consts: [[3, "confirm", "heading", "loading"], [3, "loadingChange", "done", "building", "save", "loading"]], template: function BuildingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function BuildingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "building-form", 1);
        \u0275\u0275twoWayListener("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.loading, $event) || (ctx.loading = $event);
          return $event;
        });
        \u0275\u0275listener("done", function BuildingModalComponent_Template_building_form_done_3_listener($event) {
          return ctx.close($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 5, ctx.building().id ? "APP.CONCIERGE.BUILDINGS_EDIT" : "APP.CONCIERGE.BUILDINGS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 7, "APP.CONCIERGE.BUILDINGS_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("building", ctx.building())("save", ctx.save_state());
        \u0275\u0275twoWayProperty("loading", ctx.loading);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      BuildingFormComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingModalComponent, [{
    type: Component,
    args: [{ selector: "building-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (building().id
                    ? 'APP.CONCIERGE.BUILDINGS_EDIT'
                    : 'APP.CONCIERGE.BUILDINGS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.BUILDINGS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <building-form
                [building]="building()"
                [save]="save_state()"
                [(loading)]="loading"
                (done)="close($event)"
            />
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      BuildingFormComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingModalComponent, { className: "BuildingModalComponent", filePath: "apps/concierge/src/app/building-manager/building-modal.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/building-manager/item-list-modal.component.ts
function ItemListModalComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "input", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ItemListModalComponent_For_12_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateItem(\u0275$index_18_r2, "name", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "input", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function ItemListModalComponent_For_12_Template_input_ngModelChange_3_listener($event) {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateItem(\u0275$index_18_r2, "email", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ItemListModalComponent_For_12_Template_button_click_5_listener() {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(\u0275$index_18_r2));
    });
    \u0275\u0275elementStart(7, "icon", 9);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.SUPPORT_TYPES_NAME"))("ngModel", item_r4.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.SUPPORT_TYPES_EMAIL"))("ngModel", item_r4.email);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 9, "APP.CONCIERGE.SUPPORT_TYPES_REMOVE"));
  }
}
var ItemListModalComponent = class _ItemListModalComponent {
  constructor() {
    this._bld_id = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._dialog_ref = inject(MatDialogRef);
    this.item_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "item_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.identify = (index, _item) => index;
  }
  async ngOnInit() {
    const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    const concierge_key = this._settings.get("app.concierge_metadata_key") || this._settings.get("app.concierge_app") || "concierge_app";
    const [workplace, concierge] = await Promise.all([
      ac(this._bld_id, metadata_key),
      ac(this._bld_id, concierge_key)
    ]);
    const [items = []] = [workplace, concierge].map((metadata) => metadata?.details?.support_issue_types).filter((list) => list?.length);
    this.item_list.set(items);
  }
  addItem() {
    this.item_list.update((items) => [...items, { name: "", email: "" }]);
  }
  removeItem(index) {
    this.item_list.update((items) => items.filter((_, i) => i !== index));
  }
  updateItem(index, key, value) {
    this.item_list.update((items) => items.map((item, i) => i === index ? __spreadProps(__spreadValues({}, item), { [key]: value }) : item));
  }
  async save() {
    const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    const concierge_key = this._settings.get("app.concierge_metadata_key") || this._settings.get("app.concierge_app") || "concierge_app";
    this.loading.set(true);
    const items = this.item_list().filter((_) => _);
    try {
      for (const key of [metadata_key, concierge_key]) {
        const metadata = await ac(this._bld_id, key);
        await hc(this._bld_id, {
          name: key,
          details: __spreadProps(__spreadValues({}, metadata.details || {}), {
            support_issue_types: items
          }),
          description: metadata.description || ""
        });
      }
      this._dialog_ref.close();
    } catch (e) {
      notifyError(`Failed to save issue types. ${e}`);
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = function ItemListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListModalComponent, selectors: [["item-list-modal"]], decls: 16, vars: 6, consts: [["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[50vh]", "w-xl", "space-y-2", "overflow-auto", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["type", "text", 1, "border-base-200", "flex-1", "rounded-sm", "border", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "email", 1, "border-base-200", "flex-2", "rounded-sm", "border", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], [1, "text-2xl"]], template: function ItemListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 1)(8, "button", 2);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_8_listener() {
          return ctx.addItem();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(11, ItemListModalComponent_For_12_Template, 9, 11, "div", 3, ctx.identify, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 4)(14, "button", 5);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_14_listener() {
          return ctx.save();
        });
        \u0275\u0275text(15, "Save");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.SUPPORT_TYPES_HEADER"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.CONCIERGE.SUPPORT_TYPES_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.item_list());
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemListModalComponent, [{
    type: Component,
    args: [{ selector: "item-list-modal", template: `
        <header>
            <h2>{{ 'APP.CONCIERGE.SUPPORT_TYPES_HEADER' | translate }}</h2>
            <button icon matRipple mat-dialog-close="">
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[50vh] w-xl space-y-2 overflow-auto p-2">
            <button btn matRipple class="w-full" (click)="addItem()">
                {{ 'APP.CONCIERGE.SUPPORT_TYPES_ADD' | translate }}
            </button>
            @for (
                item of item_list();
                track identify(i, item);
                let i = $index
            ) {
                <div class="flex w-full items-center space-x-2">
                    <input
                        type="text"
                        class="border-base-200 flex-1 rounded-sm border px-4 py-3"
                        [placeholder]="
                            'APP.CONCIERGE.SUPPORT_TYPES_NAME' | translate
                        "
                        [ngModel]="item.name"
                        (ngModelChange)="updateItem(i, 'name', $event)"
                    />
                    <input
                        type="email"
                        class="border-base-200 flex-2 rounded-sm border px-4 py-3"
                        [placeholder]="
                            'APP.CONCIERGE.SUPPORT_TYPES_EMAIL' | translate
                        "
                        [ngModel]="item.email"
                        (ngModelChange)="updateItem(i, 'email', $event)"
                    />
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.SUPPORT_TYPES_REMOVE' | translate
                        "
                        class="border-error text-error h-12 w-12 rounded-sm border"
                        (click)="removeItem(i)"
                    >
                        <icon class="text-2xl">delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end border-t p-2"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      FormsModule,
      TranslatePipe,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListModalComponent, { className: "ItemListModalComponent", filePath: "apps/concierge/src/app/building-manager/item-list-modal.component.ts", lineNumber: 81 });
})();

// apps/concierge/src/app/building-manager/building-management.service.ts
var BuildingManagementService = class _BuildingManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.filtered_buildings = computed(
      () => {
        this._org.initialised();
        const regions = this._org.region_list();
        let list = this._org.building_list();
        const options = this._options();
        if (options.zone) {
          list = list.filter((_) => _.parent_id === options.zone);
        }
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        for (const bld of list) {
          const parent = regions.find((_) => _.id === bld.parent_id);
          if (parent) {
            bld.region = parent.display_name || parent.name;
          }
          bld.level_count = this._org.levelsForBuilding(bld)?.length || 0;
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "filtered_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editBuilding(building = new en()) {
    const ref = this._dialog.open(BuildingModalComponent, {
      data: building
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  async editBuildingMetadata(zone = new en()) {
    const { AppSettingsModalComponent } = await import("./app-settings-modal.component-E35EGNQL.js");
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  async setAutoRelease(building) {
    if (!building?.id)
      return;
    const { AutoReleaseSettingsModalComponent } = await import("./auto-release-settings-modal.component-WGADPTL5.js");
    this._dialog.open(AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  async setInduction(building) {
    if (!building?.id)
      return;
    const { InductionSettingsModalComponent } = await import("./induction-settings-modal.component-C5LLVBB6.js");
    this._dialog.open(InductionSettingsModalComponent, {
      data: building.id
    });
  }
  setSupportIssueTypes(building) {
    if (!building?.id)
      return;
    this._dialog.open(ItemListModalComponent, {
      data: building.id
    });
  }
  async removeBuilding(building) {
    const removed = await confirmAction(this._dialog, {
      title: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_MSG", {
        name: building.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, {
      loading: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_LOADING"),
      action: () => yh(building.id),
      error: (e) => i18n("APP.CONCIERGE.BUILDINGS_REMOVE_ERROR", {
        error: errorText(e)
      })
    });
    if (!removed)
      return;
    this._org.removeZone({ id: building.id, tags: ["building"] });
    notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_SUCCESS"));
  }
  static {
    this.\u0275fac = function BuildingManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuildingManagementService, factory: _BuildingManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/building-manager/building-list.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = () => ({ key: "location", name: "Location", size: "13.5rem" });
var _c2 = (a0, a1) => ({ key: "timezone", name: a0, size: "12rem", content: a1 });
var _c3 = (a0) => ({ key: "region", name: a0, size: "11rem", sortable: false });
var _c4 = (a0) => ({ key: "level_count", name: a0, size: "5.5rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function BuildingListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function BuildingListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5);
  }
}
function BuildingListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "level");
    \u0275\u0275pipe(2, "level");
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, data_r6)?.display_name || \u0275\u0275pipeBind1(2, 3, data_r6)?.name, " ");
  }
}
function BuildingListComponent_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275property("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.IMAGES_EMPTY"));
  }
}
function BuildingListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BuildingListComponent_ng_template_14_Conditional_0_Template, 1, 1, "img", 14);
    \u0275\u0275conditionalCreate(1, BuildingListComponent_ng_template_14_Conditional_1_Template, 3, 3, "span", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(data_r7.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r7.length ? 1 : -1);
  }
}
function BuildingListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 18)(7, "div", 19)(8, "icon", 20);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 6)(15, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_15_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r9));
    });
    \u0275\u0275elementStart(16, "div", 19)(17, "icon", 20);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_22_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r9));
    });
    \u0275\u0275elementStart(23, "div", 19)(24, "icon", 20);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_29_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r9));
    });
    \u0275\u0275elementStart(30, "div", 19)(31, "icon", 20);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_36_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r9));
    });
    \u0275\u0275elementStart(37, "div", 19)(38, "icon", 20);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_43_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBuilding(row_r9));
    });
    \u0275\u0275elementStart(44, "div", 19)(45, "icon", 20);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_50_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAutoRelease(row_r9));
    });
    \u0275\u0275elementStart(51, "div", 19)(52, "icon", 22);
    \u0275\u0275text(53, " release_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_57_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInduction(row_r9));
    });
    \u0275\u0275elementStart(58, "div", 19)(59, "icon", 22);
    \u0275\u0275text(60, " badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_64_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSupportIssueTypes(row_r9));
    });
    \u0275\u0275elementStart(65, "div", 19)(66, "icon", 22);
    \u0275\u0275text(67, " support_agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_71_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBuilding(row_r9));
    });
    \u0275\u0275elementStart(72, "div", 23)(73, "icon", 24);
    \u0275\u0275text(74, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(5);
    const app_settings_menu_r11 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 16, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 18, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 20, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 22, "APP.CONCIERGE.BUILDINGS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 24, "APP.CONCIERGE.BUILDINGS_AUTO_RELEASE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 26, "APP.CONCIERGE.BUILDINGS_INDUCTION"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 28, "APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 30, "APP.CONCIERGE.BUILDINGS_REMOVE"), " ");
  }
}
var BuildingListComponent = class _BuildingListComponent {
  constructor() {
    this._manager = inject(BuildingManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = (building) => this._manager.editBuilding(building);
    this.editBuildingMetadata = (building) => this._manager.editBuildingMetadata(building);
    this.removeBuilding = (building) => this._manager.removeBuilding(building);
    this.setAutoRelease = (building) => this._manager.setAutoRelease(building);
    this.setInduction = (building) => this._manager.setInduction(building);
    this.setSupportIssueTypes = (building) => this._manager.setSupportIssueTypes(building);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_COPIED_ID"));
    };
  }
  async editWorkplaceSettings(zone) {
    const { WorkplaceSettingsFormModalComponent } = await import("./workplace-settings-form-modal.component-ALG6TBCY.js");
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone }
    });
  }
  async editConciergeSettings(zone) {
    const { ConciergeSettingsFormModalComponent } = await import("./concierge-settings-form-modal.component-X67HQMY3.js");
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone }
    });
  }
  async editBookingPanelSettings(zone) {
    const { BookingPanelSettingsModalComponent } = await import("./booking-panel-settings-modal.component-KQLTZYEL.js");
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone }
    });
  }
  async editVisitorKioskSettings(zone) {
    const { VisitorKioskSettingsFormModalComponent } = await import("./visitor-kiosk-settings-form-modal.component-Q3NIFHJ7.js");
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone }
    });
  }
  static {
    this.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], decls: 18, vars: 34, consts: [["name_template", ""], ["timezone_template", ""], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "w-full", "min-w-248", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["auth", "", 1, "max-h-12", "max-w-32", 3, "source"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 7);
        \u0275\u0275element(1, "simple-table", 8);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BuildingListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, BuildingListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, BuildingListComponent_ng_template_12_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, BuildingListComponent_ng_template_14_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, BuildingListComponent_ng_template_16_Template, 78, 32, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r12 = \u0275\u0275reference(9);
        const timezone_template_r13 = \u0275\u0275reference(11);
        const action_template_r14 = \u0275\u0275reference(17);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.buildings())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.BUILDINGS_EMPTY"))("columns", \u0275\u0275pureFunction6(27, _c6, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.BUILDINGS_NAME"), name_template_r12), \u0275\u0275pureFunction0(17, _c1), \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pipeBind1(4, 8, "COMMON.TIMEZONE"), timezone_template_r13), \u0275\u0275pureFunction1(21, _c3, \u0275\u0275pipeBind1(5, 10, "RESOURCE.REGION")), \u0275\u0275pureFunction1(23, _c4, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.BUILDINGS_LEVELS")), \u0275\u0275pureFunction1(25, _c5, action_template_r14)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      AuthenticatedImageDirective,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      TranslatePipe,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingListComponent, [{
    type: Component,
    args: [{ selector: "building-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block w-full min-w-248 text-sm"
                [data]="buildings()"
                [empty_message]="'APP.CONCIERGE.BUILDINGS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.BUILDINGS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'location',
                        name: 'Location',
                        size: '13.5rem',
                    },
                    {
                        key: 'timezone',
                        name: 'COMMON.TIMEZONE' | translate,
                        size: '12rem',
                        content: timezone_template,
                    },
                    {
                        key: 'region',
                        name: 'RESOURCE.REGION' | translate,
                        size: '11rem',
                        sortable: false,
                    },
                    {
                        key: 'level_count',
                        name: 'APP.CONCIERGE.BUILDINGS_LEVELS' | translate,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #timezone_template let-data="data">
            <div class="p-4 font-mono text-xs">{{ data }}</div>
        </ng-template>
        <ng-template #level_template let-data="data">
            {{ (data | level)?.display_name || (data | level)?.name }}
        </ng-template>
        <ng-template #image_template let-data="data">
            @if (data.length) {
                <img auth [source]="data[0]" class="max-h-12 max-w-32" />
            }
            @if (!data.length) {
                <span class="opacity-30">{{
                    'COMMON.IMAGES_EMPTY' | translate
                }}</span>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center p-2">
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <mat-menu #app_settings_menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="editWorkplaceSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editConciergeSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editBookingPanelSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editVisitorKioskSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">qr_code</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <button mat-menu-item (click)="editBuilding(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div>
                                {{ 'APP.CONCIERGE.BUILDINGS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setAutoRelease(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                release_alert
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_AUTO_RELEASE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setInduction(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                badge
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_INDUCTION'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setSupportIssueTypes(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                support_agent
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeBuilding(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error text-xl"> delete </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_REMOVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      AuthenticatedImageDirective,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      LevelPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/building-manager/building-list.component.ts", lineNumber: 246 });
})();

// apps/concierge/src/app/level-manager/level-management.service.ts
var LevelManagementService = class _LevelManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.level_list = this._org.level_list;
    this._level_params = computed(
      () => ({
        buildings: this._org.building_list(),
        levels: this.level_list(),
        options: this._options()
      }),
      ...ngDevMode ? [{ debugName: "_level_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_params_debounced = debounced(this._level_params, 300);
    this._filtered_levels = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_filtered_levels" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._level_params_debounced.value(),
      defaultValue: [],
      loader: async ({ params }) => {
        const { buildings, options } = params;
        let list = params.levels.filter((_) => buildings.find((bld) => bld.id === _.parent_id));
        if (options.zone) {
          list = list.filter((_) => _.parent_id === options.zone);
        }
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        for (const level of list) {
          const parent = this._org.buildings.find((bld) => bld.id === level.parent_id);
          if (parent) {
            level.building = parent.display_name || parent.name;
          }
          level.room_count = await nextValueFrom(requestSpacesForZone(level.id)).then((spaces) => spaces.length);
        }
        return list;
      }
    }));
    this.filtered_levels = this._filtered_levels.value;
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editLevel(level = new en()) {
    const ref = this._dialog.open(LevelModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  async removeLevel(level) {
    const removed = await confirmAction(this._dialog, {
      title: i18n("APP.CONCIERGE.LEVELS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.LEVELS_REMOVE_MSG", {
        name: level.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, {
      loading: i18n("APP.CONCIERGE.LEVELS_REMOVE_LOADING"),
      action: () => yh(level.id),
      error: (e) => i18n("APP.CONCIERGE.LEVELS_REMOVE_ERROR", {
        error: errorText(e)
      })
    });
    if (!removed)
      return;
    this._org.removeZone({ id: level.id, tags: ["level"] });
    notifySuccess(i18n("APP.CONCIERGE.LEVELS_REMOVE_SUCCESS"));
  }
  static {
    this.\u0275fac = function LevelManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LevelManagementService, factory: _LevelManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/level-manager/level-list.component.ts
var _c02 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "building", name: a0, size: "16rem" });
var _c22 = (a0, a1) => ({ key: "parking", name: a0, content: a1, size: "5rem", sortable: false });
var _c32 = (a0) => ({ key: "room_count", name: a0, size: "6rem" });
var _c42 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function LevelListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function LevelListComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LevelListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LevelListComponent_ng_template_10_Conditional_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional(row_r5.tags?.includes("parking") ? 0 : -1);
  }
}
function LevelListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_6_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevel(row_r7));
    });
    \u0275\u0275elementStart(7, "div", 14)(8, "icon", 15);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_13_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevelMap(row_r7));
    });
    \u0275\u0275elementStart(14, "div", 14)(15, "icon", 15);
    \u0275\u0275text(16, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_20_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r7));
    });
    \u0275\u0275elementStart(21, "div", 14)(22, "icon", 17);
    \u0275\u0275text(23, " top_panel_open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_27_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLevel(row_r7));
    });
    \u0275\u0275elementStart(28, "div", 14)(29, "icon", 18);
    \u0275\u0275text(30, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "APP.CONCIERGE.LEVELS_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r7.map_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 8, "APP.CONCIERGE.MAPS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 10, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 12, "APP.CONCIERGE.LEVELS_REMOVE"), " ");
  }
}
var LevelListComponent = class _LevelListComponent {
  constructor() {
    this._manager = inject(LevelManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this.levels = this._manager.filtered_levels;
    this.editLevel = (level) => this._manager.editLevel(level);
    this.editLevelMap = (level) => this._router.navigate(["/map-management", level.id]);
    this.removeLevel = (level) => this._manager.removeLevel(level);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.LEVELS_COPIED_ID"));
    };
  }
  async editBookingPanelSettings(level) {
    const { BookingPanelSettingsModalComponent } = await import("./booking-panel-settings-modal.component-KQLTZYEL.js");
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: level }
    });
  }
  static {
    this.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["level-list"]], decls: 14, vars: 32, consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "mx-auto", "flex", "items-center", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click", "disabled"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-error", "text-2xl"]], template: function LevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, LevelListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, LevelListComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, LevelListComponent_ng_template_12_Template, 34, 14, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(9);
        const parking_template_r10 = \u0275\u0275reference(11);
        const action_template_r11 = \u0275\u0275reference(13);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.levels())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.LEVELS_EMPTY"))("columns", \u0275\u0275pureFunction5(26, _c52, \u0275\u0275pureFunction2(14, _c02, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.LEVELS_NAME"), name_template_r9), \u0275\u0275pureFunction1(17, _c12, \u0275\u0275pipeBind1(4, 8, "RESOURCE.BUILDING")), \u0275\u0275pureFunction2(19, _c22, \u0275\u0275pipeBind1(5, 10, "RESOURCE.PARKING"), parking_template_r10), \u0275\u0275pureFunction1(22, _c32, \u0275\u0275pipeBind1(6, 12, "RESOURCE.ROOMS")), \u0275\u0275pureFunction1(24, _c42, action_template_r11)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelListComponent, [{
    type: Component,
    args: [{ selector: "level-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-3xl text-sm"
                [data]="levels()"
                [empty_message]="'APP.CONCIERGE.LEVELS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.LEVELS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building',
                        name: 'RESOURCE.BUILDING' | translate,
                        size: '16rem',
                    },
                    {
                        key: 'parking',
                        name: 'RESOURCE.PARKING' | translate,
                        content: parking_template,
                        size: '5rem',
                        sortable: false,
                    },
                    {
                        key: 'room_count',
                        name: 'RESOURCE.ROOMS' | translate,
                        size: '6rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.tags?.includes('parking')) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center gap-2 p-2">
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LEVELS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        [disabled]="!row.map_id"
                        (click)="editLevelMap(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">map</icon>
                            <span>{{
                                'APP.CONCIERGE.MAPS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        (click)="editBookingPanelSettings(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-2xl"
                            >
                                top_panel_open
                            </icon>
                            <span>{{
                                'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl"> delete </icon>
                            <span>
                                {{ 'APP.CONCIERGE.LEVELS_REMOVE' | translate }}
                            </span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatMenuModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "apps/concierge/src/app/level-manager/level-list.component.ts", lineNumber: 140 });
})();

// apps/concierge/src/app/region-manager/region-modal.component.ts
function RegionModalComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r1 = ctx.$implicit;
    \u0275\u0275property("value", tz_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r1);
  }
}
function RegionModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
var RegionModalComponent = class _RegionModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
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
    this.timezones = TIMEZONES_IANA;
    this.model = signal(
      {
        id: this._data?.id || "",
        display_name: this._data?.display_name || "",
        timezone: this._data?.timezone || Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "",
        parent_id: this._org.organisation.id
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.display_name);
    });
    this.filtered_timezones = computed(
      () => {
        const timezone = (this.model().timezone || "").toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
    }
    const data = this.model();
    data.tags = ["region"];
    this.loading.set(true);
    const body = __spreadProps(__spreadValues({}, data), {
      name: `REGION ${Mt().description} ${data.display_name}`
    });
    try {
      const resp = await (data.id ? mh(data.id, body) : gh(body));
      this._dialog_ref.close(resp);
    } catch (e) {
      notifyError(`Failed to save region. ${errorText(e)}`);
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RegionModalComponent_BaseFactory;
      return function RegionModalComponent_Factory(__ngFactoryType__) {
        return (\u0275RegionModalComponent_BaseFactory || (\u0275RegionModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RegionModalComponent)))(__ngFactoryType__ || _RegionModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionModalComponent, selectors: [["region-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 22, consts: [["auto", "matAutocomplete"], [3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"]], template: function RegionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function RegionModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 4);
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 2)(12, "label", 3);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 4)(16, "icon", 6);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 7);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(22, RegionModalComponent_For_23_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(24, RegionModalComponent_Conditional_24_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const auto_r2 = \u0275\u0275reference(21);
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 10, ctx.model().id ? "APP.CONCIERGE.REGIONS_EDIT" : "APP.CONCIERGE.REGIONS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 12, "APP.CONCIERGE.REGION_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "FORM.DISPLAY_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 16, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "COMMON.TIMEZONE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.timezone)("placeholder", \u0275\u0275pipeBind1(19, 20, "COMMON.TIMEZONE"))("matAutocomplete", auto_r2);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered_timezones());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.timezones.length ? 24 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      IconComponent,
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionModalComponent, [{
    type: Component,
    args: [{ selector: "region-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.REGIONS_EDIT'
                    : 'APP.CONCIERGE.REGIONS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.REGION_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'COMMON.TIMEZONE' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            [formField]="form.timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
                            <mat-option [value]="tz">{{ tz }}</mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      IconComponent,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionModalComponent, { className: "RegionModalComponent", filePath: "apps/concierge/src/app/region-manager/region-modal.component.ts", lineNumber: 89 });
})();

// apps/concierge/src/app/region-manager/region-management.service.ts
var RegionManagementService = class _RegionManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.filtered_regions = computed(
      () => {
        const buildings = this._org.building_list();
        let list = this._org.region_list();
        const options = this._options();
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        for (const region of list) {
          region.building_count = buildings.filter((bld) => bld.parent_id === region.id).length;
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "filtered_regions" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editRegion(region = new en()) {
    const ref = this._dialog.open(RegionModalComponent, {
      data: region
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  async editRegionMetadata(region = new en()) {
    const { AppSettingsModalComponent } = await import("./app-settings-modal.component-E35EGNQL.js");
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone: region }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  async removeRegion(region) {
    const removed = await confirmAction(this._dialog, {
      title: i18n("APP.CONCIERGE.REGIONS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.REGIONS_REMOVE_MSG", {
        name: region.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, {
      loading: i18n("APP.CONCIERGE.REGIONS_REMOVE_LOADING"),
      action: () => yh(region.id),
      error: (e) => i18n("APP.CONCIERGE.REGIONS_REMOVE_ERROR", {
        error: errorText(e)
      })
    });
    if (!removed)
      return;
    this._org.removeZone({ id: region.id, tags: ["region"] });
    notifySuccess(i18n("APP.CONCIERGE.REGIONS_REMOVE_SUCCESS"));
  }
  static {
    this.\u0275fac = function RegionManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegionManagementService, factory: _RegionManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/region-manager/region-list.component.ts
var _c03 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c13 = (a0) => ({ key: "building_count", name: a0, size: "8rem" });
var _c23 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c33 = (a0, a1, a2) => [a0, a1, a2];
function RegionListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_6_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function RegionListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 12)(7, "div", 13)(8, "icon", 14);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 3)(15, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_15_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r6));
    });
    \u0275\u0275elementStart(16, "div", 13)(17, "icon", 14);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_22_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r6));
    });
    \u0275\u0275elementStart(23, "div", 13)(24, "icon", 14);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_29_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r6));
    });
    \u0275\u0275elementStart(30, "div", 13)(31, "icon", 14);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_36_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r6));
    });
    \u0275\u0275elementStart(37, "div", 13)(38, "icon", 14);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_43_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRegion(row_r6));
    });
    \u0275\u0275elementStart(44, "div", 13)(45, "icon", 14);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_50_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRegion(row_r6));
    });
    \u0275\u0275elementStart(51, "div", 16)(52, "icon", 17);
    \u0275\u0275text(53, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275reference(5);
    const app_settings_menu_r8 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 11, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 13, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 15, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 17, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 19, "APP.CONCIERGE.REGIONS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 21, "APP.CONCIERGE.REGIONS_REMOVE"), " ");
  }
}
var RegionListComponent = class _RegionListComponent {
  constructor() {
    this._manager = inject(RegionManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this.regions = this._manager.filtered_regions;
    this.editRegion = (region) => this._manager.editRegion(region);
    this.removeRegion = (region) => this._manager.removeRegion(region);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Region ID copied to clipboard.");
    };
  }
  async editWorkplaceSettings(zone) {
    const { WorkplaceSettingsFormModalComponent } = await import("./workplace-settings-form-modal.component-ALG6TBCY.js");
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone }
    });
  }
  async editConciergeSettings(zone) {
    const { ConciergeSettingsFormModalComponent } = await import("./concierge-settings-form-modal.component-X67HQMY3.js");
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone }
    });
  }
  async editBookingPanelSettings(zone) {
    const { BookingPanelSettingsModalComponent } = await import("./booking-panel-settings-modal.component-KQLTZYEL.js");
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone }
    });
  }
  async editVisitorKioskSettings(zone) {
    const { VisitorKioskSettingsFormModalComponent } = await import("./visitor-kiosk-settings-form-modal.component-Q3NIFHJ7.js");
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone }
    });
  }
  static {
    this.\u0275fac = function RegionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionListComponent, selectors: [["region-list"]], decls: 10, vars: 21, consts: [["name_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-lg", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "w-full", "justify-end", "space-x-2", "p-1"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function RegionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275element(5, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, RegionListComponent_ng_template_6_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, RegionListComponent_ng_template_8_Template, 57, 23, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(7);
        const action_template_r10 = \u0275\u0275reference(9);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.regions())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.REGIONS_EMPTY"))("columns", \u0275\u0275pureFunction3(17, _c33, \u0275\u0275pureFunction2(10, _c03, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.REGIONS_NAME"), name_template_r9), \u0275\u0275pureFunction1(13, _c13, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.REGIONS_BUILDINGS")), \u0275\u0275pureFunction1(15, _c23, action_template_r10)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionListComponent, [{
    type: Component,
    args: [{ selector: "region-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-lg text-sm"
                [data]="regions()"
                [empty_message]="'APP.CONCIERGE.REGIONS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.REGIONS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building_count',
                        name: 'APP.CONCIERGE.REGIONS_BUILDINGS' | translate,
                        size: '8rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex w-full justify-end space-x-2 p-1">
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <mat-menu #app_settings_menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="editWorkplaceSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editConciergeSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editBookingPanelSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editVisitorKioskSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">qr_code</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <button mat-menu-item (click)="editRegion(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div>
                                {{ 'APP.CONCIERGE.REGIONS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeRegion(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error text-xl"> delete </icon>
                            <div>
                                {{ 'APP.CONCIERGE.REGIONS_REMOVE' | translate }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatMenuModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionListComponent, { className: "RegionListComponent", filePath: "apps/concierge/src/app/region-manager/region-list.component.ts", lineNumber: 165 });
})();

// apps/concierge/src/app/zone-manager/zone-manager.component.ts
function ZoneManagerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon");
    \u0275\u0275text(2, "rule_settings");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const app_settings_menu_r2 = \u0275\u0275reference(25);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r2)("matTooltip", "Organisation App Settings");
  }
}
function ZoneManagerComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "region-list", 11);
  }
}
function ZoneManagerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "building-list", 11);
  }
}
function ZoneManagerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "level-list", 11);
  }
}
var ZoneManagerComponent = class _ZoneManagerComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._region_service = inject(RegionManagementService);
    this._building_service = inject(BuildingManagementService);
    this._level_service = inject(LevelManagementService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.selected_tab = signal(
      0,
      ...ngDevMode ? [{ debugName: "selected_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.TAB_NAMES = ["regions", "buildings", "levels"];
    this.addButtonText = computed(
      () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0)
          return "APP.CONCIERGE.REGIONS_ADD";
        if (tab_index === 1)
          return "APP.CONCIERGE.BUILDINGS_ADD";
        return "APP.CONCIERGE.LEVELS_ADD";
      },
      ...ngDevMode ? [{ debugName: "addButtonText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.addButtonIcon = computed(
      () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0)
          return "shadow_add";
        if (tab_index === 1)
          return "domain_add";
        return "library_add";
      },
      ...ngDevMode ? [{ debugName: "addButtonIcon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.addItem = () => {
      const tab_index = this.selected_tab();
      if (tab_index === 0)
        this._region_service.editRegion();
      else if (tab_index === 1)
        this._building_service.editBuilding();
      else
        this._level_service.editLevel();
    };
  }
  onTabChange(index) {
    this.selected_tab.set(index);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { tab: this.TAB_NAMES[index] },
      queryParamsHandling: "merge"
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("tab")) {
        const tab_name = params.get("tab");
        const tab_index = this.TAB_NAMES.indexOf(tab_name);
        if (tab_index >= 0) {
          this.selected_tab.set(tab_index);
        }
      }
    }));
  }
  async editWorkplaceSettings() {
    const { WorkplaceSettingsFormModalComponent } = await import("./workplace-settings-form-modal.component-ALG6TBCY.js");
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  async editConciergeSettings() {
    const { ConciergeSettingsFormModalComponent } = await import("./concierge-settings-form-modal.component-X67HQMY3.js");
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  async editBookingPanelSettings() {
    const { BookingPanelSettingsModalComponent } = await import("./booking-panel-settings-modal.component-KQLTZYEL.js");
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  async editVisitorKioskSettings() {
    const { VisitorKioskSettingsFormModalComponent } = await import("./visitor-kiosk-settings-form-modal.component-Q3NIFHJ7.js");
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ZoneManagerComponent_BaseFactory;
      return function ZoneManagerComponent_Factory(__ngFactoryType__) {
        return (\u0275ZoneManagerComponent_BaseFactory || (\u0275ZoneManagerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZoneManagerComponent)))(__ngFactoryType__ || _ZoneManagerComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneManagerComponent, selectors: [["", "app-zone-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 54, vars: 31, consts: [["app_settings_menu", "matMenu"], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor", "matTooltip"], ["icon", "", "default", "", "matRipple", "", "data-shortcut", "new", 3, "click", "matTooltip"], [1, "bg-base-200", "mx-8", "mb-4", "overflow-hidden", "rounded-md", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "content-area", "flex-1"], [1, "relative", "block", "h-full", "w-full"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"]], template: function ZoneManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 2)(3, "header", 3)(4, "h2", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275conditionalCreate(8, ZoneManagerComponent_Conditional_8_Template, 3, 2, "button", 6);
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_9_listener() {
          return ctx.addItem();
        });
        \u0275\u0275elementStart(11, "icon");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "mat-tab-group", 8);
        \u0275\u0275twoWayListener("selectedIndexChange", function ZoneManagerComponent_Template_mat_tab_group_selectedIndexChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selected_tab, $event) || (ctx.selected_tab = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectedIndexChange", function ZoneManagerComponent_Template_mat_tab_group_selectedIndexChange_13_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275element(14, "mat-tab", 9);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275element(16, "mat-tab", 9);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275element(18, "mat-tab", 9);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275conditionalCreate(21, ZoneManagerComponent_Conditional_21_Template, 1, 0, "region-list", 11)(22, ZoneManagerComponent_Conditional_22_Template, 1, 0, "building-list", 11)(23, ZoneManagerComponent_Conditional_23_Template, 1, 0, "level-list", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-menu", null, 0)(26, "button", 12);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_26_listener() {
          return ctx.editWorkplaceSettings();
        });
        \u0275\u0275elementStart(27, "div", 13)(28, "icon", 14);
        \u0275\u0275text(29, "meeting_room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "button", 12);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_33_listener() {
          return ctx.editConciergeSettings();
        });
        \u0275\u0275elementStart(34, "div", 13)(35, "icon", 14);
        \u0275\u0275text(36, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "button", 12);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_40_listener() {
          return ctx.editBookingPanelSettings();
        });
        \u0275\u0275elementStart(41, "div", 13)(42, "icon", 14);
        \u0275\u0275text(43, "event_busy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "button", 12);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_47_listener() {
          return ctx.editVisitorKioskSettings();
        });
        \u0275\u0275elementStart(48, "div", 13)(49, "icon", 14);
        \u0275\u0275text(50, "qr_code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, "APP.CONCIERGE.ZONES_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_tab() === 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 15, ctx.addButtonText()));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.addButtonIcon());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("selectedIndex", ctx.selected_tab);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(15, 17, "APP.CONCIERGE.TAB_REGIONS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 19, "APP.CONCIERGE.TAB_BUILDINGS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(19, 21, "APP.CONCIERGE.TAB_LEVELS"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_tab() === 0 ? 21 : ctx.selected_tab() === 1 ? 22 : ctx.selected_tab() === 2 ? 23 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 23, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 25, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 27, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 29, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
      }
    }, dependencies: [
      ApplicationSidebarComponent,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      RegionListComponent,
      BuildingListComponent,
      LevelListComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\n/*# sourceMappingURL=zone-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-zone-manager]", template: `
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pt-4 pb-2"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.ZONES_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
                        @if (selected_tab() === 0) {
                            <button
                                icon default
                                matRipple
                                [matMenuTriggerFor]="app_settings_menu"
                                [matTooltip]="'Organisation App Settings'"
                            >
                                <icon>rule_settings</icon>
                            </button>
                        }
                        <button
                            icon default
                            matRipple
                            data-shortcut="new"
                            (click)="addItem()"
                            [matTooltip]="addButtonText() | translate"
                        >
                            <icon>{{addButtonIcon()}}</icon>
                        </button>
                    </div>
                </header>
                <mat-tab-group
                    class="bg-base-200 mx-8 mb-4 overflow-hidden rounded-md"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_REGIONS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_BUILDINGS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_LEVELS' | translate"
                    ></mat-tab>
                </mat-tab-group>
                <div class="content-area flex-1">
                    @if (selected_tab() === 0) {
                        <region-list
                            class="relative block h-full w-full"
                        ></region-list>
                    } @else if (selected_tab() === 1) {
                        <building-list
                            class="relative block h-full w-full"
                        ></building-list>
                    } @else if (selected_tab() === 2) {
                        <level-list
                            class="relative block h-full w-full"
                        ></level-list>
                    }
                </div>
                <mat-menu #app_settings_menu="matMenu">
                    <button mat-menu-item (click)="editWorkplaceSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">meeting_room</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editConciergeSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">support_agent</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editBookingPanelSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">event_busy</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editVisitorKioskSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">qr_code</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </main>
        </div>
    `, imports: [
      ApplicationSidebarComponent,
      MatTabsModule,
      MatMenuModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      RegionListComponent,
      BuildingListComponent,
      LevelListComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/zone-manager/zone-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=zone-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneManagerComponent, { className: "ZoneManagerComponent", filePath: "apps/concierge/src/app/zone-manager/zone-manager.component.ts", lineNumber: 155 });
})();

// apps/concierge/src/app/zone-manager/zone-manager.routes.ts
var ROUTES = [
  { path: "", component: ZoneManagerComponent, title: "Zone Management" }
];
export {
  ROUTES
};
//# debugId=b312211f-428b-5284-a424-3c8d19c4aeb8
//# sourceMappingURL=zone-manager.routes-YY2KIPZ3.js.map
