// apps/signage-manager/src/app/signage-media-upload.util.ts
var SIGNAGE_MEDIA_FILE_ACCEPT = [
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
  ".webm",
  "video/webm",
  ".mp4",
  "video/mp4",
  ".mov",
  "video/quicktime"
].join(",");
var SIGNAGE_MEDIA_PICKER_ACCEPT = [
  "image/*",
  ".heic",
  ".heif",
  ".webm",
  "video/webm",
  ".mp4",
  "video/mp4",
  ".mov",
  "video/quicktime"
].join(",");
var SIGNAGE_MEDIA_MAX_WIDTH = 3840;
var SIGNAGE_MEDIA_MAX_HEIGHT = 2160;
var IMAGE_MIME_TYPES = /* @__PURE__ */ new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/svg+xml"
]);
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp", "svg"]);
var IMAGE_SOURCE_EXTENSIONS = /* @__PURE__ */ new Set([
  ...IMAGE_EXTENSIONS,
  "avif",
  "bmp",
  "gif",
  "heic",
  "heif",
  "tif",
  "tiff"
]);
var MP4_ALLOWED_VIDEO_CODECS = /* @__PURE__ */ new Set(["avc1", "avc3"]);
var MP4_ALLOWED_AUDIO_CODECS = /* @__PURE__ */ new Set(["mp4a"]);
var MP4_VIDEO_CODECS = /* @__PURE__ */ new Set([
  "avc1",
  "avc3",
  "hev1",
  "hvc1",
  "av01",
  "vp09",
  "mp4v",
  "encv"
]);
var MP4_AUDIO_CODECS = /* @__PURE__ */ new Set([
  "mp4a",
  "ac-3",
  "ec-3",
  "Opus",
  "fLaC",
  "alac",
  ".mp3",
  "enca"
]);
var WEBM_ALLOWED_VIDEO_CODECS = /* @__PURE__ */ new Set(["V_VP8", "V_VP9"]);
var WEBM_ALLOWED_AUDIO_CODECS = /* @__PURE__ */ new Set(["A_VORBIS", "A_OPUS"]);
var WEBM_VIDEO_CODECS = /* @__PURE__ */ new Set(["V_VP8", "V_VP9", "V_AV1"]);
var WEBM_AUDIO_CODECS = /* @__PURE__ */ new Set([
  "A_VORBIS",
  "A_OPUS",
  "A_AAC",
  "A_FLAC",
  "A_MPEG/L3"
]);
var MP4_CONTAINER_BOXES = /* @__PURE__ */ new Set([
  "dinf",
  "edts",
  "mdia",
  "meta",
  "minf",
  "moof",
  "moov",
  "mvex",
  "stbl",
  "traf",
  "trak",
  "udta"
]);
var SUPPORTED_FORMATS_ERROR = "Supported image formats: PNG, JPEG, WEBP, SVG. Supported video formats: WEBM, MP4, and MOV.";
var VIDEO_CODEC_ERROR = "Unsupported video codec. Use MP4 or MOV with H.264 video and AAC audio, or WEBM with VP8/VP9 video and Vorbis/Opus audio for broad browser support.";
var MEDIA_DIMENSIONS_ERROR = `Maximum supported resolution is ${SIGNAGE_MEDIA_MAX_WIDTH}x${SIGNAGE_MEDIA_MAX_HEIGHT} (4K).`;
async function validateSignageMediaFile(file, options = {}) {
  if (isSupportedImageFile(file)) {
    return { valid: true, media_type: "image" };
  }
  const container = getVideoContainer(file);
  if (!container) {
    return { valid: false, error: SUPPORTED_FORMATS_ERROR };
  }
  const is_valid_codec = await validateVideoCodecs(file, container, options);
  if (!is_valid_codec) {
    return { valid: false, error: VIDEO_CODEC_ERROR };
  }
  return { valid: true, media_type: "video" };
}
function isSupportedImageFile(file) {
  return matchesAllowedType(file, IMAGE_MIME_TYPES, IMAGE_EXTENSIONS);
}
function isImageSourceFile(file) {
  return file.type.toLowerCase().startsWith("image/") || IMAGE_SOURCE_EXTENSIONS.has(getFileExtension(file.name));
}
function validateSignageMediaDimensions(dimensions) {
  return dimensions.width <= SIGNAGE_MEDIA_MAX_WIDTH && dimensions.height <= SIGNAGE_MEDIA_MAX_HEIGHT ? { valid: true } : { valid: false, error: MEDIA_DIMENSIONS_ERROR };
}
function getVideoContainer(file) {
  if (matchesAllowedType(file, /* @__PURE__ */ new Set(["video/mp4"]), /* @__PURE__ */ new Set(["mp4"]))) {
    return "mp4";
  }
  if (matchesAllowedType(file, /* @__PURE__ */ new Set(["video/quicktime"]), /* @__PURE__ */ new Set(["mov"]))) {
    return "mov";
  }
  if (matchesAllowedType(file, /* @__PURE__ */ new Set(["video/webm"]), /* @__PURE__ */ new Set(["webm"]))) {
    return "webm";
  }
  return null;
}
async function validateVideoCodecs(file, container, options) {
  const data = await readFileAsArrayBuffer(file);
  return container === "webm" ? validateWebmCodecs(data, options) : validateMp4Codecs(data, options);
}
function matchesAllowedType(file, mime_types, extensions) {
  const mime_type = file.type.toLowerCase();
  const extension = getFileExtension(file.name);
  return mime_types.has(mime_type) || extensions.has(extension);
}
function getFileExtension(file_name = "") {
  const parts = file_name.toLowerCase().split(".");
  return parts.length > 1 ? parts.pop() || "" : "";
}
function validateMp4Codecs(data, options) {
  const sample_entries = getMp4SampleEntryTypes(data);
  const allowed_video_codecs = options.allow_extended_video_codecs ? /* @__PURE__ */ new Set([...MP4_ALLOWED_VIDEO_CODECS, "av01", "hev1", "hvc1"]) : MP4_ALLOWED_VIDEO_CODECS;
  const video_codecs = sample_entries.filter((codec) => MP4_VIDEO_CODECS.has(codec));
  const audio_codecs = sample_entries.filter((codec) => MP4_AUDIO_CODECS.has(codec));
  return video_codecs.length > 0 && video_codecs.every((codec) => allowed_video_codecs.has(codec)) && audio_codecs.every((codec) => MP4_ALLOWED_AUDIO_CODECS.has(codec));
}
function validateWebmCodecs(data, options) {
  const bytes = new Uint8Array(data);
  const allowed_video_codecs = options.allow_extended_video_codecs ? /* @__PURE__ */ new Set([...WEBM_ALLOWED_VIDEO_CODECS, "V_AV1"]) : WEBM_ALLOWED_VIDEO_CODECS;
  const video_codecs = [...WEBM_VIDEO_CODECS].filter((codec) => containsAscii(bytes, codec));
  const audio_codecs = [...WEBM_AUDIO_CODECS].filter((codec) => containsAscii(bytes, codec));
  return video_codecs.length > 0 && video_codecs.every((codec) => allowed_video_codecs.has(codec)) && audio_codecs.every((codec) => WEBM_ALLOWED_AUDIO_CODECS.has(codec));
}
function getMp4SampleEntryTypes(data) {
  const view = new DataView(data);
  const codecs = [];
  parseMp4Boxes(view, 0, view.byteLength, codecs);
  return [...new Set(codecs)];
}
function parseMp4Boxes(view, start, end, codecs) {
  let offset = start;
  while (offset + 8 <= end) {
    const box = readMp4Box(view, offset, end);
    if (!box)
      break;
    if (box.type === "stsd") {
      readMp4SampleEntries(view, box.content_start, box.end, codecs);
    } else if (MP4_CONTAINER_BOXES.has(box.type)) {
      const child_start = box.type === "meta" ? box.content_start + 4 : box.content_start;
      if (child_start < box.end) {
        parseMp4Boxes(view, child_start, box.end, codecs);
      }
    }
    offset = box.end;
  }
}
function readMp4SampleEntries(view, start, end, codecs) {
  if (start + 8 > end)
    return;
  const entry_count = view.getUint32(start + 4);
  let offset = start + 8;
  for (let i = 0; i < entry_count && offset + 8 <= end; i++) {
    const box = readMp4Box(view, offset, end);
    if (!box)
      break;
    codecs.push(box.type);
    offset = box.end;
  }
}
function readMp4Box(view, offset, end) {
  if (offset + 8 > end)
    return null;
  let size = view.getUint32(offset);
  let header_size = 8;
  if (size === 1) {
    if (offset + 16 > end)
      return null;
    size = Number(view.getBigUint64(offset + 8));
    header_size = 16;
  } else if (size === 0) {
    size = end - offset;
  }
  if (size < header_size || offset + size > end)
    return null;
  return {
    type: readAscii(view, offset + 4, 4),
    content_start: offset + header_size,
    end: offset + size
  };
}
function readAscii(view, start, length) {
  let value = "";
  for (let i = 0; i < length; i++) {
    value += String.fromCharCode(view.getUint8(start + i));
  }
  return value;
}
function containsAscii(bytes, value) {
  const pattern = Array.from(value).map((char) => char.charCodeAt(0));
  for (let i = 0; i <= bytes.length - pattern.length; i++) {
    let matches = true;
    for (let j = 0; j < pattern.length; j++) {
      if (bytes[i + j] !== pattern[j]) {
        matches = false;
        break;
      }
    }
    if (matches)
      return true;
  }
  return false;
}
function readFileAsArrayBuffer(file) {
  if (typeof file.arrayBuffer === "function") {
    return file.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("Failed to read upload"));
    reader.readAsArrayBuffer(file);
  });
}

export {
  SIGNAGE_MEDIA_PICKER_ACCEPT,
  validateSignageMediaFile,
  isSupportedImageFile,
  isImageSourceFile,
  validateSignageMediaDimensions,
  getVideoContainer
};
//# debugId=c1b617ed-3329-5d24-9675-dd4ee070e7db
//# sourceMappingURL=chunk-OZEEJTZM.js.map
