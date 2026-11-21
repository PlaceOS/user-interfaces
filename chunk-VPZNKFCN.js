import {
  deviceId
} from "./chunk-GLALPF4J.js";
import {
  scrubSecrets
} from "./chunk-EFS3HJSX.js";
import {
  AsyncHandler,
  Jp,
  log,
  randomInt
} from "./chunk-O3AU4RLV.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-BHPAVDM2.js";

// libs/common/src/lib/remote-logging.service.ts
function hookMethod(rootObject, functionToHook, hookingFunction) {
  var previousFunction = rootObject[functionToHook];
  rootObject[functionToHook] = (...args) => {
    hookingFunction(args);
    previousFunction.call(rootObject, ...args);
  };
  return previousFunction;
}
function scrubbedCopy(event) {
  try {
    return scrubSecrets(JSON.parse(JSON.stringify(event)));
  } catch {
    return null;
  }
}
var RemoteLoggingService = class _RemoteLoggingService extends AsyncHandler {
  setMetadata(_metadata) {
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
      hookMethod(console, key, (...args) => untracked(() => this._handleEvent(key, args)));
    }
  }
  _handleEvent(type, data, event_type = "console") {
    if (this._disable_handling)
      return;
    const blob = [...data[0]];
    if (typeof blob[0] === "string" && blob[0].includes("[Logger]"))
      return;
    blob[0] = typeof blob[0] === "string" ? blob[0].replace(/\%c/g, "") : blob[0];
    const event = {
      id: `${event_type}-${randomInt(9999999999)}`,
      device_id: deviceId(),
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
    const sent = scrubbedCopy(event);
    if (!sent)
      return;
    this._disable_handling = true;
    Jp(system_id, "Logger").execute("post_event", [sent]).catch().finally(() => this._disable_handling = false);
  }
  /** List to binding */
  _bindTo(id, name, mod = "Logger") {
    const module = Jp(id, mod).variable(name);
    this.subscription(`bind:${name}`, module.bind());
    this.subscription(`listen:${name}`, module.listen().subscribe((enabled) => {
      this._logging_system.set(enabled ? id : "");
    }));
  }
  static {
    this.\u0275fac = function RemoteLoggingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteLoggingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteLoggingService, factory: _RemoteLoggingService.\u0275fac, providedIn: "root" });
  }
};
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
//# debugId=ee1b60f8-75a8-5196-8146-da23357712ff
//# sourceMappingURL=chunk-VPZNKFCN.js.map
