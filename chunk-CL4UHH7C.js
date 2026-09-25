import {
  SpacePipe
} from "./chunk-TEJQBDR7.js";
import {
  $a,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  CdkDialogContainer,
  CdkPortalOutlet,
  Dialog,
  DialogModule,
  ESCAPE,
  OrganisationService,
  PortalModule,
  SettingsService,
  Space,
  _animationsDisabled,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  flatten,
  hasModifierKey,
  unique,
  va
} from "./chunk-XVLJS4JE.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  Service,
  Subject,
  ViewEncapsulation,
  computed,
  effect,
  filter,
  inject,
  merge,
  setClassMetadata,
  signal,
  take,
  ɵɵInheritDefinitionFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵlistener,
  ɵɵtemplate
} from "./chunk-RKFYMMSC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {
}
var ENTER_ANIMATION = "_mat-bottom-sheet-enter";
var EXIT_ANIMATION = "_mat-bottom-sheet-exit";
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
  _breakpointSubscription;
  _animationsDisabled = _animationsDisabled();
  _animationState = "void";
  _animationStateChanged = new EventEmitter();
  _destroyed = false;
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
      this._handleAnimationEvent(true, name, this._elementRef.nativeElement);
      setTimeout(() => this._handleAnimationEvent(false, name, this._elementRef.nativeElement));
    });
  }
  _trapFocus() {
    super._trapFocus({
      preventScroll: true
    });
  }
  _handleAnimationEvent(isStart, animationName, target) {
    if (target === this._elementRef.nativeElement) {
      const isEnter = animationName === ENTER_ANIMATION;
      const isExit = animationName === EXIT_ANIMATION;
      if (isEnter || isExit) {
        this._animationStateChanged.emit({
          toState: isEnter ? "visible" : "hidden",
          phase: isStart ? "start" : "done"
        });
      }
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
          return ctx._handleAnimationEvent(true, $event.animationName, $event.target);
        })("animationend", function MatBottomSheetContainer_animationend_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName, $event.target);
        })("animationcancel", function MatBottomSheetContainer_animationcancel_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName, $event.target);
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
    styles: ["@keyframes _mat-bottom-sheet-enter {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes _mat-bottom-sheet-exit {\n  from {\n    transform: none;\n  }\n  to {\n    transform: translateY(100%);\n  }\n}\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  padding: 8px 16px;\n  min-width: 100vw;\n  box-sizing: border-box;\n  display: block;\n  outline: 0;\n  max-height: 80vh;\n  overflow: auto;\n  position: relative;\n  background: var(--%NS%mat-bottom-sheet-container-background-color, var(--%NS%mat-sys-surface-container-low));\n  color: var(--%NS%mat-bottom-sheet-container-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-bottom-sheet-container-text-font, var(--%NS%mat-sys-body-large-font));\n  font-size: var(--%NS%mat-bottom-sheet-container-text-size, var(--%NS%mat-sys-body-large-size));\n  line-height: var(--%NS%mat-bottom-sheet-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));\n  font-weight: var(--%NS%mat-bottom-sheet-container-text-weight, var(--%NS%mat-sys-body-large-weight));\n  letter-spacing: var(--%NS%mat-bottom-sheet-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));\n}\n@media (forced-colors: active) {\n  .mat-bottom-sheet-container {\n    outline: 1px solid;\n  }\n}\n\n.mat-bottom-sheet-container-animations-enabled {\n  transform: translateY(100%);\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {\n  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {\n  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;\n}\n\n.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {\n  border-top-left-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);\n  border-top-right-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);\n}\n\n.mat-bottom-sheet-container-medium {\n  min-width: 384px;\n  max-width: calc(100vw - 128px);\n}\n\n.mat-bottom-sheet-container-large {\n  min-width: 512px;\n  max-width: calc(100vw - 256px);\n}\n\n.mat-bottom-sheet-container-xlarge {\n  min-width: 576px;\n  max-width: calc(100vw - 384px);\n}\n"],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetContainer, [{
    type: Component,
    args: [{
      selector: "mat-bottom-sheet-container",
      changeDetection: ChangeDetectionStrategy.Eager,
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
        "(animationstart)": "_handleAnimationEvent(true, $event.animationName, $event.target)",
        "(animationend)": "_handleAnimationEvent(false, $event.animationName, $event.target)",
        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName, $event.target)"
      },
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: ["@keyframes _mat-bottom-sheet-enter {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes _mat-bottom-sheet-exit {\n  from {\n    transform: none;\n  }\n  to {\n    transform: translateY(100%);\n  }\n}\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  padding: 8px 16px;\n  min-width: 100vw;\n  box-sizing: border-box;\n  display: block;\n  outline: 0;\n  max-height: 80vh;\n  overflow: auto;\n  position: relative;\n  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));\n  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));\n  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));\n  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));\n}\n@media (forced-colors: active) {\n  .mat-bottom-sheet-container {\n    outline: 1px solid;\n  }\n}\n\n.mat-bottom-sheet-container-animations-enabled {\n  transform: translateY(100%);\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {\n  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {\n  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;\n}\n\n.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {\n  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);\n  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);\n}\n\n.mat-bottom-sheet-container-medium {\n  min-width: 384px;\n  max-width: calc(100vw - 128px);\n}\n\n.mat-bottom-sheet-container-large {\n  min-width: 512px;\n  max-width: calc(100vw - 256px);\n}\n\n.mat-bottom-sheet-container-xlarge {\n  min-width: 576px;\n  max-width: calc(100vw - 384px);\n}\n"]
    }]
  }], () => [], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
  viewContainerRef;
  injector;
  panelClass;
  direction;
  data = null;
  hasBackdrop = true;
  backdropClass;
  disableClose = false;
  ariaLabel = null;
  ariaModal = false;
  closeOnNavigation = true;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  scrollStrategy;
  height = "";
  minHeight;
  maxHeight;
  bindings;
};
var MatBottomSheetRef = class {
  _ref;
  get instance() {
    return this._ref.componentInstance;
  }
  get componentRef() {
    return this._ref.componentRef;
  }
  containerInstance;
  disableClose;
  _afterOpened = new Subject();
  _result;
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
  afterDismissed() {
    return this._ref.closed;
  }
  afterOpened() {
    return this._afterOpened;
  }
  backdropClick() {
    return this._ref.backdropClick;
  }
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
  open(componentOrTemplateRef, config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
    let ref;
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      disableClose: true,
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
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatBottomSheet,
    factory: _MatBottomSheet.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheet, [{
    type: Service
  }], null, null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
  static \u0275fac = function MatBottomSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatBottomSheetModule,
    imports: [DialogModule, PortalModule, MatBottomSheetContainer],
    exports: [MatBottomSheetContainer, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatBottomSheet],
    imports: [DialogModule, PortalModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, PortalModule, MatBottomSheetContainer],
      exports: [MatBottomSheetContainer, BidiModule],
      providers: [MatBottomSheet]
    }]
  }], null, null);
})();

// libs/events/src/lib/spaces.service.ts
var SPACE_PIPE;
var SpacesService = class _SpacesService {
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
      () => unique(flatten(this.list().map((i) => i.features))),
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
    const system = await va(space_id);
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
    const systems = (await $a({
      zone_id: this._org.organisation.id,
      limit: 5e3
    })).data;
    const space_list = systems.map((sys) => new Space(__spreadProps(__spreadValues({}, sys), {
      level: this._org.levelWithID([...sys.zones])
    })));
    this._all_spaces.set(space_list);
    SPACE_PIPE.updateSpaceList(this.space_list);
    this._initialised.set(true);
  }
  static {
    this.\u0275fac = function SpacesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpacesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpacesService, factory: _SpacesService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
  MatBottomSheet,
  MatBottomSheetModule,
  SpacesService
};
//# debugId=55d98ef2-b2eb-5374-bb1a-9abf9f6f60bc
//# sourceMappingURL=chunk-CL4UHH7C.js.map
