import {
  ApplicationSidebarComponent
} from "./chunk-72GKD4OW.js";
import "./chunk-BYVSTOJ3.js";
import "./chunk-NQ6K76LC.js";
import "./chunk-XCKZS2CG.js";
import {
  openConfirmModal
} from "./chunk-ZYWJ62KY.js";
import "./chunk-NA53OLHO.js";
import "./chunk-EPAFN3GU.js";
import {
  toSignal
} from "./chunk-OPZVMW6L.js";
import {
  AuthenticatedImageDirective
} from "./chunk-4NVYCMYC.js";
import "./chunk-SAWSSOWS.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-PSJAG6I3.js";
import "./chunk-MQEEHHA6.js";
import "./chunk-I3LAEIE5.js";
import "./chunk-5PBIIBKJ.js";
import "./chunk-QZQC2T35.js";
import {
  MatDialog
} from "./chunk-XXKPMVFX.js";
import "./chunk-DWCIQIE5.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-M26MLWNA.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-XJVX67LU.js";
import "./chunk-X5SI2WVN.js";
import "./chunk-RULQSHPE.js";
import "./chunk-42S2QJDR.js";
import {
  MatOption
} from "./chunk-PWIGADFP.js";
import "./chunk-GMB7PC6H.js";
import "./chunk-KKJZXYXB.js";
import "./chunk-KJX44CLA.js";
import {
  TranslatePipe
} from "./chunk-YF2OCF74.js";
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
  isRemoteLogRequest,
  readRemoteDebugModule,
  remoteDebugDeviceBinding,
  remoteDebugLogsBinding,
  remoteDebugMediaUrl,
  remoteDebugOrgId,
  remoteDebugResultsBinding,
  ɵNgNoValidate
} from "./chunk-MRPEKR6L.js";
import {
  AsyncHandler,
  notifyError,
  notifySuccess,
  user_group_names
} from "./chunk-KLTXEVOO.js";
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
    this.devices = computed(
      () => Object.values(this._devices()).sort((a, b) => b.last_seen - a.last_seen),
      ...ngDevMode ? [{ debugName: "devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
   * `request_logs` or `send_command`. Shows an error and resolves `null`
   * when the call fails.
   */
  async call(method, args) {
    const mod = this._module();
    if (!mod)
      return null;
    try {
      return await mod.execute(method, args);
    } catch (error) {
      notifyError(`Remote debugging failed: ${error?.message || error}`);
      return null;
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
function RemoteDebugPanelComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Last seen ", \u0275\u0275pipeBind2(2, 1, ctx, "MMM d, h:mm:ss a"), " ");
  }
}
function RemoteDebugPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, RemoteDebugPanelComponent_Conditional_4_Conditional_7_Template, 3, 4, "span", 3);
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const info_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(info_r1.app);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", info_r1.version, " (", info_r1.build, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Loaded ", \u0275\u0275pipeBind2(6, 6, info_r1.started_at, "MMM d, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.last_seen()) ? 7 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", info_r1.url, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, " The driver has no details of this device yet. Request logs or send a command to start. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
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
function RemoteDebugPanelComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopLogs());
    });
    \u0275\u0275text(1, " Stop live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startLogs());
    });
    \u0275\u0275text(1, " Start live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" Live at the ", ctx.level, " level. ");
  }
}
function RemoteDebugPanelComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 19)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, entry_r6.timestamp, "HH:mm:ss.SSS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.level_classes[entry_r6.level]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r6.level, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r6.message, " ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1, " No log entries ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_59_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const command_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", command_r7.type, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, " Waiting for the device: ");
    \u0275\u0275repeaterCreate(2, RemoteDebugPanelComponent_Conditional_59_For_3_Template, 2, 1, "span", 42, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pending());
  }
}
function RemoteDebugPanelComponent_For_65_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.result.error);
  }
}
function RemoteDebugPanelComponent_For_65_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 48);
  }
  if (rf & 2) {
    const file_r9 = ctx;
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate6(" ", file_r9.width, " x ", file_r9.height, ", ", file_r9.frames, " ", file_r9.frames === 1 ? "frame" : "frames", ", ", \u0275\u0275pipeBind2(2, 8, file_r9.bytes / 1024, "1.0-0"), " KB, ", file_r9.mime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ctx_r1.mediaUrl(file_r9))("alt", item_r8.type + " of " + ctx_r1.device_id());
  }
}
function RemoteDebugPanelComponent_For_65_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r8.result.data));
  }
}
function RemoteDebugPanelComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 34)(1, "div", 43)(2, "icon", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, RemoteDebugPanelComponent_For_65_Conditional_9_Template, 2, 1, "pre", 46)(10, RemoteDebugPanelComponent_For_65_Conditional_10_Template, 4, 11)(11, RemoteDebugPanelComponent_For_65_Conditional_11_Template, 3, 3, "pre", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", item_r8.result.ok)("text-error", !item_r8.result.ok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.result.ok ? "check_circle" : "error", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, item_r8.received_at, "MMM d, h:mm:ss a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!item_r8.result.ok ? 9 : (tmp_15_0 = ctx_r1.media(item_r8)) ? 10 : 11, tmp_15_0);
  }
}
function RemoteDebugPanelComponent_ForEmpty_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35);
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
    this.shown_entries = computed(
      () => {
        const filter = this.filter().trim().toLowerCase();
        const list = [];
        const entries = this.entries();
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i];
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
    effect(() => {
      const mod = this._view.module();
      const id = this.device_id();
      untracked(() => this._bind(id, mod !== null));
    });
  }
  /** Start a log request at the selected level, with the buffered entries */
  async startLogs() {
    await this._view.call("request_logs", [
      this.device_id(),
      this.level(),
      { history: LOG_HISTORY }
    ]);
  }
  async stopLogs() {
    await this._view.call("stop_logs", [this.device_id()]);
  }
  /** Select a level. An active request changes its level */
  async setLevel(level) {
    this.level.set(level);
    if (this.request()) {
      await this._view.call("set_level", [this.device_id(), level]);
    }
  }
  /** New request for the entries before the oldest entry that the driver has */
  async loadOlder() {
    const oldest = this.entries()[0];
    if (!oldest)
      return;
    await this._view.call("request_logs", [
      this.device_id(),
      this.request()?.level ?? this.level(),
      { history: LOG_HISTORY, before: oldest.seq }
    ]);
  }
  /** Save the log entries as a text file */
  downloadLogs() {
    const text = this.entries().map((_) => `${new Date(_.timestamp).toISOString()} ${_.level.toUpperCase()} ${_.message}`).join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${this.device_id()}-logs.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }
  async send(type, options = {}) {
    const id = await this._view.call("send_command", [
      this.device_id(),
      type,
      options
    ]);
    if (id)
      notifySuccess(`Sent ${type} to ${this.device_id()}`);
  }
  /** Reload the app on the device, after the user confirms */
  async reload(type) {
    const result = await openConfirmModal({
      title: type === "reload" ? "Reload app" : "Clear cache",
      content: type === "reload" ? `Reload the app on ${this.device_id()}?` : `Remove the app caches on ${this.device_id()} and reload it? The device must be online to load the app again.`,
      icon: { type: "icon", content: "restart_alt" },
      destructive: true
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.close();
    await this.send(type);
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
    const mod = this._view.module();
    if (!connected || !mod || !device_id)
      return;
    this.subscription("state", mod.variable(remoteDebugDeviceBinding(device_id)).bindThenSubscribe((value) => this._state.set(value && typeof value === "object" ? value : {})));
    this.subscription("logs", mod.variable(remoteDebugLogsBinding(device_id)).bindThenSubscribe((value) => this._logs.set(value ?? null)));
    this.subscription("results", mod.variable(remoteDebugResultsBinding(device_id)).bindThenSubscribe((value) => this._results.set(Array.isArray(value) ? value : [])));
  }
  static {
    this.\u0275fac = function RemoteDebugPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugPanelComponent, selectors: [["remote-debug-panel"]], inputs: { device_id: [1, "device_id"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 67, vars: 17, consts: [[1, "flex", "flex-col", "gap-3"], [1, "bg-base-100", "border-base-300", "flex", "flex-wrap", "items-center", "gap-x-4", "gap-y-1", "rounded-lg", "border", "px-4", "py-3"], [1, "font-mono", "text-lg", "font-medium"], [1, "text-sm", "opacity-70"], ["logs", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "pt-3"], [1, "flex-1", "font-medium"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-32"], ["aria-label", "Log level", 3, "ngModelChange", "ngModel"], [3, "value"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-48", "flex-1"], ["matInput", "", "placeholder", "Filter logs", "aria-label", "Filter logs", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], ["icon", "", "matRipple", "", "type", "button", "aria-label", "Download logs", 3, "click", "disabled"], [1, "px-4", "pb-2", "text-xs", "opacity-60"], [1, "border-base-300", "max-h-[32rem]", "overflow-auto", "border-t", "font-mono", "text-xs"], [1, "border-base-200", "flex", "gap-2", "border-b", "px-4", "py-1"], [1, "px-4", "py-6", "text-center", "opacity-60"], ["commands", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "gap-3", "rounded-lg", "border", "p-4"], [1, "font-medium"], [1, "flex", "flex-wrap", "gap-2"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2", 3, "ngSubmit"], ["matInput", "", "name", "keys", "placeholder", "Settings keys, such as app.title, app.features", "aria-label", "Settings keys", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], ["matInput", "", "name", "path", "placeholder", "App route, such as /bootstrap", "aria-label", "App route", 3, "ngModelChange", "ngModel"], ["pending", "", 1, "text-sm", "opacity-70"], ["results", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "px-4", "pt-3", "pb-2", "font-medium"], [1, "flex", "flex-col"], [1, "border-base-200", "flex", "flex-col", "gap-2", "border-t", "px-4", "py-3"], [1, "px-4", "pb-6", "text-center", "opacity-60"], [1, "w-full", "truncate", "text-xs", "opacity-60"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse", 3, "click"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button", 3, "click"], [1, "shrink-0", "opacity-60"], [1, "h-fit", "shrink-0", "rounded", "px-1", "uppercase"], [1, "min-w-0", "break-words", "whitespace-pre-wrap"], [1, "bg-base-200", "ml-1", "rounded", "px-2", "py-0.5"], [1, "flex", "items-center", "gap-2"], [1, "text-xl"], [1, "text-sm", "opacity-60"], [1, "text-error", "max-h-48", "overflow-auto", "text-xs", "whitespace-pre-wrap"], [1, "bg-base-200", "max-h-64", "overflow-auto", "rounded", "p-2", "text-xs"], ["auth", "", 1, "border-base-300", "max-h-[32rem]", "w-fit", "max-w-full", "rounded", "border", "object-contain", 3, "source", "alt"]], template: function RemoteDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, RemoteDebugPanelComponent_Conditional_4_Template, 10, 9)(5, RemoteDebugPanelComponent_Conditional_5_Template, 2, 0, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "section", 4)(7, "div", 5)(8, "h3", 6);
        \u0275\u0275text(9, "Logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 7)(11, "mat-select", 8);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.setLevel($event);
        });
        \u0275\u0275repeaterCreate(12, RemoteDebugPanelComponent_For_13_Template, 2, 2, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, RemoteDebugPanelComponent_Conditional_14_Template, 2, 0, "button", 10)(15, RemoteDebugPanelComponent_Conditional_15_Template, 2, 0, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "mat-form-field", 13)(18, "input", 14);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.filter.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 15);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_19_listener() {
          return ctx.loadOlder();
        });
        \u0275\u0275text(20, " Load older ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 16);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_21_listener() {
          return ctx.downloadLogs();
        });
        \u0275\u0275elementStart(22, "icon");
        \u0275\u0275text(23, "download");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "p", 17);
        \u0275\u0275conditionalCreate(25, RemoteDebugPanelComponent_Conditional_25_Template, 1, 1);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "ol", 18);
        \u0275\u0275repeaterCreate(28, RemoteDebugPanelComponent_For_29_Template, 8, 8, "li", 19, _forTrack0, false, RemoteDebugPanelComponent_ForEmpty_30_Template, 2, 0, "li", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "section", 21)(32, "h3", 22);
        \u0275\u0275text(33, "Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 23)(35, "button", 24);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_35_listener() {
          return ctx.send("status");
        });
        \u0275\u0275text(36, " Status ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 24);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_37_listener() {
          return ctx.send("snapshot");
        });
        \u0275\u0275text(38, " Snapshot ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 24);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_39_listener() {
          return ctx.send("animation", { format: "webp" });
        });
        \u0275\u0275text(40, " Animation (WebP) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 24);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_41_listener() {
          return ctx.send("animation", { format: "gif" });
        });
        \u0275\u0275text(42, " Animation (GIF) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 24);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_43_listener() {
          return ctx.send("storage");
        });
        \u0275\u0275text(44, " Storage keys ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 25);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_45_listener() {
          return ctx.reload("reload");
        });
        \u0275\u0275text(46, " Reload app ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 25);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_47_listener() {
          return ctx.reload("clear_cache");
        });
        \u0275\u0275text(48, " Clear cache and reload ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "form", 26);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_49_listener() {
          return ctx.sendSettings();
        });
        \u0275\u0275elementStart(50, "mat-form-field", 13)(51, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings_keys, $event) || (ctx.settings_keys = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 28);
        \u0275\u0275text(53, " Get settings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "form", 26);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_54_listener() {
          return ctx.sendNavigate();
        });
        \u0275\u0275elementStart(55, "mat-form-field", 13)(56, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.navigate_path, $event) || (ctx.navigate_path = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 28);
        \u0275\u0275text(58, " Open route ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(59, RemoteDebugPanelComponent_Conditional_59_Template, 4, 0, "p", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "section", 31)(61, "h3", 32);
        \u0275\u0275text(62, "Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "ol", 33);
        \u0275\u0275repeaterCreate(64, RemoteDebugPanelComponent_For_65_Template, 12, 11, "li", 34, _forTrack1, false, RemoteDebugPanelComponent_ForEmpty_66_Template, 2, 0, "li", 35);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_10_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.device_id());
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = ctx.device()) ? 4 : 5, tmp_1_0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.level());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.levels);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.request() ? 14 : 15);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.filter());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.entries().length);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.entries().length);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_10_0 = ctx.request()) ? 25 : -1, tmp_10_0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" Showing ", ctx.shown_entries().length, " of ", ctx.entries().length, " entries, newest first. ");
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
        \u0275\u0275conditional(ctx.pending().length ? 59 : -1);
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
                        [disabled]="!entries().length"
                        (click)="loadOlder()"
                    >
                        Load older
                    </button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugPanelComponent, { className: "RemoteDebugPanelComponent", filePath: "libs/components/src/lib/remote-debug-panel.component.ts", lineNumber: 429 });
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
function RemoteDebugComponent_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 21);
    \u0275\u0275listener("click", function RemoteDebugComponent_Conditional_11_For_9_Template_button_click_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(item_r5.id));
    });
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", item_r5.id === ctx_r1.device());
    \u0275\u0275attribute("aria-current", item_r5.id === ctx_r1.device() ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r5.app, " \xB7 ", \u0275\u0275pipeBind2(6, 6, item_r5.last_seen, "MMM d, h:mm a"), " ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275text(1, " No device has called the driver yet. Enter a device ID to send it a request. A device shows its ID on its setup screen. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "remote-debug-panel", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("device_id", ctx_r1.device());
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 24);
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
      return \u0275\u0275resetView(ctx_r1.open(ctx_r1.device_input));
    });
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugComponent_Conditional_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.device_input, $event) || (ctx_r1.device_input = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275text(6, " Open ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ul", 16);
    \u0275\u0275repeaterCreate(8, RemoteDebugComponent_Conditional_11_For_9_Template, 7, 9, "li", null, _forTrack02, false, RemoteDebugComponent_Conditional_11_ForEmpty_10_Template, 2, 0, "li", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "section", 18);
    \u0275\u0275conditionalCreate(12, RemoteDebugComponent_Conditional_11_Conditional_12_Template, 1, 1, "remote-debug-panel", 19)(13, RemoteDebugComponent_Conditional_11_Conditional_13_Template, 5, 0, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.device_input);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.device_input.trim());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.devices());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.device() ? 12 : 13);
  }
}
var DEBUG_GROUPS = ["placeos_admin", "placeos_support"];
var DEVICE_ID_FORMAT = /^DEV-[0-9A-F]{12}$/i;
var RemoteDebugComponent = class _RemoteDebugComponent {
  constructor() {
    this._view = inject(RemoteDebugViewService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.device = toSignal(this._route.queryParamMap.pipe(map((_) => _.get("device") ?? "")), { initialValue: "" });
    this.state = this._view.state;
    this.devices = this._view.devices;
    this.allowed = computed(
      () => user_group_names().some((_) => DEBUG_GROUPS.includes(_)),
      ...ngDevMode ? [{ debugName: "allowed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device_input = "";
  }
  open(device_id) {
    const trimmed = device_id.trim();
    const id = DEVICE_ID_FORMAT.test(trimmed) ? trimmed.toUpperCase() : trimmed;
    if (!id)
      return;
    this.device_input = "";
    void this._router.navigate([], {
      queryParams: { device: id },
      queryParamsHandling: "merge"
    });
  }
  retry() {
    void this._view.load();
  }
  static {
    this.\u0275fac = function RemoteDebugComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugComponent, selectors: [["app-remote-debug"]], decls: 12, vars: 4, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "min-w-0", "flex-1", "flex-col"], [1, "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], ["not-allowed", "", 1, "px-8", "py-4", "opacity-70"], ["role", "status", 1, "px-8", "py-4", "opacity-70"], ["missing", "", 1, "px-8", "py-4", "opacity-70"], [1, "flex", "items-center", "gap-4", "px-8", "py-4"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-4", "overflow-auto", "px-8", "pb-8", "lg:flex-row"], [1, "opacity-70"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], [1, "flex", "shrink-0", "flex-col", "gap-2", "lg:w-80"], [1, "flex", "items-center", "gap-2", 3, "ngSubmit"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "flex-1"], ["matInput", "", "name", "device", "placeholder", "Device ID", "aria-label", "Device ID", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], ["aria-label", "Devices", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "overflow-hidden", "rounded-lg", "border"], [1, "px-4", "py-6", "text-sm", "opacity-70"], [1, "min-w-0", "flex-1"], [3, "device_id"], [1, "flex", "flex-col", "items-center", "gap-2", "p-8", "opacity-70"], ["matRipple", "", "type", "button", 1, "hover:bg-base-200", "flex", "w-full", "flex-col", "items-start", "px-4", "py-2", "text-left", 3, "click"], [1, "font-mono"], [1, "text-xs", "opacity-70"], [1, "text-5xl"]], template: function RemoteDebugComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, RemoteDebugComponent_Conditional_7_Template, 2, 0, "p", 4)(8, RemoteDebugComponent_Conditional_8_Template, 2, 0, "p", 5)(9, RemoteDebugComponent_Conditional_9_Template, 5, 0, "p", 6)(10, RemoteDebugComponent_Conditional_10_Template, 5, 0, "div", 7)(11, RemoteDebugComponent_Conditional_11_Template, 14, 4, "div", 8);
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
                        <aside class="flex shrink-0 flex-col gap-2 lg:w-80">
                            <form
                                class="flex items-center gap-2"
                                (ngSubmit)="open(device_input)"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="flex-1"
                                    subscriptSizing="dynamic"
                                >
                                    <input
                                        matInput
                                        name="device"
                                        placeholder="Device ID"
                                        aria-label="Device ID"
                                        [(ngModel)]="device_input"
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    type="submit"
                                    [disabled]="!device_input.trim()"
                                >
                                    Open
                                </button>
                            </form>
                            <ul
                                class="bg-base-100 border-base-300 flex flex-col overflow-hidden rounded-lg border"
                                aria-label="Devices"
                            >
                                @for (item of devices(); track item.id) {
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
                                            <span class="font-mono">
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
                                        No device has called the driver yet.
                                        Enter a device ID to send it a request.
                                        A device shows its ID on its setup
                                        screen.
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugComponent, { className: "RemoteDebugComponent", filePath: "apps/concierge/src/app/remote-debug/remote-debug.component.ts", lineNumber: 181 });
})();
export {
  RemoteDebugComponent
};
//# debugId=3de085b1-82ab-5660-80b8-7994c7c6f63c
//# sourceMappingURL=remote-debug.component-Z23VWY3T.js.map
