import {
  UserAvatarComponent
} from "./chunk-TUMEKGGU.js";
import {
  searchGuests,
  searchStaff
} from "./chunk-RQYEIDUG.js";
import {
  AsyncHandler,
  CdkScrollableModule,
  EMPTY_USER,
  IconComponent,
  MAT_FORM_FIELD,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix,
  Overlay,
  OverlayConfig,
  OverlayModule,
  TemplatePortal,
  User,
  ViewportRuler,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  settingSignal
} from "./chunk-RPPBP432.js";
import {
  ActiveDescendantKeyManager,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ENTER,
  ESCAPE,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FormsModule,
  InjectionToken,
  Injector,
  Input,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  Ma,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  Na,
  NgControlStatus,
  NgModel,
  NgModule,
  NgZone,
  Observable,
  Output,
  Platform,
  Renderer2,
  Rt,
  Subject,
  Subscription,
  TAB,
  TemplateRef,
  TranslatePipe,
  UP_ARROW,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  _IdGenerator,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  afterNextRender,
  booleanAttribute,
  coerceArray,
  computed,
  debounced,
  defer,
  delay,
  effect,
  filter,
  forwardRef,
  hasModifierKey,
  inject,
  input,
  map,
  merge,
  model,
  of,
  resource,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-CUTJ2QPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
    styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));\n  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"],
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

// libs/components/src/lib/virtual-keyboard.component.ts
var DEFAULT_KEYS = [
  "0123456789".split(""),
  "qwertyuiop_".split(""),
  "asdfghjkl+".split(""),
  "zxcvbnm@.-".split(""),
  ["{caps}", "{space}", "{backspace}"]
];
var FADE_DURATION = 160;
var VirtualKeyboardComponent = class _VirtualKeyboardComponent extends AsyncHandler {
  static {
    this._enabled = false;
  }
  static {
    this._instances = /* @__PURE__ */ new Set();
  }
  /** Whether virtual keyboard should activate */
  static get enabled() {
    return this._enabled;
  }
  static set enabled(value) {
    this._enabled = value;
    for (const instance of this._instances) {
      instance.syncNativeKeyboardState();
    }
  }
  onFocus() {
    this.syncNativeKeyboardState();
    if (!_VirtualKeyboardComponent.enabled)
      return;
    this.open();
    this.clearTimeout("blur-sm");
  }
  onBlur() {
    this.timeout("blur-sm", () => this.close());
  }
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this.keyset = model(
      DEFAULT_KEYS,
      ...ngDevMode ? [{ debugName: "keyset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = signal(
      "normal",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._overlay_ref = null;
    this._keyboard_el = null;
    this._position = "bottom";
    this._native_keyboard_prevented = false;
    this._original_readonly = false;
    this._original_inputmode = null;
    _VirtualKeyboardComponent._instances.add(this);
    this.syncNativeKeyboardState();
    effect(() => {
      const keys = this.keyset();
      if (!keys)
        this.keyset.set(DEFAULT_KEYS);
    });
  }
  ngOnDestroy() {
    _VirtualKeyboardComponent._instances.delete(this);
    this.restoreNativeKeyboardState();
    super.ngOnDestroy();
    this.close(true);
  }
  focusInput() {
    this._element?.nativeElement?.blur();
    this._element?.nativeElement?.focus();
  }
  open() {
    this.clearTimeout("close-animation");
    if (this._overlay_ref) {
      this._overlay_ref.hostElement.style.pointerEvents = "auto";
      if (this._keyboard_el)
        this._keyboard_el.style.opacity = "1";
      return;
    }
    this._position = this.preferredPosition();
    const position_strategy = this._overlay.position().global().centerHorizontally();
    if (this._position === "top") {
      position_strategy.top("0");
    } else {
      position_strategy.bottom("0");
    }
    this._overlay_ref = this._overlay.create({
      width: "100vw",
      positionStrategy: position_strategy
    });
    this._overlay_ref.hostElement.style.display = "block";
    this._overlay_ref.hostElement.style.pointerEvents = "auto";
    this.applyOverlayPosition();
    this.renderKeyboard();
  }
  close(immediate = false) {
    if (!this._overlay_ref)
      return;
    this.clearTimeout("close-animation");
    if (immediate || !this._keyboard_el) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
      this._keyboard_el = null;
      return;
    }
    this._overlay_ref.hostElement.style.pointerEvents = "none";
    this._keyboard_el.style.opacity = "0";
    this.timeout("close-animation", () => {
      this._overlay_ref?.dispose();
      this._overlay_ref = null;
      this._keyboard_el = null;
    }, FADE_DURATION);
  }
  handleKeyPress(key) {
    const input_el = this._element.nativeElement;
    const str = input_el.value || "";
    let cursor_pos = input_el.selectionStart ?? str.length;
    switch (key.toLowerCase()) {
      case "{caps}":
        this.state.set(this.state() === "caps" ? "normal" : "caps");
        break;
      case "{shift}":
        this.state.set(this.state() === "shift" ? "normal" : "shift");
        break;
      case "{backspace}":
        input_el.value = `${str.substr(0, cursor_pos - 1)}${str.substr(cursor_pos, str.length)}`;
        cursor_pos = Math.max(0, cursor_pos - 1);
        break;
      case "{space}":
        input_el.value = `${str.substr(0, cursor_pos)}${" "}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
        break;
      default:
        if (this.state() === "shift")
          this.state.set("normal");
        input_el.value = `${str.substr(0, cursor_pos)}${key}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
    }
    input_el.dispatchEvent(new InputEvent("input"));
    this.updateKeyState();
    this.timeout("focus", () => {
      this.focusInput();
      try {
        input_el.setSelectionRange(cursor_pos, cursor_pos);
      } catch {
      }
    }, 50);
  }
  updateKeyState() {
    this.keyset.set(this.keyset().map((_) => _.map((k) => k.length > 1 ? k : k[this.state() !== "normal" ? "toUpperCase" : "toLowerCase"]())));
    if (this._overlay_ref)
      this.renderKeyboard();
  }
  syncNativeKeyboardState() {
    if (_VirtualKeyboardComponent.enabled) {
      this.preventNativeKeyboard();
    } else {
      this.restoreNativeKeyboardState();
    }
  }
  reposition() {
    if (!this._overlay_ref)
      return;
    const position = this.preferredPosition();
    if (position === this._position)
      return;
    this.close(true);
    this.open();
  }
  renderKeyboard() {
    if (!this._overlay_ref)
      return;
    const overlay_el = this._overlay_ref.overlayElement;
    const should_animate = !this._keyboard_el;
    this.applyOverlayPosition();
    overlay_el.replaceChildren();
    const keyboard_el = document.createElement("div");
    keyboard_el.setAttribute("keyboard-view", "");
    keyboard_el.className = "border-base-200 bg-base-200 flex w-screen flex-col gap-[16px] p-[8px]";
    keyboard_el.style.background = "var(--base-200)";
    keyboard_el.style.borderBottom = this._position === "top" ? "1px solid var(--base-200)" : "";
    keyboard_el.style.borderTop = this._position === "bottom" ? "1px solid var(--base-200)" : "";
    keyboard_el.style.display = "flex";
    keyboard_el.style.flexDirection = "column";
    keyboard_el.style.gap = "16px";
    keyboard_el.style.opacity = should_animate ? "0" : "1";
    keyboard_el.style.padding = "8px";
    keyboard_el.style.transition = `opacity ${FADE_DURATION}ms ease`;
    keyboard_el.style.width = "100vw";
    for (const row of this.keyset()) {
      const row_el = document.createElement("div");
      row_el.setAttribute("row", "");
      row_el.className = "flex items-center justify-center gap-[8px]";
      row_el.style.alignItems = "center";
      row_el.style.display = "flex";
      row_el.style.gap = "8px";
      row_el.style.justifyContent = "center";
      for (const key of row) {
        row_el.appendChild(this.renderKey(key));
      }
      keyboard_el.appendChild(row_el);
    }
    overlay_el.appendChild(keyboard_el);
    this._keyboard_el = keyboard_el;
    if (should_animate) {
      requestAnimationFrame(() => {
        if (this._keyboard_el === keyboard_el) {
          keyboard_el.style.opacity = "1";
        }
      });
    }
  }
  renderKey(key) {
    const button_el = document.createElement("button");
    button_el.setAttribute("key", key);
    button_el.setAttribute("tabindex", "0");
    button_el.type = "button";
    button_el.className = "border-base-200 bg-base-100 relative cursor-pointer rounded-xl border p-[8px]";
    button_el.style.height = "56px";
    button_el.style.width = key[0] === "{" && key.length > 1 ? "160px" : "64px";
    button_el.style.transition = "box-shadow 200ms, top 200ms";
    button_el.style.boxShadow = "0 4px 0 0.04px rgba(0, 0, 0, 0.1)";
    if (key === "{space}") {
      button_el.style.flex = "1";
      button_el.style.minWidth = "160px";
      button_el.style.maxWidth = "400px";
    }
    button_el.textContent = this.keyLabel(key);
    button_el.addEventListener("mousedown", (event) => event.preventDefault());
    button_el.addEventListener("focus", () => this.focusInput());
    button_el.addEventListener("click", () => this.handleKeyPress(key));
    if (key === "{caps}") {
      const dot_el = document.createElement("div");
      dot_el.setAttribute("dot", "");
      dot_el.className = `absolute top-[8px] right-[8px] h-[8px] w-[8px] rounded-full ${this.state() !== "normal" ? "bg-success" : "bg-base-200"}`;
      button_el.appendChild(dot_el);
    }
    return button_el;
  }
  keyLabel(key) {
    return key === "{space}" ? "Space" : key === "{caps}" ? "Caps Lock" : key === "{backspace}" ? "Backspace" : key;
  }
  preventNativeKeyboard() {
    const input_el = this._element.nativeElement;
    if (!this._native_keyboard_prevented) {
      this._original_readonly = input_el.readOnly;
      this._original_inputmode = input_el.getAttribute("inputmode");
      this._native_keyboard_prevented = true;
    }
    input_el.readOnly = true;
    input_el.setAttribute("readonly", "");
    input_el.setAttribute("inputmode", "none");
  }
  restoreNativeKeyboardState() {
    if (!this._native_keyboard_prevented)
      return;
    const input_el = this._element.nativeElement;
    input_el.readOnly = this._original_readonly;
    if (this._original_readonly) {
      input_el.setAttribute("readonly", "");
    } else {
      input_el.removeAttribute("readonly");
    }
    if (this._original_inputmode === null) {
      input_el.removeAttribute("inputmode");
    } else {
      input_el.setAttribute("inputmode", this._original_inputmode);
    }
    this._native_keyboard_prevented = false;
  }
  applyOverlayPosition() {
    if (!this._overlay_ref)
      return;
    const overlay_el = this._overlay_ref.overlayElement;
    overlay_el.style.position = "fixed";
    overlay_el.style.left = "0";
    overlay_el.style.right = "0";
    overlay_el.style.width = "100vw";
    overlay_el.style.top = this._position === "top" ? "0" : "";
    overlay_el.style.bottom = this._position === "bottom" ? "0" : "";
  }
  preferredPosition() {
    const box = this._element.nativeElement.getBoundingClientRect();
    const space_above = box.top;
    const space_below = window.innerHeight - box.bottom;
    return space_below >= space_above ? "bottom" : "top";
  }
  static {
    this.\u0275fac = function VirtualKeyboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VirtualKeyboardComponent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _VirtualKeyboardComponent, selectors: [["input", "keyboard", ""], ["textarea", "keyboard", ""]], hostBindings: function VirtualKeyboardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("pointerdown", function VirtualKeyboardComponent_pointerdown_HostBindingHandler() {
          return ctx.syncNativeKeyboardState();
        })("focus", function VirtualKeyboardComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function VirtualKeyboardComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("resize", function VirtualKeyboardComponent_resize_HostBindingHandler() {
          return ctx.reposition();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { keyset: [1, "keyset"] }, outputs: { keyset: "keysetChange" }, features: [\u0275\u0275InheritDefinitionFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualKeyboardComponent, [{
    type: Directive,
    args: [{
      selector: "input[keyboard],textarea[keyboard]",
      host: {
        "(pointerdown)": "syncNativeKeyboardState()",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "(window:resize)": "reposition()"
      }
    }]
  }], () => [], { keyset: [{ type: Input, args: [{ isSignal: true, alias: "keyset", required: false }] }, { type: Output, args: ["keysetChange"] }] });
})();

// libs/form-fields/src/lib/user-search-field.component.ts
var _c02 = ["input"];
var _c12 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("user", ctx);
  }
}
function UserSearchFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function UserSearchFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function UserSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 14);
    \u0275\u0275element(2, "a-user-avatar", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function UserSearchFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 18);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_14_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_14_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const term_r4 = \u0275\u0275readContextLet(11);
      ctx_r2.setExternalValue(term_r4);
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c12, term_r4)), " ");
  }
}
function UserSearchFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 20);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_15_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_15_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const term_r4 = \u0275\u0275readContextLet(11);
      ctx_r2.setValueFromEmail(term_r4);
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "FORM.USER_SET_EXTERNAL", \u0275\u0275pureFunction1(4, _c12, term_r4)), " ");
  }
}
function UserSearchFieldComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_16_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.empty_fn()());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275property("disabled", !ctx_r2.empty_fn());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, term_r4 ? "FORM.USER_EMPTY" : ""), " ", ctx_r2.error(), " ");
  }
}
function UserSearchFieldComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "person_cancel");
    \u0275\u0275elementEnd()();
  }
}
var UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.use_basic_search = settingSignal("basic_user_search", true);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      null,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_user = computed(
      () => {
        const term = this.search_term();
        return term && typeof term !== "string" && term.email !== EMPTY_USER.email ? term : null;
      },
      ...ngDevMode ? [{ debugName: "selected_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = input(
      "FORM.USER_SEARCH",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      void 0,
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests = input(
      void 0,
      ...ngDevMode ? [{ debugName: "guests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests_only = input(
      false,
      ...ngDevMode ? [{ debugName: "guests_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disable_search = input(
      false,
      ...ngDevMode ? [{ debugName: "disable_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear = input(
      false,
      ...ngDevMode ? [{ debugName: "clear" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = input(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.validate = input(
      void 0,
      ...ngDevMode ? [{ debugName: "validate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.empty_fn = input(
      void 0,
      ...ngDevMode ? [{ debugName: "empty_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_externals = input(
      false,
      ...ngDevMode ? [{ debugName: "allow_externals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = input(
      void 0,
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.query_fn = input(
      async (q) => {
        const guest_query = () => searchGuests(q).catch(() => []);
        if (this.guests_only())
          return guest_query();
        const staff = this.use_basic_search() ? await Ma({ q, authority_id: Rt()?.id }).then((_) => _.data.map((u) => new User(u))).catch(() => []) : await searchStaff(q).catch(() => []);
        if (!this.guests())
          return staff;
        return [...staff, ...await guest_query()];
      },
      ...ngDevMode ? [{ debugName: "query_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_term = debounced(this.search_term, 300);
    this._search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ term: this._debounced_term.value() }),
      loader: async ({ params: { term } }) => {
        if (term && typeof term !== "string") {
          const user = term;
          return user.email === EMPTY_USER.email ? [] : [user];
        }
        if (term === this.user()?.name)
          return [this.user()];
        if (this.disable_search())
          return [];
        const s = `${term || ""}`.toLowerCase();
        if (this.options()?.length) {
          return this.options().filter((_) => _.email !== EMPTY_USER.email && (_.name.toLowerCase().includes(s) || _.email.toLowerCase().includes(s)));
        }
        if (s.length <= 2)
          return [];
        const list = await this.query_fn()(s).catch(() => []);
        return list.filter((_) => !!_ && _.email !== EMPTY_USER.email);
      }
    }));
    this.search_results = computed(
      () => this._search.value() ?? [],
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._input_el = viewChild("input", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_input_el" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this._autocomplete_trigger = viewChild(
      MatAutocompleteTrigger,
      ...ngDevMode ? [{ debugName: "_autocomplete_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email) {
    const value = typeof new_value === "string" ? new User({ name: new_value, email }) : new_value;
    this._onChange ? this._onChange(value) : null;
    this._onTouch ? this._onTouch(value) : null;
    this.user.set(value);
    this.search_term.set(value);
    if (typeof new_value !== "string" && !this.use_basic_search() && (value?.id || value?.email)) {
      Na(value.email || value.id).then((details) => {
        if (!details)
          return;
        const updated = new User(__spreadValues(__spreadValues({}, value), new User(details)));
        this._onChange ? this._onChange(updated) : null;
        this.user.set(updated);
        this.search_term.set(updated);
      }).catch(() => value);
    }
  }
  setExternalValue(name) {
    this.setValue(name);
    this.dismissAutocomplete();
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.user.set(value);
    this.resetTerm();
  }
  displayFn(user) {
    return user && user.email !== EMPTY_USER.email && user.name ? user.name : "";
  }
  stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  /** Check if a string is a valid email address */
  isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  /**
   * Set the value from a typed email address
   * @param email Email address to create a user from
   */
  setValueFromEmail(email) {
    const name = email.split("@")[0];
    this.setValue(name, email);
    this.dismissAutocomplete();
  }
  clearUser() {
    this.user.set(null);
    this._onChange ? this._onChange(null) : null;
    this._onTouch ? this._onTouch(null) : null;
    this.resetTerm();
  }
  blurInput() {
    this._input_el()?.nativeElement?.blur();
  }
  selectInputText() {
    setTimeout(() => this._input_el()?.nativeElement?.select());
  }
  dismissAutocomplete() {
    setTimeout(() => {
      this._autocomplete_trigger()?.closePanel();
      this.blurInput();
    });
  }
  resetTerm() {
    this.search_term.set(this.user());
    const input2 = this._input_el()?.nativeElement;
    if (input2)
      input2.value = this.displayFn(this.user());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UserSearchFieldComponent_BaseFactory;
      return function UserSearchFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275UserSearchFieldComponent_BaseFactory || (\u0275UserSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserSearchFieldComponent)))(__ngFactoryType__ || _UserSearchFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c02, 5, ElementRef)(ctx._autocomplete_trigger, MatAutocompleteTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { disabled: [1, "disabled"], placeholder: [1, "placeholder"], options: [1, "options"], guests: [1, "guests"], guests_only: [1, "guests_only"], disable_search: [1, "disable_search"], clear: [1, "clear"], error: [1, "error"], validate: [1, "validate"], empty_fn: [1, "empty_fn"], allow_externals: [1, "allow_externals"], filter: [1, "filter"], query_fn: [1, "query_fn"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _UserSearchFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature], decls: 20, vars: 17, consts: [["input", ""], ["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "mr-2", "-ml-1", "flex", "h-8", "w-8", "items-center", "justify-center"], [3, "user"], [1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["keyboard", "", "matInput", "", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], [1, "pointer-events-none", "relative"], [3, "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", 3, "user"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [1, "pointer-events-auto", "absolute", "inset-0", "flex", "items-center", "px-4", 3, "mousedown", "touchstart", "click"], [3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "div", 4);
        \u0275\u0275conditionalCreate(3, UserSearchFieldComponent_Conditional_3_Template, 1, 1, "a-user-avatar", 5)(4, UserSearchFieldComponent_Conditional_4_Template, 2, 0, "icon", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 7, 0);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search_term.set($event);
        })("focus", function UserSearchFieldComponent_Template_input_focus_5_listener() {
          return ctx.selectInputText();
        })("blur", function UserSearchFieldComponent_Template_input_blur_5_listener() {
          return ctx.resetTerm();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(8, UserSearchFieldComponent_Conditional_8_Template, 1, 0, "mat-spinner", 8);
        \u0275\u0275elementStart(9, "mat-autocomplete", 9, 1);
        \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_9_listener($event) {
          return ctx.setValue($event.option.value);
        });
        \u0275\u0275declareLet(11);
        \u0275\u0275repeaterCreate(12, UserSearchFieldComponent_For_13_Template, 8, 4, "mat-option", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(14, UserSearchFieldComponent_Conditional_14_Template, 5, 6, "mat-option", 11);
        \u0275\u0275conditionalCreate(15, UserSearchFieldComponent_Conditional_15_Template, 4, 6, "mat-option", 11);
        \u0275\u0275conditionalCreate(16, UserSearchFieldComponent_Conditional_16_Template, 3, 5, "mat-option", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-error");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, UserSearchFieldComponent_Conditional_19_Template, 3, 0, "button", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        const auto_r8 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275classProp("no-subscript", !ctx.error() && !ctx.selected_user());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_3_0 = ctx.selected_user()) ? 3 : 4, tmp_3_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.search_term())("disabled", ctx.disabled())("matAutocomplete", auto_r8)("placeholder", \u0275\u0275pipeBind1(7, 14, ctx.placeholder()));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayFn);
        const user_list_r9 = ctx.search_results();
        \u0275\u0275advance(2);
        const term_r10 = \u0275\u0275storeLet(ctx.search_term());
        \u0275\u0275advance();
        \u0275\u0275repeater(user_list_r9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(term_r10 && ctx.validate() && ctx.validate()(term_r10) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(term_r10 && ctx.allow_externals() && ctx.isValidEmail(term_r10) && !(ctx.validate() && ctx.validate()(term_r10)) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!user_list_r9?.length && (ctx.search_term() || ctx.error()) && !ctx.disable_search() ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.error());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.clear() ? 19 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      VirtualKeyboardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <div class="flex w-full space-x-2">
            <mat-form-field
                appearance="outline"
                class="w-1/2 flex-1"
                [class.no-subscript]="!error() && !selected_user()"
            >
                <div
                    matPrefix
                    class="mr-2 -ml-1 flex h-8 w-8 items-center justify-center"
                >
                    @if (selected_user(); as user) {
                        <a-user-avatar [user]="user" />
                    } @else {
                        <icon
                            class="block flex w-6 items-center justify-center text-2xl"
                            >search</icon
                        >
                    }
                </div>
                <input
                    #input
                    keyboard
                    matInput
                    [ngModel]="search_term()"
                    (ngModelChange)="search_term.set($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (focus)="selectInputText()"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="setValue($event.option.value)"
                >
                    @let user_list = search_results();
                    @let term = search_term();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && validate() && validate()(term)) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setExternalValue(term); stopEvent($event)
                                "
                            >
                                <div class="pointer-events-none">
                                    {{
                                        'FORM.USER_ADD_EXTERNAL'
                                            | translate: { name: term }
                                    }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (
                        term &&
                        allow_externals() &&
                        isValidEmail(term) &&
                        !(validate() && validate()(term))
                    ) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 flex items-center px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setValueFromEmail(term); stopEvent($event)
                                "
                            >
                                {{
                                    'FORM.USER_SET_EXTERNAL'
                                        | translate: { name: term }
                                }}
                            </div>
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term() || error()) &&
                        !disable_search()
                    ) {
                        <mat-option
                            [disabled]="!empty_fn()"
                            (click)="empty_fn()()"
                        >
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                    (click)="clearUser()"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserSearchFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], null, { disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], guests: [{ type: Input, args: [{ isSignal: true, alias: "guests", required: false }] }], guests_only: [{ type: Input, args: [{ isSignal: true, alias: "guests_only", required: false }] }], disable_search: [{ type: Input, args: [{ isSignal: true, alias: "disable_search", required: false }] }], clear: [{ type: Input, args: [{ isSignal: true, alias: "clear", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], validate: [{ type: Input, args: [{ isSignal: true, alias: "validate", required: false }] }], empty_fn: [{ type: Input, args: [{ isSignal: true, alias: "empty_fn", required: false }] }], allow_externals: [{ type: Input, args: [{ isSignal: true, alias: "allow_externals", required: false }] }], filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }], query_fn: [{ type: Input, args: [{ isSignal: true, alias: "query_fn", required: false }] }], _input_el: [{ type: ViewChild, args: ["input", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }], _autocomplete_trigger: [{ type: ViewChild, args: [forwardRef(() => MatAutocompleteTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 198 });
})();

export {
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatAutocompleteModule,
  UserSearchFieldComponent
};
//# sourceMappingURL=chunk-ZPUZMC6Y.js.map
