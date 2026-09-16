import {
  FORM_FIELD,
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule
} from "./chunk-CIOF3O5C.js";
import {
  ActiveDescendantKeyManager,
  BACKSPACE,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  COMMA,
  CdkScrollableModule,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DELETE,
  DOCUMENT,
  DOWN_ARROW,
  Directionality,
  Directive,
  ENTER,
  ESCAPE,
  ElementRef,
  EnvironmentInjector,
  ErrorStateMatcher,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  FormGroupDirective,
  HOST_TAG_NAME,
  IconComponent,
  InjectionToken,
  Injector,
  Input,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  MatRippleLoader,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  NgModule,
  NgZone,
  Observable,
  Output,
  OverlayConfig,
  OverlayModule,
  Platform,
  QueryList,
  Renderer2,
  SPACE,
  Subject,
  Subscription,
  TAB,
  TemplatePortal,
  TemplateRef,
  UP_ARROW,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _ErrorStateTracker,
  _IdGenerator,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  afterNextRender,
  booleanAttribute,
  coerceArray,
  computed,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  defer,
  delay,
  filter,
  forwardRef,
  hasModifierKey,
  inject,
  input,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  viewChild,
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
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-JABNH3I5.js";

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c0 = ["panel"];
var _c1 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
    \u0275\u0275domProperty("id", ctx_r1.id);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var MatAutocompleteSelectedEvent = class {
  source;
  option;
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: () => ({
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  })
});
var MatAutocomplete = class _MatAutocomplete {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _activeOptionChanges = Subscription.EMPTY;
  _keyManager;
  showPanel = false;
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  _isOpen = false;
  _latestOpeningTrigger;
  _setColor(value) {
    this._color = value;
    this._changeDetectorRef.markForCheck();
  }
  _color;
  template;
  panel;
  options;
  optionGroups;
  ariaLabel;
  ariaLabelledby;
  displayWith = null;
  autoActiveFirstOption;
  autoSelectActiveOption;
  requireSelection;
  panelWidth;
  disableRipple = false;
  optionSelected = new EventEmitter();
  opened = new EventEmitter();
  closed = new EventEmitter();
  optionActivated = new EventEmitter();
  set classList(value) {
    this._classList = value;
    this._elementRef.nativeElement.className = "";
  }
  _classList;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator;
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  id = inject(_IdGenerator).getId("mat-autocomplete-");
  inertGroups;
  constructor() {
    const platform = inject(Platform);
    this.inertGroups = platform?.SAFARI || false;
    this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    this.requireSelection = !!this._defaults.requireSelection;
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  _setVisibility() {
    this.showPanel = !!this.options?.length;
    this._changeDetectorRef.markForCheck();
  }
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  _skipPredicate() {
    return false;
  }
  static \u0275fac = function MatAutocomplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocomplete)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatOption, 5)(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatAutocomplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7)(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-autocomplete"],
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      displayWith: "displayWith",
      autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute],
      autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute],
      requireSelection: [2, "requireSelection", "requireSelection", booleanAttribute],
      panelWidth: "panelWidth",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      classList: [0, "class", "classList"],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed",
      optionActivated: "optionActivated"
    },
    exportAs: ["matAutocomplete"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatAutocomplete
    }])],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]],
    template: function MatAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
      }
    },
    styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matAutocomplete",
      host: {
        "class": "mat-mdc-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));\n  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"]
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSelectActiveOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    requireSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelWidth: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteOrigin = class _MatAutocompleteOrigin {
  elementRef = inject(ElementRef);
  static \u0275fac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], null, null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var MatAutocompleteTrigger = class _MatAutocompleteTrigger {
  _environmentInjector = inject(EnvironmentInjector);
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _zone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true,
    host: true
  });
  _viewportRuler = inject(ViewportRuler);
  _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef = null;
  _portal;
  _componentDestroyed = false;
  _initialized = new Subject();
  _keydownSubscription;
  _outsideClickSubscription;
  _cleanupWindowBlur;
  _previousValue = null;
  _valueOnAttach = null;
  _valueOnLastKeydown = null;
  _positionStrategy;
  _manuallyFloatingLabel = false;
  _closingActionsSubscription;
  _viewportSubscription = Subscription.EMPTY;
  _breakpointObserver = inject(BreakpointObserver);
  _handsetLandscapeSubscription = Subscription.EMPTY;
  _canOpenOnNextFocus = true;
  _valueBeforeAutoSelection;
  _pendingAutoselectedOption = null;
  _closeKeyEventStream = new Subject();
  _overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
  _windowBlurHandler = () => {
    this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
  };
  _onChange = () => {
  };
  _onTouched = () => {
  };
  autocomplete;
  position = "auto";
  connectedTo;
  autocompleteAttribute = "off";
  autocompleteDisabled = false;
  _aboveClass = "mat-mdc-autocomplete-panel-above";
  ngAfterViewInit() {
    this._initialized.next();
    this._initialized.complete();
    this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    this._cleanupWindowBlur?.();
    this._handsetLandscapeSubscription.unsubscribe();
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
  }
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  _overlayAttached = false;
  openPanel() {
    this._openPanelInternal();
  }
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    if (this.autocomplete._latestOpeningTrigger === this) {
      this.autocomplete._isOpen = false;
      this.autocomplete._latestOpeningTrigger = null;
    }
    this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    this._updatePanelState();
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
  }
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(map((event) => event instanceof MatOptionSelectionChange ? event : null));
  }
  optionSelections = defer(() => {
    const options = this.autocomplete ? this.autocomplete.options : null;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelections));
  });
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  _getOutsideClickStream() {
    return new Observable((observer) => {
      const listener = (event) => {
        const clickTarget = _getEventTarget(event);
        const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
        const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
        if (this._overlayAttached && clickTarget !== this._element.nativeElement && !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
          observer.next(event);
        }
      };
      const cleanups = [this._renderer.listen("document", "click", listener), this._renderer.listen("document", "auxclick", listener), this._renderer.listen("document", "touchend", listener)];
      return () => {
        cleanups.forEach((current) => current());
      };
    });
  }
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(e) {
    const event = e;
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    this._valueOnLastKeydown = this._element.nativeElement.value;
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this._openPanelInternal(this._valueOnLastKeydown);
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._valueOnLastKeydown;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      if (!this.autocomplete || !this.autocomplete.requireSelection) {
        this._onChange(value);
      }
      if (!value) {
        this._clearPreviousSelectedOption(null, false);
      } else if (this.panelOpen && !this.autocomplete.requireSelection) {
        const selectedOption = this.autocomplete.options?.find((option) => option.selected);
        if (selectedOption) {
          const display = this._getDisplayValue(selectedOption.value);
          if (value !== display) {
            selectedOption.deselect(false);
          }
        }
      }
      if (this._canOpen() && this._hasFocus()) {
        const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
        this._valueOnLastKeydown = null;
        this._openPanelInternal(valueOnAttach);
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay(this._previousValue);
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this._openPanelInternal();
    }
  }
  _hasFocus() {
    return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
  }
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = "auto";
      }
      this._manuallyFloatingLabel = false;
    }
  }
  _subscribeToClosingActions() {
    const initialRender = new Observable((subscriber) => {
      afterNextRender(() => {
        subscriber.next();
      }, {
        injector: this._environmentInjector
      });
    });
    const optionChanges = this.autocomplete.options?.changes.pipe(tap(() => this._positionStrategy.reapplyLastPosition()), delay(0)) ?? of();
    return merge(initialRender, optionChanges).pipe(switchMap(() => this._zone.run(() => {
      const wasOpen = this.panelOpen;
      this._resetActiveItem();
      this._updatePanelState();
      this._changeDetectorRef.detectChanges();
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
      if (wasOpen !== this.panelOpen) {
        if (this.panelOpen) {
          this._emitOpened();
        } else {
          this.autocomplete.closed.emit();
        }
      }
      return this.panelClosingActions;
    })), take(1)).subscribe((event) => this._setValueAndClose(event));
  }
  _emitOpened() {
    this.autocomplete.opened.emit();
  }
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  _getDisplayValue(value) {
    const autocomplete = this.autocomplete;
    return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
  }
  _assignOptionValue(value) {
    const toDisplay = this._getDisplayValue(value);
    if (value == null) {
      this._clearPreviousSelectedOption(null, false);
    }
    this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
  }
  _updateNativeInputValue(value) {
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  _setValueAndClose(event) {
    const panel = this.autocomplete;
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      panel._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
      this._clearPreviousSelectedOption(null);
      this._assignOptionValue(null);
      this._onChange(null);
    }
    this.closePanel();
  }
  _clearPreviousSelectedOption(skip, emitEvent) {
    this.autocomplete?.options?.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect(emitEvent);
      }
    });
  }
  _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
    this._attachOverlay(valueOnAttach);
    this._floatLabel();
  }
  _attachOverlay(valueOnAttach) {
    if (!this.autocomplete) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getMatAutocompleteMissingPanelError();
      } else {
        return;
      }
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
      this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
        const isHandsetLandscape = result.matches;
        if (isHandsetLandscape) {
          this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
        } else {
          this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._valueOnAttach = valueOnAttach;
      this._valueOnLastKeydown = null;
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._latestOpeningTrigger = this;
    this.autocomplete._setColor(this._formField?.color);
    this._updatePanelState();
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this._emitOpened();
    }
  }
  _handlePanelKeydown = (event) => {
    if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
      if (this._pendingAutoselectedOption) {
        this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
        this._pendingAutoselectedOption = null;
      }
      this._closeKeyEventStream.next();
      this._resetActiveItem();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  _updatePanelState() {
    this.autocomplete._setVisibility();
    if (this.panelOpen) {
      const overlayRef = this._overlayRef;
      if (!this._keydownSubscription) {
        this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
      }
      if (!this._outsideClickSubscription) {
        this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
      }
    } else {
      this._keydownSubscription?.unsubscribe();
      this._outsideClickSubscription?.unsubscribe();
      this._keydownSubscription = this._outsideClickSubscription = void 0;
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? void 0,
      hasBackdrop: this._defaults?.hasBackdrop,
      backdropClass: this._defaults?.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: this._overlayPanelClass,
      disableAnimations: this._animationsDisabled
    });
  }
  _getOverlayPosition() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPopoverLocation("inline");
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      let firstEnabledOptionIndex = -1;
      for (let index = 0; index < autocomplete.options.length; index++) {
        const option = autocomplete.options.get(index);
        if (!option.disabled) {
          firstEnabledOptionIndex = index;
          break;
        }
      }
      autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
  }
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  static \u0275fac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete?.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    inputs: {
      autocomplete: [0, "matAutocomplete", "autocomplete"],
      position: [0, "matAutocompletePosition", "position"],
      connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
      autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
      autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute]
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-mdc-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: [{
        alias: "matAutocompleteDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteModule = class _MatAutocompleteModule {
  static \u0275fac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatAutocompleteModule,
    imports: [OverlayModule, MatOptionModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, BidiModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayModule, MatOptionModule, CdkScrollableModule, MatOptionModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, BidiModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
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
var _c2 = '.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {\n  border-width: var(--%NS%mat-chip-outline-width, 1px);\n  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {\n  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));\n}\n.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {\n  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {\n  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));\n  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));\n  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);\n  height: var(--%NS%mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));\n  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));\n  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n';
var _c3 = [[["", "matChipEdit", ""]], [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c4 = ["[matChipEdit]", "mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
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
var _c5 = ["*"];
var _c6 = ".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n";
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
    styles: [_c2],
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
    ngContentSelectors: _c4,
    decls: 9,
    vars: 8,
    consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--leading"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], ["matChipEditInput", ""]],
    template: function MatChipRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
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
    styles: [_c2],
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
    ngContentSelectors: _c5,
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
    ngContentSelectors: _c5,
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
    styles: [_c6],
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
    ngContentSelectors: _c5,
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
    styles: [_c6],
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

// libs/form-fields/src/lib/item-list-field.component.ts
var _c03 = ["search_field"];
function ItemListFieldComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 8);
    \u0275\u0275listener("removed", function ItemListFieldComponent_For_4_Template_mat_chip_row_removed_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const item_r4 = ctx_r2.$implicit;
      const \u0275$index_5_r5 = ctx_r2.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.remove(item_r4, \u0275$index_5_r5));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r4);
  }
}
function ItemListFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8);
  }
}
function addChipItem(control, event) {
  if (!control)
    return;
  const input2 = event.input;
  const item_list = uniqueChipItems(control.value || []);
  const new_items = `${event.value || ""}`.split(",").map((item) => item.trim()).filter((item) => !!item);
  for (const item of new_items) {
    if (!item_list.includes(item)) {
      item_list.push(item);
    }
  }
  control.setValue(item_list);
  if (input2) {
    input2.value = "";
  }
}
function removeChipItem(control, item, item_index) {
  if (!control) {
    return;
  }
  const item_list = [...control.value || []];
  const index = item_index ?? item_list.indexOf(item);
  if (index >= 0 && index < item_list.length) {
    item_list.splice(index, 1);
    control.setValue(item_list);
  }
}
function uniqueChipItems(items) {
  return [...new Set(items)];
}
var ItemListFieldComponent = class _ItemListFieldComponent {
  constructor() {
    this.separators = input(
      [ENTER, COMMA],
      ...ngDevMode ? [{ debugName: "separators" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = input(
      "",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      [],
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      [],
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel_open = signal(
      false,
      ...ngDevMode ? [{ debugName: "panel_open" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_field = viewChild(
      "search_field",
      ...ngDevMode ? [{ debugName: "_search_field" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._autocomplete = viewChild(
      MatAutocompleteTrigger,
      ...ngDevMode ? [{ debugName: "_autocomplete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.matching_options = computed(
      () => {
        const search = this.search().trim().toLowerCase();
        const selected = new Set(this.value().map((item) => `${item}`.toLowerCase()));
        return uniqueChipItems(this.options()).filter((option) => {
          const text = `${option}`.toLowerCase();
          return !selected.has(text) && (!search || text.includes(search));
        });
      },
      ...ngDevMode ? [{ debugName: "matching_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add = (e) => {
      if (this._autocomplete()?.activeOption)
        return;
      addChipItem({ value: this.value(), setValue: (i) => this.setValue(i) }, e);
      this._clearSearch();
    };
    this.remove = (item, index) => removeChipItem({ value: this.value(), setValue: (i) => this.setValue(i) }, item, index);
  }
  /** Add a suggestion picked from the autocomplete list */
  addSuggestion(option) {
    this.setValue([...this.value(), option]);
    this._clearSearch();
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const value = uniqueChipItems(new_value || []);
    this.value.set(value);
    if (this._onChange) {
      this._onChange(value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(uniqueChipItems(value || []));
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /** Empty the search input so the next search starts fresh */
  _clearSearch() {
    this.search.set("");
    const field = this._search_field();
    if (field)
      field.nativeElement.value = "";
  }
  static {
    this.\u0275fac = function ItemListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListFieldComponent, selectors: [["item-list-field"]], viewQuery: function ItemListFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._search_field, _c03, 5)(ctx._autocomplete, MatAutocompleteTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { separators: [1, "separators"], placeholder: [1, "placeholder"], options: [1, "options"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _ItemListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 5, consts: [["chipList", ""], ["search_field", ""], ["auto", "matAutocomplete"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Zone Tags"], [3, "input", "matChipInputTokenEnd", "placeholder", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "opened", "closed", "optionSelected"], [3, "value"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function ItemListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-chip-grid", 4, 0);
        \u0275\u0275repeaterCreate(3, ItemListFieldComponent_For_4_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 5, 1);
        \u0275\u0275listener("input", function ItemListFieldComponent_Template_input_input_5_listener() {
          \u0275\u0275restoreView(_r1);
          const search_field_r7 = \u0275\u0275reference(6);
          return \u0275\u0275resetView(ctx.search.set(search_field_r7.value));
        })("matChipInputTokenEnd", function ItemListFieldComponent_Template_input_matChipInputTokenEnd_5_listener($event) {
          return ctx.add($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-autocomplete", 6, 2);
        \u0275\u0275listener("opened", function ItemListFieldComponent_Template_mat_autocomplete_opened_7_listener() {
          return ctx.panel_open.set(true);
        })("closed", function ItemListFieldComponent_Template_mat_autocomplete_closed_7_listener() {
          return ctx.panel_open.set(false);
        })("optionSelected", function ItemListFieldComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
          return ctx.addSuggestion($event.option.value);
        });
        \u0275\u0275repeaterCreate(9, ItemListFieldComponent_For_10_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const chipList_r9 = \u0275\u0275reference(2);
        const auto_r10 = \u0275\u0275reference(8);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.value());
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", ctx.placeholder() || "User groups...")("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separators())("matChipInputAddOnBlur", !ctx.panel_open());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.matching_options());
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatChipsModule, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, MatAutocompleteModule, MatAutocomplete, MatOption, MatAutocompleteTrigger, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemListFieldComponent, [{
    type: Component,
    args: [{ selector: "item-list-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Zone Tags">
                @for (item of value(); track $index; let i = $index) {
                    <mat-chip-row (removed)="remove(item, i)">
                        <span class="max-w-md truncate">{{ item }}</span>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                #search_field
                [placeholder]="placeholder() || 'User groups...'"
                [matAutocomplete]="auto"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators()"
                [matChipInputAddOnBlur]="!panel_open()"
                (input)="search.set(search_field.value)"
                (matChipInputTokenEnd)="add($event)"
            />
        </mat-form-field>
        <mat-autocomplete
            #auto="matAutocomplete"
            (opened)="panel_open.set(true)"
            (closed)="panel_open.set(false)"
            (optionSelected)="addSuggestion($event.option.value)"
        >
            @for (option of matching_options(); track option) {
                <mat-option [value]="option">{{ option }}</mat-option>
            }
        </mat-autocomplete>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => ItemListFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      IconComponent
    ] }]
  }], null, { separators: [{ type: Input, args: [{ isSignal: true, alias: "separators", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], _search_field: [{ type: ViewChild, args: ["search_field", { isSignal: true }] }], _autocomplete: [{ type: ViewChild, args: [forwardRef(() => MatAutocompleteTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListFieldComponent, { className: "ItemListFieldComponent", filePath: "libs/form-fields/src/lib/item-list-field.component.ts", lineNumber: 139 });
})();

export {
  ItemListFieldComponent
};
//# debugId=aa1bed6d-3d47-5aaa-8c2a-4b9c8696a173
//# sourceMappingURL=chunk-O7VMTUVX.js.map
