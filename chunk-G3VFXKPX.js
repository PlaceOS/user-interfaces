import {
  loadAuthenticatedImage
} from "./chunk-DKQ77FMR.js";
import {
  UserFacingError,
  errorStatus,
  perceivedLightness
} from "./chunk-IC6PDIJY.js";
import {
  AsyncHandler,
  UploadsService
} from "./chunk-DQYXLEKZ.js";
import {
  Injectable,
  V,
  _,
  computed,
  i18n,
  inject,
  notifyError,
  notifyInfo,
  oc,
  setClassMetadata,
  signal,
  u,
  uc,
  v,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-VC4MJRPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// apps/signage-manager/src/app/image-gen/image-gen.fn.ts
var IMAGE_GEN_PATH = () => `${u()}/signage/ai`;
function toQuery(params) {
  const pairs = Object.entries(params).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  return pairs.length ? `?${pairs.join("&")}` : "";
}
function removeSignageUpload(id) {
  return V(`${u()}/uploads/${encodeURIComponent(id)}`, {
    response_type: "void"
  });
}
function signageImageGenCapabilities() {
  return _(`${IMAGE_GEN_PATH()}/capabilities`);
}
function generateSignageImage(request) {
  return v(`${IMAGE_GEN_PATH()}/generate`, request);
}
function editSignageImage(request) {
  return v(`${IMAGE_GEN_PATH()}/edit`, request);
}
function showSignageImageGenJob(id, query = {}) {
  return _(`${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query)}`);
}
function querySignageImageGenJobs(query = {}) {
  return _(`${IMAGE_GEN_PATH()}/jobs${toQuery(query)}`);
}
function cancelSignageImageGenJob(id) {
  return v(`${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}/cancel`, {});
}
function claimSignageImageGenImage(id, body) {
  return v(`${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}/claim`, body);
}

// apps/signage-manager/src/app/image-gen/image-gen.service.ts
var FINAL_STATES = ["done", "failed", "cancelled"];
function logoKey(slot) {
  return slot === "on_light" ? "logo_upload_id" : "logo_dark_upload_id";
}
var POLL_WAIT = 25;
var POLL_RETRIES = 10;
var CLAIM_RETRY_DELAYS = [0, 500, 1500];
var MAX_JOB_WAIT_MS = 30 * 60 * 1e3;
var LOAD_RETRY_DELAYS = [5e3, 3e4, 12e4];
function isFinal(job) {
  return !!job && FINAL_STATES.includes(job.state);
}
var ImageGenService = class _ImageGenService extends AsyncHandler {
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
    this._uploads = inject(UploadsService);
    this._loaded = false;
    this._load_attempts = 0;
    this._org_zone = "";
    this._kit_write = Promise.resolve();
    this._intents = /* @__PURE__ */ new Map();
    this._abandoned = /* @__PURE__ */ new Map();
    this._watching = /* @__PURE__ */ new Map();
    this._attempts = /* @__PURE__ */ new Map();
    this._on_screen = /* @__PURE__ */ new Set();
  }
  /**
   * Read what this domain can do. A failed read leaves image generation off and tries
   * again in the background a few times.
   */
  async load(org_zone_id) {
    if (this._loaded)
      return this.capabilities();
    this._org_zone = org_zone_id || "";
    const capabilities = await signageImageGenCapabilities().catch(() => null);
    if (this._loaded)
      return this.capabilities();
    this._loaded = !!capabilities;
    if (!capabilities) {
      const delay = LOAD_RETRY_DELAYS[this._load_attempts++];
      if (delay) {
        this.timeout("load", () => this.load(org_zone_id), delay);
      }
    }
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
    this._assertBrandKitWritable();
    const upload_id = await this._uploads.uploadFileToCompletion(file);
    const changes = {
      [logoKey(slot)]: upload_id
    };
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
    this._assertBrandKitWritable();
    const source_id = this.brand_kit()?.[logoKey(target === "on_light" ? "on_dark" : "on_light")];
    if (!source_id)
      throw new UserFacingError(i18n("SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_YET"));
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
   * Merge changes into the domain's brand kit. Writes run one at a time:
   * each replaces the whole kit, so two at once would lose one's changes.
   */
  saveBrandKit(changes) {
    const write = this._kit_write.then(() => this._writeBrandKit(changes));
    this._kit_write = write.catch(() => null);
    return write;
  }
  async _writeBrandKit(changes) {
    this._assertBrandKitWritable();
    const details = __spreadValues(__spreadValues({}, this.brand_kit() || {}), changes);
    for (const key of Object.keys(details)) {
      if (details[key] === void 0)
        delete details[key];
    }
    await uc(this._org_zone, {
      name: "signage_ai",
      description: "Brand kit used when generating signage artwork",
      details
    }, "put");
    this.brand_kit.set(details);
    return details;
  }
  /** a save needs the organisation zone and the stored kit to merge into */
  _assertBrandKitWritable() {
    if (!this._org_zone) {
      throw new UserFacingError(i18n("SIGNAGE_MANAGER.IMAGE_GEN_NO_ORG_ZONE"));
    }
    if (this.brand_kit_read() !== "ok") {
      throw new UserFacingError(i18n("SIGNAGE_MANAGER.BRAND_NOT_LOADED"));
    }
  }
  /** re-read the kit, for a page opened before start up finished */
  async reloadBrandKit() {
    if (!this._org_zone)
      return null;
    const metadata = await oc(this._org_zone, "signage_ai").catch(() => null);
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
  /**
   * Retire a key, so the next identical request gets a new one: a job came
   * back for it, or the person let go of the request before it did.
   */
  forgetIntent(key) {
    for (const [id, value] of this._intents) {
      if (value !== key)
        continue;
      this._intents.delete(id);
      return;
    }
  }
  /** jobs started before a reload, so they still announce when they finish */
  async loadRecent() {
    const jobs = await querySignageImageGenJobs({
      mine: true,
      limit: 20
    }).catch(() => []);
    this._merge(jobs);
    jobs.filter((job) => !isFinal(job)).forEach((job) => this.watch(job.id));
    return jobs;
  }
  async generate(request) {
    const job = await generateSignageImage(__spreadProps(__spreadValues({}, request), {
      idempotency_key: request.idempotency_key || crypto.randomUUID()
    }));
    this.forgetIntent(request.idempotency_key);
    this._merge([job]);
    this.watch(job.id);
    return job;
  }
  async edit(request) {
    const job = await editSignageImage(__spreadProps(__spreadValues({}, request), {
      idempotency_key: request.idempotency_key || crypto.randomUUID()
    }));
    this.forgetIntent(request.idempotency_key);
    this._merge([job]);
    this.watch(job.id);
    return job;
  }
  async cancel(id) {
    const job = await cancelSignageImageGenJob(id).catch(() => null);
    if (job)
      this._merge([job]);
    return job;
  }
  /**
   * Stop a job no screen will show. It ends without a notice, and its
   * references are cleared once it has stopped. If the server refuses to
   * cancel, the job stays watched so the clean up still happens when it ends.
   */
  async abandon(id, reference_ids) {
    this._abandoned.set(id, reference_ids);
    const job = await this.cancel(id);
    if (!isFinal(job) || !this._abandoned.has(id))
      return;
    this.unwatch(id);
    this._ended(job);
  }
  /** a job reached its end: tell the person, or clear what it was left */
  _ended(job) {
    const references = this._abandoned.get(job.id);
    if (!references)
      return this._announce(job);
    this._abandoned.delete(job.id);
    references.forEach((id) => this.removeReference(id));
  }
  async claim(id, upload_id, item_id) {
    let last_error;
    for (const delay of CLAIM_RETRY_DELAYS) {
      if (delay) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      try {
        return await claimSignageImageGenImage(id, {
          upload_id,
          item_id
        });
      } catch (error) {
        last_error = error;
      }
    }
    throw last_error;
  }
  /**
   * Watch a job until it finishes, or mark it failed once it has run for
   * longer than any provider should take.
   */
  watch(id) {
    if (this._watching.has(id))
      return;
    this._watching.set(id, Date.now() + MAX_JOB_WAIT_MS);
    this._attempts.delete(id);
    this.timeout(`watch-${id}`, () => this._poll(id), 1);
  }
  unwatch(id) {
    this._watching.delete(id);
    this._attempts.delete(id);
    this.clearTimeout(`watch-${id}`);
  }
  async _poll(id) {
    const deadline = this._watching.get(id);
    if (deadline === void 0)
      return;
    if (Date.now() >= deadline) {
      this._failJob(id);
      this.unwatch(id);
      return;
    }
    const known = this.jobs()[id]?.version ?? 0;
    const result = await showSignageImageGenJob(id, {
      wait: POLL_WAIT,
      since: known
    }).catch((error) => ({ error }));
    if (!this._watching.has(id))
      return;
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
      this._ended(job);
      this.refreshQuota();
      return;
    }
    this.timeout(`watch-${id}`, () => this._poll(id), 1);
  }
  /**
   * Re-read what is left of the allowance.
   */
  async refreshQuota() {
    const capabilities = await signageImageGenCapabilities().catch(() => null);
    if (capabilities?.quota) {
      this.capabilities.update((current) => current ? __spreadProps(__spreadValues({}, current), { quota: capabilities.quota }) : current);
    }
  }
  /** mark a job as shown, or no longer shown, by an open screen */
  setJobOnScreen(id, on_screen) {
    if (on_screen)
      this._on_screen.add(id);
    else
      this._on_screen.delete(id);
  }
  /**
   * Told once, when a job the user may no longer be watching finishes. A
   * failure is always told, as the screen showing it does not say why.
   */
  _announce(job) {
    if (job.state === "failed") {
      notifyError(job.error_message || i18n("SIGNAGE_MANAGER.IMAGE_GEN_JOB_FAILED"));
    } else if (job.state === "done" && job.images_produced > 0 && !this._on_screen.has(job.id)) {
      notifyInfo(i18n("SIGNAGE_MANAGER.IMAGE_GEN_JOB_DONE"));
    }
  }
  _failJob(id) {
    const current = this.jobs()[id];
    if (!current || isFinal(current))
      return;
    const failed = __spreadProps(__spreadValues({}, current), {
      state: "failed",
      version: current.version + 1,
      error_message: i18n("SIGNAGE_MANAGER.IMAGE_GEN_JOB_FAILED")
    });
    this._merge([failed]);
    this._ended(failed);
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
      let \u0275ImageGenService_BaseFactory;
      return function ImageGenService_Factory(__ngFactoryType__) {
        return (\u0275ImageGenService_BaseFactory || (\u0275ImageGenService_BaseFactory = \u0275\u0275getInheritedFactory(_ImageGenService)))(__ngFactoryType__ || _ImageGenService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageGenService, factory: _ImageGenService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageGenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  isFinal,
  ImageGenService
};
//# debugId=3dce005c-575c-52d6-a71b-0f457196afc2
//# sourceMappingURL=chunk-G3VFXKPX.js.map
