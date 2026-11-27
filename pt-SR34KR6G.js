import "./chunk-RQBZITXC.js";

// node_modules/@angular/common/locales/pt.js
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
  if (i === Math.floor(i) && (i >= 0 && i <= 1))
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var pt_default = ["pt", [["AM", "PM"]], u, [["D", "S", "T", "Q", "Q", "S", "S"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "s\xE1b."], ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "s\xE1b."]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]], u, [["a.C.", "d.C."], u, ["antes de Cristo", "depois de Cristo"]], 0, [6, 0], ["dd/MM/y", "d 'de' MMM 'de' y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "BRL", "R$", "Real brasileiro", { "AUD": ["AU$", "$"], "BYN": [u, "\u0440."], "JPY": ["JP\xA5", "\xA5"], "PHP": [u, "\u20B1"], "PTE": ["Esc."], "RON": [u, "L"], "SYP": [u, "S\xA3"], "THB": ["\u0E3F"], "TWD": ["NT$"], "USD": ["US$", "$"] }, "ltr", plural];
export {
  pt_default as default
};
//# debugId=e1b530ae-9714-5997-bdf8-cd2e96f528ae
//# sourceMappingURL=pt-SR34KR6G.js.map
