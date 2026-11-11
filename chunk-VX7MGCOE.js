import {
  J,
  et
} from "./chunk-GJJQD6BV.js";

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
var PREVIEW_TYPES = [
  { type: "application/pdf", bytes: [37, 80, 68, 70, 45] },
  {
    type: "image/png",
    bytes: [137, 80, 78, 71, 13, 10, 26, 10]
  },
  { type: "image/jpeg", bytes: [255, 216, 255] }
];
var UNKNOWN_UPLOAD_TYPE = "application/octet-stream";
async function loadUploadPreview(source) {
  setAuthCookie("/api/engine/v2/uploads");
  const response = await fetch(source);
  if (!response.ok) {
    throw new Error(`Failed to fetch upload: ${response.status}`);
  }
  const data = await response.arrayBuffer();
  const head = new Uint8Array(data, 0, Math.min(data.byteLength, 8));
  const match = PREVIEW_TYPES.find(({ bytes }) => bytes.every((byte, index) => head[index] === byte));
  return new Blob([data], { type: match?.type ?? UNKNOWN_UPLOAD_TYPE });
}

export {
  getCachedAuthenticatedImage,
  setAuthCookie,
  loadAuthenticatedImage,
  loadAuthenticatedImageWithHeader,
  UNKNOWN_UPLOAD_TYPE,
  loadUploadPreview
};
//# debugId=66d2956b-410d-5a33-b087-e0aa91c56767
//# sourceMappingURL=chunk-VX7MGCOE.js.map
