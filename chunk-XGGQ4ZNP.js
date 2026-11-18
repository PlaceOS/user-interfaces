import {
  padLength,
  zs
} from "./chunk-HOLGRCUD.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-W6NHZ5YT.js";

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
//# debugId=bc79e330-dc44-577d-b2f3-e29cd56f4271
//# sourceMappingURL=chunk-XGGQ4ZNP.js.map
