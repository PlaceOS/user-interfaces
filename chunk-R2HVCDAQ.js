import {
  addDays,
  differenceInCalendarDays,
  isSameDay,
  isValid,
  normalizeDates,
  toDate
} from "./chunk-JYQPCPCB.js";

// node_modules/date-fns/isWeekend.js
function isWeekend(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 || day === 6;
}

// node_modules/date-fns/differenceInBusinessDays.js
function differenceInBusinessDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  if (!isValid(laterDate_) || !isValid(earlierDate_)) return NaN;
  const diff = differenceInCalendarDays(laterDate_, earlierDate_);
  const sign = diff < 0 ? -1 : 1;
  const weeks = Math.trunc(diff / 7);
  let result = weeks * 5;
  let movingDate = addDays(earlierDate_, weeks * 7);
  while (!isSameDay(laterDate_, movingDate)) {
    result += isWeekend(movingDate, options) ? 0 : sign;
    movingDate = addDays(movingDate, sign);
  }
  return result === 0 ? 0 : result;
}

export {
  differenceInBusinessDays
};
//# debugId=9e56563b-7149-52a4-8d8f-48a5a38a773b
//# sourceMappingURL=chunk-R2HVCDAQ.js.map
