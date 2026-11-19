import {
  ApplicationSidebarComponent
} from "./chunk-DJB5PUDD.js";
import "./chunk-F3LAT4JM.js";
import "./chunk-N3KIXYER.js";
import "./chunk-263R6GC6.js";
import {
  openConfirmModal
} from "./chunk-UTYB4I6P.js";
import "./chunk-N6QAD5J7.js";
import "./chunk-M2SDOSOB.js";
import {
  toSignal
} from "./chunk-OPZVMW6L.js";
import {
  AuthenticatedImageDirective
} from "./chunk-V5PXIM7V.js";
import "./chunk-PIMMG32B.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-YGMWQAOJ.js";
import "./chunk-MQEEHHA6.js";
import "./chunk-I3LAEIE5.js";
import "./chunk-6PIUAX5N.js";
import "./chunk-XOFGL72S.js";
import {
  MatDialog
} from "./chunk-XXKPMVFX.js";
import "./chunk-DWCIQIE5.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-REZ5MXIE.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-XJVX67LU.js";
import "./chunk-BQE43OY3.js";
import "./chunk-JEAVGCC4.js";
import "./chunk-42S2QJDR.js";
import {
  MatOption
} from "./chunk-PWIGADFP.js";
import "./chunk-GMB7PC6H.js";
import "./chunk-RZFRLPMO.js";
import "./chunk-E2SSFRYL.js";
import {
  TranslatePipe
} from "./chunk-BPBXAPJF.js";
import {
  IconComponent
} from "./chunk-OCRUIWUS.js";
import "./chunk-XCUQAAEL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  REMOTE_DEBUG_DEVICES,
  REMOTE_LOG_LEVELS,
  isRemoteDebugCommand,
  isRemoteDebugDeviceOnline,
  isRemoteLogRequest,
  readRemoteDebugModule,
  remoteDebugDeviceBinding,
  remoteDebugLogsBinding,
  remoteDebugMediaUrl,
  remoteDebugOrgId,
  remoteDebugResultsBinding,
  ɵNgNoValidate
} from "./chunk-RTMS7JDQ.js";
import {
  AsyncHandler,
  downloadFile,
  notifyError,
  notifySuccess,
  user_group_names
} from "./chunk-VN2ZU7CZ.js";
import "./chunk-IW3L46LQ.js";
import "./chunk-7FFQK53L.js";
import {
  MatRippleModule
} from "./chunk-CWCNI2O4.js";
import {
  MatRipple
} from "./chunk-DPVBDHKH.js";
import "./chunk-THGATZR4.js";
import "./chunk-C474S4JC.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-EWNKJBAV.js";
import {
  Component,
  DatePipe,
  DecimalPipe,
  Injectable,
  Injector,
  Input,
  JsonPipe,
  computed,
  effect,
  inject,
  input,
  map,
  setClassMetadata,
  signal,
  untracked,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J4V3B3VF.js";
import "./chunk-RQBZITXC.js";

// libs/components/src/lib/remote-debug-view.service.ts
var RemoteDebugViewService = class _RemoteDebugViewService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._module = signal(
      null,
      ...ngDevMode ? [{ debugName: "_module" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._state = signal(
      "loading",
      ...ngDevMode ? [{ debugName: "_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._devices = signal(
      {},
      ...ngDevMode ? [{ debugName: "_devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.module = this._module.asReadonly();
    this.state = this._state.asReadonly();
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.devices = computed(
      () => Object.values(this._devices()).sort((a, b) => b.last_seen - a.last_seen),
      ...ngDevMode ? [{ debugName: "devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval("now", () => this.now.set(Date.now()), 60 * 1e3);
    effect(() => {
      if (!this._org.initialised())
        return;
      untracked(() => this.load());
    });
  }
  /** Find the driver again, for example after a failed read */
  async load() {
    this._state.set("loading");
    const mod = await readRemoteDebugModule(remoteDebugOrgId(this._org));
    this.unsub("devices");
    this._module.set(mod ?? null);
    this._state.set(mod ? "ready" : mod === null ? "missing" : "failed");
    if (!mod)
      return;
    this.subscription("devices", mod.variable(REMOTE_DEBUG_DEVICES).bindThenSubscribe((value) => this._devices.set(value && typeof value === "object" ? value : {})));
  }
  /**
   * Call a method of the driver for the people who debug, such as
   * `request_logs` or `send_command`. Resolves the result of the driver.
   * Shows an error and resolves `undefined` when the call fails.
   */
  async call(method, args) {
    const mod = this._module();
    if (!mod)
      return void 0;
    try {
      return await mod.execute(method, args);
    } catch (error) {
      notifyError(`Remote debugging failed: ${error?.message || error}`);
      return void 0;
    }
  }
  static {
    this.\u0275fac = function RemoteDebugViewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugViewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteDebugViewService, factory: _RemoteDebugViewService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugViewService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// libs/components/src/lib/remote-debug-panel.component.ts
var _forTrack0 = ($index, $item) => $item.seq;
var _forTrack1 = ($index, $item) => $item.id;
function RemoteDebugPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-success", ctx_r0.online())("text-success-content", ctx_r0.online())("bg-base-300", !ctx_r0.online());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.online() ? "Online" : "Offline", " ");
  }
}
function RemoteDebugPanelComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Last seen ", \u0275\u0275pipeBind2(2, 1, ctx, "MMM d, h:mm:ss a"), " ");
  }
}
function RemoteDebugPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, RemoteDebugPanelComponent_Conditional_5_Conditional_7_Template, 3, 4, "span", 4);
    \u0275\u0275elementStart(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const info_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(info_r2.app);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", info_r2.version, " (", info_r2.build, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Loaded ", \u0275\u0275pipeBind2(6, 6, info_r2.started_at, "MMM d, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r0.last_seen()) ? 7 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", info_r2.url, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, " The driver has no details of this device yet. Request logs or send a command to start. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stopLogs());
    });
    \u0275\u0275text(1, " Stop live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startLogs());
    });
    \u0275\u0275text(1, " Start live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showNewest());
    });
    \u0275\u0275text(1, " Newest ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" Live at the ", ctx.level, " level. ");
  }
}
function RemoteDebugPanelComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Older than entry ", ctx_r0.older_than(), ". ");
  }
}
function RemoteDebugPanelComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, entry_r7.timestamp, "HH:mm:ss.SSS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.level_classes[entry_r7.level]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r7.level, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r7.message, " ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1, " No log entries ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_62_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const command_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", command_r8.type, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, " Waiting for the device: ");
    \u0275\u0275repeaterCreate(2, RemoteDebugPanelComponent_Conditional_62_For_3_Template, 2, 1, "span", 46, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.pending());
  }
}
function RemoteDebugPanelComponent_For_68_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.result.error);
  }
}
function RemoteDebugPanelComponent_For_68_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 52);
  }
  if (rf & 2) {
    const file_r10 = ctx;
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate6(" ", file_r10.width, " x ", file_r10.height, ", ", file_r10.frames, " ", file_r10.frames === 1 ? "frame" : "frames", ", ", \u0275\u0275pipeBind2(2, 8, file_r10.bytes / 1024, "1.0-0"), " KB, ", file_r10.mime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ctx_r0.mediaUrl(file_r10))("alt", item_r9.type + " of " + ctx_r0.device_id());
  }
}
function RemoteDebugPanelComponent_For_68_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r9.result.data));
  }
}
function RemoteDebugPanelComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 36)(1, "div", 47)(2, "icon", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, RemoteDebugPanelComponent_For_68_Conditional_9_Template, 2, 1, "pre", 50)(10, RemoteDebugPanelComponent_For_68_Conditional_10_Template, 4, 11)(11, RemoteDebugPanelComponent_For_68_Conditional_11_Template, 3, 3, "pre", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", item_r9.result.ok)("text-error", !item_r9.result.ok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.result.ok ? "check_circle" : "error", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, item_r9.received_at, "MMM d, h:mm:ss a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!item_r9.result.ok ? 9 : (tmp_15_0 = ctx_r0.media(item_r9)) ? 10 : 11, tmp_15_0);
  }
}
function RemoteDebugPanelComponent_ForEmpty_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 37);
    \u0275\u0275text(1, " No results yet ");
    \u0275\u0275elementEnd();
  }
}
var MAX_SHOWN_ENTRIES = 500;
var MAX_SHOWN_RESULTS = 20;
var LOG_HISTORY = 1e3;
var LEVEL_CLASSES = {
  debug: "bg-base-300 text-base-content",
  info: "bg-info text-info-content",
  warn: "bg-warning text-warning-content",
  error: "bg-error text-error-content"
};
var RemoteDebugPanelComponent = class _RemoteDebugPanelComponent extends AsyncHandler {
  constructor() {
    super();
    this._view = inject(RemoteDebugViewService);
    this._dialog = inject(MatDialog);
    this._state = signal(
      {},
      ...ngDevMode ? [{ debugName: "_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._logs = signal(
      null,
      ...ngDevMode ? [{ debugName: "_logs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._results = signal(
      [],
      ...ngDevMode ? [{ debugName: "_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device_id = input.required(
      ...ngDevMode ? [{ debugName: "device_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = REMOTE_LOG_LEVELS;
    this.level_classes = LEVEL_CLASSES;
    this.level = signal(
      "info",
      ...ngDevMode ? [{ debugName: "level" }] : (
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
    this.settings_keys = "";
    this.navigate_path = "";
    this.request = computed(
      () => {
        const logs = this._state().logs;
        return isRemoteLogRequest(logs) ? logs : null;
      },
      ...ngDevMode ? [{ debugName: "request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pending = computed(
      () => (this._state().commands ?? []).filter(isRemoteDebugCommand),
      ...ngDevMode ? [{ debugName: "pending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.entries = computed(
      () => this._logs()?.entries ?? [],
      ...ngDevMode ? [{ debugName: "entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.older_than = signal(
      null,
      ...ngDevMode ? [{ debugName: "older_than" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._requests = Promise.resolve();
    this._older_wanted = null;
    this._request_id = "";
    this.shown_entries = computed(
      () => {
        const filter = this.filter().trim().toLowerCase();
        const older_than = this.older_than() ?? Infinity;
        const list = [];
        const entries = this.entries();
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i];
          if (entry.seq >= older_than)
            continue;
          if (filter && !entry.message.toLowerCase().includes(filter)) {
            continue;
          }
          list.push(entry);
          if (list.length >= MAX_SHOWN_ENTRIES)
            break;
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "shown_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown_results = computed(
      () => this._results().slice(-MAX_SHOWN_RESULTS).reverse(),
      ...ngDevMode ? [{ debugName: "shown_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device = computed(
      () => this._view.devices().find((_) => _.id === this.device_id()) ?? this._logs()?.device ?? null,
      ...ngDevMode ? [{ debugName: "device" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_seen = computed(
      () => this._view.devices().find((_) => _.id === this.device_id())?.last_seen ?? 0,
      ...ngDevMode ? [{ debugName: "last_seen" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.online = computed(
      () => isRemoteDebugDeviceOnline({ last_seen: this.last_seen() }, this._view.now()),
      ...ngDevMode ? [{ debugName: "online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_load_older = computed(
      () => {
        const oldest = this.entries()[0];
        return !!oldest && (oldest.seq > 1 || this._canPageLocally());
      },
      ...ngDevMode ? [{ debugName: "can_load_older" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const mod = this._view.module();
      const id = this.device_id();
      untracked(() => this._bind(id, mod !== null));
    });
  }
  /** Start a log request at the selected level, with the buffered entries */
  async startLogs() {
    this.older_than.set(null);
    this._older_wanted = null;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("request_logs", [
      device_id,
      this.level(),
      { history: LOG_HISTORY }
    ]));
  }
  async stopLogs() {
    const device_id = this.device_id();
    await this._queue(() => this._view.call("stop_logs", [device_id]));
  }
  /** Select a level. An active request changes its level */
  /** Select a level. An active request at another level changes its level */
  async setLevel(level) {
    this.level.set(level);
    if (!this.request())
      return;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("set_level", [device_id, level]));
  }
  /** New request for the entries before the oldest entry that the driver has */
  /**
   * Show older entries. When the driver has more entries than the panel
   * shows, show the page before the oldest shown entry. Otherwise ask the
   * device for the entries before the oldest entry of the driver.
   */
  async loadOlder() {
    const oldest = this.entries()[0];
    if (!oldest)
      return;
    const oldest_shown = this.shown_entries().at(-1);
    if (oldest_shown && this._canPageLocally()) {
      this.older_than.set(oldest_shown.seq);
      return;
    }
    if (oldest.seq <= 1)
      return;
    this._older_wanted = oldest.seq;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("request_logs", [
      device_id,
      this.level(),
      { history: LOG_HISTORY, before: oldest.seq }
    ]));
  }
  /**
   * Whether the panel has older matching entries than the shown page. Only
   * a full page can have them. Otherwise the page shows all entries before
   * the cursor that match the filter
   */
  _canPageLocally() {
    const shown = this.shown_entries();
    const oldest_shown = shown.at(-1);
    return !!oldest_shown && shown.length >= MAX_SHOWN_ENTRIES && this._hasMatchBefore(oldest_shown.seq);
  }
  /** Show the newest entries, also when older entries are on the way */
  showNewest() {
    this.older_than.set(null);
    this._older_wanted = null;
  }
  /** Run a log request call after the calls before it */
  _queue(call) {
    const next = this._requests.then(call);
    this._requests = next.catch(() => void 0);
    return next;
  }
  /** Whether an entry before `seq` matches the filter */
  _hasMatchBefore(seq) {
    const filter = this.filter().trim().toLowerCase();
    return this.entries().some((_) => _.seq < seq && (!filter || _.message.toLowerCase().includes(filter)));
  }
  /** Save the log entries as a text file */
  downloadLogs() {
    const text = this.entries().map((_) => `${new Date(_.timestamp).toISOString()} ${_.level.toUpperCase()} ${_.message}`).join("\n");
    downloadFile(`${this.device_id()}-logs.txt`, text);
  }
  async send(type, options = {}, device_id = this.device_id()) {
    const id = await this._view.call("send_command", [
      device_id,
      type,
      options
    ]);
    if (id === void 0)
      return;
    if (id)
      notifySuccess(`Sent ${type} to ${device_id}`);
    else {
      notifyError(`The driver did not take the ${type} command. The device can have 20 waiting commands maximum.`);
    }
  }
  /** Reload the app on the device, after the user confirms */
  async reload(type) {
    const device_id = this.device_id();
    const result = await openConfirmModal({
      title: type === "reload" ? "Reload app" : "Clear cache",
      content: type === "reload" ? `Reload the app on ${device_id}?` : `Remove the app caches on ${device_id} and reload it? The device must be online to load the app again.`,
      icon: { type: "icon", content: "restart_alt" },
      destructive: true
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.close();
    await this.send(type, {}, device_id);
  }
  async sendSettings() {
    const keys = this.settings_keys.split(",").map((_) => _.trim()).filter((_) => _);
    if (keys.length)
      await this.send("settings", { keys });
  }
  async sendNavigate() {
    const path = this.navigate_path.trim();
    if (path.startsWith("/"))
      await this.send("navigate", { path });
  }
  /** File details of a snapshot or animation result. `null` for other results */
  media(item) {
    if (item.type !== "snapshot" && item.type !== "animation")
      return null;
    const data = item.result.data;
    return typeof data?.upload_id === "string" ? data : null;
  }
  mediaUrl(file) {
    return remoteDebugMediaUrl(file.upload_id);
  }
  /** Listen to the bindings of the device */
  _bind(device_id, connected) {
    this.unsub("state");
    this.unsub("logs");
    this.unsub("results");
    this._state.set({});
    this._logs.set(null);
    this._results.set([]);
    this.older_than.set(null);
    this._older_wanted = null;
    this._request_id = "";
    const mod = this._view.module();
    if (!connected || !mod || !device_id)
      return;
    this.subscription("state", mod.variable(remoteDebugDeviceBinding(device_id)).bindThenSubscribe((value) => {
      const state = value && typeof value === "object" ? value : {};
      const logs = isRemoteLogRequest(state.logs) ? state.logs : null;
      if (logs && logs.id !== this._request_id) {
        this.level.set(logs.level);
      }
      this._request_id = logs?.id ?? "";
      this._state.set(state);
    }));
    this.subscription("logs", mod.variable(remoteDebugLogsBinding(device_id)).bindThenSubscribe((value) => {
      const started_at = value?.device?.started_at;
      if (started_at !== this._logs()?.device?.started_at) {
        this.older_than.set(null);
        this._older_wanted = null;
      }
      this._logs.set(value ?? null);
      const wanted = this._older_wanted;
      if (wanted !== null && this._hasMatchBefore(wanted)) {
        this.older_than.set(wanted);
        this._older_wanted = null;
      }
    }));
    this.subscription("results", mod.variable(remoteDebugResultsBinding(device_id)).bindThenSubscribe((value) => this._results.set(Array.isArray(value) ? value : [])));
  }
  static {
    this.\u0275fac = function RemoteDebugPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugPanelComponent, selectors: [["remote-debug-panel"]], inputs: { device_id: [1, "device_id"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 70, vars: 20, consts: [[1, "flex", "flex-col", "gap-3"], [1, "bg-base-100", "border-base-300", "flex", "flex-wrap", "items-center", "gap-x-4", "gap-y-1", "rounded-lg", "border", "px-4", "py-3"], [1, "font-mono", "text-lg", "font-medium"], ["online-state", "", 1, "rounded-full", "px-2", "py-0.5", "text-xs", 3, "bg-success", "text-success-content", "bg-base-300"], [1, "text-sm", "opacity-70"], ["logs", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "pt-3"], [1, "flex-1", "font-medium"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-32"], ["aria-label", "Log level", 3, "ngModelChange", "ngModel"], [3, "value"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-48", "flex-1"], ["matInput", "", "placeholder", "Filter logs", "aria-label", "Filter logs", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", "newest", "", "type", "button", 1, "inverse"], ["icon", "", "matRipple", "", "type", "button", "aria-label", "Download logs", 3, "click", "disabled"], [1, "px-4", "pb-2", "text-xs", "opacity-60"], [1, "border-base-300", "max-h-[32rem]", "overflow-auto", "border-t", "font-mono", "text-xs"], [1, "border-base-200", "flex", "gap-2", "border-b", "px-4", "py-1"], [1, "px-4", "py-6", "text-center", "opacity-60"], ["commands", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "gap-3", "rounded-lg", "border", "p-4"], [1, "font-medium"], [1, "flex", "flex-wrap", "gap-2"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2", 3, "ngSubmit"], ["matInput", "", "name", "keys", "placeholder", "Settings keys, such as app.title, app.features", "aria-label", "Settings keys", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], ["matInput", "", "name", "path", "placeholder", "App route, such as /bootstrap", "aria-label", "App route", 3, "ngModelChange", "ngModel"], ["pending", "", 1, "text-sm", "opacity-70"], ["results", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "px-4", "pt-3", "pb-2", "font-medium"], [1, "flex", "flex-col"], [1, "border-base-200", "flex", "flex-col", "gap-2", "border-t", "px-4", "py-3"], [1, "px-4", "pb-6", "text-center", "opacity-60"], ["online-state", "", 1, "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "w-full", "truncate", "text-xs", "opacity-60"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse", 3, "click"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", "newest", "", "type", "button", 1, "inverse", 3, "click"], [1, "shrink-0", "opacity-60"], [1, "h-fit", "shrink-0", "rounded", "px-1", "uppercase"], [1, "min-w-0", "break-words", "whitespace-pre-wrap"], [1, "bg-base-200", "ml-1", "rounded", "px-2", "py-0.5"], [1, "flex", "items-center", "gap-2"], [1, "text-xl"], [1, "text-sm", "opacity-60"], [1, "text-error", "max-h-48", "overflow-auto", "text-xs", "whitespace-pre-wrap"], [1, "bg-base-200", "max-h-64", "overflow-auto", "rounded", "p-2", "text-xs"], ["auth", "", 1, "border-base-300", "max-h-[32rem]", "w-fit", "max-w-full", "rounded", "border", "object-contain", 3, "source", "alt"]], template: function RemoteDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, RemoteDebugPanelComponent_Conditional_4_Template, 2, 7, "span", 3);
        \u0275\u0275conditionalCreate(5, RemoteDebugPanelComponent_Conditional_5_Template, 10, 9)(6, RemoteDebugPanelComponent_Conditional_6_Template, 2, 0, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "section", 5)(8, "div", 6)(9, "h3", 7);
        \u0275\u0275text(10, "Logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-form-field", 8)(12, "mat-select", 9);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_mat_select_ngModelChange_12_listener($event) {
          return ctx.setLevel($event);
        });
        \u0275\u0275repeaterCreate(13, RemoteDebugPanelComponent_For_14_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, RemoteDebugPanelComponent_Conditional_15_Template, 2, 0, "button", 11)(16, RemoteDebugPanelComponent_Conditional_16_Template, 2, 0, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "mat-form-field", 14)(19, "input", 15);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.filter.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 16);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_20_listener() {
          return ctx.loadOlder();
        });
        \u0275\u0275text(21, " Load older ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, RemoteDebugPanelComponent_Conditional_22_Template, 2, 0, "button", 17);
        \u0275\u0275elementStart(23, "button", 18);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_23_listener() {
          return ctx.downloadLogs();
        });
        \u0275\u0275elementStart(24, "icon");
        \u0275\u0275text(25, "download");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "p", 19);
        \u0275\u0275conditionalCreate(27, RemoteDebugPanelComponent_Conditional_27_Template, 1, 1);
        \u0275\u0275text(28);
        \u0275\u0275conditionalCreate(29, RemoteDebugPanelComponent_Conditional_29_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "ol", 20);
        \u0275\u0275repeaterCreate(31, RemoteDebugPanelComponent_For_32_Template, 8, 8, "li", 21, _forTrack0, false, RemoteDebugPanelComponent_ForEmpty_33_Template, 2, 0, "li", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "section", 23)(35, "h3", 24);
        \u0275\u0275text(36, "Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 25)(38, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_38_listener() {
          return ctx.send("status");
        });
        \u0275\u0275text(39, " Status ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_40_listener() {
          return ctx.send("snapshot");
        });
        \u0275\u0275text(41, " Snapshot ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_42_listener() {
          return ctx.send("animation", { format: "webp" });
        });
        \u0275\u0275text(43, " Animation (WebP) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_44_listener() {
          return ctx.send("animation", { format: "gif" });
        });
        \u0275\u0275text(45, " Animation (GIF) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_46_listener() {
          return ctx.send("storage");
        });
        \u0275\u0275text(47, " Storage keys ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 27);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_48_listener() {
          return ctx.reload("reload");
        });
        \u0275\u0275text(49, " Reload app ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 27);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_50_listener() {
          return ctx.reload("clear_cache");
        });
        \u0275\u0275text(51, " Clear cache and reload ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "form", 28);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_52_listener() {
          return ctx.sendSettings();
        });
        \u0275\u0275elementStart(53, "mat-form-field", 14)(54, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings_keys, $event) || (ctx.settings_keys = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 30);
        \u0275\u0275text(56, " Get settings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "form", 28);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_57_listener() {
          return ctx.sendNavigate();
        });
        \u0275\u0275elementStart(58, "mat-form-field", 14)(59, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.navigate_path, $event) || (ctx.navigate_path = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 30);
        \u0275\u0275text(61, " Open route ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(62, RemoteDebugPanelComponent_Conditional_62_Template, 4, 0, "p", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "section", 33)(64, "h3", 34);
        \u0275\u0275text(65, "Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "ol", 35);
        \u0275\u0275repeaterCreate(67, RemoteDebugPanelComponent_For_68_Template, 12, 11, "li", 36, _forTrack1, false, RemoteDebugPanelComponent_ForEmpty_69_Template, 2, 0, "li", 37);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_12_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.device_id());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_seen() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.device()) ? 5 : 6, tmp_2_0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.level());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.levels);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.request() ? 15 : 16);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.filter());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.can_load_older());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.older_than() !== null ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.entries().length);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_12_0 = ctx.request()) ? 27 : -1, tmp_12_0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" Showing ", ctx.shown_entries().length, " of ", ctx.entries().length, " entries, newest first. ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.older_than() !== null ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shown_entries());
        \u0275\u0275advance(23);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings_keys);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.settings_keys.trim());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.navigate_path);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.navigate_path.startsWith("/"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.pending().length ? 62 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.shown_results());
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      AuthenticatedImageDirective,
      IconComponent,
      DatePipe,
      DecimalPipe,
      JsonPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "remote-debug-panel",
      template: `
        <div class="flex flex-col gap-3">
            <section
                class="bg-base-100 border-base-300 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border px-4 py-3"
            >
                <h2 class="font-mono text-lg font-medium">{{ device_id() }}</h2>
                @if (last_seen()) {
                    <span
                        class="rounded-full px-2 py-0.5 text-xs"
                        [class.bg-success]="online()"
                        [class.text-success-content]="online()"
                        [class.bg-base-300]="!online()"
                        online-state
                    >
                        {{ online() ? 'Online' : 'Offline' }}
                    </span>
                }
                @if (device(); as info) {
                    <span class="text-sm opacity-70">{{ info.app }}</span>
                    <span class="text-sm opacity-70">
                        {{ info.version }} ({{ info.build }})
                    </span>
                    <span class="text-sm opacity-70">
                        Loaded {{ info.started_at | date: 'MMM d, h:mm a' }}
                    </span>
                    @if (last_seen(); as seen) {
                        <span class="text-sm opacity-70">
                            Last seen {{ seen | date: 'MMM d, h:mm:ss a' }}
                        </span>
                    }
                    <span class="w-full truncate text-xs opacity-60">
                        {{ info.url }}
                    </span>
                } @else {
                    <span class="text-sm opacity-70">
                        The driver has no details of this device yet. Request
                        logs or send a command to start.
                    </span>
                }
            </section>

            <section
                logs
                class="bg-base-100 border-base-300 flex flex-col rounded-lg border"
            >
                <div class="flex flex-wrap items-center gap-2 px-4 pt-3">
                    <h3 class="flex-1 font-medium">Logs</h3>
                    <mat-form-field
                        appearance="outline"
                        class="w-32"
                        subscriptSizing="dynamic"
                    >
                        <mat-select
                            aria-label="Log level"
                            [ngModel]="level()"
                            (ngModelChange)="setLevel($event)"
                        >
                            @for (option of levels; track option) {
                                <mat-option [value]="option">
                                    {{ option }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    @if (request()) {
                        <button
                            btn
                            matRipple
                            stop-logs
                            type="button"
                            class="inverse"
                            (click)="stopLogs()"
                        >
                            Stop live logs
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            start-logs
                            type="button"
                            (click)="startLogs()"
                        >
                            Start live logs
                        </button>
                    }
                </div>
                <div class="flex flex-wrap items-center gap-2 px-4 py-2">
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            placeholder="Filter logs"
                            aria-label="Filter logs"
                            [ngModel]="filter()"
                            (ngModelChange)="filter.set($event)"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="!can_load_older()"
                        (click)="loadOlder()"
                    >
                        Load older
                    </button>
                    @if (older_than() !== null) {
                        <button
                            btn
                            matRipple
                            newest
                            type="button"
                            class="inverse"
                            (click)="showNewest()"
                        >
                            Newest
                        </button>
                    }
                    <button
                        icon
                        matRipple
                        type="button"
                        aria-label="Download logs"
                        [disabled]="!entries().length"
                        (click)="downloadLogs()"
                    >
                        <icon>download</icon>
                    </button>
                </div>
                <p class="px-4 pb-2 text-xs opacity-60">
                    @if (request(); as active) {
                        Live at the {{ active.level }} level.
                    }
                    Showing {{ shown_entries().length }} of
                    {{ entries().length }} entries, newest first.
                    @if (older_than() !== null) {
                        Older than entry {{ older_than() }}.
                    }
                </p>
                <ol
                    class="border-base-300 max-h-[32rem] overflow-auto border-t font-mono text-xs"
                >
                    @for (entry of shown_entries(); track entry.seq) {
                        <li
                            class="border-base-200 flex gap-2 border-b px-4 py-1"
                        >
                            <span class="shrink-0 opacity-60">
                                {{ entry.timestamp | date: 'HH:mm:ss.SSS' }}
                            </span>
                            <span
                                class="h-fit shrink-0 rounded px-1 uppercase"
                                [class]="level_classes[entry.level]"
                            >
                                {{ entry.level }}
                            </span>
                            <span
                                class="min-w-0 break-words whitespace-pre-wrap"
                            >
                                {{ entry.message }}
                            </span>
                        </li>
                    } @empty {
                        <li class="px-4 py-6 text-center opacity-60">
                            No log entries
                        </li>
                    }
                </ol>
            </section>

            <section
                commands
                class="bg-base-100 border-base-300 flex flex-col gap-3 rounded-lg border p-4"
            >
                <h3 class="font-medium">Commands</h3>
                <div class="flex flex-wrap gap-2">
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('status')"
                    >
                        Status
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('snapshot')"
                    >
                        Snapshot
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('animation', { format: 'webp' })"
                    >
                        Animation (WebP)
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('animation', { format: 'gif' })"
                    >
                        Animation (GIF)
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('storage')"
                    >
                        Storage keys
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="reload('reload')"
                    >
                        Reload app
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="reload('clear_cache')"
                    >
                        Clear cache and reload
                    </button>
                </div>
                <form
                    class="flex flex-wrap items-center gap-2"
                    (ngSubmit)="sendSettings()"
                >
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            name="keys"
                            placeholder="Settings keys, such as app.title, app.features"
                            aria-label="Settings keys"
                            [(ngModel)]="settings_keys"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="submit"
                        [disabled]="!settings_keys.trim()"
                    >
                        Get settings
                    </button>
                </form>
                <form
                    class="flex flex-wrap items-center gap-2"
                    (ngSubmit)="sendNavigate()"
                >
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            name="path"
                            placeholder="App route, such as /bootstrap"
                            aria-label="App route"
                            [(ngModel)]="navigate_path"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="submit"
                        [disabled]="!navigate_path.startsWith('/')"
                    >
                        Open route
                    </button>
                </form>
                @if (pending().length) {
                    <p class="text-sm opacity-70" pending>
                        Waiting for the device:
                        @for (command of pending(); track command.id) {
                            <span class="bg-base-200 ml-1 rounded px-2 py-0.5">
                                {{ command.type }}
                            </span>
                        }
                    </p>
                }
            </section>

            <section
                results
                class="bg-base-100 border-base-300 flex flex-col rounded-lg border"
            >
                <h3 class="px-4 pt-3 pb-2 font-medium">Results</h3>
                <ol class="flex flex-col">
                    @for (item of shown_results(); track item.id) {
                        <li
                            class="border-base-200 flex flex-col gap-2 border-t px-4 py-3"
                        >
                            <div class="flex items-center gap-2">
                                <icon
                                    class="text-xl"
                                    [class.text-success]="item.result.ok"
                                    [class.text-error]="!item.result.ok"
                                >
                                    {{
                                        item.result.ok
                                            ? 'check_circle'
                                            : 'error'
                                    }}
                                </icon>
                                <span class="font-medium">{{ item.type }}</span>
                                <span class="text-sm opacity-60">
                                    {{
                                        item.received_at
                                            | date: 'MMM d, h:mm:ss a'
                                    }}
                                </span>
                            </div>
                            @if (!item.result.ok) {
                                <pre
                                    class="text-error max-h-48 overflow-auto text-xs whitespace-pre-wrap"
                                    >{{ item.result.error }}</pre
                                >
                            } @else if (media(item); as file) {
                                <p class="text-sm opacity-70">
                                    {{ file.width }} x {{ file.height }},
                                    {{ file.frames }}
                                    {{
                                        file.frames === 1 ? 'frame' : 'frames'
                                    }},
                                    {{ file.bytes / 1024 | number: '1.0-0' }}
                                    KB,
                                    {{ file.mime }}
                                </p>
                                <img
                                    auth
                                    class="border-base-300 max-h-[32rem] w-fit max-w-full rounded border object-contain"
                                    [source]="mediaUrl(file)"
                                    [alt]="item.type + ' of ' + device_id()"
                                />
                            } @else {
                                <pre
                                    class="bg-base-200 max-h-64 overflow-auto rounded p-2 text-xs"
                                    >{{ item.result.data | json }}</pre
                                >
                            }
                        </li>
                    } @empty {
                        <li class="px-4 pb-6 text-center opacity-60">
                            No results yet
                        </li>
                    }
                </ol>
            </section>
        </div>
    `,
      imports: [
        DatePipe,
        DecimalPipe,
        JsonPipe,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        AuthenticatedImageDirective,
        IconComponent
      ]
    }]
  }], () => [], { device_id: [{ type: Input, args: [{ isSignal: true, alias: "device_id", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugPanelComponent, { className: "RemoteDebugPanelComponent", filePath: "libs/components/src/lib/remote-debug-panel.component.ts", lineNumber: 458 });
})();

// apps/concierge/src/app/remote-debug/remote-debug.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function RemoteDebugComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, " Only admin and support users can use remote debugging. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, " Remote debugging is off. Add a system with the RemoteDebug driver to the ");
    \u0275\u0275elementStart(2, "code");
    \u0275\u0275text(3, "remote_debug");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " binding of the organisation zone. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 9);
    \u0275\u0275text(2, " The zone bindings could not be read. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function RemoteDebugComponent_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(4, " Try again ");
    \u0275\u0275elementEnd()();
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" Showing ", ctx_r1.shown().length, " of ", ctx_r1.matching().length, ". ");
  }
}
function RemoteDebugComponent_Conditional_11_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 22);
    \u0275\u0275listener("click", function RemoteDebugComponent_Conditional_11_For_12_Template_button_click_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(item_r5.id));
    });
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275element(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", item_r5.id === ctx_r1.device());
    \u0275\u0275attribute("aria-current", item_r5.id === ctx_r1.device() ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", ctx_r1.isOnline(item_r5))("bg-base-300", !ctx_r1.isOnline(item_r5));
    \u0275\u0275attribute("aria-label", ctx_r1.isOnline(item_r5) ? "Online" : "Offline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r5.app, " \xB7 ", \u0275\u0275pipeBind2(7, 11, item_r5.last_seen, "MMM d, h:mm a"), " ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No device matches. Select Open to send a request to this ID. ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No device is known yet. Fixed devices register when they start. Enter a device ID to send it a request. A device shows its ID on its setup screen. ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275conditionalCreate(1, RemoteDebugComponent_Conditional_11_ForEmpty_13_Conditional_1_Template, 1, 0)(2, RemoteDebugComponent_Conditional_11_ForEmpty_13_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.query().trim() ? 1 : 2);
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "remote-debug-panel", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("device_id", ctx_r1.device());
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 26);
    \u0275\u0275text(2, "bug_report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select or enter a device to debug.");
    \u0275\u0275elementEnd()();
  }
}
function RemoteDebugComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "aside", 11)(2, "form", 12);
    \u0275\u0275listener("ngSubmit", function RemoteDebugComponent_Conditional_11_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.open(ctx_r1.query()));
    });
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "input", 14);
    \u0275\u0275listener("ngModelChange", function RemoteDebugComponent_Conditional_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.query.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275text(6, " Open ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, RemoteDebugComponent_Conditional_11_Conditional_9_Template, 1, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 17);
    \u0275\u0275repeaterCreate(11, RemoteDebugComponent_Conditional_11_For_12_Template, 8, 14, "li", null, _forTrack02, false, RemoteDebugComponent_Conditional_11_ForEmpty_13_Template, 3, 1, "li", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "section", 19);
    \u0275\u0275conditionalCreate(15, RemoteDebugComponent_Conditional_11_Conditional_15_Template, 1, 1, "remote-debug-panel", 20)(16, RemoteDebugComponent_Conditional_11_Conditional_16_Template, 5, 0, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.query());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.query().trim());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.devices().length, " devices, ", ctx_r1.online_count(), " online. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shown().length < ctx_r1.matching().length ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.shown());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.device() ? 15 : 16);
  }
}
var DEBUG_GROUPS = ["placeos_admin", "placeos_support"];
var MAX_SHOWN_DEVICES = 100;
var DEVICE_ID_FORMAT = /^DEV-[0-9A-F]{12}$/i;
function filterRemoteDebugDevices(devices, query) {
  const text = query.trim().toLowerCase();
  if (!text)
    return [...devices];
  return devices.filter((_) => [_.id, _.app, _.url].some((value) => value.toLowerCase().includes(text)));
}
var RemoteDebugComponent = class _RemoteDebugComponent {
  constructor() {
    this._injector = inject(Injector);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.allowed = computed(
      () => user_group_names().some((_) => DEBUG_GROUPS.includes(_)),
      ...ngDevMode ? [{ debugName: "allowed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._view = computed(
      () => this.allowed() ? this._injector.get(RemoteDebugViewService) : null,
      ...ngDevMode ? [{ debugName: "_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device = toSignal(this._route.queryParamMap.pipe(map((_) => _.get("device") ?? "")), { initialValue: "" });
    this.state = computed(
      () => this._view()?.state() ?? "loading",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.devices = computed(
      () => this._view()?.devices() ?? [],
      ...ngDevMode ? [{ debugName: "devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.query = signal(
      "",
      ...ngDevMode ? [{ debugName: "query" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.matching = computed(
      () => filterRemoteDebugDevices(this.devices(), this.query()),
      ...ngDevMode ? [{ debugName: "matching" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown = computed(
      () => this.matching().slice(0, MAX_SHOWN_DEVICES),
      ...ngDevMode ? [{ debugName: "shown" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.online_count = computed(
      () => this.devices().filter((_) => this.isOnline(_)).length,
      ...ngDevMode ? [{ debugName: "online_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  open(device_id) {
    const trimmed = device_id.trim();
    const id = DEVICE_ID_FORMAT.test(trimmed) ? trimmed.toUpperCase() : trimmed;
    if (!id)
      return;
    this.query.set("");
    void this._router.navigate([], {
      queryParams: { device: id },
      queryParamsHandling: "merge"
    });
  }
  isOnline(device) {
    return isRemoteDebugDeviceOnline(device, this._view()?.now() ?? Date.now());
  }
  retry() {
    void this._view()?.load();
  }
  static {
    this.\u0275fac = function RemoteDebugComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugComponent, selectors: [["app-remote-debug"]], decls: 12, vars: 4, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "min-w-0", "flex-1", "flex-col"], [1, "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], ["not-allowed", "", 1, "px-8", "py-4", "opacity-70"], ["role", "status", 1, "px-8", "py-4", "opacity-70"], ["missing", "", 1, "px-8", "py-4", "opacity-70"], [1, "flex", "items-center", "gap-4", "px-8", "py-4"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-4", "overflow-auto", "px-8", "pb-8", "lg:flex-row"], [1, "opacity-70"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], [1, "flex", "shrink-0", "flex-col", "gap-2", "lg:min-h-0", "lg:w-80"], [1, "flex", "items-center", "gap-2", 3, "ngSubmit"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "flex-1"], ["matInput", "", "name", "device", "placeholder", "Filter or enter a device ID", "aria-label", "Filter or enter a device ID", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], ["device-count", "", 1, "text-xs", "opacity-70"], ["aria-label", "Devices", 1, "bg-base-100", "border-base-300", "flex", "min-h-0", "flex-col", "overflow-y-auto", "rounded-lg", "border"], [1, "px-4", "py-6", "text-sm", "opacity-70"], [1, "min-w-0", "flex-1"], [3, "device_id"], [1, "flex", "flex-col", "items-center", "gap-2", "p-8", "opacity-70"], ["matRipple", "", "type", "button", 1, "hover:bg-base-200", "flex", "w-full", "flex-col", "items-start", "px-4", "py-2", "text-left", 3, "click"], [1, "flex", "items-center", "gap-2", "font-mono"], ["role", "img", 1, "size-2", "shrink-0", "rounded-full"], [1, "text-xs", "opacity-70"], [1, "text-5xl"]], template: function RemoteDebugComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, RemoteDebugComponent_Conditional_7_Template, 2, 0, "p", 4)(8, RemoteDebugComponent_Conditional_8_Template, 2, 0, "p", 5)(9, RemoteDebugComponent_Conditional_9_Template, 5, 0, "p", 6)(10, RemoteDebugComponent_Conditional_10_Template, 5, 0, "div", 7)(11, RemoteDebugComponent_Conditional_11_Template, 17, 7, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.MENU_MANAGE_REMOTE_DEBUG"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.allowed() ? 7 : ctx.state() === "loading" ? 8 : ctx.state() === "missing" ? 9 : ctx.state() === "failed" ? 10 : 11);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      ApplicationSidebarComponent,
      IconComponent,
      RemoteDebugPanelComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-200);\n}\n/*# sourceMappingURL=remote-debug.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugComponent, [{
    type: Component,
    args: [{ selector: "app-remote-debug", template: `
        <div class="flex h-px flex-1">
            <app-sidebar />
            <main class="flex h-full min-w-0 flex-1 flex-col">
                <header class="px-8 pt-4 pb-2">
                    <h2 class="text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.MENU_MANAGE_REMOTE_DEBUG' | translate
                        }}
                    </h2>
                </header>
                @if (!allowed()) {
                    <p class="px-8 py-4 opacity-70" not-allowed>
                        Only admin and support users can use remote debugging.
                    </p>
                } @else if (state() === 'loading') {
                    <p class="px-8 py-4 opacity-70" role="status">Loading\u2026</p>
                } @else if (state() === 'missing') {
                    <p class="px-8 py-4 opacity-70" missing>
                        Remote debugging is off. Add a system with the
                        RemoteDebug driver to the
                        <code>remote_debug</code> binding of the organisation
                        zone.
                    </p>
                } @else if (state() === 'failed') {
                    <div class="flex items-center gap-4 px-8 py-4">
                        <p class="opacity-70">
                            The zone bindings could not be read.
                        </p>
                        <button btn matRipple type="button" (click)="retry()">
                            Try again
                        </button>
                    </div>
                } @else {
                    <div
                        class="flex min-h-0 flex-1 flex-col gap-4 overflow-auto px-8 pb-8 lg:flex-row"
                    >
                        <aside
                            class="flex shrink-0 flex-col gap-2 lg:min-h-0 lg:w-80"
                        >
                            <form
                                class="flex items-center gap-2"
                                (ngSubmit)="open(query())"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="flex-1"
                                    subscriptSizing="dynamic"
                                >
                                    <input
                                        matInput
                                        name="device"
                                        placeholder="Filter or enter a device ID"
                                        aria-label="Filter or enter a device ID"
                                        [ngModel]="query()"
                                        (ngModelChange)="query.set($event)"
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    type="submit"
                                    [disabled]="!query().trim()"
                                >
                                    Open
                                </button>
                            </form>
                            <p class="text-xs opacity-70" device-count>
                                {{ devices().length }} devices,
                                {{ online_count() }} online.
                                @if (shown().length < matching().length) {
                                    Showing {{ shown().length }} of
                                    {{ matching().length }}.
                                }
                            </p>
                            <ul
                                class="bg-base-100 border-base-300 flex min-h-0 flex-col overflow-y-auto rounded-lg border"
                                aria-label="Devices"
                            >
                                @for (item of shown(); track item.id) {
                                    <li>
                                        <button
                                            matRipple
                                            type="button"
                                            class="hover:bg-base-200 flex w-full flex-col items-start px-4 py-2 text-left"
                                            [class.bg-base-200]="
                                                item.id === device()
                                            "
                                            [attr.aria-current]="
                                                item.id === device()
                                                    ? 'true'
                                                    : null
                                            "
                                            (click)="open(item.id)"
                                        >
                                            <span
                                                class="flex items-center gap-2 font-mono"
                                            >
                                                <span
                                                    class="size-2 shrink-0 rounded-full"
                                                    [class.bg-success]="
                                                        isOnline(item)
                                                    "
                                                    [class.bg-base-300]="
                                                        !isOnline(item)
                                                    "
                                                    [attr.aria-label]="
                                                        isOnline(item)
                                                            ? 'Online'
                                                            : 'Offline'
                                                    "
                                                    role="img"
                                                ></span>
                                                {{ item.id }}
                                            </span>
                                            <span class="text-xs opacity-70">
                                                {{ item.app }} \xB7
                                                {{
                                                    item.last_seen
                                                        | date: 'MMM d, h:mm a'
                                                }}
                                            </span>
                                        </button>
                                    </li>
                                } @empty {
                                    <li class="px-4 py-6 text-sm opacity-70">
                                        @if (query().trim()) {
                                            No device matches. Select Open to
                                            send a request to this ID.
                                        } @else {
                                            No device is known yet. Fixed
                                            devices register when they start.
                                            Enter a device ID to send it a
                                            request. A device shows its ID on
                                            its setup screen.
                                        }
                                    </li>
                                }
                            </ul>
                        </aside>
                        <section class="min-w-0 flex-1">
                            @if (device()) {
                                <remote-debug-panel [device_id]="device()" />
                            } @else {
                                <div
                                    class="flex flex-col items-center gap-2 p-8 opacity-70"
                                >
                                    <icon class="text-5xl">bug_report</icon>
                                    <p>Select or enter a device to debug.</p>
                                </div>
                            }
                        </section>
                    </div>
                }
            </main>
        </div>
    `, imports: [
      DatePipe,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      ApplicationSidebarComponent,
      IconComponent,
      RemoteDebugPanelComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;be4cbf25ba4a867a4384acf917793d04b0c27199f63ca83296689d2de4a30e44;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/remote-debug/remote-debug.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-200);\n}\n/*# sourceMappingURL=remote-debug.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugComponent, { className: "RemoteDebugComponent", filePath: "apps/concierge/src/app/remote-debug/remote-debug.component.ts", lineNumber: 235 });
})();
export {
  RemoteDebugComponent,
  filterRemoteDebugDevices
};
//# debugId=329960ca-fb7a-5878-8a5d-a20e9b8298c9
//# sourceMappingURL=remote-debug.component-WYROPF7I.js.map
