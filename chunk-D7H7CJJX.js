import {
  DOCUMENT,
  computed,
  inject,
  signal
} from "./chunk-7RX4L7MS.js";

// libs/components/src/lib/debug-panel-resize.ts
var DebugPanelResize = class {
  constructor(initial_width, _max_vw) {
    this._max_vw = _max_vw;
    this._document = inject(DOCUMENT);
    this._start_x = 0;
    this._start_width = 0;
    this.min_width = 320;
    this.width = signal(
      initial_width,
      ...ngDevMode ? [{ debugName: "width" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel_width = computed(
      () => `min(${this.width()}px, ${this._max_vw}vw)`,
      ...ngDevMode ? [{ debugName: "panel_width" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  maxWidth() {
    return this._document.documentElement.clientWidth * this._max_vw / 100;
  }
  start(event) {
    if (event.button !== 0 || !event.isPrimary)
      return;
    const handle = event.currentTarget;
    this._start_x = event.clientX;
    this._start_width = handle.parentElement.getBoundingClientRect().width;
    handle.setPointerCapture(event.pointerId);
    event.preventDefault();
  }
  move(event) {
    const handle = event.currentTarget;
    if (!handle.hasPointerCapture(event.pointerId))
      return;
    this.setWidth(this._start_width + this._start_x - event.clientX);
  }
  end(event) {
    const handle = event.currentTarget;
    if (handle.hasPointerCapture(event.pointerId)) {
      handle.releasePointerCapture(event.pointerId);
    }
  }
  onKeydown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight")
      return;
    event.preventDefault();
    const current_width = Math.min(this.width(), this.maxWidth());
    this.setWidth(current_width + (event.key === "ArrowLeft" ? 16 : -16));
  }
  setWidth(width) {
    this.width.set(Math.min(this.maxWidth(), Math.max(this.min_width, width)));
  }
};

export {
  DebugPanelResize
};
//# debugId=c63b1cec-f609-5d40-847f-6b39b59b8a26
//# sourceMappingURL=chunk-D7H7CJJX.js.map
