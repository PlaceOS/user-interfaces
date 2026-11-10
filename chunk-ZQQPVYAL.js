import {
  padLength,
  zs
} from "./chunk-C3VLFLNG.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-BKT2MDTY.js";

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

// apps/signage-manager/src/app/shared/media-labels.util.ts
var MEDIA_TYPE_LABELS = {
  image: "COMMON.IMAGE",
  video: "COMMON.VIDEO",
  webpage: "COMMON.WEBPAGE",
  plugin: "SIGNAGE_MANAGER.TYPE_PLUGIN"
};
function mediaTypeLabel(type) {
  return MEDIA_TYPE_LABELS[type];
}
var ANIMATION_OPTIONS = [
  { value: zs.Default, label: "COMMON.DEFAULT" },
  { value: zs.Cut, label: "SIGNAGE_MANAGER.ANIM_CUT" },
  {
    value: zs.CrossFade,
    label: "SIGNAGE_MANAGER.ANIM_CROSS_FADE"
  },
  { value: zs.SlideTop, label: "SIGNAGE_MANAGER.ANIM_SLIDE_TOP" },
  {
    value: zs.SlideLeft,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT"
  },
  {
    value: zs.SlideRight,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT"
  },
  {
    value: zs.SlideBottom,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM"
  }
];
function animationLabel(animation) {
  return ANIMATION_OPTIONS.find(({ value }) => value === animation)?.label || "COMMON.DEFAULT";
}

export {
  MediaDurationPipe,
  MEDIA_TYPE_LABELS,
  mediaTypeLabel,
  ANIMATION_OPTIONS,
  animationLabel
};
//# debugId=03177130-a411-5cac-85db-cd8583981a26
//# sourceMappingURL=chunk-ZQQPVYAL.js.map
