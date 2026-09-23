import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/decode-entity-names.util.ts
var _decoder = null;
function decodeEntities(value) {
  if (!value || value.indexOf("&") === -1)
    return value;
  _decoder ??= document.createElement("textarea");
  _decoder.innerHTML = value;
  return _decoder.value;
}
var NAME_FIELDS = ["name", "display_name"];
var NESTED_FIELDS = ["group", "user", "zone"];
function decodeEntityNames(item) {
  if (!item || typeof item !== "object")
    return item;
  const copy = __spreadValues({}, item);
  for (const field of NAME_FIELDS) {
    if (typeof copy[field] === "string") {
      copy[field] = decodeEntities(copy[field]);
    }
  }
  for (const field of NESTED_FIELDS) {
    if (copy[field] && typeof copy[field] === "object") {
      copy[field] = decodeEntityNames(copy[field]);
    }
  }
  return copy;
}

export {
  decodeEntityNames
};
//# debugId=48958f1d-e178-5936-b8f5-9c8243a84fd1
//# sourceMappingURL=chunk-XASXFKEM.js.map
