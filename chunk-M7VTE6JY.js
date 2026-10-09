import {
  Component,
  DomSanitizer,
  EnvironmentInjector,
  Injectable,
  Input,
  Pipe,
  computed,
  effect,
  first,
  inject,
  input,
  lastValueFrom,
  setClassMetadata,
  signal,
  take,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WOMJJ4WU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@placeos/ts-client/dist/index.es.js
var le = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
];
var Jn = [
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  62,
  255,
  255,
  255,
  63,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  255,
  255,
  255,
  0,
  255,
  255,
  255,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  255,
  255,
  255,
  255,
  255,
  255,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51
];
function qt(t) {
  if (t >= Jn.length)
    throw new Error("Unable to parse base64 string.");
  const e = Jn[t];
  if (e === 255)
    throw new Error("Unable to parse base64 string.");
  return e;
}
function us(t) {
  let e = "", n, s = t.length;
  for (n = 2; n < s; n += 3)
    e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += le[(t[n - 1] & 15) << 2 | t[n] >> 6], e += le[t[n] & 63];
  return n === s + 1 && (e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4], e += "=="), n === s && (e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += le[(t[n - 1] & 15) << 2], e += "="), e;
}
function Js(t) {
  if (t.length % 4 !== 0)
    throw new Error("Unable to parse base64 string.");
  const e = t.indexOf("=");
  if (e !== -1 && e < t.length - 2)
    throw new Error("Unable to parse base64 string.");
  let n = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0, s = t.length, i = new Uint8Array(3 * (s / 4)), r;
  for (let o = 0, h = 0; o < s; o += 4, h += 3)
    r = qt(t.charCodeAt(o)) << 18 | qt(t.charCodeAt(o + 1)) << 12 | qt(t.charCodeAt(o + 2)) << 6 | qt(t.charCodeAt(o + 3)), i[h] = r >> 16, i[h + 1] = r >> 8 & 255, i[h + 2] = r & 255;
  return i.subarray(0, i.length - n);
}
function Vs(t, e = new TextEncoder()) {
  return us(e.encode(t));
}
var Pt = { exports: {} };
var Ys = Pt.exports;
var Vn;
function Xs() {
  return Vn || (Vn = 1, (function(t) {
    (function(e, n) {
      var s = {};
      n(s);
      var i = s.default;
      for (var r in s)
        i[r] = s[r];
      t.exports = i;
    })(Ys, function(e) {
      e.__esModule = true, e.digestLength = 32, e.blockSize = 64;
      var n = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      function s(k, c, l, f, O) {
        for (var T, U, S, Q, D, E, re, H, j, z, Qe, Ke, xt; O >= 64; ) {
          for (T = c[0], U = c[1], S = c[2], Q = c[3], D = c[4], E = c[5], re = c[6], H = c[7], z = 0; z < 16; z++)
            Qe = f + z * 4, k[z] = (l[Qe] & 255) << 24 | (l[Qe + 1] & 255) << 16 | (l[Qe + 2] & 255) << 8 | l[Qe + 3] & 255;
          for (z = 16; z < 64; z++)
            j = k[z - 2], Ke = (j >>> 17 | j << 15) ^ (j >>> 19 | j << 13) ^ j >>> 10, j = k[z - 15], xt = (j >>> 7 | j << 25) ^ (j >>> 18 | j << 14) ^ j >>> 3, k[z] = (Ke + k[z - 7] | 0) + (xt + k[z - 16] | 0);
          for (z = 0; z < 64; z++)
            Ke = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & E ^ ~D & re) | 0) + (H + (n[z] + k[z] | 0) | 0) | 0, xt = ((T >>> 2 | T << 30) ^ (T >>> 13 | T << 19) ^ (T >>> 22 | T << 10)) + (T & U ^ T & S ^ U & S) | 0, H = re, re = E, E = D, D = Q + Ke | 0, Q = S, S = U, U = T, T = Ke + xt | 0;
          c[0] += T, c[1] += U, c[2] += S, c[3] += Q, c[4] += D, c[5] += E, c[6] += re, c[7] += H, f += 64, O -= 64;
        }
        return f;
      }
      var i = (
        /** @class */
        (function() {
          function k() {
            this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this.reset();
          }
          return k.prototype.reset = function() {
            return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this;
          }, k.prototype.clean = function() {
            for (var c = 0; c < this.buffer.length; c++)
              this.buffer[c] = 0;
            for (var c = 0; c < this.temp.length; c++)
              this.temp[c] = 0;
            this.reset();
          }, k.prototype.update = function(c, l) {
            if (l === void 0 && (l = c.length), this.finished)
              throw new Error("SHA256: can't update because hash was finished.");
            var f = 0;
            if (this.bytesHashed += l, this.bufferLength > 0) {
              for (; this.bufferLength < 64 && l > 0; )
                this.buffer[this.bufferLength++] = c[f++], l--;
              this.bufferLength === 64 && (s(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
            }
            for (l >= 64 && (f = s(this.temp, this.state, c, f, l), l %= 64); l > 0; )
              this.buffer[this.bufferLength++] = c[f++], l--;
            return this;
          }, k.prototype.finish = function(c) {
            if (!this.finished) {
              var l = this.bytesHashed, f = this.bufferLength, O = l / 536870912 | 0, T = l << 3, U = l % 64 < 56 ? 64 : 128;
              this.buffer[f] = 128;
              for (var S = f + 1; S < U - 8; S++)
                this.buffer[S] = 0;
              this.buffer[U - 8] = O >>> 24 & 255, this.buffer[U - 7] = O >>> 16 & 255, this.buffer[U - 6] = O >>> 8 & 255, this.buffer[U - 5] = O >>> 0 & 255, this.buffer[U - 4] = T >>> 24 & 255, this.buffer[U - 3] = T >>> 16 & 255, this.buffer[U - 2] = T >>> 8 & 255, this.buffer[U - 1] = T >>> 0 & 255, s(this.temp, this.state, this.buffer, 0, U), this.finished = true;
            }
            for (var S = 0; S < 8; S++)
              c[S * 4 + 0] = this.state[S] >>> 24 & 255, c[S * 4 + 1] = this.state[S] >>> 16 & 255, c[S * 4 + 2] = this.state[S] >>> 8 & 255, c[S * 4 + 3] = this.state[S] >>> 0 & 255;
            return this;
          }, k.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c), c;
          }, k.prototype._saveState = function(c) {
            for (var l = 0; l < this.state.length; l++)
              c[l] = this.state[l];
          }, k.prototype._restoreState = function(c, l) {
            for (var f = 0; f < this.state.length; f++)
              this.state[f] = c[f];
            this.bytesHashed = l, this.finished = false, this.bufferLength = 0;
          }, k;
        })()
      );
      e.Hash = i;
      var r = (
        /** @class */
        (function() {
          function k(c) {
            this.inner = new i(), this.outer = new i(), this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
            var l = new Uint8Array(this.blockSize);
            if (c.length > this.blockSize)
              new i().update(c).finish(l).clean();
            else
              for (var f = 0; f < c.length; f++)
                l[f] = c[f];
            for (var f = 0; f < l.length; f++)
              l[f] ^= 54;
            this.inner.update(l);
            for (var f = 0; f < l.length; f++)
              l[f] ^= 106;
            this.outer.update(l), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
            for (var f = 0; f < l.length; f++)
              l[f] = 0;
          }
          return k.prototype.reset = function() {
            return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
          }, k.prototype.clean = function() {
            for (var c = 0; c < this.istate.length; c++)
              this.ostate[c] = this.istate[c] = 0;
            this.inner.clean(), this.outer.clean();
          }, k.prototype.update = function(c) {
            return this.inner.update(c), this;
          }, k.prototype.finish = function(c) {
            return this.outer.finished ? this.outer.finish(c) : (this.inner.finish(c), this.outer.update(c, this.digestLength).finish(c)), this;
          }, k.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c), c;
          }, k;
        })()
      );
      e.HMAC = r;
      function o(k) {
        var c = new i().update(k), l = c.digest();
        return c.clean(), l;
      }
      e.hash = o, e.default = o;
      function h(k, c) {
        var l = new r(k).update(c), f = l.digest();
        return l.clean(), f;
      }
      e.hmac = h;
      function b(k, c, l, f) {
        var O = f[0];
        if (O === 0)
          throw new Error("hkdf: cannot expand more");
        c.reset(), O > 1 && c.update(k), l && c.update(l), c.update(f), c.finish(k), f[0]++;
      }
      var L = new Uint8Array(e.digestLength);
      function I(k, c, l, f) {
        c === void 0 && (c = L), f === void 0 && (f = 32);
        for (var O = new Uint8Array([1]), T = h(c, k), U = new r(T), S = new Uint8Array(U.digestLength), Q = S.length, D = new Uint8Array(f), E = 0; E < f; E++)
          Q === S.length && (b(S, U, l, O), Q = 0), D[E] = S[Q++];
        return U.clean(), S.fill(0), O.fill(0), D;
      }
      e.hkdf = I;
      function W(k, c, l, f) {
        for (var O = new r(k), T = O.digestLength, U = new Uint8Array(4), S = new Uint8Array(T), Q = new Uint8Array(T), D = new Uint8Array(f), E = 0; E * T < f; E++) {
          var re = E + 1;
          U[0] = re >>> 24 & 255, U[1] = re >>> 16 & 255, U[2] = re >>> 8 & 255, U[3] = re >>> 0 & 255, O.reset(), O.update(c), O.update(U), O.finish(Q);
          for (var H = 0; H < T; H++)
            S[H] = Q[H];
          for (var H = 2; H <= l; H++) {
            O.reset(), O.update(Q).finish(Q);
            for (var j = 0; j < T; j++)
              S[j] ^= Q[j];
          }
          for (var H = 0; H < T && E * T + H < f; H++)
            D[E * T + H] = S[H];
        }
        for (var E = 0; E < T; E++)
          S[E] = Q[E] = 0;
        for (var E = 0; E < 4; E++)
          U[E] = 0;
        return O.clean(), D;
      }
      e.pbkdf2 = W;
    });
  })(Pt)), Pt.exports;
}
var ei = Xs();
var ti = new Int32Array(4);
var K = class _K {
  static hashStr(e, n = false) {
    return this.onePassHasher.start().appendStr(e).end(n);
  }
  static hashAsciiStr(e, n = false) {
    return this.onePassHasher.start().appendAsciiStr(e).end(n);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _K();
  static _hex(e) {
    const n = _K.hexChars, s = _K.hexOut;
    let i, r, o, h;
    for (h = 0; h < 4; h += 1)
      for (r = h * 8, i = e[h], o = 0; o < 8; o += 2)
        s[r + 1 + o] = n.charAt(i & 15), i >>>= 4, s[r + 0 + o] = n.charAt(i & 15), i >>>= 4;
    return s.join("");
  }
  static _md5cycle(e, n) {
    let s = e[0], i = e[1], r = e[2], o = e[3];
    s += (i & r | ~i & o) + n[0] - 680876936 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[2] + 606105819 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & r | ~i & o) + n[4] - 176418897 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[6] - 1473231341 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & r | ~i & o) + n[8] + 1770035416 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[10] - 42063 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & r | ~i & o) + n[12] + 1804603682 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[14] - 1502002290 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & o | r & ~o) + n[1] - 165796510 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[11] + 643717713 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i & o | r & ~o) + n[5] - 701558691 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[15] - 660478335 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i & o | r & ~o) + n[9] + 568446438 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[3] - 187363961 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i & o | r & ~o) + n[13] - 1444681467 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[7] + 1735328473 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i ^ r ^ o) + n[5] - 378558 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[11] + 1839030562 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (i ^ r ^ o) + n[1] - 1530992060 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[7] - 155497632 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (i ^ r ^ o) + n[13] + 681279174 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[3] - 722521979 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (i ^ r ^ o) + n[9] - 640364487 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[15] + 530742520 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (r ^ (i | ~o)) + n[0] - 198630844 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[14] - 1416354905 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + r | 0, s += (r ^ (i | ~o)) + n[12] + 1700485571 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[10] - 1051523 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + r | 0, s += (r ^ (i | ~o)) + n[8] + 1873313359 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[6] - 1560198380 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + r | 0, s += (r ^ (i | ~o)) + n[4] - 145523070 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[2] + 718787259 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + r | 0, e[0] = s + e[0] | 0, e[1] = i + e[1] | 0, e[2] = r + e[2] | 0, e[3] = o + e[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_K.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(e) {
    const n = this._buffer8, s = this._buffer32;
    let i = this._bufferLength, r, o;
    for (o = 0; o < e.length; o += 1) {
      if (r = e.charCodeAt(o), r < 128)
        n[i++] = r;
      else if (r < 2048)
        n[i++] = (r >>> 6) + 192, n[i++] = r & 63 | 128;
      else if (r < 55296 || r > 56319)
        n[i++] = (r >>> 12) + 224, n[i++] = r >>> 6 & 63 | 128, n[i++] = r & 63 | 128;
      else {
        if (r = (r - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, r > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        n[i++] = (r >>> 18) + 240, n[i++] = r >>> 12 & 63 | 128, n[i++] = r >>> 6 & 63 | 128, n[i++] = r & 63 | 128;
      }
      i >= 64 && (this._dataLength += 64, _K._md5cycle(this._state, s), i -= 64, s[0] = s[16]);
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(e) {
    const n = this._buffer8, s = this._buffer32;
    let i = this._bufferLength, r, o = 0;
    for (; ; ) {
      for (r = Math.min(e.length - o, 64 - i); r--; )
        n[i++] = e.charCodeAt(o++);
      if (i < 64)
        break;
      this._dataLength += 64, _K._md5cycle(this._state, s), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(e) {
    const n = this._buffer8, s = this._buffer32;
    let i = this._bufferLength, r, o = 0;
    for (; ; ) {
      for (r = Math.min(e.length - o, 64 - i); r--; )
        n[i++] = e[o++];
      if (i < 64)
        break;
      this._dataLength += 64, _K._md5cycle(this._state, s), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const e = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [e[0], e[1], e[2], e[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(e) {
    const n = e.buffer, s = e.state, i = this._state;
    let r;
    for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = s[0], i[1] = s[1], i[2] = s[2], i[3] = s[3], r = 0; r < n.length; r += 1)
      this._buffer8[r] = n.charCodeAt(r);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(e = false) {
    const n = this._bufferLength, s = this._buffer8, i = this._buffer32, r = (n >> 2) + 1;
    this._dataLength += n;
    const o = this._dataLength * 8;
    if (s[n] = 128, s[n + 1] = s[n + 2] = s[n + 3] = 0, i.set(_K.buffer32Identity.subarray(r), r), n > 55 && (_K._md5cycle(this._state, i), i.set(_K.buffer32Identity)), o <= 4294967295)
      i[14] = o;
    else {
      const h = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (h === null) return e ? ti : "";
      const b = parseInt(h[2], 16), L = parseInt(h[1], 16) || 0;
      i[14] = b, i[15] = L;
    }
    return _K._md5cycle(this._state, i), e ? this._state : _K._hex(this._state);
  }
};
if (K.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var ni = 36e5;
var Yn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Rt(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && Yn in t ? t[Yn](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function Ye(t, e) {
  return Rt(t, t);
}
function si(t, e, n) {
  const s = Ye(t);
  if (isNaN(e)) return Rt(t, NaN);
  const i = s.getDate(), r = Rt(t, s.getTime());
  r.setMonth(s.getMonth() + e + 1, 0);
  const o = r.getDate();
  return i >= o ? r : (s.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    i
  ), s);
}
function cs(t, e, n) {
  return Rt(t, +Ye(t) + e);
}
function ii(t, e, n) {
  return cs(t, e * ni);
}
function ri(t, e, n) {
  return cs(t, e * 1e3);
}
function oi(t, e, n) {
  return si(t, e * 12);
}
function qn(t) {
  return Math.trunc(+Ye(t) / 1e3);
}
function as(t, e) {
  return +Ye(t) < +Ye(e);
}
function It(t, e, n, s = "debug", i) {
  if (window.debug) {
    const o = ["color: #0288D1", `color:${i || "#009688"}`, "color: default"];
    n ? Xn() ? console[s](
      `%c[PlaceOS]%c[${t}] %c${e}`,
      ...o,
      n
    ) : console[s](`[PlaceOS][${t}] ${e}`, n) : Xn() ? console[s](`%c[PlaceOS]%c[${t}] %c${e}`, ...o) : console[s](`[PlaceOS][${t}] ${e}`);
  }
}
function Ft(t) {
  const e = (i) => i.length <= 0 ? void 0 : i.length === 1 ? i[0] : i, n = (i, r, o) => It(t, r, e(o), i), s = (i, ...r) => n("debug", i, r);
  return s.debug = (i, ...r) => n("debug", i, r), s.info = (i, ...r) => n("info", i, r), s.error = (i, ...r) => n("error", i, r), s.warn = (i, ...r) => n("warn", i, r), s.log = (i, ...r) => n("log", i, r), s.group = (i, ...r) => n("group", i, r), s.groupCollapsed = (i, ...r) => n("groupCollapsed", i, r), s.groupEnd = (i, ...r) => n("groupEnd", i, r), s;
}
function Xn() {
  return !(document.documentMode || /Edge/.test(navigator.userAgent));
}
function hs() {
  const t = window.location?.hash ? window.location?.hash.slice(1) : window.location?.href.split("#")[1] || "";
  let e = window.location?.search ? window.location?.search.slice(1) : window.location?.href.split("?")[1] || "", n = {};
  if (t)
    if (t.indexOf("?") >= 0) {
      const i = t.split("?");
      n = Ce(i[0]), e || (e = i[1]);
    } else
      n = Ce(t);
  let s = {};
  return e && (s = Ce(e)), __spreadValues(__spreadValues({}, n), s);
}
function Ce(t) {
  const e = {}, n = t.split("&");
  for (const s of n) {
    const i = s.split("=");
    i[1] && (e[decodeURIComponent(i[0])] = decodeURIComponent(
      i[1]
    ));
  }
  return e;
}
var Ze = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function ls(t = 40) {
  let e = "";
  const n = window?.crypto;
  if (n?.getRandomValues) {
    const s = 256 - 256 % Ze.length, i = new Uint8Array(t * 2);
    for (; e.length < t; ) {
      n.getRandomValues(i);
      for (const r of i)
        r < s && e.length < t && (e += Ze.charAt(r % Ze.length));
    }
    return e;
  }
  for (let s = 0; s < t; s++)
    e += Ze.charAt(
      Math.floor(Math.random() * Ze.length)
    );
  return e;
}
function oe(t) {
  const e = (window.location?.hash || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/#&/g, "#").replace(/&$/g, "#"), n = (window.location?.search || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/\?&/g, "#").replace(/&$/g, "#");
  window.history?.replaceState && window.history?.replaceState(
    null,
    "",
    `${window.location?.pathname}${e}${n}`
  );
}
function ui(t) {
  if (t.length === 0)
    throw new Error("Input must not be of zero length");
  const e = t.split(","), n = {};
  for (const s of e) {
    const i = s.split(";");
    if (i.length !== 2)
      throw new Error("Section could not be split on ';'");
    const r = i[0].replace(/<(.*)>/, "$1").trim(), o = i[1].replace(/rel="(.*)"/, "$1").trim();
    n[o] = r;
  }
  return n;
}
function ci(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e.indexOf(t[n]) >= 0 && delete t[n];
  return t;
}
function ai() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function hi() {
  return window.location !== window.parent.location;
}
function li(t = Date.now(), e = 60 * 1e3) {
  return Math.floor(t / e);
}
var pi = class {
  abort() {
    It("Stub", "Aborted");
  }
};
function g(t) {
  let e = "";
  if (t)
    for (const n in t)
      t.hasOwnProperty(n) && t[n] !== void 0 && t[n] !== null && (e += `${e ? "&" : ""}${n}=${encodeURIComponent(
        t[n]
      )}`);
  return e;
}
var xe = {};
function ue(t, e, n = 300) {
  if (t && e && e instanceof Function)
    $e(t), xe[t] = setTimeout(() => {
      e(), delete xe[t];
    }, n);
  else
    throw new Error(
      t ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback"
    );
}
function $e(t) {
  xe[t] && (clearTimeout(xe[t]), delete xe[t]);
}
function se(t) {
  let e = t;
  const n = /* @__PURE__ */ new Set(), s = () => e;
  return Object.defineProperty(s, "value", {
    get: () => e,
    enumerable: true
  }), s.subscribe = (i, r = {}) => (n.add(i), r.emitCurrent !== false && i(e, e), () => n.delete(i)), s.set = (i) => {
    if (Object.is(i, e)) return;
    const r = e;
    e = i;
    for (const o of [...n])
      o(e, r);
  }, s.update = (i) => s.set(i(e)), s.asReadonly = () => s, s;
}
function Yr(t, e = Boolean) {
  return e(t.value) ? Promise.resolve(t.value) : new Promise((n) => {
    const s = t.subscribe(
      (i) => {
        e(i) && (s(), n(i));
      },
      { emitCurrent: false }
    );
  });
}
function mi(t) {
  return new Promise((e) => setTimeout(e, t));
}
var gi = {
  id: "mock-authority",
  name: "localhost:4200",
  description: "",
  domain: "localhost:4200",
  login_url: "/login?continue={{url}}",
  logout_url: "/logout",
  session: true,
  production: false,
  config: {},
  version: "2.0.0"
};
var y = Ft("Auth");
var p = {};
var R = localStorage;
var w;
var m = {};
var x = "";
var Tn = {};
var be = "";
var ve = se("");
var Xe = se("");
var Rn = "/api/engine/v2";
var ye = se(false);
var In = se(false);
var Ve = 0;
function ps() {
  if (p.mock) return true;
  if (!R) return false;
  if (et() && !p.ignore_api_key) return true;
  const t = R.getItem(`${x}_expires_at`) || "";
  return as(+t, /* @__PURE__ */ new Date()) ? false : !!(ve.value || R.getItem(`${x}_access_token`));
}
function Ne() {
  In.set(ps());
}
function ds(t) {
  if (!t || t.startsWith("http://") || t.startsWith("https://"))
    return t;
  const e = w?.domain;
  return e ? `${p.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${e}${t}` : t;
}
function u() {
  return `${`${p.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${p.host || window.location?.host}`}${fs()}`;
}
function fs() {
  return p.version === "ACA Engine" ? "/control/api" : Rn;
}
function yi() {
  return !!p.token_header;
}
function $i() {
  return x;
}
function Xr(t, e, n) {
  Tn = {
    "X-App-Name": t,
    "X-App-Date": e,
    "X-App-Build": n
  };
}
function Lt() {
  return __spreadValues(__spreadValues({}, x ? { "X-App-Id": x } : {}), Tn);
}
function to(t, e = true) {
  R.setItem(`${x}_x-api-key`, `${t}`), R.setItem("trusted", `${e}`), bi("x-api-key", oi(/* @__PURE__ */ new Date(), 5).valueOf());
}
function et() {
  return Ct("x-api-key", false) || "";
}
function bi(t, e = ii(/* @__PURE__ */ new Date(), 2).valueOf()) {
  p.ignore_api_key && t === "x-api-key" || (R.setItem(`${x}_expires_at`, `${e}`), R.setItem(`${x}_access_token`, t), ve.set(t), Ne());
}
function J(t = true) {
  if (p.mock) return "mock-token";
  if (!R) return "";
  if (et() && !p.ignore_api_key) return "x-api-key";
  const e = R.getItem(`${x}_expires_at`) || "", n = ve.value;
  return as(+e, /* @__PURE__ */ new Date()) && (y("Token expired. Requesting new token..."), Cn(), m.load_authority || (Ve += 1, ue(
    "re-authorise",
    async () => {
      delete m.authorise, await jt().catch(
        (s) => y.error("Failed to get token:", s)
      );
    },
    200 * Math.min(20, Ve)
  )), !t) ? "" : n || R.getItem(`${x}_access_token`) || "";
}
function Et() {
  return Xe.value || R.getItem(`${x}_refresh_token`) || "";
}
function Pn() {
  return p.host || window.location?.host;
}
function vi() {
  return Ne(), In.asReadonly();
}
function Mt() {
  return w;
}
function so() {
  return ye.value;
}
function Un() {
  return !!p.mock;
}
function ki() {
  return !!p.secure;
}
function io() {
  return ye.asReadonly();
}
function En() {
  return Ct("trust") === "true" || Ct("trusted") === "true";
}
function _s() {
  return !!et() && !p.ignore_api_key || Ct("fixed_device") === "true";
}
function Ct(t, e = true) {
  let s = hs()[t];
  if (R) {
    const i = `${$i()}_${t}`;
    s = s || R.getItem(i) || R.getItem(t) || "", e && R.setItem(i, `${s}`);
  }
  return s;
}
async function ro(t) {
  return p = t || p, p.token_header = p.token_header ?? hi(), window.AbortController || (window.AbortController = pi), R = p.storage === "session" ? sessionStorage : localStorage, x = K.hashStr(p.redirect_uri, false), Si(), p.delay && p.delay > 0 && await mi(p.delay), On();
}
var Ot = false;
function Si() {
  Ot || (Ot = true, window.addEventListener("focus", wt), document.addEventListener("visibilitychange", wt));
}
async function wt() {
  if (document.visibilityState === "hidden" || p.mock || !w || w.session || ps()) return;
  if (delete m.check_params, await gs().catch(() => false) || be || Et()) {
    y("Application focused with new credentials. Authorising..."), we = false, delete m.authorise, await jt().catch(
      (e) => y.error("Failed to authorise on focus:", e)
    );
    return;
  }
  y("Application focused without a session. Reloading authority..."), we = false, Mn().catch(
    (e) => y.error("Failed to refresh authority:", e)
  );
}
function Mn() {
  return y("Refreshing authorty."), w = void 0, On();
}
function Cn() {
  y("Invalidating tokens."), R.removeItem(`${x}_access_token`), R.removeItem(`${x}_expires_at`), ve.value && ve.set(""), Ne();
}
function jt(t, e = w) {
  return !m.authorise && !e ? Promise.reject("Authority is not loaded") : (m.authorise || (m.authorise = new Promise((n, s) => {
    y("Authorising user...");
    const i = () => {
      if (J(false))
        y("Valid token found."), delete m.authorise, n(J());
      else {
        const r = [
          () => {
            y("Successfully generated token."), n(J()), delete m.authorise;
          },
          () => {
            y.error("Failed to generate token."), s("Failed to generate token"), setTimeout(() => delete m.authorise, 200);
          }
        ];
        if (p && p.auth_type === "password")
          y("Logging in with credentials."), Ei(p).then(
            ...r
          ), Ve = 0;
        else if (be || Et())
          y(
            `Generating token with ${be ? "code" : "refresh token"}`
          ), ys().then(...r), Ve = 0;
        else if (p.entra_token)
          y("Exchanging Entra token..."), p.entra_token().then(Mi).then(...r), Ve = 0;
        else if (e.session)
          y(
            "Users has session. Authorising application..."
          ), xi(t).then(...r);
        else {
          y("No user session"), s("No user session"), setTimeout(() => delete m.authorise, 200);
          try {
            ms(e);
          } catch {
          }
        }
      }
    };
    Pi().then(i, i);
  })), m.authorise);
}
function ao() {
  const t = ds(
    w ? w.logout_url : "/logout"
  );
  fetch(t, {
    method: "GET",
    redirect: "manual",
    headers: __spreadProps(__spreadValues({}, Lt()), {
      Authorization: "Bearer " + J()
    })
  }).then(
    (e) => {
      const n = e.headers.get("Location") || t;
      es(), window.location?.assign(n);
    },
    (e) => {
      y.error("Error logging out:", e), es(), window.location?.assign(t);
    }
  );
}
function es() {
  const t = [];
  for (let e = 0; e < R.length; e++) {
    const n = R.key(e);
    n && n.indexOf(x) >= 0 && t.push(n);
  }
  for (const e of t)
    R.removeItem(e);
  ve.set(""), Xe.set(""), Ne();
}
function On(t = 0) {
  return m.load_authority || (m.load_authority = new Promise((e) => {
    if (ye.set(false), p.mock) {
      w = gi, y("System in mock mode"), ye.set(true), e();
      return;
    }
    y(`Fixed: ${_s()} | Trusted: ${En()}`), y("Loading authority...");
    const n = p.secure || window.location?.protocol.indexOf("https") >= 0, s = (i) => {
      y.error(`Failed to load authority(${i})`), ye.set(false), ue(
        "load_authority",
        () => {
          delete m.load_authority, On(t).then((r) => e());
        },
        300 * Math.min(20, ++t)
      );
    };
    fetch(`${n ? "https:" : "http:"}//${Pn()}/auth/authority`, {
      credentials: "same-origin",
      headers: Lt()
    }).then(async (i) => {
      if (!i.ok)
        return s(await i.text().catch((o) => o));
      w = await i.json(), Rn = /[2-9]\.[0-9]+\.[0-9]+/g.test(
        w.version || ""
      ) ? "/api/engine/v2" : "/control/api", y.group("Loaded authority."), w && (y(`Name: ${w.name}`), y(`Version: ${w.version}`), y(`Domain: ${w.domain}`), y(`Session: ${w.session}`), y(`Production: ${w.production}`), y(
        `Config Keys: ${Object.keys(w.config || {}).length}`
      )), y.groupEnd("");
      const r = () => {
        ye.set(true), y("Application set online."), e();
      };
      delete m.load_authority, jt("").then(r, r);
    }, s);
  })), m.load_authority;
}
async function xi(t) {
  if (p.use_iframe && m.iframe_auth)
    return m.iframe_auth;
  const e = Ti(t);
  if (p.use_iframe)
    return qi(e);
  window.location?.assign(e);
}
function qi(t) {
  return m.iframe_auth || (m.iframe_auth = new Promise((e, n) => {
    y("Authorizing in an iFrame...");
    const s = document.createElement("iframe");
    s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.height = "1px", s.style.width = "1px", s.style.zIndex = "-1", s.id = "place-authorize", s.src = `${t}`;
    const i = (o) => {
      if (o.origin === window.location?.origin && o.data.type === "place-os") {
        const h = o.data;
        if (y("Received credentials from iFrame..."), document.body.removeChild(s), $e("iframe_auth"), window.removeEventListener("message", i), delete m.iframe_auth, h.token)
          return e(), Nn(__spreadValues({
            access_token: h.token
          }, h));
        be = h.code || "", ys().then(
          (b) => e(b),
          (b) => n(b)
        );
      }
    }, r = () => {
      window.removeEventListener("message", i), s.parentNode && s.parentNode.removeChild(s), delete m.iframe_auth;
    };
    ue(
      "iframe_auth",
      () => {
        y.error("Unable to resolve iFrame after 15 seconds..."), r(), n();
      },
      15 * 1e3
    ), window.addEventListener("message", i), s.onerror = (o) => {
      y.error("iFrame error.", o), $e("iframe_auth"), r(), n();
    }, document.body.appendChild(s);
  })), m.iframe_auth;
}
var we = false;
function ms(t) {
  if (p.handle_login !== false && !we) {
    y("Redirecting to login page...");
    const e = ds(
      t.login_url?.replace(
        "{{url}}",
        encodeURIComponent(window.location?.href)
      )
    );
    throw setTimeout(() => window.location?.assign(e), 300), we = true, new Error("Redirecting to login page...");
  } else
    y("Login being handled locally.");
  delete m.authorise;
}
function Pi() {
  return m.check_token || (m.check_token = new Promise(async (t, e) => {
    J() ? (y("Valid token found."), t(J())) : (y("No token. Checking URL for auth credentials..."), await gs() ? t(true) : e()), delete m.check_token;
  })), m.check_token;
}
function gs() {
  return m.check_params || (m.check_params = new Promise((t) => {
    y("Checking for auth parameters...");
    let e = hs();
    if ((!e || Object.keys(e).length <= 0) && sessionStorage && (e = JSON.parse(
      sessionStorage.getItem("ENGINE.auth.params") || "{}"
    ), sessionStorage.removeItem("ENGINE.auth.params")), e && (e.code || e.access_token || e.refresh_token)) {
      const n = R.getItem(`${x}_nonce`) || "", s = (e.state || "").split(";");
      oe("state"), oe("token_type");
      const i = s[0];
      n === i ? (e.code && (be = e.code, oe("code")), e.refresh_token && (R.setItem(
        `${x}_refresh_token`,
        e.refresh_token
      ), oe("refresh_token")), Nn(e), t(!!e.access_token)) : (oe("code"), oe("access_token"), oe("refresh_token"), t(false));
    } else
      t(false);
    ue(
      "check_params_promise",
      () => delete m.check_params,
      50
    );
  })), m.check_params;
}
function Ti(t) {
  const e = Ci();
  t = t ? `${e};${t}` : e;
  const n = p ? (p.auth_uri || "").indexOf("?") >= 0 : false, s = (p ? p.auth_uri : null) || "/auth/oauth/authorize", i = En() || p.auth_type === "auth_code" ? "code" : "token";
  let r = `${s}${n ? "&" : "?"}response_type=${encodeURIComponent(i)}&client_id=${encodeURIComponent(x)}&state=${encodeURIComponent(t)}&redirect_uri=${encodeURIComponent(p.redirect_uri)}&scope=${encodeURIComponent(p.scope)}`;
  if (p.auth_type === "auth_code") {
    const { challenge: o, verify: h } = Ri();
    sessionStorage.setItem(`${x}_challenge`, o), r += "&code_challenge_method=S256", r += `&code_challenge=${h}`;
  }
  return r;
}
function Ri(t = 43) {
  const e = ls(t), n = Js(Vs(e)), s = us(ei.hash(n)).split("=")[0].replace(/\//g, "_").replace(/\+/g, "-");
  return { challenge: e, verify: s };
}
function Ii() {
  let e = (p.token_uri || "/auth/token") + `?client_id=${encodeURIComponent(x)}`, n = "";
  if (e += `&redirect_uri=${encodeURIComponent(p.redirect_uri)}`, Et()) {
    e += `&refresh_token=${encodeURIComponent(Et())}`, e += "&grant_type=refresh_token";
    const s = e.indexOf("?");
    n = e.slice(s + 1), e = e.slice(0, s);
  } else {
    e += `&code=${encodeURIComponent(be)}`, e += "&grant_type=authorization_code";
    const s = sessionStorage.getItem(`${x}_challenge`);
    s && (e += `&code_verifier=${s}`, sessionStorage.removeItem(`${x}_challenge`)), be = "";
  }
  return [e, n];
}
function Ui(t) {
  const e = t.token_uri || "/auth/token", n = g({
    grant_type: "password",
    client_id: x,
    client_secret: t.client_secret,
    redirect_uri: t.redirect_uri,
    authority: w?.id,
    scope: t.scope,
    username: t.username,
    password: t.password
  });
  return `${e}?${n}`;
}
function ys() {
  return wn(...Ii());
}
function Ei(t) {
  return wn(Ui(t));
}
function Mi(t) {
  const e = g({
    grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
    client_id: x,
    client_secret: p.client_secret,
    subject_token: t,
    subject_token_type: "urn:ietf:params:oauth:token-type:access_token",
    scope: p.scope
  });
  return wn(p.token_uri || "/auth/token", e);
}
function wn(t, e = "") {
  return m.generate_tokens || (m.generate_tokens = new Promise((n, s) => {
    y("Generating new token...");
    const i = (r) => {
      y.error("Error generating new tokens:", r), r && r.status >= 400 && r.status < 500 && (R.removeItem(`${x}_refresh_token`), Xe.set("")), Ne(), s(), delete m.generate_tokens;
    };
    fetch(t, {
      method: "POST",
      body: e,
      headers: __spreadProps(__spreadValues({}, Lt()), {
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }).then(async (r) => {
      if (!r.ok) return i(r);
      const o = await r.json();
      Nn(o), n(), delete m.generate_tokens;
    }, i);
  })), m.generate_tokens;
}
function Nn(t) {
  const e = ri(
    /* @__PURE__ */ new Date(),
    Math.max(60, parseInt(t.expires_in, 10) - 300)
  );
  y("Tokens generated storing..."), En() && (t.access_token && (R.setItem(
    `${x}_access_token`,
    t.access_token
  ), oe("access_token")), t.refresh_token && (R.setItem(
    `${x}_refresh_token`,
    t.refresh_token
  ), oe("refresh_token"))), t.expires_in && (R.setItem(`${x}_expires_at`, `${e.valueOf()}`), oe("expires_in")), ye.set(true), ve.set(t.access_token || ""), Xe.set(t.refresh_token || ""), Ne();
}
function Ci() {
  const t = ls();
  return R.setItem(`${x}_nonce`, t), t;
}
var qe = Ft("HTTP(M)");
var Gt = {};
var $s = (t, e) => {
  const n = new Error(`Mock endpoint not found: ${t} ${e}`);
  return n.status = 404, qe(`404 ${t}:`, e), Promise.reject(n);
};
function lo(t, e = Gt) {
  Oi(t.method, t.path, e);
  const n = `${t.method}|${t.path}`, s = t.path.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("/"), i = __spreadProps(__spreadValues({}, t), {
    path_parts: s,
    path_structure: s.map(
      (r) => r[0] === ":" ? r.replace(":", "") : ""
    )
  });
  e[n] = i, qe(`+ ${t.method} ${t.path}`);
}
function Oi(t, e, n = Gt) {
  const s = `${t}|${e}`;
  n[s] && (delete n[s], qe(`- ${t} ${e}`));
}
function wi(t, e, n, s = Gt) {
  const i = Ni(t, e, s);
  if (i) {
    const r = Di(e, i, n);
    return Hi(i, r);
  }
  try {
    return $s(t, e);
  } catch (r) {
    return qe.error(`ERROR ${t}:`, [e, r]), Promise.reject(r);
  }
}
function Ni(t, e, n = Gt) {
  const i = e.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("?")[0].split("/"), r = Object.keys(
    n
  ).reduce((o, h) => (h.indexOf(`${t}|`) === 0 && o.push(n[h]), o), []);
  for (const o of r)
    if (o.path_structure.length === i.length) {
      let h = true;
      for (let b = 0; b < o.path_structure.length; b++)
        if (!o.path_structure[b] && o.path_parts[b] !== i[b]) {
          h = false;
          break;
        }
      if (h)
        return o;
    }
  return null;
}
function Di(t, e, n) {
  const s = t.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").split("?"), i = s[0].replace(/^\//, ""), r = s[1] || "", o = Ce(r), h = i.split("/"), b = {};
  for (let I = 0; I < e.path_structure.length; I++) {
    const W = e.path_structure[I];
    W && (b[W] = h[I]);
  }
  const L = {
    url: t,
    path: e.path,
    method: e.method,
    metadata: e.metadata,
    route_params: b,
    query_params: o,
    body: n
  };
  return qe(`MATCHED ${L.method}:`, L), L;
}
function Hi(t, e) {
  let n;
  try {
    n = t.callback ? t.callback(e) : t.metadata;
  } catch (o) {
    return qe.error(`ERROR ${e.method}:`, e.url, o), Promise.reject(o);
  }
  const s = t.delay_variance || 100, i = t.delay || 300, r = Math.floor(Math.random() * s - s / 2) + i;
  return qe(`RESP ${e.method}:`, e.url, n), new Promise((o) => {
    setTimeout(() => o(n), Math.max(200, r));
  });
}
var zi = Ft("HTTP");
var Fi = 3e4;
async function Li() {
  J(false);
  const t = vi();
  t.value || await new Promise((e, n) => {
    const s = setTimeout(() => {
      i(), n(new Error("Timed out waiting for authentication."));
    }, Fi), i = t.subscribe(
      (r) => {
        r && (clearTimeout(s), i(), e());
      },
      { emitCurrent: false }
    );
  });
}
var bs = {};
function ji(t, e = bs) {
  return e[t] || {};
}
function _(t, e, n = tt) {
  return e || (e = { response_type: "json" }), n("GET", t, __spreadValues({ response_type: "json" }, e));
}
function v(t, e, n, s = tt) {
  return n || (n = { response_type: "json" }), s("POST", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function ce(t, e, n, s = tt) {
  return n || (n = { response_type: "json" }), s("PUT", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function te(t, e, n, s = tt) {
  return n || (n = { response_type: "json" }), s("PATCH", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function V(t, e, n = tt) {
  return e || (e = { response_type: "void" }), n("DELETE", t, __spreadValues({ response_type: "void" }, e));
}
async function Gi(t, e, n = bs) {
  if (t.headers) {
    const s = {};
    t.headers.forEach ? t.headers.forEach((i, r) => s[r.toLowerCase()] = i) : Object.keys(t.headers).forEach(
      (i) => s[i.toLowerCase()] = t.headers[i]
    ), n[t.url || ""] = s;
  }
  switch (e) {
    case "blob":
      return await t.blob();
    case "json":
      return await t.json().catch(() => ({}));
    case "text":
      return await t.text();
    case "void":
      return;
    default:
      return await t.json().catch(() => ({}));
  }
}
var vs = () => (Cn(), Mn().then(
  () => Promise.resolve(),
  () => new Promise((t) => {
    setTimeout(() => {
      vs().then(() => t());
    }, 1e3);
  })
));
function tt(t, e, n, s = Un, i = wi, r = Gi) {
  if (s()) {
    const I = i(t, e, n?.body);
    if (I) return I;
  }
  n.headers = __spreadValues(__spreadValues({}, Lt()), n.headers), !n.headers["Content-Type"] && !n.headers["content-type"] && (n.headers["Content-Type"] = "application/json");
  const o = () => {
    const I = __spreadProps(__spreadValues({}, n), {
      method: t,
      credentials: "same-origin"
    });
    return delete I.response_type, delete I.skip_auth, delete I.skip_auth_flow, ["POST", "PUT", "PATCH"].includes(t) && n.body !== void 0 && (I.body = typeof n.body == "string" ? n.body : JSON.stringify(n.body)), fetch(e, I);
  }, h = async () => {
    n.skip_auth || (await Li(), J() === "x-api-key" ? n.headers["X-API-Key"] = et() : n.headers.Authorization = `Bearer ${J()}`);
    const I = await o();
    if (I.ok) return r(I, n.response_type);
    throw I;
  }, b = 4, L = async (I) => {
    try {
      return await h();
    } catch (W) {
      if (I >= b) throw W || {};
      if (n.skip_auth || n.skip_auth_flow) throw W || {};
      if (W.status === 511)
        throw ms(Mt()), W;
      if (W.status !== 401) throw W || {};
      return zi.warn("Auth error:", W), await vs().catch(() => {
        throw W;
      }), L(I + 1);
    }
  };
  return L(0);
}
var F = class {
  /** Unique Identifier of the object */
  id;
  /** Human readable name of the object */
  name;
  /** Unix epoch in seconds of the creation time of the object */
  created_at;
  /** Unix epoch in seconds of the creation time of the object */
  updated_at;
  /** Version of the data */
  version;
  constructor(e = {}) {
    this.id = e.id || "", this.name = e.name || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.version = e.version || 0;
  }
  /**
   * Convert object into plain object
   */
  toJSON() {
    const e = __spreadValues({}, this);
    return e.version = this.version, delete e.created_at, ci(e, [void 0, null, ""]);
  }
};
var ks = {};
var Ss = {};
var ts = "";
var Wt = (t) => t;
var Ki = 300;
var Me = {};
function $(t) {
  const { query_params: e, fn: n, path: s, endpoint: i } = t, r = g(e), o = `${i || u()}${s ? "/" + s : ""}${r ? "?" + r : ""}`;
  if (Me[o]) return Me[o].promise;
  const h = _(o).then((b) => {
    const L = Zi(o, r, s);
    return {
      total: L.total || 0,
      next: L.next ? () => $({
        query_params: L.next,
        fn: n,
        endpoint: i,
        path: s
      }) : null,
      data: b && b instanceof Array ? b.map((I) => (n || Wt)(I)) : b && !(b instanceof Array) && b.results ? b.results.map((I) => I) : []
    };
  });
  return Me[o] = {
    promise: h,
    timeout: setTimeout(() => delete Me[o], Ki)
  }, h.catch(() => {
    clearTimeout(Me[o]?.timeout), delete Me[o];
  }), h;
}
function d(t) {
  const { query_params: e, id: n, path: s, fn: i, options: r } = t, o = g(e), h = `${u()}/${s}/${n}${o ? "?" + o : ""}`;
  return _(h, r).then((b) => (i || Wt)(b));
}
function q(t) {
  const { query_params: e, form_data: n, path: s, fn: i } = t, r = g(e), o = `${u()}/${s}${r ? "?" + r : ""}`;
  return v(o, n).then((h) => (i || Wt)(h));
}
function a(t) {
  const { id: e, task_name: n, form_data: s, method: i, path: r, callback: o } = t, h = g(s), b = `${u()}/${r}/${e}/${n}`;
  return (i === "post" || i === "put" || !i ? (i === "put" ? ce : v)(b, s) : (i === "del" ? V : _)(
    `${b}${h ? "?" + h : ""}`,
    {
      response_type: "json"
    }
  )).then((I) => (o || ((W) => W))(I));
}
function P(t) {
  const { id: e, query_params: n, form_data: s, method: i, path: r, fn: o } = t, h = g(__spreadProps(__spreadValues({}, n), {
    version: s.version || 0
  })), b = `${u()}/${r}/${e}${h ? "?" + h : ""}`;
  return (i === "put" ? ce : te)(b, s).then(
    (L) => (o || Wt)(L)
  );
}
function A(t) {
  const { id: e, query_params: n, path: s } = t, i = g(n), r = `${u()}/${s}/${e}${i ? "?" + i : ""}`;
  return V(r);
}
function Zi(t, e, n) {
  const s = ji(
    t[0] === "/" ? `${location.origin}${t}` : t
  ), i = {
    total: 0,
    next: null
  };
  if (s && s["x-total-count"]) {
    const r = +(s["x-total-count"] || 0);
    (e.length < 2 || e.length < 12 && e.indexOf("offset=") >= 0) && (ks[n] = r), Ss[n] = r, i.total = r;
  }
  return s && s.link && (ts = ui(s.link || "").next, i.next = Ce(ts.split("?")[1])), i;
}
var Dn = class extends F {
  /** Hash of the email address of the user */
  email_digest;
  /** ID of the authority associated with the user */
  authority_id;
  /** Email address of the user */
  email;
  /** Phone number of the user */
  phone;
  /** Display nickname of the user */
  nickname;
  /** Country that the user resides in */
  country;
  /** Office building the user is associated */
  building;
  /** Access control groups that user is associated */
  groups;
  /** Avatar image for the user */
  image;
  /** Additional metadata associated with the user */
  metadata;
  /** Miscellaneous user data */
  misc;
  /** Username credential of the user */
  login_name;
  /** Organisation ID of the user */
  staff_id;
  /** First name of the user */
  first_name;
  /** Last name of the user */
  last_name;
  /** Whether user is a support role */
  support;
  /** Whether user is a system admin role */
  sys_admin;
  /** Name of the active theme on the displayed UI */
  ui_theme;
  /** Preferred language of the user */
  preferred_language;
  /** Card Number associated with the user */
  card_number;
  /** Organisational department the user belongs */
  department;
  /** Default worktime preferences for the user */
  work_preferences;
  /** Overrides of the worktime preferences for the user */
  work_overrides;
  /** ID of the user's photo in the PlaceOS uploads service */
  photo_upload_id;
  /** Whether the user has opted in to location tracking */
  locatable;
  /** Password */
  password = "";
  /** Password */
  confirm_password = "";
  deleted;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.email = e.email || "", this.email_digest = e.email_digest || "", this.phone = e.phone || "", this.nickname = e.nickname || "", this.country = e.country || "", this.building = e.building || "", this.image = e.image || "", this.metadata = e.metadata || "", this.misc = e.misc || "", this.login_name = e.login_name || "", this.staff_id = e.staff_id || "", this.first_name = e.first_name || "", this.last_name = e.last_name || "", this.support = !!e.support, this.sys_admin = !!e.sys_admin, this.ui_theme = e.ui_theme || "", this.preferred_language = e.preferred_language || "", this.card_number = e.card_number || "", this.groups = e.groups || [], this.department = e.department || "", this.photo_upload_id = e.photo_upload_id || "", this.work_preferences = e.work_preferences || [], this.work_overrides = e.work_overrides || {}, this.locatable = e.locatable ?? true, this.deleted = e.deleted ?? false;
  }
};
var Le = /* @__PURE__ */ ((t) => (t[t.None = 0] = "None", t[t.Support = 1] = "Support", t[t.Admin = 2] = "Admin", t[t.NeverDisplay = 3] = "NeverDisplay", t))(Le || {});
var Pe = class extends F {
  /** ID of the parent zone/system/module/driver */
  parent_id;
  /** Unix timestamp in seconds of when the settings where last updated */
  updated_at;
  /** Access level for the settings data */
  encryption_level;
  /** Contents of the settings */
  settings_string;
  /** Top level keys for the parsed settings */
  keys;
  /** ID of the user that last modified the metadata */
  modified_by_id;
  /** Contents of the settings */
  get value() {
    return this.settings_string;
  }
  constructor(e = {}) {
    super(e), this.parent_id = e.parent_id || "", this.updated_at = e.updated_at || Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), this.settings_string = e.settings_string || "", this.encryption_level = e.encryption_level || Le.None, this.keys = e.keys || [], this.modified_by_id = e.modified_by_id || "";
  }
};
var Nt = /* @__PURE__ */ ((t) => (t[t.SSH = 0] = "SSH", t[t.Device = 1] = "Device", t[t.Service = 2] = "Service", t[t.Websocket = 3] = "Websocket", t[t.Logic = 99] = "Logic", t))(Nt || {});
var qs = class extends F {
  /** Place class name of the driver */
  class_name;
  /** Description of the driver functionality */
  description;
  /** Name to use for modules that inherit this driver */
  module_name;
  /** Role of the driver in engine */
  role;
  /** Default URI for the driver */
  default_uri;
  /** Default port number for the driver */
  default_port;
  /** ID of the repository the driver is from */
  repository_id;
  /** Name of the file from the repository to load the driver logic from */
  file_name;
  /** Version of the driver logic to use */
  commit;
  /** Ignore connection issues */
  ignore_connected;
  /** Whether newer version of driver is available */
  update_available;
  update_info;
  /**  */
  alert_level;
  /** Tuple of user settings of differring encryption levels for the driver */
  settings;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.module_name = e.module_name || "", this.role = e.role ?? Nt.Logic, this.default_uri = e.default_uri || "", this.default_port = e.default_port || 1, this.ignore_connected = e.ignore_connected || false, this.class_name = e.class_name || "", this.repository_id = e.repository_id || "", this.file_name = e.file_name || "", this.commit = e.commit || "", this.update_available = e.update_available || false, this.update_info = e.update_info, this.alert_level = e.alert_level || "medium", this.settings = e.settings || [null, null, null, null], typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
};
var Hn = class {
  /** ISO8601 timestamp of the creation time of the group */
  created_at;
  /** ISO8601 timestamp of the last update time of the group */
  updated_at;
  /** Unique identifier of the group */
  id;
  /** Human readable name of the group */
  name;
  /** Description of the group's purpose */
  description;
  /** Subsystems this group participates in */
  subsystems;
  /** ID of the authority associated with the group */
  authority_id;
  /** ID of the parent group */
  parent_id;
  /**
   * Feature flags per subsystem, i.e. `{ signage: { templates: true } }`.
   * Child groups inherit and can override ancestor keys
   */
  features;
  /** Permission bitmask given to users added without explicit permissions */
  default_permissions;
  /** AD group ID mapped to its display name and permission bitmask */
  ad_group_mappings;
  /** Count of child groups for this group */
  children_count;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.id = e.id || "", this.name = e.name || "", this.description = e.description || "", this.subsystems = e.subsystems || [], this.authority_id = e.authority_id || "", this.parent_id = e.parent_id || "", this.features = e.features || {}, this.default_permissions = e.default_permissions || 0, this.ad_group_mappings = e.ad_group_mappings || {}, isFinite(Number(e.children_count)) && (this.children_count = e.children_count);
  }
};
var Te = "groups";
function ut(t) {
  return new Hn(t);
}
function Cu(t = {}) {
  const e = g(t), n = `${u()}/${Te}/current${e ? "?" + e : ""}`;
  return _(n).then(
    (s) => (s || []).map((i) => ({
      group: ut(i.group || {}),
      permissions: i.permissions || 0
    }))
  );
}
var de = class extends F {
  /** Name of the system assocaited with the trigger */
  system_name;
  /** Number of times the trigger has been activated/triggered */
  activated_count;
  /** Description of the trigger */
  description;
  /** Duration with which to ignore sequential activations of the trigger */
  debounce_period;
  /** Whether the trigger should take priority */
  important;
  /** Whether trigger is enabled on the associated zone or system */
  enabled;
  /** Whether the trigger can call webhooks */
  enable_webhook;
  /** Whether the trigger instance can execute methods */
  exec_enabled;
  /** Auth key for trigger's webhook */
  webhook_secret;
  /** HTTP verbs supported by the webhook */
  supported_methods;
  /** ID of the system associated with the trigger */
  control_system_id;
  /** ID of the zone associated with the trigger */
  zone_id;
  /** ID of the Parent trigger */
  trigger_id;
  /** List of playlist IDs associated with the system */
  playlists;
  // Whether condition checks should match any single condition to pass or all of them
  any_match;
  /** ID of the system associated with the trigger */
  get system_id() {
    return this.control_system_id;
  }
  /** Actions to perform when the trigger is activated */
  get actions() {
    const e = this._actions, n = (e.functions || []).map((i) => __spreadProps(__spreadValues({}, i), {
      args: __spreadValues({}, i.args)
    })), s = (e.mailers || []).map((i) => __spreadProps(__spreadValues({}, i), {
      emails: [...i.emails]
    }));
    return { functions: n, mailers: s };
  }
  /** Conditions for activating the trigger */
  get conditions() {
    const e = this._conditions, n = (e.comparisons || []).map((i) => __spreadProps(__spreadValues({}, i), {
      left: typeof i.left == "object" ? __spreadValues({}, i.left) : i.left,
      right: typeof i.right == "object" ? __spreadValues({}, i.right) : i.right
    })), s = (e.time_dependents || []).map((i) => __spreadValues({}, i));
    return { comparisons: n, time_dependents: s };
  }
  /** Actions to perform when the trigger is activated */
  _actions;
  /** Conditions for activating the trigger */
  _conditions;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this._actions = e.actions || { functions: [], mailers: [] }, this._conditions = e.conditions || {
      comparisons: [],
      time_dependents: []
    }, this.debounce_period = e.debounce_period || 0, this.important = e.important || false, this.enabled = e.enabled || false, this.webhook_secret = e.webhook_secret || "", this.control_system_id = e.system_id || e.control_system_id || "", this.zone_id = e.zone_id || "", this.system_name = e.system_name || (e.control_system ? e.control_system.name : ""), this.enable_webhook = e.enable_webhook || false, this.exec_enabled = e.exec_enabled || false, this.supported_methods = e.supported_methods || ["POST"], this.activated_count = e.activated_count || e.trigger_count || 0, this.playlists = e.playlists || [], this.trigger_id = e.trigger_id || "", this.any_match = e.any_match || false;
  }
};
var en = class extends F {
  /** Tuple of user settings of differring encryption levels for the zone */
  settings = [null, null, null, null];
  /** Description of the zone's purpose */
  description;
  /** ID of the parent zone */
  parent_id;
  /** List of triggers associated with the zone */
  triggers;
  /** List of tags associated with the zone */
  tags;
  /** Geo-location details associated with the zone */
  location;
  /** Custom display name for the zone */
  display_name;
  /** Organisational code associated with the zone */
  code;
  /** Organisational categorisation of the zone */
  type;
  /** Count of resources associated with the zone */
  count;
  /** Count of child zones for this zone */
  children_count;
  /** Amount of physical capacity associated with the zone */
  capacity;
  /** ID or URL of or in a map associated with the zone */
  map_id;
  /** List of image URLs */
  images;
  /** Timezone of the associated real world location */
  timezone;
  /** List of playlist IDs associated with the system */
  playlists;
  /**
   * List of modules associated with the system.
   * Only available from the show method with the `complete` query parameter
   */
  trigger_list = [];
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.tags = e.tags || [], this.triggers = e.triggers || [], this.settings = e.settings || [null, null, null, null], this.parent_id = e.parent_id || "", this.location = e.location || "", this.display_name = e.display_name || "", this.code = e.code || "", this.type = e.type || "", this.count = e.count || 0, this.capacity = e.capacity || 0, this.map_id = e.map_id || "", this.timezone = e.timezone || "", this.images = e.images || [], this.playlists = e.playlists || [], isFinite(Number(e.children_count)) && (this.children_count = e.children_count), typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.trigger_data && e.trigger_data instanceof Array && (this.trigger_list = e.trigger_data.map(
      (n) => new de(n)
    ));
  }
};
var Is = class {
  /** ID of the parent resource associated with the metadata */
  id;
  /** ID of the parent resource associated with the metadata */
  parent_id;
  /** Name/ID of the zone metadata */
  name;
  /** Description of what this metadata represents */
  description;
  /** Metadata associated with this key. */
  details;
  /** List user groups allowed to edit the metadata */
  editors;
  /** JSON schema associated with the metadata details */
  schema;
  /** ID of the schema associated with the metadata details */
  schema_id;
  /** Unix timestamp that the metadata was created at */
  created_at;
  /** Unix timestamp that the metadata was last modified at */
  updated_at;
  /** ID of the user that last modified the metadata */
  modified_by_id;
  /** Version of the data */
  version;
  constructor(e = {}) {
    this.parent_id = e.parent_id || e.id || "", this.id = this.parent_id, this.name = e.name || "", this.description = e.description || "";
    try {
      this.details = (typeof e.details == "string" ? JSON.parse(e.details) : e.details) || {};
    } catch {
      this.details = e.details || {};
    }
    this.editors = e.editors || [], this.schema_id = e.schema_id || e.schema || "", this.schema = this.schema_id, this.created_at = (e.created_at || 0) * 1e3 || Date.now(), this.updated_at = (e.updated_at || 0) * 1e3 || Date.now(), this.modified_by_id = e.modified_by_id || "", this.version = e.version || 0;
  }
};
var ur = class {
  /** Zone associated with the metadata */
  zone;
  /** Metadata for zone */
  metadata;
  /** List of the root keys in the metadata */
  keys;
  constructor(e = {}) {
    this.zone = new en(e.zone), this.keys = e.keys || [], this.metadata = {};
    const n = e.metadata || {};
    for (const s of this.keys)
      this.metadata[s] = new Is(n[s]);
  }
};
var fe = "metadata";
function Re(t) {
  return new Is(t);
}
function ac(t, e) {
  return d({
    id: t,
    query_params: { name: e },
    fn: (n) => Re(n[e]),
    path: fe
  });
}
function hc(t, e, n = "put") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Re,
    path: fe
  });
}
function fc(t, e) {
  return a({
    id: t,
    task_name: "children",
    form_data: e,
    method: "get",
    callback: (n) => n.map(
      (s) => new ur(__spreadProps(__spreadValues({}, s), {
        keys: Object.keys(s.metadata)
      }))
    ),
    path: fe
  });
}
function _c(t, e) {
  const n = g(e), s = `${u()}/${fe}/${encodeURIComponent(t)}/bulk${n ? "?" + n : ""}`;
  return _(s).then(
    (i) => Object.keys(i || {}).reduce(
      (r, o) => __spreadProps(__spreadValues({}, r), { [o]: Re(i[o]) }),
      {}
    )
  );
}
var Us = class extends F {
  /** Tuple of user settings of differring encryption levels for the system */
  settings = [null, null, null, null];
  /** Display name of the system */
  display_name;
  /** Description of the system */
  description;
  /** Email address associated with the system */
  email;
  /** Email address associated with the system */
  code;
  /** Capacity of the space associated with the system */
  capacity;
  /** Features associated with the system */
  features;
  /** Whether system is bookable by end users */
  bookable;
  /** Whether system is public accessible */
  public;
  /** Count of UI devices attached to the system */
  installed_ui_devices;
  /** Support URL for the system */
  support_url;
  /** URL for the timetable UI linked to the system */
  timetable_url;
  /** URLs for requesting snapshots of the assosiated camera */
  camera_snapshot_url;
  /** URLs for requesting snapshots of the assosiated camera */
  camera_snapshot_urls;
  /** URL for managing the attached camera */
  camera_url;
  /** External booking URL for the system */
  room_booking_url;
  /** ID on the SVG Map associated with this system */
  map_id;
  /** List of module IDs that belong to the system */
  modules;
  /** List of images associated with the system */
  images;
  /** List of the zone IDs that the system belongs */
  zones;
  /** Timezone of the associated real world space */
  timezone;
  /**
   * List of modules associated with the system.
   * Only available from the show method with the `complete` query parameter
   */
  module_list = [];
  /** Whether the system has signage capabilities */
  signage;
  /** List of playlist IDs associated with the system */
  playlists;
  /** List of security groups with access to the system */
  security_groups;
  /** Unix timestamp of the last ping from the signage player UI */
  signage_last_seen;
  approval;
  /** Orientation of the signage system */
  orientation;
  constructor(e = {}) {
    super(e), this.display_name = e.display_name || "", this.description = e.description || "", this.email = e.email || "", this.code = e.code || "", this.capacity = e.capacity || 0, this.features = e.features || [], this.bookable = e.bookable || false, this.public = e.public ?? false, this.installed_ui_devices = e.installed_ui_devices || 0, this.support_url = e.support_url || "", this.camera_snapshot_url = e.camera_snapshot_url || "", this.camera_snapshot_urls = e.camera_snapshot_urls || [], this.camera_url = e.camera_url || "", this.timetable_url = e.timetable_url || "", this.room_booking_url = e.room_booking_url || "", this.map_id = e.map_id || "", this.modules = e.modules || [], this.images = e.images || [], this.zones = e.zones || [], this.settings = e.settings || [null, null, null, null], this.timezone = e.timezone || "", this.signage = e.signage || false, this.playlists = e.playlists || [], this.security_groups = e.security_groups || [], this.orientation = e.orientation || "unspecified", this.approval = e.approval || false, this.signage_last_seen = e.signage_last_seen || qn(Date.now()), typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.module_data && e.module_data instanceof Array && (this.module_list = e.module_data.map(
      (n) => new Es(n)
    ));
  }
};
var Es = class extends F {
  /** Whether the associated hardware is connected */
  connected;
  /** Whether the module driver is running */
  running;
  /** Timestamp of last update in ms since UTC epoch */
  updated_at;
  /** ID of the edge associated with the module */
  edge_id;
  /** ID of the driver associated with the module */
  driver_id;
  /** Driver/dependancy associated with the module */
  driver;
  /** ID of the system associated with the module */
  control_system_id;
  /** System associated with the module */
  system;
  /** IP address of the hardware associated with the module */
  ip;
  /** Whether the hardware connection requires TLS */
  tls;
  /** Whether the hardware connection is over UDP */
  udp;
  /** Port number connections to the hardware are made on */
  port;
  /**  */
  makebreak;
  /** URI associated with the module */
  uri;
  /** Custom name of the module */
  custom_name;
  /** Type of module */
  role;
  /** Notes associated with the module */
  notes;
  /** Ignore connection issues */
  ignore_connected;
  /** Tuple of user settings of differring encryption levels for the module */
  settings = [null, null, null, null];
  /** Whether the module has a runtime error */
  has_runtime_error;
  /** Timestamp of the last runtime error in ms since UTC epoch */
  error_timestamp;
  /**  */
  alert_level;
  /** ID of the system associated with the module */
  get system_id() {
    return this.control_system_id;
  }
  constructor(e = {}) {
    super(e), this.driver_id = e.driver_id || e.dependency_id || "", this.control_system_id = e.control_system_id || "", this.edge_id = e.edge_id || "", this.ip = e.ip || "", this.tls = e.tls || false, this.udp = e.udp || false, this.port = e.port || 1, this.makebreak = e.makebreak || false, this.uri = e.uri || "", this.custom_name = e.custom_name || "", this.role = e.role ?? Nt.Logic, this.notes = e.notes || "", this.ignore_connected = e.ignore_connected || false, this.connected = e.connected, this.running = e.running || false, this.updated_at = e.updated_at || 0, this.system = new Us(
      e.control_system || e.system
    ), this.has_runtime_error = e.has_runtime_error || false, this.error_timestamp = e.error_timestamp || 0, this.driver = new qs(e.dependency || e.driver), this.settings = e.settings || [null, null, null, null], this.alert_level = e.alert_level || "medium", typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
  /**
   * Convert object into plain object
   */
  toJSON(e = false) {
    const n = super.toJSON();
    return (n.role !== Nt.Logic && !e || !n.control_system_id) && delete n.control_system_id, delete n.driver, delete n.system, delete n.error_timestamp, delete n.has_runtime_error, n;
  }
};
var je = "settings";
function lt(t) {
  return new Pe(t);
}
function ga(t = {}) {
  return $({ query_params: t, fn: lt, path: je });
}
function $a(t, e, n = {}, s = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: n,
    method: s,
    fn: lt,
    path: je
  });
}
function ba(t, e = {}) {
  return q({ form_data: t, query_params: e, fn: lt, path: je });
}
var M = "systems";
function Ie(t) {
  return new Us(t);
}
function Sa(t = {}) {
  return $({ query_params: t, fn: Ie, path: M });
}
function Aa(t) {
  return $({ query_params: t, fn: Ie, path: `${M}/with_emails` });
}
function xa(t, e = {}) {
  return d({ id: t, query_params: e, fn: Ie, path: M });
}
function qa(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ie,
    path: M
  });
}
function Pa(t) {
  return q({ form_data: t, query_params: {}, fn: Ie, path: M });
}
function Ta(t) {
  return A({ id: t, query_params: {}, path: M });
}
function Ha(t, e = {}) {
  return $({
    query_params: e,
    fn: (n) => new de(n),
    path: `${M}/${t}/triggers`
  });
}
var Ge = "triggers";
function cn(t) {
  return new de(t);
}
function Za(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: cn,
    path: Ge
  });
}
var X = "users";
function Ue(t) {
  return new Dn(t);
}
function eh(t = {}) {
  return $({ query_params: t, fn: Ue, path: X });
}
function th(t, e = {}) {
  return d({ id: t, query_params: e, fn: Ue, path: X });
}
function sh(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ue,
    path: X
  });
}
var _e = "zones";
function an(t) {
  return new en(t);
}
function dh(t = {}) {
  return $({ query_params: t, fn: an, path: _e });
}
function _h(t, e = {}) {
  return d({ id: t, query_params: e, fn: an, path: _e });
}
function mh(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: an,
    path: _e
  });
}
function gh(t) {
  return q({ form_data: t, query_params: {}, fn: an, path: _e });
}
function yh(t) {
  return A({ id: t, query_params: {}, path: _e });
}
function $h(t, e = {}) {
  return $({
    query_params: e,
    fn: (n) => new de(n),
    path: `${_e}/${t}/triggers`
  });
}
var Ns = /* @__PURE__ */ ((t) => (t.Default = "default", t.Cut = "cut", t.CrossFade = "cross_fade", t.SlideTop = "slide_top", t.SlideLeft = "slide_left", t.SlideRight = "slide_right", t.SlideBottom = "slide_bottom", t))(Ns || {});
var Ds = class {
  id;
  created_at;
  updated_at;
  name;
  description;
  authority_id;
  start_time;
  play_time;
  video_length;
  animation;
  media_type;
  orientation;
  media_uri;
  media_id;
  thumbnail_id;
  plugin_id;
  plugin_params;
  play_count;
  valid_from;
  valid_until;
  tags;
  /** User groups that the media item is shared with. Only set on the show requests result not the query */
  shared_with;
  /** Playlists that the media item is included within. Only set on the show requests result not the query */
  playlists;
  get media_url() {
    return this.media_id ? `/api/engine/v2/uploads/${this.media_id}/url` : this.media_uri;
  }
  get thumbnail_url() {
    return `/api/engine/v2/uploads/${this.thumbnail_id}/url`;
  }
  constructor(e) {
    this.id = e.id || "", this.created_at = e.created_at || qn(Date.now()), this.updated_at = e.updated_at || qn(Date.now()), this.name = e.name || "", this.description = e.description || "", this.authority_id = e.authority_id || "", this.start_time = e.start_time || 0, this.play_time = e.play_time || 0, this.video_length = e.video_length || 0, this.animation = e.animation, this.media_type = e.media_type || "unknown", this.orientation = e.orientation || "unspecified", this.media_uri = e.media_uri || "", this.media_id = e.media_id || "", this.thumbnail_id = e.thumbnail_id || "", this.plugin_id = e.plugin_id || "", this.plugin_params = e.plugin_params || {}, this.play_count = e.play_count || 0, this.valid_from = e.valid_from, this.valid_until = e.valid_until, this.tags = e.tags || [], this.shared_with = e.shared_with || [], this.playlists = e.playlists || [];
  }
};
var mr = class {
  id;
  playlist_id;
  items;
  media;
  schedules;
  created_at;
  updated_at;
  user_id;
  user_name;
  user_email;
  approved;
  approval_requested;
  requested_by_id;
  approved_by_id;
  approved_by_email;
  approved_by_name;
  shared_with;
  constructor(e = {}) {
    this.id = e.id || "", this.playlist_id = e.playlist_id || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.items = e.items || [], this.media = e.media || [], this.schedules = e.schedules || [], this.approved = !!e.approved, this.approval_requested = !!e.approval_requested, this.requested_by_id = e.requested_by_id || "", this.approved_by_id = e.approved_by_id || "", this.approved_by_email = e.approved_by_email || "", this.approved_by_name = e.approved_by_name || "", this.user_id = e.user_id || "", this.user_name = e.user_name || "", this.user_email = e.user_email || "", this.shared_with = e.shared_with || [];
  }
};
var yr = class {
  id;
  created_at;
  updated_at;
  name;
  description;
  authority_id;
  orientation;
  play_count;
  play_through_count;
  default_animation;
  random;
  enabled;
  distribution;
  default_duration;
  schedules;
  valid_from;
  valid_until;
  shared_with;
  constructor(e) {
    this.id = e.id || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.name = e.name || "", this.description = e.description || "", this.authority_id = e.authority_id || "", this.orientation = e.orientation || "", this.play_count = e.play_count || 0, this.play_through_count = e.play_through_count || 0, this.default_animation = e.default_animation || Ns.Cut, this.random = e.random || false, this.enabled = e.enabled ?? true, this.distribution = e.distribution || false, this.default_duration = e.default_duration ?? 15 * 1e3, this.valid_from = e.valid_from, this.valid_until = e.valid_until, this.schedules = e.schedules || [], this.shared_with = e.shared_with || [];
  }
};
var ie = "signage/media";
function hn(t) {
  return new Ds(t);
}
function Hh(t = {}) {
  return $({ query_params: t, fn: hn, path: ie });
}
function Bh(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: hn,
    path: ie
  });
}
function Wh(t, e = {}) {
  return q({
    form_data: t,
    query_params: e,
    fn: hn,
    path: ie
  });
}
function Qh(t, e = {}) {
  return A({ id: t, query_params: e, path: ie });
}
function Kh(t) {
  return `${u()}/${ie}/${t}/thumbnail`;
}
var Z = "signage/playlists";
function ln(t) {
  return new yr(t);
}
function pn(t) {
  return new mr(t);
}
function Jh(t = {}) {
  return $({ query_params: t, fn: ln, path: Z });
}
function Yh(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: ln,
    path: Z
  });
}
function Xh(t, e = {}) {
  return q({
    form_data: t,
    query_params: e,
    fn: ln,
    path: Z
  });
}
function el(t, e = {}) {
  return A({ id: t, query_params: e, path: Z });
}
function tl(t) {
  return a({
    id: t,
    task_name: "media",
    form_data: {},
    method: "get",
    callback: pn,
    path: Z
  });
}
function nl(t, e = {}) {
  return a({
    id: t,
    task_name: "media/revisions",
    form_data: e,
    method: "get",
    callback: (n) => n.map(pn),
    path: Z
  });
}
function sl(t) {
  return a({
    id: t,
    task_name: "media/approve",
    method: "post",
    path: Z
  });
}
function ol(t, e) {
  return a({
    id: t,
    task_name: "media",
    form_data: e,
    method: "post",
    path: Z,
    callback: pn
  });
}
var zs = class {
  id;
  question_id;
  survey_id;
  type;
  answer_json;
  constructor(e) {
    this.id = e.id || 0, this.question_id = e.question_id || 0, this.survey_id = e.survey_id || 0, this.type = e.type || "", this.answer_json = e.answer_json || {};
  }
};
var Fs = "/api/staff/v1/surveys/answers";
function Il(t = {}) {
  const e = g(t);
  return _(`${Fs}${e ? "?" + e : ""}`).then(
    (n) => n.map((s) => new zs(s))
  );
}
function Ul(t) {
  return v(`${Fs}`, t).then(
    (e) => e.map((n) => new zs(n))
  );
}
var mn = class {
  id;
  title;
  description;
  type;
  options;
  required;
  max_rating;
  choices;
  tags;
  deleted;
  constructor(e) {
    this.id = e.id || 0, this.title = e.title || "", this.description = e.description || "", this.type = e.type || "", this.options = e.options || {}, this.required = e.required || false, this.max_rating = e.max_rating || 0, this.choices = e.choices || [], this.tags = e.tags || [], this.deleted = e.deleted || false;
  }
};
var gt = "/api/staff/v1/surveys/questions";
function Dl(t, e = {}) {
  const n = g(e);
  return _(`${gt}/${t}${n ? "?" + n : ""}`).then(
    (s) => new mn(s)
  );
}
function Hl(t) {
  return v(`${gt}`, t).then((e) => new mn(e));
}
function zl(t, e, n = "patch") {
  return (n === "put" ? ce : te)(`${gt}/${t}`, e).then(
    (s) => new mn(s)
  );
}
function Fl(t, e = {}) {
  const n = g(e);
  return V(`${gt}/${t}${n ? "?" + n : ""}`);
}
var gn = class {
  id;
  title;
  description;
  trigger;
  building_id;
  zone_id;
  pages;
  constructor(e) {
    this.id = e.id || 0, this.title = e.title || "", this.description = e.description || "", this.building_id = e.building_id || "", this.zone_id = e.zone_id || "", this.pages = e.pages || [], this.trigger = e.trigger || "NONE";
  }
};
var yt = "/api/staff/v1/surveys";
function Ll(t = {}) {
  const e = g(t);
  return _(`${yt}${e ? "?" + e : ""}`).then(
    (n) => n.map((s) => new gn(s))
  );
}
function jl(t, e = {}) {
  const n = g(e);
  return _(`${yt}/${t}${n ? "?" + n : ""}`).then(
    (s) => new gn(s)
  );
}
function Gl(t, e, n = "patch") {
  return (n === "put" ? ce : te)(`${yt}/${t}`, e).then(
    (s) => new gn(s)
  );
}
function Bl(t) {
  return v(`${yt}`, t).then((e) => new gn(e));
}
function Wl(t, e = {}) {
  const n = g(e);
  return V(`${yt}/${t}${n ? "?" + n : ""}`);
}
var Sr = class {
  id;
  parent_category_id;
  name;
  description;
  hidden;
  created_at;
  updated_at;
  constructor(e) {
    this.id = e.id || "", this.parent_category_id = e.parent_category_id || "", this.name = e.name || "", this.description = e.description || "", this.hidden = e.hidden || false, this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0;
  }
};
var Ar = class {
  id;
  purchase_order_number;
  invoice_number;
  supplier_details;
  purchase_date;
  unit_price;
  expected_service_start_date;
  expected_service_end_date;
  created_at;
  updated_at;
  constructor(e) {
    this.id = e.id || "", this.purchase_order_number = e.purchase_order_number || "", this.invoice_number = e.invoice_number || "", this.supplier_details = e.supplier_details || {}, this.purchase_date = e.purchase_date || 0, this.unit_price = e.unit_price || 0, this.expected_service_start_date = e.expected_service_start_date || 0, this.expected_service_end_date = e.expected_service_end_date || 0, this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0;
  }
};
var xr = class {
  id;
  category_id;
  name;
  brand;
  description;
  model_number;
  images;
  created_at;
  updated_at;
  constructor(e) {
    this.id = e.id || "", this.category_id = e.category_id || "", this.name = e.name || "", this.brand = e.brand || "", this.description = e.description || "", this.model_number = e.model_number || "", this.images = e.images || [], this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0;
  }
};
var qr = class {
  id;
  parent_id;
  asset_type_id;
  purchase_order_id;
  zone_id;
  identifier;
  serial_number;
  other_data;
  barcode;
  name;
  client_ids;
  map_id;
  bookable;
  accessible;
  zones;
  place_groups;
  assigned_to;
  assigned_name;
  features;
  images;
  notes;
  security_system_groups;
  created_at;
  updated_at;
  constructor(e) {
    this.id = e.id || "", this.parent_id = e.parent_id || "", this.asset_type_id = e.asset_type_id || "", this.purchase_order_id = e.purchase_order_id || "", this.zone_id = e.zone_id || "", this.identifier = e.identifier || "", this.serial_number = e.serial_number || "", this.other_data = e.other_data || {}, this.barcode = e.barcode || "", this.name = e.name || "", this.client_ids = e.client_ids || {}, this.map_id = e.map_id || "", this.bookable = e.bookable || false, this.accessible = e.accessible || false, this.zones = e.zones || [], this.place_groups = e.place_groups || [], this.assigned_to = e.assigned_to || "", this.assigned_name = e.assigned_name || "", this.features = e.features || [], this.images = e.images || [], this.notes = e.notes || "", this.security_system_groups = e.security_system_groups || [], this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0;
  }
};
var ke = "assets";
function Ee(t) {
  return new qr(t);
}
function Ql(t = {}) {
  return $({
    query_params: t,
    fn: Ee,
    path: ke
  });
}
function Kl(t, e = {}) {
  return d({
    id: t,
    query_params: e,
    fn: Ee,
    path: ke
  });
}
function Zl(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ee,
    path: ke
  });
}
function Jl(t) {
  return q({
    form_data: t,
    query_params: {},
    fn: Ee,
    path: ke
  });
}
function Vl(t, e = {}) {
  return A({ id: t, query_params: e, path: ke });
}
function Xl(t, e = "patch") {
  return (e === "put" ? ce : te)(
    `${u()}${ke}/bulk`,
    JSON.stringify(t),
    {}
  ).then((s) => s.map((i) => Ee(i)));
}
var $t = "asset_types";
function yn(t) {
  return new xr(t);
}
function tp(t = {}) {
  return $({
    query_params: t,
    fn: yn,
    path: $t
  });
}
function np(t, e = {}) {
  return d({
    id: t,
    query_params: e,
    fn: yn,
    path: $t
  });
}
function sp(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: yn,
    path: $t
  });
}
function ip(t) {
  return q({
    form_data: t,
    query_params: {},
    fn: yn,
    path: $t
  });
}
function rp(t, e = {}) {
  return A({ id: t, query_params: e, path: $t });
}
var bt = "asset_categories";
function $n(t) {
  return new Sr(t);
}
function op(t = {}) {
  return $({
    query_params: t,
    fn: $n,
    path: bt
  });
}
function cp(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: $n,
    path: bt
  });
}
function ap(t) {
  return q({
    form_data: t,
    query_params: {},
    fn: $n,
    path: bt
  });
}
function hp(t, e = {}) {
  return A({ id: t, query_params: e, path: bt });
}
var vt = "asset_purchase_orders";
function bn(t) {
  return new Ar(t);
}
function lp(t = {}) {
  return $({
    query_params: t,
    fn: bn,
    path: vt
  });
}
function pp(t, e = {}) {
  return d({
    id: t,
    query_params: e,
    fn: bn,
    path: vt
  });
}
function dp(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: bn,
    path: vt
  });
}
function fp(t) {
  return q({
    form_data: t,
    query_params: {},
    fn: bn,
    path: vt
  });
}
function _p(t, e = {}) {
  return A({ id: t, query_params: e, path: vt });
}
var Ls = class {
  _listeners = /* @__PURE__ */ new Set();
  _error_listeners = /* @__PURE__ */ new Set();
  _complete_listeners = /* @__PURE__ */ new Set();
  _closed = false;
  next(e) {
    if (!this._closed)
      for (const n of [...this._listeners]) n(e);
  }
  error(e) {
    if (!this._closed) {
      for (const n of [...this._error_listeners]) n(e);
      this._closed = true, this._clear();
    }
  }
  complete() {
    if (!this._closed) {
      for (const e of [...this._complete_listeners]) e();
      this._closed = true, this._clear();
    }
  }
  subscribe(e, n, s) {
    return this._closed ? (s?.(), () => null) : (this._listeners.add(e), n && this._error_listeners.add(n), s && this._complete_listeners.add(s), () => {
      this._listeners.delete(e), n && this._error_listeners.delete(n), s && this._complete_listeners.delete(s);
    });
  }
  _clear() {
    this._listeners.clear(), this._error_listeners.clear(), this._complete_listeners.clear();
  }
};
var Rr = class extends Ls {
  constructor(e) {
    super(), this._config = e, this._socket = new WebSocket(e.url), this._socket.onopen = () => {
      const n = [...this._queue];
      this._queue = [];
      for (const s of n) this.next(s);
    }, this._socket.onmessage = (n) => {
      super.next(this._deserialize(n));
    }, this._socket.onerror = (n) => this.error(n), this._socket.onclose = () => super.complete();
  }
  _socket;
  _queue = [];
  next(e) {
    this._socket.readyState === WebSocket.OPEN ? this._socket.send(this._serialize(e)) : this._queue.push(e);
  }
  complete() {
    this._socket.close(), super.complete();
  }
  _serialize(e) {
    return this._config.serializer ? this._config.serializer(e) : `${e}`;
  }
  _deserialize(e) {
    return this._config.deserializer ? this._config.deserializer(e) : e.data;
  }
};
function Ir(t) {
  return new Rr(
    typeof t == "string" ? { url: t } : t
  );
}
var ne = /* @__PURE__ */ ((t) => (t[t.PARSE_ERROR = 0] = "PARSE_ERROR", t[t.BAD_REQUEST = 1] = "BAD_REQUEST", t[t.ACCESS_DENIED = 2] = "ACCESS_DENIED", t[t.REQUEST_FAILED = 3] = "REQUEST_FAILED", t[t.UNKNOWN_CMD = 4] = "UNKNOWN_CMD", t[t.SYS_NOT_FOUND = 5] = "SYS_NOT_FOUND", t[t.MOD_NOT_FOUND = 6] = "MOD_NOT_FOUND", t[t.UNEXPECTED_FAILURE = 7] = "UNEXPECTED_FAILURE", t))(ne || {});
var js = /* @__PURE__ */ ((t) => (t.Info = "info", t.Debug = "debug", t.Warning = "warn", t.Error = "error", t.Fatal = "fatal", t.Trace = "trace", t))(js || {});
var Ur = class {
  constructor(e, n) {
    this._system = e;
    const s = Object.getOwnPropertyNames(
      Object.getPrototypeOf(n)
    ).filter((i) => i.startsWith("$"));
    for (const i in n)
      n.hasOwnProperty(i) && n[i] !== void 0 && (n[i] instanceof Function ? this.addMethod(i, n[i]) : this.addProperty(i, n[i]));
    for (const i of s)
      n[i] instanceof Function && this.addMethod(i, n[i]);
  }
  /**
   * Call method on the module
   * @param command Name of the method to call on the module
   * @param args Array of arguments to pass to the method being called
   */
  call(e, n = []) {
    return this[`$${e}`] instanceof Function ? this[`$${e}`](...n) : null;
  }
  /**
   * Subscribe to value changes on the given property
   * @param prop_name Name of the property
   * @param next Callback for changes to the property
   */
  listen(e) {
    return !this[`_${e}`] && !this[e] && this.addProperty(e, null), this[`_${e}`].asReadonly();
  }
  /**
   * Add method to module
   * @param prop_name Name of the method
   * @param fn Method logic
   */
  addMethod(e, n) {
    e[0] !== "$" && (e = `$${e}`), this[e] = n;
  }
  /**
   * Add signal property to module
   * @param prop_name Name of the property
   * @param value Initial value of the property
   */
  addProperty(e, n) {
    e[0] === "$" && (e = e.replace("$", "")), this[`_${e}`] = se(n), Object.defineProperty(this, e, {
      get: () => this[`_${e}`].value,
      set: (s) => this[`_${e}`].set(s)
    });
  }
};
var Er = class {
  constructor(e) {
    for (const n in e)
      e.hasOwnProperty(n) && e[n] && e[n] instanceof Array && e[n].forEach((s) => {
        this.addModule(n, s);
      });
  }
  /**
   * Add new module to the system
   * @param mod_name Module class
   * @param properties Properties of the new module
   */
  addModule(e, n) {
    this[e] || (this[e] = []), this[e].push(new Ur(this, n));
  }
};
var Dt = {};
function Hp(t, e) {
  return Dt[t] = new Er(e), Dt[t];
}
function Mr(t) {
  return Dt[t];
}
var C = Ft("WS");
var Gs = 15;
var St = 0;
var ee;
var Bs = 0;
var B = {};
var Qn = {};
var Cr = {};
var Ae = se(false);
var Ws = se([0, 0]);
var Qs = Date.now();
var Oe;
var Ht = 0;
var me = null;
var Tt;
var Kn = 0;
var At = 10 * 1e3;
var Or = se(null);
function Sn() {
  return u().indexOf("/control/") >= 0 ? "/control/websocket" : `${fs()}/systems/control`;
}
function Ks() {
  return Ae.value;
}
function wr() {
  return Ae.asReadonly();
}
function Nr(t, e = Qn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  return e[n] || (e[n] = se(void 0)), e[n].asReadonly();
}
function Dr(t, e = Qn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  if (e[n])
    return e[n].value;
}
function ns(t, e = 0, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "bind"
  }, t);
  return n(s, e);
}
function Hr(t, e = 0, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "unbind"
  }, t);
  return n(s, e);
}
function zr(t, e = At, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "exec"
  }, t);
  return n(s, e);
}
function We(t, e = At, n = 0) {
  const s = `${t.cmd}|${t.sys}|${t.mod}${t.index}|${t.name}|${t.args}|${li()}`;
  if (B[s])
    C("Request already in progress. Waiting...", t);
  else {
    const i = __spreadProps(__spreadValues({}, t), { key: s });
    i.promise = new Promise((r, o) => {
      const h = () => {
        delete B[s], B[s] = null, We(t, e, n).then(
          (b) => r(b),
          (b) => o(b)
        );
      };
      if (ee && Ks()) {
        Un() && Qr(t, ee, Cr), i.resolve = r, i.reject = o;
        const b = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
        C(
          `[${t.cmd.toUpperCase()}](${t.id}) ${b}`,
          t.args
        ), ee.next(t), e > 0 && ue(
          `${s}`,
          () => {
            o("Request timed out."), delete B[s], B[s] = null;
          },
          e
        );
      } else me ? setTimeout(() => h(), 1e3) : Zn().then(() => h());
    }), B[s] = i;
  }
  return B[s].promise;
}
function Zs(t) {
  if (t !== "pong" && t instanceof Object) {
    if (t.type === "notify" && t.meta)
      jr(t.meta, t.value);
    else if (t.type === "success")
      Fr(t);
    else if (t.type === "debug") {
      C(`[DEBUG] ${t.mod}${t.klass || ""} \u2192`, t.msg);
      const e = t.meta || { mod: "", index: "" };
      Or.set({
        mod_id: t.mod || "<empty>",
        module: `${e.mod}_${e.index}`,
        class_name: t.klass || "<empty>",
        message: t.msg || "<empty>",
        level: t.level || js.Debug,
        time: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)
      });
    } else t.type === "error" ? Lr(t) : t.cmd || C.error("Invalid websocket message", t);
    $e(`${t.id}`);
  } else t === "pong" && (Kn = Date.now(), C("Pong!"));
}
function Fr(t) {
  const e = Object.keys(B).map((n) => B[n]).find((n) => n?.id === t.id);
  C(`[SUCCESS](${t.id})`), e && e.resolve && (e.resolve(t.value), delete B[e.key]);
}
function Lr(t) {
  let e = "UNEXPECTED FAILURE";
  switch (t.code) {
    case ne.ACCESS_DENIED:
      e = "ACCESS DENIED";
      break;
    case ne.BAD_REQUEST:
      e = "BAD REQUEST";
      break;
    case ne.MOD_NOT_FOUND:
      e = "MODULE NOT FOUND";
      break;
    case ne.SYS_NOT_FOUND:
      e = "SYSTEM NOT FOUND";
      break;
    case ne.PARSE_ERROR:
      e = "PARSE ERROR";
      break;
    case ne.REQUEST_FAILED:
      e = "REQUEST FAILED";
      break;
    case ne.UNKNOWN_CMD:
      e = "UNKNOWN COMMAND";
      break;
  }
  C.error(`[ERROR] ${e}(${t.id}): ${t.msg}`);
  const n = Object.keys(B).map((s) => B[s]).filter((s) => s).find((s) => s.id === t.id);
  n && n.reject && (n.reject(t), $e(`${n.key}`), delete B[n.key]);
}
function jr(t, e, n = Qn) {
  const s = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  n[s] || (n[s] = se(null));
  const i = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
  C(`[NOTIFY] ${i} changed`, [
    n[s].value,
    "\u2192",
    e
  ]), n[s].set(e);
}
function Zn(t = 0) {
  return me == null && (me = new Promise((e) => {
    if (t > 40)
      return location.reload();
    Ht++, Qs = Date.now(), ee = Un() ? Wr() : Gr(), ee ? (C.debug("Authority:", Mt()), C("Connecting to websocket..."), ee.subscribe(
      (n) => {
        Ae.value || (C("Connection established."), e()), Ae.set(true), Ht = 0, An(), Zs(n);
      },
      (n) => {
        ee = void 0, me = null, rs(), An(), Br(n);
      },
      () => {
        ee = void 0, me = null, rs(), C("Connection closed by browser."), Ae.set(false), zt();
      }
    ), Oe && clearInterval(Oe), Kn = Date.now(), ss(), Oe = setInterval(
      () => ss(),
      Gs * 1e3
    ), An(), Bs += 1, Tt = setTimeout(() => {
      C("Unhealthy connection. Reconnecting..."), Ae.set(false), me = null, zt();
    }, 30 * 1e3)) : (ee ? C(
      `Waiting on auth(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      [!!J(), !!Mt()],
      "info"
    ) : C.error(
      `Failed to create websocket(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`
    ), setTimeout(
      () => {
        me = null, Zn(t).then((n) => e(n));
      },
      1e3 * Math.min(10, ++t)
    ));
  })), me;
}
function Gr() {
  if (!Mt() || !J()) return null;
  const t = ki() || location.protocol.indexOf("https") >= 0;
  let e = `ws${t ? "s" : ""}://${Pn()}${Sn()}${_s() ? "?fixed_device=true" : ""}`;
  const n = J();
  let s = n === "x-api-key" ? `api-key=${et()}` : `bearer_token=${n}`;
  return !yi() && !ai() ? (C("Authenticating through cookie..."), s += `;max-age=120;path=${Sn()};`, s += `${t ? "secure;" : ""}samesite=strict`, document.cookie = s, C("Cookies:", [document.cookie, s])) : (C("Authenticating through URL query parameter..."), e += `${e.indexOf("?") >= 0 ? "&" : "?"}${s}`), C(
    `Creating websocket connection to ws${t ? "s" : ""}://${Pn()}${Sn()}`
  ), Ir({
    url: e,
    serializer: (i) => typeof i == "object" ? JSON.stringify(i) : i,
    deserializer: (i) => {
      let r = i.data;
      if (r === "pong") return r;
      try {
        return JSON.parse(i.data);
      } catch {
        return r;
      }
    }
  });
}
function zt() {
  Ws.set([Bs, Date.now() - Qs]), ee && Ks() && (ee.complete(), Oe && (clearInterval(Oe), Oe = void 0)), C(
    `Reconnecting in ${Math.min(
      5e3,
      Ht * 300 || 1e3
    )}ms...`
  ), ue(
    "reconnect",
    () => Zn(),
    Math.min(5e3, (Ht + 1) * 300 || 1e3)
  );
}
function ss() {
  if (Date.now() - Kn > 4 * Gs * 1e3)
    return zt();
  ee?.next("ping");
}
function Br(t) {
  Ae.set(false), C.error("Websocket error:", t), t.status === 401 && Cn(), Mn(), zt();
}
function An() {
  Tt && (clearTimeout(Tt), Tt = void 0);
}
function Wr() {
  const t = new Ls();
  return t.subscribe(
    (e) => Zs(e)
  ), t;
}
function is(t, e) {
  const n = typeof e == "string" ? e : e?.message || e?.msg || "Mock realtime callback failed";
  return {
    id: t.id,
    type: "error",
    code: e?.code || ne.UNEXPECTED_FAILURE,
    msg: n
  };
}
function Qr(t, e, n) {
  const s = `${t.sys}|${t.mod}_${t.index}|${t.name}`, i = Mr(t.sys), r = i && i[t.mod] ? i[t.mod][t.index - 1 || 0] : null;
  if (r) {
    try {
      switch (t.cmd) {
        case "bind":
          n[s] = r.listen(t.name).subscribe((o) => {
            setTimeout(
              () => {
                e.next({
                  type: "notify",
                  value: o,
                  meta: t
                });
              },
              Math.floor(Math.random() * 100 + 50)
              // Add natural delay before response
            );
          });
          break;
        case "unbind":
          n[s] && (n[s](), delete n[s], $e(`${s}`));
          break;
      }
    } catch (o) {
      C.error(`[MOCK ERROR](${t.id}) request failed`, o), ue(
        `${t.id}-error`,
        () => e.next(is(t, o)),
        10
      );
      return;
    }
    ue(
      `${t.id}-response`,
      () => {
        try {
          const o = {
            id: t.id,
            type: "success",
            value: t.cmd === "exec" ? r.call(t.name, t.args) : null
          };
          e.next(o);
        } catch (o) {
          C.error(
            `[MOCK ERROR](${t.id}) execute failed`,
            o
          ), e.next(is(t, o));
        }
      },
      10
    );
  } else
    ue(
      `${t.id}-error`,
      () => e.next({
        id: t.id,
        type: "error",
        code: i ? ne.SYS_NOT_FOUND : ne.MOD_NOT_FOUND
      }),
      10
    );
}
function rs() {
  for (const t in B)
    B[t] && delete B[t];
}
var os = class {
  constructor(e, n) {
    this._module = e, this.name = n, wr().subscribe((s, i) => {
      s !== i && (s && (this._stale_bindings || this._pending === 1) ? (It("VAR", "Re-binding to status variable", this.binding()), this.rebind()) : s || ($e(`rebind:${JSON.stringify(this.binding())}`), It(
        "VAR",
        "Binding dropped due to disconnection, re-binding when possible.",
        this.binding()
      ), this._stale_bindings = this._binding_count || this._stale_bindings, this._binding_count = 0));
    });
  }
  /** Status variable name */
  name;
  /** Active pending state of the variable binding */
  _pending = 0;
  /** Number of active bindings to this variable */
  _binding_count = 0;
  /** Number of bindings to restore on reconnection */
  _stale_bindings = 0;
  /** Number of bindings to this status variable */
  get count() {
    return this._binding_count;
  }
  /** Current value of the binding */
  get value() {
    return Dr(this.binding());
  }
  /**
   * Get a signal that emits the current value of the binding
   */
  listen() {
    return Nr(this.binding());
  }
  /**
   * Subscribe to changes of the variable's binding value.
   * Note: Initial value emitted may be `undefined`
   * @param next Callback for changes to the bindings value
   */
  subscribe(e) {
    return this.listen().subscribe(e);
  }
  bindThenSubscribe(e) {
    const n = this.bind(), s = this.listen().subscribe((i) => {
      try {
        e(i);
      } catch (r) {
        console.error(r);
      }
    });
    return () => {
      try {
        s();
      } finally {
        try {
          n();
        } catch {
        }
      }
    };
  }
  /**
   * Bind to the status variable's value
   */
  bind() {
    return (this._binding_count <= 0 && this._stale_bindings <= 0 || this._pending === 2) && (this._pending = 1, ns(this.binding()).then(() => {
      this._binding_count++, this._pending = 0;
    }).catch(() => null)), () => this.unbind();
  }
  /**
   * Unbind from status variable
   */
  unbind() {
    this._binding_count === 1 && this._pending === 0 ? (this._pending = 2, Hr(this.binding()).then(() => {
      this._pending === 2 && (this._pending = 0), this._binding_count--;
    })) : this._binding_count = Math.max(this._binding_count - 1, 0);
  }
  /**
   * Rebind to the status variable
   */
  async rebind() {
    !this._stale_bindings && this._pending !== 1 || ue(
      `rebind:${JSON.stringify(this.binding())}`,
      async () => {
        await ns(this.binding()), this._binding_count = this._stale_bindings || 1, this._stale_bindings = 0;
      },
      100
    );
  }
  /**
   * Generate binding details for the status variable
   */
  binding() {
    return {
      sys: this._module.system.id,
      mod: this._module.name,
      index: this._module.index,
      name: this.name
    };
  }
};
var Kr = class {
  constructor(e, n) {
    this._system = e, this._id = n;
  }
  /** Mapping of module bindings */
  _bindings = {};
  get id() {
    return `${this.name}_${this.index}`;
  }
  /** Parent system of the module */
  get system() {
    return this._system;
  }
  /** Module index */
  get index() {
    const n = this._id.split("_").pop();
    return parseInt(n || "", 10) || 1;
  }
  /** Module name */
  get name() {
    const e = this._id.split("_");
    return e.pop(), e.join("_");
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   * @deprecated Use `variable` instead
   */
  binding(e) {
    return this._bindings[e] || (this._bindings[e] = new os(this, e)), this._bindings[e];
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   */
  variable(e) {
    return this._bindings[e] || (this._bindings[e] = new os(this, e)), this._bindings[e];
  }
  /**
   * Execute method on the engine module
   * @param method Name of the method
   * @param args Array of arguments to pass to the method
   */
  execute(e, n, s = At) {
    return zr(
      {
        sys: this._system.id,
        mod: this.name,
        index: this.index,
        name: e,
        args: n
      },
      s
    );
  }
};
var Zr = class {
  /** Unique idetifier of the system */
  id;
  /** Mapping of engine modules within the system */
  _module_list = {};
  constructor(e) {
    this.id = e;
  }
  /**
   * Get binding interface for the given module
   * @param module_id ID of the module
   * @param index Index of the module within the system
   */
  module(e, n = 1) {
    if (!e)
      throw new Error("Invalid module ID");
    const s = e.split("_");
    s.length > 1 && Number.isInteger(+s[s.length - 1]) && (n = +s[s.length - 1], s.pop()), n < 1 && (n = 1);
    const i = s.join("_");
    for (this._module_list[i] || (this._module_list[i] = []); this._module_list[i].length < n; )
      this._module_list[i].push(
        new Kr(
          this,
          `${i}_${this._module_list[i].length + 1}`
        )
      );
    return this._module_list[i][n - 1];
  }
};
var xn = {};
function Jr(t) {
  return xn[t] || (xn[t] = new Zr(t)), xn[t];
}
function Gp(t, e, n = 1) {
  return Jr(t).module(e, n);
}

// libs/components/src/lib/safe.pipe.ts
var SafePipe = class _SafePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  /**
   * Sanitizes the string allowing it to be injected into a template
   * @param value String to sanitize
   * @param type Type of value to sanitise. `resource`, `url`, `script`, `style` or `html`
   */
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "script":
        return this.sanitizer.bypassSecurityTrustScript(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
  static {
    this.\u0275fac = function SafePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{
      name: "safe"
    }]
  }], null, null);
})();

// libs/components/src/lib/icon.component.ts
var _c0 = ["*"];
function IconComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class_ref());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.icon()?.content, " ");
  }
}
function IconComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 2);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.icon().src, "resource"), \u0275\u0275sanitizeUrl);
  }
}
var CLASS_MAP = {
  rounded: "material-symbols-rounded",
  outlined: "material-symbols-outlined",
  sharp: "material-symbols-sharp"
};
var IconComponent = class _IconComponent {
  constructor() {
    this.className = input(
      "material-symbols-rounded",
      ...ngDevMode ? [{ debugName: "className" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = input(
      void 0,
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.class_ref = computed(
      () => CLASS_MAP[this.icon()?.class] || CLASS_MAP[this.className()] || this.className(),
      ...ngDevMode ? [{ debugName: "class_ref" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function IconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["icon"], ["i", "icon", ""]], inputs: { className: [1, "className"], icon: [1, "icon"] }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "flex", "h-[1.25em]", "max-h-[1.25em]", "w-[1.25em]", "max-w-[1.25em]", "items-center", "justify-center", "overflow-hidden"], [3, "class"], [1, "h-[1em]", "w-[1em]", 3, "src"]], template: function IconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, IconComponent_Conditional_1_Template, 3, 3, "i", 1);
        \u0275\u0275conditionalCreate(2, IconComponent_Conditional_2_Template, 2, 4, "img", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.icon() || ctx.icon().type !== "img" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.icon() && ctx.icon().type === "img" ? 2 : -1);
      }
    }, dependencies: [SafePipe], styles: ["\ni[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{ selector: "icon,i[icon]", template: `
        <div
            class="flex h-[1.25em] max-h-[1.25em] w-[1.25em] max-w-[1.25em] items-center justify-center overflow-hidden"
        >
            @if (!icon() || icon().type !== 'img') {
                <i [class]="class_ref()">
                    {{ icon()?.content }}
                    <ng-content></ng-content>
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    [src]="icon().src | safe: 'resource'"
                />
            }
        </div>
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;9dcb326dcc2b3d8b68e7d89ef488eb28abc701fb0e2ab3f372b27f7bf732088c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/icon.component.ts */\ni {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */\n"] }]
  }], null, { className: [{ type: Input, args: [{ isSignal: true, alias: "className", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "libs/components/src/lib/icon.component.ts", lineNumber: 40 });
})();

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var minutesInMonth = 43200;
var minutesInDay = 1440;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/date-fns/isSameDay.js
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/differenceInMinutes.js
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format3 = args.formats[width] || args.formats[args.defaultWidth];
    return format3;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, __spreadProps(__spreadValues({}, options), { weekStartsOn: 1 }));
}

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format3, input2) {
  const _message = message(token, format3, input2);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format3, input2) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format3}\`) for formatting ${subject} to the input \`${input2}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input2) {
  const matched = input2.match(escapedStringRegExp);
  if (!matched) {
    return input2;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns-tz/dist/esm/_lib/tzTokenizeDate/index.js
function tzTokenizeDate(date, timeZone) {
  const dtf = getDateTimeFormat(timeZone);
  return "formatToParts" in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    const formatted = dtf.formatToParts(date);
    const filled = [];
    for (let i = 0; i < formatted.length; i++) {
      const pos = typeToPos[formatted[i].type];
      if (pos !== void 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date);
  const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [
    parseInt(parsed[3], 10),
    parseInt(parsed[1], 10),
    parseInt(parsed[2], 10),
    parseInt(parsed[4], 10),
    parseInt(parsed[5], 10),
    parseInt(parsed[6], 10)
  ];
}
var dtfCache = {};
var testDateFormatted = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}

// node_modules/date-fns-tz/dist/esm/_lib/newDateUTC/index.js
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  const utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}

// node_modules/date-fns-tz/dist/esm/_lib/tzParseTimezone/index.js
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  if (!timezoneString) {
    return 0;
  }
  let token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  let hours;
  let absoluteOffset;
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR);
  }
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    const minutes = parseInt(token[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return token[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    const utcDate = isUtcDate ? date : toUtcDate(date);
    const offset = calcOffset(utcDate, timezoneString);
    const fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function calcOffset(date, timezoneString) {
  const tokens = tzTokenizeDate(date, timezoneString);
  const asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
  let asTS = date.getTime();
  const over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  const localTS = date.getTime();
  let utcGuess = localTS - offset;
  const o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  const o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}

// node_modules/date-fns-tz/dist/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds2(date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns-tz/dist/esm/_lib/tzPattern/index.js
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;

// node_modules/date-fns-tz/dist/esm/toDate/index.js
var MILLISECONDS_IN_HOUR2 = 36e5;
var MILLISECONDS_IN_MINUTE2 = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns2 = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern
};
function toDate2(argument, options = {}) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const dateStrings = splitDateString(argument);
  const { year, restDateString } = parseYear(dateStrings.date, additionalDigits);
  const date = parseDate(restDateString, year);
  if (date === null || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    const timestamp = date.getTime();
    let time = 0;
    let offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (time === null || isNaN(time)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds2(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds2(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  const dateStrings = {};
  let parts = patterns2.dateTimePattern.exec(dateString);
  let timeString;
  if (!parts) {
    parts = patterns2.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    const token = patterns2.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  if (dateString) {
    const patternYYY = patterns2.YYY[additionalDigits];
    const patternYYYYY = patterns2.YYYYY[additionalDigits];
    let token = patterns2.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
      const yearString = token[1];
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length)
      };
    }
    token = patterns2.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
      const centuryString = token[1];
      return {
        year: parseInt(centuryString, 10) * 100,
        restDateString: dateString.slice(centuryString.length)
      };
    }
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  let date;
  let month;
  let week;
  if (!dateString || !dateString.length) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  let token = patterns2.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns2.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    const dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns2.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    const day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns2.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = patterns2.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    const dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  let hours;
  let minutes;
  let token = patterns2.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2;
  }
  token = patterns2.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE2;
  }
  token = patterns2.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    const seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE2 + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  const isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours < 0 || hours >= 25) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}

// node_modules/date-fns-tz/dist/esm/toZonedTime/index.js
function toZonedTime(date, timeZone, options) {
  date = toDate2(date, options);
  const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  const d2 = new Date(date.getTime() - offsetMilliseconds);
  const resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate());
  resultDate.setHours(d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds(), d2.getUTCMilliseconds());
  return resultDate;
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}

// node_modules/date-fns/formatDuration.js
var defaultFormat = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds"
];
function formatDuration(duration, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const format3 = options?.format ?? defaultFormat;
  const zero = options?.zero ?? false;
  const delimiter = options?.delimiter ?? " ";
  if (!locale.formatDistance) {
    return "";
  }
  const result = format3.reduce((acc, unit) => {
    const token = `x${unit.replace(/(^.)/, (m2) => m2.toUpperCase())}`;
    const value = duration[unit];
    if (value !== void 0 && (zero || duration[unit])) {
      return acc.concat(locale.formatDistance(token, value));
    }
    return acc;
  }, []).join(delimiter);
  return result;
}

// node_modules/date-fns/getDaysInMonth.js
function getDaysInMonth(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

// node_modules/date-fns/getDefaultOptions.js
function getDefaultOptions2() {
  return Object.assign({}, getDefaultOptions());
}

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

// node_modules/date-fns/roundToNearestMinutes.js
function roundToNearestMinutes(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);
  const date_ = toDate(date, options?.in);
  const fractionalSeconds = date_.getSeconds() / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1e3 / 60;
  const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  date_.setMinutes(roundedMinutes, 0, 0);
  return date_;
}

// node_modules/date-fns/setMonth.js
function setMonth(date, month, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom(options?.in || date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// node_modules/date-fns/set.js
function set(date, values, options) {
  let _date = toDate(date, options?.in);
  if (isNaN(+_date)) return constructFrom(options?.in || date, NaN);
  if (values.year != null) _date.setFullYear(values.year);
  if (values.month != null) _date = setMonth(_date, values.month);
  if (values.date != null) _date.setDate(values.date);
  if (values.hours != null) _date.setHours(values.hours);
  if (values.minutes != null) _date.setMinutes(values.minutes);
  if (values.seconds != null) _date.setSeconds(values.seconds);
  if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
  return _date;
}

// node_modules/date-fns-tz/dist/esm/format/formatters/index.js
var MILLISECONDS_IN_MINUTE3 = 60 * 1e3;

// node_modules/date-fns-tz/dist/esm/fromZonedTime/index.js
function fromZonedTime(date, timeZone, options) {
  if (typeof date === "string" && !date.match(tzPattern)) {
    return toDate2(date, __spreadProps(__spreadValues({}, options), { timeZone }));
  }
  date = toDate2(date, options);
  const utc = newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).getTime();
  const offsetMilliseconds = tzParseTimezone(timeZone, new Date(utc));
  return new Date(utc + offsetMilliseconds);
}

// node_modules/date-fns-tz/dist/esm/getTimezoneOffset/index.js
function getTimezoneOffset(timeZone, date) {
  return -tzParseTimezone(timeZone, date);
}

// libs/common/src/lib/notifications.ts
var _service = null;
var _loader = null;
var _loading = null;
var _disable_logging = false;
var _filter = null;
function setNotifyOutlet(outlet, disable_logging = false) {
  _service = typeof outlet === "function" ? null : outlet;
  _loader = typeof outlet === "function" ? outlet : null;
  _loading = null;
  _disable_logging = disable_logging;
}
function lazySnackbar() {
  const injector = inject(EnvironmentInjector);
  return () => import("./snack-bar-EOCYYHNT.js").then(({ MatSnackBar }) => injector.get(MatSnackBar));
}
function notify(type, message2, action = "OK", on_action, config = {}) {
  if (!_service && !_loader) {
    return !_disable_logging && console.warn("Snackbar service hasn't been initialised");
  }
  if (_filter && !_filter(type, message2)) {
    !_disable_logging && console.debug(`Suppressed ${type}: ${message2}`);
    return;
  }
  const open = (snackbar) => {
    const snackbar_ref = snackbar.open(message2, action, __spreadValues({
      panelClass: [type],
      duration: 5e3
    }, config));
    if (action) {
      on_action = on_action || (() => snackbar_ref.dismiss());
      snackbar_ref.onAction().subscribe(() => on_action());
    }
  };
  if (_service)
    return open(_service);
  const loading = _loading ??= _loader();
  loading.then((snackbar) => {
    if (_loading !== loading)
      return;
    _service = snackbar;
    open(snackbar);
  }, (error) => {
    if (_loading === loading)
      _loading = null;
    console.error("Failed to load the snackbar", error);
  });
}
function notifySuccess(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  if (typeof msg !== "string")
    msg = "Success";
  notify("success", msg, action, on_action, config);
}
function notifyError(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  if (typeof msg !== "string")
    msg = msg?.error || msg?.message || "An error occurred";
  notify("error", msg, action, on_action, config);
}
function notifyWarn(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  notify("warn", msg, action, on_action, config);
}
function notifyInfo(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  notify("info", msg, action, on_action, config);
}

// libs/common/src/lib/timezone-helpers.ts
var LOCAL_TIMEZONE = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "Australia/Sydney";
function localToTimezone(date, tz = LOCAL_TIMEZONE) {
  const offset_diff = getTimezoneOffset(tz) - getTimezoneOffset(LOCAL_TIMEZONE);
  return addMilliseconds(date, offset_diff).valueOf();
}
function startOfDayInTimezone(date, tz = LOCAL_TIMEZONE) {
  if (!tz)
    return startOfDay(date).valueOf();
  return fromZonedTime(startOfDay(toZonedTime(date, tz)), tz).valueOf();
}
function endOfDayInTimezone(date, tz = LOCAL_TIMEZONE) {
  if (!tz)
    return endOfDay(date).valueOf();
  return fromZonedTime(endOfDay(toZonedTime(date, tz)), tz).valueOf();
}
var TIMEZONE_OFFSET_STRINGS = {};
function getTimezoneOffsetString(tz, date = /* @__PURE__ */ new Date()) {
  const offset = getTimezoneOffsetInMinutes(tz, date);
  const cache_key = `${tz}:${offset}`;
  if (TIMEZONE_OFFSET_STRINGS[cache_key]) {
    return TIMEZONE_OFFSET_STRINGS[cache_key];
  }
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const output = `${offset >= 0 ? "+" : "-"}${padLength(hours, 2)}${padLength(minutes, 2)}`;
  TIMEZONE_OFFSET_STRINGS[cache_key] = output;
  return output;
}
function getTimezoneOffsetInMinutes(timeZone, date = /* @__PURE__ */ new Date()) {
  const options = {
    timeZone,
    hour12: false,
    timeZoneName: "shortOffset"
  };
  let formatter;
  try {
    formatter = new Intl.DateTimeFormat([], options);
  } catch (e) {
    if (e instanceof RangeError) {
      return getTimezoneOffset(timeZone, date) / 60 / 1e3;
    }
    throw e;
  }
  const parts = formatter.formatToParts(date);
  const tzOffsetPart = parts.find((part) => part.type === "timeZoneName");
  const tzOffsetString = tzOffsetPart ? tzOffsetPart.value : "GMT";
  const offsetMatch = tzOffsetString.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
  if (!offsetMatch) {
    return 0;
  }
  const sign = offsetMatch[1] === "+" ? 1 : -1;
  const hours = parseInt(offsetMatch[2], 10);
  const minutes = offsetMatch[3] ? parseInt(offsetMatch[3], 10) : 0;
  return sign * (hours * 60 + minutes);
}
function getTimezoneDifferenceInHours(src_tz, dest_tz = LOCAL_TIMEZONE, date = /* @__PURE__ */ new Date()) {
  const offset1 = getTimezoneOffsetInMinutes(src_tz, date);
  const offset2 = getTimezoneOffsetInMinutes(dest_tz, date);
  return (offset1 - offset2) / 60;
}
function getTimeInTimezone(date, tz) {
  if (!tz) {
    const d2 = new Date(date);
    return { hours: d2.getHours(), minutes: d2.getMinutes() };
  }
  const zoned = toZonedTime(date, tz);
  return { hours: zoned.getHours(), minutes: zoned.getMinutes() };
}
function sameDayInTimezone(date, from_tz, to_tz) {
  const day = toZonedTime(date, from_tz || LOCAL_TIMEZONE);
  const noon = set(day, {
    hours: 12,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });
  return fromZonedTime(noon, to_tz || LOCAL_TIMEZONE).valueOf();
}
function formatTimeInTimezone(date, tz) {
  const { hours, minutes } = getTimeInTimezone(date, tz);
  return `${padLength(hours, 2)}:${padLength(minutes, 2)}`;
}
function setTimeInTimezone(date, hours, minutes, tz) {
  if (!tz) {
    const d2 = set(new Date(date), { hours, minutes });
    return startOfMinute(d2).valueOf();
  }
  const zoned = toZonedTime(date, tz);
  const adjusted = set(zoned, { hours, minutes });
  return startOfMinute(fromZonedTime(adjusted, tz)).valueOf();
}

// libs/common/src/lib/general.ts
var _user_date_change = false;
var _user_date_change_timeout;
function markUserDateChange() {
  _user_date_change = true;
  if (_user_date_change_timeout)
    clearTimeout(_user_date_change_timeout);
  _user_date_change_timeout = setTimeout(() => _user_date_change = false, 300);
}
var _app_name = "APP";
function setAppName(name) {
  _app_name = name;
}
function log(type, msg, args, stream = "debug", force = false, app_name = _app_name) {
  if (window.jest)
    return;
  if (window.debug || force) {
    const colors = [
      "color: #E91E63",
      "color: #3F51B5",
      "color: default"
    ];
    if (args) {
      console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors, args);
    } else {
      console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
    }
  }
}
function scoped_log(scope) {
  const logger = (msg, ...args) => log(scope, msg, args, "debug");
  logger.debug = (msg, ...args) => log(scope, msg, args, "debug"), logger.info = (msg, ...args) => log(scope, msg, args, "info");
  logger.error = (msg, ...args) => log(scope, msg, args, "error");
  logger.warn = (msg, ...args) => log(scope, msg, args, "warn");
  logger.log = (msg, ...args) => log(scope, msg, args, "log");
  return logger;
}
function padLength(value, length = 2, character = "0") {
  let str = `${value}`;
  while (str.length < length)
    str = `${character}${str}`;
  return str;
}
function getItemWithKeys(keys, map2) {
  const key = keys[0];
  if (map2 && typeof map2 === "object" && key in map2) {
    return keys.length > 1 ? getItemWithKeys(keys.slice(1), map2[key] || {}) : map2[key];
  }
  return null;
}
function unique(array = [], key = "") {
  const keys = [];
  return array.filter((el2) => {
    const id = key ? el2[key] : el2;
    const exists = keys.includes(id);
    if (!exists)
      keys.push(id);
    return !exists;
  });
}
function randomInt(ceil, floor = 0) {
  return Math.floor(Math.random() * (ceil - floor)) + floor;
}
function padString(str, length = 5) {
  str = `${str}`;
  while (str.length < length)
    str = `0${str}`;
  return str;
}
function randomString(length, chars = "abcdefghijklmnopqrstwvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[randomInt(chars.length)];
  }
  return str;
}
function csvToJson(csv, delimiter = ",") {
  const escaped_delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const objPattern = new RegExp(`(${escaped_delimiter}|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^${escaped_delimiter}\\r\\n]*))`, "gi");
  let arrMatches = null;
  const arrData = [[]];
  while (arrMatches = objPattern.exec(csv)) {
    if (arrMatches[1].length && arrMatches[1] !== delimiter)
      arrData.push([]);
    arrData[arrData.length - 1].push(arrMatches[2] ? arrMatches[2]?.replace(new RegExp('""', "g"), '"') : arrMatches[3]);
  }
  const headers = (arrData.splice(0, 1)[0] || []).map((header, index) => {
    const value = header || "";
    return index === 0 ? value.replace(/^\uFEFF/, "") : value;
  });
  const elements = arrData.map((row) => {
    const element = {};
    for (let i = 0; i < row.length; i++) {
      const key = (headers[i] || "").split(" ").join("_").toLowerCase();
      try {
        element[key] = JSON.parse(row[i]?.replace("|", ","));
      } catch (e) {
        element[key] = row[i] || "";
      }
      if (element[key] === "TRUE" || element[key] === "FALSE")
        element[key] = element[key] === "TRUE";
    }
    return element;
  });
  return elements;
}
function loadTextFileFromInputEvent(event) {
  return new Promise((resolve, reject) => {
    if (event.target) {
      const element = event.target;
      const file = element.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          resolve(evt.srcElement.result);
          element.value = "";
        });
        reader.addEventListener("error", (_2) => {
          this.loading = "";
          reject(["Error loading file", _2]);
        });
      }
    }
  });
}
function jsonToCsv(json, seperator = ",") {
  if (json instanceof Array && json.length > 0) {
    const keys = Object.keys(json[0]);
    const valid_keys = keys.filter((key) => key in json[0]);
    const map_cell = (value) => {
      if (value === null || value === void 0)
        return "";
      if (typeof value === "object")
        return JSON.stringify(value);
      return `${value}`;
    };
    const escape_cell = (value) => {
      const escaped_value = value.replace(/"/g, '""');
      const should_wrap = escaped_value.includes(seperator) || escaped_value.includes('"') || escaped_value.includes("\n") || escaped_value.includes("\r");
      return should_wrap ? `"${escaped_value}"` : escaped_value;
    };
    const header_row = valid_keys.map((key) => escape_cell(key)).join(seperator);
    const rows = json.map((item) => valid_keys.map((key) => escape_cell(map_cell(item[key]))).join(seperator));
    return [header_row, ...rows].join("\r\n");
  }
  return "";
}
function textFileType(filename) {
  if (filename.endsWith(".csv"))
    return "text/csv";
  if (filename.endsWith(".tsv"))
    return "text/tab-separated-values";
  return "text/plain";
}
function downloadFile(filename, contents) {
  const lower_filename = filename.toLowerCase();
  const file_type = textFileType(lower_filename);
  const should_prefix_bom = lower_filename.endsWith(".csv") || lower_filename.endsWith(".tsv");
  const data = `${should_prefix_bom ? "\uFEFF" : ""}${contents}`;
  const element = document.createElement("a");
  const use_blob_url = !!window.URL?.createObjectURL;
  if (use_blob_url) {
    const blob = new Blob([data], { type: `${file_type};charset=utf-8` });
    const object_url = window.URL.createObjectURL(blob);
    element.setAttribute("href", object_url);
    setTimeout(() => window.URL.revokeObjectURL(object_url), 0);
  } else {
    element.setAttribute("href", `data:${file_type};charset=utf-8,${encodeURIComponent(data)}`);
  }
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function flatten(an_array) {
  const stack = [...an_array];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}
function timePeriodsIntersect(s1, e1, s2, e2) {
  return s1 >= s2 && s1 < e2 || s2 >= s1 && s2 < e1 || // Check start time
  e1 > s2 && e1 <= e2 || e2 > s1 && e2 <= e1;
}
var seed = xmur3("PlaceOS");
var rand = sfc32(2654435769, 608135816, 3084996962, seed());
function predictableRandomInt(ceil = 100, floor = 0) {
  return Math.floor(rand() * (ceil - floor)) + floor;
}
function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++)
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353), h = h << 13 | h >>> 19;
  return function() {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
function sfc32(a2, b, c, d2) {
  return function() {
    a2 >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d2 >>>= 0;
    let t = a2 + b | 0;
    a2 = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    d2 = d2 + 1 | 0;
    t = t + d2 | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  };
}
function isFormGroup(control) {
  const controls = control.controls;
  return !!controls && typeof controls === "object" && !Array.isArray(controls);
}
function getInvalidFields(form, mappings = {}, prefix = "") {
  let invalid = [];
  for (const key in form.controls) {
    if (isFormGroup(form.controls[key])) {
      invalid = [
        ...invalid,
        ...getInvalidFields(form.controls[key], mappings, `${key}.`)
      ];
    } else if (form.controls[key].invalid) {
      invalid.push(`${prefix}${key}`);
    }
  }
  return invalid.map((field) => mappings[field] || field);
}
function removeEmptyFields(obj) {
  for (const key in obj) {
    if (obj[key] === void 0 || obj[key] === null || obj[key] === "") {
      delete obj[key];
    }
  }
}
function capitalizeFirstLetter(word) {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}
function isMobileSafari() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function calculateDistance(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);
  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);
  const a2 = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
  return radius * c;
}
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function extractTextFromHTML(html_string) {
  const temp_element = document.createElement("div");
  temp_element.innerHTML = html_string;
  return temp_element.textContent || temp_element.innerText || "";
}
function formatDuration2({ days, hours, minutes, seconds }, { zero } = {}) {
  if (!i18nAvailable()) {
    return formatDuration({ days, hours, minutes, seconds }, { zero });
  }
  const value = [];
  if (days || zero && days === 0)
    value.push(`${i18n(days === 1 ? "COMMON.TIME_DAY" : "COMMON.TIME_DAYS", { days })}`);
  if (hours || zero && hours === 0)
    value.push(`${i18n(hours === 1 ? "COMMON.TIME_HOUR" : "COMMON.TIME_HOURS", { hours })}`);
  if (minutes || zero && minutes === 0)
    value.push(`${i18n(minutes === 1 ? "COMMON.TIME_MINUTE" : "COMMON.TIME_MINUTES", { minutes })}`);
  if (seconds || zero && seconds === 0)
    value.push(`${i18n(seconds === 1 ? "COMMON.TIME_SECOND" : "COMMON.TIME_SECONDS", { seconds })}`);
  return value.join(" ");
}
function nextValueFrom(obs) {
  return obs ? lastValueFrom(obs.pipe(take(1))) : Promise.resolve(null);
}
function firstTruthyValueFrom(obs) {
  return obs ? lastValueFrom(obs.pipe(first((_2) => !!_2))) : Promise.resolve(null);
}
function withTimeout(promise, timeout_ms, message2 = "Operation timed out.") {
  if (timeout_ms <= 0)
    return promise;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message2)), timeout_ms);
    promise.then((value) => {
      clearTimeout(timer);
      resolve(value);
    }, (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}
function getAllDayTimeRange(date, timezone = "", start, end) {
  const day_start = startOfDayInTimezone(date, timezone);
  if (start == null || end == null) {
    const period_end2 = endOfDayInTimezone(day_start, timezone);
    return {
      date: day_start,
      duration: Math.max(0, differenceInMinutes(period_end2, day_start)),
      date_end: period_end2
    };
  }
  const range_start = Math.max(0, Math.min(23, start));
  const range_end = Math.max(range_start + 1, Math.min(24, end));
  const period_end = addHours(day_start, range_end).valueOf();
  const period_start = addHours(day_start, range_start).valueOf();
  return {
    date: period_start,
    duration: Math.max(0, differenceInMinutes(period_end, period_start)),
    date_end: period_end
  };
}
function getNextBookableTime(bookable_hours, now = Date.now(), timezone = "", min_duration = 0) {
  if (!bookable_hours)
    return void 0;
  const { start, end } = bookable_hours;
  if (start == null || end == null)
    return void 0;
  const start_minutes = start * 60;
  const end_minutes = end * 60;
  const effective_end = min_duration > 0 ? end_minutes - min_duration : end_minutes;
  const time = timezone ? toZonedTime(now, timezone) : new Date(now);
  const current_minutes = time.getHours() * 60 + time.getMinutes();
  const within_window = current_minutes >= start_minutes && (current_minutes < effective_end || min_duration > 0 && current_minutes === effective_end);
  if (within_window) {
    return roundToNearestMinutes(now, {
      nearestTo: 5,
      roundingMethod: "ceil"
    }).valueOf();
  }
  const base_day = current_minutes < start_minutes ? startOfDay(time) : addDays(startOfDay(time), 1);
  const wall_clock_ms = base_day.getTime() + start_minutes * 60 * 1e3;
  return timezone ? fromZonedTime(wall_clock_ms, timezone).valueOf() : wall_clock_ms;
}
function alignDateToBookableHours(date, bookable_hours, fallback_date, timezone = "", min_duration = 0) {
  if (!date || !bookable_hours)
    return date;
  const { start, end } = bookable_hours;
  if (start == null || end == null)
    return date;
  const start_minutes = start * 60;
  const end_minutes = end * 60;
  const effective_end = min_duration > 0 ? end_minutes - min_duration : end_minutes;
  const base_date = new Date(date);
  const reference = timezone ? toZonedTime(fallback_date || date, timezone) : new Date(fallback_date || date);
  let adjusted_date = set(base_date, {
    hours: reference.getHours(),
    minutes: reference.getMinutes(),
    seconds: reference.getSeconds(),
    milliseconds: reference.getMilliseconds()
  }).valueOf();
  const adjusted_time = timezone ? toZonedTime(adjusted_date, timezone) : new Date(adjusted_date);
  const adjusted_minutes = adjusted_time.getHours() * 60 + adjusted_time.getMinutes();
  const within_window = adjusted_minutes >= start_minutes && (adjusted_minutes < effective_end || min_duration > 0 && adjusted_minutes === effective_end);
  if (within_window) {
    return adjusted_date;
  }
  if (adjusted_minutes >= effective_end && adjusted_date <= Date.now()) {
    return getNextBookableTime(bookable_hours, adjusted_date, timezone, min_duration) || adjusted_date;
  }
  adjusted_date = set(base_date, {
    hours: start,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }).valueOf();
  return adjusted_date;
}
function isWithinBookableHours(date, bookable_hours, timezone = "") {
  if (!bookable_hours)
    return true;
  const { start, end } = bookable_hours;
  if (start == null || end == null)
    return true;
  const time = timezone ? toZonedTime(date, timezone) : new Date(date);
  const minutes = time.getHours() * 60 + time.getMinutes();
  return minutes >= start * 60 && minutes < end * 60;
}
function guardModelUndefinedWrites(model, defaults) {
  const sanitize = (value) => {
    for (const key of Object.keys(defaults)) {
      const default_value = defaults[key];
      const current_value = value[key];
      if (current_value === void 0 || current_value === null && default_value !== null) {
        value[key] = default_value;
      }
    }
    return value;
  };
  const set2 = model.set.bind(model);
  const update = model.update.bind(model);
  model.set = (value) => set2(sanitize(__spreadValues({}, value)));
  model.update = (fn) => update((current) => sanitize(__spreadValues({}, fn(current))));
}
function onFieldChange(model, select, handler, injector) {
  let previous = select(untracked(model));
  const body = () => {
    const current = select(model());
    if (Object.is(current, previous))
      return;
    const prior = previous;
    previous = current;
    handler(current, prior);
  };
  try {
    const ref = injector ? effect(body, { injector }) : effect(body);
    return { destroy: () => ref.destroy() };
  } catch {
    return { destroy: () => {
    } };
  }
}
function getInvalidSignalFields(form, model, mappings = {}) {
  const value = untracked(model);
  const invalid = [];
  for (const key of Object.keys(value || {})) {
    const field = form?.[key];
    try {
      if (typeof field === "function" && field()?.invalid?.()) {
        invalid.push(key);
      }
    } catch {
    }
  }
  return invalid.map((field) => mappings[field] || field);
}
function patchSignalModel(model, partial) {
  if (!partial)
    return;
  model.update((current) => {
    const next = __spreadValues({}, current);
    for (const key of Object.keys(partial)) {
      if (key in current)
        next[key] = partial[key];
    }
    return next;
  });
}
function setupFormTimeSync(model, options = {}, injector) {
  let min_duration = options.min_duration ?? 30;
  let max_duration = options.max_duration ?? 0;
  let default_duration = options.default_duration ?? 60;
  let custom_duration_options = [
    ...new Set((options.custom_duration_options || []).map((_2) => Math.round(+_2 || 0)).filter((_2) => _2 > 0))
  ].sort((a2, b) => a2 - b);
  let bookable_hours = options.bookable_hours ?? null;
  let timezone = options.timezone ?? "";
  let all_day_start = options.all_day_start;
  let all_day_end = options.all_day_end;
  const round_to = options.round_to ?? 5;
  const on_change = options.on_time_change;
  const snap = () => untracked(model);
  const finiteNumber = (value) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : void 0;
  };
  const sameValue = (a2, b) => Object.is(a2, b);
  const normaliseTimeValue = (value) => finiteNumber(value) ?? 0;
  const prev = {
    date: finiteNumber(snap().date),
    duration: finiteNumber(snap().duration),
    date_end: finiteNumber(snap().date_end),
    all_day: snap().all_day
  };
  let timed_window;
  const refreshPrev = () => {
    const s = snap();
    prev.date = finiteNumber(s.date);
    prev.duration = finiteNumber(s.duration);
    prev.date_end = finiteNumber(s.date_end);
    prev.all_day = s.all_day;
  };
  const MAX_SYNC_PATCHES = 12;
  let sync_patches = 0;
  let reset_scheduled = false;
  const applyPatch = (patch) => {
    const current = snap();
    const safe_patch = __spreadValues({}, patch);
    for (const key of ["date", "duration", "date_end"]) {
      if (key in safe_patch) {
        safe_patch[key] = normaliseTimeValue(safe_patch[key]);
      }
    }
    const keys = Object.keys(safe_patch);
    if (keys.every((key) => sameValue(current[key], safe_patch[key]))) {
      refreshPrev();
      return false;
    }
    if (sync_patches >= MAX_SYNC_PATCHES) {
      console.warn("setupFormTimeSync: aborting runaway time-sync corrections", safe_patch);
      refreshPrev();
      return false;
    }
    sync_patches++;
    if (!reset_scheduled) {
      reset_scheduled = true;
      setTimeout(() => {
        sync_patches = 0;
        reset_scheduled = false;
      });
    }
    model.update((value) => __spreadValues(__spreadValues({}, value), safe_patch));
    refreshPrev();
    return true;
  };
  const effective_min_duration = () => Math.min(min_duration, ...custom_duration_options);
  const is_custom_duration = (dur) => custom_duration_options.includes(Math.round(+dur || 0));
  const roundCeil = (date) => roundToNearestMinutes(date, {
    nearestTo: round_to,
    roundingMethod: "ceil"
  }).valueOf();
  const bookableWindowRemaining = (start) => {
    start = normaliseTimeValue(start);
    if (!bookable_hours || !start || snap().id)
      return Number.POSITIVE_INFINITY;
    const time = timezone ? toZonedTime(start, timezone) : new Date(start);
    const start_minutes = time.getHours() * 60 + time.getMinutes();
    const end_minutes = bookable_hours.end * 60;
    const remaining = Math.max(0, end_minutes - start_minutes);
    return Math.floor(remaining / round_to) * round_to;
  };
  const clampDuration = (dur, start) => {
    dur = normaliseTimeValue(dur);
    start = normaliseTimeValue(start);
    if (is_custom_duration(dur)) {
      const window3 = bookableWindowRemaining(start);
      if (window3 <= 0)
        return dur;
      return Math.min(dur, window3);
    }
    let clamped = Math.max(dur, min_duration);
    if (max_duration > 0)
      clamped = Math.min(clamped, max_duration);
    const window2 = bookableWindowRemaining(start);
    if (window2 > 0)
      clamped = Math.min(clamped, window2);
    return clamped;
  };
  const alignToBookableHours = (date, preserve_calendar_day = false) => {
    date = normaliseTimeValue(date);
    if (!bookable_hours || !date || snap().id)
      return date;
    if (preserve_calendar_day) {
      return alignDateToBookableHours(date, bookable_hours, date, timezone, effective_min_duration());
    }
    const next = getNextBookableTime(bookable_hours, date, timezone, effective_min_duration());
    if (next && next !== date) {
      if (_user_date_change) {
        notifyWarn(i18n("COMMON.BOOKABLE_HOURS_ERROR"));
        _user_date_change = false;
      }
      return next;
    }
    return alignDateToBookableHours(date, bookable_hours, date, timezone, effective_min_duration());
  };
  const isMultiday = (date, date_end) => {
    date = normaliseTimeValue(date);
    date_end = normaliseTimeValue(date_end);
    if (!date || !date_end)
      return false;
    const d2 = timezone ? toZonedTime(date, timezone) : new Date(date);
    const e = timezone ? toZonedTime(date_end, timezone) : new Date(date_end);
    return !isSameDay(d2, e);
  };
  const alignEndToBookableHours = (date_end) => {
    date_end = normaliseTimeValue(date_end);
    if (!bookable_hours || !date_end || snap().id)
      return date_end;
    const time = timezone ? toZonedTime(date_end, timezone) : new Date(date_end);
    const end_minutes = time.getHours() * 60 + time.getMinutes();
    const bh_start_minutes = bookable_hours.start * 60;
    const bh_end_minutes = bookable_hours.end * 60;
    if (end_minutes >= bh_start_minutes && end_minutes <= bh_end_minutes) {
      return date_end;
    }
    if (end_minutes > bh_end_minutes) {
      const snapped2 = set(time, {
        hours: bookable_hours.end,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      return timezone ? fromZonedTime(snapped2, timezone).valueOf() : snapped2.valueOf();
    }
    const snapped = set(time, {
      hours: bookable_hours.start,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    return timezone ? fromZonedTime(snapped, timezone).valueOf() : snapped.valueOf();
  };
  const subscriptions = [];
  const fieldEffect = (select, handler) => {
    const body = () => {
      const current = select(model());
      if (sameValue(current, select(prev)))
        return;
      try {
        handler();
      } finally {
        refreshPrev();
      }
    };
    try {
      const ref = injector ? effect(body, { injector }) : effect(body);
      subscriptions.push({
        unsubscribe: () => ref.destroy()
      });
    } catch {
    }
  };
  fieldEffect((v2) => v2.duration, () => {
    const s = snap();
    if (s.all_day)
      return;
    const dur = normaliseTimeValue(s.duration);
    const date = normaliseTimeValue(s.date);
    if (!date)
      return;
    const new_end = roundCeil(addMinutes(date, dur));
    const multiday = isMultiday(date, new_end);
    if (multiday) {
      const aligned_end = alignEndToBookableHours(new_end);
      const actual_dur = differenceInMinutes(aligned_end, date);
      const patch = {
        date_end: aligned_end
      };
      if (actual_dur !== dur)
        patch.duration = actual_dur;
      applyPatch(patch);
    } else {
      const clamped = clampDuration(dur, date);
      const clamped_end = roundCeil(addMinutes(date, clamped));
      const patch = {
        date_end: clamped_end
      };
      if (clamped !== dur)
        patch.duration = clamped;
      applyPatch(patch);
    }
    on_change?.();
  });
  fieldEffect((v2) => v2.date_end, () => {
    const s = snap();
    if (s.all_day)
      return;
    const end = normaliseTimeValue(s.date_end);
    const date = normaliseTimeValue(s.date);
    if (!date || !end)
      return;
    const raw = differenceInMinutes(end, date);
    const multiday = isMultiday(date, end);
    if (multiday) {
      const aligned_end = alignEndToBookableHours(end);
      const actual_dur = differenceInMinutes(aligned_end, date);
      if (aligned_end !== end) {
        applyPatch({
          date_end: aligned_end,
          duration: actual_dur
        });
      } else {
        applyPatch({ duration: raw });
      }
    } else {
      const clamped = clampDuration(raw, date);
      if (clamped !== raw) {
        applyPatch({
          date_end: roundCeil(addMinutes(date, clamped)),
          duration: clamped
        });
      } else {
        applyPatch({ duration: raw });
      }
    }
    on_change?.();
  });
  fieldEffect((v2) => v2.date, () => {
    const date = normaliseTimeValue(snap().date);
    const last_date = normaliseTimeValue(prev.date);
    const previous_time = timezone ? toZonedTime(last_date, timezone) : new Date(last_date);
    const next_time = timezone ? toZonedTime(date, timezone) : new Date(date);
    const calendar_day_changed = !!last_date && !!date && !isSameDay(previous_time, next_time);
    const aligned = alignToBookableHours(date, calendar_day_changed);
    let effective = aligned !== date ? aligned : date;
    const is_all_day = snap().all_day;
    const has_id = !!snap().id;
    if (is_all_day && effective < Date.now() && !has_id) {
      const snapped = roundCeil(Date.now());
      effective = alignToBookableHours(snapped) || snapped;
    }
    if (is_all_day) {
      applyPatch(getAllDayTimeRange(effective, timezone, all_day_start, all_day_end));
      on_change?.();
      return;
    }
    const expected_end = roundCeil(addMinutes(effective, normaliseTimeValue(snap().duration)));
    const multiday = isMultiday(effective, expected_end);
    if (multiday) {
      const current_end = normaliseTimeValue(snap().date_end);
      if (current_end <= effective) {
        const new_end = alignEndToBookableHours(expected_end) || expected_end;
        applyPatch({
          date_end: new_end,
          duration: differenceInMinutes(new_end, effective)
        });
      } else {
        const aligned_end = alignEndToBookableHours(current_end);
        if (aligned_end !== current_end) {
          applyPatch({
            date_end: aligned_end,
            duration: differenceInMinutes(aligned_end, effective)
          });
        } else {
          applyPatch({
            duration: differenceInMinutes(current_end, effective)
          });
        }
      }
    } else {
      const duration = normaliseTimeValue(snap().duration);
      const capped = clampDuration(duration, effective);
      const capped_end = capped === duration ? expected_end : roundCeil(addMinutes(effective, capped));
      const patch = {
        date_end: capped_end
      };
      if (capped !== duration)
        patch.duration = capped;
      applyPatch(patch);
    }
    if (effective < Date.now() && !has_id) {
      const snapped = roundCeil(Date.now());
      applyPatch({
        date: alignToBookableHours(snapped) || snapped
      });
    } else if (aligned !== date) {
      applyPatch({ date: aligned });
    }
    on_change?.();
  });
  fieldEffect((v2) => v2.all_day, () => {
    const all_day = snap().all_day;
    if (all_day) {
      timed_window = {
        date: normaliseTimeValue(snap().date),
        duration: normaliseTimeValue(snap().duration),
        date_end: normaliseTimeValue(snap().date_end)
      };
      applyPatch(getAllDayTimeRange(normaliseTimeValue(snap().date), timezone, all_day_start, all_day_end));
    } else if (timed_window && !isMultiday(timed_window.date, normaliseTimeValue(snap().date))) {
      applyPatch(timed_window);
      timed_window = void 0;
    } else {
      timed_window = void 0;
      const date = normaliseTimeValue(snap().date);
      const duration = normaliseTimeValue(snap().duration);
      const date_end = normaliseTimeValue(snap().date_end);
      const explicit_window = !sameValue(duration, normaliseTimeValue(prev.duration)) || !sameValue(date_end, normaliseTimeValue(prev.date_end));
      if (explicit_window)
        return;
      const dur = clampDuration(default_duration, date);
      applyPatch({
        duration: dur,
        date_end: roundCeil(addMinutes(date, dur))
      });
    }
    on_change?.();
  });
  const handle = {
    subscriptions,
    updateOptions(patch) {
      if (patch.min_duration != null)
        min_duration = patch.min_duration;
      if (patch.max_duration != null)
        max_duration = patch.max_duration;
      if (patch.default_duration != null)
        default_duration = patch.default_duration;
      if (patch.custom_duration_options != null) {
        custom_duration_options = [
          ...new Set((patch.custom_duration_options || []).map((_2) => Math.round(+_2 || 0)).filter((_2) => _2 > 0))
        ].sort((a2, b) => a2 - b);
      }
      if (patch.bookable_hours !== void 0)
        bookable_hours = patch.bookable_hours ?? null;
      if (patch.timezone != null)
        timezone = patch.timezone;
      if (patch.all_day_start !== void 0)
        all_day_start = patch.all_day_start;
      if (patch.all_day_end !== void 0)
        all_day_end = patch.all_day_end;
      if (snap().all_day && snap().date) {
        applyPatch(getAllDayTimeRange(normaliseTimeValue(snap().date), timezone, all_day_start, all_day_end));
        on_change?.();
        return;
      }
      if (!snap().all_day) {
        const date = normaliseTimeValue(snap().date);
        const date_end = normaliseTimeValue(snap().date_end);
        const multiday = isMultiday(date, date_end);
        if (!multiday) {
          const current = normaliseTimeValue(snap().duration);
          const clamped = clampDuration(current, date);
          if (clamped !== current) {
            applyPatch({
              duration: clamped,
              date_end: roundCeil(addMinutes(date, clamped))
            });
            on_change?.();
          }
        }
      }
      if (bookable_hours && !snap().all_day) {
        const date = normaliseTimeValue(snap().date);
        const date_end = normaliseTimeValue(snap().date_end);
        const multiday = isMultiday(date, date_end);
        const aligned = alignToBookableHours(date);
        if (aligned !== date) {
          if (multiday) {
            const aligned_end = alignEndToBookableHours(date_end);
            applyPatch({
              date: aligned,
              date_end: aligned_end,
              duration: differenceInMinutes(aligned_end, aligned)
            });
          } else {
            applyPatch({
              date: aligned,
              date_end: roundCeil(addMinutes(aligned, normaliseTimeValue(snap().duration)))
            });
          }
          on_change?.();
        } else if (multiday) {
          const aligned_end = alignEndToBookableHours(date_end);
          if (aligned_end !== date_end) {
            applyPatch({
              date_end: aligned_end,
              duration: differenceInMinutes(aligned_end, date)
            });
            on_change?.();
          }
        }
      }
    }
  };
  return handle;
}
function getFormTimeSyncHandle(form) {
  return form?._time_sync;
}
function errorMessage(error) {
  if (typeof error === "string")
    return error;
  if (error instanceof Error)
    return error.message || "";
  const value = error;
  if (typeof value?.error === "string")
    return value.error;
  if (typeof value?.message === "string")
    return value.message;
  if (typeof value?.error?.message === "string")
    return value.error.message;
  return "";
}

// libs/common/src/lib/locale.service.ts
var _service2;
function setTranslationService(service) {
  _service2 = service;
}
function i18nAvailable() {
  return !!_service2;
}
function i18n(key, args = {}, plural = 0) {
  if (!_service2)
    return key;
  return _service2.get(key, args, plural);
}
function removeNesting(value, path = "") {
  let out_object = {};
  for (const key in value) {
    const out_key = path ? [path, key].join(".") : key;
    if (value[key] instanceof Object) {
      out_object = __spreadValues(__spreadValues({}, out_object), removeNesting(value[key], out_key));
    } else {
      out_object[out_key] = `${value[key]}`;
    }
  }
  return out_object;
}
function removeLocalStorageKeysWithSubstring(substring) {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.includes(substring)) {
      localStorage.removeItem(key);
    }
  }
}
var STORE_KEY = "APP.locale";
var LocaleService = class _LocaleService {
  constructor() {
    this._default_locale = "en-AU";
    this._current_locale = this._default_locale;
    this._current_locale_short = this._current_locale.split("-")[0];
    this._max_cache_age = 7 * 24 * 60 * 60 * 1e3;
    this._load_promises = {};
    this._loaded_locales = {};
    this._changes = signal(
      0,
      ...ngDevMode ? [{ debugName: "_changes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locale_mappings = {};
    this.locale_folder = "assets/locale";
    this.changes = this._changes.asReadonly();
    this._current_locale = localStorage.getItem(`${STORE_KEY}`) || this._default_locale;
    for (const locale of [this._current_locale, this._default_locale]) {
      const cached = this._cachedMappings(locale);
      if (cached)
        this._locale_mappings[locale] = cached;
    }
  }
  /** Resolves when the locales that are loading have finished */
  async loaded() {
    await Promise.allSettled(Object.values(this._load_promises));
  }
  init() {
    this.setLocale(localStorage.getItem(`${STORE_KEY}`) || this._default_locale);
    if (window.debug) {
      window.clearLocaleDataStore = () => {
        removeLocalStorageKeysWithSubstring(STORE_KEY);
        location.reload();
      };
      window.i18n = i18n;
    }
  }
  get(key, args = {}, plural = 0) {
    this.changes();
    let key_value = key;
    let value = key;
    const map2 = this._locale_mappings[this._current_locale] || {};
    const map_short = this._locale_mappings[this._current_locale_short] || {};
    const map_default = this._locale_mappings[this._default_locale] || {};
    if (plural) {
      key_value = `${key}_${plural}`;
      const any_key_value = `${key}_N`;
      value = // Check for exact plural
      map2[key_value] || map_short[key_value] || map_default[key_value] || // Check for catch-all plural
      map2[any_key_value] || map_short[any_key_value] || map_default[any_key_value] || // Check for key
      map2[key] || map_short[key] || map_default[key] || key;
    } else {
      value = map2[key_value] || map_short[key_value] || map_default[key_value] || key;
    }
    for (const id in args) {
      value = value.replace(`{{ ${id} }}`, args[id]).replace(`{{ ${id} }}`, args[id]);
    }
    return value || "";
  }
  get default_locale() {
    return this._default_locale;
  }
  get locale() {
    return this._current_locale;
  }
  getLocaleShort() {
    return this._current_locale_short;
  }
  setLocale(locale) {
    this._current_locale = locale;
    this._current_locale_short = this._current_locale.split("-")[0];
    this._changes.update((value) => value + 1);
    for (const id of [locale, this._default_locale]) {
      if (!this._loaded_locales[id] && !this._load_promises[id]) {
        this._load_promises[id] = this._loadLocale(id);
      }
    }
    localStorage.setItem(`${STORE_KEY}`, locale);
    log("LOCALE", `Locale set to "${locale}"`);
  }
  async _loadLocale(locale) {
    const cached = this._cachedMappings(locale);
    if (cached && !this._locale_mappings[locale]) {
      this._locale_mappings[locale] = cached;
      this._changes.update((value) => value + 1);
    }
    const resp = await fetch(`${this.locale_folder}/${locale}.json`);
    if (!resp.ok) {
      delete this._load_promises[locale];
      return console.error(`Failed to loaded locale file for "${locale}".`, resp);
    }
    const locale_data = await resp.json();
    const locale_override_data = this.zone_id ? await ac(this.zone_id, `locale_${locale}`) : { details: {} };
    const base_locale_values = removeNesting(locale_data);
    const override_locale_values = removeNesting(locale_override_data.details);
    this._locale_mappings[locale] = __spreadValues(__spreadValues({}, base_locale_values), override_locale_values);
    if (!window.debug) {
      const store = {
        cached_at: Date.now(),
        locale,
        mappings: this._locale_mappings[locale]
      };
      localStorage.setItem(`${STORE_KEY}.${locale}`, JSON.stringify(store));
    }
    this._loaded_locales[locale] = true;
    this._changes.update((value) => value + 1);
    delete this._load_promises[locale];
  }
  /** Mappings stored by the last load of the locale, if still usable */
  _cachedMappings(locale) {
    const key = `${STORE_KEY}.${locale}`;
    try {
      const store = JSON.parse(localStorage.getItem(key) || "null");
      if (!store?.cached_at || store.cached_at + this._max_cache_age < Date.now()) {
        localStorage.removeItem(key);
        return null;
      }
      return store.mappings;
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }
  static {
    this.\u0275fac = function LocaleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocaleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocaleService, factory: _LocaleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocaleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  millisecondsInMinute,
  millisecondsInHour,
  millisecondsInSecond,
  minutesInMonth,
  minutesInDay,
  constructFrom,
  toDate,
  addDays,
  addHours,
  getDefaultOptions,
  startOfWeek,
  startOfISOWeek,
  getTimezoneOffsetInMilliseconds,
  normalizeDates,
  startOfDay,
  differenceInCalendarDays,
  addMinutes,
  isSameDay,
  isValid,
  getRoundingMethod,
  differenceInMilliseconds,
  differenceInMinutes,
  endOfDay,
  enUS,
  getISOWeek,
  getWeekYear,
  getWeek,
  longFormatters,
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  warnOrThrowProtectedError,
  format,
  getDefaultOptions2,
  startOfMinute,
  roundToNearestMinutes,
  setMonth,
  set,
  toZonedTime,
  fromZonedTime,
  Ce,
  ci,
  Yr,
  u,
  $i,
  Xr,
  to,
  et,
  bi,
  J,
  Et,
  Mt,
  so,
  Un,
  io,
  _s,
  ro,
  Cn,
  jt,
  ao,
  lo,
  ji,
  _,
  v,
  ce,
  te,
  V,
  $,
  Le,
  Pe,
  Cu,
  en,
  ac,
  hc,
  fc,
  _c,
  Us,
  ga,
  $a,
  ba,
  Sa,
  Aa,
  xa,
  qa,
  Pa,
  Ta,
  Ha,
  Za,
  eh,
  th,
  sh,
  dh,
  _h,
  mh,
  gh,
  yh,
  $h,
  Ns,
  Ds,
  yr,
  Hh,
  Bh,
  Wh,
  Qh,
  Kh,
  Jh,
  Yh,
  Xh,
  el,
  tl,
  nl,
  sl,
  ol,
  Il,
  Ul,
  mn,
  Dl,
  Hl,
  zl,
  Fl,
  gn,
  Ll,
  jl,
  Gl,
  Bl,
  Wl,
  Sr,
  qr,
  Ql,
  Kl,
  Zl,
  Jl,
  Vl,
  Xl,
  tp,
  np,
  sp,
  ip,
  rp,
  op,
  cp,
  ap,
  hp,
  lp,
  pp,
  dp,
  fp,
  _p,
  Hp,
  Mr,
  Kr,
  Gp,
  setTranslationService,
  i18n,
  LocaleService,
  setNotifyOutlet,
  lazySnackbar,
  notifySuccess,
  notifyError,
  notifyWarn,
  notifyInfo,
  LOCAL_TIMEZONE,
  localToTimezone,
  startOfDayInTimezone,
  endOfDayInTimezone,
  getTimezoneOffsetString,
  getTimezoneOffsetInMinutes,
  getTimezoneDifferenceInHours,
  getTimeInTimezone,
  sameDayInTimezone,
  formatTimeInTimezone,
  setTimeInTimezone,
  markUserDateChange,
  setAppName,
  log,
  scoped_log,
  padLength,
  getItemWithKeys,
  unique,
  randomInt,
  padString,
  randomString,
  csvToJson,
  loadTextFileFromInputEvent,
  jsonToCsv,
  downloadFile,
  flatten,
  timePeriodsIntersect,
  predictableRandomInt,
  getInvalidFields,
  removeEmptyFields,
  capitalizeFirstLetter,
  isMobileSafari,
  calculateDistance,
  extractTextFromHTML,
  formatDuration2 as formatDuration,
  nextValueFrom,
  firstTruthyValueFrom,
  withTimeout,
  getAllDayTimeRange,
  alignDateToBookableHours,
  isWithinBookableHours,
  guardModelUndefinedWrites,
  onFieldChange,
  getInvalidSignalFields,
  patchSignalModel,
  setupFormTimeSync,
  getFormTimeSyncHandle,
  errorMessage,
  SafePipe,
  IconComponent
};
//# debugId=f8b0500b-eb8e-5fbf-a80e-3c1d14975f26
//# sourceMappingURL=chunk-M7VTE6JY.js.map
