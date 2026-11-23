import {
  ApplicationRef,
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  Service,
  SkipSelf,
  Subject,
  Subscription,
  Version,
  afterNextRender,
  booleanAttribute,
  computed,
  effect,
  first,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  lastValueFrom,
  map,
  setClassMetadata,
  signal,
  untracked,
  ɵɵControlFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-Y6KAMZVN.js";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var minutesInMonth = 43200;
var minutesInDay = 1440;
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

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize2 = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize2);
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

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
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
  const number2 = Number(dirtyNumber);
  const rem100 = number2 % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number2 + "st";
      case 2:
        return number2 + "nd";
      case 3:
        return number2 + "rd";
    }
  }
  return number2 + "th";
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
  return (string2, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string2.match(matchPattern);
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
    const rest = string2.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object2, predicate) {
  for (const key in object2) {
    if (Object.prototype.hasOwnProperty.call(object2, key) && predicate(object2[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array2, predicate) {
  for (let key = 0; key < array2.length; key++) {
    if (predicate(array2[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string2, options = {}) => {
    const matchResult = string2.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string2.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string2.slice(matchedString.length);
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

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
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

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
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

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
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
function addLeadingZeros(number2, targetLength) {
  const sign = number2 < 0 ? "-" : "";
  const output = Math.abs(number2).toString().padStart(targetLength, "0");
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

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
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

// node_modules/@placeos/ts-client/dist/core/pagination.js
var LINK_HEADER_LENGTH_MAX = 8192;
function pageInfo(headers) {
  return {
    total: parseCount(headers.get("x-total-count")),
    next_offset: parseNextOffset(headers.get("link"))
  };
}
function parseCount(text) {
  if (text === null)
    return null;
  const count = Number(text);
  if (Number.isSafeInteger(count) && count >= 0)
    return count;
  return null;
}
function parseNextOffset(header) {
  if (header === null)
    return null;
  if (header.length > LINK_HEADER_LENGTH_MAX)
    return null;
  for (const match2 of header.matchAll(/<([^>]*)>\s*;\s*rel="?next"?\s*(?:,|$)/g)) {
    const target = match2[1] ?? "";
    if (!URL.canParse(target, "http://base.invalid"))
      return null;
    const offset = new URL(target, "http://base.invalid").searchParams.get("offset");
    return parseCount(offset);
  }
  return null;
}

// node_modules/@placeos/ts-client/dist/compat/result.js
var CallFailed = class extends Error {
  error;
  status;
  constructor(error) {
    super(describe(error));
    this.name = "CallFailed";
    this.error = error;
    this.status = error.kind === "http" || error.kind === "response_invalid" ? error.status : null;
  }
};
function orThrow(result) {
  if (!result.ok)
    throw new CallFailed(result.error);
  return result.value.data;
}
function orThrowPage(result) {
  if (!result.ok)
    throw new CallFailed(result.error);
  const reply = result.value;
  const page = pageInfo(reply.headers);
  const next = reply.next === void 0 || page.next_offset === null ? null : () => reply.next?.()?.then(orThrowPage) ?? null;
  return { data: reply.data, total: page.total ?? 0, next_offset: page.next_offset, next };
}
function describe(error) {
  switch (error.kind) {
    case "http":
      return `HTTP ${error.status}${error.message === null ? "" : `: ${error.message}`}`;
    case "response_invalid":
      return `the response is not valid at ${error.path}: expected ${error.expected}`;
    case "timeout":
      return `no response in ${error.timeout_ms} ms`;
    case "network":
      return `network error: ${error.message}`;
    case "response_too_large":
      return `the response is larger than ${error.bytes_max} bytes`;
    case "auth_missing":
      return "no token or credential";
    case "aborted":
      return "aborted";
  }
}

// node_modules/@placeos/ts-client/dist/compat/enums.js
var MediaAnimation = {
  Default: 0,
  Cut: 1,
  CrossFade: 2,
  SlideTop: 3,
  SlideLeft: 4,
  SlideRight: 5,
  SlideBottom: 6
};

// node_modules/@placeos/ts-client/dist/core/assert.js
function assert(condition, message2) {
  if (!condition)
    throw new Error(`Assertion failed: ${message2}`);
}
function unreachable(value) {
  throw new Error(`Unreachable: ${JSON.stringify(value)}`);
}

// node_modules/@placeos/ts-client/dist/core/log.js
function scopedLog(scope, options) {
  const sink = options.sink;
  const write = (level, args) => {
    if (sink === null)
      return;
    try {
      sink({ scope, level, args });
    } catch {
    }
  };
  return {
    error: (...data) => write("error", data),
    warn: (...data) => write("warn", data),
    info: (...data) => write("info", data),
    debug: (...data) => write("debug", data),
    print: (...data) => write("print", data),
    group: (...label) => write("group", label),
    groupEnd: () => write("group_end", [])
  };
}

// node_modules/@placeos/ts-client/dist/compat/log.js
var SCOPE_NAMES = {
  http: "HTTP",
  auth: "Auth",
  realtime: "WS",
  mock: "HTTP(M)"
};
var COLORS = ["color: #0288D1", "color: #009688", "color: default"];
var METHODS = {
  error: "error",
  warn: "warn",
  info: "info",
  debug: "debug",
  print: "log",
  group: "group",
  group_end: "groupEnd"
};
function createConsoleLog(options = {}) {
  const colors = options.colors ?? true;
  return (entry) => {
    if (!Boolean(Reflect.get(globalThis, "debug")))
      return;
    const method = METHODS[entry.level];
    if (method === "groupEnd") {
      console.groupEnd();
      return;
    }
    const scope = SCOPE_NAMES[entry.scope];
    const [first2, ...rest] = entry.args;
    const message2 = typeof first2 === "string" ? first2 : null;
    const literal2 = message2 !== null && !message2.includes("%");
    const text = message2 === null ? "" : literal2 ? ` ${message2}` : " %s";
    const format3 = colors ? `%c[PlaceOS]%c[${scope}]%c${text}` : `[PlaceOS][${scope}]${text}`;
    const substituted = message2 !== null && !literal2 ? [message2] : [];
    const values = message2 === null ? entry.args : rest;
    console[method](format3, ...colors ? COLORS : [], ...substituted, ...values);
  };
}
var consoleLog = createConsoleLog({ colors: true });

// node_modules/@placeos/ts-client/dist/compat/http-mock.js
var MOCK_ENDPOINTS_MAX = 1e4;
var DELAY_MS_DEFAULT = 300;
var DELAY_VARIANCE_MS_DEFAULT = 100;
var DELAY_MS_MIN = 200;
var handlers = /* @__PURE__ */ new Map();
var log = scopedLog("mock", { sink: consoleLog });
var notFound = (method, url) => {
  log.warn(`404 ${method} ${url}`);
  return Promise.reject(Object.assign(new Error(`Mock endpoint not found: ${method} ${url}`), { status: 404 }));
};
function registerMockEndpoint(options) {
  const key = handlerKey(options.method, options.path);
  assert(handlers.has(key) || handlers.size < MOCK_ENDPOINTS_MAX, "fewer mock endpoints");
  const path_parts = pathParts(options.path);
  const path_structure = path_parts.map((part) => part.startsWith(":") ? part.slice(1) : "");
  const handler = __spreadProps(__spreadValues({}, options), { path_parts, path_structure });
  handlers.set(key, handler);
  log.debug(`+ ${options.method} ${options.path}`);
}
var mockFetch = async (url, init) => {
  const method = verb(init.method);
  const handler = findHandler(method, url);
  if (handler === null) {
    const fallback = notFound(method, url);
    if (fallback === null)
      return fetch(url, init);
    return fallback.then(() => errorResponse(404, "not found"), (error) => thrownResponse(error));
  }
  const request2 = makeRequest(url, handler, method, init.body);
  log.debug(`MATCHED ${method} ${handler.path}`, { url });
  let body;
  let headers;
  try {
    body = await (handler.callback === void 0 ? handler.metadata : handler.callback(request2));
    const raw = typeof handler.headers === "function" ? handler.headers(request2) : handler.headers;
    headers = lowerKeys(raw ?? {});
  } catch (error) {
    return thrownResponse(error);
  }
  await delay(handler, init.signal ?? null);
  if (body === void 0)
    return new Response(null, { status: 204, headers });
  const content_type = headers["content-type"] ?? "application/json";
  const text = typeof body === "string" && !content_type.includes("json") ? body : JSON.stringify(body);
  return new Response(text, {
    status: 200,
    headers: __spreadValues({ "content-type": content_type }, headers)
  });
};
function handlerKey(method, path) {
  return `${method}|${path}`;
}
function pathParts(url) {
  const path = url.replace(/^https?:\/\/[^/]*/, "").split("?")[0] ?? "";
  return path.replace(/^\//, "").split("/");
}
function verb(method) {
  const upper = (method ?? "GET").toUpperCase();
  assert(upper === "GET" || upper === "POST" || upper === "PUT" || upper === "PATCH" || upper === "DELETE", `the mock supports the method ${upper}`);
  return upper;
}
function findHandler(method, url) {
  const parts = pathParts(url);
  for (const handler of handlers.values()) {
    if (handler.method !== method || handler.path_parts.length !== parts.length)
      continue;
    const matches = handler.path_structure.every((parameter, index) => parameter !== "" || handler.path_parts[index] === parts[index]);
    if (matches)
      return handler;
  }
  return null;
}
function makeRequest(url, handler, method, body) {
  const parts = pathParts(url);
  const route_params = {};
  for (const [index, name] of handler.path_structure.entries()) {
    if (name !== "")
      route_params[name] = decodeURIComponent(parts[index] ?? "");
  }
  const query_params = {};
  const query13 = url.split("?")[1] ?? "";
  for (const [key, value] of new URLSearchParams(query13)) {
    if (value !== "")
      query_params[key] = value;
  }
  return {
    url,
    path: handler.path,
    method,
    metadata: handler.metadata,
    route_params,
    query_params,
    body: typeof body === "string" ? parseJson(body) : void 0
  };
}
function parseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
function lowerKeys(headers) {
  const lower = {};
  for (const [key, value] of Object.entries(headers))
    lower[key.toLowerCase()] = value;
  return lower;
}
function thrownResponse(error) {
  const status = typeof error === "object" && error !== null ? Reflect.get(error, "status") : void 0;
  if (typeof status !== "number" || status < 400 || status > 599)
    throw error;
  return errorResponse(status, error instanceof Error ? error.message : String(status));
}
function errorResponse(status, message2) {
  return new Response(JSON.stringify({ error: message2 }), {
    status,
    headers: { "content-type": "application/json" }
  });
}
function delay(handler, signal2) {
  const variance = handler.delay_variance ?? DELAY_VARIANCE_MS_DEFAULT;
  const base = handler.delay ?? DELAY_MS_DEFAULT;
  const ms = Math.max(DELAY_MS_MIN, Math.floor(Math.random() * variance - variance / 2) + base);
  return new Promise((resolve, reject) => {
    const aborted = () => {
      clearTimeout(timer);
      reject(new DOMException("The request was aborted.", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal2?.removeEventListener("abort", aborted);
      resolve();
    }, ms);
    if (signal2?.aborted === true)
      aborted();
    else
      signal2?.addEventListener("abort", aborted, { once: true });
  });
}

// node_modules/@placeos/ts-client/dist/core/schema.js
var SCHEMA_DEPTH_MAX = 64;
var JSON_DEPTH_MAX = 256;
var JSON_NODES_MAX = 1e6;
var INTEGER_RANGES = {
  Int32: { min: -(2 ** 31), max: 2 ** 31 - 1 },
  UInt32: { min: 0, max: 2 ** 32 - 1 },
  Int64: { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }
};
function string() {
  return { node: { kind: "string" } };
}
function literal(values) {
  assert(values.length > 0, "a literal schema has at least one value");
  return { node: { kind: "literal", values: new Set(values) } };
}
function integer(format3 = "Int64") {
  const range = INTEGER_RANGES[format3];
  return { node: { kind: "integer", min: range.min, max: range.max } };
}
function number() {
  return { node: { kind: "number" } };
}
function boolean() {
  return { node: { kind: "boolean" } };
}
function json() {
  return { node: { kind: "json" } };
}
function nullable(inner) {
  return { node: { kind: "nullable", inner: inner.node } };
}
function array(items) {
  return { node: { kind: "array", items: items.node } };
}
function tuple(items) {
  assert(items.length > 0, "a tuple has at least one item");
  return { node: { kind: "tuple", items: items.map((item) => item.node) } };
}
function record(values) {
  return { node: { kind: "record", values: values.node } };
}
function object(fields, required = []) {
  return { node: objectNode(fields, new Set(required), /* @__PURE__ */ new Set()) };
}
function parameters(fields, required = []) {
  const required_keys = new Set(required);
  return { node: objectNode(fields, required_keys, required_keys) };
}
function objectNode(fields, required_in_response, required_in_request) {
  const list = [];
  for (const [key, schema] of Object.entries(fields)) {
    assert(key !== "__proto__", "a field is not named __proto__");
    list.push({
      key,
      node: schema.node,
      required_in_response: required_in_response.has(key),
      required_in_request: required_in_request.has(key)
    });
  }
  for (const key of [...required_in_response, ...required_in_request]) {
    assert(Object.hasOwn(fields, key), `the required key "${key}" is a field`);
  }
  return { kind: "object", fields: list, keys: new Set(Object.keys(fields)) };
}
function union(variants) {
  assert(variants.length > 1, "a union has two variants or more");
  return { node: { kind: "union", variants: variants.map((variant) => variant.node) } };
}
function parseResponse(schema, value, options = {}) {
  const failure2 = { expected: "", segments: [] };
  const direction = options.missing_fields === "zero" ? "response_zero" : "response";
  const parsed = walk(schema.node, value, direction, failure2, 0);
  if (parsed === FAIL)
    return { ok: false, error: describeFailure(failure2) };
  return { ok: true, value: parsed };
}
function checkRequest(schema, value) {
  const failure2 = { expected: "", segments: [] };
  const checked = walk(schema.node, value, "request", failure2, 0);
  if (checked === FAIL)
    return { ok: false, error: describeFailure(failure2) };
  return { ok: true, value: checked };
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var FAIL = /* @__PURE__ */ Symbol("schema-fail");
function walk(node, value, direction, failure2, depth) {
  assert(depth < SCHEMA_DEPTH_MAX, "the schema depth is less than SCHEMA_DEPTH_MAX");
  switch (node.kind) {
    case "string":
      if (typeof value === "string")
        return value;
      return fail(failure2, "string");
    case "literal":
      if (typeof value === "string" || typeof value === "number") {
        if (node.values.has(value))
          return value;
      }
      return fail(failure2, `one of ${[...node.values].map(String).join(", ")}`);
    case "integer":
      if (typeof value === "number" && Number.isSafeInteger(value)) {
        if (value >= node.min && value <= node.max)
          return value;
      }
      return fail(failure2, `integer from ${node.min} to ${node.max}`);
    case "number":
      if (typeof value === "number" && Number.isFinite(value))
        return value;
      return fail(failure2, "finite number");
    case "boolean":
      if (typeof value === "boolean")
        return value;
      return fail(failure2, "boolean");
    case "json":
      if (!isJsonValue(value))
        return fail(failure2, "JSON value");
      return value;
    case "nullable":
      if (value === null)
        return null;
      return walk(node.inner, value, direction, failure2, depth + 1);
    case "array": {
      if (!Array.isArray(value))
        return fail(failure2, "array");
      const items = value;
      const output = [];
      for (let index = 0; index < items.length; index += 1) {
        const item = walk(node.items, items[index], direction, failure2, depth + 1);
        if (item === FAIL) {
          failure2.segments.push(`[${index}]`);
          return FAIL;
        }
        output.push(item);
      }
      return output;
    }
    case "tuple": {
      if (!Array.isArray(value))
        return fail(failure2, "array");
      const items = value;
      if (items.length !== node.items.length) {
        return fail(failure2, `array of length ${node.items.length}`);
      }
      const output = [];
      for (let index = 0; index < node.items.length; index += 1) {
        const item_node = node.items[index];
        assert(item_node !== void 0, "the index is in the tuple");
        const item = walk(item_node, items[index], direction, failure2, depth + 1);
        if (item === FAIL) {
          failure2.segments.push(`[${index}]`);
          return FAIL;
        }
        output.push(item);
      }
      return output;
    }
    case "record": {
      if (!isRecord(value))
        return fail(failure2, "object");
      const entries = [];
      for (const key of Object.keys(value)) {
        const entry_value = value[key];
        if (entry_value === void 0) {
          assert(direction === "request", "JSON has no undefined values");
          continue;
        }
        const entry = walk(node.values, entry_value, direction, failure2, depth + 1);
        if (entry === FAIL) {
          failure2.segments.push(`.${key}`);
          return FAIL;
        }
        entries.push([key, entry]);
      }
      return Object.fromEntries(entries);
    }
    case "object": {
      if (!isRecord(value))
        return fail(failure2, "object");
      const output = {};
      for (const field of node.fields) {
        const field_value = Object.hasOwn(value, field.key) ? value[field.key] : void 0;
        if (field_value === void 0) {
          const required = direction === "request" ? field.required_in_request : field.required_in_response;
          if (required && direction === "response_zero") {
            output[field.key] = zeroValue(field.node, depth + 1);
            continue;
          }
          if (required) {
            failure2.segments.push(`.${field.key}`);
            return fail(failure2, "a value for the required field");
          }
          if (direction !== "request")
            output[field.key] = null;
          continue;
        }
        const parsed = walk(field.node, field_value, direction, failure2, depth + 1);
        if (parsed === FAIL) {
          failure2.segments.push(`.${field.key}`);
          return FAIL;
        }
        output[field.key] = parsed;
      }
      if (direction === "request") {
        for (const key of Object.keys(value)) {
          if (node.keys.has(key))
            continue;
          if (value[key] === void 0)
            continue;
          failure2.segments.push(`.${key}`);
          return fail(failure2, "no field with this name");
        }
      }
      return output;
    }
    case "union": {
      if (direction !== "response_zero") {
        for (const variant of node.variants) {
          const parsed = walk(variant, value, direction, failure2, depth + 1);
          if (parsed !== FAIL)
            return parsed;
          failure2.segments.length = 0;
        }
        return fail(failure2, "a match for one variant of the union");
      }
      let best = FAIL;
      let best_score = -1;
      for (const variant of node.variants) {
        const parsed = walk(variant, value, direction, failure2, depth + 1);
        failure2.segments.length = 0;
        if (parsed === FAIL)
          continue;
        const strict = walk(variant, value, "response", failure2, depth + 1) !== FAIL;
        failure2.segments.length = 0;
        const score = knownKeys(variant, value) * 2 + (strict ? 1 : 0);
        if (score > best_score) {
          best = parsed;
          best_score = score;
        }
      }
      if (best !== FAIL)
        return best;
      return fail(failure2, "a match for one variant of the union");
    }
    default:
      return unreachable(node);
  }
}
function knownKeys(node, value) {
  if (node.kind !== "object" || !isRecord(value))
    return 0;
  return Object.keys(value).filter((key) => node.keys.has(key)).length;
}
function zeroValue(node, depth) {
  assert(depth < SCHEMA_DEPTH_MAX, "the schema depth is less than SCHEMA_DEPTH_MAX");
  switch (node.kind) {
    case "string":
      return "";
    case "literal":
      return [...node.values][0] ?? null;
    case "integer":
      return Math.min(Math.max(0, node.min), node.max);
    case "number":
      return 0;
    case "boolean":
      return false;
    case "json":
    case "nullable":
      return null;
    case "array":
      return [];
    case "tuple":
      return node.items.map((item) => zeroValue(item, depth + 1));
    case "record":
      return {};
    case "object": {
      const output = {};
      for (const field of node.fields) {
        output[field.key] = field.required_in_response ? zeroValue(field.node, depth + 1) : null;
      }
      return output;
    }
    case "union": {
      const [first2] = node.variants;
      return first2 === void 0 ? null : zeroValue(first2, depth + 1);
    }
  }
}
function isJsonValue(value) {
  const stack = [{ value, depth: 0 }];
  for (let visited = 0; visited < JSON_NODES_MAX; visited += 1) {
    const top = stack.pop();
    if (top === void 0)
      return true;
    const current3 = top.value;
    if (current3 === null || typeof current3 === "string" || typeof current3 === "boolean") {
      continue;
    }
    if (typeof current3 === "number") {
      if (Number.isFinite(current3))
        continue;
      return false;
    }
    if (top.depth >= JSON_DEPTH_MAX)
      return false;
    if (Array.isArray(current3)) {
      const items = current3;
      if (visited + stack.length + items.length >= JSON_NODES_MAX)
        return false;
      for (const item of items)
        stack.push({ value: item, depth: top.depth + 1 });
      continue;
    }
    if (!isRecord(current3))
      return false;
    const prototype = Object.getPrototypeOf(current3);
    if (prototype !== Object.prototype && prototype !== null)
      return false;
    const keys = Object.keys(current3);
    if (visited + stack.length + keys.length >= JSON_NODES_MAX)
      return false;
    for (const key of keys)
      stack.push({ value: current3[key], depth: top.depth + 1 });
  }
  return false;
}
function fail(failure2, expected) {
  failure2.expected = expected;
  return FAIL;
}
function describeFailure(failure2) {
  return { path: `$${failure2.segments.reverse().join("")}`, expected: failure2.expected };
}

// node_modules/@placeos/ts-client/dist/core/client.js
var TIMEOUT_MS_DEFAULT = 3e4;
var RESPONSE_BYTES_MAX_DEFAULT = 64 * 1024 * 1024;
var RESPONSE_READS_MAX = 1 << 20;
var AUTH_ATTEMPTS_MAX = 2;
function createClient(config) {
  assert(!config.base_url.endsWith("/"), "the base_url has no trailing slash");
  const timeout_ms = config.timeout_ms ?? TIMEOUT_MS_DEFAULT;
  assertPositiveInteger(timeout_ms, "timeout_ms");
  const response_bytes_max = config.response_bytes_max ?? RESPONSE_BYTES_MAX_DEFAULT;
  assertPositiveInteger(response_bytes_max, "response_bytes_max");
  if (config.auth.kind === "api_key") {
    assert(config.auth.key.length > 0, "the API key is not empty");
  }
  const fetchFunction = config.fetch ?? ((url, init) => globalThis.fetch(url, init));
  return Object.freeze({
    base_url: config.base_url,
    auth: config.auth,
    headers: Object.freeze(__spreadValues({}, config.headers)),
    timeout_ms,
    response_bytes_max,
    fetch: fetchFunction,
    missing_fields: config.missing_fields ?? "error",
    mock: config.mock ?? null,
    log: config.log ?? null
  });
}
var configured_client = null;
function configure(config) {
  configured_client = createClient(config);
  return configured_client;
}
function operation(definition) {
  assert(definition.path.startsWith("/"), "the path starts with a slash");
  assert(/^(staff\.)?\w+\.\w+$/.test(definition.name), "the name is <namespace>.<function>");
  assert(definition.params.node.kind === "object", "the params schema is an object");
  const template_keys = [...definition.path.matchAll(/\{([^{}]+)\}/g)].map((match2) => match2[1]);
  assert(template_keys.join() === definition.path_keys.join(), `the path keys of ${definition.path} are in path_keys`);
  return definition;
}
async function call(operation2, input, options = {}) {
  const client = options.client ?? configured_client;
  assert(client !== null, "configure() ran before this call, or the options have a client");
  const result = await request(client, operation2, input, options);
  return result;
}
async function request(client, operation2, input, options) {
  const started_ms = Date.now();
  const sent = await send(client, operation2, input, options);
  logOutcome(client, operation2, sent, Date.now() - started_ms);
  if (!sent.ok || !paged(operation2))
    return sent;
  const reply = sent.value;
  const next = (next_options = {}) => nextPage(client, operation2, input, reply.headers, __spreadValues(__spreadValues({}, options), next_options));
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { next }) };
}
function logOutcome(client, operation2, result, duration_ms) {
  if (client.log === null)
    return;
  const log3 = scopedLog("http", { sink: client.log });
  const call_data = { name: operation2.name, method: operation2.method, duration_ms };
  if (result.ok) {
    const status2 = result.value.status;
    log3.debug(`${operation2.name}: ${status2} in ${duration_ms} ms`, __spreadProps(__spreadValues({}, call_data), { status: status2 }));
    return;
  }
  const error = result.error;
  const status = error.kind === "http" ? ` ${error.status}` : "";
  const message2 = `${operation2.name}: ${error.kind}${status} in ${duration_ms} ms`;
  if (error.kind === "aborted")
    log3.debug(message2, __spreadProps(__spreadValues({}, call_data), { error }));
  else if (error.kind === "http")
    log3.warn(message2, __spreadProps(__spreadValues({}, call_data), { error }));
  else
    log3.error(message2, __spreadProps(__spreadValues({}, call_data), { error }));
}
function paged(operation2) {
  const node = operation2.params.node;
  return node.kind === "object" && node.keys.has("offset");
}
function nextPage(client, operation2, input, headers, options) {
  assert(isRecord(input), "the input is an object");
  const next_offset = pageInfo(headers).next_offset;
  if (next_offset === null)
    return null;
  const offset = typeof input["offset"] === "number" ? input["offset"] : 0;
  if (next_offset <= offset)
    return null;
  return request(options.client ?? client, operation2, __spreadProps(__spreadValues({}, input), { offset: next_offset }), options);
}
async function send(client, operation2, input, options) {
  assert(isRecord(input), "the input is an object");
  const _a = input, { body } = _a, params = __objRest(_a, ["body"]);
  const params_checked = checkRequest(operation2.params, params);
  assertValid(params_checked, `the parameters of ${operation2.method} ${operation2.path}`);
  assert(isRecord(params_checked.value), "the checked parameters are an object");
  const url = buildUrl(client.base_url, operation2, params_checked.value);
  let body_text = null;
  if (operation2.body === null) {
    assert(body === void 0, `${operation2.method} ${operation2.path} has no body`);
  } else {
    const body_checked = checkRequest(operation2.body, body);
    assertValid(body_checked, `the body of ${operation2.method} ${operation2.path}`);
    body_text = JSON.stringify(body_checked.value);
  }
  const timeout_ms = options.timeout_ms ?? client.timeout_ms;
  assertPositiveInteger(timeout_ms, "timeout_ms");
  const deadline_ms = Date.now() + timeout_ms;
  const signal2 = options.signal;
  const mock = client.mock;
  if (mock !== null) {
    const answered = await waitWithin(() => Promise.resolve(mock({ name: operation2.name, input })), deadline_ms, signal2);
    if (!answered.ok)
      return limitError(answered.error, timeout_ms);
    if (answered.value !== null) {
      scopedLog("http", { sink: client.log }).debug(`${operation2.name}: answered by the mock`);
      return mockResult(operation2, answered.value, client.response_bytes_max);
    }
  }
  let response = null;
  for (let attempt = 0; attempt < AUTH_ATTEMPTS_MAX; attempt += 1) {
    const auth = client.auth;
    const credential = await waitWithin(() => resolveCredential(auth), deadline_ms, signal2);
    if (!credential.ok)
      return limitError(credential.error, timeout_ms);
    if (credential.value === null)
      return { ok: false, error: { kind: "auth_missing" } };
    const headers = new Headers(client.headers);
    headers.set("Accept", "application/json");
    if (body_text !== null)
      headers.set("Content-Type", "application/json");
    setCredentialHeader(headers, credential.value);
    const redirect = headers.has("X-API-Key") ? "error" : "follow";
    const init = { method: operation2.method, headers, body: body_text, redirect };
    const remaining_ms = deadline_ms - Date.now();
    if (remaining_ms <= 0)
      return { ok: false, error: { kind: "timeout", timeout_ms } };
    const limits = __spreadValues({
      timeout_ms: remaining_ms,
      bytes_max: client.response_bytes_max
    }, signal2 === void 0 ? {} : { signal: signal2 });
    const fetched = await fetchBody(client.fetch, url, init, limits);
    if (!fetched.ok)
      return limitError(fetched.error, timeout_ms);
    response = fetched.value;
    const status = response.status;
    if (client.auth.kind !== "credential")
      break;
    if (status !== 401 && status !== 511)
      break;
    if (attempt + 1 >= AUTH_ATTEMPTS_MAX)
      break;
    const credential_auth = client.auth;
    const used = credential.value;
    const log3 = scopedLog("http", { sink: client.log });
    log3.info(`${operation2.name}: ${status}, renewing the credential`);
    const renewed = await waitWithin(() => renewCredential(credential_auth, status, used), deadline_ms, signal2);
    if (!renewed.ok)
      return limitError(renewed.error, timeout_ms);
    if (!renewed.value)
      break;
  }
  assert(response !== null, "the request was sent");
  if (!response.ok)
    return { ok: false, error: httpError(response.status, response.bytes) };
  const reply = { status: response.status, headers: response.headers };
  if (isRaw(operation2.response)) {
    return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: rawData(operation2.response, response.bytes) }) };
  }
  const parsed = successJson(reply.status, response.bytes);
  if (!parsed.ok) {
    return {
      ok: false,
      error: { kind: "response_invalid", status: reply.status, path: "$", expected: "JSON" }
    };
  }
  const data = parseResponse(operation2.response, parsed.value, {
    missing_fields: client.missing_fields
  });
  if (!data.ok) {
    return {
      ok: false,
      error: __spreadValues({ kind: "response_invalid", status: reply.status }, data.error)
    };
  }
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: data.value }) };
}
function httpError(status, bytes) {
  const parsed = decodeJson(bytes);
  const body = parsed.ok ? parseResponse(json(), parsed.value) : null;
  const error_body = body !== null && body.ok ? body.value : null;
  const message2 = isRecord(error_body) && typeof error_body["error"] === "string" ? error_body["error"] : null;
  const text = parsed.ok || bytes.length === 0 ? null : new TextDecoder().decode(bytes);
  return { kind: "http", status, message: message2, body: error_body, text };
}
function mockResult(operation2, answer, bytes_max) {
  const reply = { status: answer.status, headers: answer.headers };
  const raw = isRaw(operation2.response);
  const bytes = answer.data instanceof Uint8Array ? answer.data : new TextEncoder().encode(
    // A mock of an operation without a schema gives the body as text, or nothing.
    raw && (typeof answer.data === "string" || answer.data === void 0) ? answer.data ?? "" : JSON.stringify(answer.data) ?? "null"
  );
  if (bytes.length > bytes_max) {
    return { ok: false, error: { kind: "response_too_large", bytes_max } };
  }
  if (answer.status < 200 || answer.status > 299) {
    return { ok: false, error: httpError(answer.status, bytes) };
  }
  if (isRaw(operation2.response)) {
    return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: rawData(operation2.response, bytes) }) };
  }
  const parsed = successJson(reply.status, bytes);
  if (!parsed.ok) {
    return {
      ok: false,
      error: { kind: "response_invalid", status: reply.status, path: "$", expected: "JSON" }
    };
  }
  const data = parseResponse(operation2.response, parsed.value, { missing_fields: "zero" });
  if (!data.ok) {
    return {
      ok: false,
      error: __spreadValues({ kind: "response_invalid", status: reply.status }, data.error)
    };
  }
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: data.value }) };
}
function buildUrl(base_url, operation2, params) {
  let path = operation2.path;
  for (const key of operation2.path_keys) {
    const text = queryScalar(params[key]);
    assert(text.length > 0, `the path parameter "${key}" is not empty`);
    assert(text !== "." && text !== "..", `the path parameter "${key}" is not . or ..`);
    path = path.replace(`{${key}}`, () => encodeURIComponent(text));
  }
  const node = operation2.params.node;
  assert(node.kind === "object", "the params schema is an object");
  const query13 = new URLSearchParams();
  for (const field of node.fields) {
    if (operation2.path_keys.includes(field.key))
      continue;
    const value = params[field.key];
    if (value === void 0 || value === null)
      continue;
    const name = operation2.wire_names?.[field.key] ?? field.key;
    if (Array.isArray(value)) {
      const items = value;
      query13.append(name, items.map(queryScalar).join(","));
    } else {
      query13.append(name, queryScalar(value));
    }
  }
  const query_text = query13.toString();
  if (query_text.length === 0)
    return `${base_url}${path}`;
  return `${base_url}${path}?${query_text}`;
}
function queryScalar(value) {
  if (typeof value === "string")
    return value;
  assert(typeof value === "number" || typeof value === "boolean", "a parameter is a string, a number or a boolean");
  return String(value);
}
async function fetchBody(fetchFunction, url, init, limits) {
  assertPositiveInteger(limits.timeout_ms, "timeout_ms");
  assertPositiveInteger(limits.bytes_max, "bytes_max");
  if (isAborted(limits.signal))
    return { ok: false, error: { kind: "aborted" } };
  const timeout_signal = AbortSignal.timeout(limits.timeout_ms);
  const signal2 = limits.signal === void 0 ? timeout_signal : AbortSignal.any([limits.signal, timeout_signal]);
  let response;
  let bytes;
  try {
    response = await fetchFunction(url, __spreadProps(__spreadValues({}, init), { signal: signal2 }));
    bytes = await readBody(response, limits.bytes_max);
  } catch (error) {
    if (isAborted(limits.signal))
      return { ok: false, error: { kind: "aborted" } };
    if (timeout_signal.aborted) {
      return { ok: false, error: { kind: "timeout", timeout_ms: limits.timeout_ms } };
    }
    const message2 = error instanceof Error ? error.message : String(error);
    return { ok: false, error: { kind: "network", message: message2 } };
  }
  if (!bytes.ok) {
    return { ok: false, error: { kind: "response_too_large", bytes_max: limits.bytes_max } };
  }
  return {
    ok: true,
    value: {
      status: response.status,
      ok: response.ok,
      headers: response.headers,
      bytes: bytes.value
    }
  };
}
async function waitWithin(work, deadline_ms, signal2) {
  if (isAborted(signal2))
    return { ok: false, error: "aborted" };
  const remaining_ms = deadline_ms - Date.now();
  if (remaining_ms <= 0)
    return { ok: false, error: "timeout" };
  const promise = work();
  let timer;
  let onAbort;
  const stopped = new Promise((resolve) => {
    timer = setTimeout(() => resolve({ ok: false, error: "timeout" }), remaining_ms);
    onAbort = () => resolve({ ok: false, error: "aborted" });
    signal2?.addEventListener("abort", onAbort, { once: true });
    if (isAborted(signal2))
      resolve({ ok: false, error: "aborted" });
  });
  const settled = promise.then((value) => ({
    ok: true,
    value
  }));
  try {
    return await Promise.race([settled, stopped]);
  } finally {
    clearTimeout(timer);
    if (onAbort !== void 0)
      signal2?.removeEventListener("abort", onAbort);
  }
}
function limitError(error, timeout_ms) {
  if (error === "aborted")
    return { ok: false, error: { kind: "aborted" } };
  if (error === "timeout")
    return { ok: false, error: { kind: "timeout", timeout_ms } };
  if (error.kind === "timeout")
    return { ok: false, error: { kind: "timeout", timeout_ms } };
  return { ok: false, error };
}
function isAborted(signal2) {
  return signal2?.aborted === true;
}
async function resolveCredential(auth) {
  try {
    return await credentialOf(auth);
  } catch {
    return null;
  }
}
async function renewCredential(auth, status, credential) {
  try {
    return await auth.rejected(status, credential);
  } catch {
    return false;
  }
}
async function credentialOf(auth) {
  switch (auth.kind) {
    case "none":
      return { kind: "none" };
    case "bearer": {
      const token = await auth.token();
      return token === null ? null : { kind: "bearer", token };
    }
    case "api_key":
      return { kind: "api_key", key: auth.key };
    case "credential":
      return auth.credential();
    default:
      return unreachable(auth);
  }
}
function setCredentialHeader(headers, credential) {
  switch (credential.kind) {
    case "none":
      return;
    case "bearer":
      headers.set("Authorization", `Bearer ${credential.token}`);
      return;
    case "api_key":
      headers.set("X-API-Key", credential.key);
      return;
    default:
      unreachable(credential);
  }
}
async function readBody(response, bytes_max) {
  const length_text = response.headers.get("content-length");
  if (length_text !== null) {
    const length = Number(length_text);
    if (Number.isSafeInteger(length) && length > bytes_max) {
      await response.body?.cancel();
      return { ok: false, error: "too_large" };
    }
  }
  if (response.body === null)
    return { ok: true, value: new Uint8Array(0) };
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  for (let read = 0; read < RESPONSE_READS_MAX; read += 1) {
    const chunk = await reader.read();
    if (chunk.done) {
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const part of chunks) {
        bytes.set(part, offset);
        offset += part.byteLength;
      }
      assert(offset === size, "the chunks fill the body");
      return { ok: true, value: bytes };
    }
    size += chunk.value.byteLength;
    if (size > bytes_max) {
      await reader.cancel();
      return { ok: false, error: "too_large" };
    }
    chunks.push(chunk.value);
  }
  await reader.cancel();
  return { ok: false, error: "too_large" };
}
function isRaw(response) {
  return response === "text" || response === "bytes";
}
function rawData(response, bytes) {
  return response === "bytes" ? bytes : new TextDecoder().decode(bytes);
}
function successJson(status, bytes) {
  return status === 204 ? { ok: true, value: null } : decodeJson(bytes);
}
function decodeJson(bytes) {
  try {
    return { ok: true, value: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { ok: false, error: "json_invalid" };
  }
}
function assertValid(result, subject) {
  if (result.ok)
    return;
  assert(false, `${subject} match the schema. At ${result.error.path}: ${result.error.expected}`);
}
function assertPositiveInteger(value, name) {
  assert(Number.isSafeInteger(value), `${name} is an integer`);
  assert(value > 0, `${name} is more than zero`);
}

// node_modules/@placeos/ts-client/dist/realtime/environment.js
function browserRealtimeEnvironment() {
  assert(typeof window !== "undefined", "browserRealtimeEnvironment runs in a browser");
  return {
    createSocket,
    currentUrl: () => window.location.href,
    token_transport: isNestedFrame() || isMobileSafari() ? "query" : "cookie",
    setCookie: (cookie) => {
      document.cookie = cookie;
    },
    now: () => Date.now(),
    setTimer: (milliseconds, callback) => {
      const timer = setTimeout(callback, milliseconds);
      return () => clearTimeout(timer);
    }
  };
}
function createSocket(url, handlers2) {
  const socket = new WebSocket(url);
  socket.addEventListener("open", () => handlers2.open());
  socket.addEventListener("message", (event) => handlers2.message(event.data));
  socket.addEventListener("close", () => handlers2.close());
  return {
    send: (text) => socket.send(text),
    close: () => socket.close()
  };
}
function isNestedFrame() {
  return window.parent !== window;
}
function isMobileSafari() {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent))
    return true;
  return navigator.userAgent.includes("Mac") && "ontouchend" in document;
}

// node_modules/@placeos/ts-client/dist/realtime/realtime.js
var CONTROL_PATH = "/api/engine/v2/systems/control";
var REQUEST_TIMEOUT_MS = 1e4;
var KEEP_ALIVE_MS = 15e3;
var STALE_MS = 4 * KEEP_ALIVE_MS;
var CONNECT_TIMEOUT_MS = 3e4;
var RECONNECT_DELAY_STEP_MS = 300;
var RECONNECT_DELAY_MAX_MS = 5e3;
var RECONNECT_ATTEMPTS_MAX = 40;
var RENEW_AFTER_FAILURES = 3;
var PENDING_MAX = 1024;
var BINDINGS_MAX = 4096;
var BINDING_REQUESTS_MAX = 4 * BINDINGS_MAX;
var BINDING_LISTENERS_MAX = 64;
var STATUS_LISTENERS_MAX = 64;
var INBOX_MAX = 4096;
var COOKIE_MAX_AGE_SECONDS = 120;
var INDEX_MAX = 2 ** 31 - 1;
var ERROR_CODE_NAMES = [
  "parse_error",
  "bad_request",
  "access_denied",
  "request_failed",
  "unknown_command",
  "system_not_found",
  "module_not_found",
  "unexpected_failure"
];
function splitModuleSlug(module_slug) {
  const separator = module_slug.lastIndexOf("_");
  const digits = module_slug.slice(separator + 1);
  if (separator <= 0 || !/^\d+$/.test(digits))
    return { mod: module_slug, index: 1 };
  const index = Number(digits);
  assert(Number.isSafeInteger(index), "the module index is an integer");
  return { mod: module_slug.slice(0, separator), index: Math.max(1, index) };
}
var Meta = object({ sys: string(), mod: string(), index: integer("Int32"), name: string() }, [
  "sys",
  "mod",
  "index",
  "name"
]);
var ServerMessage = object({
  id: integer(),
  type: literal(["success", "notify", "error", "debug"]),
  msg: nullable(string()),
  /** The value of a notification, or the return value of a function. */
  value: json(),
  error_code: nullable(integer("Int32")),
  meta: nullable(Meta),
  level: nullable(string()),
  /** An HTTP style status of an error, such as 404. */
  code: nullable(integer("Int32"))
}, ["id", "type"]);
function createRealtime(config) {
  assert(!config.base_url.endsWith("/"), "the base_url has no trailing slash");
  const environment = config.environment ?? browserRealtimeEnvironment();
  const log3 = scopedLog("realtime", { sink: config.log ?? null });
  let status = { kind: "idle" };
  let socket = null;
  let generation = 0;
  let connect_attempt = 0;
  let calls_pending = 0;
  let attempt = 0;
  let failures_before_open = 0;
  let renew_before_connect = false;
  let last_credential = null;
  let last_message_at_ms = 0;
  let cancelConnectTimer = null;
  let cancelKeepAlive = null;
  let cancelReconnect = null;
  let drain_scheduled = false;
  let status_notify_scheduled = false;
  let next_id = 1;
  const pending = /* @__PURE__ */ new Map();
  const queue = [];
  const bindings = /* @__PURE__ */ new Map();
  const debuggers = /* @__PURE__ */ new Map();
  const inbox = [];
  const status_listeners = /* @__PURE__ */ new Set();
  return {
    start: start2,
    stop: stop2,
    status: () => status,
    subscribe,
    exec,
    bind,
    value,
    debug
  };
  function start2() {
    const kind = status.kind;
    if (kind === "open" || kind === "connecting" || kind === "waiting")
      return;
    attempt = 0;
    failures_before_open = 0;
    void connect();
  }
  function stop2() {
    log3.info("stopped");
    connect_attempt += 1;
    setStatus({ kind: "stopped" });
    cancelTimers();
    cancelReconnect?.();
    cancelReconnect = null;
    closeSocket();
    inbox.length = 0;
    for (const id of [...pending.keys()])
      settle(id, { ok: false, error: { kind: "stopped" } });
    queue.length = 0;
  }
  function exec(target, args = [], options = {}) {
    const timeout_ms = options.timeout_ms ?? REQUEST_TIMEOUT_MS;
    assert(Number.isSafeInteger(timeout_ms) && timeout_ms > 0, "timeout_ms is a positive integer");
    return request2("exec", normalize(target), args, timeout_ms);
  }
  function bind(target, listener) {
    const normalized = normalize(target);
    const key = variableKey(normalized);
    let binding = bindings.get(key);
    if (binding === void 0) {
      assert(bindings.size < BINDINGS_MAX, "the client has less than BINDINGS_MAX bindings");
      binding = { target: normalized, holders: /* @__PURE__ */ new Set(), state: { kind: "unknown" } };
      bindings.set(key, binding);
    }
    assert(binding.holders.size < BINDING_LISTENERS_MAX, "a binding has less than BINDING_LISTENERS_MAX listeners");
    const holder = { listener };
    binding.holders.add(holder);
    if (binding.holders.size === 1)
      sendBind(binding);
    const current3 = binding.state;
    if (current3.kind !== "unknown")
      listener(current3);
    let released = false;
    const owner = binding;
    return () => {
      if (released)
        return;
      released = true;
      owner.holders.delete(holder);
      if (owner.holders.size > 0)
        return;
      bindings.delete(key);
      if (isLive()) {
        void request2("unbind", owner.target, null, REQUEST_TIMEOUT_MS);
      }
    };
  }
  function value(target) {
    return bindings.get(variableKey(normalize(target)))?.state ?? { kind: "unknown" };
  }
  function debug(target, listener) {
    assert(target.sys.length > 0, "the system ID is not empty");
    assert(target.module_id.length > 0, "the module ID is not empty");
    const key = debugKey(target.sys, target.module_id);
    let entry = debuggers.get(key);
    if (entry === void 0) {
      assert(debuggers.size < BINDINGS_MAX, "the client has less than BINDINGS_MAX debuggers");
      entry = { target, holders: /* @__PURE__ */ new Set() };
      debuggers.set(key, entry);
    }
    assert(entry.holders.size < BINDING_LISTENERS_MAX, "a debugger has room for a listener");
    const holder = { listener };
    entry.holders.add(holder);
    if (entry.holders.size === 1)
      sendDebug(entry, "debug");
    let released = false;
    const owner = entry;
    return () => {
      if (released)
        return;
      released = true;
      owner.holders.delete(holder);
      if (owner.holders.size > 0)
        return;
      debuggers.delete(key);
      if (isLive())
        sendDebug(owner, "ignore");
    };
  }
  function request2(command, target, args, timeout_ms) {
    if (status.kind === "stopped")
      return Promise.resolve(failure({ kind: "stopped" }));
    if (status.kind === "failed")
      return Promise.resolve(failure({ kind: "unavailable" }));
    const call2 = command === "exec";
    const limit = call2 ? PENDING_MAX : BINDING_REQUESTS_MAX;
    const count = call2 ? calls_pending : pending.size - calls_pending;
    if (count >= limit) {
      return Promise.resolve(failure({ kind: "too_many_requests", pending_max: limit }));
    }
    const id = next_id;
    next_id += 1;
    assert(Number.isSafeInteger(id), "the request ID is a safe integer");
    const text = JSON.stringify(__spreadValues(__spreadValues({
      id,
      cmd: command,
      sys: target.sys,
      mod: target.mod,
      index: target.index,
      name: target.name
    }, args === null ? {} : { args }), target.iface ? { iface: true } : {}));
    return new Promise((resolve) => {
      const cancelTimer = environment.setTimer(timeout_ms, () => settle(id, failure({ kind: "timeout", timeout_ms })));
      const entry = { text, call: call2, sent: false, resolve, cancelTimer };
      pending.set(id, entry);
      if (call2)
        calls_pending += 1;
      if (socket !== null && status.kind === "open") {
        socket.send(text);
        entry.sent = true;
      } else {
        queue.push(id);
        if (status.kind === "idle")
          start2();
      }
    });
  }
  function settle(id, result) {
    const entry = pending.get(id);
    if (entry === void 0)
      return;
    pending.delete(id);
    if (entry.call)
      calls_pending -= 1;
    assert(calls_pending >= 0, "the count of calls is not negative");
    if (!entry.sent) {
      const queued = queue.indexOf(id);
      if (queued >= 0)
        queue.splice(queued, 1);
    }
    entry.cancelTimer();
    entry.resolve(result);
  }
  function isLive() {
    return status.kind === "open" && socket !== null;
  }
  function sendBind(binding) {
    if (!isLive()) {
      if (status.kind === "idle")
        start2();
      return;
    }
    const key = variableKey(binding.target);
    void request2("bind", binding.target, null, REQUEST_TIMEOUT_MS).then((result) => {
      if (result.ok)
        return;
      if (bindings.get(key) !== binding)
        return;
      setBindingState(binding, { kind: "error", error: result.error });
    });
  }
  function sendDebug(entry, command) {
    if (!isLive()) {
      if (status.kind === "idle")
        start2();
      return;
    }
    const target = { sys: entry.target.sys, mod: entry.target.module_id, index: 1, name: "" };
    void request2(command, __spreadProps(__spreadValues({}, target), { iface: false }), null, REQUEST_TIMEOUT_MS);
  }
  async function connect() {
    connect_attempt += 1;
    const this_attempt = connect_attempt;
    attempt += 1;
    setStatus({ kind: "connecting", attempt });
    log3.debug("connecting", { attempt });
    if (renew_before_connect && config.auth.kind === "credential" && last_credential !== null) {
      log3.info("asking the auth for a new credential, after failures to connect");
      renew_before_connect = false;
      await renewCredential(config.auth, 401, last_credential);
      if (this_attempt !== connect_attempt)
        return;
    }
    const credential = await resolveCredential(config.auth);
    if (this_attempt !== connect_attempt)
      return;
    if (status.kind !== "connecting")
      return;
    if (credential === null) {
      log3.warn("no credential to connect with");
      scheduleReconnect();
      return;
    }
    last_credential = credential;
    const url = socketUrl(credential);
    generation += 1;
    const socket_generation = generation;
    const current3 = () => socket_generation === generation;
    socket = environment.createSocket(url, {
      open: () => {
        if (current3())
          onOpen();
      },
      message: (data) => {
        if (current3())
          onMessage(data);
      },
      close: () => {
        if (current3())
          onDisconnect();
      }
    });
    cancelConnectTimer = environment.setTimer(CONNECT_TIMEOUT_MS, () => {
      cancelConnectTimer = null;
      if (!current3() || status.kind !== "connecting")
        return;
      log3.warn("the socket did not open in time", { timeout_ms: CONNECT_TIMEOUT_MS });
      dropSocket();
    });
  }
  function onOpen() {
    cancelConnectTimer?.();
    cancelConnectTimer = null;
    attempt = 0;
    failures_before_open = 0;
    last_message_at_ms = environment.now();
    setStatus({ kind: "open", since_ms: last_message_at_ms });
    const opened = socket;
    assert(opened !== null, "an open socket exists");
    opened.send("ping");
    log3.info("connected", { bindings: bindings.size, debuggers: debuggers.size });
    for (const binding of bindings.values())
      sendBind(binding);
    for (const entry of debuggers.values())
      sendDebug(entry, "debug");
    for (const id of queue.splice(0, queue.length)) {
      const entry = pending.get(id);
      if (entry === void 0 || entry.sent)
        continue;
      opened.send(entry.text);
      entry.sent = true;
    }
    scheduleKeepAlive();
  }
  function onMessage(data) {
    last_message_at_ms = environment.now();
    if (inbox.length >= INBOX_MAX) {
      log3.warn("the inbox is full: connecting again", { inbox_max: INBOX_MAX });
      dropSocket();
      return;
    }
    inbox.push(data);
    if (drain_scheduled)
      return;
    drain_scheduled = true;
    environment.setTimer(0, drain);
  }
  function drain() {
    drain_scheduled = false;
    const messages = inbox.splice(0, inbox.length);
    const changed = /* @__PURE__ */ new Map();
    const logs = [];
    const received_at_ms = environment.now();
    for (const data of messages) {
      if (typeof data !== "string")
        continue;
      if (data === "pong")
        continue;
      const message2 = parseServerMessage(data);
      if (message2 === null)
        continue;
      switch (message2.type) {
        case "success":
          settle(message2.id, { ok: true, value: message2.value });
          break;
        case "error": {
          const error = serverError(message2);
          log3.warn("the server refused a request", { id: message2.id, error });
          settle(message2.id, failure(error));
          break;
        }
        case "notify":
          if (message2.meta !== null) {
            const { sys, mod, index, name } = message2.meta;
            log3.debug(`${sys} ${mod}_${index} ${name} changed`, {
              sys,
              mod,
              index,
              name,
              value: message2.value
            });
            changed.set(variableKey(message2.meta), message2.value);
          }
          break;
        case "debug": {
          if (message2.meta === null)
            break;
          const entry = debuggers.get(debugKey(message2.meta.sys, message2.meta.mod));
          if (entry === void 0)
            break;
          const text = message2.msg ?? "";
          const { sys, mod } = message2.meta;
          log3.debug(`log of ${mod}`, { sys, mod, level: message2.level, message: text });
          logs.push([entry, { level: message2.level, message: text, received_at_ms }]);
          break;
        }
        default:
          unreachable(message2.type);
      }
    }
    for (const [key, changed_value] of changed) {
      const binding = bindings.get(key);
      if (binding !== void 0) {
        setBindingState(binding, { kind: "value", value: changed_value });
      }
    }
    for (const [entry, log4] of logs) {
      for (const holder of [...entry.holders])
        holder.listener(log4);
    }
  }
  function onDisconnect() {
    socket = null;
    if (inbox.length > 0)
      drain();
    log3.warn("the socket closed", { was_open: status.kind === "open" });
    cancelTimers();
    if (status.kind !== "open")
      failures_before_open += 1;
    for (const [id, entry] of [...pending]) {
      if (entry.sent)
        settle(id, failure({ kind: "disconnected" }));
    }
    if (status.kind === "stopped")
      return;
    scheduleReconnect();
  }
  function scheduleReconnect() {
    if (attempt >= RECONNECT_ATTEMPTS_MAX) {
      log3.error("stopped after the maximum number of attempts", { attempts: attempt });
      setStatus({ kind: "failed" });
      for (const id of [...pending.keys()])
        settle(id, failure({ kind: "unavailable" }));
      queue.length = 0;
      return;
    }
    if (failures_before_open >= RENEW_AFTER_FAILURES) {
      failures_before_open = 0;
      renew_before_connect = true;
    }
    const delay_ms = Math.min(RECONNECT_DELAY_MAX_MS, Math.max(1, attempt) * RECONNECT_DELAY_STEP_MS);
    setStatus({ kind: "waiting", attempt, delay_ms });
    log3.info("connecting again after a wait", { attempt, delay_ms });
    cancelReconnect = environment.setTimer(delay_ms, () => {
      cancelReconnect = null;
      void connect();
    });
  }
  function scheduleKeepAlive() {
    cancelKeepAlive = environment.setTimer(KEEP_ALIVE_MS, () => {
      cancelKeepAlive = null;
      if (status.kind !== "open" || socket === null)
        return;
      if (environment.now() - last_message_at_ms > STALE_MS) {
        log3.warn("no message from the server: connecting again", { stale_ms: STALE_MS });
        dropSocket();
        return;
      }
      socket.send("ping");
      scheduleKeepAlive();
    });
  }
  function dropSocket() {
    closeSocket();
    onDisconnect();
  }
  function closeSocket() {
    generation += 1;
    socket?.close();
    socket = null;
  }
  function cancelTimers() {
    cancelConnectTimer?.();
    cancelConnectTimer = null;
    cancelKeepAlive?.();
    cancelKeepAlive = null;
  }
  function socketUrl(credential) {
    const origin = config.base_url.length > 0 ? config.base_url : new URL(environment.currentUrl()).origin;
    const url = new URL(CONTROL_PATH, origin);
    const secure = url.protocol === "https:";
    url.protocol = secure ? "wss:" : "ws:";
    if (config.fixed_device === true)
      url.searchParams.set("fixed_device", "true");
    let token = null;
    switch (credential.kind) {
      case "none":
        break;
      case "bearer":
        token = ["bearer_token", credential.token];
        break;
      case "api_key":
        token = ["api-key", credential.key];
        break;
      default:
        unreachable(credential);
    }
    if (token !== null) {
      const [name, token_value] = token;
      const page_host = new URL(environment.currentUrl()).hostname;
      if (environment.token_transport === "query" || url.hostname !== page_host) {
        log3.debug("the token goes in the query of the socket");
        url.searchParams.set(name, token_value);
      } else {
        assert(/^[^;\s]+$/.test(token_value), "the token has no semicolons or spaces");
        const secure_flag = secure ? "; secure" : "";
        log3.debug("the token goes in a cookie of the socket path");
        environment.setCookie(`${name}=${token_value}; max-age=${COOKIE_MAX_AGE_SECONDS}; path=${CONTROL_PATH}; samesite=strict${secure_flag}`);
      }
    }
    return url.toString();
  }
  function setBindingState(binding, state2) {
    binding.state = state2;
    for (const holder of [...binding.holders])
      holder.listener(state2);
  }
  function setStatus(next) {
    status = next;
    if (status_notify_scheduled)
      return;
    status_notify_scheduled = true;
    environment.setTimer(0, () => {
      status_notify_scheduled = false;
      const current3 = status;
      for (const listener of [...status_listeners])
        listener(current3);
    });
  }
  function subscribe(listener) {
    assert(status_listeners.size < STATUS_LISTENERS_MAX, "the client has room for a listener");
    status_listeners.add(listener);
    return () => {
      status_listeners.delete(listener);
    };
  }
}
function normalize(target) {
  const index = target.index ?? 1;
  assert(target.sys.length > 0, "the system ID is not empty");
  assert(target.mod.length > 0, "the module name is not empty");
  assert(target.name.length > 0, "the name is not empty");
  assert(Number.isSafeInteger(index), "the module index is an integer");
  assert(index >= 1 && index <= INDEX_MAX, "the module index is from 1 to 2^31 - 1");
  return {
    sys: target.sys,
    mod: target.mod,
    index,
    name: target.name,
    iface: target.iface === true
  };
}
function variableKey(target) {
  return JSON.stringify([target.sys, target.mod, target.index, target.name]);
}
function debugKey(sys, module_id) {
  return JSON.stringify([sys, module_id]);
}
function parseServerMessage(text) {
  let decoded;
  try {
    decoded = JSON.parse(text);
  } catch {
    return null;
  }
  const parsed = parseResponse(ServerMessage, decoded);
  return parsed.ok ? parsed.value : null;
}
function serverError(message2) {
  const name = message2.error_code === null ? void 0 : ERROR_CODE_NAMES[message2.error_code];
  return { kind: "server", code: name ?? "unknown", status: message2.code, message: message2.msg };
}
function failure(error) {
  return { ok: false, error };
}

// node_modules/@placeos/ts-client/dist/compat/realtime-mock.js
var MOCK_SYSTEMS_MAX = 1e4;
var MOCK_VARIABLES_MAX = 1e3;
var MOCK_MESSAGES_MAX = 1e4;
var systems = /* @__PURE__ */ new Map();
function registerSystem(id, details) {
  assert(systems.has(id) || systems.size < MOCK_SYSTEMS_MAX, "fewer mock systems");
  const system = {};
  const modules = /* @__PURE__ */ new Map();
  for (const [name, list] of Object.entries(details)) {
    const states = list.map(mockModule);
    modules.set(name, states);
    system[name] = states.map((state2) => state2.module);
  }
  systems.set(id, { system, modules });
  return system;
}
function mockSystem(id) {
  return systems.get(id)?.system;
}
function mockModule(properties) {
  const module = {};
  const values = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Map();
  const state2 = { module, values, listeners };
  const prototype = Object.getPrototypeOf(properties);
  const inherited = prototype === null || prototype === Object.prototype ? [] : Object.getOwnPropertyNames(prototype).filter((name) => name.startsWith("$"));
  for (const key of [...Object.keys(properties), ...inherited]) {
    const value = Reflect.get(properties, key);
    if (typeof value === "function") {
      module[key.startsWith("$") ? key : `$${key}`] = value;
      continue;
    }
    addVariable(state2, key.replace(/^\$/, ""), value);
  }
  return state2;
}
function addVariable(state2, name, value) {
  assert(state2.values.size < MOCK_VARIABLES_MAX, "fewer variables on a mock module");
  state2.values.set(name, value);
  Object.defineProperty(state2.module, name, {
    enumerable: true,
    get: () => state2.values.get(name),
    set: (next) => {
      state2.values.set(name, next);
      for (const listener of [...state2.listeners.get(name) ?? []])
        listener(next);
    }
  });
}
function mockRealtimeEnvironment() {
  return {
    createSocket: createSocket2,
    currentUrl: () => typeof location === "undefined" ? "http://localhost/" : location.href,
    token_transport: "query",
    setCookie: () => {
    },
    now: () => Date.now(),
    setTimer: (milliseconds, callback) => {
      const timer = setTimeout(callback, milliseconds);
      return () => clearTimeout(timer);
    }
  };
}
function createSocket2(_url, handlers2) {
  let open = true;
  const bound = /* @__PURE__ */ new Map();
  const outbox = [];
  let timer = null;
  const flush = () => {
    timer = null;
    for (const work of outbox.splice(0, outbox.length))
      if (open)
        work();
  };
  const later = (work) => {
    assert(outbox.length < MOCK_MESSAGES_MAX, "fewer messages wait in the mock socket");
    outbox.push(work);
    timer ??= setTimeout(flush, 0);
  };
  const reply = (message2) => later(() => handlers2.message(JSON.stringify(message2)));
  later(() => handlers2.open());
  function handle(request2) {
    const meta = {
      sys: request2.sys,
      mod: request2.mod,
      index: request2.index,
      name: request2.name
    };
    const key = JSON.stringify(meta);
    const found = systems.get(request2.sys);
    const state2 = found?.modules.get(request2.mod)?.[request2.index - 1];
    if (state2 === void 0) {
      const code = found === void 0 ? "system_not_found" : "module_not_found";
      reply({
        id: request2.id,
        type: "error",
        error_code: ERROR_CODE_NAMES.indexOf(code),
        msg: `mock ${code.replace("_", " ")}: ${request2.sys} ${request2.mod}_${request2.index}`
      });
      return;
    }
    switch (request2.cmd) {
      case "bind": {
        if (!state2.values.has(request2.name)) {
          addVariable(state2, request2.name, Reflect.get(state2.module, request2.name) ?? null);
        }
        const notify2 = (value) => reply({ id: request2.id, type: "notify", value: value ?? null, meta });
        bound.get(key)?.();
        const listeners = state2.listeners.get(request2.name) ?? /* @__PURE__ */ new Set();
        listeners.add(notify2);
        state2.listeners.set(request2.name, listeners);
        bound.set(key, () => {
          listeners.delete(notify2);
          if (listeners.size === 0)
            state2.listeners.delete(request2.name);
        });
        reply({ id: request2.id, type: "success" });
        notify2(state2.values.get(request2.name));
        return;
      }
      case "unbind":
        bound.get(key)?.();
        bound.delete(key);
        reply({ id: request2.id, type: "success" });
        return;
      case "exec":
        void execute(state2, request2).then((value) => reply({ id: request2.id, type: "success", value: value ?? null }), (error) => reply({
          id: request2.id,
          type: "error",
          error_code: ERROR_CODE_NAMES.indexOf("request_failed"),
          msg: error instanceof Error ? error.message : String(error)
        }));
        return;
      default:
        reply({ id: request2.id, type: "success" });
    }
  }
  return {
    send: (text) => {
      assert(open, "the mock socket is open");
      if (text === "ping") {
        later(() => handlers2.message("pong"));
        return;
      }
      const request2 = parseRequest(text);
      if (request2 !== null)
        handle(request2);
    },
    close: () => {
      if (!open)
        return;
      for (const release of bound.values())
        release();
      bound.clear();
      open = false;
      outbox.length = 0;
      if (timer !== null)
        clearTimeout(timer);
      timer = null;
      setTimeout(() => handlers2.close(), 0);
    }
  };
}
async function execute(state2, request2) {
  const fn = state2.module[`$${request2.name}`];
  if (typeof fn !== "function")
    return null;
  return Reflect.apply(fn, state2.module, [...request2.args]);
}
function parseRequest(text) {
  let value;
  try {
    value = JSON.parse(text);
  } catch {
    return null;
  }
  if (typeof value !== "object" || value === null)
    return null;
  const field = (key) => Reflect.get(value, key);
  const id = field("id");
  const cmd = field("cmd");
  const sys = field("sys");
  const mod = field("mod");
  const index = field("index");
  const name = field("name");
  const args = field("args");
  if (typeof id !== "number" || typeof cmd !== "string" || typeof sys !== "string")
    return null;
  if (typeof mod !== "string" || typeof index !== "number" || typeof name !== "string")
    return null;
  return { id, cmd, sys, mod, index, name, args: Array.isArray(args) ? args : [] };
}

// node_modules/@placeos/ts-client/dist/generated/operations/metadata.js
var metadata_exports = {};
__export(metadata_exports, {
  bulkFetch: () => bulkFetch,
  childrenMetadata: () => childrenMetadata,
  destroy: () => destroy,
  history: () => history2,
  merge: () => merge,
  rename: () => rename,
  show: () => show,
  update: () => update
});

// node_modules/@placeos/ts-client/dist/generated/schemas.js
var TriggerConditionsComparisonOperatorSchema = /* @__PURE__ */ literal([
  "and",
  "equal",
  "exclusive_or",
  "greater_than",
  "greater_than_or_equal",
  "less_than",
  "less_than_or_equal",
  "not_equal",
  "or"
]);
var TriggerConditionsComparisonOperator = TriggerConditionsComparisonOperatorSchema;
var TriggerConditionsComparisonStatusVariableSchema = /* @__PURE__ */ object({
  mod: /* @__PURE__ */ string(),
  status: /* @__PURE__ */ string(),
  keys: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["mod", "status", "keys"]);
var TriggerConditionsComparisonStatusVariable = TriggerConditionsComparisonStatusVariableSchema;
var TriggerConditionsComparisonSchema = /* @__PURE__ */ object({
  left: /* @__PURE__ */ nullable(
    /* @__PURE__ */ union([
      /* @__PURE__ */ boolean(),
      /* @__PURE__ */ number(),
      /* @__PURE__ */ integer(),
      TriggerConditionsComparisonStatusVariable,
      /* @__PURE__ */ string()
    ])
  ),
  operator: /* @__PURE__ */ nullable(TriggerConditionsComparisonOperator),
  right: /* @__PURE__ */ nullable(
    /* @__PURE__ */ union([
      /* @__PURE__ */ boolean(),
      /* @__PURE__ */ number(),
      /* @__PURE__ */ integer(),
      TriggerConditionsComparisonStatusVariable,
      /* @__PURE__ */ string()
    ])
  )
});
var TriggerConditionsComparison = TriggerConditionsComparisonSchema;
var TriggerConditionsTimeDependentTypeSchema = /* @__PURE__ */ literal(["at", "cron"]);
var TriggerConditionsTimeDependentType = TriggerConditionsTimeDependentTypeSchema;
var TriggerConditionsTimeDependentSchema = /* @__PURE__ */ object({
  type: /* @__PURE__ */ nullable(TriggerConditionsTimeDependentType),
  /** Unix time in seconds. */
  time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  cron: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var TriggerConditionsTimeDependent = TriggerConditionsTimeDependentSchema;
var TriggerConditionsSchema = /* @__PURE__ */ object({
  comparisons: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerConditionsComparison)),
  time_dependents: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(TriggerConditionsTimeDependent)
  )
});
var TriggerConditions = TriggerConditionsSchema;
var UserWorktimeBlockSchema = /* @__PURE__ */ object({
  start_time: /* @__PURE__ */ number(),
  end_time: /* @__PURE__ */ number(),
  location: /* @__PURE__ */ string()
}, ["start_time", "end_time", "location"]);
var UserWorktimeBlock = UserWorktimeBlockSchema;
var UserWorktimePreferenceSchema = /* @__PURE__ */ object({
  day_of_week: /* @__PURE__ */ integer("Int32"),
  blocks: /* @__PURE__ */ array(UserWorktimeBlock)
}, ["day_of_week", "blocks"]);
var UserWorktimePreference = UserWorktimePreferenceSchema;
var UserAdminResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ui_theme: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  misc: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  login_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  card_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  sys_admin: /* @__PURE__ */ boolean(),
  support: /* @__PURE__ */ boolean(),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "sys_admin",
  "support",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides"
]);
var UserAdminResponse = UserAdminResponseSchema;
var TriggerActionsEmailSchema = /* @__PURE__ */ object({
  emails: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  content: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var TriggerActionsEmail = TriggerActionsEmailSchema;
var TriggerActionsFunctionSchema = /* @__PURE__ */ object({
  mod: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  method: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  args: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json()))
});
var TriggerActionsFunction = TriggerActionsFunctionSchema;
var TriggerActionsSchema = /* @__PURE__ */ object({
  functions: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerActionsFunction)),
  mailers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerActionsEmail))
});
var TriggerActions = TriggerActionsSchema;
var SystemTriggersControlSystemDetailsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  id: /* @__PURE__ */ string()
}, ["name", "id"]);
var SystemTriggersControlSystemDetails = SystemTriggersControlSystemDetailsSchema;
var TriggerInstanceSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  triggered: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  important: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  exec_enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  webhook_secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  trigger_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  trigger_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  control_system: /* @__PURE__ */ nullable(SystemTriggersControlSystemDetails),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var TriggerInstance = TriggerInstanceSchema;
var TriggerSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  actions: /* @__PURE__ */ nullable(TriggerActions),
  conditions: /* @__PURE__ */ nullable(TriggerConditions),
  debounce_period: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  important: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  enable_webhook: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  any_match: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  supported_methods: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  trigger_instances: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerInstance)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Trigger = TriggerSchema;
var ZoneSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  display_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  code: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  map_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  triggers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  place_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  remove_triggers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  add_triggers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  trigger_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Trigger)),
  children_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  update_systems: /* @__PURE__ */ boolean()
}, ["update_systems"]);
var Zone = ZoneSchema;
var ModulesControlSystemDetailsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  zone_data: /* @__PURE__ */ array(Zone)
}, ["name", "zone_data"]);
var ModulesControlSystemDetails = ModulesControlSystemDetailsSchema;
var ModulesDriverDetailsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  module_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["name"]);
var ModulesDriverDetails = ModulesDriverDetailsSchema;
var ModuleSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  ip: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  port: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  tls: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  udp: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  makebreak: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  custom_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** The number of the enum: 0 ssh, 1 device, 2 service, 3 websocket, 99 logic. */
  role: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 99])),
  /** the alert level for stagehand issues */
  alert_level: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["low", "medium", "high", "critical"])
  ),
  connected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  running: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  notes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ignore_connected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  ignore_startstop: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  has_runtime_error: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  /** Unix time in seconds. */
  error_timestamp: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  launch_on_execute: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  driver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  edge_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  driver: /* @__PURE__ */ nullable(ModulesDriverDetails),
  control_system: /* @__PURE__ */ nullable(ModulesControlSystemDetails),
  core_node: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Module = ModuleSchema;
var GroupSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  subsystems: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  default_permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  ad_group_mappings: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(
      /* @__PURE__ */ tuple([/* @__PURE__ */ string(), /* @__PURE__ */ integer("Int32")])
    )
  ),
  features: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ record(/* @__PURE__ */ json()))
  ),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  children_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
});
var Group = GroupSchema;
var PlaylistScheduleSchema = /* @__PURE__ */ object({
  play_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  play_at_local: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  valid_until: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  play_takeover: /* @__PURE__ */ boolean(),
  play_period: /* @__PURE__ */ integer("Int32"),
  play_cron: /* @__PURE__ */ string(),
  mask: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["play_takeover", "play_period", "play_cron"]);
var PlaylistSchedule = PlaylistScheduleSchema;
var PlaylistSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  play_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  play_through_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /**
   * The number of the enum: 0 default, 1 cut, 2 cross_fade, 3 slide_top, 4 slide_left, 5
   * slide_right, 6 slide_bottom.
   */
  default_animation: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 4, 5, 6])),
  random: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  distribution: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  default_duration: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  valid_from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_until: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  schedules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistSchedule)),
  shared_with: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Group)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Playlist = PlaylistSchema;
var PlaylistItemSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  video_length: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  start_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  play_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  /**
   * The number of the enum: 0 default, 1 cut, 2 cross_fade, 3 slide_top, 4 slide_left, 5
   * slide_right, 6 slide_bottom.
   */
  animation: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 4, 5, 6])),
  media_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["image", "video", "plugin", "webpage", "external_image"])
  ),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  media_uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  media_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  thumbnail_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  plugin_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  plugin_params: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  play_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_until: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  shared_with: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Group)),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Playlist)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var PlaylistItem = PlaylistItemSchema;
var SignagePluginSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  playback_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["static", "interactive", "playsthrough"])
  ),
  plugin_type: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["plugin", "widget"])),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  params: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  defaults: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var SignagePlugin = SignagePluginSchema;
var SignageTemplateLayoutPositionSchema = /* @__PURE__ */ literal([
  "top",
  "bottom",
  "left",
  "right",
  "floating"
]);
var SignageTemplateLayoutPosition = SignageTemplateLayoutPositionSchema;
var SignageTemplateLayoutSchema = /* @__PURE__ */ object({
  plugin_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  position: SignageTemplateLayoutPosition,
  x_pos: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  y_pos: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  plugin_params: /* @__PURE__ */ record(/* @__PURE__ */ json())
}, ["position", "plugin_params"]);
var SignageTemplateLayout = SignageTemplateLayoutSchema;
var SignageTemplateSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  background_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  layouts: /* @__PURE__ */ nullable(/* @__PURE__ */ array(SignageTemplateLayout)),
  full_screen_takeover: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  merge: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approval_requested: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  requested_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approved_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  live_template_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  background_media: /* @__PURE__ */ nullable(PlaylistItem),
  shared_with: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Group))
});
var SignageTemplate = SignageTemplateSchema;
var SignageTemplateSystemTemplateSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  template_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schedule: /* @__PURE__ */ nullable(PlaylistSchedule),
  template_details: /* @__PURE__ */ nullable(SignageTemplate)
});
var SignageTemplateSystemTemplate = SignageTemplateSystemTemplateSchema;
var ControlSystemSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  display_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  code: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  map_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approval: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  security_groups: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  support_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timetable_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  camera_snapshot_urls: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(/* @__PURE__ */ string())
  ),
  camera_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  room_booking_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  version: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  installed_ui_devices: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  modules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  sign_height: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  sign_width: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  signage: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  /** Unix time in seconds. */
  signage_last_seen: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  playlist_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  space_config: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  remove_zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  add_zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  zone_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Zone)),
  module_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Module)),
  playlist_mappings: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  ),
  playlist_config: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(
      /* @__PURE__ */ tuple([Playlist, /* @__PURE__ */ array(/* @__PURE__ */ string())])
    )
  ),
  playlist_media: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistItem)),
  signage_plugins: /* @__PURE__ */ nullable(/* @__PURE__ */ array(SignagePlugin)),
  template_schedules: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(SignageTemplateSystemTemplate)
  ),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  update_triggers: /* @__PURE__ */ boolean()
}, ["update_triggers"]);
var ControlSystem = ControlSystemSchema;
var UserPublicResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides"
]);
var UserPublicResponse = UserPublicResponseSchema;
var GroupUserSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  auto_assigned: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group: /* @__PURE__ */ nullable(Group),
  user: /* @__PURE__ */ nullable(UserPublicResponse)
});
var GroupUser = GroupUserSchema;
var GroupZoneSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  deny: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  group: /* @__PURE__ */ nullable(Group),
  zone: /* @__PURE__ */ nullable(Zone)
});
var GroupZone = GroupZoneSchema;
var GroupsAdGroupSyncSchema = /* @__PURE__ */ object({
  user_id: /* @__PURE__ */ string(),
  ad_groups: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["user_id", "ad_groups"]);
var GroupsAdGroupSync = GroupsAdGroupSyncSchema;
var GroupsCurrentGroupSchema = /* @__PURE__ */ object({
  group: Group,
  permissions: /* @__PURE__ */ integer("Int32")
}, ["group", "permissions"]);
var GroupsCurrentGroup = GroupsCurrentGroupSchema;
var HistorySchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  correlation_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  action: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  changed_fields: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  diff: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  snapshot: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  context: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var History = HistorySchema;
var ImageGenModelCapabilitiesSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string(),
  generate: /* @__PURE__ */ boolean(),
  edit: /* @__PURE__ */ boolean(),
  enhance: /* @__PURE__ */ boolean(),
  max_references: /* @__PURE__ */ integer("Int32"),
  max_candidates: /* @__PURE__ */ integer("Int32"),
  qualities: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  aspect_ratios: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, [
  "id",
  "name",
  "generate",
  "edit",
  "enhance",
  "max_references",
  "max_candidates",
  "qualities",
  "aspect_ratios"
]);
var ImageGenModelCapabilities = ImageGenModelCapabilitiesSchema;
var ImageGenProviderCapabilitiesSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string(),
  provider: /* @__PURE__ */ string(),
  region: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  models: /* @__PURE__ */ array(ImageGenModelCapabilities)
}, ["id", "name", "provider", "models"]);
var ImageGenProviderCapabilities = ImageGenProviderCapabilitiesSchema;
var MetadataInterfaceSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  description: /* @__PURE__ */ string(),
  details: /* @__PURE__ */ json(),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schema_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  editors: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  modified_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ integer(),
  created_at: /* @__PURE__ */ integer()
}, ["name", "description", "details", "editors", "updated_at", "created_at"]);
var MetadataInterface = MetadataInterfaceSchema;
var MetadataChildrenSchema = /* @__PURE__ */ object({
  zone: Zone,
  metadata: /* @__PURE__ */ record(MetadataInterface)
}, ["zone", "metadata"]);
var MetadataChildren = MetadataChildrenSchema;
var MetadataRenameSchema = /* @__PURE__ */ object({
  current_name: /* @__PURE__ */ string(),
  new_name: /* @__PURE__ */ string()
}, ["current_name", "new_name"]);
var MetadataRename = MetadataRenameSchema;
var PlaylistApprovalMessageSchema = /* @__PURE__ */ object({
  message: /* @__PURE__ */ string()
}, ["message"]);
var PlaylistApprovalMessage = PlaylistApprovalMessageSchema;
var PlaylistApproverSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string()
}, ["id", "name"]);
var PlaylistApprover = PlaylistApproverSchema;
var PlaylistItemScheduleSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  playlist_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schedules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistSchedule)),
  media: /* @__PURE__ */ nullable(PlaylistItem),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var PlaylistItemSchedule = PlaylistItemScheduleSchema;
var PlaylistRevisionSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approval_requested: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  requested_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approved_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  items: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  playlist_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  media: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistItem)),
  schedules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistItemSchedule)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var PlaylistRevision = PlaylistRevisionSchema;
var ScreenshotFormatSchema = /* @__PURE__ */ literal(["png", "jpeg", "webp"]);
var ScreenshotFormat = ScreenshotFormatSchema;
var SettingsSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  modified_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  settings_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** The number of the enum: 0 none, 1 support, 2 admin, 3 never_display. */
  encryption_level: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3])),
  settings_string: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  keys: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  parent_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["control_system", "driver", "module", "zone"])
  ),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Settings = SettingsSchema;
var SignageAiCapabilitiesSchema = /* @__PURE__ */ object({
  enabled: /* @__PURE__ */ boolean(),
  reason: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  providers: /* @__PURE__ */ array(ImageGenProviderCapabilities),
  default_provider_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  aspect_ratios: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  qualities: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  max_candidates: /* @__PURE__ */ integer("Int32"),
  logo_layer: /* @__PURE__ */ boolean(),
  quota: /* @__PURE__ */ object({
    user_remaining_today: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    domain_remaining_month: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
  })
}, ["enabled", "providers", "aspect_ratios", "qualities", "max_candidates", "logo_layer", "quota"]);
var SignageAiCapabilities = SignageAiCapabilitiesSchema;
var SignageAiClaimParamsSchema = /* @__PURE__ */ object({
  upload_id: /* @__PURE__ */ string(),
  item_id: /* @__PURE__ */ string()
}, ["upload_id", "item_id"]);
var SignageAiClaimParams = SignageAiClaimParamsSchema;
var SignageAiEditParamsSchema = /* @__PURE__ */ object({
  prompt: /* @__PURE__ */ string(),
  aspect_ratio: /* @__PURE__ */ string(),
  quality: /* @__PURE__ */ string(),
  candidates: /* @__PURE__ */ integer("Int32"),
  references: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  include_logo: /* @__PURE__ */ boolean(),
  add_text_with_layer: /* @__PURE__ */ boolean(),
  use_branding: /* @__PURE__ */ boolean(),
  words: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  provider_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idempotency_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  source_upload_id: /* @__PURE__ */ string(),
  source_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_job_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "prompt",
  "aspect_ratio",
  "quality",
  "candidates",
  "references",
  "include_logo",
  "add_text_with_layer",
  "use_branding",
  "source_upload_id"
]);
var SignageAiEditParams = SignageAiEditParamsSchema;
var SignageAiGenerateParamsSchema = /* @__PURE__ */ object({
  prompt: /* @__PURE__ */ string(),
  aspect_ratio: /* @__PURE__ */ string(),
  quality: /* @__PURE__ */ string(),
  candidates: /* @__PURE__ */ integer("Int32"),
  references: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  include_logo: /* @__PURE__ */ boolean(),
  add_text_with_layer: /* @__PURE__ */ boolean(),
  use_branding: /* @__PURE__ */ boolean(),
  words: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  provider_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idempotency_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "prompt",
  "aspect_ratio",
  "quality",
  "candidates",
  "references",
  "include_logo",
  "add_text_with_layer",
  "use_branding"
]);
var SignageAiGenerateParams = SignageAiGenerateParamsSchema;
var SignageAiJobResponseSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  state: /* @__PURE__ */ string(),
  kind: /* @__PURE__ */ string(),
  provider: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  candidates: /* @__PURE__ */ integer("Int32"),
  images_produced: /* @__PURE__ */ integer("Int32"),
  parent_job_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  version: /* @__PURE__ */ integer("Int32"),
  prompt: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  images: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  error_kind: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  error_message: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cost_units: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  latency_ms: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  finished_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
}, ["id", "state", "kind", "candidates", "images_produced", "version", "images"]);
var SignageAiJobResponse = SignageAiJobResponseSchema;
var SignageAiJobUsageRowSchema = /* @__PURE__ */ object({
  kind: /* @__PURE__ */ string(),
  provider: /* @__PURE__ */ string(),
  model: /* @__PURE__ */ string(),
  jobs: /* @__PURE__ */ integer(),
  candidates: /* @__PURE__ */ integer(),
  images_produced: /* @__PURE__ */ integer(),
  cost_units: /* @__PURE__ */ number()
}, ["kind", "provider", "model", "jobs", "candidates", "images_produced", "cost_units"]);
var SignageAiJobUsageRow = SignageAiJobUsageRowSchema;
var SignagePluginPluginTypeSchema = /* @__PURE__ */ literal(["plugin", "widget"]);
var SignagePluginPluginType = SignagePluginPluginTypeSchema;
var SignageTemplatesApprovalMessageSchema = /* @__PURE__ */ object({
  message: /* @__PURE__ */ string()
}, ["message"]);
var SignageTemplatesApprovalMessage = SignageTemplatesApprovalMessageSchema;
var SignageTemplatesApproverSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string()
}, ["id", "name"]);
var SignageTemplatesApprover = SignageTemplatesApproverSchema;
var SystemsFunctionDetailsSchema = /* @__PURE__ */ object({
  arity: /* @__PURE__ */ integer("Int32"),
  params: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  order: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["arity", "params", "order"]);
var SystemsFunctionDetails = SystemsFunctionDetailsSchema;
var UploadSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  uploaded_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_size: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  file_path: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  object_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_md5: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cache_etag: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cache_modified: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["none", "admin", "support"])),
  object_options: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  resumable_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resumable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  part_list: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ integer("Int32"))),
  part_data: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  upload_complete: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  storage_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uploaded_by: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Upload = UploadSchema;
var UploadPermissionsSchema = /* @__PURE__ */ literal(["none", "admin", "support"]);
var UploadPermissions = UploadPermissionsSchema;
var UploadsPartInfoSchema = /* @__PURE__ */ object({
  md5: /* @__PURE__ */ string(),
  part: /* @__PURE__ */ integer("Int32")
}, ["md5", "part"]);
var UploadsPartInfo = UploadsPartInfoSchema;
var UploadsScreenshotInfoSchema = /* @__PURE__ */ object({
  url: /* @__PURE__ */ string(),
  width: /* @__PURE__ */ integer("Int32"),
  height: /* @__PURE__ */ integer("Int32"),
  scale: /* @__PURE__ */ number(),
  format: ScreenshotFormat,
  full_page: /* @__PURE__ */ boolean(),
  settle: /* @__PURE__ */ integer("Int32"),
  file_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  public: /* @__PURE__ */ boolean(),
  tags: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["url", "width", "height", "scale", "format", "full_page", "settle", "public", "tags"]);
var UploadsScreenshotInfo = UploadsScreenshotInfoSchema;
var UploadsUpdateInfoSchema = /* @__PURE__ */ object({
  resumable_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  part_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(UploadsPartInfo)),
  part_list: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ integer("Int32")))
});
var UploadsUpdateInfo = UploadsUpdateInfoSchema;
var UploadsUploadInfoSchema = /* @__PURE__ */ object({
  file_name: /* @__PURE__ */ string(),
  file_size: /* @__PURE__ */ union([/* @__PURE__ */ integer(), /* @__PURE__ */ string()]),
  file_id: /* @__PURE__ */ string(),
  file_mime: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_path: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permissions: UploadPermissions,
  public: /* @__PURE__ */ boolean(),
  expires: /* @__PURE__ */ integer("Int32"),
  tags: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  cache_etag: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cache_modified: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["file_name", "file_size", "file_id", "permissions", "public", "expires", "tags"]);
var UploadsUploadInfo = UploadsUploadInfoSchema;
var UserAdminMetadataResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ui_theme: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  misc: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  login_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  card_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  sys_admin: /* @__PURE__ */ boolean(),
  support: /* @__PURE__ */ boolean(),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  associated_metadata: /* @__PURE__ */ record(MetadataInterface),
  subsystem_access: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "sys_admin",
  "support",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides",
  "associated_metadata",
  "subsystem_access"
]);
var UserAdminMetadataResponse = UserAdminMetadataResponseSchema;
var UserGroupResponseSchema = /* @__PURE__ */ object({
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["groups"]);
var UserGroupResponse = UserGroupResponseSchema;
var UserPublicMetadataResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  associated_metadata: /* @__PURE__ */ record(MetadataInterface)
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides",
  "associated_metadata"
]);
var UserPublicMetadataResponse = UserPublicMetadataResponseSchema;
var UserResourceTokenSchema = /* @__PURE__ */ object({
  token: /* @__PURE__ */ string(),
  expires: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
}, ["token"]);
var UserResourceToken = UserResourceTokenSchema;
var ZonesZoneExecResponseSchema = /* @__PURE__ */ object({
  success: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  failure: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  module_missing: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["success", "failure", "module_missing"]);
var ZonesZoneExecResponse = ZonesZoneExecResponseSchema;

// node_modules/@placeos/ts-client/dist/generated/operations/metadata.js
function bulkFetch(input, options) {
  return call(BULK_FETCH, input, options);
}
var BULK_FETCH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{name}/bulk",
  path_keys: ["name"],
  params: /* @__PURE__ */ parameters({
    /** the name of the metadata key to fetch */
    name: /* @__PURE__ */ string(),
    /** comma-separated list of parent IDs (zones, systems, users, etc.) */
    parent_ids: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["name", "parent_ids"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ nullable(MetadataInterface)),
  name: "metadata.bulkFetch"
});
function childrenMetadata(input, options) {
  return call(CHILDREN_METADATA, input, options);
}
var CHILDREN_METADATA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{id}/children",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the parent metadata is included in the results by default */
    include_parent: /* @__PURE__ */ boolean(),
    /** filter for a particular metadata key */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(MetadataChildren),
  name: "metadata.childrenMetadata"
});
function destroy(input, options) {
  return call(DESTROY, input, options);
}
var DESTROY = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the name of the metadata key */
    name: /* @__PURE__ */ string()
  }, ["id", "name"]),
  body: null,
  response: "text",
  name: "metadata.destroy"
});
function history2(input, options) {
  return call(HISTORY, input, options);
}
var HISTORY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{id}/history",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the name of the metadata key */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ array(MetadataInterface)),
  name: "metadata.history"
});
function merge(input, options) {
  return call(MERGE, input, options);
}
var MERGE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be updated */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: MetadataInterface,
  response: MetadataInterface,
  name: "metadata.merge"
});
function rename(input, options) {
  return call(RENAME, input, options);
}
var RENAME = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/metadata/{id}/name",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be renamed */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: MetadataRename,
  response: MetadataInterface,
  name: "metadata.rename"
});
function show(input, options) {
  return call(SHOW, input, options);
}
var SHOW = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the name of the metadata key */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "metadata.show"
});
function update(input, options) {
  return call(UPDATE, input, options);
}
var UPDATE = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be replaced */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: MetadataInterface,
  response: MetadataInterface,
  name: "metadata.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/playlist.js
var playlist_exports = {};
__export(playlist_exports, {
  approveMedia: () => approveMedia,
  approvers: () => approvers,
  create: () => create,
  destroy: () => destroy2,
  history: () => history3,
  media: () => media,
  mediaRevisions: () => mediaRevisions,
  query: () => query,
  requestApproval: () => requestApproval,
  scheduleMedia: () => scheduleMedia,
  share: () => share,
  show: () => show2,
  update: () => update2,
  updateMedia: () => updateMedia,
  updateSchedule: () => updateSchedule
});
function approveMedia(input, options) {
  return call(APPROVE_MEDIA, input, options);
}
var APPROVE_MEDIA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media/approve",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ boolean(),
  name: "playlist.approveMedia"
});
function approvers(input, options) {
  return call(APPROVERS, input, options);
}
var APPROVERS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/approvers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group to find approvers for */
    group_id: /* @__PURE__ */ string()
  }, ["group_id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaylistApprover),
  name: "playlist.approvers"
});
function create(input, options) {
  return call(CREATE, input, options);
}
var CREATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group id to auto-link the new playlist to (required for non-admin callers) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: Playlist,
  response: Playlist,
  name: "playlist.create"
});
function destroy2(input, options) {
  return call(DESTROY2, input, options);
}
var DESTROY2 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/playlists/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * remove the playlist from this group instead of deleting it outright (caller needs
     * Delete or
     * Manage on the group); the playlist is deleted if no group links remain
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: "text",
  name: "playlist.destroy"
});
function history3(input, options) {
  return call(HISTORY2, input, options);
}
var HISTORY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}/history",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * only return changes to these resource types: playlists, playlist_revisions or
     * playlist_item_schedules
     */
    resource_types: /* @__PURE__ */ nullable(
      /* @__PURE__ */ array(/* @__PURE__ */ string())
    ),
    /**
     * only return changes to this resource, such as a revision or item schedule of the
     * playlist
     */
    resource_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return these kinds of change: create, update, delete, approve or restore */
    actions: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** only return changes made at or after this time, as a unix epoch */
    period_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** only return changes made before this time, as a unix epoch */
    period_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(History),
  name: "playlist.history"
});
function media(input, options) {
  return call(MEDIA, input, options);
}
var MEDIA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}/media",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: PlaylistRevision,
  name: "playlist.media"
});
function mediaRevisions(input, options) {
  return call(MEDIA_REVISIONS, input, options);
}
var MEDIA_REVISIONS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}/media/revisions",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    limit: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaylistRevision),
  name: "playlist.mediaRevisions"
});
function query(input = {}, options) {
  return call(QUERY, input, options);
}
var QUERY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter to playlists linked to this group (caller must have Read on the group) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** with group_id, also include playlists linked to readable descendant groups */
    include_child_data: /* @__PURE__ */ boolean(),
    /** case-insensitive substring search on name and description (SQL ILIKE) */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Playlist),
  name: "playlist.query"
});
function requestApproval(input, options) {
  return call(REQUEST_APPROVAL, input, options);
}
var REQUEST_APPROVAL = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media/request_approval",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** group whose approvers should be notified */
    group_id: /* @__PURE__ */ string(),
    /** notify only this approver (must have approve or manage permission in the group) */
    approver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "group_id"]),
  body: PlaylistApprovalMessage,
  response: "text",
  name: "playlist.requestApproval"
});
function scheduleMedia(input, options) {
  return call(SCHEDULE_MEDIA, input, options);
}
var SCHEDULE_MEDIA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media/schedule",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: PlaylistItemSchedule,
  response: PlaylistRevision,
  name: "playlist.scheduleMedia"
});
function share(input, options) {
  return call(SHARE, input, options);
}
var SHARE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/share",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** comma-separated playlist ids to share into the target group */
    items: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    /** target group id (must participate in the 'signage' subsystem) */
    to: /* @__PURE__ */ string()
  }, ["items", "to"]),
  body: null,
  response: /* @__PURE__ */ object({
    linked: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    already_present: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["linked", "already_present"]),
  name: "playlist.share"
});
function show2(input, options) {
  return call(SHOW2, input, options);
}
var SHOW2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Playlist,
  name: "playlist.show"
});
function update2(input, options) {
  return call(UPDATE2, input, options);
}
var UPDATE2 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/playlists/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Playlist,
  response: Playlist,
  name: "playlist.update"
});
function updateMedia(input, options) {
  return call(UPDATE_MEDIA, input, options);
}
var UPDATE_MEDIA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  response: PlaylistRevision,
  name: "playlist.updateMedia"
});
function updateSchedule(input, options) {
  return call(UPDATE_SCHEDULE, input, options);
}
var UPDATE_SCHEDULE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/playlists/{id}/media/schedule/{item_id}",
  path_keys: ["id", "item_id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    item_id: /* @__PURE__ */ string()
  }, ["id", "item_id"]),
  body: PlaylistItemSchedule,
  response: PlaylistItemSchedule,
  name: "playlist.updateSchedule"
});

// node_modules/@placeos/ts-client/dist/generated/operations/playlist-media.js
var playlist_media_exports = {};
__export(playlist_media_exports, {
  create: () => create2,
  destroy: () => destroy3,
  query: () => query2,
  removeTag: () => removeTag,
  renameTag: () => renameTag,
  share: () => share2,
  show: () => show3,
  tagCounts: () => tagCounts,
  tags: () => tags,
  thumbnail: () => thumbnail,
  update: () => update3
});
function create2(input, options) {
  return call(CREATE2, input, options);
}
var CREATE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/media",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group id to auto-link the new item to (required for non-admin callers) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: PlaylistItem,
  response: PlaylistItem,
  name: "playlist_media.create"
});
function destroy3(input, options) {
  return call(DESTROY3, input, options);
}
var DESTROY3 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/media/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * remove the item from this group instead of deleting it outright (caller needs Delete
     * or
     * Manage on the group); the item is deleted if no group links remain
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: "text",
  name: "playlist_media.destroy"
});
function query2(input = {}, options) {
  return call(QUERY2, input, options);
}
var QUERY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/media",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter to items linked to this group (caller must have Read on the group) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** with group_id, also include items linked to readable descendant groups */
    include_child_data: /* @__PURE__ */ boolean(),
    /** case-insensitive substring search on name and description (SQL ILIKE) */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return items carrying any of these tags */
    tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(PlaylistItem),
  name: "playlist_media.query"
});
function removeTag(input, options) {
  return call(REMOVE_TAG, input, options);
}
var REMOVE_TAG = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/media/tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the tag to be removed */
    tag: /* @__PURE__ */ string(),
    /** if true, removes the tag by removing all the media with this tag */
    remove_media: /* @__PURE__ */ boolean(),
    /**
     * select the media group. A single-group operation requires Read and Update, or Read
     * and Delete
     * when removing media.
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * with group_id, also include media linked to readable descendant groups. Requires
     * Update on
     * every matched item, or Delete on every matched group link when removing media.
     */
    include_child_data: /* @__PURE__ */ boolean()
  }, ["tag"]),
  body: null,
  response: "text",
  name: "playlist_media.removeTag"
});
function renameTag(input, options) {
  return call(RENAME_TAG, input, options);
}
var RENAME_TAG = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/media/tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the existing tag to be renamed */
    current_tag: /* @__PURE__ */ string(),
    /** the replacement tag name */
    new_tag: /* @__PURE__ */ string(),
    /**
     * select the media group. A single-group rename requires Read and Update on that group.
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * with group_id, also include media linked to readable descendant groups. Every matched
     * item
     * must allow Update.
     */
    include_child_data: /* @__PURE__ */ boolean()
  }, ["current_tag", "new_tag"]),
  body: null,
  response: "text",
  name: "playlist_media.renameTag"
});
function share2(input, options) {
  return call(SHARE2, input, options);
}
var SHARE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/media/share",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** comma-separated item ids to share into the target group */
    items: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    /** target group id (must participate in the 'signage' subsystem) */
    to: /* @__PURE__ */ string()
  }, ["items", "to"]),
  body: null,
  response: /* @__PURE__ */ object({
    linked: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    already_present: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["linked", "already_present"]),
  name: "playlist_media.share"
});
function show3(input, options) {
  return call(SHOW3, input, options);
}
var SHOW3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/media/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: PlaylistItem,
  name: "playlist_media.show"
});
function tagCounts(input = {}, options) {
  return call(TAG_COUNTS, input, options);
}
var TAG_COUNTS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/media/tag_counts",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** limit to media linked to this group (caller must have Read on the group) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** with group_id, also count media linked to readable descendant groups */
    include_child_data: /* @__PURE__ */ boolean()
  }),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  name: "playlist_media.tagCounts"
});
function tags(input = {}, options) {
  return call(TAGS, input, options);
}
var TAGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/media/tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** limit to media linked to this group (caller must have Read on the group) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** with group_id, also include tags on media linked to readable descendant groups */
    include_child_data: /* @__PURE__ */ boolean()
  }),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "playlist_media.tags"
});
function thumbnail(input, options) {
  return call(THUMBNAIL, input, options);
}
var THUMBNAIL = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/media/{id}/thumbnail",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "bytes",
  name: "playlist_media.thumbnail"
});
function update3(input, options) {
  return call(UPDATE3, input, options);
}
var UPDATE3 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/media/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: PlaylistItem,
  response: PlaylistItem,
  name: "playlist_media.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-templates.js
var signage_templates_exports = {};
__export(signage_templates_exports, {
  approve: () => approve,
  approvers: () => approvers2,
  create: () => create3,
  destroy: () => destroy4,
  destroyDraft: () => destroyDraft,
  query: () => query3,
  requestApproval: () => requestApproval2,
  share: () => share3,
  show: () => show4,
  update: () => update4
});
function approve(input, options) {
  return call(APPROVE, input, options);
}
var APPROVE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/templates/{id}/approve",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignageTemplate,
  name: "signage_templates.approve"
});
function approvers2(input, options) {
  return call(APPROVERS2, input, options);
}
var APPROVERS2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/templates/approvers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group to find approvers for */
    group_id: /* @__PURE__ */ string()
  }, ["group_id"]),
  body: null,
  response: /* @__PURE__ */ array(SignageTemplatesApprover),
  name: "signage_templates.approvers"
});
function create3(input, options) {
  return call(CREATE3, input, options);
}
var CREATE3 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/templates",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group id to auto-link the new template to (required for non-admin callers) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: SignageTemplate,
  response: SignageTemplate,
  name: "signage_templates.create"
});
function destroy4(input, options) {
  return call(DESTROY4, input, options);
}
var DESTROY4 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/templates/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * remove the template from this group instead of deleting it outright (caller needs
     * Delete or
     * Manage on the group); the template is deleted if no group links remain
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: "text",
  name: "signage_templates.destroy"
});
function destroyDraft(input, options) {
  return call(DESTROY_DRAFT, input, options);
}
var DESTROY_DRAFT = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/templates/{id}/draft",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "signage_templates.destroyDraft"
});
function query3(input = {}, options) {
  return call(QUERY3, input, options);
}
var QUERY3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/templates",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter to templates linked to this group (caller must have Read on the group) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** case-insensitive substring search on name and description (SQL ILIKE) */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return the approved (live) versions even when pending drafts exist */
    approved: /* @__PURE__ */ boolean(),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignageTemplate),
  name: "signage_templates.query"
});
function requestApproval2(input, options) {
  return call(REQUEST_APPROVAL2, input, options);
}
var REQUEST_APPROVAL2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/templates/{id}/request_approval",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** group whose approvers should be notified */
    group_id: /* @__PURE__ */ string(),
    /** notify only this approver (must have approve or manage permission in the group) */
    approver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "group_id"]),
  body: SignageTemplatesApprovalMessage,
  response: "text",
  name: "signage_templates.requestApproval"
});
function share3(input, options) {
  return call(SHARE3, input, options);
}
var SHARE3 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/templates/share",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** comma-separated template ids to share into the target group */
    items: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    /** target group id (must participate in the 'signage' subsystem) */
    to: /* @__PURE__ */ string()
  }, ["items", "to"]),
  body: null,
  response: /* @__PURE__ */ object({
    linked: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    already_present: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["linked", "already_present"]),
  name: "signage_templates.share"
});
function show4(input, options) {
  return call(SHOW4, input, options);
}
var SHOW4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/templates/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** return the approved (live) version even when a pending draft exists */
    approved: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: SignageTemplate,
  name: "signage_templates.show"
});
function update4(input, options) {
  return call(UPDATE4, input, options);
}
var UPDATE4 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/templates/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignageTemplate,
  response: SignageTemplate,
  name: "signage_templates.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/systems.js
var systems_exports = {};
__export(systems_exports, {
  addModule: () => addModule,
  create: () => create4,
  destroy: () => destroy5,
  execute: () => execute2,
  findByEmail: () => findByEmail,
  functions: () => functions,
  metadata: () => metadata,
  query: () => query4,
  removeModule: () => removeModule,
  settings: () => settings,
  show: () => show5,
  start: () => start,
  state: () => state,
  stateLookup: () => stateLookup,
  stop: () => stop,
  sysZones: () => sysZones,
  types: () => types,
  update: () => update5
});
function addModule(input, options) {
  return call(ADD_MODULE, input, options);
}
var ADD_MODULE = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/engine/v2/systems/{sys_id}/module/{module_id}",
  path_keys: ["sys_id", "module_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    module_id: /* @__PURE__ */ string()
  }, ["sys_id", "module_id"]),
  body: null,
  response: ControlSystem,
  name: "systems.addModule"
});
function create4(input, options) {
  return call(CREATE4, input, options);
}
var CREATE4 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: ControlSystem,
  response: ControlSystem,
  name: "systems.create"
});
function destroy5(input, options) {
  return call(DESTROY5, input, options);
}
var DESTROY5 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/systems/{sys_id}",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: "text",
  name: "systems.destroy"
});
function execute2(input, options) {
  return call(EXECUTE, input, options);
}
var EXECUTE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/{module_slug}/{method}",
  path_keys: ["sys_id", "module_slug", "method"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string(),
    /** the method to execute on the module */
    method: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug", "method"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  response: /* @__PURE__ */ json(),
  name: "systems.execute"
});
function findByEmail(input, options) {
  return call(FIND_BY_EMAIL, input, options);
}
var FIND_BY_EMAIL = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/with_emails",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** comma seperated list of emails */
    in: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["in"]),
  body: null,
  response: /* @__PURE__ */ array(ControlSystem),
  name: "systems.findByEmail"
});
function functions(input, options) {
  return call(FUNCTIONS, input, options);
}
var FUNCTIONS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/functions/{module_slug}",
  path_keys: ["sys_id", "module_slug"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug"]),
  body: null,
  response: /* @__PURE__ */ record(SystemsFunctionDetails),
  name: "systems.functions"
});
function metadata(input, options) {
  return call(METADATA, input, options);
}
var METADATA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/metadata",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "systems.metadata"
});
function query4(input = {}, options) {
  return call(QUERY4, input, options);
}
var QUERY4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return only bookable or non-bookable rooms (returns both when not specified) */
    bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** return only rooms with capacity equal or greater than that provided */
    capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /** return only systems whos resource address match one of the emails provided */
    email: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** return only rooms who have all of the features requested */
    features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** return only systems which have the module id provided */
    module_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return systems which are using the trigger id provided */
    trigger_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return systems which are in the zones provided */
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /**
     * return systems anchored by this group's GroupZone rows; non-support callers must have
     * Read on
     * the group
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * return systems in any zone the caller can reach (transitively) within the given subsystem
     * code, e.g. 'signage'
     */
    subsystem: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return systems which are public */
    public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** return systems which are signage */
    signage: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(ControlSystem),
  name: "systems.query"
});
function removeModule(input, options) {
  return call(REMOVE_MODULE, input, options);
}
var REMOVE_MODULE = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/systems/{sys_id}/module/{module_id}",
  path_keys: ["sys_id", "module_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    module_id: /* @__PURE__ */ string()
  }, ["sys_id", "module_id"]),
  body: null,
  response: ControlSystem,
  name: "systems.removeModule"
});
function settings(input, options) {
  return call(SETTINGS, input, options);
}
var SETTINGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/settings",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ array(Settings),
  name: "systems.settings"
});
function show5(input, options) {
  return call(SHOW5, input, options);
}
var SHOW5 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** return the system with the zone, module and driver information collected */
    complete: /* @__PURE__ */ boolean()
  }, ["sys_id"]),
  body: null,
  response: ControlSystem,
  name: "systems.show"
});
function start(input, options) {
  return call(START, input, options);
}
var START = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/start",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** start modules that only occur in the selected system */
    single_occurrence: /* @__PURE__ */ boolean()
  }, ["sys_id"]),
  body: null,
  response: "text",
  name: "systems.start"
});
function state(input, options) {
  return call(STATE, input, options);
}
var STATE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/{module_slug}",
  path_keys: ["sys_id", "module_slug"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ string()),
  name: "systems.state"
});
function stateLookup(input, options) {
  return call(STATE_LOOKUP, input, options);
}
var STATE_LOOKUP = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/{module_slug}/{key}",
  path_keys: ["sys_id", "module_slug", "key"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string(),
    /** the status key we are interested in */
    key: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug", "key"]),
  body: null,
  response: /* @__PURE__ */ json(),
  name: "systems.stateLookup"
});
function stop(input, options) {
  return call(STOP, input, options);
}
var STOP = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/stop",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** stop modules that only occur in the selected system */
    single_occurrence: /* @__PURE__ */ boolean()
  }, ["sys_id"]),
  body: null,
  response: "text",
  name: "systems.stop"
});
function sysZones(input, options) {
  return call(SYS_ZONES, input, options);
}
var SYS_ZONES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/zones",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ array(Zone),
  name: "systems.sysZones"
});
function types(input, options) {
  return call(TYPES, input, options);
}
var TYPES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/types",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  name: "systems.types"
});
function update5(input, options) {
  return call(UPDATE5, input, options);
}
var UPDATE5 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/systems/{sys_id}",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /**
     * must be provided to prevent overwriting newer config with old, in the case where
     * multiple
     * people might be editing a system
     */
    version: /* @__PURE__ */ integer("Int32")
  }, ["sys_id", "version"]),
  body: ControlSystem,
  response: ControlSystem,
  name: "systems.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/zones.js
var zones_exports = {};
__export(zones_exports, {
  create: () => create5,
  destroy: () => destroy6,
  metadata: () => metadata2,
  query: () => query5,
  show: () => show6,
  tags: () => tags2,
  triggerInstances: () => triggerInstances,
  update: () => update6,
  zoneExecute: () => zoneExecute
});
function create5(input, options) {
  return call(CREATE5, input, options);
}
var CREATE5 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Zone,
  response: Zone,
  name: "zones.create"
});
function destroy6(input, options) {
  return call(DESTROY6, input, options);
}
var DESTROY6 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/zones/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "zones.destroy"
});
function metadata2(input, options) {
  return call(METADATA2, input, options);
}
var METADATA2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/{id}/metadata",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** only return the metadata key we are interested in */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "zones.metadata"
});
function query5(input = {}, options) {
  return call(QUERY5, input, options);
}
var QUERY5 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * only return zones who have this zone as a parent (supports comma-separated list). Use
     * 'root'
     * to get zones with no parent
     */
    parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** return zones with particular tags */
    tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /**
     * filter to zones a group has direct GroupZone anchors on; non-support callers must have
     * Read
     * on the group. Forces include_children_count=true so callers can drill down.
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** include children_count for each zone (useful for tree views) */
    include_children_count: /* @__PURE__ */ boolean(),
    /** with group_id, include anchor zones and their descendants, excluding denied subtrees */
    descendants: /* @__PURE__ */ boolean(),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Zone),
  name: "zones.query"
});
function show6(input, options) {
  return call(SHOW6, input, options);
}
var SHOW6 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** also return any triggers associated with the zone */
    complete: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: Zone,
  name: "zones.show"
});
function tags2(input = {}, options) {
  return call(TAGS2, input, options);
}
var TAGS2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "zones.tags"
});
function triggerInstances(input, options) {
  return call(TRIGGER_INSTANCES, input, options);
}
var TRIGGER_INSTANCES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/{id}/triggers",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(Trigger),
  name: "zones.triggerInstances"
});
function update6(input, options) {
  return call(UPDATE6, input, options);
}
var UPDATE6 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/zones/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Zone,
  response: Zone,
  name: "zones.update"
});
function zoneExecute(input, options) {
  return call(ZONE_EXECUTE, input, options);
}
var ZONE_EXECUTE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/zones/{id}/exec/{module_slug}/{method}",
  path_keys: ["id", "module_slug", "method"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string(),
    /** the method to execute on the module */
    method: /* @__PURE__ */ string()
  }, ["id", "module_slug", "method"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  response: ZonesZoneExecResponse,
  name: "zones.zoneExecute"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups.js
var groups_exports = {};
__export(groups_exports, {
  create: () => create6,
  current: () => current,
  destroy: () => destroy7,
  features: () => features,
  query: () => query6,
  show: () => show7,
  syncAdGroups: () => syncAdGroups,
  update: () => update7
});
function create6(input, options) {
  return call(CREATE6, input, options);
}
var CREATE6 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Group,
  response: Group,
  name: "groups.create"
});
function current(input = {}, options) {
  return call(CURRENT, input, options);
}
var CURRENT = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups/current",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter to groups participating in this subsystem (e.g. 'signage') */
    subsystem: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(GroupsCurrentGroup),
  name: "groups.current"
});
function destroy7(input, options) {
  return call(DESTROY7, input, options);
}
var DESTROY7 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "groups.destroy"
});
function features(input, options) {
  return call(FEATURES, input, options);
}
var FEATURES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups/{id}/features",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** only return this subsystem's features */
    subsystem: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  name: "groups.features"
});
function query6(input = {}, options) {
  return call(QUERY6, input, options);
}
var QUERY6 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter by parent group id; pass 'root' for root-level groups */
    parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** case-insensitive substring search on name (SQL ILIKE) */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** include children_count for each group (useful for tree views) */
    include_children_count: /* @__PURE__ */ boolean(),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Group),
  name: "groups.query"
});
function show7(input, options) {
  return call(SHOW7, input, options);
}
var SHOW7 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Group,
  name: "groups.show"
});
function syncAdGroups(input, options) {
  return call(SYNC_AD_GROUPS, input, options);
}
var SYNC_AD_GROUPS = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/groups/ad_groups/sync",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: GroupsAdGroupSync,
  response: /* @__PURE__ */ array(GroupUser),
  name: "groups.syncAdGroups"
});
function update7(input, options) {
  return call(UPDATE7, input, options);
}
var UPDATE7 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Group,
  response: Group,
  name: "groups.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups-users.js
var groups_users_exports = {};
__export(groups_users_exports, {
  create: () => create7,
  destroy: () => destroy8,
  query: () => query7,
  show: () => show8,
  update: () => update8
});
function create7(input, options) {
  return call(CREATE7, input, options);
}
var CREATE7 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/group_users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: GroupUser,
  response: GroupUser,
  name: "groups_users.create"
});
function destroy8(input, options) {
  return call(DESTROY8, input, options);
}
var DESTROY8 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/group_users/{user_id}/{group_id}",
  path_keys: ["user_id", "group_id"],
  params: /* @__PURE__ */ parameters({
    user_id: /* @__PURE__ */ string(),
    group_id: /* @__PURE__ */ string()
  }, ["user_id", "group_id"]),
  body: null,
  response: "text",
  name: "groups_users.destroy"
});
function query7(input = {}, options) {
  return call(QUERY7, input, options);
}
var QUERY7 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(GroupUser),
  name: "groups_users.query"
});
function show8(input, options) {
  return call(SHOW8, input, options);
}
var SHOW8 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_users/{user_id}/{group_id}",
  path_keys: ["user_id", "group_id"],
  params: /* @__PURE__ */ parameters({
    user_id: /* @__PURE__ */ string(),
    group_id: /* @__PURE__ */ string()
  }, ["user_id", "group_id"]),
  body: null,
  response: GroupUser,
  name: "groups_users.show"
});
function update8(input, options) {
  return call(UPDATE8, input, options);
}
var UPDATE8 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/group_users/{user_id}/{group_id}",
  path_keys: ["user_id", "group_id"],
  params: /* @__PURE__ */ parameters({
    user_id: /* @__PURE__ */ string(),
    group_id: /* @__PURE__ */ string()
  }, ["user_id", "group_id"]),
  body: GroupUser,
  response: GroupUser,
  name: "groups_users.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups-zones.js
var groups_zones_exports = {};
__export(groups_zones_exports, {
  create: () => create8,
  destroy: () => destroy9,
  query: () => query8,
  show: () => show9,
  update: () => update9
});
function create8(input, options) {
  return call(CREATE8, input, options);
}
var CREATE8 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/group_zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: GroupZone,
  response: GroupZone,
  name: "groups_zones.create"
});
function destroy9(input, options) {
  return call(DESTROY9, input, options);
}
var DESTROY9 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/group_zones/{group_id}/{zone_id}",
  path_keys: ["group_id", "zone_id"],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ string(),
    zone_id: /* @__PURE__ */ string()
  }, ["group_id", "zone_id"]),
  body: null,
  response: "text",
  name: "groups_zones.destroy"
});
function query8(input = {}, options) {
  return call(QUERY8, input, options);
}
var QUERY8 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(GroupZone),
  name: "groups_zones.query"
});
function show9(input, options) {
  return call(SHOW9, input, options);
}
var SHOW9 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_zones/{group_id}/{zone_id}",
  path_keys: ["group_id", "zone_id"],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ string(),
    zone_id: /* @__PURE__ */ string()
  }, ["group_id", "zone_id"]),
  body: null,
  response: GroupZone,
  name: "groups_zones.show"
});
function update9(input, options) {
  return call(UPDATE9, input, options);
}
var UPDATE9 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/group_zones/{group_id}/{zone_id}",
  path_keys: ["group_id", "zone_id"],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ string(),
    zone_id: /* @__PURE__ */ string()
  }, ["group_id", "zone_id"]),
  body: GroupZone,
  response: GroupZone,
  name: "groups_zones.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-ai.js
var signage_ai_exports = {};
__export(signage_ai_exports, {
  cancel: () => cancel,
  capabilities: () => capabilities,
  claim: () => claim,
  edit: () => edit,
  generate: () => generate,
  indexJobs: () => indexJobs,
  showJob: () => showJob,
  usage: () => usage
});
function cancel(input, options) {
  return call(CANCEL, input, options);
}
var CANCEL = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/jobs/{id}/cancel",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignageAiJobResponse,
  name: "signage_ai.cancel"
});
function capabilities(input = {}, options) {
  return call(CAPABILITIES, input, options);
}
var CAPABILITIES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/capabilities",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: SignageAiCapabilities,
  name: "signage_ai.capabilities"
});
function claim(input, options) {
  return call(CLAIM, input, options);
}
var CLAIM = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/jobs/{id}/claim",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignageAiClaimParams,
  response: SignageAiJobResponse,
  name: "signage_ai.claim"
});
function edit(input, options) {
  return call(EDIT, input, options);
}
var EDIT = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/edit",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignageAiEditParams,
  response: SignageAiJobResponse,
  name: "signage_ai.edit"
});
function generate(input, options) {
  return call(GENERATE, input, options);
}
var GENERATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/generate",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignageAiGenerateParams,
  response: SignageAiJobResponse,
  name: "signage_ai.generate"
});
function indexJobs(input = {}, options) {
  return call(INDEX_JOBS, input, options);
}
var INDEX_JOBS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/jobs",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only the caller's own jobs */
    mine: /* @__PURE__ */ boolean(),
    limit: /* @__PURE__ */ integer("Int32"),
    /** generate, edit or map_edit; the image kinds when left out */
    kind: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignageAiJobResponse),
  name: "signage_ai.indexJobs"
});
function showJob(input, options) {
  return call(SHOW_JOB, input, options);
}
var SHOW_JOB = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/jobs/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** seconds to hold the request open, 0 to answer immediately */
    wait: /* @__PURE__ */ integer("Int32"),
    /** the version the caller already has */
    since: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
  }, ["id"]),
  body: null,
  response: SignageAiJobResponse,
  name: "signage_ai.showJob"
});
function usage(input = {}, options) {
  return call(USAGE, input, options);
}
var USAGE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/usage",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** unix seconds, defaults to 30 days ago */
    from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** unix seconds, defaults to now */
    to: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignageAiJobUsageRow),
  name: "signage_ai.usage"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-plugins.js
var signage_plugins_exports = {};
__export(signage_plugins_exports, {
  create: () => create9,
  destroy: () => destroy10,
  query: () => query9,
  show: () => show10,
  update: () => update10
});
function create9(input, options) {
  return call(CREATE9, input, options);
}
var CREATE9 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/plugins",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignagePlugin,
  response: SignagePlugin,
  name: "signage_plugins.create"
});
function destroy10(input, options) {
  return call(DESTROY10, input, options);
}
var DESTROY10 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/plugins/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "signage_plugins.destroy"
});
function query9(input = {}, options) {
  return call(QUERY9, input, options);
}
var QUERY9 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/plugins",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only return plugins that are enabled */
    enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** only return plugins of this type */
    plugin_type: /* @__PURE__ */ nullable(SignagePluginPluginType),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignagePlugin),
  name: "signage_plugins.query"
});
function show10(input, options) {
  return call(SHOW10, input, options);
}
var SHOW10 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/plugins/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignagePlugin,
  name: "signage_plugins.show"
});
function update10(input, options) {
  return call(UPDATE10, input, options);
}
var UPDATE10 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/plugins/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignagePlugin,
  response: SignagePlugin,
  name: "signage_plugins.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-template-mappings.js
var signage_template_mappings_exports = {};
__export(signage_template_mappings_exports, {
  create: () => create10,
  destroy: () => destroy11,
  query: () => query10,
  show: () => show11,
  update: () => update11
});
function create10(input, options) {
  return call(CREATE10, input, options);
}
var CREATE10 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/template_mappings",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignageTemplateSystemTemplate,
  response: SignageTemplateSystemTemplate,
  name: "signage_template_mappings.create"
});
function destroy11(input, options) {
  return call(DESTROY11, input, options);
}
var DESTROY11 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/template_mappings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "signage_template_mappings.destroy"
});
function query10(input = {}, options) {
  return call(QUERY10, input, options);
}
var QUERY10 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/template_mappings",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * filter to mappings applied to this display (control system id), including those applied
     * to
     * the zones it belongs to
     */
    control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** filter to mappings applied to this zone */
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** filter to mappings of this template */
    template_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignageTemplateSystemTemplate),
  name: "signage_template_mappings.query"
});
function show11(input, options) {
  return call(SHOW11, input, options);
}
var SHOW11 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/template_mappings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignageTemplateSystemTemplate,
  name: "signage_template_mappings.show"
});
function update11(input, options) {
  return call(UPDATE11, input, options);
}
var UPDATE11 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/template_mappings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignageTemplateSystemTemplate,
  response: SignageTemplateSystemTemplate,
  name: "signage_template_mappings.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/uploads.js
var uploads_exports = {};
__export(uploads_exports, {
  create: () => create11,
  destroy: () => destroy12,
  downloadProxyFileContents: () => downloadProxyFileContents,
  downloadSimpleRoute: () => downloadSimpleRoute,
  downloadSimpleRouteWithoutFileName: () => downloadSimpleRouteWithoutFileName,
  edit: () => edit2,
  finished: () => finished,
  getLink: () => getLink,
  query: () => query11,
  screenshot: () => screenshot,
  storageName: () => storageName,
  update: () => update12
});
function create11(input, options) {
  return call(CREATE11, input, options);
}
var CREATE11 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/uploads",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: UploadsUploadInfo,
  response: /* @__PURE__ */ union([
    /* @__PURE__ */ object({
      type: /* @__PURE__ */ string(),
      signature: /* @__PURE__ */ object({
        verb: /* @__PURE__ */ string(),
        url: /* @__PURE__ */ string(),
        headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
      }, ["verb", "url", "headers"]),
      part_list: /* @__PURE__ */ array(/* @__PURE__ */ integer("Int32")),
      part_data: /* @__PURE__ */ record(/* @__PURE__ */ json()),
      upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      residence: /* @__PURE__ */ string()
    }, ["type", "signature", "part_list", "part_data", "residence"]),
    /* @__PURE__ */ object({
      type: /* @__PURE__ */ string(),
      signature: /* @__PURE__ */ object({
        verb: /* @__PURE__ */ string(),
        url: /* @__PURE__ */ string(),
        headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
      }, ["verb", "url", "headers"]),
      upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      residence: /* @__PURE__ */ string()
    }, ["type", "signature", "residence"])
  ]),
  name: "uploads.create"
});
function destroy12(input, options) {
  return call(DESTROY12, input, options);
}
var DESTROY12 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/uploads/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "uploads.destroy"
});
function downloadProxyFileContents(input, options) {
  return call(DOWNLOAD_PROXY_FILE_CONTENTS, input, options);
}
var DOWNLOAD_PROXY_FILE_CONTENTS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/download",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "bytes",
  name: "uploads.downloadProxyFileContents"
});
function downloadSimpleRoute(input, options) {
  return call(DOWNLOAD_SIMPLE_ROUTE, input, options);
}
var DOWNLOAD_SIMPLE_ROUTE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/download/{api_key}/{inline}/{file_name}",
  path_keys: ["id", "api_key", "inline", "file_name"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    api_key: /* @__PURE__ */ string(),
    inline: /* @__PURE__ */ boolean(),
    file_name: /* @__PURE__ */ string()
  }, ["id", "api_key", "inline", "file_name"]),
  body: null,
  response: "bytes",
  name: "uploads.downloadSimpleRoute"
});
function downloadSimpleRouteWithoutFileName(input, options) {
  return call(DOWNLOAD_SIMPLE_ROUTE_WITHOUT_FILE_NAME, input, options);
}
var DOWNLOAD_SIMPLE_ROUTE_WITHOUT_FILE_NAME = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/download/{api_key}/{inline}",
  path_keys: ["id", "api_key", "inline"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    api_key: /* @__PURE__ */ string(),
    inline: /* @__PURE__ */ boolean()
  }, ["id", "api_key", "inline"]),
  body: null,
  response: "bytes",
  name: "uploads.downloadSimpleRouteWithoutFileName"
});
function edit2(input, options) {
  return call(EDIT2, input, options);
}
var EDIT2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/edit",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    /** file part which will be uploaded to cloud storage */
    part: /* @__PURE__ */ string(),
    /** MD5 of the part which will be uploaded to cloud storage */
    file_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "part"]),
  body: null,
  response: /* @__PURE__ */ object({
    type: /* @__PURE__ */ string(),
    signature: /* @__PURE__ */ object({
      verb: /* @__PURE__ */ string(),
      url: /* @__PURE__ */ string(),
      headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
    }, ["verb", "url", "headers"]),
    upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    body: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["type", "signature"]),
  name: "uploads.edit"
});
function finished(input, options) {
  return call(FINISHED, input, options);
}
var FINISHED = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/engine/v2/uploads/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ object({
    ok: /* @__PURE__ */ boolean()
  }, ["ok"]),
  name: "uploads.finished"
});
function getLink(input, options) {
  return call(GET_LINK, input, options);
}
var GET_LINK = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/url",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    /** Link expiry period in minutes. */
    expiry: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: "bytes",
  name: "uploads.getLink"
});
function query11(input = {}, options) {
  return call(QUERY11, input, options);
}
var QUERY11 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filters results to returns ones where file_name contains this search string */
    file_search: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32"),
    /** return uploads with particular tags */
    tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** storage id to list uploads from (defaults to authority's default storage) */
    storage_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Upload),
  name: "uploads.query"
});
function screenshot(input, options) {
  return call(SCREENSHOT, input, options);
}
var SCREENSHOT = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/uploads/screenshot",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: UploadsScreenshotInfo,
  response: Upload,
  name: "uploads.screenshot"
});
function storageName(input, options) {
  return call(STORAGE_NAME, input, options);
}
var STORAGE_NAME = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/new",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** Name of file which will be uploaded to cloud storage */
    file_name: /* @__PURE__ */ string(),
    /** Size of file which will be uploaded to cloud storage */
    file_size: /* @__PURE__ */ integer(),
    /** Mime-Type of file which will be uploaded to cloud storage */
    file_mime: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["file_name", "file_size"]),
  body: null,
  response: /* @__PURE__ */ object({
    residence: /* @__PURE__ */ string()
  }, ["residence"]),
  name: "uploads.storageName"
});
function update12(input, options) {
  return call(UPDATE12, input, options);
}
var UPDATE12 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/uploads/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    /** the next file part which we need a signed URL for */
    part: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** MD5 of the next part */
    file_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: UploadsUpdateInfo,
  response: /* @__PURE__ */ union([
    /* @__PURE__ */ object({
      ok: /* @__PURE__ */ boolean()
    }, ["ok"]),
    /* @__PURE__ */ object({
      type: /* @__PURE__ */ string(),
      signature: /* @__PURE__ */ object({
        verb: /* @__PURE__ */ string(),
        url: /* @__PURE__ */ string(),
        headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
      }, ["verb", "url", "headers"]),
      upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      body: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
    }, ["type", "signature"])
  ]),
  name: "uploads.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/users.js
var users_exports = {};
__export(users_exports, {
  create: () => create12,
  current: () => current2,
  deleteResourceToken: () => deleteResourceToken,
  destroy: () => destroy13,
  groups: () => groups,
  metadata: () => metadata3,
  query: () => query12,
  resourceToken: () => resourceToken,
  revive: () => revive,
  search: () => search,
  show: () => show12,
  update: () => update13,
  userResourceToken: () => userResourceToken
});
function create12(input, options) {
  return call(CREATE12, input, options);
}
var CREATE12 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: /* @__PURE__ */ json(),
  response: /* @__PURE__ */ union([
    UserAdminMetadataResponse,
    UserAdminResponse,
    UserPublicMetadataResponse,
    UserPublicResponse
  ]),
  name: "users.create"
});
function current2(input = {}, options) {
  return call(CURRENT2, input, options);
}
var CURRENT2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/current",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: UserAdminMetadataResponse,
  name: "users.current"
});
function deleteResourceToken(input, options) {
  return call(DELETE_RESOURCE_TOKEN, input, options);
}
var DELETE_RESOURCE_TOKEN = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/users/{id}/resource_token",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "users.deleteResourceToken"
});
function destroy13(input, options) {
  return call(DESTROY13, input, options);
}
var DESTROY13 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/users/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string(),
    force_removal: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: "text",
  name: "users.destroy"
});
function groups(input, options) {
  return call(GROUPS, input, options);
}
var GROUPS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the user emails whos group membership we are interested */
    emails: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["emails"]),
  body: null,
  response: /* @__PURE__ */ array(UserGroupResponse),
  name: "users.groups"
});
function metadata3(input, options) {
  return call(METADATA3, input, options);
}
var METADATA3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/{id}/metadata",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string(),
    /** filter metadata by a particular entry */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "users.metadata"
});
function query12(input = {}, options) {
  return call(QUERY12, input, options);
}
var QUERY12 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** include soft deleted users in the results */
    include_deleted: /* @__PURE__ */ boolean(),
    /** include user metadata in the response */
    include_metadata: /* @__PURE__ */ boolean(),
    /** admin users can view other domains, ignored for other users */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(
    /* @__PURE__ */ union([
      UserAdminMetadataResponse,
      UserAdminResponse,
      UserPublicMetadataResponse,
      UserPublicResponse
    ])
  ),
  name: "users.query"
});
function resourceToken(input = {}, options) {
  return call(RESOURCE_TOKEN, input, options);
}
var RESOURCE_TOKEN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users/resource_token",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: UserResourceToken,
  name: "users.resourceToken"
});
function revive(input, options) {
  return call(REVIVE, input, options);
}
var REVIVE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users/{id}/revive",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "users.revive"
});
function search(input, options) {
  return call(SEARCH, input, options);
}
var SEARCH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/metadata/search",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter expression in JSONPath format */
    filter: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["filter"]),
  body: null,
  response: /* @__PURE__ */ array(
    /* @__PURE__ */ union([
      UserAdminMetadataResponse,
      UserAdminResponse,
      UserPublicMetadataResponse,
      UserPublicResponse
    ])
  ),
  name: "users.search"
});
function show12(input, options) {
  return call(SHOW12, input, options);
}
var SHOW12 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string(),
    /** include user metadata in the response */
    include_metadata: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ union([
    UserAdminMetadataResponse,
    UserAdminResponse,
    UserPublicMetadataResponse,
    UserPublicResponse
  ]),
  name: "users.show"
});
function update13(input, options) {
  return call(UPDATE13, input, options);
}
var UPDATE13 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/users/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: /* @__PURE__ */ json(),
  response: /* @__PURE__ */ union([
    UserAdminMetadataResponse,
    UserAdminResponse,
    UserPublicMetadataResponse,
    UserPublicResponse
  ]),
  name: "users.update"
});
function userResourceToken(input, options) {
  return call(USER_RESOURCE_TOKEN, input, options);
}
var USER_RESOURCE_TOKEN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users/{id}/resource_token",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: UserResourceToken,
  name: "users.userResourceToken"
});

// node_modules/@placeos/ts-client/dist/auth/environment.js
var FRAME_MESSAGE_TYPE = "place-os";
function browserEnvironment(storage = "local") {
  assert(typeof window !== "undefined", "browserEnvironment runs in a browser");
  const session_store = webStorageStore(() => window.sessionStorage);
  return {
    fetch: (url, init) => globalThis.fetch(url, init),
    storage: storage === "session" ? session_store : webStorageStore(() => window.localStorage),
    session_storage: session_store,
    currentUrl: () => window.location.href,
    replaceUrl: (url) => window.history.replaceState(window.history.state, "", url),
    navigate: (url) => window.location.assign(url),
    now: () => Date.now(),
    randomValues: (bytes) => {
      crypto.getRandomValues(bytes);
    },
    wait: (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
    authorizeInFrame,
    onForeground: (listener) => {
      const onVisible = () => {
        if (document.visibilityState === "visible")
          listener();
      };
      window.addEventListener("focus", onVisible);
      document.addEventListener("visibilitychange", onVisible);
      return () => {
        window.removeEventListener("focus", onVisible);
        document.removeEventListener("visibilitychange", onVisible);
      };
    }
  };
}
function memoryStore() {
  const values = /* @__PURE__ */ new Map();
  return {
    get: (key) => values.get(key) ?? null,
    set: (key, value) => {
      values.set(key, value);
    },
    remove: (key) => {
      values.delete(key);
    },
    keys: () => [...values.keys()]
  };
}
function webStorageStore(getStorage) {
  const refused = memoryStore();
  const storageOrNull = () => {
    try {
      return getStorage();
    } catch {
      return null;
    }
  };
  return {
    get: (key) => {
      const kept = refused.get(key);
      if (kept !== null)
        return kept;
      const store = storageOrNull();
      if (store === null)
        return null;
      try {
        return store.getItem(key);
      } catch {
        return null;
      }
    },
    set: (key, value) => {
      const store = storageOrNull();
      if (store !== null && trySetItem(store, key, value)) {
        refused.remove(key);
        return;
      }
      refused.set(key, value);
    },
    remove: (key) => {
      refused.remove(key);
      try {
        storageOrNull()?.removeItem(key);
      } catch {
      }
    },
    keys: () => {
      const keys = new Set(refused.keys());
      const store = storageOrNull();
      if (store === null)
        return [...keys];
      try {
        for (let index = 0; index < store.length; index += 1) {
          const key = store.key(index);
          if (key !== null)
            keys.add(key);
        }
      } catch {
      }
      return [...keys];
    }
  };
}
function trySetItem(store, key, value) {
  try {
    store.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
function authorizeInFrame(url, timeout_ms) {
  return new Promise((resolve) => {
    const frame = document.createElement("iframe");
    frame.id = "place-authorize";
    frame.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;border:0;z-index:-1";
    const finish = (result) => {
      clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      frame.remove();
      resolve(result);
    };
    const onMessage = (event) => {
      if (event.origin !== window.location.origin)
        return;
      if (event.source !== frame.contentWindow)
        return;
      finish({ ok: true, value: event.data });
    };
    const timer = setTimeout(() => finish({ ok: false, error: "timeout" }), timeout_ms);
    frame.addEventListener("error", () => finish({ ok: false, error: "frame_error" }));
    window.addEventListener("message", onMessage);
    frame.src = url;
    document.body.appendChild(frame);
  });
}

// node_modules/@placeos/ts-client/dist/auth/hash.js
var HASH_INPUT_BYTES_MAX = 64 * 1024;
function md5Hex(text) {
  const input = new TextEncoder().encode(text);
  assert(input.length <= HASH_INPUT_BYTES_MAX, "the hash input is less than HASH_INPUT_BYTES_MAX");
  const blocks = padBlocks(input, "little");
  const state2 = new Uint32Array([1732584193, 4023233417, 2562383102, 271733878]);
  const words = new Uint32Array(16);
  for (let offset = 0; offset < blocks.length; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = readUint32(blocks, offset + index * 4, "little");
    }
    let a = state2[0] ?? 0;
    let b = state2[1] ?? 0;
    let c = state2[2] ?? 0;
    let d = state2[3] ?? 0;
    for (let step = 0; step < 64; step += 1) {
      let mix;
      let word_index;
      if (step < 16) {
        mix = b & c | ~b & d;
        word_index = step;
      } else if (step < 32) {
        mix = d & b | ~d & c;
        word_index = (5 * step + 1) % 16;
      } else if (step < 48) {
        mix = b ^ c ^ d;
        word_index = (3 * step + 5) % 16;
      } else {
        mix = c ^ (b | ~d);
        word_index = 7 * step % 16;
      }
      const sum = a + mix + (MD5_CONSTANTS[step] ?? 0) + (words[word_index] ?? 0) | 0;
      a = d;
      d = c;
      c = b;
      b = b + rotateLeft(sum, MD5_SHIFTS[step] ?? 0) | 0;
    }
    state2[0] = (state2[0] ?? 0) + a;
    state2[1] = (state2[1] ?? 0) + b;
    state2[2] = (state2[2] ?? 0) + c;
    state2[3] = (state2[3] ?? 0) + d;
  }
  let hex = "";
  for (const word of state2) {
    for (let byte = 0; byte < 4; byte += 1) {
      hex += (word >>> byte * 8 & 255).toString(16).padStart(2, "0");
    }
  }
  return hex;
}
function sha256(input) {
  assert(input.length <= HASH_INPUT_BYTES_MAX, "the hash input is less than HASH_INPUT_BYTES_MAX");
  const blocks = padBlocks(input, "big");
  const state2 = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  const words = new Uint32Array(64);
  for (let offset = 0; offset < blocks.length; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = readUint32(blocks, offset + index * 4, "big");
    }
    for (let index = 16; index < 64; index += 1) {
      const w15 = words[index - 15] ?? 0;
      const w2 = words[index - 2] ?? 0;
      const s0 = rotateRight(w15, 7) ^ rotateRight(w15, 18) ^ w15 >>> 3;
      const s1 = rotateRight(w2, 17) ^ rotateRight(w2, 19) ^ w2 >>> 10;
      words[index] = (words[index - 16] ?? 0) + s0 + (words[index - 7] ?? 0) + s1;
    }
    let a = state2[0] ?? 0;
    let b = state2[1] ?? 0;
    let c = state2[2] ?? 0;
    let d = state2[3] ?? 0;
    let e = state2[4] ?? 0;
    let f = state2[5] ?? 0;
    let g = state2[6] ?? 0;
    let h = state2[7] ?? 0;
    for (let index = 0; index < 64; index += 1) {
      const s1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
      const choice = e & f ^ ~e & g;
      const t1 = h + s1 + choice + (SHA256_CONSTANTS[index] ?? 0) + (words[index] ?? 0) | 0;
      const s0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
      const majority = a & b ^ a & c ^ b & c;
      const t2 = s0 + majority | 0;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    const results = [a, b, c, d, e, f, g, h];
    for (let index = 0; index < 8; index += 1) {
      state2[index] = (state2[index] ?? 0) + (results[index] ?? 0);
    }
  }
  const output = new Uint8Array(32);
  for (let index = 0; index < 8; index += 1) {
    const word = state2[index] ?? 0;
    output[index * 4] = word >>> 24;
    output[index * 4 + 1] = word >>> 16 & 255;
    output[index * 4 + 2] = word >>> 8 & 255;
    output[index * 4 + 3] = word & 255;
  }
  return output;
}
function base64Url(bytes) {
  let binary = "";
  for (const byte of bytes)
    binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function padBlocks(input, endian) {
  const block_count = Math.ceil((input.length + 9) / 64);
  const blocks = new Uint8Array(block_count * 64);
  blocks.set(input);
  blocks[input.length] = 128;
  const bit_length = input.length * 8;
  assert(bit_length < 2 ** 32, "the bit length fits in 32 bits");
  const length_offset = blocks.length - 8;
  for (let byte = 0; byte < 4; byte += 1) {
    const value = bit_length >>> byte * 8 & 255;
    if (endian === "little") {
      blocks[length_offset + byte] = value;
    } else {
      blocks[blocks.length - 1 - byte] = value;
    }
  }
  return blocks;
}
function readUint32(bytes, offset, endian) {
  const b0 = bytes[offset] ?? 0;
  const b1 = bytes[offset + 1] ?? 0;
  const b2 = bytes[offset + 2] ?? 0;
  const b3 = bytes[offset + 3] ?? 0;
  if (endian === "little")
    return (b0 | b1 << 8 | b2 << 16 | b3 << 24) >>> 0;
  return (b0 << 24 | b1 << 16 | b2 << 8 | b3) >>> 0;
}
function rotateLeft(value, count) {
  return value << count | value >>> 32 - count;
}
function rotateRight(value, count) {
  return value >>> count | value << 32 - count;
}
var MD5_SHIFTS = [
  7,
  12,
  17,
  22,
  7,
  12,
  17,
  22,
  7,
  12,
  17,
  22,
  7,
  12,
  17,
  22,
  5,
  9,
  14,
  20,
  5,
  9,
  14,
  20,
  5,
  9,
  14,
  20,
  5,
  9,
  14,
  20,
  4,
  11,
  16,
  23,
  4,
  11,
  16,
  23,
  4,
  11,
  16,
  23,
  4,
  11,
  16,
  23,
  6,
  10,
  15,
  21,
  6,
  10,
  15,
  21,
  6,
  10,
  15,
  21,
  6,
  10,
  15,
  21
];
var MD5_CONSTANTS = Array.from({ length: 64 }, (_, index) => Math.floor(Math.abs(Math.sin(index + 1)) * 2 ** 32) | 0);
var SHA256_CONSTANTS = [
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
];

// node_modules/@placeos/ts-client/dist/auth/session.js
var AUTHORIZE_PATH_DEFAULT = "/auth/oauth/authorize";
var TOKEN_PATH_DEFAULT = "/auth/oauth/token";
var AUTHORITY_PATH = "/auth/authority";
var LOGOUT_PATH_DEFAULT = "/logout";
var AUTHORITY_ATTEMPTS_MAX = 5;
var AUTHORITY_RETRY_MS = 300;
var AUTH_TIMEOUT_MS = 15e3;
var AUTH_RESPONSE_BYTES_MAX = 1024 * 1024;
var FRAME_TIMEOUT_MS = 15e3;
var TOKEN_EXPIRY_MARGIN_SECONDS = 300;
var TOKEN_LIFETIME_MIN_SECONDS = 60;
var TOKEN_LIFETIME_DEFAULT_SECONDS = 2 * 60 * 60;
var NONCE_LENGTH = 40;
var VERIFIER_LENGTH = 64;
var LISTENERS_MAX = 64;
var URL_LENGTH_MAX = 16 * 1024;
var DEEP_LINK_KEY = "ENGINE.auth.params";
var LOGIN_PARAMS = /* @__PURE__ */ new Set([
  "access_token",
  "code",
  "error",
  "error_description",
  "expires_in",
  "refresh_token",
  "scope",
  "state",
  "token_type",
  "x-api-key"
]);
var DEVICE_PARAMS = ["x-api-key", "trust", "trusted", "fixed_device"];
var NONCE_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var RANDOM_ROUNDS_MAX = 16;
var DomainAuthoritySchema = object({
  id: nullable(string()),
  name: string(),
  description: nullable(string()),
  /** The domain of the authority, without a port. */
  domain: string(),
  /** The login page. `{{url}}` is the URL to come back to. */
  login_url: string(),
  logout_url: string(),
  /** `true` when the user has a session on the server. */
  session: boolean(),
  production: nullable(boolean()),
  config: nullable(record(json())),
  version: nullable(string()),
  metrics: nullable(string()),
  sentry_dsn: nullable(string()),
  email_domains: nullable(array(string()))
}, ["id", "name", "domain", "login_url", "logout_url", "session"]);
var DomainAuthority = DomainAuthoritySchema;
var TokenResponse = object({
  access_token: string(),
  refresh_token: nullable(string()),
  expires_in: nullable(union([integer(), string()]))
}, ["access_token"]);
var FrameMessage = object({ type: literal([FRAME_MESSAGE_TYPE]), params: record(string()) }, [
  "type",
  "params"
]);
var NO_TOKENS = { access_token: null, refresh_token: null, expires_at_ms: 0 };
function createAuthSession(config) {
  assert(!config.base_url.endsWith("/"), "the base_url has no trailing slash");
  assert(config.redirect_uri.length > 0, "the redirect_uri is not empty");
  const environment = config.environment ?? browserEnvironment();
  const storage = environment.storage;
  const client_id = md5Hex(config.redirect_uri);
  const handle_login = config.handle_login ?? true;
  const headers = __spreadProps(__spreadValues({}, config.headers), { "X-App-Id": client_id });
  const limits = { timeout_ms: AUTH_TIMEOUT_MS, bytes_max: AUTH_RESPONSE_BYTES_MAX };
  const storageKey = (name) => `${client_id}_${name}`;
  const log3 = scopedLog("auth", { sink: config.log ?? null });
  let authority = null;
  let status = { kind: "stopped" };
  let memory_tokens = NO_TOKENS;
  let pending_code = null;
  let authorizing = null;
  let loading_authority = null;
  let renewing = null;
  let foreground_check = null;
  let removeForegroundListener = null;
  let halted = null;
  let epoch = 0;
  let logouts_pending = 0;
  const listeners = /* @__PURE__ */ new Set();
  const session = {
    client_id,
    client_auth: {
      kind: "credential",
      credential: credentialForRequest,
      rejected
    },
    start: start2,
    stop: stop2,
    authorize,
    credential: currentCredential,
    status: () => status,
    subscribe,
    authority: () => authority,
    reloadAuthority: loadAuthority,
    handleRedirect,
    useToken,
    useRefreshToken,
    useApiKey,
    invalidateToken,
    logout,
    isTrusted,
    isFixedDevice
  };
  return session;
  async function start2() {
    if (removeForegroundListener === null) {
      removeForegroundListener = environment.onForeground(onForeground);
    }
    if (status.kind === "stopped")
      setStatus({ kind: "loading" });
    log3.info("start", { fixed_device: isFixedDevice(), trusted: isTrusted() });
    halted = null;
    return authorize();
  }
  function stop2() {
    removeForegroundListener?.();
    removeForegroundListener = null;
    setStatus({ kind: "stopped" });
  }
  function authorize() {
    if (logouts_pending > 0) {
      return Promise.resolve({ ok: false, error: { kind: "logged_out" } });
    }
    if (authorizing !== null)
      return authorizing;
    const attempt_epoch = epoch;
    const attempt = Promise.resolve().then(() => runAuthorize(attempt_epoch)).finally(() => {
      authorizing = null;
    });
    authorizing = attempt;
    return attempt;
  }
  async function runAuthorize(attempt_epoch) {
    if (epoch !== attempt_epoch)
      return failed({ kind: "logged_out" });
    const redirect_outcome = readRedirectParams();
    if (redirect_outcome.kind === "denied") {
      halted = redirect_outcome.error;
      return failed(redirect_outcome.error);
    }
    if (authority === null) {
      const loaded = await loadAuthority();
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (!loaded.ok)
        return failed(loaded.error);
    }
    const known = await tokenFromKnownCredentials(attempt_epoch);
    if (epoch !== attempt_epoch)
      return failed({ kind: "logged_out" });
    if (known !== null)
      return known;
    const grant = config.grant;
    switch (grant.kind) {
      case "password": {
        log3.debug("logging in with the password grant");
        const result = await requestTokens(attempt_epoch, __spreadValues({
          grant_type: "password",
          client_id,
          redirect_uri: config.redirect_uri,
          scope: config.scope,
          username: grant.username,
          password: grant.password,
          authority: authority?.id ?? ""
        }, grant.client_secret === void 0 ? {} : { client_secret: grant.client_secret }));
        return result.ok ? signedIn(result.value) : failed(result.error);
      }
      case "entra": {
        log3.debug("exchanging the Entra token");
        const subject_token = await grant.entraToken();
        if (epoch !== attempt_epoch)
          return failed({ kind: "logged_out" });
        if (subject_token === null)
          return failed({ kind: "entra_token_missing" });
        const result = await requestTokens(attempt_epoch, __spreadValues({
          grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
          client_id,
          subject_token,
          subject_token_type: "urn:ietf:params:oauth:token-type:access_token",
          scope: config.scope
        }, grant.client_secret === void 0 ? {} : { client_secret: grant.client_secret }));
        return result.ok ? signedIn(result.value) : failed(result.error);
      }
      case "code":
      case "implicit":
        break;
      default:
        return unreachable(grant);
    }
    const late = applyLoginParams(readDeepLink());
    if (late.kind === "denied") {
      halted = late.error;
      return failed(late.error);
    }
    if (late.kind === "applied") {
      log3.debug("using the parameters of a deep link");
      const from_link = await tokenFromKnownCredentials(attempt_epoch);
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (from_link !== null)
        return from_link;
    }
    if (halted !== null)
      return failed(halted);
    if (status.kind === "redirecting")
      return { ok: false, error: status };
    const current3 = authority;
    assert(current3 !== null, "the authority is loaded");
    if (current3.session) {
      const url = createAuthorizeUrl();
      if (config.use_frame !== true)
        return redirect(url);
      log3.debug("authorizing in a hidden frame");
      const framed = await environment.authorizeInFrame(url, FRAME_TIMEOUT_MS);
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (!framed.ok)
        return failed({ kind: "frame_failed", reason: framed.error });
      const message2 = parseResponse(FrameMessage, framed.value);
      if (!message2.ok)
        return failed({ kind: "frame_failed", reason: "message_invalid" });
      const applied = applyLoginParams(new Map(Object.entries(message2.value.params)));
      switch (applied.kind) {
        case "none":
          return failed({ kind: "frame_failed", reason: "message_invalid" });
        case "state_mismatch":
          return failed({ kind: "frame_failed", reason: "state_mismatch" });
        case "denied":
          halted = applied.error;
          return failed(applied.error);
        case "applied":
          break;
        default:
          return unreachable(applied);
      }
      const from_frame = await tokenFromKnownCredentials(attempt_epoch);
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (from_frame !== null)
        return from_frame;
      return failed({ kind: "frame_failed", reason: "message_invalid" });
    }
    if (!handle_login) {
      log3.info("no session: the application shows its login");
      return failed({ kind: "login_required" });
    }
    return redirect(loginUrl(current3));
  }
  async function tokenFromKnownCredentials(attempt_epoch) {
    const current3 = currentCredential();
    if (current3 !== null) {
      log3.debug("a valid credential is found", { credential: current3.kind });
      return signedIn(current3);
    }
    if (pending_code !== null) {
      log3.debug("exchanging the code of the redirect");
      const code = pending_code;
      pending_code = null;
      const verifier = environment.session_storage.get(storageKey("code_verifier"));
      environment.session_storage.remove(storageKey("code_verifier"));
      const result = await requestTokens(attempt_epoch, __spreadValues({
        grant_type: "authorization_code",
        client_id,
        redirect_uri: config.redirect_uri,
        code
      }, verifier === null ? {} : { code_verifier: verifier }));
      if (result.ok)
        return signedIn(result.value);
      halted = result.error;
      return failed(result.error);
    }
    const refresh_token = readTokens().refresh_token;
    if (refresh_token !== null) {
      log3.debug("refreshing the access token");
      const shared = () => readTokens().refresh_token === refresh_token;
      const result = await requestTokens(attempt_epoch, {
        grant_type: "refresh_token",
        client_id,
        redirect_uri: config.redirect_uri,
        refresh_token
      }, shared);
      if (result.ok)
        return signedIn(result.value);
      if (!shared()) {
        const current4 = currentCredential();
        if (current4 !== null)
          return signedIn(current4);
        return failed({ kind: "logged_out" });
      }
      if (!isRefusal(result.error))
        return failed(result.error);
      log3.warn("the server refused the refresh token");
      writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token: null }));
    }
    return null;
  }
  async function requestTokens(attempt_epoch, params, current3 = () => true) {
    const fetched = await fetchBody(environment.fetch, serverUrl(config.token_path ?? TOKEN_PATH_DEFAULT), {
      method: "POST",
      headers: __spreadProps(__spreadValues({}, headers), {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }),
      body: new URLSearchParams(params).toString(),
      // A 307 or a 308 sends the body again, with the secrets of the grant. The token
      // endpoint has no redirect, so a redirect is an error.
      redirect: "error"
    }, limits);
    if (epoch !== attempt_epoch || !current3())
      return { ok: false, error: { kind: "logged_out" } };
    const grant = params["grant_type"] ?? "";
    if (!fetched.ok) {
      log3.error("the token request failed", { grant, error: fetched.error.kind });
      return { ok: false, error: { kind: "token_unavailable", error: fetched.error } };
    }
    const decoded = decodeJson(fetched.value.bytes);
    if (!fetched.value.ok) {
      const message2 = decoded.ok ? errorMessage(decoded.value) : null;
      const error = {
        kind: "token_rejected",
        status: fetched.value.status,
        message: message2
      };
      log3.warn("the server refused the token request", {
        grant,
        status: error.status,
        message: message2
      });
      return { ok: false, error };
    }
    if (!decoded.ok) {
      return { ok: false, error: { kind: "token_invalid", path: "$", expected: "JSON" } };
    }
    const parsed = parseResponse(TokenResponse, decoded.value);
    if (!parsed.ok)
      return { ok: false, error: __spreadValues({ kind: "token_invalid" }, parsed.error) };
    const tokens = parsed.value;
    const expires_in = tokens.expires_in === null ? null : parseSeconds(String(tokens.expires_in));
    storeTokens(tokens.access_token, tokens.refresh_token, expires_in);
    log3.info("got new tokens", { grant, expires_in_seconds: expires_in });
    return { ok: true, value: { kind: "bearer", token: tokens.access_token } };
  }
  function storeTokens(access_token, refresh_token, expires_in_seconds) {
    const lifetime_seconds = expires_in_seconds === null ? TOKEN_LIFETIME_DEFAULT_SECONDS : Math.max(TOKEN_LIFETIME_MIN_SECONDS, expires_in_seconds - TOKEN_EXPIRY_MARGIN_SECONDS);
    writeTokens({
      access_token,
      // A refresh grant can answer without a new refresh token. Keep the one we have.
      refresh_token: refresh_token ?? readTokens().refresh_token,
      expires_at_ms: environment.now() + lifetime_seconds * 1e3
    });
  }
  function currentCredential() {
    const api_key = config.ignore_api_key === true ? null : deviceValue("x-api-key");
    if (api_key !== null && api_key.length > 0)
      return { kind: "api_key", key: api_key };
    const tokens = readTokens();
    if (tokens.access_token === null)
      return null;
    if (environment.now() >= tokens.expires_at_ms)
      return null;
    return { kind: "bearer", token: tokens.access_token };
  }
  async function credentialForRequest() {
    const current3 = currentCredential();
    if (current3 !== null)
      return current3;
    const result = await authorize();
    return result.ok ? result.value : null;
  }
  function rejected(status2, used) {
    const current3 = currentCredential();
    if (current3 !== null && !sameCredential(current3, used))
      return Promise.resolve(true);
    if (renewing !== null)
      return renewing;
    const attempt = renew(status2, used).finally(() => {
      renewing = null;
    });
    renewing = attempt;
    return attempt;
  }
  async function renew(status2, used) {
    if (used.kind === "api_key")
      return false;
    log3.warn("the server refused the credential", { status: status2 });
    invalidateToken();
    if (status2 === 511) {
      if (handle_login && authority !== null)
        redirect(loginUrl(authority));
      else
        failed({ kind: "login_required" });
      return false;
    }
    const renew_epoch = epoch;
    const reloaded = await loadAuthority();
    if (!reloaded.ok)
      return false;
    if (epoch !== renew_epoch)
      return false;
    const result = await authorize();
    return result.ok;
  }
  function loadAuthority() {
    if (loading_authority !== null)
      return loading_authority;
    const attempt = runLoadAuthority().finally(() => {
      loading_authority = null;
    });
    loading_authority = attempt;
    return attempt;
  }
  async function runLoadAuthority() {
    if (authority === null && status.kind !== "redirecting")
      setStatus({ kind: "loading" });
    log3.debug("loading the authority");
    let reason = "";
    for (let attempt = 0; attempt < AUTHORITY_ATTEMPTS_MAX; attempt += 1) {
      if (attempt > 0) {
        log3.warn("the authority did not load: trying again", { attempt, reason });
        await environment.wait(AUTHORITY_RETRY_MS * attempt);
      }
      const fetched = await fetchBody(environment.fetch, serverUrl(AUTHORITY_PATH), {
        method: "GET",
        headers: __spreadProps(__spreadValues({}, headers), { Accept: "application/json" }),
        credentials: "same-origin"
      }, limits);
      if (!fetched.ok) {
        reason = fetched.error.kind;
        continue;
      }
      if (!fetched.value.ok) {
        reason = `status ${fetched.value.status}`;
        continue;
      }
      const decoded = decodeJson(fetched.value.bytes);
      if (!decoded.ok) {
        reason = "the body is not JSON";
        continue;
      }
      const parsed = parseResponse(DomainAuthority, decoded.value);
      if (!parsed.ok)
        return failed(__spreadValues({ kind: "authority_invalid" }, parsed.error));
      authority = parsed.value;
      const { id, name, version, domain, session: session2, production } = parsed.value;
      log3.group("the authority is loaded", { id });
      log3.print(`name: ${name}`);
      log3.print(`version: ${version ?? "unknown"}`);
      log3.print(`domain: ${domain}`);
      log3.print(`session: ${session2}`);
      log3.print(`production: ${production ?? "unknown"}`);
      log3.groupEnd();
      return { ok: true, value: parsed.value };
    }
    log3.error("the authority is unavailable", { attempts: AUTHORITY_ATTEMPTS_MAX, reason });
    return failed({ kind: "authority_unavailable", reason });
  }
  function readRedirectParams() {
    const url = environment.currentUrl();
    const params = urlParams(url);
    for (const name of DEVICE_PARAMS) {
      const value = params.get(name);
      if (value !== void 0)
        storage.set(storageKey(name), value);
    }
    if (hasLoginParams(params) || params.has("x-api-key")) {
      environment.replaceUrl(withoutParams(url, LOGIN_PARAMS));
    }
    return applyLoginParams(hasLoginParams(params) ? params : readDeepLink());
  }
  function readDeepLink() {
    const text = environment.session_storage.get(DEEP_LINK_KEY);
    environment.session_storage.remove(DEEP_LINK_KEY);
    if (text === null)
      return /* @__PURE__ */ new Map();
    const decoded = decodeJson(new TextEncoder().encode(text));
    if (!decoded.ok)
      return /* @__PURE__ */ new Map();
    const parsed = parseResponse(record(string()), decoded.value);
    if (!parsed.ok)
      return /* @__PURE__ */ new Map();
    return new Map(Object.entries(parsed.value));
  }
  function applyLoginParams(params) {
    if (!hasLoginParams(params))
      return { kind: "none" };
    const nonce = (params.get("state") ?? "").split(";")[0] ?? "";
    const saved = storage.get(storageKey("nonce"));
    if (saved === null || saved !== nonce) {
      log3.warn("the state of the login parameters is not the nonce of this client");
      return { kind: "state_mismatch" };
    }
    storage.remove(storageKey("nonce"));
    const denial = params.get("error");
    if (denial !== void 0) {
      const description = params.get("error_description") ?? null;
      log3.warn("the server refused the login", { error: denial, description });
      return {
        kind: "denied",
        error: { kind: "authorization_denied", error: denial, description }
      };
    }
    const code = params.get("code");
    if (code !== void 0)
      pending_code = code;
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token") ?? null;
    log3.debug("got the login parameters", {
      code: code !== void 0,
      access_token: access_token !== void 0
    });
    if (access_token !== void 0) {
      storeTokens(access_token, refresh_token, parseSeconds(params.get("expires_in") ?? null));
    } else if (refresh_token !== null) {
      writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token }));
    }
    if (status.kind === "redirecting")
      setStatus({ kind: "loading" });
    return { kind: "applied" };
  }
  function createAuthorizeUrl() {
    const nonce = randomString2(NONCE_LENGTH);
    storage.set(storageKey("nonce"), nonce);
    const response_type = isTrusted() || config.grant.kind === "code" ? "code" : "token";
    const params = new URLSearchParams({
      response_type,
      client_id,
      state: nonce,
      redirect_uri: config.redirect_uri,
      scope: config.scope
    });
    if (response_type === "code") {
      const verifier = randomString2(VERIFIER_LENGTH);
      environment.session_storage.set(storageKey("code_verifier"), verifier);
      const challenge = base64Url(sha256(new TextEncoder().encode(verifier)));
      params.set("code_challenge_method", "S256");
      params.set("code_challenge", challenge);
    }
    const base = serverUrl(config.authorize_path ?? AUTHORIZE_PATH_DEFAULT);
    return `${base}${base.includes("?") ? "&" : "?"}${params.toString()}`;
  }
  function loginUrl(current3) {
    const back = encodeURIComponent(environment.currentUrl());
    return serverUrl(current3.login_url.replace("{{url}}", back));
  }
  function serverUrl(path) {
    if (/^https?:\/\//.test(path))
      return path;
    return `${config.base_url}${path}`;
  }
  function redirect(url) {
    if (!isWebUrl(url, environment.currentUrl()))
      return failed({ kind: "navigation_refused" });
    log3.info("redirecting", { path: new URL(url, "http://base.invalid").pathname });
    setStatus({ kind: "redirecting", url });
    environment.navigate(url);
    return { ok: false, error: { kind: "redirecting", url } };
  }
  function signedIn(credential) {
    assert(credential.kind !== "none", "a session credential is a token or a key");
    if (status.kind !== "signed_in")
      log3.info("signed in", { credential: credential.kind });
    setStatus({ kind: "signed_in", credential: credential.kind });
    return { ok: true, value: credential };
  }
  function failed(error) {
    log3.warn("not signed in", { error });
    if (status.kind !== "redirecting")
      setStatus({ kind: "signed_out", error });
    return { ok: false, error };
  }
  async function handleRedirect(url) {
    const params = urlParams(url);
    if (!hasLoginParams(params))
      return { ok: false, error: { kind: "redirect_invalid" } };
    log3.debug("got a deep link");
    environment.session_storage.set(DEEP_LINK_KEY, JSON.stringify(Object.fromEntries(params)));
    if (authorizing !== null) {
      const link_epoch = epoch;
      const running = await authorizing;
      if (epoch !== link_epoch) {
        environment.session_storage.remove(DEEP_LINK_KEY);
        return { ok: false, error: { kind: "logged_out" } };
      }
      if (environment.session_storage.get(DEEP_LINK_KEY) === null)
        return running;
    }
    if (status.kind === "redirecting")
      setStatus({ kind: "loading" });
    halted = null;
    return authorize();
  }
  function onForeground() {
    if (foreground_check !== null)
      return;
    foreground_check = checkAfterForeground().finally(() => {
      foreground_check = null;
    });
  }
  async function checkAfterForeground() {
    if (authority === null)
      return;
    if (authority.session)
      return;
    if (currentCredential() !== null)
      return;
    log3.debug("the application is in the foreground without a session");
    if (status.kind === "redirecting")
      setStatus({ kind: "loading" });
    const has_new_credentials = environment.session_storage.get(DEEP_LINK_KEY) !== null || pending_code !== null || readTokens().refresh_token !== null;
    if (!has_new_credentials) {
      const check_epoch = epoch;
      const reloaded = await loadAuthority();
      if (!reloaded.ok)
        return;
      if (epoch !== check_epoch)
        return;
    }
    await authorize();
  }
  function useToken(token, expires_at_ms) {
    assert(token.length > 0, "the token is not empty");
    const expires_at = expires_at_ms ?? environment.now() + TOKEN_LIFETIME_DEFAULT_SECONDS * 1e3;
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: token, expires_at_ms: expires_at }));
    halted = null;
    log3.info("using a token of the application");
    setStatus({ kind: "signed_in", credential: "bearer" });
  }
  function useRefreshToken(refresh_token) {
    assert(refresh_token.length > 0, "the refresh token is not empty");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token }));
    halted = null;
    log3.info("using a refresh token of the application");
  }
  function useApiKey(key, options = {}) {
    assert(key.length > 0, "the API key is not empty");
    storage.set(storageKey("x-api-key"), key);
    storage.set(storageKey("trusted"), String(options.trusted ?? true));
    halted = null;
    log3.info("using an API key of the application");
    setStatus({ kind: "signed_in", credential: "api_key" });
  }
  function invalidateToken() {
    log3.debug("invalidating the access token");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: null, expires_at_ms: 0 }));
  }
  async function logout() {
    const url = authority === null ? serverUrl(LOGOUT_PATH_DEFAULT) : serverUrl(authority.logout_url);
    log3.info("logging out");
    epoch += 1;
    logouts_pending += 1;
    const page = environment.currentUrl();
    const same_origin = URL.canParse(url, page) && new URL(url, page).origin === new URL(serverUrl("/"), page).origin;
    const request_headers = same_origin ? __spreadValues({}, headers) : {};
    const access_token = readTokens().access_token;
    if (access_token !== null && same_origin) {
      request_headers["Authorization"] = `Bearer ${access_token}`;
    }
    const fetched = await fetchBody(environment.fetch, url, { method: "GET", headers: request_headers, redirect: "manual" }, limits);
    const location2 = fetched.ok ? fetched.value.headers.get("location") : null;
    clearCredentials();
    logouts_pending -= 1;
    setStatus({ kind: "signed_out", error: null });
    const target = location2 ?? url;
    if (isWebUrl(target, page))
      environment.navigate(target);
    else
      log3.warn("the logout page is not an http or https URL");
  }
  function clearCredentials() {
    for (const store of [storage, environment.session_storage]) {
      for (const key of store.keys()) {
        if (key.includes(client_id))
          store.remove(key);
      }
    }
    environment.session_storage.remove(DEEP_LINK_KEY);
    memory_tokens = NO_TOKENS;
    pending_code = null;
  }
  function isTrusted() {
    return deviceValue("trust") === "true" || deviceValue("trusted") === "true";
  }
  function isFixedDevice() {
    const api_key = deviceValue("x-api-key");
    if (config.ignore_api_key !== true && api_key !== null && api_key.length > 0)
      return true;
    return deviceValue("fixed_device") === "true";
  }
  function deviceValue(name) {
    return storage.get(storageKey(name)) ?? storage.get(name);
  }
  function readTokens() {
    if (!isTrusted())
      return memory_tokens;
    return {
      access_token: storage.get(storageKey("access_token")),
      refresh_token: storage.get(storageKey("refresh_token")),
      expires_at_ms: parseStoredMs(storage.get(storageKey("expires_at")))
    };
  }
  function writeTokens(tokens) {
    if (!isTrusted()) {
      memory_tokens = tokens;
      return;
    }
    writeStored(storageKey("access_token"), tokens.access_token);
    writeStored(storageKey("refresh_token"), tokens.refresh_token);
    writeStored(storageKey("expires_at"), String(tokens.expires_at_ms));
  }
  function writeStored(key, value) {
    if (value === null) {
      storage.remove(key);
    } else {
      storage.set(key, value);
    }
  }
  function setStatus(next) {
    status = next;
    for (const listener of [...listeners])
      listener(next);
  }
  function subscribe(listener) {
    assert(listeners.size < LISTENERS_MAX, "the session has less than LISTENERS_MAX listeners");
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }
  function randomString2(length) {
    const limit = 256 - 256 % NONCE_ALPHABET.length;
    const bytes = new Uint8Array(length * 2);
    let text = "";
    for (let round = 0; round < RANDOM_ROUNDS_MAX && text.length < length; round += 1) {
      environment.randomValues(bytes);
      for (const byte of bytes) {
        if (byte < limit && text.length < length) {
          text += NONCE_ALPHABET.charAt(byte % NONCE_ALPHABET.length);
        }
      }
    }
    assert(text.length === length, "the random source gives enough values");
    return text;
  }
}
function isWebUrl(url, page) {
  if (!URL.canParse(url, page))
    return false;
  const protocol = new URL(url, page).protocol;
  return protocol === "http:" || protocol === "https:";
}
function urlParams(url) {
  const params = /* @__PURE__ */ new Map();
  if (url.length > URL_LENGTH_MAX)
    return params;
  if (!URL.canParse(url))
    return params;
  const parsed = new URL(url);
  const hash = parsed.hash.slice(1);
  const query_start = hash.indexOf("?");
  const hash_main = query_start >= 0 ? hash.slice(0, query_start) : hash;
  const hash_query = query_start >= 0 ? hash.slice(query_start + 1) : "";
  for (const part of [hash_main, hash_query, parsed.search.slice(1)]) {
    if (!part.includes("="))
      continue;
    for (const [key, value] of new URLSearchParams(part)) {
      if (value.length > 0)
        params.set(key, value);
    }
  }
  return params;
}
function withoutParams(url, names) {
  if (!URL.canParse(url))
    return url;
  const parsed = new URL(url);
  parsed.search = removeNames(parsed.search.slice(1), names);
  const hash = parsed.hash.slice(1);
  const query_start = hash.indexOf("?");
  let hash_main = query_start >= 0 ? hash.slice(0, query_start) : hash;
  const hash_query = removeNames(query_start >= 0 ? hash.slice(query_start + 1) : "", names);
  if (hash_main.includes("="))
    hash_main = removeNames(hash_main, names);
  parsed.hash = hash_query.length > 0 ? `${hash_main}?${hash_query}` : hash_main;
  return parsed.toString();
}
function removeNames(text, names) {
  if (text.length === 0)
    return "";
  const params = new URLSearchParams(text);
  for (const name of names)
    params.delete(name);
  return params.toString();
}
function hasLoginParams(params) {
  if (params.has("code") || params.has("access_token") || params.has("refresh_token")) {
    return true;
  }
  return params.has("error") && params.has("state");
}
function isRefusal(error) {
  if (error.kind !== "token_rejected")
    return false;
  if (error.status === 408 || error.status === 429)
    return false;
  return error.status >= 400 && error.status < 500;
}
function sameCredential(a, b) {
  if (a.kind === "bearer" && b.kind === "bearer")
    return a.token === b.token;
  if (a.kind === "api_key" && b.kind === "api_key")
    return a.key === b.key;
  return a.kind === b.kind;
}
function errorMessage(body) {
  if (!isRecord(body))
    return null;
  const description = body["error_description"];
  if (typeof description === "string")
    return description;
  const error = body["error"];
  return typeof error === "string" ? error : null;
}
function parseSeconds(text) {
  if (text === null)
    return null;
  const seconds = Number(text);
  if (!Number.isSafeInteger(seconds))
    return null;
  if (seconds < 0)
    return null;
  return seconds;
}
function parseStoredMs(text) {
  if (text === null)
    return 0;
  const milliseconds = Number(text);
  return Number.isSafeInteger(milliseconds) ? milliseconds : 0;
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number2) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number2);
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

// node_modules/date-fns/formatDuration.js
var defaultFormat = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds"
];
function formatDuration(duration, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const format3 = options?.format ?? defaultFormat;
  const zero = options?.zero ?? false;
  const delimiter = options?.delimiter ?? " ";
  if (!locale.formatDistance) {
    return "";
  }
  const result = format3.reduce((acc, unit) => {
    const token = `x${unit.replace(/(^.)/, (m) => m.toUpperCase())}`;
    const value = duration[unit];
    if (value !== void 0 && (zero || duration[unit])) {
      return acc.concat(locale.formatDistance(token, value));
    }
    return acc;
  }, []).join(delimiter);
  return result;
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

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
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

// node_modules/date-fns-tz/dist/esm/_lib/tzIntlTimeZoneName/index.js
function tzIntlTimeZoneName(length, date, options) {
  const defaultOptions2 = getDefaultOptions2();
  const dtf = getDTF(length, options.timeZone, options.locale ?? defaultOptions2.locale);
  return "formatToParts" in dtf ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
function partsTimeZone(dtf, date) {
  const formatted = dtf.formatToParts(date);
  for (let i = formatted.length - 1; i >= 0; --i) {
    if (formatted[i].type === "timeZoneName") {
      return formatted[i].value;
    }
  }
  return void 0;
}
function hackyTimeZone(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, "");
  const tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}
function getDTF(length, timeZone, locale) {
  return new Intl.DateTimeFormat(locale ? [locale.code, "en-US"] : void 0, {
    timeZone,
    timeZoneName: length
  });
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
var formatters2 = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes2(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone2(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimeter
      default:
        return formatTimezone2(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes2(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone2(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimeter
      default:
        return formatTimezone2(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone2(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, options) {
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return tzIntlTimeZoneName("short", date, options);
      // Long
      case "zzzz":
      default:
        return tzIntlTimeZoneName("long", date, options);
    }
  }
};
function getTimeZoneOffset(timeZone, originalDate) {
  const timeZoneOffset = timeZone ? tzParseTimezone(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE2 : originalDate?.getTimezoneOffset() ?? 0;
  if (Number.isNaN(timeZoneOffset)) {
    throw new RangeError("Invalid time zone specified: " + timeZone);
  }
  return timeZoneOffset;
}
function addLeadingZeros2(number2, targetLength) {
  const sign = number2 < 0 ? "-" : "";
  let output = Math.abs(number2).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
function formatTimezone2(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros2(Math.floor(absOffset / 60), 2);
  const minutes = addLeadingZeros2(Math.floor(absOffset % 60), 2);
  return sign + hours + delimiter + minutes;
}
function formatTimezoneWithOptionalMinutes2(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros2(Math.abs(offset) / 60, 2);
  }
  return formatTimezone2(offset, delimiter);
}
function formatTimezoneShort2(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros2(minutes, 2);
}

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

// node_modules/date-fns-tz/dist/esm/format/index.js
var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function format2(date, formatStr, options = {}) {
  formatStr = String(formatStr);
  const matches = formatStr.match(tzFormattingTokensRegExp);
  if (matches) {
    const d = toDate2(options.originalDate || date, options);
    formatStr = matches.reduce(function(result, token) {
      if (token[0] === "'") {
        return result;
      }
      const pos = result.indexOf(token);
      const precededByQuotedSection = result[pos - 1] === "'";
      const replaced = result.replace(token, "'" + formatters2[token[0]](d, token, options) + "'");
      return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
    }, formatStr);
  }
  return format(date, formatStr, options);
}

// node_modules/date-fns-tz/dist/esm/toZonedTime/index.js
function toZonedTime(date, timeZone, options) {
  date = toDate2(date, options);
  const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  const d = new Date(date.getTime() - offsetMilliseconds);
  const resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
  return resultDate;
}

// node_modules/date-fns-tz/dist/esm/formatInTimeZone/index.js
function formatInTimeZone(date, timeZone, formatStr, options) {
  options = __spreadProps(__spreadValues({}, options), {
    timeZone,
    originalDate: date
  });
  return format2(toZonedTime(date, timeZone, { timeZone: options.timeZone }), formatStr, options);
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

// node_modules/date-fns-tz/dist/esm/getTimezoneOffset/index.js
function getTimezoneOffset(timeZone, date) {
  return -tzParseTimezone(timeZone, date);
}

// libs/common/src/lib/notifications.ts
var _service = null;
var _loader = null;
var _loading = null;
var _disable_logging = false;
var _filter = null;
function setNotifyOutlet(outlet, disable_logging = false) {
  _service = typeof outlet === "function" ? null : outlet;
  _loader = typeof outlet === "function" ? outlet : null;
  _loading = null;
  _disable_logging = disable_logging;
}
function lazySnackbar() {
  const injector = inject(EnvironmentInjector);
  return () => import("./snack-bar-J7YPI4DH.js").then(({ MatSnackBar }) => injector.get(MatSnackBar));
}
function notify(type, message2, action = "OK", on_action, config = {}) {
  if (!_service && !_loader) {
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
  if (_service)
    return open(_service);
  const loading = _loading ??= _loader();
  loading.then((snackbar) => {
    if (_loading !== loading)
      return;
    _service = snackbar;
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
function notifyWarn(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  notify("warn", msg, action, on_action, config);
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
var TIMEZONE_OFFSET_STRINGS = {};
function getTimezoneOffsetString(tz, date = /* @__PURE__ */ new Date()) {
  const offset = getTimezoneOffsetInMinutes(tz, date);
  const cache_key = `${tz}:${offset}`;
  if (TIMEZONE_OFFSET_STRINGS[cache_key]) {
    return TIMEZONE_OFFSET_STRINGS[cache_key];
  }
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const output = `${offset >= 0 ? "+" : "-"}${padLength(hours, 2)}${padLength(minutes, 2)}`;
  TIMEZONE_OFFSET_STRINGS[cache_key] = output;
  return output;
}
function getTimezoneOffsetInMinutes(timeZone, date = /* @__PURE__ */ new Date()) {
  const options = {
    timeZone,
    hour12: false,
    timeZoneName: "shortOffset"
  };
  let formatter;
  try {
    formatter = new Intl.DateTimeFormat([], options);
  } catch (e) {
    if (e instanceof RangeError) {
      return getTimezoneOffset(timeZone, date) / 60 / 1e3;
    }
    throw e;
  }
  const parts = formatter.formatToParts(date);
  const tzOffsetPart = parts.find((part) => part.type === "timeZoneName");
  const tzOffsetString = tzOffsetPart ? tzOffsetPart.value : "GMT";
  const offsetMatch = tzOffsetString.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
  if (!offsetMatch) {
    return 0;
  }
  const sign = offsetMatch[1] === "+" ? 1 : -1;
  const hours = parseInt(offsetMatch[2], 10);
  const minutes = offsetMatch[3] ? parseInt(offsetMatch[3], 10) : 0;
  return sign * (hours * 60 + minutes);
}
function getTimeInTimezone(date, tz) {
  if (!tz) {
    const d = new Date(date);
    return { hours: d.getHours(), minutes: d.getMinutes() };
  }
  const zoned = toZonedTime(date, tz);
  return { hours: zoned.getHours(), minutes: zoned.getMinutes() };
}
function formatTimeInTimezone(date, tz) {
  const { hours, minutes } = getTimeInTimezone(date, tz);
  return `${padLength(hours, 2)}:${padLength(minutes, 2)}`;
}
function setTimeInTimezone(date, hours, minutes, tz) {
  if (!tz) {
    const d = set(new Date(date), { hours, minutes });
    return startOfMinute(d).valueOf();
  }
  const zoned = toZonedTime(date, tz);
  const adjusted = set(zoned, { hours, minutes });
  return startOfMinute(fromZonedTime(adjusted, tz)).valueOf();
}

// libs/common/src/lib/general.ts
var _user_date_change = false;
var _user_date_change_timeout;
function markUserDateChange() {
  _user_date_change = true;
  if (_user_date_change_timeout)
    clearTimeout(_user_date_change_timeout);
  _user_date_change_timeout = setTimeout(() => _user_date_change = false, 300);
}
var _app_name = "APP";
var _debug_logging = false;
function setAppName(name) {
  _app_name = name;
}
function appName() {
  return _app_name;
}
function setDebugLogging(enabled) {
  _debug_logging = enabled;
}
function log2(type, msg, args, stream = "debug", force = false, app_name = _app_name) {
  if (window.jest)
    return;
  if (window.debug || force || _debug_logging) {
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
  const logger = (msg, ...args) => log2(scope, msg, args, "debug");
  logger.debug = (msg, ...args) => log2(scope, msg, args, "debug"), logger.info = (msg, ...args) => log2(scope, msg, args, "info");
  logger.error = (msg, ...args) => log2(scope, msg, args, "error");
  logger.warn = (msg, ...args) => log2(scope, msg, args, "warn");
  logger.log = (msg, ...args) => log2(scope, msg, args, "log");
  return logger;
}
function padLength(value, length = 2, character = "0") {
  return `${value}`.padStart(length, character);
}
function getItemWithKeys(keys, map2) {
  const key = keys[0];
  if (map2 && typeof map2 === "object" && key in map2) {
    return keys.length > 1 ? getItemWithKeys(keys.slice(1), map2[key] || {}) : map2[key];
  }
  return null;
}
function cleanObject(object2, remove) {
  for (const key of Object.keys(object2)) {
    if (remove.includes(object2[key]))
      delete object2[key];
  }
  return object2;
}
function unique(array2 = [], key = "") {
  const keys = /* @__PURE__ */ new Set();
  return array2.filter((el) => {
    const id = key ? el[key] : el;
    if (keys.has(id))
      return false;
    keys.add(id);
    return true;
  });
}
function randomInt(ceil, floor = 0) {
  return Math.floor(Math.random() * (ceil - floor)) + floor;
}
function randomString(length, chars = "abcdefghijklmnopqrstwvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[randomInt(chars.length)];
  }
  return str;
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
function sfc32(a, b, c, d) {
  return function() {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = a + b | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    d = d + 1 | 0;
    t = t + d | 0;
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
function parseWebUrl(url, base) {
  try {
    const parsed = new URL(url, base);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed : null;
  } catch {
    return null;
  }
}
function formatDuration2({ days, hours, minutes, seconds }, { zero } = {}) {
  if (!i18nAvailable()) {
    return formatDuration({ days, hours, minutes, seconds }, { zero });
  }
  const value = [];
  if (days || zero && days === 0)
    value.push(`${i18n(days === 1 ? "COMMON.TIME_DAY" : "COMMON.TIME_DAYS", { days })}`);
  if (hours || zero && hours === 0)
    value.push(`${i18n(hours === 1 ? "COMMON.TIME_HOUR" : "COMMON.TIME_HOURS", { hours })}`);
  if (minutes || zero && minutes === 0)
    value.push(`${i18n(minutes === 1 ? "COMMON.TIME_MINUTE" : "COMMON.TIME_MINUTES", { minutes })}`);
  if (seconds || zero && seconds === 0)
    value.push(`${i18n(seconds === 1 ? "COMMON.TIME_SECOND" : "COMMON.TIME_SECONDS", { seconds })}`);
  return value.join(" ");
}
function firstTruthyValueFrom(obs) {
  return obs ? lastValueFrom(obs.pipe(first((_) => !!_))) : Promise.resolve(null);
}
function withTimeout(promise, timeout_ms, message2 = "Operation timed out.", on_timeout) {
  if (timeout_ms <= 0)
    return promise;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      on_timeout?.();
      reject(new Error(message2));
    }, timeout_ms);
    promise.then((value) => {
      clearTimeout(timer);
      resolve(value);
    }, (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}
async function mapWithLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index]);
    }
  };
  const count = Math.max(1, Math.min(limit, items.length));
  await Promise.all(Array.from({ length: count }, worker));
  return results;
}
function errorMessage2(error) {
  if (typeof error === "string")
    return error;
  if (error instanceof Error)
    return error.message || "";
  const value = error;
  if (typeof value?.error === "string")
    return value.error;
  if (typeof value?.message === "string")
    return value.message;
  if (typeof value?.error?.message === "string")
    return value.error.message;
  return "";
}
async function responseErrorMessage(error) {
  if (error instanceof CallFailed && error.error.kind === "http") {
    const { body: body2, text, status } = error.error;
    const plain = text?.trim() ?? "";
    const readable = plain && !plain.startsWith("<") ? plain : "";
    return errorMessage2(body2) || readable || `${status}`;
  }
  if (!(error instanceof Response))
    return errorMessage2(error);
  const type = (error.headers.get("content-type") || "").toLowerCase();
  const body = await error.clone().text().catch(() => "");
  let message2 = "";
  if (type.includes("json")) {
    try {
      message2 = errorMessage2(JSON.parse(body));
    } catch {
      message2 = "";
    }
  } else if (type.includes("text/plain")) {
    message2 = body.trim();
  }
  return message2 || `${error.status} ${error.statusText}`.trim();
}

// libs/common/src/lib/locale.service.ts
var _service2;
function setTranslationService(service) {
  _service2 = service;
}
function i18nAvailable() {
  return !!_service2;
}
function i18n(key, args = {}, plural = 0) {
  if (!_service2)
    return key;
  return _service2.get(key, args, plural);
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
    document.documentElement.lang = locale;
    log2("LOCALE", `Locale set to "${locale}"`);
  }
  async _loadLocale(locale) {
    const cached = this._cachedMappings(locale);
    if (cached && !this._locale_mappings[locale]) {
      this._locale_mappings[locale] = cached;
      this._changes.update((value) => value + 1);
    }
    let locale_data;
    try {
      const resp = await fetch(`${this.locale_folder}/${locale}.json`);
      if (!resp.ok)
        throw resp;
      locale_data = await resp.json();
    } catch (error) {
      delete this._load_promises[locale];
      return console.error(`Failed to load locale file for "${locale}".`, error);
    }
    const base_locale_values = removeNesting(locale_data);
    const override_locale_values = removeNesting(await this._loadOverrides(locale));
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
  /**
   * Zone metadata values that replace the locale file values.
   * Returns no values when the request fails, so the locale file still loads.
   */
  async _loadOverrides(locale) {
    if (!this.zone_id)
      return {};
    try {
      const name = `locale_${locale}`;
      const map2 = await metadata_exports.show({ id: this.zone_id, name }).then(orThrow);
      return map2[name]?.details ?? {};
    } catch (error) {
      console.error(`Failed to load locale overrides for "${locale}".`, error);
      return {};
    }
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

// node_modules/@angular/forms/fesm2022/forms.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "checkbox", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "checkbox", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox]:not([ngNoCva])[formControlName],input[type=checkbox]:not([ngNoCva])[formControl],input[type=checkbox]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "formControlName", "", 3, "ngNoCva", ""], ["input", "formControl", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "formControl", "", 3, "ngNoCva", ""], ["input", "ngModel", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "ngModel", "", 3, "ngNoCva", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage3 = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage3 += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage3);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current3 = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current3, v)) {
      current3.push(v);
    }
  });
  return current3;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("22.1.5");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!hasOwnControl(controls, key)) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _hasRequired = signal(false, ...ngDevMode ? [{
    debugName: "_hasRequired"
  }] : []);
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
    this._updateHasRequiredValidator();
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status === PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
    this._updateHasRequiredValidator();
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
  _updateHasRequiredValidator() {
    untracked(() => this._hasRequired.set(this.hasValidator(Validators.required)));
  }
};
function hasOwnControl(controls, name) {
  return Object.hasOwn(controls, name);
}
function isNativeFormElement(element) {
  return element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA";
}
function elementAcceptsMinMax(element) {
  if (element.tagName !== "INPUT") {
    return false;
  }
  const type = element.type;
  return type === "number" || type === "range" || type === "date" || type === "month";
}
function isTextualFormElement(element) {
  return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}
function setNativeDomProperty(renderer, element, name, value) {
  switch (name) {
    case "name":
      renderer.setAttribute(element, name, value);
      break;
    case "disabled":
    case "readonly":
    case "required":
      if (value) {
        renderer.setAttribute(element, name, "");
      } else {
        renderer.removeAttribute(element, name);
      }
      break;
    case "max":
    case "min":
    case "minLength":
    case "maxLength":
      if (value !== void 0) {
        renderer.setAttribute(element, name, value.toString());
      } else {
        renderer.removeAttribute(element, name);
      }
      break;
  }
}
var ReactiveValidationError = class {
  kind;
  context;
  control;
  message;
  constructor({
    kind,
    context,
    control
  }) {
    this.kind = kind;
    this.context = context;
    this.control = control;
  }
};
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input) {
    return input != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input) => toFloat(input);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input) => toFloat(input);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input) => requiredValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input) => emailValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input) => input;
  createValidator = (input) => patternValidator(input);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var \u0275FORM_CONTROL_INTEGRATION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_CONTROL_INTEGRATION" : "");
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControlValueAccessor(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message2) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message2} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!Object.hasOwn(changes, "model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var NG_CONTROL_INTEGRATION_PROVIDER = {
  provide: \u0275FORM_CONTROL_INTEGRATION,
  useFactory: () => {
    const control = inject(NgControl, {
      self: true
    });
    return {
      setParseErrors: (source) => {
        control.setParseErrorSource(source);
      },
      set onReset(callback) {
        control.onReset = callback;
      }
    };
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
  isCustomControlBased = false;
  userOnReset;
  resetSubscription;
  set onReset(callback) {
    this.userOnReset = callback;
    this.resetSubscription?.unsubscribe();
    this.resetSubscription = void 0;
    if (this.control) {
      this.resetSubscription = this.control.events.subscribe((event) => {
        if (event instanceof FormResetEvent && this.control) {
          this.userOnReset?.(this.control.value);
        }
      });
      this.subscription?.add(this.resetSubscription);
    }
  }
  isNativeFormElement = false;
  rawValueAccessors;
  _selectedValueAccessor = null;
  get selectedValueAccessor() {
    return this._selectedValueAccessor ??= selectValueAccessor(this, this.rawValueAccessors);
  }
  parseErrorsValidator = null;
  renderer;
  injector;
  requiredValidatorViaDi;
  subscription;
  customControlBindings = null;
  constructor(injector, renderer, rawValueAccessors) {
    super();
    this.injector = injector;
    this.renderer = renderer;
    this.rawValueAccessors = rawValueAccessors;
    this.injector?.get(DestroyRef)?.onDestroy(() => {
      this.removeParseErrorsValidator(this.control);
      this.subscription?.unsubscribe();
    });
  }
  setupCustomControl() {
    this.subscription?.unsubscribe();
    const cdr = this.injector?.get(ChangeDetectorRef);
    if (!this.control || !cdr) {
      return;
    }
    const markForCheck = cdr.markForCheck.bind(cdr);
    this.subscription = new Subscription();
    this.subscription.add(this.control.valueChanges.subscribe(markForCheck));
    this.subscription.add(this.control.statusChanges.subscribe(markForCheck));
    this.resetSubscription?.unsubscribe();
    this.resetSubscription = void 0;
    if (this.userOnReset) {
      this.resetSubscription = this.control.events.subscribe((event) => {
        if (event instanceof FormResetEvent && this.control) {
          this.userOnReset?.(this.control.value);
        }
      });
      this.subscription.add(this.resetSubscription);
    }
    if (this.parseErrorsValidator) {
      this.control.addValidators(this.parseErrorsValidator);
    }
  }
  ngControlCreate(host) {
    const hasNgNoCva = host.nativeElement.hasAttribute?.("ngNoCva");
    const hasCva = !hasNgNoCva && (this.rawValueAccessors && this.rawValueAccessors.length > 0 || this.valueAccessor !== null);
    if (hasCva || !host.customControl) {
      return;
    }
    this.isCustomControlBased = true;
    host.listenToCustomControlModel((value) => {
      this.control?.setValue(value, {
        emitModelToViewChange: false
      });
      this.control?.markAsDirty();
      this.viewToModelUpdate(value);
    });
    host.listenToCustomControlOutput("touch", () => {
      this.control?.markAsTouched();
    });
    this.customControlBindings = {};
    this.isNativeFormElement = isNativeFormElement(host.nativeElement);
    this.requiredValidatorViaDi = this._rawValidators.find((v) => v instanceof RequiredValidator);
  }
  ngControlUpdate(host, bindRequired) {
    if (!this.isCustomControlBased) {
      return;
    }
    const control = this.control;
    const bindings = this.customControlBindings;
    if (!Object.is(bindings.value, control.value)) {
      bindings.value = control.value;
      host.setCustomControlModelInput(control.value);
    }
    this.bindControlProperty(host, bindings, "touched", control.touched);
    this.bindControlProperty(host, bindings, "dirty", control.dirty);
    this.bindControlProperty(host, bindings, "valid", control.valid);
    this.bindControlProperty(host, bindings, "invalid", control.invalid);
    this.bindControlProperty(host, bindings, "pending", control.pending);
    this.bindControlProperty(host, bindings, "disabled", control.disabled);
    if (this.shouldBindRequired) {
      this.bindControlProperty(host, bindings, "required", this.isRequired);
    }
    const errorObject = control.errors;
    if (bindings.errors !== errorObject) {
      bindings.errors = errorObject;
      const errorArray = this._convertErrors(errorObject);
      host.setInputOnDirectives("errors", errorArray);
    }
  }
  get isRequired() {
    return (this.requiredValidatorViaDi?._enabled || this.control?._hasRequired()) ?? false;
  }
  get shouldBindRequired() {
    return true;
  }
  bindControlProperty(host, bindings, name, value) {
    if (bindings[name] === value) {
      return;
    }
    bindings[name] = value;
    const wasSet = host.setInputOnDirectives(name, value);
    if (this.isNativeFormElement && !wasSet && (name === "disabled" || name === "required") && this.renderer) {
      setNativeDomProperty(this.renderer, host.nativeElement, name, value);
    }
  }
  _convertErrors(errors) {
    if (errors === null) {
      return [];
    }
    const control = this.control;
    return Object.entries(errors).map(([kind, context]) => {
      return new ReactiveValidationError({
        context,
        kind,
        control
      });
    });
  }
  setParseErrorSource(parseErrors) {
    if (parseErrors === void 0) {
      return;
    }
    let convertedErrors = null;
    const convertedParseErrors = computed(() => {
      const rawErrors = parseErrors();
      if (rawErrors.length === 0) {
        return null;
      }
      return rawErrors.reduce((acc, err) => {
        acc[err.kind] = err;
        return acc;
      }, {});
    }, ...ngDevMode ? [{
      debugName: "convertedParseErrors"
    }] : []);
    this.parseErrorsValidator = (() => convertedErrors).bind(this);
    effect(() => {
      convertedErrors = convertedParseErrors();
      this.control?.updateValueAndValidity({
        emitEvent: false
      });
    }, {
      injector: this.injector
    });
  }
  removeParseErrorsValidator(control) {
    if (this.parseErrorsValidator) {
      control?.removeValidators(this.parseErrorsValidator);
      control?.updateValueAndValidity({
        emitEvent: false
      });
    }
  }
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    const existingControl = this._find(name);
    if (existingControl) return existingControl;
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    const existingControl = this._find(name);
    if (existingControl) existingControl._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    const existingControl = this._find(name);
    if (existingControl) existingControl._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this._find(controlName)?.enabled === true;
  }
  setValue(value, options = {}) {
    untracked(() => {
      assertAllValuesPresent(this, true, value);
      Object.keys(value).forEach((name) => {
        assertControlPresent(this, true, name);
        this.controls[name].setValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    });
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const existingControl = this._find(name);
      if (existingControl) {
        existingControl.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return hasOwnControl(this.controls, name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      dir._setupWithForm(this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    untracked(() => {
      this.value = this._pendingValue = value;
      if (this._onChange.length && options.emitModelToViewChange !== false) {
        this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
      }
      this.updateValueAndValidity(options);
    });
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function ngModelInChildComponentWarning(containerTypeName) {
  return formatRuntimeError(-1354, `ngModel on a form control inside a child component cannot register with the ${containerTypeName} in the parent component because @Host() stops injection at the component boundary. To register this control with the parent form, add viewProviders to the child component: @Component({ ..., viewProviders: [{ provide: ControlContainer, useExisting: ${containerTypeName} }] }). Or, to opt out of form registration, use [ngModelOptions]="{standalone: true}".`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (Object.hasOwn(changes, "form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    dir._setupWithForm(ctrl, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          dir._setupWithForm(newCtrl, this.callSetDisabledState);
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  _ngModelInjector;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState, injector, renderer) {
    super(injector, renderer, valueAccessors);
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      this._ngModelInjector = injector;
    }
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    if (!this._registered && (typeof ngDevMode === "undefined" || ngDevMode) && this._parent === null && !this.options?.standalone) {
      const parentContainer = this._ngModelInjector?.get(ControlContainer, null);
      if (parentContainer != null) {
        const typeName = parentContainer instanceof NgForm ? "NgForm" : parentContainer instanceof FormGroupDirective ? "FormGroupDirective" : parentContainer instanceof NgModelGroup ? "NgModelGroup" : parentContainer.constructor.name || "ControlContainer";
        console.warn(ngModelInChildComponentWarning(typeName));
      }
    }
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  \u0275ngControlCreate(host) {
    super.ngControlCreate(host);
  }
  \u0275ngControlUpdate(host) {
    super.ngControlUpdate(host, false);
  }
  get shouldBindRequired() {
    return false;
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    if (!this.isCustomControlBased) {
      this.valueAccessor ??= this.selectedValueAccessor;
      setUpControlValueAccessor(this.control, this, this.callSetDisabledState);
    } else {
      this.setupCustomControl();
    }
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _setupWithForm(callSetDisabledState) {
    if (!this.isCustomControlBased) {
      this.valueAccessor ??= this.selectedValueAccessor;
      setUpControlValueAccessor(this.control, this, callSetDisabledState);
    } else {
      this.setupCustomControl();
    }
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8), \u0275\u0275directiveInject(Injector, 8), \u0275\u0275directiveInject(Renderer2, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275ControlFeature(null)]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }, {
    type: Injector,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "number", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "number", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number]:not([ngNoCva])[formControlName],input[type=number]:not([ngNoCva])[formControl],input[type=number]:not([ngNoCva])[ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Service
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnChanges(changes) {
    const control = this._control?.control;
    if (changes["value"] && control) {
      this.writeValue(control.value);
    }
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "radio", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "radio", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio]:not([ngNoCva])[formControlName],input[type=radio]:not([ngNoCva])[formControl],input[type=radio]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "range", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "range", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range]:not([ngNoCva])[formControlName],input[type=range]:not([ngNoCva])[formControl],input[type=range]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    untracked(() => {
      assertAllValuesPresent(this, false, value);
      value.forEach((newValue, index) => {
        assertControlPresent(this, false, index);
        this.at(index).setValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    });
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState, renderer, injector) {
    super(injector, renderer, valueAccessors);
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
        this.removeParseErrorsValidator(previousForm);
      }
      if (!this.isCustomControlBased) {
        this.valueAccessor ??= this.selectedValueAccessor;
        setUpControlValueAccessor(this.form, this, this.callSetDisabledState);
      } else {
        this.setupCustomControl();
      }
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return Object.hasOwn(changes, "form");
  }
  \u0275ngControlCreate(host) {
    super.ngControlCreate(host);
  }
  \u0275ngControlUpdate(host) {
    super.ngControlUpdate(host, true);
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8), \u0275\u0275directiveInject(Renderer2, 8), \u0275\u0275directiveInject(Injector, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275ControlFeature(null)]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }, {
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Injector,
    decorators: [{
      type: Optional
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig, renderer, injector) {
    super(injector, renderer, valueAccessors);
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _setupWithForm(control, callSetDisabledState) {
    this.control = control;
    if (!this.isCustomControlBased) {
      this.valueAccessor ??= this.selectedValueAccessor;
      setUpControlValueAccessor(control, this, callSetDisabledState);
    } else {
      this.setupCustomControl();
    }
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  \u0275ngControlCreate(host) {
    super.ngControlCreate(host);
  }
  \u0275ngControlUpdate(host) {
    if (!this.isCustomControlBased) {
      return;
    }
    if (!this._added) this._setUpControl();
    super.ngControlUpdate(host, true);
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(Renderer2, 8), \u0275\u0275directiveInject(Injector, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275ControlFeature(null)]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Injector,
    decorators: [{
      type: Optional
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", "", 3, "ngNoCva", ""], ["select", "formControl", "", 3, "multiple", "", 3, "ngNoCva", ""], ["select", "ngModel", "", 3, "multiple", "", 3, "ngNoCva", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple]):not([ngNoCva])[formControlName],select:not([multiple]):not([ngNoCva])[formControl],select:not([multiple]):not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, id) => {
        opt._setSelected(ids.indexOf(id) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", "", 3, "ngNoCva", ""], ["select", "multiple", "", "formControl", "", 3, "ngNoCva", ""], ["select", "multiple", "", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple]:not([ngNoCva])[formControlName],select[multiple]:not([ngNoCva])[formControl],select[multiple]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Service
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)()
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Service,
    args: [{
      factory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = function UntypedFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UntypedFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Service
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

export {
  minutesInMonth,
  minutesInDay,
  constructFrom,
  toDate,
  addDays,
  addHours,
  getDefaultOptions,
  startOfWeek,
  getTimezoneOffsetInMilliseconds,
  normalizeDates,
  startOfDay,
  differenceInCalendarDays,
  addMinutes,
  isSameDay,
  isValid,
  getRoundingMethod,
  differenceInMilliseconds,
  differenceInMinutes,
  endOfDay,
  enUS,
  format,
  startOfMinute,
  set,
  MediaAnimation,
  assert,
  consoleLog,
  registerMockEndpoint,
  mockFetch,
  string,
  boolean,
  json,
  nullable,
  array,
  record,
  object,
  parameters,
  parseResponse,
  configure,
  operation,
  call,
  splitModuleSlug,
  createRealtime,
  registerSystem,
  mockSystem,
  mockRealtimeEnvironment,
  CallFailed,
  orThrow,
  orThrowPage,
  toZonedTime,
  formatInTimeZone,
  fromZonedTime,
  browserEnvironment,
  createAuthSession,
  Zone,
  Playlist,
  PlaylistItem,
  SignageTemplate,
  SignageTemplateSystemTemplate,
  ControlSystem,
  PlaylistItemSchedule,
  groups_exports,
  groups_users_exports,
  groups_zones_exports,
  metadata_exports,
  playlist_exports,
  playlist_media_exports,
  signage_ai_exports,
  signage_plugins_exports,
  signage_template_mappings_exports,
  signage_templates_exports,
  systems_exports,
  uploads_exports,
  users_exports,
  zones_exports,
  setTranslationService,
  i18n,
  LocaleService,
  setNotifyOutlet,
  lazySnackbar,
  notifySuccess,
  notifyError,
  notifyWarn,
  notifyInfo,
  LOCAL_TIMEZONE,
  startOfDayInTimezone,
  endOfDayInTimezone,
  getTimezoneOffsetString,
  getTimeInTimezone,
  formatTimeInTimezone,
  setTimeInTimezone,
  markUserDateChange,
  setAppName,
  appName,
  setDebugLogging,
  log2 as log,
  scoped_log,
  padLength,
  getItemWithKeys,
  cleanObject,
  unique,
  randomInt,
  randomString,
  downloadFile,
  timePeriodsIntersect,
  predictableRandomInt,
  removeEmptyFields,
  capitalizeFirstLetter,
  parseWebUrl,
  formatDuration2 as formatDuration,
  firstTruthyValueFrom,
  withTimeout,
  mapWithLimit,
  responseErrorMessage,
  NG_VALUE_ACCESSOR,
  DefaultValueAccessor,
  NG_VALIDATORS,
  Validators,
  AbstractControl,
  isNativeFormElement,
  elementAcceptsMinMax,
  isTextualFormElement,
  setNativeDomProperty,
  RequiredValidator,
  ɵFORM_CONTROL_INTEGRATION,
  selectValueAccessor,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroup,
  NgForm,
  FormControl,
  FormGroupDirective,
  NgModel,
  ɵNgNoValidate,
  NumberValueAccessor,
  FormControlName,
  SelectControlValueAccessor,
  NgSelectOption,
  ɵNgSelectMultipleOption,
  FormsModule,
  ReactiveFormsModule
};
//# debugId=a51af2c7-b382-5ecd-a739-cc7025fa297f
//# sourceMappingURL=chunk-ZHBO75B7.js.map
