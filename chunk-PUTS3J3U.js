import {
  MediaAnimation,
  padLength
} from "./chunk-ZHBO75B7.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-Y6KAMZVN.js";

// libs/components/src/lib/media-duration.pipe.ts
var MediaDurationPipe = class _MediaDurationPipe {
  transform(period_length, show_ms = false) {
    const total_ms = Math.round(period_length * 1e3);
    const hours = Math.floor(total_ms / 36e5);
    const minutes = Math.floor(total_ms / 6e4) % 60;
    const seconds = Math.floor(total_ms / 1e3) % 60;
    const milliseconds = total_ms % 1e3;
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
  { value: MediaAnimation.Default, label: "COMMON.DEFAULT" },
  { value: MediaAnimation.Cut, label: "SIGNAGE_MANAGER.ANIM_CUT" },
  {
    value: MediaAnimation.CrossFade,
    label: "SIGNAGE_MANAGER.ANIM_CROSS_FADE"
  },
  { value: MediaAnimation.SlideTop, label: "SIGNAGE_MANAGER.ANIM_SLIDE_TOP" },
  {
    value: MediaAnimation.SlideLeft,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT"
  },
  {
    value: MediaAnimation.SlideRight,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT"
  },
  {
    value: MediaAnimation.SlideBottom,
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
//# debugId=0dd882e8-a04b-5d02-a2e0-964d5b3d8674
//# sourceMappingURL=chunk-PUTS3J3U.js.map
