import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-ILMYTTRO.js";
import {
  AiImageService,
  AuthenticatedImageDirective,
  BRAND_FONTS,
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MatButton,
  MatButtonModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  SignageService,
  TranslatePipe,
  ViewChild,
  computed,
  ensureBrandFont,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  viewChild,
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
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-ZSOXKYEF.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/branding/branding.component.ts
var _c0 = ["logo_input"];
var _forTrack0 = ($index, $item) => $item.family;
var _forTrack1 = ($index, $item) => $item.id;
function BrandingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6)(1, "icon", 27);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.BRAND_READ_ONLY"), " ");
  }
}
function BrandingComponent_For_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function BrandingComponent_For_21_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const $index_r3 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeColour($index_r3));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.colours().length < 2)("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.BRAND_REMOVE_COLOUR"));
  }
}
function BrandingComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "input", 28);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("input", function BrandingComponent_For_21_Template_input_input_1_listener($event) {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setColour($index_r3, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 29)(4, "input", 30);
    \u0275\u0275listener("ngModelChange", function BrandingComponent_For_21_Template_input_ngModelChange_4_listener($event) {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setColour($index_r3, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BrandingComponent_For_21_Conditional_7_Template, 4, 4, "button", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const colour_r6 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("cursor-pointer", ctx_r3.can_edit());
    \u0275\u0275property("disabled", !ctx_r3.can_edit())("value", colour_r6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 12, "SIGNAGE_MANAGER.BRAND_COLOURS"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-error", ctx_r3.colour_errors()[$index_r3]);
    \u0275\u0275property("ngModel", colour_r6)("disabled", !ctx_r3.can_edit());
    \u0275\u0275attribute("aria-invalid", ctx_r3.colour_errors()[$index_r3] ? "true" : null);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.colourName($index_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.can_edit() ? 7 : -1);
  }
}
function BrandingComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addColour());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_ADD_COLOUR"), " ");
  }
}
function BrandingComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8.family);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8.family ? option_r8.label : \u0275\u0275pipeBind1(2, 2, option_r8.label));
  }
}
function BrandingComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_LOGO_HINT"), " ");
  }
}
function BrandingComponent_For_39_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_LOGO_DERIVED"));
  }
}
function BrandingComponent_For_39_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const slot_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r3.logoUrl(slot_r9.id))("alt", \u0275\u0275pipeBind1(1, 2, slot_r9.label));
  }
}
function BrandingComponent_For_39_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", slot_r9.faded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.AI_NO_LOGO_YET"));
  }
}
function BrandingComponent_For_39_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function BrandingComponent_For_39_Conditional_9_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const slot_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.derive(slot_r9.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !!ctx_r3.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.BRAND_LOGO_MAKE_IT"), " ");
  }
}
function BrandingComponent_For_39_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 43);
    \u0275\u0275listener("click", function BrandingComponent_For_39_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const slot_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.pick(slot_r9.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BrandingComponent_For_39_Conditional_9_Conditional_4_Template, 3, 4, "button", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r3.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx_r3.busy() === slot_r9.id ? "SIGNAGE_MANAGER.AI_LOGO_UPLOADING" : ctx_r3.logoId(slot_r9.id) ? "SIGNAGE_MANAGER.AI_REPLACE_LOGO" : "SIGNAGE_MANAGER.AI_ADD_LOGO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.logoId(slot_r9.id) && ctx_r3.logoId(ctx_r3.other(slot_r9.id)) ? 4 : -1);
  }
}
function BrandingComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BrandingComponent_For_39_Conditional_5_Template, 3, 3, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275conditionalCreate(7, BrandingComponent_For_39_Conditional_7_Template, 2, 4, "img", 39)(8, BrandingComponent_For_39_Conditional_8_Template, 3, 5, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, BrandingComponent_For_39_Conditional_9_Template, 5, 5, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, slot_r9.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.derived() === slot_r9.id ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", slot_r9.ground);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.logoId(slot_r9.id) ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.can_edit() ? 9 : -1);
  }
}
function BrandingComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r3.saving() ? "COMMON.SAVING" : "COMMON.SAVE"), " ");
  }
}
function BrandingComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_AI_OFF"));
  }
}
var COLOUR_NAMES = ["primary", "secondary", "accent"];
var BrandingComponent = class _BrandingComponent {
  constructor() {
    this._ai = inject(AiImageService);
    this._service = inject(SignageService);
    this.fonts = BRAND_FONTS;
    this.enabled = this._ai.enabled;
    this.can_edit = this._service.is_sys_admin;
    this.organisation = signal(
      "",
      ...ngDevMode ? [{ debugName: "organisation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colours = signal(
      ["#0E6E52"],
      ...ngDevMode ? [{ debugName: "colours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.font = signal(
      "",
      ...ngDevMode ? [{ debugName: "font" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.busy = signal(
      "",
      ...ngDevMode ? [{ debugName: "busy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logos = signal(
      {
        on_light: "",
        on_dark: ""
      },
      ...ngDevMode ? [{ debugName: "logos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.derived = signal(
      "",
      ...ngDevMode ? [{ debugName: "derived" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.slots = [
      {
        id: "on_light",
        label: "SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT",
        ground: "#FFFFFF",
        faded: "rgba(0, 0, 0, 0.45)"
      },
      {
        id: "on_dark",
        label: "SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK",
        ground: "#1B2420",
        faded: "rgba(255, 255, 255, 0.55)"
      }
    ];
    this._logo_input = viewChild(
      "logo_input",
      ...ngDevMode ? [{ debugName: "_logo_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._target = "on_light";
    this.font_stack = computed(
      () => {
        const family = this.font();
        return family ? `"${family}", system-ui, sans-serif` : "system-ui, sans-serif";
      },
      ...ngDevMode ? [{ debugName: "font_stack" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colour_errors = computed(
      () => this.colours().map((colour) => !_BrandingComponent.COLOUR.test(colour)),
      ...ngDevMode ? [{ debugName: "colour_errors" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    const brand = this._ai.brand_kit();
    if (brand)
      this._apply(brand);
    if (!brand) {
      await this._ai.reloadBrandKit();
      const loaded = this._ai.brand_kit();
      if (loaded)
        this._apply(loaded);
    }
    this.previewFont();
  }
  colourName(index) {
    return COLOUR_NAMES[index] || `colour ${index + 1}`;
  }
  addColour() {
    if (this.colours().length >= 3)
      return;
    this.colours.update((list) => [...list, "#1B2420"]);
  }
  removeColour(index) {
    if (this.colours().length < 2)
      return;
    this.colours.update((list) => list.filter((_, i) => i !== index));
  }
  static {
    this.COLOUR = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  }
  setColour(index, value) {
    this.colours.update((list) => list.map((colour, i) => i === index ? value : colour));
  }
  previewFont() {
    ensureBrandFont(this.font());
  }
  logoId(slot) {
    return this.logos()[slot];
  }
  logoUrl(slot) {
    const id = this.logos()[slot];
    return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : "";
  }
  other(slot) {
    return slot === "on_light" ? "on_dark" : "on_light";
  }
  pick(slot) {
    if (!this.can_edit())
      return;
    this._target = slot;
    this._logo_input()?.nativeElement.click();
  }
  async pickLogo(event) {
    if (!this.can_edit())
      return;
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    const slot = this._target;
    this.busy.set(slot);
    try {
      const kit = await this._ai.replaceBrandLogo(slot, file, !this.logoId(this.other(slot)));
      this._applyLogos(kit);
      notifySuccess(i18n("SIGNAGE_MANAGER.AI_LOGO_SAVED"));
    } catch (error) {
      notifyError(this._message(error));
    } finally {
      this.busy.set("");
    }
  }
  /** make this slot from the other one */
  async derive(slot) {
    if (!this.can_edit())
      return;
    this.busy.set(slot);
    try {
      const kit = await this._ai.deriveBrandLogo(slot);
      this._applyLogos(kit);
      notifySuccess(i18n("SIGNAGE_MANAGER.BRAND_LOGO_MADE"));
    } catch (error) {
      notifyError(this._message(error));
    } finally {
      this.busy.set("");
    }
  }
  async save() {
    if (!this.can_edit())
      return;
    if (this.colour_errors().some(Boolean)) {
      notifyError(i18n("SIGNAGE_MANAGER.BRAND_COLOUR_INVALID"));
      return;
    }
    this.saving.set(true);
    try {
      const palette = {};
      this.colours().forEach((colour, index) => {
        palette[this.colourName(index)] = colour;
      });
      await this._ai.saveBrandKit({
        organisation: this.organisation().trim() || void 0,
        palette,
        font: this.font() ? { family: this.font() } : void 0
      });
      notifySuccess(i18n("SIGNAGE_MANAGER.BRAND_SAVED"));
    } catch (error) {
      notifyError(this._message(error));
    } finally {
      this.saving.set(false);
    }
  }
  _apply(brand) {
    this.organisation.set(brand.organisation || "");
    const palette = brand.palette || {};
    const ordered = [
      ...COLOUR_NAMES.map((name) => palette[name]).filter(Boolean),
      ...Object.keys(palette).filter((key) => !COLOUR_NAMES.includes(key)).map((key) => palette[key])
    ];
    if (ordered.length)
      this.colours.set(ordered.slice(0, 3));
    const font = brand.font;
    this.font.set(typeof font === "string" ? font : font?.family || "");
    this._applyLogos(brand);
  }
  _applyLogos(brand) {
    this.logos.set({
      on_light: brand.logo_upload_id || "",
      on_dark: brand.logo_dark_upload_id || ""
    });
    this.derived.set(brand.logo_derived || "");
  }
  _message(error) {
    return error?.error?.error || error?.error || error?.message || i18n("SIGNAGE_MANAGER.BRAND_SAVE_FAILED");
  }
  static {
    this.\u0275fac = function BrandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrandingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandingComponent, selectors: [["app-branding"]], viewQuery: function BrandingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._logo_input, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 47, vars: 38, consts: [["logo_input", ""], [1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "bg-base-100", "mx-auto", "flex", "min-h-0", "w-full", "min-w-0", "flex-1", "flex-col", "overflow-auto", "p-6"], [1, "mb-1", "text-2xl"], [1, "text-base-content/60", "mb-6", "text-sm"], [1, "border-base-300", "bg-base-200", "mb-6", "flex", "items-center", "gap-2", "rounded", "border", "p-3", "text-sm"], ["for", "brand-org"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "brand-org", 3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "mt-4", "mb-2", "block"], [1, "flex", "flex-col", "items-start", "gap-2"], [1, "flex", "items-center", "gap-3"], ["mat-stroked-button", "", "type", "button"], ["for", "brand-font", 1, "mt-6"], ["appearance", "outline", 1, "w-full", "max-w-sm"], ["id", "brand-font", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [1, "border-base-content/10", "bg-base-200", "mb-2", "rounded", "border", "p-4", "text-2xl"], [1, "mt-6"], [1, "text-base-content/60", "mb-2", "text-sm"], [1, "flex", "flex-col", "gap-4", "sm:flex-row"], [1, "border-base-content/10", "flex", "min-w-0", "flex-1", "flex-col", "gap-3", "rounded", "border", "p-4"], ["type", "file", "accept", "image/png,image/jpeg,image/webp,image/svg+xml", 1, "sr-only", 3, "change"], [1, "mt-8", "flex", "items-center", "gap-3"], ["btn", "", "matRipple", "", 1, "w-40", 3, "disabled"], [1, "text-base-content/60", "text-sm"], [1, "text-base-content/60"], ["type", "color", 1, "border-base-content/20", "h-10", "w-14", "rounded", "border", "bg-transparent", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "input", "disabled", "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-40"], ["matInput", "", "placeholder", "#0E6E52", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-base-content/60", "text-xs", "uppercase"], ["icon", "", "default", "", "error", "", "type", "button", 3, "disabled", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", 3, "click", "disabled", "matTooltip"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "flex", "items-baseline", "justify-between", "gap-2"], [1, "text-sm", "font-medium"], [1, "text-base-content/60", "shrink-0", "text-xs"], [1, "flex", "h-28", "items-center", "justify-center", "rounded", "p-3"], ["auth", "", 1, "max-h-full", "max-w-full", 3, "source", "alt"], [1, "text-xs", 3, "color"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-xs"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click", "disabled"]], template: function BrandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "nav-sidebar", 2);
        \u0275\u0275elementStart(2, "main", 3)(3, "h1", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, BrandingComponent_Conditional_9_Template, 5, 3, "p", 6);
        \u0275\u0275elementStart(10, "label", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 8)(14, "input", 9);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function BrandingComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.organisation, $event) || (ctx.organisation = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "label", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11);
        \u0275\u0275repeaterCreate(20, BrandingComponent_For_21_Template, 8, 14, "div", 12, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(22, BrandingComponent_Conditional_22_Template, 3, 3, "button", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "label", 14);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-form-field", 15)(27, "mat-select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BrandingComponent_Template_mat_select_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.font, $event) || (ctx.font = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function BrandingComponent_Template_mat_select_ngModelChange_27_listener() {
          return ctx.previewFont();
        });
        \u0275\u0275repeaterCreate(28, BrandingComponent_For_29_Template, 3, 4, "mat-option", 17, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 18);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "label", 19);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(36, BrandingComponent_Conditional_36_Template, 3, 3, "p", 20);
        \u0275\u0275elementStart(37, "div", 21);
        \u0275\u0275repeaterCreate(38, BrandingComponent_For_39_Template, 10, 8, "div", 22, _forTrack1);
        \u0275\u0275elementStart(40, "input", 23, 0);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275listener("change", function BrandingComponent_Template_input_change_40_listener($event) {
          return ctx.pickLogo($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 24);
        \u0275\u0275conditionalCreate(44, BrandingComponent_Conditional_44_Template, 3, 4, "button", 25);
        \u0275\u0275conditionalCreate(45, BrandingComponent_Conditional_45_Template, 3, 3, "span", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(46, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 20, "SIGNAGE_MANAGER.BRAND_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 22, "SIGNAGE_MANAGER.BRAND_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.can_edit() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 24, "SIGNAGE_MANAGER.BRAND_ORGANISATION"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.organisation);
        \u0275\u0275property("disabled", !ctx.can_edit())("placeholder", \u0275\u0275pipeBind1(15, 26, "SIGNAGE_MANAGER.BRAND_ORGANISATION"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 28, "SIGNAGE_MANAGER.BRAND_COLOURS"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.colours());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_edit() && ctx.colours().length < 3 ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 30, "SIGNAGE_MANAGER.BRAND_FONT"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.font);
        \u0275\u0275property("disabled", !ctx.can_edit());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.fonts);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("font-family", ctx.font_stack());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "SIGNAGE_MANAGER.BRAND_FONT_SAMPLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 34, "SIGNAGE_MANAGER.BRAND_LOGO"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_edit() ? 36 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.slots);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 36, "SIGNAGE_MANAGER.AI_ADD_LOGO"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_edit() ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.enabled() ? 45 : -1);
      }
    }, dependencies: [
      AuthenticatedImageDirective,
      NavFooterComponent,
      NavSidebarComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandingComponent, [{
    type: Component,
    args: [{
      selector: "app-branding",
      template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <main
                class="bg-base-100 mx-auto flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-auto p-6"
            >
                <h1 class="mb-1 text-2xl">
                    {{ 'SIGNAGE_MANAGER.BRAND_HEADER' | translate }}
                </h1>
                <p class="text-base-content/60 mb-6 text-sm">
                    {{ 'SIGNAGE_MANAGER.BRAND_HINT' | translate }}
                </p>

                @if (!can_edit()) {
                    <p
                        class="border-base-300 bg-base-200 mb-6 flex items-center gap-2 rounded border p-3 text-sm"
                    >
                        <icon class="text-base-content/60">lock</icon>
                        {{ 'SIGNAGE_MANAGER.BRAND_READ_ONLY' | translate }}
                    </p>
                }

                <label for="brand-org">{{
                    'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="brand-org"
                        [(ngModel)]="organisation"
                        [disabled]="!can_edit()"
                        [placeholder]="
                            'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                        "
                    />
                </mat-form-field>

                <label class="mt-4 mb-2 block">{{
                    'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                }}</label>
                <div class="flex flex-col items-start gap-2">
                    @for (colour of colours(); track $index) {
                        <div class="flex items-center gap-3">
                            <input
                                type="color"
                                class="border-base-content/20 h-10 w-14 rounded border bg-transparent disabled:cursor-not-allowed disabled:opacity-60"
                                [class.cursor-pointer]="can_edit()"
                                [disabled]="!can_edit()"
                                [value]="colour"
                                (input)="
                                    setColour($index, $any($event.target).value)
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                                "
                            />
                            <mat-form-field
                                appearance="outline"
                                class="w-40"
                                subscriptSizing="dynamic"
                            >
                                <input
                                    matInput
                                    [ngModel]="colour"
                                    (ngModelChange)="setColour($index, $event)"
                                    [disabled]="!can_edit()"
                                    [class.text-error]="colour_errors()[$index]"
                                    [attr.aria-invalid]="
                                        colour_errors()[$index] ? 'true' : null
                                    "
                                    placeholder="#0E6E52"
                                />
                            </mat-form-field>
                            <span
                                class="text-base-content/60 text-xs uppercase"
                                >{{ colourName($index) }}</span
                            >
                            @if (can_edit()) {
                                <button
                                    icon
                                    default
                                    error
                                    type="button"
                                    [disabled]="colours().length < 2"
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.BRAND_REMOVE_COLOUR'
                                            | translate
                                    "
                                    (click)="removeColour($index)"
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                    }
                    @if (can_edit() && colours().length < 3) {
                        <button
                            mat-stroked-button
                            type="button"
                            (click)="addColour()"
                        >
                            {{ 'SIGNAGE_MANAGER.BRAND_ADD_COLOUR' | translate }}
                        </button>
                    }
                </div>

                <label class="mt-6" for="brand-font">{{
                    'SIGNAGE_MANAGER.BRAND_FONT' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full max-w-sm">
                    <mat-select
                        id="brand-font"
                        [(ngModel)]="font"
                        [disabled]="!can_edit()"
                        (ngModelChange)="previewFont()"
                    >
                        @for (option of fonts; track option.family) {
                            <mat-option [value]="option.family">{{
                                option.family
                                    ? option.label
                                    : (option.label | translate)
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <p
                    class="border-base-content/10 bg-base-200 mb-2 rounded border p-4 text-2xl"
                    [style.font-family]="font_stack()"
                >
                    {{ 'SIGNAGE_MANAGER.BRAND_FONT_SAMPLE' | translate }}
                </p>

                <label class="mt-6">{{
                    'SIGNAGE_MANAGER.BRAND_LOGO' | translate
                }}</label>
                @if (can_edit()) {
                    <p class="text-base-content/60 mb-2 text-sm">
                        {{ 'SIGNAGE_MANAGER.BRAND_LOGO_HINT' | translate }}
                    </p>
                }
                <div class="flex flex-col gap-4 sm:flex-row">
                    @for (slot of slots; track slot.id) {
                        <div
                            class="border-base-content/10 flex min-w-0 flex-1 flex-col gap-3 rounded border p-4"
                        >
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-sm font-medium">{{
                                    slot.label | translate
                                }}</span>
                                @if (derived() === slot.id) {
                                    <span
                                        class="text-base-content/60 shrink-0 text-xs"
                                        >{{
                                            'SIGNAGE_MANAGER.BRAND_LOGO_DERIVED'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            <!-- shown on the ground it is meant for, which is the
                             only way to tell whether it actually works -->
                            <div
                                class="flex h-28 items-center justify-center rounded p-3"
                                [style.background]="slot.ground"
                            >
                                @if (logoId(slot.id)) {
                                    <img
                                        auth
                                        [source]="logoUrl(slot.id)"
                                        class="max-h-full max-w-full"
                                        [alt]="slot.label | translate"
                                    />
                                } @else {
                                    <span
                                        class="text-xs"
                                        [style.color]="slot.faded"
                                        >{{
                                            'SIGNAGE_MANAGER.AI_NO_LOGO_YET'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            @if (can_edit()) {
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        mat-stroked-button
                                        type="button"
                                        [disabled]="!!busy()"
                                        (click)="pick(slot.id)"
                                    >
                                        {{
                                            (busy() === slot.id
                                                ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                                                : logoId(slot.id)
                                                  ? 'SIGNAGE_MANAGER.AI_REPLACE_LOGO'
                                                  : 'SIGNAGE_MANAGER.AI_ADD_LOGO'
                                            ) | translate
                                        }}
                                    </button>
                                    @if (
                                        !logoId(slot.id) &&
                                        logoId(other(slot.id))
                                    ) {
                                        <button
                                            mat-stroked-button
                                            type="button"
                                            [disabled]="!!busy()"
                                            (click)="derive(slot.id)"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.BRAND_LOGO_MAKE_IT'
                                                    | translate
                                            }}
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                    }
                    <input
                        #logo_input
                        type="file"
                        class="sr-only"
                        accept="image/png,image/jpeg,image/webp,image/svg+xml"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.AI_ADD_LOGO' | translate
                        "
                        (change)="pickLogo($event)"
                    />
                </div>

                <div class="mt-8 flex items-center gap-3">
                    @if (can_edit()) {
                        <button
                            btn
                            matRipple
                            class="w-40"
                            [disabled]="saving()"
                            (click)="save()"
                        >
                            {{
                                (saving() ? 'COMMON.SAVING' : 'COMMON.SAVE')
                                    | translate
                            }}
                        </button>
                    }
                    @if (!enabled()) {
                        <span class="text-base-content/60 text-sm">{{
                            'SIGNAGE_MANAGER.BRAND_AI_OFF' | translate
                        }}</span>
                    }
                </div>
            </main>
            <nav-footer />
        </div>
    `,
      imports: [
        AuthenticatedImageDirective,
        NavFooterComponent,
        NavSidebarComponent,
        FormsModule,
        IconComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        TranslatePipe
      ]
    }]
  }], null, { _logo_input: [{ type: ViewChild, args: ["logo_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandingComponent, { className: "BrandingComponent", filePath: "apps/signage-manager/src/app/branding/branding.component.ts", lineNumber: 310 });
})();
export {
  BrandingComponent
};
//# sourceMappingURL=branding.component-C3RPSCSX.js.map
