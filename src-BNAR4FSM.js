import {
  __export
} from "./chunk-RQBZITXC.js";

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/interfaces.js
var e;
var t;
var i;
!(function(e22) {
  e22.fileDownloadStart = "fileDownloadStart", e22.fileDownloadComplete = "fileDownloadComplete";
})(e || (e = {})), (function(e22) {
  e22.view = "view", e22.edit = "edit", e22.editNew = "editNew";
})(t || (t = {})), (function(e22) {
  e22.fileOpenPreference = "fileOpenPreference", e22.theme = "theme";
})(i || (i = {}));

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/@rollup_plugin-typescript@11.1.6_rollup@4.55.1_tslib@2.8.1_typescript@4.9.5/node_modules/tslib/tslib.es6.js
function t2(t16, n19) {
  var e22 = {};
  for (var r19 in t16) Object.prototype.hasOwnProperty.call(t16, r19) && n19.indexOf(r19) < 0 && (e22[r19] = t16[r19]);
  if (null != t16 && "function" == typeof Object.getOwnPropertySymbols) {
    var o26 = 0;
    for (r19 = Object.getOwnPropertySymbols(t16); o26 < r19.length; o26++) n19.indexOf(r19[o26]) < 0 && Object.prototype.propertyIsEnumerable.call(t16, r19[o26]) && (e22[r19[o26]] = t16[r19[o26]]);
  }
  return e22;
}
function n(t16, n19, e22, r19) {
  return new (e22 || (e22 = Promise))(function(o26, c45) {
    function p59(t17) {
      try {
        u56(r19.next(t17));
      } catch (t18) {
        c45(t18);
      }
    }
    function f48(t17) {
      try {
        u56(r19.throw(t17));
      } catch (t18) {
        c45(t18);
      }
    }
    function u56(t17) {
      var n20;
      t17.done ? o26(t17.value) : (n20 = t17.value, n20 instanceof e22 ? n20 : new e22(function(t18) {
        t18(n20);
      })).then(p59, f48);
    }
    u56((r19 = r19.apply(t16, n19 || [])).next());
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/featureFlags.js
var n2 = { childProxyingCommunication: false };
function i2() {
  n2.childProxyingCommunication = true;
}
function o() {
  return n2.childProxyingCommunication;
}
var t3 = Object.assign({}, { disableEnforceOriginMatchForChildResponses: false });
function c() {
  return t3;
}
function r(n19) {
  t3 = n19;
}
function e2(n19) {
  return r(Object.assign(Object.assign({}, t3), n19)), c();
}

// node_modules/@microsoft/teams-js/dist/esm/_virtual/_polyfill-node.global.js
var e3 = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

// node_modules/@microsoft/teams-js/dist/esm/_virtual/_polyfill-node.buffer.js
var r2 = [];
var e4 = [];
var n3 = "undefined" != typeof Uint8Array ? Uint8Array : Array;
var i3 = false;
function o2() {
  i3 = true;
  for (var t16 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n19 = 0; n19 < 64; ++n19) r2[n19] = t16[n19], e4[t16.charCodeAt(n19)] = n19;
  e4["-".charCodeAt(0)] = 62, e4["_".charCodeAt(0)] = 63;
}
function u(t16) {
  return r2[t16 >> 18 & 63] + r2[t16 >> 12 & 63] + r2[t16 >> 6 & 63] + r2[63 & t16];
}
function f(t16, r19, e22) {
  for (var n19, i26 = [], o26 = r19; o26 < e22; o26 += 3) n19 = (t16[o26] << 16) + (t16[o26 + 1] << 8) + t16[o26 + 2], i26.push(u(n19));
  return i26.join("");
}
function s(t16) {
  var e22;
  i3 || o2();
  for (var n19 = t16.length, u56 = n19 % 3, s40 = "", h31 = [], a35 = 16383, c45 = 0, l48 = n19 - u56; c45 < l48; c45 += a35) h31.push(f(t16, c45, c45 + a35 > l48 ? l48 : c45 + a35));
  return 1 === u56 ? (e22 = t16[n19 - 1], s40 += r2[e22 >> 2], s40 += r2[e22 << 4 & 63], s40 += "==") : 2 === u56 && (e22 = (t16[n19 - 2] << 8) + t16[n19 - 1], s40 += r2[e22 >> 10], s40 += r2[e22 >> 4 & 63], s40 += r2[e22 << 2 & 63], s40 += "="), h31.push(s40), h31.join("");
}
function h(t16, r19, e22, n19, i26) {
  var o26, u56, f48 = 8 * i26 - n19 - 1, s40 = (1 << f48) - 1, h31 = s40 >> 1, a35 = -7, c45 = e22 ? i26 - 1 : 0, l48 = e22 ? -1 : 1, p59 = t16[r19 + c45];
  for (c45 += l48, o26 = p59 & (1 << -a35) - 1, p59 >>= -a35, a35 += f48; a35 > 0; o26 = 256 * o26 + t16[r19 + c45], c45 += l48, a35 -= 8) ;
  for (u56 = o26 & (1 << -a35) - 1, o26 >>= -a35, a35 += n19; a35 > 0; u56 = 256 * u56 + t16[r19 + c45], c45 += l48, a35 -= 8) ;
  if (0 === o26) o26 = 1 - h31;
  else {
    if (o26 === s40) return u56 ? NaN : 1 / 0 * (p59 ? -1 : 1);
    u56 += Math.pow(2, n19), o26 -= h31;
  }
  return (p59 ? -1 : 1) * u56 * Math.pow(2, o26 - n19);
}
function a(t16, r19, e22, n19, i26, o26) {
  var u56, f48, s40, h31 = 8 * o26 - i26 - 1, a35 = (1 << h31) - 1, c45 = a35 >> 1, l48 = 23 === i26 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p59 = n19 ? 0 : o26 - 1, g23 = n19 ? 1 : -1, y17 = r19 < 0 || 0 === r19 && 1 / r19 < 0 ? 1 : 0;
  for (r19 = Math.abs(r19), isNaN(r19) || r19 === 1 / 0 ? (f48 = isNaN(r19) ? 1 : 0, u56 = a35) : (u56 = Math.floor(Math.log(r19) / Math.LN2), r19 * (s40 = Math.pow(2, -u56)) < 1 && (u56--, s40 *= 2), (r19 += u56 + c45 >= 1 ? l48 / s40 : l48 * Math.pow(2, 1 - c45)) * s40 >= 2 && (u56++, s40 /= 2), u56 + c45 >= a35 ? (f48 = 0, u56 = a35) : u56 + c45 >= 1 ? (f48 = (r19 * s40 - 1) * Math.pow(2, i26), u56 += c45) : (f48 = r19 * Math.pow(2, c45 - 1) * Math.pow(2, i26), u56 = 0)); i26 >= 8; t16[e22 + p59] = 255 & f48, p59 += g23, f48 /= 256, i26 -= 8) ;
  for (u56 = u56 << i26 | f48, h31 += i26; h31 > 0; t16[e22 + p59] = 255 & u56, p59 += g23, u56 /= 256, h31 -= 8) ;
  t16[e22 + p59 - g23] |= 128 * y17;
}
var c2 = {}.toString;
var l = Array.isArray || function(t16) {
  return "[object Array]" == c2.call(t16);
};
function g() {
  return w.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function y(t16, r19) {
  if (g() < r19) throw new RangeError("Invalid typed array length");
  return w.TYPED_ARRAY_SUPPORT ? (t16 = new Uint8Array(r19)).__proto__ = w.prototype : (null === t16 && (t16 = new w(r19)), t16.length = r19), t16;
}
function w(t16, r19, e22) {
  if (!(w.TYPED_ARRAY_SUPPORT || this instanceof w)) return new w(t16, r19, e22);
  if ("number" == typeof t16) {
    if ("string" == typeof r19) throw new Error("If encoding is specified then the first argument must be a string");
    return E(this, t16);
  }
  return d(this, t16, r19, e22);
}
function d(t16, r19, e22, n19) {
  if ("number" == typeof r19) throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && r19 instanceof ArrayBuffer ? (function(t17, r20, e23, n20) {
    if (r20.byteLength, e23 < 0 || r20.byteLength < e23) throw new RangeError("'offset' is out of bounds");
    if (r20.byteLength < e23 + (n20 || 0)) throw new RangeError("'length' is out of bounds");
    r20 = void 0 === e23 && void 0 === n20 ? new Uint8Array(r20) : void 0 === n20 ? new Uint8Array(r20, e23) : new Uint8Array(r20, e23, n20);
    w.TYPED_ARRAY_SUPPORT ? (t17 = r20).__proto__ = w.prototype : t17 = A(t17, r20);
    return t17;
  })(t16, r19, e22, n19) : "string" == typeof r19 ? (function(t17, r20, e23) {
    "string" == typeof e23 && "" !== e23 || (e23 = "utf8");
    if (!w.isEncoding(e23)) throw new TypeError('"encoding" must be a valid string encoding');
    var n20 = 0 | m(r20, e23);
    t17 = y(t17, n20);
    var i26 = t17.write(r20, e23);
    i26 !== n20 && (t17 = t17.slice(0, i26));
    return t17;
  })(t16, r19, e22) : (function(t17, r20) {
    if (b(r20)) {
      var e23 = 0 | R(r20.length);
      return 0 === (t17 = y(t17, e23)).length || r20.copy(t17, 0, 0, e23), t17;
    }
    if (r20) {
      if ("undefined" != typeof ArrayBuffer && r20.buffer instanceof ArrayBuffer || "length" in r20) return "number" != typeof r20.length || (n20 = r20.length) != n20 ? y(t17, 0) : A(t17, r20);
      if ("Buffer" === r20.type && l(r20.data)) return A(t17, r20.data);
    }
    var n20;
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  })(t16, r19);
}
function v(t16) {
  if ("number" != typeof t16) throw new TypeError('"size" argument must be a number');
  if (t16 < 0) throw new RangeError('"size" argument must not be negative');
}
function E(t16, r19) {
  if (v(r19), t16 = y(t16, r19 < 0 ? 0 : 0 | R(r19)), !w.TYPED_ARRAY_SUPPORT) for (var e22 = 0; e22 < r19; ++e22) t16[e22] = 0;
  return t16;
}
function A(t16, r19) {
  var e22 = r19.length < 0 ? 0 : 0 | R(r19.length);
  t16 = y(t16, e22);
  for (var n19 = 0; n19 < e22; n19 += 1) t16[n19] = 255 & r19[n19];
  return t16;
}
function R(t16) {
  if (t16 >= g()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + g().toString(16) + " bytes");
  return 0 | t16;
}
function b(t16) {
  return !(null == t16 || !t16._isBuffer);
}
function m(t16, r19) {
  if (b(t16)) return t16.length;
  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t16) || t16 instanceof ArrayBuffer)) return t16.byteLength;
  "string" != typeof t16 && (t16 = "" + t16);
  var e22 = t16.length;
  if (0 === e22) return 0;
  for (var n19 = false; ; ) switch (r19) {
    case "ascii":
    case "latin1":
    case "binary":
      return e22;
    case "utf8":
    case "utf-8":
    case void 0:
      return Q(t16).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * e22;
    case "hex":
      return e22 >>> 1;
    case "base64":
      return W(t16).length;
    default:
      if (n19) return Q(t16).length;
      r19 = ("" + r19).toLowerCase(), n19 = true;
  }
}
function _(t16, r19, e22) {
  var n19 = false;
  if ((void 0 === r19 || r19 < 0) && (r19 = 0), r19 > this.length) return "";
  if ((void 0 === e22 || e22 > this.length) && (e22 = this.length), e22 <= 0) return "";
  if ((e22 >>>= 0) <= (r19 >>>= 0)) return "";
  for (t16 || (t16 = "utf8"); ; ) switch (t16) {
    case "hex":
      return N(this, r19, e22);
    case "utf8":
    case "utf-8":
      return M(this, r19, e22);
    case "ascii":
      return x(this, r19, e22);
    case "latin1":
    case "binary":
      return k(this, r19, e22);
    case "base64":
      return L(this, r19, e22);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return z(this, r19, e22);
    default:
      if (n19) throw new TypeError("Unknown encoding: " + t16);
      t16 = (t16 + "").toLowerCase(), n19 = true;
  }
}
function P(t16, r19, e22) {
  var n19 = t16[r19];
  t16[r19] = t16[e22], t16[e22] = n19;
}
function T(t16, r19, e22, n19, i26) {
  if (0 === t16.length) return -1;
  if ("string" == typeof e22 ? (n19 = e22, e22 = 0) : e22 > 2147483647 ? e22 = 2147483647 : e22 < -2147483648 && (e22 = -2147483648), e22 = +e22, isNaN(e22) && (e22 = i26 ? 0 : t16.length - 1), e22 < 0 && (e22 = t16.length + e22), e22 >= t16.length) {
    if (i26) return -1;
    e22 = t16.length - 1;
  } else if (e22 < 0) {
    if (!i26) return -1;
    e22 = 0;
  }
  if ("string" == typeof r19 && (r19 = w.from(r19, n19)), b(r19)) return 0 === r19.length ? -1 : U(t16, r19, e22, n19, i26);
  if ("number" == typeof r19) return r19 &= 255, w.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i26 ? Uint8Array.prototype.indexOf.call(t16, r19, e22) : Uint8Array.prototype.lastIndexOf.call(t16, r19, e22) : U(t16, [r19], e22, n19, i26);
  throw new TypeError("val must be string, number or Buffer");
}
function U(t16, r19, e22, n19, i26) {
  var o26, u56 = 1, f48 = t16.length, s40 = r19.length;
  if (void 0 !== n19 && ("ucs2" === (n19 = String(n19).toLowerCase()) || "ucs-2" === n19 || "utf16le" === n19 || "utf-16le" === n19)) {
    if (t16.length < 2 || r19.length < 2) return -1;
    u56 = 2, f48 /= 2, s40 /= 2, e22 /= 2;
  }
  function h31(t17, r20) {
    return 1 === u56 ? t17[r20] : t17.readUInt16BE(r20 * u56);
  }
  if (i26) {
    var a35 = -1;
    for (o26 = e22; o26 < f48; o26++) if (h31(t16, o26) === h31(r19, -1 === a35 ? 0 : o26 - a35)) {
      if (-1 === a35 && (a35 = o26), o26 - a35 + 1 === s40) return a35 * u56;
    } else -1 !== a35 && (o26 -= o26 - a35), a35 = -1;
  } else for (e22 + s40 > f48 && (e22 = f48 - s40), o26 = e22; o26 >= 0; o26--) {
    for (var c45 = true, l48 = 0; l48 < s40; l48++) if (h31(t16, o26 + l48) !== h31(r19, l48)) {
      c45 = false;
      break;
    }
    if (c45) return o26;
  }
  return -1;
}
function B(t16, r19, e22, n19) {
  e22 = Number(e22) || 0;
  var i26 = t16.length - e22;
  n19 ? (n19 = Number(n19)) > i26 && (n19 = i26) : n19 = i26;
  var o26 = r19.length;
  if (o26 % 2 != 0) throw new TypeError("Invalid hex string");
  n19 > o26 / 2 && (n19 = o26 / 2);
  for (var u56 = 0; u56 < n19; ++u56) {
    var f48 = parseInt(r19.substr(2 * u56, 2), 16);
    if (isNaN(f48)) return u56;
    t16[e22 + u56] = f48;
  }
  return u56;
}
function S(t16, r19, e22, n19) {
  return X(Q(r19, t16.length - e22), t16, e22, n19);
}
function Y(t16, r19, e22, n19) {
  return X((function(t17) {
    for (var r20 = [], e23 = 0; e23 < t17.length; ++e23) r20.push(255 & t17.charCodeAt(e23));
    return r20;
  })(r19), t16, e22, n19);
}
function I(t16, r19, e22, n19) {
  return Y(t16, r19, e22, n19);
}
function C(t16, r19, e22, n19) {
  return X(W(r19), t16, e22, n19);
}
function O(t16, r19, e22, n19) {
  return X((function(t17, r20) {
    for (var e23, n20, i26, o26 = [], u56 = 0; u56 < t17.length && !((r20 -= 2) < 0); ++u56) n20 = (e23 = t17.charCodeAt(u56)) >> 8, i26 = e23 % 256, o26.push(i26), o26.push(n20);
    return o26;
  })(r19, t16.length - e22), t16, e22, n19);
}
function L(t16, r19, e22) {
  return 0 === r19 && e22 === t16.length ? s(t16) : s(t16.slice(r19, e22));
}
function M(t16, r19, e22) {
  e22 = Math.min(t16.length, e22);
  for (var n19 = [], i26 = r19; i26 < e22; ) {
    var o26, u56, f48, s40, h31 = t16[i26], a35 = null, c45 = h31 > 239 ? 4 : h31 > 223 ? 3 : h31 > 191 ? 2 : 1;
    if (i26 + c45 <= e22) switch (c45) {
      case 1:
        h31 < 128 && (a35 = h31);
        break;
      case 2:
        128 == (192 & (o26 = t16[i26 + 1])) && (s40 = (31 & h31) << 6 | 63 & o26) > 127 && (a35 = s40);
        break;
      case 3:
        o26 = t16[i26 + 1], u56 = t16[i26 + 2], 128 == (192 & o26) && 128 == (192 & u56) && (s40 = (15 & h31) << 12 | (63 & o26) << 6 | 63 & u56) > 2047 && (s40 < 55296 || s40 > 57343) && (a35 = s40);
        break;
      case 4:
        o26 = t16[i26 + 1], u56 = t16[i26 + 2], f48 = t16[i26 + 3], 128 == (192 & o26) && 128 == (192 & u56) && 128 == (192 & f48) && (s40 = (15 & h31) << 18 | (63 & o26) << 12 | (63 & u56) << 6 | 63 & f48) > 65535 && s40 < 1114112 && (a35 = s40);
    }
    null === a35 ? (a35 = 65533, c45 = 1) : a35 > 65535 && (a35 -= 65536, n19.push(a35 >>> 10 & 1023 | 55296), a35 = 56320 | 1023 & a35), n19.push(a35), i26 += c45;
  }
  return (function(t17) {
    var r20 = t17.length;
    if (r20 <= D) return String.fromCharCode.apply(String, t17);
    var e23 = "", n20 = 0;
    for (; n20 < r20; ) e23 += String.fromCharCode.apply(String, t17.slice(n20, n20 += D));
    return e23;
  })(n19);
}
w.TYPED_ARRAY_SUPPORT = void 0 === e3.TYPED_ARRAY_SUPPORT || e3.TYPED_ARRAY_SUPPORT, g(), w.poolSize = 8192, w._augment = function(t16) {
  return t16.__proto__ = w.prototype, t16;
}, w.from = function(t16, r19, e22) {
  return d(null, t16, r19, e22);
}, w.TYPED_ARRAY_SUPPORT && (w.prototype.__proto__ = Uint8Array.prototype, w.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && w[Symbol.species]), w.alloc = function(t16, r19, e22) {
  return (function(t17, r20, e23, n19) {
    return v(r20), r20 <= 0 ? y(t17, r20) : void 0 !== e23 ? "string" == typeof n19 ? y(t17, r20).fill(e23, n19) : y(t17, r20).fill(e23) : y(t17, r20);
  })(null, t16, r19, e22);
}, w.allocUnsafe = function(t16) {
  return E(null, t16);
}, w.allocUnsafeSlow = function(t16) {
  return E(null, t16);
}, w.isBuffer = $, w.compare = function(t16, r19) {
  if (!b(t16) || !b(r19)) throw new TypeError("Arguments must be Buffers");
  if (t16 === r19) return 0;
  for (var e22 = t16.length, n19 = r19.length, i26 = 0, o26 = Math.min(e22, n19); i26 < o26; ++i26) if (t16[i26] !== r19[i26]) {
    e22 = t16[i26], n19 = r19[i26];
    break;
  }
  return e22 < n19 ? -1 : n19 < e22 ? 1 : 0;
}, w.isEncoding = function(t16) {
  switch (String(t16).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
}, w.concat = function(t16, r19) {
  if (!l(t16)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === t16.length) return w.alloc(0);
  var e22;
  if (void 0 === r19) for (r19 = 0, e22 = 0; e22 < t16.length; ++e22) r19 += t16[e22].length;
  var n19 = w.allocUnsafe(r19), i26 = 0;
  for (e22 = 0; e22 < t16.length; ++e22) {
    var o26 = t16[e22];
    if (!b(o26)) throw new TypeError('"list" argument must be an Array of Buffers');
    o26.copy(n19, i26), i26 += o26.length;
  }
  return n19;
}, w.byteLength = m, w.prototype._isBuffer = true, w.prototype.swap16 = function() {
  var t16 = this.length;
  if (t16 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var r19 = 0; r19 < t16; r19 += 2) P(this, r19, r19 + 1);
  return this;
}, w.prototype.swap32 = function() {
  var t16 = this.length;
  if (t16 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var r19 = 0; r19 < t16; r19 += 4) P(this, r19, r19 + 3), P(this, r19 + 1, r19 + 2);
  return this;
}, w.prototype.swap64 = function() {
  var t16 = this.length;
  if (t16 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var r19 = 0; r19 < t16; r19 += 8) P(this, r19, r19 + 7), P(this, r19 + 1, r19 + 6), P(this, r19 + 2, r19 + 5), P(this, r19 + 3, r19 + 4);
  return this;
}, w.prototype.toString = function() {
  var t16 = 0 | this.length;
  return 0 === t16 ? "" : 0 === arguments.length ? M(this, 0, t16) : _.apply(this, arguments);
}, w.prototype.equals = function(t16) {
  if (!b(t16)) throw new TypeError("Argument must be a Buffer");
  return this === t16 || 0 === w.compare(this, t16);
}, w.prototype.inspect = function() {
  var t16 = "";
  return this.length > 0 && (t16 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (t16 += " ... ")), "<Buffer " + t16 + ">";
}, w.prototype.compare = function(t16, r19, e22, n19, i26) {
  if (!b(t16)) throw new TypeError("Argument must be a Buffer");
  if (void 0 === r19 && (r19 = 0), void 0 === e22 && (e22 = t16 ? t16.length : 0), void 0 === n19 && (n19 = 0), void 0 === i26 && (i26 = this.length), r19 < 0 || e22 > t16.length || n19 < 0 || i26 > this.length) throw new RangeError("out of range index");
  if (n19 >= i26 && r19 >= e22) return 0;
  if (n19 >= i26) return -1;
  if (r19 >= e22) return 1;
  if (this === t16) return 0;
  for (var o26 = (i26 >>>= 0) - (n19 >>>= 0), u56 = (e22 >>>= 0) - (r19 >>>= 0), f48 = Math.min(o26, u56), s40 = this.slice(n19, i26), h31 = t16.slice(r19, e22), a35 = 0; a35 < f48; ++a35) if (s40[a35] !== h31[a35]) {
    o26 = s40[a35], u56 = h31[a35];
    break;
  }
  return o26 < u56 ? -1 : u56 < o26 ? 1 : 0;
}, w.prototype.includes = function(t16, r19, e22) {
  return -1 !== this.indexOf(t16, r19, e22);
}, w.prototype.indexOf = function(t16, r19, e22) {
  return T(this, t16, r19, e22, true);
}, w.prototype.lastIndexOf = function(t16, r19, e22) {
  return T(this, t16, r19, e22, false);
}, w.prototype.write = function(t16, r19, e22, n19) {
  if (void 0 === r19) n19 = "utf8", e22 = this.length, r19 = 0;
  else if (void 0 === e22 && "string" == typeof r19) n19 = r19, e22 = this.length, r19 = 0;
  else {
    if (!isFinite(r19)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    r19 |= 0, isFinite(e22) ? (e22 |= 0, void 0 === n19 && (n19 = "utf8")) : (n19 = e22, e22 = void 0);
  }
  var i26 = this.length - r19;
  if ((void 0 === e22 || e22 > i26) && (e22 = i26), t16.length > 0 && (e22 < 0 || r19 < 0) || r19 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  n19 || (n19 = "utf8");
  for (var o26 = false; ; ) switch (n19) {
    case "hex":
      return B(this, t16, r19, e22);
    case "utf8":
    case "utf-8":
      return S(this, t16, r19, e22);
    case "ascii":
      return Y(this, t16, r19, e22);
    case "latin1":
    case "binary":
      return I(this, t16, r19, e22);
    case "base64":
      return C(this, t16, r19, e22);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return O(this, t16, r19, e22);
    default:
      if (o26) throw new TypeError("Unknown encoding: " + n19);
      n19 = ("" + n19).toLowerCase(), o26 = true;
  }
}, w.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
var D = 4096;
function x(t16, r19, e22) {
  var n19 = "";
  e22 = Math.min(t16.length, e22);
  for (var i26 = r19; i26 < e22; ++i26) n19 += String.fromCharCode(127 & t16[i26]);
  return n19;
}
function k(t16, r19, e22) {
  var n19 = "";
  e22 = Math.min(t16.length, e22);
  for (var i26 = r19; i26 < e22; ++i26) n19 += String.fromCharCode(t16[i26]);
  return n19;
}
function N(t16, r19, e22) {
  var n19 = t16.length;
  (!r19 || r19 < 0) && (r19 = 0), (!e22 || e22 < 0 || e22 > n19) && (e22 = n19);
  for (var i26 = "", o26 = r19; o26 < e22; ++o26) i26 += K(t16[o26]);
  return i26;
}
function z(t16, r19, e22) {
  for (var n19 = t16.slice(r19, e22), i26 = "", o26 = 0; o26 < n19.length; o26 += 2) i26 += String.fromCharCode(n19[o26] + 256 * n19[o26 + 1]);
  return i26;
}
function F(t16, r19, e22) {
  if (t16 % 1 != 0 || t16 < 0) throw new RangeError("offset is not uint");
  if (t16 + r19 > e22) throw new RangeError("Trying to access beyond buffer length");
}
function j(t16, r19, e22, n19, i26, o26) {
  if (!b(t16)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r19 > i26 || r19 < o26) throw new RangeError('"value" argument is out of bounds');
  if (e22 + n19 > t16.length) throw new RangeError("Index out of range");
}
function V(t16, r19, e22, n19) {
  r19 < 0 && (r19 = 65535 + r19 + 1);
  for (var i26 = 0, o26 = Math.min(t16.length - e22, 2); i26 < o26; ++i26) t16[e22 + i26] = (r19 & 255 << 8 * (n19 ? i26 : 1 - i26)) >>> 8 * (n19 ? i26 : 1 - i26);
}
function q(t16, r19, e22, n19) {
  r19 < 0 && (r19 = 4294967295 + r19 + 1);
  for (var i26 = 0, o26 = Math.min(t16.length - e22, 4); i26 < o26; ++i26) t16[e22 + i26] = r19 >>> 8 * (n19 ? i26 : 3 - i26) & 255;
}
function J(t16, r19, e22, n19, i26, o26) {
  if (e22 + n19 > t16.length) throw new RangeError("Index out of range");
  if (e22 < 0) throw new RangeError("Index out of range");
}
function Z(t16, r19, e22, n19, i26) {
  return i26 || J(t16, 0, e22, 4), a(t16, r19, e22, n19, 23, 4), e22 + 4;
}
function G(t16, r19, e22, n19, i26) {
  return i26 || J(t16, 0, e22, 8), a(t16, r19, e22, n19, 52, 8), e22 + 8;
}
w.prototype.slice = function(t16, r19) {
  var e22, n19 = this.length;
  if ((t16 = ~~t16) < 0 ? (t16 += n19) < 0 && (t16 = 0) : t16 > n19 && (t16 = n19), (r19 = void 0 === r19 ? n19 : ~~r19) < 0 ? (r19 += n19) < 0 && (r19 = 0) : r19 > n19 && (r19 = n19), r19 < t16 && (r19 = t16), w.TYPED_ARRAY_SUPPORT) (e22 = this.subarray(t16, r19)).__proto__ = w.prototype;
  else {
    var i26 = r19 - t16;
    e22 = new w(i26, void 0);
    for (var o26 = 0; o26 < i26; ++o26) e22[o26] = this[o26 + t16];
  }
  return e22;
}, w.prototype.readUIntLE = function(t16, r19, e22) {
  t16 |= 0, r19 |= 0, e22 || F(t16, r19, this.length);
  for (var n19 = this[t16], i26 = 1, o26 = 0; ++o26 < r19 && (i26 *= 256); ) n19 += this[t16 + o26] * i26;
  return n19;
}, w.prototype.readUIntBE = function(t16, r19, e22) {
  t16 |= 0, r19 |= 0, e22 || F(t16, r19, this.length);
  for (var n19 = this[t16 + --r19], i26 = 1; r19 > 0 && (i26 *= 256); ) n19 += this[t16 + --r19] * i26;
  return n19;
}, w.prototype.readUInt8 = function(t16, r19) {
  return r19 || F(t16, 1, this.length), this[t16];
}, w.prototype.readUInt16LE = function(t16, r19) {
  return r19 || F(t16, 2, this.length), this[t16] | this[t16 + 1] << 8;
}, w.prototype.readUInt16BE = function(t16, r19) {
  return r19 || F(t16, 2, this.length), this[t16] << 8 | this[t16 + 1];
}, w.prototype.readUInt32LE = function(t16, r19) {
  return r19 || F(t16, 4, this.length), (this[t16] | this[t16 + 1] << 8 | this[t16 + 2] << 16) + 16777216 * this[t16 + 3];
}, w.prototype.readUInt32BE = function(t16, r19) {
  return r19 || F(t16, 4, this.length), 16777216 * this[t16] + (this[t16 + 1] << 16 | this[t16 + 2] << 8 | this[t16 + 3]);
}, w.prototype.readIntLE = function(t16, r19, e22) {
  t16 |= 0, r19 |= 0, e22 || F(t16, r19, this.length);
  for (var n19 = this[t16], i26 = 1, o26 = 0; ++o26 < r19 && (i26 *= 256); ) n19 += this[t16 + o26] * i26;
  return n19 >= (i26 *= 128) && (n19 -= Math.pow(2, 8 * r19)), n19;
}, w.prototype.readIntBE = function(t16, r19, e22) {
  t16 |= 0, r19 |= 0, e22 || F(t16, r19, this.length);
  for (var n19 = r19, i26 = 1, o26 = this[t16 + --n19]; n19 > 0 && (i26 *= 256); ) o26 += this[t16 + --n19] * i26;
  return o26 >= (i26 *= 128) && (o26 -= Math.pow(2, 8 * r19)), o26;
}, w.prototype.readInt8 = function(t16, r19) {
  return r19 || F(t16, 1, this.length), 128 & this[t16] ? -1 * (255 - this[t16] + 1) : this[t16];
}, w.prototype.readInt16LE = function(t16, r19) {
  r19 || F(t16, 2, this.length);
  var e22 = this[t16] | this[t16 + 1] << 8;
  return 32768 & e22 ? 4294901760 | e22 : e22;
}, w.prototype.readInt16BE = function(t16, r19) {
  r19 || F(t16, 2, this.length);
  var e22 = this[t16 + 1] | this[t16] << 8;
  return 32768 & e22 ? 4294901760 | e22 : e22;
}, w.prototype.readInt32LE = function(t16, r19) {
  return r19 || F(t16, 4, this.length), this[t16] | this[t16 + 1] << 8 | this[t16 + 2] << 16 | this[t16 + 3] << 24;
}, w.prototype.readInt32BE = function(t16, r19) {
  return r19 || F(t16, 4, this.length), this[t16] << 24 | this[t16 + 1] << 16 | this[t16 + 2] << 8 | this[t16 + 3];
}, w.prototype.readFloatLE = function(t16, r19) {
  return r19 || F(t16, 4, this.length), h(this, t16, true, 23, 4);
}, w.prototype.readFloatBE = function(t16, r19) {
  return r19 || F(t16, 4, this.length), h(this, t16, false, 23, 4);
}, w.prototype.readDoubleLE = function(t16, r19) {
  return r19 || F(t16, 8, this.length), h(this, t16, true, 52, 8);
}, w.prototype.readDoubleBE = function(t16, r19) {
  return r19 || F(t16, 8, this.length), h(this, t16, false, 52, 8);
}, w.prototype.writeUIntLE = function(t16, r19, e22, n19) {
  (t16 = +t16, r19 |= 0, e22 |= 0, n19) || j(this, t16, r19, e22, Math.pow(2, 8 * e22) - 1, 0);
  var i26 = 1, o26 = 0;
  for (this[r19] = 255 & t16; ++o26 < e22 && (i26 *= 256); ) this[r19 + o26] = t16 / i26 & 255;
  return r19 + e22;
}, w.prototype.writeUIntBE = function(t16, r19, e22, n19) {
  (t16 = +t16, r19 |= 0, e22 |= 0, n19) || j(this, t16, r19, e22, Math.pow(2, 8 * e22) - 1, 0);
  var i26 = e22 - 1, o26 = 1;
  for (this[r19 + i26] = 255 & t16; --i26 >= 0 && (o26 *= 256); ) this[r19 + i26] = t16 / o26 & 255;
  return r19 + e22;
}, w.prototype.writeUInt8 = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 1, 255, 0), w.TYPED_ARRAY_SUPPORT || (t16 = Math.floor(t16)), this[r19] = 255 & t16, r19 + 1;
}, w.prototype.writeUInt16LE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 2, 65535, 0), w.TYPED_ARRAY_SUPPORT ? (this[r19] = 255 & t16, this[r19 + 1] = t16 >>> 8) : V(this, t16, r19, true), r19 + 2;
}, w.prototype.writeUInt16BE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 2, 65535, 0), w.TYPED_ARRAY_SUPPORT ? (this[r19] = t16 >>> 8, this[r19 + 1] = 255 & t16) : V(this, t16, r19, false), r19 + 2;
}, w.prototype.writeUInt32LE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 4, 4294967295, 0), w.TYPED_ARRAY_SUPPORT ? (this[r19 + 3] = t16 >>> 24, this[r19 + 2] = t16 >>> 16, this[r19 + 1] = t16 >>> 8, this[r19] = 255 & t16) : q(this, t16, r19, true), r19 + 4;
}, w.prototype.writeUInt32BE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 4, 4294967295, 0), w.TYPED_ARRAY_SUPPORT ? (this[r19] = t16 >>> 24, this[r19 + 1] = t16 >>> 16, this[r19 + 2] = t16 >>> 8, this[r19 + 3] = 255 & t16) : q(this, t16, r19, false), r19 + 4;
}, w.prototype.writeIntLE = function(t16, r19, e22, n19) {
  if (t16 = +t16, r19 |= 0, !n19) {
    var i26 = Math.pow(2, 8 * e22 - 1);
    j(this, t16, r19, e22, i26 - 1, -i26);
  }
  var o26 = 0, u56 = 1, f48 = 0;
  for (this[r19] = 255 & t16; ++o26 < e22 && (u56 *= 256); ) t16 < 0 && 0 === f48 && 0 !== this[r19 + o26 - 1] && (f48 = 1), this[r19 + o26] = (t16 / u56 | 0) - f48 & 255;
  return r19 + e22;
}, w.prototype.writeIntBE = function(t16, r19, e22, n19) {
  if (t16 = +t16, r19 |= 0, !n19) {
    var i26 = Math.pow(2, 8 * e22 - 1);
    j(this, t16, r19, e22, i26 - 1, -i26);
  }
  var o26 = e22 - 1, u56 = 1, f48 = 0;
  for (this[r19 + o26] = 255 & t16; --o26 >= 0 && (u56 *= 256); ) t16 < 0 && 0 === f48 && 0 !== this[r19 + o26 + 1] && (f48 = 1), this[r19 + o26] = (t16 / u56 | 0) - f48 & 255;
  return r19 + e22;
}, w.prototype.writeInt8 = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 1, 127, -128), w.TYPED_ARRAY_SUPPORT || (t16 = Math.floor(t16)), t16 < 0 && (t16 = 255 + t16 + 1), this[r19] = 255 & t16, r19 + 1;
}, w.prototype.writeInt16LE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 2, 32767, -32768), w.TYPED_ARRAY_SUPPORT ? (this[r19] = 255 & t16, this[r19 + 1] = t16 >>> 8) : V(this, t16, r19, true), r19 + 2;
}, w.prototype.writeInt16BE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 2, 32767, -32768), w.TYPED_ARRAY_SUPPORT ? (this[r19] = t16 >>> 8, this[r19 + 1] = 255 & t16) : V(this, t16, r19, false), r19 + 2;
}, w.prototype.writeInt32LE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 4, 2147483647, -2147483648), w.TYPED_ARRAY_SUPPORT ? (this[r19] = 255 & t16, this[r19 + 1] = t16 >>> 8, this[r19 + 2] = t16 >>> 16, this[r19 + 3] = t16 >>> 24) : q(this, t16, r19, true), r19 + 4;
}, w.prototype.writeInt32BE = function(t16, r19, e22) {
  return t16 = +t16, r19 |= 0, e22 || j(this, t16, r19, 4, 2147483647, -2147483648), t16 < 0 && (t16 = 4294967295 + t16 + 1), w.TYPED_ARRAY_SUPPORT ? (this[r19] = t16 >>> 24, this[r19 + 1] = t16 >>> 16, this[r19 + 2] = t16 >>> 8, this[r19 + 3] = 255 & t16) : q(this, t16, r19, false), r19 + 4;
}, w.prototype.writeFloatLE = function(t16, r19, e22) {
  return Z(this, t16, r19, true, e22);
}, w.prototype.writeFloatBE = function(t16, r19, e22) {
  return Z(this, t16, r19, false, e22);
}, w.prototype.writeDoubleLE = function(t16, r19, e22) {
  return G(this, t16, r19, true, e22);
}, w.prototype.writeDoubleBE = function(t16, r19, e22) {
  return G(this, t16, r19, false, e22);
}, w.prototype.copy = function(t16, r19, e22, n19) {
  if (e22 || (e22 = 0), n19 || 0 === n19 || (n19 = this.length), r19 >= t16.length && (r19 = t16.length), r19 || (r19 = 0), n19 > 0 && n19 < e22 && (n19 = e22), n19 === e22) return 0;
  if (0 === t16.length || 0 === this.length) return 0;
  if (r19 < 0) throw new RangeError("targetStart out of bounds");
  if (e22 < 0 || e22 >= this.length) throw new RangeError("sourceStart out of bounds");
  if (n19 < 0) throw new RangeError("sourceEnd out of bounds");
  n19 > this.length && (n19 = this.length), t16.length - r19 < n19 - e22 && (n19 = t16.length - r19 + e22);
  var i26, o26 = n19 - e22;
  if (this === t16 && e22 < r19 && r19 < n19) for (i26 = o26 - 1; i26 >= 0; --i26) t16[i26 + r19] = this[i26 + e22];
  else if (o26 < 1e3 || !w.TYPED_ARRAY_SUPPORT) for (i26 = 0; i26 < o26; ++i26) t16[i26 + r19] = this[i26 + e22];
  else Uint8Array.prototype.set.call(t16, this.subarray(e22, e22 + o26), r19);
  return o26;
}, w.prototype.fill = function(t16, r19, e22, n19) {
  if ("string" == typeof t16) {
    if ("string" == typeof r19 ? (n19 = r19, r19 = 0, e22 = this.length) : "string" == typeof e22 && (n19 = e22, e22 = this.length), 1 === t16.length) {
      var i26 = t16.charCodeAt(0);
      i26 < 256 && (t16 = i26);
    }
    if (void 0 !== n19 && "string" != typeof n19) throw new TypeError("encoding must be a string");
    if ("string" == typeof n19 && !w.isEncoding(n19)) throw new TypeError("Unknown encoding: " + n19);
  } else "number" == typeof t16 && (t16 &= 255);
  if (r19 < 0 || this.length < r19 || this.length < e22) throw new RangeError("Out of range index");
  if (e22 <= r19) return this;
  var o26;
  if (r19 >>>= 0, e22 = void 0 === e22 ? this.length : e22 >>> 0, t16 || (t16 = 0), "number" == typeof t16) for (o26 = r19; o26 < e22; ++o26) this[o26] = t16;
  else {
    var u56 = b(t16) ? t16 : Q(new w(t16, n19).toString()), f48 = u56.length;
    for (o26 = 0; o26 < e22 - r19; ++o26) this[o26 + r19] = u56[o26 % f48];
  }
  return this;
};
var H = /[^+\/0-9A-Za-z-_]/g;
function K(t16) {
  return t16 < 16 ? "0" + t16.toString(16) : t16.toString(16);
}
function Q(t16, r19) {
  var e22;
  r19 = r19 || 1 / 0;
  for (var n19 = t16.length, i26 = null, o26 = [], u56 = 0; u56 < n19; ++u56) {
    if ((e22 = t16.charCodeAt(u56)) > 55295 && e22 < 57344) {
      if (!i26) {
        if (e22 > 56319) {
          (r19 -= 3) > -1 && o26.push(239, 191, 189);
          continue;
        }
        if (u56 + 1 === n19) {
          (r19 -= 3) > -1 && o26.push(239, 191, 189);
          continue;
        }
        i26 = e22;
        continue;
      }
      if (e22 < 56320) {
        (r19 -= 3) > -1 && o26.push(239, 191, 189), i26 = e22;
        continue;
      }
      e22 = 65536 + (i26 - 55296 << 10 | e22 - 56320);
    } else i26 && (r19 -= 3) > -1 && o26.push(239, 191, 189);
    if (i26 = null, e22 < 128) {
      if ((r19 -= 1) < 0) break;
      o26.push(e22);
    } else if (e22 < 2048) {
      if ((r19 -= 2) < 0) break;
      o26.push(e22 >> 6 | 192, 63 & e22 | 128);
    } else if (e22 < 65536) {
      if ((r19 -= 3) < 0) break;
      o26.push(e22 >> 12 | 224, e22 >> 6 & 63 | 128, 63 & e22 | 128);
    } else {
      if (!(e22 < 1114112)) throw new Error("Invalid code point");
      if ((r19 -= 4) < 0) break;
      o26.push(e22 >> 18 | 240, e22 >> 12 & 63 | 128, e22 >> 6 & 63 | 128, 63 & e22 | 128);
    }
  }
  return o26;
}
function W(t16) {
  return (function(t17) {
    var r19, u56, f48, s40, h31, a35;
    i3 || o2();
    var c45 = t17.length;
    if (c45 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    h31 = "=" === t17[c45 - 2] ? 2 : "=" === t17[c45 - 1] ? 1 : 0, a35 = new n3(3 * c45 / 4 - h31), f48 = h31 > 0 ? c45 - 4 : c45;
    var l48 = 0;
    for (r19 = 0, u56 = 0; r19 < f48; r19 += 4, u56 += 3) s40 = e4[t17.charCodeAt(r19)] << 18 | e4[t17.charCodeAt(r19 + 1)] << 12 | e4[t17.charCodeAt(r19 + 2)] << 6 | e4[t17.charCodeAt(r19 + 3)], a35[l48++] = s40 >> 16 & 255, a35[l48++] = s40 >> 8 & 255, a35[l48++] = 255 & s40;
    return 2 === h31 ? (s40 = e4[t17.charCodeAt(r19)] << 2 | e4[t17.charCodeAt(r19 + 1)] >> 4, a35[l48++] = 255 & s40) : 1 === h31 && (s40 = e4[t17.charCodeAt(r19)] << 10 | e4[t17.charCodeAt(r19 + 1)] << 4 | e4[t17.charCodeAt(r19 + 2)] >> 2, a35[l48++] = s40 >> 8 & 255, a35[l48++] = 255 & s40), a35;
  })((function(t17) {
    if ((t17 = (function(t18) {
      return t18.trim ? t18.trim() : t18.replace(/^\s+|\s+$/g, "");
    })(t17).replace(H, "")).length < 2) return "";
    for (; t17.length % 4 != 0; ) t17 += "=";
    return t17;
  })(t16));
}
function X(t16, r19, e22, n19) {
  for (var i26 = 0; i26 < n19 && !(i26 + e22 >= r19.length || i26 >= t16.length); ++i26) r19[i26 + e22] = t16[i26];
  return i26;
}
function $(t16) {
  return null != t16 && (!!t16._isBuffer || tt(t16) || (function(t17) {
    return "function" == typeof t17.readFloatLE && "function" == typeof t17.slice && tt(t17.slice(0, 0));
  })(t16));
}
function tt(t16) {
  return !!t16.constructor && "function" == typeof t16.constructor.isBuffer && t16.constructor.isBuffer(t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/interfaces.js
var t4;
var n4;
var e5;
var E2;
var O2;
var R2;
var o3;
var T2;
var N2;
var _2;
function i4(t16) {
  return void 0 !== (null == t16 ? void 0 : t16.errorCode);
}
!(function(t16) {
  t16.Inline = "inline", t16.Desktop = "desktop", t16.Web = "web";
})(t4 || (t4 = {})), (function(t16) {
  t16.M365Content = "m365content";
})(n4 || (n4 = {})), (function(t16) {
  t16.DriveId = "driveId", t16.GroupId = "groupId", t16.SiteId = "siteId", t16.UserId = "userId";
})(e5 || (e5 = {})), (function(t16) {
  t16[t16.NOT_SUPPORTED_ON_PLATFORM = 100] = "NOT_SUPPORTED_ON_PLATFORM", t16[t16.INTERNAL_ERROR = 500] = "INTERNAL_ERROR", t16[t16.NOT_SUPPORTED_IN_CURRENT_CONTEXT = 501] = "NOT_SUPPORTED_IN_CURRENT_CONTEXT", t16[t16.PERMISSION_DENIED = 1e3] = "PERMISSION_DENIED", t16[t16.NETWORK_ERROR = 2e3] = "NETWORK_ERROR", t16[t16.NO_HW_SUPPORT = 3e3] = "NO_HW_SUPPORT", t16[t16.INVALID_ARGUMENTS = 4e3] = "INVALID_ARGUMENTS", t16[t16.UNAUTHORIZED_USER_OPERATION = 5e3] = "UNAUTHORIZED_USER_OPERATION", t16[t16.INSUFFICIENT_RESOURCES = 6e3] = "INSUFFICIENT_RESOURCES", t16[t16.THROTTLE = 7e3] = "THROTTLE", t16[t16.USER_ABORT = 8e3] = "USER_ABORT", t16[t16.OPERATION_TIMED_OUT = 8001] = "OPERATION_TIMED_OUT", t16[t16.OLD_PLATFORM = 9e3] = "OLD_PLATFORM", t16[t16.FILE_NOT_FOUND = 404] = "FILE_NOT_FOUND", t16[t16.SIZE_EXCEEDED = 1e4] = "SIZE_EXCEEDED";
})(E2 || (E2 = {})), (function(t16) {
  t16.GeoLocation = "geolocation", t16.Media = "media";
})(O2 || (O2 = {})), (function(t16) {
  t16.BCAIS = "bcais", t16.BCWAF = "bcwaf", t16.BCWBF = "bcwbf";
})(R2 || (R2 = {})), (function(t16) {
  t16.Faculty = "faculty", t16.Student = "student", t16.Other = "other";
})(o3 || (o3 = {})), (function(t16) {
  t16.Adult = "adult", t16.MinorNoParentalConsentRequired = "minorNoParentalConsentRequired", t16.MinorWithoutParentalConsent = "minorWithoutParentalConsent", t16.MinorWithParentalConsent = "minorWithParentalConsent", t16.NotAdult = "notAdult", t16.NonAdult = "notAdult";
})(T2 || (T2 = {})), (function(t16) {
  t16.HigherEducation = "higherEducation", t16.K12 = "k12", t16.Other = "other";
})(N2 || (N2 = {})), (function(t16) {
  t16.TextPlain = "text/plain", t16.TextHtml = "text/html", t16.ImagePNG = "image/png", t16.ImageJPEG = "image/jpeg";
})(_2 || (_2 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/constants.js
var o4;
var i5;
var a2;
var n5;
var s2;
var t5;
var r3;
var m2;
!(function(e22) {
  e22.desktop = "desktop", e22.web = "web", e22.android = "android", e22.ios = "ios", e22.ipados = "ipados", e22.macos = "macos", e22.visionOS = "visionOS", e22.rigel = "rigel", e22.surfaceHub = "surfaceHub", e22.teamsRoomsWindows = "teamsRoomsWindows", e22.teamsRoomsAndroid = "teamsRoomsAndroid", e22.teamsPhones = "teamsPhones", e22.teamsDisplays = "teamsDisplays";
})(o4 || (o4 = {})), (function(e22) {
  e22.office = "Office", e22.outlook = "Outlook", e22.outlookWin32 = "OutlookWin32", e22.orange = "Orange", e22.places = "Places", e22.teams = "Teams", e22.teamsModern = "TeamsModern";
})(i5 || (i5 = {})), (function(e22) {
  e22.settings = "settings", e22.content = "content", e22.authentication = "authentication", e22.remove = "remove", e22.task = "task", e22.sidePanel = "sidePanel", e22.stage = "stage", e22.meetingStage = "meetingStage";
})(a2 || (a2 = {})), (function(e22) {
  e22.copilotSidePanel = "copilotSidePanel", e22.copilotMainPane = "copilotMainPane", e22.copilotFullScreen = "copilotFullScreen";
})(n5 || (n5 = {})), (function(e22) {
  e22[e22.Standard = 0] = "Standard", e22[e22.Edu = 1] = "Edu", e22[e22.Class = 2] = "Class", e22[e22.Plc = 3] = "Plc", e22[e22.Staff = 4] = "Staff";
})(s2 || (s2 = {})), (function(e22) {
  e22[e22.Admin = 0] = "Admin", e22[e22.User = 1] = "User", e22[e22.Guest = 2] = "Guest";
})(t5 || (t5 = {})), (function(e22) {
  e22.Large = "large", e22.Medium = "medium", e22.Small = "small";
})(r3 || (r3 = {})), (function(e22) {
  e22.Regular = "Regular", e22.Private = "Private", e22.Shared = "Shared";
})(m2 || (m2 = {}));
var l2 = { errorCode: E2.NOT_SUPPORTED_ON_PLATFORM };
var d2 = { majorVersion: 1, minorVersion: 5 };
var c3 = { adaptiveCardSchemaVersion: { majorVersion: 1, minorVersion: 5 } };
var u2 = new Error("Invalid input count: Must supply a valid image count (limit of 10).");
var f2 = new Error("Invalid response: Received more images than the specified max limit in the response.");

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@11.1.1/node_modules/uuid/dist/esm-browser/native.js
var o5 = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@11.1.1/node_modules/uuid/dist/esm-browser/rng.js
var t6;
var e6 = new Uint8Array(16);
function o6() {
  if (!t6) {
    if ("undefined" == typeof crypto || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    t6 = crypto.getRandomValues.bind(crypto);
  }
  return t6(e6);
}

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@11.1.1/node_modules/uuid/dist/esm-browser/stringify.js
var t7 = [];
for (let o26 = 0; o26 < 256; ++o26) t7.push((o26 + 256).toString(16).slice(1));
function o7(o26, e22 = 0) {
  return (t7[o26[e22 + 0]] + t7[o26[e22 + 1]] + t7[o26[e22 + 2]] + t7[o26[e22 + 3]] + "-" + t7[o26[e22 + 4]] + t7[o26[e22 + 5]] + "-" + t7[o26[e22 + 6]] + t7[o26[e22 + 7]] + "-" + t7[o26[e22 + 8]] + t7[o26[e22 + 9]] + "-" + t7[o26[e22 + 10]] + t7[o26[e22 + 11]] + t7[o26[e22 + 12]] + t7[o26[e22 + 13]] + t7[o26[e22 + 14]] + t7[o26[e22 + 15]]).toLowerCase();
}

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@11.1.1/node_modules/uuid/dist/esm-browser/v4.js
function o8(o26, m59, e22) {
  if (o5.randomUUID && !o26) return o5.randomUUID();
  const i26 = (o26 = o26 || {}).random ?? o26.rng?.() ?? o6();
  if (i26.length < 16) throw new Error("Random bytes length must be >= 16");
  return i26[6] = 15 & i26[6] | 64, i26[8] = 63 & i26[8] | 128, o7(i26);
}

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@11.1.1/node_modules/uuid/dist/esm-browser/regex.js
var f3 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@11.1.1/node_modules/uuid/dist/esm-browser/validate.js
function e7(e22) {
  return "string" == typeof e22 && f3.test(e22);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/utils.js
function i6(t16) {
  return (t17, e22) => {
    if (!t17) throw new Error(e22);
  };
}
function s3(t16, e22) {
  if ("string" != typeof t16 || "string" != typeof e22) return NaN;
  const n19 = t16.split("."), r19 = e22.split(".");
  function o26(t17) {
    return /^\d+$/.test(t17);
  }
  if (!n19.every(o26) || !r19.every(o26)) return NaN;
  for (; n19.length < r19.length; ) n19.push("0");
  for (; r19.length < n19.length; ) r19.push("0");
  for (let t17 = 0; t17 < n19.length; ++t17) if (Number(n19[t17]) != Number(r19[t17])) return Number(n19[t17]) > Number(r19[t17]) ? 1 : -1;
  return 0;
}
function u3() {
  return o8();
}
function c4(t16) {
  return Object.keys(t16).forEach((e22) => {
    null !== t16[e22] && void 0 !== t16[e22] && "object" == typeof t16[e22] && c4(t16[e22]);
  }), Object.freeze(t16);
}
function a3(t16, e22, ...n19) {
  const r19 = t16(...n19);
  return r19.then((t17) => {
    e22 && e22(void 0, t17);
  }).catch((t17) => {
    e22 && e22(t17);
  }), r19;
}
function l3(t16, e22, ...n19) {
  const r19 = t16(...n19);
  return r19.then(() => {
    e22 && e22(null);
  }).catch((t17) => {
    e22 && e22(t17);
  }), r19;
}
function f4(t16, e22, ...n19) {
  const r19 = t16(...n19);
  return r19.then((t17) => {
    e22 && e22(null, t17);
  }).catch((t17) => {
    e22 && e22(t17, null);
  }), r19;
}
function p(t16, e22, n19) {
  return new Promise((r19, o26) => {
    const i26 = setTimeout(o26, e22, n19);
    t16().then((t17) => {
      clearTimeout(i26), r19(t17);
    }).catch((t17) => {
      clearTimeout(i26), o26(t17);
    });
  });
}
function d3(t16) {
  const e22 = new URL("https://teams.microsoft.com/l/entity/" + encodeURIComponent(t16.appId.toString()) + "/" + encodeURIComponent(t16.pageId));
  return t16.webUrl && e22.searchParams.append("webUrl", t16.webUrl.toString()), (t16.chatId || t16.channelId || t16.subPageId) && e22.searchParams.append("context", JSON.stringify({ chatId: t16.chatId, channelId: t16.channelId, subEntityId: t16.subPageId })), e22.toString();
}
function m3(t16) {
  return !(s3(`${t16.majorVersion}.${t16.minorVersion}`, `${d2.majorVersion}.${d2.minorVersion}`) >= 0);
}
function h2(t16) {
  return "https:" === t16.protocol;
}
function b2(e22, n19) {
  return new Promise((r19, o26) => {
    if (e22 || o26("MimeType cannot be null or empty."), n19 || o26("Base64 string cannot be null or empty."), e22.startsWith("image/")) {
      const t16 = atob(n19), o27 = new Uint8Array(t16.length);
      for (let e23 = 0; e23 < t16.length; e23++) o27[e23] = t16.charCodeAt(e23);
      r19(new Blob([o27], { type: e22 }));
    }
    const i26 = w.from(n19, "base64").toString();
    r19(new Blob([i26], { type: e22 }));
  });
}
function g2(t16) {
  return new Promise((e22, n19) => {
    0 === t16.size && n19(new Error("Blob cannot be empty."));
    const r19 = new FileReader();
    r19.onloadend = () => {
      r19.result ? e22(r19.result.toString().split(",")[1]) : n19(new Error("Failed to read the blob"));
    }, r19.onerror = () => {
      n19(r19.error);
    }, r19.readAsDataURL(t16);
  });
}
function w2() {
  if (y2()) throw new Error("window object undefined at SSR check");
  return window;
}
function y2() {
  return "undefined" == typeof window;
}
function j2(t16, e22) {
  if (E3(t16) || !(function(t17) {
    return t17.length < 256 && t17.length > 4;
  })(t16) || !(function(t17) {
    for (let e23 = 0; e23 < t17.length; e23++) {
      const n19 = t17.charCodeAt(e23);
      if (n19 < 32 || n19 > 126) return false;
    }
    return true;
  })(t16)) throw e22 || new Error("id is not valid.");
}
function I2(t16, e22) {
  const n19 = t16.toString().toLocaleLowerCase();
  if (E3(n19)) throw new Error("Invalid Url");
  if (n19.length > 2048) throw new Error("Url exceeds the maximum size of 2048 characters");
  if (!h2(t16)) throw new Error("Url should be a valid https url");
}
function v2(t16) {
  const e22 = document.createElement("a");
  return e22.href = t16, new URL(e22.href);
}
function E3(t16) {
  return new RegExp(`${/<script[^>]*>|&lt;script[^&]*&gt;|%3Cscript[^%]*%3E/gi.source}|${/<\/script[^>]*>|&lt;\/script[^&]*&gt;|%3C\/script[^%]*%3E/gi.source}`, "gi").test(t16);
}
function O3(t16) {
  if (!t16) throw new Error("id must not be empty");
  if (false === e7(t16)) throw new Error("id must be a valid UUID");
}
var U2 = !!performance && "now" in performance;
function N3() {
  return U2 ? performance.now() + performance.timeOrigin : void 0;
}
function S2(t16, e22 = 0) {
  if (e22 > 1e3) return false;
  if (void 0 === t16 || "boolean" == typeof t16 || "number" == typeof t16 || "bigint" == typeof t16 || "string" == typeof t16 || null === t16) return true;
  if (Array.isArray(t16)) return t16.every((t17) => S2(t17, e22 + 1));
  return !("object" != typeof t16 || "[object Object]" !== Object.prototype.toString.call(t16) || Object.getPrototypeOf(t16) !== Object.prototype && null !== Object.getPrototypeOf(t16)) && Object.keys(t16).every((n19) => S2(t16[n19], e22 + 1));
}
function P2(t16) {
  var e22, r19;
  if (!(null === (r19 = null === (e22 = t16.hostVersionsInfo) || void 0 === e22 ? void 0 : e22.appEligibilityInformation) || void 0 === r19 ? void 0 : r19.ageGroup)) return t16;
  const o26 = t16.hostVersionsInfo.appEligibilityInformation.ageGroup;
  return "nonadult" !== (null == o26 ? void 0 : o26.toLowerCase()) ? t16 : Object.assign(Object.assign({}, t16), { hostVersionsInfo: Object.assign(Object.assign({}, t16.hostVersionsInfo), { appEligibilityInformation: Object.assign(Object.assign({}, t16.hostVersionsInfo.appEligibilityInformation), { ageGroup: T2.NotAdult }) }) });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/uuidObject.js
var n6 = class {
  constructor(n19 = u3()) {
    this.uuid = n19, O3(n19);
  }
  toString() {
    return this.uuid;
  }
  serialize() {
    return this.toString();
  }
};
function r4(i26) {
  if (!(i26 instanceof n6)) throw new Error(`Potential id (${JSON.stringify(i26)}) is invalid; it is not an instance of UUID class.`);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/messageObjects.js
var u4 = (t16) => {
  const { uuid: u56 } = t16, s40 = t2(t16, ["uuid"]), n19 = null == u56 ? void 0 : u56.toString();
  return Object.assign(Object.assign({}, s40), { uuidAsString: n19 });
};
var s4 = (u56) => {
  const { uuidAsString: s40 } = u56, n19 = t2(u56, ["uuidAsString"]);
  return Object.assign(Object.assign({}, n19), { uuid: s40 ? new n6(s40) : void 0 });
};
var n7 = (u56) => {
  const { uuidAsString: s40 } = u56, n19 = t2(u56, ["uuidAsString"]);
  return Object.assign(Object.assign({}, n19), { uuid: s40 ? new n6(s40) : void 0 });
};
var r5 = (t16) => {
  const { uuid: u56 } = t16, s40 = t2(t16, ["uuid"]), n19 = null == u56 ? void 0 : u56.toString();
  return Object.assign(Object.assign({}, s40), { uuidAsString: n19 });
};

// node_modules/@microsoft/teams-js/dist/esm/_virtual/browser.js
var e8 = { exports: {} };

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var e9;
var r6;
function s5() {
  if (r6) return e9;
  r6 = 1;
  var s40 = 1e3, n19 = 60 * s40, a35 = 60 * n19, t16 = 24 * a35, c45 = 7 * t16, u56 = 365.25 * t16;
  function i26(e22, r19, s41, n20) {
    var a36 = r19 >= 1.5 * s41;
    return Math.round(e22 / s41) + " " + n20 + (a36 ? "s" : "");
  }
  return e9 = function(e22, r19) {
    r19 = r19 || {};
    var o26 = typeof e22;
    if ("string" === o26 && e22.length > 0) return (function(e23) {
      if ((e23 = String(e23)).length > 100) return;
      var r20 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e23);
      if (!r20) return;
      var i27 = parseFloat(r20[1]);
      switch ((r20[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return i27 * u56;
        case "weeks":
        case "week":
        case "w":
          return i27 * c45;
        case "days":
        case "day":
        case "d":
          return i27 * t16;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return i27 * a35;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return i27 * n19;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return i27 * s40;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return i27;
        default:
          return;
      }
    })(e22);
    if ("number" === o26 && isFinite(e22)) return r19.long ? (function(e23) {
      var r20 = Math.abs(e23);
      if (r20 >= t16) return i26(e23, r20, t16, "day");
      if (r20 >= a35) return i26(e23, r20, a35, "hour");
      if (r20 >= n19) return i26(e23, r20, n19, "minute");
      if (r20 >= s40) return i26(e23, r20, s40, "second");
      return e23 + " ms";
    })(e22) : (function(e23) {
      var r20 = Math.abs(e23);
      if (r20 >= t16) return Math.round(e23 / t16) + "d";
      if (r20 >= a35) return Math.round(e23 / a35) + "h";
      if (r20 >= n19) return Math.round(e23 / n19) + "m";
      if (r20 >= s40) return Math.round(e23 / s40) + "s";
      return e23 + "ms";
    })(e22);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e22));
  };
}

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/common.js
var n8 = function(n19) {
  function t16(e22) {
    let n20, s41, o26, a35 = null;
    function l48(...e23) {
      if (!l48.enabled) return;
      const r20 = l48, s42 = Number(/* @__PURE__ */ new Date()), o27 = s42 - (n20 || s42);
      r20.diff = o27, r20.prev = n20, r20.curr = s42, n20 = s42, e23[0] = t16.coerce(e23[0]), "string" != typeof e23[0] && e23.unshift("%O");
      let a36 = 0;
      e23[0] = e23[0].replace(/%([a-zA-Z%])/g, (n21, s43) => {
        if ("%%" === n21) return "%";
        a36++;
        const o28 = t16.formatters[s43];
        if ("function" == typeof o28) {
          const t17 = e23[a36];
          n21 = o28.call(r20, t17), e23.splice(a36, 1), a36--;
        }
        return n21;
      }), t16.formatArgs.call(r20, e23);
      (r20.log || t16.log).apply(r20, e23);
    }
    return l48.namespace = e22, l48.useColors = t16.useColors(), l48.color = t16.selectColor(e22), l48.extend = r19, l48.destroy = t16.destroy, Object.defineProperty(l48, "enabled", { enumerable: true, configurable: false, get: () => null !== a35 ? a35 : (s41 !== t16.namespaces && (s41 = t16.namespaces, o26 = t16.enabled(e22)), o26), set: (e23) => {
      a35 = e23;
    } }), "function" == typeof t16.init && t16.init(l48), l48;
  }
  function r19(e22, n20) {
    const r20 = t16(this.namespace + (void 0 === n20 ? ":" : n20) + e22);
    return r20.log = this.log, r20;
  }
  function s40(e22) {
    return e22.toString().substring(2, e22.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  return t16.debug = t16, t16.default = t16, t16.coerce = function(e22) {
    if (e22 instanceof Error) return e22.stack || e22.message;
    return e22;
  }, t16.disable = function() {
    const e22 = [...t16.names.map(s40), ...t16.skips.map(s40).map((e23) => "-" + e23)].join(",");
    return t16.enable(""), e22;
  }, t16.enable = function(e22) {
    let n20;
    t16.save(e22), t16.namespaces = e22, t16.names = [], t16.skips = [];
    const r20 = ("string" == typeof e22 ? e22 : "").split(/[\s,]+/), s41 = r20.length;
    for (n20 = 0; n20 < s41; n20++) r20[n20] && ("-" === (e22 = r20[n20].replace(/\*/g, ".*?"))[0] ? t16.skips.push(new RegExp("^" + e22.slice(1) + "$")) : t16.names.push(new RegExp("^" + e22 + "$")));
  }, t16.enabled = function(e22) {
    if ("*" === e22[e22.length - 1]) return true;
    let n20, r20;
    for (n20 = 0, r20 = t16.skips.length; n20 < r20; n20++) if (t16.skips[n20].test(e22)) return false;
    for (n20 = 0, r20 = t16.names.length; n20 < r20; n20++) if (t16.names[n20].test(e22)) return true;
    return false;
  }, t16.humanize = s5(), t16.destroy = function() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }, Object.keys(n19).forEach((e22) => {
    t16[e22] = n19[e22];
  }), t16.names = [], t16.skips = [], t16.formatters = {}, t16.selectColor = function(e22) {
    let n20 = 0;
    for (let t17 = 0; t17 < e22.length; t17++) n20 = (n20 << 5) - n20 + e22.charCodeAt(t17), n20 |= 0;
    return t16.colors[Math.abs(n20) % t16.colors.length];
  }, t16.enable(t16.load()), t16;
};

// node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/browser.js
!(function(e22, C20) {
  C20.formatArgs = function(o26) {
    if (o26[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + o26[0] + (this.useColors ? "%c " : " ") + "+" + e22.exports.humanize(this.diff), !this.useColors) return;
    const C21 = "color: " + this.color;
    o26.splice(1, 0, C21, "color: inherit");
    let t17 = 0, n19 = 0;
    o26[0].replace(/%[a-zA-Z%]/g, (e23) => {
      "%%" !== e23 && (t17++, "%c" === e23 && (n19 = t17));
    }), o26.splice(n19, 0, C21);
  }, C20.save = function(e23) {
    try {
      e23 ? C20.storage.setItem("debug", e23) : C20.storage.removeItem("debug");
    } catch (e24) {
    }
  }, C20.load = function() {
    let e23;
    try {
      e23 = C20.storage.getItem("debug");
    } catch (e24) {
    }
    !e23 && "undefined" != typeof process && "env" in process && (e23 = process.env.DEBUG);
    return e23;
  }, C20.useColors = function() {
    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, C20.storage = (function() {
    try {
      return localStorage;
    } catch (e23) {
    }
  })(), C20.destroy = /* @__PURE__ */ (() => {
    let e23 = false;
    return () => {
      e23 || (e23 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), C20.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], C20.log = console.debug || console.log || (() => {
  }), e22.exports = n8(C20);
  const { formatters: t16 } = e22.exports;
  t16.j = function(e23) {
    try {
      return JSON.stringify(e23);
    } catch (e24) {
      return "[UnexpectedJSONParseError]: " + e24.message;
    }
  };
})(e8, e8.exports);
var C2 = e8.exports;

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/telemetry.js
var n9 = new n6();
var o9 = C2.debug.formatArgs;
C2.debug.formatArgs = function(t16) {
  t16[0] = `(${(/* @__PURE__ */ new Date()).toISOString()}): ${t16[0]} [${n9.toString()}]`, o9.call(this, t16);
};
var r7 = C2.debug("teamsJs");
function u5(t16) {
  return r7.extend(t16);
}
function s6(t16, e22) {
  return `${t16}_${e22}`;
}
function d4(t16) {
  return /^v\d+_[\w.]+$/.test(t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/communicationUtils.js
function i7(e22) {
  return void 0 !== e22.uuidAsString ? `${e22.uuidAsString} (legacy id: ${e22.id})` : void 0 !== e22.uuid ? `${e22.uuid.toString()} (legacy id: ${e22.id})` : `legacy id: ${e22.id} (no uuid)`;
}
var t8 = u5("flushMessageQueue");
function u6(s40, u56, o26, g23) {
  if (s40 && u56 && 0 !== o26.length) for (; o26.length > 0; ) {
    const n19 = o26.shift();
    if (n19) {
      const o27 = u4(n19);
      t8("Flushing message %s from %s message queue via postMessage.", i7(o27), g23), s40.postMessage(o27, u56);
    }
  }
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/artifactsForCDN/validDomains.json.js
var o10 = ["teams.microsoft.com", "teams.microsoft.us", "gov.teams.microsoft.us", "dod.teams.microsoft.us", "int.teams.microsoft.com", "outlook.office.com", "outlook-sdf.office.com", "outlook.office365.com", "outlook-sdf.office365.com", "outlook.office365.us", "outlook-dod.office365.us", "webmail.apps.mil", "outlook.live.com", "outlook-sdf.live.com", "teams.live.com", "local.teams.live.com", "local.teams.live.com:8080", "local.teams.office.com", "local.teams.office.com:8080", "devspaces.skype.com", "*.www.office.com", "www.office.com", "word.office.com", "excel.office.com", "powerpoint.office.com", "www.officeppe.com", "*.www.microsoft365.com", "www.microsoft365.com", "bing.com", "edgeservices.bing.com", "work.bing.com", "www.bing.com", "www.staging-bing-int.com", "*.cloud.microsoft", "*.m365.cloud.microsoft", "*.outlook.cloud.microsoft", "chatuxmanager.svc.cloud.microsoft", "copilot.microsoft.com", "windows.msn.com", "fa000000125.resources.office.net", "fa000000129.resources.office.net", "fa000000124.resources.office.net", "fa000000128.resources.office.net", "fa000000136.resources.office.net", "fa000000125.officeapps.live.com", "fa000000129.officeapps.live.com", "fa000000124.officeapps.live.com", "fa000000128.officeapps.live.com", "fa000000136.mro1cdnstorage.public.cdn.office.net", "fa000000136.mro1cdnstorage.public.onecdn.static.microsoft", "substrate-msb-bizchatvnext-service.sdf01.substrate-msb-bingatwork.eastus2-sdf.cosmic-ppe.office.net", "office-home-m365copilotapp.wus2sdf1.office-home-m365copilotapp.westus2-sdf.cosmic-ppe.office.net", "office-home-m365copilotapp.wus2test1.office-home-m365copilotapp.westus2-test.cosmic-int.office.net", "m365copilotapp.svc.cloud.microsoft", "cr.m365copilotapp.svc.cloud.microsoft", "m365copilotapp.svc.usgovcloud.microsoft", "cr.m365copilotapp.svc.usgovcloud.microsoft", "dod.m365copilotapp.svc.usgovcloud.microsoft", "cr.dod.m365copilotapp.svc.usgovcloud.microsoft", "m365copilotapp.svc.cloud.dev.microsoft", "ffc-copilot.officeapps.live.com", "m365.cloud.dev.microsoft", "m365.cloud.dev.microsoft:3001", "portal.officeppe.com", "ignite.m365.admin.cloud.microsoft", "ignite.admin.cloud.microsoft", "sdf.m365.admin.cloud.microsoft", "admin-sdf.microsoft.com", "canary.m365.admin.cloud.microsoft", "ring0.m365.admin.cloud.microsoft", "admin.microsoft.com", "m365.admin.cloud.microsoft", "portal.office365.us", "portal.apps.mil", "www.ohome.apps.mil", "www.office365.us"];

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/constants.js
var t9 = "2.0.1";
var e10 = "2.0.2";
var s7 = "2.0.3";
var n10 = "2.0.4";
var o11 = "2.0.1";
var a4 = "1.9.0";
var r8 = "2.0.0";
var m4 = "1.7.0";
var l4 = "1.8.0";
var d5 = "2.0.0";
var h3 = "1.9.0";
var p2 = o10;
var c5 = 1500;
var f5 = new URL("https://res.cdn.office.net/teams-js/validDomains/json/validDomains.json");
var j3 = "https";
var v3 = "teams.microsoft.com";
var y3 = "The library has not yet been initialized";
var D2 = "The runtime has not yet been initialized";
var T3 = "The runtime version is not supported";
var b3 = "The call was not properly started";

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/globalVars.js
var e11 = class {
};
e11.initializeCalled = false, e11.initializeCompleted = false, e11.additionalValidOrigins = [], e11.initializePromise = void 0, e11.isFramelessWindow = false, e11.frameContext = void 0, e11.hostClientType = void 0, e11.printCapabilityEnabled = false, e11.teamsJsInstanceId = new n6().toString();

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/runtime.js
var l5 = u5("runtime");
var d6 = 4;
function u7(o26) {
  return 4 === o26.apiVersion;
}
function c6(o26) {
  if (u7(o26)) return true;
  throw -1 === o26.apiVersion ? new Error(D2) : new Error(T3);
}
var g3 = { apiVersion: -1, supports: {} };
var m5 = { supports: { appInstallDialog: {}, appEntity: {}, call: {}, chat: {}, conversations: {}, dialog: { card: { bot: {} }, url: { bot: {}, parentCommunication: {} }, update: {} }, interactive: {}, logs: {}, meetingRoom: {}, menus: {}, monetization: {}, notifications: {}, pages: { config: {}, backStack: {}, fullTrust: {} }, remoteCamera: {}, teams: { fullTrust: {} }, teamsCore: {}, video: { sharedFrame: {} } } };
var b4 = [o4.desktop, o4.web, o4.rigel, o4.surfaceHub, o4.teamsRoomsWindows, o4.teamsRoomsAndroid, o4.teamsPhones, o4.teamsDisplays];
var y4 = [o4.android, o4.ios, o4.ipados, o4.visionOS];
var f6 = [...b4, ...y4];
function h4(o26) {
  let i26 = o26;
  if (i26.apiVersion < 4 && v4.forEach((o27) => {
    i26.apiVersion === o27.versionToUpgradeFrom && (i26 = o27.upgradeToNextVersion(i26));
  }), u7(i26)) return i26;
  throw new Error("Received a runtime that could not be upgraded to the latest version");
}
var v4 = [{ versionToUpgradeFrom: 1, upgradeToNextVersion: (o26) => {
  var i26;
  return { apiVersion: 2, hostVersionsInfo: void 0, isLegacyTeams: o26.isLegacyTeams, supports: Object.assign(Object.assign({}, o26.supports), { dialog: o26.supports.dialog ? { card: void 0, url: o26.supports.dialog, update: null === (i26 = o26.supports.dialog) || void 0 === i26 ? void 0 : i26.update } : void 0 }) };
} }, { versionToUpgradeFrom: 2, upgradeToNextVersion: (i26) => {
  const t16 = i26.supports, { appNotification: s40 } = t16, e22 = t2(t16, ["appNotification"]);
  return Object.assign(Object.assign({}, i26), { apiVersion: 3, supports: e22 });
} }, { versionToUpgradeFrom: 3, upgradeToNextVersion: (o26) => {
  var i26, t16, s40, e22, n19;
  return { apiVersion: 4, hostVersionsInfo: o26.hostVersionsInfo, isNAAChannelRecommended: o26.isNAAChannelRecommended, isLegacyTeams: o26.isLegacyTeams, supports: Object.assign(Object.assign({}, o26.supports), { dialog: o26.supports.dialog ? { card: null === (i26 = o26.supports.dialog) || void 0 === i26 ? void 0 : i26.card, url: { bot: null === (s40 = null === (t16 = o26.supports.dialog) || void 0 === t16 ? void 0 : t16.url) || void 0 === s40 ? void 0 : s40.bot, parentCommunication: (null === (e22 = o26.supports.dialog) || void 0 === e22 ? void 0 : e22.url) ? {} : void 0 }, update: null === (n19 = o26.supports.dialog) || void 0 === n19 ? void 0 : n19.update } : void 0 }) };
} }];
var T4 = "2.1.2";
var V2 = { "1.0.0": [{ capability: { pages: { appButton: {}, tabs: {} }, stageView: {} }, hostClientTypes: b4 }], "1.9.0": [{ capability: { location: {} }, hostClientTypes: f6 }], "2.0.0": [{ capability: { people: {} }, hostClientTypes: f6 }, { capability: { sharing: {} }, hostClientTypes: [o4.desktop, o4.web] }], "2.0.1": [{ capability: { teams: { fullTrust: { joinedTeams: {} } } }, hostClientTypes: [o4.android, o4.desktop, o4.ios, o4.teamsRoomsAndroid, o4.teamsPhones, o4.teamsDisplays, o4.web] }, { capability: { webStorage: {} }, hostClientTypes: [o4.desktop] }], "2.0.5": [{ capability: { webStorage: {} }, hostClientTypes: [o4.android, o4.ios] }], "2.0.8": [{ capability: { sharing: {} }, hostClientTypes: [o4.android, o4.ios] }], "2.1.1": [{ capability: { nestedAppAuth: {} }, hostClientTypes: [o4.android, o4.ios, o4.ipados, o4.visionOS] }], "2.1.2": [] };
var C3 = l5.extend("generateBackCompatRuntimeConfig");
function j4(o26, i26) {
  const t16 = Object.assign({}, o26);
  for (const s40 in i26) Object.prototype.hasOwnProperty.call(i26, s40) && ("object" != typeof i26[s40] || Array.isArray(i26[s40]) ? s40 in o26 || (t16[s40] = i26[s40]) : t16[s40] = j4(o26[s40] || {}, i26[s40]));
  return t16;
}
function w3(o26, i26, t16) {
  C3("generating back compat runtime config for %s", o26);
  let e22 = Object.assign({}, i26.supports);
  C3("Supported capabilities in config before updating based on highestSupportedVersion: %o", e22), Object.keys(t16).forEach((i27) => {
    s3(o26, i27) >= 0 && t16[i27].forEach((o27) => {
      void 0 !== e11.hostClientType && o27.hostClientTypes.includes(e11.hostClientType) && (e22 = j4(e22, o27.capability));
    });
  });
  const n19 = { apiVersion: 4, hostVersionsInfo: c3, isLegacyTeams: true, supports: e22 };
  return C3("Runtime config after updating based on highestSupportedVersion: %o", n19), n19;
}
var O4 = l5.extend("applyRuntimeConfig");
function A2(o26) {
  "string" == typeof o26.apiVersion && (O4("Trying to apply runtime with string apiVersion, processing as v1: %o", o26), o26 = Object.assign(Object.assign({}, o26), { apiVersion: 1 })), O4("Fast-forwarding runtime %o", o26);
  const i26 = h4(o26);
  O4("Applying runtime %o", i26), g3 = c4(i26);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/serializable.interface.js
function e12(e22) {
  return null != e22 && void 0 !== e22.serialize && "function" == typeof e22.serialize;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/version.js
var o12 = "2.57.0";

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/hostToAppTelemetry.js
var a5 = class _a {
  static storeCallbackInformation(e22, t16) {
    _a.callbackInformation.set(e22, t16);
  }
  static clearMessages() {
    _a.callbackInformation.clear();
  }
  static deleteMessageInformation(e22) {
    _a.callbackInformation.delete(e22);
  }
  static handleOneWayPerformanceMetrics(a35, t16, n19) {
    const o26 = a35.monotonicTimestamp;
    o26 && n19 ? j5({ actionName: a35.func, messageDelay: n19 - o26, requestStartedAt: o26 }) : t16("Unable to send performance metrics for event %s", a35.func);
  }
  static handlePerformanceMetrics(t16, n19, o26, s40) {
    const c45 = _a.callbackInformation.get(t16);
    c45 && n19.monotonicTimestamp && s40 ? (j5({ actionName: c45.name, messageDelay: s40 - n19.monotonicTimestamp, requestStartedAt: c45.calledAt }), _a.deleteMessageInformation(t16)) : o26("Unable to send performance metrics for callback %s with arguments %o", t16.toString(), n19.args);
  }
};
a5.callbackInformation = /* @__PURE__ */ new Map();

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/nestedAppAuthUtils.js
var s8 = u5("nestedAppAuthUtils");
var r9 = s8.extend("tryPolyfillWithNestedAppAuthBridge");
var o13 = "v2";
function i8(t16, s40, i26) {
  var p59;
  const u56 = r9;
  if (e11.isFramelessWindow) return void u56("Cannot polyfill nestedAppAuthBridge as current window is frameless");
  if (!s40) return void u56("Cannot polyfill nestedAppAuthBridge as current window does not exist");
  if (s40.parent !== s40.top) return void u56("Default NAA bridge injection not supported in nested iframe. Use standalone NAA bridge instead.");
  const a35 = (() => {
    try {
      return JSON.parse(t16);
    } catch (e22) {
      return null;
    }
  })();
  if (!a35 || !(null === (p59 = a35.supports) || void 0 === p59 ? void 0 : p59.nestedAppAuth)) return void u56("Cannot polyfill nestedAppAuthBridge as current hub does not support nested app auth");
  const l48 = s40;
  if (l48.nestedAppAuthBridge) return void u56("nestedAppAuthBridge already exists on current window, skipping polyfill");
  const A17 = (function(e22, t17) {
    const s41 = d7;
    if (!e22) return s41("nestedAppAuthBridge cannot be created as current window does not exist"), null;
    const { onMessage: r19, sendPostMessage: i27 } = t17, p60 = (e23) => (t18) => r19(t18, e23);
    return { addEventListener: (t18, n19) => {
      "message" === t18 ? e22.addEventListener(t18, p60(n19)) : s41(`Event ${t18} is not supported by nestedAppAuthBridge`);
    }, postMessage: (e23) => {
      const t18 = (() => {
        try {
          return JSON.parse(e23);
        } catch (e24) {
          return null;
        }
      })();
      if (!t18 || "object" != typeof t18 || "NestedAppAuthRequest" !== t18.messageType) return void s41("Unrecognized data format received by app, message being ignored. Message: %o", e23);
      const r20 = s6(o13, "nestedAppAuth.execute");
      i27(e23, r20);
    }, removeEventListener: (t18, n19) => {
      e22.removeEventListener(t18, p60(n19));
    } };
  })(l48, i26);
  A17 && (l48.nestedAppAuthBridge = A17);
}
var d7 = s8.extend("createNestedAppAuthBridge");

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/urlPattern.js
var t10 = /^[A-Za-z][A-Za-z\d+.-]*:\/\//;
function e13(t16, e22) {
  const r19 = t16.split("."), s40 = e22.split(".");
  if (s40.length !== r19.length) return false;
  let n19 = false;
  for (let t17 = 0; t17 < r19.length; t17++) if (r19[t17] !== s40[t17]) {
    if ("*" !== r19[t17]) return false;
    if (t17 === r19.length - 1 || n19) return false;
    n19 = true;
  }
  return true;
}
var r10 = class _r {
  constructor(t16, e22, r19) {
    this.protocol = t16, this.host = e22, this.logger = r19;
  }
  static canUse(e22) {
    return t10.test(e22);
  }
  static create(t16, e22) {
    const s40 = t16.split("://");
    return new _r(s40[0], s40[1], e22.extend("InternalURLPattern"));
  }
  test(t16) {
    return this.logger("Testing URL %s against pattern protocol: %s, host: %s", t16, this.protocol, this.host), t16.protocol === `${this.protocol}:` && (!t16.host || e13(this.host, t16.host));
  }
};
function s9(t16) {
  return r10.canUse(t16);
}
function n11(t16, e22) {
  if (r10.canUse(t16)) return r10.create(t16, e22);
  e22("No URL verifier available for pattern: %s", t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/validOrigins.js
var u8 = [];
var f7 = u5("validateOrigin");
var d8;
function g4() {
  return n(this, void 0, void 0, function* () {
    d8 || (yield m6());
  });
}
function p3() {
  return 0 === u8.length;
}
function m6(o26 = false) {
  return n(this, void 0, void 0, function* () {
    if (!p3() && !o26) return u8;
    if (d8) return d8;
    if (y2()) return u8 = p2, p2;
    {
      f7("Initiating fetch call to acquire valid origins list from CDN");
      const i26 = new AbortController(), o27 = setTimeout(() => i26.abort(), c5);
      return d8 = fetch(f5, { signal: i26.signal }).then((i27) => {
        if (clearTimeout(o27), !i27.ok) throw new Error("Invalid Response from Fetch Call");
        return f7("Fetch call completed and retrieved valid origins list from CDN"), i27.json().then((i28) => {
          if (h5(JSON.stringify(i28))) return u8 = i28.validOrigins, u8;
          throw new Error("Valid origins list retrieved from CDN is invalid");
        });
      }).catch((i27) => ("AbortError" === i27.name ? f7(`validOrigins fetch call to CDN failed due to Timeout of ${c5} ms. Defaulting to fallback list`) : f7("validOrigins fetch call to CDN failed with error: %s. Defaulting to fallback list", i27), u8 = p2, u8)), d8;
    }
  });
}
function h5(i26) {
  let t16;
  try {
    t16 = JSON.parse(i26);
  } catch (i27) {
    return false;
  }
  if (!t16 || !Array.isArray(t16.validOrigins)) return false;
  for (const i27 of t16.validOrigins) {
    if ("string" != typeof i27) return false;
    try {
      new URL("https://" + i27);
    } catch (t17) {
      return f7("isValidOriginsFromCDN call failed to validate origin: %s", i27), false;
    }
  }
  return true;
}
function v5(i26, t16) {
  let r19;
  try {
    const t17 = n11(i26, f7);
    if (!t17) return false;
    r19 = t17;
  } catch (i27) {
    return false;
  }
  return r19.test(t16);
}
function b5(i26, t16) {
  const r19 = p3() ? p2 : u8;
  return O5(i26, r19) ? Promise.resolve(true) : (f7("Origin %s is not in the local valid origins list, fetching from CDN", i26), m6(t16).then((t17) => O5(i26, t17)));
}
function O5(i26, t16) {
  for (const t17 of e11.additionalValidOrigins) if (v5(t17, i26)) return true;
  const r19 = i26.host;
  return h2(i26) ? !!t16.some((i27) => e13(i27, r19)) || (f7("Origin %s is invalid because it is not an origin approved by this library or included in the call to app.initialize.\nOrigins approved by this library: %o\nOrigins included in app.initialize: %o", i26, t16, e11.additionalValidOrigins), false) : (f7("Origin %s is invalid because it is not using https protocol. Protocol being used: %s", i26, i26.protocol), false);
}
g4();

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/communication.js
var k2 = u5("communication");
var I3 = class {
};
var T5 = class {
};
function E4(n19, t16) {
  if (T5.messageListener = (n20) => (function(n21) {
    return n(this, void 0, void 0, function* () {
      if (!n21 || !n21.data || "object" != typeof n21.data) return void J2("Unrecognized message format received by app, message being ignored. Message: %o", n21);
      const e22 = n21.source || n21.originalEvent && n21.originalEvent.source, t17 = n21.origin || n21.originalEvent && n21.originalEvent.origin;
      return B2(e22, t17).then((o26) => {
        o26 ? (!(function(e23, n22) {
          e11.isFramelessWindow || I3.parentWindow && !I3.parentWindow.closed && e23 !== I3.parentWindow || (I3.parentWindow = e23, I3.parentOrigin = n22);
          I3.parentWindow && I3.parentWindow.closed && (I3.parentWindow = null, I3.parentOrigin = null);
          u6(I3.parentWindow, I3.parentOrigin, T5.parentMessageQueue, "parent");
        })(e22, t17), e22 !== I3.parentWindow ? f8(e22, t17) && w4(n21, e22, V3, (e23, n22) => T5.callbacks.set(e23, n22)) : Y2(n21)) : J2("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin, message: %o, source: %o, origin: %o", n21, e22, t17);
      });
    });
  })(n20), I3.currentWindow = I3.currentWindow || w2(), I3.parentWindow = I3.currentWindow.parent !== I3.currentWindow.self ? I3.currentWindow.parent : I3.currentWindow.opener, I3.topWindow = I3.currentWindow.top, (I3.parentWindow || n19) && I3.currentWindow.addEventListener("message", T5.messageListener, false), !I3.parentWindow) {
    const e22 = I3.currentWindow;
    if (!e22.nativeInterface) return Promise.reject(new Error("Initialization Failed. No Parent window found."));
    e11.isFramelessWindow = true, e22.onNativeMessage = Y2;
  }
  try {
    return I3.parentOrigin = "*", S3(t16, "initialize", [o12, d6, n19]).then(([e22, n20, t17, o26]) => (i8(o26, I3.currentWindow, { onMessage: D3, sendPostMessage: L2 }), { context: e22, clientType: n20, runtimeConfig: t17, clientSupportedSDKVersion: o26 }));
  } finally {
    I3.parentOrigin = null;
  }
}
function j6() {
  I3.currentWindow && I3.currentWindow.removeEventListener("message", T5.messageListener, false), I3.currentWindow = null, I3.parentWindow = null, I3.parentOrigin = null, T5.parentMessageQueue = [], T5.nextMessageId = 0, T5.callbacks.clear(), T5.promiseCallbacks.clear(), T5.portCallbacks.clear(), T5.legacyMessageIdsToUuidMap = {}, a5.clearMessages(), g5();
}
function O6(e22, n19, ...t16) {
  return S3(e22, n19, t16).then(([e23]) => e23);
}
function R3(e22, n19, ...t16) {
  return S3(e22, n19, t16).then(([e23, n20]) => {
    if (!e23) throw new Error(n20);
  });
}
function C4(e22, n19, t16, ...o26) {
  return S3(e22, n19, o26).then(([e23, n20]) => {
    if (!e23) throw new Error(n20 || t16);
  });
}
function P3(e22, n19, ...t16) {
  return S3(e22, n19, t16).then(([e23, n20]) => {
    if (e23) throw e23;
    return n20;
  });
}
function S3(e22, n19, t16 = void 0) {
  if (!d4(e22)) throw Error(`apiVersionTag: ${e22} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);
  return new Promise((o26) => {
    const r19 = V3(e22, n19, t16);
    var i26;
    o26((i26 = r19.uuid, new Promise((e23) => {
      T5.promiseCallbacks.set(i26, e23);
    })));
  });
}
function x2(e22) {
  return e22.map((e23) => e12(e23) ? e23.serialize() : e23);
}
function N4(o26, r19, i26, s40, a35) {
  var c45;
  return n(this, void 0, void 0, function* () {
    const e22 = x2(r19), [d39] = yield S3(s40, o26, e22);
    if (a35 && a35(d39) || !a35 && i4(d39)) throw new Error(`${d39.errorCode}, message: ${null !== (c45 = d39.message) && void 0 !== c45 ? c45 : "None"}`);
    if (i26.validate(d39)) return i26.deserialize(d39);
    throw new Error(`${E2.INTERNAL_ERROR}, message: Invalid response from host - ${JSON.stringify(d39)}`);
  });
}
function U3(o26, r19, i26, s40) {
  var a35;
  return n(this, void 0, void 0, function* () {
    const e22 = x2(r19), [c45] = yield S3(i26, o26, e22);
    if (s40 && s40(c45) || !s40 && i4(c45)) throw new Error(`${c45.errorCode}, message: ${null !== (a35 = c45.message) && void 0 !== a35 ? a35 : "None"}`);
    if (void 0 !== c45) throw new Error(`${E2.INTERNAL_ERROR}, message: Invalid response from host`);
  });
}
function A3(e22, n19, t16 = void 0) {
  if (!d4(e22)) throw Error(`apiVersionTag: ${e22} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);
  const o26 = V3(e22, n19, t16);
  return r19 = o26.uuid, new Promise((e23, n20) => {
    T5.portCallbacks.set(r19, (t17, o27) => {
      t17 instanceof MessagePort ? e23(t17) : n20(o27 && o27.length > 0 ? o27[0] : new Error("Host responded without port or error details."));
    });
  });
  var r19;
}
function $2(e22, n19, t16, o26) {
  let r19;
  if (t16 instanceof Function ? o26 = t16 : t16 instanceof Array && (r19 = t16), !d4(e22)) throw Error(`apiVersionTag: ${e22} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);
  const i26 = V3(e22, n19, r19);
  o26 && T5.callbacks.set(i26.uuid, o26);
}
T5.parentMessageQueue = [], T5.topMessageQueue = [], T5.nextMessageId = 0, T5.callbacks = /* @__PURE__ */ new Map(), T5.promiseCallbacks = /* @__PURE__ */ new Map(), T5.portCallbacks = /* @__PURE__ */ new Map(), T5.legacyMessageIdsToUuidMap = {};
var z2 = k2.extend("sendNestedAuthRequestToTopWindow");
function L2(e22, n19) {
  const t16 = z2, o26 = I3.topWindow, r19 = (function(e23, n20) {
    const t17 = T5.nextMessageId++, o27 = new n6();
    return T5.legacyMessageIdsToUuidMap[t17] = o27, { id: t17, uuid: o27, func: "nestedAppAuth.execute", timestamp: Date.now(), monotonicTimestamp: N3(), apiVersionTag: n20, args: [], data: e23 };
  })(e22, n19);
  return t16("Message %s information: %o", i7(r19), { actionName: r19.func }), F2(o26, r19);
}
var _3 = k2.extend("sendRequestToTargetWindowHelper");
function F2(e22, n19) {
  const t16 = _3, o26 = (function(e23) {
    return e23 === I3.topWindow && Z2() ? "top" : e23 === I3.parentWindow ? "parent" : null;
  })(e22), r19 = u4(n19);
  if (e11.isFramelessWindow) I3.currentWindow && I3.currentWindow.nativeInterface && (t16("Sending message %s to %s via framelessPostMessage interface", i7(r19), o26), I3.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(r19)));
  else {
    const i26 = (function(e23) {
      return e23 === I3.topWindow && Z2() ? I3.topOrigin : e23 === I3.parentWindow ? I3.parentOrigin : null;
    })(e22);
    e22 && i26 ? (t16("Sending message %s to %s via postMessage", i7(r19), o26), e22.postMessage(r19, i26)) : (t16("Adding message %s to %s message queue", i7(r19), o26), ee(e22).push(n19));
  }
  return n19;
}
var Q2 = k2.extend("sendMessageToParentHelper");
function V3(e22, n19, t16, o26, r19) {
  const s40 = Q2, a35 = I3.parentWindow, c45 = (function(e23, n20, t17, o27, r20) {
    const s41 = T5.nextMessageId++, a36 = new n6();
    T5.legacyMessageIdsToUuidMap[s41] = a36;
    const c46 = true === o27 ? r20 : e11.teamsJsInstanceId;
    return { id: s41, uuid: a36, func: n20, timestamp: Date.now(), monotonicTimestamp: N3(), args: t17 || [], apiVersionTag: e23, isProxiedFromChild: null != o27 && o27, teamsJsInstanceId: c46 };
  })(e22, n19, t16, o26, r19);
  return a5.storeCallbackInformation(c45.uuid, { name: n19, calledAt: c45.timestamp }), s40("Message %s information: %o", i7(c45), { actionName: n19, args: t16 }), F2(a35, c45);
}
var J2 = k2.extend("processIncomingMessage");
var q2 = k2.extend("processAuthBridgeMessage");
function D3(e22, n19) {
  var t16, o26;
  const r19 = q2;
  if (!e22 || !e22.data || "object" != typeof e22.data) return void r19("Unrecognized message format received by app, message being ignored. Message: %o", e22);
  const { args: i26 } = e22.data, [, s40] = null != i26 ? i26 : [], a35 = (() => {
    try {
      return JSON.parse(s40);
    } catch (e23) {
      return null;
    }
  })();
  if (!a35 || "object" != typeof a35 || "NestedAppAuthResponse" !== a35.messageType) return void r19("Unrecognized data format received by app, message being ignored. Message: %o", e22);
  const c45 = e22.source || (null === (t16 = null == e22 ? void 0 : e22.originalEvent) || void 0 === t16 ? void 0 : t16.source), d39 = e22.origin || (null === (o26 = null == e22 ? void 0 : e22.originalEvent) || void 0 === o26 ? void 0 : o26.origin);
  c45 ? B2(c45, d39).then((e23) => {
    e23 ? (I3.topWindow && !I3.topWindow.closed && c45 !== I3.topWindow || (I3.topWindow = c45, I3.topOrigin = d39), I3.topWindow && I3.topWindow.closed && (I3.topWindow = null, I3.topOrigin = null), u6(I3.topWindow, I3.topOrigin, T5.topMessageQueue, "top"), n19(s40)) : r19("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin");
  }).catch((e23) => {
    r19("Unexpected error verifying message origin: %o", e23);
  }) : r19("Message being ignored by app because it is coming for a target that is null");
}
var H2 = k2.extend("verifyIncomingMessageOrigin");
function B2(n19, t16) {
  return n(this, void 0, void 0, function* () {
    if (I3.currentWindow && n19 === I3.currentWindow) return H2("Should not process message because it is coming from the current window"), false;
    if (I3.currentWindow && I3.currentWindow.location && t16 && t16 === I3.currentWindow.location.origin) return true;
    {
      let e22;
      try {
        e22 = new URL(t16);
      } catch (e23) {
        return H2("Message has an invalid origin of %s", t16), false;
      }
      const n20 = yield b5(e22);
      return n20 || H2("Message has an invalid origin of %s", t16), n20;
    }
  });
}
var K2 = k2.extend("handleIncomingMessageFromParent");
function G2(e22, n19) {
  if (n19) {
    const t16 = [...e22].find(([e23, t17]) => e23.toString() === n19.toString());
    if (t16) return t16[0];
  }
}
function X2(e22, n19) {
  const t16 = G2(n19, e22.uuid);
  t16 && n19.delete(t16), e22.uuid ? T5.legacyMessageIdsToUuidMap = {} : delete T5.legacyMessageIdsToUuidMap[e22.id];
}
function Y2(e22) {
  const n19 = K2, t16 = N3();
  if ("id" in e22.data && "number" == typeof e22.data.id) {
    const o26 = e22.data, r19 = n7(o26), i26 = (function(e23) {
      const n20 = K2;
      if (!e23.uuid) return T5.legacyMessageIdsToUuidMap[e23.id];
      {
        const n21 = e23.uuid, t17 = G2(T5.callbacks, n21);
        if (t17) return t17;
        const o27 = G2(T5.promiseCallbacks, n21);
        if (o27) return o27;
        const r20 = G2(T5.portCallbacks, n21);
        if (r20) return r20;
      }
      n20("Received message %s that failed to produce a callbackId", i7(e23));
    })(r19);
    if (i26) {
      const o27 = T5.callbacks.get(i26);
      n19("Received a response from parent for message %s", i26.toString()), a5.handlePerformanceMetrics(i26, r19, n19, t16), o27 && (n19("Invoking the registered callback for message %s with arguments %o", i26.toString(), r19.args), o27.apply(null, [...r19.args, r19.isPartialResponse]), (function(e23) {
        return true === e23.data.isPartialResponse;
      })(e22) || (n19("Removing registered callback for message %s", i26.toString()), X2(r19, T5.callbacks)));
      const s40 = T5.promiseCallbacks.get(i26);
      s40 && (n19("Invoking the registered promise callback for message %s with arguments %o", i26.toString(), r19.args), s40(r19.args), n19("Removing registered promise callback for message %s", i26.toString()), X2(r19, T5.promiseCallbacks));
      const a35 = T5.portCallbacks.get(i26);
      if (a35) {
        let t17;
        n19("Invoking the registered port callback for message %s with arguments %o", i26.toString(), r19.args), e22.ports && e22.ports[0] instanceof MessagePort && (t17 = e22.ports[0]), a35(t17, r19.args), n19("Removing registered port callback for message %s", i26.toString()), X2(r19, T5.portCallbacks);
      }
      r19.uuid && (T5.legacyMessageIdsToUuidMap = {});
    }
  } else if ("func" in e22.data && "string" == typeof e22.data.func) {
    const o26 = e22.data;
    a5.handleOneWayPerformanceMetrics(o26, n19, t16), n19('Received a message from parent %s, action: "%s"', i7(o26), o26.func), h6(o26.func, o26.args);
  } else n19("Received an unknown message: %O", e22);
}
function Z2() {
  return I3.topWindow !== I3.parentWindow;
}
function ee(e22) {
  return e22 === I3.topWindow && Z2() ? T5.topMessageQueue : e22 === I3.parentWindow ? T5.parentMessageQueue : [];
}
function ne(e22, n19) {
  let t16;
  t16 = I3.currentWindow.setInterval(() => {
    0 === ee(e22).length && (clearInterval(t16), n19());
  }, 100);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/internalAPIs.js
var f9 = u5("internal");
var c7 = f9.extend("ensureInitializeCalled");
var d9 = f9.extend("ensureInitialized");
function m7() {
  if (!e11.initializeCalled) throw c7(y3), new Error(y3);
}
function p4(i26, ...t16) {
  if (!e11.initializeCompleted) throw d9("%s. initializeCalled: %s", y3, e11.initializeCalled.toString()), new Error(y3);
  if (t16 && t16.length > 0) {
    let i27 = false;
    for (let r19 = 0; r19 < t16.length; r19++) if (t16[r19] === e11.frameContext) {
      i27 = true;
      break;
    }
    if (!i27) {
      const i28 = `This call is only allowed in following contexts: ${JSON.stringify(t16)}. Current context: "${e11.frameContext}".`;
      throw d9(i28), new Error(i28);
    }
  }
  return c6(i26);
}
function u9(i26 = t9) {
  const t16 = s3(e11.clientSupportedSDKVersion, i26);
  return !isNaN(t16) && t16 >= 0;
}
function C5() {
  return e11.hostClientType == o4.android || e11.hostClientType == o4.ios || e11.hostClientType == o4.ipados || e11.hostClientType == o4.visionOS;
}
function h7(i26 = t9) {
  if (!C5()) {
    throw { errorCode: E2.NOT_SUPPORTED_ON_PLATFORM };
  }
  if (!u9(i26)) {
    throw { errorCode: E2.OLD_PLATFORM };
  }
}
function w5(i26) {
  let t16 = e11.additionalValidOrigins.concat(i26.filter((i27) => "string" == typeof i27 && s9(i27)));
  const r19 = {};
  t16 = t16.filter((i27) => !r19[i27] && (r19[i27] = true, true)), e11.additionalValidOrigins = t16;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/idValidation.js
function n12(i26) {
  if (!e14(i26)) throw new Error(`Potential app id (${i26}) is invalid; its length ${i26.length} is not within the length limits (${r11}-${a6}).`);
}
function o14(i26) {
  if (E3(i26)) throw new Error(`Potential app id (${i26}) is invalid; it contains script tags.`);
  if (s10(i26)) throw new Error(`Potential app id (${i26}) is invalid; it contains non-printable characters.`);
}
var r11 = 4;
var a6 = 256;
function e14(i26) {
  return i26.length < a6 && i26.length > r11;
}
function s10(i26) {
  return [...i26].some((i27) => {
    const t16 = i27.charCodeAt(0);
    return t16 < 32 || t16 > 126;
  });
}
function l6(t16) {
  if (!(t16 instanceof i9)) throw new Error(`Potential app id (${t16}) is invalid; it is not an instance of AppId class.`);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/validatedSafeString.js
var i10 = class {
  constructor(i26) {
    this.idAsString = i26, o14(i26);
  }
  serialize() {
    return this.toString();
  }
  toString() {
    return this.idAsString;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appId.js
var i9 = class extends i10 {
  constructor(r19) {
    super(r19), n12(r19);
  }
  toJSON() {
    return { appIdAsString: this.toString() };
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/pages.js
var pages_exports = {};
__export(pages_exports, {
  EnterFocusType: () => A6,
  ReturnFocusType: () => T10,
  appButton: () => appButton_exports,
  backStack: () => backStack_exports,
  config: () => config_exports,
  currentApp: () => currentApp_exports,
  fullTrust: () => fullTrust_exports,
  getConfig: () => S7,
  initializeWithFrameContext: () => H6,
  isSupported: () => z5,
  navigateCrossDomain: () => D5,
  navigateToApp: () => G5,
  registerFocusEnterHandler: () => N8,
  registerFullScreenHandler: () => R7,
  returnFocus: () => w9,
  setCurrentFrame: () => b8,
  shareDeepLink: () => E7,
  tabs: () => tabs_exports
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/typeCheckUtilities.js
function n13(n19) {
  return null == n19;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/app/app.js
var app_exports = {};
__export(app_exports, {
  ExpectedFailureReason: () => b6,
  FailedReason: () => F4,
  Messages: () => N6,
  _initialize: () => D4,
  _uninitialize: () => k3,
  getContext: () => U4,
  getFrameContext: () => L3,
  getImmediateParentOrigin: () => z4,
  initialize: () => A5,
  isInitialized: () => x3,
  lifecycle: () => lifecycle_exports,
  notifyAppLoaded: () => H4,
  notifyExpectedFailure: () => M2,
  notifyFailure: () => E5,
  notifySuccess: () => V4,
  openLink: () => G4,
  registerHostToAppPerformanceMetricsHandler: () => B3,
  registerOnContextChangeHandler: () => R5,
  registerOnThemeChangeHandler: () => W2
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/app/lifecycle.js
var lifecycle_exports = {};
__export(lifecycle_exports, {
  registerBeforeSuspendOrTerminateHandler: () => i11,
  registerOnResumeHandler: () => a7
});
function i11(r19) {
  if (!r19) throw new Error("[app.lifecycle.registerBeforeSuspendOrTerminateHandler] Handler cannot be null");
  p4(g3), P4(r19);
}
function a7(e22) {
  if (!e22) throw new Error("[app.lifecycle.registerOnResumeHandler] Handler cannot be null");
  p4(g3), z3(e22);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/messageChannels/telemetry.js
var telemetry_exports = {};
__export(telemetry_exports, {
  _clearTelemetryPort: () => a8,
  getTelemetryPort: () => p5,
  isSupported: () => u10
});
var l7;
var m8 = u5("messageChannels.telemetry");
function p5() {
  return n(this, void 0, void 0, function* () {
    if (l7) return m8("Returning telemetry port from cache"), l7;
    if (!u10()) throw l2;
    return l7 = yield A3(s6("v1", "messageChannels.telemetry.getTelemetryPort"), "messageChannels.telemetry.getTelemetryPort"), l7;
  });
}
function u10() {
  var e22;
  return !(!p4(g3) || !(null === (e22 = g3.supports.messageChannels) || void 0 === e22 ? void 0 : e22.telemetry));
}
function a8() {
  l7 = void 0;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/messageChannels/dataLayer.js
var dataLayer_exports = {};
__export(dataLayer_exports, {
  _clearDataLayerPort: () => u11,
  getDataLayerPort: () => m9,
  isSupported: () => p6
});
var s11;
var l8 = u5("messageChannels.dataLayer");
function m9() {
  return n(this, void 0, void 0, function* () {
    if (s11) return l8("Returning dataLayer port from cache"), s11;
    if (!p6()) throw l2;
    return s11 = yield A3(s6("v1", "messageChannels.dataLayer.getDataLayerPort"), "messageChannels.dataLayer.getDataLayerPort"), s11;
  });
}
function p6() {
  var t16;
  return !(!p4(g3) || !(null === (t16 = g3.supports.messageChannels) || void 0 === t16 ? void 0 : t16.dataLayer));
}
function u11() {
  s11 = void 0;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/app/app.js
var j7 = "v2";
var O8 = u5("app");
var N6 = { AppLoaded: "appInitialization.appLoaded", Success: "appInitialization.success", Failure: "appInitialization.failure", ExpectedFailure: "appInitialization.expectedFailure" };
var F4;
var b6;
function x3() {
  return e11.initializeCompleted;
}
function L3() {
  return e11.frameContext;
}
function A5(i26) {
  return A4(s6(j7, "app.initialize"), i26);
}
function z4() {
  var e22, i26;
  if (y2()) return null;
  const t16 = null !== (e22 = I3.currentWindow) && void 0 !== e22 ? e22 : window;
  if (t16.parent === t16) return null;
  const n19 = t16.location.ancestorOrigins, a35 = null == n19 ? void 0 : n19.item(0);
  if (a35) return a35;
  const o26 = null === (i26 = t16.document) || void 0 === i26 ? void 0 : i26.referrer;
  if (!o26) return null;
  try {
    const e23 = new URL(o26).origin;
    return e23 === t16.location.origin ? null : e23;
  } catch (e23) {
    return null;
  }
}
function D4(e22) {
  I3.currentWindow = e22;
}
function k3() {
  e11.initializeCalled && (m10(), e11.initializeCalled = false, e11.initializeCompleted = false, e11.initializePromise = void 0, e11.additionalValidOrigins = [], e11.frameContext = void 0, e11.hostClientType = void 0, e11.isFramelessWindow = false, a8(), u11(), j6());
}
function U4() {
  return new Promise((e22) => {
    m7(), e22(O6(s6(j7, "app.getContext"), "getContext"));
  }).then((e22) => (function(e23) {
    var i26;
    const t16 = { actionInfo: e23.actionInfo, app: { locale: e23.locale, sessionId: e23.appSessionId ? e23.appSessionId : "", theme: e23.theme ? e23.theme : "default", iconPositionVertical: e23.appIconPosition, osLocaleInfo: e23.osLocaleInfo, messageId: e23.messageId, parentMessageId: e23.parentMessageId, userClickTime: e23.userClickTime, userClickTimeV2: e23.userClickTimeV2, userFileOpenPreference: e23.userFileOpenPreference, host: { name: e23.hostName ? e23.hostName : i5.teams, clientType: e23.hostClientType ? e23.hostClientType : o4.web, features: e23.hostFeatures, sessionId: e23.sessionId ? e23.sessionId : "", ringId: e23.ringId, ancestors: e23.hostAncestors }, appLaunchId: e23.appLaunchId, appId: e23.appId ? new i9(e23.appId) : void 0, manifestVersion: e23.manifestVersion }, page: { id: e23.entityId, frameContext: e23.frameContext ? e23.frameContext : e11.frameContext, renderingSurface: e23.renderingSurface ? e23.renderingSurface : void 0, subPageId: e23.subEntityId, isFullScreen: e23.isFullScreen, isMultiWindow: e23.isMultiWindow, isBackgroundLoad: e23.isBackgroundLoad, sourceOrigin: e23.sourceOrigin }, user: { id: null !== (i26 = e23.userObjectId) && void 0 !== i26 ? i26 : "", displayName: e23.userDisplayName, isCallingAllowed: e23.isCallingAllowed, isPSTNCallingAllowed: e23.isPSTNCallingAllowed, licenseType: e23.userLicenseType, loginHint: e23.loginHint, userPrincipalName: e23.userPrincipalName, tenant: e23.tid ? { id: e23.tid, teamsSku: e23.tenantSKU } : void 0 }, channel: e23.channelId ? { id: e23.channelId, displayName: e23.channelName, relativeUrl: e23.channelRelativeUrl, membershipType: e23.channelType, defaultOneNoteSectionId: e23.defaultOneNoteSectionId, ownerGroupId: e23.hostTeamGroupId, ownerTenantId: e23.hostTeamTenantId } : void 0, chat: e23.chatId ? { id: e23.chatId } : void 0, meeting: e23.meetingId ? { id: e23.meetingId } : void 0, sharepoint: e23.sharepoint, team: e23.teamId ? { internalId: e23.teamId, displayName: e23.teamName, type: e23.teamType, groupId: e23.groupId, templateId: e23.teamTemplateId, isArchived: e23.isTeamArchived, userRole: e23.userTeamRole } : void 0, sharePointSite: e23.teamSiteUrl || e23.teamSiteDomain || e23.teamSitePath || e23.mySitePath || e23.mySiteDomain ? { teamSiteUrl: e23.teamSiteUrl, teamSiteDomain: e23.teamSiteDomain, teamSitePath: e23.teamSitePath, teamSiteId: e23.teamSiteId, mySitePath: e23.mySitePath, mySiteDomain: e23.mySiteDomain } : void 0, dialogParameters: e23.dialogParameters || {} };
    return t16;
  })(e22));
}
function H4() {
  m7(), F3(s6(j7, "app.notifyAppLoaded"));
}
function V4() {
  return R4(s6(j7, "app.notifySuccess"));
}
function E5(e22) {
  m7(), N5(s6(j7, "app.notifyFailure"), e22);
}
function M2(e22) {
  m7(), H3(s6(j7, "app.notifyExpectedFailure"), e22);
}
function W2(e22) {
  O7(s6(j7, "app.registerOnThemeChangeHandler"), e22);
}
function R5(e22) {
  T6(s6(j7, "app.registerOnContextChangeHandler"), e22);
}
function B3(e22) {
  y5(e22);
}
function G4(e22) {
  return G3(s6(j7, "app.openLink"), e22);
}
!(function(e22) {
  e22.AuthFailed = "AuthFailed", e22.Timeout = "Timeout", e22.Other = "Other";
})(F4 || (F4 = {})), (function(e22) {
  e22.PermissionError = "PermissionError", e22.NotFound = "NotFound", e22.Throttling = "Throttling", e22.Offline = "Offline", e22.Other = "Other";
})(b6 || (b6 = {})), O8("teamsjs instance is version %s, starting at %s UTC (%s local)", o12, (/* @__PURE__ */ new Date()).toISOString(), (/* @__PURE__ */ new Date()).toLocaleString()), (function() {
  if (y2()) return;
  const e22 = document.getElementsByTagName("script"), i26 = e22 && e22[e22.length - 1] && e22[e22.length - 1].src, t16 = "Today, teamsjs can only be used from a single script or you may see undefined behavior. This log line is used to help detect cases where teamsjs is loaded multiple times -- it is always written. The presence of the log itself does not indicate a multi-load situation, but multiples of these log lines will. If you would like to use teamjs from more than one script at the same time, please open an issue at https://github.com/OfficeDev/microsoft-teams-library-js/issues";
  i26 && 0 !== i26.length ? O8("teamsjs is being used from %s. %s", i26, t16) : O8("teamsjs is being used from a script tag embedded directly in your html. %s", t16);
})();

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/dialog.js
var dialog_exports = {};
__export(dialog_exports, {
  adaptiveCard: () => adaptiveCard_exports,
  initialize: () => p13,
  isSupported: () => l12,
  update: () => update_exports,
  url: () => url_exports
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/url/url.js
var url_exports = {};
__export(url_exports, {
  bot: () => bot_exports,
  getDialogInfoFromBotUrlDialogInfo: () => c8,
  getDialogInfoFromUrlDialogInfo: () => f10,
  isSupported: () => u13,
  open: () => a9,
  parentCommunication: () => parentCommunication_exports,
  submit: () => p10
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/url/bot.js
var bot_exports = {};
__export(bot_exports, {
  isSupported: () => e15,
  open: () => l9
});
function l9(t16, n19, l48) {
  k4(s6(p7, "dialog.url.bot.open"), t16, n19, l48);
}
function e15() {
  return p4(g3) && void 0 !== (g3.supports.dialog && g3.supports.dialog.url && g3.supports.dialog.url.bot);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/url/parentCommunication.js
var parentCommunication_exports = {};
__export(parentCommunication_exports, {
  isSupported: () => p9,
  registerOnMessageFromParent: () => u12,
  sendMessageToDialog: () => g7,
  sendMessageToParentFromDialog: () => d10
});
function d10(n19) {
  if (p4(g3, a2.task), !p9()) throw l2;
  $2(s6(p7, "dialog.url.parentCommunication.sendMessageToParentFromDialog"), "messageForParent", [n19]);
}
function g7(n19) {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !p9()) throw l2;
  $2(s6(p7, "dialog.url.parentCommunication.sendMessageToDialog"), "messageForChild", [n19]);
}
function u12(o26) {
  if (p4(g3, a2.task), !p9()) throw l2;
  for (g6("messageForChild"), p8(s6(p7, "dialog.url.parentCommunication.registerMessageForChildHandler"), "messageForChild", o26), F5.reverse(); F5.length > 0; ) {
    o26(F5.pop());
  }
}
function p9() {
  var o26, r19;
  return p4(g3) && !!(null === (r19 = null === (o26 = g3.supports.dialog) || void 0 === o26 ? void 0 : o26.url) || void 0 === r19 ? void 0 : r19.parentCommunication);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/url/url.js
function a9(o26, i26, l48) {
  b7(s6(p7, "dialog.url.open"), o26, i26, l48);
}
function p10(t16, i26) {
  j8(s6(p7, "dialog.url.submit"), t16, i26);
}
function u13() {
  return p4(g3) && void 0 !== (g3.supports.dialog && g3.supports.dialog.url);
}
function f10(t16) {
  return { url: t16.url, height: t16.size ? t16.size.height : r3.Small, width: t16.size ? t16.size.width : r3.Small, title: t16.title, fallbackUrl: t16.fallbackUrl };
}
function c8(t16) {
  const o26 = f10(t16);
  return o26.completionBotId = t16.completionBotId, o26;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/update.js
var update_exports = {};
__export(update_exports, {
  isSupported: () => p11,
  resize: () => n14
});
function n14(o26) {
  h8(s6(p7, "dialog.update.resize"), o26);
}
function p11() {
  return !(!p4(g3) || !g3.supports.dialog) && !!g3.supports.dialog.update;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/dialogHelpers.js
var p7 = "v2";
function h8(e22, n19) {
  if (p4(g3, a2.content, a2.sidePanel, a2.task, a2.meetingStage), !p11()) throw l2;
  $2(e22, "tasks.updateTask", [n19]);
}
function b7(e22, n19, d39, g23) {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !u13()) throw l2;
  g23 && p8(s6(p7, "dialog.url.registerMessageForParentHandler"), "messageForParent", g23);
  const f48 = f10(n19);
  $2(e22, "tasks.startTask", [f48], (t16, e23) => {
    null == d39 || d39({ err: t16, result: e23 }), g6("messageForParent");
  });
}
function k4(e22, n19, c45, u56) {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !e15()) throw l2;
  u56 && p8(s6(p7, "dialog.url.bot.registerMessageForParentHandler"), "messageForParent", u56);
  const f48 = c8(n19);
  $2(e22, "tasks.startTask", [f48], (t16, e23) => {
    null == c45 || c45({ err: t16, result: e23 }), g6("messageForParent");
  });
}
function j8(e22, a35, l48) {
  if (p4(g3, a2.content, a2.task), !u13()) throw l2;
  e11.frameContext === a2.content && console.warn("dialog.submit should not be called from FrameContext.content.\nIf dialog.submit was called from inside the dialog, please disregard this message.\nThis issue occurs due to a bug in Teams mobile where the dialog is incorrectly identified as being in the content FrameContext.\nWe are working to resolve this."), $2(e22, "tasks.completeTask", [a35, l48 ? Array.isArray(l48) ? l48 : [l48] : []]);
}
function w6(t16) {
  return { card: t16.card, height: t16.size ? t16.size.height : r3.Small, width: t16.size ? t16.size.width : r3.Small, title: t16.title };
}
function P5(t16) {
  const e22 = w6(t16);
  return e22.completionBotId = t16.completionBotId, e22;
}
var F5 = [];
function S4(t16) {
  e11.frameContext && (e11.frameContext === a2.task ? F5.push(t16) : g6("messageForChild"));
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/adaptiveCard/adaptiveCard.js
var adaptiveCard_exports = {};
__export(adaptiveCard_exports, {
  bot: () => bot_exports2,
  isSupported: () => f11,
  open: () => l11
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/adaptiveCard/bot.js
var bot_exports2 = {};
__export(bot_exports2, {
  isSupported: () => l10,
  open: () => p12
});
function p12(i26, p59) {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !l10()) throw l2;
  const d39 = P5(i26);
  $2(s6(p7, "dialog.adaptiveCard.bot.open"), "tasks.startTask", [d39], (o26, t16) => {
    null == p59 || p59({ err: o26, result: t16 });
  });
}
function l10() {
  const o26 = g3.hostVersionsInfo && g3.hostVersionsInfo.adaptiveCardSchemaVersion && !m3(g3.hostVersionsInfo.adaptiveCardSchemaVersion);
  return p4(g3) && void 0 !== (o26 && g3.supports.dialog && g3.supports.dialog.card && g3.supports.dialog.card.bot);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/adaptiveCard/adaptiveCard.js
function l11(i26, p59) {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !f11()) throw l2;
  const l48 = w6(i26);
  $2(s6(p7, "dialog.adaptiveCard.open"), "tasks.startTask", [l48], (o26, t16) => {
    null == p59 || p59({ err: o26, result: t16 });
  });
}
function f11() {
  const o26 = g3.hostVersionsInfo && g3.hostVersionsInfo.adaptiveCardSchemaVersion && !m3(g3.hostVersionsInfo.adaptiveCardSchemaVersion);
  return p4(g3) && void 0 !== (o26 && g3.supports.dialog && g3.supports.dialog.card);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/dialog.js
function p13() {
  p8(s6(p7, "dialog.registerMessageForChildHandler"), "messageForChild", S4, false);
}
function l12() {
  return !(!p4(g3) || !g3.supports.dialog);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/menus.js
var menus_exports = {};
__export(menus_exports, {
  DisplayMode: () => u14,
  MenuItem: () => a10,
  MenuListType: () => m11,
  initialize: () => p14,
  isSupported: () => P6,
  setNavBarMenu: () => M3,
  setUpViews: () => d11,
  showActionMenu: () => v6
});
var i12 = "v2";
var u14;
var m11;
!(function(e22) {
  e22[e22.ifRoom = 0] = "ifRoom", e22[e22.overflowOnly = 1] = "overflowOnly";
})(u14 || (u14 = {}));
var a10 = class {
  constructor() {
    this.enabled = true, this.selected = false;
  }
};
var f12;
var l13;
var c9;
function p14() {
  p8(s6(i12, "menus.registerNavBarMenuItemPressHandler"), "navBarMenuItemPress", h9, false), p8(s6(i12, "menus.registerActionMenuItemPressHandler"), "actionMenuItemPress", I4, false), p8(s6(i12, "menus.registerSetModuleViewHandler"), "setModuleView", w7, false);
}
function d11(n19, u56) {
  if (p4(g3), !P6()) throw l2;
  c9 = u56, $2(s6(i12, "menus.setUpViews"), "setUpViews", [n19]);
}
function w7(n19) {
  c9 && c9(n19) || (p4(g3), $2(s6(i12, "menus.handleViewConfigItemPress"), "viewConfigItemPress", [n19]));
}
function M3(n19, u56) {
  if (p4(g3), !P6()) throw l2;
  f12 = u56, $2(s6(i12, "menus.setNavBarMenu"), "setNavBarMenu", [n19]);
}
function h9(n19) {
  f12 && f12(n19) || (p4(g3), $2(s6(i12, "menus.handleNavBarMenuItemPress"), "handleNavBarMenuItemPress", [n19]));
}
function v6(n19, u56) {
  if (p4(g3), !P6()) throw l2;
  l13 = u56, $2(s6(i12, "menus.showActionMenu"), "showActionMenu", [n19]);
}
function I4(n19) {
  l13 && l13(n19) || (p4(g3), $2(s6(i12, "menus.handleActionMenuItemPress"), "handleActionMenuItemPress", [n19]));
}
function P6() {
  return !(!p4(g3) || !g3.supports.menus);
}
!(function(e22) {
  e22.dropDown = "dropDown", e22.popOver = "popOver";
})(m11 || (m11 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/responseHandler.js
var e16 = class {
};
var r12 = class extends e16 {
  validate(e22) {
    return true;
  }
  deserialize(e22) {
    return e22;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/config.js
var config_exports = {};
__export(config_exports, {
  initialize: () => h11,
  isSupported: () => O9,
  registerChangeConfigHandler: () => H5,
  registerOnRemoveHandler: () => j9,
  registerOnRemoveHandlerHelper: () => w8,
  registerOnSaveHandler: () => S5,
  registerOnSaveHandlerHelper: () => N7,
  setConfig: () => y6,
  setValidityState: () => d12
});
var p15;
var v8;
function h11() {
  p8(s6(h10, "pages.config.registerSettingsSaveHandler"), "settings.save", E6, false), p8(s6(h10, "pages.config.registerSettingsRemoveHandler"), "settings.remove", F6, false);
}
function d12(e22) {
  return T7(s6(h10, "pages.config.setValidityState"), e22);
}
function y6(e22) {
  return L4(s6(h10, "pages.config.setConfig"), e22);
}
function S5(e22) {
  N7(s6(h10, "pages.config.registerOnSaveHandler"), e22, () => {
    if (!n13(e22) && !O9()) throw l2;
  });
}
function N7(e22, t16, n19) {
  !n13(t16) && p4(g3, a2.settings), n19 && n19(), p15 = t16, !n13(t16) && $2(e22, "registerHandler", ["save"]);
}
function j9(e22) {
  w8(s6(h10, "pages.config.registerOnRemoveHandler"), e22, () => {
    if (!n13(e22) && !O9()) throw l2;
  });
}
function w8(e22, t16, n19) {
  !n13(t16) && p4(g3, a2.remove, a2.settings), n19 && n19(), v8 = t16, !n13(t16) && $2(e22, "registerHandler", ["remove"]);
}
function E6(i26) {
  const n19 = new C7(i26);
  p15 ? p15(n19) : m12() ? v7("settings.save", [i26]) : n19.notifySuccess();
}
function H5(e22) {
  C6(s6(h10, "pages.config.registerChangeConfigHandler"), "changeSettings", e22, [a2.content], () => {
    if (!O9()) throw l2;
  });
}
var C7 = class {
  constructor(e22) {
    this.notified = false, this.result = e22 || {};
  }
  notifySuccess() {
    this.ensureNotNotified(), $2(s6(h10, "pages.saveEvent.notifySuccess"), "settings.save.success"), this.notified = true;
  }
  notifyFailure(e22) {
    this.ensureNotNotified(), $2(s6(h10, "pages.saveEvent.notifyFailure"), "settings.save.failure", [e22]), this.notified = true;
  }
  ensureNotNotified() {
    if (this.notified) throw new Error("The SaveEvent may only notify success or failure once.");
  }
};
function F6() {
  const i26 = new T8();
  v8 ? v8(i26) : m12() ? v7("settings.remove", []) : i26.notifySuccess();
}
var T8 = class {
  constructor() {
    this.notified = false;
  }
  notifySuccess() {
    this.ensureNotNotified(), $2(s6(h10, "pages.removeEvent.notifySuccess"), "settings.remove.success"), this.notified = true;
  }
  notifyFailure(e22) {
    this.ensureNotNotified(), $2(s6(h10, "pages.removeEvent.notifyFailure"), "settings.remove.failure", [e22]), this.notified = true;
  }
  ensureNotNotified() {
    if (this.notified) throw new Error("The removeEventType may only notify success or failure once.");
  }
};
function O9() {
  return !(!p4(g3) || !g3.supports.pages) && !!g3.supports.pages.config;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/appHelpers.js
var k5 = u5("app");
function A4(i26, e22) {
  if (y2()) {
    return k5.extend("initialize")("window object undefined at initialization"), Promise.resolve();
  }
  return p(() => (function(i27, e23) {
    return new Promise((t16) => {
      e11.initializeCalled || (e11.initializeCalled = true, f13(), e11.initializePromise = E4(e23, i27).then(({ context: i28, clientType: e24, runtimeConfig: t17, clientSupportedSDKVersion: n19 = t9 }) => {
        e11.frameContext = i28, e11.hostClientType = e24, e11.clientSupportedSDKVersion = n19;
        try {
          L5("Parsing %s", t17);
          let i29 = JSON.parse(t17);
          if (L5("Checking if %o is a valid runtime object", null != i29 ? i29 : "null"), !i29 || !i29.apiVersion) throw new Error("Received runtime config is invalid");
          i29 = P2(i29), t17 && A2(i29);
        } catch (i29) {
          if (!(i29 instanceof SyntaxError)) throw i29;
          try {
            L5("Attempting to parse %s as an SDK version", t17), isNaN(s3(t17, t9)) || (e11.clientSupportedSDKVersion = t17);
            let i30 = JSON.parse(n19);
            if (L5("givenRuntimeConfig parsed to %o", null != i30 ? i30 : "null"), !i30) throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");
            i30 = P2(i30), A2(i30);
          } catch (i30) {
            if (!(i30 instanceof SyntaxError)) throw i30;
            A2(w3(e11.clientSupportedSDKVersion, m5, V2));
          }
        }
        e11.initializeCompleted = true;
      }), p14(), h11(), p13()), Array.isArray(e23) && w5(e23), void 0 !== e11.initializePromise ? t16(e11.initializePromise) : L5("GlobalVars.initializePromise is unexpectedly undefined");
    });
  })(i26, e22), 6e4, new Error("SDK initialization timed out."));
}
function F3(i26) {
  $2(i26, N6.AppLoaded, [o12]);
}
function H3(i26, e22) {
  $2(i26, N6.ExpectedFailure, [e22.reason, e22.message]);
}
function N5(i26, e22) {
  $2(i26, N6.Failure, [e22.reason, e22.message, e22.authHeader]);
}
function R4(e22) {
  return n(this, void 0, void 0, function* () {
    if (e11.initializeCompleted) return J3(e22);
    if (!e11.initializePromise) throw new Error(y3);
    return e11.initializePromise.then(() => J3(e22));
  });
}
function J3(e22) {
  return n(this, void 0, void 0, function* () {
    return p4(g3) && (null === (i26 = g3.supports.app) || void 0 === i26 ? void 0 : i26.notifySuccessResponse) ? N4(N6.Success, [o12], new r12(), e22).then(() => ({ hasFinishedSuccessfully: true })) : ($2(e22, N6.Success, [o12]), { hasFinishedSuccessfully: "unknown" });
    var i26;
  });
}
var L5 = k5.extend("initializeHelper");
function O7(i26, e22) {
  !n13(e22) && m7(), U5(i26, e22);
}
function T6(i26, e22) {
  !n13(e22) && m7(), T9(i26, e22);
}
function G3(i26, t16) {
  return new Promise((n19) => {
    p4(g3, a2.content, a2.sidePanel, a2.settings, a2.task, a2.stage, a2.meetingStage), n19(R3(i26, "executeDeepLink", t16));
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/appButton.js
var appButton_exports = {};
__export(appButton_exports, {
  isSupported: () => m13,
  onClick: () => i13,
  onHoverEnter: () => s12,
  onHoverLeave: () => u15
});
function i13(n19) {
  C6(s6(h10, "pages.appButton.onClick"), "appButtonClick", n19, [a2.content], () => {
    if (!m13()) throw l2;
  });
}
function s12(n19) {
  C6(s6(h10, "pages.appButton.onHoverEnter"), "appButtonHoverEnter", n19, [a2.content], () => {
    if (!m13()) throw l2;
  });
}
function u15(n19) {
  C6(s6(h10, "pages.appButton.onHoverLeave"), "appButtonHoverLeave", n19, [a2.content], () => {
    if (!m13()) throw l2;
  });
}
function m13() {
  return !(!p4(g3) || !g3.supports.pages) && !!g3.supports.pages.appButton;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/backStack.js
var backStack_exports = {};
__export(backStack_exports, {
  _initialize: () => m14,
  isSupported: () => k6,
  navigateBack: () => f14,
  registerBackButtonHandler: () => u16,
  registerBackButtonHandlerHelper: () => l14
});
function m14() {
  R6();
}
function f14() {
  return j10(s6(h10, "pages.backStack.navigateBack"));
}
function u16(t16) {
  l14(s6(h10, "pages.backStack.registerBackButtonHandler"), t16, () => {
    if (!n13(t16) && !k6()) throw l2;
  });
}
function l14(n19, e22, i26) {
  !n13(e22) && p4(g3), i26 && i26(), F7(e22), !n13(e22) && $2(n19, "registerHandler", ["backButton"]);
}
function k6() {
  return !(!p4(g3) || !g3.supports.pages) && !!g3.supports.pages.backStack;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/currentApp.js
var currentApp_exports = {};
__export(currentApp_exports, {
  isSupported: () => g8,
  navigateTo: () => o15,
  navigateToDefaultPage: () => p16
});
function o15(o26) {
  return new Promise((p59) => {
    if (p4(g3, a2.content, a2.sidePanel, a2.settings, a2.task, a2.stage, a2.meetingStage), !g8()) throw l2;
    p59(P3(s6(h10, "pages.currentApp.navigateTo"), "pages.currentApp.navigateTo", o26));
  });
}
function p16() {
  return new Promise((o26) => {
    if (p4(g3, a2.content, a2.sidePanel, a2.settings, a2.task, a2.stage, a2.meetingStage), !g8()) throw l2;
    o26(P3(s6(h10, "pages.currentApp.navigateToDefaultPage"), "pages.currentApp.navigateToDefaultPage"));
  });
}
function g8() {
  return !(!p4(g3) || !g3.supports.pages) && !!g3.supports.pages.currentApp;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/fullTrust.js
var fullTrust_exports = {};
__export(fullTrust_exports, {
  enterFullscreen: () => l15,
  exitFullscreen: () => u17,
  isSupported: () => p17
});
function l15() {
  if (p4(g3, a2.content), !p17()) throw l2;
  $2(s6(h10, "pages.fullTrust.enterFullscreen"), "enterFullscreen", []);
}
function u17() {
  if (p4(g3, a2.content), !p17()) throw l2;
  $2(s6(h10, "pages.fullTrust.exitFullscreen"), "exitFullscreen", []);
}
function p17() {
  return !(!p4(g3) || !g3.supports.pages) && !!g3.supports.pages.fullTrust;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/tabs.js
var tabs_exports = {};
__export(tabs_exports, {
  getMruTabInstances: () => u18,
  getTabInstances: () => i14,
  isSupported: () => m15,
  navigateToTab: () => p18
});
function p18(t16) {
  return v9(s6(h10, "pages.tabs.navigateToTab"), t16);
}
function i14(t16) {
  return S6(s6(h10, "pages.tabs.getTabInstances"), t16);
}
function u18(t16) {
  return k7(s6(h10, "pages.tabs.getMruTabInstances"), t16);
}
function m15() {
  return !(!p4(g3) || !g3.supports.pages) && !!g3.supports.pages.tabs;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/pages.js
var A6;
var T10;
function w9(e22) {
  const t16 = s6(h10, "pages.returnFocus");
  if (p4(g3), !z5()) throw l2;
  if (void 0 === e22 && $2(t16, "returnFocus", [false]), "boolean" == typeof e22) $2(t16, "returnFocus", [e22]);
  else switch (e22) {
    case T10.PreviousLandmark:
    case T10.GoToActivityFeed:
      $2(t16, "returnFocus", [false, e22]);
      break;
    case T10.NextLandmark:
      $2(t16, "returnFocus", [true, e22]);
  }
}
function N8(e22) {
  C6(s6(h10, "pages.registerFocusEnterHandler"), "focusEnter", e22, [], () => {
    if (!z5()) throw l2;
  });
}
function b8(e22) {
  B4(s6(h10, "pages.setCurrentFrame"), e22);
}
function H6(r19, t16, n19) {
  g4(), A4(s6(h10, "pages.initializeWithFrameContext"), n19).then(() => t16 && t16()), b8(r19);
}
function S7() {
  return C8(s6(h10, "pages.getConfig."));
}
function D5(e22) {
  return P7(s6(h10, "pages.navigateCrossDomain"), e22);
}
function G5(e22) {
  return new Promise((r19) => {
    if (p4(g3, a2.content, a2.sidePanel, a2.settings, a2.task, a2.stage, a2.meetingStage), !z5()) throw l2;
    const n19 = s6(h10, "pages.navigateToApp");
    if (g3.isLegacyTeams) {
      const o26 = O10(e22) ? e22 : x4(e22);
      r19(R3(n19, "executeDeepLink", d3(o26)));
    } else {
      const o26 = O10(e22) ? y7(e22) : e22;
      r19(R3(n19, "pages.navigateToApp", o26));
    }
  });
}
function E7(e22) {
  return U6(s6(h10, "pages.shareDeepLink"), e22);
}
function R7(e22) {
  C6(s6(h10, "pages.registerFullScreenHandler"), "fullScreenChange", e22, [], () => {
    if (!n13(e22) && !z5()) throw l2;
  });
}
function z5() {
  return !(!p4(g3) || !g3.supports.pages);
}
!(function(e22) {
  e22[e22.PreviousLandmark = 0] = "PreviousLandmark", e22[e22.NextLandmark = 1] = "NextLandmark", e22[e22.Read = 2] = "Read", e22[e22.Compose = 3] = "Compose";
})(A6 || (A6 = {})), (function(e22) {
  e22[e22.PreviousLandmark = 0] = "PreviousLandmark", e22[e22.NextLandmark = 1] = "NextLandmark", e22[e22.GoToActivityFeed = 2] = "GoToActivityFeed";
})(T10 || (T10 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/pagesHelpers.js
var h10 = "v2";
function P7(t16, o26) {
  return new Promise((s40) => {
    if (p4(g3, a2.content, a2.sidePanel, a2.settings, a2.remove, a2.task, a2.stage, a2.meetingStage), !z5()) throw l2;
    s40(C4(t16, "navigateCrossDomain", "Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.", o26));
  });
}
function j10(t16) {
  return new Promise((n19) => {
    if (p4(g3), !k6()) throw l2;
    n19(C4(t16, "navigateBack", "Back navigation is not supported in the current client or context."));
  });
}
function v9(t16, n19) {
  return new Promise((i26) => {
    if (p4(g3), !m15()) throw l2;
    i26(C4(t16, "navigateToTab", "Invalid internalTabInstanceId and/or channelId were/was provided", n19));
  });
}
function I5(t16, n19) {
  if (p4(g3), !z5()) throw l2;
  $2(t16, "returnFocus", [n19]);
}
function S6(t16, n19) {
  return new Promise((i26) => {
    if (p4(g3), !m15()) throw l2;
    i26(O6(t16, "getTabInstances", n19));
  });
}
function k7(t16, n19) {
  return new Promise((i26) => {
    if (p4(g3), !m15()) throw l2;
    i26(O6(t16, "getMruTabInstances", n19));
  });
}
function U6(t16, o26) {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !z5()) throw l2;
  $2(t16, "shareDeepLink", [o26.subPageId, o26.subPageLabel, o26.subPageWebUrl]);
}
function B4(t16, o26) {
  if (p4(g3, a2.content), !z5()) throw l2;
  $2(t16, "setFrameContext", [o26]);
}
function T7(t16, i26) {
  if (p4(g3, a2.settings, a2.remove), !O9()) throw l2;
  $2(t16, "settings.setValidityState", [i26]);
}
function C8(t16) {
  return new Promise((o26) => {
    if (p4(g3, a2.content, a2.settings, a2.remove, a2.sidePanel), !z5()) throw l2;
    o26(O6(t16, "settings.getSettings"));
  });
}
function L4(t16, i26) {
  return new Promise((o26) => {
    if (p4(g3, a2.content, a2.settings, a2.sidePanel), !O9()) throw l2;
    o26(R3(t16, "settings.setSettings", i26));
  });
}
function O10(e22) {
  return e22.appId instanceof i9;
}
function x4(e22) {
  return Object.assign(Object.assign({}, e22), { appId: new i9(e22.appId), webUrl: e22.webUrl ? new URL(e22.webUrl) : void 0 });
}
function y7(t16) {
  return Object.assign(Object.assign({}, t16), { appId: t16.appId.toString(), webUrl: t16.webUrl ? t16.webUrl.toString() : void 0 });
}
var D6;
function F7(t16) {
  D6 = t16;
}
function R6() {
  p8(s6("v2", "pages.backStack.registerBackButtonPressHandler"), "backButtonPress", A7, false);
}
function A7() {
  D6 && D6() || (m12() ? v7("backButtonPress", []) : f14());
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/handlers.js
var u19 = u5("handlers");
var c10 = class _c {
  static initializeHandlers() {
    _c.handlers.themeChange = x5, _c.handlers.contextChange = v10, _c.handlers.load = S8, _c.handlers.beforeUnload = A8, R6();
  }
  static uninitializeHandlers() {
    _c.handlers = {}, _c.themeChangeHandler = null, _c.beforeUnloadHandler = null, _c.beforeSuspendOrTerminateHandler = null, _c.resumeHandler = null, _c.contextChangeHandler = null;
  }
};
function f13() {
  c10.initializeHandlers();
}
function m10() {
  c10.uninitializeHandlers();
}
c10.handlers = {}, c10.themeChangeHandler = null, c10.loadHandler = null, c10.beforeUnloadHandler = null, c10.beforeSuspendOrTerminateHandler = null, c10.resumeHandler = null, c10.hostToAppPerformanceMetricsHandler = null, c10.contextChangeHandler = null;
var H7 = u19.extend("callHandler");
function h6(e22, n19) {
  const r19 = c10.handlers[e22];
  if (r19) {
    H7("Invoking the registered handler for message %s with arguments %o", e22, n19);
    return [true, r19.apply(this, n19)];
  }
  return m12() ? (v7(e22, n19), [false, void 0]) : (H7("Handler for action message %s not found.", e22), [false, void 0]);
}
function p8(e22, n19, r19, l48 = true, a35 = []) {
  r19 ? (c10.handlers[n19] = r19, l48 && $2(e22, "registerHandler", [n19, ...a35])) : delete c10.handlers[n19];
}
function g6(e22) {
  delete c10.handlers[e22];
}
function b9(e22) {
  return null != c10.handlers[e22];
}
function C6(e22, n19, r19, a35, t16) {
  r19 && p4(g3, ...a35), t16 && t16(), p8(e22, n19, r19);
}
function U5(e22, n19) {
  c10.themeChangeHandler = n19, !n13(n19) && $2(e22, "registerHandler", ["themeChange"]);
}
function T9(e22, n19) {
  c10.contextChangeHandler = n19, !n13(n19) && $2(e22, "registerHandler", ["contextChange"]);
}
function x5(e22) {
  c10.themeChangeHandler && c10.themeChangeHandler(e22), m12() && v7("themeChange", [e22]);
}
function v10(e22) {
  c10.contextChangeHandler && c10.contextChangeHandler(e22), m12() && v7("contextChange", [e22]);
}
function y5(e22) {
  c10.hostToAppPerformanceMetricsHandler = e22;
}
function j5(e22) {
  c10.hostToAppPerformanceMetricsHandler && c10.hostToAppPerformanceMetricsHandler(e22);
}
function O11(e22, n19) {
  c10.loadHandler = n19, !n13(n19) && $2(e22, "registerHandler", ["load"]);
}
function S8(e22) {
  const n19 = { entityId: (r19 = e22).entityId, contentUrl: new URL(r19.contentUrl) };
  var r19;
  c10.resumeHandler ? (c10.resumeHandler(n19), m12() && v7("load", [n19])) : c10.loadHandler && (c10.loadHandler(e22), m12() && v7("load", [e22]));
}
function _4(e22, n19) {
  c10.beforeUnloadHandler = n19, !n13(n19) && $2(e22, "registerHandler", ["beforeUnload"]);
}
function A8() {
  return n(this, void 0, void 0, function* () {
    const e22 = () => {
      $2(s6("v2", "handleBeforeUnload"), "readyToUnload", []);
    };
    c10.beforeSuspendOrTerminateHandler ? (yield c10.beforeSuspendOrTerminateHandler(), m12() ? v7("beforeUnload") : e22()) : c10.beforeUnloadHandler && c10.beforeUnloadHandler(e22) || (m12() ? v7("beforeUnload") : e22());
  });
}
function P4(e22) {
  c10.beforeSuspendOrTerminateHandler = e22, !n13(e22) && $2(s6("v2", "registerBeforeSuspendOrTerminateHandler"), "registerHandler", ["beforeUnload"]);
}
function z3(e22) {
  c10.resumeHandler = e22, !n13(e22) && $2(s6("v2", "registerOnResumeHandler"), "registerHandler", ["load"]);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/childCommunication.js
var c11 = u5("childProxyingCommunication");
var l16 = class {
};
function g5() {
  l16.window = null, l16.origin = null, l16.messageQueue = [];
}
function m12() {
  return !!o() && !!l16.window;
}
function f8(n19, o26) {
  return !!o() && (l16.window && !l16.window.closed && n19 !== l16.window || (l16.window = n19, l16.origin = o26), l16.window && l16.window.closed ? (l16.window = null, l16.origin = null, false) : l16.window === n19);
}
function w4(i26, d39, a35, c45) {
  return n(this, void 0, void 0, function* () {
    l16.window === d39 && (u6(l16.window, l16.origin, l16.messageQueue, "child"), (function(n19, i27, s40) {
      if (void 0 === n19.data.id || void 0 === n19.data.func) return;
      const d40 = s4(n19.data), [a36, c46] = h6(d40.func, d40.args);
      if (a36 && void 0 !== c46) return p19("Handler called in response to message %s from child. Returning response from handler to child, action: %s.", i7(d40), d40.func), void h12(d40.id, d40.uuid, Array.isArray(c46) ? c46 : [c46]);
      p19("No handler for message %s from child found; relaying message on to parent, action: %s. Relayed message will have a new id.", i7(d40), d40.func), (function(n20, i28, s41) {
        const r19 = i28(s6("v2", "tasks.startTask"), n20.func, n20.args, true, n20.teamsJsInstanceId), t16 = l16.origin;
        s41(r19.uuid, (...i29) => {
          if (!l16.window) return;
          if (!c().disableEnforceOriginMatchForChildResponses && t16 !== l16.origin) return void p19("Origin of child window has changed, not sending response back to child window");
          const s42 = i29.pop();
          p19("Message from parent being relayed to child, id: %s", i7(n20)), h12(n20.id, n20.uuid, i29, s42);
        });
      })(d40, i27, s40);
    })(i26, a35, c45));
  });
}
l16.messageQueue = [];
var p19 = c11.extend("handleIncomingMessageFromChild");
function h12(n19, i26, o26, s40) {
  const r19 = l16.window, t16 = /* @__PURE__ */ (function(n20, i27, o27, s41) {
    return { id: n20, uuid: i27, args: o27 || [], isPartialResponse: s41 };
  })(n19, i26, o26, s40), a35 = r5(t16), u56 = l16.origin;
  r19 && u56 && (p19("Sending message %s to %s via postMessage, args = %o", i7(a35), "child", a35.args), r19.postMessage(a35, u56));
}
function v7(n19, i26) {
  const o26 = l16.window, s40 = /* @__PURE__ */ (function(n20, i27) {
    return { func: n20, args: i27 || [] };
  })(n19, i26), e22 = l16.origin;
  o26 && e22 ? o26.postMessage(s40, e22) : l16.messageQueue.push(s40);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/privateAPIs.js
var m16 = "v1";
function p20(e22, t16) {
  p4(g3), $2(s6(m16, "uploadCustomApp"), "uploadCustomApp", [e22], t16 || i6());
}
function c12(e22, t16, i26) {
  p4(g3), $2(s6(m16, "sendCustomMessage"), e22, t16, i26);
}
function d13(n19, i26) {
  if (p4(g3), !m12()) throw new Error("The child window has not yet been initialized or is not present");
  v7(n19, i26);
}
function u20(e22, t16) {
  p4(g3), p8(s6(m16, "registerCustomHandler"), e22, (...e23) => t16.apply(this, e23));
}
function f15(e22, t16) {
  p4(g3), p8(s6(m16, "registerUserSettingsChangeHandler"), "userSettingsChange", t16, true, [e22]);
}
function h13(e22) {
  p4(g3, a2.content, a2.sidePanel, a2.task);
  const t16 = [e22.entityId, e22.title, e22.description, e22.type, e22.objectUrl, e22.downloadUrl, e22.webPreviewUrl, e22.webEditUrl, e22.baseUrl, e22.editFile, e22.subEntityId, e22.viewerAction, e22.fileOpenPreference, e22.conversationId, e22.sizeInBytes, e22.messageId, e22.callerInfo, e22.atpData, e22.shareUrl, e22.replyChainId];
  $2(s6(m16, "openFilePreview"), "openFilePreview", t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppAuthentication.js
var externalAppAuthentication_exports = {};
__export(externalAppAuthentication_exports, {
  ActionExecuteInvokeRequestType: () => A9,
  ActionExecuteResponseHandler: () => g9,
  InvokeErrorCode: () => v11,
  InvokeResponseType: () => w10,
  OriginalRequestType: () => I6,
  SerializableActionExecuteInvokeRequest: () => f16,
  SerializableConnectorParameters: () => O12,
  UserAuthenticationState: () => x6,
  authenticateAndResendRequest: () => C9,
  authenticateWithConnector: () => b10,
  authenticateWithOauth2: () => S9,
  authenticateWithPowerPlatformConnectorPlugins: () => j11,
  authenticateWithSSO: () => q3,
  authenticateWithSSOAndResendRequest: () => P8,
  disconnectConnector: () => k8,
  getUserAuthenticationStateForConnector: () => T11,
  isActionExecuteResponse: () => m17,
  isInvokeError: () => R8,
  isSupported: () => z6,
  validateActionExecuteInvokeRequest: () => y8
});
var p21 = "v2";
var f16 = class {
  constructor(e22) {
    this.invokeRequest = e22;
  }
  serialize() {
    return this.invokeRequest;
  }
};
function m17(e22) {
  if ("object" != typeof e22 || null === e22) return false;
  const t16 = e22;
  return t16.responseType === w10.ActionExecuteInvokeResponse && void 0 !== t16.value && void 0 !== t16.statusCode && void 0 !== t16.type;
}
var A9 = "Action.Execute";
var I6;
var w10;
var v11;
var x6;
!(function(e22) {
  e22.ActionExecuteInvokeRequest = "ActionExecuteInvokeRequest", e22.QueryMessageExtensionRequest = "QueryMessageExtensionRequest";
})(I6 || (I6 = {})), (function(e22) {
  e22.ActionExecuteInvokeResponse = "ActionExecuteInvokeResponse", e22.QueryMessageExtensionResponse = "QueryMessageExtensionResponse";
})(w10 || (w10 = {}));
var g9 = class extends e16 {
  validate(e22) {
    return m17(e22);
  }
  deserialize(e22) {
    return e22;
  }
};
function R8(e22) {
  if ("object" != typeof e22 || null === e22) return false;
  const t16 = e22;
  return Object.values(v11).includes(t16.errorCode) && (void 0 === t16.message || "string" == typeof t16.message);
}
function E8(e22) {
  e22.requestType === I6.ActionExecuteInvokeRequest ? y8(e22) : e22.requestType === I6.QueryMessageExtensionRequest && (function(e23) {
    if (e23.commandId.length > 64) throw new Error("originalRequestInfo.commandId exceeds the maximum size of 64 characters");
    if (e23.parameters.length > 5) throw new Error("originalRequestInfo.parameters exceeds the maximum size of 5");
    for (const t16 of e23.parameters) {
      if (t16.name.length > 64) throw new Error("originalRequestInfo.parameters.name exceeds the maximum size of 64 characters");
      if (t16.value.length > 512) throw new Error("originalRequestInfo.parameters.value exceeds the maximum size of 512 characters");
    }
  })(e22);
}
function y8(e22) {
  if (e22.type !== A9) {
    throw { errorCode: v11.INTERNAL_ERROR, message: `Invalid action type ${e22.type}. Action type must be "${A9}"` };
  }
  if (!S2(e22.data)) {
    throw { errorCode: v11.INTERNAL_ERROR, message: `Invalid data type ${typeof e22.data}. Data must be a primitive or a plain object.` };
  }
}
function C9(t16, n19, o26) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  const a35 = new i9(t16);
  return E8(o26), S3(s6(p21, "externalAppAuthentication.authenticateAndResendRequest"), "externalAppAuthentication.authenticateAndResendRequest", [a35.toString(), o26, n19.url.href, n19.width, n19.height, n19.isExternal]).then(([e22, t17]) => {
    if (e22 && null != t17.responseType) return t17;
    throw t17;
  });
}
function q3(t16, n19) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  const o26 = new i9(t16);
  return S3(s6(p21, "externalAppAuthentication.authenticateWithSSO"), "externalAppAuthentication.authenticateWithSSO", [o26.toString(), n19.claims, n19.silent]).then(([e22, t17]) => {
    if (!e22) throw t17;
  });
}
function P8(t16, n19, o26) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  const a35 = new i9(t16);
  return E8(o26), S3(s6(p21, "externalAppAuthentication.authenticateWithSSOAndResendRequest"), "externalAppAuthentication.authenticateWithSSOAndResendRequest", [a35.toString(), o26, n19.claims, n19.silent]).then(([e22, t17]) => {
    if (e22 && null != t17.responseType) return t17;
    throw t17;
  });
}
function S9(t16, n19, o26) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  return j2(t16, new Error("titleId is Invalid.")), j2(n19, new Error("oauthConfigId is Invalid.")), S3(s6(p21, "externalAppAuthentication.authenticateWithOauth2"), "externalAppAuthentication.authenticateWithOauth2", [t16, n19, o26.width, o26.height, o26.isExternal]).then(([e22, t17]) => {
    if (!e22) throw t17;
  });
}
function j11(t16, n19, o26) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  return j2(t16, new Error("titleId is Invalid.")), n19 && I2(n19), S3(s6(p21, "externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins"), "externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins", [t16, null == n19 ? void 0 : n19.toString(), null == o26 ? void 0 : o26.width, null == o26 ? void 0 : o26.height, null == o26 ? void 0 : o26.isExternal]).then(([e22, t17]) => {
    if (!e22) throw t17;
  });
}
!(function(e22) {
  e22.INTERNAL_ERROR = "INTERNAL_ERROR";
})(v11 || (v11 = {}));
var O12 = class {
  constructor(e22) {
    this.param = e22;
  }
  serialize() {
    var e22, t16, n19;
    return { connectorId: this.param.connectorId, oAuthConfigId: this.param.oAuthConfigId, traceId: null !== (n19 = null === (t16 = null === (e22 = this.param.traceId) || void 0 === e22 ? void 0 : e22.toString) || void 0 === t16 ? void 0 : t16.call(e22)) && void 0 !== n19 ? n19 : this.param.traceId, windowParameters: this.param.windowParameters ? Object.assign({}, this.param.windowParameters) : void 0 };
  }
};
function b10(e22) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  return j2(e22.connectorId, new Error("connectorId is Invalid.")), j2(e22.oAuthConfigId, new Error("oauthConfigId is Invalid.")), U3("externalAppAuthentication.authenticateWithConnector", [new O12(e22)], s6(p21, "externalAppAuthentication.authenticateWithConnector"), R8);
}
!(function(e22) {
  e22.Invalid = "Invalid", e22.Valid = "Valid", e22.Expired = "Expired";
})(x6 || (x6 = {}));
var W3 = class extends e16 {
  validate(e22) {
    return "string" == typeof e22 && e22 in x6;
  }
  deserialize(e22) {
    return e22;
  }
};
function T11(e22) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  return j2(e22.connectorId, new Error("connectorId is Invalid.")), j2(e22.oAuthConfigId, new Error("oAuthConfigId is Invalid.")), N4("externalAppAuthentication.getUserAuthenticationStateForConnector", [new O12(e22)], new W3(), s6(p21, "externalAppAuthentication.getUserAuthenticationStateForConnector"), R8);
}
function k8(e22) {
  if (p4(g3, a2.content, a2.sidePanel), !z6()) throw l2;
  return j2(e22.connectorId, new Error("connectorId is Invalid.")), j2(e22.oAuthConfigId, new Error("oauthConfigId is Invalid.")), U3("externalAppAuthentication.disconnectConnector", [new O12(e22)], s6(p21, "externalAppAuthentication.disconnectConnector"), R8);
}
function z6() {
  return !(!p4(g3) || !g3.supports.externalAppAuthentication);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/logs.js
var logs_exports = {};
__export(logs_exports, {
  isSupported: () => p22,
  registerGetLogHandler: () => l17
});
function l17(l48) {
  if (!n13(l48) && p4(g3), !n13(l48) && !p22()) throw l2;
  l48 ? p8(s6("v1", "log.request"), "log.request", () => {
    const t16 = l48();
    $2(s6("v1", "log.receive"), "log.receive", [t16]);
  }) : g6("log.request");
}
function p22() {
  return !(!p4(g3) || !g3.supports.logs);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/contextualSearch.js
var contextualSearch_exports = {};
__export(contextualSearch_exports, {
  closeContextualSearch: () => i15,
  isSupported: () => m18,
  openContextualSearch: () => u21,
  registerOnContextualSearchClosedHandler: () => s13,
  registerOnContextualSearchOpenedHandler: () => h14
});
var l18 = "v1";
function u21(e22) {
  if (p4(g3, a2.content), !m18()) throw l2;
  const u56 = [null == e22 ? void 0 : e22.triggerSource];
  return U3("contextualSearch.openContextualSearch", u56, s6(l18, "contextualSearch.openContextualSearch"));
}
function i15() {
  if (p4(g3, a2.content), !m18()) throw l2;
  return U3("contextualSearch.closeContextualSearch", [], s6(l18, "contextualSearch.closeContextualSearch"));
}
function h14(t16) {
  C6(s6(l18, "contextualSearch.registerOpenContextualSearchHandler"), "contextualSearchOpened", t16, [a2.content], () => {
    if (!m18()) throw l2;
  });
}
function s13(t16) {
  C6(s6(l18, "contextualSearch.registerCloseContextualSearchHandler"), "contextualSearchClosed", t16, [a2.content], () => {
    if (!m18()) throw l2;
  });
}
function m18() {
  return p4(g3) && !!g3.supports.contextualSearch;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/conversations.js
var conversations_exports = {};
__export(conversations_exports, {
  closeConversation: () => m19,
  getChatMembers: () => u22,
  isSupported: () => C10,
  openConversation: () => d14
});
var l19 = "v1";
function d14(o26) {
  return new Promise((t16) => {
    if (p4(g3, a2.content), !C10()) throw l2;
    const r19 = R3(s6(l19, "conversations.openConversation"), "conversations.openConversation", { title: o26.title, subEntityId: o26.subEntityId, conversationId: o26.conversationId, channelId: o26.channelId, entityId: o26.entityId });
    o26.onStartConversation && p8(s6(l19, "conversations.registerStartConversationHandler"), "startConversation", (n19, t17, e22, r20) => {
      var i26;
      return null === (i26 = o26.onStartConversation) || void 0 === i26 ? void 0 : i26.call(o26, { subEntityId: n19, conversationId: t17, channelId: e22, entityId: r20 });
    }), o26.onCloseConversation && p8(s6(l19, "conversations.registerCloseConversationHandler"), "closeConversation", (n19, t17, e22, r20) => {
      var i26;
      return null === (i26 = o26.onCloseConversation) || void 0 === i26 ? void 0 : i26.call(o26, { subEntityId: n19, conversationId: t17, channelId: e22, entityId: r20 });
    }), t16(r19);
  });
}
function m19() {
  if (p4(g3, a2.content), !C10()) throw l2;
  $2(s6(l19, "conversations.closeConversation"), "conversations.closeConversation"), g6("startConversation"), g6("closeConversation");
}
function u22() {
  return new Promise((n19) => {
    if (p4(g3), !C10()) throw l2;
    n19(O6(s6(l19, "conversations.getChatMember"), "getChatMembers"));
  });
}
function C10() {
  return !(!p4(g3) || !g3.supports.conversations);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/copilot.js
var copilot_exports = {};
__export(copilot_exports, {
  customTelemetry: () => customTelemetry_exports,
  eligibility: () => eligibility_exports,
  sidePanel: () => sidePanel_exports,
  view: () => view_exports
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/customTelemetry.js
var customTelemetry_exports = {};
__export(customTelemetry_exports, {
  isSupported: () => l20,
  sendCustomTelemetryData: () => p23
});
var s14 = u5("copilot");
function l20() {
  var t16;
  return p4(g3) && !!(null === (t16 = g3.supports.copilot) || void 0 === t16 ? void 0 : t16.customTelemetry);
}
function p23(r19, l48) {
  var p59;
  return void 0 === l48 && (l48 = null !== (p59 = N3()) && void 0 !== p59 ? p59 : Date.now()), n(this, void 0, void 0, function* () {
    return p4(g3), s14("Sending custom telemetry data to host for stage: %s to record timestamp: %s", r19, l48), U3("copilot.customTelemetry.sendCustomTelemetryData", [r19.toString(), l48], s6("v2", "copilot.customTelemetry.sendCustomTelemetryData"));
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/eligibility.js
var eligibility_exports = {};
__export(eligibility_exports, {
  getEligibilityInfo: () => d15,
  isSupported: () => p24
});
var u23 = u5("copilot");
function p24() {
  var i26, o26;
  return p4(g3) && (!!(null === (i26 = g3.hostVersionsInfo) || void 0 === i26 ? void 0 : i26.appEligibilityInformation) || !!(null === (o26 = g3.supports.copilot) || void 0 === o26 ? void 0 : o26.eligibility));
}
function d15(r19) {
  var d39, m59, f48;
  return n(this, void 0, void 0, function* () {
    if (p4(g3), !p24()) throw new Error(`Error code: ${l2.errorCode}, message: Not supported on platform`);
    if ((null === (d39 = g3.hostVersionsInfo) || void 0 === d39 ? void 0 : d39.appEligibilityInformation) && !r19) return u23("Eligibility information is already available on runtime."), g3.hostVersionsInfo.appEligibilityInformation;
    u23("Eligibility information is not available on runtime. Requesting from host.");
    const i26 = yield O6(s6("v2", "copilot.eligibility.getEligibilityInfo"), "copilot.eligibility.getEligibilityInfo", r19);
    if (i4(i26)) throw new Error(`Error code: ${i26.errorCode}, message: ${null !== (m59 = i26.message) && void 0 !== m59 ? m59 : "Failed to get eligibility information from the host."}`);
    if (!(function(i27) {
      if (void 0 === i27.ageGroup || void 0 === i27.cohort || void 0 === i27.userClassification || void 0 === i27.isCopilotEligible || void 0 === i27.isCopilotEnabledRegion || void 0 === i27.isOptedOutByAdmin || i27.featureSet && (void 0 === i27.featureSet.serverFeatures || void 0 === i27.featureSet.uxFeatures)) return false;
      return true;
    })(i26)) throw new Error("Error deserializing eligibility information");
    return "nonadult" === (null === (f48 = i26.ageGroup) || void 0 === f48 ? void 0 : f48.toLowerCase()) && (i26.ageGroup = T2.NotAdult), i26;
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/sidePanel.js
var sidePanel_exports = {};
__export(sidePanel_exports, {
  copilotSidePanelNotSupportedOnPlatformError: () => v12,
  getContent: () => f17,
  isResponseAReportableError: () => m20,
  isSupported: () => d17,
  preCheckUserConsent: () => j12,
  registerUserActionContentSelect: () => h15
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/sidePanelInterfaces.js
var sidePanelInterfaces_exports = {};
__export(sidePanelInterfaces_exports, {
  ContentItemType: () => e17,
  CopilotMode: () => o16,
  MediaSelectionType: () => t11,
  SidePanelErrorCode: () => p25,
  SidePanelErrorImpl: () => d16,
  TeamsContextType: () => c13,
  TeamsDimensionName: () => a11,
  TeamsSessionType: () => n15,
  TranscriptState: () => i16,
  UserConsent: () => r13
});
var e17;
var t11;
var n15;
var a11;
var o16;
var i16;
var c13;
var r13;
var p25;
!(function(e22) {
  e22.EMAIL = "email", e22.TEXT = "text", e22.MEDIA = "media", e22.CALENDAR_INVITE = "calendarInvite", e22.WEB_PAGE = "webPage", e22.MIXED = "mixed", e22.TEAMS = "teams", e22.FILE = "file";
})(e17 || (e17 = {})), (function(e22) {
  e22.IMAGE = "image", e22.AUDIO = "audio", e22.VIDEO = "video";
})(t11 || (t11 = {})), (function(e22) {
  e22.Private = "Private", e22.Shared = "Shared", e22.Recap = "Recap", e22.RecapCall = "RecapCall", e22.PrivateViewCall = "PrivateViewCall", e22.Chat = "Chat", e22.Compose = "Compose";
})(n15 || (n15 = {})), (function(e22) {
  e22.ClientDeviceType = "ClientDeviceType", e22.ClientRing = "ClientRing", e22.ClientScenarioName = "ClientScenarioName";
})(a11 || (a11 = {})), (function(e22) {
  e22.Enabled = "enabled", e22.Disabled = "disabled", e22.EnabledWithTranscript = "enabledWithTranscript";
})(o16 || (o16 = {})), (function(e22) {
  e22.NotStarted = "notStarted", e22.Active = "active", e22.Inactive = "inactive", e22.UnknownFutureValue = "unknownFutureValue";
})(i16 || (i16 = {})), (function(e22) {
  e22.Chat = "Chat", e22.Channel = "Channel", e22.Meeting = "Meeting", e22.MeetingChat = "MeetingChat";
})(c13 || (c13 = {})), (function(e22) {
  e22.Accepted = "accepted", e22.NotAccepted = "not_accepted";
})(r13 || (r13 = {})), (function(e22) {
  e22.ConsentNotAccepted = "consent_not_accepted", e22.PageContentBlockedPolicy = "page_content_blocked_policy", e22.PageContentBlockedDlp = "page_content_blocked_dlp", e22.PageContentTypeNotSupportedYet = "page_content_type_not_supported_yet", e22.PageContentSizeNotSupported = "page_content_size_not_supported", e22.PageContextChanged = "page_context_changed", e22.PageContentExtractionFailed = "page_content_extraction_failed", e22.PageContentSizeNotSupportedPDF = "page_content_size_not_supported_pdf", e22.NotSupportedOnPlatform = "not_supported_on_platform", e22.OtherError = "other_error";
})(p25 || (p25 = {}));
var d16 = class extends Error {
  constructor(e22, t16) {
    super(t16), this.errorCode = e22, this.name = "SidePanelError";
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/sidePanel.js
var a12 = "v2";
function d17() {
  var e22;
  return p4(g3) && !!(null === (e22 = g3.supports.copilot) || void 0 === e22 ? void 0 : e22.sidePanel);
}
function m20(e22) {
  if ("object" != typeof e22 || null === e22) return false;
  const t16 = e22;
  return Object.values(p25).includes(t16.errorCode) && (void 0 === t16.message || "string" == typeof t16.message) || i4(e22);
}
function f17(n19) {
  return n(this, void 0, void 0, function* () {
    p4(g3);
    const e22 = n19 ? [new b11(n19)] : [];
    return N4("copilot.sidePanel.getContent", e22, new C11(), s6(a12, "copilot.sidePanel.getContent"), m20);
  });
}
function j12(n19) {
  return n(this, void 0, void 0, function* () {
    p4(g3);
    const e22 = n19 ? [new g10(n19)] : [];
    return N4("copilot.sidePanel.preCheckUserConsent", e22, new P9(), s6(a12, "copilot.sidePanel.preCheckUserConsent"), m20);
  });
}
function h15(e22) {
  C6(s6(a12, "copilot.sidePanel.registerUserActionContentSelect"), "copilot.sidePanel.userActionContentSelect", e22, [a2.content], () => {
    if (!d17()) throw v12;
  });
}
var v12 = new d16(p25.NotSupportedOnPlatform, "This API is not supported on the current platform.");
var C11 = class extends e16 {
  validate(e22) {
    return null !== e22 && "object" == typeof e22;
  }
  deserialize(e22) {
    return e22;
  }
};
var P9 = class extends e16 {
  validate(e22) {
    return null !== e22 && "object" == typeof e22;
  }
  deserialize(e22) {
    return e22;
  }
};
var b11 = class {
  constructor(e22) {
    this.contentRequest = e22;
  }
  serialize() {
    return this.contentRequest;
  }
};
var g10 = class {
  constructor(e22) {
    this.userConsentRequest = e22;
  }
  serialize() {
    return this.userConsentRequest;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/copilot/view.js
var view_exports = {};
__export(view_exports, {
  closeSidePanel: () => s15,
  isSupported: () => l21
});
function l21() {
  var e22;
  return p4(g3) && !!(null === (e22 = g3.supports.copilot) || void 0 === e22 ? void 0 : e22.view);
}
function s15() {
  return n(this, void 0, void 0, function* () {
    p4(g3), yield N4("copilot.view.closeSidePanel", [], new p26(), s6("v2", "copilot.view.closeSidePanel"));
  });
}
var p26 = class extends e16 {
  validate(e22) {
    return true;
  }
  deserialize(e22) {
    return e22;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppAuthenticationForCEA.js
var externalAppAuthenticationForCEA_exports = {};
__export(externalAppAuthenticationForCEA_exports, {
  authenticateAndResendRequest: () => x7,
  authenticateWithOauth: () => f18,
  authenticateWithSSO: () => m21,
  authenticateWithSSOAndResendRequest: () => E9,
  isSupported: () => v13,
  validateInput: () => w11
});
var d18 = "v2";
function m21(e22, i26, a35) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !v13()) throw l2;
    return w11(e22, i26), U3("externalAppAuthenticationForCEA.authenticateWithSSO", [e22, i26, a35.authId, a35.connectionName, a35.claims, a35.silent], s6(d18, "externalAppAuthenticationForCEA.authenticateWithSSO"), R8);
  });
}
function f18(e22, i26, a35) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !v13()) throw l2;
    return w11(e22, i26), U3("externalAppAuthenticationForCEA.authenticateWithOauth", [e22, i26, a35.url.href, a35.width, a35.height, a35.isExternal], s6(d18, "externalAppAuthenticationForCEA.authenticateWithOauth"), R8);
  });
}
function x7(n19, i26, a35, m59) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !v13()) throw l2;
    return w11(n19, i26), y8(m59), N4("externalAppAuthenticationForCEA.authenticateAndResendRequest", [n19, i26, new f16(m59), a35.url.href, a35.width, a35.height, a35.isExternal], new g9(), s6(d18, "externalAppAuthenticationForCEA.authenticateAndResendRequest"), R8);
  });
}
function E9(n19, i26, a35, m59) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !v13()) throw l2;
    return w11(n19, i26), y8(m59), N4("externalAppAuthenticationForCEA.authenticateWithSSOAndResendRequest", [n19, i26, new f16(m59), a35.authId, a35.connectionName, a35.claims, a35.silent], new g9(), s6(d18, "externalAppAuthenticationForCEA.authenticateWithSSOAndResendRequest"), R8);
  });
}
function v13() {
  return !(!p4(g3) || !g3.supports.externalAppAuthenticationForCEA);
}
function w11(t16, n19) {
  j2(n19, new Error("conversation id is not valid.")), l6(t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCardActions.js
var externalAppCardActions_exports = {};
__export(externalAppCardActions_exports, {
  ActionOpenUrlErrorCode: () => s16,
  ActionOpenUrlType: () => c14,
  isSupported: () => A10,
  processActionOpenUrl: () => l22,
  processActionSubmit: () => a13
});
var c14;
var s16;
function a13(c45, s40) {
  if (p4(g3, a2.content, a2.sidePanel), !A10()) throw l2;
  const a35 = new i9(c45);
  return S3(s6("v2", "externalAppCardActions.processActionSubmit"), "externalAppCardActions.processActionSubmit", [a35.toString(), s40]).then(([n19, t16]) => {
    if (!n19) throw t16;
  });
}
function l22(c45, s40, a35) {
  if (p4(g3, a2.content, a2.sidePanel), !A10()) throw l2;
  const l48 = new i9(c45);
  return S3(s6("v2", "externalAppCardActions.processActionOpenUrl"), "externalAppCardActions.processActionOpenUrl", [l48.toString(), s40.href, a35]).then(([n19, t16]) => {
    if (n19) throw n19;
    return t16;
  });
}
function A10() {
  return !(!p4(g3) || !g3.supports.externalAppCardActions);
}
!(function(n19) {
  n19.DeepLinkDialog = "DeepLinkDialog", n19.DeepLinkOther = "DeepLinkOther", n19.DeepLinkStageView = "DeepLinkStageView", n19.GenericUrl = "GenericUrl";
})(c14 || (c14 = {})), (function(n19) {
  n19.INTERNAL_ERROR = "INTERNAL_ERROR", n19.INVALID_LINK = "INVALID_LINK", n19.NOT_SUPPORTED = "NOT_SUPPORTED";
})(s16 || (s16 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCardActionsForCEA.js
var externalAppCardActionsForCEA_exports = {};
__export(externalAppCardActionsForCEA_exports, {
  isSupported: () => A11,
  processActionOpenUrl: () => l23,
  processActionSubmit: () => m22
});
function l23(r19, l48, m59) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !A11()) throw l2;
    w11(r19, l48);
    const [t16, u56] = yield S3(s6("v2", "externalAppCardActionsForCEA.processActionOpenUrl"), "externalAppCardActionsForCEA.processActionOpenUrl", [r19.toString(), l48, m59.href]);
    if (t16) throw t16;
    return u56;
  });
}
function m22(o26, l48, m59) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !A11()) throw l2;
    w11(o26, l48);
    const t16 = yield O6(s6("v2", "externalAppCardActionsForCEA.processActionSubmit"), "externalAppCardActionsForCEA.processActionSubmit", o26.toString(), l48, m59);
    if (t16) throw t16;
  });
}
function A11() {
  return !(!p4(g3) || !g3.supports.externalAppCardActionsForCEA);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCardActionsForDA.js
var externalAppCardActionsForDA_exports = {};
__export(externalAppCardActionsForDA_exports, {
  SerializableActionOpenUrlDialogInfo: () => a14,
  isSupported: () => u24,
  processActionOpenUrlDialog: () => m23
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/constants.js
var R9;
!(function(R13) {
  R13.INTERNAL_ERROR = "INTERNAL_ERROR";
})(R9 || (R9 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppErrorHandling.js
function t12(t16) {
  if ("object" != typeof t16 || null === t16) return false;
  const o26 = t16;
  return Object.values(R9).includes(o26.errorCode) && (void 0 === o26.message || "string" == typeof o26.message);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCardActionsForDA.js
function m23(m59, f48, d39) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !u24()) throw l2;
    return (function(r19, t16) {
      l6(r19), r4(t16);
    })(m59, d39), U3("externalAppCardActionsForDA.processActionOpenUrlDialog", [m59, new a14(f48), d39], s6("v2", "externalAppCardActionsForDA.processActionOpenUrlDialog"), t12);
  });
}
function u24() {
  return !(!p4(g3) || !g3.supports.externalAppCardActionsForDA);
}
var a14 = class {
  constructor(r19) {
    this.info = r19;
  }
  serialize() {
    const { url: r19, title: t16, size: i26 } = this.info;
    return { url: r19.href, title: t16, size: i26 };
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCommands.js
var externalAppCommands_exports = {};
__export(externalAppCommands_exports, {
  isSupported: () => l24,
  processActionCommand: () => s17
});
function s17(s40, c45, u56) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.sidePanel), !l24()) throw l2;
    const t16 = new i9(s40), [a35, d39] = yield S3(s6("v2", "externalAppCommands.processActionCommand"), "externalAppCommands.processActionCommand", [t16.toString(), c45, u56]);
    if (a35) throw a35;
    return d39;
  });
}
function l24() {
  return !(!p4(g3) || !g3.supports.externalAppCommands);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/files.js
var files_exports = {};
__export(files_exports, {
  CloudStorageProvider: () => a15,
  CloudStorageProviderFileAction: () => g11,
  CloudStorageProviderType: () => s18,
  DocumentLibraryAccessType: () => f19,
  FileDownloadStatus: () => u25,
  SpecialDocumentLibraryType: () => c15,
  addCloudStorageFolder: () => C12,
  addCloudStorageProvider: () => E10,
  addCloudStorageProviderFile: () => D7,
  copyMoveFiles: () => p27,
  deleteCloudStorageFolder: () => w12,
  deleteCloudStorageProviderFile: () => A12,
  downloadCloudStorageProviderFile: () => N9,
  getCloudStorageFolderContents: () => v14,
  getCloudStorageFolders: () => S10,
  getExternalProviders: () => h16,
  getFileDownloads: () => m24,
  openCloudStorageFile: () => F8,
  openDownloadFolder: () => b12,
  registerCloudStorageProviderContentChangeHandler: () => M4,
  registerCloudStorageProviderListChangeHandler: () => L6,
  removeCloudStorageProvider: () => P10,
  renameCloudStorageProviderFile: () => I7,
  uploadCloudStorageProviderFile: () => y9
});
var d19 = "v1";
var a15;
var s18;
var c15;
var f19;
var u25;
var g11;
function S10(o26, n19) {
  if (p4(g3, a2.content), !o26 || 0 === o26.length) throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");
  if (!n19) throw new Error("[files.getCloudStorageFolders] Callback cannot be null");
  $2(s6(d19, "files.getCloudStorageFolders"), "files.getCloudStorageFolders", [o26], n19);
}
function C12(o26, n19) {
  if (p4(g3, a2.content), !o26 || 0 === o26.length) throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");
  if (!n19) throw new Error("[files.addCloudStorageFolder] Callback cannot be null");
  $2(s6(d19, "files.addCloudStorageFolder"), "files.addCloudStorageFolder", [o26], n19);
}
function w12(o26, n19, a35) {
  if (p4(g3, a2.content), !o26) throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");
  if (!n19) throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");
  if (!a35) throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");
  $2(s6(d19, "files.deleteCloudStorageFolder"), "files.deleteCloudStorageFolder", [o26, n19], a35);
}
function v14(o26, n19, a35) {
  if (p4(g3, a2.content), !o26 || !n19) throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");
  if (!a35) throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");
  if ("isSubdirectory" in o26 && !o26.isSubdirectory) throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");
  $2(s6(d19, "files.getCloudStorageFolderContents"), "files.getCloudStorageFolderContents", [o26, n19], a35);
}
function F8(o26, n19, a35) {
  if (p4(g3, a2.content), !o26 || !n19) throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");
  if (o26.isSubdirectory) throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");
  $2(s6(d19, "files.openCloudStorageFile"), "files.openCloudStorageFile", [o26, n19, a35]);
}
function h16(o26 = false, n19) {
  if (p4(g3, a2.content), !n19) throw new Error("[files.getExternalProviders] Callback cannot be null");
  $2(s6(d19, "files.getExternalProviders"), "files.getExternalProviders", [o26], n19);
}
function p27(o26, n19, a35, s40, c45 = false, f48) {
  if (p4(g3, a2.content), !o26 || 0 === o26.length) throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");
  if (!n19) throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");
  if (!a35) throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");
  if (!s40) throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");
  if (!f48) throw new Error("[files.copyMoveFiles] callback cannot be null");
  $2(s6(d19, "files.copyMoveFiles"), "files.copyMoveFiles", [o26, n19, a35, s40, c45], f48);
}
function m24(o26) {
  if (p4(g3, a2.content), !o26) throw new Error("[files.getFileDownloads] Callback cannot be null");
  $2(s6(d19, "files.getFileDownloads"), "files.getFileDownloads", [], o26);
}
function b12(o26 = void 0, n19) {
  if (p4(g3, a2.content), !n19) throw new Error("[files.openDownloadFolder] Callback cannot be null");
  $2(s6(d19, "files.openDownloadFolder"), "files.openDownloadFolder", [o26], n19);
}
function E10(o26) {
  if (p4(g3, a2.content), !o26) throw G6(E2.INVALID_ARGUMENTS, "[files.addCloudStorageProvider] callback cannot be null");
  $2(s6(d19, "files.addCloudStorageProvider"), "files.addCloudStorageProvider", [], o26);
}
function P10(o26, a35) {
  if (p4(g3, a2.content), !a35) throw G6(E2.INVALID_ARGUMENTS, "[files.removeCloudStorageProvider] callback cannot be null");
  if (!o26 || !o26.content) throw G6(E2.INVALID_ARGUMENTS, "[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");
  $2(s6(d19, "files.removeCloudStorageProvider"), "files.removeCloudStorageProvider", [o26], a35);
}
function D7(o26, a35) {
  if (p4(g3, a2.content), !a35) throw G6(E2.INVALID_ARGUMENTS, "[files.addCloudStorageProviderFile] callback cannot be null");
  if (!o26 || !o26.content) throw G6(E2.INVALID_ARGUMENTS, "[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");
  $2(s6(d19, "files.addCloudStorageProviderFile"), "files.addCloudStorageProviderFile", [o26], a35);
}
function I7(o26, a35) {
  if (p4(g3, a2.content), !a35) throw G6(E2.INVALID_ARGUMENTS, "[files.renameCloudStorageProviderFile] callback cannot be null");
  if (!o26 || !o26.content) throw G6(E2.INVALID_ARGUMENTS, "[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");
  $2(s6(d19, "files.renameCloudStorageProviderFile"), "files.renameCloudStorageProviderFile", [o26], a35);
}
function A12(o26, a35) {
  if (p4(g3, a2.content), !a35) throw G6(E2.INVALID_ARGUMENTS, "[files.deleteCloudStorageProviderFile] callback cannot be null");
  if (!(o26 && o26.content && o26.content.itemList && o26.content.itemList.length > 0)) throw G6(E2.INVALID_ARGUMENTS, "[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");
  $2(s6(d19, "files.deleteCloudStorageProviderFile"), "files.deleteCloudStorageProviderFile", [o26], a35);
}
function N9(o26, a35) {
  if (p4(g3, a2.content), !a35) throw G6(E2.INVALID_ARGUMENTS, "[files.downloadCloudStorageProviderFile] callback cannot be null");
  if (!(o26 && o26.content && o26.content.itemList && o26.content.itemList.length > 0)) throw G6(E2.INVALID_ARGUMENTS, "[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");
  $2(s6(d19, "files.downloadCloudStorageProviderFile"), "files.downloadCloudStorageProviderFile", [o26], a35);
}
function y9(o26, a35) {
  if (p4(g3, a2.content), !a35) throw G6(E2.INVALID_ARGUMENTS, "[files.uploadCloudStorageProviderFile] callback cannot be null");
  if (!(o26 && o26.content && o26.content.itemList && o26.content.itemList.length > 0)) throw G6(E2.INVALID_ARGUMENTS, "[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");
  if (!o26.content.destinationFolder) throw G6(E2.INVALID_ARGUMENTS, "[files.uploadCloudStorageProviderFile] Invalid destination folder details");
  $2(s6(d19, "files.uploadCloudStorageProviderFile"), "files.uploadCloudStorageProviderFile", [o26], a35);
}
function L6(e22) {
  if (p4(g3), !e22) throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");
  p8(s6(d19, "files.registerCloudStorageProviderListChangeHandler"), "files.cloudStorageProviderListChange", e22);
}
function M4(e22) {
  if (p4(g3), !e22) throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");
  p8(s6(d19, "files.registerCloudStorageProviderContentChangeHandler"), "files.cloudStorageProviderContentChange", e22);
}
function G6(e22, o26) {
  return { errorCode: e22, message: o26 };
}
!(function(e22) {
  e22.Dropbox = "DROPBOX", e22.Box = "BOX", e22.Sharefile = "SHAREFILE", e22.GoogleDrive = "GOOGLEDRIVE", e22.Egnyte = "EGNYTE", e22.SharePoint = "SharePoint";
})(a15 || (a15 = {})), (function(e22) {
  e22[e22.Sharepoint = 0] = "Sharepoint", e22[e22.WopiIntegration = 1] = "WopiIntegration", e22[e22.Google = 2] = "Google", e22[e22.OneDrive = 3] = "OneDrive", e22[e22.Recent = 4] = "Recent", e22[e22.Aggregate = 5] = "Aggregate", e22[e22.FileSystem = 6] = "FileSystem", e22[e22.Search = 7] = "Search", e22[e22.AllFiles = 8] = "AllFiles", e22[e22.SharedWithMe = 9] = "SharedWithMe";
})(s18 || (s18 = {})), (function(e22) {
  e22.ClassMaterials = "classMaterials";
})(c15 || (c15 = {})), (function(e22) {
  e22.Readonly = "readonly";
})(f19 || (f19 = {})), (function(e22) {
  e22.Downloaded = "Downloaded", e22.Downloading = "Downloading", e22.Failed = "Failed";
})(u25 || (u25 = {})), (function(e22) {
  e22.Download = "DOWNLOAD", e22.Upload = "UPLOAD", e22.Delete = "DELETE";
})(g11 || (g11 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/meetingRoom.js
var meetingRoom_exports = {};
__export(meetingRoom_exports, {
  getPairedMeetingRoomInfo: () => a16,
  isSupported: () => l25,
  registerMeetingRoomCapabilitiesUpdateHandler: () => s19,
  registerMeetingRoomStatesUpdateHandler: () => d20,
  sendCommandToPairedMeetingRoom: () => g12
});
var m25 = "v1";
function a16() {
  return new Promise((o26) => {
    if (p4(g3), !l25()) throw l2;
    o26(P3(s6(m25, "meetingRoom.getPairedMeetingRoomInfo"), "meetingRoom.getPairedMeetingRoomInfo"));
  });
}
function g12(o26) {
  return new Promise((a35) => {
    if (!o26 || 0 == o26.length) throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");
    if (p4(g3), !l25()) throw l2;
    a35(P3(s6(m25, "meetingRoom.sendCommandToPairedMeetingRoom"), "meetingRoom.sendCommandToPairedMeetingRoom", o26));
  });
}
function s19(e22) {
  if (!e22) throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");
  if (p4(g3), !l25()) throw l2;
  p8(s6(m25, "meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler"), "meetingRoom.meetingRoomCapabilitiesUpdate", (o26) => {
    p4(g3), e22(o26);
  });
}
function d20(e22) {
  if (!e22) throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");
  if (p4(g3), !l25()) throw l2;
  p8(s6(m25, "meetingRoom.registerMeetingRoomStatesUpdateHandler"), "meetingRoom.meetingRoomStatesUpdate", (o26) => {
    p4(g3), e22(o26);
  });
}
function l25() {
  return !(!p4(g3) || !g3.supports.meetingRoom);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/messageChannels/messageChannels.js
var messageChannels_exports = {};
__export(messageChannels_exports, {
  dataLayer: () => dataLayer_exports,
  isSupported: () => s20,
  telemetry: () => telemetry_exports
});
function s20() {
  return !(!p4(g3) || !g3.supports.messageChannels);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/nestedAppAuth/nestedAppAuthBridge.js
var nestedAppAuthBridge_exports = {};
__export(nestedAppAuthBridge_exports, {
  initialize: () => i17,
  version: () => t13
});
var t13 = "1.0.1";
var n16 = { onMessage: function(e22, t16) {
  if (!e22 || !e22.data || "object" != typeof e22.data || null === e22.data) return void a17("Invalid message format, ignoring. Message: %o", e22);
  if (!(function(e23, t17) {
    if (t17 === o17) try {
      return "https:" === new URL(t17).protocol;
    } catch (e24) {
      return d21("Invalid message origin URL:", e24), false;
    }
    return false;
  })(e22.source, e22.origin)) return void a17("Message source/origin not allowed, ignoring.");
  const { args: n19 } = e22.data, [, r19] = null != n19 ? n19 : [], i26 = (() => {
    try {
      return JSON.parse(r19);
    } catch (e23) {
      return d21("Failed to parse response message:", e23), null;
    }
  })();
  if (!i26 || "NestedAppAuthResponse" !== i26.messageType) return void a17("Invalid response format, ignoring. Message: %o", e22);
  t16(r19);
} };
var o17 = null;
var r14 = false;
function i17(t16, i26, p59 = false) {
  if (r14 = p59, !t16) throw new Error("Cannot polyfill nestedAppAuthBridge as the current window does not exist");
  if (!i26) throw new Error("Top origin is required to initialize the Nested App Auth Bridge");
  try {
    const e22 = new URL(i26);
    if ("https:" !== e22.protocol) throw new Error(`Invalid top origin: ${i26}. Only HTTPS origins are allowed.`);
    o17 = e22.origin;
  } catch (e22) {
    throw new Error(`Failed to initialize bridge: invalid top origin: ${i26}`);
  }
  const u56 = t16;
  if (u56.nestedAppAuthBridge) return void a17("Nested App Auth Bridge is already present");
  const g23 = (function(t17) {
    const r19 = /* @__PURE__ */ new WeakMap(), { onMessage: i27 } = n16, p60 = (e22) => (t18) => i27(t18, e22);
    return { addEventListener: (e22, n19) => {
      if ("message" === e22) {
        const o26 = p60(n19);
        r19.set(n19, o26), t17.addEventListener(e22, o26);
      } else a17(`Event ${e22} is not supported by nestedAppAuthBridge`);
    }, postMessage: (n19) => {
      if (!t17.top) throw new Error("window.top is not available for posting messages");
      try {
        const r20 = JSON.parse(n19);
        if ("object" == typeof r20 && "NestedAppAuthRequest" === r20.messageType) {
          const r21 = (function(t18) {
            const n20 = Date.now();
            return { id: s21(), uuid: o8(), func: "nestedAppAuth.execute", timestamp: n20, apiVersionTag: "v2_nestedAppAuth.execute", monotonicTimestamp: n20, args: [], data: t18 };
          })(n19);
          if (t17 === t17.top || !o17) return void d21("Not in an embedded iframe; skipping postMessage.");
          t17.top.postMessage(r21, o17);
        }
      } catch (e22) {
        return void d21("Failed to parse message:", e22, "Original message:", n19);
      }
    }, removeEventListener: (e22, n19) => {
      const o26 = r19.get(n19);
      o26 && (t17.removeEventListener(e22, o26), r19.delete(n19));
    } };
  })(u56);
  g23 && (u56.nestedAppAuthBridge = g23);
}
function s21() {
  return "undefined" != typeof crypto && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 11);
}
function a17(...e22) {
  r14 && console.log(...e22);
}
function d21(...e22) {
  r14 && console.error(...e22);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/notifications.js
var notifications_exports = {};
__export(notifications_exports, {
  isSupported: () => c16,
  showNotification: () => m26
});
function m26(m59) {
  if (p4(g3, a2.content), !c16()) throw l2;
  $2(s6("v1", "notifications.showNotification"), "notifications.showNotification", [m59]);
}
function c16() {
  return !(!p4(g3) || !g3.supports.notifications);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/otherAppStateChange.js
var otherAppStateChange_exports = {};
__export(otherAppStateChange_exports, {
  isSupported: () => A13,
  notifyInstallCompleted: () => h17,
  registerAppInstallationHandler: () => a18,
  unregisterAppInstallationHandler: () => f20
});
var m27 = "v2";
function a18(t16) {
  if (!A13()) throw new Error(E2.NOT_SUPPORTED_ON_PLATFORM.toString());
  if (n13(t16)) throw new Error(E2.INVALID_ARGUMENTS.toString());
  p8(s6(m27, "otherApp.install"), "otherApp.install", t16);
}
function f20() {
  if (!A13()) throw new Error(E2.NOT_SUPPORTED_ON_PLATFORM.toString());
  $2(s6(m27, "otherApp.unregisterInstall"), "otherApp.unregisterInstall"), g6("otherApp.install");
}
function h17(t16) {
  if (!A13()) throw new Error(E2.NOT_SUPPORTED_ON_PLATFORM.toString());
  return U3("otherApp.notifyInstallCompleted", [t16.toString()], s6(m27, "otherApp.notifyInstallCompleted"));
}
function A13() {
  return !(!p4(g3) || !g3.supports.otherAppStateChange);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/plugins.js
var plugins_exports = {};
__export(plugins_exports, {
  isSupported: () => u26,
  registerPluginMessage: () => p28,
  sendPluginMessage: () => l26
});
function u26() {
  return p4(g3) && !!g3.supports.plugins;
}
function l26(r19) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3), !r19.func) throw new Error("func is required in PluginMessage.");
    return U3("plugins.sendMessage", [new c17(r19)], s6("v2", "plugins.sendMessage"));
  });
}
function p28(e22) {
  C6(s6("v2", "plugins.receiveMessage"), "plugins.receiveMessage", (...n19) => {
    e22((function(e23) {
      if (1 === e23.length && (function(e24) {
        if (!e24 || "object" != typeof e24) return false;
        return "string" == typeof e24.func;
      })(e23[0])) return e23[0];
      const [n20, r19, t16] = e23;
      return { func: "string" == typeof n20 ? n20 : String(null != n20 ? n20 : ""), args: r19, correlationId: "string" == typeof t16 ? t16 : void 0 };
    })(n19));
  }, Object.values(a2), () => {
    if (!u26()) throw new Error("Receiving plugin messages is not supported in the current host.");
  });
}
var c17 = class {
  constructor(e22) {
    this.message = e22;
  }
  serialize() {
    return this.message;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/remoteCamera.js
var remoteCamera_exports = {};
__export(remoteCamera_exports, {
  ControlCommand: () => i18,
  ErrorReason: () => C13,
  SessionTerminatedReason: () => s22,
  getCapableParticipants: () => d22,
  isSupported: () => b13,
  registerOnCapableParticipantsChangeHandler: () => h18,
  registerOnDeviceStateChangeHandler: () => E11,
  registerOnErrorHandler: () => w13,
  registerOnSessionStatusChangeHandler: () => p29,
  requestControl: () => c18,
  sendControlCommand: () => u27,
  terminateSession: () => f21
});
var l27 = "v1";
var i18;
var C13;
var s22;
function d22(e22) {
  if (!e22) throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  $2(s6(l27, "remoteCamera.getCapableParticipants"), "remoteCamera.getCapableParticipants", e22);
}
function c18(e22, i26) {
  if (!e22) throw new Error("[remoteCamera.requestControl] Participant cannot be null");
  if (!i26) throw new Error("[remoteCamera.requestControl] Callback cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  $2(s6(l27, "remoteCamera.requestControl"), "remoteCamera.requestControl", [e22], i26);
}
function u27(e22, i26) {
  if (!e22) throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");
  if (!i26) throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  $2(s6(l27, "remoteCamera.sendControlCommand"), "remoteCamera.sendControlCommand", [e22], i26);
}
function f21(e22) {
  if (!e22) throw new Error("[remoteCamera.terminateSession] Callback cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  $2(s6(l27, "remoteCamera.terminateSession"), "remoteCamera.terminateSession", e22);
}
function h18(r19) {
  if (!r19) throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  p8(s6(l27, "remoteCamera.registerOnCapableParticipantsChangeHandler"), "remoteCamera.capableParticipantsChange", r19);
}
function w13(r19) {
  if (!r19) throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  p8(s6(l27, "remoteCamera.registerOnErrorHandler"), "remoteCamera.handlerError", r19);
}
function E11(r19) {
  if (!r19) throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  p8(s6(l27, "remoteCamera.registerOnDeviceStateChangeHandler"), "remoteCamera.deviceStateChange", r19);
}
function p29(r19) {
  if (!r19) throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");
  if (p4(g3, a2.sidePanel), !b13()) throw l2;
  p8(s6(l27, "remoteCamera.registerOnSessionStatusChangeHandler"), "remoteCamera.sessionStatusChange", r19);
}
function b13() {
  return !(!p4(g3) || !g3.supports.remoteCamera);
}
!(function(r19) {
  r19.Reset = "Reset", r19.ZoomIn = "ZoomIn", r19.ZoomOut = "ZoomOut", r19.PanLeft = "PanLeft", r19.PanRight = "PanRight", r19.TiltUp = "TiltUp", r19.TiltDown = "TiltDown";
})(i18 || (i18 = {})), (function(r19) {
  r19[r19.CommandResetError = 0] = "CommandResetError", r19[r19.CommandZoomInError = 1] = "CommandZoomInError", r19[r19.CommandZoomOutError = 2] = "CommandZoomOutError", r19[r19.CommandPanLeftError = 3] = "CommandPanLeftError", r19[r19.CommandPanRightError = 4] = "CommandPanRightError", r19[r19.CommandTiltUpError = 5] = "CommandTiltUpError", r19[r19.CommandTiltDownError = 6] = "CommandTiltDownError", r19[r19.SendDataError = 7] = "SendDataError";
})(C13 || (C13 = {})), (function(r19) {
  r19[r19.None = 0] = "None", r19[r19.ControlDenied = 1] = "ControlDenied", r19[r19.ControlNoResponse = 2] = "ControlNoResponse", r19[r19.ControlBusy = 3] = "ControlBusy", r19[r19.AckTimeout = 4] = "AckTimeout", r19[r19.ControlTerminated = 5] = "ControlTerminated", r19[r19.ControllerTerminated = 6] = "ControllerTerminated", r19[r19.DataChannelError = 7] = "DataChannelError", r19[r19.ControllerCancelled = 8] = "ControllerCancelled", r19[r19.ControlDisabled = 9] = "ControlDisabled", r19[r19.ControlTerminatedToAllowOtherController = 10] = "ControlTerminatedToAllowOtherController";
})(s22 || (s22 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/appEntity.js
var appEntity_exports = {};
__export(appEntity_exports, {
  isSupported: () => l28,
  selectAppEntity: () => o18
});
function o18(o26, a35, m59, c45) {
  if (p4(g3, a2.content), !l28()) throw l2;
  if (!o26 || 0 == o26.length) throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");
  if (!c45) throw new Error("[appEntity.selectAppEntity] Callback cannot be null");
  $2(s6("v1", "appEntity.selectAppEntity"), "appEntity.selectAppEntity", [o26, a35, m59], c45);
}
function l28() {
  return !(!p4(g3) || !g3.supports.appEntity);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/teams.js
var teams_exports = {};
__export(teams_exports, {
  ChannelType: () => i19,
  fullTrust: () => fullTrust_exports2,
  getTeamChannels: () => m28,
  isSupported: () => f22,
  refreshSiteUrl: () => s23
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/fullTrust/fullTrust.js
var fullTrust_exports2 = {};
__export(fullTrust_exports2, {
  getConfigSetting: () => p31,
  isSupported: () => l29,
  joinedTeams: () => joinedTeams_exports
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/fullTrust/joinedTeams.js
var joinedTeams_exports = {};
__export(joinedTeams_exports, {
  getUserJoinedTeams: () => p30,
  isSupported: () => u28
});
function p30(p59) {
  return new Promise((f48) => {
    if (p4(g3), !u28()) throw l2;
    if ((e11.hostClientType === o4.android || e11.hostClientType === o4.teamsRoomsAndroid || e11.hostClientType === o4.teamsPhones || e11.hostClientType === o4.teamsDisplays) && !u9(o11)) {
      const t16 = { errorCode: E2.OLD_PLATFORM };
      throw new Error(JSON.stringify(t16));
    }
    f48(O6(s6("v1", "teams.fullTrust.joinedTeams.getUserJoinedTeams"), "getUserJoinedTeams", p59));
  });
}
function u28() {
  return !(!p4(g3) || !g3.supports.teams) && (!!g3.supports.teams.fullTrust && !!g3.supports.teams.fullTrust.joinedTeams);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/fullTrust/fullTrust.js
function p31(m59) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3), !l29()) throw l2;
    return N4("getConfigSetting", [m59], new r12(), s6("v1", "teams.fullTrust.getConfigSetting"));
  });
}
function l29() {
  return !(!p4(g3) || !g3.supports.teams) && !!g3.supports.teams.fullTrust;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/teams.js
var i19;
function m28(l48, i26) {
  if (p4(g3, a2.content), !f22()) throw l2;
  if (!l48) throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");
  if (!i26) throw new Error("[teams.getTeamChannels] Callback cannot be null");
  $2(s6("v1", "teams.getTeamChannels"), "teams.getTeamChannels", [l48], i26);
}
function s23(n19, l48) {
  if (p4(g3), !f22()) throw l2;
  if (!n19) throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");
  if (!l48) throw new Error("[teams.refreshSiteUrl] Callback cannot be null");
  $2(s6("v1", "teams.refreshSiteUrl"), "teams.refreshSiteUrl", [n19], l48);
}
function f22() {
  return !(!p4(g3) || !g3.supports.teams);
}
!(function(r19) {
  r19[r19.Regular = 0] = "Regular", r19[r19.Private = 1] = "Private", r19[r19.Shared = 2] = "Shared";
})(i19 || (i19 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/videoEffectsEx.js
var videoEffectsEx_exports = {};
__export(videoEffectsEx_exports, {
  ErrorLevel: () => F10,
  frameProcessingTimeoutInMs: () => p34,
  isSupported: () => x8,
  notifyFatalError: () => H8,
  notifySelectedVideoEffectChanged: () => P12,
  registerForVideoEffect: () => w16,
  registerForVideoFrame: () => g14,
  updatePersonalizedEffects: () => V6
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/videoEffects.js
var videoEffects_exports = {};
__export(videoEffects_exports, {
  EffectChangeType: () => E12,
  EffectFailureReason: () => g13,
  VideoFrameFormat: () => F9,
  isSupported: () => b14,
  notifySelectedVideoEffectChanged: () => P11,
  registerForVideoEffect: () => w14,
  registerForVideoFrame: () => h20
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/videoFrameTick.js
var e18 = class _e {
  static setTimeout(s40, a35) {
    const o26 = performance.now(), c45 = u3();
    return _e.setTimeoutCallbacks[c45] = { callback: s40, timeoutInMs: a35, startedAtInMs: o26 }, c45;
  }
  static clearTimeout(t16) {
    delete _e.setTimeoutCallbacks[t16];
  }
  static setInterval(t16, s40) {
    _e.setTimeout(function a35() {
      t16(), _e.setTimeout(a35, s40);
    }, s40);
  }
  static tick() {
    const t16 = performance.now(), s40 = [];
    for (const a35 in _e.setTimeoutCallbacks) {
      const o26 = _e.setTimeoutCallbacks[a35];
      t16 - o26.startedAtInMs >= o26.timeoutInMs && s40.push(a35);
    }
    for (const t17 of s40) {
      _e.setTimeoutCallbacks[t17].callback(), delete _e.setTimeoutCallbacks[t17];
    }
  }
};
e18.setTimeoutCallbacks = {};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/videoPerformanceStatistics.js
var s24 = class _s {
  constructor(t16, s40) {
    this.reportStatisticsResult = s40, this.sampleCount = 0, this.distributionBins = new Uint32Array(t16);
  }
  processStarts(s40, e22, i26, r19) {
    e18.tick(), this.suitableForThisSession(s40, e22, i26, r19) || this.reportAndResetSession(this.getStatistics(), s40, r19, e22, i26), this.start();
  }
  processEnds() {
    const t16 = performance.now() - this.frameProcessingStartedAt, s40 = Math.floor(Math.max(0, Math.min(this.distributionBins.length - 1, t16)));
    this.distributionBins[s40] += 1, this.sampleCount += 1;
  }
  getStatistics() {
    return this.currentSession ? { effectId: this.currentSession.effectId, effectParam: this.currentSession.effectParam, frameHeight: this.currentSession.frameHeight, frameWidth: this.currentSession.frameWidth, duration: performance.now() - this.currentSession.startedAtInMs, sampleCount: this.sampleCount, distributionBins: this.distributionBins.slice() } : null;
  }
  start() {
    this.frameProcessingStartedAt = performance.now();
  }
  suitableForThisSession(t16, s40, e22, i26) {
    return this.currentSession && this.currentSession.effectId === t16 && this.currentSession.effectParam === i26 && this.currentSession.frameWidth === s40 && this.currentSession.frameHeight === e22;
  }
  reportAndResetSession(s40, e22, i26, r19, n19) {
    s40 && this.reportStatisticsResult(s40), this.resetCurrentSession(this.getNextTimeout(e22, this.currentSession), e22, i26, r19, n19), this.timeoutId && e18.clearTimeout(this.timeoutId), this.timeoutId = e18.setTimeout((() => this.reportAndResetSession(this.getStatistics(), e22, i26, r19, n19)).bind(this), this.currentSession.timeoutInMs);
  }
  resetCurrentSession(t16, s40, e22, i26, r19) {
    this.currentSession = { startedAtInMs: performance.now(), timeoutInMs: t16, effectId: s40, effectParam: e22, frameWidth: i26, frameHeight: r19 }, this.sampleCount = 0, this.distributionBins.fill(0);
  }
  getNextTimeout(t16, e22) {
    return e22 && e22.effectId === t16 ? Math.min(_s.maxSessionTimeoutInMs, 2 * e22.timeoutInMs) : _s.initialSessionTimeoutInMs;
  }
};
s24.initialSessionTimeoutInMs = 1e3, s24.maxSessionTimeoutInMs = 3e4;

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/videoPerformanceMonitor.js
var i20 = "v2";
var s25 = class _s {
  constructor(t16) {
    this.reportPerformanceEvent = t16, this.isFirstFrameProcessed = false, this.frameProcessTimeLimit = 100, this.frameProcessingStartedAt = 0, this.frameProcessingTimeCost = 0, this.processedFrameCount = 0, this.performanceStatistics = new s24(_s.distributionBinSize, (t17) => this.reportPerformanceEvent(s6(i20, "videoPerformanceMonitor.performanceDataGenerated"), "video.performance.performanceDataGenerated", [t17]));
  }
  startMonitorSlowFrameProcessing() {
    e18.setInterval(() => {
      if (0 === this.processedFrameCount) return;
      const t16 = this.frameProcessingTimeCost / this.processedFrameCount;
      t16 > this.frameProcessTimeLimit && this.reportPerformanceEvent(s6(i20, "videoPerformanceMonitor.startMonitorSlowFrameProcessing"), "video.performance.frameProcessingSlow", [t16]), this.frameProcessingTimeCost = 0, this.processedFrameCount = 0;
    }, _s.calculateFPSInterval);
  }
  setFrameProcessTimeLimit(e22) {
    this.frameProcessTimeLimit = e22;
  }
  reportApplyingVideoEffect(e22, t16) {
    var r19, i26;
    (null === (r19 = this.applyingEffect) || void 0 === r19 ? void 0 : r19.effectId) === e22 && (null === (i26 = this.applyingEffect) || void 0 === i26 ? void 0 : i26.effectParam) === t16 || (this.applyingEffect = { effectId: e22, effectParam: t16 }, this.appliedEffect = void 0);
  }
  reportVideoEffectChanged(e22, t16) {
    void 0 === this.applyingEffect || this.applyingEffect.effectId !== e22 && this.applyingEffect.effectParam !== t16 || (this.appliedEffect = { effectId: e22, effectParam: t16 }, this.applyingEffect = void 0, this.isFirstFrameProcessed = false);
  }
  reportStartFrameProcessing(e22, r19) {
    e18.tick(), this.appliedEffect && (this.frameProcessingStartedAt = performance.now(), this.performanceStatistics.processStarts(this.appliedEffect.effectId, e22, r19, this.appliedEffect.effectParam));
  }
  reportFrameProcessed() {
    var t16;
    this.appliedEffect && (this.processedFrameCount++, this.frameProcessingTimeCost += performance.now() - this.frameProcessingStartedAt, this.performanceStatistics.processEnds(), this.isFirstFrameProcessed || (this.isFirstFrameProcessed = true, this.reportPerformanceEvent(s6(i20, "videoPerformanceMonitor.reportFrameProcessed"), "video.performance.firstFrameProcessed", [Date.now(), this.appliedEffect.effectId, null === (t16 = this.appliedEffect) || void 0 === t16 ? void 0 : t16.effectParam])));
  }
  reportGettingTextureStream(e22) {
    this.gettingTextureStreamStartedAt = performance.now(), this.currentStreamId = e22;
  }
  reportTextureStreamAcquired() {
    if (void 0 !== this.gettingTextureStreamStartedAt) {
      const t16 = performance.now() - this.gettingTextureStreamStartedAt;
      this.reportPerformanceEvent(s6(i20, "videoPerformanceMonitor.reportTextureStreamAcquired"), "video.performance.textureStreamAcquired", [this.currentStreamId, t16]);
    }
  }
};
s25.distributionBinSize = 1e3, s25.calculateFPSInterval = 1e3;

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/videoEffects.js
var u29 = "v2";
var p33 = y2() ? void 0 : new s25($2);
var F9;
var E12;
var g13;
function h20(d39) {
  if (p4(g3, a2.sidePanel), !b14()) throw l2;
  if (!d39.videoFrameHandler || !d39.videoBufferHandler) throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");
  if (p8(s6(u29, "videoEffects.setFrameProcessTimeLimitHandler"), "video.setFrameProcessTimeLimit", (e22) => null == p33 ? void 0 : p33.setFrameProcessTimeLimit(e22.timeLimit), false), j13()) !(function(i26, d40) {
    if (p4(g3, a2.sidePanel), !b14() || !j13()) throw l2;
    p8(s6(u29, "videoEffects.startVideoExtensibilityVideoStreamHandler"), "video.startVideoExtensibilityVideoStream", (r19) => n(this, void 0, void 0, function* () {
      const { streamId: o26 } = r19, t16 = /* @__PURE__ */ (function(i27, r20) {
        return (o27) => n(this, void 0, void 0, function* () {
          const e22 = o27.videoFrame;
          null == r20 || r20.reportStartFrameProcessing(e22.codedWidth, e22.codedHeight);
          const t17 = yield i27(o27);
          return null == r20 || r20.reportFrameProcessed(), t17;
        });
      })(i26, p33);
      yield h19(o26, t16, V5, p33);
    }), false), $2(s6(u29, "videoEffects.mediaStream.registerForVideoFrame"), "video.mediaStream.registerForVideoFrame", [d40]);
  })(d39.videoFrameHandler, d39.config);
  else {
    if (!S11()) throw l2;
    !(function(e22, d40) {
      if (p4(g3, a2.sidePanel), !b14() || !S11()) throw l2;
      p8(s6(u29, "videoEffects.registerForVideoBufferHandler"), "video.newVideoFrame", (o26) => {
        if (o26) {
          const t16 = o26.timestamp;
          null == p33 || p33.reportStartFrameProcessing(o26.width, o26.height), e22((function(e23) {
            if ("videoFrameBuffer" in e23) return e23;
            {
              const { data: r19 } = e23, o27 = t2(e23, ["data"]);
              return Object.assign(Object.assign({}, o27), { videoFrameBuffer: r19 });
            }
          })(o26), () => {
            null == p33 || p33.reportFrameProcessed(), (function(e23) {
              $2(s6(u29, "videoEffects.notifyVideoFrameProcessed"), "video.videoFrameProcessed", [e23]);
            })(t16);
          }, V5);
        }
      }, false), $2(s6(u29, "videoEffects.registerForVideoFrame"), "video.registerForVideoFrame", [d40]);
    })(d39.videoBufferHandler, d39.config);
  }
  null == p33 || p33.startMonitorSlowFrameProcessing();
}
function P11(e22, i26) {
  if (p4(g3, a2.sidePanel), !b14()) throw l2;
  $2(s6(u29, "videoEffects.notifySelectedVideoEffectChanged"), "video.videoEffectChanged", [e22, i26]);
}
function w14(e22) {
  if (p4(g3, a2.sidePanel), !b14()) throw l2;
  p8(s6(u29, "videoEffects.registerEffectParameterChangeHandler"), "video.effectParameterChange", p32(e22, p33), false), $2(s6(u29, "videoEffects.registerForVideoEffect"), "video.registerForVideoEffect");
}
function V5(e22) {
  $2(s6(u29, "videoEffects.notifyError"), "video.notifyError", [e22]);
}
function b14() {
  return p4(g3) && !!g3.supports.video && (!!g3.supports.video.mediaStream || !!g3.supports.video.sharedFrame);
}
function j13() {
  var e22;
  return p4(g3, a2.sidePanel) && (function() {
    var e23, i26, r19, o26;
    return !(!(null === (i26 = null === (e23 = w2().chrome) || void 0 === e23 ? void 0 : e23.webview) || void 0 === i26 ? void 0 : i26.getTextureStream) || !(null === (o26 = null === (r19 = w2().chrome) || void 0 === r19 ? void 0 : r19.webview) || void 0 === o26 ? void 0 : o26.registerTextureStream));
  })() && !!(null === (e22 = g3.supports.video) || void 0 === e22 ? void 0 : e22.mediaStream);
}
function S11() {
  var e22;
  return p4(g3, a2.sidePanel) && !!(null === (e22 = g3.supports.video) || void 0 === e22 ? void 0 : e22.sharedFrame);
}
!(function(e22) {
  e22.NV12 = "NV12";
})(F9 || (F9 = {})), (function(e22) {
  e22.EffectChanged = "EffectChanged", e22.EffectDisabled = "EffectDisabled";
})(E12 || (E12 = {})), (function(e22) {
  e22.InvalidEffectId = "InvalidEffectId", e22.InitializationFailure = "InitializationFailure";
})(g13 || (g13 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/videoEffectsUtils.js
var d23 = "v2";
function h19(t16, r19, i26, o26) {
  var a35, s40;
  return n(this, void 0, void 0, function* () {
    const e22 = f23();
    !y2() && (null === (s40 = null === (a35 = window.chrome) || void 0 === a35 ? void 0 : a35.webview) || void 0 === s40 || s40.registerTextureStream(t16, e22)), l30(yield u30(t16, i26, o26), new m29(i26, r19), e22.writable);
  });
}
function c19(t16, r19, i26, o26) {
  var a35, s40;
  return n(this, void 0, void 0, function* () {
    const e22 = f23();
    !y2() && (null === (s40 = null === (a35 = window.chrome) || void 0 === a35 ? void 0 : a35.webview) || void 0 === s40 || s40.registerTextureStream(t16, e22)), l30(yield u30(t16, i26, o26), new v15(i26, r19), e22.writable);
  });
}
function u30(r19, i26, o26) {
  return n(this, void 0, void 0, function* () {
    if (y2()) throw l2;
    const e22 = w2().chrome;
    try {
      null == o26 || o26.reportGettingTextureStream(r19);
      const t16 = (yield e22.webview.getTextureStream(r19)).getVideoTracks();
      if (0 === t16.length) throw new Error(`No video track in stream ${r19}`);
      return null == o26 || o26.reportTextureStreamAcquired(), t16[0];
    } catch (e23) {
      throw i26(`Failed to get video track from stream ${r19}, error: ${e23}`), new Error(`Internal error: can't get video track from stream ${r19}`);
    }
  });
}
function f23() {
  if (y2()) throw l2;
  const e22 = window.MediaStreamTrackGenerator;
  if (!e22) throw l2;
  return new e22({ kind: "video" });
}
function l30(e22, t16, r19) {
  new (0, w2().MediaStreamTrackProcessor)({ track: e22 }).readable.pipeThrough(new TransformStream(t16)).pipeTo(r19);
}
var m29 = class {
  constructor(t16, r19) {
    this.notifyError = t16, this.videoFrameHandler = r19, this.transform = (t17, r20) => n(this, void 0, void 0, function* () {
      const e22 = t17.timestamp;
      if (null !== e22) try {
        const i26 = yield this.videoFrameHandler({ videoFrame: t17 }), o26 = new VideoFrame(i26, { timestamp: e22 });
        r20.enqueue(o26), t17.close(), i26.close();
      } catch (e23) {
        t17.close(), this.notifyError(e23);
      }
      else this.notifyError("timestamp of the original video frame is null");
    });
  }
};
var w15 = class {
  constructor(e22, t16) {
    if (this.headerBuffer = e22, this.notifyError = t16, this.ONE_TEXTURE_INPUT_ID = 1869900081, this.INVALID_HEADER_ERROR = "Invalid video frame header", this.UNSUPPORTED_LAYOUT_ERROR = "Unsupported texture layout", this.headerDataView = new Uint32Array(e22), this.headerDataView.length < 8) throw this.notifyError(this.INVALID_HEADER_ERROR), new Error(this.INVALID_HEADER_ERROR);
    if (this.headerDataView[0] !== this.ONE_TEXTURE_INPUT_ID) throw this.notifyError(this.UNSUPPORTED_LAYOUT_ERROR), new Error(this.UNSUPPORTED_LAYOUT_ERROR);
  }
  get oneTextureLayoutId() {
    return this.headerDataView[0];
  }
  get version() {
    return this.headerDataView[1];
  }
  get frameRowOffset() {
    return this.headerDataView[2];
  }
  get frameFormat() {
    return this.headerDataView[3];
  }
  get frameWidth() {
    return this.headerDataView[4];
  }
  get frameHeight() {
    return this.headerDataView[5];
  }
  get multiStreamHeaderRowOffset() {
    return this.headerDataView[6];
  }
  get multiStreamCount() {
    return this.headerDataView[7];
  }
};
var E13 = class {
  constructor(e22, t16) {
    this.metadataMap = /* @__PURE__ */ new Map(), this.AUDIO_INFERENCE_RESULT_STREAM_ID = 828664161, this.ATTRIBUTE_ID_MAP_STREAM_ID = 1296320833;
    const r19 = new Uint32Array(e22);
    for (let i26 = 0, o26 = 0; i26 < t16; i26++) {
      const t17 = r19[o26++], i27 = r19[o26++], a35 = r19[o26++], n19 = new Uint8Array(e22, i27, a35);
      this.metadataMap.set(t17, n19);
    }
  }
  get audioInferenceResult() {
    return this.metadataMap.get(this.AUDIO_INFERENCE_RESULT_STREAM_ID);
  }
  get attributes() {
    const e22 = this.metadataMap.get(this.ATTRIBUTE_ID_MAP_STREAM_ID);
    if (void 0 === e22) return;
    const t16 = /* @__PURE__ */ new Map(), r19 = new TextDecoder("utf-8");
    let i26 = 0;
    const o26 = e22[i26] + (e22[++i26] << 8) + (e22[++i26] << 16) + (e22[++i26] << 24);
    for (let a35 = 0; a35 < o26 && i26 < e22.length - 1; a35++) {
      const o27 = e22[++i26] + (e22[++i26] << 8) + (e22[++i26] << 16) + (e22[++i26] << 24), a36 = e22.findIndex((e23, t17, r20) => 0 == e23 && t17 > i26), n19 = r19.decode(e22.slice(++i26, a36)), s40 = this.metadataMap.get(o27);
      void 0 !== s40 && t16.set(n19, s40);
      i26 = a36 + (4 - (a36 - i26) % 4 - 1);
    }
    return t16;
  }
};
var v15 = class {
  constructor(r19, i26) {
    this.notifyError = r19, this.videoFrameHandler = i26, this.shouldDiscardAudioInferenceResult = false, this.transform = (t16, r20) => n(this, void 0, void 0, function* () {
      const e22 = t16.timestamp;
      if (null !== e22) try {
        const { videoFrame: i27, metadata: { audioInferenceResult: o26, attributes: a35 } = {} } = yield this.extractVideoFrameAndMetadata(t16), n19 = yield this.videoFrameHandler({ videoFrame: i27, audioInferenceResult: o26, attributes: a35 }), s40 = new VideoFrame(n19, { timestamp: e22 });
        r20.enqueue(s40), i27.close(), t16.close(), n19.close();
      } catch (e23) {
        t16.close(), this.notifyError(e23);
      }
      else this.notifyError("timestamp of the original video frame is null");
    }), this.extractVideoFrameAndMetadata = (r20) => n(this, void 0, void 0, function* () {
      if (y2()) throw l2;
      if ("NV12" !== r20.format) throw this.notifyError("Unsupported video frame pixel format"), new Error("Unsupported video frame pixel format");
      const e22 = { x: 0, y: 0, width: r20.codedWidth, height: 2 }, i27 = new ArrayBuffer(e22.width * e22.height * 3 / 2);
      yield r20.copyTo(i27, { rect: e22 });
      const o26 = new w15(i27, this.notifyError), a35 = { x: 0, y: o26.multiStreamHeaderRowOffset, width: r20.codedWidth, height: r20.codedHeight - o26.multiStreamHeaderRowOffset }, s40 = new ArrayBuffer(a35.width * a35.height * 3 / 2);
      yield r20.copyTo(s40, { rect: a35 });
      const d39 = new E13(s40, o26.multiStreamCount);
      return { videoFrame: new VideoFrame(r20, { timestamp: r20.timestamp, visibleRect: { x: 0, y: o26.frameRowOffset, width: o26.frameWidth, height: o26.frameHeight } }), metadata: { audioInferenceResult: this.shouldDiscardAudioInferenceResult ? void 0 : d39.audioInferenceResult, attributes: d39.attributes } };
    }), p8(s6(d23, "videoEffectsUtils.transformerWithMetadata.constructor"), "video.mediaStream.audioInferenceDiscardStatusChange", ({ discardAudioInferenceResult: e22 }) => {
      this.shouldDiscardAudioInferenceResult = e22;
    });
  }
};
function p32(e22, t16) {
  return (o26, n19) => {
    null == t16 || t16.reportApplyingVideoEffect(o26 || "", n19), e22(o26, n19).then(() => {
      null == t16 || t16.reportVideoEffectChanged(o26 || "", n19), $2(s6(d23, "videoEffectsUtils.reportVideoEffectChanged"), "video.videoEffectReadiness", [true, o26, void 0, n19]);
    }).catch((e23) => {
      const t17 = e23 in g13 ? e23 : g13.InitializationFailure;
      $2(s6(d23, "videoEffectsUtils.effectFailure"), "video.videoEffectReadiness", [false, o26, t17, n19]);
    });
  };
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/videoEffectsEx.js
var u31 = "v2";
var p34 = 2e3;
var E14 = y2() ? void 0 : new s25($2);
var F10;
function g14(n19) {
  var a35, f48;
  if (!x8()) throw l2;
  if (!n19.videoFrameHandler || !n19.videoBufferHandler) throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");
  if (p4(g3, a2.sidePanel)) {
    if (p8(s6(u31, "videoEffectsEX.registerSetFrameProcessTimeLimitHandler"), "video.setFrameProcessTimeLimit", (e22) => null == E14 ? void 0 : E14.setFrameProcessTimeLimit(e22), false), null === (a35 = g3.supports.video) || void 0 === a35 ? void 0 : a35.mediaStream) p8(s6(u31, "videoEffectsEX.registerStartVideoExtensibilityVideoStreamHandler"), "video.startVideoExtensibilityVideoStream", (r19) => n(this, void 0, void 0, function* () {
      const { streamId: i26, metadataInTexture: o26 } = r19, t16 = E14 ? /* @__PURE__ */ (function(r20, i27) {
        return (o27) => n(this, void 0, void 0, function* () {
          const e22 = o27.videoFrame;
          i27.reportStartFrameProcessing(e22.codedWidth, e22.codedHeight);
          const t17 = h21(), n20 = yield r20(o27);
          return t17(), i27.reportFrameProcessed(), n20;
        });
      })(n19.videoFrameHandler, E14) : n19.videoFrameHandler;
      o26 ? yield c19(i26, t16, y10, E14) : yield h19(i26, t16, y10, E14);
    }), false), $2(s6(u31, "videoEffectsEX.mediaStream.registerForVideoFrame"), "video.mediaStream.registerForVideoFrame", [n19.config]);
    else {
      if (!(null === (f48 = g3.supports.video) || void 0 === f48 ? void 0 : f48.sharedFrame)) throw l2;
      p8(s6(u31, "videoEffectsEx.registerNewVideoFrameHandler"), "video.newVideoFrame", (e22) => {
        if (e22) {
          null == E14 || E14.reportStartFrameProcessing(e22.width, e22.height);
          const i26 = h21(), o26 = e22.timestamp;
          n19.videoBufferHandler((function(e23) {
            return e23.videoFrameBuffer = e23.videoFrameBuffer || e23.data, delete e23.data, e23;
          })(e22), () => {
            i26(), null == E14 || E14.reportFrameProcessed(), (function(e23) {
              $2(s6(u31, "videoEffectsEx.notifyVideoFrameProcessed"), "video.videoFrameProcessed", [e23]);
            })(o26);
          }, y10);
        }
      }, false), $2(s6(u31, "videoEffectsEx.registerForVideoFrame"), "video.registerForVideoFrame", [n19.config]);
    }
    null == E14 || E14.startMonitorSlowFrameProcessing();
  }
}
function h21() {
  const e22 = setTimeout(() => {
    y10("Frame not processed in 2000ms", F10.Warn);
  }, p34);
  return function() {
    clearTimeout(e22);
  };
}
function P12(e22, i26, n19) {
  if (p4(g3, a2.sidePanel), !x8()) throw l2;
  $2(s6(u31, "videoEffectsEx.notifySelectedVideoEffectChanged"), "video.videoEffectChanged", [e22, i26, n19]);
}
function w16(e22) {
  if (p4(g3, a2.sidePanel), !x8()) throw l2;
  p8(s6(u31, "videoEffectsEx.registerEffectParamterChangeHandler"), "video.effectParameterChange", p32(e22, E14), false), $2(s6(u31, "videoEffectsEx.registerForVideoEffect"), "video.registerForVideoEffect");
}
function V6(e22) {
  if (p4(g3, a2.sidePanel), !b14()) throw l2;
  $2(s6(u31, "videoEffectsEx.updatePersonalizedEffects"), "video.personalizedEffectsChanged", [e22]);
}
function x8() {
  return p4(g3), b14();
}
function y10(e22, i26 = F10.Warn) {
  $2(s6(u31, "videoEffectsEx.notifyError"), "video.notifyError", [e22, i26]);
}
function H8(e22) {
  if (p4(g3), !b14()) throw l2;
  y10(e22, F10.Fatal);
}
!(function(e22) {
  e22.Fatal = "fatal", e22.Warn = "warn";
})(F10 || (F10 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/hostEntity/hostEntity.js
var hostEntity_exports = {};
__export(hostEntity_exports, {
  AppTypes: () => o19,
  isSupported: () => i21,
  tab: () => tab_exports
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/hostEntity/tab.js
var tab_exports = {};
__export(tab_exports, {
  addAndConfigure: () => f24,
  getAll: () => m30,
  isSupported: () => y11,
  reconfigure: () => b15,
  remove: () => w17,
  rename: () => T12
});
var l31 = "v2";
var d24 = class extends e16 {
  validate(t16) {
    return "ConfigurableTab" === t16.tabType;
  }
  deserialize(t16) {
    return t16;
  }
};
var c20 = class {
  constructor(t16) {
    this.configurableTabInstance = t16;
  }
  serialize() {
    return this.configurableTabInstance;
  }
};
var u32 = class {
  constructor(t16) {
    this.hostEntityId = t16;
  }
  serialize() {
    return this.hostEntityId;
  }
};
var E15 = class extends e16 {
  validate(t16) {
    return "ConfigurableTab" === t16.tabType || "StaticTab" === t16.tabType;
  }
  deserialize(t16) {
    return t16;
  }
};
var h22 = class {
  constructor(t16) {
    this.hostEntityTabInstance = t16;
  }
  serialize() {
    return this.hostEntityTabInstance;
  }
};
var p35 = class extends e16 {
  validate(t16) {
    return t16.allTabs && t16.allTabs.forEach((t17) => {
    }), true;
  }
  deserialize(t16) {
    return t16;
  }
};
function f24(e22, n19) {
  if (p4(g3), !y11()) throw new Error(`Error code: ${E2.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);
  if (I8(e22.threadId), n19 && 0 === n19.length) throw new Error(`Error code: ${E2.INVALID_ARGUMENTS}, message: App types cannot be an empty array`);
  return N4("hostEntity.tab.addAndConfigure", [new u32(e22), n19], new E15(), s6(l31, "hostEntity.tab.addAndConfigure"));
}
function m30(e22) {
  if (p4(g3), !y11()) throw new Error(`Error code: ${E2.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);
  return I8(e22.threadId), N4("hostEntity.tab.getAll", [new u32(e22)], new p35(), s6(l31, "hostEntity.tab.getAll"));
}
function b15(e22, n19) {
  if (p4(g3), !y11()) throw new Error(`Error code: ${E2.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);
  return g15(e22), I8(n19.threadId), N4("hostEntity.tab.reconfigure", [new c20(e22), new u32(n19)], new d24(), s6(l31, "hostEntity.tab.reconfigure"));
}
function T12(e22, n19) {
  if (p4(g3), !y11()) throw new Error(`Error code: ${E2.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);
  return g15(e22), I8(n19.threadId), N4("hostEntity.tab.rename", [new c20(e22), new u32(n19)], new d24(), s6(l31, "hostEntity.tab.rename"));
}
function w17(n19, s40) {
  if (p4(g3), !y11()) throw new Error(`Error code: ${E2.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);
  return I8(s40.threadId), g15(n19), N4("hostEntity.tab.remove", [new h22(n19), new u32(s40)], new r12(), s6(l31, "hostEntity.tab.remove"));
}
function y11() {
  var t16;
  return !!(p4(g3) && i21() && (null === (t16 = g3.supports.hostEntity) || void 0 === t16 ? void 0 : t16.tab));
}
function I8(t16) {
  if (!t16 || 0 == t16.length) throw new Error(`Error code: ${E2.INVALID_ARGUMENTS}, message: ThreadId cannot be null or empty`);
}
function g15(t16) {
  if (!(null == t16 ? void 0 : t16.internalTabInstanceId) || 0 === t16.internalTabInstanceId.length) throw new Error(`Error code: ${E2.INVALID_ARGUMENTS}, message: TabId cannot be null or empty`);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/hostEntity/hostEntity.js
var o19;
function i21() {
  return !(!p4(g3) || !g3.supports.hostEntity);
}
!(function(t16) {
  t16.edu = "EDU", t16.baseTownhall = "BASE_TOWNHALL", t16.streamingTownhall = "STREAMING_TOWNHALL";
})(o19 || (o19 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/store.js
var store_exports = {};
__export(store_exports, {
  isSupported: () => m31,
  openAppDetail: () => d25,
  openFullStore: () => c21,
  openInContextStore: () => f25,
  openSpecificStore: () => a19
});
var l32 = "v2";
var u33 = "Invalid store dialog size";
function c21(e22) {
  return n(this, void 0, void 0, function* () {
    v16();
    const { size: t16 } = null != e22 ? e22 : {};
    return U3("store.openFullStore", [b16(t16)], s6(l32, "store.openFullStore"));
  });
}
function d25(e22) {
  return n(this, void 0, void 0, function* () {
    v16();
    const { size: t16, appId: r19 } = e22;
    if (!(r19 instanceof i9)) throw new Error("No App Id present, but AppId needed to open AppDetail store");
    return U3("store.openAppDetail", [b16(t16), r19], s6(l32, "store.openAppDetail"));
  });
}
function f25(e22) {
  return n(this, void 0, void 0, function* () {
    v16();
    const { size: t16, appCapability: i26, appMetaCapabilities: r19, installationScope: p59, filteredOutAppIds: s40 } = null != e22 ? e22 : {};
    return U3("store.openInContextStore", [b16(t16), i26, r19, p59, null == s40 ? void 0 : s40.map((t17) => t17.toString())], s6(l32, "store.openInContextStore"));
  });
}
function a19(e22) {
  return n(this, void 0, void 0, function* () {
    v16();
    const { size: t16, collectionId: i26 } = e22;
    if (void 0 === i26) throw new Error("No Collection Id present, but CollectionId needed to open a store specific to a collection");
    return U3("store.openSpecificStore", [b16(t16), i26], s6(l32, "store.openSpecificStore"));
  });
}
function m31() {
  return p4(g3) && !!g3.supports.store;
}
function v16() {
  if (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), !m31()) throw l2;
}
function b16(t16) {
  if (void 0 === t16) return;
  const { width: o26, height: e22 } = t16;
  if (void 0 !== o26 && "number" == typeof o26 && o26 < 0) throw new Error(u33);
  if (void 0 !== e22 && "number" == typeof e22 && e22 < 0) throw new Error(u33);
  return JSON.stringify(t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/widgetHosting/widgetHosting.js
var widgetHosting_exports = {};
__export(widgetHosting_exports, {
  callTool: () => c22,
  contentSizeChanged: () => H9,
  isSupported: () => u34,
  notifyIntrinsicHeight: () => f26,
  openExternal: () => y12,
  registerModalCloseHandler: () => z7,
  requestDisplayMode: () => I9,
  requestModal: () => m32,
  sendFollowUpMessage: () => p36,
  setWidgetState: () => v17
});
var l33 = "v1";
var a20 = u5("widgetHosting");
function u34() {
  return p4(g3) && !!g3.supports.widgetHosting;
}
function c22(i26, n19) {
  return n(this, void 0, void 0, function* () {
    return m7(), a20("Calling tool with widgetId and input: ", { widgetId: i26, input: n19 }), N4("widgetHosting.callTool", [new b17(i26, n19)], new j14(), s6(l33, "widgetHosting.callTool"), i4);
  });
}
function p36(e22, n19) {
  return n(this, void 0, void 0, function* () {
    return m7(), a20("Sending follow-up message with widgetId and prompt: ", { widgetId: e22, prompt: n19.prompt }), U3("widgetHosting.sendFollowUpMessage", [new q4(e22, n19)], s6(l33, "widgetHosting.sendFollowUpMessage"));
  });
}
function I9(e22, n19) {
  return n(this, void 0, void 0, function* () {
    return m7(), a20("Requesting display mode with widgetId: ", { widgetId: e22, mode: n19.mode }), U3("widgetHosting.requestDisplayMode", [new x9(e22, n19)], s6(l33, "widgetHosting.requestDisplayMode"));
  });
}
function m32(i26, n19) {
  return n(this, void 0, void 0, function* () {
    return m7(), a20("Requesting modal with widgetId and options: ", { widgetId: i26, options: n19 }), N4("widgetHosting.requestModal", [new W4(i26, n19)], new M5(), s6(l33, "widgetHosting.requestModal"), i4);
  });
}
function f26(t16, e22) {
  m7(), a20("Notifying intrinsic height with widgetId: ", { widgetId: t16, height: e22 }), U3("widgetHosting.notifyIntrinsicHeight", [new C14(t16, e22)], s6(l33, "widgetHosting.notifyIntrinsicHeight"));
}
function H9(t16, e22, n19) {
  m7(), a20("Content size changed with widgetId: ", { widgetId: t16, width: e22, height: n19 }), U3("widgetHosting.contentSizeChanged", [new E16(t16, e22, n19)], s6(l33, "widgetHosting.contentSizeChanged"));
}
function v17(e22, n19) {
  return n(this, void 0, void 0, function* () {
    return m7(), a20("Setting widget state with widgetId: ", { widgetId: e22, state: n19 }), U3("widgetHosting.setWidgetState", [new _5(e22, n19)], s6(l33, "widgetHosting.setWidgetState"));
  });
}
function y12(t16, e22) {
  m7(), a20("Opening external URL with widgetId: ", { widgetId: t16, href: e22.href }), U3("widgetHosting.openExternal", [new S12(t16, e22)], s6(l33, "widgetHosting.openExternal"));
}
function z7(t16) {
  C6(s6(l33, "widgetHosting.registerModalCloseHandler"), "widgetHosting.closeWidgetModal", t16, [], () => {
    if (!u34()) throw new Error("Widget Hosting is not supported on this platform");
  });
}
var j14 = class extends e16 {
  validate(t16) {
    return null !== t16 && "object" == typeof t16;
  }
  deserialize(t16) {
    return t16;
  }
};
var M5 = class extends e16 {
  validate(t16) {
    return null !== t16 && "object" == typeof t16;
  }
  deserialize(t16) {
    return t16;
  }
};
var b17 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.toolInput = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, name: this.toolInput.name, arguments: this.toolInput.arguments };
  }
};
var q4 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.args = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, prompt: this.args.prompt };
  }
};
var x9 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.args = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, mode: this.args.mode };
  }
};
var S12 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.payload = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, href: this.payload.href };
  }
};
var _5 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.state = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, state: this.state };
  }
};
var C14 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.height = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, height: this.height };
  }
};
var W4 = class {
  constructor(t16, i26) {
    this.widgetId = t16, this.options = i26;
  }
  serialize() {
    return { widgetId: this.widgetId, id: this.options.id, title: this.options.title, content: this.options.content, width: this.options.width, height: this.options.height };
  }
};
var E16 = class {
  constructor(t16, i26, e22) {
    this.widgetId = t16, this.width = i26, this.height = e22;
  }
  serialize() {
    return { widgetId: this.widgetId, width: this.width, height: this.height };
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/emailAddressValidation.js
function e19(e22) {
  const n19 = !e22 || e22.length <= 0, o26 = null == e22 ? void 0 : e22.indexOf("@"), t16 = null == e22 ? void 0 : e22.indexOf(".", o26);
  if (n19 || -1 === o26 || -1 === t16) throw new Error("Input email address does not have the correct format.");
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/emailAddress.js
var r15 = class {
  constructor(r19) {
    this.val = r19, e19(r19);
  }
  toString() {
    return this.val;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/adaptiveCards.js
function r16() {
  return g3.hostVersionsInfo ? g3.hostVersionsInfo.adaptiveCardSchemaVersion : void 0;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appWindow.js
var o20 = "v1";
var p37 = class {
  postMessage(s40, i26) {
    p4(g3), $2(s6(o20, "appWindow.childAppWindow.postMessage"), "messageForChild", [s40], i26 || i6());
  }
  addEventListener(e22, a35) {
    p4(g3), "message" === e22 && p8(s6(o20, "appWindow.childAppWindow.addEventListener"), "messageForParent", a35);
  }
};
var m33 = class {
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
  postMessage(s40, p59) {
    p4(g3, a2.task), $2(s6(o20, "appWindow.parentAppWindow.postMessage"), "messageForParent", [s40], p59 || i6());
  }
  addEventListener(e22, a35) {
    p4(g3, a2.task), "message" === e22 && p8(s6(o20, "appWindow.parentAppWindow.addEventListener"), "messageForChild", a35);
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/teamsAPIs.js
var teamsAPIs_exports = {};
__export(teamsAPIs_exports, {
  enablePrintCapability: () => m34,
  isSupported: () => j15,
  print: () => f27,
  registerBeforeUnloadHandler: () => u35,
  registerBeforeUnloadHandlerHelper: () => c23,
  registerOnLoadHandler: () => p38,
  registerOnLoadHandlerHelper: () => d26
});
function m34() {
  if (!e11.printCapabilityEnabled) {
    if (p4(g3), !j15()) throw l2;
    e11.printCapabilityEnabled = true, document.addEventListener("keydown", (t16) => {
      (t16.ctrlKey || t16.metaKey) && 80 === t16.keyCode && (f27(), t16.cancelBubble = true, t16.preventDefault(), t16.stopImmediatePropagation());
    });
  }
}
function f27() {
  w2().print();
}
function p38(t16) {
  d26(s6("v2", "teamsAPIs_registerOnLoadHandler"), t16, () => {
    if (!n13(t16) && !j15()) throw l2;
  });
}
function d26(t16, r19, i26) {
  !n13(r19) && p4(g3), !n13(r19) && i26 && i26(), O11(t16, r19);
}
function u35(t16) {
  c23(s6("v2", "teamsAPIs_registerBeforeUnloadHandler"), t16, () => {
    if (!n13(t16) && !j15()) throw l2;
  });
}
function c23(t16, e22, i26) {
  !n13(e22) && p4(g3), !n13(e22) && i26 && i26(), _4(t16, e22);
}
function j15() {
  return !(!p4(g3) || !g3.supports.teamsCore);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/publicAPIs.js
var x10 = "v1";
function B5(t16, n19) {
  A4(s6(x10, "initialize"), n19).then(() => {
    t16 && t16();
  });
}
function k9() {
  m34();
}
function v18() {
  f27();
}
function E17(t16) {
  m7(), $2(s6(x10, "getContext"), "getContext", (e22) => {
    e22.frameContext || (e22.frameContext = e11.frameContext), t16(e22);
  });
}
function L7(t16) {
  O7(s6(x10, "registerOnThemeChangeHandlerHelper"), t16);
}
function P13(t16) {
  C6(s6(x10, "registerFullScreenHandler"), "fullScreenChange", t16, []);
}
function I10(t16) {
  C6(s6(x10, "registerAppButtonClickHandler"), "appButtonClick", t16, [a2.content]);
}
function S13(t16) {
  C6(s6(x10, "registerAppButtonHoverEnterHandler"), "appButtonHoverEnter", t16, [a2.content]);
}
function y13(t16) {
  C6(s6(x10, "registerAppButtonHoverLeaveHandler"), "appButtonHoverLeave", t16, [a2.content]);
}
function A14(t16) {
  l14(s6(x10, "registerBackButtonHandler"), t16);
}
function F11(t16) {
  d26(s6(x10, "registerOnLoadHandler"), t16);
}
function T13(t16) {
  c23(s6(x10, "registerBeforeUnloadHandler"), t16);
}
function U7(t16) {
  C6(s6(x10, "registerFocusEnterHandler"), "focusEnter", t16, []);
}
function W5(t16) {
  C6(s6(x10, "registerChangeSettingsHandler"), "changeSettings", t16, [a2.content]);
}
function z8(t16, e22) {
  p4(g3), S6(s6(x10, "getTabInstances"), e22).then((e23) => {
    t16(e23);
  });
}
function D8(t16, e22) {
  p4(g3), k7(s6(x10, "getMruTabInstances"), e22).then((e23) => {
    t16(e23);
  });
}
function O13(t16) {
  U6(s6(x10, "shareDeepLink"), { subPageId: t16.subEntityId, subPageLabel: t16.subEntityLabel, subPageWebUrl: t16.subEntityWebUrl });
}
function M6(e22, n19) {
  p4(g3, a2.content, a2.sidePanel, a2.settings, a2.task, a2.stage, a2.meetingStage);
  const r19 = null != n19 ? n19 : i6();
  G3(s6(x10, "executeDeepLink"), e22).then(() => {
    r19(true);
  }).catch((t16) => {
    r19(false, t16.message);
  });
}
function V7(t16) {
  B4(s6(x10, "setFrameContext"), t16);
}
function q5(t16, n19, r19) {
  A4(s6(x10, "initializeWithFrameContext"), r19).then(() => n19 && n19()), B4(s6(x10, "setFrameContext"), t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/navigation.js
var c24 = "v1";
function g16(n19) {
  I5(s6(c24, "navigation.returnFocus"), n19);
}
function l34(t16, e22) {
  p4(g3);
  const i26 = null != e22 ? e22 : i6();
  v9(s6(c24, "navigation.navigateToTab"), t16).then(() => {
    i26(true);
  }).catch((n19) => {
    i26(false, n19.message);
  });
}
function u36(t16, a35) {
  p4(g3, a2.content, a2.sidePanel, a2.settings, a2.remove, a2.task, a2.stage, a2.meetingStage);
  const i26 = null != a35 ? a35 : i6();
  P7(s6(c24, "navigation.navigateCrossDomain"), t16).then(() => {
    i26(true);
  }).catch((n19) => {
    i26(false, n19.message);
  });
}
function f28(e22) {
  p4(g3);
  const a35 = null != e22 ? e22 : i6();
  j10(s6(c24, "navigation.navigateBack")).then(() => {
    a35(true);
  }).catch((n19) => {
    a35(false, n19.message);
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/liveShareHost.js
var liveShareHost_exports = {};
__export(liveShareHost_exports, {
  ContainerState: () => s26,
  LiveShareHost: () => l35,
  UserMeetingRole: () => a21,
  isSupported: () => d27
});
var o21 = "v2";
var a21;
var s26;
function d27() {
  return !(!p4(g3, a2.meetingStage, a2.sidePanel, a2.content) || !g3.supports.interactive);
}
!(function(e22) {
  e22.guest = "Guest", e22.attendee = "Attendee", e22.presenter = "Presenter", e22.organizer = "Organizer";
})(a21 || (a21 = {})), (function(e22) {
  e22.added = "Added", e22.alreadyExists = "AlreadyExists", e22.conflict = "Conflict", e22.notFound = "NotFound";
})(s26 || (s26 = {}));
var l35 = class _l {
  getFluidTenantInfo() {
    return u37(), new Promise((t16) => {
      t16(P3(s6(o21, "interactive.getFluidTenantInfo"), "interactive.getFluidTenantInfo"));
    });
  }
  getFluidToken(t16) {
    return u37(), new Promise((i26) => {
      i26(P3(s6(o21, "interactive.getFluidToken"), "interactive.getFluidToken", t16));
    });
  }
  getFluidContainerId() {
    return u37(), new Promise((t16) => {
      t16(P3(s6(o21, "interactive.getFluidContainerId"), "interactive.getFluidContainerId"));
    });
  }
  setFluidContainerId(t16) {
    return u37(), new Promise((i26) => {
      i26(P3(s6(o21, "interactive.setFluidContainerId"), "interactive.setFluidContainerId", t16));
    });
  }
  getNtpTime() {
    return u37(), new Promise((t16) => {
      t16(P3(s6(o21, "interactive.getNtpTime"), "interactive.getNtpTime"));
    });
  }
  registerClientId(t16) {
    return u37(), new Promise((i26) => {
      i26(P3(s6(o21, "interactive.registerClientId"), "interactive.registerClientId", t16));
    });
  }
  getClientRoles(t16) {
    return u37(), new Promise((i26) => {
      i26(P3(s6(o21, "interactive.getClientRoles"), "interactive.getClientRoles", t16));
    });
  }
  getClientInfo(t16) {
    return u37(), new Promise((i26) => {
      i26(P3(s6(o21, "interactive.getClientInfo"), "interactive.getClientInfo", t16));
    });
  }
  static create() {
    return u37(), new _l();
  }
};
function u37() {
  if (!d27()) throw new Error("LiveShareHost Not supported");
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/authentication.js
var authentication_exports = {};
__export(authentication_exports, {
  DataResidency: () => v19,
  authenticate: () => k10,
  getAuthToken: () => p39,
  getUser: () => C15,
  notifyFailure: () => g17,
  notifySuccess: () => w18,
  registerAuthenticationHandlers: () => b18
});
var f29 = "v1";
var m35 = "v2";
var d28;
function b18(t16) {
  d28 = t16;
}
function k10(e22) {
  const n19 = void 0 !== e22, r19 = n19 ? e22 : d28;
  if (!r19) throw new Error("No parameters are provided for authentication");
  p4(g3, a2.content, a2.sidePanel, a2.settings, a2.remove, a2.task, a2.stage, a2.meetingStage);
  return (function(e23, n20) {
    return n(this, void 0, void 0, function* () {
      const t16 = v2(n20.url);
      return I2(t16), S3(e23, "authentication.authenticate", [t16.href, n20.width, n20.height, n20.isExternal]).then(([t17, e24]) => {
        if (t17) return e24;
        throw new Error(e24);
      });
    });
  })(r19.successCallback || r19.failureCallback ? s6(f29, "authentication.authenticate") : s6(m35, "authentication.authenticate"), r19).then((t16) => {
    try {
      return r19 && r19.successCallback ? (r19.successCallback(t16), "") : t16;
    } finally {
      n19 || (d28 = void 0);
    }
  }).catch((t16) => {
    try {
      if (r19 && r19.failureCallback) return r19.failureCallback(t16.message), "";
      throw t16;
    } finally {
      n19 || (d28 = void 0);
    }
  });
}
function p39(t16) {
  m7();
  return (function(t17, e22) {
    return new Promise((n19) => {
      n19(S3(t17, "authentication.getAuthToken", [null == e22 ? void 0 : e22.resources, null == e22 ? void 0 : e22.claims, null == e22 ? void 0 : e22.silent, null == e22 ? void 0 : e22.tenantId]));
    }).then(([t18, e23]) => {
      if (t18) return e23;
      throw new Error(e23);
    });
  })(t16 && (t16.successCallback || t16.failureCallback) ? s6(f29, "authentication.getAuthToken") : s6(m35, "authentication.getAuthToken"), t16).then((e22) => t16 && t16.successCallback ? (t16.successCallback(e22), "") : e22).catch((e22) => {
    if (t16 && t16.failureCallback) return t16.failureCallback(e22.message), "";
    throw e22;
  });
}
function C15(t16) {
  m7();
  return (function(t17) {
    return new Promise((e22) => {
      e22(S3(t17, "authentication.getUser"));
    }).then(([t18, e22]) => {
      if (t18) return e22;
      throw e22;
    });
  })(t16 && (t16.successCallback || t16.failureCallback) ? s6(f29, "authentication.getUser") : s6(m35, "authentication.getUser")).then((e22) => t16 && t16.successCallback ? (t16.successCallback(e22), null) : e22).catch((e22) => {
    const n19 = `Error returned, code = ${e22.errorCode}, message = ${e22.message}`;
    if (t16 && t16.failureCallback) return t16.failureCallback(n19), null;
    throw new Error(n19);
  });
}
function w18(t16, i26) {
  p4(g3, a2.authentication);
  const o26 = s6(i26 ? f29 : m35, "authentication.notifySuccess");
  $2(o26, "authentication.authenticate.success", [t16]), ne(I3.parentWindow, () => setTimeout(() => I3.currentWindow.close(), 200));
}
function g17(t16, i26) {
  p4(g3, a2.authentication);
  const o26 = s6(i26 ? f29 : m35, "authentication.notifyFailure");
  $2(o26, "authentication.authenticate.failure", [t16]), ne(I3.parentWindow, () => setTimeout(() => I3.currentWindow.close(), 200));
}
var v19;
!(function(t16) {
  t16.Public = "public", t16.EUDB = "eudb", t16.Other = "other";
})(v19 || (v19 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appPerformanceMetrics.js
var appPerformanceMetrics_exports = {};
__export(appPerformanceMetrics_exports, {
  isSupported: () => a22,
  registerHostMemoryMetricsHandler: () => m36
});
function a22() {
  return p4(g3) && !!g3.supports.appPerformanceMetrics;
}
function m36(a35) {
  p4(g3), p8(s6("v2", "appPerformanceMetrics.memoryUsageHeartbeat"), "appPerformanceMetrics.memoryUsageHeartbeat", a35);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appInstallDialog.js
var appInstallDialog_exports = {};
__export(appInstallDialog_exports, {
  isSupported: () => s28,
  openAppInstallDialog: () => p41
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/deepLinkConstants.js
var e20 = "/l/app/";
var t14 = "/l/meeting/new";
var s27 = "attendees";
var a23 = "startTime";
var c25 = "endTime";
var n17 = "subject";
var i22 = "content";
var l36 = "/l/call/0/0";
var o22 = "source";
var m37 = "withVideo";
var p40 = "/l/chat/0/0";
var r17 = "users";
var d29 = "topicName";
var u38 = "message";

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/deepLinkUtilities.js
function u39(e22, d39, p59) {
  if (0 === e22.length) throw new Error("Must have at least one user when creating a chat deep link");
  const c45 = `${r17}=` + e22.map((n19) => encodeURIComponent(n19)).join(","), a35 = void 0 === d39 ? "" : `&${d29}=${encodeURIComponent(d39)}`, m59 = void 0 === p59 ? "" : `&${u38}=${encodeURIComponent(p59)}`;
  return `${j3}://${v3}${p40}?${c45}${a35}${m59}`;
}
function R10(e22, $4, i26) {
  if (0 === e22.length) throw new Error("Must have at least one target when creating a call deep link");
  const r19 = `${r17}=` + e22.map((n19) => encodeURIComponent(n19)).join(","), d39 = void 0 === $4 ? "" : `&${m37}=${encodeURIComponent($4)}`, p59 = void 0 === i26 ? "" : `&${o22}=${encodeURIComponent(i26)}`;
  return `${j3}://${v3}${l36}?${r19}${d39}${p59}`;
}
function U8(e22, t16, $4, i26, r19) {
  const C20 = void 0 === e22 ? "" : `${s27}=` + e22.map((n19) => encodeURIComponent(n19)).join(","), I14 = void 0 === t16 ? "" : `&${a23}=${encodeURIComponent(t16)}`, l48 = void 0 === $4 ? "" : `&${c25}=${encodeURIComponent($4)}`, u56 = void 0 === i26 ? "" : `&${n17}=${encodeURIComponent(i26)}`, R13 = void 0 === r19 ? "" : `&${i22}=${encodeURIComponent(r19)}`;
  return `${j3}://${v3}${t14}?${C20}${I14}${l48}${u56}${R13}`;
}
function h23(t16) {
  if (!t16) throw new Error("App ID must be set when creating an app install dialog deep link");
  return `${j3}://${v3}${e20}${encodeURIComponent(t16)}`;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appInstallDialog.js
function p41(p59) {
  return new Promise((l48) => {
    if (p4(g3, a2.content, a2.sidePanel, a2.settings, a2.task, a2.stage, a2.meetingStage), !s28()) throw new Error("Not supported");
    const m59 = s6("v1", "appInstallDialog.openAppInstallDialog");
    g3.isLegacyTeams ? l48(R3(m59, "executeDeepLink", h23(p59.appId))) : ($2(m59, "appInstallDialog.openAppInstallDialog", [p59]), l48());
  });
}
function s28() {
  return !(!p4(g3) || !g3.supports.appInstallDialog);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/barCode.js
var barCode_exports = {};
__export(barCode_exports, {
  hasPermission: () => p43,
  isSupported: () => d31,
  requestPermission: () => u41,
  scanBarCode: () => f31
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/media.js
var media_exports = {};
__export(media_exports, {
  CameraStartMode: () => _6,
  File: () => U9,
  FileFormat: () => S14,
  ImageOutputFormats: () => F12,
  ImageUriType: () => j16,
  Media: () => x11,
  MediaControllerEvent: () => N10,
  MediaType: () => V8,
  Source: () => B6,
  VideoController: () => J4,
  captureImage: () => G7,
  hasPermission: () => q6,
  requestPermission: () => H10,
  scanBarCode: () => Q3,
  selectMedia: () => $3,
  viewImages: () => K3
});
var L8 = "v1";
var D9 = u5("media");
var S14;
var N10;
var _6;
var B6;
var V8;
var j16;
var F12;
!(function(e22) {
  e22.Base64 = "base64", e22.ID = "id";
})(S14 || (S14 = {}));
var U9 = class {
};
function G7(t16) {
  if (!t16) throw new Error("[captureImage] Callback cannot be null");
  if (p4(g3, a2.content, a2.task), !e11.isFramelessWindow) {
    return void t16({ errorCode: E2.NOT_SUPPORTED_ON_PLATFORM }, []);
  }
  if (!u9(m4)) {
    return void t16({ errorCode: E2.OLD_PLATFORM }, []);
  }
  $2(s6(L8, "media.captureImage"), "captureImage", t16);
}
function q6() {
  if (p4(g3, a2.content, a2.task), !W6()) throw l2;
  const e22 = O2.Media;
  return new Promise((i26) => {
    i26(P3(s6(L8, "media.hasPermission"), "permissions.has", e22));
  });
}
function H10() {
  if (p4(g3, a2.content, a2.task), !W6()) throw l2;
  const e22 = O2.Media;
  return new Promise((i26) => {
    i26(P3(s6(L8, "media.requestPermission"), "permissions.request", e22));
  });
}
function W6() {
  return !(!p4(g3) || !g3.supports.permissions);
}
var x11 = class extends U9 {
  constructor(e22) {
    super(), e22 && (this.content = e22.content, this.format = e22.format, this.mimeType = e22.mimeType, this.name = e22.name, this.preview = e22.preview, this.size = e22.size);
  }
  getMedia(e22) {
    if (!e22) throw new Error("[get Media] Callback cannot be null");
    if (p4(g3, a2.content, a2.task), !u9(l4)) {
      return void e22({ errorCode: E2.OLD_PLATFORM }, new Blob());
    }
    if (!m38(this.mimeType, this.format, this.content)) {
      return void e22({ errorCode: E2.INVALID_ARGUMENTS }, new Blob());
    }
    u9(d5) ? this.getMediaViaCallback(e22) : this.getMediaViaHandler(e22);
  }
  getMediaViaCallback(t16) {
    const i26 = { mediaMimeType: this.mimeType, assembleAttachment: [] }, n19 = [this.content];
    $2(s6(L8, "media.getMedia"), "getMedia", n19, function(e22) {
      if (t16) if (e22 && e22.error) t16(e22.error, new Blob());
      else if (e22 && e22.mediaChunk) if (e22.mediaChunk.chunkSequence <= 0) {
        const n20 = u40(i26.assembleAttachment, i26.mediaMimeType);
        t16(e22.error, null != n20 ? n20 : new Blob());
      } else {
        const t17 = i23(e22.mediaChunk, i26.mediaMimeType);
        t17 ? i26.assembleAttachment.push(t17) : D9(`Received a null assemble attachment for when decoding chunk sequence ${e22.mediaChunk.chunkSequence}; not including the chunk in the assembled file.`);
      }
      else t16({ errorCode: E2.INTERNAL_ERROR, message: "data received is null" }, new Blob());
    });
  }
  getMediaViaHandler(t16) {
    const i26 = u3(), n19 = { mediaMimeType: this.mimeType, assembleAttachment: [] }, o26 = [i26, this.content];
    this.content && !n13(t16) && $2(s6(L8, "media.getMedia"), "getMedia", o26), p8(s6(L8, "media.registerGetMediaRequestHandler"), "getMedia" + i26, function(e22) {
      if (t16) {
        const o27 = JSON.parse(e22);
        if (o27.error) t16(o27.error, new Blob()), g6("getMedia" + i26);
        else if (o27.mediaChunk) if (o27.mediaChunk.chunkSequence <= 0) {
          const e23 = u40(n19.assembleAttachment, n19.mediaMimeType);
          t16(o27.error, null != e23 ? e23 : new Blob()), g6("getMedia" + i26);
        } else {
          const e23 = i23(o27.mediaChunk, n19.mediaMimeType);
          e23 && n19.assembleAttachment.push(e23);
        }
        else t16({ errorCode: E2.INTERNAL_ERROR, message: "data received is null" }, new Blob()), g6("getMedia" + i26);
      }
    });
  }
};
var z9 = class {
  constructor(e22) {
    this.controllerCallback = e22;
  }
  notifyEventToHost(t16, i26) {
    p4(g3, a2.content, a2.task);
    try {
      h7(s7);
    } catch (e22) {
      return void (i26 && i26(e22));
    }
    const n19 = { mediaType: this.getMediaType(), mediaControllerEvent: t16 };
    $2(s6(L8, "media.controller"), "media.controller", [n19], (e22) => {
      i26 && i26(e22);
    });
  }
  stop(e22) {
    this.notifyEventToHost(N10.StopRecording, e22);
  }
};
var J4 = class extends z9 {
  getMediaType() {
    return V8.Video;
  }
  notifyEventToApp(e22) {
    if (this.controllerCallback) switch (e22) {
      case N10.StartRecording:
        if (this.controllerCallback.onRecordingStarted) {
          this.controllerCallback.onRecordingStarted();
          break;
        }
    }
  }
};
function $3(t16, n19) {
  if (!n19) throw new Error("[select Media] Callback cannot be null");
  if (p4(g3, a2.content, a2.task), !u9(l4)) {
    const e22 = { errorCode: E2.OLD_PLATFORM };
    return void n19(e22, []);
  }
  try {
    c26(t16);
  } catch (e22) {
    return void n19(e22, []);
  }
  if (!f30(t16)) {
    const e22 = { errorCode: E2.INVALID_ARGUMENTS };
    return void n19(e22, []);
  }
  const o26 = [t16];
  $2(s6(L8, "media.selectMedia"), "selectMedia", o26, (e22, i26, o27) => {
    var r19, a35;
    if (o27) return void (a24(t16) && (null === (a35 = null === (r19 = null == t16 ? void 0 : t16.videoProps) || void 0 === r19 ? void 0 : r19.videoController) || void 0 === a35 || a35.notifyEventToApp(o27)));
    if (!i26) return void n19(e22, []);
    const s40 = [];
    for (const e23 of i26) s40.push(new x11(e23));
    n19(e22, s40);
  });
}
function K3(t16, n19) {
  if (!n19) throw new Error("[view images] Callback cannot be null");
  if (p4(g3, a2.content, a2.task), !u9(l4)) {
    return void n19({ errorCode: E2.OLD_PLATFORM });
  }
  if (!I11(t16)) {
    return void n19({ errorCode: E2.INVALID_ARGUMENTS });
  }
  const o26 = [t16];
  $2(s6(L8, "media.viewImages"), "viewImages", o26, n19);
}
function Q3(t16, i26) {
  if (!t16) throw new Error("[media.scanBarCode] Callback cannot be null");
  if (p4(g3, a2.content, a2.task), e11.hostClientType === o4.desktop || e11.hostClientType === o4.web || e11.hostClientType === o4.rigel || e11.hostClientType === o4.teamsRoomsWindows || e11.hostClientType === o4.teamsRoomsAndroid || e11.hostClientType === o4.teamsPhones || e11.hostClientType === o4.teamsDisplays) {
    return void t16({ errorCode: E2.NOT_SUPPORTED_ON_PLATFORM }, "");
  }
  if (!u9(h3)) {
    return void t16({ errorCode: E2.OLD_PLATFORM }, "");
  }
  if (!v20(i26)) {
    return void t16({ errorCode: E2.INVALID_ARGUMENTS }, "");
  }
  $2(s6(L8, "media.scanBarCode"), "media.scanBarCode", [i26], t16);
}
!(function(e22) {
  e22[e22.StartRecording = 1] = "StartRecording", e22[e22.StopRecording = 2] = "StopRecording";
})(N10 || (N10 = {})), (function(e22) {
  e22[e22.Photo = 1] = "Photo", e22[e22.Document = 2] = "Document", e22[e22.Whiteboard = 3] = "Whiteboard", e22[e22.BusinessCard = 4] = "BusinessCard";
})(_6 || (_6 = {})), (function(e22) {
  e22[e22.Camera = 1] = "Camera", e22[e22.Gallery = 2] = "Gallery";
})(B6 || (B6 = {})), (function(e22) {
  e22[e22.Image = 1] = "Image", e22[e22.Video = 2] = "Video", e22[e22.VideoAndImage = 3] = "VideoAndImage", e22[e22.Audio = 4] = "Audio";
})(V8 || (V8 = {})), (function(e22) {
  e22[e22.ID = 1] = "ID", e22[e22.URL = 2] = "URL";
})(j16 || (j16 = {})), (function(e22) {
  e22[e22.IMAGE = 1] = "IMAGE", e22[e22.PDF = 2] = "PDF";
})(F12 || (F12 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/mediaUtil.js
function u40(e22, n19) {
  if (null == e22 || null == n19 || e22.length <= 0) return null;
  let t16 = null, r19 = 1;
  return e22.sort((e23, n20) => e23.sequence > n20.sequence ? 1 : -1), e22.forEach((e23) => {
    e23.sequence == r19 && (t16 = t16 ? new Blob([t16, e23.file], { type: n19 }) : new Blob([e23.file], { type: n19 }), r19++);
  }), t16;
}
function i23(e22, n19) {
  if (null == e22 || null == n19) return null;
  const t16 = atob(e22.chunk), r19 = new Array(t16.length);
  for (let e23 = 0; e23 < t16.length; e23++) r19[e23] = t16.charCodeAt(e23);
  const l48 = new Uint8Array(r19), o26 = new Blob([l48], { type: n19 });
  return { sequence: e22.chunkSequence, file: o26 };
}
function c26(e22) {
  s29(e22) ? h7(e10) : p42(e22) ? h7(s7) : d30(e22) && h7(n10);
}
function a24(e22) {
  return !(e22.mediaType != V8.Video || !e22.videoProps || !e22.videoProps.videoController);
}
function f30(e22) {
  return !(null == e22 || e22.maxMediaCount > 10);
}
function d30(e22) {
  var t16;
  return !((null == e22 ? void 0 : e22.mediaType) != V8.Image || !(null === (t16 = null == e22 ? void 0 : e22.imageProps) || void 0 === t16 ? void 0 : t16.imageOutputFormats));
}
function s29(e22) {
  return !(!e22 || e22.mediaType != V8.VideoAndImage && !e22.videoAndImageProps);
}
function p42(e22) {
  return !(!e22 || e22.mediaType != V8.Video || !e22.videoProps || e22.videoProps.isFullScreenMode);
}
function m38(n19, t16, r19) {
  return null != n19 && null != t16 && t16 == S14.ID && null != r19;
}
function I11(e22) {
  return !(null == e22 || e22.length <= 0 || e22.length > 10);
}
function v20(e22) {
  return !e22 || !(null === e22.timeOutIntervalInSec || null != e22.timeOutIntervalInSec && e22.timeOutIntervalInSec <= 0 || null != e22.timeOutIntervalInSec && e22.timeOutIntervalInSec > 60);
}
function g18(e22) {
  if (e22) {
    if (e22.title && "string" != typeof e22.title) return false;
    if (e22.setSelected && "object" != typeof e22.setSelected) return false;
    if (e22.openOrgWideSearchInChatOrChannel && "boolean" != typeof e22.openOrgWideSearchInChatOrChannel) return false;
    if (e22.singleSelect && "boolean" != typeof e22.singleSelect) return false;
  }
  return true;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/barCode.js
var c27 = "v2";
function f31(m59) {
  return new Promise((f48) => {
    if (p4(g3, a2.content, a2.task), !d31()) throw l2;
    if (!v20(m59)) throw { errorCode: E2.INVALID_ARGUMENTS };
    f48(P3(s6(c27, "barCode.scanBarCode"), "media.scanBarCode", m59));
  });
}
function p43() {
  if (p4(g3, a2.content, a2.task), !d31()) throw l2;
  const t16 = O2.Media;
  return new Promise((o26) => {
    o26(P3(s6(c27, "barCode.hasPermission"), "permissions.has", t16));
  });
}
function u41() {
  if (p4(g3, a2.content, a2.task), !d31()) throw l2;
  const t16 = O2.Media;
  return new Promise((o26) => {
    o26(P3(s6(c27, "barCode.requestPermission"), "permissions.request", t16));
  });
}
function d31() {
  return !!(p4(g3) && g3.supports.barCode && g3.supports.permissions);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/chat.js
var chat_exports = {};
__export(chat_exports, {
  isSupported: () => u42,
  openChat: () => a25,
  openGroupChat: () => c28
});
function a25(e22) {
  return m39(s6("v2", "chat.openChat"), e22);
}
function m39(r19, a35) {
  return new Promise((m59) => {
    if (p4(g3, a2.content, a2.task), !u42()) throw l2;
    if (g3.isLegacyTeams) m59(R3(r19, "executeDeepLink", u39([a35.user], void 0, a35.message)));
    else {
      m59(R3(r19, "chat.openChat", { members: [a35.user], message: a35.message }));
    }
  });
}
function c28(a35) {
  const c45 = s6("v2", "chat.openGroupChat");
  return new Promise((r19) => {
    if (a35.users.length < 1) throw Error("OpenGroupChat Failed: No users specified");
    if (1 === a35.users.length) {
      const e22 = { user: a35.users[0], message: a35.message };
      r19(m39(c45, e22));
    } else {
      if (p4(g3, a2.content, a2.task), !u42()) throw l2;
      if (g3.isLegacyTeams) r19(R3(c45, "executeDeepLink", u39(a35.users, a35.topic, a35.message)));
      else {
        r19(R3(c45, "chat.openChat", { members: a35.users, message: a35.message, topic: a35.topic }));
      }
    }
  });
}
function u42() {
  return !(!p4(g3) || !g3.supports.chat);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/clipboard.js
var clipboard_exports = {};
__export(clipboard_exports, {
  isSupported: () => u43,
  read: () => d32,
  write: () => c29
});
function c29(e22) {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.content, a2.meetingStage, a2.task, a2.settings, a2.stage, a2.sidePanel), !u43()) throw l2;
    if (!e22.type || !Object.values(_2).includes(e22.type)) throw new Error(`Blob type ${e22.type} is not supported. Supported blob types are ${Object.values(_2)}`);
    const t16 = yield g2(e22), s40 = { mimeType: e22.type, content: t16 };
    return P3(s6("v2", "clipboard.write"), "clipboard.writeToClipboard", s40);
  });
}
function d32() {
  return n(this, void 0, void 0, function* () {
    p4(g3, a2.content, a2.meetingStage, a2.task, a2.settings, a2.stage, a2.sidePanel);
    const t16 = s6("v2", "clipboard.read");
    if (!u43()) throw l2;
    const e22 = yield P3(t16, "clipboard.readFromClipboard");
    if ("string" == typeof e22) {
      const t17 = JSON.parse(e22);
      return b2(t17.mimeType, t17.content);
    }
    return e22;
  });
}
function u43() {
  return e11.isFramelessWindow ? !(!p4(g3) || !g3.supports.clipboard) : !!(p4(g3) && navigator && navigator.clipboard && g3.supports.clipboard);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/nestedAppAuth.js
var nestedAppAuth_exports = {};
__export(nestedAppAuth_exports, {
  addNAATrustedOrigins: () => y14,
  canParentManageNAATrustedOrigins: () => f32,
  deleteNAATrustedOrigins: () => g19,
  getParentOrigin: () => h24,
  isDeeplyNestedAuthSupported: () => A15,
  isNAAChannelRecommended: () => m40
});
var c30 = { validate: (n19) => Array.isArray(n19) || "object" == typeof n19, deserialize: (n19) => n19 };
var d33;
function m40() {
  var n19;
  return null !== (n19 = p4(g3) && (g3.isNAAChannelRecommended || !!(p4(g3) && v21() && g3.isLegacyTeams && g3.supports.nestedAppAuth))) && void 0 !== n19 && n19;
}
function h24() {
  return p4(g3), I3.parentOrigin;
}
function f32() {
  var n19;
  return null !== (n19 = p4(g3) && g3.canParentManageNAATrustedOrigins) && void 0 !== n19 && n19;
}
function A15() {
  var n19;
  return null !== (n19 = p4(g3) && (g3.isDeeplyNestedAuthSupported || !!(p4(g3) && v21() && g3.isLegacyTeams && u9(T4)))) && void 0 !== n19 && n19;
}
function v21() {
  return e11.hostClientType === o4.android || e11.hostClientType === o4.ios || e11.hostClientType === o4.ipados || e11.hostClientType === o4.visionOS;
}
function y14(r19) {
  return n(this, void 0, void 0, function* () {
    if (!f32()) throw l2;
    const n19 = r19.map(T14);
    return w19(d33.ADD, n19);
  });
}
function g19(r19) {
  return n(this, void 0, void 0, function* () {
    if (!f32()) throw l2;
    const n19 = r19.map(T14);
    return w19(d33.DELETE, n19);
  });
}
function w19(r19, i26) {
  return n(this, void 0, void 0, function* () {
    if (window.parent !== window.top) throw new Error("This API is only available in the top-level parent.");
    if (!Array.isArray(i26) || 0 === i26.length) throw new Error(`The '${i26}' parameter is required and must be a non-empty array.`);
    const n19 = [new E18(r19, i26)];
    return N4("nestedAppAuth.manageNAATrustedOrigins", n19, c30, s6("v2", "nestedAppAuth.manageNAATrustedOrigins"));
  });
}
function T14(n19) {
  try {
    return new URL(n19).origin.toLowerCase();
  } catch (r19) {
    throw new Error(`Invalid origin provided: ${n19}`);
  }
}
!(function(n19) {
  n19.ADD = "ADD", n19.DELETE = "DELETE";
})(d33 || (d33 = {}));
var E18 = class {
  constructor(n19, r19) {
    this.action = n19, this.appOrigins = r19;
  }
  serialize() {
    return { action: this.action, appOrigins: this.appOrigins };
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/geoLocation/geoLocation.js
var geoLocation_exports = {};
__export(geoLocation_exports, {
  getCurrentLocation: () => c32,
  hasPermission: () => p44,
  isSupported: () => u44,
  map: () => map_exports,
  requestPermission: () => f33
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/geoLocation/map.js
var map_exports = {};
__export(map_exports, {
  chooseLocation: () => a26,
  isSupported: () => m41,
  showLocation: () => c31
});
function a26() {
  if (p4(g3, a2.content, a2.task), !m41()) throw l2;
  return P3(s6("v2", "geoLocation.map.chooseLocation"), "location.getLocation", { allowChooseLocation: true, showMap: true });
}
function c31(a35) {
  if (p4(g3, a2.content, a2.task), !m41()) throw l2;
  if (!a35) throw { errorCode: E2.INVALID_ARGUMENTS };
  return P3(s6("v2", "geoLocation.showLocation"), "location.showLocation", a35);
}
function m41() {
  return !!(p4(g3) && g3.supports.geoLocation && g3.supports.geoLocation.map && g3.supports.permissions);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/geoLocation/geoLocation.js
var m42 = "v2";
function c32() {
  if (p4(g3, a2.content, a2.task), !u44()) throw l2;
  return P3(s6(m42, "geoLocation.getCurrentLocation"), "location.getLocation", { allowChooseLocation: false, showMap: false });
}
function p44() {
  if (p4(g3, a2.content, a2.task), !u44()) throw l2;
  const a35 = O2.GeoLocation;
  return new Promise((t16) => {
    t16(P3(s6(m42, "geoLocation.hasPermission"), "permissions.has", a35));
  });
}
function f33() {
  if (p4(g3, a2.content, a2.task), !u44()) throw l2;
  const a35 = O2.GeoLocation;
  return new Promise((t16) => {
    t16(P3(s6(m42, "geoLocation.requestPermission"), "permissions.request", a35));
  });
}
function u44() {
  return !!(p4(g3) && g3.supports.geoLocation && g3.supports.permissions);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/secondaryBrowser.js
var secondaryBrowser_exports = {};
__export(secondaryBrowser_exports, {
  isSupported: () => l37,
  open: () => a27
});
function a27(a35) {
  if (p4(g3, a2.content), !l37()) throw l2;
  if (!a35 || !h2(a35)) throw { errorCode: E2.INVALID_ARGUMENTS, message: "Invalid Url: Only https URL is allowed" };
  return P3(s6("v2", "secondaryBrowser.openUrl"), "secondaryBrowser.open", a35.toString());
}
function l37() {
  return !(!p4(g3) || !g3.supports.secondaryBrowser);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/location.js
var location_exports = {};
__export(location_exports, {
  getLocation: () => s30,
  isSupported: () => m43,
  showLocation: () => f34
});
function s30(s40, f48) {
  if (!f48) throw new Error("[location.getLocation] Callback cannot be null");
  if (p4(g3, a2.content, a2.task), !u9(a4)) throw { errorCode: E2.OLD_PLATFORM };
  if (!s40) throw { errorCode: E2.INVALID_ARGUMENTS };
  if (!m43()) throw l2;
  $2(s6("v1", "location.getLocation"), "location.getLocation", [s40], f48);
}
function f34(s40, f48) {
  if (!f48) throw new Error("[location.showLocation] Callback cannot be null");
  if (p4(g3, a2.content, a2.task), !u9(a4)) throw { errorCode: E2.OLD_PLATFORM };
  if (!s40) throw { errorCode: E2.INVALID_ARGUMENTS };
  if (!m43()) throw l2;
  $2(s6("v1", "location.showLocation"), "location.showLocation", [s40], f48);
}
function m43() {
  return !(!p4(g3) || !g3.supports.location);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/meeting/meeting.js
var meeting_exports = {};
__export(meeting_exports, {
  CallType: () => C16,
  EventActionSource: () => f35,
  MeetingReactionType: () => p45,
  MeetingType: () => h25,
  SharingProtocol: () => S15,
  appShareButton: () => appShareButton_exports,
  getAppContentStageSharingCapabilities: () => j17,
  getAppContentStageSharingState: () => T15,
  getAuthenticationTokenForAnonymousUser: () => H11,
  getIncomingClientAudioState: () => b19,
  getLiveStreamState: () => _7,
  getMeetingDetails: () => w20,
  getMeetingDetailsVerbose: () => v22,
  joinMeeting: () => R11,
  registerLiveStreamChangedHandler: () => E19,
  registerMeetingReactionReceivedHandler: () => O14,
  registerRaiseHandStateChangedHandler: () => y15,
  registerSpeakingStateChangeHandler: () => D10,
  requestAppAudioHandling: () => I12,
  requestStartLiveStreaming: () => k11,
  requestStopLiveStreaming: () => M7,
  shareAppContentToStage: () => P14,
  stopSharingAppContentToStage: () => q7,
  toggleIncomingClientAudio: () => A16,
  updateMicState: () => U10
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/meeting/appShareButton.js
var appShareButton_exports = {};
__export(appShareButton_exports, {
  setOptions: () => i24
});
function i24(i26) {
  p4(g3, a2.sidePanel), i26.contentUrl && new URL(i26.contentUrl), $2(s6("v1", "meeting.appShareButton.setOptions"), "meeting.appShareButton.setOptions", [i26]);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/meeting/meeting.js
var u45 = "v1";
var m44;
var p45;
var h25;
var C16;
var S15;
var f35;
function b19(e22) {
  if (!e22) throw new Error("[get incoming client audio state] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.getIncomingClientAudioState"), "getIncomingClientAudioState", e22);
}
function A16(e22) {
  if (!e22) throw new Error("[toggle incoming client audio] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.toggleIncomingClientAudio"), "toggleIncomingClientAudio", e22);
}
function w20(e22) {
  if (!e22) throw new Error("[get meeting details] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage, a2.settings, a2.content), $2(s6(u45, "meeting.getMeetingDetails"), "meeting.getMeetingDetails", e22);
}
function v22() {
  var n19, i26, a35;
  return n(this, void 0, void 0, function* () {
    let e22;
    p4(g3, a2.sidePanel, a2.meetingStage, a2.settings, a2.content);
    try {
      const n20 = true;
      e22 = yield P3(s6("v2", "meeting.getMeetingDetailsVerbose"), "meeting.getMeetingDetails", n20);
    } catch (e23) {
      throw new Error(null === (n19 = null == e23 ? void 0 : e23.errorCode) || void 0 === n19 ? void 0 : n19.toString());
    }
    if (((null === (i26 = e22.details) || void 0 === i26 ? void 0 : i26.type) == C16.GroupCall || (null === (a35 = e22.details) || void 0 === a35 ? void 0 : a35.type) == C16.OneOnOneCall) && !e22.details.originalCallerInfo) throw new Error(E2.NOT_SUPPORTED_ON_PLATFORM.toString());
    return e22;
  });
}
function H11(e22) {
  if (!e22) throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage, a2.task), $2(s6(u45, "meeting.getAuthenticationTokenForAnonymousUser"), "meeting.getAuthenticationTokenForAnonymousUser", e22);
}
function _7(e22) {
  if (!e22) throw new Error("[get live stream state] Callback cannot be null");
  p4(g3, a2.sidePanel), $2(s6(u45, "meeting.getLiveStreamState"), "meeting.getLiveStreamState", e22);
}
function k11(e22, t16, i26) {
  if (!e22) throw new Error("[request start live streaming] Callback cannot be null");
  p4(g3, a2.sidePanel), $2(s6(u45, "meeting.requestStartLiveStreaming"), "meeting.requestStartLiveStreaming", [t16, i26], e22);
}
function M7(e22) {
  if (!e22) throw new Error("[request stop live streaming] Callback cannot be null");
  p4(g3, a2.sidePanel), $2(s6(u45, "meeting.requestStopLiveStreaming"), "meeting.requestStopLiveStreaming", e22);
}
function E19(e22) {
  if (!e22) throw new Error("[register live stream changed handler] Handler cannot be null");
  p4(g3, a2.sidePanel), p8(s6(u45, "meeting.registerLiveStreamChangedHandler"), "meeting.liveStreamChanged", e22);
}
function P14(e22, t16, i26 = { sharingProtocol: S15.Collaborative }) {
  if (!e22) throw new Error("[share app content to stage] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.shareAppContentToStage"), "meeting.shareAppContentToStage", [t16, i26], e22);
}
function j17(e22) {
  if (!e22) throw new Error("[get app content stage sharing capabilities] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.getAppContentStageSharingCapabilities"), "meeting.getAppContentStageSharingCapabilities", e22);
}
function q7(e22) {
  if (!e22) throw new Error("[stop sharing app content to stage] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.stopSharingAppContentToStage"), "meeting.stopSharingAppContentToStage", e22);
}
function T15(e22) {
  if (!e22) throw new Error("[get app content stage sharing state] Callback cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.getAppContentStageSharingState"), "meeting.getAppContentStageSharingState", e22);
}
function D10(e22) {
  if (!e22) throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), p8(s6(u45, "meeting.registerSpeakingStateChangeHandler"), "meeting.speakingStateChanged", e22);
}
function y15(e22) {
  if (!e22) throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), p8(s6(u45, "meeting.registerRaiseHandStateChangedHandler"), "meeting.raiseHandStateChanged", e22);
}
function O14(e22) {
  if (!e22) throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), p8(s6(u45, "meeting.registerMeetingReactionReceivedHandler"), "meeting.meetingReactionReceived", e22);
}
function R11(e22) {
  if (void 0 === (null == e22 ? void 0 : e22.joinWebUrl) || null === (null == e22 ? void 0 : e22.joinWebUrl)) return Promise.reject(new Error("Invalid joinMeetingParams"));
  p4(g3);
  const n19 = { joinWebUrl: e22.joinWebUrl.href, source: e22.source || f35.Other };
  return P3(s6("v2", "meeting.joinMeeting"), "meeting.joinMeeting", n19);
}
function I12(t16, s40) {
  if (!s40) throw new Error("[requestAppAudioHandling] Callback response cannot be null");
  if (!t16.micMuteStateChangedCallback) throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");
  p4(g3, a2.sidePanel, a2.meetingStage), t16.isAppHandlingAudio ? (function(t17, a35) {
    const o26 = (n19, o27) => {
      if (n19 && null != o27) throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");
      if (n19) throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${n19.errorCode} ${n19.message}`);
      if ("boolean" != typeof o27) throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");
      const r19 = (n20) => n(this, void 0, void 0, function* () {
        try {
          const e22 = yield t17.micMuteStateChangedCallback(n20);
          F13(e22, e22.isMicMuted === n20.isMicMuted ? m44.HostInitiated : m44.AppDeclinedToChange);
        } catch (e22) {
          F13(n20, m44.AppFailedToChange);
        }
      });
      p8(s6(u45, "meeting.registerMicStateChangeHandler"), "meeting.micStateChanged", r19);
      const g23 = (e22) => {
        var n20;
        null === (n20 = t17.audioDeviceSelectionChangedCallback) || void 0 === n20 || n20.call(t17, e22);
      };
      p8(s6(u45, "meeting.registerAudioDeviceSelectionChangedHandler"), "meeting.audioDeviceSelectionChanged", g23), a35(o27);
    };
    $2(s6(u45, "meeting.requestAppAudioHandling"), "meeting.requestAppAudioHandling", [t17.isAppHandlingAudio], o26);
  })(t16, s40) : (function(e22, t17) {
    const i26 = (e23, n19) => {
      if (e23 && null != n19) throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");
      if (e23) throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${e23.errorCode} ${e23.message}`);
      if ("boolean" != typeof n19) throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");
      b9("meeting.micStateChanged") && g6("meeting.micStateChanged"), b9("meeting.audioDeviceSelectionChanged") && g6("meeting.audioDeviceSelectionChanged"), t17(n19);
    };
    $2(s6(u45, "meeting.requestAppAudioHandling"), "meeting.requestAppAudioHandling", [e22.isAppHandlingAudio], i26);
  })(t16, s40);
}
function U10(e22) {
  F13(e22, m44.AppInitiated);
}
function F13(e22, t16) {
  p4(g3, a2.sidePanel, a2.meetingStage), $2(s6(u45, "meeting.setMicStateWithReason"), "meeting.updateMicState", [e22, t16]);
}
!(function(e22) {
  e22[e22.HostInitiated = 0] = "HostInitiated", e22[e22.AppInitiated = 1] = "AppInitiated", e22[e22.AppDeclinedToChange = 2] = "AppDeclinedToChange", e22[e22.AppFailedToChange = 3] = "AppFailedToChange";
})(m44 || (m44 = {})), (function(e22) {
  e22.like = "like", e22.heart = "heart", e22.laugh = "laugh", e22.surprised = "surprised", e22.applause = "applause";
})(p45 || (p45 = {})), (function(e22) {
  e22.Unknown = "Unknown", e22.Adhoc = "Adhoc", e22.Scheduled = "Scheduled", e22.Recurring = "Recurring", e22.Broadcast = "Broadcast", e22.MeetNow = "MeetNow";
})(h25 || (h25 = {})), (function(e22) {
  e22.OneOnOneCall = "oneOnOneCall", e22.GroupCall = "groupCall";
})(C16 || (C16 = {})), (function(e22) {
  e22.Collaborative = "Collaborative", e22.ScreenShare = "ScreenShare";
})(S15 || (S15 = {})), (function(e22) {
  e22.M365CalendarGridContextMenu = "m365_calendar_grid_context_menu", e22.M365CalendarGridPeek = "m365_calendar_grid_peek", e22.M365CalendarGridEventCardJoinButton = "m365_calendar_grid_event_card_join_button", e22.M365CalendarFormRibbonJoinButton = "m365_calendar_form_ribbon_join_button", e22.M365CalendarFormJoinTeamsMeetingButton = "m365_calendar_form_join_teams_meeting_button", e22.M365CalendarMeetNow = "m365_calendar_meet_now", e22.Other = "other";
})(f35 || (f35 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/monetization.js
var monetization_exports = {};
__export(monetization_exports, {
  isSupported: () => s31,
  openPurchaseExperience: () => p46
});
function p46(p59, a35) {
  let c45, u56, f48 = "";
  "function" == typeof p59 ? (c45 = p59, u56 = a35, f48 = s6("v1", "monetization.openPurchaseExperience")) : (u56 = p59, f48 = s6("v2", "monetization.openPurchaseExperience"));
  return p4(g3, a2.content), f4(() => new Promise((t16) => {
    if (!s31()) throw l2;
    t16(P3(f48, "monetization.openPurchaseExperience", u56));
  }), c45);
}
function s31() {
  return !(!p4(g3) || !g3.supports.monetization);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/calendar.js
var calendar_exports = {};
__export(calendar_exports, {
  composeMeeting: () => a28,
  isSupported: () => s32,
  openCalendarItem: () => m45
});
function m45(t16) {
  return new Promise((m59) => {
    if (p4(g3, a2.content), !s32()) throw new Error("Not supported");
    if (!t16.itemId || !t16.itemId.trim()) throw new Error("Must supply an itemId to openCalendarItem");
    m59(R3(s6("v2", "calendar.openCalendarItem"), "calendar.openCalendarItem", t16));
  });
}
function a28(m59) {
  return new Promise((a35) => {
    if (p4(g3, a2.content), !s32()) throw new Error("Not supported");
    const p59 = s6("v2", "calendar.composeMeeting");
    g3.isLegacyTeams ? a35(R3(p59, "executeDeepLink", U8(m59.attendees, m59.startTime, m59.endTime, m59.subject, m59.content))) : a35(R3(p59, "calendar.composeMeeting", m59));
  });
}
function s32() {
  return !(!p4(g3) || !g3.supports.calendar);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/mail/mail.js
var mail_exports = {};
__export(mail_exports, {
  ComposeMailType: () => a29,
  composeMail: () => p47,
  handoff: () => handoff_exports,
  isSupported: () => l38,
  openMailItem: () => m47
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/mail/handoff.js
var handoff_exports = {};
__export(handoff_exports, {
  composeMailWithHandoff: () => m46,
  isSupported: () => f36
});
function s33(o26) {
  o26 && 0 !== o26.length && o26.forEach((o27) => {
    e19(o27);
  });
}
function m46(t16) {
  if (p4(g3, a2.content), !f36()) throw new Error("Not supported");
  return (function(o26) {
    if (!o26.handoffId || 0 == o26.handoffId.trim().length || "" === o26.handoffId.trim()) throw new Error("handoffId should not be null or empty string.");
    const t17 = o26.composeMailParams;
    t17.type === a29.New && (s33(t17.toRecipients), s33(t17.ccRecipients), s33(t17.bccRecipients));
  })(t16), U3("mail.handoff.composeMail", [new c33(t16)], s6("v2", "mail.handoff.composeMail"));
}
function f36() {
  return !!(p4(g3) && g3.supports.mail && g3.supports.mail.handoff);
}
var c33 = class {
  constructor(o26) {
    this.composeMailParamsWithHandoff = o26;
  }
  serialize() {
    return this.composeMailParamsWithHandoff;
  }
};

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/mail/mail.js
function m47(i26) {
  return new Promise((m59) => {
    if (p4(g3, a2.content), !l38()) throw new Error("Not supported");
    if (!i26.itemId || !i26.itemId.trim()) throw new Error("Must supply an itemId to openMailItem");
    m59(R3(s6("v2", "mail.openMailItem"), "mail.openMailItem", i26));
  });
}
function p47(i26) {
  return new Promise((m59) => {
    if (p4(g3, a2.content), !l38()) throw new Error("Not supported");
    m59(R3(s6("v2", "mail.composeMail"), "mail.composeMail", i26));
  });
}
function l38() {
  return !(!p4(g3) || !g3.supports.mail);
}
var a29;
!(function(r19) {
  r19.New = "new", r19.Reply = "reply", r19.ReplyAll = "replyAll", r19.Forward = "forward";
})(a29 || (a29 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/people.js
var people_exports = {};
__export(people_exports, {
  isSupported: () => u46,
  selectPeople: () => a30
});
function a30(t16, e22) {
  let o26, n19;
  p4(g3, a2.content, a2.task, a2.settings);
  let p59 = "";
  return "function" == typeof t16 ? ([o26, n19] = [t16, e22], p59 = s6("v1", "people.selectPeople")) : (n19 = t16, p59 = s6("v2", "people.selectPeople")), a3(c34, o26, p59, n19);
}
function c34(r19, i26) {
  return new Promise((s40) => {
    if (!u9(r8)) throw { errorCode: E2.OLD_PLATFORM };
    if (!g18(i26)) throw { errorCode: E2.INVALID_ARGUMENTS };
    if (!u46()) throw l2;
    s40(P3(r19, "people.selectPeople", i26));
  });
}
function u46() {
  return !(!p4(g3) || !g3.supports.people);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/profile.js
var profile_exports = {};
__export(profile_exports, {
  isSupported: () => l39,
  showProfile: () => s34
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/profileUtil.js
function e21(e22) {
  return e22 ? e22.modality && "string" != typeof e22.modality ? [false, "modality must be a string"] : e22.targetElementBoundingRect && "object" == typeof e22.targetElementBoundingRect ? e22.triggerType && "string" == typeof e22.triggerType ? (function(e23) {
    if (!e23) return [false, "persona object must be provided"];
    if (e23.displayName && "string" != typeof e23.displayName) return [false, "displayName must be a string"];
    if (!e23.identifiers || "object" != typeof e23.identifiers) return [false, "persona identifiers object must be provided"];
    if (!e23.identifiers.AadObjectId && !e23.identifiers.Smtp && !e23.identifiers.Upn) return [false, "at least one valid identifier must be provided"];
    if (e23.identifiers.AadObjectId && "string" != typeof e23.identifiers.AadObjectId) return [false, "AadObjectId identifier must be a string"];
    if (e23.identifiers.Smtp && "string" != typeof e23.identifiers.Smtp) return [false, "Smtp identifier must be a string"];
    if (e23.identifiers.Upn && "string" != typeof e23.identifiers.Upn) return [false, "Upn identifier must be a string"];
    return [true, void 0];
  })(e22.persona) : [false, "triggerType must be a valid string"] : [false, "targetElementBoundingRect must be a DOMRect"] : [false, "A request object is required"];
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/profile.js
function s34(s40) {
  return p4(g3, a2.content), new Promise((e22) => {
    const [n19, m59] = e21(s40);
    if (!n19) throw { errorCode: E2.INVALID_ARGUMENTS, message: m59 };
    const l48 = { modality: s40.modality, persona: s40.persona, triggerType: s40.triggerType, targetRectangle: { x: s40.targetElementBoundingRect.x, y: s40.targetElementBoundingRect.y, width: s40.targetElementBoundingRect.width, height: s40.targetElementBoundingRect.height } };
    e22(P3(s6("v2", "profile.showProfile"), "profile.showProfile", l48));
  });
}
function l39() {
  return !(!p4(g3) || !g3.supports.profile);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/search.js
var search_exports = {};
__export(search_exports, {
  closeSearch: () => g20,
  isSupported: () => d34,
  registerHandlers: () => f37,
  unregisterHandlers: () => p48
});
var h26 = "v2";
var m48 = "search.queryChange";
var u47 = "search.queryClose";
var l40 = "search.queryExecute";
function f37(r19, e22, t16) {
  if (p4(g3, a2.content), !d34()) throw l2;
  p8(s6(h26, "search.registerOnClosedHandler"), u47, r19), p8(s6(h26, "search.registerOnExecutedHandler"), l40, e22), t16 && p8(s6(h26, "search.registerOnChangeHandler"), m48, t16);
}
function p48() {
  if (p4(g3, a2.content), !d34()) throw l2;
  $2(s6(h26, "search.unregisterHandlers"), "search.unregister"), g6(m48), g6(u47), g6(l40);
}
function d34() {
  return !(!p4(g3) || !g3.supports.search);
}
function g20() {
  return new Promise((r19) => {
    if (p4(g3, a2.content), !d34()) throw new Error("Not supported");
    r19(R3(s6(h26, "search.closeSearch"), "search.closeSearch"));
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/sharing/sharing.js
var sharing_exports = {};
__export(sharing_exports, {
  SharingAPIMessages: () => c35,
  history: () => history_exports,
  isSupported: () => u48,
  shareWebContent: () => f38
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/sharing/history.js
var history_exports = {};
__export(history_exports, {
  getContent: () => m49,
  isSupported: () => l41
});
function m49() {
  return n(this, void 0, void 0, function* () {
    if (p4(g3, a2.sidePanel, a2.meetingStage), !l41()) throw l2;
    return yield P3(s6("v2", "sharing.history.getContent"), "sharing.history.getContent");
  });
}
function l41() {
  var t16;
  return p4(g3) && void 0 !== (null === (t16 = g3.supports.sharing) || void 0 === t16 ? void 0 : t16.history);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/sharing/sharing.js
var c35 = { shareWebContent: "sharing.shareWebContent" };
function f38(e22, s40) {
  try {
    !(function(e23) {
      if (!(e23 && e23.content && e23.content.length)) {
        throw { errorCode: E2.INVALID_ARGUMENTS, message: "Shared content is missing" };
      }
    })(e22), (function(e23) {
      let t16;
      if (e23.content.some((e24) => !e24.type)) throw t16 = { errorCode: E2.INVALID_ARGUMENTS, message: "Shared content type cannot be undefined" }, t16;
      if (e23.content.some((t17) => t17.type !== e23.content[0].type)) throw t16 = { errorCode: E2.INVALID_ARGUMENTS, message: "Shared content must be of the same type" }, t16;
    })(e22), e22.content.forEach(h27);
  } catch (e23) {
    return l3(() => Promise.reject(e23), s40);
  }
  p4(g3, a2.content, a2.sidePanel, a2.task, a2.stage, a2.meetingStage);
  const m59 = s6(s40 ? "v1" : "v2", "sharing.shareWebContent");
  return l3(p49, s40, m59, e22);
}
function p49(t16, r19) {
  return new Promise((n19) => {
    if (!u48()) throw l2;
    n19(P3(t16, c35.shareWebContent, r19));
  });
}
function h27(e22) {
  if ("URL" === e22.type) {
    if (!e22.url) throw { errorCode: E2.INVALID_ARGUMENTS, message: "URLs are required for URL content types" };
  } else {
    if ("FILE" !== e22.type) throw { errorCode: E2.INVALID_ARGUMENTS, message: "Content type is unsupported" };
    if (!e22.url) throw { errorCode: E2.INVALID_ARGUMENTS, message: "File URLs are required for File content types" };
  }
}
function u48() {
  return !(!p4(g3) || !g3.supports.sharing);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/stageView/stageView.js
var stageView_exports = {};
__export(stageView_exports, {
  StageViewOpenMode: () => a31,
  isSupported: () => s36,
  open: () => m51,
  self: () => self_exports
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/stageView/self.js
var self_exports = {};
__export(self_exports, {
  close: () => s35,
  isSupported: () => m50
});
function s35() {
  return new Promise((s40) => {
    if (p4(g3, a2.content), !m50()) throw l2;
    s40(P3(s6("v2", "stageView.self.close"), "stageView.self.close"));
  });
}
function m50() {
  var t16;
  return p4(g3) && void 0 !== (null === (t16 = g3.supports.stageView) || void 0 === t16 ? void 0 : t16.self);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/stageView/stageView.js
var a31;
function m51(p59) {
  return new Promise((a35) => {
    if (p4(g3, a2.content), !s36()) throw l2;
    if (!p59) throw new Error("[stageView.open] Stage view params cannot be null");
    a35(P3(s6("v2", "stageView.open"), "stageView.open", p59));
  });
}
function s36() {
  return !(!p4(g3) || !g3.supports.stageView);
}
!(function(t16) {
  t16.modal = "modal", t16.popout = "popout", t16.popoutWithChat = "popoutWithChat";
})(a31 || (a31 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/visualMedia/visualMedia.js
var visualMedia_exports = {};
__export(visualMedia_exports, {
  CameraRestriction: () => f40,
  Source: () => l43,
  hasPermission: () => c37,
  image: () => image_exports,
  requestPermission: () => p51
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/visualMedia/image.js
var image_exports = {};
__export(image_exports, {
  captureImages: () => l42,
  isSupported: () => d35,
  retrieveImages: () => p50
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/visualMediaHelpers.js
var o23 = 10;

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/visualMedia/image.js
function l42(o26) {
  return n(this, void 0, void 0, function* () {
    p4(g3, a2.content, a2.task), c36(), f39(o26);
    const i26 = yield P3(s6("v2", "visualMedia.image.captureImages"), "visualMedia.image.captureImages", o26);
    return v23(o26.maxVisualMediaCount, i26), i26;
  });
}
function p50(o26) {
  return n(this, void 0, void 0, function* () {
    p4(g3, a2.content, a2.task), c36(), f39(o26);
    const i26 = yield P3(s6("v2", "visualMedia.image.retrieveImages"), "visualMedia.image.retrieveImages", o26);
    return v23(o26.maxVisualMediaCount, i26), i26;
  });
}
function d35() {
  return !!(p4(g3) && g3.supports.visualMedia && g3.supports.visualMedia.image && g3.supports.permissions);
}
function c36() {
  if (!d35()) throw l2;
}
function f39(i26) {
  if (!i26 || i26.maxVisualMediaCount > o23 || i26.maxVisualMediaCount < 1) throw u2;
}
function v23(i26, t16) {
  if (t16.length > i26) throw f2;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/visualMedia/visualMedia.js
var f40;
var l43;
function c37() {
  if (p4(g3, a2.content, a2.task), !d35()) throw l2;
  const m59 = O2.Media;
  return P3(s6("v2", "visualMedia.hasPermission"), "permissions.has", m59);
}
function p51() {
  if (p4(g3, a2.content, a2.task), !d35()) throw l2;
  const m59 = O2.Media;
  return P3(s6("v2", "visualMedia.requestPermission"), "permissions.request", m59);
}
!(function(r19) {
  r19[r19.FrontOrRear = 1] = "FrontOrRear", r19[r19.FrontOnly = 2] = "FrontOnly", r19[r19.RearOnly = 3] = "RearOnly";
})(f40 || (f40 = {})), (function(r19) {
  r19[r19.Camera = 1] = "Camera", r19[r19.Gallery = 2] = "Gallery";
})(l43 || (l43 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/webStorage.js
var webStorage_exports = {};
__export(webStorage_exports, {
  isSupported: () => u49,
  isWebStorageClearedOnUserLogOut: () => a32
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/webStorageHelpers.js
var t15 = null;
function o24() {
  return n(this, void 0, void 0, function* () {
    return null === t15 && (t15 = (yield U4()).app.host.name), t15;
  });
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/webStorage.js
function a32() {
  return n(this, void 0, void 0, function* () {
    if (p4(g3), !u49()) throw l2;
    return !(!g3.isLegacyTeams || e11.hostClientType !== o4.android && e11.hostClientType !== o4.ios && e11.hostClientType !== o4.ipados && e11.hostClientType !== o4.visionOS || (yield (function() {
      return n(this, void 0, void 0, function* () {
        return o24();
      });
    })()) !== i5.teams) || (yield O6(s6("v2", "webStorage.isWebStorageClearedOnUserLogOut"), "webStorage.isWebStorageClearedOnUserLogOut"));
  });
}
function u49() {
  return p4(g3) && void 0 !== g3.supports.webStorage;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/call.js
var call_exports = {};
__export(call_exports, {
  CallModalities: () => m52,
  isSupported: () => u50,
  startCall: () => c38
});
var m52;
function c38(c45) {
  const d39 = s6("v2", "call.startCall");
  return new Promise((o26) => {
    var f48;
    if (p4(g3, a2.content, a2.task), !u50()) throw l2;
    if (!g3.isLegacyTeams) return $2(d39, "call.startCall", [c45], o26);
    o26(O6(d39, "executeDeepLink", R10(c45.targets, null === (f48 = c45.requestedModalities) || void 0 === f48 ? void 0 : f48.includes(m52.Video), c45.source)).then((t16) => {
      if (!t16) throw new Error(b3);
      return t16;
    }));
  });
}
function u50() {
  return !(!p4(g3) || !g3.supports.call);
}
!(function(t16) {
  t16.Unknown = "unknown", t16.Audio = "audio", t16.Video = "video", t16.VideoBasedScreenSharing = "videoBasedScreenSharing", t16.Data = "data";
})(m52 || (m52 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appInitialization.js
var appInitialization_exports = {};
__export(appInitialization_exports, {
  ExpectedFailureReason: () => b6,
  FailedReason: () => F4,
  Messages: () => N6,
  notifyAppLoaded: () => s37,
  notifyExpectedFailure: () => c39,
  notifyFailure: () => m53,
  notifySuccess: () => f41
});
var r18 = "v1";
function s37() {
  F3(s6(r18, "appInitialization.notifyAppLoaded"));
}
function f41() {
  $2(s6(r18, "appInitialization.notifySuccess"), N6.Success, [o12]);
}
function m53(i26) {
  N5(s6(r18, "appInitialization.notifyFailure"), i26);
}
function c39(i26) {
  H3(s6(r18, "appInitialization.notifyExpectedFailure"), i26);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/thirdPartyCloudStorage.js
var thirdPartyCloudStorage_exports = {};
__export(thirdPartyCloudStorage_exports, {
  getDragAndDropFiles: () => g21,
  isSupported: () => C17
});
var c40 = u5("thirdPartyCloudStorage");
var f42 = class {
  constructor(e22, r19) {
    this.fileType = e22, this.assembleAttachment = r19;
  }
};
var d36 = [];
var h28 = null;
var m54 = true;
var p52 = null;
function g21(t16, n19) {
  if (!n19) throw new Error("[getDragAndDropFiles] Callback cannot be null");
  if (!t16 || "" === t16) {
    return void n19([], { errorCode: E2.INVALID_ARGUMENTS });
  }
  if (p4(g3, a2.content, a2.task), !C17()) throw l2;
  if (p52) throw p52 = null, new Error("getDragAndDropFiles cannot be called twice");
  p52 = n19, m54 = true, $2(s6("v2", "thirdPartyCloudStorage.getDragAndDropFiles"), "thirdPartyCloudStorage.getDragAndDropFiles", [t16], R12);
}
function R12(e22) {
  if (p52) if (e22 && e22.error) p52([], e22.error), p52 = null;
  else if (e22 && e22.fileChunk) try {
    m54 || 0 !== e22.fileChunk.chunkSequence || (c40("Last chunk is not received or 'endOfFile' value for previous chunk was not set to true"), m54 = true, p52([], { errorCode: E2.INTERNAL_ERROR, message: "error occurred while receiving data" }), d36 = [], p52 = null);
    const r19 = i23(e22.fileChunk, e22.fileType);
    if (r19 ? (h28 || (h28 = new f42(e22.fileType, [])), h28.assembleAttachment.push(r19)) : (c40(`Received a null assemble attachment for when decoding chunk sequence ${e22.fileChunk.chunkSequence}; not including the chunk in the assembled file.`), p52 ? p52([], { errorCode: E2.INTERNAL_ERROR, message: "error occurred while receiving data" }) : p52 = null, d36 = [], p52 = null, m54 = true), m54 = e22.fileChunk.endOfFile, e22.fileChunk.endOfFile && h28) {
      const r20 = u40(h28.assembleAttachment, h28.fileType);
      if (r20) {
        const t16 = new File([r20], e22.fileName, { type: r20.type });
        d36.push(t16);
      }
      e22.isLastFile && p52 && (p52(d36, e22.error), d36 = [], p52 = null, m54 = true), h28 = null;
    }
  } catch (e23) {
    p52 && (p52([], { errorCode: E2.INTERNAL_ERROR, message: e23 }), d36 = [], p52 = null, m54 = true);
  }
  else p52([], { errorCode: E2.INTERNAL_ERROR, message: "data received is null" }), d36 = [], p52 = null, m54 = true;
}
function C17() {
  return !(!p4(g3) || !g3.supports.thirdPartyCloudStorage);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/settings.js
var settings_exports = {};
__export(settings_exports, {
  getSettings: () => f43,
  registerOnRemoveHandler: () => j18,
  registerOnSaveHandler: () => u51,
  setSettings: () => p53,
  setValidityState: () => c41
});
var l44 = "v1";
function c41(t16) {
  T7(s6(l44, "settings.setValidityState"), t16);
}
function f43(e22) {
  p4(g3, a2.content, a2.settings, a2.remove, a2.sidePanel), C8(s6(l44, "settings.getSettings")).then((t16) => {
    e22(t16);
  });
}
function p53(e22, n19) {
  p4(g3, a2.content, a2.settings, a2.sidePanel);
  const a35 = null != n19 ? n19 : i6();
  L4(s6(l44, "settings.setSettings"), e22).then(() => {
    a35(true);
  }).catch((t16) => {
    a35(false, t16.message);
  });
}
function u51(t16) {
  N7(s6(l44, "settings.registerOnSaveHandler"), t16);
}
function j18(t16) {
  w8(s6(l44, "settings.registerOnRemoveHandler"), t16);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/tasks.js
var tasks_exports = {};
__export(tasks_exports, {
  getDefaultSizeIfNotProvided: () => g22,
  startTask: () => c42,
  submitTask: () => f44,
  updateTask: () => p54
});
var m55 = "v1";
function c42(t16, e22) {
  const n19 = s6(m55, "tasks.startTask"), c45 = e22 ? (t17) => {
    var i26, o26;
    return e22(null !== (i26 = t17.err) && void 0 !== i26 ? i26 : "", null !== (o26 = t17.result) && void 0 !== o26 ? o26 : "");
  } : void 0;
  return void 0 === t16.card && void 0 === t16.url || t16.card ? (p4(g3, a2.content, a2.sidePanel, a2.meetingStage), $2(n19, "tasks.startTask", [t16], e22)) : void 0 !== t16.completionBotId ? k4(n19, (function(t17) {
    if (void 0 === t17.url || void 0 === t17.completionBotId) throw new Error(`Both url ${t17.url} and completionBotId ${t17.completionBotId} are required for bot url dialog. At least one is undefined.`);
    const i26 = { url: t17.url, size: { height: t17.height ? t17.height : r3.Small, width: t17.width ? t17.width : r3.Small }, title: t17.title, fallbackUrl: t17.fallbackUrl, completionBotId: t17.completionBotId };
    return i26;
  })(t16), c45) : b7(n19, (function(t17) {
    if (void 0 === t17.url) throw new Error("url property of taskInfo object can't be undefined");
    const i26 = { url: t17.url, size: { height: t17.height ? t17.height : r3.Small, width: t17.width ? t17.width : r3.Small }, title: t17.title, fallbackUrl: t17.fallbackUrl };
    return i26;
  })(t16), c45), new p37();
}
function p54(i26) {
  i26 = g22(i26);
  const { width: o26, height: r19 } = i26, n19 = t2(i26, ["width", "height"]);
  if (Object.keys(n19).length) throw new Error("resize requires a TaskInfo argument containing only width and height");
  h8(s6(m55, "tasks.updateTask"), i26);
}
function f44(t16, i26) {
  j8(s6(m55, "tasks.submitTask"), t16, i26);
}
function g22(t16) {
  return t16.height = t16.height ? t16.height : r3.Small, t16.width = t16.width ? t16.width : r3.Small, t16;
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/marketplace.js
var marketplace_exports = {};
__export(marketplace_exports, {
  CartStatus: () => f45,
  Intent: () => p56,
  addOrUpdateCartItems: () => v24,
  cartVersion: () => u53,
  getCart: () => I13,
  isSupported: () => h29,
  removeCartItems: () => C18,
  updateCartStatus: () => k12
});

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/marketplaceUtils.js
function o25(r19) {
  try {
    return r19.cartItems = s38(r19.cartItems), r19;
  } catch (r20) {
    throw new Error("Error deserializing cart");
  }
}
function s38(r19) {
  return r19.map((r20) => {
    if (r20.imageURL) {
      const e22 = new URL(r20.imageURL);
      r20.imageURL = e22;
    }
    return r20.accessories && (r20.accessories = s38(r20.accessories)), r20;
  });
}
var i25 = (e22) => {
  try {
    return e22.map((e23) => {
      const { imageURL: t16, accessories: o26 } = e23, s40 = t2(e23, ["imageURL", "accessories"]), n19 = Object.assign({}, s40);
      return t16 && (n19.imageURL = t16.href), o26 && (n19.accessories = i25(o26)), n19;
    });
  } catch (r19) {
    throw new Error("Error serializing cart items");
  }
};
function n18(r19) {
  if (!Array.isArray(r19) || 0 === r19.length) throw new Error("cartItems must be a non-empty array");
  for (const e22 of r19) c43(e22), a33(e22.accessories);
}
function a33(r19) {
  if (null != r19) {
    if (!Array.isArray(r19) || 0 === r19.length) throw new Error("CartItem.accessories must be a non-empty array");
    for (const e22 of r19) {
      if (e22.accessories) throw new Error("Item in CartItem.accessories cannot have accessories");
      c43(e22);
    }
  }
}
function c43(r19) {
  if (!r19.id) throw new Error("cartItem.id must not be empty");
  if (!r19.name) throw new Error("cartItem.name must not be empty");
  u52(r19.price), f46(r19.quantity);
}
function m56(r19) {
  if (null != r19) {
    if (!r19) throw new Error("id must not be empty");
    if (false === e7(r19)) throw new Error("id must be a valid UUID");
  }
}
function u52(r19) {
  if ("number" != typeof r19 || r19 < 0) throw new Error(`price ${r19} must be a number not less than 0`);
  if (parseFloat(r19.toFixed(3)) !== r19) throw new Error(`price ${r19} must have at most 3 decimal places`);
}
function f46(r19) {
  if ("number" != typeof r19 || r19 <= 0 || parseInt(r19.toString()) !== r19) throw new Error(`quantity ${r19} must be an integer greater than 0`);
}
function p55(r19) {
  if (!Object.values(f45).includes(r19)) throw new Error(`cartStatus ${r19} is not valid`);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/marketplace.js
var l45 = "v2";
var u53 = { majorVersion: 1, minorVersion: 1 };
var p56;
var f45;
function I13() {
  if (p4(g3, a2.content, a2.task), !h29()) throw l2;
  return P3(s6(l45, "marketplace.getCart"), "marketplace.getCart", u53).then(o25);
}
function v24(o26) {
  if (p4(g3, a2.content, a2.task), !h29()) throw l2;
  if (!o26) throw new Error("addOrUpdateCartItemsParams must be provided");
  return m56(null == o26 ? void 0 : o26.cartId), n18(null == o26 ? void 0 : o26.cartItems), P3(s6(l45, "marketplace.addOrUpdateCartItems"), "marketplace.addOrUpdateCartItems", Object.assign(Object.assign({}, o26), { cartItems: i25(o26.cartItems), cartVersion: u53 })).then(o25);
}
function C18(n19) {
  if (p4(g3, a2.content, a2.task), !h29()) throw l2;
  if (!n19) throw new Error("removeCartItemsParams must be provided");
  if (m56(null == n19 ? void 0 : n19.cartId), !Array.isArray(null == n19 ? void 0 : n19.cartItemIds) || 0 === (null == n19 ? void 0 : n19.cartItemIds.length)) throw new Error("cartItemIds must be a non-empty array");
  return P3(s6(l45, "marketplace.removeCartItems"), "marketplace.removeCartItems", Object.assign(Object.assign({}, n19), { cartVersion: u53 })).then(o25);
}
function k12(n19) {
  if (p4(g3, a2.content, a2.task), !h29()) throw l2;
  if (!n19) throw new Error("updateCartStatusParams must be provided");
  return m56(null == n19 ? void 0 : n19.cartId), p55(null == n19 ? void 0 : n19.cartStatus), P3(s6(l45, "marketplace.updateCartStatus"), "marketplace.updateCartStatus", Object.assign(Object.assign({}, n19), { cartVersion: u53 })).then(o25);
}
function h29() {
  return !(!p4(g3) || !g3.supports.marketplace);
}
!(function(t16) {
  t16.TACAdminUser = "TACAdminUser", t16.TeamsAdminUser = "TeamsAdminUser", t16.TeamsEndUser = "TeamsEndUser";
})(p56 || (p56 = {})), (function(t16) {
  t16.Open = "Open", t16.Processing = "Processing", t16.Processed = "Processed", t16.Closed = "Closed", t16.Error = "Error";
})(f45 || (f45 = {}));

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/mouseRelay.js
var mouseRelay_exports = {};
__export(mouseRelay_exports, {
  disableMouseRelayCapability: () => d37,
  enableMouseRelayCapability: () => p57,
  isSupported: () => l46
});
var u54 = class {
  constructor(t16) {
    this.direction = t16;
  }
  serialize() {
    return { direction: this.direction };
  }
};
function s39(t16) {
  return 3 === t16 ? "back" : 4 === t16 ? "forward" : void 0;
}
function m57(t16) {
  void 0 !== s39(t16.button) && (t16.preventDefault(), t16.stopImmediatePropagation());
}
function a34(t16) {
  const o26 = s39(t16.button);
  o26 && (t16.preventDefault(), t16.stopImmediatePropagation(), U3("mouseRelay.navigateHistory", [new u54(o26)], s6("v2", "mouseRelay.navigateHistory")));
}
var c44 = false;
function p57() {
  return n(this, void 0, void 0, function* () {
    if (!l46()) throw l2;
    c44 || (document.addEventListener("mousedown", m57, { capture: true }), document.addEventListener("mouseup", a34, { capture: true }), document.addEventListener("auxclick", m57, { capture: true })), c44 = true;
  });
}
function d37() {
  if (!l46()) throw l2;
  c44 = false, document.removeEventListener("mousedown", m57, { capture: true }), document.removeEventListener("mouseup", a34, { capture: true }), document.removeEventListener("auxclick", m57, { capture: true });
}
function l46() {
  return !(!p4(g3) || !g3.supports.mouseRelay);
}

// node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/shortcutRelay.js
var shortcutRelay_exports = {};
__export(shortcutRelay_exports, {
  DISABLE_SHORTCUT_FORWARDING_ATTRIBUTE: () => C19,
  enableShortcutRelayCapability: () => S16,
  isSupported: () => k13,
  resetIsShortcutRelayCapabilityEnabled: () => K4,
  setOverridableShortcutHandler: () => w21
});
var h30 = class {
  constructor(t16) {
    this.event = t16;
  }
  serialize() {
    return { altKey: this.event.altKey, bubbles: this.event.bubbles, cancelBubble: this.event.cancelBubble, charCode: this.event.charCode, code: this.event.code, composed: this.event.composed, ctrlKey: this.event.ctrlKey, defaultPrevented: this.event.defaultPrevented, detail: this.event.detail, eventPhase: this.event.eventPhase, isComposing: this.event.isComposing, isTrusted: this.event.isTrusted, key: this.event.key, keyCode: this.event.keyCode, location: this.event.location, metaKey: this.event.metaKey, repeat: this.event.repeat, returnValue: this.event.returnValue, shiftKey: this.event.shiftKey, timeStamp: this.event.timeStamp, type: this.event.type, which: this.event.which };
  }
};
function u55(t16) {
  return t16.toLowerCase().split("+").sort().join("+");
}
function l47(t16, e22) {
  if ((function(t17) {
    return t17.ctrlKey || t17.shiftKey || t17.altKey || t17.metaKey || !!t17.key && "escape" === t17.key.toLowerCase() || !!t17.key && /^F\d+$/i.test(t17.key);
  })(e22)) {
    const r19 = (function(t17) {
      return [t17.ctrlKey && "ctrl", t17.shiftKey && "shift", t17.altKey && "alt", t17.metaKey && "meta", t17.key.toLowerCase()].filter(Boolean).sort().join("+");
    })(e22);
    if (t16.has(r19)) return { matchedShortcut: r19, isOverridable: y16.has(r19) };
  }
  return { matchedShortcut: void 0, isOverridable: false };
}
function d38(t16) {
  f47.clear(), t16.shortcuts.forEach((t17) => {
    f47.add(u55(t17));
  }), y16.clear(), t16.overridableShortcuts.forEach((t17) => {
    y16.add(u55(t17));
  });
}
var v25 = class extends e16 {
  validate(t16) {
    return t16 && Array.isArray(t16.shortcuts) && Array.isArray(t16.overridableShortcuts);
  }
  deserialize(t16) {
    return t16;
  }
};
function m58(t16) {
  if (t16.target.closest(`[${C19}]`)) return;
  const { matchedShortcut: r19, isOverridable: o26 } = l47(f47, t16);
  if (!r19) return;
  if (o26 && p58) {
    if (p58(t16, { matchedShortcut: r19 })) return;
  }
  const n19 = new h30(t16);
  U3("shortcutRelay.forwardShortcutEvent", [n19], s6("v2", "shortcutRelay.forwardShortcutEvent")), t16.preventDefault(), t16.stopImmediatePropagation();
}
var y16 = /* @__PURE__ */ new Set();
var f47 = /* @__PURE__ */ new Set();
var p58;
var b20 = false;
function w21(t16) {
  if (!k13()) throw l2;
  const e22 = p58;
  return p58 = t16, e22;
}
function K4() {
  if (!k13()) throw l2;
  b20 = false, f47.clear(), y16.clear(), p58 = void 0, document.removeEventListener("keydown", m58, { capture: true });
}
function S16() {
  return n(this, void 0, void 0, function* () {
    if (!k13()) throw l2;
    var t16;
    d38(yield N4("shortcutRelay.getHostShortcuts", [], new v25(), s6("v2", "shortcutRelay.getHostShortcuts"))), b20 || document.addEventListener("keydown", m58, { capture: true }), b20 = true, t16 = (t17) => {
      d38(t17);
    }, p8(s6("v2", "shortcutRelay.hostShortcutChanged"), "shortcutRelay.hostShortcutChanged", t16);
  });
}
function k13() {
  return !(!p4(g3) || !g3.supports.shortcutRelay);
}
var C19 = "data-disable-shortcuts-forwarding";
export {
  n4 as ActionObjectType,
  i9 as AppId,
  m2 as ChannelType,
  p37 as ChildAppWindow,
  r3 as DialogDimension,
  N2 as EduType,
  r15 as EmailAddress,
  E2 as ErrorCode,
  t4 as FileOpenPreference,
  a2 as FrameContexts,
  o4 as HostClientType,
  i5 as HostName,
  l35 as LiveShareHost,
  e as NotificationTypes,
  m33 as ParentAppWindow,
  n5 as RenderingSurfaces,
  e5 as SecondaryM365ContentIdName,
  r3 as TaskModuleDimension,
  s2 as TeamType,
  n6 as UUID,
  x6 as UserAuthenticationState,
  i as UserSettingTypes,
  t5 as UserTeamRole,
  i10 as ValidatedSafeString,
  t as ViewerActionTypes,
  i2 as activateChildProxyingCommunication,
  app_exports as app,
  appEntity_exports as appEntity,
  appInitialization_exports as appInitialization,
  appInstallDialog_exports as appInstallDialog,
  appPerformanceMetrics_exports as appPerformanceMetrics,
  authentication_exports as authentication,
  barCode_exports as barCode,
  calendar_exports as calendar,
  call_exports as call,
  chat_exports as chat,
  clipboard_exports as clipboard,
  contextualSearch_exports as contextualSearch,
  conversations_exports as conversations,
  copilot_exports as copilot,
  dialog_exports as dialog,
  k9 as enablePrintCapability,
  M6 as executeDeepLink,
  externalAppAuthentication_exports as externalAppAuthentication,
  externalAppAuthenticationForCEA_exports as externalAppAuthenticationForCEA,
  externalAppCardActions_exports as externalAppCardActions,
  externalAppCardActionsForCEA_exports as externalAppCardActionsForCEA,
  externalAppCardActionsForDA_exports as externalAppCardActionsForDA,
  externalAppCommands_exports as externalAppCommands,
  files_exports as files,
  geoLocation_exports as geoLocation,
  r16 as getAdaptiveCardSchemaVersion,
  E17 as getContext,
  c as getCurrentFeatureFlagsState,
  D8 as getMruTabInstances,
  z8 as getTabInstances,
  hostEntity_exports as hostEntity,
  B5 as initialize,
  q5 as initializeWithFrameContext,
  liveShareHost_exports as liveShare,
  location_exports as location,
  logs_exports as logs,
  mail_exports as mail,
  marketplace_exports as marketplace,
  media_exports as media,
  meeting_exports as meeting,
  meetingRoom_exports as meetingRoom,
  menus_exports as menus,
  messageChannels_exports as messageChannels,
  monetization_exports as monetization,
  mouseRelay_exports as mouseRelay,
  f28 as navigateBack,
  u36 as navigateCrossDomain,
  l34 as navigateToTab,
  nestedAppAuth_exports as nestedAppAuth,
  nestedAppAuthBridge_exports as nestedAppAuthBridge,
  notifications_exports as notifications,
  h13 as openFilePreview,
  otherAppStateChange_exports as otherAppStateChange,
  e2 as overwriteFeatureFlagsState,
  pages_exports as pages,
  people_exports as people,
  plugins_exports as plugins,
  v18 as print,
  profile_exports as profile,
  I10 as registerAppButtonClickHandler,
  S13 as registerAppButtonHoverEnterHandler,
  y13 as registerAppButtonHoverLeaveHandler,
  A14 as registerBackButtonHandler,
  T13 as registerBeforeUnloadHandler,
  W5 as registerChangeSettingsHandler,
  u20 as registerCustomHandler,
  U7 as registerFocusEnterHandler,
  P13 as registerFullScreenHandler,
  F11 as registerOnLoadHandler,
  L7 as registerOnThemeChangeHandler,
  f15 as registerUserSettingsChangeHandler,
  remoteCamera_exports as remoteCamera,
  g16 as returnFocus,
  search_exports as search,
  secondaryBrowser_exports as secondaryBrowser,
  d13 as sendCustomEvent,
  c12 as sendCustomMessage,
  r as setFeatureFlagsState,
  V7 as setFrameContext,
  settings_exports as settings,
  O13 as shareDeepLink,
  sharing_exports as sharing,
  shortcutRelay_exports as shortcutRelay,
  sidePanelInterfaces_exports as sidePanelInterfaces,
  stageView_exports as stageView,
  store_exports as store,
  tasks_exports as tasks,
  teams_exports as teams,
  teamsAPIs_exports as teamsCore,
  thirdPartyCloudStorage_exports as thirdPartyCloudStorage,
  p20 as uploadCustomApp,
  o12 as version,
  videoEffects_exports as videoEffects,
  videoEffectsEx_exports as videoEffectsEx,
  visualMedia_exports as visualMedia,
  webStorage_exports as webStorage,
  widgetHosting_exports as widgetHosting
};
//# debugId=f13f503f-cc88-5ff3-b2cd-dfecde5d194c
//# sourceMappingURL=src-BNAR4FSM.js.map
