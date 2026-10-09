import {
  addDays,
  toDate
} from "./chunk-643LYWPU.js";

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

export {
  subDays,
  setHours
};
//# debugId=e68db94f-fb05-5ea1-a95c-d359bca11af8
//# sourceMappingURL=chunk-RUQKCW72.js.map
