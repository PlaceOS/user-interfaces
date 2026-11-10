import {
  normalizeRotation,
  releaseCanvas
} from "./chunk-4OXWFALI.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/media/pdf-document.ts
var PDFJS_ASSETS = "assets/pdfjs/";
var PdfOpenError = class extends Error {
  constructor(reason, message) {
    super(message);
    this.reason = reason;
    this.name = "PdfOpenError";
  }
};
function assetUrl(path) {
  return new URL(`${PDFJS_ASSETS}${path}`, document.baseURI).href;
}
var pdfjs_module;
function loadPdfJs() {
  pdfjs_module ??= import("./pdf-WIM26F2V.js").then((pdfjs) => {
    pdfjs.GlobalWorkerOptions.workerSrc = assetUrl("pdf.worker.min.mjs");
    return pdfjs;
  });
  return pdfjs_module;
}
async function openPdfDocument(file) {
  const pdfjs = await loadPdfJs();
  let loading_task;
  let document_proxy;
  try {
    const data = new Uint8Array(await file.arrayBuffer());
    loading_task = pdfjs.getDocument({
      data,
      cMapUrl: assetUrl("cmaps/"),
      cMapPacked: true,
      standardFontDataUrl: assetUrl("standard_fonts/"),
      wasmUrl: assetUrl("wasm/"),
      iccUrl: assetUrl("iccs/")
    });
    document_proxy = await loading_task.promise;
  } catch (error) {
    await loading_task?.destroy().catch(() => void 0);
    const name = error?.name;
    throw new PdfOpenError(name === "PasswordException" ? "password" : "invalid", error?.message || "Could not open PDF");
  }
  if (!document_proxy.numPages) {
    await loading_task.destroy();
    throw new PdfOpenError("invalid", "PDF has no pages");
  }
  return new PdfJsDocument(loading_task, document_proxy);
}
var PdfJsDocument = class {
  constructor(_loading_task, _document) {
    this._loading_task = _loading_task;
    this._document = _document;
  }
  get page_count() {
    return this._document.numPages;
  }
  async pageSize(page_number) {
    const page = await this._document.getPage(page_number);
    const { width, height } = page.getViewport({ scale: 1 });
    return { width, height };
  }
  async renderLayer(page_number, rotation, bounds, signal) {
    signal?.throwIfAborted();
    const page = await this._document.getPage(page_number);
    try {
      return await renderPage(page, rotation, bounds, signal);
    } finally {
      page.cleanup();
    }
  }
  destroy() {
    return this._loading_task.destroy();
  }
};
async function renderPage(page, rotation, bounds, signal) {
  const turn = normalizeRotation(page.rotate + rotation);
  const unscaled = page.getViewport({ scale: 1, rotation: turn });
  const scale = Math.min(bounds.width / unscaled.width, bounds.height / unscaled.height);
  const viewport = page.getViewport({ scale, rotation: turn });
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(viewport.width));
  canvas.height = Math.max(1, Math.round(viewport.height));
  const canvasContext = canvas.getContext("2d");
  if (!canvasContext)
    throw new Error("Canvas is not available");
  const task = page.render({
    canvas,
    // Given only the canvas, pdf.js opens it without an alpha channel,
    // which leaves no way to keep a page transparent
    canvasContext,
    viewport,
    // pdf.js paints white unless told otherwise. The background is
    // applied afterwards, so transparent pages can stay transparent.
    background: "rgba(0,0,0,0)"
  });
  const abort = () => task.cancel();
  signal?.addEventListener("abort", abort, { once: true });
  try {
    await task.promise;
  } catch (error) {
    releaseCanvas(canvas);
    throw error;
  } finally {
    signal?.removeEventListener("abort", abort);
  }
  return canvas;
}
export {
  PdfOpenError,
  openPdfDocument
};
//# debugId=2f37fbe0-754c-5b37-a76a-4852619243cd
//# sourceMappingURL=pdf-document-QMHNBGZZ.js.map
