import {
  DocumentOpenError,
  MAX_DOCUMENT_PAGES,
  normalizeRotation,
  releaseCanvas,
  rotatedSize
} from "./chunk-VD6OK2YI.js";
import {
  __spreadValues
} from "./chunk-GLT7DQUO.js";

// apps/signage-manager/src/app/media/pptx-document.ts
var COUNT_CHUNK = 10;
var SVG_SIZE = /^<svg\b[^>]*?\swidth="([\d.]+)"[^>]*?\sheight="([\d.]+)"/;
async function openPptxDocument(file) {
  const { convertPptxToSvg } = await import("./browser-URUGZZPO.js");
  try {
    const data = new Uint8Array(await file.arrayBuffer());
    const slides = await readSlides(data, convertPptxToSvg);
    return new PptxDocument(data, slides, convertPptxToSvg);
  } catch (error) {
    throw new DocumentOpenError("invalid", error?.message || "Could not open presentation");
  }
}
async function readSlides(data, convert) {
  const numbers = [];
  let size;
  for (let start = 1; start <= MAX_DOCUMENT_PAGES + 1; start += COUNT_CHUNK) {
    const chunk = Array.from({ length: Math.min(COUNT_CHUNK, MAX_DOCUMENT_PAGES + 2 - start) }, (_, index) => start + index);
    const { slides } = await convert(data, { slides: chunk });
    if (!slides.length)
      break;
    size ??= svgSize(slides[0].svg);
    numbers.push(...slides.map((slide) => slide.slideNumber));
  }
  if (!size)
    throw new Error("Presentation has no slides");
  return { numbers, size };
}
function svgSize(svg) {
  const [, width, height] = SVG_SIZE.exec(svg) || [];
  const size = { width: Number(width), height: Number(height) };
  if (!(size.width > 0 && size.height > 0)) {
    throw new Error("Slide has no size");
  }
  return size;
}
function resizeSvg(svg, size) {
  const end = svg.indexOf(">");
  const head = svg.slice(0, end).replace(/\swidth="[^"]*"/, ` width="${size.width}"`).replace(/\sheight="[^"]*"/, ` height="${size.height}"`);
  return head + svg.slice(end);
}
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not draw the slide"));
    image.src = url;
  });
}
var PptxDocument = class {
  constructor(_data, _slides, _convert) {
    this._data = _data;
    this._slides = _slides;
    this._convert = _convert;
  }
  get page_count() {
    return this._slides.numbers.length;
  }
  async pageSize() {
    return __spreadValues({}, this._slides.size);
  }
  async renderLayer(page_number, rotation, bounds, signal) {
    signal?.throwIfAborted();
    const { slides } = await this._convert(this._data, {
      slides: [this._slides.numbers[page_number - 1]]
    });
    signal?.throwIfAborted();
    if (!slides.length)
      throw new Error("Slide did not render");
    const turn = normalizeRotation(rotation);
    const turned = rotatedSize(this._slides.size, turn);
    const scale = Math.min(bounds.width / turned.width, bounds.height / turned.height);
    const slide_size = {
      width: Math.max(1, Math.round(this._slides.size.width * scale)),
      height: Math.max(1, Math.round(this._slides.size.height * scale))
    };
    const canvas_size = rotatedSize(slide_size, turn);
    const url = URL.createObjectURL(new Blob([resizeSvg(slides[0].svg, slide_size)], {
      type: "image/svg+xml"
    }));
    try {
      const image = await loadImage(url);
      signal?.throwIfAborted();
      const canvas = document.createElement("canvas");
      canvas.width = canvas_size.width;
      canvas.height = canvas_size.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        releaseCanvas(canvas);
        throw new Error("Canvas is not available");
      }
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(turn * Math.PI / 180);
      ctx.drawImage(image, -slide_size.width / 2, -slide_size.height / 2, slide_size.width, slide_size.height);
      return canvas;
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  /** Nothing to close: no worker or other resource is held open */
  async destroy() {
  }
};
export {
  openPptxDocument
};
//# debugId=fd7dcb6b-4888-5bf4-a415-3a6e115ca576
//# sourceMappingURL=pptx-document-DVOWIO52.js.map
