import {
  AsyncHandler,
  Dd,
  Injectable,
  log,
  randomInt,
  randomString,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-R2LYFJMM.js";

// libs/common/src/lib/remote-logging.service.ts
function hookMethod(rootObject, functionToHook, hookingFunction) {
  var previousFunction = rootObject[functionToHook];
  rootObject[functionToHook] = (...args) => {
    hookingFunction(args);
    previousFunction.call(rootObject, ...args);
  };
  return previousFunction;
}
var DEVICE_ID = localStorage.getItem("PLACEOS.DEVICE_ID") || `DEV-${randomString(8)}`;
var _RemoteLoggingService = class _RemoteLoggingService extends AsyncHandler {
  setMetadata(metadata) {
  }
  constructor() {
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
    localStorage.setItem("PLACEOS.DEVICE_ID", DEVICE_ID);
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

export {
  RemoteLoggingService
};
//# debugId=4715f67e-0c79-50ae-a7ab-f30a3622c161
//# sourceMappingURL=chunk-5Z4GTOZ2.js.map
