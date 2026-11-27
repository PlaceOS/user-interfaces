// libs/map-3d/src/lib/annotations.ts
var UNIT_ATTR = "data-3d-unit";
var KIND_ATTR = "data-3d-kind";
var HEIGHT_ATTR = "data-3d-height";
var BASE_ATTR = "data-3d-base";
var HIDDEN_ATTR = "data-3d-hidden";
var MAP_3D_KINDS = [
  "wall",
  "glass",
  "partition",
  "desk",
  "seat",
  "furniture",
  "space",
  "label",
  "flat"
];
var DEFAULT_HEIGHTS = {
  wall: 1.2,
  glass: 1.2,
  partition: 0.6,
  desk: 0.74,
  seat: 0.45,
  furniture: 0.5,
  space: 0,
  label: 0,
  flat: 0
};
var FLOOR_KINDS = /* @__PURE__ */ new Set([
  "space",
  "label",
  "flat"
]);
var LINEAR_KINDS = /* @__PURE__ */ new Set([
  "wall",
  "glass",
  "partition"
]);
var MAX_HEIGHT = 20;
function isMap3DKind(value) {
  return MAP_3D_KINDS.includes(value);
}
function metres(value, fallback) {
  const number = parseFloat(value || "");
  if (!Number.isFinite(number))
    return fallback;
  return Math.max(0, Math.min(MAX_HEIGHT, number));
}
function ownAnnotation(element) {
  const kind_value = element.getAttribute(KIND_ATTR);
  const height_value = element.getAttribute(HEIGHT_ATTR);
  if (kind_value === null && height_value === null)
    return null;
  const kind = isMap3DKind(kind_value) ? kind_value : metres(height_value, 0) > 0 ? "furniture" : "flat";
  return {
    kind,
    height: FLOOR_KINDS.has(kind) ? 0 : metres(height_value, DEFAULT_HEIGHTS[kind]),
    base: metres(element.getAttribute(BASE_ATTR), 0)
  };
}
function effectiveAnnotation(element) {
  let current = element;
  while (current) {
    const annotation = ownAnnotation(current);
    if (annotation)
      return annotation;
    current = current.parentElement;
  }
  return null;
}
function isHidden(element) {
  return !!element.closest(`[${HIDDEN_ATTR}]`);
}
function mapUnit(svg) {
  const unit = parseFloat(svg?.getAttribute(UNIT_ATTR) || "");
  return Number.isFinite(unit) && unit > 0 ? unit : 0;
}
var ROOT_TAG = /<svg[\s>][^>]*>/i;
var UNIT_IN_TAG = new RegExp(`\\s${UNIT_ATTR}\\s*=\\s*["']\\s*([0-9.eE+-]+)`);
function hasMap3D(svg_text) {
  const root = (svg_text || "").match(ROOT_TAG)?.[0];
  const unit = parseFloat(root?.match(UNIT_IN_TAG)?.[1] || "");
  return Number.isFinite(unit) && unit > 0;
}

export {
  KIND_ATTR,
  HIDDEN_ATTR,
  MAP_3D_KINDS,
  LINEAR_KINDS,
  MAX_HEIGHT,
  effectiveAnnotation,
  isHidden,
  mapUnit,
  hasMap3D
};
//# debugId=82ec247b-e21b-5396-a2e3-80cfd41486cb
//# sourceMappingURL=chunk-IOXIRZG4.js.map
