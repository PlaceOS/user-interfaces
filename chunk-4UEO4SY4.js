import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-WI6YB6KJ.js";
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
  getNativeRedirectUri,
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
  storeNativePkceVerifier,
  syncNativeManagedConfig
} from "./chunk-ZW2D7NFS.js";
import {
  $i,
  AsyncHandler,
  Ce,
  Cn,
  Cu,
  Et,
  Gp,
  HotkeysService,
  J,
  LocaleService,
  Mt,
  Un,
  Xr,
  Yr,
  _c,
  _s,
  ac,
  addDays,
  addHours,
  addMinutes,
  bi,
  ci,
  constructFrom,
  dh,
  differenceInMinutes,
  endOfDay,
  endOfDayInTimezone,
  firstTruthyValueFrom,
  format,
  getItemWithKeys,
  hc,
  i18n,
  io,
  isSameDay,
  lazySnackbar,
  log,
  notifyError,
  notifyInfo,
  notifySuccess,
  randomInt,
  randomString,
  removeEmptyFields,
  ro,
  roundToNearestMinutes,
  scoped_log,
  set,
  setAppName,
  setNotifyOutlet,
  setTranslationService,
  sh,
  so,
  startOfDay,
  startOfDayInTimezone,
  startOfMinute,
  th,
  to,
  toDate,
  unique,
  withTimeout
} from "./chunk-F6EFLGBM.js";
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
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Output,
  RuntimeError,
  Service,
  Subject,
  Title,
  catchError,
  combineLatest,
  computed,
  effect,
  filter,
  formatRuntimeError,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  provideAppInitializer,
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
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener
} from "./chunk-ZL76SY4J.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

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
        if (data == null ? void 0 : data.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector == null ? void 0 : injector.get(ApplicationRef, null, {
        optional: true
      });
      appRef == null ? void 0 : appRef.onDestroy(() => {
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
    const onControllerChange = () => {
      var _a;
      return (_a = sw.controller) == null ? void 0 : _a.postMessage({
        action: "INITIALIZE"
      });
    };
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

// libs/common/src/lib/settings.ts
var general = {};
var app = {
  name: "Control",
  title: "PlaceOS",
  description: "Room Control UI",
  short_name: "PlaceOS",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  general,
  prevent_space_init: true,
  allow_dark_mode: false
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/control",
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

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom((options == null ? void 0 : options.in) || date, _date.getTime());
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

// node_modules/date-fns/add.js
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
  const dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom((options == null ? void 0 : options.in) || date, +dateWithDays + msToAdd);
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/getUnixTime.js
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}

// libs/common/src/lib/types/org.classes.ts
var Organisation = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.name = raw_data.name || "";
    this.description = raw_data.description || "";
    this.tags = raw_data.tags || [];
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
    var _a;
    this.settings = {};
    this.id = _data.id || "";
    this.parent_id = _data.parent_id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.map_id = _data.map_id || "";
    this.capacity = _data.capacity || 0;
    this.location = _data.location || "";
    this.locations = _data.locations || [];
    this.tags = _data.tags || [];
    this.images = _data.images || [];
    this.code = _data.code || "";
    const parts = this.display_name.split(" ");
    this.number = (((_a = parts.length >= 2 ? parts[parts.length - 1] : this.display_name[0]) == null ? void 0 : _a.toUpperCase()) || "").substring(0, 2);
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
    this.images = _data.images || [];
    this.bindings = _data.bindings || {};
    this.address = _data.address || "";
  }
};

// libs/common/src/lib/types/space.class.ts
var Space = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.display_name = data.display_name || "";
    this.email = (data.email || "").toLowerCase();
    this.capacity = data.capacity || -1;
    this.feature_list = data.feature_list || data.features || [];
    this.bookable = !!data.bookable;
    this.zones = data.zones || [];
    this.support_url = data.support_url || "";
    this.camera_url = data.camera_url || "";
    this.camera_snapshot_urls = Array.isArray(data.camera_snapshot_urls) ? data.camera_snapshot_urls.filter(Boolean) : data.camera_snapshot_url ? [data.camera_snapshot_url] : [];
    this.camera_snapshot_url = data.camera_snapshot_url || this.camera_snapshot_urls[0] || "";
    this.room_booking_url = data.room_booking_url || "";
    this.map_id = data.map_id || "";
    this.images = data.images || [];
    this.features = data.features || [];
    this.response_status = data.response_status || "tentative";
    this.level = data.level || new BuildingLevel();
    this.availability = data.availability || [];
    this.approval = data.approval ?? false;
    this.created_at = data.created_at ?? getUnixTime(Date.now());
  }
  inUseAt(start, duration) {
    const end = start + duration * 60 * 1e3;
    return this.availability.filter((i) => i.date == start && i.date + i.duration * 60 * 1e3 == end && i.status !== "free").length > 0;
  }
};

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "597bdd6",
  "hash": "597bdd6",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "597bdd6",
  "semverString": null,
  "version": "1.12.0",
  "time": 1791551876471
};

// libs/common/src/lib/google-analytics.service.ts
var _GoogleAnalyticsService = class _GoogleAnalyticsService {
  constructor() {
    this.enabled = true;
    this.app_name = "GA_APP";
    this._ga4 = false;
    this.timers = {};
  }
  init(tracking_id = "") {
    if (!this.enabled)
      return;
    this._ga4 = !!(tracking_id == null ? void 0 : tracking_id.startsWith("G-"));
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
      if (first_script == null ? void 0 : first_script.parentNode) {
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
   * Post routing event to Google Analytics API
   * @param route Activated route
   * @param origin Add origin to routh path
   */
  page(route, origin = false) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
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
};
_GoogleAnalyticsService.\u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GoogleAnalyticsService)();
};
_GoogleAnalyticsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
var GoogleAnalyticsService = _GoogleAnalyticsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/public-mode.ts
function isPublicMode() {
  if (typeof window === "undefined")
    return false;
  const flag = window.PLACEOS_PUBLIC_MODE;
  return !!flag;
}

// libs/common/src/lib/types/asset-request.class.ts
function deliverAtTime(request) {
  var _a, _b;
  let date = ((_a = request.event) == null ? void 0 : _a.date) || request._time;
  if (request.deliver_time) {
    date = set(date, {
      hours: Math.floor(request.deliver_time),
      minutes: request.deliver_time % 1 * 60
    }).valueOf();
  }
  if (request.deliver_day_offset > 0 || ((_b = request.event) == null ? void 0 : _b.all_day)) {
    date = addDays(startOfDay(date), request.deliver_day_offset).valueOf();
  }
  return addMinutes(date, request.deliver_offset).valueOf();
}
var AssetRequest = class {
  get deliver_at() {
    return deliverAtTime(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    var _a, _b, _c2, _d, _e, _f, _g;
    this.conflict = false;
    this._changed = false;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.event_id = data.event_id || data.parent_id || "";
    this.items = data.items || ((_a = data.asset_ids) == null ? void 0 : _a.map((_) => ({ id: _, quantity: 1 }))) || [];
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this._status = data[`${this.event_id}_status`] || data.status || (data.extension_data || {})[`${this.event_id}_status`] || ((_b = data.extension_data) == null ? void 0 : _b.status) || "in_storage";
    this.event = data.event || data || null;
    const booking = (_d = (_c2 = this.event) == null ? void 0 : _c2.linked_bookings) == null ? void 0 : _d.find((_) => _.extension_data.request_id === this.id);
    this._booking = booking || data.booking || null;
    this._changed = !!data._changed || !booking;
    this.notes = data.notes || data.description || "";
    this.deliver_time = data.deliver_time || ((_e = data.extension_data) == null ? void 0 : _e.deliver_time) || void 0;
    this.deliver_offset = data.deliver_offset || ((_f = data.extension_data) == null ? void 0 : _f.deliver_offset) || 0;
    this.deliver_day_offset = data.deliver_day_offset || ((_g = data.extension_data) == null ? void 0 : _g.deliver_day_offset) || 0;
    this.deliver_at_time = deliverAtTime(this);
    this.conflict = !!data.conflict;
    this.ref_id = `${this.deliver_at_time}|${this.items.map((_) => `${_.id}:${_.quantity}`).join("|")}`;
  }
  toJSON() {
    const blob = __spreadValues({}, this);
    delete blob.event;
    delete blob._changed;
    delete blob._status;
    delete blob._time;
    delete blob.deliver_at_time;
    delete blob.deliver_at;
    blob.items = blob.items.map((_) => ({
      id: _.id,
      category_id: _.category_id,
      quantity: _.quantity,
      name: _.name,
      item_ids: _.item_ids
    }));
    return blob;
  }
};

// libs/common/src/lib/types/catering.class.ts
function cloneOption(option = {}) {
  return {
    id: option.id || "",
    name: option.name || "",
    group: option.group || "",
    multiple: !!option.multiple,
    unit_price: option.unit_price || 0,
    active: option.active
  };
}
function deliverAtTime2(order) {
  var _a, _b, _c2;
  let date = ((_a = order.event) == null ? void 0 : _a.date) || ((_b = order.event) == null ? void 0 : _b.event_start) * 1e3 || order._time;
  if (order.deliver_day_offset > 0 || ((_c2 = order.event) == null ? void 0 : _c2.all_day)) {
    date = addDays(startOfDay(date), order.deliver_day_offset).valueOf();
  }
  if (order.deliver_time) {
    date = set(date, {
      hours: Math.floor(order.deliver_time),
      minutes: order.deliver_time % 1 * 60
    }).valueOf();
  }
  return addMinutes(date, order.deliver_offset).valueOf();
}
var CateringItem = class {
  get option_list() {
    const active_options = this.options.filter((_) => _.active === true);
    return active_options.length ? active_options : this._option_list;
  }
  /** String list of selected option ids */
  get options_string() {
    return this.option_list.map((_) => _.id || "").sort((a, b) => a.localeCompare(b)).join(",");
  }
  get custom_id() {
    const options = this.option_list.map((_) => _.id).sort((a, b) => a.localeCompare(b)).join("+");
    return `${this.id}[${options}]${!this.in_order ? "menu" : ""}`;
  }
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || data.id || "";
    this.category = data.category || "";
    this.caterer = data.caterer || "";
    this.unit_price = data.unit_price || 0;
    this.description = data.description || "";
    this.quantity = data.quantity || 0;
    this.discount_cap = data.discount_cap || 0;
    this.accept_points = !!data.accept_points;
    this.tags = [
      ...(data.tags instanceof Array ? data.tags : null) || []
    ];
    this.images = [...data.images || []];
    this.options = (data.options || []).map((_) => cloneOption(_));
    const has_options = this.options.some((_) => _.active === true);
    this._option_list = (has_options ? this.options.filter((_) => _.active === true) : (data.option_list || []).map((_) => cloneOption(_))) || [];
    this.hide_for_zones = [...data.hide_for_zones || []];
    this.unit_price_with_options = this.unit_price + this.option_list.map((i) => i.unit_price || 0).reduce((c, a) => c + a, 0);
    this.total_cost = this.unit_price_with_options * this.quantity;
    this.in_order = data.in_order ?? false;
  }
};
var CateringOrder = class {
  get deliver_at() {
    return deliverAtTime2(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    var _a;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.system_id = data.system_id || "";
    this.event_id = data.event_id || ((_a = data.event) == null ? void 0 : _a.id) || "";
    this.caterer = data.caterer || "";
    this.items = (data.items || []).map((i) => i instanceof CateringItem ? i : new CateringItem(i));
    this.items = this.items.filter((i) => i.quantity > 0 && this.caterer === i.caterer);
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this.total_cost = this.items.reduce((amount, item) => amount + (item.total_cost || 0), 0);
    this.charge_code = data.charge_code || "";
    this.status = data[`${this.event_id}_status`] || data.status || "accepted";
    this.invoice_number = data.invoice_number || "";
    this.event = data.event || null;
    this.notes = data.notes || "";
    this.deliver_time = data.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime2(this);
  }
  toJSON() {
    const obj = ci(__spreadValues({}, this), ["", null, void 0]);
    obj.status = obj._status;
    delete obj.event;
    delete obj._status;
    delete obj._time;
    return obj;
  }
};

// libs/common/src/lib/types/user.class.ts
var USER_DOMAIN = "@dev.place.tech";
function setInternalUserDomain(domain) {
  USER_DOMAIN = domain;
}
var User = class {
  constructor(data = {}) {
    var _a, _b;
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
    this.is_external = !((_a = this.email) == null ? void 0 : _a.endsWith(`${USER_DOMAIN}`));
    this.visit_expected = data.visit_expected ?? true;
    this.assistance_required = !!((_b = this.extension_data) == null ? void 0 : _b.assistance_required);
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
    var _a, _b, _c2;
    if (!datetime)
      datetime = Date.now();
    const date = new Date(datetime);
    const day = date.getDay();
    const date_string = format(date, "yyyy-MM-dd");
    if ((_b = (_a = this.work_overrides[date_string]) == null ? void 0 : _a.blocks) == null ? void 0 : _b.length) {
      for (const block of this.work_overrides[date_string].blocks) {
        const start = block.start_time;
        const end = block.end_time;
        if (start <= date.getHours() + date.getMinutes() / 60 && end >= date.getHours() + date.getMinutes() / 60) {
          return block;
        }
      }
    }
    for (const pref of this.work_preferences) {
      if (pref.day_of_week === day && ((_c2 = pref.blocks) == null ? void 0 : _c2.length)) {
        for (const block of pref.blocks) {
          if (block.start_time <= date.getHours() + date.getMinutes() / 60 && block.end_time >= date.getHours() + date.getMinutes() / 60) {
            return block;
          }
        }
      }
    }
  }
  location_time(datetime = Date.now()) {
    var _a;
    return ((_a = this.work_preference(datetime)) == null ? void 0 : _a.location) || "ooo";
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
var DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
function eventStatus(details) {
  var _a;
  if (details.status === "cancelled")
    return "declined";
  if ((_a = details.resources) == null ? void 0 : _a.length) {
    if (details.resources.every((i) => i.response_status === "accepted" || i.response_status === "confirmed" || details.approved)) {
      return "approved";
    } else if (details.resources.some((i) => i.response_status === "tentative" || i.response_status === "needsAction")) {
      return "tentative";
    }
    return "declined";
  }
  return "approved";
}
function parseRecurrence(data) {
  var _a;
  const start = data.start || data.range_start * 1e3;
  let end = data.end || (data.range_end ? data.range_end * 1e3 : void 0);
  if (!end && data.occurrences > 1) {
    switch (data.pattern) {
      case "daily":
        end = addDays(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "weekly":
        end = addWeeks(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "month_day":
      case "monthly":
        end = addMonths(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        end = addDays(end, 7).valueOf();
        break;
      case "yearly":
        end = addYears(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
    }
  }
  return {
    range_start: getUnixTime(startOfDay(start)),
    range_end: getUnixTime(endOfDay(end)),
    interval: data.interval,
    pattern: data.pattern,
    nth_of_month: data.nth_of_month,
    days_of_week: ((_a = data.days_of_week) == null ? void 0 : _a.map((_) => typeof _ === "number" ? DAYS_OF_WEEK[_] : _)) || []
  };
}
var CalendarEvent = class _CalendarEvent {
  get images() {
    return this.extension_data.images || [];
  }
  get is_all_day() {
    return this.all_day || this.duration >= 12 * 60;
  }
  get view_access() {
    return this.extension_data.view_access || "OPEN";
  }
  /** Get field from extension data */
  ext(key) {
    return this.extension_data[key];
  }
  constructor(data = {}) {
    var _a, _b, _c2, _d, _e, _f, _g, _h;
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    const custom_all_day = !!(((_a = data.extension_data) == null ? void 0 : _a.custom_all_day) || data.custom_all_day);
    this.id = data.event_id || data.id || "";
    this.event_start = data.event_start || getUnixTime(data.date || roundToNearestMinutes(addMinutes(/* @__PURE__ */ new Date(), 3), {
      nearestTo: 5
    }));
    this.event_end = data.event_end || getUnixTime(data.date_end || 0) || getUnixTime(addMinutes(this.event_start * 1e3, data.duration || 30));
    this.calendar = data.calendar || "";
    this.creator = ((_b = data.creator || _default_user.email) == null ? void 0 : _b.toLowerCase()) || "";
    this.host = (data.host || this.creator || data.host_email || _default_user.email || "").toLowerCase();
    const attendees = data.attendees || [];
    const system_email = (((_c2 = data.system) == null ? void 0 : _c2.email) || "").toLowerCase();
    const is_system_resource = (user) => {
      var _a2;
      return !!user.resource || !!system_email && ((_a2 = user.email) == null ? void 0 : _a2.toLowerCase()) === system_email;
    };
    this.attendees = attendees.filter((user) => !is_system_resource(user)).map((u) => new User(u));
    this.resources = unique(data.resources || attendees.filter((user) => is_system_resource(user)).map((s) => new Space(s)), "email") || [];
    this.title = data.title;
    this.body = (data.body || "").replace(/&lt;&lt;&lt;.*&gt;&gt;&gt;/g, "");
    this.is_system_event = (data.body || this.body).includes("main_event_id");
    this.private = !!data.private;
    this.all_day = !!data.all_day || custom_all_day;
    this.timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.date = this.event_start * 1e3 || this.date;
    this.date_end = this.event_end * 1e3 || this.date_end;
    this.duration = differenceInMinutes(this.date_end, this.date);
    if (this.all_day) {
      if (!data.duration && !data.date_end && !data.event_end) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = 24 * 60 - 1;
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      } else if (this.duration % (24 * 60) === 0) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = Math.max(1, this.duration - 1);
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      }
    }
    const matches = this.body.match(/\[ID\|([^\]]+)\]/);
    const associated_id = matches ? matches[1] : null;
    this.meeting_url = data.meeting_url || data.online_meeting_url || "";
    this.meeting_id = associated_id || data.meeting_id || data.online_meeting_id || "";
    this.meeting_provider = data.meeting_provider || data.online_meeting_provider || "";
    this.recurring = !!data.recurring;
    this.recurring_event_id = data.recurring_event_id || "";
    this.organiser = this.attendees.find((user) => user.email === this.host);
    this.from_bookings = data.from_bookings ?? false;
    this.master = data.master ? new _CalendarEvent(data.master) : null;
    this.mailbox = data.mailbox || "";
    this.ical_uid = data.ical_uid;
    this.linked_bookings = data.linked_bookings || [];
    this.update_master = data.update_master ?? false;
    if (data.recurring) {
      this.recurrence = {
        start: ((_d = data.recurrence) == null ? void 0 : _d.start) || this.event_start * 1e3 || new Date(data.recurrence.range_start * 1e3).valueOf(),
        end: data.recurrence.end || new Date(data.recurrence.range_end * 1e3).valueOf(),
        interval: data.recurrence.interval,
        pattern: data.recurrence.pattern,
        occurrences: data.recurrence.occurrences,
        days_of_week: ((_e = data.recurrence.days_of_week) == null ? void 0 : _e.map((_) => typeof _ === "number" ? _ : DAYS_OF_WEEK.indexOf(_))) || [],
        nth_of_month: data.recurrence.nth_of_month
      };
    } else {
      this.recurrence = {};
    }
    const system = data.system;
    if ((system == null ? void 0 : system.email) && !this.resources.find((_) => _.email.toLowerCase() === system.email.toLowerCase())) {
      this.resources.push(new Space(__spreadProps(__spreadValues({}, system), {
        response_status: data.status || "needsAction"
      })));
    }
    this.system = system || this.resources[0] || null;
    if (!system && data.system_id) {
      this.system = { id: data.system_id };
    }
    this.old_system = data.old_system || data.system;
    this.attachments = data.attachments || [];
    this.extension_data = data.extension_data || {};
    this.deleted = !!data.deleted;
    this.status = eventStatus(__spreadValues(__spreadValues({}, data), this)) || "none";
    this.location = data.location || ((_f = this.space) == null ? void 0 : _f.display_name) || ((_g = this.space) == null ? void 0 : _g.name) || "";
    this.setup_time = data.setup_time || 0;
    this.breakdown_time = data.breakdown_time || 0;
    this.visibility = data.visibility || "normal";
    this.type = this.deleted || this.status === "declined" ? "cancelled" : this.attendees.find((_) => _.is_external) ? "external" : "internal";
    for (const key in data) {
      if (!(key in this)) {
        this.extension_data[key] = data[key] || this.extension_data[key];
      }
    }
    const simple_event = {
      date: this.date,
      duration: this.duration,
      date_end: this.date_end,
      all_day: this.all_day,
      space: this.space,
      organiser: this.organiser
    };
    this.extension_data.catering = (this.extension_data.catering || []).map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: simple_event })));
    const linked_assets = this.linked_bookings.filter((_) => _.booking_type === "asset-request").map((_) => {
      var _a2;
      return (_a2 = _.extension_data) == null ? void 0 : _a2.request;
    }).filter((_) => !!_);
    const asset_requests = (linked_assets.length ? linked_assets : this.extension_data.assets) || [];
    this.extension_data.images = this.extension_data.images || data.images || [];
    this.extension_data.view_access = this.extension_data.view_access || data.view_access || ((_h = data.permission) == null ? void 0 : _h.toUpperCase()) || "OPEN";
    this.permission = data.view_access || data.permission || this.extension_data.view_access;
    if (this.extension_data.permission) {
      this.extension_data.permission = this.permission;
    }
    this.extension_data.assets = asset_requests.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: simple_event })));
  }
  /** List of external attendees associated with the event */
  get guests() {
    return this.attendees.filter((f) => !!f.is_external);
  }
  /** Primary space associated with the booking */
  get space() {
    return this.resources[0] || null;
  }
  get is_today() {
    return isSameDay(this.date, Date.now());
  }
  get valid_catering() {
    return (this.ext("catering") || []).filter((order) => order.deliver_at < this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.ext("assets") || []).map((request) => new AssetRequest(__spreadProps(__spreadValues({}, request), { event: this }))).filter((request) => request.deliver_at < this.date_end).map((request) => {
      const booking = list.find((_) => _.extension_data.request_id === request.id);
      if (booking) {
        request.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  /**
   * Convert class data to simple JSON object
   */
  toJSON() {
    var _a, _b;
    const obj = __spreadValues({}, this);
    const is_full_day_period = this.all_day && getUnixTime(this.date) === getUnixTime(startOfDayInTimezone(this.date, this.timezone)) && getUnixTime(this.date_end) === getUnixTime(endOfDayInTimezone(this.date_end, this.timezone));
    const is_custom_all_day = this.all_day && !is_full_day_period;
    const date = is_full_day_period ? startOfDayInTimezone(this.date, this.timezone) : this.date;
    const end = is_full_day_period ? endOfDayInTimezone(this.date_end, this.timezone) + 1 : this.date_end;
    obj.event_start = getUnixTime(date);
    obj.event_end = getUnixTime(end);
    const attendees = this.attendees;
    this.recurring = ((_a = this.recurrence) == null ? void 0 : _a.pattern) && this.recurrence._pattern !== "none";
    if (this.recurring) {
      obj.recurrence = parseRecurrence(__spreadProps(__spreadValues({}, this.recurrence), {
        start: this.recurrence.start || this.date
      }));
      delete obj.recurrence.start;
      delete obj.recurrence.end;
    }
    obj.recurrence = obj.recurrence ? Object.keys(obj.recurrence).length ? obj.recurrence : null : null;
    obj.attendees = unique([
      ...attendees,
      ...this.resources.map((_) => __spreadProps(__spreadValues({}, _), { resource: true }))
    ], "email");
    if (this.all_day) {
      obj.setup_time = 0;
      obj.breakdown_time = 0;
      obj.extension_data.all_day_date = format(date, "yyyy-MM-dd");
    }
    if (is_custom_all_day) {
      obj.all_day = false;
      obj.extension_data.custom_all_day = true;
    } else {
      if (this.id) {
        obj.extension_data.custom_all_day = false;
      } else {
        delete obj.extension_data.custom_all_day;
      }
    }
    obj.extension_data.catering = obj.extension_data.catering.map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.extension_data.assets = obj.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.system_id = (_b = this.system) == null ? void 0 : _b.id;
    obj.online_meeting_provider = this.meeting_provider;
    for (const key of [
      "catering",
      "date",
      "date_end",
      "duration",
      "status",
      "linked_bookings",
      "_valid_asset_cache",
      "_valid_cache_expiry",
      "type"
    ]) {
      if (key in obj)
        delete obj[key];
    }
    if (!obj.update_master)
      delete obj.recurring_event_id;
    removeEmptyFields(obj);
    return obj;
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
  get can_check_in() {
    const now = /* @__PURE__ */ new Date();
    return this.is_today || isAfter(now, addMinutes(this.date, -5)) && isBefore(now, addMinutes(this.date, this.duration));
  }
};

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
  const set2 = new Set(a);
  return b.every((group) => set2.has(group));
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
    if (!(cache == null ? void 0 : cache.cached_at) || cache.token_id !== tokenID() || cache.cached_at + MAX_CACHE_AGE < Date.now()) {
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
  if (isPublicMode()) {
    user_groups.set([]);
    user_groups_loaded.set(true);
    return;
  }
  try {
    const groups = await Cu({});
    user_groups.set(groups);
    console.log("Permissions:", user_permissions());
  } catch (error) {
    console.warn("Failed to load user groups.", error);
    user_groups.set([]);
  } finally {
    user_groups_loaded.set(true);
  }
}
function initialiseUser() {
  if (isTestRuntime())
    return;
  const is_public_mode = isPublicMode();
  if (!is_public_mode)
    applyCachedUserData();
  const user_request = combineLatest([th("current"), _change]).pipe(map(([i]) => new StaffUser(i)));
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
  })).subscribe((user) => applyUser(user));
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
      const p_user = await th("current");
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
  var _a;
  if ((_a = user_signal().groups) == null ? void 0 : _a.includes("placeos_admin"))
    return true;
  return (getPermissionMask(subsystem) & permissions) === permissions;
}
function getPermissionMask(subsystem) {
  var _a;
  let permissions = 0;
  for (const { group, permissions: group_permissions } of user_groups()) {
    if ((_a = group.subsystems) == null ? void 0 : _a.includes(subsystem)) {
      permissions |= group_permissions;
    }
  }
  return permissions;
}
setTimeout(() => initialiseUser(), 50);

// libs/common/src/lib/settings.service.ts
var _service;
var _setting_signals = {};
var DEBUG_OVERRIDES_KEY = "PLACEOS.setting_overrides";
function loadDebugOverrides() {
  try {
    const overrides = JSON.parse(localStorage.getItem(DEBUG_OVERRIDES_KEY) || "{}");
    for (const key in overrides) {
      if (!key.startsWith("app."))
        delete overrides[key];
    }
    return overrides;
  } catch {
    return {};
  }
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
var _SettingsService = class _SettingsService extends AsyncHandler {
  /**
   * @hidden
   */
  setOverrides(value) {
    this._overrides.set(value);
    this._refreshSettings();
  }
  /** Set a local debug override for an `app.*` setting. `undefined` clears the key. */
  setDebugOverride(key, value) {
    if (!key.startsWith("app."))
      return;
    const overrides = __spreadValues({}, this._debug_overrides());
    if (value === void 0)
      delete overrides[key];
    else
      overrides[key] = value;
    this._debug_overrides.set(overrides);
    if (Object.keys(overrides).length) {
      localStorage.setItem(DEBUG_OVERRIDES_KEY, JSON.stringify(overrides));
    } else
      localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    this._refreshSettings();
  }
  clearDebugOverrides() {
    this._debug_overrides.set({});
    localStorage.removeItem(DEBUG_OVERRIDES_KEY);
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
    var _a;
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id || this.get("app.analytics.enabled") === false)
      return;
    (_a = this._analytics) == null ? void 0 : _a.send("pagename", { title: value });
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
    this._debug_overrides = signal(
      loadDebugOverrides(),
      ...ngDevMode ? [{ debugName: "_debug_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_overrides = this._debug_overrides.asReadonly();
    this._subjects = {};
    this._pending_settings = {};
    this.theme_signal = computed(
      () => {
        const allow_dark_mode = this.signal("allow_dark_mode", false)();
        return allow_dark_mode ? this.signal("theme", "light", true)() : "light";
      },
      ...ngDevMode ? [{ debugName: "theme_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    var _a;
    if (this.get("debug"))
      window.debug = true;
    if ((_a = this.get("app")) == null ? void 0 : _a.name) {
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
    const data = await ac(user.id, "settings");
    this._user_settings.set(data.details || {});
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
    await sh(currentUser().id, { locatable }, "patch");
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
  _applyCssVariables() {
    const variable_map = this.get("app.css_variables") || {};
    let css_string = "body { ";
    for (const key in variable_map) {
      css_string += `--${key}: ${variable_map[key]}; `;
    }
    css_string += "}";
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
    if (!(user == null ? void 0 : user.id) || !Object.keys(this._pending_settings).length)
      return;
    this._updateSignals();
    await hc(user.id, {
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
    var _a;
    if (this.theme)
      return;
    const os_dark = (window == null ? void 0 : window.matchMedia) ? (_a = window == null ? void 0 : window.matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : _a.matches : false;
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
        if (user == null ? void 0 : user.id)
          return resolve(user);
        this.timeout("current_user", check, 100);
      };
      check();
    });
  }
};
_SettingsService.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsService)();
};
_SettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
var SettingsService = _SettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/fixed-device-helpers.ts
var _wake_lock = null;
async function requestScreenWakeLock() {
  if (!_s())
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

// libs/common/src/lib/constants.ts
var SECONDS = 1e3;
var MINUTES = 60 * SECONDS;
var HOURS = 60 * MINUTES;
var DAYS = 24 * HOURS;
var MINUTE = 60 * SECONDS;
var HOUR = 60 * MINUTES;
var DAY = 24 * HOURS;

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
  return so();
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
  const request_url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input == null ? void 0 : input.url;
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
  Xr(settings.app_name || location.pathname.split("/").find(Boolean) || "PlaceOS", new Date(VERSION.time).toISOString(), VERSION.hash);
  const setup_promise = ro(config);
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

// libs/common/src/lib/sentry.ts
var _sentry_handler = null;
var _trace_service = null;
var LazySentryErrorHandler = class extends ErrorHandler {
  handleError(error) {
    if (_sentry_handler)
      _sentry_handler.handleError(error);
    else
      super.handleError(error);
  }
};
async function initSentry(dsn, router, traces_sample_rate = 1) {
  if (!dsn || _sentry_handler)
    return;
  try {
    const Sentry = await import("./sentry-sdk-ORM3ITZP.js");
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: traces_sample_rate,
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [
        "localhost",
        /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
        /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/
      ]
    });
    _trace_service = new Sentry.TraceService(router);
    _sentry_handler = Sentry.createErrorHandler({ showDialog: false });
  } catch (error) {
    log("APP", "Failed to load Sentry.", error, "warn");
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
var _PlaceOS_Service = class _PlaceOS_Service extends AsyncHandler {
  constructor() {
    super(...arguments);
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
    this._maps = inject(MapsPeopleService);
    this._zone = "";
    this._region = "";
    this._initial_token = "";
    this._domain_resolve = null;
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
    var _a;
    NEEDS_DOMAIN.set(false);
    DOMAIN_ERROR.set("");
    AUTO_CONFIRM_DOMAIN.set(false);
    (_a = this._domain_resolve) == null ? void 0 : _a.call(this);
    this._domain_resolve = null;
  }
  async init(options = {}) {
    var _a, _b;
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
      const mocks_enabled = !location.href.includes("mock=false") && (localStorage.getItem("mock") === "true" || location.href.includes("mock=true") || location.origin.includes("demo.place.tech"));
      if (mocks_enabled) {
        setLoadingMessage("Initializing mocks...");
        _mocks();
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
      var _a2;
      (_a2 = navigator.clipboard) == null ? void 0 : _a2.readText().then((tkn) => this._pasteToken(tkn));
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyF"], () => {
      var _a2;
      (_a2 = navigator.clipboard) == null ? void 0 : _a2.readText().then((tkn) => this._pasteToken(tkn));
    });
    window.pasteToken = (t) => this._pasteToken(t);
    setLoadingMessage("Checking params...");
    this._route.queryParamMap.subscribe((params) => {
      var _a2;
      if (params.has("hide_nav"))
        localStorage.setItem("PlaceOS.hide_nav", "true");
      if (params.has("lang")) {
        const locale = params.get("lang");
        (_a2 = this._locale) == null ? void 0 : _a2.setLocale(locale);
        localStorage.setItem("PLACEOS.locale", locale);
      }
      if (params.has("x-api-key")) {
        to(params.get("x-api-key"));
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
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: query
      });
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
        const client_key = `${$i()}_x-api-key`;
        if (api_key)
          to(api_key);
        else if (localStorage.getItem(client_key)) {
          localStorage.removeItem(client_key);
          Cn();
        }
        if (intune_token)
          bi(intune_token);
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
        console.warn("[AUTH] Auth code was present on load but the token exchange did not complete.", `State: "${boot_params.get("state")}"`, `Nonce: "${localStorage.getItem(`${$i()}_nonce`)}"`);
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
      const auth_url = await createNativeAuthUrl(settings, $i());
      console.warn(`[AUTH] Opening sign in: ${auth_url}`);
      await openNativeBrowser(auth_url);
      return;
    }
    if (!isNativeApp()) {
      setLoadingMessage("Authenticating...");
      await setupPlace(settings, AUTHORITY_WAIT_MS).catch((_) => console.error(_));
    }
    if (this._initial_token)
      bi(this._initial_token);
    try {
      await withTimeout(this._org.waitUntilInitialised(), 5e4, "Organisation loading timed out.");
    } catch (error) {
      console.error(error);
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
      console.error(error);
      this.onInitError();
      return;
    }
    clearNativePkceVerifier();
    this._initLocale();
    setInternalUserDomain(this._settings.get("app.internal_user_domain") || `@${(_b = (_a = currentUser()) == null ? void 0 : _a.email) == null ? void 0 : _b.split("@")[1]}`);
    this._initAnalytics();
    void initSentry(this._settings.get("app.sentry_dsn"), this._router);
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
    var _a;
    if (Un() || ((_a = currentUser()) == null ? void 0 : _a.is_logged_in))
      return;
    if (isNativeApp() && getNativeApiKey()) {
      clearNativeApiKey();
      clearNativeDomain();
      localStorage.removeItem(`${$i()}_x-api-key`);
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
    if (tracking_id.startsWith("G-") && this._router.navigated) {
      this._analytics.page(this._router.url);
    }
    this.subscription("analytics-router", this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => this._analytics.page(event.urlAfterRedirects)));
  }
  _initLocale() {
    var _a, _b;
    setLoadingMessage("Loading locales...");
    try {
      let locale = localStorage.getItem("PLACEOS.locale");
      const locales = this._settings.get("app.locales") || [];
      if (locale) {
        (_a = this._locale) == null ? void 0 : _a.setLocale(locale);
      } else {
        const list = navigator.languages;
        for (const lang of list) {
          locale = locales.find((_) => _.id === lang);
          if (!locale)
            locale = locales.find((_) => lang.includes(_.id));
          if (locale) {
            (_b = this._locale) == null ? void 0 : _b.setLocale(lang);
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
    const id = $i();
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
    if (!_s())
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
      const target_region_id = this._region || (bld == null ? void 0 : bld.parent_id);
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
};
_PlaceOS_Service.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PlaceOS_Service_BaseFactory;
  return function PlaceOS_Service_Factory(__ngFactoryType__) {
    return (\u0275PlaceOS_Service_BaseFactory || (\u0275PlaceOS_Service_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceOS_Service)))(__ngFactoryType__ || _PlaceOS_Service);
  };
})();
_PlaceOS_Service.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceOS_Service, factory: _PlaceOS_Service.\u0275fac, providedIn: "root" });
var PlaceOS_Service = _PlaceOS_Service;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceOS_Service, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
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
var MAX_CACHE_AGE2 = 7 * 24 * 60 * 60 * 1e3;
function cachedAuthority() {
  var _a;
  const auth = Mt();
  if (auth == null ? void 0 : auth.id) {
    const details = {
      id: auth.id,
      metadata_cache_id: `${((_a = auth.config) == null ? void 0 : _a["metadata_cache_id"]) || ""}`
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
var _OrganisationService = class _OrganisationService {
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
      id = region == null ? void 0 : region.id;
    return this._region_settings ? this._region_settings[id] || {} : {};
  }
  /** Mapping building settings overrides */
  buildingSettings(bld_id = "") {
    var _a, _b;
    if (!bld_id && this.building) {
      bld_id = ((_a = this.building) == null ? void 0 : _a.id) || ((_b = this.buildings[0]) == null ? void 0 : _b.id);
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
    var _a;
    const active_region = this._active_region();
    if (!item || (active_region == null ? void 0 : active_region.id) === (item == null ? void 0 : item.id))
      return;
    this._active_region.set(item);
    await this.loadRegionData(item);
    this._setBuildingFromTimezone();
    if (!this._skip_auto_selection && ((_a = this.building) == null ? void 0 : _a.parent_id) !== item.id && this.buildingsForRegion(item).length) {
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
    var _a;
    if (!(bld instanceof Object))
      return;
    this._active_building.set(bld);
    if (!this._service.get("dont_load_metadata")) {
      this.loadBuildingData(bld).then(() => this._updateSettingOverrides());
    }
    if (this.regions.length && ((_a = this.region) == null ? void 0 : _a.id) !== bld.parent_id) {
      this.region = this.regions.find((_) => _.id === this.building.parent_id);
    }
    if (save)
      localStorage.setItem("PLACEOS.building", bld.id);
  }
  get timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get currency_code() {
    var _a;
    return this._service.get("app.currency") || ((_a = this.building) == null ? void 0 : _a.currency) || "USD";
  }
  /** Get binding value from the building/organisation */
  binding(name) {
    var _a, _b;
    return ((_a = this.building) == null ? void 0 : _a.bindings[name]) || ((_b = this._organisation) == null ? void 0 : _b.bindings[name]);
  }
  module(name, default_mod_id = "System") {
    const binding = this.binding(name);
    const system_id = binding instanceof Object ? binding.id || binding.system_id : binding;
    const mod_id = (binding instanceof Object ? binding.mod || binding.module : "") || default_mod_id;
    return !system_id || !mod_id ? null : Gp(system_id, mod_id);
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
        var _a;
        if (this._service.get("dont_load_metadata"))
          return true;
        const id = (_a = this._active_building()) == null ? void 0 : _a.id;
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
    const online_state = io();
    const online = Yr(online_state, (_) => _);
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
    const building = this._buildingWithID(id_list) || this._buildings_by_id().get(level == null ? void 0 : level.parent_id);
    const region = this._regions_by_id().get(building == null ? void 0 : building.parent_id);
    const label = [region, building, level].map((_) => (_ == null ? void 0 : _.display_name) || (_ == null ? void 0 : _.name)).filter((_) => !!_).join(" / ");
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
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && lvl.parent_id === (bld == null ? void 0 : bld.id)));
  }
  /**
   * Get list of buildings for the given region
   * @param region Region to list buildings for
   */
  buildingsForRegion(region = this.region) {
    return this.buildings.filter((bld) => bld.parent_id === (region == null ? void 0 : region.id));
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
        if (so() && navigator.onLine !== false) {
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
    var _a, _b, _c2;
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
    if (!((_a = this._building_list()) == null ? void 0 : _a.length)) {
      log2("Unable to find any building zones");
    }
    loadingMessage("Loading active building levels...");
    await this.loadLevels();
    if (refreshing) {
      if ((_b = this.region) == null ? void 0 : _b.id)
        await this.loadRegionData(this.region);
      if (((_c2 = this.building) == null ? void 0 : _c2.id) && !this._service.get("dont_load_metadata")) {
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
      const org = org_list.find((list) => {
        var _a;
        return Un() || list.id === ((_a = auth == null ? void 0 : auth.config) == null ? void 0 : _a.org_zone);
      }) || org_list[0];
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
    var _a;
    const list = (await this._queryZones({
      tags: "region",
      parent_id: ((_a = this._organisation) == null ? void 0 : _a.id) || "",
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
  async loadBuildings(parent_id = ((_a) => (_a = this._organisation) == null ? void 0 : _a.id)()) {
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
    if (!(level_list == null ? void 0 : level_list.length)) {
      this._router.navigate(["/misconfigured"]);
    }
    let levels = level_list.map((lvl) => new BuildingLevel(lvl));
    levels = levels.sort((a, b) => Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || ""));
    this._level_list.set(levels);
  }
  async loadSettings() {
    var _a;
    if (!this._organisation)
      return;
    const org_id = (_a = this._organisation) == null ? void 0 : _a.id;
    const app_settings = (await this._bulkMetadataDetails(this.app_key, [org_id]))[org_id];
    const global_settings = (await this._bulkMetadataDetails("settings", [org_id]))[org_id];
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
    var _a;
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
    if ((_a = this.building) == null ? void 0 : _a.id)
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
    const bld_list = this.buildings.filter((bld) => {
      var _a;
      return !this.region || bld.parent_id === ((_a = this.region) == null ? void 0 : _a.id);
    });
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
    return list.find((_) => {
      var _a;
      return (_a = _.timezone) == null ? void 0 : _a.startsWith(tz_start);
    });
  }
  _updateSettingOverrides() {
    if (this._override_timer)
      clearTimeout(this._override_timer);
    this._override_timer = setTimeout(() => {
      var _a, _b;
      return this._service.setOverrides([
        this.buildingSettings((_a = this.building) == null ? void 0 : _a.id),
        this.regionSettings((_b = this.region) == null ? void 0 : _b.id),
        ...this._settings
      ]);
    }, 300);
  }
  async _bulkMetadataDetails(name, ids) {
    const parent_ids = ids.filter(Boolean).join(",");
    if (!parent_ids)
      return {};
    const cache_key = this._metadataCacheKey(name, ids);
    const cached_metadata = this._getCachedItem(cache_key);
    if (cached_metadata)
      return cached_metadata;
    const metadata = await _c(name, { parent_ids }).catch((err) => (err == null ? void 0 : err.status) === 404 ? this._individualMetadata(name, ids) : {});
    const metadata_details = ids.reduce((map2, id) => {
      var _a;
      map2[id] = ((_a = metadata[id]) == null ? void 0 : _a.details) || {};
      return map2;
    }, {});
    this._setCachedItem(cache_key, metadata_details);
    return metadata_details;
  }
  /** Fallback for backends without the bulk metadata endpoint (404) */
  async _individualMetadata(name, ids) {
    const items = await Promise.all(ids.filter(Boolean).map((id) => ac(id, name).then((item) => [id, item], () => [id, null])));
    const metadata = {};
    for (const [id, item] of items) {
      if (item)
        metadata[id] = item;
    }
    return metadata;
  }
  async _queryZones(params) {
    var _a;
    const cache_key = this._zoneCacheKey(params);
    const cached_zones = this._getCachedItem(cache_key);
    if (cached_zones)
      return cached_zones;
    const zones = (await dh(__spreadProps(__spreadValues({}, params), {
      authority_id: (_a = Mt()) == null ? void 0 : _a.id
    }))).data || [];
    this._setCachedItem(cache_key, zones);
    return zones;
  }
  _metadataCacheKey(name, ids) {
    const auth = cachedAuthority();
    const parent_ids = ids.filter(Boolean).sort().join(",");
    return `${METADATA_CACHE_PREFIX}.${(auth == null ? void 0 : auth.id) || "default"}.${name}.${parent_ids}`;
  }
  _zoneCacheKey(params) {
    const auth = cachedAuthority();
    const sorted_params = Object.keys(params).sort().reduce((cache_params, key) => {
      cache_params[key] = params[key];
      return cache_params;
    }, {});
    return `${ZONE_CACHE_PREFIX}.${(auth == null ? void 0 : auth.id) || "default"}.${JSON.stringify(sorted_params)}`;
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
    var _a;
    return `${((_a = cachedAuthority()) == null ? void 0 : _a.metadata_cache_id) || ""}`;
  }
  _clearCache() {
    for (const store of [localStorage, sessionStorage]) {
      for (let i = store.length - 1; i >= 0; i--) {
        const key = store.key(i);
        if (key == null ? void 0 : key.startsWith(ORG_CACHE_PREFIX))
          store.removeItem(key);
      }
    }
  }
};
_OrganisationService.\u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrganisationService)();
};
_OrganisationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
var OrganisationService = _OrganisationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/mapspeople.service.ts
var MapService;
(function(MapService2) {
  MapService2[MapService2["GoogleMaps"] = 0] = "GoogleMaps";
  MapService2[MapService2["Mapbox"] = 1] = "Mapbox";
})(MapService || (MapService = {}));
var _MapsPeopleService = class _MapsPeopleService extends AsyncHandler {
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
        if (!this._org.initialised() || !(bld == null ? void 0 : bld.id))
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
};
_MapsPeopleService.\u0275fac = function MapsPeopleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapsPeopleService)();
};
_MapsPeopleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapsPeopleService, factory: _MapsPeopleService.\u0275fac, providedIn: "root" });
var MapsPeopleService = _MapsPeopleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsPeopleService, [{
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
  provideServiceWorker,
  addMonths,
  getUnixTime,
  isBefore,
  DEFAULT_SETTINGS,
  Space,
  CalendarEvent,
  GroupPermission,
  current_user,
  user_groups_loaded,
  currentUser,
  hasPermission,
  VERSION,
  settingSignal,
  SettingsService,
  toQueryString,
  serviceWorkerUpdate,
  initialisationFailure,
  initialisationComplete,
  retryInitialisation,
  firstValueWhere,
  Clipboard,
  LazySentryErrorHandler,
  getLoadingMessage,
  needsNativeDomain,
  nativeDomainError,
  autoConfirmNativeDomain,
  setMocks,
  PlaceOS_Service,
  OrganisationService
};
//# debugId=2f4e8041-cb8b-5b2a-a773-9a95cfeb7624
//# sourceMappingURL=chunk-4UEO4SY4.js.map
