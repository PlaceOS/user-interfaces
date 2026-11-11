import {
  TimezoneFieldComponent
} from "./chunk-V44I4D3C.js";
import {
  LevelModalComponent
} from "./chunk-AFUF7HVU.js";
import {
  appMetadataKey
} from "./chunk-I4NQU4JB.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-J3KMTA7H.js";
import {
  confirmAction,
  errorText
} from "./chunk-AI3VPQBR.js";
import {
  SimpleTableComponent
} from "./chunk-3OM2Q2QA.js";
import "./chunk-SPBRQVPO.js";
import {
  ApplicationSidebarComponent
} from "./chunk-R7CYLBWQ.js";
import "./chunk-5XMI4Y2J.js";
import "./chunk-PQ64WKJW.js";
import {
  FullscreenModalShellComponent
} from "./chunk-EL3SLOPV.js";
import "./chunk-JA6MTT3R.js";
import "./chunk-PHTCD7UF.js";
import "./chunk-M2TZLEYD.js";
import "./chunk-7UDLPPN7.js";
import "./chunk-DNUX6ZC4.js";
import "./chunk-VX7MGCOE.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-ZGSNHLJY.js";
import "./chunk-PNPURSUP.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-MMFI3LTL.js";
import "./chunk-PLU3LIJP.js";
import "./chunk-OZ73LTFS.js";
import {
  requestSpacesForZone
} from "./chunk-EBXJXMJK.js";
import "./chunk-2BIEOHB5.js";
import "./chunk-ZWQBY5NY.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CQXOQ5CV.js";
import "./chunk-IU2VY3EB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-KP62CTGD.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-EW7QYLXJ.js";
import {
  FormField,
  form,
  required
} from "./chunk-APSC5AAW.js";
import "./chunk-GWIUWBRS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6QAQELLN.js";
import {
  MatOption
} from "./chunk-45QQOFY3.js";
import "./chunk-S3CIVIET.js";
import "./chunk-5JLHGHX2.js";
import "./chunk-QC6DPQ3I.js";
import {
  TranslatePipe
} from "./chunk-E4RMWOGK.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import "./chunk-ALK6QLUK.js";
import {
  Clipboard,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService
} from "./chunk-57KIB3AS.js";
import {
  Ah,
  AsyncHandler,
  Mt,
  SettingsService,
  Sh,
  _c,
  en,
  getInvalidSignalFields,
  i18n,
  kh,
  mc,
  nextValueFrom,
  notifyError,
  notifySuccess
} from "./chunk-GJJQD6BV.js";
import "./chunk-KOAX2NOP.js";
import "./chunk-UX5PQ32A.js";
import {
  MatRippleModule
} from "./chunk-ZT4WQV5M.js";
import {
  MatRipple
} from "./chunk-EAD6DYEJ.js";
import "./chunk-THGATZR4.js";
import "./chunk-O25RF34I.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-IR32ILQ7.js";
import {
  Component,
  Injectable,
  Input,
  Output,
  ViewChild,
  computed,
  debounced,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  output,
  resource,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-AQIWUFR7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/app-settings/app-settings-menu.component.ts
var _forTrack0 = ($index, $item) => $item.kind;
function AppSettingsMenuComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function AppSettingsMenuComponent_For_2_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open(item_r2.kind));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "icon", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, item_r2.label));
  }
}
var APP_SETTINGS_MODALS = {
  workplace: async () => (await import("./workplace-settings-form-modal.component-46RXZBPS.js")).WorkplaceSettingsFormModalComponent,
  concierge: async () => (await import("./concierge-settings-form-modal.component-54KC7KCN.js")).ConciergeSettingsFormModalComponent,
  "booking-panel": async () => (await import("./booking-panel-settings-modal.component-4Y3XUARK.js")).BookingPanelSettingsModalComponent,
  "visitor-kiosk": async () => (await import("./visitor-kiosk-settings-form-modal.component-M57DPQ6W.js")).VisitorKioskSettingsFormModalComponent
};
async function openAppSettings(dialog, kind, zone) {
  const modal = await APP_SETTINGS_MODALS[kind]();
  dialog.open(modal, { data: { zone } });
}
var AppSettingsMenuComponent = class _AppSettingsMenuComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.zone = input.required(
      ...ngDevMode ? [{ debugName: "zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.menu = viewChild.required(
      MatMenu,
      ...ngDevMode ? [{ debugName: "menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ITEMS = [
      {
        kind: "workplace",
        icon: "meeting_room",
        label: "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"
      },
      {
        kind: "concierge",
        icon: "support_agent",
        label: "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"
      },
      {
        kind: "booking-panel",
        icon: "event_busy",
        label: "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"
      },
      {
        kind: "visitor-kiosk",
        icon: "qr_code",
        label: "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"
      }
    ];
  }
  open(kind) {
    return openAppSettings(this._dialog, kind, this.zone());
  }
  static {
    this.\u0275fac = function AppSettingsMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppSettingsMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSettingsMenuComponent, selectors: [["app-settings-menu"]], viewQuery: function AppSettingsMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.menu, MatMenu, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { zone: [1, "zone"] }, decls: 3, vars: 0, consts: [["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"]], template: function AppSettingsMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-menu");
        \u0275\u0275repeaterCreate(1, AppSettingsMenuComponent_For_2_Template, 7, 4, "button", 0, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.ITEMS);
      }
    }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSettingsMenuComponent, [{
    type: Component,
    args: [{
      selector: "app-settings-menu",
      template: `
        <mat-menu>
            @for (item of ITEMS; track item.kind) {
                <button mat-menu-item (click)="open(item.kind)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">{{ item.icon }}</icon>
                        <div>{{ item.label | translate }}</div>
                    </div>
                </button>
            }
        </mat-menu>
    `,
      imports: [MatMenuModule, IconComponent, TranslatePipe]
    }]
  }], null, { zone: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: true }] }], menu: [{ type: ViewChild, args: [forwardRef(() => MatMenu), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSettingsMenuComponent, { className: "AppSettingsMenuComponent", filePath: "apps/concierge/src/app/ui/app-settings/app-settings-menu.component.ts", lineNumber: 69 });
})();

// apps/concierge/src/app/building-manager/building-form.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function BuildingFormComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-select", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-option", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, BuildingFormComponent_Conditional_1_For_11_Template, 2, 2, "mat-option", 10, _forTrack02);
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
    const building = await (data.id ? kh(data.id, body) : Sh(body)).catch((e) => {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingFormComponent, selectors: [["building-form"]], inputs: { building: [1, "building"], save: [1, "save"], loadingInput: [1, "loading", "loadingInput"] }, outputs: { loadingChange: "loadingChange", done: "done" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 16, consts: [["building", ""], [1, "flex", "flex-col"], ["for", "building-form-display-name"], ["appearance", "outline"], ["id", "building-form-display-name", "matInput", "", 3, "placeholder", "formField"], ["field_id", "building-form-display-name-2", 3, "field"], ["for", "building-form-address"], ["id", "building-form-address", "matInput", "", 3, "placeholder", "formField"], ["for", "building-form-region", "id", "building-form-region-label"], ["aria-labelledby", "building-form-region-label", 3, "formField", "placeholder"], [3, "value"]], template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275conditionalCreate(1, BuildingFormComponent_Conditional_1_Template, 12, 11, "div", 1);
        \u0275\u0275elementStart(2, "div", 1)(3, "label", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-form-field", 3);
        \u0275\u0275element(7, "input", 4);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "timezone-field", 5);
        \u0275\u0275elementStart(10, "div", 1)(11, "label", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-form-field", 3);
        \u0275\u0275element(15, "input", 7);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.region_list().length ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 8, "FORM.DISPLAY_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 10, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("field", ctx.form.timezone);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "COMMON.LOCATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 14, "COMMON.LOCATION"))("formField", ctx.form.location);
        \u0275\u0275control();
      }
    }, dependencies: [
      TimezoneFieldComponent,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
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
                    <label for="building-form-region" id="building-form-region-label">
                        {{ 'RESOURCE.REGION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            aria-labelledby="building-form-region-label"
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
                    <label for="building-form-display-name"
                        >{{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="building-form-display-name"
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <timezone-field
                    field_id="building-form-display-name-2"
                    [field]="form.timezone"
                />
                <div class="flex flex-col">
                    <label for="building-form-address">
                        {{ 'COMMON.LOCATION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="building-form-address"
                            matInput
                            [placeholder]="'COMMON.LOCATION' | translate"
                            [formField]="form.location"
                        />
                    </mat-form-field>
                </div>
            </form>
    `, imports: [
      TranslatePipe,
      TimezoneFieldComponent,
      FormField,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule
    ] }]
  }], () => [], { building: [{ type: Input, args: [{ isSignal: true, alias: "building", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], loadingInput: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], loadingChange: [{ type: Output, args: ["loadingChange"] }], done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingFormComponent, { className: "BuildingFormComponent", filePath: "apps/concierge/src/app/building-manager/building-form.component.ts", lineNumber: 100 });
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
function ItemListModalComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "input", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ItemListModalComponent_For_13_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_19_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateItem(\u0275$index_19_r2, "name", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "input", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function ItemListModalComponent_For_13_Template_input_ngModelChange_3_listener($event) {
      const \u0275$index_19_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateItem(\u0275$index_19_r2, "email", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ItemListModalComponent_For_13_Template_button_click_5_listener() {
      const \u0275$index_19_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(\u0275$index_19_r2));
    });
    \u0275\u0275elementStart(8, "icon", 9);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 6, "APP.CONCIERGE.SUPPORT_TYPES_NAME"))("ngModel", item_r4.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.SUPPORT_TYPES_EMAIL"))("ngModel", item_r4.email);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 10, "APP.CONCIERGE.SUPPORT_TYPES_REMOVE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 12, "APP.CONCIERGE.SUPPORT_TYPES_REMOVE"));
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
    const metadata_key = appMetadataKey(this._settings, "workplace");
    const concierge_key = appMetadataKey(this._settings, "concierge");
    const [workplace, concierge] = await Promise.all([
      _c(this._bld_id, metadata_key),
      _c(this._bld_id, concierge_key)
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
    const metadata_key = appMetadataKey(this._settings, "workplace");
    const concierge_key = appMetadataKey(this._settings, "concierge");
    this.loading.set(true);
    const items = this.item_list().filter((_) => _);
    try {
      for (const key of [metadata_key, concierge_key]) {
        const metadata = await _c(this._bld_id, key);
        await mc(this._bld_id, {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListModalComponent, selectors: [["item-list-modal"]], decls: 17, vars: 9, consts: [["icon", "", "matRipple", "", "mat-dialog-close", "", 3, "aria-label"], [1, "h-[50vh]", "w-xl", "space-y-2", "overflow-auto", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["type", "text", 1, "border-base-200", "flex-1", "rounded-sm", "border", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "email", 1, "border-base-200", "flex-2", "rounded-sm", "border", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], [1, "text-2xl"]], template: function ItemListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 1)(9, "button", 2);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_9_listener() {
          return ctx.addItem();
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(12, ItemListModalComponent_For_13_Template, 10, 14, "div", 3, ctx.identify, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "footer", 4)(15, "button", 5);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_15_listener() {
          return ctx.save();
        });
        \u0275\u0275text(16, "Save");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.SUPPORT_TYPES_HEADER"));
        \u0275\u0275advance(2);
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(5, 5, "COMMON.CLOSE"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "APP.CONCIERGE.SUPPORT_TYPES_ADD"), " ");
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
            <button
                icon
                matRipple
                mat-dialog-close=""
                [aria-label]="'COMMON.CLOSE' | translate"
            >
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
                        [attr.aria-label]="
                            'APP.CONCIERGE.SUPPORT_TYPES_REMOVE' | translate
                        "
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListModalComponent, { className: "ItemListModalComponent", filePath: "apps/concierge/src/app/building-manager/item-list-modal.component.ts", lineNumber: 90 });
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
  async setAutoRelease(building) {
    if (!building?.id)
      return;
    const { AutoReleaseSettingsModalComponent } = await import("./auto-release-settings-modal.component-S7Z6D3Q2.js");
    this._dialog.open(AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  async setInduction(building) {
    if (!building?.id)
      return;
    const { InductionSettingsModalComponent } = await import("./induction-settings-modal.component-BIJI7FFF.js");
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
      action: () => Ah(building.id),
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
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
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
    \u0275\u0275elementStart(0, "div", 11);
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
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 3)(7, "button", 14)(8, "div", 15)(9, "icon", 16);
    \u0275\u0275text(10, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "app-settings-menu", 17, 4);
    \u0275\u0275elementStart(16, "button", 18);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_12_Template_button_click_16_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBuilding(row_r7));
    });
    \u0275\u0275elementStart(17, "div", 15)(18, "icon", 16);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 18);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_12_Template_button_click_23_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAutoRelease(row_r7));
    });
    \u0275\u0275elementStart(24, "div", 15)(25, "icon", 19);
    \u0275\u0275text(26, " release_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "button", 18);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_12_Template_button_click_30_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInduction(row_r7));
    });
    \u0275\u0275elementStart(31, "div", 15)(32, "icon", 19);
    \u0275\u0275text(33, " badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "button", 18);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_12_Template_button_click_37_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSupportIssueTypes(row_r7));
    });
    \u0275\u0275elementStart(38, "div", 15)(39, "icon", 19);
    \u0275\u0275text(40, " support_agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 18);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_12_Template_button_click_44_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBuilding(row_r7));
    });
    \u0275\u0275elementStart(45, "div", 20)(46, "icon", 21);
    \u0275\u0275text(47, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(6);
    const app_settings_menu_r9 = \u0275\u0275reference(15);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 10, "COMMON.MORE_OPTIONS"));
    \u0275\u0275advance(6);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r9.menu());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("zone", row_r7);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 14, "APP.CONCIERGE.BUILDINGS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 16, "APP.CONCIERGE.BUILDINGS_AUTO_RELEASE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 18, "APP.CONCIERGE.BUILDINGS_INDUCTION"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 20, "APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 22, "APP.CONCIERGE.BUILDINGS_REMOVE"), " ");
  }
}
var BuildingListComponent = class _BuildingListComponent {
  constructor() {
    this._manager = inject(BuildingManagementService);
    this._clipboard = inject(Clipboard);
    this.buildings = this._manager.filtered_buildings;
    this.editBuilding = (building) => this._manager.editBuilding(building);
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
  static {
    this.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], decls: 14, vars: 34, consts: [["name_template", ""], ["timezone_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "w-full", "min-w-248", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-70"], [1, "p-4", "font-mono", "text-xs"], [1, "mx-auto", "flex", "items-center", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [3, "zone"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275element(1, "simple-table", 6);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BuildingListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, BuildingListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, BuildingListComponent_ng_template_12_Template, 51, 24, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r10 = \u0275\u0275reference(9);
        const timezone_template_r11 = \u0275\u0275reference(11);
        const action_template_r12 = \u0275\u0275reference(13);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.buildings())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.BUILDINGS_EMPTY"))("columns", \u0275\u0275pureFunction6(27, _c6, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.BUILDINGS_NAME"), name_template_r10), \u0275\u0275pureFunction0(17, _c1), \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pipeBind1(4, 8, "COMMON.TIMEZONE"), timezone_template_r11), \u0275\u0275pureFunction1(21, _c3, \u0275\u0275pipeBind1(5, 10, "RESOURCE.REGION")), \u0275\u0275pureFunction1(23, _c4, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.BUILDINGS_LEVELS")), \u0275\u0275pureFunction1(25, _c5, action_template_r12)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      AppSettingsMenuComponent,
      TranslatePipe
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
                <div class="font-mono text-[0.625rem] opacity-70">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #timezone_template let-data="data">
            <div class="p-4 font-mono text-xs">{{ data }}</div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center p-2">
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                    [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu.menu()"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <app-settings-menu #app_settings_menu [zone]="row" />
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
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      AppSettingsMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/building-manager/building-list.component.ts", lineNumber: 179 });
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
      action: () => Ah(level.id),
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
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 1, "COMMON.YES"));
  }
}
function LevelListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LevelListComponent_ng_template_10_Conditional_0_Template, 4, 3, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional(row_r5.tags?.includes("parking") ? 0 : -1);
  }
}
function LevelListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 3)(7, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_7_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevel(row_r7));
    });
    \u0275\u0275elementStart(8, "div", 15)(9, "icon", 16);
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 17);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_14_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevelMap(row_r7));
    });
    \u0275\u0275elementStart(15, "div", 15)(16, "icon", 16);
    \u0275\u0275text(17, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_21_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r7));
    });
    \u0275\u0275elementStart(22, "div", 15)(23, "icon", 18);
    \u0275\u0275text(24, " top_panel_open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_28_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLevel(row_r7));
    });
    \u0275\u0275elementStart(29, "div", 15)(30, "icon", 19);
    \u0275\u0275text(31, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "COMMON.MORE_OPTIONS"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "APP.CONCIERGE.LEVELS_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r7.map_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 11, "APP.CONCIERGE.MAPS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 13, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 15, "APP.CONCIERGE.LEVELS_REMOVE"), " ");
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
    this.editBookingPanelSettings = (level) => openAppSettings(this._dialog, "booking-panel", level);
  }
  static {
    this.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["level-list"]], decls: 14, vars: 32, consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-70"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [3, "label"], [1, "mx-auto", "flex", "items-center", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click", "disabled"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-error", "text-2xl"]], template: function LevelListComponent_Template(rf, ctx) {
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
        \u0275\u0275template(8, LevelListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, LevelListComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, LevelListComponent_ng_template_12_Template, 35, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
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
                <div class="font-mono text-[0.625rem] opacity-70">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.tags?.includes('parking')) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon [label]="'COMMON.YES' | translate">done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center gap-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                    [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                >
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "apps/concierge/src/app/level-manager/level-list.component.ts", lineNumber: 148 });
})();

// apps/concierge/src/app/region-manager/region-modal.component.ts
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
      const resp = await (data.id ? kh(data.id, body) : Sh(body));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionModalComponent, selectors: [["region-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 14, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "region-modal-display-name"], ["appearance", "outline"], ["id", "region-modal-display-name", "matInput", "", 3, "placeholder", "formField"], ["field_id", "region-modal-display-name-2", 3, "field"]], template: function RegionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function RegionModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 1)(5, "label", 2);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 3);
        \u0275\u0275element(9, "input", 4);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "timezone-field", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 6, ctx.model().id ? "APP.CONCIERGE.REGIONS_EDIT" : "APP.CONCIERGE.REGIONS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 8, "APP.CONCIERGE.REGION_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "FORM.DISPLAY_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 12, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("field", ctx.form.timezone);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      TimezoneFieldComponent,
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
                    <label for="region-modal-display-name">
                        {{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="region-modal-display-name"
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <timezone-field
                    field_id="region-modal-display-name-2"
                    [field]="form.timezone"
                />
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      TimezoneFieldComponent,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionModalComponent, { className: "RegionModalComponent", filePath: "apps/concierge/src/app/region-manager/region-modal.component.ts", lineNumber: 67 });
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
      action: () => Ah(region.id),
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
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 2)(7, "button", 12)(8, "div", 13)(9, "icon", 14);
    \u0275\u0275text(10, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "app-settings-menu", 15, 3);
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_16_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRegion(row_r6));
    });
    \u0275\u0275elementStart(17, "div", 13)(18, "icon", 14);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 16);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_23_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRegion(row_r6));
    });
    \u0275\u0275elementStart(24, "div", 17)(25, "icon", 18);
    \u0275\u0275text(26, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r7 = \u0275\u0275reference(6);
    const app_settings_menu_r8 = \u0275\u0275reference(15);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "COMMON.MORE_OPTIONS"));
    \u0275\u0275advance(6);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r8.menu());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("zone", row_r6);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 11, "APP.CONCIERGE.REGIONS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 13, "APP.CONCIERGE.REGIONS_REMOVE"), " ");
  }
}
var RegionListComponent = class _RegionListComponent {
  constructor() {
    this._manager = inject(RegionManagementService);
    this._clipboard = inject(Clipboard);
    this.regions = this._manager.filtered_regions;
    this.editRegion = (region) => this._manager.editRegion(region);
    this.removeRegion = (region) => this._manager.removeRegion(region);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Region ID copied to clipboard.");
    };
  }
  static {
    this.\u0275fac = function RegionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionListComponent, selectors: [["region-list"]], decls: 10, vars: 21, consts: [["name_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-lg", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-70"], [1, "flex", "w-full", "justify-end", "space-x-2", "p-1"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [3, "zone"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function RegionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275element(5, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, RegionListComponent_ng_template_6_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, RegionListComponent_ng_template_8_Template, 30, 15, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
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
      AppSettingsMenuComponent,
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
                <div class="font-mono text-[0.625rem] opacity-70">
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
                    [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu.menu()"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <app-settings-menu #app_settings_menu [zone]="row" />
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
      MatMenuModule,
      AppSettingsMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionListComponent, { className: "RegionListComponent", filePath: "apps/concierge/src/app/region-manager/region-list.component.ts", lineNumber: 110 });
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
    const app_settings_menu_r2 = \u0275\u0275reference(26);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r2.menu())("matTooltip", "Organisation App Settings");
    \u0275\u0275attribute("aria-label", "Organisation App Settings");
  }
}
function ZoneManagerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "region-list", 11);
  }
}
function ZoneManagerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "building-list", 11);
  }
}
function ZoneManagerComponent_Conditional_24_Template(rf, ctx) {
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
  /** Organisation zone for the organisation App Settings menu. */
  get organisation() {
    return this._org.organisation;
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
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ZoneManagerComponent_BaseFactory;
      return function ZoneManagerComponent_Factory(__ngFactoryType__) {
        return (\u0275ZoneManagerComponent_BaseFactory || (\u0275ZoneManagerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZoneManagerComponent)))(__ngFactoryType__ || _ZoneManagerComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneManagerComponent, selectors: [["", "app-zone-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 23, consts: [["app_settings_menu", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor", "matTooltip"], ["icon", "", "default", "", "matRipple", "", "data-shortcut", "new", 3, "click", "matTooltip"], [1, "bg-base-200", "mx-8", "mb-4", "overflow-hidden", "rounded-md", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "content-area", "flex-1"], [1, "relative", "block", "h-full", "w-full"], [3, "zone"]], template: function ZoneManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 2)(3, "header", 3)(4, "h2", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275conditionalCreate(8, ZoneManagerComponent_Conditional_8_Template, 3, 3, "button", 6);
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_9_listener() {
          return ctx.addItem();
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "mat-tab-group", 8);
        \u0275\u0275twoWayListener("selectedIndexChange", function ZoneManagerComponent_Template_mat_tab_group_selectedIndexChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selected_tab, $event) || (ctx.selected_tab = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectedIndexChange", function ZoneManagerComponent_Template_mat_tab_group_selectedIndexChange_14_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275element(15, "mat-tab", 9);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275element(17, "mat-tab", 9);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275element(19, "mat-tab", 9);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10);
        \u0275\u0275conditionalCreate(22, ZoneManagerComponent_Conditional_22_Template, 1, 0, "region-list", 11)(23, ZoneManagerComponent_Conditional_23_Template, 1, 0, "building-list", 11)(24, ZoneManagerComponent_Conditional_24_Template, 1, 0, "level-list", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "app-settings-menu", 12, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "APP.CONCIERGE.ZONES_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_tab() === 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 13, ctx.addButtonText()));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 15, ctx.addButtonText()));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.addButtonIcon());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("selectedIndex", ctx.selected_tab);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 17, "APP.CONCIERGE.TAB_REGIONS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(18, 19, "APP.CONCIERGE.TAB_BUILDINGS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(20, 21, "APP.CONCIERGE.TAB_LEVELS"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_tab() === 0 ? 22 : ctx.selected_tab() === 1 ? 23 : ctx.selected_tab() === 2 ? 24 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("zone", ctx.organisation);
      }
    }, dependencies: [
      ApplicationSidebarComponent,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      MatMenuModule,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      RegionListComponent,
      BuildingListComponent,
      LevelListComponent,
      AppSettingsMenuComponent,
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
                                [matMenuTriggerFor]="app_settings_menu.menu()"
                                [matTooltip]="'Organisation App Settings'"
                                [attr.aria-label]="'Organisation App Settings'"
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
                            [attr.aria-label]="addButtonText() | translate"
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
                <app-settings-menu #app_settings_menu [zone]="organisation" />
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
      LevelListComponent,
      AppSettingsMenuComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/zone-manager/zone-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=zone-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneManagerComponent, { className: "ZoneManagerComponent", filePath: "apps/concierge/src/app/zone-manager/zone-manager.component.ts", lineNumber: 113 });
})();

// apps/concierge/src/app/zone-manager/zone-manager.routes.ts
var ROUTES = [
  { path: "", component: ZoneManagerComponent, title: "Zone Management" }
];
export {
  ROUTES
};
//# debugId=b85c968f-d9aa-58e9-8876-b30015af227d
//# sourceMappingURL=zone-manager.routes-Z3HG4MEV.js.map
