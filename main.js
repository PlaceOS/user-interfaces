import {
  MatInput,
  MatInputModule
} from "./chunk-FN2NPPHY.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-4TVIGNIH.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-KW34JLIM.js";
import {
  setInternalUserDomain
} from "./chunk-BSIC25KF.js";
import "./chunk-GGWN2GHB.js";
import {
  TranslatePipe
} from "./chunk-7RFEFXNS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QAIZNU2H.js";
import {
  AsyncHandler,
  BidiModule,
  DefaultValueAccessor,
  En,
  FormsModule,
  GroupPermission,
  HotkeysService,
  IconComponent,
  J,
  LocaleService,
  MatRipple,
  MatRippleModule,
  MatSnackBar,
  MatSnackBarModule,
  Mt,
  NativeDateModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  PlaceOS_Service,
  RequiredValidator,
  Rn,
  SettingsService,
  SwUpdate,
  UploadsService,
  Xr,
  Zr,
  _getAnimationsState,
  autoConfirmNativeDomain,
  current_user,
  eo,
  failInitialisation,
  firstTruthyValueFrom,
  firstValueWhere,
  getLoadingMessage,
  getNativeApiKey,
  getNativeDomain,
  getNativeEmail,
  hasPermission,
  initialisationComplete,
  initialisationFailure,
  log,
  lookupNativeDomainByEmail,
  markInitialisationComplete,
  nativeDomainError,
  needsNativeDomain,
  normaliseNativeDomain,
  provideServiceWorker,
  retryInitialisation,
  serviceWorkerUpdate,
  setAppName,
  setDefaultCreator,
  setNativeApiKey,
  setNativeDomain,
  setNativeEmail,
  setNotifyOutlet,
  setTranslationService,
  setupCache,
  setupPlace,
  userSignal,
  user_groups_loaded,
  withTimeout,
  yi,
  ɵNgNoValidate
} from "./chunk-F2KCMQDL.js";
import {
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Router,
  RouterLink,
  RouterOutlet,
  ViewChild,
  ViewEncapsulation,
  bootstrapApplication,
  computed,
  effect,
  enableProdMode,
  forwardRef,
  importProvidersFrom,
  inject,
  input,
  numberAttribute,
  output,
  provideHttpClient,
  provideRouter,
  provideZonelessChangeDetection,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  untracked,
  viewChild,
  withHashLocation,
  withInterceptorsFromDi,
  withXhr,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefer,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-E52RJLI7.js";
import "./chunk-653SOEEV.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar {\n  --%NS%mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --%NS%mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));\n  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--%NS%mat-progress-bar-track-height, 4px);\n  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();

// libs/components/src/lib/native-domain-overlay.component.ts
function NativeDomainOverlayComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter the address of your PlaceOS server to connect this app. ");
  }
}
function NativeDomainOverlayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter your work email to find your PlaceOS server and connect this app. ");
  }
}
function NativeDomainOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function NativeDomainOverlayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Settings provided by your administrator will be applied automatically in ", ctx_r0.auto_accept_in(), "s. ");
  }
}
function NativeDomainOverlayComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 12);
    \u0275\u0275text(2, "Server Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "icon", 14);
    \u0275\u0275text(5, "dns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.server_address, $event) || (ctx_r0.server_address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "label", 16);
    \u0275\u0275text(9, "API Key (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 13)(11, "icon", 14);
    \u0275\u0275text(12, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_11_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.api_key, $event) || (ctx_r0.api_key = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 18);
    \u0275\u0275text(15, " When set, the app authenticates with this key instead of asking you to sign in. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.server_address);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.api_key);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
  }
}
function NativeDomainOverlayComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 19);
    \u0275\u0275text(2, "Work Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "icon", 14);
    \u0275\u0275text(5, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_12_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
  }
}
function NativeDomainOverlayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Find my server using my work email ");
  }
}
function NativeDomainOverlayComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a server address manually ");
  }
}
var AUTO_ACCEPT_SECONDS = 15;
var NativeDomainOverlayComponent = class _NativeDomainOverlayComponent {
  constructor() {
    this.serverError = input(
      "",
      ...ngDevMode ? [{ debugName: "serverError" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.autoAccept = input(
      false,
      ...ngDevMode ? [{ debugName: "autoAccept" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.domainSet = output();
    this.email = signal(
      getNativeEmail() ?? "",
      ...ngDevMode ? [{ debugName: "email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.server_address = signal(
      getNativeDomain() ?? "",
      ...ngDevMode ? [{ debugName: "server_address" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.api_key = signal(
      getNativeApiKey() ?? "",
      ...ngDevMode ? [{ debugName: "api_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manual_entry = signal(
      !!getNativeDomain(),
      ...ngDevMode ? [{ debugName: "manual_entry" }] : (
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
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_accept_in = signal(
      0,
      ...ngDevMode ? [{ debugName: "auto_accept_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._auto_accept_timer = null;
    effect(() => {
      const msg = this.serverError();
      if (msg) {
        this.error.set(msg);
        untracked(() => this.stopAutoAccept());
      }
    });
    effect(() => {
      if (this.autoAccept() && untracked(this.server_address)) {
        untracked(() => this.startAutoAccept());
      }
    });
  }
  ngOnDestroy() {
    this.stopAutoAccept();
  }
  /** Restart the inactivity countdown — any user activity delays it. */
  resetAutoAccept() {
    if (!this._auto_accept_timer)
      return;
    this.auto_accept_in.set(AUTO_ACCEPT_SECONDS);
  }
  startAutoAccept() {
    this.auto_accept_in.set(AUTO_ACCEPT_SECONDS);
    if (this._auto_accept_timer)
      return;
    this._auto_accept_timer = setInterval(() => {
      const remaining = this.auto_accept_in() - 1;
      this.auto_accept_in.set(remaining);
      if (remaining > 0)
        return;
      this.stopAutoAccept();
      this.submit();
    }, 1e3);
  }
  stopAutoAccept() {
    if (this._auto_accept_timer)
      clearInterval(this._auto_accept_timer);
    this._auto_accept_timer = null;
    this.auto_accept_in.set(0);
  }
  toggleManualEntry() {
    if (this.loading())
      return;
    this.manual_entry.update((manual) => !manual);
    this.error.set("");
  }
  async submit() {
    if (this.loading())
      return;
    this.stopAutoAccept();
    if (this.manual_entry())
      return this.submitManual();
    const raw = this.email().trim();
    if (!raw) {
      this.error.set("A work email is required.");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    try {
      const domain = await lookupNativeDomainByEmail(raw);
      setNativeEmail(raw);
      setNativeDomain(domain);
      setNativeApiKey("");
      this.domainSet.emit(domain);
    } catch {
      this.error.set("Unable to find a server for this email address.");
    } finally {
      this.loading.set(false);
    }
  }
  submitManual() {
    const domain = normaliseNativeDomain(this.server_address());
    if (!domain) {
      this.error.set("A valid server address is required.");
      return;
    }
    this.error.set("");
    setNativeDomain(domain);
    setNativeApiKey(this.api_key());
    this.domainSet.emit(domain);
  }
  static {
    this.\u0275fac = function NativeDomainOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDomainOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NativeDomainOverlayComponent, selectors: [["native-domain-overlay"]], hostBindings: function NativeDomainOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("pointerdown", function NativeDomainOverlayComponent_pointerdown_HostBindingHandler() {
          return ctx.resetAutoAccept();
        }, \u0275\u0275resolveWindow)("keydown", function NativeDomainOverlayComponent_keydown_HostBindingHandler() {
          return ctx.resetAutoAccept();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { serverError: [1, "serverError"], autoAccept: [1, "autoAccept"] }, outputs: { domainSet: "domainSet" }, decls: 19, vars: 8, consts: [[1, "bg-base-200", "pointer-events-auto", "fixed", "inset-0", "z-9999", "flex", "items-center", "justify-center", "p-4"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "max-w-md", "flex-col", "rounded-sm", "border", "shadow-sm", 3, "ngSubmit"], [1, "bg-base-200", "m-2", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "flex-col", "space-y-4", "p-4"], [1, "text-sm", "opacity-60"], [1, "bg-error/10", "text-error", "rounded-sm", "px-3", "py-2", "text-xs"], [1, "bg-info/10", "text-info", "rounded-sm", "px-3", "py-2", "text-xs"], [1, "flex", "w-full", "flex-col"], ["type", "button", 1, "self-start", "text-sm", "underline", "opacity-60", 3, "click", "disabled"], [1, "bg-base-200", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "type", "submit", 1, "flex-1", 3, "disabled"], ["for", "server-address"], ["appearance", "outline", 1, "w-full"], ["matPrefix", ""], ["matInput", "", "name", "server-address", "placeholder", "placeos.company.com", "type", "text", "autocapitalize", "off", "autocomplete", "url", "spellcheck", "false", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "api-key"], ["matInput", "", "name", "api-key", "placeholder", "Leave empty to sign in", "type", "password", "autocapitalize", "off", "autocomplete", "off", "spellcheck", "false", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-xs", "opacity-60"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "name@company.com", "type", "email", "autocapitalize", "off", "autocomplete", "email", "spellcheck", "false", "required", "", 3, "ngModelChange", "ngModel", "disabled"]], template: function NativeDomainOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function NativeDomainOverlayComponent_Template_form_ngSubmit_1_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(2, "header", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Connect to Server");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "main", 4)(6, "p", 5);
        \u0275\u0275conditionalCreate(7, NativeDomainOverlayComponent_Conditional_7_Template, 1, 0)(8, NativeDomainOverlayComponent_Conditional_8_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, NativeDomainOverlayComponent_Conditional_9_Template, 2, 1, "p", 6);
        \u0275\u0275conditionalCreate(10, NativeDomainOverlayComponent_Conditional_10_Template, 2, 1, "p", 7);
        \u0275\u0275conditionalCreate(11, NativeDomainOverlayComponent_Conditional_11_Template, 16, 4)(12, NativeDomainOverlayComponent_Conditional_12_Template, 7, 2, "div", 8);
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function NativeDomainOverlayComponent_Template_button_click_13_listener() {
          return ctx.toggleManualEntry();
        });
        \u0275\u0275conditionalCreate(14, NativeDomainOverlayComponent_Conditional_14_Template, 1, 0)(15, NativeDomainOverlayComponent_Conditional_15_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "footer", 10)(17, "button", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.manual_entry() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.auto_accept_in() > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.manual_entry() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.manual_entry() ? 14 : 15);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Looking up..." : "Connect", " ");
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDomainOverlayComponent, [{
    type: Component,
    args: [{
      selector: "native-domain-overlay",
      template: `
        <div
            class="bg-base-200 pointer-events-auto fixed inset-0 z-9999 flex items-center justify-center p-4"
        >
            <form
                class="border-base-300 bg-base-100 flex w-full max-w-md flex-col rounded-sm border shadow-sm"
                (ngSubmit)="submit()"
            >
                <header class="bg-base-200 m-2 rounded-sm border-none p-2">
                    <h2 class="px-2 text-xl font-medium">Connect to Server</h2>
                </header>
                <main class="flex flex-col space-y-4 p-4">
                    <p class="text-sm opacity-60">
                        @if (manual_entry()) {
                            Enter the address of your PlaceOS server to connect
                            this app.
                        } @else {
                            Enter your work email to find your PlaceOS server
                            and connect this app.
                        }
                    </p>
                    @if (error()) {
                        <p
                            class="bg-error/10 text-error rounded-sm px-3 py-2 text-xs"
                        >
                            {{ error() }}
                        </p>
                    }
                    @if (auto_accept_in() > 0) {
                        <p
                            class="bg-info/10 text-info rounded-sm px-3 py-2 text-xs"
                        >
                            Settings provided by your administrator will be
                            applied automatically in {{ auto_accept_in() }}s.
                        </p>
                    }
                    @if (manual_entry()) {
                        <div class="flex w-full flex-col">
                            <label for="server-address">Server Address</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>dns</icon>
                                <input
                                    matInput
                                    name="server-address"
                                    [(ngModel)]="server_address"
                                    placeholder="placeos.company.com"
                                    type="text"
                                    autocapitalize="off"
                                    autocomplete="url"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex w-full flex-col">
                            <label for="api-key">API Key (optional)</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>key</icon>
                                <input
                                    matInput
                                    name="api-key"
                                    [(ngModel)]="api_key"
                                    placeholder="Leave empty to sign in"
                                    type="password"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                            <p class="text-xs opacity-60">
                                When set, the app authenticates with this key
                                instead of asking you to sign in.
                            </p>
                        </div>
                    } @else {
                        <div class="flex w-full flex-col">
                            <label for="email">Work Email</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>mail</icon>
                                <input
                                    matInput
                                    name="email"
                                    [(ngModel)]="email"
                                    placeholder="name@company.com"
                                    type="email"
                                    autocapitalize="off"
                                    autocomplete="email"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <button
                        type="button"
                        class="self-start text-sm underline opacity-60"
                        [disabled]="loading()"
                        (click)="toggleManualEntry()"
                    >
                        @if (manual_entry()) {
                            Find my server using my work email
                        } @else {
                            Enter a server address manually
                        }
                    </button>
                </main>
                <footer
                    class="bg-base-200 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
                >
                    <button
                        btn
                        matRipple
                        type="submit"
                        class="flex-1"
                        [disabled]="loading()"
                    >
                        {{ loading() ? 'Looking up...' : 'Connect' }}
                    </button>
                </footer>
            </form>
        </div>
    `,
      imports: [
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule
      ],
      host: {
        "(window:pointerdown)": "resetAutoAccept()",
        "(window:keydown)": "resetAutoAccept()"
      }
    }]
  }], () => [], { serverError: [{ type: Input, args: [{ isSignal: true, alias: "serverError", required: false }] }], autoAccept: [{ type: Input, args: [{ isSignal: true, alias: "autoAccept", required: false }] }], domainSet: [{ type: Output, args: ["domainSet"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NativeDomainOverlayComponent, { className: "NativeDomainOverlayComponent", filePath: "libs/components/src/lib/native-domain-overlay.component.ts", lineNumber: 169 });
})();

// libs/components/src/lib/service-worker-update-card.component.ts
function ServiceWorkerUpdateCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function ServiceWorkerUpdateCardComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reloadApp());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "refresh");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const update_state_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", update_state_r3.message || "Update available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", update_state_r3.details || "Refresh the page to get the new version of the application", " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", update_state_r3.action || "Reload App");
  }
}
var ServiceWorkerUpdateCardComponent = class _ServiceWorkerUpdateCardComponent {
  constructor() {
    this.update = serviceWorkerUpdate();
  }
  reloadApp() {
    location.reload();
  }
  static {
    this.\u0275fac = function ServiceWorkerUpdateCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceWorkerUpdateCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceWorkerUpdateCardComponent, selectors: [["placeos-service-worker-update-card"]], decls: 1, vars: 1, consts: [["role", "status", "aria-live", "assertive", 1, "border-base-300", "bg-base-100", "text-base-content", "pointer-events-auto", "fixed", "right-4", "bottom-4", "z-9999", "flex", "w-[20rem]", "max-w-[calc(100vw-2rem)]", "items-center", "gap-3", "rounded-lg", "border", "p-4", "shadow-xl"], [1, "min-w-0", "flex-1"], [1, "m-0", "text-sm", "leading-tight", "font-medium"], [1, "m-0", "mt-1", "text-xs", "opacity-70"], ["icon", "", "default", "", 3, "click", "matTooltip"]], template: function ServiceWorkerUpdateCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ServiceWorkerUpdateCardComponent_Conditional_0_Template, 9, 3, "aside", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.update()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [IconComponent, MatTooltipModule, MatTooltip], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerUpdateCardComponent, [{
    type: Component,
    args: [{
      selector: "placeos-service-worker-update-card",
      template: `
        @if (update(); as update_state) {
            <aside
                role="status"
                aria-live="assertive"
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto fixed right-4 bottom-4 z-9999 flex w-[20rem] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-xl"
            >
                <div class="min-w-0 flex-1">
                    <h2 class="m-0 text-sm leading-tight font-medium">
                        {{ update_state.message || 'Update available' }}
                    </h2>
                    <p class="m-0 mt-1 text-xs opacity-70">
                        {{
                            update_state.details ||
                                'Refresh the page to get the new version of the application'
                        }}
                    </p>
                </div>
                <button
                    icon
                    default
                    [matTooltip]="update_state.action || 'Reload App'"
                    (click)="reloadApp()"
                >
                    <icon>refresh</icon>
                </button>
            </aside>
        }
    `,
      imports: [IconComponent, MatTooltipModule]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceWorkerUpdateCardComponent, { className: "ServiceWorkerUpdateCardComponent", filePath: "libs/components/src/lib/service-worker-update-card.component.ts", lineNumber: 40 });
})();

// libs/components/src/lib/global-loading.component.ts
function GlobalLoadingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "native-domain-overlay", 3);
    \u0275\u0275listener("domainSet", function GlobalLoadingComponent_Conditional_0_Template_native_domain_overlay_domainSet_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDomainSet());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("serverError", ctx_r1.domain_error())("autoAccept", ctx_r1.auto_confirm());
  }
}
function GlobalLoadingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SERVER_DOWN"), " ");
  }
}
function GlobalLoadingComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function GlobalLoadingComponent_Conditional_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(4, " Try again ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.initialisation_error(), " ");
  }
}
function GlobalLoadingComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "mat-progress-bar", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message());
  }
}
function GlobalLoadingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_2_Conditional_1_Template, 5, 1, "div", 4)(2, GlobalLoadingComponent_Conditional_2_Conditional_2_Template, 5, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.initialisation_error() ? 1 : 2);
  }
}
var GlobalLoadingComponent = class _GlobalLoadingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._placeos = inject(PlaceOS_Service);
    this.online = signal(
      true,
      ...ngDevMode ? [{ debugName: "online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.connection_checked = signal(
      false,
      ...ngDevMode ? [{ debugName: "connection_checked" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = getLoadingMessage();
    this.show_domain_overlay = needsNativeDomain();
    this.domain_error = nativeDomainError();
    this.auto_confirm = autoConfirmNativeDomain();
    this.initialisation_error = initialisationFailure();
    this.initialisation_complete = initialisationComplete();
    this.loading = computed(
      () => !this.initialisation_complete(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  retry() {
    retryInitialisation();
  }
  onDomainSet() {
    this._placeos.onNativeDomainSet();
  }
  ngOnInit() {
    const update_online = () => {
      this.online.set(Xr());
      if (this.online()) {
        this.connection_checked.set(true);
        this.clearTimeout("initial-connection");
      }
    };
    this.timeout("initial-connection", () => {
      update_online();
      this.connection_checked.set(true);
    }, 5e3);
    update_online();
    this.interval("online", update_online, 1e3);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275GlobalLoadingComponent_BaseFactory;
      return function GlobalLoadingComponent_Factory(__ngFactoryType__) {
        return (\u0275GlobalLoadingComponent_BaseFactory || (\u0275GlobalLoadingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GlobalLoadingComponent)))(__ngFactoryType__ || _GlobalLoadingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLoadingComponent, selectors: [["global-loading"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 3, consts: [[3, "serverError", "autoAccept"], [1, "bg-error", "fixed", "top-2", "left-1/2", "z-9999", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white", "shadow-sm"], ["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "flex-col", "items-center", "justify-end", "space-y-2", "p-4"], [3, "domainSet", "serverError", "autoAccept"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-4", "text-center", "text-xs", "shadow-sm"], ["initialisation-error", ""], ["type", "button", 1, "bg-primary", "text-primary-content", "mt-3", "rounded", "px-4", "py-2", 3, "click"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-2", "text-center", "text-xs", "shadow-sm"], [1, "text-center", "font-mono"], [1, "border-base-300", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "overflow-hidden", "rounded-full", "border", "shadow-sm"], ["mode", "indeterminate", 1, "scale-150", "rounded-sm"]], template: function GlobalLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GlobalLoadingComponent_Conditional_0_Template, 1, 2, "native-domain-overlay", 0);
        \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_1_Template, 3, 3, "div", 1);
        \u0275\u0275conditionalCreate(2, GlobalLoadingComponent_Conditional_2_Template, 3, 1, "div", 2);
        \u0275\u0275element(3, "placeos-service-worker-update-card");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show_domain_overlay() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.connection_checked() && !ctx.online() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() || ctx.initialisation_error() ? 2 : -1);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      NativeDomainOverlayComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f15b55 0%,\n      #f68c50 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalLoadingComponent, [{
    type: Component,
    args: [{ selector: "global-loading", template: `
        @if (show_domain_overlay()) {
            <native-domain-overlay
                [serverError]="domain_error()"
                [autoAccept]="auto_confirm()"
                (domainSet)="onDomainSet()"
            ></native-domain-overlay>
        }
        @if (connection_checked() && !online()) {
            <div
                class="bg-error fixed top-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs text-white shadow-sm"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (loading() || initialisation_error()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex flex-col items-center justify-end space-y-2 p-4"
            >
                @if (initialisation_error()) {
                    <div
                        class="border-base-300 bg-base-100 w-[24rem] max-w-[calc(100vw-2rem)] rounded-lg border p-4 text-center text-xs shadow-sm"
                    >
                        <p initialisation-error>
                            {{ initialisation_error() }}
                        </p>
                        <button
                            type="button"
                            class="bg-primary text-primary-content mt-3 rounded px-4 py-2"
                            (click)="retry()"
                        >
                            Try again
                        </button>
                    </div>
                } @else {
                    <div
                        class="border-base-300 bg-base-100 w-[24rem] max-w-[calc(100vw-2rem)] rounded-lg border p-2 text-center text-xs shadow-sm"
                    >
                        <p class="text-center font-mono">{{ message() }}</p>
                    </div>
                    <div
                        class="border-base-300 w-[24rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-full border shadow-sm"
                    >
                        <mat-progress-bar
                            mode="indeterminate"
                            class="scale-150 rounded-sm"
                        ></mat-progress-bar>
                    </div>
                }
            </div>
        }
        <placeos-service-worker-update-card />
    `, imports: [
      MatProgressBarModule,
      NativeDomainOverlayComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;cc9c8858f40050cbf899d1698bf5ddc695ecfe0c7e714e2a22cee15289062064;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-loading.component.ts */\n:host {\n  pointer-events: none;\n}\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f15b55 0%,\n      #f68c50 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLoadingComponent, { className: "GlobalLoadingComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 98 });
})();

// libs/components/src/lib/settings-debug-panel-launcher.component.ts
var SettingsDebugPanelLauncherComponent_Defer_25_DepsFn = () => [
  /* @ts-ignore */
  import("./settings-debug-panel.component-HF5MAOPS.js").then((m) => m.SettingsDebugPanelComponent)
];
var SettingsDebugPanelLauncherComponent_Defer_28_DepsFn = () => [
  /* @ts-ignore */
  import("./binding-debug-panel.component-VQF7ICQN.js").then((m) => m.BindingDebugPanelComponent)
];
var SettingsDebugPanelLauncherComponent_Defer_31_DepsFn = () => [
  /* @ts-ignore */
  import("./debug-console.component-3AOSR5ZJ.js").then((m) => m.DebugConsoleComponent)
];
function SettingsDebugPanelLauncherComponent_Defer_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-debug-panel", 8);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Defer_24_Conditional_0_Template_settings_debug_panel_showChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("show", true)("schema", ctx_r3.schema());
  }
}
function SettingsDebugPanelLauncherComponent_Defer_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Defer_24_Conditional_0_Template, 1, 2, "settings-debug-panel", 7);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.panel() === "settings" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "binding-debug-panel", 10);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Defer_27_Conditional_0_Template_binding_debug_panel_showChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show", true)("hotkeysEnabled", false);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Defer_27_Conditional_0_Template, 1, 2, "binding-debug-panel", 9);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.panel() === "bindings" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "debug-console", 10);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Defer_30_Conditional_0_Template_debug_console_showChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show", true)("hotkeysEnabled", false);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Defer_30_Conditional_0_Template, 1, 2, "debug-console", 9);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.panel() === "console" ? 0 : -1);
  }
}
var SettingsDebugPanelLauncherComponent = class _SettingsDebugPanelLauncherComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._hotkey = inject(HotkeysService);
    this._document = inject(DOCUMENT);
    this._menu_trigger = viewChild.required(
      MatMenuTrigger,
      ...ngDevMode ? [{ debugName: "_menu_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadSchema = input(
      ...ngDevMode ? [void 0, { debugName: "loadSchema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schema = signal(
      null,
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel = signal(
      null,
      ...ngDevMode ? [{ debugName: "panel" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const shortcuts = [
      ["settings", ["Control", "Alt", "Shift", "KeyS"]],
      ["bindings", ["Control", "Alt", "Shift", "KeyB"]],
      ["console", ["Control", "Backquote"]]
    ];
    for (const [panel, keys] of shortcuts) {
      this.subscription(panel, this._hotkey.listen(keys, () => {
        if (this.panel() === panel)
          this.panel.set(null);
        else
          this.openPanel(panel);
      }));
    }
  }
  /** Observe the corner without placing a pointer target over app controls. */
  onContextMenu(event) {
    const height = this._document.documentElement.clientHeight;
    if (event.clientX < 0 || event.clientX > 32 || event.clientY < height - 32 || event.clientY > height)
      return;
    this.openMenu(event, this._menu_trigger());
  }
  openMenu(event, trigger) {
    event.preventDefault();
    trigger.openMenu();
  }
  openPanel(panel) {
    this.panel.set(panel);
    if (panel === "settings") {
      this._schema_request ??= this.loadSettingsSchema();
    }
  }
  async loadSettingsSchema() {
    try {
      this.schema.set(await this.loadSchema()?.() ?? null);
    } catch {
      this.schema.set(null);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SettingsDebugPanelLauncherComponent_BaseFactory;
      return function SettingsDebugPanelLauncherComponent_Factory(__ngFactoryType__) {
        return (\u0275SettingsDebugPanelLauncherComponent_BaseFactory || (\u0275SettingsDebugPanelLauncherComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SettingsDebugPanelLauncherComponent)))(__ngFactoryType__ || _SettingsDebugPanelLauncherComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsDebugPanelLauncherComponent, selectors: [["settings-debug-panel-launcher"]], viewQuery: function SettingsDebugPanelLauncherComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._menu_trigger, MatMenuTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function SettingsDebugPanelLauncherComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function SettingsDebugPanelLauncherComponent_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { loadSchema: [1, "loadSchema"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 4, consts: [["menu_trigger", "matMenuTrigger"], ["debug_menu", "matMenu"], ["type", "button", "aria-label", "Open debugging tools", 1, "absolute", "bottom-0", "left-0", "z-999", "h-px", "w-px", 3, "contextmenu", "matMenuTriggerFor"], ["yPosition", "above"], [1, "flex", "w-64", "items-center", "justify-center", "pb-2", "text-sm", "opacity-60"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2"], [3, "show", "schema"], [3, "showChange", "show", "schema"], [3, "show", "hotkeysEnabled"], [3, "showChange", "show", "hotkeysEnabled"]], template: function SettingsDebugPanelLauncherComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 2, 0);
        \u0275\u0275listener("contextmenu", function SettingsDebugPanelLauncherComponent_Template_button_contextmenu_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const menu_trigger_r2 = \u0275\u0275reference(1);
          return \u0275\u0275resetView(ctx.openMenu($event, menu_trigger_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-menu", 3, 1)(4, "div", 4);
        \u0275\u0275text(5, " Debugging Panels ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Template_button_click_6_listener() {
          return ctx.openPanel("settings");
        });
        \u0275\u0275elementStart(7, "div", 6)(8, "icon");
        \u0275\u0275text(9, "discover_tune");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div");
        \u0275\u0275text(11, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "button", 5);
        \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Template_button_click_12_listener() {
          return ctx.openPanel("bindings");
        });
        \u0275\u0275elementStart(13, "div", 6)(14, "icon");
        \u0275\u0275text(15, "linked_services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div");
        \u0275\u0275text(17, "Driver bindings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 5);
        \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Template_button_click_18_listener() {
          return ctx.openPanel("console");
        });
        \u0275\u0275elementStart(19, "div", 6)(20, "icon");
        \u0275\u0275text(21, "terminal_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div");
        \u0275\u0275text(23, "Console");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275domTemplate(24, SettingsDebugPanelLauncherComponent_Defer_24_Template, 1, 1);
        \u0275\u0275defer(25, 24, SettingsDebugPanelLauncherComponent_Defer_25_DepsFn);
        \u0275\u0275domTemplate(27, SettingsDebugPanelLauncherComponent_Defer_27_Template, 1, 1);
        \u0275\u0275defer(28, 27, SettingsDebugPanelLauncherComponent_Defer_28_DepsFn);
        \u0275\u0275domTemplate(30, SettingsDebugPanelLauncherComponent_Defer_30_Template, 1, 1);
        \u0275\u0275defer(31, 30, SettingsDebugPanelLauncherComponent_Defer_31_DepsFn);
      }
      if (rf & 2) {
        const debug_menu_r7 = \u0275\u0275reference(3);
        \u0275\u0275property("matMenuTriggerFor", debug_menu_r7);
        \u0275\u0275advance(25);
        \u0275\u0275deferWhen(ctx.panel() === "settings");
        \u0275\u0275advance(3);
        \u0275\u0275deferWhen(ctx.panel() === "bindings");
        \u0275\u0275advance(3);
        \u0275\u0275deferWhen(ctx.panel() === "console");
      }
    }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(SettingsDebugPanelLauncherComponent, () => [
    /* @ts-ignore */
    import("./settings-debug-panel.component-HF5MAOPS.js").then((m) => m.SettingsDebugPanelComponent),
    /* @ts-ignore */
    import("./binding-debug-panel.component-VQF7ICQN.js").then((m) => m.BindingDebugPanelComponent),
    /* @ts-ignore */
    import("./debug-console.component-3AOSR5ZJ.js").then((m) => m.DebugConsoleComponent)
  ], (SettingsDebugPanelComponent, BindingDebugPanelComponent, DebugConsoleComponent) => {
    setClassMetadata(SettingsDebugPanelLauncherComponent, [{
      type: Component,
      args: [{ selector: "settings-debug-panel-launcher", host: { "(document:contextmenu)": "onContextMenu($event)" }, imports: [
        MatMenuModule,
        SettingsDebugPanelComponent,
        BindingDebugPanelComponent,
        DebugConsoleComponent,
        IconComponent
      ], template: `
        <button
            type="button"
            class="absolute bottom-0 left-0 z-999 h-px w-px"
            aria-label="Open debugging tools"
            [matMenuTriggerFor]="debug_menu"
            #menu_trigger="matMenuTrigger"
            (contextmenu)="openMenu($event, menu_trigger)"
        >
        </button>
        <mat-menu #debug_menu="matMenu" yPosition="above">
            <div
                class="flex w-64 items-center justify-center pb-2 text-sm opacity-60"
            >
                Debugging Panels
            </div>
            <button mat-menu-item (click)="openPanel('settings')">
                <div class="flex items-center gap-2">
                    <icon>discover_tune</icon>
                    <div>Settings</div>
                </div>
            </button>
            <button mat-menu-item (click)="openPanel('bindings')">
                <div class="flex items-center gap-2">
                    <icon>linked_services</icon>
                    <div>Driver bindings</div>
                </div>
            </button>
            <button mat-menu-item (click)="openPanel('console')">
                <div class="flex items-center gap-2">
                    <icon>terminal_2</icon>
                    <div>Console</div>
                </div>
            </button>
        </mat-menu>
        @defer (when panel() === 'settings') {
            @if (panel() === 'settings') {
                <settings-debug-panel
                    [show]="true"
                    (showChange)="panel.set(null)"
                    [schema]="schema()"
                />
            }
        }
        @defer (when panel() === 'bindings') {
            @if (panel() === 'bindings') {
                <binding-debug-panel
                    [show]="true"
                    (showChange)="panel.set(null)"
                    [hotkeysEnabled]="false"
                />
            }
        }
        @defer (when panel() === 'console') {
            @if (panel() === 'console') {
                <debug-console
                    [show]="true"
                    (showChange)="panel.set(null)"
                    [hotkeysEnabled]="false"
                />
            }
        }
    ` }]
    }], null, { _menu_trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }], loadSchema: [{ type: Input, args: [{ isSignal: true, alias: "loadSchema", required: false }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelLauncherComponent, { className: "SettingsDebugPanelLauncherComponent", filePath: "libs/components/src/lib/settings-debug-panel-launcher.component.ts", lineNumber: 97 });
})();

// libs/components/src/lib/unauthorised.component.ts
var _c0 = () => ["/"];
var UnauthorisedComponent = class _UnauthorisedComponent {
  static {
    this.\u0275fac = function UnauthorisedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnauthorisedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorisedComponent, selectors: [["app-unauthorised"]], decls: 15, vars: 11, consts: [["unauthorised", "", 1, "absolute", "inset-0"], [1, "border-base-300", "bg-base-100", "text-base-content", "mx-auto", "my-4", "flex", "w-104", "max-w-[calc(100%-1rem)]", "flex-col", "gap-2", "rounded-xl", "border", "p-4", "text-center", "shadow-lg"], [1, "text-4xl"], [1, "py-4"], ["btn", "", 3, "routerLink"]], template: function UnauthorisedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "403");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h3");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 4);
        \u0275\u0275text(14, "Try Again");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "COMMON.FORBIDDEN"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "COMMON.INVALID_PAGE_PERMISSIONS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "COMMON.CONTACT_ADMIN"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
      }
    }, dependencies: [RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[unauthorised][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=unauthorised.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorisedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorised", template: `
        <div unauthorised class="absolute inset-0">
            <div
                class="border-base-300 bg-base-100 text-base-content mx-auto my-4 flex w-104 max-w-[calc(100%-1rem)] flex-col gap-2 rounded-xl border p-4 text-center shadow-lg"
            >
                <h1 class="text-4xl">403</h1>
                <h3>{{ 'COMMON.FORBIDDEN' | translate }}</h3>
                <p class="py-4">
                    {{ 'COMMON.INVALID_PAGE_PERMISSIONS' | translate }}
                </p>
                <p>
                    {{ 'COMMON.CONTACT_ADMIN' | translate }}
                </p>
                <a btn [routerLink]="['/']">Try Again</a>
            </div>
        </div>
    `, imports: [TranslatePipe, RouterLink], styles: ["/* angular:styles/component:css;9e56e45d1ecd17d612bec636f553ceddd9b98cd2552edbd57d59534065beeefe;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/unauthorised.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[unauthorised] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=unauthorised.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorisedComponent, { className: "UnauthorisedComponent", filePath: "libs/components/src/lib/unauthorised.component.ts", lineNumber: 43 });
})();

// libs/components/src/lib/authorised-user.guard.ts
var OFFLINE_FALLBACK_DELAY = 20 * 1e3;
function hasCachedCredentials() {
  try {
    return !!J();
  } catch {
    return false;
  }
}
function resolvedWithin(promise, delay) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), delay);
    promise.then(() => {
      clearTimeout(timer);
      resolve(true);
    }, () => {
      clearTimeout(timer);
      resolve(false);
    });
  });
}
var PLACEOS_APP_ACCESS = class {
};
var AuthorisedUserGuard = class _AuthorisedUserGuard {
  constructor() {
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._injector = inject(Injector);
    this._access = inject(PLACEOS_APP_ACCESS, { optional: true });
  }
  async canActivate(next, state) {
    return this.checkUser();
  }
  async canLoad(route, segments) {
    return this.checkUser();
  }
  async canActivateChild(next, state) {
    return this.checkUser();
  }
  async checkUser() {
    const state_ready = await this.waitForBackend(Promise.all([
      this._org.waitUntilInitialised(),
      firstValueWhere(user_groups_loaded, Boolean, this._injector)
    ]));
    if (!state_ready)
      return this.offlineAccess();
    const groups = this._access?.group ? [this._access.group] : this._settings.get("app.allow_access_groups") || [];
    const use_group_subsystem_access = await this.useGroupSubsystemAccess();
    let can_activate = false;
    if (use_group_subsystem_access) {
      const user = await this.waitForUser();
      if (!user)
        return this.offlineAccess();
      can_activate = this.checkSubsystemAccess(user);
      log("ACCESS", "Checking subsystem access", can_activate);
    } else if (!groups.length) {
      can_activate = true;
      log("ACCESS", "No access groups", can_activate);
    } else {
      const user = await this.waitForUser();
      if (!user)
        return this.offlineAccess();
      can_activate = !!(user && groups.find((_) => user.groups.includes(_)));
      log("ACCESS", "Checking access groups", can_activate);
    }
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return !!can_activate;
  }
  /** The active user, or null if the backend could not be reached in time */
  async waitForUser() {
    const online = await this.waitForBackend(Zr(eo(), Boolean));
    if (!online)
      return null;
    let user = null;
    const loaded = await this.waitForBackend(firstTruthyValueFrom(current_user).then((_) => user = _));
    return loaded ? user : null;
  }
  async waitForBackend(promise) {
    return resolvedWithin(promise, OFFLINE_FALLBACK_DELAY);
  }
  /**
   * Access decision for when the backend cannot be reached. Waiting forever
   * leaves a fixed device sitting on a loading screen with no way back, so a
   * device that has authenticated before is allowed through on its cached
   * session. Every API call it then makes is still checked by the server.
   */
  offlineAccess() {
    if (hasCachedCredentials()) {
      log("ACCESS", "Backend unreachable. Continuing with cached credentials.");
      return true;
    }
    log("ACCESS", "Backend unreachable and no cached credentials.", void 0, "warn");
    this._router.navigate(["/unauthorised"]);
    return false;
  }
  async useGroupSubsystemAccess() {
    const value = Mt()?.config?.["use_group_subsystem_access"];
    return value === true || value === "true";
  }
  checkSubsystemAccess(user) {
    if (!user)
      return false;
    const subsystem = `${this._settings.get("app.access_subsystem") || ""}`.trim();
    const app_name = (subsystem || `${this._settings.app_name || ""}`).trim().toLowerCase();
    if (!app_name)
      return false;
    return hasPermission(app_name, GroupPermission.Read);
  }
  static {
    this.\u0275fac = function AuthorisedUserGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthorisedUserGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorisedUserGuard, factory: _AuthorisedUserGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorisedUserGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/outlook-addin/src/app/app.component.ts
var AppComponent = class _AppComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._cache = inject(SwUpdate);
    this._snackbar = inject(MatSnackBar);
    this._locales = inject(LocaleService);
    this._uploads = inject(UploadsService);
    this._current_user = userSignal();
    this._internal_user_domain = computed(
      () => {
        const email = this._current_user()?.email || "";
        const domain = email.split("@")[1];
        return this._settings.get("app.internal_user_domain") || (domain ? `@${domain}` : "");
      },
      ...ngDevMode ? [{ debugName: "_internal_user_domain" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = "outlook-addin";
  }
  async ngOnInit() {
    console.info(`Initialising application...`);
    window.history.replaceState = (data, unused) => {
    };
    window.history.pushState = (data, unused) => {
    };
    setTranslationService(this._locales);
    setNotifyOutlet(this._snackbar);
    setupCache(this._cache);
    console.info(`Waiting for application settings...`);
    await firstTruthyValueFrom(this._settings.initialised);
    log("Outlook", `Waiting for library initialisation...`);
    try {
      await withTimeout(Office.onReady(), 3e4, "Microsoft Office did not become ready.");
    } catch (error) {
      console.error(error);
      failInitialisation("The Outlook add-in could not start. Close and reopen it, then try again.");
      return;
    }
    log("Outlook", `Initialising auth...`);
    if (!await this._initialiseAuth())
      return;
    log("Outlook", `Checking existing auth...`);
    if (J())
      return this._finishInitialise();
    console.info(`No existing auth...`);
    try {
      log("Outlook", `Checking for token...`);
      const get_token = Office?.auth?.getAccessToken();
      const tkn = await withTimeout(get_token || Promise.resolve(void 0), 1e4, "Unable to get Office token.");
      if (!tkn)
        throw "Unable to get office token...";
      log("Outlook", `Loaded office token. ${tkn}`);
      sessionStorage.setItem("OFFICE.token", tkn);
      if (!await this._initialiseAuth(false))
        return;
      this._finishInitialise();
    } catch (e) {
      console.info(JSON.stringify(e));
      if (!Office?.context?.auth) {
        log("Outlook", `Error office API not loaded.`);
        if (!await this._initialiseAuth(false))
          return;
        await this._finishInitialise();
      } else {
        log("Outlook", `Authenticating through Outlook...`);
        await this._authenticateGraphAPI();
      }
    }
    if (this._settings.get("app.has_uploads"))
      this._uploads.init();
  }
  async _initialiseAuth(local = true) {
    setAppName(this._settings.get("app.short_name"));
    const settings = this._settings.get("composer") || {};
    settings.local_login = local;
    settings.storage = "local";
    settings.mock = !!this._settings.get("mock") || location.origin.includes("demo.place.tech");
    try {
      await setupPlace(settings);
      return true;
    } catch (error) {
      console.error(error);
      failInitialisation("The Outlook add-in could not authenticate. Check the connection, then try again.");
      return false;
    }
  }
  async _finishInitialise() {
    setupCache(this._cache, this._settings.get("service_worker") || {});
    try {
      await withTimeout(firstTruthyValueFrom(current_user), 3e4, "Current user loading timed out.");
    } catch (error) {
      console.error(error);
      this.onInitError();
      return;
    }
    setDefaultCreator(this._current_user());
    const internal_user_domain = this._internal_user_domain();
    if (internal_user_domain)
      setInternalUserDomain(internal_user_domain);
    markInitialisationComplete();
  }
  async _authenticateGraphAPIWithDialog() {
    log("Outlook", `Authenticating...`);
    this.timeout("office_auth_failure", () => failInitialisation("Microsoft sign in did not finish. Close the sign-in window, then try again."), 2 * 60 * 1e3);
    this.timeout("office_auth", () => {
      const path = `${location.origin}${location.pathname}#ms-auth=true`;
      console.info(`Opening office authentication dialog with URL: ${path}`);
      Office.context.ui.displayDialogAsync(path, { height: 60, width: 30 }, (result) => {
        log("Outlook", `Authenticating with dialog...`);
        const dialog = result.value;
        dialog.addEventHandler(Office.EventType.DialogMessageReceived, (token) => {
          this.clearTimeout("office_auth_failure");
          if (token)
            yi(token);
          this._finishInitialise();
          dialog.close();
        });
      });
    });
    console.info(`URL: ${window.location.href}`);
    if (window.location.href.includes("ms-auth=true") || sessionStorage.getItem("ms-auth")) {
      sessionStorage.setItem("ms-auth", "true");
      log("Outlook", `Authenticating with dialog...`);
      this.clearTimeout("office_auth");
      if (!await this._initialiseAuth(false))
        return;
      if (!J())
        return;
      Office.context.ui.messageParent(J() || "");
    }
  }
  async _authenticateGraphAPI(tries = 0) {
    if (!Office.context.auth) {
      if (Office.context.ui) {
        await this._authenticateGraphAPIWithDialog();
        return;
      }
      if (tries >= 10) {
        failInitialisation("Microsoft authentication is unavailable. Close and reopen the add-in, then try again.");
        return;
      }
      await new Promise((resolve) => this.timeout("retry_graph_auth", () => resolve(), 300));
      return this._authenticateGraphAPI(tries + 1);
    }
    try {
      const access_token = Office.context.auth.getAccessTokenAsync();
      const result = await withTimeout(access_token, 1e4, "Microsoft single sign-on timed out.");
      if (result.status === "succeeded") {
        const token = result.value;
        log("Outlook", "SSO token acquired successfully");
        if (token)
          yi(token);
        await this._finishInitialise();
        return;
      }
      log("Outlook", `SSO failed: ${result.error?.message || "Unknown error"}`, void 0, "error");
    } catch (error) {
      console.error(error);
    }
    if (Office.context.ui) {
      await this._authenticateGraphAPIWithDialog();
    } else {
      failInitialisation("Microsoft sign in did not finish. Close and reopen the add-in, then try again.");
    }
  }
  onInitError() {
    if (Rn() || this._current_user()?.is_logged_in)
      return;
    En();
    failInitialisation("The Outlook add-in could not load the current user. Check the connection, then try again.");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AppComponent_BaseFactory;
      return function AppComponent_Factory(__ngFactoryType__) {
        return (\u0275AppComponent_BaseFactory || (\u0275AppComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AppComponent)))(__ngFactoryType__ || _AppComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "settings-debug-panel-launcher")(1, "router-outlet")(2, "global-loading");
      }
    }, dependencies: [
      SettingsDebugPanelLauncherComponent,
      RouterOutlet,
      GlobalLoadingComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", template: `
        <settings-debug-panel-launcher />

        <router-outlet />
        <global-loading />
    `, imports: [
      SettingsDebugPanelLauncherComponent,
      RouterOutlet,
      GlobalLoadingComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "apps/outlook-addin/src/app/app.component.ts", lineNumber: 54 });
})();

// apps/outlook-addin/src/environments/environment.ts
var environment = {
  production: false
};

// apps/outlook-addin/src/app/app.routes.ts
var routes = [
  { path: "unauthorised", component: UnauthorisedComponent },
  {
    path: "404",
    loadComponent: () => import("./not-found.component-4VZNAFSG.js").then((m) => m.NotFoundComponent)
  },
  {
    path: "find",
    loadComponent: () => import("./find-space.component-NZYNQMLO.js").then((m) => m.FindSpaceComponent)
  },
  {
    path: "",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    children: [
      {
        path: "ms-auth",
        loadComponent: () => import("./room-booking.component-WSOAUT2H.js").then((m) => m.RoomBookingComponent)
      },
      {
        path: "book",
        children: [
          {
            path: "spaces",
            loadComponent: () => import("./room-booking.component-WSOAUT2H.js").then((m) => m.RoomBookingComponent)
          },
          {
            path: "spaces/success",
            loadComponent: () => import("./booking-confirmed.component-LPRCTLBC.js").then((m) => m.BookingConfirmedComponent)
          },
          {
            path: "meeting",
            loadComponent: () => import("./meeting-booking.component-6KOVQI53.js").then((m) => m.MeetingBookingComponent)
          },
          {
            path: "meeting/success",
            loadComponent: () => import("./meeting-success.component-AL44ZXOL.js").then((m) => m.MeetingBookingSuccessComponent)
          },
          {
            path: "desks",
            loadComponent: () => import("./desk-booking.component-YXKIDGII.js").then((m) => m.DeskBookingComponent)
          },
          {
            path: "desks/success",
            loadComponent: () => import("./desk-success.component-3KHQ3XXW.js").then((m) => m.DeskBookingSuccessComponent)
          }
        ]
      },
      {
        path: "schedule/view",
        loadComponent: () => import("./find-space.component-NZYNQMLO.js").then((m) => m.FindSpaceComponent)
      },
      {
        path: "confirm/success",
        loadComponent: () => import("./booking-confirmed.component-LPRCTLBC.js").then((m) => m.BookingConfirmedComponent)
      },
      {
        path: "upcoming",
        loadComponent: () => import("./upcoming-bookings.component-EBVVREBD.js").then((m) => m.UpcomingBookingsComponent)
      },
      { path: "**", redirectTo: "book/meeting" }
    ]
  },
  { path: "**", redirectTo: "book/meeting", pathMatch: "full" }
];

// apps/outlook-addin/src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    provideRouter(routes, withHashLocation()),
    provideServiceWorker("ngsw-worker.js", {
      enabled: environment.production
    }),
    importProvidersFrom(MatSnackBarModule, NativeDateModule)
  ]
};

// apps/outlook-addin/src/main.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=7563f7f5-a932-56da-90f9-e60fa5a6280d
//# sourceMappingURL=main.js.map
