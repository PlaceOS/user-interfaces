import {
  CallFailed,
  LocaleService,
  MediaAnimation,
  NG_VALUE_ACCESSOR,
  addHours,
  appName,
  browserEnvironment,
  configure,
  consoleLog,
  constructFrom,
  createAuthSession,
  createRealtime,
  differenceInMilliseconds,
  enUS,
  endOfDay,
  firstTruthyValueFrom,
  format,
  getDefaultOptions,
  getItemWithKeys,
  getRoundingMethod,
  getTimezoneOffsetInMilliseconds,
  groups_exports,
  i18n,
  isSameDay,
  lazySnackbar,
  log,
  metadata_exports,
  minutesInDay,
  minutesInMonth,
  mockFetch,
  mockRealtimeEnvironment,
  normalizeDates,
  notifyError,
  notifyInfo,
  notifySuccess,
  orThrow,
  orThrowPage,
  randomInt,
  randomString,
  scoped_log,
  setAppName,
  setDebugLogging,
  setNotifyOutlet,
  setTranslationService,
  splitModuleSlug,
  toDate,
  unique,
  users_exports,
  withTimeout,
  zones_exports
} from "./chunk-ZHBO75B7.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-7H4OKNBG.js";
import {
  ApplicationRef,
  BehaviorSubject,
  DOCUMENT,
  Directive,
  ErrorHandler,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Location,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Output,
  RuntimeError,
  Service,
  Subject,
  Subscription,
  Title,
  catchError,
  combineLatest,
  computed,
  defer,
  effect,
  filter,
  first,
  firstValueFrom,
  formatRuntimeError,
  forwardRef,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  provideAppInitializer,
  registerLocaleData,
  retry,
  setClassMetadata,
  signal,
  switchMap,
  take,
  timer,
  untracked,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵinject,
  ɵɵlistener
} from "./chunk-Y6KAMZVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

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
        delete this._timers[name];
        fn();
      }, delay);
    } else {
      throw new Error(name ? "Cannot create a timeout without a callback" : "Cannot create named timeout without a name");
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
      throw new Error(name ? "Cannot create a interval without a callback" : "Cannot create named interval without a name");
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

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/formatDistance.js
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
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

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Service
  }], null, null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  text = "";
  attempts = 1;
  copied = new EventEmitter();
  _pending = /* @__PURE__ */ new Set();
  _destroyed = false;
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  copy(attempts = this.attempts) {
    attempts = Math.min(attempts, 50);
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule,
    imports: [CdkCopyToClipboard],
    exports: [CdkCopyToClipboard]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
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
    const parsed = JSON.parse(raw);
    const verifier = parsed?.verifier;
    let key = parsed?.key;
    if (typeof key !== "string" || typeof verifier !== "string")
      return;
    if (key.endsWith("_challenge")) {
      key = `${key.slice(0, -"_challenge".length)}_code_verifier`;
    }
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
function getNativeSystemId() {
  return localStorage.getItem(SYSTEM_ID_STORAGE_KEY) || "";
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

// libs/common/src/lib/place-client.ts
var MOCK_AUTHORITY = {
  id: "mock-authority",
  name: "localhost:4200",
  description: "",
  domain: "localhost:4200",
  login_url: "/login?continue={{url}}",
  logout_url: "/logout",
  session: true,
  production: false,
  config: {},
  version: "2.0.0",
  metrics: null,
  sentry_dsn: null,
  email_domains: []
};
var API_PATH = "/api/engine/v2";
var RECOVERY_DELAY_MS = 3e4;
var _client = null;
var _online = signal(
  false,
  ...ngDevMode ? [{ debugName: "_online" }] : (
    /* istanbul ignore next */
    []
  )
);
var _online_waiters = [];
var _markStarted = () => {
};
var _started = new Promise((resolve) => _markStarted = resolve);
function setOnline(online) {
  _online.set(online);
  if (!online)
    return;
  const waiters = _online_waiters;
  _online_waiters = [];
  for (const resolve of waiters)
    resolve();
}
var AUTH_LOG_FIELDS = /* @__PURE__ */ new Set([
  "attempt",
  "attempts",
  "credential",
  "expires_in_seconds",
  "fixed_device",
  "grant",
  "reason",
  "status",
  "trusted"
]);
function privateLog(entry) {
  const auth = entry.scope === "auth";
  consoleLog(__spreadProps(__spreadValues({}, entry), {
    args: entry.args.map((arg) => privateArg(arg, auth))
  }));
}
function privateArg(arg, auth) {
  if (typeof arg !== "object" || arg === null)
    return arg;
  const safe = Object.fromEntries(Object.entries(arg).filter(([key]) => !auth && key !== "error" || AUTH_LOG_FIELDS.has(key)));
  if (!("error" in arg))
    return safe;
  const error = arg.error;
  if (typeof error !== "object" || error === null)
    return safe;
  const kind = "kind" in error ? error.kind : void 0;
  const status = "status" in error ? error.status : void 0;
  return __spreadProps(__spreadValues({}, safe), { error: { kind, status } });
}
function retirable(environment) {
  let retired = false;
  const guard = (store) => ({
    get: (key) => store.get(key),
    keys: () => store.keys(),
    set: (key, value) => {
      if (!retired)
        store.set(key, value);
    },
    remove: (key) => {
      if (!retired)
        store.remove(key);
    }
  });
  return {
    environment: __spreadProps(__spreadValues({}, environment), {
      fetch: (url, init) => retired ? Promise.reject(new Error("The login session was replaced.")) : environment.fetch(url, init),
      storage: guard(environment.storage),
      session_storage: guard(environment.session_storage),
      navigate: (url) => {
        if (!retired)
          environment.navigate(url);
      },
      replaceUrl: (url) => {
        if (!retired)
          environment.replaceUrl(url);
      }
    }),
    retire: () => retired = true
  };
}
function removeEmptyDeviceFlags(client_id, storage) {
  for (const name of ["trust", "trusted", "fixed_device"]) {
    const key = `${client_id}_${name}`;
    if (storage.get(key) === "")
      storage.remove(key);
  }
}
function startPlaceClient(options) {
  _client?.stop();
  setOnline(false);
  const { base_url, mock, headers } = options;
  if (mock) {
    configure({
      base_url,
      auth: { kind: "none" },
      headers,
      fetch: mockFetch,
      missing_fields: "zero",
      log: privateLog
    });
    _client = {
      session: null,
      mock,
      base_url,
      headers,
      realtime: null,
      stop: () => _client?.realtime?.stop()
    };
    setOnline(true);
    _markStarted();
    return _client;
  }
  const { environment, retire } = retirable(options.auth.environment ?? browserEnvironment());
  const session = createAuthSession(__spreadProps(__spreadValues({}, options.auth), {
    environment,
    base_url,
    headers,
    log: privateLog
  }));
  removeEmptyDeviceFlags(session.client_id, environment.storage);
  const all_headers = __spreadProps(__spreadValues({}, headers), { "X-App-Id": session.client_id });
  configure({
    base_url,
    auth: session.client_auth,
    headers: all_headers,
    log: privateLog
  });
  let retry2;
  const client = {
    session,
    mock,
    base_url,
    headers: all_headers,
    realtime: null,
    stop: () => {
      remove_listener();
      clearTimeout(retry2);
      session.stop();
      retire();
      client.realtime?.stop();
    }
  };
  const remove_listener = session.subscribe((status) => {
    if (status.kind === "loading")
      return;
    const has_authority = session.authority() !== null;
    setOnline(has_authority);
    if (has_authority) {
      clearTimeout(retry2);
      retry2 = void 0;
      return;
    }
    const unavailable = status.kind === "signed_out" && status.error?.kind === "authority_unavailable";
    if (!unavailable || retry2 !== void 0)
      return;
    retry2 = setTimeout(() => {
      retry2 = void 0;
      if (session.authority() === null)
        void session.start();
    }, RECOVERY_DELAY_MS);
  });
  _client = client;
  _markStarted();
  return client;
}
function stopPlaceClient() {
  _client?.stop();
  _client = null;
  setOnline(false);
}
function placeClientStarted() {
  return _started;
}
function placeSession() {
  return _client?.session ?? null;
}
function placeRealtime() {
  const client = _client;
  if (!client)
    throw new Error("Call setupPlace before realtime calls.");
  if (client.realtime)
    return client.realtime;
  const realtime = client.session ? createRealtime({
    base_url: client.base_url,
    auth: client.session.client_auth,
    fixed_device: client.session.isFixedDevice(),
    log: privateLog
  }) : createRealtime({
    base_url: client.base_url,
    auth: { kind: "none" },
    environment: mockRealtimeEnvironment(),
    log: privateLog
  });
  let restart;
  realtime.subscribe((status) => {
    if (status.kind !== "failed" || restart !== void 0)
      return;
    restart = setTimeout(() => {
      restart = void 0;
      if (_client === client)
        realtime.start();
    }, RECOVERY_DELAY_MS);
  });
  client.realtime = realtime;
  return realtime;
}
function realtimeConnected() {
  return _client?.realtime?.status().kind === "open";
}
function isMock() {
  return _client?.mock ?? false;
}
function authority() {
  if (_client?.mock)
    return MOCK_AUTHORITY;
  return _client?.session?.authority() ?? void 0;
}
function isOnline() {
  return _online();
}
function onlineState() {
  return _online.asReadonly();
}
function waitForOnline() {
  if (_online())
    return Promise.resolve();
  return new Promise((resolve) => _online_waiters.push(resolve));
}
function currentCredential() {
  return _client?.session?.credential() ?? null;
}
function token() {
  if (_client?.mock)
    return "mock-token";
  const credential = currentCredential();
  if (credential?.kind === "bearer")
    return credential.token;
  if (credential?.kind === "api_key")
    return "x-api-key";
  return "";
}
function apiKey() {
  const credential = currentCredential();
  return credential?.kind === "api_key" ? credential.key : "";
}
function clientId() {
  return _client?.session?.client_id ?? "";
}
function apiOrigin() {
  return _client?.base_url || location.origin;
}
function apiEndpoint() {
  return `${apiOrigin()}${API_PATH}`;
}
function isFixedDevice() {
  return _client?.session?.isFixedDevice() ?? false;
}
function setToken(token2, expires_at_ms) {
  _client?.session?.useToken(token2, expires_at_ms);
}
function setApiKey(key) {
  _client?.session?.useApiKey(key);
}
function invalidateToken() {
  _client?.session?.invalidateToken();
}
async function authorise() {
  const session = _client?.session;
  if (!session)
    return token();
  const result = await session.authorize();
  if (result.ok === false)
    throw result.error;
  return token();
}

// libs/common/src/lib/public-mode.ts
function isPublicMode() {
  if (typeof window === "undefined")
    return false;
  const flag = window.PLACEOS_PUBLIC_MODE;
  return !!flag;
}

// libs/common/src/lib/types/org.classes.ts
var Organisation = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.name = raw_data.name || "";
    this.description = raw_data.description || "";
    this.tags = [...raw_data.tags || []];
    this.count = raw_data.count || 0;
    this.children_count = raw_data.children_count || 0;
    this.capacity = raw_data.capacity || 0;
    this.bindings = raw_data.bindings || {};
    this._settings = raw_data.settings || {};
  }
  /**
   * Get a custom organisation setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  setting(key) {
    const keys = key.split(".");
    const value = getItemWithKeys(keys, this._settings);
    return value;
  }
};
var BuildingLevel = class {
  constructor(_data = {}) {
    this.settings = {};
    this.id = _data.id || "";
    this.parent_id = _data.parent_id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.map_id = _data.map_id || "";
    this.capacity = _data.capacity || 0;
    this.location = _data.location || "";
    this.locations = _data.locations || [];
    this.tags = [..._data.tags || []];
    this.images = [..._data.images || []];
    this.code = _data.code || "";
    const parts = this.display_name.split(" ");
    this.number = ((parts.length >= 2 ? parts[parts.length - 1] : this.display_name[0])?.toUpperCase() || "").substring(0, 2);
  }
};
var Building = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.parent_id = raw_data.parent_id || "";
    this.name = raw_data.name || "";
    const settings = raw_data.settings || {};
    this.display_name = raw_data.display_name;
    this.images = this.images || [];
    const disc_info = settings.discovery_info || settings;
    this.zone_id = raw_data.zone_id || raw_data.zone;
    this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.loan_items = (raw_data.loan_items || disc_info.loan_items || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.levels = (raw_data.levels || disc_info.levels || []).map((i) => new BuildingLevel(__spreadProps(__spreadValues({}, i), { building_id: this.id })));
    this._roles = raw_data.roles || disc_info.roles || {};
    this._lockers = raw_data.lockers || raw_data.locker_structure || disc_info.locker_structure || {};
    this._systems = raw_data.systems || disc_info.systems || {};
    this._phone_numbers = raw_data.phone_numbers || disc_info.phone_numbers || {};
    this.location = raw_data.location || disc_info.location || "0,0";
    this.room_configurations = raw_data.room_configurations || disc_info.room_configurations || [];
    this.attributes = raw_data.attributes || disc_info.attributes || [];
    const searchables = [];
    if (raw_data.neighbourhoods) {
      for (const lvl in raw_data.neighbourhoods) {
        if (lvl in raw_data.neighbourhoods) {
          const lvl_features = raw_data.neighbourhoods[lvl] || {};
          for (const feature in lvl_features) {
            if (feature in lvl_features) {
              searchables.push({
                id: lvl_features[feature],
                name: feature,
                level_id: lvl
              });
            }
          }
        }
      }
    }
    this.bindings = raw_data.bindings || {};
    this.searchables = searchables;
    this.map_id = raw_data.map_id || "";
    this.timezone = raw_data.timezone || disc_info.timezone || settings.timezone || "";
    this.catering_hours = raw_data.catering_hours || disc_info.catering_hours || settings.catering_hours || { start: 7, end: 20 };
    this.visitor_space = raw_data.visitor_space || disc_info.visitor_space || settings.visitor_space || "";
    this.holding_bay = raw_data.holding_bay || disc_info.holding_bay || settings.holding_bay || "";
    this.code = raw_data.code || disc_info.code || settings.code || "";
    this.address = raw_data.address || disc_info.address || settings.address || "";
    this.orientations = raw_data.orientations || disc_info.orientations || settings.orientations || {};
    this.booking_details = raw_data.booking_details || disc_info.booking_details || settings.booking_details || null;
    this.catering_restricted_from = raw_data.catering_restricted_from || disc_info.catering_restricted_from || settings.catering_restricted_from || -1440;
    this.currency = raw_data.currency || disc_info.currency || settings.currency || "USD";
  }
  /**
   * Get list of users with the associated role
   * @param name Role to find users for
   */
  role(name) {
    return [...this._roles[name] || []];
  }
  /**
   * Get list of the names of available user role lists
   */
  get role_names() {
    return Object.keys(this._roles).filter((i) => i in this._roles);
  }
  /** Map of the locker ID arrays */
  get lockers() {
    return __spreadValues({}, this._lockers || {});
  }
  /** Map of important system ids for the building */
  get systems() {
    return __spreadValues({}, this._systems || {});
  }
  /** Map of important phone numbers for the building */
  get phone_numbers() {
    return __spreadValues({}, this._phone_numbers || {});
  }
  /**
   * Get search map feature for the given level ID
   * @param level_id ID of level to grab features for
   */
  featuresForLevel(level_id) {
    return (this.searchables || []).filter((i) => i.level_id === level_id);
  }
};
var Region = class {
  constructor(_data) {
    this.id = _data.id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.timezone = _data.timezone || "";
    this.images = [..._data.images || []];
    this.bindings = _data.bindings || {};
    this.address = _data.address || "";
  }
};

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
    const groups = [...data.groups || []];
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
        return i18n("COMMON.AOL");
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
    this.work_preferences = (data.work_preferences || []).map(copyWorktimePreference);
    this.work_overrides = Object.fromEntries(Object.entries(data.work_overrides || {}).map(([date, pref]) => [
      date,
      copyWorktimePreference(pref)
    ]));
  }
};
function copyWorktimePreference(pref) {
  return { day_of_week: pref.day_of_week, blocks: [...pref.blocks || []] };
}
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
  const value = token() || "";
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
    const groups = await groups_exports.current({}).then(orThrow);
    user_groups.set(groups);
    console.log("Permissions:", user_permissions());
  } catch (error) {
    console.warn("Failed to load user groups.", loadError(error));
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
  const ready = placeClientStarted();
  const user_request = combineLatest([
    defer(() => ready.then(() => users_exports.current().then(orThrow))),
    _change
  ]).pipe(map(([i]) => new StaffUser(i)));
  if (is_public_mode) {
    user_request.pipe(catchError((error) => {
      console.warn("User loading failed in public mode, using local public user data.", loadError(error));
      return of(setPublicUser());
    })).subscribe((user) => _current_user.next(user));
    return;
  }
  user_request.pipe(retry({
    count: 10,
    delay: (error, count) => {
      const delay_ms = Math.min(1e3 * Math.pow(2, count), 3e4);
      console.warn(`User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`, loadError(error));
      return timer(delay_ms);
    }
  })).subscribe({
    next: (user) => applyUser(user),
    error: (error) => console.error("User loading failed after 10 retries.", loadError(error))
  });
}
function loadError(error) {
  if (!(error instanceof CallFailed))
    return error;
  return { kind: error.error.kind, status: error.status };
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
      const p_user = await users_exports.current().then(orThrow);
      applyUser(new StaffUser(p_user));
    } catch (error) {
      if (isPublicMode()) {
        console.warn("User reload failed in public mode, using local public user data.", loadError(error));
        setPublicUser();
        return;
      }
      if (error instanceof CallFailed) {
        const { kind } = error.error;
        throw new Error(`User reload failed: ${kind} ${error.status}`);
      }
      throw error;
    }
  }, 300);
}
function currentUser() {
  return _current_user.getValue() || EMPTY_USER;
}
function waitForCurrentUser() {
  return firstValueFrom(_current_user.pipe(first((user) => !isEmptyUser(user))));
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

// libs/common/src/lib/json.ts
function toJsonValue(value) {
  const text = JSON.stringify(value);
  return text === void 0 ? null : JSON.parse(text);
}
function isJsonRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function jsonRecord(value) {
  return isJsonRecord(value) ? value : {};
}

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

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "19144e9",
  "hash": "19144e9",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "19144e9",
  "semverString": null,
  "version": "1.12.0",
  "time": 1795435252952
};

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
    const data = await metadata_exports.show({ id: user.id, name: "settings" }).then(orThrow).then((data2) => data2["settings"]).catch((error) => {
      log("Settings", "Unable to load user settings", error, "warn");
      return null;
    });
    const details = data?.details;
    this._user_settings.set(withLegacyUserSettings(details && typeof details === "object" && !Array.isArray(details) ? details : {}));
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
    await users_exports.update({ id: currentUser().id, body: { locatable } }).then(orThrow);
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
    await metadata_exports.update({
      id: user.id,
      body: {
        name: "settings",
        description: "",
        details: toJsonValue(__spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings))
      }
    }).then(orThrow);
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

// libs/common/src/lib/uploads.service.ts
var UploadFailedError = class extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
    this.name = "UploadFailedError";
  }
};
var loadCloudUploads = () => import("./index.es-PAR6PHM2.js");
var UPLOAD_RETRY_ATTEMPTS = 3;
function uploadStateError(state) {
  return state?.error || "Upload failed";
}
function uploadFailure(details) {
  if (details instanceof Error)
    return details;
  return new UploadFailedError(details?.error || "Upload failed", details);
}
var UploadsService = class _UploadsService extends AsyncHandler {
  constructor() {
    super();
    this._upload_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_upload_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upload_list = this._upload_list.asReadonly();
    this._uploads_setup = null;
    this._uploads_use_api_key = false;
    this._token_refresh = null;
    if (localStorage) {
      this._upload_list.set(JSON.parse(localStorage.getItem("BACKOFFICE.uploads") || "[]"));
    }
  }
  init(tries = 1) {
    this.timeout("init_uploads", () => {
      this._initUploads().catch(() => this.timeout("init_uploads", () => this.init(tries += 1), 1e3 * tries));
    });
  }
  clearList() {
    const in_progress_list = this._upload_list().filter((file) => file.progress < 100 && !file.error);
    this._upload_list.set(in_progress_list);
  }
  uploadFile(file, pub = false, permissions = "none") {
    return new Promise((resolve, reject) => {
      let resolved = false;
      const update_fn = (details) => {
        if (!resolved) {
          resolve(details.upload_id || details.upload?.id || details.id);
          resolved = true;
        }
        this._upload_list.set([
          ...this._upload_list().filter((_) => _.id !== details.id),
          details
        ]);
      };
      this._uploadFile(file, pub, permissions, {
        next: update_fn,
        error: (details) => {
          if (details?.id)
            update_fn(details);
          if (!resolved)
            reject(uploadFailure(details));
        },
        complete: () => this._updateUploadHistory()
      });
    });
  }
  async uploadFileToCompletion(file, pub = false, permissions = "none", on_progress) {
    const details = await this._uploadFileToDetails(file, pub, permissions, on_progress);
    const upload_id = details.upload_id || details.upload?.id || details.id;
    if (!upload_id)
      throw new Error("Failed to get uploaded file ID");
    return upload_id;
  }
  uploadFileWithProgress(file, pub = false, permissions = "none") {
    const progress = signal(
      null,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._uploadFile(file, pub, permissions, {
      next: (details) => progress.set(__spreadValues({}, details)),
      error: (details) => progress.set(details),
      complete: () => this._updateUploadHistory()
    });
    return progress;
  }
  _updateUploadHistory() {
    const done_list = this._upload_list().filter((file) => file.progress >= 100);
    done_list.forEach((i) => delete i.upload);
    if (localStorage) {
      localStorage.setItem("PLACEOS.uploads", JSON.stringify(done_list));
    }
  }
  /**
   * Set up the upload manager, once for each auth mode. Setting it up
   * again ends the hash workers, which leaves any upload being hashed
   * waiting forever. The credential is read on each request, so a
   * refreshed token needs no new setup. A change between API key and
   * token auth does, as the manager picks the header at setup.
   */
  _initUploads() {
    const use_api_key = !!apiKey();
    if (use_api_key !== this._uploads_use_api_key) {
      this._uploads_setup = null;
      this._uploads_use_api_key = use_api_key;
    }
    this._uploads_setup ||= this._setupUploads(use_api_key).catch((error) => {
      this._uploads_setup = null;
      throw error;
    });
    return this._uploads_setup;
  }
  async _setupUploads(use_api_key) {
    const { initUploads } = await loadCloudUploads();
    initUploads(__spreadProps(__spreadValues({
      auto_start: true
    }, use_api_key ? { api_key: () => apiKey() } : { token: () => token() }), {
      endpoint: "/api/engine/v2/uploads",
      worker_url: "assets/md5_worker.js",
      // Drop each upload from the manager once it completes. It keeps
      // the File otherwise, so every file uploaded stays in memory for
      // the rest of the session. The upload list here keeps no File.
      auto_remove: true
    }));
  }
  _updateUploadToken() {
    this._token_refresh ||= (async () => {
      if (!apiKey() && !token())
        await authorise();
      await this._initUploads();
    })().finally(() => this._token_refresh = null);
    return this._token_refresh;
  }
  /**
   * Upload the given file to the cloud
   * @param file File to upload
   */
  _uploadFile(file, pub = false, permissions = "none", observer) {
    this._updateUploadToken().then(() => loadCloudUploads()).then(async ({ humanReadableByteCount, uploadFile }) => {
      const upload = await uploadFile(file, {
        permissions,
        public: pub
      });
      const upload_details = {
        id: upload?.id || `upi-${randomString(8)}`,
        name: file.name,
        progress: 0,
        link: "",
        formatted_size: humanReadableByteCount(file.size),
        size: file.size,
        upload
      };
      let attempts = 0;
      let settled = false;
      let subscription;
      const stop = () => {
        settled = true;
        Promise.resolve().then(() => subscription?.unsubscribe());
      };
      subscription = upload.state.subscribe(async (state) => {
        if (settled)
          return;
        upload_details.upload_id = upload.id;
        if (upload.access_url || state.progress >= 100) {
          const local_url = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_details.upload_id || upload.id)}/url`;
          upload_details.link = local_url;
        }
        upload_details.progress = state.progress;
        observer.next(upload_details);
        if (state.status === "FAILED") {
          if (attempts < UPLOAD_RETRY_ATTEMPTS) {
            attempts += 1;
            await this._updateUploadToken();
            if (settled)
              return;
            upload.resume();
            return;
          }
          stop();
          upload.remove();
          observer.error(__spreadProps(__spreadValues({}, upload_details), {
            error: uploadStateError(state)
          }));
          return;
        }
        if (state.status === "COMPLETED") {
          stop();
          observer.complete();
        }
      });
      observer.next(upload_details);
    }).catch((upload_error) => observer.error(upload_error));
  }
  _uploadFileToDetails(file, pub = false, permissions = "none", on_progress) {
    return new Promise((resolve, reject) => {
      let last_details;
      this._uploadFile(file, pub, permissions, {
        next: (details) => {
          last_details = details;
          on_progress?.(details.progress);
        },
        error: (details) => reject(uploadFailure(details)),
        complete: () => {
          this._updateUploadHistory();
          resolve(last_details);
        }
      });
    });
  }
  static {
    this.\u0275fac = function UploadsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadsService, factory: _UploadsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/application.ts
var _timer;
var _initial_check;
var _version_subscription;
var _unrecoverable_subscription;
var _new_version = false;
var _auto_reload = false;
var _reload_gate = null;
var _reload_timer;
var _reload_deferred_since = 0;
var _init_reload = null;
var _init_reload_timer;
var _last_update_check = 0;
var _update_interval = 0;
var INIT_RELOAD_KEY = "PlaceOS.initialisation_reloads";
var INIT_RELOAD_WINDOW_MS = 5 * MINUTES;
var INIT_RELOAD_LIMIT = 3;
var INITIALISATION_FAILURE = signal(
  "",
  ...ngDevMode ? [{ debugName: "INITIALISATION_FAILURE" }] : (
    /* istanbul ignore next */
    []
  )
);
var INITIALISATION_COMPLETE = signal(
  false,
  ...ngDevMode ? [{ debugName: "INITIALISATION_COMPLETE" }] : (
    /* istanbul ignore next */
    []
  )
);
var RELOAD_RETRY_MS = 5 * SECONDS;
var MAX_RELOAD_DEFERRAL_MS = 10 * MINUTES;
var SERVICE_WORKER_UPDATE = signal(
  null,
  ...ngDevMode ? [{ debugName: "SERVICE_WORKER_UPDATE" }] : (
    /* istanbul ignore next */
    []
  )
);
function hasNewVersion() {
  return _new_version;
}
function serviceWorkerUpdate() {
  return SERVICE_WORKER_UPDATE.asReadonly();
}
function backendReachable() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return false;
  }
  return isOnline();
}
function canReloadNow() {
  if (!backendReachable())
    return false;
  try {
    return _reload_gate ? _reload_gate() : true;
  } catch (error) {
    log("CACHE", "Reload gate failed.", error, "warn");
    return true;
  }
}
function reloadApp() {
  if (_reload_timer)
    clearTimeout(_reload_timer);
  _reload_timer = void 0;
  if (!_reload_deferred_since)
    _reload_deferred_since = Date.now();
  const waited = Date.now() - _reload_deferred_since;
  if (canReloadNow() || waited >= MAX_RELOAD_DEFERRAL_MS) {
    location.reload();
    return;
  }
  _reload_timer = setTimeout(reloadApp, RELOAD_RETRY_MS);
}
function reloadForNewVersion() {
  reloadApp();
}
function initialisationFailure() {
  return INITIALISATION_FAILURE.asReadonly();
}
function initialisationComplete() {
  return INITIALISATION_COMPLETE.asReadonly();
}
function failInitialisation(message) {
  INITIALISATION_COMPLETE.set(false);
  INITIALISATION_FAILURE.set(message);
}
function recentInitReloads(now = Date.now()) {
  try {
    const stored = JSON.parse(sessionStorage.getItem(INIT_RELOAD_KEY) || "[]");
    return stored instanceof Array ? stored.filter((at) => typeof at === "number" && now - at >= 0 && now - at < INIT_RELOAD_WINDOW_MS) : [];
  } catch {
    return [];
  }
}
function storeInitReloads(at) {
  try {
    sessionStorage.setItem(INIT_RELOAD_KEY, JSON.stringify(at));
  } catch {
  }
}
function markInitialisationComplete() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  cancelInitReload();
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(true);
}
function cancelInitReload() {
  if (_init_reload_timer)
    clearTimeout(_init_reload_timer);
  _init_reload_timer = void 0;
}
function retryInitialisation() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(false);
  location.reload();
}
function requestInitReload() {
  if (!backendReachable()) {
    if (_init_reload_timer)
      return;
    log("APP", "Initialisation failed while offline; restarting once online.", void 0, "warn");
    _init_reload_timer = setTimeout(() => {
      _init_reload_timer = void 0;
      requestInitReload();
    }, RELOAD_RETRY_MS);
    return;
  }
  cancelInitReload();
  if (_init_reload) {
    _init_reload();
    return;
  }
  const now = Date.now();
  const reloads = recentInitReloads(now);
  if (reloads.length >= INIT_RELOAD_LIMIT) {
    failInitialisation("The application could not finish starting. Check the connection, then try again.");
    return;
  }
  storeInitReloads([...reloads, now]);
  location.reload();
}
function stopUpdateChecks() {
  if (_timer)
    clearInterval(_timer);
  if (_initial_check)
    clearTimeout(_initial_check);
  _timer = void 0;
  _initial_check = void 0;
}
function cacheOptions(options = {}) {
  return typeof options === "number" ? { interval: options } : options;
}
function handleNewVersion() {
  if (_new_version)
    return;
  _new_version = true;
  stopUpdateChecks();
  if (_auto_reload)
    return reloadApp();
  SERVICE_WORKER_UPDATE.set({
    message: "New application version available",
    details: "Refresh to use the latest version.",
    action: "Refresh"
  });
}
function logVersionUpdate(event) {
  switch (event.type) {
    case "VERSION_DETECTED":
      log("CACHE", `Downloading application version ${event.version.hash}.`);
      return;
    case "VERSION_INSTALLATION_FAILED":
      log("CACHE", `Failed to install application version ${event.version.hash}.`, event.error, "warn");
      return;
    case "VERSION_READY":
      log("CACHE", `Application version ${event.latestVersion.hash} is ready.`, { current_version: event.currentVersion.hash });
      return;
    case "NO_NEW_VERSION_DETECTED":
      log("CACHE", `Application version ${event.version.hash} is up to date.`);
  }
}
function setupCache(cache, options = {}) {
  const { auto_reload = false, interval = 5 * MINUTES } = cacheOptions(options);
  _auto_reload = auto_reload;
  _update_interval = Math.max(interval, 1 * MINUTES);
  log("CACHE", `Service worker is ${cache.isEnabled ? "enabled" : "disabled"}.`);
  if (cache.isEnabled) {
    if (!_version_subscription) {
      _version_subscription = cache.versionUpdates.subscribe((event) => {
        logVersionUpdate(event);
        if (event.type !== "VERSION_READY" || _new_version)
          return;
        handleNewVersion();
      });
    }
    if (!_unrecoverable_subscription) {
      _unrecoverable_subscription = cache.unrecoverable.subscribe((event) => {
        log("CACHE", `Application cache is unrecoverable: ${event.reason}`, void 0, "error");
        _new_version = true;
        stopUpdateChecks();
        if (_auto_reload)
          return reloadApp();
        SERVICE_WORKER_UPDATE.set({
          message: "Application update failed to load",
          details: "Reload the app to recover.",
          action: "Reload"
        });
      });
    }
    if (_new_version) {
      if (_auto_reload)
        reloadApp();
      return;
    }
    stopUpdateChecks();
    _initial_check = setTimeout(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, 2 * SECONDS);
    _timer = setInterval(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, Math.max(interval, 1 * MINUTES));
  }
}
async function checkForUpdate(cache) {
  _last_update_check = Date.now();
  try {
    if (cache.isEnabled && await cache.checkForUpdate()) {
      log("CACHE", `Application update detected.`);
    }
  } catch (error) {
    log("CACHE", `Failed to check for application updates.`, error, "warn");
  }
}

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// libs/common/src/lib/fixed-device-helpers.ts
var log2 = scoped_log("FIXED_DEV");
var _wake_lock = null;
async function requestScreenWakeLock() {
  try {
    if (!isFixedDevice())
      return;
    if (_wake_lock)
      await _wake_lock.release();
    if (document.visibilityState === "visible") {
      _wake_lock = await navigator.wakeLock.request("screen");
    } else {
      setTimeout(() => requestScreenWakeLock(), 1e3);
    }
  } catch (e) {
    log2.error("Failed to acquire screen wake lock.", e);
  }
}
document.addEventListener("visibilitychange", async () => {
  if (_wake_lock !== null && document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  }
});

// libs/common/src/lib/mapspeople.service.ts
var MapService;
(function(MapService2) {
  MapService2[MapService2["GoogleMaps"] = 0] = "GoogleMaps";
  MapService2[MapService2["Mapbox"] = 1] = "Mapbox";
})(MapService || (MapService = {}));
var MapsPeopleService = class _MapsPeopleService extends AsyncHandler {
  get map_keys() {
    return this._settings.get("app.maps_people.keys") || {};
  }
  get use_service() {
    return this._settings.get("app.maps_people.use_zones") || [];
  }
  get map_service() {
    return this._map_service();
  }
  get map_token() {
    return this._map_token();
  }
  get is_ready() {
    return this._ready();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._map_service = signal(
      null,
      ...ngDevMode ? [{ debugName: "_map_service" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._map_token = signal(
      "",
      ...ngDevMode ? [{ debugName: "_map_token" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._injected = {};
    this._custom_zone = signal(
      "",
      ...ngDevMode ? [{ debugName: "_custom_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available = computed(
      () => {
        const bld = this._org.active_building();
        const zone = this._custom_zone();
        if (!this._org.initialised() || !bld?.id)
          return false;
        return !!this.map_keys.mapsindoors && (this.use_service.includes(zone || bld.id) || this.use_service.includes("*"));
      },
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      if (!this.available())
        return;
      this._injectMapsApiKeys();
    });
  }
  setCustomZone(zone_id) {
    this._custom_zone.set(zone_id);
  }
  _injectMapsApiKeys() {
    log("MapsPeople", "Initializing Maps API Keys");
    this._ready.set(false);
    const { mapsindoors, google, mapbox } = this.map_keys;
    if (!mapsindoors)
      return;
    if (mapsindoors && !this._injected.mapsindoors) {
      const script = document.createElement("script");
      script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.35.0/mapsindoors-4.35.0.js.gz?apikey=${mapsindoors}`;
      document.body.appendChild(script);
      this._injected.mapsindoors = true;
    }
    if (google && mapbox) {
      log("MapsPeople", "Both Google and Mapbox keys provided", void 0, "error");
      return;
    }
    if (google && !this._injected.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google}`;
      document.body.appendChild(script);
      this._map_service.set(MapService.GoogleMaps);
      this._injected.google = true;
    } else if (mapbox && !this._injected.mapbox) {
      const script = document.createElement("script");
      script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
      document.body.appendChild(script);
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
      document.head.appendChild(styles);
      this._map_service.set(MapService.Mapbox);
      this._map_token.set(mapbox);
      this._injected.mapbox = true;
    }
    if (google || mapbox) {
      log("MapsPeople", `Initialized Maps API Keys for ${google ? "Google Maps" : "Mapbox"}`);
      this.timeout("ready", () => this._ready.set(true), 300);
    }
  }
  static {
    this.\u0275fac = function MapsPeopleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapsPeopleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapsPeopleService, factory: _MapsPeopleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsPeopleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

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
  storeNativePkceVerifier(`${client_id}_code_verifier`, verifier);
  return `${url}/auth/oauth/authorize?response_type=code&client_id=${encodeURIComponent(client_id)}&state=${encodeURIComponent(nonce)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent("public")}&code_challenge_method=S256&code_challenge=${encodeURIComponent(challenge)}`;
}
function mockModeRequested() {
  return !location.href.includes("mock=false") && (localStorage.getItem("mock") === "true" || location.href.includes("mock=true") || location.origin.includes("demo.place.tech"));
}
var PASTED_TOKEN_KEY = "PLACEOS.pasted_token";
function pastedTokenKey(client_id) {
  return `${PASTED_TOKEN_KEY}.${client_id}`;
}
function usePastedToken(session) {
  const key = pastedTokenKey(session.client_id);
  const raw = sessionStorage.getItem(key);
  if (!raw)
    return;
  sessionStorage.removeItem(key);
  let pasted;
  try {
    pasted = JSON.parse(raw);
  } catch {
    return;
  }
  const { token: token2, refresh_token, expires_at } = pasted;
  if (typeof token2 !== "string" || !token2 || typeof expires_at !== "number") {
    return;
  }
  const refresh_key = `${session.client_id}_refresh_token`;
  for (const storage of [localStorage, sessionStorage]) {
    storage.removeItem(refresh_key);
  }
  if (typeof refresh_token === "string" && refresh_token) {
    session.useRefreshToken(refresh_token);
  }
  session.useToken(token2, expires_at);
}
function useDeviceApiKey(session, storage, api_key) {
  if (api_key === void 0)
    return;
  removeApiKeyFromUrl();
  if (api_key)
    return session.useApiKey(api_key);
  const key = `${session.client_id}_x-api-key`;
  if (api_key === "" && storage.getItem(key)) {
    storage.removeItem(key);
    session.invalidateToken();
  }
}
function removeApiKeyFromUrl() {
  if (!location.href.includes("x-api-key"))
    return;
  const without = (part) => {
    const params = new URLSearchParams(part);
    params.delete("x-api-key");
    return params.toString();
  };
  const url = new URL(location.href);
  url.searchParams.delete("x-api-key");
  const hash = url.hash.slice(1);
  const query_start = hash.indexOf("?");
  let route = query_start >= 0 ? hash.slice(0, query_start) : hash;
  if (route.includes("="))
    route = without(route);
  const query = query_start >= 0 ? without(hash.slice(query_start + 1)) : "";
  url.hash = query ? `${route}?${query}` : route;
  if (url.href !== location.href) {
    history.replaceState(history.state, "", url);
  }
}
async function setupPlace(settings, timeout_ms = PLACE_SETUP_TIMEOUT, options = {}) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const native = isNativeApp();
  const base_url = settings.use_domain ? `${native ? "https:" : protocol}//${host_with_port}` : "";
  const route = (location.pathname + "/").replace("//", "/");
  const mock = settings.mock || location.href.includes("mock=true") || localStorage.getItem("mock") === "true";
  const grant = options.entra_token ? { kind: "entra", entraToken: options.entra_token } : { kind: "code" };
  if (native) {
    localStorage.setItem("trust", "true");
    const url = base_url || location.origin;
    setupNativeCredentialedFetch([
      `${url}/auth/oauth/authorize`,
      `${url}/auth/oauth/token`
    ]);
  }
  if (localStorage) {
    localStorage.setItem("mock", `${!!mock && !location.href.includes("mock=false")}`);
  }
  if (mock) {
    notifyInfo("Application in mock mode.");
  }
  const storage_kind = native ? "local" : settings.storage || "local";
  const storage = storage_kind === "session" ? sessionStorage : localStorage;
  const { session } = startPlaceClient({
    base_url,
    mock,
    // Identify the app and build on every API request
    headers: {
      "X-App-Name": settings.app_name || location.pathname.split("/").find(Boolean) || "PlaceOS",
      "X-App-Date": new Date(VERSION.time).toISOString(),
      "X-App-Build": VERSION.hash
    },
    auth: {
      redirect_uri: native ? await getNativeRedirectUri(settings.app_name, settings.domain) : `${location.origin}${route}oauth-resp.html`,
      scope: "public",
      grant,
      handle_login: native ? false : !settings.local_login,
      use_frame: !native,
      environment: browserEnvironment(storage_kind)
    }
  });
  if (session) {
    if (options.trusted) {
      storage.setItem(`${session.client_id}_trusted`, "true");
    }
    usePastedToken(session);
    useDeviceApiKey(session, storage, options.api_key);
  }
  const setup_promise = session ? session.start().then((result) => {
    if (result.ok !== false)
      return;
    const { error } = result;
    log("APP", `Login did not complete: ${error.kind}`, void 0, "warn");
    if (error.kind === "authority_unavailable" || error.kind === "authority_invalid") {
      throw new Error(`PlaceOS authority failed: ${error.kind}`);
    }
  }) : Promise.resolve();
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

// libs/common/src/lib/console-capture.ts
var CAPTURED_CONSOLE_METHODS = [
  "log",
  "debug",
  "info",
  "warn",
  "error"
];
var _listeners = /* @__PURE__ */ new Set();
var _wrappers = /* @__PURE__ */ new Map();
var _dispatching = false;
function listenToConsole(listener) {
  patchConsole();
  _listeners.add(listener);
  return () => _listeners.delete(listener);
}
function patchConsole() {
  for (const method of CAPTURED_CONSOLE_METHODS) {
    if (console[method] === _wrappers.get(method))
      continue;
    const original = console[method];
    const wrapper = (...args) => {
      if (_dispatching)
        return original.apply(console, args);
      _dispatching = true;
      try {
        notify(method, args);
        original.apply(console, args);
      } finally {
        _dispatching = false;
      }
    };
    _wrappers.set(method, wrapper);
    console[method] = wrapper;
  }
}
function notify(method, args) {
  for (const listener of _listeners) {
    try {
      listener(method, args);
    } catch {
    }
  }
}

// libs/common/src/lib/device-id.ts
var DEVICE_ID_KEY = "PLACEOS.DEVICE_ID";
var _device_id = "";
function newDeviceId() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
  return `DEV-${hex.join("").toUpperCase()}`;
}
function deviceId() {
  if (_device_id)
    return _device_id;
  try {
    _device_id = localStorage.getItem(DEVICE_ID_KEY) || "";
  } catch {
  }
  if (!_device_id) {
    _device_id = newDeviceId();
    try {
      localStorage.setItem(DEVICE_ID_KEY, _device_id);
    } catch {
    }
  }
  return _device_id;
}

// libs/common/src/lib/sentry-rates.ts
var DEFAULT_SENTRY_RATES = {
  traces: 1,
  replays_session: 0,
  replays_on_error: 1
};

// libs/common/src/lib/sentry.ts
var DEFAULT_SENTRY_DSN = "https://0498d2da2a46bfbe89599f3bfbec7c4b@o437082.ingest.us.sentry.io/4506817038909440";
var PII_KEYS = ["forwarded", "-ip", "remote-", "via", "-user"];
var _started2 = false;
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
var SECRET_PARAM = /((?:[?&#;](?:x-api-key|api-key|api_key|bearer_token|access_token|refresh_token|jwt|token|code)|(?:^|[\s"',[])(?:api-key|bearer_token))=)[^&#;\s"'\\]+/gi;
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
  /^Non-Error promise rejection captured with value: unknown action: (?:getLibItems|setLibItem|removeLibItem)$/,
  /^Non-Error promise rejection captured with value: cannot communicate with background$/
];
function sampleRate(value, fallback) {
  return typeof value === "number" ? value : fallback;
}
async function initSentry(dsn, router, rates = {}) {
  if (!dsn || _started2)
    return;
  _started2 = true;
  const replays_session = sampleRate(rates.replays_session, DEFAULT_SENTRY_RATES.replays_session);
  const replays_on_error = sampleRate(rates.replays_on_error, DEFAULT_SENTRY_RATES.replays_on_error);
  const use_replay = replays_session > 0 || replays_on_error > 0;
  try {
    const Sentry = await import("./sentry-sdk-XDSCHGZM.js");
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

// libs/common/src/lib/log-format.ts
var MAX_LOG_MESSAGE = 2e3;
var MAX_ARGS = 20;
var MAX_DEPTH = 4;
var FORMAT_DIRECTIVE = /%[sdifoOc%]/g;
var ANSI_CODE = /\u001b\[[0-9;?]*[ -/]*[@-~]/g;
function formatLogArgs(all_args) {
  try {
    const args = all_args.slice(0, MAX_ARGS);
    const parts = [];
    let next = 0;
    if (typeof args[0] === "string") {
      next = 1;
      parts.push(args[0].slice(0, MAX_LOG_MESSAGE).replace(FORMAT_DIRECTIVE, (directive) => {
        if (directive === "%%")
          return "%";
        if (next >= args.length)
          return directive;
        const arg = args[next++];
        if (directive === "%c")
          return "";
        if (directive === "%d" || directive === "%i") {
          return numberText(arg, (_) => parseInt(_, 10));
        }
        if (directive === "%f") {
          return numberText(arg, parseFloat);
        }
        return argText(arg);
      }));
    }
    for (let i = next; i < args.length; i++)
      parts.push(argText(args[i]));
    return ownCopy(limitText(scrubSecrets(parts.join(" ").replace(ANSI_CODE, ""))));
  } catch {
    return "[Log entry that cannot be read]";
  }
}
function numberText(value, parse) {
  return typeof value === "symbol" ? "NaN" : `${parse(String(value))}`;
}
function ownCopy(text) {
  return (" " + text).slice(1);
}
function limitText(text) {
  return text.length > MAX_LOG_MESSAGE ? `${text.slice(0, MAX_LOG_MESSAGE - 1)}\u2026` : text;
}
function argText(value) {
  if (typeof value === "string")
    return value.slice(0, MAX_LOG_MESSAGE);
  if (value instanceof Error)
    return errorText(value);
  if (value && typeof value === "object")
    return boundedJson(value);
  if (typeof value === "function")
    return `[Function ${value.name || "anonymous"}]`;
  return String(value);
}
function errorText(error) {
  const head = `${error.name}: ${error.message}`;
  const stack = typeof error.stack === "string" ? error.stack : "";
  if (!stack)
    return head;
  return stack.startsWith(head) ? stack : `${head}
${stack}`;
}
function boundedJson(root) {
  let out = "";
  const parents = /* @__PURE__ */ new Set();
  const write = (text) => {
    out += text;
    return out.length < MAX_LOG_MESSAGE;
  };
  const visit = (value, depth) => {
    if (typeof value === "string") {
      return write(JSON.stringify(value.slice(0, MAX_LOG_MESSAGE).replace(ANSI_CODE, "")));
    }
    if (!value || typeof value !== "object") {
      return write(typeof value === "function" ? "[Function]" : String(value));
    }
    if (value instanceof Error)
      return write(JSON.stringify(errorText(value)));
    if (value instanceof Date) {
      return write(isNaN(value.getTime()) ? "Invalid Date" : value.toISOString());
    }
    if (parents.has(value))
      return write("[Circular]");
    const list = Array.isArray(value) ? value : null;
    if (depth >= MAX_DEPTH)
      return write(list ? "[Array]" : "[Object]");
    parents.add(value);
    const keys = list ? [] : Object.keys(value);
    const count = list ? list.length : keys.length;
    let open = write(list ? "[" : "{");
    for (let i = 0; open && i < count; i++) {
      if (i > 0 && !write(","))
        open = false;
      else if (!list && !write(`${JSON.stringify(keys[i])}:`))
        open = false;
      else {
        let item;
        try {
          item = list ? list[i] : value[keys[i]];
        } catch {
          item = "[Unreadable]";
        }
        open = visit(item, depth + 1);
      }
    }
    parents.delete(value);
    return open && write(list ? "]" : "}");
  };
  visit(root, 0);
  return out.slice(0, MAX_LOG_MESSAGE);
}

// libs/common/src/lib/realtime.ts
var ModuleCallFailed = class extends Error {
  constructor(error, target) {
    super(error.kind === "server" && error.message ? error.message : `${target}: ${error.kind}`);
    this.error = error;
    this.name = "ModuleCallFailed";
  }
};
function getModule(sys, mod, index) {
  const slug = index === void 0 && /_\d+$/.test(mod) ? splitModuleSlug(mod) : { mod, index: index ?? 1 };
  const target = (name) => ({
    sys,
    mod: slug.mod,
    index: slug.index,
    name
  });
  const label = `${sys} ${slug.mod}_${slug.index}`;
  return {
    sys,
    mod: slug.mod,
    index: slug.index,
    async execute(method, args = [], options) {
      const result = await placeRealtime().exec(target(method), args, options);
      if (result.ok === false) {
        throw new ModuleCallFailed(result.error, `${label}.${method}`);
      }
      return result.value;
    },
    variable(name) {
      const subscribe = (listener) => placeRealtime().bind(target(name), (state) => {
        if (state.kind === "value")
          listener(state.value);
      });
      return {
        value() {
          const state = placeRealtime().value(target(name));
          return state.kind === "value" ? state.value : void 0;
        },
        subscribe,
        listen: () => new Observable((observer) => subscribe((value) => observer.next(value)))
      };
    }
  };
}

// libs/common/src/lib/remote-debug.ts
var REMOTE_LOG_LEVELS = ["debug", "info", "warn", "error"];
var REMOTE_DEBUG_COMMANDS = [
  "status",
  "settings",
  "storage",
  "navigate",
  "reload",
  "clear_cache",
  "snapshot",
  "animation"
];
var SCREEN_CAPTURE = new InjectionToken("SCREEN_CAPTURE", { providedIn: "root", factory: () => () => import("./screen-capture-2MU7AEBE.js") });
var REMOTE_DEBUG_UPLOAD = new InjectionToken("REMOTE_DEBUG_UPLOAD", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return async (file) => isMock() ? URL.createObjectURL(file) : injector.get(UploadsService).uploadFileToCompletion(file, false, "support");
  }
});
var REMOTE_DEBUG_BINDING = "remote_debug";
var REMOTE_DEBUG_MODULE = "RemoteDebug";
var REMOTE_DEBUG_MEMORY_BYTES = 32 * 1024 * 1024;
var MAX_REMOTE_LOG_ENTRIES = 8e3;
var MAX_REMOTE_LOG_BUFFER_BYTES = 8 * 1024 * 1024;
var MAX_REMOTE_LOG_HISTORY = 1e3;
var MAX_REMOTE_LOG_QUEUE_BYTES = 2 * 1024 * 1024;
var LOG_ENTRY_BYTES = 64;
var MAX_REMOTE_LOG_BATCH = 100;
var MAX_REMOTE_DEBUG_COMMANDS = 20;
var MAX_SETTINGS_KEYS = 50;
var MAX_RESULT_LENGTH = 1e5;
var SECRET_FIELD = /token|secret|password|api[_-]?key|credential|(^|[._])keys([._]|$)/i;
var MAX_HANDLED_COMMANDS = 50;
var HANDLED_COMMANDS_KEY = "PLACEOS.remote_debug.handled_commands";
var UPLOAD_TIMEOUT_MS = 2 * 60 * 1e3;
var SNAPSHOT_WIDTH = { default: 1280, max: 1920 };
var ANIMATION_WIDTH = { default: 640, max: 960 };
var ANIMATION_DURATION = { default: 5e3, max: 1e4 };
var ANIMATION_FPS = { default: 2, max: 5 };
var SEND_INTERVAL_MS = 1e3;
var CALL_TIMEOUT_MS = 30 * 1e3;
var BINDING_RETRY_MS = 60 * 1e3;
var REGISTER_SPREAD_MS = 60 * 1e3;
var DEFAULT_DURATION_MS = 15 * 60 * 1e3;
var MAX_DURATION_MS = 60 * 60 * 1e3;
var LOG_TAG = "RemoteDebug";
var CONSOLE_LEVEL = {
  debug: "debug",
  log: "info",
  info: "info",
  warn: "warn",
  error: "error"
};
function remoteDebugDeviceBinding(device_id) {
  return `device:${device_id}`;
}
var REMOTE_DEBUG_DEVICES = "devices";
var REMOTE_DEBUG_HEARTBEAT_MS = 15 * 60 * 1e3;
var REMOTE_DEBUG_ONLINE_MS = 2 * REMOTE_DEBUG_HEARTBEAT_MS + 5 * 60 * 1e3;
function isRemoteDebugDeviceOnline(device, now) {
  return now - device.last_seen < REMOTE_DEBUG_ONLINE_MS;
}
function remoteDebugSeenText(last_seen, now) {
  if (now - last_seen < 60 * 1e3)
    return "just now";
  return formatDistance(last_seen, now, { addSuffix: true });
}
function remoteDebugLogsBinding(device_id) {
  return `logs:${device_id}`;
}
function remoteDebugResultsBinding(device_id) {
  return `results:${device_id}`;
}
function remoteDebugMediaUrl(upload_id) {
  return upload_id.startsWith("blob:") ? upload_id : `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
}
async function readRemoteDebugModule(org_id) {
  if (!org_id)
    return void 0;
  const bindings = await metadata_exports.show({ id: org_id, name: "bindings" }).then(orThrow).then((_) => jsonRecord(_?.["bindings"]?.details)).catch(() => null);
  if (!bindings)
    return void 0;
  const binding = bindings[REMOTE_DEBUG_BINDING];
  const { id, module } = typeof binding === "string" ? { id: binding } : binding ?? {};
  if (typeof id !== "string" || !id)
    return null;
  return getModule(id, typeof module === "string" && module ? module : REMOTE_DEBUG_MODULE);
}
function remoteDebugOrgId(org) {
  return org.organisation?.id || `${authority()?.config?.["org_zone"] ?? ""}`;
}
function isRemoteLogRequest(value) {
  if (!value || typeof value !== "object")
    return false;
  const request = value;
  return typeof request.id === "string" && !!request.id && REMOTE_LOG_LEVELS.includes(request.level);
}
function isRemoteDebugCommand(value) {
  if (!value || typeof value !== "object")
    return false;
  const command = value;
  if (typeof command["id"] !== "string" || !command["id"])
    return false;
  switch (command["type"]) {
    case "settings":
      return Array.isArray(command["keys"]) && command["keys"].every((_) => typeof _ === "string");
    case "navigate":
      return typeof command["path"] === "string" && command["path"].startsWith("/");
    case "snapshot":
      return optionalNumber(command["width"]);
    case "animation":
      return optionalNumber(command["width"]) && optionalNumber(command["duration"]) && optionalNumber(command["fps"]) && (command["format"] === void 0 || command["format"] === "webp" || command["format"] === "gif");
    default:
      return REMOTE_DEBUG_COMMANDS.includes(command["type"]);
  }
}
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function isTime(value) {
  return typeof value === "number" && !isNaN(new Date(value).getTime());
}
function readDevice(value) {
  if (!isRecord(value))
    return null;
  const { id, app: app2, version, build, url, user_agent, started_at } = value;
  return typeof id === "string" && typeof app2 === "string" && typeof version === "string" && typeof build === "string" && typeof url === "string" && typeof user_agent === "string" && isTime(started_at) ? { id, app: app2, version, build, url, user_agent, started_at } : null;
}
function readEntry(value) {
  if (!isRecord(value))
    return null;
  const { seq, timestamp, level, source, message } = value;
  return typeof seq === "number" && isTime(timestamp) && REMOTE_LOG_LEVELS.includes(level) && (source === "console" || source === "error" || source === "rejection") && typeof message === "string" ? { seq, timestamp, level, source, message } : null;
}
function readResult(value) {
  if (!isRecord(value) || !isRecord(value["result"]))
    return null;
  const { id, type, received_at } = value;
  const { ok, data, error } = value["result"];
  return typeof id === "string" && REMOTE_DEBUG_COMMANDS.includes(type) && isTime(received_at) && typeof ok === "boolean" ? {
    id,
    type,
    received_at,
    result: {
      ok,
      data,
      error: typeof error === "string" ? error : void 0
    }
  } : null;
}
function readSeenDevice(value) {
  const device = readDevice(value);
  const last_seen = isRecord(value) ? value["last_seen"] : null;
  return device && isTime(last_seen) ? __spreadProps(__spreadValues({}, device), { last_seen }) : null;
}
function readAll(list, read) {
  return list.map(read).filter((_) => _ !== null);
}
function readRemoteLogsView(value) {
  if (!isRecord(value) || !Array.isArray(value["entries"]))
    return null;
  return {
    device: readDevice(value["device"]),
    entries: readAll(value["entries"], readEntry)
  };
}
function readRemoteDebugResults(value) {
  return Array.isArray(value) ? readAll(value, readResult) : [];
}
function readRemoteDebugDevices(value) {
  return isRecord(value) ? readAll(Object.values(value), readSeenDevice) : [];
}
function readRemoteDebugMedia(data) {
  if (!isRecord(data))
    return null;
  const { mime, width, height, frames, duration, bytes, upload_id } = data;
  return typeof mime === "string" && typeof width === "number" && typeof height === "number" && typeof frames === "number" && typeof duration === "number" && typeof bytes === "number" && typeof upload_id === "string" ? { mime, width, height, frames, duration, bytes, upload_id } : null;
}
function isAtLogLevel(level, minimum) {
  return REMOTE_LOG_LEVELS.indexOf(level) >= REMOTE_LOG_LEVELS.indexOf(minimum);
}
var RemoteDebugService = class _RemoteDebugService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._loadCapture = inject(SCREEN_CAPTURE);
    this._upload = inject(REMOTE_DEBUG_UPLOAD);
    this._started_at = Date.now();
    this._buffer = new BoundedEntries(MAX_REMOTE_LOG_ENTRIES, MAX_REMOTE_LOG_BUFFER_BYTES);
    this._queue = new BoundedEntries(MAX_REMOTE_LOG_HISTORY, MAX_REMOTE_LOG_QUEUE_BYTES);
    this._seq = 0;
    this._log_counts = {
      debug: 0,
      info: 0,
      warn: 0,
      error: 0
    };
    this._last_error = null;
    this._capturing = false;
    this._module = null;
    this._module_key = null;
    this._request = null;
    this._ended_id = "";
    this._sending = false;
    this._commands = [];
    this._running_commands = false;
    this._run_again = false;
    this._handled = [];
    this.device_id = deviceId();
    this._startCapture();
    effect(() => {
      if (!this._org.initialised())
        return;
      untracked(() => this._loadBinding());
    });
  }
  /** Entries that the device keeps now, oldest first */
  get entries() {
    return this._buffer.list;
  }
  /** Log request that is active now. `null` when there is none */
  get request() {
    return this._request;
  }
  destroy() {
    this._endRequest();
    super.destroy();
  }
  /**
   * Read the `remote_debug` binding of the organisation zone. The service
   * reads it itself, as some apps do not load zone bindings
   * (`dont_load_metadata`). Capture continues until a read shows that
   * there is no binding. When there is no organisation zone yet, or the
   * read fails, for example after an offline start, the device tries again
   * each minute until a read succeeds.
   */
  async _loadBinding() {
    this.clearTimeout("binding");
    const org_id = remoteDebugOrgId(this._org);
    const mod = await readRemoteDebugModule(org_id);
    if (mod === void 0) {
      log(LOG_TAG, `Failed to read the bindings of "${org_id}"`);
      this.timeout("binding", () => this._loadBinding(), BINDING_RETRY_MS);
      return;
    }
    this._connect(mod);
  }
  /** Listen to the driver of the binding. `null` stops remote debugging */
  _connect(mod) {
    const key = mod ? `${mod.sys}/${mod.mod}_${mod.index}` : "";
    if (key === this._module_key)
      return;
    this._endRequest();
    this.unsub("state");
    this.clearTimeout("register");
    this._module = mod;
    this._module_key = key;
    this._commands = [];
    if (!mod) {
      this._stopCapture();
      return;
    }
    this._startCapture();
    log(LOG_TAG, `Listening for debug requests for ${this.device_id}`);
    this.subscription("state", mod.variable(remoteDebugDeviceBinding(this.device_id)).subscribe((value) => this._applyState(value)));
    this._startRegister();
  }
  /**
   * Register a fixed device with the driver, so the admin views list it
   * before it gets a request. The first call is after a random wait of
   * `REGISTER_SPREAD_MS` maximum, then one call each
   * `REMOTE_DEBUG_HEARTBEAT_MS`. Devices that are not fixed, such as
   * staff browsers, do not register. They check again after each random
   * wait, because the bootstrap screen can make a device fixed without a
   * reload.
   */
  _startRegister() {
    this.timeout("register", () => this._register(), Math.random() * REGISTER_SPREAD_MS);
  }
  /**
   * Register, then wait for the next heartbeat. A call while the websocket is down
   * waits, and the waiting calls all go when the socket opens again,
   * so a device that is not connected does not call. It tries
   * again after a new random wait, so devices that reconnect together
   * spread their calls. A device that is not fixed also tries again.
   */
  _register() {
    const mod = this._module;
    if (!mod)
      return;
    if (!realtimeConnected() || !isFixedDevice()) {
      this._startRegister();
      return;
    }
    this._call(mod, "register", [this._deviceDetails()]).catch((error) => log(LOG_TAG, "Failed to register", error, "warn"));
    this.timeout("register", () => this._register(), REMOTE_DEBUG_HEARTBEAT_MS);
  }
  _applyState(value) {
    const state = value && typeof value === "object" ? value : {};
    this._applyRequest(state.logs);
    this._commands = Array.isArray(state.commands) ? state.commands.slice(0, MAX_REMOTE_DEBUG_COMMANDS).filter(isRemoteDebugCommand) : [];
    this._runCommands();
  }
  _startCapture() {
    if (this._capturing)
      return;
    this._capturing = true;
    this.subscription("console", listenToConsole((method, args) => this._add(CONSOLE_LEVEL[method], "console", formatLogArgs(args))));
    const onError = (event) => {
      const where = event.filename ? ` (${event.filename}:${event.lineno}:${event.colno})` : "";
      this._add("error", "error", formatLogArgs([event.error ?? `${event.message}${where}`]));
    };
    const onRejection = (event) => this._add("error", "rejection", formatLogArgs(["Unhandled rejection:", event.reason]));
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    this.subscription("errors", () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    });
  }
  _stopCapture() {
    this._capturing = false;
    this.unsub("console");
    this.unsub("errors");
    this._buffer.set([]);
    this._last_error = null;
  }
  _add(level, source, message) {
    if (message.includes(`[${LOG_TAG}]`) || this._isOwnCallLine(message)) {
      return;
    }
    const entry = {
      seq: ++this._seq,
      timestamp: Date.now(),
      level,
      source,
      message
    };
    this._log_counts[level]++;
    if (level === "error")
      this._last_error = entry;
    this._buffer.push(entry);
    if (this._request && isAtLogLevel(level, this._request.level)) {
      this._queue.push(entry);
    }
  }
  /**
   * Whether a line is a ts-client debug line about a change of a binding of
   * the driver, such as `[PlaceOS][WS] sys-1 RemoteDebug_1 logs:<id>
   * changed`. These lines show only with `window.debug`. A `logs:<id>`
   * change of this device comes from its own `post_logs` call, so if the
   * device sent them, each call would cause the next one. ts-client does not
   * log the calls themselves.
   */
  _isOwnCallLine(message) {
    const mod = this._module;
    if (!mod)
      return false;
    return message.startsWith(`[PlaceOS][WS] ${mod.sys} ${mod.mod}_${mod.index} `);
  }
  /** Call a method of the driver */
  async _call(mod, method, args) {
    return mod.execute(method, args, { timeout_ms: CALL_TIMEOUT_MS });
  }
  /**
   * Apply the log request of the binding. A new request ID queues the
   * buffered entries. The same ID with a new level or duration changes the
   * level and starts the duration again. Other values end the request.
   */
  _applyRequest(value) {
    if (!isRemoteLogRequest(value))
      return this._endRequest();
    if (value.id === this._ended_id)
      return;
    const active = this._request;
    if (active?.id === value.id && active.level === value.level && active.duration === value.duration) {
      return;
    }
    const level = value.level;
    if (value.id !== this._request?.id) {
      const history2 = clamp(value.history, MAX_REMOTE_LOG_HISTORY);
      const before = typeof value.before === "number" ? value.before : Infinity;
      const matching = this._buffer.list.filter((_) => _.seq < before && isAtLogLevel(_.level, level));
      this._queue.set(history2 ? matching.slice(-history2) : []);
      log(LOG_TAG, `Sending logs for request ${value.id}`);
    } else {
      this._queue.set(this._queue.list.filter((_) => isAtLogLevel(_.level, level)));
    }
    this._request = value;
    setDebugLogging(level === "debug");
    this.timeout("request_end", () => this._endRequest(), clamp(value.duration ?? DEFAULT_DURATION_MS, MAX_DURATION_MS));
    if (!this._intervals["send"]) {
      this.interval("send", () => this._send(), SEND_INTERVAL_MS);
    }
    this._send();
  }
  _endRequest() {
    if (!this._request)
      return;
    log(LOG_TAG, `Log request ${this._request.id} ended`);
    this._ended_id = this._request.id;
    this._request = null;
    this._queue.set([]);
    setDebugLogging(false);
    this.clearTimeout("request_end");
    this.clearInterval("send");
  }
  /**
   * Send the next batch of queued entries. One call runs at a time. Entries
   * leave the queue only when the call succeeds, so a failed batch is sent
   * again. The queue keeps `MAX_REMOTE_LOG_HISTORY` entries and
   * `MAX_REMOTE_LOG_QUEUE_BYTES` maximum.
   */
  async _send() {
    const request = this._request;
    const mod = this._module;
    const queue = this._queue.list;
    if (this._sending || !request || !mod || !queue.length)
      return;
    const batch = queue.slice(0, MAX_REMOTE_LOG_BATCH);
    const last_seq = batch[batch.length - 1].seq;
    this._sending = true;
    try {
      await this._call(mod, "post_logs", [
        this.device_id,
        request.id,
        batch,
        this._deviceDetails()
      ]);
      if (this._request?.id === request.id) {
        this._queue.set(this._queue.list.filter((_) => _.seq > last_seq));
      }
    } catch (error) {
      log(LOG_TAG, "Failed to send logs", error, "warn");
    } finally {
      this._sending = false;
    }
  }
  /**
   * Run the commands that the device did not handle yet, one at a time and
   * oldest first. The command ID is saved before the command runs, so a
   * reload does not run it again. A failed `command_result` call is not
   * sent again.
   */
  async _runCommands() {
    if (this._running_commands) {
      this._run_again = true;
      return;
    }
    this._running_commands = true;
    this._run_again = false;
    let reloading = false;
    try {
      for (let i = 0; i < MAX_REMOTE_DEBUG_COMMANDS; i++) {
        const stored = readHandledCommands();
        const command = this._commands.find((_) => !stored.includes(_.id) && !this._handled.includes(_.id));
        const mod = this._module;
        if (!command || !mod)
          break;
        this._handled = [...this._handled, command.id].slice(-MAX_HANDLED_COMMANDS);
        const saved = saveHandledCommands([...stored, command.id]);
        log(LOG_TAG, `Running command ${command.type}`, command.id);
        const result = await this._runCommand(command, saved);
        await this._call(mod, "command_result", [
          this.device_id,
          command.id,
          result,
          this._deviceDetails()
        ]).catch((error) => log(LOG_TAG, "Failed to send result", error, "warn"));
        if (result.ok && isReloadCommand(command)) {
          reloading = true;
          location.reload();
          return;
        }
      }
    } finally {
      this._running_commands = false;
      if (this._run_again && !reloading)
        this._runCommands();
    }
  }
  /**
   * Result of a command. `reload` and `clear_cache` run only when the
   * device saved the command ID, so a device without storage does not
   * reload again and again.
   */
  async _runCommand(command, saved) {
    if (isReloadCommand(command) && !saved) {
      return { ok: false, error: "Local storage is not available" };
    }
    try {
      const data = await this._commandData(command);
      const json = scrubSecrets(JSON.stringify(data ?? null, (key, value) => key && SECRET_FIELD.test(key) && value !== null && typeof value !== "boolean" ? "[Filtered]" : value));
      if (json.length > MAX_RESULT_LENGTH) {
        return { ok: false, error: "Result is too large" };
      }
      return { ok: true, data: JSON.parse(json) };
    } catch (error) {
      return { ok: false, error: formatLogArgs([error]) };
    }
  }
  async _commandData(command) {
    switch (command.type) {
      case "status":
        return this._status();
      case "settings":
        return Object.fromEntries(command.keys.slice(0, MAX_SETTINGS_KEYS).map((key) => [key, this._settings.get(key) ?? null]));
      case "storage":
        return storageItems();
      case "navigate": {
        const done = await this._router.navigateByUrl(command.path);
        if (!done)
          throw new Error(`Cannot open ${command.path}`);
        return { url: this._router.url };
      }
      case "reload":
        return null;
      case "clear_cache":
        return clearCaches();
      case "snapshot":
      case "animation":
        return this._captureMedia(command);
    }
  }
  /** Capture the screen, then upload the file. See `REMOTE_DEBUG_UPLOAD` */
  async _captureMedia(command) {
    const capture = await this._loadCapture();
    const media = command.type === "snapshot" ? await capture.captureSnapshot(limit(command.width, SNAPSHOT_WIDTH)) : await capture.captureAnimation({
      width: limit(command.width, ANIMATION_WIDTH),
      duration: limit(command.duration, ANIMATION_DURATION),
      fps: limit(command.fps, ANIMATION_FPS),
      format: command.format ?? "webp"
    });
    if (media.bytes.length > capture.MAX_MEDIA_BYTES) {
      throw new Error("The file is too large. Use a smaller width");
    }
    const extension = media.mime.split("/")[1];
    const file = new File([media.bytes], `remote-debug-${this.device_id}-${command.id}.${extension}`, { type: media.mime });
    const upload_id = await withTimeout(this._upload(file), UPLOAD_TIMEOUT_MS, "The upload did not finish in time");
    return {
      mime: media.mime,
      width: media.width,
      height: media.height,
      frames: media.frames,
      duration: media.duration,
      bytes: media.bytes.length,
      upload_id
    };
  }
  async _status() {
    const memory = performance.memory;
    const storage = await navigator.storage?.estimate().catch(() => null);
    const user = currentUser();
    return {
      device: this._deviceDetails(),
      device_time: Date.now(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      online: navigator.onLine,
      websocket: realtimeConnected(),
      visible: document.visibilityState === "visible",
      native: isNativeApp(),
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        pixel_ratio: window.devicePixelRatio
      },
      memory: memory ? {
        used: memory.usedJSHeapSize,
        limit: memory.jsHeapSizeLimit
      } : null,
      storage: storage ? { usage: storage.usage ?? 0, quota: storage.quota ?? 0 } : null,
      service_worker: {
        active: !!navigator.serviceWorker?.controller,
        new_version: hasNewVersion()
      },
      user: user?.id ? { id: user.id, email: user.email } : null,
      building_id: this._org.building?.id ?? "",
      setting_overrides: Object.keys(this._settings.debug_overrides()),
      log_counts: __spreadValues({}, this._log_counts),
      last_error: this._last_error,
      buffered: this._buffer.list.length,
      log_request: this._request?.id ?? null
    };
  }
  _deviceDetails() {
    return {
      id: this.device_id,
      // The short name of most fixed device apps is PlaceOS
      app: `${this._settings.get("app.name") || appName()}`,
      version: `${VERSION.version ?? ""}`,
      build: `${VERSION.hash ?? ""}`,
      url: scrubSecrets(location.href),
      user_agent: navigator.userAgent,
      started_at: this._started_at
    };
  }
  static {
    this.\u0275fac = function RemoteDebugService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteDebugService, factory: _RemoteDebugService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
var BoundedEntries = class {
  constructor(_max_count, _max_bytes) {
    this._max_count = _max_count;
    this._max_bytes = _max_bytes;
    this._entries = [];
    this._bytes = 0;
  }
  get list() {
    return this._entries;
  }
  push(entry) {
    this._entries.push(entry);
    this._bytes += entryBytes(entry);
    this._trim();
  }
  set(entries) {
    this._entries = [...entries];
    this._bytes = this._entries.reduce((sum, _) => sum + entryBytes(_), 0);
    this._trim();
  }
  /** Each step removes one entry, so the loop ends when the list is empty */
  _trim() {
    while (this._entries.length > this._max_count || this._bytes > this._max_bytes) {
      const removed = this._entries.shift();
      if (!removed)
        break;
      this._bytes -= entryBytes(removed);
    }
  }
};
function entryBytes(entry) {
  return entry.message.length * 2 + LOG_ENTRY_BYTES;
}
function isReloadCommand(command) {
  return command.type === "reload" || command.type === "clear_cache";
}
function storageItems() {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === null)
      continue;
    items.push({ key, length: localStorage.getItem(key)?.length ?? 0 });
  }
  return items.sort((a, b) => a.key.localeCompare(b.key));
}
async function clearCaches() {
  const names = await globalThis.caches?.keys() ?? [];
  await Promise.all(names.map((name) => caches.delete(name)));
  const workers = await navigator.serviceWorker?.getRegistrations() ?? [];
  await Promise.all(workers.map((worker) => worker.unregister()));
  return { caches: names.length, workers: workers.length };
}
function readHandledCommands() {
  try {
    const list = JSON.parse(localStorage.getItem(HANDLED_COMMANDS_KEY) || "[]");
    return Array.isArray(list) ? list.filter((_) => typeof _ === "string") : [];
  } catch {
    return [];
  }
}
function saveHandledCommands(ids) {
  try {
    localStorage.setItem(HANDLED_COMMANDS_KEY, JSON.stringify(ids.slice(-MAX_HANDLED_COMMANDS)));
    return true;
  } catch {
    return false;
  }
}
function optionalNumber(value) {
  return value === void 0 || typeof value === "number" && isFinite(value);
}
function limit(value, range) {
  if (typeof value !== "number" || !isFinite(value))
    return range.default;
  return Math.min(Math.max(value, 1), range.max);
}
function clamp(value, max) {
  if (typeof value !== "number" || isNaN(value))
    return max;
  return Math.min(Math.max(Math.floor(value), 0), max);
}

// libs/common/src/lib/teams-host.ts
var TEAMS_HOST_PARAM = "host";
var AUTH_STORE_KEY = "PLACEOS.teams_auth";
var INIT_TIMEOUT_MS = 5e3;
var SSO_TIMEOUT_MS = 1e4;
var MAX_SIGN_IN_ATTEMPTS = 5;
var EXPIRY_MARGIN_MS = 5 * 60 * 1e3;
var _teams = null;
var _sso_paused = false;
var _sign_in_resolve = null;
var SIGN_IN_REQUIRED = signal(
  false,
  ...ngDevMode ? [{ debugName: "SIGN_IN_REQUIRED" }] : (
    /* istanbul ignore next */
    []
  )
);
function teamsHostMode(search = location.search, storage = sessionStorage) {
  const host = new URLSearchParams(search).get(TEAMS_HOST_PARAM);
  if (host === "teams-auth" || storage.getItem(AUTH_STORE_KEY) === "true") {
    return "auth";
  }
  return host === "teams" ? "tab" : null;
}
async function startTeamsHost(mode = teamsHostMode()) {
  if (!mode)
    return null;
  if (mode === "auth")
    sessionStorage.setItem(AUTH_STORE_KEY, "true");
  try {
    const teams = await import("./src-GJMLDHIJ.js");
    await withTimeout(teams.app.initialize(), INIT_TIMEOUT_MS, "Microsoft Teams host did not respond.");
    _teams = teams;
    log("Teams", `Connected to host as ${mode}.`);
    return mode;
  } catch (error) {
    log("Teams", "Host is not available.", error, "warn");
    return null;
  }
}
async function finishTeamsSignIn(mode) {
  if (!_teams)
    throw new Error("Call startTeamsHost() first.");
  if (mode === "auth") {
    const place_token = token();
    if (place_token) {
      sessionStorage.removeItem(AUTH_STORE_KEY);
      _teams.authentication.notifySuccess(place_token);
    }
    return false;
  }
  if (token())
    return true;
  const session = placeSession();
  if (session?.status().kind === "loading")
    await session.authorize();
  if (token())
    return true;
  _sso_paused = true;
  const signed_in = await signInTeamsTab(_teams).finally(() => _sso_paused = false);
  if (signed_in)
    return true;
  failInitialisation("Sign in did not finish. Select Try again to sign in.");
  return false;
}
async function teamsEntraToken() {
  if (!_teams || _sso_paused)
    return null;
  return withTimeout(_teams.authentication.getAuthToken(), SSO_TIMEOUT_MS, "Microsoft single sign-on timed out.").catch((error) => {
    log("Teams", "SSO failed.", error, "warn");
    return null;
  });
}
async function signInTeamsTab(teams) {
  const url = `${location.origin}${location.pathname}?${TEAMS_HOST_PARAM}=teams-auth`;
  for (let attempt = 0; attempt < MAX_SIGN_IN_ATTEMPTS; attempt++) {
    if (attempt > 0) {
      await new Promise((resolve) => {
        _sign_in_resolve = resolve;
        SIGN_IN_REQUIRED.set(true);
      });
    }
    const place_token = await teams.authentication.authenticate({ url, width: 600, height: 600 }).catch((error) => {
      log("Teams", "Sign-in window failed.", error, "warn");
      return "";
    });
    if (place_token) {
      setToken(place_token, tokenExpiry(place_token));
      return true;
    }
  }
  return false;
}
function tokenExpiry(jwt) {
  try {
    const payload = jwt.split(".")[1];
    if (!payload)
      return void 0;
    const claims = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof claims.exp === "number" ? claims.exp * 1e3 - EXPIRY_MARGIN_MS : void 0;
  } catch {
    return void 0;
  }
}

// libs/common/src/lib/placeos.service.ts
var START_QUERY = location.search;
var AUTHORITY_WAIT_MS = 10 * 1e3;
var LOADING_MESSAGE = signal(
  "Loading...",
  ...ngDevMode ? [{ debugName: "LOADING_MESSAGE" }] : (
    /* istanbul ignore next */
    []
  )
);
var NEEDS_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "NEEDS_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
var DOMAIN_ERROR = signal(
  "",
  ...ngDevMode ? [{ debugName: "DOMAIN_ERROR" }] : (
    /* istanbul ignore next */
    []
  )
);
var AUTO_CONFIRM_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "AUTO_CONFIRM_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
function getLoadingMessage() {
  return LOADING_MESSAGE;
}
function setLoadingMessage(message) {
  LOADING_MESSAGE.set(message);
}
function needsNativeDomain() {
  return NEEDS_DOMAIN;
}
function nativeDomainError() {
  return DOMAIN_ERROR;
}
function autoConfirmNativeDomain() {
  return AUTO_CONFIRM_DOMAIN;
}
var _mocks = null;
function setMocks(value) {
  _mocks = value;
}
var PlaceOS_Service = class _PlaceOS_Service extends AsyncHandler {
  constructor() {
    super();
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._locale = inject(LocaleService, { optional: true });
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._cache = inject(SwUpdate);
    this._snackbar = lazySnackbar();
    this._hotkey = inject(HotkeysService);
    this._clipboard = inject(Clipboard);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._location = inject(Location);
    this._maps = inject(MapsPeopleService);
    this._error_handler = inject(ErrorHandler);
    this._remote_debug = inject(RemoteDebugService);
    this._zone = "";
    this._region = "";
    this._initial_token = "";
    this._domain_resolve = null;
    initSentryFromSettings();
  }
  async _handleNativeAuthRedirect(url) {
    const callback_url = new URL(url);
    const params = callback_url.searchParams;
    await closeNativeBrowser();
    markNativeAuthRedirectConsumed(url);
    const error = params.get("error");
    if (error || !params.get("code")) {
      const message = params.get("error_description") || error || "Sign in failed. Please try again.";
      console.warn("[AUTH] Native sign in failed.", message);
      setNativeAuthError(message);
      location.replace(`${location.origin}${location.pathname}`);
      return;
    }
    sessionStorage.setItem("ENGINE.auth.params", JSON.stringify({
      code: params.get("code"),
      state: params.get("state")
    }));
    console.warn("[AUTH] Reloading webview with auth code...");
    location.replace(`${location.origin}${location.pathname}?${params.toString()}`);
  }
  get debug() {
    return window.debug && this._settings.get("app.allow_debugging") === true;
  }
  get has_chat() {
    return this._settings.get("app.chat.enabled");
  }
  get has_uploads() {
    return this._settings.get("app.has_uploads") || false;
  }
  set mocks(value) {
    _mocks = value;
  }
  setInitialToken(token2) {
    this._initial_token = token2 || "";
  }
  /** Called by the native domain overlay once the user has set a domain. */
  onNativeDomainSet() {
    NEEDS_DOMAIN.set(false);
    DOMAIN_ERROR.set("");
    AUTO_CONFIRM_DOMAIN.set(false);
    this._domain_resolve?.();
    this._domain_resolve = null;
  }
  async init(options = {}) {
    if (isNativeApp()) {
      hideNativeStatusBar();
      restoreNativePkceVerifier();
      await bindNativeAuthRedirects((url) => {
        this._handleNativeAuthRedirect(url).catch((error) => console.warn("[AUTH] Error handling redirect.", error));
      });
      const launch_url = await consumeNativeAuthRedirect();
      if (launch_url) {
        await this._handleNativeAuthRedirect(launch_url);
        return;
      }
    }
    setupCache(this._cache);
    log("APP", "MOCKS:", _mocks);
    if (_mocks) {
      if (mockModeRequested()) {
        setLoadingMessage("Initializing mocks...");
        await _mocks();
      }
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyM"], () => {
        localStorage.setItem("mock", `${localStorage.getItem("mock") !== "true"}`);
        location.reload();
      });
    } else {
      localStorage.removeItem("mock");
    }
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyD"], () => {
      this._settings.saveUserSetting("dark_mode", !this._settings.get("dark_mode"));
      notifySuccess("Toggled dark mode.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyC"], () => {
      this._clipboard.copy(token());
      notifySuccess("Successfully copied token.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyV"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyF"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    window.pasteToken = (t) => this._pasteToken(t);
    setLoadingMessage("Checking params...");
    this._route.queryParamMap.subscribe((params) => {
      if (params.has("hide_nav"))
        localStorage.setItem("PlaceOS.hide_nav", "true");
      if (params.has("lang")) {
        const locale = params.get("lang");
        this._locale?.setLocale(locale);
        localStorage.setItem("PLACEOS.locale", locale);
      }
      if (params.has("x-api-key") && !isNativeApp()) {
        setApiKey(params.get("x-api-key"));
      }
      if (params.has("region_id")) {
        this._region = params.get("region_id");
      }
      if (params.has("building_id")) {
        this._zone = params.get("building_id");
      }
      if (this._region || this._zone)
        this._setZones();
    });
    setLoadingMessage("Initializing settings...");
    setNotifyOutlet(this._snackbar);
    setTranslationService(this._locale);
    await firstTruthyValueFrom(this._settings.initialised);
    setAppName(this._settings.get("app.short_name"));
    const settings = this._settings.get("composer") || {};
    settings.app_name = this._settings.get("app.name") || this._settings.get("app.short_name");
    settings.mock = !!this._settings.get("mock") || _mocks && location.origin.includes("demo.place.tech");
    if (START_QUERY) {
      const query = Object.fromEntries(new URLSearchParams(START_QUERY));
      const url = this._router.parseUrl(this._location.path() || "/");
      url.queryParams = __spreadValues(__spreadValues({}, query), url.queryParams);
      if (isNativeApp())
        delete url.queryParams["x-api-key"];
      this._router.navigateByUrl(url, { replaceUrl: true });
    }
    let confirm_managed = false;
    if (isNativeApp()) {
      setLoadingMessage("Checking managed configuration...");
      const { config: managed, changed } = await syncNativeManagedConfig();
      if (managed) {
        if (options.allow_mdm_restart && managed.restart_enabled) {
          scheduleNativeRestart(managed.restart_time);
        }
        confirm_managed = changed && !!managed.domain && !managed.skip_interactive_setup;
        AUTO_CONFIRM_DOMAIN.set(confirm_managed && !!options.allow_mdm_restart && !!managed.api_key && !!managed.system_id);
      }
    }
    let intune_token = "";
    if (isNativeApp()) {
      setLoadingMessage("Checking managed account...");
      const account = await getIntuneAccount();
      if (account) {
        intune_token = await getIntuneToken(account, this._settings.get("app.intune.scopes") || void 0);
        const email = `${account.username || ""}`.trim();
        if (email && !getNativeDomain()) {
          const domain = await lookupNativeDomainByEmail(email).catch(() => "");
          if (domain) {
            setNativeDomain(domain);
            setNativeEmail(email);
          }
        }
      }
    }
    while (isNativeApp()) {
      let domain = getNativeDomain();
      while (!domain || confirm_managed) {
        confirm_managed = false;
        setLoadingMessage("Waiting for server configuration...");
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
        domain = getNativeDomain();
      }
      settings.domain = domain;
      settings.protocol = "https:";
      settings.use_domain = true;
      setLoadingMessage("Authenticating...");
      const auth_error = await setupPlace(settings, void 0, {
        api_key: getNativeApiKey() || ""
      }).then(() => null).catch((_) => _);
      if (!auth_error) {
        if (intune_token)
          setToken(intune_token);
        break;
      }
      log("APP", "Auth failed, resetting domain.", auth_error, "warn");
      stopPlaceClient();
      clearNativeDomain();
      clearNativeApiKey();
      DOMAIN_ERROR.set(`Unable to connect to "${domain}". The server may be unavailable, or the email address may be for a different server. Try again.`);
    }
    if (isNativeApp() && !token()) {
      const boot_params = new URLSearchParams(START_QUERY);
      if (boot_params.has("code")) {
        console.warn("[AUTH] Auth code was present on load but the token exchange did not complete.");
      }
    }
    const has_refresh_token = !!localStorage.getItem(`${clientId()}_refresh_token`);
    if (isNativeApp() && !token() && !has_refresh_token && authority()) {
      const auth_error = consumeNativeAuthError();
      if (auth_error) {
        setLoadingMessage("Waiting for sign in...");
        DOMAIN_ERROR.set(auth_error);
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
      }
      setLoadingMessage("Opening sign in...");
      const auth_url = await createNativeAuthUrl(settings, clientId());
      console.warn(`[AUTH] Opening sign in: ${auth_url.split("?")[0]}`);
      await openNativeBrowser(auth_url);
      return;
    }
    if (!isNativeApp()) {
      const teams_mode = await startTeamsHost();
      if (teams_mode)
        settings.local_login = teams_mode === "tab";
      setLoadingMessage("Authenticating...");
      await setupPlace(settings, AUTHORITY_WAIT_MS, {
        // A Teams tab signs in with the SSO token of the host
        entra_token: teams_mode === "tab" ? teamsEntraToken : void 0,
        // Keep the tokens of the tab and the sign-in window over a
        // reload
        trusted: !!teams_mode
      }).catch((_) => console.error(_));
      if (teams_mode) {
        setLoadingMessage("Waiting for Microsoft sign in...");
        if (!await finishTeamsSignIn(teams_mode))
          return;
      }
    }
    if (this._initial_token)
      setToken(this._initial_token);
    try {
      await withTimeout(this._org.waitUntilInitialised(), 5e4, "Organisation loading timed out.");
    } catch (error) {
      this._error_handler.handleError(error);
      requestInitReload();
      return;
    }
    if (this._locale) {
      this._locale.zone_id = this._org.organisation.id;
      this._locale.init();
    }
    setupCache(this._cache, this._settings.get("service_worker") || {});
    try {
      await withTimeout(waitForCurrentUser(), 3e4, "Current user loading timed out.");
    } catch (error) {
      this._error_handler.handleError(error);
      this.onInitError();
      return;
    }
    clearNativePkceVerifier();
    this._initLocale();
    setInternalUserDomain(this._settings.get("app.internal_user_domain") || `@${currentUser()?.email?.split("@")[1]}`);
    this._initAnalytics();
    try {
      this._initFixedDevice();
    } catch {
      log("APP", "Failed to initialise background services.", void 0, "warn");
    }
    this._setZones();
    if (this._locale) {
      await Promise.race([
        this._locale.loaded(),
        new Promise((resolve) => setTimeout(resolve, 5e3))
      ]);
    }
    markInitialisationComplete();
  }
  onInitError() {
    if (isMock() || currentUser()?.is_logged_in)
      return;
    if (isNativeApp() && getNativeApiKey()) {
      clearNativeApiKey();
      clearNativeDomain();
      localStorage.removeItem(`${clientId()}_x-api-key`);
      invalidateToken();
    } else if (!token())
      invalidateToken();
    requestInitReload();
  }
  _initAnalytics() {
    const tracking_id = this._settings.get("app.analytics.tracking_id");
    if (!this._analytics)
      return;
    this._analytics.enabled = this._settings.get("app.analytics.enabled") !== false;
    if (!tracking_id || !this._analytics.enabled)
      return;
    setLoadingMessage("Initialising analytics...");
    try {
      this._analytics.init(tracking_id);
      this._analytics.load(tracking_id);
      this._analytics.setUser(currentUser().id);
    } catch (error) {
      log("APP", "Failed to initialise analytics.", error, "warn");
      return;
    }
    if (!tracking_id.startsWith("G-"))
      return;
    if (this._router.navigated)
      this._analytics.page(this._router.url);
    this.subscription("analytics-router", this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => this._analytics.page(event.urlAfterRedirects)));
  }
  _initLocale() {
    setLoadingMessage("Loading locales...");
    try {
      let locale = localStorage.getItem("PLACEOS.locale");
      const locales = this._settings.get("app.locales") || [];
      if (locale) {
        this._locale?.setLocale(locale);
      } else {
        const list = navigator.languages;
        for (const lang of list) {
          locale = locales.find((_) => _.id === lang);
          if (!locale)
            locale = locales.find((_) => lang.includes(_.id));
          if (locale) {
            this._locale?.setLocale(lang);
            localStorage.setItem("PLACEOS.locale", lang);
            break;
          }
        }
      }
    } catch {
      log("APP", "Failed to initialise locale service.", void 0, "warn");
    }
  }
  /**
   * Uses a token from the clipboard, such as one copied from another app,
   * as `access` or `access|refresh`. The token can be for another account,
   * so the app reloads and the login uses it one time (see
   * `pastedTokenKey`).
   */
  _pasteToken(tkn) {
    const [token2, refresh_token] = tkn.split("|").map((_) => _.trim());
    if (!token2)
      return;
    sessionStorage.setItem(pastedTokenKey(clientId()), JSON.stringify({
      token: token2,
      refresh_token: refresh_token || null,
      expires_at: addHours(/* @__PURE__ */ new Date(), 6).valueOf()
    }));
    notifySuccess("Successfully pasted token.");
    setTimeout(() => location.reload(), 2e3);
  }
  _checkReload() {
    if (!hasNewVersion())
      return;
    setLoadingMessage("Checking for updates...");
    reloadForNewVersion();
  }
  async _initFixedDevice() {
    if (!isFixedDevice())
      return;
    setLoadingMessage("Initialising as fixed device...");
    this.interval("auto-update-version", () => this._checkReload(), 15 * 1e3);
    await requestScreenWakeLock();
  }
  _setZones() {
    if (this._region || this._zone) {
      this._org.skipAutoSelection();
    }
    this.timeout("set_building+region", async () => {
      const building_list = this._org.building_list();
      let bld = building_list.find((b) => b.id === this._zone);
      const target_region_id = this._region || bld?.parent_id;
      const region = this._org.regions.find((b) => b.id === target_region_id);
      if (region)
        await this._org.setRegion(region);
      if (!bld && this._zone) {
        const building_list2 = this._org.building_list();
        bld = building_list2.find((b) => b.id === this._zone);
      }
      if (bld)
        this._org.setBuilding(bld, true);
    }, 1e3);
  }
  static {
    this.\u0275fac = function PlaceOS_Service_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceOS_Service)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceOS_Service, factory: _PlaceOS_Service.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceOS_Service, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/signal.utilities.ts
function firstValueWhere(value, predicate = (_) => !!_, injector) {
  const current = untracked(value);
  if (predicate(current))
    return Promise.resolve(current);
  return new Promise((resolve) => {
    let ref;
    ref = untracked(() => effect(() => {
      const current2 = value();
      if (!predicate(current2))
        return;
      ref.destroy();
      resolve(current2);
    }, { injector }));
  });
}

// libs/common/src/lib/org/organisation.service.ts
var log3 = scoped_log("ORG");
var ORG_CACHE_PREFIX = "PLACEOS.org";
var ZONE_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.zones`;
var AUTHORITY_CACHE_KEY = `${ORG_CACHE_PREFIX}.authority`;
var OFFLINE_BOOT_DELAY = 10 * 1e3;
var ZONE_LOAD_TIMEOUT = 30 * 1e3;
var GEOLOCATION_TIMEOUT = 10 * 1e3;
var METADATA_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.metadata`;
var MAX_CACHE_AGE2 = 7 * 24 * 60 * 60 * 1e3;
function cachedAuthority() {
  const auth = authority();
  if (auth?.id) {
    const details = {
      id: auth.id,
      metadata_cache_id: `${auth.config?.["metadata_cache_id"] || ""}`
    };
    try {
      localStorage.setItem(AUTHORITY_CACHE_KEY, JSON.stringify(details));
    } catch {
    }
    return details;
  }
  try {
    return JSON.parse(localStorage.getItem(AUTHORITY_CACHE_KEY) || "null");
  } catch {
    return null;
  }
}
var OrganisationService = class _OrganisationService {
  get _refreshing() {
    return this.refreshing();
  }
  /** Mapping of organisation settings overrides */
  get settings() {
    return this._settings;
  }
  /** Mapping of regions to settings overrides */
  get region_settings() {
    return this._region_settings;
  }
  /** Mapping of buildings to settings overrides */
  get building_settings() {
    return this._building_settings;
  }
  /** Mapping region settings overrides */
  regionSettings(id = "") {
    const region = this._active_region();
    if (!id && region)
      id = region?.id;
    return this._region_settings ? this._region_settings[id] || {} : {};
  }
  /** Mapping building settings overrides */
  buildingSettings(bld_id = "") {
    if (!bld_id && this.building) {
      bld_id = this.building?.id || this.buildings[0]?.id;
    }
    return this._building_settings ? this._building_settings[bld_id] || {} : {};
  }
  /** Organisation data for the application */
  get organisation() {
    return this._organisation;
  }
  /** List of available regions */
  get regions() {
    return this._region_list();
  }
  /** Currently active region */
  get region() {
    return this._active_region();
  }
  set region(item) {
    this.setRegion(item);
  }
  /** Prevent automatic building/region selection from overriding externally set values */
  skipAutoSelection() {
    this._skip_auto_selection = true;
  }
  async setRegion(item) {
    const active_region = this._active_region();
    if (!item || active_region?.id === item?.id)
      return;
    this._active_region.set(item);
    await this.loadRegionData(item);
    this._setBuildingFromTimezone();
    if (!this._skip_auto_selection && this.building?.parent_id !== item.id && this.buildingsForRegion(item).length) {
      this.building = this.buildingsForRegion(item)[0];
    } else
      this._updateSettingOverrides();
    localStorage.setItem("PLACEOS.region", item.id);
  }
  /** List of available buildings */
  get buildings() {
    return this._building_list() || [];
  }
  /** Currently active building */
  get building() {
    return this._active_building();
  }
  set building(bld) {
    this.setBuilding(bld);
  }
  setBuilding(bld, save = false) {
    if (!(bld instanceof Object))
      return;
    this._active_building.set(bld);
    if (!this._service.get("dont_load_metadata")) {
      this.loadBuildingData(bld).then(() => this._updateSettingOverrides());
    }
    if (this.regions.length && this.region?.id !== bld.parent_id) {
      this.region = this.regions.find((_) => _.id === this.building.parent_id);
    }
    if (save)
      localStorage.setItem("PLACEOS.building", bld.id);
  }
  get timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get currency_code() {
    return this._service.get("app.currency") || this.building?.currency || "USD";
  }
  /** Get binding value from the building/organisation */
  binding(name) {
    return this.building?.bindings[name] || this._organisation?.bindings[name];
  }
  module(name, default_mod_id = "System") {
    const binding = this.binding(name);
    const system_id = binding instanceof Object ? binding.id || binding.system_id : binding;
    const mod_id = (binding instanceof Object ? binding.mod || binding.module : "") || default_mod_id;
    return !system_id || !mod_id ? null : getModule(system_id, mod_id);
  }
  /** Get building by id */
  find(id) {
    return this._buildings_by_id().get(id);
  }
  /** List of available levels */
  get levels() {
    return this._level_list();
  }
  set limit_init(state) {
    this._limited_init.set(state);
  }
  constructor() {
    this._service = inject(SettingsService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this._region_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_region_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_region = signal(
      new Region({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._building_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_building_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_building = signal(
      new Building({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_level_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._regions_by_id = computed(
      () => new Map(this._region_list().map((region) => [
        region.id,
        region
      ])),
      ...ngDevMode ? [{ debugName: "_regions_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._buildings_by_id = computed(
      () => new Map(this._building_list().map((building) => [
        building.id,
        building
      ])),
      ...ngDevMode ? [{ debugName: "_buildings_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._levels_by_id = computed(
      () => new Map(this._level_list().map((level) => [
        level.id,
        level
      ])),
      ...ngDevMode ? [{ debugName: "_levels_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_data = {};
    this._served_cache = false;
    this._refresh_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "_refresh_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refreshing = computed(
      () => this._refresh_count() > 0,
      ...ngDevMode ? [{ debugName: "refreshing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_buildings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loaded_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._limited_init = signal(
      false,
      ...ngDevMode ? [{ debugName: "_limited_init" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.app_key = `${(this._service.app_name || "workplace").toLowerCase()}_app`;
    this.region_list = this._region_list.asReadonly();
    this.building_list = this._building_list.asReadonly();
    this.level_list = this._level_list.asReadonly();
    this.active_region = this._active_region.asReadonly();
    this.active_building = this._active_building.asReadonly();
    this.active_building_loaded = computed(
      () => {
        if (this._service.get("dont_load_metadata"))
          return true;
        const id = this._active_building()?.id;
        return !id || this._loaded_buildings().includes(id);
      },
      ...ngDevMode ? [{ debugName: "active_building_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_buildings = computed(
      () => {
        const region = this._active_region();
        return region ? this.buildingsForRegion(region) : this.buildings;
      },
      ...ngDevMode ? [{ debugName: "active_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_levels = computed(
      () => {
        const building = this._active_building();
        return building ? this.levelsForBuilding(building) : [];
      },
      ...ngDevMode ? [{ debugName: "active_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._organisation = new Organisation();
    this._settings = [];
    this._region_settings = {};
    this._building_settings = {};
    this._skip_auto_selection = false;
    this._init_timer = null;
    this._zone_load_timer = null;
    this._override_timer = null;
    this._destroyed = false;
    const online_state = onlineState();
    const online = waitForOnline();
    const start = Promise.race([
      online,
      new Promise((resolve) => setTimeout(resolve, OFFLINE_BOOT_DELAY))
    ]);
    start.then(() => this._scheduleInit());
    let was_online = online_state();
    effect(() => {
      const is_online = online_state();
      if (is_online && !was_online)
        untracked(() => this._scheduleInit());
      was_online = is_online;
    });
    effect(() => {
      this._active_region();
      const building = this._active_building();
      if (building)
        this._updateSettingOverrides();
    });
  }
  _scheduleInit() {
    if (this._init_timer)
      clearTimeout(this._init_timer);
    this._init_timer = setTimeout(() => {
      this._init_timer = null;
      if (!this._initialised()) {
        this._startZoneLoadTimer();
        this.init();
      }
    }, 1e3);
  }
  _startZoneLoadTimer() {
    if (this._zone_load_timer)
      return;
    this._zone_load_timer = setTimeout(() => {
      this._zone_load_timer = null;
      if (!this._initialised())
        requestInitReload();
    }, ZONE_LOAD_TIMEOUT);
  }
  _completeInit() {
    if (this._zone_load_timer)
      clearTimeout(this._zone_load_timer);
    this._zone_load_timer = null;
    this._initialised.set(true);
  }
  /** Resolve once the organisation data has finished initialising */
  async waitUntilInitialised() {
    await firstValueWhere(this.initialised, (state) => state, this._injector);
  }
  /**
   * Get level with a matching ID
   * @param id_list List of IDs to find a match
   */
  levelWithID(id_list) {
    for (const id of id_list || []) {
      const level = this._levels_by_id().get(id);
      if (level)
        return level;
    }
    return void 0;
  }
  /** Get the organisation location represented by a list of zone IDs. */
  locationWithID(id_list) {
    const level = this.levelWithID(id_list);
    const building = this._buildingWithID(id_list) || this._buildings_by_id().get(level?.parent_id);
    const region = this._regions_by_id().get(building?.parent_id);
    const label = [region, building, level].map((_) => _?.display_name || _?.name).filter((_) => !!_).join(" / ");
    return { level, building, region, label };
  }
  /** Load and return every building represented by the zone ID lists. */
  async loadBuildingsForZones(zone_lists) {
    const find_buildings = () => unique(zone_lists.map((zones) => this._buildingWithID(zones)).filter((building) => !!building), "id");
    let buildings = find_buildings();
    const has_missing_building = () => zone_lists.some((zones) => !this._buildingWithID(zones));
    if (has_missing_building()) {
      await this._loadAllBuildings();
      buildings = find_buildings();
    }
    return buildings;
  }
  /**
   * Get list of levels for the given building
   * @param bld Building to list levels for
   */
  levelsForBuilding(bld = this.building) {
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && lvl.parent_id === bld?.id));
  }
  /**
   * Get list of buildings for the given region
   * @param region Region to list buildings for
   */
  buildingsForRegion(region = this.region) {
    return this.buildings.filter((bld) => bld.parent_id === region?.id);
  }
  /**
   * Get list of levels for the given region
   * @param region Region to list levels for
   */
  levelsForRegion(region = this.region) {
    const building_ids = new Set(this.buildingsForRegion(region).map(({ id }) => id));
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && building_ids.has(lvl.parent_id)));
  }
  /** Get the first building represented by a list of zone IDs. */
  _buildingWithID(id_list) {
    for (const id of id_list || []) {
      const building = this._buildings_by_id().get(id);
      if (building)
        return building;
    }
    return void 0;
  }
  addZone(zone) {
    if (zone.tags.includes("region")) {
      const region = new Region(zone);
      const regions = this._region_list().filter((_) => _.id !== region.id);
      regions.push(region);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const bld = new Building(zone);
      let buildings = this._building_list().filter((_) => _.id !== bld.id);
      buildings.push(bld);
      buildings = buildings.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const lvl = new BuildingLevel(zone);
      let levels = this._level_list().filter((_) => _.id !== lvl.id);
      levels.push(lvl);
      levels = this._sortLevels(levels);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to add zone as it is missing the required tag.", zone.id);
    }
  }
  _sortLevels(levels) {
    return [...levels].sort((a, b) => (a.parent_id || "").localeCompare(b.parent_id || "") || Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || "") || (a.display_name || "").localeCompare(b.display_name || ""));
  }
  removeZone(zone) {
    if (zone.tags.includes("region")) {
      const regions = this._region_list().filter((_) => _.id !== zone.id);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const buildings = this._building_list().filter((_) => _.id !== zone.id);
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const levels = this._level_list().filter((_) => _.id !== zone.id);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to remove zone as it is missing the required tag.", zone.id);
    }
  }
  /** Clear cached org data and reload it from PlaceOS. Exposed via window.app.org in debug mode. */
  async reloadMetadata() {
    this._clearCache();
    this._loaded_data = {};
    this._loaded_buildings.set([]);
    await this.load();
  }
  async init(tries = 0) {
    if (this._limited_init()) {
      this._completeInit();
      return;
    }
    this._initialised.set(false);
    if (isPublicMode()) {
      await this.load().catch((err) => {
        console.warn("Organisation loading failed in public mode, using local public organisation data.", err);
        this._setPublicData();
      });
    } else {
      try {
        await this.load();
      } catch (err) {
        if (isOnline() && navigator.onLine !== false) {
          notifyError("Error loading organisation data. Retrying...");
        } else {
          log3.warn("Unable to load organisation data while offline. Retrying...", err);
        }
        setTimeout(() => this.init(tries), Math.min(1e4, 300 * ++tries));
        return;
      }
    }
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.org = this;
      window.org = this;
    }
    this._completeInit();
    if (this._served_cache) {
      log3("Loaded from cache, refreshing organisation data...");
      this._served_cache = false;
      this._loaded_data = {};
      this._refresh(() => this.load());
    }
  }
  /**
   * Run a load straight against the API, ignoring any cached data, so the
   * displayed data is replaced with the latest. Runs in the background.
   */
  async _refresh(load) {
    this._refresh_count.update((count) => count + 1);
    await load().catch((err) => console.warn("Failed to refresh organisation data.", err));
    this._refresh_count.update((count) => count - 1);
  }
  _setPublicData() {
    const region_id = localStorage.getItem("PLACEOS.region") || "public";
    const building_id = localStorage.getItem("KIOSK.building") || localStorage.getItem("PLACEOS.building") || "public-building";
    const level_id = localStorage.getItem("KIOSK.level") || "public-level";
    const organisation = new Organisation({
      id: "public-org",
      name: "Public Organisation",
      tags: ["org"]
    });
    const region = new Region({
      id: region_id,
      name: "Public Region",
      display_name: "Public Region"
    });
    const building = new Building({
      id: building_id,
      parent_id: region.id,
      name: "Public Building",
      display_name: "Public Building"
    });
    const level = new BuildingLevel({
      id: level_id,
      parent_id: building.id,
      name: "Public Level",
      display_name: "Public Level"
    });
    this._organisation = organisation;
    this._region_list.set([region]);
    this._building_list.set([building]);
    this._level_list.set([level]);
    this._active_region.set(region);
    this._active_building.set(building);
    this._updateSettingOverrides();
  }
  /**
   * Initialise service data. When this is a background refresh, loading
   * messages and the default region/building selection are skipped so the
   * user's current view and selection are left alone.
   */
  async load() {
    const refreshing = this._refreshing;
    const loadingMessage = (message) => refreshing ? null : setLoadingMessage(message);
    loadingMessage("Loading organisation data...");
    await this.loadOrganisation();
    loadingMessage("Loading region data...");
    await this.loadRegions();
    if (!this._region_list().length) {
      loadingMessage("Loading building data...");
      const list = await this.loadBuildings();
      this._building_list.set(list);
    } else {
      loadingMessage("Loading region buildings data...");
      for (const region of this._region_list()) {
        const blds = await this.loadBuildings(region.id);
        if (blds.length) {
          this._building_list.set(blds);
          break;
        }
      }
    }
    loadingMessage("Loading zone settings...");
    await this.loadSettings();
    if (!this._building_list()?.length) {
      log3("Unable to find any building zones");
    }
    loadingMessage("Loading active building levels...");
    await this.loadLevels();
    if (refreshing) {
      if (this.region?.id)
        await this.loadRegionData(this.region);
      if (this.building?.id && !this._service.get("dont_load_metadata")) {
        await this.loadBuildingData(this.building);
      }
    }
    this._updateSettingOverrides();
  }
  /**
   * Load organisation data for application
   */
  async loadOrganisation() {
    const org_list = await this._queryZones({
      tags: ["org"],
      include_children_count: true
    });
    if (org_list.length) {
      const auth = authority();
      const org = org_list.find((list) => isMock() || list.id === auth?.config?.org_zone) || org_list[0];
      const load_metadata = !this._service.get("dont_load_metadata");
      const bindings = load_metadata ? (await this._bulkMetadataDetails("bindings", [org.id]))[org.id] : {};
      this._organisation = new Organisation(__spreadProps(__spreadValues({}, org), { bindings }));
    } else {
      log3("Unable to find organisation");
      this._router.navigate(["/misconfigured"]);
    }
  }
  /**
   * Load region data for the organisation
   */
  async loadRegions() {
    const list = (await this._queryZones({
      tags: ["region"],
      parent_id: this._organisation?.id ? [this._organisation.id] : void 0,
      limit: 200
    }).catch(() => [])).map((_) => new Region(_));
    this._region_list.set(list);
  }
  async loadRegionData(region) {
    if (this._loaded_data[region.id] && !this._refreshing)
      return;
    const load_metadata = !this._service.get("dont_load_metadata");
    const from_cache = this._zoneDataCached(region.id);
    const [settings, bindings, buildings] = await Promise.all([
      load_metadata ? this._bulkMetadataDetails(this.app_key, [region.id]).then((_) => _[region.id]) : {},
      load_metadata ? this._bulkMetadataDetails("bindings", [region.id]).then((_) => _[region.id]) : {},
      this.loadBuildings(region.id)
    ]);
    const building_list = unique([...this._building_list(), ...buildings], "id");
    this._building_list.set(building_list);
    this._loaded_data[region.id] = true;
    region.bindings = bindings;
    this._region_settings[region.id] = settings;
    if (from_cache)
      this._refresh(() => this.loadRegionData(region));
  }
  /**
   * Load buildings data for the organisation
   */
  async loadBuildings(parent_id = this._organisation?.id) {
    const building_list = (await this._queryZones({
      tags: ["building"],
      parent_id: parent_id ? [parent_id] : void 0,
      limit: 500
    })).map((_) => new Building(_));
    return building_list;
  }
  async loadBuildingData(bld) {
    if (!bld || this._loaded_data[bld.id] && !this._refreshing)
      return;
    const from_cache = this._zoneDataCached(bld.id);
    const [settings, bindings, booking_rules, driver_settings] = await Promise.all([
      this._bulkMetadataDetails(this.app_key, [bld.id]).then((_) => _[bld.id]),
      this._bulkMetadataDetails("bindings", [bld.id]).then((_) => _[bld.id]),
      this._bulkMetadataDetails("booking_rules", [bld.id]).then((_) => _[bld.id])
      // lastValueFrom(
      //     (this.app_key.includes('concierge')
      //         ? querySettings({ parent_id: bld.id })
      //         : of({ data: {} as any })
      //     ).pipe(
      //         catchError(() => of({ data: {} as any })),
      //         map((_) => {
      //             try {
      //                 return parseYAML(
      //                     _?.data.find(
      //                         (_) =>
      //                             _.encryption_level ===
      //                             EncryptionLevel.None,
      //                     ) || { settings_string: '' },
      //                 );
      //             } catch {
      //                 return {};
      //             }
      //         }),
      //     ),
      // ),
    ]);
    this._building_settings[bld.id] = __spreadValues(__spreadValues({}, driver_settings || {}), settings || {});
    bld.bindings = bindings;
    bld.booking_rules = booking_rules;
    this._loaded_data[bld.id] = true;
    this._loaded_buildings.update((ids) => ids.includes(bld.id) ? ids : [...ids, bld.id]);
    this._updateSettingOverrides();
    if (from_cache)
      this._refresh(() => this.loadBuildingData(bld));
  }
  /**
   * Whether the zone's settings metadata would be loaded from the cache.
   * Always false while refreshing, so a refresh never schedules another one.
   */
  _zoneDataCached(id) {
    return !!this._getCachedItem(this._metadataCacheKey(this.app_key, [id]));
  }
  /**
   * Load levels data for the buildings
   */
  async loadLevels() {
    let level_list = await this._queryZones({
      tags: ["level"],
      limit: 2500
    });
    level_list = level_list.filter((_) => _.parent_id);
    if (!level_list?.length) {
      this._router.navigate(["/misconfigured"]);
    }
    let levels = level_list.map((lvl) => new BuildingLevel(lvl));
    levels = levels.sort((a, b) => Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || ""));
    this._level_list.set(levels);
  }
  async loadSettings() {
    if (!this._organisation)
      return;
    const org_id = this._organisation?.id;
    const app_settings = (await this._bulkMetadataDetails(this.app_key, [org_id]))[org_id];
    const global_settings = (await this._bulkMetadataDetails("settings", [org_id]))[org_id];
    if (this._destroyed)
      return;
    this._settings = [global_settings, app_settings];
    if (this._override_timer) {
      clearTimeout(this._override_timer);
      this._override_timer = null;
    }
    this._service.setOverrides([...this._settings]);
    if (!this._refreshing)
      await this._setDefaultBuilding();
    this._updateSettingOverrides();
  }
  /** Select the building physically closest to the user's current location */
  async _setBuildingFromGeolocation() {
    return new Promise((resolve) => {
      let settled = false;
      const finish = (building) => {
        if (settled)
          return;
        settled = true;
        clearTimeout(timer2);
        resolve(building);
      };
      const timer2 = setTimeout(() => finish(null), GEOLOCATION_TIMEOUT);
      navigator.geolocation.getCurrentPosition((position) => {
        if (settled)
          return;
        const { latitude, longitude } = position.coords;
        const closest = this._closestBuilding(latitude, longitude);
        if (closest)
          this.building = closest;
        finish(closest);
      }, () => finish(null), { timeout: GEOLOCATION_TIMEOUT });
    });
  }
  /** Find the building nearest to the given coordinates */
  _closestBuilding(latitude, longitude) {
    let closest = null;
    let closest_distance = Infinity;
    for (const bld of this.buildings) {
      if (!bld.location || bld.location === "0,0")
        continue;
      const [lat, long] = bld.location.split(",").map(Number);
      const distance = Math.hypot(latitude - lat, longitude - long);
      if (distance < closest_distance) {
        closest = bld;
        closest_distance = distance;
      }
    }
    return closest;
  }
  /** Find a building by id, loading every region's buildings if not already present */
  async _findBuilding(id) {
    const loaded = this.buildings.find((bld) => bld.id === id);
    if (loaded)
      return loaded;
    await this._loadAllBuildings();
    return this.buildings.find((bld) => bld.id === id) || null;
  }
  /** Load the buildings for every region into the building list */
  async _loadAllBuildings() {
    const lists = await Promise.all(this.regions.map((region) => this.loadBuildings(region.id)));
    this._building_list.set(unique([...this._building_list(), ...lists.flat()], "id"));
  }
  async _setDefaultBuilding() {
    log3("No building set yet, applying defaults...");
    const region_id = localStorage.getItem(`PLACEOS.region`);
    const building_id = sessionStorage.getItem(`PLACEOS.building`) || localStorage.getItem(`PLACEOS.building`);
    const default_id = this._service.get("app.default_building");
    if (!this.buildings.length && !region_id)
      return;
    await (region_id ? this.setRegion(this._region_list().find((_) => _.id === region_id)) : this._setRegionFromTimezone());
    if (!this.buildings.length)
      return;
    const previous = this.buildings.find((_) => _.id === building_id);
    if (previous) {
      log3("Defaulting building to previously selected building.");
      this.building = previous;
      return;
    }
    if (default_id) {
      const configured = await this._findBuilding(default_id);
      if (configured) {
        log3("Applied default building from app settings.");
        const region = this.regions.find((_) => _.id === configured.parent_id);
        if (region)
          await this.setRegion(region);
        this.building = configured;
        return;
      }
      log3(`Configured default building "${default_id}" was not found.`);
    }
    const use_location = !!this._service.get("app.use_geolocation");
    if (use_location && "geolocation" in navigator) {
      const closest = await this._setBuildingFromGeolocation();
      if (closest) {
        log3("Applied default building from user location.");
        return;
      }
    }
    this._setBuildingFromTimezone();
    if (this.building?.id)
      return;
    log3("No default building matched, initialising to first building.");
    this.building = this.buildings[0];
  }
  async _setRegionFromTimezone() {
    const region = this._matchByTimezone(this.regions);
    if (region)
      await this.setRegion(region);
  }
  _setBuildingFromTimezone() {
    if (this._skip_auto_selection)
      return;
    const bld_list = this.buildings.filter((bld) => !this.region || bld.parent_id === this.region?.id);
    const building = this._matchByTimezone(bld_list);
    if (building) {
      this.building = building;
      log3("Applied default building from user's timezone.");
    }
  }
  /** Match the item whose timezone equals the user's, else one in the same region */
  _matchByTimezone(list) {
    const timezone = this.timezone;
    const exact = list.find((_) => _.timezone === timezone);
    if (exact)
      return exact;
    const tz_start = timezone.split("/")[0];
    return list.find((_) => _.timezone?.startsWith(tz_start));
  }
  /** Stop settings overrides so a late load cannot apply them after teardown */
  ngOnDestroy() {
    this._destroyed = true;
    if (this._override_timer)
      clearTimeout(this._override_timer);
    this._override_timer = null;
  }
  _updateSettingOverrides() {
    if (this._override_timer)
      clearTimeout(this._override_timer);
    if (this._destroyed)
      return;
    this._override_timer = setTimeout(() => this._service.setOverrides([
      this.buildingSettings(this.building?.id),
      this.regionSettings(this.region?.id),
      ...this._settings
    ]), 300);
  }
  async _bulkMetadataDetails(name, ids) {
    const parent_ids = ids.filter(Boolean);
    if (!parent_ids.length)
      return {};
    const cache_key = this._metadataCacheKey(name, ids);
    const cached_metadata = this._getCachedItem(cache_key);
    if (cached_metadata)
      return cached_metadata;
    const metadata = await metadata_exports.bulkFetch({ name, parent_ids }).then(orThrow).catch((err) => err?.status === 404 ? this._individualMetadata(name, ids) : {});
    const metadata_details = ids.reduce((map2, id) => {
      map2[id] = metadata[id]?.details || {};
      return map2;
    }, {});
    this._setCachedItem(cache_key, metadata_details);
    return metadata_details;
  }
  /** Fallback for backends without the bulk metadata endpoint (404) */
  async _individualMetadata(name, ids) {
    const items = await Promise.all(ids.filter(Boolean).map((id) => metadata_exports.show({ id, name }).then(orThrow).then((data) => data[name]).then((item) => [id, item], () => [id, null])));
    const metadata = {};
    for (const [id, item] of items) {
      if (item)
        metadata[id] = item;
    }
    return metadata;
  }
  async _queryZones(params) {
    const cache_key = this._zoneCacheKey(params);
    const cached_zones = this._getCachedItem(cache_key);
    if (cached_zones)
      return cached_zones;
    const zones = [
      ...(await zones_exports.query(params).then(orThrowPage)).data || []
    ];
    this._setCachedItem(cache_key, zones);
    return zones;
  }
  _metadataCacheKey(name, ids) {
    const auth = cachedAuthority();
    const parent_ids = ids.filter(Boolean).sort().join(",");
    return `${METADATA_CACHE_PREFIX}.${auth?.id || "default"}.${name}.${parent_ids}`;
  }
  /**
   * Cache key of a zone query. A list filter, such as `tags`, is a comma
   * separated string, as in 6.x, so the keys of 6.x caches still match.
   */
  _zoneCacheKey(params) {
    const auth = cachedAuthority();
    const sorted_params = Object.keys(params).sort().reduce((cache_params, key) => {
      const value = params[key];
      cache_params[key] = Array.isArray(value) ? value.join(",") : value;
      return cache_params;
    }, {});
    return `${ZONE_CACHE_PREFIX}.${auth?.id || "default"}.${JSON.stringify(sorted_params)}`;
  }
  _getCachedItem(cache_key) {
    if (this._refreshing)
      return null;
    try {
      const cached_item = JSON.parse(localStorage.getItem(cache_key) || "null");
      if (!cached_item)
        return null;
      if (cached_item.metadata_cache_id !== this._metadataCacheID() || cached_item.cached_at + MAX_CACHE_AGE2 < Date.now()) {
        localStorage.removeItem(cache_key);
        return null;
      }
      this._served_cache = true;
      return cached_item.data;
    } catch {
      localStorage.removeItem(cache_key);
      return null;
    }
  }
  _setCachedItem(cache_key, data) {
    const cached_item = {
      cached_at: Date.now(),
      metadata_cache_id: this._metadataCacheID(),
      data
    };
    const value = JSON.stringify(cached_item);
    try {
      localStorage.setItem(cache_key, value);
    } catch {
      this._clearCache();
      try {
        localStorage.setItem(cache_key, value);
      } catch {
      }
    }
  }
  _metadataCacheID() {
    return `${cachedAuthority()?.metadata_cache_id || ""}`;
  }
  _clearCache() {
    for (const store of [localStorage, sessionStorage]) {
      for (let i = store.length - 1; i >= 0; i--) {
        const key = store.key(i);
        if (key?.startsWith(ORG_CACHE_PREFIX))
          store.removeItem(key);
      }
    }
  }
  static {
    this.\u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganisationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/api.ts
var IGNORE_VALUES = [void 0, null, ""];
function toQueryString(map2) {
  let str = "";
  if (map2) {
    for (const key in map2) {
      if (key in map2 && !IGNORE_VALUES.includes(map2[key])) {
        str += `${str ? "&" : ""}${key}=${encodeURIComponent(map2[key])}`;
      }
    }
  }
  return str;
}
function isRecord2(value) {
  return typeof value === "object" && value !== null;
}
function errorStatus(error) {
  if (!isRecord2(error))
    return void 0;
  const status = error["status"];
  if (typeof status === "number")
    return status;
  const nested = error["error"];
  if (!isRecord2(nested))
    return void 0;
  const nested_status = nested["status"];
  return typeof nested_status === "number" ? nested_status : void 0;
}

// libs/common/src/lib/console-history.service.ts
var MAX_HISTORY = 2e4;
var ConsoleHistoryService = class _ConsoleHistoryService {
  constructor() {
    this._history = signal(
      [],
      ...ngDevMode ? [{ debugName: "_history" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._unlisten = listenToConsole((method, args) => untracked(() => this._record(method, args)));
    this.history = this._history.asReadonly();
  }
  ngOnDestroy() {
    this._unlisten();
  }
  _record(method, args) {
    const data = [...args];
    if (typeof data[0] === "string") {
      data[0] = data[0].replace(/%c/g, "");
    }
    const event = {
      id: `console-${randomInt(9999999999)}`,
      type: "console",
      subtype: method,
      timestamp: Date.now(),
      data: data.filter((_) => typeof _ !== "string" || !_.startsWith("color:"))
    };
    this._history.update((history2) => [...history2, event].slice(-MAX_HISTORY));
  }
  static {
    this.\u0275fac = function ConsoleHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsoleHistoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsoleHistoryService, factory: _ConsoleHistoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleHistoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/signage/playlist.ts
var DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
function isValidScheduleMask(mask) {
  return mask.length > 0 && mask.length <= 128 && !/[^01]/.test(mask);
}
function hasPlayableScheduleMask({ mask = "", valid_from }) {
  return !mask || isValidScheduleMask(mask) && mask.includes("1") && Number.isFinite(valid_from) && valid_from > 0 && Number.isFinite(new Date(valid_from * 1e3).getTime());
}
function isPlayOnceSchedule(schedule) {
  return !!schedule.play_at || !!schedule.play_at_local;
}
var PLAY_AT_LOCAL_PATTERN = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
function parsePlayAtLocal(value) {
  const match = PLAY_AT_LOCAL_PATTERN.exec(value || "");
  if (!match)
    return null;
  const [year, month, day, hours, minutes, seconds] = match.slice(1).map(Number);
  const date = new Date(year, month - 1, day, hours, minutes, seconds);
  return date.getDate() === day && date.getMonth() === month - 1 && minutes < 60 && seconds < 60 ? date.getTime() : null;
}
var MEDIA_ANIMATIONS = Object.values(MediaAnimation);
var MEDIA_ANIMATION_NAMES = [
  "default",
  "cut",
  "cross_fade",
  "slide_top",
  "slide_left",
  "slide_right",
  "slide_bottom"
];
function mediaAnimation(value) {
  const index = typeof value === "string" ? MEDIA_ANIMATION_NAMES.indexOf(value) : value;
  return typeof index === "number" && Number.isInteger(index) && index >= 0 && index < MEDIA_ANIMATIONS.length ? MEDIA_ANIMATIONS[index] : MediaAnimation.Default;
}

// libs/common/src/lib/lazy-route-reload.ts
var LAZY_ROUTE_RELOAD_KEY = "placeos.lazy_route_reload";
var RELOAD_THROTTLE = 30 * 1e3;
var LAZY_ROUTE_ERROR_PATTERNS = [
  /ChunkLoadError/i,
  /Loading chunk [\w-]+ failed/i,
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
  /error loading dynamically imported module/i
];
function isLazyRouteLoadError(error) {
  const message = getLazyRouteErrorMessage(error);
  return LAZY_ROUTE_ERROR_PATTERNS.some((pattern) => pattern.test(message));
}
function reloadOnChunkLoadError(error, context = {}) {
  if (!isLazyRouteLoadError(error))
    throw error;
  const online = context.online ?? (typeof navigator !== "undefined" ? navigator.onLine : true);
  if (!online)
    throw error;
  const storage = context.storage ?? sessionStorage;
  const location_ref = context.location ?? location;
  const now = context.now ?? Date.now();
  const signature = `${location_ref.pathname}${location_ref.search}${location_ref.hash}:${getLazyRouteErrorMessage(error)}`;
  const reload_state = parseReloadState(storage.getItem(LAZY_ROUTE_RELOAD_KEY));
  if (reload_state?.signature === signature && now - reload_state.timestamp < RELOAD_THROTTLE) {
    throw error;
  }
  storage.setItem(LAZY_ROUTE_RELOAD_KEY, JSON.stringify({ signature, timestamp: now }));
  log("ROUTER", "Lazy route load failed. Reloading application...", error, "warn", true);
  location_ref.reload();
}
async function loadLazyChunk(load, reload = () => location.reload()) {
  try {
    return await load();
  } catch (error) {
    if (!isLazyRouteLoadError(error))
      throw error;
    log("LAZY", "Lazy chunk load failed.", error, "warn", true);
    notifyError(i18n("COMMON.CHUNK_LOAD_ERROR"), i18n("COMMON.RELOAD"), reload, { duration: 0 });
    return void 0;
  }
}
function getLazyRouteErrorMessage(error) {
  if (typeof error === "string")
    return error;
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }
  if (error && typeof error === "object") {
    const name = "name" in error ? `${error.name || ""}` : "";
    const message = "message" in error ? `${error.message || ""}` : "";
    return `${name}: ${message}`.trim();
  }
  return `${error || ""}`;
}
function parseReloadState(state) {
  if (!state)
    return null;
  try {
    const parsed_state = JSON.parse(state);
    if (typeof parsed_state?.signature === "string" && typeof parsed_state?.timestamp === "number") {
      return parsed_state;
    }
  } catch {
  }
  return null;
}

// libs/common/src/lib/locale-data.ts
var SUPPORTED_LOCALES = {
  ar: () => import("./ar-HZ65PWVA.js"),
  es: () => import("./es-4BKYGPSF.js"),
  fr: () => import("./fr-USSEYARJ.js"),
  it: () => import("./it-MEK6IHRM.js"),
  ja: () => import("./ja-CQMAP5QU.js"),
  zh: () => import("./zh-TTYK5IMN.js")
};
async function registerActiveLocale(locale) {
  const short = (locale || "en").split("-")[0];
  const loader = SUPPORTED_LOCALES[short];
  if (!loader)
    return;
  const { default: data } = await loader();
  registerLocaleData(data);
}

// libs/common/src/lib/remote-setup.ts
var REMOTE_SETUP_MOCK_SYSTEM = "sys-remote-setup";
var REMOTE_SETUP_MODULE = "RemoteSetup";
var REMOTE_SETUP_CLEAR_LIST = "clear_list";
var REMOTE_SETUP_CLEAR_SYSTEMS = "clear_systems";
var HEARTBEAT_MS = 15 * 60 * 1e3;
var REGISTER_SPREAD_MS2 = 10 * 1e3;
var LAST_COMMAND_KEY = "PLACEOS.remote_setup.last_command";
var CLEAR_STATE_KEY = "PLACEOS.remote_setup.clear_systems";
var MAX_HANDLED_CLEARS = 20;
var MAX_SYSTEM_CLEARS = 1e3;
function remoteSetupModule() {
  const value = authority()?.config?.["remote_setup"];
  const config = value && typeof value === "object" && !Array.isArray(value) ? value : null;
  const system_id = config?.["system_id"] || (isMock() ? REMOTE_SETUP_MOCK_SYSTEM : "");
  if (!system_id)
    return null;
  return getModule(`${system_id}`, `${config?.["module"] || REMOTE_SETUP_MODULE}`);
}
function remoteSetupCommandBinding(device_id) {
  return `device_${device_id}`;
}
function isRemoteSetupCommand(value) {
  if (!value || typeof value !== "object")
    return false;
  const command = value;
  if (typeof command.id !== "string" || !command.id)
    return false;
  const system_id = command.config?.system_id;
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
var RemoteSetupService = class _RemoteSetupService extends AsyncHandler {
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
        const base = this._url_setting() || `${apiOrigin()}${target.default_path}`;
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
    this.subscription("connected", mod.variable("connected").subscribe((value) => this._connected.set(value === true)));
    this.subscription("command", mod.variable(remoteSetupCommandBinding(this.device_id)).subscribe((value) => this._applyCommand(value)));
    this.subscription("clear", mod.variable(REMOTE_SETUP_CLEAR_LIST).subscribe((value) => this._applyClearList(value)));
    this.subscription("clear_systems", mod.variable(REMOTE_SETUP_CLEAR_SYSTEMS).subscribe((value) => this._applyClearSystems(value)));
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
    }, Math.random() * REGISTER_SPREAD_MS2);
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
    const handled = last?.handled ?? [];
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
  static {
    this.\u0275fac = function RemoteSetupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteSetupService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteSetupService, factory: _RemoteSetupService.\u0275fac, providedIn: "root" });
  }
};
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

// libs/common/src/lib/signage/cron.ts
function cronParts(cron) {
  const parts = (cron || "").trim().split(/\s+/);
  return parts.length === 5 ? parts : null;
}
function matchesCronPart(value, cron_part) {
  if (cron_part === "*")
    return true;
  if (cron_part.includes(",")) {
    return cron_part.split(",").some((item) => matchesCronPart(value, item));
  }
  if (cron_part.includes("/")) {
    const [base, step] = cron_part.split("/");
    const step_value = Number(step);
    if (!step_value)
      return false;
    if (base === "*")
      return value % step_value === 0;
    if (base.includes("-")) {
      const [start, end] = base.split("-").map(Number);
      if (value < start || value > end)
        return false;
      return (value - start) % step_value === 0;
    }
    return value % step_value === 0 && matchesCronPart(value, base);
  }
  if (cron_part.includes("-")) {
    const [start, end] = cron_part.split("-").map(Number);
    return value >= start && value <= end;
  }
  return Number(cron_part) === value;
}
function parseCronNumber(value, min, max) {
  if (!/^\d+$/.test(value || ""))
    return null;
  const number_value = Number(value);
  return number_value >= min && number_value <= max ? number_value : null;
}
function parseCronWeekdays(value) {
  if (!value?.trim() || value === "*")
    return [];
  const days = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((_) => parseCronNumber(_, 0, 6));
      if (start === null || end === null || start > end)
        return [];
      for (let day = start; day <= end; day++)
        days.add(day);
    } else {
      const day = parseCronNumber(part, 0, 6);
      if (day === null)
        return [];
      days.add(day);
    }
  }
  return [...days].sort((a, b) => a - b);
}
function parseCronWeekOfMonthRange(value) {
  const match = /^(\d+)-(\d+)$/.exec(value || "");
  if (!match)
    return null;
  const start = Number(match[1]);
  const end = Number(match[2]);
  if (start === 29 && end === 31)
    return 5;
  if ((start - 1) % 7 !== 0 || end !== start + 6)
    return null;
  const week = (start - 1) / 7 + 1;
  return week >= 1 && week <= 4 ? week : null;
}
function parseCronWeeksOfMonth(value) {
  if (!value?.trim() || value === "*")
    return [];
  const weeks = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    const week = parseCronWeekOfMonthRange(part);
    if (week === null)
      return [];
    weeks.add(week);
  }
  return [...weeks].sort((a, b) => a - b);
}
function isCronMonthlyWeekday(day_part, weekday_part) {
  return !!parseCronWeeksOfMonth(day_part).length && !!parseCronWeekdays(weekday_part).length;
}
function doesCronMatchDay(parts, date) {
  const [, , day_part, month_part, weekday_part] = parts;
  if (!matchesCronPart(date.getMonth() + 1, month_part))
    return false;
  if (day_part === "*" && weekday_part === "*")
    return true;
  const day_matches = matchesCronPart(date.getDate(), day_part);
  if (weekday_part === "*")
    return day_matches;
  const weekday_matches = matchesCronPart(date.getDay(), weekday_part);
  if (day_part === "*")
    return weekday_matches;
  if (isCronMonthlyWeekday(day_part, weekday_part)) {
    return day_matches && weekday_matches;
  }
  return day_matches || weekday_matches;
}
function cronDaySlots(parts) {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    if (!matchesCronPart(hour, parts[1]))
      continue;
    for (let minute = 0; minute < 60; minute++) {
      if (matchesCronPart(minute, parts[0]))
        slots.push(hour * 60 + minute);
    }
  }
  return slots;
}

// libs/common/src/lib/signage/template.ts
var SIGNAGE_PREVIEW_LAYOUTS_MESSAGE = "signage:template-layouts";
var SIGNAGE_PREVIEW_READY_MESSAGE = "signage:template-preview-ready";
var TEMPLATE_EDGE_BAR_HEIGHT_PC = 15;
var TEMPLATE_SIDEBAR_WIDTH_PC = 20;
var TEMPLATE_FLOATING_POSITION_PC = 0;
var clamp2 = (value, max = 100) => Math.min(Math.max(value, 0), Math.max(max, 0));
function percentage(value, fallback) {
  return value === void 0 || value === null ? fallback : clamp2(value * 100);
}
function computeTemplateLayout(layouts) {
  const player = { left: 0, top: 0, width: 100, height: 100 };
  const items = layouts.map((layout) => {
    let rect;
    switch (layout.position) {
      case "top": {
        const height = clamp2(percentage(layout.y_pos, TEMPLATE_EDGE_BAR_HEIGHT_PC), player.height);
        rect = __spreadProps(__spreadValues({}, player), { height });
        player.top += height;
        player.height -= height;
        break;
      }
      case "bottom": {
        const height = clamp2(percentage(layout.y_pos, TEMPLATE_EDGE_BAR_HEIGHT_PC), player.height);
        rect = __spreadProps(__spreadValues({}, player), {
          top: player.top + player.height - height,
          height
        });
        player.height -= height;
        break;
      }
      case "left": {
        const width = clamp2(percentage(layout.x_pos, TEMPLATE_SIDEBAR_WIDTH_PC), player.width);
        rect = __spreadProps(__spreadValues({}, player), { width });
        player.left += width;
        player.width -= width;
        break;
      }
      case "right": {
        const width = clamp2(percentage(layout.x_pos, TEMPLATE_SIDEBAR_WIDTH_PC), player.width);
        rect = __spreadProps(__spreadValues({}, player), {
          left: player.left + player.width - width,
          width
        });
        player.width -= width;
        break;
      }
      case "floating":
      default: {
        const left = percentage(layout.x_pos, TEMPLATE_FLOATING_POSITION_PC);
        const top = percentage(layout.y_pos, TEMPLATE_FLOATING_POSITION_PC);
        rect = { left, top, width: 100 - left, height: 100 - top };
        break;
      }
    }
    return { layout, rect };
  });
  return { items, player };
}

// libs/common/src/lib/value-accessor.ts
function provideValueAccessor(component) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(component),
    multi: true
  };
}

export {
  addMonths,
  addYears,
  differenceInMonths,
  getUnixTime,
  isBefore,
  AsyncHandler,
  HotkeysService,
  placeRealtime,
  realtimeConnected,
  authority,
  onlineState,
  waitForOnline,
  token,
  apiKey,
  apiEndpoint,
  serviceWorkerUpdate,
  initialisationFailure,
  initialisationComplete,
  retryInitialisation,
  Clipboard,
  provideServiceWorker,
  getNativeDomain,
  getNativeEmail,
  setNativeDomain,
  setNativeEmail,
  getNativeApiKey,
  setNativeApiKey,
  normaliseNativeDomain,
  lookupNativeDomainByEmail,
  DEFAULT_SETTINGS,
  GroupPermission,
  current_user,
  user_groups_loaded,
  user_groups_failed,
  user_group_names,
  userSignal,
  hasPermission,
  settingSignal,
  themedLogo,
  SettingsService,
  LazySentryErrorHandler,
  UploadsService,
  REMOTE_LOG_LEVELS,
  REMOTE_DEBUG_MODULE,
  MAX_REMOTE_DEBUG_COMMANDS,
  remoteDebugDeviceBinding,
  REMOTE_DEBUG_DEVICES,
  isRemoteDebugDeviceOnline,
  remoteDebugSeenText,
  remoteDebugLogsBinding,
  remoteDebugResultsBinding,
  remoteDebugMediaUrl,
  readRemoteDebugModule,
  remoteDebugOrgId,
  isRemoteLogRequest,
  isRemoteDebugCommand,
  readRemoteLogsView,
  readRemoteDebugResults,
  readRemoteDebugDevices,
  readRemoteDebugMedia,
  getLoadingMessage,
  needsNativeDomain,
  nativeDomainError,
  autoConfirmNativeDomain,
  setMocks,
  PlaceOS_Service,
  firstValueWhere,
  OrganisationService,
  toQueryString,
  errorStatus,
  ConsoleHistoryService,
  reloadOnChunkLoadError,
  loadLazyChunk,
  registerActiveLocale,
  REMOTE_SETUP_MOCK_SYSTEM,
  REMOTE_SETUP_MODULE,
  REMOTE_SETUP_CLEAR_LIST,
  remoteSetupModule,
  remoteSetupCommandBinding,
  isRemoteSetupCommand,
  remoteSetupClearList,
  cronParts,
  parseCronNumber,
  parseCronWeekdays,
  parseCronWeeksOfMonth,
  isCronMonthlyWeekday,
  doesCronMatchDay,
  cronDaySlots,
  DEFAULT_PLAY_PERIOD_MINUTES,
  isValidScheduleMask,
  hasPlayableScheduleMask,
  isPlayOnceSchedule,
  parsePlayAtLocal,
  mediaAnimation,
  SIGNAGE_PREVIEW_LAYOUTS_MESSAGE,
  SIGNAGE_PREVIEW_READY_MESSAGE,
  TEMPLATE_EDGE_BAR_HEIGHT_PC,
  TEMPLATE_SIDEBAR_WIDTH_PC,
  TEMPLATE_FLOATING_POSITION_PC,
  computeTemplateLayout,
  provideValueAccessor
};
//# debugId=5e6d4030-b331-5639-817e-73f152ee8842
//# sourceMappingURL=chunk-TQBELCAT.js.map
