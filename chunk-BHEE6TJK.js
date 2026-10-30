import {
  addDays,
  toDate
} from "./chunk-UOORUMQ7.js";

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

export {
  subDays,
  setHours
};
//# debugId=c04398d5-fe14-5ad6-921a-262ee1f371db
//# sourceMappingURL=chunk-BHEE6TJK.js.map
