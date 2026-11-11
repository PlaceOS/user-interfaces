import {
  CustomTooltipComponent,
  CustomTooltipData
} from "./chunk-2BQWMXYL.js";
import "./chunk-SLHPNGWP.js";
import {
  TranslatePipe
} from "./chunk-4C74AXN2.js";
import {
  IconComponent
} from "./chunk-5YOUSSU7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService
} from "./chunk-4X4ZISSE.js";
import {
  AsyncHandler,
  HotkeysService,
  RemoteLoggingService,
  SettingsService
} from "./chunk-WNLQ5E42.js";
import "./chunk-GAMVBC5P.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-IAQERFY4.js";
import "./chunk-KZRD5JN7.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JVDB3H4W.js";
import "./chunk-CPSLMZ5T.js";
import "./chunk-CJAQVJ62.js";
import {
  Component,
  DatePipe,
  Input,
  Output,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UL33YUHR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/json-display.component.ts
var JsonDisplayComponent = class _JsonDisplayComponent {
  constructor() {
    this.json = input(
      void 0,
      ...ngDevMode ? [{ debugName: "json" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._json = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "_json" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_json = computed(
      () => {
        const value = this._json();
        try {
          return JSON.stringify(value, (_, item) => item instanceof Error ? `${item}` : item, 4);
        } catch {
          return `${value}`;
        }
      },
      ...ngDevMode ? [{ debugName: "formatted_json" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const _data = inject(CustomTooltipData, { optional: true });
    if (_data?.data) {
      this._json.set(_data.data);
    }
    effect(() => {
      const value = this.json();
      if (value !== void 0) {
        this._json.set(value);
      }
    });
  }
  static {
    this.\u0275fac = function JsonDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JsonDisplayComponent, selectors: [["json-display"]], inputs: { json: [1, "json"] }, decls: 3, vars: 1, consts: [[1, "border-base-300", "bg-base-100", "max-h-[80vh]", "max-w-[80vw]", "overflow-auto", "rounded-sm", "border", "p-2", "shadow-sm"], [1, "bg-base-200", "w-full", "rounded-sm", "p-2", "font-mono", "text-sm", "break-all"]], template: function JsonDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "pre", 1);
        \u0275\u0275text(2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.formatted_json());
      }
    }, styles: ["\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=json-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonDisplayComponent, [{
    type: Component,
    args: [{ selector: "json-display", template: `
        <div
            class="border-base-300 bg-base-100 max-h-[80vh] max-w-[80vw] overflow-auto rounded-sm border p-2 shadow-sm"
        >
            <pre
                class="bg-base-200 w-full rounded-sm p-2 font-mono text-sm break-all"
                >{{ formatted_json() }}</pre
            >
        </div>
    `, styles: ["/* angular:styles/component:css;c5f6bcfc7f55c51d68f0109640dbc7571c236171d990e4c2404613af764ae801;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/json-display.component.ts */\npre {\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=json-display.component.css.map */\n"] }]
  }], () => [], { json: [{ type: Input, args: [{ isSignal: true, alias: "json", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JsonDisplayComponent, { className: "JsonDisplayComponent", filePath: "libs/components/src/lib/json-display.component.ts", lineNumber: 35 });
})();

// libs/components/src/lib/debug-console.component.ts
function DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", obj_r3, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r3);
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " [");
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2, "Object");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "] ");
  }
  if (rf & 2) {
    const obj_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r1.json_tooltip)("data", obj_r3)("hover", true)("backdrop", false);
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const obj_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", obj_r3, " ");
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Case_1_Template, 2, 2, "a", 19)(2, DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Case_2_Template, 4, 4)(3, DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Case_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const obj_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("data-type", ctx_r1.type(obj_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.type(obj_r3)) === "link" ? 1 : tmp_16_0 === "object" ? 2 : 3);
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, DebugConsoleComponent_Conditional_0_Conditional_9_div_1_For_7_Template, 4, 2, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, log_r4.timestamp, "HH:mm:ss"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("p-1 capitalize " + ctx_r1.colors[log_r4.subtype] + " w-16 rounded-sm text-center font-mono");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r4.subtype, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(log_r4.data);
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 6);
    \u0275\u0275template(1, DebugConsoleComponent_Conditional_0_Conditional_9_div_1_Template, 8, 7, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cdkVirtualForOf", ctx_r1.filtered_logs())("cdkVirtualForTrackBy", ctx_r1.trackByFn);
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" No ", ctx_r1.filter() ? "matching" : "", " logs ");
  }
}
function DebugConsoleComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.filtered_logs()?.length || "0", " of ");
  }
}
function DebugConsoleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DebugConsoleComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, DebugConsoleComponent_Conditional_0_Conditional_9_Template, 3, 2, "cdk-virtual-scroll-viewport", 6)(10, DebugConsoleComponent_Conditional_0_Conditional_10_Template, 3, 1, "div", 7);
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275element(12, "div", 9)(13, "div", 10);
    \u0275\u0275elementStart(14, "input", 11, 0);
    \u0275\u0275listener("ngModelChange", function DebugConsoleComponent_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275conditionalCreate(17, DebugConsoleComponent_Conditional_0_Conditional_17_Template, 2, 1, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "COMMON.CONSOLE"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 8, "COMMON.CLOSE"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.filtered_logs()?.length ? 9 : 10);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.filter());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.filter()?.length ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.logs()?.length, " ");
  }
}
function DebugConsoleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("mousedown", function DebugConsoleComponent_Conditional_1_Template_button_mousedown_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStart());
    })("touchstart", function DebugConsoleComponent_Conditional_1_Template_button_touchstart_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStart());
    })("mouseup", function DebugConsoleComponent_Conditional_1_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEnd());
    })("touchend", function DebugConsoleComponent_Conditional_1_Template_button_touchend_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEnd());
    });
    \u0275\u0275elementEnd();
  }
}
var COLOR_MAP = {
  console: "bg-success-light text-black",
  network: "bg-success text-success-content",
  dom: "bg-warning-light text-black",
  log: `bg-info-light text-black`,
  info: `bg-info text-info-content`,
  warn: `bg-warning text-warning-content`,
  debug: `bg-base-300 text-base-content`,
  error: `bg-error text-error-content`
};
var URL_STARTS = [
  "tel:",
  "mailto:",
  "http:",
  "https:",
  "ftp:",
  "ws:",
  "wss:"
];
var SEARCH_TEXT = /* @__PURE__ */ new WeakMap();
function logSearchText(event) {
  let text = SEARCH_TEXT.get(event);
  if (text === void 0) {
    let data;
    try {
      data = JSON.stringify(event.data, (_, value) => value instanceof Error ? `${value}` : value) ?? "";
    } catch {
      data = `${event.data}`;
    }
    text = `${event.type} ${event.subtype} ${data}`.toLowerCase();
    SEARCH_TEXT.set(event, text);
  }
  return text;
}
var DebugConsoleComponent = class _DebugConsoleComponent extends AsyncHandler {
  get can_activate() {
    return this._can_activate();
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._logs = inject(RemoteLoggingService);
    this._hotkey = inject(HotkeysService);
    this._settings = inject(SettingsService);
    this.show = model(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hotkeysEnabled = input(
      true,
      ...ngDevMode ? [{ debugName: "hotkeysEnabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colors = COLOR_MAP;
    this.json_tooltip = JsonDisplayComponent;
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logs = signal(
      [],
      ...ngDevMode ? [{ debugName: "logs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_logs = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "filtered_logs" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => ({
        filter: this.filter().toLowerCase(),
        logs: this.logs()
      }),
      computation: ({ filter, logs }, previous) => {
        if (!filter)
          return logs;
        const search = (list) => list.filter((_) => logSearchText(_).includes(filter));
        if (previous?.source.filter !== filter)
          return search(logs);
        const old_logs = previous.source.logs;
        const end = logs.lastIndexOf(old_logs[old_logs.length - 1]);
        const dropped = old_logs.length - 1 - end;
        if (end < 0 || logs[0] !== old_logs[dropped])
          return search(logs);
        const matches = previous.value;
        let start = 0;
        for (let i = 0; i < dropped && start < matches.length; i++) {
          if (matches[start] === old_logs[i])
            start++;
        }
        return [...matches.slice(start), ...search(logs.slice(end + 1))];
      }
    }));
    this.onStart = () => this.timeout("show", () => this.show.set(true), 5e3);
    this.onEnd = () => this.clearTimeout("show");
    this._can_activate = this._settings.signal("debug_console", false);
    this._log_limits = this._settings.signal("log_limits", 2e4);
    effect(() => {
      if (!this._org.initialised())
        return;
      this._org.active_building();
      const binding = this._org.binding("remote_logger");
      const system_id = binding instanceof Object ? binding.id : binding;
      this._logs.setSystem(system_id);
    });
    effect(() => {
      const log_list = this._logs.history();
      const limit = this._log_limits();
      this.logs.set(log_list.length > limit ? log_list.slice(-limit) : log_list);
    });
  }
  ngOnInit() {
    if (!this.hotkeysEnabled())
      return;
    this.subscription("toggle", this._hotkey.listen(["Control", "Backquote"], () => this.show.set(!this.show())));
  }
  type(item) {
    if (typeof item === "string" && URL_STARTS.find((start) => item.startsWith(start))) {
      return "link";
    } else if (item instanceof Object) {
      return "object";
    }
    return "string";
  }
  /** Track logs by ID. Many logs can share the same timestamp. */
  trackByFn(_, item) {
    return item?.id;
  }
  static {
    this.\u0275fac = function DebugConsoleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DebugConsoleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugConsoleComponent, selectors: [["debug-console"]], inputs: { show: [1, "show"], hotkeysEnabled: [1, "hotkeysEnabled"] }, outputs: { show: "showChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [["search_input", ""], [1, "border-base-300", "bg-base-200", "text-base-content", "absolute", "bottom-2", "left-2", "z-998", "flex", "h-96", "max-h-[65vh]", "w-160", "max-w-[80vw]", "flex-col", "overflow-hidden", "rounded-sm", "border", "shadow-sm"], ["activation", "", 1, "absolute", "right-0", "bottom-0", "h-12", "w-12"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-between", "border-b"], [1, "p-2"], ["icon", "", "matRipple", "", 3, "click"], ["itemSize", "32", 1, "h-120", "max-h-full", "w-full", "flex-1"], [1, "flex", "h-120", "w-full", "flex-1", "flex-col", "items-center", "justify-center"], [1, "absolute", "right-1", "bottom-1", "flex", "w-[20rem]", "items-center", "overflow-hidden", "rounded-lg", "p-1"], [1, "bg-base-content", "absolute", "inset-0", "z-0", "opacity-60"], [1, "bg-base-content", "absolute", "inset-1", "z-0", "rounded-sm", "opacity-90"], ["name", "log-filter", "placeholder", "Filter logs...", 1, "text-base-100", "relative", "flex-1", "rounded-sm", "border-none", "px-2", "py-1", "font-mono", "text-sm", 3, "ngModelChange", "ngModel"], [1, "text-base-100", "relative", "px-2", "text-center", "font-mono", "text-xs"], [1, "font-mono"], ["class", "hover:bg-base-100 flex h-8 max-w-full items-center space-x-1 truncate p-2 font-mono text-xs", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "h-8", "w-full"], [1, "hover:bg-base-100", "flex", "h-8", "max-w-full", "items-center", "space-x-1", "truncate", "p-2", "font-mono", "text-xs"], [1, "bg-base-100/10", "rounded-sm", "p-1", "font-mono", "text-[0.625rem]", "uppercase"], [1, "pl-1", "font-mono"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-mono", 3, "href"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "hover:text-info", "font-mono", "underline", 3, "content", "data", "hover", "backdrop"], [1, "text-2xl", "opacity-30"], ["activation", "", 1, "absolute", "right-0", "bottom-0", "h-12", "w-12", 3, "mousedown", "touchstart", "mouseup", "touchend"]], template: function DebugConsoleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DebugConsoleComponent_Conditional_0_Template, 19, 10, "div", 1);
        \u0275\u0275conditionalCreate(1, DebugConsoleComponent_Conditional_1_Template, 1, 0, "button", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_activate ? 1 : -1);
      }
    }, dependencies: [
      ScrollingModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
      MatRippleModule,
      MatRipple,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      CustomTooltipComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugConsoleComponent, [{
    type: Component,
    args: [{ selector: `debug-console`, template: `
        @if (show()) {
            <div
                class="border-base-300 bg-base-200 text-base-content absolute bottom-2 left-2 z-998 flex h-96 max-h-[65vh] w-160 max-w-[80vw] flex-col overflow-hidden rounded-sm border shadow-sm"
            >
                <div
                    class="border-base-300 bg-base-100 flex items-center justify-between border-b"
                >
                    <div class="p-2">{{ 'COMMON.CONSOLE' | translate }}</div>
                    <button
                        [attr.aria-label]="'COMMON.CLOSE' | translate"
                        icon
                        matRipple
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                @if (filtered_logs()?.length) {
                    <cdk-virtual-scroll-viewport
                        itemSize="32"
                        class="h-120 max-h-full w-full flex-1"
                    >
                        <div
                            class="hover:bg-base-100 flex h-8 max-w-full items-center space-x-1 truncate p-2 font-mono text-xs"
                            *cdkVirtualFor="
                                let log of filtered_logs();
                                trackBy: trackByFn
                            "
                        >
                            <div
                                class="bg-base-100/10 rounded-sm p-1 font-mono text-[0.625rem] uppercase"
                            >
                                {{ log.timestamp | date: 'HH:mm:ss' }}
                            </div>
                            <!-- <div
                                [class]="
                                    'p-1 uppercase ' +
                                    colors[log.type] +
                                    ' rounded-sm font-mono'
                                "
                            >
                                {{ log.type }}
                            </div> -->
                            <div
                                [class]="
                                    'p-1 capitalize ' +
                                    colors[log.subtype] +
                                    ' w-16 rounded-sm text-center font-mono'
                                "
                            >
                                {{ log.subtype }}
                            </div>
                            @for (obj of log.data; track obj) {
                                <div
                                    class="pl-1 font-mono"
                                    [attr.data-type]="type(obj)"
                                >
                                    @switch (type(obj)) {
                                        @case ('link') {
                                            <a
                                                class="font-mono"
                                                [href]="obj"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >{{ obj }}</a
                                            >
                                        }
                                        @case ('object') {
                                            [<span
                                                class="hover:text-info font-mono underline"
                                                customTooltip
                                                xPosition="center"
                                                yPosition="bottom"
                                                [content]="json_tooltip"
                                                [data]="obj"
                                                [hover]="true"
                                                [backdrop]="false"
                                                >Object</span
                                            >]
                                        }
                                        @default {
                                            {{ obj }}
                                        }
                                    }
                                </div>
                            }
                        </div>
                        <div class="h-8 w-full"></div>
                    </cdk-virtual-scroll-viewport>
                } @else {
                    <div
                        class="flex h-120 w-full flex-1 flex-col items-center justify-center"
                    >
                        <div class="text-2xl opacity-30">
                            No {{ filter() ? 'matching' : '' }} logs
                        </div>
                    </div>
                }
                <div
                    class="absolute right-1 bottom-1 flex w-[20rem] items-center overflow-hidden rounded-lg p-1"
                >
                    <div
                        class="bg-base-content absolute inset-0 z-0 opacity-60"
                    ></div>
                    <div
                        class="bg-base-content absolute inset-1 z-0 rounded-sm opacity-90"
                    ></div>
                    <input
                        #search_input
                        name="log-filter"
                        [ngModel]="filter()"
                        (ngModelChange)="filter.set($event)"
                        placeholder="Filter logs..."
                        class="text-base-100 relative flex-1 rounded-sm border-none px-2 py-1 font-mono text-sm"
                    />
                    <div
                        class="text-base-100 relative px-2 text-center font-mono text-xs"
                    >
                        @if (filter()?.length) {
                            <span class="font-mono">
                                {{ filtered_logs()?.length || '0' }} of
                            </span>
                        }
                        {{ logs()?.length }}
                    </div>
                </div>
            </div>
        }
        @if (can_activate) {
            <button
                activation
                class="absolute right-0 bottom-0 h-12 w-12"
                (mousedown)="onStart()"
                (touchstart)="onStart()"
                (mouseup)="onEnd()"
                (touchend)="onEnd()"
            ></button>
        }
    `, imports: [
      ScrollingModule,
      MatRippleModule,
      FormsModule,
      DatePipe,
      TranslatePipe,
      IconComponent,
      CustomTooltipComponent
    ] }]
  }], () => [], { show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }], hotkeysEnabled: [{ type: Input, args: [{ isSignal: true, alias: "hotkeysEnabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugConsoleComponent, { className: "DebugConsoleComponent", filePath: "libs/components/src/lib/debug-console.component.ts", lineNumber: 227 });
})();
export {
  DebugConsoleComponent
};
//# debugId=acbc3090-5f89-51b2-b9f0-b3ba93ddb8d8
//# sourceMappingURL=debug-console.component-LZNQ2ZZT.js.map
