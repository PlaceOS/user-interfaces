import {
  deviceId
} from "./chunk-GLALPF4J.js";
import {
  initialisationComplete
} from "./chunk-AFYKOL5T.js";
import {
  AsyncHandler,
  Jp,
  Mt,
  Pn,
  Un,
  log,
  settingSignal,
  xi
} from "./chunk-PENRKMX6.js";
import {
  getNativeSystemId,
  syncNativeManagedConfig
} from "./chunk-S7SHZHBQ.js";
import {
  Injectable,
  computed,
  effect,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-VFKE6X37.js";

// apps/booking-panel/src/app/remote-setup-target.ts
var BOOKING_STORE_KEY = "PLACEOS.BOOKINGS.system";
var EVENT_KEY = "PLACEOS.Bookings.event";
function bookingRemoteSetup(router) {
  return {
    app: "booking-panel",
    default_path: "/concierge/#/remote-setup",
    system_id: () => localStorage.getItem(BOOKING_STORE_KEY),
    apply: (config) => {
      if (!(config == null ? void 0 : config.event_view))
        localStorage.removeItem(EVENT_KEY);
      const query = !config ? { clear: true } : config.event_view ? { system_id: config.system_id, event: true } : { system_id: config.system_id };
      return router.navigate(["/bootstrap"], { queryParams: query });
    }
  };
}

// libs/common/src/lib/remote-setup.ts
var REMOTE_SETUP_MOCK_SYSTEM = "sys-remote-setup";
var REMOTE_SETUP_MODULE = "RemoteSetup";
var REMOTE_SETUP_CLEAR_LIST = "clear_list";
var REMOTE_SETUP_CLEAR_SYSTEMS = "clear_systems";
var HEARTBEAT_MS = 15 * 60 * 1e3;
var REGISTER_SPREAD_MS = 10 * 1e3;
var LAST_COMMAND_KEY = "PLACEOS.remote_setup.last_command";
var CLEAR_STATE_KEY = "PLACEOS.remote_setup.clear_systems";
var MAX_HANDLED_CLEARS = 20;
var MAX_SYSTEM_CLEARS = 1e3;
function remoteSetupModule() {
  var _a, _b;
  const config = (_b = (_a = Mt()) == null ? void 0 : _a.config) == null ? void 0 : _b["remote_setup"];
  const system_id = (config == null ? void 0 : config.system_id) || (Un() ? REMOTE_SETUP_MOCK_SYSTEM : "");
  if (!system_id)
    return null;
  return Jp(`${system_id}`, `${(config == null ? void 0 : config.module) || REMOTE_SETUP_MODULE}`);
}
function remoteSetupCommandBinding(device_id) {
  return `device_${device_id}`;
}
function isRemoteSetupCommand(value) {
  var _a;
  if (!value || typeof value !== "object")
    return false;
  const command = value;
  if (typeof command.id !== "string" || !command.id)
    return false;
  const system_id = (_a = command.config) == null ? void 0 : _a.system_id;
  return typeof system_id === "string" && !!system_id;
}
function remoteSetupClearList(value) {
  return Array.isArray(value) ? value.filter((id) => typeof id === "string") : [];
}
function remoteSetupClearSystems(value) {
  if (!Array.isArray(value))
    return [];
  return value.filter((entry) => !!entry && typeof entry === "object" && typeof entry.id === "string" && typeof entry.app === "string" && typeof entry.system_id === "string" && !!entry.system_id);
}
var _RemoteSetupService = class _RemoteSetupService extends AsyncHandler {
  constructor() {
    super();
    this._target = signal(
      null,
      ...ngDevMode ? [{ debugName: "_target" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._connected = signal(
      false,
      ...ngDevMode ? [{ debugName: "_connected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._setup_screens = signal(
      0,
      ...ngDevMode ? [{ debugName: "_setup_screens" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._url_setting = settingSignal("remote_setup_url", "");
    this._module = null;
    this._clearing = false;
    this.device_id = deviceId();
    this.available = computed(
      () => !!this._target() && this._connected(),
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setup_url = computed(
      () => {
        const target = this._target();
        if (!target)
          return "";
        const base = this._url_setting() || `${xi() ? "https" : "http"}://${Pn()}${target.default_path}`;
        const separator = base.includes("?") ? "&" : "?";
        return `${base}${separator}device=${encodeURIComponent(this.device_id)}`;
      },
      ...ngDevMode ? [{ debugName: "setup_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const target = this._target();
      if (!target || !initialisationComplete()())
        return;
      untracked(() => this._connect());
    });
    effect(() => {
      const register = this.available() && this._setup_screens() > 0;
      untracked(() => register ? this._startRegister() : this._stopRegister());
    });
  }
  /** Listen for remote setup commands for this application */
  start(target) {
    this._target.set(target);
  }
  /**
   * Tell the service that a setup screen shows. The device registers while
   * a setup screen shows. Call the returned function when it closes.
   */
  showSetupScreen() {
    this._setup_screens.update((count) => count + 1);
    let closed = false;
    return () => {
      if (closed)
        return;
      closed = true;
      this._setup_screens.update((count) => count - 1);
    };
  }
  async _connect() {
    await syncNativeManagedConfig();
    if (getNativeSystemId()) {
      log("RemoteSetup", "System is set by MDM managed config");
      return;
    }
    const mod = remoteSetupModule();
    if (!mod) {
      log("RemoteSetup", "No remote setup system on this domain");
      return;
    }
    this._module = mod;
    this.subscription("connected", mod.variable("connected").bindThenSubscribe((value) => this._connected.set(value === true)));
    this.subscription("command", mod.variable(remoteSetupCommandBinding(this.device_id)).bindThenSubscribe((value) => this._applyCommand(value)));
    this.subscription("clear", mod.variable(REMOTE_SETUP_CLEAR_LIST).bindThenSubscribe((value) => this._applyClearList(value)));
    this.subscription("clear_systems", mod.variable(REMOTE_SETUP_CLEAR_SYSTEMS).bindThenSubscribe((value) => this._applyClearSystems(value)));
  }
  /**
   * Register after a random wait, then again at each heartbeat. The random
   * wait also sets when the heartbeat occurs, so the heartbeats of devices
   * that start at the same time stay spread.
   */
  _startRegister() {
    this.timeout("register", () => {
      this._register();
      this.interval("heartbeat", () => this._register(), HEARTBEAT_MS);
    }, Math.random() * REGISTER_SPREAD_MS);
  }
  _stopRegister() {
    this.clearTimeout("register");
    this.clearInterval("heartbeat");
  }
  /** Add this device to the devices that wait for setup */
  _register() {
    const target = this._target();
    if (!this._module || !target)
      return;
    this._module.execute("register", [this.device_id, target.app]).catch((error) => log("RemoteSetup", "Failed to register", error, "warn"));
  }
  /**
   * Apply a configure command from the driver once, then tell the driver
   * it is complete. The command ID is saved first, so a reload during the
   * change does not apply the command again. A failed command is not
   * completed. A failed `complete` call is not sent again. The driver
   * removes stale commands in both cases.
   */
  async _applyCommand(value) {
    const target = this._target();
    if (!target || !this._module || !isRemoteSetupCommand(value))
      return;
    if (localStorage.getItem(LAST_COMMAND_KEY) === value.id)
      return;
    localStorage.setItem(LAST_COMMAND_KEY, value.id);
    log("RemoteSetup", "Applying configure command", value);
    if (!await this._apply(target, value.config))
      return;
    await this._module.execute("complete", [this.device_id, value.id, target.app]).catch((error) => log("RemoteSetup", "Failed to complete command", error, "warn"));
  }
  /**
   * Clear the device when its ID is in the clear list. The driver removes
   * the ID when the device registers from its setup screen. Thus a device
   * that shows its setup screen is already clear.
   */
  async _applyClearList(value) {
    if (!remoteSetupClearList(value).includes(this.device_id))
      return;
    await this._clear();
  }
  /**
   * Clear the device when an entry in the clear systems list has its app
   * and system. An entry applies only when it arrives after the device got
   * its system: when the system changes, the entries that the device saw
   * before the change are handled without a clear. The device also
   * applies each entry one time only. The driver removes the entries after
   * a time limit.
   */
  async _applyClearSystems(value) {
    const target = this._target();
    if (!target)
      return;
    const system_id = target.system_id() || null;
    const entries = remoteSetupClearSystems(value).filter((item) => item.app === target.app);
    const matching = entries.filter((item) => !!system_id && item.system_id === system_id);
    const last = readClearState();
    const handled = (last == null ? void 0 : last.handled) ?? [];
    if (!last || last.system_id !== system_id) {
      const before = last ? last.seen : entries.map((item) => item.id);
      for (const item of matching) {
        if (before.includes(item.id))
          handled.push(item.id);
      }
    }
    const entry = matching.find((item) => !handled.includes(item.id));
    if (entry)
      handled.push(entry.id);
    saveClearState({
      system_id,
      seen: entries.map((item) => item.id).slice(-MAX_SYSTEM_CLEARS),
      handled: handled.slice(-MAX_HANDLED_CLEARS)
    });
    if (entry)
      await this._clear();
  }
  /** Clear the configuration on this device, when it is set up */
  async _clear() {
    const target = this._target();
    if (!target || this._clearing || this._setup_screens() > 0)
      return;
    log("RemoteSetup", "Clearing the device configuration");
    this._clearing = true;
    await this._apply(target, null);
    this._clearing = false;
  }
  /** Apply a change. Resolves `true` when the change went through */
  async _apply(target, config) {
    try {
      return await target.apply(config) !== false;
    } catch (error) {
      log("RemoteSetup", "Failed to apply change", error, "warn");
      return false;
    }
  }
};
_RemoteSetupService.\u0275fac = function RemoteSetupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RemoteSetupService)();
};
_RemoteSetupService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteSetupService, factory: _RemoteSetupService.\u0275fac, providedIn: "root" });
var RemoteSetupService = _RemoteSetupService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteSetupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
function readClearState() {
  try {
    const state = JSON.parse(localStorage.getItem(CLEAR_STATE_KEY) || "null");
    if (!state || typeof state !== "object")
      return null;
    return {
      system_id: typeof state.system_id === "string" ? state.system_id : null,
      seen: remoteSetupClearList(state.seen),
      handled: remoteSetupClearList(state.handled)
    };
  } catch {
    return null;
  }
}
function saveClearState(state) {
  try {
    localStorage.setItem(CLEAR_STATE_KEY, JSON.stringify(state));
  } catch {
  }
}

export {
  REMOTE_SETUP_MOCK_SYSTEM,
  REMOTE_SETUP_MODULE,
  remoteSetupCommandBinding,
  RemoteSetupService,
  BOOKING_STORE_KEY,
  EVENT_KEY,
  bookingRemoteSetup
};
//# debugId=01bed184-2755-58fa-b095-4b88a2553743
//# sourceMappingURL=chunk-6NV2JAIN.js.map
