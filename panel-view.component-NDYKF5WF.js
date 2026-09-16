import {
  currentPeriod,
  nextPeriod,
  timelineData,
  timelineStart
} from "./chunk-FTKHKJ25.js";
import {
  generateQRCode
} from "./chunk-NVKVY6H5.js";
import {
  PanelStateService
} from "./chunk-2DY62JAZ.js";
import "./chunk-26DLNKDX.js";
import "./chunk-IFE7ACVN.js";
import {
  TranslatePipe
} from "./chunk-XAWMBTNR.js";
import {
  ActivatedRoute,
  AsyncHandler,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  Dd,
  IconComponent,
  Injectable,
  Input,
  SafePipe,
  VERSION,
  computed,
  effect,
  inject,
  input,
  log,
  randomInt,
  randomString,
  setClassMetadata,
  signal,
  startOfMinute,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-T3EJMGSX.js";
import "./chunk-KUGYOAP2.js";

// libs/common/src/lib/remote-logging.service.ts
function hookMethod(rootObject, functionToHook, hookingFunction) {
  var previousFunction = rootObject[functionToHook];
  rootObject[functionToHook] = (...args) => {
    hookingFunction(args);
    previousFunction.call(rootObject, ...args);
  };
  return previousFunction;
}
var _a;
var DEVICE_ID = ((_a = globalThis.localStorage) == null ? void 0 : _a.getItem("PLACEOS.DEVICE_ID")) || `DEV-${randomString(8)}`;
var _RemoteLoggingService = class _RemoteLoggingService extends AsyncHandler {
  setMetadata(metadata) {
  }
  constructor() {
    var _a2;
    super();
    this._disable_handling = false;
    this._system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "_system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._logging_system = signal(
      "",
      ...ngDevMode ? [{ debugName: "_logging_system" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event_history = signal(
      [],
      ...ngDevMode ? [{ debugName: "_event_history" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._metadata = null;
    this.history = this._event_history.asReadonly();
    (_a2 = globalThis.localStorage) == null ? void 0 : _a2.setItem("PLACEOS.DEVICE_ID", DEVICE_ID);
    this._patchConsoleMethods();
    log("Logger", "Remote logging initialised...");
  }
  setSystem(id) {
    this._system_id.set(id);
    if (id)
      this._bindTo(id, "enabled");
  }
  _patchConsoleMethods() {
    const types = [
      "log",
      "debug",
      "info",
      "warn",
      "error"
    ];
    for (const key of types) {
      hookMethod(console, key, (...args) => this._handleEvent(key, args));
    }
  }
  _handleEvent(type, data, event_type = "console") {
    if (data.includes('"Logger"') || this._disable_handling)
      return;
    const blob = [...data[0]];
    blob[0] = typeof blob[0] === "string" ? blob[0].replace(/\%c/g, "") : blob[0];
    const event = {
      id: `${event_type}-${randomInt(9999999999)}`,
      device_id: DEVICE_ID,
      type: event_type,
      subtype: type,
      timestamp: Date.now(),
      raw: data,
      data: blob.filter((_) => typeof _ !== "string" || !_.startsWith("color:")),
      metadata: this._metadata || null
    };
    this._event_history.update((history) => [...history, event].slice(-2e4));
    const system_id = this._logging_system();
    if (!system_id)
      return;
    this._disable_handling = true;
    Dd(system_id, "Logger").execute("post_event", [event]).catch().finally(() => this._disable_handling = false);
  }
  /** List to binding */
  _bindTo(id, name, mod = "Logger") {
    const module = Dd(id, mod).variable(name);
    this.subscription(`bind:${name}`, module.bind());
    this.subscription(`listen:${name}`, module.listen().subscribe((enabled) => {
      this._logging_system.set(enabled ? id : "");
    }));
  }
};
_RemoteLoggingService.\u0275fac = function RemoteLoggingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RemoteLoggingService)();
};
_RemoteLoggingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteLoggingService, factory: _RemoteLoggingService.\u0275fac, providedIn: "root" });
var RemoteLoggingService = _RemoteLoggingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteLoggingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/booking-panel/src/app/new-panel/panel-view-details.component.ts
function PanelViewDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.room_image + ")");
  }
}
function PanelViewDetailsComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.BOOKING_PANEL.SCAN_QR_CODE"), " ");
  }
}
function PanelViewDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275domElement(1, "img", 10);
    \u0275\u0275conditionalCreate(2, PanelViewDetailsComponent_Conditional_6_Conditional_2_Template, 3, 3, "div", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx_r0.qr_code(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hide_qr_text ? 2 : -1);
  }
}
function PanelViewDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275domElement(1, "div", 12);
    \u0275\u0275domElementStart(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275domElementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cur_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cur_r2 == null ? void 0 : cur_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "APP.BOOKING_PANEL.MEETING_IN_PROGRESS"));
  }
}
function PanelViewDetailsComponent_Conditional_12_Template(rf, ctx) {
  var _a2;
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cur_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "APP.BOOKING_PANEL.HOST"), " ", ((_a2 = cur_r2 == null ? void 0 : cur_r2.organiser) == null ? void 0 : _a2.name) || (cur_r2 == null ? void 0 : cur_r2.host), " ");
  }
}
var _PanelViewDetailsComponent = class _PanelViewDetailsComponent extends AsyncHandler {
  get hide_meeting_details() {
    return this._state.setting("hide_meeting_details");
  }
  get hide_meeting_title() {
    return this._state.setting("hide_meeting_title");
  }
  get room_image() {
    return this._state.setting("room_image");
  }
  get checkin() {
    return this._state.setting("show_qr_code") !== false;
  }
  get custom_qr() {
    return !!this._state.setting("custom_qr_url");
  }
  get hide_qr_text() {
    return this._state.setting("hide_qr_text");
  }
  constructor() {
    super();
    this._state = inject(PanelStateService);
    this.system = this._state.space;
    this.current = this._state.current;
    this.qr_code = signal(
      "",
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
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
    effect(() => {
      const { custom_qr_url, custom_qr_color } = this._state.settings();
      if (custom_qr_url) {
        this.qr_code.set(generateQRCode(custom_qr_url.replace("{system_id}", this._state.system), "#fff0", custom_qr_color || "#fff"));
      } else if (!this.qr_code()) {
        const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}`;
        this.qr_code.set(generateQRCode(url, "#fff0", custom_qr_color || "#fff"));
      }
    });
  }
  async ngOnInit() {
    this.interval("time", () => this.time.set(startOfMinute(Date.now()).valueOf()), 5 * 1e3);
  }
};
_PanelViewDetailsComponent.\u0275fac = function PanelViewDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanelViewDetailsComponent)();
};
_PanelViewDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelViewDetailsComponent, selectors: [["panel-view-details"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 12, consts: [[1, "relative", "h-full", "w-full", "bg-black", "text-white"], [1, "absolute", "inset-0", "bg-cover", "bg-center", 3, "background-image"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], ["name", "", 1, "absolute", "top-4", "left-4", "text-4xl", "font-medium"], ["qr-checkin", "", 1, "absolute", "top-4", "right-4", "z-50", "w-40", "space-y-4", "text-xl"], [1, "absolute", "inset-x-0", "bottom-0", "p-4", "text-center", "text-3xl", "text-white"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "font-normal"], [1, "text-3xl"], [1, "text-4xl"], [1, "absolute", "inset-0", "bg-cover", "bg-center"], [1, "w-full", 3, "src"], [1, "w-full", "text-lg"], [1, "bg-neutral", "absolute", "inset-0", "opacity-30"], [1, "relative"], [1, "font-light"]], template: function PanelViewDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275declareLet(1);
    \u0275\u0275conditionalCreate(2, PanelViewDetailsComponent_Conditional_2_Template, 1, 2, "div", 1);
    \u0275\u0275domElement(3, "div", 2);
    \u0275\u0275domElementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PanelViewDetailsComponent_Conditional_6_Template, 3, 2, "div", 4);
    \u0275\u0275conditionalCreate(7, PanelViewDetailsComponent_Conditional_7_Template, 7, 4, "div", 5);
    \u0275\u0275domElementStart(8, "div", 6)(9, "p", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, PanelViewDetailsComponent_Conditional_12_Template, 3, 4, "p", 8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    const cur_r3 = \u0275\u0275storeLet(ctx.current());
    const sys_r4 = ctx.system();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.room_image ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (sys_r4 == null ? void 0 : sys_r4.display_name) || (sys_r4 == null ? void 0 : sys_r4.name) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.checkin ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cur_r3 && !ctx.hide_meeting_details && !ctx.hide_meeting_title ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("pb-8", cur_r3 && !ctx.hide_meeting_details && !ctx.hide_meeting_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 9, ctx.time(), "EEE, MMM d, y h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(cur_r3 && !ctx.hide_meeting_details ? 12 : -1);
  }
}, dependencies: [CommonModule, DatePipe, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=panel-view-details.component.css.map */"], changeDetection: 1 });
var PanelViewDetailsComponent = _PanelViewDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelViewDetailsComponent, [{
    type: Component,
    args: [{ selector: "panel-view-details", template: `
        <div class="relative h-full w-full bg-black text-white">
            @let cur = current();
            @let sys = system();
            @if (room_image) {
                <div
                    class="absolute inset-0 bg-cover bg-center"
                    [style.background-image]="'url(' + room_image + ')'"
                ></div>
            }
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div name class="absolute top-4 left-4 text-4xl font-medium">
                {{ sys?.display_name || sys?.name || '' }}
            </div>
            @if (checkin) {
                <div
                    qr-checkin
                    class="absolute top-4 right-4 z-50 w-40 space-y-4 text-xl"
                >
                    <img class="w-full" [src]="qr_code()" />
                    @if (!hide_qr_text) {
                        <div class="w-full text-lg">
                            {{ 'APP.BOOKING_PANEL.SCAN_QR_CODE' | translate }}
                        </div>
                    }
                </div>
            }
            @if (cur && !hide_meeting_details && !hide_meeting_title) {
                <div
                    class="absolute inset-x-0 bottom-0 p-4 text-center text-3xl text-white"
                >
                    <div class="bg-neutral absolute inset-0 opacity-30"></div>
                    <div class="relative">
                        {{ cur?.title }}
                        <span class="font-light">{{
                            'APP.BOOKING_PANEL.MEETING_IN_PROGRESS' | translate
                        }}</span>
                    </div>
                </div>
            }
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-4 font-normal"
                [class.pb-8]="
                    cur && !hide_meeting_details && !hide_meeting_title
                "
            >
                <p class="text-3xl">
                    {{ time() | date: 'EEE, MMM d, y h:mm a' }}
                </p>
                @if (cur && !hide_meeting_details) {
                    <p class="text-4xl">
                        {{ 'APP.BOOKING_PANEL.HOST' | translate }}
                        {{ cur?.organiser?.name || cur?.host }}
                    </p>
                }
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [CommonModule, TranslatePipe], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/new-panel/panel-view-details.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=panel-view-details.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelViewDetailsComponent, { className: "PanelViewDetailsComponent", filePath: "apps/booking-panel/src/app/new-panel/panel-view-details.component.ts", lineNumber: 87 });
})();

// apps/booking-panel/src/app/new-panel/panel-view-status.component.ts
var _c0 = (a0, a1) => ({ hour: a0, minute: a1 });
var _c1 = (a0) => ({ minute: a0 });
function PanelViewStatusComponent_Conditional_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_IN_HOURS_AND_MINUTES", \u0275\u0275pureFunction2(4, _c0, es_r1 == null ? void 0 : es_r1.current[1], es_r1 == null ? void 0 : es_r1.current[2])), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_IN_MINUTES", \u0275\u0275pureFunction1(4, _c1, es_r1 == null ? void 0 : es_r1.current[2])), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.FREE_IN_LESS_THAN_MINUTE"), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PanelViewStatusComponent_Conditional_10_Conditional_0_Conditional_0_Template, 2, 7);
    \u0275\u0275conditionalCreate(1, PanelViewStatusComponent_Conditional_10_Conditional_0_Conditional_1_Template, 2, 6);
    \u0275\u0275conditionalCreate(2, PanelViewStatusComponent_Conditional_10_Conditional_0_Conditional_2_Template, 2, 3);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[1]) > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[1]) <= 0 && (es_r1 == null ? void 0 : es_r1.current[2]) > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[1]) <= 0 && (es_r1 == null ? void 0 : es_r1.current[2]) <= 1 ? 2 : -1);
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.EARLY_CHECKIN"), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_FOR_HOURS_AND_MINUTES", \u0275\u0275pureFunction2(4, _c0, es_r1 == null ? void 0 : es_r1.current[1], es_r1 == null ? void 0 : es_r1.current[2])), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_FOR_MINUTES", \u0275\u0275pureFunction1(4, _c1, es_r1 == null ? void 0 : es_r1.current[2])), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.FREE_FOR_LESS_THAN_MINUTE"), " ");
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Conditional_0_Template, 2, 7);
    \u0275\u0275conditionalCreate(1, PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Conditional_1_Template, 2, 6);
    \u0275\u0275conditionalCreate(2, PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Conditional_2_Template, 2, 3);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[1]) > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[1]) <= 0 && (es_r1 == null ? void 0 : es_r1.current[2]) > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[1]) <= 0 && (es_r1 == null ? void 0 : es_r1.current[2]) <= 1 ? 2 : -1);
  }
}
function PanelViewStatusComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_0_Template, 2, 3);
    \u0275\u0275conditionalCreate(1, PanelViewStatusComponent_Conditional_10_Conditional_1_Conditional_1_Template, 3, 3);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const s_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(s_r2 === "busy" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r2 !== "busy" ? 1 : -1);
  }
}
function PanelViewStatusComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PanelViewStatusComponent_Conditional_10_Conditional_0_Template, 3, 3)(1, PanelViewStatusComponent_Conditional_10_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const es_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275conditional((es_r1 == null ? void 0 : es_r1.current[0]) ? 0 : 1);
  }
}
function PanelViewStatusComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.NO_CURRENT"), " ");
  }
}
function PanelViewStatusComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", ctx_r2.show_floating_left ? "9rem" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx_r2.can_scan ? "APP.BOOKING_PANEL.CHECKIN_INPUT" : "APP.BOOKING_PANEL.CHECKIN_INPUT_NOSCAN"), " ");
  }
}
function PanelViewStatusComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", ctx_r2.show_floating_left ? "9rem" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx_r2.can_scan ? "APP.BOOKING_PANEL.BOOKING_INPUT" : "APP.BOOKING_PANEL.BOOKING_INPUT_NOSCAN"), " ");
  }
}
function PanelViewStatusComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", ctx_r2.show_floating_left ? "9rem" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.BOOKING_PANEL.END_INPUT"), " ");
  }
}
var _PanelViewStatusComponent = class _PanelViewStatusComponent {
  constructor() {
    this._state = inject(PanelStateService);
    this.state = this._state.status;
    this.event_state = computed(
      () => ({
        current: currentPeriod(this._state.bookings(), this._state.current(), this._state.next()),
        next: nextPeriod(this._state.next())
      }),
      ...ngDevMode ? [{ debugName: "event_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.free_svg = `
    <svg width="129" height="117" viewBox="0 0 129 117" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M32.9422 90.8456H10.1503L6.37414 54.8238C6.34123 54.4031 6.22286 53.9934 6.02626 53.62C5.82966 53.2465 5.55897 52.9171 5.23075 52.6519C4.90253 52.3867 4.52368 52.1913 4.11737 52.0776C3.71106 51.9639 3.28583 51.9343 2.8677 51.9907C2.44708 52.0236 2.03759 52.142 1.66428 52.3387C1.29098 52.5353 0.961708 52.8061 0.696607 53.1345C0.431506 53.4628 0.236151 53.8418 0.12249 54.2483C0.00882954 54.6547 -0.0207468 55.0801 0.0355704 55.4984L4.21633 94.3534C4.312 95.1416 4.69529 95.8668 5.29265 96.3896C5.89001 96.9125 6.65936 97.1963 7.45305 97.1865H17.4329V109.059L10.0155 111.892C9.68401 112.004 9.37812 112.181 9.1155 112.412C8.85287 112.644 8.63873 112.925 8.48549 113.239C8.33225 113.554 8.24295 113.896 8.22276 114.246C8.20257 114.595 8.2519 114.945 8.36788 115.275C8.48387 115.605 8.6642 115.909 8.89844 116.169C9.13268 116.429 9.41617 116.64 9.73249 116.79C10.0488 116.94 10.3916 117.025 10.7412 117.041C11.0907 117.057 11.4399 117.004 11.7687 116.884L19.8605 113.916L27.9523 116.884H28.8963C29.4326 116.879 29.9541 116.707 30.3889 116.393C30.8236 116.079 31.1503 115.638 31.3238 115.13C31.5533 114.468 31.512 113.742 31.2089 113.11C30.9058 112.478 30.3654 111.992 29.7055 111.757L22.4229 109.194V97.3214H32.9422C33.7971 97.3099 34.6137 96.9651 35.2182 96.3603C35.8227 95.7556 36.1674 94.9387 36.1789 94.0835C36.1845 93.6568 36.1047 93.2332 35.944 92.8378C35.7833 92.4424 35.5451 92.0833 35.2434 91.7815C34.9417 91.4797 34.5827 91.2414 34.1875 91.0806C33.7922 90.9199 33.3688 90.84 32.9422 90.8456Z" fill="currentColor"/>
    <path d="M125.189 51.9907C124.348 51.9019 123.507 52.1503 122.85 52.6816C122.192 53.2128 121.772 53.9833 121.682 54.8239L117.906 90.7107H94.9794C94.121 90.7107 93.2977 91.0519 92.6907 91.6591C92.0837 92.2663 91.7427 93.0899 91.7427 93.9487C91.7427 94.8074 92.0837 95.631 92.6907 96.2382C93.2977 96.8454 94.121 97.1866 94.9794 97.1866H105.499V109.059L98.2161 111.622C97.5749 111.882 97.0536 112.371 96.7542 112.995C96.4549 113.619 96.3991 114.332 96.5978 114.995C96.7713 115.503 97.098 115.944 97.5327 116.258C97.9675 116.572 98.489 116.744 99.0253 116.749C99.302 116.77 99.5797 116.724 99.8345 116.614L107.926 113.646L116.018 116.614C116.347 116.734 116.696 116.787 117.046 116.771C117.395 116.755 117.738 116.67 118.054 116.52C118.371 116.37 118.654 116.16 118.888 115.9C119.123 115.64 119.303 115.336 119.419 115.005C119.535 114.675 119.584 114.325 119.564 113.976C119.544 113.626 119.455 113.284 119.301 112.97C119.148 112.655 118.934 112.374 118.671 112.143C118.409 111.911 118.103 111.734 117.771 111.622L110.489 109.059V97.1866H120.603C121.397 97.1963 122.166 96.9126 122.764 96.3897C123.361 95.8668 123.744 95.1416 123.84 94.3534L128.021 55.4984C128.11 54.6577 127.861 53.8161 127.33 53.1584C126.799 52.5007 126.029 52.0807 125.189 51.9907Z" fill="currentColor"/>
    <path d="M95.5186 74.1164V69.7992C95.5241 69.7091 95.5104 69.619 95.4785 69.5346C95.4465 69.4503 95.3971 69.3737 95.3333 69.3099C95.2696 69.2462 95.193 69.1967 95.1087 69.1647C95.0244 69.1328 94.9342 69.1191 94.8443 69.1246H33.0769C32.9869 69.1191 32.8968 69.1328 32.8124 69.1647C32.7281 69.1967 32.6516 69.2462 32.5878 69.3099C32.5241 69.3737 32.4746 69.4503 32.4426 69.5346C32.4107 69.619 32.397 69.7091 32.4026 69.7992V74.1164C32.397 74.2064 32.4107 74.2966 32.4426 74.3809C32.4746 74.4653 32.5241 74.5419 32.5878 74.6056C32.6516 74.6694 32.7281 74.7189 32.8124 74.7509C32.8968 74.7828 32.9869 74.7965 33.0769 74.791H55.1945V115.67C55.1889 115.76 55.2026 115.85 55.2345 115.934C55.2665 116.018 55.3159 116.095 55.3797 116.159C55.4435 116.223 55.52 116.272 55.6043 116.304C55.6886 116.336 55.7788 116.35 55.8688 116.344H72.0524C72.1423 116.35 72.2325 116.336 72.3168 116.304C72.4011 116.272 72.4777 116.223 72.5414 116.159C72.6052 116.095 72.6547 116.018 72.6866 115.934C72.7185 115.85 72.7322 115.76 72.7267 115.67V74.9259H94.8443C95.0399 74.9054 95.2198 74.8093 95.3458 74.6581C95.4717 74.507 95.5337 74.3126 95.5186 74.1164Z" fill="currentColor"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="128.03" height="116.141" fill="currentColor" transform="translate(0.000488281 0.858643)"/>
    </clipPath>
    </defs>
    </svg>
    `;
    this.in_use_svg = `
    <svg width="129" height="117" viewBox="0 0 129 117" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M29.7316 77.5781C29.1922 71.6419 28.6527 64.7613 28.2481 60.8489C28.6527 61.2536 29.1922 61.6583 29.5968 62.0631C32.9684 65.0312 38.9023 65.5708 42.9482 65.5708C44.8363 65.5708 46.3198 65.4359 46.9941 65.4359C48.0088 65.3405 48.9445 64.8473 49.597 64.0641C50.2494 63.2809 50.5656 62.2713 50.4766 61.2557C50.3875 60.2401 49.9004 59.301 49.1216 58.6434C48.3428 57.9858 47.3356 57.6631 46.3198 57.7459C42.6785 58.1506 36.6097 57.7459 34.8564 56.2618C30.5021 52.1921 24.7668 49.926 18.8077 49.9209C12.4691 49.9209 11.2554 52.7541 11.2554 56.1269C11.2554 60.7139 12.7389 80.5462 13.6829 84.8634C14.627 88.641 24.0674 87.9664 28.6527 87.8315C32.711 87.6529 36.7769 87.8789 40.7904 88.506C40.9217 96.0702 40.6516 103.636 39.9812 111.171C39.8928 112.491 40.3224 113.793 41.1786 114.801C42.0349 115.809 43.2504 116.443 44.5666 116.568H44.9712C46.2268 116.57 47.4371 116.099 48.3616 115.249C49.2862 114.399 49.8572 113.233 49.9611 111.981C51.1749 95.9263 51.1749 86.2125 49.8263 83.2444C47.8033 79.0621 42.5437 77.8479 29.7316 77.5781Z" fill="currentColor" fill-opacity="0.61"/>
    <path d="M18.6731 47.8973C24.1104 47.8973 28.5182 43.4879 28.5182 38.0486C28.5182 32.6093 24.1104 28.2 18.6731 28.2C13.2359 28.2 8.82812 32.6093 8.82812 38.0486C8.82812 43.4879 13.2359 47.8973 18.6731 47.8973Z" fill="currentColor" fill-opacity="0.61"/>
    <path d="M33.9124 90.5297H11.1205L7.34436 54.5079C7.31145 54.0871 7.19307 53.6775 6.99647 53.3041C6.79987 52.9306 6.52919 52.6012 6.20097 52.336C5.87275 52.0708 5.49389 51.8754 5.08758 51.7617C4.68127 51.648 4.25605 51.6184 3.83791 51.6747C3.41729 51.7077 3.0078 51.8261 2.6345 52.0228C2.2612 52.2194 1.93192 52.4902 1.66682 52.8186C1.40172 53.1469 1.20637 53.5259 1.0927 53.9323C0.979044 54.3388 0.949468 54.7642 1.00579 55.1825L5.18655 94.0374C5.28222 94.8257 5.66551 95.5508 6.26287 96.0737C6.86023 96.5966 7.62957 96.8804 8.42327 96.8706H18.4031V108.743L10.9857 111.576C10.6542 111.688 10.3483 111.865 10.0857 112.096C9.82309 112.328 9.60895 112.609 9.45571 112.924C9.30246 113.238 9.21316 113.58 9.19297 113.93C9.17278 114.279 9.22211 114.629 9.3381 114.959C9.45408 115.289 9.63442 115.593 9.86866 115.853C10.1029 116.113 10.3864 116.324 10.7027 116.474C11.019 116.624 11.3619 116.709 11.7114 116.725C12.0609 116.741 12.4102 116.688 12.7389 116.568L20.8307 113.6L28.9225 116.568H29.8665C30.4028 116.563 30.9243 116.391 31.3591 116.077C31.7938 115.763 32.1205 115.322 32.2941 114.814C32.5235 114.152 32.4822 113.426 32.1791 112.794C31.876 112.163 31.3356 111.676 30.6757 111.441L23.3931 108.878V97.0055H33.9124C34.7673 96.994 35.5839 96.6492 36.1884 96.0444C36.7929 95.4397 37.1376 94.6228 37.1491 93.7676C37.1548 93.3408 37.0749 92.9173 36.9142 92.5219C36.7535 92.1265 36.5153 91.7673 36.2136 91.4655C35.912 91.1637 35.5529 90.9254 35.1577 90.7647C34.7624 90.604 34.339 90.5241 33.9124 90.5297Z" fill="currentColor" fill-opacity="0.61"/>
    <path d="M89.206 88.5061C93.2205 87.8881 97.2855 87.6622 101.344 87.8315C105.929 87.9664 115.37 88.641 116.314 84.8634C117.392 80.5462 118.741 60.714 118.741 56.1269C118.741 52.7541 117.662 49.9209 111.189 49.9209C105.213 49.8372 99.4458 52.1159 95.14 56.2618C93.3868 57.7459 87.4528 58.0157 83.6766 57.7459C83.1702 57.6982 82.6592 57.7513 82.1733 57.9019C81.6874 58.0526 81.236 58.2978 80.8452 58.6237C80.4544 58.9495 80.1319 59.3494 79.8961 59.8004C79.6604 60.2514 79.5162 60.7445 79.4717 61.2515C79.4273 61.7585 79.4835 62.2692 79.6371 62.7544C79.7907 63.2396 80.0388 63.6895 80.3669 64.0784C80.695 64.4673 81.0968 64.7875 81.5491 65.0205C82.0014 65.2534 82.4953 65.3946 83.0023 65.4359C83.6766 65.4359 85.1601 65.5709 87.0482 65.5709C91.0941 65.5709 97.0281 65.0312 100.4 62.0631C100.879 61.6925 101.33 61.2867 101.748 60.8489C101.344 64.7614 100.804 71.507 100.265 77.5781C87.4528 77.8479 82.1932 79.0622 80.3051 83.2445C78.9564 86.2126 78.8216 95.9263 80.1702 111.981C80.2956 113.224 80.8731 114.378 81.793 115.224C82.7128 116.07 83.911 116.548 85.1601 116.568H85.5647C86.8809 116.443 88.0964 115.809 88.9527 114.801C89.809 113.793 90.2385 112.491 90.1501 111.171C89.3797 103.642 89.0644 96.0733 89.206 88.5061Z" fill="currentColor" fill-opacity="0.61"/>
    <path d="M111.216 47.9107C116.653 47.9107 121.061 43.5013 121.061 38.062C121.061 32.6228 116.653 28.2134 111.216 28.2134C105.779 28.2134 101.371 32.6228 101.371 38.062C101.371 43.5013 105.779 47.9107 111.216 47.9107Z" fill="currentColor" fill-opacity="0.61"/>
    <path d="M126.159 51.6748C125.319 51.586 124.477 51.8344 123.82 52.3656C123.162 52.8968 122.743 53.6673 122.653 54.5079L118.876 90.3948H95.9496C95.0912 90.3948 94.2679 90.736 93.6609 91.3432C93.0539 91.9504 92.7129 92.774 92.7129 93.6327C92.7129 94.4915 93.0539 95.3151 93.6609 95.9223C94.2679 96.5295 95.0912 96.8706 95.9496 96.8706H106.469V108.743L99.1863 111.306C98.5451 111.566 98.0238 112.056 97.7245 112.679C97.4251 113.303 97.3693 114.016 97.568 114.679C97.7415 115.187 98.0682 115.628 98.503 115.942C98.9377 116.256 99.4592 116.428 99.9955 116.433C100.272 116.454 100.55 116.408 100.805 116.298L108.896 113.33L116.988 116.298C117.317 116.418 117.666 116.471 118.016 116.455C118.365 116.439 118.708 116.354 119.024 116.204C119.341 116.055 119.624 115.844 119.859 115.584C120.093 115.324 120.273 115.02 120.389 114.689C120.505 114.359 120.554 114.009 120.534 113.66C120.514 113.31 120.425 112.968 120.271 112.654C120.118 112.339 119.904 112.058 119.641 111.827C119.379 111.595 119.073 111.419 118.742 111.306L111.459 108.743V96.8706H121.574C122.367 96.8804 123.137 96.5966 123.734 96.0738C124.331 95.5509 124.715 94.8257 124.81 94.0375L128.991 55.1825C129.08 54.3418 128.832 53.5002 128.301 52.8425C127.77 52.1848 126.999 51.7648 126.159 51.6748Z" fill="currentColor" fill-opacity="0.61"/>
    <path d="M96.4888 73.8005V69.4833C96.4943 69.3932 96.4806 69.3031 96.4487 69.2187C96.4168 69.1344 96.3673 69.0578 96.3035 68.994C96.2398 68.9302 96.1632 68.8807 96.0789 68.8488C95.9946 68.8168 95.9045 68.8032 95.8145 68.8087H34.0471C33.9571 68.8032 33.867 68.8168 33.7827 68.8488C33.6983 68.8807 33.6218 68.9302 33.558 68.994C33.4943 69.0578 33.4448 69.1344 33.4129 69.2187C33.3809 69.3031 33.3673 69.3932 33.3728 69.4833V73.8005C33.3673 73.8905 33.3809 73.9807 33.4129 74.065C33.4448 74.1494 33.4943 74.2259 33.558 74.2897C33.6218 74.3535 33.6983 74.403 33.7827 74.4349C33.867 74.4669 33.9571 74.4806 34.0471 74.475H56.1647V115.354C56.1592 115.444 56.1728 115.534 56.2048 115.618C56.2367 115.703 56.2862 115.779 56.3499 115.843C56.4137 115.907 56.4902 115.956 56.5745 115.988C56.6589 116.02 56.749 116.034 56.839 116.028H73.0226C73.1126 116.034 73.2027 116.02 73.287 115.988C73.3713 115.956 73.4479 115.907 73.5116 115.843C73.5754 115.779 73.6249 115.703 73.6568 115.618C73.6887 115.534 73.7024 115.444 73.6969 115.354V74.61H95.8145C96.0101 74.5895 96.19 74.4934 96.316 74.3422C96.4419 74.191 96.5039 73.9967 96.4888 73.8005Z" fill="currentColor" fill-opacity="0.61"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="128.03" height="116.141" fill="currentColor" transform="translate(0.970703 0.542725)"/>
    </clipPath>
    </defs>
    </svg>
    `;
    this.pending_svg = `
    <svg width="129" height="117" viewBox="0 0 129 117" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M32.9412 90.8456H10.1493L6.37317 54.8238C6.34026 54.4031 6.22188 53.9934 6.02528 53.62C5.82868 53.2465 5.558 52.9171 5.22978 52.6519C4.90156 52.3867 4.5227 52.1913 4.11639 52.0776C3.71008 51.9639 3.28486 51.9343 2.86672 51.9907C2.4461 52.0236 2.03661 52.142 1.66331 52.3387C1.29 52.5353 0.960731 52.8061 0.695631 53.1345C0.43053 53.4628 0.235174 53.8418 0.121514 54.2483C0.00785298 54.6547 -0.0217234 55.0801 0.0345939 55.4984L4.21535 94.3534C4.31102 95.1416 4.69432 95.8668 5.29168 96.3896C5.88904 96.9125 6.65838 97.1963 7.45207 97.1865H17.432V109.059L10.0145 111.892C9.68304 112.004 9.37714 112.181 9.11452 112.412C8.8519 112.644 8.63776 112.925 8.48452 113.239C8.33127 113.554 8.24197 113.896 8.22178 114.246C8.20159 114.595 8.25092 114.945 8.3669 115.275C8.48289 115.605 8.66323 115.909 8.89747 116.169C9.13171 116.429 9.4152 116.64 9.73151 116.79C10.0478 116.94 10.3907 117.025 10.7402 117.041C11.0897 117.057 11.439 117.004 11.7677 116.884L19.8595 113.916L27.9513 116.884H28.8953C29.4316 116.879 29.9531 116.707 30.3879 116.393C30.8227 116.079 31.1493 115.638 31.3229 115.13C31.5523 114.468 31.511 113.742 31.2079 113.11C30.9048 112.478 30.3644 111.992 29.7045 111.757L22.4219 109.194V97.3214H32.9412C33.7961 97.3099 34.6127 96.9651 35.2172 96.3603C35.8217 95.7556 36.1664 94.9387 36.1779 94.0835C36.1836 93.6568 36.1037 93.2332 35.943 92.8378C35.7823 92.4424 35.5441 92.0833 35.2425 91.7815C34.9408 91.4797 34.5817 91.2414 34.1865 91.0806C33.7913 90.9199 33.3678 90.84 32.9412 90.8456Z" fill="currentColor"/>
    <path d="M125.188 51.9907C124.348 51.9019 123.507 52.1503 122.849 52.6816C122.192 53.2128 121.772 53.9833 121.682 54.8239L117.906 90.7107H94.9789C94.1205 90.7107 93.2972 91.0519 92.6902 91.6591C92.0832 92.2663 91.7422 93.0899 91.7422 93.9487C91.7422 94.8074 92.0832 95.631 92.6902 96.2382C93.2972 96.8454 94.1205 97.1866 94.9789 97.1866H105.498V109.059L98.2156 111.622C97.5744 111.882 97.0531 112.371 96.7538 112.995C96.4544 113.619 96.3986 114.332 96.5973 114.995C96.7708 115.503 97.0975 115.944 97.5323 116.258C97.967 116.572 98.4885 116.744 99.0248 116.749C99.3015 116.77 99.5792 116.724 99.834 116.614L107.926 113.646L116.018 116.614C116.346 116.734 116.696 116.787 117.045 116.771C117.395 116.755 117.737 116.67 118.054 116.52C118.37 116.37 118.654 116.16 118.888 115.9C119.122 115.64 119.302 115.336 119.418 115.005C119.534 114.675 119.584 114.325 119.564 113.976C119.543 113.626 119.454 113.284 119.301 112.97C119.148 112.655 118.933 112.374 118.671 112.143C118.408 111.911 118.102 111.734 117.771 111.622L110.488 109.059V97.1866H120.603C121.397 97.1963 122.166 96.9126 122.763 96.3897C123.361 95.8668 123.744 95.1416 123.84 94.3534L128.02 55.4984C128.109 54.6577 127.861 53.8161 127.33 53.1584C126.799 52.5007 126.029 52.0807 125.188 51.9907Z" fill="currentColor"/>
    <path d="M95.5186 74.1164V69.7992C95.5241 69.7091 95.5104 69.619 95.4785 69.5346C95.4465 69.4503 95.3971 69.3737 95.3333 69.3099C95.2696 69.2462 95.193 69.1967 95.1087 69.1647C95.0244 69.1328 94.9342 69.1191 94.8443 69.1246H33.0769C32.9869 69.1191 32.8968 69.1328 32.8124 69.1647C32.7281 69.1967 32.6516 69.2462 32.5878 69.3099C32.5241 69.3737 32.4746 69.4503 32.4426 69.5346C32.4107 69.619 32.397 69.7091 32.4026 69.7992V74.1164C32.397 74.2064 32.4107 74.2966 32.4426 74.3809C32.4746 74.4653 32.5241 74.5419 32.5878 74.6056C32.6516 74.6694 32.7281 74.7189 32.8124 74.7509C32.8968 74.7828 32.9869 74.7965 33.0769 74.791H55.1945V115.67C55.1889 115.76 55.2026 115.85 55.2345 115.934C55.2665 116.018 55.3159 116.095 55.3797 116.159C55.4435 116.223 55.52 116.272 55.6043 116.304C55.6886 116.336 55.7788 116.35 55.8688 116.344H72.0524C72.1423 116.35 72.2325 116.336 72.3168 116.304C72.4011 116.272 72.4777 116.223 72.5414 116.159C72.6052 116.095 72.6547 116.018 72.6866 115.934C72.7185 115.85 72.7322 115.76 72.7267 115.67V74.9259H94.8443C95.0399 74.9054 95.2198 74.8093 95.3458 74.6581C95.4717 74.507 95.5337 74.3126 95.5186 74.1164Z" fill="currentColor"/>
    <path d="M41.042 58.875H85.9587L63.5003 20.0834L41.042 58.875ZM65.542 52.75H61.4587V48.6667H65.542V52.75ZM65.542 44.5834H61.4587V36.4167H65.542V44.5834Z" fill="currentColor"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="128.03" height="116.141" fill="currentColor" transform="translate(0 0.858643)"/>
    </clipPath>
    </defs>
    </svg>
    `;
  }
  get can_book() {
    return this._state.setting("disable_book_now") !== true;
  }
  get can_scan() {
    return this._state.setting("show_qr_code") !== false;
  }
  get can_end() {
    return this._state.setting("enable_end_meeting_button") === true;
  }
  get show_timeline() {
    return this._state.setting("show_timeline") === true;
  }
  get timeline_position() {
    return this._state.setting("timeline_position") || "floating-left";
  }
  get show_floating_left() {
    return this.show_timeline && this.timeline_position === "floating-left";
  }
  get show_floating_bottom() {
    return this.show_timeline && this.timeline_position === "floating-bottom";
  }
};
_PanelViewStatusComponent.\u0275fac = function PanelViewStatusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanelViewStatusComponent)();
};
_PanelViewStatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelViewStatusComponent, selectors: [["panel-view-status"]], decls: 24, vars: 35, consts: [["status-layout", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "bg-[#424242]"], [1, "relative", "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "text-white"], [3, "innerHTML"], [1, "mt-4", "text-4xl", "font-medium", "uppercase"], [1, "mt-4", "text-2xl", "font-light"], [1, "absolute", "inset-x-0", "top-0", "flex", "items-center", "justify-center", "space-x-4", "bg-[#0008]", "p-4", "text-2xl", 3, "padding-left"], [1, "bg-base-100", "text-base-content", "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "text-4xl", "font-medium", "uppercase"], [1, "text-2xl", "font-light"], [1, "absolute", "inset-x-0", "top-0", "flex", "items-center", "justify-center", "space-x-4", "bg-[#0008]", "p-4", "text-2xl"], [1, "uppercase"]], template: function PanelViewStatusComponent_Template(rf, ctx) {
  var _a2;
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 0)(3, "div", 1);
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275pipe(5, "safe");
    \u0275\u0275elementStart(6, "h3", 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 4);
    \u0275\u0275conditionalCreate(10, PanelViewStatusComponent_Conditional_10_Template, 2, 1)(11, PanelViewStatusComponent_Conditional_11_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, PanelViewStatusComponent_Conditional_12_Template, 6, 5, "div", 5);
    \u0275\u0275conditionalCreate(13, PanelViewStatusComponent_Conditional_13_Template, 6, 5, "div", 5);
    \u0275\u0275conditionalCreate(14, PanelViewStatusComponent_Conditional_14_Template, 6, 5, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6);
    \u0275\u0275element(16, "div", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275elementStart(18, "h3", 7);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 8);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275storeLet(ctx.state());
    \u0275\u0275advance();
    const es_r5 = \u0275\u0275storeLet(ctx.event_state());
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-bottom", ctx.show_floating_bottom ? "7rem" : null);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-error", s_r4 === "busy")("bg-success", s_r4 === "free")("bg-warning", s_r4 === "pending")("text-error-content", s_r4 === "busy")("text-success-content", s_r4 === "free")("text-warning-content", s_r4 === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 25, s_r4 === "busy" ? ctx.in_use_svg : s_r4 === "pending" ? ctx.pending_svg : ctx.free_svg), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 27, "APP.BOOKING_PANEL.NOW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((_a2 = es_r5 == null ? void 0 : es_r5.current) == null ? void 0 : _a2.length) ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(s_r4 === "pending" && ctx.can_book ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r4 === "free" && ctx.can_book ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r4 === "busy" && ctx.can_end ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 29, !(es_r5 == null ? void 0 : es_r5.next) ? ctx.free_svg : ctx.in_use_svg), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 31, "COMMON.NEXT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (es_r5 == null ? void 0 : es_r5.next) || \u0275\u0275pipeBind1(23, 33, "APP.BOOKING_PANEL.NO_UPCOMING"), " ");
  }
}, dependencies: [IconComponent, TranslatePipe, SafePipe], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #424242;\n}\n/*# sourceMappingURL=panel-view-status.component.css.map */"], changeDetection: 1 });
var PanelViewStatusComponent = _PanelViewStatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelViewStatusComponent, [{
    type: Component,
    args: [{ selector: "panel-view-status", template: `
        @let s = state();
        @let es = event_state();
        <div
            status-layout
            class="flex h-full w-full items-center justify-center bg-[#424242]"
            [style.padding-bottom]="show_floating_bottom ? '7rem' : null"
        >
            <div
                class="relative flex h-full flex-1 flex-col items-center justify-center text-white"
                [class.bg-error]="s === 'busy'"
                [class.bg-success]="s === 'free'"
                [class.bg-warning]="s === 'pending'"
                [class.text-error-content]="s === 'busy'"
                [class.text-success-content]="s === 'free'"
                [class.text-warning-content]="s === 'pending'"
            >
                <div
                    [innerHTML]="
                        (s === 'busy'
                            ? in_use_svg
                            : s === 'pending'
                              ? pending_svg
                              : free_svg
                        ) | safe
                    "
                ></div>
                <h3 class="mt-4 text-4xl font-medium uppercase">
                    {{ 'APP.BOOKING_PANEL.NOW' | translate }}
                </h3>
                <p class="mt-4 text-2xl font-light">
                    @if (es?.current?.length) {
                        @if (es?.current[0]) {
                            @if (es?.current[1] > 0) {
                                {{
                                    'APP.BOOKING_PANEL.FREE_IN_HOURS_AND_MINUTES'
                                        | translate
                                            : {
                                                  hour: es?.current[1],
                                                  minute: es?.current[2],
                                              }
                                }}
                            }
                            @if (es?.current[1] <= 0 && es?.current[2] > 1) {
                                {{
                                    'APP.BOOKING_PANEL.FREE_IN_MINUTES'
                                        | translate
                                            : {
                                                  minute: es?.current[2],
                                              }
                                }}
                            }
                            @if (es?.current[1] <= 0 && es?.current[2] <= 1) {
                                {{
                                    'APP.BOOKING_PANEL.FREE_IN_LESS_THAN_MINUTE'
                                        | translate
                                }}
                            }
                        } @else {
                            @if (s === 'busy') {
                                {{
                                    'APP.BOOKING_PANEL.EARLY_CHECKIN'
                                        | translate
                                }}
                            }
                            @if (s !== 'busy') {
                                @if (es?.current[1] > 0) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: es?.current[1],
                                                      minute: es?.current[2],
                                                  }
                                    }}
                                }
                                @if (
                                    es?.current[1] <= 0 && es?.current[2] > 1
                                ) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_MINUTES'
                                            | translate
                                                : {
                                                      minute: es?.current[2],
                                                  }
                                    }}
                                }
                                @if (
                                    es?.current[1] <= 0 && es?.current[2] <= 1
                                ) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                }
                            }
                        }
                    } @else {
                        {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                    }
                </p>
                @if (s === 'pending' && can_book) {
                    <div
                        class="absolute inset-x-0 top-0 flex items-center justify-center space-x-4 bg-[#0008] p-4 text-2xl"
                        [style.padding-left]="
                            show_floating_left ? '9rem' : null
                        "
                    >
                        <p class="uppercase">
                            {{
                                (can_scan
                                    ? 'APP.BOOKING_PANEL.CHECKIN_INPUT'
                                    : 'APP.BOOKING_PANEL.CHECKIN_INPUT_NOSCAN'
                                ) | translate
                            }}
                        </p>
                        <icon>arrow_forward</icon>
                    </div>
                }
                @if (s === 'free' && can_book) {
                    <div
                        class="absolute inset-x-0 top-0 flex items-center justify-center space-x-4 bg-[#0008] p-4 text-2xl"
                        [style.padding-left]="
                            show_floating_left ? '9rem' : null
                        "
                    >
                        <p class="uppercase">
                            {{
                                (can_scan
                                    ? 'APP.BOOKING_PANEL.BOOKING_INPUT'
                                    : 'APP.BOOKING_PANEL.BOOKING_INPUT_NOSCAN'
                                ) | translate
                            }}
                        </p>
                        <icon>arrow_forward</icon>
                    </div>
                }
                @if (s === 'busy' && can_end) {
                    <div
                        class="absolute inset-x-0 top-0 flex items-center justify-center space-x-4 bg-[#0008] p-4 text-2xl"
                        [style.padding-left]="
                            show_floating_left ? '9rem' : null
                        "
                    >
                        <p class="uppercase">
                            {{ 'APP.BOOKING_PANEL.END_INPUT' | translate }}
                        </p>
                        <icon>arrow_forward</icon>
                    </div>
                }
            </div>
            <div
                class="bg-base-100 text-base-content flex h-full flex-1 flex-col items-center justify-center space-y-4"
            >
                <div
                    [innerHTML]="(!es?.next ? free_svg : in_use_svg) | safe"
                ></div>
                <h3 class="text-4xl font-medium uppercase">
                    {{ 'COMMON.NEXT' | translate }}
                </h3>
                <p class="text-2xl font-light">
                    {{
                        es?.next ||
                            ('APP.BOOKING_PANEL.NO_UPCOMING' | translate)
                    }}
                </p>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [TranslatePipe, SafePipe, IconComponent], styles: ["/* angular:styles/component:css;3a64e7b2af1bd8e45ac5326d46a7b79302199f336dc78b84757d8bc3dfd387fe;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/new-panel/panel-view-status.component.ts */\n:host > div > div {\n  background-color: #424242;\n}\n/*# sourceMappingURL=panel-view-status.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelViewStatusComponent, { className: "PanelViewStatusComponent", filePath: "apps/booking-panel/src/app/new-panel/panel-view-status.component.ts", lineNumber: 192 });
})();

// apps/booking-panel/src/app/new-panel/panel-view-timeline.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PanelViewTimelineComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const block_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r1.hour);
  }
}
function PanelViewTimelineComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, PanelViewTimelineComponent_For_4_Conditional_1_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const block_r1 = ctx.$implicit;
    \u0275\u0275classProp("hour", block_r1.on_hour);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r1.on_hour ? 1 : -1);
  }
}
function PanelViewTimelineComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 10);
  }
  if (rf & 2) {
    const booking_r2 = ctx.$implicit;
    \u0275\u0275styleProp("--%NS%start", booking_r2.start + "%")("--%NS%size", booking_r2.size + "%");
    \u0275\u0275attribute("title", booking_r2.title);
  }
}
var _PanelViewTimelineComponent = class _PanelViewTimelineComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(PanelStateService);
    this._clock = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_clock" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._timeline_start = signal(
      timelineStart(this._clock()),
      ...ngDevMode ? [{ debugName: "_timeline_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timeline = computed(
      () => timelineData(this._state.bookings(), this._clock(), this._timeline_start()),
      ...ngDevMode ? [{ debugName: "timeline" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.horizontal = input(
      false,
      ...ngDevMode ? [{ debugName: "horizontal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval("clock", () => {
      const now = Date.now();
      if (now >= this._timeline_start() + 12 * 60 * 60 * 1e3) {
        this._timeline_start.set(timelineStart(now));
      }
      this._clock.set(now);
    }, 1e3);
  }
};
_PanelViewTimelineComponent.\u0275fac = function PanelViewTimelineComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanelViewTimelineComponent)();
};
_PanelViewTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelViewTimelineComponent, selectors: [["panel-view-timeline"]], inputs: { horizontal: [1, "horizontal"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["timeline", "", "role", "img", 1, "h-full", "w-full", "overflow-hidden", "text-white"], ["timeline-track", ""], ["block", "", 3, "hour"], ["bookings", ""], ["booking", "", 3, "--%NS%start", "--%NS%size"], ["now", ""], ["now-dot", ""], ["now-line", ""], ["block", ""], ["hour-label", ""], ["booking", ""]], template: function PanelViewTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "aside", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275domElementStart(2, "div", 1);
    \u0275\u0275repeaterCreate(3, PanelViewTimelineComponent_For_4_Template, 2, 3, "div", 2, _forTrack0);
    \u0275\u0275domElementStart(5, "div", 3);
    \u0275\u0275repeaterCreate(6, PanelViewTimelineComponent_For_7_Template, 1, 5, "div", 4, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 5);
    \u0275\u0275domElement(9, "span", 6)(10, "span", 7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("horizontal", ctx.horizontal());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "APP.BOOKING_PANEL.SCHEDULE"));
    const data_r3 = ctx.timeline();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(data_r3.blocks);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(data_r3.bookings);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--%NS%now", data_r3.now + "%");
  }
}, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n[timeline][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.75rem 0.625rem;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 1.5rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(28, 26, 29, 0.97),\n      rgba(16, 15, 17, 0.97));\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.docked[_nghost-%COMP%]   [timeline][_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0;\n}\n[timeline-left][_nghost-%COMP%]   [timeline][_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(255, 255, 255, 0.14);\n}\n[timeline-right][_nghost-%COMP%]   [timeline][_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(255, 255, 255, 0.14);\n}\n[timeline-bottom][_nghost-%COMP%]   [timeline][_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.14);\n}\n[timeline-track][_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  padding-left: 2.25rem;\n}\n[block][_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 0;\n  flex: 1;\n  border-top: 1px solid rgba(255, 255, 255, 0.055);\n}\n[block].hour[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n[bookings][_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 2.25rem;\n}\n[booking][_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--%NS%start);\n  right: 0;\n  left: 0;\n  height: var(--%NS%size);\n  background: var(--%NS%error);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);\n}\n[hour-label][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: calc(100% + 0.5rem);\n  width: 1.75rem;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.68);\n  font-size: 0.625rem;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  text-align: right;\n  letter-spacing: 0.025em;\n}\n[now][_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: var(--%NS%now);\n  right: -0.125rem;\n  left: 2rem;\n  display: flex;\n  align-items: center;\n  transform: translateY(-50%);\n  transition: top 1s linear;\n  pointer-events: none;\n}\n[now-dot][_ngcontent-%COMP%] {\n  width: 0.625rem;\n  height: 0.625rem;\n  flex: none;\n  border: 2px solid rgba(16, 15, 17, 0.95);\n  border-radius: 50%;\n  background: #f5f3f4;\n  box-shadow: 0 0 0 2px rgba(245, 243, 244, 0.24);\n}\n[now-line][_ngcontent-%COMP%] {\n  height: 2px;\n  flex: 1;\n  background: #f5f3f4;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);\n}\n[timeline].horizontal[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [timeline-track][_ngcontent-%COMP%] {\n  flex-direction: row;\n  padding-top: 1.5rem;\n  padding-left: 0;\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [block][_ngcontent-%COMP%] {\n  border-top: 0;\n  border-left: 1px solid rgba(255, 255, 255, 0.055);\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [block].hour[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [bookings][_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [booking][_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  left: var(--%NS%start);\n  width: var(--%NS%size);\n  height: auto;\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [hour-label][_ngcontent-%COMP%] {\n  top: auto;\n  bottom: calc(100% + 0.5rem);\n  left: 0;\n  right: auto;\n  width: max-content;\n  transform: translateX(-50%);\n  text-align: center;\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [now][_ngcontent-%COMP%] {\n  top: 1.25rem;\n  right: auto;\n  bottom: -0.125rem;\n  left: var(--%NS%now);\n  flex-direction: column;\n  transform: translateX(-50%);\n  transition: left 1s linear;\n}\n[timeline].horizontal[_ngcontent-%COMP%]   [now-line][_ngcontent-%COMP%] {\n  width: 2px;\n  height: auto;\n}\n/*# sourceMappingURL=panel-view-timeline.component.css.map */"], changeDetection: 1 });
var PanelViewTimelineComponent = _PanelViewTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelViewTimelineComponent, [{
    type: Component,
    args: [{ selector: "panel-view-timeline", template: `
        <aside
            timeline
            class="h-full w-full overflow-hidden text-white"
            [class.horizontal]="horizontal()"
            role="img"
            [attr.aria-label]="'APP.BOOKING_PANEL.SCHEDULE' | translate"
        >
            @let data = timeline();
            <div timeline-track>
                @for (block of data.blocks; track block.id) {
                    <div block [class.hour]="block.on_hour">
                        @if (block.on_hour) {
                            <span hour-label>{{ block.hour }}</span>
                        }
                    </div>
                }
                <div bookings>
                    @for (booking of data.bookings; track booking.id) {
                        <div
                            booking
                            [style.--start]="booking.start + '%'"
                            [style.--size]="booking.size + '%'"
                            [attr.title]="booking.title"
                        ></div>
                    }
                </div>
                <div now [style.--now]="data.now + '%'">
                    <span now-dot></span>
                    <span now-line></span>
                </div>
            </div>
        </aside>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;c3ce023eabe26564e6d0ada8e863efd0e7e97c8a841ba83a4c01e81769a6f462;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/new-panel/panel-view-timeline.component.ts */\n:host {\n  display: block;\n}\n[timeline] {\n  width: 100%;\n  height: 100%;\n  padding: 0.75rem 0.625rem;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 1.5rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(28, 26, 29, 0.97),\n      rgba(16, 15, 17, 0.97));\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n:host(.docked) [timeline] {\n  border: 0;\n  border-radius: 0;\n}\n:host([timeline-left]) [timeline] {\n  border-right: 1px solid rgba(255, 255, 255, 0.14);\n}\n:host([timeline-right]) [timeline] {\n  border-left: 1px solid rgba(255, 255, 255, 0.14);\n}\n:host([timeline-bottom]) [timeline] {\n  border-top: 1px solid rgba(255, 255, 255, 0.14);\n}\n[timeline-track] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  padding-left: 2.25rem;\n}\n[block] {\n  position: relative;\n  min-height: 0;\n  flex: 1;\n  border-top: 1px solid rgba(255, 255, 255, 0.055);\n}\n[block].hour {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n[bookings] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 2.25rem;\n}\n[booking] {\n  position: absolute;\n  top: var(--start);\n  right: 0;\n  left: 0;\n  height: var(--size);\n  background: var(--error);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);\n}\n[hour-label] {\n  position: absolute;\n  top: 0;\n  right: calc(100% + 0.5rem);\n  width: 1.75rem;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.68);\n  font-size: 0.625rem;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  text-align: right;\n  letter-spacing: 0.025em;\n}\n[now] {\n  position: absolute;\n  z-index: 2;\n  top: var(--now);\n  right: -0.125rem;\n  left: 2rem;\n  display: flex;\n  align-items: center;\n  transform: translateY(-50%);\n  transition: top 1s linear;\n  pointer-events: none;\n}\n[now-dot] {\n  width: 0.625rem;\n  height: 0.625rem;\n  flex: none;\n  border: 2px solid rgba(16, 15, 17, 0.95);\n  border-radius: 50%;\n  background: #f5f3f4;\n  box-shadow: 0 0 0 2px rgba(245, 243, 244, 0.24);\n}\n[now-line] {\n  height: 2px;\n  flex: 1;\n  background: #f5f3f4;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);\n}\n[timeline].horizontal {\n  padding: 0.625rem 0.75rem;\n}\n[timeline].horizontal [timeline-track] {\n  flex-direction: row;\n  padding-top: 1.5rem;\n  padding-left: 0;\n}\n[timeline].horizontal [block] {\n  border-top: 0;\n  border-left: 1px solid rgba(255, 255, 255, 0.055);\n}\n[timeline].horizontal [block].hour {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n[timeline].horizontal [bookings] {\n  top: 1.5rem;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n[timeline].horizontal [booking] {\n  top: 0;\n  bottom: 0;\n  left: var(--start);\n  width: var(--size);\n  height: auto;\n}\n[timeline].horizontal [hour-label] {\n  top: auto;\n  bottom: calc(100% + 0.5rem);\n  left: 0;\n  right: auto;\n  width: max-content;\n  transform: translateX(-50%);\n  text-align: center;\n}\n[timeline].horizontal [now] {\n  top: 1.25rem;\n  right: auto;\n  bottom: -0.125rem;\n  left: var(--now);\n  flex-direction: column;\n  transform: translateX(-50%);\n  transition: left 1s linear;\n}\n[timeline].horizontal [now-line] {\n  width: 2px;\n  height: auto;\n}\n/*# sourceMappingURL=panel-view-timeline.component.css.map */\n"] }]
  }], () => [], { horizontal: [{ type: Input, args: [{ isSignal: true, alias: "horizontal", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelViewTimelineComponent, { className: "PanelViewTimelineComponent", filePath: "apps/booking-panel/src/app/new-panel/panel-view-timeline.component.ts", lineNumber: 236 });
})();

// apps/booking-panel/src/app/new-panel/panel-view.component.ts
function PanelViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "panel-view-timeline", 1);
  }
}
function PanelViewComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "panel-view-timeline", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("horizontal", true);
  }
}
function PanelViewComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "panel-view-timeline", 8);
  }
}
function PanelViewComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "panel-view-timeline", 9);
  }
}
function PanelViewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "panel-view-timeline", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("horizontal", true);
  }
}
function PanelViewComponent_Conditional_20_Template(rf, ctx) {
  var _a2, _b;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.offline_color)("background-image", \u0275\u0275pipeBind2(1, 7, "url(" + ctx_r0.offline_image + ")", "resource"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name || ((_a2 = ctx_r0.system()) == null ? void 0 : _a2.display_name) || ((_b = ctx_r0.system()) == null ? void 0 : _b.name) || "<Unknown Space>", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "APP.BOOKING_PANEL.ROOM_CAPACITY"), " ");
  }
}
var _PanelViewComponent = class _PanelViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(PanelStateService);
    this._route = inject(ActivatedRoute);
    this._logger = inject(RemoteLoggingService);
    this.system = this._state.space;
    this.version = VERSION;
    this.book = () => this._state.newBooking(Date.now(), this._state.setting("disable_book_now_host") !== false);
    this.checkin = () => this._state.checkin();
    this.endMeeting = () => this._state.confirmEnd();
  }
  get name() {
    return this._state.setting("room_name");
  }
  get show_offline() {
    return this._state.setting("disable_book_now") && this._state.setting("offline_image");
  }
  get offline_image() {
    return this._state.setting("offline_image") || this._state.setting("room_image");
  }
  get offline_color() {
    return this._state.setting("offline_color") || "#FFFFFF";
  }
  get capacity() {
    return this._state.setting("room_capacity");
  }
  get show_timeline() {
    return this._state.setting("show_timeline") === true;
  }
  get timeline_position() {
    return this._state.setting("timeline_position") || "floating-left";
  }
  get can_book() {
    return this._state.setting("disable_book_now") !== true;
  }
  action() {
    this.timeout("action", () => {
      const status = this._state.setting("status");
      if (status === "busy") {
        if (this._state.setting("enable_end_meeting_button") === true) {
          this.endMeeting();
        }
      } else if (this.can_book) {
        status === "pending" ? this.checkin() : this.book();
      }
    });
  }
  ngOnInit() {
    this._state.system = "";
    const params = this._route.snapshot.paramMap;
    if (params.has("system_id")) {
      this._state.system = params.get("system_id");
      this._logger.setMetadata(params.get("system_id"));
    }
    document.body.parentElement.classList.add("showing-panel");
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    document.body.parentElement.classList.remove("showing-panel");
  }
};
_PanelViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PanelViewComponent_BaseFactory;
  return function PanelViewComponent_Factory(__ngFactoryType__) {
    return (\u0275PanelViewComponent_BaseFactory || (\u0275PanelViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PanelViewComponent)))(__ngFactoryType__ || _PanelViewComponent);
  };
})();
_PanelViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelViewComponent, selectors: [["panel-view"]], features: [\u0275\u0275ProvidersFeature([PanelStateService]), \u0275\u0275InheritDefinitionFeature], decls: 21, vars: 20, consts: [[1, "relative", "flex", "h-full", "w-full", "items-stretch", "overflow-hidden", 3, "click"], ["timeline-left", "", 1, "docked", "h-full", "w-28", "shrink-0"], [1, "flex", "h-full", "min-w-0", "flex-1", "flex-col"], [1, "relative", "flex", "min-h-0", "flex-1", "flex-col"], [1, "min-h-0", "w-full", "flex-1"], [1, "absolute", "right-0", "bottom-0", "p-2"], [1, "w-full", "text-xs", "opacity-40"], ["timeline-bottom", "", 1, "docked", "h-24", "w-full", "shrink-0", 3, "horizontal"], ["timeline-right", "", 1, "docked", "h-full", "w-28", "shrink-0"], ["timeline-floating-left", "", 1, "absolute", "inset-y-24", "left-5", "z-30", "w-28"], ["timeline-floating-bottom", "", 1, "absolute", "inset-x-24", "bottom-5", "z-30", "h-20", 3, "horizontal"], [1, "absolute", "inset-0", "z-40", "bg-contain", "bg-center", "bg-no-repeat", 3, "background-color", "background-image"], [1, "absolute", "inset-0", "z-40", "bg-contain", "bg-center", "bg-no-repeat"], [1, "bg-warning", "absolute", "top-4", "left-4", "flex", "w-1/2", "items-center", "justify-center", "rounded-sm", "p-4", "text-5xl", "font-medium", "text-white", "shadow-sm"], [1, "absolute", "right-4", "bottom-4", "flex", "max-w-[25%]", "flex-col", "items-center", "text-center"], [1, "text-8xl"], [1, "text-3xl"]], template: function PanelViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function PanelViewComponent_Template_button_click_0_listener() {
      return ctx.action();
    });
    \u0275\u0275conditionalCreate(1, PanelViewComponent_Conditional_1_Template, 1, 0, "panel-view-timeline", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "panel-view-details", 4)(5, "panel-view-status", 4);
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
    \u0275\u0275elementContainerStart(8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(16, PanelViewComponent_Conditional_16_Template, 1, 1, "panel-view-timeline", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, PanelViewComponent_Conditional_17_Template, 1, 0, "panel-view-timeline", 8);
    \u0275\u0275conditionalCreate(18, PanelViewComponent_Conditional_18_Template, 1, 0, "panel-view-timeline", 9);
    \u0275\u0275conditionalCreate(19, PanelViewComponent_Conditional_19_Template, 1, 1, "panel-view-timeline", 10);
    \u0275\u0275conditionalCreate(20, PanelViewComponent_Conditional_20_Template, 10, 12, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const position_r2 = ctx.timeline_position;
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_timeline && position_r2 === "left" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("bottom", ctx.show_timeline && position_r2 === "floating-bottom" ? 6.5 : 0, "rem");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 12, "COMMON.CONTROLS_VERSION"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.version.hash, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(14, 14, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(15, 17, ctx.version.time, "shortTime"), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.show_timeline && position_r2 === "bottom" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_timeline && position_r2 === "right" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_timeline && position_r2 === "floating-left" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_timeline && position_r2 === "floating-bottom" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_offline ? 20 : -1);
  }
}, dependencies: [
  PanelViewStatusComponent,
  PanelViewDetailsComponent,
  PanelViewTimelineComponent,
  CommonModule,
  DatePipe,
  TranslatePipe,
  SafePipe
], encapsulation: 2, changeDetection: 1 });
var PanelViewComponent = _PanelViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelViewComponent, [{
    type: Component,
    args: [{ selector: "panel-view", template: `
        <button
            class="relative flex h-full w-full items-stretch overflow-hidden"
            (click)="action()"
        >
            @let position = timeline_position;
            @if (show_timeline && position === 'left') {
                <panel-view-timeline
                    timeline-left
                    class="docked h-full w-28 shrink-0"
                ></panel-view-timeline>
            }
            <div class="flex h-full min-w-0 flex-1 flex-col">
                <div class="relative flex min-h-0 flex-1 flex-col">
                    <panel-view-details
                        class="min-h-0 w-full flex-1"
                    ></panel-view-details>
                    <panel-view-status
                        class="min-h-0 w-full flex-1"
                    ></panel-view-status>
                    <div
                        class="absolute right-0 bottom-0 p-2"
                        [style.bottom.rem]="
                            show_timeline && position === 'floating-bottom'
                                ? 6.5
                                : 0
                        "
                    >
                        <div class="w-full text-xs opacity-40">
                            <ng-container
                                >{{ 'COMMON.CONTROLS_VERSION' | translate }}:
                            </ng-container>
                            {{ version.hash }}
                        </div>
                        <div class="w-full text-xs opacity-40">
                            {{ version.time | date: 'longDate' }}
                            ({{ version.time | date: 'shortTime' }})
                        </div>
                    </div>
                </div>
                @if (show_timeline && position === 'bottom') {
                    <panel-view-timeline
                        timeline-bottom
                        class="docked h-24 w-full shrink-0"
                        [horizontal]="true"
                    ></panel-view-timeline>
                }
            </div>
            @if (show_timeline && position === 'right') {
                <panel-view-timeline
                    timeline-right
                    class="docked h-full w-28 shrink-0"
                ></panel-view-timeline>
            }
            @if (show_timeline && position === 'floating-left') {
                <panel-view-timeline
                    timeline-floating-left
                    class="absolute inset-y-24 left-5 z-30 w-28"
                ></panel-view-timeline>
            }
            @if (show_timeline && position === 'floating-bottom') {
                <panel-view-timeline
                    timeline-floating-bottom
                    class="absolute inset-x-24 bottom-5 z-30 h-20"
                    [horizontal]="true"
                ></panel-view-timeline>
            }
            @if (show_offline) {
                <div
                    class="absolute inset-0 z-40 bg-contain bg-center bg-no-repeat"
                    [style.background-color]="offline_color"
                    [style.background-image]="
                        'url(' + offline_image + ')' | safe: 'resource'
                    "
                >
                    <div
                        class="bg-warning absolute top-4 left-4 flex w-1/2 items-center justify-center rounded-sm p-4 text-5xl font-medium text-white shadow-sm"
                    >
                        {{
                            name ||
                                system()?.display_name ||
                                system()?.name ||
                                '&lt;Unknown Space&gt;'
                        }}
                    </div>
                    <div
                        class="absolute right-4 bottom-4 flex max-w-[25%] flex-col items-center text-center"
                    >
                        <div class="text-8xl">{{ capacity }}</div>
                        <div class="text-3xl">
                            {{ 'APP.BOOKING_PANEL.ROOM_CAPACITY' | translate }}
                        </div>
                    </div>
                </div>
            }
        </button>
    `, providers: [PanelStateService], changeDetection: ChangeDetectionStrategy.Eager, imports: [
      PanelViewStatusComponent,
      PanelViewDetailsComponent,
      PanelViewTimelineComponent,
      CommonModule,
      TranslatePipe,
      SafePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelViewComponent, { className: "PanelViewComponent", filePath: "apps/booking-panel/src/app/new-panel/panel-view.component.ts", lineNumber: 125 });
})();
export {
  PanelViewComponent
};
//# debugId=9f2c590b-fbe9-5c5b-9584-6cc4bfe6ee6b
//# sourceMappingURL=panel-view.component-NDYKF5WF.js.map
