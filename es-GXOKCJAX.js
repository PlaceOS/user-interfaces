import "./chunk-KUGYOAP2.js";

// node_modules/@angular/common/locales/es.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (n === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var es_default = ["es", [["a.\u202Fm.", "p.\u202Fm."], u, ["a.\xA0m.", "p.\xA0m."]], u, [["D", "L", "M", "X", "J", "V", "S"], ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"], ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]], u, [["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]], u, [["a. C.", "d. C."], u, ["antes de Cristo", "despu\xE9s de Cristo"]], 1, [6, 0], ["d/M/yy", "d MMM y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss (zzzz)"], ["{1}, {0}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "AUD": [u, "$"], "BRL": [u, "R$"], "BYN": [u, "\u0440."], "CAD": [u, "$"], "CNY": [u, "\xA5"], "EGP": [u, "EGP"], "ESP": ["\u20A7"], "GBP": [u, "\xA3"], "HKD": [u, "$"], "ILS": [u, "\u20AA"], "INR": [u, "\u20B9"], "JPY": [u, "\xA5"], "KRW": [u, "\u20A9"], "MXN": [u, "$"], "NZD": [u, "$"], "PHP": [u, "\u20B1"], "RON": [u, "L"], "THB": ["\u0E3F"], "TWD": [u, "NT$"], "USD": ["US$", "$"], "XAF": [], "XCD": [u, "$"], "XOF": [] }, "ltr", plural];
export {
  es_default as default
};
//# sourceMappingURL=es-GXOKCJAX.js.map
