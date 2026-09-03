import {
  Pipe,
  formatDuration,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-MG5PZBML.js";

// libs/components/src/lib/duration.pipe.ts
var DurationPipe = class _DurationPipe {
  /**
   * Format the duration value
   * @param length Duration to format in minutes
   * @param shorten Whether to shorten the period names e.g. `hours` as `h`
   */
  transform(length, shorten = false) {
    let duration = formatDuration({
      hours: Math.floor(length / 60),
      minutes: length % 60
    });
    if (shorten) {
      duration = duration.replace(" hour", "h").replace(" minute", "m").replace(/s/gi, "");
    }
    return duration;
  }
  static {
    this.\u0275fac = function DurationPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DurationPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "duration", type: _DurationPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationPipe, [{
    type: Pipe,
    args: [{
      name: "duration"
    }]
  }], null, null);
})();

export {
  DurationPipe
};
//# debugId=62bfd239-f1ff-5805-994d-30132c1466c8
//# sourceMappingURL=chunk-3IXNRIVB.js.map
