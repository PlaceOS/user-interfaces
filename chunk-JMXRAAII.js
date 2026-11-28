import {
  endOfDay,
  format,
  formatInTimeZone,
  fromZonedTime,
  startOfDay
} from "./chunk-PH2SWG67.js";

// apps/concierge/src/app/ui/building-time.ts
var DAY_START_STEP_MS = 15 * 60 * 1e3;
var DAY_START_MAX_STEPS = 8;
function addCalendarDays(day, days) {
  const [year, month, date] = day.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, date + days)).toISOString().slice(0, 10);
}
function zonedDayStart(day, timezone) {
  const dayOf = (time2) => formatInTimeZone(time2, timezone, "yyyy-MM-dd");
  let time = fromZonedTime(`${day}T00:00:00`, timezone).valueOf();
  for (let step = 0; step < DAY_START_MAX_STEPS && dayOf(time) < day; step++) {
    time += DAY_START_STEP_MS;
  }
  for (let step = 0; step < DAY_START_MAX_STEPS && dayOf(time - DAY_START_STEP_MS) === day; step++) {
    time -= DAY_START_STEP_MS;
  }
  return new Date(time);
}
function buildingDayStart(date, timezone) {
  if (!timezone)
    return startOfDay(date);
  return zonedDayStart(format(date, "yyyy-MM-dd"), timezone);
}
function buildingDayEnd(date, timezone) {
  if (!timezone)
    return endOfDay(date);
  const next_day = addCalendarDays(format(date, "yyyy-MM-dd"), 1);
  return new Date(zonedDayStart(next_day, timezone).valueOf() - 1);
}

export {
  buildingDayStart,
  buildingDayEnd
};
//# debugId=74e556f1-aa4a-5732-83a0-c53acc8eff11
//# sourceMappingURL=chunk-JMXRAAII.js.map
