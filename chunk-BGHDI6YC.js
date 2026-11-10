import {
  parseWebUrl
} from "./chunk-C3VLFLNG.js";

// apps/signage-manager/src/app/signage-url.util.ts
function normaliseWebPageUrl(url) {
  return parseWebUrl(url)?.href ?? null;
}
function isWebPageUrl(url) {
  return !!parseWebUrl(url);
}
function webPageFrameUrl(url) {
  return isWebPageUrl(url) ? url : "about:blank";
}
function uploadUrl(upload_id) {
  return `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
}
function signagePlayerUrl(setting, route) {
  const signage_path = setting && parseWebUrl(setting, document.baseURI) ? setting : "/signage";
  return `${signage_path.replace(/\/$/, "")}/#/${route}?debug=true`;
}

export {
  normaliseWebPageUrl,
  isWebPageUrl,
  webPageFrameUrl,
  uploadUrl,
  signagePlayerUrl
};
//# debugId=c53e5217-4f34-5901-a978-9ce0845d865a
//# sourceMappingURL=chunk-BGHDI6YC.js.map
