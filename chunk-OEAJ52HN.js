import {
  AuthenticatedImageDirective,
  BreakpointObserver,
  Breakpoints,
  Building,
  BuildingLevel,
  CdkDialogContainer,
  CdkPortalOutlet,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  Dialog,
  DialogModule,
  ESCAPE,
  EventEmitter,
  GuestUser,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  InteractiveMapComponent,
  MAT_DIALOG_DATA,
  MapLocateModalComponent,
  MapPinComponent,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgModule,
  OrganisationService,
  PortalModule,
  SanitizePipe,
  SettingsService,
  Space,
  SpacePipe,
  Subject,
  TranslatePipe,
  UserAvatarComponent,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  _animationsDisabled,
  addEventGuest,
  checkinEventGuest,
  computed,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  currentUser,
  filter,
  hasModifierKey,
  inject,
  input,
  lastValueFrom,
  merge,
  model,
  notifyInfo,
  output,
  removeEventGuest,
  setClassMetadata,
  signal,
  take,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-2A5OUH7P.js";

// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {
}
var ENTER_ANIMATION = "_mat-bottom-sheet-enter";
var EXIT_ANIMATION = "_mat-bottom-sheet-exit";
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
  _breakpointSubscription;
  _animationsDisabled = _animationsDisabled();
  /** The state of the bottom sheet animations. */
  _animationState = "void";
  /** Emits whenever the state of the animation changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether the component has been destroyed. */
  _destroyed;
  constructor() {
    super();
    const breakpointObserver = inject(BreakpointObserver);
    this._breakpointSubscription = breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(() => {
      const classList = this._elementRef.nativeElement.classList;
      classList.toggle("mat-bottom-sheet-container-medium", breakpointObserver.isMatched(Breakpoints.Medium));
      classList.toggle("mat-bottom-sheet-container-large", breakpointObserver.isMatched(Breakpoints.Large));
      classList.toggle("mat-bottom-sheet-container-xlarge", breakpointObserver.isMatched(Breakpoints.XLarge));
    });
  }
  /** Begin animation of bottom sheet entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      if (this._animationsDisabled) {
        this._simulateAnimation(ENTER_ANIMATION);
      }
    }
  }
  /** Begin animation of the bottom sheet exiting from view. */
  exit() {
    if (!this._destroyed) {
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      if (this._animationsDisabled) {
        this._simulateAnimation(EXIT_ANIMATION);
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }
  _simulateAnimation(name) {
    this._ngZone.run(() => {
      this._handleAnimationEvent(true, name);
      setTimeout(() => this._handleAnimationEvent(false, name));
    });
  }
  _trapFocus() {
    super._trapFocus({
      preventScroll: true
    });
  }
  _handleAnimationEvent(isStart, animationName) {
    const isEnter = animationName === ENTER_ANIMATION;
    const isExit = animationName === EXIT_ANIMATION;
    if (isEnter || isExit) {
      this._animationStateChanged.emit({
        toState: isEnter ? "visible" : "hidden",
        phase: isStart ? "start" : "done"
      });
    }
  }
  static \u0275fac = function MatBottomSheetContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatBottomSheetContainer,
    selectors: [["mat-bottom-sheet-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
    hostVars: 9,
    hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("animationstart", function MatBottomSheetContainer_animationstart_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(true, $event.animationName);
        })("animationend", function MatBottomSheetContainer_animationend_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        })("animationcancel", function MatBottomSheetContainer_animationcancel_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
        \u0275\u0275classProp("mat-bottom-sheet-container-animations-enabled", !ctx._animationsDisabled)("mat-bottom-sheet-container-enter", ctx._animationState === "visible")("mat-bottom-sheet-container-exit", ctx._animationState === "hidden");
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function MatBottomSheetContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetContainer, [{
    type: Component,
    args: [{
      selector: "mat-bottom-sheet-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-bottom-sheet-container",
        "[class.mat-bottom-sheet-container-animations-enabled]": "!_animationsDisabled",
        "[class.mat-bottom-sheet-container-enter]": '_animationState === "visible"',
        "[class.mat-bottom-sheet-container-exit]": '_animationState === "hidden"',
        "tabindex": "-1",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-label]": "_config.ariaLabel",
        "(animationstart)": "_handleAnimationEvent(true, $event.animationName)",
        "(animationend)": "_handleAnimationEvent(false, $event.animationName)",
        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName)"
      },
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
    }]
  }], () => [], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
  /** The view container to place the overlay for the bottom sheet into. */
  viewContainerRef;
  /** Extra CSS classes to be added to the bottom sheet container. */
  panelClass;
  /** Text layout direction for the bottom sheet. */
  direction;
  /** Data being injected into the child component. */
  data = null;
  /** Whether the bottom sheet has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass;
  /** Whether the user can use escape or clicking outside to close the bottom sheet. */
  disableClose = false;
  /** Aria label to assign to the bottom sheet element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Whether the bottom sheet should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Where the bottom sheet should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the bottom sheet should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Scroll strategy to be used for the bottom sheet. */
  scrollStrategy;
  /** Height for the bottom sheet. */
  height = "";
  /** Minimum height for the bottom sheet. If a number is provided, assumes pixel units. */
  minHeight;
  /** Maximum height for the bottom sheet. If a number is provided, assumes pixel units. */
  maxHeight;
};
var MatBottomSheetRef = class {
  _ref;
  /** Instance of the component making up the content of the bottom sheet. */
  get instance() {
    return this._ref.componentInstance;
  }
  /**
   * `ComponentRef` of the component opened into the bottom sheet. Will be
   * null when the bottom sheet is opened using a `TemplateRef`.
   */
  get componentRef() {
    return this._ref.componentRef;
  }
  /**
   * Instance of the component into which the bottom sheet content is projected.
   * @docs-private
   */
  containerInstance;
  /** Whether the user is allowed to close the bottom sheet. */
  disableClose;
  /** Subject for notifying the user that the bottom sheet has opened and appeared. */
  _afterOpened = new Subject();
  /** Result to be passed down to the `afterDismissed` stream. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "visible"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE))).subscribe((event) => {
      if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  /**
   * Dismisses the bottom sheet.
   * @param result Data to be passed back to the bottom sheet opener.
   */
  dismiss(result) {
    if (!this.containerInstance) {
      return;
    }
    this.containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "start"), take(1)).subscribe(() => {
      this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
      this._ref.overlayRef.detachBackdrop();
    });
    this._result = result;
    this.containerInstance.exit();
    this.containerInstance = null;
  }
  /** Gets an observable that is notified when the bottom sheet is finished closing. */
  afterDismissed() {
    return this._ref.closed;
  }
  /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
};
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken("mat-bottom-sheet-default-options");
var MatBottomSheet = class _MatBottomSheet {
  _injector = inject(Injector);
  _parentBottomSheet = inject(_MatBottomSheet, {
    optional: true,
    skipSelf: true
  });
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, {
    optional: true
  });
  _bottomSheetRefAtThisLevel = null;
  _dialog = inject(Dialog);
  /** Reference to the currently opened bottom sheet. */
  get _openedBottomSheetRef() {
    const parent = this._parentBottomSheet;
    return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
  }
  set _openedBottomSheetRef(value) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
    let ref;
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      maxWidth: "100%",
      container: MatBottomSheetContainer,
      scrollStrategy: _config.scrollStrategy || createBlockScrollStrategy(this._injector),
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().bottom("0"),
      disableAnimations: this._animationsDisabled,
      templateContext: () => ({
        bottomSheetRef: ref
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MatBottomSheetRef(cdkRef, _config, container);
        return [{
          provide: MatBottomSheetRef,
          useValue: ref
        }, {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: _config.data
        }];
      }
    }));
    ref.afterDismissed().subscribe(() => {
      if (this._openedBottomSheetRef === ref) {
        this._openedBottomSheetRef = null;
      }
    });
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      ref.containerInstance.enter();
    }
    this._openedBottomSheetRef = ref;
    return ref;
  }
  /**
   * Dismisses the currently-visible bottom sheet.
   * @param result Data to pass to the bottom sheet instance.
   */
  dismiss(result) {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }
  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }
  static \u0275fac = function MatBottomSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheet)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatBottomSheet,
    factory: _MatBottomSheet.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheet, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
  static \u0275fac = function MatBottomSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatBottomSheetModule,
    imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
    exports: [MatBottomSheetContainer, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatBottomSheet],
    imports: [DialogModule, MatCommonModule, PortalModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
      exports: [MatBottomSheetContainer, MatCommonModule],
      providers: [MatBottomSheet]
    }]
  }], null, null);
})();

// libs/components/src/lib/status-pill.component.ts
var _c0 = ["*"];
function StatusPillComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " check_circle ");
  }
}
function StatusPillComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " cancel ");
  }
}
function StatusPillComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " block ");
  }
}
function StatusPillComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " info ");
  }
}
function StatusPillComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " warning ");
  }
}
var _StatusPillComponent = class _StatusPillComponent {
  constructor() {
    this.status = input(void 0);
  }
};
_StatusPillComponent.\u0275fac = function StatusPillComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatusPillComponent)();
};
_StatusPillComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusPillComponent, selectors: [["status-pill"]], inputs: { status: [1, "status"] }, ngContentSelectors: _c0, decls: 10, vars: 25, consts: [[1, "flex", "items-center", "space-x-2", "rounded-full", "border", "border-base-200", "bg-opacity-30", "px-2", "py-1", "text-base", "font-medium", "text-black"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"]], template: function StatusPillComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "icon", 2);
    \u0275\u0275conditionalCreate(3, StatusPillComponent_Case_3_Template, 1, 0)(4, StatusPillComponent_Case_4_Template, 1, 0)(5, StatusPillComponent_Case_5_Template, 1, 0)(6, StatusPillComponent_Case_6_Template, 1, 0)(7, StatusPillComponent_Case_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275projection(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    \u0275\u0275classProp("bg-success-light", ctx.status() === "success")("bg-warning-light", ctx.status() === "warning")("bg-error-light", ctx.status() === "error")("bg-info-light", ctx.status() === "info")("bg-base-200", ctx.status() === "neutral");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", ctx.status() === "success")("text-warning", ctx.status() === "warning")("text-error", ctx.status() === "error")("text-info", ctx.status() === "info")("text-base-content", ctx.status() === "neutral")("opacity-40", ctx.status() === "neutral");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = ctx.status()) === "success" ? 3 : tmp_11_0 === "error" ? 4 : tmp_11_0 === "neutral" ? 5 : tmp_11_0 === "info" ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("opacity-40", ctx.status() === "neutral");
  }
}, dependencies: [IconComponent], encapsulation: 2 });
var StatusPillComponent = _StatusPillComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusPillComponent, [{
    type: Component,
    args: [{ selector: "status-pill", template: `
        <div
            class="flex items-center space-x-2 rounded-full border border-base-200 bg-opacity-30 px-2 py-1 text-base font-medium text-black"
            [class.bg-success-light]="status() === 'success'"
            [class.bg-warning-light]="status() === 'warning'"
            [class.bg-error-light]="status() === 'error'"
            [class.bg-info-light]="status() === 'info'"
            [class.bg-base-200]="status() === 'neutral'"
        >
            <div
                class="flex h-5 w-5 items-center justify-center rounded-full"
                [class.text-success]="status() === 'success'"
                [class.text-warning]="status() === 'warning'"
                [class.text-error]="status() === 'error'"
                [class.text-info]="status() === 'info'"
                [class.text-base-content]="status() === 'neutral'"
                [class.opacity-40]="status() === 'neutral'"
            >
                <icon class="text-2xl">
                    @switch (status()) {
                        @case ('success') {
                            check_circle
                        }
                        @case ('error') {
                            cancel
                        }
                        @case ('neutral') {
                            block
                        }
                        @case ('info') {
                            info
                        }
                        @default {
                            warning
                        }
                    }
                </icon>
            </div>
            <div [class.opacity-40]="status() === 'neutral'">
                <ng-content></ng-content>
            </div>
        </div>
    `, imports: [IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusPillComponent, { className: "StatusPillComponent", filePath: "libs/components/src/lib/status-pill.component.ts", lineNumber: 54 });
})();

// libs/events/src/lib/attendee-list.component.ts
var _c02 = (a0) => ({ count: a0 });
function AttendeeListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function AttendeeListComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function AttendeeListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function AttendeeListComponent_For_9_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.HOST"), " ");
  }
}
function AttendeeListComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "a-user-avatar", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AttendeeListComponent_For_9_Conditional_0_Conditional_5_Template, 3, 3, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "div", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host() === user_r3.email ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", user_r3.checked_in)("bg-pending", !user_r3.checked_in);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 8, user_r3.checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECKED_IN_NOT"));
  }
}
function AttendeeListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AttendeeListComponent_For_9_Conditional_0_Template, 9, 10, "div", 7);
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!user_r3.resource && (ctx_r1.host() !== user_r3.email || ctx_r1.show_host()) ? 0 : -1);
  }
}
var _AttendeeListComponent = class _AttendeeListComponent {
  constructor() {
    this.host = input("");
    this.show_host = input(true);
    this.list = input([]);
    this.final_list = computed(() => this.show_host() ? this.list() : this.list().filter((user) => user.email !== this.host()));
    this.hide_close = input(false);
    this.custom_title = input("");
    this.close = output();
  }
};
_AttendeeListComponent.\u0275fac = function AttendeeListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendeeListComponent)();
};
_AttendeeListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendeeListComponent, selectors: [["attendee-list"]], inputs: { host: [1, "host"], show_host: [1, "show_host"], list: [1, "list"], hide_close: [1, "hide_close"], custom_title: [1, "custom_title"] }, outputs: { close: "close" }, decls: 10, vars: 9, consts: [[1, "flex", "h-full", "w-full", "flex-col", "overflow-hidden", "bg-base-100"], [1, "flex", "min-h-12", "items-center", "border-b", "border-base-200", "p-2"], ["close", "", "icon", "", "matRipple", ""], [1, "flex-1", "text-center", "font-medium"], [1, "w-12"], [1, "w-full", "flex-1", "overflow-auto"], ["close", "", "icon", "", "matRipple", "", 3, "click"], ["attendee", "", 1, "flex", "items-center", "space-x-2", "p-2", "hover:bg-base-200"], [3, "user"], [1, "w-1/2", "flex-1"], [1, "truncate"], [1, "text-sm", "opacity-60"], [1, "p-2"], [1, "h-3", "w-3", "rounded-full", 3, "matTooltip"]], template: function AttendeeListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, AttendeeListComponent_Conditional_2_Template, 3, 0, "button", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AttendeeListComponent_Conditional_6_Template, 1, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275repeaterCreate(8, AttendeeListComponent_For_9_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_close() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.custom_title() ? ctx.custom_title() : \u0275\u0275pipeBind3(5, 3, "CALENDAR_EVENT.ATTENDEES_COUNT", \u0275\u0275pureFunction1(7, _c02, ctx.final_list().length), ctx.final_list().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_close() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.final_list());
  }
}, dependencies: [
  CommonModule,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  UserAvatarComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var AttendeeListComponent = _AttendeeListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendeeListComponent, [{
    type: Component,
    args: [{ selector: "attendee-list", template: `
        <div class="flex h-full w-full flex-col overflow-hidden bg-base-100">
            <div
                class="flex min-h-12 items-center border-b border-base-200 p-2"
            >
                @if (!hide_close()) {
                    <button close icon matRipple (click)="close.emit()">
                        <icon>arrow_back</icon>
                    </button>
                }
                <div class="flex-1 text-center font-medium">
                    {{
                        custom_title()
                            ? custom_title()
                            : ('CALENDAR_EVENT.ATTENDEES_COUNT'
                              | translate
                                  : { count: final_list().length }
                                  : final_list().length)
                    }}
                </div>
                @if (!hide_close()) {
                    <div class="w-12"></div>
                }
            </div>
            <div class="w-full flex-1 overflow-auto">
                @for (user of final_list(); track user) {
                    @if (
                        !user.resource && (host() !== user.email || show_host())
                    ) {
                        <div
                            attendee
                            class="flex items-center space-x-2 p-2 hover:bg-base-200"
                        >
                            <a-user-avatar [user]="user"></a-user-avatar>
                            <div class="w-1/2 flex-1">
                                <div class="truncate">{{ user.name }}</div>
                                @if (host() === user.email) {
                                    <div class="text-sm opacity-60">
                                        {{ 'FORM.HOST' | translate }}
                                    </div>
                                }
                            </div>
                            <div class="p-2">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-success]="user.checked_in"
                                    [class.bg-pending]="!user.checked_in"
                                    [matTooltip]="
                                        (user.checked_in
                                            ? 'COMMON.CHECKED_IN'
                                            : 'COMMON.CHECKED_IN_NOT'
                                        ) | translate
                                    "
                                ></div>
                            </div>
                        </div>
                    }
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      UserAvatarComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendeeListComponent, { className: "AttendeeListComponent", filePath: "libs/events/src/lib/attendee-list.component.ts", lineNumber: 84 });
})();

// libs/events/src/lib/group-event-details-modal.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c1 = (a0, a1) => ({ going: a0, interested: a1 });
function GroupEventDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", (tmp_3_0 = ctx_r1.event().extension_data) == null ? null : tmp_3_0.images[0]);
  }
}
function GroupEventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 33);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "icon", 36);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
}
function GroupEventDetailsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "icon");
    \u0275\u0275text(8, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-200", !ctx_r1.is_interested())("text-base-content", !ctx_r1.is_interested())("opacity-30", !ctx_r1.is_interested())("bg-success", ctx_r1.is_interested())("text-success-content", ctx_r1.is_interested())("opacity-100", ctx_r1.is_interested());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 26, ctx_r1.is_interested() ? "CALENDAR_EVENT.GROUP_INTERESTED" : "CALENDAR_EVENT.GROUP_NOT_INTERESTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r1.is_going())("text-base-content", !ctx_r1.is_going())("opacity-30", !ctx_r1.is_going())("bg-success", ctx_r1.is_going())("text-success-content", ctx_r1.is_going())("opacity-100", ctx_r1.is_going());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 28, ctx_r1.is_going() ? "CALENDAR_EVENT.GROUP_GOING" : "CALENDAR_EVENT.GROUP_NOT_GOING"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.level().map_id)("features", ctx_r1.features())("styles", ctx_r1.styles());
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.building().display_name || ctx_r1.building().name, ", ", ctx_r1.level().display_name || ctx_r1.level().name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_LOCATION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("underline", ctx_r1.event().meeting_url);
    \u0275\u0275property("href", ctx_r1.event().meeting_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 39)(2, "button", 40);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_107_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewLocation());
    });
    \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_107_Conditional_3_Template, 1, 3, "interactive-map", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275conditionalCreate(5, GroupEventDetailsModalComponent_Conditional_107_Conditional_5_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(6, GroupEventDetailsModalComponent_Conditional_107_Conditional_6_Template, 3, 3, "div", 27);
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275conditionalCreate(8, GroupEventDetailsModalComponent_Conditional_107_Conditional_8_Template, 2, 2, "span");
    \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_107_Conditional_9_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, GroupEventDetailsModalComponent_Conditional_107_Conditional_10_Template, 3, 6, "a", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.showing_map() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.is_onsite() && ctx_r1.has_space() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_onsite() && !ctx_r1.has_space() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.building() && ctx_r1.level() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.building() || !ctx_r1.level() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_online() ? 10 : -1);
  }
}
function GroupEventDetailsModalComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 46);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_108_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_attendees.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 47)(3, "attendee-list", 48);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_108_Template_attendee_list_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("show_host", false)("list", ctx_r1.event().attendees)("host", ctx_r1.event().host)("show_host", false);
  }
}
var _GroupEventDetailsModalComponent = class _GroupEventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef, { optional: true });
    this.edit = this._data?.edit_fn;
    this.remove = this._data?.remove_fn;
    this.space = signal(new Space());
    this.event = model(this._data?.event);
    this.is_limited = signal(!this._data);
    this.concierge = signal(this._data?.concierge);
    this.building = signal(new Building());
    this.level = signal(new BuildingLevel());
    this.features = signal([]);
    this.locate = signal("");
    this.showing_map = signal(false);
    this.show_attendees = signal(false);
    this.styles = signal({});
    this.raw_description = signal("");
    this.calendar_space = signal(new Space());
    this.featured = computed(() => this.event().featured || this.event().extension_data?.featured);
    this.has_space = computed(() => !!this.space().id);
    this.is_onsite = computed(() => this.event().extension_data.attendance_type !== "ONLINE");
    this.is_online = computed(() => !this.is_onsite() || this.event().extension_data.attendance_type === "ANY");
    this.body = computed(() => {
      if (this.is_online())
        return this.event().body;
      let body = this.event().body;
      const remove_blocks = [
        `<div style="margin-bottom:24px; overflow:hidden; white-space:nowrap">________________________________________________________________________________</div>`,
        `<p>________________________________________________________________________________</p>`
      ];
      for (const block of remove_blocks) {
        const first = body.indexOf(block);
        const last = body.lastIndexOf(block);
        body = body.substring(0, first) + body.substring(last);
      }
      for (const block of remove_blocks) {
        body = body.replace(block, "");
      }
      return body;
    });
    this.attendance = computed(() => this.event().attendees?.filter((_) => _.checked_in)?.length || 0);
    this.attendees = computed(() => this.event().attendees?.filter((user) => user.email !== this.group_event_calendar)?.length || 0);
    this.guest_details = computed(() => {
      const user = currentUser();
      return this.event().attendees?.find((_) => _.email === user.email);
    });
    this.is_interested = computed(() => !!this.guest_details());
    this.is_going = computed(() => this.guest_details()?.checked_in);
    this.system_id = computed(() => this.space().id);
  }
  get group_event_calendar() {
    return this._settings.get("app.group_events_calendar") || "";
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar);
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.calendar_space.set(await space_pipe.transform(this.group_event_calendar));
    const map_id = this.event().extension_data?.map_id;
    const id = this.space()?.map_id || map_id;
    if (id) {
      this.styles[`#${id}`] = { fill: "green" };
      this.features.set([
        {
          location: id,
          content: MapPinComponent,
          data: {}
        }
      ]);
    }
    const zones = this.space().zones || [];
    this.level.set(this._org.levelWithID(zones) || this.level());
    this.building.set(this._org.buildings.find((_) => zones.includes(_.id)) || this._org.building);
    this.locate.set(map_id || "");
    this.raw_description.set(this.removeHtmlTags(this.event().body).trim());
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return (doc.body.textContent || "").trim();
  }
  viewLocation() {
    if (!this.space().map_id) {
      return notifyInfo("Unable to locate space on map.");
    }
    this.showing_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: { item: this.space }
    });
    ref.afterClosed().subscribe(() => this.showing_map.set(false));
  }
  async toggleInterest() {
    let user = this.guest_details();
    console.log("System", this.event, this.calendar_space);
    const _user = new GuestUser(currentUser());
    if (this.is_interested() && user) {
      await lastValueFrom(removeEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar
      }));
      this.event.update((e) => {
        e.attendees = (e.attendees || []).filter((_) => _.email !== user.email);
        return e;
      });
    } else {
      user = await lastValueFrom(addEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar
      }));
      this.event.update((e) => {
        e.attendees = unique([...e.attendees || [], user], "email");
        return e;
      });
    }
  }
  async toggleAttendance() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (!user) {
      user = await lastValueFrom(addEventGuest(this.event().id, _user, {
        system_id: this.event().system?.id,
        calendar: this.group_event_calendar
      }));
      this.event.attendees = unique([...this.event().attendees || [], user], "email");
    }
    user = __spreadValues(__spreadValues({}, currentUser()), user || {});
    if (!user.email)
      return;
    await lastValueFrom(checkinEventGuest(this.event().id, user.email, !this.is_going(), {
      system_id: this.event().system?.id
    }));
    const guest = this.event().attendees.find((_) => _.email === user.email);
    if (!guest)
      return;
    guest.checked_in = !this.is_going();
  }
};
_GroupEventDetailsModalComponent.\u0275fac = function GroupEventDetailsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventDetailsModalComponent)();
};
_GroupEventDetailsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventDetailsModalComponent, selectors: [["group-event-details-modal"]], inputs: { event: [1, "event"] }, outputs: { event: "eventChange" }, decls: 109, vars: 74, consts: [["concierge_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "max-h-[80vh]", "w-[48rem]", "max-w-[calc(100vw-1rem)]", "overflow-hidden"], [1, "relative", "flex", "h-52", "w-full", "items-center", "justify-between", "overflow-hidden", "bg-base-200"], ["auth", "", 1, "absolute", "left-1/2", "top-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], [1, "absolute", "left-0", "top-0", "flex", "items-center", "space-x-2", "rounded-br", "bg-info", "py-2", "pl-2", "pr-4", "text-sm", "text-info-content"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "right-1", "top-1", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "border-b", "border-base-200", "px-8", "py-4"], [1, "text-left", "text-xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "w-[2.75rem]", "bg-base-200", "text-base-content", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], ["mat-menu-item", "", 3, "disabled"], [1, "mr-2"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "flex", "max-h-[calc(80vh-18rem)]", "flex-1", "space-x-6", "overflow-y-auto", "overflow-x-hidden", "p-8"], [1, "flex", "w-1/3", "flex-1", "flex-col", "space-y-2"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-base-200"], [1, "pt-4", "font-medium"], [1, "flex", "flex-col"], [1, "text-sm"], [1, "text-sm", "opacity-30"], [1, "flex", "flex-col", "text-sm"], [1, "opacity-30"], ["matRipple", "", 1, "flex", "min-h-12", "items-center", "space-x-4", "rounded", 3, "click"], [1, "pb-4", "text-sm"], ["event-details", "", 3, "innerHTML"], [1, "flex", "w-[20rem]"], [1, "absolute", "inset-0", "z-50"], [1, "text-base"], [1, "uppercase"], [1, "absolute", "inset-0", "z-0", "bg-base-100", "opacity-30"], [1, "z-10"], ["btn", "", 1, "flex", "h-10", "items-center", "space-x-2", "rounded", "px-4"], [1, "pr-2"], [1, "w-full", "border", "border-base-300"], ["matRipple", "", 1, "relative", "h-40", "w-full", "bg-base-200", 3, "click"], [3, "src", "features", "styles"], [1, "space-y-2", "p-4"], [1, "!mt-0", "text-sm", "opacity-30"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "underline", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "href"], [1, "absolute", "inset-0", "bg-base-content", "opacity-60", 3, "click"], [1, "absolute", "inset-y-8", "left-1/2", "w-[24rem]", "-translate-x-1/2", "overflow-hidden", "rounded", "shadow"], [3, "click", "show_host", "list", "host"]], template: function GroupEventDetailsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, GroupEventDetailsModalComponent_Conditional_2_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_3_Template, 6, 3, "div", 5);
    \u0275\u0275conditionalCreate(4, GroupEventDetailsModalComponent_Conditional_4_Template, 4, 0, "button", 6);
    \u0275\u0275elementStart(5, "div", 7)(6, "h3", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_9_Template, 12, 30);
    \u0275\u0275elementStart(10, "button", 10)(11, "icon", 11);
    \u0275\u0275text(12, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-menu", null, 0)(15, "button", 12)(16, "div", 9)(17, "icon", 11);
    \u0275\u0275text(18, " confirmation_number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.edit ? ctx.edit(ctx.event()) : "");
    });
    \u0275\u0275elementStart(23, "div", 9)(24, "icon", 11);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 12)(30, "div", 9)(31, "icon", 11);
    \u0275\u0275text(32, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 13);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 15);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.remove ? ctx.remove(ctx.event(), false) : "");
    });
    \u0275\u0275elementStart(37, "div", 9)(38, "icon", 16);
    \u0275\u0275text(39, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 13);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "mat-menu", null, 1)(45, "button", 17);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleInterest());
    });
    \u0275\u0275elementStart(46, "div", 9)(47, "icon");
    \u0275\u0275text(48, " star ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "button", 15);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleAttendance());
    });
    \u0275\u0275elementStart(53, "div", 9)(54, "icon");
    \u0275\u0275text(55, " help ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(59, "div", 18)(60, "div", 19)(61, "div", 20)(62, "div", 21)(63, "icon");
    \u0275\u0275text(64, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "h3", 22);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 20)(72, "div", 21)(73, "icon");
    \u0275\u0275text(74, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 23)(76, "div", 24);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 25);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "date");
    \u0275\u0275pipe(82, "date");
    \u0275\u0275pipe(83, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 20)(85, "div", 21)(86, "icon");
    \u0275\u0275text(87, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 26);
    \u0275\u0275conditionalCreate(89, GroupEventDetailsModalComponent_Conditional_89_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(90, GroupEventDetailsModalComponent_Conditional_90_Template, 3, 3, "div", 27);
    \u0275\u0275conditionalCreate(91, GroupEventDetailsModalComponent_Conditional_91_Template, 3, 3, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "button", 28);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_attendees.set(!ctx.is_limited() && true));
    });
    \u0275\u0275elementStart(93, "div", 21)(94, "icon");
    \u0275\u0275text(95, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div");
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "h3", 22);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 29);
    \u0275\u0275element(103, "span", 30);
    \u0275\u0275pipe(104, "sanitize");
    \u0275\u0275conditionalCreate(105, GroupEventDetailsModalComponent_Conditional_105_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div");
    \u0275\u0275conditionalCreate(107, GroupEventDetailsModalComponent_Conditional_107_Template, 11, 6, "div", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(108, GroupEventDetailsModalComponent_Conditional_108_Template, 4, 4, "div", 32);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_19_0;
    const concierge_menu_r5 = \u0275\u0275reference(14);
    const menu_r6 = \u0275\u0275reference(44);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx.event().extension_data) == null ? null : tmp_2_0.images == null ? null : tmp_2_0.images.length) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.featured() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.is_limited() ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.event().title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.concierge() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.event().state === "done")("matMenuTriggerFor", ctx.concierge() ? concierge_menu_r5 : menu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "CALENDAR_EVENT.GROUP_PROMOTE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 36, "CALENDAR_EVENT.GROUP_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 38, "CALENDAR_EVENT.GROUP_COPY_URL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 40, "CALENDAR_EVENT.GROUP_DELETE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("text-error", ctx.is_interested());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 42, ctx.is_interested() ? "CALENDAR_EVENT.GROUP_INTEREST_REMOVE" : "CALENDAR_EVENT.GROUP_INTEREST_ADD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-error", ctx.is_going());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 44, ctx.is_going() ? "CALENDAR_EVENT.GROUP_GOING_REMOVE" : "CALENDAR_EVENT.GROUP_GOING_ADD"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 46, "CALENDAR_EVENT.GROUP_HOST", \u0275\u0275pureFunction1(69, _c03, ((tmp_19_0 = ctx.event().organiser) == null ? null : tmp_19_0.name) || ctx.event().host)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 49, "CALENDAR_EVENT.GROUP_WHEN_WHERE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 51, "CALENDAR_EVENT.GROUP_DATE_TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(81, 53, ctx.event().date, "EEEE, d MMMM, yyyy"), " . ", \u0275\u0275pipeBind2(82, 56, ctx.event().date, ctx.time_format), " - ", \u0275\u0275pipeBind2(83, 59, ctx.event().date + ctx.event().duration * 60 * 1e3, ctx.time_format), " ");
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.is_onsite() && ctx.has_space() ? 89 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_onsite() && !ctx.has_space() ? 90 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_online() ? 91 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(98, 62, "CALENDAR_EVENT.GROUP_ATTENDEES", \u0275\u0275pureFunction2(71, _c1, ctx.attendance(), ctx.attendees())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(101, 65, "CALENDAR_EVENT.GROUP_ABOUT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(104, 67, ctx.body()), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.raw_description() ? 105 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.level() ? 107 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_attendees() ? 108 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  AttendeeListComponent,
  InteractiveMapComponent,
  SanitizePipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatDialogModule,
  MatDialogClose,
  AuthenticatedImageDirective
], encapsulation: 2 });
var GroupEventDetailsModalComponent = _GroupEventDetailsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventDetailsModalComponent, [{
    type: Component,
    args: [{ selector: `group-event-details-modal`, template: `
        <div
            class="relative max-h-[80vh] w-[48rem] max-w-[calc(100vw-1rem)] overflow-hidden"
        >
            <div
                class="relative flex h-52 w-full items-center justify-between overflow-hidden bg-base-200"
            >
                @if (event().extension_data?.images?.length) {
                    <img
                        auth
                        [source]="event().extension_data?.images[0]"
                        class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                }
            </div>

            @if (featured()) {
                <div
                    class="absolute left-0 top-0 flex items-center space-x-2 rounded-br bg-info py-2 pl-2 pr-4 text-sm text-info-content"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
            }
            @if (!is_limited()) {
                <button
                    icon
                    mat-dialog-close
                    class="absolute right-1 top-1 overflow-hidden"
                >
                    <div
                        class="absolute inset-0 z-0 bg-base-100 opacity-30"
                    ></div>
                    <icon class="z-10">close</icon>
                </button>
            }
            <div
                class="flex items-center justify-between border-b border-base-200 px-8 py-4"
            >
                <h3 class="text-left text-xl">
                    {{ event().title }}
                </h3>
                <div class="flex items-center space-x-2">
                    @if (!concierge()) {
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded px-4"
                            [class.bg-base-200]="!is_interested()"
                            [class.text-base-content]="!is_interested()"
                            [class.opacity-30]="!is_interested()"
                            [class.bg-success]="is_interested()"
                            [class.text-success-content]="is_interested()"
                            [class.opacity-100]="is_interested()"
                        >
                            <icon>star</icon>
                            <div class="pr-2">
                                {{
                                    (is_interested()
                                        ? 'CALENDAR_EVENT.GROUP_INTERESTED'
                                        : 'CALENDAR_EVENT.GROUP_NOT_INTERESTED'
                                    ) | translate
                                }}
                            </div>
                        </div>
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded px-4"
                            [class.bg-base-200]="!is_going()"
                            [class.text-base-content]="!is_going()"
                            [class.opacity-30]="!is_going()"
                            [class.bg-success]="is_going()"
                            [class.text-success-content]="is_going()"
                            [class.opacity-100]="is_going()"
                        >
                            <icon>help</icon>
                            <div class="pr-2">
                                {{
                                    (is_going()
                                        ? 'CALENDAR_EVENT.GROUP_GOING'
                                        : 'CALENDAR_EVENT.GROUP_NOT_GOING'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    }
                    <button
                        btn
                        matRipple
                        class="clear w-[2.75rem] bg-base-200 text-base-content"
                        [disabled]="event().state === 'done'"
                        [matMenuTriggerFor]="
                            concierge() ? concierge_menu : menu
                        "
                    >
                        <icon class="text-2xl">more_horiz</icon>
                    </button>
                    <mat-menu #concierge_menu="matMenu">
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    confirmation_number
                                </icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_PROMOTE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="edit ? edit(event()) : ''"
                            mat-dialog-close
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">edit</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_EDIT' | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">content_copy</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_COPY_URL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="remove ? remove(event(), false) : ''"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl text-error">
                                    delete
                                </icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_DELETE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                            (click)="toggleInterest()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_interested()">
                                    star
                                </icon>
                                <span>
                                    {{
                                        (is_interested()
                                            ? 'CALENDAR_EVENT.GROUP_INTEREST_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_INTEREST_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="toggleAttendance()">
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_going()">
                                    help
                                </icon>
                                <span>
                                    {{
                                        (is_going()
                                            ? 'CALENDAR_EVENT.GROUP_GOING_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_GOING_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </div>
            <div
                class="flex max-h-[calc(80vh-18rem)] flex-1 space-x-6 overflow-y-auto overflow-x-hidden p-8"
            >
                <div class="flex w-1/3 flex-1 flex-col space-y-2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_HOST'
                                    | translate
                                        : {
                                              name:
                                                  event().organiser?.name ||
                                                  event().host,
                                          }
                            }}
                        </div>
                    </div>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_WHEN_WHERE' | translate }}
                    </h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>calendar_today</icon>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm">
                                {{
                                    'CALENDAR_EVENT.GROUP_DATE_TIME' | translate
                                }}
                            </div>
                            <div class="text-sm opacity-30">
                                {{ event().date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ event().date | date: time_format }} -
                                {{
                                    event().date + event().duration * 60 * 1000
                                        | date: time_format
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex flex-col text-sm">
                            @if (is_onsite() && has_space()) {
                                <div>
                                    {{ space().display_name }}
                                </div>
                            }
                            @if (is_onsite() && !has_space()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (is_online()) {
                                <div class="opacity-30">
                                    {{
                                        (is_onsite()
                                            ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                            : 'CALENDAR_EVENT.GROUP_REMOTE'
                                        ) | translate
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <button
                        matRipple
                        (click)="show_attendees.set(!is_limited() && true)"
                        class="flex min-h-12 items-center space-x-4 rounded"
                    >
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDEES'
                                    | translate
                                        : {
                                              going: attendance(),
                                              interested: attendees(),
                                          }
                            }}
                        </div>
                    </button>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_ABOUT' | translate }}
                    </h3>
                    <div class="pb-4 text-sm">
                        <span
                            event-details
                            [innerHTML]="body() | sanitize"
                        ></span>
                        @if (!raw_description()) {
                            <span class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </span>
                        }
                    </div>
                </div>
                <div>
                    @if (level()) {
                        <div class="flex w-[20rem]">
                            <div class="w-full border border-base-300">
                                <button
                                    matRipple
                                    class="relative h-40 w-full bg-base-200"
                                    (click)="viewLocation()"
                                >
                                    @if (!showing_map()) {
                                        <interactive-map
                                            [src]="level().map_id"
                                            [features]="features()"
                                            [styles]="styles()"
                                        ></interactive-map>
                                    }
                                </button>
                                <div class="space-y-2 p-4">
                                    @if (is_onsite() && has_space()) {
                                        <div>
                                            {{ space().display_name }}
                                        </div>
                                    }
                                    @if (is_onsite() && !has_space()) {
                                        <div class="opacity-30">
                                            {{
                                                'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                    <div class="!mt-0 text-sm opacity-30">
                                        @if (building() && level()) {
                                            <span>
                                                {{
                                                    building().display_name ||
                                                        building().name
                                                }},
                                                {{
                                                    level().display_name ||
                                                        level().name
                                                }}
                                            </span>
                                        }
                                        @if (!building() || !level()) {
                                            <span class="opacity-30">
                                                {{
                                                    'CALENDAR_EVENT.GROUP_NO_LOCATION'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    @if (is_online()) {
                                        <a
                                            class="mt-4 opacity-30"
                                            [class.underline]="
                                                event().meeting_url
                                            "
                                            [href]="event().meeting_url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{
                                                (is_onsite()
                                                    ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                                    : 'CALENDAR_EVENT.GROUP_REMOTE'
                                                ) | translate
                                            }}
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (show_attendees()) {
            <div class="absolute inset-0 z-50">
                <button
                    class="absolute inset-0 bg-base-content opacity-60"
                    (click)="show_attendees.set(false)"
                ></button>
                <div
                    class="absolute inset-y-8 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded shadow"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="event().attendees"
                        [host]="event().host"
                        [show_host]="false"
                        (click)="show_attendees.set(false)"
                    ></attendee-list>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      AttendeeListComponent,
      InteractiveMapComponent,
      SanitizePipe,
      MatMenuModule,
      MatDialogModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventDetailsModalComponent, { className: "GroupEventDetailsModalComponent", filePath: "libs/events/src/lib/group-event-details-modal.component.ts", lineNumber: 471 });
})();

export {
  MatBottomSheetRef,
  MatBottomSheet,
  MatBottomSheetModule,
  StatusPillComponent,
  AttendeeListComponent,
  GroupEventDetailsModalComponent
};
//# sourceMappingURL=chunk-OEAJ52HN.js.map
