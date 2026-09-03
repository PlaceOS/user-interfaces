import {
  normalizeDates,
  toDate
} from "./chunk-MG5PZBML.js";

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

export {
  startOfMonth,
  isSameMonth
};
//# debugId=75050052-b34f-5cf3-9c33-a1d227b316c6
//# sourceMappingURL=chunk-5F3LOO42.js.map
