import {
  AiImageService,
  Ar,
  AsyncHandler,
  BidiModule,
  ChangeDetectorRef,
  Clipboard,
  Component,
  CustomTooltipComponent,
  DEFAULT_SETTINGS,
  DOCUMENT,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  FormsModule,
  GroupPermission,
  HotkeysService,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  It,
  Kr,
  LOCALE_ID,
  LocaleService,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgModule,
  NgSelectOption,
  NgZone,
  NumberValueAccessor,
  OrganisationService,
  Output,
  PlaceOS_Service,
  Qr,
  Renderer2,
  RequiredValidator,
  Router,
  RouterLink,
  RouterOutlet,
  SelectControlValueAccessor,
  SettingsService,
  SignageService,
  TranslatePipe,
  UploadsService,
  ViewEncapsulation,
  X,
  _getAnimationsState,
  ad,
  addDays,
  addMilliseconds,
  addMinutes,
  addMonths,
  autoConfirmNativeDomain,
  bootstrapApplication,
  capitalizeFirstLetter,
  computed,
  current_user,
  da,
  differenceInMinutes,
  effect,
  firstTruthyValueFrom,
  firstValueWhere,
  getLoadingMessage,
  getNativeApiKey,
  getNativeDomain,
  getNativeEmail,
  getUnixTime,
  hasPermission,
  hi,
  inject,
  input,
  isBefore,
  log,
  lookupNativeDomainByEmail,
  nativeDomainError,
  needsNativeDomain,
  normaliseNativeDomain,
  numberAttribute,
  output,
  padString,
  predictableRandomInt,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideRouter,
  provideServiceWorker,
  provideZonelessChangeDetection,
  randomInt,
  randomString,
  registerActiveLocale,
  resource,
  serviceWorkerUpdate,
  setClassMetadata,
  setMocks,
  setNativeApiKey,
  setNativeDomain,
  setNativeEmail,
  settingSignal,
  signal,
  startOfDay,
  timePeriodsIntersect,
  to,
  toDate,
  unique,
  untracked,
  user_groups_loaded,
  withComponentInputBinding,
  withHashLocation,
  zr,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
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
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZDUYTDDL.js";
import {
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

// node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}

// node_modules/date-fns/subMinutes.js
function subMinutes(date, amount, options) {
  return addMinutes(date, -amount, options);
}

// node_modules/date-fns/subSeconds.js
function subSeconds(date, amount, options) {
  return addSeconds(date, -amount, options);
}

// libs/users/src/lib/user.utilities.ts
var USER_DOMAIN = "@place.tech";

// libs/events/src/lib/space.utilities.ts
var SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
  const id = `space-${SPACE_COUNT++}`;
  const name = `Test Space ${SPACE_COUNT}`;
  const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
  const space = __spreadValues({
    id,
    name,
    long_name: `${name} with an long name`,
    map_id: `${SPACE_COUNT}`,
    capacity: predictableRandomInt(21, 1) * 2,
    email: `${name.toLowerCase().split(" ").join(".")}@${USER_DOMAIN}`,
    type: "",
    searchable: predictableRandomInt(99999) % 2 === 0,
    controlable: predictableRandomInt(99999) % 2 === 0,
    bookable: predictableRandomInt(99999) % 2 === 0,
    cost_hour: predictableRandomInt(300) * 100,
    setup: predictableRandomInt(6) * 5,
    breakdown: predictableRandomInt(6) * 5,
    zones: ["zone_lvl-0"],
    support_url: `/control/#/panel/${id}`,
    bookings: [],
    //Array(10).fill(0).map(i => generateMockBooking()),
    linked_rooms: linked ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`] : [],
    image: ""
  }, overrides);
  if (space["configurations"] && space["configurations"].length > 0) {
    space["configurations"].forEach((config) => config.capacity = predictableRandomInt(space.capacity) + 1);
    space["configurations"][0].capacity = space.capacity;
  }
  return space;
}

// libs/components/src/lib/global-banner.component.ts
function GlobalBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1)(1, "div", 2);
  }
  if (rf & 2) {
    const bar_color_r1 = ctx;
    \u0275\u0275styleProp("background-color", bar_color_r1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", bar_color_r1);
  }
}
function GlobalBannerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function GlobalBannerComponent_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", ctx_r2.banner().type === "info" || !ctx_r2.banner().type)("text-info-content", ctx_r2.banner().type === "info" || !ctx_r2.banner().type)("bg-warning", ctx_r2.banner().type === "warn")("text-warning-content", ctx_r2.banner().type === "warn")("bg-error", ctx_r2.banner().type === "error")("text-error-content", ctx_r2.banner().type === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.banner()?.content || ctx_r2.banner()?.message, " ");
  }
}
var GlobalBannerComponent = class _GlobalBannerComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_setup = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_setup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.banner = settingSignal("banner");
    this.environment_bar = settingSignal("environment_bar");
    this._environment_bar_padding = effect(
      () => {
        document.body.classList.toggle("has-environment-bar", !!this.environment_bar());
      },
      ...ngDevMode ? [{ debugName: "_environment_bar_padding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_been_closed = computed(
      () => {
        if (!this.is_setup())
          return true;
        this._change();
        return !this.banner()?.content && !this.banner()?.message || localStorage.getItem("PLACE.last_banner") === this.banner().id;
      },
      ...ngDevMode ? [{ debugName: "has_been_closed" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    setTimeout(() => this.is_setup.set(true), 500);
  }
  async close() {
    localStorage.setItem("PLACE.last_banner", this.banner()?.id || "");
    this._change.set(Date.now());
  }
  static {
    this.\u0275fac = function GlobalBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalBannerComponent, selectors: [["global-banner"]], decls: 2, vars: 2, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "p-4", "print:hidden", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], ["aria-hidden", "true", 1, "environment-bar", "top-0", "print:hidden"], ["aria-hidden", "true", 1, "environment-bar", "bottom-0", "print:hidden"], [1, "flex", "w-full", "items-center", "space-x-4", "p-4", "print:hidden"], [1, "flex-1"], ["icon", "", "matRipple", "", 3, "click"]], template: function GlobalBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GlobalBannerComponent_Conditional_0_Template, 2, 4);
        \u0275\u0275conditionalCreate(1, GlobalBannerComponent_Conditional_1_Template, 6, 13, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.environment_bar()) ? 0 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.has_been_closed() && ctx.banner() ? 1 : -1);
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.environment-bar[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\n/*# sourceMappingURL=global-banner.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalBannerComponent, [{
    type: Component,
    args: [{ selector: "global-banner", template: `
        @if (environment_bar(); as bar_color) {
            <div
                aria-hidden="true"
                class="environment-bar top-0 print:hidden"
                [style.background-color]="bar_color"
            ></div>
            <div
                aria-hidden="true"
                class="environment-bar bottom-0 print:hidden"
                [style.background-color]="bar_color"
            ></div>
        }
        @if (!has_been_closed() && banner()) {
            <div
                class="flex w-full items-center space-x-4 p-4 print:hidden"
                [class.bg-info]="banner().type === 'info' || !banner().type"
                [class.text-info-content]="
                    banner().type === 'info' || !banner().type
                "
                [class.bg-warning]="banner().type === 'warn'"
                [class.text-warning-content]="banner().type === 'warn'"
                [class.bg-error]="banner().type === 'error'"
                [class.text-error-content]="banner().type === 'error'"
            >
                <div class="flex-1">
                    {{ banner()?.content || banner()?.message }}
                </div>
                <button icon matRipple (click)="close()">
                    <icon>close</icon>
                </button>
            </div>
        }
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;48adc7ab23f963363b839300791bbdc46c1dcce0d1cc0ea0f3bb781a20fc7fbc;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-banner.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.environment-bar {\n  height: 0.5rem;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\n/*# sourceMappingURL=global-banner.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalBannerComponent, { className: "GlobalBannerComponent", filePath: "libs/components/src/lib/global-banner.component.ts", lineNumber: 74 });
})();

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
    styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
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
function GlobalLoadingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "mat-progress-bar", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.message());
  }
}
var GlobalLoadingComponent = class _GlobalLoadingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._placeos = inject(PlaceOS_Service);
    this._settings = inject(SettingsService);
    this.loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.online = signal(
      true,
      ...ngDevMode ? [{ debugName: "online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = getLoadingMessage();
    this.show_domain_overlay = needsNativeDomain();
    this.domain_error = nativeDomainError();
    this.auto_confirm = autoConfirmNativeDomain();
  }
  onDomainSet() {
    this._placeos.onNativeDomainSet();
  }
  async ngOnInit() {
    this.loading.set(true);
    await this._org.waitUntilInitialised();
    await firstTruthyValueFrom(this._settings.initialised);
    this.online.set(Qr());
    this.interval("has_token", () => {
      this.online.set(Qr());
      if (!It() || !X())
        return;
      this.loading.set(false);
      this.online.set(Qr());
      this.clearInterval("has_token");
    }, 1e3);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLoadingComponent, selectors: [["global-loading"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 3, consts: [[3, "serverError", "autoAccept"], [1, "bg-error", "fixed", "top-2", "left-1/2", "z-9999", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white", "shadow-sm"], ["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "flex-col", "items-center", "justify-end", "space-y-2", "p-4"], [3, "domainSet", "serverError", "autoAccept"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-2", "text-center", "text-xs", "shadow-sm"], [1, "text-center", "font-mono"], [1, "border-base-300", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "overflow-hidden", "rounded-full", "border", "shadow-sm"], ["mode", "indeterminate", 1, "scale-150", "rounded-sm"]], template: function GlobalLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GlobalLoadingComponent_Conditional_0_Template, 1, 2, "native-domain-overlay", 0);
        \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_1_Template, 3, 3, "div", 1);
        \u0275\u0275conditionalCreate(2, GlobalLoadingComponent_Conditional_2_Template, 6, 1, "div", 2);
        \u0275\u0275element(3, "placeos-service-worker-update-card");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show_domain_overlay() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.online() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 2 : -1);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      NativeDomainOverlayComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #0d47a1 0%,\n      #2196f3 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */"] });
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
        @if (!online()) {
            <div
                class="bg-error fixed top-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs text-white shadow-sm"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (loading()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex flex-col items-center justify-end space-y-2 p-4"
            >
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
            </div>
        }
        <placeos-service-worker-update-card />
    `, imports: [
      MatProgressBarModule,
      NativeDomainOverlayComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;20ed35e4d9331eb05f75050b4db1abf21c3efcb5c2a33e67ac0f1efe2c3a5f59;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-loading.component.ts */\n:host {\n  pointer-events: none;\n}\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #0d47a1 0%,\n      #2196f3 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLoadingComponent, { className: "GlobalLoadingComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 81 });
})();

// libs/components/src/lib/binding-debug-panel.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.direction + $item.id;
function BindingDebugPanelComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAllOverrides());
    });
    \u0275\u0275text(1, " Clear overrides ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275text(1, " Clear messages ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r6.id, " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", system_r6.active_count, "/", system_r6.binding_count, " active ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r6.message_count, " messages ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", module_r8.active_count, "/", module_r8.bindings.length, " active ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r8.messages.length, " messages ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " overridden ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(8);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.saveOverride(row_r10));
    })("keydown.escape", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "button", 36);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.saveOverride(row_r10));
    });
    \u0275\u0275elementStart(3, "icon", 37);
    \u0275\u0275text(4, "check");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.startOverride(row_r10));
    });
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 40);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("title", ctx_r1.formatValue(row_r10.current_value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatValue(row_r10.current_value), " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r10));
    });
    \u0275\u0275text(1, " Restore driver value ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_6_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template, 5, 1, "div", 30)(8, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template, 5, 2, "button", 31);
    \u0275\u0275elementStart(9, "div", 32)(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("bg-warning-light", row_r10.is_overridden);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r10.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success-light", row_r10.active)("text-success", row_r10.active)("bg-base-300", !row_r10.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r10.active ? "active" : "inactive", " \xB7 ", row_r10.count, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r10.is_overridden ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editing_key() === row_r10.key ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Last update: ", ctx_r1.formatTime(row_r10.updated_at), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r10.is_overridden ? 12 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Template, 13, 15, "div", 24, _forTrack1);
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(module_r8.bindings);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "icon", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 48)(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("text-error", message_r13.error);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", message_r13.direction === "send")("text-success", message_r13.direction === "receive" && !message_r13.error);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", message_r13.direction === "send" ? "north_east" : "south_west", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r13.method, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.formatValue(message_r13.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatValue(message_r13.value), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r13.direction, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTime(message_r13.time), " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Template, 13, 12, "div", 42, _forTrack2);
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(module_r8.messages);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_Template, 2, 0)(1, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 0 : 1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Template_button_click_0_listener() {
      const module_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleGroup("module|" + module_r8.key));
    });
    \u0275\u0275elementStart(1, "icon", 17);
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_5_Template, 2, 2, "span", 21)(6, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_6_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Template, 2, 1);
  }
  if (rf & 2) {
    const module_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isExpanded("module|" + module_r8.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", module_r8.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded("module|" + module_r8.key) ? 7 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Template, 8, 5, null, null, _forTrack1);
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(system_r6.modules);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "button", 16);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Template_button_click_1_listener() {
      const system_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup("system|" + system_r6.id));
    });
    \u0275\u0275elementStart(2, "icon", 17);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_7_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_8_Template, 2, 2, "span", 21)(9, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_9_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-90", ctx_r1.isExpanded("system|" + system_r6.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", system_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(system_r6.name !== system_r6.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded("system|" + system_r6.id) ? 10 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" No observed ", ctx_r1.tab() === "bindings" ? "bindings" : "execute messages", " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 0)(1, "header", 1)(2, "button", 2);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6, " Driver Binding Viewer ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_Conditional_7_Template, 2, 0, "button", 4)(8, BindingDebugPanelComponent_Conditional_0_Conditional_8_Template, 2, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("bindings"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("executes"));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function BindingDebugPanelComponent_Conditional_0_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "icon", 10);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275repeaterCreate(19, BindingDebugPanelComponent_Conditional_0_For_20_Template, 11, 6, "section", null, _forTrack0, false, BindingDebugPanelComponent_Conditional_0_ForEmpty_21_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "footer", 13);
    \u0275\u0275text(23, " Ctrl + Alt + Shift + B \xB7 Values and overrides are local to this browser session. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" && ctx_r1.has_overrides() ? 7 : ctx_r1.tab() === "executes" && ctx_r1.execute_count() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-base-300", ctx_r1.tab() === "bindings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Bindings (", ctx_r1.binding_count(), ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-300", ctx_r1.tab() === "executes");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Executes (", ctx_r1.execute_count(), ") ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.systems());
  }
}
var binding_records = signal(
  [],
  ...ngDevMode ? [{ debugName: "binding_records" }] : (
    /* istanbul ignore next */
    []
  )
);
var execute_messages = signal(
  [],
  ...ngDevMode ? [{ debugName: "execute_messages" }] : (
    /* istanbul ignore next */
    []
  )
);
var records_by_key = /* @__PURE__ */ new Map();
var system_name_cache = /* @__PURE__ */ new Map();
var execute_id = 0;
function bindingKey(module, binding) {
  return `${module.system.id}|${module.id}|${binding.name}`;
}
function trackBinding(module, binding) {
  const key = bindingKey(module, binding);
  if (records_by_key.has(key))
    return binding;
  const source = binding.listen();
  const emit = source.set.bind(source);
  const record = {
    key,
    system_id: module.system.id,
    module_id: module.id,
    module_name: module.name,
    module_index: module.index,
    name: binding.name,
    binding,
    value: signal(source.value),
    last_update: signal(source.value === void 0 ? 0 : Date.now()),
    overridden: signal(false),
    driver_value: source.value,
    emit
  };
  records_by_key.set(key, record);
  binding_records.update((records) => [...records, record]);
  source.subscribe((value) => record.value.set(value));
  source.set = (value) => {
    record.driver_value = value;
    record.last_update.set(Date.now());
    if (!record.overridden())
      emit(value);
  };
  return binding;
}
function addExecuteMessage(message) {
  execute_messages.update((messages) => [...messages, message].slice(-250));
}
function installBindingDebugHooks() {
  const prototype = zr.prototype;
  if (prototype.__binding_debug_hooks__)
    return;
  prototype.__binding_debug_hooks__ = true;
  const variable = zr.prototype.variable;
  zr.prototype.variable = function(name) {
    return trackBinding(this, variable.call(this, name));
  };
  const binding = zr.prototype.binding;
  zr.prototype.binding = function(name) {
    return trackBinding(this, binding.call(this, name));
  };
  const execute = zr.prototype.execute;
  zr.prototype.execute = function(method, args = [], timeout_delay) {
    const id = ++execute_id;
    const details = {
      id,
      system_id: this.system.id,
      module_id: this.id,
      module_name: this.name,
      module_index: this.index,
      method
    };
    addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "send",
      value: args,
      time: Date.now(),
      error: false
    }));
    const request = execute.call(this, method, args, timeout_delay);
    request.then((value) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value,
      time: Date.now(),
      error: false
    })), (error) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value: error,
      time: Date.now(),
      error: true
    })));
    return request;
  };
}
installBindingDebugHooks();
var BindingDebugPanelComponent = class _BindingDebugPanelComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._hotkey = inject(HotkeysService);
    this._document = inject(DOCUMENT);
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = signal(
      "bindings",
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editing_key = signal(
      "",
      ...ngDevMode ? [{ debugName: "editing_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_value = signal(
      "",
      ...ngDevMode ? [{ debugName: "edit_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._refresh = signal(
      0,
      ...ngDevMode ? [{ debugName: "_refresh" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._system_names = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_system_names" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this.show())
          return void 0;
        return [
          .../* @__PURE__ */ new Set([
            ...binding_records().map((record) => record.system_id),
            ...execute_messages().map((message) => message.system_id)
          ])
        ];
      },
      loader: async ({ params }) => Object.fromEntries(await Promise.all(params.map(async (id) => {
        if (!system_name_cache.has(id)) {
          const system = await da(id).catch(() => null);
          system_name_cache.set(id, system?.display_name || system?.name || id);
        }
        return [id, system_name_cache.get(id)];
      }))),
      defaultValue: {}
    }));
    this.binding_count = computed(
      () => binding_records().length,
      ...ngDevMode ? [{ debugName: "binding_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.execute_count = computed(
      () => execute_messages().length,
      ...ngDevMode ? [{ debugName: "execute_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_overrides = computed(
      () => binding_records().some((record) => record.overridden()),
      ...ngDevMode ? [{ debugName: "has_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._dock_app = effect(
      (on_cleanup) => {
        if (!this.show())
          return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = "min(24rem, 90vw)";
        on_cleanup(() => body.style.paddingRight = padding_right);
      },
      ...ngDevMode ? [{ debugName: "_dock_app" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._poll_counts = effect(
      (on_cleanup) => {
        if (!this.show())
          return;
        this._refresh.update((value) => value + 1);
        const timer = setInterval(() => this._refresh.update((value) => value + 1), 1e3);
        on_cleanup(() => clearInterval(timer));
      },
      ...ngDevMode ? [{ debugName: "_poll_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.systems = computed(
      () => {
        this._refresh();
        const filter = this.filter().trim().toLowerCase();
        const selected_tab = this.tab();
        const system_names = this._system_names.value();
        const systems = /* @__PURE__ */ new Map();
        const get_module = (system_id, module_id, module_name, module_index) => {
          let system = systems.get(system_id);
          if (!system) {
            system = {
              id: system_id,
              name: system_names[system_id] || system_id,
              modules: [],
              binding_count: 0,
              active_count: 0,
              message_count: 0
            };
            systems.set(system_id, system);
          }
          const key = `${system_id}|${module_id}`;
          let module = system.modules.find((item) => item.key === key);
          if (!module) {
            module = {
              key,
              id: module_id,
              name: module_name,
              index: module_index,
              bindings: [],
              messages: [],
              active_count: 0
            };
            system.modules.push(module);
          }
          return { system, module };
        };
        if (selected_tab === "bindings") {
          for (const record of binding_records()) {
            const current_value = record.value();
            const haystack = `${record.system_id} ${system_names[record.system_id] || ""} ${record.module_id} ${record.name} ${this.formatValue(current_value)}`.toLowerCase();
            if (filter && !haystack.includes(filter))
              continue;
            const { system, module } = get_module(record.system_id, record.module_id, record.module_name, record.module_index);
            const count = record.binding.count;
            const row = __spreadProps(__spreadValues({}, record), {
              active: count > 0,
              count,
              current_value,
              updated_at: record.last_update(),
              is_overridden: record.overridden()
            });
            module.bindings.push(row);
            module.active_count += row.active ? 1 : 0;
            system.binding_count += 1;
            system.active_count += row.active ? 1 : 0;
          }
        } else {
          for (const message of execute_messages()) {
            const haystack = `${message.system_id} ${system_names[message.system_id] || ""} ${message.module_id} ${message.method} ${this.formatValue(message.value)}`.toLowerCase();
            if (filter && !haystack.includes(filter))
              continue;
            const { system, module } = get_module(message.system_id, message.module_id, message.module_name, message.module_index);
            module.messages.push(message);
            system.message_count += 1;
          }
        }
        return [...systems.values()].sort((a, b) => a.id.localeCompare(b.id)).map((system) => __spreadProps(__spreadValues({}, system), {
          modules: system.modules.sort((a, b) => a.id.localeCompare(b.id)).map((module) => __spreadProps(__spreadValues({}, module), {
            bindings: module.bindings.sort((a, b) => a.name.localeCompare(b.name)),
            messages: module.messages.sort((a, b) => b.time - a.time)
          }))
        }));
      },
      ...ngDevMode ? [{ debugName: "systems" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.subscription("toggle", this._hotkey.listen(["Control", "Alt", "Shift", "KeyB"], () => this.show.set(!this.show())));
  }
  isExpanded(key) {
    return !!this.filter() || !!this.expanded()[key];
  }
  toggleGroup(key) {
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), {
      [key]: !this.isExpanded(key)
    }));
  }
  startOverride(row) {
    this.editing_key.set(row.key);
    this.edit_value.set(this.formatValue(row.current_value));
  }
  saveOverride(row) {
    let value = this.edit_value();
    try {
      value = JSON.parse(value);
    } catch {
    }
    row.overridden.set(true);
    row.emit(value);
    this.editing_key.set("");
  }
  clearOverride(row) {
    const record = records_by_key.get(row.key) || row;
    record.overridden.set(false);
    record.emit(record.driver_value);
  }
  clearAllOverrides() {
    for (const row of binding_records()) {
      if (row.overridden())
        this.clearOverride(row);
    }
  }
  clearMessages() {
    execute_messages.set([]);
  }
  formatValue(value) {
    if (value === void 0)
      return "undefined";
    if (typeof value === "string")
      return value;
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  formatTime(time) {
    return time ? new Date(time).toLocaleTimeString() : "not observed";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BindingDebugPanelComponent_BaseFactory;
      return function BindingDebugPanelComponent_Factory(__ngFactoryType__) {
        return (\u0275BindingDebugPanelComponent_BaseFactory || (\u0275BindingDebugPanelComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BindingDebugPanelComponent)))(__ngFactoryType__ || _BindingDebugPanelComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BindingDebugPanelComponent, selectors: [["binding-debug-panel"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-999", "flex", "w-96", "max-w-[90vw]", "flex-col", "border-l", "shadow-xl"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "border-b", "p-2"], ["icon", "", "default", "", "matRipple", "", "aria-label", "Close binding viewer", 1, "text-sm", 3, "click"], [1, "flex-1", "px-3", "text-lg", "font-medium"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline"], ["matRipple", "", 1, "px-2", "py-1", "text-xs", "underline"], [1, "border-base-300", "bg-base-100", "grid", "grid-cols-2", "border-b", "p-1"], [1, "rounded-md", "px-3", "py-1.5", "text-sm", 3, "click"], [1, "relative", "m-1", "flex"], ["name", "binding-filter", "placeholder", "Filter systems, modules or names...", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-2", "font-mono", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex-1", "overflow-auto"], [1, "p-4", "text-center", "opacity-40"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline", 3, "click"], ["matRipple", "", 1, "px-2", "py-1", "text-xs", "underline", 3, "click"], [1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-h-9", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "font-medium"], [1, "block", "truncate", "font-mono", "text-[0.625rem]", "opacity-50"], [1, "opacity-50"], [1, "border-base-300", "bg-base-200", "sticky", "top-9", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "py-1", "pr-2", "pl-5", "text-left", "text-xs", 3, "click"], [1, "min-w-0", "flex-1", "truncate", "font-mono"], [1, "border-base-300", "border-b", "py-2", "pr-2", "pl-10", "text-xs", 3, "bg-warning-light"], [1, "border-base-300", "border-b", "py-2", "pr-2", "pl-10", "text-xs"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-mono", "font-medium"], [1, "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]"], [1, "bg-warning", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "text-black"], [1, "mt-1", "flex", "items-center", "gap-1"], [1, "border-base-300", "bg-base-100", "hover:border-info", "mt-1", "flex", "h-8", "w-full", "items-center", "rounded-md", "border", "px-2", "text-left", "font-mono", "shadow-sm", 3, "title"], [1, "mt-1", "flex", "items-center", "opacity-50"], [1, "flex-1"], [1, "underline"], ["name", "binding-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "min-w-0", "flex-1", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["icon", "", "matRipple", "", "title", "Apply override", 3, "click"], [1, "text-sm"], [1, "border-base-300", "bg-base-100", "hover:border-info", "mt-1", "flex", "h-8", "w-full", "items-center", "rounded-md", "border", "px-2", "text-left", "font-mono", "shadow-sm", 3, "click", "title"], [1, "min-w-0", "flex-1", "truncate"], [1, "ml-1", "text-sm", "opacity-40"], [1, "underline", 3, "click"], [1, "border-base-300", "grid", "grid-cols-[auto_minmax(0,1fr)_auto]", "gap-x-2", "border-b", "py-2", "pr-2", "pl-10", "text-xs", 3, "text-error"], [1, "border-base-300", "grid", "grid-cols-[auto_minmax(0,1fr)_auto]", "gap-x-2", "border-b", "py-2", "pr-2", "pl-10", "text-xs"], [1, "text-base"], [1, "min-w-0"], [1, "truncate", "font-mono", "font-medium"], [1, "truncate", "font-mono", "opacity-60", 3, "title"], [1, "text-right", "opacity-50"]], template: function BindingDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_Template, 24, 9, "aside", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatRippleModule, MatRipple, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "binding-debug-panel",
      template: `
        @if (show()) {
            <aside
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-999 flex w-96 max-w-[90vw] flex-col border-l shadow-xl"
            >
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        aria-label="Close binding viewer"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Driver Binding Viewer
                    </div>
                    @if (tab() === 'bindings' && has_overrides()) {
                        <button
                            matRipple
                            class="text-error px-2 py-1 text-xs underline"
                            (click)="clearAllOverrides()"
                        >
                            Clear overrides
                        </button>
                    } @else if (tab() === 'executes' && execute_count()) {
                        <button
                            matRipple
                            class="px-2 py-1 text-xs underline"
                            (click)="clearMessages()"
                        >
                            Clear messages
                        </button>
                    }
                </header>

                <div
                    class="border-base-300 bg-base-100 grid grid-cols-2 border-b p-1"
                >
                    <button
                        class="rounded-md px-3 py-1.5 text-sm"
                        [class.bg-base-300]="tab() === 'bindings'"
                        (click)="tab.set('bindings')"
                    >
                        Bindings ({{ binding_count() }})
                    </button>
                    <button
                        class="rounded-md px-3 py-1.5 text-sm"
                        [class.bg-base-300]="tab() === 'executes'"
                        (click)="tab.set('executes')"
                    >
                        Executes ({{ execute_count() }})
                    </button>
                </div>

                <div class="relative m-1 flex">
                    <input
                        name="binding-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter systems, modules or names..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>

                <div class="flex-1 overflow-auto">
                    @for (system of systems(); track system.id) {
                        <section>
                            <button
                                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-h-9 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                (click)="toggleGroup('system|' + system.id)"
                            >
                                <icon
                                    class="text-sm transition-transform"
                                    [class.rotate-90]="
                                        isExpanded('system|' + system.id)
                                    "
                                    >chevron_right</icon
                                >
                                <span class="min-w-0 flex-1">
                                    <span class="block truncate font-medium">
                                        {{ system.name }}
                                    </span>
                                    @if (system.name !== system.id) {
                                        <span
                                            class="block truncate font-mono text-[0.625rem] opacity-50"
                                        >
                                            {{ system.id }}
                                        </span>
                                    }
                                </span>
                                @if (tab() === 'bindings') {
                                    <span class="opacity-50">
                                        {{ system.active_count }}/{{
                                            system.binding_count
                                        }}
                                        active
                                    </span>
                                } @else {
                                    <span class="opacity-50">
                                        {{ system.message_count }} messages
                                    </span>
                                }
                            </button>

                            @if (isExpanded('system|' + system.id)) {
                                @for (
                                    module of system.modules;
                                    track module.key
                                ) {
                                    <button
                                        class="border-base-300 bg-base-200 sticky top-9 z-10 flex min-h-8 w-full items-center gap-1 border-b py-1 pr-2 pl-5 text-left text-xs"
                                        (click)="
                                            toggleGroup('module|' + module.key)
                                        "
                                    >
                                        <icon
                                            class="text-sm transition-transform"
                                            [class.rotate-90]="
                                                isExpanded(
                                                    'module|' + module.key
                                                )
                                            "
                                            >chevron_right</icon
                                        >
                                        <span
                                            class="min-w-0 flex-1 truncate font-mono"
                                        >
                                            {{ module.id }}
                                        </span>
                                        @if (tab() === 'bindings') {
                                            <span class="opacity-50">
                                                {{ module.active_count }}/{{
                                                    module.bindings.length
                                                }}
                                                active
                                            </span>
                                        } @else {
                                            <span class="opacity-50">
                                                {{ module.messages.length }}
                                                messages
                                            </span>
                                        }
                                    </button>

                                    @if (isExpanded('module|' + module.key)) {
                                        @if (tab() === 'bindings') {
                                            @for (
                                                row of module.bindings;
                                                track row.key
                                            ) {
                                                <div
                                                    class="border-base-300 border-b py-2 pr-2 pl-10 text-xs"
                                                    [class.bg-warning-light]="
                                                        row.is_overridden
                                                    "
                                                >
                                                    <div
                                                        class="flex min-w-0 items-center gap-2"
                                                    >
                                                        <span
                                                            class="min-w-0 flex-1 truncate font-mono font-medium"
                                                        >
                                                            {{ row.name }}
                                                        </span>
                                                        <span
                                                            class="rounded-sm px-1.5 py-0.5 text-[0.625rem]"
                                                            [class.bg-success-light]="
                                                                row.active
                                                            "
                                                            [class.text-success]="
                                                                row.active
                                                            "
                                                            [class.bg-base-300]="
                                                                !row.active
                                                            "
                                                        >
                                                            {{
                                                                row.active
                                                                    ? 'active'
                                                                    : 'inactive'
                                                            }}
                                                            \xB7 {{ row.count }}
                                                        </span>
                                                        @if (
                                                            row.is_overridden
                                                        ) {
                                                            <span
                                                                class="bg-warning rounded-sm px-1.5 py-0.5 text-[0.625rem] text-black"
                                                            >
                                                                overridden
                                                            </span>
                                                        }
                                                    </div>

                                                    @if (
                                                        editing_key() ===
                                                        row.key
                                                    ) {
                                                        <div
                                                            class="mt-1 flex items-center gap-1"
                                                        >
                                                            <input
                                                                name="binding-value"
                                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 min-w-0 flex-1 rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                                [(ngModel)]="
                                                                    edit_value
                                                                "
                                                                (keydown.enter)="
                                                                    saveOverride(
                                                                        row
                                                                    )
                                                                "
                                                                (keydown.escape)="
                                                                    editing_key.set(
                                                                        ''
                                                                    )
                                                                "
                                                            />
                                                            <button
                                                                icon
                                                                matRipple
                                                                title="Apply override"
                                                                (click)="
                                                                    saveOverride(
                                                                        row
                                                                    )
                                                                "
                                                            >
                                                                <icon
                                                                    class="text-sm"
                                                                    >check</icon
                                                                >
                                                            </button>
                                                        </div>
                                                    } @else {
                                                        <button
                                                            class="border-base-300 bg-base-100 hover:border-info mt-1 flex h-8 w-full items-center rounded-md border px-2 text-left font-mono shadow-sm"
                                                            [title]="
                                                                formatValue(
                                                                    row.current_value
                                                                )
                                                            "
                                                            (click)="
                                                                startOverride(
                                                                    row
                                                                )
                                                            "
                                                        >
                                                            <span
                                                                class="min-w-0 flex-1 truncate"
                                                            >
                                                                {{
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                }}
                                                            </span>
                                                            <icon
                                                                class="ml-1 text-sm opacity-40"
                                                                >edit</icon
                                                            >
                                                        </button>
                                                    }

                                                    <div
                                                        class="mt-1 flex items-center opacity-50"
                                                    >
                                                        <span class="flex-1">
                                                            Last update:
                                                            {{
                                                                formatTime(
                                                                    row.updated_at
                                                                )
                                                            }}
                                                        </span>
                                                        @if (
                                                            row.is_overridden
                                                        ) {
                                                            <button
                                                                class="underline"
                                                                (click)="
                                                                    clearOverride(
                                                                        row
                                                                    )
                                                                "
                                                            >
                                                                Restore driver
                                                                value
                                                            </button>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        } @else {
                                            @for (
                                                message of module.messages;
                                                track message.direction +
                                                    message.id
                                            ) {
                                                <div
                                                    class="border-base-300 grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-2 border-b py-2 pr-2 pl-10 text-xs"
                                                    [class.text-error]="
                                                        message.error
                                                    "
                                                >
                                                    <icon
                                                        class="text-base"
                                                        [class.text-info]="
                                                            message.direction ===
                                                            'send'
                                                        "
                                                        [class.text-success]="
                                                            message.direction ===
                                                                'receive' &&
                                                            !message.error
                                                        "
                                                    >
                                                        {{
                                                            message.direction ===
                                                            'send'
                                                                ? 'north_east'
                                                                : 'south_west'
                                                        }}
                                                    </icon>
                                                    <div class="min-w-0">
                                                        <div
                                                            class="truncate font-mono font-medium"
                                                        >
                                                            {{ message.method }}
                                                        </div>
                                                        <div
                                                            class="truncate font-mono opacity-60"
                                                            [title]="
                                                                formatValue(
                                                                    message.value
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                formatValue(
                                                                    message.value
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="text-right opacity-50"
                                                    >
                                                        <div>
                                                            {{
                                                                message.direction
                                                            }}
                                                        </div>
                                                        <div>
                                                            {{
                                                                formatTime(
                                                                    message.time
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                        </section>
                    } @empty {
                        <div class="p-4 text-center opacity-40">
                            No observed
                            {{
                                tab() === 'bindings'
                                    ? 'bindings'
                                    : 'execute messages'
                            }}
                        </div>
                    }
                </div>

                <footer
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Ctrl + Alt + Shift + B \xB7 Values and overrides are local to
                    this browser session.
                </footer>
            </aside>
        }
    `,
      imports: [FormsModule, MatRippleModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BindingDebugPanelComponent, { className: "BindingDebugPanelComponent", filePath: "libs/components/src/lib/binding-debug-panel.component.ts", lineNumber: 600 });
})();

// libs/components/src/lib/settings-debug-panel.component.ts
var _c0 = (a0) => ({ zones: a0 });
var _forTrack02 = ($index, $item) => $item.key;
var _forTrack12 = ($index, $item) => $item.type + $item.id;
function SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyOverrides());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "delete_sweep");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.overridden, " overridden ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Template_button_click_0_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(group_r5.name));
    });
    \u0275\u0275elementStart(1, "icon", 18);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Conditional_7_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.filter() || ctx_r1.expanded()[group_r5.name]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", group_r5.count, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.overridden ? 7 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", row_r6.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.description, " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", option_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8.label, " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 29);
    \u0275\u0275listener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectValue(row_r6, $event));
    });
    \u0275\u0275repeaterCreate(1, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_For_2_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Conditional_3_Template, 3, 0, "button", 31);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", row_r6.value);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.overridden ? 3 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 33);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 33);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 39);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleValue(row_r6));
    });
    \u0275\u0275element(2, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", row_r6.value)("bg-base-300", !row_r6.value);
    \u0275\u0275property("title", row_r6.display);
    \u0275\u0275advance();
    \u0275\u0275classProp("translate-x-4", row_r6.value);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEdit(row_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(row_r6.display ? "opacity-80" : "italic opacity-40");
    \u0275\u0275property("title", row_r6.display || "unset");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.display || "unset", " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_0_Template, 3, 7, "div", 37)(1, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_1_Template, 2, 4, "div", 38);
    \u0275\u0275conditionalCreate(2, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_2_Template, 3, 0, "button", 31);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r6.control === "toggle" ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.overridden ? 2 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26)(6, "icon", 27);
    \u0275\u0275text(7, "info");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Conditional_8_Template, 2, 2, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Template, 4, 2)(10, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template, 4, 1)(11, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template, 4, 1)(12, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_34_0;
    const row_r6 = ctx.$implicit;
    const entry_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const zone_tooltip_r16 = \u0275\u0275reference(3);
    \u0275\u0275classProp("pl-8", entry_r15.grouped)("pl-2", !entry_r15.grouped)("bg-warning-light", row_r6.overridden);
    \u0275\u0275advance();
    \u0275\u0275classProp("col-span-3", row_r6.control !== "toggle")("pb-1", row_r6.control !== "toggle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("content", zone_tooltip_r16)("data", \u0275\u0275pureFunction1(18, _c0, row_r6.zones))("hover", true)("backdrop", false)("xOffset", 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r6.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_34_0 = row_r6.control === "select" || ctx_r1.editing_key() === row_r6.key ? row_r6.control : "") === "select" ? 9 : tmp_34_0 === "number" ? 10 : tmp_34_0 === "text" ? 11 : 12);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275conditionalCreate(1, SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Template, 8, 5, "button", 15);
    \u0275\u0275repeaterCreate(2, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Template, 13, 20, "div", 16, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const entry_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = entry_r15.header) ? 1 : -1, tmp_12_0);
    \u0275\u0275advance();
    \u0275\u0275repeater(entry_r15.rows);
  }
}
function SettingsDebugPanelComponent_Conditional_0_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, " No matching settings ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 1)(1, "header", 2)(2, "button", 3);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6, " Settings Viewer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSetting());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template, 6, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "icon", 9);
    \u0275\u0275text(15, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275repeaterCreate(17, SettingsDebugPanelComponent_Conditional_0_For_18_Template, 4, 1, "section", null, \u0275\u0275repeaterTrackByIndex, false, SettingsDebugPanelComponent_Conditional_0_ForEmpty_19_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21, " Click a value to override it. Text values are parsed as JSON, falling back to plain strings. Overrides are stored locally in this browser. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.has_overrides() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.entries());
  }
}
function SettingsDebugPanelComponent_ng_template_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", zone_r17.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r17.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r17.type, " ");
  }
}
function SettingsDebugPanelComponent_ng_template_2_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " No zone metadata value ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2, " Setting sources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275repeaterCreate(4, SettingsDebugPanelComponent_ng_template_2_For_5_Template, 8, 3, "div", 45, _forTrack12, false, SettingsDebugPanelComponent_ng_template_2_ForEmpty_6_Template, 2, 0, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zones_r18 = ctx.zones;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(zones_r18);
  }
}
function flattenKeys(map, prefix, keys) {
  for (const key in map) {
    const full_key = prefix ? `${prefix}.${key}` : key;
    const value = map[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenKeys(value, full_key, keys);
    } else
      keys.add(full_key);
  }
}
function hasSetting(map, key) {
  let value = map;
  for (const part of key.slice(4).split("."))
    value = value?.[part];
  return value != null;
}
function optionLabel(value) {
  const label = `${value}`.replace(/[_-]+/g, " ");
  return label.charAt(0).toUpperCase() + label.slice(1);
}
function resolveRef(root, node) {
  const ref = node?.["$ref"];
  if (!ref?.startsWith("#/"))
    return node;
  let target = root;
  for (const part of ref.slice(2).split("/"))
    target = target?.[part];
  return target || node;
}
function schemaNode(root, key) {
  if (!root || !key.startsWith("app."))
    return null;
  let node = root;
  for (const part of key.slice(4).split(".")) {
    node = resolveRef(root, node)?.properties?.[part];
    if (!node)
      return null;
  }
  return resolveRef(root, node);
}
function flattenSchemaKeys(root, node, prefix, keys, depth = 0) {
  if (depth > 8)
    return;
  node = resolveRef(root, node);
  if (!node?.properties) {
    if (prefix)
      keys.add(prefix);
    return;
  }
  for (const key in node.properties) {
    flattenSchemaKeys(root, node.properties[key], prefix ? `${prefix}.${key}` : key, keys, depth + 1);
  }
}
var SettingsDebugPanelComponent = class _SettingsDebugPanelComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._hotkey = inject(HotkeysService);
    this._org = inject(OrganisationService);
    this._document = inject(DOCUMENT);
    this._clipboard = inject(Clipboard);
    this.schema = input(
      null,
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._dock_app = effect(
      (on_cleanup) => {
        if (!this.show())
          return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = "min(24rem, 90vw)";
        on_cleanup(() => body.style.paddingRight = padding_right);
      },
      ...ngDevMode ? [{ debugName: "_dock_app" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editing_key = signal(
      "",
      ...ngDevMode ? [{ debugName: "editing_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_value = "";
    this.has_overrides = computed(
      () => Object.keys(this._settings.debug_overrides()).length > 0,
      ...ngDevMode ? [{ debugName: "has_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rows = computed(
      () => {
        const schema = this.schema();
        const debug_overrides = this._settings.debug_overrides();
        const keys = /* @__PURE__ */ new Set();
        flattenKeys({ app: DEFAULT_SETTINGS.app }, "", keys);
        for (const layer of this._settings.overrides()) {
          flattenKeys({ app: layer }, "", keys);
        }
        if (schema)
          flattenSchemaKeys(schema, schema, "app", keys);
        for (const key in debug_overrides)
          keys.add(key);
        const search = this.filter().toLowerCase();
        return [...keys].filter((key) => key.slice(4).toLowerCase().includes(search)).sort().map((key) => {
          const node = schemaNode(schema, key);
          const value = this._settings.get(key);
          let control = "text";
          if (node?.enum?.length)
            control = "select";
          else if (node?.type === "boolean" || typeof value === "boolean") {
            control = "toggle";
          } else if (node?.type === "number" || node?.type === "integer" || typeof value === "number") {
            control = "number";
          }
          return {
            key,
            label: key.slice(4),
            value,
            display: JSON.stringify(value) ?? "",
            overridden: key in debug_overrides,
            description: node?.description || "",
            zones: this._zoneTooltip(key),
            control,
            options: node?.enum?.map((value2, index) => ({
              value: value2,
              label: node.enumNames?.[index] || optionLabel(value2)
            }))
          };
        });
      },
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.entries = computed(
      () => {
        const show_all = !!this.filter();
        const expanded = this.expanded();
        const entries = [];
        let entry = null;
        for (const row of this.rows()) {
          const index = row.label.indexOf(".");
          if (index < 0) {
            entry = null;
            entries.push({ rows: [row], grouped: false });
            continue;
          }
          const group = row.label.slice(0, index);
          if (!entry?.header || entry.header.name !== group) {
            entry = {
              header: { name: group, count: 0, overridden: 0 },
              rows: [],
              grouped: true
            };
            entries.push(entry);
          }
          entry.header.count += 1;
          if (row.overridden)
            entry.header.overridden += 1;
          if (show_all || expanded[group]) {
            entry.rows.push(__spreadProps(__spreadValues({}, row), {
              label: row.label.slice(index + 1)
            }));
          }
        }
        return entries;
      },
      ...ngDevMode ? [{ debugName: "entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  _zoneTooltip(key) {
    const zones = [];
    const add_zone = (type2, id, name, settings) => {
      if (!id || !settings.some((_) => hasSetting(_, key)))
        return;
      zones.push({ type: type2, id, name: name || id });
    };
    for (const [id, settings] of Object.entries(this._org.building_settings)) {
      const building = this._org.buildings.find((_) => _.id === id);
      add_zone("Building", id, building?.display_name || building?.name || "", [settings]);
    }
    for (const [id, settings] of Object.entries(this._org.region_settings)) {
      const region = this._org.regions.find((_) => _.id === id);
      add_zone("Region", id, region?.display_name || region?.name || "", [
        settings
      ]);
    }
    const organisation = this._org.organisation;
    add_zone("ORG", organisation.id, organisation.name, this._org.settings);
    return zones;
  }
  toggleGroup(name) {
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), { [name]: !state[name] }));
  }
  ngOnInit() {
    this.subscription("toggle", this._hotkey.listen(["Control", "Alt", "Shift", "KeyS"], () => this.show.set(!this.show())));
  }
  startEdit(row) {
    this.editing_key.set(row.key);
    this.edit_value = row.control === "text" ? row.display : `${row.value ?? ""}`;
  }
  toggleValue(row) {
    this._settings.setDebugOverride(row.key, !row.value);
  }
  selectValue(row, value) {
    this._settings.setDebugOverride(row.key, value);
  }
  saveEdit() {
    const key = this.editing_key();
    const row = this.rows().find((_) => _.key === key);
    if (!row)
      return;
    let value = this.edit_value;
    if (row.control === "number") {
      value = parseFloat(this.edit_value);
      if (isNaN(value))
        return;
    } else if (row.control === "text") {
      try {
        value = JSON.parse(this.edit_value);
      } catch {
      }
    }
    this._settings.setDebugOverride(key, value);
    this.editing_key.set("");
  }
  clearOverride(key) {
    this._settings.setDebugOverride(key, void 0);
  }
  addSetting() {
    const prompt = this._document.defaultView?.prompt.bind(this._document.defaultView);
    const name = prompt?.("Setting key", "app.")?.trim();
    if (!name || name === "app.")
      return;
    const input2 = prompt?.("Setting value (JSON or plain text)", "");
    if (input2 == null)
      return;
    let value = input2;
    try {
      value = JSON.parse(input2);
    } catch {
    }
    const key = name.startsWith("app.") ? name : `app.${name}`;
    this._settings.setDebugOverride(key, value);
  }
  copyOverrides() {
    this._clipboard.copy(JSON.stringify(this._settings.debug_overrides(), null, 2));
  }
  clearAll() {
    this._settings.clearDebugOverrides();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SettingsDebugPanelComponent_BaseFactory;
      return function SettingsDebugPanelComponent_Factory(__ngFactoryType__) {
        return (\u0275SettingsDebugPanelComponent_BaseFactory || (\u0275SettingsDebugPanelComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SettingsDebugPanelComponent)))(__ngFactoryType__ || _SettingsDebugPanelComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsDebugPanelComponent, selectors: [["settings-debug-panel"]], inputs: { schema: [1, "schema"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [["zone_tooltip", ""], [1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-998", "flex", "w-96", "max-w-[90vw]", "flex-col", "border-l", "shadow-xl"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "border-b", "p-2"], ["icon", "", "default", "", "matRipple", "", 1, "text-sm", 3, "click"], [1, "flex-1", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "gap-2", "text-xs"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Add setting", "matTooltipPosition", "below", "aria-label", "Add setting", 3, "click"], [1, "relative", "m-1", "flex"], ["name", "setting-filter", "placeholder", "Filter settings...", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-2", "font-mono", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex-1", "overflow-auto"], [1, "p-4", "text-center", "opacity-30"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Copy overrides", "matTooltipPosition", "below", "aria-label", "Copy overrides", 3, "click"], ["icon", "", "default", "", "error", "", "matRipple", "", "matTooltip", "Clear all overrides", "matTooltipPosition", "below", "aria-label", "Clear all overrides", 3, "click"], [1, "border-base-300", "bg-base-100", "hover:bg-base-100", "sticky", "top-0", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs"], [1, "border-base-300", "grid", "min-h-8", "grid-cols-[minmax(0,1fr)_auto_auto]", "items-center", "border-b", "py-1", "pr-2", "text-xs", 3, "pl-8", "pl-2", "bg-warning-light"], [1, "border-base-300", "bg-base-100", "hover:bg-base-100", "sticky", "top-0", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "font-mono"], [1, "opacity-40"], [1, "bg-warning-light", "rounded-sm", "px-1", "text-[0.65rem]", "text-black"], [1, "border-base-300", "grid", "min-h-8", "grid-cols-[minmax(0,1fr)_auto_auto]", "items-center", "border-b", "py-1", "pr-2", "text-xs"], [1, "min-w-0", "pr-2"], [1, "flex", "min-w-0", "items-center", "gap-1", "font-mono"], [1, "truncate"], ["customTooltip", "", "xPosition", "start", "yPosition", "center", 1, "shrink-0", 3, "content", "data", "hover", "backdrop", "xOffset"], [1, "text-sm", "opacity-60"], [1, "truncate", "text-[0.65rem]", "opacity-60", 3, "title"], ["name", "setting-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["icon", "", "matRipple", "", "title", "Clear override"], ["icon", "", "matRipple", "", "title", "Clear override", 3, "click"], [1, "text-sm"], ["name", "setting-value", "type", "number", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["icon", "", "matRipple", "", "title", "Save override", 3, "click"], ["name", "setting-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], [1, "flex"], [1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-8", "w-full", "cursor-pointer", "items-center", "truncate", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "transition-colors", 3, "class", "title"], [1, "relative", "h-4", "w-8", "rounded-full", "transition-colors", 3, "click", "title"], [1, "absolute", "top-0.5", "left-0.5", "h-3", "w-3", "rounded-full", "bg-white", "shadow-sm", "transition-transform"], [1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-8", "w-full", "cursor-pointer", "items-center", "truncate", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "transition-colors", 3, "click", "title"], [1, "border-base-300", "bg-base-100", "text-base-content", "min-w-64", "rounded-lg", "border", "p-2", "shadow-lg"], [1, "border-base-300", "border-b", "px-1", "pb-2", "text-base", "font-medium"], [1, "flex", "flex-col", "gap-1", "pt-2"], [1, "bg-base-200", "flex", "items-start", "gap-2", "rounded-sm", "p-2"], [1, "px-1", "py-2", "text-xs", "opacity-60"], [1, "w-1/2", "min-w-0", "flex-1"], [1, "truncate", "text-base", "font-medium"], [1, "truncate", "font-mono", "text-[0.625rem]", "opacity-60"], [1, "bg-base-300", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "font-medium"]], template: function SettingsDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_Template, 22, 3, "aside", 1);
        \u0275\u0275element(1, "binding-debug-panel");
        \u0275\u0275template(2, SettingsDebugPanelComponent_ng_template_2_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, dependencies: [
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      BindingDebugPanelComponent,
      CustomTooltipComponent,
      IconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "settings-debug-panel",
      template: `
        @if (show()) {
            <aside
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-998 flex w-96 max-w-[90vw] flex-col border-l shadow-xl"
            >
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Settings Viewer
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <button
                            icon
                            default
                            matRipple
                            matTooltip="Add setting"
                            matTooltipPosition="below"
                            aria-label="Add setting"
                            (click)="addSetting()"
                        >
                            <icon>add</icon>
                        </button>
                        @if (has_overrides()) {
                            <button
                                icon
                                default
                                matRipple
                                matTooltip="Copy overrides"
                                matTooltipPosition="below"
                                aria-label="Copy overrides"
                                (click)="copyOverrides()"
                            >
                                <icon>content_copy</icon>
                            </button>
                            <button
                                icon
                                default
                                error
                                matRipple
                                matTooltip="Clear all overrides"
                                matTooltipPosition="below"
                                aria-label="Clear all overrides"
                                (click)="clearAll()"
                            >
                                <icon>delete_sweep</icon>
                            </button>
                        }
                    </div>
                </header>
                <div class="relative m-1 flex">
                    <input
                        name="setting-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter settings..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>
                <div class="flex-1 overflow-auto">
                    @for (entry of entries(); track $index) {
                        <section>
                            @if (entry.header; as group) {
                                <button
                                    class="border-base-300 bg-base-100 hover:bg-base-100 sticky top-0 z-10 flex min-h-8 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                    (click)="toggleGroup(group.name)"
                                >
                                    <icon
                                        class="text-sm transition-transform"
                                        [class.rotate-90]="
                                            filter() || expanded()[group.name]
                                        "
                                    >
                                        chevron_right
                                    </icon>
                                    <span class="font-mono">{{
                                        group.name
                                    }}</span>
                                    <span class="opacity-40">
                                        ({{ group.count }})
                                    </span>
                                    @if (group.overridden) {
                                        <span
                                            class="bg-warning-light rounded-sm px-1 text-[0.65rem] text-black"
                                        >
                                            {{ group.overridden }} overridden
                                        </span>
                                    }
                                </button>
                            }
                            @for (row of entry.rows; track row.key) {
                                <div
                                    class="border-base-300 grid min-h-8 grid-cols-[minmax(0,1fr)_auto_auto] items-center border-b py-1 pr-2 text-xs"
                                    [class.pl-8]="entry.grouped"
                                    [class.pl-2]="!entry.grouped"
                                    [class.bg-warning-light]="row.overridden"
                                >
                                    <div
                                        class="min-w-0 pr-2"
                                        [class.col-span-3]="
                                            row.control !== 'toggle'
                                        "
                                        [class.pb-1]="row.control !== 'toggle'"
                                    >
                                        <div
                                            class="flex min-w-0 items-center gap-1 font-mono"
                                        >
                                            <span class="truncate">
                                                {{ row.label }}
                                            </span>
                                            <span
                                                customTooltip
                                                class="shrink-0"
                                                [content]="zone_tooltip"
                                                [data]="{ zones: row.zones }"
                                                [hover]="true"
                                                [backdrop]="false"
                                                xPosition="start"
                                                yPosition="center"
                                                [xOffset]="20"
                                            >
                                                <icon class="text-sm opacity-60"
                                                    >info</icon
                                                >
                                            </span>
                                        </div>
                                        @if (row.description) {
                                            <div
                                                class="truncate text-[0.65rem] opacity-60"
                                                [title]="row.description"
                                            >
                                                {{ row.description }}
                                            </div>
                                        }
                                    </div>
                                    @switch (
                                        row.control === 'select' ||
                                        editing_key() === row.key
                                            ? row.control
                                            : ''
                                    ) {
                                        @case ('select') {
                                            <select
                                                name="setting-value"
                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                [ngModel]="row.value"
                                                (ngModelChange)="
                                                    selectValue(row, $event)
                                                "
                                            >
                                                @for (
                                                    option of row.options;
                                                    track $index
                                                ) {
                                                    <option
                                                        [ngValue]="option.value"
                                                    >
                                                        {{ option.label }}
                                                    </option>
                                                }
                                            </select>
                                            @if (row.overridden) {
                                                <button
                                                    icon
                                                    matRipple
                                                    title="Clear override"
                                                    (click)="
                                                        clearOverride(row.key)
                                                    "
                                                >
                                                    <icon class="text-sm"
                                                        >undo</icon
                                                    >
                                                </button>
                                            }
                                        }
                                        @case ('number') {
                                            <input
                                                name="setting-value"
                                                type="number"
                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                [(ngModel)]="edit_value"
                                                (keydown.enter)="saveEdit()"
                                                (keydown.escape)="
                                                    editing_key.set('')
                                                "
                                            />
                                            <button
                                                icon
                                                matRipple
                                                title="Save override"
                                                (click)="saveEdit()"
                                            >
                                                <icon class="text-sm"
                                                    >check</icon
                                                >
                                            </button>
                                        }
                                        @case ('text') {
                                            <input
                                                name="setting-value"
                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                [(ngModel)]="edit_value"
                                                (keydown.enter)="saveEdit()"
                                                (keydown.escape)="
                                                    editing_key.set('')
                                                "
                                            />
                                            <button
                                                icon
                                                matRipple
                                                title="Save override"
                                                (click)="saveEdit()"
                                            >
                                                <icon class="text-sm"
                                                    >check</icon
                                                >
                                            </button>
                                        }
                                        @default {
                                            @if (row.control === 'toggle') {
                                                <div class="flex">
                                                    <button
                                                        class="relative h-4 w-8 rounded-full transition-colors"
                                                        [class.bg-info]="
                                                            row.value
                                                        "
                                                        [class.bg-base-300]="
                                                            !row.value
                                                        "
                                                        [title]="row.display"
                                                        (click)="
                                                            toggleValue(row)
                                                        "
                                                    >
                                                        <div
                                                            class="absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-transform"
                                                            [class.translate-x-4]="
                                                                row.value
                                                            "
                                                        ></div>
                                                    </button>
                                                </div>
                                            } @else {
                                                <div
                                                    class="border-base-300 bg-base-100 hover:border-info flex h-8 w-full cursor-pointer items-center truncate rounded-md border px-2 font-mono shadow-sm transition-colors"
                                                    [class]="
                                                        row.display
                                                            ? 'opacity-80'
                                                            : 'italic opacity-40'
                                                    "
                                                    [title]="
                                                        row.display || 'unset'
                                                    "
                                                    (click)="startEdit(row)"
                                                >
                                                    {{ row.display || 'unset' }}
                                                </div>
                                            }
                                            @if (row.overridden) {
                                                <button
                                                    icon
                                                    matRipple
                                                    title="Clear override"
                                                    (click)="
                                                        clearOverride(row.key)
                                                    "
                                                >
                                                    <icon class="text-sm"
                                                        >undo</icon
                                                    >
                                                </button>
                                            }
                                        }
                                    }
                                </div>
                            }
                        </section>
                    } @empty {
                        <div class="p-4 text-center opacity-30">
                            No matching settings
                        </div>
                    }
                </div>
                <div
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Click a value to override it. Text values are parsed as
                    JSON, falling back to plain strings. Overrides are stored
                    locally in this browser.
                </div>
            </aside>
        }
        <binding-debug-panel />
        <ng-template #zone_tooltip let-zones="zones">
            <div
                class="border-base-300 bg-base-100 text-base-content min-w-64 rounded-lg border p-2 shadow-lg"
            >
                <div
                    class="border-base-300 border-b px-1 pb-2 text-base font-medium"
                >
                    Setting sources
                </div>
                <div class="flex flex-col gap-1 pt-2">
                    @for (zone of zones; track zone.type + zone.id) {
                        <div
                            class="bg-base-200 flex items-start gap-2 rounded-sm p-2"
                        >
                            <div class="w-1/2 min-w-0 flex-1">
                                <div class="truncate text-base font-medium">
                                    {{ zone.name }}
                                </div>
                                <div
                                    class="truncate font-mono text-[0.625rem] opacity-60"
                                >
                                    {{ zone.id }}
                                </div>
                            </div>
                            <span
                                class="bg-base-300 rounded-sm px-1.5 py-0.5 text-[0.625rem] font-medium"
                            >
                                {{ zone.type }}
                            </span>
                        </div>
                    } @empty {
                        <div class="px-1 py-2 text-xs opacity-60">
                            No zone metadata value
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        MatTooltipModule,
        BindingDebugPanelComponent,
        CustomTooltipComponent,
        IconComponent
      ]
    }]
  }], null, { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelComponent, { className: "SettingsDebugPanelComponent", filePath: "libs/components/src/lib/settings-debug-panel.component.ts", lineNumber: 477 });
})();

// libs/components/src/lib/unauthorised.component.ts
var _c02 = () => ["/"];
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
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c02));
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
    return !!X();
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
    const online = await this.waitForBackend(hi(Kr(), Boolean));
    if (!online)
      return null;
    let user = null;
    const loaded = await this.waitForBackend(firstTruthyValueFrom(current_user).then((_) => user = _));
    return loaded ? user : null;
  }
  async waitForBackend(promise) {
    if (this._settings.get("app.offline_boot")) {
      return resolvedWithin(promise, OFFLINE_FALLBACK_DELAY);
    }
    await promise;
    return true;
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
    const value = It()?.config?.["use_group_subsystem_access"];
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

// libs/mocks/src/lib/api/common.mock.ts
var DOMAIN = "place.tech";

// libs/mocks/src/lib/api/users.data.ts
var REALISTIC_STAFF_PROFILES = [
  {
    first_name: "Sarah",
    last_name: "Chen",
    department: "Engineering",
    title: "Senior Software Engineer",
    location: "Sydney"
  },
  {
    first_name: "Michael",
    last_name: "Rodriguez",
    department: "Product",
    title: "Product Manager",
    location: "Melbourne"
  },
  {
    first_name: "Emily",
    last_name: "Johnson",
    department: "Design",
    title: "UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "David",
    last_name: "Park",
    department: "Engineering",
    title: "Technical Lead",
    location: "Sydney"
  },
  {
    first_name: "Jessica",
    last_name: "Thompson",
    department: "Marketing",
    title: "Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Alex",
    last_name: "Kumar",
    department: "Sales",
    title: "Account Executive",
    location: "Adelaide"
  },
  {
    first_name: "Rachel",
    last_name: "Williams",
    department: "Human Resources",
    title: "HR Business Partner",
    location: "Sydney"
  },
  {
    first_name: "James",
    last_name: "O'Connor",
    department: "Finance",
    title: "Financial Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Lisa",
    last_name: "Zhang",
    department: "Operations",
    title: "Operations Manager",
    location: "Sydney"
  },
  {
    first_name: "Tom",
    last_name: "Mitchell",
    department: "Engineering",
    title: "DevOps Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Amanda",
    last_name: "Foster",
    department: "Customer Success",
    title: "Customer Success Manager",
    location: "Melbourne"
  },
  {
    first_name: "Chris",
    last_name: "Anderson",
    department: "IT",
    title: "IT Administrator",
    location: "Perth"
  },
  {
    first_name: "Priya",
    last_name: "Sharma",
    department: "Research & Development",
    title: "Research Scientist",
    location: "Sydney"
  },
  {
    first_name: "Mark",
    last_name: "Davis",
    department: "Sales",
    title: "Sales Manager",
    location: "Adelaide"
  },
  {
    first_name: "Sophie",
    last_name: "Taylor",
    department: "Design",
    title: "Senior UX Designer",
    location: "Melbourne"
  },
  {
    first_name: "Daniel",
    last_name: "Lee",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Olivia",
    last_name: "Brown",
    department: "Marketing",
    title: "Content Creator",
    location: "Sydney"
  },
  {
    first_name: "Ryan",
    last_name: "Wilson",
    department: "Product",
    title: "Business Analyst",
    location: "Perth"
  },
  {
    first_name: "Grace",
    last_name: "Martinez",
    department: "Legal",
    title: "Legal Counsel",
    location: "Melbourne"
  },
  {
    first_name: "Ben",
    last_name: "Clarke",
    department: "Engineering",
    title: "Quality Assurance Engineer",
    location: "Sydney"
  },
  // Additional staff profiles to reach 80 total
  {
    first_name: "Natasha",
    last_name: "Petrov",
    department: "Engineering",
    title: "Senior Developer",
    location: "Melbourne"
  },
  {
    first_name: "Carlos",
    last_name: "Silva",
    department: "Sales",
    title: "Sales Manager",
    location: "Sydney"
  },
  {
    first_name: "Maya",
    last_name: "Patel",
    department: "Design",
    title: "UI/UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "Jacob",
    last_name: "Nielsen",
    department: "Marketing",
    title: "Digital Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Isabella",
    last_name: "Romano",
    department: "Human Resources",
    title: "HR Manager",
    location: "Adelaide"
  },
  {
    first_name: "Hassan",
    last_name: "Ahmed",
    department: "Finance",
    title: "Senior Financial Analyst",
    location: "Sydney"
  },
  {
    first_name: "Elena",
    last_name: "Popov",
    department: "Operations",
    title: "Operations Coordinator",
    location: "Melbourne"
  },
  {
    first_name: "Nathan",
    last_name: "Campbell",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Zoe",
    last_name: "Walker",
    department: "Product",
    title: "Product Owner",
    location: "Perth"
  },
  {
    first_name: "Adrian",
    last_name: "Kowalski",
    department: "IT",
    title: "Systems Administrator",
    location: "Adelaide"
  },
  {
    first_name: "Samantha",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Success Specialist",
    location: "Sydney"
  },
  {
    first_name: "Lucas",
    last_name: "Garcia",
    department: "Research & Development",
    title: "Data Scientist",
    location: "Melbourne"
  },
  {
    first_name: "Aisha",
    last_name: "Johnson",
    department: "Legal",
    title: "Compliance Officer",
    location: "Brisbane"
  },
  {
    first_name: "Marcus",
    last_name: "Stone",
    department: "Engineering",
    title: "Technical Lead",
    location: "Perth"
  },
  {
    first_name: "Lily",
    last_name: "Watson",
    department: "Design",
    title: "Graphic Designer",
    location: "Adelaide"
  },
  {
    first_name: "Oscar",
    last_name: "Murphy",
    department: "Sales",
    title: "Business Development Manager",
    location: "Sydney"
  },
  {
    first_name: "Chloe",
    last_name: "Edwards",
    department: "Marketing",
    title: "Marketing Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Ethan",
    last_name: "Roberts",
    department: "Finance",
    title: "Budget Analyst",
    location: "Brisbane"
  },
  {
    first_name: "Mia",
    last_name: "Turner",
    department: "Human Resources",
    title: "Talent Acquisition Specialist",
    location: "Perth"
  },
  {
    first_name: "Logan",
    last_name: "Phillips",
    department: "Operations",
    title: "Process Improvement Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Aria",
    last_name: "Cooper",
    department: "Engineering",
    title: "Frontend Developer",
    location: "Sydney"
  },
  {
    first_name: "Felix",
    last_name: "Morgan",
    department: "Product",
    title: "Product Marketing Manager",
    location: "Melbourne"
  },
  {
    first_name: "Ruby",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Account Manager",
    location: "Brisbane"
  },
  {
    first_name: "Caleb",
    last_name: "Reed",
    department: "IT",
    title: "Network Engineer",
    location: "Perth"
  },
  {
    first_name: "Luna",
    last_name: "Howard",
    department: "Design",
    title: "Product Designer",
    location: "Adelaide"
  },
  {
    first_name: "Mason",
    last_name: "Cox",
    department: "Research & Development",
    title: "Machine Learning Engineer",
    location: "Sydney"
  },
  {
    first_name: "Hazel",
    last_name: "Ward",
    department: "Legal",
    title: "Contract Manager",
    location: "Melbourne"
  },
  {
    first_name: "Theo",
    last_name: "Torres",
    department: "Sales",
    title: "Account Executive",
    location: "Brisbane"
  },
  {
    first_name: "Violet",
    last_name: "Peterson",
    department: "Marketing",
    title: "Brand Manager",
    location: "Perth"
  },
  {
    first_name: "Julian",
    last_name: "Gray",
    department: "Finance",
    title: "Tax Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Nova",
    last_name: "James",
    department: "Human Resources",
    title: "Learning & Development Coordinator",
    location: "Sydney"
  },
  {
    first_name: "Blake",
    last_name: "Watson",
    department: "Operations",
    title: "Supply Chain Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ivy",
    last_name: "Brooks",
    department: "Engineering",
    title: "Backend Developer",
    location: "Brisbane"
  },
  {
    first_name: "Axel",
    last_name: "Fisher",
    department: "Product",
    title: "Technical Writer",
    location: "Perth"
  },
  {
    first_name: "Sage",
    last_name: "Bennett",
    department: "Customer Success",
    title: "Implementation Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Kai",
    last_name: "Powell",
    department: "IT",
    title: "Security Analyst",
    location: "Sydney"
  },
  {
    first_name: "Raven",
    last_name: "Long",
    department: "Design",
    title: "Creative Director",
    location: "Melbourne"
  },
  {
    first_name: "Phoenix",
    last_name: "Hughes",
    department: "Research & Development",
    title: "Research Engineer",
    location: "Brisbane"
  },
  {
    first_name: "River",
    last_name: "Price",
    department: "Legal",
    title: "Intellectual Property Lawyer",
    location: "Perth"
  },
  {
    first_name: "Atlas",
    last_name: "Sanders",
    department: "Sales",
    title: "Regional Sales Director",
    location: "Adelaide"
  },
  {
    first_name: "Willow",
    last_name: "Ross",
    department: "Marketing",
    title: "Social Media Manager",
    location: "Sydney"
  },
  {
    first_name: "Orion",
    last_name: "Morris",
    department: "Finance",
    title: "Investment Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ember",
    last_name: "Rogers",
    department: "Human Resources",
    title: "Organizational Development Specialist",
    location: "Brisbane"
  },
  {
    first_name: "Juno",
    last_name: "Reed",
    department: "Operations",
    title: "Quality Assurance Manager",
    location: "Perth"
  },
  {
    first_name: "Zara",
    last_name: "Cook",
    department: "Engineering",
    title: "Mobile Developer",
    location: "Adelaide"
  },
  {
    first_name: "Leo",
    last_name: "Morgan",
    department: "Product",
    title: "UX Researcher",
    location: "Sydney"
  },
  {
    first_name: "Iris",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Training Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Finn",
    last_name: "Rivera",
    department: "IT",
    title: "Database Administrator",
    location: "Brisbane"
  },
  {
    first_name: "Aurora",
    last_name: "Cooper",
    department: "Design",
    title: "Motion Graphics Designer",
    location: "Perth"
  },
  {
    first_name: "Xavier",
    last_name: "Richardson",
    department: "Research & Development",
    title: "AI Research Scientist",
    location: "Adelaide"
  },
  {
    first_name: "Skye",
    last_name: "Cox",
    department: "Legal",
    title: "Privacy Officer",
    location: "Sydney"
  },
  {
    first_name: "Knox",
    last_name: "Howard",
    department: "Sales",
    title: "Enterprise Sales Manager",
    location: "Melbourne"
  },
  {
    first_name: "Luna",
    last_name: "Ward",
    department: "Marketing",
    title: "Event Marketing Manager",
    location: "Brisbane"
  },
  {
    first_name: "Sage",
    last_name: "Torres",
    department: "Finance",
    title: "Risk Analyst",
    location: "Perth"
  },
  {
    first_name: "Phoenix",
    last_name: "Peterson",
    department: "Human Resources",
    title: "Employee Relations Specialist",
    location: "Adelaide"
  },
  {
    first_name: "River",
    last_name: "Gray",
    department: "Operations",
    title: "Facilities Manager",
    location: "Sydney"
  },
  {
    first_name: "Atlas",
    last_name: "James",
    department: "Engineering",
    title: "Cloud Architect",
    location: "Melbourne"
  },
  {
    first_name: "Willow",
    last_name: "Watson",
    department: "Product",
    title: "Product Strategy Manager",
    location: "Brisbane"
  },
  {
    first_name: "Orion",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Operations Manager",
    location: "Perth"
  },
  {
    first_name: "Ember",
    last_name: "Fisher",
    department: "IT",
    title: "DevOps Manager",
    location: "Adelaide"
  },
  {
    first_name: "Juno",
    last_name: "Bennett",
    department: "Design",
    title: "Brand Designer",
    location: "Sydney"
  },
  {
    first_name: "Nova",
    last_name: "Powell",
    department: "Research & Development",
    title: "Technology Innovation Manager",
    location: "Melbourne"
  },
  {
    first_name: "Blake",
    last_name: "Long",
    department: "Legal",
    title: "Regulatory Affairs Manager",
    location: "Brisbane"
  },
  {
    first_name: "Ivy",
    last_name: "Hughes",
    department: "Sales",
    title: "Channel Partner Manager",
    location: "Perth"
  },
  {
    first_name: "Axel",
    last_name: "Price",
    department: "Marketing",
    title: "Growth Marketing Manager",
    location: "Adelaide"
  }
];
var VISITOR_PROFILES = [
  {
    first_name: "Jennifer",
    last_name: "Adams",
    company: "TechCorp Australia",
    purpose: "Business Partnership Meeting"
  },
  {
    first_name: "Robert",
    last_name: "Hayes",
    company: "Global Innovations Pty Ltd",
    purpose: "Product Demo"
  },
  {
    first_name: "Maria",
    last_name: "Gonzalez",
    company: "Digital Solutions Group",
    purpose: "Contract Negotiation"
  },
  {
    first_name: "Kevin",
    last_name: "Turner",
    company: "Innovation Labs",
    purpose: "Technical Consultation"
  },
  {
    first_name: "Catherine",
    last_name: "Moore",
    company: "Future Systems",
    purpose: "Strategic Planning"
  },
  {
    first_name: "Steven",
    last_name: "White",
    company: "Advanced Technologies",
    purpose: "Vendor Assessment"
  },
  {
    first_name: "Nicole",
    last_name: "Campbell",
    company: "Smart Solutions Ltd",
    purpose: "Project Review"
  },
  {
    first_name: "Brian",
    last_name: "Scott",
    company: "NextGen Industries",
    purpose: "Investment Discussion"
  },
  {
    first_name: "Michelle",
    last_name: "Green",
    company: "Dynamic Enterprises",
    purpose: "Collaboration Meeting"
  },
  {
    first_name: "Jason",
    last_name: "Hill",
    company: "Creative Solutions Inc",
    purpose: "Design Review"
  },
  {
    first_name: "Laura",
    last_name: "King",
    company: "Enterprise Partners",
    purpose: "Partnership Proposal"
  },
  {
    first_name: "Andrew",
    last_name: "Wright",
    company: "Strategic Consulting",
    purpose: "Business Consultation"
  },
  {
    first_name: "Rebecca",
    last_name: "Lopez",
    company: "Business Development Co",
    purpose: "Market Analysis"
  },
  {
    first_name: "Paul",
    last_name: "Young",
    company: "Market Leaders Group",
    purpose: "Industry Insights"
  },
  // Additional visitor profiles to create 20 total guests
  {
    first_name: "Douglas",
    last_name: "Chen",
    company: "Quantum Dynamics",
    purpose: "R&D Collaboration"
  },
  {
    first_name: "Victoria",
    last_name: "Singh",
    company: "Digital Innovation Hub",
    purpose: "Technology Transfer"
  },
  {
    first_name: "Timothy",
    last_name: "O'Brien",
    company: "CloudTech Solutions",
    purpose: "Infrastructure Review"
  },
  {
    first_name: "Angela",
    last_name: "Martinez",
    company: "Data Analytics Corp",
    purpose: "Analytics Partnership"
  },
  {
    first_name: "Gordon",
    last_name: "Thompson",
    company: "Venture Capital Partners",
    purpose: "Investment Evaluation"
  },
  {
    first_name: "Patricia",
    last_name: "Wilson",
    company: "Sustainability Solutions",
    purpose: "ESG Consultation"
  }
];
var ACTIVE_USER = {
  id: "current",
  name: "Sarah Chen",
  email: "sarah.chen@place.tech",
  first_name: "Sarah",
  last_name: "Chen",
  department: "Engineering",
  title: "Senior Software Engineer",
  location: "Sydney",
  groups: ["staff", "engineering", "senior"],
  sys_admin: true,
  phone: "+61 2 9876 5432",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b9ce2c62?w=150&h=150&fit=crop&crop=face"
};
var MOCK_STAFF = REALISTIC_STAFF_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase().replace(/'/g, "")}`;
  const isManager = profile.title.toLowerCase().includes("manager") || profile.title.toLowerCase().includes("lead") || profile.title.toLowerCase().includes("senior");
  return {
    id: `staff-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${DOMAIN}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    department: profile.department,
    title: profile.title,
    location: profile.location,
    groups: [
      "staff",
      profile.department.toLowerCase().replace(/\s+/g, "-"),
      ...isManager ? ["manager"] : []
    ],
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    avatar: `https://images.unsplash.com/photo-${15e11 + i * 1e6}?w=150&h=150&fit=crop&crop=face`,
    extension_data: {
      employee_id: `EMP${String(i + 1).padStart(4, "0")}`,
      start_date: new Date(2020 + predictableRandomInt(4), predictableRandomInt(12), predictableRandomInt(28) + 1).toISOString(),
      manager_id: isManager ? null : `staff-${predictableRandomInt(5) + 1}`
    }
  };
}).concat([ACTIVE_USER]);
var MOCK_GUESTS = VISITOR_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase()}`;
  const companyDomain = profile.company.toLowerCase().replace(/\s+/g, "").replace(/pty.*ltd|ltd|inc|corp|group|co/gi, "").slice(0, 12) + ".com";
  return {
    id: `guest-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${companyDomain}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    company: profile.company,
    purpose: profile.purpose,
    visit_expected: predictableRandomInt(99999) % 3 !== 0,
    // 66% expected
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    extension_data: __spreadValues(__spreadValues({
      visitor_type: predictableRandomInt(99999) % 4 === 0 ? "VIP" : "Standard",
      host_id: `staff-${predictableRandomInt(REALISTIC_STAFF_PROFILES.length) + 1}`,
      requirements: predictableRandomInt(99999) % 5 === 0 ? "Wheelchair accessible" : null,
      parking_required: predictableRandomInt(99999) % 3 === 0
    }, predictableRandomInt(99999) % 4 === 0 ? {
      vaccination_proof: {
        url: "https://fonts.gstatic.com/s/i/materialicons/verified/v11/24px.svg",
        verified: true
      }
    } : {}), predictableRandomInt(99999) % 3 === 0 ? {
      id_data: {
        url: "https://fonts.gstatic.com/s/i/materialicons/fingerprint/v12/24px.svg",
        type: "Driver License",
        verified: true
      }
    } : {})
  };
});

// libs/mocks/src/lib/api/assets.data.ts
var MOCK_CATEGORIES = [
  {
    id: "1",
    name: "Technology",
    description: "Electronic devices and computing equipment"
  },
  {
    id: "2",
    name: "Furniture",
    description: "Office furniture and workspace equipment"
  },
  {
    id: "3",
    name: "Audio Visual",
    description: "Presentation and meeting room equipment"
  },
  {
    id: "4",
    name: "Office Supplies",
    description: "Stationery and consumable items"
  },
  {
    id: "5",
    name: "Kitchen & Catering",
    description: "Kitchen appliances and catering equipment"
  },
  {
    id: "6",
    name: "Wellness & Safety",
    description: "Health, safety, and wellness equipment"
  },
  {
    id: "7",
    name: "Mobility",
    description: "Transportation and mobility aids"
  },
  {
    id: "8",
    name: "Cleaning & Maintenance",
    description: "Cleaning supplies and maintenance tools"
  },
  {
    id: "_parking_category_",
    name: "_PARKING_",
    description: "Parking spaces",
    hidden: true
  },
  {
    id: "_catering_category_",
    name: "_CATERING_",
    description: "Catering menu items",
    hidden: true
  }
];
var MOCK_PRODUCTS = [
  {
    id: "_catering_standalone_type_",
    name: "CATERING:_STANDALONE_",
    category_id: "_catering_category_",
    brand: "PlaceOS"
  },
  {
    id: "_catering_acme_type_",
    name: "CATERING:Acme Catering",
    category_id: "_catering_category_",
    brand: "PlaceOS"
  },
  // Technology
  {
    id: "1",
    name: 'iPad Pro 12.9"',
    category_id: "1",
    brand: "Apple",
    barcode: "APL-IPD-PRO-12",
    model: "MHNK3X/A",
    description: "Latest generation iPad Pro with M2 chip, perfect for presentations and digital collaboration",
    specifications: {
      screen_size: "12.9 inch",
      storage: "256GB",
      connectivity: "Wi-Fi + Cellular",
      color: "Space Gray"
    }
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    category_id: "1",
    brand: "Apple",
    barcode: "APL-IPH-14P",
    model: "MQ0G3X/A",
    description: "Professional smartphone for business communications and mobile productivity",
    specifications: {
      storage: "128GB",
      color: "Deep Purple",
      connectivity: "5G"
    }
  },
  {
    id: "3",
    name: 'MacBook Pro 16"',
    category_id: "1",
    brand: "Apple",
    barcode: "APL-MBP-16",
    model: "MK1E3X/A",
    description: "High-performance laptop for development and creative work",
    specifications: {
      processor: "M2 Pro",
      memory: "16GB",
      storage: "512GB SSD",
      color: "Space Gray"
    }
  },
  {
    id: "4",
    name: "Surface Pro 9",
    category_id: "1",
    brand: "Microsoft",
    barcode: "MSF-SP9-256",
    model: "QEZ-00001",
    description: "2-in-1 tablet and laptop for versatile productivity",
    specifications: {
      processor: "Intel Core i5",
      memory: "8GB",
      storage: "256GB SSD"
    }
  },
  {
    id: "5",
    name: "Wireless Presenter Remote",
    category_id: "1",
    brand: "Logitech",
    barcode: "LOG-R400",
    model: "R400",
    description: "Professional wireless presenter with laser pointer and intuitive controls"
  },
  // Furniture
  {
    id: "6",
    name: "Aeron Chair",
    category_id: "2",
    brand: "Herman Miller",
    barcode: "HM-AER-B",
    model: "AE113AWBPJG1C7",
    description: "Ergonomic office chair with advanced lumbar support and breathable mesh",
    specifications: {
      size: "Size B (Medium)",
      color: "Graphite",
      material: "Pellicle mesh",
      adjustments: "Full feature"
    }
  },
  {
    id: "7",
    name: "Standing Desk Converter",
    category_id: "2",
    brand: "Varidesk",
    barcode: "VAR-SD36",
    model: "Pro Plus 36",
    description: "Height-adjustable desk converter for ergonomic workspace flexibility",
    specifications: {
      width: "36 inches",
      weight_capacity: "35 lbs",
      height_range: '11.5" - 15.5"'
    }
  },
  {
    id: "8",
    name: "Modular Sofa System",
    category_id: "2",
    brand: "Steelcase",
    barcode: "STC-MSS-3",
    model: "Gesture Lounge",
    description: "Flexible seating solution for collaborative spaces and break areas"
  },
  {
    id: "9",
    name: "Conference Table",
    category_id: "2",
    brand: "Knoll",
    barcode: "KNL-CT-12",
    model: "Florence 12-Person",
    description: "Premium conference table with integrated cable management",
    specifications: {
      seats: "12 people",
      material: "Oak veneer",
      shape: "Rectangular"
    }
  },
  // Audio Visual
  {
    id: "10",
    name: "4K Laser Projector",
    category_id: "3",
    brand: "Epson",
    barcode: "EPS-LS500",
    model: "EpiqVision Ultra LS500",
    description: "Ultra-short throw 4K laser projector for meeting rooms and presentations",
    specifications: {
      resolution: "4K UHD",
      brightness: "4000 lumens",
      technology: "Laser",
      connectivity: "HDMI, USB-C, Wireless"
    }
  },
  {
    id: "11",
    name: "Wireless Microphone System",
    category_id: "3",
    brand: "Shure",
    barcode: "SHR-SM58",
    model: "SM58-LC",
    description: "Professional wireless microphone for presentations and events"
  },
  {
    id: "12",
    name: '86" Interactive Display',
    category_id: "3",
    brand: "Microsoft",
    barcode: "MSF-SH2-86",
    model: 'Surface Hub 2S 85"',
    description: "Large format interactive display for collaborative meetings and workshops",
    specifications: {
      size: "85 inches",
      resolution: "4K",
      touch_points: "20 simultaneous",
      connectivity: "Multiple inputs"
    }
  },
  {
    id: "13",
    name: "Soundbar System",
    category_id: "3",
    brand: "Bose",
    barcode: "BSE-SB700",
    model: "Smart Soundbar 700",
    description: "Premium soundbar for meeting room audio enhancement"
  },
  // Office Supplies
  {
    id: "14",
    name: "Whiteboard Markers Set",
    category_id: "4",
    brand: "Artline",
    barcode: "ART-WB-12",
    description: "Set of 12 assorted color whiteboard markers with fine tips"
  },
  {
    id: "15",
    name: "Premium Notebooks",
    category_id: "4",
    brand: "Moleskine",
    barcode: "MOL-NB-A4",
    model: "Classic Hard Cover",
    description: "Professional notebooks for meeting notes and planning"
  },
  {
    id: "16",
    name: "Wireless Charging Pad",
    category_id: "4",
    brand: "Belkin",
    barcode: "BLK-WCP15",
    description: "Fast wireless charging pad for meeting room desk integration"
  },
  // Kitchen & Catering
  {
    id: "17",
    name: "Coffee Machine",
    category_id: "5",
    brand: "Nespresso",
    barcode: "NSP-VM200",
    model: "Vertuo Plus",
    description: "Professional coffee machine for office kitchen and meeting refreshments",
    specifications: {
      type: "Capsule system",
      cup_sizes: "4 sizes",
      water_tank: "1.1L"
    }
  },
  {
    id: "18",
    name: "Mini Refrigerator",
    category_id: "5",
    brand: "Haier",
    barcode: "HAI-MR126",
    model: "HR-126WL",
    description: "Compact refrigerator for meeting room refreshments and catering storage"
  },
  {
    id: "19",
    name: "Water Cooler",
    category_id: "5",
    brand: "Zip",
    barcode: "ZIP-HC160",
    description: "Filtered water cooler with hot and cold dispensing options"
  },
  // Wellness & Safety
  {
    id: "20",
    name: "First Aid Kit",
    category_id: "6",
    brand: "St John Ambulance",
    barcode: "SJA-FAK50",
    description: "Comprehensive workplace first aid kit for 50 people"
  },
  {
    id: "21",
    name: "Air Purifier",
    category_id: "6",
    brand: "Dyson",
    barcode: "DYS-AP01",
    model: "Pure Cool TP01",
    description: "HEPA air purifier and fan for meeting room air quality"
  },
  {
    id: "22",
    name: "Ergonomic Footrest",
    category_id: "6",
    brand: "Humanscale",
    barcode: "HUM-FR300",
    description: "Adjustable footrest for ergonomic workstation setup"
  },
  // Mobility
  {
    id: "23",
    name: "Equipment Trolley",
    category_id: "7",
    brand: "Rubbermaid",
    barcode: "RBM-ET3",
    description: "Mobile trolley for transporting AV equipment and supplies"
  },
  {
    id: "24",
    name: "Laptop Cart",
    category_id: "7",
    brand: "Bretford",
    barcode: "BRT-LC20",
    description: "Mobile charging cart for laptops and tablets"
  },
  // Cleaning & Maintenance
  {
    id: "25",
    name: "Cleaning Supply Kit",
    category_id: "8",
    brand: "Diversey",
    barcode: "DIV-CSK01",
    description: "Complete cleaning supply kit for office maintenance"
  },
  {
    id: "26",
    name: "HEPA Vacuum Cleaner",
    category_id: "8",
    brand: "Shark",
    barcode: "SHK-NV752",
    description: "Professional grade vacuum cleaner with HEPA filtration"
  },
  {
    id: "_parking_type_",
    name: "_PARKING_SPACES_",
    category_id: "_parking_category_",
    brand: "PlaceOS"
  }
];
var ASSET_CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];
var ASSET_STATUS = ["Available", "In Use", "Maintenance", "Retired"];
var MAINTENANCE_TYPES = ["Routine", "Repair", "Calibration", "Inspection"];
var generateAssetHistory = (assetId) => {
  const historyCount = predictableRandomInt(5, 1);
  return Array(historyCount).fill(null).map((_, i) => ({
    id: `history-${assetId}-${i}`,
    asset_id: assetId,
    action: ["Assigned", "Returned", "Maintained", "Relocated"][predictableRandomInt(4)],
    user_id: `staff-${predictableRandomInt(20) + 1}`,
    location: `Floor ${predictableRandomInt(3) + 1}`,
    timestamp: getUnixTime(subDays(Date.now(), predictableRandomInt(365))),
    notes: "Asset management action recorded"
  }));
};
var generateMaintenanceSchedule = (assetId) => {
  if (predictableRandomInt(3) === 0)
    return null;
  return {
    id: `maintenance-${assetId}`,
    asset_id: assetId,
    type: MAINTENANCE_TYPES[predictableRandomInt(MAINTENANCE_TYPES.length)],
    frequency_days: [30, 60, 90, 180, 365][predictableRandomInt(5)],
    last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90))),
    next_service: getUnixTime(new Date(Date.now() + (predictableRandomInt(90) + 30) * 24 * 60 * 60 * 1e3)),
    service_provider: "Internal IT" + (predictableRandomInt(3) === 0 ? "" : " / External Contractor"),
    estimated_cost: predictableRandomInt(500, 50)
  };
};
var MOCK_ASSETS = Array(150).fill(null).map((_, i) => {
  const product = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
  const purchaseDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const condition = ASSET_CONDITIONS[predictableRandomInt(ASSET_CONDITIONS.length)];
  const status = ASSET_STATUS[predictableRandomInt(ASSET_STATUS.length)];
  const assetId = `asset-${String(i + 1).padStart(4, "0")}`;
  return {
    id: assetId,
    name: `${product.name} - ${assetId}`,
    asset_type_id: product.id,
    description: product.description || `${product.brand} ${product.name} for office use`,
    model_number: product.model || `${product.brand}-${predictableRandomInt(9999)}`,
    serial_number: `${product.brand?.substring(0, 3).toUpperCase()}${predictableRandomInt(999999999)}`,
    identifier: `${product.barcode}-${String(i + 1).padStart(3, "0")}`,
    barcode: product.barcode,
    brand: product.brand,
    condition,
    status,
    purchase_order_id: `PO-${Math.floor(i / 5) + 1}`,
    // Group assets by purchase orders
    purchase_date: getUnixTime(purchaseDate),
    warranty_expiry: getUnixTime(new Date(purchaseDate.getTime() + predictableRandomInt(36, 12) * 30 * 24 * 60 * 60 * 1e3)),
    purchase_price: predictableRandomInt(5e3, 100),
    current_value: Math.max(predictableRandomInt(3e3, 50), 50),
    // Depreciated value
    location: {
      building: `Building ${predictableRandomInt(2) + 1}`,
      floor: predictableRandomInt(5) + 1,
      room: `Room ${String(predictableRandomInt(50) + 1).padStart(2, "0")}`,
      zone: `zone-${predictableRandomInt(3) + 1}`
    },
    assigned_to: status === "In Use" ? `staff-${predictableRandomInt(20) + 1}` : null,
    category_id: product.category_id,
    specifications: product.specifications || {},
    other_data: {
      history: generateAssetHistory(assetId),
      maintenance_schedule: generateMaintenanceSchedule(assetId),
      insurance_value: predictableRandomInt(6e3, 200),
      depreciation_rate: predictableRandomInt(20, 5),
      // 5-25% per year
      energy_rating: product.category_id === "1" || product.category_id === "5" ? ["A+++", "A++", "A+", "A", "B"][predictableRandomInt(5)] : null,
      dimensions: {
        width: predictableRandomInt(100, 10),
        height: predictableRandomInt(100, 5),
        depth: predictableRandomInt(80, 10),
        weight: predictableRandomInt(50, 1)
      },
      tags: [
        product.brand?.toLowerCase(),
        MOCK_CATEGORIES.find((c2) => c2.id === product.category_id)?.name.toLowerCase(),
        condition.toLowerCase(),
        ...status === "In Use" ? ["assigned"] : [],
        ...product.category_id === "1" ? ["tech"] : []
      ].filter(Boolean)
    }
  };
});
MOCK_ASSETS.push({
  id: "catering-coffee",
  name: "Coffee Service",
  identifier: "Coffee Service",
  asset_type_id: "_catering_standalone_type_",
  zone_id: "bld-01",
  images: [],
  other_data: {
    category: "Beverages",
    description: "Freshly brewed coffee for meetings",
    unit_price: 350,
    quantity: 0,
    options: [],
    tags: ["Drink", "Beverage"],
    accept_points: false,
    discount_cap: 0,
    hide_for_zones: []
  }
}, {
  id: "catering-sandwiches",
  name: "Sandwich Platter",
  identifier: "Sandwich Platter",
  asset_type_id: "_catering_acme_type_",
  zone_id: "bld-01",
  images: [],
  other_data: {
    category: "Food",
    description: "Assorted sandwich platter",
    unit_price: 1200,
    quantity: 0,
    options: [],
    tags: ["Lunch"],
    accept_points: false,
    discount_cap: 0,
    hide_for_zones: []
  }
});
var MOCK_PURCHASE_ORDERS = Array(30).fill(null).map((_, i) => {
  const orderDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const deliveryDate = new Date(orderDate.getTime() + predictableRandomInt(30) * 24 * 60 * 60 * 1e3);
  return {
    id: `PO-${i + 1}`,
    purchase_order_number: `PO-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(i + 1).padStart(4, "0")}`,
    invoice_number: `INV-${String(predictableRandomInt(99999) + 1e4)}`,
    vendor: [
      "Office Supplies Co",
      "Tech Solutions Ltd",
      "Furniture Plus",
      "AV Equipment Pro"
    ][predictableRandomInt(4)],
    department: ["IT", "Facilities", "HR", "Finance"][predictableRandomInt(4)],
    purchase_date: getUnixTime(orderDate),
    delivery_date: getUnixTime(deliveryDate),
    expected_service_start_date: getUnixTime(deliveryDate),
    expected_service_end_date: getUnixTime(new Date(deliveryDate.getTime() + 3 * 365 * 24 * 60 * 60 * 1e3)),
    // 3 years
    total_amount: predictableRandomInt(5e4, 1e3),
    currency: "AUD",
    status: ["Pending", "Approved", "Delivered", "Complete"][predictableRandomInt(4)],
    approver_id: `staff-${predictableRandomInt(5) + 1}`,
    notes: i % 3 === 0 ? "Bulk order for office renovation" : i % 3 === 1 ? "Emergency replacement" : "Routine procurement",
    payment_terms: [
      "Net 30",
      "Net 60",
      "Payment on Delivery",
      "Net 15"
    ][predictableRandomInt(4)]
  };
});
var MOCK_PARKING_ASSETS_CACHE = {};
function generateMockParkingAssets(zone_id) {
  if (!MOCK_PARKING_ASSETS_CACHE[zone_id]) {
    const parts = zone_id.split("-");
    const id = parts[parts.length - 1];
    MOCK_PARKING_ASSETS_CACHE[zone_id] = new Array(18 * 6).fill(0).map((_, idx) => {
      const position = padString(idx % 18 + Math.floor(idx / 18) * 100, 3);
      const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
      return {
        id: `park-${id}-${position}`,
        map_id: `park-${position}`,
        name: `${position}`,
        bookable: predictableRandomInt(9999) % 4 !== 0,
        assigned_to: assignee.email || "",
        assigned_name: assignee.name || "",
        asset_type_id: "_parking_type_",
        zone_id,
        notes: "",
        place_groups: [],
        features: [],
        images: []
      };
    });
  }
  return MOCK_PARKING_ASSETS_CACHE[zone_id];
}
function getAllMockParkingAssets() {
  return Object.values(MOCK_PARKING_ASSETS_CACHE).flat();
}

// libs/mocks/src/lib/api/assets.mock.ts
var BASE_PATH = "/api/engine/v2";
var update = (dataset) => (id, data) => {
  const index = dataset.findIndex((e) => e.id === id);
  if (index < 0)
    throw {
      status: 404,
      message: `Unable to find booking with ID ${id}`
    };
  const new_event = __spreadValues({}, data);
  dataset.splice(index, 1, new_event);
  return new_event;
};
function registerMockAssets() {
  to({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      let results = MOCK_CATEGORIES;
      if (req.query_params?.hidden !== void 0) {
        const hidden = String(req.query_params.hidden) === "true";
        results = results.filter((c2) => !!c2.hidden === hidden);
      }
      return results;
    }
  });
  to({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_CATEGORIES.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  to({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-category-${predictableRandomInt(999)}`
      });
      MOCK_CATEGORIES.push(new_event);
      return new_event;
    }
  });
  to({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_CATEGORIES)(req.route_params.id, __spreadValues({}, req.body))
  });
  to({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_CATEGORIES.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_CATEGORIES.splice(index, 1);
      return;
    }
  });
  to({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      let results = MOCK_PRODUCTS;
      if (req.query_params?.category_id) {
        results = results.filter((p) => p.category_id === req.query_params.category_id);
      }
      return results;
    }
  });
  to({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PRODUCTS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  to({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-product-${predictableRandomInt(999)}`
      });
      MOCK_PRODUCTS.push(new_event);
      return new_event;
    }
  });
  to({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PRODUCTS)(req.route_params.id, __spreadValues({}, req.body))
  });
  to({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PRODUCTS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_PRODUCTS.splice(index, 1);
      return;
    }
  });
  to({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_PURCHASE_ORDERS;
      return events;
    }
  });
  to({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PURCHASE_ORDERS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  to({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-purchase-order-${predictableRandomInt(999)}`
      });
      MOCK_PURCHASE_ORDERS.push(new_event);
      return new_event;
    }
  });
  to({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PURCHASE_ORDERS)(req.route_params.id, __spreadValues({}, req.body))
  });
  to({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PURCHASE_ORDERS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find purchase order with ID ${req.route_params.id}`
        };
      MOCK_PURCHASE_ORDERS.splice(index, 1);
      return;
    }
  });
  to({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      const type_id = req.query_params?.type_id;
      const zone_id = req.query_params?.zone_id;
      if (type_id === "_parking_type_" && zone_id) {
        return generateMockParkingAssets(zone_id);
      }
      let results = [...MOCK_ASSETS, ...getAllMockParkingAssets()];
      if (type_id) {
        results = results.filter((a) => a.asset_type_id === type_id);
      }
      if (zone_id) {
        results = results.filter((a) => a.zone_id === zone_id || (a.zones || []).includes(zone_id));
      }
      return results;
    }
  });
  to({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_ASSETS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  to({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-asset-${predictableRandomInt(999)}`
      });
      MOCK_ASSETS.push(new_event);
      return new_event;
    }
  });
  to({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_ASSETS)(req.route_params.id, __spreadValues({}, req.body))
  });
  to({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_ASSETS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_ASSETS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/catering.data.ts
var DIETARY_RESTRICTIONS = [
  { id: "vegetarian", name: "Vegetarian", icon: "\u{1F331}" },
  { id: "vegan", name: "Vegan", icon: "\u{1F33F}" },
  { id: "gluten-free", name: "Gluten Free", icon: "\u{1F33E}" },
  { id: "dairy-free", name: "Dairy Free", icon: "\u{1F95B}" },
  { id: "nut-free", name: "Nut Free", icon: "\u{1F95C}" },
  { id: "halal", name: "Halal", icon: "\u262A\uFE0F" },
  { id: "kosher", name: "Kosher", icon: "\u2721\uFE0F" },
  { id: "low-carb", name: "Low Carb", icon: "\u{1F957}" },
  { id: "keto", name: "Ketogenic", icon: "\u{1F951}" },
  { id: "paleo", name: "Paleo", icon: "\u{1F969}" }
];
var MOCK_MENU = [
  // Beverages
  {
    id: "bev-001",
    name: "Barista Coffee Selection",
    unit_price: 450,
    category: "beverages",
    description: "Freshly brewed barista-quality coffee with premium beans",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300",
    options: [
      { id: "opt-001", name: "Espresso", group: "type" },
      { id: "opt-002", name: "Cappuccino", group: "type" },
      { id: "opt-003", name: "Flat White", group: "type" },
      { id: "opt-004", name: "Latte", group: "type" },
      { id: "opt-005", name: "Long Black", group: "type" },
      { id: "opt-006", name: "Mocha", group: "type" },
      { id: "opt-007", name: "Regular", group: "size" },
      { id: "opt-008", name: "Large", group: "size", unit_price: 50 },
      { id: "opt-009", name: "Oat Milk", group: "milk", unit_price: 60 },
      {
        id: "opt-010",
        name: "Almond Milk",
        group: "milk",
        unit_price: 60
      },
      { id: "opt-011", name: "Soy Milk", group: "milk", unit_price: 50 },
      {
        id: "opt-012",
        name: "Extra Shot",
        group: "extras",
        unit_price: 70
      },
      { id: "opt-013", name: "Decaf", group: "extras" }
    ]
  },
  {
    id: "bev-002",
    name: "Premium Tea Selection",
    unit_price: 350,
    category: "beverages",
    description: "Selection of premium loose leaf teas",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
    options: [
      { id: "opt-014", name: "Earl Grey", group: "type" },
      { id: "opt-015", name: "English Breakfast", group: "type" },
      { id: "opt-016", name: "Green Tea", group: "type" },
      { id: "opt-017", name: "Chamomile", group: "type" },
      { id: "opt-018", name: "Peppermint", group: "type" },
      { id: "opt-019", name: "Jasmine", group: "type" },
      {
        id: "opt-020",
        name: "Honey",
        group: "additions",
        unit_price: 30
      },
      {
        id: "opt-021",
        name: "Lemon",
        group: "additions",
        unit_price: 20
      }
    ]
  },
  {
    id: "bev-003",
    name: "Fresh Juice Bar",
    unit_price: 550,
    category: "beverages",
    description: "Cold-pressed fresh juices and smoothies",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
    options: [
      { id: "opt-022", name: "Orange", group: "juice" },
      { id: "opt-023", name: "Apple", group: "juice" },
      { id: "opt-024", name: "Green Machine", group: "juice" },
      { id: "opt-025", name: "Berry Blast", group: "smoothie" },
      { id: "opt-026", name: "Tropical Paradise", group: "smoothie" },
      {
        id: "opt-027",
        name: "Protein Boost",
        group: "smoothie",
        unit_price: 100
      }
    ]
  },
  {
    id: "bev-004",
    name: "Sparkling Water Station",
    unit_price: 250,
    category: "beverages",
    description: "Premium sparkling and still water with fruit infusions",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300",
    options: [
      { id: "opt-028", name: "Still Water", group: "type" },
      { id: "opt-029", name: "Sparkling Water", group: "type" },
      { id: "opt-030", name: "Cucumber Mint", group: "infusion" },
      { id: "opt-031", name: "Lemon Lime", group: "infusion" },
      { id: "opt-032", name: "Berry Mix", group: "infusion" }
    ]
  },
  // Breakfast
  {
    id: "brf-001",
    name: "Artisan Pastry Selection",
    unit_price: 650,
    category: "breakfast",
    description: "Fresh baked croissants, danish, and muffins",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
    options: [
      { id: "opt-033", name: "Butter Croissant", group: "pastry" },
      {
        id: "opt-034",
        name: "Almond Croissant",
        group: "pastry",
        unit_price: 100
      },
      { id: "opt-035", name: "Pain au Chocolat", group: "pastry" },
      { id: "opt-036", name: "Blueberry Muffin", group: "muffin" },
      { id: "opt-037", name: "Banana Walnut Muffin", group: "muffin" },
      { id: "opt-038", name: "Double Choc Chip Muffin", group: "muffin" }
    ]
  },
  {
    id: "brf-002",
    name: "Breakfast Bowl Bar",
    unit_price: 1250,
    category: "breakfast",
    description: "Build-your-own breakfast bowls with fresh toppings",
    dietary: ["vegetarian", "gluten-free"],
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300",
    options: [
      { id: "opt-039", name: "Greek Yogurt", group: "base" },
      { id: "opt-040", name: "Overnight Oats", group: "base" },
      {
        id: "opt-041",
        name: "Acai Bowl",
        group: "base",
        unit_price: 200
      },
      { id: "opt-042", name: "Fresh Berries", group: "toppings" },
      { id: "opt-043", name: "Granola", group: "toppings" },
      { id: "opt-044", name: "Honey", group: "toppings" },
      { id: "opt-045", name: "Chia Seeds", group: "toppings" },
      { id: "opt-046", name: "Coconut Flakes", group: "toppings" }
    ]
  },
  {
    id: "brf-003",
    name: "Executive Breakfast Platter",
    unit_price: 1850,
    category: "breakfast",
    description: "Premium breakfast selection with eggs, bacon, and sides",
    dietary: [],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300",
    options: [
      { id: "opt-047", name: "Scrambled Eggs", group: "eggs" },
      { id: "opt-048", name: "Poached Eggs", group: "eggs" },
      {
        id: "opt-049",
        name: "Eggs Benedict",
        group: "eggs",
        unit_price: 300
      },
      { id: "opt-050", name: "Crispy Bacon", group: "protein" },
      { id: "opt-051", name: "Sausages", group: "protein" },
      {
        id: "opt-052",
        name: "Smoked Salmon",
        group: "protein",
        unit_price: 400
      },
      { id: "opt-053", name: "Hash Browns", group: "sides" },
      { id: "opt-054", name: "Grilled Tomato", group: "sides" }
    ]
  },
  // Salads
  {
    id: "sal-001",
    name: "Mediterranean Power Bowl",
    unit_price: 1450,
    category: "salads",
    description: "Fresh Mediterranean ingredients with quinoa and feta",
    dietary: ["vegetarian", "gluten-free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
    options: [
      {
        id: "opt-055",
        name: "Grilled Chicken",
        group: "protein",
        unit_price: 300
      },
      {
        id: "opt-056",
        name: "Falafel",
        group: "protein",
        unit_price: 200
      },
      {
        id: "opt-057",
        name: "Extra Feta",
        group: "extras",
        unit_price: 150
      },
      {
        id: "opt-058",
        name: "Avocado",
        group: "extras",
        unit_price: 200
      }
    ]
  },
  {
    id: "sal-002",
    name: "Asian Fusion Salad",
    unit_price: 1350,
    category: "salads",
    description: "Crisp vegetables with sesame dressing and edamame",
    dietary: ["vegetarian", "vegan", "dairy-free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
    options: [
      {
        id: "opt-059",
        name: "Teriyaki Chicken",
        group: "protein",
        unit_price: 300
      },
      { id: "opt-060", name: "Tofu", group: "protein", unit_price: 150 },
      { id: "opt-061", name: "Crispy Noodles", group: "toppings" },
      { id: "opt-062", name: "Sesame Seeds", group: "toppings" }
    ]
  },
  // Sandwiches & Wraps
  {
    id: "snd-001",
    name: "Gourmet Sandwich Selection",
    unit_price: 1250,
    category: "sandwiches",
    description: "Premium sandwiches on artisan breads",
    dietary: [],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300",
    options: [
      { id: "opt-063", name: "Turkey & Avocado", group: "filling" },
      { id: "opt-064", name: "Ham & Swiss", group: "filling" },
      {
        id: "opt-065",
        name: "Roast Beef & Horseradish",
        group: "filling"
      },
      { id: "opt-066", name: "Caprese", group: "filling" },
      { id: "opt-067", name: "Sourdough", group: "bread" },
      { id: "opt-068", name: "Multigrain", group: "bread" },
      { id: "opt-069", name: "Ciabatta", group: "bread" }
    ]
  },
  {
    id: "snd-002",
    name: "Fresh Wrap Station",
    unit_price: 1150,
    category: "sandwiches",
    description: "Build-your-own wraps with fresh ingredients",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1565299585323-38174d4d6174?w=300",
    options: [
      { id: "opt-070", name: "Grilled Chicken", group: "protein" },
      { id: "opt-071", name: "Tuna Salad", group: "protein" },
      { id: "opt-072", name: "Hummus & Veggie", group: "protein" },
      { id: "opt-073", name: "Spinach Tortilla", group: "wrap" },
      { id: "opt-074", name: "Whole Wheat", group: "wrap" },
      { id: "opt-075", name: "Sun-dried Tomato", group: "wrap" }
    ]
  },
  // Hot Meals
  {
    id: "hot-001",
    name: "Pasta Bar",
    unit_price: 1650,
    category: "hot-meals",
    description: "Fresh pasta with choice of sauces and toppings",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300",
    options: [
      { id: "opt-076", name: "Penne", group: "pasta" },
      { id: "opt-077", name: "Fettuccine", group: "pasta" },
      { id: "opt-078", name: "Spaghetti", group: "pasta" },
      { id: "opt-079", name: "Marinara", group: "sauce" },
      { id: "opt-080", name: "Alfredo", group: "sauce" },
      { id: "opt-081", name: "Pesto", group: "sauce" },
      {
        id: "opt-082",
        name: "Grilled Chicken",
        group: "protein",
        unit_price: 300
      },
      {
        id: "opt-083",
        name: "Italian Sausage",
        group: "protein",
        unit_price: 350
      }
    ]
  },
  {
    id: "hot-002",
    name: "Asian Noodle Station",
    unit_price: 1550,
    category: "hot-meals",
    description: "Wok-fried noodles with fresh vegetables",
    dietary: ["dairy-free"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300",
    options: [
      { id: "opt-084", name: "Pad Thai", group: "dish" },
      { id: "opt-085", name: "Singapore Noodles", group: "dish" },
      { id: "opt-086", name: "Beef Black Bean", group: "dish" },
      { id: "opt-087", name: "Vegetable Stir Fry", group: "dish" },
      {
        id: "opt-088",
        name: "Extra Prawns",
        group: "protein",
        unit_price: 400
      },
      { id: "opt-089", name: "Tofu", group: "protein", unit_price: 150 }
    ]
  },
  // Appetizers
  {
    id: "app-001",
    name: "Charcuterie & Cheese Board",
    unit_price: 2200,
    category: "appetizers",
    description: "Curated selection of meats, cheeses, and accompaniments",
    dietary: [],
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300",
    options: [
      { id: "opt-090", name: "Small (6-8 people)", group: "size" },
      {
        id: "opt-091",
        name: "Medium (10-12 people)",
        group: "size",
        unit_price: 800
      },
      {
        id: "opt-092",
        name: "Large (15-20 people)",
        group: "size",
        unit_price: 1600
      },
      {
        id: "opt-093",
        name: "Premium Selection",
        group: "upgrade",
        unit_price: 500
      }
    ]
  },
  {
    id: "app-002",
    name: "Fresh Spring Rolls",
    unit_price: 950,
    category: "appetizers",
    description: "Vietnamese-style fresh rolls with dipping sauce",
    dietary: ["dairy-free", "nut-free"],
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=300",
    options: [
      { id: "opt-094", name: "Prawn & Avocado", group: "filling" },
      { id: "opt-095", name: "Chicken & Herbs", group: "filling" },
      { id: "opt-096", name: "Tofu & Vegetables", group: "filling" },
      { id: "opt-097", name: "Peanut Sauce", group: "sauce" },
      { id: "opt-098", name: "Sweet Chili", group: "sauce" }
    ]
  },
  // Desserts
  {
    id: "des-001",
    name: "Artisan Dessert Platter",
    unit_price: 1450,
    category: "desserts",
    description: "Selection of petit fours, macarons, and mini tarts",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
    options: [
      { id: "opt-099", name: "Mixed Selection", group: "type" },
      { id: "opt-100", name: "Chocolate Focus", group: "type" },
      { id: "opt-101", name: "Fruit Focus", group: "type" },
      {
        id: "opt-102",
        name: "Gluten-Free Options",
        group: "dietary",
        unit_price: 200
      }
    ]
  },
  {
    id: "des-002",
    name: "Fresh Fruit Display",
    unit_price: 850,
    category: "desserts",
    description: "Seasonal fresh fruit beautifully presented",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300",
    options: [
      { id: "opt-103", name: "Regular Display", group: "size" },
      {
        id: "opt-104",
        name: "Premium Exotic Fruits",
        group: "upgrade",
        unit_price: 300
      },
      {
        id: "opt-105",
        name: "Chocolate Dip",
        group: "extras",
        unit_price: 200
      }
    ]
  },
  // Platters
  {
    id: "plt-001",
    name: "Executive Lunch Platter",
    unit_price: 2850,
    category: "platters",
    description: "Complete lunch solution for meetings and events",
    dietary: [],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
    options: [
      { id: "opt-106", name: "Serves 8-10", group: "size" },
      {
        id: "opt-107",
        name: "Serves 12-15",
        group: "size",
        unit_price: 1e3
      },
      {
        id: "opt-108",
        name: "Serves 18-20",
        group: "size",
        unit_price: 2e3
      },
      { id: "opt-109", name: "Vegetarian Option", group: "dietary" },
      {
        id: "opt-110",
        name: "Gluten-Free Option",
        group: "dietary",
        unit_price: 200
      }
    ]
  },
  // Snacks
  {
    id: "snk-001",
    name: "Healthy Snack Mix",
    unit_price: 650,
    category: "snacks",
    description: "Mix of nuts, dried fruits, and seeds",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300",
    options: [
      { id: "opt-111", name: "Regular Mix", group: "type" },
      { id: "opt-112", name: "Tropical Mix", group: "type" },
      {
        id: "opt-113",
        name: "Protein Mix",
        group: "type",
        unit_price: 100
      }
    ]
  }
];
var CATERING_PACKAGES = [
  {
    id: "pkg-001",
    name: "Morning Meeting Package",
    description: "Perfect for early morning meetings and briefings",
    price: 2200,
    serves: "8-12 people",
    duration: "2-3 hours",
    items: ["bev-001", "bev-002", "brf-001", "snk-001"],
    dietary_options: ["vegetarian", "gluten-free"]
  },
  {
    id: "pkg-002",
    name: "Executive Lunch Package",
    description: "Premium lunch solution for important meetings",
    price: 4500,
    serves: "8-12 people",
    duration: "2-4 hours",
    items: ["bev-001", "sal-001", "snd-001", "app-001", "des-001"],
    dietary_options: ["vegetarian", "gluten-free"]
  },
  {
    id: "pkg-003",
    name: "All-Day Conference Package",
    description: "Complete catering for full-day events",
    price: 7500,
    serves: "15-20 people",
    duration: "8 hours",
    items: [
      "bev-001",
      "bev-002",
      "brf-002",
      "sal-002",
      "hot-001",
      "app-002",
      "des-002"
    ],
    dietary_options: ["vegetarian", "vegan", "gluten-free", "dairy-free"]
  },
  {
    id: "pkg-004",
    name: "Networking Reception Package",
    description: "Elegant finger foods and drinks for networking events",
    price: 3800,
    serves: "20-30 people",
    duration: "3-4 hours",
    items: ["bev-003", "app-001", "app-002", "des-001"],
    dietary_options: ["vegetarian", "dairy-free"]
  },
  {
    id: "pkg-005",
    name: "Training Workshop Package",
    description: "Energizing meals for learning sessions",
    price: 3200,
    serves: "12-16 people",
    duration: "6 hours",
    items: ["bev-001", "brf-002", "snd-002", "snk-001"],
    dietary_options: ["vegetarian", "vegan", "gluten-free"]
  }
];
var SERVICE_TYPES = [
  {
    id: "buffet",
    name: "Buffet Service",
    description: "Self-service buffet setup",
    setup_time: 30,
    breakdown_time: 30,
    staff_required: 1,
    price_modifier: 1
  },
  {
    id: "plated",
    name: "Plated Service",
    description: "Individual plated meals served to guests",
    setup_time: 45,
    breakdown_time: 45,
    staff_required: 2,
    price_modifier: 1.3
  },
  {
    id: "station",
    name: "Food Stations",
    description: "Multiple themed food stations",
    setup_time: 60,
    breakdown_time: 45,
    staff_required: 2,
    price_modifier: 1.2
  },
  {
    id: "cocktail",
    name: "Cocktail Style",
    description: "Pass-around finger foods and canap\xE9s",
    setup_time: 30,
    breakdown_time: 30,
    staff_required: 3,
    price_modifier: 1.4
  }
];
var SUPPLIERS = [
  {
    id: "sup-001",
    name: "Gourmet Events Catering",
    rating: 4.8,
    specialty: "Corporate Events",
    location: "Sydney",
    min_order: 1e3,
    delivery_fee: 150,
    setup_fee: 200
  },
  {
    id: "sup-002",
    name: "Fresh & Local Kitchen",
    rating: 4.6,
    specialty: "Healthy Options",
    location: "Melbourne",
    min_order: 800,
    delivery_fee: 120,
    setup_fee: 150
  },
  {
    id: "sup-003",
    name: "Premium Dining Solutions",
    rating: 4.9,
    specialty: "Executive Catering",
    location: "Brisbane",
    min_order: 1500,
    delivery_fee: 200,
    setup_fee: 300
  }
];
function generateCateringOrder(event) {
  const duration = Math.abs(differenceInMinutes(event.event_end * 1e3, event.event_start * 1e3));
  const attendeeCount = event.attendees?.length || predictableRandomInt(15, 5);
  let selectedItems = [];
  let orderType = "individual";
  let totalPrice = 0;
  if (attendeeCount >= 8 && duration >= 120) {
    const suitablePackages = CATERING_PACKAGES.filter((pkg) => {
      const serves = parseInt(pkg.serves.split("-")[0]);
      const maxServes = parseInt(pkg.serves.split("-")[1]) || serves + 5;
      return attendeeCount >= serves && attendeeCount <= maxServes + 5;
    });
    if (suitablePackages.length > 0) {
      const selectedPackage = suitablePackages[predictableRandomInt(suitablePackages.length)];
      orderType = "package";
      totalPrice = selectedPackage.price;
      selectedItems = selectedPackage.items.map((itemId) => {
        const item = MOCK_MENU.find((m) => m.id === itemId);
        return __spreadProps(__spreadValues({}, item), {
          quantity: Math.ceil(attendeeCount / 8),
          package_item: true,
          options: []
        });
      }).filter(Boolean);
    }
  }
  if (selectedItems.length === 0) {
    const itemCount = Math.min(predictableRandomInt(5, 2), Math.ceil(duration / 60));
    const selectedItemIds = /* @__PURE__ */ new Set();
    while (selectedItems.length < itemCount && selectedItemIds.size < MOCK_MENU.length) {
      const item = MOCK_MENU[predictableRandomInt(MOCK_MENU.length)];
      if (!selectedItemIds.has(item.id)) {
        selectedItemIds.add(item.id);
        const quantity = Math.max(1, Math.ceil(attendeeCount / 8));
        const itemPrice = item.unit_price * quantity;
        totalPrice += itemPrice;
        selectedItems.push(__spreadProps(__spreadValues({}, item), {
          quantity,
          package_item: false,
          options: item.options?.slice(0, predictableRandomInt(3)) || []
        }));
      }
    }
  }
  const serviceType = SERVICE_TYPES[predictableRandomInt(SERVICE_TYPES.length)];
  const serviceModifier = serviceType.price_modifier;
  totalPrice *= serviceModifier;
  const supplier = SUPPLIERS[predictableRandomInt(SUPPLIERS.length)];
  const deliveryFee = supplier.delivery_fee;
  const setupFee = supplier.setup_fee;
  totalPrice += deliveryFee + setupFee;
  const deliveryOffset = predictableRandomInt(30, 30);
  const deliverAt = new Date(event.event_start * 1e3 - deliveryOffset * 60 * 1e3);
  const dietaryNeeds = DIETARY_RESTRICTIONS.filter(() => predictableRandomInt(8) === 0);
  return __spreadValues({
    id: `order-${String(predictableRandomInt(999999, 1e5))}`,
    event_id: event.id,
    invoice_number: `INV-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(predictableRandomInt(99999, 1e4))}`,
    charge_code: `CC-${String(predictableRandomInt(9999, 1e3))}`,
    order_type: orderType,
    status: ["pending", "confirmed", "preparing", "delivered"][predictableRandomInt(4)],
    // Timing
    order_date: new Date(Date.now() - predictableRandomInt(7) * 24 * 60 * 60 * 1e3).toISOString(),
    deliver_at: deliverAt.toISOString(),
    setup_time: serviceType.setup_time,
    breakdown_time: serviceType.breakdown_time,
    // Service details
    service_type: serviceType,
    supplier,
    guest_count: attendeeCount,
    // Items and pricing
    items: selectedItems,
    subtotal: Math.floor(totalPrice - deliveryFee - setupFee),
    delivery_fee: deliveryFee,
    setup_fee: setupFee,
    tax: Math.floor(totalPrice * 0.1),
    // 10% tax
    total: Math.floor(totalPrice * 1.1),
    // Special requirements
    dietary_requirements: dietaryNeeds.map((d) => d.name),
    special_instructions: predictableRandomInt(3) === 0 ? [
      "Please use company branded napkins",
      "Set up 15 minutes before event start",
      "Vegetarian options on separate table",
      "Please include serving utensils",
      "No pork products",
      "Nut-free preparation required"
    ][predictableRandomInt(6)] : "",
    // Contact and delivery
    delivery_contact: event.attendees?.[0]?.name || "Event Organizer",
    delivery_phone: event.attendees?.[0]?.phone || "+61 2 9876 5432",
    delivery_location: `Meeting Room - ${event.location || "TBC"}`,
    access_instructions: "Reception will direct to meeting room",
    // Billing
    department: event.extension_data?.department || "General",
    cost_center: event.extension_data?.cost_center || "events",
    project_code: event.extension_data?.project_code || null,
    // Metadata
    notes: [
      "Standard corporate catering order",
      "Client meeting refreshments",
      "Team celebration catering",
      "Training session meals",
      "Board meeting premium service"
    ][predictableRandomInt(5)],
    created_by: event.attendees?.[0]?.email || "system@place.tech",
    last_modified: (/* @__PURE__ */ new Date()).toISOString()
  }, predictableRandomInt(4) === 0 && {
    rating: predictableRandomInt(5, 3) + 1,
    // 4-5 stars
    feedback: [
      "Excellent food quality and presentation",
      "Delivered on time, great service",
      "Fresh ingredients, everyone loved it",
      "Professional setup and cleanup",
      "Good variety, accommodated dietary needs"
    ][predictableRandomInt(5)],
    would_recommend: true
  });
}

// libs/mocks/src/lib/api/zone.data.ts
var MOCK_ORGS = [
  {
    id: "zone-org",
    created_at: getUnixTime(subMonths(Date.now(), 24)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "PlaceOS Global",
    display_name: "PlaceOS Global",
    description: "Global headquarters and innovation centers for PlaceOS technology solutions",
    tags: ["org", "headquarters", "technology"],
    count: 2,
    // Number of regions
    capacity: 4500,
    // Total capacity across all buildings
    parent_id: "",
    triggers: [],
    settings: {
      timezone: "Australia/Sydney",
      booking_rules: {
        advance_booking_days: 90,
        max_booking_duration: 8 * 60,
        // 8 hours
        auto_release_minutes: 15
      },
      work_hours: {
        start: "07:00",
        end: "19:00",
        days: [1, 2, 3, 4, 5]
        // Monday to Friday
      },
      features: [
        "wifi",
        "parking",
        "accessibility",
        "catering",
        "security"
      ]
    },
    contact: {
      email: "facilities@place.tech",
      phone: "+61 2 8765 4321",
      address: "Sydney Technology Park, NSW, Australia"
    },
    metadata: {
      founded: 2018,
      employee_count: 1200,
      sustainability_rating: "A+",
      certifications: [
        "Green Building Council",
        "ISO 14001",
        "LEED Platinum"
      ]
    }
  }
];
var MOCK_REGIONS = [
  {
    id: "region-sydney",
    created_at: getUnixTime(subMonths(Date.now(), 18)),
    updated_at: getUnixTime(subMonths(Date.now(), 2)),
    name: "Sydney Region",
    display_name: "Sydney Metropolitan Region",
    description: "Primary business region covering Sydney and surrounding areas",
    tags: ["region", "sydney", "metropolitan"],
    count: 3,
    // Number of buildings
    capacity: 2700,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "Australia/Sydney",
      region_code: "SYD",
      business_hours: {
        start: "07:00",
        end: "19:00",
        timezone: "Australia/Sydney"
      }
    },
    contact: {
      email: "sydney@place.tech",
      phone: "+61 2 8765 4322",
      address: "Sydney, NSW, Australia"
    },
    boundaries: {
      north: -33.5,
      south: -34.2,
      east: 151.5,
      west: 150.5
    }
  },
  {
    id: "region-melbourne",
    created_at: getUnixTime(subMonths(Date.now(), 15)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "Melbourne Region",
    display_name: "Melbourne Metropolitan Region",
    description: "Secondary business region covering Melbourne and Victoria",
    tags: ["region", "melbourne", "metropolitan"],
    count: 2,
    // Number of buildings
    capacity: 1800,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "Australia/Melbourne",
      region_code: "MEL",
      business_hours: {
        start: "07:30",
        end: "19:30",
        timezone: "Australia/Melbourne"
      }
    },
    contact: {
      email: "melbourne@place.tech",
      phone: "+61 3 8765 4323",
      address: "Melbourne, VIC, Australia"
    },
    boundaries: {
      north: -37.5,
      south: -38.2,
      east: 145.5,
      west: 144.5
    }
  }
];
var MOCK_BUILDINGS = [
  {
    id: "bld-01",
    name: "Innovation Hub",
    display_name: "Innovation Hub",
    description: "Modern workspace focused on collaboration and innovation with state-of-the-art facilities",
    tags: ["building", "innovation", "modern", "headquarters"],
    count: 4,
    // Number of levels (including parking)
    capacity: 1200,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2", "lvl-P1"],
    address: {
      street: "123 Technology Drive",
      suburb: "Sydney Olympic Park",
      state: "NSW",
      postcode: "2127",
      country: "Australia",
      coordinates: {
        lat: -33.8473,
        lng: 151.0647
      }
    },
    features: {
      parking_spaces: 300,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: true,
      ev_charging: 20,
      security_level: "high"
    },
    building_details: {
      year_built: 2020,
      architect: "Foster + Partners",
      total_floors: 12,
      basement_levels: 2,
      floor_area_sqm: 8500,
      energy_rating: "6 Star Green Star",
      construction_type: "Steel frame with glass facade",
      elevator_count: 4,
      stair_count: 3
    }
  },
  {
    id: "bld-02",
    name: "Executive Center",
    display_name: "Executive Center",
    description: "Premium business center with executive suites, boardrooms, and high-end meeting facilities",
    tags: ["building", "executive", "premium", "business"],
    count: 5,
    capacity: 800,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-2", "lvl-3", "lvl-4", "lvl-P1"],
    address: {
      street: "456 Collins Street",
      suburb: "Sydney CBD",
      state: "NSW",
      postcode: "2000",
      country: "Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 15,
      security_level: "premium"
    },
    building_details: {
      year_built: 2018,
      architect: "Woods Bagot",
      total_floors: 25,
      basement_levels: 3,
      floor_area_sqm: 6200,
      energy_rating: "5 Star NABERS",
      construction_type: "Reinforced concrete with marble facade",
      elevator_count: 6,
      stair_count: 2
    }
  },
  {
    id: "bld-03",
    name: "Creative Campus",
    display_name: "Creative Campus",
    description: "Flexible workspace designed for creative teams with open collaboration areas and maker spaces",
    tags: ["building", "creative", "flexible", "collaboration"],
    count: 3,
    capacity: 500,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-M", "lvl-1"],
    address: {
      street: "789 Creative Boulevard",
      suburb: "Pyrmont",
      state: "NSW",
      postcode: "2009",
      country: "Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.1957
      }
    },
    features: {
      parking_spaces: 150,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: true,
      ev_charging: 25,
      security_level: "standard"
    },
    building_details: {
      year_built: 2021,
      architect: "BVN Architecture",
      total_floors: 8,
      basement_levels: 1,
      floor_area_sqm: 4800,
      energy_rating: "6 Star Green Star",
      construction_type: "Timber and steel hybrid with living walls",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-04",
    name: "Melbourne Tower",
    display_name: "Melbourne Tower",
    description: "High-rise office building in Melbourne CBD with premium corporate facilities",
    tags: ["building", "corporate", "high-rise", "premium"],
    count: 6,
    capacity: 1e3,
    parent_id: "region-melbourne",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2", "lvl-3", "lvl-4", "lvl-P1"],
    address: {
      street: "100 Collins Street",
      suburb: "Melbourne",
      state: "VIC",
      postcode: "3000",
      country: "Australia",
      coordinates: {
        lat: -37.8136,
        lng: 144.9631
      }
    },
    features: {
      parking_spaces: 250,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: false,
      ev_charging: 30,
      security_level: "high"
    },
    building_details: {
      year_built: 2019,
      architect: "Hassell",
      total_floors: 35,
      basement_levels: 4,
      floor_area_sqm: 12e3,
      energy_rating: "5 Star Green Star",
      construction_type: "Steel and glass with sustainable features",
      elevator_count: 8,
      stair_count: 4
    }
  },
  {
    id: "bld-05",
    name: "Melbourne Innovation Lab",
    display_name: "Melbourne Innovation Lab",
    description: "State-of-the-art research and development facility with collaborative workspaces",
    tags: ["building", "innovation", "research", "lab"],
    count: 3,
    capacity: 800,
    parent_id: "region-melbourne",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2"],
    address: {
      street: "250 Exhibition Street",
      suburb: "Melbourne",
      state: "VIC",
      postcode: "3000",
      country: "Australia",
      coordinates: {
        lat: -37.8103,
        lng: 144.9717
      }
    },
    features: {
      parking_spaces: 180,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: true,
      ev_charging: 20,
      security_level: "high"
    },
    building_details: {
      year_built: 2022,
      architect: "ARM Architecture",
      total_floors: 8,
      basement_levels: 1,
      floor_area_sqm: 7500,
      energy_rating: "6 Star Green Star",
      construction_type: "Cross-laminated timber and steel",
      elevator_count: 3,
      stair_count: 2
    }
  }
];
var MOCK_ZONES = [];
var createMockLevel = (id, idx, building, levelCode = "1") => {
  const levelNumber = levelCode === "G" ? 0 : levelCode === "M" ? 0.5 : levelCode.startsWith("P") ? -parseInt(levelCode.substring(1)) : parseInt(levelCode) || 1;
  const isGroundFloor = levelCode === "G";
  const isMezzanine = levelCode === "M";
  const isParkingLevel = levelCode.startsWith("P");
  let levelType = "office";
  if (isParkingLevel)
    levelType = "parking";
  else if (isGroundFloor)
    levelType = "lobby";
  else if (isMezzanine)
    levelType = "mixed-use";
  const capacityByType = {
    parking: 0,
    lobby: 50,
    "mixed-use": Math.floor(building.capacity * 0.2),
    office: Math.floor(building.capacity * 0.4)
  };
  const levelName = isParkingLevel ? `Parking Level ${levelCode.substring(1)}` : isGroundFloor ? "Ground Floor" : isMezzanine ? "Mezzanine" : `Level ${levelCode}`;
  const displayName = levelName;
  const features = [];
  if (isGroundFloor)
    features.push("reception", "lobby", "cafe", "security");
  if (isMezzanine)
    features.push("meeting-rooms", "break-areas", "informal-seating");
  if (levelType === "office")
    features.push("workstations", "meeting-rooms", "collaboration-spaces");
  if (isParkingLevel)
    features.push("parking", "ev-charging", "bike-storage");
  return {
    id: `${building.id}_${id}`,
    name: levelName,
    display_name: displayName,
    parent_id: building.id,
    description: `${levelName} of ${building.name} featuring ${features.join(", ")}`,
    tags: ["level", levelType, building.tags[1]].filter(Boolean),
    map_id: `assets/maps/level_${levelCode}.svg`,
    code: `${building.name.substring(0, 3).toUpperCase()}-${levelCode}`,
    type: levelType,
    count: predictableRandomInt(15, 5),
    // Number of spaces/rooms
    capacity: capacityByType[levelType] || Math.floor(building.capacity * 0.3),
    location: `${building.address.coordinates.lat},${building.address.coordinates.lng}`,
    level_number: levelNumber,
    floor_area_sqm: Math.floor(building.building_details.floor_area_sqm / building.count),
    ceiling_height: levelType === "lobby" ? 4.5 : isParkingLevel ? 2.4 : 2.8,
    features,
    accessibility: {
      wheelchair_accessible: true,
      elevator_access: !isParkingLevel || building.building_details.elevator_count > 0,
      accessible_bathrooms: levelType !== "parking",
      hearing_loop: isGroundFloor || levelType === "office"
    },
    utilities: {
      power_outlets: levelType === "office" ? "extensive" : "standard",
      data_points: levelType === "office" ? "fiber_optic" : "standard",
      hvac_zones: Math.ceil((capacityByType[levelType] || 50) / 50),
      fire_safety: "compliant",
      security_systems: building.features.security_level
    },
    spaces: {
      meeting_rooms: levelType === "office" ? predictableRandomInt(8, 3) : isMezzanine ? predictableRandomInt(4, 2) : 0,
      workstations: levelType === "office" ? Math.floor((capacityByType[levelType] || 0) * 0.8) : 0,
      break_areas: levelType !== "parking" ? predictableRandomInt(3, 1) : 0,
      storage_rooms: predictableRandomInt(4, 1),
      bathrooms: isParkingLevel ? 1 : predictableRandomInt(4, 2),
      parking_spaces: isParkingLevel ? Math.floor(building.features.parking_spaces / 2) : 0
    },
    created_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(36, 6))),
    updated_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(3, 0))),
    settings: {
      booking_enabled: levelType !== "parking",
      public_access: isGroundFloor,
      after_hours_access: levelType === "office" ? "keycard" : "restricted",
      temperature_range: {
        min: 20,
        max: 26
      },
      lighting: {
        type: levelType === "office" ? "LED with daylight sensors" : "LED standard",
        zones: Math.ceil((capacityByType[levelType] || 30) / 30)
      }
    },
    maintenance: {
      last_inspection: getUnixTime(subMonths(Date.now(), predictableRandomInt(6, 1))),
      next_inspection: getUnixTime(new Date(Date.now() + predictableRandomInt(90, 30) * 24 * 60 * 60 * 1e3)),
      cleaning_schedule: isParkingLevel ? "weekly" : "daily",
      maintenance_contact: "Facilities Management"
    }
  };
};
var MOCK_LEVELS = MOCK_BUILDINGS.map((bld) => bld.levels.map((level, idx) => createMockLevel(level, idx, bld, level.split("-")[1]))).reduce((prev, current) => prev.concat(current), []);

// libs/mocks/src/lib/api/spaces.data.ts
var ROOM_FEATURES = {
  "Meeting Room": [
    "Whiteboard",
    "Display Screen",
    "Video Conference",
    "Phone"
  ],
  "Conference Room": [
    "Projector",
    "Video Conference",
    "Whiteboard",
    "Audio System",
    "Phone"
  ],
  Boardroom: [
    "Large Display",
    "Video Conference",
    "Audio System",
    "Whiteboard",
    "Climate Control",
    "Executive Seating"
  ],
  "Training Room": [
    "Projector",
    "Whiteboard",
    "Flipchart",
    "Audio System",
    "Breakout Tables"
  ],
  "Phone Booth": ["Phone", "Acoustic Privacy", "Power Outlet"],
  "Collaboration Space": [
    "Whiteboard",
    "Moveable Furniture",
    "Power Outlets",
    "Informal Seating"
  ],
  "Event Space": [
    "Audio System",
    "Projector",
    "Stage/Platform",
    "Catering Setup",
    "Flexible Seating"
  ],
  "Break Room": [
    "Kitchen Facilities",
    "Refrigerator",
    "Microwave",
    "Coffee Machine",
    "Seating"
  ],
  "Focus Room": [
    "Acoustic Privacy",
    "Desk",
    "Power Outlets",
    "Natural Light"
  ],
  "Presentation Room": [
    "Large Display",
    "Audio System",
    "Tiered Seating",
    "Lighting Control"
  ]
};
var CAPACITY_RANGES = {
  "Meeting Room": { min: 4, max: 12 },
  "Conference Room": { min: 8, max: 20 },
  Boardroom: { min: 10, max: 25 },
  "Training Room": { min: 15, max: 50 },
  "Phone Booth": { min: 1, max: 2 },
  "Collaboration Space": { min: 6, max: 15 },
  "Event Space": { min: 50, max: 200 },
  "Break Room": { min: 10, max: 30 },
  "Focus Room": { min: 1, max: 3 },
  "Presentation Room": { min: 20, max: 100 }
};
var BUILDING_THEMES = {
  "bld-01": {
    name: "Innovation Hub",
    floors: ["Ground", "Level 1", "Level 2"],
    style: "Modern",
    year: 2020
  },
  "bld-02": {
    name: "Executive Center",
    floors: ["Ground", "Level 2", "Level 3", "Level 4"],
    style: "Premium",
    year: 2018
  },
  "bld-03": {
    name: "Creative Campus",
    floors: ["Ground", "Mezzanine", "Level 1"],
    style: "Collaborative",
    year: 2021
  },
  "bld-04": {
    name: "Melbourne Tower",
    floors: ["Ground", "Level 1", "Level 2", "Level 3", "Level 4"],
    style: "Corporate",
    year: 2019
  },
  "bld-05": {
    name: "Melbourne Innovation Lab",
    floors: ["Ground", "Level 1", "Level 2"],
    style: "Research",
    year: 2022
  }
};
var REALISTIC_ROOM_NAMES = [
  // Meeting Rooms
  {
    name: "Sydney Harbour",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Melbourne Cup", type: "Meeting Room", theme: "Australian Cities" },
  {
    name: "Brisbane River",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Perth Skyline", type: "Meeting Room", theme: "Australian Cities" },
  {
    name: "Adelaide Hills",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Darwin Sunset", type: "Meeting Room", theme: "Australian Cities" },
  // Conference Rooms
  { name: "Innovation Lab", type: "Conference Room", theme: "Business" },
  { name: "Strategy Center", type: "Conference Room", theme: "Business" },
  { name: "Think Tank", type: "Conference Room", theme: "Business" },
  { name: "Solution Studio", type: "Conference Room", theme: "Business" },
  { name: "Discovery Room", type: "Conference Room", theme: "Business" },
  { name: "Vision Quest", type: "Conference Room", theme: "Business" },
  // Boardrooms
  { name: "Executive Boardroom", type: "Boardroom", theme: "Executive" },
  { name: "Chairman's Suite", type: "Boardroom", theme: "Executive" },
  { name: "Directors Lounge", type: "Boardroom", theme: "Executive" },
  { name: "Leadership Circle", type: "Boardroom", theme: "Executive" },
  // Training Rooms
  { name: "Learning Hub Alpha", type: "Training Room", theme: "Education" },
  {
    name: "Development Center Beta",
    type: "Training Room",
    theme: "Education"
  },
  { name: "Skills Workshop", type: "Training Room", theme: "Education" },
  { name: "Knowledge Exchange", type: "Training Room", theme: "Education" },
  { name: "Growth Academy", type: "Training Room", theme: "Education" },
  // Phone Booths
  { name: "Call Pod 1", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 2", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 3", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 4", type: "Phone Booth", theme: "Functional" },
  { name: "Privacy Booth A", type: "Phone Booth", theme: "Functional" },
  { name: "Privacy Booth B", type: "Phone Booth", theme: "Functional" },
  // Collaboration Spaces
  { name: "Creative Corner", type: "Collaboration Space", theme: "Creative" },
  { name: "Brainstorm Bay", type: "Collaboration Space", theme: "Creative" },
  { name: "Idea Incubator", type: "Collaboration Space", theme: "Creative" },
  {
    name: "Innovation Intersection",
    type: "Collaboration Space",
    theme: "Creative"
  },
  { name: "Design Den", type: "Collaboration Space", theme: "Creative" },
  // Event Spaces
  { name: "Grand Auditorium", type: "Event Space", theme: "Events" },
  { name: "Conference Hall", type: "Event Space", theme: "Events" },
  { name: "Presentation Theater", type: "Event Space", theme: "Events" },
  { name: "Multi-Purpose Arena", type: "Event Space", theme: "Events" },
  // Break Rooms
  { name: "Coffee Central", type: "Break Room", theme: "Social" },
  { name: "Relaxation Station", type: "Break Room", theme: "Social" },
  { name: "Social Hub", type: "Break Room", theme: "Social" },
  { name: "Refresh & Recharge", type: "Break Room", theme: "Social" },
  { name: "Community Kitchen", type: "Break Room", theme: "Social" },
  // Focus Rooms
  { name: "Deep Work Den", type: "Focus Room", theme: "Productivity" },
  { name: "Concentration Cave", type: "Focus Room", theme: "Productivity" },
  { name: "Quiet Quarters", type: "Focus Room", theme: "Productivity" },
  { name: "Focus Flow", type: "Focus Room", theme: "Productivity" },
  { name: "Zen Zone", type: "Focus Room", theme: "Productivity" },
  // Presentation Rooms
  { name: "Demo Theater", type: "Presentation Room", theme: "Presentation" },
  {
    name: "Showcase Auditorium",
    type: "Presentation Room",
    theme: "Presentation"
  },
  {
    name: "Client Presentation Suite",
    type: "Presentation Room",
    theme: "Presentation"
  }
];
var generateRoomCode = (building, floor, index) => {
  const bldCode = building.split("-")[1];
  const floorCode = floor.includes("Ground") ? "G" : floor.includes("Mezzanine") ? "M" : floor.match(/\d+/) ? floor.match(/\d+/)[0] : "1";
  return `${bldCode}.${floorCode}.${String(index + 1).padStart(2, "0")}`;
};
var getRandomFeatures = (roomType) => {
  const availableFeatures = ROOM_FEATURES[roomType] || [];
  const numFeatures = predictableRandomInt(availableFeatures.length - 1, 2);
  const selectedFeatures = [];
  for (let i = 0; i < numFeatures; i++) {
    const feature = availableFeatures[predictableRandomInt(availableFeatures.length)];
    if (!selectedFeatures.includes(feature)) {
      selectedFeatures.push(feature);
    }
  }
  return selectedFeatures;
};
var getCapacityForRoomType = (roomType) => {
  const range = CAPACITY_RANGES[roomType] || { min: 4, max: 12 };
  return predictableRandomInt(range.max - range.min, range.min);
};
var getZoneHierarchy = (buildingId, levelId) => {
  const building = MOCK_BUILDINGS.find((b) => b.id === buildingId);
  if (!building)
    return ["zone-org", "region-sydney", buildingId, levelId];
  const region = MOCK_REGIONS.find((r) => r.id === building.parent_id);
  const orgId = region ? region.parent_id : "zone-org";
  return [orgId, building.parent_id, buildingId, levelId];
};
var generateSpaceData = () => {
  const spaces = [];
  let spaceIndex = 0;
  Object.entries(BUILDING_THEMES).forEach(([buildingId, buildingInfo]) => {
    buildingInfo.floors.forEach((floor, floorIndex) => {
      const floorId = `${buildingId}_lvl-${floorIndex}`;
      const spacesPerFloor = predictableRandomInt(16, 5);
      for (let i = 0; i < spacesPerFloor; i++) {
        const roomData = REALISTIC_ROOM_NAMES[spaceIndex % REALISTIC_ROOM_NAMES.length];
        const roomCode = generateRoomCode(buildingId, floor, i);
        const capacity = getCapacityForRoomType(roomData.type);
        const features = getRandomFeatures(roomData.type);
        const isBookable = ![
          "Break Room",
          "Collaboration Space",
          "Focus Room"
        ].includes(roomData.type) || predictableRandomInt(3) === 0;
        const imageCategories = {
          "Meeting Room": "meeting-room",
          "Conference Room": "conference-room",
          Boardroom: "boardroom",
          "Training Room": "training-room",
          "Phone Booth": "phone-booth",
          "Collaboration Space": "collaboration-space",
          "Event Space": "event-space",
          "Break Room": "break-room",
          "Focus Room": "focus-room",
          "Presentation Room": "presentation-room"
        };
        const space = {
          id: `space-${spaceIndex + 1}`,
          name: `${roomCode} ${roomData.name}`,
          display_name: roomData.name,
          map_id: `area-${roomCode.toLowerCase()}-status`,
          zones: getZoneHierarchy(buildingId, floorId),
          type: roomData.type,
          capacity,
          features,
          images: [
            `https://images.unsplash.com/photo-${15e8 + spaceIndex * 1e5}?w=800&h=600&fit=crop`,
            ...capacity > 10 ? [
              `https://images.unsplash.com/photo-${15e8 + spaceIndex * 1e5 + 5e4}?w=800&h=600&fit=crop`
            ] : []
          ],
          bookable: isBookable,
          level: {
            id: floorId,
            parent_id: buildingId,
            name: floor,
            display_name: floor,
            capacity,
            number: floorIndex.toString(),
            map_id: `${buildingId}_${floorIndex}`,
            tags: [
              buildingInfo.style.toLowerCase(),
              roomData.theme.toLowerCase()
            ],
            settings: {
              booking_enabled: isBookable,
              auto_release: roomData.type === "Meeting Room" || roomData.type === "Conference Room",
              max_booking_duration: roomData.type === "Phone Booth" ? 60 : roomData.type === "Focus Room" ? 240 : roomData.type === "Event Space" ? 480 : 240
            },
            images: [
              `https://images.unsplash.com/photo-${14e8 + floorIndex * 2e5}?w=1200&h=800&fit=crop`
            ],
            locations: {
              id: floorId,
              name: floor,
              building: buildingInfo.name
            }
          },
          // Additional metadata
          building: buildingInfo.name,
          building_id: buildingId,
          floor,
          floor_number: floorIndex,
          room_code: roomCode,
          theme: roomData.theme,
          style: buildingInfo.style,
          year_built: buildingInfo.year,
          last_renovation: buildingInfo.year + predictableRandomInt(4, 1),
          accessibility: {
            wheelchair_accessible: predictableRandomInt(4) !== 0,
            // 75% accessible
            hearing_loop: [
              "Boardroom",
              "Event Space",
              "Presentation Room"
            ].includes(roomData.type),
            braille_signage: predictableRandomInt(2) === 0
          },
          equipment: features.map((feature) => ({
            name: feature,
            status: [
              "Working",
              "Working",
              "Working",
              "Maintenance"
            ][predictableRandomInt(4)],
            last_serviced: new Date(Date.now() - predictableRandomInt(90) * 24 * 60 * 60 * 1e3).toISOString()
          })),
          amenities: {
            natural_light: !roomData.name.toLowerCase().includes("pod") && predictableRandomInt(3) !== 0,
            air_conditioning: true,
            power_outlets: capacity * (roomData.type === "Training Room" ? 2 : 1),
            wifi: true,
            catering_available: [
              "Conference Room",
              "Boardroom",
              "Training Room",
              "Event Space"
            ].includes(roomData.type),
            parking_nearby: buildingId === "bld-01" || predictableRandomInt(2) === 0
          },
          booking_rules: {
            advance_booking_days: roomData.type === "Event Space" ? 90 : roomData.type === "Boardroom" ? 60 : 30,
            min_booking_duration: roomData.type === "Phone Booth" ? 15 : 30,
            max_booking_duration: roomData.type === "Phone Booth" ? 60 : roomData.type === "Focus Room" ? 240 : 480,
            buffer_time: roomData.type === "Event Space" ? 30 : 15,
            approval_required: roomData.type === "Boardroom" || roomData.type === "Event Space"
          },
          cost_center: buildingInfo.name.toLowerCase().replace(/\s+/g, "-"),
          hourly_rate: roomData.type === "Event Space" ? predictableRandomInt(200, 100) : roomData.type === "Boardroom" ? predictableRandomInt(100, 50) : roomData.type === "Phone Booth" ? 0 : predictableRandomInt(50, 10)
        };
        spaces.push(space);
        spaceIndex++;
      }
    });
  });
  return spaces;
};
var rawSpaces = generateSpaceData();
var MOCK_SPACES = rawSpaces.map((space) => generateMockSpace(__spreadProps(__spreadValues({}, space), {
  features: space.features || [],
  images: space.images || [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  ]
})));

// libs/mocks/src/lib/api/bookings.data.ts
var TRACKING = ["in_storage", "in_transit", "at_location"];
var generateBookingForDay = (day, type2, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const lvl_spaces = MOCK_SPACES.filter((_) => _.zones.includes(lvl?.id)) || [];
  const approved = predictableRandomInt(999999) % 4;
  const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
  const guest = MOCK_GUESTS[predictableRandomInt(MOCK_GUESTS.length)];
  const asset_count = predictableRandomInt(3, 1);
  const position = padString(predictableRandomInt(999) + 1, 3);
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 7));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(240, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const qr_base = Date.now() * predictableRandomInt(999999, 1) / 1e5;
  return {
    id: index,
    qr_code: Math.floor(qr_base).toString(),
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: capitalizeFirstLetter(`${type2.replace("-", " ")} booking ${index}`),
    event_start: booking_start,
    event_end: booking_end,
    asset_ids: type2 === "asset-request" ? [...Array(asset_count)].map((_, i) => MOCK_ASSETS[predictableRandomInt(MOCK_ASSETS.length, i + 1)].id) : [
      type2 === "visitor" ? guest.email : `${type2}-${bld?.id}-${lvl?.id}-${position}`
    ],
    asset_id: type2 === "visitor" ? guest.email : `${type2}-${bld?.id}-${lvl?.id}-${position}`,
    asset_name: type2 === "visitor" ? guest.name : `${bld?.name}-${position}`,
    description: type2 === "visitor" ? guest.name : `${capitalizeFirstLetter(type2.replace("-", " "))} in ${bld?.name}`,
    booking_type: type2,
    type: type2,
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: approved && predictableRandomInt(4) <= 2,
    rejected: predictableRandomInt(12) === 0,
    approved: approved !== 0,
    deleted: false,
    access: approved !== 0,
    permission: type2 === "group-event" ? "OPEN" : "PRIVATE",
    approver_id: approved ? approver.id : "",
    approver_name: approved ? approver.name : "",
    approver_email: approved ? approver.email : "",
    process_state: type2 === "asset-request" ? TRACKING[predictableRandomInt(TRACKING.length, index)] : "",
    last_changed: booking_start,
    created: booking_start - 3600,
    created_by_id: user.id,
    created_by_name: user.name,
    created_by_email: user.email,
    zones: [
      bld?.id,
      type2 === "parking" ? MOCK_LEVELS.find((l) => l.parent_id === bld?.id && l.type === "parking")?.id : lvl?.id
    ].filter(Boolean),
    extension_data: {
      map_id: `table-${bld?.id}.${position}`,
      note: capitalizeFirstLetter(`${type2.replace("-", " ")} booking ${index}`),
      notes: "",
      plate_number: randomString(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      tracking: approved ? "at_location" : "in_storage",
      space_id: lvl_spaces.length ? lvl_spaces[predictableRandomInt(lvl_spaces.length)].id : `space-${index}`,
      building_id: bld?.id,
      building_name: bld?.name
    }
  };
};
var MOCK_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const dayBookings = [];
    const staffWithoutActive = MOCK_STAFF.filter((u) => u.id !== ACTIVE_USER.id);
    const targetUserCount = Math.min(20, staffWithoutActive.length);
    const shuffled = [...staffWithoutActive];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = predictableRandomInt(i + 1);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    const selectedUsers = shuffled.slice(0, targetUserCount);
    {
      const activeFromStaff = MOCK_STAFF.find((u) => u.id === ACTIVE_USER.id);
      selectedUsers.push(activeFromStaff || __spreadProps(__spreadValues({}, ACTIVE_USER), {
        extension_data: {
          employee_id: "EMP0000",
          start_date: (/* @__PURE__ */ new Date()).toISOString(),
          manager_id: null
        }
      }));
    }
    selectedUsers.forEach((user) => {
      const userDayBookings = [];
      if (!user)
        return;
      const deskBookingCount = predictableRandomInt(4, 1);
      for (let i = 0; i < deskBookingCount; i++) {
        const booking = generateBookingForDay(day, "desk", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 2);
        const latestStartHour = 18 - durationHours;
        const minStartHour = Math.min(7 + i * 3, latestStartHour);
        const startHour = predictableRandomInt(latestStartHour + 1, minStartHour);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "parking", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 6);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "visitor", bookingIndex++, user);
        const durationHours = predictableRandomInt(4, 1);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      dayBookings.push(...userDayBookings);
    });
    bookings.push(...dayBookings);
  }
  const active_user = MOCK_STAFF.find((user) => user.id === ACTIVE_USER.id);
  for (const bld of active_user ? MOCK_BUILDINGS : []) {
    const booking = generateBookingForDay(15, "parking", bookingIndex++, active_user);
    const parking_level = MOCK_LEVELS.find((level) => level.parent_id === bld.id && level.type === "parking");
    booking.title = `Cancelled parking request - ${bld.name}`;
    booking.description = "Cancelled mock request for testing disabled parking actions";
    booking.asset_id = `unallocated-${bld.id}-cancelled`;
    booking.asset_ids = [booking.asset_id];
    booking.asset_name = "Unallocated parking request";
    booking.checked_in = false;
    booking.rejected = false;
    booking.approved = false;
    booking.deleted = true;
    booking.access = false;
    booking.zones = [bld.id, parking_level?.id].filter(Boolean);
    booking.extension_data = __spreadProps(__spreadValues({}, booking.extension_data), {
      notes: "Cancelled mock request",
      plate_number: "CANCELLED"
    });
    bookings.push(booking);
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();
var generateCateringOrderBooking = (day, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 8));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(120, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const cateringOrder = generateCateringOrder({
    id: `catering-event-${index}`,
    event_start: booking_start,
    event_end: booking_end,
    attendees: [user],
    location: space?.name || "Meeting Room"
  });
  const caterer = [
    "Gourmet Events Catering",
    "Fresh & Local Kitchen",
    "Premium Dining"
  ][predictableRandomInt(3)];
  const items_with_caterer = cateringOrder.items.map((item) => __spreadProps(__spreadValues({}, item), {
    caterer
  }));
  return {
    id: 1e4 + index,
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: `Catering Order ${index}`,
    event_start: booking_start,
    event_end: booking_end,
    asset_id: cateringOrder.id,
    asset_name: `Catering Order - ${space?.name || "Meeting Room"}`,
    description: `Catering order for ${space?.name || "Meeting Room"}`,
    booking_type: "catering-order",
    type: "catering-order",
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: false,
    rejected: false,
    approved: true,
    zones: [bld?.id, lvl?.id].filter(Boolean),
    extension_data: {
      details: {
        id: cateringOrder.id,
        deliver_at: cateringOrder.deliver_at,
        items: items_with_caterer,
        charge_code: cateringOrder.charge_code,
        invoice_number: cateringOrder.invoice_number,
        notes: cateringOrder.notes,
        status: cateringOrder.status,
        caterer
      }
    },
    linked_event: {
      id: `linked-event-${index}`,
      title: `Meeting with Catering`,
      event_start: booking_start,
      event_end: booking_end,
      host: user.email,
      system_id: space?.id,
      location: space?.name || "Meeting Room",
      organiser: {
        name: user.name,
        email: user.email
      }
    }
  };
};
var MOCK_CATERING_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const ordersPerDay = predictableRandomInt(5, 3);
    for (let i = 0; i < ordersPerDay; i++) {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      if (!user)
        continue;
      const booking = generateCateringOrderBooking(day, bookingIndex++, user);
      bookings.push(booking);
    }
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();

// libs/mocks/src/lib/api/bookings.mock.ts
var ALL_BOOKINGS = [...MOCK_BOOKINGS, ...MOCK_CATERING_BOOKINGS];
function registerMockBookings() {
  to({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = ALL_BOOKINGS;
      if (!_.query_params.zone_ids && !_.query_params.zones) {
        _.query_params.user_id = ACTIVE_USER.id;
      }
      if (_.query_params.user_id) {
        events = events.filter((booking) => booking.user_id === _.query_params.user_id);
      }
      if (_.query_params.email) {
        events = events.filter((booking) => booking.user_email === _.query_params.email);
      }
      if (_.query_params.zones || _.query_params.zone_ids) {
        const zones = (_.query_params.zones || _.query_params.zone_ids || "").split(",").filter((id) => !!id);
        if (zones.length > 0) {
          events = events.filter((booking) => zones.some((zone) => booking.zones.includes(zone)));
        }
      }
      if (_.query_params.period_start && _.query_params.period_end) {
        events = events.filter((event) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, event.booking_start, event.booking_end));
      }
      if (_.query_params.type) {
        events = events.filter((event) => event.type === _.query_params.type || event.booking_type === _.query_params.type);
      }
      const limit = +_.query_params.limit || 50;
      const offset = +_.query_params.offset || 0;
      events = events.slice(offset, offset + limit);
      return events;
    }
  });
  to({
    path: "/api/debug/bookings/distribution",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const distribution = {};
      MOCK_BOOKINGS.forEach((booking) => {
        if (!distribution[booking.user_id]) {
          distribution[booking.user_id] = {
            user_name: booking.user_name,
            user_email: booking.user_email,
            total: 0,
            desk: 0,
            parking: 0,
            visitor: 0,
            other: 0
          };
        }
        distribution[booking.user_id].total++;
        if (booking.type === "desk")
          distribution[booking.user_id].desk++;
        else if (booking.type === "parking")
          distribution[booking.user_id].parking++;
        else if (booking.type === "visitor")
          distribution[booking.user_id].visitor++;
        else
          distribution[booking.user_id].other++;
      });
      return {
        total_bookings: MOCK_BOOKINGS.length,
        total_users: Object.keys(distribution).length,
        distribution
      };
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      }
      const user = {
        id: _.body.id,
        name: _.body.name,
        email: _.body.email
      };
      event.attendees.push(user);
      return user;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    metadata: {},
    method: "DELETE",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      const guest = event.attendees.find((_2) => _2.email === decodeURIComponent(email));
      if (!guest) {
        throw {
          status: 404,
          message: `Unable to find guest with email ${decodeURIComponent(email)}`
        };
      }
      return guest;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      event.attendees = event.attendees.filter((_2) => _2.email !== decodeURIComponent(email));
      return {};
    }
  });
  to({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-booking-${predictableRandomInt(999)}`
      });
      MOCK_BOOKINGS.push(new_event);
      return new_event;
    }
  });
  const updateBooking = (id, data) => {
    const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${id}`);
    if (index < 0)
      throw {
        status: 404,
        message: `Unable to find booking with ID ${id}`
      };
    const new_event = __spreadValues({}, data);
    ALL_BOOKINGS.splice(index, 1, new_event);
    return new_event;
  };
  to({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PATCH",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  to({
    path: "/api/staff/v1/bookings/:id/approve",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.approved = true;
      booking.rejected = false;
      return booking;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id/reject",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.approved = false;
      booking.rejected = true;
      return booking;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id/check_in",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      const state = `${req.query_params?.state ?? "true"}` === "true";
      booking.checked_in = state;
      if (state) {
        booking.checked_in_at = getUnixTime(Date.now());
        delete booking.checked_out_at;
      } else {
        booking.checked_out_at = getUnixTime(Date.now());
      }
      return booking;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id/update_induction",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      const induction = req.query_params.induction || "tentative";
      booking.induction = induction;
      return booking;
    }
  });
  to({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PUT",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  to({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${req.route_params.id}`);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      ALL_BOOKINGS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/events.data.ts
var EVENT_TIME = setHours(startOfDay(Date.now()), 7);
var event_status = ["tentative", "confirmed", "cancelled"];
var randomStatus = () => {
  const rnd = predictableRandomInt(10);
  return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
var MEETING_TYPES = {
  "Team Standup": {
    category: "Operational",
    body: "Daily team synchronization meeting to discuss progress, blockers, and priorities.",
    typical_attendees: 5,
    departments: ["Engineering", "Product", "Design"]
  },
  "Project Kickoff": {
    category: "Project",
    body: "Initial meeting to define project scope, objectives, timeline, and team responsibilities.",
    typical_attendees: 8,
    departments: ["Engineering", "Product", "Design", "Marketing"]
  },
  "Client Presentation": {
    category: "Client",
    body: "Formal presentation of project deliverables, progress updates, or proposal pitch to client stakeholders.",
    typical_attendees: 6,
    departments: ["Sales", "Marketing", "Engineering"]
  },
  "Strategic Planning": {
    category: "Strategic",
    body: "High-level discussion on company direction, quarterly goals, and resource allocation strategies.",
    typical_attendees: 4,
    departments: ["Leadership", "Product", "Finance"]
  },
  "Code Review Session": {
    category: "Technical",
    body: "Collaborative review of code changes, architecture decisions, and technical implementation details.",
    typical_attendees: 4,
    departments: ["Engineering"]
  },
  "Training Workshop": {
    category: "Training",
    body: "Educational session covering new technologies, processes, or professional development topics.",
    typical_attendees: 12,
    departments: ["All Departments"]
  },
  "Budget Review": {
    category: "Financial",
    body: "Quarterly financial review covering expenses, revenue projections, and budget adjustments.",
    typical_attendees: 6,
    departments: ["Finance", "Leadership", "Operations"]
  },
  "1:1 Meeting": {
    category: "Personal",
    body: "Individual meeting between manager and team member for performance discussion and feedback.",
    typical_attendees: 2,
    departments: ["All Departments"]
  },
  "Product Demo": {
    category: "Product",
    body: "Demonstration of new features, product updates, or prototype showcasing to stakeholders.",
    typical_attendees: 8,
    departments: ["Product", "Engineering", "Design", "Marketing"]
  },
  "Team Building": {
    category: "Social",
    body: "Interactive activities designed to improve team cohesion, communication, and workplace culture.",
    typical_attendees: 15,
    departments: ["All Departments"]
  },
  "Interview Panel": {
    category: "HR",
    body: "Candidate interview session with multiple team members to evaluate fit and technical skills.",
    typical_attendees: 4,
    departments: ["HR", "Engineering", "Product"]
  },
  "Vendor Meeting": {
    category: "Business",
    body: "Discussion with external vendors regarding partnerships, services, or procurement decisions.",
    typical_attendees: 5,
    departments: ["Operations", "Finance", "Leadership"]
  },
  "Risk Assessment": {
    category: "Strategic",
    body: "Analysis and discussion of potential project risks, mitigation strategies, and contingency planning.",
    typical_attendees: 6,
    departments: ["Leadership", "Operations", "Finance"]
  },
  "Innovation Brainstorm": {
    category: "Creative",
    body: "Creative ideation session for new product features, process improvements, or market opportunities.",
    typical_attendees: 8,
    departments: ["Product", "Design", "Engineering", "Marketing"]
  },
  "Compliance Review": {
    category: "Legal",
    body: "Review of regulatory requirements, policy updates, and compliance procedures.",
    typical_attendees: 5,
    departments: ["Legal", "Operations", "Leadership"]
  },
  "All Hands Meeting": {
    category: "Company",
    body: "Company-wide meeting for announcements, updates, and team recognition.",
    typical_attendees: 50,
    departments: ["All Departments"]
  },
  "Sprint Planning": {
    category: "Agile",
    body: "Planning session for upcoming sprint work, story estimation, and capacity planning.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  Retrospective: {
    category: "Agile",
    body: "Team reflection on completed sprint, identifying improvements and celebrating successes.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  "User Research": {
    category: "Research",
    body: "Discussion of user feedback, research findings, and implications for product development.",
    typical_attendees: 5,
    departments: ["Product", "Design", "Engineering"]
  },
  "Security Briefing": {
    category: "Security",
    body: "Review of security protocols, threat assessments, and incident response procedures.",
    typical_attendees: 8,
    departments: ["Engineering", "Operations", "Leadership"]
  }
};
var getRandomMeetingContent = () => {
  const titles = Object.keys(MEETING_TYPES);
  const title = titles[predictableRandomInt(titles.length)];
  return __spreadValues({
    title
  }, MEETING_TYPES[title]);
};
var generateMeetingUrl = () => {
  const providers = [
    { name: "Zoom", urlPattern: "https://zoom.us/j/" },
    {
      name: "Microsoft Teams",
      urlPattern: "https://teams.microsoft.com/l/meetup-join/"
    },
    { name: "Google Meet", urlPattern: "https://meet.google.com/" },
    { name: "WebEx", urlPattern: "https://placeos.webex.com/meet/" }
  ];
  const provider = providers[predictableRandomInt(providers.length)];
  const meetingId = Math.random().toString(36).substring(2, 15);
  return {
    provider: provider.name,
    url: provider.urlPattern + meetingId,
    id: meetingId
  };
};
var MOCK_EVENTS = (() => {
  const events = [];
  const totalDays = 30;
  const dayOffset = -15;
  MOCK_SPACES.forEach((space, spaceIndex) => {
    for (let day = 0; day < totalDays; day++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 7);
      const hourOffset = 7 + (spaceIndex + day) % 11;
      const minuteOffset = (spaceIndex * 17 + day * 13) % 60;
      const eventTime = getUnixTime(setHours(setMinutes(dayStart, minuteOffset), hourOffset));
      const availableStaff = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email);
      const host = availableStaff[spaceIndex % availableStaff.length];
      const colleagues = MOCK_STAFF.filter((s) => s.department === host.department && s.email !== host.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(3) + 1);
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const attendees = [host, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `space-daily-${space.id}-${day}`,
        status: randomStatus(),
        host: host.email,
        calendar: `calendar-${host.department?.toLowerCase() || "general"}`,
        creator: host.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: predictableRandomInt(4) === 0,
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: host.department?.toLowerCase().replace(/\s+/g, "-") || "general",
          priority: "normal",
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  });
  const activeUserDailyCount = /* @__PURE__ */ new Map();
  MOCK_STAFF.forEach((user, userIndex) => {
    if (user.email === ACTIVE_USER.email) {
      return;
    }
    for (let day = 0; day < totalDays; day++) {
      const eventsPerDay = predictableRandomInt(3) + 1;
      for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
        const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 8);
        const hourOffset = 8 + eventNum * 3 + userIndex % 3;
        const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 17)));
        const space = MOCK_SPACES[(userIndex + day + eventNum) % MOCK_SPACES.length];
        let colleagues = MOCK_STAFF.filter((s) => s.department === user.department && s.email !== user.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 1);
        const currentDayCount = activeUserDailyCount.get(day) || 0;
        const shouldIncludeActiveUser = user.department === ACTIVE_USER.department && currentDayCount === 0 && predictableRandomInt(5) === 0;
        if (shouldIncludeActiveUser) {
          colleagues = [...colleagues, ACTIVE_USER];
          activeUserDailyCount.set(day, currentDayCount + 1);
        }
        const meetingContent = getRandomMeetingContent();
        const meetingInfo = generateMeetingUrl();
        const attendees = [user, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
          organizer: idx === 0,
          checked_in: predictableRandomInt(99999) % 3 === 0,
          response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
        }));
        const event_start = eventTime;
        const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
        events.push({
          id: `user-daily-${userIndex}-${day}-${eventNum}`,
          status: randomStatus(),
          host: user.email,
          calendar: `calendar-${user.department?.toLowerCase() || "general"}`,
          creator: user.email,
          attendees,
          title: meetingContent.title,
          body: meetingContent.body,
          private: predictableRandomInt(4) === 0,
          event_start,
          event_end,
          timezone: "Australia/Sydney",
          all_day: false,
          location: space?.name || "TBD",
          recurring: predictableRandomInt(10) === 0,
          recurrence: {},
          attachments: {},
          system: space,
          meeting_url: meetingInfo.url,
          meeting_id: meetingInfo.id,
          meeting_provider: meetingInfo.provider,
          extension_data: {
            category: meetingContent.category,
            catering: [],
            setup: 0,
            breakdown: 0,
            cost_center: user.department?.toLowerCase().replace(/\s+/g, "-") || "general",
            priority: "normal",
            estimated_attendees: attendees.length,
            actual_attendees: attendees.length
          }
        });
      }
    }
  });
  for (let day = 0; day < totalDays; day++) {
    const eventsPerDay = predictableRandomInt(3) + 1;
    for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 9);
      const hourOffset = 9 + eventNum * 3;
      const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 16)));
      const space = MOCK_SPACES[(day + eventNum) % MOCK_SPACES.length];
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const colleagues = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 2);
      const attendees = [ACTIVE_USER, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `active-user-daily-${day}-${eventNum}`,
        status: "confirmed",
        host: ACTIVE_USER.email,
        calendar: `calendar-${ACTIVE_USER.department?.toLowerCase() || "engineering"}`,
        creator: ACTIVE_USER.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: eventNum === 0,
        // Make first event of day private sometimes
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: ACTIVE_USER.department?.toLowerCase().replace(/\s+/g, "-") || "engineering",
          priority: eventNum === 0 ? "high" : "normal",
          // First event of day is high priority
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  }
  const uniqueEvents = events.filter((event, index, array) => index === array.findIndex((e) => e.id === event.id));
  return uniqueEvents.sort((a, b) => a.event_start - b.event_start);
})();
var event_spaces = MOCK_SPACES.map((space) => space.id);

// libs/mocks/src/lib/api/calendars.mock.ts
function registerMockCalendars() {
  to({
    path: "/api/staff/v1/calendars",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user2 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user3 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      return [
        {
          id: ACTIVE_USER.email,
          summary: ACTIVE_USER.name,
          primary: true,
          can_edit: true,
          hidden: false
        },
        {
          id: user.email,
          summary: user.name,
          primary: false,
          can_edit: true,
          hidden: false
        },
        {
          id: user2.email,
          summary: user2.name,
          primary: false,
          can_edit: false,
          hidden: false
        },
        {
          id: user3.email,
          summary: user3.name,
          primary: false,
          can_edit: false,
          hidden: true
        }
      ];
    }
  });
  const handleSpaceAvailability = (request) => {
    const start = +request.query_params.period_start;
    const end = +request.query_params.period_end;
    const zones = (request.query_params.zone_ids || "").split(",").filter((i) => !!i);
    const systems = (request.query_params.system_ids || "").split(",").filter((i) => !!i);
    const spaces = MOCK_SPACES.filter((space) => zones.length ? zones.reduce((has, zone) => has && space.zones.includes(zone), true) : systems.length ? systems.includes(space.id) : true).filter((space) => {
      const bookings = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.id === space.id));
      for (const event of bookings) {
        if (timePeriodsIntersect(start, end, event.event_start, event.event_end))
          return false;
      }
      return true;
    });
    return spaces;
  };
  to({
    path: "/api/staff/v1/calendars/availability",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
  to({
    path: "/api/staff/v1/calendars/free_busy",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
}

// libs/mocks/src/lib/api/events.mock.ts
function registerMockEvents() {
  to({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = MOCK_EVENTS;
      if (!_.query_params.zone_ids) {
        events = events.filter((event) => !!event.attendees.find((user) => user.email === ACTIVE_USER.email));
      } else if (_.query_params.zone_ids) {
        events = events.filter((event) => !!event.system.zones.find((zone) => _.query_params.zone_ids.includes(zone)));
      }
      if (_.query_params.period_start) {
        events = events.filter((e) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, e.event_start, e.event_end));
      }
      return events;
    }
  });
  to({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-cal-event-${predictableRandomInt(999)}`
      });
      new_event.attendees = [
        MOCK_STAFF.find((_) => _.email === new_event.host),
        ...new_event.attendees || []
      ];
      new_event.attendees.forEach((user) => {
        if (user.zones)
          user.resource = true;
      });
      if (new_event.system) {
        new_event.attendees = [
          ...new_event.attendees || [],
          __spreadProps(__spreadValues({}, new_event.system), { resource: true })
        ];
      }
      MOCK_EVENTS.push(new_event);
      const system = Ar(new_event.system?.id);
      system?.Bookings[0]?.$poll_bookings();
      return new_event;
    }
  });
  to({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const item = MOCK_EVENTS.find((event) => event.id === request.route_params.id);
      if (item) {
        return item;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  to({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index > 0) {
        if (MOCK_EVENTS[index].host === ACTIVE_USER.email) {
          MOCK_EVENTS.splice(index, 1);
        } else {
          const user = MOCK_EVENTS[index].attendees.find((_) => _.email === ACTIVE_USER.email);
          user.response_status = "declined";
        }
        return;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  to({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index >= 0) {
        return MOCK_EVENTS.splice(index, 1, request.body);
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  to({
    path: "/api/staff/v1/events/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const event = MOCK_EVENTS.find((event2) => event2.id === request.route_params.id);
      if (event) {
        const checked_in = event.extension_data.checked_in || [];
        event.extension_data.checked_in = checked_in.concat([
          request.route_params.email
        ]);
        return event;
      }
      throw { status: 404, message: "Guest not found" };
    }
  });
}

// libs/mocks/src/lib/api/signage.mock.ts
var CONTENT_CATEGORIES = [
  { id: "announcements", name: "Announcements", color: "#FF5722" },
  { id: "events", name: "Events & Meetings", color: "#2196F3" },
  { id: "wayfinding", name: "Wayfinding", color: "#4CAF50" },
  { id: "emergency", name: "Emergency", color: "#F44336" },
  { id: "corporate", name: "Corporate Updates", color: "#673AB7" },
  { id: "wellness", name: "Wellness & Safety", color: "#FF9800" },
  { id: "social", name: "Social & Community", color: "#E91E63" },
  { id: "weather", name: "Weather & External", color: "#607D8B" }
];
var MEDIA_TYPES = [
  "image",
  "video",
  "html",
  "text",
  "slideshow",
  "live_feed",
  "weather",
  "calendar"
];
var DISPLAY_ORIENTATIONS = ["landscape", "portrait", "square"];
var DISPLAY_RESOLUTIONS = [
  "1920x1080",
  "1080x1920",
  "3840x2160",
  "2160x3840",
  "1366x768",
  "768x1366"
];
var CONTENT_TEMPLATES = [
  {
    category: "announcements",
    title: "Weekly Office Updates",
    description: "Important announcements and office news",
    content: {
      headline: "This Week in the Office",
      items: [
        "New parking guidelines effective Monday",
        "Kitchen renovation completed on Level 2",
        "Fire drill scheduled for Thursday 2PM",
        "Coffee machine maintenance this Friday"
      ]
    },
    duration: 15e3
    // 15 seconds
  },
  {
    category: "events",
    title: "Today's Meetings",
    description: "Real-time meeting room schedule display",
    content: {
      template: "meeting_schedule",
      refresh_interval: 3e5,
      // 5 minutes
      show_next_hours: 8
    },
    duration: 3e4
    // 30 seconds
  },
  {
    category: "wayfinding",
    title: "Building Directory",
    description: "Interactive building navigation",
    content: {
      floors: [
        {
          level: "Ground",
          departments: ["Reception", "Cafe", "Security"]
        },
        {
          level: "Level 1",
          departments: ["Engineering", "Product", "Design"]
        },
        { level: "Level 2", departments: ["Sales", "Marketing", "HR"] },
        {
          level: "Level 3",
          departments: ["Finance", "Legal", "Executive"]
        }
      ],
      emergency_exits: [
        "North Stairwell",
        "South Stairwell",
        "Main Elevator"
      ]
    },
    duration: 0
    // Interactive - no auto advance
  },
  {
    category: "emergency",
    title: "Emergency Procedures",
    description: "Safety information and emergency contacts",
    content: {
      type: "emergency_info",
      contacts: [
        { role: "Emergency", number: "000" },
        { role: "Building Security", number: "1234" },
        { role: "First Aid", number: "5678" }
      ],
      assembly_point: "Car Park Level 1",
      procedures: [
        "Stay calm and follow instructions",
        "Use stairs, not elevators",
        "Proceed to assembly point",
        "Wait for all-clear signal"
      ]
    },
    duration: 45e3
    // 45 seconds
  },
  {
    category: "corporate",
    title: "Company Performance Dashboard",
    description: "Key metrics and achievements",
    content: {
      metrics: [
        { label: "Projects Delivered", value: "127", trend: "+12%" },
        { label: "Client Satisfaction", value: "94%", trend: "+3%" },
        { label: "Team Members", value: "850", trend: "+15%" },
        { label: "Offices Worldwide", value: "12", trend: "stable" }
      ],
      achievement: "Certified Great Place to Work 2024"
    },
    duration: 2e4
    // 20 seconds
  },
  {
    category: "wellness",
    title: "Wellness Tips",
    description: "Daily wellness and safety reminders",
    content: {
      tips: [
        "Remember to take regular breaks from your screen",
        "Stay hydrated - aim for 8 glasses of water daily",
        "Use proper ergonomics at your workstation",
        "Take the stairs for extra exercise",
        "Practice good hand hygiene"
      ],
      wellness_metric: "Steps Goal: 10,000 daily"
    },
    duration: 12e3
    // 12 seconds
  },
  {
    category: "social",
    title: "Team Celebrations",
    description: "Celebrating our people and achievements",
    content: {
      celebrations: [
        "Happy Birthday Sarah Chen! \u{1F389}",
        "Congratulations to the Sales team on Q4 results! \u{1F3C6}",
        "Welcome new team members joining this month! \u{1F44B}",
        "Tech Talk Friday: AI in the Workplace - 3PM Conference Room A"
      ],
      upcoming_events: [
        "Monthly Town Hall - Next Tuesday 10AM",
        "Volunteer Day - Community Garden - Saturday",
        "Holiday Party Planning - Committee Meeting Thursday"
      ]
    },
    duration: 18e3
    // 18 seconds
  },
  {
    category: "weather",
    title: "Weather & Transport",
    description: "Current weather and transport updates",
    content: {
      weather: {
        current: "22\xB0C Partly Cloudy",
        forecast: "High 25\xB0C, Low 18\xB0C",
        uv_index: "6 - High",
        rain_chance: "20%"
      },
      transport: [
        "Train services operating normally",
        "Light delays on Bus Route 123",
        "Bike sharing stations: 85% available"
      ]
    },
    duration: 25e3
    // 25 seconds
  }
];
function generateMockDisplays() {
  const displays = [];
  let displayId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const levels = MOCK_LEVELS.filter((level) => level.parent_id === building.id);
    levels.forEach((level) => {
      const displayCount = predictableRandomInt(4, 2);
      for (let i = 0; i < displayCount; i++) {
        const orientation = DISPLAY_ORIENTATIONS[predictableRandomInt(DISPLAY_ORIENTATIONS.length)];
        const resolution = DISPLAY_RESOLUTIONS.filter((res) => orientation === "portrait" && res.includes("x1920") || orientation === "landscape" && res.includes("1920x") || orientation === "square")[0] || "1920x1080";
        const display = {
          id: `display-${String(displayId).padStart(3, "0")}`,
          name: `${level.name} Display ${String.fromCharCode(65 + i)}`,
          description: `Digital signage display located in ${level.name} of ${building.name}`,
          // Location
          building_id: building.id,
          level_id: level.id,
          zone_id: building.parent_id,
          location: {
            building: building.name,
            level: level.name,
            area: [
              "Main Corridor",
              "Reception Area",
              "Break Room",
              "Elevator Lobby",
              "Meeting Room Entrance"
            ][predictableRandomInt(5)],
            coordinates: {
              x: predictableRandomInt(100, 10),
              y: predictableRandomInt(100, 10)
            }
          },
          // Hardware specifications
          hardware: {
            model: [
              "Samsung QM55R",
              "LG 55SM5KE",
              "NEC MultiSync V554",
              "Sharp PN-M501"
            ][predictableRandomInt(4)],
            size_inches: [43, 50, 55, 65, 75][predictableRandomInt(5)],
            resolution,
            orientation,
            brightness: predictableRandomInt(500, 300),
            // nits
            contrast_ratio: "5000:1",
            viewing_angle: "178\xB0",
            operating_hours: predictableRandomInt(5e4, 3e4)
          },
          // Network and connectivity
          network: {
            ip_address: `192.168.${predictableRandomInt(255, 1)}.${predictableRandomInt(255, 1)}`,
            mac_address: `00:1B:44:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}`,
            connection_type: "Ethernet",
            bandwidth: "100 Mbps",
            wifi_enabled: predictableRandomInt(2) === 1
          },
          // Status and health
          status: ["online", "offline", "maintenance", "error"][predictableRandomInt(10) === 0 ? predictableRandomInt(4) : 0],
          // 90% online
          health: {
            cpu_usage: predictableRandomInt(30, 5),
            memory_usage: predictableRandomInt(60, 20),
            storage_used: predictableRandomInt(80, 30),
            temperature: predictableRandomInt(45, 25),
            uptime_hours: predictableRandomInt(720, 1),
            // Up to 30 days
            last_reboot: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 1)))
          },
          // Display settings
          settings: {
            brightness: predictableRandomInt(100, 60),
            volume: orientation === "portrait" ? 0 : predictableRandomInt(50, 10),
            power_schedule: {
              on_time: "06:00",
              off_time: "22:00",
              weekend_mode: "reduced_hours"
              // 08:00-18:00
            },
            sleep_mode: predictableRandomInt(2) === 1,
            auto_rotation: false,
            screensaver: {
              enabled: true,
              timeout_minutes: 30,
              type: "clock_and_weather"
            }
          },
          // Content preferences
          content_settings: {
            allowed_categories: CONTENT_CATEGORIES.slice(0, predictableRandomInt(CONTENT_CATEGORIES.length, 3)).map((c2) => c2.id),
            prohibited_content: ["external_feeds", "social_media"],
            emergency_override: true,
            local_content_cache: true,
            max_file_size_mb: 50,
            supported_formats: ["jpg", "png", "mp4", "html", "pdf"]
          },
          // Maintenance and monitoring
          maintenance: {
            last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90, 7))),
            next_service: getUnixTime(addDays(Date.now(), predictableRandomInt(180, 30))),
            service_provider: "TechCorp Solutions",
            warranty_expiry: getUnixTime(addDays(Date.now(), predictableRandomInt(365, 180))),
            cleaning_schedule: "weekly",
            firmware_version: `v${predictableRandomInt(5, 1)}.${predictableRandomInt(9, 0)}.${predictableRandomInt(99, 10)}`,
            last_update: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7)))
          },
          // Analytics and usage
          analytics: {
            daily_views: predictableRandomInt(500, 50),
            interaction_count: orientation !== "portrait" ? predictableRandomInt(50, 5) : 0,
            content_engagement: `${predictableRandomInt(85, 45)}%`,
            error_count_24h: predictableRandomInt(3, 0),
            avg_content_display_time: predictableRandomInt(20, 8)
          },
          // Timestamps
          created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(365, 30))),
          updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
          last_seen: getUnixTime(subDays(Date.now(), predictableRandomInt(1, 0)))
        };
        displays.push(display);
        displayId++;
      }
    });
  });
  return displays;
}
function generateMockMedia() {
  const media = [];
  let mediaId = 1;
  CONTENT_TEMPLATES.forEach((template, templateIndex) => {
    const variations = predictableRandomInt(3, 2);
    for (let v = 0; v < variations; v++) {
      const mediaItem = {
        id: `media-${String(mediaId).padStart(3, "0")}`,
        name: `${template.title} ${v > 0 ? `v${v + 1}` : ""}`,
        description: template.description,
        category: template.category,
        type: MEDIA_TYPES[predictableRandomInt(MEDIA_TYPES.length)],
        // File details
        file: {
          filename: `${template.title.toLowerCase().replace(/\s+/g, "_")}_${mediaId}.${template.category === "weather" ? "html" : "jpg"}`,
          size_bytes: predictableRandomInt(5e6, 1e5),
          // 100KB - 5MB
          mime_type: template.category === "weather" ? "text/html" : "image/jpeg",
          url: `https://signage-assets.place.tech/media/${mediaId}`,
          thumbnail_url: `https://signage-assets.place.tech/thumbs/${mediaId}_thumb.jpg`,
          duration_seconds: template.duration / 1e3 || null
        },
        // Content metadata
        content: template.content,
        tags: [template.category, "corporate", "approved"],
        // Display properties
        display_properties: {
          duration_ms: template.duration,
          transition: ["fade", "slide_left", "slide_right", "zoom"][predictableRandomInt(4)],
          background_color: "#ffffff",
          text_color: "#333333",
          font_family: "Inter, sans-serif",
          font_size: "responsive",
          aspect_ratio: "16:9"
        },
        // Scheduling and targeting
        scheduling: {
          start_date: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 0))),
          end_date: getUnixTime(addDays(Date.now(), predictableRandomInt(90, 30))),
          time_slots: [
            { start: "06:00", end: "10:00", days: [1, 2, 3, 4, 5] },
            { start: "12:00", end: "14:00", days: [1, 2, 3, 4, 5] },
            { start: "16:00", end: "19:00", days: [1, 2, 3, 4, 5] }
          ],
          priority: template.category === "emergency" ? 10 : predictableRandomInt(5, 1),
          frequency: predictableRandomInt(3, 1)
          // times per hour
        },
        // Approval and compliance
        approval: {
          status: ["approved", "pending", "rejected"][template.category === "emergency" ? 0 : predictableRandomInt(3)],
          approved_by: "facilities.manager@place.tech",
          approved_date: getUnixTime(subDays(Date.now(), predictableRandomInt(14, 1))),
          compliance_checked: true,
          brand_guidelines: template.category !== "emergency"
        },
        // Analytics
        performance: {
          impressions: predictableRandomInt(5e3, 500),
          unique_views: predictableRandomInt(2e3, 200),
          engagement_rate: `${predictableRandomInt(75, 25)}%`,
          average_view_time: predictableRandomInt(template.duration / 1e3, 3),
          skip_rate: `${predictableRandomInt(15, 2)}%`
        },
        // Metadata
        created_by: "marketing.team@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
        version: `v1.${v}`,
        status: "active"
      };
      media.push(mediaItem);
      mediaId++;
    }
  });
  return media;
}
function generateMockPlaylists(displays, media) {
  const playlists = [];
  let playlistId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const buildingDisplays = displays.filter((d) => d.building_id === building.id);
    const generalPlaylist = {
      id: `playlist-${String(playlistId).padStart(3, "0")}`,
      name: `${building.name} General Content`,
      description: `Default content rotation for all displays in ${building.name}`,
      // Content items (randomly select 5-8 media items)
      items: media.filter((m) => ["announcements", "corporate", "wellness"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, predictableRandomInt(8, 5)).map((mediaItem, index) => ({
        id: `item-${playlistId}-${index + 1}`,
        media_id: mediaItem.id,
        order: index + 1,
        duration_override: null,
        start_date: mediaItem.scheduling.start_date,
        end_date: mediaItem.scheduling.end_date,
        conditions: {
          weather: null,
          occupancy: null,
          time_based: true
        }
      })),
      // Playlist settings
      settings: {
        loop: true,
        shuffle: false,
        auto_advance: true,
        emergency_interruption: true,
        volume_control: true,
        transition_effect: "fade",
        default_duration: 15e3
      },
      // Targeting
      target: {
        displays: buildingDisplays.map((d) => d.id),
        zones: [building.id],
        categories: ["lobby", "corridor", "general"]
      },
      // Scheduling
      schedule: {
        active_hours: {
          start: "06:00",
          end: "22:00",
          timezone: "Australia/Sydney"
        },
        days: [1, 2, 3, 4, 5],
        // Weekdays
        override_holidays: false
      },
      // Metadata
      created_by: "facilities.manager@place.tech",
      created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 7))),
      updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
      status: "active",
      priority: 5
    };
    playlists.push(generalPlaylist);
    playlistId++;
    if (predictableRandomInt(2) === 0) {
      const meetingPlaylist = {
        id: `playlist-${String(playlistId).padStart(3, "0")}`,
        name: `${building.name} Meeting Rooms`,
        description: `Content specifically for meeting room displays in ${building.name}`,
        items: media.filter((m) => ["events", "wayfinding", "announcements"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, 4).map((mediaItem, index) => ({
          id: `item-${playlistId}-${index + 1}`,
          media_id: mediaItem.id,
          order: index + 1,
          duration_override: null,
          start_date: mediaItem.scheduling.start_date,
          end_date: mediaItem.scheduling.end_date
        })),
        target: {
          displays: buildingDisplays.filter((d) => d.location.area.includes("Meeting")).map((d) => d.id),
          zones: [building.id],
          categories: ["meeting_room"]
        },
        settings: {
          loop: true,
          auto_advance: true,
          emergency_interruption: true,
          show_room_schedule: true,
          integration: "calendar_api"
        },
        created_by: "it.admin@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(21, 3))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(5, 0))),
        status: "active",
        priority: 7
      };
      playlists.push(meetingPlaylist);
      playlistId++;
    }
  });
  const emergencyPlaylist = {
    id: `playlist-emergency`,
    name: "Emergency Broadcast",
    description: "High-priority emergency communications for all displays",
    items: media.filter((m) => m.category === "emergency").map((mediaItem, index) => ({
      id: `emergency-item-${index + 1}`,
      media_id: mediaItem.id,
      order: index + 1,
      duration_override: null
    })),
    target: {
      displays: displays.map((d) => d.id),
      // All displays
      zones: ["zone-EmWFTjuYExK"],
      categories: ["emergency"]
    },
    settings: {
      loop: true,
      interrupt_all: true,
      max_volume: true,
      ignore_schedule: true,
      manual_dismiss_only: true
    },
    created_by: "security.manager@place.tech",
    created_at: getUnixTime(subDays(Date.now(), 100)),
    updated_at: getUnixTime(subDays(Date.now(), 50)),
    status: "standby",
    // Activated only during emergencies
    priority: 10
  };
  playlists.push(emergencyPlaylist);
  return playlists;
}
function generateMockTriggers() {
  return [
    {
      id: "trigger-001",
      name: "Emergency Alert System",
      description: "Automatically broadcast emergency content",
      type: "emergency",
      conditions: {
        api_endpoint: "/api/emergency/status",
        trigger_value: "active",
        check_interval: 30
        // seconds
      },
      actions: {
        activate_playlist: "playlist-emergency",
        interrupt_all: true,
        volume_override: 100,
        priority: 10
      },
      active: true,
      last_triggered: null
    },
    {
      id: "trigger-002",
      name: "Meeting Room Booking Update",
      description: "Update meeting room displays when bookings change",
      type: "calendar_sync",
      conditions: {
        calendar_change: true,
        check_interval: 300,
        // 5 minutes
        rooms_only: true
      },
      actions: {
        refresh_content: true,
        update_schedule_display: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 0.5))
    },
    {
      id: "trigger-003",
      name: "Weather Content Update",
      description: "Update weather displays every 30 minutes",
      type: "scheduled",
      conditions: {
        schedule: "*/30 * * * *",
        // Every 30 minutes
        weather_api: "https://api.weather.com/current"
      },
      actions: {
        update_weather_content: true,
        refresh_transport_info: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 0.02))
      // ~30 min ago
    },
    {
      id: "trigger-004",
      name: "After Hours Display Schedule",
      description: "Switch to minimal content outside business hours",
      type: "time_based",
      conditions: {
        time_range: { start: "22:00", end: "06:00" },
        weekends: true,
        holidays: true
      },
      actions: {
        activate_screensaver: true,
        reduce_brightness: 30,
        minimal_content: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 1))
    }
  ];
}
var MOCK_DISPLAYS = generateMockDisplays();
var MOCK_MEDIA = generateMockMedia();
var MOCK_PLAYLISTS = generateMockPlaylists(MOCK_DISPLAYS, MOCK_MEDIA);
var MOCK_PLUGINS = [
  {
    id: "weather",
    name: "Weather",
    description: "Current weather signage widget",
    uri: "/plugins/weather/index.html",
    enabled: true,
    defaults: { units: "metric" },
    params: {
      location: {
        type: "string",
        title: "Location",
        default: "Sydney"
      }
    }
  },
  {
    id: "clock",
    name: "Clock",
    description: "Clock signage widget",
    uri: "/plugins/clock/index.html",
    enabled: true,
    defaults: { format: "24h" },
    params: {}
  }
];
var MOCK_TRIGGERS = generateMockTriggers();
var SIGNAGE_GROUPS = [
  {
    group: {
      id: "signage-group-facilities",
      name: "Facilities Signage",
      description: "Facility-managed signage content",
      subsystems: ["signage"]
    },
    permissions: 255
  },
  {
    group: {
      id: "signage-group-marketing",
      name: "Marketing Signage",
      description: "Marketing managed signage content",
      subsystems: ["signage"]
    },
    permissions: 129
  }
];
var SIGNAGE_GROUP_USERS = [
  {
    group_id: "signage-group-facilities",
    user_id: MOCK_STAFF[0].email,
    permissions: 255,
    user: MOCK_STAFF[0]
  },
  {
    group_id: "signage-group-facilities",
    user_id: MOCK_STAFF[1].email,
    permissions: 65,
    user: MOCK_STAFF[1]
  }
];
var SIGNAGE_GROUP_ZONES = [
  {
    group_id: "signage-group-facilities",
    zone_id: MOCK_BUILDINGS[0].id,
    permissions: 255,
    deny: false,
    zone: MOCK_BUILDINGS[0]
  }
];
function listSignageMockGroups(query_params = {}) {
  const groups = SIGNAGE_GROUPS.map((item) => item.group).filter((group) => {
    if (query_params.subsystem && !group.subsystems?.includes(query_params.subsystem)) {
      return false;
    }
    if (query_params.parent_id && group.parent_id !== query_params.parent_id) {
      return false;
    }
    if (query_params.q) {
      const search = query_params.q.toLowerCase();
      return group.name.toLowerCase().includes(search) || group.description.toLowerCase().includes(search);
    }
    return true;
  });
  const limit = Number(query_params.limit || groups.length) || groups.length;
  const offset = Number(query_params.offset || 0) || 0;
  return groups.slice(offset, offset + limit);
}
function filterByGroup(items, group_id = "") {
  if (!group_id || group_id === SIGNAGE_GROUPS[0].group.id)
    return items;
  return items.filter((_, index) => index % 2 === 0);
}
function sharedWithGroups(items, id) {
  const index = items.findIndex((item) => item.id === id);
  if (index < 0)
    return [];
  const groups = index % 2 === 0 ? SIGNAGE_GROUPS : [SIGNAGE_GROUPS[0]];
  return groups.map(({ group }) => ({ id: group.id, name: group.name }));
}
function toEngineMedia(item) {
  const is_video = item.type === "video";
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    media_type: is_video ? "video" : "image",
    media_uri: item.file?.url,
    media_id: "",
    thumbnail_id: item.file?.thumbnail_url ? item.id + "-thumb" : "",
    orientation: "landscape",
    play_time: item.display_properties?.duration_ms || 15e3,
    video_length: is_video ? item.display_properties?.duration_ms : 0,
    created_at: item.created_at,
    updated_at: item.updated_at,
    valid_from: item.scheduling?.start_date,
    valid_until: item.scheduling?.end_date,
    tags: item.tags || []
  };
}
function toEnginePlaylist(item) {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    enabled: item.status !== "disabled",
    random: !!item.settings?.shuffle,
    default_duration: item.settings?.default_duration || 15e3,
    default_animation: 1,
    orientation: "landscape",
    play_count: 0,
    created_at: item.created_at,
    updated_at: item.updated_at
  };
}
function playlistMediaResponse(playlist_id, approved = false) {
  const playlist = MOCK_PLAYLISTS.find((item) => item.id === playlist_id);
  return {
    id: `${playlist_id}-media`,
    playlist_id,
    items: (playlist?.items || []).map((item) => item.media_id),
    schedules: (playlist?.items || []).map((item) => ({
      id: item.id,
      item_id: item.media_id,
      schedules: []
    })),
    approved,
    approval_requested: false,
    updated_at: playlist?.updated_at || getUnixTime(Date.now())
  };
}
function signageDisplay(display_id) {
  if (display_id === "display-1") {
    throw { status: 404, message: "Display not found" };
  }
  const display = MOCK_DISPLAYS.find((item) => item.id === display_id) || MOCK_DISPLAYS[0];
  const playlists = MOCK_PLAYLISTS.filter((playlist) => playlist.target?.displays?.includes(display.id) || playlist.target?.zones?.includes(display.zone_id)).slice(0, 3);
  const mapped_playlists = playlists.length ? playlists : MOCK_PLAYLISTS.slice(0, 2);
  const media_ids = [
    ...new Set(mapped_playlists.flatMap((playlist) => playlist.items.map((item) => item.media_id)))
  ];
  return {
    id: display_id,
    zones: [display.zone_id, display.building_id].filter(Boolean),
    playlist_mappings: {
      [display_id]: mapped_playlists.map((playlist) => playlist.id),
      [display.zone_id]: []
    },
    playlist_config: Object.fromEntries(mapped_playlists.map((playlist) => [
      playlist.id,
      [
        toEnginePlaylist(playlist),
        playlist.items.map((item) => item.media_id)
      ]
    ])),
    playlist_media: media_ids.map((id) => MOCK_MEDIA.find((item) => item.id === id)).filter((item) => !!item).map(toEngineMedia),
    plugins: MOCK_PLUGINS
  };
}
function registerMockSignage() {
  MOCK_DISPLAYS.forEach((display, index) => {
    if (index < 10) {
      MOCK_ZONES.push({
        id: display.id,
        tags: ["signage", "display"],
        display_name: display.name.split(" ").slice(-2).join(" "),
        // Extract "Display A" from "Level 1 Display A"
        name: display.name,
        parent_id: display.building_id,
        description: display.description,
        hardware: display.hardware,
        status: display.status,
        location: display.location
      });
    }
  });
  to({
    path: "/api/engine/v2/groups/current",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params?.subsystem === "signage") {
        return SIGNAGE_GROUPS;
      }
      return [];
    }
  });
  to({
    path: "/api/engine/v2/groups",
    metadata: {},
    method: "GET",
    callback: (request) => listSignageMockGroups(request.query_params)
  });
  to({
    path: "/api/engine/v2/groups",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const group = __spreadProps(__spreadValues({}, request.body), {
        id: `signage-group-${Date.now()}`,
        subsystems: request.body?.subsystems || ["signage"],
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUPS.push({ group, permissions: 255 });
      return group;
    }
  });
  to({
    path: "/api/engine/v2/groups/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const item = SIGNAGE_GROUPS.find(({ group }) => group.id === request.route_params.id);
      if (!item)
        throw { status: 404, message: "Group not found" };
      item.group = __spreadProps(__spreadValues(__spreadValues({}, item.group), request.body), {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item.group;
    }
  });
  to({
    path: "/api/engine/v2/groups/:id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const index = SIGNAGE_GROUPS.findIndex(({ group }) => group.id === request.route_params.id);
      if (index >= 0)
        SIGNAGE_GROUPS.splice(index, 1);
      return {};
    }
  });
  to({
    path: "/api/engine/v2/group_users",
    metadata: {},
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_USERS.filter((item) => item.group_id === request.query_params?.group_id)
  });
  to({
    path: "/api/engine/v2/group_users",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const user = MOCK_STAFF.find((item2) => item2.email === request.body.user_id || item2.id === request.body.user_id);
      const item = __spreadProps(__spreadValues({}, request.body), {
        user_id: request.body.user_id,
        permissions: request.body.permissions || 0,
        user,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUP_USERS.push(item);
      return item;
    }
  });
  to({
    path: "/api/engine/v2/group_users/:user_id/:group_id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const user_id = decodeURIComponent(request.route_params.user_id);
      const group_id = decodeURIComponent(request.route_params.group_id);
      const item = SIGNAGE_GROUP_USERS.find((row) => row.user_id === user_id && row.group_id === group_id);
      if (!item)
        throw { status: 404, message: "Group user not found" };
      Object.assign(item, request.body, {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item;
    }
  });
  to({
    path: "/api/engine/v2/group_users/:user_id/:group_id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const user_id = decodeURIComponent(request.route_params.user_id);
      const group_id = decodeURIComponent(request.route_params.group_id);
      const index = SIGNAGE_GROUP_USERS.findIndex((row) => row.user_id === user_id && row.group_id === group_id);
      if (index >= 0)
        SIGNAGE_GROUP_USERS.splice(index, 1);
      return {};
    }
  });
  to({
    path: "/api/engine/v2/group_zones",
    metadata: {},
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_ZONES.filter((item) => item.group_id === request.query_params?.group_id)
  });
  to({
    path: "/api/engine/v2/group_zones",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const zone = MOCK_ZONES.find((item2) => item2.id === request.body.zone_id);
      const item = __spreadProps(__spreadValues({}, request.body), {
        permissions: request.body.permissions || 0,
        deny: !!request.body.deny,
        zone,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUP_ZONES.push(item);
      return item;
    }
  });
  to({
    path: "/api/engine/v2/group_zones/:group_id/:zone_id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const group_id = decodeURIComponent(request.route_params.group_id);
      const zone_id = decodeURIComponent(request.route_params.zone_id);
      const item = SIGNAGE_GROUP_ZONES.find((row) => row.group_id === group_id && row.zone_id === zone_id);
      if (!item)
        throw { status: 404, message: "Group zone not found" };
      Object.assign(item, request.body, {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item;
    }
  });
  to({
    path: "/api/engine/v2/group_zones/:group_id/:zone_id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const group_id = decodeURIComponent(request.route_params.group_id);
      const zone_id = decodeURIComponent(request.route_params.zone_id);
      const index = SIGNAGE_GROUP_ZONES.findIndex((row) => row.group_id === group_id && row.zone_id === zone_id);
      if (index >= 0)
        SIGNAGE_GROUP_ZONES.splice(index, 1);
      return {};
    }
  });
  to({
    path: "/api/engine/v2/signage/media",
    metadata: {},
    method: "GET",
    callback: (request) => filterByGroup(MOCK_MEDIA, request.query_params?.group_id).map(toEngineMedia)
  });
  to({
    path: "/api/engine/v2/signage/media/tags",
    metadata: {},
    method: "GET",
    callback: (request) => [
      ...new Set(filterByGroup(MOCK_MEDIA, request.query_params?.group_id).flatMap((item) => item.tags || []).filter((tag) => !!tag))
    ]
  });
  to({
    path: "/api/engine/v2/signage/media/tag_counts",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const counts = {};
      for (const item of filterByGroup(MOCK_MEDIA, request.query_params?.group_id)) {
        for (const tag of item.tags || []) {
          if (!tag)
            continue;
          counts[tag] = (counts[tag] || 0) + 1;
        }
      }
      return counts;
    }
  });
  to({
    path: "/api/engine/v2/signage/media",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, request.body), {
      id: `media-${Date.now()}`,
      created_at: getUnixTime(Date.now()),
      updated_at: getUnixTime(Date.now())
    })
  });
  to({
    path: "/api/engine/v2/signage/media/:id",
    metadata: {},
    method: "GET",
    callback: (request) => __spreadProps(__spreadValues({}, toEngineMedia(MOCK_MEDIA.find((item) => item.id === request.route_params.id))), {
      shared_with: sharedWithGroups(MOCK_MEDIA, request.route_params.id)
    })
  });
  to({
    path: "/api/engine/v2/signage/media/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => __spreadProps(__spreadValues(__spreadValues({}, toEngineMedia(MOCK_MEDIA.find((item) => item.id === request.route_params.id))), request.body), {
      updated_at: getUnixTime(Date.now())
    })
  });
  to({
    path: "/api/engine/v2/signage/media/:id",
    metadata: {},
    method: "DELETE",
    callback: () => ({})
  });
  to({
    path: "/api/engine/v2/signage/media/:id/thumbnail",
    metadata: {},
    method: "GET",
    callback: () => ({})
  });
  to({
    path: "/api/engine/v2/signage/media/share",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  to({
    path: "/api/engine/v2/signage/plugins",
    metadata: {},
    method: "GET",
    callback: () => MOCK_PLUGINS
  });
  to({
    path: "/api/engine/v2/signage/plugins/:id",
    metadata: {},
    method: "GET",
    callback: (request) => MOCK_PLUGINS.find((plugin) => plugin.id === request.route_params.id) || {}
  });
  to({
    path: "/api/engine/v2/signage/playlists",
    metadata: {},
    method: "GET",
    callback: (request) => filterByGroup(MOCK_PLAYLISTS, request.query_params?.group_id).map(toEnginePlaylist)
  });
  to({
    path: "/api/engine/v2/signage/playlists/approvers",
    metadata: {},
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_USERS.filter((item) => item.group_id === request.query_params?.group_id).map((item) => ({
      id: item.user?.email || item.user_id,
      name: item.user?.name || item.user_id
    }))
  });
  to({
    path: "/api/engine/v2/signage/playlists",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, request.body), {
      id: `playlist-${Date.now()}`,
      created_at: getUnixTime(Date.now()),
      updated_at: getUnixTime(Date.now())
    })
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id",
    metadata: {},
    method: "GET",
    callback: (request) => __spreadProps(__spreadValues({}, toEnginePlaylist(MOCK_PLAYLISTS.find((item) => item.id === request.route_params.id))), {
      shared_with: sharedWithGroups(MOCK_PLAYLISTS, request.route_params.id)
    })
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => __spreadProps(__spreadValues(__spreadValues({}, toEnginePlaylist(MOCK_PLAYLISTS.find((item) => item.id === request.route_params.id))), request.body), {
      updated_at: getUnixTime(Date.now())
    })
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id",
    metadata: {},
    method: "DELETE",
    callback: () => ({})
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media",
    metadata: {},
    method: "GET",
    callback: (request) => playlistMediaResponse(request.route_params.id, false)
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, playlistMediaResponse(request.route_params.id, false)), {
      items: request.body || [],
      updated_at: getUnixTime(Date.now())
    })
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media/schedule",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, playlistMediaResponse(request.route_params.id, false)), {
      schedules: [
        {
          id: `schedule-${Date.now()}`,
          item_id: request.body?.item_id,
          schedules: request.body?.schedules || []
        }
      ]
    })
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media/schedule/:item_id",
    metadata: {},
    method: "PATCH",
    callback: (request) => ({
      id: request.route_params.item_id,
      item_id: request.body?.item_id || request.route_params.item_id,
      schedules: request.body?.schedules || []
    })
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media/revisions",
    metadata: {},
    method: "GET",
    callback: (request) => [
      playlistMediaResponse(request.route_params.id, false),
      playlistMediaResponse(request.route_params.id, true)
    ]
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media/approve",
    metadata: {},
    method: "POST",
    callback: (request) => playlistMediaResponse(request.route_params.id, true)
  });
  to({
    path: "/api/engine/v2/signage/playlists/:id/media/request_approval",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  to({
    path: "/api/engine/v2/signage/playlists/share",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  to({
    path: "/api/engine/v2/signage/:id",
    metadata: {},
    method: "GET",
    callback: (request) => signageDisplay(request.route_params.id)
  });
  to({
    path: "/api/engine/v2/signage/:id/metrics",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  to({
    path: "/api/staff/v1/signage-displays",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let displays = MOCK_DISPLAYS;
      if (request.query_params?.building_id) {
        displays = displays.filter((d) => d.building_id === request.query_params.building_id);
      }
      if (request.query_params?.status) {
        displays = displays.filter((d) => d.status === request.query_params.status);
      }
      if (request.query_params?.zone_id) {
        displays = displays.filter((d) => d.zone_id === request.query_params.zone_id);
      }
      return {
        data: displays,
        meta: {
          total: displays.length,
          online: displays.filter((d) => d.status === "online").length,
          offline: displays.filter((d) => d.status === "offline").length,
          error: displays.filter((d) => d.status === "error").length
        }
      };
    }
  });
  to({
    path: "/api/staff/v1/signage/displays/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      return display;
    }
  });
  to({
    path: "/api/staff/v1/signage/media",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let media = MOCK_MEDIA;
      if (request.query_params?.category) {
        media = media.filter((m) => m.category === request.query_params.category);
      }
      if (request.query_params?.status) {
        media = media.filter((m) => m.status === request.query_params.status);
      }
      if (request.query_params?.type) {
        media = media.filter((m) => m.type === request.query_params.type);
      }
      const page = parseInt(request.query_params?.page) || 1;
      const limit = parseInt(request.query_params?.limit) || 20;
      const offset = (page - 1) * limit;
      return {
        data: media.slice(offset, offset + limit),
        meta: {
          page,
          limit,
          total: media.length,
          pages: Math.ceil(media.length / limit),
          categories: CONTENT_CATEGORIES
        }
      };
    }
  });
  to({
    path: "/api/staff/v1/signage/playlists",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let playlists = MOCK_PLAYLISTS;
      if (request.query_params?.building_id) {
        playlists = playlists.filter((p) => p.target.zones.includes(request.query_params.building_id));
      }
      if (request.query_params?.status) {
        playlists = playlists.filter((p) => p.status === request.query_params.status);
      }
      return {
        data: playlists,
        meta: {
          total: playlists.length,
          active: playlists.filter((p) => p.status === "active").length,
          standby: playlists.filter((p) => p.status === "standby").length
        }
      };
    }
  });
  to({
    path: "/api/staff/v1/signage/playlists/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const playlist = MOCK_PLAYLISTS.find((p) => p.id === request.route_params.id);
      if (!playlist)
        throw { status: 404, message: "Playlist not found" };
      const playlistWithMedia = __spreadProps(__spreadValues({}, playlist), {
        items: playlist.items.map((item) => __spreadProps(__spreadValues({}, item), {
          media: MOCK_MEDIA.find((m) => m.id === item.media_id)
        }))
      });
      return playlistWithMedia;
    }
  });
  to({
    path: "/api/staff/v1/signage/triggers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let triggers = MOCK_TRIGGERS;
      if (request.query_params?.type) {
        triggers = triggers.filter((t) => t.type === request.query_params.type);
      }
      if (request.query_params?.active !== void 0) {
        const isActive = request.query_params.active === "true";
        triggers = triggers.filter((t) => t.active === isActive);
      }
      return {
        data: triggers,
        meta: {
          total: triggers.length,
          active: triggers.filter((t) => t.active).length,
          inactive: triggers.filter((t) => !t.active).length
        }
      };
    }
  });
  to({
    path: "/api/staff/v1/signage/displays/:id/content",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      const activePlaylist = MOCK_PLAYLISTS.find((p) => p.status === "active" && p.target.displays.includes(display.id));
      if (!activePlaylist) {
        return { message: "No active content for this display" };
      }
      const currentItem = activePlaylist.items[predictableRandomInt(activePlaylist.items.length)];
      const media = MOCK_MEDIA.find((m) => m.id === currentItem.media_id);
      return {
        display_id: display.id,
        current_content: {
          playlist: activePlaylist,
          item: currentItem,
          media,
          started_at: (/* @__PURE__ */ new Date()).toISOString(),
          remaining_time: media?.file.duration_seconds || 15
        },
        next_content: activePlaylist.items[(activePlaylist.items.indexOf(currentItem) + 1) % activePlaylist.items.length]
      };
    }
  });
  to({
    path: "/api/staff/v1/signage-analytics",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const timeframe = request.query_params?.timeframe || "7d";
      const building_id = request.query_params?.building_id;
      let displays = MOCK_DISPLAYS;
      if (building_id) {
        displays = displays.filter((d) => d.building_id === building_id);
      }
      return {
        timeframe,
        summary: {
          total_displays: displays.length,
          online_displays: displays.filter((d) => d.status === "online").length,
          total_impressions: displays.reduce((sum, d) => sum + d.analytics.daily_views, 0) * (timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 1),
          average_uptime: "99.2%",
          content_items_served: MOCK_MEDIA.length * displays.length * 24
        },
        performance: displays.map((display) => ({
          display_id: display.id,
          display_name: display.name,
          uptime: `${100 - predictableRandomInt(5)}%`,
          impressions: display.analytics.daily_views * (timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 1),
          engagement: display.analytics.content_engagement,
          errors: display.analytics.error_count_24h
        })),
        content_performance: MOCK_MEDIA.slice(0, 10).map((media) => ({
          media_id: media.id,
          media_name: media.name,
          impressions: media.performance.impressions,
          engagement_rate: media.performance.engagement_rate,
          average_view_time: media.performance.average_view_time
        })),
        health_alerts: displays.filter((d) => d.status !== "online").map((display) => ({
          display_id: display.id,
          display_name: display.name,
          alert_type: display.status,
          message: display.status === "offline" ? "Display is not responding" : display.status === "error" ? "Hardware error detected" : "Maintenance mode active",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }))
      };
    }
  });
  to({
    path: "/api/staff/v1/signage-displays/:id/control",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      const action = request.body?.action;
      const validActions = [
        "power_on",
        "power_off",
        "restart",
        "refresh_content",
        "update_brightness",
        "update_volume"
      ];
      if (!validActions.includes(action)) {
        throw { status: 400, message: "Invalid action" };
      }
      return {
        display_id: display.id,
        action,
        status: "success",
        message: `Action ${action} executed successfully`,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
  });
  registerMockSignageAI();
}
function registerMockSignageAI() {
  const AI_JOBS = {};
  const SAMPLE_IMAGES = MOCK_MEDIA.slice(0, 4).map((item) => item.id);
  const now = () => Math.floor(Date.now() / 1e3);
  function makeJob(request, kind) {
    const count = Math.min(Math.max(request.candidates || 2, 1), 4);
    const job = {
      id: `signage-ai-job-${Object.keys(AI_JOBS).length + 1}`,
      state: "queued",
      kind,
      provider: "OPENAI",
      model: "gpt-image-2",
      candidates: count,
      images_produced: 0,
      parent_job_id: request.parent_job_id,
      version: 0,
      prompt: request.prompt,
      images: Array.from({ length: count }, () => null),
      created_at: now()
    };
    AI_JOBS[job.id] = job;
    if (`${request.prompt}`.includes("trigger-moderation")) {
      setTimeout(() => {
        job.state = "failed";
        job.error_kind = "moderation";
        job.error_message = "The request was blocked by the safety system";
        job.version += 1;
      }, 600);
      return job;
    }
    job.state = "running";
    for (let index = 0; index < count; index++) {
      setTimeout(() => {
        const media_id = SAMPLE_IMAGES[index % SAMPLE_IMAGES.length] || "upload-1";
        job.images[index] = {
          state: "done",
          index,
          upload_id: media_id,
          url: `/api/engine/v2/uploads/${media_id}/url`,
          width: 2048,
          height: 1152,
          mime: "image/jpeg"
        };
        job.images_produced += 1;
        job.version += 1;
        if (job.images_produced >= count) {
          job.state = "done";
          job.finished_at = now();
          job.version += 1;
        }
      }, 800 + index * 500);
    }
    return job;
  }
  to({
    path: "/api/engine/v2/signage/ai/capabilities",
    metadata: {},
    method: "GET",
    callback: () => ({
      enabled: true,
      providers: [
        {
          id: "signage-ai-provider-1",
          name: "Mock provider",
          provider: "OPENAI",
          default_model: "gpt-image-2",
          models: [
            {
              id: "gpt-image-2",
              name: "GPT Image 2",
              generate: true,
              edit: true,
              enhance: true,
              max_references: 16,
              max_candidates: 4,
              qualities: ["standard", "high"],
              aspect_ratios: ["16:9", "9:16", "1:1", "4:3"]
            }
          ]
        }
      ],
      default_provider_id: "signage-ai-provider-1",
      aspect_ratios: ["16:9", "9:16", "1:1", "4:3"],
      qualities: ["standard", "high"],
      max_candidates: 4,
      logo_layer: false,
      quota: { user_remaining_today: 42, domain_remaining_month: 900 }
    })
  });
  to({
    path: "/api/engine/v2/signage/ai/generate",
    metadata: {},
    method: "POST",
    callback: (request) => makeJob(request.body || {}, "generate")
  });
  to({
    path: "/api/engine/v2/signage/ai/edit",
    metadata: {},
    method: "POST",
    callback: (request) => makeJob(request.body || {}, "edit")
  });
  to({
    path: "/api/engine/v2/signage/ai/jobs",
    metadata: {},
    method: "GET",
    callback: () => Object.values(AI_JOBS)
  });
  to({
    path: "/api/engine/v2/signage/ai/jobs/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const job = AI_JOBS[request.route_params.id];
      if (!job)
        throw { status: 404, message: "No such job" };
      return job;
    }
  });
  to({
    path: "/api/engine/v2/signage/ai/jobs/:id/cancel",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const job = AI_JOBS[request.route_params.id];
      if (!job)
        throw { status: 404, message: "No such job" };
      if (job.state === "queued" || job.state === "running") {
        job.state = "cancelled";
        job.version += 1;
      }
      return job;
    }
  });
  to({
    path: "/api/engine/v2/signage/ai/jobs/:id/claim",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const job = AI_JOBS[request.route_params.id];
      if (!job)
        throw { status: 404, message: "No such job" };
      const entry = job.images.find((image) => image?.upload_id === request.body?.upload_id);
      if (entry)
        entry.item_id = request.body?.item_id;
      return job;
    }
  });
}

// libs/mocks/src/lib/api/surveys.mock.ts
var MOCK_SURVEYS = [
  {
    id: 1,
    title: "Employee Satisfaction Survey",
    description: "Annual survey to assess employee satisfaction and workplace culture",
    trigger: "quarterly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-G",
    pages: [
      {
        title: "Job Satisfaction",
        description: "Questions about your current role and responsibilities",
        question_order: [1, 2, 3]
      },
      {
        title: "Work Environment",
        description: "Questions about your workplace and facilities",
        question_order: [4, 5, 6]
      }
    ]
  },
  {
    id: 2,
    title: "Facility Feedback Survey",
    description: "Help us improve our office facilities and amenities",
    trigger: "monthly",
    building_id: "bld-02",
    zone_id: "bld-02_lvl-2",
    pages: [
      {
        title: "Office Facilities",
        description: "Rate your experience with our office facilities",
        question_order: [7, 8, 9]
      }
    ]
  },
  {
    id: 3,
    title: "Meeting Room Experience",
    description: "Quick feedback about your meeting room experience",
    trigger: "after_booking",
    building_id: "bld-03",
    zone_id: "bld-03_lvl-1",
    pages: [
      {
        title: "Room Quality",
        description: "How was your meeting room experience?",
        question_order: [10, 11]
      }
    ]
  },
  {
    id: 4,
    title: "Melbourne Office Feedback",
    description: "Help us improve the Melbourne office experience",
    trigger: "monthly",
    building_id: "bld-04",
    zone_id: "bld-04_lvl-1",
    pages: [
      {
        title: "Office Environment",
        description: "Rate your Melbourne office experience",
        question_order: [12, 13, 14]
      }
    ]
  },
  {
    id: 5,
    title: "Innovation Lab Usage Survey",
    description: "Feedback on research and development facilities",
    trigger: "quarterly",
    building_id: "bld-05",
    zone_id: "bld-05_lvl-2",
    pages: [
      {
        title: "Lab Facilities",
        description: "How are you finding the innovation lab?",
        question_order: [15, 16]
      }
    ]
  },
  {
    id: 6,
    title: "Parking Experience Survey",
    description: "Help us improve parking facilities",
    trigger: "weekly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-P1",
    pages: [
      {
        title: "Parking Quality",
        description: "Rate your parking experience",
        question_order: [17, 18]
      }
    ]
  },
  {
    id: 7,
    title: "Comprehensive Feedback Survey",
    description: "A survey with all question types for testing",
    trigger: "monthly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-1",
    pages: [
      {
        title: "Page 1 - Ratings and Text",
        description: "Rate your experience and provide text feedback",
        question_order: [19, 20, 21]
      },
      {
        title: "Page 2 - Selections",
        description: "Select from various options",
        question_order: [22, 23, 24]
      }
    ]
  }
];
var MOCK_QUESTIONS = [
  {
    id: 1,
    title: "How satisfied are you with your current role?",
    description: "Rate your overall job satisfaction",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Dissatisfied",
        "Dissatisfied",
        "Neutral",
        "Satisfied",
        "Very Satisfied"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["job-satisfaction", "role"],
    deleted: false
  },
  {
    id: 2,
    title: "Do you feel valued by your supervisor?",
    description: "How valued do you feel by your direct supervisor?",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: ["Always", "Often", "Sometimes", "Rarely", "Never"],
    tags: ["supervisor", "recognition"],
    deleted: false
  },
  {
    id: 3,
    title: "What could we improve about your work experience?",
    description: "Please share any suggestions for improvement",
    type: "text",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "improvement"],
    deleted: false
  },
  {
    id: 4,
    title: "Rate the cleanliness of the office",
    description: "How would you rate the overall cleanliness?",
    type: "rating",
    options: { min: 1, max: 10 },
    required: true,
    max_rating: 10,
    choices: [],
    tags: ["cleanliness", "office"],
    deleted: false
  },
  {
    id: 5,
    title: "Is the temperature comfortable in your work area?",
    description: "Rate the temperature comfort level",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Too Cold",
      "Slightly Cold",
      "Just Right",
      "Slightly Warm",
      "Too Warm"
    ],
    tags: ["temperature", "comfort"],
    deleted: false
  },
  {
    id: 6,
    title: "How would you rate the noise level?",
    description: "Is the office noise level appropriate for work?",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Too Quiet",
        "Slightly Quiet",
        "Perfect",
        "Slightly Noisy",
        "Too Noisy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["noise", "environment"],
    deleted: false
  },
  {
    id: 7,
    title: "Rate the kitchen facilities",
    description: "How satisfied are you with the kitchen and dining areas?",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["kitchen", "facilities"],
    deleted: false
  },
  {
    id: 8,
    title: "Which amenities do you use most?",
    description: "Select all that apply",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Coffee machine" },
      { text: "Microwave" },
      { text: "Refrigerator" },
      { text: "Water cooler" },
      { text: "Vending machines" },
      { text: "Recreation area" }
    ],
    tags: ["amenities", "usage"],
    deleted: false
  },
  {
    id: 9,
    title: "Additional facility suggestions",
    description: "What other facilities would you like to see?",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["suggestions", "facilities"],
    deleted: false
  },
  {
    id: 10,
    title: "Rate the meeting room quality",
    description: "Overall quality of the meeting room you used",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["meeting-room", "quality"],
    deleted: false
  },
  {
    id: 11,
    title: "Were all technical equipment working properly?",
    description: "Screen, projector, video conferencing, etc.",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Yes, everything worked perfectly",
      "Most things worked",
      "Some issues but manageable",
      "Major technical problems"
    ],
    tags: ["technical", "equipment"],
    deleted: false
  },
  {
    id: 12,
    title: "How would you rate the Melbourne office atmosphere?",
    description: "Overall atmosphere and culture in Melbourne",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["atmosphere", "culture", "melbourne"],
    deleted: false
  },
  {
    id: 13,
    title: "What do you like most about the Melbourne office?",
    description: "Share what you enjoy about working here",
    type: "text",
    options: { multiline: true, max_length: 400 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "positive", "melbourne"],
    deleted: false
  },
  {
    id: 14,
    title: "How often do you use the gym facilities?",
    description: "Frequency of gym usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: ["Daily", "Few times a week", "Weekly", "Monthly", "Never"],
    tags: ["gym", "facilities", "usage"],
    deleted: false
  },
  {
    id: 15,
    title: "Rate the innovation lab equipment",
    description: "Quality and availability of lab equipment",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["equipment", "innovation", "lab"],
    deleted: false
  },
  {
    id: 16,
    title: "What additional equipment would be helpful?",
    description: "Suggestions for new lab equipment or tools",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["equipment", "suggestions", "innovation"],
    deleted: false
  },
  {
    id: 17,
    title: "How easy is it to find parking?",
    description: "Rate the ease of finding a parking spot",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Difficult",
        "Difficult",
        "Neutral",
        "Easy",
        "Very Easy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["parking", "availability"],
    deleted: false
  },
  {
    id: 18,
    title: "Do you use EV charging stations?",
    description: "Electric vehicle charging usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      "Yes, regularly",
      "Yes, occasionally",
      "No, but would like to",
      "No, not needed"
    ],
    tags: ["ev-charging", "parking", "sustainability"],
    deleted: false
  },
  // Comprehensive survey questions (19-24)
  {
    id: 19,
    title: "Overall satisfaction rating",
    description: "Rate your overall satisfaction from 1 to 5",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["satisfaction", "comprehensive"],
    deleted: false
  },
  {
    id: 20,
    title: "Your name",
    description: "Please enter your name",
    type: "text",
    options: { max_length: 100 },
    required: true,
    max_rating: 0,
    choices: [],
    tags: ["name", "comprehensive"],
    deleted: false
  },
  {
    id: 21,
    title: "Additional comments",
    description: "Please share any additional feedback",
    type: "comment",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["comments", "comprehensive"],
    deleted: false
  },
  {
    id: 22,
    title: "Preferred contact method",
    description: "How would you like us to contact you?",
    type: "dropdown",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Email" },
      { text: "Phone" },
      { text: "In Person" },
      { text: "No Contact" }
    ],
    tags: ["contact", "comprehensive"],
    deleted: false
  },
  {
    id: 23,
    title: "Preferred time of day",
    description: "When is the best time to reach you?",
    type: "radiogroup",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Morning (9am - 12pm)" },
      { text: "Afternoon (12pm - 5pm)" },
      { text: "Evening (5pm - 8pm)" }
    ],
    tags: ["time", "comprehensive"],
    deleted: false
  },
  {
    id: 24,
    title: "Topics of interest",
    description: "Select all topics that interest you",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Workplace improvements" },
      { text: "New facilities" },
      { text: "Team events" },
      { text: "Training opportunities" }
    ],
    tags: ["interests", "comprehensive"],
    deleted: false
  }
];
var MOCK_ANSWERS = [
  {
    id: 1,
    question_id: 1,
    survey_id: 1,
    type: "rating",
    answer_json: { rating: 4, comment: "Generally satisfied with my role" }
  },
  {
    id: 2,
    question_id: 2,
    survey_id: 1,
    type: "multiple_choice",
    answer_json: { choice: "Often", index: 1 }
  },
  {
    id: 3,
    question_id: 3,
    survey_id: 1,
    type: "text",
    answer_json: { text: "More flexible working hours would be great." }
  },
  {
    id: 4,
    question_id: 4,
    survey_id: 2,
    type: "rating",
    answer_json: { rating: 8 }
  },
  {
    id: 5,
    question_id: 5,
    survey_id: 2,
    type: "multiple_choice",
    answer_json: { choice: "Just Right", index: 2 }
  },
  {
    id: 6,
    question_id: 10,
    survey_id: 3,
    type: "rating",
    answer_json: {
      rating: 5,
      comment: "Excellent meeting room experience"
    }
  },
  {
    id: 7,
    question_id: 11,
    survey_id: 3,
    type: "multiple_choice",
    answer_json: { choice: "Yes, everything worked perfectly", index: 0 }
  },
  {
    id: 8,
    question_id: 12,
    survey_id: 4,
    type: "rating",
    answer_json: { rating: 4, comment: "Great atmosphere in Melbourne" }
  },
  {
    id: 9,
    question_id: 13,
    survey_id: 4,
    type: "text",
    answer_json: {
      text: "Love the city views and the collaborative spaces"
    }
  },
  {
    id: 10,
    question_id: 15,
    survey_id: 5,
    type: "rating",
    answer_json: { rating: 5, comment: "Excellent lab equipment" }
  },
  {
    id: 11,
    question_id: 17,
    survey_id: 6,
    type: "rating",
    answer_json: { rating: 3 }
  },
  {
    id: 12,
    question_id: 18,
    survey_id: 6,
    type: "multiple_choice",
    answer_json: { choice: "Yes, occasionally", index: 1 }
  }
];
function registerMockSurveys() {
  to({
    path: "/api/staff/v1/surveys",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredSurveys = [...MOCK_SURVEYS];
      if (query_params?.building_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.building_id === query_params.building_id);
      }
      if (query_params?.zone_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.zone_id === query_params.zone_id);
      }
      if (query_params?.trigger) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.trigger === query_params.trigger);
      }
      return filteredSurveys;
    }
  });
  to({
    path: "/api/staff/v1/surveys/questions",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredQuestions = MOCK_QUESTIONS.filter((q) => !q.deleted);
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
        if (survey) {
          const questionIds = survey.pages.flatMap((page) => page.question_order);
          filteredQuestions = filteredQuestions.filter((q) => questionIds.includes(q.id));
        }
      }
      if (query_params?.type) {
        filteredQuestions = filteredQuestions.filter((q) => q.type === query_params.type);
      }
      if (query_params?.tags) {
        const searchTags = Array.isArray(query_params.tags) ? query_params.tags : [query_params.tags];
        filteredQuestions = filteredQuestions.filter((q) => searchTags.some((tag) => q.tags.includes(tag)));
      }
      return filteredQuestions;
    }
  });
  to({
    path: "/api/staff/v1/surveys/questions/:id",
    metadata: {},
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const questionId = parseInt(request.route_params?.id);
      const question = MOCK_QUESTIONS.find((q) => q.id === questionId && !q.deleted);
      if (!question) {
        throw new Error("Question not found");
      }
      return question;
    }
  });
  to({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredAnswers = [...MOCK_ANSWERS];
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.survey_id === surveyId);
      }
      if (query_params?.question_id) {
        const questionId = parseInt(query_params.question_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.question_id === questionId);
      }
      if (query_params?.type) {
        filteredAnswers = filteredAnswers.filter((answer) => answer.type === query_params.type);
      }
      return filteredAnswers;
    }
  });
  to({
    path: "/api/staff/v1/surveys/answers/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const answerId = parseInt(request.route_params?.id);
      const answer = MOCK_ANSWERS.find((a) => a.id === answerId);
      if (!answer) {
        throw new Error("Answer not found");
      }
      return answer;
    }
  });
  to({
    path: "/api/staff/v1/surveys/:id",
    metadata: {},
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const surveyId = parseInt(request.route_params?.id);
      const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
      if (!survey) {
        throw new Error("Survey not found");
      }
      return survey;
    }
  });
  to({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "POST",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const body = request.body;
      const answers = Array.isArray(body) ? body : [body];
      const created_answers = [];
      for (const answer of answers) {
        const new_id = Math.max(...MOCK_ANSWERS.map((a) => a.id), 0) + 1;
        const new_answer = {
          id: new_id,
          survey_id: answer.survey_id,
          question_id: answer.question_id,
          type: answer.type,
          answer_json: answer.answer_json
        };
        MOCK_ANSWERS.push(new_answer);
        created_answers.push(new_answer);
      }
      return created_answers.length === 1 ? created_answers[0] : created_answers;
    }
  });
}

// libs/mocks/src/lib/realtime/camera.ts
var CameraTilt;
(function(CameraTilt2) {
  CameraTilt2[CameraTilt2["Down"] = 0] = "Down";
  CameraTilt2[CameraTilt2["Up"] = 1] = "Up";
  CameraTilt2[CameraTilt2["Stop"] = 2] = "Stop";
})(CameraTilt || (CameraTilt = {}));
var CameraPan;
(function(CameraPan2) {
  CameraPan2[CameraPan2["Left"] = 0] = "Left";
  CameraPan2[CameraPan2["Right"] = 1] = "Right";
  CameraPan2[CameraPan2["Stop"] = 2] = "Stop";
})(CameraPan || (CameraPan = {}));
var CameraModule = class {
  constructor(_) {
    this.pan = 0;
    this.tilt = 0;
    this.zoom = 50;
    this.pan_speed = 5;
    this.tilt_speed = 5;
    this.zoom_speed = 5;
    this.moving = false;
    this.presets = [
      "Preset One",
      "Preset 2",
      "Preset Three",
      "Wide Shot",
      "Close Up"
    ];
  }
  $pan(dir) {
    if (dir === CameraPan.Left) {
      this.pan = Math.max(-100, this.pan - this.pan_speed);
    } else if (dir === CameraPan.Right) {
      this.pan = Math.min(100, this.pan + this.pan_speed);
    }
    this.moving = dir !== CameraPan.Stop;
  }
  $tilt(dir) {
    if (dir === CameraTilt.Up) {
      this.tilt = Math.min(100, this.tilt + this.tilt_speed);
    } else if (dir === CameraTilt.Down) {
      this.tilt = Math.max(-100, this.tilt - this.tilt_speed);
    }
    this.moving = dir !== CameraTilt.Stop;
  }
  $zoom(direction) {
    if (direction === "in") {
      this.zoom = Math.min(100, this.zoom + this.zoom_speed);
    } else if (direction === "out") {
      this.zoom = Math.max(0, this.zoom - this.zoom_speed);
    }
  }
  $recall(name) {
    if (this.presets.includes(name)) {
      this.pan = 0;
      this.tilt = 0;
      this.zoom = 50;
    }
  }
  $save_preset(name) {
    if (!this.presets.includes(name)) {
      this.presets = [...this.presets, name];
    }
  }
};
var createCameraModule = (space, overrides = {}) => new CameraModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/capture.ts
var interval;
var CaptureModule = class {
  constructor(_) {
    this.status = "stopped";
    this.live = false;
    this.remaining = randomInt(24 * 60 * 60);
  }
  $start() {
    this.status = "playing";
    interval = setInterval(() => {
      if (this.remaining < 1)
        clearInterval(interval);
      this.remaining = this.remaining - 1;
      this.current = this.current + 1;
    }, 3e3);
  }
  $pause() {
    this.status = "paused";
    clearInterval(interval);
  }
  $resume() {
    this.$start();
  }
  $stop() {
    this.status = "stopped";
    this.current = 0;
    clearInterval(interval);
  }
};
var createCaptureModule = (space, overrides = {}) => new CaptureModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/contact-tracing.ts
var CONTACT_EVENTS = {};
var filterFn = (start, end) => (itm) => {
  return timePeriodsIntersect(start, end, itm.contact_time, itm.contact_time);
};
var ContactTracingModule = class {
  constructor(_) {
  }
  $close_contacts(email, user, start, end) {
    if (!CONTACT_EVENTS[email])
      CONTACT_EVENTS[email] = [];
    if (CONTACT_EVENTS[email].length)
      return CONTACT_EVENTS[email].filter(filterFn(start, end));
    const events = [];
    const beginning = addDays(start * 1e3, -10);
    const ending = addDays(end * 1e3, 10);
    let date = new Date(beginning);
    while (isBefore(date, ending)) {
      new Array(randomInt(4)).fill(0).map((_) => ({
        mac_address: randomString(10),
        contact_time: getUnixTime(setHours(date, randomInt(11) + 7)),
        duration: randomInt(60) * 60,
        username: MOCK_STAFF[randomInt(MOCK_STAFF.length)].email
      })).forEach((e) => events.push(e));
      date = addDays(date, 1);
    }
    CONTACT_EVENTS[email] = events;
    return CONTACT_EVENTS[email].filter(filterFn(start, end));
  }
};
var createContactTracingModule = (space, overrides = {}) => new ContactTracingModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/control.ts
var RoomModule = class {
  constructor(_data) {
    this.lighting_scenes = [
      "Off",
      "Presentation",
      "Meeting",
      "Full"
    ];
    this.lighting_scene = "Off";
    this.lighting_levels = {
      zone1: 50,
      zone2: 75,
      zone3: 100
    };
    this.available_cameras = [
      "Camera1",
      "Camera2",
      "Camera3",
      "Camera4"
    ];
    this.selected_camera = null;
    this.microphones = [
      "Microphone_1",
      "Microphone_2",
      "Microphone_3"
    ];
    this.join_modes = {
      independent: "Independent",
      combined: "Combined Mode",
      overflow: "Overflow Mode"
    };
    this.joined = { room_ids: [] };
    this.join_lockout_secondary = false;
    this.room_accessories = [
      {
        id: "blind1",
        name: "Window Blinds",
        icon: "blinds",
        states: ["Open", "Closed", "Half"],
        state: "Open"
      },
      {
        id: "screen1",
        name: "Projector Screen",
        icon: "screen_share",
        states: ["Up", "Down"],
        state: "Up"
      }
    ];
    this.voice_control = true;
    this.dial_bindings = {
      module: "QSC",
      index: 1
    };
    this.offhook = false;
    this.ringing = false;
    this.has_master_audio = true;
    this.mute = false;
    this.meeting_url = "https://meet.example.com/room-123";
    this.hide_join_button = false;
    this.hide_present_all = false;
    this.preview_outputs = ["Display1", "Display2"];
    this.help = {
      help: {
        title: "Help",
        content: `
# Using the asset browser

## Activating the menu
The 5 finger touch can be actvated by placing 4 fingers and your thumb on the screen, or quickly double-tapping the screen. Activation through double tap will leave the menu on-screen. To close tap the \u2018X\u2019.

## Selecting a menu item
Leaving at least one finger on the screen, drag your finger to the icon to select.

## Home Menu
The home menu allows you to access files and navigate to content and presentations via the Launcher.

## Connect and stream your laptop or access the CMS to add files
Plug your laptop into the HDMI to stream it to the screen, or access the CMS to add your own content and create custom presentations.

<video></video>

1. Test1
2. Test2
3. Test3
            `
      },
      "laptop-help": {
        icon: "web_asset",
        title: "Asset Browser",
        content: `# Test 2`
      }
    };
    this.tabs = [
      {
        icon: "laptop",
        name: "Laptop",
        type: "Laptop"
      },
      {
        icon: "call",
        name: "VC",
        inputs: ["VidConf_1"],
        help: "vidconf-help",
        controls: "vidconf-controls"
      }
    ];
    this.volume = 0;
    this.name = _data.name || "Test Module";
    this.connected = _data.connected ?? true;
    this.active = _data.active || false;
    this.input_list = _data.input_list;
    this.output_list = _data.output_list;
    this.env_sources = _data.env_sources || [];
    this.inputs = Object.keys(this.input_list || {}) || [];
    this.outputs = Object.keys(this.output_list || {}) || [];
    this.available_outputs = this.outputs;
    const types = unique(this.env_sources.map((_) => _.type)) || [];
    types.forEach((t) => this[`${t}`] = this.env_sources.filter((_) => _.type === t).map((_) => _.id));
    this.env_sources.forEach((source) => this[`${source.type}/${source.id}`] = source);
    this.inputs.forEach((key) => this[`input/${key}`] = this.input_list[key]);
    this.outputs.forEach((key) => this[`output/${key}`] = this.output_list[key]);
  }
  $power(state = true) {
    this.active = state;
  }
  /** Shares a signal source with the room and any connected remote participants. */
  $share() {
  }
  /**
   * Connect a signal source to a signal output, or set of outputs. Any intermediate
   * device interactions are handled internally. For example, on a system using a small
   * presentation switcher and a display, routing a laptop input will select the
   * appropriate input on the switcher, and select the appropriate input on the display.
   *
   * This includes all routable signal types - in addition to the above example, this may
   * be interacting with an audio DSP to add a microphone feed to an output zone, or
   * connecting a USB HID input device with a specific output.
   **/
  $route(input2, output2) {
    if (this.inputs.includes(input2) && this.outputs.includes(output2)) {
      this.$updateState(input2, {
        routes: unique([
          ...this.input_list[input2].routes || [],
          output2
        ])
      });
      this.$updateState(output2, {
        source: input2,
        following: input2
      });
    }
  }
  /**
   * Remove a signal source from a signal output.
   * Predominantly intended for outputs that support more than one simultaneous input source
   * (mixed audio zone, or display capable of compositing multiple video sources).
   **/
  $unroute() {
  }
  /**
   * Establish a call (either phone or video) with a remote participant.
   * This may be a peer-to-peer connection or a wider group via an external bridging service.
   **/
  $connect() {
  }
  /** End a call with a remote participant. */
  $disconnect() {
  }
  /**
   * Bind the current system to another PlaceOS controlled space, relinquishing local control.
   * This may be used for an education pod that pairs with a wider classroom or a room being
   * used as an overflow from a primary event space.
   **/
  $link() {
  }
  /**
   * Join the current system with another PlaceOS controlled space, sharing control and signal IO.
   * Examples of usage would be a set of rooms with moveable walls. N-way merges supported.
   **/
  $merge() {
  }
  /** Separate from a linked or merged system. */
  $split() {
  }
  /**
   * Display an alert visible to participants in the space. This may occur as a screen overlay,
   * on a control interface, a bot post in a chat space associated with the current meeting or
   * other modalities depending on hardware capability.
   **/
  $notify() {
  }
  /**
   * Place the room into a predefined operation mode. This may include executing an arbitrary
   * set of device interactions, changing metadata associated with the system itself (changing
   * available input or output nodes), or other configurable actions designed to transition
   * the space to a specific state.
   **/
  $preset() {
  }
  /**
   * Set the volume for a signal node in the space. This can include outputs as well as inputs
   * where supported (e.g. microphone). If unspecified, default is to interact with a ‘primary’
   * output node.
   **/
  $volume(value, source = "all") {
    if (source === "all") {
      this.volume = value;
    }
  }
  /** Interact with audio muting on supporting signal nodes within the space. */
  $mute(state = true, source = "all") {
    this.$updateState(source, { mute: state });
  }
  /**
   * Activates or deactivates a signal mute for the associated IO. If this is not possible,
   * (e.g. unsupported by the device) an error is returned.
   **/
  $unmute(source = "all") {
    this.$mute(false, source);
  }
  /**
   * Wrapper for an arbitrary set of control points defined in system configuration.
   * Each of these may map to control options available on a sibling module and take one of two forms:
   *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
   *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
   *
   * System state provides the ability to introspect configured points for both control limits and current value.
   **/
  $environment(id, state) {
    const source = this.env_sources.find((_) => _.id === id);
    if (source) {
      this[`${source.type}/${source.id}`] = __spreadProps(__spreadValues({}, source), { state });
    }
  }
  /** Locks an IO node. Prevents any route changes that include this until unlocked. */
  $lock(source) {
    this.$updateState(source, { locked: true });
  }
  /** Unlocks an IO node. */
  $unlock(source) {
    this.$updateState(source, { locked: false });
  }
  /** Set the lighting scene */
  $set_lighting_scene(scene) {
    if (this.lighting_scenes.includes(scene)) {
      this.lighting_scene = scene;
      const light_source = this.env_sources.find((_) => _.type === "lights");
      if (light_source) {
        this[`${light_source.type}/${light_source.id}`] = __spreadProps(__spreadValues({}, light_source), {
          state: scene
        });
      }
    }
  }
  /** Set lighting level for a zone */
  $set_lighting_level(zone, level) {
    if (this.lighting_levels[zone] !== void 0) {
      this.lighting_levels = __spreadProps(__spreadValues({}, this.lighting_levels), { [zone]: level });
    }
  }
  /** Select a camera */
  $selected_camera(camera_id) {
    if (this.available_cameras.includes(camera_id)) {
      this.selected_camera = camera_id;
    }
  }
  /** Join rooms with a specific mode */
  $join_rooms(mode, room_ids = []) {
    if (this.join_modes[mode]) {
      this.joined = { room_ids, mode };
    }
  }
  /** Separate joined rooms */
  $separate_rooms() {
    this.joined = { room_ids: [] };
  }
  /** Control a room accessory */
  $set_accessory_state(accessory_id, state) {
    const accessory = this.room_accessories.find((_) => _.id === accessory_id);
    if (accessory && accessory.states.includes(state)) {
      accessory.state = state;
      this.room_accessories = [...this.room_accessories];
    }
  }
  /** Dial a phone number */
  $dial_phone(number) {
    this.offhook = true;
    return new Promise((r) => setTimeout(() => r(), 1e3));
  }
  /** Hangup phone call */
  $hangup_phone() {
    this.offhook = false;
    this.ringing = false;
  }
  $updateState(source, data) {
    if (this[`input/${source}`]) {
      this[`input/${source}`] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
      this.input_list[source] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
    } else if (this[`output/${source}`]) {
      this[`output/${source}`] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
      this.output_list[source] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
    }
  }
};
var input_list = {
  Mic1: {
    name: "Lectern Mic",
    type: "Microphone",
    mod: "Microphone_1"
  },
  Mic2: {
    name: "Lapel Mic",
    type: "Microphone",
    mod: "Microphone_2"
  },
  Mic3: {
    name: "Handheld Mic",
    type: "Microphone",
    mod: "Microphone_3"
  },
  PC1: {
    name: "PC-1",
    type: "PC"
  },
  PC2: {
    name: "PC-2",
    type: "PC"
  },
  PC3: {
    name: "PC-3",
    type: "PC"
  },
  PC4: {
    name: "PC-4",
    type: "PC"
  },
  HDMI: {
    name: "Laptop HDMI",
    type: "Laptop"
  },
  VGA: {
    name: "Laptop VGA",
    type: "Laptop"
  },
  Camera1: {
    name: "Camera Rear",
    type: "Camera",
    mod: "Camera_1"
  },
  Camera2: {
    name: "Camera Front",
    type: "Camera",
    mod: "Camera_2"
  },
  Camera3: {
    name: "Camera Rear 2",
    type: "Camera",
    mod: "Camera_3"
  },
  Camera4: {
    name: "Camera Front 2",
    type: "Camera",
    mod: "Camera_4"
  },
  TV1: {
    name: "IPTV 1",
    type: "TV",
    mod: "IPTV_1"
  },
  VC1: {
    name: "Video Conference 1",
    type: "VC",
    mod: "VidConf_1"
  }
};
var output_list = {
  Display1: {
    name: "Screen 1",
    type: "Display",
    source: "PC1",
    mod: "Display_1"
  },
  Display2: {
    name: "Screen 2",
    type: "Display",
    mod: "Display_2"
  },
  Display5: {
    name: "TV 1",
    type: "Display",
    mod: "Display_5",
    source: "TV1"
  }
};
var env_sources = [
  {
    id: "light1",
    name: "Lighting",
    type: "lights",
    states: ["Off", "Presentation", "Meeting", "Full"],
    state: "Off"
  },
  {
    id: "blind1",
    name: "Blinds",
    type: "blinds",
    states: ["Off", "Presentation", "Meeting"],
    state: "Off"
  },
  {
    id: "screen1",
    name: "Screen",
    type: "screen",
    states: ["Up", "Down"],
    state: "Down"
  }
];
var createSystemModule = (space, overrides = {}) => new RoomModule(__spreadValues(__spreadProps(__spreadValues({}, space), {
  input_list,
  output_list,
  env_sources
}), overrides));

// node_modules/ts-md5/dist/index.es.js
var c = new Int32Array(4);
var h = class _h {
  static hashStr(i, a = false) {
    return this.onePassHasher.start().appendStr(i).end(a);
  }
  static hashAsciiStr(i, a = false) {
    return this.onePassHasher.start().appendAsciiStr(i).end(a);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _h();
  static _hex(i) {
    const a = _h.hexChars, t = _h.hexOut;
    let e, s, r, n;
    for (n = 0; n < 4; n += 1)
      for (s = n * 8, e = i[n], r = 0; r < 8; r += 2)
        t[s + 1 + r] = a.charAt(e & 15), e >>>= 4, t[s + 0 + r] = a.charAt(e & 15), e >>>= 4;
    return t.join("");
  }
  static _md5cycle(i, a) {
    let t = i[0], e = i[1], s = i[2], r = i[3];
    t += (e & s | ~e & r) + a[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[3] - 1044525330 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[7] - 45705983 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[10] - 42063 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[11] - 1990404162 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[15] + 1236535329 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & r | s & ~r) + a[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[0] - 373897302 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[4] - 405537848 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[8] + 1163531501 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[12] - 1926607734 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e ^ s ^ r) + a[5] - 378558 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[14] - 35309556 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[10] - 1094730640 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[6] + 76029189 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[2] - 995338651 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (s ^ (e | ~r)) + a[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[5] - 57434055 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[1] - 2054922799 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[13] + 1309151649 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[9] - 343485551 | 0, e = (e << 21 | e >>> 11) + s | 0, i[0] = t + i[0] | 0, i[1] = e + i[1] | 0, i[2] = s + i[2] | 0, i[3] = r + i[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_h.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r;
    for (r = 0; r < i.length; r += 1) {
      if (s = i.charCodeAt(r), s < 128)
        a[e++] = s;
      else if (s < 2048)
        a[e++] = (s >>> 6) + 192, a[e++] = s & 63 | 128;
      else if (s < 55296 || s > 56319)
        a[e++] = (s >>> 12) + 224, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      else {
        if (s = (s - 55296) * 1024 + (i.charCodeAt(++r) - 56320) + 65536, s > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        a[e++] = (s >>> 18) + 240, a[e++] = s >>> 12 & 63 | 128, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      }
      e >= 64 && (this._dataLength += 64, _h._md5cycle(this._state, t), e -= 64, t[0] = t[16]);
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i.charCodeAt(r++);
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i[r++];
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const i = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [i[0], i[1], i[2], i[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(i) {
    const a = i.buffer, t = i.state, e = this._state;
    let s;
    for (this._dataLength = i.length, this._bufferLength = i.buflen, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], s = 0; s < a.length; s += 1)
      this._buffer8[s] = a.charCodeAt(s);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(i = false) {
    const a = this._bufferLength, t = this._buffer8, e = this._buffer32, s = (a >> 2) + 1;
    this._dataLength += a;
    const r = this._dataLength * 8;
    if (t[a] = 128, t[a + 1] = t[a + 2] = t[a + 3] = 0, e.set(_h.buffer32Identity.subarray(s), s), a > 55 && (_h._md5cycle(this._state, e), e.set(_h.buffer32Identity)), r <= 4294967295)
      e[14] = r;
    else {
      const n = r.toString(16).match(/(.*?)(.{0,8})$/);
      if (n === null) return i ? c : "";
      const o = parseInt(n[2], 16), _ = parseInt(n[1], 16) || 0;
      e[14] = o, e[15] = _;
    }
    return _h._md5cycle(this._state, e), i ? this._state : _h._hex(this._state);
  }
};
if (h.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");

// libs/mocks/src/lib/realtime/desks.ts
var MockAreaManagementModule = class {
  constructor() {
    this.overview = {};
    this.emergency_contacts = {
      "First Aid": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0),
      "Fire Warden": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0)
    };
  }
  $locate_user(email, username) {
    return {};
  }
  $update() {
    updateLocations(this, MOCK_LEVELS);
  }
};
var MAC_LOOKUP = {};
var MockLocationServicesModule = class {
  $check_ownership_of(mac_address) {
    if (!MAC_LOOKUP[mac_address]) {
      const staff = randomInt(999999) % 3 === 0 ? MOCK_STAFF[randomInt(MOCK_STAFF.length)] : { name: "" };
      MAC_LOOKUP[mac_address] = { assigned_to: staff.name };
    }
    return MAC_LOOKUP[mac_address];
  }
  $locate_user(email, username) {
    return [
      {
        type: "wireless",
        position: { x: 0.5, y: 0.5 },
        level: MOCK_LEVELS[randomInt(MOCK_LEVELS.length)].id,
        priority: 0
      }
    ];
  }
};
function padZero(no, len = 3) {
  let str = `${no}`;
  while (str.length < len) {
    str = "0" + str;
  }
  return str;
}
function createAreaManagementModule(space, overrides = {}) {
  const mod = new MockAreaManagementModule();
  for (const lvl of MOCK_LEVELS) {
    mod.overview[lvl.id] = {
      desk_count: 100,
      desk_usage: 0,
      device_capacity: 100,
      device_count: 0,
      estimated_people: 0,
      percentage_use: 0,
      recommendation: 1e4
    };
    mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count).fill(0).map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
    mod[`${lvl.id}`] = { value: [] };
    mod[`${lvl.id}:areas`] = {
      value: [
        {
          area_id: "zone-10.B",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.A",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.C",
          count: randomInt(50),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-02.D",
          count: randomInt(100),
          name: "Quite Work"
        },
        {
          area_id: "zone-02.B",
          count: randomInt(100),
          name: "Meeting Area A"
        },
        {
          area_id: "zone-02.A",
          count: randomInt(100),
          name: "Meeting Area B"
        },
        {
          area_id: "zone-02.C",
          count: randomInt(50),
          name: "Casual Work"
        }
      ]
    };
  }
  return mod;
}
function updateLocations(mod, levels) {
  for (const lvl of levels) {
    mod[lvl.id] = {
      value: new Array(predictableRandomInt(20)).fill(0).map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`]))
    };
    for (const area of mod[`${lvl.id}:areas`].value) {
      area.count = randomInt(100);
    }
    mod[`${lvl.id}:areas`] = __spreadValues({}, mod[`${lvl.id}:areas`]);
  }
}
function generateLocation(lvl, desks, users = MOCK_STAFF) {
  const fixed = predictableRandomInt(9999) % 3 === 0;
  const usr = (users || [])[predictableRandomInt((users || [])?.length)]?.email;
  return fixed ? {
    location: "desk",
    at_location: predictableRandomInt(9999) % 2 !== 0,
    map_id: desks[predictableRandomInt(desks.length)],
    mac: h?.hashStr(usr || ""),
    level: lvl.id,
    building: lvl.parent_id
  } : {
    location: "wireless",
    coordinates_from: "bottom-left",
    x: predictableRandomInt(1e3) / 10,
    y: predictableRandomInt(1e3) / 10,
    lon: 55.27476066828535,
    lat: 25.20106100633537,
    s2_cell_id: "3e5f4281459c",
    mac: h?.hashStr(usr || ""),
    variance: 9.62534032222287,
    last_seen: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
    map_width: 100,
    map_height: 100
  };
}

// libs/mocks/src/lib/realtime/display.ts
var DisplayModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createDisplayModule = (space, overrides = {}) => new DisplayModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/events.ts
var MockBookingModule = class {
  constructor(space, _data) {
    this.time_zone = "Australia/Sydney";
    this.disable_book_now = false;
    this.disable_end_meeting = false;
    this.enable_end_meeting_button = true;
    this.disable_book_now_host = false;
    this.bookings = [];
    this.pending_period = 600;
    this.pending_before = 300;
    this.control_ui = "";
    this.catering_ui = "";
    this.last_booking_started = 0;
    this.current_booking = null;
    this.next_booking = null;
    this.room_image = "assets/boardroom.jpg";
    this.status = "free";
    this.room_name = "";
    this.room_capacity = 10;
    this.custom_qr_url = "";
    this.custom_qr_color = "";
    this.show_qr_code = true;
    this.hide_qr_text = false;
    this.hide_meeting_details = false;
    this.hide_meeting_title = false;
    this.show_timeline = false;
    this.timeline_position = "floating-left";
    this.offline_image = "";
    this.offline_color = "#FFFFFF";
    this.presence = false;
    this.min_duration = 15;
    this.max_duration = 480;
    this.default_title = "Ad-Hoc Panel Booking";
    this.pending = true;
    this._space = null;
    this._space = space;
    this.room_name = space?.display_name || space?.name || "";
    this.room_capacity = space?.capacity || 10;
    if (_data) {
      Object.assign(this, _data);
    }
  }
  /** Start the meeting at the given time */
  $start_meeting(t) {
    this.last_booking_started = t;
    this.status = "busy";
  }
  /** End the meeting at the given time */
  $end_meeting(t, notify, reason) {
    this.current_booking = null;
    this.status = this.next_booking ? "pending" : "free";
  }
  /** Book meeting for the current time */
  $book_now(len, t, o) {
    const now = Math.floor(Date.now() / 1e3);
    const new_booking = {
      id: `mock-booking-${now}`,
      event_start: now,
      event_end: now + len,
      title: t || this.default_title,
      host: o || "mock@place.tech",
      attendees: []
    };
    this.bookings = [new_booking, ...this.bookings];
    this.current_booking = new_booking;
    this.status = "busy";
    return new_booking;
  }
  /** Check in to current booking */
  $checkin(time) {
    if (this.current_booking) {
      this.status = "busy";
    }
  }
  /** Call waiter service */
  $waiter_call(time) {
    return { success: true, time };
  }
  $poll_bookings() {
    updateBookings(this._space, this);
  }
};
var createBookingsModule = (space, overrides = {}) => new MockBookingModule(space, overrides);
function updateBookings(space, mod) {
  const bookings = MOCK_EVENTS.filter((event) => event.attendees?.find((u) => u.email === space.email || u.id === space.id || event.system?.id === space.id)) || [];
  bookings.sort((a, b) => a.event_start - b.event_start);
  mod.bookings = bookings;
  mod.current_booking = bookings.find((_) => timePeriodsIntersect(Date.now(), Date.now(), _.event_start * 1e3, _.event_end * 1e3));
  mod.next_booking = bookings.find((_) => _.event_start * 1e3 > Date.now());
  const date = /* @__PURE__ */ new Date();
  const { current_booking, next_booking } = mod;
  const start = new Date((current_booking || next_booking)?.event_start);
  const pending = timePeriodsIntersect(date.valueOf(), date.valueOf(), subSeconds(start, mod.pending_before).valueOf(), addSeconds(start, mod.pending_period).valueOf());
  mod.status = space?.bookable ? current_booking ? "busy" : pending ? "pending" : "free" : "not-bookable";
}

// libs/mocks/src/lib/realtime/locker-locations.ts
var LockerLocationsModule = class {
  constructor(data) {
  }
  $lockers_allocated_to_me(...args) {
    return [
      {
        location: "locker",
        bank_id: "977cb758-4e42-4292-848a-4821f2fb4d74",
        locker_id: "adda7802-dfd7-467c-b369-d73394ad7084",
        locker_name: "0.105",
        allocated: true,
        group_id: "6c246e35-4a73-475a-8725-0676d78167f4"
      }
    ];
  }
};
var createLockerLocationsModule = (details, overrides = {}) => new LockerLocationsModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/meeting.ts
var MeetingPushModule = class {
  constructor(data) {
    this.supported_meeting_url = "https://meet.";
  }
  $econtrol(...args) {
  }
};
var createMeetingPushModule = (details, overrides = {}) => new MeetingPushModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/microphone.ts
var MicrophoneModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createMicrophoneModule = (space, overrides = {}) => new MicrophoneModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/payments.ts
var PaymentsModule = class {
  $list_payment_methods(type2) {
  }
  $add_payment_method(type2, details) {
  }
  $get_product_prices(id, period) {
    return [12e3, 60];
  }
  $create_payment_intent(amount, source) {
    return randomString(12);
  }
  $confirm_payment_intent(id) {
  }
  $cancel_payment_intent(id) {
  }
  $create_customer(...args) {
    return `stripe-${randomInt(9999999, 1e6)}`;
  }
  constructor(_) {
  }
};
var createPaymentsModule = (space, overrides = {}) => new PaymentsModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/video-conference.ts
var VideoConferenceModule = class {
  $show_camera_pip(visible) {
    this.selfview = visible;
  }
  $mic_mute(state) {
    this.mic_mute = state;
  }
  $presentation_mode(state) {
    this.presentation_mode = state;
    this.presentation = state === "Local" ? "Sending" : false;
  }
  $hangup() {
    this.calls = {};
    this.call_status = "Idle";
    this.presentation_mode = "None";
    this.presentation = false;
  }
  $call_place_on_hold() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "OnHold";
        this.calls[key].PlacedOnHold = true;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "OnHold";
        return;
      }
    }
  }
  $call_resume() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "Connected";
        this.calls[key].PlacedOnHold = false;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "Connected";
        return;
      }
    }
  }
  $video_layout(layout) {
    this.video_layout = layout;
  }
  $dtmf_send(digit) {
    this.dtmf_history.push(digit);
  }
  $dial(dial_number) {
    this.call_status = "Dialling";
    return new Promise((resolve) => {
      setTimeout(() => {
        this.call_status = "Connected";
        const call_id = `call-${Date.now()}`;
        this.calls = {
          [call_id]: {
            AnswerState: "Answered",
            CallType: "Video",
            CallbackNumber: dial_number,
            DeviceType: "Endpoint",
            Direction: "Outgoing",
            DisplayName: 0,
            Duration: 0,
            "Encryption/Type": "AES-256",
            FacilityServiceId: 0,
            HoldReason: "",
            PlacedOnHold: false,
            Protocol: "SIP",
            ReceiveCallRate: 4096,
            RemoteNumber: dial_number,
            Status: "Connected",
            TransmitCallRate: 4096,
            Ice: ""
          }
        };
        resolve();
      }, 1e3);
    });
  }
  constructor(_) {
    this.mic_mute = false;
    this.selfview = false;
    this.video_layout = "Auto";
    this.presentation_mode = "None";
    this.presentation = false;
    this.calls = {};
    this.call_status = "Idle";
    this.dtmf_history = [];
  }
};
var createVideoConferenceModule = (space = {}, overrides = {}) => new VideoConferenceModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/systems-bindings.mock.ts
function createSystem(space) {
  ad(space.id, {
    System: [createSystemModule(space)],
    Bookings: [createBookingsModule(space)],
    ContactTracing: [createContactTracingModule(space)],
    AreaManagement: [createAreaManagementModule(space)],
    LocationServices: [new MockLocationServicesModule()],
    Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
    Display: new Array(10).fill(0).map((_) => createDisplayModule(space)),
    Microphone: new Array(10).fill(0).map((_) => createMicrophoneModule(space)),
    Capture: [createCaptureModule(space)],
    MeetingPush: [createMeetingPushModule()],
    VidConf: [createVideoConferenceModule()],
    Payment: [createPaymentsModule(space)],
    LockerLocations: [createLockerLocationsModule()]
  });
  const system = Ar(space.id);
  system.Bookings[0].$poll_bookings();
  setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1e3);
  system.AreaManagement[0].$update();
  setInterval(() => system.AreaManagement[0].$update(), 30 * 1e3);
}

// libs/mocks/src/lib/api/systems.mock.ts
function registerMockSystems() {
  MOCK_SPACES.forEach((space, index) => createSystem(space));
  to({
    path: "/api/engine/v2/systems",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const systems = request.query_params?.zone_id ? MOCK_SPACES.filter((_) => _.zones.includes(request.query_params.zone_id)) : MOCK_SPACES;
      if (request.query_params?.signage) {
        return systems.map((space) => __spreadProps(__spreadValues({}, space), {
          signage: true,
          display_name: space.display_name || space.name,
          playlists: space.playlists || [],
          zones: space.zones || []
        }));
      }
      return systems;
    }
  });
  to({
    path: "/api/engine/v2/systems/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const space = MOCK_SPACES.find((_) => _.id === request.route_params.id);
      if (!space)
        throw { status: 404 };
      return space;
    }
  });
}

// libs/mocks/src/lib/api/users.mock.ts
function registerMockUsers() {
  to({
    path: "/api/engine/v2/users",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const search = (request.query_params.q || "").toLowerCase();
      const limit = Number(request.query_params.limit || 100);
      return MOCK_STAFF.filter(({ name, email }) => {
        return !search || name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
      }).slice(0, limit);
    }
  });
  to({
    path: "/api/engine/v2/users/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.id === "current") {
        if (localStorage.getItem("mock-signage-user") === "group") {
          return __spreadProps(__spreadValues({}, ACTIVE_USER), {
            groups: ["staff", "engineering", "senior"],
            sys_admin: false
          });
        }
        return ACTIVE_USER;
      }
      const person = MOCK_STAFF.find((user) => user.email === request.route_params.id);
      if (person) {
        return person;
      }
      throw { status: 404, message: "User not found" };
    }
  });
  to({
    path: "/api/staff/v1/people",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_STAFF.filter(({ name, email }) => {
          return name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
        });
      }
      return MOCK_STAFF;
    }
  });
  to({
    path: "/api/staff/v1/people/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.id);
      const person = MOCK_STAFF.find((user) => user.email === id);
      if (person) {
        return __spreadProps(__spreadValues({}, person), {
          location: generateLocation2()
        });
      }
      throw { status: 404, message: "User not found" };
    }
  });
  to({
    path: "/api/staff/v1/guests",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_GUESTS.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      }
      return MOCK_STAFF;
    }
  });
  to({
    path: "/api/staff/v1/guests/:email",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const email = decodeURIComponent(request.route_params.email);
      const person = MOCK_GUESTS.find((user) => user.email === email);
      if (person)
        return person;
      throw { status: 404, message: "Guest not found" };
    }
  });
  to({
    path: "/api/staff/v1/guests/:email/meetings",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.email) {
        const email = request.route_params.email.toLowerCase();
        const events = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.email.toLowerCase() === email));
        return events;
      }
      throw {
        status: 404,
        message: `Unable to find meetings with guest with email ${request.route_params.email}`
      };
    }
  });
  const LOCATION_TYPES = [
    "meeting",
    "desk_id",
    "laptop",
    "mobile",
    "geo",
    "none"
  ];
  function generateLocation2() {
    const type2 = LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter((s) => s.zones.includes(level.id));
    const space = level_spaces[predictableRandomInt(level_spaces.length)] || {};
    const location2 = {};
    switch (type2) {
      case "meeting":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          system: space.id,
          map_id: space.map_id,
          event_id: ""
        };
        break;
      case "desk_id":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          map_id: space.map_id,
          checked_in: getUnixTime(Date.now())
        };
        break;
      case "laptop":
      case "mobile":
        location2[type2] = {
          building: level.parent_id,
          level: level.id,
          x: +predictableRandomInt(1e4),
          y: +predictableRandomInt(5e3),
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
      case "geo":
        location2.geo = {
          lat: predictableRandomInt(180) - 90,
          lon: predictableRandomInt(360) - 180,
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
    }
    return location2;
  }
}

// libs/mocks/src/lib/api/zones.mock.ts
var MOCK_METADATA = {
  current: {
    contacts: {
      name: "contacts",
      description: "",
      details: [
        {
          id: "user-1",
          name: "Jonathan McFarlane (PlaceOS)",
          email: "jon@place.tech",
          first_name: "Jonathan",
          last_name: "McFarlane"
        },
        {
          id: "user-1",
          name: "Alex Sorafumo (PlaceOS)",
          email: "alex@place.tech",
          first_name: "Alex",
          last_name: "Sorafumo"
        }
      ]
    }
  },
  "zone-org": {
    concierge_app: {
      name: "concierge_app",
      description: "Mock-only concierge settings",
      details: {
        parking: {
          allow_deleting: true
        }
      }
    }
  }
};
var LOCKERS = {};
function registerMockZones() {
  const all_zones = () => [
    ...MOCK_ORGS,
    ...MOCK_REGIONS,
    ...MOCK_BUILDINGS,
    ...MOCK_LEVELS,
    ...MOCK_ZONES
  ];
  to({
    path: "/api/engine/v2/zones",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let zones = all_zones();
      const tag_list = `${request.query_params?.tags || ""}`.split(" ").filter(Boolean);
      if (tag_list.length) {
        zones = zones.filter((zone) => tag_list.some((tag) => zone.tags.includes(tag)));
      }
      if (request.query_params?.parent_id) {
        zones = zones.filter((zone) => zone.parent_id === request.query_params.parent_id);
      }
      return zones;
    }
  });
  to({
    path: "/api/engine/v2/zones/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const zone = all_zones().find((_) => _.id === request.route_params.id);
      if (!zone) {
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      }
      return zone;
    }
  });
  to({
    path: "/api/engine/v2/settings",
    metadata: {},
    method: "GET",
    callback: (request) => []
  });
  to({
    path: "/api/engine/v2/settings/:id",
    metadata: {},
    method: "GET",
    callback: (request) => ({})
  });
  to({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.name === "bindings") {
        return {
          bindings: {
            details: {
              area_management: "space-0",
              location_services: "space-0",
              contact_tracing: "space-0",
              lockers: "space-0"
              // payments: 'space-0',
            }
          }
        };
      }
      if (request.query_params.name === "catering") {
        return {
          catering: {
            details: MOCK_MENU
          }
        };
      }
      if (request.query_params.name === "catering-settings") {
        return {
          "catering-settings": {
            details: {
              require_notes: false,
              charge_codes: [
                "CC-1001",
                "CC-1002",
                "CC-1003",
                "CC-2001",
                "CC-2002"
              ],
              disabled_rooms: []
            }
          }
        };
      }
      if (request.query_params.name === "catering_config") {
        return {
          catering_config: {
            details: []
          }
        };
      }
      if (request.query_params.name === "lockers") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateLockers(id);
      }
      if (request.query_params.name === "desks") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateMockDeskMetadata(id);
      }
      if (request.query_params.name === "charge_codes") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return {
          charge_codes: {
            details: new Array(30).fill(0).map((_, idx) => `C-${idx}`)
          }
        };
      }
      if (request.query_params.name === "map_regions") {
        return {
          map_regions: {
            details: {
              areas: [
                {
                  id: "zone-10.A",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.36, y: 0.33 }
                    // draw_polygon: true
                  },
                  geometry: {
                    coordinates: [
                      [0, 0],
                      [0, 0.5],
                      [0.5, 0.5],
                      [0.5, 0]
                    ]
                  }
                },
                {
                  id: "zone-10.B",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.76, y: 0.33 }
                  }
                },
                {
                  id: "zone-10.C",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.63, y: 0.77 }
                  }
                }
              ]
            }
          }
        };
      }
      if (MOCK_METADATA[request.route_params.id] && MOCK_METADATA[request.route_params.id][request.query_params.name]) {
        return MOCK_METADATA[request.route_params.id];
      } else if (MOCK_METADATA[request.route_params.id] && !request.query_params.name) {
        return MOCK_METADATA[request.route_params.id] || {};
      }
      return {};
    }
  });
  to({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  to({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PUT",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  const DESK_FEATURES = ["sit_to_stand", "single_monitor", "dual_monitor"];
  function generateMockDeskMetadata(id) {
    return {
      desks: {
        details: new Array(30).fill(0).map((_, idx) => ({
          id: `table-${padString(id, 2)}.${padString(idx + 1, 3)}`,
          name: `Desk ${id}.${padString(idx + 1, 3)}`,
          bookable: predictableRandomInt(9999) % 4 !== 0,
          groups: predictableRandomInt(9999) % 4 === 0 ? ["test-1"] : [],
          features: DESK_FEATURES.filter((_2) => predictableRandomInt(99999) % 3 === 0)
        }))
      }
    };
  }
  function generateLockers(id) {
    if (!LOCKERS[id]) {
      LOCKERS[id] = {
        lockers: {
          details: new Array(6).fill(0).map((_, idx) => {
            const position = padString(idx + 1, 2);
            const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
            return {
              id: `locker-bank-${id}.${position}`,
              map_id: `bank-${id}.${position}`,
              level_id: `lvl-02`,
              name: `Bank ${position}`,
              height: 3,
              lockers: new Array(18).fill(0).map((_2, idx2) => ({
                id: `locker-${position}.${padString(idx2 + 1, 3)}`,
                name: `Locker ${idx2 + 1}`,
                accessible: predictableRandomInt(9999) % 2 !== 0,
                bookable: predictableRandomInt(9999) % 4 !== 0,
                position: [idx2 % 6, Math.floor(idx2 / 6)],
                size: [1, 1]
              }))
            };
          })
        }
      };
    }
    return LOCKERS[id];
  }
  to({
    path: "/api/engine/v2/metadata/:id/children",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const zone = MOCK_BUILDINGS.find((_) => _.id === request.route_params.id);
      if (!zone)
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      return MOCK_LEVELS.filter((_) => _.parent_id === zone.id).map((lvl) => {
        const parts = lvl.id.split("-");
        const id = parts[parts.length - 1];
        return {
          zone: lvl,
          metadata: request.query_params.name === "lockers" ? generateLockers(id) : generateMockDeskMetadata(id)
        };
      });
    }
  });
}

// libs/mocks/src/index.ts
function mocksInit() {
  registerMockAssets();
  registerMockBookings();
  registerMockCalendars();
  registerMockEvents();
  registerMockSignage();
  registerMockSurveys();
  registerMockSystems();
  registerMockUsers();
  registerMockZones();
}

// apps/signage-manager/src/environments/settings.schema.json
var settings_schema_exports = {};
__export(settings_schema_exports, {
  $defs: () => $defs,
  default: () => settings_schema_default,
  description: () => description,
  properties: () => properties,
  type: () => type
});
var type = "object";
var description = "Customisable settings for the signage-manager app";
var properties = {
  name: {
    type: "string",
    description: "Name of the application. Used as the browser tab title when no short name is set."
  },
  title: {
    type: "string",
    description: "Title for the application"
  },
  description: {
    type: "string",
    description: "Description of the application"
  },
  short_name: {
    type: "string",
    description: "Short name for the application. Used as the browser tab title prefix and as the application name passed to the PlaceOS API client."
  },
  logo_light: {
    $ref: "#/$defs/logo",
    description: "Logo shown in the navigation sidebar when using the light theme. Either a URL string or an object with a `src` URL."
  },
  logo_dark: {
    $ref: "#/$defs/logo",
    description: "Logo shown in the navigation sidebar when using the dark theme. Either a URL string or an object with a `src` URL."
  },
  diagnostics: {
    type: "boolean",
    description: "Whether diagnostics are enabled for the application"
  },
  show_locale_selector: {
    type: "boolean",
    description: "Whether to show the locale (language) selector in the navigation sidebar. The selector is only rendered when more than one locale is configured."
  },
  show_group_selector: {
    type: "boolean",
    description: "Whether to show the signage group selector in the navigation sidebar and mobile navigation menu. Defaults to `false`. The group breadcrumbs in each section header can still be used to change group."
  },
  show_media_group_tabs: {
    type: "boolean",
    description: "Whether to show the signage group tab bar above the media list. Defaults to `false`. The group breadcrumbs in the media header can still be used to change group."
  },
  locales: {
    type: "array",
    description: "List of locales available in the navigation sidebar locale selector.",
    items: { $ref: "#/$defs/locale" }
  },
  default_animation_time: {
    type: "number",
    description: "Default duration for UI animations in milliseconds"
  },
  media_allow_extended_video_codecs: {
    type: "boolean",
    description: "Whether media upload validation accepts extended video codecs \u2014 AV1 (`av01`/`V_AV1`) and HEVC (`hev1`/`hvc1`) \u2014 in MP4 and WebM files, in addition to the default allowed codec set."
  },
  signage_path: {
    type: "string",
    description: "Base URL path of the signage viewer application, used to build display preview links. Defaults to `/signage`."
  },
  templates_enabled: {
    type: "boolean",
    description: "Whether the template management section is available. Defaults to `true`."
  }
};
var $defs = {
  logo: {
    anyOf: [
      {
        type: "string",
        description: "URL of the logo image"
      },
      {
        type: "object",
        required: ["src"],
        properties: {
          src: {
            type: "string",
            description: "URL of the logo image"
          }
        }
      }
    ]
  },
  locale: {
    type: "object",
    required: ["id", "name"],
    properties: {
      id: {
        type: "string",
        description: "Locale code, e.g. `en` or `fr`. Persisted to local storage when selected."
      },
      name: {
        type: "string",
        description: "Display name for the locale. Supports translation keys."
      },
      local: {
        type: "string",
        description: "Name of the locale in its own language, shown alongside the translated name."
      }
    }
  }
};
var settings_schema_default = {
  type,
  description,
  properties,
  $defs
};

// apps/signage-manager/src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.settings_schema = settings_schema_exports;
    this._placeos = inject(PlaceOS_Service);
    this._uploads = inject(UploadsService);
    this._ai = inject(AiImageService);
  }
  async ngOnInit() {
    setMocks(mocksInit);
    await this._placeos.init();
    this._uploads.init();
    await this._ai.load(It()?.config?.org_zone);
    if (this._ai.enabled())
      await this._ai.loadRecent();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 8, vars: 4, consts: [["href", "#main-content", 1, "skip-link"], ["id", "main-content", "tabindex", "-1", 1, "relative", "h-1/2", "w-full", "flex-1"], [3, "schema"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "global-banner");
        \u0275\u0275elementStart(4, "main", 1);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "global-loading")(7, "settings-debug-panel", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.SKIP_TO_CONTENT"));
        \u0275\u0275advance(6);
        \u0275\u0275property("schema", ctx.settings_schema);
      }
    }, dependencies: [
      GlobalBannerComponent,
      RouterOutlet,
      GlobalLoadingComponent,
      SettingsDebugPanelComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", template: `
        <a class="skip-link" href="#main-content">{{
            'SIGNAGE_MANAGER.SKIP_TO_CONTENT' | translate
        }}</a>
        <global-banner />
        <main
            id="main-content"
            tabindex="-1"
            class="relative h-1/2 w-full flex-1"
        >
            <router-outlet></router-outlet>
        </main>
        <global-loading />
        <settings-debug-panel [schema]="settings_schema" />
    `, imports: [
      GlobalBannerComponent,
      RouterOutlet,
      GlobalLoadingComponent,
      SettingsDebugPanelComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/app.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "apps/signage-manager/src/app/app.component.ts", lineNumber: 52 });
})();

// apps/signage-manager/src/environments/environment.ts
var environment = {
  production: false
};

// apps/signage-manager/src/app/signage-access.guard.ts
function canAccessSignageApp(can_manage_all_groups, group_count, groups_failed = false) {
  return can_manage_all_groups || group_count > 0 || groups_failed;
}
var signageAccessGuard = async () => {
  const service = inject(SignageService);
  const router = inject(Router);
  const org = inject(OrganisationService);
  const injector = inject(Injector);
  await Promise.all([
    org.waitUntilInitialised(),
    firstValueWhere(user_groups_loaded, Boolean, injector),
    firstValueWhere(service.signage_groups_loaded, Boolean, injector)
  ]);
  return canAccessSignageApp(service.can_manage_all_groups(), service.signage_groups().length, service.signage_groups_failed()) ? true : router.parseUrl("/unauthorised");
};

// apps/signage-manager/src/app/templates-enabled.guard.ts
var templatesEnabledGuard = async () => {
  const settings = inject(SettingsService);
  const router = inject(Router);
  const org = inject(OrganisationService);
  await org.waitUntilInitialised();
  return settings.get("app.templates_enabled") ? true : router.parseUrl("/media");
};

// apps/signage-manager/src/app/app.config.ts
var APP_ROUTES = [
  {
    path: "unauthorised",
    component: UnauthorisedComponent
  },
  {
    path: "",
    canActivate: [AuthorisedUserGuard],
    canActivateChild: [AuthorisedUserGuard, signageAccessGuard],
    children: [
      {
        path: "media",
        loadComponent: () => import("./media.component-SADGT3G2.js").then((m) => m.MediaSectionComponent)
      },
      {
        path: "playlists/:id",
        loadComponent: () => import("./playlists.component-52EYT5PV.js").then((m) => m.PlaylistsSectionComponent)
      },
      {
        path: "playlists",
        loadComponent: () => import("./playlists.component-52EYT5PV.js").then((m) => m.PlaylistsSectionComponent)
      },
      {
        path: "templates/:id",
        canActivate: [templatesEnabledGuard],
        loadComponent: () => import("./templates.component-VQDG2I6B.js").then((m) => m.TemplatesSectionComponent)
      },
      {
        path: "templates",
        canActivate: [templatesEnabledGuard],
        loadComponent: () => import("./templates.component-VQDG2I6B.js").then((m) => m.TemplatesSectionComponent)
      },
      {
        path: "schedules",
        loadComponent: () => import("./schedules.component-IUGV67RI.js").then((m) => m.SchedulesSectionComponent)
      },
      {
        path: "displays/:id",
        loadComponent: () => import("./displays.component-PKHDU73V.js").then((m) => m.DisplaysSectionComponent)
      },
      {
        path: "displays",
        loadComponent: () => import("./displays.component-PKHDU73V.js").then((m) => m.DisplaysSectionComponent)
      },
      {
        path: "branding",
        loadComponent: () => import("./branding.component-BPTGQTED.js").then((m) => m.BrandingComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./groups.component-34GGMXRI.js").then((m) => m.GroupsSectionComponent)
      },
      {
        path: "zones/:id",
        loadComponent: () => import("./zones.component-BESAACQN.js").then((m) => m.ZonesSectionComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./zones.component-BESAACQN.js").then((m) => m.ZonesSectionComponent)
      },
      { path: "**", redirectTo: "media" }
    ]
  }
];
var APP_CONFIG = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideServiceWorker("ngsw-worker.js", {
      enabled: environment.production
    }),
    provideZonelessChangeDetection(),
    provideAppInitializer(() => registerActiveLocale(inject(LocaleService).locale)),
    provideRouter(APP_ROUTES, withHashLocation(), withComponentInputBinding()),
    // {
    //     provide: ErrorHandler,
    //     useValue: Sentry.createErrorHandler({
    //         showDialog: false,
    //     }),
    // },
    // {
    //     provide: Sentry.TraceService,
    //     deps: [Router],
    // },
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService) => localeService.locale
    }
  ]
};

// apps/signage-manager/src/main.ts
bootstrapApplication(AppComponent, APP_CONFIG).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
