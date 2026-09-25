import {
  BidiModule,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  HostAttributeToken,
  InjectionToken,
  Input,
  MatRipple,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
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
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵviewQuery
} from "./chunk-56VJTSNA.js";

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

export {
  MatSlideToggle,
  MatSlideToggleModule
};
//# debugId=1231742c-89ee-5006-a0dc-a747e2aa587b
//# sourceMappingURL=chunk-TXSTIPM2.js.map
