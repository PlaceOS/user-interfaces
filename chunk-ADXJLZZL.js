import {
  parseWebUrl
} from "./chunk-MIKPTNJX.js";

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

export {
  normaliseWebPageUrl,
  isWebPageUrl,
  webPageFrameUrl
};
//# debugId=85b06fa6-812b-533f-b98f-2e0413b040ed
//# sourceMappingURL=chunk-ADXJLZZL.js.map
