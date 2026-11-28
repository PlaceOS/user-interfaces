// libs/map-editor/src/lib/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var ANCHOR_ATTR = "data-map-editor-anchor";
var EDITOR_ATTR_PREFIX = "data-map-editor-";
var ID_PATTERN = /^[A-Za-z][A-Za-z0-9_.-]*$/;
var DEFAULT_ID_PREFIX = "ai-";
var ATTR_ALLOW_LIST = /* @__PURE__ */ new Set([
  "fill",
  "stroke",
  "stroke-width",
  "stroke-dasharray",
  "fill-opacity",
  "stroke-opacity",
  "opacity",
  "class",
  "visibility",
  "rx",
  "ry",
  "font-size",
  "font-family",
  "font-weight",
  "text-anchor",
  "dominant-baseline"
]);
var STYLE_PROPERTY_ALLOW_LIST = ATTR_ALLOW_LIST;
var DATA_ATTR = /^data-[a-z][a-z0-9_-]*$/i;
function isAllowedAttributeName(name) {
  if (ATTR_ALLOW_LIST.has(name))
    return true;
  return DATA_ATTR.test(name) && !name.toLowerCase().startsWith(EDITOR_ATTR_PREFIX);
}
var SHAPE_KINDS = [
  "rect",
  "circle",
  "ellipse",
  "line",
  "polygon",
  "polyline",
  "path",
  "text",
  "g"
];
var SHAPE_GEOMETRY_ATTRS = {
  rect: ["x", "y", "width", "height", "rx", "ry"],
  circle: ["cx", "cy", "r"],
  ellipse: ["cx", "cy", "rx", "ry"],
  line: ["x1", "y1", "x2", "y2"],
  polygon: ["points"],
  polyline: ["points"],
  path: ["d"],
  text: ["x", "y", "dx", "dy"],
  g: []
};
var TEXT_TAGS = /* @__PURE__ */ new Set(["text", "tspan"]);
var CONTAINER_TAGS = /* @__PURE__ */ new Set(["a", "g"]);
var LINE_TAGS = /* @__PURE__ */ new Set(["line"]);
var REFERENCE_TAGS = /* @__PURE__ */ new Set(["image", "use"]);
var NON_RENDERED_TAGS = /* @__PURE__ */ new Set([
  "clippath",
  "defs",
  "desc",
  "filter",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "pattern",
  "radialgradient",
  "script",
  "style",
  "symbol",
  "title"
]);
var DENIED_TAGS = /* @__PURE__ */ new Set([
  "script",
  "foreignobject",
  "handler",
  "iframe",
  "embed",
  "object",
  "animate",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "set",
  "discard",
  "mpath"
]);
var MARKUP_ALLOWED_TAGS = /* @__PURE__ */ new Set([
  "a",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "feblend",
  "fecolormatrix",
  "fecomponenttransfer",
  "fecomposite",
  "feconvolvematrix",
  "fediffuselighting",
  "fedisplacementmap",
  "fedistantlight",
  "fedropshadow",
  "feflood",
  "fefunca",
  "fefuncb",
  "fefuncg",
  "fefuncr",
  "fegaussianblur",
  "femerge",
  "femergenode",
  "femorphology",
  "feoffset",
  "fepointlight",
  "fespecularlighting",
  "fespotlight",
  "fetile",
  "feturbulence",
  "filter",
  "g",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "symbol",
  "text",
  "textpath",
  "title",
  "tspan"
]);
var REPLACEMENT_DENIED_TAGS = /* @__PURE__ */ new Set([
  ...DENIED_TAGS,
  "style",
  "use"
]);
var REFERENCE_ATTRS = /* @__PURE__ */ new Set([
  "href",
  "xlink:href",
  "src"
]);
var MAX_OPS_PER_PROPOSAL = 80;
var MAX_REPLACEMENT_MARKUP_BYTES = 16 * 1024;
var MAX_TRANSFORM_TARGETS = 200;
var MAX_DUPLICATE_COUNT = 40;
var MAX_ELEMENT_GROWTH = 300;
var MAX_BYTE_GROWTH = 0.25;
var OFF_CANVAS_TOLERANCE = 0.02;
var HISTORY_DEPTH = 50;
var HISTORY_BYTE_BUDGET = 64 * 1024 * 1024;
var CONTENT_HASH_LENGTH = 8;

// libs/map-editor/src/lib/style-resolution.ts
var COMMENT = /\/\*[\s\S]*?\*\//g;
var RULE = /([^{}@]+)\{([^{}]*)\}/g;
var AT_STATEMENT = /@[^{};]*;/g;
var AT_BLOCK = /@[^{}]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g;
function parseStyleRules(root) {
  const rules = [];
  for (const style of Array.from(root.querySelectorAll("style"))) {
    rules.push(...parseStyleText(style.textContent || ""));
  }
  return rules;
}
function parseStyleText(css) {
  const rules = [];
  const text = css.replace(COMMENT, "").replace(AT_BLOCK, "").replace(AT_STATEMENT, "");
  for (const match of text.matchAll(RULE)) {
    const selectors = match[1].split(",").map((s) => s.trim()).filter((s) => !!s);
    const declarations = parseDeclarations(match[2]);
    if (selectors.length && Object.keys(declarations).length) {
      rules.push({ selectors, declarations });
    }
  }
  return rules;
}
function parseDeclarations(body) {
  const declarations = {};
  for (const part of body.split(";")) {
    const index = part.indexOf(":");
    if (index < 0)
      continue;
    const name = part.slice(0, index).trim();
    const value = cleanStyleValue(part.slice(index + 1));
    if (name && value)
      declarations[name] = value;
  }
  return declarations;
}
function formatDeclarations(declarations) {
  return Object.entries(declarations).map(([name, value]) => `${name}:${value}`).join(";");
}
function cleanStyleValue(value) {
  return value.replace("!important", "").trim();
}
function isValidSelector(root, selector) {
  try {
    root.querySelectorAll(selector);
    return true;
  } catch {
    return false;
  }
}
function selectorSpecificity(selector) {
  const id_count = selector.match(/#[\w-]+/g)?.length || 0;
  const class_count = selector.match(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g)?.length || 0;
  const tag_count = selector.replace(/#[\w-]+/g, " ").replace(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g, " ").split(/[\s>+~]+/).filter((s) => !!s.trim() && s.trim() !== "*").length || 0;
  return id_count * 100 + class_count * 10 + tag_count;
}
function inlineStyleValue(element, name) {
  const style = element.style;
  const value = style?.getPropertyValue(name);
  return value ? cleanStyleValue(value) : "";
}
function numberValue(value) {
  if (!value)
    return null;
  const number = parseFloat(value);
  return Number.isFinite(number) ? number : null;
}
function isTransparentColour(value) {
  const colour = value.trim().toLowerCase();
  return !colour || colour === "none" || colour === "transparent" || colour === "rgba(0,0,0,0)" || colour === "rgba(0, 0, 0, 0)";
}
function hasReference(element) {
  return element.hasAttribute("href") || element.hasAttribute("xlink:href") || element.hasAttributeNS(XLINK_NS, "href");
}
function elementsMatching(root, selector) {
  try {
    const matches = Array.from(root.querySelectorAll(selector));
    if (root.matches(selector))
      matches.unshift(root);
    return matches;
  } catch {
    return [];
  }
}
var StyleResolver = class {
  constructor(root, rules) {
    this._rule_values = /* @__PURE__ */ new Map();
    this._own_cache = /* @__PURE__ */ new Map();
    this.rules = rules || parseStyleRules(root);
    for (const rule of this.rules) {
      for (const selector of rule.selectors) {
        const specificity = selectorSpecificity(selector);
        for (const element of elementsMatching(root, selector)) {
          let values = this._rule_values.get(element);
          if (!values) {
            values = /* @__PURE__ */ new Map();
            this._rule_values.set(element, values);
          }
          for (const [name, value] of Object.entries(rule.declarations)) {
            const current = values.get(name);
            if (!current || specificity >= current[1]) {
              values.set(name, [value, specificity]);
            }
          }
        }
      }
    }
  }
  /** Value from the `<style>` rules only. */
  cssValue(element, name) {
    return this._rule_values.get(element)?.get(name)?.[0] || "";
  }
  /** The element's own value: inline style, then rules, then the attribute. */
  own(element, name) {
    let cache = this._own_cache.get(element);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      this._own_cache.set(element, cache);
    }
    const cached = cache.get(name);
    if (cached !== void 0)
      return cached;
    const value = inlineStyleValue(element, name) || this.cssValue(element, name) || cleanStyleValue(element.getAttribute(name) || "");
    cache.set(name, value);
    return value;
  }
  inherited(element, name, fallback) {
    let current = element;
    while (current) {
      const value = this.own(current, name);
      if (value)
        return value;
      current = current.parentElement;
    }
    return fallback;
  }
  isHiddenByOwnStyle(element) {
    return element.hasAttribute("hidden") || this.own(element, "display") === "none" || ["hidden", "collapse"].includes(this.own(element, "visibility")) || numberValue(this.own(element, "opacity")) === 0;
  }
  hasHiddenAncestor(element) {
    let current = element;
    while (current) {
      if (NON_RENDERED_TAGS.has(current.localName.toLowerCase()))
        return true;
      if (this.isHiddenByOwnStyle(current))
        return true;
      current = current.parentElement;
    }
    return false;
  }
  hasVisibleFill(element) {
    const fill = this.inherited(element, "fill", "black");
    const fill_opacity = numberValue(this.inherited(element, "fill-opacity", "1"));
    return !isTransparentColour(fill || "black") && fill_opacity !== 0;
  }
  hasVisibleStroke(element) {
    const stroke = this.inherited(element, "stroke", "");
    const stroke_opacity = numberValue(this.inherited(element, "stroke-opacity", "1"));
    const stroke_width = numberValue(this.inherited(element, "stroke-width", "1"));
    return !!stroke && !isTransparentColour(stroke) && stroke_opacity !== 0 && stroke_width !== 0;
  }
  /**
   * Whether the element paints anything: not inside a non-rendered or hidden
   * subtree, and with a visible fill or stroke (containers: any visible
   * child; text: non-empty; lines: stroke; references: a target).
   */
  isVisible(element) {
    if (this.hasHiddenAncestor(element))
      return false;
    const tag = element.localName.toLowerCase();
    if (NON_RENDERED_TAGS.has(tag))
      return false;
    if (tag === "svg")
      return true;
    if (CONTAINER_TAGS.has(tag)) {
      return Array.from(element.children).some((child) => this.isVisible(child));
    }
    if (TEXT_TAGS.has(tag)) {
      return !!(element.textContent || "").trim() && (this.hasVisibleFill(element) || this.hasVisibleStroke(element));
    }
    if (LINE_TAGS.has(tag))
      return this.hasVisibleStroke(element);
    if (REFERENCE_TAGS.has(tag))
      return hasReference(element);
    return this.hasVisibleFill(element) || this.hasVisibleStroke(element);
  }
  visibleColour(element, name) {
    return this.inherited(element, name, name === "fill" ? "black" : "");
  }
  /**
   * Descendants that set the property themselves, so a value set on the
   * element does not reach them.
   */
  overridingDescendants(element, name) {
    return Array.from(element.querySelectorAll("*")).filter((child) => !!this.own(child, name));
  }
};

export {
  SVG_NS,
  XLINK_NS,
  ANCHOR_ATTR,
  EDITOR_ATTR_PREFIX,
  ID_PATTERN,
  DEFAULT_ID_PREFIX,
  STYLE_PROPERTY_ALLOW_LIST,
  isAllowedAttributeName,
  SHAPE_KINDS,
  SHAPE_GEOMETRY_ATTRS,
  TEXT_TAGS,
  NON_RENDERED_TAGS,
  DENIED_TAGS,
  MARKUP_ALLOWED_TAGS,
  REPLACEMENT_DENIED_TAGS,
  REFERENCE_ATTRS,
  MAX_OPS_PER_PROPOSAL,
  MAX_REPLACEMENT_MARKUP_BYTES,
  MAX_TRANSFORM_TARGETS,
  MAX_DUPLICATE_COUNT,
  MAX_ELEMENT_GROWTH,
  MAX_BYTE_GROWTH,
  OFF_CANVAS_TOLERANCE,
  HISTORY_DEPTH,
  HISTORY_BYTE_BUDGET,
  CONTENT_HASH_LENGTH,
  parseStyleRules,
  formatDeclarations,
  isValidSelector,
  inlineStyleValue,
  numberValue,
  elementsMatching,
  StyleResolver
};
//# debugId=c61f4fe5-2be9-5802-bad5-92bd1b1b7773
//# sourceMappingURL=chunk-ONDFPZMH.js.map
