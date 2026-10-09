import {
  log
} from "./chunk-UY3BZCXJ.js";

// apps/signage-manager/src/app/image-gen/image-gen.util.ts
var UserFacingError = class extends Error {
};
function actionError(error, fallback) {
  if (error instanceof UserFacingError)
    return error.message;
  log("ImageGen", fallback, error, "error", true);
  return fallback;
}
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function errorStatus(error) {
  if (!isRecord(error))
    return void 0;
  const status = error["status"];
  if (typeof status === "number")
    return status;
  const nested = error["error"];
  if (!isRecord(nested))
    return void 0;
  const nested_status = nested["status"];
  return typeof nested_status === "number" ? nested_status : void 0;
}
function perceivedLightness(red, green, blue) {
  return (red * 299 + green * 587 + blue * 114) / 1e3;
}
function hexColour(value) {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim());
  if (!match)
    return "";
  const digits = match[1].length === 3 ? [...match[1]].map((digit) => digit + digit).join("") : match[1];
  return `#${digits.toLowerCase()}`;
}
function orientationOf(width = 0, height = 0, aspect_ratio = "") {
  if (!width || !height) {
    [width, height] = aspect_ratio.split(":").map(Number);
  }
  return height > width ? "portrait" : "landscape";
}

export {
  UserFacingError,
  actionError,
  errorStatus,
  perceivedLightness,
  hexColour,
  orientationOf
};
//# debugId=d723c2a8-1757-57cf-a9d2-b9b73ed2784b
//# sourceMappingURL=chunk-RR6Z4IN7.js.map
