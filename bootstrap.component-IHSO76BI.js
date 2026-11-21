import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  toSignal
} from "./chunk-M47EOH6I.js";
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-PL3CHDZA.js";
import {
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition
} from "./chunk-UDJWO5W2.js";
import {
  RemoteSetupService
} from "./chunk-CB5LLZZA.js";
import {
  AnnounceDirective,
  CONTROL_STORE_KEY
} from "./chunk-XG6EJX4L.js";
import "./chunk-FA46AMLA.js";
import {
  TranslatePipe
} from "./chunk-ATVOLI7S.js";
import {
  OrganisationService
} from "./chunk-UOPISXXU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-5YZYH22M.js";
import "./chunk-GLALPF4J.js";
import {
  Ra,
  Space,
  VERSION
} from "./chunk-MXNVQOYW.js";
import {
  getNativeSystemId,
  syncNativeManagedConfig
} from "./chunk-S7SHZHBQ.js";
import "./chunk-R42DFEBG.js";
import {
  CdkScrollableModule,
  OverlayConfig,
  OverlayModule,
  TemplatePortal,
  ViewportRuler,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-TTXS2UNH.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-ZIEG2XY2.js";
import {
  ActiveDescendantKeyManager,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  Platform,
  TAB,
  UP_ARROW,
  _IdGenerator,
  _animationsDisabled,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  coerceArray,
  hasModifierKey
} from "./chunk-2EG2Z3GX.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-2X6WL7MH.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DatePipe,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  debounced,
  defer,
  delay,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  map,
  merge,
  of,
  output,
  resource,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-2DV33LSM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/qr/index.js
/*!
 * Copyright (c) 2023 Paul Miller (paulmillr.com)
 * SPDX-License-Identifier: MIT OR Apache-2.0
 */
var MAX_OUTPUT_SIZE = 1024;
var MAX_COMPACT_OUTPUT_SIZE = MAX_OUTPUT_SIZE * 4;
var BYTES = /* @__PURE__ */ (() => {
  const res = [];
  for (let ver = 1; ver <= 40; ver++) {
    let bits = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
      const align = Math.floor(ver / 7) + 2;
      bits -= (25 * align - 10) * align - 55;
      if (ver >= 7)
        bits -= 36;
    }
    res.push(bits >>> 3);
  }
  return res;
})();
var ECC_LEVELS = ["low", "medium", "quartile", "high"];
var WORDS_PER_BLOCK = {
  low: [
    7,
    10,
    15,
    20,
    26,
    18,
    20,
    24,
    30,
    18,
    20,
    24,
    26,
    30,
    22,
    24,
    28,
    30,
    28,
    28,
    28,
    28,
    30,
    30,
    26,
    28,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30
  ],
  medium: [
    10,
    16,
    26,
    18,
    24,
    16,
    18,
    22,
    22,
    26,
    30,
    22,
    22,
    24,
    24,
    28,
    28,
    26,
    26,
    26,
    26,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28
  ],
  quartile: [
    13,
    22,
    18,
    26,
    18,
    24,
    18,
    22,
    20,
    24,
    28,
    26,
    24,
    20,
    30,
    24,
    28,
    28,
    26,
    30,
    28,
    30,
    30,
    30,
    30,
    28,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30
  ],
  high: [
    17,
    28,
    22,
    16,
    22,
    28,
    26,
    26,
    24,
    28,
    24,
    28,
    22,
    24,
    24,
    30,
    28,
    28,
    26,
    28,
    30,
    24,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30
  ]
};
var ECC_BLOCKS = {
  low: [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
  medium: [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
  quartile: [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
  high: [1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
};
var EC_CODE = { low: 1, medium: 0, quartile: 3, high: 2 };
var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
function alignmentPatterns(ver) {
  ver = asVersion(ver);
  if (ver === 1)
    return [];
  const last = 21 + 4 * (ver - 1) - 7;
  const count = Math.ceil((last - 6) / 28);
  let interval = Math.floor((last - 6) / count);
  if (interval % 2)
    interval += 1;
  else if ((last - 6) % count * 2 >= count)
    interval += 2;
  const res = [6];
  for (let m = 1; m < count; m++)
    res.push(last - (count - m) * interval);
  res.push(last);
  return res;
}
function formatBits(ecc, mask) {
  const data = EC_CODE[ecc] << 3 | mask;
  let d = data;
  for (let i = 0; i < 10; i++)
    d = d << 1 ^ (d >> 9) * 1335;
  return (data << 10 | d) ^ 21522;
}
function versionBits(ver) {
  let d = ver;
  for (let i = 0; i < 12; i++)
    d = d << 1 ^ (d >> 11) * 7973;
  return ver << 12 | d;
}
var MODE_BITS = { numeric: 1, alphanumeric: 2, byte: 4 };
var LENGTH_BITS = {
  numeric: [10, 12, 14],
  alphanumeric: [9, 11, 13],
  byte: [8, 16, 16]
};
var GF256 = /* @__PURE__ */ (() => {
  const exp = new Uint8Array(510);
  const log = new Uint8Array(256);
  for (let i = 0, x = 1; i < 255; i++) {
    exp[i] = exp[i + 255] = x;
    log[x] = i;
    x <<= 1;
    if (x & 256)
      x ^= 285;
  }
  return { exp, log };
})();
function rsGenerator(eccWords) {
  const { exp: EXP, log: LOG } = GF256;
  const gen = new Uint8Array(eccWords);
  gen[eccWords - 1] = 1;
  for (let i = 0, root = 1; i < eccWords; i++) {
    for (let j = 0; j < eccWords; j++) {
      const c = gen[j];
      gen[j] = (c ? EXP[LOG[c] + LOG[root]] : 0) ^ (j + 1 < eccWords ? gen[j + 1] : 0);
    }
    root = EXP[LOG[root] + 1];
  }
  return gen;
}
var RS_CACHE = [];
function rsCached(eccWords) {
  let cached = RS_CACHE[eccWords];
  if (cached !== void 0)
    return cached;
  const gen = rsGenerator(eccWords);
  const { exp: EXP, log: LOG } = GF256;
  const mul = new Uint8Array(256 * eccWords);
  for (let f = 1; f < 256; f++) {
    const lf = LOG[f];
    const off = f * eccWords;
    for (let j = 0; j < eccWords; j++) {
      const c = gen[j];
      if (c)
        mul[off + j] = EXP[LOG[c] + lf];
    }
  }
  return RS_CACHE[eccWords] = { gen, mul };
}
function rsEcc(data, gen, mul) {
  const { exp: EXP, log: LOG } = GF256;
  const eccWords = gen.length;
  const res = new Uint8Array(eccWords);
  if (mul !== void 0) {
    const last = eccWords - 1;
    for (let i = 0; i < data.length; i++) {
      const off = (data[i] ^ res[0]) * eccWords;
      for (let j = 0; j < last; j++)
        res[j] = res[j + 1] ^ mul[off + j];
      res[last] = mul[off + last];
    }
    return res;
  }
  for (let i = 0; i < data.length; i++) {
    const f = data[i] ^ res[0];
    res.copyWithin(0, 1);
    res[eccWords - 1] = 0;
    if (f) {
      for (let j = 0; j < eccWords; j++)
        if (gen[j])
          res[j] ^= EXP[LOG[gen[j]] + LOG[f]];
    }
  }
  return res;
}
function capacity(ver, ecc) {
  const bytes = BYTES[ver - 1];
  const words = WORDS_PER_BLOCK[ecc][ver - 1];
  const numBlocks = ECC_BLOCKS[ecc][ver - 1];
  const blockLen = Math.floor(bytes / numBlocks) - words;
  const shortBlocks = numBlocks - bytes % numBlocks;
  return { words, numBlocks, shortBlocks, blockLen, capacity: (bytes - words * numBlocks) * 8 };
}
var err = (msg) => {
  throw new Error(msg);
};
function asVersion(ver) {
  if (typeof ver !== "number")
    throw new TypeError(`"ver" expected number, got type=${typeof ver}`);
  if (!Number.isSafeInteger(ver))
    throw new RangeError(`"ver" expected safe integer, got ${ver}`);
  if (ver < 1 || ver > 40)
    throw new RangeError(`Invalid version=${ver}. Expected number [1..40]`);
  return ver;
}
function detectType(str) {
  let type = "numeric";
  for (let i = 0; i < str.length; i++) {
    const v = ALNUM_VAL[str.charCodeAt(i)];
    if (!(v >= 0))
      return "byte";
    if (v > 9)
      type = "alphanumeric";
  }
  return type;
}
var ALNUM_VAL = /* @__PURE__ */ (() => {
  const t = new Int8Array(128).fill(-1);
  for (let i = 0; i < ALPHANUMERIC.length; i++)
    t[ALPHANUMERIC.charCodeAt(i)] = i;
  return t;
})();
function encodeData(ver, ecc, text, type, utf8) {
  const cap = capacity(ver, ecc);
  const lengthBits = LENGTH_BITS[type][Math.floor((ver + 7) / 17)];
  const dataLen = type === "byte" ? utf8.length : text.length;
  if (dataLen >= 1 << lengthBits)
    err("Capacity overflow");
  const bytes = new Uint8Array(cap.capacity >>> 3);
  let acc = 0;
  let accBits = 0;
  let bytePos = 0;
  const push = (value, len) => {
    acc = acc << len | value;
    for (accBits += len; accBits >= 8; )
      bytes[bytePos++] = acc >>> (accBits -= 8) & 255;
  };
  push(MODE_BITS[type], 4);
  push(dataLen, lengthBits);
  if (type === "numeric") {
    for (let i = 0; i < dataLen; i += 3) {
      const n = Math.min(3, dataLen - i);
      push(Number(text.slice(i, i + n)), [0, 4, 7, 10][n]);
    }
  } else if (type === "alphanumeric") {
    for (let i = 0; i + 1 < dataLen; i += 2)
      push(ALNUM_VAL[text.charCodeAt(i)] * 45 + ALNUM_VAL[text.charCodeAt(i + 1)], 11);
    if (dataLen & 1)
      push(ALNUM_VAL[text.charCodeAt(dataLen - 1)], 6);
  } else {
    for (let i = 0; i < utf8.length; i++)
      push(utf8[i], 8);
  }
  let bitPos = bytePos * 8 + accBits;
  if (bitPos > cap.capacity)
    err("Capacity overflow");
  if (accBits)
    bytes[bytePos] = acc << 8 - accBits & 255;
  bitPos += Math.min(4, cap.capacity - bitPos);
  if (bitPos & 7)
    bitPos += 8 - (bitPos & 7);
  for (let i = bitPos >>> 3, pad = 0; i < bytes.length; i++, pad ^= 1)
    bytes[i] = pad ? 17 : 236;
  const { words, numBlocks, shortBlocks, blockLen } = cap;
  const rs = rsCached(words);
  const blocks = [];
  const eccs = [];
  for (let i = 0, pos = 0; i < numBlocks; i++) {
    const len = blockLen + (i < shortBlocks ? 0 : 1);
    blocks.push(bytes.subarray(pos, pos + len));
    eccs.push(rsEcc(blocks[i], rs.gen, rs.mul));
    pos += len;
  }
  const res = new Uint8Array(bytes.length + words * numBlocks);
  let p = 0;
  for (let i = 0; i <= blockLen; i++) {
    for (const b of blocks)
      if (i < b.length)
        res[p++] = b[i];
  }
  for (let i = 0; i < words; i++)
    for (const e of eccs)
      res[p++] = e[i];
  return res;
}
function maskBits(x, y) {
  const x2 = x % 2;
  const y2 = y % 2;
  const x3 = x % 3;
  const xy3 = x3 * (y % 3) % 3;
  const xy2 = x2 & y2;
  let bits = 0;
  if (x2 === y2)
    bits |= 1;
  if (y2 === 0)
    bits |= 2;
  if (x3 === 0)
    bits |= 4;
  if ((x + y) % 3 === 0)
    bits |= 8;
  if ((Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0)
    bits |= 16;
  if (xy2 + xy3 === 0)
    bits |= 32;
  if ((xy2 + xy3) % 2 === 0)
    bits |= 64;
  if (((x2 ^ y2) + xy3) % 2 === 0)
    bits |= 128;
  return bits;
}
var POP16 = /* @__PURE__ */ (() => {
  const t = new Uint8Array(1 << 16);
  for (let i = 1; i < t.length; i++)
    t[i] = t[i >>> 1] + (i & 1);
  return t;
})();
var popcnt = (n) => POP16[n & 65535] + POP16[n >>> 16];
var TRANSPOSE_TMP = /* @__PURE__ */ new Uint32Array(32);
function transpose32(a) {
  const masks = [1431655765, 858993459, 252645135, 16711935, 65535];
  for (let stage = 0; stage < 5; stage++) {
    const m = masks[stage] >>> 0;
    const s = 1 << stage;
    for (let i = 0; i < 32; i += s << 1) {
      for (let k = 0; k < s; k++) {
        const x = a[i + k] >>> 0;
        const y = a[i + k + s] >>> 0;
        const t = (x >>> s ^ y) & m;
        a[i + k] = (x ^ t << s) >>> 0;
        a[i + k + s] = (y ^ t) >>> 0;
      }
    }
  }
}
var mat = (size) => {
  const words = size + 31 >>> 5;
  return { size, words, v: new Uint32Array(words * size) };
};
var matGet = (m, x, y) => m.v[y * m.words + (x >>> 5)] >>> (x & 31) & 1;
var matSet = (m, x, y, bit) => {
  const i = y * m.words + (x >>> 5);
  const b = 1 << (x & 31);
  m.v[i] = bit ? m.v[i] | b : m.v[i] & ~b;
};
function transposeMat(src, dst) {
  const { size, words, v } = src;
  const tmp = TRANSPOSE_TMP;
  for (let by = 0; by < size; by += 32) {
    for (let bx = 0; bx < words; bx++) {
      const rows = Math.min(32, size - by);
      for (let r = 0; r < rows; r++)
        tmp[r] = v[(by + r) * words + bx];
      tmp.fill(0, rows);
      transpose32(tmp);
      for (let i = 0, dstY = bx * 32; i < 32 && dstY < size; i++, dstY++) {
        dst.v[dstY * dst.words + (by >>> 5)] = tmp[i];
      }
    }
  }
}
function runsPenaltyVertical(m) {
  const { size, words, v } = m;
  const tail = size & 31 ? (1 << (size & 31)) - 1 >>> 0 : 4294967295;
  let score = 0;
  for (let wi = 0; wi < words; wi++) {
    const valid = wi === words - 1 ? tail : 4294967295;
    let r3 = v[3 * words + wi];
    let dPrev = 4294967295;
    let d0 = v[wi] ^ v[words + wi];
    let d1 = v[words + wi] ^ v[2 * words + wi];
    let d2 = v[2 * words + wi] ^ r3;
    for (let y = 0, idx = 4 * words + wi; y <= size - 5; y++, idx += words) {
      const r4 = v[idx];
      const d3 = r3 ^ r4;
      const w = ~(d0 | d1 | d2 | d3) & valid;
      if (w)
        score += popcnt(w >>> 0) + 2 * popcnt((w & dPrev) >>> 0);
      dPrev = d0;
      d0 = d1;
      d1 = d2;
      d2 = d3;
      r3 = r4;
    }
  }
  return score;
}
function finderPenaltyVertical(m) {
  const { size, words, v } = m;
  const tail = size & 31 ? (1 << (size & 31)) - 1 >>> 0 : 4294967295;
  let count = 0;
  for (let wi = 0; wi < words; wi++) {
    const valid = wi === words - 1 ? tail : 4294967295;
    for (let y = 0; y <= size - 11; y++) {
      let i = y * words + wi;
      const r0 = v[i];
      const r1 = v[i += words];
      const r2 = v[i += words];
      const r3 = v[i += words];
      const r4 = v[i += words];
      const r5 = v[i += words];
      const r6 = v[i += words];
      const r7 = v[i += words];
      const r8 = v[i += words];
      const r9 = v[i += words];
      const r10 = v[i + words];
      const m0 = valid & r0 & ~r1 & r2 & r3 & r4 & ~r5 & r6 & ~(r7 | r8 | r9 | r10);
      const m1 = valid & ~(r0 | r1 | r2 | r3) & r4 & ~r5 & r6 & r7 & r8 & ~r9 & r10;
      count += popcnt(m0 >>> 0) + popcnt(m1 >>> 0);
    }
  }
  return count;
}
function penaltyScore(m, t, limit = Infinity) {
  const { size, words, v } = m;
  const adjacent = runsPenaltyVertical(m) + runsPenaltyVertical(t);
  if (adjacent >= limit)
    return adjacent;
  const tail2 = (1 << size - 32 * (words - 1) - 1) - 1 >>> 0;
  let boxes = 0;
  let dark2 = 0;
  for (let y = 0; y < size; y++) {
    for (let wi = 0; wi < words; wi++) {
      const a0 = v[y * words + wi];
      dark2 += popcnt(a0 >>> 0);
      if (y === size - 1)
        continue;
      const a1 = v[(y + 1) * words + wi];
      const n0 = wi + 1 < words ? v[y * words + wi + 1] : 0;
      const n1 = wi + 1 < words ? v[(y + 1) * words + wi + 1] : 0;
      const eqV = ~(a0 ^ a1);
      const eqH0 = ~(a0 ^ (a0 >>> 1 | n0 << 31));
      const eqH1 = ~(a1 ^ (a1 >>> 1 | n1 << 31));
      let w = eqV & eqH0 & eqH1;
      if (wi === words - 1)
        w &= tail2;
      boxes += popcnt(w >>> 0);
    }
  }
  const total = size * size;
  const darkSteps = Math.ceil(Math.max(0, Math.abs(dark2 * 100 - total * 50) - total * 5) / (total * 5));
  const partial = adjacent + 3 * boxes + 10 * darkSteps;
  if (partial >= limit)
    return partial;
  return partial + 40 * (finderPenaltyVertical(m) + finderPenaltyVertical(t));
}
function drawInfo(m, ver, ecc, mask) {
  const size = m.size;
  const bits = formatBits(ecc, mask);
  for (let i = 0; i < 15; i++) {
    const bit = bits >> i & 1;
    if (i < 6)
      matSet(m, 8, i, bit);
    else if (i < 8)
      matSet(m, 8, i + 1, bit);
    else if (i === 8)
      matSet(m, 7, 8, bit);
    else
      matSet(m, 14 - i, 8, bit);
    if (i < 8)
      matSet(m, size - 1 - i, 8, bit);
    else
      matSet(m, 8, size - 15 + i, bit);
  }
  matSet(m, 8, size - 8, 1);
  if (ver >= 7) {
    const vbits = versionBits(ver);
    for (let i = 0; i < 18; i++) {
      const bit = vbits >> i & 1;
      const x = size - 11 + i % 3;
      const y = i / 3 | 0;
      matSet(m, x, y, bit);
      matSet(m, y, x, bit);
    }
  }
}
var symCache;
function buildSymCache(ver) {
  const size = 21 + 4 * (ver - 1);
  const m = mat(size);
  const fun = new Uint8Array(size * size);
  const setF = (x, y, bit) => {
    matSet(m, x, y, bit);
    fun[y * size + x] = 1;
  };
  for (const [fx, fy] of [
    [0, 0],
    [size - 7, 0],
    [0, size - 7]
  ]) {
    for (let dy = -1; dy < 8; dy++) {
      for (let dx = -1; dx < 8; dx++) {
        const x = fx + dx;
        const y = fy + dy;
        if (x < 0 || y < 0 || x >= size || y >= size)
          continue;
        const on = dx >= 0 && dx < 7 && dy >= 0 && dy < 7 && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || dx > 1 && dx < 5 && dy > 1 && dy < 5);
        setF(x, y, on ? 1 : 0);
      }
    }
  }
  const align = alignmentPatterns(ver);
  for (const ay of align) {
    for (const ax of align) {
      if (fun[ay * size + ax])
        continue;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const on = Math.max(Math.abs(dx), Math.abs(dy)) !== 1;
          setF(ax + dx, ay + dy, on ? 1 : 0);
        }
      }
    }
  }
  for (let i = 0; i < size; i++) {
    if (!fun[6 * size + i])
      setF(i, 6, i % 2 === 0 ? 1 : 0);
    if (!fun[i * size + 6])
      setF(6, i, i % 2 === 0 ? 1 : 0);
  }
  for (let i = 0; i < 9; i++) {
    if (i !== 6) {
      setF(8, i, 0);
      setF(i, 8, 0);
    }
    if (i < 8) {
      setF(size - 1 - i, 8, 0);
      setF(8, size - 1 - i, 0);
    }
  }
  if (ver >= 7) {
    for (let i = 0; i < 18; i++) {
      const x = size - 11 + i % 3;
      const y = i / 3 | 0;
      setF(x, y, 0);
      setF(y, x, 0);
    }
  }
  const planes = [];
  for (let i = 0; i < 8; i++)
    planes.push(mat(size));
  const posBuf = new Uint16Array(size * size);
  let n = 0;
  for (let xOffset = size - 1, dir = -1, y = size - 1; xOffset > 0; xOffset -= 2, dir = -dir) {
    if (xOffset === 6)
      xOffset = 5;
    for (; ; y += dir) {
      for (let j = 0; j < 2; j++) {
        const x = xOffset - j;
        if (fun[y * size + x])
          continue;
        const wi = y * m.words + (x >>> 5);
        posBuf[n++] = wi << 5 | x & 31;
        for (let p = 0, mb = maskBits(x, y); mb; p++, mb >>= 1) {
          if (mb & 1)
            planes[p].v[wi] |= 1 << (x & 31);
        }
      }
      if (y + dir < 0 || y + dir >= size)
        break;
    }
  }
  const planesT = planes.map((p) => {
    const t = mat(size);
    transposeMat(p, t);
    return t.v;
  });
  return {
    ver,
    tpl: m.v,
    pos: posBuf.slice(0, n),
    planes: planes.map((p) => p.v),
    planesT,
    work: [mat(size), mat(size), mat(size), mat(size)]
  };
}
function drawSymbol(ver, ecc, data, maskIdx, test = false) {
  if (symCache === void 0 || symCache.ver !== ver)
    symCache = buildSymCache(ver);
  const { tpl, pos, planes, planesT, work } = symCache;
  const [m, t, cand, candT] = work;
  m.v.set(tpl);
  const need = Math.min(8 * data.length, pos.length);
  for (let i = 0; i < need; i++) {
    if (data[i >>> 3] & 128 >>> (i & 7)) {
      const p = pos[i];
      m.v[p >>> 5] |= 1 << (p & 31);
    }
  }
  let mask = maskIdx;
  if (mask === void 0) {
    transposeMat(m, t);
    let bestScore = Infinity;
    for (let p = 0; p < 8; p++) {
      const pv2 = planes[p];
      const ptv = planesT[p];
      for (let i = 0; i < cand.v.length; i++) {
        cand.v[i] = m.v[i] ^ pv2[i];
        candT.v[i] = t.v[i] ^ ptv[i];
      }
      const score = penaltyScore(cand, candT, bestScore);
      if (score < bestScore) {
        bestScore = score;
        mask = p;
      }
    }
  }
  const pv = planes[mask];
  for (let i = 0; i < m.v.length; i++)
    m.v[i] ^= pv[i];
  if (!test)
    drawInfo(m, ver, ecc, mask);
  return m;
}
var asNum = (n, title) => {
  if (typeof n !== "number")
    throw new TypeError(`"${title}" expected number, got type=${typeof n}`);
  if (!Number.isSafeInteger(n))
    throw new RangeError(`"${title}" expected safe integer, got ${n}`);
  return n;
};
var asString = (s, title) => {
  if (typeof s !== "string")
    throw new TypeError(`"${title}" expected string, got type=${typeof s}`);
  return s;
};
function utf8Length(str) {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c < 128)
      length++;
    else if (c < 2048)
      length += 2;
    else if (c < 55296 || c > 57343)
      length += 3;
    else if (c <= 56319 && i + 1 < str.length) {
      const next = str.charCodeAt(i + 1);
      if (next >= 56320 && next <= 57343) {
        length += 4;
        i++;
      } else
        length += 3;
    } else
      length += 3;
  }
  return length;
}
function byteCapacity(ver, ecc) {
  const lengthBits = LENGTH_BITS.byte[Math.floor((ver + 7) / 17)];
  return Math.min((1 << lengthBits) - 1, Math.floor((capacity(ver, ecc).capacity - 4 - lengthBits) / 8));
}
function _isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a && a.BYTES_PER_ELEMENT === 1;
}
var dark = (r, x, y) => r.map[x] >= 0 && r.map[y] >= 0 && matGet(r.m, r.map[x], r.map[y]) === 1;
var CTRL = [10, 27];
var NL = /* @__PURE__ */ String.fromCharCode(CTRL[0]);
function renderRaw(r) {
  const W = r.W;
  const res = new Array(W);
  for (let y = 0; y < W; y++) {
    const row = new Array(W);
    for (let x = 0; x < W; x++)
      row[x] = dark(r, x, y);
    res[y] = row;
  }
  return res;
}
function renderAscii(r) {
  const W = r.W;
  let out = "";
  for (let y = 0; y < W; y += 2) {
    for (let x = 0; x < W; x++) {
      const first = dark(r, x, y);
      const second = y + 1 >= W ? true : dark(r, x, y + 1);
      out += !first && !second ? "\u2588" : !first && second ? "\u2580" : first && !second ? "\u2584" : " ";
    }
    out += NL;
  }
  return out;
}
function renderTerm(r) {
  const W = r.W;
  const esc = String.fromCharCode(CTRL[1]);
  const reset = esc + "[0m";
  let out = "";
  for (let y = 0; y < W; y++) {
    for (let x = 0; x < W; x++) {
      out += dark(r, x, y) ? `${esc}[40m  ${reset}` : `${esc}[1;47m  ${reset}`;
    }
    out += NL;
  }
  return out;
}
function renderSvg(r, optimize) {
  const W = r.W;
  let out = `<svg viewBox="0 0 ${W} ${W}" xmlns="http://www.w3.org/2000/svg">`;
  let pathData = "";
  let prev;
  for (let y = 0; y < W; y++) {
    for (let x = 0; x < W; x++) {
      if (!dark(r, x, y))
        continue;
      if (!optimize) {
        out += `<rect x="${x}" y="${y}" width="1" height="1" />`;
        continue;
      }
      let mv = `M${x} ${y}`;
      if (prev) {
        const rel = `m${x - prev.x} ${y - prev.y}`;
        if (rel.length <= mv.length)
          mv = rel;
      }
      pathData += `${mv}h1v1${x < 10 ? `H${x}` : "h-1"}Z`;
      prev = { x, y };
    }
  }
  if (optimize)
    out += `<path d="${pathData}"/>`;
  return out + "</svg>";
}
function renderGif(r) {
  const W = r.W;
  const pixels = W * W;
  const N = 126;
  const fullChunks = Math.floor(pixels / N);
  const tail = pixels % N;
  const out = new Uint8Array(408 + fullChunks * (N + 2) + 2 + tail + 4);
  let p = 0;
  const u16 = (v) => {
    out[p++] = v & 255;
    out[p++] = v >>> 8;
  };
  for (const b of [71, 73, 70, 56, 55, 97])
    out[p++] = b;
  u16(W);
  u16(W);
  out[p++] = 246;
  p += 2;
  out[p++] = 255;
  out[p++] = 255;
  out[p++] = 255;
  p += 3 * 127;
  out[p++] = 44;
  p += 4;
  u16(W);
  u16(W);
  out[p++] = 0;
  out[p++] = 7;
  const { m, map: map2 } = r;
  const row = new Uint8Array(W);
  let prevMy = -2;
  for (let y = 0, i = 0; y < W; y++) {
    const my = map2[y];
    if (my !== prevMy) {
      prevMy = my;
      row.fill(0);
      if (my >= 0) {
        for (let x = 0; x < W; x++)
          if (map2[x] >= 0)
            row[x] = matGet(m, map2[x], my);
      }
    }
    for (let x = 0; x < W; ) {
      if (i % N === 0) {
        const rem = pixels - i;
        out[p++] = (rem < N ? rem : N) + 1;
        out[p++] = 128;
      }
      const n = Math.min(N - i % N, W - x);
      out.set(row.subarray(x, x + n), p);
      p += n;
      x += n;
      i += n;
    }
  }
  if (tail === 0) {
    out[p++] = 1;
    out[p++] = 128;
  }
  out[p++] = 1;
  out[p++] = 129;
  out[p++] = 0;
  out[p++] = 59;
  return out;
}
function gifDataUrl(gif) {
  const g = gif;
  let b64;
  if (typeof g.toBase64 === "function")
    b64 = g.toBase64();
  else {
    let bin = "";
    for (let i = 0; i < g.length; i += 8192)
      bin += String.fromCharCode(...g.subarray(i, i + 8192));
    b64 = btoa(bin);
  }
  return "data:image/gif;base64," + b64;
}
function encodeQR(text, output2 = "raw", opts = {}) {
  asString(text, "text");
  asString(output2, "output");
  if (typeof opts !== "object" || opts === null || Array.isArray(opts))
    throw new TypeError(`"opts" expected object, got type=${typeof opts}`);
  let ver = opts.version;
  if (ver !== void 0)
    ver = asVersion(ver);
  const ecc = opts.ecc !== void 0 ? opts.ecc : "medium";
  if (!ECC_LEVELS.includes(ecc))
    err(`invalid ecc=${ecc}`);
  const encoding = opts.encoding !== void 0 ? opts.encoding : detectType(text);
  if (!LENGTH_BITS[encoding])
    err(`invalid encoding=${encoding}`);
  if (encoding !== "byte") {
    const alpha = encoding === "numeric" ? ALPHANUMERIC.slice(0, 10) : ALPHANUMERIC;
    for (const ch of text) {
      if (!alpha.includes(ch))
        err(`Unknown letter: "${ch}". Allowed: ${alpha}`);
    }
  }
  if (opts.mask !== void 0 && (asNum(opts.mask, "opts.mask") < 0 || opts.mask > 7))
    err(`invalid mask=${opts.mask}`);
  const textEncoder = opts.textEncoder;
  if (encoding === "byte" && textEncoder === void 0) {
    const maxBytes = byteCapacity(ver === void 0 ? 40 : ver, ecc);
    if (text.length > maxBytes || utf8Length(text) > maxBytes)
      err("Capacity overflow");
  }
  const utf8 = encoding === "byte" ? (textEncoder !== void 0 ? textEncoder : (s) => new TextEncoder().encode(s))(text) : void 0;
  if (utf8 !== void 0 && !_isBytes(utf8))
    throw new TypeError(`"opts.textEncoder" expected Uint8Array, got type=${typeof utf8}`);
  const dataLen = encoding === "byte" ? utf8.length : text.length;
  const encodedBits = encoding === "numeric" ? Math.floor(dataLen / 3) * 10 + [0, 4, 7][dataLen % 3] : encoding === "alphanumeric" ? Math.floor(dataLen / 2) * 11 + dataLen % 2 * 6 : dataLen * 8;
  if (ver === void 0) {
    for (ver = 1; ver <= 40; ver++) {
      const lengthBits = LENGTH_BITS[encoding][Math.floor((ver + 7) / 17)];
      if (dataLen < 1 << lengthBits && 4 + lengthBits + encodedBits <= capacity(ver, ecc).capacity)
        break;
    }
    if (ver > 40)
      err("Capacity overflow");
  } else {
    const lengthBits = LENGTH_BITS[encoding][Math.floor((ver + 7) / 17)];
    if (dataLen >= 1 << lengthBits || 4 + lengthBits + encodedBits > capacity(ver, ecc).capacity)
      err("Capacity overflow");
  }
  const data = encodeData(ver, ecc, text, encoding, utf8);
  const m = drawSymbol(ver, ecc, data, opts.mask);
  const border = opts.border === void 0 ? 2 : asNum(opts.border, "opts.border");
  if (border <= 0)
    throw new RangeError(`invalid border=${border}`);
  const scale = opts.scale === void 0 ? 1 : asNum(opts.scale, "opts.scale");
  if (scale <= 0 || scale > 1024)
    throw new RangeError(`invalid scale factor: ${scale}`);
  const W = (m.size + 2 * border) * scale;
  const maxOutputSize = output2 === "ascii" || output2 === "gif" || output2 === "data-url" ? MAX_COMPACT_OUTPUT_SIZE : MAX_OUTPUT_SIZE;
  if (W > maxOutputSize)
    throw new RangeError(`invalid opts: output is ${W}x${W} (max ${maxOutputSize}), reduce border/scale`);
  const map2 = new Int32Array(W);
  for (let i = 0; i < W; i++) {
    const f = Math.floor(i / scale) - border;
    map2[i] = f >= 0 && f < m.size ? f : -1;
  }
  const r = { m, W, map: map2 };
  if (output2 === "raw")
    return renderRaw(r);
  if (output2 === "ascii")
    return renderAscii(r);
  if (output2 === "term")
    return renderTerm(r);
  if (output2 === "svg")
    return renderSvg(r, opts.optimize === void 0 ? true : opts.optimize);
  if (output2 === "gif")
    return renderGif(r);
  if (output2 === "data-url")
    return gifDataUrl(renderGif(r));
  return err(`Unknown output: ${output2}`);
}

// libs/common/src/lib/qr-code.ts
function generateQRCode(code, colorLight = "#fff0", colorDark = "#000") {
  let svg = encodeQR(code, "svg", { ecc: "low", border: 1 });
  if (colorLight && colorLight !== "#fff0" && colorLight !== "#0000") {
    svg = svg.replace(">", `><rect width="100%" height="100%" style="fill:${colorLight};"/>`);
  }
  svg = svg.replace("<path", `<path style="fill:${colorDark};"`);
  const encoded_svg = encodeURIComponent(svg);
  return `data:image/svg+xml,${encoded_svg}`;
}

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c0 = ["panel"];
var _c1 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
    \u0275\u0275domProperty("id", ctx_r1.id);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var MatAutocompleteSelectedEvent = class {
  source;
  option;
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: () => ({
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  })
});
var MatAutocomplete = class _MatAutocomplete {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _activeOptionChanges = Subscription.EMPTY;
  _keyManager;
  showPanel = false;
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  _isOpen = false;
  _latestOpeningTrigger;
  _setColor(value) {
    this._color = value;
    this._changeDetectorRef.markForCheck();
  }
  _color;
  template;
  panel;
  options;
  optionGroups;
  ariaLabel;
  ariaLabelledby;
  displayWith = null;
  autoActiveFirstOption;
  autoSelectActiveOption;
  requireSelection;
  panelWidth;
  disableRipple = false;
  optionSelected = new EventEmitter();
  opened = new EventEmitter();
  closed = new EventEmitter();
  optionActivated = new EventEmitter();
  set classList(value) {
    this._classList = value;
    this._elementRef.nativeElement.className = "";
  }
  _classList;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator;
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  id = inject(_IdGenerator).getId("mat-autocomplete-");
  inertGroups;
  constructor() {
    const platform = inject(Platform);
    this.inertGroups = (platform == null ? void 0 : platform.SAFARI) || false;
    this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    this.requireSelection = !!this._defaults.requireSelection;
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    var _a2;
    (_a2 = this._keyManager) == null ? void 0 : _a2.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  _setVisibility() {
    var _a2;
    this.showPanel = !!((_a2 = this.options) == null ? void 0 : _a2.length);
    this._changeDetectorRef.markForCheck();
  }
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  _skipPredicate() {
    return false;
  }
  static \u0275fac = function MatAutocomplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocomplete)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatOption, 5)(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatAutocomplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7)(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-autocomplete"],
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      displayWith: "displayWith",
      autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute],
      autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute],
      requireSelection: [2, "requireSelection", "requireSelection", booleanAttribute],
      panelWidth: "panelWidth",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      classList: [0, "class", "classList"],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed",
      optionActivated: "optionActivated"
    },
    exportAs: ["matAutocomplete"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatAutocomplete
    }])],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]],
    template: function MatAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
      }
    },
    styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matAutocomplete",
      host: {
        "class": "mat-mdc-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));\n  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"]
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSelectActiveOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    requireSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelWidth: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteOrigin = class _MatAutocompleteOrigin {
  elementRef = inject(ElementRef);
  static \u0275fac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], null, null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var _a;
var MatAutocompleteTrigger = class _MatAutocompleteTrigger {
  _environmentInjector = inject(EnvironmentInjector);
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _zone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true,
    host: true
  });
  _viewportRuler = inject(ViewportRuler);
  _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef = null;
  _portal;
  _componentDestroyed = false;
  _initialized = new Subject();
  _keydownSubscription;
  _outsideClickSubscription;
  _cleanupWindowBlur;
  _previousValue = null;
  _valueOnAttach = null;
  _valueOnLastKeydown = null;
  _positionStrategy;
  _manuallyFloatingLabel = false;
  _closingActionsSubscription;
  _viewportSubscription = Subscription.EMPTY;
  _breakpointObserver = inject(BreakpointObserver);
  _handsetLandscapeSubscription = Subscription.EMPTY;
  _canOpenOnNextFocus = true;
  _valueBeforeAutoSelection;
  _pendingAutoselectedOption = null;
  _closeKeyEventStream = new Subject();
  _overlayPanelClass = coerceArray(((_a = this._defaults) == null ? void 0 : _a.overlayPanelClass) || []);
  _windowBlurHandler = () => {
    this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
  };
  _onChange = () => {
  };
  _onTouched = () => {
  };
  autocomplete;
  position = "auto";
  connectedTo;
  autocompleteAttribute = "off";
  autocompleteDisabled = false;
  _aboveClass = "mat-mdc-autocomplete-panel-above";
  ngAfterViewInit() {
    this._initialized.next();
    this._initialized.complete();
    this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    var _a2;
    (_a2 = this._cleanupWindowBlur) == null ? void 0 : _a2.call(this);
    this._handsetLandscapeSubscription.unsubscribe();
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
  }
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  _overlayAttached = false;
  openPanel() {
    this._openPanelInternal();
  }
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    if (this.autocomplete._latestOpeningTrigger === this) {
      this.autocomplete._isOpen = false;
      this.autocomplete._latestOpeningTrigger = null;
    }
    this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    this._updatePanelState();
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
  }
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(map((event) => event instanceof MatOptionSelectionChange ? event : null));
  }
  optionSelections = defer(() => {
    const options = this.autocomplete ? this.autocomplete.options : null;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelections));
  });
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  _getOutsideClickStream() {
    return new Observable((observer) => {
      const listener = (event) => {
        const clickTarget = _getEventTarget(event);
        const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
        const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
        if (this._overlayAttached && clickTarget !== this._element.nativeElement && !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
          observer.next(event);
        }
      };
      const cleanups = [this._renderer.listen("document", "click", listener), this._renderer.listen("document", "auxclick", listener), this._renderer.listen("document", "touchend", listener)];
      return () => {
        cleanups.forEach((current) => current());
      };
    });
  }
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(e) {
    const event = e;
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    this._valueOnLastKeydown = this._element.nativeElement.value;
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this._openPanelInternal(this._valueOnLastKeydown);
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._valueOnLastKeydown;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    var _a2;
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      if (!this.autocomplete || !this.autocomplete.requireSelection) {
        this._onChange(value);
      }
      if (!value) {
        this._clearPreviousSelectedOption(null, false);
      } else if (this.panelOpen && !this.autocomplete.requireSelection) {
        const selectedOption = (_a2 = this.autocomplete.options) == null ? void 0 : _a2.find((option) => option.selected);
        if (selectedOption) {
          const display = this._getDisplayValue(selectedOption.value);
          if (value !== display) {
            selectedOption.deselect(false);
          }
        }
      }
      if (this._canOpen() && this._hasFocus()) {
        const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
        this._valueOnLastKeydown = null;
        this._openPanelInternal(valueOnAttach);
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay(this._previousValue);
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this._openPanelInternal();
    }
  }
  _hasFocus() {
    return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
  }
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = "auto";
      }
      this._manuallyFloatingLabel = false;
    }
  }
  _subscribeToClosingActions() {
    var _a2;
    const initialRender = new Observable((subscriber) => {
      afterNextRender(() => {
        subscriber.next();
      }, {
        injector: this._environmentInjector
      });
    });
    const optionChanges = ((_a2 = this.autocomplete.options) == null ? void 0 : _a2.changes.pipe(tap(() => this._positionStrategy.reapplyLastPosition()), delay(0))) ?? of();
    return merge(initialRender, optionChanges).pipe(switchMap(() => this._zone.run(() => {
      const wasOpen = this.panelOpen;
      this._resetActiveItem();
      this._updatePanelState();
      this._changeDetectorRef.detectChanges();
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
      if (wasOpen !== this.panelOpen) {
        if (this.panelOpen) {
          this._emitOpened();
        } else {
          this.autocomplete.closed.emit();
        }
      }
      return this.panelClosingActions;
    })), take(1)).subscribe((event) => this._setValueAndClose(event));
  }
  _emitOpened() {
    this.autocomplete.opened.emit();
  }
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  _getDisplayValue(value) {
    const autocomplete = this.autocomplete;
    return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
  }
  _assignOptionValue(value) {
    const toDisplay = this._getDisplayValue(value);
    if (value == null) {
      this._clearPreviousSelectedOption(null, false);
    }
    this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
  }
  _updateNativeInputValue(value) {
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  _setValueAndClose(event) {
    const panel = this.autocomplete;
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      panel._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
      this._clearPreviousSelectedOption(null);
      this._assignOptionValue(null);
      this._onChange(null);
    }
    this.closePanel();
  }
  _clearPreviousSelectedOption(skip, emitEvent) {
    var _a2, _b;
    (_b = (_a2 = this.autocomplete) == null ? void 0 : _a2.options) == null ? void 0 : _b.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect(emitEvent);
      }
    });
  }
  _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
    this._attachOverlay(valueOnAttach);
    this._floatLabel();
  }
  _attachOverlay(valueOnAttach) {
    var _a2, _b;
    if (!this.autocomplete) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getMatAutocompleteMissingPanelError();
      } else {
        return;
      }
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: (_a2 = this._formField) == null ? void 0 : _a2.getLabelId()
      });
      overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
      this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
        const isHandsetLandscape = result.matches;
        if (isHandsetLandscape) {
          this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
        } else {
          this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._valueOnAttach = valueOnAttach;
      this._valueOnLastKeydown = null;
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._latestOpeningTrigger = this;
    this.autocomplete._setColor((_b = this._formField) == null ? void 0 : _b.color);
    this._updatePanelState();
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this._emitOpened();
    }
  }
  _handlePanelKeydown = (event) => {
    if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
      if (this._pendingAutoselectedOption) {
        this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
        this._pendingAutoselectedOption = null;
      }
      this._closeKeyEventStream.next();
      this._resetActiveItem();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  _updatePanelState() {
    var _a2, _b;
    this.autocomplete._setVisibility();
    if (this.panelOpen) {
      const overlayRef = this._overlayRef;
      if (!this._keydownSubscription) {
        this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
      }
      if (!this._outsideClickSubscription) {
        this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
      }
    } else {
      (_a2 = this._keydownSubscription) == null ? void 0 : _a2.unsubscribe();
      (_b = this._outsideClickSubscription) == null ? void 0 : _b.unsubscribe();
      this._keydownSubscription = this._outsideClickSubscription = void 0;
    }
  }
  _getOverlayConfig() {
    var _a2, _b;
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? void 0,
      hasBackdrop: (_a2 = this._defaults) == null ? void 0 : _a2.hasBackdrop,
      backdropClass: ((_b = this._defaults) == null ? void 0 : _b.backdropClass) || "cdk-overlay-transparent-backdrop",
      panelClass: this._overlayPanelClass,
      disableAnimations: this._animationsDisabled
    });
  }
  _getOverlayPosition() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPopoverLocation("inline");
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      let firstEnabledOptionIndex = -1;
      for (let index = 0; index < autocomplete.options.length; index++) {
        const option = autocomplete.options.get(index);
        if (!option.disabled) {
          firstEnabledOptionIndex = index;
          break;
        }
      }
      autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
  }
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  static \u0275fac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
      var _a2;
      if (rf & 1) {
        \u0275\u0275listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : (_a2 = ctx.autocomplete) == null ? void 0 : _a2.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    inputs: {
      autocomplete: [0, "matAutocomplete", "autocomplete"],
      position: [0, "matAutocompletePosition", "position"],
      connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
      autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
      autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute]
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-mdc-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: [{
        alias: "matAutocompleteDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteModule = class _MatAutocompleteModule {
  static \u0275fac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatAutocompleteModule,
    imports: [OverlayModule, MatOptionModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, BidiModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayModule, MatOptionModule, CdkScrollableModule, MatOptionModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, BidiModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
    }]
  }], null, null);
})();

// libs/components/src/lib/remote-setup-qr.component.ts
function RemoteSetupQrComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0);
    \u0275\u0275domElement(1, "img", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementStart(3, "div", 2)(4, "h2", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275domElementStart(13, "span", 6);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(2, 6, "COMMON.REMOTE_SETUP_QR_ALT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "COMMON.REMOTE_SETUP_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "COMMON.REMOTE_SETUP_SCAN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "COMMON.REMOTE_SETUP_DEVICE_ID"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.device_id);
  }
}
var _RemoteSetupQrComponent = class _RemoteSetupQrComponent {
  constructor() {
    this._setup = inject(RemoteSetupService);
    this.device_id = this._setup.device_id;
    this.qr_code = computed(
      () => this._setup.available() ? generateQRCode(this._setup.setup_url(), "#fff", "#000") : "",
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    inject(DestroyRef).onDestroy(this._setup.showSetupScreen());
  }
};
_RemoteSetupQrComponent.\u0275fac = function RemoteSetupQrComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RemoteSetupQrComponent)();
};
_RemoteSetupQrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteSetupQrComponent, selectors: [["remote-setup-qr"]], decls: 1, vars: 1, consts: [[1, "bg-base-100", "border-base-300", "flex", "flex-col", "items-center", "gap-4", "rounded-sm", "border", "p-4", "text-center", "shadow-md", "portrait:w-120", "portrait:max-w-[calc(100vw-2rem)]", "portrait:sm:flex-row", "portrait:sm:text-left", "landscape:w-64"], [1, "size-40", "shrink-0", "rounded-sm", "bg-white", "p-1", 3, "src", "alt"], [1, "flex", "min-w-0", "flex-col", "gap-2"], [1, "font-medium"], [1, "text-sm", "opacity-70"], [1, "text-sm"], ["device-id", "", 1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "select-all"]], template: function RemoteSetupQrComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RemoteSetupQrComponent_Conditional_0_Template, 15, 14, "section", 0);
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.qr_code()) ? 0 : -1, tmp_0_0);
  }
}, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=remote-setup-qr.component.css.map */"] });
var RemoteSetupQrComponent = _RemoteSetupQrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteSetupQrComponent, [{
    type: Component,
    args: [{ selector: "remote-setup-qr", template: `
        @if (qr_code(); as code) {
            <section
                class="bg-base-100 border-base-300 flex flex-col items-center gap-4 rounded-sm border p-4 text-center shadow-md portrait:w-120 portrait:max-w-[calc(100vw-2rem)] portrait:sm:flex-row portrait:sm:text-left landscape:w-64"
            >
                <img
                    class="size-40 shrink-0 rounded-sm bg-white p-1"
                    [src]="code"
                    [alt]="'COMMON.REMOTE_SETUP_QR_ALT' | translate"
                />
                <div class="flex min-w-0 flex-col gap-2">
                    <h2 class="font-medium">
                        {{ 'COMMON.REMOTE_SETUP_TITLE' | translate }}
                    </h2>
                    <p class="text-sm opacity-70">
                        {{ 'COMMON.REMOTE_SETUP_SCAN' | translate }}
                    </p>
                    <p class="text-sm">
                        {{ 'COMMON.REMOTE_SETUP_DEVICE_ID' | translate }}:
                        <span
                            device-id
                            class="bg-base-200 rounded-sm px-2 py-1 font-mono select-all"
                            >{{ device_id }}</span
                        >
                    </p>
                </div>
            </section>
        }
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;c56154a65d2f25aeb30f9e3d4fddc8d29a75b1cfe211ec52ebd65b8c2849fb61;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/remote-setup-qr.component.ts */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=remote-setup-qr.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteSetupQrComponent, { className: "RemoteSetupQrComponent", filePath: "libs/components/src/lib/remote-setup-qr.component.ts", lineNumber: 61 });
})();

// libs/components/src/lib/system-bootstrap.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SystemBootstrapComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function SystemBootstrapComponent_Conditional_11_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
  }
}
function SystemBootstrapComponent_Conditional_11_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 17)(2, "div", 18)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SystemBootstrapComponent_Conditional_11_For_13_Conditional_5_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r3.display_name || option_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r3.display_name && option_r3.display_name !== option_r3.name ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.id, " ");
  }
}
function SystemBootstrapComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx === "error" ? "COMMON.LOAD_ERROR" : "COMMON.SEARCH_EMPTY"), " ");
  }
}
function SystemBootstrapComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOTSTRAP_INPUT_PLACEHOLDER"), " ");
  }
}
function SystemBootstrapComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11)(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 12);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SystemBootstrapComponent_Conditional_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.system_id, $event) || (ctx_r1.system_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, SystemBootstrapComponent_Conditional_11_Conditional_9_Template, 1, 1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(12, SystemBootstrapComponent_Conditional_11_For_13_Template, 8, 4, "mat-option", 14, _forTrack0);
    \u0275\u0275conditionalCreate(14, SystemBootstrapComponent_Conditional_11_Conditional_14_Template, 3, 3, "mat-option", 15);
    \u0275\u0275conditionalCreate(15, SystemBootstrapComponent_Conditional_11_Conditional_15_Template, 3, 3, "mat-option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function SystemBootstrapComponent_Conditional_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bootstrap());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const auto_r4 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 10, ctx_r1.description()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "COMMON.BOOTSTRAP_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.system_id);
    \u0275\u0275property("matAutocomplete", auto_r4)("placeholder", \u0275\u0275pipeBind1(8, 14, "COMMON.BOOTSTRAP_LABEL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() === "search" ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.space_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.search_state()) ? 14 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.system_id().length < 2 && !ctx_r1.space_list().length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.system_id());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, ctx_r1.submit_label()), " ");
  }
}
function SystemBootstrapComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.BOOTSTRAP_LOADING"), " ");
  }
}
function SystemBootstrapComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "remote-setup-qr");
  }
}
var _SystemBootstrapComponent = class _SystemBootstrapComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._query_params = toSignal(this._route.queryParamMap, {
      initialValue: this._route.snapshot.queryParamMap
    });
    this.store_key = input.required(
      ...ngDevMode ? [{ debugName: "store_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = input.required(
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.description = input(
      "COMMON.BOOTSTRAP_DESCRIPTION",
      ...ngDevMode ? [{ debugName: "description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.submit_label = input(
      "COMMON.BOOTSTRAP_SUBMIT",
      ...ngDevMode ? [{ debugName: "submit_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_route = input.required(
      ...ngDevMode ? [{ debugName: "system_route" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.configured = output();
    this.version = VERSION;
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_search = debounced(this.system_id, 300);
    this._space_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      // Wait for the organisation so the search is scoped to its zone
      params: () => this._org.initialised() ? this._debounced_search.value() : "",
      loader: async ({ params: search }) => {
        var _a2;
        if (search.length < 2)
          return [];
        this.loading.set("search");
        try {
          const { data } = await Ra({
            q: search,
            limit: 20,
            fields: ["id", "name", "display_name", "email"].join(","),
            zone_id: (_a2 = this._org.organisation) == null ? void 0 : _a2.id
          });
          return data.map(({ id, name, display_name, email }) => new Space({ id, name, display_name, email }));
        } finally {
          this.loading.set("");
        }
      }
    }));
    this.space_list = computed(
      () => this._space_list.hasValue() ? this._space_list.value() : [],
      ...ngDevMode ? [{ debugName: "space_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_state = computed(
      () => {
        if (!this._org.initialised())
          return "";
        if (this._debounced_search.value().length < 2)
          return "";
        if (this._space_list.error())
          return "error";
        if (this._space_list.isLoading() || this.space_list().length)
          return "";
        return "empty";
      },
      ...ngDevMode ? [{ debugName: "search_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bootstrap = () => this.configure(this.system_id());
    effect(() => {
      const params = this._query_params();
      if (params.has("clear") && !!params.get("clear")) {
        localStorage.removeItem(this.store_key());
      }
      const system_id = params.get("system_id") || params.get("sys_id");
      if (system_id) {
        this.system_id.set(system_id);
        this.configure(system_id);
      }
    });
  }
  ngOnInit() {
    this.checkBootstrapped();
  }
  /**
   * Go to the saved system, or to the MDM managed system if it differs
   */
  async checkBootstrapped() {
    if (this.system_id())
      return;
    this.loading.set("Checks");
    await syncNativeManagedConfig();
    if (this.system_id())
      return;
    const system_id = localStorage.getItem(this.store_key());
    const mdm_system_id = getNativeSystemId();
    if (mdm_system_id && mdm_system_id !== system_id) {
      this.system_id.set(mdm_system_id);
      return this.configure(mdm_system_id);
    }
    if (system_id) {
      this._router.navigate(this.system_route()(system_id), {
        queryParamsHandling: "preserve"
      });
      return;
    }
    this.loading.set("");
  }
  /** Save the system ID as a trusted fixed device and open its route */
  configure(system_id) {
    localStorage.setItem(this.store_key(), system_id);
    localStorage.setItem("trust", "true");
    localStorage.setItem("fixed_device", "true");
    this.configured.emit(system_id);
    this._router.navigate(this.system_route()(system_id), {
      queryParamsHandling: "preserve"
    });
  }
};
_SystemBootstrapComponent.\u0275fac = function SystemBootstrapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SystemBootstrapComponent)();
};
_SystemBootstrapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemBootstrapComponent, selectors: [["system-bootstrap"]], inputs: { store_key: [1, "store_key"], heading: [1, "heading"], description: [1, "description"], submit_label: [1, "submit_label"], system_route: [1, "system_route"] }, outputs: { configured: "configured" }, decls: 22, vars: 20, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "items-center", "gap-3", "overflow-y-auto", "p-3", "landscape:flex-row", "landscape:flex-wrap", "landscape:items-start", "landscape:justify-center"], ["form", "", 1, "bg-base-100", "border-base-300", "flex", "w-120", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-md"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], ["load", "", 1, "my-16", "flex", "flex-col", "items-center"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-70"], [1, "description", "py-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "matAutocomplete", "placeholder"], ["matSuffix", "", "aria-hidden", "true", 3, "diameter"], [3, "value"], ["disabled", "", 1, "pointer-events-none", "opacity-60"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "w-full", "items-center", "space-x-4", "leading-tight"], [1, "flex", "flex-1", "flex-col"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-[0.625rem]"], ["aria-hidden", "true", 3, "diameter"], ["announce", "", 1, "m-4"]], template: function SystemBootstrapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, SystemBootstrapComponent_Conditional_11_Template, 19, 18)(12, SystemBootstrapComponent_Conditional_12_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SystemBootstrapComponent_Conditional_13_Template, 1, 0, "remote-setup-qr");
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, ctx.heading()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "COMMON.BOOTSTRAP_SETUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() || ctx.loading() === "search" ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() || ctx.loading() === "search" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 12, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 14, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(21, 17, ctx.version.time, "shortTime"), ") ");
  }
}, dependencies: [
  CommonModule,
  AnnounceDirective,
  RemoteSetupQrComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSuffix,
  MatInputModule,
  MatInput,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  DatePipe,
  TranslatePipe
], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n  margin: 0.5rem;\n  margin-top: 0;\n}\n/*# sourceMappingURL=system-bootstrap.component.css.map */"] });
var SystemBootstrapComponent = _SystemBootstrapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemBootstrapComponent, [{
    type: Component,
    args: [{ selector: "system-bootstrap", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center gap-3 overflow-y-auto p-3 landscape:flex-row landscape:flex-wrap landscape:items-start landscape:justify-center"
        >
            <div
                form
                class="bg-base-100 border-base-300 flex w-120 max-w-[calc(100vw-2rem)] flex-col items-center overflow-hidden rounded-sm border shadow-md"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <h1>{{ heading() | translate }}</h1>
                    <div class="relative overflow-hidden rounded-sm px-2 py-1">
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-10"
                        ></div>
                        <div class="relative z-10 font-mono text-sm uppercase">
                            {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                        </div>
                    </div>
                </header>
                @if (!loading() || loading() === 'search') {
                    <p class="description py-4">
                        {{ description() | translate }}
                    </p>
                    <mat-form-field appearance="outline">
                        <mat-label>{{
                            'COMMON.BOOTSTRAP_LABEL' | translate
                        }}</mat-label>
                        <input
                            matInput
                            [(ngModel)]="system_id"
                            [matAutocomplete]="auto"
                            [placeholder]="'COMMON.BOOTSTRAP_LABEL' | translate"
                        />
                        @if (loading() === 'search') {
                            <mat-spinner
                                [diameter]="32"
                                matSuffix
                                aria-hidden="true"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of space_list(); track option.id) {
                            <mat-option [value]="option.id">
                                <div
                                    class="flex w-full items-center space-x-4 leading-tight"
                                >
                                    <div class="flex flex-1 flex-col">
                                        <div>
                                            {{
                                                option.display_name ||
                                                    option.name
                                            }}
                                        </div>
                                        @if (
                                            option.display_name &&
                                            option.display_name !== option.name
                                        ) {
                                            <div class="text-xs opacity-70">
                                                {{ option.name }}
                                            </div>
                                        }
                                    </div>
                                    <div
                                        class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                    >
                                        {{ option.id }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                        @if (search_state(); as state) {
                            <mat-option
                                disabled
                                class="pointer-events-none opacity-60"
                            >
                                {{
                                    (state === 'error'
                                        ? 'COMMON.LOAD_ERROR'
                                        : 'COMMON.SEARCH_EMPTY'
                                    ) | translate
                                }}
                            </mat-option>
                        }
                        @if (system_id().length < 2 && !space_list().length) {
                            <mat-option
                                disabled
                                class="pointer-events-none opacity-60"
                            >
                                {{
                                    'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                        | translate
                                }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                    <button
                        btn
                        matRipple
                        [disabled]="!system_id()"
                        (click)="bootstrap()"
                    >
                        {{ submit_label() | translate }}
                    </button>
                } @else {
                    <div load class="my-16 flex flex-col items-center">
                        <mat-spinner
                            [diameter]="32"
                            aria-hidden="true"
                        ></mat-spinner>
                        <div class="m-4" announce>
                            {{ 'COMMON.BOOTSTRAP_LOADING' | translate }}
                        </div>
                    </div>
                }
            </div>
            @if (!loading() || loading() === 'search') {
                <remote-setup-qr />
            }
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-70">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-70">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      AnnounceDirective,
      RemoteSetupQrComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;83ba1259b43fec112b8e24077d6edd40b53136cb09baf5aece8e24aaf6d4c48a;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/system-bootstrap.component.ts */\nmat-form-field {\n  width: calc(100% - 2rem);\n}\nbutton {\n  width: 8rem;\n  margin: 0.5rem;\n  margin-top: 0;\n}\n/*# sourceMappingURL=system-bootstrap.component.css.map */\n"] }]
  }], () => [], { store_key: [{ type: Input, args: [{ isSignal: true, alias: "store_key", required: true }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }], submit_label: [{ type: Input, args: [{ isSignal: true, alias: "submit_label", required: false }] }], system_route: [{ type: Input, args: [{ isSignal: true, alias: "system_route", required: true }] }], configured: [{ type: Output, args: ["configured"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemBootstrapComponent, { className: "SystemBootstrapComponent", filePath: "libs/components/src/lib/system-bootstrap.component.ts", lineNumber: 217 });
})();

// apps/control/src/app/bootstrap.component.ts
var _BootstrapComponent = class _BootstrapComponent {
  constructor() {
    this.store_key = CONTROL_STORE_KEY;
    this.systemRoute = (system_id) => ["/tabbed", system_id];
  }
};
_BootstrapComponent.\u0275fac = function BootstrapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BootstrapComponent)();
};
_BootstrapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "app-bootstrap", ""]], decls: 1, vars: 2, consts: [["heading", "APP.CONTROL.BOOTSTRAP_TITLE", "submit_label", "COMMON.SUBMIT", 3, "store_key", "system_route"]], template: function BootstrapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "system-bootstrap", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("store_key", ctx.store_key)("system_route", ctx.systemRoute);
  }
}, dependencies: [SystemBootstrapComponent], encapsulation: 2 });
var BootstrapComponent = _BootstrapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{
      selector: "[app-bootstrap]",
      template: `
        <system-bootstrap
            [store_key]="store_key"
            heading="APP.CONTROL.BOOTSTRAP_TITLE"
            submit_label="COMMON.SUBMIT"
            [system_route]="systemRoute"
        />
    `,
      imports: [SystemBootstrapComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/control/src/app/bootstrap.component.ts", lineNumber: 19 });
})();
export {
  BootstrapComponent
};
//# debugId=12a3201d-ca6a-5241-9005-7f4b60070ca2
//# sourceMappingURL=bootstrap.component-IHSO76BI.js.map
