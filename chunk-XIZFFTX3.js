import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-YQHRR62F.js";
import {
  bindNativeAuthRedirects,
  clearNativeApiKey,
  clearNativeDomain,
  clearNativePkceVerifier,
  closeNativeBrowser,
  consumeNativeAuthError,
  consumeNativeAuthRedirect,
  getIntuneAccount,
  getIntuneToken,
  getNativeApiKey,
  getNativeDomain,
  getNativeRedirectUri,
  hideNativeStatusBar,
  isNativeApp,
  lookupNativeDomainByEmail,
  markNativeAuthRedirectConsumed,
  openNativeBrowser,
  restoreNativePkceVerifier,
  scheduleNativeRestart,
  setNativeAuthError,
  setNativeDomain,
  setNativeEmail,
  storeNativePkceVerifier,
  syncNativeManagedConfig
} from "./chunk-6Y7NIYC3.js";
import {
  ApplicationRef,
  BehaviorSubject,
  DOCUMENT,
  Directive,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Output,
  RuntimeError,
  Service,
  Subject,
  Subscription,
  Title,
  catchError,
  combineLatest,
  computed,
  effect,
  filter,
  first,
  formatRuntimeError,
  inject,
  lastValueFrom,
  makeEnvironmentProviders,
  map,
  of,
  provideAppInitializer,
  retry,
  setClassMetadata,
  signal,
  switchMap,
  take,
  timer,
  untracked,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener
} from "./chunk-S46WIYNY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// libs/common/src/lib/async-handler.class.ts
var AsyncHandler = class _AsyncHandler {
  constructor() {
    this._timers = {};
    this._intervals = {};
    this._subscriptions = {};
    this._initialised = new BehaviorSubject(false);
    this.initialised = this._initialised.asObservable();
  }
  /** Whether the object has been initialised */
  get is_initialised() {
    return this._initialised.getValue();
  }
  ngOnDestroy() {
    this.destroy();
  }
  destroy() {
    for (const key in this._timers) {
      if (key in this._timers)
        this.clearTimeout(key);
    }
    for (const key in this._intervals) {
      if (key in this._intervals)
        this.clearInterval(key);
    }
    for (const key in this._subscriptions) {
      if (key in this._subscriptions)
        this.unsub(key);
    }
  }
  /**
   * Creates a named timer
   * @param name Name of the timer
   * @param fn Callback function for the timer
   * @param delay Callback delay
   */
  timeout(name, fn, delay = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearTimeout(name);
      this._timers[name] = setTimeout(() => {
        fn();
        delete this._timers[name];
      }, delay);
    } else {
      throw new Error(name ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback");
    }
  }
  /**
   * Clears the named timer
   * @param name Timer name
   */
  clearTimeout(name) {
    if (this._timers[name]) {
      clearTimeout(this._timers[name]);
      delete this._timers[name];
    }
  }
  /**
   * Creates a named interval
   * @param name Name of the interval
   * @param fn Callback function for the interval
   * @param delay Callback delay
   */
  interval(name, fn, delay = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearInterval(name);
      this._intervals[name] = setInterval(() => fn(), delay);
    } else {
      throw new Error(name ? "Cannot create named interval without a name" : "Cannot create a interval without a callback");
    }
  }
  /**
   * Clears the named interval
   * @param name Timer name
   */
  clearInterval(name) {
    if (this._intervals[name]) {
      clearInterval(this._intervals[name]);
      delete this._intervals[name];
    }
  }
  /**
   * Store named subscription
   * @param name Name of the subscription
   * @param unsub Unsubscribe callback or Subscription object
   */
  subscription(name, unsub) {
    this.unsub(name);
    this._subscriptions[name] = unsub;
  }
  hasSubscription(name) {
    return this._subscriptions[name] instanceof Subscription || !!this._subscriptions[name];
  }
  /**
   * Call unsubscribe callback with the given name
   * @param name
   */
  unsub(name) {
    if (!(name in this._subscriptions) || !this._subscriptions[name]) {
      return;
    }
    "unsubscribe" in this._subscriptions[name] ? this._subscriptions[name].unsubscribe() : this._subscriptions[name]();
    this._subscriptions[name] = null;
  }
  /** Unsubscribe to the items with names containing the given string */
  unsubWith(contains) {
    const subs = Object.keys(this._subscriptions).filter((k) => k.includes(contains));
    subs.forEach((k) => this.unsub(k));
  }
  static {
    this.\u0275fac = function AsyncHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsyncHandler)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsyncHandler, factory: _AsyncHandler.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

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
function vi2() {
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
  const t = vi2();
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
var X = "users";
function Ue(t) {
  return new Dn(t);
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

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
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

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/add.js
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const _date = toDate(date, options?.in);
  const dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
  const dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
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

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
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

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
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

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
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

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
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

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
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
function warnOrThrowProtectedError(token, format3, input) {
  const _message = message(token, format3, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format3, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format3}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
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
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
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

// node_modules/date-fns/getUnixTime.js
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
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

// node_modules/date-fns-tz/dist/esm/format/formatters/index.js
var MILLISECONDS_IN_MINUTE2 = 60 * 1e3;

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
var MILLISECONDS_IN_MINUTE3 = 6e4;
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
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3;
  }
  token = patterns2.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    const seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3 + seconds * 1e3;
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

// libs/common/src/lib/locale.service.ts
var _service;
function setTranslationService(service) {
  _service = service;
}
function i18n(key, args = {}, plural = 0) {
  if (!_service)
    return key;
  return _service.get(key, args, plural);
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

// libs/common/src/lib/notifications.ts
var _service2 = null;
var _loader = null;
var _loading = null;
var _disable_logging = false;
var _filter = null;
function setNotifyOutlet(outlet, disable_logging = false) {
  _service2 = typeof outlet === "function" ? null : outlet;
  _loader = typeof outlet === "function" ? outlet : null;
  _loading = null;
  _disable_logging = disable_logging;
}
function lazySnackbar() {
  const injector = inject(EnvironmentInjector);
  return () => import("./snack-bar-TS4ERS77.js").then(({ MatSnackBar }) => injector.get(MatSnackBar));
}
function notify(type, message2, action = "OK", on_action, config = {}) {
  if (!_service2 && !_loader) {
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
  if (_service2)
    return open(_service2);
  const loading = _loading ??= _loader();
  loading.then((snackbar) => {
    if (_loading !== loading)
      return;
    _service2 = snackbar;
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
function notifyInfo(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  notify("info", msg, action, on_action, config);
}

// libs/common/src/lib/timezone-helpers.ts
var LOCAL_TIMEZONE = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "Australia/Sydney";
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

// libs/common/src/lib/general.ts
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
function getItemWithKeys(keys, map2) {
  const key = keys[0];
  if (map2 && typeof map2 === "object" && key in map2) {
    return keys.length > 1 ? getItemWithKeys(keys.slice(1), map2[key] || {}) : map2[key];
  }
  return null;
}
function unique(array = [], key = "") {
  const keys = [];
  return array.filter((el) => {
    const id = key ? el[key] : el;
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
function sfc32(a, b, c, d2) {
  return function() {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d2 >>>= 0;
    let t = a + b | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    d2 = d2 + 1 | 0;
    t = t + d2 | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  };
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
function firstTruthyValueFrom(obs) {
  return obs ? lastValueFrom(obs.pipe(first((_2) => !!_2))) : Promise.resolve(null);
}
function withTimeout(promise, timeout_ms, message2 = "Operation timed out.") {
  if (timeout_ms <= 0)
    return promise;
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error(message2)), timeout_ms);
    promise.then((value) => {
      clearTimeout(timer2);
      resolve(value);
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}

// libs/common/src/lib/hotkeys.service.ts
var INVALID_STANDALONE_KEYS = [
  "control",
  "shift",
  "alt",
  "meta",
  "os"
];
var HotkeysService = class _HotkeysService {
  constructor() {
    this.keydown_states = {};
    this.keydown_callbacks = {};
    this.combo_end = [];
    this.registered_combos = [];
    this.counter = 0;
    window.addEventListener("keydown", (event) => {
      if (document.getSelection()?.type === "Range" || this.isEditableElementFocused()) {
        return;
      }
      const code = this.mapKey((event.code || "").toLowerCase());
      if (this.last_down !== code) {
        if (!this.keydown_states[code]) {
          this.keydown_states[code] = signal(null);
        }
        this.keydown_states[code].set(++this.counter);
        this._handleKeyPress(code, this.counter);
        if (this.combo_end.indexOf(code) >= 0) {
          event.preventDefault();
        }
        this.last_down = code;
      }
    });
    window.addEventListener("keyup", (event) => {
      const code = this.mapKey((event.code || "").toLowerCase());
      this.keydown_states[code]?.set(null);
      if (this.last_down === code) {
        this.last_down = null;
      }
    });
  }
  /**
   * Listen to the given key combination
   * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
   * @param next Callback for combination presses
   */
  listen(combo, next) {
    combo = combo instanceof Array ? combo : combo.split("+");
    const combination = combo.map((i) => this.mapKey(i.toLowerCase()));
    if (combination.length > 0 && this.validCombination(combination)) {
      this.registered_combos.push(combination);
      const last_key = combination[combination.length - 1];
      if (!this.keydown_states[last_key]) {
        this.keydown_states[last_key] = signal(null);
      }
      this.updateCombinationEndList();
      const callback = (count) => {
        if (count) {
          const presses = [];
          if (combination.length > 0) {
            for (const key of combination) {
              const state = this.keydown_states[key];
              presses.push(state ? state() || -1 : -1);
            }
            for (let i = 0; i < combination.length - 1; i++) {
              if (presses[i] > presses[i + 1]) {
                return;
              }
            }
          }
          const total = presses.reduce((a, v2) => a + (v2 > 0 ? 1 : -1), 0);
          if (total >= combination.length) {
            next();
          }
        }
      };
      this.keydown_callbacks[last_key] ||= /* @__PURE__ */ new Set();
      this.keydown_callbacks[last_key].add(callback);
      return {
        unsubscribe: () => this.keydown_callbacks[last_key]?.delete(callback)
      };
    }
    return null;
  }
  _handleKeyPress(code, count) {
    for (const callback of this.keydown_callbacks[code] || []) {
      callback(count);
    }
  }
  /** Check if keyboard input should remain with the focused editor. */
  isEditableElementFocused() {
    const active = document.activeElement;
    if (!active)
      return false;
    const tag_name = active.tagName.toLowerCase();
    return tag_name === "input" || tag_name === "textarea" || active.getAttribute("contenteditable") === "true" || !!active.closest(".monaco-editor");
  }
  /**
   * Map key codes with multiple versions to simple form
   * @param code Code to transform
   */
  mapKey(code) {
    if (code.indexOf("alt") >= 0 || code.indexOf("shift") >= 0 || code.indexOf("control") >= 0) {
      return code.replace("left", "").replace("right", "");
    }
    return code;
  }
  /**
   * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
   */
  updateCombinationEndList() {
    const key_list = [];
    for (const combo of this.registered_combos) {
      this.combo_end.push(combo[combo.length - 1]);
    }
    this.combo_end = unique(key_list);
  }
  /**
   * Checks if the given hotkey combination is allowed and valid
   * @param combo Array of key codes
   */
  validCombination(combo) {
    let non_meta = 0;
    for (const key of combo) {
      if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
        non_meta++;
      }
    }
    return non_meta > 0;
  }
  static {
    this.\u0275fac = function HotkeysService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HotkeysService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HotkeysService, factory: _HotkeysService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotkeysService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/settings.ts
var general = {};
var app = {
  name: "Catering",
  title: "PlaceOS",
  description: "Caterers UI",
  short_name: "PlaceOS",
  logo: {
    type: "img",
    src: "assets/logo-light.svg"
  },
  logo_dark: {
    type: "img",
    src: "assets/logo-dark.svg"
  },
  general
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/catering",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  app
};

// libs/common/src/lib/types/user.class.ts
var USER_DOMAIN = "@dev.place.tech";
function setInternalUserDomain(domain) {
  USER_DOMAIN = domain;
}
var User = class {
  constructor(data = {}) {
    this.id = data.id || data.email || `USER::${randomString(8)}`;
    this.name = data.name || "";
    this.email = data.email || "";
    this.first_name = data.first_name || data.name || "";
    this.last_name = data.last_name || "";
    this.phone = data.phone || "";
    this.organisation = data.organisation || "";
    this.notes = data.notes || "";
    this.photo = data.photo || data.image || (data.photo_upload_id ? `/api/engine/v2/uploads/${encodeURIComponent(data.photo_upload_id)}/url` : "") || "";
    this.photo_upload_id = data.photo_upload_id || "";
    this.username = data.username || "";
    this.organizer = !!data.organizer;
    this.checked_in = !!data.checked_in;
    this.required = data.required ?? true;
    this.resource = data.resource ?? false;
    this.locatable = data.locatable ?? false;
    this.response_status = data.response_status || "";
    const groups = data.groups || [];
    this.department = data.department ?? "";
    if (data.sys_admin)
      groups.push("placeos_admin");
    if (data.support)
      groups.push("placeos_support");
    if (data.department)
      groups.push(data.department);
    this.groups = unique(groups);
    this.extension_data = data.extension_data || {};
    this.extension_data.assistance_required = data.assistance_required || this.extension_data.assistance_required;
    this.is_external = !this.email?.endsWith(`${USER_DOMAIN}`);
    this.visit_expected = data.visit_expected ?? true;
    this.assistance_required = !!this.extension_data?.assistance_required;
    for (const key in data) {
      if (!(key in this))
        this.extension_data[key] = data[key];
    }
  }
};
var StaffUser = class extends User {
  get location() {
    return this.location_time(Date.now());
  }
  work_preference(datetime) {
    if (!datetime)
      datetime = Date.now();
    const date = new Date(datetime);
    const day = date.getDay();
    const date_string = format(date, "yyyy-MM-dd");
    if (this.work_overrides[date_string]?.blocks?.length) {
      for (const block of this.work_overrides[date_string].blocks) {
        const start = block.start_time;
        const end = block.end_time;
        if (start <= date.getHours() + date.getMinutes() / 60 && end >= date.getHours() + date.getMinutes() / 60) {
          return block;
        }
      }
    }
    for (const pref of this.work_preferences) {
      if (pref.day_of_week === day && pref.blocks?.length) {
        for (const block of pref.blocks) {
          if (block.start_time <= date.getHours() + date.getMinutes() / 60 && block.end_time >= date.getHours() + date.getMinutes() / 60) {
            return block;
          }
        }
      }
    }
  }
  location_time(datetime = Date.now()) {
    return this.work_preference(datetime)?.location || "ooo";
  }
  get location_name() {
    return this.location_name_time();
  }
  location_name_time(datetime = Date.now()) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2.includes("w") && !in_hours) {
      return i18n("COMMON.WORK_HOURS_OUTSIDE");
    }
    switch (location2) {
      case "wfh":
        return i18n("COMMON.WORK_HOURS_HOME");
      case "wfo":
        return i18n("COMMON.WORK_HOURS_OFFICE");
      case "ooo":
        return i18n("COMMON.WORK_HOURS_OUT");
      case "aol":
        return i18n("COMMON.WORK_HOURS_LEAVE");
      case "sick":
        return i18n("COMMON.WORK_HOURS_SICK");
      default:
        return i18n("COMMON.UNKNOWN");
    }
  }
  outsideHours(datetime = Date.now()) {
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    return location2.includes("w") && !in_hours;
  }
  get in_hours() {
    return this.in_hours_time(Date.now());
  }
  location_icon(datetime) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2 === "wfh" && in_hours)
      return "home";
    if (location2 === "wfo" && in_hours)
      return "business";
    if (location2 === "sick")
      return "sick";
    return "event_busy";
  }
  in_hours_time(datetime = Date.now()) {
    const block = this.work_preference(datetime);
    return !!block;
  }
  constructor(data = {}) {
    super(data);
    this.card_number = data.card_number || "";
    this.staff_id = data.staff_id || "";
    this.is_logged_in = !!data.is_logged_in;
    this.work_preferences = data.work_preferences || [];
    this.work_overrides = data.work_overrides || {};
  }
};
var EMPTY_USER = {
  name: "<empty>",
  email: "<empty>@app.user"
};
function isEmptyUser(user) {
  return !user || !user.email || user.email === EMPTY_USER.email;
}

// libs/common/src/lib/public-mode.ts
function isPublicMode() {
  if (typeof window === "undefined")
    return false;
  const flag = window.PLACEOS_PUBLIC_MODE;
  return !!flag;
}

// libs/common/src/lib/types/asset-request.class.ts
function deliverAtTime(request) {
  let date = request.event?.date || request._time;
  if (request.deliver_time) {
    date = set(date, {
      hours: Math.floor(request.deliver_time),
      minutes: request.deliver_time % 1 * 60
    }).valueOf();
  }
  if (request.deliver_day_offset > 0 || request.event?.all_day) {
    date = addDays(startOfDay(date), request.deliver_day_offset).valueOf();
  }
  return addMinutes(date, request.deliver_offset).valueOf();
}
var AssetRequest = class {
  get deliver_at() {
    return deliverAtTime(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    this.conflict = false;
    this._changed = false;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.event_id = data.event_id || data.parent_id || "";
    this.items = data.items || data.asset_ids?.map((_2) => ({ id: _2, quantity: 1 })) || [];
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this._status = data[`${this.event_id}_status`] || data.status || (data.extension_data || {})[`${this.event_id}_status`] || data.extension_data?.status || "in_storage";
    this.event = data.event || data || null;
    const booking = this.event?.linked_bookings?.find((_2) => _2.extension_data.request_id === this.id);
    this._booking = booking || data.booking || null;
    this._changed = !!data._changed || !booking;
    this.notes = data.notes || data.description || "";
    this.deliver_time = data.deliver_time || data.extension_data?.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || data.extension_data?.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || data.extension_data?.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime(this);
    this.conflict = !!data.conflict;
    this.ref_id = `${this.deliver_at_time}|${this.items.map((_2) => `${_2.id}:${_2.quantity}`).join("|")}`;
  }
  toJSON() {
    const blob = __spreadValues({}, this);
    delete blob.event;
    delete blob._changed;
    delete blob._status;
    delete blob._time;
    delete blob.deliver_at_time;
    delete blob.deliver_at;
    blob.items = blob.items.map((_2) => ({
      id: _2.id,
      category_id: _2.category_id,
      quantity: _2.quantity,
      name: _2.name,
      item_ids: _2.item_ids
    }));
    return blob;
  }
};

// libs/common/src/lib/types/catering.class.ts
function cloneOption(option = {}) {
  return {
    id: option.id || "",
    name: option.name || "",
    group: option.group || "",
    multiple: !!option.multiple,
    unit_price: option.unit_price || 0,
    active: option.active
  };
}
function deliverAtTime2(order) {
  let date = order.event?.date || order.event?.event_start * 1e3 || order._time;
  if (order.deliver_day_offset > 0 || order.event?.all_day) {
    date = addDays(startOfDay(date), order.deliver_day_offset).valueOf();
  }
  if (order.deliver_time) {
    date = set(date, {
      hours: Math.floor(order.deliver_time),
      minutes: order.deliver_time % 1 * 60
    }).valueOf();
  }
  return addMinutes(date, order.deliver_offset).valueOf();
}
var CateringItem = class {
  get option_list() {
    const active_options = this.options.filter((_2) => _2.active === true);
    return active_options.length ? active_options : this._option_list;
  }
  /** String list of selected option ids */
  get options_string() {
    return this.option_list.map((_2) => _2.id || "").sort((a, b) => a.localeCompare(b)).join(",");
  }
  get custom_id() {
    const options = this.option_list.map((_2) => _2.id).sort((a, b) => a.localeCompare(b)).join("+");
    return `${this.id}[${options}]${!this.in_order ? "menu" : ""}`;
  }
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || data.id || "";
    this.category = data.category || "";
    this.caterer = data.caterer || "";
    this.unit_price = data.unit_price || 0;
    this.description = data.description || "";
    this.quantity = data.quantity || 0;
    this.discount_cap = data.discount_cap || 0;
    this.accept_points = !!data.accept_points;
    this.tags = [
      ...(data.tags instanceof Array ? data.tags : null) || []
    ];
    this.images = [...data.images || []];
    this.options = (data.options || []).map((_2) => cloneOption(_2));
    const has_options = this.options.some((_2) => _2.active === true);
    this._option_list = (has_options ? this.options.filter((_2) => _2.active === true) : (data.option_list || []).map((_2) => cloneOption(_2))) || [];
    this.hide_for_zones = [...data.hide_for_zones || []];
    this.unit_price_with_options = this.unit_price + this.option_list.map((i) => i.unit_price || 0).reduce((c, a) => c + a, 0);
    this.total_cost = this.unit_price_with_options * this.quantity;
    this.in_order = data.in_order ?? false;
  }
};
var CateringOrder = class {
  get deliver_at() {
    return deliverAtTime2(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.system_id = data.system_id || "";
    this.event_id = data.event_id || data.event?.id || "";
    this.caterer = data.caterer || "";
    this.items = (data.items || []).map((i) => i instanceof CateringItem ? i : new CateringItem(i));
    this.items = this.items.filter((i) => i.quantity > 0 && this.caterer === i.caterer);
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this.total_cost = this.items.reduce((amount, item) => amount + (item.total_cost || 0), 0);
    this.charge_code = data.charge_code || "";
    this.status = data[`${this.event_id}_status`] || data.status || "accepted";
    this.invoice_number = data.invoice_number || "";
    this.event = data.event || null;
    this.notes = data.notes || "";
    this.deliver_time = data.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime2(this);
  }
  toJSON() {
    const obj = ci(__spreadValues({}, this), ["", null, void 0]);
    obj.status = obj._status;
    delete obj.event;
    delete obj._status;
    delete obj._time;
    return obj;
  }
};

// libs/common/src/lib/types/org.classes.ts
var Organisation = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.name = raw_data.name || "";
    this.description = raw_data.description || "";
    this.tags = raw_data.tags || [];
    this.count = raw_data.count || 0;
    this.children_count = raw_data.children_count || 0;
    this.capacity = raw_data.capacity || 0;
    this.bindings = raw_data.bindings || {};
    this._settings = raw_data.settings || {};
  }
  /**
   * Get a custom organisation setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  setting(key) {
    const keys = key.split(".");
    const value = getItemWithKeys(keys, this._settings);
    return value;
  }
};
var BuildingLevel = class {
  constructor(_data = {}) {
    this.settings = {};
    this.id = _data.id || "";
    this.parent_id = _data.parent_id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.map_id = _data.map_id || "";
    this.capacity = _data.capacity || 0;
    this.location = _data.location || "";
    this.locations = _data.locations || [];
    this.tags = _data.tags || [];
    this.images = _data.images || [];
    this.code = _data.code || "";
    const parts = this.display_name.split(" ");
    this.number = ((parts.length >= 2 ? parts[parts.length - 1] : this.display_name[0])?.toUpperCase() || "").substring(0, 2);
  }
};
var Building = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.parent_id = raw_data.parent_id || "";
    this.name = raw_data.name || "";
    const settings = raw_data.settings || {};
    this.display_name = raw_data.display_name;
    this.images = this.images || [];
    const disc_info = settings.discovery_info || settings;
    this.zone_id = raw_data.zone_id || raw_data.zone;
    this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.loan_items = (raw_data.loan_items || disc_info.loan_items || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.levels = (raw_data.levels || disc_info.levels || []).map((i) => new BuildingLevel(__spreadProps(__spreadValues({}, i), { building_id: this.id })));
    this._roles = raw_data.roles || disc_info.roles || {};
    this._lockers = raw_data.lockers || raw_data.locker_structure || disc_info.locker_structure || {};
    this._systems = raw_data.systems || disc_info.systems || {};
    this._phone_numbers = raw_data.phone_numbers || disc_info.phone_numbers || {};
    this.location = raw_data.location || disc_info.location || "0,0";
    this.room_configurations = raw_data.room_configurations || disc_info.room_configurations || [];
    this.attributes = raw_data.attributes || disc_info.attributes || [];
    const searchables = [];
    if (raw_data.neighbourhoods) {
      for (const lvl in raw_data.neighbourhoods) {
        if (lvl in raw_data.neighbourhoods) {
          const lvl_features = raw_data.neighbourhoods[lvl] || {};
          for (const feature in lvl_features) {
            if (feature in lvl_features) {
              searchables.push({
                id: lvl_features[feature],
                name: feature,
                level_id: lvl
              });
            }
          }
        }
      }
    }
    this.bindings = raw_data.bindings || {};
    this.searchables = searchables;
    this.map_id = raw_data.map_id || "";
    this.timezone = raw_data.timezone || disc_info.timezone || settings.timezone || "";
    this.catering_hours = raw_data.catering_hours || disc_info.catering_hours || settings.catering_hours || { start: 7, end: 20 };
    this.visitor_space = raw_data.visitor_space || disc_info.visitor_space || settings.visitor_space || "";
    this.holding_bay = raw_data.holding_bay || disc_info.holding_bay || settings.holding_bay || "";
    this.code = raw_data.code || disc_info.code || settings.code || "";
    this.address = raw_data.address || disc_info.address || settings.address || "";
    this.orientations = raw_data.orientations || disc_info.orientations || settings.orientations || {};
    this.booking_details = raw_data.booking_details || disc_info.booking_details || settings.booking_details || null;
    this.catering_restricted_from = raw_data.catering_restricted_from || disc_info.catering_restricted_from || settings.catering_restricted_from || -1440;
    this.currency = raw_data.currency || disc_info.currency || settings.currency || "USD";
  }
  /**
   * Get list of users with the associated role
   * @param name Role to find users for
   */
  role(name) {
    return [...this._roles[name] || []];
  }
  /**
   * Get list of the names of available user role lists
   */
  get role_names() {
    return Object.keys(this._roles).filter((i) => i in this._roles);
  }
  /** Map of the locker ID arrays */
  get lockers() {
    return __spreadValues({}, this._lockers || {});
  }
  /** Map of important system ids for the building */
  get systems() {
    return __spreadValues({}, this._systems || {});
  }
  /** Map of important phone numbers for the building */
  get phone_numbers() {
    return __spreadValues({}, this._phone_numbers || {});
  }
  /**
   * Get search map feature for the given level ID
   * @param level_id ID of level to grab features for
   */
  featuresForLevel(level_id) {
    return (this.searchables || []).filter((i) => i.level_id === level_id);
  }
};
var Region = class {
  constructor(_data) {
    this.id = _data.id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.timezone = _data.timezone || "";
    this.images = _data.images || [];
    this.bindings = _data.bindings || {};
    this.address = _data.address || "";
  }
};

// libs/common/src/lib/types/space.class.ts
var Space = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.display_name = data.display_name || "";
    this.email = (data.email || "").toLowerCase();
    this.capacity = data.capacity || -1;
    this.feature_list = data.feature_list || data.features || [];
    this.bookable = !!data.bookable;
    this.zones = data.zones || [];
    this.support_url = data.support_url || "";
    this.camera_url = data.camera_url || "";
    this.camera_snapshot_urls = Array.isArray(data.camera_snapshot_urls) ? data.camera_snapshot_urls.filter(Boolean) : data.camera_snapshot_url ? [data.camera_snapshot_url] : [];
    this.camera_snapshot_url = data.camera_snapshot_url || this.camera_snapshot_urls[0] || "";
    this.room_booking_url = data.room_booking_url || "";
    this.map_id = data.map_id || "";
    this.images = data.images || [];
    this.features = data.features || [];
    this.response_status = data.response_status || "tentative";
    this.level = data.level || new BuildingLevel();
    this.availability = data.availability || [];
    this.approval = data.approval ?? false;
    this.created_at = data.created_at ?? getUnixTime(Date.now());
  }
  inUseAt(start, duration) {
    const end = start + duration * 60 * 1e3;
    return this.availability.filter((i) => i.date == start && i.date + i.duration * 60 * 1e3 == end && i.status !== "free").length > 0;
  }
};

// libs/common/src/lib/types/event.class.ts
var _default_user = EMPTY_USER;
function setDefaultCreator(user) {
  if (user)
    _default_user = user;
}
var DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
function eventStatus(details) {
  if (details.status === "cancelled")
    return "declined";
  if (details.resources?.length) {
    if (details.resources.every((i) => i.response_status === "accepted" || i.response_status === "confirmed" || details.approved)) {
      return "approved";
    } else if (details.resources.some((i) => i.response_status === "tentative" || i.response_status === "needsAction")) {
      return "tentative";
    }
    return "declined";
  }
  return "approved";
}
function parseRecurrence(data) {
  const start = data.start || data.range_start * 1e3;
  let end = data.end || (data.range_end ? data.range_end * 1e3 : void 0);
  if (!end && data.occurrences > 1) {
    switch (data.pattern) {
      case "daily":
        end = addDays(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "weekly":
        end = addWeeks(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "month_day":
      case "monthly":
        end = addMonths(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        end = addDays(end, 7).valueOf();
        break;
      case "yearly":
        end = addYears(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
    }
  }
  return {
    range_start: getUnixTime(startOfDay(start)),
    range_end: getUnixTime(endOfDay(end)),
    interval: data.interval,
    pattern: data.pattern,
    nth_of_month: data.nth_of_month,
    days_of_week: data.days_of_week?.map((_2) => typeof _2 === "number" ? DAYS_OF_WEEK[_2] : _2) || []
  };
}
var CalendarEvent = class _CalendarEvent {
  get images() {
    return this.extension_data.images || [];
  }
  get is_all_day() {
    return this.all_day || this.duration >= 12 * 60;
  }
  get view_access() {
    return this.extension_data.view_access || "OPEN";
  }
  /** Get field from extension data */
  ext(key) {
    return this.extension_data[key];
  }
  constructor(data = {}) {
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    const custom_all_day = !!(data.extension_data?.custom_all_day || data.custom_all_day);
    this.id = data.event_id || data.id || "";
    this.event_start = data.event_start || getUnixTime(data.date || roundToNearestMinutes(addMinutes(/* @__PURE__ */ new Date(), 3), {
      nearestTo: 5
    }));
    this.event_end = data.event_end || getUnixTime(data.date_end || 0) || getUnixTime(addMinutes(this.event_start * 1e3, data.duration || 30));
    this.calendar = data.calendar || "";
    this.creator = (data.creator || _default_user.email)?.toLowerCase() || "";
    this.host = (data.host || this.creator || data.host_email || _default_user.email || "").toLowerCase();
    const attendees = data.attendees || [];
    const system_email = (data.system?.email || "").toLowerCase();
    const is_system_resource = (user) => !!user.resource || !!system_email && user.email?.toLowerCase() === system_email;
    this.attendees = attendees.filter((user) => !is_system_resource(user)).map((u2) => new User(u2));
    this.resources = unique(data.resources || attendees.filter((user) => is_system_resource(user)).map((s) => new Space(s)), "email") || [];
    this.title = data.title;
    this.body = (data.body || "").replace(/&lt;&lt;&lt;.*&gt;&gt;&gt;/g, "");
    this.is_system_event = (data.body || this.body).includes("main_event_id");
    this.private = !!data.private;
    this.all_day = !!data.all_day || custom_all_day;
    this.timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.date = this.event_start * 1e3 || this.date;
    this.date_end = this.event_end * 1e3 || this.date_end;
    this.duration = differenceInMinutes(this.date_end, this.date);
    if (this.all_day) {
      if (!data.duration && !data.date_end && !data.event_end) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = 24 * 60 - 1;
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      } else if (this.duration % (24 * 60) === 0) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = Math.max(1, this.duration - 1);
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      }
    }
    const matches = this.body.match(/\[ID\|([^\]]+)\]/);
    const associated_id = matches ? matches[1] : null;
    this.meeting_url = data.meeting_url || data.online_meeting_url || "";
    this.meeting_id = associated_id || data.meeting_id || data.online_meeting_id || "";
    this.meeting_provider = data.meeting_provider || data.online_meeting_provider || "";
    this.recurring = !!data.recurring;
    this.recurring_event_id = data.recurring_event_id || "";
    this.organiser = this.attendees.find((user) => user.email === this.host);
    this.from_bookings = data.from_bookings ?? false;
    this.master = data.master ? new _CalendarEvent(data.master) : null;
    this.mailbox = data.mailbox || "";
    this.ical_uid = data.ical_uid;
    this.linked_bookings = data.linked_bookings || [];
    this.update_master = data.update_master ?? false;
    if (data.recurring) {
      this.recurrence = {
        start: data.recurrence?.start || this.event_start * 1e3 || new Date(data.recurrence.range_start * 1e3).valueOf(),
        end: data.recurrence.end || new Date(data.recurrence.range_end * 1e3).valueOf(),
        interval: data.recurrence.interval,
        pattern: data.recurrence.pattern,
        occurrences: data.recurrence.occurrences,
        days_of_week: data.recurrence.days_of_week?.map((_2) => typeof _2 === "number" ? _2 : DAYS_OF_WEEK.indexOf(_2)) || [],
        nth_of_month: data.recurrence.nth_of_month
      };
    } else {
      this.recurrence = {};
    }
    const system = data.system;
    if (system?.email && !this.resources.find((_2) => _2.email.toLowerCase() === system.email.toLowerCase())) {
      this.resources.push(new Space(__spreadProps(__spreadValues({}, system), {
        response_status: data.status || "needsAction"
      })));
    }
    this.system = system || this.resources[0] || null;
    if (!system && data.system_id) {
      this.system = { id: data.system_id };
    }
    this.old_system = data.old_system || data.system;
    this.attachments = data.attachments || [];
    this.extension_data = data.extension_data || {};
    this.deleted = !!data.deleted;
    this.status = eventStatus(__spreadValues(__spreadValues({}, data), this)) || "none";
    this.location = data.location || this.space?.display_name || this.space?.name || "";
    this.setup_time = data.setup_time || 0;
    this.breakdown_time = data.breakdown_time || 0;
    this.visibility = data.visibility || "normal";
    this.type = this.deleted || this.status === "declined" ? "cancelled" : this.attendees.find((_2) => _2.is_external) ? "external" : "internal";
    for (const key in data) {
      if (!(key in this)) {
        this.extension_data[key] = data[key] || this.extension_data[key];
      }
    }
    const simple_event = {
      date: this.date,
      duration: this.duration,
      date_end: this.date_end,
      all_day: this.all_day,
      space: this.space,
      organiser: this.organiser
    };
    this.extension_data.catering = (this.extension_data.catering || []).map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: simple_event })));
    const linked_assets = this.linked_bookings.filter((_2) => _2.booking_type === "asset-request").map((_2) => _2.extension_data?.request).filter((_2) => !!_2);
    const asset_requests = (linked_assets.length ? linked_assets : this.extension_data.assets) || [];
    this.extension_data.images = this.extension_data.images || data.images || [];
    this.extension_data.view_access = this.extension_data.view_access || data.view_access || data.permission?.toUpperCase() || "OPEN";
    this.permission = data.view_access || data.permission || this.extension_data.view_access;
    if (this.extension_data.permission) {
      this.extension_data.permission = this.permission;
    }
    this.extension_data.assets = asset_requests.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: simple_event })));
  }
  /** List of external attendees associated with the event */
  get guests() {
    return this.attendees.filter((f) => !!f.is_external);
  }
  /** Primary space associated with the booking */
  get space() {
    return this.resources[0] || null;
  }
  get is_today() {
    return isSameDay(this.date, Date.now());
  }
  get valid_catering() {
    return (this.ext("catering") || []).filter((order) => order.deliver_at < this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.ext("assets") || []).map((request) => new AssetRequest(__spreadProps(__spreadValues({}, request), { event: this }))).filter((request) => request.deliver_at < this.date_end).map((request) => {
      const booking = list.find((_2) => _2.extension_data.request_id === request.id);
      if (booking) {
        request.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  /**
   * Convert class data to simple JSON object
   */
  toJSON() {
    const obj = __spreadValues({}, this);
    const is_full_day_period = this.all_day && getUnixTime(this.date) === getUnixTime(startOfDayInTimezone(this.date, this.timezone)) && getUnixTime(this.date_end) === getUnixTime(endOfDayInTimezone(this.date_end, this.timezone));
    const is_custom_all_day = this.all_day && !is_full_day_period;
    const date = is_full_day_period ? startOfDayInTimezone(this.date, this.timezone) : this.date;
    const end = is_full_day_period ? endOfDayInTimezone(this.date_end, this.timezone) + 1 : this.date_end;
    obj.event_start = getUnixTime(date);
    obj.event_end = getUnixTime(end);
    const attendees = this.attendees;
    this.recurring = this.recurrence?.pattern && this.recurrence._pattern !== "none";
    if (this.recurring) {
      obj.recurrence = parseRecurrence(__spreadProps(__spreadValues({}, this.recurrence), {
        start: this.recurrence.start || this.date
      }));
      delete obj.recurrence.start;
      delete obj.recurrence.end;
    }
    obj.recurrence = obj.recurrence ? Object.keys(obj.recurrence).length ? obj.recurrence : null : null;
    obj.attendees = unique([
      ...attendees,
      ...this.resources.map((_2) => __spreadProps(__spreadValues({}, _2), { resource: true }))
    ], "email");
    if (this.all_day) {
      obj.setup_time = 0;
      obj.breakdown_time = 0;
      obj.extension_data.all_day_date = format(date, "yyyy-MM-dd");
    }
    if (is_custom_all_day) {
      obj.all_day = false;
      obj.extension_data.custom_all_day = true;
    } else {
      if (this.id) {
        obj.extension_data.custom_all_day = false;
      } else {
        delete obj.extension_data.custom_all_day;
      }
    }
    obj.extension_data.catering = obj.extension_data.catering.map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.extension_data.assets = obj.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.system_id = this.system?.id;
    obj.online_meeting_provider = this.meeting_provider;
    for (const key of [
      "catering",
      "date",
      "date_end",
      "duration",
      "status",
      "linked_bookings",
      "_valid_asset_cache",
      "_valid_cache_expiry",
      "type"
    ]) {
      if (key in obj)
        delete obj[key];
    }
    if (!obj.update_master)
      delete obj.recurring_event_id;
    removeEmptyFields(obj);
    return obj;
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
  get can_check_in() {
    const now = /* @__PURE__ */ new Date();
    return this.is_today || isAfter(now, addMinutes(this.date, -5)) && isBefore(now, addMinutes(this.date, this.duration));
  }
};

// libs/common/src/lib/user-state.ts
var GroupPermission;
(function(GroupPermission2) {
  GroupPermission2[GroupPermission2["Read"] = 1] = "Read";
  GroupPermission2[GroupPermission2["Create"] = 2] = "Create";
  GroupPermission2[GroupPermission2["Update"] = 4] = "Update";
  GroupPermission2[GroupPermission2["Delete"] = 8] = "Delete";
  GroupPermission2[GroupPermission2["Operate"] = 16] = "Operate";
  GroupPermission2[GroupPermission2["Approve"] = 32] = "Approve";
  GroupPermission2[GroupPermission2["Manage"] = 64] = "Manage";
  GroupPermission2[GroupPermission2["Share"] = 128] = "Share";
})(GroupPermission || (GroupPermission = {}));
var ALL_PERMISSIONS = [
  GroupPermission.Read,
  GroupPermission.Create,
  GroupPermission.Update,
  GroupPermission.Delete,
  GroupPermission.Operate,
  GroupPermission.Approve,
  GroupPermission.Manage,
  GroupPermission.Share
];
var _current_user = new BehaviorSubject(EMPTY_USER);
var _change = new BehaviorSubject(0);
var current_user = _current_user.asObservable();
var user_groups = signal(
  [],
  ...ngDevMode ? [{ debugName: "user_groups" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_groups_loaded = signal(
  false,
  ...ngDevMode ? [{ debugName: "user_groups_loaded" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_signal = signal(
  EMPTY_USER,
  ...ngDevMode ? [{ debugName: "user_signal" }] : (
    /* istanbul ignore next */
    []
  )
);
_current_user.subscribe((u2) => user_signal.set(u2));
function sameGroups(a, b) {
  if (a.length !== b.length)
    return false;
  const set2 = new Set(a);
  return b.every((group) => set2.has(group));
}
var user_group_names = computed(() => user_signal().groups || [], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "user_group_names" } : (
  /* istanbul ignore next */
  {}
)), { equal: sameGroups }));
var PERMISSION_VALUES = [
  ["read", GroupPermission.Read],
  ["create", GroupPermission.Create],
  ["update", GroupPermission.Update],
  ["delete", GroupPermission.Delete],
  ["operate", GroupPermission.Operate],
  ["approve", GroupPermission.Approve],
  ["manage", GroupPermission.Manage],
  ["share", GroupPermission.Share]
];
function isTestRuntime() {
  return typeof jest !== "undefined" || typeof vi !== "undefined";
}
var USER_CACHE_KEY = "PLACEOS.user";
var MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1e3;
function tokenID() {
  const value = J() || "";
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = hash * 31 + value.charCodeAt(i) | 0;
  }
  return `${hash}`;
}
function cachedUserData() {
  try {
    const cache = JSON.parse(localStorage.getItem(USER_CACHE_KEY) || "null");
    if (!cache?.cached_at || cache.token_id !== tokenID() || cache.cached_at + MAX_CACHE_AGE < Date.now()) {
      localStorage.removeItem(USER_CACHE_KEY);
      return null;
    }
    return cache;
  } catch {
    localStorage.removeItem(USER_CACHE_KEY);
    return null;
  }
}
function storeUserData() {
  const user = currentUser();
  if (isEmptyUser(user) || isPublicMode())
    return;
  try {
    const cache = {
      cached_at: Date.now(),
      token_id: tokenID(),
      user: __spreadValues({}, user)
    };
    localStorage.setItem(USER_CACHE_KEY, JSON.stringify(cache));
  } catch {
  }
}
function applyCachedUserData() {
  const cache = cachedUserData();
  if (!cache)
    return false;
  const user = new StaffUser(cache.user);
  _current_user.next(user);
  setDefaultCreator(user);
  return true;
}
var user_permissions = computed(
  () => {
    const permissions = {
      read: [],
      create: [],
      update: [],
      delete: [],
      operate: [],
      approve: [],
      manage: [],
      share: []
    };
    const permission_sets = PERMISSION_VALUES.reduce((sets, [permission_name]) => {
      sets[permission_name] = /* @__PURE__ */ new Set();
      return sets;
    }, {});
    for (const { group, permissions: group_permissions } of user_groups()) {
      for (const subsystem of group.subsystems || []) {
        for (const [permission_name, permission_value] of PERMISSION_VALUES) {
          if (group_permissions & permission_value) {
            permission_sets[permission_name].add(subsystem);
          }
        }
      }
    }
    for (const [permission_name] of PERMISSION_VALUES) {
      permissions[permission_name] = [
        ...permission_sets[permission_name]
      ].sort();
    }
    return permissions;
  },
  ...ngDevMode ? [{ debugName: "user_permissions" }] : (
    /* istanbul ignore next */
    []
  )
);
function setPublicUser() {
  const generic_user = new StaffUser({
    id: "public-user",
    name: "Public User",
    email: "public.user@placeos.example"
  });
  _current_user.next(generic_user);
  return generic_user;
}
async function loadUserGroups() {
  user_groups_loaded.set(false);
  if (isPublicMode()) {
    user_groups.set([]);
    user_groups_loaded.set(true);
    return;
  }
  try {
    const groups = await Cu({});
    user_groups.set(groups);
    console.log("Permissions:", user_permissions());
  } catch (error) {
    console.warn("Failed to load user groups.", error);
    user_groups.set([]);
  } finally {
    user_groups_loaded.set(true);
  }
}
function initialiseUser() {
  if (isTestRuntime())
    return;
  const is_public_mode = isPublicMode();
  if (!is_public_mode)
    applyCachedUserData();
  const user_request = combineLatest([th("current"), _change]).pipe(map(([i]) => new StaffUser(i)));
  if (is_public_mode) {
    user_request.pipe(catchError((error) => {
      console.warn("User loading failed in public mode, using local public user data.", error);
      return of(setPublicUser());
    })).subscribe((user) => _current_user.next(user));
    return;
  }
  user_request.pipe(retry({
    count: 10,
    delay: (error, count) => {
      const delay_ms = Math.min(1e3 * Math.pow(2, count), 3e4);
      console.warn(`User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`, error);
      return timer(delay_ms);
    }
  })).subscribe((user) => applyUser(user));
}
function applyUser(user) {
  _current_user.next(user);
  setDefaultCreator(user);
  storeUserData();
  return loadUserGroups();
}
function reloadUserData() {
  setTimeout(async () => {
    try {
      const p_user = await th("current");
      applyUser(new StaffUser(p_user));
    } catch (error) {
      if (isPublicMode()) {
        console.warn("User reload failed in public mode, using local public user data.", error);
        setPublicUser();
        return;
      }
      throw error;
    }
  }, 300);
}
function currentUser() {
  return _current_user.getValue() || EMPTY_USER;
}
function hasPermission(subsystem, permissions) {
  if (user_signal().groups?.includes("placeos_admin"))
    return true;
  return (getPermissionMask(subsystem) & permissions) === permissions;
}
function getPermissionMask(subsystem) {
  let permissions = 0;
  for (const { group, permissions: group_permissions } of user_groups()) {
    if (group.subsystems?.includes(subsystem)) {
      permissions |= group_permissions;
    }
  }
  return permissions;
}
setTimeout(() => initialiseUser(), 50);

// libs/common/src/lib/google-analytics.service.ts
var GoogleAnalyticsService = class _GoogleAnalyticsService {
  constructor() {
    this.enabled = true;
    this.app_name = "GA_APP";
    this._ga4 = false;
    this.timers = {};
  }
  init(tracking_id = "") {
    if (!this.enabled)
      return;
    this._ga4 = !!tracking_id?.startsWith("G-");
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      if (this._ga4) {
        window.gtag("js", /* @__PURE__ */ new Date());
      } else {
        window.dataLayer.push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
      }
      const script = document.createElement("script");
      script.async = true;
      script.src = this._ga4 ? `https://www.googletagmanager.com/gtag/js?id=${tracking_id}` : `https://www.googletagmanager.com/gtm.js?id=${tracking_id}`;
      const first_script = document.getElementsByTagName("script")[0];
      if (first_script?.parentNode) {
        first_script.parentNode.insertBefore(script, first_script);
      } else {
        document.head.appendChild(script);
      }
      log("Analytics", "Service", "Injected Google Analytics into page");
    }
    this.service = window.gtag;
  }
  push(obj) {
    window.dataLayer.push(obj);
  }
  /**
   * Initialise Google Analytics
   * @param tracking_id GA Tracking ID
   */
  load(tracking_id) {
    if (!this.enabled) {
      throw new Error("Google Analytics needs to be enabled before being initialised");
    }
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    log("Analytics", "Service", `Setup with tracking ID: ${tracking_id}`);
    if (this._ga4) {
      this.service("config", tracking_id, { send_page_view: false });
      return;
    }
    this.page("");
  }
  /**
   * Set User ID for the Google Analytics session
   * @param id Identifier of the User
   */
  setUser(id) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`user|${id}`, () => {
        log("Analytics", "Service", `Set user ID: ${id}`);
        if (this._ga4) {
          this.service("set", { user_id: id });
        } else {
          this.service("set", "userId", id);
        }
        this.event("authentication", this._ga4 ? "user_id_available" : "user-id available");
      }, 100);
    }
  }
  send(type, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`end|${type}`, () => {
        if (this._ga4) {
          this.service("event", type, value);
          return;
        }
        this.push(__spreadProps(__spreadValues({}, value), {
          event: "event"
        }));
      });
    }
  }
  /**
   * Post event to Google Analytics API
   * @param category Event Category
   * @param action Event action; use a valid GA4 event name for GA4 tracking IDs
   * @param label Event Label
   * @param value Event Value
   */
  event(category, action, label, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
        const l = label ? ", " + label : "";
        log("Analytics", "Service", `Event: ${category}, ${action}${l}${value ? ", " + value : ""}`);
        if (this._ga4) {
          this.service("event", action, {
            event_category: category,
            event_label: label,
            value
          });
          return;
        }
        this.push({
          event: "event",
          category,
          action,
          label
        });
      }, 100);
    }
  }
  /**
   * Post screen change event to Google Analytics API
   * @param name
   * @param app_name
   */
  screen(name, app_name) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (name && this.enabled) {
      this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
        log("Analytics", "Service", `Screen: ${name}${app_name ? ", " + app_name : ""}`);
        if (this._ga4) {
          this.service("event", "screen_view", {
            app_name: app_name || this.app_name,
            screen_name: name
          });
          return;
        }
        this.push({
          event: "screenview",
          appName: app_name || this.app_name,
          screenName: name
        });
      }, 100);
    }
  }
  /**
   * Post routing event to Google Analytics API
   * @param route Activated route
   * @param origin Add origin to routh path
   */
  page(route, origin = false) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${route}`, () => {
        log("Analytics", "Service", `Page: ${route}`);
        if (this._ga4) {
          const path = route || location.pathname;
          this.service("event", "page_view", {
            page_title: document.title,
            page_path: path,
            // Hash-routed SPAs hide the route in the URL
            // fragment, which GA4 strips when deriving the
            // page path. Send a full URL on the route so
            // each page has a distinct, reportable path.
            page_location: `${location.origin}${path}`
          });
          return;
        }
        this.push({
          event: "pageview",
          url: `${origin ? location.origin : ""}${route}`
        });
      }, 100);
    }
  }
  /**
   * Post timing event to Google Analytics API
   * @param category
   * @param variable
   * @param value
   * @param label
   */
  timing(category, variable, value, label) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
        log("Analytics", "Service", `Timing: ${category}, ${variable}, ${value}${label ? ", " + label : ""}`);
        if (this._ga4) {
          this.service("event", "timing_complete", {
            event_category: category,
            name: variable,
            value: Number(value) || 0,
            event_label: label
          });
          return;
        }
        this.push({
          event: "timing",
          category,
          variable,
          value,
          label
        });
      }, 100);
    }
  }
  /**
   * Creates a timeout for the given name used for preventing duplicate events in quick succession
   * @param name Name of timer
   * @param fn Timer callback
   * @param delay Timer delay
   */
  timeout(name, fn, delay = 300) {
    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
      delete this.timers[name];
    }
    this.timers[name] = setTimeout(() => {
      if (fn instanceof Function) {
        fn();
      }
      delete this.timers[name];
    }, delay);
  }
  static {
    this.\u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleAnalyticsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "597bdd6",
  "hash": "597bdd6",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "597bdd6",
  "semverString": null,
  "version": "1.12.0",
  "time": 1791551882830
};

// libs/common/src/lib/settings.service.ts
var _service3;
var _setting_signals = {};
var DEBUG_OVERRIDES_KEY = "PLACEOS.setting_overrides";
function loadDebugOverrides() {
  try {
    const overrides = JSON.parse(localStorage.getItem(DEBUG_OVERRIDES_KEY) || "{}");
    for (const key in overrides) {
      if (!key.startsWith("app."))
        delete overrides[key];
    }
    return overrides;
  } catch {
    return {};
  }
}
function setting(key) {
  return _service3 ? _service3.get(key) : void 0;
}
function settingSignal(key, default_value = void 0, root = false) {
  const full_key = root ? key : `app.${key}`;
  if (!_setting_signals[full_key]) {
    _setting_signals[full_key] = signal(setting(full_key) ?? default_value);
  }
  return _setting_signals[full_key];
}
var SettingsService = class _SettingsService extends AsyncHandler {
  /**
   * @hidden
   */
  setOverrides(value) {
    this._overrides.set(value);
    this._refreshSettings();
  }
  /** Set a local debug override for an `app.*` setting. `undefined` clears the key. */
  setDebugOverride(key, value) {
    if (!key.startsWith("app."))
      return;
    const overrides = __spreadValues({}, this._debug_overrides());
    if (value === void 0)
      delete overrides[key];
    else
      overrides[key] = value;
    this._debug_overrides.set(overrides);
    if (Object.keys(overrides).length) {
      localStorage.setItem(DEBUG_OVERRIDES_KEY, JSON.stringify(overrides));
    } else
      localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    this._refreshSettings();
  }
  clearDebugOverrides() {
    this._debug_overrides.set({});
    localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    this._refreshSettings();
  }
  _refreshSettings() {
    this._applyCssVariables();
    this._updateSignals();
    this._applyTheme();
    this._setFontSize();
    this._setPrintFontSize();
  }
  get theme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    return allow_dark_mode ? this.get("theme") : "light";
  }
  /** Get signal for key */
  listen(name) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    return this._subjects[name];
  }
  /** Update observable value for key */
  post(name, value) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    this._subjects[name].set(value);
  }
  value(name) {
    return !this._subjects[name] ? null : this._subjects[name]();
  }
  signal(name, default_value, root) {
    return settingSignal(name, default_value, root);
  }
  /** Page title */
  get title() {
    return this._title.getTitle();
  }
  set title(value) {
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id || this.get("app.analytics.enabled") === false)
      return;
    this._analytics?.send("pagename", { title: value });
  }
  constructor() {
    super();
    this._title = inject(Title);
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._app_name = "PlaceOS";
    this._overrides = signal(
      [],
      ...ngDevMode ? [{ debugName: "_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overrides = this._overrides.asReadonly();
    this._user_settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_user_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debug_overrides = signal(
      loadDebugOverrides(),
      ...ngDevMode ? [{ debugName: "_debug_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_overrides = this._debug_overrides.asReadonly();
    this._subjects = {};
    this._pending_settings = {};
    this.theme_signal = computed(
      () => {
        const allow_dark_mode = this.signal("allow_dark_mode", false)();
        return allow_dark_mode ? this.signal("theme", "light", true)() : "light";
      },
      ...ngDevMode ? [{ debugName: "theme_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format_signal = computed(
      () => this.signal("use_24_hour_time", false)() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    _service3 = this;
    const now = /* @__PURE__ */ new Date();
    const time = new Date(VERSION.time);
    const built = isSameDay(now, time) ? `Today at ${format(time, "h:mma")}` : format(time, "do MMM yyyy, h:mma");
    log("CORE", `${VERSION.semver}`, null, "debug", true);
    log("APP", `${VERSION.hash} | Built: ${built}`, null, "debug", true);
    this.init();
  }
  /**
   * Initialise the settings
   */
  async init() {
    if (this.get("debug"))
      window.debug = true;
    if (this.get("app")?.name) {
      this._app_name = this.get("app").name;
    }
    this._app_name = location.pathname.replace(/[\\/]/g, "").trim() || this._app_name;
    setAppName(this._app_name.split("-").join("_").toUpperCase());
    log("Settings", "Successfully loaded settings");
    this._initialised.next(true);
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.settings = this;
      window.setting = (key) => this.get(key);
    }
    const user = await this._currentUser();
    const data = await ac(user.id, "settings");
    this._user_settings.set(data.details || {});
    this._updateSignals();
    this.timeout("init", () => {
      this._initDarkMode();
      this._applyTheme();
      this._setFontSize();
      this._setPrintFontSize();
    }, 1e3);
  }
  /** Whether settings service has initialised */
  get app_name() {
    return this._app_name.replace(/ /g, "-");
  }
  get time_format() {
    return this.get("app.use_24_hour_time") ? "HH:mm" : "h:mm a";
  }
  /**
   * Get a setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  get(key) {
    const debug_overrides = this._debug_overrides();
    if (key in debug_overrides)
      return debug_overrides[key];
    const keys = key.split(".");
    if (keys[0] !== "app") {
      return getItemWithKeys(keys, this._pending_settings) ?? getItemWithKeys(keys, this._user_settings()) ?? getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
    const override_settings = [...this._overrides()];
    for (const override of override_settings) {
      const value = getItemWithKeys(keys.slice(1), override);
      if (value != null) {
        return value;
      }
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS);
  }
  saveUserSetting(name, value) {
    this._pending_settings[name] = value;
    this._updateSignals();
    if (name === "dark_mode")
      this.setTheme(value ? "dark" : "");
    if (name === "font_size")
      this._setFontSize();
    this.timeout("save_settings", () => this._savePendingChanges(), 2400);
  }
  async updateLocatable(locatable) {
    await sh(currentUser().id, { locatable }, "patch");
    reloadUserData();
  }
  overrideCssVariable(key, value, important = false) {
    let element = document.getElementById(`css-var-overrides+${key}`);
    if (!element) {
      element = document.createElement("style");
      element.id = `css-var-overrides+${key}`;
      document.head.appendChild(element);
    }
    element.innerText = `html, body { --${key}: ${value} ${important ? "!important" : ""}}`;
  }
  setTheme(theme) {
    const current_theme = this.theme;
    if (current_theme === theme)
      return;
    this.saveUserSetting("theme", theme);
    this._applyTheme();
  }
  _applyCssVariables() {
    const variable_map = this.get("app.css_variables") || {};
    let css_string = "body { ";
    for (const key in variable_map) {
      css_string += `--${key}: ${variable_map[key]}; `;
    }
    css_string += "}";
    let element = document.getElementById("css-var-overrides");
    if (!element) {
      element = document.createElement("style");
      element.id = "css-var-overrides";
      document.head.appendChild(element);
    }
    element.innerText = css_string;
  }
  async _savePendingChanges() {
    const user = currentUser();
    if (!user?.id || !Object.keys(this._pending_settings).length)
      return;
    this._updateSignals();
    await hc(user.id, {
      name: "settings",
      description: "",
      details: __spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings)
    });
    this._user_settings.set(__spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings));
    this._pending_settings = {};
  }
  _setFontSize() {
    if (!this.get("font_size"))
      return;
    this.overrideCssVariable("font-size", `${this.get("font_size")}px`);
  }
  _applyTheme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    this._clearTheme();
    if (!allow_dark_mode)
      return;
    document.body.classList.add(`theme-${this.theme}`);
  }
  _clearTheme() {
    const class_list = document.body.classList.value.split(" ");
    for (const item of class_list) {
      if (item.startsWith("theme-")) {
        document.body.classList.remove(item);
      }
    }
  }
  _setPrintFontSize() {
    let print_style_el = document.getElementById("placeos-print-block");
    if (!print_style_el) {
      print_style_el = document.createElement("style");
      print_style_el.id = "placeos-print-block";
      document.head.appendChild(print_style_el);
    }
    print_style_el.innerText = `@media print { html, body { font-size: ${this.get("app.print_font_size") || "4mm"}; } }`;
  }
  _initDarkMode() {
    if (this.theme)
      return;
    const os_dark = window?.matchMedia ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches : false;
    this.setTheme(os_dark ? "dark" : "");
  }
  _updateSignals() {
    for (const key in _setting_signals) {
      _setting_signals[key].update((old) => this.get(key) ?? old);
    }
  }
  _currentUser() {
    return new Promise((resolve) => {
      const check = () => {
        const user = currentUser();
        if (user?.id)
          return resolve(user);
        this.timeout("current_user", check, 100);
      };
      check();
    });
  }
  static {
    this.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/fixed-device-helpers.ts
var _wake_lock = null;
async function requestScreenWakeLock() {
  if (!_s())
    return;
  if (_wake_lock)
    await _wake_lock.release();
  if (document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  } else {
    setTimeout(() => requestScreenWakeLock(), 1e3);
  }
}
document.addEventListener("visibilitychange", async () => {
  if (_wake_lock !== null && document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  }
});

// libs/common/src/lib/constants.ts
var SECONDS = 1e3;
var MINUTES = 60 * SECONDS;
var HOURS = 60 * MINUTES;
var DAYS = 24 * HOURS;
var MINUTE = 60 * SECONDS;
var HOUR = 60 * MINUTES;
var DAY = 24 * HOURS;

// libs/common/src/lib/application.ts
var _timer;
var _initial_check;
var _version_subscription;
var _unrecoverable_subscription;
var _new_version = false;
var _auto_reload = false;
var _reload_gate = null;
var _reload_timer;
var _reload_deferred_since = 0;
var _init_reload = null;
var _init_reload_timer;
var _last_update_check = 0;
var _update_interval = 0;
var INIT_RELOAD_KEY = "PlaceOS.initialisation_reloads";
var INIT_RELOAD_WINDOW_MS = 5 * MINUTES;
var INIT_RELOAD_LIMIT = 3;
var INITIALISATION_FAILURE = signal(
  "",
  ...ngDevMode ? [{ debugName: "INITIALISATION_FAILURE" }] : (
    /* istanbul ignore next */
    []
  )
);
var INITIALISATION_COMPLETE = signal(
  false,
  ...ngDevMode ? [{ debugName: "INITIALISATION_COMPLETE" }] : (
    /* istanbul ignore next */
    []
  )
);
var RELOAD_RETRY_MS = 5 * SECONDS;
var MAX_RELOAD_DEFERRAL_MS = 10 * MINUTES;
var SERVICE_WORKER_UPDATE = signal(
  null,
  ...ngDevMode ? [{ debugName: "SERVICE_WORKER_UPDATE" }] : (
    /* istanbul ignore next */
    []
  )
);
function hasNewVersion() {
  return _new_version;
}
function serviceWorkerUpdate() {
  return SERVICE_WORKER_UPDATE.asReadonly();
}
function backendReachable() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return false;
  }
  return so();
}
function canReloadNow() {
  if (!backendReachable())
    return false;
  try {
    return _reload_gate ? _reload_gate() : true;
  } catch (error) {
    log("CACHE", "Reload gate failed.", error, "warn");
    return true;
  }
}
function reloadApp() {
  if (_reload_timer)
    clearTimeout(_reload_timer);
  _reload_timer = void 0;
  if (!_reload_deferred_since)
    _reload_deferred_since = Date.now();
  const waited = Date.now() - _reload_deferred_since;
  if (canReloadNow() || waited >= MAX_RELOAD_DEFERRAL_MS) {
    location.reload();
    return;
  }
  _reload_timer = setTimeout(reloadApp, RELOAD_RETRY_MS);
}
function reloadForNewVersion() {
  reloadApp();
}
function initialisationFailure() {
  return INITIALISATION_FAILURE.asReadonly();
}
function initialisationComplete() {
  return INITIALISATION_COMPLETE.asReadonly();
}
function failInitialisation(message2) {
  INITIALISATION_COMPLETE.set(false);
  INITIALISATION_FAILURE.set(message2);
}
function recentInitReloads(now = Date.now()) {
  try {
    const stored = JSON.parse(sessionStorage.getItem(INIT_RELOAD_KEY) || "[]");
    return stored instanceof Array ? stored.filter((at) => typeof at === "number" && now - at >= 0 && now - at < INIT_RELOAD_WINDOW_MS) : [];
  } catch {
    return [];
  }
}
function storeInitReloads(at) {
  try {
    sessionStorage.setItem(INIT_RELOAD_KEY, JSON.stringify(at));
  } catch {
  }
}
function markInitialisationComplete() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  cancelInitReload();
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(true);
}
function cancelInitReload() {
  if (_init_reload_timer)
    clearTimeout(_init_reload_timer);
  _init_reload_timer = void 0;
}
function retryInitialisation() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(false);
  location.reload();
}
function requestInitReload() {
  if (!backendReachable()) {
    if (_init_reload_timer)
      return;
    log("APP", "Initialisation failed while offline; restarting once online.", void 0, "warn");
    _init_reload_timer = setTimeout(() => {
      _init_reload_timer = void 0;
      requestInitReload();
    }, RELOAD_RETRY_MS);
    return;
  }
  cancelInitReload();
  if (_init_reload) {
    _init_reload();
    return;
  }
  const now = Date.now();
  const reloads = recentInitReloads(now);
  if (reloads.length >= INIT_RELOAD_LIMIT) {
    failInitialisation("The application could not finish starting. Check the connection, then try again.");
    return;
  }
  storeInitReloads([...reloads, now]);
  location.reload();
}
function stopUpdateChecks() {
  if (_timer)
    clearInterval(_timer);
  if (_initial_check)
    clearTimeout(_initial_check);
  _timer = void 0;
  _initial_check = void 0;
}
function cacheOptions(options = {}) {
  return typeof options === "number" ? { interval: options } : options;
}
function handleNewVersion() {
  if (_new_version)
    return;
  _new_version = true;
  stopUpdateChecks();
  if (_auto_reload)
    return reloadApp();
  SERVICE_WORKER_UPDATE.set({
    message: "New application version available",
    details: "Refresh to use the latest version.",
    action: "Refresh"
  });
}
function logVersionUpdate(event) {
  switch (event.type) {
    case "VERSION_DETECTED":
      log("CACHE", `Downloading application version ${event.version.hash}.`);
      return;
    case "VERSION_INSTALLATION_FAILED":
      log("CACHE", `Failed to install application version ${event.version.hash}.`, event.error, "warn");
      return;
    case "VERSION_READY":
      log("CACHE", `Application version ${event.latestVersion.hash} is ready.`, { current_version: event.currentVersion.hash });
      return;
    case "NO_NEW_VERSION_DETECTED":
      log("CACHE", `Application version ${event.version.hash} is up to date.`);
  }
}
function setupCache(cache, options = {}) {
  const { auto_reload = false, interval = 5 * MINUTES } = cacheOptions(options);
  _auto_reload = auto_reload;
  _update_interval = Math.max(interval, 1 * MINUTES);
  log("CACHE", `Service worker is ${cache.isEnabled ? "enabled" : "disabled"}.`);
  if (cache.isEnabled) {
    if (!_version_subscription) {
      _version_subscription = cache.versionUpdates.subscribe((event) => {
        logVersionUpdate(event);
        if (event.type !== "VERSION_READY" || _new_version)
          return;
        handleNewVersion();
      });
    }
    if (!_unrecoverable_subscription) {
      _unrecoverable_subscription = cache.unrecoverable.subscribe((event) => {
        log("CACHE", `Application cache is unrecoverable: ${event.reason}`, void 0, "error");
        _new_version = true;
        stopUpdateChecks();
        if (_auto_reload)
          return reloadApp();
        SERVICE_WORKER_UPDATE.set({
          message: "Application update failed to load",
          details: "Reload the app to recover.",
          action: "Reload"
        });
      });
    }
    if (_new_version) {
      if (_auto_reload)
        reloadApp();
      return;
    }
    stopUpdateChecks();
    _initial_check = setTimeout(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, 2 * SECONDS);
    _timer = setInterval(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, Math.max(interval, 1 * MINUTES));
  }
}
async function checkForUpdate(cache) {
  _last_update_check = Date.now();
  try {
    if (cache.isEnabled && await cache.checkForUpdate()) {
      log("CACHE", `Application update detected.`);
    }
  } catch (error) {
    log("CACHE", `Failed to check for application updates.`, error, "warn");
  }
}

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Service
  }], null, null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  text = "";
  attempts = 1;
  copied = new EventEmitter();
  _pending = /* @__PURE__ */ new Set();
  _destroyed = false;
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  copy(attempts = this.attempts) {
    attempts = Math.min(attempts, 50);
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule,
    imports: [CdkCopyToClipboard],
    exports: [CdkCopyToClipboard]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v2) => subscriber.next(v2));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message2) => message2.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message2) => message2.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message2) => message2.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message2) => message2.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// libs/common/src/lib/placeos.ts
var NATIVE_CREDENTIAL_FETCH_KEY = "__placeos_native_credential_fetch__";
var PLACE_SETUP_TIMEOUT = 10 * 1e3;
function randomString2(length = 43) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (value) => chars[value % chars.length]).join("");
}
async function sha256Base64Url(value) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  const bytes = Array.from(new Uint8Array(buffer), (byte) => String.fromCharCode(byte)).join("");
  return btoa(bytes).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function requestOrigin(input) {
  const request_url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input?.url;
  return request_url ? new URL(request_url, location.href).origin : "";
}
function setupNativeCredentialedFetch(urls) {
  if (typeof window.fetch !== "function")
    return;
  const window_state = window;
  const origins = urls.map((url) => new URL(url, location.href).origin);
  if (window_state[NATIVE_CREDENTIAL_FETCH_KEY]) {
    for (const origin of origins) {
      window_state[NATIVE_CREDENTIAL_FETCH_KEY].origins.add(origin);
    }
    return;
  }
  const state = {
    origins: new Set(origins),
    fetch: window.fetch.bind(window)
  };
  window_state[NATIVE_CREDENTIAL_FETCH_KEY] = state;
  window.fetch = (input, init) => {
    if (!state.origins.has(requestOrigin(input))) {
      return state.fetch(input, init);
    }
    return state.fetch(input, __spreadProps(__spreadValues({}, init), { credentials: "include" }));
  };
}
async function createNativeAuthUrl(settings, client_id) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const redirect_uri = await getNativeRedirectUri(settings.app_name, settings.domain);
  const nonce = randomString2(16);
  const verifier = randomString2();
  const challenge = await sha256Base64Url(verifier);
  localStorage.setItem(`${client_id}_nonce`, nonce);
  storeNativePkceVerifier(`${client_id}_challenge`, verifier);
  return `${url}/auth/oauth/authorize?response_type=code&client_id=${encodeURIComponent(client_id)}&state=${encodeURIComponent(nonce)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent("public")}&code_challenge_method=S256&code_challenge=${encodeURIComponent(challenge)}`;
}
async function setupPlace(settings, timeout_ms = PLACE_SETUP_TIMEOUT) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const route = (location.pathname + "/").replace("//", "/");
  const native = isNativeApp();
  const mock = settings.mock || location.href.includes("mock=true") || localStorage.getItem("mock") === "true";
  const config = {
    auth_type: "auth_code",
    scope: "public",
    host: host_with_port,
    secure: native || protocol === "https:",
    auth_uri: `${url}/auth/oauth/authorize`,
    token_uri: `${url}/auth/oauth/token`,
    redirect_uri: native ? await getNativeRedirectUri(settings.app_name, settings.domain) : `${location.origin}${route}oauth-resp.html`,
    storage: native ? "local" : settings.storage,
    handle_login: native ? false : !settings.local_login,
    use_iframe: !native,
    mock,
    delay: 300
  };
  if (native) {
    localStorage.setItem("trust", "true");
    setupNativeCredentialedFetch([config.auth_uri, config.token_uri]);
  }
  if (localStorage) {
    localStorage.setItem("mock", `${!!mock && !location.href.includes("mock=false")}`);
  }
  if (mock) {
    notifyInfo("Application in mock mode.");
  }
  Xr(settings.app_name || location.pathname.split("/").find(Boolean) || "PlaceOS", new Date(VERSION.time).toISOString(), VERSION.hash);
  const setup_promise = ro(config);
  if (timeout_ms <= 0)
    return setup_promise;
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("PlaceOS setup timed out.")), timeout_ms);
    setup_promise.then(() => {
      clearTimeout(timer2);
      resolve();
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}

// libs/common/src/lib/sentry.ts
var _sentry_handler = null;
var _trace_service = null;
var LazySentryErrorHandler = class extends ErrorHandler {
  handleError(error) {
    if (_sentry_handler)
      _sentry_handler.handleError(error);
    else
      super.handleError(error);
  }
};
async function initSentry(dsn, router, traces_sample_rate = 1) {
  if (!dsn || _sentry_handler)
    return;
  try {
    const Sentry = await import("./sentry-sdk-EC6YDATZ.js");
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: traces_sample_rate,
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [
        "localhost",
        /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
        /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/
      ]
    });
    _trace_service = new Sentry.TraceService(router);
    _sentry_handler = Sentry.createErrorHandler({ showDialog: false });
  } catch (error) {
    log("APP", "Failed to load Sentry.", error, "warn");
  }
}

// libs/common/src/lib/placeos.service.ts
var START_QUERY = location.search;
var AUTHORITY_WAIT_MS = 10 * 1e3;
var LOADING_MESSAGE = signal(
  "Loading...",
  ...ngDevMode ? [{ debugName: "LOADING_MESSAGE" }] : (
    /* istanbul ignore next */
    []
  )
);
var NEEDS_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "NEEDS_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
var DOMAIN_ERROR = signal(
  "",
  ...ngDevMode ? [{ debugName: "DOMAIN_ERROR" }] : (
    /* istanbul ignore next */
    []
  )
);
var AUTO_CONFIRM_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "AUTO_CONFIRM_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
function getLoadingMessage() {
  return LOADING_MESSAGE;
}
function setLoadingMessage(message2) {
  LOADING_MESSAGE.set(message2);
}
function needsNativeDomain() {
  return NEEDS_DOMAIN;
}
function nativeDomainError() {
  return DOMAIN_ERROR;
}
function autoConfirmNativeDomain() {
  return AUTO_CONFIRM_DOMAIN;
}
var _mocks = null;
function setMocks(value) {
  _mocks = value;
}
var PlaceOS_Service = class _PlaceOS_Service extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._locale = inject(LocaleService, { optional: true });
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._cache = inject(SwUpdate);
    this._snackbar = lazySnackbar();
    this._hotkey = inject(HotkeysService);
    this._clipboard = inject(Clipboard);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._maps = inject(MapsPeopleService);
    this._zone = "";
    this._region = "";
    this._initial_token = "";
    this._domain_resolve = null;
  }
  async _handleNativeAuthRedirect(url) {
    const callback_url = new URL(url);
    const params = callback_url.searchParams;
    await closeNativeBrowser();
    markNativeAuthRedirectConsumed(url);
    const error = params.get("error");
    if (error || !params.get("code")) {
      const message2 = params.get("error_description") || error || "Sign in failed. Please try again.";
      console.warn("[AUTH] Native sign in failed.", message2);
      setNativeAuthError(message2);
      location.replace(`${location.origin}${location.pathname}`);
      return;
    }
    sessionStorage.setItem("ENGINE.auth.params", JSON.stringify({
      code: params.get("code"),
      state: params.get("state")
    }));
    console.warn("[AUTH] Reloading webview with auth code...");
    location.replace(`${location.origin}${location.pathname}?${params.toString()}`);
  }
  get debug() {
    return window.debug && this._settings.get("app.allow_debugging") === true;
  }
  get has_chat() {
    return this._settings.get("app.chat.enabled");
  }
  get has_uploads() {
    return this._settings.get("app.has_uploads") || false;
  }
  set mocks(value) {
    _mocks = value;
  }
  setInitialToken(token) {
    this._initial_token = token || "";
  }
  /** Called by the native domain overlay once the user has set a domain. */
  onNativeDomainSet() {
    NEEDS_DOMAIN.set(false);
    DOMAIN_ERROR.set("");
    AUTO_CONFIRM_DOMAIN.set(false);
    this._domain_resolve?.();
    this._domain_resolve = null;
  }
  async init(options = {}) {
    if (isNativeApp()) {
      hideNativeStatusBar();
      restoreNativePkceVerifier();
      await bindNativeAuthRedirects((url) => {
        this._handleNativeAuthRedirect(url).catch((error) => console.warn("[AUTH] Error handling redirect.", error));
      });
      const launch_url = await consumeNativeAuthRedirect();
      if (launch_url) {
        await this._handleNativeAuthRedirect(launch_url);
        return;
      }
    }
    setupCache(this._cache);
    log("APP", "MOCKS:", _mocks);
    if (_mocks) {
      const mocks_enabled = !location.href.includes("mock=false") && (localStorage.getItem("mock") === "true" || location.href.includes("mock=true") || location.origin.includes("demo.place.tech"));
      if (mocks_enabled) {
        setLoadingMessage("Initializing mocks...");
        _mocks();
      }
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyM"], () => {
        localStorage.setItem("mock", `${localStorage.getItem("mock") !== "true"}`);
        location.reload();
      });
    } else {
      localStorage.removeItem("mock");
    }
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyD"], () => {
      this._settings.saveUserSetting("dark_mode", !this._settings.get("dark_mode"));
      notifySuccess("Toggled dark mode.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyC"], () => {
      this._clipboard.copy(`${J()}|${Et()}`);
      notifySuccess("Successfully copied token.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyV"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyF"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    window.pasteToken = (t) => this._pasteToken(t);
    setLoadingMessage("Checking params...");
    this._route.queryParamMap.subscribe((params) => {
      if (params.has("hide_nav"))
        localStorage.setItem("PlaceOS.hide_nav", "true");
      if (params.has("lang")) {
        const locale = params.get("lang");
        this._locale?.setLocale(locale);
        localStorage.setItem("PLACEOS.locale", locale);
      }
      if (params.has("x-api-key")) {
        to(params.get("x-api-key"));
      }
      if (params.has("region_id")) {
        this._region = params.get("region_id");
      }
      if (params.has("building_id")) {
        this._zone = params.get("building_id");
      }
      if (this._region || this._zone)
        this._setZones();
    });
    setLoadingMessage("Initializing settings...");
    setNotifyOutlet(this._snackbar);
    setTranslationService(this._locale);
    await firstTruthyValueFrom(this._settings.initialised);
    setAppName(this._settings.get("app.short_name"));
    const settings = this._settings.get("composer") || {};
    settings.app_name = this._settings.get("app.name") || this._settings.get("app.short_name");
    settings.mock = !!this._settings.get("mock") || _mocks && location.origin.includes("demo.place.tech");
    if (START_QUERY) {
      const query = Ce(START_QUERY.substring(1));
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: query
      });
    }
    let confirm_managed = false;
    if (isNativeApp()) {
      setLoadingMessage("Checking managed configuration...");
      const { config: managed, changed } = await syncNativeManagedConfig();
      if (managed) {
        if (options.allow_mdm_restart && managed.restart_enabled) {
          scheduleNativeRestart(managed.restart_time);
        }
        confirm_managed = changed && !!managed.domain && !managed.skip_interactive_setup;
        AUTO_CONFIRM_DOMAIN.set(confirm_managed && !!options.allow_mdm_restart && !!managed.api_key && !!managed.system_id);
      }
    }
    let intune_token = "";
    if (isNativeApp()) {
      setLoadingMessage("Checking managed account...");
      const account = await getIntuneAccount();
      if (account) {
        intune_token = await getIntuneToken(account, this._settings.get("app.intune.scopes") || void 0);
        const email = `${account.username || ""}`.trim();
        if (email && !getNativeDomain()) {
          const domain = await lookupNativeDomainByEmail(email).catch(() => "");
          if (domain) {
            setNativeDomain(domain);
            setNativeEmail(email);
          }
        }
      }
    }
    while (isNativeApp()) {
      let domain = getNativeDomain();
      while (!domain || confirm_managed) {
        confirm_managed = false;
        setLoadingMessage("Waiting for server configuration...");
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
        domain = getNativeDomain();
      }
      settings.domain = domain;
      settings.protocol = "https:";
      settings.use_domain = true;
      setLoadingMessage("Authenticating...");
      const auth_error = await setupPlace(settings).then(() => null).catch((_2) => _2);
      if (!auth_error) {
        const api_key = getNativeApiKey();
        const client_key = `${$i()}_x-api-key`;
        if (api_key)
          to(api_key);
        else if (localStorage.getItem(client_key)) {
          localStorage.removeItem(client_key);
          Cn();
        }
        if (intune_token)
          bi(intune_token);
        break;
      }
      log("APP", "Auth failed, resetting domain.", auth_error, "warn");
      clearNativeDomain();
      clearNativeApiKey();
      DOMAIN_ERROR.set(`Unable to connect to "${domain}". The server may be unavailable, or the email address may be for a different server. Try again.`);
    }
    if (isNativeApp() && !J(false)) {
      const boot_params = new URLSearchParams(START_QUERY);
      if (boot_params.has("code")) {
        console.warn("[AUTH] Auth code was present on load but the token exchange did not complete.", `State: "${boot_params.get("state")}"`, `Nonce: "${localStorage.getItem(`${$i()}_nonce`)}"`);
      }
    }
    if (isNativeApp() && !J(false) && !Et() && Mt()) {
      const auth_error = consumeNativeAuthError();
      if (auth_error) {
        setLoadingMessage("Waiting for sign in...");
        DOMAIN_ERROR.set(auth_error);
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
      }
      setLoadingMessage("Opening sign in...");
      const auth_url = await createNativeAuthUrl(settings, $i());
      console.warn(`[AUTH] Opening sign in: ${auth_url}`);
      await openNativeBrowser(auth_url);
      return;
    }
    if (!isNativeApp()) {
      setLoadingMessage("Authenticating...");
      await setupPlace(settings, AUTHORITY_WAIT_MS).catch((_2) => console.error(_2));
    }
    if (this._initial_token)
      bi(this._initial_token);
    try {
      await withTimeout(this._org.waitUntilInitialised(), 5e4, "Organisation loading timed out.");
    } catch (error) {
      console.error(error);
      requestInitReload();
      return;
    }
    if (this._locale) {
      this._locale.zone_id = this._org.organisation.id;
      this._locale.init();
    }
    setupCache(this._cache, this._settings.get("service_worker") || {});
    try {
      await withTimeout(firstTruthyValueFrom(current_user), 3e4, "Current user loading timed out.");
    } catch (error) {
      console.error(error);
      this.onInitError();
      return;
    }
    clearNativePkceVerifier();
    this._initLocale();
    setInternalUserDomain(this._settings.get("app.internal_user_domain") || `@${currentUser()?.email?.split("@")[1]}`);
    this._initAnalytics();
    void initSentry(this._settings.get("app.sentry_dsn"), this._router);
    try {
      this._initFixedDevice();
    } catch {
      log("APP", "Failed to initialise background services.", void 0, "warn");
    }
    this._setZones();
    if (this._locale) {
      await Promise.race([
        this._locale.loaded(),
        new Promise((resolve) => setTimeout(resolve, 5e3))
      ]);
    }
    markInitialisationComplete();
  }
  onInitError() {
    if (Un() || currentUser()?.is_logged_in)
      return;
    if (isNativeApp() && getNativeApiKey()) {
      clearNativeApiKey();
      clearNativeDomain();
      localStorage.removeItem(`${$i()}_x-api-key`);
      Cn();
    } else if (!J(false))
      Cn();
    requestInitReload();
  }
  _initAnalytics() {
    const tracking_id = this._settings.get("app.analytics.tracking_id");
    if (!this._analytics)
      return;
    this._analytics.enabled = this._settings.get("app.analytics.enabled") !== false;
    if (!tracking_id || !this._analytics.enabled)
      return;
    setLoadingMessage("Initialising analytics...");
    try {
      this._analytics.init(tracking_id);
      this._analytics.load(tracking_id);
      this._analytics.setUser(currentUser().id);
    } catch (error) {
      log("APP", "Failed to initialise analytics.", error, "warn");
      return;
    }
    if (tracking_id.startsWith("G-") && this._router.navigated) {
      this._analytics.page(this._router.url);
    }
    this.subscription("analytics-router", this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => this._analytics.page(event.urlAfterRedirects)));
  }
  _initLocale() {
    setLoadingMessage("Loading locales...");
    try {
      let locale = localStorage.getItem("PLACEOS.locale");
      const locales = this._settings.get("app.locales") || [];
      if (locale) {
        this._locale?.setLocale(locale);
      } else {
        const list = navigator.languages;
        for (const lang of list) {
          locale = locales.find((_2) => _2.id === lang);
          if (!locale)
            locale = locales.find((_2) => lang.includes(_2.id));
          if (locale) {
            this._locale?.setLocale(lang);
            localStorage.setItem("PLACEOS.locale", lang);
            break;
          }
        }
      }
    } catch {
      log("APP", "Failed to initialise locale service.", void 0, "warn");
    }
  }
  _pasteToken(tkn) {
    const parts = tkn.split("|");
    const id = $i();
    localStorage.setItem(`${id}_access_token`, `${parts[0]}`);
    localStorage.setItem(`${id}_refresh_token`, `${parts[1]}`);
    localStorage.setItem(`${id}_expires_at`, `${addHours(/* @__PURE__ */ new Date(), 6).valueOf()}`);
    notifySuccess("Successfully pasted token.");
    setTimeout(() => location.reload(), 2e3);
  }
  _checkReload() {
    if (!hasNewVersion())
      return;
    setLoadingMessage("Checking for updates...");
    reloadForNewVersion();
  }
  async _initFixedDevice() {
    if (!_s())
      return;
    setLoadingMessage("Initialising as fixed device...");
    this.interval("auto-update-version", () => this._checkReload(), 15 * 1e3);
    await requestScreenWakeLock();
  }
  _setZones() {
    if (this._region || this._zone) {
      this._org.skipAutoSelection();
    }
    this.timeout("set_building+region", async () => {
      const building_list = this._org.building_list();
      let bld = building_list.find((b) => b.id === this._zone);
      const target_region_id = this._region || bld?.parent_id;
      const region = this._org.regions.find((b) => b.id === target_region_id);
      if (region)
        await this._org.setRegion(region);
      if (!bld && this._zone) {
        const building_list2 = this._org.building_list();
        bld = building_list2.find((b) => b.id === this._zone);
      }
      if (bld)
        this._org.setBuilding(bld, true);
    }, 1e3);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PlaceOS_Service_BaseFactory;
      return function PlaceOS_Service_Factory(__ngFactoryType__) {
        return (\u0275PlaceOS_Service_BaseFactory || (\u0275PlaceOS_Service_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceOS_Service)))(__ngFactoryType__ || _PlaceOS_Service);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceOS_Service, factory: _PlaceOS_Service.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceOS_Service, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/signal.utilities.ts
function firstValueWhere(value, predicate = (_2) => !!_2, injector) {
  const current = untracked(value);
  if (predicate(current))
    return Promise.resolve(current);
  return new Promise((resolve) => {
    let ref;
    ref = untracked(() => effect(() => {
      const current2 = value();
      if (!predicate(current2))
        return;
      ref.destroy();
      resolve(current2);
    }, { injector }));
  });
}

// libs/common/src/lib/org/organisation.service.ts
var log2 = scoped_log("ORG");
var ORG_CACHE_PREFIX = "PLACEOS.org";
var ZONE_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.zones`;
var AUTHORITY_CACHE_KEY = `${ORG_CACHE_PREFIX}.authority`;
var OFFLINE_BOOT_DELAY = 10 * 1e3;
var ZONE_LOAD_TIMEOUT = 30 * 1e3;
var GEOLOCATION_TIMEOUT = 10 * 1e3;
var METADATA_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.metadata`;
var MAX_CACHE_AGE2 = 7 * 24 * 60 * 60 * 1e3;
function cachedAuthority() {
  const auth = Mt();
  if (auth?.id) {
    const details = {
      id: auth.id,
      metadata_cache_id: `${auth.config?.["metadata_cache_id"] || ""}`
    };
    try {
      localStorage.setItem(AUTHORITY_CACHE_KEY, JSON.stringify(details));
    } catch {
    }
    return details;
  }
  try {
    return JSON.parse(localStorage.getItem(AUTHORITY_CACHE_KEY) || "null");
  } catch {
    return null;
  }
}
var OrganisationService = class _OrganisationService {
  get _refreshing() {
    return this.refreshing();
  }
  /** Mapping of organisation settings overrides */
  get settings() {
    return this._settings;
  }
  /** Mapping of regions to settings overrides */
  get region_settings() {
    return this._region_settings;
  }
  /** Mapping of buildings to settings overrides */
  get building_settings() {
    return this._building_settings;
  }
  /** Mapping region settings overrides */
  regionSettings(id = "") {
    const region = this._active_region();
    if (!id && region)
      id = region?.id;
    return this._region_settings ? this._region_settings[id] || {} : {};
  }
  /** Mapping building settings overrides */
  buildingSettings(bld_id = "") {
    if (!bld_id && this.building) {
      bld_id = this.building?.id || this.buildings[0]?.id;
    }
    return this._building_settings ? this._building_settings[bld_id] || {} : {};
  }
  /** Organisation data for the application */
  get organisation() {
    return this._organisation;
  }
  /** List of available regions */
  get regions() {
    return this._region_list();
  }
  /** Currently active region */
  get region() {
    return this._active_region();
  }
  set region(item) {
    this.setRegion(item);
  }
  /** Prevent automatic building/region selection from overriding externally set values */
  skipAutoSelection() {
    this._skip_auto_selection = true;
  }
  async setRegion(item) {
    const active_region = this._active_region();
    if (!item || active_region?.id === item?.id)
      return;
    this._active_region.set(item);
    await this.loadRegionData(item);
    this._setBuildingFromTimezone();
    if (!this._skip_auto_selection && this.building?.parent_id !== item.id && this.buildingsForRegion(item).length) {
      this.building = this.buildingsForRegion(item)[0];
    } else
      this._updateSettingOverrides();
    localStorage.setItem("PLACEOS.region", item.id);
  }
  /** List of available buildings */
  get buildings() {
    return this._building_list() || [];
  }
  /** Currently active building */
  get building() {
    return this._active_building();
  }
  set building(bld) {
    this.setBuilding(bld);
  }
  setBuilding(bld, save = false) {
    if (!(bld instanceof Object))
      return;
    this._active_building.set(bld);
    if (!this._service.get("dont_load_metadata")) {
      this.loadBuildingData(bld).then(() => this._updateSettingOverrides());
    }
    if (this.regions.length && this.region?.id !== bld.parent_id) {
      this.region = this.regions.find((_2) => _2.id === this.building.parent_id);
    }
    if (save)
      localStorage.setItem("PLACEOS.building", bld.id);
  }
  get timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get currency_code() {
    return this._service.get("app.currency") || this.building?.currency || "USD";
  }
  /** Get binding value from the building/organisation */
  binding(name) {
    return this.building?.bindings[name] || this._organisation?.bindings[name];
  }
  module(name, default_mod_id = "System") {
    const binding = this.binding(name);
    const system_id = binding instanceof Object ? binding.id || binding.system_id : binding;
    const mod_id = (binding instanceof Object ? binding.mod || binding.module : "") || default_mod_id;
    return !system_id || !mod_id ? null : Gp(system_id, mod_id);
  }
  /** Get building by id */
  find(id) {
    return this._buildings_by_id().get(id);
  }
  /** List of available levels */
  get levels() {
    return this._level_list();
  }
  set limit_init(state) {
    this._limited_init.set(state);
  }
  constructor() {
    this._service = inject(SettingsService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this._region_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_region_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_region = signal(
      new Region({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._building_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_building_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_building = signal(
      new Building({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_level_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._regions_by_id = computed(
      () => new Map(this._region_list().map((region) => [
        region.id,
        region
      ])),
      ...ngDevMode ? [{ debugName: "_regions_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._buildings_by_id = computed(
      () => new Map(this._building_list().map((building) => [
        building.id,
        building
      ])),
      ...ngDevMode ? [{ debugName: "_buildings_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._levels_by_id = computed(
      () => new Map(this._level_list().map((level) => [
        level.id,
        level
      ])),
      ...ngDevMode ? [{ debugName: "_levels_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_data = {};
    this._served_cache = false;
    this._refresh_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "_refresh_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refreshing = computed(
      () => this._refresh_count() > 0,
      ...ngDevMode ? [{ debugName: "refreshing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_buildings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loaded_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._limited_init = signal(
      false,
      ...ngDevMode ? [{ debugName: "_limited_init" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.app_key = `${(this._service.app_name || "workplace").toLowerCase()}_app`;
    this.region_list = this._region_list.asReadonly();
    this.building_list = this._building_list.asReadonly();
    this.level_list = this._level_list.asReadonly();
    this.active_region = this._active_region.asReadonly();
    this.active_building = this._active_building.asReadonly();
    this.active_building_loaded = computed(
      () => {
        if (this._service.get("dont_load_metadata"))
          return true;
        const id = this._active_building()?.id;
        return !id || this._loaded_buildings().includes(id);
      },
      ...ngDevMode ? [{ debugName: "active_building_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_buildings = computed(
      () => {
        const region = this._active_region();
        return region ? this.buildingsForRegion(region) : this.buildings;
      },
      ...ngDevMode ? [{ debugName: "active_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_levels = computed(
      () => {
        const building = this._active_building();
        return building ? this.levelsForBuilding(building) : [];
      },
      ...ngDevMode ? [{ debugName: "active_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._organisation = new Organisation();
    this._settings = [];
    this._region_settings = {};
    this._building_settings = {};
    this._skip_auto_selection = false;
    this._init_timer = null;
    this._zone_load_timer = null;
    this._override_timer = null;
    const online_state = io();
    const online = Yr(online_state, (_2) => _2);
    const start = Promise.race([
      online,
      new Promise((resolve) => setTimeout(resolve, OFFLINE_BOOT_DELAY))
    ]);
    start.then(() => this._scheduleInit());
    online_state.subscribe((is_online, was_online) => {
      if (is_online && !was_online)
        this._scheduleInit();
    }, { emitCurrent: false });
    effect(() => {
      this._active_region();
      const building = this._active_building();
      if (building)
        this._updateSettingOverrides();
    });
  }
  _scheduleInit() {
    if (this._init_timer)
      clearTimeout(this._init_timer);
    this._init_timer = setTimeout(() => {
      this._init_timer = null;
      if (!this._initialised()) {
        this._startZoneLoadTimer();
        this.init();
      }
    }, 1e3);
  }
  _startZoneLoadTimer() {
    if (this._zone_load_timer)
      return;
    this._zone_load_timer = setTimeout(() => {
      this._zone_load_timer = null;
      if (!this._initialised())
        requestInitReload();
    }, ZONE_LOAD_TIMEOUT);
  }
  _completeInit() {
    if (this._zone_load_timer)
      clearTimeout(this._zone_load_timer);
    this._zone_load_timer = null;
    this._initialised.set(true);
  }
  /** Resolve once the organisation data has finished initialising */
  async waitUntilInitialised() {
    await firstValueWhere(this.initialised, (state) => state, this._injector);
  }
  /**
   * Get level with a matching ID
   * @param id_list List of IDs to find a match
   */
  levelWithID(id_list) {
    for (const id of id_list || []) {
      const level = this._levels_by_id().get(id);
      if (level)
        return level;
    }
    return void 0;
  }
  /** Get the organisation location represented by a list of zone IDs. */
  locationWithID(id_list) {
    const level = this.levelWithID(id_list);
    const building = this._buildingWithID(id_list) || this._buildings_by_id().get(level?.parent_id);
    const region = this._regions_by_id().get(building?.parent_id);
    const label = [region, building, level].map((_2) => _2?.display_name || _2?.name).filter((_2) => !!_2).join(" / ");
    return { level, building, region, label };
  }
  /** Load and return every building represented by the zone ID lists. */
  async loadBuildingsForZones(zone_lists) {
    const find_buildings = () => unique(zone_lists.map((zones) => this._buildingWithID(zones)).filter((building) => !!building), "id");
    let buildings = find_buildings();
    const has_missing_building = () => zone_lists.some((zones) => !this._buildingWithID(zones));
    if (has_missing_building()) {
      await this._loadAllBuildings();
      buildings = find_buildings();
    }
    return buildings;
  }
  /**
   * Get list of levels for the given building
   * @param bld Building to list levels for
   */
  levelsForBuilding(bld = this.building) {
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && lvl.parent_id === bld?.id));
  }
  /**
   * Get list of buildings for the given region
   * @param region Region to list buildings for
   */
  buildingsForRegion(region = this.region) {
    return this.buildings.filter((bld) => bld.parent_id === region?.id);
  }
  /**
   * Get list of levels for the given region
   * @param region Region to list levels for
   */
  levelsForRegion(region = this.region) {
    const building_ids = new Set(this.buildingsForRegion(region).map(({ id }) => id));
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && building_ids.has(lvl.parent_id)));
  }
  /** Get the first building represented by a list of zone IDs. */
  _buildingWithID(id_list) {
    for (const id of id_list || []) {
      const building = this._buildings_by_id().get(id);
      if (building)
        return building;
    }
    return void 0;
  }
  addZone(zone) {
    if (zone.tags.includes("region")) {
      const region = new Region(zone);
      const regions = this._region_list().filter((_2) => _2.id !== region.id);
      regions.push(region);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const bld = new Building(zone);
      let buildings = this._building_list().filter((_2) => _2.id !== bld.id);
      buildings.push(bld);
      buildings = buildings.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const lvl = new BuildingLevel(zone);
      let levels = this._level_list().filter((_2) => _2.id !== lvl.id);
      levels.push(lvl);
      levels = this._sortLevels(levels);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to add zone as it is missing the required tag.", zone.id);
    }
  }
  _sortLevels(levels) {
    return [...levels].sort((a, b) => (a.parent_id || "").localeCompare(b.parent_id || "") || Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || "") || (a.display_name || "").localeCompare(b.display_name || ""));
  }
  removeZone(zone) {
    if (zone.tags.includes("region")) {
      const regions = this._region_list().filter((_2) => _2.id !== zone.id);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const buildings = this._building_list().filter((_2) => _2.id !== zone.id);
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const levels = this._level_list().filter((_2) => _2.id !== zone.id);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to remove zone as it is missing the required tag.", zone.id);
    }
  }
  /** Clear cached org data and reload it from PlaceOS. Exposed via window.app.org in debug mode. */
  async reloadMetadata() {
    this._clearCache();
    this._loaded_data = {};
    this._loaded_buildings.set([]);
    await this.load();
  }
  async init(tries = 0) {
    if (this._limited_init()) {
      this._completeInit();
      return;
    }
    this._initialised.set(false);
    if (isPublicMode()) {
      await this.load().catch((err) => {
        console.warn("Organisation loading failed in public mode, using local public organisation data.", err);
        this._setPublicData();
      });
    } else {
      try {
        await this.load();
      } catch (err) {
        if (so() && navigator.onLine !== false) {
          notifyError("Error loading organisation data. Retrying...");
        } else {
          log2.warn("Unable to load organisation data while offline. Retrying...", err);
        }
        setTimeout(() => this.init(tries), Math.min(1e4, 300 * ++tries));
        return;
      }
    }
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.org = this;
      window.org = this;
    }
    this._completeInit();
    if (this._served_cache) {
      log2("Loaded from cache, refreshing organisation data...");
      this._served_cache = false;
      this._loaded_data = {};
      this._refresh(() => this.load());
    }
  }
  /**
   * Run a load straight against the API, ignoring any cached data, so the
   * displayed data is replaced with the latest. Runs in the background.
   */
  async _refresh(load) {
    this._refresh_count.update((count) => count + 1);
    await load().catch((err) => console.warn("Failed to refresh organisation data.", err));
    this._refresh_count.update((count) => count - 1);
  }
  _setPublicData() {
    const region_id = localStorage.getItem("PLACEOS.region") || "public";
    const building_id = localStorage.getItem("KIOSK.building") || localStorage.getItem("PLACEOS.building") || "public-building";
    const level_id = localStorage.getItem("KIOSK.level") || "public-level";
    const organisation = new Organisation({
      id: "public-org",
      name: "Public Organisation",
      tags: ["org"]
    });
    const region = new Region({
      id: region_id,
      name: "Public Region",
      display_name: "Public Region"
    });
    const building = new Building({
      id: building_id,
      parent_id: region.id,
      name: "Public Building",
      display_name: "Public Building"
    });
    const level = new BuildingLevel({
      id: level_id,
      parent_id: building.id,
      name: "Public Level",
      display_name: "Public Level"
    });
    this._organisation = organisation;
    this._region_list.set([region]);
    this._building_list.set([building]);
    this._level_list.set([level]);
    this._active_region.set(region);
    this._active_building.set(building);
    this._updateSettingOverrides();
  }
  /**
   * Initialise service data. When this is a background refresh, loading
   * messages and the default region/building selection are skipped so the
   * user's current view and selection are left alone.
   */
  async load() {
    const refreshing = this._refreshing;
    const loadingMessage = (message2) => refreshing ? null : setLoadingMessage(message2);
    loadingMessage("Loading organisation data...");
    await this.loadOrganisation();
    loadingMessage("Loading region data...");
    await this.loadRegions();
    if (!this._region_list().length) {
      loadingMessage("Loading building data...");
      const list = await this.loadBuildings();
      this._building_list.set(list);
    } else {
      loadingMessage("Loading region buildings data...");
      for (const region of this._region_list()) {
        const blds = await this.loadBuildings(region.id);
        if (blds.length) {
          this._building_list.set(blds);
          break;
        }
      }
    }
    loadingMessage("Loading zone settings...");
    await this.loadSettings();
    if (!this._building_list()?.length) {
      log2("Unable to find any building zones");
    }
    loadingMessage("Loading active building levels...");
    await this.loadLevels();
    if (refreshing) {
      if (this.region?.id)
        await this.loadRegionData(this.region);
      if (this.building?.id && !this._service.get("dont_load_metadata")) {
        await this.loadBuildingData(this.building);
      }
    }
    this._updateSettingOverrides();
  }
  /**
   * Load organisation data for application
   */
  async loadOrganisation() {
    const org_list = await this._queryZones({
      tags: "org",
      include_children_count: true
    });
    if (org_list.length) {
      const auth = Mt();
      const org = org_list.find((list) => Un() || list.id === auth?.config?.org_zone) || org_list[0];
      const load_metadata = !this._service.get("dont_load_metadata");
      const bindings = load_metadata ? (await this._bulkMetadataDetails("bindings", [org.id]))[org.id] : {};
      this._organisation = new Organisation(__spreadProps(__spreadValues({}, org), { bindings }));
    } else {
      log2("Unable to find organisation");
      this._router.navigate(["/misconfigured"]);
    }
  }
  /**
   * Load region data for the organisation
   */
  async loadRegions() {
    const list = (await this._queryZones({
      tags: "region",
      parent_id: this._organisation?.id || "",
      limit: 200
    }).catch(() => [])).map((_2) => new Region(_2));
    this._region_list.set(list);
  }
  async loadRegionData(region) {
    if (this._loaded_data[region.id] && !this._refreshing)
      return;
    const load_metadata = !this._service.get("dont_load_metadata");
    const from_cache = this._zoneDataCached(region.id);
    const [settings, bindings, buildings] = await Promise.all([
      load_metadata ? this._bulkMetadataDetails(this.app_key, [region.id]).then((_2) => _2[region.id]) : {},
      load_metadata ? this._bulkMetadataDetails("bindings", [region.id]).then((_2) => _2[region.id]) : {},
      this.loadBuildings(region.id)
    ]);
    const building_list = unique([...this._building_list(), ...buildings], "id");
    this._building_list.set(building_list);
    this._loaded_data[region.id] = true;
    region.bindings = bindings;
    this._region_settings[region.id] = settings;
    if (from_cache)
      this._refresh(() => this.loadRegionData(region));
  }
  /**
   * Load buildings data for the organisation
   */
  async loadBuildings(parent_id = this._organisation?.id) {
    const building_list = (await this._queryZones({
      tags: "building",
      parent_id,
      limit: 500
    })).map((_2) => new Building(_2));
    return building_list;
  }
  async loadBuildingData(bld) {
    if (!bld || this._loaded_data[bld.id] && !this._refreshing)
      return;
    const from_cache = this._zoneDataCached(bld.id);
    const [settings, bindings, booking_rules, driver_settings] = await Promise.all([
      this._bulkMetadataDetails(this.app_key, [bld.id]).then((_2) => _2[bld.id]),
      this._bulkMetadataDetails("bindings", [bld.id]).then((_2) => _2[bld.id]),
      this._bulkMetadataDetails("booking_rules", [bld.id]).then((_2) => _2[bld.id])
      // lastValueFrom(
      //     (this.app_key.includes('concierge')
      //         ? querySettings({ parent_id: bld.id })
      //         : of({ data: {} as any })
      //     ).pipe(
      //         catchError(() => of({ data: {} as any })),
      //         map((_) => {
      //             try {
      //                 return parseYAML(
      //                     _?.data.find(
      //                         (_) =>
      //                             _.encryption_level ===
      //                             EncryptionLevel.None,
      //                     ) || { settings_string: '' },
      //                 );
      //             } catch {
      //                 return {};
      //             }
      //         }),
      //     ),
      // ),
    ]);
    this._building_settings[bld.id] = __spreadValues(__spreadValues({}, driver_settings || {}), settings || {});
    bld.bindings = bindings;
    bld.booking_rules = booking_rules;
    this._loaded_data[bld.id] = true;
    this._loaded_buildings.update((ids) => ids.includes(bld.id) ? ids : [...ids, bld.id]);
    this._updateSettingOverrides();
    if (from_cache)
      this._refresh(() => this.loadBuildingData(bld));
  }
  /**
   * Whether the zone's settings metadata would be loaded from the cache.
   * Always false while refreshing, so a refresh never schedules another one.
   */
  _zoneDataCached(id) {
    return !!this._getCachedItem(this._metadataCacheKey(this.app_key, [id]));
  }
  /**
   * Load levels data for the buildings
   */
  async loadLevels() {
    let level_list = await this._queryZones({
      tags: "level",
      limit: 2500
    });
    level_list = level_list.filter((_2) => _2.parent_id);
    if (!level_list?.length) {
      this._router.navigate(["/misconfigured"]);
    }
    let levels = level_list.map((lvl) => new BuildingLevel(lvl));
    levels = levels.sort((a, b) => Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || ""));
    this._level_list.set(levels);
  }
  async loadSettings() {
    if (!this._organisation)
      return;
    const org_id = this._organisation?.id;
    const app_settings = (await this._bulkMetadataDetails(this.app_key, [org_id]))[org_id];
    const global_settings = (await this._bulkMetadataDetails("settings", [org_id]))[org_id];
    this._settings = [global_settings, app_settings];
    if (this._override_timer) {
      clearTimeout(this._override_timer);
      this._override_timer = null;
    }
    this._service.setOverrides([...this._settings]);
    if (!this._refreshing)
      await this._setDefaultBuilding();
    this._updateSettingOverrides();
  }
  /** Select the building physically closest to the user's current location */
  async _setBuildingFromGeolocation() {
    return new Promise((resolve) => {
      let settled = false;
      const finish = (building) => {
        if (settled)
          return;
        settled = true;
        clearTimeout(timer2);
        resolve(building);
      };
      const timer2 = setTimeout(() => finish(null), GEOLOCATION_TIMEOUT);
      navigator.geolocation.getCurrentPosition((position) => {
        if (settled)
          return;
        const { latitude, longitude } = position.coords;
        const closest = this._closestBuilding(latitude, longitude);
        if (closest)
          this.building = closest;
        finish(closest);
      }, () => finish(null), { timeout: GEOLOCATION_TIMEOUT });
    });
  }
  /** Find the building nearest to the given coordinates */
  _closestBuilding(latitude, longitude) {
    let closest = null;
    let closest_distance = Infinity;
    for (const bld of this.buildings) {
      if (!bld.location || bld.location === "0,0")
        continue;
      const [lat, long] = bld.location.split(",").map(Number);
      const distance = Math.hypot(latitude - lat, longitude - long);
      if (distance < closest_distance) {
        closest = bld;
        closest_distance = distance;
      }
    }
    return closest;
  }
  /** Find a building by id, loading every region's buildings if not already present */
  async _findBuilding(id) {
    const loaded = this.buildings.find((bld) => bld.id === id);
    if (loaded)
      return loaded;
    await this._loadAllBuildings();
    return this.buildings.find((bld) => bld.id === id) || null;
  }
  /** Load the buildings for every region into the building list */
  async _loadAllBuildings() {
    const lists = await Promise.all(this.regions.map((region) => this.loadBuildings(region.id)));
    this._building_list.set(unique([...this._building_list(), ...lists.flat()], "id"));
  }
  async _setDefaultBuilding() {
    log2("No building set yet, applying defaults...");
    const region_id = localStorage.getItem(`PLACEOS.region`);
    const building_id = sessionStorage.getItem(`PLACEOS.building`) || localStorage.getItem(`PLACEOS.building`);
    const default_id = this._service.get("app.default_building");
    if (!this.buildings.length && !region_id)
      return;
    await (region_id ? this.setRegion(this._region_list().find((_2) => _2.id === region_id)) : this._setRegionFromTimezone());
    if (!this.buildings.length)
      return;
    const previous = this.buildings.find((_2) => _2.id === building_id);
    if (previous) {
      log2("Defaulting building to previously selected building.");
      this.building = previous;
      return;
    }
    if (default_id) {
      const configured = await this._findBuilding(default_id);
      if (configured) {
        log2("Applied default building from app settings.");
        const region = this.regions.find((_2) => _2.id === configured.parent_id);
        if (region)
          await this.setRegion(region);
        this.building = configured;
        return;
      }
      log2(`Configured default building "${default_id}" was not found.`);
    }
    const use_location = !!this._service.get("app.use_geolocation");
    if (use_location && "geolocation" in navigator) {
      const closest = await this._setBuildingFromGeolocation();
      if (closest) {
        log2("Applied default building from user location.");
        return;
      }
    }
    this._setBuildingFromTimezone();
    if (this.building?.id)
      return;
    log2("No default building matched, initialising to first building.");
    this.building = this.buildings[0];
  }
  async _setRegionFromTimezone() {
    const region = this._matchByTimezone(this.regions);
    if (region)
      await this.setRegion(region);
  }
  _setBuildingFromTimezone() {
    if (this._skip_auto_selection)
      return;
    const bld_list = this.buildings.filter((bld) => !this.region || bld.parent_id === this.region?.id);
    const building = this._matchByTimezone(bld_list);
    if (building) {
      this.building = building;
      log2("Applied default building from user's timezone.");
    }
  }
  /** Match the item whose timezone equals the user's, else one in the same region */
  _matchByTimezone(list) {
    const timezone = this.timezone;
    const exact = list.find((_2) => _2.timezone === timezone);
    if (exact)
      return exact;
    const tz_start = timezone.split("/")[0];
    return list.find((_2) => _2.timezone?.startsWith(tz_start));
  }
  _updateSettingOverrides() {
    if (this._override_timer)
      clearTimeout(this._override_timer);
    this._override_timer = setTimeout(() => this._service.setOverrides([
      this.buildingSettings(this.building?.id),
      this.regionSettings(this.region?.id),
      ...this._settings
    ]), 300);
  }
  async _bulkMetadataDetails(name, ids) {
    const parent_ids = ids.filter(Boolean).join(",");
    if (!parent_ids)
      return {};
    const cache_key = this._metadataCacheKey(name, ids);
    const cached_metadata = this._getCachedItem(cache_key);
    if (cached_metadata)
      return cached_metadata;
    const metadata = await _c(name, { parent_ids }).catch((err) => err?.status === 404 ? this._individualMetadata(name, ids) : {});
    const metadata_details = ids.reduce((map2, id) => {
      map2[id] = metadata[id]?.details || {};
      return map2;
    }, {});
    this._setCachedItem(cache_key, metadata_details);
    return metadata_details;
  }
  /** Fallback for backends without the bulk metadata endpoint (404) */
  async _individualMetadata(name, ids) {
    const items = await Promise.all(ids.filter(Boolean).map((id) => ac(id, name).then((item) => [id, item], () => [id, null])));
    const metadata = {};
    for (const [id, item] of items) {
      if (item)
        metadata[id] = item;
    }
    return metadata;
  }
  async _queryZones(params) {
    const cache_key = this._zoneCacheKey(params);
    const cached_zones = this._getCachedItem(cache_key);
    if (cached_zones)
      return cached_zones;
    const zones = (await dh(__spreadProps(__spreadValues({}, params), {
      authority_id: Mt()?.id
    }))).data || [];
    this._setCachedItem(cache_key, zones);
    return zones;
  }
  _metadataCacheKey(name, ids) {
    const auth = cachedAuthority();
    const parent_ids = ids.filter(Boolean).sort().join(",");
    return `${METADATA_CACHE_PREFIX}.${auth?.id || "default"}.${name}.${parent_ids}`;
  }
  _zoneCacheKey(params) {
    const auth = cachedAuthority();
    const sorted_params = Object.keys(params).sort().reduce((cache_params, key) => {
      cache_params[key] = params[key];
      return cache_params;
    }, {});
    return `${ZONE_CACHE_PREFIX}.${auth?.id || "default"}.${JSON.stringify(sorted_params)}`;
  }
  _getCachedItem(cache_key) {
    if (this._refreshing)
      return null;
    try {
      const cached_item = JSON.parse(localStorage.getItem(cache_key) || "null");
      if (!cached_item)
        return null;
      if (cached_item.metadata_cache_id !== this._metadataCacheID() || cached_item.cached_at + MAX_CACHE_AGE2 < Date.now()) {
        localStorage.removeItem(cache_key);
        return null;
      }
      this._served_cache = true;
      return cached_item.data;
    } catch {
      localStorage.removeItem(cache_key);
      return null;
    }
  }
  _setCachedItem(cache_key, data) {
    const cached_item = {
      cached_at: Date.now(),
      metadata_cache_id: this._metadataCacheID(),
      data
    };
    const value = JSON.stringify(cached_item);
    try {
      localStorage.setItem(cache_key, value);
    } catch {
      this._clearCache();
      try {
        localStorage.setItem(cache_key, value);
      } catch {
      }
    }
  }
  _metadataCacheID() {
    return `${cachedAuthority()?.metadata_cache_id || ""}`;
  }
  _clearCache() {
    for (const store of [localStorage, sessionStorage]) {
      for (let i = store.length - 1; i >= 0; i--) {
        const key = store.key(i);
        if (key?.startsWith(ORG_CACHE_PREFIX))
          store.removeItem(key);
      }
    }
  }
  static {
    this.\u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganisationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/mapspeople.service.ts
var MapService;
(function(MapService2) {
  MapService2[MapService2["GoogleMaps"] = 0] = "GoogleMaps";
  MapService2[MapService2["Mapbox"] = 1] = "Mapbox";
})(MapService || (MapService = {}));
var MapsPeopleService = class _MapsPeopleService extends AsyncHandler {
  get map_keys() {
    return this._settings.get("app.maps_people.keys") || {};
  }
  get use_service() {
    return this._settings.get("app.maps_people.use_zones") || [];
  }
  get map_service() {
    return this._map_service();
  }
  get map_token() {
    return this._map_token();
  }
  get is_ready() {
    return this._ready();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._map_service = signal(
      null,
      ...ngDevMode ? [{ debugName: "_map_service" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._map_token = signal(
      "",
      ...ngDevMode ? [{ debugName: "_map_token" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._injected = {};
    this._custom_zone = signal(
      "",
      ...ngDevMode ? [{ debugName: "_custom_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available = computed(
      () => {
        const bld = this._org.active_building();
        const zone = this._custom_zone();
        if (!this._org.initialised() || !bld?.id)
          return false;
        return !!this.map_keys.mapsindoors && (this.use_service.includes(zone || bld.id) || this.use_service.includes("*"));
      },
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      if (!this.available())
        return;
      this._injectMapsApiKeys();
    });
  }
  setCustomZone(zone_id) {
    this._custom_zone.set(zone_id);
  }
  _injectMapsApiKeys() {
    log("MapsPeople", "Initializing Maps API Keys");
    this._ready.set(false);
    const { mapsindoors, google, mapbox } = this.map_keys;
    if (!mapsindoors)
      return;
    if (mapsindoors && !this._injected.mapsindoors) {
      const script = document.createElement("script");
      script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.35.0/mapsindoors-4.35.0.js.gz?apikey=${mapsindoors}`;
      document.body.appendChild(script);
      this._injected.mapsindoors = true;
    }
    if (google && mapbox) {
      log("MapsPeople", "Both Google and Mapbox keys provided", void 0, "error");
      return;
    }
    if (google && !this._injected.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google}`;
      document.body.appendChild(script);
      this._map_service.set(MapService.GoogleMaps);
      this._injected.google = true;
    } else if (mapbox && !this._injected.mapbox) {
      const script = document.createElement("script");
      script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
      document.body.appendChild(script);
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
      document.head.appendChild(styles);
      this._map_service.set(MapService.Mapbox);
      this._map_token.set(mapbox);
      this._injected.mapbox = true;
    }
    if (google || mapbox) {
      log("MapsPeople", `Initialized Maps API Keys for ${google ? "Google Maps" : "Mapbox"}`);
      this.timeout("ready", () => this._ready.set(true), 300);
    }
  }
  static {
    this.\u0275fac = function MapsPeopleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapsPeopleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapsPeopleService, factory: _MapsPeopleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsPeopleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/push-notification.service.ts
var PushNotificationService = class _PushNotificationService {
  constructor() {
    this.supported = signal(
      "Notification" in window,
      ...ngDevMode ? [{ debugName: "supported" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permission = signal(
      this.supported() ? Notification.permission : "denied",
      ...ngDevMode ? [{ debugName: "permission" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = computed(
      () => this.permission() === "granted",
      ...ngDevMode ? [{ debugName: "enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    log("PushNotification", `Service initialized. Supported: ${this.supported()}, Permission: ${this.permission()}, Enabled: ${this.enabled()}`);
  }
  /** Request notification permission from user */
  async requestPermission() {
    if (!this.supported()) {
      log("PushNotification", "Notifications not supported in this browser");
      return false;
    }
    try {
      const result = await Notification.requestPermission();
      this.permission.set(result);
      log("PushNotification", `Permission ${result}, enabled: ${this.enabled()}`);
      return result === "granted";
    } catch (e) {
      log("PushNotification", "Failed to request permission", e);
      return false;
    }
  }
  /**
   * Send a push notification
   * @param title Notification title
   * @param options Notification options (body, icon, tag, etc.)
   * @returns The notification instance or null if not sent
   */
  notify(title, options = {}) {
    if (!this.enabled()) {
      log("PushNotification", "Notification skipped - not enabled");
      return null;
    }
    try {
      const notification = new Notification(title, __spreadProps(__spreadValues({}, options), {
        tag: options.tag || `notification-${Date.now()}`
      }));
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      log("PushNotification", `Notification sent: ${title}`);
      return notification;
    } catch (e) {
      log("PushNotification", "Failed to send notification", e);
      return null;
    }
  }
  static {
    this.\u0275fac = function PushNotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PushNotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PushNotificationService, factory: _PushNotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PushNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/api.ts
var IGNORE_VALUES = [void 0, null, ""];
function toQueryString(map2) {
  let str = "";
  if (map2) {
    for (const key in map2) {
      if (key in map2 && !IGNORE_VALUES.includes(map2[key])) {
        str += `${str ? "&" : ""}${key}=${encodeURIComponent(map2[key])}`;
      }
    }
  }
  return str;
}

export {
  millisecondsInMinute,
  millisecondsInHour,
  millisecondsInSecond,
  constructFrom,
  toDate,
  addDays,
  addMonths,
  add,
  addHours,
  getDefaultOptions,
  startOfWeek,
  startOfISOWeek,
  getTimezoneOffsetInMilliseconds,
  normalizeDates,
  startOfDay,
  addMinutes,
  isSameDay,
  isValid,
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
  getUnixTime,
  isAfter,
  isBefore,
  startOfMinute,
  roundToNearestMinutes,
  set,
  AsyncHandler,
  Yr,
  et,
  J,
  Mt,
  so,
  io,
  jt,
  lo,
  ji,
  _,
  ce,
  te,
  ac,
  hc,
  Sa,
  Aa,
  xa,
  Ql,
  Zl,
  Jl,
  Vl,
  tp,
  sp,
  ip,
  op,
  cp,
  ap,
  Hp,
  Mr,
  Kr,
  Gp,
  i18n,
  LocaleService,
  notifySuccess,
  notifyError,
  notifyInfo,
  startOfDayInTimezone,
  endOfDayInTimezone,
  log,
  unique,
  randomInt,
  padString,
  randomString,
  csvToJson,
  jsonToCsv,
  downloadFile,
  flatten,
  timePeriodsIntersect,
  predictableRandomInt,
  removeEmptyFields,
  capitalizeFirstLetter,
  firstTruthyValueFrom,
  HotkeysService,
  DEFAULT_SETTINGS,
  AssetRequest,
  CateringItem,
  CateringOrder,
  Space,
  User,
  CalendarEvent,
  GroupPermission,
  current_user,
  user_groups_loaded,
  user_group_names,
  currentUser,
  hasPermission,
  VERSION,
  setting,
  settingSignal,
  SettingsService,
  PushNotificationService,
  toQueryString,
  serviceWorkerUpdate,
  initialisationFailure,
  initialisationComplete,
  retryInitialisation,
  firstValueWhere,
  Clipboard,
  provideServiceWorker,
  LazySentryErrorHandler,
  getLoadingMessage,
  needsNativeDomain,
  nativeDomainError,
  autoConfirmNativeDomain,
  setMocks,
  PlaceOS_Service,
  OrganisationService
};
//# debugId=ba104d3e-0f76-5b4d-ac95-15c83007b31d
//# sourceMappingURL=chunk-XIZFFTX3.js.map
