import {
  padLength
} from "./chunk-UY3BZCXJ.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-6HUGPUMR.js";

// libs/components/src/lib/media-duration.pipe.ts
var MediaDurationPipe = class _MediaDurationPipe {
  transform(period_length, show_ms = false) {
    const hours = Math.floor(period_length / 60 / 60);
    const minutes = Math.floor(period_length / 60 % 60);
    const seconds = Math.floor(period_length % 60);
    const milliseconds = Math.floor(period_length * 1e3 % 1e3);
    let str = `${padLength(minutes)}:${padLength(seconds)}`;
    if (show_ms) {
      str += `.${padLength(milliseconds, 3)}`;
    }
    if (hours > 0)
      str = `${padLength(hours)}:${str}`;
    return str;
  }
  static {
    this.\u0275fac = function MediaDurationPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaDurationPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "mediaDuration", type: _MediaDurationPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaDurationPipe, [{
    type: Pipe,
    args: [{
      name: "mediaDuration"
    }]
  }], null, null);
})();

export {
  MediaDurationPipe
};
//# debugId=ee1f5f01-7872-5ebf-aadd-8c1c0fc25d29
//# sourceMappingURL=chunk-DQ3OENMI.js.map
