import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  SpacePipe
} from "./chunk-PPF3TODQ.js";
import {
  TranslatePipe
} from "./chunk-66FGSBLG.js";
import {
  CustomTooltipComponent,
  CustomTooltipData,
  SanitizePipe
} from "./chunk-JGRRD5KV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-SP74N3BN.js";
import {
  A11yModule,
  ActivatedRoute,
  AsyncHandler,
  BasePortalOutlet,
  BidiModule,
  CalendarEvent,
  CdkPortalOutlet,
  CdkScrollable,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentPortal,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DatePipe,
  Dd,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FocusTrapFactory,
  FormsModule,
  HostAttributeToken,
  IconComponent,
  In,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InteractivityChecker,
  J,
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
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  Pipe,
  Platform,
  PortalModule,
  Renderer2,
  ReplaySubject,
  RippleState,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Rs,
  SafePipe,
  Service,
  SettingsService,
  Space,
  Subject,
  TemplatePortal,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  Xe,
  Zr,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getFocusedElementPierceShadowDom,
  addMinutes,
  afterNextRender,
  afterRenderEffect,
  ba,
  booleanAttribute,
  coerceNumberProperty,
  computed,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  currentUser,
  debounced,
  defer,
  differenceInMinutes,
  effect,
  endOfDay,
  eo,
  f,
  filter,
  first,
  firstValueWhere,
  flatten,
  format,
  forwardRef,
  ga,
  getUnixTime,
  hasModifierKey,
  i18n,
  inject,
  input,
  linkedSignal,
  log,
  merge,
  notifySuccess,
  numberAttribute,
  output,
  resource,
  setClassMetadata,
  signal,
  startOfDay,
  startWith,
  take,
  toQueryString,
  unique,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdefineService,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-WL7WGIFQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  viewContainerRef;
  injector;
  id;
  role = "dialog";
  panelClass = "";
  hasBackdrop = true;
  backdropClass = "";
  disableClose = false;
  closePredicate;
  width = "";
  height = "";
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  positionStrategy;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = false;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  scrollStrategy;
  closeOnNavigation = true;
  closeOnDestroy = true;
  closeOnOverlayDetachments = true;
  disableAnimations = false;
  providers;
  container;
  templateContext;
  bindings;
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _config;
  _interactivityChecker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusMonitor = inject(FocusMonitor);
  _renderer = inject(Renderer2);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  _portalOutlet;
  _focusTrapped = new Subject();
  _focusTrap = null;
  _elementFocusedBeforeDialogWasOpened = null;
  _closeInteractionType = null;
  _ariaLabelledByQueue = [];
  _isDestroyed = false;
  constructor() {
    super();
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._captureInitialFocus();
  }
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._focusTrapped.complete();
    this._isDestroyed = true;
    this._restoreFocus();
  }
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  attachDomPortal = (portal) => {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachDomPortal(portal);
    this._contentAttached();
    return result;
  };
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  _forceFocus(element, options2) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options2);
  }
  _focusByCssSelector(selector, options2) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options2);
    }
  }
  _trapFocus(options2) {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      var _a;
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus(options2);
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = (_a = this._focusTrap) == null ? void 0 : _a.focusInitialElement(options2);
          if (!focusedSuccessfully) {
            this._focusDialogContainer(options2);
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options2);
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus, options2);
          break;
      }
      this._focusTrapped.next();
    }, {
      injector: this._injector
    });
  }
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  _focusDialogContainer(options2) {
    var _a, _b;
    (_b = (_a = this._elementRef.nativeElement).focus) == null ? void 0 : _b.call(_a, options2);
  }
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  static \u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDialogContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkDialogContainer,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function CdkDialogContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function CdkDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".cdk-dialog-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n"],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  overlayRef;
  config;
  componentInstance = null;
  componentRef = null;
  containerInstance;
  disableClose;
  closed = new Subject();
  backdropClick;
  keydownEvents;
  outsidePointerEvents;
  id;
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      var _a, _b;
      if (!this.disableClose && this._canClose()) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      } else {
        (_b = (_a = this.containerInstance)._recaptureFocus) == null ? void 0 : _b.call(_a);
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  close(result, options2) {
    if (this._canClose(result)) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = (options2 == null ? void 0 : options2.focusOrigin) || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
  _canClose(result) {
    const config = this.config;
    return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
function getDirectionality(value) {
  const valueSignal = signal(value, ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
var Dialog = class _Dialog {
  _injector = inject(Injector);
  _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
    optional: true
  });
  _parentDialog = inject(_Dialog, {
    optional: true,
    skipSelf: true
  });
  _overlayContainer = inject(OverlayContainer);
  _idGenerator = inject(_IdGenerator);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  _ariaHiddenElements = /* @__PURE__ */ new Map();
  _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = createOverlayRef(this._injector, overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    if (!this.openDialogs.length) {
      const overlayContainer = this._overlayContainer.getContainerElement();
      if (dialogContainer._focusTrapped) {
        dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        });
      } else {
        this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
      }
    }
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation,
      disableAnimations: config.disableAnimations
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  _attachContainer(overlay, dialogRef, config) {
    var _a;
    const userInjector = config.injector || ((_a = config.viewContainerRef) == null ? void 0 : _a.injector);
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, null, config.bindings));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    var _a;
    const userInjector = config.injector || ((_a = config.viewContainerRef) == null ? void 0 : _a.injector);
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: getDirectionality(config.direction)
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live") && !sibling.hasAttribute("popover")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Dialog,
    factory: _Dialog.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Service
  }], null, null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule,
    imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
    exports: [PortalModule, CdkDialogContainer]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [Dialog],
    imports: [OverlayModule, PortalModule, A11yModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [PortalModule, CdkDialogContainer],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/dialog.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  viewContainerRef;
  injector;
  id;
  role = "dialog";
  panelClass = "";
  hasBackdrop = true;
  backdropClass = "";
  disableClose = false;
  closePredicate;
  width = "";
  height = "";
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  position;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = false;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  delayFocusTrap = true;
  scrollStrategy;
  closeOnNavigation = true;
  enterAnimationDuration;
  exitAnimationDuration;
  bindings;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  _animationStateChanged = new EventEmitter();
  _animationsEnabled = !_animationsDisabled();
  _actionSectionCount = 0;
  _hostElement = this._elementRef.nativeElement;
  _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
  _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
  _animationTimer = null;
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  _finishDialogOpen = () => {
    this._clearAnimationClasses();
    this._openAnimationDone(this._enterAnimationDuration);
  };
  _finishDialogClose = () => {
    this._clearAnimationClasses();
    this._animationStateChanged.emit({
      state: "closed",
      totalTime: this._exitAnimationDuration
    });
  };
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(__ngFactoryType__) {
      return (\u0275MatDialogContainer_BaseFactory || (\u0275MatDialogContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx._config.id);
        \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ['.mat-mdc-dialog-container {\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: border-box;\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  outline: 0;\n}\n\n.cdk-overlay-pane.mat-mdc-dialog-panel {\n  max-width: var(--%NS%mat-dialog-container-max-width, 560px);\n  min-width: var(--%NS%mat-dialog-container-min-width, 280px);\n}\n@media (max-width: 599px) {\n  .cdk-overlay-pane.mat-mdc-dialog-panel {\n    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));\n  }\n}\n\n.mat-mdc-dialog-inner-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  box-sizing: border-box;\n  height: 100%;\n  opacity: 0;\n  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n}\n.mdc-dialog--closing .mat-mdc-dialog-inner-container {\n  transition: opacity 75ms linear;\n  transform: none;\n}\n.mdc-dialog--open .mat-mdc-dialog-inner-container {\n  opacity: 1;\n}\n._mat-animation-noopable .mat-mdc-dialog-inner-container {\n  transition: none;\n}\n\n.mat-mdc-dialog-surface {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  outline: 0;\n  transform: scale(0.8);\n  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);\n  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));\n  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));\n}\n[dir=rtl] .mat-mdc-dialog-surface {\n  text-align: right;\n}\n.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {\n  transform: none;\n}\n._mat-animation-noopable .mat-mdc-dialog-surface {\n  transition: none;\n}\n.mat-mdc-dialog-surface::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 2px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n\n.mat-mdc-dialog-title {\n  display: block;\n  position: relative;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  margin: 0 0 1px;\n  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);\n}\n.mat-mdc-dialog-title::before {\n  display: inline-block;\n  width: 0;\n  height: 40px;\n  content: "";\n  vertical-align: 0;\n}\n[dir=rtl] .mat-mdc-dialog-title {\n  text-align: right;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title {\n  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));\n  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));\n  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));\n  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));\n  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));\n}\n\n.mat-mdc-dialog-content {\n  display: block;\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0;\n  overflow: auto;\n  max-height: 65vh;\n}\n.mat-mdc-dialog-content > :first-child {\n  margin-top: 0;\n}\n.mat-mdc-dialog-content > :last-child {\n  margin-bottom: 0;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));\n  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));\n  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));\n  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));\n  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));\n  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);\n}\n.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {\n  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {\n  padding-top: 0;\n}\n\n.mat-mdc-dialog-actions {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  margin: 0;\n  border-top: 1px solid transparent;\n  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);\n  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);\n}\n@media (forced-colors: active) {\n  .mat-mdc-dialog-actions {\n    border-top-color: CanvasText;\n  }\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {\n  justify-content: start;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {\n  justify-content: center;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {\n  justify-content: flex-end;\n}\n.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mat-mdc-dialog-component-host {\n  display: contents;\n}\n'],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container {\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: border-box;\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  outline: 0;\n}\n\n.cdk-overlay-pane.mat-mdc-dialog-panel {\n  max-width: var(--mat-dialog-container-max-width, 560px);\n  min-width: var(--mat-dialog-container-min-width, 280px);\n}\n@media (max-width: 599px) {\n  .cdk-overlay-pane.mat-mdc-dialog-panel {\n    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));\n  }\n}\n\n.mat-mdc-dialog-inner-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  box-sizing: border-box;\n  height: 100%;\n  opacity: 0;\n  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n}\n.mdc-dialog--closing .mat-mdc-dialog-inner-container {\n  transition: opacity 75ms linear;\n  transform: none;\n}\n.mdc-dialog--open .mat-mdc-dialog-inner-container {\n  opacity: 1;\n}\n._mat-animation-noopable .mat-mdc-dialog-inner-container {\n  transition: none;\n}\n\n.mat-mdc-dialog-surface {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  outline: 0;\n  transform: scale(0.8);\n  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  box-shadow: var(--mat-dialog-container-elevation-shadow, none);\n  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));\n  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));\n}\n[dir=rtl] .mat-mdc-dialog-surface {\n  text-align: right;\n}\n.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {\n  transform: none;\n}\n._mat-animation-noopable .mat-mdc-dialog-surface {\n  transition: none;\n}\n.mat-mdc-dialog-surface::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 2px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n\n.mat-mdc-dialog-title {\n  display: block;\n  position: relative;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  margin: 0 0 1px;\n  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);\n}\n.mat-mdc-dialog-title::before {\n  display: inline-block;\n  width: 0;\n  height: 40px;\n  content: "";\n  vertical-align: 0;\n}\n[dir=rtl] .mat-mdc-dialog-title {\n  text-align: right;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title {\n  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));\n  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));\n  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));\n  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));\n  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));\n}\n\n.mat-mdc-dialog-content {\n  display: block;\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0;\n  overflow: auto;\n  max-height: 65vh;\n}\n.mat-mdc-dialog-content > :first-child {\n  margin-top: 0;\n}\n.mat-mdc-dialog-content > :last-child {\n  margin-bottom: 0;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));\n  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));\n  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));\n  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));\n  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));\n  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  padding: var(--mat-dialog-content-padding, 20px 24px);\n}\n.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {\n  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {\n  padding-top: 0;\n}\n\n.mat-mdc-dialog-actions {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  margin: 0;\n  border-top: 1px solid transparent;\n  padding: var(--mat-dialog-actions-padding, 16px 24px);\n  justify-content: var(--mat-dialog-actions-alignment, flex-end);\n}\n@media (forced-colors: active) {\n  .mat-mdc-dialog-actions {\n    border-top-color: CanvasText;\n  }\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {\n  justify-content: start;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {\n  justify-content: center;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {\n  justify-content: flex-end;\n}\n.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mat-mdc-dialog-component-host {\n  display: contents;\n}\n']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  _ref;
  _config;
  _containerInstance;
  componentInstance;
  componentRef = null;
  disableClose;
  id;
  _afterOpened = new ReplaySubject(1);
  _beforeClosed = new ReplaySubject(1);
  _result;
  _closeFallbackTimeout;
  _state = MatDialogState.OPEN;
  _closeInteractionType;
  constructor(_ref, _config, _containerInstance) {
    this._ref = _ref;
    this._config = _config;
    this._containerInstance = _containerInstance;
    this.disableClose = _config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  close(dialogResult) {
    const closePredicate = this._config.closePredicate;
    if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
      return;
    }
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  afterOpened() {
    return this._afterOpened;
  }
  afterClosed() {
    return this._ref.closed;
  }
  beforeClosed() {
    return this._beforeClosed;
  }
  backdropClick() {
    return this._ref.backdropClick;
  }
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  getState() {
    return this._state;
  }
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var MatDialog = class _MatDialog {
  _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
    optional: true
  });
  _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
  _parentDialog = inject(_MatDialog, {
    optional: true,
    skipSelf: true
  });
  _idGenerator = inject(_IdGenerator);
  _injector = inject(Injector);
  _dialog = inject(Dialog);
  _animationsDisabled = _animationsDisabled();
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  dialogConfigClass = MatDialogConfig;
  _dialogRefConstructor;
  _dialogContainerType;
  _dialogDataToken;
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    var _a, _b;
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
      disableClose: true,
      closePredicate: void 0,
      closeOnDestroy: false,
      closeOnOverlayDetachments: false,
      disableAnimations: this._animationsDisabled || ((_a = config.enterAnimationDuration) == null ? void 0 : _a.toLocaleString()) === "0" || ((_b = config.exitAnimationDuration) == null ? void 0 : _b.toString()) === "0",
      container: {
        type: this._dialogContainerType,
        providers: () => [{
          provide: this.dialogConfigClass,
          useValue: config
        }, {
          provide: DialogConfig,
          useValue: config
        }]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config == null ? void 0 : config.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }, {
          provide: DialogRef,
          useValue: null
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static \u0275fac = function MatDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatDialog,
    factory: _MatDialog.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Service
  }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
  dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  ariaLabel;
  type = "button";
  dialogResult;
  _matDialogClose;
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    if (this._elementRef.nativeElement.getAttribute("aria-disabled") === "true") {
      return;
    }
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static \u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogClose)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      type: "type",
      dialogResult: [0, "mat-dialog-close", "dialogResult"],
      _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], null, {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  _dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    var _a;
    const instance = (_a = this._dialogRef) == null ? void 0 : _a._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static \u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogLayoutSection)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogLayoutSection
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], null, null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
  _onAdd() {
    var _a, _b;
    (_b = (_a = this._dialogRef._containerInstance) == null ? void 0 : _a._addAriaLabelledBy) == null ? void 0 : _b.call(_a, this.id);
  }
  _onRemove() {
    var _a, _b, _c;
    (_c = (_b = (_a = this._dialogRef) == null ? void 0 : _a._containerInstance) == null ? void 0 : _b._removeAriaLabelledBy) == null ? void 0 : _c.call(_b, this.id);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogTitle_BaseFactory;
    return function MatDialogTitle_Factory(__ngFactoryType__) {
      return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static \u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
    features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  align;
  _onAdd() {
    var _a, _b;
    (_b = (_a = this._dialogRef._containerInstance) == null ? void 0 : _a._updateActionSectionCount) == null ? void 0 : _b.call(_a, 1);
  }
  _onRemove() {
    var _a, _b;
    (_b = (_a = this._dialogRef._containerInstance) == null ? void 0 : _a._updateActionSectionCount) == null ? void 0 : _b.call(_a, -1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogActions_BaseFactory;
    return function MatDialogActions_Factory(__ngFactoryType__) {
      return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
    hostVars: 6,
    hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static \u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDialogModule,
    imports: [DialogModule, OverlayModule, PortalModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
    exports: [BidiModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDialog],
    imports: [DialogModule, OverlayModule, PortalModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, ...DIRECTIVES],
      exports: [BidiModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// libs/common/src/lib/types/calendar.class.ts
var Calendar = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.primary = !!data.primary;
    this.summary = data.summary || "";
    this.can_edit = !!data.can_edit;
    this.resource = new Space(data.resource || data.system);
    this.availability = (data.availability || []).map(({ starts_at, ends_at, date, duration, status }) => {
      return {
        date: new Date(date || starts_at * 1e3).valueOf(),
        duration: duration || differenceInMinutes(ends_at * 1e3, starts_at * 1e3),
        status
      };
    });
    this.hidden = !!data.hidden;
  }
};

// libs/components/src/lib/authenticated-image.pipe.ts
var MAX_CACHED_IMAGES = 64;
var MAX_FAILED_LOADS = 64;
var FAILED_LOAD_TTL = 30 * 1e3;
var LEGACY_CACHE_NAME = "PlaceOS.image-cache-v1";
var LEGACY_CACHE_KEYS = "PlaceOS.image-cache-keys-v1";
var IMAGE_STORE = /* @__PURE__ */ new Map();
var IMAGE_LOADS = /* @__PURE__ */ new Map();
var FAILED_LOADS = /* @__PURE__ */ new Map();
var _legacy_cache_removed = false;
function removeLegacyCache() {
  if (_legacy_cache_removed)
    return;
  _legacy_cache_removed = true;
  if (typeof caches !== "undefined") {
    void caches.delete(LEGACY_CACHE_NAME).catch(() => false);
  }
  if (typeof sessionStorage !== "undefined") {
    try {
      sessionStorage.removeItem(LEGACY_CACHE_KEYS);
    } catch {
    }
  }
}
function getCachedAuthenticatedImage(source) {
  const cached = IMAGE_STORE.get(source);
  if (!cached)
    return void 0;
  IMAGE_STORE.delete(source);
  IMAGE_STORE.set(source, cached);
  return cached;
}
function canLoadAuthenticatedImage(source) {
  return (FAILED_LOADS.get(source) || 0) <= Date.now();
}
function cacheObjectUrl(source, url) {
  const previous = IMAGE_STORE.get(source);
  if (previous && previous !== url)
    URL.revokeObjectURL(previous);
  IMAGE_STORE.delete(source);
  IMAGE_STORE.set(source, url);
  while (IMAGE_STORE.size > MAX_CACHED_IMAGES) {
    const oldest_source = IMAGE_STORE.keys().next().value;
    if (!oldest_source)
      break;
    const oldest_url = IMAGE_STORE.get(oldest_source);
    IMAGE_STORE.delete(oldest_source);
    if (oldest_url)
      URL.revokeObjectURL(oldest_url);
  }
  return url;
}
function rememberFailedLoad(source) {
  FAILED_LOADS.delete(source);
  FAILED_LOADS.set(source, Date.now() + FAILED_LOAD_TTL);
  while (FAILED_LOADS.size > MAX_FAILED_LOADS) {
    const oldest_source = FAILED_LOADS.keys().next().value;
    if (!oldest_source)
      break;
    FAILED_LOADS.delete(oldest_source);
  }
}
function setAuthCookie(cookie_path) {
  const tkn = J();
  document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Xe()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=${cookie_path};samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
}
function authHeaders() {
  const tkn = J();
  return tkn === "x-api-key" ? { "X-API-Key": Xe() } : { Authorization: `Bearer ${tkn}` };
}
function loadAuthenticatedImage(source, cookie_path) {
  return loadImage(source, () => {
    setAuthCookie(cookie_path);
    return fetch(source);
  });
}
function loadAuthenticatedImageWithHeader(source) {
  return loadImage(source, () => fetch(source, { headers: authHeaders() }));
}
async function loadImage(source, request) {
  removeLegacyCache();
  const cached = getCachedAuthenticatedImage(source);
  if (cached)
    return cached;
  const retry_after = FAILED_LOADS.get(source) || 0;
  if (retry_after > Date.now()) {
    throw new Error("Image load is in retry cooldown");
  }
  FAILED_LOADS.delete(source);
  const pending = IMAGE_LOADS.get(source);
  if (pending)
    return pending;
  const load = request().then(async (response) => {
    if (!(response == null ? void 0 : response.ok)) {
      throw new Error(`Failed to fetch image: ${response == null ? void 0 : response.status}`);
    }
    const url = URL.createObjectURL(await response.blob());
    return cacheObjectUrl(source, url);
  }).catch((error) => {
    rememberFailedLoad(source);
    throw error;
  }).finally(() => IMAGE_LOADS.delete(source));
  IMAGE_LOADS.set(source, load);
  return load;
}
var _AuthenticatedImagePipe = class _AuthenticatedImagePipe {
  constructor() {
    this._change_detector = inject(ChangeDetectorRef);
    this._loading = /* @__PURE__ */ new Set();
  }
  transform(source) {
    if (!source || typeof source !== "string")
      return "";
    if (!source.includes("/api/engine/v2/uploads"))
      return source;
    const cached = getCachedAuthenticatedImage(source);
    if (cached)
      return cached;
    if (!Mt() || this._loading.has(source) || !canLoadAuthenticatedImage(source)) {
      return "";
    }
    this._loading.add(source);
    void loadAuthenticatedImage(source, "/api/engine/v2/uploads").catch((error) => console.info("Failed to load image:", source, error)).finally(() => {
      this._loading.delete(source);
      this._change_detector.markForCheck();
    });
    return "";
  }
};
_AuthenticatedImagePipe.\u0275fac = function AuthenticatedImagePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthenticatedImagePipe)();
};
_AuthenticatedImagePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "authenticatedImage,authImage", type: _AuthenticatedImagePipe, pure: false });
var AuthenticatedImagePipe = _AuthenticatedImagePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImagePipe, [{
    type: Pipe,
    args: [{
      name: "authenticatedImage,authImage",
      pure: false
    }]
  }], null, null);
})();

// libs/components/src/lib/authenticated-image.directive.ts
var _AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._observer = null;
    this._source_version = 0;
    this.source = input(
      void 0,
      ...ngDevMode ? [{ debugName: "source" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnChanges(changes) {
    var _a;
    if (!changes.source)
      return;
    this._source_version += 1;
    this.clearTimeout("load");
    (_a = this._observer) == null ? void 0 : _a.disconnect();
    this._observer = null;
    const source = this.source();
    if (!source)
      return;
    if (!this._isLocalUrl(source)) {
      this._element.nativeElement.src = source;
      return;
    }
    this._loadWhenVisible(source, this._source_version);
  }
  ngOnDestroy() {
    var _a;
    (_a = this._observer) == null ? void 0 : _a.disconnect();
    this._observer = null;
    super.ngOnDestroy();
  }
  _loadWhenVisible(source, version) {
    if (typeof IntersectionObserver === "undefined") {
      void this._loadImage(source, version);
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      var _a;
      if (!entries.some(({ isIntersecting }) => isIntersecting)) {
        return;
      }
      (_a = this._observer) == null ? void 0 : _a.disconnect();
      this._observer = null;
      void this._loadImage(source, version);
    }, { rootMargin: "300px" });
    this._observer.observe(this._element.nativeElement);
  }
  async _loadImage(source, version) {
    if (version !== this._source_version || source !== this.source())
      return;
    if (!Mt()) {
      this.timeout("load", () => void this._loadImage(source, version), 300);
      return;
    }
    const cached = getCachedAuthenticatedImage(source);
    if (cached) {
      this._element.nativeElement.src = cached;
      return;
    }
    const is_api = source.includes("/api/engine/v2/uploads") || source.includes("/api/engine/v2/signage");
    try {
      const url = is_api ? await loadAuthenticatedImage(source, this._cookiePath(source)) : await loadAuthenticatedImageWithHeader(source);
      if (version === this._source_version && source === this.source()) {
        this._element.nativeElement.src = url;
      }
    } catch (error) {
      if (version === this._source_version) {
        this._element.nativeElement.dispatchEvent(new ErrorEvent("error", { error }));
      }
    }
  }
  /** Whether the source resolves to the current origin. */
  _isLocalUrl(source) {
    try {
      return new URL(source, location.href).origin === location.origin;
    } catch {
      return false;
    }
  }
  /** Return the narrowest cookie path that includes the resource. */
  _cookiePath(source) {
    return source.includes("/api/engine/v2/uploads") ? "/api/engine/v2/uploads" : "/api/engine/v2/signage";
  }
};
_AuthenticatedImageDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AuthenticatedImageDirective_BaseFactory;
  return function AuthenticatedImageDirective_Factory(__ngFactoryType__) {
    return (\u0275AuthenticatedImageDirective_BaseFactory || (\u0275AuthenticatedImageDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AuthenticatedImageDirective)))(__ngFactoryType__ || _AuthenticatedImageDirective);
  };
})();
_AuthenticatedImageDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuthenticatedImageDirective, selectors: [["img", "auth", ""], ["video", "auth", ""], ["audio", "auth", ""]], inputs: { source: [1, "source"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
var AuthenticatedImageDirective = _AuthenticatedImageDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[auth], video[auth], audio[auth]"
    }]
  }], null, { source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }] });
})();

// libs/events/src/lib/calendar.fn.ts
var CALENDAR_ENDPOINT = "/api/staff/v1/calendars";
async function queryCalendars() {
  const list2 = await f(CALENDAR_ENDPOINT);
  return list2.map((c) => new Calendar(c));
}
async function queryCalendarAvailability(q) {
  const query = toQueryString(q);
  const list2 = await f(`${CALENDAR_ENDPOINT}/availability${query ? "?" + query : ""}`);
  return list2.map((c) => new Calendar(c));
}
var calendarsToSpaces = (list2, org) => list2.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org == null ? void 0 : org.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable);
async function querySpaceFreeBusy(q, org) {
  const query = toQueryString(q);
  const list2 = await f(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`);
  return calendarsToSpaces(list2.map((c) => new Calendar(c)), org);
}

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
var APP_VERSION = VERSION.raw || VERSION.version || VERSION.hash;
async function queryEvents(q) {
  const query = toQueryString(q);
  try {
    const list2 = await f(`${EVENTS_ENDPOINT}${query ? "?" + query : ""}`);
    return list2.map((e) => new CalendarEvent(e));
  } catch (_) {
    return [];
  }
}

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c0 = ["input"];
var _c1 = ["*"];
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
        \u0275\u0275viewQuery(_c0, 5);
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
    ngContentSelectors: _c1,
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
var _c02 = ["*"];
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
])], ngContentSelectors: _c02, decls: 11, vars: 13, consts: [["type", "button", "matRipple", "", 1, "hover:bg-base-200", "relative", "flex", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-1", "pl-2", 3, "click"], [1, "z-10", "flex", "flex-1", "items-center", "space-x-2", "px-2", "text-left"], [1, "flex", "h-full", "w-full", "flex-col", "justify-center", "leading-none"], [1, "text-xs", "opacity-30"], [3, "matTooltip"], [1, "bg-info", "absolute", "inset-0", "z-0", "m-0!", "opacity-10"], [1, "px-2"], [1, "pointer-events-none", 3, "ngModel"], ["toggle", "", 1, "border-base-400", "relative", "h-8", "w-12", "rounded-full", "border-2"], [1, "absolute", "top-1/2", "flex", "h-6", "w-6", "-translate-x-0.5", "-translate-y-1/2", "items-center", "justify-center", "rounded-full", "text-black", "shadow-sm"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
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
    \u0275\u0275classProp("py-2", !ctx.inline())("py-1", ctx.inline());
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
            <div
                class="z-10 flex flex-1 items-center space-x-2 px-2 text-left"
                [class.py-2]="!inline()"
                [class.py-1]="inline()"
            >
                <div
                    class="flex h-full w-full flex-col justify-center leading-none"
                >
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "libs/components/src/lib/settings-toggle.component.ts", lineNumber: 93 });
})();

// node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
var noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b2) {
  if (str.indexOf(b2[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b2[0]) {
      level++;
    } else if (str[i] === b2[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (/^ {0,3}>/.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens[tokens.length - 1];
        if ((lastToken == null ? void 0 : lastToken.type) === "code") {
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
      list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    var _a;
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = ((_a = this.rules.inline._backpedal.exec(cap[0])) == null ? void 0 : _a[0]) ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = __spreadProps(__spreadValues({}, blockNormal), {
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
});
var blockPedantic = __spreadProps(__spreadValues({}, blockNormal), {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = "\\p{P}\\p{S}";
var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = __spreadProps(__spreadValues({}, inlineNormal), {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
});
var inlineGfm = __spreadProps(__spreadValues({}, inlineNormal), {
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
var inlineBreaks = __spreadProps(__spreadValues({}, inlineGfm), {
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && (lastToken == null ? void 0 : lastToken.type) === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    var _a;
    const langString = (_a = (lang || "").match(/^\S*/)) == null ? void 0 : _a[0];
    const code = text.replace(/\n$/, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " "
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${text}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text }) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  options;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
};
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
  parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    var _a, _b;
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if ((_b = (_a = this.defaults.extensions) == null ? void 0 : _a.childTokens) == null ? void 0 : _b[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = __spreadValues({}, pack);
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          let rendererFunc = pack.renderer[rendererProp];
          if (!pack.useNewRenderer) {
            rendererFunc = this.#convertRendererFunction(rendererFunc, rendererProp, renderer);
          }
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = __spreadValues(__spreadValues({}, this.defaults), opts);
    });
    return this;
  }
  // TODO: Remove this in next major release
  #convertRendererFunction(func, prop, renderer) {
    switch (prop) {
      case "heading":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, renderer.parser.parseInline(token.tokens), token.depth, unescape(renderer.parser.parseInline(token.tokens, renderer.parser.textRenderer)));
        };
      case "code":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text, token.lang, !!token.escaped);
        };
      case "table":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          let header = "";
          let cell = "";
          for (let j = 0; j < token.header.length; j++) {
            cell += this.tablecell({
              text: token.header[j].text,
              tokens: token.header[j].tokens,
              header: true,
              align: token.align[j]
            });
          }
          header += this.tablerow({ text: cell });
          let body = "";
          for (let j = 0; j < token.rows.length; j++) {
            const row = token.rows[j];
            cell = "";
            for (let k = 0; k < row.length; k++) {
              cell += this.tablecell({
                text: row[k].text,
                tokens: row[k].tokens,
                header: false,
                align: token.align[k]
              });
            }
            body += this.tablerow({ text: cell });
          }
          return func.call(this, header, body);
        };
      case "blockquote":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          const body = this.parser.parse(token.tokens);
          return func.call(this, body);
        };
      case "list":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          const ordered = token.ordered;
          const start = token.start;
          const loose = token.loose;
          let body = "";
          for (let j = 0; j < token.items.length; j++) {
            const item = token.items[j];
            const checked = item.checked;
            const task = item.task;
            let itemBody = "";
            if (item.task) {
              const checkbox = this.checkbox({ checked: !!checked });
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox + " "
                  });
                }
              } else {
                itemBody += checkbox + " ";
              }
            }
            itemBody += this.parser.parse(item.tokens, loose);
            body += this.listitem({
              type: "list_item",
              raw: itemBody,
              text: itemBody,
              task,
              checked: !!checked,
              loose,
              tokens: item.tokens
            });
          }
          return func.call(this, body, ordered, start);
        };
      case "html":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text, token.block);
        };
      case "paragraph":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "escape":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
      case "link":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.href, token.title, this.parser.parseInline(token.tokens));
        };
      case "image":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.href, token.title, token.text);
        };
      case "strong":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "em":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "codespan":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
      case "del":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "text":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
    }
    return func;
  }
  setOptions(opt) {
    this.defaults = __spreadValues(__spreadValues({}, this.defaults), opt);
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  #parseMarkdown(lexer2, parser2) {
    return (src, options2) => {
      const origOpt = __spreadValues({}, options2);
      const opt = __spreadValues(__spreadValues({}, this.defaults), origOpt);
      if (this.defaults.async === true && origOpt.async === false) {
        if (!opt.silent) {
          console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
        }
        opt.async = true;
      }
      const throwError = this.#onError(!!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  #onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse = marked;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// libs/components/src/lib/confirm-modal.component.ts
function ConfirmModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 5)(2, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.content(), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7);
    \u0275\u0275element(2, "mat-spinner", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r0.cancel_text()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.confirm_text()), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ])), {
    loading: (s) => {
      var _a;
      return (_a = ref.componentInstance.loading) == null ? void 0 : _a.set(s);
    },
    close: () => ref.close()
  });
}
var _ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = new EventEmitter();
    this.title = signal(
      this._data.title || "COMMON.CONFIRM",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.content = signal(
      this._data.content || "Are you sure?",
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_text = signal(
      this._data.confirm_text || "COMMON.ACCEPT",
      ...ngDevMode ? [{ debugName: "confirm_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancel_text = signal(
      this._data.cancel_text || "COMMON.CANCEL",
      ...ngDevMode ? [{ debugName: "cancel_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = signal(
      this._data.icon || {
        class: "material-symbols-rounded",
        content: "done"
      },
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disableClose = () => this._dialog_ref.disableClose = true;
    this.enableClose = () => this._dialog_ref.disableClose = false;
  }
  ngOnInit() {
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    this.event.emit({ reason: "done" });
  }
};
_ConfirmModalComponent.\u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmModalComponent)();
};
_ConfirmModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Template, 3, 2, "main", 2)(4, ConfirmModalComponent_Conditional_4_Template, 5, 1, "main", 3);
    \u0275\u0275conditionalCreate(5, ConfirmModalComponent_Conditional_5_Template, 7, 6, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  TranslatePipe
], encapsulation: 2 });
var ConfirmModalComponent = _ConfirmModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title() }}</h2>
        </header>
        @if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon()" class="text-5xl"></icon>
                <p content class="text-center" [innerHTML]="content()"></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text() | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    (click)="onConfirm()"
                >
                    {{ confirm_text() | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 123 });
})();

// node_modules/@angular/material/fesm2022/slider.mjs
var _c03 = ["knob"];
var _c12 = ["valueIndicatorContainer"];
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
        \u0275\u0275viewQuery(MatRipple, 5)(_c03, 5)(_c12, 5);
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
  set disabled(v2) {
    this._disabled = v2;
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
  set discrete(v2) {
    this._discrete = v2;
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
  set min(v2) {
    const min = v2 === void 0 || v2 === null || isNaN(v2) ? this._min : v2;
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
  set max(v2) {
    const max = v2 === void 0 || v2 === null || isNaN(v2) ? this._max : v2;
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
  set step(v2) {
    const step = isNaN(v2) ? this._step : v2;
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
  set translateX(v2) {
    this._translateX = v2;
  }
  _translateX;
  thumbPosition = _MatThumb.END;
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v2) {
    this._hostElement.min = v2 + "";
    this._cdr.detectChanges();
  }
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v2) {
    this._hostElement.max = v2 + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v2) {
    this._hostElement.step = v2 + "";
    this._cdr.detectChanges();
  }
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v2) {
    this._hostElement.disabled = v2;
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
  _setIsFocused(v2) {
    this._isFocused = v2;
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
  _clamp(v2) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v2, max), min);
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
  _updateThumbUIByValue(options2) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options2);
  }
  _updateThumbUIByPointerEvent(event, options2) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options2);
  }
  _updateThumbUI(options2) {
    this._slider._setTransition(!!(options2 == null ? void 0 : options2.withAnimation));
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
  _clamp(v2) {
    return Math.max(Math.min(v2, this.getMaxPos()), this.getMinPos());
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
        const module = Dd(this.sys(), this.mod(), this.index());
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
        const module = Dd(this.sys(), this.mod(), this.index());
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

// libs/events/src/lib/calendar.service.ts
var _CalendarService = class _CalendarService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._calendars = signal(
      [],
      ...ngDevMode ? [{ debugName: "_calendars" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._calendars_request = null;
    this.calendar_list = this._calendars.asReadonly();
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._waitForOrg();
  }
  async init() {
    if (this._settings.get("app.events.use_bookings"))
      return;
    this._initialised.next(true);
  }
  get calendars() {
    return this._calendars();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return querySpaceFreeBusy({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  async checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    const result = await queryCalendarAvailability({
      period_start,
      period_end,
      system_ids: system_ids.join(",")
    });
    const start = new Date(old_booking == null ? void 0 : old_booking.date).valueOf();
    const end = addMinutes(start, old_booking == null ? void 0 : old_booking.duration).valueOf();
    const available = result.every((i) => {
      var _a;
      const availability = i.availability;
      if (old_booking && i.id === ((_a = old_booking.system) == null ? void 0 : _a.email)) {
        const index = availability.findIndex((block2) => {
          return block2.date >= start && addMinutes(block2.date, block2.duration).valueOf() <= end;
        });
        if (index !== -1) {
          availability.splice(index, 1);
        }
      }
      return !availability.length;
    });
    return !!available;
  }
  async loadCalendars() {
    if (this._calendars().length)
      return;
    this._calendars_request = this._calendars_request || queryCalendars().then((list2) => this._calendars.set(list2)).catch((error) => {
      log("CalendarService", "Failed to load calendars", error, "warn");
    }).finally(() => this._calendars_request = null);
    await this._calendars_request;
  }
  _waitForOrg() {
    const check = () => {
      if (this._org.initialised())
        return this.init();
      this.timeout("init", check, 100);
    };
    check();
  }
};
_CalendarService.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarService)();
};
_CalendarService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
var CalendarService = _CalendarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/spaces.service.ts
var SPACE_PIPE;
var _SpacesService = class _SpacesService {
  /** List of available spaces */
  get space_list() {
    return this.list();
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._all_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_all_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this.all_spaces = this._all_spaces.asReadonly();
    this.list = computed(
      () => this._all_spaces().filter((space) => space.map_id),
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces_by_id = computed(
      () => new Map(this.list().map((space) => [space.id, space])),
      ...ngDevMode ? [{ debugName: "_spaces_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces_by_email = computed(
      () => new Map(this.list().filter(({ email }) => !!email).map((space) => [space.email, space])),
      ...ngDevMode ? [{ debugName: "_spaces_by_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.list().map((i) => i.features.filter((_) => _.trim())))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._compare = (space) => space.zones.includes(this._org.building.id);
    SPACE_PIPE = new SpacePipe();
    if (!SPACE_PIPE.org)
      SPACE_PIPE.org = this._org;
    effect(() => {
      if (!this._org.initialised())
        return;
      this._init();
    });
  }
  _init() {
    if (!this._settings.get("app.prevent_space_init"))
      this.loadSpaces();
    else
      this._initialised.set(true);
  }
  /**
   * Get a filtered list of the available spaces
   * @param predicate Predicate for filtering spaces
   */
  filter(predicate = this._compare) {
    return this.space_list.filter((_) => predicate(_));
  }
  async loadSpace(space_id) {
    const system = await ba(space_id);
    const space = new Space(__spreadProps(__spreadValues({}, system), {
      level: this._org.levelWithID([...system.zones])
    }));
    SPACE_PIPE.updateSpaceList([space]);
  }
  /**
   * Find space with given id/email
   * @param space_id ID/Email address associated with the space
   */
  find(space_id) {
    return this._spaces_by_id().get(space_id) || this._spaces_by_email().get(space_id);
  }
  async loadSpaces() {
    var _a;
    const systems = (await ga({
      zone_id: (_a = this._org.organisation) == null ? void 0 : _a.id,
      limit: 5e3
    })).data;
    const space_list = systems.map((sys) => new Space(__spreadProps(__spreadValues({}, sys), {
      level: this._org.levelWithID([...sys.zones])
    })));
    this._all_spaces.set(space_list);
    SPACE_PIPE.updateSpaceList(this.space_list);
    this._initialised.set(true);
  }
};
_SpacesService.\u0275fac = function SpacesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpacesService)();
};
_SpacesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpacesService, factory: _SpacesService.\u0275fac, providedIn: "root" });
var SpacesService = _SpacesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/control/src/app/ui/help-modal.component.ts
function HelpModalComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 15)(2, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function HelpModalComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11);
    \u0275\u0275listener("click", function HelpModalComponent_For_5_Template_li_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active_item.set(item_r2));
    });
    \u0275\u0275conditionalCreate(1, HelpModalComponent_For_5_Conditional_1_Template, 3, 0, "div", 12);
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", item_r2.id === ctx_r2.active_item().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.id === ctx_r2.active_item().id ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon || "help");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
  }
}
function HelpModalComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.title, " ");
  }
}
var _HelpModalComponent = class _HelpModalComponent {
  constructor() {
    var _a, _b;
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.items = this._data.items;
    this.active_item = signal(
      ((_a = this.items) == null ? void 0 : _a.find((_) => _.id === this._data.active_id)) || ((_b = this.items) == null ? void 0 : _b[0]) || { id: "", content: `` },
      ...ngDevMode ? [{ debugName: "active_item" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.content = computed(
      () => {
        const item = this.active_item();
        return (item == null ? void 0 : item.content) ? marked(item.content) : "";
      },
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
};
_HelpModalComponent.\u0275fac = function HelpModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelpModalComponent)();
};
_HelpModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpModalComponent, selectors: [["help-modal"]], decls: 16, vars: 5, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "sm:h-[80vh]", "sm:w-[80vw]", "sm:flex-row"], ["sidebar", "", 1, "bg-base-300", "w-full", "sm:h-full", "sm:w-64"], ["auth", "", 1, "mx-auto", "my-2", "w-48", "sm:mt-6", "sm:mb-8", "sm:w-32", 3, "source"], [1, "hidden", "list-none", "space-y-2", "p-0", "pl-4", "sm:block"], [1, "relative", "flex", "items-center", "rounded-l-3xl", "py-2", "pl-4", 3, "active"], [1, "dark", "w-full", "px-2", "pb-2"], ["appearance", "outline", 1, "block", "h-12", "w-full", "sm:hidden"], [3, "ngModelChange", "ngModel"], [3, "value"], ["content", "", 1, "bg-base-100", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", "sm:h-full", "sm:w-1/2", "sm:p-8", 3, "innerHTML"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-2"], [1, "relative", "flex", "items-center", "rounded-l-3xl", "py-2", "pl-4", 3, "click"], [1, "bg-base-100", "absolute", "top-1/2", "right-0", "h-22", "w-6", "-translate-y-1/2", "overflow-hidden"], [1, "ml-4"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-3xl"], [1, "bg-base-300", "absolute", "top-0", "right-0", "h-12", "w-12", "-translate-y-1/2", "rounded-full"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-12", "w-12", "translate-y-1/2", "rounded-full"]], template: function HelpModalComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "ul", 3);
    \u0275\u0275repeaterCreate(4, HelpModalComponent_For_5_Template, 7, 5, "li", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-select", 7);
    \u0275\u0275listener("ngModelChange", function HelpModalComponent_Template_mat_select_ngModelChange_8_listener($event) {
      return ctx.active_item.set($event);
    });
    \u0275\u0275repeaterCreate(9, HelpModalComponent_For_10_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "div", 9);
    \u0275\u0275pipe(12, "safe");
    \u0275\u0275elementStart(13, "button", 10)(14, "icon");
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ((_a = ctx.logo()) == null ? void 0 : _a.src) || ctx.logo());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.items);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.active_item());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(12, 3, ctx.content()), \u0275\u0275sanitizeHtml);
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  IconComponent,
  AuthenticatedImageDirective,
  SafePipe
], styles: ["\nli.active[_ngcontent-%COMP%] {\n  background-color: var(--%NS%base-100);\n  color: var(--%NS%base-content);\n  overflow: visible !important;\n}\n/*# sourceMappingURL=help-modal.component.css.map */"] });
var HelpModalComponent = _HelpModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpModalComponent, [{
    type: Component,
    args: [{ selector: "help-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col items-center overflow-hidden rounded-sm sm:h-[80vh] sm:w-[80vw] sm:flex-row"
        >
            <div sidebar class="bg-base-300 w-full sm:h-full sm:w-64">
                <img
                    auth
                    class="mx-auto my-2 w-48 sm:mt-6 sm:mb-8 sm:w-32"
                    [source]="logo()?.src || logo()"
                />
                <ul class="hidden list-none space-y-2 p-0 pl-4 sm:block">
                    @for (item of items; track item) {
                        <li
                            class="relative flex items-center rounded-l-3xl py-2 pl-4"
                            [class.active]="item.id === active_item().id"
                            (click)="active_item.set(item)"
                        >
                            @if (item.id === active_item().id) {
                                <div
                                    class="bg-base-100 absolute top-1/2 right-0 h-22 w-6 -translate-y-1/2 overflow-hidden"
                                >
                                    <div
                                        class="bg-base-300 absolute top-0 right-0 h-12 w-12 -translate-y-1/2 rounded-full"
                                    ></div>
                                    <div
                                        class="bg-base-300 absolute right-0 bottom-0 h-12 w-12 translate-y-1/2 rounded-full"
                                    ></div>
                                </div>
                            }
                            <icon>{{ item.icon || 'help' }}</icon>
                            <div class="ml-4">{{ item.title }}</div>
                            <div
                                class="absolute inset-0 overflow-hidden rounded-3xl"
                                matRipple
                            ></div>
                        </li>
                    }
                </ul>
                <div class="dark w-full px-2 pb-2">
                    <mat-form-field
                        class="block h-12 w-full sm:hidden"
                        appearance="outline"
                    >
                        <mat-select
                            [ngModel]="active_item()"
                            (ngModelChange)="active_item.set($event)"
                        >
                            @for (item of items; track item) {
                                <mat-option [value]="item">
                                    {{ item.title }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div
                content
                class="bg-base-100 h-1/2 w-full flex-1 overflow-auto p-4 sm:h-full sm:w-1/2 sm:p-8"
                [innerHTML]="content() | safe"
            ></div>
            <button
                icon
                matRipple
                class="absolute top-2 right-2"
                mat-dialog-close
            >
                <icon>close</icon>
            </button>
        </div>
    `, imports: [
      MatDialogModule,
      SafePipe,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      MatRippleModule,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;9937b39ee753ab75243902992fd3d159674860b56da24ae473743700a5153f7e;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/ui/help-modal.component.ts */\nli.active {\n  background-color: var(--base-100);\n  color: var(--base-content);\n  overflow: visible !important;\n}\n/*# sourceMappingURL=help-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpModalComponent, { className: "HelpModalComponent", filePath: "apps/control/src/app/ui/help-modal.component.ts", lineNumber: 109 });
})();

// apps/control/src/app/ui/select-meeting-modal.component.ts
var _c04 = (a0) => ({ count: a0 });
function SelectMeetingModalComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cal_r1 = ctx.$implicit;
    \u0275\u0275property("value", cal_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cal_r1.name || cal_r1.summary, " ");
  }
}
function SelectMeetingModalComponent_Conditional_21_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function SelectMeetingModalComponent_Conditional_21_Conditional_0_For_2_Template_button_click_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.select(event_r3));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r3 == null ? void 0 : event_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, event_r3 == null ? void 0 : event_r3.date, "shortTime"), " ");
  }
}
function SelectMeetingModalComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, SelectMeetingModalComponent_Conditional_21_Conditional_0_For_2_Template, 6, 5, "button", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.events());
  }
}
function SelectMeetingModalComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.MEETINGS_EMPTY"), " ");
  }
}
function SelectMeetingModalComponent_Conditional_21_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SelectMeetingModalComponent_Conditional_21_Conditional_0_Template, 3, 0, "div", 11)(1, SelectMeetingModalComponent_Conditional_21_Conditional_1_Template, 3, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((_a = ctx_r3.events()) == null ? void 0 : _a.length) ? 0 : 1);
  }
}
function SelectMeetingModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONTROL.MEETINGS_LOADING"));
  }
}
var _SelectMeetingModalComponent = class _SelectMeetingModalComponent {
  constructor() {
    this._service = inject(ControlStateService);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef);
    this.calendars = this._service.calendars;
    this.events = this._service.events;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.calendar = this._service.calendar;
    this.setCalendar = (c) => this._service.setCalendar(c);
    this.select = async (e) => {
      var _a;
      const details = await openConfirmModal({
        title: i18n("APP.CONTROL.MEETING_JOIN_TITLE"),
        content: i18n("APP.CONTROL.MEETING_JOIN_MSG", {
          name: (_a = e.organiser) == null ? void 0 : _a.name,
          time: format(e.date, "h:mm a")
        }),
        icon: { content: "login" }
      }, this._dialog);
      details.loading(i18n("APP.CONTROL.MEETING_JOIN_LOADING"));
      if (details.reason !== "done")
        return;
      await this._service.setEvent(e);
      notifySuccess(i18n("APP.CONTROL.MEETING_JOIN_SUCCESS"));
      this._dialog_ref.close();
    };
  }
};
_SelectMeetingModalComponent.\u0275fac = function SelectMeetingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectMeetingModalComponent)();
};
_SelectMeetingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectMeetingModalComponent, selectors: [["select-meeting-modal"]], decls: 23, vars: 14, consts: [[1, "bg-base-100", "fixed", "inset-0"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-2"], [1, "mx-auto", "w-160", "max-w-full", "p-2"], [1, "my-4", "w-full", "text-center", "text-2xl", "font-medium"], [1, "w-full"], ["for", "calendar"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "my-4", "w-full", "font-medium"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "opacity-40"], [1, "space-y-2", "overflow-auto"], ["btn", "", "matRipple", "", 1, "border-base-200", "flex", "w-full", "items-center", "rounded-sm", "border", "p-4"], ["btn", "", "matRipple", "", 1, "border-base-200", "flex", "w-full", "items-center", "rounded-sm", "border", "p-4", 3, "click"], [1, "w-1/2", "flex-1", "truncate", "text-left"], [1, "text-sm", "opacity-60"], [3, "diameter"]], template: function SelectMeetingModalComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2)(5, "h2", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
    \u0275\u0275text(10, "User calendar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-select", 7);
    \u0275\u0275listener("ngModelChange", function SelectMeetingModalComponent_Template_mat_select_ngModelChange_12_listener($event) {
      return ctx.setCalendar($event);
    });
    \u0275\u0275repeaterCreate(13, SelectMeetingModalComponent_For_14_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "h3", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, SelectMeetingModalComponent_Conditional_21_Template, 2, 1)(22, SelectMeetingModalComponent_Conditional_22_Template, 5, 4, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "APP.CONTROL.MEETING_SELECT"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx.calendar());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.calendars());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 7, "APP.CONTROL.MEETING_JOIN_INFO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 9, "APP.CONTROL.MEETING_COUNT", \u0275\u0275pureFunction1(12, _c04, ((_a = ctx.events()) == null ? void 0 : _a.length) || "0")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 21 : 22);
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatHint,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  IconComponent,
  TranslatePipe,
  DatePipe
], encapsulation: 2 });
var SelectMeetingModalComponent = _SelectMeetingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMeetingModalComponent, [{
    type: Component,
    args: [{ selector: "select-meeting-modal", template: `
        <div class="bg-base-100 fixed inset-0">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-2 right-2"
            >
                <icon>close</icon>
            </button>
            <div class="mx-auto w-160 max-w-full p-2">
                <h2 class="my-4 w-full text-center text-2xl font-medium">
                    {{ 'APP.CONTROL.MEETING_SELECT' | translate }}
                </h2>
                <div class="w-full">
                    <label for="calendar">User calendar:</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [ngModel]="calendar()"
                            (ngModelChange)="setCalendar($event)"
                        >
                            @for (cal of calendars(); track cal) {
                                <mat-option [value]="cal">
                                    {{ cal.name || cal.summary }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-hint>
                            {{ 'APP.CONTROL.MEETING_JOIN_INFO' | translate }}
                        </mat-hint>
                    </mat-form-field>
                </div>
                <h3 class="my-4 w-full font-medium">
                    {{
                        'APP.CONTROL.MEETING_COUNT'
                            | translate: { count: events()?.length || '0' }
                    }}
                </h3>
                @if (!loading()) {
                    @if (events()?.length) {
                        <div class="space-y-2 overflow-auto">
                            @for (event of events(); track event) {
                                <button
                                    btn
                                    matRipple
                                    class="border-base-200 flex w-full items-center rounded-sm border p-4"
                                    (click)="select(event)"
                                >
                                    <div
                                        class="w-1/2 flex-1 truncate text-left"
                                    >
                                        {{ event?.title }}
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{ event?.date | date: 'shortTime' }}
                                    </div>
                                </button>
                            }
                        </div>
                    } @else {
                        <div
                            class="flex h-32 w-full items-center justify-center opacity-40"
                        >
                            {{ 'APP.CONTROL.MEETINGS_EMPTY' | translate }}
                        </div>
                    }
                } @else {
                    <div
                        class="flex h-32 w-full items-center justify-center opacity-40"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ 'APP.CONTROL.MEETINGS_LOADING' | translate }}</p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      IconComponent,
      DatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectMeetingModalComponent, { className: "SelectMeetingModalComponent", filePath: "apps/control/src/app/ui/select-meeting-modal.component.ts", lineNumber: 109 });
})();

// apps/control/src/app/ui/source-select.component.ts
var _c05 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.id || $item.name;
function SourceSelectComponent_Conditional_5_Conditional_0_For_2_For_4_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SourceSelectComponent_Conditional_5_Conditional_0_For_2_For_4_Template_button_click_0_listener() {
      const input_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectSource(input_r2));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const input_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("inverse", input_r2.id === ((_a = ctx_r2.details()) == null ? void 0 : _a.source));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", input_r2.name, " ");
  }
}
function SourceSelectComponent_Conditional_5_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h4", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SourceSelectComponent_Conditional_5_Conditional_0_For_2_For_4_Template, 3, 3, "button", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", type_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.input_map()[type_r4]);
  }
}
function SourceSelectComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SourceSelectComponent_Conditional_5_Conditional_0_For_2_Template, 5, 1, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("flex-col", ctx_r2.simple())("flex-wrap", !ctx_r2.simple());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.input_types());
  }
}
function SourceSelectComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const source_r5 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "APP.CONTROL.SOURCE_INPUTS_EMPTY", \u0275\u0275pureFunction1(4, _c05, (source_r5 == null ? void 0 : source_r5.name) || "Unknown")), " ");
  }
}
function SourceSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SourceSelectComponent_Conditional_5_Conditional_0_Template, 3, 4, "div", 3)(1, SourceSelectComponent_Conditional_5_Conditional_1_Template, 4, 6, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.input_types().length ? 0 : 1);
  }
}
function SourceSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONTROL.SOURCE_SWITCHING"));
  }
}
var _SourceSelectComponent = class _SourceSelectComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this.simple = input(
      false,
      ...ngDevMode ? [{ debugName: "simple" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.output = input(
      void 0,
      ...ngDevMode ? [{ debugName: "output" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.source = output();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._outputs = this._state.output_list;
    this._available_inputs = this._state.available_inputs;
    this.output_id = computed(
      () => this.output() || "",
      ...ngDevMode ? [{ debugName: "output_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.details = computed(
      () => {
        const id = this.output_id();
        return this._outputs().find((_) => _.id === id);
      },
      ...ngDevMode ? [{ debugName: "details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input_list = computed(
      () => {
        const id = this.output_id();
        return this._available_inputs().filter((_) => !_.outputs || _.outputs.includes(id));
      },
      ...ngDevMode ? [{ debugName: "input_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input_types = computed(
      () => unique(this.input_list().map((_) => _.type)),
      ...ngDevMode ? [{ debugName: "input_types" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input_map = computed(
      () => {
        const list2 = this.input_list();
        return this.input_types().reduce((map, type) => {
          map[type] = list2.filter((_) => _.type === type);
          return map;
        }, {});
      },
      ...ngDevMode ? [{ debugName: "input_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async selectSource(input2) {
    this.loading.set(true);
    await this._state.setRoute(input2.id, this.output());
    this.loading.set(false);
    this.source.emit(input2);
  }
};
_SourceSelectComponent.\u0275fac = function SourceSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SourceSelectComponent)();
};
_SourceSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SourceSelectComponent, selectors: [["source-select"]], inputs: { simple: [1, "simple"], output: [1, "output"] }, outputs: { source: "source" }, decls: 7, vars: 12, consts: [[1, "flex", "flex-col", "items-center", "text-black"], [1, "mb-2", "text-xl", "font-medium"], [1, "m-auto", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "divide", "flex", 3, "flex-col", "flex-wrap"], [1, "m-auto", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "divide", "flex"], ["group", "", 1, "flex", "flex-col", "space-y-2", "p-2"], [1, "text-center", "underline"], ["btn", "", "matRipple", "", "source", "", 1, "w-48", 3, "inverse"], ["btn", "", "matRipple", "", "source", "", 1, "w-48", 3, "click"], [1, "truncate"], [3, "diameter"]], template: function SourceSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275declareLet(1);
    \u0275\u0275elementStart(2, "h3", 1);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SourceSelectComponent_Conditional_5_Template, 2, 1)(6, SourceSelectComponent_Conditional_6_Template, 5, 4, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("p-2", ctx.simple())("p-4", !ctx.simple());
    \u0275\u0275advance();
    const source_r6 = \u0275\u0275storeLet(ctx.details());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, "APP.CONTROL.SOURCE_INPUT_SELECT", \u0275\u0275pureFunction1(10, _c05, (source_r6 == null ? void 0 : source_r6.name) || "= No Name =")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
  }
}, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
var SourceSelectComponent = _SourceSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SourceSelectComponent, [{
    type: Component,
    args: [{
      selector: "source-select",
      template: `
        <div
            class="flex flex-col items-center text-black"
            [class.p-2]="simple()"
            [class.p-4]="!simple()"
        >
            @let source = details();
            <h3 class="mb-2 text-xl font-medium">
                {{
                    'APP.CONTROL.SOURCE_INPUT_SELECT'
                        | translate: { name: source?.name || '= No Name =' }
                }}
            </h3>
            @if (!loading()) {
                @if (input_types().length) {
                    <div
                        class="divide flex"
                        [class.flex-col]="simple()"
                        [class.flex-wrap]="!simple()"
                    >
                        @for (type of input_types(); track type) {
                            <div group class="flex flex-col space-y-2 p-2">
                                <h4 class="text-center underline">
                                    {{ type }}
                                </h4>
                                @for (
                                    input of input_map()[type];
                                    track input.id || input.name
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        source
                                        class="w-48"
                                        [class.inverse]="
                                            input.id === details()?.source
                                        "
                                        (click)="selectSource(input)"
                                    >
                                        <div class="truncate">
                                            {{ input.name }}
                                        </div>
                                    </button>
                                }
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="m-auto flex flex-col items-center justify-center p-8"
                    >
                        <p>
                            {{
                                'APP.CONTROL.SOURCE_INPUTS_EMPTY'
                                    | translate
                                        : { name: source?.name || 'Unknown' }
                            }}
                        </p>
                    </div>
                }
            } @else {
                <div
                    class="m-auto flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'APP.CONTROL.SOURCE_SWITCHING' | translate }}</p>
                </div>
            }
        </div>
    `,
      imports: [TranslatePipe, MatProgressSpinnerModule, MatRippleModule]
    }]
  }], null, { simple: [{ type: Input, args: [{ isSignal: true, alias: "simple", required: false }] }], output: [{ type: Input, args: [{ isSignal: true, alias: "output", required: false }] }], source: [{ type: Output, args: ["source"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SourceSelectComponent, { className: "SourceSelectComponent", filePath: "apps/control/src/app/ui/source-select.component.ts", lineNumber: 89 });
})();

// apps/control/src/app/ui/source-select-modal.component.ts
var _SourceSelectModalComponent = class _SourceSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.simple = false;
    this.output = this._data.output;
  }
  close() {
    this._dialog_ref.close();
  }
};
_SourceSelectModalComponent.\u0275fac = function SourceSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SourceSelectModalComponent)();
};
_SourceSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SourceSelectModalComponent, selectors: [["source-select-modal"]], decls: 5, vars: 20, consts: [[1, "bg-base-100", "flex", "flex-col", "items-center", "overflow-auto", "px-8", "py-16"], [3, "source", "simple", "output"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute"]], template: function SourceSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "source-select", 1);
    \u0275\u0275listener("source", function SourceSelectModalComponent_Template_source_select_source_1_listener() {
      return ctx.close();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 2)(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("max-height", ctx.simple ? "80vh" : "");
    \u0275\u0275classProp("fixed", !ctx.simple)("inset-0", !ctx.simple)("relative", ctx.simple)("rounded", ctx.simple);
    \u0275\u0275advance();
    \u0275\u0275property("simple", ctx.simple)("output", ctx.output);
    \u0275\u0275advance();
    \u0275\u0275classProp("top-8", !ctx.simple)("right-8", !ctx.simple)("top-2", ctx.simple)("right-2", ctx.simple);
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  MatRippleModule,
  MatRipple,
  SourceSelectComponent
], encapsulation: 2 });
var SourceSelectModalComponent = _SourceSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SourceSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "source-select-modal",
      template: `
        <div
            class="bg-base-100 flex flex-col items-center overflow-auto px-8 py-16"
            [style.max-height]="simple ? '80vh' : ''"
            [class.fixed]="!simple"
            [class.inset-0]="!simple"
            [class.relative]="simple"
            [class.rounded]="simple"
        >
            <source-select
                [simple]="simple"
                [output]="output"
                (source)="close()"
            ></source-select>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute"
                [class.top-8]="!simple"
                [class.right-8]="!simple"
                [class.top-2]="simple"
                [class.right-2]="simple"
            >
                <icon>close</icon>
            </button>
        </div>
    `,
      imports: [
        MatDialogModule,
        IconComponent,
        MatRippleModule,
        SourceSelectComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SourceSelectModalComponent, { className: "SourceSelectModalComponent", filePath: "apps/control/src/app/ui/source-select-modal.component.ts", lineNumber: 52 });
})();

// apps/control/src/app/control-state.service.ts
var _ControlStateService = class _ControlStateService extends AsyncHandler {
  get id() {
    return this._id();
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._cal = inject(CalendarService);
    this._spaces = inject(SpacesService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this._id = signal(
      "",
      ...ngDevMode ? [{ debugName: "_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._system = signal(
      {},
      ...ngDevMode ? [{ debugName: "_system" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._inputs = signal(
      [],
      ...ngDevMode ? [{ debugName: "_inputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_inputs = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_inputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._outputs = signal(
      [],
      ...ngDevMode ? [{ debugName: "_outputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._volume = signal(
      0,
      ...ngDevMode ? [{ debugName: "_volume" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mute = signal(
      false,
      ...ngDevMode ? [{ debugName: "_mute" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._input_data = signal(
      [],
      ...ngDevMode ? [{ debugName: "_input_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._output_data = signal(
      [],
      ...ngDevMode ? [{ debugName: "_output_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lights = signal(
      [],
      ...ngDevMode ? [{ debugName: "_lights" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._blinds = signal(
      [],
      ...ngDevMode ? [{ debugName: "_blinds" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._screens = signal(
      [],
      ...ngDevMode ? [{ debugName: "_screens" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._url = signal(
      "",
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_output = signal(
      "",
      ...ngDevMode ? [{ debugName: "_active_output" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._calendar = signal(
      null,
      ...ngDevMode ? [{ debugName: "_calendar" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ignore_changes = [];
    this.system_id = this._id.asReadonly();
    this.system = this._system.asReadonly();
    this.calendar = this._calendar.asReadonly();
    this.lights = this._lights.asReadonly();
    this.blinds = this._blinds.asReadonly();
    this.screens = this._screens.asReadonly();
    this.volume = this._volume.asReadonly();
    this.mute = this._mute.asReadonly();
    this.active_output = this._active_output.asReadonly();
    this._debounced_id = debounced(this._id, 1e3, {
      injector: this._injector
    });
    this._space = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._debounced_id.value(),
      loader: async ({ params: id }) => {
        if (!id)
          return new Space(new Rs());
        log("Panel", `Loading system "${id}"...`);
        try {
          const system = await ba(id);
          return new Space(system);
        } catch (error) {
          const { status, message } = error || {};
          log("Control", "Error loading system details:", [status, message], "error");
          if (status === 404)
            this._router.navigate(["/bootstrap"]);
          return new Space(new Rs());
        }
      }
    }));
    this.space = computed(
      () => this._space.value(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input_list = computed(
      () => this._input_data().filter((_) => !_.hidden),
      ...ngDevMode ? [{ debugName: "input_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_inputs = computed(
      () => {
        const ids = this._available_inputs();
        return this.input_list().filter((_) => ids.includes(_.id));
      },
      ...ngDevMode ? [{ debugName: "available_inputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.presentables = computed(
      () => this._input_data().filter((_) => _.presentable !== false),
      ...ngDevMode ? [{ debugName: "presentables" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.capture_list = computed(
      () => this._output_data().filter((_) => {
        var _a;
        return _.type === "recording" || ((_a = _.mod) == null ? void 0 : _a.includes("Capture"));
      }),
      ...ngDevMode ? [{ debugName: "capture_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mic_list = computed(
      () => this._input_data().filter((_) => {
        var _a;
        return _.type === "mic" || ((_a = _.mod) == null ? void 0 : _a.includes("Microphone"));
      }),
      ...ngDevMode ? [{ debugName: "mic_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.camera_list = computed(
      () => this._input_data().filter((_) => {
        var _a;
        return _.type === "cam" || ((_a = _.mod) == null ? void 0 : _a.includes("Camera"));
      }),
      ...ngDevMode ? [{ debugName: "camera_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_camera_list = this._systemBinding("available_cameras", "System", []);
    this.available_cameras = computed(
      () => {
        const camera_list = this.camera_list();
        const available_cameras = this.available_camera_list();
        if (!(available_cameras == null ? void 0 : available_cameras.length))
          return camera_list;
        return camera_list.filter((camera) => available_cameras.includes(camera.id));
      },
      ...ngDevMode ? [{ debugName: "available_cameras" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_camera = this._systemBinding("selected_camera");
    this.microphones = this._systemBinding("microphones", "System", []);
    this.join_modes = this._systemBinding("join_modes");
    this.joined_id = this._systemBinding("joined");
    this.lighting_scenes = this._systemBinding("lighting_scenes", "System", []);
    this.lighting_scene = this._systemBinding("lighting_scene");
    this.lighting_levels = this._systemBinding("lighting_levels");
    this.room_accessories = this._systemBinding("room_accessories", "System", []);
    this.joined = computed(
      () => {
        const modes = this.join_modes();
        const id = this.joined_id();
        return modes ? modes[id] : null;
      },
      ...ngDevMode ? [{ debugName: "joined" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.output_list = computed(
      () => {
        const list2 = this._output_data();
        const available = this._outputs();
        const joined = this.joined();
        return list2.filter((_) => {
          var _a;
          return !_.hidden && (!_.hide_on_join || !((_a = joined == null ? void 0 : joined.room_ids) == null ? void 0 : _a.length)) && (!_.id || (available || []).includes(_.id));
        });
      },
      ...ngDevMode ? [{ debugName: "output_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._help = this._systemBinding("help");
    this.help_items = computed(
      () => {
        const help = this._help();
        return !help ? null : Object.keys(help).map((key) => __spreadValues({ id: key }, help[key]));
      },
      ...ngDevMode ? [{ debugName: "help_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._preview_outputs = this._systemBinding("preview_outputs");
    this.preview_outputs = computed(
      () => {
        var _a;
        return ((_a = this._preview_outputs()) == null ? void 0 : _a.length) > 0;
      },
      ...ngDevMode ? [{ debugName: "preview_outputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tabs = this._systemBinding("tabs", "System", []);
    this._hide_join_button = this._systemBinding("join_hide_button");
    this.hide_join_button = computed(
      () => !!this._hide_join_button(),
      ...ngDevMode ? [{ debugName: "hide_join_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._hide_present_all = this._systemBinding("hide_present_all");
    this.hide_present_all = computed(
      () => !!this._hide_present_all(),
      ...ngDevMode ? [{ debugName: "hide_present_all" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_master_audio = this._systemBinding("has_master_audio");
    this._join_master = this._systemBinding("join_master");
    this._join_lockout = this._systemBinding("join_lockout_secondary");
    this.join_status = computed(
      () => [
        this._join_master(),
        this._join_lockout()
      ],
      ...ngDevMode ? [{ debugName: "join_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.calendars = this._cal.calendar_list;
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ url: this._url(), calendar: this._calendar() }),
      loader: async ({ params: { url, calendar } }) => {
        if (!calendar || !url)
          return [];
        const list2 = await queryEvents({
          period_start: getUnixTime(Date.now()),
          period_end: getUnixTime(endOfDay(Date.now())),
          calendars: calendar.id
        });
        return list2.filter((_) => _.meeting_url.startsWith(url));
      }
    }));
    this.events = computed(
      () => this._events.value() ?? [],
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const id = this._id();
      untracked(() => this.bindToState(id));
    });
    effect(() => {
      const inputs = this._inputs() || [];
      untracked(() => this.bindSources("input", inputs));
    });
    effect(() => {
      const outputs = this._outputs() || [];
      untracked(() => this.bindSources("output", outputs));
    });
  }
  setID(id) {
    if (id !== this._id()) {
      this._id.set(id);
      this._spaces.loadSpace(id);
    }
  }
  /** Power on the active system */
  join(id) {
    return this._execute("join_mode", [id]);
  }
  /** Power on the active system */
  powerOn() {
    return this._execute("power", [true]);
  }
  /** Power off the active system */
  powerOff(unlink = false) {
    return this._execute("power", [false, unlink]);
  }
  /** Set the active calendar */
  setCalendar(cal) {
    this._calendar.set(cal);
  }
  /** Set the active calendar */
  setOutput(id) {
    var _a, _b;
    this._active_output.set(id);
    if ((_a = this._system()) == null ? void 0 : _a.selected_input) {
      this.setOutputSource((_b = this._system()) == null ? void 0 : _b.selected_input);
      this._active_output.set("");
    }
  }
  /** Route input source to output */
  setRoute(input2, output2, set_input = true) {
    if (set_input)
      this.setSelectedInput(input2);
    return this._execute("route", [input2, output2]);
  }
  /** Clear the route on the output source */
  unroute(output2) {
    return this._execute("unroute", [output2]);
  }
  routeToAll(input2 = "") {
    if (!input2)
      input2 = this._system().selected_input;
    return this._execute("route_all", [input2]);
  }
  /** Set the route of the active output */
  async setOutputSource(input2, clear = true) {
    const output2 = this._active_output();
    const data = (this._output_data() || []).find((_) => _.id === output2);
    this.setSelectedInput(input2);
    if (!output2 || (data == null ? void 0 : data.source) === input2)
      return;
    await this.setRoute(input2, output2);
    if (clear)
      this._active_output.set("");
  }
  setSelectedInput(input2) {
    if (this._system().selected_input === input2)
      return;
    console.warn("Select:", input2);
    return this.timeout(`selected`, () => this._execute("selected_input", [input2]), 50);
  }
  /** Update the econtrol meeting */
  setEvent(event) {
    return this._execute("econtrol", [
      currentUser().name,
      event.meeting_url,
      event.meeting_id,
      event.meeting_provider,
      event.event_start,
      event.event_end
    ], "MeetingPush");
  }
  setMute(state = true, source = "") {
    var _a;
    const outputs = this._output_data();
    if (!source) {
      this._mute.set(state);
      source = ((_a = outputs[0]) == null ? void 0 : _a.id) || "";
    }
    if (source) {
      const data = outputs.find((_) => _.id === source);
      if (data) {
        this.updateSourceData("output", data.id, __spreadProps(__spreadValues({}, data), {
          mute: state
        }));
      }
    }
    return this._execute("mute", source ? [state, source] : [state]);
  }
  setVolume(value = 0, source = "") {
    this.timeout(`set:volume:${source}`, () => {
      var _a;
      value = Math.floor(value);
      const outputs = this._output_data();
      if (!source) {
        this._volume.set(value);
        source = ((_a = outputs[0]) == null ? void 0 : _a.id) || "";
      }
      if (source) {
        const data = outputs.find((_) => _.id === source);
        if (data) {
          this.updateSourceData("output", data.id, __spreadProps(__spreadValues({}, data), {
            volume: value
          }));
        }
      }
      this._execute("volume", source ? [value, source] : [value]).then();
      this._ignore_changes.push("volume");
      this.timeout(`set-volume`, () => this._ignore_changes = this._ignore_changes.filter((_) => _ !== "volume"), 500);
    }, 100);
  }
  /** Execute driver method */
  _execute(name, params = [], mod_name = "System") {
    const mod = Dd(this._id(), mod_name);
    if (!mod)
      return;
    return mod.execute(name, params);
  }
  /** Open switch source modal */
  switchSource(output2) {
    this._dialog.open(SourceSelectModalComponent, {
      data: { output: output2 }
    });
  }
  /** Open select meeting modal */
  async selectMeeting(input2) {
    const cals = this.calendars();
    if (cals == null ? void 0 : cals.length)
      this.setCalendar(cals[0]);
    this._dialog.open(SelectMeetingModalComponent, {
      data: { input: input2 }
    });
  }
  /** Open view help modal */
  async viewHelp(id) {
    this._dialog.open(HelpModalComponent, {
      data: {
        items: await firstValueWhere(this.help_items, (_) => !!_, this._injector),
        active_id: id
      }
    });
  }
  bindToState(id) {
    if (!id)
      return;
    this.bindTo(id, "supported_meeting_url", "MeetingPush", (u) => {
      this.updateProperty("meeting_url", u);
      this._url.set(u);
    });
    this.bindTo(id, "name");
    this.bindTo(id, "voice_control");
    this.bindTo(id, "active");
    this.bindTo(id, "connected");
    this.bindTo(id, "recording");
    this.bindTo(id, "has_zoom");
    this.bindTo(id, "selected_tab");
    this.bindTo(id, "selected_input");
    this.bindTo(id, "mute");
    this.bindTo(id, "volume");
    this.bindTo(id, "inputs", void 0, (l) => this._inputs.set(l));
    this.bindTo(id, "available_inputs", void 0, (l) => this._available_inputs.set(l || []));
    this.bindTo(id, "available_outputs", void 0, (l) => this._outputs.set(l));
    this.bindTo(id, "lights", void 0, (l) => this._lights.set(l));
    this.bindTo(id, "blinds", void 0, (l) => this._blinds.set(l));
    this.bindTo(id, "screen", void 0, (l) => this._screens.set(l));
    this.bindTo(id, "qsc_dial_number", void 0, (v2) => this.updateProperty("phone", v2));
    this.bindTo(id, "qsc_dial_bindings", void 0, (v2) => {
      if (v2) {
        this.bindTo(id, v2.offhook_id, "Mixer", (l) => this.updateProperty("offhook", l));
        this.bindTo(id, v2.ringing_id, "Mixer", (l) => this.updateProperty("ringing", l));
      }
      this.updateProperty("dial_bindings", v2);
    });
  }
  /** Bind to changes on input or output sources */
  bindSources(type, alias_list) {
    const id = this._id();
    if (!id)
      return;
    if (type === "input")
      this._input_data.set([]);
    else
      this._output_data.set([]);
    for (const alias of alias_list) {
      this.bindTo(id, `${type}/${alias}`, void 0, (d) => this.updateSourceData(type, alias, d));
    }
  }
  /** Update listed data for given source */
  updateSourceData(type, id, data) {
    const list_signal = type === "input" ? this._input_data : this._output_data;
    let list2 = [...list_signal()];
    const index = list2.findIndex((item) => item.id === id);
    if (index >= 0) {
      list2.splice(index, 1, __spreadValues({ id }, data));
    } else {
      list2.push(__spreadValues({ id }, data));
    }
    if (type === "output") {
      this._volume.set(list2[0].volume || 0);
      this._mute.set(!!list2[0].mute);
    }
    list_signal.set(list2);
  }
  /** List to binding */
  bindTo(id, name, mod = "System", on_change = (v2) => this.updateProperty(name, v2)) {
    const module = Dd(id, mod).variable(name);
    this.subscription(`listen:${name}`, module.bindThenSubscribe(on_change));
  }
  /** Update properties of the system data */
  updateProperty(name, value) {
    if (this._ignore_changes.includes(name))
      return;
    this._system.update((item) => __spreadProps(__spreadValues({}, item), { [name]: value }));
  }
  /**
   * Create an Angular signal that mirrors a status variable binding on the
   * active system, rebinding whenever the active system changes.
   */
  _systemBinding(name, mod = "System", initial = void 0) {
    const value = signal(
      initial,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      const id = this._id();
      if (!id) {
        value.set(initial);
        return;
      }
      const binding = Dd(id, mod).variable(name);
      const unbind = binding.bind();
      const listener = binding.listen();
      const update = () => value.set(listener() ?? initial);
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
_ControlStateService.\u0275fac = function ControlStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlStateService)();
};
_ControlStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ControlStateService, factory: _ControlStateService.\u0275fac, providedIn: "root" });
var ControlStateService = _ControlStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
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
  var _a, _b, _c, _d, _e;
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
      \u0275\u0275twoWayBindingSet(ctx_r1.rec_current, $event) || (ctx_r1.rec_current = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "i", 7);
    \u0275\u0275twoWayListener("modelChange", function ControlStatusBarComponent_Conditional_0_Template_i_modelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rec_next, $event) || (ctx_r1.rec_next = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "button", 10)(11, "icon");
    \u0275\u0275text(12, "fiber_manual_record");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "button", 11)(15, "icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14)(22, "label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "duration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14)(29, "label");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "duration");
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
    \u0275\u0275twoWayProperty("model", ctx_r1.rec_current);
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_d = ctx_r1.capture_mod()) == null ? void 0 : _d.mod);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx_r1.rec_next);
    \u0275\u0275property("sys", ctx_r1.id)("mod", (_e = ctx_r1.capture_mod()) == null ? void 0 : _e.mod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.rec_title || "~Unnamed Recording~", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("sys", ctx_r1.id)("exec", ctx_r1.rec_status === "playing" ? "pause" : "start");
    \u0275\u0275attribute("place-action", ctx_r1.rec_status === "playing" ? "pause" : "start");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.rec_status === "playing" ? "pause" : "play_arrow");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-error", ctx_r1.rec_status === "playing")("bg-warning", ctx_r1.rec_status === "paused")("bg-base-300", ctx_r1.rec_status === "stopped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 31, ctx_r1.rec_status === "playing" ? "APP.CONTROL.STATE_RECORDING" : ctx_r1.rec_status === "paused" ? "APP.CONTROL.STATE_PAUSED" : "APP.CONTROL.STATE_IDLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 33, "APP.CONTROL.REMAINING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 35, ctx_r1.rec_remaining));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 37, "APP.CONTROL.NEXT_RECORDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 39, ctx_r1.rec_current));
  }
}
function ControlStatusBarComponent_Conditional_2_Template(rf, ctx) {
  var _a, _b;
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.volume_icon());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ((_a = ctx_r1.system()) == null ? void 0 : _a.volume) || 0)("disabled", (_b = ctx_r1.system()) == null ? void 0 : _b.mute);
    \u0275\u0275control();
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
    this.setVolume = (v2) => this._state.setVolume(v2);
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
_ControlStatusBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlStatusBarComponent, selectors: [["control-status-bar"]], decls: 3, vars: 2, consts: [["recording", "", 1, "divide-base-200", "flex", "items-center", "divide-x", "text-xs", "text-white"], [1, "flex-1"], [1, "text-base-content", "flex", "w-lg", "max-w-[50%]", "items-center", "space-x-2", "px-4", "py-2"], ["hidden", ""], ["binding", "", "bind", "status", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "title", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "remaining", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "current", 3, "modelChange", "model", "sys", "mod"], [1, "flex", "h-12", "w-24", "items-center", "justify-center", "p-2", "text-center"], [1, "flex", "h-12", "w-12", "items-center", "justify-center"], ["icon", "", "matRipple", "", "mute", "", 1, "rounded-none"], ["icon", "", "matRipple", "", "binding", "", "mod", "Capture", "onEvent", "click", 1, "rounded-none", 3, "sys", "exec"], [1, "flex", "h-12", "w-32", "flex-col", "p-2"], [1, "rounded-sm", "p-2", "text-center", "uppercase"], [1, "h-12", "p-2"], [1, ""], ["icon", "", "matRipple", "", 3, "click"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel", "disabled"]], template: function ControlStatusBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlStatusBarComponent_Conditional_0_Template, 35, 41, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ControlStatusBarComponent_Conditional_2_Template, 6, 3, "div", 2);
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
                class="divide-base-200 flex items-center divide-x text-xs text-white"
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
                        [(model)]="rec_current"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="current"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_next"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="current"
                    ></i>
                </div>
                <div
                    class="flex h-12 w-24 items-center justify-center p-2 text-center"
                >
                    {{ rec_title || '~Unnamed Recording~' }}
                </div>
                <div class="flex h-12 w-12 items-center justify-center">
                    <button icon matRipple mute class="rounded-none">
                        <icon>fiber_manual_record</icon>
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
                        [class.bg-warning]="rec_status === 'paused'"
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
                    <div class="">{{ rec_current | duration }}</div>
                </div>
            </div>
        }
        <div class="flex-1"></div>
        @if (has_master_audio() !== false) {
            <div
                class="text-base-content flex w-lg max-w-[50%] items-center space-x-2 px-4 py-2"
            >
                <button icon matRipple (click)="toggleMute()">
                    <icon>{{ volume_icon() }}</icon>
                </button>
                <mat-slider class="flex-1">
                    <input
                        matSliderThumb
                        [ngModel]="system()?.volume || 0"
                        (ngModelChange)="setVolume($event)"
                        [disabled]="system()?.mute"
                /></mat-slider>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlStatusBarComponent, { className: "ControlStatusBarComponent", filePath: "apps/control/src/app/status-bar.component.ts", lineNumber: 154 });
})();

// apps/control/src/app/ui/joystick.component.ts
var _c06 = ["panning_control"];
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
    \u0275\u0275viewQuerySignal(ctx._panning_el, _c06, 5);
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
    const mod = Dd(this.id, "System");
    if (!mod)
      return;
    mod.execute("selected_camera", [camera.id]);
  }
  recallPreset(preset) {
    const camera = this.active_camera();
    if (!(camera == null ? void 0 : camera.mod))
      return;
    const mod = Dd(this.id, camera.mod);
    if (!mod)
      return;
    mod.execute("recall", [preset]);
  }
  addPreset(preset) {
    const camera = this.active_camera();
    if (!camera)
      return;
    const mod = Dd(this.id, "System");
    if (!mod)
      return;
    mod.execute("add_preset", [preset, camera.id]);
  }
  removePreset(preset) {
    const camera = this.active_camera();
    if (!camera)
      return;
    const mod = Dd(this.id, "System");
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
      const mod = Dd(this.id, camera.mod);
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
    const mod = Dd(this.id, camera.mod);
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
      const mod = Dd(this.id, camera.mod);
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
        const list2 = [];
        for (const id in mapping) {
          list2.push(__spreadProps(__spreadValues({}, mapping[id]), {
            id
          }));
        }
        return list2;
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
var _forTrack02 = ($index, $item) => $item.binding;
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
    \u0275\u0275repeaterCreate(0, LightingLevelsTooltipComponent_Conditional_4_For_1_Template, 6, 5, "div", 3, _forTrack02);
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
      const mod = Dd(sys_id, "Lighting");
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
    const mod = Dd(this.id, "System");
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
var _c07 = (a0, a1) => [a0, a1];
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
    \u0275\u0275property("sys", ctx_r1.id)("params", \u0275\u0275pureFunction2(5, _c07, ctx_r1.lights()[0], state_r3));
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
var _c08 = (a0, a1) => [a0, a1];
var _forTrack03 = ($index, $item) => $item.name;
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
    \u0275\u0275repeaterCreate(1, MicrophoneTooltipComponent_Conditional_4_For_1_Conditional_3_For_2_Template, 4, 7, null, null, _forTrack03);
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
    \u0275\u0275repeaterCreate(1, MicrophoneTooltipComponent_Conditional_4_For_3_Conditional_3_For_2_Template, 4, 7, null, null, _forTrack03);
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
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r10.module_id)("bind", mic_r10.level_feedback)("ignore", ctx_r4.changing())("params", \u0275\u0275pureFunction2(11, _c08, mic_r10.level_id, ctx_r4.volume[\u0275$index_43_r11]));
    \u0275\u0275twoWayProperty("model", ctx_r4.volume[\u0275$index_43_r11]);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx_r4.id)("mod", mic_r10.module_id)("bind", mic_r10.mute_feedback)("params", \u0275\u0275pureFunction2(14, _c08, mic_r10.mute_id, ctx_r4.mute[\u0275$index_43_r11]));
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
    const mod = Dd(this.id, "System");
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
    const mod = Dd(this._state.id, "System");
    await mod.execute("qsc_dial_pad", [char]);
  }
  async action(method) {
    const mod = Dd(this._state.id, "System");
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
    const mod = Dd(this.id, "System");
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
    return Dd(id, "VidConf").execute("show_camera_pip", [state]);
  }
  async muteMicrophone(state) {
    const id = this._control.id;
    if (!id)
      return;
    return Dd(id, "VidConf").execute("mic_mute", [state]);
  }
  async setVideoLayout(layout) {
    const id = this._control.id;
    if (!id)
      return;
    return Dd(id, "VidConf").execute("video_layout", [layout]);
  }
  async setPresentationMode(mod) {
    const id = this._control.id;
    if (!id)
      return;
    return Dd(id, "VidConf").execute("presentation_mode", [mod]);
  }
  async hangup() {
    const id = this._control.id;
    if (!id)
      return;
    return Dd(id, "VidConf").execute("hangup", []);
  }
  async sendDTMF(digit) {
    const id = this._control.id;
    if (!id)
      return;
    return Dd(id, "VidConf").execute("dtmf_send", [digit]);
  }
  async toggleCallOnHold() {
    const id = this._control.id;
    if (!id)
      return;
    const call = this.call();
    if (!call)
      return;
    return Dd(id, "VidConf").execute(call.Status === "OnHold" ? "call_resume" : "call_place_on_hold", []);
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
      const binding = Dd(id, mod_name).variable(name);
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

// apps/control/src/app/video-call/video-call-dial-view.component.ts
function VideoCallDialViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 1);
    \u0275\u0275elementStart(1, "dialpad", 3);
    \u0275\u0275listener("pressed", function VideoCallDialViewComponent_Conditional_1_Template_dialpad_pressed_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDigit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4)(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "mat-form-field", 7)(8, "input", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function VideoCallDialViewComponent_Conditional_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dial_number, $event) || (ctx_r1.dial_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "button", 9);
    \u0275\u0275listener("click", function VideoCallDialViewComponent_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.joinConference());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
    \u0275\u0275listener("click", function VideoCallDialViewComponent_Conditional_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCamera());
    });
    \u0275\u0275elementStart(16, "div", 12)(17, "icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pt-8", !ctx_r1.redirect());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "APP.CONTROL.VC_ENTER_CODE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dial_number);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 13, "APP.CONTROL.VC_DIAL"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.dial_number());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "APP.CONTROL.JOIN"), " ");
    const show_pip_r3 = ctx_r1.show_camera_pip();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", show_pip_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(!show_pip_r3 ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(show_pip_r3 ? "Hide Camera PIP" : "Show Camera PIP");
  }
}
function VideoCallDialViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONTROL.VC_JOINING"));
  }
}
var _VideoCallDialViewComponent = class _VideoCallDialViewComponent {
  constructor() {
    this._control = inject(ControlStateService);
    this._call = inject(VideoCallStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.redirect = input(
      true,
      ...ngDevMode ? [{ debugName: "redirect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
    this.dial_number = signal(
      "",
      ...ngDevMode ? [{ debugName: "dial_number" }] : (
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
    this.call = this._call.call;
    this._show_camera_pip = this._call.show_camera_pip;
    this.show_camera_pip = computed(
      () => !!this._show_camera_pip(),
      ...ngDevMode ? [{ debugName: "show_camera_pip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleCamera = async () => this._call.showCameraPIP(!this.show_camera_pip());
  }
  get id() {
    return this._control.id;
  }
  addDigit(digit) {
    digit && digit !== "\b" ? this.dial_number.update((v2) => v2 + digit) : this.dial_number.update((v2) => v2.substr(0, v2.length - 1));
  }
  async joinConference() {
    const dial_number = this.dial_number();
    if (!dial_number)
      return;
    const system_id = this._control.id;
    const mod = Dd(system_id, "VidConf");
    this.loading.set(true);
    await mod.execute("dial", [dial_number]);
    this.loading.set(false);
    if (this.redirect()) {
      this._router.navigate(["call"], { relativeTo: this._route });
    }
    this.close.emit();
    this.dial_number.set("");
  }
};
_VideoCallDialViewComponent.\u0275fac = function VideoCallDialViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VideoCallDialViewComponent)();
};
_VideoCallDialViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCallDialViewComponent, selectors: [["video-call-dial-view"]], inputs: { redirect: [1, "redirect"] }, outputs: { close: "close" }, decls: 3, vars: 1, consts: [[1, "flex", "justify-center"], [1, ""], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "pressed"], [1, "flex", "flex-col"], [1, "px-2", "pt-4"], [1, "w-full", "p-2"], ["appearance", "outline", 1, "h-12", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "w-full", "px-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "items-center", "space-x-4"], [3, "diameter"]], template: function VideoCallDialViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, VideoCallDialViewComponent_Conditional_1_Template, 21, 17, "ng-container", 1)(2, VideoCallDialViewComponent_Conditional_2_Template, 5, 4, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 1 : 2);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  MatRippleModule,
  MatRipple,
  DialpadComponent,
  TranslatePipe
], encapsulation: 2 });
var VideoCallDialViewComponent = _VideoCallDialViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCallDialViewComponent, [{
    type: Component,
    args: [{ selector: "video-call-dial-view", template: `
        <div class="flex justify-center">
            @if (!loading()) {
                <ng-container class="">
                    <dialpad (pressed)="addDigit($event)"></dialpad>
                    <div class="flex flex-col" [class.pt-8]="!redirect()">
                        <p class="px-2 pt-4">
                            {{ 'APP.CONTROL.VC_ENTER_CODE' | translate }}
                        </p>
                        <div class="w-full p-2">
                            <mat-form-field
                                appearance="outline"
                                class="h-12 w-full"
                            >
                                <input
                                    matInput
                                    [(ngModel)]="dial_number"
                                    [placeholder]="
                                        'APP.CONTROL.VC_DIAL' | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-full p-2">
                            <button
                                btn
                                matRipple
                                class="w-full"
                                [disabled]="!dial_number()"
                                (click)="joinConference()"
                            >
                                {{ 'APP.CONTROL.JOIN' | translate }}
                            </button>
                        </div>
                        <div class="w-full px-2">
                            @let show_pip = show_camera_pip();
                            <button
                                btn
                                matRipple
                                class="w-full"
                                (click)="toggleCamera()"
                                [class.inverse]="show_pip"
                            >
                                <div class="flex items-center space-x-4">
                                    <icon>{{
                                        !show_pip
                                            ? 'visibility_off'
                                            : 'visibility'
                                    }}</icon>
                                    <span>{{
                                        show_pip
                                            ? 'Hide Camera PIP'
                                            : 'Show Camera PIP'
                                    }}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </ng-container>
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'APP.CONTROL.VC_JOINING' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      DialpadComponent
    ] }]
  }], null, { redirect: [{ type: Input, args: [{ isSignal: true, alias: "redirect", required: false }] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCallDialViewComponent, { className: "VideoCallDialViewComponent", filePath: "apps/control/src/app/video-call/video-call-dial-view.component.ts", lineNumber: 104 });
})();

// apps/control/src/app/ui/video-conf-tooltip.component.ts
var _c09 = (a0) => ["/panel", a0, "call"];
var _c13 = (a0) => ["/panel", a0];
var _c22 = () => ({ exact: true });
function VideoConferenceTooltipComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "video-call-dial-view", 2);
    \u0275\u0275listener("close", function VideoConferenceTooltipComponent_Conditional_0_Template_video_call_dial_view_close_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
  }
}
function VideoConferenceTooltipComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "APP.CONTROL.VC_IN_CALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c09, ctx_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "APP.CONTROL.VC_VIEW_CALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c13, ctx_r1.id))("routerLinkActiveOptions", \u0275\u0275pureFunction0(16, _c22));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "APP.CONTROL.VC_VIEW_INPUTS"), " ");
  }
}
var _VideoConferenceTooltipComponent = class _VideoConferenceTooltipComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this._vc_state = inject(VideoCallStateService);
    this._ref = inject(CustomTooltipData);
    this.dial_number = signal(
      "",
      ...ngDevMode ? [{ debugName: "dial_number" }] : (
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
    this.call = this._vc_state.call;
  }
  get id() {
    return this._state.id;
  }
  addDigit(digit) {
    this.dial_number.update((v2) => v2 + digit);
  }
  close() {
    this._ref.close();
  }
};
_VideoConferenceTooltipComponent.\u0275fac = function VideoConferenceTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VideoConferenceTooltipComponent)();
};
_VideoConferenceTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoConferenceTooltipComponent, selectors: [["video-conf-tooltip"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "rounded-sm", "shadow-sm"], [1, "bg-base-100", "my-2", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-2", "shadow-sm"], [3, "close"], [1, "w-full", "p-2", "text-center", "font-medium"], ["btn", "", "matRipple", "", "routerLinkActive", "inverse", 1, "w-40", 3, "routerLink"], ["btn", "", "matRipple", "", "routerLinkActive", "inverse", 1, "w-40", 3, "routerLink", "routerLinkActiveOptions"]], template: function VideoConferenceTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VideoConferenceTooltipComponent_Conditional_0_Template, 2, 0, "div", 0)(1, VideoConferenceTooltipComponent_Conditional_1_Template, 10, 17, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.call() ? 0 : 1);
  }
}, dependencies: [
  RouterModule,
  RouterLink,
  RouterLinkActive,
  MatRippleModule,
  MatRipple,
  VideoCallDialViewComponent,
  TranslatePipe
], encapsulation: 2 });
var VideoConferenceTooltipComponent = _VideoConferenceTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoConferenceTooltipComponent, [{
    type: Component,
    args: [{ selector: "video-conf-tooltip", template: `
        @if (!call()) {
            <div
                class="bg-base-100 my-2 flex flex-col items-center rounded-sm shadow-sm"
            >
                <video-call-dial-view (close)="close()"></video-call-dial-view>
            </div>
        } @else {
            <div
                class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-2 shadow-sm"
            >
                <h3 class="w-full p-2 text-center font-medium">
                    {{ 'APP.CONTROL.VC_IN_CALL' | translate }}
                </h3>
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="['/panel', id, 'call']"
                    routerLinkActive="inverse"
                >
                    {{ 'APP.CONTROL.VC_VIEW_CALL' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="['/panel', id]"
                    [routerLinkActiveOptions]="{ exact: true }"
                    routerLinkActive="inverse"
                >
                    {{ 'APP.CONTROL.VC_VIEW_INPUTS' | translate }}
                </a>
            </div>
        }
    `, imports: [
      RouterModule,
      TranslatePipe,
      MatRippleModule,
      VideoCallDialViewComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoConferenceTooltipComponent, { className: "VideoConferenceTooltipComponent", filePath: "apps/control/src/app/ui/video-conf-tooltip.component.ts", lineNumber: 56 });
})();

// apps/control/src/app/topbar-header.component.ts
var _forTrack04 = ($index, $item) => $item.id;
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
var TOOLTIP;
(function(TOOLTIP2) {
  TOOLTIP2[TOOLTIP2["PHONE"] = 0] = "PHONE";
  TOOLTIP2[TOOLTIP2["VC"] = 1] = "VC";
  TOOLTIP2[TOOLTIP2["MEET"] = 2] = "MEET";
  TOOLTIP2[TOOLTIP2["LIGHT_SCENES"] = 3] = "LIGHT_SCENES";
  TOOLTIP2[TOOLTIP2["LIGHTS"] = 4] = "LIGHTS";
  TOOLTIP2[TOOLTIP2["LIGHT_LEVELS"] = 5] = "LIGHT_LEVELS";
  TOOLTIP2[TOOLTIP2["ACCESSORIES"] = 6] = "ACCESSORIES";
  TOOLTIP2[TOOLTIP2["MICS"] = 7] = "MICS";
  TOOLTIP2[TOOLTIP2["CAMERA"] = 8] = "CAMERA";
  TOOLTIP2[TOOLTIP2["HELP"] = 9] = "HELP";
  TOOLTIP2[TOOLTIP2["JOIN"] = 10] = "JOIN";
  TOOLTIP2[TOOLTIP2["POWER"] = 11] = "POWER";
})(TOOLTIP || (TOOLTIP = {}));
var _TopbarHeaderComponent = class _TopbarHeaderComponent {
  constructor() {
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
    this._has_vc = this._call.connected;
    this._call_state = this._call.call;
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
      video_conf: VideoConferenceTooltipComponent,
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
        id: "video_conf",
        name: i18n("APP.CONTROL.ACTION_CONFERENCE"),
        icon: "call",
        show: true,
        enabled: false
      },
      {
        id: "meet",
        name: i18n("APP.CONTROL.ACTION_JOIN_MEETING"),
        icon: "video_call",
        show: true,
        enabled: false,
        action: () => this.selectMeeting()
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
        const has_vc = this._has_vc();
        const call = this._call_state();
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
        actions[TOOLTIP.VC].show = has_vc && false;
        actions[TOOLTIP.VC].enabled = !!call;
        actions[TOOLTIP.MEET].show = !this.is_trusted && (system == null ? void 0 : system.meeting_url) && false;
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
    this.selectMeeting = () => this._state.selectMeeting();
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
    this.is_trusted = In();
  }
};
_TopbarHeaderComponent.\u0275fac = function TopbarHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopbarHeaderComponent)();
};
_TopbarHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarHeaderComponent, selectors: [["topbar-header"]], decls: 14, vars: 3, consts: [["menu", "matMenu"], [1, "flex-1", "px-4"], ["auth", "", "alt", "Logo", 1, "h-12", 3, "source"], [1, "text-base-content", "p-4", "text-lg"], [1, "hidden", "flex-1", "items-center", "justify-end", "space-x-2", "p-4", "sm:flex"], ["icon", "", "matRipple", "", 1, "text-base-content", "mr-2", "sm:hidden", 3, "matMenuTriggerFor"], ["customTooltip", "", 3, "content", "z-index"], ["customTooltip", "", 3, "content"], ["icon", "", "matRipple", "", 1, "bg-base-200", "text-base-content", 3, "click"], ["customTooltip", "", 3, "click", "content"], ["mat-menu-item", ""], [1, "flex", "items-center", "text-base"], [1, "mr-2"]], template: function TopbarHeaderComponent_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275repeaterCreate(5, TopbarHeaderComponent_For_6_Template, 1, 1, null, null, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5)(8, "icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(12, TopbarHeaderComponent_For_13_Template, 1, 1, null, null, _forTrack04);
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
                class="h-12"
                alt="Logo"
                [source]="logo()?.src || logo()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarHeaderComponent, { className: "TopbarHeaderComponent", filePath: "apps/control/src/app/topbar-header.component.ts", lineNumber: 136 });
})();

export {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  AuthenticatedImageDirective,
  marked,
  parse,
  MatSlider,
  MatSliderThumb,
  MatSliderModule,
  BindingDirective,
  SourceSelectComponent,
  ControlStateService,
  ControlStatusBarComponent,
  JoystickTilt,
  JoystickPan,
  JoystickComponent,
  DialpadComponent,
  VideoCallStateService,
  VideoCallDialViewComponent,
  TopbarHeaderComponent
};
//# debugId=57e5cc27-bd1c-55de-85a0-20eaf2fd9e07
//# sourceMappingURL=chunk-54JGWFPQ.js.map
