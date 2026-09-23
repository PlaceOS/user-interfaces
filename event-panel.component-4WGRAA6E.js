import {
  generateQRCode
} from "./chunk-NVKVY6H5.js";
import {
  AuthenticatedImageDirective,
  PanelStateService
} from "./chunk-H47ZJMW5.js";
import "./chunk-R2LDNVTX.js";
import {
  SanitizePipe
} from "./chunk-TV3XMBDI.js";
import {
  TranslatePipe
} from "./chunk-6SUUQE6E.js";
import {
  ActivatedRoute,
  AsyncHandler,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  MatRipple,
  MatRippleModule,
  OrganisationService,
  SafePipe,
  SettingsService,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  startOfMinute,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-K5FI6TTE.js";
import "./chunk-KUGYOAP2.js";

// apps/booking-panel/src/app/event-panel.component.ts
function EventPanelComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const current_bkn_r1 = \u0275\u0275readContextLet(14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", current_bkn_r1 == null ? void 0 : current_bkn_r1.title, " ");
  }
}
function EventPanelComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p", 17);
    \u0275\u0275pipe(4, "sanitize");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const current_bkn_r1 = \u0275\u0275readContextLet(14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, "APP.BOOKING_PANEL.HOST"), " ", ((_a = current_bkn_r1 == null ? void 0 : current_bkn_r1.organiser) == null ? void 0 : _a.name) || (current_bkn_r1 == null ? void 0 : current_bkn_r1.host), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(4, 5, current_bkn_r1 == null ? void 0 : current_bkn_r1.body, "html"), \u0275\u0275sanitizeHtml);
  }
}
function EventPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventPanelComponent_Conditional_15_Conditional_0_Template, 2, 1, "h2", 14);
    \u0275\u0275elementStart(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventPanelComponent_Conditional_15_Conditional_4_Template, 5, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const current_bkn_r1 = \u0275\u0275readContextLet(14);
    \u0275\u0275conditional(!ctx_r1.hide_meeting_title ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ending @ ", \u0275\u0275pipeBind2(3, 3, (current_bkn_r1 == null ? void 0 : current_bkn_r1.event_end) * 1e3, "h:mma"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_meeting_details ? 4 : -1);
  }
}
function EventPanelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.BOOKING_PANEL.NO_CURRENT"), " ");
  }
}
function EventPanelComponent_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const next_bkn_r3 = \u0275\u0275readContextLet(22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", next_bkn_r3 == null ? void 0 : next_bkn_r3.title, " ");
  }
}
function EventPanelComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventPanelComponent_Conditional_23_Conditional_0_Template, 2, 1, "h2", 18);
    \u0275\u0275elementStart(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const next_bkn_r3 = \u0275\u0275readContextLet(22);
    \u0275\u0275conditional(!ctx_r1.hide_meeting_title ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" starting @ ", \u0275\u0275pipeBind2(3, 2, (next_bkn_r3 == null ? void 0 : next_bkn_r3.event_start) * 1e3, "h:mma"), " ");
  }
}
function EventPanelComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.BOOKING_PANEL.NO_UPCOMING"), " ");
  }
}
function EventPanelComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 20);
    \u0275\u0275listener("click", function EventPanelComponent_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleQRShow());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275element(6, "img", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("w-0", !ctx_r1.show_qr())("w-56", ctx_r1.show_qr());
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ctx_r1.qr_code());
  }
}
var _EventPanelComponent = class _EventPanelComponent extends AsyncHandler {
  get text_color() {
    return this._settings.get("app.text_color") || "#FFFFFF";
  }
  get background_color() {
    return this._settings.get("app.background_color") || "#483285";
  }
  get background_image() {
    return this._settings.get("app.background_image");
  }
  get hide_meeting_details() {
    return this._state.setting("hide_meeting_details");
  }
  get hide_meeting_title() {
    return this._state.setting("hide_meeting_title");
  }
  get checkin() {
    return this._state.setting("show_qr_code") !== false;
  }
  get custom_qr() {
    return !!this._state.setting("custom_qr_url");
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._state = inject(PanelStateService);
    this._org = inject(OrganisationService);
    this.system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_qr = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_qr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.qr_code = signal(
      null,
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_qr = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_qr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current = this._state.current;
    this.next = this._state.next;
    this.space_name = computed(
      () => {
        var _a, _b;
        return ((_a = this._state.space()) == null ? void 0 : _a.display_name) || ((_b = this._state.space()) == null ? void 0 : _b.name) || "";
      },
      ...ngDevMode ? [{ debugName: "space_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo = computed(
      () => (this._org.active_building(), (this._settings.theme ? this._settings.get("app.logo_light") : this._settings.get("app.logo_dark")) || {}),
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const { custom_qr_url, custom_qr_color } = this._state.settings();
      if (custom_qr_url) {
        this.qr_code.set(generateQRCode(custom_qr_url, "#0000", custom_qr_color || "#000"));
      } else if (!this.qr_code()) {
        const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}?user=true`;
        this.qr_code.set(generateQRCode(url, "#0000", custom_qr_color || "#000"));
      }
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const params = this._route.snapshot.paramMap;
    this.system_id.set(params.get("system_id") || "");
    this._state.system = this.system_id();
    const query = this._route.snapshot.queryParamMap;
    this.hide_qr.set(!!query.get("hide_qr_code"));
    this.timeout("size", () => this._settings.overrideCssVariable("font-size", "3.5vmin", true), 1e3);
    this.interval("time", () => this.time.set(startOfMinute(Date.now()).valueOf()), 5 * 1e3);
  }
  toggleQRShow() {
    this.show_qr.update((v) => !v);
    this.timeout("close", () => this.show_qr.set(false), 60 * 1e3);
  }
};
_EventPanelComponent.\u0275fac = function EventPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventPanelComponent)();
};
_EventPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventPanelComponent, selectors: [["event-panel"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 31, vars: 31, consts: [[1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center"], [1, "flex", "w-full", "items-center", "justify-between", "p-8"], [1, "text-3xl", "font-medium"], [1, "flex", "items-center", "space-x-4", "portrait:hidden"], [1, "text-2xl"], ["auth", "", "alt", "Logo", 1, "h-10", 3, "source"], [1, "relative", "flex", "h-1/2", "w-full", "flex-1", "justify-between", "space-x-8", "overflow-hidden", "bg-cover", "p-8", "portrait:flex-col", "portrait:space-y-4", "portrait:space-x-0"], [1, "flex-1", "overflow-hidden"], [1, "text-2xl", "font-medium", "opacity-60"], [1, "min-w-[40%]", "flex-1"], [1, "text-2xl", "font-medium", "uppercase"], [1, "mb-8"], [1, "bg-base-100", "flex", "w-full", "items-center", "justify-between", "px-8", "py-3", "landscape:hidden"], [1, "fixed", "top-1/2", "-right-px", "flex", "-translate-y-1/2", "items-center"], [1, "line-clamp-5", "text-2xl", "font-medium"], [1, "mb-4", "text-2xl", "lowercase"], [1, "text-xl"], [1, "line-clamp-6", "text-base", "portrait:line-clamp-8", 3, "innerHTML"], [1, "line-clamp-4", "text-2xl", "font-medium"], [1, "text-2xl", "lowercase"], ["book-tag", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "relative", "z-20", "h-28", "w-12", "rounded-l-lg", "border-y", "border-l", "uppercase", 3, "click"], ["qr-code-out", "", 1, "border-base-300", "bg-base-100", "z-10", "overflow-hidden", "rounded-l-lg", "border", "shadow-sm"], ["qr-checkin", "", 1, "z-50", "w-56", "p-3"], ["auth", "", 1, "w-full", 3, "source"]], template: function EventPanelComponent_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "img", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "main", 6);
    \u0275\u0275pipe(10, "safe");
    \u0275\u0275pipe(11, "safe");
    \u0275\u0275pipe(12, "safe");
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275declareLet(14);
    \u0275\u0275conditionalCreate(15, EventPanelComponent_Conditional_15_Template, 5, 6)(16, EventPanelComponent_Conditional_16_Template, 3, 3, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "h2", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "hr", 11);
    \u0275\u0275declareLet(22);
    \u0275\u0275conditionalCreate(23, EventPanelComponent_Conditional_23_Template, 4, 5)(24, EventPanelComponent_Conditional_24_Template, 3, 3, "p", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "footer", 12);
    \u0275\u0275element(26, "img", 5);
    \u0275\u0275elementStart(27, "p", 4);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, EventPanelComponent_Conditional_30_Template, 7, 8, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.space_name());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 15, ctx.time(), "shortTime"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ((_a = ctx.logo()) == null ? void 0 : _a.src) || ctx.logo() || "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", \u0275\u0275pipeBind1(10, 18, ctx.background_color))("color", \u0275\u0275pipeBind1(11, 20, ctx.text_color))("background-image", \u0275\u0275pipeBind1(12, 22, "url(" + ctx.background_image + ")"));
    \u0275\u0275advance(5);
    const current_bkn_r5 = \u0275\u0275storeLet(ctx.current());
    \u0275\u0275advance();
    \u0275\u0275conditional(current_bkn_r5 ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 25, "COMMON.NEXT"), " ");
    \u0275\u0275advance(3);
    const next_bkn_r6 = \u0275\u0275storeLet(ctx.next());
    \u0275\u0275advance();
    \u0275\u0275conditional(next_bkn_r6 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275property("source", ((_b = ctx.logo()) == null ? void 0 : _b.src) || ctx.logo());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 28, ctx.time(), "shortTime"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_qr() && ctx.checkin ? 30 : -1);
  }
}, dependencies: [
  CommonModule,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective,
  DatePipe,
  TranslatePipe,
  SanitizePipe,
  SafePipe
], styles: ["\n[book-tag][_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n}\n[qr-code-out][_ngcontent-%COMP%] {\n  transition: width 300ms;\n}\n/*# sourceMappingURL=event-panel.component.css.map */"], changeDetection: 1 });
var EventPanelComponent = _EventPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventPanelComponent, [{
    type: Component,
    args: [{ selector: "event-panel", template: `
        <div class="bg-base-100 absolute inset-0 flex flex-col items-center">
            <header class="flex w-full items-center justify-between p-8">
                <h1 class="text-3xl font-medium">{{ space_name() }}</h1>
                <div class="flex items-center space-x-4 portrait:hidden">
                    <p class="text-2xl">
                        {{ time() | date: 'shortTime' }}
                    </p>
                    <img
                        auth
                        class="h-10"
                        alt="Logo"
                        [source]="logo()?.src || logo() || ''"
                    />
                </div>
            </header>
            <main
                class="relative flex h-1/2 w-full flex-1 justify-between space-x-8 overflow-hidden bg-cover p-8 portrait:flex-col portrait:space-y-4 portrait:space-x-0"
                [style.background-color]="background_color | safe"
                [style.color]="text_color | safe"
                [style.background-image]="
                    'url(' + background_image + ')' | safe
                "
            >
                <div class="flex-1 overflow-hidden">
                    @let current_bkn = current();
                    @if (current_bkn) {
                        @if (!hide_meeting_title) {
                            <h2 class="line-clamp-5 text-2xl font-medium">
                                {{ current_bkn?.title }}
                            </h2>
                        }
                        <p class="mb-4 text-2xl lowercase">
                            ending &#64;
                            {{ current_bkn?.event_end * 1000 | date: 'h:mma' }}
                        </p>
                        @if (!hide_meeting_details) {
                            <p class="text-xl">
                                {{ 'APP.BOOKING_PANEL.HOST' | translate }}
                                {{
                                    current_bkn?.organiser?.name ||
                                        current_bkn?.host
                                }}
                            </p>
                            <p
                                class="line-clamp-6 text-base portrait:line-clamp-8"
                                [innerHTML]="
                                    current_bkn?.body | sanitize: 'html'
                                "
                            ></p>
                        }
                    } @else {
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        </p>
                    }
                </div>
                <div class="min-w-[40%] flex-1">
                    <h2 class="text-2xl font-medium uppercase">
                        {{ 'COMMON.NEXT' | translate }}
                    </h2>
                    <hr class="mb-8" />
                    @let next_bkn = next();
                    @if (next_bkn) {
                        @if (!hide_meeting_title) {
                            <h2 class="line-clamp-4 text-2xl font-medium">
                                {{ next_bkn?.title }}
                            </h2>
                        }
                        <p class="text-2xl lowercase">
                            starting &#64;
                            {{ next_bkn?.event_start * 1000 | date: 'h:mma' }}
                        </p>
                    } @else {
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_UPCOMING' | translate }}
                        </p>
                    }
                </div>
            </main>
            <footer
                class="bg-base-100 flex w-full items-center justify-between px-8 py-3 landscape:hidden"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [source]="logo()?.src || logo()"
                />
                <p class="text-2xl">
                    {{ time() | date: 'shortTime' }}
                </p>
            </footer>
            @if (!hide_qr() && checkin) {
                <div
                    class="fixed top-1/2 -right-px flex -translate-y-1/2 items-center"
                >
                    <button
                        book-tag
                        matRipple
                        (click)="toggleQRShow()"
                        class="border-base-300 bg-base-100 relative z-20 h-28 w-12 rounded-l-lg border-y border-l uppercase"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </button>
                    <div
                        qr-code-out
                        class="border-base-300 bg-base-100 z-10 overflow-hidden rounded-l-lg border shadow-sm"
                        [class.w-0]="!show_qr()"
                        [class.w-56]="show_qr()"
                    >
                        <div qr-checkin class="z-50 w-56 p-3">
                            <img auth class="w-full" [source]="qr_code()" />
                        </div>
                    </div>
                </div>
            }
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [
      CommonModule,
      MatRippleModule,
      AuthenticatedImageDirective,
      TranslatePipe,
      SanitizePipe,
      SafePipe
    ], styles: ["/* angular:styles/component:css;9b4c7890f9e1052baa2f612a2ff6b04cb9c291a69a147ec2a14e55f51ea46424;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/event-panel.component.ts */\n[book-tag] {\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n}\n[qr-code-out] {\n  transition: width 300ms;\n}\n/*# sourceMappingURL=event-panel.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventPanelComponent, { className: "EventPanelComponent", filePath: "apps/booking-panel/src/app/event-panel.component.ts", lineNumber: 173 });
})();
export {
  EventPanelComponent
};
//# debugId=30efe565-e99d-51f7-825e-34b8644c4c6e
//# sourceMappingURL=event-panel.component-4WGRAA6E.js.map
