import {
  ChatService,
  DateFromPipe
} from "./chunk-4BHSR5SI.js";
import {
  SanitizePipe
} from "./chunk-7IOUEM67.js";
import "./chunk-AHQCGNDO.js";
import {
  TranslatePipe
} from "./chunk-ZF3H46FM.js";
import {
  OrganisationService,
  currentUser
} from "./chunk-V72PF4T5.js";
import {
  AsyncHandler,
  J,
  Mt,
  et
} from "./chunk-KGDOITXZ.js";
import {
  ActivatedRoute
} from "./chunk-EWXLGUEE.js";
import {
  IconComponent
} from "./chunk-INMTY3DS.js";
import "./chunk-XGSYTLXL.js";
import "./chunk-LEWKNA5J.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JU4P7B37.js";
import "./chunk-REERWBDM.js";
import "./chunk-XQQXKDT5.js";
import {
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Input,
  Pipe,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-XX344EG7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// libs/components/src/lib/authenticated-image.pipe.ts
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
function canLoadAuthenticatedImage(source) {
  return (FAILED_LOADS.get(source) || 0) <= Date.now();
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
function authHeaders() {
  const tkn = J();
  return tkn === "x-api-key" ? { "X-API-Key": et() } : { Authorization: `Bearer ${tkn}` };
}
function loadAuthenticatedImage(source, cookie_path) {
  return loadImage(source, () => {
    setAuthCookie(cookie_path);
    return fetch(source);
  });
}
function loadAuthenticatedImageWithHeader(source) {
  return loadImage(source, () => fetch(source, { headers: authHeaders() }));
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
  const load2 = request().then(async (response) => {
    if (!response?.ok) {
      throw new Error(`Failed to fetch image: ${response?.status}`);
    }
    const url = URL.createObjectURL(await response.blob());
    return cacheObjectUrl(source, url);
  }).catch((error) => {
    rememberFailedLoad(source);
    throw error;
  }).finally(() => IMAGE_LOADS.delete(source));
  IMAGE_LOADS.set(source, load2);
  return load2;
}
var AuthenticatedImagePipe = class _AuthenticatedImagePipe {
  constructor() {
    this._change_detector = inject(ChangeDetectorRef);
    this._loading = /* @__PURE__ */ new Set();
  }
  transform(source) {
    if (!source || typeof source !== "string")
      return "";
    if (!source.includes("/api/engine/v2/uploads"))
      return source;
    const cached = getCachedAuthenticatedImage(source);
    if (cached)
      return cached;
    if (!Mt() || this._loading.has(source) || !canLoadAuthenticatedImage(source)) {
      return "";
    }
    this._loading.add(source);
    void loadAuthenticatedImage(source, "/api/engine/v2/uploads").catch((error) => console.info("Failed to load image:", source, error)).finally(() => {
      this._loading.delete(source);
      this._change_detector.markForCheck();
    });
    return "";
  }
  static {
    this.\u0275fac = function AuthenticatedImagePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticatedImagePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "authenticatedImage,authImage", type: _AuthenticatedImagePipe, pure: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImagePipe, [{
    type: Pipe,
    args: [{
      name: "authenticatedImage,authImage",
      pure: false
    }]
  }], null, null);
})();

// libs/components/src/lib/authenticated-image.directive.ts
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
    this._observer?.disconnect();
    this._observer = null;
    const source = this.source();
    if (!source)
      return;
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
  async _loadImage(source, version) {
    if (version !== this._source_version || source !== this.source())
      return;
    if (!Mt()) {
      this.timeout("load", () => void this._loadImage(source, version), 300);
      return;
    }
    const cached = getCachedAuthenticatedImage(source);
    if (cached) {
      this._element.nativeElement.src = cached;
      return;
    }
    const is_api = source.includes("/api/engine/v2/uploads") || source.includes("/api/engine/v2/signage");
    try {
      const url = is_api ? await loadAuthenticatedImage(source, this._cookiePath(source)) : await loadAuthenticatedImageWithHeader(source);
      if (version === this._source_version && source === this.source()) {
        this._element.nativeElement.src = url;
      }
    } catch (error) {
      if (version === this._source_version) {
        this._element.nativeElement.dispatchEvent(new ErrorEvent("error", { error }));
      }
    }
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

// libs/components/src/lib/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", ctx_r0.initials)("source", ctx_r0.user().photo);
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.user().photo ? 1 : 2);
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  constructor() {
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_valid = computed(
      () => {
        const user = this.user();
        if (!user)
          return false;
        const name = (user.name || "").trim();
        const email = (user.email || "").trim();
        if (name.startsWith("<empty>") || email.startsWith("<empty>")) {
          return false;
        }
        return !!(name || email || user.first_name || user.last_name);
      },
      ...ngDevMode ? [{ debugName: "is_valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get initials() {
    const user = this.user();
    if (!user)
      return "NA";
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`;
    }
    let name = (user.name || "").replace(/<[^>]*>/g, " ").trim();
    if (!name)
      name = (user.email || user.name || "").split("@")[0];
    const parts = name.replace(/[()[\]\-+=\\/@<>]+/gi, " ").split(/\s+/).filter(Boolean);
    if (parts.length === 0)
      return "NA";
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0].slice(0, 2);
  }
  static {
    this.\u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAvatarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "border-base-100", "bg-base-200", "flex", "h-[2.5em]", "w-[2.5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2"], ["initials", "", 1, "text-base-content", "uppercase", "opacity-60"], ["auth", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", "object-center", 3, "alt", "source"]], template: function UserAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.is_valid() ? 0 : -1);
      }
    }, dependencies: [AuthenticatedImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (is_valid()) {
            <div
                class="border-base-100 bg-base-200 flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="text-base-content uppercase opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="flex h-full w-full items-center justify-center object-cover object-center"
                        [alt]="initials"
                        [source]="user().photo"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "libs/components/src/lib/user-avatar.component.ts", lineNumber: 34 });
})();

// node_modules/@litertjs/wasm-utils/dist/index.js
async function runScript(scriptUrl) {
  if (typeof importScripts === "function") {
    importScripts(scriptUrl.toString());
  } else {
    const script = document.createElement("script");
    script.src = scriptUrl.toString();
    script.crossOrigin = "anonymous";
    return new Promise((resolve, revoke) => {
      script.addEventListener("load", () => {
        resolve();
      }, false);
      script.addEventListener("error", (e) => {
        revoke(e);
      }, false);
      document.body.appendChild(script);
    });
  }
}
var createWasmLib = async (constructorFcn, wasmLoaderScript, assetLoaderScript, glCanvas, fileLocator) => {
  if (wasmLoaderScript) {
    await runScript(wasmLoaderScript);
  }
  if (!self.ModuleFactory) {
    throw new Error("ModuleFactory not set.");
  }
  if (assetLoaderScript) {
    await runScript(assetLoaderScript);
    if (!self.ModuleFactory) {
      throw new Error("ModuleFactory not set.");
    }
  }
  if (self.Module && fileLocator) {
    const moduleFileLocator = self.Module;
    moduleFileLocator.locateFile = fileLocator.locateFile;
    if (fileLocator.mainScriptUrlOrBlob) {
      moduleFileLocator.mainScriptUrlOrBlob = fileLocator.mainScriptUrlOrBlob;
    }
  }
  const module = await self.ModuleFactory(self.Module || fileLocator);
  self.ModuleFactory = self.Module = void 0;
  return new constructorFcn(module, glCanvas);
};

// node_modules/@litertjs/core/dist/index.js
var ElementType = {
  NONE: 0,
  FLOAT32: 1,
  INT32: 2,
  UINT8: 3,
  INT64: 4,
  STRING: 5,
  BOOL: 6,
  INT16: 7,
  COMPLEX64: 8,
  INT8: 9,
  FLOAT16: 10,
  FLOAT64: 11,
  COMPLEX128: 12,
  UINT64: 13,
  RESOURCE: 14,
  VARIANT: 15,
  UINT32: 16,
  UINT16: 17,
  INT4: 18,
  BFLOAT16: 19
};
var ElementTypeName = {
  [ElementType.NONE]: "NONE",
  [ElementType.FLOAT32]: "FLOAT32",
  [ElementType.INT32]: "INT32",
  [ElementType.UINT8]: "UINT8",
  [ElementType.INT64]: "INT64",
  [ElementType.STRING]: "STRING",
  [ElementType.BOOL]: "BOOL",
  [ElementType.INT16]: "INT16",
  [ElementType.COMPLEX64]: "COMPLEX64",
  [ElementType.INT8]: "INT8",
  [ElementType.FLOAT16]: "FLOAT16",
  [ElementType.FLOAT64]: "FLOAT64",
  [ElementType.COMPLEX128]: "COMPLEX128",
  [ElementType.UINT64]: "UINT64",
  [ElementType.RESOURCE]: "RESOURCE",
  [ElementType.VARIANT]: "VARIANT",
  [ElementType.UINT32]: "UINT32",
  [ElementType.UINT16]: "UINT16",
  [ElementType.INT4]: "INT4",
  [ElementType.BFLOAT16]: "BFLOAT16"
};
var TensorBufferType = {
  HOST_MEMORY: 1,
  WEB_GPU_BUFFER: 20,
  WEB_GPU_BUFFER_FP16: 21,
  WEB_GPU_BUFFER_PACKED: 26
};
var TensorBufferTypeName = {
  [TensorBufferType.HOST_MEMORY]: "HOST_MEMORY",
  [TensorBufferType.WEB_GPU_BUFFER]: "WEB_GPU_BUFFER",
  [TensorBufferType.WEB_GPU_BUFFER_FP16]: "WEB_GPU_BUFFER_FP16",
  [TensorBufferType.WEB_GPU_BUFFER_PACKED]: "WEB_GPU_BUFFER_PACKED"
};
var DATATYPES = Object.freeze([
  {
    dtype: "float32",
    typedArrayConstructor: Float32Array,
    elementType: ElementType.FLOAT32
  },
  {
    dtype: "int32",
    typedArrayConstructor: Int32Array,
    elementType: ElementType.INT32
  },
  {
    dtype: "uint8",
    typedArrayConstructor: Uint8Array,
    elementType: ElementType.UINT8
  }
]);
function getDataType(val) {
  for (const dataTypeMapping of DATATYPES) {
    if (dataTypeMapping.dtype === val || dataTypeMapping.typedArrayConstructor === val || val instanceof dataTypeMapping.typedArrayConstructor || dataTypeMapping.elementType === val) {
      return dataTypeMapping;
    }
  }
  if (typeof val === "string") {
    throw new Error(`DType ${val} is not supported.`);
  } else if (val instanceof Object) {
    throw new Error(`Typed array ${"name" in val ? val.name : val.constructor.name} is not supported.`);
  } else {
    throw new Error(
      `Element type ${ElementTypeName[val] ?? val} is not supported.`
    );
  }
}
var LiteRtNotLoadedError = class extends Error {
  constructor() {
    super(
      "LiteRT is not initialized yet. Please call loadLiteRt() and wait for its promise to resolve to load the LiteRT WASM module."
    );
  }
};
var globalLiteRt = void 0;
var globalLiteRtPromise = void 0;
function getGlobalLiteRt() {
  if (!globalLiteRt) {
    throw new LiteRtNotLoadedError();
  }
  return globalLiteRt;
}
function setGlobalLiteRt(liteRt) {
  globalLiteRt = liteRt;
}
function getGlobalLiteRtPromise() {
  return globalLiteRtPromise;
}
function hasGlobalLiteRtPromise() {
  return Boolean(globalLiteRtPromise);
}
function setGlobalLiteRtPromise(promise) {
  globalLiteRtPromise = promise;
}
var AcceleratorDefaultTensorBufferType = {
  "webgpu": TensorBufferType.WEB_GPU_BUFFER_PACKED,
  "wasm": TensorBufferType.HOST_MEMORY
};
var TensorBufferTypeToAccelerator = {
  [TensorBufferType.HOST_MEMORY]: "wasm",
  [TensorBufferType.WEB_GPU_BUFFER]: "webgpu",
  [TensorBufferType.WEB_GPU_BUFFER_FP16]: "webgpu",
  [TensorBufferType.WEB_GPU_BUFFER_PACKED]: "webgpu"
};
var DESIRED_WEBGPU_FEATURES = [
  "shader-f16",
  "subgroups"
];
var Environment = class _Environment {
  constructor(options) {
    this.options = options;
    this.liteRtEnvironment = getGlobalLiteRt().liteRtWasm.LiteRtEnvironment.create(
      options.webGpuDevice
    );
  }
  liteRtEnvironment;
  static async create(options = {}) {
    let webGpuDevice = null;
    if ("webGpuDevice" in options) {
      if (options.webGpuDevice) {
        webGpuDevice = options.webGpuDevice;
      }
    } else {
      try {
        webGpuDevice = await createDefaultWebGpuDevice();
      } catch (e) {
        console.warn("Failed to create default WebGPU device:", e);
      }
    }
    return new _Environment(__spreadProps(__spreadValues({}, options), {
      webGpuDevice
    }));
  }
  get webGpuDevice() {
    return this.options.webGpuDevice;
  }
  delete() {
    this.liteRtEnvironment.delete();
  }
};
async function createDefaultWebGpuDevice() {
  const adapterDescriptor = {
    powerPreference: "high-performance"
  };
  const adapter = await navigator.gpu.requestAdapter(adapterDescriptor);
  if (!adapter) {
    throw new Error("No GPU adapter found.");
  }
  const requiredLimits = {
    maxBufferSize: adapter.limits.maxBufferSize,
    maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
    maxStorageBuffersPerShaderStage: adapter.limits.maxStorageBuffersPerShaderStage,
    maxTextureDimension2D: adapter.limits.maxTextureDimension2D
  };
  const requiredFeatures = [];
  for (const feature of DESIRED_WEBGPU_FEATURES) {
    if (adapter.features.has(feature)) {
      requiredFeatures.push(feature);
    }
  }
  return await adapter.requestDevice({
    requiredFeatures,
    requiredLimits
  });
}
function emscriptenVectorToArray(vector) {
  const array = new Array(vector.size());
  for (let i = 0; i < vector.size(); ++i) {
    array[i] = vector.get(i);
  }
  vector.delete();
  return array;
}
function fillEmscriptenVector(data, vector) {
  for (const item of data) {
    vector.push_back(item);
  }
}
function parseData(remainingArgs) {
  const data = remainingArgs.shift();
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  if (data instanceof liteRtWasm.LiteRtTensorBuffer) {
    return { liteRtTensorBuffer: data };
  } else if (ArrayBuffer.isView(data)) {
    return { typedArray: data };
  } else if (data instanceof GPUBuffer) {
    return { gpuBuffer: data };
  } else {
    throw new Error(
      `Unknown type (${data?.constructor.name ?? data}) provided to create a Tensor`
    );
  }
}
function parseShape(remainingArgs) {
  if (Array.isArray(remainingArgs[0]) || remainingArgs[0] instanceof Int32Array) {
    return { shape: remainingArgs.shift() };
  } else {
    return {};
  }
}
function shiftUntilDefined(remainingArgs) {
  while (remainingArgs.length > 0 && remainingArgs[0] === void 0) {
    remainingArgs.shift();
  }
}
function parseDataType(remainingArgs) {
  shiftUntilDefined(remainingArgs);
  if (typeof remainingArgs[0] === "string") {
    const dtype = remainingArgs.shift();
    return { dataType: getDataType(dtype).dtype };
  } else {
    return {};
  }
}
function parseEnvironment(remainingArgs) {
  shiftUntilDefined(remainingArgs);
  if (remainingArgs[0] instanceof Environment) {
    return { environment: remainingArgs.shift() };
  } else {
    return {};
  }
}
function parseOnDelete(remainingArgs) {
  shiftUntilDefined(remainingArgs);
  if (remainingArgs[0] instanceof Function) {
    return { onDelete: remainingArgs.shift() };
  } else {
    return {};
  }
}
function parseArgs(args) {
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, parseData(args)), parseShape(args)), parseDataType(args)), parseEnvironment(args)), parseOnDelete(args));
}
var Tensor = class _Tensor {
  liteRtTensorBuffer;
  type;
  environment;
  deletedInternal = false;
  onDelete;
  static copyFunctions = /* @__PURE__ */ new Map();
  constructor(a, b, c, d, e) {
    const {
      typedArray,
      gpuBuffer,
      liteRtTensorBuffer,
      shape,
      dataType,
      environment,
      onDelete
    } = parseArgs([a, b, c, d, e]);
    this.onDelete = onDelete;
    this.environment = environment ?? getGlobalLiteRt().getDefaultEnvironment();
    if (liteRtTensorBuffer) {
      if (shape) {
        throw new Error(
          "A LiteRtTensorBuffer cannot be provided with a shape."
        );
      }
      if (dataType) {
        throw new Error(
          "A LiteRtTensorBuffer cannot be provided with a data type."
        );
      }
      this.liteRtTensorBuffer = liteRtTensorBuffer;
    } else if (gpuBuffer) {
      if (!shape) {
        throw new Error("A GPUBuffer must be provided with a shape.");
      }
      if (!dataType) {
        throw new Error("A GPUBuffer must be provided with a data type.");
      }
      const [liteRtTensorBuffer2, webGpuBufferPtr] = webGpuBufferToLiteRtTensorBuffer(
        gpuBuffer,
        shape,
        dataType,
        this.environment
      );
      this.liteRtTensorBuffer = liteRtTensorBuffer2;
      const onDelete2 = this.onDelete;
      this.onDelete = () => {
        const liteRtWasm = getGlobalLiteRt().liteRtWasm;
        liteRtWasm.wgpuBufferRelease(webGpuBufferPtr);
        onDelete2?.();
      };
    } else if (typedArray) {
      this.liteRtTensorBuffer = typedArrayToLiteRtTensorBuffer(
        typedArray,
        shape,
        environment
      );
    } else {
      throw new Error("No data provided to create a Tensor.");
    }
    this.type = liteRtTensorBufferToTensorType(this.liteRtTensorBuffer);
  }
  static fromTypedArray(data, shape, environment) {
    return new _Tensor(data, shape, environment);
  }
  ensureNotDeleted() {
    if (this.deleted) {
      throw new Error("Tensor is deleted and cannot be used.");
    }
  }
  async data() {
    this.ensureNotDeleted();
    if (this.liteRtTensorBuffer.bufferType().value === TensorBufferType.HOST_MEMORY) {
      return this.toTypedArray();
    }
    const copy = await this.copyTo("wasm");
    const data = await copy.data();
    copy.delete();
    return data;
  }
  toTypedArray() {
    this.ensureNotDeleted();
    const liteRtWasm = getGlobalLiteRt().liteRtWasm;
    if (this.liteRtTensorBuffer.isWebGpuMemory()) {
      throw new Error(
        "Cannot convert a Tensor with WebGPU memory to a TypedArray."
      );
    }
    if (this.liteRtTensorBuffer.bufferType().value !== liteRtWasm.LiteRtTensorBufferType.HOST_MEMORY.value) {
      throw new Error(
        "Cannot convert a Tensor with non-host memory to a TypedArray."
      );
    }
    if (this.liteRtTensorBuffer.size() !== this.liteRtTensorBuffer.packedSize() || this.liteRtTensorBuffer.offset() !== 0) {
      throw new Error("Tensors with strides or padding are not yet supported.");
    }
    const rankedTensorType = this.liteRtTensorBuffer.tensorType();
    const elementType = rankedTensorType.elementType();
    const byteWidth = liteRtWasm.liteRtGetByteWidth(elementType);
    rankedTensorType.delete();
    const typedArrayConstructor = getDataType(
      elementType.value
    ).typedArrayConstructor;
    if (typedArrayConstructor.BYTES_PER_ELEMENT !== byteWidth) {
      throw new Error(
        `Byte width ${byteWidth} of the tensor's element type ${ElementTypeName[elementType.value]} does not match the expected byte width ${typedArrayConstructor.BYTES_PER_ELEMENT} of the ${typedArrayConstructor.name}.`
      );
    }
    const dataPtr = this.liteRtTensorBuffer.lock(
      getGlobalLiteRt().liteRtWasm.LiteRtTensorBufferLockMode.READ
    );
    try {
      const uint8Array = liteRtWasm.HEAPU8.slice(
        dataPtr,
        dataPtr + this.liteRtTensorBuffer.packedSize()
      );
      const typedArray = new typedArrayConstructor(
        uint8Array.buffer,
        uint8Array.byteOffset,
        uint8Array.byteLength / byteWidth
      );
      return typedArray;
    } finally {
      this.liteRtTensorBuffer.unlock();
    }
  }
  getBufferType() {
    this.ensureNotDeleted();
    return this.liteRtTensorBuffer.bufferType().value;
  }
  /**
   * Returns the underlying GPUBuffer of the Tensor.
   *
   * Note that the lifetime of the returned GPUBuffer is dependant upon how the
   * Tensor was created. If the Tensor was constructed from a GPUBuffer, then
   * the GPUBuffer will NOT be released when the Tensor is deleted. If the
   * Tensor was copied/moved to GPU from host memory, then the GPU buffer will
   * be released when the Tensor is deleted.
   *
   * The GPU buffer may be larger than the actual data in the tensor.
   *
   * @return The GPUBuffer containing the Tensor's data.
   */
  toGpuBuffer() {
    this.ensureNotDeleted();
    const liteRtWasm = getGlobalLiteRt().liteRtWasm;
    if (!this.liteRtTensorBuffer.isWebGpuMemory()) {
      throw new Error(
        "Cannot convert a Tensor with non-WebGPU memory to a GPUBuffer."
      );
    }
    const bufferTypeValue = this.liteRtTensorBuffer.bufferType().value;
    if (bufferTypeValue !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER.value && bufferTypeValue !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_FP16.value && bufferTypeValue !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_PACKED.value) {
      throw new Error(
        "Cannot convert a Tensor with host memory to a GPUBuffer."
      );
    }
    if (this.liteRtTensorBuffer.size() !== this.liteRtTensorBuffer.packedSize() || this.liteRtTensorBuffer.offset() !== 0) {
      throw new Error("Tensors with strides or padding are not yet supported.");
    }
    const gpuBufferId = this.liteRtTensorBuffer.getWebGpuBuffer();
    return liteRtWasm.WebGPU.getJsObject(gpuBufferId);
  }
  getCopyFunctionSet(destination) {
    this.ensureNotDeleted();
    const sourceBufferType = this.getBufferType();
    const copyFunctions = _Tensor.copyFunctions.get(sourceBufferType);
    if (!copyFunctions) {
      throw new Error(
        `TensorBufferType ${TensorBufferTypeName[sourceBufferType] ?? sourceBufferType} does not support copying or moving`
      );
    }
    const destinationBufferType = typeof destination === "string" ? AcceleratorDefaultTensorBufferType[destination] : destination;
    if (destinationBufferType == null) {
      throw new Error(
        `Unknown destination '${destination}' for copying or moving.`
      );
    }
    const copyFunctionSet = copyFunctions.get(destinationBufferType);
    if (!copyFunctionSet) {
      const supportedDestinations = [...copyFunctions].map(
        ([key]) => TensorBufferTypeName[key] ?? key
      );
      throw new Error(
        `TensorBufferType ${TensorBufferTypeName[sourceBufferType]} does not support copying or moving to ${TensorBufferTypeName[destinationBufferType]}. It supports the following TensorBufferTypes: [${supportedDestinations.join(
          ", "
        )}].`
      );
    }
    return [copyFunctionSet, destinationBufferType];
  }
  /**
   * Copies the tensor to the given accelerator.
   *
   * @param destination The accelerator or buffer type to copy to.
   * @return A promise that resolves to the copied tensor.
   */
  async copyTo(destination, options) {
    const [copyFunctionSet, destinationBufferType] = this.getCopyFunctionSet(destination);
    if (!copyFunctionSet.copyTo) {
      throw new Error(
        `Copying to ${TensorBufferTypeName[destinationBufferType]} is not supported by this tensor.`
      );
    }
    return copyFunctionSet.copyTo(this, options);
  }
  /**
   * Moves the tensor to the given accelerator.
   *
   * @param destination The accelerator or buffer type to move to.
   * @return A promise that resolves to the moved tensor.
   */
  async moveTo(destination, options) {
    const [copyFunctionSet, destinationBufferType] = this.getCopyFunctionSet(destination);
    if (!copyFunctionSet.moveTo) {
      throw new Error(
        `Moving to ${TensorBufferTypeName[destinationBufferType]} is not supported by this tensor.`
      );
    }
    return copyFunctionSet.moveTo(this, options);
  }
  get bufferType() {
    return this.liteRtTensorBuffer.bufferType().value;
  }
  get accelerator() {
    const accelerator = TensorBufferTypeToAccelerator[this.bufferType];
    if (accelerator === void 0) {
      throw new Error(
        `TensorBufferType ${TensorBufferTypeName[this.bufferType]} has an unknown accelerator type.`
      );
    }
    return accelerator;
  }
  get deleted() {
    return this.deletedInternal;
  }
  delete() {
    if (this.deletedInternal) {
      return;
    }
    this.deletedInternal = true;
    this.liteRtTensorBuffer.delete();
    this.onDelete?.();
  }
};
function liteRtTensorBufferToTensorType(liteRtTensorBuffer) {
  const liteRtRankedTensorType = liteRtTensorBuffer.tensorType();
  const elementType = liteRtRankedTensorType.elementType();
  const liteRtLayout = liteRtRankedTensorType.layout();
  const dimensions = liteRtLayout.dimensions();
  liteRtLayout.delete();
  liteRtRankedTensorType.delete();
  return {
    dtype: getDataType(elementType.value).dtype,
    layout: { dimensions: emscriptenVectorToArray(dimensions) }
  };
}
function webGpuBufferToLiteRtTensorBuffer(gpuBuffer, shape, dtype, environment) {
  const globalLiteRt2 = getGlobalLiteRt();
  const liteRtWasm = globalLiteRt2.liteRtWasm;
  const dimensionsVector = new liteRtWasm.VectorInt32();
  fillEmscriptenVector(shape, dimensionsVector);
  const layout = liteRtWasm.LiteRtLayout.create(dimensionsVector);
  dimensionsVector.delete();
  const rankedTensorType = liteRtWasm.LiteRtRankedTensorType.create(
    { value: getDataType(dtype).elementType },
    layout
  );
  layout.delete();
  const importedGpuBufferPtr = liteRtWasm.WebGPU.importJsBuffer(gpuBuffer);
  const liteRtTensorBuffer = liteRtWasm.LiteRtTensorBuffer.createFromWebGpuBuffer(
    environment.liteRtEnvironment,
    rankedTensorType,
    liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_PACKED,
    importedGpuBufferPtr,
    gpuBuffer.size
  );
  rankedTensorType.delete();
  return [liteRtTensorBuffer, importedGpuBufferPtr];
}
function typedArrayToLiteRtTensorBuffer(data, shape, environment) {
  const globalLiteRt2 = getGlobalLiteRt();
  const liteRtWasm = globalLiteRt2.liteRtWasm;
  environment = environment ?? globalLiteRt2.getDefaultEnvironment();
  const elementType = getDataType(data).elementType;
  const dimensionsVector = new liteRtWasm.VectorInt32();
  fillEmscriptenVector(shape ?? [data.length], dimensionsVector);
  const layout = liteRtWasm.LiteRtLayout.create(dimensionsVector);
  dimensionsVector.delete();
  const expectedNumElements = layout.numElements();
  if (data.length !== expectedNumElements) {
    layout.delete();
    throw new Error(
      `Number of elements ${data.length} of the provided TypedArray does not match the expected number of elements ${expectedNumElements}.`
    );
  }
  const rankedTensorType = liteRtWasm.LiteRtRankedTensorType.create(
    { value: elementType },
    layout
  );
  layout.delete();
  const arrayType = data.constructor;
  const bufferSize = arrayType.BYTES_PER_ELEMENT * data.length;
  const expectedBufferSize = rankedTensorType.bytes();
  if (bufferSize !== expectedBufferSize) {
    rankedTensorType.delete();
    throw new Error(
      `Byte length ${bufferSize} of the provided TypedArray does not match the expected buffer size ${expectedBufferSize}.`
    );
  }
  const liteRtTensorBuffer = liteRtWasm.LiteRtTensorBuffer.createManaged(
    environment.liteRtEnvironment,
    liteRtWasm.LiteRtTensorBufferType.HOST_MEMORY,
    rankedTensorType,
    bufferSize
  );
  rankedTensorType.delete();
  const dataPtr = liteRtTensorBuffer.lock(
    liteRtWasm.LiteRtTensorBufferLockMode.WRITE
  );
  try {
    const uint8Data = new Uint8Array(
      data.buffer,
      data.byteOffset,
      data.byteLength
    );
    liteRtWasm.HEAPU8.set(uint8Data, dataPtr);
  } finally {
    liteRtTensorBuffer.unlock();
  }
  return liteRtTensorBuffer;
}
var CompiledModelSignatureRunner = class {
  constructor(signatureIndex, liteRtModel, liteRtCompiledModel, options) {
    this.signatureIndex = signatureIndex;
    this.liteRtModel = liteRtModel;
    this.liteRtCompiledModel = liteRtCompiledModel;
    this.options = options;
    this.liteRtSimpleSignature = liteRtModel.getSignature(signatureIndex);
    const inputNames = emscriptenVectorToArray(this.liteRtSimpleSignature.inputNames());
    const inputDetails = [];
    for (let i = 0; i < inputNames.length; i++) {
      const name = inputNames[i];
      const tensorType = liteRtModel.getInputTensorType(signatureIndex, i);
      const requirements = liteRtCompiledModel.getInputBufferRequirements(signatureIndex, i);
      inputDetails.push(makeTensorDetails(name, i, tensorType, requirements));
    }
    this.inputDetails = Object.freeze(inputDetails);
    const outputNames = emscriptenVectorToArray(this.liteRtSimpleSignature.outputNames());
    const outputDetails = [];
    for (let i = 0; i < outputNames.length; i++) {
      const name = outputNames[i];
      const tensorType = liteRtModel.getOutputTensorType(signatureIndex, i);
      const requirements = liteRtCompiledModel.getOutputBufferRequirements(signatureIndex, i);
      outputDetails.push(makeTensorDetails(name, i, tensorType, requirements));
    }
    this.outputDetails = Object.freeze(outputDetails);
  }
  inputDetails;
  outputDetails;
  liteRtSimpleSignature;
  deletedInternal = false;
  /**
   * The string key corresponding to this signature in the model.
   */
  get key() {
    this.ensureNotDeleted();
    return this.liteRtSimpleSignature.key();
  }
  /**
   * Get details about each input tensor.
   */
  getInputDetails() {
    this.ensureNotDeleted();
    return this.inputDetails;
  }
  /**
   * Get details about each output tensor.
   */
  getOutputDetails() {
    this.ensureNotDeleted();
    return this.outputDetails;
  }
  async run(input2) {
    this.ensureNotDeleted();
    const inputArray = this.inputsToArray(input2);
    const { inputsOnAccelerator, cleanup } = await this.ensureInputsOnAccelerator(inputArray);
    let outputArray;
    try {
      outputArray = await this.runWithArray(inputsOnAccelerator);
    } finally {
      cleanup();
    }
    if (Array.isArray(input2) || input2 instanceof Tensor) {
      return outputArray;
    } else {
      return this.outputsToRecord(outputArray);
    }
  }
  inputsToArray(input2) {
    if (Array.isArray(input2)) {
      if (input2.length !== this.inputDetails.length) {
        throw new Error(
          `run() called with ${input2.length} inputs, but signature expects ${this.inputDetails.length} inputs`
        );
      }
      return input2;
    }
    if (input2 instanceof Tensor) {
      if (this.inputDetails.length !== 1) {
        throw new Error(
          `run() called with a single tensor, but signature expects ${this.inputDetails.length} inputs`
        );
      }
      return [input2];
    }
    const inputArray = [];
    for (const inputDetails of this.inputDetails) {
      if (!(inputDetails.name in input2)) {
        throw new Error(
          `run() called with input record that is missing input ${inputDetails.name} with index ${inputDetails.index}`
        );
      }
      inputArray.push(input2[inputDetails.name]);
    }
    return inputArray;
  }
  outputsToRecord(output) {
    const outputRecord = {};
    for (let i = 0; i < this.outputDetails.length; i++) {
      outputRecord[this.outputDetails[i].name] = output[i];
    }
    return outputRecord;
  }
  /**
   * Ensures that all input tensors are on the correct accelerator. Copies any
   * tensors that are not on the correct accelerator.
   *
   * @param inputs The input tensors to be passed to the signature. They must
   *     be in the same order and quantity as the input details.
   * @return A promise that resolves to a list of input tensors that are on the
   *     correct accelerator, and a cleanup function that deletes any tensors
   *     that were copied.
   */
  async ensureInputsOnAccelerator(inputs) {
    const toDelete = [];
    const inputsOnAccelerator = [];
    const inputDetails = this.getInputDetails();
    if (inputs.length !== inputDetails.length) {
      throw new Error(`ensureInputsOnAccelerator() called with ${inputs.length} inputs, but signature expects ${inputDetails.length} inputs`);
    }
    for (let i = 0; i < inputs.length; i++) {
      const input2 = inputs[i];
      const bufferType = input2.getBufferType();
      const supportedBufferTypes = inputDetails[i].supportedBufferTypes;
      if (supportedBufferTypes.size === 0) {
        throw new Error(`Tensor ${inputDetails[i].name} with index ${inputDetails[i].index} has no supported buffer types.`);
      }
      if (supportedBufferTypes.has(bufferType)) {
        inputsOnAccelerator.push(input2);
      } else {
        const newBufferType = supportedBufferTypes.values().next().value;
        const copy = await input2.copyTo(newBufferType);
        toDelete.push(copy);
        inputsOnAccelerator.push(copy);
      }
    }
    return {
      inputsOnAccelerator,
      cleanup: () => {
        for (const tensor of toDelete) {
          tensor.delete();
        }
      }
    };
  }
  async runWithArray(input2) {
    for (let i = 0; i < input2.length; i++) {
      const inputTensor = input2[i];
      const expectedRankedTensorType = this.liteRtModel.getInputTensorType(this.signatureIndex, i);
      const inputRequirements = this.liteRtCompiledModel.getInputBufferRequirements(
        this.signatureIndex,
        i
      );
      getGlobalLiteRt().liteRtWasm.checkTensorBufferCompatible(
        inputTensor.liteRtTensorBuffer,
        expectedRankedTensorType,
        inputRequirements
      );
      expectedRankedTensorType.delete();
      inputRequirements.delete();
    }
    const outputTensorBuffers = await this.liteRtCompiledModel.run(
      this.signatureIndex,
      input2.map((tensor) => tensor.liteRtTensorBuffer)
    );
    return outputTensorBuffers.map(
      (tensorBuffer) => new Tensor(tensorBuffer, this.options.environment)
    );
  }
  get deleted() {
    return this.deletedInternal;
  }
  ensureNotDeleted() {
    if (this.deleted) {
      throw new Error(
        "CompiledModelSignatureRunner is deleted and cannot be used."
      );
    }
  }
  delete() {
    if (this.deletedInternal) {
      return;
    }
    this.deletedInternal = true;
    this.liteRtSimpleSignature.delete();
  }
};
function makeTensorDetails(name, index, tensorType, requirements) {
  const layout = tensorType.layout();
  const dimensions = emscriptenVectorToArray(layout.dimensions());
  layout.delete();
  const supportedBufferTypes = new Set(emscriptenVectorToArray(requirements.supportedTypes()).map(({ value }) => value));
  const details = {
    name,
    index,
    dtype: getDataType(tensorType.elementType().value).dtype,
    shape: new Int32Array(dimensions),
    supportedBufferTypes
  };
  tensorType.delete();
  requirements.delete();
  return details;
}
var CompiledModel = class {
  constructor(model, liteRtCompiledModel, options, onDelete) {
    this.model = model;
    this.liteRtCompiledModel = liteRtCompiledModel;
    this.options = options;
    this.onDelete = onDelete;
    const numSignatures = model.liteRtModel.getNumSignatures();
    const compiledModelSignatureRunners = {};
    for (let i = 0; i < numSignatures; i++) {
      const compiledModelSignatureRunner = new CompiledModelSignatureRunner(
        i,
        model.liteRtModel,
        liteRtCompiledModel,
        options
      );
      compiledModelSignatureRunners[compiledModelSignatureRunner.key] = compiledModelSignatureRunner;
    }
    this.compiledModelSignatureRunners = Object.freeze(compiledModelSignatureRunners);
    this.defaultSignature = Object.values(this.signatures)[0];
    this.key = this.defaultSignature.key;
  }
  defaultSignature;
  compiledModelSignatureRunners;
  key;
  deletedInternal = false;
  get signatures() {
    this.ensureNotDeleted();
    return this.compiledModelSignatureRunners;
  }
  getInputDetails() {
    this.ensureNotDeleted();
    return this.defaultSignature.getInputDetails();
  }
  getOutputDetails() {
    this.ensureNotDeleted();
    return this.defaultSignature.getOutputDetails();
  }
  async run(inputOrSignatureName, maybeInput) {
    this.ensureNotDeleted();
    const [signature, input2] = this.parseRunInputs(inputOrSignatureName, maybeInput);
    return await signature.run(input2);
  }
  parseRunInputs(inputOrSignatureName, maybeInput) {
    let signature;
    let input2;
    if (typeof inputOrSignatureName === "string") {
      signature = this.signatures[inputOrSignatureName];
      if (!signature) {
        throw new Error(
          `No signature named ${inputOrSignatureName} found in model.`
        );
      }
      if (!maybeInput) {
        throw new Error(
          `No input provided for signature ${inputOrSignatureName}`
        );
      }
      input2 = maybeInput;
    } else {
      signature = this.defaultSignature;
      input2 = inputOrSignatureName;
    }
    return [signature, input2];
  }
  get deleted() {
    return this.deletedInternal;
  }
  ensureNotDeleted() {
    if (this.deleted) {
      throw new Error("CompiledModel is deleted and cannot be used.");
    }
  }
  get isFullyAccelerated() {
    this.ensureNotDeleted();
    return this.liteRtCompiledModel.isFullyAccelerated();
  }
  delete() {
    if (this.deletedInternal) {
      return;
    }
    this.deletedInternal = true;
    this.liteRtCompiledModel.delete();
    this.model.delete();
    for (const signatureRunner of Object.values(
      this.compiledModelSignatureRunners
    )) {
      signatureRunner.delete();
    }
    this.onDelete();
  }
};
async function urlToUint8Array(url) {
  const response = await fetch(url);
  return new Uint8Array(await response.arrayBuffer());
}
async function readableStreamDefaultReaderToUint8Array(reader) {
  let byteOffset = 0;
  let array = new Uint8Array(
    1024
    /* arbitrary starting size */
  );
  const MAX_ARRAY_SIZE = 2e9;
  while (true) {
    const { done, value } = await reader.read();
    if (value) {
      if (array.byteLength < byteOffset + value.byteLength) {
        if (byteOffset + value.byteLength > MAX_ARRAY_SIZE) {
          throw new Error(`Model is too large (> ${MAX_ARRAY_SIZE} bytes).`);
        }
        const newArray = new Uint8Array(Math.min(
          MAX_ARRAY_SIZE,
          Math.max(array.byteLength, value.byteLength) * 2
        ));
        newArray.set(array);
        array = newArray;
      }
      array.set(value, byteOffset);
      byteOffset += value.byteLength;
    }
    if (done) {
      break;
    }
  }
  return array.slice(0, byteOffset);
}
var Model = class {
  constructor(liteRtModel, onDelete) {
    this.liteRtModel = liteRtModel;
    this.onDelete = onDelete;
  }
  delete() {
    this.liteRtModel.delete();
    this.onDelete();
  }
};
function fillCompileOptions(compileOptions = {}, environment, defaultThreadCount) {
  return {
    environment,
    accelerator: compileOptions.accelerator ?? (environment.webGpuDevice ? "webgpu" : "wasm"),
    cpuOptions: compileOptions.cpuOptions ?? { numThreads: defaultThreadCount },
    gpuOptions: compileOptions.gpuOptions ?? {},
    webNNOptions: compileOptions.webNNOptions ?? {}
  };
}
var WASM_RELAXED_SIMD_CHECK = new Uint8Array([
  0,
  97,
  115,
  109,
  1,
  0,
  0,
  0,
  1,
  5,
  1,
  96,
  0,
  1,
  123,
  3,
  2,
  1,
  0,
  10,
  15,
  1,
  13,
  0,
  65,
  1,
  253,
  15,
  65,
  2,
  253,
  15,
  253,
  128,
  2,
  11
]);
var WASM_THREADS_CHECK = new Uint8Array([
  0,
  97,
  115,
  109,
  1,
  0,
  0,
  0,
  1,
  4,
  1,
  96,
  0,
  0,
  3,
  2,
  1,
  0,
  5,
  4,
  1,
  3,
  1,
  1,
  10,
  11,
  1,
  9,
  0,
  65,
  0,
  254,
  16,
  2,
  0,
  26,
  11
]);
var WASM_FEATURE_VALUES = {
  "relaxedSimd": void 0,
  "threads": void 0,
  "jspi": void 0,
  "webnn": void 0
};
function isJspiSupported() {
  return "Suspending" in WebAssembly;
}
function isWebNnSupported() {
  return typeof navigator !== "undefined" && !!navigator.ml;
}
async function tryWasm(wasm) {
  try {
    await WebAssembly.instantiate(wasm);
    return { supported: true };
  } catch (e) {
    return { supported: false, error: e };
  }
}
var WASM_FEATURE_CHECKS = {
  "relaxedSimd": () => {
    if (WASM_FEATURE_VALUES.relaxedSimd === void 0) {
      WASM_FEATURE_VALUES.relaxedSimd = tryWasm(WASM_RELAXED_SIMD_CHECK);
    }
    return WASM_FEATURE_VALUES.relaxedSimd;
  },
  "threads": () => {
    if (WASM_FEATURE_VALUES.threads === void 0) {
      try {
        if (typeof MessageChannel !== "undefined") {
          new MessageChannel().port1.postMessage(new SharedArrayBuffer(1));
        }
        WASM_FEATURE_VALUES.threads = tryWasm(WASM_THREADS_CHECK);
      } catch (e) {
        WASM_FEATURE_VALUES.threads = Promise.resolve({ supported: false, error: e });
      }
    }
    return WASM_FEATURE_VALUES.threads;
  },
  "jspi": () => {
    if (WASM_FEATURE_VALUES.jspi === void 0) {
      const supported = isJspiSupported();
      WASM_FEATURE_VALUES.jspi = Promise.resolve({
        supported,
        error: supported ? void 0 : new Error("JSPI is not supported")
      });
    }
    return WASM_FEATURE_VALUES.jspi;
  },
  "webnn": () => {
    if (WASM_FEATURE_VALUES.webnn === void 0) {
      const supported = isWebNnSupported();
      WASM_FEATURE_VALUES.webnn = Promise.resolve({
        supported,
        error: supported ? void 0 : new Error("WebNN is not supported")
      });
    }
    return WASM_FEATURE_VALUES.webnn;
  }
};
async function supportsFeature(feature) {
  const check = WASM_FEATURE_CHECKS[feature]?.();
  if (!check) {
    throw new Error(`Unknown feature: ${feature}`);
  }
  return (await check).supported;
}
async function throwIfFeatureNotSupported(feature) {
  const check = WASM_FEATURE_CHECKS[feature]?.();
  if (!check) {
    throw new Error(`Unknown feature: ${feature}`);
  }
  const result = await check;
  if (!result.supported) {
    throw result.error;
  }
}
function isWebGPUSupported() {
  return !!(typeof globalThis !== "undefined" && globalThis.navigator && globalThis.navigator.gpu);
}
function loadAndCompile(model, compileOptions) {
  return getGlobalLiteRt().loadAndCompile(model, compileOptions);
}
var LiteRt = class {
  liteRtWasm;
  defaultEnvironment;
  objectsToDelete = /* @__PURE__ */ new Set();
  constructor(wasmModule) {
    this.liteRtWasm = wasmModule;
    this.liteRtWasm.setupLogging();
  }
  setDefaultEnvironment(environment) {
    this.defaultEnvironment = environment;
  }
  getDefaultEnvironment() {
    if (!this.defaultEnvironment) {
      throw new Error("Default environment is not set.");
    }
    return this.defaultEnvironment;
  }
  setWebGpuDevice(device) {
    const oldEnvironment = this.getDefaultEnvironment();
    this.setDefaultEnvironment(new Environment(__spreadProps(__spreadValues({}, oldEnvironment.options), {
      webGpuDevice: device
    })));
  }
  getWebGpuDevice() {
    return this.getDefaultEnvironment().webGpuDevice;
  }
  /**
   * Registers an object to be deleted when this LiteRt instance is deleted.
   * Internal use only.
   */
  _registerObjectForDeletion(object) {
    this.objectsToDelete.add(object);
  }
  /**
   * Unregisters an object from being deleted when this LiteRt instance is
   * deleted. Internal use only.
   */
  _unregisterObjectForDeletion(object) {
    this.objectsToDelete.delete(object);
  }
  /**
   * Loads and compiles a LiteRt model.
   *
   * @param model The model data. This can be a string (the model url), a URL
   *     object, a Uint8Array (the model bytes), or a
   *     ReadableStreamDefaultReader (for streaming model loading).
   * @param compileOptions The options for compiling the model. This includes
   *     the accelerator to use ('webgpu' or 'wasm') and the WebGPU device
   *     (for direct GPU model inputs / outputs).
   * @returns A promise that resolves to the CompiledModel.
   */
  async loadAndCompile(model, compileOptions = {}) {
    let modelData;
    if (typeof model === "string" || model instanceof URL) {
      modelData = await urlToUint8Array(model);
    } else if (model instanceof Uint8Array) {
      modelData = model;
    } else if (model instanceof ReadableStreamDefaultReader) {
      modelData = await readableStreamDefaultReaderToUint8Array(model);
    } else {
      throw new Error("Unsupported model type.");
    }
    const environment = compileOptions.environment ?? this.getDefaultEnvironment();
    const accelerator = compileOptions.accelerator ?? (environment.webGpuDevice ? "webgpu" : "wasm");
    const isWebGpu = accelerator === "webgpu";
    if (isWebGpu && !environment.webGpuDevice) {
      throw new Error(
        "WebGPU was requested but no WebGPU device is set in the environment."
      );
    }
    const filledCompileOptions = fillCompileOptions(
      compileOptions,
      environment,
      this.liteRtWasm.getThreadCount()
    );
    const ptr = this.liteRtWasm._malloc(modelData.byteLength);
    this.liteRtWasm.HEAPU8.set(modelData, ptr);
    const wasmModel = this.liteRtWasm.loadModel(
      filledCompileOptions.environment.liteRtEnvironment,
      ptr,
      modelData.byteLength
    );
    const wasmCompiledModel = await this.liteRtWasm.compileModel(
      filledCompileOptions.environment.liteRtEnvironment,
      wasmModel,
      filledCompileOptions
    );
    const loadedModel = new Model(wasmModel, () => {
      this.liteRtWasm._free(ptr);
    });
    const compiledModel = new CompiledModel(
      loadedModel,
      wasmCompiledModel,
      filledCompileOptions,
      () => {
        this.objectsToDelete.delete(compiledModel);
      }
    );
    this.objectsToDelete.add(compiledModel);
    const isWebNn = accelerator === "webnn";
    const acceleratorRequested = isWebGpu || isWebNn;
    if (acceleratorRequested && !compiledModel.isFullyAccelerated) {
      if (isJspiSupported()) {
        console.warn(
          `%c[LiteRT]%c Model not fully compiled for ${accelerator}. Partially delegating to WASM execution.`,
          "background: #FFA000; color: black; font-weight: bold; padding: 2px 5px; border-radius: 3px;",
          "font-weight: bold;"
        );
      } else {
        console.warn(
          `%c[LiteRT]%c Model not fully compiled for ${accelerator} on non-JSPI browser. Falling back to WASM execution.`,
          "background: #D32F2F; color: white; font-weight: bold; padding: 2px 5px; border-radius: 3px;",
          "color: #D32F2F; font-weight: bold;"
        );
        compiledModel.delete();
        const fallbackCompileOptions = __spreadProps(__spreadValues({}, compileOptions), {
          accelerator: "wasm"
        });
        return this.loadAndCompile(modelData, fallbackCompileOptions);
      }
    }
    return compiledModel;
  }
  delete() {
    for (const object of this.objectsToDelete) {
      object.delete();
    }
  }
};
function pathToString(path) {
  return path;
}
function appendPathSegment(path, segment) {
  if (!path) return segment;
  if (!segment) return path;
  const pathWithSlash = path.endsWith("/") ? path : path + "/";
  const segmentWithoutSlash = segment.startsWith("/") ? segment.substring(1) : segment;
  return pathWithSlash + segmentWithoutSlash;
}
var WASM_JS_FILE_NAME = "litert_wasm_internal.js";
var WASM_JS_COMPAT_FILE_NAME = "litert_wasm_compat_internal.js";
var WASM_JS_THREADED_FILE_NAME = "litert_wasm_threaded_internal.js";
var WASM_JS_JSPI_FILE_NAME = "litert_wasm_jspi_internal.js";
async function load(path, options) {
  const pathString = pathToString(path);
  const isFullFilePath = pathString.endsWith(".wasm") || pathString.endsWith(".js");
  const relaxedSimd = await supportsFeature("relaxedSimd");
  if (options?.threads) {
    if (options?.jspi) {
      throw new Error(
        "The `threads` and `jspi` options are mutually exclusive."
      );
    }
    if (isFullFilePath) {
      console.warn(
        `The \`threads\` option was specified, but the wasm path ${pathString} is a full file path. Whether threads are available or not will depend on the loaded file. To allow LiteRT.js to load the threaded wasm file, use a directory path instead of a full file path.`
      );
    }
    if (!relaxedSimd) {
      throw new Error(
        "Threads are only supported with relaxed SIMD, and the current browser does not support relaxed SIMD."
      );
    }
    await throwIfFeatureNotSupported("threads");
  }
  if (options?.jspi) {
    if (isFullFilePath) {
      console.warn(
        `The \`jspi\` option was specified, but the wasm path ${pathString} is a full file path. Whether JSPI is available or not will depend on the loaded file. To allow LiteRT.js to load the JSPI wasm file, use a directory path instead of a full file path.`
      );
    }
    await throwIfFeatureNotSupported("jspi");
  }
  let fileName = WASM_JS_COMPAT_FILE_NAME;
  if (relaxedSimd) {
    if (options?.threads) {
      fileName = WASM_JS_THREADED_FILE_NAME;
    } else if (options?.jspi) {
      fileName = WASM_JS_JSPI_FILE_NAME;
    } else {
      fileName = WASM_JS_FILE_NAME;
    }
  }
  let jsFilePath = path;
  if (pathString.endsWith(".wasm")) {
    throw new Error(
      "Please load the `.js` file corresponding to the `.wasm` file, or load the directory containing it."
    );
  } else if (!pathString.endsWith(".js")) {
    jsFilePath = appendPathSegment(path, fileName);
  }
  return createWasmLib(LiteRt, jsFilePath);
}
function loadLiteRt(path, options) {
  if (hasGlobalLiteRtPromise()) {
    throw new Error("LiteRT is already loading / loaded.");
  }
  setGlobalLiteRtPromise(load(path, options).then(async (liteRt) => {
    setGlobalLiteRt(liteRt);
    liteRt.setDefaultEnvironment(
      await Environment.create()
    );
    return liteRt;
  }).catch((error) => {
    setGlobalLiteRtPromise(void 0);
    throw error;
  }));
  return getGlobalLiteRtPromise();
}
var compilationLock = Promise.resolve();
async function copyHostMemoryToHostMemory(cpuTensor, options = {}) {
  const environment = options.environment ?? cpuTensor.environment;
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  const srcTensorBuffer = cpuTensor.liteRtTensorBuffer;
  const bufferType = srcTensorBuffer.bufferType();
  if (bufferType.value !== TensorBufferType.HOST_MEMORY) {
    throw new Error(
      "Source tensor is not in host memory. Cannot copy to host memory."
    );
  }
  const srcTensorMemoryPtr = srcTensorBuffer.lock(
    liteRtWasm.LiteRtTensorBufferLockMode.READ
  );
  let destTensorBuffer;
  try {
    destTensorBuffer = liteRtWasm.LiteRtTensorBuffer.createManaged(
      environment.liteRtEnvironment,
      liteRtWasm.LiteRtTensorBufferType.HOST_MEMORY,
      srcTensorBuffer.tensorType(),
      srcTensorBuffer.size()
    );
    const destMemoryPointer = destTensorBuffer.lock(
      liteRtWasm.LiteRtTensorBufferLockMode.WRITE
    );
    try {
      const srcTensorMemoryView = new Uint8Array(
        liteRtWasm.HEAPU8.buffer,
        srcTensorMemoryPtr,
        srcTensorBuffer.size()
      );
      liteRtWasm.HEAPU8.set(srcTensorMemoryView, destMemoryPointer);
    } finally {
      destTensorBuffer.unlock();
    }
  } finally {
    srcTensorBuffer.unlock();
  }
  if (!destTensorBuffer) {
    throw new Error("Failed to create destination tensor buffer.");
  }
  return new Tensor(destTensorBuffer, environment);
}
async function cpuTensorToGpuTensor(cpuTensor, options = {}) {
  const environment = options.environment ?? cpuTensor.environment;
  const device = environment.webGpuDevice;
  if (!device) {
    throw new Error(
      "No WebGPU device is available. Did you forget to pass a destination environment that has a WebGPU device?"
    );
  }
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  const byteLength = cpuTensor.liteRtTensorBuffer.size();
  const paddedByteLength = byteLength + 3 & ~3;
  const stagingBuffer = device.createBuffer({
    size: paddedByteLength,
    usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
    mappedAtCreation: true
  });
  const mappedBuffer = await stagingBuffer.getMappedRange();
  const mappedArray = new Uint8Array(mappedBuffer);
  const cpuMemoryPtr = cpuTensor.liteRtTensorBuffer.lock(
    liteRtWasm.LiteRtTensorBufferLockMode.READ
  );
  try {
    const cpuMemoryView = new Uint8Array(
      liteRtWasm.HEAPU8.buffer,
      cpuMemoryPtr,
      cpuTensor.liteRtTensorBuffer.size()
    );
    mappedArray.set(cpuMemoryView);
  } finally {
    cpuTensor.liteRtTensorBuffer.unlock();
  }
  stagingBuffer.unmap();
  const buffer = device.createBuffer({
    size: paddedByteLength,
    usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE
  });
  const commandEncoder = device.createCommandEncoder();
  commandEncoder.copyBufferToBuffer(
    stagingBuffer,
    0,
    buffer,
    0,
    paddedByteLength
  );
  device.queue.submit([commandEncoder.finish()]);
  stagingBuffer.destroy();
  return new Tensor(
    buffer,
    cpuTensor.type.layout.dimensions,
    cpuTensor.type.dtype,
    environment,
    () => {
      buffer.destroy();
    }
  );
}
async function gpuTensorToCpuTensor(gpuTensor, options = {}) {
  const environment = options.environment ?? gpuTensor.environment;
  const device = gpuTensor.environment.webGpuDevice;
  if (!device) {
    throw new Error(
      "No WebGPU device is available. Does the source tensor have a WebGPU device?"
    );
  }
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  const tensorBuffer = gpuTensor.liteRtTensorBuffer;
  const bufferType = tensorBuffer.bufferType();
  if (bufferType !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_PACKED) {
    throw new Error(`Cannot convert a tensor with a non-WebGPU buffer type ${bufferType} to a CPU tensor.`);
  }
  const gpuBuffer = liteRtWasm.WebGPU.getJsObject(
    tensorBuffer.getWebGpuBuffer()
  );
  const byteOffset = tensorBuffer.offset();
  const tensorType = tensorBuffer.tensorType();
  const layout = tensorType.layout();
  const numElements = layout.numElements();
  const arrayConstructor = getDataType(tensorType.elementType().value).typedArrayConstructor;
  layout.delete();
  tensorType.delete();
  let mappableBuffer = gpuBuffer;
  let cleanupBuffer = () => {
  };
  if (!(gpuBuffer.usage & GPUBufferUsage.MAP_READ)) {
    mappableBuffer = device.createBuffer({
      size: gpuBuffer.size,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });
    cleanupBuffer = () => {
      mappableBuffer.destroy();
    };
    const commandEncoder = device.createCommandEncoder();
    commandEncoder.copyBufferToBuffer(
      gpuBuffer,
      0,
      mappableBuffer,
      0,
      gpuBuffer.size
    );
    device.queue.submit([commandEncoder.finish()]);
  }
  await mappableBuffer.mapAsync(GPUMapMode.READ);
  const mappedBuffer = mappableBuffer.getMappedRange();
  const mappedArray = new arrayConstructor(mappedBuffer, byteOffset, numElements);
  const cpuTensor = new Tensor(mappedArray, gpuTensor.type.layout.dimensions, environment);
  mappableBuffer.unmap();
  cleanupBuffer();
  return cpuTensor;
}
function makeMoveTo(copyTo) {
  return async (tensor, options) => {
    const result = await copyTo(tensor, options);
    tensor.delete();
    return result;
  };
}
function registerCopyFunctions() {
  Tensor.copyFunctions.set(TensorBufferType.HOST_MEMORY, /* @__PURE__ */ new Map([
    [
      TensorBufferType.HOST_MEMORY,
      {
        copyTo: copyHostMemoryToHostMemory,
        // There might be a more efficient way to move
        // from CPU to CPU.
        moveTo: makeMoveTo(copyHostMemoryToHostMemory)
      }
    ],
    [
      TensorBufferType.WEB_GPU_BUFFER_PACKED,
      {
        copyTo: cpuTensorToGpuTensor,
        moveTo: makeMoveTo(cpuTensorToGpuTensor)
      }
    ]
  ]));
  Tensor.copyFunctions.set(TensorBufferType.WEB_GPU_BUFFER_PACKED, /* @__PURE__ */ new Map([
    [
      TensorBufferType.HOST_MEMORY,
      {
        copyTo: gpuTensorToCpuTensor,
        moveTo: makeMoveTo(gpuTensorToCpuTensor)
      }
    ]
  ]));
}
registerCopyFunctions();

// apps/assistant-panel/src/app/panel-view.component.ts
var _c0 = ["video"];
var _c1 = ["canvas"];
var _c2 = ["message_element"];
var _c3 = ["waveform_canvas"];
var _c4 = (a0, a1) => ({ name: a0, photo: a1 });
function PanelViewComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " Speech Recognition is not supported ");
    \u0275\u0275elementEnd();
  }
}
function PanelViewComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " Speech Synthesis is not supported ");
    \u0275\u0275elementEnd();
  }
}
function PanelViewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, PanelViewComponent_Conditional_8_Conditional_1_Template, 2, 0, "div", 4);
    \u0275\u0275conditionalCreate(2, PanelViewComponent_Conditional_8_Conditional_2_Template, 2, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error().speech_recognition ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error().speech_synthesis ? 2 : -1);
  }
}
function PanelViewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 22);
    \u0275\u0275text(2, "mic");
    \u0275\u0275elementEnd()();
  }
}
function PanelViewComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.BOOKING_PANEL.NO_MESSAGES"), " ");
  }
}
function PanelViewComponent_For_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, message_r3.timestamp + ctx_r0.offset), " ");
  }
}
function PanelViewComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function PanelViewComponent_For_19_Template_div_click_0_listener() {
      const message_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleMessageTime(message_r3.id));
    });
    \u0275\u0275element(1, "a-user-avatar", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PanelViewComponent_For_19_Conditional_6_Template, 3, 3, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 30);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("waiting-margin", ctx_r0.waiting());
    \u0275\u0275advance();
    \u0275\u0275property("user", \u0275\u0275pureFunction2(8, _c4, message_r3.message || "", message_r3.user_id !== ctx_r0.user.id ? "assets/icons/ai-avatar.jpg" : "assets/icons/user-avatar.jpg"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", message_r3.user_id !== ctx_r0.user.id ? "Assistant" : "You", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_time()[message_r3.id] ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(8, 6, message_r3.content), \u0275\u0275sanitizeHtml);
  }
}
function PanelViewComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const progress_msg_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, progress_msg_r5.content), \u0275\u0275sanitizeHtml);
  }
}
function PanelViewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 31);
    \u0275\u0275listener("click", function PanelViewComponent_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_info.set(!ctx_r0.show_info()));
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "icon", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275element(8, "div", 34);
    \u0275\u0275conditionalCreate(9, PanelViewComponent_Conditional_20_Conditional_9_Template, 2, 3, "div", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const progress_msg_r5 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.icons[progress_msg_r5.function] || "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", progress_msg_r5.message || progress_msg_r5.function, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.show_info() ? 9 : -1);
  }
}
function PanelViewComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5, "Waiting for reply...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("bottom", "8px");
  }
}
function PanelViewComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PanelViewComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.endService());
    });
    \u0275\u0275elementStart(1, "icon", 22);
    \u0275\u0275text(2, "call_end");
    \u0275\u0275elementEnd()();
  }
}
function PanelViewComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function PanelViewComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setup.set(true));
    });
    \u0275\u0275elementStart(1, "h2", 43);
    \u0275\u0275text(2, "Touch to Start");
    \u0275\u0275elementEnd()();
  }
}
var MODEL_INPUT_SIZE = 640;
var MODEL_PIXEL_COUNT = MODEL_INPUT_SIZE * MODEL_INPUT_SIZE;
var PanelViewComponent = class _PanelViewComponent extends AsyncHandler {
  constructor() {
    super();
    this._route = inject(ActivatedRoute);
    this._chat = inject(ChatService);
    this._org = inject(OrganisationService);
    this.scale = 1;
    this.current_text = signal(
      "",
      ...ngDevMode ? [{ debugName: "current_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_text = signal(
      "",
      ...ngDevMode ? [{ debugName: "last_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.listening = signal(
      false,
      ...ngDevMode ? [{ debugName: "listening" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.person_in_view = signal(
      false,
      ...ngDevMode ? [{ debugName: "person_in_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug = signal(
      true,
      ...ngDevMode ? [{ debugName: "debug" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setup = signal(
      false,
      ...ngDevMode ? [{ debugName: "setup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      {},
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_time = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_info = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = 0;
    this._time = 0;
    this._last_message = "";
    this._previous_message = "";
    this.icons = {
      list_function_schemas: "help",
      call_function: "settings",
      task_complete: "check_circle"
    };
    this.messages = this._chat.messages;
    this.progress = this._chat.progress;
    this.waiting = computed(
      () => {
        const list = this._chat.messages();
        return list.length !== 0 && list[list.length - 1]?.user_id === this.user?.id;
      },
      ...ngDevMode ? [{ debugName: "waiting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._model_input = new Float32Array(MODEL_PIXEL_COUNT * 3);
    this._webcam_stream = null;
    this._audio_stream = null;
    this._destroyed = false;
    this._video_el = viewChild(
      "video",
      ...ngDevMode ? [{ debugName: "_video_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._canvas_el = viewChild(
      "canvas",
      ...ngDevMode ? [{ debugName: "_canvas_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._message_el = viewChild(
      "message_element",
      ...ngDevMode ? [{ debugName: "_message_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._waveform_canvas_el = viewChild(
      "waveform_canvas",
      ...ngDevMode ? [{ debugName: "_waveform_canvas_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spoken = false;
    this._processing_frame = false;
    this._last_text = "";
    this._frame_count = 0;
    effect(() => {
      this.progress();
      this._scrollToBottom();
    });
    effect(() => {
      const list = this._chat.messages();
      this._scrollToBottom();
      const msg_list = list.filter((_) => _.user_id !== this.user?.id);
      const last_message = msg_list[msg_list.length - 1];
      if (msg_list.length < 1 || this._last_message === last_message.id) {
        return;
      }
      this._last_message = last_message.id;
      this._speakText(last_message.message);
    });
  }
  toggleMessageTime(id) {
    this.show_time.update((state) => __spreadProps(__spreadValues({}, state), { [id]: !state[id] }));
  }
  get user() {
    return currentUser();
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const start_voice = () => {
      void this._setupVoiceRecognition();
      this.unsub("start_voice");
    };
    window.addEventListener("click", start_voice);
    this.subscription("start_voice", () => window.removeEventListener("click", start_voice));
    const context = this._canvas_el().nativeElement.getContext("2d", {
      willReadFrequently: true
    });
    if (!context)
      throw new Error("Unable to initialise webcam canvas");
    this._context = context;
    this._setupWebcam();
    this._chat.startChat();
    this.interval("process_frame", () => this._processWebcamFrame(), 500);
    this.subscription("route.query", this._route.queryParamMap.subscribe((p) => {
      if (p.has("debug"))
        this.debug.set(p.get("debug") === "true");
    }));
    this._listen();
  }
  startListening() {
    if (!this._recognition || this.listening() || !this.person_in_view()) {
      return;
    }
    this._recognition.start();
    this.listening.set(true);
  }
  endService() {
    this.setup.set(false);
    this._recognition?.stop();
    this.listening.set(false);
    this._last_text = "";
    this._spoken = false;
    this._chat.close();
  }
  ngOnDestroy() {
    this._destroyed = true;
    if (this._frame_id)
      cancelAnimationFrame(this._frame_id);
    this._recognition?.abort?.();
    this._webcam_stream?.getTracks().forEach((track) => track.stop());
    this._audio_stream?.getTracks().forEach((track) => track.stop());
    this._audio_source?.disconnect();
    if (this._audio_context?.state !== "closed") {
      void this._audio_context?.close();
    }
    super.ngOnDestroy();
  }
  _loadModel() {
    if (!this._model) {
      const assets_path = `${location.origin}${location.pathname}assets`;
      this._model = loadLiteRt(`${assets_path}/litert/`).then(() => loadAndCompile(`${assets_path}/yolov8n_litert_model/model.tflite`, {
        accelerator: isWebGPUSupported() ? "webgpu" : "wasm"
      }));
    }
    return this._model;
  }
  async _processWebcamFrame() {
    if (!this.setup() || this._processing_frame)
      return;
    this._processing_frame = true;
    let input_tensor;
    let output_tensors = [];
    try {
      const model = await this._loadModel();
      input_tensor = this._webcamToTensor();
      output_tensors = await model.run(input_tensor);
      const prediction_tensor = output_tensors[0];
      const predictions = prediction_tensor.toTypedArray();
      const person_detected = this._containsPerson(predictions, prediction_tensor.type.layout.dimensions);
      const old_state = this.person_in_view();
      this.person_in_view.set(person_detected);
      if (person_detected) {
        if (this.setup() && !this._spoken) {
          this._speakText("Hello, how may I help you?");
          this._spoken = true;
          this.clearTimeout("clean_chat");
        }
        return;
      }
      if (old_state !== this.person_in_view() && this._recognition) {
        if (this.person_in_view()) {
          this._recognition.start();
          this.listening.set(true);
        } else {
          this._recognition.stop();
          this.listening.set(false);
          this._last_text = "";
          this._spoken = false;
          this.timeout("clean_chat", () => this._chat.close(), 15 * 1e3);
        }
      }
    } finally {
      input_tensor?.delete();
      output_tensors.forEach((tensor) => tensor.delete());
      this._processing_frame = false;
    }
  }
  _webcamToTensor() {
    const video_element = this._video_el().nativeElement;
    this._context.drawImage(video_element, 0, 0, MODEL_INPUT_SIZE, MODEL_INPUT_SIZE);
    const image_data = this._context.getImageData(0, 0, MODEL_INPUT_SIZE, MODEL_INPUT_SIZE).data;
    for (let pixel_index = 0; pixel_index < MODEL_PIXEL_COUNT; pixel_index++) {
      const image_index = pixel_index * 4;
      this._model_input[pixel_index] = image_data[image_index] / 255;
      this._model_input[MODEL_PIXEL_COUNT + pixel_index] = image_data[image_index + 1] / 255;
      this._model_input[MODEL_PIXEL_COUNT * 2 + pixel_index] = image_data[image_index + 2] / 255;
    }
    return new Tensor(this._model_input, [
      1,
      3,
      MODEL_INPUT_SIZE,
      MODEL_INPUT_SIZE
    ]);
  }
  _containsPerson(predictions, shape) {
    const prediction_count = shape[2];
    const person_scores_offset = prediction_count * 4;
    for (let index = 0; index < prediction_count; index++) {
      if (predictions[person_scores_offset + index] > 0.2)
        return true;
    }
    return false;
  }
  async _setupWebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      if (this._destroyed) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      this._webcam_stream = stream;
      this._video_el().nativeElement.srcObject = stream;
    } else {
      console.error("getUserMedia is not supported");
    }
  }
  async _setupVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.error.update((state) => __spreadProps(__spreadValues({}, state), {
        speech_recognition: true
      }));
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      this.current_text.set(transcript);
      this.timeout("on_end", () => this._handleEnd(), 3e3);
    };
    recognition.onerror = (event) => {
      console.warn("Speech Recognition Error:", event);
      if (event.error === "no-speech") {
        this.current_text.set("");
        this.listening.set(false);
        return;
      }
      this.error.update((state) => __spreadProps(__spreadValues({}, state), {
        speech_recognition: true
      }));
    };
    recognition.onend = () => {
      this._handleEnd();
      this.listening.set(false);
    };
    this._recognition = recognition;
    recognition.start();
    this.setup.set(true);
    this.listening.set(true);
    this.interval("check_listening", () => this.startListening(), 500);
  }
  _speakText(text) {
    if (this._last_text === text)
      return;
    if (!("speechSynthesis" in window && "SpeechSynthesisUtterance" in window)) {
      this.error.update((state) => __spreadProps(__spreadValues({}, state), {
        speech_synthesis: true
      }));
      return;
    }
    this._last_text = text;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    const setVoice = new Promise((resolve) => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const preferredVoice = voices.find((voice) => voice.voiceURI === "Karen");
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
        resolve();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          const voices2 = window.speechSynthesis.getVoices();
          const preferredVoice = voices2.find((voice) => voice.voiceURI === "Karen");
          if (preferredVoice) {
            utterance.voice = preferredVoice;
          }
          resolve();
        };
      }
    });
    setVoice.then(() => {
      window.speechSynthesis.speak(utterance);
    });
  }
  _handleEnd() {
    if (!this.setup())
      return;
    this.last_text.set(this.current_text());
    this.current_text.set("");
    this.clearInterval("scale");
    this.scale = 1;
    const last_text = this.last_text();
    if (last_text.length <= 3)
      return;
    if (last_text === this._previous_message)
      return;
    this._chat.startChat();
    this._chat.sendMessage(last_text);
    this._previous_message = last_text;
    this.last_text.set("");
  }
  _scrollToBottom() {
    this.timeout("scroll_to_bottom", () => {
      const el = this._message_el().nativeElement;
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, 50);
  }
  async _listen() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
      return;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    if (this._destroyed) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    this._audio_stream = stream;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext)
      return;
    this._audio_context = new AudioContext();
    this._analyser = this._audio_context.createAnalyser();
    this._audio_bytes = new Uint8Array(this._analyser.frequencyBinCount);
    this._audio_source = this._audio_context.createMediaStreamSource(stream);
    this._audio_source.connect(this._analyser);
    this._frame_id = requestAnimationFrame(() => this._processWaveform());
  }
  _processWaveform() {
    if (this._destroyed)
      return;
    if (this._frame_count % 2 === 0) {
      this._analyser.getByteTimeDomainData(this._audio_bytes);
      this._drawWaveform();
    }
    this._frame_count += 1;
    this._frame_id = requestAnimationFrame(() => this._processWaveform());
  }
  _drawWaveform() {
    if (!this.setup())
      return;
    const canvas = this._waveform_canvas_el().nativeElement;
    const height = canvas.height;
    const width = canvas.width;
    const context = canvas.getContext("2d");
    let x = 0;
    const sliceWidth = width * 1 / this._audio_bytes.length;
    context.lineWidth = 2;
    context.strokeStyle = "#000000";
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.moveTo(0, height / 2);
    for (const item of this._audio_bytes) {
      const y = item / 255 * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }
    context.lineTo(x, height / 2);
    context.stroke();
  }
  static {
    this.\u0275fac = function PanelViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelViewComponent, selectors: [["app-panel-view"]], viewQuery: function PanelViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._video_el, _c0, 5)(ctx._canvas_el, _c1, 5)(ctx._message_el, _c2, 5)(ctx._waveform_canvas_el, _c3, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(4);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 14, consts: [["waveform_canvas", ""], ["video", ""], ["canvas", ""], ["message_element", ""], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "bg-base-300", "relative", "flex", "h-full", "flex-1", "items-center", "justify-center", "p-8", 3, "click"], ["width", "256", "height", "128", 1, "h-32", "w-64"], [1, "absolute", "inset-x-0", "top-0", "p-8", "text-center"], [1, "text-sm"], [1, "absolute", "inset-x-0", "bottom-0", "p-4", "text-center"], [1, "bg-error", "text-error-content", "absolute", "top-2", "left-1/2", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-center", "text-xs"], ["autoplay", "", "playsinline", "", 1, "bg-base-200", "absolute", "bottom-4", "left-4", "h-48", "w-48", "rounded-xl", "border-[0.25rem]", "object-cover"], [1, "bg-success", "text-success-content", "absolute", "right-4", "bottom-4", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full"], ["width", "640", "height", "640", 1, "pointer-events-none", "absolute", "opacity-0"], [1, "bg-base-100", "relative", "flex", "h-full", "w-[24rem]", "flex-col", "justify-end", "overflow-auto"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "max-h-full", "w-full", "overflow-auto"], [1, "hover:bg-base-200", "my-2", "flex", "space-x-4", "p-2", 3, "waiting-margin"], [1, "p-4"], [1, "border-neutral", "bg-base-100", "absolute", "right-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-2xl", "border", "p-1", 3, "bottom"], ["icon", "", "matRipple", "", 1, "bg-error", "text-error-content", "absolute", "top-2", "left-2", "h-12", "w-12", "shadow-sm"], ["splash", "", "matRipple", "", 1, "absolute", "inset-0", "z-20", "flex", "flex-col", "items-center", "justify-center", "text-white"], [1, "text-2xl"], ["src", "assets/icons/no-pending.svg", 1, "h-32", "w-32", "object-contain"], [1, "opacity-30"], [1, "hover:bg-base-200", "my-2", "flex", "space-x-4", "p-2", 3, "click"], [1, "text-xl", 3, "user"], [1, "flex", "flex-1", "flex-col", "space-y-1"], [1, "flex", "items-center", "space-x-4"], ["message-time", "", 1, "text-base-content", "w-full", "px-2", "py-1", "text-right", "text-xs", "opacity-40"], ["message", "", 1, "markdown", "selectable", "text-sm", 3, "innerHTML"], [1, "border-base-300", "bg-info", "text-info-content", "block", "w-full", "rounded-sm", "p-2", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "relative", "w-full", "overflow-hidden", "rounded-sm"], [1, "bg-base-100", "absolute", "inset-0", "opacity-10"], [1, "text-mono", "p-2", "text-left", "text-xs", "wrap-break-word", 3, "innerHTML"], [1, "border-neutral", "bg-base-100", "absolute", "right-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-2xl", "border", "p-1"], [1, "bg-neutral", "h-2", "w-2", "animate-bounce", "rounded-full"], [1, "anim-delay-1", "bg-neutral", "h-2", "w-2", "animate-bounce", "rounded-full"], [1, "anim-delay-2", "bg-neutral", "h-2", "w-2", "animate-bounce", "rounded-full"], [1, "sr-only"], ["icon", "", "matRipple", "", 1, "bg-error", "text-error-content", "absolute", "top-2", "left-2", "h-12", "w-12", "shadow-sm", 3, "click"], ["splash", "", "matRipple", "", 1, "absolute", "inset-0", "z-20", "flex", "flex-col", "items-center", "justify-center", "text-white", 3, "click"], [1, "mb-4", "text-4xl", "font-light"]], template: function PanelViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
        \u0275\u0275listener("click", function PanelViewComponent_Template_button_click_1_listener() {
          return ctx.startListening();
        });
        \u0275\u0275element(2, "canvas", 6, 0);
        \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "div", 9);
        \u0275\u0275conditionalCreate(8, PanelViewComponent_Conditional_8_Template, 3, 2, "div", 10);
        \u0275\u0275element(9, "video", 11, 1);
        \u0275\u0275conditionalCreate(11, PanelViewComponent_Conditional_11_Template, 3, 0, "div", 12);
        \u0275\u0275element(12, "canvas", 13, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 14);
        \u0275\u0275conditionalCreate(15, PanelViewComponent_Conditional_15_Template, 5, 3, "div", 15);
        \u0275\u0275elementStart(16, "div", 16, 3);
        \u0275\u0275repeaterCreate(18, PanelViewComponent_For_19_Template, 9, 11, "div", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(20, PanelViewComponent_Conditional_20_Template, 10, 3, "div", 18);
        \u0275\u0275conditionalCreate(21, PanelViewComponent_Conditional_21_Template, 6, 2, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(22, PanelViewComponent_Conditional_22_Template, 3, 0, "button", 20);
        \u0275\u0275conditionalCreate(23, PanelViewComponent_Conditional_23_Template, 3, 0, "button", 21);
      }
      if (rf & 2) {
        let tmp_12_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.current_text() || ctx.last_text(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error().speech_recognition || ctx.error().speech_synthesis ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.debug())("border-success", ctx.person_in_view())("border-base-200", !ctx.person_in_view());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.listening() ? 11 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.messages().length ? 15 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.messages());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_12_0 = ctx.progress()) ? 20 : -1, tmp_12_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.waiting() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.setup() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.setup() ? 23 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      SanitizePipe,
      DateFromPipe,
      TranslatePipe
    ], styles: ["\n[splash][_ngcontent-%COMP%] {\n  animation: crossfade 10s linear;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=panel-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelViewComponent, [{
    type: Component,
    args: [{ selector: "app-panel-view", template: `
        <div class="flex h-full w-full items-center justify-center">
            <button
                class="bg-base-300 relative flex h-full flex-1 items-center justify-center p-8"
                (click)="startListening()"
            >
                <canvas
                    #waveform_canvas
                    class="h-32 w-64"
                    width="256"
                    height="128"
                ></canvas>

                <div class="absolute inset-x-0 top-0 p-8 text-center">
                    <div class="text-sm">
                        {{ current_text() || last_text() }}
                    </div>
                </div>

                <div class="absolute inset-x-0 bottom-0 p-4 text-center"></div>
                @if (error().speech_recognition || error().speech_synthesis) {
                    <div
                        class="bg-error text-error-content absolute top-2 left-1/2 -translate-x-1/2 rounded-3xl px-4 py-2 text-center text-xs"
                    >
                        @if (error().speech_recognition) {
                            <div
                                class="flex h-full w-full items-center justify-center"
                            >
                                Speech Recognition is not supported
                            </div>
                        }
                        @if (error().speech_synthesis) {
                            <div
                                class="flex h-full w-full items-center justify-center"
                            >
                                Speech Synthesis is not supported
                            </div>
                        }
                    </div>
                }
                <video
                    #video
                    autoplay
                    playsinline
                    [class.opacity-0]="!debug()"
                    class="bg-base-200 absolute bottom-4 left-4 h-48 w-48 rounded-xl border-[0.25rem] object-cover"
                    [class.border-success]="person_in_view()"
                    [class.border-base-200]="!person_in_view()"
                ></video>
                @if (listening()) {
                    <div
                        class="bg-success text-success-content absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full"
                    >
                        <icon class="text-2xl">mic</icon>
                    </div>
                }
                <canvas
                    #canvas
                    width="640"
                    height="640"
                    class="pointer-events-none absolute opacity-0"
                ></canvas>
            </button>
            <div
                class="bg-base-100 relative flex h-full w-[24rem] flex-col justify-end overflow-auto"
            >
                @if (!messages().length) {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                    >
                        <img
                            class="h-32 w-32 object-contain"
                            src="assets/icons/no-pending.svg"
                        />
                        <p class="opacity-30">
                            {{ 'APP.BOOKING_PANEL.NO_MESSAGES' | translate }}
                        </p>
                    </div>
                }
                <div class="max-h-full w-full overflow-auto" #message_element>
                    @for (message of messages(); track message) {
                        <div
                            class="hover:bg-base-200 my-2 flex space-x-4 p-2"
                            (click)="toggleMessageTime(message.id)"
                            [class.waiting-margin]="waiting()"
                        >
                            <a-user-avatar
                                [user]="
                                    $any({
                                        name: message.message || '',
                                        photo:
                                            message.user_id !== user.id
                                                ? 'assets/icons/ai-avatar.jpg'
                                                : 'assets/icons/user-avatar.jpg',
                                    })
                                "
                                class="text-xl"
                            ></a-user-avatar>
                            <div class="flex flex-1 flex-col space-y-1">
                                <div class="flex items-center space-x-4">
                                    <div>
                                        {{
                                            message.user_id !== user.id
                                                ? 'Assistant'
                                                : 'You'
                                        }}
                                    </div>
                                    @if (show_time()[message.id]) {
                                        <div
                                            message-time
                                            class="text-base-content w-full px-2 py-1 text-right text-xs opacity-40"
                                        >
                                            {{
                                                message.timestamp + offset
                                                    | dateFrom
                                            }}
                                        </div>
                                    }
                                </div>
                                <div
                                    message
                                    class="markdown selectable text-sm"
                                    [innerHTML]="message.content | sanitize"
                                ></div>
                            </div>
                        </div>
                    }
                    @if (progress(); as progress_msg) {
                        <div class="p-4">
                            <button
                                class="border-base-300 bg-info text-info-content block w-full rounded-sm p-2"
                                (click)="show_info.set(!show_info())"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        icons[progress_msg.function] || 'info'
                                    }}</icon>
                                    <p class="text-sm">
                                        {{
                                            progress_msg.message ||
                                                progress_msg.function
                                        }}
                                    </p>
                                </div>
                                <div
                                    class="relative w-full overflow-hidden rounded-sm"
                                >
                                    <div
                                        class="bg-base-100 absolute inset-0 opacity-10"
                                    ></div>
                                    @if (show_info()) {
                                        <div
                                            class="text-mono p-2 text-left text-xs wrap-break-word"
                                            [innerHTML]="
                                                progress_msg.content | sanitize
                                            "
                                        ></div>
                                    }
                                </div>
                            </button>
                        </div>
                    }
                    @if (waiting()) {
                        <div
                            class="border-neutral bg-base-100 absolute right-2 flex items-center justify-center space-x-2 rounded-2xl border p-1"
                            [style.bottom]="'8px'"
                        >
                            <div
                                class="bg-neutral h-2 w-2 animate-bounce rounded-full"
                            ></div>
                            <div
                                class="anim-delay-1 bg-neutral h-2 w-2 animate-bounce rounded-full"
                            ></div>
                            <div
                                class="anim-delay-2 bg-neutral h-2 w-2 animate-bounce rounded-full"
                            ></div>
                            <span class="sr-only">Waiting for reply...</span>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (setup()) {
            <button
                icon
                matRipple
                class="bg-error text-error-content absolute top-2 left-2 h-12 w-12 shadow-sm"
                (click)="endService()"
            >
                <icon class="text-2xl">call_end</icon>
            </button>
        }
        @if (!setup()) {
            <button
                splash
                matRipple
                class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white"
                (click)="setup.set(true)"
            >
                <h2 class="mb-4 text-4xl font-light">Touch to Start</h2>
            </button>
        }
    `, imports: [
      MatRippleModule,
      IconComponent,
      SanitizePipe,
      DateFromPipe,
      TranslatePipe,
      UserAvatarComponent
    ], styles: ["/* angular:styles/component:css;099e564584534786c7186020472e49a963d411f3c0436eddcea746537614bad6;/home/runner/work/user-interfaces/user-interfaces/apps/assistant-panel/src/app/panel-view.component.ts */\n[splash] {\n  animation: crossfade 10s linear;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=panel-view.component.css.map */\n"] }]
  }], () => [], { _video_el: [{ type: ViewChild, args: ["video", { isSignal: true }] }], _canvas_el: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }], _message_el: [{ type: ViewChild, args: ["message_element", { isSignal: true }] }], _waveform_canvas_el: [{ type: ViewChild, args: ["waveform_canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelViewComponent, { className: "PanelViewComponent", filePath: "apps/assistant-panel/src/app/panel-view.component.ts", lineNumber: 278 });
})();
export {
  PanelViewComponent
};
//# debugId=a6270f43-9bc2-5c39-84c2-410bca2fcaff
//# sourceMappingURL=panel-view.component-HMSZV3HS.js.map
