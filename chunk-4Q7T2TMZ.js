import {
  AsyncHandler,
  J,
  Mt,
  et
} from "./chunk-T6AQFL6Y.js";
import {
  Directive,
  ElementRef,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-CLFS24D3.js";

// libs/components/src/lib/authenticated-image.ts
var MAX_CACHED_IMAGES = 64;
var MAX_FAILED_LOADS = 64;
var FAILED_LOAD_TTL = 30 * 1e3;
var LEGACY_CACHE_NAME = "PlaceOS.image-cache-v1";
var LEGACY_CACHE_KEYS = "PlaceOS.image-cache-keys-v1";
var IMAGE_STORE = /* @__PURE__ */ new Map();
var IMAGE_LOADS = /* @__PURE__ */ new Map();
var FAILED_LOADS = /* @__PURE__ */ new Map();
var _legacy_cache_removed = false;
function removeLegacyCache() {
  if (_legacy_cache_removed)
    return;
  _legacy_cache_removed = true;
  if (typeof caches !== "undefined") {
    void caches.delete(LEGACY_CACHE_NAME).catch(() => false);
  }
  if (typeof sessionStorage !== "undefined") {
    try {
      sessionStorage.removeItem(LEGACY_CACHE_KEYS);
    } catch {
    }
  }
}
function getCachedAuthenticatedImage(source) {
  const cached = IMAGE_STORE.get(source);
  if (!cached)
    return void 0;
  IMAGE_STORE.delete(source);
  IMAGE_STORE.set(source, cached);
  return cached;
}
function cacheObjectUrl(source, url) {
  const previous = IMAGE_STORE.get(source);
  if (previous && previous !== url)
    URL.revokeObjectURL(previous);
  IMAGE_STORE.delete(source);
  IMAGE_STORE.set(source, url);
  while (IMAGE_STORE.size > MAX_CACHED_IMAGES) {
    const oldest_source = IMAGE_STORE.keys().next().value;
    if (!oldest_source)
      break;
    const oldest_url = IMAGE_STORE.get(oldest_source);
    IMAGE_STORE.delete(oldest_source);
    if (oldest_url)
      URL.revokeObjectURL(oldest_url);
  }
  return url;
}
function rememberFailedLoad(source) {
  FAILED_LOADS.delete(source);
  FAILED_LOADS.set(source, Date.now() + FAILED_LOAD_TTL);
  while (FAILED_LOADS.size > MAX_FAILED_LOADS) {
    const oldest_source = FAILED_LOADS.keys().next().value;
    if (!oldest_source)
      break;
    FAILED_LOADS.delete(oldest_source);
  }
}
function setAuthCookie(cookie_path) {
  const tkn = J();
  document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(et()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=${cookie_path};samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
}
function authRequest() {
  const tkn = J();
  return tkn === "x-api-key" ? { headers: { "X-API-Key": et() }, redirect: "error" } : { headers: { Authorization: `Bearer ${tkn}` } };
}
function loadAuthenticatedImage(source, cookie_path) {
  return loadImage(source, () => {
    setAuthCookie(cookie_path);
    return fetch(source);
  });
}
function loadAuthenticatedImageWithHeader(source) {
  return loadImage(source, () => fetch(source, authRequest()));
}
async function loadImage(source, request) {
  removeLegacyCache();
  const cached = getCachedAuthenticatedImage(source);
  if (cached)
    return cached;
  const retry_after = FAILED_LOADS.get(source) || 0;
  if (retry_after > Date.now()) {
    throw new Error("Image load is in retry cooldown");
  }
  FAILED_LOADS.delete(source);
  const pending = IMAGE_LOADS.get(source);
  if (pending)
    return pending;
  const load = request().then(async (response) => {
    if (!response?.ok) {
      throw new Error(`Failed to fetch image: ${response?.status}`);
    }
    const url = URL.createObjectURL(await response.blob());
    return cacheObjectUrl(source, url);
  }).catch((error) => {
    rememberFailedLoad(source);
    throw error;
  }).finally(() => IMAGE_LOADS.delete(source));
  IMAGE_LOADS.set(source, load);
  return load;
}

// libs/components/src/lib/authenticated-image.directive.ts
var AUTH_COOKIE_REFRESH = 20 * 1e3;
var AUTHORITY_RETRY_DELAY = 300;
var AUTHORITY_RETRY_LIMIT = 200;
var AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._observer = null;
    this._source_version = 0;
    this.source = input(
      void 0,
      ...ngDevMode ? [{ debugName: "source" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnChanges(changes) {
    if (!changes.source)
      return;
    this._source_version += 1;
    this.clearTimeout("load");
    this.clearInterval("auth_cookie");
    this.unsub("media_events");
    this._observer?.disconnect();
    this._observer = null;
    const source = this.source();
    if (!source) {
      this._clearMedia();
      return;
    }
    if (!this._isLocalUrl(source)) {
      this._element.nativeElement.src = source;
      return;
    }
    this._loadWhenVisible(source, this._source_version);
  }
  ngOnDestroy() {
    this._observer?.disconnect();
    this._observer = null;
    super.ngOnDestroy();
  }
  _loadWhenVisible(source, version) {
    if (typeof IntersectionObserver === "undefined") {
      void this._loadImage(source, version);
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      if (!entries.some(({ isIntersecting }) => isIntersecting)) {
        return;
      }
      this._observer?.disconnect();
      this._observer = null;
      void this._loadImage(source, version);
    }, { rootMargin: "300px" });
    this._observer.observe(this._element.nativeElement);
  }
  async _loadImage(source, version, attempt = 0) {
    if (version !== this._source_version || source !== this.source())
      return;
    if (!Mt()) {
      if (attempt >= AUTHORITY_RETRY_LIMIT) {
        this._dispatchError(new Error("Auth client is not ready"));
        return;
      }
      this.timeout("load", () => void this._loadImage(source, version, attempt + 1), AUTHORITY_RETRY_DELAY);
      return;
    }
    const is_api = source.includes("/api/engine/v2/uploads") || source.includes("/api/engine/v2/signage");
    if (is_api && !(this._element.nativeElement instanceof HTMLImageElement)) {
      this._streamMedia(source);
      return;
    }
    const cached = getCachedAuthenticatedImage(source);
    if (cached) {
      this._element.nativeElement.src = cached;
      return;
    }
    try {
      const url = is_api ? await loadAuthenticatedImage(source, this._cookiePath(source)) : await loadAuthenticatedImageWithHeader(source);
      if (version === this._source_version && source === this.source()) {
        this._element.nativeElement.src = url;
      }
    } catch (error) {
      if (version === this._source_version)
        this._dispatchError(error);
    }
  }
  /** Tell listeners, such as an avatar fallback, that the load failed */
  _dispatchError(error) {
    this._element.nativeElement.dispatchEvent(new ErrorEvent("error", { error }));
  }
  /** Remove the old media, so a reused element does not show it */
  _clearMedia() {
    const element = this._element.nativeElement;
    if (!element.hasAttribute("src"))
      return;
    element.removeAttribute("src");
    if (!(element instanceof HTMLImageElement))
      element.load();
  }
  /**
   * Let the browser stream video and audio with range requests, in place
   * of downloading the whole file first. The auth cookie only lasts 30
   * seconds, so it is set again on a timer, and before the events that
   * start new requests, as hidden tabs can delay timers for a minute.
   */
  _streamMedia(source) {
    const media = this._element.nativeElement;
    const cookie_path = this._cookiePath(source);
    const renew = () => setAuthCookie(cookie_path);
    let retried = false;
    const recover = () => {
      if (retried)
        return;
      retried = true;
      renew();
      const time = media.currentTime;
      const was_playing = !media.paused;
      media.load();
      media.currentTime = time;
      if (was_playing)
        void media.play().catch(() => void 0);
    };
    const events = ["play", "seeking", "waiting"];
    for (const name of events)
      media.addEventListener(name, renew);
    media.addEventListener("error", recover);
    document.addEventListener("visibilitychange", renew);
    this.subscription("media_events", () => {
      for (const name of events)
        media.removeEventListener(name, renew);
      media.removeEventListener("error", recover);
      document.removeEventListener("visibilitychange", renew);
    });
    renew();
    this.interval("auth_cookie", renew, AUTH_COOKIE_REFRESH);
    media.src = source;
  }
  /** Whether the source resolves to the current origin. */
  _isLocalUrl(source) {
    try {
      return new URL(source, location.href).origin === location.origin;
    } catch {
      return false;
    }
  }
  /** Return the narrowest cookie path that includes the resource. */
  _cookiePath(source) {
    return source.includes("/api/engine/v2/uploads") ? "/api/engine/v2/uploads" : "/api/engine/v2/signage";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AuthenticatedImageDirective_BaseFactory;
      return function AuthenticatedImageDirective_Factory(__ngFactoryType__) {
        return (\u0275AuthenticatedImageDirective_BaseFactory || (\u0275AuthenticatedImageDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AuthenticatedImageDirective)))(__ngFactoryType__ || _AuthenticatedImageDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuthenticatedImageDirective, selectors: [["img", "auth", ""], ["video", "auth", ""], ["audio", "auth", ""]], inputs: { source: [1, "source"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[auth], video[auth], audio[auth]"
    }]
  }], null, { source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }] });
})();

export {
  setAuthCookie,
  AuthenticatedImageDirective
};
//# debugId=5d5c358f-14af-5740-b1ca-61cb0eae976e
//# sourceMappingURL=chunk-4Q7T2TMZ.js.map
