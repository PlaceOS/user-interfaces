import {
  differenceInMinutes,
  format,
  isSameDay
} from "./chunk-AAF65IVH.js";
import {
  Pipe,
  formatDate,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-BKT2MDTY.js";

// libs/components/src/lib/date-from.pipe.ts
var DateFromPipe = class _DateFromPipe {
  transform(date) {
    const now = Date.now();
    let diff = differenceInMinutes(now, date);
    const direction = diff < 0;
    diff = Math.abs(diff);
    if (diff < 1) {
      return direction ? "Soon" : "Now";
    } else if (diff === 1) {
      return direction ? "In 1 min" : "1 min";
    } else if (diff < 60) {
      return direction ? `In ${diff} min` : `${diff} min`;
    } else if (diff < 24 * 60) {
      const hours = Math.floor(diff / 60);
      return direction ? `In ${hours} hour${hours === 1 ? "" : "s"}` : format(date, "H:mm");
    } else if (diff < 7 * 24 * 60) {
      return direction ? format(date, "dd MMM yyyy") : format(date, "E H:mm");
    } else if (diff < 365 * 24 * 60) {
      return direction ? format(date, "dd MMM yyyy") : format(date, "LLL d H:mm");
    }
    return "Just now";
  }
  static {
    this.\u0275fac = function DateFromPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateFromPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dateFrom", type: _DateFromPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFromPipe, [{
    type: Pipe,
    args: [{
      name: "dateFrom"
    }]
  }], null, null);
})();

// apps/signage-manager/src/app/displays/display-status.util.ts
var DISPLAY_OFFLINE_MINUTES = 5;
function isDisplayOnline(last_seen, now = Date.now()) {
  if (!last_seen)
    return false;
  return Math.abs(now - last_seen * 1e3) <= DISPLAY_OFFLINE_MINUTES * 60 * 1e3;
}
function displayStatusKey(last_seen, now = Date.now()) {
  if (!last_seen)
    return "SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN";
  return isDisplayOnline(last_seen, now) ? "SIGNAGE_MANAGER.DISPLAY_STATUS_ONLINE" : "SIGNAGE_MANAGER.DISPLAY_STATUS_OFFLINE";
}
var date_from = new DateFromPipe();
function displayLastSeen(last_seen, now, locale) {
  if (!last_seen)
    return "";
  const seen_at = last_seen * 1e3;
  if (now - seen_at < 60 * 60 * 1e3)
    return date_from.transform(seen_at);
  return formatDate(seen_at, isSameDay(seen_at, now) ? "shortTime" : "short", locale);
}

export {
  isDisplayOnline,
  displayStatusKey,
  displayLastSeen
};
//# debugId=f5796c37-fb5f-5d6d-8283-f7ea580735cc
//# sourceMappingURL=chunk-WK6EA23C.js.map
