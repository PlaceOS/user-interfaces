import {
  $h,
  AsyncHandler,
  Building,
  BuildingLevel,
  Ce,
  Cn,
  Et,
  GoogleAnalyticsService,
  HotkeysService,
  J,
  Jp,
  LocaleService,
  MINUTES,
  Mt,
  Organisation,
  Region,
  SECONDS,
  SettingsService,
  Si,
  Un,
  _c,
  addHours,
  createNativeAuthUrl,
  currentUser,
  current_user,
  eo,
  firstTruthyValueFrom,
  gs,
  initSentryFromSettings,
  isPublicMode,
  ki,
  lazySnackbar,
  log,
  mockModeRequested,
  notifyError,
  notifySuccess,
  oo,
  ro,
  scoped_log,
  setAppName,
  setInternalUserDomain,
  setNotifyOutlet,
  setTranslationService,
  setupPlace,
  so,
  unique,
  vc,
  wi,
  withTimeout
} from "./chunk-PVAOAPJ2.js";
import {
  bindNativeAuthRedirects,
  clearNativeApiKey,
  clearNativeDomain,
  clearNativePkceVerifier,
  closeNativeBrowser,
  consumeNativeAuthError,
  consumeNativeAuthRedirect,
  getIntuneAccount,
  getIntuneToken,
  getNativeApiKey,
  getNativeDomain,
  hideNativeStatusBar,
  isNativeApp,
  lookupNativeDomainByEmail,
  markNativeAuthRedirectConsumed,
  openNativeBrowser,
  restoreNativePkceVerifier,
  scheduleNativeRestart,
  setNativeAuthError,
  setNativeDomain,
  setNativeEmail,
  syncNativeManagedConfig
} from "./chunk-5IXSADE5.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-L56O3VTV.js";
import {
  ApplicationRef,
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
  computed,
  effect,
  filter,
  formatRuntimeError,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  setClassMetadata,
  signal,
  switchMap,
  take,
  untracked,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵinject,
  ɵɵlistener
} from "./chunk-LXAGTE5U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
  return ro();
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
var _wake_lock = null;
async function requestScreenWakeLock() {
  if (!gs())
    return;
  if (_wake_lock)
    await _wake_lock.release();
  if (document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  } else {
    setTimeout(() => requestScreenWakeLock(), 1e3);
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

// libs/common/src/lib/teams-host.ts
var TEAMS_HOST_PARAM = "host";
var AUTH_STORE_KEY = "PLACEOS.teams_auth";
var INIT_TIMEOUT_MS = 5e3;
var SSO_TIMEOUT_MS = 1e4;
var MAX_SIGN_IN_ATTEMPTS = 5;
var EXPIRY_MARGIN_MS = 5 * 60 * 1e3;
var _teams = null;
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
    const teams = await import("./src-CEU4ZN6F.js");
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
    const place_token = J(false);
    if (place_token) {
      sessionStorage.removeItem(AUTH_STORE_KEY);
      _teams.authentication.notifySuccess(place_token);
    }
    return false;
  }
  if (J(false))
    return true;
  if (await signInTeamsTab(_teams))
    return true;
  failInitialisation("Sign in did not finish. Select Try again to sign in.");
  return false;
}
async function signInTeamsTab(teams) {
  const sso_signed_in = await withTimeout(teams.authentication.getAuthToken(), SSO_TIMEOUT_MS, "Microsoft single sign-on timed out.").then(async (entra_token) => {
    if (!entra_token)
      return false;
    await wi(entra_token);
    return true;
  }).catch((error) => {
    log("Teams", "SSO failed.", error, "warn");
    return false;
  });
  if (sso_signed_in)
    return true;
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
      Si(place_token, tokenExpiry(place_token));
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
  setInitialToken(token) {
    this._initial_token = token || "";
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
      this._clipboard.copy(`${J()}|${Et()}`);
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
      if (params.has("x-api-key")) {
        so(params.get("x-api-key"));
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
      const query = Ce(START_QUERY.substring(1));
      const url = this._router.parseUrl(this._location.path() || "/");
      url.queryParams = __spreadValues(__spreadValues({}, query), url.queryParams);
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
      const auth_error = await setupPlace(settings).then(() => null).catch((_) => _);
      if (!auth_error) {
        const api_key = getNativeApiKey();
        const client_key = `${ki()}_x-api-key`;
        if (api_key)
          so(api_key);
        else if (localStorage.getItem(client_key)) {
          localStorage.removeItem(client_key);
          Cn();
        }
        if (intune_token)
          Si(intune_token);
        break;
      }
      log("APP", "Auth failed, resetting domain.", auth_error, "warn");
      clearNativeDomain();
      clearNativeApiKey();
      DOMAIN_ERROR.set(`Unable to connect to "${domain}". The server may be unavailable, or the email address may be for a different server. Try again.`);
    }
    if (isNativeApp() && !J(false)) {
      const boot_params = new URLSearchParams(START_QUERY);
      if (boot_params.has("code")) {
        const state_matches = boot_params.get("state") === localStorage.getItem(`${ki()}_nonce`);
        console.warn("[AUTH] Auth code was present on load but the token exchange did not complete.", `State matches nonce: ${state_matches}`);
      }
    }
    if (isNativeApp() && !J(false) && !Et() && Mt()) {
      const auth_error = consumeNativeAuthError();
      if (auth_error) {
        setLoadingMessage("Waiting for sign in...");
        DOMAIN_ERROR.set(auth_error);
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
      }
      setLoadingMessage("Opening sign in...");
      const auth_url = await createNativeAuthUrl(settings, ki());
      console.warn(`[AUTH] Opening sign in: ${auth_url.split("?")[0]}`);
      await openNativeBrowser(auth_url);
      return;
    }
    if (!isNativeApp()) {
      const teams_mode = await startTeamsHost();
      if (teams_mode)
        settings.local_login = teams_mode === "tab";
      setLoadingMessage("Authenticating...");
      await setupPlace(settings, AUTHORITY_WAIT_MS).catch((_) => console.error(_));
      if (teams_mode) {
        setLoadingMessage("Waiting for Microsoft sign in...");
        if (!await finishTeamsSignIn(teams_mode))
          return;
      }
    }
    if (this._initial_token)
      Si(this._initial_token);
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
      await withTimeout(firstTruthyValueFrom(current_user), 3e4, "Current user loading timed out.");
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
    if (Un() || currentUser()?.is_logged_in)
      return;
    if (isNativeApp() && getNativeApiKey()) {
      clearNativeApiKey();
      clearNativeDomain();
      localStorage.removeItem(`${ki()}_x-api-key`);
      Cn();
    } else if (!J(false))
      Cn();
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
  _pasteToken(tkn) {
    const parts = tkn.split("|");
    const id = ki();
    localStorage.setItem(`${id}_access_token`, `${parts[0]}`);
    localStorage.setItem(`${id}_refresh_token`, `${parts[1]}`);
    localStorage.setItem(`${id}_expires_at`, `${addHours(/* @__PURE__ */ new Date(), 6).valueOf()}`);
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
    if (!gs())
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
var log2 = scoped_log("ORG");
var ORG_CACHE_PREFIX = "PLACEOS.org";
var ZONE_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.zones`;
var AUTHORITY_CACHE_KEY = `${ORG_CACHE_PREFIX}.authority`;
var OFFLINE_BOOT_DELAY = 10 * 1e3;
var ZONE_LOAD_TIMEOUT = 30 * 1e3;
var GEOLOCATION_TIMEOUT = 10 * 1e3;
var METADATA_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.metadata`;
var MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1e3;
function cachedAuthority() {
  const auth = Mt();
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
    return !system_id || !mod_id ? null : Jp(system_id, mod_id);
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
    const online_state = oo();
    const online = eo(online_state, (_) => _);
    const start = Promise.race([
      online,
      new Promise((resolve) => setTimeout(resolve, OFFLINE_BOOT_DELAY))
    ]);
    start.then(() => this._scheduleInit());
    online_state.subscribe((is_online, was_online) => {
      if (is_online && !was_online)
        this._scheduleInit();
    }, { emitCurrent: false });
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
        if (ro() && navigator.onLine !== false) {
          notifyError("Error loading organisation data. Retrying...");
        } else {
          log2.warn("Unable to load organisation data while offline. Retrying...", err);
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
      log2("Loaded from cache, refreshing organisation data...");
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
      log2("Unable to find any building zones");
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
      tags: "org",
      include_children_count: true
    });
    if (org_list.length) {
      const auth = Mt();
      const org = org_list.find((list) => Un() || list.id === auth?.config?.org_zone) || org_list[0];
      const load_metadata = !this._service.get("dont_load_metadata");
      const bindings = load_metadata ? (await this._bulkMetadataDetails("bindings", [org.id]))[org.id] : {};
      this._organisation = new Organisation(__spreadProps(__spreadValues({}, org), { bindings }));
    } else {
      log2("Unable to find organisation");
      this._router.navigate(["/misconfigured"]);
    }
  }
  /**
   * Load region data for the organisation
   */
  async loadRegions() {
    const list = (await this._queryZones({
      tags: "region",
      parent_id: this._organisation?.id || "",
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
      tags: "building",
      parent_id,
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
      tags: "level",
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
        clearTimeout(timer);
        resolve(building);
      };
      const timer = setTimeout(() => finish(null), GEOLOCATION_TIMEOUT);
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
    log2("No building set yet, applying defaults...");
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
      log2("Defaulting building to previously selected building.");
      this.building = previous;
      return;
    }
    if (default_id) {
      const configured = await this._findBuilding(default_id);
      if (configured) {
        log2("Applied default building from app settings.");
        const region = this.regions.find((_) => _.id === configured.parent_id);
        if (region)
          await this.setRegion(region);
        this.building = configured;
        return;
      }
      log2(`Configured default building "${default_id}" was not found.`);
    }
    const use_location = !!this._service.get("app.use_geolocation");
    if (use_location && "geolocation" in navigator) {
      const closest = await this._setBuildingFromGeolocation();
      if (closest) {
        log2("Applied default building from user location.");
        return;
      }
    }
    this._setBuildingFromTimezone();
    if (this.building?.id)
      return;
    log2("No default building matched, initialising to first building.");
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
      log2("Applied default building from user's timezone.");
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
    const parent_ids = ids.filter(Boolean).join(",");
    if (!parent_ids)
      return {};
    const cache_key = this._metadataCacheKey(name, ids);
    const cached_metadata = this._getCachedItem(cache_key);
    if (cached_metadata)
      return cached_metadata;
    const metadata = await vc(name, { parent_ids }).catch((err) => err?.status === 404 ? this._individualMetadata(name, ids) : {});
    const metadata_details = ids.reduce((map2, id) => {
      map2[id] = metadata[id]?.details || {};
      return map2;
    }, {});
    this._setCachedItem(cache_key, metadata_details);
    return metadata_details;
  }
  /** Fallback for backends without the bulk metadata endpoint (404) */
  async _individualMetadata(name, ids) {
    const items = await Promise.all(ids.filter(Boolean).map((id) => _c(id, name).then((item) => [id, item], () => [id, null])));
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
    const zones = (await $h(__spreadProps(__spreadValues({}, params), {
      authority_id: Mt()?.id
    }))).data || [];
    this._setCachedItem(cache_key, zones);
    return zones;
  }
  _metadataCacheKey(name, ids) {
    const auth = cachedAuthority();
    const parent_ids = ids.filter(Boolean).sort().join(",");
    return `${METADATA_CACHE_PREFIX}.${auth?.id || "default"}.${name}.${parent_ids}`;
  }
  _zoneCacheKey(params) {
    const auth = cachedAuthority();
    const sorted_params = Object.keys(params).sort().reduce((cache_params, key) => {
      cache_params[key] = params[key];
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
      if (cached_item.metadata_cache_id !== this._metadataCacheID() || cached_item.cached_at + MAX_CACHE_AGE < Date.now()) {
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

// libs/common/src/lib/push-notification.service.ts
var PushNotificationService = class _PushNotificationService {
  constructor() {
    this.supported = signal(
      "Notification" in window,
      ...ngDevMode ? [{ debugName: "supported" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permission = signal(
      this.supported() ? Notification.permission : "denied",
      ...ngDevMode ? [{ debugName: "permission" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = computed(
      () => this.permission() === "granted",
      ...ngDevMode ? [{ debugName: "enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    log("PushNotification", `Service initialized. Supported: ${this.supported()}, Permission: ${this.permission()}, Enabled: ${this.enabled()}`);
  }
  /** Request notification permission from user */
  async requestPermission() {
    if (!this.supported()) {
      log("PushNotification", "Notifications not supported in this browser");
      return false;
    }
    try {
      const result = await Notification.requestPermission();
      this.permission.set(result);
      log("PushNotification", `Permission ${result}, enabled: ${this.enabled()}`);
      return result === "granted";
    } catch (e) {
      log("PushNotification", "Failed to request permission", e);
      return false;
    }
  }
  /**
   * Send a push notification
   * @param title Notification title
   * @param options Notification options (body, icon, tag, etc.)
   * @returns The notification instance or null if not sent
   */
  notify(title, options = {}) {
    if (!this.enabled()) {
      log("PushNotification", "Notification skipped - not enabled");
      return null;
    }
    try {
      const notification = new Notification(title, __spreadProps(__spreadValues({}, options), {
        tag: options.tag || `notification-${Date.now()}`
      }));
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      log("PushNotification", `Notification sent: ${title}`);
      return notification;
    } catch (e) {
      log("PushNotification", "Failed to send notification", e);
      return null;
    }
  }
  static {
    this.\u0275fac = function PushNotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PushNotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PushNotificationService, factory: _PushNotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PushNotificationService, [{
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

export {
  serviceWorkerUpdate,
  initialisationFailure,
  initialisationComplete,
  retryInitialisation,
  Clipboard,
  provideServiceWorker,
  getLoadingMessage,
  needsNativeDomain,
  nativeDomainError,
  autoConfirmNativeDomain,
  setMocks,
  PlaceOS_Service,
  firstValueWhere,
  OrganisationService,
  PushNotificationService,
  toQueryString
};
//# debugId=4eddff25-16b9-5d39-b651-cea2546fa926
//# sourceMappingURL=chunk-2YMKP7GM.js.map
