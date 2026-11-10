import {
  Directive,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  signal,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-BKT2MDTY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/file-drop.directive.ts
var taken_drags = /* @__PURE__ */ new WeakSet();
function isFileDrag(event) {
  return Array.from(event.dataTransfer?.types || []).includes("Files");
}
function isFileDragTaken(event) {
  return taken_drags.has(event);
}
function blockMissedFileDrop(event) {
  if (!isFileDrag(event) || event.defaultPrevented)
    return;
  event.preventDefault();
  if (event.dataTransfer)
    event.dataTransfer.dropEffect = "none";
}
var FileDropDirective = class _FileDropDirective {
  constructor() {
    this.disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "fileDropDisabled" }));
    this.fileDrop = output();
    this.over = signal(
      false,
      ...ngDevMode ? [{ debugName: "over" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._depth = 0;
  }
  /** Take the event for this target, if it can accept it */
  _take(event) {
    if (this.disabled() || event.defaultPrevented)
      return false;
    event.preventDefault();
    taken_drags.add(event);
    return true;
  }
  onDragEnter(event) {
    if (!isFileDrag(event))
      return;
    this._depth += 1;
    if (!this._take(event))
      return;
    this.over.set(true);
  }
  onDragOver(event) {
    if (!isFileDrag(event) || !this._take(event))
      return;
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "copy";
    this.over.set(true);
  }
  onDragLeave(event) {
    if (!isFileDrag(event))
      return;
    this._depth = Math.max(0, this._depth - 1);
    if (!this._depth)
      this.over.set(false);
  }
  onDrop(event) {
    if (!isFileDrag(event))
      return;
    this._depth = 0;
    this.over.set(false);
    if (!this._take(event))
      return;
    const files = Array.from(event.dataTransfer?.files || []);
    if (files.length)
      this.fileDrop.emit(files);
  }
  static {
    this.\u0275fac = function FileDropDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileDropDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FileDropDirective, selectors: [["", "fileDrop", ""]], hostVars: 2, hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dragenter", function FileDropDirective_dragenter_HostBindingHandler($event) {
          return ctx.onDragEnter($event);
        })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
          return ctx.onDragOver($event);
        })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
          return ctx.onDragLeave($event);
        })("drop", function FileDropDirective_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("file-drop-over", ctx.over() && !ctx.disabled());
      }
    }, inputs: { disabled: [1, "fileDropDisabled", "disabled"] }, outputs: { fileDrop: "fileDrop" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileDropDirective, [{
    type: Directive,
    args: [{
      selector: "[fileDrop]",
      host: {
        "(dragenter)": "onDragEnter($event)",
        "(dragover)": "onDragOver($event)",
        "(dragleave)": "onDragLeave($event)",
        "(drop)": "onDrop($event)",
        "[class.file-drop-over]": "over() && !disabled()"
      }
    }]
  }], null, { disabled: [{ type: Input, args: [{ isSignal: true, alias: "fileDropDisabled", required: false }] }], fileDrop: [{ type: Output, args: ["fileDrop"] }] });
})();

export {
  isFileDrag,
  isFileDragTaken,
  blockMissedFileDrop,
  FileDropDirective
};
//# debugId=c21b931e-79b2-52ad-957f-2f22865afb52
//# sourceMappingURL=chunk-HCPEN7HA.js.map
