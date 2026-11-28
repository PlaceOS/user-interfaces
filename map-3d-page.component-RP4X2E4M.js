import {
  BrowserRenderCheck,
  collectProtectedIds
} from "./chunk-USFRDPM5.js";
import {
  MapManagementService
} from "./chunk-IFGV4DYD.js";
import "./chunk-ZQSHNA6H.js";
import "./chunk-PJQYJLGZ.js";
import "./chunk-3H3ROGJV.js";
import "./chunk-3ZVMDWAC.js";
import {
  openConfirmModal
} from "./chunk-DUS37TNH.js";
import "./chunk-3PKANYW2.js";
import "./chunk-PYG6YUVJ.js";
import "./chunk-ZD6WTNCX.js";
import "./chunk-SMV4DPCT.js";
import "./chunk-MBCHZ5RB.js";
import "./chunk-R4UWUNS5.js";
import "./chunk-CXTRRE6C.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MQEEHHA6.js";
import "./chunk-MUSG2A4C.js";
import "./chunk-JDNJMRMT.js";
import "./chunk-YGPACMWT.js";
import "./chunk-4CVTYVK7.js";
import "./chunk-KVMNADUB.js";
import "./chunk-XJVX67LU.js";
import "./chunk-EPJNZUBD.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-I3LAEIE5.js";
import "./chunk-SHXXFCD2.js";
import "./chunk-YNUP7NIX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-42S2QJDR.js";
import {
  MatDialog
} from "./chunk-XXKPMVFX.js";
import "./chunk-PWIGADFP.js";
import "./chunk-GMB7PC6H.js";
import {
  DEFAULT_TILT,
  Map3DViewer,
  parseMap
} from "./chunk-UY5O6QT3.js";
import {
  numberValue
} from "./chunk-ONDFPZMH.js";
import {
  BASE_ATTR,
  DEFAULT_HEIGHTS,
  FLOOR_KINDS,
  HEIGHT_ATTR,
  HIDDEN_ATTR,
  KIND_ATTR,
  LINEAR_KINDS,
  MAP_3D_KINDS,
  MAX_HEIGHT,
  UNIT_ATTR,
  assignAnnotation,
  clearAnnotation,
  clearAnnotations,
  effectiveAnnotation,
  mapUnit,
  ownAnnotation,
  setAnnotation,
  setMapUnit
} from "./chunk-6JSPP5AC.js";
import "./chunk-5VCFTYTK.js";
import {
  TranslatePipe
} from "./chunk-7KBM3G5W.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  OrganisationService,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-XQHBU6JO.js";
import {
  IconComponent
} from "./chunk-OCRUIWUS.js";
import "./chunk-XCUQAAEL.js";
import {
  i18n,
  notifyError,
  notifySuccess
} from "./chunk-PH2SWG67.js";
import "./chunk-IW3L46LQ.js";
import "./chunk-7FFQK53L.js";
import {
  MatRippleModule
} from "./chunk-CWCNI2O4.js";
import {
  MatRipple
} from "./chunk-DPVBDHKH.js";
import "./chunk-THGATZR4.js";
import "./chunk-C474S4JC.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-EWNKJBAV.js";
import {
  Component,
  DestroyRef,
  NgZone,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-J4V3B3VF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/map-3d/src/lib/detect.ts
var WORDS = {
  label: [
    "label",
    "labels",
    "name",
    "names",
    "text",
    "texts",
    "signage",
    "signages",
    "sigange",
    "signanges",
    "sign",
    "signs",
    "icon",
    "icons",
    "tag",
    "tags",
    "title",
    "titles",
    "words",
    "annotation",
    "annotations",
    "legend",
    "logo"
  ],
  wall: [
    "wall",
    "walls",
    "skeleton",
    "outline",
    "outlines",
    "outliine",
    "boundary",
    "boundry",
    "boundaries",
    "perimeter",
    "structure",
    "column",
    "columns",
    "pillar",
    "pillars",
    "stroke",
    "strokes",
    "core",
    "shell",
    "facade"
  ],
  glass: ["glass", "glazing", "window", "windows"],
  partition: ["partition", "partitions", "divider", "dividers"],
  desk: [
    "desk",
    "desks",
    "table",
    "tables",
    "workstation",
    "workstations",
    "workpoint",
    "workpoints",
    "bench",
    "benches"
  ],
  seat: [
    "chair",
    "chairs",
    "seat",
    "seats",
    "seating",
    "stool",
    "stools",
    "sofa",
    "sofas",
    "couch",
    "couches",
    "lounge",
    "lounges",
    "armchair",
    "armchairs",
    "ottoman",
    "ottomans",
    "booth",
    "booths"
  ],
  furniture: [
    "furniture",
    "furn",
    "storage",
    "cabinet",
    "cabinets",
    "cupboard",
    "cupboards",
    "locker",
    "lockers",
    "shelf",
    "shelves",
    "shelving",
    "joinery",
    "kitchen",
    "kitchenette",
    "counter",
    "counters",
    "plant",
    "plants",
    "planter",
    "planters",
    "rack",
    "racks",
    "appliance",
    "appliances",
    "fixtures",
    "equipment",
    "printer",
    "printers",
    "fridge"
  ]
};
var FLAT_WORDS = [
  "base",
  "background",
  "bg",
  "floor",
  "flooring",
  "blank",
  "blanks",
  "highlight",
  "highlights",
  "higlights",
  "zone",
  "zones",
  "booking",
  "bookings",
  "area",
  "areas",
  "space",
  "spaces",
  "room",
  "rooms",
  "rm",
  "status",
  "shadow",
  "shadows",
  "neighbourhood",
  "neighbourhoods",
  "neighborhood",
  "neighborhoods",
  "carpet",
  "parking",
  "stair",
  "stairs",
  "lift",
  "lifts",
  "elevator",
  "elevators",
  "void",
  "atrium",
  "grass",
  "road",
  "roads"
];
var WORD_PRIORITY = [
  "label",
  "glass",
  "partition",
  "wall",
  "desk",
  "seat",
  "furniture"
];
var WORD_KIND = /* @__PURE__ */ new Map();
for (const word of FLAT_WORDS)
  WORD_KIND.set(word, "flat");
for (const kind of [...WORD_PRIORITY].reverse()) {
  for (const word of WORDS[kind])
    WORD_KIND.set(word, kind);
}
var SPACE_ID = /^area-.+-status$/i;
var FURNITURE_MISSPELT = /^fu[a-z]{3,7}ture$/;
var DESK_LENGTH = 1.6;
var SEAT_SIZE = 0.55;
var FALLBACK_SPAN = 45;
var MAX_CUE_RATIO = 2.5;
var BUILDING_TRIM = 0.01;
var MIN_SPAN = 8;
var MAX_SPAN = 600;
var MIN_OPACITY = 0.5;
var FLOOR_COVERAGE = 0.4;
var LABEL_SPAN = 0.12;
var MARK_SIZE_RANGE = 4;
function kindFromName(name) {
  if (!name)
    return null;
  const words = name.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z]+/).filter(Boolean);
  let found = null;
  for (const word of words) {
    const kind = WORD_KIND.get(FURNITURE_MISSPELT.test(word) ? "furniture" : word);
    if (!kind)
      continue;
    if (!found || found === "flat" || kind !== "flat" && WORD_PRIORITY.indexOf(kind) < WORD_PRIORITY.indexOf(found)) {
      found = kind;
    }
  }
  return found;
}
function namesOf(element) {
  return [
    element.getAttribute("id"),
    element.getAttribute("data-name"),
    element.getAttribute("inkscape:label"),
    element.getAttribute("aria-label")
  ].filter((_) => !!_);
}
function median(values) {
  if (!values.length)
    return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
function overlaps(a, b) {
  return a.bbox[0] < b.bbox[2] && a.bbox[2] > b.bbox[0] && a.bbox[1] < b.bbox[3] && a.bbox[3] > b.bbox[1];
}
function covers(outer, inner) {
  const x = (inner.bbox[0] + inner.bbox[2]) / 2;
  const y = (inner.bbox[1] + inner.bbox[3]) / 2;
  return x > outer.bbox[0] && x < outer.bbox[2] && y > outer.bbox[1] && y < outer.bbox[3];
}
function boxArea(shape) {
  return (shape.bbox[2] - shape.bbox[0]) * (shape.bbox[3] - shape.bbox[1]);
}
function spanOf(shape) {
  return Math.max(shape.bbox[2] - shape.bbox[0], shape.bbox[3] - shape.bbox[1]);
}
function detectMap3D(map, options = {}) {
  const { svg, shapes, view_box } = map;
  clearAnnotations(svg);
  const desk_ids = new Set(options.desk_ids || []);
  const space_ids = new Set(options.space_ids || []);
  const area_ids = new Set(options.area_ids || []);
  const map_area = view_box.width * view_box.height;
  const diagonal = Math.hypot(view_box.width, view_box.height);
  const named = /* @__PURE__ */ new Map();
  const nameKind = (element) => {
    let current = element;
    while (current && current !== svg) {
      let kind = named.get(current);
      if (kind === void 0) {
        kind = null;
        const id = current.getAttribute("id") || "";
        if (desk_ids.has(id))
          kind = "desk";
        else if (space_ids.has(id) || SPACE_ID.test(id))
          kind = "space";
        else if (area_ids.has(id))
          kind = "flat";
        else {
          for (const name of namesOf(current)) {
            kind = kindFromName(name);
            if (kind)
              break;
          }
        }
        named.set(current, kind);
      }
      if (kind)
        return kind;
      current = current.parentElement;
    }
    return null;
  };
  const kinds = /* @__PURE__ */ new Map();
  const parts = /* @__PURE__ */ new Set();
  for (const shape of shapes) {
    const named2 = nameKind(shape.element) || "flat";
    let kind = named2;
    const coverage = shape.area / map_area;
    const is_tint = kind !== "label" && kind !== "space";
    if (is_tint && shape.opacity < MIN_OPACITY)
      kind = "flat";
    else if (LINEAR_KINDS.has(kind)) {
      if (shape.has_fill && coverage > FLOOR_COVERAGE)
        kind = "flat";
    } else if (!FLOOR_KINDS.has(kind)) {
      const is_block = shape.polygons.length > 0 && (shape.has_fill || shape.subpaths.every((_) => _.closed));
      if (!is_block || coverage > FLOOR_COVERAGE)
        kind = "flat";
    }
    if (kind !== named2)
      parts.add(shape.element);
    kinds.set(shape.element, kind);
  }
  if (![...kinds.values()].some((kind) => kind === "wall")) {
    for (const shape of wallsByStroke(shapes, diagonal)) {
      if (kinds.get(shape.element) === "flat") {
        kinds.set(shape.element, "wall");
      }
    }
  }
  const raised = [];
  const isOverlay = (shape) => kinds.get(shape.element) === "flat" && !parts.has(shape.element) && shape.has_fill && shape.polygons.length > 0 && !area_ids.has(shape.element.getAttribute("id") || "") && shape.opacity * (numberValue(map.styles.inherited(shape.element, "fill-opacity", "1")) ?? 1) < 1;
  const label_parents = /* @__PURE__ */ new Map();
  const isMark = (shape) => kinds.get(shape.element) === "flat" && shape.has_fill && shape.opacity >= MIN_OPACITY && spanOf(shape) < diagonal * LABEL_SPAN && !area_ids.has(shape.element.getAttribute("id") || "");
  for (const shape of shapes) {
    const kind = kinds.get(shape.element);
    if (kind && !FLOOR_KINDS.has(kind)) {
      if (!LINEAR_KINDS.has(kind))
        raised.push(shape);
      continue;
    }
    const size = boxArea(shape);
    if (isOverlay(shape) && raised.some((other) => size > boxArea(other) && covers(shape, other))) {
      kinds.set(shape.element, "space");
      continue;
    }
    if (!isMark(shape))
      continue;
    if (raised.some((other) => overlaps(shape, other) && size <= boxArea(other))) {
      kinds.set(shape.element, "label");
      const parent = shape.element.parentElement;
      label_parents.set(parent, Math.max(label_parents.get(parent) || 0, size));
    }
  }
  for (const shape of shapes) {
    const largest = label_parents.get(shape.element.parentElement);
    if (largest && isMark(shape) && boxArea(shape) <= largest * MARK_SIZE_RANGE) {
      kinds.set(shape.element, "label");
    }
  }
  for (const text of Array.from(svg.querySelectorAll("text"))) {
    kinds.set(text, "label");
  }
  const { unit, unit_source } = estimateUnit(map, kinds, desk_ids);
  setMapUnit(svg, unit);
  const tally = /* @__PURE__ */ new Map();
  for (const [element, kind] of kinds) {
    let current = element;
    while (current && current !== svg) {
      let counts2 = tally.get(current);
      if (!counts2)
        tally.set(current, counts2 = /* @__PURE__ */ new Map());
      counts2.set(kind, (counts2.get(kind) || 0) + 1);
      current = current.parentElement;
    }
  }
  const heights = options.heights || {};
  const annotate = (element, inherited) => {
    const own = kinds.get(element);
    if (own) {
      if (own !== inherited) {
        setAnnotation(element, { kind: own, height: heights[own] });
      }
      return;
    }
    const counts2 = tally.get(element);
    if (!counts2)
      return;
    let major = inherited;
    let total = 0;
    for (const [kind, count] of counts2) {
      total += count;
      if (count > (counts2.get(major) || 0))
        major = kind;
    }
    if ((counts2.get(major) || 0) * 2 <= total)
      major = inherited;
    if (major !== inherited) {
      setAnnotation(element, { kind: major, height: heights[major] });
    }
    for (const child of Array.from(element.children)) {
      annotate(child, major);
    }
  };
  for (const child of Array.from(svg.children))
    annotate(child, "flat");
  const counts = Object.fromEntries(MAP_3D_KINDS.map((kind) => [kind, 0]));
  for (const kind of kinds.values())
    counts[kind]++;
  return { unit, unit_source, counts };
}
function wallsByStroke(shapes, diagonal) {
  const lines = shapes.filter((shape) => !shape.has_fill && shape.has_stroke && shape.opacity >= MIN_OPACITY && shape.length > diagonal * 0.01);
  if (lines.length < 4)
    return [];
  const widths = [];
  for (const line of lines) {
    const weight = Math.max(1, Math.round(line.length / (diagonal * 0.01)));
    for (let i = 0; i < Math.min(weight, 200); i++) {
      widths.push(line.stroke_width);
    }
  }
  const typical = median(widths);
  const widest = Math.max(...lines.map((_) => _.stroke_width));
  if (!(widest >= typical * 1.5))
    return [];
  const threshold = Math.max(typical * 1.5, widest * 0.5);
  return lines.filter((line) => line.stroke_width >= threshold);
}
function estimateUnit(map, kinds, desk_ids) {
  const { svg, shapes, view_box } = map;
  const span = Math.max(view_box.width, view_box.height);
  const clamp = (unit) => Math.max(span / MAX_SPAN, Math.min(span / MIN_SPAN, unit));
  const by_kind = (kind) => shapes.filter((shape) => kinds.get(shape.element) === kind);
  const building = buildingSpan(shapes.filter((shape) => LINEAR_KINDS.has(kinds.get(shape.element) || "flat"))) || span;
  const desk_spans = /* @__PURE__ */ new Map();
  for (const shape of by_kind("desk")) {
    let owner = shape.element;
    let current = shape.element;
    while (current && current !== svg) {
      const id = current.getAttribute("id") || "";
      if (desk_ids.has(id) || /^(desk|table)[-_.]/i.test(id)) {
        owner = current;
        break;
      }
      current = current.parentElement;
    }
    const box = desk_spans.get(owner);
    if (!box)
      desk_spans.set(owner, [...shape.bbox]);
    else {
      box[0] = Math.min(box[0], shape.bbox[0]);
      box[1] = Math.min(box[1], shape.bbox[1]);
      box[2] = Math.max(box[2], shape.bbox[2]);
      box[3] = Math.max(box[3], shape.bbox[3]);
    }
  }
  const fallback = building / FALLBACK_SPAN;
  const blend = (cue) => clamp(Math.max(fallback / MAX_CUE_RATIO, Math.min(fallback * MAX_CUE_RATIO, Math.sqrt(cue * fallback))));
  const seats = by_kind("seat").map(spanOf);
  if (seats.length >= 4) {
    return { unit: blend(median(seats) / SEAT_SIZE), unit_source: "seats" };
  }
  const desk_lengths = [...desk_spans.values()].map((box) => Math.max(box[2] - box[0], box[3] - box[1]));
  if (desk_lengths.length >= 3) {
    return {
      unit: blend(median(desk_lengths) / DESK_LENGTH),
      unit_source: "desks"
    };
  }
  return { unit: clamp(fallback), unit_source: "size" };
}
function buildingSpan(walls) {
  const xs = [];
  const ys = [];
  let total = 0;
  for (const wall of walls) {
    for (const { points, closed } of wall.subpaths) {
      const count = closed ? points.length : points.length - 1;
      for (let i = 0; i < count; i++) {
        const a = points[i];
        const b = points[(i + 1) % points.length];
        const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (!length)
          continue;
        xs.push([(a[0] + b[0]) / 2, length]);
        ys.push([(a[1] + b[1]) / 2, length]);
        total += length;
      }
    }
  }
  if (!total)
    return 0;
  const extent = (values) => {
    values.sort((a, b) => a[0] - b[0]);
    const trim = total * BUILDING_TRIM;
    let low = values[0][0];
    let high = values[values.length - 1][0];
    let sum = 0;
    for (const [position, length] of values) {
      sum += length;
      if (sum >= trim) {
        low = position;
        break;
      }
    }
    sum = 0;
    for (let i = values.length - 1; i >= 0; i--) {
      sum += values[i][1];
      if (sum >= trim) {
        high = values[i][0];
        break;
      }
    }
    return high - low;
  };
  return Math.max(extent(xs), extent(ys));
}

// libs/map-3d/src/lib/session.ts
var ANNOTATED = `[${KIND_ATTR}],[${HEIGHT_ATTR}],[${BASE_ATTR}]`;
var MAX_HISTORY = 100;
function layerName(element) {
  return element.getAttribute("data-name") || element.getAttribute("inkscape:label") || element.getAttribute("id") || "";
}
var Map3DSession = class {
  constructor(svg_text, _options = {}) {
    this._options = _options;
    this.detected = null;
    this.onChange = null;
    this._serialised = null;
    this._undo = [];
    this._redo = [];
    this._shape_by_element = /* @__PURE__ */ new Map();
    this.map = parseMap(svg_text);
    for (const shape of this.map.shapes) {
      this._shape_by_element.set(shape.element, shape);
    }
    this._saved = this._state();
    this._saved_unit = this.unit;
  }
  /** Whether the map had a 3D view when it was opened or last saved */
  get has_saved_3d() {
    return this._saved_unit > 0;
  }
  get unit() {
    return mapUnit(this.map.svg);
  }
  /** Width of the map in metres at the current scale */
  get width_metres() {
    return this.unit ? this.map.view_box.width / this.unit : 0;
  }
  get dirty() {
    return this._state() !== this._saved;
  }
  get can_undo() {
    return this._undo.length > 0;
  }
  get can_redo() {
    return this._redo.length > 0;
  }
  /** Replace every annotation with what detection works out. */
  detect() {
    return this._change(() => {
      this.detected = detectMap3D(this.map, __spreadProps(__spreadValues({}, this._options), {
        heights: this._heights()
      }));
      return this.detected;
    });
  }
  /** Give elements a kind. Without a height they take the height in use for that kind. */
  assign(elements, kind, height) {
    if (!elements.length)
      return;
    this._change(() => assignAnnotation(elements, {
      kind,
      height: height ?? this.kindHeight(kind)
    }));
  }
  /** Set the scale from the real width of the map in metres. */
  setWidthMetres(metres) {
    if (!(metres > 0))
      return;
    this._change(() => setMapUnit(this.map.svg, this.map.view_box.width / metres));
  }
  /** The height in metres most elements of a kind have. */
  kindHeight(kind) {
    if (FLOOR_KINDS.has(kind))
      return 0;
    const tally = /* @__PURE__ */ new Map();
    for (const element of this._annotated()) {
      const annotation = ownAnnotation(element);
      if (annotation?.kind !== kind)
        continue;
      tally.set(annotation.height, (tally.get(annotation.height) || 0) + 1);
    }
    let height = DEFAULT_HEIGHTS[kind];
    let most = 0;
    for (const [value, count] of tally) {
      if (count > most) {
        height = value;
        most = count;
      }
    }
    return height;
  }
  /** Change the height of every element of a kind that has the kind's usual height. */
  setKindHeight(kind, height) {
    if (FLOOR_KINDS.has(kind) || !(height > 0))
      return;
    height = Math.min(MAX_HEIGHT, height);
    const current = this.kindHeight(kind);
    const usual = this._annotated().filter((element) => {
      const annotation = ownAnnotation(element);
      return annotation?.kind === kind && annotation.height === current;
    });
    if (!usual.length || height === current)
      return;
    this._change(() => {
      for (const element of usual) {
        setAnnotation(element, __spreadProps(__spreadValues({}, ownAnnotation(element)), { height }));
      }
    });
  }
  /** Drawn elements of each kind */
  counts() {
    const counts = Object.fromEntries(MAP_3D_KINDS.map((kind) => [kind, 0]));
    for (const shape of this.map.shapes) {
      counts[effectiveAnnotation(shape.element)?.kind || "flat"]++;
    }
    return counts;
  }
  kindOf(element) {
    return effectiveAnnotation(element)?.kind || "flat";
  }
  heightOf(element) {
    return effectiveAnnotation(element)?.height || 0;
  }
  /** The drawn elements inside an element, or the element itself when it is one. */
  shapesIn(element) {
    const own = this._shape_by_element.get(element);
    if (own)
      return [own];
    return this.map.shapes.filter((shape) => element.contains(shape.element));
  }
  /**
   * Groups of the map from the root down: named groups, and unnamed ones
   * directly below the root.
   */
  layers() {
    const counts = /* @__PURE__ */ new Map();
    for (const shape of this.map.shapes) {
      const kind = this.kindOf(shape.element);
      let current = shape.element.parentElement;
      while (current && current !== this.map.svg) {
        let tally = counts.get(current);
        if (!tally)
          counts.set(current, tally = /* @__PURE__ */ new Map());
        tally.set(kind, (tally.get(kind) || 0) + 1);
        current = current.parentElement;
      }
    }
    const layers = [];
    const visit = (parent, depth) => {
      for (const element of Array.from(parent.children)) {
        const tally = counts.get(element);
        if (!tally || element.localName !== "g")
          continue;
        const name = layerName(element);
        if (!name && depth > 0) {
          visit(element, depth);
          continue;
        }
        const layer = {
          element,
          name,
          depth,
          count: [...tally.values()].reduce((a, b) => a + b, 0),
          kind: tally.size === 1 ? [...tally.keys()][0] : "mixed",
          hidden: element.hasAttribute(HIDDEN_ATTR),
          has_children: false
        };
        layers.push(layer);
        const before = layers.length;
        visit(element, depth + 1);
        layer.has_children = layers.length > before;
      }
    };
    visit(this.map.svg, 0);
    return layers;
  }
  /** Named groups an element is inside, outermost first. */
  ancestors(element) {
    const list = [];
    let current = element.parentElement;
    while (current && current !== this.map.svg) {
      if (current.localName === "g")
        list.unshift(current);
      current = current.parentElement;
    }
    return list;
  }
  /** Drawn elements that look like the given one: same tag, class and paint. */
  similar(shape) {
    const signature = this._signature(shape);
    return this.map.shapes.filter((other) => this._signature(other) === signature);
  }
  undo() {
    const snapshot = this._undo.pop();
    if (!snapshot)
      return;
    this._redo.push(this._snapshot());
    this._restore(snapshot);
  }
  redo() {
    const snapshot = this._redo.pop();
    if (!snapshot)
      return;
    this._undo.push(this._snapshot());
    this._restore(snapshot);
  }
  /** Take the 3D view off the map. */
  remove() {
    this._change(() => {
      this.map.svg.removeAttribute(UNIT_ATTR);
      clearAnnotations(this.map.svg);
    });
  }
  /** Hide or show an element in the preview. Not saved and not undone. */
  setHidden(element, hidden) {
    if (hidden)
      element.setAttribute(HIDDEN_ATTR, "");
    else
      element.removeAttribute(HIDDEN_ATTR);
    this.onChange?.();
  }
  /** The map as SVG text with its annotations */
  serialise() {
    const svg = this.map.svg.cloneNode(true);
    for (const element of Array.from(svg.querySelectorAll(`[${HIDDEN_ATTR}]`))) {
      element.removeAttribute(HIDDEN_ATTR);
    }
    this._serialised = { state: this._state(), unit: this.unit };
    return new XMLSerializer().serializeToString(svg);
  }
  /**
   * Record the map as saved, as it was when it was last serialised.
   * Changes made since then stay unsaved.
   */
  markSaved() {
    const { state, unit } = this._serialised || {
      state: this._state(),
      unit: this.unit
    };
    this._saved = state;
    this._saved_unit = unit;
  }
  /** Put the annotations back to how they were when opened or last saved. */
  revert() {
    if (!this.dirty)
      return;
    const saved = this._saved;
    this._change(() => {
      clearAnnotations(this.map.svg);
      this.map.svg.removeAttribute(UNIT_ATTR);
      const elements = Array.from(this.map.svg.querySelectorAll("*"));
      for (const part of saved.split(";")) {
        const [index, kind, height, base] = part.split(",");
        if (index.startsWith("unit:")) {
          const unit = index.slice(5);
          if (parseFloat(unit) > 0) {
            this.map.svg.setAttribute(UNIT_ATTR, unit);
          }
          continue;
        }
        const element = elements[parseInt(index, 10)];
        if (!element)
          continue;
        if (kind)
          element.setAttribute(KIND_ATTR, kind);
        if (height)
          element.setAttribute(HEIGHT_ATTR, height);
        if (base)
          element.setAttribute(BASE_ATTR, base);
      }
    });
  }
  _annotated() {
    return Array.from(this.map.svg.querySelectorAll(ANNOTATED));
  }
  _heights() {
    const heights = {};
    for (const kind of MAP_3D_KINDS)
      heights[kind] = this.kindHeight(kind);
    return heights;
  }
  _signature(shape) {
    const { styles } = this.map;
    const element = shape.element;
    return [
      element.localName,
      element.getAttribute("class") || "",
      shape.has_fill ? styles.inherited(element, "fill", "black") : "none",
      shape.has_stroke ? styles.inherited(element, "stroke", "") : "none",
      shape.has_stroke ? shape.stroke_width.toFixed(2) : "",
      shape.opacity.toFixed(2)
    ].join("|");
  }
  _snapshot() {
    const snapshot = [
      [this.map.svg, this.map.svg.getAttribute(UNIT_ATTR), null, null]
    ];
    for (const element of this._annotated()) {
      snapshot.push([
        element,
        element.getAttribute(KIND_ATTR),
        element.getAttribute(HEIGHT_ATTR),
        element.getAttribute(BASE_ATTR)
      ]);
    }
    return snapshot;
  }
  _restore(snapshot) {
    clearAnnotations(this.map.svg);
    for (const [element, first, height, base] of snapshot) {
      if (element === this.map.svg) {
        if (first)
          element.setAttribute(UNIT_ATTR, first);
        else
          element.removeAttribute(UNIT_ATTR);
        continue;
      }
      clearAnnotation(element);
      if (first !== null)
        element.setAttribute(KIND_ATTR, first);
      if (height !== null)
        element.setAttribute(HEIGHT_ATTR, height);
      if (base !== null)
        element.setAttribute(BASE_ATTR, base);
    }
    this.onChange?.();
  }
  /** Annotations as text, to tell whether anything differs from the saved map */
  _state() {
    const elements = Array.from(this.map.svg.querySelectorAll("*"));
    const index = new Map(elements.map((element, i) => [element, i]));
    const parts = [`unit:${this.unit}`];
    for (const element of this._annotated()) {
      parts.push([
        index.get(element),
        element.getAttribute(KIND_ATTR) || "",
        element.getAttribute(HEIGHT_ATTR) || "",
        element.getAttribute(BASE_ATTR) || ""
      ].join(","));
    }
    return parts.join(";");
  }
  _change(change) {
    const before = this._snapshot();
    const result = change();
    this._undo.push(before);
    if (this._undo.length > MAX_HISTORY)
      this._undo.shift();
    this._redo = [];
    this.onChange?.();
    return result;
  }
};

// apps/concierge/src/app/map-manager/map-3d-page.component.ts
var _c0 = ["map"];
var _c1 = () => [];
var _c2 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.element;
var _forTrack2 = ($index, $item) => $item.index;
function Map3DPageComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.building()?.display_name || ctx_r0.building()?.name, " \xB7 ");
  }
}
function Map3DPageComponent_Conditional_14_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_14_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove());
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 25);
    \u0275\u0275text(3, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.MAPS_3D_REMOVE"));
  }
}
function Map3DPageComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.undo());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "undo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_14_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.redo());
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "redo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-menu", 22, 1)(21, "button", 23);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_14_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.detect());
    });
    \u0275\u0275elementStart(22, "div", 24)(23, "icon", 25);
    \u0275\u0275text(24, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, Map3DPageComponent_Conditional_14_Conditional_28_Template, 7, 3, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 27);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_14_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.discard());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 28);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_14_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const more_menu_r4 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-warning", ctx_r0.dirty())("bg-success", !ctx_r0.dirty());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 21, ctx_r0.dirty() ? "APP.CONCIERGE.MAPS_3D_UNSAVED" : "APP.CONCIERGE.MAPS_3D_SAVED_STATE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.can_undo())("matTooltip", \u0275\u0275pipeBind1(5, 23, "APP.CONCIERGE.MAPS_3D_UNDO"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 25, "APP.CONCIERGE.MAPS_3D_UNDO"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r0.can_redo())("matTooltip", \u0275\u0275pipeBind1(10, 27, "APP.CONCIERGE.MAPS_3D_REDO"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 29, "APP.CONCIERGE.MAPS_3D_REDO"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !!ctx_r0.saving())("matMenuTriggerFor", more_menu_r4)("matTooltip", \u0275\u0275pipeBind1(15, 31, "COMMON.MORE_OPTIONS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 33, "COMMON.MORE_OPTIONS"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 35, "APP.CONCIERGE.MAPS_3D_DETECT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.has_saved_3d() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.dirty() || !!ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 37, "APP.CONCIERGE.MAPS_DISCARD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.dirty() || !!ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving() || \u0275\u0275pipeBind1(34, 39, "COMMON.SAVE"), " ");
  }
}
function Map3DPageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 31);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function Map3DPageComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function Map3DPageComponent_For_18_Template_button_click_0_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.narrow_tab.set(tab_r6.id));
    })("keydown", function Map3DPageComponent_For_18_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTabKeydown($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-transparent", ctx_r0.narrow_tab() !== tab_r6.id)("opacity-70", ctx_r0.narrow_tab() !== tab_r6.id)("border-secondary", ctx_r0.narrow_tab() === tab_r6.id)("font-medium", ctx_r0.narrow_tab() === tab_r6.id);
    \u0275\u0275property("id", "map-3d-tab-" + tab_r6.id);
    \u0275\u0275attribute("aria-controls", "map-3d-" + tab_r6.id)("aria-selected", ctx_r0.narrow_tab() === tab_r6.id)("tabindex", ctx_r0.narrow_tab() === tab_r6.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 13, tab_r6.name), " ");
  }
}
function Map3DPageComponent_Conditional_21_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 46);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_21_For_6_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectKind(option_r9.id));
    });
    \u0275\u0275element(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected-chip", ctx_r0.isKindSelected(option_r9.id));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 8, "APP.CONCIERGE.MAPS_3D_SELECT_KIND"));
    \u0275\u0275attribute("aria-pressed", ctx_r0.isKindSelected(option_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", option_r9.colour);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, option_r9.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.counts()[option_r9.id]);
  }
}
function Map3DPageComponent_Conditional_21_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Map3DPageComponent_Conditional_21_For_6_Conditional_0_Template, 8, 12, "li");
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.counts()[option_r9.id] ? 0 : -1);
  }
}
function Map3DPageComponent_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.MAPS_3D_AUTO_HINT"), " ");
  }
}
function Map3DPageComponent_Conditional_21_For_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 49);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.MAPS_3D_WALL_TIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.MAPS_3D_WALL_TIP"));
  }
}
function Map3DPageComponent_Conditional_21_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 24);
    \u0275\u0275element(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275conditionalCreate(5, Map3DPageComponent_Conditional_21_For_30_Conditional_5_Template, 4, 6, "icon", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39)(7, "input", 50);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("change", function Map3DPageComponent_Conditional_21_For_30_Template_input_change_7_listener($event) {
      const option_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setKindHeight(option_r11.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10, "m");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", option_r11.colour);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, option_r11.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(option_r11.id === "wall" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "height-" + option_r11.id)("ngModel", ctx_r0.heights()[option_r11.id]);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 9, option_r11.name));
    \u0275\u0275control();
  }
}
function Map3DPageComponent_Conditional_21_For_40_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.MAPS_3D_MIXED"), " ");
  }
}
function Map3DPageComponent_Conditional_21_For_40_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    \u0275\u0275property("value", option_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, option_r14.name), " ");
  }
}
function Map3DPageComponent_Conditional_21_For_40_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63)(1, "button", 64);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_21_For_40_Conditional_21_For_2_Template_button_click_1_listener($event) {
      const shape_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectElement(shape_r16.element, $event.shiftKey));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const shape_r16 = ctx.$implicit;
    const layer_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-left", (layer_r13.depth + 1) * 0.75 + 1.75, "rem");
    \u0275\u0275classProp("selected-row", ctx_r0.isTarget(shape_r16.element));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-pressed", ctx_r0.isTarget(shape_r16.element));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.shape_names().get(shape_r16.element), " ");
  }
}
function Map3DPageComponent_Conditional_21_For_40_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const shapes_r17 = \u0275\u0275readContextLet(0);
    const layer_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-left", (layer_r13.depth + 1) * 0.75 + 1.75, "rem");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, "APP.CONCIERGE.MAPS_3D_MORE_SHAPES", \u0275\u0275pureFunction1(6, _c2, shapes_r17.length - ctx_r0.max_listed_shapes)), " ");
  }
}
function Map3DPageComponent_Conditional_21_For_40_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275repeaterCreate(1, Map3DPageComponent_Conditional_21_For_40_Conditional_21_For_2_Template, 3, 6, "li", 61, _forTrack2);
    \u0275\u0275conditionalCreate(3, Map3DPageComponent_Conditional_21_For_40_Conditional_21_Conditional_3_Template, 3, 8, "li", 62);
  }
  if (rf & 2) {
    const layer_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const shapes_r18 = \u0275\u0275storeLet(ctx_r0.layer_shapes().get(layer_r13.element) || \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance();
    \u0275\u0275repeater(shapes_r18.slice(0, ctx_r0.max_listed_shapes));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(shapes_r18.length > ctx_r0.max_listed_shapes ? 3 : -1);
  }
}
function Map3DPageComponent_Conditional_21_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 51)(1, "button", 52);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_21_For_40_Template_button_click_1_listener() {
      const layer_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleLayer(layer_r13.element));
    });
    \u0275\u0275elementStart(3, "icon", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "span", 54);
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_21_For_40_Template_button_click_6_listener($event) {
      const layer_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectElement(layer_r13.element, $event.shiftKey));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 57);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_21_For_40_Template_button_click_11_listener() {
      const layer_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleHidden(layer_r13));
    });
    \u0275\u0275elementStart(14, "icon", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 58);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("ngModelChange", function Map3DPageComponent_Conditional_21_For_40_Template_select_ngModelChange_16_listener($event) {
      const layer_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.assignLayer(layer_r13, $event));
    });
    \u0275\u0275conditionalCreate(18, Map3DPageComponent_Conditional_21_For_40_Conditional_18_Template, 3, 3, "option", 59);
    \u0275\u0275repeaterCreate(19, Map3DPageComponent_Conditional_21_For_40_For_20_Template, 3, 4, "option", 60, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, Map3DPageComponent_Conditional_21_For_40_Conditional_21_Template, 4, 3);
  }
  if (rf & 2) {
    const layer_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-left", layer_r13.depth * 0.75, "rem");
    \u0275\u0275classProp("selected-row", ctx_r0.isTarget(layer_r13.element));
    \u0275\u0275advance();
    \u0275\u0275classProp("invisible", !layer_r13.has_children && !ctx_r0.layer_shapes().has(layer_r13.element));
    \u0275\u0275attribute("aria-expanded", ctx_r0.expanded().has(layer_r13.element))("aria-label", \u0275\u0275pipeBind1(2, 26, "APP.CONCIERGE.MAPS_3D_EXPAND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.expanded().has(layer_r13.element) ? "expand_more" : "chevron_right");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.kind_colours[layer_r13.kind]);
    \u0275\u0275classProp("border", layer_r13.kind === "mixed");
    \u0275\u0275advance();
    \u0275\u0275property("title", layer_r13.name);
    \u0275\u0275attribute("aria-pressed", ctx_r0.isTarget(layer_r13.element));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", layer_r13.name || \u0275\u0275pipeBind1(8, 28, "APP.CONCIERGE.MAPS_3D_UNNAMED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(layer_r13.count);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", layer_r13.hidden);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 30, layer_r13.hidden ? "APP.CONCIERGE.MAPS_3D_SHOW" : "APP.CONCIERGE.MAPS_3D_HIDE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 32, layer_r13.hidden ? "APP.CONCIERGE.MAPS_3D_SHOW" : "APP.CONCIERGE.MAPS_3D_HIDE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(layer_r13.hidden ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", layer_r13.kind);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 34, "APP.CONCIERGE.MAPS_3D_KIND"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(layer_r13.kind === "mixed" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.kinds);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.expanded().has(layer_r13.element) ? 21 : -1);
  }
}
function Map3DPageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 34)(1, "h2", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 36);
    \u0275\u0275repeaterCreate(5, Map3DPageComponent_Conditional_21_For_6_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Map3DPageComponent_Conditional_21_Conditional_7_Template, 3, 3, "p", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "section", 34)(9, "h2", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 38)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 39)(17, "input", 40);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("change", function Map3DPageComponent_Conditional_21_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setWidth($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(19, "span", 41);
    \u0275\u0275text(20, "m");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "p", 42);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "section", 34)(25, "h2", 35);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 43);
    \u0275\u0275repeaterCreate(29, Map3DPageComponent_Conditional_21_For_30_Template, 11, 11, "div", 38, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 42);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "section", 44)(35, "h2", 35);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ul", 45);
    \u0275\u0275repeaterCreate(39, Map3DPageComponent_Conditional_21_For_40_Template, 22, 36, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 42);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "APP.CONCIERGE.MAPS_3D_FOUND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.kinds);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.auto_converted() ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.MAPS_3D_SCALE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "APP.CONCIERGE.MAPS_3D_WIDTH"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.width_metres());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 19, "APP.CONCIERGE.MAPS_3D_WIDTH"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 21, "APP.CONCIERGE.MAPS_3D_WIDTH_HINT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 23, "APP.CONCIERGE.MAPS_3D_HEIGHTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.raised_kinds);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 25, "APP.CONCIERGE.MAPS_3D_HEIGHTS_HINT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx_r0.layers().length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 27, "APP.CONCIERGE.MAPS_3D_LAYERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.visible_layers());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 29, "APP.CONCIERGE.MAPS_3D_LAYERS_HINT"), " ");
  }
}
function Map3DPageComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function Map3DPageComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading(), " ");
  }
}
function Map3DPageComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68)(4, "div", 69);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "button", 70);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPlanView(false));
    });
    \u0275\u0275text(7, " 3D ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 70);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPlanView(true));
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 71)(12, "button", 72);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rotate(-45));
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "rotate_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 72);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rotate(45));
    });
    \u0275\u0275elementStart(20, "icon");
    \u0275\u0275text(21, "rotate_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 72);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zoomBy(1.25));
    });
    \u0275\u0275elementStart(25, "icon");
    \u0275\u0275text(26, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 72);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zoomBy(0.8));
    });
    \u0275\u0275elementStart(30, "icon");
    \u0275\u0275text(31, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 72);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_28_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetView());
    });
    \u0275\u0275elementStart(35, "icon");
    \u0275\u0275text(36, "refresh");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 23, "APP.CONCIERGE.MAPS_3D_PICK_HINT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 25, "APP.CONCIERGE.MAPS_3D_VIEW"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", !ctx_r0.plan_view())("text-secondary-content", !ctx_r0.plan_view());
    \u0275\u0275attribute("aria-pressed", !ctx_r0.plan_view());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ctx_r0.plan_view())("text-secondary-content", ctx_r0.plan_view());
    \u0275\u0275attribute("aria-pressed", ctx_r0.plan_view());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 27, "APP.CONCIERGE.MAPS_3D_PLAN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 29, "EXPLORE.ROTATE_LEFT"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 31, "EXPLORE.ROTATE_LEFT"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 33, "EXPLORE.ROTATE_RIGHT"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 35, "EXPLORE.ROTATE_RIGHT"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(23, 37, "EXPLORE.ZOOM_IN"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 39, "EXPLORE.ZOOM_IN"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(28, 41, "EXPLORE.ZOOM_OUT"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 43, "EXPLORE.ZOOM_OUT"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(33, 45, "EXPLORE.ZOOM_RESET"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 47, "EXPLORE.ZOOM_RESET"));
  }
}
function Map3DPageComponent_Conditional_29_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_29_Conditional_6_For_2_Template_button_click_0_listener() {
      const step_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectElement(step_r22.element));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 83);
    \u0275\u0275text(3, "\u203A");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r22.name, " ");
  }
}
function Map3DPageComponent_Conditional_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275repeaterCreate(1, Map3DPageComponent_Conditional_29_Conditional_6_For_2_Template, 4, 1, null, null, _forTrack1);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.path());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.path_leaf());
  }
}
function Map3DPageComponent_Conditional_29_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_29_For_21_Template_button_click_0_listener() {
      const option_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.assign(option_r24.id));
    });
    \u0275\u0275element(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r24 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r0.selection_kind() === option_r24.id)("!text-secondary-content", ctx_r0.selection_kind() === option_r24.id);
    \u0275\u0275attribute("aria-pressed", ctx_r0.selection_kind() === option_r24.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", option_r24.colour);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, option_r24.name), " ");
  }
}
function Map3DPageComponent_Conditional_29_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 85);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("change", function Map3DPageComponent_Conditional_29_Conditional_22_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setSelectionHeight($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7, "m");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.MAPS_3D_HEIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.selection_height());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "APP.CONCIERGE.MAPS_3D_HEIGHT"));
    \u0275\u0275control();
  }
}
function Map3DPageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 24)(2, "div", 73)(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, Map3DPageComponent_Conditional_29_Conditional_6_Template, 5, 1, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 76);
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectSimilar());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 77);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function Map3DPageComponent_Conditional_29_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.clearSelection();
      return \u0275\u0275resetView(ctx_r0.focusPreview());
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 78);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 79);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, Map3DPageComponent_Conditional_29_For_21_Template, 4, 10, "button", 80, _forTrack0);
    \u0275\u0275conditionalCreate(22, Map3DPageComponent_Conditional_29_Conditional_22_Template, 8, 7, "div", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 8, "APP.CONCIERGE.MAPS_3D_SELECTED", \u0275\u0275pureFunction1(21, _c2, ctx_r0.selected().length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.path().length ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "APP.CONCIERGE.MAPS_3D_SIMILAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 13, "APP.CONCIERGE.MAPS_3D_CLEAR"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 15, "APP.CONCIERGE.MAPS_3D_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 17, "APP.CONCIERGE.MAPS_3D_KIND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "APP.CONCIERGE.MAPS_3D_KIND"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.kinds);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.selection_raised() ? 22 : -1);
  }
}
var MAP_3D_KIND_OPTIONS = [
  { id: "wall", name: "APP.CONCIERGE.MAPS_3D_KIND_WALL", colour: "#475569" },
  {
    id: "glass",
    name: "APP.CONCIERGE.MAPS_3D_KIND_GLASS",
    colour: "#38bdf8"
  },
  {
    id: "partition",
    name: "APP.CONCIERGE.MAPS_3D_KIND_PARTITION",
    colour: "#94a3b8"
  },
  { id: "desk", name: "APP.CONCIERGE.MAPS_3D_KIND_DESK", colour: "#22c55e" },
  { id: "seat", name: "APP.CONCIERGE.MAPS_3D_KIND_SEAT", colour: "#f59e0b" },
  {
    id: "furniture",
    name: "APP.CONCIERGE.MAPS_3D_KIND_FURNITURE",
    colour: "#a855f7"
  },
  {
    id: "space",
    name: "APP.CONCIERGE.MAPS_3D_KIND_SPACE",
    colour: "#14b8a6"
  },
  {
    id: "label",
    name: "APP.CONCIERGE.MAPS_3D_KIND_LABEL",
    colour: "#ec4899"
  },
  { id: "flat", name: "APP.CONCIERGE.MAPS_3D_KIND_FLAT", colour: "#cbd5e1" }
];
var KIND_COLOURS = __spreadProps(__spreadValues({}, Object.fromEntries(MAP_3D_KIND_OPTIONS.map((option) => [option.id, option.colour]))), {
  mixed: "transparent"
});
var RAISED_KINDS = MAP_3D_KIND_OPTIONS.filter((option) => !FLOOR_KINDS.has(option.id));
var Map3DPageComponent = class _Map3DPageComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._manager = inject(MapManagementService);
    this._zone = inject(NgZone);
    this._map = viewChild(
      "map",
      ...ngDevMode ? [{ debugName: "_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._render_check = new BrowserRenderCheck();
    this._createViewer = (container) => new Map3DViewer(container);
    this._session = null;
    this._viewer = null;
    this._loaded_map_id = "";
    this._edited = false;
    this._revision = signal(
      0,
      ...ngDevMode ? [{ debugName: "_revision" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.kinds = MAP_3D_KIND_OPTIONS;
    this.raised_kinds = RAISED_KINDS;
    this.kind_colours = KIND_COLOURS;
    this.max_listed_shapes = 200;
    this.narrow_tabs = [
      { id: "map", name: "COMMON.MAP" },
      { id: "details", name: "COMMON.DETAILS" }
    ];
    this.narrow_tab = signal(
      "map",
      ...ngDevMode ? [{ debugName: "narrow_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "level_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = signal(
      null,
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      "",
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_converted = signal(
      false,
      ...ngDevMode ? [{ debugName: "auto_converted" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plan_view = signal(
      false,
      ...ngDevMode ? [{ debugName: "plan_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.targets = signal(
      [],
      ...ngDevMode ? [{ debugName: "targets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = computed(
      () => this._manager.building(this.level() || void 0),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dirty = computed(
      () => !!this._revision() && !!this._session?.dirty,
      ...ngDevMode ? [{ debugName: "dirty" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_undo = computed(
      () => !!this._revision() && !!this._session?.can_undo,
      ...ngDevMode ? [{ debugName: "can_undo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_redo = computed(
      () => !!this._revision() && !!this._session?.can_redo,
      ...ngDevMode ? [{ debugName: "can_redo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_saved_3d = computed(
      () => !!this._revision() && !!this._session?.has_saved_3d,
      ...ngDevMode ? [{ debugName: "has_saved_3d" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.counts = computed(
      () => {
        this._revision();
        return this._session?.counts() || {};
      },
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.width_metres = computed(
      () => {
        this._revision();
        return Math.round((this._session?.width_metres || 0) * 10) / 10;
      },
      ...ngDevMode ? [{ debugName: "width_metres" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heights = computed(
      () => {
        this._revision();
        const heights = {};
        for (const kind of MAP_3D_KINDS) {
          heights[kind] = toStep(this._session?.kindHeight(kind) || 0);
        }
        return heights;
      },
      ...ngDevMode ? [{ debugName: "heights" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layers = computed(
      () => {
        this._revision();
        return this._session?.layers() || [];
      },
      ...ngDevMode ? [{ debugName: "layers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_layers = computed(
      () => {
        const expanded = this.expanded();
        const visible = [];
        let hidden_below = Infinity;
        for (const layer of this.layers()) {
          if (layer.depth > hidden_below)
            continue;
          hidden_below = Infinity;
          visible.push(layer);
          if (layer.has_children && !expanded.has(layer.element)) {
            hidden_below = layer.depth;
          }
        }
        return visible;
      },
      ...ngDevMode ? [{ debugName: "visible_layers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layer_shapes = computed(
      () => {
        const session = this._session;
        const by_layer = /* @__PURE__ */ new Map();
        if (!session)
          return by_layer;
        const listed = new Set(this.layers().map((layer) => layer.element));
        for (const shape of session.map.shapes) {
          let current = shape.element.parentElement;
          while (current && !listed.has(current)) {
            current = current.parentElement;
          }
          if (!current)
            continue;
          const shapes = by_layer.get(current) || [];
          shapes.push(shape);
          by_layer.set(current, shapes);
        }
        return by_layer;
      },
      ...ngDevMode ? [{ debugName: "layer_shapes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shape_names = computed(
      () => {
        this._revision();
        const session = this._session;
        const names = /* @__PURE__ */ new Map();
        if (!session)
          return names;
        const by_layer = this.layer_shapes();
        for (const layer of this.expanded()) {
          const shapes = (by_layer.get(layer) || []).slice(0, this.max_listed_shapes);
          const counts = /* @__PURE__ */ new Map();
          for (const { element } of shapes) {
            const kind = session.kindOf(element);
            const count = (counts.get(kind) || 0) + 1;
            counts.set(kind, count);
            names.set(element, nameOf(element) || kindName(kind, count));
          }
        }
        return names;
      },
      ...ngDevMode ? [{ debugName: "shape_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = computed(
      () => {
        const session = this._session;
        if (!session)
          return [];
        const shapes = /* @__PURE__ */ new Set();
        for (const element of this.targets()) {
          for (const shape of session.shapesIn(element))
            shapes.add(shape);
        }
        return [...shapes];
      },
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection_kind = computed(
      () => {
        this._revision();
        const kinds = new Set(this.selected().map((shape) => this._session.kindOf(shape.element)));
        return kinds.size === 1 ? [...kinds][0] : null;
      },
      ...ngDevMode ? [{ debugName: "selection_kind" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection_raised = computed(
      () => {
        const kind = this.selection_kind();
        return !!kind && !FLOOR_KINDS.has(kind);
      },
      ...ngDevMode ? [{ debugName: "selection_raised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection_height = computed(
      () => {
        this._revision();
        const heights = new Set(this.selected().map((shape) => this._session.heightOf(shape.element)));
        return heights.size === 1 ? toStep([...heights][0]) : null;
      },
      ...ngDevMode ? [{ debugName: "selection_height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        const [target, ...others] = this.targets();
        if (!target || others.length || !this._session)
          return [];
        return this._session.ancestors(target).map((element) => ({ element, name: nameOf(element) })).filter((step) => !!step.name);
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path_leaf = computed(
      () => {
        const [target] = this.targets();
        if (!target)
          return "";
        this._revision();
        return nameOf(target) || this.shape_names().get(target) || (this._session ? kindName(this._session.kindOf(target)) : "");
      },
      ...ngDevMode ? [{ debugName: "path_leaf" }] : (
        /* istanbul ignore next */
        []
      )
    );
    inject(DestroyRef).onDestroy(() => this._viewer?.destroy());
  }
  /** A conversion the page ran itself, with nothing changed by the user since, is not held back. */
  hasUnsavedChanges() {
    return this.dirty() && this._edited;
  }
  /** Asks the browser to confirm leaving only while there are unsaved changes. */
  onBeforeUnload(event) {
    if (this.hasUnsavedChanges())
      event.preventDefault();
  }
  onKeydown(event) {
    const target = event.target;
    if (target && ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName)) {
      return;
    }
    if (event.key === "Escape")
      return this.clearSelection();
    if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "z") {
      return;
    }
    event.preventDefault();
    if (event.shiftKey)
      this.redo();
    else
      this.undo();
  }
  async ngOnInit() {
    this.loading.set(i18n("APP.CONCIERGE.MAPS_LOADING"));
    this.level_id.set(this._route.snapshot.paramMap.get("level_id") || "");
    await this._org.waitUntilInitialised();
    const level = this._manager.level(this.level_id());
    if (!level) {
      this.error.set(i18n("APP.CONCIERGE.MAPS_NO_LEVEL"));
      return;
    }
    this.level.set(level);
    if (!level.map_id) {
      this.error.set(i18n("APP.CONCIERGE.MAPS_NO_MAP"));
      return;
    }
    this._loaded_map_id = level.map_id;
    try {
      await this._load(level);
    } catch (error) {
      this.error.set(`${i18n("APP.CONCIERGE.MAPS_LOAD_ERROR")} ${errorText(error)}`);
    } finally {
      this.loading.set("");
    }
  }
  detect() {
    this._session?.detect();
    this.clearSelection();
  }
  undo() {
    this._session?.undo();
  }
  redo() {
    this._session?.redo();
  }
  async remove() {
    const ok = await this._confirm(i18n("APP.CONCIERGE.MAPS_3D_REMOVE_TITLE"), i18n("APP.CONCIERGE.MAPS_3D_REMOVE_MSG"), i18n("APP.CONCIERGE.MAPS_3D_REMOVE"));
    if (!ok)
      return;
    this._session?.remove();
    this.clearSelection();
  }
  async discard() {
    if (!this._session?.dirty)
      return;
    const ok = await this._confirm(i18n("APP.CONCIERGE.MAPS_DISCARD_TITLE"), i18n("APP.CONCIERGE.MAPS_DISCARD_MSG"), i18n("APP.CONCIERGE.MAPS_DISCARD_CONFIRM"));
    if (!ok)
      return;
    this._session.revert();
    this.auto_converted.set(false);
    this.clearSelection();
  }
  setWidth(value) {
    const metres = parseFloat(value);
    if (metres > 0)
      this._session?.setWidthMetres(metres);
  }
  setKindHeight(kind, value) {
    const height = parseFloat(value);
    if (height > 0)
      this._session?.setKindHeight(kind, height);
  }
  assign(kind) {
    this._session?.assign(this.targets(), kind);
  }
  assignLayer(layer, kind) {
    if (kind === "mixed")
      return;
    this._session?.assign([layer.element], kind);
  }
  setSelectionHeight(value) {
    const height = parseFloat(value);
    const kind = this.selection_kind();
    if (!(height > 0) || !kind)
      return;
    this._session?.assign(this.targets(), kind, height);
  }
  isTarget(element) {
    return this.targets().includes(element);
  }
  /** Select an element, or with `add`, add it to the selection or take it out. */
  selectElement(element, add = false) {
    const targets = this.targets();
    if (!add)
      this.targets.set([element]);
    else if (targets.includes(element)) {
      this.targets.set(targets.filter((_) => _ !== element));
    } else
      this.targets.set([...targets, element]);
    this._showSelection();
  }
  /** The arrow keys, Home and End move between the two tabs */
  onTabKeydown(event) {
    const ids = this.narrow_tabs.map((tab) => tab.id);
    const index = ids.indexOf(this.narrow_tab());
    const next = {
      ArrowLeft: ids[(index + ids.length - 1) % ids.length],
      ArrowRight: ids[(index + 1) % ids.length],
      Home: ids[0],
      End: ids[ids.length - 1]
    }[event.key];
    if (!next)
      return;
    event.preventDefault();
    this.narrow_tab.set(next);
    document.getElementById(`map-3d-tab-${next}`)?.focus();
  }
  focusPreview() {
    this._map()?.nativeElement.focus();
  }
  /** Pan with the arrow keys and zoom with + and - while the preview has focus */
  onPreviewKeydown(event) {
    if (event.ctrlKey || event.metaKey || event.altKey)
      return;
    const viewer = this._viewer;
    if (!viewer)
      return;
    const changes = {
      ArrowUp: () => viewer.panBy(0, -1),
      ArrowDown: () => viewer.panBy(0, 1),
      ArrowLeft: () => viewer.panBy(-1, 0),
      ArrowRight: () => viewer.panBy(1, 0),
      "+": () => this.zoomBy(1.25),
      "=": () => this.zoomBy(1.25),
      "-": () => this.zoomBy(0.8)
    };
    if (!changes[event.key])
      return;
    event.preventDefault();
    changes[event.key]();
  }
  /** Select every drawn element of a kind */
  selectKind(kind) {
    const session = this._session;
    if (!session)
      return;
    this.targets.set(session.map.shapes.filter((shape) => session.kindOf(shape.element) === kind).map((shape) => shape.element));
    this._showSelection();
  }
  /** Whether the selection is every drawn element of a kind */
  isKindSelected(kind) {
    return this.selection_kind() === kind && this.selected().length === this.counts()[kind];
  }
  selectSimilar() {
    const session = this._session;
    const [first] = this.selected();
    if (!session || !first)
      return;
    this.targets.set(session.similar(first).map((shape) => shape.element));
    this._showSelection();
  }
  clearSelection() {
    this.targets.set([]);
    this._showSelection();
  }
  /** Hide a layer in the preview, or show it again. The saved map keeps it. */
  toggleHidden(layer) {
    const edited = this._edited;
    this._session?.setHidden(layer.element, !layer.hidden);
    this._edited = edited;
  }
  toggleLayer(element) {
    this.expanded.update((expanded) => {
      const next = new Set(expanded);
      if (!next.delete(element))
        next.add(element);
      return next;
    });
  }
  setPlanView(plan) {
    this.plan_view.set(plan);
    this._viewer?.setAngles(plan ? 0 : DEFAULT_TILT, plan ? 0 : this._viewer.bearing);
  }
  rotate(degrees) {
    const viewer = this._viewer;
    if (!viewer)
      return;
    viewer.turnBy(degrees);
  }
  zoomBy(factor) {
    this._viewer?.setZoom(this._viewer.zoom * factor);
  }
  resetView() {
    this.plan_view.set(false);
    this._viewer?.resetView();
  }
  async save() {
    const session = this._session;
    const level = this.level();
    if (!session || !level || !session.dirty || this.saving())
      return;
    this.saving.set(i18n("COMMON.SAVING"));
    try {
      const current_map_id = await this._manager.currentMapId(level.id);
      if (current_map_id !== this._loaded_map_id) {
        const ok = await this._confirm(i18n("APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_TITLE"), i18n("APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_MSG"), i18n("APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_CONFIRM"));
        if (!ok)
          return;
      }
      const markup = session.serialise();
      const render = await this._render_check.check(markup);
      if (!render.ok) {
        notifyError(`${i18n("APP.CONCIERGE.MAPS_RENDER_ERROR")} ${render.error || ""}`);
        return;
      }
      const saved = await this._manager.saveLevelMap(level, markup, i18n(session.unit ? "APP.CONCIERGE.MAPS_3D_SUMMARY" : "APP.CONCIERGE.MAPS_3D_SUMMARY_REMOVED"));
      this._loaded_map_id = saved.map_id;
      this.level.set(this._manager.level(level.id) || level);
      session.markSaved();
      this._edited = session.dirty;
      this.auto_converted.set(false);
      this._revision.update((revision) => revision + 1);
      notifySuccess(i18n("APP.CONCIERGE.MAPS_3D_SAVED"));
    } catch (error) {
      notifyError(`${i18n("APP.CONCIERGE.MAPS_SAVE_ERROR")} ${errorText(error)}`);
    } finally {
      this.saving.set("");
    }
  }
  async _load(level) {
    const [text, bound] = await Promise.all([
      this._manager.loadMapText(level),
      collectProtectedIds(this._manager.protectedIdSources(level))
    ]);
    const ids = bound.ids();
    const session = new Map3DSession(text, {
      desk_ids: ids.filter((_) => _.kind === "desk").map((_) => _.id),
      space_ids: ids.filter((_) => _.kind === "room").map((_) => _.id),
      area_ids: ids.filter((_) => ["parking", "poi"].includes(_.kind)).map((_) => _.id)
    });
    const container = this._map()?.nativeElement;
    if (!container)
      return;
    const viewer = this._zone.runOutsideAngular(() => this._createViewer(container));
    this._session = session;
    this._viewer = viewer;
    viewer.setMapData({ raw_data: text, element_bounds: /* @__PURE__ */ new Map(), aspect_ratio: 0 }, session.map);
    viewer.onPick = (pick) => this._zone.run(() => this._pick(pick.shape, pick.event.shiftKey));
    viewer.onHover = (shape) => viewer.setHover(shape);
    session.onChange = () => {
      this._edited = this.ready();
      viewer.refresh();
      this._revision.update((revision) => revision + 1);
      this._showSelection();
    };
    if (!session.unit) {
      session.detect();
      this.auto_converted.set(true);
    }
    if (!await viewer.draw()) {
      throw new Error(i18n("APP.CONCIERGE.MAPS_3D_DRAW_ERROR"));
    }
    this._revision.update((revision) => revision + 1);
    this.ready.set(true);
  }
  _pick(shape, add) {
    if (shape)
      this.selectElement(shape.element, add);
    else if (!add)
      this.clearSelection();
  }
  _showSelection() {
    this._viewer?.setHighlight(this.selected());
  }
  async _confirm(title, content, confirm_text) {
    const ref = await openConfirmModal({ title, content, confirm_text, icon: { content: "warning" } }, this._dialog);
    ref.close();
    return ref.reason === "done";
  }
  static {
    this.\u0275fac = function Map3DPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Map3DPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Map3DPageComponent, selectors: [["", "app-map-3d-page", ""]], viewQuery: function Map3DPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._map, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function Map3DPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function Map3DPageComponent_beforeunload_HostBindingHandler($event) {
          return ctx.onBeforeUnload($event);
        }, \u0275\u0275resolveWindow)("keydown", function Map3DPageComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 30, vars: 28, consts: [["map", ""], ["more_menu", "matMenu"], [1, "border-base-200", "bg-base-100", "flex", "min-h-16", "flex-none", "flex-wrap", "items-center", "gap-x-3", "gap-y-1", "border-b", "py-2", "pr-4", "pl-2"], ["icon", "", "matRipple", "", "routerLink", "/map-management", 3, "matTooltip"], [1, "flex", "min-w-0", "flex-col", "gap-0.5"], [1, "truncate", "text-lg", "leading-6", "font-medium"], [1, "truncate", "text-xs", "leading-4", "opacity-70"], [1, "ml-auto", "flex", "flex-wrap", "items-center", "justify-end", "gap-2"], [1, "border-error/30", "bg-error/10", "mx-auto", "mt-8", "flex", "max-w-2xl", "flex-col", "items-center", "justify-center", "rounded", "border", "p-8", "text-center"], ["role", "tablist", 1, "border-base-200", "bg-base-100", "flex", "flex-none", "border-b", "md:hidden"], ["role", "tab", 1, "h-10", "flex-1", "border-b-2", "text-sm", 3, "id", "border-transparent", "opacity-70", "border-secondary", "font-medium"], [1, "flex", "min-h-0", "flex-1", "flex-col", "md:flex-row"], ["id", "map-3d-details", 1, "border-base-200", "bg-base-100", "flex", "min-h-0", "w-full", "flex-1", "flex-col", "overflow-y-auto", "text-sm", "md:w-80", "md:flex-none", "md:border-r"], [1, "p-4", "opacity-70"], ["id", "map-3d-map", 1, "bg-base-200", "relative", "min-w-0", "flex-1"], ["preview", "", "tabindex", "0", "role", "region", 1, "focus-visible:outline-info", "absolute", "inset-0", "focus-visible:outline-2", "focus-visible:-outline-offset-2", 3, "keydown"], [1, "pointer-events-none", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "gap-3", "text-sm", "opacity-70"], ["selection", "", 1, "bg-base-100", "border-base-300", "absolute", "bottom-2", "left-1/2", "flex", "w-[44rem]", "max-w-[calc(100%-1rem)]", "-translate-x-1/2", "flex-col", "gap-2", "rounded-xl", "border", "p-3", "text-sm", "shadow-lg", "md:bottom-4", "md:max-w-[calc(100%-2rem)]", "md:gap-3", "md:p-4"], ["role", "status", "aria-live", "polite", 1, "mr-2", "flex", "items-center", "gap-1.5", "text-sm"], ["aria-hidden", "true", 1, "size-2", "rounded-full"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["icon", "", "matRipple", "", "more-actions", "", 3, "disabled", "matMenuTriggerFor", "matTooltip"], ["xPosition", "before"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "text-2xl"], ["mat-menu-item", "", "remove-3d", ""], ["btn", "", "matRipple", "", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "w-24", "md:w-32", 3, "click", "disabled"], ["mat-menu-item", "", "remove-3d", "", 3, "click"], [1, "text-error", "flex", "items-center", "gap-2"], [1, "text-error", "text-4xl"], [1, "mt-2"], ["role", "tab", 1, "h-10", "flex-1", "border-b-2", "text-sm", 3, "click", "keydown", "id"], [1, "border-base-200", "border-b", "p-4"], [1, "mb-2", "font-medium"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "mt-3", "text-xs", "leading-4", "opacity-70"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-1"], ["type", "number", "name", "map-width", "min", "1", "step", "0.1", 1, "border-base-300", "bg-base-100", "h-8", "w-20", "rounded", "border", "px-2", "text-right", 3, "change", "ngModel"], [1, "w-4", "opacity-60"], [1, "mt-2", "text-xs", "leading-4", "opacity-70"], [1, "flex", "flex-col", "gap-1.5"], [1, "p-4"], ["layers", "", 1, "flex", "flex-col"], ["select-kind", "", 1, "bg-base-200", "hover:bg-base-300", "flex", "h-7", "items-center", "gap-1.5", "rounded-full", "px-2.5", "text-xs", 3, "click", "matTooltip"], [1, "size-2", "rounded-full"], [1, "opacity-60"], ["wall-tip", "", "tabindex", "0", 1, "cursor-help", "text-base", "opacity-60", 3, "matTooltip"], ["type", "number", "min", "0.05", "max", "20", "step", "0.01", 1, "border-base-300", "bg-base-100", "h-8", "w-20", "rounded", "border", "px-2", "text-right", 3, "change", "name", "ngModel"], [1, "hover:bg-base-200", "flex", "h-9", "items-center", "gap-1", "rounded", "pr-1"], ["icon", "", 1, "size-6", "flex-none", 3, "click"], [1, "text-base"], ["aria-hidden", "true", 1, "border-base-300", "size-2", "flex-none", "rounded-full"], [1, "ml-1", "min-w-0", "flex-1", "truncate", "text-left", 3, "click", "title"], [1, "text-xs", "opacity-70"], ["icon", "", "toggle-layer", "", 1, "size-6", "flex-none", 3, "click", "matTooltip"], [1, "border-base-300", "bg-base-100", "h-7", "w-28", "flex-none", "rounded", "border", "px-1", "text-xs", 3, "ngModelChange", "ngModel"], ["value", "mixed", "disabled", ""], [3, "value"], ["layer-shape", "", 1, "hover:bg-base-200", "flex", "h-8", "items-center", "rounded", "pr-1", 3, "selected-row", "padding-left"], [1, "flex", "h-8", "items-center", "text-xs", "opacity-70", 3, "padding-left"], ["layer-shape", "", 1, "hover:bg-base-200", "flex", "h-8", "items-center", "rounded", "pr-1"], [1, "min-w-0", "flex-1", "truncate", "text-left", "text-xs", 3, "click"], [1, "flex", "h-8", "items-center", "text-xs", "opacity-70"], [3, "diameter"], [1, "bg-base-100/90", "border-base-300", "pointer-events-none", "absolute", "top-3", "left-3", "max-w-[calc(100%-9rem)]", "rounded-2xl", "border", "px-3", "py-1", "text-xs", "shadow-sm"], ["view-controls", "", 1, "absolute", "top-3", "right-3", "flex", "flex-col", "items-end", "gap-2"], ["role", "group", 1, "bg-base-100", "border-base-300", "flex", "overflow-hidden", "rounded-lg", "border", "text-sm", "font-medium", "shadow-sm"], [1, "h-9", "px-3", 3, "click"], [1, "bg-base-100", "divide-base-300", "border-base-300", "flex", "divide-x", "overflow-hidden", "rounded-lg", "border", "shadow-sm", "md:flex-col", "md:divide-x-0", "md:divide-y"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 3, "click", "matTooltip"], [1, "min-w-0", "flex-1"], [1, "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-x-1", "text-xs", "opacity-70"], ["btn", "", "matRipple", "", 1, "clear", "h-8", "text-xs", 3, "click"], ["clear-selection", "", "icon", "", "matRipple", "", 3, "click", "matTooltip"], ["role", "group", 1, "-mx-3", "flex", "items-center", "gap-1.5", "overflow-x-auto", "px-3", "pb-1", "md:mx-0", "md:flex-wrap", "md:overflow-visible", "md:px-0", "md:pb-0"], ["aria-hidden", "true", 1, "mr-1", "flex-none", "text-xs", "opacity-70"], [1, "border-base-300", "hover:bg-base-200", "flex", "h-8", "flex-none", "items-center", "gap-1.5", "rounded-full", "border", "px-3", "text-xs", 3, "!bg-secondary", "!text-secondary-content"], [1, "ml-auto", "flex", "flex-none", "items-center", "gap-1"], [1, "hover:text-info", "underline", 3, "click"], ["aria-hidden", "true"], [1, "border-base-300", "hover:bg-base-200", "flex", "h-8", "flex-none", "items-center", "gap-1.5", "rounded-full", "border", "px-3", "text-xs", 3, "click"], ["type", "number", "name", "selection-height", "min", "0.05", "max", "20", "step", "0.01", 1, "border-base-300", "bg-base-100", "h-8", "w-20", "rounded", "border", "px-2", "text-right", 3, "change", "ngModel"]], template: function Map3DPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 2)(1, "a", 3);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "icon");
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "h1", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275conditionalCreate(10, Map3DPageComponent_Conditional_10_Template, 1, 1);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275conditionalCreate(14, Map3DPageComponent_Conditional_14_Template, 35, 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, Map3DPageComponent_Conditional_15_Template, 5, 1, "div", 8);
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275repeaterCreate(17, Map3DPageComponent_For_18_Template, 3, 15, "button", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "aside", 12);
        \u0275\u0275conditionalCreate(21, Map3DPageComponent_Conditional_21_Template, 44, 31)(22, Map3DPageComponent_Conditional_22_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "main", 14)(24, "div", 15, 0);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275listener("keydown", function Map3DPageComponent_Template_div_keydown_24_listener($event) {
          return ctx.onPreviewKeydown($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(27, Map3DPageComponent_Conditional_27_Template, 3, 2, "div", 16);
        \u0275\u0275conditionalCreate(28, Map3DPageComponent_Conditional_28_Template, 37, 49);
        \u0275\u0275conditionalCreate(29, Map3DPageComponent_Conditional_29_Template, 23, 23, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 20, "APP.CONCIERGE.MAPS_BACK"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 22, "APP.CONCIERGE.MAPS_BACK"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.level()?.display_name || ctx.level()?.name || ctx.level_id(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.building() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 24, "APP.CONCIERGE.MAPS_3D_SUBTITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.ready() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", !!ctx.error());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.narrow_tabs);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", !!ctx.error());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.narrow_tab() === "details" ? "" : "max-md:hidden");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.ready() ? 21 : !ctx.error() ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.narrow_tab() === "map" ? "" : "max-md:hidden");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 26, "APP.CONCIERGE.MAPS_3D_PREVIEW"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.ready() && !ctx.error() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.ready() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.targets().length ? 29 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      MinValidator,
      MaxValidator,
      NgModel,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--%NS%info) 18%, transparent);\n  box-shadow: inset 3px 0 0 var(--%NS%info);\n  font-weight: 500;\n}\n.selected-chip[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--%NS%info) 18%, transparent);\n  box-shadow: inset 0 0 0 1px var(--%NS%info);\n}\n/*# sourceMappingURL=map-3d-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Map3DPageComponent, [{
    type: Component,
    args: [{ selector: "[app-map-3d-page]", host: {
      "(window:beforeunload)": "onBeforeUnload($event)",
      "(window:keydown)": "onKeydown($event)"
    }, template: `
        <header
            class="border-base-200 bg-base-100 flex min-h-16 flex-none flex-wrap items-center gap-x-3 gap-y-1 border-b py-2 pr-4 pl-2"
        >
            <a
                icon
                matRipple
                routerLink="/map-management"
                [matTooltip]="'APP.CONCIERGE.MAPS_BACK' | translate"
                [attr.aria-label]="'APP.CONCIERGE.MAPS_BACK' | translate"
            >
                <icon>arrow_back</icon>
            </a>
            <div class="flex min-w-0 flex-col gap-0.5">
                <h1 class="truncate text-lg leading-6 font-medium">
                    {{ level()?.display_name || level()?.name || level_id() }}
                </h1>
                <div class="truncate text-xs leading-4 opacity-70">
                    @if (building()) {
                        {{ building()?.display_name || building()?.name }}
                        &middot;
                    }
                    {{ 'APP.CONCIERGE.MAPS_3D_SUBTITLE' | translate }}
                </div>
            </div>
            <div class="ml-auto flex flex-wrap items-center justify-end gap-2">
                @if (ready()) {
                    <p
                        class="mr-2 flex items-center gap-1.5 text-sm"
                        role="status"
                        aria-live="polite"
                    >
                        <span
                            class="size-2 rounded-full"
                            [class.bg-warning]="dirty()"
                            [class.bg-success]="!dirty()"
                            aria-hidden="true"
                        ></span>
                        {{
                            (dirty()
                                ? 'APP.CONCIERGE.MAPS_3D_UNSAVED'
                                : 'APP.CONCIERGE.MAPS_3D_SAVED_STATE'
                            ) | translate
                        }}
                    </p>
                    <button
                        icon
                        matRipple
                        [disabled]="!can_undo()"
                        [matTooltip]="'APP.CONCIERGE.MAPS_3D_UNDO' | translate"
                        [attr.aria-label]="
                            'APP.CONCIERGE.MAPS_3D_UNDO' | translate
                        "
                        (click)="undo()"
                    >
                        <icon>undo</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [disabled]="!can_redo()"
                        [matTooltip]="'APP.CONCIERGE.MAPS_3D_REDO' | translate"
                        [attr.aria-label]="
                            'APP.CONCIERGE.MAPS_3D_REDO' | translate
                        "
                        (click)="redo()"
                    >
                        <icon>redo</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        more-actions
                        [disabled]="!!saving()"
                        [matMenuTriggerFor]="more_menu"
                        [matTooltip]="'COMMON.MORE_OPTIONS' | translate"
                        [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                    >
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #more_menu="matMenu" xPosition="before">
                        <button mat-menu-item (click)="detect()">
                            <div class="flex items-center gap-2">
                                <icon class="text-2xl">auto_fix_high</icon>
                                <span>{{
                                    'APP.CONCIERGE.MAPS_3D_DETECT' | translate
                                }}</span>
                            </div>
                        </button>
                        @if (has_saved_3d()) {
                            <button mat-menu-item remove-3d (click)="remove()">
                                <div class="text-error flex items-center gap-2">
                                    <icon class="text-2xl">layers_clear</icon>
                                    <span>{{
                                        'APP.CONCIERGE.MAPS_3D_REMOVE'
                                            | translate
                                    }}</span>
                                </div>
                            </button>
                        }
                    </mat-menu>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        [disabled]="!dirty() || !!saving()"
                        (click)="discard()"
                    >
                        {{ 'APP.CONCIERGE.MAPS_DISCARD' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-24 md:w-32"
                        [disabled]="!dirty() || !!saving()"
                        (click)="save()"
                    >
                        {{ saving() || ('COMMON.SAVE' | translate) }}
                    </button>
                }
            </div>
        </header>
        @if (error()) {
            <div
                class="border-error/30 bg-error/10 mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded border p-8 text-center"
            >
                <icon class="text-error text-4xl">error</icon>
                <p class="mt-2">{{ error() }}</p>
            </div>
        }
        <div
            role="tablist"
            class="border-base-200 bg-base-100 flex flex-none border-b md:hidden"
            [class.hidden]="!!error()"
        >
            @for (tab of narrow_tabs; track tab.id) {
                <button
                    role="tab"
                    class="h-10 flex-1 border-b-2 text-sm"
                    [id]="'map-3d-tab-' + tab.id"
                    [attr.aria-controls]="'map-3d-' + tab.id"
                    [attr.aria-selected]="narrow_tab() === tab.id"
                    [attr.tabindex]="narrow_tab() === tab.id ? 0 : -1"
                    [class.border-transparent]="narrow_tab() !== tab.id"
                    [class.opacity-70]="narrow_tab() !== tab.id"
                    [class.border-secondary]="narrow_tab() === tab.id"
                    [class.font-medium]="narrow_tab() === tab.id"
                    (click)="narrow_tab.set(tab.id)"
                    (keydown)="onTabKeydown($event)"
                >
                    {{ tab.name | translate }}
                </button>
            }
        </div>
        <div
            class="flex min-h-0 flex-1 flex-col md:flex-row"
            [class.hidden]="!!error()"
        >
            <aside
                id="map-3d-details"
                [class]="narrow_tab() === 'details' ? '' : 'max-md:hidden'"
                class="border-base-200 bg-base-100 flex min-h-0 w-full flex-1 flex-col overflow-y-auto text-sm md:w-80 md:flex-none md:border-r"
            >
                @if (ready()) {
                    <section class="border-base-200 border-b p-4">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_FOUND' | translate }}
                        </h2>
                        <ul class="flex flex-wrap gap-1.5">
                            @for (option of kinds; track option.id) {
                                @if (counts()[option.id]) {
                                    <li>
                                        <button
                                            select-kind
                                            class="bg-base-200 hover:bg-base-300 flex h-7 items-center gap-1.5 rounded-full px-2.5 text-xs"
                                            [class.selected-chip]="
                                                isKindSelected(option.id)
                                            "
                                            [attr.aria-pressed]="
                                                isKindSelected(option.id)
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.MAPS_3D_SELECT_KIND'
                                                    | translate
                                            "
                                            (click)="selectKind(option.id)"
                                        >
                                            <span
                                                class="size-2 rounded-full"
                                                [style.background]="
                                                    option.colour
                                                "
                                            ></span>
                                            {{ option.name | translate }}
                                            <span class="opacity-60">{{
                                                counts()[option.id]
                                            }}</span>
                                        </button>
                                    </li>
                                }
                            }
                        </ul>
                        @if (auto_converted()) {
                            <p class="mt-3 text-xs leading-4 opacity-70">
                                {{
                                    'APP.CONCIERGE.MAPS_3D_AUTO_HINT'
                                        | translate
                                }}
                            </p>
                        }
                    </section>
                    <section class="border-base-200 border-b p-4">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_SCALE' | translate }}
                        </h2>
                        <div class="flex items-center justify-between gap-2">
                            <span>{{
                                'APP.CONCIERGE.MAPS_3D_WIDTH' | translate
                            }}</span>
                            <span class="flex items-center gap-1">
                                <input
                                    type="number"
                                    name="map-width"
                                    min="1"
                                    step="0.1"
                                    class="border-base-300 bg-base-100 h-8 w-20 rounded border px-2 text-right"
                                    [attr.aria-label]="
                                        'APP.CONCIERGE.MAPS_3D_WIDTH'
                                            | translate
                                    "
                                    [ngModel]="width_metres()"
                                    (change)="
                                        setWidth($any($event.target).value)
                                    "
                                />
                                <span class="w-4 opacity-60">m</span>
                            </span>
                        </div>
                        <p class="mt-2 text-xs leading-4 opacity-70">
                            {{ 'APP.CONCIERGE.MAPS_3D_WIDTH_HINT' | translate }}
                        </p>
                    </section>
                    <section class="border-base-200 border-b p-4">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_HEIGHTS' | translate }}
                        </h2>
                        <div class="flex flex-col gap-1.5">
                            @for (option of raised_kinds; track option.id) {
                                <div
                                    class="flex items-center justify-between gap-2"
                                >
                                    <span class="flex items-center gap-2">
                                        <span
                                            class="size-2 rounded-full"
                                            [style.background]="option.colour"
                                        ></span>
                                        {{ option.name | translate }}
                                        @if (option.id === 'wall') {
                                            <icon
                                                wall-tip
                                                tabindex="0"
                                                class="cursor-help text-base opacity-60"
                                                [matTooltip]="
                                                    'APP.CONCIERGE.MAPS_3D_WALL_TIP'
                                                        | translate
                                                "
                                                [attr.aria-label]="
                                                    'APP.CONCIERGE.MAPS_3D_WALL_TIP'
                                                        | translate
                                                "
                                                >info</icon
                                            >
                                        }
                                    </span>
                                    <span class="flex items-center gap-1">
                                        <input
                                            type="number"
                                            [name]="'height-' + option.id"
                                            min="0.05"
                                            max="20"
                                            step="0.01"
                                            class="border-base-300 bg-base-100 h-8 w-20 rounded border px-2 text-right"
                                            [attr.aria-label]="
                                                option.name | translate
                                            "
                                            [ngModel]="heights()[option.id]"
                                            (change)="
                                                setKindHeight(
                                                    option.id,
                                                    $any($event.target).value
                                                )
                                            "
                                        />
                                        <span class="w-4 opacity-60">m</span>
                                    </span>
                                </div>
                            }
                        </div>
                        <p class="mt-2 text-xs leading-4 opacity-70">
                            {{
                                'APP.CONCIERGE.MAPS_3D_HEIGHTS_HINT' | translate
                            }}
                        </p>
                    </section>
                    <section class="p-4" [class.hidden]="!layers().length">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_LAYERS' | translate }}
                        </h2>
                        <ul layers class="flex flex-col">
                            @for (
                                layer of visible_layers();
                                track layer.element
                            ) {
                                <li
                                    class="hover:bg-base-200 flex h-9 items-center gap-1 rounded pr-1"
                                    [class.selected-row]="
                                        isTarget(layer.element)
                                    "
                                    [style.padding-left.rem]="
                                        layer.depth * 0.75
                                    "
                                >
                                    <button
                                        icon
                                        class="size-6 flex-none"
                                        [class.invisible]="
                                            !layer.has_children &&
                                            !layer_shapes().has(layer.element)
                                        "
                                        [attr.aria-expanded]="
                                            expanded().has(layer.element)
                                        "
                                        [attr.aria-label]="
                                            'APP.CONCIERGE.MAPS_3D_EXPAND'
                                                | translate
                                        "
                                        (click)="toggleLayer(layer.element)"
                                    >
                                        <icon class="text-base">{{
                                            expanded().has(layer.element)
                                                ? 'expand_more'
                                                : 'chevron_right'
                                        }}</icon>
                                    </button>
                                    <span
                                        class="border-base-300 size-2 flex-none rounded-full"
                                        [class.border]="layer.kind === 'mixed'"
                                        [style.background]="
                                            kind_colours[layer.kind]
                                        "
                                        aria-hidden="true"
                                    ></span>
                                    <button
                                        class="ml-1 min-w-0 flex-1 truncate text-left"
                                        [title]="layer.name"
                                        [attr.aria-pressed]="
                                            isTarget(layer.element)
                                        "
                                        (click)="
                                            selectElement(
                                                layer.element,
                                                $event.shiftKey
                                            )
                                        "
                                    >
                                        {{
                                            layer.name ||
                                                ('APP.CONCIERGE.MAPS_3D_UNNAMED'
                                                    | translate)
                                        }}
                                        <span class="text-xs opacity-70">{{
                                            layer.count
                                        }}</span>
                                    </button>
                                    <button
                                        icon
                                        toggle-layer
                                        class="size-6 flex-none"
                                        [class.opacity-40]="layer.hidden"
                                        [matTooltip]="
                                            (layer.hidden
                                                ? 'APP.CONCIERGE.MAPS_3D_SHOW'
                                                : 'APP.CONCIERGE.MAPS_3D_HIDE'
                                            ) | translate
                                        "
                                        [attr.aria-label]="
                                            (layer.hidden
                                                ? 'APP.CONCIERGE.MAPS_3D_SHOW'
                                                : 'APP.CONCIERGE.MAPS_3D_HIDE'
                                            ) | translate
                                        "
                                        (click)="toggleHidden(layer)"
                                    >
                                        <icon class="text-base">{{
                                            layer.hidden
                                                ? 'visibility_off'
                                                : 'visibility'
                                        }}</icon>
                                    </button>
                                    <select
                                        class="border-base-300 bg-base-100 h-7 w-28 flex-none rounded border px-1 text-xs"
                                        [attr.aria-label]="
                                            'APP.CONCIERGE.MAPS_3D_KIND'
                                                | translate
                                        "
                                        [ngModel]="layer.kind"
                                        (ngModelChange)="
                                            assignLayer(layer, $event)
                                        "
                                    >
                                        @if (layer.kind === 'mixed') {
                                            <option value="mixed" disabled>
                                                {{
                                                    'APP.CONCIERGE.MAPS_3D_MIXED'
                                                        | translate
                                                }}
                                            </option>
                                        }
                                        @for (
                                            option of kinds;
                                            track option.id
                                        ) {
                                            <option [value]="option.id">
                                                {{ option.name | translate }}
                                            </option>
                                        }
                                    </select>
                                </li>
                                @if (expanded().has(layer.element)) {
                                    @let shapes =
                                        layer_shapes().get(layer.element) || [];
                                    @for (
                                        shape of shapes.slice(
                                            0,
                                            max_listed_shapes
                                        );
                                        track shape.index
                                    ) {
                                        <li
                                            layer-shape
                                            class="hover:bg-base-200 flex h-8 items-center rounded pr-1"
                                            [class.selected-row]="
                                                isTarget(shape.element)
                                            "
                                            [style.padding-left.rem]="
                                                (layer.depth + 1) * 0.75 + 1.75
                                            "
                                        >
                                            <button
                                                class="min-w-0 flex-1 truncate text-left text-xs"
                                                [attr.aria-pressed]="
                                                    isTarget(shape.element)
                                                "
                                                (click)="
                                                    selectElement(
                                                        shape.element,
                                                        $event.shiftKey
                                                    )
                                                "
                                            >
                                                {{
                                                    shape_names().get(
                                                        shape.element
                                                    )
                                                }}
                                            </button>
                                        </li>
                                    }
                                    @if (shapes.length > max_listed_shapes) {
                                        <li
                                            class="flex h-8 items-center text-xs opacity-70"
                                            [style.padding-left.rem]="
                                                (layer.depth + 1) * 0.75 + 1.75
                                            "
                                        >
                                            {{
                                                'APP.CONCIERGE.MAPS_3D_MORE_SHAPES'
                                                    | translate
                                                        : {
                                                              count:
                                                                  shapes.length -
                                                                  max_listed_shapes,
                                                          }
                                            }}
                                        </li>
                                    }
                                }
                            }
                        </ul>
                        <p class="mt-2 text-xs leading-4 opacity-70">
                            {{
                                'APP.CONCIERGE.MAPS_3D_LAYERS_HINT' | translate
                            }}
                        </p>
                    </section>
                } @else if (!error()) {
                    <div class="p-4 opacity-70">{{ loading() }}</div>
                }
            </aside>
            <main
                id="map-3d-map"
                [class]="narrow_tab() === 'map' ? '' : 'max-md:hidden'"
                class="bg-base-200 relative min-w-0 flex-1"
            >
                <div
                    #map
                    preview
                    tabindex="0"
                    role="region"
                    class="focus-visible:outline-info absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-2"
                    [attr.aria-label]="
                        'APP.CONCIERGE.MAPS_3D_PREVIEW' | translate
                    "
                    (keydown)="onPreviewKeydown($event)"
                ></div>
                @if (!ready() && !error()) {
                    <div
                        class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm opacity-70"
                    >
                        <mat-spinner [diameter]="32" />
                        {{ loading() }}
                    </div>
                }
                @if (ready()) {
                    <p
                        class="bg-base-100/90 border-base-300 pointer-events-none absolute top-3 left-3 max-w-[calc(100%-9rem)] rounded-2xl border px-3 py-1 text-xs shadow-sm"
                    >
                        {{ 'APP.CONCIERGE.MAPS_3D_PICK_HINT' | translate }}
                    </p>
                    <div
                        view-controls
                        class="absolute top-3 right-3 flex flex-col items-end gap-2"
                    >
                        <div
                            class="bg-base-100 border-base-300 flex overflow-hidden rounded-lg border text-sm font-medium shadow-sm"
                            role="group"
                            [attr.aria-label]="
                                'APP.CONCIERGE.MAPS_3D_VIEW' | translate
                            "
                        >
                            <button
                                class="h-9 px-3"
                                [class.bg-secondary]="!plan_view()"
                                [class.text-secondary-content]="!plan_view()"
                                [attr.aria-pressed]="!plan_view()"
                                (click)="setPlanView(false)"
                            >
                                3D
                            </button>
                            <button
                                class="h-9 px-3"
                                [class.bg-secondary]="plan_view()"
                                [class.text-secondary-content]="plan_view()"
                                [attr.aria-pressed]="plan_view()"
                                (click)="setPlanView(true)"
                            >
                                {{ 'APP.CONCIERGE.MAPS_3D_PLAN' | translate }}
                            </button>
                        </div>
                        <div
                            class="bg-base-100 divide-base-300 border-base-300 flex divide-x overflow-hidden rounded-lg border shadow-sm md:flex-col md:divide-x-0 md:divide-y"
                        >
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ROTATE_LEFT' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ROTATE_LEFT' | translate
                                "
                                (click)="rotate(-45)"
                            >
                                <icon>rotate_left</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="
                                    'EXPLORE.ROTATE_RIGHT' | translate
                                "
                                [attr.aria-label]="
                                    'EXPLORE.ROTATE_RIGHT' | translate
                                "
                                (click)="rotate(45)"
                            >
                                <icon>rotate_right</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ZOOM_IN' | translate
                                "
                                (click)="zoomBy(1.25)"
                            >
                                <icon>add</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ZOOM_OUT' | translate
                                "
                                (click)="zoomBy(0.8)"
                            >
                                <icon>remove</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ZOOM_RESET' | translate
                                "
                                (click)="resetView()"
                            >
                                <icon>refresh</icon>
                            </button>
                        </div>
                    </div>
                }
                @if (targets().length) {
                    <div
                        selection
                        class="bg-base-100 border-base-300 absolute bottom-2 left-1/2 flex w-[44rem] max-w-[calc(100%-1rem)] -translate-x-1/2 flex-col gap-2 rounded-xl border p-3 text-sm shadow-lg md:bottom-4 md:max-w-[calc(100%-2rem)] md:gap-3 md:p-4"
                    >
                        <div class="flex items-center gap-2">
                            <div class="min-w-0 flex-1">
                                <div class="font-medium">
                                    {{
                                        'APP.CONCIERGE.MAPS_3D_SELECTED'
                                            | translate
                                                : { count: selected().length }
                                    }}
                                </div>
                                @if (path().length) {
                                    <div
                                        class="flex flex-wrap items-center gap-x-1 text-xs opacity-70"
                                    >
                                        @for (
                                            step of path();
                                            track step.element
                                        ) {
                                            <button
                                                class="hover:text-info underline"
                                                (click)="
                                                    selectElement(step.element)
                                                "
                                            >
                                                {{ step.name }}
                                            </button>
                                            <span aria-hidden="true"
                                                >&rsaquo;</span
                                            >
                                        }
                                        <span>{{ path_leaf() }}</span>
                                    </div>
                                }
                            </div>
                            <button
                                btn
                                matRipple
                                class="clear h-8 text-xs"
                                (click)="selectSimilar()"
                            >
                                {{
                                    'APP.CONCIERGE.MAPS_3D_SIMILAR' | translate
                                }}
                            </button>
                            <button
                                clear-selection
                                icon
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.MAPS_3D_CLEAR' | translate
                                "
                                [attr.aria-label]="
                                    'APP.CONCIERGE.MAPS_3D_CLEAR' | translate
                                "
                                (click)="clearSelection(); focusPreview()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                        <div
                            role="group"
                            class="-mx-3 flex items-center gap-1.5 overflow-x-auto px-3 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0"
                            [attr.aria-label]="
                                'APP.CONCIERGE.MAPS_3D_KIND' | translate
                            "
                        >
                            <span
                                class="mr-1 flex-none text-xs opacity-70"
                                aria-hidden="true"
                                >{{
                                    'APP.CONCIERGE.MAPS_3D_KIND' | translate
                                }}</span
                            >
                            @for (option of kinds; track option.id) {
                                <button
                                    class="border-base-300 hover:bg-base-200 flex h-8 flex-none items-center gap-1.5 rounded-full border px-3 text-xs"
                                    [class.!bg-secondary]="
                                        selection_kind() === option.id
                                    "
                                    [class.!text-secondary-content]="
                                        selection_kind() === option.id
                                    "
                                    [attr.aria-pressed]="
                                        selection_kind() === option.id
                                    "
                                    (click)="assign(option.id)"
                                >
                                    <span
                                        class="size-2 rounded-full"
                                        [style.background]="option.colour"
                                    ></span>
                                    {{ option.name | translate }}
                                </button>
                            }
                            @if (selection_raised()) {
                                <div
                                    class="ml-auto flex flex-none items-center gap-1"
                                >
                                    <span class="text-xs opacity-70">{{
                                        'APP.CONCIERGE.MAPS_3D_HEIGHT'
                                            | translate
                                    }}</span>
                                    <input
                                        type="number"
                                        name="selection-height"
                                        min="0.05"
                                        max="20"
                                        step="0.01"
                                        class="border-base-300 bg-base-100 h-8 w-20 rounded border px-2 text-right"
                                        [attr.aria-label]="
                                            'APP.CONCIERGE.MAPS_3D_HEIGHT'
                                                | translate
                                        "
                                        [ngModel]="selection_height()"
                                        (change)="
                                            setSelectionHeight(
                                                $any($event.target).value
                                            )
                                        "
                                    />
                                    <span class="opacity-60">m</span>
                                </div>
                            }
                        </div>
                    </div>
                }
            </main>
        </div>
    `, imports: [
      RouterModule,
      FormsModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;58e8e44c4df2b0f040c65f46ac67ede842da1adb0bde47c761df01790c471be1;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/map-manager/map-3d-page.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n.selected-row {\n  background-color: color-mix(in srgb, var(--info) 18%, transparent);\n  box-shadow: inset 3px 0 0 var(--info);\n  font-weight: 500;\n}\n.selected-chip {\n  background-color: color-mix(in srgb, var(--info) 18%, transparent);\n  box-shadow: inset 0 0 0 1px var(--info);\n}\n/*# sourceMappingURL=map-3d-page.component.css.map */\n"] }]
  }], () => [], { _map: [{ type: ViewChild, args: ["map", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Map3DPageComponent, { className: "Map3DPageComponent", filePath: "apps/concierge/src/app/map-manager/map-3d-page.component.ts", lineNumber: 906 });
})();
function nameOf(element) {
  return element.getAttribute("data-name") || element.getAttribute("id") || "";
}
function kindName(kind, count) {
  const option = MAP_3D_KIND_OPTIONS.find((_) => _.id === kind);
  const name = option ? i18n(option.name) : kind;
  return count ? `${name} ${count}` : name;
}
function toStep(value) {
  return Math.round(value * 100) / 100;
}
function errorText(error) {
  const detail = error;
  return detail?.message || detail?.error || `${error || ""}`;
}
export {
  MAP_3D_KIND_OPTIONS,
  Map3DPageComponent
};
//# debugId=2e80d368-db29-52ff-9491-881a4e29cbba
//# sourceMappingURL=map-3d-page.component-RP4X2E4M.js.map
