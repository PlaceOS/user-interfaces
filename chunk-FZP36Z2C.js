import {
  loadAuthenticatedImage
} from "./chunk-HW4EA2SL.js";
import {
  AsyncHandler,
  UploadsService
} from "./chunk-3MB6OAN2.js";
import {
  Injectable,
  V,
  computed,
  f,
  i18n,
  ic,
  inject,
  notifyError,
  notifyInfo,
  rc,
  setClassMetadata,
  signal,
  u,
  v,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/ai/ai-image.util.ts
function errorMessage(error, fallback) {
  if (typeof error === "string")
    return error;
  if (!isRecord(error))
    return fallback;
  const nested = error["error"];
  if (typeof nested === "string")
    return nested;
  if (isRecord(nested)) {
    const detail = nested["error"];
    if (typeof detail === "string")
      return detail;
    const nested_message = nested["message"];
    if (typeof nested_message === "string")
      return nested_message;
  }
  const message = error["message"];
  return typeof message === "string" ? message : fallback;
}
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function errorStatus(error) {
  if (!isRecord(error))
    return void 0;
  const status = error["status"];
  if (typeof status === "number")
    return status;
  const nested = error["error"];
  if (!isRecord(nested))
    return void 0;
  const nested_status = nested["status"];
  return typeof nested_status === "number" ? nested_status : void 0;
}
function perceivedLightness(red, green, blue) {
  return (red * 299 + green * 587 + blue * 114) / 1e3;
}

// apps/signage-manager/src/app/branding/logo-variant.ts
var LIGHT_INK = 0.55;
var MAX_EDGE = 1024;
async function loadBitmap(source) {
  const url = typeof source === "string" ? source : URL.createObjectURL(source);
  try {
    const image = new Image();
    image.crossOrigin = "anonymous";
    await new Promise((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("logo could not be read"));
      image.src = url;
    });
    return image;
  } finally {
    if (typeof source !== "string") {
      setTimeout(() => URL.revokeObjectURL(url), 0);
    }
  }
}
function toCanvas(image) {
  const natural_width = image.naturalWidth || 512;
  const natural_height = image.naturalHeight || 512;
  const scale = Math.min(1, MAX_EDGE / Math.max(natural_width, natural_height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(natural_width * scale));
  canvas.height = Math.max(1, Math.round(natural_height * scale));
  const context = canvas.getContext("2d");
  if (!context)
    throw new Error("logo could not be read");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return { canvas, context };
}
async function inkIsLight(source) {
  const image = await loadBitmap(source);
  const { canvas, context } = toCanvas(image);
  const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
  let weight = 0;
  let total = 0;
  for (let index = 0; index < data.length; index += 4) {
    const alpha = data[index + 3] / 255;
    if (alpha < 0.1)
      continue;
    const lightness = perceivedLightness(data[index], data[index + 1], data[index + 2]) / 255;
    total += lightness * alpha;
    weight += alpha;
  }
  if (!weight)
    return false;
  return total / weight > LIGHT_INK;
}
async function flipLightness(source, name) {
  const image = await loadBitmap(source);
  const { canvas, context } = toCanvas(image);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = pixels;
  for (let index = 0; index < data.length; index += 4) {
    if (data[index + 3] === 0)
      continue;
    const [hue, saturation, lightness] = toHsl(data[index], data[index + 1], data[index + 2]);
    const [red, green, blue] = toRgb(hue, saturation, 1 - lightness);
    data[index] = red;
    data[index + 1] = green;
    data[index + 2] = blue;
  }
  context.putImageData(pixels, 0, 0);
  const blob = await new Promise((resolve) => canvas.toBlob((result) => resolve(result), "image/png"));
  if (!blob)
    throw new Error("logo could not be converted");
  return new File([blob], name, { type: "image/png" });
}
function toHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  if (max === min)
    return [0, 0, lightness];
  const span = max - min;
  const saturation = lightness > 0.5 ? span / (2 - max - min) : span / (max + min);
  let hue = 0;
  if (max === r)
    hue = (g - b) / span + (g < b ? 6 : 0);
  else if (max === g)
    hue = (b - r) / span + 2;
  else
    hue = (r - g) / span + 4;
  return [hue / 6, saturation, lightness];
}
function toRgb(hue, saturation, lightness) {
  if (!saturation) {
    const value = Math.round(lightness * 255);
    return [value, value, value];
  }
  const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;
  return [
    Math.round(channel(p, q, hue + 1 / 3) * 255),
    Math.round(channel(p, q, hue) * 255),
    Math.round(channel(p, q, hue - 1 / 3) * 255)
  ];
}
function channel(p, q, t) {
  let value = t;
  if (value < 0)
    value += 1;
  if (value > 1)
    value -= 1;
  if (value < 1 / 6)
    return p + (q - p) * 6 * value;
  if (value < 1 / 2)
    return q;
  if (value < 2 / 3)
    return p + (q - p) * (2 / 3 - value) * 6;
  return p;
}

// apps/signage-manager/src/app/ai/ai.fn.ts
var AI_PATH = () => `${u()}/signage/ai`;
function toQuery(params) {
  const pairs = Object.entries(params).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  return pairs.length ? `?${pairs.join("&")}` : "";
}
function removeSignageUpload(id) {
  return V(`${u()}/uploads/${encodeURIComponent(id)}`, {
    response_type: "void"
  });
}
function signageAICapabilities() {
  return f(`${AI_PATH()}/capabilities`);
}
function generateSignageImage(request) {
  return v(`${AI_PATH()}/generate`, request);
}
function editSignageImage(request) {
  return v(`${AI_PATH()}/edit`, request);
}
function showSignageAIJob(id, query = {}) {
  return f(`${AI_PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query)}`);
}
function querySignageAIJobs(query = {}) {
  return f(`${AI_PATH()}/jobs${toQuery(query)}`);
}
function cancelSignageAIJob(id) {
  return v(`${AI_PATH()}/jobs/${encodeURIComponent(id)}/cancel`, {});
}
function claimSignageAIImage(id, body) {
  return v(`${AI_PATH()}/jobs/${encodeURIComponent(id)}/claim`, body);
}

// apps/signage-manager/src/app/ai/ai-image.service.ts
var FINAL_STATES = ["done", "failed", "cancelled"];
function logoKey(slot) {
  return slot === "on_light" ? "logo_upload_id" : "logo_dark_upload_id";
}
var POLL_WAIT = 25;
var POLL_RETRIES = 10;
var CLAIM_RETRY_DELAYS = [0, 500, 1500];
function isFinal(job) {
  return !!job && FINAL_STATES.includes(job.state);
}
var AiImageService = class _AiImageService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.capabilities = signal(
      null,
      ...ngDevMode ? [{ debugName: "capabilities" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand_kit = signal(
      null,
      ...ngDevMode ? [{ debugName: "brand_kit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand_kit_read = signal(
      "pending",
      ...ngDevMode ? [{ debugName: "brand_kit_read" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.jobs = signal(
      {},
      ...ngDevMode ? [{ debugName: "jobs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = computed(
      () => !!this.capabilities()?.enabled,
      ...ngDevMode ? [{ debugName: "enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.default_provider = computed(
      () => {
        const capabilities = this.capabilities();
        if (!capabilities?.enabled)
          return null;
        return capabilities.providers.find((provider) => provider.id === capabilities.default_provider_id) || capabilities.providers[0] || null;
      },
      ...ngDevMode ? [{ debugName: "default_provider" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.default_model = computed(
      () => {
        const provider = this.default_provider();
        if (!provider)
          return null;
        return provider.models.find((model) => model.id === provider.default_model) || provider.models[0] || null;
      },
      ...ngDevMode ? [{ debugName: "default_model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_generate = computed(
      () => !!this.default_model()?.generate,
      ...ngDevMode ? [{ debugName: "can_generate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = computed(
      () => !!this.default_model()?.edit,
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.running_count = computed(
      () => Object.values(this.jobs()).filter((job) => !isFinal(job)).length,
      ...ngDevMode ? [{ debugName: "running_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recent = computed(
      () => Object.values(this.jobs()).sort((a, b) => (b.created_at || 0) - (a.created_at || 0)),
      ...ngDevMode ? [{ debugName: "recent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._uploads = inject(UploadsService);
    this._loaded = false;
    this._org_zone = "";
    this._intents = /* @__PURE__ */ new Map();
    this._watching = /* @__PURE__ */ new Set();
    this._attempts = /* @__PURE__ */ new Map();
  }
  /**
   * Read what this domain can do.
   */
  async load(org_zone_id) {
    if (this._loaded)
      return this.capabilities();
    this._loaded = true;
    this._org_zone = org_zone_id || "";
    const capabilities = await signageAICapabilities().catch(() => null);
    this.capabilities.set(capabilities || {
      enabled: false,
      providers: [],
      aspect_ratios: [],
      qualities: [],
      max_candidates: 1,
      logo_layer: false,
      quota: {
        user_remaining_today: null,
        domain_remaining_month: null
      }
    });
    if (capabilities?.enabled && org_zone_id) {
      await this.reloadBrandKit();
    }
    return this.capabilities();
  }
  /**
   * Store a logo for the domain and remember it.
   */
  async uploadBrandLogo(file) {
    const slot = await inkIsLight(file).catch(() => false) ? "on_dark" : "on_light";
    return this.replaceBrandLogo(slot, file, true);
  }
  /**
   * Put a file in one of the two slots. `derive_other` fills the empty
   * counterpart from it; an explicit upload into one slot leaves the other
   * alone.
   */
  async replaceBrandLogo(slot, file, derive_other = false) {
    const upload_id = await this._uploads.uploadFileToCompletion(file);
    const changes = { [logoKey(slot)]: upload_id };
    const other = slot === "on_light" ? "on_dark" : "on_light";
    const other_id = this.brand_kit()?.[logoKey(other)];
    const derived = this.brand_kit()?.logo_derived;
    if (derive_other && (!other_id || derived === other)) {
      const flipped = await this._flip(file, other).catch(() => null);
      if (flipped) {
        changes[logoKey(other)] = flipped;
        changes.logo_derived = other;
      }
    } else if (derived === slot) {
      changes.logo_derived = void 0;
    }
    const kit = await this.saveBrandKit(changes);
    this.capabilities.update((current) => current ? __spreadProps(__spreadValues({}, current), { logo_layer: true }) : current);
    return kit;
  }
  /** make one slot from the other, on request rather than on upload */
  async deriveBrandLogo(target) {
    const source_id = this.brand_kit()?.[logoKey(target === "on_light" ? "on_dark" : "on_light")];
    if (!source_id)
      throw new Error(i18n("SIGNAGE_MANAGER.AI_NO_LOGO_YET"));
    const url = await this.loadImage(`/api/engine/v2/uploads/${encodeURIComponent(source_id)}/url`);
    const upload_id = await this._flip(url, target);
    return this.saveBrandKit({
      [logoKey(target)]: upload_id,
      logo_derived: target
    });
  }
  async _flip(source, target) {
    const stem = typeof source === "string" ? "logo" : source.name.replace(/\.[^.]+$/, "");
    const file = await flipLightness(source, `${stem}-${target.replace("_", "-")}.png`);
    return this._uploads.uploadFileToCompletion(file);
  }
  /**
   * Store an image the person wants a request to draw on.
   */
  uploadReference(file) {
    return this._uploads.uploadFileToCompletion(file);
  }
  /** done with, once the image it was for has been made */
  removeReference(id) {
    return removeSignageUpload(id).catch(() => null);
  }
  /**
   * Merge changes into the domain's brand kit.
   */
  async saveBrandKit(changes) {
    if (!this._org_zone) {
      throw new Error(i18n("SIGNAGE_MANAGER.AI_NO_ORG_ZONE"));
    }
    if (this.brand_kit_read() !== "ok") {
      throw new Error(i18n("SIGNAGE_MANAGER.BRAND_NOT_LOADED"));
    }
    const details = __spreadValues(__spreadValues({}, this.brand_kit() || {}), changes);
    for (const key of Object.keys(details)) {
      if (details[key] === void 0)
        delete details[key];
    }
    await rc(this._org_zone, {
      name: "signage_ai",
      description: "Brand kit used when generating signage artwork",
      details
    }, "put");
    this.brand_kit.set(details);
    return details;
  }
  /** re-read the kit, for a page opened before start up finished */
  async reloadBrandKit() {
    if (!this._org_zone)
      return null;
    const metadata = await ic(this._org_zone, "signage_ai").catch(() => null);
    if (!metadata) {
      this.brand_kit_read.set("failed");
      return this.brand_kit();
    }
    const details = metadata.details;
    if (details && !Array.isArray(details) && Object.keys(details).length) {
      this.brand_kit.set(details);
    }
    this.brand_kit_read.set("ok");
    return this.brand_kit();
  }
  intentKey(kind, request) {
    const id = `${kind}:${JSON.stringify(request)}`;
    let key = this._intents.get(id);
    if (!key) {
      key = crypto.randomUUID();
      this._intents.set(id, key);
    }
    return key;
  }
  /** the jobs the user started recently, so the list survives a reload */
  async loadRecent() {
    const jobs = await querySignageAIJobs({ mine: true, limit: 20 }).catch(() => []);
    this._merge(jobs);
    jobs.filter((job) => !isFinal(job)).forEach((job) => this.watch(job.id));
    return jobs;
  }
  async generate(request) {
    const job = await generateSignageImage(__spreadProps(__spreadValues({}, request), {
      idempotency_key: request.idempotency_key || crypto.randomUUID()
    }));
    this._merge([job]);
    this.watch(job.id);
    return job;
  }
  async edit(request) {
    const job = await editSignageImage(__spreadProps(__spreadValues({}, request), {
      idempotency_key: request.idempotency_key || crypto.randomUUID()
    }));
    this._merge([job]);
    this.watch(job.id);
    return job;
  }
  async cancel(id) {
    const job = await cancelSignageAIJob(id).catch(() => null);
    if (job)
      this._merge([job]);
    return job;
  }
  async claim(id, upload_id, item_id) {
    let last_error;
    for (const delay of CLAIM_RETRY_DELAYS) {
      if (delay) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      try {
        return await claimSignageAIImage(id, { upload_id, item_id });
      } catch (error) {
        last_error = error;
      }
    }
    throw last_error;
  }
  job(id) {
    return this.jobs()[id];
  }
  /**
   * Watch a job until it finishes.
   */
  watch(id) {
    if (this._watching.has(id))
      return;
    this._watching.add(id);
    this._attempts.delete(id);
    this.timeout(`watch-${id}`, () => this._poll(id), 1);
  }
  unwatch(id) {
    this._watching.delete(id);
    this._attempts.delete(id);
    this.clearTimeout(`watch-${id}`);
  }
  async _poll(id) {
    if (!this._watching.has(id))
      return;
    const known = this.jobs()[id]?.version ?? 0;
    const result = await showSignageAIJob(id, {
      wait: POLL_WAIT,
      since: known
    }).catch((error) => ({ error }));
    if ("error" in result) {
      const status = errorStatus(result.error);
      const attempts = (this._attempts.get(id) || 0) + 1;
      this._attempts.set(id, attempts);
      if (status === 404 || status === 403 || attempts >= POLL_RETRIES) {
        this._failJob(id);
        this.unwatch(id);
        return;
      }
      this.timeout(`watch-${id}`, () => this._poll(id), 2e3);
      return;
    }
    const job = result;
    this._attempts.delete(id);
    this._merge([job]);
    if (isFinal(job)) {
      this.unwatch(id);
      this._announce(job);
      this.refreshQuota();
      return;
    }
    this.timeout(`watch-${id}`, () => this._poll(id), 1);
  }
  /**
   * Re-read what is left of the allowance.
   */
  async refreshQuota() {
    const capabilities = await signageAICapabilities().catch(() => null);
    if (capabilities?.quota) {
      this.capabilities.update((current) => current ? __spreadProps(__spreadValues({}, current), { quota: capabilities.quota }) : current);
    }
  }
  /** told once, when a job the user may no longer be watching finishes */
  _announce(job) {
    if (job.state === "failed") {
      notifyError(job.error_message || i18n("SIGNAGE_MANAGER.AI_JOB_FAILED"));
    } else if (job.state === "done" && job.images_produced > 0) {
      notifyInfo(i18n("SIGNAGE_MANAGER.AI_JOB_DONE"));
    }
  }
  _failJob(id) {
    const current = this.jobs()[id];
    if (!current || isFinal(current))
      return;
    const failed = __spreadProps(__spreadValues({}, current), {
      state: "failed",
      version: current.version + 1,
      error_message: i18n("SIGNAGE_MANAGER.AI_JOB_FAILED")
    });
    this._merge([failed]);
    this._announce(failed);
  }
  _merge(jobs) {
    if (!jobs?.length)
      return;
    this.jobs.update((existing) => {
      const next = __spreadValues({}, existing);
      for (const job of jobs)
        next[job.id] = job;
      return next;
    });
  }
  /**
   * Read a generated image back out as something an <img> or a canvas can
   * take.
   */
  loadImage(url) {
    const source = url.startsWith("http") ? url : `${location.origin}${url}`;
    return loadAuthenticatedImage(source, "/api/engine/v2/uploads");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AiImageService_BaseFactory;
      return function AiImageService_Factory(__ngFactoryType__) {
        return (\u0275AiImageService_BaseFactory || (\u0275AiImageService_BaseFactory = \u0275\u0275getInheritedFactory(_AiImageService)))(__ngFactoryType__ || _AiImageService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiImageService, factory: _AiImageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiImageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  errorMessage,
  perceivedLightness,
  isFinal,
  AiImageService
};
//# debugId=398e05b0-87b9-5c54-9cb8-db5a12ff143d
//# sourceMappingURL=chunk-FZP36Z2C.js.map
