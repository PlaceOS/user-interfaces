import {
  APP_ID,
  AbstractControl,
  BACKSPACE,
  BidiModule,
  CSP_NONCE,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DELETE,
  DOCUMENT,
  DOWN_ARROW,
  DestroyRef,
  Directionality,
  Directive,
  EMPTY,
  ENTER,
  ElementRef,
  ErrorStateMatcher,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  FormGroupDirective,
  HOST_TAG_NAME,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRippleLoader,
  MatRippleModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  ObserversModule,
  Output,
  Platform,
  QueryList,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  SIGNAL,
  SPACE,
  Service,
  Subject,
  Subscription,
  TAB,
  UP_ARROW,
  Validators,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _ErrorStateTracker,
  _IdGenerator,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  afterNextRender,
  afterRenderEffect,
  auditTime,
  booleanAttribute,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  computed,
  contentChild,
  effect,
  elementAcceptsMinMax,
  filter,
  formatRuntimeError,
  forwardRef,
  getSupportedInputTypes,
  hasModifierKey,
  inject,
  input,
  isInParamsFunction,
  isNativeFormElement,
  isSignal,
  isTextualFormElement,
  linkedSignal,
  map,
  merge,
  numberAttribute,
  pairwise,
  runInInjectionContext,
  selectValueAccessor,
  setClassMetadata,
  setInParamsFunction,
  setNativeDomProperty,
  shareReplay,
  signal,
  startWith,
  switchMap,
  takeUntil,
  untracked,
  viewChild,
  ɵFORM_CONTROL_INTEGRATION,
  ɵɵControlFeature,
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
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-4CE6YSQA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/cdk/fesm2022/observers-private.mjs
var loopLimitExceededErrorHandler = (e) => {
  if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
};
var SingleBoxSharedResizeObserver = class {
  _box;
  _destroyed = new Subject();
  _resizeSubject = new Subject();
  _resizeObserver;
  _elementObservables = /* @__PURE__ */ new Map();
  constructor(_box) {
    this._box = _box;
    if (typeof ResizeObserver !== "undefined") {
      this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
    }
  }
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new Observable((observer) => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe(filter((entries) => entries.some((entry) => entry.target === target)), shareReplay({
        bufferSize: 1,
        refCount: true
      }), takeUntil(this._destroyed)));
    }
    return this._elementObservables.get(target);
  }
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
};
var SharedResizeObserver = class _SharedResizeObserver {
  _cleanupErrorListener;
  _observers = /* @__PURE__ */ new Map();
  _ngZone = inject(NgZone);
  constructor() {
    if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      this._ngZone.runOutsideAngular(() => {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
      });
    }
  }
  ngOnDestroy() {
    for (const [, observer] of this._observers) {
      observer.destroy();
    }
    this._observers.clear();
    this._cleanupErrorListener?.();
  }
  observe(target, options) {
    const box = options?.box || "content-box";
    if (!this._observers.has(box)) {
      this._observers.set(box, new SingleBoxSharedResizeObserver(box));
    }
    return this._observers.get(box).observe(target);
  }
  static \u0275fac = function SharedResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedResizeObserver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _SharedResizeObserver,
    factory: _SharedResizeObserver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedResizeObserver, [{
    type: Service
  }], () => [], null);
})();

// node_modules/@angular/material/fesm2022/_form-field-chunk.mjs
var _c0 = ["notch"];
var _c1 = ["*"];
var _c2 = ["iconPrefixContainer"];
var _c3 = ["textPrefixContainer"];
var _c4 = ["iconSuffixContainer"];
var _c5 = ["textSuffixContainer"];
var _c6 = ["textField"];
var _c7 = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c8 = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 20);
    \u0275\u0275projection(1, 1);
    \u0275\u0275conditionalCreate(2, MatFormField_ng_template_0_Conditional_0_Conditional_2_Template, 1, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("floating", ctx_r0._shouldLabelFloat())("monitorResize", ctx_r0._hasOutline())("id", ctx_r0._labelId);
    \u0275\u0275attribute("for", ctx_r0._control.disableAutomaticLabeling ? null : ctx_r0._control.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.hideRequiredMarker && ctx_r0._control.required ? 2 : -1);
  }
}
function MatFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatFormField_ng_template_0_Conditional_0_Template, 3, 5, "label", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0._hasFloatingLabel() ? 0 : -1);
  }
}
function MatFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatFormField_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const labelTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", labelTemplate_r2);
  }
}
function MatFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, MatFormField_Conditional_6_Conditional_1_Template, 1, 1, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matFormFieldNotchedOutlineOpen", ctx_r0._shouldLabelFloat());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0._forceDisplayInfixLabel() ? 1 : -1);
  }
}
function MatFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 2);
    \u0275\u0275projection(2, 2);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 3);
    \u0275\u0275projection(2, 3);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {
}
function MatFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatFormField_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const labelTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", labelTemplate_r2);
  }
}
function MatFormField_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14, 4);
    \u0275\u0275projection(2, 4);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 5);
    \u0275\u0275projection(2, 5);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function MatFormField_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275projection(1, 6);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Case_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0._hintLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hintLabel);
  }
}
function MatFormField_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, MatFormField_Case_17_Conditional_1_Template, 2, 2, "mat-hint", 22);
    \u0275\u0275projection(2, 7);
    \u0275\u0275element(3, "div", 23);
    \u0275\u0275projection(4, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hintLabel ? 1 : -1);
  }
}
var MatLabel = class _MatLabel {
  static \u0275fac = function MatLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatLabel,
    selectors: [["mat-label"]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLabel, [{
    type: Directive,
    args: [{
      selector: "mat-label"
    }]
  }], null, null);
})();
var MAT_ERROR = new InjectionToken("MatError");
var MatError = class _MatError {
  id = inject(_IdGenerator).getId("mat-mdc-error-");
  static \u0275fac = function MatError_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatError)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatError,
    selectors: [["mat-error"], ["", "matError", ""]],
    hostAttrs: [1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"],
    hostVars: 1,
    hostBindings: function MatError_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ERROR,
      useExisting: _MatError
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatError, [{
    type: Directive,
    args: [{
      selector: "mat-error, [matError]",
      host: {
        "class": "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
        "[id]": "id"
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatHint = class _MatHint {
  align = "start";
  id = inject(_IdGenerator).getId("mat-mdc-hint-");
  static \u0275fac = function MatHint_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatHint)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHint,
    selectors: [["mat-hint"]],
    hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
    hostVars: 4,
    hostBindings: function MatHint_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("align", null);
        \u0275\u0275classProp("mat-mdc-form-field-hint-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align",
      id: "id"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHint, [{
    type: Directive,
    args: [{
      selector: "mat-hint",
      host: {
        "class": "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
        "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
        "[id]": "id",
        "[attr.align]": "null"
      }
    }]
  }], null, {
    align: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var MAT_PREFIX = new InjectionToken("MatPrefix");
var MatPrefix = class _MatPrefix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static \u0275fac = function MatPrefix_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPrefix)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatPrefix,
    selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]],
    inputs: {
      _isTextSelector: [0, "matTextPrefix", "_isTextSelector"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_PREFIX,
      useExisting: _MatPrefix
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPrefix, [{
    type: Directive,
    args: [{
      selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, {
    _isTextSelector: [{
      type: Input,
      args: ["matTextPrefix"]
    }]
  });
})();
var MAT_SUFFIX = new InjectionToken("MatSuffix");
var MatSuffix = class _MatSuffix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static \u0275fac = function MatSuffix_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSuffix)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSuffix,
    selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
    inputs: {
      _isTextSelector: [0, "matTextSuffix", "_isTextSelector"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SUFFIX,
      useExisting: _MatSuffix
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSuffix, [{
    type: Directive,
    args: [{
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, {
    _isTextSelector: [{
      type: Input,
      args: ["matTextSuffix"]
    }]
  });
})();
var FLOATING_LABEL_PARENT = new InjectionToken("FloatingLabelParent");
var MatFormFieldFloatingLabel = class _MatFormFieldFloatingLabel {
  _elementRef = inject(ElementRef);
  get floating() {
    return this._floating;
  }
  set floating(value) {
    this._floating = value;
    if (this.monitorResize) {
      this._handleResize();
    }
  }
  _floating = false;
  get monitorResize() {
    return this._monitorResize;
  }
  set monitorResize(value) {
    this._monitorResize = value;
    if (this._monitorResize) {
      this._subscribeToResize();
    } else {
      this._resizeSubscription.unsubscribe();
    }
  }
  _monitorResize = false;
  _resizeObserver = inject(SharedResizeObserver);
  _ngZone = inject(NgZone);
  _parent = inject(FLOATING_LABEL_PARENT);
  _resizeSubscription = new Subscription();
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  getWidth() {
    return estimateScrollWidth(this._elementRef.nativeElement);
  }
  get element() {
    return this._elementRef.nativeElement;
  }
  _handleResize() {
    setTimeout(() => this._parent._handleLabelResized());
  }
  _subscribeToResize() {
    this._resizeSubscription.unsubscribe();
    this._ngZone.runOutsideAngular(() => {
      this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
        box: "border-box"
      }).subscribe(() => this._handleResize());
    });
  }
  static \u0275fac = function MatFormFieldFloatingLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldFloatingLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldFloatingLabel,
    selectors: [["label", "matFormFieldFloatingLabel", ""]],
    hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
    hostVars: 2,
    hostBindings: function MatFormFieldFloatingLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-floating-label--float-above", ctx.floating);
      }
    },
    inputs: {
      floating: "floating",
      monitorResize: "monitorResize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldFloatingLabel, [{
    type: Directive,
    args: [{
      selector: "label[matFormFieldFloatingLabel]",
      host: {
        "class": "mdc-floating-label mat-mdc-floating-label",
        "[class.mdc-floating-label--float-above]": "floating"
      }
    }]
  }], null, {
    floating: [{
      type: Input
    }],
    monitorResize: [{
      type: Input
    }]
  });
})();
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
var ACTIVATE_CLASS = "mdc-line-ripple--active";
var DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
var MatFormFieldLineRipple = class _MatFormFieldLineRipple {
  _elementRef = inject(ElementRef);
  _cleanupTransitionEnd;
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(Renderer2);
    ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd);
    });
  }
  activate() {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(DEACTIVATING_CLASS);
    classList.add(ACTIVATE_CLASS);
  }
  deactivate() {
    this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
  }
  _handleTransitionEnd = (event) => {
    const classList = this._elementRef.nativeElement.classList;
    const isDeactivating = classList.contains(DEACTIVATING_CLASS);
    if (event.propertyName === "opacity" && isDeactivating) {
      classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
    }
  };
  ngOnDestroy() {
    this._cleanupTransitionEnd();
  }
  static \u0275fac = function MatFormFieldLineRipple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldLineRipple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldLineRipple,
    selectors: [["div", "matFormFieldLineRipple", ""]],
    hostAttrs: [1, "mdc-line-ripple"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldLineRipple, [{
    type: Directive,
    args: [{
      selector: "div[matFormFieldLineRipple]",
      host: {
        "class": "mdc-line-ripple"
      }
    }]
  }], () => [], null);
})();
var MatFormFieldNotchedOutline = class _MatFormFieldNotchedOutline {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  open = false;
  _notch;
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    const label = element.querySelector(".mdc-floating-label");
    if (label) {
      element.classList.add("mdc-notched-outline--upgraded");
      if (typeof requestAnimationFrame === "function") {
        label.style.transitionDuration = "0s";
        this._ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => label.style.transitionDuration = "");
        });
      }
    } else {
      element.classList.add("mdc-notched-outline--no-label");
    }
  }
  _setNotchWidth(labelWidth) {
    const notch = this._notch.nativeElement;
    if (!this.open || !labelWidth) {
      notch.style.width = "";
    } else {
      const NOTCH_ELEMENT_PADDING = 8;
      const NOTCH_ELEMENT_BORDER = 1;
      notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
    }
  }
  _setMaxWidth(prefixAndSuffixWidth) {
    this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${prefixAndSuffixWidth}px)`);
  }
  static \u0275fac = function MatFormFieldNotchedOutline_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldNotchedOutline)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFormFieldNotchedOutline,
    selectors: [["div", "matFormFieldNotchedOutline", ""]],
    viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._notch = _t.first);
      }
    },
    hostAttrs: [1, "mdc-notched-outline"],
    hostVars: 2,
    hostBindings: function MatFormFieldNotchedOutline_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-notched-outline--notched", ctx.open);
      }
    },
    inputs: {
      open: [0, "matFormFieldNotchedOutlineOpen", "open"]
    },
    ngContentSelectors: _c1,
    decls: 5,
    vars: 0,
    consts: [["notch", ""], [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"]],
    template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElement(0, "div", 1);
        \u0275\u0275domElementStart(1, "div", 2, 0);
        \u0275\u0275projection(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(4, "div", 3);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldNotchedOutline, [{
    type: Component,
    args: [{
      selector: "div[matFormFieldNotchedOutline]",
      host: {
        "class": "mdc-notched-outline",
        "[class.mdc-notched-outline--notched]": "open"
      },
      encapsulation: ViewEncapsulation.None,
      template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n'
    }]
  }], null, {
    open: [{
      type: Input,
      args: ["matFormFieldNotchedOutlineOpen"]
    }],
    _notch: [{
      type: ViewChild,
      args: ["notch"]
    }]
  });
})();
var MatFormFieldControl = class _MatFormFieldControl {
  value = null;
  stateChanges;
  id;
  placeholder;
  ngControl = null;
  focused = false;
  empty = false;
  shouldLabelFloat = false;
  required = false;
  disabled = false;
  errorState = false;
  controlType;
  autofilled;
  userAriaDescribedBy;
  disableAutomaticLabeling;
  describedByIds;
  static \u0275fac = function MatFormFieldControl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldControl)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldControl
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldControl, [{
    type: Directive
  }], null, null);
})();
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var MAT_FORM_FIELD = new InjectionToken("MatFormField");
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
var DEFAULT_APPEARANCE = "fill";
var DEFAULT_FLOAT_LABEL = "auto";
var DEFAULT_SUBSCRIPT_SIZING = "fixed";
var FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
var MatFormField = class _MatFormField {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _platform = inject(Platform);
  _idGenerator = inject(_IdGenerator);
  _ngZone = inject(NgZone);
  _defaults = inject(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
    optional: true
  });
  _currentDirection;
  _textField;
  _iconPrefixContainer;
  _textPrefixContainer;
  _iconSuffixContainer;
  _textSuffixContainer;
  _floatingLabel;
  _notchedOutline;
  _lineRipple;
  _iconPrefixContainerSignal = viewChild("iconPrefixContainer", ...ngDevMode ? [{
    debugName: "_iconPrefixContainerSignal"
  }] : []);
  _textPrefixContainerSignal = viewChild("textPrefixContainer", ...ngDevMode ? [{
    debugName: "_textPrefixContainerSignal"
  }] : []);
  _iconSuffixContainerSignal = viewChild("iconSuffixContainer", ...ngDevMode ? [{
    debugName: "_iconSuffixContainerSignal"
  }] : []);
  _textSuffixContainerSignal = viewChild("textSuffixContainer", ...ngDevMode ? [{
    debugName: "_textSuffixContainerSignal"
  }] : []);
  _prefixSuffixContainers = computed(() => {
    return [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map((container) => container?.nativeElement).filter((e) => e !== void 0);
  }, ...ngDevMode ? [{
    debugName: "_prefixSuffixContainers"
  }] : []);
  _formFieldControl;
  _prefixChildren;
  _suffixChildren;
  _errorChildren;
  _hintChildren;
  _labelChild = contentChild(MatLabel, ...ngDevMode ? [{
    debugName: "_labelChild"
  }] : []);
  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }
  set hideRequiredMarker(value) {
    this._hideRequiredMarker = coerceBooleanProperty(value);
  }
  _hideRequiredMarker = false;
  color = "primary";
  get floatLabel() {
    return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
  }
  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _floatLabel;
  get appearance() {
    return this._appearanceSignal();
  }
  set appearance(value) {
    const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (newAppearance !== "fill" && newAppearance !== "outline") {
        throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
      }
    }
    this._appearanceSignal.set(newAppearance);
  }
  _appearanceSignal = signal(DEFAULT_APPEARANCE, ...ngDevMode ? [{
    debugName: "_appearanceSignal"
  }] : []);
  get subscriptSizing() {
    return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  set subscriptSizing(value) {
    this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  _subscriptSizing = null;
  get hintLabel() {
    return this._hintLabel;
  }
  set hintLabel(value) {
    this._hintLabel = value;
    this._processHints();
  }
  _hintLabel = "";
  _hasIconPrefix = false;
  _hasTextPrefix = false;
  _hasIconSuffix = false;
  _hasTextSuffix = false;
  _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
  _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
  _describedByIds;
  get _control() {
    return this._explicitFormFieldControl || this._formFieldControl;
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  _destroyed = new Subject();
  _isFocused = null;
  _explicitFormFieldControl;
  _previousControl = null;
  _previousControlValidatorFn = null;
  _stateChanges;
  _valueChanges;
  _describedByChanges;
  _outlineLabelOffsetResizeObserver = null;
  _animationsDisabled = _animationsDisabled();
  constructor() {
    const defaults = this._defaults;
    const dir = inject(Directionality);
    if (defaults) {
      if (defaults.appearance) {
        this.appearance = defaults.appearance;
      }
      this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
      if (defaults.color) {
        this.color = defaults.color;
      }
    }
    effect(() => this._currentDirection = dir.valueSignal());
    this._syncOutlineLabelOffset();
  }
  ngAfterViewInit() {
    this._updateFocusState();
    if (!this._animationsDisabled) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");
        }, 300);
      });
    }
    this._changeDetectorRef.detectChanges();
  }
  ngAfterContentInit() {
    this._assertFormFieldControl();
    this._initializeSubscript();
    this._initializePrefixAndSuffix();
  }
  ngAfterContentChecked() {
    this._assertFormFieldControl();
    if (this._control !== this._previousControl) {
      this._initializeControl(this._previousControl);
      if (this._control.ngControl && this._control.ngControl.control) {
        this._previousControlValidatorFn = this._control.ngControl.control.validator;
      }
      this._previousControl = this._control;
      this._changeDetectorRef.markForCheck();
    }
    if (this._control.ngControl && this._control.ngControl.control) {
      const validatorFn = this._control.ngControl.control.validator;
      if (validatorFn !== this._previousControlValidatorFn) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  ngOnDestroy() {
    this._outlineLabelOffsetResizeObserver?.disconnect();
    this._stateChanges?.unsubscribe();
    this._valueChanges?.unsubscribe();
    this._describedByChanges?.unsubscribe();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getLabelId = computed(() => this._hasFloatingLabel() ? this._labelId : null, ...ngDevMode ? [{
    debugName: "getLabelId"
  }] : []);
  getConnectedOverlayOrigin() {
    return this._textField || this._elementRef;
  }
  _animateAndLockLabel() {
    if (this._hasFloatingLabel()) {
      this.floatLabel = "always";
    }
  }
  _initializeControl(previousControl) {
    const control = this._control;
    const classPrefix = "mat-mdc-form-field-type-";
    if (previousControl) {
      this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
    }
    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
    }
    this._stateChanges?.unsubscribe();
    this._stateChanges = control.stateChanges.subscribe(() => {
      this._updateFocusState();
      this._changeDetectorRef.markForCheck();
    });
    this._describedByChanges?.unsubscribe();
    this._describedByChanges = control.stateChanges.pipe(startWith([void 0, void 0]), map(() => [control.errorState, control.userAriaDescribedBy]), pairwise(), filter(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
      return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
    })).subscribe(() => this._syncDescribedByIds());
    this._valueChanges?.unsubscribe();
    if (control.ngControl && control.ngControl.valueChanges) {
      this._valueChanges = control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
  }
  _checkPrefixAndSuffixTypes() {
    this._hasIconPrefix = !!this._prefixChildren.find((p) => !p._isText);
    this._hasTextPrefix = !!this._prefixChildren.find((p) => p._isText);
    this._hasIconSuffix = !!this._suffixChildren.find((s) => !s._isText);
    this._hasTextSuffix = !!this._suffixChildren.find((s) => s._isText);
  }
  _initializePrefixAndSuffix() {
    this._checkPrefixAndSuffixTypes();
    merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._checkPrefixAndSuffixTypes();
      this._changeDetectorRef.markForCheck();
    });
  }
  _initializeSubscript() {
    this._hintChildren.changes.subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    this._errorChildren.changes.subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    this._validateHints();
    this._syncDescribedByIds();
  }
  _assertFormFieldControl() {
    if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  _updateFocusState() {
    const controlFocused = this._control.focused;
    if (controlFocused && !this._isFocused) {
      this._isFocused = true;
      this._lineRipple?.activate();
    } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
      this._isFocused = false;
      this._lineRipple?.deactivate();
    }
    this._elementRef.nativeElement.classList.toggle("mat-focused", controlFocused);
    this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", controlFocused);
  }
  _syncOutlineLabelOffset() {
    afterRenderEffect({
      earlyRead: () => {
        if (this._appearanceSignal() !== "outline") {
          this._outlineLabelOffsetResizeObserver?.disconnect();
          return null;
        }
        if (globalThis.ResizeObserver) {
          this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
            this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
          });
          for (const el of this._prefixSuffixContainers()) {
            this._outlineLabelOffsetResizeObserver.observe(el, {
              box: "border-box"
            });
          }
        }
        return this._getOutlinedLabelOffset();
      },
      write: (labelStyles) => this._writeOutlinedLabelStyles(labelStyles())
    });
  }
  _shouldAlwaysFloat() {
    return this.floatLabel === "always";
  }
  _hasOutline() {
    return this.appearance === "outline";
  }
  _forceDisplayInfixLabel() {
    return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
  }
  _hasFloatingLabel = computed(() => !!this._labelChild(), ...ngDevMode ? [{
    debugName: "_hasFloatingLabel"
  }] : []);
  _shouldLabelFloat() {
    if (!this._hasFloatingLabel()) {
      return false;
    }
    return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
  }
  _shouldForward(prop) {
    const control = this._control ? this._control.ngControl : null;
    return control && control[prop];
  }
  _getSubscriptMessageType() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
  }
  _handleLabelResized() {
    this._refreshOutlineNotchWidth();
  }
  _refreshOutlineNotchWidth() {
    if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
      this._notchedOutline?._setNotchWidth(0);
    } else {
      this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
    }
  }
  _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      let startHint;
      let endHint;
      this._hintChildren.forEach((hint) => {
        if (hint.align === "start") {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError("start");
          }
          startHint = hint;
        } else if (hint.align === "end") {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError("end");
          }
          endHint = hint;
        }
      });
    }
  }
  _syncDescribedByIds() {
    if (this._control) {
      let ids = [];
      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
        ids.push(...this._control.userAriaDescribedBy.split(" "));
      }
      if (this._getSubscriptMessageType() === "hint") {
        const startHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "start") : null;
        const endHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "end") : null;
        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }
        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map((error) => error.id));
      }
      const existingDescribedBy = this._control.describedByIds;
      let toAssign;
      if (existingDescribedBy) {
        const exclude = this._describedByIds || ids;
        toAssign = ids.concat(existingDescribedBy.filter((id) => id && !exclude.includes(id)));
      } else {
        toAssign = ids;
      }
      this._control.setDescribedByIds(toAssign);
      this._describedByIds = ids;
    }
  }
  _getOutlinedLabelOffset() {
    if (!this._hasOutline() || !this._floatingLabel) {
      return null;
    }
    if (!this._iconPrefixContainer && !this._textPrefixContainer) {
      return ["", null];
    }
    if (!this._isAttachedToDom()) {
      return null;
    }
    const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
    const textPrefixContainer = this._textPrefixContainer?.nativeElement;
    const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
    const textSuffixContainer = this._textSuffixContainer?.nativeElement;
    const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
    const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
    const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
    const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
    const negate = this._currentDirection === "rtl" ? "-1" : "1";
    const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
    const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
    const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
    const floatingLabelTransform = `var(--mat-mdc-form-field-label-transform, ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
    const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
    return [floatingLabelTransform, notchedOutlineWidth];
  }
  _writeOutlinedLabelStyles(styles) {
    if (styles !== null) {
      const [floatingLabelTransform, notchedOutlineWidth] = styles;
      if (this._floatingLabel) {
        this._floatingLabel.element.style.transform = floatingLabelTransform;
      }
      if (notchedOutlineWidth !== null) {
        this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
      }
    }
  }
  _isAttachedToDom() {
    const element = this._elementRef.nativeElement;
    if (element.getRootNode) {
      const rootNode = element.getRootNode();
      return rootNode && rootNode !== element;
    }
    return document.documentElement.contains(element);
  }
  static \u0275fac = function MatFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFormField,
    selectors: [["mat-form-field"]],
    contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx._labelChild, MatLabel, 5);
        \u0275\u0275contentQuery(dirIndex, MatFormFieldControl, 5)(dirIndex, MAT_PREFIX, 5)(dirIndex, MAT_SUFFIX, 5)(dirIndex, MAT_ERROR, 5)(dirIndex, MatHint, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._formFieldControl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._prefixChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._suffixChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._errorChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._hintChildren = _t);
      }
    },
    viewQuery: function MatFormField_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._iconPrefixContainerSignal, _c2, 5)(ctx._textPrefixContainerSignal, _c3, 5)(ctx._iconSuffixContainerSignal, _c4, 5)(ctx._textSuffixContainerSignal, _c5, 5);
        \u0275\u0275viewQuery(_c6, 5)(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5)(MatFormFieldFloatingLabel, 5)(MatFormFieldNotchedOutline, 5)(MatFormFieldLineRipple, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(4);
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textField = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._iconPrefixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textPrefixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._iconSuffixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textSuffixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._floatingLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._notchedOutline = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lineRipple = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-form-field"],
    hostVars: 38,
    hostBindings: function MatFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-form-field-label-always-float", ctx._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", ctx._hasIconSuffix)("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-hide-placeholder", ctx._hasFloatingLabel() && !ctx._shouldLabelFloat())("mat-primary", ctx.color !== "accent" && ctx.color !== "warn")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
      }
    },
    inputs: {
      hideRequiredMarker: "hideRequiredMarker",
      color: "color",
      floatLabel: "floatLabel",
      appearance: "appearance",
      subscriptSizing: "subscriptSizing",
      hintLabel: "hintLabel"
    },
    exportAs: ["matFormField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_FORM_FIELD,
      useExisting: _MatFormField
    }, {
      provide: FLOATING_LABEL_PARENT,
      useExisting: _MatFormField
    }])],
    ngContentSelectors: _c8,
    decls: 18,
    vars: 21,
    consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], ["textSuffixContainer", ""], ["iconSuffixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], ["aria-atomic", "true", "aria-live", "polite", 1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
    template: function MatFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275template(0, MatFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 6, 1);
        \u0275\u0275listener("click", function MatFormField_Template_div_click_2_listener($event) {
          return ctx._control.onContainerClick($event);
        });
        \u0275\u0275conditionalCreate(4, MatFormField_Conditional_4_Template, 1, 0, "div", 7);
        \u0275\u0275elementStart(5, "div", 8);
        \u0275\u0275conditionalCreate(6, MatFormField_Conditional_6_Template, 2, 2, "div", 9);
        \u0275\u0275conditionalCreate(7, MatFormField_Conditional_7_Template, 3, 0, "div", 10);
        \u0275\u0275conditionalCreate(8, MatFormField_Conditional_8_Template, 3, 0, "div", 11);
        \u0275\u0275elementStart(9, "div", 12);
        \u0275\u0275conditionalCreate(10, MatFormField_Conditional_10_Template, 1, 1, null, 13);
        \u0275\u0275projection(11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, MatFormField_Conditional_12_Template, 3, 0, "div", 14);
        \u0275\u0275conditionalCreate(13, MatFormField_Conditional_13_Template, 3, 0, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, MatFormField_Conditional_14_Template, 1, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17);
        \u0275\u0275conditionalCreate(16, MatFormField_Case_16_Template, 2, 0, "div", 18)(17, MatFormField_Case_17_Template, 5, 1, "div", 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_17_0;
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-text-field--filled", !ctx._hasOutline())("mdc-text-field--outlined", ctx._hasOutline())("mdc-text-field--no-label", !ctx._hasFloatingLabel())("mdc-text-field--disabled", ctx._control.disabled)("mdc-text-field--invalid", ctx._control.errorState);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._hasOutline() && !ctx._control.disabled ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasOutline() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasIconPrefix ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasTextPrefix ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasTextSuffix ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasIconSuffix ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx._hasOutline() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-mdc-form-field-subscript-dynamic-size", ctx.subscriptSizing === "dynamic");
        const subscriptMessageType_r3 = ctx._getSubscriptMessageType();
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_17_0 = subscriptMessageType_r3) === "error" ? 16 : tmp_17_0 === "hint" ? 17 : -1);
      }
    },
    dependencies: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
    styles: ['.mdc-text-field {\n  display: inline-flex;\n  align-items: baseline;\n  padding: 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  will-change: opacity, transform, color;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.mdc-text-field__input {\n  width: 100%;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  background: none;\n  padding: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 28px;\n}\n.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {\n  display: none;\n}\n.mdc-text-field__input::-ms-clear {\n  display: none;\n}\n.mdc-text-field__input:focus {\n  outline: none;\n}\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n.mdc-text-field__input::placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {\n  opacity: 0;\n}\n.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--outlined .mdc-text-field__input {\n  display: flex;\n  border: none !important;\n  background-color: transparent;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  pointer-events: auto;\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));\n  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));\n  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-text-field__input {\n    background-color: Window;\n  }\n}\n\n.mdc-text-field--filled {\n  height: 56px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {\n  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled {\n  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));\n}\n\n.mdc-text-field--outlined {\n  height: 56px;\n  overflow: visible;\n  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));\n  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);\n}\n[dir=rtl] .mdc-text-field--outlined {\n  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);\n  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));\n}\n\n.mdc-floating-label {\n  position: absolute;\n  left: 0;\n  transform-origin: left top;\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform;\n}\n[dir=rtl] .mdc-floating-label {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n  text-align: right;\n}\n.mdc-text-field .mdc-floating-label {\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.mdc-notched-outline .mdc-floating-label {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  left: 4px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {\n  left: auto;\n  right: 4px;\n}\n.mdc-text-field--filled .mdc-floating-label {\n  left: 16px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--filled .mdc-floating-label {\n  left: auto;\n  right: 16px;\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  cursor: default;\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-floating-label {\n    z-index: 1;\n  }\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {\n  display: none;\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));\n}\n.mdc-text-field--filled .mdc-floating-label {\n  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));\n  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));\n  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));\n  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));\n  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));\n  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));\n  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));\n}\n\n.mdc-floating-label--float-above {\n  cursor: auto;\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-37.25px) scale(1);\n  font-size: 0.75rem;\n}\n.mdc-notched-outline .mdc-floating-label--float-above {\n  text-overflow: clip;\n}\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: 133.3333333333%;\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-34.75px) scale(0.75);\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n\n.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 1px;\n  margin-right: 0;\n  content: "*";\n}\n[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 0;\n  margin-right: 1px;\n}\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none;\n}\n[dir=rtl] .mdc-notched-outline {\n  text-align: right;\n}\n.mdc-text-field--outlined .mdc-notched-outline {\n  z-index: 1;\n}\n\n.mat-mdc-notch-piece {\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n  border: none;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n}\n.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-width: 2px;\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));\n  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {\n  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);\n}\n\n.mdc-notched-outline__leading {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));\n}\n[dir=rtl] .mdc-notched-outline__leading {\n  border-left: none;\n  border-right: 1px solid;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__trailing {\n  flex-grow: 1;\n  border-left: none;\n  border-right: 1px solid;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n}\n[dir=rtl] .mdc-notched-outline__trailing {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__notch {\n  flex: 0 0 auto;\n  width: auto;\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {\n  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 1px;\n}\n.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 2px;\n}\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 0;\n  padding-right: 8px;\n  border-top: none;\n}\n[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 8px;\n  padding-right: 0;\n}\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  display: none;\n}\n\n.mdc-line-ripple::before, .mdc-line-ripple::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom-style: solid;\n  content: "";\n}\n.mdc-line-ripple::before {\n  z-index: 1;\n  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {\n  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {\n  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));\n}\n.mdc-line-ripple::after {\n  transform: scaleX(0);\n  opacity: 0;\n  z-index: 2;\n}\n.mdc-text-field--filled .mdc-line-ripple::after {\n  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);\n}\n.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));\n}\n.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));\n}\n\n.mdc-line-ripple--%NS%active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-line-ripple--%NS%deactivating::after {\n  opacity: 0;\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n\n.mat-mdc-form-field-textarea-control {\n  vertical-align: middle;\n  resize: vertical;\n  box-sizing: border-box;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: auto;\n}\n\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n}\n\n.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  line-height: normal;\n  pointer-events: all;\n  will-change: auto;\n}\n\n.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {\n  cursor: inherit;\n}\n\n.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  height: auto;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {\n  height: 23px;\n}\n\n.mat-mdc-text-field-wrapper {\n  height: auto;\n  flex: auto;\n  will-change: auto;\n}\n\n.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n  --%NS%mat-mdc-form-field-label-offset-x: -16px;\n}\n\n.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n[dir=rtl] .mat-mdc-text-field-wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n.mat-form-field-disabled .mdc-text-field__input::placeholder {\n  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {\n  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n  opacity: 1;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {\n  left: auto;\n  right: auto;\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {\n  display: inline-block;\n}\n\n.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n\n.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: none;\n  border-right: 1px solid transparent;\n}\n\n.mat-mdc-form-field-infix {\n  min-height: var(--%NS%mat-form-field-container-height, 56px);\n  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);\n  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);\n}\n.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {\n  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);\n  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {\n  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);\n}\n\n.mdc-text-field--filled .mat-mdc-floating-label {\n  display: var(--%NS%mat-form-field-filled-label-display, block);\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))\n    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));\n  transform: var(--%NS%mat-mdc-form-field-label-transform);\n}\n\n@keyframes _mat-form-field-subscript-animation {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mat-mdc-form-field-subscript-wrapper {\n  box-sizing: border-box;\n  width: 100%;\n  position: relative;\n}\n\n.mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-error-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 16px;\n  opacity: 1;\n  transform: translateY(0);\n  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {\n  position: static;\n}\n\n.mat-mdc-form-field-bottom-align::before {\n  content: "";\n  display: inline-block;\n  height: 16px;\n}\n\n.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {\n  content: unset;\n}\n\n.mat-mdc-form-field-hint-end {\n  order: 1;\n}\n\n.mat-mdc-form-field-hint-wrapper {\n  display: flex;\n}\n\n.mat-mdc-form-field-hint-spacer {\n  flex: 1 0 1em;\n}\n\n.mat-mdc-form-field-error {\n  display: block;\n  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));\n}\n\n.mat-mdc-form-field-subscript-wrapper,\n.mat-mdc-form-field-bottom-align::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));\n  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));\n  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));\n  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));\n  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));\n}\n\n.mat-mdc-form-field-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {\n  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {\n  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);\n}\n\nselect.mat-mdc-form-field-input-control {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: transparent;\n  display: inline-flex;\n  box-sizing: border-box;\n}\nselect.mat-mdc-form-field-input-control:not(:disabled) {\n  cursor: pointer;\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {\n  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {\n  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));\n}\n\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -2.5px;\n  pointer-events: none;\n  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  right: auto;\n  left: 0;\n}\n.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {\n  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {\n  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 15px;\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 0;\n  padding-left: 15px;\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {\n    outline: solid 1px;\n  }\n}\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {\n    outline-color: GrayText;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {\n    outline: dashed 3px;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-form-field.mat-focused .mdc-notched-outline {\n    border: dashed 3px;\n  }\n}\n\n.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {\n  line-height: 1;\n}\n.mat-mdc-form-field-input-control::-webkit-datetime-edit {\n  line-height: 1;\n  padding: 0;\n  margin-bottom: -2px;\n}\n\n.mat-mdc-form-field {\n  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: left;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));\n  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));\n  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));\n  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));\n  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);\n}\n[dir=rtl] .mat-mdc-form-field {\n  text-align: right;\n}\n\n.mat-mdc-form-field-flex {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n}\n\n.mat-mdc-form-field-icon-prefix,\n.mat-mdc-form-field-icon-suffix {\n  align-self: center;\n  line-height: 0;\n  pointer-events: auto;\n  position: relative;\n  z-index: 1;\n}\n.mat-mdc-form-field-icon-prefix > .mat-icon,\n.mat-mdc-form-field-icon-suffix > .mat-icon {\n  padding: 0 12px;\n  box-sizing: content-box;\n}\n\n.mat-mdc-form-field-icon-prefix {\n  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {\n  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-icon-suffix {\n  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {\n  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {\n  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));\n}\n.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {\n  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));\n}\n.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {\n  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));\n}\n\n.mat-mdc-form-field-icon-prefix,\n[dir=rtl] .mat-mdc-form-field-icon-suffix {\n  padding: 0 4px 0 0;\n}\n\n.mat-mdc-form-field-icon-suffix,\n[dir=rtl] .mat-mdc-form-field-icon-prefix {\n  padding: 0 0 0 4px;\n}\n\n.mat-mdc-form-field-subscript-wrapper .mat-icon,\n.mat-mdc-form-field label .mat-icon {\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n}\n\n.mat-mdc-form-field-infix {\n  flex: auto;\n  min-width: 0;\n  width: 180px;\n  position: relative;\n  box-sizing: border-box;\n}\n.mat-mdc-form-field-infix:has(textarea[cols]) {\n  width: auto;\n}\n\n.mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: -1px;\n  -webkit-clip-path: inset(-9em -999em -9em 1px);\n  clip-path: inset(-9em -999em -9em 1px);\n}\n[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: 0;\n  margin-right: -1px;\n  -webkit-clip-path: inset(-9em 1px -9em -999em);\n  clip-path: inset(-9em 1px -9em -999em);\n}\n\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {\n  transition-duration: 75ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {\n  animation-duration: 300ms;\n}\n\n.mdc-notched-outline .mdc-floating-label {\n  max-width: calc(100% + 1px);\n}\n\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: calc(133.3333333333% + 1px);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormField, [{
    type: Component,
    args: [{
      selector: "mat-form-field",
      exportAs: "matFormField",
      host: {
        "class": "mat-mdc-form-field",
        "[class.mat-mdc-form-field-label-always-float]": "_shouldAlwaysFloat()",
        "[class.mat-mdc-form-field-has-icon-prefix]": "_hasIconPrefix",
        "[class.mat-mdc-form-field-has-icon-suffix]": "_hasIconSuffix",
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-hide-placeholder]": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "[class.mat-primary]": 'color !== "accent" && color !== "warn"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")'
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }],
      imports: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div aria-atomic="true" aria-live="polite"\n  class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n  [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  @switch (subscriptMessageType) {\n    @case (\'error\') {\n      <div class="mat-mdc-form-field-error-wrapper">\n        <ng-content select="mat-error, [matError]"></ng-content>\n      </div>\n    }\n\n    @case (\'hint\') {\n      <div class="mat-mdc-form-field-hint-wrapper">\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      </div>\n    }\n  }\n</div>\n',
      styles: ['.mdc-text-field {\n  display: inline-flex;\n  align-items: baseline;\n  padding: 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  will-change: opacity, transform, color;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.mdc-text-field__input {\n  width: 100%;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  background: none;\n  padding: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 28px;\n}\n.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {\n  display: none;\n}\n.mdc-text-field__input::-ms-clear {\n  display: none;\n}\n.mdc-text-field__input:focus {\n  outline: none;\n}\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n.mdc-text-field__input::placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--outlined .mdc-text-field__input {\n  display: flex;\n  border: none !important;\n  background-color: transparent;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  pointer-events: auto;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));\n  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));\n  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-text-field__input {\n    background-color: Window;\n  }\n}\n\n.mdc-text-field--filled {\n  height: 56px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));\n  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled {\n  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));\n}\n\n.mdc-text-field--outlined {\n  height: 56px;\n  overflow: visible;\n  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);\n}\n[dir=rtl] .mdc-text-field--outlined {\n  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);\n  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n}\n\n.mdc-floating-label {\n  position: absolute;\n  left: 0;\n  transform-origin: left top;\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform;\n}\n[dir=rtl] .mdc-floating-label {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n  text-align: right;\n}\n.mdc-text-field .mdc-floating-label {\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.mdc-notched-outline .mdc-floating-label {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  left: 4px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {\n  left: auto;\n  right: 4px;\n}\n.mdc-text-field--filled .mdc-floating-label {\n  left: 16px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--filled .mdc-floating-label {\n  left: auto;\n  right: 16px;\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  cursor: default;\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-floating-label {\n    z-index: 1;\n  }\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {\n  display: none;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--filled .mdc-floating-label {\n  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\n.mdc-floating-label--float-above {\n  cursor: auto;\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-37.25px) scale(1);\n  font-size: 0.75rem;\n}\n.mdc-notched-outline .mdc-floating-label--float-above {\n  text-overflow: clip;\n}\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: 133.3333333333%;\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-34.75px) scale(0.75);\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n\n.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 1px;\n  margin-right: 0;\n  content: "*";\n}\n[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 0;\n  margin-right: 1px;\n}\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none;\n}\n[dir=rtl] .mdc-notched-outline {\n  text-align: right;\n}\n.mdc-text-field--outlined .mdc-notched-outline {\n  z-index: 1;\n}\n\n.mat-mdc-notch-piece {\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n  border: none;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n}\n.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-width: 2px;\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));\n  border-width: var(--mat-form-field-outlined-outline-width, 1px);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {\n  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);\n}\n\n.mdc-notched-outline__leading {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n}\n[dir=rtl] .mdc-notched-outline__leading {\n  border-left: none;\n  border-right: 1px solid;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__trailing {\n  flex-grow: 1;\n  border-left: none;\n  border-right: 1px solid;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n[dir=rtl] .mdc-notched-outline__trailing {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__notch {\n  flex: 0 0 auto;\n  width: auto;\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {\n  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 1px;\n}\n.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 2px;\n}\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 0;\n  padding-right: 8px;\n  border-top: none;\n}\n[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 8px;\n  padding-right: 0;\n}\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  display: none;\n}\n\n.mdc-line-ripple::before, .mdc-line-ripple::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom-style: solid;\n  content: "";\n}\n.mdc-line-ripple::before {\n  z-index: 1;\n  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));\n}\n.mdc-line-ripple::after {\n  transform: scaleX(0);\n  opacity: 0;\n  z-index: 2;\n}\n.mdc-text-field--filled .mdc-line-ripple::after {\n  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));\n}\n\n.mdc-line-ripple--active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-line-ripple--deactivating::after {\n  opacity: 0;\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n\n.mat-mdc-form-field-textarea-control {\n  vertical-align: middle;\n  resize: vertical;\n  box-sizing: border-box;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: auto;\n}\n\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n}\n\n.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  line-height: normal;\n  pointer-events: all;\n  will-change: auto;\n}\n\n.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {\n  cursor: inherit;\n}\n\n.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  height: auto;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {\n  height: 23px;\n}\n\n.mat-mdc-text-field-wrapper {\n  height: auto;\n  flex: auto;\n  will-change: auto;\n}\n\n.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n  --mat-mdc-form-field-label-offset-x: -16px;\n}\n\n.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n[dir=rtl] .mat-mdc-text-field-wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n.mat-form-field-disabled .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n  opacity: 1;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {\n  left: auto;\n  right: auto;\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {\n  display: inline-block;\n}\n\n.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n\n.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: none;\n  border-right: 1px solid transparent;\n}\n\n.mat-mdc-form-field-infix {\n  min-height: var(--mat-form-field-container-height, 56px);\n  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);\n  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);\n}\n.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {\n  padding-top: var(--mat-form-field-container-vertical-padding, 16px);\n  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {\n  top: calc(var(--mat-form-field-container-height, 56px) / 2);\n}\n\n.mdc-text-field--filled .mat-mdc-floating-label {\n  display: var(--mat-form-field-filled-label-display, block);\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))\n    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));\n  transform: var(--mat-mdc-form-field-label-transform);\n}\n\n@keyframes _mat-form-field-subscript-animation {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mat-mdc-form-field-subscript-wrapper {\n  box-sizing: border-box;\n  width: 100%;\n  position: relative;\n}\n\n.mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-error-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 16px;\n  opacity: 1;\n  transform: translateY(0);\n  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {\n  position: static;\n}\n\n.mat-mdc-form-field-bottom-align::before {\n  content: "";\n  display: inline-block;\n  height: 16px;\n}\n\n.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {\n  content: unset;\n}\n\n.mat-mdc-form-field-hint-end {\n  order: 1;\n}\n\n.mat-mdc-form-field-hint-wrapper {\n  display: flex;\n}\n\n.mat-mdc-form-field-hint-spacer {\n  flex: 1 0 1em;\n}\n\n.mat-mdc-form-field-error {\n  display: block;\n  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));\n}\n\n.mat-mdc-form-field-subscript-wrapper,\n.mat-mdc-form-field-bottom-align::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));\n  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));\n  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));\n  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));\n  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));\n}\n\n.mat-mdc-form-field-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {\n  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {\n  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);\n}\n\nselect.mat-mdc-form-field-input-control {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: transparent;\n  display: inline-flex;\n  box-sizing: border-box;\n}\nselect.mat-mdc-form-field-input-control:not(:disabled) {\n  cursor: pointer;\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {\n  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {\n  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));\n}\n\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -2.5px;\n  pointer-events: none;\n  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  right: auto;\n  left: 0;\n}\n.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {\n  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {\n  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 15px;\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 0;\n  padding-left: 15px;\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {\n    outline: solid 1px;\n  }\n}\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {\n    outline-color: GrayText;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {\n    outline: dashed 3px;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-form-field.mat-focused .mdc-notched-outline {\n    border: dashed 3px;\n  }\n}\n\n.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {\n  line-height: 1;\n}\n.mat-mdc-form-field-input-control::-webkit-datetime-edit {\n  line-height: 1;\n  padding: 0;\n  margin-bottom: -2px;\n}\n\n.mat-mdc-form-field {\n  --mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: left;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));\n  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: var(--mat-form-field-outlined-label-text-populated-size);\n}\n[dir=rtl] .mat-mdc-form-field {\n  text-align: right;\n}\n\n.mat-mdc-form-field-flex {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n}\n\n.mat-mdc-form-field-icon-prefix,\n.mat-mdc-form-field-icon-suffix {\n  align-self: center;\n  line-height: 0;\n  pointer-events: auto;\n  position: relative;\n  z-index: 1;\n}\n.mat-mdc-form-field-icon-prefix > .mat-icon,\n.mat-mdc-form-field-icon-suffix > .mat-icon {\n  padding: 0 12px;\n  box-sizing: content-box;\n}\n\n.mat-mdc-form-field-icon-prefix {\n  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {\n  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));\n}\n.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));\n}\n.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));\n}\n\n.mat-mdc-form-field-icon-prefix,\n[dir=rtl] .mat-mdc-form-field-icon-suffix {\n  padding: 0 4px 0 0;\n}\n\n.mat-mdc-form-field-icon-suffix,\n[dir=rtl] .mat-mdc-form-field-icon-prefix {\n  padding: 0 0 0 4px;\n}\n\n.mat-mdc-form-field-subscript-wrapper .mat-icon,\n.mat-mdc-form-field label .mat-icon {\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n}\n\n.mat-mdc-form-field-infix {\n  flex: auto;\n  min-width: 0;\n  width: 180px;\n  position: relative;\n  box-sizing: border-box;\n}\n.mat-mdc-form-field-infix:has(textarea[cols]) {\n  width: auto;\n}\n\n.mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: -1px;\n  -webkit-clip-path: inset(-9em -999em -9em 1px);\n  clip-path: inset(-9em -999em -9em 1px);\n}\n[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: 0;\n  margin-right: -1px;\n  -webkit-clip-path: inset(-9em 1px -9em -999em);\n  clip-path: inset(-9em 1px -9em -999em);\n}\n\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {\n  transition-duration: 75ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {\n  animation-duration: 300ms;\n}\n\n.mdc-notched-outline .mdc-floating-label {\n  max-width: calc(100% + 1px);\n}\n\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: calc(133.3333333333% + 1px);\n}\n']
    }]
  }], () => [], {
    _textField: [{
      type: ViewChild,
      args: ["textField"]
    }],
    _iconPrefixContainer: [{
      type: ViewChild,
      args: ["iconPrefixContainer"]
    }],
    _textPrefixContainer: [{
      type: ViewChild,
      args: ["textPrefixContainer"]
    }],
    _iconSuffixContainer: [{
      type: ViewChild,
      args: ["iconSuffixContainer"]
    }],
    _textSuffixContainer: [{
      type: ViewChild,
      args: ["textSuffixContainer"]
    }],
    _floatingLabel: [{
      type: ViewChild,
      args: [MatFormFieldFloatingLabel]
    }],
    _notchedOutline: [{
      type: ViewChild,
      args: [MatFormFieldNotchedOutline]
    }],
    _lineRipple: [{
      type: ViewChild,
      args: [MatFormFieldLineRipple]
    }],
    _iconPrefixContainerSignal: [{
      type: ViewChild,
      args: ["iconPrefixContainer", {
        isSignal: true
      }]
    }],
    _textPrefixContainerSignal: [{
      type: ViewChild,
      args: ["textPrefixContainer", {
        isSignal: true
      }]
    }],
    _iconSuffixContainerSignal: [{
      type: ViewChild,
      args: ["iconSuffixContainer", {
        isSignal: true
      }]
    }],
    _textSuffixContainerSignal: [{
      type: ViewChild,
      args: ["textSuffixContainer", {
        isSignal: true
      }]
    }],
    _formFieldControl: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }],
    _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }],
    _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: ContentChildren,
      args: [MatHint, {
        descendants: true
      }]
    }],
    _labelChild: [{
      type: ContentChild,
      args: [forwardRef(() => MatLabel), {
        isSignal: true
      }]
    }],
    hideRequiredMarker: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    subscriptSizing: [{
      type: Input
    }],
    hintLabel: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/material/fesm2022/form-field.mjs
var MatFormFieldModule = class _MatFormFieldModule {
  static \u0275fac = function MatFormFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatFormFieldModule,
    imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ObserversModule, MatFormField, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var FIELD_TREE = /* @__PURE__ */ Symbol("FIELD_TREE");
var boundPathDepth = 0;
function getBoundPathDepth() {
  return boundPathDepth;
}
function setBoundPathDepthForResolution(fn, depth) {
  return (...args) => {
    try {
      boundPathDepth = depth;
      return fn(...args);
    } finally {
      boundPathDepth = 0;
    }
  };
}
function shortCircuitFalse(value) {
  return !value;
}
function shortCircuitTrue(value) {
  return value;
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return (typeof value === "object" || typeof value === "function") && value != null;
}
var DYNAMIC = /* @__PURE__ */ Symbol();
var IGNORED = /* @__PURE__ */ Symbol();
var AbstractLogic = class {
  predicates;
  fns = [];
  constructor(predicates) {
    this.predicates = predicates;
  }
  push(logicFn) {
    this.fns.push(wrapWithPredicates(this.predicates, logicFn));
  }
  mergeIn(other) {
    const fns = this.predicates ? other.fns.map((fn) => wrapWithPredicates(this.predicates, fn)) : other.fns;
    this.fns.push(...fns);
  }
  hasRules() {
    return this.fns.length > 0;
  }
};
var BooleanOrLogic = class extends AbstractLogic {
  get defaultValue() {
    return false;
  }
  compute(arg) {
    return this.fns.some((f) => {
      const result = f(arg);
      return result && result !== IGNORED;
    });
  }
};
var ArrayMergeIgnoreLogic = class _ArrayMergeIgnoreLogic extends AbstractLogic {
  ignore;
  static ignoreNull(predicates) {
    return new _ArrayMergeIgnoreLogic(predicates, (e) => e === null);
  }
  constructor(predicates, ignore) {
    super(predicates);
    this.ignore = ignore;
  }
  get defaultValue() {
    return [];
  }
  compute(arg) {
    return this.fns.reduce((prev, f) => {
      const value = f(arg);
      if (value === void 0 || value === IGNORED) {
        return prev;
      } else if (isArray(value)) {
        return [...prev, ...this.ignore ? value.filter((e) => !this.ignore(e)) : value];
      } else {
        if (this.ignore && this.ignore(value)) {
          return prev;
        }
        return [...prev, value];
      }
    }, []);
  }
};
var ArrayMergeLogic = class extends ArrayMergeIgnoreLogic {
  constructor(predicates) {
    super(predicates, void 0);
  }
};
var MetadataMergeLogic = class extends AbstractLogic {
  key;
  get defaultValue() {
    return this.key.reducer.getInitial();
  }
  constructor(predicates, key) {
    super(predicates);
    this.key = key;
  }
  compute(ctx) {
    if (this.fns.length === 0) {
      return this.key.reducer.getInitial();
    }
    let acc = this.key.reducer.getInitial();
    for (let i = 0; i < this.fns.length; i++) {
      const item = this.fns[i](ctx);
      if (item !== IGNORED) {
        acc = this.key.reducer.reduce(acc, item);
      }
    }
    return acc;
  }
};
function wrapWithPredicates(predicates, logicFn) {
  if (predicates.length === 0) {
    return logicFn;
  }
  return (arg) => {
    for (const predicate of predicates) {
      let predicateField = arg.stateOf(predicate.path);
      const depthDiff = untracked(predicateField.structure.pathKeys).length - predicate.depth;
      for (let i = 0; i < depthDiff; i++) {
        predicateField = predicateField.structure.parent;
      }
      if (!predicate.fn(predicateField.context)) {
        return IGNORED;
      }
    }
    return logicFn(arg);
  };
}
var LogicContainer = class {
  predicates;
  hidden;
  disabledReasons;
  readonly;
  syncErrors;
  syncTreeErrors;
  asyncErrors;
  metadata = /* @__PURE__ */ new Map();
  constructor(predicates) {
    this.predicates = predicates;
    this.hidden = new BooleanOrLogic(predicates);
    this.disabledReasons = new ArrayMergeLogic(predicates);
    this.readonly = new BooleanOrLogic(predicates);
    this.syncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    this.syncTreeErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    this.asyncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
  }
  hasAnyLogic() {
    return this.hidden.hasRules() || this.disabledReasons.hasRules() || this.readonly.hasRules() || this.syncErrors.hasRules() || this.syncTreeErrors.hasRules() || this.asyncErrors.hasRules() || this.metadata.size > 0;
  }
  hasMetadata(key) {
    return this.metadata.has(key);
  }
  hasMetadataKeys() {
    return this.metadata.size > 0;
  }
  getMetadataKeys() {
    return this.metadata.keys();
  }
  getMetadata(key) {
    if (!this.metadata.has(key)) {
      this.metadata.set(key, new MetadataMergeLogic(this.predicates, key));
    }
    return this.metadata.get(key);
  }
  mergeIn(other) {
    this.hidden.mergeIn(other.hidden);
    this.disabledReasons.mergeIn(other.disabledReasons);
    this.readonly.mergeIn(other.readonly);
    this.syncErrors.mergeIn(other.syncErrors);
    this.syncTreeErrors.mergeIn(other.syncTreeErrors);
    this.asyncErrors.mergeIn(other.asyncErrors);
    for (const key of other.getMetadataKeys()) {
      const metadataLogic = other.metadata.get(key);
      this.getMetadata(key).mergeIn(metadataLogic);
    }
  }
};
var AbstractLogicNodeBuilder = class {
  depth;
  constructor(depth) {
    this.depth = depth;
  }
  build() {
    return new LeafLogicNode(this, [], 0);
  }
};
var LogicNodeBuilder = class _LogicNodeBuilder extends AbstractLogicNodeBuilder {
  constructor(depth) {
    super(depth);
  }
  current;
  all = [];
  addHiddenRule(logic) {
    this.getCurrent().addHiddenRule(logic);
  }
  addDisabledReasonRule(logic) {
    this.getCurrent().addDisabledReasonRule(logic);
  }
  addReadonlyRule(logic) {
    this.getCurrent().addReadonlyRule(logic);
  }
  addSyncErrorRule(logic) {
    this.getCurrent().addSyncErrorRule(logic);
  }
  addSyncTreeErrorRule(logic) {
    this.getCurrent().addSyncTreeErrorRule(logic);
  }
  addAsyncErrorRule(logic) {
    this.getCurrent().addAsyncErrorRule(logic);
  }
  addMetadataRule(key, logic) {
    this.getCurrent().addMetadataRule(key, logic);
  }
  getChild(key) {
    if (key === DYNAMIC) {
      const children = this.getCurrent().children;
      if (children.size > (children.has(DYNAMIC) ? 1 : 0)) {
        this.current = void 0;
      }
    }
    return this.getCurrent().getChild(key);
  }
  hasLogic(builder) {
    if (this === builder) {
      return true;
    }
    return this.all.some(({
      builder: subBuilder
    }) => subBuilder.hasLogic(builder));
  }
  hasRules() {
    return this.all.length > 0;
  }
  anyChildHasLogic() {
    return this.all.some(({
      builder
    }) => builder.anyChildHasLogic());
  }
  mergeIn(other, predicate) {
    if (predicate) {
      this.all.push({
        builder: other,
        predicate: {
          fn: setBoundPathDepthForResolution(predicate.fn, this.depth),
          path: predicate.path
        }
      });
    } else {
      this.all.push({
        builder: other
      });
    }
    this.current = void 0;
  }
  getCurrent() {
    if (this.current === void 0) {
      this.current = new NonMergeableLogicNodeBuilder(this.depth);
      this.all.push({
        builder: this.current
      });
    }
    return this.current;
  }
  static newRoot() {
    return new _LogicNodeBuilder(0);
  }
};
var NonMergeableLogicNodeBuilder = class extends AbstractLogicNodeBuilder {
  logic = new LogicContainer([]);
  children = /* @__PURE__ */ new Map();
  constructor(depth) {
    super(depth);
  }
  addHiddenRule(logic) {
    this.logic.hidden.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addDisabledReasonRule(logic) {
    this.logic.disabledReasons.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addReadonlyRule(logic) {
    this.logic.readonly.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addSyncErrorRule(logic) {
    this.logic.syncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addSyncTreeErrorRule(logic) {
    this.logic.syncTreeErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addAsyncErrorRule(logic) {
    this.logic.asyncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addMetadataRule(key, logic) {
    this.logic.getMetadata(key).push(setBoundPathDepthForResolution(logic, this.depth));
  }
  getChild(key) {
    if (!this.children.has(key)) {
      this.children.set(key, new LogicNodeBuilder(this.depth + 1));
    }
    return this.children.get(key);
  }
  hasLogic(builder) {
    return this === builder;
  }
  hasRules() {
    return this.logic.hasAnyLogic() || this.children.size > 0;
  }
  anyChildHasLogic() {
    for (const child of this.children.values()) {
      if (child.hasRules()) {
        return true;
      }
    }
    return false;
  }
};
var LeafLogicNode = class _LeafLogicNode {
  builder;
  predicates;
  depth;
  logic;
  constructor(builder, predicates, depth) {
    this.builder = builder;
    this.predicates = predicates;
    this.depth = depth;
    this.logic = builder ? createLogic(builder, predicates, depth) : new LogicContainer([]);
  }
  getChild(key) {
    const childBuilders = this.builder ? getAllChildBuilders(this.builder, key) : [];
    if (childBuilders.length === 0) {
      return new _LeafLogicNode(void 0, [], this.depth + 1);
    } else if (childBuilders.length === 1) {
      const {
        builder,
        predicates
      } = childBuilders[0];
      return new _LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1);
    } else {
      const builtNodes = childBuilders.map(({
        builder,
        predicates
      }) => new _LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1));
      return new CompositeLogicNode(builtNodes);
    }
  }
  hasLogic(builder) {
    if (!this.builder) {
      return false;
    }
    return this.builder.hasLogic(builder);
  }
  hasRules() {
    return this.builder ? this.builder.hasRules() : false;
  }
  anyChildHasLogic() {
    return this.builder ? this.builder.anyChildHasLogic() : false;
  }
};
var CompositeLogicNode = class _CompositeLogicNode {
  all;
  logic;
  constructor(all) {
    this.all = all;
    this.logic = new LogicContainer([]);
    for (const node of all) {
      this.logic.mergeIn(node.logic);
    }
  }
  getChild(key) {
    return new _CompositeLogicNode(this.all.flatMap((child) => child.getChild(key)));
  }
  hasLogic(builder) {
    return this.all.some((node) => node.hasLogic(builder));
  }
  hasRules() {
    return this.all.some((node) => node.hasRules());
  }
  anyChildHasLogic() {
    return this.all.some((child) => child.anyChildHasLogic());
  }
};
function getAllChildBuilders(builder, key) {
  if (builder instanceof LogicNodeBuilder) {
    return builder.all.flatMap(({
      builder: builder2,
      predicate
    }) => {
      const children = getAllChildBuilders(builder2, key);
      if (predicate) {
        return children.map(({
          builder: builder3,
          predicates
        }) => ({
          builder: builder3,
          predicates: [...predicates, predicate]
        }));
      }
      return children;
    });
  } else if (builder instanceof NonMergeableLogicNodeBuilder) {
    return [...key !== DYNAMIC && builder.children.has(DYNAMIC) ? [{
      builder: builder.getChild(DYNAMIC),
      predicates: []
    }] : [], ...builder.children.has(key) ? [{
      builder: builder.getChild(key),
      predicates: []
    }] : []];
  } else {
    throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
  }
}
function createLogic(builder, predicates, depth) {
  const logic = new LogicContainer(predicates);
  if (builder instanceof LogicNodeBuilder) {
    const builtNodes = builder.all.map(({
      builder: builder2,
      predicate
    }) => new LeafLogicNode(builder2, predicate ? [...predicates, bindLevel(predicate, depth)] : predicates, depth));
    for (const node of builtNodes) {
      logic.mergeIn(node.logic);
    }
  } else if (builder instanceof NonMergeableLogicNodeBuilder) {
    logic.mergeIn(builder.logic);
  } else {
    throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
  }
  return logic;
}
function bindLevel(predicate, depth) {
  return __spreadProps(__spreadValues({}, predicate), {
    depth
  });
}
var PATH = /* @__PURE__ */ Symbol("PATH");
var FieldPathNode = class _FieldPathNode {
  keys;
  parent;
  keyInParent;
  root;
  children = /* @__PURE__ */ new Map();
  fieldPathProxy = new Proxy(this, FIELD_PATH_PROXY_HANDLER);
  logicBuilder;
  constructor(keys, root, parent, keyInParent) {
    this.keys = keys;
    this.parent = parent;
    this.keyInParent = keyInParent;
    this.root = root ?? this;
    if (!parent) {
      this.logicBuilder = LogicNodeBuilder.newRoot();
    }
  }
  get builder() {
    if (this.logicBuilder) {
      return this.logicBuilder;
    }
    return this.parent.builder.getChild(this.keyInParent);
  }
  getChild(key) {
    if (!this.children.has(key)) {
      this.children.set(key, new _FieldPathNode([...this.keys, key], this.root, this, key));
    }
    return this.children.get(key);
  }
  mergeIn(other, predicate) {
    const path = other.compile();
    this.builder.mergeIn(path.builder, predicate);
  }
  static unwrapFieldPath(formPath) {
    return formPath[PATH];
  }
  static newRoot() {
    return new _FieldPathNode([], void 0, void 0, void 0);
  }
};
var FIELD_PATH_PROXY_HANDLER = {
  get(node, property) {
    if (property === PATH) {
      return node;
    }
    return node.getChild(property).fieldPathProxy;
  }
};
var currentCompilingNode = void 0;
var compiledSchemas = /* @__PURE__ */ new Map();
var SchemaImpl = class _SchemaImpl {
  schemaFn;
  constructor(schemaFn) {
    this.schemaFn = schemaFn;
  }
  compile() {
    if (compiledSchemas.has(this)) {
      return compiledSchemas.get(this);
    }
    const path = FieldPathNode.newRoot();
    compiledSchemas.set(this, path);
    let prevCompilingNode = currentCompilingNode;
    try {
      currentCompilingNode = path;
      this.schemaFn(path.fieldPathProxy);
    } finally {
      currentCompilingNode = prevCompilingNode;
    }
    return path;
  }
  static create(schema2) {
    if (schema2 instanceof _SchemaImpl) {
      return schema2;
    }
    return new _SchemaImpl(schema2);
  }
  static rootCompile(schema2) {
    try {
      compiledSchemas.clear();
      if (schema2 === void 0) {
        return FieldPathNode.newRoot();
      }
      if (schema2 instanceof _SchemaImpl) {
        return schema2.compile();
      }
      return new _SchemaImpl(schema2).compile();
    } finally {
      compiledSchemas.clear();
    }
  }
};
function isSchemaOrSchemaFn(value) {
  return value instanceof SchemaImpl || typeof value === "function";
}
function assertPathIsCurrent(path) {
  if (currentCompilingNode !== FieldPathNode.unwrapFieldPath(path).root) {
    throw new RuntimeError(1908, ngDevMode && `A FieldPath can only be used directly within the Schema that owns it, **not** outside of it or within a sub-schema.`);
  }
}
function metadata(path, key, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addMetadataRule(key, logic);
  return key;
}
var MetadataReducer = {
  list() {
    return {
      reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
      getInitial: () => []
    };
  },
  min() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item < acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  max() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item > acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  or() {
    return {
      reduce: (prev, next) => prev || next,
      getInitial: () => false
    };
  },
  and() {
    return {
      reduce: (prev, next) => prev && next,
      getInitial: () => true
    };
  },
  override
};
function override(getInitial) {
  return {
    reduce: (_, item) => item,
    getInitial: () => getInitial?.()
  };
}
var IS_ASYNC_VALIDATION_RESOURCE = /* @__PURE__ */ Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
  reducer;
  create;
  brand;
  [IS_ASYNC_VALIDATION_RESOURCE];
  constructor(reducer, create) {
    this.reducer = reducer;
    this.create = create;
  }
};
function createMetadataKey(reducer) {
  return new MetadataKey(reducer ?? MetadataReducer.override());
}
function createLimitSelectionKey() {
  return createMetadataKey();
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createLimitSelectionKey();
var MIN_DATE = createMetadataKey(MetadataReducer.max());
var MIN_NUMBER = createMetadataKey(MetadataReducer.max());
var MAX = createLimitSelectionKey();
var MAX_DATE = createMetadataKey(MetadataReducer.min());
var MAX_NUMBER = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!Object.is(a[i], b[i])) return false;
  }
  return true;
}
function calculateValidationSelfStatus(state) {
  if (state.errors().length > 0) {
    return "invalid";
  }
  if (state.pending()) {
    return "unknown";
  }
  return "valid";
}
var FieldValidationState = class {
  node;
  constructor(node) {
    this.node = node;
  }
  rawSyncTreeErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawSyncTreeErrors() ?? []];
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rawSyncTreeErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  syncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.syncErrors.compute(this.node.context), ...this.syncTreeErrors(), ...normalizeErrors(this.node.submitState.submissionErrors())];
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "syncErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  syncValid = computed(() => {
    if (this.shouldSkipValidation()) {
      return true;
    }
    return this.node.structure.reduceChildren(this.syncErrors().length === 0, (child, value) => value && child.validationState.syncValid(), shortCircuitFalse);
  }, ...ngDevMode ? [{
    debugName: "syncValid"
  }] : []);
  syncTreeErrors = computed(() => this.rawSyncTreeErrors().filter((err) => err.fieldTree === this.node.fieldTree), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "syncTreeErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  rawAsyncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.asyncErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawAsyncErrors() ?? []];
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rawAsyncErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  asyncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return this.rawAsyncErrors().filter((err) => err === "pending" || err.fieldTree === this.node.fieldTree);
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "asyncErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  parseErrors = computed(() => this.node.formFieldBindings().flatMap((field) => field.parseErrors()), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "parseErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errors = computed(() => [...this.parseErrors(), ...this.syncErrors(), ...this.asyncErrors().filter((err) => err !== "pending")], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errorSummary = computed(() => {
    const errors = this.node.structure.reduceChildren(this.errors(), (child, result) => [...result, ...child.errorSummary()]);
    if (true) {
      untracked(() => errors.sort(compareErrorPosition));
    }
    return errors;
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errorSummary"
  } : {}), {
    equal: shallowArrayEquals
  }));
  pending = computed(() => this.node.structure.reduceChildren(this.asyncErrors().includes("pending"), (child, value) => value || child.validationState.pending()), ...ngDevMode ? [{
    debugName: "pending"
  }] : []);
  status = computed(() => {
    if (this.shouldSkipValidation()) {
      return "valid";
    }
    let ownStatus = calculateValidationSelfStatus(this);
    return this.node.structure.reduceChildren(ownStatus, (child, value) => {
      if (value === "invalid" || child.validationState.status() === "invalid") {
        return "invalid";
      } else if (value === "unknown" || child.validationState.status() === "unknown") {
        return "unknown";
      }
      return "valid";
    }, (v) => v === "invalid");
  }, ...ngDevMode ? [{
    debugName: "status"
  }] : []);
  valid = computed(() => this.status() === "valid", ...ngDevMode ? [{
    debugName: "valid"
  }] : []);
  invalid = computed(() => this.status() === "invalid", ...ngDevMode ? [{
    debugName: "invalid"
  }] : []);
  shouldSkipValidation = computed(() => this.node.hidden() || this.node.disabled() || this.node.readonly() || this.node.structure.isOrphaned(), ...ngDevMode ? [{
    debugName: "shouldSkipValidation"
  }] : []);
};
function normalizeErrors(error) {
  if (error === void 0) {
    return [];
  }
  if (isArray(error)) {
    return error;
  }
  return [error];
}
function addDefaultField(errors, fieldTree) {
  if (isArray(errors)) {
    for (const error of errors) {
      error.fieldTree ??= fieldTree;
    }
  } else if (errors) {
    errors.fieldTree ??= fieldTree;
  }
  return errors;
}
function getFirstBoundElement(error) {
  if (error.formField) return error.formField.element;
  return error.fieldTree().formFieldBindings().reduce((el, binding) => {
    if (!el || !binding.element) return el ?? binding.element;
    return el.compareDocumentPosition(binding.element) & Node.DOCUMENT_POSITION_PRECEDING ? binding.element : el;
  }, void 0);
}
function compareErrorPosition(a, b) {
  const aEl = getFirstBoundElement(a);
  const bEl = getFirstBoundElement(b);
  if (aEl === bEl) return 0;
  if (aEl === void 0 || bEl === void 0) return aEl === void 0 ? 1 : -1;
  return aEl.compareDocumentPosition(bEl) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
}
var DEBOUNCER = createMetadataKey();
var FieldNodeContext = class {
  node;
  cache = /* @__PURE__ */ new WeakMap();
  constructor(node) {
    this.node = node;
    this.fieldTreeOf = this.fieldTreeOf.bind(this);
    this.stateOf = this.stateOf.bind(this);
  }
  resolve(target) {
    if (!this.cache.has(target)) {
      const resolver = computed(() => {
        const targetPathNode = FieldPathNode.unwrapFieldPath(target);
        let field = this.node;
        let stepsRemaining = getBoundPathDepth();
        while (stepsRemaining > 0 || !field.structure.logic.hasLogic(targetPathNode.root.builder)) {
          stepsRemaining--;
          field = field.structure.parent;
          if (field === void 0) {
            throw new RuntimeError(1900, ngDevMode && "Path is not part of this field tree.");
          }
        }
        for (let key of targetPathNode.keys) {
          field = field.structure.getChild(key);
          if (field === void 0) {
            throw new RuntimeError(1901, ngDevMode && `Cannot resolve path .${targetPathNode.keys.join(".")} relative to field ${["<root>", ...this.node.structure.pathKeys()].join(".")}.`);
          }
        }
        return field.fieldTree;
      }, ...ngDevMode ? [{
        debugName: "resolver"
      }] : []);
      this.cache.set(target, resolver);
    }
    return this.cache.get(target)();
  }
  get fieldTree() {
    return this.node.fieldProxy;
  }
  get state() {
    return this.node;
  }
  get value() {
    return this.node.structure.value;
  }
  get key() {
    return this.node.structure.keyInParent;
  }
  get pathKeys() {
    return this.node.structure.pathKeys;
  }
  index = computed(() => {
    const key = this.key();
    if (!isArray(untracked(this.node.structure.parent.value))) {
      throw new RuntimeError(1906, ngDevMode && "Cannot access index, parent field is not an array.");
    }
    return Number(key);
  }, ...ngDevMode ? [{
    debugName: "index"
  }] : []);
  fieldTreeOf(p) {
    return this.resolve(p);
  }
  stateOf(p) {
    return this.resolve(p)();
  }
  valueOf = (p) => {
    const result = this.resolve(p)().value();
    if (result instanceof AbstractControl) {
      throw new RuntimeError(1907, ngDevMode && `Tried to read an 'AbstractControl' value from a 'form()'. Did you mean to use 'compatForm()' instead?`);
    }
    return result;
  };
};
var FieldMetadataState = class {
  node;
  metadata = /* @__PURE__ */ new Map();
  constructor(node) {
    this.node = node;
  }
  runMetadataCreateLifecycle() {
    if (!this.node.logicNode.logic.hasMetadataKeys()) {
      return;
    }
    const wasInParams = isInParamsFunction();
    if (wasInParams) setInParamsFunction(false);
    try {
      untracked(() => runInInjectionContext(this.node.structure.injector, () => {
        for (const key of this.node.logicNode.logic.getMetadataKeys()) {
          if (key.create) {
            const logic = this.node.logicNode.logic.getMetadata(key);
            const result = key.create(this.node, computed(() => logic.compute(this.node.context)));
            this.metadata.set(key, result);
          }
        }
      }));
    } finally {
      if (wasInParams) setInParamsFunction(true);
    }
  }
  get(key) {
    if (this.has(key)) {
      if (!this.metadata.has(key)) {
        if (key.create) {
          throw new RuntimeError(1912, ngDevMode && "Managed metadata cannot be created lazily");
        }
        const logic = this.node.logicNode.logic.getMetadata(key);
        this.metadata.set(key, computed(() => logic.compute(this.node.context)));
      }
    }
    return this.metadata.get(key);
  }
  has(key) {
    return this.node.logicNode.logic.hasMetadata(key);
  }
};
var FIELD_PROXY_HANDLER = {
  get(getTgt, property, receiver) {
    if (property === FIELD_TREE) {
      return true;
    }
    const tgt = getTgt();
    const child = tgt.structure.getChild(property);
    if (child !== void 0) {
      return child.fieldTree;
    }
    const value = untracked(tgt.value);
    if (isArray(value)) {
      if (property === "length") {
        return tgt.value().length;
      }
      if (property === Symbol.iterator) {
        return () => {
          tgt.value();
          return Array.prototype[Symbol.iterator].apply(tgt.fieldTree);
        };
      }
    }
    if (isObject(value)) {
      if (property === Symbol.iterator) {
        return function* () {
          for (const key in receiver) {
            yield [key, receiver[key]];
          }
        };
      }
    }
    return void 0;
  },
  getOwnPropertyDescriptor(getTgt, prop) {
    const value = untracked(getTgt().value);
    const desc = Reflect.getOwnPropertyDescriptor(value, prop);
    if (desc && !desc.configurable) {
      desc.configurable = true;
    }
    return desc;
  },
  ownKeys(getTgt) {
    const value = untracked(getTgt().value);
    return typeof value === "object" && value !== null ? Reflect.ownKeys(value) : [];
  }
};
function deepSignal(source, prop) {
  const read = computed(() => source()[prop()]);
  read[SIGNAL] = source[SIGNAL];
  read.set = (value) => {
    if (Object.is(untracked(read), value)) {
      return;
    }
    source.update((current) => valueForWrite(current, value, prop()));
  };
  read.update = (fn) => {
    read.set(fn(untracked(read)));
  };
  read.asReadonly = () => read;
  return read;
}
function valueForWrite(sourceValue, newPropValue, prop) {
  if (isArray(sourceValue)) {
    const newValue = [...sourceValue];
    newValue[prop] = newPropValue;
    return newValue;
  } else {
    return __spreadProps(__spreadValues({}, sourceValue), {
      [prop]: newPropValue
    });
  }
}
var ORPHAN_TOKEN = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "ORPHAN_TOKEN" : "");
var FALSE_SIGNAL = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE_SIGNAL"
}] : []);
var FieldNodeStructure = class {
  logic;
  node;
  createChildNode;
  identitySymbol = /* @__PURE__ */ Symbol();
  _injector = void 0;
  _anyChildHasLogic;
  get injector() {
    this._injector ??= Injector.create({
      providers: [],
      parent: this.fieldManager.injector
    });
    return this._injector;
  }
  constructor(logic, node, createChildNode) {
    this.logic = logic;
    this.node = node;
    this.createChildNode = createChildNode;
  }
  children() {
    this.ensureChildrenMap();
    const map2 = this.childrenMap();
    if (map2 === void 0) {
      return [];
    }
    return Array.from(map2.byPropertyKey.values()).map((child) => untracked(child.reader));
  }
  materializedChildren() {
    const map2 = this.childrenMap();
    if (map2 === void 0) {
      return [];
    }
    return Array.from(map2.byPropertyKey.values()).map((child) => child.node);
  }
  _areChildrenMaterialized() {
    return untracked(this.childrenMap) !== void 0;
  }
  ensureChildrenMap() {
    if (this._areChildrenMaterialized()) {
      return;
    }
    untracked(() => {
      this.childrenMap.update((current) => this.computeChildrenMap(this.value(), current, true));
    });
  }
  getChild(key) {
    this.ensureChildrenMap();
    const strKey = key.toString();
    let reader = untracked(this.childrenMap)?.byPropertyKey.get(strKey)?.reader;
    if (!reader) {
      reader = this.createReader(strKey);
    }
    return reader();
  }
  reduceChildren(initialValue, fn, shortCircuit) {
    const map2 = this.childrenMap();
    if (!map2) {
      return initialValue;
    }
    let value = initialValue;
    for (const child of map2.byPropertyKey.values()) {
      if (shortCircuit?.(value)) {
        break;
      }
      value = fn(untracked(child.reader), value);
    }
    return value;
  }
  destroy() {
    this.injector.destroy();
  }
  createKeyOrOrphanSignals(kind, identityInParent, initialKeyInParent) {
    if (kind === "root") {
      return {
        keyInParent: ROOT_KEY_IN_PARENT,
        isOrphaned: FALSE_SIGNAL
      };
    }
    const parent = this.parent;
    let lastKnownKey = initialKeyInParent;
    const keyOrOrphan = computed(() => {
      if (parent.structure.isOrphaned()) {
        return ORPHAN_TOKEN;
      }
      const map2 = parent.structure.childrenMap();
      if (!map2) {
        return ORPHAN_TOKEN;
      }
      const lastKnownChild = map2.byPropertyKey.get(lastKnownKey);
      if (lastKnownChild && lastKnownChild.node === this.node) {
        return lastKnownKey;
      }
      if (identityInParent === void 0) {
        return ORPHAN_TOKEN;
      } else {
        for (const [key, child] of map2.byPropertyKey) {
          if (child.node === this.node) {
            return lastKnownKey = key;
          }
        }
        return ORPHAN_TOKEN;
      }
    }, ...ngDevMode ? [{
      debugName: "keyOrOrphan"
    }] : []);
    const isOrphaned = computed(() => keyOrOrphan() === ORPHAN_TOKEN, ...ngDevMode ? [{
      debugName: "isOrphaned"
    }] : []);
    const keyInParent = computed(() => {
      const key = keyOrOrphan();
      if (key === ORPHAN_TOKEN) {
        if (identityInParent === void 0) {
          throw new RuntimeError(-1902, ngDevMode && `Orphan field, looking for property '${initialKeyInParent}' of ${getDebugName(parent)}`);
        } else {
          throw new RuntimeError(1904, ngDevMode && `Orphan field, can't find element in array ${getDebugName(parent)}`);
        }
      }
      return key;
    }, ...ngDevMode ? [{
      debugName: "keyInParent"
    }] : []);
    return {
      keyInParent,
      isOrphaned
    };
  }
  createChildrenMap() {
    return linkedSignal({
      source: this.value,
      computation: (value, previous) => this.computeChildrenMap(value, previous?.value, false)
    });
  }
  computeChildrenMap(value, prevData, forceMaterialize) {
    if (!isObject(value)) {
      return void 0;
    }
    if (!forceMaterialize && prevData === void 0) {
      if (!(this._anyChildHasLogic ??= this.logic.anyChildHasLogic())) {
        return void 0;
      }
    }
    prevData ??= {
      byPropertyKey: /* @__PURE__ */ new Map()
    };
    let materializedChildren;
    const parentIsArray = isArray(value);
    if (prevData !== void 0) {
      if (parentIsArray) {
        materializedChildren = maybeRemoveStaleArrayFields(prevData, value, this.identitySymbol);
      } else {
        materializedChildren = maybeRemoveStaleObjectFields(prevData, value);
      }
    }
    for (const key of Object.keys(value)) {
      let trackingKey = void 0;
      const childValue = value[key];
      if (childValue === void 0) {
        if (prevData.byPropertyKey.has(key)) {
          materializedChildren ??= __spreadValues({}, prevData);
          materializedChildren.byPropertyKey.delete(key);
        }
        continue;
      }
      if (parentIsArray && isObject(childValue) && !isArray(childValue)) {
        trackingKey = childValue[this.identitySymbol] ??= /* @__PURE__ */ Symbol(ngDevMode ? `id:${globalId++}` : "");
      }
      let childNode;
      if (trackingKey) {
        if (!prevData.byTrackingKey?.has(trackingKey)) {
          materializedChildren ??= __spreadValues({}, prevData);
          materializedChildren.byTrackingKey ??= /* @__PURE__ */ new Map();
          materializedChildren.byTrackingKey.set(trackingKey, this.createChildNode(key, trackingKey, parentIsArray));
        }
        childNode = (materializedChildren ?? prevData).byTrackingKey.get(trackingKey);
      }
      const child = prevData.byPropertyKey.get(key);
      if (child === void 0) {
        materializedChildren ??= __spreadValues({}, prevData);
        materializedChildren.byPropertyKey.set(key, {
          reader: this.createReader(key),
          node: childNode ?? this.createChildNode(key, trackingKey, parentIsArray)
        });
      } else if (childNode && childNode !== child.node) {
        materializedChildren ??= __spreadValues({}, prevData);
        child.node = childNode;
      }
    }
    return materializedChildren ?? prevData;
  }
  createReader(key) {
    return computed(() => this.childrenMap()?.byPropertyKey.get(key)?.node);
  }
};
var RootFieldNodeStructure = class extends FieldNodeStructure {
  fieldManager;
  value;
  get parent() {
    return void 0;
  }
  get root() {
    return this.node;
  }
  get pathKeys() {
    return ROOT_PATH_KEYS;
  }
  get keyInParent() {
    return ROOT_KEY_IN_PARENT;
  }
  isOrphaned = FALSE_SIGNAL;
  childrenMap;
  constructor(node, logic, fieldManager, value, createChildNode) {
    super(logic, node, createChildNode);
    this.fieldManager = fieldManager;
    this.value = value;
    this.childrenMap = this.createChildrenMap();
  }
};
var ChildFieldNodeStructure = class extends FieldNodeStructure {
  logic;
  parent;
  root;
  pathKeys;
  keyInParent;
  value;
  childrenMap;
  isOrphaned;
  get fieldManager() {
    return this.root.structure.fieldManager;
  }
  constructor(node, logic, parent, identityInParent, initialKeyInParent, createChildNode) {
    super(logic, node, createChildNode);
    this.logic = logic;
    this.parent = parent;
    this.root = this.parent.structure.root;
    const signals = this.createKeyOrOrphanSignals("child", identityInParent, initialKeyInParent);
    this.isOrphaned = signals.isOrphaned;
    this.keyInParent = signals.keyInParent;
    this.pathKeys = computed(() => [...parent.structure.pathKeys(), this.keyInParent()], ...ngDevMode ? [{
      debugName: "pathKeys"
    }] : []);
    this.value = deepSignal(this.parent.structure.value, this.keyInParent);
    this.childrenMap = this.createChildrenMap();
    this.fieldManager.structures.add(this);
  }
};
var globalId = 0;
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{
  debugName: "ROOT_PATH_KEYS"
}] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
  throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{
  debugName: "ROOT_KEY_IN_PARENT"
}] : []);
function getDebugName(node) {
  return `<root>.${node.structure.pathKeys().join(".")}`;
}
function maybeRemoveStaleArrayFields(prevData, value, identitySymbol) {
  let data;
  const oldKeys = new Set(prevData.byPropertyKey.keys());
  const oldTracking = prevData.byTrackingKey && new Set(prevData.byTrackingKey.keys());
  for (let i = 0; i < value.length; i++) {
    const childValue = value[i];
    oldKeys.delete(i.toString());
    if (oldTracking && isObject(childValue) && Object.hasOwn(childValue, identitySymbol)) {
      oldTracking.delete(childValue[identitySymbol]);
    }
  }
  if (oldKeys.size > 0) {
    data ??= __spreadValues({}, prevData);
    for (const key of oldKeys) {
      data.byPropertyKey.delete(key);
    }
  }
  if (oldTracking && oldTracking.size > 0) {
    data ??= __spreadValues({}, prevData);
    for (const id of oldTracking) {
      data.byTrackingKey.delete(id);
    }
  }
  return data;
}
function maybeRemoveStaleObjectFields(prevData, value) {
  let data;
  for (const key of prevData.byPropertyKey.keys()) {
    if (!Object.hasOwn(value, key)) {
      data ??= __spreadValues({}, prevData);
      data.byPropertyKey.delete(key);
    }
  }
  return data;
}
var FieldSubmitState = class {
  node;
  selfSubmitting = signal(false, ...ngDevMode ? [{
    debugName: "selfSubmitting"
  }] : []);
  submissionErrors;
  constructor(node) {
    this.node = node;
    this.submissionErrors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "submissionErrors"
    } : {}), {
      source: this.node.structure.value,
      computation: () => []
    }));
  }
  submitting = computed(() => {
    return this.selfSubmitting() || (this.node.structure.parent?.submitting() ?? false);
  }, ...ngDevMode ? [{
    debugName: "submitting"
  }] : []);
};
var FieldNode = class {
  structure;
  validationState;
  metadataState;
  nodeState;
  submitState;
  fieldAdapter;
  controlValue;
  _context = void 0;
  get context() {
    return this._context ??= new FieldNodeContext(this);
  }
  fieldProxy = new Proxy(() => this, FIELD_PROXY_HANDLER);
  pathNode;
  constructor(options) {
    this.pathNode = options.pathNode;
    this.fieldAdapter = options.fieldAdapter;
    this.structure = this.fieldAdapter.createStructure(this, options);
    this.validationState = this.fieldAdapter.createValidationState(this, options);
    this.nodeState = this.fieldAdapter.createNodeState(this, options);
    this.metadataState = new FieldMetadataState(this);
    this.submitState = new FieldSubmitState(this);
    this.controlValue = this.controlValueSignal();
    this.metadataState.runMetadataCreateLifecycle();
  }
  focusBoundControl(options) {
    this.getBindingForFocus()?.focus(options);
  }
  getBindingForFocus() {
    const own = this.formFieldBindings().filter((b) => b.focus !== void 0).reduce(firstInDom, void 0);
    if (own) return own;
    return this.structure.children().map((child) => child.getBindingForFocus()).reduce(firstInDom, void 0);
  }
  pendingSync = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "pendingSync"
  } : {}), {
    source: () => this.value(),
    computation: (_source, previous) => {
      previous?.value?.abort();
      return void 0;
    }
  }));
  get fieldTree() {
    return this.fieldProxy;
  }
  get logicNode() {
    return this.structure.logic;
  }
  get value() {
    return this.structure.value;
  }
  get keyInParent() {
    return this.structure.keyInParent;
  }
  get errors() {
    return this.validationState.errors;
  }
  get parseErrors() {
    return this.validationState.parseErrors;
  }
  get errorSummary() {
    return this.validationState.errorSummary;
  }
  get pending() {
    return this.validationState.pending;
  }
  get valid() {
    return this.validationState.valid;
  }
  get invalid() {
    return this.validationState.invalid;
  }
  get dirty() {
    return this.nodeState.dirty;
  }
  get touched() {
    return this.nodeState.touched;
  }
  get disabled() {
    return this.nodeState.disabled;
  }
  get disabledReasons() {
    return this.nodeState.disabledReasons;
  }
  get hidden() {
    return this.nodeState.hidden;
  }
  get readonly() {
    return this.nodeState.readonly;
  }
  get formFieldBindings() {
    return this.nodeState.formFieldBindings;
  }
  get submitting() {
    return this.submitState.submitting;
  }
  get name() {
    return this.nodeState.name;
  }
  get max() {
    const maxKey = this.metadata(MAX)?.();
    return maxKey ? this.metadata(maxKey) : void 0;
  }
  get maxLength() {
    return this.metadata(MAX_LENGTH);
  }
  get min() {
    const minKey = this.metadata(MIN)?.();
    return minKey ? this.metadata(minKey) : void 0;
  }
  get minLength() {
    return this.metadata(MIN_LENGTH);
  }
  get pattern() {
    return this.metadata(PATTERN) ?? EMPTY2;
  }
  get required() {
    return this.metadata(REQUIRED) ?? FALSE;
  }
  metadata(key) {
    return this.metadataState.get(key);
  }
  getError(kind) {
    return this.errors().find((e) => e.kind === kind);
  }
  hasMetadata(key) {
    return this.metadataState.has(key);
  }
  markAsTouched(options) {
    if (this.structure.isOrphaned()) {
      return;
    }
    untracked(() => {
      this.markAsTouchedInternal(options);
      this.flushSync();
    });
  }
  markAsTouchedInternal(options) {
    if (this.structure.isOrphaned()) {
      return;
    }
    if (this.validationState.shouldSkipValidation()) {
      return;
    }
    this.nodeState.markAsTouched();
    if (options?.skipDescendants) {
      return;
    }
    for (const child of this.structure.children()) {
      child.markAsTouchedInternal();
    }
  }
  markAsDirty() {
    this.nodeState.markAsDirty();
  }
  markAsPristine() {
    this.nodeState.markAsPristine();
  }
  markAsUntouched() {
    this.nodeState.markAsUntouched();
  }
  reset(value) {
    untracked(() => this._reset(value));
  }
  _reset(value) {
    this.pendingSync()?.abort();
    if (value !== void 0) {
      this.value.set(value);
    }
    this.controlValue.rawSet(this.value());
    this.nodeState.markAsUntouched();
    this.nodeState.markAsPristine();
    for (const binding of this.formFieldBindings()) {
      binding.reset();
    }
    for (const child of this.structure.materializedChildren()) {
      child._reset();
    }
  }
  reloadValidation() {
    untracked(() => this._reloadValidation());
  }
  _reloadValidation() {
    const keys = this.logicNode.logic.getMetadataKeys();
    for (const key of keys) {
      if (key[IS_ASYNC_VALIDATION_RESOURCE]) {
        const resource2 = this.metadata(key);
        resource2.reload?.();
      }
    }
    for (const child of this.structure.children()) {
      child._reloadValidation();
    }
  }
  controlValueSignal() {
    const controlValue = linkedSignal(this.value);
    controlValue.rawSet = controlValue.set;
    controlValue.set = (newValue) => {
      controlValue.rawSet(newValue);
      this.markAsDirty();
      this.debounceSync();
    };
    const rawUpdate = controlValue.update;
    controlValue.update = (updateFn) => {
      rawUpdate(updateFn);
      this.markAsDirty();
      this.debounceSync();
    };
    return controlValue;
  }
  sync() {
    this.value.set(this.controlValue());
  }
  flushSync() {
    const pending = this.pendingSync();
    if (pending && !pending.signal.aborted) {
      pending.abort();
      this.sync();
    }
  }
  async debounceSync() {
    const debouncer = untracked(() => {
      this.pendingSync()?.abort();
      return this.nodeState.debouncer();
    });
    if (debouncer) {
      const controller = new AbortController();
      const promise = debouncer(controller.signal);
      if (promise) {
        this.pendingSync.set(controller);
        await promise;
        if (controller.signal.aborted) {
          return;
        }
      }
    }
    if (this.structure.isOrphaned()) {
      return;
    }
    this.sync();
  }
  static newRoot(fieldManager, value, pathNode, adapter) {
    return adapter.newRoot(fieldManager, value, pathNode, adapter);
  }
  createStructure(options) {
    return options.kind === "root" ? new RootFieldNodeStructure(this, options.logic, options.fieldManager, options.value, this.newChild.bind(this)) : new ChildFieldNodeStructure(this, options.logic, options.parent, options.identityInParent, options.initialKeyInParent, this.newChild.bind(this));
  }
  newChild(key, trackingId, isArray2) {
    let childPath;
    let childLogic;
    if (isArray2) {
      childPath = this.pathNode.getChild(DYNAMIC);
      childLogic = this.structure.logic.getChild(DYNAMIC);
    } else {
      childPath = this.pathNode.getChild(key);
      childLogic = this.structure.logic.getChild(key);
    }
    return this.fieldAdapter.newChild({
      kind: "child",
      parent: this,
      pathNode: childPath,
      logic: childLogic,
      initialKeyInParent: key,
      identityInParent: trackingId,
      fieldAdapter: this.fieldAdapter
    });
  }
};
var EMPTY2 = computed(() => [], ...ngDevMode ? [{
  debugName: "EMPTY"
}] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE"
}] : []);
function firstInDom(a, b) {
  if (!a) return b;
  if (!b) return a;
  const position = a.element.compareDocumentPosition(b.element);
  return position & Node.DOCUMENT_POSITION_PRECEDING ? b : a;
}
var FieldNodeState = class {
  node;
  selfTouched = signal(false, ...ngDevMode ? [{
    debugName: "selfTouched"
  }] : []);
  selfDirty = signal(false, ...ngDevMode ? [{
    debugName: "selfDirty"
  }] : []);
  markAsTouched() {
    this.selfTouched.set(true);
  }
  markAsDirty() {
    this.selfDirty.set(true);
  }
  markAsPristine() {
    this.selfDirty.set(false);
  }
  markAsUntouched() {
    this.selfTouched.set(false);
  }
  formFieldBindings = signal([], ...ngDevMode ? [{
    debugName: "formFieldBindings"
  }] : []);
  constructor(node) {
    this.node = node;
  }
  dirty = computed(() => {
    const selfDirtyValue = this.selfDirty() && !this.isNonInteractive();
    return this.node.structure.reduceChildren(selfDirtyValue, (child, value) => value || child.nodeState.dirty(), shortCircuitTrue);
  }, ...ngDevMode ? [{
    debugName: "dirty"
  }] : []);
  touched = computed(() => {
    const selfTouchedValue = this.selfTouched() && !this.isNonInteractive();
    return this.node.structure.reduceChildren(selfTouchedValue, (child, value) => value || child.nodeState.touched(), shortCircuitTrue);
  }, ...ngDevMode ? [{
    debugName: "touched"
  }] : []);
  disabledReasons = computed(() => [...this.node.structure.parent?.nodeState.disabledReasons() ?? [], ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabledReasons"
  } : {}), {
    equal: shallowArrayEquals
  }));
  disabled = computed(() => !!this.disabledReasons().length, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  readonly = computed(() => (this.node.structure.parent?.nodeState.readonly() || this.node.logicNode.logic.readonly.compute(this.node.context)) ?? false, ...ngDevMode ? [{
    debugName: "readonly"
  }] : []);
  hidden = computed(() => (this.node.structure.parent?.nodeState.hidden() || this.node.logicNode.logic.hidden.compute(this.node.context)) ?? false, ...ngDevMode ? [{
    debugName: "hidden"
  }] : []);
  name = computed(() => {
    const parent = this.node.structure.parent;
    if (!parent) {
      return this.node.structure.fieldManager.rootName;
    }
    return `${parent.name()}.${this.node.structure.keyInParent()}`;
  }, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  debouncer = computed(() => {
    if (this.node.logicNode.logic.hasMetadata(DEBOUNCER)) {
      const debouncerLogic = this.node.logicNode.logic.getMetadata(DEBOUNCER);
      const debouncer = debouncerLogic.compute(this.node.context);
      if (debouncer) {
        return (signal2) => debouncer(this.node.context, signal2);
      }
    }
    return this.node.structure.parent?.nodeState.debouncer?.();
  }, ...ngDevMode ? [{
    debugName: "debouncer"
  }] : []);
  isNonInteractive = computed(() => this.hidden() || this.disabled() || this.readonly(), ...ngDevMode ? [{
    debugName: "isNonInteractive"
  }] : []);
};
var BasicFieldAdapter = class {
  newRoot(fieldManager, value, pathNode, adapter) {
    return new FieldNode({
      kind: "root",
      fieldManager,
      value,
      pathNode,
      logic: pathNode.builder.build(),
      fieldAdapter: adapter
    });
  }
  newChild(options) {
    return new FieldNode(options);
  }
  createNodeState(node) {
    return new FieldNodeState(node);
  }
  createValidationState(node) {
    return new FieldValidationState(node);
  }
  createStructure(node, options) {
    return node.createStructure(options);
  }
};
var FormFieldManager = class {
  injector;
  rootName;
  submitOptions;
  constructor(injector, rootName, submitOptions) {
    this.injector = injector;
    this.rootName = rootName ?? `${this.injector.get(APP_ID)}.form${nextFormId++}`;
    this.submitOptions = submitOptions;
  }
  structures = /* @__PURE__ */ new Set();
  createFieldManagementEffect(root) {
    effect(() => {
      const liveStructures = /* @__PURE__ */ new Set();
      this.markStructuresLive(root, liveStructures);
      for (const structure of this.structures) {
        if (!liveStructures.has(structure)) {
          this.structures.delete(structure);
          untracked(() => structure.destroy());
        }
      }
    }, {
      injector: this.injector
    });
  }
  markStructuresLive(structure, liveStructures) {
    liveStructures.add(structure);
    for (const child of structure.children()) {
      this.markStructuresLive(child.structure, liveStructures);
    }
  }
};
var nextFormId = 0;
var REGISTER_WEBMCP_FORM = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
function normalizeFormArgs(args) {
  let model;
  let schema2;
  let options;
  if (args.length === 3) {
    [model, schema2, options] = args;
  } else if (args.length === 2) {
    if (isSchemaOrSchemaFn(args[1])) {
      [model, schema2] = args;
    } else {
      [model, options] = args;
    }
  } else {
    [model] = args;
  }
  return [model, schema2, options];
}
function form(...args) {
  const [model, schema2, options] = normalizeFormArgs(args);
  const injector = options?.injector ?? inject(Injector);
  const pathNode = runInInjectionContext(injector, () => SchemaImpl.rootCompile(schema2));
  const fieldManager = new FormFieldManager(injector, options?.name, options?.submission);
  const adapter = options?.adapter ?? new BasicFieldAdapter();
  const fieldRoot = FieldNode.newRoot(fieldManager, model, pathNode, adapter);
  fieldManager.createFieldManagementEffect(fieldRoot.structure);
  const {
    experimentalWebMcpTool
  } = options ?? {};
  if (experimentalWebMcpTool) {
    const registerWebMcpForm = runInInjectionContext(injector, () => inject(REGISTER_WEBMCP_FORM, {
      optional: true
    }));
    if (registerWebMcpForm) {
      runInInjectionContext(injector, () => registerWebMcpForm(fieldRoot.fieldTree, {
        name: experimentalWebMcpTool.name,
        description: experimentalWebMcpTool.description
      }));
    } else {
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        throw new Error(`Cannot register form "${experimentalWebMcpTool.name}" as a WebMCP tool. Make sure to use \`provideExperimentalWebMcpForms()\` in your application bootstrap configuration.`);
      }
    }
  }
  return fieldRoot.fieldTree;
}
async function submit(form2, options) {
  const node = untracked(form2);
  if (untracked(node.submitState.submitting)) {
    return false;
  }
  const field = options === void 0 ? node.structure.root.fieldProxy : form2;
  const detail = {
    root: node.structure.root.fieldProxy,
    submitted: form2
  };
  options = typeof options === "function" ? {
    action: options
  } : options ?? node.structure.fieldManager.submitOptions;
  const action = options?.action;
  if (!action) {
    throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
  }
  node.markAsTouched();
  const onInvalid = options?.onInvalid;
  const shouldRun = shouldRunAction(node, options?.ignoreValidators);
  try {
    if (shouldRun) {
      node.submitState.selfSubmitting.set(true);
      const errors = await untracked(() => action?.(field, detail));
      errors && setSubmissionErrors(node, errors);
      return !errors || isArray(errors) && errors.length === 0;
    } else {
      untracked(() => onInvalid?.(field, detail));
    }
    return false;
  } finally {
    node.submitState.selfSubmitting.set(false);
  }
}
function shouldRunAction(node, ignoreValidators) {
  switch (ignoreValidators) {
    case "all":
      return true;
    case "none":
      return untracked(node.valid);
    default:
      return !untracked(node.invalid);
  }
}
function setSubmissionErrors(submittedField, errors) {
  if (!isArray(errors)) {
    errors = [errors];
  }
  const errorsByField = /* @__PURE__ */ new Map();
  for (const error of errors) {
    const errorWithField = addDefaultField(error, submittedField.fieldTree);
    const field = errorWithField.fieldTree();
    let fieldErrors = errorsByField.get(field);
    if (!fieldErrors) {
      fieldErrors = [];
      errorsByField.set(field, fieldErrors);
    }
    fieldErrors.push(errorWithField);
  }
  for (const [field, fieldErrors] of errorsByField) {
    field.submitState.submissionErrors.set(fieldErrors);
  }
}
var CompatValidationError = class {
  kind = "compat";
  control;
  fieldTree;
  context;
  message;
  constructor({
    context,
    kind,
    control
  }) {
    this.context = context;
    this.kind = kind;
    this.control = control;
  }
};
function signalErrorsToValidationErrors(errors) {
  if (errors.length === 0) {
    return null;
  }
  const errObj = {};
  for (const error of errors) {
    errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
  }
  return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
  if (errors === null) {
    return [];
  }
  return Object.entries(errors).map(([kind, context]) => {
    return new CompatValidationError({
      context,
      kind,
      control
    });
  });
}

// node_modules/@angular/forms/fesm2022/signals.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function disabled(path, configOrLogic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  let logic;
  if (typeof configOrLogic === "function" || typeof configOrLogic === "string") {
    logic = configOrLogic;
  } else {
    logic = configOrLogic?.when;
  }
  pathNode.builder.addDisabledReasonRule((ctx) => {
    let result = true;
    if (typeof logic === "string") {
      result = logic;
    } else if (logic) {
      result = logic(ctx);
    }
    if (typeof result === "string") {
      return {
        fieldTree: ctx.fieldTree,
        message: result
      };
    }
    return result ? {
      fieldTree: ctx.fieldTree
    } : void 0;
  });
}
function getOption(opt, ctx) {
  return opt instanceof Function ? opt(ctx) : opt;
}
function isEmpty(value) {
  if (typeof value === "number") {
    return isNaN(value);
  }
  return value === "" || value === false || value == null;
}
function normalizeErrors2(error) {
  if (error === void 0) {
    return [];
  }
  if (Array.isArray(error)) {
    return error;
  }
  return [error];
}
function validate(path, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addSyncErrorRule((ctx) => {
    return addDefaultField(logic(ctx), ctx.fieldTree);
  });
}
function requiredError(options) {
  return new RequiredValidationError(options);
}
function minError(min2, options) {
  return new MinValidationError(min2, options);
}
function emailError(options) {
  return new EmailValidationError(options);
}
var BaseNgValidationError = class {
  __brand = void 0;
  kind = "";
  fieldTree;
  message;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var RequiredValidationError = class extends BaseNgValidationError {
  kind = "required";
};
var MinValidationError = class extends BaseNgValidationError {
  min;
  kind = "min";
  constructor(min2, options) {
    super(options);
    this.min = min2;
  }
};
var EmailValidationError = class extends BaseNgValidationError {
  kind = "email";
};
var NativeInputParseError = class extends BaseNgValidationError {
  kind = "parse";
};
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function email(path, config) {
  validate(path, (ctx) => {
    if (config?.when && !config.when(ctx)) {
      return void 0;
    }
    if (isEmpty(ctx.value())) {
      return void 0;
    }
    if (!EMAIL_REGEXP.test(ctx.value())) {
      if (config?.error) {
        return getOption(config.error, ctx);
      } else {
        return emailError({
          message: getOption(config?.message, ctx)
        });
      }
    }
    return void 0;
  });
}
function min(path, minValue, config) {
  const MIN_MEMO = createMetadataKey();
  metadata(path, MIN_MEMO, (ctx) => {
    if (config?.when && !config.when(ctx)) {
      return void 0;
    }
    return typeof minValue === "function" ? minValue(ctx) : minValue;
  });
  metadata(path, MIN_NUMBER, ({
    state
  }) => state.metadata(MIN_MEMO)());
  metadata(path, MIN, () => MIN_NUMBER);
  validate(path, (ctx) => {
    const value = ctx.value();
    if (value === null || Number.isNaN(value)) {
      return void 0;
    }
    const min2 = ctx.state.metadata(MIN_MEMO)();
    if (min2 === void 0 || Number.isNaN(min2)) {
      return void 0;
    }
    if (value < min2) {
      if (config?.error) {
        return getOption(config.error, ctx);
      } else {
        return minError(min2, {
          message: getOption(config?.message, ctx)
        });
      }
    }
    return void 0;
  });
}
function required(path, config) {
  const REQUIRED_MEMO = metadata(path, createMetadataKey(), (ctx) => config?.when ? config.when(ctx) : true);
  metadata(path, REQUIRED, ({
    state
  }) => state.metadata(REQUIRED_MEMO)());
  validate(path, (ctx) => {
    if (ctx.state.metadata(REQUIRED_MEMO)() && isEmpty(ctx.value())) {
      if (config?.error) {
        return getOption(config.error, ctx);
      } else {
        return requiredError({
          message: getOption(config?.message, ctx)
        });
      }
    }
    return void 0;
  });
}
function createParser(getValue, setValue, parse) {
  const errors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    source: getValue,
    computation: () => [],
    equal: shallowArrayEquals
  }));
  const setRawValue = (rawValue) => {
    const result = parse(rawValue);
    errors.set(normalizeErrors2(result.error));
    if (result.value !== void 0) {
      setValue(result.value);
    }
    errors.set(normalizeErrors2(result.error));
  };
  const reset = () => {
    errors.set([]);
  };
  return {
    errors: errors.asReadonly(),
    setRawValue,
    reset
  };
}
var InteropNgControl = class {
  field;
  constructor(field) {
    this.field = field;
  }
  control = this;
  get value() {
    return this.field().controlValue();
  }
  get valid() {
    return this.field().valid();
  }
  get invalid() {
    return this.field().invalid();
  }
  get pending() {
    return this.field().pending();
  }
  get disabled() {
    return this.field().disabled();
  }
  get enabled() {
    return !this.field().disabled();
  }
  get errors() {
    return signalErrorsToValidationErrors(this.field().errors());
  }
  get pristine() {
    return !this.field().dirty();
  }
  get dirty() {
    return this.field().dirty();
  }
  get touched() {
    return this.field().touched();
  }
  get untouched() {
    return !this.field().touched();
  }
  get status() {
    if (this.field().disabled()) {
      return "DISABLED";
    }
    if (this.field().valid()) {
      return "VALID";
    }
    if (this.field().invalid()) {
      return "INVALID";
    }
    if (this.field().pending()) {
      return "PENDING";
    }
    throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
  }
  valueAccessor = null;
  hasValidator(validator) {
    if (validator === Validators.required) {
      return this.field().required();
    }
    return false;
  }
  updateValueAndValidity() {
  }
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
  disabled: "disabled",
  disabledReasons: "disabledReasons",
  dirty: "dirty",
  errors: "errors",
  hidden: "hidden",
  invalid: "invalid",
  max: "max",
  maxLength: "maxLength",
  min: "min",
  minLength: "minLength",
  name: "name",
  pattern: "pattern",
  pending: "pending",
  readonly: "readonly",
  required: "required",
  touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
  const map2 = {};
  for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) {
    map2[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
  }
  return map2;
})();
function readFieldStateBindingValue(fieldState, key) {
  const property = CONTROL_BINDING_TO_FIELD_STATE_KEY[key];
  return fieldState[property]?.();
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
  return {};
}
function bindingUpdated(bindings, key, value) {
  if (bindings[key] !== value) {
    bindings[key] = value;
    return true;
  }
  return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
  let modelValue;
  if (isInput(element) && validityMonitor.isBadInput(element)) {
    return {
      error: new NativeInputParseError()
    };
  }
  switch (element.type) {
    case "checkbox":
      return {
        value: element.checked
      };
    case "number":
    case "range":
    case "datetime-local":
      modelValue = untracked(currentValue);
      if (typeof modelValue === "number" || modelValue === null) {
        return {
          value: element.value === "" ? null : element.valueAsNumber
        };
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      modelValue = untracked(currentValue);
      if (modelValue === null || modelValue instanceof Date) {
        return {
          value: element.valueAsDate
        };
      } else if (typeof modelValue === "number") {
        return {
          value: element.valueAsNumber
        };
      }
      break;
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    modelValue ??= untracked(currentValue);
    if (typeof modelValue === "number" || modelValue === null) {
      if (element.value === "") {
        return {
          value: null
        };
      }
      const parsed = Number(element.value);
      if (Number.isNaN(parsed)) {
        return {
          error: new NativeInputParseError()
        };
      }
      return {
        value: parsed
      };
    }
  }
  return {
    value: element.value
  };
}
function setNativeControlValue(element, value) {
  switch (element.type) {
    case "checkbox":
      element.checked = value;
      return;
    case "radio":
      element.checked = value === element.value;
      return;
    case "number":
    case "range":
    case "datetime-local":
      if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      } else if (value === null) {
        element.value = "";
        return;
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      if (value === null || value instanceof Date) {
        element.valueAsDate = value;
        return;
      } else if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      }
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    if (typeof value === "number") {
      element.value = isNaN(value) ? "" : String(value);
      return;
    }
    if (value === null) {
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        console.warn(formatRuntimeError(1921, `The text input ${element.name} received a null value. Text inputs should use empty strings to represent null values.  The input's value will be set to an empty string instead.`));
      }
      element.value = "";
      return;
    }
  }
  element.value = value;
}
function setNativeNumberControlValue(element, value) {
  if (isNaN(value)) {
    element.value = "";
  } else {
    element.valueAsNumber = value;
  }
}
function isInput(element) {
  return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input2) {
  return input2.type === "date" || input2.type === "datetime-local" || input2.type === "month" || input2.type === "time" || input2.type === "week";
}
function formatDateForInput(date, type) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  if (type === "month") {
    return `${year}-${month}`;
  }
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatDateForMinMax(name, value, type) {
  if (value instanceof Date && (name === "min" || name === "max") && (type === "date" || type === "month")) {
    return formatDateForInput(value, type);
  }
  return value;
}
function customControlCreate(host, parent) {
  host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
  host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
  parent.registerAsBinding(host.customControl);
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      host.setCustomControlModelInput(controlValue);
    }
    for (const name of CONTROL_BINDING_NAMES) {
      let value;
      if (name === "errors") {
        value = parent.errors();
      } else {
        value = readFieldStateBindingValue(state, name);
      }
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
          const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
        }
      }
    }
  };
}
function isValidatorObject(v) {
  return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
  const bindings = createBindings();
  parent.controlValueAccessor.registerOnChange((value) => {
    bindings["controlValue"] = value;
    parent.state().controlValue.set(value);
  });
  parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
  const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
    optional: true,
    self: true
  });
  if (legacyValidators) {
    let version;
    for (const v of legacyValidators) {
      if (isValidatorObject(v) && v.registerOnValidatorChange) {
        version ??= signal(0);
        v.registerOnValidatorChange(() => {
          version.update((n) => n + 1);
        });
      }
    }
    const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
    const mergedValidator = Validators.compose(validatorFns);
    const parseErrors = computed(() => {
      version?.();
      const errors = mergedValidator ? mergedValidator(parent.interopNgControl.control) : null;
      return reactiveErrorsToSignalErrors(errors, parent.interopNgControl.control);
    }, ...ngDevMode ? [{
      debugName: "parseErrors"
    }] : []);
    parent.parseErrorsSource.set(parseErrors);
  }
  parent.registerAsBinding({
    reset: () => {
      const value = parent.state().value();
      bindings["controlValue"] = value;
      untracked(() => parent.controlValueAccessor.writeValue(value));
    }
  });
  return () => {
    const fieldState = parent.state();
    const controlValue = fieldState.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      untracked(() => parent.controlValueAccessor.writeValue(controlValue));
    }
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(fieldState, name);
      if (bindingUpdated(bindings, name, value)) {
        const propertyWasSet = host.setInputOnDirectives(name, value, name === "name" ? isDefinedPredicate : void 0);
        if (name === "disabled" && parent.controlValueAccessor.setDisabledState) {
          untracked(() => parent.controlValueAccessor.setDisabledState(value));
        } else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) {
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
        }
      }
    }
  };
}
function isDefinedPredicate(value) {
  return value == null;
}
function observeSelectMutations(select, onMutation, destroyRef) {
  if (typeof MutationObserver !== "function") {
    return;
  }
  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => isRelevantSelectMutation(m))) {
      onMutation();
    }
  });
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["value"],
    characterData: true,
    childList: true,
    subtree: true
  });
  destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
  if (mutation.type === "childList" || mutation.type === "characterData") {
    if (mutation.target instanceof Comment) {
      return false;
    }
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    for (const node of mutation.removedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    return false;
  }
  if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) {
    return true;
  }
  return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
  let updateMode = false;
  const input2 = parent.nativeFormElement;
  const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input2, parent.state().value, validityMonitor));
  parseErrorsSource.set(parser.errors);
  parent.onReset = () => {
    parser.reset();
    const value = parent.state().value();
    bindings["controlValue"] = value;
    setNativeControlValue(input2, value);
  };
  host.listenToDom("input", () => parser.setRawValue(void 0));
  host.listenToDom("blur", () => parent.state().markAsTouched());
  if (isInput(input2) && inputRequiresValidityTracking(input2)) {
    validityMonitor.watchValidity(parent.destroyRef, input2, () => parser.setRawValue(void 0));
  }
  parent.registerAsBinding();
  if (input2.tagName === "SELECT") {
    observeSelectMutations(input2, () => {
      if (!updateMode) {
        return;
      }
      input2.value = parent.state().controlValue();
    }, parent.destroyRef);
  }
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(state, name);
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name)) {
          const domValue = formatDateForMinMax(name, value, input2.type);
          setNativeDomProperty(parent.renderer, input2, name, domValue);
        }
      }
    }
    const controlValue = state.controlValue();
    const controlValueChanged = bindingUpdated(bindings, "controlValue", controlValue);
    const radioValueChanged = input2.type === "radio" && bindingUpdated(bindings, "radioValue", input2.value);
    if (controlValueChanged || radioValueChanged) {
      setNativeControlValue(input2, controlValue);
    }
    updateMode = true;
  };
}
var InputValidityMonitor = class _InputValidityMonitor {
  static \u0275fac = function InputValidityMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputValidityMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputValidityMonitor,
    factory: (__ngFactoryType__) => AnimationInputValidityMonitor.\u0275fac(__ngFactoryType__),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useClass: forwardRef(() => AnimationInputValidityMonitor)
    }]
  }], null, null);
})();
var AnimationInputValidityMonitor = class _AnimationInputValidityMonitor extends InputValidityMonitor {
  document = inject(DOCUMENT);
  cspNonce = inject(CSP_NONCE, {
    optional: true
  });
  injectedStyles = /* @__PURE__ */ new WeakMap();
  watchValidity(destroyRef, element, callback) {
    if (false) {
      return;
    }
    const rootNode = element.getRootNode();
    if (!this.injectedStyles.has(rootNode)) {
      this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
    }
    const onAnimationStart = (event) => {
      const animationEvent = event;
      if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") {
        callback();
      }
    };
    element.addEventListener("animationstart", onAnimationStart);
    destroyRef.onDestroy(() => {
      element.removeEventListener("animationstart", onAnimationStart);
    });
  }
  isBadInput(element) {
    return element.validity?.badInput ?? false;
  }
  createTransitionStyle(rootNode) {
    const element = this.document.createElement("style");
    if (this.cspNonce) {
      element.nonce = this.cspNonce;
    }
    element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
    if (rootNode.nodeType === 9) {
      rootNode.head?.appendChild(element);
    } else {
      rootNode.appendChild(element);
    }
    return element;
  }
  ngOnDestroy() {
    this.injectedStyles.get(this.document)?.remove();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AnimationInputValidityMonitor_BaseFactory;
    return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
      return (\u0275AnimationInputValidityMonitor_BaseFactory || (\u0275AnimationInputValidityMonitor_BaseFactory = \u0275\u0275getInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationInputValidityMonitor,
    factory: _AnimationInputValidityMonitor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{
    type: Injectable
  }], null, null);
})();
var \u0275NgFieldDirective = /* @__PURE__ */ Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class _FormField {
  field = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "field"
  } : {}), {
    alias: "formField"
  }));
  state = computed(() => this.field()(), ...ngDevMode ? [{
    debugName: "state"
  }] : []);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  injector = inject(Injector);
  element = inject(ElementRef).nativeElement;
  elementIsNativeFormElement = isNativeFormElement(this.element);
  elementAcceptsTextualValues = isTextualFormElement(this.element);
  _elementAcceptsMinMax;
  nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
  focuser = (options) => this.element.focus(options);
  controlValueAccessors = inject(NG_VALUE_ACCESSOR, {
    optional: true,
    self: true
  });
  config = inject(SIGNAL_FORMS_CONFIG, {
    optional: true
  });
  validityMonitor = inject(InputValidityMonitor);
  parseErrorsSource = signal(void 0, ...ngDevMode ? [{
    debugName: "parseErrorsSource"
  }] : []);
  _interopNgControl;
  get interopNgControl() {
    return this._interopNgControl ??= new InteropNgControl(this.state);
  }
  parseErrors = computed(() => this.parseErrorsSource()?.().map((err) => __spreadProps(__spreadValues({}, err), {
    fieldTree: untracked(this.state).fieldTree,
    formField: this
  })) ?? [], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "parseErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errors = computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  isFieldBinding = false;
  resetter = () => {
  };
  parseErrorsResetCallback;
  setParseErrors(source) {
    this.parseErrorsSource.set(source);
  }
  set onReset(callback) {
    this.parseErrorsResetCallback = callback;
  }
  get onReset() {
    return this.parseErrorsResetCallback;
  }
  get controlValueAccessor() {
    if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) {
      return this.interopNgControl?.valueAccessor ?? void 0;
    }
    return selectValueAccessor(this.interopNgControl, this.controlValueAccessors) ?? void 0;
  }
  installClassBindingEffect() {
    const classes = Object.entries(this.config?.classes ?? {}).map(([className, computation]) => [className, computed(() => computation(this))]);
    if (classes.length === 0) {
      return;
    }
    const bindings = createBindings();
    afterRenderEffect({
      write: () => {
        for (const [className, computation] of classes) {
          const active = computation();
          if (bindingUpdated(bindings, className, active)) {
            if (active) {
              this.renderer.addClass(this.element, className);
            } else {
              this.renderer.removeClass(this.element, className);
            }
          }
        }
      }
    }, {
      injector: this.injector
    });
  }
  focus(options) {
    this.focuser(options);
  }
  reset() {
    this.resetter();
    this.parseErrorsResetCallback?.(this.state().value());
  }
  registerAsBinding(bindingOptions) {
    if (this.isFieldBinding) {
      throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
    }
    this.isFieldBinding = true;
    this.installClassBindingEffect();
    if (bindingOptions?.focus) {
      this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
    }
    if (bindingOptions?.reset) {
      this.resetter = () => bindingOptions.reset();
    }
    effect((onCleanup) => {
      const fieldNode = this.state();
      fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
      onCleanup(() => {
        fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
      });
    }, {
      injector: this.injector
    });
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        const fieldNode = this.state();
        if (fieldNode.hidden()) {
          const path = fieldNode.structure.pathKeys().join(".") || "<root>";
          console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
        }
      }, {
        injector: this.injector
      });
    }
  }
  [\u0275NgFieldDirective];
  \u0275ngControlCreate(host) {
    if (host.hasPassThrough) {
      return;
    }
    if (this.controlValueAccessor) {
      this.\u0275ngControlUpdate = cvaControlCreate(host, this);
    } else if (host.customControl) {
      this.\u0275ngControlUpdate = customControlCreate(host, this);
    } else if (this.elementIsNativeFormElement) {
      this.\u0275ngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
    } else {
      throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
    }
  }
  \u0275ngControlUpdate;
  elementAcceptsNativeProperty(key) {
    if (!this.elementIsNativeFormElement) {
      return false;
    }
    switch (key) {
      case "min":
      case "max":
        return this._elementAcceptsMinMax ??= elementAcceptsMinMax(this.element);
      case "minLength":
      case "maxLength":
        return this.elementAcceptsTextualValues;
      case "disabled":
      case "required":
      case "readonly":
      case "name":
        return true;
      default:
        return false;
    }
  }
  static \u0275fac = function FormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormField)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormField,
    selectors: [["", "formField", ""]],
    inputs: {
      field: [1, "formField", "field"]
    },
    exportAs: ["formField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: FORM_FIELD,
      useExisting: _FormField
    }, {
      provide: NgControl,
      useFactory: () => inject(_FormField).interopNgControl
    }, {
      provide: \u0275FORM_CONTROL_INTEGRATION,
      useFactory: () => inject(FORM_FIELD, {
        self: true
      })
    }]), \u0275\u0275ControlFeature("formField")]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
    type: Directive,
    args: [{
      selector: "[formField]",
      exportAs: "formField",
      providers: [{
        provide: FORM_FIELD,
        useExisting: FormField
      }, {
        provide: NgControl,
        useFactory: () => inject(FormField).interopNgControl
      }, {
        provide: \u0275FORM_CONTROL_INTEGRATION,
        useFactory: () => inject(FORM_FIELD, {
          self: true
        })
      }]
    }]
  }], null, {
    field: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formField",
        required: true
      }]
    }]
  });
})();
var FormRoot = class _FormRoot {
  fieldTree = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fieldTree"
  } : {}), {
    alias: "formRoot"
  }));
  onSubmit(event) {
    event.preventDefault();
    untracked(() => {
      const fieldTree = this.fieldTree();
      const node = fieldTree();
      if (node.structure.fieldManager.submitOptions) {
        submit(fieldTree);
      }
    });
  }
  static \u0275fac = function FormRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormRoot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormRoot,
    selectors: [["form", "formRoot", ""]],
    hostAttrs: ["novalidate", ""],
    hostBindings: function FormRoot_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormRoot_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        });
      }
    },
    inputs: {
      fieldTree: [1, "formRoot", "fieldTree"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
    type: Directive,
    args: [{
      selector: "form[formRoot]",
      host: {
        "novalidate": "",
        "(submit)": "onSubmit($event)"
      }
    }]
  }], null, {
    fieldTree: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formRoot",
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
  static \u0275fac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __CdkTextFieldStyleLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-text-field-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {
    },
    styles: ["textarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes cdk-text-field-autofill-start { /*!*/ }\n@keyframes cdk-text-field-autofill-end { /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes cdk-text-field-autofill-start { /*!*/ }\n@keyframes cdk-text-field-autofill-end { /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = (event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
  static \u0275fac = function AutofillMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutofillMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _AutofillMonitor,
    factory: _AutofillMonitor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Service
  }], null, null);
})();
var CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  cdkAutofill = new EventEmitter();
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
  static \u0275fac = function CdkAutofill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAutofill)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], null, {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  _previousMinRows = -1;
  _textareaElement;
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  _cachedLineHeight;
  _cachedPlaceholderHeight;
  _document = inject(DOCUMENT);
  _hasFocus = false;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  _handleFocusEvent = (event) => {
    this._hasFocus = event.type === "focus";
  };
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
  static \u0275fac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextareaAutosize)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: [0, "cdkAutosizeMinRows", "minRows"],
      maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
      enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var TextFieldModule = class _TextFieldModule {
  static \u0275fac = function TextFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextFieldModule,
    imports: [CdkAutofill, CdkTextareaAutosize],
    exports: [CdkAutofill, CdkTextareaAutosize]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_input-value-accessor-chunk.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder = null;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  _isServer = false;
  _isNativeSelect = false;
  _isTextarea = false;
  _isInFormField = false;
  focused = false;
  stateChanges = new Subject();
  controlType = "mat-input";
  autofilled = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  placeholder;
  name;
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  userAriaDescribedBy;
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  disabledInteractive;
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const formField = inject(FORM_FIELD, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, formField || this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  _getPlaceholder() {
    return this.placeholder || null;
  }
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = (event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  };
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
  static \u0275fac = function MatInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-mdc-input-element"],
    hostVars: 21,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
        \u0275\u0275classProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
      }
    },
    inputs: {
      disabled: "disabled",
      id: "id",
      placeholder: "placeholder",
      name: "name",
      required: "required",
      type: "type",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      value: "value",
      readonly: "readonly",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    exportAs: ["matInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatInput
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatInputModule = class _MatInputModule {
  static \u0275fac = function MatInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInputModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatInputModule,
    imports: [MatFormFieldModule, MatInput],
    exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatFormFieldModule, MatFormFieldModule, TextFieldModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/chips.mjs
var _c02 = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c12 = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChip_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function MatChip_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
function MatChipOption_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "path", 9);
    \u0275\u0275elementEnd()()();
  }
}
function MatChipOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c22 = '.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {\n  border-width: var(--%NS%mat-chip-outline-width, 1px);\n  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {\n  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));\n}\n.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {\n  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {\n  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));\n  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));\n  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);\n  height: var(--%NS%mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));\n  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));\n  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n';
var _c32 = [[["", "matChipEdit", ""]], [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c42 = ["[matChipEdit]", "mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChipRow_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
}
function MatChipRow_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function MatChipRow_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function MatChipRow_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatChipRow_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
}
function MatChipRow_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatChipRow_Conditional_5_Conditional_0_Template, 1, 0)(1, MatChipRow_Conditional_5_Conditional_1_Template, 1, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.contentEditInput ? 0 : 1);
  }
}
function MatChipRow_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 3);
  }
}
function MatChipRow_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 4);
    \u0275\u0275elementEnd();
  }
}
var _c52 = ["*"];
var _c62 = ".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n";
var MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken("mat-chips-default-options", {
  providedIn: "root",
  factory: () => ({
    separatorKeyCodes: [ENTER]
  })
});
var MAT_CHIP_AVATAR = new InjectionToken("MatChipAvatar");
var MAT_CHIP_TRAILING_ICON = new InjectionToken("MatChipTrailingIcon");
var MAT_CHIP_EDIT = new InjectionToken("MatChipEdit");
var MAT_CHIP_REMOVE = new InjectionToken("MatChipRemove");
var MAT_CHIP = new InjectionToken("MatChip");
var MatChipContent = class _MatChipContent {
  _elementRef = inject(ElementRef);
  _parentChip = inject(MAT_CHIP);
  _isPrimary = true;
  _isLeading = false;
  get disabled() {
    return this._disabled || this._parentChip?.disabled || false;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  tabIndex = -1;
  _allowFocusWhenDisabled = false;
  _getDisabledAttribute() {
    return this.disabled && !this._allowFocusWhenDisabled ? "" : null;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    if (this._elementRef.nativeElement.nodeName === "BUTTON") {
      this._elementRef.nativeElement.setAttribute("type", "button");
    }
  }
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static \u0275fac = function MatChipContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipContent,
    selectors: [["", "matChipContent", ""]],
    hostAttrs: [1, "mat-mdc-chip-action", "mdc-evolution-chip__action", "mdc-evolution-chip__action--presentational"],
    hostVars: 8,
    hostBindings: function MatChipContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mdc-evolution-chip__action--primary", ctx._isPrimary)("mdc-evolution-chip__action--secondary", !ctx._isPrimary)("mdc-evolution-chip__action--trailing", !ctx._isPrimary && !ctx._isLeading);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? -1 : numberAttribute(value)],
      _allowFocusWhenDisabled: "_allowFocusWhenDisabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipContent, [{
    type: Directive,
    args: [{
      selector: "[matChipContent]",
      host: {
        "class": "mat-mdc-chip-action mdc-evolution-chip__action mdc-evolution-chip__action--presentational",
        "[class.mdc-evolution-chip__action--primary]": "_isPrimary",
        "[class.mdc-evolution-chip__action--secondary]": "!_isPrimary",
        "[class.mdc-evolution-chip__action--trailing]": "!_isPrimary && !_isLeading",
        "[attr.disabled]": "_getDisabledAttribute()",
        "[attr.aria-disabled]": "disabled"
      }
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? -1 : numberAttribute(value)
      }]
    }],
    _allowFocusWhenDisabled: [{
      type: Input
    }]
  });
})();
var MatChipAction = class _MatChipAction extends MatChipContent {
  _getTabindex() {
    return this.disabled && !this._allowFocusWhenDisabled ? null : this.tabIndex.toString();
  }
  _handleClick(event) {
    if (!this.disabled && this._isPrimary) {
      event.preventDefault();
      this._parentChip._handlePrimaryActionInteraction();
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled && this._isPrimary && !this._parentChip._isEditing) {
      event.preventDefault();
      this._parentChip._handlePrimaryActionInteraction();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipAction_BaseFactory;
    return function MatChipAction_Factory(__ngFactoryType__) {
      return (\u0275MatChipAction_BaseFactory || (\u0275MatChipAction_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipAction)))(__ngFactoryType__ || _MatChipAction);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipAction,
    selectors: [["", "matChipAction", ""]],
    hostVars: 3,
    hostBindings: function MatChipAction_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatChipAction_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("keydown", function MatChipAction_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx._getTabindex());
        \u0275\u0275classProp("mdc-evolution-chip__action--presentational", false);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAction, [{
    type: Directive,
    args: [{
      selector: "[matChipAction]",
      host: {
        "[attr.tabindex]": "_getTabindex()",
        "[class.mdc-evolution-chip__action--presentational]": "false",
        "(click)": "_handleClick($event)",
        "(keydown)": "_handleKeydown($event)"
      }
    }]
  }], null, null);
})();
var MatChipAvatar = class _MatChipAvatar {
  static \u0275fac = function MatChipAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipAvatar)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipAvatar,
    selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    hostAttrs: ["role", "img", 1, "mat-mdc-chip-avatar", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_AVATAR,
      useExisting: _MatChipAvatar
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAvatar, [{
    type: Directive,
    args: [{
      selector: "mat-chip-avatar, [matChipAvatar]",
      host: {
        "class": "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
        "role": "img"
      },
      providers: [{
        provide: MAT_CHIP_AVATAR,
        useExisting: MatChipAvatar
      }]
    }]
  }], null, null);
})();
var MatChipTrailingIcon = class _MatChipTrailingIcon extends MatChipContent {
  _isPrimary = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipTrailingIcon_BaseFactory;
    return function MatChipTrailingIcon_Factory(__ngFactoryType__) {
      return (\u0275MatChipTrailingIcon_BaseFactory || (\u0275MatChipTrailingIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipTrailingIcon)))(__ngFactoryType__ || _MatChipTrailingIcon);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipTrailingIcon,
    selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
    hostAttrs: ["aria-hidden", "true", 1, "mat-mdc-chip-trailing-icon", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_TRAILING_ICON,
      useExisting: _MatChipTrailingIcon
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipTrailingIcon, [{
    type: Directive,
    args: [{
      selector: "mat-chip-trailing-icon, [matChipTrailingIcon]",
      host: {
        "class": "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
        "aria-hidden": "true"
      },
      providers: [{
        provide: MAT_CHIP_TRAILING_ICON,
        useExisting: MatChipTrailingIcon
      }]
    }]
  }], null, null);
})();
var MatChipEdit = class _MatChipEdit extends MatChipAction {
  _isPrimary = false;
  _isLeading = true;
  _handleClick(event) {
    if (!this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip._edit(event);
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip._edit(event);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipEdit_BaseFactory;
    return function MatChipEdit_Factory(__ngFactoryType__) {
      return (\u0275MatChipEdit_BaseFactory || (\u0275MatChipEdit_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipEdit)))(__ngFactoryType__ || _MatChipEdit);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipEdit,
    selectors: [["", "matChipEdit", ""]],
    hostAttrs: ["role", "button", 1, "mat-mdc-chip-edit", "mat-mdc-chip-avatar", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
    hostVars: 1,
    hostBindings: function MatChipEdit_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_EDIT,
      useExisting: _MatChipEdit
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipEdit, [{
    type: Directive,
    args: [{
      selector: "[matChipEdit]",
      host: {
        "class": "mat-mdc-chip-edit mat-mdc-chip-avatar mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
        "role": "button",
        "[attr.aria-hidden]": "null"
      },
      providers: [{
        provide: MAT_CHIP_EDIT,
        useExisting: MatChipEdit
      }]
    }]
  }], null, null);
})();
var MatChipRemove = class _MatChipRemove extends MatChipAction {
  _isPrimary = false;
  _handleClick(event) {
    if (!this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip.remove();
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip.remove();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipRemove_BaseFactory;
    return function MatChipRemove_Factory(__ngFactoryType__) {
      return (\u0275MatChipRemove_BaseFactory || (\u0275MatChipRemove_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipRemove)))(__ngFactoryType__ || _MatChipRemove);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipRemove,
    selectors: [["", "matChipRemove", ""]],
    hostAttrs: ["role", "button", 1, "mat-mdc-chip-remove", "mat-mdc-chip-trailing-icon", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
    hostVars: 1,
    hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_REMOVE,
      useExisting: _MatChipRemove
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRemove, [{
    type: Directive,
    args: [{
      selector: "[matChipRemove]",
      host: {
        "class": "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
        "role": "button",
        "[attr.aria-hidden]": "null"
      },
      providers: [{
        provide: MAT_CHIP_REMOVE,
        useExisting: MatChipRemove
      }]
    }]
  }], null, null);
})();
var MatChip = class _MatChip {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _tagName = inject(HOST_TAG_NAME);
  _ngZone = inject(NgZone);
  _focusMonitor = inject(FocusMonitor);
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _document = inject(DOCUMENT);
  _onFocus = new Subject();
  _onBlur = new Subject();
  _isBasicChip = false;
  role = null;
  _hasFocusInternal = false;
  _pendingFocus = false;
  _actionChanges;
  _animationsDisabled = _animationsDisabled();
  _allLeadingIcons;
  _allTrailingIcons;
  _allEditIcons;
  _allRemoveIcons;
  _hasFocus() {
    return this._hasFocusInternal;
  }
  id = inject(_IdGenerator).getId("mat-mdc-chip-");
  ariaLabel = null;
  ariaDescription = null;
  _chipListDisabled = false;
  _hadFocusOnRemove = false;
  _textElement;
  get value() {
    return this._value !== void 0 ? this._value : this._textElement.textContent.trim();
  }
  set value(value) {
    this._value = value;
  }
  _value;
  color;
  removable = true;
  highlighted = false;
  disableRipple = false;
  get disabled() {
    return this._disabled || this._chipListDisabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  removed = new EventEmitter();
  destroyed = new EventEmitter();
  basicChipAttrName = "mat-basic-chip";
  leadingIcon;
  editIcon;
  trailingIcon;
  removeIcon;
  primaryAction;
  _rippleLoader = inject(MatRippleLoader);
  _injector = inject(Injector);
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    this._monitorFocus();
    this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
      className: "mat-mdc-chip-ripple",
      disabled: this._isRippleDisabled()
    });
  }
  ngOnInit() {
    this._isBasicChip = this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName) || this._tagName.toLowerCase() === this.basicChipAttrName;
  }
  ngAfterViewInit() {
    this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label");
    if (this._pendingFocus) {
      this._pendingFocus = false;
      this.focus();
    }
  }
  ngAfterContentInit() {
    this._actionChanges = merge(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allEditIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  ngDoCheck() {
    this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
  }
  ngOnDestroy() {
    this.destroyed.emit({
      chip: this
    });
    this.destroyed.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
    this._actionChanges?.unsubscribe();
  }
  remove() {
    if (this.removable) {
      this._hadFocusOnRemove = this._hasFocus();
      this.removed.emit({
        chip: this
      });
    }
  }
  _isRippleDisabled() {
    return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !this._hasInteractiveActions() || !!this._globalRippleOptions?.disabled;
  }
  _hasTrailingIcon() {
    return !!(this.trailingIcon || this.removeIcon);
  }
  _handleKeydown(event) {
    if (event.keyCode === BACKSPACE && !event.repeat || event.keyCode === DELETE) {
      event.preventDefault();
      this.remove();
    }
  }
  focus() {
    if (!this.disabled) {
      if (this.primaryAction) {
        this.primaryAction.focus();
      } else {
        this._pendingFocus = true;
      }
    }
  }
  _getSourceAction(target) {
    return this._getActions().find((action) => {
      const element = action._elementRef.nativeElement;
      return element === target || element.contains(target);
    });
  }
  _getActions() {
    const result = [];
    if (this.editIcon) {
      result.push(this.editIcon);
    }
    if (this.primaryAction) {
      result.push(this.primaryAction);
    }
    if (this.removeIcon) {
      result.push(this.removeIcon);
    }
    return result;
  }
  _handlePrimaryActionInteraction() {
  }
  _hasInteractiveActions() {
    return this._getActions().length > 0;
  }
  _edit(event) {
  }
  _monitorFocus() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const hasFocus = origin !== null;
      if (hasFocus !== this._hasFocusInternal) {
        this._hasFocusInternal = hasFocus;
        if (hasFocus) {
          this._onFocus.next({
            chip: this
          });
        } else {
          this._changeDetectorRef.markForCheck();
          setTimeout(() => this._ngZone.run(() => this._onBlur.next({
            chip: this
          })));
        }
      }
    });
  }
  static \u0275fac = function MatChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChip)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChip,
    selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
    contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_CHIP_AVATAR, 5)(dirIndex, MAT_CHIP_EDIT, 5)(dirIndex, MAT_CHIP_TRAILING_ICON, 5)(dirIndex, MAT_CHIP_REMOVE, 5)(dirIndex, MAT_CHIP_AVATAR, 5)(dirIndex, MAT_CHIP_TRAILING_ICON, 5)(dirIndex, MAT_CHIP_EDIT, 5)(dirIndex, MAT_CHIP_REMOVE, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.leadingIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trailingIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allLeadingIcons = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTrailingIcons = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allEditIcons = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allRemoveIcons = _t);
      }
    },
    viewQuery: function MatChip_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatChipAction, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.primaryAction = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-chip"],
    hostVars: 31,
    hostBindings: function MatChip_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatChip_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("role", ctx.role)("aria-label", ctx.ariaLabel);
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-basic-chip", ctx._isBasicChip)("mat-mdc-standard-chip", !ctx._isBasicChip)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon())("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      role: "role",
      id: "id",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaDescription: [0, "aria-description", "ariaDescription"],
      value: "value",
      color: "color",
      removable: [2, "removable", "removable", booleanAttribute],
      highlighted: [2, "highlighted", "highlighted", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      removed: "removed",
      destroyed: "destroyed"
    },
    exportAs: ["matChip"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP,
      useExisting: _MatChip
    }])],
    ngContentSelectors: _c12,
    decls: 8,
    vars: 2,
    consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipContent", ""], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]],
    template: function MatChip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275element(0, "span", 0);
        \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
        \u0275\u0275conditionalCreate(3, MatChip_Conditional_3_Template, 2, 0, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275projection(5);
        \u0275\u0275element(6, "span", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, MatChip_Conditional_7_Template, 2, 0, "span", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.leadingIcon ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._hasTrailingIcon() ? 7 : -1);
      }
    },
    dependencies: [MatChipContent],
    styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {\n  border-width: var(--%NS%mat-chip-outline-width, 1px);\n  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {\n  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));\n}\n.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {\n  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {\n  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));\n  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));\n  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);\n  height: var(--%NS%mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));\n  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));\n  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChip, [{
    type: Component,
    args: [{
      selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
      exportAs: "matChip",
      host: {
        "class": "mat-mdc-chip",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-basic-chip]": "_isBasicChip",
        "[class.mat-mdc-standard-chip]": "!_isBasicChip",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[id]": "id",
        "[attr.role]": "role",
        "[attr.aria-label]": "ariaLabel",
        "(keydown)": "_handleKeydown($event)"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_CHIP,
        useExisting: MatChip
      }],
      imports: [MatChipContent],
      template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipContent>\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n']
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    _allLeadingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_AVATAR, {
        descendants: true
      }]
    }],
    _allTrailingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_TRAILING_ICON, {
        descendants: true
      }]
    }],
    _allEditIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_EDIT, {
        descendants: true
      }]
    }],
    _allRemoveIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_REMOVE, {
        descendants: true
      }]
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaDescription: [{
      type: Input,
      args: ["aria-description"]
    }],
    value: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlighted: [{
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
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removed: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    leadingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_AVATAR]
    }],
    editIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_EDIT]
    }],
    trailingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_TRAILING_ICON]
    }],
    removeIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_REMOVE]
    }],
    primaryAction: [{
      type: ViewChild,
      args: [MatChipAction]
    }]
  });
})();
var MatChipOption = class _MatChipOption extends MatChip {
  _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, {
    optional: true
  });
  chipListSelectable = true;
  _chipListMultiple = false;
  _chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  get selectable() {
    return this._selectable && this.chipListSelectable;
  }
  set selectable(value) {
    this._selectable = value;
    this._changeDetectorRef.markForCheck();
  }
  _selectable = true;
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._setSelectedState(value, false, true);
  }
  _selected = false;
  get ariaSelected() {
    return this.selectable ? this.selected.toString() : null;
  }
  basicChipAttrName = "mat-basic-chip-option";
  selectionChange = new EventEmitter();
  ngOnInit() {
    super.ngOnInit();
    this.role = "presentation";
  }
  select() {
    this._setSelectedState(true, false, true);
  }
  deselect() {
    this._setSelectedState(false, false, true);
  }
  selectViaInteraction() {
    this._setSelectedState(true, true, true);
  }
  toggleSelected(isUserInput = false) {
    this._setSelectedState(!this.selected, isUserInput, true);
    return this.selected;
  }
  _handlePrimaryActionInteraction() {
    if (!this.disabled) {
      this.focus();
      if (this.selectable) {
        this.toggleSelected(true);
      }
    }
  }
  _hasLeadingGraphic() {
    if (this.leadingIcon) {
      return true;
    }
    return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
  }
  _setSelectedState(isSelected, isUserInput, emitEvent) {
    if (isSelected !== this.selected) {
      this._selected = isSelected;
      if (emitEvent) {
        this.selectionChange.emit({
          source: this,
          isUserInput,
          selected: this.selected
        });
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipOption_BaseFactory;
    return function MatChipOption_Factory(__ngFactoryType__) {
      return (\u0275MatChipOption_BaseFactory || (\u0275MatChipOption_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipOption)))(__ngFactoryType__ || _MatChipOption);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipOption,
    selectors: [["mat-basic-chip-option"], ["", "mat-basic-chip-option", ""], ["mat-chip-option"], ["", "mat-chip-option", ""]],
    hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-option"],
    hostVars: 37,
    hostBindings: function MatChipOption_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-description", null)("role", ctx.role);
        \u0275\u0275classProp("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--filter", !ctx._isBasicChip)("mdc-evolution-chip--selectable", !ctx._isBasicChip)("mat-mdc-chip-selected", ctx.selected)("mat-mdc-chip-multiple", ctx._chipListMultiple)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--selected", ctx.selected)("mdc-evolution-chip--selecting", !ctx._animationsDisabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-primary-graphic", ctx._hasLeadingGraphic())("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
      }
    },
    inputs: {
      selectable: [2, "selectable", "selectable", booleanAttribute],
      selected: [2, "selected", "selected", booleanAttribute]
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatChip,
      useExisting: _MatChipOption
    }, {
      provide: MAT_CHIP,
      useExisting: _MatChipOption
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 8,
    vars: 6,
    consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "presentation", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", "role", "option", 3, "_allowFocusWhenDisabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], ["role", "presentation", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "mdc-evolution-chip__checkmark"], ["viewBox", "-2 -3 30 30", "focusable", "false", "aria-hidden", "true", 1, "mdc-evolution-chip__checkmark-svg"], ["fill", "none", "stroke", "currentColor", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-evolution-chip__checkmark-path"]],
    template: function MatChipOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275element(0, "span", 0);
        \u0275\u0275elementStart(1, "span", 1)(2, "button", 2);
        \u0275\u0275conditionalCreate(3, MatChipOption_Conditional_3_Template, 5, 0, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275projection(5);
        \u0275\u0275element(6, "span", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, MatChipOption_Conditional_7_Template, 2, 0, "span", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("_allowFocusWhenDisabled", true);
        \u0275\u0275attribute("aria-description", ctx.ariaDescription)("aria-label", ctx.ariaLabel)("aria-selected", ctx.ariaSelected);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasLeadingGraphic() ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._hasTrailingIcon() ? 7 : -1);
      }
    },
    dependencies: [MatChipAction],
    styles: [_c22],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipOption, [{
    type: Component,
    args: [{
      selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]",
      host: {
        "class": "mat-mdc-chip mat-mdc-chip-option",
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--filter]": "!_isBasicChip",
        "[class.mdc-evolution-chip--selectable]": "!_isBasicChip",
        "[class.mat-mdc-chip-selected]": "selected",
        "[class.mat-mdc-chip-multiple]": "_chipListMultiple",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--selected]": "selected",
        "[class.mdc-evolution-chip--selecting]": "!_animationsDisabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-graphic]": "_hasLeadingGraphic()",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "[id]": "id"
      },
      providers: [{
        provide: MatChip,
        useExisting: MatChipOption
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipOption
      }],
      encapsulation: ViewEncapsulation.None,
      imports: [MatChipAction],
      template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="presentation">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-description]="ariaDescription"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-selected]="ariaSelected"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing" role="presentation">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n']
    }]
  }], null, {
    selectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }]
  });
})();
var MatChipEditInput = class _MatChipEditInput {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  initialize(initialValue) {
    this.getNativeElement().focus();
    this.setValue(initialValue);
  }
  getNativeElement() {
    return this._elementRef.nativeElement;
  }
  setValue(value) {
    this.getNativeElement().textContent = value;
    this._moveCursorToEndOfInput();
  }
  getValue() {
    return this.getNativeElement().textContent || "";
  }
  _moveCursorToEndOfInput() {
    const range = this._document.createRange();
    range.selectNodeContents(this.getNativeElement());
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  static \u0275fac = function MatChipEditInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipEditInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipEditInput,
    selectors: [["span", "matChipEditInput", ""]],
    hostAttrs: ["role", "textbox", "tabindex", "-1", "contenteditable", "true", 1, "mat-chip-edit-input"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipEditInput, [{
    type: Directive,
    args: [{
      selector: "span[matChipEditInput]",
      host: {
        "class": "mat-chip-edit-input",
        "role": "textbox",
        "tabindex": "-1",
        "contenteditable": "true"
      }
    }]
  }], null, null);
})();
var MatChipRow = class _MatChipRow extends MatChip {
  basicChipAttrName = "mat-basic-chip-row";
  _renderer = inject(Renderer2);
  _cleanupMousedown;
  _editStartPending = false;
  editable = false;
  edited = new EventEmitter();
  defaultEditInput;
  contentEditInput;
  _alreadyFocused = false;
  _isEditing = false;
  constructor() {
    super();
    this.role = "row";
    this._onBlur.pipe(takeUntil(this.destroyed)).subscribe(() => {
      if (this._isEditing && !this._editStartPending) {
        this._onEditFinish();
      }
      this._alreadyFocused = false;
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this._cleanupMousedown = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "mousedown", () => {
      this._alreadyFocused = this._hasFocus();
    }));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupMousedown?.();
  }
  _hasLeadingActionIcon() {
    return !this._isEditing && !!this.editIcon;
  }
  _hasTrailingIcon() {
    return !this._isEditing && super._hasTrailingIcon();
  }
  _handleFocus() {
    if (!this._isEditing && !this.disabled) {
      this.focus();
    }
  }
  _handleKeydown(event) {
    if (event.keyCode === ENTER && !this.disabled) {
      if (this._isEditing) {
        event.preventDefault();
        this._onEditFinish();
      } else if (this.editable) {
        this._startEditing(event);
      }
    } else if (this._isEditing) {
      event.stopPropagation();
    } else {
      super._handleKeydown(event);
    }
  }
  _handleClick(event) {
    if (!this.disabled && this.editable && !this._isEditing && this._alreadyFocused) {
      event.preventDefault();
      event.stopPropagation();
      this._startEditing(event);
    }
  }
  _handleDoubleclick(event) {
    if (!this.disabled && this.editable) {
      this._startEditing(event);
    }
  }
  _edit() {
    this._changeDetectorRef.markForCheck();
    this._startEditing();
  }
  _startEditing(event) {
    if (!this.primaryAction || this.removeIcon && !!event && this._getSourceAction(event.target) === this.removeIcon) {
      return;
    }
    const value = this.value;
    this._isEditing = this._editStartPending = true;
    afterNextRender(() => {
      this._getEditInput().initialize(value);
      setTimeout(() => this._ngZone.run(() => this._editStartPending = false));
    }, {
      injector: this._injector
    });
  }
  _onEditFinish() {
    this._isEditing = this._editStartPending = false;
    this.edited.emit({
      chip: this,
      value: this._getEditInput().getValue()
    });
    if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
      this.primaryAction.focus();
    }
  }
  _isRippleDisabled() {
    return super._isRippleDisabled() || this._isEditing;
  }
  _getEditInput() {
    return this.contentEditInput || this.defaultEditInput;
  }
  static \u0275fac = function MatChipRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipRow,
    selectors: [["mat-chip-row"], ["", "mat-chip-row", ""], ["mat-basic-chip-row"], ["", "mat-basic-chip-row", ""]],
    contentQueries: function MatChipRow_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChipEditInput, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentEditInput = _t.first);
      }
    },
    viewQuery: function MatChipRow_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatChipEditInput, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultEditInput = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-row", "mdc-evolution-chip"],
    hostVars: 29,
    hostBindings: function MatChipRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatChipRow_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("click", function MatChipRow_click_HostBindingHandler($event) {
          return ctx._hasInteractiveActions() ? ctx._handleClick($event) : null;
        })("dblclick", function MatChipRow_dblclick_HostBindingHandler($event) {
          return ctx._handleDoubleclick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-description", null)("role", ctx.role);
        \u0275\u0275classProp("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-editing", ctx._isEditing)("mat-mdc-chip-editable", ctx.editable)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-leading-action", ctx._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
      }
    },
    inputs: {
      editable: "editable"
    },
    outputs: {
      edited: "edited"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatChip,
      useExisting: _MatChipRow
    }, {
      provide: MAT_CHIP,
      useExisting: _MatChipRow
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c42,
    decls: 9,
    vars: 8,
    consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--leading"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], ["matChipEditInput", ""]],
    template: function MatChipRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c32);
        \u0275\u0275conditionalCreate(0, MatChipRow_Conditional_0_Template, 1, 0, "span", 0);
        \u0275\u0275conditionalCreate(1, MatChipRow_Conditional_1_Template, 2, 0, "span", 1);
        \u0275\u0275elementStart(2, "span", 2);
        \u0275\u0275conditionalCreate(3, MatChipRow_Conditional_3_Template, 2, 0, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275conditionalCreate(5, MatChipRow_Conditional_5_Template, 2, 1)(6, MatChipRow_Conditional_6_Template, 1, 0);
        \u0275\u0275element(7, "span", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, MatChipRow_Conditional_8_Template, 2, 0, "span", 6);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx._isEditing ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasLeadingActionIcon() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-description", ctx.ariaDescription)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.leadingIcon ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isEditing ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx._hasTrailingIcon() ? 8 : -1);
      }
    },
    dependencies: [MatChipAction, MatChipEditInput],
    styles: [_c22],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRow, [{
    type: Component,
    args: [{
      selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]",
      host: {
        "class": "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-editing]": "_isEditing",
        "[class.mat-mdc-chip-editable]": "editable",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-leading-action]": "_hasLeadingActionIcon()",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[id]": "id",
        "[attr.tabindex]": "disabled ? null : -1",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "(focus)": "_handleFocus()",
        "(click)": "this._hasInteractiveActions() ? _handleClick($event) : null",
        "(dblclick)": "_handleDoubleclick($event)"
      },
      providers: [{
        provide: MatChip,
        useExisting: MatChipRow
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipRow
      }],
      encapsulation: ViewEncapsulation.None,
      imports: [MatChipAction, MatChipEditInput],
      template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n@if (_hasLeadingActionIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--leading" role="gridcell">\n    <ng-content select="[matChipEdit]"></ng-content>\n  </span>\n}\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-description]="ariaDescription"\n    [attr.aria-label]="ariaLabel">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n']
    }]
  }], () => [], {
    editable: [{
      type: Input
    }],
    edited: [{
      type: Output
    }],
    defaultEditInput: [{
      type: ViewChild,
      args: [MatChipEditInput]
    }],
    contentEditInput: [{
      type: ContentChild,
      args: [MatChipEditInput]
    }]
  });
})();
var MatChipSet = class _MatChipSet {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _lastDestroyedFocusedChipIndex = null;
  _keyManager;
  _destroyed = new Subject();
  _defaultRole = "presentation";
  get chipFocusChanges() {
    return this._getChipStream((chip) => chip._onFocus);
  }
  get chipDestroyedChanges() {
    return this._getChipStream((chip) => chip.destroyed);
  }
  get chipRemovedChanges() {
    return this._getChipStream((chip) => chip.removed);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._syncChipsState();
  }
  _disabled = false;
  get empty() {
    return !this._chips || this._chips.length === 0;
  }
  get role() {
    if (this._explicitRole) {
      return this._explicitRole;
    }
    return this.empty ? null : this._defaultRole;
  }
  tabIndex = 0;
  set role(value) {
    this._explicitRole = value;
  }
  _explicitRole = null;
  get focused() {
    return this._hasFocusedChip();
  }
  _chips;
  _chipActions = new QueryList();
  ngAfterViewInit() {
    this._setUpFocusManagement();
    this._trackChipSetChanges();
    this._trackDestroyedFocusedChip();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._chipActions.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _hasFocusedChip() {
    return this._chips && this._chips.some((chip) => chip._hasFocus());
  }
  _syncChipsState() {
    this._chips?.forEach((chip) => {
      chip._chipListDisabled = this._disabled;
      chip._changeDetectorRef.markForCheck();
    });
  }
  focus() {
  }
  _handleKeydown(event) {
    if (this._originatesFromChip(event)) {
      this._keyManager.onKeydown(event);
    }
  }
  _isValidIndex(index) {
    return index >= 0 && index < this._chips.length;
  }
  _allowFocusEscape() {
    const previous = this._elementRef.nativeElement.tabIndex;
    if (previous !== -1) {
      this._elementRef.nativeElement.tabIndex = -1;
      setTimeout(() => this._elementRef.nativeElement.tabIndex = previous);
    }
  }
  _getChipStream(mappingFunction) {
    return this._chips.changes.pipe(startWith(null), switchMap(() => merge(...this._chips.map(mappingFunction))));
  }
  _originatesFromChip(event) {
    let currentElement = event.target;
    while (currentElement && currentElement !== this._elementRef.nativeElement) {
      if (currentElement.classList.contains("mat-mdc-chip")) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }
  _setUpFocusManagement() {
    this._chips.changes.pipe(startWith(this._chips)).subscribe((chips) => {
      const actions = [];
      chips.forEach((chip) => chip._getActions().forEach((action) => actions.push(action)));
      this._chipActions.reset(actions);
      this._chipActions.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate((action) => this._skipPredicate(action));
    this.chipFocusChanges.pipe(takeUntil(this._destroyed)).subscribe(({
      chip
    }) => {
      const action = chip._getSourceAction(document.activeElement);
      if (action) {
        this._keyManager.updateActiveItem(action);
      }
    });
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe((direction) => this._keyManager.withHorizontalOrientation(direction));
  }
  _skipPredicate(action) {
    return action.disabled;
  }
  _trackChipSetChanges() {
    this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      if (this.disabled) {
        Promise.resolve().then(() => this._syncChipsState());
      }
      this._redirectDestroyedChipFocus();
    });
  }
  _trackDestroyedFocusedChip() {
    this.chipDestroyedChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      const chipArray = this._chips.toArray();
      const chipIndex = chipArray.indexOf(event.chip);
      const hasFocus = event.chip._hasFocus();
      const wasLastFocused = event.chip._hadFocusOnRemove && this._keyManager.activeItem && event.chip._getActions().includes(this._keyManager.activeItem);
      const shouldMoveFocus = hasFocus || wasLastFocused;
      if (this._isValidIndex(chipIndex) && shouldMoveFocus) {
        this._lastDestroyedFocusedChipIndex = chipIndex;
      }
    });
  }
  _redirectDestroyedChipFocus() {
    if (this._lastDestroyedFocusedChipIndex == null) {
      return;
    }
    if (this._chips.length) {
      const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
      const chipToFocus = this._chips.toArray()[newIndex];
      if (chipToFocus.disabled) {
        if (this._chips.length === 1) {
          this.focus();
        } else {
          this._keyManager.setPreviousItemActive();
        }
      } else {
        chipToFocus.focus();
      }
    } else {
      this.focus();
    }
    this._lastDestroyedFocusedChipIndex = null;
  }
  static \u0275fac = function MatChipSet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipSet)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipSet,
    selectors: [["mat-chip-set"]],
    contentQueries: function MatChipSet_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChip, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._chips = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
    hostVars: 1,
    hostBindings: function MatChipSet_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatChipSet_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      role: "role",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c52,
    decls: 2,
    vars: 0,
    consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
    template: function MatChipSet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipSet, [{
    type: Component,
    args: [{
      selector: "mat-chip-set",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mat-mdc-chip-set mdc-evolution-chip-set",
        "(keydown)": "_handleKeydown($event)",
        "[attr.role]": "role"
      },
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    role: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChip, {
        descendants: true
      }]
    }]
  });
})();
var MatChipListboxChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatChipListbox),
  multi: true
};
var MatChipListbox = class _MatChipListbox extends MatChipSet {
  _onTouched = () => {
  };
  _onChange = () => {
  };
  _defaultRole = "listbox";
  _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, {
    optional: true
  });
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._syncListboxProperties();
  }
  _multiple = false;
  get selected() {
    const selectedChips = this._chips.toArray().filter((chip) => chip.selected);
    return this.multiple ? selectedChips : selectedChips[0];
  }
  ariaOrientation = "horizontal";
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    this._selectable = value;
    this._syncListboxProperties();
  }
  _selectable = true;
  compareWith = (o1, o2) => o1 === o2;
  required = false;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncListboxProperties();
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  get chipSelectionChanges() {
    return this._getChipStream((chip) => chip.selectionChange);
  }
  get chipBlurChanges() {
    return this._getChipStream((chip) => chip._onBlur);
  }
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._chips && this._chips.length) {
      this._setSelectionByValue(value, false);
    }
    this._value = value;
  }
  _value;
  change = new EventEmitter();
  _chips = void 0;
  ngAfterContentInit() {
    this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      if (this.value !== void 0) {
        Promise.resolve().then(() => {
          this._setSelectionByValue(this.value, false);
        });
      }
      this._syncListboxProperties();
    });
    this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._blur());
    this.chipSelectionChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (!this.multiple) {
        this._chips.forEach((chip) => {
          if (chip !== event.source) {
            chip._setSelectedState(false, false, false);
          }
        });
      }
      if (event.isUserInput) {
        this._propagateChanges();
      }
    });
  }
  focus() {
    if (this.disabled) {
      return;
    }
    const firstSelectedChip = this._getFirstSelectedChip();
    if (firstSelectedChip && !firstSelectedChip.disabled) {
      firstSelectedChip.focus();
    } else if (this._chips.length > 0) {
      this._keyManager.setFirstItemActive();
    } else {
      this._elementRef.nativeElement.focus();
    }
  }
  writeValue(value) {
    if (value != null) {
      this.value = value;
    } else {
      this.value = void 0;
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _setSelectionByValue(value, isUserInput = true) {
    this._clearSelection();
    if (Array.isArray(value)) {
      value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
    } else {
      this._selectValue(value, isUserInput);
    }
  }
  _blur() {
    if (!this.disabled) {
      setTimeout(() => {
        if (!this.focused) {
          this._markAsTouched();
        }
      });
    }
  }
  _keydown(event) {
    if (event.keyCode === TAB) {
      super._allowFocusEscape();
    }
  }
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
  }
  _propagateChanges() {
    let valueToEmit = null;
    if (Array.isArray(this.selected)) {
      valueToEmit = this.selected.map((chip) => chip.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : void 0;
    }
    this._value = valueToEmit;
    this.change.emit(new MatChipListboxChange(this, valueToEmit));
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  _clearSelection(skip) {
    this._chips.forEach((chip) => {
      if (chip !== skip) {
        chip.deselect();
      }
    });
  }
  _selectValue(value, isUserInput) {
    const correspondingChip = this._chips.find((chip) => {
      return chip.value != null && this.compareWith(chip.value, value);
    });
    if (correspondingChip) {
      isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
    }
    return correspondingChip;
  }
  _syncListboxProperties() {
    if (this._chips) {
      Promise.resolve().then(() => {
        this._chips.forEach((chip) => {
          chip._chipListMultiple = this.multiple;
          chip.chipListSelectable = this._selectable;
          chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
          chip._changeDetectorRef.markForCheck();
        });
      });
    }
  }
  _getFirstSelectedChip() {
    if (Array.isArray(this.selected)) {
      return this.selected.length ? this.selected[0] : void 0;
    } else {
      return this.selected;
    }
  }
  _skipPredicate(action) {
    return false;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipListbox_BaseFactory;
    return function MatChipListbox_Factory(__ngFactoryType__) {
      return (\u0275MatChipListbox_BaseFactory || (\u0275MatChipListbox_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipListbox)))(__ngFactoryType__ || _MatChipListbox);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipListbox,
    selectors: [["mat-chip-listbox"]],
    contentQueries: function MatChipListbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChipOption, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._chips = _t);
      }
    },
    hostAttrs: [1, "mdc-evolution-chip-set", "mat-mdc-chip-listbox"],
    hostVars: 10,
    hostBindings: function MatChipListbox_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatChipListbox_focus_HostBindingHandler() {
          return ctx.focus();
        })("blur", function MatChipListbox_blur_HostBindingHandler() {
          return ctx._blur();
        })("keydown", function MatChipListbox_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx.disabled || ctx.empty ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("role", ctx.role)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-multiselectable", ctx.multiple)("aria-orientation", ctx.ariaOrientation);
        \u0275\u0275classProp("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-required", ctx.required);
      }
    },
    inputs: {
      multiple: [2, "multiple", "multiple", booleanAttribute],
      ariaOrientation: [0, "aria-orientation", "ariaOrientation"],
      selectable: [2, "selectable", "selectable", booleanAttribute],
      compareWith: "compareWith",
      required: [2, "required", "required", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      value: "value"
    },
    outputs: {
      change: "change"
    },
    features: [\u0275\u0275ProvidersFeature([MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c52,
    decls: 2,
    vars: 0,
    consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
    template: function MatChipListbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    styles: [_c62],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipListbox, [{
    type: Component,
    args: [{
      selector: "mat-chip-listbox",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mdc-evolution-chip-set mat-mdc-chip-listbox",
        "[attr.role]": "role",
        "[tabIndex]": "(disabled || empty) ? -1 : tabIndex",
        "[attr.aria-required]": "role ? required : null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-multiselectable]": "multiple",
        "[attr.aria-orientation]": "ariaOrientation",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()",
        "(keydown)": "_keydown($event)"
      },
      providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR],
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"]
    }]
  }], null, {
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaOrientation: [{
      type: Input,
      args: ["aria-orientation"]
    }],
    selectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChipOption, {
        descendants: true
      }]
    }]
  });
})();
var MatChipGridChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatChipGrid = class _MatChipGrid extends MatChipSet {
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  controlType = "mat-chip-grid";
  _chipInput;
  _defaultRole = "grid";
  _errorStateTracker;
  _uid = inject(_IdGenerator).getId("mat-chip-grid-");
  _ariaDescribedbyIds = [];
  _onTouched = () => {
  };
  _onChange = () => {
  };
  get disabled() {
    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._syncChipsState();
    this.stateChanges.next();
  }
  get id() {
    return this._chipInput ? this._chipInput.id : this._uid;
  }
  get empty() {
    return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
  }
  get placeholder() {
    return this._chipInput ? this._chipInput.placeholder : this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  _placeholder = "";
  get focused() {
    return this._chipInput?.focused || this._hasFocusedChip();
  }
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  _required;
  get shouldLabelFloat() {
    return !this.empty || this.focused;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  _value = [];
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  get chipBlurChanges() {
    return this._getChipStream((chip) => chip._onBlur);
  }
  change = new EventEmitter();
  valueChange = new EventEmitter();
  _chips = void 0;
  stateChanges = new Subject();
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor() {
    super();
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const formField = inject(FORM_FIELD, {
      optional: true,
      self: true
    });
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, formField || this.ngControl, parentFormGroup, parentForm, this.stateChanges);
  }
  ngAfterContentInit() {
    this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._blur();
      this.stateChanges.next();
    });
    merge(this.chipFocusChanges, this._chips.changes).pipe(takeUntil(this._destroyed)).subscribe(() => this.stateChanges.next());
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.stateChanges.complete();
  }
  registerInput(inputElement) {
    this._chipInput = inputElement;
    this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
    this._elementRef.nativeElement.removeAttribute("aria-describedby");
  }
  onContainerClick(event) {
    if (!this.disabled && !this._originatesFromChip(event)) {
      this.focus();
    }
  }
  focus() {
    if (this.disabled || this._chipInput?.focused) {
      return;
    }
    if (!this._chips.length || this._chips.first.disabled) {
      if (!this._chipInput) {
        return;
      }
      Promise.resolve().then(() => this._chipInput.focus());
    } else {
      const activeItem = this._keyManager.activeItem;
      if (activeItem) {
        activeItem.focus();
      } else {
        this._keyManager.setFirstItemActive();
      }
    }
    this.stateChanges.next();
  }
  get describedByIds() {
    if (this._chipInput) {
      return this._chipInput.describedByIds || [];
    }
    const existing = this._elementRef.nativeElement.getAttribute("aria-describedby");
    return existing ? existing.split(" ") : [];
  }
  setDescribedByIds(ids) {
    this._ariaDescribedbyIds = ids;
    if (this._chipInput) {
      this._chipInput.setDescribedByIds(ids);
    } else if (ids.length) {
      this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
    } else {
      this._elementRef.nativeElement.removeAttribute("aria-describedby");
    }
  }
  writeValue(value) {
    this._value = value;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _blur() {
    if (!this.disabled) {
      setTimeout(() => {
        if (!this.focused) {
          this._propagateChanges();
          this._markAsTouched();
        }
      });
    }
  }
  _allowFocusEscape() {
    if (!this._chipInput?.focused) {
      super._allowFocusEscape();
    }
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const activeItem = this._keyManager.activeItem;
    if (keyCode === TAB) {
      if (this._chipInput?.focused && hasModifierKey(event, "shiftKey") && this._chips.length && !this._chips.last.disabled) {
        event.preventDefault();
        if (activeItem) {
          this._keyManager.setActiveItem(activeItem);
        } else {
          this._focusLastChip();
        }
      } else {
        super._allowFocusEscape();
      }
    } else if (!this._chipInput?.focused) {
      if ((keyCode === UP_ARROW || keyCode === DOWN_ARROW) && activeItem) {
        const eligibleActions = this._chipActions.filter((action) => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
        const currentIndex = eligibleActions.indexOf(activeItem);
        const delta = event.keyCode === UP_ARROW ? -1 : 1;
        event.preventDefault();
        if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
          this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
        }
      } else {
        super._handleKeydown(event);
      }
    }
    this.stateChanges.next();
  }
  _redirectDestroyedChipFocus() {
    if (this._lastDestroyedFocusedChipIndex === null) {
      return;
    }
    super._redirectDestroyedChipFocus();
    if (!this._chips.length || this._chips.length === 1 && this._chips.first.disabled) {
      this._keyManager.updateActiveItem(-1);
    }
  }
  _focusLastChip() {
    if (this._chips.length) {
      this._chips.last.focus();
    }
  }
  _propagateChanges() {
    const valueToEmit = this._chips.length ? this._chips.toArray().map((chip) => chip.value) : [];
    this._value = valueToEmit;
    this.change.emit(new MatChipGridChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  static \u0275fac = function MatChipGrid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipGrid)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipGrid,
    selectors: [["mat-chip-grid"]],
    contentQueries: function MatChipGrid_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChipRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._chips = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-chip-set", "mat-mdc-chip-grid", "mdc-evolution-chip-set"],
    hostVars: 10,
    hostBindings: function MatChipGrid_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatChipGrid_focus_HostBindingHandler() {
          return ctx.focus();
        })("blur", function MatChipGrid_blur_HostBindingHandler() {
          return ctx._blur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx.disabled || ctx._chips && ctx._chips.length === 0 ? -1 : ctx.tabIndex)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState);
        \u0275\u0275classProp("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-invalid", ctx.errorState)("mat-mdc-chip-list-required", ctx.required);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      placeholder: "placeholder",
      required: [2, "required", "required", booleanAttribute],
      value: "value",
      errorStateMatcher: "errorStateMatcher"
    },
    outputs: {
      change: "change",
      valueChange: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatChipGrid
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c52,
    decls: 2,
    vars: 0,
    consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
    template: function MatChipGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    styles: [_c62],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipGrid, [{
    type: Component,
    args: [{
      selector: "mat-chip-grid",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set",
        "[attr.role]": "role",
        "[attr.tabindex]": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-invalid]": "errorState",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatChipGrid
      }],
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChipRow, {
        descendants: true
      }]
    }]
  });
})();
var MatChipInput = class _MatChipInput {
  _elementRef = inject(ElementRef);
  focused = false;
  get chipGrid() {
    return this._chipGrid;
  }
  set chipGrid(value) {
    if (value) {
      this._chipGrid = value;
      this._chipGrid.registerInput(this);
    }
  }
  _chipGrid;
  addOnBlur = false;
  separatorKeyCodes;
  chipEnd = new EventEmitter();
  placeholder = "";
  id = inject(_IdGenerator).getId("mat-mdc-chip-list-input-");
  get disabled() {
    return this._disabled || this._chipGrid && this._chipGrid.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  readonly = false;
  disabledInteractive;
  get empty() {
    return !this.inputElement.value;
  }
  inputElement;
  constructor() {
    const defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS);
    const formField = inject(MAT_FORM_FIELD, {
      optional: true
    });
    this.inputElement = this._elementRef.nativeElement;
    this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
    this.disabledInteractive = defaultOptions.inputDisabledInteractive ?? false;
    if (formField) {
      this.inputElement.classList.add("mat-mdc-form-field-input-control");
    }
  }
  ngOnChanges() {
    this._chipGrid.stateChanges.next();
  }
  ngOnDestroy() {
    this.chipEnd.complete();
  }
  _keydown(event) {
    if (this.empty && event.keyCode === BACKSPACE) {
      if (!event.repeat) {
        this._chipGrid._focusLastChip();
      }
      event.preventDefault();
    } else {
      this._emitChipEnd(event);
    }
  }
  _blur() {
    if (this.addOnBlur) {
      this._emitChipEnd();
    }
    this.focused = false;
    if (!this._chipGrid.focused) {
      this._chipGrid._blur();
    }
    this._chipGrid.stateChanges.next();
  }
  _focus() {
    this.focused = true;
    this._chipGrid.stateChanges.next();
  }
  _emitChipEnd(event) {
    if (!event || this._isSeparatorKey(event) && !event.repeat) {
      this.chipEnd.emit({
        input: this.inputElement,
        value: this.inputElement.value,
        chipInput: this
      });
      event?.preventDefault();
    }
  }
  _onInput() {
    this._chipGrid.stateChanges.next();
  }
  focus() {
    this.inputElement.focus();
  }
  clear() {
    this.inputElement.value = "";
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  _isSeparatorKey(event) {
    if (!this.separatorKeyCodes) {
      return false;
    }
    for (const key of this.separatorKeyCodes) {
      let keyCode;
      let modifiers;
      if (typeof key === "number") {
        keyCode = key;
        modifiers = null;
      } else {
        keyCode = key.keyCode;
        modifiers = key.modifiers;
      }
      const modifiersMatch = !modifiers?.length ? !hasModifierKey(event) : hasModifierKey(event, ...modifiers);
      if (keyCode === event.keyCode && modifiersMatch) {
        return true;
      }
    }
    return false;
  }
  _getReadonlyAttribute() {
    return this.readonly || this.disabled && this.disabledInteractive ? "true" : null;
  }
  static \u0275fac = function MatChipInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipInput,
    selectors: [["input", "matChipInputFor", ""]],
    hostAttrs: [1, "mat-mdc-chip-input", "mat-mdc-input-element", "mdc-text-field__input", "mat-input-element"],
    hostVars: 8,
    hostBindings: function MatChipInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        })("blur", function MatChipInput_blur_HostBindingHandler() {
          return ctx._blur();
        })("focus", function MatChipInput_focus_HostBindingHandler() {
          return ctx._focus();
        })("input", function MatChipInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("disabled", ctx.disabled && !ctx.disabledInteractive ? "" : null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipGrid && ctx._chipGrid.ngControl ? ctx._chipGrid.ngControl.invalid : null)("aria-required", ctx._chipGrid && ctx._chipGrid.required || null)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("readonly", ctx._getReadonlyAttribute())("required", ctx._chipGrid && ctx._chipGrid.required || null);
      }
    },
    inputs: {
      chipGrid: [0, "matChipInputFor", "chipGrid"],
      addOnBlur: [2, "matChipInputAddOnBlur", "addOnBlur", booleanAttribute],
      separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
      placeholder: "placeholder",
      id: "id",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      disabledInteractive: [2, "matChipInputDisabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      chipEnd: "matChipInputTokenEnd"
    },
    exportAs: ["matChipInput", "matChipInputFor"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipInput, [{
    type: Directive,
    args: [{
      selector: "input[matChipInputFor]",
      exportAs: "matChipInput, matChipInputFor",
      host: {
        "class": "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element",
        "(keydown)": "_keydown($event)",
        "(blur)": "_blur()",
        "(focus)": "_focus()",
        "(input)": "_onInput()",
        "[id]": "id",
        "[attr.disabled]": 'disabled && !disabledInteractive ? "" : null',
        "[attr.placeholder]": "placeholder || null",
        "[attr.aria-invalid]": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null",
        "[attr.aria-required]": "_chipGrid && _chipGrid.required || null",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.required]": "_chipGrid && _chipGrid.required || null"
      }
    }]
  }], () => [], {
    chipGrid: [{
      type: Input,
      args: ["matChipInputFor"]
    }],
    addOnBlur: [{
      type: Input,
      args: [{
        alias: "matChipInputAddOnBlur",
        transform: booleanAttribute
      }]
    }],
    separatorKeyCodes: [{
      type: Input,
      args: ["matChipInputSeparatorKeyCodes"]
    }],
    chipEnd: [{
      type: Output,
      args: ["matChipInputTokenEnd"]
    }],
    placeholder: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        alias: "matChipInputDisabledInteractive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CHIP_DECLARATIONS = [MatChip, MatChipAvatar, MatChipEdit, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon];
var MatChipsModule = class _MatChipsModule {
  static \u0275fac = function MatChipsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatChipsModule,
    imports: [MatRippleModule, MatChipAction, MatChip, MatChipAvatar, MatChipEdit, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon],
    exports: [BidiModule, MatChip, MatChipAvatar, MatChipEdit, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ErrorStateMatcher, {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER]
      }
    }],
    imports: [MatRippleModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipsModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatChipAction, CHIP_DECLARATIONS],
      exports: [BidiModule, CHIP_DECLARATIONS],
      providers: [ErrorStateMatcher, {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [ENTER]
        }
      }]
    }]
  }], null, null);
})();

export {
  SharedResizeObserver,
  MatLabel,
  MatError,
  MatHint,
  MatPrefix,
  MatSuffix,
  MatFormFieldControl,
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldModule,
  form,
  disabled,
  validate,
  email,
  min,
  required,
  FORM_FIELD,
  FormField,
  MatInput,
  MatInputModule,
  MAT_CHIPS_DEFAULT_OPTIONS,
  MatChipRemove,
  MatChipRow,
  MatChipGrid,
  MatChipInput,
  MatChipsModule
};
//# debugId=29da7870-47c1-5d8e-932d-8e16cf0f0f05
//# sourceMappingURL=chunk-4FMEA3CF.js.map
