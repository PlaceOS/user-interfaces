import {
  legacyFlowsGuard
} from "./chunk-WM4KUORO.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TWTKJTPS.js";
import {
  AnnounceDirective
} from "./chunk-6EWAPITK.js";
import {
  TranslatePipe
} from "./chunk-4C74AXN2.js";
import {
  IconComponent
} from "./chunk-5YOUSSU7.js";
import {
  OrganisationService,
  PlaceOS_Service,
  SettingsTitleStrategy,
  UploadsService,
  autoConfirmNativeDomain,
  continueTeamsSignIn,
  firstValueWhere,
  getLoadingMessage,
  initialisationComplete,
  initialisationFailure,
  nativeDomainError,
  needsNativeDomain,
  provideServiceWorker,
  registerActiveLocale,
  reloadOnChunkLoadError,
  retryInitialisation,
  serviceWorkerUpdate,
  setMocks,
  teamsSignInRequired,
  watchUserGroupSync
} from "./chunk-CA6KQCCW.js";
import {
  AsyncHandler,
  GroupPermission,
  LazySentryErrorHandler,
  SettingsService,
  currentUser,
  current_user,
  hasPermission,
  setDefaultCreator,
  settingSignal,
  user_groups_failed,
  user_groups_loaded
} from "./chunk-VIHBCWCT.js";
import {
  J,
  LocaleService,
  Mt,
  eo,
  firstTruthyValueFrom,
  log,
  oo
} from "./chunk-GAMVBC5P.js";
import "./chunk-CPSLMZ5T.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  TitleStrategy,
  provideRouter,
  withHashLocation,
  withNavigationErrorHandler,
  withRouterConfig
} from "./chunk-CJAQVJ62.js";
import {
  Component,
  ErrorHandler,
  Injectable,
  Injector,
  LOCALE_ID,
  bootstrapApplication,
  computed,
  effect,
  enableProdMode,
  inject,
  provideAppInitializer,
  provideZonelessChangeDetection,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdeferOnImmediate,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
} from "./chunk-UL33YUHR.js";
import "./chunk-653SOEEV.js";

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
function GlobalBannerComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.banner()?.content || ctx_r2.banner()?.message, " ");
  }
}
function GlobalBannerComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.banner()?.content || ctx_r2.banner()?.message, " ");
  }
}
function GlobalBannerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GlobalBannerComponent_Conditional_1_Conditional_3_Template, 2, 1, "div", 5)(4, GlobalBannerComponent_Conditional_1_Conditional_4_Template, 2, 1, "div", 6);
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function GlobalBannerComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", ctx_r2.banner().type === "info" || !ctx_r2.banner().type)("text-info-content", ctx_r2.banner().type === "info" || !ctx_r2.banner().type)("bg-warning", ctx_r2.banner().type === "warn")("text-warning-content", ctx_r2.banner().type === "warn")("bg-error", ctx_r2.banner().type === "error")("text-error-content", ctx_r2.banner().type === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.type_icon());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.banner().type === "error" ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 15, "COMMON.CLOSE"));
  }
}
var BANNER_ICONS = {
  info: "info",
  warn: "warning",
  error: "error"
};
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
    this.type_icon = computed(
      () => BANNER_ICONS[this.banner()?.type ?? "info"] ?? BANNER_ICONS.info,
      ...ngDevMode ? [{ debugName: "type_icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._environment_bar_padding = effect(
      () => {
        document.body.classList.toggle("has-environment-bar", !!this.environment_bar());
      },
      ...ngDevMode ? [{ debugName: "_environment_bar_padding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._banner_key = computed(
      () => {
        const banner = this.banner();
        return banner?.id || banner?.content || banner?.message || "";
      },
      ...ngDevMode ? [{ debugName: "_banner_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_been_closed = computed(
      () => {
        if (!this.is_setup())
          return true;
        this._change();
        return !this.banner()?.content && !this.banner()?.message || localStorage.getItem("PLACE.last_banner") === this._banner_key();
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
    localStorage.setItem("PLACE.last_banner", this._banner_key());
    this._change.set(Date.now());
  }
  static {
    this.\u0275fac = function GlobalBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalBannerComponent, selectors: [["global-banner"]], decls: 2, vars: 2, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "p-4", "print:hidden", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], ["aria-hidden", "true", 1, "environment-bar", "top-0", "print:hidden"], ["aria-hidden", "true", 1, "environment-bar", "bottom-0", "print:hidden"], [1, "flex", "w-full", "items-center", "space-x-4", "p-4", "print:hidden"], ["aria-hidden", "true", 1, "text-2xl"], ["role", "alert", 1, "flex-1"], ["announce", "", 1, "flex-1"], ["icon", "", "matRipple", "", 3, "click"]], template: function GlobalBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GlobalBannerComponent_Conditional_0_Template, 2, 4);
        \u0275\u0275conditionalCreate(1, GlobalBannerComponent_Conditional_1_Template, 9, 17, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.environment_bar()) ? 0 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.has_been_closed() && ctx.banner() ? 1 : -1);
      }
    }, dependencies: [IconComponent, AnnounceDirective, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.environment-bar[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\n/*# sourceMappingURL=global-banner.component.css.map */"] });
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
                <icon aria-hidden="true" class="text-2xl">{{
                    type_icon()
                }}</icon>
                @if (banner().type === 'error') {
                    <div role="alert" class="flex-1">
                        {{ banner()?.content || banner()?.message }}
                    </div>
                } @else {
                    <div announce class="flex-1">
                        {{ banner()?.content || banner()?.message }}
                    </div>
                }
                <button
                    icon
                    matRipple
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                    (click)="close()"
                >
                    <icon>close</icon>
                </button>
            </div>
        }
    `, imports: [IconComponent, TranslatePipe, AnnounceDirective], styles: ["/* angular:styles/component:css;48adc7ab23f963363b839300791bbdc46c1dcce0d1cc0ea0f3bb781a20fc7fbc;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-banner.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.environment-bar {\n  height: 0.5rem;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\n/*# sourceMappingURL=global-banner.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalBannerComponent, { className: "GlobalBannerComponent", filePath: "libs/components/src/lib/global-banner.component.ts", lineNumber: 97 });
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function ServiceWorkerUpdateCardComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissed.set(true));
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "close");
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
    this.dismissed = signal(
      false,
      ...ngDevMode ? [{ debugName: "dismissed" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceWorkerUpdateCardComponent, selectors: [["placeos-service-worker-update-card"]], decls: 1, vars: 1, consts: [["role", "status", 1, "border-base-300", "bg-base-100", "text-base-content", "pointer-events-auto", "fixed", "right-4", "bottom-4", "z-999", "flex", "w-[20rem]", "max-w-[calc(100vw-2rem)]", "items-center", "gap-3", "rounded-lg", "border", "p-4", "shadow-xl"], [1, "min-w-0", "flex-1"], [1, "m-0", "text-sm", "leading-tight", "font-medium"], [1, "m-0", "mt-1", "text-xs", "opacity-70"], ["icon", "", "default", "", 3, "click"], ["icon", "", "dismiss", "", "title", "Dismiss", "aria-label", "Dismiss", 3, "click"]], template: function ServiceWorkerUpdateCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ServiceWorkerUpdateCardComponent_Conditional_0_Template, 12, 4, "aside", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = !ctx.dismissed() && ctx.update()) ? 0 : -1, tmp_0_0);
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
        @if (!dismissed() && update(); as update_state) {
            <aside
                role="status"
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto fixed right-4 bottom-4 z-999 flex w-[20rem] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-xl"
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
                <button
                    icon
                    dismiss
                    title="Dismiss"
                    aria-label="Dismiss"
                    (click)="dismissed.set(true)"
                >
                    <icon>close</icon>
                </button>
            </aside>
        }
    `,
      imports: [IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceWorkerUpdateCardComponent, { className: "ServiceWorkerUpdateCardComponent", filePath: "libs/components/src/lib/service-worker-update-card.component.ts", lineNumber: 52 });
})();

// libs/components/src/lib/global-loading.component.ts
var NativeDomainOverlayLoaderComponent_Conditional_0_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./native-domain-overlay.component-HQXGNET2.js").then((m) => m.NativeDomainOverlayComponent)
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
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275element(4, "mat-progress-bar", 9);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.message(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 2, "COMMON.LOADING"));
  }
}
function GlobalLoadingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_2_Conditional_1_Template, 5, 1, "div", 3)(2, GlobalLoadingComponent_Conditional_2_Conditional_2_Template, 6, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", ctx_r1.gradient() || null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.initialisation_error() ? 1 : 2);
  }
}
var BACKGROUND_SETTLED_CLASS = "background-settled";
var BACKGROUND_SETTLE_DELAY_MS = 3e3;
var GRADIENT_CACHE_KEY = "PLACEOS.loading_gradient";
var CSS_COLOUR = /^(#[0-9a-f]{3,8}|[a-z]+|(rgba?|hsla?|oklch|oklab)\([\w\s.,%/-]+\))$/i;
function loadingGradient(colours) {
  if (!Array.isArray(colours) || colours.length < 2)
    return "";
  const valid = colours.every((colour) => typeof colour === "string" && CSS_COLOUR.test(colour.trim()));
  return valid ? `linear-gradient(to right, ${colours.join(", ")})` : "";
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
    import("./native-domain-overlay.component-HQXGNET2.js").then((m) => m.NativeDomainOverlayComponent)
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NativeDomainOverlayLoaderComponent, { className: "NativeDomainOverlayLoaderComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 73 });
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
    this.visible = computed(
      () => this.loading() || !!this.initialisation_error(),
      ...ngDevMode ? [{ debugName: "visible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.gradient = signal(
      localStorage.getItem(GRADIENT_CACHE_KEY) || "",
      ...ngDevMode ? [{ debugName: "gradient" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settle_background = effect(
      () => {
        const root = document.documentElement;
        if (this.visible()) {
          this.clearTimeout("settle-background");
          root.classList.remove(BACKGROUND_SETTLED_CLASS);
          return;
        }
        this.timeout("settle-background", () => root.classList.add(BACKGROUND_SETTLED_CLASS), BACKGROUND_SETTLE_DELAY_MS);
      },
      ...ngDevMode ? [{ debugName: "_settle_background" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  retry() {
    retryInitialisation();
  }
  ngOnInit() {
    const online_state = oo();
    this.timeout("initial-connection", () => {
      this.online.set(online_state());
      this.connection_checked.set(true);
    }, 5e3);
    const update_gradient = () => {
      const domain = Mt();
      if (!domain)
        return;
      const gradient = loadingGradient(domain.config?.loading_gradient);
      if (gradient === this.gradient())
        return;
      this.gradient.set(gradient);
      localStorage.setItem(GRADIENT_CACHE_KEY, gradient);
    };
    this.subscription("online", online_state.subscribe((is_online) => {
      this.online.set(is_online);
      if (is_online) {
        this.connection_checked.set(true);
        this.clearTimeout("initial-connection");
      }
      update_gradient();
    }));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLoadingComponent, selectors: [["global-loading"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 2, consts: [["role", "alert", 1, "bg-error", "fixed", "top-2", "left-1/2", "z-9999", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white", "shadow-sm"], ["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "flex-col", "items-center", "justify-end", "space-y-2", "p-4", 3, "background-image"], ["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "flex-col", "items-center", "justify-end", "space-y-2", "p-4"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-4", "text-center", "text-xs", "shadow-sm"], ["initialisation-error", "", "role", "alert"], ["type", "button", 1, "bg-primary", "text-primary-content", "mt-3", "rounded", "px-4", "py-2", 3, "click"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-2", "text-center", "text-xs", "shadow-sm"], ["role", "status", 1, "text-center", "font-mono"], [1, "border-base-300", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "overflow-hidden", "rounded-full", "border", "shadow-sm"], ["mode", "indeterminate", 1, "scale-150", "rounded-sm"]], template: function GlobalLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "native-domain-overlay-loader");
        \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_1_Template, 3, 3, "div", 0);
        \u0275\u0275conditionalCreate(2, GlobalLoadingComponent_Conditional_2_Template, 3, 3, "div", 1);
        \u0275\u0275element(3, "placeos-service-worker-update-card");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.connection_checked() && !ctx.online() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.visible() ? 2 : -1);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      NativeDomainOverlayLoaderComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #0d47a1 0%,\n      #2196f3 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalLoadingComponent, [{
    type: Component,
    args: [{ selector: "global-loading", template: `
        <native-domain-overlay-loader />
        @if (connection_checked() && !online()) {
            <div
                role="alert"
                class="bg-error fixed top-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs text-white shadow-sm"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (visible()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex flex-col items-center justify-end space-y-2 p-4"
                [style.background-image]="gradient() || null"
            >
                @if (initialisation_error()) {
                    <div
                        class="border-base-300 bg-base-100 w-[24rem] max-w-[calc(100vw-2rem)] rounded-lg border p-4 text-center text-xs shadow-sm"
                    >
                        <p initialisation-error role="alert">
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
                        <p role="status" class="text-center font-mono">
                            {{ message() }}
                        </p>
                    </div>
                    <div
                        class="border-base-300 w-[24rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-full border shadow-sm"
                    >
                        <mat-progress-bar
                            mode="indeterminate"
                            class="scale-150 rounded-sm"
                            [attr.aria-label]="'COMMON.LOADING' | translate"
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
    ], styles: ["/* angular:styles/component:css;20ed35e4d9331eb05f75050b4db1abf21c3efcb5c2a33e67ac0f1efe2c3a5f59;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-loading.component.ts */\n:host {\n  pointer-events: none;\n}\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #0d47a1 0%,\n      #2196f3 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLoadingComponent, { className: "GlobalLoadingComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 162 });
})();

// libs/components/src/lib/misconfigured.component.ts
var MisconfiguredComponent = class _MisconfiguredComponent {
  static {
    this.\u0275fac = function MisconfiguredComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisconfiguredComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisconfiguredComponent, selectors: [["app-misconfigured"]], decls: 10, vars: 9, consts: [["content", "", 1, "border-base-200", "bg-base-100", "text-base-content", "m-4", "rounded-sm", "border", "p-4", "text-center", "shadow-sm"], [1, "text-2xl"], [1, "py-4"]], template: function MisconfiguredComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.MISCONFIGURED_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "COMMON.MISCONFIGURED_MSG"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "COMMON.MISCONFIGURED_CONTACT"));
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[content][_ngcontent-%COMP%] {\n  width: 28em;\n  max-width: calc(100vw - 1rem);\n}\n/*# sourceMappingURL=misconfigured.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisconfiguredComponent, [{
    type: Component,
    args: [{ selector: "app-misconfigured", template: `
        <div
            content
            class="border-base-200 bg-base-100 text-base-content m-4 rounded-sm border p-4 text-center shadow-sm"
        >
            <h3 class="text-2xl">
                {{ 'COMMON.MISCONFIGURED_TITLE' | translate }}
            </h3>
            <p class="py-4">
                {{ 'COMMON.MISCONFIGURED_MSG' | translate }}
            </p>
            <p>{{ 'COMMON.MISCONFIGURED_CONTACT' | translate }}</p>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;fd237c457decefd8e82dcc0faf53b9947137897eac5546470693a17b85a6d757;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/misconfigured.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[content] {\n  width: 28em;\n  max-width: calc(100vw - 1rem);\n}\n/*# sourceMappingURL=misconfigured.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisconfiguredComponent, { className: "MisconfiguredComponent", filePath: "libs/components/src/lib/misconfigured.component.ts", lineNumber: 36 });
})();

// libs/components/src/lib/redirect.component.ts
var RedirectComponent = class _RedirectComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._settings.initialised);
    await this._org.waitUntilInitialised();
    if (!this._settings.get("app.default_route"))
      return;
    this._router.navigate(this._settings.get("app.default_route").split("/"), { replaceUrl: true });
  }
  static {
    this.\u0275fac = function RedirectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RedirectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RedirectComponent, selectors: [["page-redirect"]], decls: 0, vars: 0, template: function RedirectComponent_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RedirectComponent, [{
    type: Component,
    args: [{ selector: "page-redirect", template: `` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RedirectComponent, { className: "RedirectComponent", filePath: "libs/components/src/lib/redirect.component.ts", lineNumber: 15 });
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
  async canActivate(_next, _state) {
    return this.checkUser();
  }
  async canLoad(_route, _segments) {
    return this.checkUser();
  }
  async canActivateChild(_next, _state) {
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
      if (user_groups_failed())
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
    this.storeDecision(!!can_activate);
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return !!can_activate;
  }
  /** Local storage key for this app's last online access decision */
  get _decision_key() {
    return `PLACEOS.access_allowed.${this._settings.app_name || ""}`;
  }
  /** Store the access decision, for use when the backend cannot be reached */
  storeDecision(allowed) {
    try {
      localStorage.setItem(this._decision_key, allowed ? "1" : "0");
    } catch {
    }
  }
  /** Whether the last online check on this device denied access */
  wasDenied() {
    try {
      return localStorage.getItem(this._decision_key) === "0";
    } catch {
      return false;
    }
  }
  /** The active user, or null if the backend could not be reached in time */
  async waitForUser() {
    const online = await this.waitForBackend(eo(oo(), Boolean));
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
   * Access decision for when the backend cannot be reached, or the user's
   * permissions failed to load. Waiting forever, or a refusal, leaves a
   * fixed device on a loading or 403 screen with no way back, so a device
   * that has authenticated before is allowed through on its cached
   * session, unless the last online check on this device denied access.
   * Every API call it then makes is still checked by the server.
   */
  offlineAccess() {
    if (hasCachedCredentials() && !this.wasDenied()) {
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

// apps/workplace/src/app/app.component.ts
var AppComponent_Defer_4_DepsFn = () => [
  /* @ts-ignore */
  import("./chat.component-KTTTME2M.js").then((m) => m.ChatComponent)
];
var AppComponent_Defer_10_DepsFn = () => [
  /* @ts-ignore */
  import("./settings-debug-panel-launcher.component-K7TPQUIN.js").then((m) => m.SettingsDebugPanelLauncherComponent)
];
function AppComponent_Defer_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-chat");
  }
}
function AppComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function AppComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithTeams());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "COMMON.SIGN_IN_PROMPT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "COMMON.SIGN_IN"), " ");
  }
}
function AppComponent_Defer_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-debug-panel-launcher", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loadSchema", ctx_r1.load_settings_schema);
  }
}
function AppComponent_DeferError_9_Template(rf, ctx) {
}
var AppComponent = class _AppComponent {
  constructor() {
    this._placeos = inject(PlaceOS_Service);
    this._uploads = inject(UploadsService);
    this.has_chat = settingSignal("chat.enabled", false);
    this.teams_sign_in_required = teamsSignInRequired();
    this.load_settings_schema = () => import("./settings.schema-XBC7ATIV.js");
    watchUserGroupSync();
  }
  async ngOnInit() {
    setMocks(() => import("./src-ZDVDK7RJ.js").then(({ mocksInit }) => mocksInit()));
    await this._placeos.init();
    if (this._placeos.has_uploads)
      this._uploads.init();
    setDefaultCreator(currentUser());
  }
  signInWithTeams() {
    continueTeamsSignIn();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [[1, "relative", "h-1/2", "w-full", "flex-1"], [1, "fixed", "inset-0", "z-9999", "flex", "items-center", "justify-center", "p-4"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-full", "rounded-lg", "border", "p-4", "text-center", "text-sm", "shadow-sm"], ["btn", "", "type", "button", 1, "mt-3", "w-full", 3, "click"], [3, "loadSchema"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "global-banner");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275domTemplate(3, AppComponent_Defer_3_Template, 1, 0);
        \u0275\u0275defer(4, 3, AppComponent_Defer_4_DepsFn);
        \u0275\u0275element(6, "global-loading");
        \u0275\u0275conditionalCreate(7, AppComponent_Conditional_7_Template, 8, 6, "div", 1);
        \u0275\u0275domTemplate(8, AppComponent_Defer_8_Template, 1, 1)(9, AppComponent_DeferError_9_Template, 0, 0);
        \u0275\u0275defer(10, 8, AppComponent_Defer_10_DepsFn, null, null, 9);
        \u0275\u0275deferOnIdle();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275deferWhen(ctx.has_chat());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.teams_sign_in_required() ? 7 : -1);
      }
    }, dependencies: [
      RouterOutlet,
      GlobalBannerComponent,
      GlobalLoadingComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(AppComponent, () => [
    /* @ts-ignore */
    import("./chat.component-KTTTME2M.js").then((m) => m.ChatComponent),
    /* @ts-ignore */
    import("./settings-debug-panel-launcher.component-K7TPQUIN.js").then((m) => m.SettingsDebugPanelLauncherComponent)
  ], (ChatComponent, SettingsDebugPanelLauncherComponent) => {
    setClassMetadata(AppComponent, [{
      type: Component,
      args: [{ selector: "app-root", imports: [
        RouterOutlet,
        GlobalBannerComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelLauncherComponent,
        ChatComponent,
        TranslatePipe
      ], template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @defer (when has_chat()) {
            <global-chat />
        }
        <global-loading />
        @if (teams_sign_in_required()) {
            <div
                class="fixed inset-0 z-9999 flex items-center justify-center p-4"
            >
                <div
                    class="border-base-300 bg-base-100 w-[24rem] max-w-full rounded-lg border p-4 text-center text-sm shadow-sm"
                >
                    <p>{{ 'COMMON.SIGN_IN_PROMPT' | translate }}</p>
                    <button
                        btn
                        type="button"
                        class="mt-3 w-full"
                        (click)="signInWithTeams()"
                    >
                        {{ 'COMMON.SIGN_IN' | translate }}
                    </button>
                </div>
            </div>
        }
        @defer (on idle) {
            <settings-debug-panel-launcher
                [loadSchema]="load_settings_schema"
            />
        } @error {
            <!-- The launcher is optional. If its chunk fails to download
                 (for example while offline), show nothing and do not
                 report an uncaught NG0750 error. -->
        }
    `, styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/app.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
    }], () => [], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "apps/workplace/src/app/app.component.ts", lineNumber: 81 });
})();

// apps/workplace/src/environments/environment.ts
var environment = {
  production: false,
  service_worker: false
};

// apps/workplace/src/app/app.routes.ts
var routes = [
  { path: "-", component: RedirectComponent },
  {
    path: "unauthorised",
    component: UnauthorisedComponent,
    title: "Unauthorised"
  },
  {
    path: "misconfigured",
    component: MisconfiguredComponent,
    title: "Misconfigured"
  },
  {
    path: "book",
    title: "Book",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./book.routes-GJA5BOGX.js").then((m) => m.ROUTES)
  },
  {
    path: "explore",
    title: "Explore",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./explore.routes-DHSVW6BY.js").then((m) => m.ROUTES)
  },
  {
    path: "control",
    title: "Control",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./control.routes-CRCQ5HQY.js").then((m) => m.ROUTES)
  },
  {
    path: "directory",
    title: "Directory",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./directory.routes-ZDP4D6DU.js").then((m) => m.ROUTES)
  },
  {
    path: "your-bookings",
    title: "Your Bookings",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./schedule.routes-ZA3JYK54.js").then((m) => m.ROUTES)
  },
  {
    path: "group-events",
    title: "Group Events",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./group-events.routes-LAWE6G5D.js").then((m) => m.ROUTES)
  },
  {
    path: "deals-n-offers",
    title: "Deals & Offers",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./deals.routes-ECATNR23.js").then((m) => m.ROUTES)
  },
  {
    path: "landing",
    title: "Home",
    canMatch: [legacyFlowsGuard],
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./landing.routes-Z5KG5OMO.js").then((m) => m.ROUTES)
  },
  {
    path: "landing",
    title: "Home",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadComponent: () => import("./landing-new.component-3NY7WPZW.js").then((m) => m.LandingNewComponent)
  },
  {
    path: "team-schedule",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadComponent: () => import("./team-schedule.component-HZIMHG7C.js").then((m) => m.TeamScheduleComponent)
  },
  {
    path: "embedded/:id",
    title: "Embedded Page",
    canActivate: [AuthorisedUserGuard],
    loadComponent: () => import("./embedded-url.component-FPPCUEX2.js").then((m) => m.EmbeddedUrlComponent)
  },
  { path: "**", redirectTo: "-", pathMatch: "full" }
];

// apps/workplace/src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideAppInitializer(() => registerActiveLocale(inject(LocaleService).locale)),
    provideRouter(routes, withHashLocation(), withRouterConfig({ paramsInheritanceStrategy: "always" }), withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error))),
    provideServiceWorker("ngsw-worker.js", {
      enabled: environment.production && environment.service_worker
    }),
    {
      provide: ErrorHandler,
      useClass: LazySentryErrorHandler
    },
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService) => localeService.locale
    },
    { provide: TitleStrategy, useClass: SettingsTitleStrategy }
  ]
};

// apps/workplace/src/main.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=890549a7-b6bd-5680-bb0a-7bb5c0c3e256
//# sourceMappingURL=main.js.map
