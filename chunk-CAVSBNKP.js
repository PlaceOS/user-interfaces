import {
  AuthenticatedImageDirective,
  ControlStateService,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatSelect,
  MatSelectModule,
  MatSuffix
} from "./chunk-EORLT5VQ.js";
import {
  TranslatePipe
} from "./chunk-LVMBC5KR.js";
import {
  CustomTooltipComponent,
  CustomTooltipData,
  SanitizePipe
} from "./chunk-RPLLUXAA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-EX7Y2O3I.js";
import {
  AsyncHandler,
  BidiModule,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ElementRef,
  EventEmitter,
  FormsModule,
  HostAttributeToken,
  IconComponent,
  Injectable,
  InjectionToken,
  Input,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatOption,
  MatRipple,
  MatRippleModule,
  Mt,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgModule,
  NgZone,
  OrganisationService,
  Output,
  Pipe,
  Platform,
  Renderer2,
  RippleState,
  SettingsService,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  Zr,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  afterRenderEffect,
  booleanAttribute,
  computed,
  effect,
  eo,
  forwardRef,
  i18n,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  zd,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵdefinePipe,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-ER7G7Q5F.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/material/fesm2022/slider.mjs
var _c0 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  discrete = false;
  thumbPosition;
  valueIndicatorText;
  _ripple;
  _knob;
  _valueIndicatorContainer;
  _sliderInput;
  _sliderInputEl;
  _hoverRippleRef;
  _focusRippleRef;
  _activeRippleRef;
  _isHovered = false;
  _isActive = false;
  _isValueIndicatorVisible = false;
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input2 = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input2, "pointermove", this._onPointerMove), renderer.listen(input2, "pointerdown", this._onDragStart), renderer.listen(input2, "pointerup", this._onDragEnd), renderer.listen(input2, "pointerleave", this._onMouseLeave), renderer.listen(input2, "focus", this._onFocus), renderer.listen(input2, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    var _a;
    (_a = this._listenerCleanups) == null ? void 0 : _a.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  _showHoverRipple() {
    var _a;
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      (_a = this._hoverRippleRef) == null ? void 0 : _a.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  _showFocusRipple() {
    var _a;
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      (_a = this._focusRippleRef) == null ? void 0 : _a.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  _showActiveRipple() {
    var _a;
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      (_a = this._activeRippleRef) == null ? void 0 : _a.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  _isShowingRipple(rippleRef) {
    return (rippleRef == null ? void 0 : rippleRef.state) === RippleState.FADING_IN || (rippleRef == null ? void 0 : rippleRef.state) === RippleState.VISIBLE;
  }
  _showRipple(animation, ignoreGlobalRippleConfig) {
    var _a;
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (((_a = this._slider._globalRippleOptions) == null ? void 0 : _a.disabled) && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  _hideRipple(rippleRef) {
    rippleRef == null ? void 0 : rippleRef.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  _getValueIndicatorContainer() {
    var _a;
    return (_a = this._valueIndicatorContainer) == null ? void 0 : _a.nativeElement;
  }
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5)(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-mdc-slider .mdc-slider__tick-marks {\n  justify-content: start;\n}\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {\n  position: absolute;\n  left: 2px;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-mdc-slider .mdc-slider__tick-marks {\n  justify-content: start;\n}\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {\n  position: absolute;\n  left: 2px;\n}\n"]
    }]
  }], null, {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _trackActive;
  _thumbs;
  _input;
  _inputs;
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  color;
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.min = min;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.max = max;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.step = this._step;
      if (this._platform.SAFARI) {
        input2.value = input2.value;
      }
      input2._updateThumbUIByValue();
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  displayWith = (value) => `${value}`;
  _tickMarks;
  _noopAnimations = _animationsDisabled();
  _resizeObserver = null;
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  startValueIndicatorText = "";
  endValueIndicatorText = "";
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  _isRtl = computed(() => {
    var _a;
    return ((_a = this._dir) == null ? void 0 : _a.valueSignal()) === "rtl";
  }, ...ngDevMode ? [{
    debugName: "_isRtl"
  }] : []);
  _hasViewInitialized = false;
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    let prevIsRtl = this._isRtl();
    afterRenderEffect(() => {
      const isRtl = this._isRtl();
      if (isRtl !== prevIsRtl) {
        prevIsRtl = isRtl;
        this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
        this._updateTickMarkUI();
      }
    });
  }
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    var _a;
    (_a = this._resizeObserver) == null ? void 0 : _a.disconnect();
    this._resizeObserver = null;
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    input2._updateThumbUIByValue();
  }
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input2 = this._getInput(thumbPosition);
    if (!input2) {
      return this.min;
    }
    return input2.value;
  }
  _skipUpdate() {
    var _a, _b;
    return !!(((_a = this._getInput(_MatThumb.START)) == null ? void 0 : _a._skipUIUpdate) || ((_b = this._getInput(_MatThumb.END)) == null ? void 0 : _b._skipUIUpdate));
  }
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl() ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px)`;
  }
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  _thumbsOverlap = false;
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl() ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl() ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  _getInput(thumbPosition) {
    var _a;
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if ((_a = this._inputs) == null ? void 0 : _a.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  _getThumb(thumbPosition) {
    var _a, _b;
    return thumbPosition === _MatThumb.END ? (_a = this._thumbs) == null ? void 0 : _a.last : (_b = this._thumbs) == null ? void 0 : _b.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5)(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5)(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  pointer-events: none;\n  height: var(--%NS%mat-slider-inactive-track-height, 4px);\n}\n\n.mdc-slider__track--active,\n.mdc-slider__track--inactive {\n  display: flex;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__track--active {\n  overflow: hidden;\n  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));\n  height: var(--%NS%mat-slider-active-track-height, 4px);\n  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);\n}\n\n.mdc-slider__track--active_fill {\n  border-top-style: solid;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-origin: left;\n  transition: transform 80ms ease;\n  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));\n  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);\n}\n.mdc-slider--disabled .mdc-slider__track--active_fill {\n  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));\n}\n[dir=rtl] .mdc-slider__track--active_fill {\n  -webkit-transform-origin: right;\n  transform-origin: right;\n}\n\n.mdc-slider__track--inactive {\n  left: 0;\n  top: 0;\n  opacity: 0.24;\n  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));\n  height: var(--%NS%mat-slider-inactive-track-height, 4px);\n  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));\n}\n.mdc-slider--disabled .mdc-slider__track--inactive {\n  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));\n  opacity: 0.24;\n}\n.mdc-slider__track--%NS%inactive::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__track--%NS%inactive::before {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-container {\n  bottom: 44px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {\n  pointer-events: auto;\n}\n\n.mdc-slider__value-indicator {\n  display: flex;\n  align-items: center;\n  transform: scale(0);\n  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);\n  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);\n  word-break: normal;\n  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));\n  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));\n  width: var(--%NS%mat-slider-value-indicator-width, 28px);\n  height: var(--%NS%mat-slider-value-indicator-height, 28px);\n  padding: var(--%NS%mat-slider-value-indicator-padding, 0);\n  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);\n  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {\n  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(1);\n}\n.mdc-slider__value-indicator::before {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid;\n  bottom: -5px;\n  content: "";\n  height: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  display: var(--%NS%mat-slider-value-indicator-caret-display, none);\n  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));\n}\n.mdc-slider__value-indicator::after {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__value-indicator::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-text {\n  text-align: center;\n  width: var(--%NS%mat-slider-value-indicator-width, 28px);\n  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));\n  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));\n  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));\n  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));\n  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));\n  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));\n}\n\n.mdc-slider__thumb {\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  left: -24px;\n  outline: none;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  pointer-events: none;\n}\n.mdc-slider--discrete .mdc-slider__thumb {\n  transition: transform 80ms ease;\n}\n.mdc-slider--disabled .mdc-slider__thumb {\n  pointer-events: none;\n}\n\n.mdc-slider__thumb--top {\n  z-index: 1;\n}\n\n.mdc-slider__thumb-knob {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-style: solid;\n  width: var(--%NS%mat-slider-handle-width, 20px);\n  height: var(--%NS%mat-slider-handle-height, 20px);\n  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);\n  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));\n  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));\n  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));\n  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));\n}\n.mdc-slider__thumb:hover .mdc-slider__thumb-knob {\n  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));\n  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));\n}\n.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));\n  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));\n}\n.mdc-slider--disabled .mdc-slider__thumb-knob {\n  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));\n  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  border: solid 1px #fff;\n  box-sizing: content-box;\n  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));\n  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);\n}\n\n.mdc-slider__tick-marks {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding: 0 1px;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__tick-mark--active,\n.mdc-slider__tick-mark--inactive {\n  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);\n  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);\n  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));\n}\n\n.mdc-slider__tick-mark--inactive {\n  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-slider--disabled .mdc-slider__tick-mark--inactive {\n  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-slider__tick-mark--active {\n  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);\n  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));\n}\n\n.mdc-slider__input {\n  cursor: pointer;\n  left: 2px;\n  margin: 0;\n  height: 44px;\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  width: 44px;\n  box-sizing: content-box;\n}\n.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {\n  pointer-events: none;\n}\n.mdc-slider__input.mat-slider__right-input {\n  left: auto;\n  right: 0;\n}\n\n.mat-mdc-slider {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  vertical-align: middle;\n  cursor: pointer;\n  height: 48px;\n  margin: 0 8px;\n  position: relative;\n  touch-action: pan-y;\n  width: auto;\n  min-width: 112px;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-slider.mdc-slider--disabled {\n  cursor: auto;\n  opacity: 0.38;\n}\n.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {\n  cursor: auto;\n}\n.mat-mdc-slider .mdc-slider__thumb,\n.mat-mdc-slider .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider .mat-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {\n  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {\n  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));\n}\n.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,\n.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {\n  transition: none;\n}\n.mat-mdc-slider .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n\n.mdc-slider__thumb--focused .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  pointer-events: none;\n  height: var(--mat-slider-inactive-track-height, 4px);\n}\n\n.mdc-slider__track--active,\n.mdc-slider__track--inactive {\n  display: flex;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__track--active {\n  overflow: hidden;\n  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));\n  height: var(--mat-slider-active-track-height, 4px);\n  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);\n}\n\n.mdc-slider__track--active_fill {\n  border-top-style: solid;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-origin: left;\n  transition: transform 80ms ease;\n  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-slider-active-track-height, 4px);\n}\n.mdc-slider--disabled .mdc-slider__track--active_fill {\n  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));\n}\n[dir=rtl] .mdc-slider__track--active_fill {\n  -webkit-transform-origin: right;\n  transform-origin: right;\n}\n\n.mdc-slider__track--inactive {\n  left: 0;\n  top: 0;\n  opacity: 0.24;\n  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));\n  height: var(--mat-slider-inactive-track-height, 4px);\n  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider--disabled .mdc-slider__track--inactive {\n  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));\n  opacity: 0.24;\n}\n.mdc-slider__track--inactive::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__track--inactive::before {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-container {\n  bottom: 44px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {\n  pointer-events: auto;\n}\n\n.mdc-slider__value-indicator {\n  display: flex;\n  align-items: center;\n  transform: scale(0);\n  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);\n  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);\n  word-break: normal;\n  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));\n  width: var(--mat-slider-value-indicator-width, 28px);\n  height: var(--mat-slider-value-indicator-height, 28px);\n  padding: var(--mat-slider-value-indicator-padding, 0);\n  opacity: var(--mat-slider-value-indicator-opacity, 1);\n  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {\n  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(1);\n}\n.mdc-slider__value-indicator::before {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid;\n  bottom: -5px;\n  content: "";\n  height: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  display: var(--mat-slider-value-indicator-caret-display, none);\n  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n}\n.mdc-slider__value-indicator::after {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__value-indicator::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-text {\n  text-align: center;\n  width: var(--mat-slider-value-indicator-width, 28px);\n  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));\n  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));\n  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));\n  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));\n  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));\n  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));\n}\n\n.mdc-slider__thumb {\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  left: -24px;\n  outline: none;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  pointer-events: none;\n}\n.mdc-slider--discrete .mdc-slider__thumb {\n  transition: transform 80ms ease;\n}\n.mdc-slider--disabled .mdc-slider__thumb {\n  pointer-events: none;\n}\n\n.mdc-slider__thumb--top {\n  z-index: 1;\n}\n\n.mdc-slider__thumb-knob {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-style: solid;\n  width: var(--mat-slider-handle-width, 20px);\n  height: var(--mat-slider-handle-height, 20px);\n  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);\n  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));\n  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider__thumb:hover .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider--disabled .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  border: solid 1px #fff;\n  box-sizing: content-box;\n  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));\n  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);\n}\n\n.mdc-slider__tick-marks {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding: 0 1px;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__tick-mark--active,\n.mdc-slider__tick-mark--inactive {\n  width: var(--mat-slider-with-tick-marks-container-size, 2px);\n  height: var(--mat-slider-with-tick-marks-container-size, 2px);\n  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));\n}\n\n.mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-slider--disabled .mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));\n}\n\n.mdc-slider__tick-mark--active {\n  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));\n}\n\n.mdc-slider__input {\n  cursor: pointer;\n  left: 2px;\n  margin: 0;\n  height: 44px;\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  width: 44px;\n  box-sizing: content-box;\n}\n.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {\n  pointer-events: none;\n}\n.mdc-slider__input.mat-slider__right-input {\n  left: auto;\n  right: 0;\n}\n\n.mat-mdc-slider {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  vertical-align: middle;\n  cursor: pointer;\n  height: 48px;\n  margin: 0 8px;\n  position: relative;\n  touch-action: pan-y;\n  width: auto;\n  min-width: 112px;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-slider.mdc-slider--disabled {\n  cursor: auto;\n  opacity: 0.38;\n}\n.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {\n  cursor: auto;\n}\n.mat-mdc-slider .mdc-slider__thumb,\n.mat-mdc-slider .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider .mat-ripple .mat-ripple-element {\n  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {\n  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {\n  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));\n}\n.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,\n.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {\n  transition: none;\n}\n.mat-mdc-slider .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n\n.mdc-slider__thumb--focused .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || (startInputElement == null ? void 0 : startInputElement._hostElement.hasAttribute("matSliderStartThumb"));
  const endValid = endInputElement == null ? void 0 : endInputElement._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  valueChange = new EventEmitter();
  dragStart = new EventEmitter();
  dragEnd = new EventEmitter();
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  thumbPosition = _MatThumb.END;
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl() ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl() ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  _hostElement = this._elementRef.nativeElement;
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  _knobRadius = 8;
  _tickMarkOffset = 3;
  _isActive = false;
  _isFocused = false;
  _setIsFocused(v) {
    this._isFocused = v;
  }
  _hasSetInitialValue = false;
  _initialValue;
  _formControl;
  _destroyed = new Subject();
  _skipUIUpdate = false;
  _onChangeFn;
  _onTouchedFn = () => {
  };
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    var _a;
    (_a = this._onChangeFn) == null ? void 0 : _a.call(this, this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: !this._isActive
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  _fixValue(event) {
    var _a;
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl() ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    (_a = this._onChangeFn) == null ? void 0 : _a.call(this, this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl()) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  _updateWidthActive() {
  }
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!(options == null ? void 0 : options.withAnimation));
    this._slider._onTranslateXChange(this);
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl() || !this._isEndThumb && !this._slider._isRtl();
  }
  _isLeftThumb = false;
  _isEndThumb = false;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    var _a;
    super._onNgControlValueChange();
    (_a = this.getSibling()) == null ? void 0 : _a._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    var _a;
    super._fixValue(event);
    (_a = this._sibling) == null ? void 0 : _a._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c02 = ["input"];
var _c12 = ["*"];
var checkboxDefaults = {
  color: "accent",
  clickAction: "check-indeterminate",
  disabledInteractive: false
};
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: () => checkboxDefaults
});
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
  source;
  checked;
};
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    var _a;
    return (_a = this._inputElement) == null ? void 0 : _a.nativeElement;
  }
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  ariaLabel = "";
  ariaLabelledby = null;
  ariaDescribedby;
  ariaExpanded;
  ariaControls;
  ariaOwns;
  _uniqueId;
  id;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  required = false;
  labelPosition = "after";
  name = null;
  change = new EventEmitter();
  indeterminateChange = new EventEmitter();
  value;
  disableRipple = false;
  _inputElement;
  tabIndex;
  color;
  disabledInteractive;
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    var _a;
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || checkboxDefaults;
    this.color = this._options.color || checkboxDefaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = ((_a = this._options) == null ? void 0 : _a.disabledInteractive) ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  writeValue(value) {
    this.checked = !!value;
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
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    var _a;
    const clickAction = (_a = this._options) == null ? void 0 : _a.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _preventBubblingFromLabel(event) {
    if (event.target && this._inputElement && event.target !== this._inputElement.nativeElement) {
      event.stopPropagation();
    }
  }
  static \u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatCheckbox),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition", "for"], [1, "mdc-checkbox"], ["aria-hidden", "true", 1, "mat-mdc-checkbox-touch-target"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], ["aria-hidden", "true", 1, "mdc-checkbox__ripple"], ["aria-hidden", "true", 1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", "aria-hidden", "true", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-internal-form-field-label", "mdc-label"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "label", 3);
        \u0275\u0275listener("click", function MatCheckbox_Template_label_click_0_listener($event) {
          return ctx._preventBubblingFromLabel($event);
        });
        \u0275\u0275elementStart(1, "span", 4, 0);
        \u0275\u0275element(3, "span", 5);
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          return ctx._onBlur();
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          return ctx._onInputClick();
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          return ctx._onInteractionEvent($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "span", 7);
        \u0275\u0275elementStart(7, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 9);
        \u0275\u0275element(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 13, 2);
        \u0275\u0275projection(14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const checkbox_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition)("for", ctx.inputId);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
        \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        \u0275\u0275advance(7);
        \u0275\u0275property("matRippleTrigger", checkbox_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox:hover > .mdc-checkbox__ripple {\n  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {\n  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {\n  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));\n  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {\n  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));\n  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--%NS%mat-checkbox-state-layer-size, 40px);\n  height: var(--%NS%mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));\n  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));\n  background-color: transparent;\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));\n  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));\n}\n\n.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));\n  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));\n}\n\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-checkbox label {\n  cursor: pointer;\n}\n.mat-mdc-checkbox .mat-internal-form-field {\n  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));\n  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));\n  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));\n  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));\n  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {\n  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {\n    color: GrayText;\n  }\n}\n.mat-mdc-checkbox .mat-internal-form-field-label:empty {\n  display: none;\n}\n.mat-mdc-checkbox .mdc-checkbox__ripple {\n  opacity: 0;\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple,\n.mdc-checkbox__ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),\n.mdc-checkbox__ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-mdc-checkbox-ripple .mat-ripple-element {\n  opacity: 0.1;\n}\n\n.mat-mdc-checkbox-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--%NS%mat-checkbox-touch-target-size, 48px);\n  width: var(--%NS%mat-checkbox-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--%NS%mat-checkbox-touch-target-display, block);\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {\n  border-radius: 50%;\n}\n\n.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple, _MatInternalFormField],
      template: `<label
  mat-internal-form-field
  [labelPosition]="labelPosition"
  [for]="inputId"
  (click)="_preventBubblingFromLabel($event)">
  <span #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <span class="mat-mdc-checkbox-touch-target" aria-hidden="true"></span>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <span class="mdc-checkbox__ripple" aria-hidden="true"></span>
    <span class="mdc-checkbox__background" aria-hidden="true">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <span class="mdc-checkbox__mixedmark"></span>
    </span>
    <span class="mat-mdc-checkbox-ripple mat-focus-indicator"
      mat-ripple
      aria-hidden="true"
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></span>
  </span>

  <span #label class="mat-internal-form-field-label mdc-label">
    <ng-content></ng-content>
  </span>
</label>
`,
      styles: ['.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox:hover > .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-checkbox-state-layer-size, 40px);\n  height: var(--mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));\n  background-color: transparent;\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-checkbox label {\n  cursor: pointer;\n}\n.mat-mdc-checkbox .mat-internal-form-field {\n  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {\n  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {\n    color: GrayText;\n  }\n}\n.mat-mdc-checkbox .mat-internal-form-field-label:empty {\n  display: none;\n}\n.mat-mdc-checkbox .mdc-checkbox__ripple {\n  opacity: 0;\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple,\n.mdc-checkbox__ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),\n.mdc-checkbox__ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-mdc-checkbox-ripple .mat-ripple-element {\n  opacity: 0.1;\n}\n\n.mat-mdc-checkbox-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-checkbox-touch-target-size, 48px);\n  width: var(--mat-checkbox-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-checkbox-touch-target-display, block);\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {\n  border-radius: 50%;\n}\n\n.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {\n  content: "";\n}\n']
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
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
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
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static \u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox],
    exports: [MatCheckbox, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCheckbox, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox],
      exports: [MatCheckbox, BidiModule]
    }]
  }], null, null);
})();

// libs/components/src/lib/settings-toggle.component.ts
var _c03 = ["*"];
function SettingsToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function SettingsToggleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "div", 9)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.value())("bg-info", ctx_r0.value())("border-info!", ctx_r0.value());
    \u0275\u0275advance();
    \u0275\u0275classProp("left-1", !ctx_r0.value())("left-5", ctx_r0.value())("bg-base-400", !ctx_r0.value())("bg-info-light", ctx_r0.value());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.value() ? "done" : "remove");
  }
}
function SettingsToggleComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 10);
    \u0275\u0275listener("ngModelChange", function SettingsToggleComponent_Conditional_10_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.value());
    \u0275\u0275control();
  }
}
var _SettingsToggleComponent = class _SettingsToggleComponent {
  constructor() {
    this.toggle = input(
      void 0,
      ...ngDevMode ? [{ debugName: "toggle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input(
      void 0,
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.info = input(
      void 0,
      ...ngDevMode ? [{ debugName: "info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inline = input(
      true,
      ...ngDevMode ? [{ debugName: "inline" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value.set(new_value);
    if (this._onChange)
      this._onChange(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
};
_SettingsToggleComponent.\u0275fac = function SettingsToggleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsToggleComponent)();
};
_SettingsToggleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { toggle: [1, "toggle"], label: [1, "label"], info: [1, "info"], inline: [1, "inline"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SettingsToggleComponent),
    multi: true
  }
])], ngContentSelectors: _c03, decls: 11, vars: 13, consts: [["type", "button", "matRipple", "", 1, "hover:bg-base-200", "relative", "flex", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-1", "pl-2", 3, "click"], [1, "z-10", "flex", "flex-1", "items-center", "space-x-2", "px-2", "text-left"], [1, "flex", "flex-col", "justify-center", "w-full", "leading-none", "h-full"], [1, "text-xs", "opacity-30"], [3, "matTooltip"], [1, "bg-info", "absolute", "inset-0", "z-0", "m-0!", "opacity-10"], [1, "px-2"], [1, "pointer-events-none", 3, "ngModel"], ["toggle", "", 1, "border-base-400", "relative", "h-8", "w-12", "rounded-full", "border-2"], [1, "absolute", "top-1/2", "flex", "h-6", "w-6", "-translate-x-0.5", "-translate-y-1/2", "items-center", "justify-center", "rounded-full", "text-black", "shadow-sm"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
      return ctx.setValue(!ctx.value());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 2, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SettingsToggleComponent_Conditional_7_Template, 2, 1, "icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SettingsToggleComponent_Conditional_8_Template, 1, 0, "div", 5);
    \u0275\u0275conditionalCreate(9, SettingsToggleComponent_Conditional_9_Template, 5, 15, "div", 6)(10, SettingsToggleComponent_Conditional_10_Template, 1, 1, "mat-checkbox", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("border-base-300", !ctx.value())("border-info", ctx.value());
    \u0275\u0275advance();
    \u0275\u0275classProp("py-2", !ctx.inline())("py-1", !ctx.inline());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.label());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.info() && ctx.inline() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.info() && !ctx.inline() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.value() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.toggle() ? 9 : 10);
  }
}, dependencies: [MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n[toggle][_ngcontent-%COMP%] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
var SettingsToggleComponent = _SettingsToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsToggleComponent, [{
    type: Component,
    args: [{ selector: "settings-toggle", template: `
        <button
            type="button"
            matRipple
            class="hover:bg-base-200 relative flex flex-1 items-center space-x-2 overflow-hidden rounded-sm border py-1 pr-1 pl-2"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            (click)="setValue(!value())"
        >
            <div class="z-10 flex flex-1 items-center space-x-2 px-2 text-left" [class.py-2]="!inline()" [class.py-1]="!inline()">
                <div class="flex flex-col justify-center w-full leading-none h-full">
                    <div>{{ label() }}<ng-content></ng-content></div>
                    @if (info() && inline()) {
                        <div class="text-xs opacity-30">{{ info() }}</div>
                    }
                </div>
                @if (info() && !inline()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            @if (value()) {
                <div class="bg-info absolute inset-0 z-0 m-0! opacity-10"></div>
            }
            @if (toggle()) {
                <div class="px-2">
                    <div
                        toggle
                        class="border-base-400 relative h-8 w-12 rounded-full border-2"
                        [class.bg-base-200]="!value()"
                        [class.bg-info]="value()"
                        [class.border-info!]="value()"
                    >
                        <div
                            class="absolute top-1/2 flex h-6 w-6 -translate-x-0.5 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-sm"
                            [class.left-1]="!value()"
                            [class.left-5]="value()"
                            [class.bg-base-400]="!value()"
                            [class.bg-info-light]="value()"
                        >
                            <icon>{{ value() ? 'done' : 'remove' }}</icon>
                        </div>
                    </div>
                </div>
            } @else {
                <mat-checkbox
                    [ngModel]="value()"
                    (ngModelChange)="setValue($event)"
                    class="pointer-events-none"
                ></mat-checkbox>
            }
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SettingsToggleComponent),
        multi: true
      }
    ], imports: [MatCheckboxModule, FormsModule, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;09d472dfc67150cf01347a580874515fc3cc343b61a90041f2b167ad15a01cf4;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/settings-toggle.component.ts */\n:host {\n  display: flex;\n}\n[toggle] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */\n"] }]
  }], null, { toggle: [{ type: Input, args: [{ isSignal: true, alias: "toggle", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }], inline: [{ type: Input, args: [{ isSignal: true, alias: "inline", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "libs/components/src/lib/settings-toggle.component.ts", lineNumber: 87 });
})();

// libs/components/src/lib/binding.directive.ts
var _BindingDirective = class _BindingDirective extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._renderer = inject(Renderer2);
    this.sys = input(
      "",
      ...ngDevMode ? [{ debugName: "sys" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mod = input(
      "",
      ...ngDevMode ? [{ debugName: "mod" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.index = input(
      1,
      ...ngDevMode ? [{ debugName: "index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bind = input(
      "",
      ...ngDevMode ? [{ debugName: "bind" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.exec = input(
      "",
      ...ngDevMode ? [{ debugName: "exec" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.delay = input(
      100,
      ...ngDevMode ? [{ debugName: "delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.on_event = input("", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "on_event" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "onEvent" }));
    this.params = input(
      null,
      ...ngDevMode ? [{ debugName: "params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ignore = input(
      false,
      ...ngDevMode ? [{ debugName: "ignore" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "modelInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "model" }));
    this.model = linkedSignal(
      this.modelInput,
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelChange = output();
    this._binding = false;
    this._old_model = null;
  }
  ngOnInit() {
    Zr(eo(), (_) => _).then(() => this.bindVariable());
  }
  ngOnChanges(changes) {
    if (changes.sys || changes.mod || changes.bind) {
      this.bindVariable();
    }
    const model = this.model();
    if ((changes.model || changes.modelInput) && this._old_model !== model && this.model != null) {
      this._old_model = model;
      this.execute();
    }
    const on_event = this.on_event();
    if (changes.on_event && on_event) {
      this.subscription("on_event", this._renderer.listen(this._element.nativeElement, on_event, () => this.execute()));
    }
  }
  /** Bind to set status variable */
  bindVariable() {
    if (Mt() && this.bind() && this.sys() && this.mod() && !this._binding) {
      this.timeout("bind", () => {
        const module = zd(this.sys(), this.mod(), this.index());
        const binding = module.variable(this.bind());
        this._binding = true;
        this.subscription("on_changes", binding.bindThenSubscribe((value) => {
          setTimeout(() => {
            this._binding = false;
            this.clearTimeout("bound");
            if (this.ignore())
              return;
            this._old_model = this.model();
            this.model.set(value);
            this.modelChange.emit(this.model());
          }, 10);
        }));
        this.timeout("bound", () => this._binding = false, 200);
      }, 20);
    }
  }
  /** Excute the set method on the module */
  execute() {
    if (Mt() && this.exec() && this.sys() && this.mod() && !this._timers["execute"]) {
      this.timeout("execute", () => {
        const module = zd(this.sys(), this.mod(), this.index());
        let params = this.params();
        if (this.bind())
          params = this.params() || [this.model()];
        module.execute(this.exec(), params || []).then((result) => {
          if (!this.bind()) {
            this.model.set(result);
            this._old_model = this.model();
            this.modelChange.emit(this.model());
          }
        });
      }, this.delay());
    }
  }
};
_BindingDirective.\u0275fac = function BindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BindingDirective)();
};
_BindingDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: [1, "sys"], mod: [1, "mod"], index: [1, "index"], bind: [1, "bind"], exec: [1, "exec"], delay: [1, "delay"], on_event: [1, "onEvent", "on_event"], params: [1, "params"], ignore: [1, "ignore"], modelInput: [1, "model", "modelInput"] }, outputs: { modelChange: "modelChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
var BindingDirective = _BindingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirective, [{
    type: Directive,
    args: [{
      selector: "i[bind], [binding], co-bind"
    }]
  }], () => [], { sys: [{ type: Input, args: [{ isSignal: true, alias: "sys", required: false }] }], mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], bind: [{ type: Input, args: [{ isSignal: true, alias: "bind", required: false }] }], exec: [{ type: Input, args: [{ isSignal: true, alias: "exec", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], on_event: [{ type: Input, args: [{ isSignal: true, alias: "onEvent", required: false }] }], params: [{ type: Input, args: [{ isSignal: true, alias: "params", required: false }] }], ignore: [{ type: Input, args: [{ isSignal: true, alias: "ignore", required: false }] }], modelInput: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();

// apps/control/src/app/ui/duration.pipe.ts
function padLength(value, length = 2) {
  let str = `${value}`;
  while (str.length < length)
    str = `0${str}`;
  return str;
}
var _DurationPipe = class _DurationPipe {
  transform(length) {
    let str = `${padLength(Math.floor(length / 60) % 60)}:${padLength(length % 60)}`;
    const hours = Math.floor(length / 60 / 60);
    if (hours > 0) {
      str = `${padLength(hours)}:${str}`;
    }
    return str;
  }
};
_DurationPipe.\u0275fac = function DurationPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DurationPipe)();
};
_DurationPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "duration", type: _DurationPipe, pure: true });
var DurationPipe = _DurationPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationPipe, [{
    type: Pipe,
    args: [{
      name: "duration"
    }]
  }], null, null);
})();

// apps/control/src/app/status-bar.component.ts
function ControlStatusBarComponent_Conditional_0_Template(rf, ctx) {
  var _a, _b, _c, _d;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 3)(2, "i", 4);
    \u0275\u0275twoWayListener("modelChange", function ControlStatusBarComponent_Conditional_0_Template_i_modelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rec_status, $event) || (ctx_r1.rec_status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i", 5);
    \u0275\u0275twoWayListener("modelChange", function ControlStatusBarComponent_Conditional_0_Template_i_modelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rec_title, $event) || (ctx_r1.rec_title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "i", 6);
    \u0275\u0275twoWayListener("modelChange", function ControlStatusBarComponent_Conditional_0_Template_i_modelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rec_remaining, $event) || (ctx_r1.rec_remaining = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "i", 7);
    \u0275\u0275twoWayListener("modelChange", function ControlStatusBarComponent_Conditional_0_Template_i_modelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rec_next, $event) || (ctx_r1.rec_next = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "button", 10)(10, "icon");
    \u0275\u0275text(11, "stop");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "button", 11)(14, "icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "duration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "label");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "duration");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("model", ctx_r1.rec_status);
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_a = ctx_r1.capture_mod()) == null ? void 0 : _a.mod);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx_r1.rec_title);
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_b = ctx_r1.capture_mod()) == null ? void 0 : _b.mod);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx_r1.rec_remaining);
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_c = ctx_r1.capture_mod()) == null ? void 0 : _c.mod);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx_r1.rec_next);
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_d = ctx_r1.capture_mod()) == null ? void 0 : _d.mod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.rec_title || "~Unnamed Recording~", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.rec_status || ctx_r1.rec_status === "stopped")("sys", ctx_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("sys", ctx_r1.id)("exec", ctx_r1.rec_status === "playing" ? "pause" : "start");
    \u0275\u0275attribute("place-action", ctx_r1.rec_status === "playing" ? "pause" : "start");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.rec_status === "playing" ? "pause" : "play_arrow");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-error", ctx_r1.rec_status === "playing")("text-error-content", ctx_r1.rec_status === "playing")("bg-warning", ctx_r1.rec_status === "paused")("text-warning-content", ctx_r1.rec_status === "paused")("bg-base-300", ctx_r1.rec_status === "stopped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 34, ctx_r1.rec_status === "playing" ? "APP.CONTROL.STATE_RECORDING" : ctx_r1.rec_status === "paused" ? "APP.CONTROL.STATE_PAUSED" : "APP.CONTROL.STATE_IDLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 36, "APP.CONTROL.REMAINING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 38, ctx_r1.rec_remaining));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 40, "APP.CONTROL.NEXT_RECORDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 42, ctx_r1.rec_next));
  }
}
function ControlStatusBarComponent_Conditional_2_Template(rf, ctx) {
  var _a, _b, _c;
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 16);
    \u0275\u0275listener("click", function ControlStatusBarComponent_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMute());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-slider", 1)(5, "input", 17);
    \u0275\u0275listener("ngModelChange", function ControlStatusBarComponent_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVolume($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.volume_icon());
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", (_a = ctx_r1.system()) == null ? void 0 : _a.mute);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((_b = ctx_r1.system()) == null ? void 0 : _b.volume) || 0);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((_c = ctx_r1.system()) == null ? void 0 : _c.volume) || 0, "% ");
  }
}
var _ControlStatusBarComponent = class _ControlStatusBarComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this.system = this._state.system;
    this.has_master_audio = this._state.has_master_audio;
    this.capture_mod = computed(
      () => this._state.capture_list()[0],
      ...ngDevMode ? [{ debugName: "capture_mod" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.volume_icon = computed(
      () => {
        const sys = this.system();
        if (sys == null ? void 0 : sys.mute)
          return "volume_off";
        return (sys == null ? void 0 : sys.volume) > 0 ? "volume_up" : "volume_mute";
      },
      ...ngDevMode ? [{ debugName: "volume_icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setVolume = (v) => {
      var _a;
      if ((_a = this.system()) == null ? void 0 : _a.mute)
        this._state.setMute(false);
      this._state.setVolume(v);
    };
    this.toggleMute = () => {
      const sys = this.system();
      this._state.setMute(!(sys == null ? void 0 : sys.mute));
    };
  }
  get id() {
    return this._state.id;
  }
};
_ControlStatusBarComponent.\u0275fac = function ControlStatusBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlStatusBarComponent)();
};
_ControlStatusBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlStatusBarComponent, selectors: [["control-status-bar"]], decls: 3, vars: 2, consts: [["recording", "", 1, "divide-base-200", "text-base-content", "flex", "items-center", "divide-x", "text-xs"], [1, "flex-1"], [1, "text-base-content", "flex", "w-lg", "max-w-[50%]", "items-center", "space-x-2", "px-4", "py-2"], ["hidden", ""], ["binding", "", "bind", "status", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "title", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "remaining", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "next", 3, "modelChange", "model", "sys", "mod"], [1, "flex", "h-12", "w-24", "items-center", "justify-center", "p-2", "text-center"], [1, "flex", "h-12", "w-12", "items-center", "justify-center"], ["place-action", "stop", "icon", "", "matRipple", "", "binding", "", "mod", "Capture", "onEvent", "click", "exec", "stop", 1, "rounded-none", 3, "disabled", "sys"], ["icon", "", "matRipple", "", "binding", "", "mod", "Capture", "onEvent", "click", 1, "rounded-none", 3, "sys", "exec"], [1, "flex", "h-12", "w-32", "flex-col", "p-2"], [1, "rounded-sm", "p-2", "text-center", "uppercase"], [1, "h-12", "p-2"], [1, ""], ["icon", "", "matRipple", "", "mute", "", 3, "click"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], ["volume-level", "", 1, "w-12", "text-right", "tabular-nums"]], template: function ControlStatusBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlStatusBarComponent_Conditional_0_Template, 34, 44, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ControlStatusBarComponent_Conditional_2_Template, 8, 5, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.capture_mod() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.has_master_audio() !== false ? 2 : -1);
  }
}, dependencies: [
  BindingDirective,
  MatSliderModule,
  MatSlider,
  MatSliderThumb,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  IconComponent,
  DurationPipe,
  TranslatePipe
], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 3.5rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=status-bar.component.css.map */"] });
var ControlStatusBarComponent = _ControlStatusBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlStatusBarComponent, [{
    type: Component,
    args: [{ selector: "control-status-bar", template: `
        @if (capture_mod()) {
            <div
                recording
                class="divide-base-200 text-base-content flex items-center divide-x text-xs"
            >
                <div hidden>
                    <i
                        binding
                        [(model)]="rec_status"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="status"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_title"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="title"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_remaining"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="remaining"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_next"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="next"
                    ></i>
                </div>
                <div
                    class="flex h-12 w-24 items-center justify-center p-2 text-center"
                >
                    {{ rec_title || '~Unnamed Recording~' }}
                </div>
                <div class="flex h-12 w-12 items-center justify-center">
                    <button
                        place-action="stop"
                        icon
                        matRipple
                        class="rounded-none"
                        [disabled]="!rec_status || rec_status === 'stopped'"
                        binding
                        [sys]="id"
                        mod="Capture"
                        onEvent="click"
                        exec="stop"
                    >
                        <icon>stop</icon>
                    </button>
                </div>
                <div class="flex h-12 w-12 items-center justify-center">
                    <button
                        [attr.place-action]="
                            rec_status === 'playing' ? 'pause' : 'start'
                        "
                        icon
                        matRipple
                        class="rounded-none"
                        binding
                        [sys]="id"
                        mod="Capture"
                        onEvent="click"
                        [exec]="rec_status === 'playing' ? 'pause' : 'start'"
                    >
                        <icon>{{
                            rec_status === 'playing' ? 'pause' : 'play_arrow'
                        }}</icon>
                    </button>
                </div>
                <div class="flex h-12 w-32 flex-col p-2">
                    <div
                        class="rounded-sm p-2 text-center uppercase"
                        [class.bg-error]="rec_status === 'playing'"
                        [class.text-error-content]="rec_status === 'playing'"
                        [class.bg-warning]="rec_status === 'paused'"
                        [class.text-warning-content]="rec_status === 'paused'"
                        [class.bg-base-300]="rec_status === 'stopped'"
                    >
                        {{
                            (rec_status === 'playing'
                                ? 'APP.CONTROL.STATE_RECORDING'
                                : rec_status === 'paused'
                                  ? 'APP.CONTROL.STATE_PAUSED'
                                  : 'APP.CONTROL.STATE_IDLE'
                            ) | translate
                        }}
                    </div>
                </div>
                <div class="h-12 p-2">
                    <label>{{ 'APP.CONTROL.REMAINING' | translate }}</label>
                    <div class="">{{ rec_remaining | duration }}</div>
                </div>
                <div class="h-12 p-2">
                    <label>{{
                        'APP.CONTROL.NEXT_RECORDING' | translate
                    }}</label>
                    <div class="">{{ rec_next | duration }}</div>
                </div>
            </div>
        }
        <div class="flex-1"></div>
        @if (has_master_audio() !== false) {
            <div
                class="text-base-content flex w-lg max-w-[50%] items-center space-x-2 px-4 py-2"
            >
                <button icon matRipple mute (click)="toggleMute()">
                    <icon>{{ volume_icon() }}</icon>
                </button>
                <mat-slider class="flex-1" [class.opacity-50]="system()?.mute">
                    <input
                        matSliderThumb
                        [ngModel]="system()?.volume || 0"
                        (ngModelChange)="setVolume($event)"
                /></mat-slider>
                <span volume-level class="w-12 text-right tabular-nums">
                    {{ system()?.volume || 0 }}%
                </span>
            </div>
        }
    `, imports: [
      BindingDirective,
      MatSliderModule,
      FormsModule,
      MatRippleModule,
      IconComponent,
      DurationPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;ca9d2130e395348a1fcd6389e88340baed5c122428aa79929d8f0209f52e652a;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/status-bar.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  height: 3.5rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=status-bar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlStatusBarComponent, { className: "ControlStatusBarComponent", filePath: "apps/control/src/app/status-bar.component.ts", lineNumber: 162 });
})();

// apps/control/src/app/ui/joystick.component.ts
var _c04 = ["panning_control"];
function eventToPoint(event) {
  if (!event) {
    return { x: -1, y: -1 };
  }
  if (event instanceof MouseEvent) {
    return { x: event.clientX, y: event.clientY };
  }
  return event.touches && event.touches.length > 0 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : { x: -1, y: -1 };
}
var JoystickTilt;
(function(JoystickTilt2) {
  JoystickTilt2["Down"] = "down";
  JoystickTilt2["Up"] = "up";
  JoystickTilt2["Stop"] = "stop";
})(JoystickTilt || (JoystickTilt = {}));
var JoystickPan;
(function(JoystickPan2) {
  JoystickPan2["Left"] = "left";
  JoystickPan2["Right"] = "right";
  JoystickPan2["Stop"] = "stop";
})(JoystickPan || (JoystickPan = {}));
var _JoystickComponent = class _JoystickComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._renderer = inject(Renderer2);
    this.panInput = input(JoystickPan.Stop, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "panInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "pan" }));
    this.pan = linkedSignal(
      this.panInput,
      ...ngDevMode ? [{ debugName: "pan" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tiltInput = input(JoystickTilt.Stop, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "tiltInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "tilt" }));
    this.tilt = linkedSignal(
      this.tiltInput,
      ...ngDevMode ? [{ debugName: "tilt" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panChange = output();
    this.tiltChange = output();
    this._panning_el = viewChild(
      "panning_control",
      ...ngDevMode ? [{ debugName: "_panning_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumb_transform = computed(
      () => {
        const pan = this.pan();
        const tilt = this.tilt();
        return `translate(${pan === JoystickPan.Stop ? "0" : pan === JoystickPan.Left ? "-50" : "50"}%, ${tilt === JoystickTilt.Stop ? "0" : tilt === JoystickTilt.Up ? "-50" : "50"}%)`;
      },
      ...ngDevMode ? [{ debugName: "thumb_transform" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  startPan(event) {
    const move_event = event instanceof MouseEvent ? "mousemove" : "touchmove";
    const end_event = event instanceof MouseEvent ? "mouseup" : "touchend";
    this._box = this._panning_el().nativeElement.getBoundingClientRect();
    this.handlePan(event);
    this.subscription("on_move", this._renderer.listen("window", move_event, (e) => this.handlePan(e)));
    this.subscription("on_end", this._renderer.listen("window", end_event, (_) => {
      this.unsub("on_move");
      this.unsub("on_end");
      this.tilt.set(JoystickTilt.Stop);
      this.pan.set(JoystickPan.Stop);
      this.tiltChange.emit(this.tilt());
      this.panChange.emit(this.pan());
    }));
  }
  handlePan(event) {
    const point = eventToPoint(event);
    const box_point = {
      y: this._box.top + this._box.height / 2,
      x: this._box.left + this._box.width / 2
    };
    const angle = Math.atan2(point.y - box_point.y, point.x - box_point.x) * 180 / Math.PI;
    const { tilt: tiltInput, pan: panInput } = this;
    const tilt = tiltInput();
    const pan = panInput();
    this.tilt.set(angle >= 150 || angle <= -150 || angle > -30 && angle < 30 ? JoystickTilt.Stop : angle > 0 ? JoystickTilt.Down : JoystickTilt.Up);
    this.pan.set(angle >= 60 && angle <= 120 || angle <= -60 && angle >= -120 ? JoystickPan.Stop : angle > 90 || angle < -90 ? JoystickPan.Left : JoystickPan.Right);
    const tiltValue = this.tilt();
    if (tilt !== tiltValue)
      this.tiltChange.emit(tiltValue);
    const panValue = this.pan();
    if (pan !== panValue)
      this.panChange.emit(panValue);
  }
  stopPan() {
    this.tilt.set(JoystickTilt.Stop);
    this.pan.set(JoystickPan.Stop);
    this.tiltChange.emit(this.tilt());
    this.panChange.emit(this.pan());
  }
};
_JoystickComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275JoystickComponent_BaseFactory;
  return function JoystickComponent_Factory(__ngFactoryType__) {
    return (\u0275JoystickComponent_BaseFactory || (\u0275JoystickComponent_BaseFactory = \u0275\u0275getInheritedFactory(_JoystickComponent)))(__ngFactoryType__ || _JoystickComponent);
  };
})();
_JoystickComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JoystickComponent, selectors: [["joystick"]], viewQuery: function JoystickComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._panning_el, _c04, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { panInput: [1, "pan", "panInput"], tiltInput: [1, "tilt", "tiltInput"] }, outputs: { panChange: "panChange", tiltChange: "tiltChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 2, consts: [["panning_control", ""], ["joystick", "", 1, "bg-base-300", "relative", "h-48", "w-48", "rounded-full", "text-white", 3, "mousedown", "touchstart", "contextmenu", "click"], [1, "absolute", "inset-0", "flex", "items-center", "text-5xl"], [2, "transform", "translateX(-.5rem)"], [1, "absolute", "inset-0", "flex", "items-center", "justify-end", "text-5xl"], [2, "transform", "translateX(.5rem)"], [1, "absolute", "inset-0", "flex", "justify-center", "text-5xl"], [2, "transform", "translateY(-.5rem)"], [1, "absolute", "inset-0", "flex", "items-end", "justify-center", "text-5xl"], [2, "transform", "translateY(.5rem)"], [1, "bg-base-100", "absolute", "top-12", "right-12", "bottom-12", "left-12", "flex", "items-center", "justify-center", "rounded-full"], ["thumb", "", 1, "bg-neutral", "h-12", "w-12", "rounded-full"]], template: function JoystickComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275listener("mousedown", function JoystickComponent_Template_div_mousedown_0_listener($event) {
      return ctx.startPan($event);
    })("touchstart", function JoystickComponent_Template_div_touchstart_0_listener($event) {
      return ctx.startPan($event);
    })("contextmenu", function JoystickComponent_Template_div_contextmenu_0_listener($event) {
      return $event.preventDefault();
    })("click", function JoystickComponent_Template_div_click_0_listener() {
      return ctx.stopPan();
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "icon", 3);
    \u0275\u0275text(4, " chevron_left ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "icon", 5);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "icon", 7);
    \u0275\u0275text(10, "expand_less");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "icon", 9);
    \u0275\u0275text(13, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275element(15, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275styleProp("transform", ctx.thumb_transform());
  }
}, dependencies: [IconComponent], encapsulation: 2 });
var JoystickComponent = _JoystickComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoystickComponent, [{
    type: Component,
    args: [{ selector: "joystick", template: `
        <div
            #panning_control
            joystick
            (mousedown)="startPan($event)"
            (touchstart)="startPan($event)"
            (contextmenu)="$event.preventDefault()"
            (click)="stopPan()"
            class="bg-base-300 relative h-48 w-48 rounded-full text-white"
        >
            <div class="absolute inset-0 flex items-center text-5xl">
                <icon style="transform: translateX(-.5rem)">
                    chevron_left
                </icon>
            </div>
            <div
                class="absolute inset-0 flex items-center justify-end text-5xl"
            >
                <icon style="transform: translateX(.5rem)">chevron_right</icon>
            </div>
            <div class="absolute inset-0 flex justify-center text-5xl">
                <icon style="transform: translateY(-.5rem)">expand_less</icon>
            </div>
            <div
                class="absolute inset-0 flex items-end justify-center text-5xl"
            >
                <icon style="transform: translateY(.5rem)">expand_more</icon>
            </div>
            <div
                class="bg-base-100 absolute top-12 right-12 bottom-12 left-12 flex items-center justify-center rounded-full"
            >
                <div
                    thumb
                    [style.transform]="thumb_transform()"
                    class="bg-neutral h-12 w-12 rounded-full"
                ></div>
            </div>
        </div>
    `, imports: [IconComponent] }]
  }], null, { panInput: [{ type: Input, args: [{ isSignal: true, alias: "pan", required: false }] }], tiltInput: [{ type: Input, args: [{ isSignal: true, alias: "tilt", required: false }] }], panChange: [{ type: Output, args: ["panChange"] }], tiltChange: [{ type: Output, args: ["tiltChange"] }], _panning_el: [{ type: ViewChild, args: ["panning_control", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JoystickComponent, { className: "JoystickComponent", filePath: "apps/control/src/app/ui/joystick.component.ts", lineNumber: 87 });
})();

// apps/control/src/app/ui/camera-tooltip.component.ts
function CameraTooltipComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cam_r3 = ctx.$implicit;
    \u0275\u0275property("value", cam_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cam_r3.name, " ");
  }
}
function CameraTooltipComponent_Conditional_0_Conditional_11_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CameraTooltipComponent_Conditional_0_Conditional_11_For_1_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const name_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePreset(name_r5));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CameraTooltipComponent_Conditional_0_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275listener("click", function CameraTooltipComponent_Conditional_0_Conditional_11_For_1_Template_button_click_1_listener() {
      const name_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.recallPreset(name_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CameraTooltipComponent_Conditional_0_Conditional_11_For_1_Conditional_3_Template, 3, 0, "button", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r1.preset !== name_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", name_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.presets().length > 1 ? 3 : -1);
  }
}
function CameraTooltipComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CameraTooltipComponent_Conditional_0_Conditional_11_For_1_Template, 4, 4, "div", 25, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.presets());
  }
}
function CameraTooltipComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.CAMERA_PRESETS_EMPTY"), " ");
  }
}
function CameraTooltipComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONTROL.CAMERA_SELECT_MSG"), " ");
  }
}
function CameraTooltipComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-form-field", 4)(2, "mat-select", 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function CameraTooltipComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCamera($event));
    });
    \u0275\u0275repeaterCreate(4, CameraTooltipComponent_Conditional_0_For_5_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "h3", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, CameraTooltipComponent_Conditional_0_Conditional_11_Template, 2, 0)(12, CameraTooltipComponent_Conditional_0_Conditional_12_Template, 3, 3, "p", 10);
    \u0275\u0275elementStart(13, "button", 11)(14, "icon");
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 0)(18, "div", 12)(19, "mat-form-field", 13);
    \u0275\u0275listener("click", function CameraTooltipComponent_Conditional_0_Template_mat_form_field_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(20, "input", 14);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("ngModelChange", function CameraTooltipComponent_Conditional_0_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.new_preset.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function CameraTooltipComponent_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.addPreset(ctx_r1.new_preset());
      return \u0275\u0275resetView(ctx_r1.new_preset.set(""));
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 16)(26, "h3", 17);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18);
    \u0275\u0275listener("mouseup", function CameraTooltipComponent_Conditional_0_Template_div_mouseup_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopZoom());
    }, \u0275\u0275resolveWindow)("touchend", function CameraTooltipComponent_Conditional_0_Template_div_touchend_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopZoom());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(30, "joystick", 19);
    \u0275\u0275twoWayListener("panChange", function CameraTooltipComponent_Conditional_0_Template_joystick_panChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pan, $event) || (ctx_r1.pan = $event);
      return \u0275\u0275resetView($event);
    })("tiltChange", function CameraTooltipComponent_Conditional_0_Template_joystick_tiltChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tilt, $event) || (ctx_r1.tilt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("panChange", function CameraTooltipComponent_Conditional_0_Template_joystick_panChange_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveCamera());
    })("tiltChange", function CameraTooltipComponent_Conditional_0_Template_joystick_tiltChange_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveCamera());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 20)(32, "button", 21);
    \u0275\u0275listener("mousedown", function CameraTooltipComponent_Conditional_0_Template_button_mousedown_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("in", $event));
    })("touchstart", function CameraTooltipComponent_Conditional_0_Template_button_touchstart_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("in", $event));
    })("contextmenu", function CameraTooltipComponent_Conditional_0_Template_button_contextmenu_32_listener($event) {
      return $event.preventDefault();
    })("click", function CameraTooltipComponent_Conditional_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopZoom());
    });
    \u0275\u0275elementStart(33, "icon");
    \u0275\u0275text(34, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 22);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 23);
    \u0275\u0275listener("mousedown", function CameraTooltipComponent_Conditional_0_Template_button_mousedown_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("out", $event));
    })("touchstart", function CameraTooltipComponent_Conditional_0_Template_button_touchstart_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("out", $event));
    })("contextmenu", function CameraTooltipComponent_Conditional_0_Template_button_contextmenu_38_listener($event) {
      return $event.preventDefault();
    })("click", function CameraTooltipComponent_Conditional_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopZoom());
    });
    \u0275\u0275elementStart(39, "icon");
    \u0275\u0275text(40, "remove");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(41, CameraTooltipComponent_Conditional_0_Conditional_41_Template, 4, 3, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.active_camera())("placeholder", \u0275\u0275pipeBind1(3, 14, "APP.CONTROL.CAMERA_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.camera_list());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, "APP.CONTROL.CAMERA_PRESETS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.presets().length ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.new_preset())("placeholder", \u0275\u0275pipeBind1(21, 18, "APP.CONTROL.CAMERA_PRESETS_NEW"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.new_preset());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 20, "APP.CONTROL.CAMERA_PRESETS_SAVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, "APP.CONTROL.CONTROLS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("pan", ctx_r1.pan)("tilt", ctx_r1.tilt);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 24, "APP.CONTROL.ZOOM"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.active_camera() ? 41 : -1);
  }
}
function CameraTooltipComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.CAMERAS_EMPTY"));
  }
}
function CameraTooltipComponent_Conditional_2_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "i", 29);
    \u0275\u0275listener("modelChange", function CameraTooltipComponent_Conditional_2_Template_i_modelChange_1_listener($event) {
      var _a2, _b2;
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.presets.set(((_a2 = ctx_r1.active_camera()) == null ? void 0 : _a2.index) ? ($event || [])[(_b2 = ctx_r1.active_camera()) == null ? void 0 : _b2.index] : $event || []));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_a = ctx_r1.active_camera()) == null ? void 0 : _a.mod)("bind", ((_b = ctx_r1.active_camera()) == null ? void 0 : _b.index) ? "camera_presets" : "presets");
  }
}
var ZoomDirection;
(function(ZoomDirection2) {
  ZoomDirection2["In"] = "in";
  ZoomDirection2["Out"] = "out";
  ZoomDirection2["Stop"] = "stop";
})(ZoomDirection || (ZoomDirection = {}));
var _CameraTooltipComponent = class _CameraTooltipComponent {
  get id() {
    return this._state.id;
  }
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.active_camera = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "active_camera" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.presets = signal(
      [],
      ...ngDevMode ? [{ debugName: "presets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preset = "";
    this.zoom = ZoomDirection.Stop;
    this.pan = JoystickPan.Stop;
    this.tilt = JoystickTilt.Stop;
    this.new_preset = signal(
      "",
      ...ngDevMode ? [{ debugName: "new_preset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.camera_list = this._state.available_cameras;
    this._selected_camera = this._state.selected_camera;
    this.close = () => this._tooltip.close();
    effect(() => {
      const l = this.camera_list();
      const cam = this._selected_camera();
      this.active_camera.set(l == null ? void 0 : l.find((_) => _.id === cam));
    });
  }
  selectCamera(camera) {
    this.active_camera.set(camera);
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("selected_camera", [camera.id]);
  }
  recallPreset(preset) {
    const camera = this.active_camera();
    if (!(camera == null ? void 0 : camera.mod))
      return;
    const mod = zd(this.id, camera.mod);
    if (!mod)
      return;
    mod.execute("recall", [preset]);
  }
  addPreset(preset) {
    const camera = this.active_camera();
    if (!camera)
      return;
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("add_preset", [preset, camera.id]);
  }
  removePreset(preset) {
    const camera = this.active_camera();
    if (!camera)
      return;
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("remove_preset", [preset, camera.id]);
  }
  moveCamera() {
    const camera = this.active_camera();
    if (!camera)
      return;
    clearTimeout(this._move_timeout);
    this._move_timeout = setTimeout(async () => {
      const { index } = camera;
      const mod = zd(this.id, camera.mod);
      if (!mod)
        return;
      if (this.tilt !== JoystickTilt.Stop) {
        await mod.execute("tilt", index ? [this.tilt, index] : [this.tilt]);
      }
      if (this.pan !== JoystickPan.Stop) {
        await mod.execute("pan", index ? [this.pan, index] : [this.pan]);
      }
      if (this.tilt === JoystickTilt.Stop && this.pan === JoystickPan.Stop) {
        await mod.execute("stop", index ? [index] : []);
      }
    }, 50);
  }
  async startZoom(dir, e) {
    const camera = this.active_camera();
    if (!(camera == null ? void 0 : camera.mod))
      return;
    const mod = zd(this.id, camera.mod);
    if (!mod)
      return;
    this.zoom = dir === "in" ? ZoomDirection.In : ZoomDirection.Out;
    const { index } = camera;
    await mod.execute("zoom", index ? [this.zoom, index] : [this.zoom]).catch();
  }
  stopZoom() {
    clearTimeout(this._stop_zoom_timeout);
    this._stop_zoom_timeout = setTimeout(() => {
      if (this.zoom === ZoomDirection.Stop)
        return;
      const camera = this.active_camera();
      if (!(camera == null ? void 0 : camera.mod))
        return;
      const mod = zd(this.id, camera.mod);
      if (!mod)
        return;
      const { index } = camera;
      this.zoom = ZoomDirection.Stop;
      mod.execute("zoom", index ? [this.zoom, index] : [this.zoom]);
    }, 50);
  }
};
_CameraTooltipComponent.\u0275fac = function CameraTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CameraTooltipComponent)();
};
_CameraTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CameraTooltipComponent, selectors: [["camera-tooltip"]], decls: 3, vars: 2, consts: [["menu", "matMenu"], [1, "bg-base-100", "my-2", "flex", "flex-col", "rounded-sm", "shadow-sm"], [1, "bg-base-100", "my-2", "flex", "flex-col", "rounded-sm", "p-8", "text-center", "shadow-sm"], ["hidden", ""], ["appearance", "outline", 1, "no-subscript", "m-2"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "border-base-200", "relative", "mt-1", "flex", "flex-col", "border-t", "sm:flex-row"], [1, "border-base-200", "relative", "flex", "flex-col", "items-center", "space-y-2", "border-b", "p-4", "sm:border-r", "sm:border-b-0"], [1, "mb-2", "w-full", "pr-12", "text-xl", "font-medium"], [1, "bg-base-300", "w-full", "rounded-sm", "p-8", "opacity-30"], ["icon", "", "matRipple", "", 1, "absolute", "top-1", "right-4", 3, "matMenuTriggerFor"], [1, "flex", "w-full", "flex-col", "px-2"], ["appearance", "outline", 1, "h-14", "w-full", 3, "click"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "p-4"], [1, "mb-2", "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2", 3, "mouseup", "touchend"], [3, "panChange", "tiltChange", "pan", "tilt"], ["zoom", "", 1, "border-base-200", "flex", "flex-col", "items-center", "rounded-sm", "border"], ["zoom-in", "", "icon", "", "matRipple", "", 1, "rounded-sm", 3, "mousedown", "touchstart", "contextmenu", "click"], [1, "border-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "border-t", "border-b", "text-xs"], ["zoom-out", "", "icon", "", "matRipple", "", 1, "rounded-sm", 3, "mousedown", "touchstart", "contextmenu", "click"], [1, "bg-base-100", "bg-opacity-75", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "flex", "items-center", "space-x-2"], ["preset", "", "btn", "", "matRipple", "", 1, "w-48", 3, "click"], ["icon", "", "matRipple", "", 1, "border-error", "bg-base-100", "text-error", "h-12", "w-12", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "border-error", "bg-base-100", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["binding", "", 3, "modelChange", "sys", "mod", "bind"]], template: function CameraTooltipComponent_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CameraTooltipComponent_Conditional_0_Template, 42, 26, "div", 1)(1, CameraTooltipComponent_Conditional_1_Template, 4, 3, "div", 2);
    \u0275\u0275conditionalCreate(2, CameraTooltipComponent_Conditional_2_Template, 2, 3, "div", 3);
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.camera_list()) == null ? void 0 : _a.length) ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_b = ctx.active_camera()) == null ? void 0 : _b.mod) ? 2 : -1);
  }
}, dependencies: [
  BindingDirective,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  IconComponent,
  JoystickComponent,
  MatMenuModule,
  MatMenu,
  MatMenuTrigger,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  TranslatePipe
], encapsulation: 2 });
var CameraTooltipComponent = _CameraTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CameraTooltipComponent, [{
    type: Component,
    args: [{ selector: "camera-tooltip", template: `
        @if (camera_list()?.length) {
            <div class="bg-base-100 my-2 flex flex-col rounded-sm shadow-sm">
                <mat-form-field appearance="outline" class="no-subscript m-2">
                    <mat-select
                        [ngModel]="active_camera()"
                        (ngModelChange)="selectCamera($event)"
                        [placeholder]="'APP.CONTROL.CAMERA_SELECT' | translate"
                    >
                        @for (cam of camera_list(); track cam) {
                            <mat-option [value]="cam">
                                {{ cam.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <div
                    class="border-base-200 relative mt-1 flex flex-col border-t sm:flex-row"
                >
                    <div
                        class="border-base-200 relative flex flex-col items-center space-y-2 border-b p-4 sm:border-r sm:border-b-0"
                    >
                        <h3 class="mb-2 w-full pr-12 text-xl font-medium">
                            {{ 'APP.CONTROL.CAMERA_PRESETS' | translate }}
                        </h3>
                        @if (presets().length) {
                            @for (name of presets(); track name) {
                                <div class="flex items-center space-x-2">
                                    <button
                                        preset
                                        btn
                                        matRipple
                                        class="w-48"
                                        [class.inverse]="preset !== name"
                                        (click)="recallPreset(name)"
                                    >
                                        {{ name }}
                                    </button>
                                    @if (presets().length > 1) {
                                        <button
                                            icon
                                            matRipple
                                            class="border-error bg-base-100 text-error h-12 w-12 rounded-sm border"
                                            (click)="removePreset(name)"
                                        >
                                            <icon>delete</icon>
                                        </button>
                                    }
                                </div>
                            }
                        } @else {
                            <p
                                class="bg-base-300 w-full rounded-sm p-8 opacity-30"
                            >
                                {{
                                    'APP.CONTROL.CAMERA_PRESETS_EMPTY'
                                        | translate
                                }}
                            </p>
                        }
                        <button
                            icon
                            matRipple
                            class="absolute top-1 right-4"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>add</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <div class="flex w-full flex-col px-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="h-14 w-full"
                                    (click)="$event.stopPropagation()"
                                >
                                    <input
                                        matInput
                                        [ngModel]="new_preset()"
                                        (ngModelChange)="new_preset.set($event)"
                                        [placeholder]="
                                            'APP.CONTROL.CAMERA_PRESETS_NEW'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    [disabled]="!new_preset()"
                                    class="w-full"
                                    (click)="
                                        addPreset(new_preset());
                                        new_preset.set('')
                                    "
                                >
                                    {{
                                        'APP.CONTROL.CAMERA_PRESETS_SAVE'
                                            | translate
                                    }}
                                </button>
                            </div>
                        </mat-menu>
                    </div>
                    <div class="p-4">
                        <h3 class="mb-2 text-xl font-medium">
                            {{ 'APP.CONTROL.CONTROLS' | translate }}
                        </h3>
                        <div
                            class="flex items-center space-x-2"
                            (window:mouseup)="stopZoom()"
                            (window:touchend)="stopZoom()"
                        >
                            <joystick
                                [(pan)]="pan"
                                [(tilt)]="tilt"
                                (panChange)="moveCamera()"
                                (tiltChange)="moveCamera()"
                            ></joystick>
                            <div
                                zoom
                                class="border-base-200 flex flex-col items-center rounded-sm border"
                            >
                                <button
                                    zoom-in
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (mousedown)="startZoom('in', $event)"
                                    (touchstart)="startZoom('in', $event)"
                                    (contextmenu)="$event.preventDefault()"
                                    (click)="stopZoom()"
                                >
                                    <icon>add</icon>
                                </button>
                                <div
                                    class="border-base-200 flex h-10 w-10 items-center justify-center border-t border-b text-xs"
                                >
                                    {{ 'APP.CONTROL.ZOOM' | translate }}
                                </div>
                                <button
                                    zoom-out
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (mousedown)="startZoom('out', $event)"
                                    (touchstart)="startZoom('out', $event)"
                                    (contextmenu)="$event.preventDefault()"
                                    (click)="stopZoom()"
                                >
                                    <icon>remove</icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    @if (!active_camera()) {
                        <div
                            class="bg-base-100 bg-opacity-75 absolute inset-0 flex items-center justify-center"
                        >
                            <p>
                                {{
                                    'APP.CONTROL.CAMERA_SELECT_MSG' | translate
                                }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="bg-base-100 my-2 flex flex-col rounded-sm p-8 text-center shadow-sm"
            >
                <p>{{ 'APP.CONTROL.CAMERAS_EMPTY' | translate }}</p>
            </div>
        }
        @if (active_camera()?.mod) {
            <div hidden>
                <i
                    binding
                    (modelChange)="
                        presets.set(
                            active_camera()?.index
                                ? ($event || [])[active_camera()?.index]
                                : $event || []
                        )
                    "
                    [sys]="id"
                    [mod]="active_camera()?.mod"
                    [bind]="
                        active_camera()?.index ? 'camera_presets' : 'presets'
                    "
                ></i>
            </div>
        }
    `, imports: [
      BindingDirective,
      FormsModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      JoystickComponent,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CameraTooltipComponent, { className: "CameraTooltipComponent", filePath: "apps/control/src/app/ui/camera-tooltip.component.ts", lineNumber: 238 });
})();

// apps/control/src/app/ui/join-room-tooltip.component.ts
function JoinRoomTooltipComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function JoinRoomTooltipComponent_For_5_Template_button_click_0_listener() {
      const mode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.join(mode_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("inverse", mode_r2.id !== ctx_r2.active());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r2.name, " ");
  }
}
var _JoinRoomTooltipComponent = class _JoinRoomTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._join_modes = this._state.join_modes;
    this.modes = computed(
      () => {
        const mapping = this._join_modes();
        const list = [];
        for (const id in mapping) {
          list.push(__spreadProps(__spreadValues({}, mapping[id]), {
            id
          }));
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "modes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = this._state.joined_id;
    this.join = (id) => this._state.join(id);
  }
};
_JoinRoomTooltipComponent.\u0275fac = function JoinRoomTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JoinRoomTooltipComponent)();
};
_JoinRoomTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JoinRoomTooltipComponent, selectors: [["join-room-tooltip"]], decls: 6, vars: 3, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-2", "shadow-sm"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-2", "text-xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-64", 3, "inverse"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"]], template: function JoinRoomTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, JoinRoomTooltipComponent_For_5_Template, 2, 3, "button", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONTROL.ACTION_JOIN_ROOMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.modes());
  }
}, dependencies: [MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
var JoinRoomTooltipComponent = _JoinRoomTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoinRoomTooltipComponent, [{
    type: Component,
    args: [{ selector: "join-room-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-2 shadow-sm"
        >
            <h3
                class="bg-base-200 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_JOIN_ROOMS' | translate }}
            </h3>
            @for (mode of modes(); track mode) {
                <button
                    btn
                    matRipple
                    (click)="join(mode.id)"
                    [class.inverse]="mode.id !== active()"
                    class="w-64"
                >
                    {{ mode.name }}
                </button>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JoinRoomTooltipComponent, { className: "JoinRoomTooltipComponent", filePath: "apps/control/src/app/ui/join-room-tooltip.component.ts", lineNumber: 33 });
})();

// apps/control/src/app/ui/lighting-levels-tooltip.component.ts
var _forTrack0 = ($index, $item) => $item.binding;
function LightingLevelsTooltipComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i", 5);
    \u0275\u0275twoWayListener("modelChange", function LightingLevelsTooltipComponent_Conditional_4_For_1_Template_i_modelChange_3_listener($event) {
      const light_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(light_r2.value, $event) || (light_r2.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-slider", 6)(5, "input", 7);
    \u0275\u0275listener("ngModelChange", function LightingLevelsTooltipComponent_Conditional_4_For_1_Template_input_ngModelChange_5_listener($event) {
      const light_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setLevel(light_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const light_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", light_r2 == null ? void 0 : light_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", light_r2.value);
    \u0275\u0275property("sys", ctx_r2.id)("bind", light_r2 == null ? void 0 : light_r2.binding);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", light_r2 == null ? void 0 : light_r2.value);
    \u0275\u0275control();
  }
}
function LightingLevelsTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LightingLevelsTooltipComponent_Conditional_4_For_1_Template, 6, 5, "div", 3, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.lights());
  }
}
function LightingLevelsTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.LIGHTING_EMPTY"));
  }
}
var _LightingLevelsTooltipComponent = class _LightingLevelsTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.system = this._state.system_id;
    this.lights = this._state.lighting_levels;
    this.close = () => this._tooltip.close();
  }
  get id() {
    return this._state.id;
  }
  setLevel(level, value) {
    clearTimeout(this._level_timeout);
    this._level_timeout = setTimeout(async () => {
      const sys_id = this.system();
      if (!sys_id)
        return;
      const mod = zd(sys_id, "Lighting");
      if (!mod)
        return;
      await mod.execute("set_lighting_level", [value, level == null ? void 0 : level.area]);
    }, 50);
  }
};
_LightingLevelsTooltipComponent.\u0275fac = function LightingLevelsTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LightingLevelsTooltipComponent)();
};
_LightingLevelsTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LightingLevelsTooltipComponent, selectors: [["lighting-tooltip"]], decls: 6, vars: 4, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-4", "rounded-sm", "p-2", "shadow-sm"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-2", "text-xl", "font-medium"], [1, "flex", "items-center", "justify-center", "p-8"], [1, "border-base-300", "relative", "min-w-[20rem]", "rounded-sm", "border", "px-4"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "text-sm", "font-medium"], ["binding", "", "mod", "Lighting", 1, "hidden", 3, "modelChange", "model", "sys", "bind"], [1, "mt-2", "w-[calc(100%-1rem)]"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"]], template: function LightingLevelsTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LightingLevelsTooltipComponent_Conditional_4_Template, 2, 0)(5, LightingLevelsTooltipComponent_Conditional_5_Template, 4, 3, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONTROL.LIGHTING_LEVELS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.lights().length > 0 ? 4 : 5);
  }
}, dependencies: [MatSliderModule, MatSlider, MatSliderThumb, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, BindingDirective, TranslatePipe], encapsulation: 2 });
var LightingLevelsTooltipComponent = _LightingLevelsTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightingLevelsTooltipComponent, [{
    type: Component,
    args: [{ selector: "lighting-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-4 rounded-sm p-2 shadow-sm"
        >
            <h3
                class="bg-base-200 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.LIGHTING_LEVELS' | translate }}
            </h3>
            @if (lights().length > 0) {
                @for (light of lights(); track light.binding) {
                    <div
                        class="border-base-300 relative min-w-[20rem] rounded-sm border px-4"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 rounded-sm px-2 py-1 text-sm font-medium"
                        >
                            {{ light?.name }}
                        </div>
                        <i
                            class="hidden"
                            binding
                            [(model)]="light.value"
                            [sys]="id"
                            mod="Lighting"
                            [bind]="light?.binding"
                        ></i>
                        <mat-slider class="mt-2 w-[calc(100%-1rem)]">
                            <input
                                matSliderThumb
                                [ngModel]="light?.value"
                                (ngModelChange)="setLevel(light, $event)"
                            />
                        </mat-slider>
                    </div>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.LIGHTING_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [TranslatePipe, MatSliderModule, FormsModule, BindingDirective] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LightingLevelsTooltipComponent, { className: "LightingLevelsTooltipComponent", filePath: "apps/control/src/app/ui/lighting-levels-tooltip.component.ts", lineNumber: 61 });
})();

// apps/control/src/app/ui/lighting-scene-tooltip.component.ts
function LightingSceneTooltipComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function LightingSceneTooltipComponent_Conditional_4_For_1_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setScene(item_r2.name));
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inverse", ctx_r2.scene() !== item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("opacity", item_r2.opacity || 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
function LightingSceneTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LightingSceneTooltipComponent_Conditional_4_For_1_Template, 6, 6, "button", 3, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.scenes());
  }
}
function LightingSceneTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.LIGHT_SCENES_EMPTY"));
  }
}
var _LightingSceneTooltipComponent = class _LightingSceneTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.scene = this._state.lighting_scene;
    this.scenes = this._state.lighting_scenes;
    this.close = () => this._tooltip.close();
  }
  get id() {
    return this._state.id;
  }
  setScene(name) {
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("select_lighting_scene", [name]);
  }
};
_LightingSceneTooltipComponent.\u0275fac = function LightingSceneTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LightingSceneTooltipComponent)();
};
_LightingSceneTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LightingSceneTooltipComponent, selectors: [["lighting-tooltip"]], decls: 6, vars: 4, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "px-2", "pt-2", "pb-4", "shadow-sm"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-2", "text-xl", "font-medium"], [1, "flex", "items-center", "justify-center", "p-8"], ["state", "", "btn", "", "matRipple", "", 1, "mx-2", "w-64", 3, "inverse"], ["state", "", "btn", "", "matRipple", "", 1, "mx-2", "w-64", 3, "click"], [1, "flex", "flex-1", "items-center", "space-x-4"], [1, "flex-1"]], template: function LightingSceneTooltipComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LightingSceneTooltipComponent_Conditional_4_Template, 2, 0)(5, LightingSceneTooltipComponent_Conditional_5_Template, 4, 3, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONTROL.ACTION_LIGHT_SCENES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_a = ctx.scenes()) == null ? void 0 : _a.length) ? 4 : 5);
  }
}, dependencies: [IconComponent, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
var LightingSceneTooltipComponent = _LightingSceneTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightingSceneTooltipComponent, [{
    type: Component,
    args: [{ selector: "lighting-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm px-2 pt-2 pb-4 shadow-sm"
        >
            <h3
                class="bg-base-200 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_LIGHT_SCENES' | translate }}
            </h3>
            @if (scenes()?.length) {
                @for (item of scenes(); track item) {
                    <button
                        state
                        btn
                        matRipple
                        class="mx-2 w-64"
                        [class.inverse]="scene() !== item.id"
                        (click)="setScene(item.name)"
                    >
                        <div class="flex flex-1 items-center space-x-4">
                            <icon [style.opacity]="item.opacity || 1">{{
                                item.icon
                            }}</icon>
                            <div class="flex-1">{{ item.name }}</div>
                        </div>
                    </button>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.LIGHT_SCENES_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [TranslatePipe, IconComponent, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LightingSceneTooltipComponent, { className: "LightingSceneTooltipComponent", filePath: "apps/control/src/app/ui/lighting-scene-tooltip.component.ts", lineNumber: 51 });
})();

// apps/control/src/app/ui/lighting-tooltip.component.ts
var _c05 = (a0, a1) => [a0, a1];
function LightingTooltipComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "i", 4);
    \u0275\u0275twoWayListener("modelChange", function LightingTooltipComponent_Conditional_1_Template_i_modelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.light, $event) || (ctx_r1.light = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx_r1.light);
    \u0275\u0275property("sys", ctx_r1.id)("bind", "lights/" + ctx_r1.lights()[0]);
  }
}
function LightingTooltipComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inverse", state_r3 === ctx_r1.light.state);
    \u0275\u0275property("sys", ctx_r1.id)("params", \u0275\u0275pureFunction2(5, _c05, ctx_r1.lights()[0], state_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", state_r3, " ");
  }
}
function LightingTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LightingTooltipComponent_Conditional_5_For_1_Template, 2, 8, "button", 5, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.light.states);
  }
}
function LightingTooltipComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.LIGHTING_EMPTY"));
  }
}
var _LightingTooltipComponent = class _LightingTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.lights = this._state.lights;
    this.close = () => this._tooltip.close();
  }
  get id() {
    return this._state.id;
  }
};
_LightingTooltipComponent.\u0275fac = function LightingTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LightingTooltipComponent)();
};
_LightingTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LightingTooltipComponent, selectors: [["lighting-tooltip"]], decls: 7, vars: 5, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-4", "shadow-sm"], ["hidden", ""], [1, "mb-2", "text-xl", "font-medium"], [1, "flex", "items-center", "justify-center", "p-8"], ["binding", "", "mod", "System", 3, "modelChange", "model", "sys", "bind"], ["state", "", "btn", "", "matRipple", "", "binding", "", "onEvent", "click", "mod", "System", "exec", "environment", 1, "w-64", 3, "inverse", "sys", "params"], ["state", "", "btn", "", "matRipple", "", "binding", "", "onEvent", "click", "mod", "System", "exec", "environment", 1, "w-64", 3, "sys", "params"]], template: function LightingTooltipComponent_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, LightingTooltipComponent_Conditional_1_Template, 2, 3, "div", 1);
    \u0275\u0275elementStart(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LightingTooltipComponent_Conditional_5_Template, 2, 0)(6, LightingTooltipComponent_Conditional_6_Template, 4, 3, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.lights()[0] ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.CONTROL.LIGHTING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_b = (_a = ctx.light) == null ? void 0 : _a.states) == null ? void 0 : _b.length) ? 5 : 6);
  }
}, dependencies: [BindingDirective, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
var LightingTooltipComponent = _LightingTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightingTooltipComponent, [{
    type: Component,
    args: [{ selector: "lighting-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-4 shadow-sm"
        >
            @if (lights()[0]) {
                <div hidden>
                    <i
                        binding
                        [(model)]="light"
                        [sys]="id"
                        mod="System"
                        [bind]="'lights/' + lights()[0]"
                    ></i>
                </div>
            }
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.LIGHTING' | translate }}
            </h3>
            @if (light?.states?.length) {
                @for (state of light.states; track state) {
                    <button
                        state
                        btn
                        matRipple
                        class="w-64"
                        [class.inverse]="state === light.state"
                        binding
                        onEvent="click"
                        [sys]="id"
                        mod="System"
                        exec="environment"
                        [params]="[lights()[0], state]"
                    >
                        {{ state }}
                    </button>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.LIGHTING_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [BindingDirective, TranslatePipe, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LightingTooltipComponent, { className: "LightingTooltipComponent", filePath: "apps/control/src/app/ui/lighting-tooltip.component.ts", lineNumber: 62 });
})();

// apps/control/src/app/ui/microphone-tooltip.component.ts
var _c06 = (a0, a1) => [a0, a1];
var _forTrack02 = ($index, $item) => $item.name;
function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "i", 11);
    \u0275\u0275twoWayListener("modelChange", function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_For_2_Template_i_modelChange_1_listener($event) {
      const room_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(room_r3.state, $event) || (room_r3.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "settings-toggle", 12);
    \u0275\u0275listener("ngModelChange", function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_For_2_Template_settings_toggle_ngModelChange_2_listener($event) {
      const room_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const mic_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.setRoomMute(mic_r4.name, room_r3.name, !$event));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const room_r3 = ctx.$implicit;
    const mic_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r4.module_id || mic_r4.mod)("bind", mic_r4.binding);
    \u0275\u0275twoWayProperty("model", room_r3.state);
    \u0275\u0275advance();
    \u0275\u0275property("toggle", true)("ngModel", room_r3.state !== mic_r4.falsy_value);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r3.name, " ");
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_For_2_Template, 4, 7, null, null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mic_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(mic_r4.rooms);
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "i", 13);
    \u0275\u0275twoWayListener("modelChange", function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_10_Template_i_modelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const mic_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.volume[mic_r4.id], $event) || (ctx_r4.volume[mic_r4.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "i", 14);
    \u0275\u0275twoWayListener("modelChange", function MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_10_Template_i_modelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const mic_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.mute[mic_r4.id], $event) || (ctx_r4.mute[mic_r4.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mic_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r4.mod)("ignore", ctx_r4.changing());
    \u0275\u0275twoWayProperty("model", ctx_r4.volume[mic_r4.id]);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r4.mod);
    \u0275\u0275twoWayProperty("model", ctx_r4.mute[mic_r4.id]);
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_Template, 3, 0, "div", 5);
    \u0275\u0275elementStart(4, "div", 6)(5, "button", 7);
    \u0275\u0275listener("click", function MicrophoneTooltipComponent_Conditional_4_For_1_Template_button_click_5_listener() {
      const mic_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.mute[mic_r4.id] = !ctx_r4.mute[mic_r4.id]);
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-slider", 8)(9, "input", 9);
    \u0275\u0275listener("ngModelChange", function MicrophoneTooltipComponent_Conditional_4_For_1_Template_input_ngModelChange_9_listener($event) {
      const mic_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.setVolume(mic_r4.id, $event);
      return \u0275\u0275resetView(ctx_r4.onChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_10_Template, 3, 7, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mic_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", mic_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(mic_r4.rooms ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("name", mic_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.mute[mic_r4.id] ? "volume_off" : ctx_r4.volume[mic_r4.id] > 0 ? "volume_up" : "volume_mute");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !ctx_r4.mute[mic_r4.id] ? ctx_r4.volume[mic_r4.id] : 0);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional((mic_r4 == null ? void 0 : mic_r4.mod) ? 10 : -1);
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "i", 11);
    \u0275\u0275twoWayListener("modelChange", function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_For_2_Template_i_modelChange_1_listener($event) {
      const room_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(room_r9.state, $event) || (room_r9.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "settings-toggle", 19);
    \u0275\u0275listener("ngModelChange", function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_For_2_Template_settings_toggle_ngModelChange_2_listener($event) {
      const room_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const mic_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.setRoomMute(mic_r10.name, room_r9.name, !$event));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const room_r9 = ctx.$implicit;
    const mic_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r10.module_id || mic_r10.mod)("bind", mic_r10.binding);
    \u0275\u0275twoWayProperty("model", room_r9.state);
    \u0275\u0275advance();
    \u0275\u0275property("toggle", true)("ngModel", room_r9.state !== mic_r10.falsy_value);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r9.name, " ");
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_For_2_Template, 4, 7, null, null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mic_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(mic_r10.rooms);
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "i", 20);
    \u0275\u0275twoWayListener("modelChange", function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_10_Template_i_modelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_43_r11 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.volume[\u0275$index_43_r11], $event) || (ctx_r4.volume[\u0275$index_43_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "i", 21);
    \u0275\u0275twoWayListener("modelChange", function MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_10_Template_i_modelChange_2_listener($event) {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_43_r11 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.mute[\u0275$index_43_r11], $event) || (ctx_r4.mute[\u0275$index_43_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const mic_r10 = ctx_r12.$implicit;
    const \u0275$index_43_r11 = ctx_r12.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r10.module_id)("bind", mic_r10.level_feedback)("ignore", ctx_r4.changing())("params", \u0275\u0275pureFunction2(11, _c06, mic_r10.level_id, ctx_r4.volume[\u0275$index_43_r11]));
    \u0275\u0275twoWayProperty("model", ctx_r4.volume[\u0275$index_43_r11]);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r10.module_id)("bind", mic_r10.mute_feedback)("params", \u0275\u0275pureFunction2(14, _c06, mic_r10.mute_id, ctx_r4.mute[\u0275$index_43_r11]));
    \u0275\u0275twoWayProperty("model", ctx_r4.mute[\u0275$index_43_r11]);
  }
}
function MicrophoneTooltipComponent_Conditional_4_For_3_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_Template, 3, 0, "div", 15);
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function MicrophoneTooltipComponent_Conditional_4_For_3_Template_button_click_5_listener() {
      const \u0275$index_43_r11 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.mute[\u0275$index_43_r11] = !ctx_r4.mute[\u0275$index_43_r11]);
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-slider", 18)(9, "input", 9);
    \u0275\u0275listener("ngModelChange", function MicrophoneTooltipComponent_Conditional_4_For_3_Template_input_ngModelChange_9_listener($event) {
      const \u0275$index_43_r11 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.setVolume(\u0275$index_43_r11, $event);
      return \u0275\u0275resetView(ctx_r4.onChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_10_Template, 3, 17, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mic_r10 = ctx.$implicit;
    const \u0275$index_43_r11 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", mic_r10.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(mic_r10.rooms ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("name", mic_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !((_a = mic_r10.mute_id) == null ? void 0 : _a.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.mute[\u0275$index_43_r11] ? "volume_off" : ctx_r4.volume[\u0275$index_43_r11] > 0 ? "volume_up" : "volume_mute");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !((_b = mic_r10.level_id) == null ? void 0 : _b.length))("min", mic_r10.min_level || 0)("max", mic_r10.max_level || 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !ctx_r4.mute[\u0275$index_43_r11] ? ctx_r4.volume[\u0275$index_43_r11] : 0);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(mic_r10.module_id ? 10 : -1);
  }
}
function MicrophoneTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MicrophoneTooltipComponent_Conditional_4_For_1_Template, 11, 6, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(2, MicrophoneTooltipComponent_Conditional_4_For_3_Template, 11, 10, "div", 3, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r4.mic_list());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.microphones());
  }
}
function MicrophoneTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.MICS_EMPTY"));
  }
}
var _MicrophoneTooltipComponent = class _MicrophoneTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.mic_list = computed(
      () => this._state.mic_list(),
      ...ngDevMode ? [{ debugName: "mic_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.microphones = this._state.microphones;
    this.volume = {};
    this.mute = {};
    this.close = () => this._tooltip.close();
    this.changing = signal(
      false,
      ...ngDevMode ? [{ debugName: "changing" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get id() {
    return this._state.id;
  }
  setRoomMute(mic_name, room_name, state) {
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("mic_room_selection", [mic_name, room_name, state]);
  }
  setVolume(idx, value) {
    this.volume[idx] = value;
    this.mute[idx] = false;
  }
  onChange() {
    this.changing.set(true);
    clearTimeout(this._change_timeout);
    this._change_timeout = setTimeout(() => this.changing.set(false), 1e3);
  }
};
_MicrophoneTooltipComponent.\u0275fac = function MicrophoneTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MicrophoneTooltipComponent)();
};
_MicrophoneTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MicrophoneTooltipComponent, selectors: [["microphone-tooltip"]], decls: 6, vars: 4, consts: [[1, "bg-base-100", "my-2", "flex", "max-h-[65vh]", "max-w-md", "flex-col", "items-center", "space-y-5", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "p-2", "shadow-sm"], [1, "bg-base-200", "sticky", "top-0", "z-20", "w-full", "rounded-sm", "px-4", "py-2", "text-xl", "font-medium"], [1, "flex", "items-center", "justify-center", "p-8"], [1, "border-base-300", "relative", "min-w-[20rem]", "rounded-sm", "border", "p-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "rounded-full", "rounded-sm", "px-2", "py-1", "text-sm", "font-medium"], [1, "flex", "flex-wrap"], [1, "mt-1", "flex", "w-64", "items-center", "space-x-2", "p-4"], ["mute", "", "icon", "", "matRipple", "", 3, "click"], [1, "flex-1"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], ["hidden", ""], ["binding", "", 3, "modelChange", "sys", "mod", "bind", "model"], [1, "m-1", "flex-1", 3, "ngModelChange", "toggle", "ngModel"], ["binding", "", "bind", "volume", "exec", "volume", 3, "modelChange", "sys", "mod", "ignore", "model"], ["binding", "", "bind", "mute", "exec", "mute", 3, "modelChange", "sys", "mod", "model"], [1, "mt-2", "flex", "flex-wrap"], [1, "mt-1", "flex", "min-w-64", "items-center", "space-x-2", "pr-4"], ["mute", "", "icon", "", "matRipple", "", 3, "click", "disabled"], [1, "flex-1", 3, "disabled", "min", "max"], [1, "m-1", "min-w-[40%]", "flex-1", 3, "ngModelChange", "toggle", "ngModel"], ["binding", "", "exec", "fader", 3, "modelChange", "sys", "mod", "bind", "ignore", "params", "model"], ["binding", "", "exec", "mute", 3, "modelChange", "sys", "mod", "bind", "params", "model"]], template: function MicrophoneTooltipComponent_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MicrophoneTooltipComponent_Conditional_4_Template, 4, 0)(5, MicrophoneTooltipComponent_Conditional_5_Template, 4, 3, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONTROL.ACTION_MICS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_a = ctx.mic_list()) == null ? void 0 : _a.length) || ((_b = ctx.microphones()) == null ? void 0 : _b.length) ? 4 : 5);
  }
}, dependencies: [
  BindingDirective,
  MatSliderModule,
  MatSlider,
  MatSliderThumb,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  SettingsToggleComponent,
  IconComponent,
  TranslatePipe
], encapsulation: 2 });
var MicrophoneTooltipComponent = _MicrophoneTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MicrophoneTooltipComponent, [{
    type: Component,
    args: [{ selector: "microphone-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex max-h-[65vh] max-w-md flex-col items-center space-y-5 overflow-x-hidden overflow-y-auto rounded-sm p-2 shadow-sm"
        >
            <h3
                class="bg-base-200 sticky top-0 z-20 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_MICS' | translate }}
            </h3>
            @if (mic_list()?.length || microphones()?.length) {
                @for (mic of mic_list(); track mic) {
                    <div
                        class="border-base-300 relative min-w-[20rem] rounded-sm border p-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 rounded-full rounded-sm px-2 py-1 text-sm font-medium"
                        >
                            {{ mic.name }}
                        </div>
                        @if (mic.rooms) {
                            <div class="flex flex-wrap">
                                @for (room of mic.rooms; track room.name) {
                                    <div hidden>
                                        <i
                                            binding
                                            [sys]="id"
                                            [mod]="mic.module_id || mic.mod"
                                            [bind]="mic.binding"
                                            [(model)]="room.state"
                                        ></i>
                                    </div>
                                    <settings-toggle
                                        class="m-1 flex-1"
                                        [toggle]="true"
                                        [ngModel]="
                                            room.state !== mic.falsy_value
                                        "
                                        (ngModelChange)="
                                            setRoomMute(
                                                mic.name,
                                                room.name,
                                                !$event
                                            )
                                        "
                                    >
                                        {{ room.name }}
                                    </settings-toggle>
                                }
                            </div>
                        }
                        <div
                            class="mt-1 flex w-64 items-center space-x-2 p-4"
                            [attr.name]="mic.id"
                        >
                            <button
                                mute
                                icon
                                matRipple
                                (click)="mute[mic.id] = !mute[mic.id]"
                            >
                                <icon>{{
                                    mute[mic.id]
                                        ? 'volume_off'
                                        : volume[mic.id] > 0
                                          ? 'volume_up'
                                          : 'volume_mute'
                                }}</icon>
                            </button>
                            <mat-slider class="flex-1">
                                <input
                                    matSliderThumb
                                    [ngModel]="
                                        !mute[mic.id] ? volume[mic.id] : 0
                                    "
                                    (ngModelChange)="
                                        setVolume(mic.id, $event); onChange()
                                    "
                                />
                            </mat-slider>
                        </div>
                        @if (mic?.mod) {
                            <div hidden>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.mod"
                                    bind="volume"
                                    exec="volume"
                                    [ignore]="changing()"
                                    [(model)]="volume[mic.id]"
                                ></i>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.mod"
                                    bind="mute"
                                    exec="mute"
                                    [(model)]="mute[mic.id]"
                                ></i>
                            </div>
                        }
                    </div>
                }
                @for (mic of microphones(); track mic; let i = $index) {
                    <div
                        class="border-base-300 relative min-w-[20rem] rounded-sm border p-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 rounded-full rounded-sm px-2 py-1 text-sm font-medium"
                        >
                            {{ mic.name }}
                        </div>
                        @if (mic.rooms) {
                            <div class="mt-2 flex flex-wrap">
                                @for (room of mic.rooms; track room.name) {
                                    <div hidden>
                                        <i
                                            binding
                                            [sys]="id"
                                            [mod]="mic.module_id || mic.mod"
                                            [bind]="mic.binding"
                                            [(model)]="room.state"
                                        ></i>
                                    </div>
                                    <settings-toggle
                                        class="m-1 min-w-[40%] flex-1"
                                        [toggle]="true"
                                        [ngModel]="
                                            room.state !== mic.falsy_value
                                        "
                                        (ngModelChange)="
                                            setRoomMute(
                                                mic.name,
                                                room.name,
                                                !$event
                                            )
                                        "
                                    >
                                        {{ room.name }}
                                    </settings-toggle>
                                }
                            </div>
                        }
                        <div
                            class="mt-1 flex min-w-64 items-center space-x-2 pr-4"
                            [attr.name]="mic.name"
                        >
                            <button
                                mute
                                icon
                                matRipple
                                [disabled]="!mic.mute_id?.length"
                                (click)="mute[i] = !mute[i]"
                            >
                                <icon>{{
                                    mute[i]
                                        ? 'volume_off'
                                        : volume[i] > 0
                                          ? 'volume_up'
                                          : 'volume_mute'
                                }}</icon>
                            </button>
                            <mat-slider
                                [disabled]="!mic.level_id?.length"
                                [min]="mic.min_level || 0"
                                [max]="mic.max_level || 100"
                                class="flex-1"
                            >
                                <input
                                    matSliderThumb
                                    [ngModel]="!mute[i] ? volume[i] : 0"
                                    (ngModelChange)="
                                        setVolume(i, $event); onChange()
                                    "
                            /></mat-slider>
                        </div>
                        @if (mic.module_id) {
                            <div hidden>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.module_id"
                                    [bind]="mic.level_feedback"
                                    exec="fader"
                                    [ignore]="changing()"
                                    [params]="[mic.level_id, volume[i]]"
                                    [(model)]="volume[i]"
                                ></i>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.module_id"
                                    [bind]="mic.mute_feedback"
                                    exec="mute"
                                    [params]="[mic.mute_id, mute[i]]"
                                    [(model)]="mute[i]"
                                ></i>
                            </div>
                        }
                    </div>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.MICS_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      TranslatePipe,
      BindingDirective,
      MatSliderModule,
      FormsModule,
      MatRippleModule,
      SettingsToggleComponent,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MicrophoneTooltipComponent, { className: "MicrophoneTooltipComponent", filePath: "apps/control/src/app/ui/microphone-tooltip.component.ts", lineNumber: 237 });
})();

// apps/control/src/app/ui/dialpad.component.ts
function DialpadComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function DialpadComponent_For_2_Template_button_click_0_listener() {
      const digit_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pressed.emit(digit_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", digit_r2, " ");
  }
}
function DialpadComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function DialpadComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pressed.emit("\b"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("absolute", !ctx_r2.inline())("bottom-0", !ctx_r2.inline())("-right-4", !ctx_r2.inline())("translate-x-full", !ctx_r2.inline());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "APP.CONTROL.BACKSPACE"), " ");
  }
}
var _DialpadComponent = class _DialpadComponent {
  constructor() {
    this.backspace = input(
      true,
      ...ngDevMode ? [{ debugName: "backspace" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inline = input(
      false,
      ...ngDevMode ? [{ debugName: "inline" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pressed = output();
    this.digits = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "*",
      "0",
      "#"
    ];
  }
};
_DialpadComponent.\u0275fac = function DialpadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DialpadComponent)();
};
_DialpadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialpadComponent, selectors: [["dialpad"]], inputs: { backspace: [1, "backspace"], inline: [1, "inline"] }, outputs: { pressed: "pressed" }, decls: 4, vars: 1, consts: [["dialpad", "", 1, "text-base-content!", "relative", "flex", "w-60", "flex-wrap", "items-center", "justify-center"], ["digit", "", "matRipple", "", 1, "bg-base-100", "relative", "m-2", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-lg", "active:top-1"], ["digit", "", "matRipple", "", 1, "bg-base-100", "m-2", "flex", "h-16", "w-60", "flex-1", "items-center", "justify-center", "rounded-lg", "active:-bottom-1", 3, "absolute", "bottom-0", "-right-4", "translate-x-full"], ["digit", "", "matRipple", "", 1, "bg-base-100", "relative", "m-2", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-lg", "active:top-1", 3, "click"], ["digit", "", "matRipple", "", 1, "bg-base-100", "m-2", "flex", "h-16", "w-60", "flex-1", "items-center", "justify-center", "rounded-lg", "active:-bottom-1", 3, "click"]], template: function DialpadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, DialpadComponent_For_2_Template, 2, 1, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, DialpadComponent_Conditional_3_Template, 3, 11, "button", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.digits);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.backspace() ? 3 : -1);
  }
}, dependencies: [MatRippleModule, MatRipple, TranslatePipe], styles: ["\n[digit][_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 0px 0px var(--%NS%base-300);\n  border: 2px solid var(--%NS%base-300);\n  transition:\n    top 200ms,\n    bottom 200ms,\n    box-shadow 200ms;\n}\n[digit][_ngcontent-%COMP%]:active {\n  box-shadow: none;\n}\n/*# sourceMappingURL=dialpad.component.css.map */"] });
var DialpadComponent = _DialpadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialpadComponent, [{
    type: Component,
    args: [{ selector: "dialpad", template: `
        <div
            dialpad
            class="text-base-content! relative flex w-60 flex-wrap items-center justify-center"
        >
            @for (digit of digits; track digit) {
                <button
                    digit
                    matRipple
                    class="bg-base-100 relative m-2 flex h-16 w-16 items-center justify-center rounded-lg active:top-1"
                    (click)="pressed.emit(digit)"
                >
                    {{ digit }}
                </button>
            }
            @if (backspace()) {
                <button
                    digit
                    matRipple
                    class="bg-base-100 m-2 flex h-16 w-60 flex-1 items-center justify-center rounded-lg active:-bottom-1"
                    [class.absolute]="!inline()"
                    [class.bottom-0]="!inline()"
                    [class.-right-4]="!inline()"
                    [class.translate-x-full]="!inline()"
                    (click)="pressed.emit('\b')"
                >
                    {{ 'APP.CONTROL.BACKSPACE' | translate }}
                </button>
            }
        </div>
    `, imports: [MatRippleModule, TranslatePipe], styles: ["/* angular:styles/component:css;65c7246e07d7ea0a30ce2bf10f7738a8a79d8555934b311bea6e2498a484c2e9;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/ui/dialpad.component.ts */\n[digit] {\n  box-shadow: 0px 4px 0px 0px var(--base-300);\n  border: 2px solid var(--base-300);\n  transition:\n    top 200ms,\n    bottom 200ms,\n    box-shadow 200ms;\n}\n[digit]:active {\n  box-shadow: none;\n}\n/*# sourceMappingURL=dialpad.component.css.map */\n"] }]
  }], null, { backspace: [{ type: Input, args: [{ isSignal: true, alias: "backspace", required: false }] }], inline: [{ type: Input, args: [{ isSignal: true, alias: "inline", required: false }] }], pressed: [{ type: Output, args: ["pressed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialpadComponent, { className: "DialpadComponent", filePath: "apps/control/src/app/ui/dialpad.component.ts", lineNumber: 56 });
})();

// apps/control/src/app/ui/phone-dialling-tooltip.component.ts
function PhoneDiallingTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function PhoneDiallingTooltipComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PhoneDiallingTooltipComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function PhoneDiallingTooltipComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialPhone());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.PHONE_DIAL"), " ");
  }
}
function PhoneDiallingTooltipComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function PhoneDiallingTooltipComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hangup());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.PHONE_HANGUP"), " ");
  }
}
var _PhoneDiallingTooltipComponent = class _PhoneDiallingTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this.phone = signal(
      "",
      ...ngDevMode ? [{ debugName: "phone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system = this._state.system;
    this.dialPhone = () => this.action("qsc_dial_makecall");
    this.hangup = () => this.action("qsc_dial_hangup");
    this.clear = () => this.action("qsc_dial_pad_clear");
  }
  get sys_id() {
    return this._state.id;
  }
  async handleInput(char) {
    const mod = zd(this._state.id, "System");
    await mod.execute("qsc_dial_pad", [char]);
  }
  async action(method) {
    const mod = zd(this._state.id, "System");
    await mod.execute(method);
  }
};
_PhoneDiallingTooltipComponent.\u0275fac = function PhoneDiallingTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneDiallingTooltipComponent)();
};
_PhoneDiallingTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PhoneDiallingTooltipComponent, selectors: [["phone-dialling-tooltip"]], decls: 8, vars: 8, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-4", "shadow-sm"], ["appearance", "outline", 1, "h-13", "w-full"], ["matInput", "", "readonly", "", 3, "ngModel", "placeholder"], ["icon", "", "matRipple", "", "matSuffix", ""], [3, "pressed", "inline"], ["btn", "", "matRipple", "", 1, "w-full"], ["btn", "", "matRipple", "", 1, "inverse", "w-full"], ["icon", "", "matRipple", "", "matSuffix", "", 3, "click"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", 3, "click"]], template: function PhoneDiallingTooltipComponent_Template(rf, ctx) {
  var _a, _b, _c, _d, _e, _f;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1);
    \u0275\u0275element(2, "input", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(4, PhoneDiallingTooltipComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dialpad", 4);
    \u0275\u0275listener("pressed", function PhoneDiallingTooltipComponent_Template_dialpad_pressed_5_listener($event) {
      return ctx.handleInput($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PhoneDiallingTooltipComponent_Conditional_6_Template, 3, 3, "button", 5);
    \u0275\u0275conditionalCreate(7, PhoneDiallingTooltipComponent_Conditional_7_Template, 3, 3, "button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (_a = ctx.system()) == null ? void 0 : _a.phone)("placeholder", \u0275\u0275pipeBind1(3, 6, "FORM.PHONE"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_b = ctx.system()) == null ? void 0 : _b.phone) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(((_c = ctx.system()) == null ? void 0 : _c.offhook) || ((_d = ctx.system()) == null ? void 0 : _d.ringing)) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((_e = ctx.system()) == null ? void 0 : _e.offhook) || ((_f = ctx.system()) == null ? void 0 : _f.ringing) ? 7 : -1);
  }
}, dependencies: [
  MatFormFieldModule,
  MatFormField,
  MatSuffix,
  MatInputModule,
  MatInput,
  MatRippleModule,
  MatRipple,
  IconComponent,
  DialpadComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TranslatePipe
], encapsulation: 2 });
var PhoneDiallingTooltipComponent = _PhoneDiallingTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneDiallingTooltipComponent, [{
    type: Component,
    args: [{ selector: "phone-dialling-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-4 shadow-sm"
        >
            <mat-form-field appearance="outline" class="h-13 w-full">
                <input
                    matInput
                    readonly
                    [ngModel]="system()?.phone"
                    [placeholder]="'FORM.PHONE' | translate"
                />
                @if (system()?.phone) {
                    <button icon matRipple matSuffix (click)="clear()">
                        <icon>close</icon>
                    </button>
                }
            </mat-form-field>
            <dialpad [inline]="true" (pressed)="handleInput($event)"></dialpad>
            @if (!(system()?.offhook || system()?.ringing)) {
                <button btn matRipple class="w-full" (click)="dialPhone()">
                    {{ 'APP.CONTROL.PHONE_DIAL' | translate }}
                </button>
            }
            @if (system()?.offhook || system()?.ringing) {
                <button btn matRipple class="inverse w-full" (click)="hangup()">
                    {{ 'APP.CONTROL.PHONE_HANGUP' | translate }}
                </button>
            }
        </div>
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      DialpadComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PhoneDiallingTooltipComponent, { className: "PhoneDiallingTooltipComponent", filePath: "apps/control/src/app/ui/phone-dialling-tooltip.component.ts", lineNumber: 54 });
})();

// apps/control/src/app/ui/power-tooltip.component.ts
var _PowerTooltipComponent = class _PowerTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.shutdown = (t = false) => this._state.powerOff(t);
    this.close = () => this._tooltip.close();
    this.joined = this._state.joined;
  }
};
_PowerTooltipComponent.\u0275fac = function PowerTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PowerTooltipComponent)();
};
_PowerTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PowerTooltipComponent, selectors: [["power-tooltip"]], decls: 10, vars: 11, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-4", "shadow-sm"], [1, "mb-2", "text-center", "font-medium", 3, "innerHTML"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", "w-64", 3, "click"]], template: function PowerTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "h3", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "sanitize");
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function PowerTooltipComponent_Template_button_click_4_listener() {
      return ctx.shutdown(true);
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function PowerTooltipComponent_Template_button_click_7_listener() {
      return ctx.close();
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind1(2, 3, "APP.CONTROL.POWER_MSG")), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "APP.CONTROL.POWER_CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "APP.CONTROL.POWER_CANCEL"), " ");
  }
}, dependencies: [MatRippleModule, MatRipple, TranslatePipe, SanitizePipe], encapsulation: 2 });
var PowerTooltipComponent = _PowerTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerTooltipComponent, [{
    type: Component,
    args: [{ selector: "power-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-4 shadow-sm"
        >
            <h3
                class="mb-2 text-center font-medium"
                [innerHTML]="'APP.CONTROL.POWER_MSG' | translate | sanitize"
            ></h3>
            <button btn matRipple class="w-64" (click)="shutdown(true)">
                {{ 'APP.CONTROL.POWER_CONFIRM' | translate }}
            </button>
            <button btn matRipple class="inverse w-64" (click)="close()">
                {{ 'APP.CONTROL.POWER_CANCEL' | translate }}
            </button>
        </div>
    `, imports: [TranslatePipe, SanitizePipe, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PowerTooltipComponent, { className: "PowerTooltipComponent", filePath: "apps/control/src/app/ui/power-tooltip.component.ts", lineNumber: 32 });
})();

// apps/control/src/app/ui/room-accessory-tooltip.component.ts
function RoomAccessoryTooltipComponent_Conditional_4_For_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function RoomAccessoryTooltipComponent_Conditional_4_For_1_For_4_Template_button_click_0_listener() {
      const ctrl_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.performAction(item_r3.name, ctrl_r2.name));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctrl_r2 = ctx.$implicit;
    \u0275\u0275property("matTooltip", ctrl_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctrl_r2.icon);
  }
}
function RoomAccessoryTooltipComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RoomAccessoryTooltipComponent_Conditional_4_For_1_For_4_Template, 3, 2, "button", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.controls);
  }
}
function RoomAccessoryTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomAccessoryTooltipComponent_Conditional_4_For_1_Template, 5, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.list());
  }
}
function RoomAccessoryTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.ACCESSORIES_EMPTY"));
  }
}
var _RoomAccessoryTooltipComponent = class _RoomAccessoryTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._tooltip = inject(CustomTooltipData);
    this.list = this._state.room_accessories;
    this.close = () => this._tooltip.close();
  }
  get id() {
    return this._state.id;
  }
  performAction(name, method) {
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("accessory_exec", [name, method]);
  }
};
_RoomAccessoryTooltipComponent.\u0275fac = function RoomAccessoryTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomAccessoryTooltipComponent)();
};
_RoomAccessoryTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomAccessoryTooltipComponent, selectors: [["room-accessory-tooltip"]], decls: 6, vars: 4, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-2", "shadow-sm"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-2", "text-xl", "font-medium"], [1, "flex", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "w-full", "min-w-[20rem]", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "flex-1", "pr-8", "pl-2", "font-medium"], ["state", "", "icon", "", "matRipple", "", 1, "border-primary", "text-primary", "rounded-sm", "border", "border-solid", 3, "matTooltip"], ["state", "", "icon", "", "matRipple", "", 1, "border-primary", "text-primary", "rounded-sm", "border", "border-solid", 3, "click", "matTooltip"]], template: function RoomAccessoryTooltipComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomAccessoryTooltipComponent_Conditional_4_Template, 2, 0)(5, RoomAccessoryTooltipComponent_Conditional_5_Template, 4, 3, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONTROL.ACCESSORIES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_a = ctx.list()) == null ? void 0 : _a.length) ? 4 : 5);
  }
}, dependencies: [MatRippleModule, MatRipple, IconComponent, MatTooltipModule, MatTooltip, TranslatePipe], encapsulation: 2 });
var RoomAccessoryTooltipComponent = _RoomAccessoryTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomAccessoryTooltipComponent, [{
    type: Component,
    args: [{ selector: "room-accessory-tooltip", template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-2 shadow-sm"
        >
            <h3
                class="bg-base-200 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACCESSORIES' | translate }}
            </h3>
            @if (list()?.length) {
                @for (item of list(); track item) {
                    <div
                        class="border-base-300 flex w-full min-w-[20rem] items-center space-x-2 rounded-sm border p-2"
                    >
                        <div class="flex-1 pr-8 pl-2 font-medium">
                            {{ item.name }}
                        </div>
                        @for (ctrl of item.controls; track ctrl) {
                            <button
                                state
                                icon
                                matRipple
                                class="border-primary text-primary rounded-sm border border-solid"
                                (click)="performAction(item.name, ctrl.name)"
                                [matTooltip]="ctrl.name"
                            >
                                <icon>{{ ctrl.icon }}</icon>
                            </button>
                        }
                    </div>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.ACCESSORIES_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, IconComponent, MatTooltipModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomAccessoryTooltipComponent, { className: "RoomAccessoryTooltipComponent", filePath: "apps/control/src/app/ui/room-accessory-tooltip.component.ts", lineNumber: 56 });
})();

// apps/control/src/app/video-call/video-call-state.service.ts
var _VideoCallStateService = class _VideoCallStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._control = inject(ControlStateService);
    this.connected = this._bindTo("connected");
    this._calls = this._bindTo("calls");
    this.call = computed(
      () => {
        const calls = this._calls();
        for (const key in calls) {
          if (calls[key].Status)
            return calls[key];
        }
        return null;
      },
      ...ngDevMode ? [{ debugName: "call" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mic_mute = this._bindTo("mic_mute");
    this.presentation_mode = this._bindTo("presentation_mode");
    this.video_layout = this._bindTo("video_layout");
    this.show_camera_pip = this._bindTo("selfview");
    this._speaker_track = this._bindTo("speaker_track");
    this.speaker_track = computed(
      () => (this._speaker_track() || {})["Status/Cameras/SpeakerTrack/Availability"],
      ...ngDevMode ? [{ debugName: "speaker_track" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async showCameraPIP(state) {
    const id = this._control.id;
    if (!id)
      return;
    return zd(id, "VidConf").execute("show_camera_pip", [state]);
  }
  async muteMicrophone(state) {
    const id = this._control.id;
    if (!id)
      return;
    return zd(id, "VidConf").execute("mic_mute", [state]);
  }
  async setVideoLayout(layout) {
    const id = this._control.id;
    if (!id)
      return;
    return zd(id, "VidConf").execute("video_layout", [layout]);
  }
  async setPresentationMode(mod) {
    const id = this._control.id;
    if (!id)
      return;
    return zd(id, "VidConf").execute("presentation_mode", [mod]);
  }
  async hangup() {
    const id = this._control.id;
    if (!id)
      return;
    return zd(id, "VidConf").execute("hangup", []);
  }
  async sendDTMF(digit) {
    const id = this._control.id;
    if (!id)
      return;
    return zd(id, "VidConf").execute("dtmf_send", [digit]);
  }
  async toggleCallOnHold() {
    const id = this._control.id;
    if (!id)
      return;
    const call = this.call();
    if (!call)
      return;
    return zd(id, "VidConf").execute(call.Status === "OnHold" ? "call_resume" : "call_place_on_hold", []);
  }
  /**
   * Create an Angular signal that mirrors a video conferencing status
   * variable binding, rebinding whenever the active system changes.
   */
  _bindTo(name, mod_name = "VidConf") {
    const value = signal(
      null,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      const id = this._control.system_id();
      if (!id) {
        value.set(null);
        return;
      }
      const binding = zd(id, mod_name).variable(name);
      const unbind = binding.bind();
      const listener = binding.listen();
      const update = () => value.set(listener() ?? null);
      update();
      const unsubscribe = listener.subscribe(() => update());
      onCleanup(() => {
        unsubscribe();
        unbind();
      });
    });
    return value.asReadonly();
  }
};
_VideoCallStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VideoCallStateService_BaseFactory;
  return function VideoCallStateService_Factory(__ngFactoryType__) {
    return (\u0275VideoCallStateService_BaseFactory || (\u0275VideoCallStateService_BaseFactory = \u0275\u0275getInheritedFactory(_VideoCallStateService)))(__ngFactoryType__ || _VideoCallStateService);
  };
})();
_VideoCallStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VideoCallStateService, factory: _VideoCallStateService.\u0275fac, providedIn: "root" });
var VideoCallStateService = _VideoCallStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCallStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/control/src/app/topbar-header.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function TopbarHeaderComponent_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275listener("click", function TopbarHeaderComponent_For_6_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(item_r2.action ? item_r2.action() : "");
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("z-index", (item_r2.id === "join" || item_r2.id === "power") && !ctx_r2.join_status()[0] && ctx_r2.join_status()[1] ? "99" : "");
    \u0275\u0275property("content", ctx_r2.cmp[item_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success!", item_r2.enabled);
    \u0275\u0275attribute("type", item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
  }
}
function TopbarHeaderComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopbarHeaderComponent_For_6_Conditional_0_Template, 4, 7, "div", 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(item_r2.show ? 0 : -1);
  }
}
function TopbarHeaderComponent_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function TopbarHeaderComponent_For_13_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      $event.stopPropagation();
      return \u0275\u0275resetView(item_r5.action ? item_r5.action() : "");
    });
    \u0275\u0275elementStart(1, "button", 10)(2, "div", 11)(3, "icon", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r2.cmp[item_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275attribute("type", item_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.name);
  }
}
function TopbarHeaderComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopbarHeaderComponent_For_13_Conditional_0_Template, 7, 4, "div", 7);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275conditional(item_r5.show ? 0 : -1);
  }
}
var CHANGE_ROOM_HOLD_MS = 3e3;
var TOOLTIP;
(function(TOOLTIP2) {
  TOOLTIP2[TOOLTIP2["PHONE"] = 0] = "PHONE";
  TOOLTIP2[TOOLTIP2["LIGHT_SCENES"] = 1] = "LIGHT_SCENES";
  TOOLTIP2[TOOLTIP2["LIGHTS"] = 2] = "LIGHTS";
  TOOLTIP2[TOOLTIP2["LIGHT_LEVELS"] = 3] = "LIGHT_LEVELS";
  TOOLTIP2[TOOLTIP2["ACCESSORIES"] = 4] = "ACCESSORIES";
  TOOLTIP2[TOOLTIP2["MICS"] = 5] = "MICS";
  TOOLTIP2[TOOLTIP2["CAMERA"] = 6] = "CAMERA";
  TOOLTIP2[TOOLTIP2["HELP"] = 7] = "HELP";
  TOOLTIP2[TOOLTIP2["JOIN"] = 8] = "JOIN";
  TOOLTIP2[TOOLTIP2["POWER"] = 9] = "POWER";
})(TOOLTIP || (TOOLTIP = {}));
var _TopbarHeaderComponent = class _TopbarHeaderComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._state = inject(ControlStateService);
    this._call = inject(VideoCallStateService);
    this._org = inject(OrganisationService);
    this.system = this._state.system;
    this.join_status = this._state.join_status;
    this._mic_list = this._state.mic_list;
    this._camera_list = this._state.camera_list;
    this._lights_list = this._state.lights;
    this._room_accessories = this._state.room_accessories;
    this._microphones = this._state.microphones;
    this._join_modes = this._state.join_modes;
    this._joined = this._state.joined;
    this._speaker_track = this._call.speaker_track;
    this._lighting_scenes = this._state.lighting_scenes;
    this._help_items = this._state.help_items;
    this._hide_join_button = this._state.hide_join_button;
    this._lighting_levels = this._state.lighting_levels;
    this.cmp = {
      phone: PhoneDiallingTooltipComponent,
      lighting: LightingTooltipComponent,
      lighting_levels: LightingLevelsTooltipComponent,
      lighting_scenes: LightingSceneTooltipComponent,
      power: PowerTooltipComponent,
      blinds: RoomAccessoryTooltipComponent,
      camera: CameraTooltipComponent,
      mics: MicrophoneTooltipComponent,
      join: JoinRoomTooltipComponent
    };
    this._base_actions = [
      {
        id: "phone",
        name: i18n("APP.CONTROL.ACTION_PHONE"),
        icon: "call",
        show: true,
        enabled: false
      },
      {
        id: "lighting_scenes",
        name: i18n("APP.CONTROL.ACTION_LIGHT_SCENES"),
        icon: "emoji_objects",
        show: true,
        enabled: false
      },
      {
        id: "lighting",
        name: i18n("APP.CONTROL.ACTION_LIGHTING"),
        icon: "brightness_high",
        show: true,
        enabled: false
      },
      {
        id: "lighting_levels",
        name: i18n("APP.CONTROL.ACTION_LIGHTING_LEVELS"),
        icon: "light",
        show: true,
        enabled: false
      },
      {
        id: "blinds",
        name: i18n("APP.CONTROL.ACTION_ACCESSORIES"),
        icon: "unfold_more",
        show: true,
        enabled: false
      },
      {
        id: "mics",
        name: i18n("APP.CONTROL.ACTION_MICS"),
        icon: "mic",
        show: true,
        enabled: false
      },
      {
        id: "camera",
        name: i18n("APP.CONTROL.ACTION_CAMERAS"),
        icon: "photo_camera",
        show: true,
        enabled: false
      },
      {
        id: "help",
        name: i18n("APP.CONTROL.ACTION_HELP"),
        icon: "help",
        show: true,
        enabled: false,
        action: () => this.viewHelp()
      },
      {
        id: "join",
        name: i18n("APP.CONTROL.ACTION_JOIN_ROOMS"),
        icon: "link",
        show: true,
        enabled: false
      },
      {
        id: "power",
        name: i18n("APP.CONTROL.ACTION_POWER"),
        icon: "power_settings_new",
        show: true,
        enabled: false
      }
    ];
    this.action_list = computed(
      () => {
        var _a;
        const system = this.system();
        const mics = this._mic_list();
        const cams = this._camera_list();
        const lights = this._lights_list();
        const accessories = this._room_accessories();
        const microphones = this._microphones();
        const join_modes = this._join_modes();
        const joined = this._joined();
        const speaker_track = this._speaker_track();
        const l_scenes = this._lighting_scenes();
        const help_items = this._help_items();
        const hide_join_button = this._hide_join_button();
        const light_levels = this._lighting_levels();
        const actions = this._base_actions.map((action) => __spreadValues({}, action));
        actions[TOOLTIP.PHONE].show = !!(system == null ? void 0 : system.dial_bindings);
        actions[TOOLTIP.PHONE].enabled = (system == null ? void 0 : system.offhook) || (system == null ? void 0 : system.ringing);
        actions[TOOLTIP.LIGHTS].show = (lights == null ? void 0 : lights.length) > 0;
        actions[TOOLTIP.ACCESSORIES].show = (accessories == null ? void 0 : accessories.length) > 0;
        actions[TOOLTIP.MICS].show = (mics == null ? void 0 : mics.length) > 0 || (microphones == null ? void 0 : microphones.length) > 0;
        actions[TOOLTIP.JOIN].show = !hide_join_button && Object.keys(join_modes || {}).length > 1;
        actions[TOOLTIP.JOIN].enabled = ((_a = joined == null ? void 0 : joined.room_ids) == null ? void 0 : _a.length) > 1;
        actions[TOOLTIP.CAMERA].show = (cams == null ? void 0 : cams.length) > 0 && !speaker_track;
        actions[TOOLTIP.HELP].show = (help_items == null ? void 0 : help_items.length) > 0;
        actions[TOOLTIP.LIGHT_LEVELS].show = light_levels != null;
        actions[TOOLTIP.LIGHT_SCENES].show = l_scenes != null;
        return actions;
      },
      ...ngDevMode ? [{ debugName: "action_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewHelp = () => this._state.viewHelp();
    this.powerOff = () => this._state.powerOff();
    this.logo = computed(
      () => {
        this._org.active_building();
        return (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {};
      },
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._can_change_room = this._state.canChangeRoom();
  }
  /** Start the logo hold that opens the change room prompt */
  startHold() {
    if (!this._can_change_room)
      return;
    this.timeout("change_room", () => this._state.changeRoom(), CHANGE_ROOM_HOLD_MS);
  }
  cancelHold() {
    this.clearTimeout("change_room");
  }
};
_TopbarHeaderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TopbarHeaderComponent_BaseFactory;
  return function TopbarHeaderComponent_Factory(__ngFactoryType__) {
    return (\u0275TopbarHeaderComponent_BaseFactory || (\u0275TopbarHeaderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TopbarHeaderComponent)))(__ngFactoryType__ || _TopbarHeaderComponent);
  };
})();
_TopbarHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarHeaderComponent, selectors: [["topbar-header"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 3, consts: [["menu", "matMenu"], [1, "flex-1", "px-4"], ["auth", "", "alt", "Logo", "draggable", "false", 1, "h-12", "select-none", 3, "pointerdown", "pointerup", "pointerleave", "pointercancel", "contextmenu", "source"], [1, "text-base-content", "p-4", "text-lg"], [1, "hidden", "flex-1", "items-center", "justify-end", "space-x-2", "p-4", "sm:flex"], ["icon", "", "matRipple", "", 1, "text-base-content", "mr-2", "sm:hidden", 3, "matMenuTriggerFor"], ["customTooltip", "", 3, "content", "z-index"], ["customTooltip", "", 3, "content"], ["icon", "", "matRipple", "", 1, "bg-base-200", "text-base-content", 3, "click"], ["customTooltip", "", 3, "click", "content"], ["mat-menu-item", ""], [1, "flex", "items-center", "text-base"], [1, "mr-2"]], template: function TopbarHeaderComponent_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "img", 2);
    \u0275\u0275listener("pointerdown", function TopbarHeaderComponent_Template_img_pointerdown_1_listener() {
      return ctx.startHold();
    })("pointerup", function TopbarHeaderComponent_Template_img_pointerup_1_listener() {
      return ctx.cancelHold();
    })("pointerleave", function TopbarHeaderComponent_Template_img_pointerleave_1_listener() {
      return ctx.cancelHold();
    })("pointercancel", function TopbarHeaderComponent_Template_img_pointercancel_1_listener() {
      return ctx.cancelHold();
    })("contextmenu", function TopbarHeaderComponent_Template_img_contextmenu_1_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275repeaterCreate(5, TopbarHeaderComponent_For_6_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5)(8, "icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(12, TopbarHeaderComponent_For_13_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r6 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("source", ((_a = ctx.logo()) == null ? void 0 : _a.src) || ctx.logo());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (_b = ctx.system()) == null ? void 0 : _b.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.action_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.action_list());
  }
}, dependencies: [
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  CustomTooltipComponent,
  IconComponent,
  AuthenticatedImageDirective
], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nimg[_ngcontent-%COMP%] {\n  max-height: calc(100% - 1rem);\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n/*# sourceMappingURL=topbar-header.component.css.map */"] });
var TopbarHeaderComponent = _TopbarHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarHeaderComponent, [{
    type: Component,
    args: [{ selector: "topbar-header", template: `
        <div class="flex-1 px-4">
            <img
                auth
                class="h-12 select-none"
                alt="Logo"
                draggable="false"
                [source]="logo()?.src || logo()"
                (pointerdown)="startHold()"
                (pointerup)="cancelHold()"
                (pointerleave)="cancelHold()"
                (pointercancel)="cancelHold()"
                (contextmenu)="$event.preventDefault()"
            />
        </div>
        <div class="text-base-content p-4 text-lg">
            {{ system()?.name }}
        </div>
        <div
            class="hidden flex-1 items-center justify-end space-x-2 p-4 sm:flex"
        >
            @for (item of action_list(); track item.id) {
                @if (item.show) {
                    <div
                        customTooltip
                        [content]="cmp[item.id]"
                        [style.z-index]="
                            (item.id === 'join' || item.id === 'power') &&
                            !join_status()[0] &&
                            join_status()[1]
                                ? '99'
                                : ''
                        "
                    >
                        <button
                            icon
                            matRipple
                            class="bg-base-200 text-base-content"
                            [attr.type]="item.id"
                            [class.bg-success!]="item.enabled"
                            (click)="item.action ? item.action() : ''"
                        >
                            <icon>{{ item.icon }}</icon>
                        </button>
                    </div>
                }
            }
        </div>
        <button
            icon
            matRipple
            [matMenuTriggerFor]="menu"
            class="text-base-content mr-2 sm:hidden"
        >
            <icon>more_vert</icon>
        </button>
        <mat-menu #menu="matMenu">
            @for (item of action_list(); track item.id) {
                @if (item.show) {
                    <div
                        customTooltip
                        [content]="cmp[item.id]"
                        (click)="
                            $event.stopPropagation();
                            item.action ? item.action() : ''
                        "
                    >
                        <button [attr.type]="item.id" mat-menu-item>
                            <div class="flex items-center text-base">
                                <icon class="mr-2">{{ item.icon }}</icon>
                                <span>{{ item.name }}</span>
                            </div>
                        </button>
                    </div>
                }
            }
        </mat-menu>
    `, imports: [
      MatMenuModule,
      CustomTooltipComponent,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;899ccc7ed5132c6d2908ee18e4342c82da91e820bd29409075a9a47d83d2f412;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/topbar-header.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n}\nimg {\n  max-height: calc(100% - 1rem);\n}\nbutton {\n  border-radius: 0.25rem;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n/*# sourceMappingURL=topbar-header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarHeaderComponent, { className: "TopbarHeaderComponent", filePath: "apps/control/src/app/topbar-header.component.ts", lineNumber: 146 });
})();

export {
  MatSlider,
  MatSliderThumb,
  MatSliderModule,
  BindingDirective,
  ControlStatusBarComponent,
  JoystickTilt,
  JoystickPan,
  JoystickComponent,
  DialpadComponent,
  VideoCallStateService,
  TopbarHeaderComponent
};
//# debugId=d4609024-fd09-58ea-96e2-02258a375a23
//# sourceMappingURL=chunk-CAVSBNKP.js.map
