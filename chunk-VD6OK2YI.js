import {
  __spreadValues
} from "./chunk-GLT7DQUO.js";

// apps/signage-manager/src/app/media/document-import.util.ts
var TRANSPARENT_BACKGROUND = "transparent";
var DocumentOpenError = class extends Error {
  constructor(reason, message) {
    super(message);
    this.reason = reason;
    this.name = "DocumentOpenError";
  }
};
var MAX_DOCUMENT_PAGES = 200;
var WEBP_QUALITY = 0.92;
var RESOLUTION_BOUNDS = {
  "4k": [3840, 2160],
  hd: [1920, 1080]
};
function documentBaseName(file_name) {
  const name = (file_name || "").trim().replace(/\.(pdf|pptx)$/i, "").trim();
  return name || "Document";
}
function documentPageName(base_name, page_number) {
  return `${base_name} - page ${page_number}`;
}
function normalizeRotation(rotation) {
  return (Math.round(rotation / 90) * 90 % 360 + 360) % 360;
}
function rotatedSize(size, rotation) {
  return normalizeRotation(rotation) % 180 ? { width: size.height, height: size.width } : __spreadValues({}, size);
}
function pageOutputSize(page, fit, resolution) {
  const [long_side, short_side] = RESOLUTION_BOUNDS[resolution];
  if (fit === "landscape")
    return { width: long_side, height: short_side };
  if (fit === "portrait")
    return { width: short_side, height: long_side };
  const [max_width, max_height] = page.width >= page.height ? [long_side, short_side] : [short_side, long_side];
  const scale = Math.min(max_width / page.width, max_height / page.height);
  return {
    width: Math.max(1, Math.round(page.width * scale)),
    height: Math.max(1, Math.round(page.height * scale))
  };
}
function pageImageSize(page_size, options) {
  return pageOutputSize(rotatedSize(page_size, options.rotation), options.fit, options.resolution);
}
function pagePlacement(page, output) {
  const scale = Math.min(output.width / page.width, output.height / page.height);
  const width = Math.max(1, Math.min(output.width, Math.round(page.width * scale)));
  const height = Math.max(1, Math.min(output.height, Math.round(page.height * scale)));
  return {
    width,
    height,
    x: Math.floor((output.width - width) / 2),
    y: Math.floor((output.height - height) / 2)
  };
}
function composePage(layer, output, placement, background) {
  const canvas = document.createElement("canvas");
  canvas.width = output.width;
  canvas.height = output.height;
  const ctx = canvas.getContext("2d");
  if (!ctx)
    throw new Error("Canvas is not available");
  if (background && background !== TRANSPARENT_BACKGROUND) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, output.width, output.height);
  }
  ctx.drawImage(layer, placement.x, placement.y, placement.width, placement.height);
  return canvas;
}
var webp_supported;
function canEncodeWebp() {
  if (webp_supported !== void 0)
    return webp_supported;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    webp_supported = canvas.toDataURL("image/webp").startsWith("data:image/webp");
  } catch {
    webp_supported = false;
  }
  return webp_supported;
}
async function canvasToImageFile(canvas, format, base_name) {
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, format === "webp" ? "image/webp" : "image/png", format === "webp" ? WEBP_QUALITY : void 0));
  if (!blob)
    throw new Error("Could not write the page image");
  const type = blob.type || "image/png";
  const extension = type === "image/webp" ? "webp" : "png";
  return new File([blob], `${base_name}.${extension}`, { type });
}
function releaseCanvas(canvas) {
  if (!canvas)
    return;
  canvas.width = 0;
  canvas.height = 0;
}
async function renderPageImage(document_handle, page_number, options, file_name, signal) {
  const page_size = await document_handle.pageSize(page_number);
  const output = pageImageSize(page_size, options);
  const placement = pagePlacement(rotatedSize(page_size, options.rotation), output);
  const layer = await document_handle.renderLayer(page_number, options.rotation, placement, signal);
  let canvas;
  try {
    canvas = composePage(layer, output, placement, options.background);
    const file = await canvasToImageFile(canvas, options.format, file_name);
    return __spreadValues({ file }, output);
  } finally {
    releaseCanvas(layer);
    releaseCanvas(canvas);
  }
}

export {
  TRANSPARENT_BACKGROUND,
  DocumentOpenError,
  MAX_DOCUMENT_PAGES,
  documentBaseName,
  documentPageName,
  normalizeRotation,
  rotatedSize,
  pageImageSize,
  canEncodeWebp,
  releaseCanvas,
  renderPageImage
};
//# debugId=43d1a360-9bb2-577e-829c-ea9a99ed7ffa
//# sourceMappingURL=chunk-VD6OK2YI.js.map
