import {
  Hu,
  J,
  Jp,
  _c,
  ah,
  constructFrom,
  format,
  getItemWithKeys,
  i18n,
  isSameDay,
  log,
  mc,
  notifyInfo,
  randomInt,
  randomString,
  setAppName,
  to,
  toDate,
  uh,
  unique,
  uo
} from "./chunk-5AOQ34DQ.js";
import {
  Router
} from "./chunk-D2JGUGS5.js";
import {
  BehaviorSubject,
  ErrorHandler,
  Injectable,
  Subscription,
  Title,
  catchError,
  combineLatest,
  computed,
  defer,
  effect,
  inject,
  map,
  of,
  retry,
  setClassMetadata,
  signal,
  timer,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-5SPB2BCN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GLT7DQUO.js";

// node_modules/date-fns/getUnixTime.js
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// libs/common/src/lib/async-handler.class.ts
var AsyncHandler = class _AsyncHandler {
  constructor() {
    this._timers = {};
    this._intervals = {};
    this._subscriptions = {};
    this._initialised = new BehaviorSubject(false);
    this.initialised = this._initialised.asObservable();
  }
  /** Whether the object has been initialised */
  get is_initialised() {
    return this._initialised.getValue();
  }
  ngOnDestroy() {
    this.destroy();
  }
  destroy() {
    for (const key in this._timers) {
      if (key in this._timers)
        this.clearTimeout(key);
    }
    for (const key in this._intervals) {
      if (key in this._intervals)
        this.clearInterval(key);
    }
    for (const key in this._subscriptions) {
      if (key in this._subscriptions)
        this.unsub(key);
    }
  }
  /**
   * Creates a named timer
   * @param name Name of the timer
   * @param fn Callback function for the timer
   * @param delay Callback delay
   */
  timeout(name, fn, delay = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearTimeout(name);
      this._timers[name] = setTimeout(() => {
        fn();
        delete this._timers[name];
      }, delay);
    } else {
      throw new Error(name ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback");
    }
  }
  /**
   * Clears the named timer
   * @param name Timer name
   */
  clearTimeout(name) {
    if (this._timers[name]) {
      clearTimeout(this._timers[name]);
      delete this._timers[name];
    }
  }
  /**
   * Creates a named interval
   * @param name Name of the interval
   * @param fn Callback function for the interval
   * @param delay Callback delay
   */
  interval(name, fn, delay = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearInterval(name);
      this._intervals[name] = setInterval(() => fn(), delay);
    } else {
      throw new Error(name ? "Cannot create named interval without a name" : "Cannot create a interval without a callback");
    }
  }
  /**
   * Clears the named interval
   * @param name Timer name
   */
  clearInterval(name) {
    if (this._intervals[name]) {
      clearInterval(this._intervals[name]);
      delete this._intervals[name];
    }
  }
  /**
   * Store named subscription
   * @param name Name of the subscription
   * @param unsub Unsubscribe callback or Subscription object
   */
  subscription(name, unsub) {
    this.unsub(name);
    this._subscriptions[name] = unsub;
  }
  hasSubscription(name) {
    return this._subscriptions[name] instanceof Subscription || !!this._subscriptions[name];
  }
  /**
   * Call unsubscribe callback with the given name
   * @param name
   */
  unsub(name) {
    if (!(name in this._subscriptions) || !this._subscriptions[name]) {
      return;
    }
    "unsubscribe" in this._subscriptions[name] ? this._subscriptions[name].unsubscribe() : this._subscriptions[name]();
    this._subscriptions[name] = null;
  }
  /** Unsubscribe to the items with names containing the given string */
  unsubWith(contains) {
    const subs = Object.keys(this._subscriptions).filter((k) => k.includes(contains));
    subs.forEach((k) => this.unsub(k));
  }
  static {
    this.\u0275fac = function AsyncHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsyncHandler)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsyncHandler, factory: _AsyncHandler.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}

// libs/common/src/lib/hotkeys.service.ts
var INVALID_STANDALONE_KEYS = [
  "control",
  "shift",
  "alt",
  "meta",
  "os"
];
var HotkeysService = class _HotkeysService {
  constructor() {
    this.keydown_states = {};
    this.keydown_callbacks = {};
    this.combo_end = [];
    this.registered_combos = [];
    this.counter = 0;
    window.addEventListener("keydown", (event) => {
      if (document.getSelection()?.type === "Range" || this.isEditableElementFocused()) {
        return;
      }
      const code = this.mapKey((event.code || "").toLowerCase());
      if (this.last_down !== code) {
        if (!this.keydown_states[code]) {
          this.keydown_states[code] = signal(null);
        }
        this.keydown_states[code].set(++this.counter);
        this._handleKeyPress(code, this.counter);
        if (this.combo_end.indexOf(code) >= 0) {
          event.preventDefault();
        }
        this.last_down = code;
      }
    });
    window.addEventListener("keyup", (event) => {
      const code = this.mapKey((event.code || "").toLowerCase());
      this.keydown_states[code]?.set(null);
      if (this.last_down === code) {
        this.last_down = null;
      }
    });
  }
  /**
   * Listen to the given key combination
   * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
   * @param next Callback for combination presses
   */
  listen(combo, next) {
    combo = combo instanceof Array ? combo : combo.split("+");
    const combination = combo.map((i) => this.mapKey(i.toLowerCase()));
    if (combination.length > 0 && this.validCombination(combination)) {
      this.registered_combos.push(combination);
      const last_key = combination[combination.length - 1];
      if (!this.keydown_states[last_key]) {
        this.keydown_states[last_key] = signal(null);
      }
      this.updateCombinationEndList();
      const callback = (count) => {
        if (count) {
          const presses = [];
          if (combination.length > 0) {
            for (const key of combination) {
              const state = this.keydown_states[key];
              presses.push(state ? state() || -1 : -1);
            }
            for (let i = 0; i < combination.length - 1; i++) {
              if (presses[i] > presses[i + 1]) {
                return;
              }
            }
          }
          const total = presses.reduce((a, v) => a + (v > 0 ? 1 : -1), 0);
          if (total >= combination.length) {
            next();
          }
        }
      };
      this.keydown_callbacks[last_key] ||= /* @__PURE__ */ new Set();
      this.keydown_callbacks[last_key].add(callback);
      return {
        unsubscribe: () => this.keydown_callbacks[last_key]?.delete(callback)
      };
    }
    return null;
  }
  _handleKeyPress(code, count) {
    for (const callback of this.keydown_callbacks[code] || []) {
      callback(count);
    }
  }
  /** Check if keyboard input should remain with the focused editor. */
  isEditableElementFocused() {
    const active = document.activeElement;
    if (!active)
      return false;
    const tag_name = active.tagName.toLowerCase();
    return tag_name === "input" || tag_name === "textarea" || active.getAttribute("contenteditable") === "true" || !!active.closest(".monaco-editor");
  }
  /**
   * Map key codes with multiple versions to simple form
   * @param code Code to transform
   */
  mapKey(code) {
    if (code.indexOf("alt") >= 0 || code.indexOf("shift") >= 0 || code.indexOf("control") >= 0) {
      return code.replace("left", "").replace("right", "");
    }
    return code;
  }
  /**
   * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
   */
  updateCombinationEndList() {
    const key_list = [];
    for (const combo of this.registered_combos) {
      this.combo_end.push(combo[combo.length - 1]);
    }
    this.combo_end = unique(key_list);
  }
  /**
   * Checks if the given hotkey combination is allowed and valid
   * @param combo Array of key codes
   */
  validCombination(combo) {
    let non_meta = 0;
    for (const key of combo) {
      if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
        non_meta++;
      }
    }
    return non_meta > 0;
  }
  static {
    this.\u0275fac = function HotkeysService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HotkeysService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HotkeysService, factory: _HotkeysService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotkeysService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/native-app.ts
var DOMAIN_STORAGE_KEY = "PlaceOS.native.domain";
var EMAIL_STORAGE_KEY = "PlaceOS.native.email";
var API_KEY_STORAGE_KEY = "PlaceOS.native.api_key";
var SYSTEM_ID_STORAGE_KEY = "PlaceOS.native.system_id";
var MANAGED_CONFIG_STORAGE_KEY = "PlaceOS.native.managed_config";
var APP_ID_STORAGE_KEY = "PlaceOS.native.app_id";
var LAST_AUTH_URL_STORAGE_KEY = "PlaceOS.native.last_auth_url";
var CONSUMED_AUTH_URL_STORAGE_KEY = "PlaceOS.native.consumed_auth_url";
var PKCE_STORAGE_KEY = "PlaceOS.native.pkce";
var AUTH_ERROR_STORAGE_KEY = "PlaceOS.native.auth_error";
var LOOKUP_HOST = "au.placeos.run";
var NATIVE_CALL_TIMEOUT_MS = 10 * 1e3;
var NATIVE_APP_IDS = {
  workplace: "com.placeos.workplace",
  staff: "com.placeos.workplace",
  control: "com.placeos.control",
  bookings: "com.placeos.booking.panel",
  "booking panel": "com.placeos.booking.panel"
};
var _native_url_listener = null;
function boundedNativeCall(promise) {
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("Native plugin call timed out.")), NATIVE_CALL_TIMEOUT_MS);
    promise.then((value) => {
      clearTimeout(timer2);
      resolve(value);
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}
function capacitor() {
  return window.Capacitor || null;
}
function nativePluginProxy(name) {
  const cap = capacitor();
  if (cap?.Plugins?.[name])
    return cap.Plugins[name];
  try {
    return cap?.registerPlugin?.(name) || null;
  } catch {
    return null;
  }
}
function listenToNativeEvent(plugin_name, event_name, listener) {
  const proxy = nativePluginProxy(plugin_name);
  if (proxy?.addListener) {
    return boundedNativeCall(Promise.resolve(proxy.addListener(event_name, listener)));
  }
  const cap = capacitor();
  if (cap?.addListener) {
    return boundedNativeCall(Promise.resolve(cap.addListener(plugin_name, event_name, listener)));
  }
  return null;
}
function callNativeMethod(plugin_name, method_name, options) {
  const proxy = nativePluginProxy(plugin_name);
  if (typeof proxy?.[method_name] === "function") {
    return boundedNativeCall(Promise.resolve(proxy[method_name](options)));
  }
  const cap = capacitor();
  if (cap?.nativePromise) {
    return boundedNativeCall(cap.nativePromise(plugin_name, method_name, options));
  }
  return null;
}
function isNativeApp() {
  return !!capacitor()?.isNativePlatform?.();
}
async function getNativeAppId(app_name) {
  const normalised_name = `${app_name || ""}`.trim().toLowerCase();
  const app_id = NATIVE_APP_IDS[normalised_name];
  if (app_id) {
    localStorage.setItem(APP_ID_STORAGE_KEY, app_id);
    return app_id;
  }
  const cached_app_id = localStorage.getItem(APP_ID_STORAGE_KEY);
  if (!cached_app_id) {
    throw new Error(`Unsupported native app: ${app_name || "unknown"}.`);
  }
  return cached_app_id;
}
async function getNativeRedirectUri(app_name, domain) {
  const app_id = await getNativeAppId(app_name);
  const host = `${domain || ""}`.trim();
  return host ? `${app_id}://${host}/oauth-resp` : `${app_id}://oauth-resp`;
}
async function isNativeAuthRedirect(url) {
  const app_id = await getNativeAppId();
  const callback_url = new URL(url);
  return callback_url.protocol === `${app_id}:` && (callback_url.pathname === "/oauth-resp" || callback_url.hostname === "oauth-resp" && !callback_url.pathname.replace(/^\/+/, ""));
}
async function bindNativeAuthRedirects(listener) {
  if (!isNativeApp() || _native_url_listener)
    return;
  const handle = listenToNativeEvent("App", "appUrlOpen", async ({ url }) => {
    try {
      if (!url)
        return;
      console.warn(`[AUTH] App opened with URL: ${url.split(/[?#]/)[0]}`);
      if (!await isNativeAuthRedirect(url)) {
        console.warn("[AUTH] URL is not an auth redirect.");
        return;
      }
      localStorage.setItem(LAST_AUTH_URL_STORAGE_KEY, url);
      listener(url);
    } catch (error) {
      console.warn("[AUTH] Error handling app URL.", error);
    }
  });
  if (!handle) {
    console.warn("[AUTH] Capacitor App plugin is unavailable.");
    return;
  }
  _native_url_listener = handle;
  await handle.catch((error) => {
    _native_url_listener = null;
    console.warn("[AUTH] Failed to listen for app URLs.", error);
  });
}
function markNativeAuthRedirectConsumed(url) {
  localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
  localStorage.removeItem(LAST_AUTH_URL_STORAGE_KEY);
}
async function consumeNativeAuthRedirect() {
  if (!isNativeApp())
    return null;
  const launch_url = await callNativeMethod("App", "getLaunchUrl")?.catch(() => null);
  const url = launch_url?.url || localStorage.getItem(LAST_AUTH_URL_STORAGE_KEY) || "";
  if (!url)
    return null;
  const is_redirect = await isNativeAuthRedirect(url).catch((error) => {
    console.warn("[AUTH] Error checking launch URL.", error);
    return false;
  });
  if (!is_redirect)
    return null;
  if (url === localStorage.getItem(CONSUMED_AUTH_URL_STORAGE_KEY)) {
    console.warn("[AUTH] Launch URL already consumed.");
    return null;
  }
  console.warn("[AUTH] Consuming auth redirect from launch URL.");
  return url;
}
function storeNativePkceVerifier(key, verifier) {
  sessionStorage.setItem(key, verifier);
  localStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify({ key, verifier }));
}
function restoreNativePkceVerifier() {
  const raw = localStorage.getItem(PKCE_STORAGE_KEY);
  if (!raw)
    return;
  try {
    const { key, verifier } = JSON.parse(raw);
    if (key && verifier && !sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, verifier);
    }
  } catch {
    localStorage.removeItem(PKCE_STORAGE_KEY);
  }
}
function clearNativePkceVerifier() {
  localStorage.removeItem(PKCE_STORAGE_KEY);
}
function setNativeAuthError(message) {
  localStorage.setItem(AUTH_ERROR_STORAGE_KEY, message);
}
function consumeNativeAuthError() {
  const message = localStorage.getItem(AUTH_ERROR_STORAGE_KEY) || "";
  localStorage.removeItem(AUTH_ERROR_STORAGE_KEY);
  return message;
}
async function hideNativeStatusBar() {
  if (!isNativeApp())
    return;
  await callNativeMethod("StatusBar", "setOverlaysWebView", {
    overlay: true
  })?.catch(() => null);
  await callNativeMethod("StatusBar", "hide", { animation: "NONE" })?.catch(() => null);
}
async function closeNativeBrowser() {
  await callNativeMethod("Browser", "close")?.catch(() => null);
}
async function openNativeBrowser(url) {
  const opened = callNativeMethod("Browser", "open", { url });
  if (!opened) {
    location.assign(url);
    return;
  }
  await opened.catch(() => location.assign(url));
}
function getNativeDomain() {
  return localStorage.getItem(DOMAIN_STORAGE_KEY);
}
function getNativeEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY);
}
function setNativeDomain(domain) {
  localStorage.setItem(DOMAIN_STORAGE_KEY, domain.trim());
}
function setNativeEmail(email) {
  localStorage.setItem(EMAIL_STORAGE_KEY, email.trim());
}
function clearNativeDomain() {
  localStorage.removeItem(DOMAIN_STORAGE_KEY);
}
function getNativeApiKey() {
  return localStorage.getItem(API_KEY_STORAGE_KEY);
}
function setNativeApiKey(api_key) {
  const value = `${api_key || ""}`.trim();
  if (!value)
    return clearNativeApiKey();
  localStorage.setItem(API_KEY_STORAGE_KEY, value);
}
function clearNativeApiKey() {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
}
function normaliseNativeDomain(address) {
  let value = `${address || ""}`.trim();
  if (!value)
    return "";
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value))
    value = `https://${value}`;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:")
      return "";
    if (!url.hostname)
      return "";
    return url.port ? `${url.hostname}:${url.port}` : url.hostname;
  } catch {
    return "";
  }
}
async function readManagedValue(method_name, key) {
  const result = callNativeMethod("ManagedConfigurations", method_name, {
    key
  });
  if (!result)
    return null;
  const { value } = await result.catch(() => ({ value: null }));
  return value ?? null;
}
async function loadNativeManagedConfig() {
  if (!isNativeApp())
    return null;
  const [domain_name, api_key, system_id, restart_time, restart_enabled, skip_setup] = await Promise.all([
    readManagedValue("getString", "domainName"),
    readManagedValue("getString", "apiKey"),
    readManagedValue("getString", "systemId"),
    readManagedValue("getNumber", "restartTime"),
    readManagedValue("getBoolean", "restartEnabled"),
    readManagedValue("getBoolean", "skipInteractiveSetup")
  ]);
  const domain = normaliseNativeDomain(`${domain_name || ""}`);
  if (!domain && !api_key && !system_id)
    return null;
  return {
    domain,
    api_key: `${api_key || ""}`.trim(),
    system_id: `${system_id || ""}`.trim(),
    restart_enabled: restart_enabled !== false,
    restart_time: Math.min(23, Math.max(0, Math.round(restart_time || 0))),
    skip_interactive_setup: skip_setup === true
  };
}
function applyNativeManagedConfig(config) {
  const fingerprint = JSON.stringify([
    config.domain,
    config.api_key,
    config.system_id
  ]);
  if (localStorage.getItem(MANAGED_CONFIG_STORAGE_KEY) === fingerprint) {
    return false;
  }
  if (config.domain) {
    setNativeDomain(config.domain);
    setNativeApiKey(config.api_key);
  }
  if (config.system_id) {
    localStorage.setItem(SYSTEM_ID_STORAGE_KEY, config.system_id);
  } else {
    localStorage.removeItem(SYSTEM_ID_STORAGE_KEY);
  }
  localStorage.setItem(MANAGED_CONFIG_STORAGE_KEY, fingerprint);
  return true;
}
var _managed_config_sync = null;
function syncNativeManagedConfig() {
  if (!_managed_config_sync) {
    _managed_config_sync = loadNativeManagedConfig().then((config) => ({
      config,
      changed: config ? applyNativeManagedConfig(config) : false
    })).catch(() => ({ config: null, changed: false }));
  }
  return _managed_config_sync;
}
var _restart_timer = null;
function scheduleNativeRestart(hour) {
  if (!isNativeApp() || _restart_timer)
    return;
  const next = /* @__PURE__ */ new Date();
  next.setHours(hour, 0, 0, 0);
  if (next.valueOf() <= Date.now())
    next.setDate(next.getDate() + 1);
  _restart_timer = setTimeout(() => location.reload(), next.valueOf() - Date.now());
}
var DEFAULT_INTUNE_SCOPES = ["User.Read"];
async function getIntuneAccount() {
  if (!isNativeApp())
    return null;
  const result = await callNativeMethod("IntuneMAM", "enrolledAccount")?.catch(() => null);
  return result?.accountId ? result : null;
}
async function getIntuneToken(account, scopes = DEFAULT_INTUNE_SCOPES) {
  const result = await callNativeMethod("IntuneMAM", "acquireTokenSilent", {
    scopes,
    accountId: account.accountId
  })?.catch(() => null);
  return `${result?.accessToken || ""}`.trim();
}
async function lookupNativeDomainByEmail(email) {
  const controller = new AbortController();
  const timer2 = setTimeout(() => controller.abort(), NATIVE_CALL_TIMEOUT_MS);
  const response = await fetch(`https://${LOOKUP_HOST}/api/engine/v2/domains/lookup/${encodeURIComponent(email)}`, { signal: controller.signal }).finally(() => clearTimeout(timer2));
  if (!response.ok) {
    throw new Error("Unable to lookup domain.");
  }
  const text = (await response.text()).trim();
  const domain = text.startsWith('"') ? JSON.parse(text) : text;
  if (!domain) {
    throw new Error("No domain found for this email.");
  }
  return `${domain}`.trim();
}

// libs/common/src/lib/settings.ts
var app = {
  name: "Signage Manager",
  short_name: "Signage Manager",
  /** Group subsystem this app's permissions are granted through */
  access_subsystem: "signage",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  show_locale_selector: false,
  show_group_selector: false,
  show_media_group_tabs: false,
  schedule_timezone_once_only: true,
  media_allow_extended_video_codecs: false,
  /** Signage features for every group. Groups can narrow this list. */
  features: [
    "templates",
    "template-editing",
    "ai-generation",
    "ai-editing",
    "branding-editing"
  ]
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/signage",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  dont_load_metadata: true,
  app
};

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "9227827",
  "hash": "9227827",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "9227827",
  "semverString": null,
  "version": "1.12.0",
  "time": 1794376347690
};

// libs/common/src/lib/placeos.ts
var NATIVE_CREDENTIAL_FETCH_KEY = "__placeos_native_credential_fetch__";
var PLACE_SETUP_TIMEOUT = 10 * 1e3;
function randomString2(length = 43) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (value) => chars[value % chars.length]).join("");
}
async function sha256Base64Url(value) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  const bytes = Array.from(new Uint8Array(buffer), (byte) => String.fromCharCode(byte)).join("");
  return btoa(bytes).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function requestOrigin(input) {
  const request_url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input?.url;
  return request_url ? new URL(request_url, location.href).origin : "";
}
function setupNativeCredentialedFetch(urls) {
  if (typeof window.fetch !== "function")
    return;
  const window_state = window;
  const origins = urls.map((url) => new URL(url, location.href).origin);
  if (window_state[NATIVE_CREDENTIAL_FETCH_KEY]) {
    for (const origin of origins) {
      window_state[NATIVE_CREDENTIAL_FETCH_KEY].origins.add(origin);
    }
    return;
  }
  const state = {
    origins: new Set(origins),
    fetch: window.fetch.bind(window)
  };
  window_state[NATIVE_CREDENTIAL_FETCH_KEY] = state;
  window.fetch = (input, init) => {
    if (!state.origins.has(requestOrigin(input))) {
      return state.fetch(input, init);
    }
    return state.fetch(input, __spreadProps(__spreadValues({}, init), { credentials: "include" }));
  };
}
async function createNativeAuthUrl(settings, client_id) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const redirect_uri = await getNativeRedirectUri(settings.app_name, settings.domain);
  const nonce = randomString2(16);
  const verifier = randomString2();
  const challenge = await sha256Base64Url(verifier);
  localStorage.setItem(`${client_id}_nonce`, nonce);
  storeNativePkceVerifier(`${client_id}_challenge`, verifier);
  return `${url}/auth/oauth/authorize?response_type=code&client_id=${encodeURIComponent(client_id)}&state=${encodeURIComponent(nonce)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent("public")}&code_challenge_method=S256&code_challenge=${encodeURIComponent(challenge)}`;
}
function mockModeRequested() {
  return !location.href.includes("mock=false") && (localStorage.getItem("mock") === "true" || location.href.includes("mock=true") || location.origin.includes("demo.place.tech"));
}
var _markSetupDone = () => {
};
var _setup_done = new Promise((resolve) => _markSetupDone = resolve);
function placeSetupDone() {
  return _setup_done;
}
async function setupPlace(settings, timeout_ms = PLACE_SETUP_TIMEOUT) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const route = (location.pathname + "/").replace("//", "/");
  const native = isNativeApp();
  const mock = settings.mock || location.href.includes("mock=true") || localStorage.getItem("mock") === "true";
  const config = {
    auth_type: "auth_code",
    scope: "public",
    host: host_with_port,
    secure: native || protocol === "https:",
    auth_uri: `${url}/auth/oauth/authorize`,
    token_uri: `${url}/auth/oauth/token`,
    redirect_uri: native ? await getNativeRedirectUri(settings.app_name, settings.domain) : `${location.origin}${route}oauth-resp.html`,
    storage: native ? "local" : settings.storage,
    handle_login: native ? false : !settings.local_login,
    use_iframe: !native,
    mock,
    delay: 300
  };
  if (native) {
    localStorage.setItem("trust", "true");
    setupNativeCredentialedFetch([config.auth_uri, config.token_uri]);
  }
  if (localStorage) {
    localStorage.setItem("mock", `${!!mock && !location.href.includes("mock=false")}`);
  }
  if (mock) {
    notifyInfo("Application in mock mode.");
  }
  to(settings.app_name || location.pathname.split("/").find(Boolean) || "PlaceOS", new Date(VERSION.time).toISOString(), VERSION.hash);
  const setup_promise = uo(config);
  setup_promise.then(_markSetupDone, _markSetupDone);
  if (timeout_ms <= 0)
    return setup_promise;
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("PlaceOS setup timed out.")), timeout_ms);
    setup_promise.then(() => {
      clearTimeout(timer2);
      resolve();
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}

// libs/common/src/lib/public-mode.ts
function isPublicMode() {
  if (typeof window === "undefined")
    return false;
  const flag = window.PLACEOS_PUBLIC_MODE;
  return !!flag;
}

// libs/common/src/lib/types/user.class.ts
var USER_DOMAIN = "@dev.place.tech";
function setInternalUserDomain(domain) {
  USER_DOMAIN = domain;
}
var User = class {
  constructor(data = {}) {
    this.id = data.id || data.email || `USER::${randomString(8)}`;
    this.name = data.name || "";
    this.email = data.email || "";
    this.first_name = data.first_name || data.name || "";
    this.last_name = data.last_name || "";
    this.phone = data.phone || "";
    this.organisation = data.organisation || "";
    this.notes = data.notes || "";
    this.photo = data.photo || data.image || (data.photo_upload_id ? `/api/engine/v2/uploads/${encodeURIComponent(data.photo_upload_id)}/url` : "") || "";
    this.photo_upload_id = data.photo_upload_id || "";
    this.username = data.username || "";
    this.organizer = !!data.organizer;
    this.checked_in = !!data.checked_in;
    this.required = data.required ?? true;
    this.resource = data.resource ?? false;
    this.locatable = data.locatable ?? false;
    this.response_status = data.response_status || "";
    const groups = data.groups || [];
    this.department = data.department ?? "";
    if (data.sys_admin)
      groups.push("placeos_admin");
    if (data.support)
      groups.push("placeos_support");
    if (data.department)
      groups.push(data.department);
    this.groups = unique(groups);
    this.extension_data = data.extension_data || {};
    this.extension_data.assistance_required = data.assistance_required || this.extension_data.assistance_required;
    this.is_external = !this.email?.endsWith(`${USER_DOMAIN}`);
    this.visit_expected = data.visit_expected ?? true;
    this.assistance_required = !!this.extension_data?.assistance_required;
    for (const key in data) {
      if (!(key in this))
        this.extension_data[key] = data[key];
    }
  }
};
var StaffUser = class extends User {
  get location() {
    return this.location_time(Date.now());
  }
  work_preference(datetime) {
    if (!datetime)
      datetime = Date.now();
    const date = new Date(datetime);
    const day = date.getDay();
    const date_string = format(date, "yyyy-MM-dd");
    if (this.work_overrides[date_string]?.blocks?.length) {
      for (const block of this.work_overrides[date_string].blocks) {
        const start = block.start_time;
        const end = block.end_time;
        if (start <= date.getHours() + date.getMinutes() / 60 && end >= date.getHours() + date.getMinutes() / 60) {
          return block;
        }
      }
    }
    for (const pref of this.work_preferences) {
      if (pref.day_of_week === day && pref.blocks?.length) {
        for (const block of pref.blocks) {
          if (block.start_time <= date.getHours() + date.getMinutes() / 60 && block.end_time >= date.getHours() + date.getMinutes() / 60) {
            return block;
          }
        }
      }
    }
  }
  location_time(datetime = Date.now()) {
    return this.work_preference(datetime)?.location || "ooo";
  }
  get location_name() {
    return this.location_name_time();
  }
  location_name_time(datetime = Date.now()) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2.includes("w") && !in_hours) {
      return i18n("COMMON.WORK_HOURS_OUTSIDE");
    }
    switch (location2) {
      case "wfh":
        return i18n("COMMON.WORK_HOURS_HOME");
      case "wfo":
        return i18n("COMMON.WORK_HOURS_OFFICE");
      case "ooo":
        return i18n("COMMON.WORK_HOURS_OUT");
      case "aol":
        return i18n("COMMON.WORK_HOURS_LEAVE");
      case "sick":
        return i18n("COMMON.WORK_HOURS_SICK");
      default:
        return i18n("COMMON.UNKNOWN");
    }
  }
  outsideHours(datetime = Date.now()) {
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    return location2.includes("w") && !in_hours;
  }
  get in_hours() {
    return this.in_hours_time(Date.now());
  }
  location_icon(datetime) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2 === "wfh" && in_hours)
      return "home";
    if (location2 === "wfo" && in_hours)
      return "business";
    if (location2 === "sick")
      return "sick";
    return "event_busy";
  }
  in_hours_time(datetime = Date.now()) {
    const block = this.work_preference(datetime);
    return !!block;
  }
  constructor(data = {}) {
    super(data);
    this.card_number = data.card_number || "";
    this.staff_id = data.staff_id || "";
    this.is_logged_in = !!data.is_logged_in;
    this.work_preferences = data.work_preferences || [];
    this.work_overrides = data.work_overrides || {};
  }
};
var EMPTY_USER = {
  name: "<empty>",
  email: "<empty>@app.user"
};
function isEmptyUser(user) {
  return !user || !user.email || user.email === EMPTY_USER.email;
}

// libs/common/src/lib/types/event.class.ts
var _default_user = EMPTY_USER;
function setDefaultCreator(user) {
  if (user)
    _default_user = user;
}

// libs/common/src/lib/user-state.ts
var GroupPermission;
(function(GroupPermission2) {
  GroupPermission2[GroupPermission2["Read"] = 1] = "Read";
  GroupPermission2[GroupPermission2["Create"] = 2] = "Create";
  GroupPermission2[GroupPermission2["Update"] = 4] = "Update";
  GroupPermission2[GroupPermission2["Delete"] = 8] = "Delete";
  GroupPermission2[GroupPermission2["Operate"] = 16] = "Operate";
  GroupPermission2[GroupPermission2["Approve"] = 32] = "Approve";
  GroupPermission2[GroupPermission2["Manage"] = 64] = "Manage";
  GroupPermission2[GroupPermission2["Share"] = 128] = "Share";
})(GroupPermission || (GroupPermission = {}));
var ALL_PERMISSIONS = [
  GroupPermission.Read,
  GroupPermission.Create,
  GroupPermission.Update,
  GroupPermission.Delete,
  GroupPermission.Operate,
  GroupPermission.Approve,
  GroupPermission.Manage,
  GroupPermission.Share
];
var _current_user = new BehaviorSubject(EMPTY_USER);
var _change = new BehaviorSubject(0);
var current_user = _current_user.asObservable();
var user_groups = signal(
  [],
  ...ngDevMode ? [{ debugName: "user_groups" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_groups_loaded = signal(
  false,
  ...ngDevMode ? [{ debugName: "user_groups_loaded" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_groups_failed = signal(
  false,
  ...ngDevMode ? [{ debugName: "user_groups_failed" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_signal = signal(
  EMPTY_USER,
  ...ngDevMode ? [{ debugName: "user_signal" }] : (
    /* istanbul ignore next */
    []
  )
);
_current_user.subscribe((u) => user_signal.set(u));
function sameGroups(a, b) {
  if (a.length !== b.length)
    return false;
  const set = new Set(a);
  return b.every((group) => set.has(group));
}
var user_group_names = computed(() => user_signal().groups || [], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "user_group_names" } : (
  /* istanbul ignore next */
  {}
)), { equal: sameGroups }));
var PERMISSION_VALUES = [
  ["read", GroupPermission.Read],
  ["create", GroupPermission.Create],
  ["update", GroupPermission.Update],
  ["delete", GroupPermission.Delete],
  ["operate", GroupPermission.Operate],
  ["approve", GroupPermission.Approve],
  ["manage", GroupPermission.Manage],
  ["share", GroupPermission.Share]
];
function isTestRuntime() {
  return typeof jest !== "undefined" || typeof vi !== "undefined";
}
var USER_CACHE_KEY = "PLACEOS.user";
var MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1e3;
function tokenID() {
  const value = J() || "";
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = hash * 31 + value.charCodeAt(i) | 0;
  }
  return `${hash}`;
}
function cachedUserData() {
  try {
    const cache = JSON.parse(localStorage.getItem(USER_CACHE_KEY) || "null");
    if (!cache?.cached_at || cache.token_id !== tokenID() || cache.cached_at + MAX_CACHE_AGE < Date.now()) {
      localStorage.removeItem(USER_CACHE_KEY);
      return null;
    }
    return cache;
  } catch {
    localStorage.removeItem(USER_CACHE_KEY);
    return null;
  }
}
function storeUserData() {
  const user = currentUser();
  if (isEmptyUser(user) || isPublicMode())
    return;
  try {
    const cache = {
      cached_at: Date.now(),
      token_id: tokenID(),
      user: __spreadValues({}, user)
    };
    localStorage.setItem(USER_CACHE_KEY, JSON.stringify(cache));
  } catch {
  }
}
function applyCachedUserData() {
  const cache = cachedUserData();
  if (!cache)
    return false;
  const user = new StaffUser(cache.user);
  _current_user.next(user);
  setDefaultCreator(user);
  return true;
}
var user_permissions = computed(
  () => {
    const permissions = {
      read: [],
      create: [],
      update: [],
      delete: [],
      operate: [],
      approve: [],
      manage: [],
      share: []
    };
    const permission_sets = PERMISSION_VALUES.reduce((sets, [permission_name]) => {
      sets[permission_name] = /* @__PURE__ */ new Set();
      return sets;
    }, {});
    for (const { group, permissions: group_permissions } of user_groups()) {
      for (const subsystem of group.subsystems || []) {
        for (const [permission_name, permission_value] of PERMISSION_VALUES) {
          if (group_permissions & permission_value) {
            permission_sets[permission_name].add(subsystem);
          }
        }
      }
    }
    for (const [permission_name] of PERMISSION_VALUES) {
      permissions[permission_name] = [
        ...permission_sets[permission_name]
      ].sort();
    }
    return permissions;
  },
  ...ngDevMode ? [{ debugName: "user_permissions" }] : (
    /* istanbul ignore next */
    []
  )
);
function setPublicUser() {
  const generic_user = new StaffUser({
    id: "public-user",
    name: "Public User",
    email: "public.user@placeos.example"
  });
  _current_user.next(generic_user);
  return generic_user;
}
async function loadUserGroups() {
  user_groups_loaded.set(false);
  user_groups_failed.set(false);
  if (isPublicMode()) {
    user_groups.set([]);
    user_groups_loaded.set(true);
    return;
  }
  try {
    const groups = await Hu({});
    user_groups.set(groups);
    console.log("Permissions:", user_permissions());
  } catch (error) {
    console.warn("Failed to load user groups.", error);
    user_groups.set([]);
    user_groups_failed.set(true);
  } finally {
    user_groups_loaded.set(true);
  }
}
function initialiseUser() {
  const is_public_mode = isPublicMode();
  if (!is_public_mode)
    applyCachedUserData();
  const ready = mockModeRequested() ? placeSetupDone() : Promise.resolve();
  const user_request = combineLatest([
    defer(() => ready.then(() => uh("current"))),
    _change
  ]).pipe(map(([i]) => new StaffUser(i)));
  if (is_public_mode) {
    user_request.pipe(catchError((error) => {
      console.warn("User loading failed in public mode, using local public user data.", error);
      return of(setPublicUser());
    })).subscribe((user) => _current_user.next(user));
    return;
  }
  user_request.pipe(retry({
    count: 10,
    delay: (error, count) => {
      const delay_ms = Math.min(1e3 * Math.pow(2, count), 3e4);
      console.warn(`User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`, error);
      return timer(delay_ms);
    }
  })).subscribe({
    next: (user) => applyUser(user),
    error: (error) => console.error("User loading failed after 10 retries.", error)
  });
}
function applyUser(user) {
  _current_user.next(user);
  setDefaultCreator(user);
  storeUserData();
  return loadUserGroups();
}
function reloadUserData() {
  setTimeout(async () => {
    try {
      const p_user = await uh("current");
      applyUser(new StaffUser(p_user));
    } catch (error) {
      if (isPublicMode()) {
        console.warn("User reload failed in public mode, using local public user data.", error);
        setPublicUser();
        return;
      }
      throw error;
    }
  }, 300);
}
function currentUser() {
  return _current_user.getValue() || EMPTY_USER;
}
function userSignal() {
  return user_signal;
}
function hasPermission(subsystem, permissions) {
  if (user_signal().groups?.includes("placeos_admin"))
    return true;
  return (getPermissionMask(subsystem) & permissions) === permissions;
}
function getPermissionMask(subsystem) {
  let permissions = 0;
  for (const { group, permissions: group_permissions } of user_groups()) {
    if (group.subsystems?.includes(subsystem)) {
      permissions |= group_permissions;
    }
  }
  return permissions;
}
setTimeout(() => {
  if (!isTestRuntime())
    initialiseUser();
}, 50);

// libs/common/src/lib/constants.ts
var SETTING_KEYS = {
  FAVORITE_ROOMS: "favourite_rooms",
  FAVORITE_DESKS: "favourite_desks",
  FAVORITE_PARKING_SPACES: "favourite_parking",
  FAVORITE_LOCKERS: "favourite_lockers",
  FAVORITE_CATERING: "favourite_menu_items",
  FAVORITE_TEAM_MEMBERS: "favourite_team_members",
  TEAM_MEMBERS: "team_members"
};
var SECONDS = 1e3;
var MINUTES = 60 * SECONDS;

// libs/common/src/lib/google-analytics.service.ts
var GoogleAnalyticsService = class _GoogleAnalyticsService {
  constructor() {
    this.enabled = true;
    this.app_name = "GA_APP";
    this._ga4 = false;
    this.timers = {};
  }
  init(tracking_id = "") {
    if (!this.enabled)
      return;
    this._ga4 = !!tracking_id?.startsWith("G-");
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      if (this._ga4) {
        window.gtag("js", /* @__PURE__ */ new Date());
      } else {
        window.dataLayer.push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
      }
      const script = document.createElement("script");
      script.async = true;
      script.src = this._ga4 ? `https://www.googletagmanager.com/gtag/js?id=${tracking_id}` : `https://www.googletagmanager.com/gtm.js?id=${tracking_id}`;
      const first_script = document.getElementsByTagName("script")[0];
      if (first_script?.parentNode) {
        first_script.parentNode.insertBefore(script, first_script);
      } else {
        document.head.appendChild(script);
      }
      log("Analytics", "Service", "Injected Google Analytics into page");
    }
    this.service = window.gtag;
  }
  push(obj) {
    window.dataLayer.push(obj);
  }
  /**
   * Initialise Google Analytics
   * @param tracking_id GA Tracking ID
   */
  load(tracking_id) {
    if (!this.enabled) {
      throw new Error("Google Analytics needs to be enabled before being initialised");
    }
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    log("Analytics", "Service", `Setup with tracking ID: ${tracking_id}`);
    if (this._ga4) {
      this.service("config", tracking_id, { send_page_view: false });
      return;
    }
    this.page("");
  }
  /**
   * Set User ID for the Google Analytics session
   * @param id Identifier of the User
   */
  setUser(id) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`user|${id}`, () => {
        log("Analytics", "Service", `Set user ID: ${id}`);
        if (this._ga4) {
          this.service("set", { user_id: id });
        } else {
          this.service("set", "userId", id);
        }
        this.event("authentication", this._ga4 ? "user_id_available" : "user-id available");
      }, 100);
    }
  }
  send(type, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`end|${type}`, () => {
        if (this._ga4) {
          this.service("event", type, value);
          return;
        }
        this.push(__spreadProps(__spreadValues({}, value), {
          event: "event"
        }));
      });
    }
  }
  /**
   * Post event to Google Analytics API
   * @param category Event Category
   * @param action Event action; use a valid GA4 event name for GA4 tracking IDs
   * @param label Event Label
   * @param value Event Value
   */
  event(category, action, label, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
        const l = label ? ", " + label : "";
        log("Analytics", "Service", `Event: ${category}, ${action}${l}${value ? ", " + value : ""}`);
        if (this._ga4) {
          this.service("event", action, {
            event_category: category,
            event_label: label,
            value
          });
          return;
        }
        this.push({
          event: "event",
          category,
          action,
          label
        });
      }, 100);
    }
  }
  /**
   * Post screen change event to Google Analytics API
   * @param name
   * @param app_name
   */
  screen(name, app_name) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (name && this.enabled) {
      this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
        log("Analytics", "Service", `Screen: ${name}${app_name ? ", " + app_name : ""}`);
        if (this._ga4) {
          this.service("event", "screen_view", {
            app_name: app_name || this.app_name,
            screen_name: name
          });
          return;
        }
        this.push({
          event: "screenview",
          appName: app_name || this.app_name,
          screenName: name
        });
      }, 100);
    }
  }
  /**
   * Post routing event to Google Analytics API.
   * The query string and fragment are removed, as they can hold personal
   * data such as an email address.
   * @param route Activated route
   * @param origin Add origin to routh path
   */
  page(route, origin = false) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    route = route.split(/[?#]/)[0];
    if (this.enabled) {
      this.timeout(`page|${route}`, () => {
        log("Analytics", "Service", `Page: ${route}`);
        if (this._ga4) {
          const path = route || location.pathname;
          this.service("event", "page_view", {
            page_title: document.title,
            page_path: path,
            // Hash-routed SPAs hide the route in the URL
            // fragment, which GA4 strips when deriving the
            // page path. Send a full URL on the route so
            // each page has a distinct, reportable path.
            page_location: `${location.origin}${path}`
          });
          return;
        }
        this.push({
          event: "pageview",
          url: `${origin ? location.origin : ""}${route}`
        });
      }, 100);
    }
  }
  /**
   * Post timing event to Google Analytics API
   * @param category
   * @param variable
   * @param value
   * @param label
   */
  timing(category, variable, value, label) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
        log("Analytics", "Service", `Timing: ${category}, ${variable}, ${value}${label ? ", " + label : ""}`);
        if (this._ga4) {
          this.service("event", "timing_complete", {
            event_category: category,
            name: variable,
            value: Number(value) || 0,
            event_label: label
          });
          return;
        }
        this.push({
          event: "timing",
          category,
          variable,
          value,
          label
        });
      }, 100);
    }
  }
  /**
   * Creates a timeout for the given name used for preventing duplicate events in quick succession
   * @param name Name of timer
   * @param fn Timer callback
   * @param delay Timer delay
   */
  timeout(name, fn, delay = 300) {
    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
      delete this.timers[name];
    }
    this.timers[name] = setTimeout(() => {
      if (fn instanceof Function) {
        fn();
      }
      delete this.timers[name];
    }, delay);
  }
  static {
    this.\u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleAnalyticsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/settings.service.ts
var _service;
var _setting_signals = {};
var DEBUG_OVERRIDES_KEY = "PLACEOS.setting_overrides";
var LEGACY_USER_SETTING_KEYS = {
  favourite_spaces: SETTING_KEYS.FAVORITE_ROOMS,
  favourite_parking_spaces: SETTING_KEYS.FAVORITE_PARKING_SPACES
};
function cssVariableRule(selector, variables = {}) {
  let rule = `${selector} { `;
  for (const key in variables) {
    rule += `--${key}: ${variables[key]}; `;
  }
  return `${rule}}`;
}
function withLegacyUserSettings(details) {
  const result = __spreadValues({}, details);
  for (const [old_key, key] of Object.entries(LEGACY_USER_SETTING_KEYS)) {
    result[key] ??= details[old_key];
  }
  return result;
}
function appDebugOverridesKey() {
  const app2 = location.pathname.replace(/[\\/]/g, "").trim() || "PlaceOS";
  return `${DEBUG_OVERRIDES_KEY}.${app2}`;
}
function readDebugOverrides(storage_key) {
  try {
    const overrides = JSON.parse(localStorage.getItem(storage_key) || "{}");
    for (const key in overrides) {
      if (!key.startsWith("app."))
        delete overrides[key];
    }
    return overrides;
  } catch {
    return {};
  }
}
function writeDebugOverrides(storage_key, overrides) {
  if (Object.keys(overrides).length) {
    localStorage.setItem(storage_key, JSON.stringify(overrides));
  } else
    localStorage.removeItem(storage_key);
}
function setting(key) {
  return _service ? _service.get(key) : void 0;
}
function settingSignal(key, default_value = void 0, root = false) {
  const full_key = root ? key : `app.${key}`;
  if (!_setting_signals[full_key]) {
    _setting_signals[full_key] = signal(setting(full_key) ?? default_value);
  }
  return _setting_signals[full_key];
}
var active_theme = computed(
  () => settingSignal("allow_dark_mode", false)() ? settingSignal("theme", "light", true)() : "light",
  ...ngDevMode ? [{ debugName: "active_theme" }] : (
    /* istanbul ignore next */
    []
  )
);
var themed_logo = computed(
  () => {
    const logo = settingSignal(active_theme() === "dark" ? "logo_dark" : "logo_light")();
    return typeof logo === "string" ? logo : logo?.src || "";
  },
  ...ngDevMode ? [{ debugName: "themed_logo" }] : (
    /* istanbul ignore next */
    []
  )
);
function themedLogo() {
  return themed_logo;
}
var SettingsService = class _SettingsService extends AsyncHandler {
  /**
   * @hidden
   */
  setOverrides(value) {
    this._overrides.set(value);
    this._refreshSettings();
  }
  /** Set a local debug override for an `app.*` setting. `undefined` clears the key. */
  /**
   * Set a local debug override for an `app.*` setting in this app only.
   * `undefined` clears the key, also from the overrides for all apps.
   */
  setDebugOverride(key, value) {
    if (!key.startsWith("app."))
      return;
    const app_overrides = __spreadValues({}, this._app_debug_overrides);
    const shared = readDebugOverrides(DEBUG_OVERRIDES_KEY);
    if (value === void 0) {
      delete app_overrides[key];
      delete shared[key];
      writeDebugOverrides(DEBUG_OVERRIDES_KEY, shared);
    } else
      app_overrides[key] = value;
    this._app_debug_overrides = app_overrides;
    writeDebugOverrides(appDebugOverridesKey(), app_overrides);
    this._debug_overrides.set(__spreadValues(__spreadValues({}, shared), app_overrides));
    this._refreshSettings();
  }
  /** Remove the debug overrides for this app and for all apps */
  clearDebugOverrides() {
    this._app_debug_overrides = {};
    this._debug_overrides.set({});
    localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    localStorage.removeItem(appDebugOverridesKey());
    this._refreshSettings();
  }
  _refreshSettings() {
    this._applyCssVariables();
    this._updateSignals();
    this._applyTheme();
    this._setFontSize();
    this._setPrintFontSize();
  }
  get theme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    return allow_dark_mode ? this.get("theme") : "light";
  }
  /** Get signal for key */
  listen(name) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    return this._subjects[name];
  }
  /** Update observable value for key */
  post(name, value) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    this._subjects[name].set(value);
  }
  value(name) {
    return !this._subjects[name] ? null : this._subjects[name]();
  }
  signal(name, default_value, root) {
    return settingSignal(name, default_value, root);
  }
  /** Page title */
  get title() {
    return this._title.getTitle();
  }
  set title(value) {
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id || this.get("app.analytics.enabled") === false)
      return;
    this._analytics?.send("pagename", { title: value });
  }
  constructor() {
    super();
    this._title = inject(Title);
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._app_name = "PlaceOS";
    this._overrides = signal(
      [],
      ...ngDevMode ? [{ debugName: "_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overrides = this._overrides.asReadonly();
    this._user_settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_user_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._app_debug_overrides = readDebugOverrides(appDebugOverridesKey());
    this._debug_overrides = signal(
      __spreadValues(__spreadValues({}, readDebugOverrides(DEBUG_OVERRIDES_KEY)), this._app_debug_overrides),
      ...ngDevMode ? [{ debugName: "_debug_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_overrides = this._debug_overrides.asReadonly();
    this._subjects = {};
    this._pending_settings = {};
    this.theme_signal = active_theme;
    this.time_format_signal = computed(
      () => this.signal("use_24_hour_time", false)() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    _service = this;
    const now = /* @__PURE__ */ new Date();
    const time = new Date(VERSION.time);
    const built = isSameDay(now, time) ? `Today at ${format(time, "h:mma")}` : format(time, "do MMM yyyy, h:mma");
    log("CORE", `${VERSION.semver}`, null, "debug", true);
    log("APP", `${VERSION.hash} | Built: ${built}`, null, "debug", true);
    this.init();
  }
  /**
   * Initialise the settings
   */
  async init() {
    if (this.get("debug"))
      window.debug = true;
    if (this.get("app")?.name) {
      this._app_name = this.get("app").name;
    }
    this._app_name = location.pathname.replace(/[\\/]/g, "").trim() || this._app_name;
    setAppName(this._app_name.split("-").join("_").toUpperCase());
    log("Settings", "Successfully loaded settings");
    this._initialised.next(true);
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.settings = this;
      window.setting = (key) => this.get(key);
    }
    const user = await this._currentUser();
    const data = await _c(user.id, "settings");
    this._user_settings.set(withLegacyUserSettings(data.details || {}));
    this._updateSignals();
    this.timeout("init", () => {
      this._initDarkMode();
      this._applyTheme();
      this._setFontSize();
      this._setPrintFontSize();
    }, 1e3);
  }
  /** Whether settings service has initialised */
  get app_name() {
    return this._app_name.replace(/ /g, "-");
  }
  get time_format() {
    return this.get("app.use_24_hour_time") ? "HH:mm" : "h:mm a";
  }
  /**
   * Get a setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  get(key) {
    const debug_overrides = this._debug_overrides();
    if (key in debug_overrides)
      return debug_overrides[key];
    const keys = key.split(".");
    if (keys[0] !== "app") {
      return getItemWithKeys(keys, this._pending_settings) ?? getItemWithKeys(keys, this._user_settings()) ?? getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
    const override_settings = [...this._overrides()];
    for (const override of override_settings) {
      const value = getItemWithKeys(keys.slice(1), override);
      if (value != null) {
        return value;
      }
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS);
  }
  saveUserSetting(name, value) {
    this._pending_settings[name] = value;
    this._updateSignals();
    if (name === "dark_mode")
      this.setTheme(value ? "dark" : "");
    if (name === "font_size")
      this._setFontSize();
    this.timeout("save_settings", () => this._savePendingChanges(), 2400);
  }
  async updateLocatable(locatable) {
    await ah(currentUser().id, { locatable }, "patch");
    reloadUserData();
  }
  overrideCssVariable(key, value, important = false) {
    let element = document.getElementById(`css-var-overrides+${key}`);
    if (!element) {
      element = document.createElement("style");
      element.id = `css-var-overrides+${key}`;
      document.head.appendChild(element);
    }
    element.innerText = `html, body { --${key}: ${value} ${important ? "!important" : ""}}`;
  }
  setTheme(theme) {
    const current_theme = this.theme;
    if (current_theme === theme)
      return;
    this.saveUserSetting("theme", theme);
    this._applyTheme();
  }
  /**
   * Apply the colour overrides from `app.css_variables` and, for the dark
   * theme, from `app.css_variables_dark`. The dark rule has the theme class,
   * so it wins over the `.theme-dark` defaults of the stylesheet.
   */
  _applyCssVariables() {
    const css_string = [
      cssVariableRule("body", this.get("app.css_variables") || {}),
      cssVariableRule("body.theme-dark", this.get("app.css_variables_dark") || {})
    ].join(" ");
    let element = document.getElementById("css-var-overrides");
    if (!element) {
      element = document.createElement("style");
      element.id = "css-var-overrides";
      document.head.appendChild(element);
    }
    element.innerText = css_string;
  }
  async _savePendingChanges() {
    const user = currentUser();
    if (!user?.id || !Object.keys(this._pending_settings).length)
      return;
    this._updateSignals();
    await mc(user.id, {
      name: "settings",
      description: "",
      details: __spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings)
    });
    this._user_settings.set(__spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings));
    this._pending_settings = {};
  }
  _setFontSize() {
    if (!this.get("font_size"))
      return;
    this.overrideCssVariable("font-size", `${this.get("font_size")}px`);
  }
  _applyTheme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    this._clearTheme();
    if (!allow_dark_mode)
      return;
    document.body.classList.add(`theme-${this.theme}`);
  }
  _clearTheme() {
    const class_list = document.body.classList.value.split(" ");
    for (const item of class_list) {
      if (item.startsWith("theme-")) {
        document.body.classList.remove(item);
      }
    }
  }
  _setPrintFontSize() {
    let print_style_el = document.getElementById("placeos-print-block");
    if (!print_style_el) {
      print_style_el = document.createElement("style");
      print_style_el.id = "placeos-print-block";
      document.head.appendChild(print_style_el);
    }
    print_style_el.innerText = `@media print { html, body { font-size: ${this.get("app.print_font_size") || "4mm"}; } }`;
  }
  _initDarkMode() {
    if (this.theme)
      return;
    const os_dark = window?.matchMedia ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches : false;
    this.setTheme(os_dark ? "dark" : "");
  }
  _updateSignals() {
    for (const key in _setting_signals) {
      _setting_signals[key].update((old) => this.get(key) ?? old);
    }
  }
  _currentUser() {
    return new Promise((resolve) => {
      const check = () => {
        const user = currentUser();
        if (user?.id)
          return resolve(user);
        this.timeout("current_user", check, 100);
      };
      check();
    });
  }
  static {
    this.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/sentry-rates.ts
var DEFAULT_SENTRY_RATES = {
  traces: 1,
  replays_session: 0,
  replays_on_error: 1
};

// libs/common/src/lib/sentry.ts
var DEFAULT_SENTRY_DSN = "https://0498d2da2a46bfbe89599f3bfbec7c4b@o437082.ingest.us.sentry.io/4506817038909440";
var PII_KEYS = ["forwarded", "-ip", "remote-", "via", "-user"];
var _started = false;
var _sentry_handler = null;
var MAX_EARLY_ERRORS = 10;
var _early_errors = [];
var _trace_service = null;
var LazySentryErrorHandler = class extends ErrorHandler {
  handleError(error) {
    super.handleError(error);
    if (_sentry_handler)
      _sentry_handler.handleError(error);
    else if (_early_errors.length < MAX_EARLY_ERRORS) {
      _early_errors.push(error);
    }
  }
};
var SECRET_PARAM = /([?&#;](?:x-api-key|api-key|api_key|bearer_token|access_token|refresh_token|jwt|token|code)=)[^&#\s"'\\]+/gi;
var MAX_SCRUB_DEPTH = 20;
var SDK_METADATA_KEY = "sdkProcessingMetadata";
function scrubSecrets(value, depth = 0) {
  if (typeof value === "string") {
    return value.replace(SECRET_PARAM, "$1[Filtered]");
  }
  if (!value || typeof value !== "object" || depth > MAX_SCRUB_DEPTH) {
    return value;
  }
  const record = value;
  for (const key of Object.keys(record)) {
    if (depth === 0 && key === SDK_METADATA_KEY)
      continue;
    const scrubbed = scrubSecrets(record[key], depth + 1);
    if (scrubbed !== record[key])
      record[key] = scrubbed;
  }
  return value;
}
function scrubEvent(event) {
  try {
    return scrubSecrets(event);
  } catch {
    return null;
  }
}
function scrubEnvelope(envelope) {
  for (const item of envelope[1]) {
    const payload = item[1];
    if (payload instanceof Uint8Array)
      continue;
    if (typeof payload !== "string") {
      scrubSecrets(payload);
      continue;
    }
    const scrubbed = scrubSecrets(payload);
    if (scrubbed === payload)
      continue;
    item[1] = scrubbed;
    if (item[0].length !== void 0) {
      item[0].length = new TextEncoder().encode(scrubbed).length;
    }
  }
  return envelope;
}
var TRACE_PROPAGATION_TARGET = /^\/api\/(?!engine\/v2\/(?:uploads(?:\/|$)|signage\/media\/[^/]+\/))/;
var IGNORED_ERRORS = [
  /^Non-Error promise rejection captured with value: unknown action: (?:getLibItems|setLibItem|removeLibItem)$/
];
function sampleRate(value, fallback) {
  return typeof value === "number" ? value : fallback;
}
async function initSentry(dsn, router, rates = {}) {
  if (!dsn || _started)
    return;
  _started = true;
  const replays_session = sampleRate(rates.replays_session, DEFAULT_SENTRY_RATES.replays_session);
  const replays_on_error = sampleRate(rates.replays_on_error, DEFAULT_SENTRY_RATES.replays_on_error);
  const use_replay = replays_session > 0 || replays_on_error > 0;
  try {
    const Sentry = await import("./sentry-sdk-WNP5SDBG.js");
    Sentry.init(__spreadProps(__spreadValues({
      dsn,
      release: VERSION.hash,
      // Separates UAT and production domains that share a DSN
      environment: location.hostname,
      integrations: [
        Sentry.browserTracingIntegration(),
        // Replay masks all text and inputs, and blocks media, by
        // default. Without compression, `scrubEnvelope` can read the
        // recordings.
        ...use_replay ? [Sentry.replayIntegration({ useCompression: false })] : []
      ],
      tracesSampleRate: sampleRate(rates.traces, DEFAULT_SENTRY_RATES.traces),
      replaysSessionSampleRate: replays_session,
      replaysOnErrorSampleRate: replays_on_error
    }, use_replay && {
      transport: (options) => {
        const transport = Sentry.makeFetchTransport(options);
        return __spreadProps(__spreadValues({}, transport), {
          send: (envelope) => transport.send(scrubEnvelope(envelope))
        });
      }
    }), {
      // Sentry checks the path of same-origin requests against these.
      tracePropagationTargets: [TRACE_PROPAGATION_TARGET],
      ignoreErrors: IGNORED_ERRORS,
      // Sentry 11 collects more by default. These are the Sentry 10
      // defaults, which send no bodies, cookies or user details.
      dataCollection: {
        userInfo: false,
        cookies: false,
        httpHeaders: { deny: PII_KEYS },
        httpBodies: [],
        urlQueryParams: { deny: PII_KEYS }
      },
      beforeSend: scrubEvent,
      // Sentry streams spans, so spans do not go through `beforeSend`
      beforeSendSpan: (span) => scrubSecrets(span)
    }));
    _trace_service = new Sentry.TraceService(router);
    _sentry_handler = Sentry.createErrorHandler({
      showDialog: false,
      logErrors: false
    });
    for (const error of _early_errors.splice(0)) {
      _sentry_handler.handleError(error);
    }
  } catch (error) {
    log("APP", "Failed to load Sentry.", error, "warn");
  }
}
function initSentryFromSettings() {
  const router = inject(Router);
  const dsn = settingSignal("sentry_dsn", DEFAULT_SENTRY_DSN);
  const traces = settingSignal("sentry_traces_sample_rate");
  const replays_session = settingSignal("sentry_replays_session_sample_rate");
  const replays_on_error = settingSignal("sentry_replays_on_error_sample_rate");
  const watcher = effect(
    () => {
      const value = dsn();
      if (!value)
        return;
      watcher.destroy();
      void initSentry(value, router, untracked(() => ({
        traces: traces(),
        replays_session: replays_session(),
        replays_on_error: replays_on_error()
      })));
    },
    ...ngDevMode ? [{ debugName: "watcher" }] : (
      /* istanbul ignore next */
      []
    )
  );
}

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
var DEVICE_ID = globalThis.localStorage?.getItem("PLACEOS.DEVICE_ID") || `DEV-${randomString(8)}`;
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
    globalThis.localStorage?.setItem("PLACEOS.DEVICE_ID", DEVICE_ID);
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
  addMonths,
  addYears,
  getUnixTime,
  isAfter,
  isBefore,
  AsyncHandler,
  HotkeysService,
  SECONDS,
  MINUTES,
  GoogleAnalyticsService,
  isNativeApp,
  bindNativeAuthRedirects,
  markNativeAuthRedirectConsumed,
  consumeNativeAuthRedirect,
  restoreNativePkceVerifier,
  clearNativePkceVerifier,
  setNativeAuthError,
  consumeNativeAuthError,
  hideNativeStatusBar,
  closeNativeBrowser,
  openNativeBrowser,
  getNativeDomain,
  getNativeEmail,
  setNativeDomain,
  setNativeEmail,
  clearNativeDomain,
  getNativeApiKey,
  setNativeApiKey,
  clearNativeApiKey,
  normaliseNativeDomain,
  syncNativeManagedConfig,
  scheduleNativeRestart,
  getIntuneAccount,
  getIntuneToken,
  lookupNativeDomainByEmail,
  createNativeAuthUrl,
  mockModeRequested,
  setupPlace,
  DEFAULT_SETTINGS,
  isPublicMode,
  setInternalUserDomain,
  GroupPermission,
  current_user,
  user_groups_loaded,
  user_groups_failed,
  user_group_names,
  currentUser,
  userSignal,
  hasPermission,
  settingSignal,
  themedLogo,
  SettingsService,
  LazySentryErrorHandler,
  initSentryFromSettings,
  RemoteLoggingService
};
//# debugId=0f105213-63ac-5d00-9849-da74ce3f23d8
//# sourceMappingURL=chunk-7Y7SMIGA.js.map
