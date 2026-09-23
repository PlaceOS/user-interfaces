import {
  BRAND_FONTS,
  ensureBrandFont
} from "./chunk-7NXM32JV.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-V4XLJ2SN.js";
import "./chunk-IDYOJSL5.js";
import {
  AuthenticatedImageDirective
} from "./chunk-KOKDDOXG.js";
import {
  AiImageService,
  errorMessage,
  isFinal,
  perceivedLightness
} from "./chunk-FZP36Z2C.js";
import {
  SignageService
} from "./chunk-IJFYACDR.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-XASXFKEM.js";
import "./chunk-MFBJJVF7.js";
import "./chunk-OKGMEF76.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-XG3NPPBO.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-RSKYLYEV.js";
import "./chunk-HW4EA2SL.js";
import "./chunk-WN6EDS3Q.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-C7ELQ7TP.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-T3VMWKY2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-3MB6OAN2.js";
import "./chunk-O6Q3U2DX.js";
import {
  BidiModule,
  ChangeDetectorRef,
  Component,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FormsModule,
  HostAttributeToken,
  IconComponent,
  InjectionToken,
  Input,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  i18n,
  inject,
  input,
  linkedSignal,
  notifyError,
  notifySuccess,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ws,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c0 = ["switch"];
var _c1 = ["*"];
function MatSlideToggle_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  _labelId;
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  _switchElement;
  focus() {
    this._switchElement.nativeElement.focus();
  }
  _noopAnimations = _animationsDisabled();
  _focused = false;
  name = null;
  id;
  labelPosition = "after";
  ariaLabel = null;
  ariaLabelledby = null;
  ariaDescribedby;
  required = false;
  color;
  disabled = false;
  fullWidth = false;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  hideIcon;
  disabledInteractive;
  change = new EventEmitter();
  toggleChange = new EventEmitter();
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 15,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("mat-slide-toggle-full-width", ctx.fullWidth)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      fullWidth: [2, "fullWidth", "fullWidth", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 14,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mat-mdc-slide-toggle-touch-target"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          return ctx._handleClick();
        });
        \u0275\u0275element(3, "div", 3)(4, "span", 4);
        \u0275\u0275elementStart(5, "span", 5)(6, "span", 6)(7, "span", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, MatSlideToggle_Conditional_11_Template, 5, 0, "span", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "label", 12);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_12_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275projection(13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(9);
        \u0275\u0275property("matRippleTrigger", switch_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--%NS%mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--%NS%mat-slide-toggle-track-height, 32px);\n  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--%NS%mat-slide-toggle-handle-width);\n  height: var(--%NS%mat-slide-toggle-handle-height);\n  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));\n}\n.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));\n}\n.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));\n}\n.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));\n}\n.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));\n}\n.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--%NS%mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);\n  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));\n  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));\n  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));\n  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-icon {\n  min-height: fit-content;\n  flex-shrink: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));\n  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));\n  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));\n  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));\n  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-slide-toggle-full-width {\n  width: 100%;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field {\n  width: 100%;\n  justify-content: space-between;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field label {\n  margin: 0;\n  flex-grow: 1;\n  text-align: end;\n}\n.mat-slide-toggle-full-width .mdc-form-field--align-end label {\n  text-align: start;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--%NS%mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class.mat-slide-toggle-full-width]": "fullWidth",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <div class="mat-mdc-slide-toggle-touch-target"></div>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-icon {\n  min-height: fit-content;\n  flex-shrink: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-slide-toggle-full-width {\n  width: 100%;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field {\n  width: 100%;\n  justify-content: space-between;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field label {\n  margin: 0;\n  flex-grow: 1;\n  text-align: end;\n}\n.mat-slide-toggle-full-width .mdc-form-field--align-end label {\n  text-align: start;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fullWidth: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle],
    exports: [MatSlideToggle, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle],
      exports: [MatSlideToggle, BidiModule]
    }]
  }], null, null);
})();

// apps/signage-manager/src/app/ai/ai-layer-controls.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.family;
function AiLayerControlsComponent_For_5_For_42_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", option_r4.family);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function AiLayerControlsComponent_For_5_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AiLayerControlsComponent_For_5_For_42_Conditional_0_Template, 2, 2, "mat-option", 25);
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275conditional(option_r4.family ? 0 : -1);
  }
}
function AiLayerControlsComponent_For_5_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function AiLayerControlsComponent_For_5_For_45_Template_button_click_0_listener() {
      const colour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const block_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { colour: colour_r6 }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const colour_r6 = ctx.$implicit;
    const block_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", colour_r6);
    \u0275\u0275classProp("ring-2", block_r2.colour === colour_r6);
    \u0275\u0275attribute("aria-label", colour_r6);
  }
}
function AiLayerControlsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "mat-form-field", 8)(3, "textarea", 9);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_For_5_Template_textarea_ngModelChange_3_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { text: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function AiLayerControlsComponent_For_5_Template_button_click_6_listener() {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBlock(block_r2.id));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 11)(11, "mat-form-field", 12)(12, "mat-select", 13);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_For_5_Template_mat_select_ngModelChange_12_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { role: $event }));
    });
    \u0275\u0275elementStart(14, "mat-option", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-option", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 12)(24, "mat-select", 13);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_For_5_Template_mat_select_ngModelChange_24_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { align: $event }));
    });
    \u0275\u0275elementStart(26, "mat-option", 17);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 18);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-option", 19);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 20)(36, "mat-select", 13);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_For_5_Template_mat_select_ngModelChange_36_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { font: $event }));
    });
    \u0275\u0275elementStart(38, "mat-option", 21);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, AiLayerControlsComponent_For_5_For_42_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 22);
    \u0275\u0275repeaterCreate(44, AiLayerControlsComponent_For_5_For_45_Template, 1, 5, "button", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(46, "input", 24);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275listener("input", function AiLayerControlsComponent_For_5_Template_input_input_46_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBlockColour(block_r2.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-slide-toggle", 13);
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_For_5_Template_mat_slide_toggle_ngModelChange_49_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { panel: $event }));
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const block_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.text)("placeholder", \u0275\u0275pipeBind1(4, 23, ctx_r2.placeholderFor(block_r2.role)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 25, ctx_r2.placeholderFor(block_r2.role)));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.state().blocks.length < 2)("matTooltip", \u0275\u0275pipeBind1(7, 27, "SIGNAGE_MANAGER.AI_REMOVE_TEXT"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", block_r2.role);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 29, "SIGNAGE_MANAGER.AI_TEXT_SIZE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 31, "SIGNAGE_MANAGER.AI_ROLE_HEADLINE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 33, "SIGNAGE_MANAGER.AI_ROLE_SUBHEADING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 35, "SIGNAGE_MANAGER.AI_ROLE_BODY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.align);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 37, "SIGNAGE_MANAGER.AI_TEXT_ALIGN"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 39, "SIGNAGE_MANAGER.AI_ALIGN_LEFT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 41, "SIGNAGE_MANAGER.AI_ALIGN_CENTRE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 43, "SIGNAGE_MANAGER.AI_ALIGN_RIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.font);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(37, 45, "SIGNAGE_MANAGER.AI_TEXT_FONT"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 47, ctx_r2.brand_font_label()));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.fonts);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.palette());
    \u0275\u0275advance(2);
    \u0275\u0275property("value", block_r2.colour)("matTooltip", \u0275\u0275pipeBind1(47, 49, "SIGNAGE_MANAGER.AI_TEXT_ANY_COLOUR"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(48, 51, "SIGNAGE_MANAGER.AI_TEXT_ANY_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.panel);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 53, "SIGNAGE_MANAGER.AI_TEXT_PANEL"), " ");
  }
}
function AiLayerControlsComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AiLayerControlsComponent_Conditional_10_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext(2);
      const logo_input_r8 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(logo_input_r8.click());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.uploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r2.uploading() ? "SIGNAGE_MANAGER.AI_LOGO_UPLOADING" : "SIGNAGE_MANAGER.AI_ADD_LOGO"), " ");
  }
}
function AiLayerControlsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AiLayerControlsComponent_Conditional_10_Conditional_3_Template, 3, 4, "button", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r2.can_set_logo() ? "SIGNAGE_MANAGER.AI_NO_LOGO_YET" : "SIGNAGE_MANAGER.AI_NO_LOGO_ADMIN"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.can_set_logo() ? 3 : -1);
  }
}
function AiLayerControlsComponent_Conditional_11_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 35)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 13);
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_Conditional_11_Conditional_3_Conditional_15_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.patch({ logo_choice: $event }));
    });
    \u0275\u0275elementStart(5, "mat-option", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 37);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 38);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "SIGNAGE_MANAGER.AI_LOGO_VERSION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.state().logo_choice);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "SIGNAGE_MANAGER.AI_LOGO_AUTO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK"));
  }
}
function AiLayerControlsComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 30)(1, "mat-select", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_Conditional_11_Conditional_3_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.patch({ logo_position: $event }));
    });
    \u0275\u0275elementStart(3, "mat-option", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, AiLayerControlsComponent_Conditional_11_Conditional_3_Conditional_15_Template, 14, 13, "mat-form-field", 35);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.state().logo_position);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "SIGNAGE_MANAGER.AI_LOGO_POSITION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "SIGNAGE_MANAGER.AI_POS_BOTTOM_RIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "SIGNAGE_MANAGER.AI_POS_BOTTOM_LEFT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "SIGNAGE_MANAGER.AI_POS_TOP_RIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "SIGNAGE_MANAGER.AI_POS_TOP_LEFT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.has_both_logos() ? 15 : -1);
  }
}
function AiLayerControlsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 13);
    \u0275\u0275listener("ngModelChange", function AiLayerControlsComponent_Conditional_11_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patch({ logo: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, AiLayerControlsComponent_Conditional_11_Conditional_3_Template, 16, 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.state().logo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.AI_SHOW_LOGO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.state().logo ? 3 : -1);
  }
}
var FIRST_Y = 0.06;
var BLOCK_GAP = 0.18;
function newTextBlock(role, index = 0) {
  return {
    id: `${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    text: "",
    role,
    x: 0.06,
    y: FIRST_Y + BLOCK_GAP * index,
    align: "left",
    colour: "#FFFFFF",
    font: "",
    panel: true
  };
}
var AiLayerControlsComponent = class _AiLayerControlsComponent {
  constructor() {
    this.state = input.required(
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_light = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_light" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_dark = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_dark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand = input(
      null,
      ...ngDevMode ? [{ debugName: "brand" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = input(
      false,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_set_logo = input(
      true,
      ...ngDevMode ? [{ debugName: "can_set_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = output();
    this.logo_picked = output({ alias: "logoPicked" });
    this.has_logo = computed(
      () => !!(this.logo_on_light() || this.logo_on_dark()),
      ...ngDevMode ? [{ debugName: "has_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_both_logos = computed(
      () => !!this.logo_on_light() && !!this.logo_on_dark(),
      ...ngDevMode ? [{ debugName: "has_both_logos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fonts = BRAND_FONTS;
    this.brand_font_label = computed(
      () => {
        const font = this.brand()?.font;
        const family = typeof font === "string" ? font : font?.family;
        return family || "SIGNAGE_MANAGER.AI_TEXT_BRAND_FONT";
      },
      ...ngDevMode ? [{ debugName: "brand_font_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.palette = computed(
      () => {
        const colours = Object.values(this.brand()?.palette || {});
        return ["#FFFFFF", "#1B2420", ...colours].filter((colour, index, all) => all.indexOf(colour) === index);
      },
      ...ngDevMode ? [{ debugName: "palette" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  patch(changes) {
    this.changed.emit(__spreadValues(__spreadValues({}, this.state()), changes));
  }
  patchBlock(id, changes) {
    this.patch({
      blocks: this.state().blocks.map((block) => block.id === id ? __spreadValues(__spreadValues({}, block), changes) : block)
    });
  }
  setBlockColour(id, event) {
    const input2 = event.target;
    if (input2 instanceof HTMLInputElement) {
      this.patchBlock(id, { colour: input2.value });
    }
  }
  addBlock() {
    const blocks = this.state().blocks;
    const role = blocks.length === 1 ? "subheading" : "body";
    this.patch({ blocks: [...blocks, newTextBlock(role, blocks.length)] });
  }
  removeBlock(id) {
    if (this.state().blocks.length < 2)
      return;
    this.patch({
      blocks: this.state().blocks.filter((block) => block.id !== id)
    });
  }
  pickLogo(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    input2.value = "";
    if (file)
      this.logo_picked.emit(file);
  }
  placeholderFor(role) {
    return role === "headline" ? "SIGNAGE_MANAGER.AI_HEADLINE" : role === "subheading" ? "SIGNAGE_MANAGER.AI_SUBHEADING" : "SIGNAGE_MANAGER.AI_BODY_TEXT";
  }
  static {
    this.\u0275fac = function AiLayerControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiLayerControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiLayerControlsComponent, selectors: [["ai-layer-controls"]], inputs: { state: [1, "state"], logo_on_light: [1, "logo_on_light"], logo_on_dark: [1, "logo_on_dark"], brand: [1, "brand"], uploading: [1, "uploading"], can_set_logo: [1, "can_set_logo"] }, outputs: { changed: "changed", logo_picked: "logoPicked" }, decls: 15, vars: 10, consts: [["logo_input", ""], [1, "flex", "flex-col", "gap-3"], [1, "text-base-content/60", "m-0", "text-xs"], [1, "border-base-content/10", "flex", "flex-col", "gap-2", "rounded", "border", "p-3"], ["mat-stroked-button", "", "type", "button", 1, "self-start", 3, "click"], [1, "border-base-content/10", "flex", "flex-wrap", "items-center", "gap-3", "rounded", "border", "p-3"], ["type", "file", "accept", "image/png,image/jpeg,image/webp,image/svg+xml", 1, "sr-only", 3, "change"], [1, "flex", "items-start", "gap-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "flex-1"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "default", "", "error", "", "type", "button", 3, "click", "disabled", "matTooltip"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-32"], [3, "ngModelChange", "ngModel"], ["value", "headline"], ["value", "subheading"], ["value", "body"], ["value", "left"], ["value", "centre"], ["value", "right"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full"], ["value", ""], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["type", "button", 1, "border-base-content/20", "h-6", "w-6", "rounded-full", "border", 3, "background", "ring-2"], ["type", "color", 1, "border-base-content/20", "h-6", "w-8", "cursor-pointer", "rounded", "border", "bg-transparent", "p-0", 3, "input", "value", "matTooltip"], [3, "value"], ["type", "button", 1, "border-base-content/20", "h-6", "w-6", "rounded-full", "border", 3, "click"], [1, "text-sm"], ["mat-stroked-button", "", "type", "button", 3, "disabled"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-36"], ["value", "bottom-right"], ["value", "bottom-left"], ["value", "top-right"], ["value", "top-left"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-44"], ["value", "auto"], ["value", "on_light"], ["value", "on_dark"]], template: function AiLayerControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(4, AiLayerControlsComponent_For_5_Template, 52, 55, "div", 3, _forTrack0);
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function AiLayerControlsComponent_Template_button_click_6_listener() {
          return ctx.addBlock();
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275conditionalCreate(10, AiLayerControlsComponent_Conditional_10_Template, 4, 4)(11, AiLayerControlsComponent_Conditional_11_Template, 4, 5);
        \u0275\u0275elementStart(12, "input", 6, 0);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275listener("change", function AiLayerControlsComponent_Template_input_change_12_listener($event) {
          return ctx.pickLogo($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.AI_TEXT_DRAG_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.state().blocks);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "SIGNAGE_MANAGER.AI_ADD_TEXT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.has_logo() ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 8, "SIGNAGE_MANAGER.AI_ADD_LOGO"));
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiLayerControlsComponent, [{
    type: Component,
    args: [{
      selector: "ai-layer-controls",
      template: `
        <div class="flex flex-col gap-3">
            <p class="text-base-content/60 m-0 text-xs">
                {{ 'SIGNAGE_MANAGER.AI_TEXT_DRAG_HINT' | translate }}
            </p>

            @for (block of state().blocks; track block.id) {
                <div
                    class="border-base-content/10 flex flex-col gap-2 rounded border p-3"
                >
                    <div class="flex items-start gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="flex-1"
                            subscriptSizing="dynamic"
                        >
                            <textarea
                                matInput
                                rows="2"
                                [ngModel]="block.text"
                                (ngModelChange)="
                                    patchBlock(block.id, { text: $event })
                                "
                                [placeholder]="
                                    placeholderFor(block.role) | translate
                                "
                                [attr.aria-label]="
                                    placeholderFor(block.role) | translate
                                "
                            ></textarea>
                        </mat-form-field>
                        <button
                            icon
                            default
                            error
                            type="button"
                            [disabled]="state().blocks.length < 2"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.AI_REMOVE_TEXT' | translate
                            "
                            (click)="removeBlock(block.id)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="w-32"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="block.role"
                                (ngModelChange)="
                                    patchBlock(block.id, { role: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_TEXT_SIZE' | translate
                                "
                            >
                                <mat-option value="headline">{{
                                    'SIGNAGE_MANAGER.AI_ROLE_HEADLINE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="subheading">{{
                                    'SIGNAGE_MANAGER.AI_ROLE_SUBHEADING'
                                        | translate
                                }}</mat-option>
                                <mat-option value="body">{{
                                    'SIGNAGE_MANAGER.AI_ROLE_BODY' | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <mat-form-field
                            appearance="outline"
                            class="w-32"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="block.align"
                                (ngModelChange)="
                                    patchBlock(block.id, { align: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_TEXT_ALIGN' | translate
                                "
                            >
                                <mat-option value="left">{{
                                    'SIGNAGE_MANAGER.AI_ALIGN_LEFT' | translate
                                }}</mat-option>
                                <mat-option value="centre">{{
                                    'SIGNAGE_MANAGER.AI_ALIGN_CENTRE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="right">{{
                                    'SIGNAGE_MANAGER.AI_ALIGN_RIGHT' | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <mat-form-field
                            appearance="outline"
                            class="w-full"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="block.font"
                                (ngModelChange)="
                                    patchBlock(block.id, { font: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_TEXT_FONT' | translate
                                "
                            >
                                <mat-option value="">{{
                                    brand_font_label() | translate
                                }}</mat-option>
                                @for (option of fonts; track option.family) {
                                    @if (option.family) {
                                        <mat-option [value]="option.family">{{
                                            option.label
                                        }}</mat-option>
                                    }
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>

                    <div class="flex flex-wrap items-center gap-3">
                        @for (colour of palette(); track colour) {
                            <button
                                type="button"
                                class="border-base-content/20 h-6 w-6 rounded-full border"
                                [style.background]="colour"
                                [class.ring-2]="block.colour === colour"
                                (click)="patchBlock(block.id, { colour })"
                                [attr.aria-label]="colour"
                            ></button>
                        }
                        <input
                            type="color"
                            class="border-base-content/20 h-6 w-8 cursor-pointer rounded border bg-transparent p-0"
                            [value]="block.colour"
                            (input)="setBlockColour(block.id, $event)"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.AI_TEXT_ANY_COLOUR' | translate
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.AI_TEXT_ANY_COLOUR' | translate
                            "
                        />
                        <mat-slide-toggle
                            [ngModel]="block.panel"
                            (ngModelChange)="
                                patchBlock(block.id, { panel: $event })
                            "
                        >
                            {{ 'SIGNAGE_MANAGER.AI_TEXT_PANEL' | translate }}
                        </mat-slide-toggle>
                    </div>
                </div>
            }

            <button
                mat-stroked-button
                type="button"
                class="self-start"
                (click)="addBlock()"
            >
                {{ 'SIGNAGE_MANAGER.AI_ADD_TEXT' | translate }}
            </button>

            <div
                class="border-base-content/10 flex flex-wrap items-center gap-3 rounded border p-3"
            >
                @if (!has_logo()) {
                    <span class="text-sm">{{
                        (can_set_logo()
                            ? 'SIGNAGE_MANAGER.AI_NO_LOGO_YET'
                            : 'SIGNAGE_MANAGER.AI_NO_LOGO_ADMIN'
                        ) | translate
                    }}</span>
                    @if (can_set_logo()) {
                        <button
                            mat-stroked-button
                            type="button"
                            [disabled]="uploading()"
                            (click)="logo_input.click()"
                        >
                            {{
                                (uploading()
                                    ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                                    : 'SIGNAGE_MANAGER.AI_ADD_LOGO'
                                ) | translate
                            }}
                        </button>
                    }
                } @else {
                    <mat-slide-toggle
                        [ngModel]="state().logo"
                        (ngModelChange)="patch({ logo: $event })"
                    >
                        {{ 'SIGNAGE_MANAGER.AI_SHOW_LOGO' | translate }}
                    </mat-slide-toggle>
                    @if (state().logo) {
                        <mat-form-field
                            appearance="outline"
                            class="w-36"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="state().logo_position"
                                (ngModelChange)="
                                    patch({ logo_position: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_LOGO_POSITION'
                                        | translate
                                "
                            >
                                <mat-option value="bottom-right">{{
                                    'SIGNAGE_MANAGER.AI_POS_BOTTOM_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="bottom-left">{{
                                    'SIGNAGE_MANAGER.AI_POS_BOTTOM_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="top-right">{{
                                    'SIGNAGE_MANAGER.AI_POS_TOP_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="top-left">{{
                                    'SIGNAGE_MANAGER.AI_POS_TOP_LEFT'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <!-- both versions exist, so which one is a real choice -->
                        @if (has_both_logos()) {
                            <mat-form-field
                                appearance="outline"
                                class="w-44"
                                subscriptSizing="dynamic"
                            >
                                <mat-label>{{
                                    'SIGNAGE_MANAGER.AI_LOGO_VERSION'
                                        | translate
                                }}</mat-label>
                                <mat-select
                                    [ngModel]="state().logo_choice"
                                    (ngModelChange)="
                                        patch({ logo_choice: $event })
                                    "
                                >
                                    <mat-option value="auto">{{
                                        'SIGNAGE_MANAGER.AI_LOGO_AUTO'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="on_light">{{
                                        'SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="on_dark">{{
                                        'SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        }
                    }
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
        </div>
    `,
      imports: [
        FormsModule,
        IconComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslatePipe
      ]
    }]
  }], null, { state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: true }] }], logo_on_light: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_light", required: false }] }], logo_on_dark: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_dark", required: false }] }], brand: [{ type: Input, args: [{ isSignal: true, alias: "brand", required: false }] }], uploading: [{ type: Input, args: [{ isSignal: true, alias: "uploading", required: false }] }], can_set_logo: [{ type: Input, args: [{ isSignal: true, alias: "can_set_logo", required: false }] }], changed: [{ type: Output, args: ["changed"] }], logo_picked: [{ type: Output, args: ["logoPicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiLayerControlsComponent, { className: "AiLayerControlsComponent", filePath: "apps/signage-manager/src/app/ai/ai-layer-controls.component.ts", lineNumber: 337 });
})();

// apps/signage-manager/src/app/ai/ai-layer.component.ts
var _c02 = ["canvas"];
var ROLE_SIZE = {
  headline: 0.11,
  subheading: 0.055,
  body: 0.038
};
var ROLE_LEADING = {
  headline: 1.12,
  subheading: 1.3,
  body: 1.45
};
var NUDGE = 5e-3;
var NUDGE_FAST = 0.02;
var AiLayerComponent = class _AiLayerComponent {
  constructor() {
    this.image_url = input.required(
      ...ngDevMode ? [{ debugName: "image_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_light = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_light" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_dark = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_dark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand = input(
      null,
      ...ngDevMode ? [{ debugName: "brand" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = input.required(
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = output();
    this.failed = output();
    this.hover_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "hover_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.drag_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "drag_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._canvas = viewChild(
      "canvas",
      ...ngDevMode ? [{ debugName: "_canvas" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._artwork = null;
    this._artwork_url = "";
    this._logos = {
      on_light: null,
      on_dark: null
    };
    this._boxes = /* @__PURE__ */ new Map();
    this._grab = { x: 0, y: 0 };
    this._brand_family = computed(
      () => {
        const font = this.brand()?.font;
        return typeof font === "string" ? font : font?.family || "";
      },
      ...ngDevMode ? [{ debugName: "_brand_family" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const url = this.image_url();
      if (url)
        this._loadArtwork(url);
    });
    effect(() => {
      const url = this.logo_on_light();
      if (url)
        this._loadLogo("on_light", url);
    });
    effect(() => {
      const url = this.logo_on_dark();
      if (url)
        this._loadLogo("on_dark", url);
    });
    effect(() => {
      const families = new Set([
        this._brand_family(),
        ...this.state().blocks.map((block) => block.font)
      ].filter(Boolean));
      for (const family of families) {
        ensureBrandFont(family).then(() => this._draw());
      }
    });
    effect(() => {
      this.state();
      this.hover_id();
      this.drag_id();
      this.selected_id();
      this._draw();
    });
  }
  /** the composited image, at the artwork's native size */
  toBlob() {
    const canvas = this._canvas()?.nativeElement;
    if (!canvas || !this._artwork)
      return Promise.resolve(null);
    const hovered = this.hover_id();
    const selected = this.selected_id();
    this.hover_id.set("");
    this.selected_id.set("");
    this._draw();
    return new Promise((resolve) => canvas.toBlob((blob) => {
      this.hover_id.set(hovered);
      this.selected_id.set(selected);
      resolve(blob);
    }, "image/png"));
  }
  onPointerDown(event) {
    const point = this._toArtwork(event);
    if (!point)
      return;
    const block = this._blockAt(point.x, point.y);
    this.selected_id.set(block?.id || "");
    if (!block)
      return;
    const box = this._boxes.get(block.id);
    if (!box)
      return;
    this._grab = { x: point.x - box.left, y: point.y - box.top };
    this.drag_id.set(block.id);
    this._canvas()?.nativeElement.setPointerCapture(event.pointerId);
    event.preventDefault();
  }
  onPointerMove(event) {
    const point = this._toArtwork(event);
    if (!point)
      return;
    const dragging = this.drag_id();
    if (!dragging) {
      this.hover_id.set(this._blockAt(point.x, point.y)?.id || "");
      return;
    }
    const canvas = this._canvas()?.nativeElement;
    const box = this._boxes.get(dragging);
    if (!canvas || !box)
      return;
    this._move(dragging, (point.x - this._grab.x) / canvas.width, (point.y - this._grab.y) / canvas.height, box);
  }
  onPointerUp(event) {
    if (!this.drag_id())
      return;
    this._canvas()?.nativeElement.releasePointerCapture(event.pointerId);
    this.drag_id.set("");
  }
  onPointerLeave() {
    if (!this.drag_id())
      this.hover_id.set("");
  }
  /** the same moves without a mouse, for whoever cannot use one */
  onKeyDown(event) {
    if (event.key === "Tab") {
      const blocks = this.state().blocks.filter((b) => b.text.trim());
      if (blocks.length < 2)
        return;
      const at = blocks.findIndex((b) => b.id === this.selected_id());
      const next = event.shiftKey ? at - 1 : at + 1;
      if (next < 0 || next >= blocks.length) {
        this.selected_id.set("");
        return;
      }
      event.preventDefault();
      this.selected_id.set(blocks[next].id);
      this._draw();
      return;
    }
    const id = this.selected_id() || this.state().blocks[0]?.id;
    const box = id ? this._boxes.get(id) : null;
    const block = this.state().blocks.find((item) => item.id === id);
    if (!box || !block)
      return;
    const step = event.shiftKey ? NUDGE_FAST : NUDGE;
    let x = block.x;
    let y = block.y;
    if (event.key === "ArrowLeft")
      x -= step;
    else if (event.key === "ArrowRight")
      x += step;
    else if (event.key === "ArrowUp")
      y -= step;
    else if (event.key === "ArrowDown")
      y += step;
    else
      return;
    event.preventDefault();
    this.selected_id.set(id);
    this._move(id, x, y, box);
  }
  /** keep the whole block on the artwork, then write the new position out */
  _move(id, x, y, box) {
    const canvas = this._canvas()?.nativeElement;
    if (!canvas)
      return;
    const max_x = Math.max(0, 1 - box.width / canvas.width);
    const max_y = Math.max(0, 1 - box.height / canvas.height);
    const next = {
      x: Math.min(Math.max(x, 0), max_x),
      y: Math.min(Math.max(y, 0), max_y)
    };
    const state = this.state();
    this.changed.emit(__spreadProps(__spreadValues({}, state), {
      blocks: state.blocks.map((block) => block.id === id ? __spreadValues(__spreadValues({}, block), next) : block)
    }));
  }
  _toArtwork(event) {
    const canvas = this._canvas()?.nativeElement;
    if (!canvas)
      return null;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height)
      return null;
    return {
      x: (event.clientX - rect.left) / rect.width * canvas.width,
      y: (event.clientY - rect.top) / rect.height * canvas.height
    };
  }
  /** last drawn wins, so the block on top is the one you grab */
  _blockAt(x, y) {
    const blocks = this.state().blocks;
    for (let index = blocks.length - 1; index >= 0; index--) {
      const box = this._boxes.get(blocks[index].id);
      if (!box)
        continue;
      if (x >= box.left && x <= box.left + box.width && y >= box.top && y <= box.top + box.height) {
        return blocks[index];
      }
    }
    return null;
  }
  _loadArtwork(url) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    this._artwork = null;
    this._artwork_url = url;
    image.onerror = () => {
      if (this._artwork_url !== url)
        return;
      this._artwork = null;
      this.failed.emit();
    };
    image.onload = () => {
      if (this._artwork_url !== url)
        return;
      this._artwork = image;
      const canvas = this._canvas()?.nativeElement;
      if (canvas) {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
      }
      this._draw();
    };
    image.src = url;
  }
  _loadLogo(slot, url) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      this._logos[slot] = image;
      this._draw();
    };
    image.src = url;
  }
  _draw() {
    const canvas = this._canvas()?.nativeElement;
    const artwork = this._artwork;
    if (!canvas || !artwork)
      return;
    const context = canvas.getContext("2d");
    if (!context)
      return;
    const { width, height } = canvas;
    context.clearRect(0, 0, width, height);
    context.drawImage(artwork, 0, 0, width, height);
    const state = this.state();
    if (!state)
      return;
    if (state.logo)
      this._drawLogo(context, width, height, state);
    this._drawBlocks(context, width, height, state);
  }
  _drawBlocks(context, width, height, state) {
    this._boxes.clear();
    const wrap_at = width * 0.88;
    for (const block of state.blocks) {
      const text = block.text.trim();
      if (!text)
        continue;
      const size = Math.round(height * ROLE_SIZE[block.role]);
      const weight = block.role === "headline" ? "700" : "400";
      context.font = `${weight} ${size}px ${this._fontFamily(block.font)}`;
      const lines = this._wrap(context, text, wrap_at);
      const leading = Math.round(size * ROLE_LEADING[block.role]);
      const line_height = Math.round(size * 1.2);
      const box = {
        left: block.x * width,
        top: block.y * height,
        width: Math.max(...lines.map((line) => context.measureText(line).width)),
        height: line_height + leading * (lines.length - 1)
      };
      this._boxes.set(block.id, box);
      if (block.panel) {
        const pad = Math.round(size * 0.35);
        context.fillStyle = this._panelColour(block.colour);
        context.fillRect(box.left - pad, box.top - pad * 0.6, box.width + pad * 2, box.height + pad * 1.2);
      }
      context.textAlign = block.align === "centre" ? "center" : block.align;
      context.textBaseline = "top";
      const x = block.align === "left" ? box.left : block.align === "right" ? box.left + box.width : box.left + box.width / 2;
      context.fillStyle = block.colour;
      const offset = (line_height - size) / 2;
      lines.forEach((line, index) => {
        context.fillText(line, x, box.top + offset + leading * index);
      });
      if (this.hover_id() === block.id || this.drag_id() === block.id || this.selected_id() === block.id) {
        this._outline(context, box, Math.round(size * 0.35));
      }
    }
  }
  /** shows what you are about to pick up; never drawn into the saved file */
  _outline(context, box, pad) {
    context.save();
    context.strokeStyle = "rgba(255, 255, 255, 0.9)";
    context.lineWidth = Math.max(2, box.height * 0.02);
    context.setLineDash([context.lineWidth * 3, context.lineWidth * 3]);
    context.strokeRect(box.left - pad, box.top - pad * 0.6, box.width + pad * 2, box.height + pad * 1.2);
    context.restore();
  }
  _drawLogo(context, width, height, state) {
    const margin = Math.round(width * 0.04);
    const target_width = Math.round(width * state.logo_scale);
    const probe = this._logos.on_light || this._logos.on_dark;
    if (!probe)
      return;
    const nominal = Math.round(width * state.logo_scale * 0.4);
    const logo = this._logoFor(state, context, {
      left: state.logo_position.endsWith("left") ? margin : width - target_width - margin,
      top: state.logo_position.startsWith("top") ? margin : height - nominal - margin,
      width: target_width,
      height: nominal
    });
    if (!logo)
      return;
    const scale = target_width / (logo.naturalWidth || target_width);
    const target_height = Math.round(logo.naturalHeight * scale);
    const left = state.logo_position.endsWith("left") ? margin : width - target_width - margin;
    const top = state.logo_position.startsWith("top") ? margin : height - target_height - margin;
    context.drawImage(logo, left, top, target_width, target_height);
  }
  /**
   * On auto, the artwork under the logo decides: a dark corner takes the
   * light version and a light corner takes the dark one.
   */
  _logoFor(state, context, box) {
    const choice = state.logo_choice === "auto" ? this._backgroundIsDark(context, box) ? "on_dark" : "on_light" : state.logo_choice;
    return this._logos[choice] || this._logos.on_light || this._logos.on_dark;
  }
  _backgroundIsDark(context, box) {
    try {
      const { data } = context.getImageData(Math.max(0, Math.round(box.left)), Math.max(0, Math.round(box.top)), Math.max(1, Math.round(box.width)), Math.max(1, Math.round(box.height)));
      let total = 0;
      let count = 0;
      for (let index = 0; index < data.length; index += 16) {
        total += perceivedLightness(data[index], data[index + 1], data[index + 2]);
        count++;
      }
      return count ? total / count < 140 : false;
    } catch {
      return false;
    }
  }
  /** a translucent band behind the words, tinted away from the text colour */
  _panelColour(text_colour) {
    return this._isLight(text_colour) ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.6)";
  }
  _isLight(hex) {
    const value = hex.replace("#", "");
    if (value.length < 6)
      return true;
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return perceivedLightness(r, g, b) > 140;
  }
  _fontFamily(chosen) {
    const family = chosen || this._brand_family();
    return family ? `"${family}", system-ui, sans-serif` : "system-ui, sans-serif";
  }
  /**
   * Line breaks the author typed are kept, including the empty ones.
   * Anything still too wide for the artwork is wrapped on top of that.
   */
  _wrap(context, text, max_width) {
    const lines = [];
    for (const paragraph of text.split("\n")) {
      const words = paragraph.trim().split(/\s+/).filter(Boolean);
      if (!words.length) {
        lines.push("");
        continue;
      }
      let current = "";
      for (const word of words) {
        const candidate = current ? `${current} ${word}` : word;
        if (context.measureText(candidate).width > max_width && current) {
          lines.push(current);
          current = word;
        } else {
          current = candidate;
        }
      }
      if (current)
        lines.push(current);
    }
    return lines;
  }
  static {
    this.\u0275fac = function AiLayerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiLayerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiLayerComponent, selectors: [["ai-layer"]], viewQuery: function AiLayerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._canvas, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { image_url: [1, "image_url"], logo_on_light: [1, "logo_on_light"], logo_on_dark: [1, "logo_on_dark"], brand: [1, "brand"], state: [1, "state"] }, outputs: { changed: "changed", failed: "failed" }, decls: 3, vars: 7, consts: [["canvas", ""], ["tabindex", "0", 1, "max-h-full", "max-w-full", "touch-none", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave", "keydown"]], template: function AiLayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "canvas", 1, 0);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275domListener("pointerdown", function AiLayerComponent_Template_canvas_pointerdown_0_listener($event) {
          return ctx.onPointerDown($event);
        })("pointermove", function AiLayerComponent_Template_canvas_pointermove_0_listener($event) {
          return ctx.onPointerMove($event);
        })("pointerup", function AiLayerComponent_Template_canvas_pointerup_0_listener($event) {
          return ctx.onPointerUp($event);
        })("pointercancel", function AiLayerComponent_Template_canvas_pointercancel_0_listener($event) {
          return ctx.onPointerUp($event);
        })("pointerleave", function AiLayerComponent_Template_canvas_pointerleave_0_listener() {
          return ctx.onPointerLeave();
        })("keydown", function AiLayerComponent_Template_canvas_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        });
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("cursor-grab", ctx.hover_id() && !ctx.drag_id())("cursor-grabbing", !!ctx.drag_id());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.AI_LAYER_PREVIEW"));
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  min-width: 0;\n}\ncanvas[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=ai-layer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiLayerComponent, [{
    type: Component,
    args: [{ selector: "ai-layer", template: `
        <canvas
            #canvas
            tabindex="0"
            class="max-h-full max-w-full touch-none"
            [class.cursor-grab]="hover_id() && !drag_id()"
            [class.cursor-grabbing]="!!drag_id()"
            [attr.aria-label]="'SIGNAGE_MANAGER.AI_LAYER_PREVIEW' | translate"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerUp($event)"
            (pointerleave)="onPointerLeave()"
            (keydown)="onKeyDown($event)"
        ></canvas>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;ad7271488d3aad2d3bb190d663d631369be429a18654777910b68e25767b19cd;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/ai/ai-layer.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  min-width: 0;\n}\ncanvas:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=ai-layer.component.css.map */\n"] }]
  }], () => [], { image_url: [{ type: Input, args: [{ isSignal: true, alias: "image_url", required: true }] }], logo_on_light: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_light", required: false }] }], logo_on_dark: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_dark", required: false }] }], brand: [{ type: Input, args: [{ isSignal: true, alias: "brand", required: false }] }], state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: true }] }], changed: [{ type: Output, args: ["changed"] }], failed: [{ type: Output, args: ["failed"] }], _canvas: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiLayerComponent, { className: "AiLayerComponent", filePath: "apps/signage-manager/src/app/ai/ai-layer.component.ts", lineNumber: 88 });
})();

// apps/signage-manager/src/app/ai/ai-references.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function AiReferencesComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function AiReferencesComponent_Conditional_6_For_2_Template_button_click_4_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removed.emit(item_r3.id));
    });
    \u0275\u0275elementStart(8, "icon", 10);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_12_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.url, \u0275\u0275sanitizeUrl)("alt", ctx_r3.numberedLabel(\u0275$index_12_r5, item_r3.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.offset() + \u0275$index_12_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.AI_REFERENCE_REMOVE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 8, "SIGNAGE_MANAGER.AI_REFERENCE_REMOVE"))("aria-label", \u0275\u0275pipeBind1(7, 10, "SIGNAGE_MANAGER.AI_REFERENCE_REMOVE") + " " + ctx_r3.numberedLabel(\u0275$index_12_r5, item_r3.name));
  }
}
function AiReferencesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, AiReferencesComponent_Conditional_6_For_2_Template, 10, 12, "div", 6, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.items());
  }
}
var AiReferencesComponent = class _AiReferencesComponent {
  constructor() {
    this.items = input.required(
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = input(
      false,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max = input(
      8,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = input(
      "SIGNAGE_MANAGER.AI_INCLUDE_IMAGES",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hint = input(
      "SIGNAGE_MANAGER.AI_INCLUDE_IMAGES_HINT",
      ...ngDevMode ? [{ debugName: "hint" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add_label = input(
      "SIGNAGE_MANAGER.AI_REFERENCE_ADD",
      ...ngDevMode ? [{ debugName: "add_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = input(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.picked = output();
    this.removed = output();
  }
  numberedLabel(index, name) {
    return `${i18n("SIGNAGE_MANAGER.AI_REFERENCE_NUMBER", {
      number: `${this.offset() + index + 1}`
    })}: ${name}`;
  }
  pick(event) {
    const input2 = event.target;
    const files = Array.from(input2.files || []);
    input2.value = "";
    const room = this.max() - this.items().length;
    if (files.length)
      this.picked.emit(files.slice(0, room));
  }
  static {
    this.\u0275fac = function AiReferencesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiReferencesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiReferencesComponent, selectors: [["ai-references"]], hostAttrs: [1, "flex", "flex-col", "gap-2"], inputs: { items: [1, "items"], uploading: [1, "uploading"], max: [1, "max"], title: [1, "title"], hint: [1, "hint"], add_label: [1, "add_label"], offset: [1, "offset"] }, outputs: { picked: "picked", removed: "removed" }, decls: 13, vars: 15, consts: [["picker", ""], [1, "m-0", "text-sm", "font-medium"], [1, "text-base-content/60", "m-0", "text-xs"], [1, "flex", "flex-wrap", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "self-start", 3, "click", "disabled"], ["type", "file", "accept", "image/png,image/jpeg,image/webp", 1, "sr-only", 3, "change"], [1, "border-base-content/10", "bg-base-200", "relative", "h-16", "w-16", "overflow-hidden", "rounded", "border"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], ["aria-hidden", "true", 1, "bg-base-content", "text-base-100", "absolute", "top-0", "left-0", "rounded-br", "px-1", "text-xs", "font-bold"], ["icon", "", "type", "button", 1, "bg-base-100/80", "absolute", "top-0", "right-0", "h-5", "w-5", "rounded-bl", "text-xs", 3, "click", "matTooltip"], [1, "text-sm"]], template: function AiReferencesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "p", 1);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, AiReferencesComponent_Conditional_6_Template, 3, 0, "div", 3);
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AiReferencesComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          const picker_r6 = \u0275\u0275reference(11);
          return \u0275\u0275resetView(picker_r6.click());
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5, 0);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275listener("change", function AiReferencesComponent_Template_input_change_10_listener($event) {
          return ctx.pick($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, ctx.title()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, ctx.hint()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.items().length ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.uploading() || ctx.items().length >= ctx.max());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, ctx.uploading() ? "SIGNAGE_MANAGER.AI_REFERENCE_UPLOADING" : ctx.add_label()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("multiple", ctx.max() > 1 ? "" : null)("aria-label", \u0275\u0275pipeBind1(12, 13, ctx.add_label()));
      }
    }, dependencies: [IconComponent, MatButtonModule, MatButton, MatTooltipModule, MatTooltip, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiReferencesComponent, [{
    type: Component,
    args: [{
      selector: "ai-references",
      host: { class: "flex flex-col gap-2" },
      template: `
        <p class="m-0 text-sm font-medium">
            {{ title() | translate }}
        </p>
        <p class="text-base-content/60 m-0 text-xs">
            {{ hint() | translate }}
        </p>

        @if (items().length) {
            <div class="flex flex-wrap gap-2">
                @for (item of items(); track item.id; let index = $index) {
                    <div
                        class="border-base-content/10 bg-base-200 relative h-16 w-16 overflow-hidden rounded border"
                    >
                        <img
                            [src]="item.url"
                            class="h-full w-full object-cover"
                            [alt]="numberedLabel(index, item.name)"
                        />
                        <span
                            aria-hidden="true"
                            class="bg-base-content text-base-100 absolute top-0 left-0 rounded-br px-1 text-xs font-bold"
                            >{{ offset() + index + 1 }}</span
                        >
                        <button
                            icon
                            type="button"
                            class="bg-base-100/80 absolute top-0 right-0 h-5 w-5 rounded-bl text-xs"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.AI_REFERENCE_REMOVE'
                                    | translate
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.AI_REFERENCE_REMOVE'
                                    | translate
                            "
                            (click)="removed.emit(item.id)"
                            [attr.aria-label]="
                                ('SIGNAGE_MANAGER.AI_REFERENCE_REMOVE'
                                    | translate) +
                                ' ' +
                                numberedLabel(index, item.name)
                            "
                        >
                            <icon class="text-sm">close</icon>
                        </button>
                    </div>
                }
            </div>
        }

        <button
            mat-stroked-button
            type="button"
            class="self-start"
            [disabled]="uploading() || items().length >= max()"
            (click)="picker.click()"
        >
            {{
                (uploading()
                    ? 'SIGNAGE_MANAGER.AI_REFERENCE_UPLOADING'
                    : add_label()
                ) | translate
            }}
        </button>
        <input
            #picker
            type="file"
            [attr.multiple]="max() > 1 ? '' : null"
            class="sr-only"
            accept="image/png,image/jpeg,image/webp"
            [attr.aria-label]="add_label() | translate"
            (change)="pick($event)"
        />
    `,
      imports: [IconComponent, MatButtonModule, MatTooltipModule, TranslatePipe]
    }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true }] }], uploading: [{ type: Input, args: [{ isSignal: true, alias: "uploading", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false }] }], add_label: [{ type: Input, args: [{ isSignal: true, alias: "add_label", required: false }] }], offset: [{ type: Input, args: [{ isSignal: true, alias: "offset", required: false }] }], picked: [{ type: Output, args: ["picked"] }], removed: [{ type: Output, args: ["removed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiReferencesComponent, { className: "AiReferencesComponent", filePath: "apps/signage-manager/src/app/ai/ai-references.component.ts", lineNumber: 96 });
})();

// apps/signage-manager/src/app/ai/ai-image-modal.component.ts
var _forTrack03 = ($index, $item) => $item.job_id + "-" + $item.index;
function AiImageModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ai-layer", 19);
    \u0275\u0275listener("changed", function AiImageModalComponent_Conditional_11_Template_ai_layer_changed_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.layer_state.set($event));
    })("failed", function AiImageModalComponent_Conditional_11_Template_ai_layer_failed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onArtworkFailed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", ctx_r1.state() === "generating");
    \u0275\u0275property("image_url", ctx_r1.selected_object_url())("logo_on_light", ctx_r1.logo_on_light())("logo_on_dark", ctx_r1.logo_on_dark())("brand", ctx_r1.applied_brand())("state", ctx_r1.layer_state());
  }
}
function AiImageModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", ctx_r1.state() === "generating");
    \u0275\u0275property("source", ctx_r1.source_url())("alt", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.AI_CHANGING_THIS"));
  }
}
function AiImageModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.AI_PREVIEW_EMPTY"), " ");
  }
}
function AiImageModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "SIGNAGE_MANAGER.AI_WORKING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.progress_note(), " ");
  }
}
function AiImageModalComponent_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function AiImageModalComponent_Conditional_15_For_6_Template_button_click_0_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(candidate_r4));
    });
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ring-2", ctx_r1.selected()?.upload_id === candidate_r4.upload_id);
    \u0275\u0275property("disabled", ctx_r1.claim_pending())("matTooltip", ctx_r1.versionLabel(candidate_r4));
    \u0275\u0275advance();
    \u0275\u0275property("source", candidate_r4.url)("alt", ctx_r1.versionLabel(candidate_r4));
  }
}
function AiImageModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275repeaterCreate(5, AiImageModalComponent_Conditional_15_For_6_Template, 2, 6, "button", 25, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SIGNAGE_MANAGER.AI_VERSIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rail());
  }
}
function AiImageModalComponent_Conditional_18_Conditional_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r7);
  }
}
function AiImageModalComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 33)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_18_Conditional_8_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.aspect, $event) || (ctx_r1.aspect = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, AiImageModalComponent_Conditional_18_Conditional_8_For_6_Template, 2, 2, "mat-option", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.AI_SHAPE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aspect);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.aspect_options());
  }
}
function AiImageModalComponent_Conditional_18_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r8 = ctx.$implicit;
    \u0275\u0275property("value", count_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(count_r8);
  }
}
function AiImageModalComponent_Conditional_18_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "mat-slide-toggle", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_18_Conditional_16_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.use_branding, $event) || (ctx_r1.use_branding = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.use_branding);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.AI_USE_BRANDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "SIGNAGE_MANAGER.AI_USE_BRANDING_HINT"), " ");
  }
}
function AiImageModalComponent_Conditional_18_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_18_Conditional_17_Conditional_7_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.include_logo, $event) || (ctx_r1.include_logo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.include_logo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.AI_LEAVE_LOGO_SPACE"), " ");
  }
}
function AiImageModalComponent_Conditional_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "mat-slide-toggle", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_18_Conditional_17_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.add_text_with_layer, $event) || (ctx_r1.add_text_with_layer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, AiImageModalComponent_Conditional_18_Conditional_17_Conditional_7_Template, 3, 4, "mat-slide-toggle", 39);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.add_text_with_layer);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER_HINT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_logo() ? 7 : -1);
  }
}
function AiImageModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 30)(5, "textarea", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_18_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.brief, $event) || (ctx_r1.brief = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275conditionalCreate(8, AiImageModalComponent_Conditional_18_Conditional_8_Template, 7, 4, "mat-form-field", 33);
    \u0275\u0275elementStart(9, "mat-form-field", 33)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_18_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.candidates, $event) || (ctx_r1.candidates = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(14, AiImageModalComponent_Conditional_18_For_15_Template, 2, 2, "mat-option", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, AiImageModalComponent_Conditional_18_Conditional_16_Template, 7, 7, "div", 36);
    \u0275\u0275conditionalCreate(17, AiImageModalComponent_Conditional_18_Conditional_17_Template, 8, 8);
    \u0275\u0275elementStart(18, "ai-references", 37);
    \u0275\u0275listener("picked", function AiImageModalComponent_Conditional_18_Template_ai_references_picked_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addReferences($event, "include"));
    })("removed", function AiImageModalComponent_Conditional_18_Template_ai_references_removed_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeReference($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ai-references", 38);
    \u0275\u0275listener("picked", function AiImageModalComponent_Conditional_18_Template_ai_references_picked_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addReferences($event, "style"));
    })("removed", function AiImageModalComponent_Conditional_18_Template_ai_references_removed_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeReference($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 15, ctx_r1.is_edit() ? "SIGNAGE_MANAGER.AI_INSTRUCTION" : "SIGNAGE_MANAGER.AI_BRIEF"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 17, ctx_r1.is_edit() ? "SIGNAGE_MANAGER.AI_INSTRUCTION_HINT" : "SIGNAGE_MANAGER.AI_BRIEF_HINT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.brief);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.is_edit() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 19, "SIGNAGE_MANAGER.AI_OPTIONS_COUNT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.candidates);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.candidate_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_branding() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_edit() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.include_references())("uploading", ctx_r1.uploading_references())("max", ctx_r1.include_max());
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.style_items())("uploading", ctx_r1.uploading_references())("max", ctx_r1.style_max())("offset", ctx_r1.include_references().length);
  }
}
function AiImageModalComponent_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u201C", ctx_r1.brief(), "\u201D ");
  }
}
function AiImageModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, AiImageModalComponent_Conditional_19_Conditional_0_Template, 2, 1, "p", 40);
    \u0275\u0275elementStart(1, "div", 28)(2, "label", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 30)(6, "textarea", 42);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AiImageModalComponent_Conditional_19_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.refinement, $event) || (ctx_r1.refinement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function AiImageModalComponent_Conditional_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refine());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ai-references", 37);
    \u0275\u0275listener("picked", function AiImageModalComponent_Conditional_19_Template_ai_references_picked_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addReferences($event, "include"));
    })("removed", function AiImageModalComponent_Conditional_19_Template_ai_references_removed_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeReference($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ai-references", 38);
    \u0275\u0275listener("picked", function AiImageModalComponent_Conditional_19_Template_ai_references_picked_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addReferences($event, "style"));
    })("removed", function AiImageModalComponent_Conditional_19_Template_ai_references_removed_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeReference($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 44)(14, "p", 45);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ai-layer-controls", 46);
    \u0275\u0275listener("changed", function AiImageModalComponent_Conditional_19_Template_ai_layer_controls_changed_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.layer_state.set($event));
    })("logoPicked", function AiImageModalComponent_Conditional_19_Template_ai_layer_controls_logoPicked_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadLogo($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.brief() ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 20, "SIGNAGE_MANAGER.AI_REFINE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 22, "SIGNAGE_MANAGER.AI_REFINE_HINT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refinement);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.refinement().trim() || !ctx_r1.selected() || ctx_r1.state() === "generating" || ctx_r1.claim_pending());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 24, "SIGNAGE_MANAGER.AI_REFINE_ACTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.include_references())("uploading", ctx_r1.uploading_references())("max", ctx_r1.include_max());
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.style_items())("uploading", ctx_r1.uploading_references())("max", ctx_r1.style_max())("offset", ctx_r1.include_references().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 26, "SIGNAGE_MANAGER.AI_WORDS_AND_LOGO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("state", ctx_r1.layer_state())("logo_on_light", ctx_r1.logo_on_light())("logo_on_dark", ctx_r1.logo_on_dark())("brand", ctx_r1.applied_brand())("can_set_logo", ctx_r1.can_set_logo())("uploading", ctx_r1.uploading_logo());
  }
}
function AiImageModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.quota_note(), " ");
  }
}
function AiImageModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.engine_note(), " ");
  }
}
function AiImageModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function AiImageModalComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CANCEL"), " ");
  }
}
function AiImageModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function AiImageModalComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.brief().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.AI_GENERATE"), " ");
  }
}
function AiImageModalComponent_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.AI_SAVING"), " ");
  }
}
function AiImageModalComponent_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.SAVE"), " ");
  }
}
function AiImageModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function AiImageModalComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275conditionalCreate(1, AiImageModalComponent_Conditional_25_Conditional_1_Template, 3, 3)(2, AiImageModalComponent_Conditional_25_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.selected() || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 1 : 2);
  }
}
var MAX_JOB_WAIT_MS = 30 * 60 * 1e3;
var AiImageModalComponent = class _AiImageModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._service = inject(SignageService);
    this._ai = inject(AiImageService);
    this._layer = viewChild(
      AiLayerComponent,
      ...ngDevMode ? [{ debugName: "_layer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._aspect_options = computed(
      () => {
        const capabilities = this._ai.capabilities();
        const model_options = this._ai.default_model()?.aspect_ratios || [];
        const domain_options = capabilities?.aspect_ratios || [];
        const shared = domain_options.filter((option) => model_options.includes(option));
        return shared.length ? shared : model_options.length ? model_options : domain_options;
      },
      ...ngDevMode ? [{ debugName: "_aspect_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._max_candidates = computed(
      () => {
        const domain_max = this._ai.capabilities()?.max_candidates ?? 2;
        const model_max = this._ai.default_model()?.max_candidates ?? domain_max;
        return Math.max(1, Math.min(domain_max, model_max));
      },
      ...ngDevMode ? [{ debugName: "_max_candidates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = signal(
      "compose",
      ...ngDevMode ? [{ debugName: "state" }] : (
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
    this.brief = signal(
      "",
      ...ngDevMode ? [{ debugName: "brief" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refinement = signal(
      "",
      ...ngDevMode ? [{ debugName: "refinement" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.aspect = linkedSignal(
      () => {
        const options = this._aspect_options();
        const requested = this._data.aspect_ratio || "";
        return options.includes(requested) ? requested : options[0] || requested || "16:9";
      },
      ...ngDevMode ? [{ debugName: "aspect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.candidates = linkedSignal(
      () => {
        return Math.min(2, this._max_candidates());
      },
      ...ngDevMode ? [{ debugName: "candidates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add_text_with_layer = signal(
      !this._data.source_upload_id,
      ...ngDevMode ? [{ debugName: "add_text_with_layer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_logo = signal(
      !this._data.source_upload_id,
      ...ngDevMode ? [{ debugName: "include_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_branding = signal(
      true,
      ...ngDevMode ? [{ debugName: "use_branding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layer_state = signal(
      {
        blocks: [newTextBlock("headline")],
        logo: false,
        logo_position: "bottom-right",
        logo_scale: 0.14,
        logo_choice: "auto"
      },
      ...ngDevMode ? [{ debugName: "layer_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_job_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "current_job_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_object_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_object_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_light = signal(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_light" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_dark = signal(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_dark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading_logo = signal(
      false,
      ...ngDevMode ? [{ debugName: "uploading_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_references = signal(
      [],
      ...ngDevMode ? [{ debugName: "include_references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_reference = signal(
      null,
      ...ngDevMode ? [{ debugName: "style_reference" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading_references = signal(
      false,
      ...ngDevMode ? [{ debugName: "uploading_references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.references = computed(
      () => {
        const style = this.style_reference();
        return style ? [...this.include_references(), style] : this.include_references();
      },
      ...ngDevMode ? [{ debugName: "references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_items = computed(
      () => {
        const style = this.style_reference();
        return style ? [style] : [];
      },
      ...ngDevMode ? [{ debugName: "style_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.claim_pending = signal(
      false,
      ...ngDevMode ? [{ debugName: "claim_pending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand = this._ai.brand_kit;
    this.can_set_logo = this._service.is_sys_admin;
    this.group_id = computed(
      () => this._service.selected_group()?.group.id || void 0,
      ...ngDevMode ? [{ debugName: "group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_branding = computed(
      () => {
        const brand = this.brand();
        if (!brand)
          return false;
        const font = typeof brand.font === "string" ? brand.font : brand.font?.family;
        return !!(brand.organisation || font || Object.keys(brand.palette || {}).length);
      },
      ...ngDevMode ? [{ debugName: "has_branding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.applied_brand = computed(
      () => this.use_branding() ? this.brand() : null,
      ...ngDevMode ? [{ debugName: "applied_brand" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_edit = computed(
      () => !!this._data.source_upload_id,
      ...ngDevMode ? [{ debugName: "is_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.source_url = computed(
      () => {
        const id = this._data.source_upload_id;
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : "";
      },
      ...ngDevMode ? [{ debugName: "source_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_logo = computed(
      () => !!this._ai.capabilities()?.logo_layer,
      ...ngDevMode ? [{ debugName: "has_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.aspect_options = this._aspect_options;
    this.candidate_options = computed(
      () => {
        const max = this._max_candidates();
        return Array.from({ length: max }, (_, index) => index + 1);
      },
      ...ngDevMode ? [{ debugName: "candidate_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_references = computed(
      () => this._ai.default_model()?.max_references ?? 8,
      ...ngDevMode ? [{ debugName: "max_references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_max = computed(
      () => this.max_references() - (this.style_reference() ? 1 : 0),
      ...ngDevMode ? [{ debugName: "include_max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_max = computed(
      () => Math.min(1, this.max_references() - this.include_references().length),
      ...ngDevMode ? [{ debugName: "style_max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.job = computed(
      () => this._ai.jobs()[this.current_job_id()],
      ...ngDevMode ? [{ debugName: "job" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rail = computed(
      () => {
        const jobs = this._ai.jobs();
        const chain = [];
        const seen = /* @__PURE__ */ new Set();
        let id = this.current_job_id();
        while (id && jobs[id] && !seen.has(id)) {
          seen.add(id);
          chain.unshift(jobs[id]);
          id = jobs[id].parent_job_id || "";
        }
        const rail = [];
        chain.forEach((job, version) => {
          (job.images || []).forEach((image, index) => {
            if (!image?.upload_id)
              return;
            rail.push({
              job_id: job.id,
              index,
              upload_id: image.upload_id,
              url: image.url,
              version: version + 1
            });
          });
        });
        return rail;
      },
      ...ngDevMode ? [{ debugName: "rail" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress_note = computed(
      () => {
        const job = this.job();
        if (!job)
          return "";
        return `${job.images_produced} / ${job.candidates}`;
      },
      ...ngDevMode ? [{ debugName: "progress_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.quota_note = computed(
      () => {
        const quota = this._ai.capabilities()?.quota;
        const left = quota?.user_remaining_today;
        if (left === null || left === void 0)
          return "";
        return i18n("SIGNAGE_MANAGER.AI_QUOTA_LEFT", { count: `${left}` });
      },
      ...ngDevMode ? [{ debugName: "quota_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.engine_note = computed(
      () => {
        const capabilities = this._ai.capabilities();
        if (!capabilities?.enabled)
          return "";
        const provider = capabilities.providers.find((p) => p.id === capabilities.default_provider_id) || capabilities.providers[0];
        if (!provider)
          return "";
        const model = provider.models?.find((m) => m.id === provider.default_model);
        return i18n("SIGNAGE_MANAGER.AI_ENGINE", {
          model: model?.name || provider.default_model || "",
          provider: provider.name
        });
      },
      ...ngDevMode ? [{ debugName: "engine_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = computed(
      () => this.is_edit() ? "SIGNAGE_MANAGER.AI_EDIT_IMAGE" : "SIGNAGE_MANAGER.AI_CREATE_IMAGE",
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_overlay = computed(
      () => {
        const state = this.layer_state();
        if (state.blocks.some((block) => block.text.trim()))
          return true;
        return state.logo && !!(this.logo_on_light() || this.logo_on_dark());
      },
      ...ngDevMode ? [{ debugName: "has_overlay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._select_token = 0;
    this.reference_ids = computed(
      () => this.references().map((item) => item.id),
      ...ngDevMode ? [{ debugName: "reference_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._closed = false;
    this._await_timer = null;
  }
  versionLabel(candidate) {
    return i18n("SIGNAGE_MANAGER.AI_VERSION_LABEL", {
      version: `${candidate.version}`,
      option: `${candidate.index + 1}`
    });
  }
  async start() {
    const brief = this.brief().trim();
    if (!brief)
      return;
    const prompt = this.withReferenceRoles(brief);
    this.state.set("generating");
    try {
      const common = {
        prompt,
        candidates: this.candidates(),
        include_logo: this.include_logo(),
        add_text_with_layer: this.add_text_with_layer(),
        use_branding: this.use_branding(),
        group_id: this.group_id(),
        references: this.reference_ids()
      };
      let job;
      if (this._data.source_upload_id) {
        const request = __spreadProps(__spreadValues({}, common), {
          source_upload_id: this._data.source_upload_id,
          source_item_id: this._data.source_item_id
        });
        job = await this._ai.edit(__spreadProps(__spreadValues({}, request), {
          idempotency_key: this._ai.intentKey("edit", request)
        }));
      } else {
        const request = __spreadProps(__spreadValues({}, common), {
          aspect_ratio: this.aspect()
        });
        job = await this._ai.generate(__spreadProps(__spreadValues({}, request), {
          idempotency_key: this._ai.intentKey("generate", request)
        }));
      }
      this.current_job_id.set(job.id);
      this._awaitJob(job.id);
    } catch (error) {
      this.state.set("compose");
      notifyError(errorMessage(error, i18n("SIGNAGE_MANAGER.AI_JOB_FAILED")));
    }
  }
  async refine() {
    const instruction = this.refinement().trim();
    const source = this.selected();
    if (!instruction || !source)
      return;
    this.refinement.set("");
    this.state.set("generating");
    try {
      const request = {
        prompt: this.withReferenceRoles(instruction),
        candidates: 1,
        include_logo: this.include_logo(),
        add_text_with_layer: this.add_text_with_layer(),
        use_branding: this.use_branding(),
        group_id: this.group_id(),
        source_upload_id: source.upload_id,
        parent_job_id: source.job_id,
        references: this.reference_ids()
      };
      const job = await this._ai.edit(__spreadProps(__spreadValues({}, request), {
        idempotency_key: this._ai.intentKey("edit", request)
      }));
      this.current_job_id.set(job.id);
      this._awaitJob(job.id);
    } catch (error) {
      this.state.set("review");
      notifyError(errorMessage(error, i18n("SIGNAGE_MANAGER.AI_JOB_FAILED")));
    }
  }
  onArtworkFailed() {
    this.selected_object_url.set("");
    notifyError(i18n("SIGNAGE_MANAGER.AI_IMAGE_UNREADABLE"));
  }
  async select(candidate) {
    if (this.claim_pending())
      return;
    const token = ++this._select_token;
    this.selected.set(candidate);
    this.selected_object_url.set("");
    const url = await this._ai.loadImage(candidate.url).catch(() => "");
    if (token !== this._select_token)
      return;
    this.selected_object_url.set(url);
  }
  async cancel() {
    const id = this.current_job_id();
    if (id)
      await this._ai.cancel(id);
    this.state.set(this.rail().length ? "review" : "compose");
  }
  /**
   * Say what each attached image is for, after the person's own words. The
   * numbering matches the order the images are sent: the pictures to
   * include first, the style reference last.
   */
  withReferenceRoles(text) {
    const includes = this.include_references().length;
    const style = this.style_reference();
    const lines = [];
    if (includes === 1) {
      lines.push("Include image 1 in the artwork.");
    } else if (includes > 1) {
      lines.push(`Include images 1 to ${includes} in the artwork, arranged so the result is aesthetically pleasing and practical.`);
    }
    if (style) {
      lines.push(`Use image ${includes + 1} as a style guide for how the artwork should look: match its overall look and feel, but do not include image ${includes + 1} or anything from it in the artwork.`);
    }
    if (lines.length) {
      lines.push("Where the description above says more about any of these images, follow the description.");
    }
    return [text, lines.join(" ")].filter(Boolean).join("\n\n");
  }
  /**
   * Attach pictures for this request.
   */
  async addReferences(files, kind) {
    if (!files.length)
      return;
    this.uploading_references.set(true);
    try {
      for (const file of kind === "style" ? files.slice(0, 1) : files) {
        const id = await this._ai.uploadReference(file);
        const item = {
          id,
          name: file.name,
          url: URL.createObjectURL(file)
        };
        if (kind === "style") {
          const previous = this.style_reference();
          if (previous) {
            URL.revokeObjectURL(previous.url);
            this._ai.removeReference(previous.id);
          }
          this.style_reference.set(item);
        } else {
          this.include_references.update((list) => [...list, item]);
        }
      }
    } catch (error) {
      notifyError(errorMessage(error, i18n("SIGNAGE_MANAGER.AI_JOB_FAILED")));
    } finally {
      this.uploading_references.set(false);
    }
  }
  removeReference(id) {
    const item = this.references().find((entry) => entry.id === id);
    if (item)
      URL.revokeObjectURL(item.url);
    if (this.style_reference()?.id === id)
      this.style_reference.set(null);
    this.include_references.update((list) => list.filter((entry) => entry.id !== id));
    this._ai.removeReference(id);
  }
  ngOnDestroy() {
    this._closed = true;
    if (this._await_timer)
      clearTimeout(this._await_timer);
    const running = this.state() === "generating";
    for (const item of this.references()) {
      URL.revokeObjectURL(item.url);
      if (!running)
        this._ai.removeReference(item.id);
    }
  }
  async uploadLogo(file) {
    if (!this.can_set_logo())
      return;
    this.uploading_logo.set(true);
    try {
      await this._ai.uploadBrandLogo(file);
      await this._loadBrandLogos();
      this.layer_state.set(__spreadProps(__spreadValues({}, this.layer_state()), { logo: true }));
      notifySuccess(i18n("SIGNAGE_MANAGER.AI_LOGO_SAVED"));
    } catch (error) {
      notifyError(errorMessage(error, i18n("SIGNAGE_MANAGER.AI_JOB_FAILED")));
    } finally {
      this.uploading_logo.set(false);
    }
  }
  async save() {
    const candidate = this.selected();
    if (!candidate)
      return;
    const name = this._name();
    const overlay = this.has_overlay();
    const blob = overlay ? await this._layer()?.toBlob() : void 0;
    if (overlay && !blob) {
      notifyError(i18n("SIGNAGE_MANAGER.AI_NO_IMAGE"));
      return;
    }
    this.saving.set(true);
    try {
      let media;
      if (blob) {
        const file = new File([blob], `${name}.png`, {
          type: "image/png"
        });
        media = await this._service.addMedia(file, new ws({
          name,
          tags: this._tags(candidate)
        }));
      } else {
        media = this._pending_media || await this._service.addMediaFromUpload(candidate.upload_id, {
          name,
          tags: this._tags(candidate),
          orientation: this.aspect() === "9:16" ? "portrait" : "landscape"
        }, this._data.playlist_id);
        this._pending_media = media;
        if (media?.id) {
          this.claim_pending.set(true);
          await this._ai.claim(candidate.job_id, candidate.upload_id, media.id);
          this.claim_pending.set(false);
          this._pending_media = void 0;
        }
      }
      if (blob && media?.id && this._data.playlist_id) {
        await this._service.addMediaToPlaylist(this._data.playlist_id, media.id);
      }
      if (media?.id) {
        if (media.thumbnail_id) {
          await this._ai.loadImage(`/api/engine/v2/uploads/${media.thumbnail_id}/url`).catch(() => "");
        }
      }
      this._dialog_ref.close(media);
    } catch (error) {
      if (!blob && this._pending_media?.id) {
        await this._service.discardCreatedMedia(this._pending_media.id).then(() => {
          this._pending_media = void 0;
          this.claim_pending.set(false);
        }).catch(() => null);
      }
      notifyError(errorMessage(error, i18n("SIGNAGE_MANAGER.AI_JOB_FAILED")));
    } finally {
      if (!this._pending_media)
        this.claim_pending.set(false);
      this.saving.set(false);
    }
  }
  /** poll until the job reaches a final state, then move on */
  _awaitJob(id) {
    const deadline = Date.now() + MAX_JOB_WAIT_MS;
    const check = () => {
      this._await_timer = null;
      if (this._closed)
        return;
      const job = this._ai.jobs()[id];
      if (!job || !isFinal(job)) {
        if (Date.now() >= deadline) {
          this.state.set(this.rail().length ? "review" : "compose");
          notifyError(i18n("SIGNAGE_MANAGER.AI_JOB_FAILED"));
          return;
        }
        this._await_timer = setTimeout(check, 250);
        return;
      }
      if (job.state === "failed") {
        this.state.set(this.rail().length ? "review" : "compose");
        return;
      }
      if (job.state === "cancelled") {
        this.state.set(this.rail().length ? "review" : "compose");
        return;
      }
      const newest = this.rail().filter((candidate) => candidate.job_id === id);
      if (newest.length)
        this.select(newest[0]);
      this._loadBrandLogos();
      this.state.set("review");
    };
    check();
  }
  /** both saved logos, so the toggle in the sidebar has something to show */
  async _loadBrandLogos() {
    const brand = this.brand();
    const [on_light, on_dark] = await Promise.all([
      this._readUpload(brand?.logo_upload_id),
      this._readUpload(brand?.logo_dark_upload_id)
    ]);
    this.logo_on_light.set(on_light);
    this.logo_on_dark.set(on_dark);
    if ((on_light || on_dark) && this.include_logo()) {
      this.layer_state.set(__spreadProps(__spreadValues({}, this.layer_state()), { logo: true }));
    }
  }
  _readUpload(id) {
    if (!id)
      return Promise.resolve("");
    return this._ai.loadImage(`/api/engine/v2/uploads/${encodeURIComponent(id)}/url`).catch(() => "");
  }
  _name() {
    const brief = (this.brief() || this._data.source_name || "").trim();
    const words = brief.split(/\s+/).slice(0, 6).join(" ");
    return words || i18n("SIGNAGE_MANAGER.AI_DEFAULT_NAME");
  }
  /**
   * Tags are what the media library builds its folders from, so only a label
   * a person would want to browse by belongs here.
   */
  _tags(_candidate) {
    return ["ai-generated"];
  }
  static {
    this.\u0275fac = function AiImageModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiImageModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiImageModalComponent, selectors: [["ai-image-modal"]], viewQuery: function AiImageModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._layer, AiLayerComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 26, vars: 11, consts: [[1, "bg-base-200", "flex", "h-full", "w-full", "flex-col", "overflow-hidden"], [1, "border-base-content/10", "bg-base-100", "flex", "h-14", "shrink-0", "items-center", "justify-between", "border-b", "px-4"], [1, "m-0", "text-lg", "font-medium"], ["icon", "", "mat-dialog-close", "", 3, "disabled"], [1, "flex", "min-h-0", "flex-1", "flex-col", "md:flex-row"], [1, "flex", "min-h-48", "min-w-0", "flex-1", "flex-col", "gap-3", "p-4", "md:min-h-0"], [1, "border-base-content/10", "bg-base-300", "relative", "flex", "min-h-0", "flex-1", "items-center", "justify-center", "overflow-hidden", "rounded", "border"], [1, "h-full", "w-full", 3, "opacity-40", "image_url", "logo_on_light", "logo_on_dark", "brand", "state"], ["auth", "", 1, "max-h-full", "max-w-full", "object-contain", 3, "source", "opacity-40", "alt"], [1, "text-base-content/50", "m-0", "px-6", "text-sm"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "gap-3"], [1, "flex", "shrink-0", "flex-col", "gap-1"], [1, "border-base-content/10", "bg-base-100", "flex", "min-h-0", "w-full", "flex-1", "flex-col", "border-t", "md:w-96", "md:flex-none", "md:shrink-0", "md:border-t-0", "md:border-l"], [1, "flex-1", "space-y-4", "overflow-y-auto", "p-4"], [1, "text-base-content/60", "m-0", "text-xs"], [1, "border-base-content/10", "flex", "shrink-0", "items-center", "justify-end", "gap-2", "border-t", "p-4"], ["mat-stroked-button", "", "type", "button"], ["btn", "", "matRipple", "", 1, "min-w-32", 3, "disabled"], ["btn", "", "matRipple", "", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "h-full", "w-full", 3, "changed", "failed", "image_url", "logo_on_light", "logo_on_dark", "brand", "state"], ["auth", "", 1, "max-h-full", "max-w-full", "object-contain", 3, "source", "alt"], ["diameter", "48"], [1, "m-0", "text-sm"], [1, "text-base-content/60", "m-0", "text-xs", "uppercase"], [1, "flex", "gap-2", "overflow-x-auto", "pb-1"], ["type", "button", 1, "border-base-content/10", "h-16", "w-28", "shrink-0", "overflow-hidden", "rounded", "border", 3, "disabled", "ring-2", "matTooltip"], ["type", "button", 1, "border-base-content/10", "h-16", "w-28", "shrink-0", "overflow-hidden", "rounded", "border", 3, "click", "disabled", "matTooltip"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source", "alt"], [1, "flex", "flex-col"], ["for", "ai-brief", 1, "mb-1", "text-sm"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "ai-brief", "rows", "4", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex", "flex-col", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "flex-col", "gap-1"], ["title", "SIGNAGE_MANAGER.AI_INCLUDE_IMAGES", "hint", "SIGNAGE_MANAGER.AI_INCLUDE_IMAGES_HINT", 3, "picked", "removed", "items", "uploading", "max"], ["title", "SIGNAGE_MANAGER.AI_STYLE_REFERENCE", "hint", "SIGNAGE_MANAGER.AI_STYLE_REFERENCE_HINT", "add_label", "SIGNAGE_MANAGER.AI_REFERENCE_ADD_ONE", 3, "picked", "removed", "items", "uploading", "max", "offset"], [3, "ngModel"], [1, "text-base-content/60", "m-0", "text-xs", "italic"], ["for", "ai-refine", 1, "mb-1", "text-sm"], ["matInput", "", "id", "ai-refine", "rows", "2", 3, "ngModelChange", "placeholder", "ngModel"], ["mat-stroked-button", "", "type", "button", 1, "self-start", 3, "click", "disabled"], [1, "border-base-content/10", "border-t", "pt-4"], [1, "m-0", "mb-2", "text-sm", "font-medium"], [3, "changed", "logoPicked", "state", "logo_on_light", "logo_on_dark", "brand", "can_set_logo", "uploading"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", 1, "min-w-32", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["diameter", "18"]], template: function AiImageModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 4)(9, "section", 5)(10, "div", 6);
        \u0275\u0275conditionalCreate(11, AiImageModalComponent_Conditional_11_Template, 1, 7, "ai-layer", 7)(12, AiImageModalComponent_Conditional_12_Template, 2, 6, "img", 8)(13, AiImageModalComponent_Conditional_13_Template, 3, 3, "p", 9);
        \u0275\u0275conditionalCreate(14, AiImageModalComponent_Conditional_14_Template, 7, 4, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, AiImageModalComponent_Conditional_15_Template, 7, 3, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "aside", 12)(17, "div", 13);
        \u0275\u0275conditionalCreate(18, AiImageModalComponent_Conditional_18_Template, 20, 21)(19, AiImageModalComponent_Conditional_19_Template, 18, 28);
        \u0275\u0275conditionalCreate(20, AiImageModalComponent_Conditional_20_Template, 2, 1, "p", 14);
        \u0275\u0275conditionalCreate(21, AiImageModalComponent_Conditional_21_Template, 2, 1, "p", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "footer", 15);
        \u0275\u0275conditionalCreate(23, AiImageModalComponent_Conditional_23_Template, 3, 3, "button", 16)(24, AiImageModalComponent_Conditional_24_Template, 3, 4, "button", 17)(25, AiImageModalComponent_Conditional_25_Template, 3, 2, "button", 18);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, ctx.heading()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.selected_object_url() ? 11 : ctx.source_url() ? 12 : ctx.state() !== "generating" ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.state() === "generating" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rail().length ? 15 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.rail().length ? 18 : 19);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.quota_note() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.engine_note() ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.state() === "generating" ? 23 : !ctx.rail().length ? 24 : 25);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      IconComponent,
      AiLayerComponent,
      AiLayerControlsComponent,
      AiReferencesComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiImageModalComponent, [{
    type: Component,
    args: [{
      selector: "ai-image-modal",
      template: `
        <div class="bg-base-200 flex h-full w-full flex-col overflow-hidden">
            <header
                class="border-base-content/10 bg-base-100 flex h-14 shrink-0 items-center justify-between border-b px-4"
            >
                <h2 class="m-0 text-lg font-medium">
                    {{ heading() | translate }}
                </h2>
                <button icon mat-dialog-close [disabled]="saving()">
                    <icon>close</icon>
                </button>
            </header>

            <div class="flex min-h-0 flex-1 flex-col md:flex-row">
                <!-- the picture, given the room -->
                <section
                    class="flex min-h-48 min-w-0 flex-1 flex-col gap-3 p-4 md:min-h-0"
                >
                    <div
                        class="border-base-content/10 bg-base-300 relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded border"
                    >
                        @if (selected_object_url()) {
                            <ai-layer
                                class="h-full w-full"
                                [class.opacity-40]="state() === 'generating'"
                                [image_url]="selected_object_url()"
                                [logo_on_light]="logo_on_light()"
                                [logo_on_dark]="logo_on_dark()"
                                [brand]="applied_brand()"
                                [state]="layer_state()"
                                (changed)="layer_state.set($event)"
                                (failed)="onArtworkFailed()"
                            ></ai-layer>
                        } @else if (source_url()) {
                            <img
                                auth
                                [source]="source_url()"
                                class="max-h-full max-w-full object-contain"
                                [class.opacity-40]="state() === 'generating'"
                                [alt]="
                                    'SIGNAGE_MANAGER.AI_CHANGING_THIS'
                                        | translate
                                "
                            />
                        } @else if (state() !== 'generating') {
                            <p class="text-base-content/50 m-0 px-6 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.AI_PREVIEW_EMPTY'
                                        | translate
                                }}
                            </p>
                        }

                        @if (state() === 'generating') {
                            <div
                                class="absolute inset-0 flex flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="48"></mat-spinner>
                                <p class="m-0 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.AI_WORKING' | translate
                                    }}
                                </p>
                                <p class="text-base-content/60 m-0 text-xs">
                                    {{ progress_note() }}
                                </p>
                            </div>
                        }
                    </div>

                    <!-- every candidate of every version, oldest first -->
                    @if (rail().length) {
                        <div class="flex shrink-0 flex-col gap-1">
                            <p
                                class="text-base-content/60 m-0 text-xs uppercase"
                            >
                                {{ 'SIGNAGE_MANAGER.AI_VERSIONS' | translate }}
                            </p>
                            <div class="flex gap-2 overflow-x-auto pb-1">
                                @for (
                                    candidate of rail();
                                    track candidate.job_id +
                                        '-' +
                                        candidate.index
                                ) {
                                    <button
                                        type="button"
                                        [disabled]="claim_pending()"
                                        class="border-base-content/10 h-16 w-28 shrink-0 overflow-hidden rounded border"
                                        [class.ring-2]="
                                            selected()?.upload_id ===
                                            candidate.upload_id
                                        "
                                        [matTooltip]="versionLabel(candidate)"
                                        (click)="select(candidate)"
                                    >
                                        <img
                                            auth
                                            [source]="candidate.url"
                                            class="h-full w-full object-cover"
                                            [alt]="versionLabel(candidate)"
                                        />
                                    </button>
                                }
                            </div>
                        </div>
                    }
                </section>

                <!-- everything that shapes it -->
                <aside
                    class="border-base-content/10 bg-base-100 flex min-h-0 w-full flex-1 flex-col border-t md:w-96 md:flex-none md:shrink-0 md:border-t-0 md:border-l"
                >
                    <div class="flex-1 space-y-4 overflow-y-auto p-4">
                        @if (!rail().length) {
                            <div class="flex flex-col">
                                <label for="ai-brief" class="mb-1 text-sm">{{
                                    (is_edit()
                                        ? 'SIGNAGE_MANAGER.AI_INSTRUCTION'
                                        : 'SIGNAGE_MANAGER.AI_BRIEF'
                                    ) | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <textarea
                                        matInput
                                        id="ai-brief"
                                        rows="4"
                                        [placeholder]="
                                            (is_edit()
                                                ? 'SIGNAGE_MANAGER.AI_INSTRUCTION_HINT'
                                                : 'SIGNAGE_MANAGER.AI_BRIEF_HINT'
                                            ) | translate
                                        "
                                        [(ngModel)]="brief"
                                    ></textarea>
                                </mat-form-field>
                            </div>

                            <div class="flex flex-col gap-3">
                                <!-- an edit comes back at the source's own
                                     shape, so there is nothing here to choose -->
                                @if (!is_edit()) {
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                        subscriptSizing="dynamic"
                                    >
                                        <mat-label>{{
                                            'SIGNAGE_MANAGER.AI_SHAPE'
                                                | translate
                                        }}</mat-label>
                                        <mat-select [(ngModel)]="aspect">
                                            @for (
                                                option of aspect_options();
                                                track option
                                            ) {
                                                <mat-option [value]="option">{{
                                                    option
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                    subscriptSizing="dynamic"
                                >
                                    <mat-label>{{
                                        'SIGNAGE_MANAGER.AI_OPTIONS_COUNT'
                                            | translate
                                    }}</mat-label>
                                    <mat-select [(ngModel)]="candidates">
                                        @for (
                                            count of candidate_options();
                                            track count
                                        ) {
                                            <mat-option [value]="count">{{
                                                count
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            @if (has_branding()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="use_branding"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AI_USE_BRANDING'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.AI_USE_BRANDING_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }

                            <!-- both only shape a new picture: an edit keeps
                                 whatever the image already has -->
                            @if (!is_edit()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="add_text_with_layer"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>

                                @if (has_logo()) {
                                    <mat-slide-toggle
                                        [(ngModel)]="include_logo"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AI_LEAVE_LOGO_SPACE'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                }
                            }

                            <ai-references
                                [items]="include_references()"
                                [uploading]="uploading_references()"
                                [max]="include_max()"
                                title="SIGNAGE_MANAGER.AI_INCLUDE_IMAGES"
                                hint="SIGNAGE_MANAGER.AI_INCLUDE_IMAGES_HINT"
                                (picked)="addReferences($event, 'include')"
                                (removed)="removeReference($event)"
                            ></ai-references>

                            <ai-references
                                [items]="style_items()"
                                [uploading]="uploading_references()"
                                [max]="style_max()"
                                [offset]="include_references().length"
                                title="SIGNAGE_MANAGER.AI_STYLE_REFERENCE"
                                hint="SIGNAGE_MANAGER.AI_STYLE_REFERENCE_HINT"
                                add_label="SIGNAGE_MANAGER.AI_REFERENCE_ADD_ONE"
                                (picked)="addReferences($event, 'style')"
                                (removed)="removeReference($event)"
                            ></ai-references>
                        } @else {
                            <!-- the brief has already been spent; from here the
                                 box asks for a change to what is on screen -->
                            @if (brief()) {
                                <p
                                    class="text-base-content/60 m-0 text-xs italic"
                                >
                                    &ldquo;{{ brief() }}&rdquo;
                                </p>
                            }
                            <div class="flex flex-col">
                                <label for="ai-refine" class="mb-1 text-sm">{{
                                    'SIGNAGE_MANAGER.AI_REFINE' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <textarea
                                        matInput
                                        id="ai-refine"
                                        rows="2"
                                        [placeholder]="
                                            'SIGNAGE_MANAGER.AI_REFINE_HINT'
                                                | translate
                                        "
                                        [(ngModel)]="refinement"
                                    ></textarea>
                                </mat-form-field>
                                <button
                                    mat-stroked-button
                                    type="button"
                                    class="self-start"
                                    [disabled]="
                                        !refinement().trim() ||
                                        !selected() ||
                                        state() === 'generating' ||
                                        claim_pending()
                                    "
                                    (click)="refine()"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.AI_REFINE_ACTION'
                                            | translate
                                    }}
                                </button>
                            </div>

                            <ai-references
                                [items]="include_references()"
                                [uploading]="uploading_references()"
                                [max]="include_max()"
                                title="SIGNAGE_MANAGER.AI_INCLUDE_IMAGES"
                                hint="SIGNAGE_MANAGER.AI_INCLUDE_IMAGES_HINT"
                                (picked)="addReferences($event, 'include')"
                                (removed)="removeReference($event)"
                            ></ai-references>

                            <ai-references
                                [items]="style_items()"
                                [uploading]="uploading_references()"
                                [max]="style_max()"
                                [offset]="include_references().length"
                                title="SIGNAGE_MANAGER.AI_STYLE_REFERENCE"
                                hint="SIGNAGE_MANAGER.AI_STYLE_REFERENCE_HINT"
                                add_label="SIGNAGE_MANAGER.AI_REFERENCE_ADD_ONE"
                                (picked)="addReferences($event, 'style')"
                                (removed)="removeReference($event)"
                            ></ai-references>

                            <div class="border-base-content/10 border-t pt-4">
                                <p class="m-0 mb-2 text-sm font-medium">
                                    {{
                                        'SIGNAGE_MANAGER.AI_WORDS_AND_LOGO'
                                            | translate
                                    }}
                                </p>
                                <ai-layer-controls
                                    [state]="layer_state()"
                                    [logo_on_light]="logo_on_light()"
                                    [logo_on_dark]="logo_on_dark()"
                                    [brand]="applied_brand()"
                                    [can_set_logo]="can_set_logo()"
                                    [uploading]="uploading_logo()"
                                    (changed)="layer_state.set($event)"
                                    (logoPicked)="uploadLogo($event)"
                                ></ai-layer-controls>
                            </div>
                        }

                        @if (quota_note()) {
                            <p class="text-base-content/60 m-0 text-xs">
                                {{ quota_note() }}
                            </p>
                        }
                        @if (engine_note()) {
                            <p class="text-base-content/60 m-0 text-xs">
                                {{ engine_note() }}
                            </p>
                        }
                    </div>

                    <footer
                        class="border-base-content/10 flex shrink-0 items-center justify-end gap-2 border-t p-4"
                    >
                        @if (state() === 'generating') {
                            <button
                                mat-stroked-button
                                type="button"
                                (click)="cancel()"
                            >
                                {{ 'COMMON.CANCEL' | translate }}
                            </button>
                        } @else if (!rail().length) {
                            <button
                                btn
                                matRipple
                                class="min-w-32"
                                [disabled]="!brief().trim()"
                                (click)="start()"
                            >
                                {{ 'SIGNAGE_MANAGER.AI_GENERATE' | translate }}
                            </button>
                        } @else {
                            <button
                                btn
                                matRipple
                                class="flex min-w-32 items-center justify-center gap-2"
                                [disabled]="!selected() || saving()"
                                (click)="save()"
                            >
                                @if (saving()) {
                                    <mat-spinner diameter="18"></mat-spinner>
                                    {{
                                        'SIGNAGE_MANAGER.AI_SAVING' | translate
                                    }}
                                } @else {
                                    {{ 'COMMON.SAVE' | translate }}
                                }
                            </button>
                        }
                    </footer>
                </aside>
            </div>
        </div>
    `,
      imports: [
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
        AiLayerComponent,
        AiLayerControlsComponent,
        AiReferencesComponent
      ]
    }]
  }], null, { _layer: [{ type: ViewChild, args: [forwardRef(() => AiLayerComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiImageModalComponent, { className: "AiImageModalComponent", filePath: "apps/signage-manager/src/app/ai/ai-image-modal.component.ts", lineNumber: 501 });
})();
export {
  AiImageModalComponent
};
//# debugId=193b1119-9362-50c1-b5c5-8bb18465c8fe
//# sourceMappingURL=ai-image-modal.component-ENJ5JGZ4.js.map
