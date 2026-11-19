import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/common/src/lib/image-encoders.ts
var MAX_WEBP_DURATION = 16777215;
function webpImageChunks(file) {
  if (ascii(file, 0, 4) !== "RIFF" || ascii(file, 8, 4) !== "WEBP") {
    throw new Error("The frame is not a WebP file");
  }
  const parts = [];
  let alpha = false;
  for (let offset = 12; offset + 8 <= file.length; ) {
    const type = ascii(file, offset, 4);
    const size = readUint32(file, offset + 4);
    const end = offset + 8 + size + size % 2;
    if (type === "ALPH" || type === "VP8 " || type === "VP8L") {
      parts.push(file.subarray(offset, Math.min(end, file.length)));
      if (type !== "VP8 ")
        alpha = true;
    }
    offset = end;
  }
  if (!parts.length)
    throw new Error("The WebP file has no image");
  return { chunks: concat(parts), alpha };
}
function animatedWebp(frames, width, height) {
  const images = frames.map((frame) => __spreadProps(__spreadValues({}, webpImageChunks(frame.file)), {
    duration: Math.min(Math.max(Math.round(frame.duration), 1), MAX_WEBP_DURATION)
  }));
  const alpha = images.some((_) => _.alpha);
  const vp8x = new Uint8Array(10);
  vp8x[0] = 2 | (alpha ? 16 : 0);
  writeUint24(vp8x, 4, width - 1);
  writeUint24(vp8x, 7, height - 1);
  const anim = new Uint8Array([255, 255, 255, 255, 0, 0]);
  const chunks = [chunk("VP8X", vp8x), chunk("ANIM", anim)];
  for (const image of images) {
    const header = new Uint8Array(16);
    writeUint24(header, 6, width - 1);
    writeUint24(header, 9, height - 1);
    writeUint24(header, 12, image.duration);
    header[15] = 2;
    chunks.push(chunk("ANMF", concat([header, image.chunks])));
  }
  const body = concat(chunks);
  const file = new Uint8Array(12 + body.length);
  file.set(bytesOf("RIFF"), 0);
  writeUint32(file, 4, 4 + body.length);
  file.set(bytesOf("WEBP"), 8);
  file.set(body, 12);
  return file;
}
var GIF_COMMON_COLOURS = 192;
var GIF_CUBE_LEVELS = 4;
var GIF_MAX_CODES = 4096;
var GifPalette = class {
  constructor(first_frame) {
    this.colours = new Uint8Array(256 * 3);
    this._nearest = new Int16Array(1 << 15).fill(-1);
    const counts = new Uint32Array(1 << 15);
    for (let p = 0; p < first_frame.length; p += 4) {
      counts[colourKey(first_frame, p)]++;
    }
    const common = Array.from(counts.keys()).filter((key) => counts[key]).sort((a, b) => counts[b] - counts[a]).slice(0, GIF_COMMON_COLOURS);
    let entry = 0;
    for (const key of common) {
      this._set(entry++, expand(key >> 10), expand(key >> 5), expand(key));
    }
    const step = 255 / (GIF_CUBE_LEVELS - 1);
    for (let r = 0; r < GIF_CUBE_LEVELS; r++) {
      for (let g = 0; g < GIF_CUBE_LEVELS; g++) {
        for (let b = 0; b < GIF_CUBE_LEVELS && entry < 256; b++) {
          this._set(entry++, r * step, g * step, b * step);
        }
      }
    }
  }
  /** Palette indexes of RGBA pixels. Alpha is ignored */
  indexes(rgba) {
    const indexes = new Uint8Array(rgba.length / 4);
    for (let i = 0, p = 0; i < indexes.length; i++, p += 4) {
      const key = colourKey(rgba, p);
      let index = this._nearest[key];
      if (index < 0)
        index = this._nearest[key] = this._closest(key);
      indexes[i] = index;
    }
    return indexes;
  }
  _set(entry, r, g, b) {
    this.colours[entry * 3] = Math.round(r);
    this.colours[entry * 3 + 1] = Math.round(g);
    this.colours[entry * 3 + 2] = Math.round(b);
  }
  _closest(key) {
    const r = expand(key >> 10);
    const g = expand(key >> 5);
    const b = expand(key);
    let best = 0;
    let best_distance = Infinity;
    for (let entry = 0; entry < 256; entry++) {
      const dr = this.colours[entry * 3] - r;
      const dg = this.colours[entry * 3 + 1] - g;
      const db = this.colours[entry * 3 + 2] - b;
      const distance = dr * dr + dg * dg + db * db;
      if (distance < best_distance) {
        best = entry;
        best_distance = distance;
      }
    }
    return best;
  }
};
function colourKey(rgba, offset) {
  return rgba[offset] >> 3 << 10 | rgba[offset + 1] >> 3 << 5 | rgba[offset + 2] >> 3;
}
function expand(value) {
  const five = value & 31;
  return five << 3 | five >> 2;
}
var GifWriter = class {
  constructor(_width, _height, palette) {
    this._width = _width;
    this._height = _height;
    this._parts = [];
    this._length = 0;
    this._frames = 0;
    const screen = new Uint8Array(13);
    screen.set(bytesOf("GIF89a"), 0);
    writeUint16(screen, 6, _width);
    writeUint16(screen, 8, _height);
    screen[10] = 247;
    this._push(screen, palette.colours);
    this._push(new Uint8Array([33, 255, 11]), bytesOf("NETSCAPE2.0"), new Uint8Array([3, 1, 0, 0, 0]));
  }
  /** Bytes written so far */
  get length() {
    return this._length;
  }
  get frames() {
    return this._frames;
  }
  /**
   * Add a frame of palette indexes, from `GifPalette.indexes`. The frame is
   * not added, and the result is `false`, when the finished file would be
   * larger than `max_bytes`.
   */
  add(indexes, duration_ms, max_bytes = Infinity) {
    if (indexes.length !== this._width * this._height) {
      throw new Error("The frame size does not match the GIF size");
    }
    const delay = Math.min(Math.max(Math.round(duration_ms / 10), 1), 65535);
    const control = new Uint8Array([
      33,
      249,
      4,
      0,
      0,
      0,
      0,
      0
    ]);
    writeUint16(control, 4, delay);
    const descriptor = new Uint8Array(10);
    descriptor[0] = 44;
    writeUint16(descriptor, 5, this._width);
    writeUint16(descriptor, 7, this._height);
    const parts = [
      control,
      descriptor,
      new Uint8Array([8]),
      subBlocks(lzw(indexes))
    ];
    const size = parts.reduce((sum, _) => sum + _.length, 0);
    if (this._length + size + 1 > max_bytes)
      return false;
    this._push(...parts);
    this._frames++;
    return true;
  }
  /** The GIF file. Add no frames after this call */
  finish() {
    this._push(new Uint8Array([59]));
    return concat(this._parts);
  }
  _push(...parts) {
    for (const part of parts) {
      this._parts.push(part);
      this._length += part.length;
    }
  }
};
function lzw(indexes) {
  const clear = 256;
  const end = 257;
  const out = [];
  let buffer = 0;
  let bits = 0;
  let size = 9;
  let next = end + 1;
  let table = /* @__PURE__ */ new Map();
  const emit = (code2) => {
    buffer |= code2 << bits;
    bits += size;
    while (bits >= 8) {
      out.push(buffer & 255);
      buffer >>>= 8;
      bits -= 8;
    }
  };
  emit(clear);
  let code = indexes[0];
  for (let i = 1; i < indexes.length; i++) {
    const value = indexes[i];
    const key = code << 8 | value;
    const found = table.get(key);
    if (found !== void 0) {
      code = found;
      continue;
    }
    emit(code);
    if (next === GIF_MAX_CODES) {
      emit(clear);
      table = /* @__PURE__ */ new Map();
      next = end + 1;
      size = 9;
    } else {
      if (next >= 1 << size)
        size++;
      table.set(key, next++);
    }
    code = value;
  }
  emit(code);
  emit(end);
  if (bits)
    out.push(buffer & 255);
  return Uint8Array.from(out);
}
function subBlocks(data) {
  const blocks = Math.ceil(data.length / 255);
  const out = new Uint8Array(data.length + blocks + 1);
  let offset = 0;
  for (let i = 0; i < blocks; i++) {
    const part = data.subarray(i * 255, (i + 1) * 255);
    out[offset++] = part.length;
    out.set(part, offset);
    offset += part.length;
  }
  out[offset] = 0;
  return out;
}
function chunk(type, payload) {
  const out = new Uint8Array(8 + payload.length + payload.length % 2);
  out.set(bytesOf(type), 0);
  writeUint32(out, 4, payload.length);
  out.set(payload, 8);
  return out;
}
function concat(parts) {
  const out = new Uint8Array(parts.reduce((sum, _) => sum + _.length, 0));
  let offset = 0;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.length;
  }
  return out;
}
function bytesOf(text) {
  return Uint8Array.from(text, (_) => _.charCodeAt(0));
}
function ascii(data, offset, length) {
  return String.fromCharCode(...data.subarray(offset, offset + length));
}
function readUint32(data, offset) {
  return (data[offset] | data[offset + 1] << 8 | data[offset + 2] << 16 | data[offset + 3] << 24) >>> 0;
}
function writeUint16(data, offset, value) {
  data[offset] = value & 255;
  data[offset + 1] = value >> 8 & 255;
}
function writeUint24(data, offset, value) {
  writeUint16(data, offset, value);
  data[offset + 2] = value >> 16 & 255;
}
function writeUint32(data, offset, value) {
  writeUint24(data, offset, value);
  data[offset + 3] = value >>> 24 & 255;
}

// libs/common/src/lib/screen-capture.ts
var MAX_MEDIA_BYTES = 4 * 1024 * 1024;
var MAX_CAPTURE_BYTES = 22 * 1024 * 1024;
var MAX_INLINE_BYTES = 4 * 1024 * 1024;
var MAX_GENERATED_CHARS = 2 * 1024 * 1024;
var GIF_PIXEL_BYTES = 5;
var MAX_INLINE_FILE_BYTES = 2 * 1024 * 1024;
var RENDER_TIMEOUT_MS = 15 * 1e3;
var FETCH_TIMEOUT_MS = 10 * 1e3;
var WEBP_HEADER_BYTES = 12 + 18 + 14;
var WEBP_FRAME_HEADER_BYTES = 24;
var SNAPSHOT_QUALITY = 0.85;
var FRAME_QUALITY = 0.7;
var SVG_NS = "http://www.w3.org/2000/svg";
var XHTML_NS = "http://www.w3.org/1999/xhtml";
var URL_PATTERN = /url\(\s*(['"]?)([^'")]+?)\1\s*\)/g;
var LIVE_ELEMENTS = "img, image, canvas, video, iframe, input, textarea, select";
var EMPTY_IMAGE = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
async function captureSnapshot(width) {
  const render = await pageRenderer();
  const canvas = await render(width, 0);
  const mime = canEncodeWebp() ? "image/webp" : "image/png";
  const bytes = await canvasBytes(canvas, mime, SNAPSHOT_QUALITY);
  if (bytes.length > MAX_MEDIA_BYTES) {
    throw new Error("The snapshot is too large. Use a smaller width");
  }
  return {
    mime,
    bytes,
    width: canvas.width,
    height: canvas.height,
    frames: 1,
    duration: 0
  };
}
async function captureAnimation(options) {
  const render = await pageRenderer();
  const webp = options.format === "webp" && canEncodeWebp();
  const interval = 1e3 / options.fps;
  const max_frames = Math.max(1, Math.ceil(options.duration * options.fps / 1e3));
  const start = performance.now();
  const end = start + options.duration;
  const files = [];
  const times = [];
  let gif = null;
  let palette = null;
  let pending = null;
  let gif_end = start;
  let bytes = WEBP_HEADER_BYTES;
  let width = 0;
  let height = 0;
  for (let i = 0; i < max_frames; i++) {
    const time = performance.now();
    if (i > 0 && time >= end)
      break;
    const canvas = await render(options.width, webp ? 0 : GIF_PIXEL_BYTES);
    if (!width) {
      width = canvas.width;
      height = canvas.height;
    }
    if (canvas.width !== width || canvas.height !== height)
      break;
    if (webp) {
      const file = await canvasBytes(canvas, "image/webp", FRAME_QUALITY);
      const size = file.length + WEBP_FRAME_HEADER_BYTES;
      if (bytes + size > MAX_MEDIA_BYTES)
        break;
      files.push(file);
      times.push(time);
      bytes += size;
    } else {
      const context = canvas.getContext("2d");
      if (!context)
        throw new Error("The canvas has no 2D context");
      const pixels = context.getImageData(0, 0, width, height).data;
      palette ??= new GifPalette(pixels);
      gif ??= new GifWriter(width, height, palette);
      if (pending) {
        const added = gif.add(pending.indexes, time - pending.time, MAX_MEDIA_BYTES);
        pending = null;
        if (!added)
          break;
        gif_end = time;
      }
      pending = { indexes: palette.indexes(pixels), time };
    }
    const wait = time + interval - performance.now();
    if (wait > 0 && i < max_frames - 1)
      await sleep(wait);
  }
  if (webp) {
    if (!files.length)
      throw new Error("The first frame is too large");
    const frames = files.map((file, i) => ({
      file,
      duration: (times[i + 1] ?? end) - times[i]
    }));
    return {
      mime: "image/webp",
      bytes: animatedWebp(frames, width, height),
      width,
      height,
      frames: frames.length,
      duration: options.duration
    };
  }
  if (pending && (gif == null ? void 0 : gif.add(pending.indexes, end - pending.time, MAX_MEDIA_BYTES))) {
    gif_end = end;
  }
  if (!(gif == null ? void 0 : gif.frames))
    throw new Error("The first frame is too large");
  return {
    mime: "image/gif",
    bytes: gif.finish(),
    width,
    height,
    frames: gif.frames,
    // Shorter than requested when the size limit stopped the capture
    duration: Math.round(gif_end - start)
  };
}
function canEncodeWebp() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  return canvas.toDataURL("image/webp").startsWith("data:image/webp");
}
async function pageRenderer() {
  const inliner = new Inliner();
  const styles = await pageStyles(inliner);
  return async (max_width, pixel_bytes) => {
    const view_width = document.documentElement.clientWidth || innerWidth;
    const view_height = document.documentElement.clientHeight || innerHeight;
    const scale = Math.min(1, max_width / view_width);
    const width = Math.max(1, Math.round(view_width * scale));
    const height = Math.max(1, Math.round(view_height * scale));
    const { copy, generated } = await copyBody(inliner);
    const svg = svgMarkup(styles, copy, view_width, view_height);
    const source = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const svg_bytes = svg.length * (/[^\u0000-\u00ff]/.test(svg) ? 2 : 1);
    const memory = inliner.chars + generated + svg_bytes + source.length + width * height * (4 + pixel_bytes) + MAX_MEDIA_BYTES;
    if (memory > MAX_CAPTURE_BYTES) {
      throw new Error("The capture needs more memory than the limit. Use a smaller width");
    }
    const image = await loadImage(source);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context)
      throw new Error("The canvas has no 2D context");
    context.fillStyle = pageBackground();
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
    return canvas;
  };
}
function svgMarkup(styles, body, width, height) {
  const root = document.createElementNS(XHTML_NS, "html");
  for (const attribute of Array.from(document.documentElement.attributes)) {
    root.setAttribute(attribute.name, attribute.value);
  }
  const head = document.createElementNS(XHTML_NS, "head");
  const style = document.createElementNS(XHTML_NS, "style");
  style.textContent = styles;
  head.append(style);
  root.append(head, body);
  const html = new XMLSerializer().serializeToString(root);
  return `<svg xmlns="${SVG_NS}" width="${width}" height="${height}"><foreignObject x="0" y="0" width="100%" height="100%">${html}</foreignObject></svg>`;
}
async function pageStyles(inliner) {
  var _a;
  const loaded = /* @__PURE__ */ new Set();
  (_a = document.fonts) == null ? void 0 : _a.forEach((font) => {
    if (font.status === "loaded")
      loaded.add(unquote(font.family));
  });
  const sheets = [
    ...Array.from(document.styleSheets),
    ...document.adoptedStyleSheets ?? []
  ];
  const parts = [];
  for (const sheet of sheets) {
    let css = "";
    try {
      css = rulesText(sheet.cssRules, loaded);
    } catch {
      const text = sheet.href ? await fetchBody(sheet.href, (_) => _.text()) ?? "" : "";
      css = parsedRulesText(text, loaded);
    }
    parts.push(await inliner.css(css, sheet.href || document.baseURI));
  }
  return parts.join("\n").replace(/:root\b/g, "html");
}
function rulesText(rules, loaded) {
  return Array.from(rules).filter((rule) => !(rule instanceof CSSFontFaceRule) || loaded.has(unquote(rule.style.getPropertyValue("font-family")))).map((rule) => rule.cssText).join("\n");
}
function parsedRulesText(text, loaded) {
  if (text.includes("@import"))
    return text;
  try {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(text);
    return rulesText(sheet.cssRules, loaded);
  } catch {
    return text;
  }
}
async function copyBody(inliner) {
  const copy = document.body.cloneNode(true);
  freezeAnimations(document.body, copy);
  const originals = Array.from(document.body.querySelectorAll(LIVE_ELEMENTS));
  const copies = Array.from(copy.querySelectorAll(LIVE_ELEMENTS));
  const budget = { left: MAX_GENERATED_CHARS };
  await Promise.all(originals.map((original, i) => copyLiveElement(original, copies[i], inliner, budget)));
  const styled = Array.from(copy.querySelectorAll('[style*="url("]'));
  await Promise.all(styled.map(async (element) => {
    const style = element.getAttribute("style") ?? "";
    element.setAttribute("style", await inliner.css(style, document.baseURI));
  }));
  copy.querySelectorAll("script, noscript, template").forEach((_) => _.remove());
  return { copy, generated: MAX_GENERATED_CHARS - budget.left };
}
function freezeAnimations(body, copy) {
  var _a;
  const animations = ((_a = document.getAnimations) == null ? void 0 : _a.call(document)) ?? [];
  if (!animations.length)
    return;
  const originals = Array.from(body.getElementsByTagName("*"));
  const copies = copy.getElementsByTagName("*");
  const positions = new Map(originals.map((element, i) => [element, i]));
  for (const animation of animations) {
    const effect = animation.effect;
    if (!(effect instanceof KeyframeEffect) || effect.pseudoElement)
      continue;
    const position = effect.target ? positions.get(effect.target) : void 0;
    const target = position === void 0 ? null : copies[position];
    if (!effect.target || !(target instanceof HTMLElement || target instanceof SVGElement)) {
      continue;
    }
    const computed = getComputedStyle(effect.target);
    for (const keyframe of effect.getKeyframes()) {
      for (const property of Object.keys(keyframe)) {
        if (KEYFRAME_FIELDS.has(property))
          continue;
        const name = property.startsWith("--") ? property : property.replace(/[A-Z]/g, (_) => `-${_.toLowerCase()}`);
        target.style.setProperty(name, computed.getPropertyValue(name));
      }
    }
    target.style.setProperty("animation", "none");
    target.style.setProperty("transition", "none");
  }
}
var KEYFRAME_FIELDS = /* @__PURE__ */ new Set([
  "offset",
  "computedOffset",
  "easing",
  "composite"
]);
async function copyLiveElement(original, copy, inliner, budget) {
  const charge = (data) => {
    if (!data || data.length > budget.left)
      return null;
    budget.left -= data.length;
    return data;
  };
  if (original instanceof HTMLImageElement) {
    const source = original.currentSrc || original.src;
    copy.removeAttribute("srcset");
    copy.removeAttribute("loading");
    copy.setAttribute("src", source && await inliner.file(source) || EMPTY_IMAGE);
  } else if (original instanceof SVGImageElement) {
    const source = original.href.baseVal;
    const url = source ? new URL(source, document.baseURI).href : "";
    copy.removeAttribute("xlink:href");
    copy.setAttribute("href", url && await inliner.file(url) || EMPTY_IMAGE);
  } else if (original instanceof HTMLCanvasElement) {
    copy.replaceWith(imageLike(original, copy, charge(dataUrlOf(() => original.toDataURL()))));
  } else if (original instanceof HTMLVideoElement) {
    copy.replaceWith(imageLike(original, copy, charge(videoFrame(original))));
  } else if (original instanceof HTMLIFrameElement) {
    copy.replaceWith(imageLike(original, copy, null));
  } else if (original instanceof HTMLInputElement) {
    if (original.type === "checkbox" || original.type === "radio") {
      copy.toggleAttribute("checked", original.checked);
    } else {
      copy.setAttribute("value", original.type === "password" ? "" : original.value);
    }
  } else if (original instanceof HTMLTextAreaElement) {
    copy.textContent = original.value;
  } else if (original instanceof HTMLSelectElement) {
    Array.from(copy.querySelectorAll("option")).forEach((option, i) => option.toggleAttribute("selected", i === original.selectedIndex));
  }
}
function imageLike(element, copy, source) {
  const image = document.createElementNS(XHTML_NS, "img");
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  const style = getComputedStyle(element);
  image.setAttribute("class", element.getAttribute("class") ?? "");
  image.setAttribute("style", `${copy.getAttribute("style") ?? ""};width:${width}px;height:${height}px;object-fit:${style.objectFit};${source ? "" : "background:#cbd5e1;"}`);
  image.setAttribute("src", source || EMPTY_IMAGE);
  return image;
}
function videoFrame(video) {
  if (!video.videoWidth || !video.videoHeight)
    return null;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  return dataUrlOf(() => {
    var _a;
    (_a = canvas.getContext("2d")) == null ? void 0 : _a.drawImage(video, 0, 0);
    return canvas.toDataURL("image/jpeg", 0.8);
  });
}
function dataUrlOf(read) {
  try {
    return read();
  } catch {
    return null;
  }
}
function pageBackground() {
  for (const element of [document.body, document.documentElement]) {
    const colour = getComputedStyle(element).backgroundColor;
    if (colour && colour !== "transparent" && colour !== "rgba(0, 0, 0, 0)") {
      return colour;
    }
  }
  return "#ffffff";
}
var Inliner = class {
  constructor() {
    this._files = /* @__PURE__ */ new Map();
    this._bytes = 0;
    this._chars = 0;
  }
  /** Characters of the data URLs that the inliner keeps. Each is 1 byte */
  get chars() {
    return this._chars;
  }
  /** Data URL of a file. `null` when the file cannot be read or is too large */
  file(url) {
    if (url.startsWith("data:"))
      return Promise.resolve(url);
    let file = this._files.get(url);
    if (!file) {
      file = this._read(url);
      this._files.set(url, file);
    }
    return file;
  }
  /** CSS text with each `url()` changed to a data URL */
  async css(css, base) {
    const urls = /* @__PURE__ */ new Map();
    for (const match of css.matchAll(URL_PATTERN)) {
      const address = match[2];
      if (address.startsWith("data:") || address.startsWith("#"))
        continue;
      urls.set(address, null);
    }
    await Promise.all(Array.from(urls.keys()).map(async (address) => {
      const absolute = safeUrl(address, base);
      urls.set(address, absolute ? await this.file(absolute) : null);
    }));
    return css.replace(URL_PATTERN, (text, _quote, address) => {
      const data = urls.get(address);
      return data ? `url("${data}")` : text;
    });
  }
  async _read(url) {
    const blob = await fetchBody(url, async (response) => {
      const size = Number(response.headers.get("content-length"));
      return size > MAX_INLINE_FILE_BYTES ? null : response.blob();
    });
    if (!blob || blob.size > MAX_INLINE_FILE_BYTES || this._bytes + blob.size > MAX_INLINE_BYTES) {
      return null;
    }
    this._bytes += blob.size;
    const data = await blobDataUrl(blob).catch(() => null);
    this._chars += (data == null ? void 0 : data.length) ?? 0;
    return data;
  }
};
async function fetchBody(url, read) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, { signal: controller.signal });
    return response.ok ? await read(response) : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
    controller.abort();
  }
}
function safeUrl(address, base) {
  try {
    return new URL(address, base).href;
  } catch {
    return "";
  }
}
function unquote(text) {
  return text.trim().replace(/^(['"])(.*)\1$/, "$2");
}
function blobDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(`${reader.result}`);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const timer = setTimeout(() => reject(new Error("The page did not finish drawing in time")), RENDER_TIMEOUT_MS);
    image.onload = () => {
      clearTimeout(timer);
      resolve(image);
    };
    image.onerror = () => {
      clearTimeout(timer);
      reject(new Error("The browser could not draw the page"));
    };
    image.src = source;
  });
}
async function canvasBytes(canvas, mime, quality) {
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, mime, quality));
  if (!blob)
    throw new Error("The browser could not encode the image");
  return new Uint8Array(await blob.arrayBuffer());
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export {
  MAX_CAPTURE_BYTES,
  MAX_MEDIA_BYTES,
  canEncodeWebp,
  captureAnimation,
  captureSnapshot
};
//# debugId=77d20d79-44ce-5fa2-ac93-d09bcd8fc22a
//# sourceMappingURL=screen-capture-D5YDD23T.js.map
