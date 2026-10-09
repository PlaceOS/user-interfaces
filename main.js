import {
  setInternalUserDomain
} from "./chunk-V77UPOTA.js";
import "./chunk-FZFED6D7.js";
import {
  TranslatePipe
} from "./chunk-NVBKIOO3.js";
import {
  GroupPermission,
  NativeDateModule,
  OrganisationService,
  PlaceOS_Service,
  SettingsService,
  SwUpdate,
  UploadsService,
  autoConfirmNativeDomain,
  current_user,
  failInitialisation,
  firstValueWhere,
  getLoadingMessage,
  hasPermission,
  initialisationComplete,
  initialisationFailure,
  markInitialisationComplete,
  nativeDomainError,
  needsNativeDomain,
  provideServiceWorker,
  retryInitialisation,
  serviceWorkerUpdate,
  setDefaultCreator,
  setupCache,
  setupPlace,
  userSignal,
  user_groups_loaded
} from "./chunk-4RPLQMHU.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  provideRouter,
  withHashLocation
} from "./chunk-PDL6SW7D.js";
import {
  AsyncHandler,
  Cn,
  IconComponent,
  J,
  LocaleService,
  Mt,
  Un,
  Yr,
  bi,
  firstTruthyValueFrom,
  io,
  lazySnackbar,
  log,
  setAppName,
  setNotifyOutlet,
  setTranslationService,
  so,
  withTimeout
} from "./chunk-DBUTAYQC.js";
import "./chunk-PDC5DY4R.js";
import "./chunk-CZKEECSS.js";
import {
  BidiModule,
  _getAnimationsState
} from "./chunk-4CHWKULB.js";
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
  ViewEncapsulation,
  bootstrapApplication,
  computed,
  enableProdMode,
  importProvidersFrom,
  inject,
  numberAttribute,
  provideHttpClient,
  provideZonelessChangeDetection,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
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
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdeferOnImmediate,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WU2PTGBX.js";
import "./chunk-GOMI4DH3.js";

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
    \u0275\u0275attribute("title", update_state_r3.action || "Reload App")("aria-label", update_state_r3.action || "Reload App");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceWorkerUpdateCardComponent, selectors: [["placeos-service-worker-update-card"]], decls: 1, vars: 1, consts: [["role", "status", "aria-live", "assertive", 1, "border-base-300", "bg-base-100", "text-base-content", "pointer-events-auto", "fixed", "right-4", "bottom-4", "z-9999", "flex", "w-[20rem]", "max-w-[calc(100vw-2rem)]", "items-center", "gap-3", "rounded-lg", "border", "p-4", "shadow-xl"], [1, "min-w-0", "flex-1"], [1, "m-0", "text-sm", "leading-tight", "font-medium"], [1, "m-0", "mt-1", "text-xs", "opacity-70"], ["icon", "", "default", "", 3, "click"]], template: function ServiceWorkerUpdateCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ServiceWorkerUpdateCardComponent_Conditional_0_Template, 9, 4, "aside", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.update()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [IconComponent], encapsulation: 2 });
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
                    [attr.title]="update_state.action || 'Reload App'"
                    [attr.aria-label]="update_state.action || 'Reload App'"
                    (click)="reloadApp()"
                >
                    <icon>refresh</icon>
                </button>
            </aside>
        }
    `,
      imports: [IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceWorkerUpdateCardComponent, { className: "ServiceWorkerUpdateCardComponent", filePath: "libs/components/src/lib/service-worker-update-card.component.ts", lineNumber: 40 });
})();

// libs/components/src/lib/global-loading.component.ts
var NativeDomainOverlayLoaderComponent_Conditional_0_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./native-domain-overlay.component-6H2YDGFK.js").then((m) => m.NativeDomainOverlayComponent)
];
function NativeDomainOverlayLoaderComponent_Conditional_0_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "native-domain-overlay", 0);
    \u0275\u0275listener("domainSet", function NativeDomainOverlayLoaderComponent_Conditional_0_Defer_0_Template_native_domain_overlay_domainSet_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDomainSet());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("serverError", ctx_r1.domain_error())("autoAccept", ctx_r1.auto_confirm());
  }
}
function NativeDomainOverlayLoaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, NativeDomainOverlayLoaderComponent_Conditional_0_Defer_0_Template, 1, 2);
    \u0275\u0275defer(1, 0, NativeDomainOverlayLoaderComponent_Conditional_0_Defer_1_DepsFn);
    \u0275\u0275deferOnImmediate();
  }
}
function GlobalLoadingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
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
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "p", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function GlobalLoadingComponent_Conditional_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
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
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275element(4, "mat-progress-bar", 8);
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
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_2_Conditional_1_Template, 5, 1, "div", 2)(2, GlobalLoadingComponent_Conditional_2_Conditional_2_Template, 5, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.initialisation_error() ? 1 : 2);
  }
}
var NativeDomainOverlayLoaderComponent = class _NativeDomainOverlayLoaderComponent {
  constructor() {
    this._placeos = inject(PlaceOS_Service);
    this.show = needsNativeDomain();
    this.domain_error = nativeDomainError();
    this.auto_confirm = autoConfirmNativeDomain();
  }
  onDomainSet() {
    this._placeos.onNativeDomainSet();
  }
  static {
    this.\u0275fac = function NativeDomainOverlayLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDomainOverlayLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NativeDomainOverlayLoaderComponent, selectors: [["native-domain-overlay-loader"]], decls: 1, vars: 1, consts: [[3, "domainSet", "serverError", "autoAccept"]], template: function NativeDomainOverlayLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NativeDomainOverlayLoaderComponent_Conditional_0_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(NativeDomainOverlayLoaderComponent, () => [
    /* @ts-ignore */
    import("./native-domain-overlay.component-6H2YDGFK.js").then((m) => m.NativeDomainOverlayComponent)
  ], (NativeDomainOverlayComponent) => {
    setClassMetadata(NativeDomainOverlayLoaderComponent, [{
      type: Component,
      args: [{
        selector: "native-domain-overlay-loader",
        template: `
        @if (show()) {
            @defer (on immediate) {
                <native-domain-overlay
                    [serverError]="domain_error()"
                    [autoAccept]="auto_confirm()"
                    (domainSet)="onDomainSet()"
                ></native-domain-overlay>
            }
        }
    `,
        imports: [NativeDomainOverlayComponent]
      }]
    }], null, null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NativeDomainOverlayLoaderComponent, { className: "NativeDomainOverlayLoaderComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 40 });
})();
var GlobalLoadingComponent = class _GlobalLoadingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
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
  ngOnInit() {
    const update_online = () => {
      this.online.set(so());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLoadingComponent, selectors: [["global-loading"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "bg-error", "fixed", "top-2", "left-1/2", "z-9999", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white", "shadow-sm"], ["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "flex-col", "items-center", "justify-end", "space-y-2", "p-4"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-4", "text-center", "text-xs", "shadow-sm"], ["initialisation-error", ""], ["type", "button", 1, "bg-primary", "text-primary-content", "mt-3", "rounded", "px-4", "py-2", 3, "click"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-2", "text-center", "text-xs", "shadow-sm"], [1, "text-center", "font-mono"], [1, "border-base-300", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "overflow-hidden", "rounded-full", "border", "shadow-sm"], ["mode", "indeterminate", 1, "scale-150", "rounded-sm"]], template: function GlobalLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "native-domain-overlay-loader");
        \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_1_Template, 3, 3, "div", 0);
        \u0275\u0275conditionalCreate(2, GlobalLoadingComponent_Conditional_2_Template, 3, 1, "div", 1);
        \u0275\u0275element(3, "placeos-service-worker-update-card");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.connection_checked() && !ctx.online() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() || ctx.initialisation_error() ? 2 : -1);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      NativeDomainOverlayLoaderComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f15b55 0%,\n      #f68c50 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalLoadingComponent, [{
    type: Component,
    args: [{ selector: "global-loading", template: `
        <native-domain-overlay-loader />
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
      NativeDomainOverlayLoaderComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;cc9c8858f40050cbf899d1698bf5ddc695ecfe0c7e714e2a22cee15289062064;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-loading.component.ts */\n:host {\n  pointer-events: none;\n}\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f15b55 0%,\n      #f68c50 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLoadingComponent, { className: "GlobalLoadingComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 124 });
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
    const online = await this.waitForBackend(Yr(io(), Boolean));
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
var AppComponent_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./settings-debug-panel-launcher.component-WXTD3MKX.js").then((m) => m.SettingsDebugPanelLauncherComponent)
];
function AppComponent_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-debug-panel-launcher");
  }
}
var AppComponent = class _AppComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._cache = inject(SwUpdate);
    this._snackbar = lazySnackbar();
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
    if (this._isAuthDialog())
      return this._completeAuthDialog();
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
        if (result.status !== "succeeded") {
          this.clearTimeout("office_auth_failure");
          failInitialisation("The Microsoft sign-in window could not open. Allow pop-ups for Outlook, then try again.");
          return;
        }
        log("Outlook", `Authenticating with dialog...`);
        const dialog = result.value;
        dialog.addEventHandler(Office.EventType.DialogMessageReceived, (event) => {
          this.clearTimeout("office_auth_failure");
          if (event.message)
            bi(event.message);
          this._finishInitialise();
          dialog.close();
        });
      });
    });
  }
  /** True when this window is the sign-in dialog opened by the task pane. */
  _isAuthDialog() {
    return location.href.includes("ms-auth=true") || !!sessionStorage.getItem("ms-auth");
  }
  /**
   * Sign in to PlaceOS inside the dialog, then send the token to the task
   * pane. The task pane cannot share the dialog's storage or cookies.
   */
  async _completeAuthDialog() {
    sessionStorage.setItem("ms-auth", "true");
    log("Outlook", `Signing in from dialog...`);
    if (!await this._initialiseAuth(false))
      return;
    if (!J())
      return;
    sessionStorage.removeItem("ms-auth");
    Office.context.ui.messageParent(J());
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
      const access_token = new Promise((resolve) => Office.context.auth.getAccessTokenAsync({ allowSignInPrompt: true }, resolve));
      const result = await withTimeout(access_token, 1e4, "Microsoft single sign-on timed out.");
      if (result.status === "succeeded") {
        const token = result.value;
        log("Outlook", "SSO token acquired successfully");
        if (token)
          bi(token);
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
    if (Un() || this._current_user()?.is_logged_in)
      return;
    Cn();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domTemplate(0, AppComponent_Defer_0_Template, 1, 0);
        \u0275\u0275defer(1, 0, AppComponent_Defer_1_DepsFn);
        \u0275\u0275deferOnIdle();
        \u0275\u0275element(3, "router-outlet")(4, "global-loading");
      }
    }, dependencies: [
      RouterOutlet,
      GlobalLoadingComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(AppComponent, () => [
    /* @ts-ignore */
    import("./settings-debug-panel-launcher.component-WXTD3MKX.js").then((m) => m.SettingsDebugPanelLauncherComponent)
  ], (SettingsDebugPanelLauncherComponent) => {
    setClassMetadata(AppComponent, [{
      type: Component,
      args: [{ selector: "app-root", template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        }

        <router-outlet />
        <global-loading />
    `, imports: [
        SettingsDebugPanelLauncherComponent,
        RouterOutlet,
        GlobalLoadingComponent
      ] }]
    }], null, null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "apps/outlook-addin/src/app/app.component.ts", lineNumber: 56 });
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
    loadComponent: () => import("./not-found.component-PCJD4WOX.js").then((m) => m.NotFoundComponent)
  },
  {
    path: "find",
    loadComponent: () => import("./find-space.component-CGLVCHGY.js").then((m) => m.FindSpaceComponent)
  },
  {
    path: "",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    children: [
      {
        path: "ms-auth",
        loadComponent: () => import("./room-booking.component-TI4P26R7.js").then((m) => m.RoomBookingComponent)
      },
      {
        path: "book",
        children: [
          {
            path: "spaces",
            loadComponent: () => import("./room-booking.component-TI4P26R7.js").then((m) => m.RoomBookingComponent)
          },
          {
            path: "spaces/success",
            loadComponent: () => import("./booking-confirmed.component-YKO5CD4I.js").then((m) => m.BookingConfirmedComponent)
          },
          {
            path: "meeting",
            loadComponent: () => import("./meeting-booking.component-QMA4DC4E.js").then((m) => m.MeetingBookingComponent)
          },
          {
            path: "meeting/success",
            loadComponent: () => import("./meeting-success.component-7DXYZYM2.js").then((m) => m.MeetingBookingSuccessComponent)
          },
          {
            path: "desks",
            loadComponent: () => import("./desk-booking.component-UFLNJZIX.js").then((m) => m.DeskBookingComponent)
          },
          {
            path: "desks/success",
            loadComponent: () => import("./desk-success.component-QVGZIWTO.js").then((m) => m.DeskBookingSuccessComponent)
          }
        ]
      },
      {
        path: "schedule/view",
        loadComponent: () => import("./find-space.component-CGLVCHGY.js").then((m) => m.FindSpaceComponent)
      },
      {
        path: "confirm/success",
        loadComponent: () => import("./booking-confirmed.component-YKO5CD4I.js").then((m) => m.BookingConfirmedComponent)
      },
      {
        path: "upcoming",
        loadComponent: () => import("./upcoming-bookings.component-QTTG42SL.js").then((m) => m.UpcomingBookingsComponent)
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
    importProvidersFrom(NativeDateModule)
  ]
};

// apps/outlook-addin/src/main.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=fa2f00a7-910e-52b4-a126-991bd71ce792
//# sourceMappingURL=main.js.map
