import {
  addDays,
  toDate
} from "./chunk-Y3IQVLE7.js";

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
//# sourceMappingURL=chunk-XMLMKJZA.js.map
