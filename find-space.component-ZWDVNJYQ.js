import {
  FeaturesFilterService
} from "./chunk-IZXZNEAN.js";
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-X7IRAOWB.js";
import {
  SpacesService
} from "./chunk-GYR57WXT.js";
import {
  InteractiveMapComponent,
  MapPinComponent
} from "./chunk-KGX726EO.js";
import {
  DateFieldComponent,
  DurationFieldComponent,
  MatCheckbox,
  MatCheckboxModule,
  TimeFieldComponent
} from "./chunk-G3QCSD4X.js";
import {
  AuthenticatedImageDirective
} from "./chunk-XG7Y3YB3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SelectionModel
} from "./chunk-FS4OS6S5.js";
import {
  EventFormService,
  SpacePipe
} from "./chunk-7HZ2LQHT.js";
import "./chunk-EPEVYB6A.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-W4T6LNJV.js";
import "./chunk-3EHHJCC3.js";
import {
  FormField,
  TranslatePipe
} from "./chunk-A4CHXSQT.js";
import "./chunk-T3PDP6XB.js";
import "./chunk-HNTQUXRO.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4TLMJZUU.js";
import {
  AsyncHandler,
  BidiModule,
  DOWN_ARROW,
  Directionality,
  ENTER,
  FocusMonitor,
  FormsModule,
  IconComponent,
  LEFT_ARROW,
  MatOption,
  MatPseudoCheckbox,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  errorMessage,
  firstValueWhere,
  hasModifierKey,
  notifyError,
  ɵNgNoValidate
} from "./chunk-MTUTCQJM.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  Router,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-LEBJHAXW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-pseudo-checkbox", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: () => ({
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  })
});
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var MatButtonToggleChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  _rawValue;
  _controlValueAccessorChangeFn = () => {
  };
  _onTouched = () => {
  };
  _buttonToggles;
  appearance;
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  vertical = false;
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  valueChange = new EventEmitter();
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  change = new EventEmitter();
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this._hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this._hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
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
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _keydown(event) {
    if (this.multiple || this.disabled || hasModifierKey(event)) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static \u0275fac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatButtonToggleGroup,
    selectors: [["mat-button-toggle-group"]],
    contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
      }
    },
    hostAttrs: [1, "mat-button-toggle-group"],
    hostVars: 6,
    hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      appearance: "appearance",
      name: "name",
      vertical: [2, "vertical", "vertical", booleanAttribute],
      value: "value",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      change: "change"
    },
    exportAs: ["matButtonToggleGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
      provide: MAT_BUTTON_TOGGLE_GROUP,
      useExisting: _MatButtonToggleGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
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
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationDisabled = _animationsDisabled();
  _checked = false;
  ariaLabel;
  ariaLabelledby = null;
  _buttonElement;
  buttonToggleGroup;
  get buttonId() {
    return `${this.id}-button`;
  }
  id;
  name;
  value;
  get tabIndex() {
    return this._tabIndex();
  }
  set tabIndex(value) {
    this._tabIndex.set(value);
  }
  _tabIndex;
  disableRipple = false;
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = signal(parseInt(defaultTabIndex) || 0, ...ngDevMode ? [{
      debugName: "_tabIndex"
    }] : []);
    this.buttonToggleGroup = toggleGroup;
    this._appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this._disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (!this._animationDisabled) {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static \u0275fac = function MatButtonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatButtonToggle,
    selectors: [["mat-button-toggle"]],
    viewQuery: function MatButtonToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
      }
    },
    hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
    hostVars: 14,
    hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
          return ctx.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      id: "id",
      name: "name",
      value: "value",
      tabIndex: "tabIndex",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      appearance: "appearance",
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matButtonToggle"],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 13,
    consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
    template: function MatButtonToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
          return ctx._onButtonClick();
        });
        \u0275\u0275conditionalCreate(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "span", 4)(6, "span", 5);
      }
      if (rf & 2) {
        const button_r2 = \u0275\u0275reference(1);
        \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
        \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("matRippleTrigger", button_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
      }
    },
    dependencies: [MatRipple, MatPseudoCheckbox],
    styles: [".mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: var(--%NS%mat-button-toggle-legacy-shape);\n  transform: translateZ(0);\n}\n.mat-button-toggle-standalone:not([class*=mat-elevation-z]),\n.mat-button-toggle-group:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n@media (forced-colors: active) {\n  .mat-button-toggle-standalone,\n  .mat-button-toggle-group {\n    outline: solid 1px;\n  }\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,\n.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {\n  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),\n.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n@media (forced-colors: active) {\n  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n  .mat-button-toggle-group-appearance-standard {\n    outline: 0;\n  }\n}\n\n.mat-button-toggle-vertical {\n  flex-direction: column;\n}\n.mat-button-toggle-vertical .mat-button-toggle-label-content {\n  display: block;\n}\n\n.mat-button-toggle {\n  white-space: nowrap;\n  position: relative;\n  color: var(--%NS%mat-button-toggle-legacy-text-color);\n  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);\n  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);\n  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);\n  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);\n  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);\n  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);\n}\n.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {\n  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);\n}\n.mat-button-toggle .mat-icon svg {\n  vertical-align: top;\n}\n\n.mat-button-toggle-checkbox-wrapper {\n  display: inline-block;\n  justify-content: flex-start;\n  align-items: center;\n  width: 0;\n  height: 18px;\n  line-height: 18px;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translate3d(0, -50%, 0);\n}\n[dir=rtl] .mat-button-toggle-checkbox-wrapper {\n  left: auto;\n  right: 16px;\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {\n  left: 12px;\n}\n[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {\n  left: auto;\n  right: 12px;\n}\n.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {\n  width: 18px;\n}\n.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {\n  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {\n  transition: none;\n}\n\n.mat-button-toggle-checked {\n  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);\n  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);\n}\n\n.mat-button-toggle-disabled {\n  pointer-events: none;\n  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);\n  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);\n  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);\n}\n\n.mat-button-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-button-toggle-appearance-standard {\n  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));\n  background-color: var(--%NS%mat-button-toggle-background-color, transparent);\n  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));\n  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));\n  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));\n  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n}\n.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {\n  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));\n}\n[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {\n  border-left: none;\n  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-checked {\n  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));\n  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {\n  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {\n  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {\n  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {\n  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {\n  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n@media (hover: none) {\n  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {\n    display: none;\n  }\n}\n\n.mat-button-toggle-label-content {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  padding: 0 16px;\n  line-height: var(--%NS%mat-button-toggle-legacy-height);\n  position: relative;\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  padding: 0 12px;\n  line-height: var(--%NS%mat-button-toggle-height, 40px);\n}\n\n.mat-button-toggle-label-content > * {\n  vertical-align: middle;\n}\n\n.mat-button-toggle-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0;\n  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);\n}\n\n@media (forced-colors: active) {\n  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {\n    border-bottom: solid 500px;\n    opacity: 0.5;\n    height: 0;\n  }\n  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {\n    opacity: 0.6;\n  }\n  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n    border-bottom: solid 500px;\n  }\n}\n.mat-button-toggle .mat-button-toggle-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.mat-button-toggle-button {\n  border: 0;\n  background: none;\n  color: inherit;\n  padding: 0;\n  margin: 0;\n  font: inherit;\n  outline: none;\n  width: 100%;\n  cursor: pointer;\n}\n.mat-button-toggle-animations-enabled .mat-button-toggle-button {\n  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-button-toggle-vertical .mat-button-toggle-button {\n  transition: none;\n}\n.mat-button-toggle-disabled .mat-button-toggle-button {\n  cursor: default;\n}\n.mat-button-toggle-button::-moz-focus-inner {\n  border: 0;\n}\n.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {\n  padding-left: 30px;\n}\n[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {\n  padding-left: 0;\n  padding-right: 30px;\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {\n  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n}\n\n.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {\n  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n}\n.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {\n  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n}\n\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {\n  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {\n  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="disableRipple || disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: var(--mat-button-toggle-legacy-shape);\n  transform: translateZ(0);\n}\n.mat-button-toggle-standalone:not([class*=mat-elevation-z]),\n.mat-button-toggle-group:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n@media (forced-colors: active) {\n  .mat-button-toggle-standalone,\n  .mat-button-toggle-group {\n    outline: solid 1px;\n  }\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,\n.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {\n  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),\n.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n@media (forced-colors: active) {\n  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n  .mat-button-toggle-group-appearance-standard {\n    outline: 0;\n  }\n}\n\n.mat-button-toggle-vertical {\n  flex-direction: column;\n}\n.mat-button-toggle-vertical .mat-button-toggle-label-content {\n  display: block;\n}\n\n.mat-button-toggle {\n  white-space: nowrap;\n  position: relative;\n  color: var(--mat-button-toggle-legacy-text-color);\n  font-family: var(--mat-button-toggle-legacy-label-text-font);\n  font-size: var(--mat-button-toggle-legacy-label-text-size);\n  line-height: var(--mat-button-toggle-legacy-label-text-line-height);\n  font-weight: var(--mat-button-toggle-legacy-label-text-weight);\n  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);\n  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);\n}\n.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {\n  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);\n}\n.mat-button-toggle .mat-icon svg {\n  vertical-align: top;\n}\n\n.mat-button-toggle-checkbox-wrapper {\n  display: inline-block;\n  justify-content: flex-start;\n  align-items: center;\n  width: 0;\n  height: 18px;\n  line-height: 18px;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translate3d(0, -50%, 0);\n}\n[dir=rtl] .mat-button-toggle-checkbox-wrapper {\n  left: auto;\n  right: 16px;\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {\n  left: 12px;\n}\n[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {\n  left: auto;\n  right: 12px;\n}\n.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {\n  width: 18px;\n}\n.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {\n  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {\n  transition: none;\n}\n\n.mat-button-toggle-checked {\n  color: var(--mat-button-toggle-legacy-selected-state-text-color);\n  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);\n}\n\n.mat-button-toggle-disabled {\n  pointer-events: none;\n  color: var(--mat-button-toggle-legacy-disabled-state-text-color);\n  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);\n  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);\n}\n\n.mat-button-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-button-toggle-appearance-standard {\n  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));\n  background-color: var(--mat-button-toggle-background-color, transparent);\n  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));\n  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {\n  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));\n}\n[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {\n  border-left: none;\n  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-checked {\n  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));\n  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {\n  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {\n  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {\n  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));\n}\n.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {\n  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {\n  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n@media (hover: none) {\n  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {\n    display: none;\n  }\n}\n\n.mat-button-toggle-label-content {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  padding: 0 16px;\n  line-height: var(--mat-button-toggle-legacy-height);\n  position: relative;\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  padding: 0 12px;\n  line-height: var(--mat-button-toggle-height, 40px);\n}\n\n.mat-button-toggle-label-content > * {\n  vertical-align: middle;\n}\n\n.mat-button-toggle-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0;\n  background-color: var(--mat-button-toggle-legacy-state-layer-color);\n}\n\n@media (forced-colors: active) {\n  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {\n    border-bottom: solid 500px;\n    opacity: 0.5;\n    height: 0;\n  }\n  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {\n    opacity: 0.6;\n  }\n  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n    border-bottom: solid 500px;\n  }\n}\n.mat-button-toggle .mat-button-toggle-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.mat-button-toggle-button {\n  border: 0;\n  background: none;\n  color: inherit;\n  padding: 0;\n  margin: 0;\n  font: inherit;\n  outline: none;\n  width: 100%;\n  cursor: pointer;\n}\n.mat-button-toggle-animations-enabled .mat-button-toggle-button {\n  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-button-toggle-vertical .mat-button-toggle-button {\n  transition: none;\n}\n.mat-button-toggle-disabled .mat-button-toggle-button {\n  cursor: default;\n}\n.mat-button-toggle-button::-moz-focus-inner {\n  border: 0;\n}\n.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {\n  padding-left: 30px;\n}\n[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {\n  padding-left: 0;\n  padding-right: 30px;\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {\n  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n}\n\n.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {\n  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n}\n.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {\n  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n}\n\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {\n  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {\n  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));\n}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
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
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static \u0275fac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatButtonToggleModule,
    imports: [MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
    exports: [BidiModule, MatButtonToggleGroup, MatButtonToggle]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, MatButtonToggle, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [BidiModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// apps/outlook-addin/src/app/rooms/filter-space.component.ts
var _c02 = () => ({ standalone: true });
function FilterSpaceComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 11);
    \u0275\u0275text(1, " Location ");
    \u0275\u0275elementEnd();
  }
}
function FilterSpaceComponent_Conditional_1_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r4 = ctx.$implicit;
    \u0275\u0275property("value", bld_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r4.display_name || bld_r4.name, " ");
  }
}
function FilterSpaceComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 12)(1, "mat-select", 26);
    \u0275\u0275listener("ngModelChange", function FilterSpaceComponent_Conditional_1_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, FilterSpaceComponent_Conditional_1_Conditional_15_For_3_Template, 2, 2, "mat-option", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(2, _c02));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function FilterSpaceComponent_Conditional_1_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 28)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-checkbox", 29);
    \u0275\u0275twoWayListener("ngModelChange", function FilterSpaceComponent_Conditional_1_For_42_Template_mat_checkbox_ngModelChange_4_listener($event) {
      const feature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(feature_r6.value, $event) || (feature_r6.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FilterSpaceComponent_Conditional_1_For_42_Template_mat_checkbox_change_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.getSelectedFeatures());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feature_r6.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", feature_r6.value);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(3, _c02));
    \u0275\u0275control();
  }
}
function FilterSpaceComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function FilterSpaceComponent_Conditional_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "button", 5);
    \u0275\u0275listener("click", function FilterSpaceComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(5, "icon", 6);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, " Space Filters");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "section", 8)(10, "div", 3)(11, "div", 9);
    \u0275\u0275text(12, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275conditionalCreate(14, FilterSpaceComponent_Conditional_1_Conditional_14_Template, 2, 0, "label", 11);
    \u0275\u0275conditionalCreate(15, FilterSpaceComponent_Conditional_1_Conditional_15_Template, 4, 3, "mat-form-field", 12);
    \u0275\u0275elementStart(16, "div", 10)(17, "label", 11);
    \u0275\u0275text(18, " Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "a-date-field", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "label", 11);
    \u0275\u0275text(23, " Start Time* ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a-time-field", 16);
    \u0275\u0275listener("ngModelChange", function FilterSpaceComponent_Conditional_1_Template_a_time_field_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "label", 11);
    \u0275\u0275text(27, " End Time* ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "a-duration-field", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(29, "section", 8)(30, "div", 3)(31, "div", 9);
    \u0275\u0275text(32, "Favourites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19)(34, "span");
    \u0275\u0275text(35, "Only show favourite rooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-checkbox", 20);
    \u0275\u0275twoWayListener("ngModelChange", function FilterSpaceComponent_Conditional_1_Template_mat_checkbox_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.show_favourites, $event) || (ctx_r1.show_favourites = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "section", 21)(38, "div", 22)(39, "div", 9);
    \u0275\u0275text(40, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, FilterSpaceComponent_Conditional_1_For_42_Template, 5, 4, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "section", 23)(44, "button", 24)(45, "span", 25);
    \u0275\u0275text(46, "Apply Filters");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.has_multiple_buildings() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.has_multiple_buildings() ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("from", ctx_r1.minDate)("formField", ctx_r1.form.date);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(13, _c02));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.model().date)("max", 10 * 60)("min", 60)("step", 60)("formField", ctx_r1.form.duration);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.show_favourites);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c02));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.features());
  }
}
var FilterSpaceComponent = class _FilterSpaceComponent {
  constructor() {
    this.data = inject(MAT_BOTTOM_SHEET_DATA);
    this._bottomsheetRef = inject(MatBottomSheetRef);
    this._featuresFilterService = inject(FeaturesFilterService);
    this._state = inject(EventFormService);
    this._org = inject(OrganisationService);
    this.buildings = this._org.building_list;
    this.building = this._org.active_building;
    this.features = this._featuresFilterService.features;
    this.show_favourites = this._featuresFilterService.show_favourites;
    this.has_multiple_buildings = computed(
      () => this.buildings().length > 1,
      ...ngDevMode ? [{ debugName: "has_multiple_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = this._state.form;
    this.model = this._state.model;
    this.minDate = Date.now();
    this.setBuilding = (b) => this._org.building = b;
  }
  applyFilters() {
    this._featuresFilterService.applyFilter();
    this._bottomsheetRef.dismiss(true);
  }
  getSelectedFeatures() {
    this._featuresFilterService.getSelectedFeatures();
  }
  closeModal() {
    this._bottomsheetRef.dismiss();
  }
  static {
    this.\u0275fac = function FilterSpaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterSpaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterSpaceComponent, selectors: [["", "filter-space", ""]], decls: 2, vars: 1, consts: [[1, "z-0", "m-0", "flex", "min-h-[800px]", "flex-1", "flex-col", "overflow-y-auto"], [3, "ngSubmit"], [1, "border-base-200", "flex", "flex-col", "items-center", "border-b", "py-5"], [1, "flex", "w-[calc(100%-2rem)]", "max-w-90", "flex-col", "self-center"], [1, "flex", "flex-row", "items-center"], ["icon", "", "matRipple", "", "type", "button", 3, "click"], [1, "flex", "items-center", "justify-center", "text-3xl", "text-gray-700"], [1, "ml-6", "flex", "items-center", "text-xl", "font-bold"], [1, "border-base-200", "flex", "flex-col", "items-center", "border-b"], [1, "my-2", "text-lg"], [1, "flex", "flex-col"], [1, "mb-1", "text-sm", "font-bold", "text-gray-700"], ["overlay", "", "buildings", "", "appearance", "outline", 1, "w-full"], [3, "from", "formField"], [1, "flex", "w-full", "flex-row", "space-x-2"], [1, "flex", "w-1/3", "flex-1", "flex-col"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ml-auto", "flex", "w-1/3", "flex-1", "flex-col"], [3, "time", "max", "min", "step", "formField"], [1, "mb-2", "flex", "flex-row"], [1, "ml-auto", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "border-base-200", "flex", "flex-col"], [1, "mx-auto", "w-[calc(100%-2rem)]", "max-w-90"], [1, "top-box-shadow", "border-base-200", "mt-5", "flex", "flex-col", "items-center", "justify-center", "border-t", "py-3"], ["btn", "", "matRipple", "", "type", "submit", 1, "filter-button", "max-w-[calc(100%", "-", "2rem)]", "border-secondary", "bg-secondary", "mx-auto", "min-w-[300px]", "text-center", "text-sm"], [1, ""], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "mb-1", "flex", "flex-row"], [1, "checkbox", "ml-auto", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"]], template: function FilterSpaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, FilterSpaceComponent_Conditional_1_Template, 47, 15, "form");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form ? 1 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      FormField,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterSpaceComponent, [{
    type: Component,
    args: [{ selector: "[filter-space]", template: `
        <div class="z-0 m-0 flex min-h-[800px] flex-1 flex-col overflow-y-auto">
            @if (form) {
                <form (ngSubmit)="applyFilters()">
                    <section
                        class="border-base-200 flex flex-col items-center border-b py-5"
                    >
                        <div
                            class="flex w-[calc(100%-2rem)] max-w-90 flex-col self-center"
                        >
                            <div class="flex flex-row items-center">
                                <button
                                    icon
                                    matRipple
                                    type="button"
                                    (click)="closeModal()"
                                >
                                    <icon
                                        class="flex items-center justify-center text-3xl text-gray-700"
                                        >close</icon
                                    >
                                </button>
                                <span
                                    class="ml-6 flex items-center text-xl font-bold"
                                >
                                    Space Filters</span
                                >
                            </div>
                        </div>
                    </section>
                    <section
                        class="border-base-200 flex flex-col items-center border-b"
                    >
                        <div
                            class="flex w-[calc(100%-2rem)] max-w-90 flex-col self-center"
                        >
                            <div class="my-2 text-lg">Details</div>
                            <div class="flex flex-col">
                                @if (has_multiple_buildings()) {
                                    <label
                                        class="mb-1 text-sm font-bold text-gray-700"
                                    >
                                        Location
                                    </label>
                                }
                                @if (has_multiple_buildings()) {
                                    <mat-form-field
                                        overlay
                                        buildings
                                        class="w-full"
                                        appearance="outline"
                                    >
                                        <mat-select
                                            placeholder="Select Building..."
                                            [ngModel]="building()"
                                            (ngModelChange)="
                                                setBuilding($event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                bld of buildings();
                                                track bld
                                            ) {
                                                <mat-option [value]="bld">
                                                    {{
                                                        bld.display_name ||
                                                            bld.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                }
                                <div class="flex flex-col">
                                    <label
                                        class="mb-1 text-sm font-bold text-gray-700"
                                    >
                                        Date
                                    </label>
                                    <a-date-field
                                        [from]="minDate"
                                        [formField]="form.date"
                                    ></a-date-field>
                                    <div class="flex w-full flex-row space-x-2">
                                        <div class="flex w-1/3 flex-1 flex-col">
                                            <label
                                                class="mb-1 text-sm font-bold text-gray-700"
                                            >
                                                Start Time*
                                            </label>
                                            <a-time-field
                                                [ngModel]="model().date"
                                                (ngModelChange)="
                                                    model.update((m) => ({
                                                        ...m,
                                                        date: $event,
                                                    }))
                                                "
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                            ></a-time-field>
                                        </div>
                                        <div
                                            class="ml-auto flex w-1/3 flex-1 flex-col"
                                        >
                                            <label
                                                class="mb-1 text-sm font-bold text-gray-700"
                                            >
                                                End Time*
                                            </label>
                                            <a-duration-field
                                                [time]="model().date"
                                                [max]="10 * 60"
                                                [min]="60"
                                                [step]="60"
                                                [formField]="form.duration"
                                            ></a-duration-field>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="border-base-200 flex flex-col items-center border-b"
                    >
                        <div
                            class="flex w-[calc(100%-2rem)] max-w-90 flex-col self-center"
                        >
                            <div class="my-2 text-lg">Favourites</div>
                            <div class="mb-2 flex flex-row">
                                <span>Only show favourite rooms</span>
                                <mat-checkbox
                                    class="ml-auto"
                                    [(ngModel)]="show_favourites"
                                    [ngModelOptions]="{ standalone: true }"
                                ></mat-checkbox>
                            </div>
                        </div>
                    </section>
                    <section class="border-base-200 flex flex-col">
                        <div class="mx-auto w-[calc(100%-2rem)] max-w-90">
                            <div class="my-2 text-lg">Features</div>
                            @for (feature of features(); track feature) {
                                <div>
                                    <div class="mb-1 flex flex-row">
                                        <span> {{ feature.name }}</span>
                                        <mat-checkbox
                                            [(ngModel)]="feature.value"
                                            class="checkbox ml-auto"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (change)="getSelectedFeatures()"
                                        ></mat-checkbox>
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                    <section
                        class="top-box-shadow border-base-200 mt-5 flex flex-col items-center justify-center border-t py-3"
                    >
                        <button
                            btn
                            matRipple
                            type="submit"
                            class="filter-button max-w-[calc(100% - 2rem)] border-secondary bg-secondary mx-auto min-w-[300px] text-center text-sm"
                        >
                            <span class="">Apply Filters</span>
                        </button>
                    </section>
                </form>
            }
        </div>
    `, imports: [
      MatRippleModule,
      MatCheckboxModule,
      FormsModule,
      FormField,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterSpaceComponent, { className: "FilterSpaceComponent", filePath: "apps/outlook-addin/src/app/rooms/filter-space.component.ts", lineNumber: 219 });
})();

// apps/outlook-addin/src/app/rooms/find-space-item.component.ts
var FindSpaceItemComponent = class _FindSpaceItemComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.space = input(
      void 0,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = input(
      false,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedChange = output();
    this.level_name = computed(
      () => {
        const level = this._org.levelWithID(this.space()?.zones || []);
        return level?.display_name || level?.name || "";
      },
      ...ngDevMode ? [{ debugName: "level_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_name = computed(
      () => this.space()?.display_name || this.space()?.name || "",
      ...ngDevMode ? [{ debugName: "space_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.capacity = computed(
      () => this.space()?.capacity || 0,
      ...ngDevMode ? [{ debugName: "capacity" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleSelected = () => this.selectedChange.emit(!this.selected());
  }
  static {
    this.\u0275fac = function FindSpaceItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindSpaceItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindSpaceItemComponent, selectors: [["find-space-item"]], inputs: { space: [1, "space"], selected: [1, "selected"] }, outputs: { selectedChange: "selectedChange" }, decls: 11, vars: 5, consts: [["mat-ripple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "w-full", "flex-col", "space-y-2", "rounded-lg", "border", "p-4", 3, "click"], [1, "flex", "w-full", "flex-row", "items-center", "space-x-2"], [1, "text-lg"]], template: function FindSpaceItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function FindSpaceItemComponent_Template_button_click_0_listener() {
          return ctx.toggleSelected();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "icon", 2);
        \u0275\u0275text(3, "meeting_room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 1)(7, "icon", 2);
        \u0275\u0275text(8, "group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("bg-base-200", ctx.selected());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", ctx.level_name(), ", ", ctx.space_name(), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.capacity(), " People");
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent], styles: ["\n[_nghost-%COMP%] {\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=find-space-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindSpaceItemComponent, [{
    type: Component,
    args: [{ selector: "find-space-item", template: `
        <button
            mat-ripple
            class="border-base-300 bg-base-100 hover:border-info mx-auto flex w-full flex-col space-y-2 rounded-lg border p-4"
            [class.bg-base-200]="selected()"
            (click)="toggleSelected()"
        >
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">meeting_room</icon>
                <div>
                    {{ level_name() }},
                    {{ space_name() }}
                </div>
            </div>
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">group</icon>
                <div>{{ capacity() }} People</div>
            </div>
        </button>
    `, imports: [MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;22ddc156e89f9326c87d8d4f319a8a81858c2a422c931eedca38ce3c3f87df67;/home/runner/work/user-interfaces/user-interfaces/apps/outlook-addin/src/app/rooms/find-space-item.component.ts */\n:host {\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=find-space-item.component.css.map */\n"] }]
  }], null, { space: [{ type: Input, args: [{ isSignal: true, alias: "space", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], selectedChange: [{ type: Output, args: ["selectedChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindSpaceItemComponent, { className: "FindSpaceItemComponent", filePath: "apps/outlook-addin/src/app/rooms/find-space-item.component.ts", lineNumber: 43 });
})();

// apps/outlook-addin/src/app/rooms/room-confirm.component.ts
function RoomConfirmComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 7)(2, "icon", 12);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attendee_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(attendee_r1?.email);
  }
}
var RoomConfirmComponent = class _RoomConfirmComponent {
  constructor() {
    this.data = inject(MAT_BOTTOM_SHEET_DATA);
    this._bottomSheetRef = inject(MatBottomSheetRef);
    this._state = inject(EventFormService);
    this._roomConfirmService = inject(RoomConfirmService);
    this.form = this._state.form;
    this.model = this._state.model;
    this.loading = this._state.loading;
    this.show_submit_button = signal(
      true,
      ...ngDevMode ? [{ debugName: "show_submit_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space = signal(
      this.data,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value = this.model;
    this.unix_time = computed(
      () => this._form_value()?.date,
      ...ngDevMode ? [{ debugName: "unix_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_time = computed(
      () => new Date(this.unix_time()).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }),
      ...ngDevMode ? [{ debugName: "start_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = computed(
      () => {
        const duration_minutes = this._form_value()?.duration;
        const end_time = this.unix_time() + duration_minutes * 60 * 1e3;
        return new Date(end_time).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        });
      },
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendees = computed(
      () => this._form_value()?.attendees || [],
      ...ngDevMode ? [{ debugName: "attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.creator = computed(
      () => this._form_value()?.creator || "",
      ...ngDevMode ? [{ debugName: "creator" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = computed(
      () => this._form_value()?.title,
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  closeModal() {
    this._bottomSheetRef.dismiss("cancel");
  }
  async confirmBooking() {
    this.show_submit_button.set(false);
    const booked = await this._roomConfirmService.bookRoom(this.space());
    if (booked)
      this._bottomSheetRef.dismiss(true);
    else
      this.show_submit_button.set(true);
  }
  static {
    this.\u0275fac = function RoomConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomConfirmComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomConfirmComponent, selectors: [["room-confirm"]], decls: 63, vars: 11, consts: [[1, "z-0", "mx-auto", "flex", "min-h-[800px]", "w-[calc(100%-2rem)]", "w-full", "flex-1", "flex-col", "overflow-y-auto"], [1, "border-base-200", "flex", "flex-col", "border-b", "py-2"], [1, "justify-content", "flex", "flex-row", "items-center", "space-x-4"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "text-3xl", "text-gray-700"], [1, "mr-auto", "text-lg", "font-bold"], [1, "border-base-200", "mt-4", "flex", "flex-row", "space-x-4", "border-b", "pb-4"], [1, "flex", "flex-col"], [1, "text-base"], ["src", "assets/tick.svg"], [1, "flex", "text-base", "font-bold", "text-gray-700"], [1, "mt-2", "flex", "items-center", "text-sm", "text-gray-700"], [1, "flex", "items-center"], [1, "flex"], [1, "mt-2", "flex", "flex-row", "items-center", "text-sm", "text-gray-700"], [1, "mt-4", "flex", "flex-row", "space-x-4", "pb-4"], [1, "top-box-shadow", "border-base-200", "-mx-4", "mt-5", "mb-10", "flex", "flex-col", "items-center", "border-t", "p-3"], ["matRipple", "", 1, "border-secondary", "bg-secondary", "mx-4", "ml-2", "w-[300px]", 3, "click", "disabled"], [1, ""], [1, "w-full"]], template: function RoomConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function RoomConfirmComponent_Template_button_click_3_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275elementStart(4, "icon", 4);
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, " Confirm Room Booking");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "section", 6)(9, "div", 7)(10, "span", 8);
        \u0275\u0275element(11, "img", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7)(13, "span", 10);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "icon", 12);
        \u0275\u0275text(17, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "icon", 12);
        \u0275\u0275text(23, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 13);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "section", 6)(27, "div", 7)(28, "span", 8);
        \u0275\u0275element(29, "img", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 7)(31, "span", 10);
        \u0275\u0275text(32, "Attendees ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(33, RoomConfirmComponent_For_34_Template, 7, 1, "div", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(35, "div", 14)(36, "div", 7)(37, "icon", 12);
        \u0275\u0275text(38, "people");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 7)(40, "span");
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(42, "section", 15)(43, "div", 7)(44, "span", 8);
        \u0275\u0275element(45, "img", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 7)(47, "span", 10);
        \u0275\u0275text(48, "Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 11)(50, "icon", 12);
        \u0275\u0275text(51, "meeting_room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 13);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 11)(55, "icon", 12);
        \u0275\u0275text(56, "room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 13);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(59, "div", 16)(60, "button", 17);
        \u0275\u0275listener("click", function RoomConfirmComponent_Template_button_click_60_listener() {
          return ctx.confirmBooking();
        });
        \u0275\u0275elementStart(61, "span", 18);
        \u0275\u0275text(62, "Confirm");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1("", ctx.title(), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 8, ctx.unix_time(), "dd MMMM yyyy"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.start_time(), " -", ctx.end_time());
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.attendees());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.creator());
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ctx.space().name, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.space().level?.name);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.show_submit_button());
      }
    }, dependencies: [CommonModule, MatRippleModule, MatRipple, IconComponent, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomConfirmComponent, [{
    type: Component,
    args: [{ selector: "room-confirm", template: `
        <div
            class="z-0 mx-auto flex min-h-[800px] w-[calc(100%-2rem)] w-full flex-1 flex-col overflow-y-auto"
        >
            <section class="border-base-200 flex flex-col border-b py-2">
                <div
                    class="justify-content flex flex-row items-center space-x-4"
                >
                    <button icon matRipple (click)="closeModal()">
                        <icon
                            class="flex items-center justify-center text-3xl text-gray-700"
                            >close</icon
                        >
                    </button>
                    <span class="mr-auto text-lg font-bold">
                        Confirm Room Booking</span
                    >
                </div>
            </section>

            <section
                class="border-base-200 mt-4 flex flex-row space-x-4 border-b pb-4"
            >
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>
                <div class="flex flex-col">
                    <span class="flex text-base font-bold text-gray-700"
                        >{{ title() }}
                    </span>

                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">calendar_today</icon>
                        <span class="flex">
                            {{ unix_time() | date: 'dd MMMM yyyy' }}
                        </span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">schedule</icon>
                        <span class="flex"
                            >{{ start_time() }} -{{ end_time() }}</span
                        >
                    </div>
                </div>
            </section>

            <section
                class="border-base-200 mt-4 flex flex-row space-x-4 border-b pb-4"
            >
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>

                <div class="flex flex-col">
                    <span class="flex text-base font-bold text-gray-700"
                        >Attendees
                    </span>

                    @for (attendee of attendees(); track attendee) {
                        <div
                            class="mt-2 flex flex-row items-center text-sm text-gray-700"
                        >
                            <div class="flex flex-col">
                                <icon class="flex items-center">people</icon>
                            </div>
                            <div class="flex flex-col">
                                <span class="w-full">{{
                                    attendee?.email
                                }}</span>
                            </div>
                        </div>
                    }

                    <div
                        class="mt-2 flex flex-row items-center text-sm text-gray-700"
                    >
                        <div class="flex flex-col">
                            <icon class="flex items-center">people</icon>
                        </div>
                        <div class="flex flex-col">
                            <span>{{ creator() }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-4 flex flex-row space-x-4 pb-4">
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>
                <div class="flex flex-col">
                    <span class="flex text-base font-bold text-gray-700"
                        >Rooms
                    </span>

                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">meeting_room</icon>
                        <span class="flex">
                            {{ space().name }}
                        </span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">room</icon>
                        <span class="flex"> {{ space().level?.name }}</span>
                    </div>
                </div>
            </section>

            <div
                class="top-box-shadow border-base-200 -mx-4 mt-5 mb-10 flex flex-col items-center border-t p-3"
            >
                <button
                    matRipple
                    (click)="confirmBooking()"
                    [disabled]="!show_submit_button()"
                    class="border-secondary bg-secondary mx-4 ml-2 w-[300px]"
                >
                    <span class="">Confirm</span>
                </button>
            </div>
        </div>
    `, imports: [CommonModule, MatRippleModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomConfirmComponent, { className: "RoomConfirmComponent", filePath: "apps/outlook-addin/src/app/rooms/room-confirm.component.ts", lineNumber: 146 });
})();

// apps/outlook-addin/src/app/rooms/room-details.component.ts
function RoomDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("source", ctx_r0.space()?.images?.[0])("alt", "Image of " + (ctx_r0.space()?.display_name || ctx_r0.space()?.name));
  }
}
function RoomDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "span", 19);
    \u0275\u0275text(2, "+ Add this room");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "span", 20);
    \u0275\u0275text(2, "- Remove this room");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 10);
    \u0275\u0275text(2, "panorama");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 10);
    \u0275\u0275text(2, "video_camera_front");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 10);
    \u0275\u0275text(2, "contact_phone");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 10);
    \u0275\u0275text(2, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 10);
    \u0275\u0275text(2, "draw");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 10);
    \u0275\u0275text(2, "nest_remote_comfort_sensor");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_21_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275conditionalCreate(2, RoomDetailsComponent_Conditional_21_For_4_Case_2_Template, 3, 0, "div")(3, RoomDetailsComponent_Conditional_21_For_4_Case_3_Template, 3, 0, "div")(4, RoomDetailsComponent_Conditional_21_For_4_Case_4_Template, 3, 0, "div")(5, RoomDetailsComponent_Conditional_21_For_4_Case_5_Template, 3, 0, "div")(6, RoomDetailsComponent_Conditional_21_For_4_Case_6_Template, 3, 0, "div")(7, RoomDetailsComponent_Conditional_21_For_4_Case_7_Template, 3, 0, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const facility_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = facility_r2) === "Views" ? 2 : tmp_11_0 === "Projector" ? 3 : tmp_11_0 === "VidConf" ? 4 : tmp_11_0 === "Whiteboard" ? 5 : tmp_11_0 === "Jamboard" ? 6 : tmp_11_0 === "Wifi" ? 7 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", facility_r2, " ");
  }
}
function RoomDetailsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "span", 21);
    \u0275\u0275text(2, "Room Features");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RoomDetailsComponent_Conditional_21_For_4_Template, 10, 2, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.space()?.feature_list);
  }
}
function RoomDetailsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function RoomDetailsComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275elementStart(1, "span", 24);
    \u0275\u0275text(2, "Back");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function RoomDetailsComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "Confirm");
    \u0275\u0275elementEnd()();
  }
}
var RoomDetailsComponent = class _RoomDetailsComponent {
  constructor() {
    this.data = inject(MAT_BOTTOM_SHEET_DATA);
    this._bottomSheetRef = inject(MatBottomSheetRef);
    this.space = signal(
      this.data,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_added = signal(
      false,
      ...ngDevMode ? [{ debugName: "room_added" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  selectRoom() {
    this.room_added.update((room_added) => !room_added);
  }
  back() {
    if (this.room_added()) {
      this._bottomSheetRef.dismiss(this.space());
    } else {
      this._bottomSheetRef.dismiss(null);
    }
  }
  static {
    this.\u0275fac = function RoomDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomDetailsComponent, selectors: [["placeos-room-details"]], decls: 25, vars: 10, consts: [[1, "z-0", "flex", "min-h-[800px]", "w-full", "flex-1", "flex-col", "overflow-hidden"], [1, "bg-base-200", "flex", "min-h-[300px]", "items-center", "justify-center", "text-gray-500"], [1, "border-base-200", "mx-auto", "flex", "w-[calc(100%-2rem)]", "flex-col", "border-b"], [1, "mt-3", "text-lg", "font-bold"], [1, "w-max-[375px]", 3, "click"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-secondary", "m-3", "mx-auto", "w-full"], ["btn", "", "matRipple", "", 1, "border-base-200", "bg-base-200", "m-3", "mx-auto", "w-full"], [1, "border-base-200", "mx-auto", "flex", "w-[calc(100%-2rem)]", "flex-col", "border-b", "p-3", "pl-0"], [1, "text-base", "font-bold"], [1, "mt-3", "flex", "flex-row", "items-center", "text-sm"], [1, "text-info"], [1, "text-sm", "text-gray-500"], [1, "mt-1", "flex", "flex-row", "items-center", "text-sm"], [1, "text-gray-500"], [1, "mx-auto", "flex", "w-[calc(100%-2rem)]", "flex-col", "py-3"], [1, "top-box-shadow", "border-base-200", "bg-base-100", "flex", "flex-col", "border-t", "p-3"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-base-100", "mx-auto", "w-full"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-secondary", "mx-auto", "w-full"], ["auth", "", "width", "100%", "height", "100%", 1, "z-20", "flex", "rounded-lg", 3, "source", "alt"], [1, "text-white"], [1, "text-black"], [1, "mb-3", "text-base", "font-bold"], [1, "mb-1", "flex", "w-full", "flex-row"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-base-100", "mx-auto", "w-full", 3, "click"], [1, "text-secondary"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-secondary", "mx-auto", "w-full", 3, "click"]], template: function RoomDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, RoomDetailsComponent_Conditional_1_Template, 2, 2, "section", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275listener("click", function RoomDetailsComponent_Template_div_click_5_listener() {
          return ctx.selectRoom();
        });
        \u0275\u0275conditionalCreate(6, RoomDetailsComponent_Conditional_6_Template, 3, 0, "button", 5);
        \u0275\u0275conditionalCreate(7, RoomDetailsComponent_Conditional_7_Template, 3, 0, "button", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 7)(9, "span", 8);
        \u0275\u0275text(10, "Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "icon", 10);
        \u0275\u0275text(13, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 11);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12)(17, "icon", 10);
        \u0275\u0275text(18, "room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(21, RoomDetailsComponent_Conditional_21_Template, 5, 0, "section", 14);
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275conditionalCreate(23, RoomDetailsComponent_Conditional_23_Template, 3, 0, "button", 16);
        \u0275\u0275conditionalCreate(24, RoomDetailsComponent_Conditional_24_Template, 3, 0, "button", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.space()?.images?.length > 0 ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.space()?.name);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.room_added() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.room_added() ? 7 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.space()?.capacity, " People");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", ctx.space()?.level?.name, ", ", ctx.space()?.level?.parent_id);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.space()?.feature_list.length > 0 ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.room_added() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.room_added() ? 24 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, AuthenticatedImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomDetailsComponent, [{
    type: Component,
    args: [{ selector: "placeos-room-details", template: `
        <div
            class="z-0 flex min-h-[800px] w-full flex-1 flex-col overflow-hidden"
        >
            @if (space()?.images?.length > 0) {
                <section
                    class="bg-base-200 flex min-h-[300px] items-center justify-center text-gray-500"
                >
                    <img
                        auth
                        [source]="space()?.images?.[0]"
                        [alt]="
                            'Image of ' +
                            (space()?.display_name || space()?.name)
                        "
                        width="100%"
                        height="100%"
                        class="z-20 flex rounded-lg"
                    />
                </section>
            }
            <section
                class="border-base-200 mx-auto flex w-[calc(100%-2rem)] flex-col border-b"
            >
                <span class="mt-3 text-lg font-bold"> {{ space()?.name }}</span>

                <div (click)="selectRoom()" class="w-max-[375px]">
                    @if (!room_added()) {
                        <button
                            btn
                            matRipple
                            class="border-secondary bg-secondary m-3 mx-auto w-full"
                        >
                            <span class="text-white">+ Add this room</span>
                        </button>
                    }

                    @if (room_added()) {
                        <button
                            btn
                            matRipple
                            class="border-base-200 bg-base-200 m-3 mx-auto w-full"
                        >
                            <span class="text-black">- Remove this room</span>
                        </button>
                    }
                </div>
            </section>
            <section
                class="border-base-200 mx-auto flex w-[calc(100%-2rem)] flex-col border-b p-3 pl-0"
            >
                <span class="text-base font-bold">Details</span>
                <div class="mt-3 flex flex-row items-center text-sm">
                    <icon class="text-info">people</icon>
                    <span class="text-sm text-gray-500">
                        {{ space()?.capacity }} People</span
                    >
                </div>
                <div class="mt-1 flex flex-row items-center text-sm">
                    <icon class="text-info">room</icon>
                    <span class="text-gray-500">
                        {{ space()?.level?.name }},
                        {{ space()?.level?.parent_id }}</span
                    >
                </div>
            </section>
            @if (space()?.feature_list.length > 0) {
                <section class="mx-auto flex w-[calc(100%-2rem)] flex-col py-3">
                    <span class="mb-3 text-base font-bold">Room Features</span>
                    @for (facility of space()?.feature_list; track facility) {
                        <div class="mb-1 flex w-full flex-row">
                            <div>
                                @switch (facility) {
                                    @case ('Views') {
                                        <div>
                                            <icon class="text-info"
                                                >panorama</icon
                                            >
                                        </div>
                                    }
                                    @case ('Projector') {
                                        <div>
                                            <icon class="text-info"
                                                >video_camera_front</icon
                                            >
                                        </div>
                                    }
                                    @case ('VidConf') {
                                        <div>
                                            <icon class="text-info"
                                                >contact_phone</icon
                                            >
                                        </div>
                                    }
                                    @case ('Whiteboard') {
                                        <div>
                                            <icon class="text-info"
                                                >drive_file_rename_outline</icon
                                            >
                                        </div>
                                    }
                                    @case ('Jamboard') {
                                        <div>
                                            <icon class="text-info">draw</icon>
                                        </div>
                                    }
                                    @case ('Wifi') {
                                        <div>
                                            <icon class="text-info"
                                                >nest_remote_comfort_sensor</icon
                                            >
                                        </div>
                                    }
                                }
                            </div>
                            <span class="text-sm text-gray-500">
                                {{ facility }}
                            </span>
                        </div>
                    }
                </section>
            }
            <div
                class="top-box-shadow border-base-200 bg-base-100 flex flex-col border-t p-3"
            >
                @if (!room_added()) {
                    <button
                        btn
                        matRipple
                        class="border-secondary bg-base-100 mx-auto w-full"
                        (click)="back()"
                    >
                        <span class="text-secondary">Back</span>
                    </button>
                }
                @if (room_added()) {
                    <button
                        btn
                        matRipple
                        class="border-secondary bg-secondary mx-auto w-full"
                        (click)="back()"
                    >
                        <span class="text-white">Confirm</span>
                    </button>
                }
            </div>
        </div>
    `, imports: [MatRippleModule, IconComponent, AuthenticatedImageDirective] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomDetailsComponent, { className: "RoomDetailsComponent", filePath: "apps/outlook-addin/src/app/rooms/room-details.component.ts", lineNumber: 170 });
})();

// apps/outlook-addin/src/app/rooms/room-confirm.service.ts
var RoomConfirmService = class _RoomConfirmService {
  get form() {
    return this._state.form;
  }
  get model() {
    return this._state.model;
  }
  constructor() {
    this._bottomSheet = inject(MatBottomSheet);
    this._router = inject(Router);
    this._state = inject(EventFormService);
    this._spaces = inject(SpacesService);
    this._space_pipe = new SpacePipe();
    this.book_space = {};
    this.space_list = [];
    this.selected_space = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.book_space = {};
    const resources = this._state.model().resources || [];
    resources.forEach((_) => this.book_space[_.id] = true);
    this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
  }
  openRoomDetail(space = this.selected_space()) {
    const room_details_ref = this._bottomSheet.open(RoomDetailsComponent, {
      data: space
    });
    room_details_ref.afterDismissed().subscribe((selected_space) => {
      if (selected_space)
        this.openRoomConfirm(selected_space);
    });
  }
  openRoomConfirm(space) {
    if (space) {
      this._bottomSheet.open(RoomConfirmComponent, {
        data: space
      });
    }
  }
  updateSelectedSpace(space) {
    this.selected_space.set(space);
  }
  handleBookEvent(space, book = true) {
    this.book_space = {};
    this.book_space[space.id] = book;
  }
  async bookRoom(space) {
    if (!space)
      return false;
    this.handleBookEvent(space);
    const id_list = Object.keys(this.book_space).filter((id) => this.book_space[id]);
    const spaces = await Promise.all(id_list.map((id) => this._space_pipe.transform(id)));
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      resources: spaces,
      system: spaces[0]
    }));
    this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    return this.postForm();
  }
  async postForm() {
    try {
      await this._state.postForm();
      await this._router.navigate(["/confirm/success"]);
      return true;
    } catch (error) {
      notifyError(errorMessage(error) || "Unable to book the room.");
      return false;
    }
  }
  static {
    this.\u0275fac = function RoomConfirmService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomConfirmService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomConfirmService, factory: _RoomConfirmService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomConfirmService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/outlook-addin/src/app/rooms/room-tile.component.ts
function RoomTileComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.space()?.images?.[0]);
  }
}
function RoomTileComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon", 14);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
var RoomTileComponent = class _RoomTileComponent {
  constructor() {
    this.data = inject(MAT_BOTTOM_SHEET_DATA);
    this._bottomSheetRef = inject(MatBottomSheetRef);
    this._roomConfirmService = inject(RoomConfirmService);
    this.space = signal(
      this.data,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  openRoomDetail() {
    this._roomConfirmService.openRoomDetail(this.space());
  }
  cancel() {
    this._bottomSheetRef.dismiss(null);
  }
  static {
    this.\u0275fac = function RoomTileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomTileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomTileComponent, selectors: [["placeos-room-tile"]], decls: 23, vars: 6, consts: [[1, "z-0", "flex", "min-h-min", "w-full", "min-w-[400px]", "flex-1", "flex-col", "overflow-hidden"], [1, "justify-content", "mx-auto", "flex", "w-[calc(100%-2rem)]", "max-w-[375px]", "items-center", 3, "click"], [1, "bg-base-100", "mx-4", "flex", "h-full", "w-full", "flex-col", "rounded-lg", "border"], [1, "bg-base-200", "m-3", "flex", "h-44", "items-center", "justify-center", "rounded-lg", "text-gray-500"], ["auth", "", "alt", "image of building ", "width", "100%", "height", "100%", 1, "z-20", "flex", "rounded-lg", 3, "source"], [1, "mb-4", "flex", "flex-col"], [1, "mx-3", "mt-1", "text-xl", "font-bold"], [1, "mx-3", "mt-1", "flex", "flex-row", "items-center", "text-base"], [1, "text-info"], [1, "text-gray-500"], [1, "text-info", "flex", "items-center"], [1, "top-box-shadow", "border-base-200", "bg-base-100", "-mx-4", "mt-5", "mb-10", "flex", "h-full", "flex-col", "items-center", "border-t", "p-3"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-base-100", "mx-4", "ml-2", "w-[460px]", 3, "click"], [1, "text-secondary"], [1, "text-[8rem]"]], template: function RoomTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function RoomTileComponent_Template_div_click_1_listener() {
          return ctx.openRoomDetail();
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275conditionalCreate(4, RoomTileComponent_Conditional_4_Template, 1, 1, "img", 4);
        \u0275\u0275conditionalCreate(5, RoomTileComponent_Conditional_5_Template, 3, 0, "div");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "icon", 8);
        \u0275\u0275text(11, "room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "icon", 10);
        \u0275\u0275text(16, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
        \u0275\u0275listener("click", function RoomTileComponent_Template_button_click_20_listener() {
          return ctx.cancel();
        });
        \u0275\u0275elementStart(21, "span", 13);
        \u0275\u0275text(22, "Back");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.space()?.images?.length > 0 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.space()?.images?.length == 0 ? 5 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.space()?.name);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", ctx.space()?.level?.name, ", ", ctx.space()?.level?.parent_id);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.space()?.capacity);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, AuthenticatedImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomTileComponent, [{
    type: Component,
    args: [{ selector: "placeos-room-tile", template: `
        <div
            class="z-0 flex min-h-min w-full min-w-[400px] flex-1 flex-col overflow-hidden"
        >
            <div
                class="justify-content mx-auto flex w-[calc(100%-2rem)] max-w-[375px] items-center"
                (click)="openRoomDetail()"
            >
                <div
                    class="bg-base-100 mx-4 flex h-full w-full flex-col rounded-lg border"
                >
                    <div
                        class="bg-base-200 m-3 flex h-44 items-center justify-center rounded-lg text-gray-500"
                    >
                        @if (space()?.images?.length > 0) {
                            <img
                                auth
                                [source]="space()?.images?.[0]"
                                alt="image of building "
                                width="100%"
                                height="100%"
                                class="z-20 flex rounded-lg"
                            />
                        }

                        @if (space()?.images?.length == 0) {
                            <div>
                                <icon class="text-[8rem]">image</icon>
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex flex-col">
                        <span class="mx-3 mt-1 text-xl font-bold">
                            {{ space()?.name }}</span
                        >

                        <div
                            class="mx-3 mt-1 flex flex-row items-center text-base"
                        >
                            <icon class="text-info">room</icon>
                            <span class="text-gray-500">
                                {{ space()?.level?.name }},
                                {{ space()?.level?.parent_id }}</span
                            >
                        </div>

                        <div
                            class="mx-3 mt-1 flex flex-row items-center text-base"
                        >
                            <icon class="text-info flex items-center"
                                >people</icon
                            >
                            <span class="text-gray-500">
                                {{ space()?.capacity }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="top-box-shadow border-base-200 bg-base-100 -mx-4 mt-5 mb-10 flex h-full flex-col items-center border-t p-3"
        >
            <button
                btn
                matRipple
                (click)="cancel()"
                class="border-secondary bg-base-100 mx-4 ml-2 w-[460px]"
            >
                <span class="text-secondary">Back</span>
            </button>
        </div>
    `, imports: [MatRippleModule, IconComponent, AuthenticatedImageDirective] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomTileComponent, { className: "RoomTileComponent", filePath: "apps/outlook-addin/src/app/rooms/room-tile.component.ts", lineNumber: 96 });
})();

// apps/outlook-addin/src/app/rooms/map.service.ts
var MapService = class _MapService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._bottomSheet = inject(MatBottomSheet);
    this._roomConfirmService = inject(RoomConfirmService);
    this.style_map = {};
    this.map_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "map_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_actions = signal(
      [],
      ...ngDevMode ? [{ debugName: "map_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_loaded = signal(
      false,
      ...ngDevMode ? [{ debugName: "map_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features_loaded = signal(
      false,
      ...ngDevMode ? [{ debugName: "features_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_space = this._roomConfirmService.selected_space;
    this.locatable_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "locatable_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.maps_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "maps_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async locateSpaces(available_spaces) {
    const spaces = available_spaces || [];
    this.locatable_spaces.set(spaces.map((space) => ({
      id: space.id,
      name: space.name,
      map_id: space.map_id,
      level: space.level
    })));
    await this.loadMap();
    this.timeout("init", () => {
      this.processFeature();
    }, 1e3);
    this.processStyles();
    this.map_actions.set(spaces.map((space) => ({
      id: space.map_id,
      action: "click",
      callback: () => {
        this.openRoomTile(space);
      }
    })));
  }
  async loadMap() {
    this.map_loaded.set(false);
    const maps_list = this.locatable_spaces().map((space) => ({
      map_id: space.level.map_id,
      level: space.level.name
    }));
    this.maps_list.set([
      ...new Map(maps_list.map((v) => [v.map_id, v])).values()
    ]);
    this.map_loaded.set(true);
  }
  processFeature() {
    this.features_loaded.set(false);
    const focus = this.locatable_spaces().map((space) => ({
      location: space.map_id,
      content: MapPinComponent,
      data: { name: space.name },
      z_index: 99,
      zoom: 100
    }));
    this.map_features.set(focus);
    this.features_loaded.set(true);
  }
  processStyles() {
    const styles = {};
    styles[`#zones`] = { display: "none" };
    styles[`#Zones`] = { display: "none" };
    this.style_map = styles;
  }
  openRoomTile(space) {
    this._bottomSheet.open(RoomTileComponent, {
      panelClass: "bottom-sheet-transparent",
      data: space
    });
    this._roomConfirmService.handleBookEvent(space, true);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MapService_BaseFactory;
      return function MapService_Factory(__ngFactoryType__) {
        return (\u0275MapService_BaseFactory || (\u0275MapService_BaseFactory = \u0275\u0275getInheritedFactory(_MapService)))(__ngFactoryType__ || _MapService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapService, factory: _MapService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/outlook-addin/src/app/rooms/find-space.component.ts
function FindSpaceComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.selected_feature_count(), " applied) ");
  }
}
function FindSpaceComponent_Conditional_23_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "find-space-item", 36);
    \u0275\u0275listener("selectedChange", function FindSpaceComponent_Conditional_23_Conditional_0_Conditional_0_For_2_Template_find_space_item_selectedChange_0_listener($event) {
      const space_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleBookEvent(space_r3, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("space", space_r3)("selected", ctx_r0.book_space()[space_r3.id]);
  }
}
function FindSpaceComponent_Conditional_23_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, FindSpaceComponent_Conditional_23_Conditional_0_Conditional_0_For_2_Template, 1, 2, "find-space-item", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.spaces());
  }
}
function FindSpaceComponent_Conditional_23_Conditional_0_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const map_r5 = ctx.$implicit;
    \u0275\u0275property("value", map_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(map_r5.level);
  }
}
function FindSpaceComponent_Conditional_23_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 34)(1, "mat-select", 37);
    \u0275\u0275listener("ngModelChange", function FindSpaceComponent_Conditional_23_Conditional_0_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateSelectedLevel($event));
    });
    \u0275\u0275elementStart(2, "mat-option", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, FindSpaceComponent_Conditional_23_Conditional_0_Conditional_1_For_6_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.selected_level());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.maps_list());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "COMMON.LEVEL_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.maps_list());
  }
}
function FindSpaceComponent_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FindSpaceComponent_Conditional_23_Conditional_0_Conditional_0_Template, 3, 0, "div", 33)(1, FindSpaceComponent_Conditional_23_Conditional_0_Conditional_1_Template, 7, 5, "mat-form-field", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.view() === "list" ? 0 : 1);
  }
}
function FindSpaceComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 39)(2, "p", 40);
    \u0275\u0275text(3, "No spaces");
    \u0275\u0275elementEnd()()();
  }
}
function FindSpaceComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FindSpaceComponent_Conditional_23_Conditional_0_Template, 2, 1)(1, FindSpaceComponent_Conditional_23_Conditional_1_Template, 4, 0, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.spaces().length > 0 ? 0 : 1);
  }
}
function FindSpaceComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 41);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function FindSpaceComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.selected_feature_count(), " applied) ");
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "find-space-item", 46);
    \u0275\u0275listener("selectedChange", function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_0_For_2_Template_find_space_item_selectedChange_0_listener($event) {
      const space_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleBookEvent(space_r7, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("space", space_r7)("selected", ctx_r0.book_space()[space_r7.id]);
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_0_For_2_Template, 1, 2, "find-space-item", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.spaces());
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const map_r9 = ctx.$implicit;
    \u0275\u0275property("value", map_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(map_r9.level);
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 48)(2, "mat-select", 37);
    \u0275\u0275listener("ngModelChange", function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_1_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.updateSelectedLevel($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_1_For_7_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.selected_level());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.maps_list());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "COMMON.LEVEL_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.maps_list());
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "interactive-map", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const map_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("src", map_r10?.map_id)("styles", ctx_r0.map_styles())("features", ctx_r0.map_features())("actions", ctx_r0.map_actions());
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Conditional_1_For_2_Template, 2, 4, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.selected_level_maps());
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "interactive-map", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.selected_map()?.map_id)("styles", ctx_r0.map_styles())("features", ctx_r0.map_features())("actions", ctx_r0.map_actions());
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275conditionalCreate(1, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Conditional_1_Template, 3, 0, "div");
    \u0275\u0275conditionalCreate(2, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Conditional_2_Template, 2, 4, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selected_all_levels() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.selected_all_levels() ? 2 : -1);
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275conditionalCreate(1, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_1_Template, 8, 5, "div");
    \u0275\u0275conditionalCreate(2, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Conditional_2_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.maps_list().length > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selected_level() ? 2 : -1);
  }
}
function FindSpaceComponent_Conditional_57_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_0_Template, 3, 0, "div");
    \u0275\u0275conditionalCreate(1, FindSpaceComponent_Conditional_57_Conditional_0_Conditional_1_Template, 3, 2, "div", 43);
    \u0275\u0275elementStart(2, "p", 44);
    \u0275\u0275text(3, " End of available spaces list ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.view() === "list" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.view() === "map" && ctx_r0.map_features().length > 0 ? 1 : -1);
  }
}
function FindSpaceComponent_Conditional_57_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p");
    \u0275\u0275text(2, " No available spaces for selected time, capacity or level(s) ");
    \u0275\u0275elementEnd()();
  }
}
function FindSpaceComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FindSpaceComponent_Conditional_57_Conditional_0_Template, 4, 2)(1, FindSpaceComponent_Conditional_57_Conditional_1_Template, 3, 0, "div", 42);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.spaces().length > 0 ? 0 : 1);
  }
}
function FindSpaceComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 41);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Retrieving available spaces...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function FindSpaceComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 52);
    \u0275\u0275listener("click", function FindSpaceComponent_Conditional_60_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openRoomDetails());
    });
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3, "View Room");
    \u0275\u0275elementEnd()()();
  }
}
var FindSpaceComponent = class _FindSpaceComponent extends AsyncHandler {
  get form() {
    return this._state.form;
  }
  get model() {
    return this._state.model;
  }
  constructor() {
    super();
    this._bottomSheet = inject(MatBottomSheet);
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._state = inject(EventFormService);
    this._featuresFilterService = inject(FeaturesFilterService);
    this._mapService = inject(MapService);
    this._roomConfirmService = inject(RoomConfirmService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this.show_room_details = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_room_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_features = this._featuresFilterService.selected_features;
    this.selected_feature_count = computed(
      () => this.selected_features()?.length || 0,
      ...ngDevMode ? [{ debugName: "selected_feature_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.spaces = this._featuresFilterService.filtered_spaces;
    this.maps_list = this._mapService.maps_list;
    this.map_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "map_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_actions = this._mapService.map_actions;
    this.map_styles = signal(
      null,
      ...ngDevMode ? [{ debugName: "map_styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_level = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_all_levels = computed(
      () => Array.isArray(this.selected_level()),
      ...ngDevMode ? [{ debugName: "selected_all_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_level_maps = computed(
      () => {
        const selected_level = this.selected_level();
        return Array.isArray(selected_level) ? selected_level : [];
      },
      ...ngDevMode ? [{ debugName: "selected_level_maps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_map = computed(
      () => {
        const selected_level = this.selected_level();
        return !Array.isArray(selected_level) ? selected_level : null;
      },
      ...ngDevMode ? [{ debugName: "selected_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.book_space = signal(
      {},
      ...ngDevMode ? [{ debugName: "book_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buildings = this._org.building_list;
    this.setBuilding = (b) => this._org.building = b;
    effect(() => {
      const maps = this.maps_list();
      if (maps?.length && !this.selected_level()) {
        this.selected_level.set(maps);
      }
    });
  }
  async ngOnInit() {
    this.view.set("list");
    this._state.setView("find");
    await this._org.waitUntilInitialised();
    await firstValueWhere(this._spaces.initialised, (_) => !!_, this._injector);
    await this._state.listAvailableSpaces();
    this.setBuilding(this._org.building);
    this.book_space.set({});
    await this._mapService.locateSpaces(this.spaces());
    await firstValueWhere(this._mapService.features_loaded, (_) => !!_, this._injector);
    this.applyMapDecorations();
    this.map_features.set(this._mapService.map_features());
  }
  handleBookEvent(space, book = true) {
    this.book_space.set(book ? { [space.id]: true } : {});
    this._roomConfirmService.book_space = this.book_space();
    this._roomConfirmService.handleBookEvent(space, book);
    this.show_room_details.set(book);
    this._roomConfirmService.updateSelectedSpace(book ? space : null);
  }
  openFilter() {
    this.bottomSheetRef = this._bottomSheet.open(FilterSpaceComponent, {
      data: this.buildings()
    });
    this.subscription("filter-sheet", this.bottomSheetRef.afterDismissed().subscribe((applied) => {
      if (!applied)
        return;
      void this.refreshMap();
    }));
  }
  async refreshMap() {
    await this._mapService.locateSpaces(this.spaces());
    this._mapService.processFeature();
    this.selected_level.set(this.maps_list());
    this.processStyles();
    this.map_features.set(this._mapService.map_features());
  }
  openRoomDetails() {
    this._roomConfirmService.openRoomDetail();
  }
  updateSelectedLevel(e) {
    this.selected_level.set(e);
    if (!Array.isArray(this.selected_level())) {
      this.applyMapDecorations();
    }
  }
  applyMapDecorations() {
    this.timeout("init", () => {
      this.processFeature();
      this.processStyles();
    }, 1500);
  }
  processFeature() {
    this.map_features.set(this._mapService.map_features());
  }
  processStyles() {
    this.map_styles.set(this._mapService.style_map);
  }
  closeModal() {
    this._router.navigate(["/book/spaces"]);
    this._featuresFilterService.clearFilter();
  }
  static {
    this.\u0275fac = function FindSpaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindSpaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindSpaceComponent, selectors: [["find-space"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 61, vars: 42, consts: [[1, "bg-base-200", "fixed", "inset-0", "z-10", "flex", "flex-col"], [1, "border-base-300", "bg-base-100", "mx-auto", "flex", "h-full", "w-lg", "max-w-full", "flex-col", "border-x"], [1, "space-y-2", "p-2"], [1, "bg-base-200", "flex", "items-center", "justify-between", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "click"], [1, "border-base-200", "flex", "items-center", "justify-between", "rounded-lg", "border", "p-1"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "divide-secondary", "border-secondary", "mx-1", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col"], [1, "flex", "h-full", "w-full", "flex-1", "items-center", "justify-center"], [1, "bg-base-200", "z-0", "flex", "h-full", "w-full", "flex-1", "flex-col", "overflow-auto"], [1, "flex", "flex-col", "py-5"], [1, "mx-auto", "w-[calc(100%-2rem)]", "max-w-[375px]"], [1, "flex", "flex-row", "items-center"], [3, "click"], [1, "text-base-400", "flex", "items-center", "justify-center", "text-3xl"], [1, "ml-6", "flex", "items-center", "text-lg", "font-bold"], [1, "mt-3", "flex", "flex-row", "justify-between", "align-middle"], [1, "flex", "w-7/12", "justify-center"], ["btn", "", "matRipple", "", 1, "filter-button", "bg-base-200", "h-9", "w-full", "text-sm", 3, "click"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], [1, "flex", "flex-row"], [1, "my-2", "flex", "flex-row", "border-t"], [1, "flex", "flex-col"], [1, "mt-3", "text-lg", "font-bold"], [1, "mt-1", "text-xs", "text-gray-500"], [1, "bg-base-200", "w-full", "flex-1"], [1, "my-3", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "top-box-shadow", "border-base-200", "flex", "flex-col", "items-center", "justify-center", "border-t", "py-1"], [1, "h-1/2", "w-full", "flex-1", "px-2", "pb-2"], [1, "flex", "flex-col", "space-y-2"], ["appearance", "outline", 1, "mr-2", "ml-auto", "flex", "text-sm"], [3, "space", "selected"], [3, "selectedChange", "space", "selected"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "bg-base-200", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-sm", "opacity-30"], [1, ""], [3, "diameter"], [1, "my-6", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-2", "text-center"], [1, "h-full", "text-center"], [1, "p-2", "text-center", "text-sm", "opacity-60"], [1, "text-sm", 3, "space", "selected"], [1, "text-sm", 3, "selectedChange", "space", "selected"], [1, "relative", "m-6", "max-w-screen"], ["appearance", "outline", 1, "m-3", "ml-auto", "flex", "text-sm"], [1, "relative", "m-3", "h-96", "max-w-screen"], [1, "relative", "m-3", "h-48", "max-w-screen"], [1, "m-1", "max-w-screen", "p-1", 3, "src", "styles", "features", "actions"], ["matRipple", "", "type", "submit", 1, "open-details-button", "border-secondary", "bg-secondary", "my-1", "w-[300px]", 3, "click"]], template: function FindSpaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5, "Find Space");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_6_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_10_listener() {
          return ctx.openFilter();
        });
        \u0275\u0275text(11, " Filters ");
        \u0275\u0275conditionalCreate(12, FindSpaceComponent_Conditional_12_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_14_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(16, "icon");
        \u0275\u0275text(17, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_18_listener() {
          return ctx.view.set("map");
        });
        \u0275\u0275elementStart(20, "icon");
        \u0275\u0275text(21, "map");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "main", 11);
        \u0275\u0275conditionalCreate(23, FindSpaceComponent_Conditional_23_Template, 2, 1)(24, FindSpaceComponent_Conditional_24_Template, 4, 2, "div", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 13)(26, "section", 14)(27, "div", 15)(28, "div", 16)(29, "button", 17);
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_29_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275elementStart(30, "icon", 18);
        \u0275\u0275text(31, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "span", 19);
        \u0275\u0275text(33, " Find Space");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 20)(35, "div", 21)(36, "button", 22);
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_36_listener() {
          return ctx.openFilter();
        });
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "Filter");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, FindSpaceComponent_Conditional_39_Template, 2, 1, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 23)(41, "button", 9);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_41_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(43, "icon");
        \u0275\u0275text(44, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "button", 10);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275listener("click", function FindSpaceComponent_Template_button_click_45_listener() {
          return ctx.view.set("map");
        });
        \u0275\u0275elementStart(47, "icon");
        \u0275\u0275text(48, "map");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(49, "section", 24);
        \u0275\u0275elementStart(50, "section", 25)(51, "div", 26)(52, "span", 27);
        \u0275\u0275text(53, " Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 28);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 29);
        \u0275\u0275conditionalCreate(57, FindSpaceComponent_Conditional_57_Template, 2, 1)(58, FindSpaceComponent_Conditional_58_Template, 4, 1, "div", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "section", 31);
        \u0275\u0275conditionalCreate(60, FindSpaceComponent_Conditional_60_Template, 4, 0, "div");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.selected_feature_count() ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 34, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(19, 36, "COMMON.MAP"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.loading() ? 23 : 24);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.selected_feature_count() ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(42, 38, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(46, 40, "COMMON.MAP"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.spaces().length || 0, " results found");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 57 : 58);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.show_room_details() ? 60 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FindSpaceItemComponent,
      MatButtonToggleModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], styles: ["\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  height: 2.25rem;\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 2.25rem;\n  font-size: 0.875rem;\n}\n.mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%secondary);\n  border-radius: 5px;\n  box-shadow: none;\n}\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=find-space.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindSpaceComponent, [{
    type: Component,
    args: [{ selector: "find-space", template: `
        <div class="bg-base-200 fixed inset-0 z-10 flex flex-col">
            <div
                class="border-base-300 bg-base-100 mx-auto flex h-full w-lg max-w-full flex-col border-x"
            >
                <header class="space-y-2 p-2">
                    <div
                        class="bg-base-200 flex items-center justify-between rounded-sm p-2"
                    >
                        <h2 class="px-2 text-xl font-medium">Find Space</h2>
                        <button icon matRipple (click)="closeModal()">
                            <icon>close</icon>
                        </button>
                    </div>
                    <div
                        class="border-base-200 flex items-center justify-between rounded-lg border p-1"
                    >
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="openFilter()"
                        >
                            Filters
                            @if (selected_feature_count()) {
                                <span>
                                    ({{ selected_feature_count() }}
                                    applied)
                                </span>
                            }
                        </button>
                        <div
                            class="divide-secondary border-secondary mx-1 flex divide-x rounded-sm border"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-l rounded-r-none"
                                [class.bg-base-100]="view() !== 'list'"
                                [class.bg-secondary]="view() === 'list'"
                                [class.text-secondary-content]="
                                    view() === 'list'
                                "
                                [matTooltip]="'COMMON.LIST' | translate"
                                (click)="view.set('list')"
                            >
                                <icon>list</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-l-none rounded-r"
                                [class.bg-base-100]="view() !== 'map'"
                                [class.bg-secondary]="view() === 'map'"
                                [class.text-secondary-content]="
                                    view() === 'map'
                                "
                                [matTooltip]="'COMMON.MAP' | translate"
                                (click)="view.set('map')"
                            >
                                <icon>map</icon>
                            </button>
                        </div>
                    </div>
                </header>
                <main class="flex h-1/2 w-full flex-1 flex-col">
                    @if (!loading()) {
                        @if (spaces().length > 0) {
                            @if (view() === 'list') {
                                <div class="flex flex-col space-y-2">
                                    @for (space of spaces(); track space) {
                                        <find-space-item
                                            [space]="space"
                                            [selected]="book_space()[space.id]"
                                            (selectedChange)="
                                                handleBookEvent(space, $event)
                                            "
                                        >
                                        </find-space-item>
                                    }
                                </div>
                            } @else {
                                <mat-form-field
                                    appearance="outline"
                                    class="mr-2 ml-auto flex text-sm"
                                >
                                    <mat-select
                                        [ngModel]="selected_level()"
                                        (ngModelChange)="
                                            updateSelectedLevel($event)
                                        "
                                    >
                                        <mat-option [value]="maps_list()">
                                            {{ 'COMMON.LEVEL_ALL' | translate }}
                                        </mat-option>
                                        @for (map of maps_list(); track map) {
                                            <mat-option [value]="map">{{
                                                map.level
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            }
                        } @else {
                            <div class="h-1/2 w-full flex-1 px-2 pb-2">
                                <div
                                    class="bg-base-200 flex h-full w-full items-center justify-center rounded-sm opacity-30"
                                >
                                    <p class="">No spaces</p>
                                </div>
                            </div>
                        }
                    } @else {
                        <div
                            class="flex h-full w-full flex-1 items-center justify-center"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <p>{{ loading() }}</p>
                        </div>
                    }
                </main>
            </div>
        </div>

        <div
            class="bg-base-200 z-0 flex h-full w-full flex-1 flex-col overflow-auto"
        >
            <section class="flex flex-col py-5">
                <div class="mx-auto w-[calc(100%-2rem)] max-w-[375px]">
                    <div class="flex flex-row items-center">
                        <button (click)="closeModal()">
                            <icon
                                class="text-base-400 flex items-center justify-center text-3xl"
                                >close</icon
                            >
                        </button>

                        <span class="ml-6 flex items-center text-lg font-bold">
                            Find Space</span
                        >
                    </div>

                    <div
                        class="mt-3 flex flex-row justify-between align-middle"
                    >
                        <div class="flex w-7/12 justify-center">
                            <button
                                btn
                                matRipple
                                (click)="openFilter()"
                                class="filter-button bg-base-200 h-9 w-full text-sm"
                            >
                                <span>Filter</span>

                                @if (selected_feature_count()) {
                                    <span>
                                        ({{ selected_feature_count() }}
                                        applied)
                                    </span>
                                }
                            </button>
                        </div>
                        <div
                            class="divide-secondary border-secondary flex divide-x rounded-sm border"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-l rounded-r-none"
                                [class.bg-base-100]="view() !== 'list'"
                                [class.bg-secondary]="view() === 'list'"
                                [class.text-secondary-content]="
                                    view() === 'list'
                                "
                                [matTooltip]="'COMMON.LIST' | translate"
                                (click)="view.set('list')"
                            >
                                <icon>list</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-l-none rounded-r"
                                [class.bg-base-100]="view() !== 'map'"
                                [class.bg-secondary]="view() === 'map'"
                                [class.text-secondary-content]="
                                    view() === 'map'
                                "
                                [matTooltip]="'COMMON.MAP' | translate"
                                (click)="view.set('map')"
                            >
                                <icon>map</icon>
                            </button>
                        </div>
                    </div>

                    <section class="flex flex-row">
                        <!-- <mat-chip-list class="mt-2">
                        <mat-chip class="text-gray-700 text-xs">
                          {{ form?.controls?.date?.value | date: 'dd MMMM yyyy' }}
                        </mat-chip>

                        <div *ngIf="form?.controls.attendees.value.length > 0">
                          <mat-chip class="text-gray-700 text-xs">
                            {{ form?.controls?.attendees?.value.length }}
                            People
                          </mat-chip>
                        </div>

                        <mat-chip class="text-gray-700 text-xs">
                          <span>{{ start_time$ | async }}</span>
                          -
                          <span> {{ end_time$ | async }}</span>
                        </mat-chip>
                      </mat-chip-list> -->
                    </section>

                    <section class="my-2 flex flex-row border-t">
                        <div class="flex flex-col">
                            <span class="mt-3 text-lg font-bold"> Results</span>
                            <span class="mt-1 text-xs text-gray-500">
                                {{ spaces().length || 0 }} results found</span
                            >
                        </div>
                    </section>

                    <div class="bg-base-200 w-full flex-1">
                        @if (!loading()) {
                            @if (spaces().length > 0) {
                                @if (view() === 'list') {
                                    <div>
                                        @for (space of spaces(); track space) {
                                            <find-space-item
                                                [space]="space"
                                                [selected]="
                                                    book_space()[space.id]
                                                "
                                                (selectedChange)="
                                                    handleBookEvent(
                                                        space,
                                                        $event
                                                    )
                                                "
                                                class="text-sm"
                                            >
                                            </find-space-item>
                                        }
                                    </div>
                                }
                                @if (
                                    view() === 'map' &&
                                    map_features().length > 0
                                ) {
                                    <div class="h-full text-center">
                                        @if (maps_list().length > 1) {
                                            <div>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="m-3 ml-auto flex text-sm"
                                                >
                                                    <mat-select
                                                        [ngModel]="
                                                            selected_level()
                                                        "
                                                        (ngModelChange)="
                                                            updateSelectedLevel(
                                                                $event
                                                            )
                                                        "
                                                    >
                                                        <mat-option
                                                            [value]="
                                                                maps_list()
                                                            "
                                                        >
                                                            {{
                                                                'COMMON.LEVEL_ALL'
                                                                    | translate
                                                            }}
                                                        </mat-option>
                                                        @for (
                                                            map of maps_list();
                                                            track map
                                                        ) {
                                                            <mat-option
                                                                [value]="map"
                                                                >{{
                                                                    map.level
                                                                }}</mat-option
                                                            >
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                            </div>
                                        }
                                        @if (selected_level()) {
                                            <div
                                                class="relative m-6 max-w-screen"
                                            >
                                                <!-- If 'All Levels' option is selected -->
                                                @if (selected_all_levels()) {
                                                    <div>
                                                        @for (
                                                            map of selected_level_maps();
                                                            track map
                                                        ) {
                                                            <div
                                                                class="relative m-3 h-48 max-w-screen"
                                                            >
                                                                <interactive-map
                                                                    [src]="
                                                                        map?.map_id
                                                                    "
                                                                    [styles]="
                                                                        map_styles()
                                                                    "
                                                                    [features]="
                                                                        map_features()
                                                                    "
                                                                    [actions]="
                                                                        map_actions()
                                                                    "
                                                                    class="m-1 max-w-screen p-1"
                                                                >
                                                                </interactive-map>
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                                <!-- If an individual level is selected -->
                                                @if (!selected_all_levels()) {
                                                    <div
                                                        class="relative m-3 h-96 max-w-screen"
                                                    >
                                                        <interactive-map
                                                            [src]="
                                                                selected_map()
                                                                    ?.map_id
                                                            "
                                                            [styles]="
                                                                map_styles()
                                                            "
                                                            [features]="
                                                                map_features()
                                                            "
                                                            [actions]="
                                                                map_actions()
                                                            "
                                                            class="m-1 max-w-screen p-1"
                                                        >
                                                        </interactive-map>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                }
                                <p class="p-2 text-center text-sm opacity-60">
                                    End of available spaces list
                                </p>
                            } @else {
                                <div
                                    class="my-6 flex h-full w-full flex-col items-center justify-center space-y-2 p-2 text-center"
                                >
                                    <p>
                                        No available spaces for selected time,
                                        capacity or level(s)
                                    </p>
                                </div>
                            }
                        } @else {
                            <div
                                class="my-3 flex h-full w-full flex-col items-center justify-center space-y-4"
                            >
                                <mat-spinner [diameter]="32"></mat-spinner>
                                <p>Retrieving available spaces...</p>
                            </div>
                        }
                    </div>
                </div>
                <section
                    class="top-box-shadow border-base-200 flex flex-col items-center justify-center border-t py-1"
                >
                    @if (show_room_details()) {
                        <div>
                            <button
                                matRipple
                                type="submit"
                                (click)="openRoomDetails()"
                                class="open-details-button border-secondary bg-secondary my-1 w-[300px]"
                            >
                                <span class="">View Room</span>
                            </button>
                        </div>
                    }
                </section>
            </section>
        </div>
    `, imports: [
      MatRippleModule,
      MatProgressSpinnerModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      FindSpaceItemComponent,
      MatButtonToggleModule,
      FormsModule,
      IconComponent,
      TranslatePipe,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;a7d82e05b78e6239a6d1eb5ffd7f7d94030e40951be34ee4cb917c1200893399;/home/runner/work/user-interfaces/user-interfaces/apps/outlook-addin/src/app/rooms/find-space.component.ts */\n.mat-button-toggle-appearance-standard {\n  height: 2.25rem;\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 2.25rem;\n  font-size: 0.875rem;\n}\n.mat-button-toggle-label-content {\n  font-size: 0.875rem;\n}\n.mat-button-toggle-checked {\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  box-shadow: none;\n}\n.mat-focus-indicator {\n  border: none;\n}\n/*# sourceMappingURL=find-space.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindSpaceComponent, { className: "FindSpaceComponent", filePath: "apps/outlook-addin/src/app/rooms/find-space.component.ts", lineNumber: 481 });
})();
export {
  FindSpaceComponent
};
//# debugId=138d0fe7-4a0b-586c-88ad-4366d992482c
//# sourceMappingURL=find-space.component-ZWDVNJYQ.js.map
