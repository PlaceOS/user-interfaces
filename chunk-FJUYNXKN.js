import {
  _QRScanner
} from "./chunk-SCRIU3HN.js";
import {
  CheckinStateService
} from "./chunk-CSHKZNPN.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AuthenticatedImageDirective,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  IconComponent,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  TranslatePipe,
  ViewChild,
  VirtualKeyboardComponent,
  computed,
  inject,
  isPublicMode,
  notifyError,
  setClassMetadata,
  settingSignal,
  signal,
  startOfMinute,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-DXDFWD4Z.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts
var _c0 = () => ["/welcome"];
function CheckinErrorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function CheckinErrorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.VISITOR_KIOSK.CONFIRM"), " ");
  }
}
var CheckinErrorComponent = class _CheckinErrorComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this.error = this._checkin.error;
    this.is_public_mode = isPublicMode;
  }
  static {
    this.\u0275fac = function CheckinErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinErrorComponent, selectors: [["checkin-error"]], decls: 7, vars: 2, consts: [[1, "bg-base-100", "relative", "m-4", "flex", "flex-col", "items-center", "space-y-4", "overflow-hidden", "rounded-sm", "px-16", "py-4", "text-center", "shadow-sm"], [1, "pb-2", "text-2xl"], ["btn", "", "matRipple", "", 1, "w-32", 3, "routerLink"]], template: function CheckinErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Please see reception.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, CheckinErrorComponent_Conditional_3_Template, 2, 1, "p");
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Our staff at reception will assist you.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, CheckinErrorComponent_Conditional_6_Template, 3, 5, "a", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_0_0 = ctx.error()) ? 3 : -1, tmp_0_0);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.is_public_mode() ? 6 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinErrorComponent, [{
    type: Component,
    args: [{ selector: "checkin-error", template: `
        <div
            class="bg-base-100 relative m-4 flex flex-col items-center space-y-4 overflow-hidden rounded-sm px-16 py-4 text-center shadow-sm"
        >
            <h3 class="pb-2 text-2xl">Please see reception.</h3>
            @if (error(); as error_message) {
                <p>{{ error_message }}</p>
            }
            <p>Our staff at reception will assist you.</p>
            @if (!is_public_mode()) {
                <a btn matRipple class="w-32" [routerLink]="['/welcome']">
                    {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                </a>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, RouterModule], styles: ["/* angular:styles/component:css;34ad53ca058d4bf3dd80f3650a92e5ea3d6f6a240f4ad5727b63ca6d2e8f6f4b;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts */\n:host > div {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinErrorComponent, { className: "CheckinErrorComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts", lineNumber: 36 });
})();

// node_modules/qr/dom.js
/*!
 * Copyright (c) 2023 Paul Miller (paulmillr.com)
 * SPDX-License-Identifier: MIT OR Apache-2.0
 */
var Y8 = [0, 0, 1];
var UV8 = [1, 1, 1];
var P420 = [Y8, UV8, UV8];
var P420_16 = [
  [0, 0, 2],
  [1, 1, 2],
  [1, 1, 2]
];
var P_RGBA = [[0, 0, 4]];
var PLANES = {
  RGB: [[0, 0, 3]],
  RGBA: P_RGBA,
  RGBX: P_RGBA,
  BGRA: P_RGBA,
  BGRX: P_RGBA,
  I420: P420,
  I420P10: P420_16,
  I420P12: P420_16,
  I420A: [Y8, UV8, UV8, Y8],
  I422: [Y8, [1, 0, 1], [1, 0, 1]],
  I444: [Y8, Y8, Y8],
  NV12: [Y8, [1, 1, 2]]
};
var framePlanes = (format) => PLANES[format];
var getSize = (elm) => {
  const css = getComputedStyle(elm);
  const width = Math.floor(+css.width.split("px")[0]);
  const height = Math.floor(+css.height.split("px")[0]);
  return { width, height };
};
var setCanvasSize = (canvas, height, width) => {
  if (canvas.height !== height)
    canvas.height = height;
  if (canvas.width !== width)
    canvas.width = width;
};
var getCanvasContext = (canvas) => {
  const context = canvas.getContext("2d");
  if (context === null)
    throw new Error("Cannot get canvas context");
  return { canvas, context };
};
var clearCanvas = ({ canvas, context }) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
var traceQuad = (context, points) => {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++)
    context.lineTo(points[i].x, points[i].y);
  context.closePath();
};
var fillQuad = (context, points) => {
  traceQuad(context, points);
  context.fill();
};
var toward = (from, to, distance) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const scale = Math.min(0.5, distance / Math.hypot(dx, dy));
  return { x: from.x + scale * dx, y: from.y + scale * dy };
};
var traceRoundedQuad = (context, points, radius) => {
  const starts = points.map((point, i) => toward(point, points[(i + 1) % 4], radius));
  const ends = points.map((point, i) => toward(point, points[(i + 3) % 4], radius));
  context.beginPath();
  context.moveTo(starts[0].x, starts[0].y);
  for (let i = 1; i <= points.length; i++) {
    const pos = i % 4;
    context.lineTo(ends[pos].x, ends[pos].y);
    context.quadraticCurveTo(points[pos].x, points[pos].y, starts[pos].x, starts[pos].y);
  }
  context.closePath();
};
var OVERLAY_SWITCH_FRAMES = 3;
var sameOverlay = (left, right) => {
  const OVERLAY_MATCH_SIDE = 0.5;
  if (!left)
    return false;
  const a = left.boundingBox;
  const b = right.boundingBox;
  const side = Math.max(a.width, a.height, b.width, b.height);
  const dx = a.x + a.width / 2 - b.x - b.width / 2;
  const dy = a.y + a.height / 2 - b.y - b.height / 2;
  return dx * dx + dy * dy <= (OVERLAY_MATCH_SIDE * side) ** 2;
};
var sameOverlays = (left, right) => {
  if (left.length !== right.length)
    return false;
  for (let i = 0; i < left.length; i++) {
    let match = i;
    while (match < right.length && !sameOverlay(left[i], right[match]))
      match++;
    if (match === right.length)
      return false;
    if (match !== i) {
      const point = right[i];
      right[i] = right[match];
      right[match] = point;
    }
  }
  return true;
};
var copyOverlays = (target, source) => {
  target.length = source.length;
  for (let i = 0; i < source.length; i++)
    target[i] = source[i];
};
var QRCanvas = class {
  opts;
  reader;
  lastDetect = 0;
  scanner;
  pending;
  task;
  cleanPending = false;
  generation = 0;
  bitmapDrawn = false;
  overlayDrawn = false;
  overlayMatches = 0;
  overlayCandidate;
  overlayPoints;
  overlayBatch = [];
  overlayBatchFailed;
  overlaySet = [];
  overlayCandidates = [];
  overlaySetMatches = 0;
  overlayFailed;
  overlayFailedCandidate;
  overlayFailedCandidateSet = false;
  overlayFailedMatches = 0;
  overlayDeadline = 0;
  overlayTimer;
  rotate = false;
  sourceHeight = 0;
  sourceX = 0;
  sourceY = 0;
  inputWidth = 0;
  inputHeight = 0;
  frameSource;
  main;
  overlay;
  resultQR;
  bitmap;
  constructor(elements = {}, opts = {}, _scanner = _QRScanner) {
    const { overlay, resultQR, bitmap } = elements;
    this.opts = __spreadValues({
      resultBlockSize: 8,
      overlayMainColor: "green",
      overlayFinderColor: "blue",
      overlayAlignerColor: "yellow",
      overlaySideColor: "black",
      overlayTimeout: 500,
      cropToSquare: true,
      decodeAll: false,
      async: false,
      drawFailed: false
    }, opts);
    this.main = getCanvasContext(document.createElement("canvas"));
    if (overlay)
      this.overlay = getCanvasContext(overlay);
    if (resultQR) {
      this.resultQR = getCanvasContext(resultQR);
      this.resultQR.context.imageSmoothingEnabled = false;
    }
    if (bitmap)
      this.bitmap = getCanvasContext(bitmap);
    const decoder = {
      maxSize: { width: 3840, height: 3840 },
      stride: 4,
      textDecoder: this.opts.textDecoder
    };
    if (this.opts.effort !== void 0)
      decoder.effort = this.opts.effort;
    if (this.opts.timeLimit !== void 0)
      decoder.timeLimit = this.opts.timeLimit;
    if (this.overlay)
      decoder.pointsOnDetect = (points, result) => {
        if (Date.now() - this.lastDetect > this.opts.overlayTimeout) {
          this.overlayPoints = void 0;
          this.overlayCandidate = void 0;
          this.overlaySet.length = 0;
          this.overlayCandidates.length = 0;
          this.overlaySetMatches = 0;
          this.overlayFailed = void 0;
          this.overlayFailedCandidate = void 0;
          this.overlayFailedCandidateSet = false;
          this.overlayFailedMatches = 0;
          this.overlayMatches = 0;
        }
        if (this.rotate || this.sourceX || this.sourceY) {
          const move = (point) => {
            const x = point.x + this.sourceX;
            const y = point.y + this.sourceY;
            if (this.rotate) {
              point.x = this.sourceHeight - 1 - y;
              point.y = x;
            } else {
              point.x = x;
              point.y = y;
            }
          };
          for (const point of [points.tl, points.tr, points.br, points.bl, ...points.aligners]) {
            move(point);
          }
          for (const marker of [points.tl, points.tr, points.bl, ...points.aligners])
            for (const point of marker.corners)
              move(point);
          for (const point of [...points.bounds, ...points.outline])
            move(point);
          const box = points.boundingBox;
          const xs = points.bounds.map((point) => point.x);
          const ys = points.bounds.map((point) => point.y);
          box.x = Math.min(...xs);
          box.y = Math.min(...ys);
          box.width = Math.max(...xs) - box.x;
          box.height = Math.max(...ys) - box.y;
        }
        if (result instanceof Error && !this.opts.drawFailed)
          return;
        if (this.opts.decodeAll) {
          if (result instanceof Error)
            this.overlayBatchFailed = points;
          else
            this.overlayBatch.push(points);
          return;
        }
        if (!this.overlayPoints || sameOverlay(this.overlayPoints, points)) {
          this.overlayPoints = points;
          this.overlayCandidate = void 0;
          this.overlayMatches = 0;
        } else {
          if (sameOverlay(this.overlayCandidate, points))
            this.overlayMatches++;
          else {
            this.overlayCandidate = points;
            this.overlayMatches = 1;
          }
          if (this.overlayMatches < OVERLAY_SWITCH_FRAMES)
            return;
          this.overlayPoints = points;
          this.overlayCandidate = void 0;
          this.overlayMatches = 0;
        }
        this.drawOverlay(points, this.overlayDrawn, result instanceof Error);
        this.overlayDrawn = true;
        const now = Date.now();
        this.lastDetect = now;
        this.overlayDeadline = now + this.opts.overlayTimeout;
      };
    if (this.resultQR)
      decoder.imageOnResult = (img) => this.drawResultQr(img);
    if (this.bitmap)
      decoder.imageOnBitmap = (img) => {
        if (this.bitmapDrawn)
          return;
        this.bitmapDrawn = true;
        this.drawBitmap(img);
      };
    this.scanner = new _scanner(decoder);
    this.reader = {
      clean: () => {
        this.generation++;
        this.task?.abort();
        this.task = void 0;
        if (this.pending)
          this.cleanPending = true;
        else
          this.scanner.clean();
      },
      crop: this.opts.cropToSquare,
      luma: this.scanner.luma,
      frame: this.opts.onVideoFrame,
      source: (source) => {
        if (source === this.frameSource)
          return;
        this.frameSource = source;
        if (this.opts.onFrameSource)
          this.opts.onFrameSource(source);
      },
      read: (frame) => {
        this.rotate = frame.rotate;
        this.sourceHeight = frame.sourceHeight;
        this.sourceX = frame.sourceX;
        this.sourceY = frame.sourceY;
        this.inputWidth = frame.size.width;
        this.inputHeight = frame.size.height;
        if (this.overlay)
          setCanvasSize(this.overlay.canvas, frame.height, frame.width);
        return this.decode(void 0, frame.format, frame.layout, frame.size);
      }
    };
  }
  drawOverlayBatch() {
    if (!this.overlayBatch.length && !this.overlayBatchFailed)
      return;
    let redraw = false;
    if (!this.overlaySet.length && this.overlayBatch.length || sameOverlays(this.overlaySet, this.overlayBatch)) {
      copyOverlays(this.overlaySet, this.overlayBatch);
      this.overlayCandidates.length = 0;
      this.overlaySetMatches = 0;
      redraw = !!this.overlaySet.length;
    } else {
      if (sameOverlays(this.overlayCandidates, this.overlayBatch))
        this.overlaySetMatches++;
      else {
        copyOverlays(this.overlayCandidates, this.overlayBatch);
        this.overlaySetMatches = 1;
      }
      if (this.overlaySetMatches === OVERLAY_SWITCH_FRAMES) {
        copyOverlays(this.overlaySet, this.overlayBatch);
        this.overlayCandidates.length = 0;
        this.overlaySetMatches = 0;
        redraw = true;
      }
    }
    const failed = this.overlayBatchFailed;
    if (!this.overlayFailed && failed) {
      this.overlayFailed = failed;
      this.overlayFailedCandidateSet = false;
      this.overlayFailedMatches = 0;
      redraw = true;
    } else if (this.overlayFailed && failed && sameOverlay(this.overlayFailed, failed)) {
      this.overlayFailed = failed;
      this.overlayFailedCandidateSet = false;
      this.overlayFailedMatches = 0;
      redraw = true;
    } else if (this.overlayFailed || failed) {
      if (this.overlayFailedCandidateSet && (!this.overlayFailedCandidate && !failed || !!this.overlayFailedCandidate && !!failed && sameOverlay(this.overlayFailedCandidate, failed)))
        this.overlayFailedMatches++;
      else {
        this.overlayFailedCandidate = failed;
        this.overlayFailedCandidateSet = true;
        this.overlayFailedMatches = 1;
      }
      if (this.overlayFailedMatches === OVERLAY_SWITCH_FRAMES) {
        this.overlayFailed = failed;
        this.overlayFailedCandidate = void 0;
        this.overlayFailedCandidateSet = false;
        this.overlayFailedMatches = 0;
        redraw = true;
      }
    }
    if (!redraw)
      return;
    this.overlayDrawn = false;
    for (let i = 0; i < this.overlaySet.length; i++) {
      this.drawOverlay(this.overlaySet[i], this.overlayDrawn, false);
      this.overlayDrawn = true;
    }
    if (this.overlayFailed) {
      this.drawOverlay(this.overlayFailed, this.overlayDrawn, true);
      this.overlayDrawn = true;
    }
    const now = Date.now();
    this.lastDetect = now;
    this.overlayDeadline = now + this.opts.overlayTimeout;
  }
  expireOverlay() {
    const remaining = this.overlayDeadline - Date.now();
    if (remaining > 0) {
      this.overlayTimer = setTimeout(() => this.expireOverlay(), remaining);
      return;
    }
    this.overlayTimer = void 0;
    this.overlayDeadline = 0;
    this.overlayDrawn = false;
    this.overlayMatches = 0;
    this.overlayCandidate = void 0;
    this.overlayPoints = void 0;
    this.overlaySet.length = 0;
    this.overlayCandidates.length = 0;
    this.overlaySetMatches = 0;
    this.overlayFailed = void 0;
    this.overlayFailedCandidate = void 0;
    this.overlayFailedCandidateSet = false;
    this.overlayFailedMatches = 0;
    this.drawOverlay();
  }
  drawBitmap({ data, height, width }) {
    if (!this.bitmap)
      return;
    let out;
    if (this.rotate) {
      out = new Uint8ClampedArray(data.length);
      for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
          const src = 4 * (y * width + x);
          const dst = 4 * (x * height + height - 1 - y);
          out[dst] = data[src];
          out[dst + 1] = data[src + 1];
          out[dst + 2] = data[src + 2];
          out[dst + 3] = data[src + 3];
        }
      const size = width;
      width = height;
      height = size;
    } else
      out = Uint8ClampedArray.from(data);
    setCanvasSize(this.bitmap.canvas, height, width);
    const imgData = new ImageData(out, width, height);
    this.bitmap.context.putImageData(imgData, 0, 0);
  }
  drawResultQr({ data, height, width }) {
    if (!this.resultQR)
      return;
    const blockSize = this.opts.resultBlockSize;
    setCanvasSize(this.resultQR.canvas, height, width);
    const imgData = new ImageData(Uint8ClampedArray.from(data), width, height);
    this.resultQR.context.putImageData(imgData, 0, 0);
    this.resultQR.canvas.style = `image-rendering: pixelated; width: ${blockSize * width}px; height: ${blockSize * height}px`;
  }
  drawOverlay(points, append = false, failed = false) {
    if (!this.overlay)
      return;
    const ctx = this.overlay.context;
    const height = this.overlay.canvas.height;
    const width = this.overlay.canvas.width;
    if (!append) {
      if (this.opts.cropToSquare && height !== width) {
        let cropWidth = this.inputWidth || Math.min(height, width);
        let cropHeight = this.inputHeight || Math.min(height, width);
        let x = this.inputWidth ? this.sourceX : Math.floor((width - cropWidth) / 2);
        let y = this.inputHeight ? this.sourceY : Math.floor((height - cropHeight) / 2);
        if (this.rotate && this.inputWidth) {
          const nextX = this.sourceHeight - y - cropHeight;
          const nextY = x;
          const nextWidth = cropHeight;
          cropHeight = cropWidth;
          x = nextX;
          y = nextY;
          cropWidth = nextWidth;
        }
        ctx.clearRect(x, y, cropWidth, cropHeight);
        ctx.fillStyle = this.opts.overlaySideColor;
        const right = x + cropWidth;
        const bottom = y + cropHeight;
        if (y)
          ctx.fillRect(0, 0, width, y);
        if (bottom < height)
          ctx.fillRect(0, bottom, width, height - bottom);
        if (x)
          ctx.fillRect(0, y, x, cropHeight);
        if (right < width)
          ctx.fillRect(right, y, width - right, cropHeight);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }
    if (points) {
      const { tl, tr, br, bl } = points;
      ctx.fillStyle = failed ? "red" : this.opts.overlayMainColor;
      fillQuad(ctx, [tl, tr, br, bl]);
      const moduleSize = (tl.moduleSize + tr.moduleSize + bl.moduleSize) / 3;
      ctx.strokeStyle = this.opts.overlayAlignerColor;
      ctx.lineWidth = moduleSize / 2;
      traceRoundedQuad(ctx, points.outline, 9);
      ctx.stroke();
      ctx.fillStyle = this.opts.overlayFinderColor;
      for (const finder of [tl, tr, bl])
        fillQuad(ctx, finder.corners);
      ctx.fillStyle = this.opts.overlayAlignerColor;
      for (const aligner of points.aligners)
        fillQuad(ctx, aligner.corners);
    }
  }
  finish(res) {
    let failures;
    if (res && this.opts.decodeAll) {
      failures = res;
      for (const result of res)
        if (typeof result === "string")
          return res;
    } else if (res && typeof res[0] === "string")
      return res[0];
    if (this.overlay && Date.now() - this.lastDetect > this.opts.overlayTimeout)
      this.drawOverlay();
    return failures;
  }
  endDecode() {
    if (this.opts.decodeAll)
      this.drawOverlayBatch();
    if (this.overlayDeadline && this.overlayTimer === void 0)
      this.overlayTimer = setTimeout(() => this.expireOverlay(), this.opts.overlayTimeout);
  }
  decode(image, format, layout, size) {
    if (this.pending)
      return;
    this.bitmapDrawn = false;
    this.overlayDrawn = false;
    this.overlayBatch.length = 0;
    this.overlayBatchFailed = void 0;
    try {
      if (image)
        this.scanner.addImage(image, format);
      else if (size && format && layout)
        this.scanner.processImage(size, format, layout);
      else
        throw new Error("expected image or scanner-owned frame");
    } catch {
      this.endDecode();
      return this.finish();
    }
    if (!this.opts.async) {
      let res;
      try {
        res = this.scanner.decode(this.opts.decodeAll);
      } catch {
      } finally {
        this.endDecode();
      }
      return this.finish(res);
    }
    const decode = this.scanner.decodeAsync;
    if (!decode) {
      this.endDecode();
      return this.finish();
    }
    const generation = this.generation;
    const host = globalThis;
    const task = typeof host.TaskController === "function" && typeof host.scheduler?.postTask === "function" ? new host.TaskController() : void 0;
    this.task = task;
    const work = task ? host.scheduler.postTask(() => decode.call(this.scanner, this.opts.decodeAll), {
      signal: task.signal
    }) : decode.call(this.scanner, this.opts.decodeAll);
    const pending = work.then((res) => {
      if (generation !== this.generation)
        return;
      this.endDecode();
      return this.finish(res);
    }, () => {
      if (generation !== this.generation)
        return;
      this.endDecode();
      return this.finish();
    }).finally(() => {
      if (this.pending === pending)
        this.pending = void 0;
      if (this.task === task)
        this.task = void 0;
      if (this.cleanPending) {
        this.cleanPending = false;
        this.scanner.clean();
      }
    });
    this.pending = pending;
    return pending;
  }
  drawImage(image, height, width) {
    this.rotate = false;
    this.sourceHeight = height;
    const side = Math.min(width, height);
    const cropped = this.opts.cropToSquare && width !== height;
    const inputWidth = cropped ? side : width;
    const inputHeight = cropped ? side : height;
    this.sourceX = cropped ? width - side >> 1 : 0;
    this.sourceY = cropped ? height - side >> 1 : 0;
    this.inputWidth = inputWidth;
    this.inputHeight = inputHeight;
    setCanvasSize(this.main.canvas, inputHeight, inputWidth);
    if (this.overlay)
      setCanvasSize(this.overlay.canvas, height, width);
    const { context } = this.main;
    context.drawImage(image, -this.sourceX, -this.sourceY, width, height);
    const data = context.getImageData(0, 0, inputWidth, inputHeight);
    return this.decode(data);
  }
  clear() {
    this.reader.clean();
    this.sourceX = this.sourceY = 0;
    this.inputWidth = this.inputHeight = 0;
    if (this.overlayTimer !== void 0)
      clearTimeout(this.overlayTimer);
    this.overlayTimer = void 0;
    this.overlayDeadline = 0;
    this.overlayDrawn = false;
    this.overlayMatches = 0;
    this.overlayCandidate = void 0;
    this.overlayPoints = void 0;
    this.overlayBatch.length = 0;
    this.overlayBatchFailed = void 0;
    this.overlaySet.length = 0;
    this.overlayCandidates.length = 0;
    this.overlaySetMatches = 0;
    this.overlayFailed = void 0;
    this.overlayFailedCandidate = void 0;
    this.overlayFailedCandidateSet = false;
    this.overlayFailedMatches = 0;
    clearCanvas(this.main);
    if (this.overlay)
      clearCanvas(this.overlay);
    if (this.resultQR)
      clearCanvas(this.resultQR);
    if (this.bitmap)
      clearCanvas(this.bitmap);
  }
};
var QRCamera = class {
  stream;
  player;
  opts;
  reader;
  planes = [
    { offset: 0, stride: 0 },
    { offset: 0, stride: 0 },
    { offset: 0, stride: 0 },
    { offset: 0, stride: 0 }
  ];
  layouts = [
    [this.planes[0]],
    [this.planes[0], this.planes[1]],
    [this.planes[0], this.planes[1], this.planes[2]],
    [this.planes[0], this.planes[1], this.planes[2], this.planes[3]]
  ];
  rect = { x: 0, y: 0, width: 0, height: 0 };
  nativeCopy = { rect: this.rect };
  convertedCopy = { format: "RGBA", rect: this.rect };
  scanned = {
    format: "I420",
    layout: { offset: 0, stride: 0 },
    rotate: false,
    size: { width: 0, height: 0 },
    sourceHeight: 0,
    sourceX: 0,
    sourceY: 0,
    width: 0,
    height: 0
  };
  videoFrame;
  nativeOnly = false;
  reported = false;
  reading = false;
  source = 0;
  constructor(player, streamOrOpts = {}, init = {}) {
    this.player = player;
    const stream = "getTracks" in streamOrOpts ? streamOrOpts : void 0;
    const opts = stream ? init : streamOrOpts;
    this.opts = __spreadValues({ format: "auto" }, opts);
    this.validateFormat(this.opts.format);
    if (stream)
      this.setStream(stream);
  }
  validateFormat(format) {
    if (format === "auto" || format === "canvas")
      return;
    if (format !== "RGB" && framePlanes(format))
      return;
    throw new TypeError(`invalid opts.format=${format} (${typeof format})`);
  }
  /** Select native auto-detection, forced canvas, or one VideoFrame output format. */
  setFormat(format) {
    this.validateFormat(format);
    if (format === this.opts.format)
      return;
    this.opts.format = format;
    this.source++;
    this.videoFrame = void 0;
    this.nativeOnly = false;
    this.reported = false;
    this.resetFrame();
  }
  resetFrame() {
    this.scanned.layout.offset = 0;
    this.scanned.layout.stride = 0;
    this.scanned.rotate = false;
    this.scanned.size.width = 0;
    this.scanned.size.height = 0;
    this.scanned.sourceHeight = 0;
    this.scanned.sourceX = 0;
    this.scanned.sourceY = 0;
    this.scanned.width = 0;
    this.scanned.height = 0;
  }
  cleanFrame() {
    if (this.reader)
      this.reader.clean();
    this.reader = void 0;
    this.resetFrame();
  }
  setLayout(copy, format, width, height) {
    const planes = framePlanes(format);
    if (!planes)
      throw new Error(`Unsupported VideoFrame format=${format}`);
    let offset = 0;
    for (let i = 0; i < planes.length; i++) {
      const [xShift, yShift, bytes] = planes[i];
      const planeWidth = width + (1 << xShift) - 1 >> xShift;
      const planeHeight = height + (1 << yShift) - 1 >> yShift;
      const plane = this.planes[i];
      plane.offset = offset;
      plane.stride = planeWidth * bytes;
      offset += plane.stride * planeHeight;
    }
    copy.layout = this.layouts[planes.length - 1];
    return offset;
  }
  async scan(frame, reader, rotate) {
    const visible = frame.visibleRect;
    const width = visible?.width || frame.displayWidth;
    const height = visible?.height || frame.displayHeight;
    if (!Number.isSafeInteger(width) || !Number.isSafeInteger(height) || width <= 0 || height <= 0 || width !== frame.displayWidth || height !== frame.displayHeight)
      throw new Error("Unsupported VideoFrame dimensions");
    const selected = this.opts.format === "auto" || this.nativeOnly ? frame.format : this.opts.format;
    if (!selected || selected === "canvas")
      throw new Error(`Unsupported VideoFrame format=${selected}`);
    const planes = framePlanes(selected);
    if (!planes)
      throw new Error(`Unsupported VideoFrame format=${selected}`);
    let sourceWidth = width;
    let sourceHeight = height;
    let sourceX = 0;
    let sourceY = 0;
    if (reader.crop && width !== height) {
      let side = Math.min(width, height);
      let xShift = 0;
      let yShift = 0;
      for (const plane of planes) {
        xShift = Math.max(xShift, plane[0]);
        yShift = Math.max(yShift, plane[1]);
      }
      side -= side % (1 << Math.max(xShift, yShift));
      sourceWidth = sourceHeight = side;
      sourceX = width - side >> 1;
      sourceY = height - side >> 1;
      const alignX = 1 << xShift;
      const alignY = 1 << yShift;
      sourceX -= sourceX % alignX;
      sourceY -= sourceY % alignY;
    }
    this.rect.x = (visible?.x || 0) + sourceX;
    this.rect.y = (visible?.y || 0) + sourceY;
    this.rect.width = sourceWidth;
    this.rect.height = sourceHeight;
    const copy = selected === frame.format ? this.nativeCopy : this.convertedCopy;
    if (copy === this.convertedCopy)
      copy.format = selected;
    const required = this.setLayout(copy, selected, sourceWidth, sourceHeight);
    const size = frame.allocationSize(copy);
    if (!Number.isSafeInteger(size) || size < required || size > reader.luma.length)
      throw new Error(`Invalid VideoFrame allocation size=${size}, expected ${required}..${reader.luma.length}`);
    const [layout] = await frame.copyTo(reader.luma, copy);
    if (!layout)
      throw new Error("Missing VideoFrame plane layout");
    const presentWidth = rotate ? height : width;
    const presentHeight = rotate ? width : height;
    const scanned = this.scanned;
    scanned.format = selected;
    scanned.layout.offset = layout.offset;
    scanned.layout.stride = layout.stride;
    scanned.rotate = rotate;
    scanned.size.width = sourceWidth;
    scanned.size.height = sourceHeight;
    scanned.sourceHeight = height;
    scanned.sourceX = sourceX;
    scanned.sourceY = sourceY;
    scanned.width = presentWidth;
    scanned.height = presentHeight;
    return scanned;
  }
  setStream(stream) {
    this.stream = stream;
    this.source++;
    this.videoFrame = void 0;
    this.nativeOnly = false;
    this.reported = false;
    this.cleanFrame();
    const { player } = this;
    player.setAttribute("autoplay", "");
    player.setAttribute("muted", "");
    player.setAttribute("playsinline", "");
    player.srcObject = stream;
  }
  /**
   * Returns list of cameras
   * NOTE: available only after first getUserMedia request, so cannot be additional method
   */
  async listDevices() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
      throw new Error("Media Devices not supported");
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === "videoinput").map((i) => ({
      deviceId: i.deviceId,
      label: i.label || `Camera ${i.deviceId}`
    }));
  }
  /**
   * Change stream to different camera
   * @param deviceId - devideId from '.listDevices'
   */
  async setDevice(deviceId) {
    this.stop();
    const source = this.source;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: deviceId } }
    });
    if (source !== this.source) {
      for (const track of stream.getTracks())
        track.stop();
      return;
    }
    this.setStream(stream);
  }
  draw(canvas, fullSize) {
    const { player } = this;
    if (player.readyState < 2 || !player.videoWidth || !player.videoHeight)
      return;
    canvas["reader"].source("canvas");
    if (fullSize)
      return canvas.drawImage(player, player.videoHeight, player.videoWidth);
    const size = getSize(player);
    return canvas.drawImage(player, size.height, size.width);
  }
  async readFrame(canvas, fullSize = false) {
    const reader = canvas["reader"];
    this.reader = reader;
    if (!fullSize || this.opts.format === "canvas" || this.videoFrame === false)
      return this.draw(canvas, fullSize);
    if (typeof VideoFrame !== "function") {
      this.videoFrame = false;
      return this.draw(canvas, fullSize);
    }
    if (this.reading)
      return;
    this.reading = true;
    const source = this.source;
    let frame;
    try {
      frame = new VideoFrame(this.player);
    } catch {
      this.videoFrame = false;
      this.reading = false;
      return this.draw(canvas, fullSize);
    }
    try {
      if (!this.reported && reader.frame) {
        this.reported = true;
        reader.frame(frame);
      }
      const presented = frame;
      const { videoWidth, videoHeight } = this.player;
      const aligned = frame.displayWidth === videoWidth && frame.displayHeight === videoHeight;
      const rotate = frame.displayWidth === videoHeight && frame.displayHeight === videoWidth;
      if (videoWidth > 0 && videoHeight > 0 && !aligned && !rotate || presented.rotation || presented.flip)
        return this.draw(canvas, fullSize);
      let scanned;
      try {
        scanned = await this.scan(frame, reader, rotate);
      } catch (error) {
        const converted = !this.nativeOnly && this.opts.format !== "auto" && this.opts.format !== frame.format;
        if (!converted)
          throw error;
        this.nativeOnly = true;
        this.resetFrame();
        scanned = await this.scan(frame, reader, rotate);
      }
      if (source !== this.source) {
        this.resetFrame();
        return;
      }
      if (this.player.videoWidth !== videoWidth || this.player.videoHeight !== videoHeight)
        return;
      this.videoFrame = true;
      reader.source("VideoFrame");
      return reader.read(scanned);
    } catch {
      this.resetFrame();
      if (source !== this.source)
        return;
      this.videoFrame = false;
      return this.draw(canvas, fullSize);
    } finally {
      frame.close();
      this.reading = false;
    }
  }
  stop() {
    this.source++;
    this.videoFrame = void 0;
    this.nativeOnly = false;
    this.reported = false;
    this.cleanFrame();
    if (this.stream)
      for (const track of this.stream.getTracks())
        track.stop();
    this.stream = void 0;
  }
};
async function openCamera(player, facingMode, opts = {}) {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      // Ask for screen resolution
      height: { ideal: window.screen.height },
      width: { ideal: window.screen.width },
      facingMode
    }
  });
  return new QRCamera(player, stream, opts);
}
async function rearCamera(player, opts = {}) {
  return openCamera(player, "environment", opts);
}
function frameLoop(cb, video) {
  const useVideo = !!video && typeof video.requestVideoFrameCallback === "function" && typeof video.cancelVideoFrameCallback === "function";
  const request = () => useVideo ? video.requestVideoFrameCallback(loop) : requestAnimationFrame(loop);
  const cancel = (id) => useVideo ? video.cancelVideoFrameCallback(id) : cancelAnimationFrame(id);
  let active = true;
  let handle = void 0;
  function loop(ts) {
    cb(ts);
    if (active)
      handle = request();
  }
  handle = request();
  return () => {
    if (!active)
      return;
    active = false;
    if (handle !== void 0)
      cancel(handle);
    handle = void 0;
  };
}

// apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts
var _c02 = ["video"];
var _c1 = ["centerScanCanvas"];
var _c2 = () => ["/welcome"];
function CheckinQRScanComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "span", 19)(2, "span", 20)(3, "span", 21)(4, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275element(6, "span", 24);
    \u0275\u0275text(7, " Ready to scan QR code ");
    \u0275\u0275elementEnd();
  }
}
var SCAN_INTERVAL_MS = 100;
var CENTER_SCAN_INTERVAL_MS = 200;
var CENTER_SCAN_RATIO = 2 / 3;
var MAX_CENTER_SCAN_DIMENSION = 1080;
var CheckinQRScanComponent = class _CheckinQRScanComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.flow = this._route.snapshot.data["flow"] === "checkout" ? "checkout" : "checkin";
    this.checking_code = signal(
      false,
      ...ngDevMode ? [{ debugName: "checking_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scanner_ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "scanner_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.email = signal(
      "",
      ...ngDevMode ? [{ debugName: "email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_enabled = settingSignal("induction_enabled", false);
    this.induction_details = settingSignal("induction_details");
    this.is_induction_enabled = computed(
      () => this.induction_enabled() && this.induction_details(),
      ...ngDevMode ? [{ debugName: "is_induction_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_after_details = settingSignal("induction_after_details");
    this._video_el = viewChild(
      "video",
      ...ngDevMode ? [{ debugName: "_video_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._center_scan_canvas = viewChild(
      "centerScanCanvas",
      ...ngDevMode ? [{ debugName: "_center_scan_canvas" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._camera = null;
    this._decoder = null;
    this._center_decoder = null;
    this._center_scan_context = null;
    this._cancel_scan_loop = null;
    this._scan_pending = false;
    this._last_scan_time = -SCAN_INTERVAL_MS;
    this._last_center_scan_time = -CENTER_SCAN_INTERVAL_MS;
    this._destroyed = false;
  }
  ngAfterViewInit() {
    this._checkin.metadata = "";
    void this.setupQRReader();
  }
  ngOnDestroy() {
    this._destroyed = true;
    this.stopQRReader();
    this._camera?.stop();
    this._camera = null;
    this._decoder?.clear();
    this._decoder = null;
    this._center_decoder?.clear();
    this._center_decoder = null;
    this._center_scan_context = null;
    const video_el = this._video_el()?.nativeElement;
    if (video_el)
      video_el.srcObject = null;
  }
  async checkQRCode(raw_text) {
    if (this.checking_code())
      return;
    this.stopQRReader();
    this.checking_code.set(true);
    const chunks = raw_text.split(",");
    let [visit_block, system_id, event_id, host_email] = chunks;
    const [_, visitor_email] = visit_block.split(":");
    if (!visitor_email && !event_id) {
      notifyError("Invalid QRCode");
      void this.setupQRReader();
      this.checking_code.set(false);
      return;
    }
    if (!/^\d+$/.test(event_id))
      event_id = void 0;
    await this._checkin.loadGuestAndEvent(visitor_email, event_id).catch((err) => {
      this.handleError(err.message || err);
      this.checking_code.set(false);
      throw err;
    });
    const event = this._checkin.event();
    if (!event) {
      this.handleError("Unable to find visitor booking.");
      this.checking_code.set(false);
      return;
    }
    if (event.rejected) {
      this.handleError("Your meeting has been rejected.");
      this.checking_code.set(false);
      return;
    }
    if (event.checked_out_at) {
      this.handleError("Your meeting has already finished.");
      this.checking_code.set(false);
      return;
    }
    if (this.flow === "checkout") {
      if (!event.checked_in_at) {
        this.handleError("You have not checked in yet.");
        this.checking_code.set(false);
        return;
      }
      this._router.navigate(["/checkout", "confirm"]);
      return;
    }
    if (event.checked_in_at) {
      this.handleError("You are already checked in.");
      this.checking_code.set(false);
      return;
    }
    if (this.is_induction_enabled() && event?.induction !== "accepted") {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
    this.checking_code.set(false);
  }
  async checkEmail(email) {
    if (this.checking_code() || !email || !email.includes("@") || email.length < 5)
      return;
    this.checking_code.set(true);
    try {
      await this._checkin.loadGuestAndEvent(email);
    } catch {
      this.handleError("Unable to find visitor or a meeting associated with the given email address.");
      this.checking_code.set(false);
      return;
    }
    const event = this._checkin.event();
    if (!event) {
      this.handleError("Unable to find visitor booking.");
      this.checking_code.set(false);
      return;
    }
    if (event.checked_out_at) {
      this.handleError("Your meeting has already finished.");
      this.checking_code.set(false);
      return;
    }
    if (this.flow === "checkout") {
      if (!event.checked_in_at) {
        this.handleError("You have not checked in yet.");
        this.checking_code.set(false);
        return;
      }
      this.checking_code.set(false);
      this._router.navigate(["/checkout", "confirm"]);
      return;
    }
    if (event.checked_in_at) {
      this.handleError("You are already checked in.");
      this.checking_code.set(false);
      return;
    }
    if (event.induction !== "accepted" && this.is_induction_enabled() && !this.induction_after_details()) {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
    this.checking_code.set(false);
  }
  async setupQRReader() {
    const _video_el = this._video_el()?.nativeElement;
    if (!_video_el || this._destroyed)
      return;
    if (this._camera && this._decoder && this._center_decoder) {
      this.startQRScanner(_video_el);
      return;
    }
    this.scanner_ready.set(false);
    let camera = null;
    let decoder = null;
    let center_decoder = null;
    try {
      const decoder_options = {
        async: true,
        cropToSquare: false
      };
      decoder = new QRCanvas({}, decoder_options);
      center_decoder = new QRCanvas({}, decoder_options);
      camera = await rearCamera(_video_el);
      if (this._destroyed) {
        camera.stop();
        decoder.clear();
        center_decoder.clear();
        return;
      }
      this._camera = camera;
      this._decoder = decoder;
      this._center_decoder = center_decoder;
      const set_ready = () => this.scanner_ready.set(true);
      if (_video_el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        set_ready();
      } else {
        _video_el.addEventListener("loadeddata", set_ready, {
          once: true
        });
      }
      this.startQRScanner(_video_el);
    } catch (error) {
      camera?.stop();
      decoder?.clear();
      center_decoder?.clear();
      this.scanner_ready.set(false);
      console.error("Unable to start QR scanner.", error);
    }
  }
  stopQRReader() {
    this._cancel_scan_loop?.();
    this._cancel_scan_loop = null;
  }
  startQRScanner(video_el) {
    this.stopQRReader();
    const camera = this._camera;
    const decoder = this._decoder;
    if (!camera || !decoder || !this._center_decoder || this._destroyed)
      return;
    this._last_scan_time = -SCAN_INTERVAL_MS;
    this._last_center_scan_time = -CENTER_SCAN_INTERVAL_MS;
    this._cancel_scan_loop = frameLoop((timestamp) => {
      if (this._scan_pending || this.checking_code() || timestamp - this._last_scan_time < SCAN_INTERVAL_MS)
        return;
      this._last_scan_time = timestamp;
      this._scan_pending = true;
      void this.scanVideoFrame(camera, decoder, video_el, timestamp).catch(() => void 0).finally(() => this._scan_pending = false);
    }, video_el);
  }
  async scanVideoFrame(camera, decoder, video_el, timestamp) {
    let qr_code = await camera.readFrame(decoder, true);
    if (typeof qr_code !== "string" && timestamp - this._last_center_scan_time >= CENTER_SCAN_INTERVAL_MS) {
      this._last_center_scan_time = timestamp;
      qr_code = await this.scanCenteredFrame(video_el);
    }
    if (typeof qr_code === "string" && qr_code && camera === this._camera && !this._destroyed) {
      await this.checkQRCode(qr_code);
    }
  }
  async scanCenteredFrame(video_el) {
    const canvas = this._center_scan_canvas()?.nativeElement;
    const decoder = this._center_decoder;
    const frame_size = Math.min(video_el.videoWidth, video_el.videoHeight);
    if (!canvas || !decoder || frame_size <= 0)
      return;
    const source_size = Math.max(1, Math.floor(frame_size * CENTER_SCAN_RATIO));
    const target_size = Math.min(MAX_CENTER_SCAN_DIMENSION, frame_size);
    if (canvas.width !== target_size || canvas.height !== target_size) {
      canvas.width = target_size;
      canvas.height = target_size;
    }
    this._center_scan_context ??= canvas.getContext("2d", {
      alpha: false
    });
    if (!this._center_scan_context)
      return;
    this._center_scan_context.imageSmoothingEnabled = true;
    this._center_scan_context.imageSmoothingQuality = "high";
    const source_x = Math.floor((video_el.videoWidth - source_size) / 2);
    const source_y = Math.floor((video_el.videoHeight - source_size) / 2);
    this._center_scan_context.drawImage(video_el, source_x, source_y, source_size, source_size, 0, 0, target_size, target_size);
    const qr_code = await decoder.drawImage(canvas, target_size, target_size);
    return typeof qr_code === "string" ? qr_code : void 0;
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate([`/${this.flow}`, "error"]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckinQRScanComponent_BaseFactory;
      return function CheckinQRScanComponent_Factory(__ngFactoryType__) {
        return (\u0275CheckinQRScanComponent_BaseFactory || (\u0275CheckinQRScanComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinQRScanComponent)))(__ngFactoryType__ || _CheckinQRScanComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinQRScanComponent, selectors: [["", "checkin-qr-scan", ""]], viewQuery: function CheckinQRScanComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._video_el, _c02, 5)(ctx._center_scan_canvas, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 36, vars: 26, consts: [["video", ""], ["centerScanCanvas", ""], [1, "bg-base-100", "relative", "flex", "w-xl", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "mt-2", "text-xl"], [1, "my-4"], [1, "flex", "w-full", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-px", "flex-1"], ["keyboard", "", "matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModelChange", "blur", "keyup.enter", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "mt-4", "overflow-hidden", "rounded-sm", "border"], [1, "absolute", "top-1/2", "left-1/2", "z-0", "flex", "-translate-x-1/2", "-translate-y-1/2", "flex-col", "items-center", "space-y-2", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "relative", "z-10", "object-cover"], ["hidden", ""], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "bg-base-100", "relative", "flex", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-16", "shadow-sm"], ["diameter", "32"], ["aria-hidden", "true", 1, "qr-guide", "pointer-events-none", "absolute", "top-1/2", "left-1/2", "z-20", "aspect-square", "h-2/3", "-translate-x-1/2", "-translate-y-1/2", "rounded-xl"], [1, "absolute", "top-0", "left-0", "h-10", "w-10", "rounded-tl-xl", "border-t-4", "border-l-4", "border-white"], [1, "absolute", "top-0", "right-0", "h-10", "w-10", "rounded-tr-xl", "border-t-4", "border-r-4", "border-white"], [1, "absolute", "bottom-0", "left-0", "h-10", "w-10", "rounded-bl-xl", "border-b-4", "border-l-4", "border-white"], [1, "absolute", "right-0", "bottom-0", "h-10", "w-10", "rounded-br-xl", "border-r-4", "border-b-4", "border-white"], [1, "bg-base-100/90", "text-base-content", "absolute", "right-2", "bottom-2", "z-20", "inline-flex", "items-center", "gap-2", "rounded", "px-2", "py-1", "text-sm", "shadow"], [1, "status-dot"]], template: function CheckinQRScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "mat-form-field", 6)(9, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("blur", function CheckinQRScanComponent_Template_input_blur_9_listener() {
          return ctx.checkEmail(ctx.email());
        })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_9_listener() {
          return ctx.checkEmail(ctx.email());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(10, "mat-error");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function CheckinQRScanComponent_Template_button_click_13_listener() {
          return ctx.checkEmail(ctx.email());
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "icon", 11);
        \u0275\u0275text(19, "videocam_off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 12);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "video", 13, 0)(25, "canvas", 14, 1);
        \u0275\u0275conditionalCreate(27, CheckinQRScanComponent_Conditional_27_Template, 8, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 15)(29, "icon");
        \u0275\u0275text(30, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 16);
        \u0275\u0275element(32, "mat-spinner", 17);
        \u0275\u0275elementStart(33, "p", 4);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("hidden", ctx.checking_code());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, ctx.flow === "checkout" ? "COMMON.CHECK_OUT" : "COMMON.CHECK_IN"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "APP.VISITOR_KIOSK.QR_CODE_MSG"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "APP.VISITOR_KIOSK.INVALID_EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 19, "APP.VISITOR_KIOSK.FIND_DETAILS"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 21, "APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.scanner_ready() && !ctx.checking_code() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("hidden", !ctx.checking_code());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 23, "APP.VISITOR_KIOSK.LOADING_DETAILS"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      VirtualKeyboardComponent,
      TranslatePipe
    ], styles: ["\nvideo[_ngcontent-%COMP%] {\n  width: 34rem;\n  height: 24rem;\n}\n.status-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n  border-radius: 9999px;\n  width: 0.5rem;\n  height: 0.5rem;\n  display: inline-block;\n}\n.qr-guide[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 100vmax rgb(0 0 0 / 0.14);\n}\na[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinQRScanComponent, [{
    type: Component,
    args: [{ selector: "[checkin-qr-scan]", template: `
        <div
            class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            [class.hidden]="checking_code()"
        >
            <h3 class="mt-2 text-xl">
                {{
                    (flow === 'checkout'
                        ? 'COMMON.CHECK_OUT'
                        : 'COMMON.CHECK_IN'
                    ) | translate
                }}
            </h3>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.QR_CODE_MSG' | translate }}
            </p>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-px flex-1"
                >
                    <input
                        keyboard
                        matInput
                        [(ngModel)]="email"
                        placeholder="Enter email..."
                        type="email"
                        autocomplete="off"
                        (blur)="checkEmail(email())"
                        (keyup.enter)="checkEmail(email())"
                    />
                    <mat-error>{{
                        'APP.VISITOR_KIOSK.INVALID_EMAIL' | translate
                    }}</mat-error>
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email())">
                    {{ 'APP.VISITOR_KIOSK.FIND_DETAILS' | translate }}
                </button>
            </div>
            <div
                class="border-base-200 bg-base-200 relative mt-4 overflow-hidden rounded-sm border"
            >
                <div
                    class="absolute top-1/2 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2 opacity-30"
                >
                    <icon class="text-6xl">videocam_off</icon>
                    <p class="text-center">
                        {{ 'APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE' | translate }}
                    </p>
                </div>
                <video
                    #video
                    id="qr-stream"
                    playsinline
                    width="640"
                    height="480"
                    autoplay
                    class="relative z-10 object-cover"
                ></video>
                <canvas #centerScanCanvas hidden></canvas>
                @if (scanner_ready() && !checking_code()) {
                    <div
                        aria-hidden="true"
                        class="qr-guide pointer-events-none absolute top-1/2 left-1/2 z-20 aspect-square h-2/3 -translate-x-1/2 -translate-y-1/2 rounded-xl"
                    >
                        <span
                            class="absolute top-0 left-0 h-10 w-10 rounded-tl-xl border-t-4 border-l-4 border-white"
                        ></span>
                        <span
                            class="absolute top-0 right-0 h-10 w-10 rounded-tr-xl border-t-4 border-r-4 border-white"
                        ></span>
                        <span
                            class="absolute bottom-0 left-0 h-10 w-10 rounded-bl-xl border-b-4 border-l-4 border-white"
                        ></span>
                        <span
                            class="absolute right-0 bottom-0 h-10 w-10 rounded-br-xl border-r-4 border-b-4 border-white"
                        ></span>
                    </div>
                    <div
                        class="bg-base-100/90 text-base-content absolute right-2 bottom-2 z-20 inline-flex items-center gap-2 rounded px-2 py-1 text-sm shadow"
                    >
                        <span class="status-dot"></span>
                        Ready to scan QR code
                    </div>
                }
            </div>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
        <div
            class="bg-base-100 relative flex flex-col items-center overflow-hidden rounded-sm p-16 shadow-sm"
            [class.hidden]="!checking_code()"
        >
            <mat-spinner diameter="32"></mat-spinner>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.LOADING_DETAILS' | translate }}
            </p>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      RouterModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;35c9fd92572d50d5f6158c7d01542bb0dd94a59a4f3ead5481d1070ad1d6f816;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts */\nvideo {\n  width: 34rem;\n  height: 24rem;\n}\n.status-dot {\n  background: #22c55e;\n  border-radius: 9999px;\n  width: 0.5rem;\n  height: 0.5rem;\n  display: inline-block;\n}\n.qr-guide {\n  box-shadow: 0 0 0 100vmax rgb(0 0 0 / 0.14);\n}\na {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */\n"] }]
  }], null, { _video_el: [{ type: ViewChild, args: ["video", { isSignal: true }] }], _center_scan_canvas: [{ type: ViewChild, args: ["centerScanCanvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinQRScanComponent, { className: "CheckinQRScanComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts", lineNumber: 175 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.component.ts
function CheckinComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
}
var CheckinComponent = class _CheckinComponent {
  constructor() {
    this._destroy_ref = inject(DestroyRef);
    this.background = settingSignal("welcome_background");
    this.hide_building_image = settingSignal("hide_building_image");
    this.now = signal(
      startOfMinute(/* @__PURE__ */ new Date()),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const interval_id = setInterval(() => {
      this.now.set(startOfMinute(/* @__PURE__ */ new Date()));
    }, 1e3);
    this._destroy_ref.onDestroy(() => clearInterval(interval_id));
  }
  static {
    this.\u0275fac = function CheckinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinComponent, selectors: [["", "app-checkin", ""]], decls: 9, vars: 10, consts: [[1, "absolute", "inset-0", "flex", "items-center", "p-8", "print:static", "print:block", "print:p-0"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "print:hidden", 3, "source"], [1, "z-10", "flex", "w-full", "flex-col", "justify-center", "space-y-8"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white", "print:hidden"], ["src", "assets/img/building.png", 1, "absolute", "right-0", "bottom-0", "w-[60%]", "print:hidden"]], template: function CheckinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, CheckinComponent_Conditional_8_Template, 1, 0, "img", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.background());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 4, ctx.now(), "mediumDate"), " ", \u0275\u0275pipeBind2(7, 7, ctx.now(), "shortTime"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hide_building_image() ? 8 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterOutlet, AuthenticatedImageDirective, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinComponent, [{
    type: Component,
    args: [{ selector: "[app-checkin]", template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div
            class="absolute inset-0 flex items-center p-8 print:static print:block print:p-0"
        >
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 print:hidden"
            />
            <div class="z-10 flex w-full flex-col justify-center space-y-8">
                <router-outlet></router-outlet>
            </div>
            <div
                class="absolute top-4 right-4 text-2xl text-white print:hidden"
            >
                {{ now() | date: 'mediumDate' }} {{ now() | date: 'shortTime' }}
            </div>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%] print:hidden"
                />
            }
        </div>
    `, imports: [CommonModule, RouterModule, AuthenticatedImageDirective], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinComponent, { className: "CheckinComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin.component.ts", lineNumber: 53 });
})();

export {
  CheckinErrorComponent,
  CheckinQRScanComponent,
  CheckinComponent
};
//# sourceMappingURL=chunk-FJUYNXKN.js.map
