// apps/signage-manager/src/app/signage-url.util.ts
function parseWebUrl(url, base) {
  try {
    const parsed = new URL(url, base);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed : null;
  } catch {
    return null;
  }
}
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
  parseWebUrl,
  normaliseWebPageUrl,
  isWebPageUrl,
  webPageFrameUrl
};
//# debugId=66ec795a-4edb-5538-b9d3-fbc3f19ca125
//# sourceMappingURL=chunk-FZRJJ3PO.js.map
