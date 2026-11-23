import {
  ApplicationSidebarComponent
} from "./chunk-SLDZQJIQ.js";
import "./chunk-KG4ZUCXR.js";
import "./chunk-FT3M5V6S.js";
import "./chunk-FEOFUDUQ.js";
import {
  openConfirmModal
} from "./chunk-FYVWW3TR.js";
import "./chunk-BEJJI4XH.js";
import "./chunk-WHTFR7U3.js";
import {
  toSignal
} from "./chunk-OPZVMW6L.js";
import {
  AuthenticatedImageDirective
} from "./chunk-DFABWOVJ.js";
import "./chunk-PSTO27BG.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-PYBVUYRY.js";
import "./chunk-MQEEHHA6.js";
import "./chunk-I3LAEIE5.js";
import "./chunk-IOT6T7TK.js";
import "./chunk-NGLDEX73.js";
import {
  MatDialog
} from "./chunk-XXKPMVFX.js";
import "./chunk-DWCIQIE5.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-KJNI3Y65.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-XJVX67LU.js";
import "./chunk-4CRVCOPS.js";
import "./chunk-S2TIRK7S.js";
import "./chunk-42S2QJDR.js";
import {
  MatOption
} from "./chunk-PWIGADFP.js";
import "./chunk-GMB7PC6H.js";
import "./chunk-6TAYCSO7.js";
import "./chunk-JBH3Z7QA.js";
import {
  TranslatePipe
} from "./chunk-EI4ZY5RY.js";
import {
  IconComponent
} from "./chunk-OCRUIWUS.js";
import "./chunk-XCUQAAEL.js";
import {
  AsyncHandler,
  Clipboard,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  REMOTE_DEBUG_DEVICES,
  REMOTE_LOG_LEVELS,
  downloadFile,
  isRemoteDebugCommand,
  isRemoteDebugDeviceOnline,
  isRemoteLogRequest,
  notifyError,
  notifySuccess,
  readRemoteDebugDevices,
  readRemoteDebugMedia,
  readRemoteDebugModule,
  readRemoteDebugResults,
  readRemoteLogsView,
  realtimeConnected,
  remoteDebugDeviceBinding,
  remoteDebugLogsBinding,
  remoteDebugMediaUrl,
  remoteDebugOrgId,
  remoteDebugResultsBinding,
  remoteDebugSeenText,
  user_group_names,
  ɵNgNoValidate
} from "./chunk-MRCZQZBY.js";
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
  ɵɵreference,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/components/src/lib/remote-debug-result-view.ts
var REMOTE_DEBUG_COMMAND_LABELS = {
  status: "Status",
  settings: "Settings",
  storage: "Storage keys",
  navigate: "Open route",
  reload: "Reload app",
  clear_cache: "Clear cache and reload",
  snapshot: "Snapshot",
  animation: "Animation"
};
var CLOCK_WARN_MS = 60 * 1e3;
var CLOCK_SYNC_MS = 5 * 1e3;
var USAGE_WARN = 0.8;
var MAX_ERROR_LENGTH = 300;
function remoteDebugResultView(item) {
  const { result } = item;
  if (!result.ok)
    return { kind: "error", error: result.error ?? "" };
  if (item.type === "snapshot" || item.type === "animation") {
    const file = readRemoteDebugMedia(result.data);
    if (file) {
      return {
        kind: "media",
        file,
        url: remoteDebugMediaUrl(file.upload_id)
      };
    }
  }
  if (item.type === "status") {
    const rows = remoteDebugStatusRows(result.data, item.received_at);
    if (rows)
      return { kind: "status", rows };
  }
  if (item.type === "storage") {
    const items = readStorageItems(result.data);
    if (items)
      return { kind: "storage", items };
  }
  return result.data === void 0 || result.data === null ? { kind: "done" } : { kind: "data" };
}
function remoteDebugStatusRows(data, received_at) {
  if (!isRecord(data))
    return null;
  const device_time = num(data.device_time);
  if (device_time === null)
    return null;
  const rows = [];
  const add = (label, value, warn = false) => rows.push({ label, value, warn });
  const offset = device_time - received_at;
  const timezone = str(data.timezone);
  add("Clock", `${Math.abs(offset) < CLOCK_SYNC_MS ? "In sync with the driver" : `${formatDuration(Math.abs(offset))} ${offset > 0 ? "ahead of" : "behind"} the driver`}${timezone ? `, ${timezone}` : ""}`, Math.abs(offset) > CLOCK_WARN_MS);
  if (typeof data.online === "boolean" && typeof data.websocket === "boolean") {
    add("Connection", `Network ${data.online ? "on" : "off"}, PlaceOS ${data.websocket ? "connected" : "not connected"}`, !data.online || !data.websocket);
  }
  if (typeof data.visible === "boolean") {
    add("Visible", data.visible ? "Yes" : "No, the app is hidden", !data.visible);
  }
  if (isRecord(data.screen)) {
    const width = num(data.screen.width);
    const height = num(data.screen.height);
    const ratio = num(data.screen.pixel_ratio);
    if (width !== null && height !== null) {
      add("Screen", `${width} x ${height}${ratio !== null && ratio !== 1 ? ` at ${ratio}x` : ""}`);
    }
  }
  const memory = usage(data.memory, "used", "limit");
  if (memory)
    add("Memory", memory.text, memory.warn);
  else if (data.memory === null)
    add("Memory", "Not available");
  const storage = usage(data.storage, "usage", "quota");
  if (storage)
    add("Storage", storage.text, storage.warn);
  if (isRecord(data.service_worker)) {
    const active = data.service_worker.active === true;
    const waiting = data.service_worker.new_version === true;
    add("Service worker", `${active ? "Active" : "Not active"}${waiting ? ", new version waiting" : ""}`, waiting);
  }
  if (data.user === null)
    add("User", "Not signed in");
  else if (isRecord(data.user)) {
    add("User", str(data.user.email) || str(data.user.id));
  }
  const building = str(data.building_id);
  if (building)
    add("Building", building);
  const language = str(data.language);
  if (language)
    add("Language", language);
  if (Array.isArray(data.setting_overrides)) {
    const keys = data.setting_overrides.filter((_) => typeof _ === "string");
    add("Setting overrides", keys.length ? keys.join(", ") : "None", keys.length > 0);
  }
  if (isRecord(data.log_counts)) {
    const counts = data.log_counts;
    const parts = [...REMOTE_LOG_LEVELS].reverse().map((level) => [level, num(counts[level]) ?? 0]).filter(([, count]) => count > 0).map(([level, count]) => `${count} ${level}`);
    add("Logs since load", parts.join(", ") || "None", (num(counts.error) ?? 0) > 0);
  }
  if (isRecord(data.last_error)) {
    const message = str(data.last_error.message);
    if (message) {
      add("Last error", message.length > MAX_ERROR_LENGTH ? `${message.slice(0, MAX_ERROR_LENGTH)}\u2026` : message, true);
    }
  }
  return rows;
}
function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  const digits = unit === 0 || value >= 100 ? 0 : 1;
  return `${Number(value.toFixed(digits))} ${units[unit]}`;
}
function formatDuration(ms) {
  const seconds = Math.round(ms / 1e3);
  if (seconds < 120)
    return `${seconds} s`;
  const minutes = Math.round(seconds / 60);
  if (minutes < 120)
    return `${minutes} min`;
  return `${Math.round(minutes / 60)} h`;
}
function usage(value, used_key, total_key) {
  if (!isRecord(value))
    return null;
  const used = num(value[used_key]);
  const total = num(value[total_key]);
  if (used === null || !total)
    return null;
  const part = used / total;
  return {
    text: `${formatBytes(used)} of ${formatBytes(total)} (${Math.round(part * 100)}%)`,
    warn: part >= USAGE_WARN
  };
}
function readStorageItems(data) {
  if (!Array.isArray(data))
    return null;
  return data.filter((_) => isRecord(_) && typeof _.key === "string" && num(_.length) !== null);
}
function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function num(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function str(value) {
  return typeof value === "string" ? value : "";
}

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
      [],
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
      () => [...this._devices()].sort((a, b) => b.last_seen - a.last_seen),
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
    this.subscription("devices", mod.variable(REMOTE_DEBUG_DEVICES).subscribe((value) => this._devices.set(readRemoteDebugDevices(value))));
  }
  /**
   * Call a method of the driver for the people who debug, such as
   * `request_logs` or `send_command`. Resolves the result of the driver.
   * Rejects when the call fails, when the websocket is not connected, or
   * when the driver is not set up. It shows the error first, except for a
   * driver that is not set up, because the view shows that state.
   */
  async call(method, args) {
    const mod = this._module();
    if (!mod)
      throw new Error("The RemoteDebug driver is not set up");
    if (!realtimeConnected()) {
      const message = "Remote debugging needs a connection to PlaceOS";
      notifyError(message);
      throw new Error(message);
    }
    try {
      return await mod.execute(method, args);
    } catch (error) {
      notifyError(`Remote debugging failed: ${error?.message || error}`);
      throw error;
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
var _forTrack2 = ($index, $item) => $item.label;
var _forTrack3 = ($index, $item) => $item.key;
function RemoteDebugPanelComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Live logs at ", ctx.level, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt", 55);
    \u0275\u0275text(2, "Last seen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 57);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(4, 2, ctx, "MMM d, h:mm:ss a"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.last_seen_text(), " ");
  }
}
function RemoteDebugPanelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 54)(1, "div")(2, "dt", 55);
    \u0275\u0275text(3, "App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "dt", 55);
    \u0275\u0275text(8, "Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "dt", 55);
    \u0275\u0275text(13, "Loaded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, RemoteDebugPanelComponent_Conditional_11_Conditional_17_Template, 6, 5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 56);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const info_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r2.app);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", info_r2.version, " (", info_r2.build, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 7, info_r2.started_at, "MMM d, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r0.last_seen()) ? 17 : -1, tmp_5_0);
    \u0275\u0275advance();
    \u0275\u0275property("title", info_r2.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", info_r2.url, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, " The driver has no details of this device yet. Request logs or send a command to start. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
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
function RemoteDebugPanelComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stopLogs());
    });
    \u0275\u0275text(1, " Stop live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startLogs());
    });
    \u0275\u0275text(1, " Start live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showNewest());
    });
    \u0275\u0275text(1, " Newest ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_For_37_Template_button_click_0_listener() {
      const option_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleShownLevel(option_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.shown_level() === option_r8 ? ctx_r0.level_classes[option_r8] : "");
    \u0275\u0275attribute("aria-pressed", ctx_r0.shown_level() === option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.level_counts()[option_r8], " ");
  }
}
function RemoteDebugPanelComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Older than entry ", ctx_r0.older_than(), ". ");
  }
}
function RemoteDebugPanelComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 63)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.row_classes[entry_r9.level]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 7, entry_r9.timestamp, "HH:mm:ss.SSS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.level_classes[entry_r9.level]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r9.level, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r9.message, " ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No entry matches the filter ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Waiting for entries from the device ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_44_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No log entries. Start live logs to get them from the device. ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30);
    \u0275\u0275conditionalCreate(1, RemoteDebugPanelComponent_ForEmpty_44_Conditional_1_Template, 1, 0)(2, RemoteDebugPanelComponent_ForEmpty_44_Conditional_2_Template, 1, 0)(3, RemoteDebugPanelComponent_ForEmpty_44_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.entries().length ? 1 : ctx_r0.request() ? 2 : 3);
  }
}
function RemoteDebugPanelComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34)(1, "icon", 67);
    \u0275\u0275text(2, " cloud_off ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " The device is offline. Commands wait until it connects again, or until the driver removes them. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_99_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 68)(1, "icon", 69);
    \u0275\u0275text(2, " progress_activity ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const command_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.command_labels[command_r10.type], " ");
  }
}
function RemoteDebugPanelComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 49);
    \u0275\u0275repeaterCreate(1, RemoteDebugPanelComponent_Conditional_99_For_2_Template, 4, 1, "li", 68, _forTrack1);
    \u0275\u0275elementStart(3, "li", 55);
    \u0275\u0275text(4, " Waiting for the device ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pending());
  }
}
function RemoteDebugPanelComponent_For_102_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r11.result.error);
  }
}
function RemoteDebugPanelComponent_For_102_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "p", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_For_102_Case_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const image_r13 = \u0275\u0275reference(7);
      const item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveMedia(image_r13, item_r11));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "download");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(6, "img", 78, 0);
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate6(" ", item_r11.view.file.width, " x ", item_r11.view.file.height, ", ", item_r11.view.file.frames, " ", item_r11.view.file.frames === 1 ? "frame" : "frames", ", ", ctx_r0.format_bytes(item_r11.view.file.bytes), ", ", item_r11.view.file.mime, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("source", item_r11.view.url)("alt", item_r11.type + " of " + ctx_r0.device_id());
  }
}
function RemoteDebugPanelComponent_For_102_Case_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "dd", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-error", row_r14.warn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.value, " ");
  }
}
function RemoteDebugPanelComponent_For_102_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 79);
    \u0275\u0275repeaterCreate(1, RemoteDebugPanelComponent_For_102_Case_11_For_2_Template, 4, 4, null, null, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "details")(4, "summary", 80);
    \u0275\u0275text(5, " All data ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "pre", 81);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r11.view.rows);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 1, item_r11.result.data));
  }
}
function RemoteDebugPanelComponent_For_102_Case_12_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 86)(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 88);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const storage_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", storage_r15.key, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, storage_r15.length), " ");
  }
}
function RemoteDebugPanelComponent_For_102_Case_12_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, " No keys ");
    \u0275\u0275elementEnd()();
  }
}
function RemoteDebugPanelComponent_For_102_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 74)(1, "thead")(2, "tr", 82)(3, "th", 84);
    \u0275\u0275text(4, " Key ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 85);
    \u0275\u0275text(6, " Characters ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, RemoteDebugPanelComponent_For_102_Case_12_For_9_Template, 6, 4, "tr", 86, _forTrack3, false, RemoteDebugPanelComponent_For_102_Case_12_ForEmpty_10_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275repeater(item_r11.view.items);
  }
}
function RemoteDebugPanelComponent_For_102_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r11.result.data));
  }
}
function RemoteDebugPanelComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 51)(1, "div", 70)(2, "icon", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 72);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, RemoteDebugPanelComponent_For_102_Case_9_Template, 2, 1, "pre", 73)(10, RemoteDebugPanelComponent_For_102_Case_10_Template, 8, 8)(11, RemoteDebugPanelComponent_For_102_Case_11_Template, 9, 3)(12, RemoteDebugPanelComponent_For_102_Case_12_Template, 11, 1, "table", 74)(13, RemoteDebugPanelComponent_For_102_Case_13_Template, 3, 3, "pre", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", item_r11.result.ok)("text-error", !item_r11.result.ok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r11.result.ok ? "check_circle" : "error", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.command_labels[item_r11.type], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, item_r11.received_at, "MMM d, h:mm:ss a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_15_0 = item_r11.view.kind) === "error" ? 9 : tmp_15_0 === "media" ? 10 : tmp_15_0 === "status" ? 11 : tmp_15_0 === "storage" ? 12 : tmp_15_0 === "data" ? 13 : -1);
  }
}
function RemoteDebugPanelComponent_ForEmpty_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52);
    \u0275\u0275text(1, " No results yet. Results of the commands show here. ");
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
var ROW_CLASSES = {
  debug: "",
  info: "",
  warn: "bg-warning/10",
  error: "bg-error/10"
};
var RemoteDebugPanelComponent = class _RemoteDebugPanelComponent extends AsyncHandler {
  constructor() {
    super();
    this._view = inject(RemoteDebugViewService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
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
    this.shown_levels = [...REMOTE_LOG_LEVELS].reverse();
    this.level_classes = LEVEL_CLASSES;
    this.row_classes = ROW_CLASSES;
    this.command_labels = REMOTE_DEBUG_COMMAND_LABELS;
    this.format_bytes = formatBytes;
    this.level = signal(
      "info",
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown_level = signal(
      null,
      ...ngDevMode ? [{ debugName: "shown_level" }] : (
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
    this.level_counts = computed(
      () => {
        const counts = {
          debug: 0,
          info: 0,
          warn: 0,
          error: 0
        };
        for (const entry of this.entries())
          counts[entry.level]++;
        return counts;
      },
      ...ngDevMode ? [{ debugName: "level_counts" }] : (
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
    this._pending = 0;
    this._closed = false;
    this._failed = false;
    this._older_wanted = null;
    this._request_id = "";
    this._matches = computed(
      () => {
        const text = this.filter().trim().toLowerCase();
        const level = this.shown_level();
        return (entry) => (!level || entry.level === level) && (!text || entry.message.toLowerCase().includes(text));
      },
      ...ngDevMode ? [{ debugName: "_matches" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown_entries = computed(
      () => {
        const matches = this._matches();
        const older_than = this.older_than() ?? Infinity;
        const list = [];
        const entries = this.entries();
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i];
          if (entry.seq >= older_than || !matches(entry))
            continue;
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
      () => this._results().slice(-MAX_SHOWN_RESULTS).reverse().map((item) => __spreadProps(__spreadValues({}, item), { view: remoteDebugResultView(item) })),
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
    this.last_seen_text = computed(
      () => remoteDebugSeenText(this.last_seen(), this._view.now()),
      ...ngDevMode ? [{ debugName: "last_seen_text" }] : (
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
  /** Select a level. When logs are live, send the level to the device */
  async setLevel(level) {
    this.level.set(level);
    if (!this.request())
      return;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("set_level", [device_id, level]));
  }
  /** Show only the entries of `level`, or all entries when it shows already */
  toggleShownLevel(level) {
    this.shown_level.set(this.shown_level() === level ? null : level);
  }
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
  /**
   * Run a driver call after the calls before it. Resolves `undefined` when
   * the call fails, which the view service shows. A call that did not
   * start when the panel closes does not run, so a reload is not sent
   * later.
   *
   * When the last call finishes, the level shows the level in the binding
   * if a call failed, or if the binding changed during the last call. Else
   * the binding can still show the old level, and its next value sets the
   * level.
   */
  _queue(call) {
    this._pending++;
    let seen = null;
    const next = this._requests.then(() => {
      if (this._closed)
        return void 0;
      seen = this._state();
      return call();
    }).catch(() => {
      this._failed = true;
      return void 0;
    }).finally(() => {
      if (--this._pending)
        return;
      const state = this._state();
      if (this._failed || state !== seen) {
        if (isRemoteLogRequest(state.logs)) {
          this.level.set(state.logs.level);
        }
      }
      this._failed = false;
    });
    this._requests = next;
    return next;
  }
  destroy() {
    this._closed = true;
    super.destroy();
  }
  /** Whether an entry before `seq` matches the filter and the shown level */
  _hasMatchBefore(seq) {
    const matches = this._matches();
    return this.entries().some((_) => _.seq < seq && matches(_));
  }
  /** Copy the device ID, for example to paste in a support ticket */
  copyId() {
    const id = this.device_id();
    if (this._clipboard.copy(id))
      notifySuccess(`Copied ${id}`);
    else
      notifyError("The device ID could not be copied");
  }
  /** Save the log entries as a text file */
  downloadLogs() {
    const text = this.entries().map((_) => `${new Date(_.timestamp).toISOString()} ${_.level.toUpperCase()} ${_.message}`).join("\n");
    downloadFile(`${this.device_id()}-logs.txt`, text);
  }
  /**
   * Save the file of a snapshot or animation. The image already has the
   * file as a local URL after it loads, so the save needs no new request
   */
  saveMedia(image, item) {
    const url = image.currentSrc || image.src;
    if (!url) {
      notifyError("The file did not load yet");
      return;
    }
    const file = this.media(item);
    const extension = file?.mime.split("/")[1] ?? "webp";
    const link = document.createElement("a");
    link.href = url;
    link.download = `${this.device_id()}-${item.type}-${item.received_at}.${extension}`;
    link.click();
  }
  async send(type, options = {}, device_id = this.device_id()) {
    const id = await this._queue(() => this._view.call("send_command", [
      device_id,
      type,
      options
    ]));
    if (id === void 0)
      return;
    const label = REMOTE_DEBUG_COMMAND_LABELS[type];
    if (id)
      notifySuccess(`Sent ${label} to ${device_id}`);
    else {
      notifyError(`The driver did not take the ${label} command. The device can have 20 waiting commands maximum.`);
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
    return readRemoteDebugMedia(item.result.data);
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
    this.shown_level.set(null);
    this._older_wanted = null;
    this._request_id = "";
    const mod = this._view.module();
    if (!connected || !mod || !device_id)
      return;
    this.subscription("state", mod.variable(remoteDebugDeviceBinding(device_id)).subscribe((value) => {
      const state = value && typeof value === "object" ? value : {};
      const logs = isRemoteLogRequest(state.logs) ? state.logs : null;
      if (logs && (logs.id !== this._request_id || !this._pending)) {
        this.level.set(logs.level);
      }
      this._request_id = logs?.id ?? "";
      this._state.set(state);
    }));
    this.subscription("logs", mod.variable(remoteDebugLogsBinding(device_id)).subscribe((raw) => {
      const value = readRemoteLogsView(raw);
      const started_at = value?.device?.started_at;
      if (started_at !== this._logs()?.device?.started_at) {
        this.older_than.set(null);
        this._older_wanted = null;
      }
      this._logs.set(value);
      const wanted = this._older_wanted;
      if (wanted !== null && this._hasMatchBefore(wanted)) {
        this.older_than.set(wanted);
        this._older_wanted = null;
      }
    }));
    this.subscription("results", mod.variable(remoteDebugResultsBinding(device_id)).subscribe((value) => this._results.set(readRemoteDebugResults(value))));
  }
  static {
    this.\u0275fac = function RemoteDebugPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugPanelComponent, selectors: [["remote-debug-panel"]], inputs: { device_id: [1, "device_id"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 104, vars: 33, consts: [["image", ""], [1, "@container", "flex", "flex-col", "gap-3"], ["device", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "gap-2", "rounded-lg", "border", "px-4", "py-3"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "font-mono", "text-lg", "font-medium"], ["icon", "", "matRipple", "", "type", "button", "title", "Copy device ID", "aria-label", "Copy device ID", 1, "text-base", 3, "click"], ["online-state", "", 1, "rounded-full", "px-2", "py-0.5", "text-xs"], ["live", "", 1, "bg-info/15", "flex", "items-center", "gap-1.5", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "text-sm", "opacity-70"], [1, "grid", "min-w-0", "gap-3", "@6xl:grid-cols-[3fr_2fr]"], ["logs", "", 1, "bg-base-100", "border-base-300", "flex", "min-w-0", "flex-col", "self-start", "rounded-lg", "border"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "pt-3"], [1, "mr-auto", "font-medium"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-32"], ["aria-label", "Log level that the device sends", 3, "ngModelChange", "ngModel"], [3, "value"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-48", "flex-1"], ["matInput", "", "placeholder", "Filter logs", "aria-label", "Filter logs", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", "newest", "", "type", "button", 1, "inverse"], ["icon", "", "matRipple", "", "type", "button", "title", "Download logs", "aria-label", "Download logs", 3, "click", "disabled"], ["shown-levels", "", "role", "group", "aria-label", "Show entries of one level", 1, "flex", "flex-wrap", "items-center", "gap-1", "px-4", "pb-2", "text-xs"], ["matRipple", "", "type", "button", 1, "border-base-300", "rounded-full", "border", "px-2", "py-0.5", 3, "click"], ["matRipple", "", "type", "button", 1, "border-base-300", "rounded-full", "border", "px-2", "py-0.5", "uppercase", 3, "class"], [1, "ml-auto", "opacity-60"], [1, "border-base-300", "max-h-[32rem]", "overflow-auto", "border-t", "font-mono", "text-xs", "@6xl:max-h-[48rem]"], [1, "border-base-200", "flex", "gap-2", "border-b", "px-4", "py-1", 3, "class"], [1, "px-4", "py-6", "text-center", "opacity-60"], ["commands", "", 1, "bg-base-100", "border-base-300", "flex", "min-w-0", "flex-col", "self-start", "rounded-lg", "border"], [1, "flex", "flex-col", "gap-3", "p-4"], [1, "font-medium"], ["offline-note", "", 1, "bg-warning/10", "flex", "items-start", "gap-2", "rounded", "px-3", "py-2", "text-sm"], [1, "flex", "flex-col", "gap-2"], [1, "text-xs", "font-medium", "uppercase", "opacity-60"], [1, "flex", "flex-wrap", "gap-2"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"], [1, "mr-1"], ["btn", "", "matRipple", "", "type", "button", "title", "Short animation of the screen, as WebP", 1, "inverse", 3, "click"], ["btn", "", "matRipple", "", "type", "button", "title", "Short animation of the screen, as GIF", 1, "inverse", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2", 3, "ngSubmit"], ["matInput", "", "name", "keys", "placeholder", "Settings keys, such as app.title, app.features", "aria-label", "Settings keys", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 1, "inverse", 3, "disabled"], ["matInput", "", "name", "path", "placeholder", "App route, such as /bootstrap", "aria-label", "App route", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "error", 3, "click"], ["results", "", 1, "border-base-300", "border-t"], [1, "px-4", "pt-3", "pb-2", "font-medium"], ["pending", "", "aria-label", "Waiting for the device", 1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "pb-3", "text-sm"], [1, "flex", "flex-col"], [1, "border-base-200", "flex", "min-w-0", "flex-col", "gap-2", "border-t", "px-4", "py-3"], [1, "px-4", "pb-6", "text-center", "opacity-60"], [1, "bg-info", "size-2", "animate-pulse", "rounded-full"], [1, "grid", "grid-cols-[repeat(auto-fill,minmax(9rem,1fr))]", "gap-x-4", "gap-y-1", "text-sm"], [1, "text-xs", "opacity-60"], [1, "truncate", "text-xs", "opacity-60", 3, "title"], [3, "title"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse", 3, "click"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", "newest", "", "type", "button", 1, "inverse", 3, "click"], ["matRipple", "", "type", "button", 1, "border-base-300", "rounded-full", "border", "px-2", "py-0.5", "uppercase", 3, "click"], [1, "opacity-70"], [1, "border-base-200", "flex", "gap-2", "border-b", "px-4", "py-1"], [1, "shrink-0", "opacity-60"], [1, "h-fit", "w-12", "shrink-0", "rounded", "px-1", "text-center", "uppercase"], [1, "min-w-0", "break-words", "whitespace-pre-wrap"], [1, "text-warning", "text-lg"], [1, "bg-base-200", "flex", "items-center", "gap-1", "rounded", "px-2", "py-0.5"], [1, "animate-spin", "text-base"], [1, "flex", "items-center", "gap-2"], [1, "text-xl"], [1, "text-sm", "opacity-60"], [1, "text-error", "max-h-48", "overflow-auto", "text-xs", "whitespace-pre-wrap"], ["storage", "", 1, "w-full", "text-left", "text-xs"], [1, "bg-base-200", "max-h-64", "overflow-auto", "rounded", "p-2", "text-xs"], [1, "flex-1", "text-sm", "opacity-70"], ["icon", "", "matRipple", "", "type", "button", "title", "Save file", "aria-label", "Save file", 3, "click"], ["auth", "", 1, "border-base-300", "max-h-[32rem]", "w-fit", "max-w-full", "rounded", "border", "object-contain", 3, "source", "alt"], ["status", "", 1, "grid", "grid-cols-[auto_1fr]", "gap-x-4", "gap-y-1", "text-sm"], [1, "cursor-pointer", "text-xs", "opacity-60"], [1, "bg-base-200", "mt-1", "max-h-64", "overflow-auto", "rounded", "p-2", "text-xs"], [1, "opacity-60"], [1, "min-w-0", "break-words"], [1, "py-1", "font-normal"], [1, "py-1", "text-right", "font-normal"], [1, "border-base-200", "border-t"], [1, "py-1", "font-mono", "break-all"], [1, "py-1", "pl-2", "text-right"], [1, "py-1", "opacity-60"]], template: function RemoteDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "h2", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_5_listener() {
          return ctx.copyId();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "content_copy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, RemoteDebugPanelComponent_Conditional_10_Template, 3, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, RemoteDebugPanelComponent_Conditional_11_Template, 20, 10)(12, RemoteDebugPanelComponent_Conditional_12_Template, 2, 0, "p", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "section", 10)(15, "div", 11)(16, "h3", 12);
        \u0275\u0275text(17, "Logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-form-field", 13)(19, "mat-select", 14);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_mat_select_ngModelChange_19_listener($event) {
          return ctx.setLevel($event);
        });
        \u0275\u0275repeaterCreate(20, RemoteDebugPanelComponent_For_21_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, RemoteDebugPanelComponent_Conditional_22_Template, 2, 0, "button", 16)(23, RemoteDebugPanelComponent_Conditional_23_Template, 2, 0, "button", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 18)(25, "mat-form-field", 19)(26, "input", 20);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.filter.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 21);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_27_listener() {
          return ctx.loadOlder();
        });
        \u0275\u0275text(28, " Load older ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(29, RemoteDebugPanelComponent_Conditional_29_Template, 2, 0, "button", 22);
        \u0275\u0275elementStart(30, "button", 23);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_30_listener() {
          return ctx.downloadLogs();
        });
        \u0275\u0275elementStart(31, "icon");
        \u0275\u0275text(32, "download");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 24)(34, "button", 25);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_34_listener() {
          return ctx.shown_level.set(null);
        });
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(36, RemoteDebugPanelComponent_For_37_Template, 4, 5, "button", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(38, "span", 27);
        \u0275\u0275text(39);
        \u0275\u0275conditionalCreate(40, RemoteDebugPanelComponent_Conditional_40_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "ol", 28);
        \u0275\u0275repeaterCreate(42, RemoteDebugPanelComponent_For_43_Template, 8, 10, "li", 29, _forTrack0, false, RemoteDebugPanelComponent_ForEmpty_44_Template, 4, 1, "li", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "section", 31)(46, "div", 32)(47, "h3", 33);
        \u0275\u0275text(48, "Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(49, RemoteDebugPanelComponent_Conditional_49_Template, 4, 0, "p", 34);
        \u0275\u0275elementStart(50, "div", 35)(51, "h4", 36);
        \u0275\u0275text(52, " Inspect ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 37)(54, "button", 38);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_54_listener() {
          return ctx.send("status");
        });
        \u0275\u0275elementStart(55, "icon", 39);
        \u0275\u0275text(56, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " Status ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 38);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_58_listener() {
          return ctx.send("snapshot");
        });
        \u0275\u0275elementStart(59, "icon", 39);
        \u0275\u0275text(60, "photo_camera");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " Snapshot ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "button", 40);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_62_listener() {
          return ctx.send("animation", { format: "webp" });
        });
        \u0275\u0275elementStart(63, "icon", 39);
        \u0275\u0275text(64, "animated_images");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " Animation (WebP) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 41);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_66_listener() {
          return ctx.send("animation", { format: "gif" });
        });
        \u0275\u0275elementStart(67, "icon", 39);
        \u0275\u0275text(68, "gif_box");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, " Animation (GIF) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "button", 38);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_70_listener() {
          return ctx.send("storage");
        });
        \u0275\u0275elementStart(71, "icon", 39);
        \u0275\u0275text(72, "database");
        \u0275\u0275elementEnd();
        \u0275\u0275text(73, " Storage keys ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "form", 42);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_74_listener() {
          return ctx.sendSettings();
        });
        \u0275\u0275elementStart(75, "mat-form-field", 19)(76, "input", 43);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_76_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings_keys, $event) || (ctx.settings_keys = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 44);
        \u0275\u0275text(78, " Get settings ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 35)(80, "h4", 36);
        \u0275\u0275text(81, " Change the device ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "form", 42);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_82_listener() {
          return ctx.sendNavigate();
        });
        \u0275\u0275elementStart(83, "mat-form-field", 19)(84, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.navigate_path, $event) || (ctx.navigate_path = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "button", 44);
        \u0275\u0275text(86, " Open route ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 37)(88, "button", 46);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_88_listener() {
          return ctx.reload("reload");
        });
        \u0275\u0275elementStart(89, "icon", 39);
        \u0275\u0275text(90, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, " Reload app ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "button", 46);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_92_listener() {
          return ctx.reload("clear_cache");
        });
        \u0275\u0275elementStart(93, "icon", 39);
        \u0275\u0275text(94, "restart_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, " Clear cache and reload ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(96, "div", 47)(97, "h3", 48);
        \u0275\u0275text(98, "Results");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(99, RemoteDebugPanelComponent_Conditional_99_Template, 5, 0, "ul", 49);
        \u0275\u0275elementStart(100, "ol", 50);
        \u0275\u0275repeaterCreate(101, RemoteDebugPanelComponent_For_102_Template, 14, 11, "li", 51, _forTrack1, false, RemoteDebugPanelComponent_ForEmpty_103_Template, 2, 0, "li", 52);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.device_id(), " ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-success", ctx.online())("text-success-content", ctx.online())("bg-base-300", !ctx.online());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.online() ? "Online" : ctx.last_seen() ? "Offline" : "Not seen", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_5_0 = ctx.request()) ? 10 : -1, tmp_5_0);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_6_0 = ctx.device()) ? 11 : 12, tmp_6_0);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.level());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.levels);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.request() ? 22 : 23);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.filter());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.can_load_older());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.older_than() !== null ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.entries().length);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-secondary", !ctx.shown_level())("text-secondary-content", !ctx.shown_level());
        \u0275\u0275attribute("aria-pressed", !ctx.shown_level());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" All ", ctx.entries().length, " ");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.shown_levels);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" Showing ", ctx.shown_entries().length, " of ", ctx.entries().length, ", newest first. ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.older_than() !== null ? 40 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shown_entries());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.last_seen() && !ctx.online() ? 49 : -1);
        \u0275\u0275advance(27);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings_keys);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.settings_keys.trim());
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.navigate_path);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.navigate_path.startsWith("/"));
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.pending().length ? 99 : -1);
        \u0275\u0275advance(2);
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
        <div class="@container flex flex-col gap-3">
            <section
                device
                class="bg-base-100 border-base-300 flex flex-col gap-2 rounded-lg border px-4 py-3"
            >
                <div class="flex flex-wrap items-center gap-2">
                    <h2 class="font-mono text-lg font-medium">
                        {{ device_id() }}
                    </h2>
                    <button
                        icon
                        matRipple
                        type="button"
                        class="text-base"
                        title="Copy device ID"
                        aria-label="Copy device ID"
                        (click)="copyId()"
                    >
                        <icon>content_copy</icon>
                    </button>
                    <span
                        class="rounded-full px-2 py-0.5 text-xs"
                        [class.bg-success]="online()"
                        [class.text-success-content]="online()"
                        [class.bg-base-300]="!online()"
                        online-state
                    >
                        {{
                            online()
                                ? 'Online'
                                : last_seen()
                                  ? 'Offline'
                                  : 'Not seen'
                        }}
                    </span>
                    @if (request(); as active) {
                        <span
                            live
                            class="bg-info/15 flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs"
                        >
                            <span
                                class="bg-info size-2 animate-pulse rounded-full"
                            ></span>
                            Live logs at {{ active.level }}
                        </span>
                    }
                </div>
                @if (device(); as info) {
                    <dl
                        class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-x-4 gap-y-1 text-sm"
                    >
                        <div>
                            <dt class="text-xs opacity-60">App</dt>
                            <dd>{{ info.app }}</dd>
                        </div>
                        <div>
                            <dt class="text-xs opacity-60">Version</dt>
                            <dd>{{ info.version }} ({{ info.build }})</dd>
                        </div>
                        <div>
                            <dt class="text-xs opacity-60">Loaded</dt>
                            <dd>
                                {{ info.started_at | date: 'MMM d, h:mm a' }}
                            </dd>
                        </div>
                        @if (last_seen(); as seen) {
                            <div>
                                <dt class="text-xs opacity-60">Last seen</dt>
                                <dd [title]="seen | date: 'MMM d, h:mm:ss a'">
                                    {{ last_seen_text() }}
                                </dd>
                            </div>
                        }
                    </dl>
                    <p class="truncate text-xs opacity-60" [title]="info.url">
                        {{ info.url }}
                    </p>
                } @else {
                    <p class="text-sm opacity-70">
                        The driver has no details of this device yet. Request
                        logs or send a command to start.
                    </p>
                }
            </section>

            <div class="grid min-w-0 gap-3 @6xl:grid-cols-[3fr_2fr]">
                <section
                    logs
                    class="bg-base-100 border-base-300 flex min-w-0 flex-col self-start rounded-lg border"
                >
                    <div class="flex flex-wrap items-center gap-2 px-4 pt-3">
                        <h3 class="mr-auto font-medium">Logs</h3>
                        <mat-form-field
                            appearance="outline"
                            class="w-32"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                aria-label="Log level that the device sends"
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
                            title="Download logs"
                            aria-label="Download logs"
                            [disabled]="!entries().length"
                            (click)="downloadLogs()"
                        >
                            <icon>download</icon>
                        </button>
                    </div>
                    <div
                        shown-levels
                        role="group"
                        aria-label="Show entries of one level"
                        class="flex flex-wrap items-center gap-1 px-4 pb-2 text-xs"
                    >
                        <button
                            matRipple
                            type="button"
                            class="border-base-300 rounded-full border px-2 py-0.5"
                            [class.bg-secondary]="!shown_level()"
                            [class.text-secondary-content]="!shown_level()"
                            [attr.aria-pressed]="!shown_level()"
                            (click)="shown_level.set(null)"
                        >
                            All {{ entries().length }}
                        </button>
                        @for (option of shown_levels; track option) {
                            <button
                                matRipple
                                type="button"
                                class="border-base-300 rounded-full border px-2 py-0.5 uppercase"
                                [class]="
                                    shown_level() === option
                                        ? level_classes[option]
                                        : ''
                                "
                                [attr.aria-pressed]="shown_level() === option"
                                (click)="toggleShownLevel(option)"
                            >
                                {{ option }}
                                <span class="opacity-70">
                                    {{ level_counts()[option] }}
                                </span>
                            </button>
                        }
                        <span class="ml-auto opacity-60">
                            Showing {{ shown_entries().length }} of
                            {{ entries().length }}, newest first.
                            @if (older_than() !== null) {
                                Older than entry {{ older_than() }}.
                            }
                        </span>
                    </div>
                    <ol
                        class="border-base-300 max-h-[32rem] overflow-auto border-t font-mono text-xs @6xl:max-h-[48rem]"
                    >
                        @for (entry of shown_entries(); track entry.seq) {
                            <li
                                class="border-base-200 flex gap-2 border-b px-4 py-1"
                                [class]="row_classes[entry.level]"
                            >
                                <span class="shrink-0 opacity-60">
                                    {{ entry.timestamp | date: 'HH:mm:ss.SSS' }}
                                </span>
                                <span
                                    class="h-fit w-12 shrink-0 rounded px-1 text-center uppercase"
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
                                @if (entries().length) {
                                    No entry matches the filter
                                } @else if (request()) {
                                    Waiting for entries from the device
                                } @else {
                                    No log entries. Start live logs to get them
                                    from the device.
                                }
                            </li>
                        }
                    </ol>
                </section>

                <section
                    commands
                    class="bg-base-100 border-base-300 flex min-w-0 flex-col self-start rounded-lg border"
                >
                    <div class="flex flex-col gap-3 p-4">
                        <h3 class="font-medium">Commands</h3>
                        @if (last_seen() && !online()) {
                            <p
                                offline-note
                                class="bg-warning/10 flex items-start gap-2 rounded px-3 py-2 text-sm"
                            >
                                <icon class="text-warning text-lg">
                                    cloud_off
                                </icon>
                                The device is offline. Commands wait until it
                                connects again, or until the driver removes
                                them.
                            </p>
                        }
                        <div class="flex flex-col gap-2">
                            <h4
                                class="text-xs font-medium uppercase opacity-60"
                            >
                                Inspect
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="send('status')"
                                >
                                    <icon class="mr-1">info</icon>
                                    Status
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="send('snapshot')"
                                >
                                    <icon class="mr-1">photo_camera</icon>
                                    Snapshot
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    title="Short animation of the screen, as WebP"
                                    (click)="
                                        send('animation', { format: 'webp' })
                                    "
                                >
                                    <icon class="mr-1">animated_images</icon>
                                    Animation (WebP)
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    title="Short animation of the screen, as GIF"
                                    (click)="
                                        send('animation', { format: 'gif' })
                                    "
                                >
                                    <icon class="mr-1">gif_box</icon>
                                    Animation (GIF)
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="send('storage')"
                                >
                                    <icon class="mr-1">database</icon>
                                    Storage keys
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
                                    class="inverse"
                                    [disabled]="!settings_keys.trim()"
                                >
                                    Get settings
                                </button>
                            </form>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h4
                                class="text-xs font-medium uppercase opacity-60"
                            >
                                Change the device
                            </h4>
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
                                    class="inverse"
                                    [disabled]="!navigate_path.startsWith('/')"
                                >
                                    Open route
                                </button>
                            </form>
                            <div class="flex flex-wrap gap-2">
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse error"
                                    (click)="reload('reload')"
                                >
                                    <icon class="mr-1">refresh</icon>
                                    Reload app
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse error"
                                    (click)="reload('clear_cache')"
                                >
                                    <icon class="mr-1">restart_alt</icon>
                                    Clear cache and reload
                                </button>
                            </div>
                        </div>
                    </div>

                    <div results class="border-base-300 border-t">
                        <h3 class="px-4 pt-3 pb-2 font-medium">Results</h3>
                        @if (pending().length) {
                            <ul
                                pending
                                class="flex flex-wrap items-center gap-2 px-4 pb-3 text-sm"
                                aria-label="Waiting for the device"
                            >
                                @for (command of pending(); track command.id) {
                                    <li
                                        class="bg-base-200 flex items-center gap-1 rounded px-2 py-0.5"
                                    >
                                        <icon class="animate-spin text-base">
                                            progress_activity
                                        </icon>
                                        {{ command_labels[command.type] }}
                                    </li>
                                }
                                <li class="text-xs opacity-60">
                                    Waiting for the device
                                </li>
                            </ul>
                        }
                        <ol class="flex flex-col">
                            @for (item of shown_results(); track item.id) {
                                <li
                                    class="border-base-200 flex min-w-0 flex-col gap-2 border-t px-4 py-3"
                                >
                                    <div class="flex items-center gap-2">
                                        <icon
                                            class="text-xl"
                                            [class.text-success]="
                                                item.result.ok
                                            "
                                            [class.text-error]="!item.result.ok"
                                        >
                                            {{
                                                item.result.ok
                                                    ? 'check_circle'
                                                    : 'error'
                                            }}
                                        </icon>
                                        <span class="font-medium">
                                            {{ command_labels[item.type] }}
                                        </span>
                                        <span class="text-sm opacity-60">
                                            {{
                                                item.received_at
                                                    | date: 'MMM d, h:mm:ss a'
                                            }}
                                        </span>
                                    </div>
                                    @switch (item.view.kind) {
                                        @case ('error') {
                                            <pre
                                                class="text-error max-h-48 overflow-auto text-xs whitespace-pre-wrap"
                                                >{{ item.result.error }}</pre
                                            >
                                        }
                                        @case ('media') {
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <p
                                                    class="flex-1 text-sm opacity-70"
                                                >
                                                    {{ item.view.file.width }}
                                                    x
                                                    {{ item.view.file.height }},
                                                    {{ item.view.file.frames }}
                                                    {{
                                                        item.view.file
                                                            .frames === 1
                                                            ? 'frame'
                                                            : 'frames'
                                                    }},
                                                    {{
                                                        format_bytes(
                                                            item.view.file.bytes
                                                        )
                                                    }},
                                                    {{ item.view.file.mime }}
                                                </p>
                                                <button
                                                    icon
                                                    matRipple
                                                    type="button"
                                                    title="Save file"
                                                    aria-label="Save file"
                                                    (click)="
                                                        saveMedia(image, item)
                                                    "
                                                >
                                                    <icon>download</icon>
                                                </button>
                                            </div>
                                            <img
                                                #image
                                                auth
                                                class="border-base-300 max-h-[32rem] w-fit max-w-full rounded border object-contain"
                                                [source]="item.view.url"
                                                [alt]="
                                                    item.type +
                                                    ' of ' +
                                                    device_id()
                                                "
                                            />
                                        }
                                        @case ('status') {
                                            <dl
                                                status
                                                class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm"
                                            >
                                                @for (
                                                    row of item.view.rows;
                                                    track row.label
                                                ) {
                                                    <dt class="opacity-60">
                                                        {{ row.label }}
                                                    </dt>
                                                    <dd
                                                        class="min-w-0 break-words"
                                                        [class.text-error]="
                                                            row.warn
                                                        "
                                                    >
                                                        {{ row.value }}
                                                    </dd>
                                                }
                                            </dl>
                                            <details>
                                                <summary
                                                    class="cursor-pointer text-xs opacity-60"
                                                >
                                                    All data
                                                </summary>
                                                <pre
                                                    class="bg-base-200 mt-1 max-h-64 overflow-auto rounded p-2 text-xs"
                                                    >{{
                                                        item.result.data | json
                                                    }}</pre
                                                >
                                            </details>
                                        }
                                        @case ('storage') {
                                            <table
                                                storage
                                                class="w-full text-left text-xs"
                                            >
                                                <thead>
                                                    <tr class="opacity-60">
                                                        <th
                                                            class="py-1 font-normal"
                                                        >
                                                            Key
                                                        </th>
                                                        <th
                                                            class="py-1 text-right font-normal"
                                                        >
                                                            Characters
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @for (
                                                        storage of item.view
                                                            .items;
                                                        track storage.key
                                                    ) {
                                                        <tr
                                                            class="border-base-200 border-t"
                                                        >
                                                            <td
                                                                class="py-1 font-mono break-all"
                                                            >
                                                                {{
                                                                    storage.key
                                                                }}
                                                            </td>
                                                            <td
                                                                class="py-1 pl-2 text-right"
                                                            >
                                                                {{
                                                                    storage.length
                                                                        | number
                                                                }}
                                                            </td>
                                                        </tr>
                                                    } @empty {
                                                        <tr>
                                                            <td
                                                                class="py-1 opacity-60"
                                                            >
                                                                No keys
                                                            </td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        }
                                        @case ('data') {
                                            <pre
                                                class="bg-base-200 max-h-64 overflow-auto rounded p-2 text-xs"
                                                >{{
                                                    item.result.data | json
                                                }}</pre
                                            >
                                        }
                                    }
                                </li>
                            } @empty {
                                <li class="px-4 pb-6 text-center opacity-60">
                                    No results yet. Results of the commands show
                                    here.
                                </li>
                            }
                        </ol>
                    </div>
                </section>
            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugPanelComponent, { className: "RemoteDebugPanelComponent", filePath: "libs/components/src/lib/remote-debug-panel.component.ts", lineNumber: 761 });
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
function RemoteDebugComponent_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select a device in the list. ");
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Open shows ", ctx_r1.openable(), ". ");
  }
}
function RemoteDebugComponent_Conditional_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 22);
    \u0275\u0275listener("click", function RemoteDebugComponent_Conditional_11_For_14_Template_button_click_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(item_r5.id));
    });
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275element(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275text(7);
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
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind2(6, 12, item_r5.last_seen, "MMM d, h:mm:ss a"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r5.app, " \xB7 ", ctx_r1.seenText(item_r5), " ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No device matches. Select Open to send a request to this ID. ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No device is known yet. Fixed devices register when they start. Enter a device ID to send it a request. A device shows its ID on its setup screen. ");
  }
}
function RemoteDebugComponent_Conditional_11_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275conditionalCreate(1, RemoteDebugComponent_Conditional_11_ForEmpty_15_Conditional_1_Template, 1, 0)(2, RemoteDebugComponent_Conditional_11_ForEmpty_15_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.query().trim() ? 1 : 2);
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "remote-debug-panel", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("device_id", ctx_r1.device());
  }
}
function RemoteDebugComponent_Conditional_11_Conditional_18_Template(rf, ctx) {
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
      return \u0275\u0275resetView(ctx_r1.openQuery());
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
    \u0275\u0275conditionalCreate(10, RemoteDebugComponent_Conditional_11_Conditional_10_Template, 1, 0)(11, RemoteDebugComponent_Conditional_11_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 17);
    \u0275\u0275repeaterCreate(13, RemoteDebugComponent_Conditional_11_For_14_Template, 8, 15, "li", null, _forTrack02, false, RemoteDebugComponent_Conditional_11_ForEmpty_15_Template, 3, 1, "li", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "section", 19);
    \u0275\u0275conditionalCreate(17, RemoteDebugComponent_Conditional_11_Conditional_17_Template, 1, 1, "remote-debug-panel", 20)(18, RemoteDebugComponent_Conditional_11_Conditional_18_Template, 5, 0, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.query());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.openable());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.devices().length, " devices, ", ctx_r1.online_count(), " online. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shown().length < ctx_r1.matching().length ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.query().trim() && !ctx_r1.openable() ? 10 : ctx_r1.opens_other() ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.shown());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.device() ? 17 : 18);
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
    this.openable = computed(
      () => {
        const text = this.query().trim();
        if (!text || DEVICE_ID_FORMAT.test(text))
          return text;
        const matching = this.matching();
        const device = matching.find((_) => _.id.toLowerCase() === text.toLowerCase()) ?? (matching.length === 1 ? matching[0] : null);
        return device?.id ?? (matching.length ? "" : text);
      },
      ...ngDevMode ? [{ debugName: "openable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.opens_other = computed(
      () => !!this.openable() && this.openable().toLowerCase() !== this.query().trim().toLowerCase(),
      ...ngDevMode ? [{ debugName: "opens_other" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  openQuery() {
    this.open(this.openable());
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
  /** Time since the device last called the driver, such as `5 minutes ago` */
  seenText(device) {
    return remoteDebugSeenText(device.last_seen, this._view()?.now() ?? Date.now());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugComponent, selectors: [["app-remote-debug"]], decls: 12, vars: 4, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "min-w-0", "flex-1", "flex-col"], [1, "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], ["not-allowed", "", 1, "px-8", "py-4", "opacity-70"], ["role", "status", 1, "px-8", "py-4", "opacity-70"], ["missing", "", 1, "px-8", "py-4", "opacity-70"], [1, "flex", "items-center", "gap-4", "px-8", "py-4"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-4", "overflow-auto", "px-8", "pb-8", "lg:flex-row"], [1, "opacity-70"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], [1, "flex", "shrink-0", "flex-col", "gap-2", "lg:min-h-0", "lg:w-80"], [1, "flex", "items-center", "gap-2", 3, "ngSubmit"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "flex-1"], ["matInput", "", "name", "device", "placeholder", "Filter or enter a device ID", "aria-label", "Filter or enter a device ID", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], ["device-count", "", 1, "text-xs", "opacity-70"], ["aria-label", "Devices", 1, "bg-base-100", "border-base-300", "flex", "max-h-72", "min-h-0", "flex-col", "overflow-y-auto", "rounded-lg", "border", "lg:max-h-none"], [1, "px-4", "py-6", "text-sm", "opacity-70"], [1, "min-w-0", "flex-1"], [3, "device_id"], [1, "flex", "flex-col", "items-center", "gap-2", "p-8", "opacity-70"], ["matRipple", "", "type", "button", 1, "hover:bg-base-200", "flex", "w-full", "flex-col", "items-start", "px-4", "py-2", "text-left", 3, "click"], [1, "flex", "items-center", "gap-2", "font-mono"], ["role", "img", 1, "size-2", "shrink-0", "rounded-full"], [1, "text-xs", "opacity-70", 3, "title"], [1, "text-5xl"]], template: function RemoteDebugComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, RemoteDebugComponent_Conditional_7_Template, 2, 0, "p", 4)(8, RemoteDebugComponent_Conditional_8_Template, 2, 0, "p", 5)(9, RemoteDebugComponent_Conditional_9_Template, 5, 0, "p", 6)(10, RemoteDebugComponent_Conditional_10_Template, 5, 0, "div", 7)(11, RemoteDebugComponent_Conditional_11_Template, 19, 8, "div", 8);
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
                                (ngSubmit)="openQuery()"
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
                                    [disabled]="!openable()"
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
                                @if (query().trim() && !openable()) {
                                    Select a device in the list.
                                } @else if (opens_other()) {
                                    Open shows {{ openable() }}.
                                }
                            </p>
                            <ul
                                class="bg-base-100 border-base-300 flex max-h-72 min-h-0 flex-col overflow-y-auto rounded-lg border lg:max-h-none"
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
                                            <span
                                                class="text-xs opacity-70"
                                                [title]="
                                                    item.last_seen
                                                        | date
                                                            : 'MMM d, h:mm:ss a'
                                                "
                                            >
                                                {{ item.app }} \xB7
                                                {{ seenText(item) }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugComponent, { className: "RemoteDebugComponent", filePath: "apps/concierge/src/app/remote-debug/remote-debug.component.ts", lineNumber: 245 });
})();
export {
  RemoteDebugComponent,
  filterRemoteDebugDevices
};
//# debugId=f51e8a0b-94b0-5baf-926f-67fff61b6767
//# sourceMappingURL=remote-debug.component-MXO54HED.js.map
