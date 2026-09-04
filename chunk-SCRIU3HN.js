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
  const { exp: EXP2, log: LOG2 } = GF256;
  const gen = new Uint8Array(eccWords);
  gen[eccWords - 1] = 1;
  for (let i = 0, root = 1; i < eccWords; i++) {
    for (let j = 0; j < eccWords; j++) {
      const c = gen[j];
      gen[j] = (c ? EXP2[LOG2[c] + LOG2[root]] : 0) ^ (j + 1 < eccWords ? gen[j + 1] : 0);
    }
    root = EXP2[LOG2[root] + 1];
  }
  return gen;
}
var RS_CACHE = [];
function rsCached(eccWords) {
  let cached = RS_CACHE[eccWords];
  if (cached !== void 0)
    return cached;
  const gen = rsGenerator(eccWords);
  const { exp: EXP2, log: LOG2 } = GF256;
  const mul2 = new Uint8Array(256 * eccWords);
  for (let f = 1; f < 256; f++) {
    const lf = LOG2[f];
    const off = f * eccWords;
    for (let j = 0; j < eccWords; j++) {
      const c = gen[j];
      if (c)
        mul2[off + j] = EXP2[LOG2[c] + lf];
    }
  }
  return RS_CACHE[eccWords] = { gen, mul: mul2 };
}
function rsEcc(data, gen, mul2) {
  const { exp: EXP2, log: LOG2 } = GF256;
  const eccWords = gen.length;
  const res = new Uint8Array(eccWords);
  if (mul2 !== void 0) {
    const last = eccWords - 1;
    for (let i = 0; i < data.length; i++) {
      const off = (data[i] ^ res[0]) * eccWords;
      for (let j = 0; j < last; j++)
        res[j] = res[j + 1] ^ mul2[off + j];
      res[last] = mul2[off + last];
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
          res[j] ^= EXP2[LOG2[gen[j]] + LOG2[f]];
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
  const cap2 = capacity(ver, ecc);
  const lengthBits = LENGTH_BITS[type][Math.floor((ver + 7) / 17)];
  const dataLen = type === "byte" ? utf8.length : text.length;
  if (dataLen >= 1 << lengthBits)
    err("Capacity overflow");
  const bytes = new Uint8Array(cap2.capacity >>> 3);
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
  if (bitPos > cap2.capacity)
    err("Capacity overflow");
  if (accBits)
    bytes[bytePos] = acc << 8 - accBits & 255;
  bitPos += Math.min(4, cap2.capacity - bitPos);
  if (bitPos & 7)
    bitPos += 8 - (bitPos & 7);
  for (let i = bitPos >>> 3, pad = 0; i < bytes.length; i++, pad ^= 1)
    bytes[i] = pad ? 17 : 236;
  const { words, numBlocks, shortBlocks, blockLen } = cap2;
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
var matSet = (m, x, y, bit2) => {
  const i = y * m.words + (x >>> 5);
  const b = 1 << (x & 31);
  m.v[i] = bit2 ? m.v[i] | b : m.v[i] & ~b;
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
    const bit2 = bits >> i & 1;
    if (i < 6)
      matSet(m, 8, i, bit2);
    else if (i < 8)
      matSet(m, 8, i + 1, bit2);
    else if (i === 8)
      matSet(m, 7, 8, bit2);
    else
      matSet(m, 14 - i, 8, bit2);
    if (i < 8)
      matSet(m, size - 1 - i, 8, bit2);
    else
      matSet(m, 8, size - 15 + i, bit2);
  }
  matSet(m, 8, size - 8, 1);
  if (ver >= 7) {
    const vbits = versionBits(ver);
    for (let i = 0; i < 18; i++) {
      const bit2 = vbits >> i & 1;
      const x = size - 11 + i % 3;
      const y = i / 3 | 0;
      matSet(m, x, y, bit2);
      matSet(m, y, x, bit2);
    }
  }
}
var symCache;
function buildSymCache(ver) {
  const size = 21 + 4 * (ver - 1);
  const m = mat(size);
  const fun = new Uint8Array(size * size);
  const setF = (x, y, bit2) => {
    matSet(m, x, y, bit2);
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
  const { m, map } = r;
  const row = new Uint8Array(W);
  let prevMy = -2;
  for (let y = 0, i = 0; y < W; y++) {
    const my = map[y];
    if (my !== prevMy) {
      prevMy = my;
      row.fill(0);
      if (my >= 0) {
        for (let x = 0; x < W; x++)
          if (map[x] >= 0)
            row[x] = matGet(m, map[x], my);
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
function encodeQR(text, output = "raw", opts = {}) {
  asString(text, "text");
  asString(output, "output");
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
  const maxOutputSize = output === "ascii" || output === "gif" || output === "data-url" ? MAX_COMPACT_OUTPUT_SIZE : MAX_OUTPUT_SIZE;
  if (W > maxOutputSize)
    throw new RangeError(`invalid opts: output is ${W}x${W} (max ${maxOutputSize}), reduce border/scale`);
  const map = new Int32Array(W);
  for (let i = 0; i < W; i++) {
    const f = Math.floor(i / scale) - border;
    map[i] = f >= 0 && f < m.size ? f : -1;
  }
  const r = { m, W, map };
  if (output === "raw")
    return renderRaw(r);
  if (output === "ascii")
    return renderAscii(r);
  if (output === "term")
    return renderTerm(r);
  if (output === "svg")
    return renderSvg(r, opts.optimize === void 0 ? true : opts.optimize);
  if (output === "gif")
    return renderGif(r);
  if (output === "data-url")
    return gifDataUrl(renderGif(r));
  return err(`Unknown output: ${output}`);
}

// node_modules/qr/decode.js
var cap = (value, min, max) => {
  let result = value;
  if (max !== void 0)
    result = Math.min(result, max);
  if (min !== void 0)
    result = Math.max(result, min);
  return result;
};
var { exp: EXP, log: LOG } = GF256;
var mul = (a, b) => a && b ? EXP[LOG[a] + LOG[b]] : 0;
var inv = (a) => EXP[255 - LOG[a]];
var MAX_IMAGE_SIDE = 4096;
var MAX_ARENA_BYTES = 64 * 1024 * 1024;
var validateSize = (size, name) => {
  if (!Number.isSafeInteger(size.width) || !Number.isSafeInteger(size.height))
    throw new TypeError(`${name} expected safe integer width and height`);
  if (size.width <= 0 || size.height <= 0)
    throw new RangeError(`${name} expected positive width and height`);
  if (size.width > MAX_IMAGE_SIDE || size.height > MAX_IMAGE_SIDE)
    throw new RangeError(`${name} expected width and height <= ${MAX_IMAGE_SIDE}, got ${size.width}x${size.height}`);
  return size.width * size.height;
};
function darkToImage(width, height, dk) {
  const data = new Uint8Array(width * height * 4);
  let i = 0;
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const color = dk(x, y) ? 0 : 255;
      data[i] = color;
      data[i + 1] = color;
      data[i + 2] = color;
      data[i + 3] = 255;
      i += 4;
    }
  return { width, height, data };
}
var FAIL = Object.freeze({
  data: Object.freeze(new Error("data")),
  dimension: Object.freeze(new Error("dimension")),
  finder: Object.freeze(new Error("finder")),
  format: Object.freeze(new Error("format")),
  alignment: Object.freeze(new Error("alignment")),
  rs: Object.freeze(new Error("rs")),
  timing: Object.freeze(new Error("timing")),
  version: Object.freeze(new Error("version"))
});
var ECI_ENCODINGS = {
  1: "iso-8859-1",
  2: "ibm437",
  3: "iso-8859-1",
  4: "iso-8859-2",
  5: "iso-8859-3",
  6: "iso-8859-4",
  7: "iso-8859-5",
  8: "iso-8859-6",
  9: "iso-8859-7",
  10: "iso-8859-8",
  11: "iso-8859-9",
  13: "iso-8859-11",
  15: "iso-8859-13",
  16: "iso-8859-14",
  17: "iso-8859-15",
  18: "iso-8859-16",
  20: "shift-jis",
  21: "windows-1250",
  22: "windows-1251",
  23: "windows-1252",
  24: "windows-1256",
  25: "utf-16be",
  26: "utf-8",
  28: "big5",
  29: "gbk",
  30: "euc-kr"
};
var ECI_DECODERS = {};
for (const [id, name] of Object.entries(ECI_ENCODINGS)) {
  try {
    ECI_DECODERS[+id] = new TextDecoder(name);
  } catch {
    ECI_DECODERS[+id] = void 0;
  }
}
var NUMERIC_LENGTH_BITS = Uint8Array.of(10, 12, 14);
var ALPHANUMERIC_LENGTH_BITS = Uint8Array.of(9, 11, 13);
var BYTE_LENGTH_BITS = Uint8Array.of(8, 16, 16);
var Payload = {
  create(capacity2) {
    const bytes = new Uint8Array(capacity2);
    const views = new Array(capacity2 + 1);
    for (let i = 0; i < views.length; i++)
      views[i] = new Uint8Array(bytes.buffer, 0, i);
    let state;
    const read = (bits) => {
      const start = state.position;
      if (start + bits > state.dataLen * 8)
        return -1;
      let value = 0;
      let pos = start;
      for (let i = 0; i < bits; i++) {
        value = value << 1 | state.data[pos >> 3] >> 7 - (pos & 7) & 1;
        pos++;
      }
      state.position = pos;
      return value;
    };
    state = { position: 0, data: new Uint8Array(0), dataLen: 0, bytes, read, views };
    return state;
  },
  decode(state, data, dataLen, version, deferText = false) {
    state.position = 0;
    state.data = data;
    state.dataLen = dataLen;
    const read = state.read;
    const cls = version < 10 ? 0 : version < 27 ? 1 : 2;
    let eci = 26;
    let res = "";
    const parts = deferText ? [] : void 0;
    while (state.position + 4 <= dataLen * 8) {
      const mode = read(4);
      if (!mode)
        break;
      if (mode === 7) {
        const b0 = read(8);
        if (b0 < 0)
          return FAIL.data;
        if ((b0 & 128) === 0)
          eci = b0;
        else {
          const len = (b0 & 192) === 128 ? 8 : 16;
          const value = read(len);
          if (value < 0)
            return FAIL.data;
          eci = (b0 & (len === 8 ? 63 : 31)) << len;
          eci |= value;
        }
        continue;
      }
      if (mode === 1) {
        let length = read(NUMERIC_LENGTH_BITS[cls]);
        if (length < 0)
          return FAIL.data;
        for (; length >= 3; length -= 3) {
          const value = read(10);
          if (value < 0 || value >= 1e3)
            return FAIL.data;
          res += String(value).padStart(3, "0");
        }
        if (length) {
          const value = read(length === 2 ? 7 : 4);
          if (value < 0 || value >= 10 ** length)
            return FAIL.data;
          res += String(value).padStart(length, "0");
        }
      } else if (mode === 2) {
        let length = read(ALPHANUMERIC_LENGTH_BITS[cls]);
        if (length < 0)
          return FAIL.data;
        for (; length >= 2; length -= 2) {
          const value = read(11);
          if (value < 0 || value >= 45 * 45)
            return FAIL.data;
          res += ALPHANUMERIC[value / 45 | 0] + ALPHANUMERIC[value % 45];
        }
        if (length) {
          const value = read(6);
          if (value < 0 || value >= 45)
            return FAIL.data;
          res += ALPHANUMERIC[value];
        }
      } else if (mode === 4) {
        const length = read(BYTE_LENGTH_BITS[cls]);
        if (length < 0 || state.position + 8 * length > dataLen * 8)
          return FAIL.data;
        if (parts) {
          const segment = new Uint8Array(length);
          for (let i = 0; i < length; i++)
            segment[i] = read(8);
          if (res)
            parts.push(res);
          parts.push([segment, eci]);
          res = "";
        } else {
          const encoding = ECI_ENCODINGS[eci];
          if (!encoding || length >= state.views.length)
            return FAIL.data;
          const decoder = ECI_DECODERS[eci] || new TextDecoder(encoding);
          for (let i = 0; i < length; i++)
            state.bytes[i] = read(8);
          res += decoder.decode(state.views[length]);
        }
      } else
        return FAIL.data;
    }
    if (!parts)
      return res;
    if (res)
      parts.push(res);
    return parts;
  },
  finish(decoded, textDecoder) {
    if (typeof decoded === "string")
      return decoded;
    if (!textDecoder)
      throw new Error("text decoder");
    let res = "";
    for (const part of decoded)
      res += typeof part === "string" ? part : textDecoder(part[0], part[1]);
    return res;
  }
};
var dist2 = (pts, a, b) => (pts[a] - pts[b]) ** 2 + (pts[a + 1] - pts[b + 1]) ** 2;
var distance = (first, second) => Math.hypot(second.x - first.x, second.y - first.y);
var checkVersion = (m, size) => {
  const ver = (size - 17) / 4;
  if (ver < 7)
    return true;
  let v1 = 0;
  let v2 = 0;
  for (let i = 0; i < 18; i++) {
    const x = size - 11 + i % 3;
    const y = i / 3 | 0;
    v1 |= m[y * size + x] << i;
    v2 |= m[x * size + y] << i;
  }
  const expected = versionBits(ver);
  const d1 = popcnt(expected ^ v1);
  const d2 = popcnt(expected ^ v2);
  return d1 <= 3 || d2 <= 3;
};
function squareToQuad(out, points) {
  const x1 = points[0];
  const y1 = points[1];
  const x2 = points[2];
  const y2 = points[3];
  const x3 = points[4];
  const y3 = points[5];
  const x4 = points[6];
  const y4 = points[7];
  const dx3 = x1 - x2 + x3 - x4;
  const dy3 = y1 - y2 + y3 - y4;
  if (dx3 === 0 && dy3 === 0) {
    out[0] = x2 - x1;
    out[1] = x3 - x2;
    out[2] = x1;
    out[3] = y2 - y1;
    out[4] = y3 - y2;
    out[5] = y1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return;
  }
  const dx1 = x2 - x3;
  const dx2 = x4 - x3;
  const dy1 = y2 - y3;
  const dy2 = y4 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const a31 = (dx3 * dy2 - dx2 * dy3) / den;
  const a32 = (dx1 * dy3 - dx3 * dy1) / den;
  out[0] = x2 - x1 + a31 * x2;
  out[1] = x4 - x1 + a32 * x4;
  out[2] = x1;
  out[3] = y2 - y1 + a31 * y2;
  out[4] = y4 - y1 + a32 * y4;
  out[5] = y1;
  out[6] = a31;
  out[7] = a32;
  out[8] = 1;
}
var adjugate = (o, m) => {
  for (let i = 0; i < 9; i++) {
    const r = i / 3 | 0;
    const c = i % 3;
    const r1 = (c + 1) % 3 * 3;
    const r2 = (c + 2) % 3 * 3;
    const c1 = (r + 1) % 3;
    const c2 = (r + 2) % 3;
    o[i] = m[r1 + c1] * m[r2 + c2] - m[r1 + c2] * m[r2 + c1];
  }
};
var ptMul = (o, a, b) => {
  for (let r = 0; r < 9; r += 3) {
    const a0 = a[r];
    const a1 = a[r + 1];
    const a2 = a[r + 2];
    for (let c = 0; c < 3; c++)
      o[r + c] = a0 * b[c] + a1 * b[c + 3] + a2 * b[c + 6];
  }
};
var makePattern = () => ({ x: 0.1, y: 0.1, ms: 0.1 });
var LUMA8 = { step: 1, bits: 8 };
var LUMA10 = { step: 2, bits: 10 };
var LUMA12 = { step: 2, bits: 12 };
var RGB = { step: 3, bits: 8 };
var RGBA = { step: 4, bits: 8 };
var FORMATS = {
  RGB,
  RGBA,
  RGBX: RGBA,
  BGRA: RGBA,
  BGRX: RGBA,
  I420: LUMA8,
  I420A: LUMA8,
  I422: LUMA8,
  I444: LUMA8,
  NV12: LUMA8,
  I420P10: LUMA10,
  I420P12: LUMA12
};
var inputFormat = (format) => FORMATS[format];
var validateOpts = (opts) => {
  if (opts === null || typeof opts !== "object" || Array.isArray(opts))
    throw new TypeError(`"opts" expected object, got type=${typeof opts}`);
  if (opts.format !== void 0 && !inputFormat(opts.format))
    throw new TypeError(`invalid opts.format=${opts.format} (${typeof opts.format})`);
  if (opts.effort !== void 0 && opts.effort !== Infinity && (!Number.isSafeInteger(opts.effort) || opts.effort < 1))
    throw new TypeError(`invalid opts.effort=${opts.effort} (${typeof opts.effort})`);
  if (opts.timeLimit !== void 0 && opts.timeLimit !== Infinity && (typeof opts.timeLimit !== "number" || !Number.isFinite(opts.timeLimit) || opts.timeLimit < 0))
    throw new TypeError(`invalid opts.timeLimit=${opts.timeLimit} (${typeof opts.timeLimit})`);
  for (const name of ["textDecoder", "pointsOnDetect", "imageOnResult", "imageOnBitmap"])
    if (opts[name] !== void 0 && typeof opts[name] !== "function")
      throw new TypeError(`invalid opts.${name}=${opts[name]} (${typeof opts[name]})`);
};
var validateImage = (img, named, layout, capacity2) => {
  const px = validateSize(img, '"img"');
  if (capacity2 && (img.width > capacity2.width || img.height > capacity2.height))
    throw new RangeError(`"img" expected dimensions <= ${capacity2.width}x${capacity2.height}, got ${img.width}x${img.height}`);
  const data = img.data;
  if (!(data instanceof Uint8Array || data instanceof Uint8ClampedArray))
    throw new TypeError(`"img.data" expected Uint8Array or Uint8ClampedArray, got ${typeof data}`);
  const bytes = data;
  let format;
  if (named !== void 0) {
    format = inputFormat(named);
    if (!format)
      throw new TypeError(`invalid opts.format=${named} (${typeof named})`);
    if (layout) {
      const { offset, stride } = layout;
      const row = format.step * img.width;
      const end = offset + (img.height - 1) * stride + row;
      if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(stride) || offset < 0 || stride < row || end > bytes.length)
        throw new RangeError(`"img.data" expected valid offset/stride for format=${named}, got offset=${offset}, stride=${stride}, length=${bytes.length}`);
    } else {
      const expected = format.step * px;
      const planar = format.step <= 2;
      if (planar && bytes.length < expected || !planar && bytes.length !== expected)
        throw new RangeError(`"img.data" expected ${planar ? "at least " : ""}${expected} bytes for format=${named}, got ${bytes.length}`);
    }
  } else if (bytes.length === 3 * px)
    format = RGB;
  else if (bytes.length === 4 * px)
    format = RGBA;
  else
    throw new RangeError(`"img.data" expected ${3 * px} or ${4 * px} bytes without opts.format, got ${bytes.length}`);
  return format;
};
var copyLuma = (out, maxSize, img, named, layout) => {
  const { step, bits } = validateImage(img, named, layout, maxSize);
  const { width, height, data } = img;
  const stride = layout?.stride || width * step;
  const offset = layout?.offset || 0;
  if (data === out && !offset && stride === width && step === 1)
    return;
  for (let y = 0; y < height; y++) {
    let src = offset + y * stride;
    let dst = y * width;
    if (step === 1)
      for (let x = 0; x < width; x++) {
        out[dst++] = data[src];
        src++;
      }
    else if (step === 2)
      for (let x = 0; x < width; x++) {
        out[dst++] = (data[src] | data[src + 1] << 8) >>> bits - 8;
        src += step;
      }
    else
      for (let x = 0; x < width; x++) {
        out[dst++] = data[src] + 2 * data[src + 1] + data[src + 2] >> 2;
        src += step;
      }
  }
};
var packQuad = (quad, x0, y0, x1, y1, x2, y2, x3, y3) => {
  quad[0] = x0;
  quad[1] = y0;
  quad[2] = x1;
  quad[3] = y1;
  quad[4] = x2;
  quad[5] = y2;
  quad[6] = x3;
  quad[7] = y3;
};
var bit = (layer, x, y) => {
  if (x < 0 || y < 0 || x >= layer.width || y >= layer.height)
    return -1;
  return layer.bitmap[y * layer.words + (x >>> 5)] >>> (x & 31) & 1;
};
var ratio = (a, b, c, d, e) => {
  const total = a + b + c + d + e;
  if (total < 7)
    return 0;
  const ms = total / 7;
  const tol = ms * 0.5;
  return Math.abs(ms - a) < tol && Math.abs(ms - b) < tol && Math.abs(3 * ms - c) < 3 * tol && Math.abs(ms - d) < tol && Math.abs(ms - e) < tol ? ms : 0;
};
var run = (layer, x, y, dx, dy, color, cap2) => {
  let n = 0;
  if (dy) {
    while (bit(layer, x, y) === color && n <= cap2) {
      n++;
      y += dy;
    }
    return n;
  }
  if (y < 0 || y >= layer.height)
    return 0;
  const row = y * layer.words;
  while (x >= 0 && x < layer.width && n <= cap2) {
    const shift = x & 31;
    const stops = (color ? ~layer.bitmap[row + (x >>> 5)] : layer.bitmap[row + (x >>> 5)]) >>> 0;
    const w = dx > 0 ? stops >>> shift : stops << 31 - shift >>> 0;
    const span = dx > 0 ? Math.min(32 - shift, layer.width - x) : shift + 1;
    const first = !w ? 32 : dx > 0 ? 31 - Math.clz32((w & -w) >>> 0) : Math.clz32(w);
    const len = Math.min(first, span);
    n += len;
    x += dx * len;
    if (first < span)
      break;
  }
  return Math.min(n, Math.floor(cap2) + 1);
};
var cross = (layer, cx, cy, dx, dy, maxMs, inverted, measure = false) => {
  const center = +!inverted;
  const side = +inverted;
  let r2 = run(layer, cx, cy, -dx, -dy, center, Infinity);
  let back = r2;
  const r1 = run(layer, cx - dx * back, cy - dy * back, -dx, -dy, side, maxMs);
  back += r1;
  const r0 = run(layer, cx - dx * back, cy - dy * back, -dx, -dy, center, maxMs);
  back += r0;
  const start = (dx ? cx : cy) - back;
  const forward = run(layer, cx + dx, cy + dy, dx, dy, center, Infinity);
  r2 += forward;
  let ahead = 1 + forward;
  const r3 = run(layer, cx + dx * ahead, cy + dy * ahead, dx, dy, side, maxMs);
  ahead += r3;
  const r4 = run(layer, cx + dx * ahead, cy + dy * ahead, dx, dy, center, maxMs);
  if (!ratio(r0, r1, r2, r3, r4))
    return -1;
  return measure ? (r0 + r1 + r2 + r3 + r4) / 7 : start + 1 + r0 + r1 + r2 / 2;
};
var vertical = (layer, pattern, inverted, measure = false) => {
  const limit = 3 * pattern.ms;
  return cross(layer, Math.round(pattern.x), Math.round(pattern.y), 0, 1, limit, inverted, measure);
};
var refinePattern = (layer, pattern, inverted) => {
  const y = vertical(layer, pattern, inverted);
  if (y < 0)
    return -1;
  const limit = 3 * pattern.ms;
  const x = cross(layer, Math.round(pattern.x), Math.round(y), 1, 0, limit, inverted);
  if (x < 0)
    return -1;
  const movement = Math.abs(x - pattern.x) + Math.abs(y - pattern.y);
  pattern.x = x;
  pattern.y = y;
  return movement;
};
var refineTriple = (layer, triple) => {
  const tl = refinePattern(layer, triple.tl, triple.inverted);
  if (tl < 0)
    return false;
  const tr = refinePattern(layer, triple.tr, triple.inverted);
  if (tr < 0)
    return false;
  const bl = refinePattern(layer, triple.bl, triple.inverted);
  return bl >= 0 && tl + tr + bl > 0;
};
var fitPattern = (layer, pattern, inverted) => {
  const luma = layer.luma;
  const fit = (axis) => {
    const center = axis ? pattern.y : pattern.x;
    const other = axis ? pattern.x : pattern.y;
    const radius = Math.ceil(pattern.ms);
    const lo = Math.round(center) - radius;
    const hi = Math.round(center) + radius;
    let best = center;
    let bestScore = -Infinity;
    for (let candidate = lo; candidate <= hi; candidate++)
      for (let scale = 5; scale <= 15; scale += 2) {
        const pitch = pattern.ms * scale / 10;
        const crossRadius = Math.round(pitch / 2);
        const side = Math.ceil(3.5 * pitch);
        let dark2 = 0;
        let darkCount = 0;
        let light = 0;
        let lightCount = 0;
        for (let along = -side; along <= side; along++) {
          const module = Math.abs(along / pitch);
          const expectedDark = module < 1.5 || module >= 2.5;
          for (let across = -crossRadius; across <= crossRadius; across++) {
            const x = Math.round(axis ? other + across : candidate + along);
            const y = Math.round(axis ? candidate + along : other + across);
            if (x < 0 || y < 0 || x >= layer.width || y >= layer.height)
              continue;
            const value = luma[y * layer.width + x];
            if (expectedDark) {
              dark2 += value;
              darkCount++;
            } else {
              light += value;
              lightCount++;
            }
          }
        }
        let score = light / lightCount - dark2 / darkCount;
        if (inverted)
          score = -score;
        if (score > bestScore) {
          best = candidate;
          bestScore = score;
        }
      }
    return best;
  };
  pattern.x = fit(0);
  pattern.y = fit(1);
};
var mapPoint = (map, x, y) => {
  const den = map[6] * x + map[7] * y + map[8];
  return {
    x: (map[0] * x + map[1] * y + map[2]) / den,
    y: (map[3] * x + map[4] * y + map[5]) / den
  };
};
var crossPitch = (layer, pattern, inverted) => {
  const pitch = vertical(layer, pattern, inverted, true);
  return pitch < 0 ? 0 : pitch;
};
var finderPitch = (layer, pattern) => {
  const vertical2 = crossPitch(layer, pattern, false);
  return vertical2 ? Math.sqrt(pattern.ms * vertical2) : 0;
};
var edgePitch = (layer, first, second, inverted) => {
  const dx = second.x - first.x;
  const dy = second.y - first.y;
  const length = distance(first, second);
  if (!length)
    return 0;
  const pitch = (pattern) => {
    const vertical2 = crossPitch(layer, pattern, inverted);
    if (!vertical2)
      return 0;
    return Math.sqrt((dx / length * pattern.ms) ** 2 + (dy / length * vertical2) ** 2);
  };
  const firstPitch = pitch(first);
  const secondPitch = pitch(second);
  return firstPitch && secondPitch ? (firstPitch + secondPitch) / 2 : 0;
};
var copyPattern = (layer, index, out) => {
  const pos = index * 4;
  out.x = layer.patterns[pos];
  out.y = layer.patterns[pos + 1];
  out.ms = layer.patterns[pos + 2];
};
var swapSet = (layer, a, b) => {
  const sets = layer.sets;
  const ap = a * 5;
  const bp = b * 5;
  for (let i = 0; i < 5; i++) {
    const value = sets[ap + i];
    sets[ap + i] = sets[bp + i];
    sets[bp + i] = value;
  }
};
var siftDown = (layer, end) => {
  const sets = layer.sets;
  for (let index = 0; ; ) {
    const left = index * 2 + 1;
    if (left >= end)
      return;
    const right = left + 1;
    const child = right < end && sets[right * 5] > sets[left * 5] ? right : left;
    if (sets[index * 5] >= sets[child * 5])
      return;
    swapSet(layer, index, child);
    index = child;
  }
};
var evalLow = (poly, offset, length, x) => {
  let value = 0;
  for (let i = length - 1; i >= 0; i--)
    value = mul(value, x) ^ poly[offset + i];
  return value;
};
var scanRows = {
  // Downsample two source rows into one pyramid row with a 2x2 box filter.
  resize(src, dst, width, dstWidth, from, to) {
    for (let y = from; y < to; y++) {
      let srcPos = (y << 1) * width;
      let dstPos = y * dstWidth;
      for (let x = 0; x < dstWidth; x++) {
        dst[dstPos++] = src[srcPos] + src[srcPos + 1] + src[srcPos + width] + src[srcPos + width + 1] + 2 >> 2;
        srcPos += 2;
      }
    }
  },
  // Compute one local threshold per 8x8 block, including low-contrast predecessor propagation.
  blocks(layer, from, to) {
    const brightness = layer.luma;
    const block = 8;
    const bWidth = layer.blockWidth;
    const maxY = layer.height - block;
    const maxX = layer.width - block;
    const blocks = layer.blocks;
    for (let y = from; y < to; y++) {
      const yPos = cap(y * block, 0, maxY);
      for (let x = 0; x < bWidth; x++) {
        const xPos = cap(x * block, 0, maxX);
        let sum = 0;
        let min = 255;
        let max = 0;
        let pos = yPos * layer.width + xPos;
        for (let yy = 0; yy < block; yy++) {
          for (let xx = 0; xx < block; xx++) {
            const pixel = brightness[pos + xx];
            sum += pixel;
            min = Math.min(min, pixel);
            max = Math.max(max, pixel);
          }
          pos += layer.width;
        }
        let average = Math.floor(sum / block ** 2);
        if (max - min <= 24) {
          average = min / 2;
          if (y > 0 && x > 0) {
            const top = blocks[(y - 1) * bWidth + x];
            const left = blocks[y * bWidth + x - 1];
            const topLeft = blocks[(y - 1) * bWidth + x - 1];
            const previous = (2 * top + left + topLeft) / 4;
            if (min < previous)
              average = previous;
          }
        }
        blocks[bWidth * y + x] = average >>> 0;
      }
    }
  },
  // Smooth block thresholds and write their 8x8 binary pixels into the packed bitmap.
  bitmap(layer, from, to) {
    const brightness = layer.luma;
    const block = 8;
    const bWidth = layer.blockWidth;
    const bHeight = layer.blockHeight;
    const maxY = layer.height - block;
    const maxX = layer.width - block;
    const blocks = layer.blocks;
    for (let y = from; y < to; y++) {
      const yPos = cap(y * block, 0, maxY);
      const top = cap(y, 2, bHeight - 3);
      for (let x = 0; x < bWidth; x++) {
        const xPos = cap(x * block, 0, maxX);
        const left = cap(x, 2, bWidth - 3);
        let sum = 0;
        for (let yy = -2; yy <= 2; yy++) {
          const row = bWidth * (top + yy) + left;
          for (let xx = -2; xx <= 2; xx++)
            sum += blocks[row + xx];
        }
        const average = sum / 25;
        layer.cuts[y * bWidth + x] = Math.floor(average);
        let pos = yPos * layer.width + xPos;
        for (let yy = 0; yy < block; yy++) {
          let value = 0;
          for (let xx = 0; xx < block; xx++)
            value |= +(brightness[pos + xx] <= average) << xx;
          const shift = xPos & 31;
          const word = (yPos + yy) * layer.words + (xPos >>> 5);
          const lowMask = 255 << shift >>> 0;
          layer.bitmap[word] = (layer.bitmap[word] & ~lowMask | value << shift >>> 0) >>> 0;
          if (shift > 24) {
            const highMask = (1 << shift - 24) - 1;
            layer.bitmap[word + 1] = (layer.bitmap[word + 1] & ~highMask | value >>> 32 - shift) >>> 0;
          }
          pos += layer.width;
        }
      }
    }
  },
  // Find and merge horizontally seeded finder crosses in every second row.
  find(layer, from, to) {
    for (let y = from; y < to; y += 2) {
      let r0 = 0;
      let r1 = 0;
      let r2 = 0;
      let r3 = 0;
      let r4 = 0;
      let runs = 0;
      let previous = !!bit(layer, 0, y | 0);
      for (let x = 0; x < layer.width; ) {
        const length = run(layer, x, y, 1, 0, +previous, Infinity);
        x += length;
        r0 = r1;
        r1 = r2;
        r2 = r3;
        r3 = r4;
        r4 = length;
        runs++;
        const black = previous;
        previous = !previous;
        candidate: {
          if ((runs | 0) < 5)
            break candidate;
          const inverted = !black;
          const ms = ratio(r0, r1, r2, r3, r4);
          if (!ms)
            break candidate;
          const start = (x | 0) - r0 - r1 - r2 - r3 - r4;
          const cx = Math.round(start + r0 + r1 + r2 / 2);
          const limit = ms * 3;
          const cy = cross(layer, cx, y | 0, 0, 1, limit, inverted);
          if (cy < 0)
            break candidate;
          const refinedX = cross(layer, cx, Math.round(cy), 1, 0, limit, inverted);
          if (refinedX < 0)
            break candidate;
          const patterns = layer.patterns;
          const polarity = +inverted;
          for (let i = 0; i < layer.patternCount; i++) {
            const pos2 = i * 4;
            if ((layer.inverted[i] & 1) !== polarity || // Merge observations within two modules of the same finder center.
            Math.abs(patterns[pos2] - refinedX) >= 2 * ms || Math.abs(patterns[pos2 + 1] - cy) >= 2 * ms)
              continue;
            const count = patterns[pos2 + 3] + 1;
            patterns[pos2] = (patterns[pos2] * patterns[pos2 + 3] + refinedX) / count;
            patterns[pos2 + 1] = (patterns[pos2 + 1] * patterns[pos2 + 3] + cy) / count;
            patterns[pos2 + 2] = (patterns[pos2 + 2] * patterns[pos2 + 3] + ms) / count;
            patterns[pos2 + 3] = count;
            break candidate;
          }
          const index = layer.patternCount++;
          const pos = index * 4;
          if (pos + 3 >= patterns.length)
            throw new Error(`finder storage exhausted at ${layer.width}x${layer.height}`);
          patterns[pos] = refinedX;
          patterns[pos + 1] = cy;
          patterns[pos + 2] = ms;
          patterns[pos + 3] = 1;
          layer.inverted[index] = polarity;
        }
      }
    }
  }
};
var snapSize = (estimate) => Math.round((estimate - 17) / 4) * 4 + 17 | 0;
var runDecode = (walk) => {
  let step = walk.next();
  while (!step.done)
    step = walk.next(0);
  return step.value;
};
var nextTick = () => {
  const host = globalThis;
  if (typeof host.scheduler?.yield === "function")
    return host.scheduler.yield();
  return new Promise((resolve) => host.setTimeout(resolve, 0));
};
var runDecodeAsync = async (walk, timeLimit) => {
  const tick = Math.min(timeLimit, 8);
  let started = Date.now();
  try {
    let step = walk.next();
    for (; ; ) {
      if (step.done)
        return step.value;
      let waited = 0;
      if (Date.now() - started >= tick) {
        const waiting = Date.now();
        await nextTick();
        waited = Date.now() - waiting;
        started = Date.now();
      }
      step = walk.next(waited);
    }
  } catch (error) {
    walk.return(void 0);
    throw error;
  }
};
var _QRScanner = class {
  layers;
  opts;
  width;
  height;
  luma;
  grid = new Uint8Array(177 * 177);
  tmp8 = new Uint8Array(177 * 177);
  codewords = new Uint8Array(BYTES[40 - 1]);
  tmp32 = new Uint32Array(4 * 16 * 3 + 16);
  tmp64 = new Float64Array(7 * 7 * 2 + (7 * 7 - 3) * 4);
  payload = Payload.create(BYTES[40 - 1]);
  image;
  input;
  inFlight = false;
  staged = false;
  resized = false;
  // Finder selection and projection reuse the same typed temporaries by phase. Three homographies
  // stay separate because decode fallbacks retain them across a failed payload attempt.
  triple = {
    tl: makePattern(),
    tr: makePattern(),
    bl: makePattern(),
    inverted: false,
    tlIndex: 0,
    trIndex: 0,
    blIndex: 0
  };
  blocked = 0;
  effort;
  timeLimit;
  retryStart = 0;
  retries = 0;
  points;
  // Homography phases do not overlap: `map` holds the active result while `from` and `to` are
  // scratch; `to` doubles as the fine-plane map until the next homography build.
  map = new Float64Array(9);
  from = new Float64Array(9);
  to = new Float64Array(9);
  alignPoint = { x: 0.1, y: 0.1 };
  finePlane = {
    d: new Uint8Array(0),
    cut: new Int16Array(0),
    W: 0,
    H: 0,
    bw: 0,
    sh: 0
  };
  invertedProjection = false;
  decodedSize = 0;
  beginOperation() {
    if (this.inFlight)
      throw new Error("scanner operation already in flight");
    this.inFlight = true;
  }
  endOperation() {
    this.inFlight = false;
  }
  constructor(init) {
    validateOpts(init);
    const maxPixels = validateSize(init.maxSize, '"maxSize"');
    const maxSize = Object.freeze(__spreadValues({}, init.maxSize));
    const stride = init.stride === void 0 ? 1 : init.stride;
    if (!Number.isSafeInteger(stride) || stride < 1)
      throw new RangeError(`"stride" expected positive safe integer, got ${stride}`);
    const bytes = maxPixels * stride;
    if (!Number.isSafeInteger(bytes) || bytes > MAX_ARENA_BYTES)
      throw new RangeError(`input arena expected <= ${MAX_ARENA_BYTES} bytes, got ${maxPixels}*${stride}`);
    this.effort = init.effort === void 0 ? 1 : init.effort;
    this.timeLimit = init.timeLimit === void 0 ? 1e3 / 60 : init.timeLimit;
    this.opts = Object.freeze(__spreadProps(__spreadValues({}, init), {
      effort: this.effort,
      maxSize,
      timeLimit: this.timeLimit
    }));
    this.width = 0;
    this.height = 0;
    this.luma = new Uint8Array(bytes);
    this.image = { data: this.luma, height: 0, width: 0 };
    this.input = { data: this.luma, height: 0, width: 0 };
    const layers = [];
    let width = maxSize.width;
    let height = maxSize.height;
    for (let i = 0; i < 4; i++) {
      if (i && Math.min(width, height) < 64)
        break;
      const blockWidth = Math.ceil(width / 8);
      const blockHeight = Math.ceil(height / 8);
      const centers = Math.ceil(width / 7) * Math.ceil(height / 7);
      const luma = i ? new Uint8Array(width * height) : this.luma;
      const blocks = new Uint8Array(blockWidth * blockHeight);
      const cuts = new Int16Array(blockWidth * blockHeight);
      const fine = i ? { luma: this.image, r: i } : void 0;
      layers.push({
        bitmap: new Uint32Array(Math.ceil(width / 32) * height),
        blockHeight: 0,
        blockWidth: 0,
        blocks,
        cuts,
        height: 0,
        luma,
        patternCount: 0,
        patterns: new Float64Array(centers * 4),
        used: false,
        width: 0,
        words: 0,
        plane: {
          d: luma,
          cut: cuts,
          W: width,
          H: height,
          bw: Math.ceil(width / 8),
          sh: Math.log2(8)
        },
        context: {
          opts: this.opts,
          scale: 1 << i,
          ox: 0,
          oy: 0,
          fine
        },
        found: false,
        inverted: new Uint8Array(centers),
        setCount: 0,
        setCursor: 0,
        sets: new Float64Array(256 * 5),
        setsReady: false,
        pickSum: -1,
        pickLo: 0,
        pickHi: 0
      });
      width >>= 1;
      height >>= 1;
    }
    this.layers = layers;
  }
  // Decode corrected bytes through the shared QR payload/ECI parser; Awasm overrides this hook.
  decodePayload(data, dataLen, version) {
    const decoded = Payload.decode(this.payload, data, dataLen, version, !!this.opts.textDecoder);
    return decoded instanceof Error ? decoded : Payload.finish(decoded, this.opts.textDecoder);
  }
  // Compose the square-to-output and input-to-square homographies from `from` and `to`.
  mapQuad(out) {
    squareToQuad(out, this.to);
    squareToQuad(this.to, this.from);
    adjugate(this.from, this.to);
    ptMul(out, out, this.from);
  }
  // Build the module-to-plane map from the finder-center square (BR is the alignment inset).
  mapFinderQuad(out, size, t, brX, brY) {
    const c = 3.5;
    packQuad(this.from, c, c, size - c, c, size - 6.5, size - 6.5, c, size - c);
    packQuad(this.to, t.tl.x, t.tl.y, t.tr.x, t.tr.y, brX, brY, t.bl.x, t.bl.y);
    this.mapQuad(out);
  }
  // Fill the reusable alignment-position prefix for one QR version and return its length.
  setAlignments(ver) {
    if (ver === 1)
      return 0;
    const last = 17 + 4 * ver - 7;
    const count = Math.ceil((last - 6) / 28);
    let interval = Math.floor((last - 6) / count);
    if (interval & 1)
      interval++;
    else if ((last - 6) % count * 2 >= count)
      interval += 2;
    const positions = this.tmp8;
    positions[0] = 6;
    for (let i = 1; i < count; i++)
      positions[i] = last - (count - i) * interval;
    positions[count] = last;
    return count + 1;
  }
  /** Convert one source image into the preallocated native luma layer. */
  addImage(img, format = this.opts.format) {
    this.beginOperation();
    try {
      copyLuma(this.luma, this.opts.maxSize, img, format);
      this.stage(img);
    } finally {
      this.endOperation();
    }
  }
  // Reset every per-image field after copied or direct-written pixels become active.
  stage({ width, height }) {
    this.width = width;
    this.image.width = width;
    this.height = height;
    this.image.height = height;
    let aw = width;
    let ah = height;
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      const used = !i || Math.min(aw, ah) >= 64;
      layer.used = used;
      layer.width = used ? aw : 0;
      layer.height = used ? ah : 0;
      layer.words = used ? Math.ceil(aw / 32) : 0;
      layer.blockWidth = used ? Math.ceil(aw / 8) : 0;
      layer.blockHeight = used ? Math.ceil(ah / 8) : 0;
      layer.patternCount = 0;
      layer.plane.W = layer.width;
      layer.plane.H = layer.height;
      layer.plane.bw = layer.blockWidth;
      layer.context.ox = 0;
      layer.context.oy = 0;
      layer.found = false;
      layer.setCount = 0;
      layer.setCursor = 0;
      layer.setsReady = false;
      layer.pickSum = -1;
      aw >>= 1;
      ah >>= 1;
    }
    this.staged = true;
    this.resized = false;
    this.blocked = 0;
    this.retryStart = 0;
    this.retries = 0;
  }
  clean() {
    this.beginOperation();
    try {
      this.payload.position = 0;
      this.payload.bytes.fill(0);
      for (const v of Object.values(this))
        if (ArrayBuffer.isView(v))
          v.fill(0);
      for (const layer of this.layers) {
        for (const v of Object.values(layer))
          if (ArrayBuffer.isView(v))
            v.fill(0);
        layer.blockHeight = 0;
        layer.blockWidth = 0;
        layer.height = 0;
        layer.width = 0;
        layer.words = 0;
        layer.patternCount = 0;
        layer.setCount = 0;
        layer.setCursor = 0;
        layer.used = false;
        layer.found = false;
        layer.setsReady = false;
      }
      this.width = 0;
      this.image.width = 0;
      this.height = 0;
      this.image.height = 0;
      this.staged = false;
      this.resized = false;
      this.blocked = 0;
      this.points = void 0;
    } finally {
      this.endOperation();
    }
  }
  /** Process pixels that an integration wrote directly into {@link luma}. */
  processImage(size, format = "I420", layout = { offset: 0, stride: size.width * (inputFormat(format)?.step || 0) }) {
    this.beginOperation();
    try {
      this.input.width = size.width;
      this.input.height = size.height;
      copyLuma(this.luma, this.opts.maxSize, this.input, format, layout);
      this.stage(size);
    } finally {
      this.endOperation();
    }
  }
  // Project a module center, then classify its source pixel against the owning threshold block.
  read(s, map, mx, my) {
    const point = mapPoint(map, mx, my);
    const px = Math.floor(point.x);
    const py = Math.floor(point.y);
    if (px < 0 || py < 0 || px >= s.W || py >= s.H)
      return 0;
    const dark2 = s.d[py * s.W + px] <= s.cut[(py >> s.sh) * s.bw + (px >> s.sh)];
    return dark2 !== this.invertedProjection ? 1 : 0;
  }
  // Recover the fourth corner of a projective finder square from its three local pitches.
  perspective(t, p0, p1, p2) {
    const { tl, tr, bl } = t;
    const wx = Math.cbrt(p0 / p1) ** 2;
    const wy = Math.cbrt(p0 / p2) ** 2;
    const cornerDen = wx + wy - 1;
    if (!cornerDen)
      return false;
    const brX = (wx * tr.x + wy * bl.x - tl.x) / cornerDen;
    const brY = (wx * tr.y + wy * bl.y - tl.y) / cornerDen;
    const dx3 = tl.x - tr.x + brX - bl.x;
    const dy3 = tl.y - tr.y + brY - bl.y;
    if ((dx3 || dy3) && !((tr.x - brX) * (bl.y - brY) - (bl.x - brX) * (tr.y - brY)))
      return false;
    packQuad(this.to, tl.x, tl.y, tr.x, tr.y, brX, brY, bl.x, bl.y);
    squareToQuad(this.map, this.to);
    return true;
  }
  // Best 5x5-template placement on a 7x7 offset lattice around (bx,by): offsets are sx*mul
  // (grid: half-module steps, ties broken toward the smallest offset; perspective: unit
  // steps — the c6 doubled pixel offsets -6..6 step 2 pre-divided — first best wins).
  searchAlign(s, map, scale, side, bx, by, mul2, tie) {
    let bestX = 0;
    let bestY = 0;
    let bestErrors = tie ? Infinity : 5 + 1;
    for (let sy = -3; sy <= 3; sy++)
      for (let sx = -3; sx <= 3; sx++) {
        const dx = sx * mul2;
        const dy = sy * mul2;
        const cap2 = bestErrors + +tie;
        let errors = 0;
        for (let y = -2; y <= 2 && errors < cap2; y++)
          for (let x = -2; x <= 2; x++) {
            const dark2 = !!this.read(s, map, scale + (bx + dx + x) / side, scale + (by + dy + y) / side);
            const edge = Math.abs(x) === 2 || Math.abs(y) === 2;
            if (dark2 !== (edge || x === 0 && y === 0) && ++errors >= cap2)
              break;
          }
        if (errors > bestErrors || !tie && errors === bestErrors)
          continue;
        if (errors === bestErrors && dx * dx + dy * dy >= bestX * bestX + bestY * bestY)
          continue;
        bestX = dx;
        bestY = dy;
        bestErrors = errors;
      }
    if (bestErrors > 5)
      return false;
    const p = mapPoint(map, scale + (bx + bestX) / side, scale + (by + bestY) / side);
    this.alignPoint.x = p.x;
    this.alignPoint.y = p.y;
    return true;
  }
  // Test whether a finder lies inside an affine QR region already decoded on any pyramid layer.
  excluded(layer, index) {
    if (!this.blocked)
      return false;
    const scale = layer.context.scale;
    const offset = (scale - 1) / 2;
    const pos = 4 * index;
    const x = scale * layer.patterns[pos] + offset;
    const y = scale * layer.patterns[pos + 1] + offset;
    for (const source of this.layers) {
      if (!source.found)
        continue;
      const sourceScale = source.context.scale;
      const sourceOffset = (sourceScale - 1) / 2;
      const s = source.patterns;
      for (let i = 0; i < source.patternCount; i++) {
        const state = source.inverted[i];
        if (!(state & 2))
          continue;
        if (!(state & 4))
          continue;
        const tl = 4 * i;
        const tr = 4 * s[tl + 2];
        const bl = 4 * s[tl + 3];
        const ux = sourceScale * (s[tr] - s[tl]);
        const uy = sourceScale * (s[tr + 1] - s[tl + 1]);
        const vx = sourceScale * (s[bl] - s[tl]);
        const vy = sourceScale * (s[bl + 1] - s[tl + 1]);
        const determinant = ux * vy - uy * vx;
        const dx = x - (sourceScale * s[tl] + sourceOffset);
        const dy = y - (sourceScale * s[tl + 1] + sourceOffset);
        const across = (dx * vy - dy * vx) / determinant;
        const down = (dy * ux - dx * uy) / determinant;
        const padding = s[tr + 2];
        if (across >= -padding && across <= 1 + padding && down >= -padding && down <= 1 + padding)
          return true;
      }
    }
    return false;
  }
  // Mark this layer's finders that fall inside any already decoded QR region.
  exclude(layer) {
    for (let i = 0; i < layer.patternCount; i++) {
      if (layer.inverted[i] & 2 || !this.excluded(layer, i))
        continue;
      layer.inverted[i] |= 2;
      this.blocked++;
    }
  }
  // Bounded candidate retention is identical for mandatory and retry selection; they differ only
  // in their rank expression and capacity. Equal ranks keep the earlier slot.
  retain(index, rank, count, capacity2, offset = 0) {
    const ranks = this.tmp64;
    if (count < capacity2) {
      this.tmp32[count] = index;
      ranks[offset + count] = rank;
      return count + 1;
    }
    let worst = 0;
    for (let i = 1; i < count; i++)
      if (ranks[offset + worst] < ranks[offset + i])
        worst = i;
    if (rank >= ranks[offset + worst])
      return count;
    this.tmp32[worst] = index;
    ranks[offset + worst] = rank;
    return count;
  }
  // Assign three finder records to TL/TR/BL by longest side, then enforce clockwise orientation.
  makeTriple(layer, i0, i1, i2) {
    const pts = layer.patterns;
    const p0 = i0 * 4;
    const p1 = i1 * 4;
    const p2 = i2 * 4;
    const d01 = dist2(pts, p0, p1);
    const d12 = dist2(pts, p1, p2);
    const d02 = dist2(pts, p0, p2);
    let tl = i2;
    let bl = i0;
    let tr = i1;
    if (d12 >= d01 && d12 >= d02) {
      tl = i0;
      bl = i1;
      tr = i2;
    } else if (d02 >= d12 && d02 >= d01) {
      tl = i1;
      bl = i0;
      tr = i2;
    }
    copyPattern(layer, tl, this.triple.tl);
    copyPattern(layer, bl, this.triple.bl);
    copyPattern(layer, tr, this.triple.tr);
    const { tl: topLeft, tr: topRight, bl: bottomLeft } = this.triple;
    if ((topRight.x - topLeft.x) * (bottomLeft.y - topLeft.y) - (topRight.y - topLeft.y) * (bottomLeft.x - topLeft.x) < 0) {
      const index = tr;
      tr = bl;
      bl = index;
      copyPattern(layer, tr, topRight);
      copyPattern(layer, bl, bottomLeft);
    }
    this.triple.tlIndex = tl;
    this.triple.trIndex = tr;
    this.triple.blIndex = bl;
    return this.triple;
  }
  // Best triple of one polarity for the mandatory attempt, into tmp64[polarity * 4..] as
  // (i0, i1, i2, relative error). Raw error rejects square cross-symbol mixes in dense grids;
  // sparse scenes use relative error minus row confidence to reject small data pseudo-squares.
  pickPolarity(layer, polarity) {
    const pts = layer.patterns;
    const candidates = this.tmp32;
    let confirmed = 0;
    for (let i = 0; i < layer.patternCount; i++) {
      const state2 = layer.inverted[i];
      if ((state2 & 1) !== polarity || state2 & 2)
        continue;
      if (pts[i * 4 + 3] >= 2)
        confirmed++;
    }
    const minimum = confirmed >= 3 ? 2 : 1;
    let count = 0;
    for (let i = 0; i < layer.patternCount; i++) {
      const state2 = layer.inverted[i];
      if ((state2 & 1) !== polarity || state2 & 2)
        continue;
      const confidence = pts[i * 4 + 3];
      if (confidence < minimum)
        continue;
      count = this.retain(i, -confidence, count, 16, 8);
    }
    if (count < 3)
      return false;
    const found = this.tmp32;
    found.fill(0, 16);
    const lowerIndex = this.layers.indexOf(layer);
    for (let upperIndex = lowerIndex + 1; upperIndex < this.layers.length; upperIndex++) {
      const upper = this.layers[upperIndex];
      if (!upper.used || !upper.found)
        continue;
      const scale = upper.context.scale / layer.context.scale;
      const offset = (scale - 1) / 2;
      for (let slot = 0; slot < count; slot++) {
        const at = 4 * candidates[slot];
        const ms = pts[at + 2];
        let b0 = -1;
        let b1 = -1;
        let b2 = -1;
        let d0 = Infinity;
        let d1 = Infinity;
        let d2 = Infinity;
        for (let i = 0; i < upper.patternCount; i++) {
          if ((upper.inverted[i] & 1) !== polarity)
            continue;
          if (upper.inverted[i] & 2)
            continue;
          const pos = 4 * i;
          const mappedMs = scale * upper.patterns[pos + 2];
          const smallest = Math.min(ms, mappedMs);
          const largest = Math.max(ms, mappedMs);
          if (largest > 2 * smallest)
            continue;
          const dx = scale * upper.patterns[pos] + offset - pts[at];
          const dy = scale * upper.patterns[pos + 1] + offset - pts[at + 1];
          const distance2 = dx * dx + dy * dy;
          if (distance2 >= 4 * largest ** 2 || distance2 >= d2)
            continue;
          if (distance2 < d0) {
            b2 = b1;
            d2 = d1;
            b1 = b0;
            d1 = d0;
            b0 = i;
            d0 = distance2;
          } else if (distance2 < d1) {
            b2 = b1;
            d2 = d1;
            b1 = i;
            d1 = distance2;
          } else {
            b2 = i;
            d2 = distance2;
          }
        }
        const base2 = 16 + (upperIndex * 16 + slot) * 3;
        found[base2] = b0 + 1;
        found[base2 + 1] = b1 + 1;
        found[base2 + 2] = b2 + 1;
      }
    }
    const moduleRatioMax = count === 3 ? 1.8 : 1.4;
    let best0 = -1;
    let best1 = -1;
    let best2 = -1;
    let bestScale = 0;
    let bestScore = Infinity;
    let bestConfidence = 0;
    let rankedScore = Infinity;
    let rankedConfidence = 0;
    let ranked0 = -1;
    let ranked1 = -1;
    let ranked2 = -1;
    let rankedRelative = Infinity;
    for (let i = 0; i < count - 2; i++) {
      const i0 = candidates[i];
      const p0 = i0 * 4;
      for (let j = i + 1; j < count - 1; j++) {
        const i1 = candidates[j];
        const p1 = i1 * 4;
        const d01 = dist2(pts, p0, p1);
        for (let k = j + 1; k < count; k++) {
          const i2 = candidates[k];
          const p2 = i2 * 4;
          const minMs = Math.min(pts[p0 + 2], pts[p1 + 2], pts[p2 + 2]);
          const maxMs = Math.max(pts[p0 + 2], pts[p1 + 2], pts[p2 + 2]);
          const nativeConfidence = Math.min(pts[p0 + 3], pts[p1 + 3], pts[p2 + 3]);
          if (maxMs > moduleRatioMax * minMs && // The measured sparse ambiguity has eight eligible centers.
          (count !== 8 || nativeConfidence < 4)) {
            let matched = false;
            upper: for (let upperIndex = lowerIndex + 1; upperIndex < this.layers.length; upperIndex++) {
              let first = 0;
              let second = 0;
              for (let role = 0; role < 3; role++) {
                const slot = role ? role === 1 ? j : k : i;
                const base2 = 16 + (upperIndex * 16 + slot) * 3;
                let selected = 0;
                for (let rank = 0; rank < 3; rank++) {
                  const candidate = found[base2 + rank];
                  if (!candidate || candidate === first || candidate === second)
                    continue;
                  selected = candidate;
                  break;
                }
                if (!selected)
                  continue upper;
                if (!role)
                  first = selected;
                else if (role === 1)
                  second = selected;
              }
              matched = true;
              break;
            }
            if (!matched)
              continue;
          }
          const d12 = dist2(pts, p1, p2);
          const d02 = dist2(pts, p0, p2);
          const a = Math.min(d01, d12, d02);
          const c = Math.max(d01, d12, d02);
          const b = d01 + d12 + d02 - a - c;
          const geometry = Math.abs(c - 2 * b) + Math.abs(c - 2 * a);
          const confidence = pts[p0 + 3] + pts[p1 + 3] + pts[p2 + 3];
          if (geometry < bestScore) {
            bestScore = geometry;
            bestScale = c;
            bestConfidence = confidence;
            best0 = i0;
            best1 = i1;
            best2 = i2;
          }
          if (count > 8)
            continue;
          const score = geometry / c - 0.01 * confidence;
          if (score >= rankedScore)
            continue;
          rankedScore = score;
          rankedConfidence = confidence;
          rankedRelative = geometry / c;
          ranked0 = i0;
          ranked1 = i1;
          ranked2 = i2;
        }
      }
    }
    if (best0 < 0)
      return false;
    let relative = bestScore / bestScale;
    if (count <= 7 && // 0.08..0.12 isolates the measured ambiguous-triplet band.
    relative >= 0.08 && relative <= 0.12 || count > 7 && count <= 8 && rankedConfidence >= 2 * bestConfidence && rankedConfidence <= 4 * bestConfidence) {
      best0 = ranked0;
      best1 = ranked1;
      best2 = ranked2;
      relative = rankedRelative;
    }
    const base = polarity * 4;
    const state = this.tmp64;
    state[base] = best0;
    state[base + 1] = best1;
    state[base + 2] = best2;
    state[base + 3] = relative;
    return true;
  }
  // Reject wrong triples/dimensions from their alternating timing tracks before full sampling.
  timing(s, map, size) {
    let gh = 0;
    let gv = 0;
    let n = 0;
    const N = size - 2 * 8;
    const track = 6 + 0.5;
    for (let i = 8; i < size - 8; i++) {
      const c = i + 0.5;
      const e = 1 - (i & 1);
      if (this.read(s, map, c, track) === e)
        gh++;
      if (this.read(s, map, track, c) === e)
        gv++;
      n++;
      if (100 * (gh + gv + 2 * (N - n)) < 150 * N && gh !== n && gv !== n)
        return false;
    }
    return 100 * (gh + gv) >= 150 * N || gh === N || gv === N;
  }
  // Search a window around the expected bottom-right alignment pattern center for a dark run
  // of ~1 module flanked by light, cross-checked vertically. Alignment detection is finder
  // detection with a [1] pattern instead of 1:1:3:1:1, so it shares run(); keep the layer explicit
  // because this search reads the native bitmap even when projection later samples a fine plane.
  findBasicAlign(layer, ex, ey, ms) {
    const R = Math.max(Math.round(5 * ms), 8);
    let found = false;
    let bestD = Infinity;
    const yLo = Math.max(1, Math.round(ey - R));
    const yHi = Math.min(layer.height - 2, Math.round(ey + R));
    const xLo = Math.max(1, Math.round(ex - R));
    const xHi = Math.min(layer.width - 2, Math.round(ex + R));
    const dark2 = +!this.invertedProjection;
    const capV = Math.ceil(3 * ms) - 1;
    for (let y = yLo; y <= yHi; y++) {
      let x = xLo;
      if (bit(layer, x - 1, y) === dark2)
        x += run(layer, x, y, 1, 0, dark2, Infinity);
      while (x <= xHi) {
        x += run(layer, x, y, 1, 0, 1 - dark2, Infinity);
        if (x > xHi)
          break;
        const w = run(layer, x, y, 1, 0, dark2, xHi + 1 - x);
        const cx = x + w / 2;
        const cxi = Math.round(cx);
        x += w + 1;
        if (w < 0.4 * ms || w > 2.5 * ms)
          continue;
        const up = run(layer, cxi, y - 1, 0, -1, dark2, capV);
        const down = run(layer, cxi, y + 1, 0, 1, dark2, capV);
        const h = up + down + 1;
        if (h < 0.4 * ms || h > 2.5 * ms)
          continue;
        const cy = y - up + h / 2;
        const dist = (cx - ex) * (cx - ex) + (cy - ey) * (cy - ey);
        if (dist < bestD) {
          bestD = dist;
          found = true;
          this.alignPoint.x = cx;
          this.alignPoint.y = cy;
        }
      }
    }
    return found;
  }
  // Map detected geometry into caller coordinates and cache the one terminal callback payload.
  report(t, br, aligners, ms, size, ctx) {
    if (!ctx.opts.pointsOnDetect)
      return;
    const { tl, tr, bl } = t;
    const { scale, ox, oy } = ctx;
    const pt = (point, moduleSize) => {
      const mapped = {
        x: point.x * scale + ox,
        y: point.y * scale + oy
      };
      if (moduleSize !== void 0)
        mapped.moduleSize = moduleSize * scale;
      return mapped;
    };
    const map = this.map;
    this.mapFinderQuad(map, size, t, br.x, br.y);
    const project = (x, y) => pt(mapPoint(map, x, y));
    const quad = (left, top, right, bottom) => [
      project(left, top),
      project(right, top),
      project(right, bottom),
      project(left, bottom)
    ];
    const marker = (point, moduleSize, x, y, radius) => {
      const center = pt(point, moduleSize);
      const expected = project(x, y);
      const corners = quad(x - radius, y - radius, x + radius, y + radius);
      const dx = center.x - expected.x;
      const dy = center.y - expected.y;
      if (dx || dy)
        for (const corner of corners) {
          corner.x += dx;
          corner.y += dy;
        }
      return __spreadProps(__spreadValues({}, center), { corners });
    };
    const c = 3.5;
    const pad = 1;
    const bounds = quad(0, 0, size, size);
    const xs = bounds.map((point) => point.x);
    const ys = bounds.map((point) => point.y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    this.points = {
      tl: marker(tl, tl.ms, c, c, c),
      tr: marker(tr, tr.ms, size - c, c, c),
      br: project(size - c, size - c),
      bl: marker(bl, bl.ms, c, size - c, c),
      aligners: aligners.map(({ point, x, y }) => marker(point, ms, x, y, 5 / 2)),
      bounds,
      outline: quad(-pad, -pad, size + pad, size + pad),
      boundingBox: {
        x: minX,
        y: minY,
        width: Math.max(...xs) - minX,
        height: Math.max(...ys) - minY
      }
    };
  }
  // Retarget a coarse-layer homography and threshold grid to its native-resolution luma.
  upgrade(p, map, ctx) {
    const fine = ctx.fine;
    if (!fine)
      return 0;
    const sc = 1 << fine.r;
    const off = (sc - 1) / 2;
    const scaled = this.to;
    for (let i = 0; i < 6; i++)
      scaled[i] = sc * map[i] + off * map[6 + i % 3];
    scaled[6] = map[6];
    scaled[7] = map[7];
    scaled[8] = map[8];
    const plane = this.finePlane;
    const sh = p.sh + fine.r;
    plane.d = fine.luma.data;
    plane.cut = p.cut;
    plane.W = Math.min(fine.luma.width, p.bw << sh);
    plane.H = Math.min(fine.luma.height, (p.cut.length / p.bw | 0) << sh);
    plane.bw = p.bw;
    plane.sh = sh;
    return sc;
  }
  // Parse format/function bits, deinterleave and correct codewords, then decode the payload.
  decodeGrid(size, _ctx) {
    let decoded = FAIL.format;
    if (!checkVersion(this.grid, size))
      decoded = FAIL.version;
    else {
      const m = this.grid;
      let f1 = 0;
      let f2 = 0;
      for (let i = 0; i < 15; i++) {
        const b1 = i < 6 ? m[i * size + 8] : i < 8 ? m[(i + 1) * size + 8] : i === 8 ? m[8 * size + 7] : m[8 * size + 14 - i];
        const b2 = i < 8 ? m[8 * size + size - 1 - i] : m[(size - 15 + i) * size + 8];
        f1 |= b1 << i;
        f2 |= b2 << i;
      }
      let aEcc = -1;
      let bEcc = -1;
      let aMask = 0;
      let bMask = 0;
      let aDistance = 0;
      let bDistance = 0;
      for (let ecc = 0; ecc < ECC_LEVELS.length; ecc++)
        for (let mask = 0; mask < 8; mask++) {
          const bits = formatBits(ECC_LEVELS[ecc], mask);
          const d1 = popcnt(bits ^ f1);
          const d2 = popcnt(bits ^ f2);
          if (d1 <= 3) {
            aEcc = ecc;
            aMask = mask;
            aDistance = d1;
          }
          if (d2 <= 3) {
            bEcc = ecc;
            bMask = mask;
            bDistance = d2;
          }
        }
      const same = aEcc === bEcc && aMask === bMask;
      const firstB = bEcc >= 0 && (aEcc < 0 || !same && bDistance < aDistance);
      const aFormat = aEcc < 0 ? -1 : aEcc << 3 | aMask;
      const bFormat = bEcc < 0 ? -1 : bEcc << 3 | bMask;
      const first = firstB ? bFormat : aFormat;
      const second = firstB ? aFormat : bEcc >= 0 && !same ? bFormat : -1;
      for (let formatValue = first; formatValue >= 0; ) {
        format: {
          const eccIndex = formatValue >> 3;
          const mask = formatValue & 7;
          const ver = (size - 17) / 4;
          const fun = this.tmp8;
          fun.fill(0, 0, size * size);
          for (let finder = 0; finder < 3; finder++) {
            const fx = finder === 1 ? size - 7 : 0;
            const fy = finder === 2 ? size - 7 : 0;
            for (let dy = -1; dy < 8; dy++)
              for (let dx = -1; dx < 8; dx++) {
                const x = fx + dx;
                const y2 = fy + dy;
                if (x >= 0 && y2 >= 0 && x < size && y2 < size)
                  fun[y2 * size + x] = 1;
              }
          }
          const count = this.setAlignments(ver);
          const align = this.tmp8;
          for (let yi = 0; yi < count; yi++)
            for (let xi = 0; xi < count; xi++) {
              const ax = align[xi];
              const ay = align[yi];
              if (fun[ay * size + ax])
                continue;
              for (let dy = -2; dy <= 2; dy++)
                for (let dx = -2; dx <= 2; dx++)
                  fun[(ay + dy) * size + ax + dx] = 1;
            }
          for (let i = 0; i < size; i++) {
            fun[6 * size + i] = 1;
            fun[i * size + 6] = 1;
          }
          for (let i = 0; i <= 8; i++) {
            fun[i * size + 8] = 1;
            fun[8 * size + i] = 1;
            if (i < 8) {
              fun[8 * size + size - 1 - i] = 1;
              fun[(size - 1 - i) * size + 8] = 1;
            }
          }
          if (ver >= 7)
            for (let i = 0; i < 18; i++) {
              const x = size - 11 + i % 3;
              const y2 = i / 3 | 0;
              fun[y2 * size + x] = 1;
              fun[x * size + y2] = 1;
            }
          const bytes = this.codewords;
          const total = BYTES[ver - 1];
          bytes.fill(0, 0, total);
          let bit2 = 0;
          let dir = -1;
          let y = size - 1;
          for (let xOffset = size - 1; xOffset > 0; xOffset -= 2) {
            if (xOffset === 6)
              xOffset = 6 - 1;
            for (; ; ) {
              for (let j = 0; j < 2; j++) {
                const x = xOffset - j;
                if (fun[y * size + x])
                  continue;
                if (bit2 < 8 * total && (this.grid[y * size + x] ^ maskBits(x, y) >> mask & 1) === 1)
                  bytes[bit2 >> 3] |= 128 >> (bit2 & 7);
                bit2++;
              }
              if (y + dir < 0 || y + dir >= size)
                break;
              y += dir;
            }
            dir = -dir;
          }
          const ecc = ECC_LEVELS[eccIndex];
          const words = WORDS_PER_BLOCK[ecc][ver - 1];
          const blocks = ECC_BLOCKS[ecc][ver - 1];
          const shortLen = Math.floor(total / blocks) - words;
          const shortBlocks = blocks - total % blocks;
          const syndromes = 0;
          const sigma = words;
          const previous = 2 * words + 1;
          const next = 3 * words + 2;
          const blockBase = 4 * words + 3;
          const blockLen = shortLen + words;
          const blockBytes = fun;
          let pos = 0;
          for (let ecc2 = 0; ecc2 < 2; ecc2++)
            for (let i = 0; i < (ecc2 ? words : shortLen + 1); i++)
              for (let block = 0; block < blocks; block++) {
                const length = blockLen + +(block >= shortBlocks);
                if (!ecc2 && i >= length - words)
                  continue;
                const offset = blockBase + block * blockLen + Math.max(0, block - shortBlocks);
                blockBytes[offset + (ecc2 ? length - words : 0) + i] = bytes[pos++];
              }
          const dataLen = total - words * blocks;
          const data = bytes;
          pos = 0;
          for (let block = 0; block < blocks; block++) {
            const offset = blockBase + block * blockLen + Math.max(0, block - shortBlocks);
            const length = blockLen + +(block >= shortBlocks);
            let corrected = false;
            correct: {
              let hasError = false;
              for (let i = 0; i < words; i++) {
                let value = 0;
                for (let j = 0; j < length; j++)
                  value = mul(value, EXP[i]) ^ blockBytes[offset + j];
                fun[syndromes + i] = value;
                if (value)
                  hasError = true;
              }
              if (!hasError) {
                corrected = true;
                break correct;
              }
              fun.fill(0, sigma, sigma + words + 1);
              fun.fill(0, previous, previous + words + 1);
              fun[sigma] = 1;
              fun[previous] = 1;
              let sigmaLength = 1;
              let previousLength = 1;
              let degree = 0;
              let shift = 1;
              let discrepancy = 1;
              for (let n = 0; n < words; n++) {
                let delta = fun[syndromes + n];
                for (let i = 1; i <= degree; i++)
                  delta ^= mul(fun[sigma + i], fun[syndromes + n - i]);
                if (!delta) {
                  shift++;
                  continue;
                }
                const coefficient = mul(delta, inv(discrepancy));
                const nextLength = Math.max(sigmaLength, previousLength + shift);
                for (let i = 0; i < nextLength; i++)
                  fun[next + i] = (i < sigmaLength ? fun[sigma + i] : 0) ^ (i >= shift && i - shift < previousLength ? mul(coefficient, fun[previous + i - shift]) : 0);
                if (2 * degree <= n) {
                  fun.copyWithin(previous, sigma, sigma + sigmaLength);
                  previousLength = sigmaLength;
                  degree = n + 1 - degree;
                  discrepancy = delta;
                  shift = 1;
                } else
                  shift++;
                fun.copyWithin(sigma, next, next + nextLength);
                sigmaLength = nextLength;
              }
              while (sigmaLength > 1 && !fun[sigma + sigmaLength - 1])
                sigmaLength--;
              const errors = sigmaLength - 1;
              if (!errors || 2 * errors > words)
                break correct;
              const omega = previous;
              fun.fill(0, omega, omega + words);
              for (let i = 0; i < sigmaLength; i++)
                for (let j = 0; i + j < words; j++)
                  fun[omega + i + j] ^= mul(fun[sigma + i], fun[syndromes + j]);
              const locations = next;
              let locationCount = 0;
              for (let i = 1; i < 256 && locationCount < errors; i++)
                if (!evalLow(fun, sigma, sigmaLength, i))
                  fun[locations + locationCount++] = inv(i);
              if (locationCount !== errors)
                break correct;
              for (let i = 0; i < locationCount; i++) {
                const location = fun[locations + i];
                const blockPos = length - 1 - LOG[location];
                if (blockPos < 0)
                  break correct;
                const inverse = inv(location);
                let denominator = 1;
                for (let j = 0; j < locationCount; j++)
                  if (i !== j)
                    denominator = mul(denominator, 1 ^ mul(fun[locations + j], inverse));
                blockBytes[offset + blockPos] ^= mul(evalLow(fun, omega, words, inverse), inv(denominator));
              }
              corrected = true;
            }
            if (!corrected) {
              decoded = FAIL.rs;
              break format;
            }
            const end = offset + length - words;
            for (let i = offset; i < end; i++)
              data[pos++] = blockBytes[i];
          }
          decoded = this.decodePayload(data, dataLen, ver);
        }
        if (!(decoded instanceof Error))
          break;
        formatValue = formatValue === first ? second : -1;
      }
    }
    return decoded;
  }
  // Project one global symbol or one alignment-lattice tile directly into
  // the scanner-owned maximum-version grid; adjacent tile regions never overlap.
  projectQuad(s, map, size, left = 0, right = size, top = 0, bottom = size) {
    for (let y = top; y < bottom; y++)
      for (let x = left; x < right; x++) {
        this.grid[y * size + x] = this.read(s, map, x + 0.5, y + 0.5);
      }
  }
  // Timing prefilter + global grid projection against one plane.
  projectMap(s, map, size, ctx) {
    const ok = this.timing(s, map, size);
    if (ok)
      this.projectQuad(s, map, size);
    return ok ? this.decodeGrid(size, ctx) : FAIL.timing;
  }
  // Sample only timing and redundant version bits to gate expensive Version 7+ tiled projection.
  confirm(s, map, size) {
    let ok = this.timing(s, map, size);
    if (ok) {
      for (let i = 0; i < 18; i++) {
        const x = size - 11 + i % 3;
        const y = i / 3 | 0;
        this.grid[y * size + x] = this.read(s, map, x + 0.5, y + 0.5);
        this.grid[x * size + y] = this.read(s, map, y + 0.5, x + 0.5);
      }
      ok = checkVersion(this.grid, size);
    }
    return ok;
  }
  // One path for both polarities: inverted sampling flips read() and the aligner's dark color;
  // perspective state is cleared after every value-returning projection path.
  projectWith(layer, triple, pitch) {
    const inverted = triple.inverted;
    this.invertedProjection = inverted;
    const p = layer.plane;
    const t = triple;
    const ctx = layer.context;
    let failed = FAIL.dimension;
    project: {
      const { tl, tr, bl } = t;
      const ms = (tl.ms + tr.ms + bl.ms) / 3;
      const minMs = Math.min(tl.ms, tr.ms, bl.ms);
      const maxMs = Math.max(tl.ms, tr.ms, bl.ms);
      const ax = tr.x - tl.x;
      const ay = tr.y - tl.y;
      const bx = bl.x - tl.x;
      const by = bl.y - tl.y;
      const area = Math.abs(ax * by - ay * bx);
      const span = Math.max(Math.abs(ay), Math.abs(by));
      const medianMs = tl.ms + tr.ms + bl.ms - minMs - maxMs;
      const medianEst = span > 0 && medianMs > 0 ? area / (span * medianMs) + 7 : Infinity;
      const length = distance(tl, tr);
      const est = pitch ? length / pitch + 7 : (
        // 1.105, 10/9, 1.125, and 1.15 were tested; 10/9 is the best gain plateau.
        maxMs > 10 / 9 * minMs ? length * 2 / (tl.ms + tr.ms) + 7 : medianEst
      );
      const snapped = snapSize(est);
      const meanEst = span > 0 && ms > 0 ? area / (span * ms) + 7 : Infinity;
      const mean = snapSize(meanEst);
      for (let i = 0; i < 4; i++) {
        const size = i === 0 ? snapped : i === 1 ? mean : i === 2 ? snapped - 4 : snapped + 4;
        const estimate = i === 1 ? meanEst : est;
        if (i > 0 && size === snapped || i > 1 && size === mean)
          continue;
        if (size < 21 || size > 177 || // Reject estimates more than six modules from their snapped QR size.
        Math.abs(size - estimate) > 6)
          continue;
        this.decodedSize = size;
        const f = 1 - (3.5 - 0.5) / (size - 7);
        const brEstX = tl.x + (tr.x - tl.x + bl.x - tl.x) * f;
        const brEstY = tl.y + (tr.y - tl.y + bl.y - tl.y) * f;
        let found = false;
        if (size >= 21 + 4) {
          if (inverted || !this.perspective(t, t.tl.ms, t.tr.ms, t.bl.ms))
            found = this.findBasicAlign(layer, brEstX, brEstY, ms);
          else {
            const ax2 = tr.x + bl.x - 2 * tl.x;
            const ay2 = tr.y + bl.y - 2 * tl.y;
            const scale = (ax2 * (brEstX - tl.x) + ay2 * (brEstY - tl.y)) / (ax2 * ax2 + ay2 * ay2);
            const map = this.map;
            const predictedDen = (map[6] + map[7]) * scale + map[8];
            const dx = ((map[0] + map[1]) * scale + map[2]) / predictedDen - brEstX;
            const dy = ((map[3] + map[4]) * scale + map[5]) / predictedDen - brEstY;
            if (dx * dx + dy * dy <= 9 * ms * ms)
              found = this.findBasicAlign(layer, brEstX, brEstY, ms);
            else {
              const tlMs = finderPitch(layer, tl);
              const trMs = finderPitch(layer, tr);
              const blMs = finderPitch(layer, bl);
              if (tlMs && trMs && blMs && this.perspective(t, tlMs, trMs, blMs)) {
                const side = (3.5 - 0.5) / (1 - scale);
                found = this.searchAlign(p, map, scale, side, 0, 0, 1, false);
              }
            }
          }
        }
        failed = FAIL.alignment;
        const attempts = found ? 2 : 1;
        for (let attempt = 0; attempt < attempts; attempt++) {
          const align = !attempt && found;
          const brX = align ? this.alignPoint.x : brEstX;
          const brY = align ? this.alignPoint.y : brEstY;
          const brPoint = ctx.opts.pointsOnDetect ? { x: brX, y: brY } : void 0;
          if (ctx.opts.pointsOnDetect) {
            const inset = size - 6.5;
            const aligners = align ? [{ point: this.alignPoint, x: inset, y: inset }] : [];
            this.report(t, brPoint, aligners, ms, size, ctx);
          }
          const map = this.map;
          this.mapFinderQuad(map, size, t, brX, brY);
          const version = (size - 17) / 4;
          if (version < 7) {
            failed = this.projectMap(p, map, size, ctx);
            if (!(failed instanceof Error))
              break project;
            if (this.upgrade(p, map, ctx)) {
              failed = this.projectMap(this.finePlane, this.to, size, ctx);
              if (!(failed instanceof Error))
                break project;
            }
          } else {
            const fine = this.upgrade(p, map, ctx);
            const sp = fine ? this.finePlane : p;
            const sm = fine ? this.to : map;
            let confirmed = this.confirm(sp, sm, size);
            if (!confirmed && fine)
              confirmed = this.confirm(p, map, size);
            if (confirmed) {
              tiles: {
                const tileFine = sp === this.finePlane;
                const sc = tileFine ? fine : 1;
                const off = (sc - 1) / 2;
                const count = this.setAlignments(version);
                const positions = this.tmp8;
                const nodes = this.tmp64;
                const located = this.tmp64;
                const last = positions[count - 1];
                const c = 0.5;
                let locatedCount = 0;
                let tileBrX = 0;
                let tileBrY = 0;
                let hasTileBr = false;
                for (let yi = 0; yi < count; yi++)
                  for (let xi = 0; xi < count; xi++) {
                    const x = positions[xi];
                    const y = positions[yi];
                    const overlapsFinder = x === 6 && (y === 6 || y === last) || x === last && y === 6;
                    const node = (yi * count + xi) * 2;
                    if (!overlapsFinder && this.searchAlign(sp, sm, c, 1, x, y, c, true)) {
                      const pos = 7 * 7 * 2 + locatedCount * 4;
                      located[pos] = this.alignPoint.x;
                      located[pos + 1] = this.alignPoint.y;
                      located[pos + 2] = x + c;
                      located[pos + 3] = y + c;
                      locatedCount++;
                      if (x === last && y === last) {
                        hasTileBr = true;
                        tileBrX = this.alignPoint.x;
                        tileBrY = this.alignPoint.y;
                      }
                      nodes[node] = this.alignPoint.x;
                      nodes[node + 1] = this.alignPoint.y;
                    } else {
                      const q = mapPoint(sm, x + c, y + c);
                      nodes[node] = q.x;
                      nodes[node + 1] = q.y;
                    }
                  }
                if (!locatedCount) {
                  failed = FAIL.alignment;
                  break tiles;
                }
                for (let yi = 0; yi < count - 1; yi++)
                  for (let xi = 0; xi < count - 1; xi++) {
                    const left = positions[xi];
                    const right = positions[xi + 1];
                    const top = positions[yi];
                    const bottom = positions[yi + 1];
                    const tlNode = (yi * count + xi) * 2;
                    const trNode = tlNode + 2;
                    const blNode = ((yi + 1) * count + xi) * 2;
                    const brNode = blNode + 2;
                    const tile = this.map;
                    packQuad(this.from, left + c, top + c, right + c, top + c, right + c, bottom + c, left + c, bottom + c);
                    packQuad(this.to, nodes[tlNode], nodes[tlNode + 1], nodes[trNode], nodes[trNode + 1], nodes[brNode], nodes[brNode + 1], nodes[blNode], nodes[blNode + 1]);
                    this.mapQuad(tile);
                    this.projectQuad(sp, tile, size, xi ? left : 0, xi === count - 2 ? size : right, yi ? top : 0, yi === count - 2 ? size : bottom);
                  }
                if (ctx.opts.pointsOnDetect) {
                  const reportAligners = [];
                  for (let i2 = 0; i2 < locatedCount; i2++) {
                    const pos = 7 * 7 * 2 + i2 * 4;
                    reportAligners.push({
                      point: { x: (located[pos] - off) / sc, y: (located[pos + 1] - off) / sc },
                      x: located[pos + 2],
                      y: located[pos + 3]
                    });
                  }
                  this.report(t, hasTileBr ? { x: (tileBrX - off) / sc, y: (tileBrY - off) / sc } : brPoint, reportAligners, ms, size, ctx);
                }
                failed = this.decodeGrid(size, ctx);
              }
              if (!(failed instanceof Error)) {
                break project;
              }
              failed = this.projectMap(sp, sm, size, ctx);
              if (!(failed instanceof Error))
                break project;
              if (fine) {
                failed = this.projectMap(p, map, size, ctx);
                if (!(failed instanceof Error))
                  break project;
              }
            } else
              failed = FAIL.version;
          }
        }
      }
    }
    this.invertedProjection = false;
    return failed;
  }
  // Lazily build pyramid stages, then try one mandatory and any budgeted retry triples.
  *scan(cooperative) {
    if (!this.staged)
      throw new Error("expected addImage before decode");
    const layers = this.layers;
    this.points = void 0;
    let failed = FAIL.finder;
    if (!this.resized) {
      for (let i = 1; i < layers.length; i++) {
        const layer = layers[i];
        if (!layer.used)
          break;
        const src = layers[i - 1].luma;
        const dst = layer.luma;
        const width = layers[i - 1].width;
        const rows = cooperative ? 64 : layer.height;
        for (let y = 0; y < layer.height; y += rows) {
          scanRows.resize(src, dst, width, layer.width, y, Math.min(layer.height, y + rows));
          if (cooperative && y + rows < layer.height)
            this.retryStart += yield;
        }
      }
      this.resized = true;
    }
    walk: for (let mandatory = true; ; mandatory = false) {
      let attempted = false;
      for (let i = layers.length - 1; i >= 0; i--) {
        if (!mandatory && (!this.retries || this.timeLimit !== Infinity && Date.now() - this.retryStart >= this.timeLimit))
          break walk;
        const layer = layers[i];
        if (!layer.used)
          continue;
        if (!layer.found) {
          const bHeight = layer.blockHeight;
          const blockRows = cooperative ? 16 : bHeight;
          for (let y = 0; y < bHeight; y += blockRows) {
            scanRows.blocks(layer, y, Math.min(bHeight, y + blockRows));
            if (cooperative && y + blockRows < bHeight)
              this.retryStart += yield;
          }
          const matrix = layer.bitmap;
          matrix.fill(0, 0, layer.words * layer.height);
          for (let y = 0; y < bHeight; y += blockRows) {
            scanRows.bitmap(layer, y, Math.min(bHeight, y + blockRows));
            if (cooperative && y + blockRows < bHeight)
              this.retryStart += yield;
          }
          if (this.opts.imageOnBitmap)
            this.opts.imageOnBitmap(darkToImage(layer.width, layer.height, (x, y) => bit(layer, x, y)));
          layer.patternCount = 0;
          const finderRows = cooperative ? 32 : layer.height;
          for (let y = 0; y < layer.height; y += finderRows) {
            scanRows.find(layer, y, Math.min(layer.height, y + finderRows));
            if (cooperative && y + finderRows < layer.height)
              this.retryStart += yield;
          }
          layer.found = true;
        }
        let triple;
        if (mandatory) {
          this.exclude(layer);
          const ordinary = this.pickPolarity(layer, 0);
          const inverted = this.pickPolarity(layer, 1);
          if (ordinary || inverted) {
            const state = this.tmp64;
            const pts = layer.patterns;
            let polarity = 0;
            if (inverted) {
              const ordConfidence = ordinary ? pts[state[0] * 4 + 3] + pts[state[1] * 4 + 3] + pts[state[2] * 4 + 3] : 0;
              const invConfidence = pts[state[4] * 4 + 3] + pts[state[5] * 4 + 3] + pts[state[6] * 4 + 3];
              if (!ordinary || (state[7] + 0.1) * ordConfidence < (state[3] + 0.1) * invConfidence)
                polarity = 1;
            }
            const base = polarity * 4;
            const w0 = state[base] | 0;
            const w1 = state[base + 1] | 0;
            const w2 = state[base + 2] | 0;
            layer.pickSum = w0 + w1 + w2;
            layer.pickLo = Math.min(w0, w1, w2);
            layer.pickHi = Math.max(w0, w1, w2);
            triple = this.makeTriple(layer, w0, w1, w2);
            triple.inverted = polarity === 1;
          }
        } else {
          schedule: {
            if (layer.setsReady)
              break schedule;
            layer.setsReady = true;
            layer.setCount = 0;
            layer.setCursor = 0;
            let eligible = 0;
            for (let i2 = 0; i2 < layer.patternCount; i2++) {
              if (layer.inverted[i2] & 2)
                continue;
              eligible++;
            }
            if (eligible < 3)
              break schedule;
            const pts = layer.patterns;
            const neighbors = this.tmp32;
            const useFilters = eligible > 5;
            for (let i2 = 0; i2 < layer.patternCount - 2; i2++) {
              if (cooperative && i2 && !(i2 & 7))
                this.retryStart += yield;
              const state = layer.inverted[i2];
              if (state & 2)
                continue;
              const inverted = !!(state & 1);
              const p0 = i2 * 4;
              const maxDistance = pts[p0 + 2] * 177 * 1.5;
              const maxDistance2 = maxDistance * maxDistance;
              let count = 0;
              for (let index = i2 + 1; index < layer.patternCount; index++) {
                const otherState = layer.inverted[index];
                if (otherState & 2 || !!(otherState & 1) !== inverted)
                  continue;
                const pos = index * 4;
                const smallest = Math.min(pts[p0 + 2], pts[pos + 2]);
                const largest = Math.max(pts[p0 + 2], pts[pos + 2]);
                if (useFilters && // The 2.4 ratio preserves upper-layer-confirmed perspective triples.
                largest > 2.4 * smallest + 2 / 7)
                  continue;
                const dx = pts[p0] - pts[pos];
                const dy = pts[p0 + 1] - pts[pos + 1];
                const distance2 = dx * dx + dy * dy;
                if (distance2 > maxDistance2)
                  continue;
                const rank = distance2 / pts[pos + 3];
                count = this.retain(index, rank, count, 15);
              }
              for (let u = 0; u < count - 1; u++) {
                const i1 = neighbors[u];
                const p1 = i1 * 4;
                const d01 = dist2(pts, p0, p1);
                for (let v = u + 1; v < count; v++) {
                  const i22 = neighbors[v];
                  const p2 = i22 * 4;
                  const d12 = dist2(pts, p1, p2);
                  const d02 = dist2(pts, p0, p2);
                  const a = Math.min(d01, d12, d02);
                  const c = Math.max(d01, d12, d02);
                  const b = d01 + d12 + d02 - a - c;
                  if (!a || !b || useFilters && (a > 4 * b || b > 4 * a))
                    continue;
                  const da = Math.sqrt(a);
                  const db = Math.sqrt(b);
                  const moduleCount = (da + db) / (2 * ((pts[p0 + 2] + pts[p1 + 2] + pts[p2 + 2]) / 3)) + 7;
                  if (
                    // Center-line pitch can overestimate small finders; allow 0.8..1.5 scaling.
                    moduleCount < 21 * 0.8 || moduleCount > 177 * 1.5
                  )
                    continue;
                  const cosine = (a + b - c) / (2 * Math.sqrt(a * b));
                  if (useFilters && Math.abs(cosine) > 0.5)
                    continue;
                  const confidence = pts[p0 + 3] + pts[p1 + 3] + pts[p2 + 3];
                  const score = (da + db + Math.abs(da - db)) / confidence;
                  retain: {
                    const sets2 = layer.sets;
                    let index = layer.setCount;
                    if (index < 256)
                      layer.setCount++;
                    else {
                      if (score >= sets2[0])
                        break retain;
                      index = 0;
                    }
                    const pos = index * 5;
                    sets2[pos] = score;
                    sets2[pos + 1] = +inverted;
                    sets2[pos + 2] = i2;
                    sets2[pos + 3] = i1;
                    sets2[pos + 4] = i22;
                    while (index) {
                      const parent = index - 1 >> 1;
                      if (sets2[parent * 5] >= sets2[index * 5])
                        break retain;
                      swapSet(layer, parent, index);
                      index = parent;
                    }
                    siftDown(layer, layer.setCount);
                  }
                }
              }
            }
            for (let end = layer.setCount - 1; end > 0; end--) {
              swapSet(layer, 0, end);
              siftDown(layer, end);
            }
          }
          const sets = layer.sets;
          while (layer.setCursor < layer.setCount) {
            const pos = layer.setCursor++ * 5;
            const i0 = sets[pos + 2] | 0;
            const i1 = sets[pos + 3] | 0;
            const i2 = sets[pos + 4] | 0;
            if (layer.inverted[i0] & 2 || layer.inverted[i1] & 2 || layer.inverted[i2] & 2)
              continue;
            if (i0 + i1 + i2 === layer.pickSum && Math.min(i0, i1, i2) === layer.pickLo && Math.max(i0, i1, i2) === layer.pickHi)
              continue;
            triple = this.makeTriple(layer, i0, i1, i2);
            triple.inverted = !!sets[pos + 1];
            break;
          }
        }
        if (!triple) {
          if (cooperative)
            this.retryStart += yield;
          continue;
        }
        if (!mandatory && this.retries !== Infinity)
          this.retries--;
        attempted = true;
        let pitch = !this.blocked && Math.abs(triple.tr.y - triple.tl.y) > Math.abs(triple.tr.x - triple.tl.x) ? edgePitch(layer, triple.tl, triple.tr, triple.inverted) : 0;
        const fit = !!(pitch && distance(triple.tl, triple.tr) / pitch + 7 >= 21 + (7 - 1) * 4);
        if (fit) {
          fitPattern(layer, triple.tl, triple.inverted);
          fitPattern(layer, triple.tr, triple.inverted);
          fitPattern(layer, triple.bl, triple.inverted);
          refineTriple(layer, triple);
          pitch = edgePitch(layer, triple.tl, triple.tr, triple.inverted);
        }
        let done = this.projectWith(layer, triple, pitch);
        if (done instanceof Error && !fit && refineTriple(layer, triple))
          done = this.projectWith(layer, triple, pitch);
        const opts = layer.context.opts;
        const result = done;
        if (!(done instanceof Error)) {
          if (opts.imageOnResult)
            opts.imageOnResult(darkToImage(this.decodedSize, this.decodedSize, (x, y) => this.grid[y * this.decodedSize + x]));
          const padding = 3.5 / (this.decodedSize - 7);
          const p = layer.patterns;
          const tl = 4 * triple.tlIndex;
          const tr = 4 * triple.trIndex;
          const bl = 4 * triple.blIndex;
          p[tl] = triple.tl.x;
          p[tl + 1] = triple.tl.y;
          p[tl + 2] = triple.trIndex;
          p[tl + 3] = triple.blIndex;
          p[tr] = triple.tr.x;
          p[tr + 1] = triple.tr.y;
          p[tr + 2] = padding;
          p[bl] = triple.bl.x;
          p[bl + 1] = triple.bl.y;
          if (!(layer.inverted[triple.tlIndex] & 2))
            this.blocked++;
          if (!(layer.inverted[triple.trIndex] & 2))
            this.blocked++;
          if (!(layer.inverted[triple.blIndex] & 2))
            this.blocked++;
          layer.inverted[triple.tlIndex] |= 2 | 4;
          layer.inverted[triple.trIndex] |= 2 | 8;
          layer.inverted[triple.blIndex] |= 2 | 8;
          for (const source of layers) {
            if (!source.found)
              continue;
            this.exclude(source);
          }
          if (this.points)
            this.opts.pointsOnDetect?.(this.points, result);
        }
        if (!(result instanceof Error))
          return result;
        failed = result;
        if (cooperative)
          this.retryStart += yield;
      }
      if (!mandatory && !attempted)
        break;
    }
    if (this.points)
      this.opts.pointsOnDetect?.(this.points, failed);
    return failed;
  }
  // Re-run the scan after each success for decode-all while sharing one retry deadline/budget.
  *walk(cooperative, all) {
    this.retryStart = Date.now();
    this.retries = this.effort === Infinity ? Infinity : this.effort - 1;
    const results = [];
    for (; ; ) {
      const result = yield* this.scan(cooperative);
      results.push(result);
      if (!all)
        return results;
      if (result instanceof Error)
        return results;
      if (cooperative)
        this.retryStart += yield;
    }
  }
  decode(all = false) {
    this.beginOperation();
    try {
      return runDecode(this.walk(false, all));
    } finally {
      this.endOperation();
    }
  }
  async decodeAsync(all = false) {
    this.beginOperation();
    try {
      return await runDecodeAsync(this.walk(true, all), this.timeLimit);
    } finally {
      this.endOperation();
    }
  }
};

export {
  encodeQR,
  _QRScanner
};
//# sourceMappingURL=chunk-SCRIU3HN.js.map
