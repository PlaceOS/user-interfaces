import {
  apiEndpoint
} from "./chunk-TQBELCAT.js";
import {
  parseWebUrl
} from "./chunk-ZHBO75B7.js";

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
function mediaUrl(item) {
  return item?.media_id ? uploadUrl(item.media_id) : item?.media_uri || "";
}
function mediaThumbnailUrl(media_id) {
  return `${apiEndpoint()}/signage/media/${encodeURIComponent(media_id)}/thumbnail`;
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
  mediaUrl,
  mediaThumbnailUrl,
  signagePlayerUrl
};
//# debugId=d33f9c35-db04-5606-aab0-c49099fa94d8
//# sourceMappingURL=chunk-2DA2S7QA.js.map
