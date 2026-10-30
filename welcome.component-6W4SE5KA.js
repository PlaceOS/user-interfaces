import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SWUUBC3H.js";
import {
  minuteClock
} from "./chunk-JFMXAHSG.js";
import {
  PageHeadingDirective
} from "./chunk-DXE5MFOJ.js";
import {
  AuthenticatedImageDirective
} from "./chunk-7RJ3XDTL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QGMV6GIB.js";
import {
  SanitizePipe
} from "./chunk-E4F36C4E.js";
import {
  VirtualKeyboardComponent
} from "./chunk-SIFLLKHY.js";
import {
  TranslatePipe
} from "./chunk-RRDUZKXJ.js";
import {
  IconComponent
} from "./chunk-IGFQZTGL.js";
import {
  SettingsService,
  isPublicMode,
  settingSignal
} from "./chunk-4KFQL45D.js";
import {
  AsyncHandler,
  LocaleService
} from "./chunk-PARB3GVO.js";
import "./chunk-K5TTW5WQ.js";
import "./chunk-VEHNMD7P.js";
import "./chunk-ZGEGORPC.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-EQ5PGPZI.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CLFS24D3.js";
import "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/welcome.component.ts
var _c0 = () => ["/checkin"];
var _c1 = () => ["/checkout"];
var _c2 = () => ["/register"];
var _c3 = (a0) => ["/explore", a0];
function WelcomeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.REGISTER"), " ");
  }
}
function WelcomeComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c3, ctx_r0.level()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.EXPLORE"), " ");
  }
}
function WelcomeComponent_Conditional_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " Language ");
    \u0275\u0275elementEnd();
  }
}
function WelcomeComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 11)(1, "div", 15)(2, "icon", 16);
    \u0275\u0275text(3, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, WelcomeComponent_Conditional_27_Conditional_8_Template, 2, 0, "div", 18);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r2 = \u0275\u0275reference(29);
    \u0275\u0275property("matMenuTriggerFor", menu_r2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "COMMON.LANGUAGE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 7, "COMMON.LANGUAGE") !== "Language" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 9, ctx_r0.active_locale()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, ctx_r0.active_locale()), " ");
  }
}
function WelcomeComponent_For_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("lang", lang_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r4.local, " ");
  }
}
function WelcomeComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function WelcomeComponent_For_31_Template_button_click_0_listener() {
      const lang_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setLocale(lang_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, WelcomeComponent_For_31_Conditional_7_Template, 2, 2, "div", 23);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mt-2", \u0275\u0275pipeBind1(3, 4, lang_r4.name) !== lang_r4.local);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, lang_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 8, lang_r4.name) !== lang_r4.local ? 7 : -1);
  }
}
function WelcomeComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
}
function WelcomeComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 24)(2, "h2", 25);
    \u0275\u0275text(3, " Public mode is enabled ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 26);
    \u0275\u0275text(5, " Welcome actions are disabled while this kiosk is in public mode. ");
    \u0275\u0275elementEnd()()();
  }
}
var WelcomeComponent = class _WelcomeComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this._locale = inject(LocaleService);
    this._cdr = inject(ChangeDetectorRef);
    this.now = minuteClock();
    this.level = signal(
      "",
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_sync = effect(
      () => this.level.set(this._settings.listen("KIOSK.level")()),
      ...ngDevMode ? [{ debugName: "_level_sync" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_explore = settingSignal("hide_explore");
    this.background = settingSignal("welcome_background");
    this.can_register = settingSignal("allow_self_registration");
    this.hide_building_image = settingSignal("hide_building_image");
    this.welcome_message = settingSignal("welcome_message");
    this.locales = settingSignal("locales", []);
    this.is_public_mode = isPublicMode;
    this.locale = signal(
      this._locale.locale,
      ...ngDevMode ? [{ debugName: "locale" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_locale = computed(
      () => {
        const locale_list = this.locales();
        const locale = this.locale();
        for (const item of locale_list) {
          if (item.id === locale)
            return item.name;
        }
        return "LANGUAGE.ENGLISH";
      },
      ...ngDevMode ? [{ debugName: "active_locale" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setLocale = (code) => {
      this.locale.set(code);
      this._locale.setLocale(code);
      localStorage.setItem("PLACEOS.locale", code);
      setTimeout(() => location.reload(), 300);
    };
  }
  ngOnInit() {
    this.level.set(localStorage?.getItem("KIOSK.level"));
    const params = this.route.snapshot.paramMap;
    if (params.has("level")) {
      this.level.set(params.get("level"));
    }
    const query_params = this.route.snapshot.queryParamMap;
    if (query_params.has("osk")) {
      const osk_enabled = query_params.get("osk") === "true";
      localStorage.setItem("OSK.enabled", `${osk_enabled}`);
      VirtualKeyboardComponent.enabled = osk_enabled;
    }
    this.timeout("check", () => this._cdr.detectChanges(), 1e3);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275WelcomeComponent_BaseFactory;
      return function WelcomeComponent_Factory(__ngFactoryType__) {
        return (\u0275WelcomeComponent_BaseFactory || (\u0275WelcomeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_WelcomeComponent)))(__ngFactoryType__ || _WelcomeComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 34, vars: 30, consts: [["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "items-center", "overflow-hidden", "p-8"], ["auth", "", "alt", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", 3, "source"], [1, "z-10", "flex", "w-[60%]", "flex-col", "justify-center", "space-y-8"], ["pageHeading", "", 1, "mb-4", "space-y-4", "text-6xl", "text-white", 3, "innerHTML"], [1, "flex", "flex-wrap", "items-center", "gap-4", "font-medium"], ["btn", "", "matRipple", "", 1, "bg-base-100", "border-base-100", "text-base-content", "min-w-40", "border", "whitespace-nowrap", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], [1, "ml-2"], ["aria-hidden", "true", 1, "text-2xl"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white"], [1, "absolute", "top-4", "left-4", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["src", "assets/img/building.webp", "alt", "", 1, "absolute", "right-0", "bottom-0", "w-[60%]"], [1, "bg-base-300/90", "text-base-content", "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "p-8", "text-center"], [1, "flex", "items-center", "justify-between"], ["aria-hidden", "true", 1, "text-2xl", "text-white"], [1, "ml-2", "text-left", "leading-tight", "text-white"], ["lang", "en", 1, "text-xs", "opacity-70"], [1, "bg-base-200", "ml-4", "max-w-24", "truncate", "rounded-sm", "px-2", "py-1", "text-sm", 3, "matTooltip"], ["mat-menu-item", "", 3, "click"], [1, "flex", "h-14", "min-w-[24rem]", "items-center", "justify-between", "space-x-8"], [1, "leading-tight"], [1, "text-xs", "opacity-70"], [1, "max-w-xl", "space-y-2"], [1, "text-3xl", "font-semibold"], [1, "text-lg", "opacity-80"]], template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "img", 2);
        \u0275\u0275elementStart(2, "div", 3);
        \u0275\u0275element(3, "h1", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "sanitize");
        \u0275\u0275elementStart(6, "div", 5)(7, "a", 6)(8, "div", 7)(9, "div", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "icon", 9);
        \u0275\u0275text(13, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "a", 6)(15, "div", 7)(16, "div", 8);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "icon", 9);
        \u0275\u0275text(20, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(21, WelcomeComponent_Conditional_21_Template, 7, 5, "a", 6);
        \u0275\u0275conditionalCreate(22, WelcomeComponent_Conditional_22_Template, 7, 6, "a", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "date");
        \u0275\u0275pipe(26, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(27, WelcomeComponent_Conditional_27_Template, 14, 13, "button", 11);
        \u0275\u0275elementStart(28, "mat-menu", null, 0);
        \u0275\u0275repeaterCreate(30, WelcomeComponent_For_31_Template, 9, 10, "button", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(32, WelcomeComponent_Conditional_32_Template, 1, 0, "img", 13);
        \u0275\u0275conditionalCreate(33, WelcomeComponent_Conditional_33_Template, 6, 0, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.background());
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(5, 15, ctx.welcome_message() || \u0275\u0275pipeBind1(4, 13, "APP.VISITOR_KIOSK.WELCOME_MESSAGE"), "html"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, "COMMON.CHECK_IN"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 20, "COMMON.CHECK_OUT"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_register() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.level() && !ctx.hide_explore() ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(25, 22, ctx.now(), "mediumDate"), " ", \u0275\u0275pipeBind2(26, 25, ctx.now(), "shortTime"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.locales().length > 1 ? 27 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.locales());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_building_image() ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_public_mode() ? 33 : -1);
      }
    }, dependencies: [
      PageHeadingDirective,
      CommonModule,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      RouterModule,
      RouterLink,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\na[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n/*# sourceMappingURL=welcome.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-welcome", template: `
        <div class="absolute inset-0 flex items-center overflow-hidden p-8">
            <img
                auth
                alt=""
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            <div class="z-10 flex w-[60%] flex-col justify-center space-y-8">
                <h1
                    pageHeading
                    class="mb-4 space-y-4 text-6xl text-white"
                    [innerHTML]="
                        welcome_message() ||
                            ('APP.VISITOR_KIOSK.WELCOME_MESSAGE' | translate)
                            | sanitize: 'html'
                    "
                ></h1>
                <div class="flex flex-wrap items-center gap-4 font-medium">
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkin']"
                        class="bg-base-100 border-base-100 text-base-content min-w-40 border whitespace-nowrap"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'COMMON.CHECK_IN' | translate }}
                            </div>
                            <icon class="text-2xl" aria-hidden="true"
                                >chevron_right</icon
                            >
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkout']"
                        class="bg-base-100 border-base-100 text-base-content min-w-40 border whitespace-nowrap"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'COMMON.CHECK_OUT' | translate }}
                            </div>
                            <icon class="text-2xl" aria-hidden="true"
                                >chevron_right</icon
                            >
                        </div>
                    </a>
                    @if (can_register()) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/register']"
                            class="bg-base-100 border-base-100 text-base-content min-w-40 border whitespace-nowrap"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="ml-2">
                                    {{
                                        'APP.VISITOR_KIOSK.REGISTER' | translate
                                    }}
                                </div>
                                <icon class="text-2xl" aria-hidden="true"
                                    >chevron_right</icon
                                >
                            </div>
                        </a>
                    }
                    @if (level() && !hide_explore()) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/explore', level()]"
                            class="bg-base-100 border-base-100 text-base-content min-w-40 border whitespace-nowrap"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="ml-2">
                                    {{
                                        'APP.VISITOR_KIOSK.EXPLORE' | translate
                                    }}
                                </div>
                                <icon class="text-2xl" aria-hidden="true"
                                    >place</icon
                                >
                            </div>
                        </a>
                    }
                </div>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now() | date: 'mediumDate' }} {{ now() | date: 'shortTime' }}
            </div>
            @if (locales().length > 1) {
                <button
                    class="absolute top-4 left-4"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex items-center justify-between">
                        <icon class="text-2xl text-white" aria-hidden="true"
                            >language</icon
                        >
                        <div class="ml-2 text-left leading-tight text-white">
                            <div>{{ 'COMMON.LANGUAGE' | translate }}</div>
                            @if (
                                ('COMMON.LANGUAGE' | translate) !== 'Language'
                            ) {
                                <div class="text-xs opacity-70" lang="en">
                                    Language
                                </div>
                            }
                        </div>
                        <div
                            class="bg-base-200 ml-4 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                            [matTooltip]="active_locale() | translate"
                        >
                            {{ active_locale() | translate }}
                        </div>
                    </div>
                </button>
            }
            <mat-menu #menu="matMenu">
                @for (lang of locales(); track lang) {
                    <button mat-menu-item (click)="setLocale(lang.id)">
                        <div
                            class="flex h-14 min-w-[24rem] items-center justify-between space-x-8"
                        >
                            <div
                                class="leading-tight"
                                [class.mt-2]="
                                    (lang.name | translate) !== lang.local
                                "
                            >
                                <div>{{ lang.name | translate }}</div>
                                @if ((lang.name | translate) !== lang.local) {
                                    <div
                                        class="text-xs opacity-70"
                                        [attr.lang]="lang.id"
                                    >
                                        {{ lang.local }}
                                    </div>
                                }
                            </div>
                            <!-- <div class="text-3xl">{{ lang.flag }}</div> -->
                        </div>
                    </button>
                }
            </mat-menu>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.webp"
                    alt=""
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Welcome actions are disabled while this kiosk is in
                            public mode.
                        </p>
                    </div>
                </div>
            }
        </div>
    `, imports: [
      PageHeadingDirective,
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatTooltipModule,
      RouterModule,
      AuthenticatedImageDirective,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;cc9227079df7ac5301f9446791a6a855742622827223e39404093077fda285ac;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/welcome.component.ts */\na {\n  height: 3.5rem;\n}\n/*# sourceMappingURL=welcome.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent", filePath: "apps/visitor-kiosk/src/app/welcome.component.ts", lineNumber: 225 });
})();
export {
  WelcomeComponent
};
//# debugId=b4a7053f-aa35-565a-9731-e82f862225b0
//# sourceMappingURL=welcome.component-6W4SE5KA.js.map
