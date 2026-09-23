import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  isDebugEnabled,
  recordHeartbeat,
  watchdogState
} from "./chunk-S4VAXYDE.js";
import {
  TranslatePipe
} from "./chunk-EFDMFSDV.js";
import {
  CustomTooltipComponent
} from "./chunk-BCKJSJPH.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-VGTGCMTG.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CommonModule,
  Component,
  Cs,
  DatePipe,
  Dd,
  DefaultValueAccessor,
  DestroyRef,
  Dh,
  ElementRef,
  FormsModule,
  IconComponent,
  Injectable,
  Injector,
  Input,
  J,
  MINUTES,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  Output,
  Pipe,
  ReplaySubject,
  Router,
  SECONDS,
  SafePipe,
  SettingsService,
  SlicePipe,
  Subject,
  Uh,
  VERSION,
  ViewChild,
  ViewChildren,
  Xe,
  Xr,
  addDays,
  addMonths,
  addYears,
  assertInInjectionContext,
  computed,
  effect,
  endOfDay,
  filter,
  firstValueFrom,
  forwardRef,
  fromZonedTime,
  getTimeInTimezone,
  getTimezoneOffsetString,
  gr,
  hl,
  il,
  inject,
  input,
  isBefore,
  isValid,
  linkedSignal,
  log,
  markUserDateChange,
  model,
  mr,
  normalizeDates,
  of,
  oi,
  output,
  padLength,
  randomInt,
  randomString,
  scoped_log,
  set,
  setAutoReloadGate,
  setClassMetadata,
  setTimeInTimezone,
  shuffleArray,
  shuffleArrayWithFirstItem,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  timeout,
  toDate,
  toZonedTime,
  u,
  untracked,
  updateCheckState,
  v,
  viewChild,
  viewChildren,
  ws,
  yr,
  zi,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-ZET2UQNT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
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

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// libs/components/src/lib/plugin-embed.component.ts
var _c0 = ["plugin_el"];
function PluginEmbedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "iframe", 2, 0);
    \u0275\u0275pipe(2, "safe");
    \u0275\u0275domListener("load", function PluginEmbedComponent_Conditional_0_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loaded.emit());
    })("error", function PluginEmbedComponent_Conditional_0_Template_iframe_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIframeError());
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx_r1.plugin().uri, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var API_VERSION = "signage-plugin/v1";
var MAX_THUMBNAIL_LENGTH = 4 * 1024 * 1024;
var THUMBNAIL_DATA_URL = /^data:image\/(png|jpeg|webp);base64,/;
function safeThumbnail(image) {
  if (typeof image !== "string")
    return "";
  if (!THUMBNAIL_DATA_URL.test(image))
    return "";
  if (image.length > MAX_THUMBNAIL_LENGTH)
    return "";
  return image;
}
var PluginEmbedComponent = class _PluginEmbedComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.plugin = input(
      null,
      ...ngDevMode ? [{ debugName: "plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.config = input(
      null,
      ...ngDevMode ? [{ debugName: "config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.play = input(
      0,
      ...ngDevMode ? [{ debugName: "play" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_play = input(
      false,
      ...ngDevMode ? [{ debugName: "auto_play" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.play_delay = input(
      100,
      ...ngDevMode ? [{ debugName: "play_delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.details = model(
      null,
      ...ngDevMode ? [{ debugName: "details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schema = model(
      {},
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = model(
      "unknown",
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loaded = output();
    this.plugin_error = output();
    this.plugin_interaction = output();
    this._plugin_el = viewChild(
      "plugin_el",
      ...ngDevMode ? [{ debugName: "_plugin_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_origin = computed(
      () => {
        try {
          const uri = this.plugin()?.uri;
          if (!uri)
            return "";
          return new URL(uri, window.location.origin).origin;
        } catch {
          return "";
        }
      },
      ...ngDevMode ? [{ debugName: "plugin_origin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_messages = (e) => this._handleMessage(e);
    this._play_timer = null;
    this._pending_auto_config = false;
    this._thumbnail_requests = /* @__PURE__ */ new Map();
    this._thumbnail_count = 0;
  }
  ngOnInit() {
    this._setupChannels();
  }
  ngOnChanges(changes) {
    if (changes.plugin) {
      this.status.set("unknown");
      this._clearPlayTimer();
      this._pending_auto_config = this.auto_play() && !!this.config();
      this._setupChannels();
    }
    if (changes.play && this.play())
      this.send("play");
    if (changes.config && !changes.plugin)
      this._applyConfigChange();
  }
  /**
   * Push a new config to the plugin. With auto_play the first config waits
   * for the plugin to report loaded/ready, but later changes (e.g. unsaved
   * parameter edits in the manager preview) go straight through.
   */
  _applyConfigChange() {
    const config = this.config();
    if (!config) {
      this._pending_auto_config = false;
      return;
    }
    if (this.auto_play() && this.status() === "unknown") {
      this._pending_auto_config = true;
      return;
    }
    this.send("config", config);
  }
  send(type, payload = null, request_id) {
    const origin = this.plugin_origin();
    if (!origin)
      return;
    this._plugin_el()?.nativeElement?.contentWindow.postMessage({ api: API_VERSION, type, request_id, payload }, origin);
  }
  /** Whether the plugin told us it can render its own thumbnail */
  canProvideThumbnail() {
    return !!this.details()?.capabilities?.can_thumbnail;
  }
  /**
   * Ask the plugin to render a thumbnail of itself. Resolves to an empty
   * string for any plugin that cannot or does not answer, so callers treat a
   * plugin built before this existed exactly as they did before.
   */
  requestThumbnail(width, height, timeout_ms = 5e3) {
    const origin = this.plugin_origin();
    const frame = this._plugin_el()?.nativeElement?.contentWindow;
    if (!this.canProvideThumbnail() || !origin || !frame) {
      return Promise.resolve("");
    }
    this._thumbnail_count += 1;
    const request_id = `thumbnail-${this._thumbnail_count}`;
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this._thumbnail_requests.delete(request_id);
        resolve("");
      }, timeout_ms);
      this._thumbnail_requests.set(request_id, (image) => {
        clearTimeout(timer);
        resolve(image);
      });
      this.send("thumbnail", { width, height }, request_id);
    });
  }
  onIframeError() {
    this.plugin_error.emit({
      code: "iframe_load_error",
      message: "Plugin iframe failed to load.",
      fatal: true
    });
  }
  _setupChannels() {
    if (!this.plugin()?.uri)
      return;
    this.subscription("channel", () => window.removeEventListener("message", this._handle_messages));
    window.addEventListener("message", this._handle_messages);
  }
  _handleMessage(event) {
    if (event.origin !== this.plugin_origin())
      return;
    if (event.source !== this._plugin_el()?.nativeElement?.contentWindow)
      return;
    const msg = event.data;
    if (!msg || msg.api !== API_VERSION || typeof msg.type !== "string")
      return;
    if (msg.type === "interaction") {
      this.plugin_interaction.emit(msg.payload);
      return;
    }
    if (msg.type === "thumbnail") {
      const handler = this._thumbnail_requests.get(msg.request_id);
      if (!handler)
        return;
      this._thumbnail_requests.delete(msg.request_id);
      handler(safeThumbnail(msg.payload?.image));
      return;
    }
    this.status.set(msg.type);
    switch (msg.type) {
      case "loaded":
        this.details.set(msg.payload);
        this.schema.set(msg.payload?.config_schema);
        this._autoConfigure();
        break;
      case "ready":
        this._autoConfigure();
        break;
      case "error":
        this.plugin_error.emit(msg.payload);
        break;
    }
  }
  _autoConfigure() {
    if (!this.auto_play() || !this.config() || !this._pending_auto_config) {
      return;
    }
    this._pending_auto_config = false;
    this.send("config", this.config());
    this._clearPlayTimer();
    this._play_timer = setTimeout(() => this.send("play"), this.play_delay());
  }
  _clearPlayTimer() {
    if (!this._play_timer)
      return;
    clearTimeout(this._play_timer);
    this._play_timer = null;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PluginEmbedComponent_BaseFactory;
      return function PluginEmbedComponent_Factory(__ngFactoryType__) {
        return (\u0275PluginEmbedComponent_BaseFactory || (\u0275PluginEmbedComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PluginEmbedComponent)))(__ngFactoryType__ || _PluginEmbedComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PluginEmbedComponent, selectors: [["plugin-embed"]], viewQuery: function PluginEmbedComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._plugin_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { plugin: [1, "plugin"], config: [1, "config"], play: [1, "play"], auto_play: [1, "auto_play"], play_delay: [1, "play_delay"], details: [1, "details"], schema: [1, "schema"], status: [1, "status"] }, outputs: { details: "detailsChange", schema: "schemaChange", status: "statusChange", loaded: "loaded", plugin_error: "plugin_error", plugin_interaction: "plugin_interaction" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["plugin_el", ""], ["sandbox", "allow-scripts allow-same-origin", "referrerpolicy", "no-referrer", 3, "src"], ["sandbox", "allow-scripts allow-same-origin", "referrerpolicy", "no-referrer", 3, "load", "error", "src"]], template: function PluginEmbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PluginEmbedComponent_Conditional_0_Template, 3, 4, "iframe", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.plugin()?.uri ? 0 : -1);
      }
    }, dependencies: [SafePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n/*# sourceMappingURL=plugin-embed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PluginEmbedComponent, [{
    type: Component,
    args: [{ selector: "plugin-embed", template: `
        @if (plugin()?.uri) {
            <iframe
                #plugin_el
                sandbox="allow-scripts allow-same-origin"
                referrerpolicy="no-referrer"
                [src]="plugin().uri | safe: 'resource'"
                (load)="loaded.emit()"
                (error)="onIframeError()"
            >
            </iframe>
        }
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;5c38d2afd4718f43078bd3971d0ccbbcc4ff11b3de0233f512e4525ba7baa5f1;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/plugin-embed.component.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n/*# sourceMappingURL=plugin-embed.component.css.map */\n"] }]
  }], null, { plugin: [{ type: Input, args: [{ isSignal: true, alias: "plugin", required: false }] }], config: [{ type: Input, args: [{ isSignal: true, alias: "config", required: false }] }], play: [{ type: Input, args: [{ isSignal: true, alias: "play", required: false }] }], auto_play: [{ type: Input, args: [{ isSignal: true, alias: "auto_play", required: false }] }], play_delay: [{ type: Input, args: [{ isSignal: true, alias: "play_delay", required: false }] }], details: [{ type: Input, args: [{ isSignal: true, alias: "details", required: false }] }, { type: Output, args: ["detailsChange"] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }, { type: Output, args: ["schemaChange"] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }, { type: Output, args: ["statusChange"] }], loaded: [{ type: Output, args: ["loaded"] }], plugin_error: [{ type: Output, args: ["plugin_error"] }], plugin_interaction: [{ type: Output, args: ["plugin_interaction"] }], _plugin_el: [{ type: ViewChild, args: ["plugin_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PluginEmbedComponent, { className: "PluginEmbedComponent", filePath: "libs/components/src/lib/plugin-embed.component.ts", lineNumber: 131 });
})();

// libs/components/src/lib/media-duration.pipe.ts
var MediaDurationPipe = class _MediaDurationPipe {
  transform(period_length, show_ms = false) {
    const hours = Math.floor(period_length / 60 / 60);
    const minutes = Math.floor(period_length / 60 % 60);
    const seconds = Math.floor(period_length % 60);
    const milliseconds = Math.floor(period_length * 1e3 % 1e3);
    let str = `${padLength(minutes)}:${padLength(seconds)}`;
    if (show_ms) {
      str += `.${padLength(milliseconds, 3)}`;
    }
    if (hours > 0)
      str = `${padLength(hours)}:${str}`;
    return str;
  }
  static {
    this.\u0275fac = function MediaDurationPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaDurationPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "mediaDuration", type: _MediaDurationPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaDurationPipe, [{
    type: Pipe,
    args: [{
      name: "mediaDuration"
    }]
  }], null, null);
})();

// apps/signage/src/app/media-cache.service.ts
var STORE_KEY = "PlaceOS.SIGNAGE.cached_files";
var DB_NAME = "SignageMedia";
var DB_VERSION = 1;
var DB_STORE = "files";
var UPLOADS_PATH = "/api/engine/v2/uploads";
var STAGGER_DELAY_MS = 500;
var DEFAULT_OWNER_CACHE_LIMIT_BYTES = 512 * 1024 * 1024;
var DB_OPERATION_TIMEOUT_MS = 30 * SECONDS;
var DB_RECONNECT_INTERVAL_MS = 30 * SECONDS;
var DOWNLOAD_STALL_MS = 60 * SECONDS;
var DOWNLOAD_TIMEOUT_MS = 15 * MINUTES;
var DOWNLOAD_WAIT_MS = DOWNLOAD_TIMEOUT_MS + DB_OPERATION_TIMEOUT_MS;
var DIRECT_URL_COOKIE_SECONDS = 60 * 60;
var log2 = scoped_log("MediaCache");
function isLoadingStatus(status) {
  return status === "preparing" || status === "downloading" || status === "storing";
}
function isFinalStatus(status) {
  return status === "cached" || status === "invalidated";
}
function cacheStatus(item, status) {
  item.status = status;
  item.on_change.next(status);
}
function cacheOwners(item) {
  return [.../* @__PURE__ */ new Set([...item.owners || [], item.owner || ""])].filter((_) => !!_);
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function withTimeout(promise, timeout_ms, message, on_timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      on_timeout?.();
      reject(new Error(message));
    }, timeout_ms);
    promise.then((value) => {
      clearTimeout(timer);
      resolve(value);
    }, (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}
var MediaCacheService = class _MediaCacheService extends AsyncHandler {
  get _cache_index() {
    return this._file_cache_index();
  }
  constructor() {
    super();
    this._file_cache_index = signal(
      [],
      ...ngDevMode ? [{ debugName: "_file_cache_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._unverified_ids = /* @__PURE__ */ new Set();
    this._downloads = /* @__PURE__ */ new Map();
    this._last_reconnect = 0;
    this._loadCacheMetadata();
    this._connectDatabase();
    effect(() => {
      this._file_cache_index();
      this._saveCacheMetadata();
    });
  }
  async requestFilesToCache(url_list, owner = "", options = {}) {
    let failures = false;
    let uncached_count = 0;
    for (const url of url_list) {
      if (!url)
        continue;
      const existing = this._cacheItem(url);
      if (existing) {
        if (isLoadingStatus(existing.status)) {
          const final_status = await this._finalCacheStatus(existing);
          if (final_status === "cached") {
            await this._addOwner(existing, owner);
            continue;
          }
        } else if (existing.status === "cached" && await this._hasStoredFile(existing, url)) {
          await this._addOwner(existing, owner);
          continue;
        }
      }
      if (uncached_count > 0)
        await delay(STAGGER_DELAY_MS);
      uncached_count++;
      const { stored } = await this._cacheFile(url, owner);
      if (!stored)
        failures = true;
      await this.pruneCache(owner, url_list, options.max_size, options.prune_other_owners);
    }
    this._file_cache_index.set([...this._cache_index]);
    await this.pruneCache(owner, url_list, options.max_size, options.prune_other_owners);
    return failures;
  }
  /** Download a file into the cache entry. Rejects unless it was stored. */
  async requestAndCacheFile(url, cache_item) {
    const { file, stored } = await this._downloadAndStore(url, cache_item);
    if (!stored)
      throw new Error("Unable to cache media file");
    return file;
  }
  /**
   * The file for a URL, from the cache when it has it and downloaded when it
   * does not. Unlike `requestFilesToCache` this hands back a download that
   * could not be stored, so a broken database never stops media playing.
   * Waits at most `wait_ms` for a download that is already in progress and
   * returns null if it has not finished by then.
   */
  async fetchFile(url, owner = "", wait_ms = DOWNLOAD_WAIT_MS) {
    if (!url)
      return null;
    const existing = this._cacheItem(url);
    if (existing && isLoadingStatus(existing.status)) {
      const status = await this._finalCacheStatus(existing, wait_ms);
      if (status === "cached") {
        return this._storedFile(existing, url).catch(() => null);
      }
      if (isLoadingStatus(status))
        return null;
    } else if (existing?.status === "cached") {
      const file2 = await this._storedFile(existing, url).catch(() => null);
      if (file2)
        return file2;
    }
    const { file } = await this._cacheFile(url, owner);
    return file;
  }
  /**
   * A URL the player can hand to a media element when the cache has nothing
   * to offer. Protected uploads need the session cookie the media element
   * will send with its request.
   */
  directURL(url) {
    if (!url)
      return "";
    if (url.includes(UPLOADS_PATH)) {
      this.applyAuthenticationCookie(DIRECT_URL_COOKIE_SECONDS);
    }
    return url;
  }
  /** Snapshot of what the cache is holding, for diagnostics */
  cacheState(owner = "") {
    const files = this._cache_index.filter((_) => !owner || cacheOwners(_).includes(owner)).map((_) => ({
      url: _.url,
      status: _.status,
      size: _.size || 0,
      owners: cacheOwners(_)
    }));
    return {
      file_count: files.length,
      cached_count: files.filter((_) => _.status === "cached").length,
      total_bytes: files.reduce((total, _) => total + _.size, 0),
      limit_bytes: DEFAULT_OWNER_CACHE_LIMIT_BYTES,
      downloads_in_flight: this._downloads.size,
      files
    };
  }
  availableFiles(owner = "") {
    return this._cache_index.filter((_) => _.status === "cached" && (!owner || cacheOwners(_).includes(owner))).map((_) => _.url);
  }
  /**
   * Whether a file is still being prepared/downloaded/stored, or has not yet
   * been registered for caching (i.e. queued). Returns false once the file is
   * cached or has been invalidated.
   */
  isLoadingFile(url) {
    const item = this._cacheItem(url);
    if (!item)
      return true;
    return isLoadingStatus(item.status);
  }
  isCachedFile(url) {
    return this._cacheItem(url)?.status === "cached";
  }
  /**
   * The cached file for a URL. Waits at most `max_wait_ms` for a download
   * that is in progress, and resolves null when the cache has no usable copy.
   */
  async getFile(url, max_wait_ms = DOWNLOAD_WAIT_MS) {
    const cache_item = this._cacheItem(url);
    if (!cache_item)
      throw new Error("Unable to find file with URL");
    if (isLoadingStatus(cache_item.status)) {
      const final_status = await this._finalCacheStatus(cache_item, max_wait_ms);
      if (final_status !== "cached")
        return null;
    } else if (cache_item.status === "invalidated") {
      return null;
    }
    return this._storedFile(cache_item, url);
  }
  async pruneCache(owner = "", priority_urls = [], max_size = DEFAULT_OWNER_CACHE_LIMIT_BYTES, prune_other_owners = false) {
    if (!this._cache_db_ready || max_size <= 0)
      return;
    const candidates = this._cache_index.filter((item) => item.status === "cached" && (!owner || cacheOwners(item).includes(owner) || prune_other_owners));
    if (candidates.some((item) => !(item.size > 0))) {
      await this._recoverCachedSizes();
    }
    const owner_items = candidates.map((item) => {
      const owners = cacheOwners(item);
      return {
        item,
        owners,
        size: item.size || 0,
        priority: priority_urls.indexOf(item.url),
        owner_priority: !owner || owners.includes(owner) ? 1 : 0
      };
    }).filter((_) => _.size > 0);
    let total_size = owner_items.reduce((total, item) => total + item.size, 0);
    if (total_size <= max_size)
      return;
    const eviction_list = owner_items.sort((a, b) => {
      const a_priority = a.priority >= 0 ? a.priority : Number.MAX_SAFE_INTEGER;
      const b_priority = b.priority >= 0 ? b.priority : Number.MAX_SAFE_INTEGER;
      if (a.owner_priority !== b.owner_priority) {
        return a.owner_priority - b.owner_priority;
      }
      if (a_priority !== b_priority)
        return b_priority - a_priority;
      return b.size - a.size;
    });
    for (const { item, owners, size } of eviction_list) {
      if (total_size <= max_size)
        break;
      const is_owner_file = owner && owners.includes(owner);
      await this.invalidateFile(item.url, is_owner_file ? owner : "").catch(() => void 0);
      total_size -= size;
    }
  }
  async invalidateStore() {
    if (!this._cache_db_ready)
      return;
    try {
      await this._write((store) => store.clear(), "clear");
    } catch (e) {
      log2.error(`Error clearing all cached resources. ${e}`);
      throw e;
    }
    log2.debug(`Cleared all cached resources.`);
    this._file_cache_index.set([]);
  }
  async invalidateFile(url, owner = "") {
    if (!this._cache_db_ready)
      throw new Error("Cache DB not ready");
    const cache_item = this._cacheItem(url);
    if (cache_item?.status !== "cached") {
      throw new Error("Cached item with URL not found");
    }
    if (owner && !cacheOwners(cache_item).includes(owner)) {
      throw new Error("Cached item with URL not found");
    }
    const remaining_owners = owner ? cacheOwners(cache_item).filter((_) => _ !== owner) : [];
    if (owner && remaining_owners.length) {
      cache_item.owner = remaining_owners[0] || "";
      cache_item.owners = remaining_owners;
      this._file_cache_index.set([...this._cache_index]);
      await this._updateStoredOwners(cache_item);
      return;
    }
    try {
      await this._write((store) => store.delete(cache_item.id), "delete");
    } catch (e) {
      log2.error(`Error removing cached resource. ${e}`, url);
      throw e;
    }
    log2.debug(`Removed resource.`, cache_item.id, url);
    this._file_cache_index.set(this._cache_index.filter((_) => _.id !== cache_item.id));
  }
  /**
   * Set the session cookie that authenticates requests for protected uploads
   * made outside the API client: the cache's own download and, as a fallback,
   * media elements streaming straight from the server.
   */
  applyAuthenticationCookie(max_age_seconds = 30) {
    const tkn = J();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Xe()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=${max_age_seconds};path=${UPLOADS_PATH};samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
  }
  _cacheItem(url) {
    return this._cache_index.find((_) => _.url === url);
  }
  /**
   * Download a URL into the cache, sharing the download with any other
   * caller asking for the same URL at the same time.
   */
  _cacheFile(url, owner) {
    const in_flight = this._downloads.get(url);
    if (in_flight)
      return in_flight;
    const cache_item = {
      id: randomString(16, "0123456789ABCDEF"),
      url,
      owner,
      owners: owner ? [owner] : [],
      status: "preparing",
      on_change: new Subject()
    };
    this._file_cache_index.set([
      ...this._cache_index.filter((_) => _.url !== url),
      cache_item
    ]);
    const download = this._downloadAndStore(url, cache_item).finally(() => {
      if (this._downloads.get(url) === download) {
        this._downloads.delete(url);
      }
    });
    this._downloads.set(url, download);
    return download;
  }
  async _downloadAndStore(url, cache_item) {
    let file = null;
    try {
      cacheStatus(cache_item, "downloading");
      if (url.includes(UPLOADS_PATH))
        this.applyAuthenticationCookie();
      const blob = await this._download(url);
      if (blob.size <= 0) {
        log2.error(`Downloaded resource is empty.`, url);
        throw new Error("Downloaded media file is empty");
      }
      cacheStatus(cache_item, "storing");
      file = new File([blob], cache_item.id, { type: blob.type });
      await this._storeFile(cache_item, file, url);
      cache_item.size = file.size;
      log2.debug(`Cached resource.`, [cache_item.id, url]);
      cacheStatus(cache_item, "cached");
      this._file_cache_index.set([...this._cache_index]);
      return { file, stored: true };
    } catch (e) {
      log2.error(`Error downloading resource.`, url, e);
      if (cache_item.status !== "invalidated") {
        this._markInvalidated(cache_item);
      }
      return { file, stored: false };
    }
  }
  /**
   * Fetch a URL, giving up if the response stops arriving. A download that
   * hangs would otherwise leave its cache entry loading forever, with the
   * player and every later cache sync waiting behind it.
   */
  async _download(url) {
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const abort = () => controller?.abort();
    const response = await withTimeout(fetch(url, controller ? { signal: controller.signal } : void 0), DOWNLOAD_STALL_MS, "Timed out waiting for the server to respond", abort);
    if (!response.ok) {
      log2.error(`Error fetching resource. ${response.status}`, url);
      throw new Error(`Request failed with status ${response.status}`);
    }
    const reader = response.body?.getReader?.();
    if (!reader) {
      return withTimeout(response.blob(), DOWNLOAD_TIMEOUT_MS, "Timed out downloading resource", abort);
    }
    const deadline = Date.now() + DOWNLOAD_TIMEOUT_MS;
    const chunks = [];
    for (; ; ) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        abort();
        throw new Error("Timed out downloading resource");
      }
      const { done, value } = await withTimeout(reader.read(), Math.min(DOWNLOAD_STALL_MS, remaining), "Download stalled", abort);
      if (done)
        break;
      if (value)
        chunks.push(value);
    }
    const type = response.headers?.get?.("content-type") || "";
    return new Blob(chunks, { type });
  }
  /**
   * Wait for a loading entry to settle. Resolves with the entry's current
   * status if it is still loading after `max_wait_ms`, so a caller is never
   * pinned to a download that has stopped making progress.
   */
  _finalCacheStatus(cache_item, max_wait_ms = DOWNLOAD_WAIT_MS) {
    if (!isLoadingStatus(cache_item.status)) {
      return Promise.resolve(cache_item.status);
    }
    return firstValueFrom(cache_item.on_change.pipe(filter(isFinalStatus), timeout({
      first: Math.max(0, max_wait_ms),
      with: () => of(cache_item.status)
    })));
  }
  async _storeFile(cache_item, file, url) {
    try {
      await this._write((store) => store.add({
        name: cache_item.id,
        url: cache_item.url,
        owner: cache_item.owner || "",
        owners: cacheOwners(cache_item),
        file
      }), "add");
    } catch (e) {
      log2.error(`Error caching resource. ${e}`, url);
      throw e;
    }
  }
  /**
   * Whether the file behind a cache entry is still in the store. Uses a key
   * count rather than reading the record, so confirming a cached playlist
   * does not pull every one of its files into memory.
   */
  async _hasStoredFile(cache_item, url) {
    if (!(cache_item.size > 0)) {
      const file = await this._storedFile(cache_item, url).catch(() => null);
      if (file)
        this._setCachedSize(cache_item, file.size);
      return !!file;
    }
    const exists = await this._storedFileExists(cache_item.id).catch(() => false);
    if (!exists) {
      this._markMissing(cache_item, url);
      return false;
    }
    this._unverified_ids.delete(cache_item.id);
    return true;
  }
  async _storedFileExists(id) {
    const count = await this._read((store) => store.count(id), "count");
    return (count || 0) > 0;
  }
  _setCachedSize(cache_item, size) {
    if (cache_item.size === size)
      return;
    cache_item.size = size;
    this._file_cache_index.set([...this._cache_index]);
  }
  /** Fill in sizes for entries whose metadata predates size tracking */
  async _recoverCachedSizes() {
    const records = await this._storedFileRecords().catch(() => []);
    if (!records.length)
      return;
    let changed = false;
    for (const item of this._cache_index) {
      if (item.size > 0)
        continue;
      const record = records.find((_) => _.name === item.id);
      if (!record?.file?.size)
        continue;
      item.size = record.file.size;
      changed = true;
    }
    if (changed)
      this._file_cache_index.set([...this._cache_index]);
  }
  async _storedFile(cache_item, url) {
    let record;
    try {
      record = await this._read((store) => store.get(cache_item.id), "get");
    } catch (e) {
      log2.error(`Error retrieving cached resource. ${e}`, url);
      throw e;
    }
    if (!record) {
      this._markMissing(cache_item, url);
      return null;
    }
    const file = record.file;
    if (!(file?.size > 0)) {
      log2.warn(`Cached resource is empty. It will be downloaded again.`, url);
      this._markInvalidated(cache_item);
      return null;
    }
    this._unverified_ids.delete(cache_item.id);
    return file;
  }
  /**
   * Rebuild the cached entries from what the store actually holds. The store
   * is authoritative: persisted metadata is only a head start until it has
   * answered, and any entry it does not hold is dropped so nothing keeps
   * looking for a file that is not there.
   */
  async _loadCacheMetadataFromStore() {
    const records = await this._storedFileRecords().catch(() => null);
    if (!records)
      return;
    const stored_items = records.filter((record) => record.url && record.file?.size > 0).map((record) => ({
      id: record.name,
      url: record.url,
      owner: record.owner || "",
      owners: cacheOwners(record),
      size: record.file.size,
      status: "cached",
      on_change: new Subject()
    }));
    const stored_ids = new Set(stored_items.map((_) => _.id));
    const kept_items = this._cache_index.filter((item) => item.status !== "cached" || stored_ids.has(item.id) || !this._unverified_ids.has(item.id));
    const dropped = this._cache_index.length - kept_items.length;
    if (dropped > 0) {
      log2.warn(`Dropped ${dropped} cached entries that have no stored file.`);
    }
    this._unverified_ids.clear();
    this._file_cache_index.set([
      ...kept_items,
      ...stored_items.filter((stored) => !kept_items.some((item) => item.id === stored.id || item.url === stored.url))
    ]);
  }
  _storedFileRecords() {
    return this._read((store) => store.getAll(), "getAll").then((records) => records || []).catch((e) => {
      log2.error(`Error retrieving cached resources. ${e}`);
      throw e;
    });
  }
  _markMissing(cache_item, url) {
    log2.warn(`Cached resource is missing from storage. It will be downloaded again.`, url);
    this._markInvalidated(cache_item);
  }
  _markInvalidated(cache_item) {
    cacheStatus(cache_item, "invalidated");
    this._unverified_ids.delete(cache_item.id);
    this._file_cache_index.set([...this._cache_index]);
  }
  _loadCacheMetadata() {
    log2.debug("Loading cache metadata...");
    const metadata_string = localStorage.getItem(STORE_KEY) || "[]";
    try {
      const metadata = JSON.parse(metadata_string);
      if (metadata instanceof Array) {
        const items = [];
        for (const _ of metadata) {
          if (!_?.id || !_.url)
            continue;
          if (items.some((item) => item.url === _.url))
            continue;
          items.push({
            id: _.id,
            url: _.url,
            owner: _.owner || "",
            owners: _.owners || (_.owner ? [_.owner] : []),
            size: _.size || 0,
            status: "cached",
            on_change: new Subject()
          });
          this._unverified_ids.add(_.id);
        }
        this._file_cache_index.set(items);
      }
    } catch {
    }
  }
  _saveCacheMetadata() {
    this.timeout("save_metadata", () => {
      log2.debug("Saving cache metadata...");
      const metadata = this._cache_index.filter((_) => _.status === "cached").map((_) => ({
        id: _.id,
        url: _.url,
        owner: cacheOwners(_)[0] || "",
        owners: cacheOwners(_),
        size: _.size || 0
      }));
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(metadata));
      } catch (e) {
        log2.warn(`Unable to save cache metadata. ${e}`);
      }
    });
  }
  async _addOwner(cache_item, owner = "") {
    if (!owner || cacheOwners(cache_item).includes(owner))
      return;
    cache_item.owner = cache_item.owner || owner;
    cache_item.owners = [...cacheOwners(cache_item), owner];
    this._file_cache_index.set([...this._cache_index]);
    await this._updateStoredOwners(cache_item).catch((e) => log2.warn(`Unable to update owners of cached resource. ${e}`));
  }
  async _updateStoredOwners(cache_item) {
    const record = await this._read((store) => store.get(cache_item.id), "get");
    if (!record)
      return;
    await this._write((store) => store.put(__spreadProps(__spreadValues({}, record), {
      owner: cacheOwners(cache_item)[0] || "",
      owners: cacheOwners(cache_item)
    })), "put");
  }
  // ---- Database connection -------------------------------------------
  _connectDatabase() {
    this._cache_db_ready = this._openDatabase();
    this._cache_db_ready.then(() => this._loadCacheMetadataFromStore()).catch((e) => log2.error(`Media database unavailable. ${e}`));
  }
  /**
   * Open the database, recreating it if it cannot be opened. A database that
   * refuses to open is no use to anyone; the files it held are downloaded
   * again into the replacement.
   */
  _openDatabase(recreate_on_error = true) {
    return new Promise((resolve, reject) => {
      let request;
      try {
        request = indexedDB.open(DB_NAME, DB_VERSION);
      } catch (e) {
        log2.error(`DB Error: ${e}.`);
        return reject(e);
      }
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(DB_STORE)) {
          db.createObjectStore(DB_STORE, { keyPath: "name" });
          log2.debug(`Object store created successfully.`);
        }
      };
      request.onblocked = () => log2.warn(`Database open is blocked by another connection.`);
      request.onerror = (event) => {
        const error = event.target?.error;
        log2.error(`DB Error: ${error}.`);
        if (!recreate_on_error)
          return reject(error);
        log2.warn(`Recreating the media database.`);
        this._deleteDatabase().then(() => this._openDatabase(false)).then(resolve, reject);
      };
      request.onsuccess = (event) => {
        const db = event.target.result;
        db.onversionchange = () => {
          try {
            db.close();
          } catch {
          }
          this._reconnect("version change");
        };
        db.onclose = () => this._reconnect("connection closed");
        this._cache_db = db;
        log2.debug(`Connected to database successfully.`);
        resolve();
      };
    });
  }
  _deleteDatabase() {
    return new Promise((resolve) => {
      try {
        const request = indexedDB.deleteDatabase(DB_NAME);
        request.onsuccess = () => resolve();
        request.onerror = () => resolve();
        request.onblocked = () => resolve();
      } catch {
        resolve();
      }
    });
  }
  /** Reopen the database connection, at most once every so often */
  _reconnect(reason) {
    const now = Date.now();
    if (now - this._last_reconnect < DB_RECONNECT_INTERVAL_MS)
      return;
    this._last_reconnect = now;
    log2.warn(`Reconnecting to the media database: ${reason}.`);
    try {
      this._cache_db?.close();
    } catch {
    }
    this._cache_db = void 0;
    this._connectDatabase();
  }
  /** The open database, reconnecting if the last attempt to open it failed */
  async _database() {
    try {
      await this._cache_db_ready;
    } catch (e) {
      this._reconnect("previous open failed");
      throw e;
    }
    if (!this._cache_db)
      throw new Error("Cache DB not connected");
    return this._cache_db;
  }
  async _transaction(mode) {
    const db = await this._database();
    try {
      return db.transaction([DB_STORE], mode);
    } catch (e) {
      this._reconnect(`transaction failed (${e})`);
      throw e;
    }
  }
  /** Run a read request and resolve with its result */
  async _read(run, label) {
    const transaction = await this._transaction("readonly");
    return withTimeout(new Promise((resolve, reject) => {
      const request = run(transaction.objectStore(DB_STORE));
      request.onerror = (event) => reject(event.target?.error || new Error(`${label} failed`));
      request.onsuccess = () => resolve(request.result);
    }), DB_OPERATION_TIMEOUT_MS, `Database ${label} timed out`);
  }
  /** Run a write request and resolve once its transaction has committed */
  async _write(run, label) {
    const transaction = await this._transaction("readwrite");
    return withTimeout(new Promise((resolve, reject) => {
      const fail = (event) => reject(event.target?.error || new Error(`${label} failed`));
      const request = run(transaction.objectStore(DB_STORE));
      request.onerror = fail;
      transaction.onerror = fail;
      transaction.onabort = fail;
      transaction.oncomplete = () => resolve();
    }), DB_OPERATION_TIMEOUT_MS, `Database ${label} timed out`, () => {
      try {
        transaction.abort();
      } catch {
      }
    });
  }
  static {
    this.\u0275fac = function MediaCacheService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaCacheService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaCacheService, factory: _MediaCacheService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaCacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/signage/src/app/debug-overlay.component.ts
var _c02 = ["*"];
function DebugOverlayComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("pointerdown", function DebugOverlayComponent_Conditional_3_Template_button_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startOriginDrag($event));
    })("pointermove", function DebugOverlayComponent_Conditional_3_Template_button_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveOriginDrag($event));
    })("pointerup", function DebugOverlayComponent_Conditional_3_Template_button_pointerup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.finishOriginDrag($event));
    })("pointercancel", function DebugOverlayComponent_Conditional_3_Template_button_pointercancel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.finishOriginDrag($event));
    });
    \u0275\u0275element(1, "span", 3)(2, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("pointerdown", function DebugOverlayComponent_Conditional_3_Template_button_pointerdown_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopEvent($event));
    })("click", function DebugOverlayComponent_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMinimized(true));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "visibility_off");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.origin().x * 100, "%")("top", ctx_r1.origin().y * 100, "%");
    \u0275\u0275attribute("aria-label", "Move " + ctx_r1.label() + " origin");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("top-full", ctx_r1.position().y < 0.5)("mt-2", ctx_r1.position().y < 0.5)("bottom-full", ctx_r1.position().y >= 0.5)("mb-2", ctx_r1.position().y >= 0.5);
    \u0275\u0275attribute("aria-label", "Hide " + ctx_r1.label());
  }
}
function DebugOverlayComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("pointerdown", function DebugOverlayComponent_Conditional_4_Template_button_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startDrag($event));
    })("pointermove", function DebugOverlayComponent_Conditional_4_Template_button_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveDrag($event));
    })("pointerup", function DebugOverlayComponent_Conditional_4_Template_button_pointerup_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.finishDrag($event));
    })("pointercancel", function DebugOverlayComponent_Conditional_4_Template_button_pointercancel_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.finishDrag($event));
    })("click", function DebugOverlayComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.restore());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "Show " + ctx_r1.label());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.icon());
  }
}
var STORAGE_PREFIX = "SIGNAGE.debug-overlay.";
var DEFAULT_GRID_SIZE = 20;
var LAPTOP_GRID_SIZE = 40;
var LAPTOP_MIN_WIDTH = 1024;
function clearDebugOverlayLayouts() {
  for (let index = localStorage.length - 1; index >= 0; index--) {
    const key = localStorage.key(index);
    if (key?.startsWith(STORAGE_PREFIX))
      localStorage.removeItem(key);
  }
}
function clamp(value) {
  return Math.min(1, Math.max(0, value));
}
function isPosition(value) {
  if (!value || typeof value !== "object")
    return false;
  const position = value;
  return Number.isFinite(position.x) && Number.isFinite(position.y);
}
function isDebugOverlayState(value) {
  if (!value || typeof value !== "object")
    return false;
  const state = value;
  return typeof state.minimized === "boolean" && isPosition(state.position) && (state.origin === void 0 || isPosition(state.origin));
}
function snapToGrid(value) {
  const grid_size = window.innerWidth >= LAPTOP_MIN_WIDTH ? LAPTOP_GRID_SIZE : DEFAULT_GRID_SIZE;
  return Math.round(value * grid_size) / grid_size;
}
var DebugOverlayComponent = class _DebugOverlayComponent {
  constructor() {
    this._element = inject(ElementRef);
    this._drag_state = null;
    this._origin_drag_state = null;
    this._ignore_restore_click = false;
    this.overlay_id = input.required(
      ...ngDevMode ? [{ debugName: "overlay_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input.required(
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = input(
      "widgets",
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editing = input(
      false,
      ...ngDevMode ? [{ debugName: "editing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reset_count = input(
      0,
      ...ngDevMode ? [{ debugName: "reset_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initial_position = input(
      {
        x: 0,
        y: 0
      },
      ...ngDevMode ? [{ debugName: "initial_position" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minimized = signal(
      false,
      ...ngDevMode ? [{ debugName: "minimized" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.origin = signal(
      { x: 0, y: 0 },
      ...ngDevMode ? [{ debugName: "origin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.position = signal(
      { x: 0, y: 0 },
      ...ngDevMode ? [{ debugName: "position" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._resetState();
    const stored_state = this._storedState();
    if (!stored_state)
      return;
    this.position.set({
      x: clamp(stored_state.position.x),
      y: clamp(stored_state.position.y)
    });
    const stored_origin = stored_state.origin || stored_state.position;
    this.origin.set({
      x: clamp(stored_origin.x),
      y: clamp(stored_origin.y)
    });
    this.minimized.set(stored_state.minimized);
  }
  ngOnChanges(changes) {
    if (changes["reset_count"] && !changes["reset_count"].firstChange) {
      this.resetLayout();
    }
  }
  resetLayout() {
    this._resetState();
    localStorage.removeItem(`${STORAGE_PREFIX}${this.overlay_id()}`);
  }
  _resetState() {
    const initial_position = this.initial_position();
    this.position.set({
      x: clamp(initial_position.x),
      y: clamp(initial_position.y)
    });
    this.origin.set({
      x: clamp(initial_position.x),
      y: clamp(initial_position.y)
    });
    this.minimized.set(false);
  }
  positionTransform() {
    const { x, y } = this.origin();
    return `translate(${-x * 100}%, ${-y * 100}%)`;
  }
  setMinimized(minimized) {
    this.minimized.set(minimized);
    this._storeState();
  }
  restore() {
    if (this._ignore_restore_click) {
      this._ignore_restore_click = false;
      return;
    }
    this.setMinimized(false);
  }
  startDrag(event) {
    if (!this.editing() || event.button !== 0)
      return;
    const host = this._element.nativeElement;
    const parent = host.parentElement;
    if (!parent)
      return;
    const parent_bounds = parent.getBoundingClientRect();
    const host_bounds = host.getBoundingClientRect();
    this._drag_state = {
      pointer_id: event.pointerId,
      start_x: event.clientX,
      start_y: event.clientY,
      start_position: this.position(),
      parent_width: Math.max(1, parent_bounds.width),
      parent_height: Math.max(1, parent_bounds.height),
      host_width: host_bounds.width,
      host_height: host_bounds.height,
      moved: false,
      restores_on_click: this.minimized()
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }
  stopEvent(event) {
    event.stopPropagation();
  }
  moveDrag(event) {
    const drag_state = this._drag_state;
    if (!drag_state || drag_state.pointer_id !== event.pointerId)
      return;
    const delta_x = event.clientX - drag_state.start_x;
    const delta_y = event.clientY - drag_state.start_y;
    drag_state.moved ||= Math.abs(delta_x) > 2 || Math.abs(delta_y) > 2;
    let position = {
      x: drag_state.start_position.x + delta_x / drag_state.parent_width,
      y: drag_state.start_position.y + delta_y / drag_state.parent_height
    };
    if (event.shiftKey) {
      position = {
        x: snapToGrid(position.x),
        y: snapToGrid(position.y)
      };
    }
    this.position.set(this._constrainPosition(position, drag_state));
  }
  finishDrag(event) {
    const drag_state = this._drag_state;
    if (!drag_state || drag_state.pointer_id !== event.pointerId)
      return;
    if (drag_state.moved)
      this._storeState();
    this._ignore_restore_click = drag_state.moved && drag_state.restores_on_click;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    this._drag_state = null;
  }
  startOriginDrag(event) {
    if (!this.editing() || event.button !== 0)
      return;
    const host = this._element.nativeElement;
    const parent = host.parentElement;
    if (!parent)
      return;
    const parent_bounds = parent.getBoundingClientRect();
    const host_bounds = host.getBoundingClientRect();
    this._origin_drag_state = {
      pointer_id: event.pointerId,
      parent_left: parent_bounds.left,
      parent_top: parent_bounds.top,
      parent_width: Math.max(1, parent_bounds.width),
      parent_height: Math.max(1, parent_bounds.height),
      host_left: host_bounds.left - parent_bounds.left,
      host_top: host_bounds.top - parent_bounds.top,
      host_width: Math.max(1, host_bounds.width),
      host_height: Math.max(1, host_bounds.height),
      moved: false
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.stopPropagation();
    event.preventDefault();
  }
  moveOriginDrag(event) {
    const drag_state = this._origin_drag_state;
    if (!drag_state || drag_state.pointer_id !== event.pointerId)
      return;
    let position = {
      x: (event.clientX - drag_state.parent_left) / drag_state.parent_width,
      y: (event.clientY - drag_state.parent_top) / drag_state.parent_height
    };
    if (event.shiftKey) {
      position = {
        x: snapToGrid(position.x),
        y: snapToGrid(position.y)
      };
    }
    const origin = {
      x: clamp((position.x * drag_state.parent_width - drag_state.host_left) / drag_state.host_width),
      y: clamp((position.y * drag_state.parent_height - drag_state.host_top) / drag_state.host_height)
    };
    drag_state.moved ||= Math.abs(origin.x - this.origin().x) > 2e-3 || Math.abs(origin.y - this.origin().y) > 2e-3;
    this.origin.set(origin);
    this.position.set({
      x: clamp((drag_state.host_left + origin.x * drag_state.host_width) / drag_state.parent_width),
      y: clamp((drag_state.host_top + origin.y * drag_state.host_height) / drag_state.parent_height)
    });
    event.stopPropagation();
  }
  finishOriginDrag(event) {
    const drag_state = this._origin_drag_state;
    if (!drag_state || drag_state.pointer_id !== event.pointerId)
      return;
    if (drag_state.moved)
      this._storeState();
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    this._origin_drag_state = null;
    event.stopPropagation();
  }
  _storedState() {
    const stored_state = localStorage.getItem(`${STORAGE_PREFIX}${this.overlay_id()}`);
    if (!stored_state)
      return null;
    try {
      const state = JSON.parse(stored_state);
      return isDebugOverlayState(state) ? state : null;
    } catch {
      return null;
    }
  }
  _storeState() {
    localStorage.setItem(`${STORAGE_PREFIX}${this.overlay_id()}`, JSON.stringify({
      minimized: this.minimized(),
      origin: this.origin(),
      position: this.position()
    }));
  }
  _constrainPosition(position, bounds) {
    const origin = this.origin();
    const min_x = origin.x * bounds.host_width / bounds.parent_width;
    const max_x = 1 - (1 - origin.x) * bounds.host_width / bounds.parent_width;
    const min_y = origin.y * bounds.host_height / bounds.parent_height;
    const max_y = 1 - (1 - origin.y) * bounds.host_height / bounds.parent_height;
    return {
      x: Math.min(max_x, Math.max(min_x, position.x)),
      y: Math.min(max_y, Math.max(min_y, position.y))
    };
  }
  static {
    this.\u0275fac = function DebugOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DebugOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugOverlayComponent, selectors: [["debug-overlay"]], hostVars: 7, hostBindings: function DebugOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-overlay-id", ctx.overlay_id());
        \u0275\u0275styleProp("left", ctx.position().x * 100, "%")("top", ctx.position().y * 100, "%")("transform", ctx.positionTransform());
      }
    }, inputs: { overlay_id: [1, "overlay_id"], label: [1, "label"], icon: [1, "icon"], editing: [1, "editing"], reset_count: [1, "reset_count"], initial_position: [1, "initial_position"] }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c02, decls: 5, vars: 22, consts: [[1, "relative", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], ["type", "button", "icon", "", "default", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "cursor-move", "touch-none", "rounded-full", "border", "shadow-sm"], ["type", "button", 1, "border-primary", "bg-base-100", "absolute", "z-20", "h-5", "w-5", "-translate-x-1/2", "-translate-y-1/2", "touch-none", "rounded-full", "border-2", "p-0", "shadow-sm", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], [1, "bg-primary", "absolute", "top-1/2", "left-0", "h-0.5", "w-full", "-translate-y-1/2"], [1, "bg-primary", "absolute", "top-0", "left-1/2", "h-full", "w-0.5", "-translate-x-1/2"], ["type", "button", "icon", "", "default", "", "matRipple", "", 1, "absolute", "right-0", "z-30", "text-xs", 3, "pointerdown", "click"], ["type", "button", "icon", "", "default", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "cursor-move", "touch-none", "rounded-full", "border", "shadow-sm", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "click"]], template: function DebugOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("pointerdown", function DebugOverlayComponent_Template_div_pointerdown_0_listener($event) {
          return ctx.startDrag($event);
        })("pointermove", function DebugOverlayComponent_Template_div_pointermove_0_listener($event) {
          return ctx.moveDrag($event);
        })("pointerup", function DebugOverlayComponent_Template_div_pointerup_0_listener($event) {
          return ctx.finishDrag($event);
        })("pointercancel", function DebugOverlayComponent_Template_div_pointercancel_0_listener($event) {
          return ctx.finishDrag($event);
        });
        \u0275\u0275elementStart(1, "div");
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, DebugOverlayComponent_Conditional_3_Template, 6, 14);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, DebugOverlayComponent_Conditional_4_Template, 3, 2, "button", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("hidden", ctx.minimized())("cursor-move", ctx.editing())("touch-none", ctx.editing())("outline", ctx.editing())("outline-2", ctx.editing())("outline-primary", ctx.editing())("outline-offset-2", ctx.editing());
        \u0275\u0275attribute("aria-label", ctx.editing() ? "Move " + ctx.label() : null);
        \u0275\u0275advance();
        \u0275\u0275classProp("pointer-events-none", ctx.editing())("opacity-80", ctx.editing());
        \u0275\u0275attribute("inert", ctx.editing() ? "" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.editing() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.editing() && ctx.minimized() ? 4 : -1);
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 20;\n}\n/*# sourceMappingURL=debug-overlay.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugOverlayComponent, [{
    type: Component,
    args: [{ selector: "debug-overlay", host: {
      "[attr.data-overlay-id]": "overlay_id()",
      "[style.left.%]": "position().x * 100",
      "[style.top.%]": "position().y * 100",
      "[style.transform]": "positionTransform()"
    }, template: `
        <div
            [class.hidden]="minimized()"
            [class.cursor-move]="editing()"
            [class.touch-none]="editing()"
            [class.outline]="editing()"
            [class.outline-2]="editing()"
            [class.outline-primary]="editing()"
            [class.outline-offset-2]="editing()"
            class="relative"
            [attr.aria-label]="editing() ? 'Move ' + label() : null"
            (pointerdown)="startDrag($event)"
            (pointermove)="moveDrag($event)"
            (pointerup)="finishDrag($event)"
            (pointercancel)="finishDrag($event)"
        >
            <div
                [class.pointer-events-none]="editing()"
                [class.opacity-80]="editing()"
                [attr.inert]="editing() ? '' : null"
            >
                <ng-content />
            </div>
            @if (editing()) {
                <button
                    type="button"
                    class="border-primary bg-base-100 absolute z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 touch-none rounded-full border-2 p-0 shadow-sm"
                    [style.left.%]="origin().x * 100"
                    [style.top.%]="origin().y * 100"
                    (pointerdown)="startOriginDrag($event)"
                    (pointermove)="moveOriginDrag($event)"
                    (pointerup)="finishOriginDrag($event)"
                    (pointercancel)="finishOriginDrag($event)"
                    [attr.aria-label]="'Move ' + label() + ' origin'"
                >
                    <span
                        class="bg-primary absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2"
                    ></span>
                    <span
                        class="bg-primary absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2"
                    ></span>
                </button>
                <button
                    type="button"
                    icon
                    default
                    matRipple
                    class="absolute right-0 z-30 text-xs"
                    [class.top-full]="position().y < 0.5"
                    [class.mt-2]="position().y < 0.5"
                    [class.bottom-full]="position().y >= 0.5"
                    [class.mb-2]="position().y >= 0.5"
                    (pointerdown)="stopEvent($event)"
                    (click)="setMinimized(true)"
                    [attr.aria-label]="'Hide ' + label()"
                >
                    <icon>visibility_off</icon>
                </button>
            }
        </div>
        @if (editing() && minimized()) {
            <button
                type="button"
                icon
                default
                matRipple
                class="border-base-300 bg-base-100 cursor-move touch-none rounded-full border shadow-sm"
                (pointerdown)="startDrag($event)"
                (pointermove)="moveDrag($event)"
                (pointerup)="finishDrag($event)"
                (pointercancel)="finishDrag($event)"
                (click)="restore()"
                [attr.aria-label]="'Show ' + label()"
            >
                <icon>{{ icon() }}</icon>
            </button>
        }
    `, imports: [IconComponent, MatRippleModule], styles: ["/* angular:styles/component:css;a5a6d0b1549e8d049652c9d7c4368abeb56c4939fa970b44fdd1767039101e6d;/home/runner/work/user-interfaces/user-interfaces/apps/signage/src/app/debug-overlay.component.ts */\n:host {\n  display: block;\n  position: absolute;\n  z-index: 20;\n}\n/*# sourceMappingURL=debug-overlay.component.css.map */\n"] }]
  }], null, { overlay_id: [{ type: Input, args: [{ isSignal: true, alias: "overlay_id", required: true }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], editing: [{ type: Input, args: [{ isSignal: true, alias: "editing", required: false }] }], reset_count: [{ type: Input, args: [{ isSignal: true, alias: "reset_count", required: false }] }], initial_position: [{ type: Input, args: [{ isSignal: true, alias: "initial_position", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugOverlayComponent, { className: "DebugOverlayComponent", filePath: "apps/signage/src/app/debug-overlay.component.ts", lineNumber: 190 });
})();

// apps/signage/src/app/media-helpers.ts
var _time_override = 0;
var _time_anchor = null;
var _time_speed = 0;
function setMockTime(date, speed = 0) {
  _time_override = date;
  _time_anchor = date ? Date.now() : null;
  _time_speed = typeof speed === "boolean" ? speed ? 1 : 0 : speed;
  if (!date)
    _time_speed = 0;
}
function time() {
  const offset = _time_anchor !== null ? (Date.now() - _time_anchor) * _time_speed : 0;
  return (_time_override || Date.now()) + offset;
}
function mockTimeState() {
  return {
    active: !!_time_override,
    speed: _time_override ? _time_speed : 1,
    time: time()
  };
}
function validateMedia(item) {
  if (!item)
    return "Invalid media: missing media data.";
  if (!item.id)
    return "Invalid media: missing media ID.";
  const now = time();
  if (item.valid_from && item.valid_from * 1e3 > now) {
    const source = validitySourceLabel(item.validity?.valid_from_source);
    return `${source} not valid yet. Starts at ${formatMediaTime(item.valid_from)}. Current player time is ${formatMediaTime(now / 1e3)}.`;
  }
  if (item.valid_until && item.valid_until * 1e3 < now) {
    const source = validitySourceLabel(item.validity?.valid_until_source);
    return `${source} expired. Ended at ${formatMediaTime(item.valid_until)}. Current player time is ${formatMediaTime(now / 1e3)}.`;
  }
  return "";
}
function validitySourceLabel(source) {
  if (source === "playlist")
    return "Playlist";
  if (source === "media")
    return "Media item";
  if (source === "playlist_media")
    return "Playlist and media item";
  return "Media";
}
function formatMediaTime(seconds) {
  return new Intl.DateTimeFormat(void 0, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(seconds * 1e3));
}
function findValidPlaylistIndex(playlist, start_index, step, include_start = false) {
  if (!playlist?.length)
    return -1;
  let index = start_index;
  let checked = 0;
  while (checked < playlist.length) {
    if ((include_start || checked > 0) && validateMedia(playlist[index]) === "") {
      return index;
    }
    index = (index + step + playlist.length) % playlist.length;
    checked += 1;
  }
  return -1;
}

// apps/signage/src/app/media-controls.component.ts
var _c03 = ["bar"];
var _c1 = (a0) => ({ state: a0 });
function MediaControlsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function MediaControlsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24);
  }
}
var MediaProgressBarComponent = class _MediaProgressBarComponent {
  constructor() {
    this.progress = input(
      0,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playback_start = input(
      0,
      ...ngDevMode ? [{ debugName: "playback_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playback_duration = input(
      0,
      ...ngDevMode ? [{ debugName: "playback_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = input(
      "PAUSED",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.waiting = input(
      false,
      ...ngDevMode ? [{ debugName: "waiting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bar = viewChild(
      "bar",
      ...ngDevMode ? [{ debugName: "_bar" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._animation_frame = 0;
    this._destroyed = false;
    this._updateProgress = () => {
      if (this._destroyed)
        return;
      const progress = Math.min(100, Math.max(0, this._progress()));
      const bar = this._bar()?.nativeElement;
      if (bar)
        bar.style.transform = `scaleX(${progress / 100})`;
      let synchronous_frame = true;
      this._animation_frame = requestAnimationFrame(() => {
        if (!synchronous_frame)
          this._updateProgress();
      });
      synchronous_frame = false;
    };
  }
  ngOnInit() {
    this._updateProgress();
  }
  ngOnDestroy() {
    this._destroyed = true;
    cancelAnimationFrame(this._animation_frame);
  }
  _progress() {
    const playback_start = this.playback_start();
    const playback_duration = this.playback_duration();
    if (this.state() === "PLAYING" && playback_start > 0 && playback_duration > 0 && !this.waiting()) {
      return (time() - playback_start) / playback_duration * 100;
    }
    return this.progress() || 0;
  }
  static {
    this.\u0275fac = function MediaProgressBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaProgressBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaProgressBarComponent, selectors: [["media-progress-bar"]], viewQuery: function MediaProgressBarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._bar, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { progress: [1, "progress"], playback_start: [1, "playback_start"], playback_duration: [1, "playback_duration"], state: [1, "state"], waiting: [1, "waiting"] }, decls: 3, vars: 1, consts: [["bar", ""], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "bg-base-300", "relative", "h-1", "overflow-hidden", "rounded-full"], [1, "bg-primary", "absolute", "inset-0", "origin-left"]], template: function MediaProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 1);
        \u0275\u0275domElement(1, "div", 2, 0);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx.progress());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=media-controls.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaProgressBarComponent, [{
    type: Component,
    args: [{ selector: "media-progress-bar", template: `
        <div
            class="bg-base-300 relative h-1 overflow-hidden rounded-full"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            [attr.aria-valuenow]="progress()"
        >
            <div #bar class="bg-primary absolute inset-0 origin-left"></div>
        </div>
    `, styles: ["/* angular:styles/component:css;90c7ea3359a529ac871b05907f35a5977bf5db6008218c40ad219ab280ccfa5d;/home/runner/work/user-interfaces/user-interfaces/apps/signage/src/app/media-controls.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=media-controls.component.css.map */\n"] }]
  }], null, { progress: [{ type: Input, args: [{ isSignal: true, alias: "progress", required: false }] }], playback_start: [{ type: Input, args: [{ isSignal: true, alias: "playback_start", required: false }] }], playback_duration: [{ type: Input, args: [{ isSignal: true, alias: "playback_duration", required: false }] }], state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false }] }], waiting: [{ type: Input, args: [{ isSignal: true, alias: "waiting", required: false }] }], _bar: [{ type: ViewChild, args: ["bar", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaProgressBarComponent, { className: "MediaProgressBarComponent", filePath: "apps/signage/src/app/media-controls.component.ts", lineNumber: 54 });
})();
var MediaControlsComponent = class _MediaControlsComponent {
  constructor() {
    this.animating = model(
      false,
      ...ngDevMode ? [{ debugName: "animating" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = model(
      0,
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress = model(
      0,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playback_start = model(
      0,
      ...ngDevMode ? [{ debugName: "playback_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playback_duration = model(
      0,
      ...ngDevMode ? [{ debugName: "playback_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.muted = model(
      false,
      ...ngDevMode ? [{ debugName: "muted" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = model(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loop = model(
      "NONE",
      ...ngDevMode ? [{ debugName: "loop" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = model(
      "PAUSED",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shuffle = model(
      false,
      ...ngDevMode ? [{ debugName: "shuffle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = output();
  }
  static {
    this.\u0275fac = function MediaControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaControlsComponent, selectors: [["media-controls"]], inputs: { animating: [1, "animating"], duration: [1, "duration"], progress: [1, "progress"], playback_start: [1, "playback_start"], playback_duration: [1, "playback_duration"], muted: [1, "muted"], loading: [1, "loading"], loop: [1, "loop"], state: [1, "state"], shuffle: [1, "shuffle"] }, outputs: { animating: "animatingChange", duration: "durationChange", progress: "progressChange", playback_start: "playback_startChange", playback_duration: "playback_durationChange", muted: "mutedChange", loading: "loadingChange", loop: "loopChange", state: "stateChange", shuffle: "shuffleChange", event: "event" }, decls: 33, vars: 47, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "p-2"], ["matTooltipPosition", "above", 1, "border-base-300", "bg-base-100", "relative", "top-2", "z-20", "w-56", "overflow-hidden", "rounded-full", "border", "px-2", "py-1", 3, "matTooltip"], [3, "progress", "playback_start", "playback_duration", "state", "waiting"], [1, "bg-success", "absolute", "inset-x-2", "inset-y-1", "rounded-full"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "space-x-2", "overflow-hidden", "rounded-full", "border", "p-2", "text-lg"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "relative", 3, "click", "matTooltip"], [1, "absolute", "inset-0", "m-auto", 3, "diameter"]], template: function MediaControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275pipe(2, "mediaDuration");
        \u0275\u0275element(3, "media-progress-bar", 2);
        \u0275\u0275conditionalCreate(4, MediaControlsComponent_Conditional_4_Template, 1, 0, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function MediaControlsComponent_Template_button_click_6_listener() {
          return ctx.event.emit("PREVIOUS");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "skip_previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function MediaControlsComponent_Template_button_click_10_listener() {
          return ctx.event.emit(ctx.state() === "PLAYING" ? "PAUSE" : "PLAY");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, MediaControlsComponent_Conditional_14_Template, 1, 1, "mat-spinner", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 5);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("click", function MediaControlsComponent_Template_button_click_15_listener() {
          return ctx.event.emit("NEXT");
        });
        \u0275\u0275elementStart(17, "icon");
        \u0275\u0275text(18, "skip_next");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 5);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275listener("click", function MediaControlsComponent_Template_button_click_19_listener() {
          return ctx.event.emit("MUTE");
        });
        \u0275\u0275elementStart(22, "icon");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 5);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275listener("click", function MediaControlsComponent_Template_button_click_24_listener() {
          return ctx.event.emit("LOOP");
        });
        \u0275\u0275elementStart(26, "icon");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 5);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275listener("click", function MediaControlsComponent_Template_button_click_28_listener() {
          return ctx.event.emit("SHUFFLE");
        });
        \u0275\u0275elementStart(31, "icon");
        \u0275\u0275text(32, " shuffle ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 23, ctx.duration()));
        \u0275\u0275advance(2);
        \u0275\u0275property("progress", ctx.progress())("playback_start", ctx.playback_start())("playback_duration", ctx.playback_duration())("state", ctx.state())("waiting", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.animating() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 25, "APP.SIGNAGE.PREVIOUS"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 27, ctx.state() === "PLAYING" ? "APP.SIGNAGE.PAUSE" : "APP.SIGNAGE.PLAY"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("opacity-30", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.state() === "PLAYING" ? "pause" : "play_arrow");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 29, "APP.SIGNAGE.NEXT"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(21, 33, "APP.SIGNAGE.VOLUME", \u0275\u0275pureFunction1(43, _c1, \u0275\u0275pipeBind1(20, 31, ctx.muted() ? "COMMON.OFF" : "COMMON.ON"))));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.muted() ? "volume_off" : "volume_up");
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 36, ctx.loop() === "ALL" ? "APP.SIGNAGE.LOOP_ALL" : ctx.loop() === "ONE" ? "APP.SIGNAGE.LOOP_ONE" : "APP.SIGNAGE.LOOP_OFF"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("opacity-30", ctx.loop() === "NONE");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loop() === "ALL" ? "repeat" : ctx.loop() === "ONE" ? "repeat_one" : "repeat", " ");
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(30, 40, "APP.SIGNAGE.SHUFFLE", \u0275\u0275pureFunction1(45, _c1, \u0275\u0275pipeBind1(29, 38, ctx.shuffle() ? "COMMON.ON" : "COMMON.OFF"))));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("opacity-30", !ctx.shuffle());
      }
    }, dependencies: [
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MediaProgressBarComponent,
      TranslatePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaControlsComponent, [{
    type: Component,
    args: [{ selector: "media-controls", template: `
        <div class="flex flex-col items-center justify-center p-2">
            <div
                class="border-base-300 bg-base-100 relative top-2 z-20 w-56 overflow-hidden rounded-full border px-2 py-1"
                [matTooltip]="duration() | mediaDuration"
                matTooltipPosition="above"
            >
                <media-progress-bar
                    [progress]="progress()"
                    [playback_start]="playback_start()"
                    [playback_duration]="playback_duration()"
                    [state]="state()"
                    [waiting]="loading()"
                />
                @if (animating()) {
                    <div
                        class="bg-success absolute inset-x-2 inset-y-1 rounded-full"
                    ></div>
                }
            </div>
            <div
                class="border-base-300 bg-base-100 flex items-center space-x-2 overflow-hidden rounded-full border p-2 text-lg"
            >
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('PREVIOUS')"
                    [matTooltip]="'APP.SIGNAGE.PREVIOUS' | translate"
                >
                    <icon>skip_previous</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200 relative"
                    (click)="
                        event.emit(state() === 'PLAYING' ? 'PAUSE' : 'PLAY')
                    "
                    [matTooltip]="
                        (state() === 'PLAYING'
                            ? 'APP.SIGNAGE.PAUSE'
                            : 'APP.SIGNAGE.PLAY'
                        ) | translate
                    "
                >
                    <icon [class.opacity-30]="loading()">{{
                        state() === 'PLAYING' ? 'pause' : 'play_arrow'
                    }}</icon>
                    @if (loading()) {
                        <mat-spinner
                            class="absolute inset-0 m-auto"
                            [diameter]="24"
                        ></mat-spinner>
                    }
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('NEXT')"
                    [matTooltip]="'APP.SIGNAGE.NEXT' | translate"
                >
                    <icon>skip_next</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('MUTE')"
                    [matTooltip]="
                        'APP.SIGNAGE.VOLUME'
                            | translate
                                : {
                                      state:
                                          (muted() ? 'COMMON.OFF' : 'COMMON.ON')
                                          | translate,
                                  }
                    "
                >
                    <icon>{{ muted() ? 'volume_off' : 'volume_up' }}</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('LOOP')"
                    [matTooltip]="
                        (loop() === 'ALL'
                            ? 'APP.SIGNAGE.LOOP_ALL'
                            : loop() === 'ONE'
                              ? 'APP.SIGNAGE.LOOP_ONE'
                              : 'APP.SIGNAGE.LOOP_OFF'
                        ) | translate
                    "
                >
                    <icon [class.opacity-30]="loop() === 'NONE'">
                        {{
                            loop() === 'ALL'
                                ? 'repeat'
                                : loop() === 'ONE'
                                  ? 'repeat_one'
                                  : 'repeat'
                        }}
                    </icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('SHUFFLE')"
                    [matTooltip]="
                        'APP.SIGNAGE.SHUFFLE'
                            | translate
                                : {
                                      state:
                                          (shuffle()
                                              ? 'COMMON.ON'
                                              : 'COMMON.OFF'
                                          ) | translate,
                                  }
                    "
                >
                    <icon [class.opacity-30]="!shuffle()"> shuffle </icon>
                </button>
            </div>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MediaDurationPipe,
      MediaProgressBarComponent
    ] }]
  }], null, { animating: [{ type: Input, args: [{ isSignal: true, alias: "animating", required: false }] }, { type: Output, args: ["animatingChange"] }], duration: [{ type: Input, args: [{ isSignal: true, alias: "duration", required: false }] }, { type: Output, args: ["durationChange"] }], progress: [{ type: Input, args: [{ isSignal: true, alias: "progress", required: false }] }, { type: Output, args: ["progressChange"] }], playback_start: [{ type: Input, args: [{ isSignal: true, alias: "playback_start", required: false }] }, { type: Output, args: ["playback_startChange"] }], playback_duration: [{ type: Input, args: [{ isSignal: true, alias: "playback_duration", required: false }] }, { type: Output, args: ["playback_durationChange"] }], muted: [{ type: Input, args: [{ isSignal: true, alias: "muted", required: false }] }, { type: Output, args: ["mutedChange"] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }, { type: Output, args: ["loadingChange"] }], loop: [{ type: Input, args: [{ isSignal: true, alias: "loop", required: false }] }, { type: Output, args: ["loopChange"] }], state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false }] }, { type: Output, args: ["stateChange"] }], shuffle: [{ type: Input, args: [{ isSignal: true, alias: "shuffle", required: false }] }, { type: Output, args: ["shuffleChange"] }], event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaControlsComponent, { className: "MediaControlsComponent", filePath: "apps/signage/src/app/media-controls.component.ts", lineNumber: 241 });
})();

// apps/signage/src/app/playlist-display.component.ts
var _c04 = (a0) => ({ count: a0 });
var _c12 = (a0) => ({ data: a0 });
var _forTrack0 = ($index, $item) => $item.id + $index;
function PlaylistDisplayComponent_Conditional_9_ng_template_1_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).data;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.validateMedia(item_r1), " ");
  }
}
function PlaylistDisplayComponent_Conditional_9_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "icon", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "h3", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16);
    \u0275\u0275text(9, " Playlist ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16);
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 16);
    \u0275\u0275text(17, " Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "mediaDuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16);
    \u0275\u0275text(22, " Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 16);
    \u0275\u0275text(26, " Cache ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, PlaylistDisplayComponent_Conditional_9_ng_template_1_Conditional_0_Conditional_29_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const is_valid_r3 = ctx_r1.isValidMedia(item_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mediaTypeIcon(item_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r1.playlist_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r1.type || "unknown", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 18, item_r1.duration / 1e3), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-success", is_valid_r3)("text-error", !is_valid_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", is_valid_r3 ? "Ready" : "Invalid", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-success", ctx_r1.isCachedMedia(item_r1))("text-warning", ctx_r1.isLoadingMedia(item_r1))("text-base-content/60", !ctx_r1.isCachedMedia(item_r1) && !ctx_r1.isLoadingMedia(item_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cacheStatus(item_r1), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!is_valid_r3 ? 29 : -1);
  }
}
function PlaylistDisplayComponent_Conditional_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PlaylistDisplayComponent_Conditional_9_ng_template_1_Conditional_0_Template, 30, 20, "div", 10);
  }
  if (rf & 2) {
    const item_r1 = ctx.data;
    \u0275\u0275conditional(item_r1 ? 0 : -1);
  }
}
function PlaylistDisplayComponent_Conditional_9_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function PlaylistDisplayComponent_Conditional_9_For_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 30);
    \u0275\u0275text(1, "offline_pin");
    \u0275\u0275elementEnd();
  }
}
function PlaylistDisplayComponent_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function PlaylistDisplayComponent_Conditional_9_For_4_Template_button_click_0_listener() {
      const \u0275$index_71_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPlaylistItem(\u0275$index_71_r5));
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "div", 21);
    \u0275\u0275conditionalCreate(3, PlaylistDisplayComponent_Conditional_9_For_4_Conditional_3_Template, 1, 0, "span", 22);
    \u0275\u0275elementStart(4, "icon", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24)(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26)(10, "div", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 28)(13, "div", 29);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, PlaylistDisplayComponent_Conditional_9_For_4_Conditional_16_Template, 2, 0, "icon", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_71_r5 = ctx.$index;
    \u0275\u0275nextContext();
    const item_info_template_r7 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    const is_valid_r8 = ctx_r1.isValidMedia(item_r6);
    \u0275\u0275classProp("overflow-visible", \u0275$index_71_r5 === ctx_r1.index());
    \u0275\u0275property("matRippleDisabled", !is_valid_r8 || \u0275$index_71_r5 === ctx_r1.index());
    \u0275\u0275attribute("aria-disabled", !is_valid_r8 || \u0275$index_71_r5 === ctx_r1.index());
    \u0275\u0275advance();
    \u0275\u0275property("content", item_info_template_r7)("data", \u0275\u0275pureFunction1(27, _c12, item_r6))("hover", true);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", \u0275$index_71_r5 === ctx_r1.index())("text-info-content", \u0275$index_71_r5 === ctx_r1.index())("bg-base-300", \u0275$index_71_r5 !== ctx_r1.index())("bg-error!", !is_valid_r8)("text-error-content!", !is_valid_r8);
    \u0275\u0275advance();
    \u0275\u0275conditional(is_valid_r8 && \u0275$index_71_r5 === ctx_r1.index() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", \u0275$index_71_r5 !== ctx_r1.index());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.mediaTypeIcon(item_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.playlist_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 25, item_r6.duration / 1e3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCachedMedia(item_r6) ? 16 : -1);
  }
}
function PlaylistDisplayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, PlaylistDisplayComponent_Conditional_9_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275repeaterCreate(3, PlaylistDisplayComponent_Conditional_9_For_4_Template, 17, 29, "button", 7, _forTrack0);
    \u0275\u0275elementStart(5, "div", 8)(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.playlist());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 1, "APP.SIGNAGE.MEDIA_LIST_END"), " ");
  }
}
function PlaylistDisplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.SIGNAGE.MEDIA_LIST_EMPTY"), " ");
  }
}
var PlaylistDisplayComponent = class _PlaylistDisplayComponent {
  constructor() {
    this.playlist = input(
      [],
      ...ngDevMode ? [{ debugName: "playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.index = input(
      0,
      ...ngDevMode ? [{ debugName: "index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = output();
    this.validateMedia = (item) => validateMedia(item);
  }
  mediaTypeIcon(item) {
    switch (item.type) {
      case "video":
        return "video_library";
      case "webpage":
        return "http";
      case "plugin":
        return "extension";
      case "image":
        return "image";
      default:
        return "draft";
    }
  }
  isValidMedia(item) {
    return validateMedia(item) === "";
  }
  isCachedMedia(item) {
    return item.isCached?.() || false;
  }
  isLoadingMedia(item) {
    return item.isLoading?.() || false;
  }
  cacheStatus(item) {
    if (this.isLoadingMedia(item))
      return "Caching";
    return this.isCachedMedia(item) ? "Cached" : "Not cached";
  }
  setPlaylistItem(index) {
    const item = this.playlist()[index];
    if (!item || !this.isValidMedia(item) || index === this.index())
      return;
    this.selected.emit(index);
  }
  static {
    this.\u0275fac = function PlaylistDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistDisplayComponent, selectors: [["playlist-display"]], inputs: { playlist: [1, "playlist"], index: [1, "index"] }, outputs: { selected: "selected" }, decls: 11, vars: 11, consts: [["item_info_template", ""], [1, "border-base-300", "bg-base-100", "flex", "min-w-[20rem]", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "flex", "items-center", "space-x-4", "p-2"], [1, "bg-info-light", "rounded-full", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "text-info"], ["data-testid", "playlist-media-list", 1, "flex", "max-h-[50vh]", "flex-col", "overflow-auto"], [1, "flex", "flex-col", "justify-end"], ["matRipple", "", 1, "hover:bg-base-200", "w-[20rem]", "shrink-0", "rounded-lg", "text-left", 3, "overflow-visible", "matRippleDisabled"], [1, "mt-2", "flex", "flex-col", "justify-end"], [1, "bg-base-300", "rounded-lg", "p-2", "text-center", "text-xs", "opacity-30"], [1, "bg-base-100", "text-base-content", "border-base-300", "w-72", "rounded-lg", "border", "p-3", "shadow-xl"], [1, "flex", "items-start", "gap-2"], [1, "text-xl"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "mt-3", "grid", "grid-cols-[auto_1fr]", "gap-x-3", "gap-y-1", "text-xs"], [1, "text-base-content/50"], [1, "capitalize"], [1, "text-error", "bg-error/10", "mt-3", "rounded-sm", "p-2", "text-xs"], ["matRipple", "", 1, "hover:bg-base-200", "w-[20rem]", "shrink-0", "rounded-lg", "text-left", 3, "click", "matRippleDisabled"], ["customTooltip", "", "xPosition", "center", 1, "relative", "flex", "w-full", "items-center", "gap-2", "p-2", 3, "content", "data", "hover"], [1, "relative", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "bg-info", "absolute", "inset-1", "z-0", "animate-ping", "rounded-full", "opacity-75"], [1, "relative", "z-10", "text-xl"], [1, "flex", "w-1/2", "flex-1", "flex-col"], [1, "truncate"], [1, "flex", "items-center", "gap-1", "text-xs"], [1, "text-base-300", "flex-1", "truncate"], [1, "bg-info", "text-info-content", "relative", "mr-4", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "z-10"], ["data-testid", "cached-media-icon", "matTooltip", "Cached", "matTooltipPosition", "right", 1, "text-success", "absolute", "top-1/2", "right-0", "-translate-y-1/2", "text-xl"], [1, "bg-base-300", "rounded-lg", "p-16", "text-center", "text-xs", "opacity-30"]], template: function PlaylistDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, PlaylistDisplayComponent_Conditional_9_Template, 9, 3, "div", 5)(10, PlaylistDisplayComponent_Conditional_10_Template, 4, 3, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "APP.SIGNAGE.MEDIA_LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 5, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(9, _c04, ctx.playlist()?.length || 0), ctx.playlist()?.length || 0), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.playlist().length > 0 ? 9 : 10);
      }
    }, dependencies: [
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      MatRippleModule,
      MatRipple,
      CustomTooltipComponent,
      TranslatePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistDisplayComponent, [{
    type: Component,
    args: [{ selector: "playlist-display", template: `
        <div
            class="border-base-300 bg-base-100 flex min-w-[20rem] flex-col space-y-2 overflow-auto rounded-xl border p-2"
        >
            <div class="flex items-center space-x-4 p-2">
                <h2>{{ 'APP.SIGNAGE.MEDIA_LIST' | translate }}</h2>
                <div
                    class="bg-info-light rounded-full px-2 py-1 text-xs shadow-sm"
                >
                    <div class="text-info">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : { count: playlist()?.length || 0 }
                                    : playlist()?.length || 0
                        }}
                    </div>
                </div>
            </div>
            @if (playlist().length > 0) {
                <div
                    data-testid="playlist-media-list"
                    class="flex max-h-[50vh] flex-col overflow-auto"
                >
                    <ng-template #item_info_template let-item="data">
                        @if (item) {
                            @let is_valid = isValidMedia(item);
                            <div
                                class="bg-base-100 text-base-content border-base-300 w-72 rounded-lg border p-3 shadow-xl"
                            >
                                <div class="flex items-start gap-2">
                                    <icon class="text-xl">{{
                                        mediaTypeIcon(item)
                                    }}</icon>
                                    <div class="min-w-0 flex-1">
                                        <h3 class="truncate font-medium">
                                            {{ item.name }}
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs"
                                >
                                    <div class="text-base-content/50">
                                        Playlist
                                    </div>
                                    <div>
                                        {{ item.playlist_name }}
                                    </div>
                                    <div class="text-base-content/50">Type</div>
                                    <div class="capitalize">
                                        {{ item.type || 'unknown' }}
                                    </div>
                                    <div class="text-base-content/50">
                                        Duration
                                    </div>
                                    <div>
                                        {{
                                            item.duration / 1000 | mediaDuration
                                        }}
                                    </div>
                                    <div class="text-base-content/50">
                                        Status
                                    </div>
                                    <div
                                        [class.text-success]="is_valid"
                                        [class.text-error]="!is_valid"
                                    >
                                        {{ is_valid ? 'Ready' : 'Invalid' }}
                                    </div>
                                    <div class="text-base-content/50">
                                        Cache
                                    </div>
                                    <div
                                        [class.text-success]="
                                            isCachedMedia(item)
                                        "
                                        [class.text-warning]="
                                            isLoadingMedia(item)
                                        "
                                        [class.text-base-content/60]="
                                            !isCachedMedia(item) &&
                                            !isLoadingMedia(item)
                                        "
                                    >
                                        {{ cacheStatus(item) }}
                                    </div>
                                </div>
                                @if (!is_valid) {
                                    <div
                                        class="text-error bg-error/10 mt-3 rounded-sm p-2 text-xs"
                                    >
                                        {{ validateMedia(item) }}
                                    </div>
                                }
                            </div>
                        }
                    </ng-template>
                    @for (
                        item of playlist();
                        track item.id + i;
                        let i = $index
                    ) {
                        @let is_valid = isValidMedia(item);
                        <button
                            matRipple
                            class="hover:bg-base-200 w-[20rem] shrink-0 rounded-lg text-left"
                            [class.overflow-visible]="i === index()"
                            (click)="setPlaylistItem(i)"
                            [attr.aria-disabled]="!is_valid || i === index()"
                            [matRippleDisabled]="!is_valid || i === index()"
                        >
                            <div
                                class="relative flex w-full items-center gap-2 p-2"
                                customTooltip
                                [content]="item_info_template"
                                [data]="{ data: item }"
                                [hover]="true"
                                xPosition="center"
                            >
                                <div
                                    class="relative flex h-8 w-8 items-center justify-center rounded-full"
                                    [class.bg-info]="i === index()"
                                    [class.text-info-content]="i === index()"
                                    [class.bg-base-300]="i !== index()"
                                    [class.bg-error!]="!is_valid"
                                    [class.text-error-content!]="!is_valid"
                                >
                                    @if (is_valid && i === index()) {
                                        <span
                                            class="bg-info absolute inset-1 z-0 animate-ping rounded-full opacity-75"
                                        ></span>
                                    }
                                    <icon
                                        class="relative z-10 text-xl"
                                        [class.opacity-30]="i !== index()"
                                        >{{ mediaTypeIcon(item) }}</icon
                                    >
                                </div>
                                <div class="flex w-1/2 flex-1 flex-col">
                                    <div class="truncate">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="flex items-center gap-1 text-xs"
                                    >
                                        <div
                                            class="text-base-300 flex-1 truncate"
                                        >
                                            {{ item.playlist_name }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="bg-info text-info-content relative mr-4 rounded-sm px-2 py-1 font-mono text-xs"
                                >
                                    <div class="z-10">
                                        {{
                                            item.duration / 1000 | mediaDuration
                                        }}
                                    </div>
                                </div>
                                @if (isCachedMedia(item)) {
                                    <icon
                                        data-testid="cached-media-icon"
                                        class="text-success absolute top-1/2 right-0 -translate-y-1/2 text-xl"
                                        matTooltip="Cached"
                                        matTooltipPosition="right"
                                        >offline_pin</icon
                                    >
                                }
                            </div>
                        </button>
                    }
                    <div class="mt-2 flex flex-col justify-end">
                        <div
                            class="bg-base-300 rounded-lg p-2 text-center text-xs opacity-30"
                        >
                            {{ 'APP.SIGNAGE.MEDIA_LIST_END' | translate }}
                        </div>
                    </div>
                </div>
            } @else {
                <div class="flex flex-col justify-end">
                    <div
                        class="bg-base-300 rounded-lg p-16 text-center text-xs opacity-30"
                    >
                        {{ 'APP.SIGNAGE.MEDIA_LIST_EMPTY' | translate }}
                    </div>
                </div>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      MediaDurationPipe,
      MatRippleModule,
      CustomTooltipComponent
    ] }]
  }], null, { playlist: [{ type: Input, args: [{ isSignal: true, alias: "playlist", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], selected: [{ type: Output, args: ["selected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistDisplayComponent, { className: "PlaylistDisplayComponent", filePath: "apps/signage/src/app/playlist-display.component.ts", lineNumber: 219 });
})();

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function DateCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1?.id, "EE"), " ");
  }
}
function DateCalendarComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateCalendarComponent_For_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, DateCalendarComponent_For_18_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-200", day_r3.id !== ctx_r3.active_date())("text-base-300!", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date())("text-base-content", day_r3.id !== ctx_r3.active_date())("bg-secondary", day_r3.id === ctx_r3.active_date())("font-normal", day_r3.id !== ctx_r3.active_date());
    \u0275\u0275property("disabled", day_r3.id < ctx_r3.from() || day_r3.id > ctx_r3.to());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 3 : -1);
  }
}
var DateCalendarComponent = class _DateCalendarComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.from = input(
      0,
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.to = input(
      Date.now() * 10,
      ...ngDevMode ? [{ debugName: "to" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_weekday = input(
      0,
      ...ngDevMode ? [{ debugName: "offset_weekday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.today = startOfDay(Date.now()).valueOf();
    this.date = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_date = signal(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "active_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "date_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displayed_dates = this.date_list.asReadonly();
    this.display_date = computed(
      () => this.displayed_dates()[6]?.id || this.date(),
      ...ngDevMode ? [{ debugName: "display_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this.generateDates();
    }
  }
  setValue(new_value) {
    if (!isValid(new_value))
      return;
    if (new_value < this.from() || new_value >= this.to())
      return;
    const date = new Date(new_value);
    this.date.set(set(this.date(), {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }).valueOf());
    this.active_date.set(startOfDay(this.date()).valueOf());
    if (this._onChange)
      this._onChange(new_value);
  }
  writeValue(value) {
    const date = this._validDate(value);
    this.date.set(date);
    this.active_date.set(startOfDay(date).valueOf());
    this.offset.set(0);
    this.generateDates();
  }
  changeMonth(change) {
    this.offset.update((value) => value + change);
    this.generateDates();
  }
  setMonthToCurrent() {
    const diff = differenceInMonths(this.date(), startOfMonth(Date.now()));
    this.offset.set(-diff);
    this.generateDates();
  }
  generateDates() {
    const offset = this._settings.signal("week_start", this.offset_weekday())();
    const date = addMonths(this._validDate(this.date()), this.offset());
    let start = startOfWeek(startOfMonth(date), {
      weekStartsOn: this._validWeekday(offset)
    });
    const now = startOfDay(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date)
      });
      start = addDays(start, 1);
    }
    this.date_list.set(list);
  }
  _validDate(date) {
    return isValid(date) ? date : Date.now();
  }
  _validWeekday(day) {
    return Number.isInteger(day) && day >= 0 && day <= 6 ? day : 0;
  }
  static {
    this.\u0275fac = function DateCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: [1, "from"], to: [1, "to"], offset_weekday: [1, "offset_weekday"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DateCalendarComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pr-2", "pl-1.5", "font-medium", 3, "dblclick"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "border-base-200", "mb-2", "flex", "items-center", "border-b", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-200", "text-base-300!", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "border-secondary", "absolute", "-inset-0.5", "z-20", "overflow-hidden", "rounded-full", "border"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("dblclick", function DateCalendarComponent_Template_button_dblclick_2_listener() {
          return ctx.setMonthToCurrent();
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
          return ctx.changeMonth(-1);
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_9_listener() {
          return ctx.changeMonth(1);
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "chevron_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, _forTrack02);
        \u0275\u0275pipe(15, "slice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, _forTrack02);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, ctx.display_date(), "LLLL yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.displayed_dates()[0]?.id < ctx.from());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.displayed_dates()[34]?.id > ctx.to());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 6, ctx.displayed_dates(), 0, 7));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.displayed_dates());
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, SlicePipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    class="pr-2 pl-1.5 font-medium"
                    (dblclick)="setMonthToCurrent()"
                >
                    {{ display_date() | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="displayed_dates()[0]?.id < from()"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="displayed_dates()[34]?.id > to()"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="border-base-200 mb-2 flex items-center border-b pb-2 text-sm"
            >
                @for (day of displayed_dates() | slice: 0 : 7; track day.id) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of displayed_dates(); track day.id) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-200]="day.id !== active_date()"
                        [class.text-base-300!]="!day.is_month"
                        [class.text-secondary-content]="
                            day.id === active_date()
                        "
                        [class.text-base-content]="day.id !== active_date()"
                        [class.bg-secondary]="day.id === active_date()"
                        [class.font-normal]="day.id !== active_date()"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from() || day.id > to()"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="border-secondary absolute -inset-0.5 z-20 overflow-hidden rounded-full border"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateCalendarComponent),
        multi: true
      }
    ], imports: [CommonModule, IconComponent, MatRippleModule] }]
  }], () => [], { from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], offset_weekday: [{ type: Input, args: [{ isSignal: true, alias: "offset_weekday", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "libs/form-fields/src/lib/date-calendar.component.ts", lineNumber: 120 });
})();

// libs/form-fields/src/lib/date-field.component.ts
var _c05 = ["*"];
function DateFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), ctx_r0.date_format()), " ");
  }
}
function DateFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.DATE_EMPTY"));
  }
}
function DateFieldComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.start_of_day());
  }
}
function DateFieldComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.end_of_day());
  }
}
function DateFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, DateFieldComponent_Conditional_6_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, DateFieldComponent_Conditional_6_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_6_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 1 ? 3 : -1);
  }
}
function DateFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateFieldComponent_Conditional_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearValue($event));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.date() === null || ctx_r0.date() === void 0 || ctx_r0.disabled());
    \u0275\u0275attribute("aria-label", "Clear date");
  }
}
function DateFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "date-calendar", 12);
    \u0275\u0275listener("ngModelChange", function DateFieldComponent_ng_template_13_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date() || ctx_r0.now)("from", ctx_r0.from().valueOf())("to", ctx_r0.until().valueOf())("offset_weekday", ctx_r0.week_start());
    \u0275\u0275control();
  }
}
var TimezoneDiffRange;
(function(TimezoneDiffRange2) {
  TimezoneDiffRange2[TimezoneDiffRange2["Both"] = 0] = "Both";
  TimezoneDiffRange2[TimezoneDiffRange2["Start"] = 1] = "Start";
  TimezoneDiffRange2[TimezoneDiffRange2["End"] = 2] = "End";
})(TimezoneDiffRange || (TimezoneDiffRange = {}));
var DateFieldComponent = class _DateFieldComponent extends AsyncHandler {
  get has_error() {
    return this._control?.invalid && this._control?.touched;
  }
  constructor() {
    super();
    this._injector = inject(Injector);
    this.from_date = input(startOfDay(Date.now()).valueOf(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "from_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "from" }));
    this.to_date = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "to_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "to" }));
    this.week_start = input(
      0,
      ...ngDevMode ? [{ debugName: "week_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = input(
      false,
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.short = input(
      false,
      ...ngDevMode ? [{ debugName: "short" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.range = input(
      TimezoneDiffRange.Both,
      ...ngDevMode ? [{ debugName: "range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear = input(
      false,
      ...ngDevMode ? [{ debugName: "clear" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      null,
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = Date.now();
    this.date_format = computed(
      () => this.short() ? "MMM d, yyyy" : "MMMM d, yyyy",
      ...ngDevMode ? [{ debugName: "date_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date_pipe = new DatePipe("en");
    this.start_of_day = computed(
      () => {
        const start = startOfDay(this.date() || Date.now()).valueOf();
        const format = `MMM d, ${this.time_format()}${this.range() === 1 ? " (z)" : ""}`;
        return this._date_pipe.transform(start, format, this.tz());
      },
      ...ngDevMode ? [{ debugName: "start_of_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_of_day = computed(
      () => {
        const end = endOfDay(this.date() || Date.now()).valueOf();
        const format = `MMM d, ${this.time_format()}${this.range() === 1 ? " (z)" : ""}`;
        return this._date_pipe.transform(end, format, this.tz());
      },
      ...ngDevMode ? [{ debugName: "end_of_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.tz = computed(
      () => {
        const tz = this.timezone();
        if (!tz)
          return "";
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? "" : tz_offset;
      },
      ...ngDevMode ? [{ debugName: "tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._tooltip = viewChild(
      CustomTooltipComponent,
      ...ngDevMode ? [{ debugName: "_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.from = computed(
      () => {
        return this.from_date() ? new Date(this.from_date()) : startOfDay(/* @__PURE__ */ new Date());
      },
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.until = computed(
      () => {
        return this.to_date() ? new Date(this.to_date()) : addYears(endOfDay(/* @__PURE__ */ new Date()), 1);
      },
      ...ngDevMode ? [{ debugName: "until" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const timezone = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(this.date() || Date.now(), timezone);
    let new_date = setTimeInTimezone(new_value, hours, minutes, timezone);
    if (timezone) {
      const selected_date = new Date(new_value);
      const zoned_date = toZonedTime(this.date() || Date.now(), timezone);
      new_date = startOfMinute(fromZonedTime(set(zoned_date, {
        year: selected_date.getFullYear(),
        month: selected_date.getMonth(),
        date: selected_date.getDate(),
        hours,
        minutes,
        seconds: 0,
        milliseconds: 0
      }), timezone)).valueOf();
    }
    if (new_date < this.from().valueOf()) {
      new_date = this.from().valueOf();
    }
    this.date.set(new_date);
    markUserDateChange();
    if (this._onChange)
      this._onChange(new_date);
    this._tooltip()?.close();
  }
  clearValue(event) {
    event?.stopPropagation();
    this.date.set(null);
    markUserDateChange();
    if (this._onTouch)
      this._onTouch(null);
    if (this._onChange)
      this._onChange(null);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date.set(value ?? null);
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static {
    this.\u0275fac = function DateFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateFieldComponent, selectors: [["a-date-field"], ["date-field"]], viewQuery: function DateFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], use_24hr: [1, "use_24hr"], disabled: [1, "disabled"], short: [1, "short"], timezone: [1, "timezone"], range: [1, "range"], clear: [1, "clear"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DateFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c05, decls: 15, vars: 8, consts: [["calendar_picker", ""], [1, "flex", "items-center", "gap-1"], ["type", "button", "customTooltip", "", "yPosition", "top", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "flex-1", "items-center", "justify-between", "rounded-sm", "border", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "disabled"], [1, "error", "text-error", "h-5", "p-1", "text-xs"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "click", "disabled"], [1, "bg-base-100", "relative", "w-[18rem]", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275conditionalCreate(4, DateFieldComponent_Conditional_4_Template, 2, 4)(5, DateFieldComponent_Conditional_5_Template, 3, 3, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, DateFieldComponent_Conditional_6_Template, 4, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "icon");
        \u0275\u0275text(9, "today");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, DateFieldComponent_Conditional_10_Template, 3, 2, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275conditionalCreate(12, DateFieldComponent_Conditional_12_Template, 2, 0, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, DateFieldComponent_ng_template_13_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const calendar_picker_r4 = \u0275\u0275reference(14);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-30", ctx.disabled());
        \u0275\u0275property("content", calendar_picker_r4)("disabled", ctx.disabled());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.date() !== null && ctx.date() !== void 0 ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() && ctx.date() !== null && ctx.date() !== void 0 ? 6 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.clear() ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.has_error ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      MatRippleModule,
      MatRipple,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.no-subscript[_nghost-%COMP%]    > .error[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFieldComponent, [{
    type: Component,
    args: [{ selector: "a-date-field,date-field", template: `
        <div class="flex items-center gap-1">
            <button
                type="button"
                class="border-neutral flex h-12 w-full flex-1 items-center justify-between rounded-sm border"
                customTooltip
                [content]="calendar_picker"
                yPosition="top"
                [disabled]="disabled()"
                [class.opacity-30]="disabled()"
                matRipple
            >
                <div
                    class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
                >
                    <div class="text-base font-normal">
                        @if (date() !== null && date() !== undefined) {
                            {{ date() | date: date_format() }}
                        } @else {
                            <span class="opacity-30">{{
                                'FORM.DATE_EMPTY' | translate
                            }}</span>
                        }
                    </div>
                    @if (
                        timezone() &&
                        tz() &&
                        date() !== null &&
                        date() !== undefined
                    ) {
                        <div class="truncate text-xs opacity-30">
                            @if (range() !== 2) {
                                <span>{{ start_of_day() }}</span>
                            }
                            @if (range() === 0) {
                                <span> - </span>
                            }
                            @if (range() !== 1) {
                                <span>{{ end_of_day() }}</span>
                            }
                        </div>
                    }
                </div>
                <div
                    class="flex h-10 w-10 items-center justify-center text-2xl"
                >
                    <icon>today</icon>
                </div>
            </button>
            @if (clear()) {
                <button
                    type="button"
                    icon
                    matRipple
                    class="border-error text-error flex h-12 w-12 items-center justify-center rounded-sm border"
                    (click)="clearValue($event)"
                    [attr.aria-label]="'Clear date'"
                    [disabled]="
                        date() === null || date() === undefined || disabled()
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </div>
        <div class="error text-error h-5 p-1 text-xs">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-[18rem] rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from().valueOf()"
                    [to]="until().valueOf()"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;4616f4926c682fe7ceb0f98ecb8aa0ceeb383c5318a41af3f61a9c0da602fb9b;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/date-field.component.ts */\n:host.no-subscript > .error {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */\n"] }]
  }], () => [], { from_date: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to_date: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], short: [{ type: Input, args: [{ isSignal: true, alias: "short", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], clear: [{ type: Input, args: [{ isSignal: true, alias: "clear", required: false }] }], _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateFieldComponent, { className: "DateFieldComponent", filePath: "libs/form-fields/src/lib/date-field.component.ts", lineNumber: 149 });
})();

// apps/signage/src/app/time-controls.component.ts
function TimeControlsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.speed_label(), " ");
  }
}
function TimeControlsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, " Unsaved ");
    \u0275\u0275elementEnd();
  }
}
function TimeControlsComponent_ng_template_11_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_For_25_Template_button_click_0_listener() {
      const value_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edited_speed.set(value_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-base-100", ctx_r0.edited_speed() === value_r4)("shadow-sm", ctx_r0.edited_speed() === value_r4)("opacity-50", ctx_r0.edited_speed() !== value_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.speedLabel(value_r4), " ");
  }
}
function TimeControlsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h3", 10);
    \u0275\u0275text(4, " Debug Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clear());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete_sweep");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 12);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 14)(17, "a-date-field", 15);
    \u0275\u0275twoWayListener("ngModelChange", function TimeControlsComponent_ng_template_11_Template_a_date_field_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.edited_time, $event) || (ctx_r0.edited_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(18, "mat-form-field", 16)(19, "input", 17);
    \u0275\u0275listener("ngModelChange", function TimeControlsComponent_ng_template_11_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setEditedTime($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "div", 19);
    \u0275\u0275text(22, " Progression ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20);
    \u0275\u0275repeaterCreate(24, TimeControlsComponent_ng_template_11_For_25_Template, 2, 7, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 22)(27, "button", 23);
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.shiftTime(-60));
    });
    \u0275\u0275text(28, " -1h ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 23);
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setNow());
    });
    \u0275\u0275text(30, " Now ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 23);
    \u0275\u0275listener("click", function TimeControlsComponent_ng_template_11_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.shiftTime(60));
    });
    \u0275\u0275text(32, " +1h ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "COMMON.CLEAR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "COMMON.SAVE"));
    \u0275\u0275advance(8);
    \u0275\u0275property("from", 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.edited_time);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.edited_time_value());
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.speed_options);
  }
}
var TimeControlsComponent = class _TimeControlsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edited_time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "edited_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.speed = signal(
      1,
      ...ngDevMode ? [{ debugName: "speed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edited_speed = signal(
      1,
      ...ngDevMode ? [{ debugName: "edited_speed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mock_active = signal(
      false,
      ...ngDevMode ? [{ debugName: "mock_active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.speed_options = [0, 0.5, 1, 2, 4, 8, 16];
    this.edit_started = signal(
      false,
      ...ngDevMode ? [{ debugName: "edit_started" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_base_time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "edit_base_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_base_speed = signal(
      1,
      ...ngDevMode ? [{ debugName: "edit_base_speed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.speed_label = computed(
      () => this.speedLabel(this.speed()),
      ...ngDevMode ? [{ debugName: "speed_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edited_time_value = computed(
      () => this.formatTimeInput(this.edited_time()),
      ...ngDevMode ? [{ debugName: "edited_time_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_changes = computed(
      () => {
        if (!this.edit_started())
          return false;
        return this.edited_time() !== this.edit_base_time() || this.edited_speed() !== this.edit_base_speed();
      },
      ...ngDevMode ? [{ debugName: "has_changes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._tooltip = viewChild(
      CustomTooltipComponent,
      ...ngDevMode ? [{ debugName: "_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = () => this._tooltip()?.close();
  }
  ngOnInit() {
    this.refresh();
    this.interval("poll", () => this.refresh(), 1e3);
  }
  edit() {
    this.refresh();
    this.edited_time.set(this.time());
    this.edited_speed.set(this.speed());
    this.edit_base_time.set(this.time());
    this.edit_base_speed.set(this.speed());
    this.edit_started.set(true);
  }
  setNow() {
    this.edited_time.set(Date.now());
  }
  shiftTime(minutes) {
    this.edited_time.update((value) => value + minutes * 60 * 1e3);
  }
  setEditedTime(value) {
    const [hours, minutes] = value.split(":").map(Number);
    const date = new Date(this.edited_time());
    date.setHours(hours || 0, minutes || 0, 0, 0);
    this.edited_time.set(date.valueOf());
  }
  clear() {
    setMockTime(0);
    this.refresh();
    this.edited_time.set(this.time());
    this.edited_speed.set(1);
    this.edit_base_time.set(this.time());
    this.edit_base_speed.set(1);
    this.edit_started.set(false);
    this._tooltip()?.close();
  }
  save() {
    setMockTime(this.edited_time(), this.edited_speed());
    this.refresh();
    this.edit_base_time.set(this.time());
    this.edit_base_speed.set(this.speed());
    this.edit_started.set(false);
    this._tooltip()?.close();
  }
  speedLabel(value) {
    return `${value}x`;
  }
  formatTimeInput(value) {
    const date = new Date(value);
    const hours = `${date.getHours()}`.padStart(2, "0");
    const minutes = `${date.getMinutes()}`.padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  refresh() {
    const state = mockTimeState();
    this.time.set(state.time);
    this.speed.set(state.speed);
    this.mock_active.set(state.active);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275TimeControlsComponent_BaseFactory;
      return function TimeControlsComponent_Factory(__ngFactoryType__) {
        return (\u0275TimeControlsComponent_BaseFactory || (\u0275TimeControlsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeControlsComponent)))(__ngFactoryType__ || _TimeControlsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeControlsComponent, selectors: [["time-controls"]], viewQuery: function TimeControlsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 17, consts: [["time_template", ""], ["matRipple", "", "customTooltip", "", 1, "border-base-300", "bg-base-100", "flex", "items-center", "space-x-2", "rounded-full", "border", "px-4", "py-2", "shadow-sm", 3, "click", "content"], [1, "pl-2"], [1, "text-base-400", "text-xs"], [1, "bg-info", "text-info-content", "rounded-full", "px-2", "py-0.5", "font-mono", "text-xs"], [1, "bg-warning-content", "text-warning", "rounded-full", "px-2", "py-0.5", "text-xs", "font-medium"], [1, "text-2xl"], [1, "p-2"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "rounded-sm", "border", "p-2", "shadow-sm"], [1, "bg-base-200", "mb-2", "flex", "h-12", "items-center", "gap-2", "rounded-sm", "p-2"], [1, "flex-1", "px-2", "text-lg", "font-medium"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "w-full", "gap-2"], [1, "no-subscript", "w-40", "flex-1", 3, "ngModelChange", "from", "ngModel"], ["appearance", "outline", 1, "no-subscript", "w-40", "flex-1"], ["matInput", "", "type", "time", 3, "ngModelChange", "ngModel"], [1, "my-2"], [1, "mb-1", "px-1", "text-xs", "font-medium", "opacity-60"], [1, "border-base-300", "bg-base-200", "grid", "grid-cols-7", "overflow-hidden", "rounded-sm", "border", "p-1"], ["matRipple", "", 1, "h-9", "rounded-sm", "px-2", "font-mono", "text-sm", 3, "bg-base-100", "shadow-sm", "opacity-50"], [1, "mb-2", "grid", "grid-cols-3", "gap-2"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["matRipple", "", 1, "h-9", "rounded-sm", "px-2", "font-mono", "text-sm", 3, "click"]], template: function TimeControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("click", function TimeControlsComponent_Template_button_click_0_listener() {
          return ctx.edit();
        });
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, TimeControlsComponent_Conditional_7_Template, 2, 1, "div", 4);
        \u0275\u0275conditionalCreate(8, TimeControlsComponent_Conditional_8_Template, 2, 0, "div", 5);
        \u0275\u0275elementStart(9, "icon", 6);
        \u0275\u0275text(10, "event");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, TimeControlsComponent_ng_template_11_Template, 34, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const time_template_r5 = \u0275\u0275reference(12);
        \u0275\u0275classProp("border-warning", ctx.mock_active() || ctx.has_changes())("bg-warning", ctx.has_changes())("text-warning-content", ctx.has_changes());
        \u0275\u0275property("content", time_template_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 11, ctx.time(), "dd MMM, HH:mm"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" : ", \u0275\u0275pipeBind2(6, 14, ctx.time(), "ss"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.mock_active() && ctx.speed() !== 1 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_changes() ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      CustomTooltipComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeControlsComponent, [{
    type: Component,
    args: [{ selector: "time-controls", template: `
        <button
            matRipple
            customTooltip
            [content]="time_template"
            (click)="edit()"
            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-full border px-4 py-2 shadow-sm"
            [class.border-warning]="mock_active() || has_changes()"
            [class.bg-warning]="has_changes()"
            [class.text-warning-content]="has_changes()"
        >
            <div class="pl-2">
                {{ time() | date: 'dd MMM, HH:mm'
                }}<span class="text-base-400 text-xs">
                    : {{ time() | date: 'ss' }}</span
                >
            </div>
            @if (mock_active() && speed() !== 1) {
                <div
                    class="bg-info text-info-content rounded-full px-2 py-0.5 font-mono text-xs"
                >
                    {{ speed_label() }}
                </div>
            }
            @if (has_changes()) {
                <div
                    class="bg-warning-content text-warning rounded-full px-2 py-0.5 text-xs font-medium"
                >
                    Unsaved
                </div>
            }
            <icon class="text-2xl">event</icon>
        </button>
        <ng-template #time_template>
            <div class="p-2">
                <div
                    class="border-base-300 bg-base-100 w-[24rem] rounded-sm border p-2 shadow-sm"
                >
                    <div
                        class="bg-base-200 mb-2 flex h-12 items-center gap-2 rounded-sm p-2"
                    >
                        <h3 class="flex-1 px-2 text-lg font-medium">
                            Debug Time
                        </h3>
                        <button
                            icon
                            default
                            error
                            matRipple
                            (click)="clear()"
                            [matTooltip]="'COMMON.CLEAR' | translate"
                        >
                            <icon>delete_sweep</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="save()"
                            [matTooltip]="'COMMON.SAVE' | translate"
                        >
                            <icon>save</icon>
                        </button>
                        <button icon matRipple (click)="close()">
                            <icon>close</icon>
                        </button>
                    </div>
                    <div class="flex w-full gap-2">
                        <a-date-field
                            [from]="1"
                            [(ngModel)]="edited_time"
                            class="no-subscript w-40 flex-1"
                        />
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-40 flex-1"
                        >
                            <input
                                matInput
                                type="time"
                                [ngModel]="edited_time_value()"
                                (ngModelChange)="setEditedTime($event)"
                            />
                        </mat-form-field>
                    </div>
                    <div class="my-2">
                        <div class="mb-1 px-1 text-xs font-medium opacity-60">
                            Progression
                        </div>
                        <div
                            class="border-base-300 bg-base-200 grid grid-cols-7 overflow-hidden rounded-sm border p-1"
                        >
                            @for (value of speed_options; track value) {
                                <button
                                    matRipple
                                    class="h-9 rounded-sm px-2 font-mono text-sm"
                                    [class.bg-base-100]="
                                        edited_speed() === value
                                    "
                                    [class.shadow-sm]="edited_speed() === value"
                                    [class.opacity-50]="
                                        edited_speed() !== value
                                    "
                                    (click)="edited_speed.set(value)"
                                >
                                    {{ speedLabel(value) }}
                                </button>
                            }
                        </div>
                    </div>
                    <div class="mb-2 grid grid-cols-3 gap-2">
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="shiftTime(-60)"
                        >
                            -1h
                        </button>
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="setNow()"
                        >
                            Now
                        </button>
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="shiftTime(60)"
                        >
                            +1h
                        </button>
                    </div>
                    <div class="flex items-center space-x-2"></div>
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      FormsModule,
      CustomTooltipComponent,
      DateFieldComponent,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule
    ] }]
  }], null, { _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeControlsComponent, { className: "TimeControlsComponent", filePath: "apps/signage/src/app/time-controls.component.ts", lineNumber: 176 });
})();

// apps/signage/src/app/media-player.component.ts
var _c06 = ["media_container_0"];
var _c13 = ["media_container_1"];
var _c2 = ["img_el_0"];
var _c3 = ["img_el_1"];
var _c4 = ["video_el_0"];
var _c5 = ["video_el_1"];
var _c6 = ["web_el_0"];
var _c7 = ["web_el_1"];
var _c8 = () => ({ x: 0.01, y: 0.01 });
var _c9 = () => ({ x: 0.5, y: 0.99 });
var _c10 = () => ({ x: 0.99, y: 0.01 });
var _c11 = () => ({ x: 0.5, y: 0.01 });
function MediaPlayerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "plugin-embed", 17);
    \u0275\u0275listener("loaded", function MediaPlayerComponent_Conditional_9_Template_plugin_embed_loaded_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginLoad(0));
    })("statusChange", function MediaPlayerComponent_Conditional_9_Template_plugin_embed_statusChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginStatus($event, 0));
    })("plugin_interaction", function MediaPlayerComponent_Conditional_9_Template_plugin_embed_plugin_interaction_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginInteraction($event, 0));
    })("plugin_error", function MediaPlayerComponent_Conditional_9_Template_plugin_embed_plugin_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginError($event, 0));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plugin", ctx_r1.output_plugins()[0])("config", ctx_r1.output_plugin_configs()[0])("play", ctx_r1.output_plugin_plays()[0]);
  }
}
function MediaPlayerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "plugin-embed", 17);
    \u0275\u0275listener("loaded", function MediaPlayerComponent_Conditional_18_Template_plugin_embed_loaded_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginLoad(1));
    })("statusChange", function MediaPlayerComponent_Conditional_18_Template_plugin_embed_statusChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginStatus($event, 1));
    })("plugin_interaction", function MediaPlayerComponent_Conditional_18_Template_plugin_embed_plugin_interaction_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginInteraction($event, 1));
    })("plugin_error", function MediaPlayerComponent_Conditional_18_Template_plugin_embed_plugin_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginError($event, 1));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plugin", ctx_r1.output_plugins()[1])("config", ctx_r1.output_plugin_configs()[1])("play", ctx_r1.output_plugin_plays()[1]);
  }
}
function MediaPlayerComponent_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "debug-overlay", 21)(1, "div", 24)(2, "h2", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275text(5, " Override ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 27);
    \u0275\u0275listener("click", function MediaPlayerComponent_Conditional_19_Conditional_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closed.emit());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("editing", ctx_r1.layout_editing())("reset_count", ctx_r1.layout_reset_count())("initial_position", \u0275\u0275pureFunction0(4, _c11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist_items[0]?.playlist_name || "Unknown", " ");
  }
}
function MediaPlayerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "debug-overlay", 18);
    \u0275\u0275element(1, "time-controls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "debug-overlay", 19)(3, "media-controls", 20);
    \u0275\u0275listener("event", function MediaPlayerComponent_Conditional_19_Template_media_controls_event_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleControlEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, MediaPlayerComponent_Conditional_19_Conditional_4_Template, 9, 5, "debug-overlay", 21);
    \u0275\u0275elementStart(5, "debug-overlay", 22)(6, "playlist-display", 23);
    \u0275\u0275listener("selected", function MediaPlayerComponent_Conditional_19_Template_playlist_display_selected_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPlaylistItem($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("overlay_id", ctx_r1.can_close() ? "override-time" : "player-time")("editing", ctx_r1.layout_editing())("reset_count", ctx_r1.layout_reset_count())("initial_position", \u0275\u0275pureFunction0(25, _c8));
    \u0275\u0275advance(2);
    \u0275\u0275property("overlay_id", ctx_r1.can_close() ? "override-playback" : "player-playback")("editing", ctx_r1.layout_editing())("reset_count", ctx_r1.layout_reset_count())("initial_position", \u0275\u0275pureFunction0(26, _c9));
    \u0275\u0275advance();
    \u0275\u0275property("state", ctx_r1.state())("loop", ctx_r1.loop())("muted", ctx_r1.muted())("shuffle", ctx_r1.shuffle())("progress", ctx_r1.progress())("duration", ctx_r1.duration())("playback_start", ctx_r1.progress_start())("playback_duration", ctx_r1.progress_duration())("animating", ctx_r1.in_animation())("loading", ctx_r1.waiting_for_item());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_close() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("overlay_id", ctx_r1.can_close() ? "override-playlist" : "player-playlist")("editing", ctx_r1.layout_editing())("reset_count", ctx_r1.layout_reset_count())("initial_position", \u0275\u0275pureFunction0(27, _c10));
    \u0275\u0275advance();
    \u0275\u0275property("index", ctx_r1.index())("playlist", ctx_r1.playlist_items);
  }
}
var MAX_URL_WAIT_LOADING = 30 * 1e3;
var MAX_URL_WAIT_IDLE = 3 * 1e3;
var URL_FETCH_TIMEOUT = 30 * 1e3;
var MIN_FAILED_MEDIA_WAIT = 1e3;
var INTERACTIVE_PRELOAD_LEAD_TIME = 10 * 1e3;
var WEBPAGE_REVEAL_DELAY = 3 * 1e3;
var PLUGIN_LOAD_TIMEOUT = 15 * 1e3;
var URL_RETRY_DELAY = 1e3;
var MediaPlayerComponent = class _MediaPlayerComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.playlist = input(
      [],
      ...ngDevMode ? [{ debugName: "playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.controls = input(
      false,
      ...ngDevMode ? [{ debugName: "controls" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layout_editing = input(
      false,
      ...ngDevMode ? [{ debugName: "layout_editing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layout_reset_count = input(
      0,
      ...ngDevMode ? [{ debugName: "layout_reset_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.transparent = input(
      false,
      ...ngDevMode ? [{ debugName: "transparent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.override = input(
      false,
      ...ngDevMode ? [{ debugName: "override" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_close = input(
      false,
      ...ngDevMode ? [{ debugName: "can_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loop = model(
      "ALL",
      ...ngDevMode ? [{ debugName: "loop" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shuffle = model(
      false,
      ...ngDevMode ? [{ debugName: "shuffle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.indexInput = input(-1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "indexInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "index" }));
    this.index = linkedSignal(
      this.indexInput,
      ...ngDevMode ? [{ debugName: "index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.animation_time = input(
      1e3,
      ...ngDevMode ? [{ debugName: "animation_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mutedInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "mutedInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "muted" }));
    this.muted = linkedSignal(
      this.mutedInput,
      ...ngDevMode ? [{ debugName: "muted" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.stateInput = input("PLAYING", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stateInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "state" }));
    this.state = linkedSignal(
      this.stateInput,
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.stateChange = output();
    this.indexChange = output();
    this.mutedChange = output();
    this.playing_id = output();
    this.event = output();
    this.closed = output();
    this.duration = signal(
      0,
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress = signal(
      0,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress_start = signal(
      0,
      ...ngDevMode ? [{ debugName: "progress_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress_duration = signal(
      0,
      ...ngDevMode ? [{ debugName: "progress_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hold_over_item = signal(
      true,
      ...ngDevMode ? [{ debugName: "hold_over_item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.in_animation = signal(
      false,
      ...ngDevMode ? [{ debugName: "in_animation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.defer_reveal = signal(
      false,
      ...ngDevMode ? [{ debugName: "defer_reveal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.waiting_for_item = signal(
      false,
      ...ngDevMode ? [{ debugName: "waiting_for_item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_output = signal(
      0,
      ...ngDevMode ? [{ debugName: "active_output" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pending_output = signal(
      0,
      ...ngDevMode ? [{ debugName: "pending_output" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_plugin = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_config = signal(
      null,
      ...ngDevMode ? [{ debugName: "plugin_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_play = signal(
      0,
      ...ngDevMode ? [{ debugName: "plugin_play" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.output_plugins = signal(
      [
        null,
        null
      ],
      ...ngDevMode ? [{ debugName: "output_plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.output_plugin_configs = signal(
      [null, null],
      ...ngDevMode ? [{ debugName: "output_plugin_configs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.output_plugin_plays = signal(
      [0, 0],
      ...ngDevMode ? [{ debugName: "output_plugin_plays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._plugin_finished = false;
    this._deferred_reveal_item_id = "";
    this._deferred_reveal_resume = true;
    this._deferred_reveal_transition = false;
    this._playback_duration = 0;
    this._web_waiting_item_id = "";
    this._web_waiting_output = 0;
    this._consecutive_load_errors = 0;
    this._handled_error_cycle = "";
    this._display_generation = 0;
    this._url_fetch_in_flight = /* @__PURE__ */ new Set();
    this._url_wait_item_id = "";
    this._url_wait_started = 0;
    this._url_retry_after = /* @__PURE__ */ new Map();
    this._shown_item_id = "";
    this._last_video_speed = /* @__PURE__ */ new Map();
    this._item_playlist = [];
    this._playlist_signature = "";
    this._item_urls = {};
    this._item_start = 0;
    this._item_progress = 0;
    this._item_real_start = 0;
    this._item_real_progress = 0;
    this._item_output = /* @__PURE__ */ new Map();
    this._output_items = [null, null];
    this._ready_output_items = /* @__PURE__ */ new Set();
    this._container_0 = viewChild(
      "media_container_0",
      ...ngDevMode ? [{ debugName: "_container_0" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._container_1 = viewChild(
      "media_container_1",
      ...ngDevMode ? [{ debugName: "_container_1" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._image_element_0 = viewChild(
      "img_el_0",
      ...ngDevMode ? [{ debugName: "_image_element_0" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._image_element_1 = viewChild(
      "img_el_1",
      ...ngDevMode ? [{ debugName: "_image_element_1" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._video_element_0 = viewChild(
      "video_el_0",
      ...ngDevMode ? [{ debugName: "_video_element_0" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._video_element_1 = viewChild(
      "video_el_1",
      ...ngDevMode ? [{ debugName: "_video_element_1" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._web_element_0 = viewChild(
      "web_el_0",
      ...ngDevMode ? [{ debugName: "_web_element_0" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._web_element_1 = viewChild(
      "web_el_1",
      ...ngDevMode ? [{ debugName: "_web_element_1" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.validateMedia = (i) => validateMedia(i);
  }
  get playlist_items() {
    return this._item_playlist;
  }
  get active_item() {
    return this._item_playlist[this.index()];
  }
  _container(output2 = this.active_output()) {
    return output2 === 0 ? this._container_0() : this._container_1();
  }
  _image_element(output2 = this.active_output()) {
    return output2 === 0 ? this._image_element_0() : this._image_element_1();
  }
  _video_element(output2 = this.active_output()) {
    return output2 === 0 ? this._video_element_0() : this._video_element_1();
  }
  _web_element(output2 = this.active_output()) {
    return output2 === 0 ? this._web_element_0() : this._web_element_1();
  }
  _inactiveOutput() {
    return this.active_output() === 0 ? 1 : 0;
  }
  _activeItemOutput() {
    return this._item_output.get(this.active_item?.id) ?? this.active_output();
  }
  _setOutputPlugin(output2, plugin) {
    const plugins = [...this.output_plugins()];
    plugins[output2] = plugin;
    this.output_plugins.set(plugins);
    if (!plugin) {
      this._setOutputPluginConfig(output2, null);
      this._setOutputPluginPlay(output2, 0);
    }
  }
  _setOutputPluginConfig(output2, config) {
    const configs = [...this.output_plugin_configs()];
    configs[output2] = config;
    this.output_plugin_configs.set(configs);
  }
  _setOutputPluginPlay(output2, value) {
    const plays = [...this.output_plugin_plays()];
    plays[output2] = value;
    this.output_plugin_plays.set(plays);
  }
  _outputKey(output2, item) {
    return `${output2}:${item?.id || ""}`;
  }
  ngOnInit() {
    this.interval("playlist_check", () => {
      recordHeartbeat("playback");
      this._updateItem();
      this._recordContentHeartbeat();
    }, 50);
  }
  /**
   * Check in with the watchdog whenever this player is showing what it
   * should be: an item it managed to load, or nothing because it is paused
   * or has nothing valid to show. A player that is meant to be playing but
   * has shown nothing for a long time is the one failure the other signals
   * cannot see, and the watchdog reloads to recover from it.
   */
  _recordContentHeartbeat() {
    if (this.override())
      return;
    const item = this.active_item;
    if (this.state() === "PAUSED" || item && this._shown_item_id === item.id || !this._hasValidPlaylistItem()) {
      recordHeartbeat("content");
    }
  }
  _markShown(item) {
    if (item?.id)
      this._shown_item_id = item.id;
  }
  _markNotShown(item) {
    if (item?.id && this._shown_item_id === item.id) {
      this._shown_item_id = "";
    }
  }
  ngOnChanges(changes) {
    if (changes.playlist) {
      const next_playlist = this.playlist() || [];
      const playlist_signature = this._getPlaylistSignature(next_playlist);
      if (playlist_signature !== this._playlist_signature) {
        const was_playing = this.state() === "PLAYING";
        const current_item = this.active_item;
        this._playlist_signature = playlist_signature;
        this._clearItemURLs();
        this.progress.set(0);
        if (was_playing && next_playlist.length)
          this.togglePause();
        this._item_playlist = [...next_playlist];
        const current_index = this._item_playlist.findIndex((_) => _.id === current_item?.id);
        this.hold_over_item.set(false);
        const target_index = current_index >= 0 ? current_index : 0;
        this.setPlaylistItem(target_index, was_playing);
        this._validatePlaylist();
      }
    }
    if (changes.animation_time) {
      document.documentElement.style.setProperty("--transition-duration", `${this.animation_time() || 3e3}ms`);
    }
    if (changes.muted) {
      this._video_element().nativeElement.muted = !!this.muted();
    }
    if (changes.override) {
      if (this.override()) {
        if (this.state() === "PLAYING")
          this.togglePause();
        this.interval("override", () => this.state() === "PLAYING" ? this.togglePause() : "");
      } else {
        if (this.state() === "PAUSED")
          this.togglePause();
        this.clearInterval("override");
      }
    }
  }
  url(id) {
    return this._item_urls[id] || "";
  }
  previousItem() {
    const new_index = this._normalisePlaylistIndex(this.index() - 1);
    this.setPlaylistItem(new_index);
  }
  toggleMuted() {
    this.muted.set(!this.muted());
    const muted = this.muted();
    this.mutedChange.emit(muted);
    this._video_element().nativeElement.muted = muted;
  }
  togglePause() {
    this.clearTimeout("re-start");
    if (this.state() === "PLAYING") {
      this._updateProgress();
      this.state.set("PAUSED");
      this._item_progress = time() - this._item_start;
      this._item_real_progress = Date.now() - this._item_real_start;
      this._item_start = 0;
      this._item_real_start = 0;
      this.progress_start.set(0);
      if (this.active_item?.type === "video") {
        this._video_element().nativeElement.pause();
      }
    } else {
      this.state.set("PLAYING");
      this._item_start = time() - this._item_progress;
      this._item_real_start = Date.now() - this._item_real_progress;
      this._item_progress = 0;
      this._item_real_progress = 0;
      this.progress_start.set(this._item_start);
      this.progress_duration.set(this._effectivePlaybackDuration(this.active_item));
      if (this.active_item?.type === "video") {
        this._applyVideoPlaybackSpeed(this.active_output(), () => this._pauseBlockedVideoPlayback(), true);
      }
      if (this.index() === -1)
        this._updateItem();
    }
  }
  nextItem() {
    if (this._shouldHoldSingleInteractiveItem(this.active_item))
      return;
    if (this.hold_over_item()) {
      const item = this._item_playlist.shift();
      if (this.progress() > 50 && this.isValidMedia(item)) {
        this.event.emit({ type: "media_count", ref_id: item.id });
      }
      this.setPlaylistItem(0);
      this.hold_over_item.set(false);
      return;
    }
    let next_index = this.index() + 1;
    const loop = this.loop();
    if (loop === "ONE")
      next_index = this.index();
    else if (loop === "NONE" && next_index === this._item_playlist.length) {
      const last_index = this.index();
      const last_item = this._item_playlist[last_index];
      if (this.progress() > 50 && this.isValidMedia(last_item)) {
        this.event.emit({ type: "media_count", ref_id: last_item.id });
      }
      this._emitPlaylistMetrics(last_index);
      this.index.set(-1);
      this.state.set("PAUSED");
      this._item_start = 0;
      this._item_progress = 0;
      this._item_real_start = 0;
      this._item_real_progress = 0;
      this.progress_start.set(0);
      return;
    }
    const new_index = this._normalisePlaylistIndex(next_index);
    const old_item = this._item_playlist[this.index()];
    if (this.progress() > 50 && this.isValidMedia(old_item)) {
      this.event.emit({ type: "media_count", ref_id: old_item.id });
    }
    this.setPlaylistItem(new_index);
  }
  isValidMedia(item) {
    return validateMedia(item) === "";
  }
  /**
   * Whether the item on screen plays to completion, so interrupting it now
   * would be noticed. Images and webpages hold a static frame and can be
   * replaced without anyone seeing a difference; videos and plugins that
   * report when they finish cannot.
   */
  isMidPlayThroughItem() {
    const item = this.active_item;
    if (!item || this.state() !== "PLAYING")
      return false;
    if (item.type === "video")
      return true;
    if (item.type === "plugin") {
      const playback = item.plugin?.playback_type;
      return playback === "playsthrough" || playback === "interactive";
    }
    return false;
  }
  toggleLoop() {
    const loop = this.loop();
    if (loop === "ALL")
      this.loop.set("ONE");
    else if (loop === "NONE")
      this.loop.set("ALL");
    else if (loop === "ONE")
      this.loop.set("NONE");
  }
  toggleShuffle() {
    this.shuffle.set(!this.shuffle());
    const current_item = this.active_item;
    if (this.hold_over_item()) {
      this._item_playlist.shift();
      this.hold_over_item.set(false);
    }
    if (this.shuffle()) {
      shuffleArrayWithFirstItem(this._item_playlist, this.index());
      this.setPlaylistItem(0);
    } else {
      this._item_playlist = [...this.playlist()];
      this.setPlaylistItem(current_item ? this._item_playlist.findIndex((_) => _.id === current_item.id) : 0);
    }
  }
  handleControlEvent(event) {
    if (event === "SHUFFLE")
      this.toggleShuffle();
    else if (event === "PLAY")
      this.togglePause();
    else if (event === "PAUSE")
      this.togglePause();
    else if (event === "NEXT")
      this.nextItem();
    else if (event === "PREVIOUS")
      this.previousItem();
    else if (event === "MUTE")
      this.toggleMuted();
    else if (event === "LOOP")
      this.toggleLoop();
  }
  onWebpageLoad(output2 = this.pending_output()) {
    const item = this._output_items[output2] || this.active_item;
    if (item?.type === "webpage") {
      this._ready_output_items.add(this._outputKey(output2, item));
    }
    if (item?.type !== "webpage" || this.active_item?.id !== item.id || this._web_waiting_item_id !== item.id || this._web_waiting_output !== output2) {
      return;
    }
    this.onMediaLoadSuccess(output2);
    this.clearTimeout("webpage-load-timeout");
    this.clearTimeout("webpage-hold-delay");
    this.timeout("webpage-hold-delay", () => {
      if (this.active_item?.id !== item.id || this._web_waiting_item_id !== item.id) {
        return;
      }
      this._web_waiting_item_id = "";
      this._resetPlayback();
      this._finishDeferredReveal(item, 0);
    }, WEBPAGE_REVEAL_DELAY);
  }
  _updateProgress(item = this.active_item, now = time()) {
    const playback_duration = this._effectivePlaybackDuration(item);
    const duration = now - this._item_start;
    if (this._item_start && this._web_waiting_item_id !== item?.id) {
      this.progress.set(duration / playback_duration * 100);
      this.duration.set(Math.floor(duration / 1e3));
    } else {
      this.progress.set(0);
      this.duration.set(0);
    }
  }
  _updateItem() {
    if (this.state() === "PAUSED")
      return;
    const item = this.active_item;
    if (item?.type === "video") {
      this._applyVideoPlaybackSpeed(this._activeItemOutput());
    }
    const now = time();
    const playback_duration = this._effectivePlaybackDuration(item);
    this._updateProgress(item, now);
    if (!this._item_playlist?.length)
      return;
    this._processURLs();
    if (this.index() === -1) {
      this.progress.set(0);
      this.progress_start.set(0);
      this.setPlaylistItem(0);
    }
    if (item?.type === "plugin" && item.plugin?.playback_type === "playsthrough") {
      if (this._plugin_finished) {
        this.nextItem();
      }
      return;
    }
    if (this._web_waiting_item_id === item?.id)
      return;
    if (now > this._item_start + playback_duration) {
      if (this._shouldHoldSingleInteractiveItem(item)) {
        this.progress.set(100);
        this.duration.set(Math.floor(playback_duration / 1e3));
        return;
      }
      this._consecutive_load_errors = 0;
      this.nextItem();
    }
  }
  setPlaylistItem(index, resume_if_paused = true) {
    if (!this._hasValidPlaylistItem()) {
      this._clearActiveItem();
      return this.timeout("retry_set_item", () => this.setPlaylistItem(index, resume_if_paused), 5e3);
    }
    this.clearTimeout("retry_set_item");
    index = this._normalisePlaylistIndex(index);
    const old_index = this.index();
    this.index.set(index);
    this.indexChange.emit(index);
    const item = this.active_item;
    const old_item = this._item_playlist[old_index];
    this._emitPlaylistMetrics(old_index);
    if (!item)
      return;
    if (!this.isValidMedia(item)) {
      if (old_index !== index)
        this.nextItem();
      return;
    }
    this._display_generation++;
    const should_transition = this._shouldTransition(old_item, item);
    const should_defer_reveal = this._shouldDeferReveal(item);
    const output2 = should_transition ? this._inactiveOutput() : this.active_output();
    this.pending_output.set(output2);
    this._startDisplayAttempt(item, output2);
    if (should_defer_reveal) {
      this._prepareDeferredReveal(resume_if_paused, should_transition);
    } else {
      this._clearDeferredReveal();
    }
    if (item.type === "plugin" && item.plugin) {
      this._showPlugin(item, output2);
      if (this._ready_output_items.has(this._outputKey(output2, item))) {
        this._finishDeferredReveal(item);
      }
    } else {
      const ready = this._showMediaItem(item, index, output2, resume_if_paused, should_transition);
      if (!ready)
        return;
    }
    if (should_defer_reveal)
      return;
    this._revealPreparedItem(item, resume_if_paused, should_transition);
  }
  _shouldDeferReveal(item) {
    return item?.type === "webpage" || item?.type === "plugin";
  }
  _prepareDeferredReveal(resume_if_paused, should_transition) {
    this.clearTimeout("deferred-reveal");
    this.defer_reveal.set(true);
    this.waiting_for_item.set(true);
    this._deferred_reveal_item_id = this.active_item?.id || "";
    this._deferred_reveal_resume = resume_if_paused;
    this._deferred_reveal_transition = should_transition;
  }
  _clearDeferredReveal() {
    this.clearTimeout("deferred-reveal");
    this._deferred_reveal_item_id = "";
    this._deferred_reveal_resume = true;
    this._deferred_reveal_transition = false;
    this.defer_reveal.set(false);
    this.waiting_for_item.set(false);
  }
  _finishDeferredReveal(item, delay2 = 2e3) {
    if (this._deferred_reveal_item_id !== item.id)
      return;
    const reveal = () => {
      if (this.active_item?.id !== item.id || this._deferred_reveal_item_id !== item.id) {
        return;
      }
      this._resetPlayback();
      this._revealPreparedItem(item, this._deferred_reveal_resume, this._deferred_reveal_transition);
    };
    if (delay2 <= 0) {
      reveal();
      return;
    }
    this.timeout("deferred-reveal", reveal, delay2);
  }
  _revealPreparedItem(item, resume_if_paused, should_transition) {
    if (item.type === "plugin") {
      this._playPreparedPlugin(item);
      requestAnimationFrame(() => {
        if (this.active_item?.id !== item.id || this._deferred_reveal_item_id !== item.id) {
          return;
        }
        this._activatePreparedItem(item, resume_if_paused, should_transition);
      });
      return;
    }
    this._activatePreparedItem(item, resume_if_paused, should_transition);
  }
  _activatePreparedItem(item, resume_if_paused, should_transition) {
    this._clearDeferredReveal();
    this.playing_id.emit(item.id);
    if (!should_transition) {
      this.active_output.set(this.pending_output());
      this._resetTransitionState();
      if (resume_if_paused && this.state() === "PAUSED")
        this.togglePause();
      this._cleanupInactiveOutputs();
      return;
    }
    this._transition(resume_if_paused);
  }
  _playPreparedPlugin(item) {
    if (item.type !== "plugin")
      return;
    const output2 = this._item_output.get(item.id) ?? this.active_output();
    const value = time();
    this._setOutputPluginPlay(output2, value);
    this.plugin_play.set(value);
  }
  _startDisplayAttempt(item, output2) {
    this.clearTimeout("webpage-hold-delay");
    this._web_waiting_item_id = item.type === "webpage" ? item.id : "";
    this._web_waiting_output = output2;
    const output_item = this._output_items[output2];
    if (output_item?.id !== item.id) {
      this._clearOutput(output2);
    } else if (item.type !== "plugin") {
      this._hideMediaElements(output2);
    }
    this._output_items[output2] = item;
    this._item_start = time();
    this._item_progress = 0;
    this._item_real_start = Date.now();
    this._item_real_progress = 0;
    this._playback_duration = item.duration || 15 * 1e3;
    this.progress_start.set(this._item_start);
    this.progress_duration.set(this._playback_duration);
    this.progress.set(0);
    this.duration.set(0);
    this._plugin_finished = false;
    this._last_video_speed.delete(output2);
  }
  _hideMediaElements(output2) {
    this.clearTimeout(this._pluginLoadTimeoutName(output2));
    this._video_element(output2).nativeElement.classList.add("hidden");
    this._web_element(output2).nativeElement.classList.add("hidden");
    this._image_element(output2).nativeElement.classList.add("hidden");
    this._setOutputPlugin(output2, null);
  }
  _clearOutput(output2) {
    const item = this._output_items[output2];
    this._hideMediaElements(output2);
    if (item?.type === "video")
      this._pauseOutputVideo(output2);
    this._web_element(output2).nativeElement.removeAttribute("src");
    if (item) {
      this._item_output.delete(item.id);
      this._ready_output_items.delete(this._outputKey(output2, item));
    }
    this._output_items[output2] = null;
  }
  _showMediaItem(item, index, output2, resume_if_paused, should_transition) {
    const url = this.url(item.id);
    if (!url) {
      return this._handleMissingMediaURL(item, index, resume_if_paused);
    }
    this._url_wait_item_id = "";
    if (!this._shouldDeferReveal(item))
      this.waiting_for_item.set(false);
    const active_el = this._activeMediaElement(item, output2);
    const url_string = url.toString();
    const keep_webpage_loaded = item.type === "webpage" && (this._shouldHoldSingleWebpage(item) || this._ready_output_items.has(this._outputKey(output2, item))) && active_el.src === url_string;
    this._item_output.set(item.id, output2);
    if (keep_webpage_loaded) {
      this._web_waiting_item_id = "";
      this._finishDeferredReveal(item, 0);
    } else {
      active_el.src = url_string;
    }
    active_el.classList.remove("hidden");
    if (item.type === "webpage" && !keep_webpage_loaded) {
      this._waitForWebpageLoad(item);
    }
    this._startNativeMediaPlayback(item, output2, should_transition);
    return true;
  }
  _handleMissingMediaURL(item, index, resume_if_paused) {
    const fetched = this._item_urls[item.id] !== void 0;
    const fetching = this._url_fetch_in_flight.has(item.id);
    const still_loading = item.isLoading?.() ?? false;
    if (this._shouldWaitForMediaURL(item, fetched, fetching, still_loading)) {
      this._ensureItemURL(item);
      this.waiting_for_item.set(true);
      this.timeout("wait-for-url", () => this.setPlaylistItem(index, resume_if_paused));
      return false;
    }
    this._url_wait_item_id = "";
    this.waiting_for_item.set(false);
    log("MediaPlayer", `Unable to resolve URL for media "${item.name}"`, [item], "warn");
    this._markNotShown(item);
    this._handled_error_cycle = this._currentMediaCycle();
    this._skipFailedMedia(this._url_wait_started);
    return false;
  }
  _shouldWaitForMediaURL(item, fetched, fetching, still_loading) {
    if (this._url_wait_item_id !== item.id) {
      this._url_wait_item_id = item.id;
      this._url_wait_started = time();
    }
    const waited = time() - this._url_wait_started;
    const max_wait = still_loading ? MAX_URL_WAIT_LOADING : MAX_URL_WAIT_IDLE;
    return (still_loading || fetching || !fetched) && waited < max_wait;
  }
  _activeMediaElement(item, output2) {
    if (item.type === "video")
      return this._video_element(output2).nativeElement;
    if (item.type === "webpage")
      return this._web_element(output2).nativeElement;
    return this._image_element(output2).nativeElement;
  }
  _waitForWebpageLoad(item) {
    this.progress.set(0);
    this.duration.set(0);
    this.timeout("webpage-load-timeout", () => {
      if (this._web_waiting_item_id !== item.id)
        return;
      log("MediaPlayer", `Webpage "${item.name}" did not load in time; continuing.`, [this.url(item.id)?.toString()], "warn");
      this._markShown(item);
      this._web_waiting_item_id = "";
      this._resetPlayback();
      this._finishDeferredReveal(item, 0);
    }, 15 * 1e3);
  }
  _startNativeMediaPlayback(item, output2, should_transition) {
    if (item.type === "video") {
      this._applyVideoPlaybackSpeed(output2, () => {
        if (should_transition)
          this.nextItem();
        else
          this._pauseBlockedVideoPlayback();
      });
    } else {
      this._video_element(output2).nativeElement.pause();
    }
  }
  _pauseBlockedVideoPlayback() {
    this.state.set("PAUSED");
    this._item_start = 0;
    this._item_progress = 0;
    this._item_real_start = 0;
    this._item_real_progress = 0;
    this.progress_start.set(0);
  }
  _applyVideoPlaybackSpeed(output2, on_error, force_play = false) {
    const video = this._video_element(output2).nativeElement;
    const { active, speed } = mockTimeState();
    const playback_speed = active ? speed : 1;
    if (!force_play && this._last_video_speed.get(output2) === playback_speed) {
      return;
    }
    this._last_video_speed.set(output2, playback_speed);
    if (playback_speed <= 0) {
      video.pause();
      return;
    }
    video.playbackRate = playback_speed;
    video.muted = this.muted() || playback_speed >= 4;
    if (this.state() === "PLAYING")
      this._requestVideoPlayback(output2, on_error);
  }
  onPluginStatus(status, output2 = this.pending_output()) {
    const item = this._output_items[output2] || this.active_item;
    if (!item || item.type !== "plugin")
      return;
    if (this._item_output.get(item.id) !== output2)
      return;
    log("MediaPlayer", `Plugin status: ${status}`, [item.name]);
    if (status === "ready") {
      this._handlePluginReady(item, output2);
    } else if (status === "finished") {
      this._plugin_finished = true;
    }
  }
  onPluginLoad(output2 = this.pending_output()) {
    const item = this._output_items[output2] || this.active_item;
    if (!item || item.type !== "plugin")
      return;
    if (this._item_output.get(item.id) !== output2)
      return;
    this._handlePluginReady(item, output2);
  }
  onPluginInteraction(interaction, output2 = this._activeItemOutput()) {
    const item = this.active_item;
    if (this._item_output.get(item?.id) !== output2)
      return;
    const interactive = item?.type === "plugin" && item.plugin?.playback_type === "interactive";
    if (!interactive)
      return;
    const value = Number(interaction.new_duration);
    this._resetPlayback(Number.isFinite(value) && value > 0 ? value : 0);
  }
  onPluginError(error, output2 = this._activeItemOutput()) {
    const item = this.active_item;
    if (item?.type === "plugin" && this._item_output.get(item.id) !== output2)
      return;
    log("MediaPlayer", `Plugin error: ${error.message}`, [error], "error");
    if (!error.fatal)
      return;
    if (item?.type === "plugin") {
      this._markNotShown(item);
      this._handled_error_cycle = this._currentMediaCycle();
      this._clearDeferredReveal();
      this._clearOutput(output2);
      this._skipFailedMedia(this._item_start || time());
    } else {
      this.nextItem();
    }
  }
  _showPlugin(item, output2) {
    log("MediaPlayer", `Showing plugin: ${item.name}`, [item.plugin?.name]);
    this._item_output.set(item.id, output2);
    this._setOutputPlugin(output2, item.plugin);
    this.active_plugin.set(item.plugin);
    this._waitForPluginLoad(item, output2);
  }
  _waitForPluginLoad(item, output2) {
    const timeout_name = this._pluginLoadTimeoutName(output2);
    this.clearTimeout(timeout_name);
    this.timeout(timeout_name, () => {
      if (this._item_output.get(item.id) !== output2)
        return;
      log("MediaPlayer", `Plugin "${item.name}" did not report load in time; continuing.`, [item.plugin?.uri], "warn");
      this._configurePluginOutput(item, output2);
    }, PLUGIN_LOAD_TIMEOUT);
  }
  _handlePluginReady(item, output2) {
    this.clearTimeout(this._pluginLoadTimeoutName(output2));
    this._configurePluginOutput(item, output2);
  }
  _pluginLoadTimeoutName(output2) {
    return `plugin-load-timeout-${output2}`;
  }
  _configurePluginOutput(item, output2) {
    const config = {
      instance_id: item.id,
      config: item.plugin_params || {},
      timing: {
        scheduled_duration_ms: this.active_item?.id === item.id ? this._effectivePlaybackDuration(item) : item.duration || 15 * 1e3
      }
    };
    this._setOutputPluginConfig(output2, config);
    this._ready_output_items.add(this._outputKey(output2, item));
    if (this.active_item?.id !== item.id)
      return;
    this._markShown(item);
    this.plugin_config.set(config);
    if (this._deferred_reveal_item_id === item.id && this.pending_output() === output2) {
      this._finishDeferredReveal(item);
    } else {
      this._playPreparedPlugin(item);
    }
  }
  _effectivePlaybackDuration(item = this.active_item) {
    return this._playback_duration || item?.duration || 15 * 1e3;
  }
  _resetPlayback(playback_duration = 0) {
    if (playback_duration > 0) {
      this._playback_duration = playback_duration;
    }
    this._item_progress = 0;
    this._item_start = this.state() === "PLAYING" ? time() : 0;
    this._item_real_progress = 0;
    this._item_real_start = this.state() === "PLAYING" ? Date.now() : 0;
    this.progress_start.set(this._item_start);
    this.progress_duration.set(this._effectivePlaybackDuration());
    this.progress.set(0);
    this.duration.set(0);
  }
  _requestVideoPlayback(output2, on_error) {
    const cycle = this._currentMediaCycle();
    requestAnimationFrame(() => {
      const play_action = this._video_element(output2).nativeElement.play();
      play_action?.catch((error) => {
        if (cycle !== this._currentMediaCycle())
          return;
        log("MediaPlayer", "Video playback could not be started.", [error, this.active_item], "warn");
        on_error?.();
      });
    });
  }
  onMediaLoadSuccess(output2 = this._activeItemOutput()) {
    const item = this.active_item;
    if (item && this._item_output.get(item.id) !== output2)
      return;
    this._markShown(item);
    this._consecutive_load_errors = 0;
    this.clearTimeout("retry-failed-media");
    this.clearTimeout("skip-failed-media");
  }
  onMediaLoadError(source, output2 = this._activeItemOutput()) {
    const item = this.active_item;
    if (!item || item.type === "plugin" || item.type === "webpage")
      return;
    if (this._item_output.get(item.id) !== output2)
      return;
    const is_video_item = item.type === "video";
    if (is_video_item !== (source === "video"))
      return;
    const cycle = this._currentMediaCycle();
    if (cycle === this._handled_error_cycle)
      return;
    this._handled_error_cycle = cycle;
    log("MediaPlayer", `Failed to load ${item.type} media "${item.name}"`, [this.url(item.id)?.toString()], "warn");
    this._markNotShown(item);
    this._skipFailedMedia(this._item_start);
  }
  _currentMediaCycle() {
    return `${this.index()}:${this._display_generation}`;
  }
  _skipFailedMedia(wait_started = time()) {
    const valid_count = this._item_playlist.filter((item) => this.isValidMedia(item)).length;
    this._consecutive_load_errors++;
    const failed = this.active_item;
    if (failed) {
      const url = this._item_urls[failed.id];
      if (url)
        URL.revokeObjectURL(url.toString());
      delete this._item_urls[failed.id];
    }
    if (valid_count <= 1 || this._consecutive_load_errors >= valid_count) {
      this._consecutive_load_errors = 0;
      this.timeout("retry-failed-media", () => {
        this._handled_error_cycle = "";
        this.setPlaylistItem(this.index());
      }, 30 * 1e3);
      return;
    }
    const failed_cycle = this._currentMediaCycle();
    const skip_delay = Math.max(MIN_FAILED_MEDIA_WAIT - (time() - wait_started), 0);
    const skip = () => {
      if (this._currentMediaCycle() !== failed_cycle)
        return;
      this.nextItem();
    };
    if (skip_delay <= 0) {
      this.waiting_for_item.set(false);
      skip();
      return;
    }
    this.timeout("skip-failed-media", skip, skip_delay);
  }
  _processURLs() {
    const current_index = Math.max(this.index(), 0);
    const item_count = this._item_playlist.length;
    if (!item_count)
      return;
    const item_list = this._nearbyPlaylistItems(current_index);
    for (const item of item_list) {
      this._ensureItemURL(item);
    }
    for (const key in this._item_urls) {
      if (item_list.find((_) => _?.id === key))
        continue;
      const url = this._item_urls[key];
      if (url)
        URL.revokeObjectURL(url.toString());
      delete this._item_urls[key];
    }
    this._preloadUpcomingInteractiveContent(current_index);
  }
  _clearActiveItem() {
    if (this.index() !== -1) {
      this.index.set(-1);
      this.indexChange.emit(-1);
    }
    this.playing_id.emit("");
    this._item_start = 0;
    this._item_progress = 0;
    this._item_real_start = 0;
    this._item_real_progress = 0;
    this.progress.set(0);
    this.duration.set(0);
    this.progress_start.set(0);
    this._clearDeferredReveal();
    this._clearOutput(0);
    this._clearOutput(1);
  }
  _preloadUpcomingInteractiveContent(current_index) {
    if (!this._shouldPreloadUpcomingInteractiveContent())
      return;
    const next_index = findValidPlaylistIndex(this._item_playlist, current_index, 1);
    const item = next_index >= 0 && next_index !== current_index ? this._item_playlist[next_index] : null;
    const output2 = this._inactiveOutput();
    if (!item || item.type !== "webpage" && item.type !== "plugin") {
      return;
    }
    if (this._output_items[output2]?.id === item.id)
      return;
    this._clearOutput(output2);
    this._output_items[output2] = item;
    this._item_output.set(item.id, output2);
    this._ready_output_items.delete(this._outputKey(output2, item));
    if (item.type === "webpage") {
      const url = this.url(item.id);
      if (!url)
        return;
      const web_el = this._web_element(output2).nativeElement;
      web_el.src = url.toString();
      web_el.classList.remove("hidden");
      return;
    }
    if (item.plugin) {
      this._setOutputPlugin(output2, item.plugin);
    }
  }
  _shouldPreloadUpcomingInteractiveContent() {
    if (!this._item_real_start)
      return false;
    const item = this.active_item;
    const remaining = this._effectivePlaybackDuration(item) - (Date.now() - this._item_real_start);
    return remaining <= INTERACTIVE_PRELOAD_LEAD_TIME;
  }
  _nearbyPlaylistItems(current_index) {
    const item_count = this._item_playlist.length;
    return [0, 1, -1, 2, -2].map((offset) => {
      const index = (current_index + offset + item_count) % item_count;
      return this._item_playlist[index];
    });
  }
  _ensureItemURL(item) {
    if (!item?.id || item.type === "plugin")
      return;
    if (this._item_urls[item.id])
      return;
    if (this._url_fetch_in_flight.has(item.id))
      return;
    if ((this._url_retry_after.get(item.id) || 0) > Date.now())
      return;
    const id = item.id;
    this._url_fetch_in_flight.add(id);
    let settled = false;
    const settle = (resolved) => {
      if (settled)
        return;
      settled = true;
      this.clearTimeout(`url-fetch-${id}`);
      this._url_fetch_in_flight.delete(id);
      this._item_urls[id] = resolved ?? null;
      if (!resolved) {
        this._url_retry_after.set(id, Date.now() + URL_RETRY_DELAY);
      } else {
        this._url_retry_after.delete(id);
      }
    };
    item.getURL().then((resolved) => settle(resolved ?? null)).catch(() => settle(null));
    this.timeout(`url-fetch-${id}`, () => settle(null), URL_FETCH_TIMEOUT);
  }
  _transition(resume_on_end = true) {
    if (!this.active_item)
      return;
    if (this.state() === "PLAYING")
      this.togglePause();
    this.in_animation.set(true);
    if (this.active_item.animation === Cs.Cut) {
      this._onTransitionEnd(resume_on_end, true);
      return;
    }
    const item = this.active_item;
    const previous_output = this.active_output();
    const next_output = this.pending_output();
    const prev_container_el = this._container(previous_output).nativeElement;
    const container_el = this._container(next_output).nativeElement;
    requestAnimationFrame(() => {
      prev_container_el.classList.remove("opacity-0");
      if (item.animation !== Cs.CrossFade) {
        container_el.classList.remove("opacity-0");
      }
      switch (item.animation) {
        case Cs.SlideTop:
          container_el.style.transform = "translate(0, -100%)";
          break;
        case Cs.SlideLeft:
          container_el.style.transform = "translate(-100%, 0)";
          break;
        case Cs.SlideRight:
          container_el.style.transform = "translate(100%, 0)";
          break;
        case Cs.SlideBottom:
          container_el.style.transform = "translate(0, 100%)";
          break;
        case Cs.CrossFade:
          prev_container_el.classList.remove("opacity-0");
          container_el.classList.add("opacity-0");
          break;
      }
      requestAnimationFrame(() => {
        prev_container_el.classList.add("player-animate");
        container_el.classList.add("player-animate");
        requestAnimationFrame(() => {
          container_el.style.transform = "translate(0, 0)";
          prev_container_el.classList.add("opacity-0");
          container_el.classList.remove("opacity-0");
        });
      });
      this.timeout("re-start", () => this._onTransitionEnd(resume_on_end, true), this.animation_time() || 3e3);
    });
  }
  _onTransitionEnd(resume = true, swap_outputs = false) {
    if (swap_outputs)
      this.active_output.set(this.pending_output());
    this._resetTransitionState();
    this._cleanupInactiveOutputs();
    if (resume)
      this.togglePause();
  }
  _resetTransitionState() {
    this.clearTimeout("re-start");
    for (const output2 of [0, 1]) {
      const container_el = this._container(output2).nativeElement;
      container_el.classList.remove("player-animate");
      container_el.classList.remove("opacity-0");
      container_el.style.transform = "translate(0, 0)";
    }
    this.in_animation.set(false);
  }
  _cleanupInactiveOutputs() {
    const active_output = this.active_output();
    for (const output2 of [0, 1]) {
      if (output2 === active_output)
        continue;
      const item = this._output_items[output2];
      if (item?.type === "webpage" || item?.type === "plugin") {
        this._clearOutput(output2);
      } else if (item?.type === "video") {
        this._pauseOutputVideo(output2);
      }
    }
  }
  _pauseOutputVideo(output2) {
    this._video_element(output2).nativeElement.pause();
    this._last_video_speed.delete(output2);
  }
  _shouldTransition(old_item, new_item) {
    if (!this._hasMultipleActivePlaylistItems())
      return false;
    return old_item?.id !== new_item?.id;
  }
  _shouldHoldSingleWebpage(item) {
    return item?.type === "webpage" && !this._hasMultipleActivePlaylistItems();
  }
  _shouldHoldSingleInteractiveItem(item) {
    return (item?.type === "webpage" || item?.type === "plugin") && !this._hasMultipleActivePlaylistItems();
  }
  _hasMultipleActivePlaylistItems() {
    const active_item_ids = new Set(this._item_playlist.filter((item) => this.isValidMedia(item)).map((item) => item.id));
    return active_item_ids.size > 1;
  }
  _validatePlaylist() {
    if (!this._item_playlist.length)
      return;
    const has_valid_items = this._item_playlist.some((item) => this.isValidMedia(item));
    if (!has_valid_items) {
      this.event.emit({
        type: "playlist_through",
        ref_id: this._item_playlist[0]?.playlist
      });
    }
  }
  _hasValidPlaylistItem() {
    return this._item_playlist.some((item) => this.isValidMedia(item));
  }
  _emitPlaylistMetrics(idx) {
    const item = this._item_playlist[idx];
    if (!this._isLastValidPlaylistItem(idx) || !item?.playlist)
      return;
    this.event.emit({ type: "playlist_count", ref_id: item.playlist });
    if (this.progress() > 50) {
      this.event.emit({
        type: "playlist_through",
        ref_id: item.playlist
      });
    }
  }
  _isLastValidPlaylistItem(idx) {
    const playlist = this._item_playlist;
    const item = playlist[idx];
    if (!item || !this.isValidMedia(item))
      return false;
    const next_index = findValidPlaylistIndex(playlist, idx, 1);
    if (next_index === idx)
      return true;
    if (next_index === -1)
      return true;
    if (next_index < idx)
      return true;
    const next_item = playlist[next_index];
    return item.playlist !== next_item.playlist;
  }
  _getPlaylistSignature(playlist) {
    return JSON.stringify(playlist.map((item) => ({
      id: item.id,
      name: item.name,
      playlist: item.playlist,
      playlist_name: item.playlist_name,
      type: item.type,
      url: item.url,
      animation: item.animation,
      start_time: item.start_time,
      duration: item.duration,
      valid_from: item.valid_from,
      valid_until: item.valid_until,
      plugin_id: item.plugin?.id,
      plugin_params: item.plugin_params
    })));
  }
  _normalisePlaylistIndex(index) {
    const length = this._item_playlist.length;
    return length ? (index + length) % length : -1;
  }
  _clearItemURLs() {
    for (const key in this._item_urls) {
      const url = this._item_urls[key];
      if (url)
        URL.revokeObjectURL(url.toString());
      delete this._item_urls[key];
    }
    this._url_retry_after.clear();
    this._shown_item_id = "";
    this._item_output.clear();
    this._output_items = [null, null];
    this._ready_output_items.clear();
    this._setOutputPlugin(0, null);
    this._setOutputPlugin(1, null);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MediaPlayerComponent_BaseFactory;
      return function MediaPlayerComponent_Factory(__ngFactoryType__) {
        return (\u0275MediaPlayerComponent_BaseFactory || (\u0275MediaPlayerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MediaPlayerComponent)))(__ngFactoryType__ || _MediaPlayerComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaPlayerComponent, selectors: [["media-player"]], viewQuery: function MediaPlayerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._container_0, _c06, 5)(ctx._container_1, _c13, 5)(ctx._image_element_0, _c2, 5)(ctx._image_element_1, _c3, 5)(ctx._video_element_0, _c4, 5)(ctx._video_element_1, _c5, 5)(ctx._web_element_0, _c6, 5)(ctx._web_element_1, _c7, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(8);
      }
    }, hostVars: 2, hostBindings: function MediaPlayerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("transparent", ctx.transparent());
      }
    }, inputs: { playlist: [1, "playlist"], controls: [1, "controls"], layout_editing: [1, "layout_editing"], layout_reset_count: [1, "layout_reset_count"], transparent: [1, "transparent"], override: [1, "override"], can_close: [1, "can_close"], loop: [1, "loop"], shuffle: [1, "shuffle"], indexInput: [1, "index", "indexInput"], animation_time: [1, "animation_time"], mutedInput: [1, "muted", "mutedInput"], stateInput: [1, "state", "stateInput"] }, outputs: { loop: "loopChange", shuffle: "shuffleChange", stateChange: "stateChange", indexChange: "indexChange", mutedChange: "mutedChange", playing_id: "playing_id", event: "event", closed: "closed" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 20, vars: 23, consts: [["media_container_0", ""], ["img_el_0", ""], ["video_el_0", ""], ["web_el_0", ""], ["media_container_1", ""], ["img_el_1", ""], ["video_el_1", ""], ["web_el_1", ""], [1, "absolute", "inset-0"], [1, "pointer-events-none", "absolute", "top-0", "left-0", "h-full", "w-full"], [1, "absolute", "top-0", "left-0", "hidden", "h-full", "w-full", "object-contain", "object-center", 3, "load", "error"], [1, "absolute", "top-0", "left-0", "hidden", "h-full", "w-full", "object-contain", "object-center", 3, "loadeddata", "error"], [1, "absolute", "top-0", "left-0", "hidden", "h-full", "w-full", "border-0", 3, "load"], [1, "absolute", "top-0", "left-0", "h-full", "w-full", 3, "plugin", "config", "play"], [1, "absolute", "top-0", "left-0", "h-full", "w-full", "object-contain", "object-center", 3, "load", "error"], [1, "absolute", "top-0", "left-0", "h-full", "w-full", "object-contain", "object-center", 3, "loadeddata", "error"], [1, "absolute", "top-0", "left-0", "h-full", "w-full", "border-0", 3, "load"], [1, "absolute", "top-0", "left-0", "h-full", "w-full", 3, "loaded", "statusChange", "plugin_interaction", "plugin_error", "plugin", "config", "play"], ["label", "debug time", "icon", "event", 3, "overlay_id", "editing", "reset_count", "initial_position"], ["label", "playback controls", "icon", "play_circle", 3, "overlay_id", "editing", "reset_count", "initial_position"], [3, "event", "state", "loop", "muted", "shuffle", "progress", "duration", "playback_start", "playback_duration", "animating", "loading"], ["overlay_id", "override-details", "label", "override details", "icon", "priority_high", 3, "editing", "reset_count", "initial_position"], ["label", "playlist", "icon", "queue_music", 3, "overlay_id", "editing", "reset_count", "initial_position"], [3, "selected", "index", "playlist"], [1, "border-base-200", "bg-base-100", "flex", "items-center", "space-x-4", "rounded-full", "border", "p-2"], [1, "max-w-[30vw]", "truncate", "py-2", "pl-4"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-[0.625rem]"], ["icon", "", "default", "", "matRipple", "", 3, "click"]], template: function MediaPlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 8)(1, "div", 9, 0)(3, "img", 10, 1);
        \u0275\u0275listener("load", function MediaPlayerComponent_Template_img_load_3_listener() {
          return ctx.onMediaLoadSuccess(0);
        })("error", function MediaPlayerComponent_Template_img_error_3_listener() {
          return ctx.onMediaLoadError("image", 0);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "video", 11, 2);
        \u0275\u0275listener("loadeddata", function MediaPlayerComponent_Template_video_loadeddata_5_listener() {
          return ctx.onMediaLoadSuccess(0);
        })("error", function MediaPlayerComponent_Template_video_error_5_listener() {
          return ctx.onMediaLoadError("video", 0);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "iframe", 12, 3);
        \u0275\u0275listener("load", function MediaPlayerComponent_Template_iframe_load_7_listener() {
          return ctx.onWebpageLoad(0);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, MediaPlayerComponent_Conditional_9_Template, 1, 3, "plugin-embed", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9, 4)(12, "img", 14, 5);
        \u0275\u0275listener("load", function MediaPlayerComponent_Template_img_load_12_listener() {
          return ctx.onMediaLoadSuccess(1);
        })("error", function MediaPlayerComponent_Template_img_error_12_listener() {
          return ctx.onMediaLoadError("image", 1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "video", 15, 6);
        \u0275\u0275listener("loadeddata", function MediaPlayerComponent_Template_video_loadeddata_14_listener() {
          return ctx.onMediaLoadSuccess(1);
        })("error", function MediaPlayerComponent_Template_video_error_14_listener() {
          return ctx.onMediaLoadError("video", 1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "iframe", 16, 7);
        \u0275\u0275listener("load", function MediaPlayerComponent_Template_iframe_load_16_listener() {
          return ctx.onWebpageLoad(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, MediaPlayerComponent_Conditional_18_Template, 1, 3, "plugin-embed", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, MediaPlayerComponent_Conditional_19_Template, 7, 28);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background", ctx.controls() && !ctx.transparent() ? "#212121" : "");
        \u0275\u0275classProp("bg-black", !ctx.controls() && !ctx.transparent());
        \u0275\u0275advance();
        \u0275\u0275classProp("invisible", !ctx.in_animation() && (ctx.active_output() !== 0 || ctx.defer_reveal() && ctx.pending_output() === 0))("z-10", ctx.active_output() === 0)("z-0", ctx.active_output() !== 0)("opacity-0", ctx.active_output() !== 0 || ctx.defer_reveal() && ctx.pending_output() === 0);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.output_plugins()[0] ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("invisible", !ctx.in_animation() && (ctx.active_output() !== 1 || ctx.defer_reveal() && ctx.pending_output() === 1))("z-10", ctx.active_output() === 1)("z-0", ctx.active_output() !== 1)("opacity-0", ctx.active_output() !== 1 || ctx.defer_reveal() && ctx.pending_output() === 1);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.output_plugins()[1] ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.controls() ? 19 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      DebugOverlayComponent,
      PlaylistDisplayComponent,
      IconComponent,
      MediaControlsComponent,
      TimeControlsComponent,
      PluginEmbedComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: var(--%NS%bg);\n}\n.transparent[_nghost-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=media-player.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaPlayerComponent, [{
    type: Component,
    args: [{ selector: "media-player", host: {
      "[class.transparent]": "transparent()"
    }, template: `
        <div
            class="absolute inset-0"
            [class.bg-black]="!controls() && !transparent()"
            [style.background]="controls() && !transparent() ? '#212121' : ''"
        >
            <div
                #media_container_0
                class="pointer-events-none absolute top-0 left-0 h-full w-full"
                [class.invisible]="
                    !in_animation() &&
                    (active_output() !== 0 ||
                        (defer_reveal() && pending_output() === 0))
                "
                [class.z-10]="active_output() === 0"
                [class.z-0]="active_output() !== 0"
                [class.opacity-0]="
                    active_output() !== 0 ||
                    (defer_reveal() && pending_output() === 0)
                "
            >
                <img
                    #img_el_0
                    class="absolute top-0 left-0 hidden h-full w-full object-contain object-center"
                    (load)="onMediaLoadSuccess(0)"
                    (error)="onMediaLoadError('image', 0)"
                />
                <video
                    #video_el_0
                    class="absolute top-0 left-0 hidden h-full w-full object-contain object-center"
                    (loadeddata)="onMediaLoadSuccess(0)"
                    (error)="onMediaLoadError('video', 0)"
                ></video>
                <iframe
                    #web_el_0
                    class="absolute top-0 left-0 hidden h-full w-full border-0"
                    (load)="onWebpageLoad(0)"
                ></iframe>
                @if (output_plugins()[0]) {
                    <plugin-embed
                        class="absolute top-0 left-0 h-full w-full"
                        [plugin]="output_plugins()[0]"
                        [config]="output_plugin_configs()[0]"
                        [play]="output_plugin_plays()[0]"
                        (loaded)="onPluginLoad(0)"
                        (statusChange)="onPluginStatus($event, 0)"
                        (plugin_interaction)="onPluginInteraction($event, 0)"
                        (plugin_error)="onPluginError($event, 0)"
                    />
                }
            </div>
            <div
                #media_container_1
                class="pointer-events-none absolute top-0 left-0 h-full w-full"
                [class.invisible]="
                    !in_animation() &&
                    (active_output() !== 1 ||
                        (defer_reveal() && pending_output() === 1))
                "
                [class.z-10]="active_output() === 1"
                [class.z-0]="active_output() !== 1"
                [class.opacity-0]="
                    active_output() !== 1 ||
                    (defer_reveal() && pending_output() === 1)
                "
            >
                <img
                    #img_el_1
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                    (load)="onMediaLoadSuccess(1)"
                    (error)="onMediaLoadError('image', 1)"
                />
                <video
                    #video_el_1
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                    (loadeddata)="onMediaLoadSuccess(1)"
                    (error)="onMediaLoadError('video', 1)"
                ></video>
                <iframe
                    #web_el_1
                    class="absolute top-0 left-0 h-full w-full border-0"
                    (load)="onWebpageLoad(1)"
                ></iframe>
                @if (output_plugins()[1]) {
                    <plugin-embed
                        class="absolute top-0 left-0 h-full w-full"
                        [plugin]="output_plugins()[1]"
                        [config]="output_plugin_configs()[1]"
                        [play]="output_plugin_plays()[1]"
                        (loaded)="onPluginLoad(1)"
                        (statusChange)="onPluginStatus($event, 1)"
                        (plugin_interaction)="onPluginInteraction($event, 1)"
                        (plugin_error)="onPluginError($event, 1)"
                    />
                }
            </div>
            @if (controls()) {
                <debug-overlay
                    [overlay_id]="can_close() ? 'override-time' : 'player-time'"
                    [editing]="layout_editing()"
                    [reset_count]="layout_reset_count()"
                    label="debug time"
                    icon="event"
                    [initial_position]="{ x: 0.01, y: 0.01 }"
                >
                    <time-controls />
                </debug-overlay>
                <debug-overlay
                    [overlay_id]="
                        can_close() ? 'override-playback' : 'player-playback'
                    "
                    [editing]="layout_editing()"
                    [reset_count]="layout_reset_count()"
                    label="playback controls"
                    icon="play_circle"
                    [initial_position]="{ x: 0.5, y: 0.99 }"
                >
                    <media-controls
                        [state]="state()"
                        [loop]="loop()"
                        [muted]="muted()"
                        [shuffle]="shuffle()"
                        [progress]="progress()"
                        [duration]="duration()"
                        [playback_start]="progress_start()"
                        [playback_duration]="progress_duration()"
                        [animating]="in_animation()"
                        [loading]="waiting_for_item()"
                        (event)="handleControlEvent($event)"
                    />
                </debug-overlay>
                @if (can_close()) {
                    <debug-overlay
                        overlay_id="override-details"
                        [editing]="layout_editing()"
                        [reset_count]="layout_reset_count()"
                        label="override details"
                        icon="priority_high"
                        [initial_position]="{ x: 0.5, y: 0.01 }"
                    >
                        <div
                            class="border-base-200 bg-base-100 flex items-center space-x-4 rounded-full border p-2"
                        >
                            <h2 class="max-w-[30vw] truncate py-2 pl-4">
                                {{
                                    playlist_items[0]?.playlist_name ||
                                        'Unknown'
                                }}
                            </h2>
                            <div
                                class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                            >
                                Override
                            </div>
                            <button
                                icon
                                default
                                matRipple
                                (click)="closed.emit()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </debug-overlay>
                }
                <debug-overlay
                    [overlay_id]="
                        can_close() ? 'override-playlist' : 'player-playlist'
                    "
                    [editing]="layout_editing()"
                    [reset_count]="layout_reset_count()"
                    label="playlist"
                    icon="queue_music"
                    [initial_position]="{ x: 0.99, y: 0.01 }"
                >
                    <playlist-display
                        [index]="index()"
                        [playlist]="playlist_items"
                        (selected)="setPlaylistItem($event)"
                    />
                </debug-overlay>
            }
        </div>
    `, imports: [
      MatRippleModule,
      DebugOverlayComponent,
      PlaylistDisplayComponent,
      IconComponent,
      MediaControlsComponent,
      TimeControlsComponent,
      PluginEmbedComponent
    ], styles: ["/* angular:styles/component:css;5613b9902f7eaff64fa7b47128753d0c0992f47947c9fe3653769f5bfd4edb00;/home/runner/work/user-interfaces/user-interfaces/apps/signage/src/app/media-player.component.ts */\n:host {\n  display: block;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: var(--bg);\n}\n:host(.transparent) {\n  background: transparent;\n}\n/*# sourceMappingURL=media-player.component.css.map */\n"] }]
  }], null, { playlist: [{ type: Input, args: [{ isSignal: true, alias: "playlist", required: false }] }], controls: [{ type: Input, args: [{ isSignal: true, alias: "controls", required: false }] }], layout_editing: [{ type: Input, args: [{ isSignal: true, alias: "layout_editing", required: false }] }], layout_reset_count: [{ type: Input, args: [{ isSignal: true, alias: "layout_reset_count", required: false }] }], transparent: [{ type: Input, args: [{ isSignal: true, alias: "transparent", required: false }] }], override: [{ type: Input, args: [{ isSignal: true, alias: "override", required: false }] }], can_close: [{ type: Input, args: [{ isSignal: true, alias: "can_close", required: false }] }], loop: [{ type: Input, args: [{ isSignal: true, alias: "loop", required: false }] }, { type: Output, args: ["loopChange"] }], shuffle: [{ type: Input, args: [{ isSignal: true, alias: "shuffle", required: false }] }, { type: Output, args: ["shuffleChange"] }], indexInput: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], animation_time: [{ type: Input, args: [{ isSignal: true, alias: "animation_time", required: false }] }], mutedInput: [{ type: Input, args: [{ isSignal: true, alias: "muted", required: false }] }], stateInput: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false }] }], stateChange: [{ type: Output, args: ["stateChange"] }], indexChange: [{ type: Output, args: ["indexChange"] }], mutedChange: [{ type: Output, args: ["mutedChange"] }], playing_id: [{ type: Output, args: ["playing_id"] }], event: [{ type: Output, args: ["event"] }], closed: [{ type: Output, args: ["closed"] }], _container_0: [{ type: ViewChild, args: ["media_container_0", { isSignal: true }] }], _container_1: [{ type: ViewChild, args: ["media_container_1", { isSignal: true }] }], _image_element_0: [{ type: ViewChild, args: ["img_el_0", { isSignal: true }] }], _image_element_1: [{ type: ViewChild, args: ["img_el_1", { isSignal: true }] }], _video_element_0: [{ type: ViewChild, args: ["video_el_0", { isSignal: true }] }], _video_element_1: [{ type: ViewChild, args: ["video_el_1", { isSignal: true }] }], _web_element_0: [{ type: ViewChild, args: ["web_el_0", { isSignal: true }] }], _web_element_1: [{ type: ViewChild, args: ["web_el_1", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaPlayerComponent, { className: "MediaPlayerComponent", filePath: "apps/signage/src/app/media-player.component.ts", lineNumber: 270 });
})();

// apps/signage/src/app/diagnostics.ts
function registerSignageDiagnostics(actions) {
  const api = {
    state: () => {
      const state = actions.getState();
      logState(state);
      return state;
    },
    json: () => JSON.stringify(actions.getState(), null, 2),
    poll: () => actions.poll(),
    reload: () => (actions.reload || (() => location.reload()))()
  };
  window.signage = api;
  return () => {
    if (window.signage === api)
      delete window.signage;
  };
}
function logState(state) {
  console.groupCollapsed(`%cPlaceOS Signage%c ${state.display_id || "no display"}`, "font-weight:bold", "font-weight:normal;opacity:0.6");
  for (const [key, value] of Object.entries(state)) {
    const is_row_list = Array.isArray(value) && value.length > 0 && typeof value[0] === "object";
    if (is_row_list) {
      console.groupCollapsed(`${key} (${value.length})`);
      console.table(value);
      console.groupEnd();
    } else {
      console.log(`${key}:`, value);
    }
  }
  console.groupEnd();
}

// apps/signage/src/app/cron-helpers.ts
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
function cronNumber(value, min, max) {
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
      const [start, end] = part.split("-").map((_) => cronNumber(_, 0, 6));
      if (start === null || end === null || start > end)
        return [];
      for (let day = start; day <= end; day++)
        days.add(day);
    } else {
      const day = cronNumber(part, 0, 6);
      if (day === null)
        return [];
      days.add(day);
    }
  }
  return [...days];
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
  return [...weeks];
}
function isCronMonthlyWeekday(day_of_month_part, day_of_week_part) {
  return !!parseCronWeeksOfMonth(day_of_month_part).length && !!parseCronWeekdays(day_of_week_part).length;
}
function doesCronMatchDate(cron_parts, date) {
  const [minute_part, hour_part, day_of_month_part, month_part, day_of_week_part] = cron_parts;
  if (!matchesCronPart(date.getMinutes(), minute_part))
    return false;
  if (!matchesCronPart(date.getHours(), hour_part))
    return false;
  if (!matchesCronPart(date.getMonth() + 1, month_part))
    return false;
  const day_of_month_matches = matchesCronPart(date.getDate(), day_of_month_part);
  const day_of_week_matches = matchesCronPart(date.getDay(), day_of_week_part);
  if (day_of_month_part === "*" && day_of_week_part === "*")
    return true;
  if (day_of_month_part !== "*" && day_of_week_part === "*") {
    return day_of_month_matches;
  }
  if (day_of_month_part === "*" && day_of_week_part !== "*") {
    return day_of_week_matches;
  }
  if (isCronMonthlyWeekday(day_of_month_part, day_of_week_part)) {
    return day_of_month_matches && day_of_week_matches;
  }
  return day_of_month_matches || day_of_week_matches;
}
function cronParts(cron_string) {
  const parts = cron_string.trim().split(/\s+/);
  if (parts.length !== 5) {
    throw new Error("Invalid CRON string: Must have 5 parts.");
  }
  return parts;
}
function hasPlayableScheduleMask({ mask = "", valid_from }) {
  return !mask || mask.length <= 128 && !/[^01]/.test(mask) && mask.includes("1") && Number.isFinite(valid_from) && valid_from > 0 && Number.isFinite(new Date(valid_from * 1e3).getTime());
}
var MASK_FILTER_CACHE = /* @__PURE__ */ new Map();
function createScheduleMaskFilter(cron, schedule) {
  const { mask = "", valid_from = 0 } = schedule;
  const anchor = valid_from * 1e3;
  if (!hasPlayableScheduleMask(schedule))
    return () => false;
  if (!mask)
    return (date) => !anchor || date.getTime() >= anchor;
  const key = JSON.stringify([cron, mask, valid_from]);
  const cached = MASK_FILTER_CACHE.get(key);
  if (cached)
    return cached;
  const parts = cronParts(cron);
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    if (!matchesCronPart(hour, parts[1]))
      continue;
    for (let minute = 0; minute < 60; minute++) {
      if (matchesCronPart(minute, parts[0]))
        slots.push(hour * 60 + minute);
    }
  }
  const calendar_parts = ["*", "*", ...parts.slice(2)];
  const first_day = new Date(anchor);
  first_day.setHours(0, 0, 0, 0);
  const month_totals = /* @__PURE__ */ new Map();
  const countBefore = (day, before) => {
    if (!slots.length || day.getTime() + 2 * 864e5 < anchor)
      return 0;
    if (!doesCronMatchDate(calendar_parts, day))
      return 0;
    const next_day = new Date(day);
    next_day.setDate(next_day.getDate() + 1);
    if (next_day.getTime() <= anchor)
      return 0;
    if (day.getTime() >= anchor && next_day.getTime() <= before && next_day.getTime() - day.getTime() === 864e5)
      return slots.length;
    let count = 0;
    for (const slot of slots) {
      const occurrence = new Date(day);
      occurrence.setHours(0, slot, 0, 0);
      if (occurrence.getHours() * 60 + occurrence.getMinutes() !== slot)
        continue;
      const timestamp = occurrence.getTime();
      if (timestamp >= anchor && timestamp < before)
        count++;
    }
    return count;
  };
  const monthTotals = (year, month) => {
    const key2 = year * 12 + month;
    const cached2 = month_totals.get(key2);
    if (cached2)
      return cached2;
    const days = new Date(year, month + 1, 0).getDate();
    const totals = [0];
    for (let day = 1; day <= days; day++) {
      totals.push((totals[day - 1] + countBefore(new Date(year, month, day), Infinity)) % mask.length);
    }
    if (month_totals.size >= 256)
      month_totals.clear();
    month_totals.set(key2, totals);
    return totals;
  };
  const first_month = first_day.getFullYear() * 12 + first_day.getMonth();
  const allows = (date) => {
    const timestamp = date.getTime();
    if (!Number.isFinite(timestamp) || timestamp < anchor)
      return false;
    const day = new Date(date);
    day.setHours(0, 0, 0, 0);
    const current_month = day.getFullYear() * 12 + day.getMonth();
    let preceding = 0;
    for (let month = first_month; month < current_month; month++) {
      const totals2 = monthTotals(Math.floor(month / 12), month % 12);
      preceding = (preceding + totals2[totals2.length - 1]) % mask.length;
    }
    const totals = monthTotals(day.getFullYear(), day.getMonth());
    const index = (preceding + totals[day.getDate() - 1] + countBefore(day, timestamp)) % mask.length;
    return mask[index] === "1";
  };
  if (MASK_FILTER_CACHE.size >= 128)
    MASK_FILTER_CACHE.clear();
  MASK_FILTER_CACHE.set(key, allows);
  return allows;
}
var MIN_CACHEABLE_SEARCH_LIMIT_SECONDS = 60;
var CRON_LOOKUP_CACHE = /* @__PURE__ */ new Map();
var cron_lookup_second = 0;
function cachedCronLookup(key, now, search_limit_in_seconds, lookup) {
  if (search_limit_in_seconds < MIN_CACHEABLE_SEARCH_LIMIT_SECONDS) {
    return lookup();
  }
  const second = Math.floor(now / 1e3);
  if (second !== cron_lookup_second) {
    CRON_LOOKUP_CACHE.clear();
    cron_lookup_second = second;
  }
  if (CRON_LOOKUP_CACHE.has(key))
    return CRON_LOOKUP_CACHE.get(key);
  const result = lookup();
  CRON_LOOKUP_CACHE.set(key, result);
  return result;
}
function getNextCronRunTimestampInRange(cron_string, search_limit_in_seconds, now = Date.now(), schedule = {}) {
  const parts = cronParts(cron_string);
  if (!hasPlayableScheduleMask(schedule))
    return null;
  const allows = createScheduleMaskFilter(cron_string, schedule);
  const mask_key = JSON.stringify([schedule.valid_from, schedule.mask]);
  const key = `next|${cron_string}|${search_limit_in_seconds}|${mask_key}`;
  return cachedCronLookup(key, now, search_limit_in_seconds, () => {
    const searchLimitDate = new Date(now + search_limit_in_seconds * 1e3);
    const start_time = new Date(now);
    start_time.setSeconds(0, 0);
    start_time.setMinutes(start_time.getMinutes() + 1);
    const current_date = new Date(start_time.getTime());
    while (current_date <= searchLimitDate) {
      if (doesCronMatchDate(parts, current_date) && allows(current_date)) {
        return Math.floor(current_date.getTime() / 1e3);
      }
      current_date.setMinutes(current_date.getMinutes() + 1);
    }
    return null;
  });
}
function getLastCronRunTimestampInRange(cron_string, search_limit_in_seconds, now = Date.now(), schedule = {}) {
  const parts = cronParts(cron_string);
  if (!hasPlayableScheduleMask(schedule))
    return null;
  const allows = createScheduleMaskFilter(cron_string, schedule);
  const mask_key = JSON.stringify([schedule.valid_from, schedule.mask]);
  const key = `last|${cron_string}|${search_limit_in_seconds}|${mask_key}`;
  return cachedCronLookup(key, now, search_limit_in_seconds, () => {
    const search_limit_date = new Date(now - search_limit_in_seconds * 1e3);
    const current_date = new Date(now);
    current_date.setSeconds(0, 0);
    while (current_date >= search_limit_date) {
      if (doesCronMatchDate(parts, current_date)) {
        return allows(current_date) ? Math.floor(current_date.getTime() / 1e3) : null;
      }
      const previous = current_date.getTime();
      current_date.setMinutes(current_date.getMinutes() - 1);
      if (current_date.getTime() >= previous) {
        current_date.setTime(previous - 6e4);
      }
    }
    return null;
  });
}

// apps/signage/src/app/signage.service.ts
var SCHEDULE_TICK_MS = 15 * SECONDS;
var MIN_SCHEDULE_TICK_MS = 250;
var DISPLAY_KEY = "PlaceOS.SIGNAGE.display_details";
var EMPTY_METRICS = JSON.stringify({
  play_through_counts: {},
  playlist_counts: {},
  media_counts: {}
});
var DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
var SINGLE_PASS_TRIGGER_WINDOW_MS = 30 * 1e3;
var MEDIA_CACHE_LOOK_AHEAD_SECONDS = 24 * 60 * 60;
var MEDIA_RECOVERY_INTERVAL_MS = 15 * SECONDS;
var POLL_INTERVAL_MS = 1 * MINUTES;
var DISPLAY_FETCH_TIMEOUT_MS = 30 * SECONDS;
var POLL_WATCHDOG_MS = 3 * MINUTES;
var CACHE_RETRY_BASE_MS = 15 * SECONDS;
var CACHE_RETRY_MAX_MS = 5 * MINUTES;
var MEDIA_CACHE_WAIT_MS = 20 * SECONDS;
var MEDIA_SYNC_TIMEOUT_MS = 30 * MINUTES;
var log3 = scoped_log("Signage");
function asTime(value) {
  return value ? new Date(value).toISOString() : "never";
}
function mediaSummary(item) {
  return {
    id: item.id,
    name: item.name,
    type: item.type,
    playlist: item.playlist_name || item.playlist,
    duration_ms: item.duration,
    url: item.url,
    cached: item.isCached ? item.isCached() : null,
    loading: item.isLoading ? item.isLoading() : null,
    valid_from: asTime((item.valid_from || 0) * 1e3),
    valid_until: asTime((item.valid_until || 0) * 1e3),
    validity: item.validity,
    invalid_reason: validateMedia(item) || null
  };
}
function signageDisplayIDFromURL(url = "") {
  if (!url)
    return "";
  try {
    const parsed_url = new URL(url, location.href);
    const route = parsed_url.hash?.startsWith("#/") ? parsed_url.hash.slice(1) : parsed_url.pathname;
    const match = route.match(/(?:^|\/)signage\/([^/?#]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  } catch {
    return "";
  }
}
function isNestedPlayerWindow() {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}
function displayCacheKey(id) {
  return `${DISPLAY_KEY}.${id}`;
}
function displayRequestURL(id, query_params) {
  const query_string = Object.entries(query_params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&");
  return `${u()}/signage/${id}${query_string ? `?${query_string}` : ""}`;
}
function playlistSchedules(playlist) {
  return playlist.schedules || [];
}
function playlistPlayPeriodMinutes(schedule) {
  return Number.isFinite(schedule.play_period) ? Math.max(0, schedule.play_period) : DEFAULT_PLAY_PERIOD_MINUTES;
}
function parsePlayAtTimestamp(value) {
  if (!Number.isFinite(value) || value <= 0)
    return 0;
  return value * 1e3;
}
function parseValidUntilTimestamp(value) {
  if (!Number.isFinite(value) || !value || value <= 0)
    return 0;
  return value * 1e3;
}
function capScheduleEnd(value, valid_until) {
  if (!valid_until)
    return value;
  return value ? Math.min(value, valid_until) : valid_until;
}
function scheduledPlaylistEnd(starts_at, period_minutes) {
  return period_minutes ? starts_at + period_minutes * 60 * 1e3 : starts_at + SINGLE_PASS_TRIGGER_WINDOW_MS;
}
function scheduledPlaylistExpiry(starts_at, period_minutes) {
  return period_minutes ? starts_at + period_minutes * 60 * 1e3 : 0;
}
function scheduledPlaylistWindow(schedule, now = time(), trigger_window_seconds = 0) {
  const period_minutes = playlistPlayPeriodMinutes(schedule);
  const window_seconds = trigger_window_seconds || period_minutes * 60;
  const valid_until = parseValidUntilTimestamp(schedule.valid_until);
  if (!hasPlayableScheduleMask(schedule))
    return null;
  if (valid_until && now > valid_until)
    return null;
  if (schedule.play_at) {
    const starts_at = parsePlayAtTimestamp(schedule.play_at);
    if (!starts_at || starts_at < (schedule.valid_from || 0) * 1e3 || schedule.mask && schedule.mask[0] !== "1")
      return null;
    const ends_at = capScheduleEnd(scheduledPlaylistEnd(starts_at, period_minutes), valid_until);
    const expires_at = capScheduleEnd(scheduledPlaylistExpiry(starts_at, period_minutes), valid_until);
    return now >= starts_at && now <= ends_at ? { starts_at, ends_at, expires_at } : null;
  }
  if (schedule.play_cron?.trim()) {
    try {
      const last = getLastCronRunTimestampInRange(schedule.play_cron, Math.max(window_seconds, 30), now, schedule);
      if (!last)
        return null;
      const starts_at = last * 1e3;
      const ends_at = capScheduleEnd(scheduledPlaylistEnd(starts_at, period_minutes), valid_until);
      const expires_at = capScheduleEnd(scheduledPlaylistExpiry(starts_at, period_minutes), valid_until);
      return now <= ends_at ? { starts_at, ends_at, expires_at } : null;
    } catch {
      return null;
    }
  }
  return null;
}
function activePlaylistSchedules(playlist, now = time(), trigger_window_seconds = 0) {
  return playlistSchedules(playlist).map((schedule, index) => {
    const window2 = scheduledPlaylistWindow(schedule, now, trigger_window_seconds);
    return window2 ? __spreadProps(__spreadValues({
      playlist,
      schedule
    }, window2), {
      key: `${playlist.id}:${index}:${window2.starts_at}`
    }) : null;
  }).filter((_) => !!_);
}
function activePlaylistSchedule(playlist, now = time(), trigger_window_seconds = 0) {
  return activePlaylistSchedules(playlist, now, trigger_window_seconds)[0];
}
function nextScheduledPlaylistStart(schedule, now, horizon_seconds) {
  const valid_until = parseValidUntilTimestamp(schedule.valid_until);
  if (!hasPlayableScheduleMask(schedule))
    return 0;
  if (valid_until && now > valid_until)
    return 0;
  if (schedule.play_at) {
    const starts_at = parsePlayAtTimestamp(schedule.play_at);
    if (!starts_at || starts_at <= now || starts_at < (schedule.valid_from || 0) * 1e3 || schedule.mask && schedule.mask[0] !== "1")
      return 0;
    if (valid_until && starts_at > valid_until)
      return 0;
    return starts_at <= now + horizon_seconds * 1e3 ? starts_at : 0;
  }
  if (schedule.play_cron?.trim()) {
    try {
      const next = getNextCronRunTimestampInRange(schedule.play_cron, horizon_seconds, now, schedule);
      const starts_at = next ? next * 1e3 : 0;
      return valid_until && starts_at > valid_until ? 0 : starts_at;
    } catch {
      return 0;
    }
  }
  return 0;
}
function playlistStartsWithin(playlist, now, horizon_seconds) {
  return playlistSchedules(playlist).some((schedule) => nextScheduledPlaylistStart(schedule, now, horizon_seconds));
}
function templateMappingCreatedAt(mapping) {
  const created_at = Date.parse(mapping.created_at);
  return Number.isFinite(created_at) ? created_at : 0;
}
var SignageService = class _SignageService extends AsyncHandler {
  setDisplay(system_id) {
    if (system_id !== this._display()) {
      this._etag = "";
      this._last_modified = "";
    }
    this._display.set(system_id);
    this._poll();
    this._scheduleTick();
  }
  constructor() {
    super();
    this._media_cache = inject(MediaCacheService);
    this.debug = signal(
      false,
      ...ngDevMode ? [{ debugName: "debug" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playing_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "playing_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display = signal(
      "",
      ...ngDevMode ? [{ debugName: "_display" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_data = signal(
      null,
      ...ngDevMode ? [{ debugName: "_display_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._tick = signal(
      0,
      ...ngDevMode ? [{ debugName: "_tick" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_signature = "";
    this._etag = "";
    this._last_modified = "";
    this._media_signature = "";
    this._media_sync_in_flight = false;
    this._media_sync_started = 0;
    this._media_sync_queued = false;
    this._cache_retry_attempt = 0;
    this._poll_in_flight = false;
    this._last_poll_attempt = 0;
    this._last_poll_success = 0;
    this._media_recovery = /* @__PURE__ */ new Map();
    this._playlists = [];
    this._last_playlist = [];
    this._last_override_playlists = [];
    this._metrics = {
      play_through_counts: {},
      playlist_counts: {},
      media_counts: {}
    };
    this._completed_schedule_overrides = /* @__PURE__ */ new Set();
    this.override_playlist = signal(
      {
        ends_at: 0,
        playlist: []
      },
      ...ngDevMode ? [{ debugName: "override_playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display = this._display_data.asReadonly();
    this.active_templates = computed(() => {
      this._tick();
      const mappings = this._display_data()?.template_schedules;
      if (!Array.isArray(mappings))
        return [];
      const defaults = mappings.filter((mapping) => mapping?.template_id && !mapping.schedule);
      const scheduled = mappings.map((mapping, index) => {
        if (!mapping?.template_id || !mapping.schedule)
          return null;
        const window2 = scheduledPlaylistWindow(mapping.schedule);
        return window2 ? { mapping, index, starts_at: window2.starts_at } : null;
      }).filter((item) => !!item).sort((a, b) => a.starts_at - b.starts_at || templateMappingCreatedAt(a.mapping) - templateMappingCreatedAt(b.mapping) || b.index - a.index);
      return [...defaults, ...scheduled.map(({ mapping }) => mapping)];
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "active_templates" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (previous, current) => previous.length === current.length && previous.every((mapping, index) => mapping === current[index]) }));
    this.playlist = computed(
      () => {
        this._tick();
        const item = this._display_data();
        try {
          if (!item?.id || !item.playlist_mappings?.[item.id]) {
            return this._last_playlist;
          }
          const playlists = this._mappedPlaylistIds(item);
          this._setActivePlaylistConfigs(item, playlists);
          const media = this._getPlaylistMedia(item, playlists, (p) => p.enabled && (!playlistSchedules(p).length || activePlaylistSchedules(p).some(({ schedule }) => !schedule.play_takeover)));
          this._last_playlist = media;
          return media;
        } catch (e) {
          log3.error("Failed to build playlist; keeping last known playlist.", e);
          return this._last_playlist;
        }
      },
      ...ngDevMode ? [{ debugName: "playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.override_playlists = computed(
      () => {
        const item = this._display_data();
        try {
          if (!item?.id || !item.playlist_mappings?.[item.id]) {
            return this._last_override_playlists;
          }
          const playlists = this._mappedPlaylistIds(item);
          this._setActivePlaylistConfigs(item, playlists);
          const filtered = playlists.filter((id) => this._isOverridePlaylist(item, id));
          this._last_override_playlists = filtered;
          return filtered;
        } catch (e) {
          log3.error("Failed to build override playlists.", e);
          return this._last_override_playlists;
        }
      },
      ...ngDevMode ? [{ debugName: "override_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_poll_attempt = Date.now();
    this._startPolling();
    this.interval("metrics", () => this._postMetrics(), 10 * MINUTES);
    this._scheduleTick();
  }
  _startPolling() {
    this.interval("poll", () => this._poll(), POLL_INTERVAL_MS);
  }
  /**
   * Runs one poll of the display details. Nothing here is allowed to stop
   * future polls: errors are logged rather than thrown, a single attempt is
   * bounded by the fetch timeout, and an attempt that somehow outlives that
   * is abandoned instead of blocking the slot forever.
   */
  async _poll() {
    const now = Date.now();
    if (this._poll_in_flight) {
      if (now - this._last_poll_attempt < DISPLAY_FETCH_TIMEOUT_MS * 2) {
        return;
      }
      log3.warn("Previous display poll never finished. Starting another.");
    }
    this._poll_in_flight = true;
    this._last_poll_attempt = now;
    recordHeartbeat("poll");
    try {
      await this._reloadDisplay();
      this._last_poll_success = Date.now();
    } catch (e) {
      log3.error("Display poll failed.", e);
    } finally {
      this._poll_in_flight = false;
    }
  }
  /**
   * Rebuilds the poll timer if it has stopped firing. Runs from the schedule
   * tick, which is a separate timer chain, so the two cannot fail together.
   */
  _checkPollHealth() {
    if (!this._display())
      return;
    if (Date.now() - this._last_poll_attempt < POLL_WATCHDOG_MS)
      return;
    log3.error("Display polling has stopped. Restarting it.", {
      last_attempt: this._last_poll_attempt,
      last_success: this._last_poll_success
    });
    this._poll_in_flight = false;
    this._startPolling();
    this._poll();
  }
  /** Rejects if `promise` has not settled within `timeout_ms` */
  _withTimeout(promise, timeout_ms) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Display request timed out")), timeout_ms);
      promise.then((value) => {
        clearTimeout(timer);
        resolve(value);
      }, (error) => {
        clearTimeout(timer);
        reject(error);
      });
    });
  }
  /** Re-fetch the active display details and refresh derived player state. */
  async _reloadDisplay() {
    const id = this._display();
    if (!id)
      return;
    const value = await this._fetchDisplay(id);
    if (value === null)
      return;
    const display_signature = `${id}:${JSON.stringify(value || {})}`;
    if (display_signature === this._display_signature && this._display_data()) {
      return;
    }
    const display = this._parseDisplay(value);
    display.plugins = await this._withTimeout(this._resolveDisplayPlugins(display), DISPLAY_FETCH_TIMEOUT_MS).catch((e) => {
      log3.warn("Failed to resolve display plugins.", e);
      return display.plugins || [];
    });
    this._display_data.set(display);
    try {
      this._bindTriggers(display);
    } catch (e) {
      log3.error("Failed to bind display triggers.", e);
    }
    this._syncMediaCache(display);
    this._checkScheduledOverrides(display, this.override_playlists());
    this._display_signature = display_signature;
  }
  async _fetchDisplay(id) {
    const query_params = oi({
      preview: this.debug() || void 0,
      item_id: this.playing_id()
    }, [void 0, null, ""]);
    const headers = {};
    if (this._etag)
      headers["If-None-Match"] = this._etag;
    if (this._last_modified) {
      headers["If-Modified-Since"] = this._last_modified;
    }
    const request_options = {
      headers,
      cache: "no-store"
    };
    let d;
    try {
      d = await this._withTimeout(Uh(id, query_params, request_options), DISPLAY_FETCH_TIMEOUT_MS);
      const response_headers = zi(displayRequestURL(id, query_params));
      this._etag = response_headers.etag || "";
      this._last_modified = response_headers["last-modified"] || "";
    } catch (e) {
      if (e instanceof Response && e.status === 304)
        return null;
      log3.warn("Failed to fetch display details.", e);
    }
    if (!d) {
      const display_key = displayCacheKey(id);
      d = JSON.parse(localStorage.getItem(display_key) || localStorage.getItem(DISPLAY_KEY) || "{}");
      if (d.id !== id)
        d = {};
    }
    if (d.id === id) {
      localStorage.setItem(displayCacheKey(id), JSON.stringify(d));
    }
    return d;
  }
  _bindTriggers(display) {
    const triggers = Object.keys(display.playlist_mappings || {}).filter((_) => _.startsWith("trig-"));
    this.unsubWith("trigger_");
    const mod = Dd(display.id, "_TRIGGER__1");
    for (const id of triggers) {
      const binding = mod.variable(id);
      this.subscription(`trigger_listen-${id}`, binding.bindThenSubscribe(() => this._handleTrigger(id)));
    }
  }
  /**
   * Re-evaluate time-based schedules on a recurring timer, speeding up when
   * debug time is fast-forwarding so scheduled playlists activate on time.
   */
  _scheduleTick() {
    const { active, speed } = mockTimeState();
    const effective_speed = active && speed > 1 ? speed : 1;
    const delay2 = Math.max(MIN_SCHEDULE_TICK_MS, Math.min(SCHEDULE_TICK_MS, SCHEDULE_TICK_MS / effective_speed));
    this.timeout("schedule_tick", () => {
      try {
        recordHeartbeat("schedule");
        this._checkPollHealth();
        this._tick.update((_) => _ + 1);
        const display = this._display_data();
        if (display) {
          this._checkScheduledOverrides(display, this.override_playlists());
          this._checkMediaCache(display);
        }
      } catch (e) {
        log3.error("Failed to evaluate playlist schedules.", e);
      } finally {
        this._scheduleTick();
      }
    }, delay2);
  }
  /** Force an immediate display refresh. Exposed for diagnostics. */
  refresh() {
    return this._poll();
  }
  /** Snapshot of the player's scheduling and caching state, for diagnostics */
  diagnostics() {
    const display = this._display_data();
    const override = this.override_playlist();
    return {
      display_id: this._display(),
      display_name: display?.name || "",
      debug: this.debug(),
      playing_id: this.playing_id(),
      poll: {
        interval_ms: POLL_INTERVAL_MS,
        in_flight: this._poll_in_flight,
        last_attempt: asTime(this._last_poll_attempt),
        last_success: asTime(this._last_poll_success),
        next_due: asTime(this._last_poll_attempt + POLL_INTERVAL_MS)
      },
      schedule: {
        tick_interval_ms: SCHEDULE_TICK_MS,
        mock_time: mockTimeState(),
        now: asTime(time())
      },
      playlists: {
        mapped: display?.playlist_mappings?.[display?.id] ? this._mappedPlaylistIds(display) : [],
        active: this._activePlaylistSummary(display),
        takeover: {
          ends_at: asTime(override.ends_at),
          schedule_keys: override.schedule_keys || [],
          media: override.playlist.map(mediaSummary)
        }
      },
      active_media: this.playlist().map(mediaSummary),
      upcoming_schedules: this._upcomingSchedules(display),
      media_cache: __spreadProps(__spreadValues({}, this._media_cache.cacheState(this._display())), {
        sync_in_flight: this._media_sync_in_flight,
        sync_started: asTime(this._media_sync_started),
        sync_queued: this._media_sync_queued,
        failed_sync_attempts: this._cache_retry_attempt
      }),
      media_signature: this._media_signature,
      watchdog: watchdogState()
    };
  }
  _activePlaylistSummary(display) {
    if (!display?.playlist_mappings?.[display.id])
      return [];
    const now = time();
    return this._mappedPlaylistIds(display).map((id) => this._playlistConfig(display, id)?.[0]).filter((_) => !!_).map((playlist) => {
      const active = activePlaylistSchedule(playlist, now);
      return {
        id: playlist.id,
        name: playlist.name,
        enabled: !!playlist.enabled,
        scheduled: !!playlistSchedules(playlist).length,
        active: !playlistSchedules(playlist).length || !!active,
        takeover: !!active?.schedule?.play_takeover,
        started_at: asTime(active?.starts_at || 0),
        expires_at: asTime(active?.expires_at || 0)
      };
    });
  }
  /** Every upcoming scheduled run within the next month, soonest first */
  _upcomingSchedules(display) {
    if (!display?.playlist_mappings?.[display.id])
      return [];
    const now = time();
    const horizon = 31 * 24 * 60 * 60;
    const entries = [];
    for (const id of this._mappedPlaylistIds(display)) {
      const playlist = this._playlistConfig(display, id)?.[0];
      if (!playlist?.enabled)
        continue;
      playlistSchedules(playlist).forEach((schedule, index) => {
        const starts_at = nextScheduledPlaylistStart(schedule, now, horizon);
        if (!starts_at)
          return;
        const period = playlistPlayPeriodMinutes(schedule);
        entries.push({
          playlist_id: playlist.id,
          playlist_name: playlist.name,
          schedule_index: index,
          takeover: !!schedule.play_takeover,
          play_cron: schedule.play_cron || "",
          play_at: asTime(parsePlayAtTimestamp(schedule.play_at || 0)),
          period_minutes: period,
          starts_at: asTime(starts_at),
          ends_at: period ? asTime(starts_at + period * 60 * 1e3) : "single pass"
        });
      });
    }
    return entries.sort((a, b) => a.starts_at.localeCompare(b.starts_at));
  }
  setPlaylistOverride(media, ends_at = 0) {
    this.override_playlist.set({ playlist: media, ends_at });
  }
  clearPlaylistOverride() {
    const { schedule_keys } = this.override_playlist();
    for (const key of schedule_keys || []) {
      this._completed_schedule_overrides.add(key);
    }
    this.override_playlist.set({ playlist: [], ends_at: 0 });
  }
  async storeMetricEvent(event) {
    if (event.type === "media_count") {
      this._incrementMetric(this._metrics.media_counts, event.ref_id);
    } else {
      const playlist = this._playlists.find(({ id }) => id === event.ref_id);
      if (!playlist || !playlist?.random) {
        if (event.type === "playlist_through") {
          this._incrementMetric(this._metrics.play_through_counts, event.ref_id);
        } else if (event.type === "playlist_count") {
          this._incrementMetric(this._metrics.playlist_counts, event.ref_id);
        }
      }
    }
  }
  _postMetrics() {
    this.timeout("post-metrics", async () => {
      if (EMPTY_METRICS === JSON.stringify(this._metrics))
        return;
      const display_id = this._display();
      await v(`/api/engine/v2/signage/${encodeURIComponent(display_id)}/metrics`, this._metrics);
      log3.debug("Posted metrics:", this._metrics);
      this._metrics = {
        play_through_counts: {},
        playlist_counts: {},
        media_counts: {}
      };
    }, randomInt(60));
  }
  _mappedPlaylistIds(display) {
    let playlists = [...display.playlist_mappings[display.id]];
    for (const zone of display.zones || []) {
      if (!display.playlist_mappings[zone])
        continue;
      playlists = playlists.concat(display.playlist_mappings[zone]);
    }
    return playlists;
  }
  _setActivePlaylistConfigs(display, playlist_ids) {
    this._playlists = playlist_ids.map((id) => display.playlist_config?.[id]?.[0]).filter((_) => !!_);
  }
  _isOverridePlaylist(display, id) {
    const playlist = this._playlistConfig(display, id)?.[0];
    return playlist?.enabled && playlistSchedules(playlist).some((schedule) => schedule.play_takeover);
  }
  /**
   * Re-sync the media cache when the set of media the display needs has
   * changed. The display payload does not change when a schedule opens or
   * closes - the clock does - so this runs off the schedule tick.
   */
  _checkMediaCache(display) {
    if (!display?.id || this._mediaSyncInFlight())
      return;
    if (this._mediaSignature(display) === this._media_signature)
      return;
    this._syncMediaCache(display);
  }
  /**
   * Whether a sync is still running. One that has run for far longer than
   * any sync should is treated as lost rather than allowed to block every
   * later sync for the rest of the player's uptime.
   */
  _mediaSyncInFlight() {
    if (!this._media_sync_in_flight)
      return false;
    if (Date.now() - this._media_sync_started < MEDIA_SYNC_TIMEOUT_MS) {
      return true;
    }
    log3.warn("Previous media cache sync never finished. Starting another.");
    return false;
  }
  _mediaSignature(display) {
    const media = [...this._activeCacheableMediaURLs(display)].sort();
    return `${display.id}:${media.join("|")}`;
  }
  async _syncMediaCache(display) {
    if (!display?.id)
      return;
    if (this._mediaSyncInFlight()) {
      this._media_sync_queued = true;
      return;
    }
    this._media_signature = this._mediaSignature(display);
    this._media_sync_in_flight = true;
    this._media_sync_started = Date.now();
    this._media_sync_queued = false;
    try {
      const cache_owner = display.id || "";
      const media = this._activeCacheableMediaURLs(display);
      const known_media = this._cacheableMediaURLs(display);
      const available_media = this._media_cache.availableFiles(cache_owner);
      const extra_media = available_media.filter((url) => !known_media.includes(url));
      const has_failures = await this._media_cache.requestFilesToCache(media, cache_owner, { prune_other_owners: !this._isNestedPlayerWindow() });
      for (const item of extra_media) {
        Promise.resolve(this._media_cache.invalidateFile(item, cache_owner)).catch((e) => log3.warn("Unable to release cached media.", item, e));
      }
      if (has_failures) {
        this._scheduleCacheRetry();
      } else {
        this._cache_retry_attempt = 0;
      }
    } catch (e) {
      log3.error("Media cache sync failed.", e);
      this._scheduleCacheRetry();
    } finally {
      this._media_sync_in_flight = false;
      if (this._media_sync_queued) {
        this._media_sync_queued = false;
        this._syncMediaCache(this._display_data());
      }
    }
  }
  /**
   * Retry after a delay so a transient failure can recover, backing off as
   * failures continue. Without this an offline player retried every download
   * every fifteen seconds for as long as it was offline, which is the one
   * situation where none of them can work.
   */
  _scheduleCacheRetry() {
    this._cache_retry_attempt++;
    const delay2 = Math.min(CACHE_RETRY_BASE_MS * 2 ** (this._cache_retry_attempt - 1), CACHE_RETRY_MAX_MS);
    log3.debug(`Retrying media cache in ${delay2}ms.`);
    this.timeout("retry_cache", () => this._syncMediaCache(this._display_data()), delay2);
  }
  _activeCacheableMediaURLs(display) {
    if (!display?.id || !display.playlist_mappings?.[display.id]) {
      return this._cacheableMediaURLs(display);
    }
    const now = time();
    const playlists = this._mappedPlaylistIds(display);
    const active_media = [
      ...this._getPlaylistMedia(display, playlists, (p) => p.enabled && (!playlistSchedules(p).length || activePlaylistSchedules(p, now).some(({ schedule }) => !schedule.play_takeover))),
      ...this._getPlaylistMedia(display, playlists, (p) => p.enabled && activePlaylistSchedules(p, now).some(({ schedule }) => schedule.play_takeover))
    ];
    const upcoming_media = this._getPlaylistMedia(display, playlists, (p) => p.enabled && playlistStartsWithin(p, now, MEDIA_CACHE_LOOK_AHEAD_SECONDS));
    const urls = [...active_media, ...upcoming_media].filter(({ type }) => type !== "webpage" && type !== "plugin").map(({ url }) => url).filter((_) => !!_);
    return [...new Set(urls)];
  }
  _cacheableMediaURLs(display) {
    return (display.playlist_media || []).filter((item) => {
      const type = item.media_type || item.type;
      return type !== "webpage" && type !== "plugin";
    }).map((item) => item.media_url).filter((_) => !!_);
  }
  _checkScheduledOverrides(display, playlist_ids) {
    const active_schedules = this._activeOverrideSchedules(display, playlist_ids);
    const active_playlists = active_schedules.map(({ playlist }) => playlist);
    if (!active_playlists.length) {
      if (this.override_playlist().schedule_keys?.length) {
        this.override_playlist.set({ playlist: [], ends_at: 0 });
      }
      return;
    }
    if (this._hasCurrentOverrideFor(active_schedules))
      return;
    const media = this._getPlaylistMedia(display, active_playlists.map((_) => _.id));
    const ends_at = this._scheduledOverrideEnd(active_schedules);
    log3.debug("Setting override playlist", media, ends_at || 0);
    this.override_playlist.set({
      playlist: media,
      ends_at,
      schedule_keys: active_schedules.map(({ key }) => key)
    });
  }
  _activeOverrideSchedules(display, playlist_ids) {
    const now = time();
    return playlist_ids.map((id) => this._playlistConfig(display, id)?.[0]).filter((_) => !!_).flatMap((playlist) => activePlaylistSchedules(playlist, now)).filter(({ key }) => !this._completed_schedule_overrides.has(key));
  }
  _hasCurrentOverrideFor(schedules) {
    const existing_keys = this.override_playlist().schedule_keys || [];
    const active_keys = new Set(schedules.map(({ key }) => key));
    return existing_keys.length === active_keys.size && existing_keys.every((key) => active_keys.has(key));
  }
  _scheduledOverrideEnd(schedules) {
    const duration_minutes = schedules.reduce((duration, { schedule }) => Math.max(duration, playlistPlayPeriodMinutes(schedule)), 0);
    return duration_minutes ? Math.max(...schedules.map(({ ends_at }) => ends_at)) : 0;
  }
  _incrementMetric(metrics, ref_id) {
    metrics[ref_id] = (metrics[ref_id] || 0) + 1;
  }
  _getPlaylistMedia(display, playlists, filter_fn = () => true) {
    const plugins = display.plugins || [];
    const playlist_media = this._playlistMediaReferences(display, playlists, filter_fn);
    return playlist_media.map((media) => this._createMediaPlayerItem(display, media, plugins)).filter((_) => !!_);
  }
  /**
   * Build the parsed display. Returns a new object rather than mutating the
   * response: `_display_signature` is taken from the raw response, so parsing
   * in place would make an unchanged payload compare as changed on the next
   * poll and force a full reload every time.
   */
  _parseDisplay(value) {
    log3.debug("Display updated.");
    const source = value || {};
    try {
      return __spreadProps(__spreadValues({}, source), {
        playlist_media: source.playlist_media?.map((_) => new ws(_)) || [],
        plugins: source.plugins?.map((_) => new mr(_)) || []
      });
    } catch (e) {
      log3.error("Failed to parse display media.", e);
      return __spreadProps(__spreadValues({}, source), {
        playlist_media: source.playlist_media || [],
        plugins: source.plugins || []
      });
    }
  }
  _resolveDisplayPlugins(display) {
    const display_plugins = display?.plugins || [];
    const plugin_ids = display?.playlist_media?.filter((media) => media.media_type === "plugin").map((media) => media.plugin_id).filter((id) => !!id);
    const unresolved_plugin = plugin_ids?.some((id) => !display_plugins.find((plugin) => plugin.id === id && plugin.uri));
    if (!unresolved_plugin)
      return Promise.resolve(display_plugins);
    return il({ limit: 500 }).catch(() => ({ data: [] })).then((result) => {
      const plugins = /* @__PURE__ */ new Map();
      for (const plugin of result.data || []) {
        if (plugin?.id)
          plugins.set(plugin.id, plugin);
      }
      for (const plugin of display_plugins) {
        if (plugin?.id)
          plugins.set(plugin.id, plugin);
      }
      return [...plugins.values()];
    });
  }
  _playlistConfig(display, id) {
    return display.playlist_config?.[id];
  }
  _playlistMediaReferences(display, playlists, filter_fn) {
    return playlists.map((id) => {
      const config = this._playlistConfig(display, id);
      if (!config)
        return [];
      const [playlist, media_list] = config;
      if (!playlist || !filter_fn(playlist))
        return [];
      const [valid_from, valid_until] = this._playlistValidityWindow(playlist);
      const media = media_list.map((media_id) => ({
        id: media_id,
        playlist_id: id,
        valid_from,
        valid_until
      }));
      return playlist.random ? shuffleArray(media) : media;
    }).flat();
  }
  _playlistValidityWindow(playlist) {
    const schedule = activePlaylistSchedule(playlist);
    const schedule_start = schedule ? Math.floor(schedule.starts_at / 1e3) : 0;
    const schedule_end = schedule?.expires_at ? Math.ceil(schedule.expires_at / 1e3) : 0;
    const valid_from = playlist?.valid_from && schedule_start ? Math.max(playlist.valid_from, schedule_start) : playlist?.valid_from || schedule_start;
    const valid_until = playlist?.valid_until && schedule_end ? Math.min(playlist.valid_until, schedule_end) : playlist?.valid_until || schedule_end;
    return [valid_from, valid_until];
  }
  _createMediaPlayerItem(display, reference, plugins) {
    const { id, playlist_id, valid_from, valid_until } = reference;
    const media_ref = display.playlist_media.find((item) => item.id === id);
    if (!media_ref)
      return null;
    if (!this._canEmbedMedia(display, media_ref))
      return null;
    const playlist = this._playlistConfig(display, playlist_id)?.[0];
    const is_plugin = media_ref.media_type === "plugin";
    const plugin = is_plugin ? plugins.find((_) => _.id === media_ref.plugin_id) : void 0;
    const media_valid_from = media_ref.valid_from || 0;
    const media_valid_until = media_ref.valid_until || 0;
    const final_valid_from = valid_from && media_valid_from ? Math.max(valid_from, media_valid_from) : media_valid_from || valid_from;
    const final_valid_until = valid_until && media_valid_until ? Math.min(valid_until, media_valid_until) : media_valid_until || valid_until;
    return {
      id,
      url: media_ref.media_url,
      name: media_ref.name,
      animation: media_ref.animation || playlist?.default_animation,
      playlist: playlist_id || "",
      playlist_name: playlist?.name || "",
      type: media_ref.media_type,
      start_time: media_ref.start_time || 0,
      duration: media_ref.play_time || media_ref.video_length || playlist?.default_duration || 15 * 1e3,
      valid_from: final_valid_from,
      valid_until: final_valid_until,
      validity: {
        valid_from_source: this._validFromSource(valid_from, media_valid_from, final_valid_from),
        valid_until_source: this._validUntilSource(valid_until, media_valid_until, final_valid_until)
      },
      plugin,
      plugin_params: is_plugin ? __spreadValues(__spreadValues({}, plugin?.defaults || {}), media_ref.plugin_params || {}) : void 0,
      getURL: () => this._mediaURL(media_ref, plugin),
      isLoading: media_ref.media_type === "webpage" || is_plugin ? () => false : () => this._media_cache.isLoadingFile(media_ref.media_url),
      isCached: media_ref.media_type === "webpage" || is_plugin ? () => false : () => this._media_cache.isCachedFile(media_ref.media_url)
    };
  }
  _validFromSource(playlist_valid_from, media_valid_from, final_valid_from) {
    if (!final_valid_from)
      return void 0;
    if (playlist_valid_from === final_valid_from && media_valid_from === final_valid_from)
      return "playlist_media";
    if (media_valid_from === final_valid_from)
      return "media";
    if (playlist_valid_from === final_valid_from)
      return "playlist";
    return void 0;
  }
  _validUntilSource(playlist_valid_until, media_valid_until, final_valid_until) {
    if (!final_valid_until)
      return void 0;
    if (playlist_valid_until === final_valid_until && media_valid_until === final_valid_until)
      return "playlist_media";
    if (media_valid_until === final_valid_until)
      return "media";
    if (playlist_valid_until === final_valid_until)
      return "playlist";
    return void 0;
  }
  _canEmbedMedia(display, media) {
    const embedded_display_id = signageDisplayIDFromURL(media.media_url);
    if (!embedded_display_id)
      return true;
    if (embedded_display_id === display.id) {
      log3.warn("Skipped signage media embedded with the same display ID.", media.id, embedded_display_id);
      return false;
    }
    if (this._isNestedPlayerWindow()) {
      log3.warn("Skipped nested signage media inside an embedded player.", media.id, embedded_display_id);
      return false;
    }
    return true;
  }
  _isNestedPlayerWindow() {
    return isNestedPlayerWindow();
  }
  /**
   * Resolve what the player should load for a media item. The cache is
   * preferred, a missing file is fetched, and if neither produces a file the
   * item plays straight from the server: whatever is wrong with the cache,
   * the screen must not stay blank while it is sorted out.
   */
  async _mediaURL(media, plugin) {
    if (media.media_type === "webpage" || media.media_type === "plugin") {
      return media.media_url || plugin?.uri;
    }
    const url = media.media_url;
    if (!url)
      return "";
    const deadline = Date.now() + MEDIA_CACHE_WAIT_MS;
    let file = await this._media_cache.getFile(url, MEDIA_CACHE_WAIT_MS).catch((_) => null);
    if (!file && this._shouldRecoverMedia(url)) {
      log3.warn("Media missing from the cache. Requesting it now.", url);
      file = await this._media_cache.fetchFile(url, this._display(), Math.max(0, deadline - Date.now())).catch((_) => null);
    }
    if (file) {
      try {
        return URL.createObjectURL(file);
      } catch (e) {
        log3.warn("Unable to create a URL for cached media.", url, e);
      }
    }
    log3.warn("Playing media directly from the server.", url);
    return this._media_cache.directURL(url);
  }
  /**
   * Rate limits recovery downloads. The player re-resolves the URL of an
   * item whenever it fails to load, which would otherwise hammer the network
   * while the server is unreachable.
   * Uses wall-clock time so debug time fast-forwarding cannot shorten it.
   */
  _shouldRecoverMedia(url) {
    if (!url)
      return false;
    const now = Date.now();
    const last_attempt = this._media_recovery.get(url) || 0;
    if (now - last_attempt < MEDIA_RECOVERY_INTERVAL_MS)
      return false;
    this._media_recovery.set(url, now);
    return true;
  }
  async _handleTrigger(id) {
    const display = this._display_data();
    if (!display?.playlist_mappings)
      return;
    if (this.override_playlist().playlist?.length > 0)
      return;
    const playlists = [...display.playlist_mappings[id]];
    const media = this._getPlaylistMedia(display, playlists, (p) => p.enabled);
    if (media.length <= 0)
      return;
    log3.debug(`Handled trigger ${id}`, media);
    this.setPlaylistOverride(media);
  }
  static {
    this.\u0275fac = function SignageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageService, factory: _SignageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/signage/src/app/signage.component.ts
var _c07 = () => ({ x: 0.01, y: 0.99 });
var _c14 = () => ({ x: 0.99, y: 0.99 });
function SignagePanelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "media-player", 2);
    \u0275\u0275listener("playing_id", function SignagePanelComponent_Conditional_1_Template_media_player_playing_id_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.playing_id.set($event));
    })("event", function SignagePanelComponent_Conditional_1_Template_media_player_event_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePlayerEvent($event, true));
    })("mutedChange", function SignagePanelComponent_Conditional_1_Template_media_player_mutedChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMuted($event));
    })("closed", function SignagePanelComponent_Conditional_1_Template_media_player_closed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearOverridePlaylist());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("z-10", !ctx_r1.debug_layout_editing())("z-auto", ctx_r1.debug_layout_editing());
    \u0275\u0275property("playlist", ctx_r1.override_playlist().playlist)("controls", ctx_r1.debug())("layout_editing", ctx_r1.debug_layout_editing())("layout_reset_count", ctx_r1.debug_layout_reset_count())("can_close", true)("muted", ctx_r1.muted())("transparent", ctx_r1.transparent())("animation_time", ctx_r1.animation_time);
  }
}
function SignagePanelComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function SignagePanelComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SignagePanelComponent_Conditional_2_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetDebugLayout());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "restart_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function SignagePanelComponent_Conditional_2_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.debug_layout_editing.set(!ctx_r1.debug_layout_editing()));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", "Reset Layout");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", "Save Layout");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("done");
  }
}
function SignagePanelComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SignagePanelComponent_Conditional_2_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.debug_layout_editing.set(!ctx_r1.debug_layout_editing()));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", "Edit Layout");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("dashboard_customize");
  }
}
function SignagePanelComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No item playing");
    \u0275\u0275elementEnd();
  }
}
function SignagePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignagePanelComponent_Conditional_2_Conditional_0_Template, 1, 0, "div", 3);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SignagePanelComponent_Conditional_2_Conditional_4_Template, 6, 3)(5, SignagePanelComponent_Conditional_2_Conditional_5_Template, 3, 2, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "debug-overlay", 7)(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\xA0");
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "debug-overlay", 11)(17, "div", 8);
    \u0275\u0275text(18);
    \u0275\u0275conditionalCreate(19, SignagePanelComponent_Conditional_2_Conditional_19_Template, 2, 0, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.debug_layout_editing() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.debug_layout_editing() ? "Finish editing debug layout" : "Edit debug layout");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.debug_layout_editing() ? "Editing" : "Edit layout", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.debug_layout_editing() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("editing", ctx_r1.debug_layout_editing())("reset_count", ctx_r1.debug_layout_reset_count())("initial_position", \u0275\u0275pureFunction0(21, _c07));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 15, ctx_r1.version_date, "mediumDate"), " \u2013 ", \u0275\u0275pipeBind2(10, 18, ctx_r1.version_date, "shortTime"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.version_hash);
    \u0275\u0275advance();
    \u0275\u0275property("editing", ctx_r1.debug_layout_editing())("reset_count", ctx_r1.debug_layout_reset_count())("initial_position", \u0275\u0275pureFunction0(22, _c14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playing_id(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.playing_id() ? 19 : -1);
  }
}
var REMOTE_PAUSE = "signage:pause";
var REMOTE_RESUME = "signage:resume";
var MUTE_STORAGE_KEY = "SIGNAGE.muted";
function isCoveredByLoadingOverlay() {
  return !!document.querySelector("global-loading [loader]");
}
var SignagePanelComponent = class _SignagePanelComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._signage = inject(SignageService);
    this._settings = inject(SettingsService);
    this.playlist = this._signage.playlist;
    this.override_playlist = this._signage.override_playlist;
    this.debug = this._signage.debug;
    this.playing_id = this._signage.playing_id;
    this.muted = signal(
      true,
      ...ngDevMode ? [{ debugName: "muted" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_layout_editing = signal(
      false,
      ...ngDevMode ? [{ debugName: "debug_layout_editing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_layout_reset_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "debug_layout_reset_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.transparent = input(
      false,
      ...ngDevMode ? [{ debugName: "transparent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.version_hash = VERSION.hash;
    this.version_date = VERSION.time;
    this._players = viewChildren(
      MediaPlayerComponent,
      ...ngDevMode ? [{ debugName: "_players" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clearOverridePlaylist = () => this._signage.clearPlaylistOverride();
    this._remote_message_handler = (event) => {
      const data = event?.data;
      if (!data || typeof data !== "object")
        return;
      if (data.type === REMOTE_PAUSE)
        this._setPlaybackState("PAUSED");
      else if (data.type === REMOTE_RESUME)
        this._setPlaybackState("PLAYING");
    };
  }
  resetDebugLayout() {
    clearDebugOverlayLayouts();
    this.debug_layout_reset_count.update((count) => count + 1);
  }
  setMuted(muted) {
    this.muted.set(muted);
    sessionStorage.setItem(MUTE_STORAGE_KEY, `${muted}`);
  }
  _setPlaybackState(target) {
    for (const player of this._players()) {
      if (player.state() !== target)
        player.togglePause();
    }
  }
  get animation_time() {
    return this._settings.get("app.default_animation_time");
  }
  ngOnInit() {
    setAutoReloadGate(() => !this._players().some((_) => _.isMidPlayThroughItem()));
    this.subscription("reload-gate", () => setAutoReloadGate(null));
    this.interval("visible_check", () => {
      if (!isCoveredByLoadingOverlay())
        recordHeartbeat("visible");
    }, 1e3);
    this.subscription("diagnostics", registerSignageDiagnostics({
      getState: () => this.diagnosticState(),
      poll: () => this._signage.refresh()
    }));
    window.addEventListener("message", this._remote_message_handler);
    this.subscription("remote-message", () => window.removeEventListener("message", this._remote_message_handler));
    this.timeout("not-bootstrapped", () => {
      log("SIGNAGE", "Panel not bootstrapped after 3 seconds. Redirecting...");
      this._router.navigate(["/bootstrap"]);
    }, 3e3);
    const debug = sessionStorage.getItem("SIGNAGE.debug");
    if (debug !== null)
      this.debug.set(isDebugEnabled(debug));
    const muted = sessionStorage.getItem(MUTE_STORAGE_KEY);
    if (muted !== null)
      this.muted.set(muted === "true");
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("debug")) {
        const enabled = isDebugEnabled(params.get("debug"));
        this.debug.set(enabled);
        sessionStorage.setItem("SIGNAGE.debug", `${enabled}`);
      }
    }));
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("system_id")) {
        log("SIGNAGE", `Display set to "${params.get("system_id")}"`);
        this._signage.setDisplay(params.get("system_id"));
        this.clearTimeout("not-bootstrapped");
      }
    }));
    this.interval("check_override", () => {
      const { ends_at } = this.override_playlist();
      if (ends_at && ends_at < time()) {
        this._signage.clearPlaylistOverride();
      }
    });
  }
  /** Everything worth knowing about this player, for console diagnostics */
  diagnosticState() {
    return __spreadProps(__spreadValues({
      version: {
        hash: VERSION.hash,
        built: new Date(VERSION.time).toISOString()
      },
      online: Xr(),
      updates: updateCheckState()
    }, this._signage.diagnostics()), {
      players: this._players().map((player, index) => ({
        role: index === 0 ? "background" : "takeover",
        state: player.state(),
        item_index: player.index(),
        progress_percent: Math.round(player.progress()),
        elapsed_s: player.duration(),
        waiting_for_item: player.waiting_for_item(),
        mid_play_through: player.isMidPlayThroughItem(),
        playing: player.active_item ? {
          id: player.active_item.id,
          name: player.active_item.name,
          type: player.active_item.type,
          playlist: player.active_item.playlist_name
        } : null,
        queue: player.playlist_items.map((_) => _.id)
      }))
    });
  }
  handlePlayerEvent(e, overridden = false) {
    if (overridden && e.type === "playlist_through") {
      const { ends_at } = this.override_playlist();
      if (!ends_at)
        this._signage.clearPlaylistOverride();
    }
    this._signage.storeMetricEvent(e);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SignagePanelComponent_BaseFactory;
      return function SignagePanelComponent_Factory(__ngFactoryType__) {
        return (\u0275SignagePanelComponent_BaseFactory || (\u0275SignagePanelComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignagePanelComponent)))(__ngFactoryType__ || _SignagePanelComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePanelComponent, selectors: [["signage-panel"]], viewQuery: function SignagePanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._players, MediaPlayerComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { transparent: [1, "transparent"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 14, consts: [[3, "playing_id", "event", "mutedChange", "playlist", "controls", "layout_editing", "layout_reset_count", "muted", "transparent", "override", "animation_time"], [1, "absolute", "inset-0", 3, "playlist", "controls", "layout_editing", "layout_reset_count", "can_close", "muted", "transparent", "animation_time", "z-10", "z-auto"], [1, "absolute", "inset-0", 3, "playing_id", "event", "mutedChange", "closed", "playlist", "controls", "layout_editing", "layout_reset_count", "can_close", "muted", "transparent", "animation_time"], ["data-testid", "debug-layout-grid", 1, "debug-layout-grid", "pointer-events-none", "absolute", "inset-0", "z-10"], [1, "border-base-300", "bg-base-100", "text-base-content", "absolute", "top-0", "left-1/2", "z-30", "flex", "w-40", "-translate-x-1/2", "items-center", "gap-1", "rounded-b-lg", "border-x", "border-b", "p-1", "text-xs", "shadow-lg"], [1, "flex-1", "px-4", "text-sm"], ["icon", "", "default", "", "aria-label", "Edit debug layout", 3, "matTooltip"], ["overlay_id", "build-details", "label", "build details", "icon", "info", 3, "editing", "reset_count", "initial_position"], ["stroke", "", 1, "text-base-100/60", "bg-base-content/40", "rounded", "px-2", "py-1", "font-mono", "text-[0.625rem]"], [1, "opacity-50"], [1, "select-all"], ["overlay_id", "playing-item", "label", "playing item", "icon", "perm_media", 3, "editing", "reset_count", "initial_position"], ["icon", "", "default", "", "aria-label", "Reset debug layout", 3, "click", "matTooltip"], ["icon", "", "default", "", "aria-label", "Finish editing debug layout", 1, "border-success", "bg-success-light", "text-success", 3, "click", "matTooltip"], ["icon", "", "default", "", "aria-label", "Edit debug layout", 3, "click", "matTooltip"]], template: function SignagePanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "media-player", 0);
        \u0275\u0275listener("playing_id", function SignagePanelComponent_Template_media_player_playing_id_0_listener($event) {
          return ctx.playing_id.set($event);
        })("event", function SignagePanelComponent_Template_media_player_event_0_listener($event) {
          return ctx.handlePlayerEvent($event);
        })("mutedChange", function SignagePanelComponent_Template_media_player_mutedChange_0_listener($event) {
          return ctx.setMuted($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(1, SignagePanelComponent_Conditional_1_Template, 1, 12, "media-player", 1);
        \u0275\u0275conditionalCreate(2, SignagePanelComponent_Conditional_2_Template, 20, 23);
      }
      if (rf & 2) {
        \u0275\u0275classProp("z-0", !ctx.debug_layout_editing())("z-auto", ctx.debug_layout_editing());
        \u0275\u0275property("playlist", ctx.playlist())("controls", ctx.debug())("layout_editing", ctx.debug_layout_editing())("layout_reset_count", ctx.debug_layout_reset_count())("muted", ctx.muted())("transparent", ctx.transparent())("override", ctx.override_playlist().playlist.length > 0)("animation_time", ctx.animation_time);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.override_playlist().playlist.length > 0 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.debug() ? 2 : -1);
      }
    }, dependencies: [
      DebugOverlayComponent,
      IconComponent,
      MatRippleModule,
      MediaPlayerComponent,
      MatTooltipModule,
      MatTooltip,
      DatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.stroke[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 1px #000;\n}\n.debug-layout-grid[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      color-mix(in srgb, var(--%NS%primary) 35%, transparent) 1px,\n      transparent 1px),\n    linear-gradient(\n      to bottom,\n      color-mix(in srgb, var(--%NS%primary) 35%, transparent) 1px,\n      transparent 1px);\n  background-size: 5% 5%;\n}\n@media (min-width: 1024px) {\n  .debug-layout-grid[_ngcontent-%COMP%] {\n    background-size: 2.5% 2.5%;\n  }\n}\n/*# sourceMappingURL=signage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePanelComponent, [{
    type: Component,
    args: [{ selector: "signage-panel", template: `
        <media-player
            [playlist]="playlist()"
            [controls]="debug()"
            [layout_editing]="debug_layout_editing()"
            [layout_reset_count]="debug_layout_reset_count()"
            [muted]="muted()"
            [transparent]="transparent()"
            [override]="override_playlist().playlist.length > 0"
            [animation_time]="animation_time"
            (playing_id)="playing_id.set($event)"
            (event)="handlePlayerEvent($event)"
            (mutedChange)="setMuted($event)"
            [class.z-0]="!debug_layout_editing()"
            [class.z-auto]="debug_layout_editing()"
        />
        @if (override_playlist().playlist.length > 0) {
            <media-player
                [playlist]="override_playlist().playlist"
                [controls]="debug()"
                [layout_editing]="debug_layout_editing()"
                [layout_reset_count]="debug_layout_reset_count()"
                [can_close]="true"
                [muted]="muted()"
                [transparent]="transparent()"
                [animation_time]="animation_time"
                (playing_id)="playing_id.set($event)"
                (event)="handlePlayerEvent($event, true)"
                (mutedChange)="setMuted($event)"
                (closed)="clearOverridePlaylist()"
                class="absolute inset-0"
                [class.z-10]="!debug_layout_editing()"
                [class.z-auto]="debug_layout_editing()"
            />
        }
        @if (debug()) {
            @if (debug_layout_editing()) {
                <div
                    data-testid="debug-layout-grid"
                    class="debug-layout-grid pointer-events-none absolute inset-0 z-10"
                ></div>
            }
            <div
                class="border-base-300 bg-base-100 text-base-content absolute top-0 left-1/2 z-30 flex w-40 -translate-x-1/2 items-center gap-1 rounded-b-lg border-x border-b p-1 text-xs shadow-lg"
                [attr.aria-label]="
                    debug_layout_editing()
                        ? 'Finish editing debug layout'
                        : 'Edit debug layout'
                "
            >
                <div class="flex-1 px-4 text-sm">
                    {{ debug_layout_editing() ? 'Editing' : 'Edit layout' }}
                </div>
                @if (debug_layout_editing()) {
                    <button
                        icon
                        default
                        aria-label="Reset debug layout"
                        [matTooltip]="'Reset Layout'"
                        (click)="resetDebugLayout()"
                    >
                        <icon>restart_alt</icon>
                    </button>
                    <button
                        icon
                        default
                        aria-label="Finish editing debug layout"
                        [matTooltip]="'Save Layout'"
                        class="border-success bg-success-light text-success"
                        (click)="
                            debug_layout_editing.set(!debug_layout_editing())
                        "
                    >
                        <icon>{{ 'done' }}</icon>
                    </button>
                } @else {
                    <button
                        icon
                        default
                        aria-label="Edit debug layout"
                        [matTooltip]="'Edit Layout'"
                        (click)="
                            debug_layout_editing.set(!debug_layout_editing())
                        "
                    >
                        <icon>{{ 'dashboard_customize' }}</icon>
                    </button>
                }
            </div>
            <debug-overlay
                overlay_id="build-details"
                [editing]="debug_layout_editing()"
                [reset_count]="debug_layout_reset_count()"
                label="build details"
                icon="info"
                [initial_position]="{ x: 0.01, y: 0.99 }"
            >
                <div
                    stroke
                    class="text-base-100/60 bg-base-content/40 rounded px-2 py-1 font-mono text-[0.625rem]"
                >
                    {{ version_date | date: 'mediumDate' }} &ndash;
                    {{ version_date | date: 'shortTime' }}
                    <span class="opacity-50">|</span>&nbsp;<span
                        class="select-all"
                        >{{ version_hash }}</span
                    >
                </div>
            </debug-overlay>
            <debug-overlay
                overlay_id="playing-item"
                [editing]="debug_layout_editing()"
                [reset_count]="debug_layout_reset_count()"
                label="playing item"
                icon="perm_media"
                [initial_position]="{ x: 0.99, y: 0.99 }"
            >
                <div
                    stroke
                    class="text-base-100/60 bg-base-content/40 rounded px-2 py-1 font-mono text-[0.625rem]"
                >
                    {{ playing_id() }}
                    @if (!playing_id()) {
                        <span>No item playing</span>
                    }
                </div>
            </debug-overlay>
        }
    `, imports: [
      DatePipe,
      DebugOverlayComponent,
      IconComponent,
      MatRippleModule,
      MediaPlayerComponent,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;b14f5503c90bc73fe8e3edbf873bd4e28c274ac3da8973c1859825c5b030b8eb;/home/runner/work/user-interfaces/user-interfaces/apps/signage/src/app/signage.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.stroke {\n  -webkit-text-stroke: 1px #000;\n}\n.debug-layout-grid {\n  background-image:\n    linear-gradient(\n      to right,\n      color-mix(in srgb, var(--primary) 35%, transparent) 1px,\n      transparent 1px),\n    linear-gradient(\n      to bottom,\n      color-mix(in srgb, var(--primary) 35%, transparent) 1px,\n      transparent 1px);\n  background-size: 5% 5%;\n}\n@media (min-width: 1024px) {\n  .debug-layout-grid {\n    background-size: 2.5% 2.5%;\n  }\n}\n/*# sourceMappingURL=signage.component.css.map */\n"] }]
  }], null, { transparent: [{ type: Input, args: [{ isSignal: true, alias: "transparent", required: false }] }], _players: [{ type: ViewChildren, args: [forwardRef(() => MediaPlayerComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePanelComponent, { className: "SignagePanelComponent", filePath: "apps/signage/src/app/signage.component.ts", lineNumber: 221 });
})();

// apps/signage/src/app/template-layout.ts
var EDGE_BAR_SIZE = 15;
var SIDE_BAR_SIZE = 20;
var FLOATING_POSITION = 50;
var clamp2 = (value, max = 100) => Math.min(Math.max(value, 0), Math.max(max, 0));
function percentage(value, fallback) {
  return value === void 0 ? fallback : clamp2(value * 100);
}
function computeTemplateLayout(layouts) {
  const player = { left: 0, top: 0, width: 100, height: 100 };
  const items = layouts.map((layout) => {
    let rect;
    switch (layout.position) {
      case "top": {
        const height = clamp2(percentage(layout.y_pos, EDGE_BAR_SIZE), player.height);
        rect = __spreadProps(__spreadValues({}, player), { height });
        player.top += height;
        player.height -= height;
        break;
      }
      case "bottom": {
        const height = clamp2(percentage(layout.y_pos, EDGE_BAR_SIZE), player.height);
        rect = __spreadProps(__spreadValues({}, player), {
          top: player.top + player.height - height,
          height
        });
        player.height -= height;
        break;
      }
      case "left": {
        const width = clamp2(percentage(layout.x_pos, SIDE_BAR_SIZE), player.width);
        rect = __spreadProps(__spreadValues({}, player), { width });
        player.left += width;
        player.width -= width;
        break;
      }
      case "right": {
        const width = clamp2(percentage(layout.x_pos, SIDE_BAR_SIZE), player.width);
        rect = __spreadProps(__spreadValues({}, player), {
          left: player.left + player.width - width,
          width
        });
        player.width -= width;
        break;
      }
      case "floating":
      default: {
        const left = percentage(layout.x_pos, FLOATING_POSITION);
        const top = percentage(layout.y_pos, FLOATING_POSITION);
        rect = { left, top, width: 100 - left, height: 100 - top };
        break;
      }
    }
    return { layout, rect };
  });
  return { items, player };
}

// apps/signage/src/app/template.component.ts
var _forTrack03 = ($index, $item) => $item.config.instance_id;
function SignageTemplateComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "media-player", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist", ctx_r0.background_playlist())("loop", "ONE")("muted", true)("transparent", true);
  }
}
function SignageTemplateComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "plugin-embed", 3);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", item_r2.rect.left, "%")("top", item_r2.rect.top, "%")("width", item_r2.rect.width, "%")("height", item_r2.rect.height, "%");
    \u0275\u0275classProp("pointer-events-none", ctx_r0.debug());
    \u0275\u0275property("plugin", item_r2.plugin)("config", item_r2.config)("auto_play", true);
  }
}
function SignageTemplateComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageTemplateComponent_Conditional_2_For_1_Template, 1, 13, "plugin-embed", 2, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.layout_items());
  }
}
var STORE_DISPLAY_KEY = "PlaceOS.SIGNAGE.display";
var PREVIEW_LAYOUTS_MESSAGE = "signage:template-layouts";
var PREVIEW_READY_MESSAGE = "signage:template-preview-ready";
function backgroundPlayerItem(media, plugins, media_cache, cache_owner) {
  const plugin = plugins.find((item) => item.id === media.plugin_id);
  const cacheable = media.media_type !== "webpage" && media.media_type !== "plugin";
  if (cacheable) {
    media_cache.requestFilesToCache([media.media_url], cache_owner, {
      prune_other_owners: false
    }).catch(() => void 0);
  }
  return {
    id: media.id,
    name: media.name,
    playlist: "",
    playlist_name: "",
    animation: media.animation || Cs.Cut,
    type: media.media_type,
    url: media.media_url,
    start_time: media.start_time,
    duration: media.play_time || media.video_length || 15e3,
    valid_from: media.valid_from || 0,
    valid_until: media.valid_until || 0,
    plugin,
    plugin_params: plugin ? __spreadValues(__spreadValues({}, plugin.defaults), media.plugin_params) : void 0,
    getURL: async () => {
      if (!cacheable)
        return media.media_url || plugin?.uri || "";
      let file = await media_cache.getFile(media.media_url).catch(() => null);
      if (!file) {
        await media_cache.requestFilesToCache([media.media_url], cache_owner, {
          prune_other_owners: false
        }).catch(() => void 0);
        file = await media_cache.getFile(media.media_url).catch(() => null);
      }
      try {
        return file ? URL.createObjectURL(file) : "";
      } catch {
        return "";
      }
    },
    isLoading: cacheable ? () => media_cache.isLoadingFile(media.media_url) : () => false,
    isCached: cacheable ? () => media_cache.isCachedFile(media.media_url) : () => false
  };
}
var SignageTemplateComponent = class _SignageTemplateComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._media_cache = inject(MediaCacheService);
    this._signage = inject(SignageService);
    this._plugins = signal(
      [],
      ...ngDevMode ? [{ debugName: "_plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._route_template_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "_route_template_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_id = 0;
    this.debug = this._signage.debug;
    this.template = signal(
      null,
      ...ngDevMode ? [{ debugName: "template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._preview_layouts = signal(
      null,
      ...ngDevMode ? [{ debugName: "_preview_layouts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background_playlist = signal(
      [],
      ...ngDevMode ? [{ debugName: "background_playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_mappings = computed(
      () => {
        const template_id = this._route_template_id();
        return template_id ? [new yr({ template_id })] : this._signage.active_templates();
      },
      ...ngDevMode ? [{ debugName: "_template_mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_mappings$ = toObservable(this._template_mappings);
    this._layout = computed(
      () => computeTemplateLayout(this.debug() && this._preview_layouts() || this.template()?.layouts || []),
      ...ngDevMode ? [{ debugName: "_layout" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.player_rect = computed(
      () => this._layout().player,
      ...ngDevMode ? [{ debugName: "player_rect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layout_items = computed(
      () => {
        const template_id = this.template()?.id || "template";
        const plugins = this._plugins();
        return this._layout().items.map(({ layout, rect }, index) => {
          const plugin = plugins.find((item) => item.id === layout.plugin_id);
          return plugin ? {
            plugin,
            rect,
            config: {
              instance_id: `${template_id}-layout-${index}`,
              config: __spreadValues(__spreadValues({}, plugin.defaults), layout.plugin_params)
            }
          } : null;
        }).filter((item) => !!item);
      },
      ...ngDevMode ? [{ debugName: "layout_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._preview_message_handler = (event) => {
      const data = event?.data;
      if (!this.debug() || data?.type !== PREVIEW_LAYOUTS_MESSAGE)
        return;
      this._preview_layouts.set(Array.isArray(data.layouts) ? data.layouts : null);
    };
  }
  ngOnInit() {
    const params = this._route.snapshot.queryParamMap;
    if (params.has("debug")) {
      this.debug.set(isDebugEnabled(params.get("debug")));
    }
    this.subscription("route.params", this._route.paramMap.subscribe((params2) => {
      const template_id = params2.get("template_id") || "";
      const system_id = params2.get("system_id") || "";
      if (template_id && !system_id) {
        this._bootstrapTemplate(template_id);
        return;
      }
      this._route_template_id.set(template_id);
    }));
    this.subscription("template", this._template_mappings$.subscribe((mappings) => this._loadTemplates(mappings)));
    window.addEventListener("message", this._preview_message_handler);
    this.subscription("preview-message", () => window.removeEventListener("message", this._preview_message_handler));
  }
  /**
   * Ask the embedding manager preview for its unsaved layouts. The manager
   * cannot know when this listener is ready, so the player asks first.
   */
  _requestPreviewLayouts() {
    if (window.parent === window)
      return;
    window.parent.postMessage({ type: PREVIEW_READY_MESSAGE }, "*");
  }
  _bootstrapTemplate(template_id) {
    const display_id = localStorage.getItem(STORE_DISPLAY_KEY);
    if (display_id) {
      this._router.navigate(["/template", template_id, display_id], {
        replaceUrl: true
      });
      return;
    }
    this._router.navigate(["/bootstrap"], {
      queryParams: { template: template_id },
      replaceUrl: true
    });
  }
  async _loadTemplates(mappings) {
    const load_id = ++this._load_id;
    this._preview_layouts.set(null);
    this._requestPreviewLayouts();
    if (!mappings.length) {
      this._plugins.set([]);
      this.template.set(null);
      this.background_playlist.set([]);
      return;
    }
    try {
      const candidates = await Promise.all(mappings.map(async (mapping) => ({
        mapping,
        template: await hl(mapping.template_id, this.debug() ? {} : { approved: true })
      })));
      const non_merge = candidates.filter(({ template: template2 }) => !template2.merge);
      const merge = candidates.filter(({ template: template2 }) => template2.merge);
      const base = non_merge.filter(({ mapping }) => mapping.schedule).at(-1) || non_merge[0] || merge.shift();
      if (!base || load_id !== this._load_id)
        return;
      const template = merge.length ? new gr(__spreadProps(__spreadValues({}, base.template), {
        layouts: [
          ...base.template.layouts,
          ...merge.flatMap(({ template: template2 }) => template2.layouts)
        ]
      })) : base.template;
      const [plugin_result, background] = await Promise.all([
        il({ limit: 500 }).catch(() => ({ data: [] })),
        template.background_item_id ? Dh(template.background_item_id).catch(() => null) : null
      ]);
      const plugins = plugin_result.data || [];
      if (load_id !== this._load_id)
        return;
      this._plugins.set(plugins);
      this.template.set(template);
      this.background_playlist.set(background ? [
        backgroundPlayerItem(background, plugins, this._media_cache, `template:${template.id}`)
      ] : []);
    } catch (error) {
      if (load_id !== this._load_id)
        return;
      log("SIGNAGE", `Unable to load templates "${mappings.map((mapping) => mapping.template_id).join(", ")}"`, [error], "error");
      this.template.set(null);
      this.background_playlist.set([]);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SignageTemplateComponent_BaseFactory;
      return function SignageTemplateComponent_Factory(__ngFactoryType__) {
        return (\u0275SignageTemplateComponent_BaseFactory || (\u0275SignageTemplateComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignageTemplateComponent)))(__ngFactoryType__ || _SignageTemplateComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageTemplateComponent, selectors: [["signage-template"]], hostAttrs: [1, "bg-[var(--bg)]"], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 11, consts: [[1, "absolute", "inset-0", "z-0", 3, "playlist", "loop", "muted", "transparent"], [1, "absolute", "z-10", 3, "transparent"], [1, "absolute", "z-20", "bg-transparent", 3, "pointer-events-none", "plugin", "config", "auto_play", "left", "top", "width", "height"], [1, "absolute", "z-20", "bg-transparent", 3, "plugin", "config", "auto_play"]], template: function SignageTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SignageTemplateComponent_Conditional_0_Template, 1, 4, "media-player", 0);
        \u0275\u0275element(1, "signage-panel", 1);
        \u0275\u0275conditionalCreate(2, SignageTemplateComponent_Conditional_2_Template, 2, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.background_playlist().length ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.player_rect().left, "%")("top", ctx.player_rect().top, "%")("width", ctx.player_rect().width, "%")("height", ctx.player_rect().height, "%");
        \u0275\u0275property("transparent", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.template() ? 2 : -1);
      }
    }, dependencies: [
      MediaPlayerComponent,
      PluginEmbedComponent,
      SignagePanelComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=template.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageTemplateComponent, [{
    type: Component,
    args: [{ selector: "signage-template", host: {
      class: "bg-[var(--bg)]"
    }, template: `
        @if (background_playlist().length) {
            <media-player
                class="absolute inset-0 z-0"
                [playlist]="background_playlist()"
                [loop]="'ONE'"
                [muted]="true"
                [transparent]="true"
            />
        }
        <signage-panel
            class="absolute z-10"
            [transparent]="true"
            [style.left.%]="player_rect().left"
            [style.top.%]="player_rect().top"
            [style.width.%]="player_rect().width"
            [style.height.%]="player_rect().height"
        />
        @if (template()) {
            @for (item of layout_items(); track item.config.instance_id) {
                <plugin-embed
                    class="absolute z-20 bg-transparent"
                    [class.pointer-events-none]="debug()"
                    [plugin]="item.plugin"
                    [config]="item.config"
                    [auto_play]="true"
                    [style.left.%]="item.rect.left"
                    [style.top.%]="item.rect.top"
                    [style.width.%]="item.rect.width"
                    [style.height.%]="item.rect.height"
                />
            }
        }
    `, imports: [
      MediaPlayerComponent,
      PluginEmbedComponent,
      SignagePanelComponent
    ], styles: ["/* angular:styles/component:css;e51189524b21d790cdb1dc962fef0dde19dc08de2dad2685902d2ecc4cea1154;/home/runner/work/user-interfaces/user-interfaces/apps/signage/src/app/template.component.ts */\n:host {\n  position: relative;\n  display: block;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=template.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageTemplateComponent, { className: "SignageTemplateComponent", filePath: "apps/signage/src/app/template.component.ts", lineNumber: 158 });
})();
export {
  SignageTemplateComponent
};
//# debugId=21484a55-ca93-5bdf-9fbb-8b633b43404f
//# sourceMappingURL=template.component-3DQYZ4MB.js.map
