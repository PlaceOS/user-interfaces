import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6MEXNI7P.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-Y67KESXJ.js";
import "./chunk-KPG3MGQK.js";
import "./chunk-BQPWRCHN.js";
import {
  AnnounceDirective
} from "./chunk-JYQ72FU7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MNAOEVWZ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-4MZUVPXU.js";
import {
  TranslatePipe
} from "./chunk-MMKJAMQW.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-WG7PJTZZ.js";
import {
  _MatInternalFormField
} from "./chunk-ENFA7HCT.js";
import "./chunk-AY35JW3W.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import {
  errorMessage,
  i18n
} from "./chunk-7EYRGQZR.js";
import "./chunk-TYLQ2T3C.js";
import "./chunk-7NEE74GJ.js";
import {
  BidiModule,
  FocusMonitor,
  MatRipple,
  MatRippleModule,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-AVEVXYGF.js";
import "./chunk-7H4OKNBG.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Pipe,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  effect,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-Y6KAMZVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

// node_modules/@angular/material/fesm2022/radio.mjs
var _c0 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var MatRadioChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: () => ({
    color: "accent",
    disabledInteractive: false
  })
});
var MatRadioGroup = class _MatRadioGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _value = null;
  _name = inject(_IdGenerator).getId("mat-radio-group-");
  _selected = null;
  _isInitialized = false;
  _labelPosition = "after";
  _disabled = false;
  _required = false;
  _buttonChanges;
  _controlValueAccessorChangeFn = () => {
  };
  onTouched = () => {
  };
  change = new EventEmitter();
  _radios;
  color;
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  _disabledInteractive = false;
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static \u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRadioGroup,
    selectors: [["mat-radio-group"]],
    contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
      }
    },
    hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
    inputs: {
      color: "color",
      name: "name",
      labelPosition: "labelPosition",
      value: "value",
      selected: "selected",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
      provide: MAT_RADIO_GROUP,
      useExisting: _MatRadioGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      }
    }]
  }], null, {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
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
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  _elementRef = inject(ElementRef);
  _changeDetector = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _radioDispatcher = inject(UniqueSelectionDispatcher);
  _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _uniqueId = inject(_IdGenerator).getId("mat-radio-");
  _cleanupClick;
  id = this._uniqueId;
  name;
  ariaLabel;
  ariaLabelledby;
  ariaDescribedby;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  _labelPosition;
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    if (value !== this._required) {
      this._changeDetector.markForCheck();
    }
    this._required = value;
  }
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  change = new EventEmitter();
  radioGroup;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  _checked = false;
  _disabled = false;
  _required = false;
  _value = null;
  _removeUniqueSelectionListener = () => {
  };
  _previousTabIndex;
  _inputElement;
  _rippleTrigger;
  _noopAnimations = _animationsDisabled();
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const radioGroup = inject(MAT_RADIO_GROUP, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.radioGroup = radioGroup;
    this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  _onInputClick = (event) => {
    if (this.disabled && this.disabledInteractive) {
      event.preventDefault();
    }
  };
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static \u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRadioButton,
    selectors: [["mat-radio-button"]],
    viewQuery: function MatRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-radio-button"],
    hostVars: 19,
    hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
          return ctx._inputElement.nativeElement.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      id: "id",
      name: "name",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      value: "value",
      labelPosition: "labelPosition",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioButton"],
    ngContentSelectors: _c2,
    decls: 13,
    vars: 17,
    consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition", "for"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target"], ["type", "radio", "aria-invalid", "false", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], ["aria-hidden", "true", 1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", "aria-hidden", "true", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-internal-form-field-label", "mdc-label"]],
    template: function MatRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "label", 2, 0)(2, "span", 3);
        \u0275\u0275element(3, "span", 4);
        \u0275\u0275elementStart(4, "input", 5, 1);
        \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
          return ctx._onInputInteraction($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275element(7, "span", 7)(8, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("labelPosition", ctx.labelPosition)("for", ctx.inputId);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(5);
        \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mat-mdc-radio-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-radio-button .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);\n  cursor: pointer;\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {\n  opacity: 0.04;\n  transform: scale(1);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--%NS%mat-radio-state-layer-size, 40px);\n  height: var(--%NS%mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-radio-button .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-radio-button .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-radio-button .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--%NS%mat-radio-state-layer-size, 40px);\n  height: var(--%NS%mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));\n  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {\n  pointer-events: auto;\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));\n  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-radio-button .mat-internal-form-field-label:empty {\n  display: none;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {\n  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {\n  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mat-internal-form-field {\n  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));\n  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));\n  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));\n  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));\n  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));\n  cursor: pointer;\n}\n.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {\n  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-radio-button .mat-radio-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {\n  opacity: 0.14;\n}\n.mat-mdc-radio-button .mat-radio-ripple::before {\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-radio-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-radio-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--%NS%mat-radio-touch-target-size, 48px);\n  width: var(--%NS%mat-radio-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--%NS%mat-radio-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-radio-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple, _MatInternalFormField],
      template: '<label mat-internal-form-field [labelPosition]="labelPosition" [for]="inputId" #formField>\n  <span class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <span class="mat-mdc-radio-touch-target"></span>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <span class="mdc-radio__background" aria-hidden="true">\n      <span class="mdc-radio__outer-circle"></span>\n      <span class="mdc-radio__inner-circle"></span>\n    </span>\n    <span mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true"\n         aria-hidden="true">\n      <span class="mat-ripple-element mat-radio-persistent-ripple"></span>\n    </span>\n  </span>\n  <span class="mat-internal-form-field-label mdc-label">\n    <ng-content></ng-content>\n  </span>\n</label>\n',
      styles: ['.mat-mdc-radio-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-radio-button .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  cursor: pointer;\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {\n  opacity: 0.04;\n  transform: scale(1);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-radio-button .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-radio-button .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-radio-button .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {\n  pointer-events: auto;\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-radio-button .mat-internal-form-field-label:empty {\n  display: none;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {\n  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mat-internal-form-field {\n  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));\n  cursor: pointer;\n}\n.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {\n  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-radio-button .mat-radio-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {\n  opacity: 0.14;\n}\n.mat-mdc-radio-button .mat-radio-ripple::before {\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-radio-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-radio-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-radio-touch-target-size, 48px);\n  width: var(--mat-radio-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-radio-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-radio-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    id: [{
      type: Input
    }],
    name: [{
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
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static \u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatRadioModule,
    imports: [MatRippleModule, MatRadioGroup, MatRadioButton],
    exports: [BidiModule, MatRadioGroup, MatRadioButton]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, MatRadioButton, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [BidiModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// libs/payments/src/lib/payment-amount.pipe.ts
function currencyDigits(currency) {
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency
    }).resolvedOptions().maximumFractionDigits ?? 2;
  } catch {
    return 2;
  }
}
function toMajorUnits(amount, currency) {
  return amount / 10 ** currencyDigits(currency);
}
function formatAmount(amount, currency) {
  const code = currency?.toUpperCase() || "USD";
  try {
    return new Intl.NumberFormat(void 0, {
      style: "currency",
      currency: code
    }).format(toMajorUnits(amount || 0, code));
  } catch {
    return `${toMajorUnits(amount || 0, code).toFixed(2)} ${code}`;
  }
}
function unitKey(unit) {
  return `PAYMENTS.UNIT_${(unit || "item").toUpperCase()}`;
}
var PaymentAmountPipe = class _PaymentAmountPipe {
  transform(amount, currency) {
    return formatAmount(amount ?? 0, currency);
  }
  static {
    this.\u0275fac = function PaymentAmountPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentAmountPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "amount", type: _PaymentAmountPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentAmountPipe, [{
    type: Pipe,
    args: [{ name: "amount" }]
  }], null, null);
})();

// libs/payments/src/lib/payment-checkout.ts
var PAYMENT_CHECKOUT = new InjectionToken("PAYMENT_CHECKOUT", { factory: () => false });
var CheckoutCancelledError = class extends Error {
  constructor() {
    super("Payment cancelled");
  }
};
var PaymentWindowClosedError = class extends Error {
  constructor(payment_id, reason = "") {
    super("Payment window closed");
    this.payment_id = payment_id;
    this.reason = reason;
  }
};
var PaymentEndedError = class extends Error {
  constructor(message = "") {
    super(message || i18n("PAYMENTS.PAYMENT_FAILED"));
  }
};
function openPaymentWindow() {
  const window_ref = window.open("", "placeos-payment", "popup,width=520,height=760");
  if (window_ref)
    window_ref.opener = null;
  return window_ref;
}

// libs/payments/src/lib/payment-checkout-modal.component.ts
var _c02 = ["pay_button"];
var _c12 = ["reopen_button"];
var _c22 = ["stop_button"];
var _c3 = (a0) => ({ amount: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function PaymentCheckoutModalComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "amount");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "amount");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", item_r2.quantity, " \xD7 ", \u0275\u0275pipeBind2(6, 5, item_r2.unit_amount, ctx_r2.data.quote.currency), " ", \u0275\u0275pipeBind1(7, 8, ctx_r2.unit_key(item_r2.unit)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, item_r2.amount, ctx_r2.data.quote.currency), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "amount");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "dt");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "amount");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "PAYMENTS.SUBTOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx_r2.data.quote.subtotal, ctx_r2.data.quote.currency), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "PAYMENTS.TAX"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 11, ctx_r2.data.quote.tax, ctx_r2.data.quote.currency), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    \u0275\u0275property("value", method_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r5.brand || method_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", method_r5.last4, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", method_r5.exp_month, "/", method_r5.exp_year, " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fieldset")(1, "legend", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-group", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template_mat_radio_group_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.method_id, $event) || (ctx_r2.method_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, PaymentCheckoutModalComponent_Conditional_4_Conditional_15_For_6_Template, 6, 5, "mat-radio-button", 24, _forTrack0);
    \u0275\u0275elementStart(7, "mat-radio-button", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "PAYMENTS.PAY_WITH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.method_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.data.methods);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.new_method);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "PAYMENTS.NEW_METHOD"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.save_method, $event) || (ctx_r2.save_method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.save_method);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "PAYMENTS.SAVE_METHOD"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 8);
    \u0275\u0275repeaterCreate(4, PaymentCheckoutModalComponent_Conditional_4_For_5_Template, 11, 13, "li", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl", 10);
    \u0275\u0275conditionalCreate(7, PaymentCheckoutModalComponent_Conditional_4_Conditional_7_Template, 14, 14);
    \u0275\u0275elementStart(8, "div", 11)(9, "dt");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template, 10, 8, "fieldset");
    \u0275\u0275conditionalCreate(16, PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template, 3, 4, "mat-checkbox", 13);
    \u0275\u0275conditionalCreate(17, PaymentCheckoutModalComponent_Conditional_4_Conditional_17_Template, 2, 1, "p", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "footer", 15)(19, "button", 16);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_4_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17, 0);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pay());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "amount");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.data.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.data.quote.items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.data.quote.tax > 0 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "PAYMENTS.TOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 11, ctx_r2.data.quote.total, ctx_r2.data.quote.currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.data.methods.length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data.can_save_method && ctx_r2.method_id() === ctx_r2.new_method ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.error() ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 19, "PAYMENTS.PAY_AMOUNT", \u0275\u0275pureFunction1(22, _c3, \u0275\u0275pipeBind2(25, 16, ctx_r2.data.quote.total, ctx_r2.data.quote.currency))), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "icon", 27);
    \u0275\u0275text(2, "tab_close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PaymentCheckoutModalComponent_Conditional_5_Conditional_6_Template, 2, 1, "p", 14);
    \u0275\u0275elementStart(7, "button", 29, 1);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reopen());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "icon", 30);
    \u0275\u0275text(12, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 31);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelPayment());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "PAYMENTS.WINDOW_CLOSED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.error() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.cancelling());
    \u0275\u0275attribute("aria-disabled", ctx_r2.cancelling());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "PAYMENTS.REOPEN_PAYMENT_PAGE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-50", ctx_r2.cancelling());
    \u0275\u0275attribute("aria-disabled", ctx_r2.cancelling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "PAYMENTS.CANCEL_PAYMENT"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 30);
    \u0275\u0275text(7, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.COMPLETE_IN_WINDOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.hosted_url(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "PAYMENTS.OPEN_PAYMENT_PAGE"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PAYMENTS.PROCESSING"));
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275conditionalCreate(2, PaymentCheckoutModalComponent_Conditional_6_Conditional_2_Template, 8, 7)(3, PaymentCheckoutModalComponent_Conditional_6_Conditional_3_Template, 3, 3, "p", 28);
    \u0275\u0275elementStart(4, "button", 33, 2);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stop());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hosted_url() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "PAYMENTS.CANCEL_PAYMENT"), " ");
  }
}
var NEW_METHOD = "";
var PaymentCheckoutModalComponent = class _PaymentCheckoutModalComponent {
  constructor() {
    this._ref = inject(MatDialogRef);
    this._open_payment_id = "";
    this.data = inject(MAT_DIALOG_DATA);
    this.new_method = NEW_METHOD;
    this.unit_key = unitKey;
    this.method_id = signal(
      this.data.methods.find((_) => _.is_default)?.id ?? this.data.methods[0]?.id ?? NEW_METHOD,
      ...ngDevMode ? [{ debugName: "method_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save_method = signal(
      false,
      ...ngDevMode ? [{ debugName: "save_method" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "review",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hosted_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "hosted_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelling = signal(
      false,
      ...ngDevMode ? [{ debugName: "cancelling" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pay_button = viewChild(
      "pay_button",
      ...ngDevMode ? [{ debugName: "_pay_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._reopen_button = viewChild(
      "reopen_button",
      ...ngDevMode ? [{ debugName: "_reopen_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._stop_button = viewChild(
      "stop_button",
      ...ngDevMode ? [{ debugName: "_stop_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => this._pay_button()?.nativeElement.focus());
    effect(() => this._reopen_button()?.nativeElement.focus());
    effect(() => this._stop_button()?.nativeElement.focus());
  }
  async pay() {
    const method_id = this.method_id() || void 0;
    const window_ref = method_id ? null : openPaymentWindow();
    if (!method_id && !window_ref)
      return this._popupBlocked();
    await this._run(window_ref, (options) => this.data.pay(__spreadProps(__spreadValues({}, options), {
      method_id,
      save_method: !method_id && this.save_method()
    })));
  }
  /** Open the hosted page again with a new link from the driver */
  async reopen() {
    const id = this._open_payment_id;
    if (!id || this.cancelling())
      return;
    const window_ref = openPaymentWindow();
    if (!window_ref)
      return this._popupBlocked();
    await this._run(window_ref, (options) => this.data.resume(id, options));
  }
  /**
   * Cancel the open payment and go back to the review. Stays on the open
   * payment when the cancel fails, so the user cannot pay twice.
   */
  async cancelPayment() {
    const id = this._open_payment_id;
    if (!id || this.cancelling())
      return;
    this.cancelling.set(true);
    this.error.set("");
    try {
      await this.data.cancel(id);
      this._open_payment_id = "";
      this.view.set("review");
    } catch (e) {
      this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
    } finally {
      this.cancelling.set(false);
    }
  }
  /** Stop waiting for the hosted page. The service cancels the payment */
  stop() {
    this._abort?.abort();
  }
  close() {
    this._ref.close();
  }
  ngOnDestroy() {
    if (this.view() === "processing")
      return this._abort?.abort();
    if (this._open_payment_id && !this.cancelling()) {
      this.data.cancel(this._open_payment_id).catch(() => null);
    }
  }
  /** Wait for a payment, then close with it or show what went wrong */
  async _run(window_ref, action) {
    this._abort = new AbortController();
    this.error.set("");
    this.hosted_url.set("");
    this.view.set("processing");
    try {
      const payment = await action({
        window: window_ref,
        signal: this._abort.signal,
        on_url: (url) => this.hosted_url.set(url)
      });
      this._open_payment_id = "";
      this._ref.close(payment);
    } catch (e) {
      window_ref?.close();
      if (e instanceof PaymentWindowClosedError) {
        this._open_payment_id = e.payment_id;
        this.view.set("closed");
        this.error.set(e.reason);
        return;
      }
      if (this._open_payment_id && !(e instanceof CheckoutCancelledError) && !(e instanceof PaymentEndedError)) {
        this.view.set("closed");
        this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
        return;
      }
      this._open_payment_id = "";
      this.view.set("review");
      if (!(e instanceof CheckoutCancelledError)) {
        this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
      }
    }
  }
  _popupBlocked() {
    this.error.set(i18n("PAYMENTS.POPUP_BLOCKED"));
  }
  static {
    this.\u0275fac = function PaymentCheckoutModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentCheckoutModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCheckoutModalComponent, selectors: [["payment-checkout-modal"]], viewQuery: function PaymentCheckoutModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._pay_button, _c02, 5)(ctx._reopen_button, _c12, 5)(ctx._stop_button, _c22, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    }, decls: 7, vars: 4, consts: [["pay_button", ""], ["reopen_button", ""], ["stop_button", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-8", "text-center"], [1, "w-md", "max-w-[85vw]", "space-y-4", "p-4"], [1, "text-sm", "opacity-70"], [1, "divide-base-200", "divide-y", "text-sm"], [1, "flex", "items-center", "gap-2", "py-2"], [1, "border-base-200", "space-y-1", "border-t", "pt-2", "text-sm"], [1, "flex", "justify-between", "text-base", "font-medium"], ["total", ""], [3, "ngModel"], ["announce", "", 1, "bg-error/10", "text-error", "rounded-sm", "p-2", "text-sm"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "pay", 1, "flex-1", 3, "click"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-xs", "opacity-70"], [1, "flex", "justify-between"], [1, "mb-1", "text-sm", "font-medium"], [1, "flex", "flex-col", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "capitalize"], [3, "ngModelChange", "ngModel"], [1, "text-5xl", "opacity-60"], ["announce", ""], ["btn", "", "matRipple", "", "name", "reopen", 3, "click"], [1, "ml-2", "text-xl"], ["btn", "", "matRipple", "", "name", "cancel-payment", 1, "clear", 3, "click"], ["diameter", "32", "aria-hidden", "true"], ["btn", "", "matRipple", "", 1, "clear", 3, "click"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener", 1, "inverse", 3, "href"]], template: function PaymentCheckoutModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 3)(1, "h2", 4);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, PaymentCheckoutModalComponent_Conditional_4_Template, 27, 24)(5, PaymentCheckoutModalComponent_Conditional_5_Template, 16, 16, "main", 5)(6, PaymentCheckoutModalComponent_Conditional_6_Template, 8, 4, "main", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "PAYMENTS.CHECKOUT_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() === "review" ? 4 : ctx.view() === "closed" ? 5 : 6);
      }
    }, dependencies: [
      AnnounceDirective,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogTitle,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatRippleModule,
      MatRipple,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-checkout-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentCheckoutModalComponent, [{
    type: Component,
    args: [{ selector: "payment-checkout-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'PAYMENTS.CHECKOUT_TITLE' | translate }}
            </h2>
        </header>
        @if (view() === 'review') {
            <main class="w-md max-w-[85vw] space-y-4 p-4">
                <p class="text-sm opacity-70">{{ data.description }}</p>
                <ul class="divide-base-200 divide-y text-sm">
                    @for (item of data.quote.items; track $index) {
                        <li class="flex items-center gap-2 py-2">
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{ item.name }}
                                </div>
                                <div class="text-xs opacity-70">
                                    {{ item.quantity }} \xD7
                                    {{
                                        item.unit_amount
                                            | amount: data.quote.currency
                                    }}
                                    {{ unit_key(item.unit) | translate }}
                                </div>
                            </div>
                            <div>
                                {{ item.amount | amount: data.quote.currency }}
                            </div>
                        </li>
                    }
                </ul>
                <dl class="border-base-200 space-y-1 border-t pt-2 text-sm">
                    @if (data.quote.tax > 0) {
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.SUBTOTAL' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.subtotal
                                        | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.TAX' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.tax | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                    }
                    <div class="flex justify-between text-base font-medium">
                        <dt>{{ 'PAYMENTS.TOTAL' | translate }}</dt>
                        <dd total>
                            {{ data.quote.total | amount: data.quote.currency }}
                        </dd>
                    </div>
                </dl>
                @if (data.methods.length) {
                    <fieldset>
                        <legend class="mb-1 text-sm font-medium">
                            {{ 'PAYMENTS.PAY_WITH' | translate }}
                        </legend>
                        <mat-radio-group
                            class="flex flex-col"
                            [(ngModel)]="method_id"
                        >
                            @for (method of data.methods; track method.id) {
                                <mat-radio-button [value]="method.id">
                                    <span class="capitalize">{{
                                        method.brand || method.type
                                    }}</span>
                                    \u2022\u2022\u2022\u2022 {{ method.last4 }}
                                    <span class="text-xs opacity-70">
                                        {{ method.exp_month }}/{{
                                            method.exp_year
                                        }}
                                    </span>
                                </mat-radio-button>
                            }
                            <mat-radio-button [value]="new_method">
                                {{ 'PAYMENTS.NEW_METHOD' | translate }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </fieldset>
                }
                @if (data.can_save_method && method_id() === new_method) {
                    <mat-checkbox [(ngModel)]="save_method">
                        {{ 'PAYMENTS.SAVE_METHOD' | translate }}
                    </mat-checkbox>
                }
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    (click)="close()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    #pay_button
                    btn
                    matRipple
                    name="pay"
                    class="flex-1"
                    (click)="pay()"
                >
                    {{
                        'PAYMENTS.PAY_AMOUNT'
                            | translate
                                : {
                                      amount:
                                          data.quote.total
                                          | amount: data.quote.currency,
                                  }
                    }}
                </button>
            </footer>
        } @else if (view() === 'closed') {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <icon class="text-5xl opacity-60">tab_close</icon>
                <p announce>{{ 'PAYMENTS.WINDOW_CLOSED' | translate }}</p>
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
                <button
                    #reopen_button
                    btn
                    matRipple
                    name="reopen"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="reopen()"
                >
                    {{ 'PAYMENTS.REOPEN_PAYMENT_PAGE' | translate }}
                    <icon class="ml-2 text-xl">open_in_new</icon>
                </button>
                <button
                    btn
                    matRipple
                    name="cancel-payment"
                    class="clear"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="cancelPayment()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        } @else {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                @if (hosted_url()) {
                    <p announce>
                        {{ 'PAYMENTS.COMPLETE_IN_WINDOW' | translate }}
                    </p>
                    <a
                        btn
                        matRipple
                        class="inverse"
                        target="_blank"
                        rel="noopener"
                        [href]="hosted_url()"
                    >
                        {{ 'PAYMENTS.OPEN_PAYMENT_PAGE' | translate }}
                        <icon class="ml-2 text-xl">open_in_new</icon>
                    </a>
                } @else {
                    <p announce>{{ 'PAYMENTS.PROCESSING' | translate }}</p>
                }
                <button
                    #stop_button
                    btn
                    matRipple
                    class="clear"
                    (click)="stop()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        }
    `, imports: [
      AnnounceDirective,
      FormsModule,
      IconComponent,
      MatCheckboxModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/payment-checkout-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-checkout-modal.component.css.map */\n"] }]
  }], () => [], { _pay_button: [{ type: ViewChild, args: ["pay_button", { isSignal: true }] }], _reopen_button: [{ type: ViewChild, args: ["reopen_button", { isSignal: true }] }], _stop_button: [{ type: ViewChild, args: ["stop_button", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentCheckoutModalComponent, { className: "PaymentCheckoutModalComponent", filePath: "libs/payments/src/lib/payment-checkout-modal.component.ts", lineNumber: 267 });
})();
export {
  PaymentCheckoutModalComponent
};
//# debugId=b7a79d7d-078c-5f24-beca-9b0fa0520a3f
//# sourceMappingURL=payment-checkout-modal.component-PZ6T2BNA.js.map
