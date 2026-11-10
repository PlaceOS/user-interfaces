import {
  Hu,
  J,
  _c,
  addMonths,
  ah,
  format,
  getItemWithKeys,
  i18n,
  isSameDay,
  log,
  mc,
  notifyInfo,
  randomString,
  setAppName,
  to,
  uh,
  unique,
  uo
} from "./chunk-K4D4FE6R.js";
import {
  getNativeRedirectUri,
  isNativeApp,
  storeNativePkceVerifier
} from "./chunk-MTBCTSXX.js";
import {
  Router
} from "./chunk-NTEOLKOB.js";
import {
  Title
} from "./chunk-HPONLAK6.js";
import {
  BehaviorSubject,
  ErrorHandler,
  Injectable,
  Subscription,
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
} from "./chunk-VF7PQOKI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
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

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "3d13349",
  "hash": "3d13349",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "3d13349",
  "semverString": null,
  "version": "1.12.0",
  "time": 1794316660205
};

// libs/common/src/lib/settings.ts
var app = {
  name: "Signage",
  short_name: "PlaceOS",
  default_animation_time: 1e3,
  templates_enabled: true
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
  service_worker: {
    auto_reload: true
  },
  app
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
    const Sentry = await import("./sentry-sdk-5OADCTNC.js");
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

export {
  addYears,
  AsyncHandler,
  HotkeysService,
  SECONDS,
  MINUTES,
  GoogleAnalyticsService,
  VERSION,
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
  hasPermission,
  settingSignal,
  SettingsService,
  LazySentryErrorHandler,
  scrubSecrets,
  initSentryFromSettings
};
//# debugId=1bf5364a-73ca-5b66-9ead-20d6d144b7d6
//# sourceMappingURL=chunk-OA3PKDHK.js.map
