import {
  RichTextInputComponent
} from "./chunk-RH3UEPAX.js";
import {
  SpacesService
} from "./chunk-GVWCSS27.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-IKIBURHT.js";
import {
  ExploreStateService
} from "./chunk-USIDNLBN.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  TimeFieldComponent
} from "./chunk-O7BNIRKX.js";
import {
  EventFormService,
  newCalendarEventFromBooking,
  queryEvents,
  removeEvent,
  requestSpacesForZone
} from "./chunk-QDNELNUR.js";
import {
  ParkingService
} from "./chunk-AKIWDU2V.js";
import {
  BookingFormService
} from "./chunk-DRLQLJVX.js";
import {
  SettingsToggleComponent
} from "./chunk-TYVYABE5.js";
import {
  AuthenticatedImageDirective,
  CustomTooltipComponent,
  CustomTooltipData,
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-TUTUI3EM.js";
import {
  searchStaff
} from "./chunk-LRIUS7CU.js";
import {
  AsyncHandler,
  Booking,
  CalendarEvent,
  CdkScrollable,
  Clipboard,
  Desk,
  FormField,
  IconComponent,
  MAT_DIALOG_DATA,
  MINUTES,
  MapsPeopleService,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SafePipe,
  SanitizePipe,
  SettingsService,
  Space,
  UPLOAD_PERMISSIONS_MODAL,
  UploadCancelledError,
  UploadsService,
  VERSION,
  addWeeks,
  currentUser,
  current_user,
  endOfWeek,
  firstValueWhere,
  form,
  getUnixTime,
  hasNewVersion,
  isAfter,
  isBefore,
  loadLockerResources,
  openConfirmModal,
  queryBookings,
  reloadUserData,
  removeBooking,
  required,
  setBookingCheckedIn,
  setHours,
  settingSignal,
  toQueryString,
  userSignal
} from "./chunk-LH7TRF2T.js";
import {
  BidiModule,
  COMMA,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  Directionality,
  Directive,
  ENTER,
  ElementRef,
  EventEmitter,
  Fa,
  FormsModule,
  Ga,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  It,
  La,
  LocaleService,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NO_ERRORS_SCHEMA,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Output,
  Platform,
  Renderer2,
  RippleState,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SlicePipe,
  Subject,
  TranslatePipe,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  Vu,
  Xr,
  _CdkPrivateStyleLoader,
  _StructuralStylesLoader,
  _animationsDisabled,
  addDays,
  addMinutes,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  constructFrom,
  debounced,
  differenceInMilliseconds,
  differenceInMinutes,
  effect,
  enUS,
  endOfDay,
  fd,
  firstTruthyValueFrom,
  flatten,
  format,
  forwardRef,
  getDefaultOptions,
  getDefaultOptions2,
  getISOWeek,
  getTimezoneOffsetInMilliseconds,
  getWeek,
  getWeekYear,
  ha,
  i18n,
  inject,
  input,
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  isSameDay,
  longFormatters,
  millisecondsInHour,
  millisecondsInMinute,
  millisecondsInSecond,
  model,
  nc,
  notifyError,
  notifyInfo,
  notifySuccess,
  numberAttribute,
  output,
  p,
  resource,
  set,
  setClassMetadata,
  signal,
  startOfDay,
  startOfISOWeek,
  startOfMinute,
  startOfWeek,
  toDate,
  unique,
  viewChild,
  warnOrThrowProtectedError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-XUPR3QCE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/getISODay.js
function getISODay(date, options2) {
  const day = toDate(date, options2?.in).getDay();
  return day === 0 ? 7 : day;
}

// node_modules/date-fns/transpose.js
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
  return date_;
}
function isConstructor(constructor) {
  return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}

// node_modules/date-fns/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = class {
  subPriority = 0;
  validate(_utcDate, _options) {
    return true;
  }
};
var ValueSetter = class extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options2) {
    return this.validateValue(date, this.value, options2);
  }
  set(date, flags, options2) {
    return this.setValue(date, flags, this.value, options2);
  }
};
var DateTimezoneSetter = class extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  constructor(context, reference) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
  }
};

// node_modules/date-fns/parse/_lib/Parser.js
var Parser = class {
  run(dateString, token, match, options2) {
    const result = this.parse(dateString, token, match, options2);
    if (!result) {
      return null;
    }
    return {
      setter: new ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
};

// node_modules/date-fns/parse/_lib/parsers/EraParser.js
var EraParser = class extends Parser {
  priority = 140;
  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
};

// node_modules/date-fns/parse/_lib/constants.js
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/date-fns/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/date-fns/parse/_lib/parsers/YearParser.js
var YearParser = class extends Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
};

// node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options2) {
    const currentYear = getWeekYear(date, options2);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options2.firstWeekContainsDate
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options2);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options2.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options2);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "u") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/QuarterParser.js
var QuarterParser = class extends Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = class extends Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/MonthParser.js
var MonthParser = class extends Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match.month(dateString, { width: "wide", context: "formatting" }) || match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
};

// node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = class extends Parser {
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match.month(dateString, { width: "wide", context: "standalone" }) || match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setWeek.js
function setWeek(date, week, options2) {
  const date_ = toDate(date, options2?.in);
  const diff = getWeek(date_, options2) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return toDate(date_, options2?.in);
}

// node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = class extends Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options2) {
    return startOfWeek(setWeek(date, value, options2), options2);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setISOWeek.js
function setISOWeek(date, week, options2) {
  const _date = toDate(date, options2?.in);
  const diff = getISOWeek(_date, options2) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = class extends Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return startOfISOWeek(setISOWeek(date, value));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
var DateParser = class extends Parser {
  priority = 90;
  subPriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = class extends Parser {
  priority = 90;
  subpriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setDay.js
function setDay(date, day, options2) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const date_ = toDate(date, options2?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(date_, diff, options2);
}

// node_modules/date-fns/parse/_lib/parsers/DayParser.js
var DayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options2) {
    date = setDay(date, value, options2);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match, options2) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options2.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options2) {
    date = setDay(date, value, options2);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match, options2) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options2.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return match.day(dateString, { width: "wide", context: "standalone" }) || match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options2) {
    date = setDay(date, value, options2);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setISODay.js
function setISODay(date, day, options2) {
  const date_ = toDate(date, options2?.in);
  const currentDay = getISODay(date_, options2);
  const diff = day - currentDay;
  return addDays(date_, diff, options2);
}

// node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var ISODayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        return parseNDigits(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return mapValue(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // T
      case "iiiii":
        return mapValue(
          match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tu
      case "iiiiii":
        return mapValue(
          match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tuesday
      case "iiii":
      default:
        return mapValue(
          match.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = setISODay(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/AMPMParser.js
var AMPMParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return parseNumericPattern(numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return parseNumericPattern(numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return parseNumericPattern(numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/MinuteParser.js
var MinuteParser = class extends Parser {
  priority = 60;
  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/SecondParser.js
var SecondParser = class extends Parser {
  priority = 50;
  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return parseNumericPattern(numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = class extends Parser {
  priority = 30;
  parse(dateString, token) {
    const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = class extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "x"];
};

// node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = class extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "X"];
};

// node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = class extends Parser {
  priority = 40;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};

// node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = class extends Parser {
  priority = 20;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};

// node_modules/date-fns/parse/_lib/parsers.js
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/date-fns/parse.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dateStr, formatStr, referenceDate, options2) {
  const invalidDate = () => constructFrom(options2?.in || referenceDate, NaN);
  const defaultOptions = getDefaultOptions2();
  const locale = options2?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (!formatStr)
    return dateStr ? invalidDate() : toDate(referenceDate, options2?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  const setters = [new DateTimezoneSetter(options2?.in, referenceDate)];
  const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter in longFormatters) {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  const usedTokens = [];
  for (let token of tokens) {
    if (!options2?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    if (!options2?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser2 = parsers[firstCharacter];
    if (parser2) {
      const { incompatibleTokens } = parser2;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
          );
        }
      } else if (parser2.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`
        );
      }
      usedTokens.push({ token: firstCharacter, fullToken: token });
      const parseResult = parser2.run(
        dateStr,
        token,
        locale.match,
        subFnOptions
      );
      if (!parseResult) {
        return invalidDate();
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
        );
      }
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(
    (priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)
  ).map((setterArray) => setterArray[0]);
  let date = toDate(referenceDate, options2?.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString(input2) {
  return input2.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
var noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (/^ {0,3}>/.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens[tokens.length - 1];
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
      list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = __spreadProps(__spreadValues({}, blockNormal), {
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
});
var blockPedantic = __spreadProps(__spreadValues({}, blockNormal), {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = "\\p{P}\\p{S}";
var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = __spreadProps(__spreadValues({}, inlineNormal), {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
});
var inlineGfm = __spreadProps(__spreadValues({}, inlineNormal), {
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
var inlineBreaks = __spreadProps(__spreadValues({}, inlineGfm), {
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(/^\S*/)?.[0];
    const code = text.replace(/\n$/, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " "
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${text}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text }) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  options;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
};
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
  parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = __spreadValues({}, pack);
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          let rendererFunc = pack.renderer[rendererProp];
          if (!pack.useNewRenderer) {
            rendererFunc = this.#convertRendererFunction(rendererFunc, rendererProp, renderer);
          }
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = __spreadValues(__spreadValues({}, this.defaults), opts);
    });
    return this;
  }
  // TODO: Remove this in next major release
  #convertRendererFunction(func, prop, renderer) {
    switch (prop) {
      case "heading":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, renderer.parser.parseInline(token.tokens), token.depth, unescape(renderer.parser.parseInline(token.tokens, renderer.parser.textRenderer)));
        };
      case "code":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text, token.lang, !!token.escaped);
        };
      case "table":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          let header = "";
          let cell = "";
          for (let j = 0; j < token.header.length; j++) {
            cell += this.tablecell({
              text: token.header[j].text,
              tokens: token.header[j].tokens,
              header: true,
              align: token.align[j]
            });
          }
          header += this.tablerow({ text: cell });
          let body = "";
          for (let j = 0; j < token.rows.length; j++) {
            const row = token.rows[j];
            cell = "";
            for (let k = 0; k < row.length; k++) {
              cell += this.tablecell({
                text: row[k].text,
                tokens: row[k].tokens,
                header: false,
                align: token.align[k]
              });
            }
            body += this.tablerow({ text: cell });
          }
          return func.call(this, header, body);
        };
      case "blockquote":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          const body = this.parser.parse(token.tokens);
          return func.call(this, body);
        };
      case "list":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          const ordered = token.ordered;
          const start = token.start;
          const loose = token.loose;
          let body = "";
          for (let j = 0; j < token.items.length; j++) {
            const item = token.items[j];
            const checked = item.checked;
            const task = item.task;
            let itemBody = "";
            if (item.task) {
              const checkbox = this.checkbox({ checked: !!checked });
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox + " "
                  });
                }
              } else {
                itemBody += checkbox + " ";
              }
            }
            itemBody += this.parser.parse(item.tokens, loose);
            body += this.listitem({
              type: "list_item",
              raw: itemBody,
              text: itemBody,
              task,
              checked: !!checked,
              loose,
              tokens: item.tokens
            });
          }
          return func.call(this, body, ordered, start);
        };
      case "html":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text, token.block);
        };
      case "paragraph":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "escape":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
      case "link":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.href, token.title, this.parser.parseInline(token.tokens));
        };
      case "image":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.href, token.title, token.text);
        };
      case "strong":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "em":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "codespan":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
      case "del":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "text":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
    }
    return func;
  }
  setOptions(opt) {
    this.defaults = __spreadValues(__spreadValues({}, this.defaults), opt);
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  #parseMarkdown(lexer2, parser2) {
    return (src, options2) => {
      const origOpt = __spreadValues({}, options2);
      const opt = __spreadValues(__spreadValues({}, this.defaults), origOpt);
      if (this.defaults.async === true && origOpt.async === false) {
        if (!opt.silent) {
          console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
        }
        opt.async = true;
      }
      const throwError = this.#onError(!!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  #onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse2 = marked;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// libs/components/src/lib/fullscreen-modal-shell.component.ts
var _c0 = ["*"];
function FullscreenModalShellComponent_Conditional_5_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FullscreenModalShellComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_0_Conditional_0_Template, 3, 0, "button", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
function FullscreenModalShellComponent_Conditional_5_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r0.close());
  }
}
function FullscreenModalShellComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_1_Conditional_0_Template, 3, 1, "a", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
function FullscreenModalShellComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FullscreenModalShellComponent_Conditional_5_Conditional_0_Template, 1, 1)(1, FullscreenModalShellComponent_Conditional_5_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.close()?.length ? 0 : 1);
  }
}
function FullscreenModalShellComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275element(1, "div", 9);
  }
}
function FullscreenModalShellComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function FullscreenModalShellComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "kbd", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.confirm_hotkey());
  }
}
function FullscreenModalShellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function FullscreenModalShellComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirm.emit());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, FullscreenModalShellComponent_Conditional_9_Conditional_4_Template, 2, 1, "kbd", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("max-w-156", !ctx_r0.full_width());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.confirm_disabled());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirm_text() || \u0275\u0275pipeBind1(3, 5, "COMMON.SAVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.confirm_hotkey() ? 4 : -1);
  }
}
var FullscreenModalShellComponent = class _FullscreenModalShellComponent {
  constructor() {
    this.loading = input(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = input(
      "Fullscreen Modal",
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_text = input(
      "",
      ...ngDevMode ? [{ debugName: "confirm_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_hotkey = input(
      "",
      ...ngDevMode ? [{ debugName: "confirm_hotkey" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_disabled = input(
      false,
      ...ngDevMode ? [{ debugName: "confirm_disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = input(
      [],
      ...ngDevMode ? [{ debugName: "close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_confirm = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_confirm" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_close = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.full_width = input(
      false,
      ...ngDevMode ? [{ debugName: "full_width" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm = output();
    this.closed = output();
  }
  static {
    this.\u0275fac = function FullscreenModalShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenModalShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenModalShellComponent, selectors: [["fullscreen-modal-shell"], ["", "fs-modal-shell", ""]], inputs: { loading: [1, "loading"], heading: [1, "heading"], confirm_text: [1, "confirm_text"], confirm_hotkey: [1, "confirm_hotkey"], confirm_disabled: [1, "confirm_disabled"], close: [1, "close"], hide_confirm: [1, "hide_confirm"], hide_close: [1, "hide_close"], full_width: [1, "full_width"] }, outputs: { confirm: "confirm", closed: "closed" }, ngContentSelectors: _c0, decls: 10, vars: 14, consts: [["cdkScrollable", "", 1, "bg-base-200", "fixed", "inset-0", "flex", "flex-col", "items-center", "overflow-auto", "px-2"], [1, "border-base-300", "bg-base-100", "fixed", "top-0", "mx-auto", "h-screen", "max-w-full", "border-x"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "flex", "items-center", "text-xl", "font-medium", "capitalize", 3, "innerHTML"], [1, "z-0", "mx-auto", "h-1/2", "w-full", "flex-1", "space-y-8", "p-2"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4", "p-12"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2", 3, "max-w-156"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "h-24", "w-full"], [3, "diameter"], [1, "text-center", "opacity-50"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], [1, "border-base-300", "bg-base-100", "text-base-content", "rounded", "border", "px-2", "py-1", "text-xs", "leading-none", "shadow-sm"]], template: function FullscreenModalShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "header", 2);
        \u0275\u0275element(3, "h2", 3);
        \u0275\u0275pipe(4, "sanitize");
        \u0275\u0275conditionalCreate(5, FullscreenModalShellComponent_Conditional_5_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "main", 4);
        \u0275\u0275conditionalCreate(7, FullscreenModalShellComponent_Conditional_7_Template, 2, 0)(8, FullscreenModalShellComponent_Conditional_8_Template, 4, 2, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, FullscreenModalShellComponent_Conditional_9_Template, 5, 7, "footer", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("w-160", !ctx.full_width())("w-full", ctx.full_width());
        \u0275\u0275advance();
        \u0275\u0275classProp("max-w-156", !ctx.full_width());
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(4, 12, ctx.heading()), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_close() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("max-w-156", !ctx.full_width());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() && !ctx.hide_confirm() ? 9 : -1);
      }
    }, dependencies: [
      CdkScrollable,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  scroll-margin-top: 60px;\n}\n/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenModalShellComponent, [{
    type: Component,
    args: [{ selector: "fullscreen-modal-shell,[fs-modal-shell]", template: `
        <div
            cdkScrollable
            class="bg-base-200 fixed inset-0 flex flex-col items-center overflow-auto px-2"
        >
            <div
                class="border-base-300 bg-base-100 fixed top-0 mx-auto h-screen max-w-full border-x"
                [class.w-160]="!full_width()"
                [class.w-full]="full_width()"
            ></div>
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex h-14 w-full items-center justify-between rounded-sm border-none px-4 py-2"
                [class.max-w-156]="!full_width()"
            >
                <h2
                    class="flex items-center text-xl font-medium capitalize"
                    [innerHTML]="heading() | sanitize"
                ></h2>
                @if (!hide_close()) {
                    @if (!close()?.length) {
                        @if (!loading()) {
                            <button icon matRipple mat-dialog-close>
                                <icon>close</icon>
                            </button>
                        }
                    } @else {
                        @if (!loading()) {
                            <a icon matRipple [routerLink]="close()">
                                <icon>close</icon>
                            </a>
                        }
                    }
                }
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-full flex-1 space-y-8 p-2"
                [class.max-w-156]="!full_width()"
            >
                @if (!loading()) {
                    <ng-content></ng-content>
                    <div class="h-24 w-full"></div>
                } @else {
                    <div
                        class="flex h-1/2 w-full flex-1 flex-col items-center justify-center space-y-4 p-12"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p class="text-center opacity-50">{{ loading() }}</p>
                    </div>
                }
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                    [class.max-w-156]="!full_width()"
                >
                    <button
                        btn
                        matRipple
                        class="flex min-w-32 items-center justify-center gap-2"
                        [disabled]="confirm_disabled()"
                        (click)="confirm.emit()"
                    >
                        {{ confirm_text() || ('COMMON.SAVE' | translate) }}
                        @if (confirm_hotkey()) {
                            <kbd
                                class="border-base-300 bg-base-100 text-base-content rounded border px-2 py-1 text-xs leading-none shadow-sm"
                                >{{ confirm_hotkey() }}</kbd
                            >
                        }
                    </button>
                </footer>
            }
        </div>
    `, imports: [
      CdkScrollable,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      RouterModule,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;9cba738a8b61f6e8c0fc50691e933d058b687b91fec8fff6415921963f4014b6;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/fullscreen-modal-shell.component.ts */\nmain {\n  scroll-margin-top: 60px;\n}\n/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */\n"] }]
  }], null, { loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false }] }], confirm_text: [{ type: Input, args: [{ isSignal: true, alias: "confirm_text", required: false }] }], confirm_hotkey: [{ type: Input, args: [{ isSignal: true, alias: "confirm_hotkey", required: false }] }], confirm_disabled: [{ type: Input, args: [{ isSignal: true, alias: "confirm_disabled", required: false }] }], close: [{ type: Input, args: [{ isSignal: true, alias: "close", required: false }] }], hide_confirm: [{ type: Input, args: [{ isSignal: true, alias: "hide_confirm", required: false }] }], hide_close: [{ type: Input, args: [{ isSignal: true, alias: "hide_close", required: false }] }], full_width: [{ type: Input, args: [{ isSignal: true, alias: "full_width", required: false }] }], confirm: [{ type: Output, args: ["confirm"] }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenModalShellComponent, { className: "FullscreenModalShellComponent", filePath: "libs/components/src/lib/fullscreen-modal-shell.component.ts", lineNumber: 105 });
})();

// libs/components/src/lib/changelog-modal.component.ts
function ChangelogModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(1, 1, ctx_r0.changelog(), "html"), \u0275\u0275sanitizeHtml);
  }
}
function ChangelogModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4, "No changelog");
    \u0275\u0275elementEnd()();
  }
}
var ChangelogModalComponent = class _ChangelogModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changelog = computed(
      () => marked(this._data.changelog || "", { async: false }),
      ...ngDevMode ? [{ debugName: "changelog" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ChangelogModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangelogModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangelogModalComponent, selectors: [["changelog-modal"]], decls: 3, vars: 3, consts: [[3, "heading", "hide_confirm"], [1, "markdown", 3, "innerHTML"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "text-3xl"], [1, "text"]], template: function ChangelogModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275conditionalCreate(1, ChangelogModalComponent_Conditional_1_Template, 2, 4, "div", 1)(2, ChangelogModalComponent_Conditional_2_Template, 5, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Changelog")("hide_confirm", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.changelog() ? 1 : 2);
      }
    }, dependencies: [FullscreenModalShellComponent, IconComponent, SafePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangelogModalComponent, [{
    type: Component,
    args: [{ selector: "changelog-modal", template: `
        <fullscreen-modal-shell [heading]="'Changelog'" [hide_confirm]="true">
            @if (changelog()) {
                <div
                    class="markdown"
                    [innerHTML]="changelog() | safe: 'html'"
                ></div>
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2"
                >
                    <icon class="text-3xl">close</icon>
                    <div class="text">No changelog</div>
                </div>
            }
        </fullscreen-modal-shell>
    `, imports: [FullscreenModalShellComponent, SafePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangelogModalComponent, { className: "ChangelogModalComponent", filePath: "libs/components/src/lib/changelog-modal.component.ts", lineNumber: 35 });
})();

// libs/components/src/lib/image-viewer.component.ts
var ImageViewerComponent = class _ImageViewerComponent {
  constructor() {
    this.url = inject(MAT_DIALOG_DATA);
  }
  static {
    this.\u0275fac = function ImageViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageViewerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageViewerComponent, selectors: [["image-viewer"]], decls: 5, vars: 1, consts: [[1, "bg-base-200", "h-screen", "w-screen"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-100", "absolute", "top-1", "right-1"]], template: function ImageViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "button", 2)(3, "icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.url);
      }
    }, dependencies: [IconComponent, AuthenticatedImageDirective, MatDialogModule, MatDialogClose], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageViewerComponent, [{
    type: Component,
    args: [{ selector: "image-viewer", template: `
        <div class="bg-base-200 h-screen w-screen">
            <img
                auth
                class="h-full w-full object-contain object-center"
                [source]="url"
            />
            <button
                class="bg-base-100 absolute top-1 right-1"
                icon
                matRipple
                mat-dialog-close
            >
                <icon>close</icon>
            </button>
        </div>
    `, imports: [IconComponent, AuthenticatedImageDirective, MatDialogModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageViewerComponent, { className: "ImageViewerComponent", filePath: "libs/components/src/lib/image-viewer.component.ts", lineNumber: 28 });
})();

// libs/components/src/lib/upload-permissions-modal.component.ts
var _c02 = (a0, a1, a2) => ({ file: a0, is_public: a1, permissions: a2 });
function UploadPermissionsModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11)(4, "mat-select", 12);
    \u0275\u0275listener("ngModelChange", function UploadPermissionsModalComponent_Conditional_12_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.permissions.set($event));
    });
    \u0275\u0275elementStart(5, "mat-option", 13);
    \u0275\u0275text(6, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 14);
    \u0275\u0275text(8, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 15);
    \u0275\u0275text(10, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.permissions());
    \u0275\u0275control();
  }
}
var UploadPermissionsModalComponent = class _UploadPermissionsModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.file = this._data.file;
    this.is_public = signal(
      !!this._data.is_public,
      ...ngDevMode ? [{ debugName: "is_public" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissions = signal(
      "none",
      ...ngDevMode ? [{ debugName: "permissions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.file = this._data.file;
  }
  close() {
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function UploadPermissionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadPermissionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadPermissionsModalComponent, selectors: [["upload-permissions-modal"]], decls: 18, vars: 7, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-[20rem]", "space-y-2", "px-4", "py-2"], [1, "flex", "flex-col"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "disabled", "true", "placeholder", "File Name", 3, "ngModel"], [1, "flex", "flex-col", "space-y-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], ["value", "none"], ["value", "support"], ["value", "admin"]], template: function UploadPermissionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Upload File");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "main", 3)(7, "div", 4)(8, "label");
        \u0275\u0275text(9, "File Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 5);
        \u0275\u0275element(11, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(12, UploadPermissionsModalComponent_Conditional_12_Template, 11, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 8)(14, "button", 9);
        \u0275\u0275text(15, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275text(17, " Upload ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngModel", ctx.file.name);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_public() ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("mat-dialog-close", \u0275\u0275pureFunction3(3, _c02, ctx.file, ctx.is_public(), ctx.permissions()));
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadPermissionsModalComponent, [{
    type: Component,
    args: [{ selector: "upload-permissions-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Upload File</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] space-y-2 px-4 py-2">
            <div class="flex flex-col">
                <label>File Name</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        [ngModel]="file.name"
                        disabled="true"
                        placeholder="File Name"
                    />
                </mat-form-field>
            </div>
            @if (!is_public()) {
                <div class="flex flex-col space-y-2">
                    <label>Permissions</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [ngModel]="permissions()"
                            (ngModelChange)="permissions.set($event)"
                        >
                            <mat-option value="none">None</mat-option>
                            <mat-option value="support">Support</mat-option>
                            <mat-option value="admin">Admin</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            <!-- <div>
                <settings-toggle [(ngModel)]="is_public"
                    >Public</settings-toggle
                >
            </div> -->
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                Cancel
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="{
                    file,
                    is_public: is_public(),
                    permissions: permissions(),
                }"
            >
                Upload
            </button>
        </footer>
    `, schemas: [NO_ERRORS_SCHEMA], imports: [
      MatDialogModule,
      MatFormFieldModule,
      FormsModule,
      MatSelectModule,
      IconComponent,
      MatInputModule,
      MatRippleModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadPermissionsModalComponent, { className: "UploadPermissionsModalComponent", filePath: "libs/components/src/lib/upload-permissions-modal.component.ts", lineNumber: 91 });
})();

// libs/form-fields/src/lib/image-list-field.component.ts
var _c03 = ["image_list"];
var _c1 = ["file_input"];
function ImageListFieldComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275element(3, "div", 18);
    \u0275\u0275elementStart(4, "div", 19)(5, "button", 20);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_11_Template_button_click_5_listener() {
      const url_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyLink(url_r2));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_11_Template_button_click_8_listener() {
      const url_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewImage(url_r2));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 20);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_11_Template_button_click_11_listener() {
      const url_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage(url_r2));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const url_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translate(-" + ctx_r2.offset() + "00%)");
    \u0275\u0275advance();
    \u0275\u0275property("source", url_r2);
  }
}
function ImageListFieldComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 22);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r5.progress)("diameter", 64);
  }
}
function ImageListFieldComponent_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function ImageListFieldComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "icon", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function ImageListFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_13_Template_div_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retryUpload(item_r5));
    });
    \u0275\u0275conditionalCreate(1, ImageListFieldComponent_For_13_Conditional_1_Template, 1, 2, "mat-progress-spinner", 22);
    \u0275\u0275conditionalCreate(2, ImageListFieldComponent_For_13_Conditional_2_Template, 2, 0, "icon", 23);
    \u0275\u0275conditionalCreate(3, ImageListFieldComponent_For_13_Conditional_3_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translate(-" + ctx_r2.offset() + "00%)");
    \u0275\u0275property("matTooltip", item_r5.error);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r5.error ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.error ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.error ? 3 : -1);
  }
}
function ImageListFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ImageListFieldComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousOffset());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.offset() === 0);
  }
}
function ImageListFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ImageListFieldComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextOffset());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.offset() >= ctx_r2.length() - ctx_r2.view_space());
  }
}
function ImageListFieldComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 28);
    \u0275\u0275listener("removed", function ImageListFieldComponent_For_20_Template_mat_chip_row_removed_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage(item_r9));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 30)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r9);
  }
}
var ImageListFieldComponent = class _ImageListFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._clipboard = inject(Clipboard);
    this._uploads = inject(UploadsService);
    this._dialog = inject(MatDialog);
    this._injector = inject(Injector);
    this._upload_completion_effect = effect(() => {
      const list2 = this.upload_list();
      const id_list = this.upload_ids();
      for (const id of id_list) {
        const item = list2.find((_) => _?.id === id);
        if (item && item.progress >= 100) {
          this.addImageUrl(item.link);
          this.upload_ids.set(this.upload_ids().filter((_) => _ !== id));
        }
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_upload_completion_effect" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
    this.list = signal(
      [],
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upload_map = {};
    this.upload_ids = signal(
      [],
      ...ngDevMode ? [{ debugName: "upload_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upload_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "upload_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_space = signal(
      0,
      ...ngDevMode ? [{ debugName: "view_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.separators = [COMMA, ENTER];
    this.uploads = computed(
      () => {
        const ids = this.upload_ids();
        return this.upload_list().filter((item) => ids.includes(item?.id));
      },
      ...ngDevMode ? [{ debugName: "uploads" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.length = computed(
      () => this.list().length + this.upload_list().length + 1,
      ...ngDevMode ? [{ debugName: "length" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._list_el = viewChild(
      "image_list",
      ...ngDevMode ? [{ debugName: "_list_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._file_input = viewChild(
      "file_input",
      ...ngDevMode ? [{ debugName: "_file_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngAfterViewInit() {
    this.updateViewSpace();
  }
  updateViewSpace() {
    this.timeout("init_view_space", () => {
      const box = this._list_el()?.nativeElement?.getBoundingClientRect();
      if (!box)
        return;
      this.view_space.set(Math.floor(box.width / 152));
    }, 100);
  }
  copyLink(url) {
    this._clipboard.copy(url);
    notifyInfo("Copied image URL to clipboard");
  }
  viewImage(url) {
    this._dialog.open(ImageViewerComponent, { data: url });
  }
  removeImage(url) {
    this.setValue(this.list().filter((_) => _ !== url));
  }
  addImage(event) {
    if (!event.value)
      return;
    this.setValue(unique([...this.list(), event.value]));
    event.chipInput.inputElement.value = "";
  }
  addImageUrl(url) {
    this.setValue(unique([...this.list(), url]));
  }
  retryUpload(item) {
    if (item.error) {
      item.error = null;
      item.upload.resume();
    }
  }
  previousOffset() {
    this.offset.update((value) => value - 1);
  }
  nextOffset() {
    this.offset.update((value) => value + 1);
  }
  async uploadImages(event) {
    const element = event.target;
    if (element?.files) {
      const files = element.files;
      if (files.length) {
        this.interval("update_status", () => this._updateUploadHistory());
        for (let i = 0; i < files.length; i++) {
          try {
            const id = await this._uploads.uploadFileWithPermissions(files[i]);
            this.upload_ids.set([...this.upload_ids(), id]);
          } catch (error) {
            if (error instanceof UploadCancelledError)
              continue;
            notifyError(`Failed to upload ${files[i].name}: ${error?.message || "Unknown error"}`);
          }
        }
        this._file_input().nativeElement.value = "";
      }
    }
  }
  setValue(value) {
    const list2 = value || [];
    this.list.set(list2);
    if (this._onChange)
      this._onChange(list2);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.list.set(value || []);
  }
  async _updateUploadHistory() {
    const list2 = this.upload_ids();
    if (list2.length === 0)
      return;
    const global_list = this._uploads.upload_list();
    const new_list = global_list.filter((_) => list2.find((i) => i === _?.id));
    const done_list = new_list.filter((file) => file.progress >= 100);
    this.upload_list.set(new_list);
    done_list.forEach((i) => {
      console.log("ID:", __spreadValues({}, i));
      this.upload_map[i?.id] = i.upload?.id || i?.id;
      delete i.upload;
    });
    if (done_list.length >= list2.length)
      this.clearInterval("update_status");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ImageListFieldComponent_BaseFactory;
      return function ImageListFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275ImageListFieldComponent_BaseFactory || (\u0275ImageListFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ImageListFieldComponent)))(__ngFactoryType__ || _ImageListFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageListFieldComponent, selectors: [["image-list-field"]], viewQuery: function ImageListFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._list_el, _c03, 5)(ctx._file_input, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _ImageListFieldComponent),
        multi: true
      },
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ]), \u0275\u0275InheritDefinitionFeature], decls: 23, vars: 13, consts: [["image_list", ""], ["file_input", ""], ["chipList", ""], ["images", "", 1, "relative", "mb-2", "flex", "w-full", "items-center", "space-x-2", "overflow-hidden", "py-2", 3, "resize"], ["image", "", 1, "border-base-200", "hover:border-base-300", "hover:bg-base-200", "relative", "flex", "h-32", "w-36", "shrink-0", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-xl", "border-2", "border-dashed"], [1, "text-4xl", "opacity-60"], [1, "px-4", "text-center", "opacity-60"], ["type", "file", 1, "absolute", "inset-0", "h-32", "w-32", "cursor-pointer", "opacity-0", 3, "change"], ["image", "", 1, "bg-base-200", "relative", "h-32", "w-36", "shrink-0", "overflow-hidden", "rounded-sm", "bg-cover", "bg-center", 3, "transform"], ["upload", "", 1, "border-base-content/10", "/5", "bg-base-200", "flex", "h-32", "w-36", "shrink-0", "items-center", "justify-center", "rounded-sm", "border", "bg-cover", "bg-center", 3, "transform", "matTooltip"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-1/2", "left-0", "-translate-y-1/2", "transform", 3, "disabled"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-1/2", "right-0", "-translate-y-1/2", "transform", 3, "disabled"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["image", "", 1, "bg-base-200", "relative", "h-32", "w-36", "shrink-0", "overflow-hidden", "rounded-sm", "bg-cover", "bg-center"], ["auth", "", 1, "pointer-events-none", "absolute", "top-1/2", "left-1/2", "z-10", "-translate-x-1/2", "-translate-y-1/2", "object-contain", 3, "source"], ["overlay", "", 1, "text-base-100", "absolute", "inset-0", "z-20"], ["bg", "", 1, "absolute", "inset-0", "bg-black", "opacity-0"], ["actions", "", 1, "absolute", "top-0", "right-0", "left-0", "flex", "items-center", "justify-center", "space-x-2", "opacity-0"], ["icon", "", 3, "click"], ["upload", "", 1, "border-base-content/10", "/5", "bg-base-200", "flex", "h-32", "w-36", "shrink-0", "items-center", "justify-center", "rounded-sm", "border", "bg-cover", "bg-center", 3, "click", "matTooltip"], ["mode", "determinate", 3, "value", "diameter"], [1, "text-error", "text-6xl"], ["overlay", "", 1, "text-base-100", "hover:bg-base-content", "hover:bg-opacity-50", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-3xl", "opacity-0"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-1/2", "left-0", "-translate-y-1/2", "transform", 3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-1/2", "right-0", "-translate-y-1/2", "transform", 3, "click", "disabled"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function ImageListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3, 0);
        \u0275\u0275listener("resize", function ImageListFieldComponent_Template_div_resize_0_listener() {
          return ctx.updateViewSpace();
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(2, "div", 4)(3, "icon", 5);
        \u0275\u0275text(4, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 6);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 7, 1);
        \u0275\u0275listener("change", function ImageListFieldComponent_Template_input_change_8_listener($event) {
          return ctx.uploadImages($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(10, ImageListFieldComponent_For_11_Template, 14, 3, "div", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(12, ImageListFieldComponent_For_13_Template, 4, 6, "div", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(14, ImageListFieldComponent_Conditional_14_Template, 3, 1, "button", 10);
        \u0275\u0275conditionalCreate(15, ImageListFieldComponent_Conditional_15_Template, 3, 1, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 12)(17, "mat-chip-grid", 13, 2);
        \u0275\u0275repeaterCreate(19, ImageListFieldComponent_For_20_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 14);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275listener("matChipInputTokenEnd", function ImageListFieldComponent_Template_input_matChipInputTokenEnd_21_listener($event) {
          return ctx.addImage($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const chipList_r10 = \u0275\u0275reference(18);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("transform", "translate(-" + ctx.offset() + "00%)");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "COMMON.IMAGE_UPLOADS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.list());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.uploads());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.length() > ctx.view_space() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.length() > ctx.view_space() ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.list());
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 11, "COMMON.IMAGE_ADD_URL"))("matChipInputFor", chipList_r10)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatChipsModule,
      MatChipGrid,
      MatChipInput,
      MatChipRemove,
      MatChipRow,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[overlay][_ngcontent-%COMP%] {\n  transition: background 200ms;\n}\n[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], \n[image][_ngcontent-%COMP%]:hover    > icon[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%] {\n  opacity: 0.4 !important;\n}\n[actions][_ngcontent-%COMP%], \n[image][_ngcontent-%COMP%]    > icon[_ngcontent-%COMP%] {\n  transition: opacity 200ms;\n}\n[image][_ngcontent-%COMP%] {\n  transition: transform 200ms;\n}\n/*# sourceMappingURL=image-list-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageListFieldComponent, [{
    type: Component,
    args: [{ selector: "image-list-field", template: `
        <div
            images
            #image_list
            class="relative mb-2 flex w-full items-center space-x-2 overflow-hidden py-2"
            (window:resize)="updateViewSpace()"
        >
            <div
                image
                class="border-base-200 hover:border-base-300 hover:bg-base-200 relative flex h-32 w-36 shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed"
                [style.transform]="'translate(-' + offset() + '00%)'"
            >
                <icon class="text-4xl opacity-60">add</icon>
                <p class="px-4 text-center opacity-60">
                    {{ 'COMMON.IMAGE_UPLOADS' | translate }}
                </p>
                <input
                    #file_input
                    type="file"
                    class="absolute inset-0 h-32 w-32 cursor-pointer opacity-0"
                    (change)="uploadImages($event)"
                />
            </div>
            @for (url of list(); track url; let i = $index) {
                <div
                    image
                    class="bg-base-200 relative h-32 w-36 shrink-0 overflow-hidden rounded-sm bg-cover bg-center"
                    [style.transform]="'translate(-' + offset() + '00%)'"
                >
                    <img
                        auth
                        [source]="url"
                        class="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                    <div overlay class="text-base-100 absolute inset-0 z-20">
                        <div
                            bg
                            class="absolute inset-0 bg-black opacity-0"
                        ></div>
                        <div
                            actions
                            class="absolute top-0 right-0 left-0 flex items-center justify-center space-x-2 opacity-0"
                        >
                            <button icon (click)="copyLink(url)">
                                <icon>link</icon>
                            </button>
                            <button icon (click)="viewImage(url)">
                                <icon>visibility</icon>
                            </button>
                            <button icon (click)="removeImage(url)">
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
            @for (item of uploads(); track item; let i = $index) {
                <div
                    upload
                    class="border-base-content/10 /5 bg-base-200 flex h-32 w-36 shrink-0 items-center justify-center rounded-sm border bg-cover bg-center"
                    [style.transform]="'translate(-' + offset() + '00%)'"
                    [matTooltip]="item.error"
                    (click)="retryUpload(item)"
                >
                    @if (!item.error) {
                        <mat-progress-spinner
                            [value]="item.progress"
                            [diameter]="64"
                            mode="determinate"
                        ></mat-progress-spinner>
                    }
                    @if (item.error) {
                        <icon class="text-error text-6xl">warning</icon>
                    }
                    @if (item.error) {
                        <div
                            overlay
                            class="text-base-100 hover:bg-base-content hover:bg-opacity-50 absolute inset-0 flex items-center justify-center"
                        >
                            <icon class="text-3xl opacity-0">refresh</icon>
                        </div>
                    }
                </div>
            }
            @if (length() > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset() === 0"
                    class="bg-base-100 absolute top-1/2 left-0 -translate-y-1/2 transform"
                    (click)="previousOffset()"
                >
                    <icon>chevron_left</icon>
                </button>
            }
            @if (length() > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset() >= length() - view_space()"
                    class="bg-base-100 absolute top-1/2 right-0 -translate-y-1/2 transform"
                    (click)="nextOffset()"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Image List">
                @for (item of list(); track item) {
                    <mat-chip-row (removed)="removeImage(item)">
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="'COMMON.IMAGE_ADD_URL' | translate"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators"
                [matChipInputAddOnBlur]="true"
                (matChipInputTokenEnd)="addImage($event)"
            />
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ImageListFieldComponent),
        multi: true
      },
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ], imports: [
      MatFormFieldModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;95dcaaaa826894df5bf437b6ea5774f7f209a30340873d0fad154aed06b72211;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/image-list-field.component.ts */\n:host {\n  width: 100%;\n}\n[overlay] {\n  transition: background 200ms;\n}\n[image]:hover [actions],\n[image]:hover > icon {\n  opacity: 1 !important;\n}\n[image]:hover [bg] {\n  opacity: 0.4 !important;\n}\n[actions],\n[image] > icon {\n  transition: opacity 200ms;\n}\n[image] {\n  transition: transform 200ms;\n}\n/*# sourceMappingURL=image-list-field.component.css.map */\n"] }]
  }], null, { _list_el: [{ type: ViewChild, args: ["image_list", { isSignal: true }] }], _file_input: [{ type: ViewChild, args: ["file_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageListFieldComponent, { className: "ImageListFieldComponent", filePath: "libs/form-fields/src/lib/image-list-field.component.ts", lineNumber: 239 });
})();

// libs/form-fields/src/lib/support-ticket-modal.component.ts
function SupportTicketModalComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r1 = ctx.$implicit;
    \u0275\u0275property("value", bld_r1.display_name || bld_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r1.display_name || bld_r1.name, " ");
  }
}
function SupportTicketModalComponent_Conditional_37_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2?.name || type_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name || type_r2, " ");
  }
}
function SupportTicketModalComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275repeaterCreate(7, SupportTicketModalComponent_Conditional_37_For_8_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.SUPPORT_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.SUPPORT_TYPE"))("formField", ctx_r2.form.issue_type);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.support_request_types());
  }
}
function SupportTicketModalComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_REQUIRED"), " ");
  }
}
function SupportTicketModalComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.IMAGES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r2.form.images);
    \u0275\u0275control();
  }
}
var SupportTicketModalComponent = class _SupportTicketModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._support_email = this._settings.signal("support_email", "support@place.tech");
    this._support_issue_types = this._settings.signal("support_issue_types", []);
    this._allow_images = this._settings.signal("allow_support_ticket_images", false);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        name: "",
        email: "",
        location: "",
        description: "",
        issue_type: "",
        images: []
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p2) => {
      required(p2.name);
      required(p2.email);
      required(p2.description);
    });
    this.desc_error = signal(
      false,
      ...ngDevMode ? [{ debugName: "desc_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.support_email = this._support_email;
    this.support_request_types = this._support_issue_types;
    this.allow_images = this._allow_images;
    this.buildings = this._org.building_list;
  }
  ngOnInit() {
    const user = currentUser();
    if (user) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        name: user.name,
        email: user.email
      }));
    }
    if (this._org.building) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        location: this._org.building.display_name || this._org.building.name
      }));
    }
  }
  async submit() {
    this.loading.set(true);
    this.form().markAsTouched();
    this._updateDescError();
    if (this.form().valid()) {
      const mod = this._org.module("smtp", "Mailer");
      if (!mod) {
        return notifyError(i18n("COMMON.SUPPORT_NO_MAILER"));
      }
      const { name, email, location: location2, description, images, issue_type } = this.model();
      const support_email = this.support_request_types().find((type) => type.name === issue_type)?.email || this.support_email();
      const header = i18n("COMMON.SUPPORT_MAIL_HEADER", {
        issue_type: issue_type ? " - " + issue_type : ""
      });
      await mod.execute("send_mail", [
        support_email,
        header,
        `${name}
${email}

${location2}

${description.replace(/<[^>]+>/g, "")}

${images.join("\n")}`,
        `<p>${name}</p><p>${email}</p><p>${location2}</p><p>${description}</p>${images.join("<br>")}`,
        [],
        [],
        [],
        [],
        null,
        `${email}`
      ]);
      this._dialog_ref.close();
      this.loading.set(false);
      notifySuccess(i18n("COMMON.SUPPORT_SUCCESS"));
    }
  }
  _updateDescError() {
    this.desc_error.set(this.form.description().invalid() && this.form.description().touched());
  }
  static {
    this.\u0275fac = function SupportTicketModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SupportTicketModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupportTicketModalComponent, selectors: [["support-ticket-modal"]], decls: 51, vars: 45, consts: [[3, "confirm", "heading", "loading", "confirm_text"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "flex", "flex-1", "flex-col"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], [1, "flex", "flex-col"], ["appearance", "outline", 1, "w-full"], [3, "placeholder", "formField"], [3, "value"], [1, ""], [1, "mb-4"], [1, "my-2", "text-xs"], [1, "pt-4"], [1, "mb-2", "text-center", "text-xs", "italic"], [3, "formField"]], template: function SupportTicketModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("confirm", function SupportTicketModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "div", 2)(5, "label");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 3);
        \u0275\u0275element(11, "input", 4);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 2)(17, "label");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "mat-form-field", 3);
        \u0275\u0275element(23, "input", 4);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(25, "mat-error");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 5)(29, "label");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-form-field", 6)(33, "mat-select", 7);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275repeaterCreate(35, SupportTicketModalComponent_For_36_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(37, SupportTicketModalComponent_Conditional_37_Template, 9, 7, "div", 5);
        \u0275\u0275elementStart(38, "div", 9)(39, "label", 10);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(44, "rich-text-input", 7);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(46, SupportTicketModalComponent_Conditional_46_Template, 3, 3, "mat-error", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(47, SupportTicketModalComponent_Conditional_47_Template, 5, 4, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 13);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Raise a support ticket")("loading", ctx.loading() ? "true" : "")("confirm_text", \u0275\u0275pipeBind1(1, 21, "COMMON.SUBMIT"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 23, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 25, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 27, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 29, "FORM.EMAIL"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 31, "FORM.EMAIL"))("formField", ctx.form.email);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 33, "FORM.EMAIL_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 35, "COMMON.LOCATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 37, "COMMON.LOCATION"))("formField", ctx.form.location);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.buildings());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.support_request_types().length ? 37 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 39, "COMMON.SUPPORT_DESCRIPTION"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 41, "COMMON.SUPPORT_DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.desc_error() ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_images() ? 47 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 43, "COMMON.SUPPORT_MSG"), " ");
      }
    }, dependencies: [
      CommonModule,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      MatProgressSpinnerModule,
      MatRippleModule,
      RichTextInputComponent,
      ImageListFieldComponent,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatDialogModule,
      FullscreenModalShellComponent,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=support-ticket-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportTicketModalComponent, [{
    type: Component,
    args: [{ selector: "support-ticket-modal", template: `
        <fullscreen-modal-shell
            [heading]="'Raise a support ticket'"
            [loading]="loading() ? 'true' : ''"
            [confirm_text]="'COMMON.SUBMIT' | translate"
            (confirm)="submit()"
        >
            <form>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label
                            >{{ 'FORM.NAME' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'FORM.NAME' | translate"
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label
                            >{{ 'FORM.EMAIL' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'FORM.EMAIL' | translate"
                                [formField]="form.email"
                            />
                            <mat-error>{{
                                'FORM.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label>{{ 'COMMON.LOCATION' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [placeholder]="'COMMON.LOCATION' | translate"
                            [formField]="form.location"
                        >
                            @for (bld of buildings(); track bld) {
                                <mat-option
                                    [value]="bld.display_name || bld.name"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (support_request_types().length) {
                    <div class="flex flex-col">
                        <label>{{ 'COMMON.SUPPORT_TYPE' | translate }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [placeholder]="
                                    'COMMON.SUPPORT_TYPE' | translate
                                "
                                [formField]="form.issue_type"
                            >
                                @for (
                                    type of support_request_types();
                                    track type
                                ) {
                                    <mat-option [value]="type?.name || type">
                                        {{ type.name || type }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="">
                    <label class="mb-4">
                        {{ 'COMMON.SUPPORT_DESCRIPTION' | translate }}
                        <span>*</span>
                    </label>
                    <rich-text-input
                        [placeholder]="'COMMON.SUPPORT_DESCRIPTION' | translate"
                        [formField]="form.description"
                    ></rich-text-input>
                    @if (desc_error()) {
                        <mat-error class="my-2 text-xs">
                            {{ 'COMMON.DESCRIPTION_REQUIRED' | translate }}
                        </mat-error>
                    }
                </div>
                @if (allow_images()) {
                    <div class="pt-4">
                        <label class="mb-4">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            [formField]="form.images"
                        ></image-list-field>
                    </div>
                }
            </form>
            <div class="mb-2 text-center text-xs italic">
                {{ 'COMMON.SUPPORT_MSG' | translate }}
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      MatProgressSpinnerModule,
      MatRippleModule,
      RichTextInputComponent,
      ImageListFieldComponent,
      MatSelectModule,
      TranslatePipe,
      MatDialogModule,
      MatRippleModule,
      FullscreenModalShellComponent
    ], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/support-ticket-modal.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=support-ticket-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupportTicketModalComponent, { className: "SupportTicketModalComponent", filePath: "libs/form-fields/src/lib/support-ticket-modal.component.ts", lineNumber: 163 });
})();

// libs/users/src/lib/wfh-settings-modal.component.ts
function WFHSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-checkbox", 12);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_For_3_Template_mat_checkbox_ngModelChange_4_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setWeekdayEnabled(day_r2.getDay(), $event);
      return \u0275\u0275resetView($event && ctx_r2.initialiseDay(day_r2.getDay()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, day_r2, "EEE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.weekdays_enabled()[day_r2.getDay()]);
    \u0275\u0275control();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    \u0275\u0275property("value", type_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r7.name, " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_40_r9 = \u0275\u0275nextContext().$index;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addBlock(ctx_r2.settings()[day_r6.getDay()], \u0275$index_40_r9));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_40_r9 = \u0275\u0275nextContext().$index;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeBlock(ctx_r2.settings()[day_r6.getDay()], \u0275$index_40_r9));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_a_time_field_ngModelChange_1_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setStartTime(block_r5, day_r6.getDay(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_a_time_field_ngModelChange_2_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setEndTime(block_r5, day_r6.getDay(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "mat-form-field", 19)(4, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_mat_select_ngModelChange_4_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(block_r5.location, $event) || (block_r5.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_For_6_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template, 3, 0, "button", 21);
    \u0275\u0275conditionalCreate(8, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const \u0275$index_40_r9 = ctx.$index;
    const day_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.timeFrom(block_r5.start_time))("from", ctx_r2.timeFrom((\u0275$index_40_r9 > 0 ? ctx_r2.settings()[day_r6.getDay()].blocks[\u0275$index_40_r9 - 1]?.end_time : 0) || 0))("no_error", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.timeFrom(block_r5.end_time))("from", ctx_r2.timeFrom(block_r5.start_time + 0.25))("no_error", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", block_r5.location);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_40_r9 === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_40_r9 !== 0 ? 8 : -1);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275repeaterCreate(2, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template, 9, 9, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.settings()[day_r6.getDay()].blocks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, day_r6, "EEEE"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_Template, 7, 4, "div", 14);
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.weekdays_enabled()[day_r6.getDay()] ? 0 : -1);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.WORK_HOURS"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.WORK_SETTINGS_EMPTY"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6);
    \u0275\u0275repeaterCreate(2, WFHSettingsModalComponent_Conditional_5_For_3_Template, 5, 5, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_5_Conditional_7_Template, 6, 3, "div", 9)(8, WFHSettingsModalComponent_Conditional_5_Conditional_8_Template, 5, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "COMMON.WORK_DAYS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.has_working_days() ? 7 : 8);
  }
}
function WFHSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.WORK_SETTINGS_SAVE"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 28);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var WFHSettingsModalComponent = class _WFHSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.options = signal(
      [],
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.option = signal(
      "",
      ...ngDevMode ? [{ debugName: "option" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = signal(
      [],
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekdays_enabled = signal(
      {},
      ...ngDevMode ? [{ debugName: "weekdays_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = signal(
      false,
      ...ngDevMode ? [{ debugName: "changed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_weekdays = signal(
      [],
      ...ngDevMode ? [{ debugName: "available_weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.days = new Array(7).fill(0).map((_, idx) => addDays(startOfWeek(addDays(Date.now(), 30)), idx));
    this.has_working_days = computed(
      () => {
        const weekdays_enabled = this.weekdays_enabled();
        return Object.keys(weekdays_enabled).some((day) => weekdays_enabled[day]);
      },
      ...ngDevMode ? [{ debugName: "has_working_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.option_name = computed(
      () => this.options().find((_) => _.id === this.option())?.name || "",
      ...ngDevMode ? [{ debugName: "option_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = computed(
      () => startOfMinute(Date.now()).getTime(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const user = currentUser();
    const prefs = this._data?.local ? this._data.preferences : user.work_preferences;
    const settings = [
      ...(prefs || []).map((_) => __spreadProps(__spreadValues({}, _), {
        blocks: [..._?.blocks || []]
      }))
    ];
    const weekdays_enabled = {};
    for (const day of settings) {
      if (day.blocks.length)
        weekdays_enabled[day.day_of_week] = true;
    }
    this.settings.set(settings);
    this.weekdays_enabled.set(weekdays_enabled);
    const options2 = [
      { id: "wfo", name: i18n("COMMON.WORK_OFFICE"), icon: "business" },
      { id: "wfh", name: i18n("COMMON.WORK_HOME"), icon: "home" },
      { id: "aol", name: i18n("COMMON.WORK_LEAVE"), icon: "event_busy" }
    ];
    this.options.set(options2);
    this.option.set(options2[0].id);
  }
  timeFrom(hours) {
    return startOfMinute(set(addDays(/* @__PURE__ */ new Date(), 1), {
      hours: Math.floor(hours),
      minutes: hours * 60 % 60
    })).getTime();
  }
  fromTime(time) {
    const date = new Date(time);
    return date.getHours() + date.getMinutes() / 60;
  }
  initialiseDay(day) {
    const settings = this.settings();
    if (!settings[day])
      settings[day] = { day_of_week: day, blocks: [] };
    if (!settings[day].blocks)
      settings[day].blocks = [];
    if (settings[day].blocks.length === 0) {
      this.addBlock(settings[day], 0);
    }
    this.settings.set([...settings]);
  }
  addBlock(pref, index) {
    pref.blocks.splice(index + 1, 0, {
      start_time: 9,
      end_time: 17,
      location: "wfo"
    });
    this.cleanupBlocks(pref);
    this.settings.update((settings) => [...settings]);
  }
  removeBlock(pref, index) {
    if (pref.blocks.length <= 1)
      return;
    pref.blocks.splice(index, 1);
    this.settings.update((settings) => [...settings]);
  }
  setEndTime(block2, day, time) {
    setTimeout(() => {
      block2.end_time = this.fromTime(time);
      this.cleanupBlocks(this.settings()[day]);
      this.settings.update((settings) => [...settings]);
    }, 50);
  }
  setStartTime(block2, day, time) {
    setTimeout(() => {
      block2.start_time = this.fromTime(time);
      this.cleanupBlocks(this.settings()[day]);
      this.settings.update((settings) => [...settings]);
    }, 50);
  }
  cleanupBlocks(pref) {
    if (!pref?.blocks?.length)
      return;
    for (let i = 0; i < pref.blocks.length; i++) {
      const block2 = pref.blocks[i];
      if (i > 0) {
        if (block2.start_time < pref.blocks[i - 1].end_time) {
          block2.start_time = pref.blocks[i - 1].end_time;
        }
      }
      if (block2.end_time <= block2.start_time) {
        block2.end_time = block2.start_time + 1;
      }
    }
  }
  async saveChanges(close = true) {
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const new_settings = new Array(7).fill(0).map((_, idx) => ({ day_of_week: idx, blocks: [] }));
    for (const day of this.days) {
      const day_of_week = day.getDay();
      if (this.weekdays_enabled()[day_of_week]) {
        new_settings[day_of_week] = {
          day_of_week,
          blocks: this.settings()[day_of_week].blocks
        };
      }
    }
    if (!this._data?.local) {
      const user = await La("current");
      await Ga(user.id, __spreadProps(__spreadValues({}, user), {
        groups: user.groups.filter((_) => !_.startsWith("placeos_")),
        work_preferences: new_settings
      })).catch((e) => {
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
        notifyError("Unable to save user work preferences.");
        throw e;
      });
    }
    this.loading.set(false);
    this._dialog_ref.disableClose = false;
    if (close) {
      if (!this._data?.local)
        reloadUserData();
      this._dialog_ref.close(new_settings);
    }
  }
  setWeekdayEnabled(day, enabled) {
    this.weekdays_enabled.update((current) => __spreadProps(__spreadValues({}, current), {
      [day]: enabled
    }));
  }
  static {
    this.\u0275fac = function WFHSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WFHSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WFHSettingsModalComponent, selectors: [["wfh-settings-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "relative", "flex", "max-h-[calc(100vh-9rem)]", "w-160", "max-w-full", "flex-col", "space-y-2", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "px-2", "py-4", "sm:max-h-[65vh]", "sm:p-4"], ["loading", "", 1, "bg-base-100", "relative", "flex", "h-72", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded-sm", "text-center"], [1, "border-base-200", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "border-base-300", "relative", "mb-4", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border", "p-2"], [1, "flex", "flex-1", "flex-col", "items-center", "pt-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2"], [1, "border-base-300", "relative", "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-4", "rounded-sm", "border", "px-2", "pt-6", "pb-4", "sm:px-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-8", "py-16"], [1, "text-xs", "font-bold", "uppercase"], [3, "ngModelChange", "ngModel"], [1, "bg-base-100", "absolute", "top-0", "left-2", "m-0!", "-translate-y-1/2", "px-2"], [1, "border-base-200", "relative", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border", "p-2"], [1, "w-1/2", "flex-1", "space-y-2", "pt-2"], [1, "flex", "items-center", "space-x-2"], [1, "border-base-200", "bg-base-100", "bg-opacity-50", "absolute", "top-0", "left-2", "-translate-y-1/2", "rounded-sm", "border", "px-2", "text-sm", "font-medium"], [1, "w-1/4", "flex-1", 3, "ngModelChange", "ngModel", "from", "no_error"], ["appearance", "outline", 1, "no-subscript", "w-1/4", "flex-1"], [3, "value"], ["icon", "", "matRipple", "", 1, "border-base-400", "h-12", "w-12", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "border-base-400", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["src", "assets/icons/no-results.svg", 1, "m-auto"], [1, "opacity-30"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function WFHSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, WFHSettingsModalComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, WFHSettingsModalComponent_Conditional_5_Template, 9, 4, "main", 3)(6, WFHSettingsModalComponent_Conditional_6_Template, 5, 4, "div", 4);
        \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_7_Template, 4, 3, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.WORK_LOCATION_SETTINGS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TimeFieldComponent,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WFHSettingsModalComponent, [{
    type: Component,
    args: [{ selector: `wfh-settings-modal`, template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.WORK_LOCATION_SETTINGS' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="relative flex max-h-[calc(100vh-9rem)] w-160 max-w-full flex-col space-y-2 overflow-x-hidden overflow-y-auto rounded-sm px-2 py-4 sm:max-h-[65vh] sm:p-4"
            >
                <div
                    class="border-base-300 relative mb-4 flex w-full items-center justify-between space-x-2 rounded-sm border p-2"
                >
                    @for (day of days; track day) {
                        <div class="flex flex-1 flex-col items-center pt-2">
                            <div class="text-xs font-bold uppercase">
                                {{ day | date: 'EEE' }}
                            </div>
                            <mat-checkbox
                                [ngModel]="weekdays_enabled()[day.getDay()]"
                                (ngModelChange)="
                                    setWeekdayEnabled(day.getDay(), $event);
                                    $event && initialiseDay(day.getDay())
                                "
                            >
                            </mat-checkbox>
                        </div>
                    }
                    <h3
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2"
                    >
                        {{ 'COMMON.WORK_DAYS' | translate }}
                    </h3>
                </div>
                @if (has_working_days()) {
                    <div
                        class="border-base-300 relative flex w-full flex-col items-center justify-between space-y-4 rounded-sm border px-2 pt-6 pb-4 sm:px-4"
                    >
                        @for (day of days; track day) {
                            @if (weekdays_enabled()[day.getDay()]) {
                                <div
                                    class="border-base-200 relative flex w-full items-center justify-between space-x-2 rounded-sm border p-2"
                                >
                                    <div class="w-1/2 flex-1 space-y-2 pt-2">
                                        @for (
                                            block of settings()[day.getDay()]
                                                .blocks;
                                            track block;
                                            let i = $index
                                        ) {
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(
                                                            block.start_time
                                                        )
                                                    "
                                                    (ngModelChange)="
                                                        setStartTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            (i > 0
                                                                ? settings()[
                                                                      day.getDay()
                                                                  ].blocks[
                                                                      i - 1
                                                                  ]?.end_time
                                                                : 0) || 0
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(block.end_time)
                                                    "
                                                    (ngModelChange)="
                                                        setEndTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            block.start_time +
                                                                0.25
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="no-subscript w-1/4 flex-1"
                                                >
                                                    <mat-select
                                                        [(ngModel)]="
                                                            block.location
                                                        "
                                                    >
                                                        @for (
                                                            type of options();
                                                            track type
                                                        ) {
                                                            <mat-option
                                                                [value]="
                                                                    type.id
                                                                "
                                                            >
                                                                {{ type.name }}
                                                            </mat-option>
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                                @if (i === 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        (click)="
                                                            addBlock(
                                                                settings()[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                        class="border-base-400 h-12 w-12 rounded-sm border"
                                                    >
                                                        <icon>add</icon>
                                                    </button>
                                                }
                                                @if (i !== 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        class="border-error text-error h-12 w-12 rounded-sm border"
                                                        (click)="
                                                            removeBlock(
                                                                settings()[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                    >
                                                        <icon>delete</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                    <h3
                                        class="border-base-200 bg-base-100 bg-opacity-50 absolute top-0 left-2 -translate-y-1/2 rounded-sm border px-2 text-sm font-medium"
                                    >
                                        {{ day | date: 'EEEE' }}
                                    </h3>
                                </div>
                            }
                        }
                        <h3
                            class="bg-base-100 absolute top-0 left-2 m-0! -translate-y-1/2 px-2"
                        >
                            {{ 'COMMON.WORK_HOURS' | translate }}
                        </h3>
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-8 py-16"
                    >
                        <img src="assets/icons/no-results.svg" class="m-auto" />
                        <p class="opacity-30">
                            {{ 'COMMON.WORK_SETTINGS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </main>
        } @else {
            <div
                loading
                class="bg-base-100 relative flex h-72 w-[24rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm text-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'COMMON.WORK_SETTINGS_SAVE' | translate }}
                </p>
            </div>
        }
        @if (!loading()) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button btn matRipple class="w-48" (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      CommonModule,
      MatDialogModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      TimeFieldComponent,
      MatCheckboxModule,
      FormsModule,
      IconComponent,
      MatProgressSpinnerModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WFHSettingsModalComponent, { className: "WFHSettingsModalComponent", filePath: "libs/users/src/lib/wfh-settings-modal.component.ts", lineNumber: 258 });
})();

// node_modules/@angular/material/fesm2022/slider.mjs
var _c04 = ["knob"];
var _c12 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  discrete = false;
  thumbPosition;
  valueIndicatorText;
  _ripple;
  _knob;
  _valueIndicatorContainer;
  _sliderInput;
  _sliderInputEl;
  _hoverRippleRef;
  _focusRippleRef;
  _activeRippleRef;
  _isHovered = false;
  _isActive = false;
  _isValueIndicatorVisible = false;
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input2 = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input2, "pointermove", this._onPointerMove), renderer.listen(input2, "pointerdown", this._onDragStart), renderer.listen(input2, "pointerup", this._onDragEnd), renderer.listen(input2, "pointerleave", this._onMouseLeave), renderer.listen(input2, "focus", this._onFocus), renderer.listen(input2, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5)(_c04, 5)(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-mdc-slider .mdc-slider__tick-marks {\n  justify-content: start;\n}\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {\n  position: absolute;\n  left: 2px;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-mdc-slider .mdc-slider__tick-marks {\n  justify-content: start;\n}\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {\n  position: absolute;\n  left: 2px;\n}\n"]
    }]
  }], null, {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _trackActive;
  _thumbs;
  _input;
  _inputs;
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  color;
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.min = min;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.max = max;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.step = this._step;
      if (this._platform.SAFARI) {
        input2.value = input2.value;
      }
      input2._updateThumbUIByValue();
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  displayWith = (value) => `${value}`;
  _tickMarks;
  _noopAnimations = _animationsDisabled();
  _resizeObserver = null;
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  startValueIndicatorText = "";
  endValueIndicatorText = "";
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  _isRtl = computed(() => this._dir?.valueSignal() === "rtl", ...ngDevMode ? [{
    debugName: "_isRtl"
  }] : []);
  _hasViewInitialized = false;
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    let prevIsRtl = this._isRtl();
    afterRenderEffect(() => {
      const isRtl = this._isRtl();
      if (isRtl !== prevIsRtl) {
        prevIsRtl = isRtl;
        this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
        this._updateTickMarkUI();
      }
    });
  }
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    input2._updateThumbUIByValue();
  }
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input2 = this._getInput(thumbPosition);
    if (!input2) {
      return this.min;
    }
    return input2.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl() ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px)`;
  }
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  _thumbsOverlap = false;
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl() ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl() ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5)(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5)(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  pointer-events: none;\n  height: var(--mat-slider-inactive-track-height, 4px);\n}\n\n.mdc-slider__track--active,\n.mdc-slider__track--inactive {\n  display: flex;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__track--active {\n  overflow: hidden;\n  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));\n  height: var(--mat-slider-active-track-height, 4px);\n  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);\n}\n\n.mdc-slider__track--active_fill {\n  border-top-style: solid;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-origin: left;\n  transition: transform 80ms ease;\n  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-slider-active-track-height, 4px);\n}\n.mdc-slider--disabled .mdc-slider__track--active_fill {\n  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));\n}\n[dir=rtl] .mdc-slider__track--active_fill {\n  -webkit-transform-origin: right;\n  transform-origin: right;\n}\n\n.mdc-slider__track--inactive {\n  left: 0;\n  top: 0;\n  opacity: 0.24;\n  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));\n  height: var(--mat-slider-inactive-track-height, 4px);\n  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider--disabled .mdc-slider__track--inactive {\n  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));\n  opacity: 0.24;\n}\n.mdc-slider__track--inactive::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__track--inactive::before {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-container {\n  bottom: 44px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {\n  pointer-events: auto;\n}\n\n.mdc-slider__value-indicator {\n  display: flex;\n  align-items: center;\n  transform: scale(0);\n  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);\n  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);\n  word-break: normal;\n  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));\n  width: var(--mat-slider-value-indicator-width, 28px);\n  height: var(--mat-slider-value-indicator-height, 28px);\n  padding: var(--mat-slider-value-indicator-padding, 0);\n  opacity: var(--mat-slider-value-indicator-opacity, 1);\n  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {\n  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(1);\n}\n.mdc-slider__value-indicator::before {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid;\n  bottom: -5px;\n  content: "";\n  height: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  display: var(--mat-slider-value-indicator-caret-display, none);\n  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n}\n.mdc-slider__value-indicator::after {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__value-indicator::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-text {\n  text-align: center;\n  width: var(--mat-slider-value-indicator-width, 28px);\n  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));\n  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));\n  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));\n  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));\n  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));\n  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));\n}\n\n.mdc-slider__thumb {\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  left: -24px;\n  outline: none;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  pointer-events: none;\n}\n.mdc-slider--discrete .mdc-slider__thumb {\n  transition: transform 80ms ease;\n}\n.mdc-slider--disabled .mdc-slider__thumb {\n  pointer-events: none;\n}\n\n.mdc-slider__thumb--top {\n  z-index: 1;\n}\n\n.mdc-slider__thumb-knob {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-style: solid;\n  width: var(--mat-slider-handle-width, 20px);\n  height: var(--mat-slider-handle-height, 20px);\n  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);\n  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));\n  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider__thumb:hover .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider--disabled .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  border: solid 1px #fff;\n  box-sizing: content-box;\n  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));\n  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);\n}\n\n.mdc-slider__tick-marks {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding: 0 1px;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__tick-mark--active,\n.mdc-slider__tick-mark--inactive {\n  width: var(--mat-slider-with-tick-marks-container-size, 2px);\n  height: var(--mat-slider-with-tick-marks-container-size, 2px);\n  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));\n}\n\n.mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-slider--disabled .mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));\n}\n\n.mdc-slider__tick-mark--active {\n  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));\n}\n\n.mdc-slider__input {\n  cursor: pointer;\n  left: 2px;\n  margin: 0;\n  height: 44px;\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  width: 44px;\n  box-sizing: content-box;\n}\n.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {\n  pointer-events: none;\n}\n.mdc-slider__input.mat-slider__right-input {\n  left: auto;\n  right: 0;\n}\n\n.mat-mdc-slider {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  vertical-align: middle;\n  cursor: pointer;\n  height: 48px;\n  margin: 0 8px;\n  position: relative;\n  touch-action: pan-y;\n  width: auto;\n  min-width: 112px;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-slider.mdc-slider--disabled {\n  cursor: auto;\n  opacity: 0.38;\n}\n.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {\n  cursor: auto;\n}\n.mat-mdc-slider .mdc-slider__thumb,\n.mat-mdc-slider .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider .mat-ripple .mat-ripple-element {\n  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {\n  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {\n  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));\n}\n.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,\n.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {\n  transition: none;\n}\n.mat-mdc-slider .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n\n.mdc-slider__thumb--focused .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  pointer-events: none;\n  height: var(--mat-slider-inactive-track-height, 4px);\n}\n\n.mdc-slider__track--active,\n.mdc-slider__track--inactive {\n  display: flex;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__track--active {\n  overflow: hidden;\n  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));\n  height: var(--mat-slider-active-track-height, 4px);\n  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);\n}\n\n.mdc-slider__track--active_fill {\n  border-top-style: solid;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-origin: left;\n  transition: transform 80ms ease;\n  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-slider-active-track-height, 4px);\n}\n.mdc-slider--disabled .mdc-slider__track--active_fill {\n  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));\n}\n[dir=rtl] .mdc-slider__track--active_fill {\n  -webkit-transform-origin: right;\n  transform-origin: right;\n}\n\n.mdc-slider__track--inactive {\n  left: 0;\n  top: 0;\n  opacity: 0.24;\n  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));\n  height: var(--mat-slider-inactive-track-height, 4px);\n  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider--disabled .mdc-slider__track--inactive {\n  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));\n  opacity: 0.24;\n}\n.mdc-slider__track--inactive::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__track--inactive::before {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-container {\n  bottom: 44px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {\n  pointer-events: auto;\n}\n\n.mdc-slider__value-indicator {\n  display: flex;\n  align-items: center;\n  transform: scale(0);\n  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);\n  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);\n  word-break: normal;\n  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));\n  width: var(--mat-slider-value-indicator-width, 28px);\n  height: var(--mat-slider-value-indicator-height, 28px);\n  padding: var(--mat-slider-value-indicator-padding, 0);\n  opacity: var(--mat-slider-value-indicator-opacity, 1);\n  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {\n  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(1);\n}\n.mdc-slider__value-indicator::before {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid;\n  bottom: -5px;\n  content: "";\n  height: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  display: var(--mat-slider-value-indicator-caret-display, none);\n  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n}\n.mdc-slider__value-indicator::after {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__value-indicator::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-text {\n  text-align: center;\n  width: var(--mat-slider-value-indicator-width, 28px);\n  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));\n  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));\n  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));\n  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));\n  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));\n  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));\n}\n\n.mdc-slider__thumb {\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  left: -24px;\n  outline: none;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  pointer-events: none;\n}\n.mdc-slider--discrete .mdc-slider__thumb {\n  transition: transform 80ms ease;\n}\n.mdc-slider--disabled .mdc-slider__thumb {\n  pointer-events: none;\n}\n\n.mdc-slider__thumb--top {\n  z-index: 1;\n}\n\n.mdc-slider__thumb-knob {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-style: solid;\n  width: var(--mat-slider-handle-width, 20px);\n  height: var(--mat-slider-handle-height, 20px);\n  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);\n  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));\n  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider__thumb:hover .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider--disabled .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  border: solid 1px #fff;\n  box-sizing: content-box;\n  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));\n  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);\n}\n\n.mdc-slider__tick-marks {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding: 0 1px;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__tick-mark--active,\n.mdc-slider__tick-mark--inactive {\n  width: var(--mat-slider-with-tick-marks-container-size, 2px);\n  height: var(--mat-slider-with-tick-marks-container-size, 2px);\n  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));\n}\n\n.mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-slider--disabled .mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));\n}\n\n.mdc-slider__tick-mark--active {\n  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));\n}\n\n.mdc-slider__input {\n  cursor: pointer;\n  left: 2px;\n  margin: 0;\n  height: 44px;\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  width: 44px;\n  box-sizing: content-box;\n}\n.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {\n  pointer-events: none;\n}\n.mdc-slider__input.mat-slider__right-input {\n  left: auto;\n  right: 0;\n}\n\n.mat-mdc-slider {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  vertical-align: middle;\n  cursor: pointer;\n  height: 48px;\n  margin: 0 8px;\n  position: relative;\n  touch-action: pan-y;\n  width: auto;\n  min-width: 112px;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-slider.mdc-slider--disabled {\n  cursor: auto;\n  opacity: 0.38;\n}\n.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {\n  cursor: auto;\n}\n.mat-mdc-slider .mdc-slider__thumb,\n.mat-mdc-slider .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider .mat-ripple .mat-ripple-element {\n  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {\n  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {\n  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));\n}\n.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,\n.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {\n  transition: none;\n}\n.mat-mdc-slider .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n\n.mdc-slider__thumb--focused .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  valueChange = new EventEmitter();
  dragStart = new EventEmitter();
  dragEnd = new EventEmitter();
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  thumbPosition = _MatThumb.END;
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl() ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl() ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  _hostElement = this._elementRef.nativeElement;
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  _knobRadius = 8;
  _tickMarkOffset = 3;
  _isActive = false;
  _isFocused = false;
  _setIsFocused(v) {
    this._isFocused = v;
  }
  _hasSetInitialValue = false;
  _initialValue;
  _formControl;
  _destroyed = new Subject();
  _skipUIUpdate = false;
  _onChangeFn;
  _onTouchedFn = () => {
  };
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl() ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl()) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  _updateWidthActive() {
  }
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options2) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options2);
  }
  _updateThumbUIByPointerEvent(event, options2) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options2);
  }
  _updateThumbUI(options2) {
    this._slider._setTransition(!!options2?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl() || !this._isEndThumb && !this._slider._isRtl();
  }
  _isLeftThumb = false;
  _isEndThumb = false;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
    }]
  }], null, null);
})();

// libs/components/src/lib/accessibility-tooltip.component.ts
function AccessibilityTooltipComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 6);
    \u0275\u0275listener("ngModelChange", function AccessibilityTooltipComponent_Conditional_8_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDarkMode($event));
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "icon", 8);
    \u0275\u0275text(3, "mode_night");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.dark_mode())("toggle", true);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "COMMON.DARK_MODE"));
  }
}
function AccessibilityTooltipComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 6);
    \u0275\u0275listener("ngModelChange", function AccessibilityTooltipComponent_Conditional_9_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLocatable($event));
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "icon", 8);
    \u0275\u0275text(3, "emergency_share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.locatable())("toggle", true);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "COMMON.LOCATABLE"));
  }
}
function AccessibilityTooltipComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "span", 11);
    \u0275\u0275text(5, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-slider", 12)(7, "input", 13);
    \u0275\u0275listener("ngModelChange", function AccessibilityTooltipComponent_Conditional_17_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applySetting("font_size", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 2);
    \u0275\u0275text(9, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "COMMON.TEXT_SIZE_MSG"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 10)("max", 24)("step", 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.font_size());
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.font_size(), "px ");
  }
}
var AccessibilityTooltipComponent = class _AccessibilityTooltipComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(CustomTooltipData);
    this._settings = inject(SettingsService);
    this.accessible = signal(
      false,
      ...ngDevMode ? [{ debugName: "accessible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locatable = signal(
      false,
      ...ngDevMode ? [{ debugName: "locatable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_locate = settingSignal("allow_locatability_option", true);
    this._allow_dark_mode = this._settings.signal("allow_dark_mode", false);
    this._font_size = this._settings.signal("font_size", 16, true);
    this._accessible = this._settings.signal("accessible", false, true);
    this._theme = this._settings.theme_signal;
    this.dark_mode = computed(
      () => this._theme() === "dark",
      ...ngDevMode ? [{ debugName: "dark_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_change_dark_mode = computed(
      () => !!this._allow_dark_mode(),
      ...ngDevMode ? [{ debugName: "can_change_dark_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.font_size = this._font_size;
    this.applySetting = (n, v) => this.timeout("apply_setting", () => {
      this._settings.saveUserSetting(n, v);
      if (n === "accessible") {
        this.accessible.set(v);
      }
    }, 500);
    this.close = () => this._data?.close();
    this.setLocatable = (l) => {
      this._settings.updateLocatable(l);
      this.locatable.set(l);
    };
  }
  async ngOnInit() {
    this.accessible.set(!!this._accessible());
    this.subscription("user", current_user.subscribe((u) => {
      this.locatable.set(u.locatable);
    }));
  }
  setDarkMode(state) {
    const theme = this._theme();
    if (state && theme !== "dark")
      this._settings.setTheme("dark");
    else if (!state && theme === "dark")
      this._settings.setTheme("light");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AccessibilityTooltipComponent_BaseFactory;
      return function AccessibilityTooltipComponent_Factory(__ngFactoryType__) {
        return (\u0275AccessibilityTooltipComponent_BaseFactory || (\u0275AccessibilityTooltipComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AccessibilityTooltipComponent)))(__ngFactoryType__ || _AccessibilityTooltipComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityTooltipComponent, selectors: [["accessibility-tooltip"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 11, consts: [[1, "bg-base-100", "relative", "-top-12", "-right-1", "flex", "max-h-[65vh]", "w-[20rem]", "flex-col", "overflow-auto", "rounded-sm", "pb-3", "shadow-sm"], ["matRipple", "", 1, "border-base-300", "flex", "items-center", "space-x-2", "border-b", "px-2", "py-3", 3, "click"], [1, "text-2xl"], [1, ""], [1, "space-y-2", "p-2"], [3, "ngModel", "toggle"], [3, "ngModelChange", "ngModel", "toggle"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", "text-xl"], [1, "bg-base-200", "px-8", "py-4", "text-center"], [1, "flex", "items-center", "space-x-4", "px-4"], [1, "text-sm"], [1, "w-1/2", "flex-1", "text-[16px]", 3, "min", "max", "step"], ["matSliderThumb", "", 1, "text-[16px]", 3, "ngModelChange", "ngModel"], [1, "bg-base-300", "my-2", "rounded-sm", "px-2", "py-1", "text-base", "text-white"]], template: function AccessibilityTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function AccessibilityTooltipComponent_Template_div_click_1_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(2, "icon", 2);
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275conditionalCreate(8, AccessibilityTooltipComponent_Conditional_8_Template, 7, 5, "settings-toggle", 5);
        \u0275\u0275conditionalCreate(9, AccessibilityTooltipComponent_Conditional_9_Template, 7, 5, "settings-toggle", 5);
        \u0275\u0275elementStart(10, "settings-toggle", 6);
        \u0275\u0275listener("ngModelChange", function AccessibilityTooltipComponent_Template_settings_toggle_ngModelChange_10_listener($event) {
          return ctx.applySetting("accessible", $event);
        });
        \u0275\u0275elementStart(11, "div", 7)(12, "icon", 8);
        \u0275\u0275text(13, "playlist_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, AccessibilityTooltipComponent_Conditional_17_Template, 12, 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "COMMON.CONTROLS_ACCESSIBILITY"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.can_change_dark_mode() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_locate() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.accessible())("toggle", true);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 9, "COMMON.TEXT_SIZE"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.accessible() ? 17 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      SettingsToggleComponent,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibilityTooltipComponent, [{
    type: Component,
    args: [{ selector: "accessibility-tooltip", template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-[20rem] flex-col overflow-auto rounded-sm pb-3 shadow-sm"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-3"
                (click)="close()"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">
                    {{ 'COMMON.CONTROLS_ACCESSIBILITY' | translate }}
                </div>
            </div>
            <div class="space-y-2 p-2">
                @if (can_change_dark_mode()) {
                    <settings-toggle
                        [ngModel]="dark_mode()"
                        (ngModelChange)="setDarkMode($event)"
                        [toggle]="true"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="-ml-2 text-xl">mode_night</icon>
                            <div>{{ 'COMMON.DARK_MODE' | translate }}</div>
                        </div>
                    </settings-toggle>
                }
                @if (can_locate()) {
                    <settings-toggle
                        [ngModel]="locatable()"
                        (ngModelChange)="setLocatable($event)"
                        [toggle]="true"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="-ml-2 text-xl">emergency_share</icon>
                            <div>{{ 'COMMON.LOCATABLE' | translate }}</div>
                        </div>
                    </settings-toggle>
                }
                <settings-toggle
                    [ngModel]="accessible()"
                    (ngModelChange)="applySetting('accessible', $event)"
                    [toggle]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="-ml-2 text-xl">playlist_add</icon>
                        <div>{{ 'COMMON.TEXT_SIZE' | translate }}</div>
                    </div>
                </settings-toggle>
            </div>
            @if (accessible()) {
                <div class="bg-base-200 px-8 py-4 text-center">
                    {{ 'COMMON.TEXT_SIZE_MSG' | translate }}
                </div>
                <div class="flex items-center space-x-4 px-4">
                    <span class="text-sm">A</span>
                    <mat-slider
                        class="w-1/2 flex-1 text-[16px]"
                        [min]="10"
                        [max]="24"
                        [step]="2"
                    >
                        <input
                            matSliderThumb
                            class="text-[16px]"
                            [ngModel]="font_size()"
                            (ngModelChange)="applySetting('font_size', $event)"
                        />
                    </mat-slider>
                    <span class="text-2xl">A</span>
                    <span
                        class="bg-base-300 my-2 rounded-sm px-2 py-1 text-base text-white"
                    >
                        {{ font_size() }}px
                    </span>
                </div>
            }
        </div>
    `, imports: [
      MatRippleModule,
      MatSliderModule,
      SettingsToggleComponent,
      IconComponent,
      TranslatePipe,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityTooltipComponent, { className: "AccessibilityTooltipComponent", filePath: "libs/components/src/lib/accessibility-tooltip.component.ts", lineNumber: 107 });
})();

// libs/components/src/lib/building-select.component.ts
function BuildingSelectComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-button", 8);
    \u0275\u0275listener("click", function BuildingSelectComponent_For_15_Template_mat_radio_button_click_0_listener() {
      const bld_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBuilding(bld_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r2 = ctx.$implicit;
    \u0275\u0275property("value", bld_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r2.display_name || bld_r2.name, " ");
  }
}
var BuildingSelectComponent = class _BuildingSelectComponent {
  constructor() {
    this._data = inject(CustomTooltipData);
    this._org = inject(OrganisationService);
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.setBuilding = (b) => {
      this._org.setBuilding(b, true);
      this._data?.close();
    };
    this.close = () => this._data?.close();
  }
  static {
    this.\u0275fac = function BuildingSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingSelectComponent, selectors: [["building-select"]], decls: 16, vars: 8, consts: [[1, "bg-base-100", "relative", "-top-12", "-right-1", "flex", "max-h-[65vh]", "w-74", "flex-col", "overflow-auto", "rounded-sm", "pb-3", "shadow-sm", 3, "click"], ["matRipple", "", 1, "border-base-300", "flex", "items-center", "space-x-2", "border-b", "px-2", "py-3"], [1, "text-2xl"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2", "text-xs", "opacity-60"], [1, "flex", "flex-col", "space-y-2", "px-2", 3, "ngModel"], [3, "value"], [3, "click", "value"]], template: function BuildingSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function BuildingSelectComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "icon", 2);
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-radio-group", 6);
        \u0275\u0275repeaterCreate(14, BuildingSelectComponent_For_15_Template, 2, 2, "mat-radio-button", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.building()?.display_name || ctx.building()?.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "RESOURCE.BUILDING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "COMMON.BUILDING_SELECT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.building()?.id);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.buildings());
      }
    }, dependencies: [
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      IconComponent,
      MatRippleModule,
      MatRipple,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingSelectComponent, [{
    type: Component,
    args: [{ selector: "building-select", template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-74 flex-col overflow-auto rounded-sm pb-3 shadow-sm"
            (click)="close()"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-3"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="leading-tight">
                    <div>
                        {{ building()?.display_name || building()?.name }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ 'RESOURCE.BUILDING' | translate }}
                    </div>
                </div>
            </div>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ 'COMMON.BUILDING_SELECT' | translate }}
            </div>
            <mat-radio-group
                [ngModel]="building()?.id"
                class="flex flex-col space-y-2 px-2"
            >
                @for (bld of buildings(); track bld) {
                    <mat-radio-button
                        [value]="bld.id"
                        (click)="setBuilding(bld)"
                    >
                        {{ bld.display_name || bld.name }}
                    </mat-radio-button>
                }
            </mat-radio-group>
        </div>
    `, imports: [
      MatRadioModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingSelectComponent, { className: "BuildingSelectComponent", filePath: "libs/components/src/lib/building-select.component.ts", lineNumber: 58 });
})();

// libs/components/src/lib/desk-height-presets.component.ts
function DeskHeightPresetsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESK_HEIGHT_NOT_SET"), " ");
  }
}
function DeskHeightPresetsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DeskHeightPresetsComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SAVE"), " ");
  }
}
var DeskHeightPresetsComponent = class _DeskHeightPresetsComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_close = model(
      false,
      ...ngDevMode ? [{ debugName: "show_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
    this.not_set = signal(
      false,
      ...ngDevMode ? [{ debugName: "not_set" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_sitting_height = signal(
      71,
      ...ngDevMode ? [{ debugName: "desk_sitting_height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_standing_height = signal(
      101,
      ...ngDevMode ? [{ debugName: "desk_standing_height" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.not_set.set(!this._settings.get("desk_sitting_height") && !this._settings.get("desk_standing_height"));
    this.desk_sitting_height.set(this._settings.get("desk_sitting_height") || 71);
    this.desk_standing_height.set(this._settings.get("desk_standing_height") || 101);
  }
  onClose() {
    this.saveSetting("desk_sitting_height", this.desk_sitting_height());
    this.saveSetting("desk_standing_height", this.desk_standing_height());
    this.close.emit();
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  saveSetting(name, value) {
    this._settings.saveUserSetting(name, value);
  }
  static {
    this.\u0275fac = function DeskHeightPresetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskHeightPresetsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskHeightPresetsComponent, selectors: [["desk-height-presets"]], inputs: { show_close: [1, "show_close"] }, outputs: { show_close: "show_closeChange", close: "close" }, decls: 29, vars: 23, consts: [[1, "bg-base-100", "relative", "w-[20rem]", "rounded-sm", "p-4", "shadow-sm"], [1, "mb-2", "text-lg"], [1, "mb-4", "text-xs", "opacity-60"], [1, "bg-warning", "text-warning-content", "-mx-2", "mb-4", "rounded-sm", "p-2", "text-xs"], [1, "mt-2", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "80", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "w-12", "text-right", "text-sm"], [1, "mr-2", "flex", "items-center", "space-x-2"], ["min", "90", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], [1, "mr-2", "w-12", "text-right", "text-sm"], ["btn", "", "matRipple", "", 1, "mt-2", "w-full"], ["btn", "", "matRipple", "", 1, "mt-2", "w-full", 3, "click"]], template: function DeskHeightPresetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, DeskHeightPresetsComponent_Conditional_7_Template, 3, 3, "div", 3);
        \u0275\u0275elementStart(8, "div", 2);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "label");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "mat-slider", 6)(17, "input", 7);
        \u0275\u0275listener("ngModelChange", function DeskHeightPresetsComponent_Template_input_ngModelChange_17_listener($event) {
          ctx.desk_sitting_height.set($event);
          return ctx.saveSetting("desk_sitting_height", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "label");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 9)(24, "mat-slider", 10)(25, "input", 7);
        \u0275\u0275listener("ngModelChange", function DeskHeightPresetsComponent_Template_input_ngModelChange_25_listener($event) {
          ctx.desk_standing_height.set($event);
          return ctx.saveSetting("desk_standing_height", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(28, DeskHeightPresetsComponent_Conditional_28_Template, 3, 3, "button", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "COMMON.DESK_HEIGHT_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "COMMON.DESK_HEIGHT_MSG"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.not_set() && ctx.show_close() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "COMMON.DESK_HEIGHT_INFO"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, "COMMON.DESK_HEIGHT_SITTING"));
        \u0275\u0275advance(3);
        \u0275\u0275property("displayWith", ctx.formatLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.desk_sitting_height());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.desk_sitting_height().toFixed(1), "cm ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 21, "COMMON.DESK_HEIGHT_STANDING"), "t");
        \u0275\u0275advance(3);
        \u0275\u0275property("displayWith", ctx.formatLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.desk_standing_height());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.desk_standing_height().toFixed(1), "cm ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_close() ? 28 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatSliderModule, MatSlider, MatSliderThumb, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskHeightPresetsComponent, [{
    type: Component,
    args: [{ selector: "desk-height-presets", template: `
        <div class="bg-base-100 relative w-[20rem] rounded-sm p-4 shadow-sm">
            <div class="mb-2 text-lg">
                {{ 'COMMON.DESK_HEIGHT_TITLE' | translate }}
            </div>
            <div class="mb-4 text-xs opacity-60">
                {{ 'COMMON.DESK_HEIGHT_MSG' | translate }}
            </div>
            @if (not_set() && show_close()) {
                <div
                    class="bg-warning text-warning-content -mx-2 mb-4 rounded-sm p-2 text-xs"
                >
                    {{ 'COMMON.DESK_HEIGHT_NOT_SET' | translate }}
                </div>
            }
            <div class="mb-4 text-xs opacity-60">
                {{ 'COMMON.DESK_HEIGHT_INFO' | translate }}
            </div>
            <div class="mt-2 flex flex-col">
                <label>{{ 'COMMON.DESK_HEIGHT_SITTING' | translate }}</label>
                <div class="flex items-center space-x-2">
                    <mat-slider
                        min="60"
                        max="80"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input
                            matSliderThumb
                            [ngModel]="desk_sitting_height()"
                            (ngModelChange)="
                                desk_sitting_height.set($event);
                                saveSetting('desk_sitting_height', $event)
                            "
                        />
                    </mat-slider>
                    <div class="w-12 text-right text-sm">
                        {{ desk_sitting_height().toFixed(1) }}cm
                    </div>
                </div>
                <label>{{ 'COMMON.DESK_HEIGHT_STANDING' | translate }}t</label>
                <div class="mr-2 flex items-center space-x-2">
                    <mat-slider
                        min="90"
                        max="120"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input
                            matSliderThumb
                            [ngModel]="desk_standing_height()"
                            (ngModelChange)="
                                desk_standing_height.set($event);
                                saveSetting('desk_standing_height', $event)
                            "
                        />
                    </mat-slider>
                    <div class="mr-2 w-12 text-right text-sm">
                        {{ desk_standing_height().toFixed(1) }}cm
                    </div>
                </div>
            </div>
            @if (show_close()) {
                <button btn matRipple (click)="onClose()" class="mt-2 w-full">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, MatSliderModule, FormsModule] }]
  }], null, { show_close: [{ type: Input, args: [{ isSignal: true, alias: "show_close", required: false }] }, { type: Output, args: ["show_closeChange"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskHeightPresetsComponent, { className: "DeskHeightPresetsComponent", filePath: "libs/components/src/lib/desk-height-presets.component.ts", lineNumber: 93 });
})();

// libs/components/src/lib/help-tooltip.component.ts
function HelpTooltipComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "div", 5);
    \u0275\u0275element(2, "icon", 6);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    \u0275\u0275property("href", tile_r1.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", tile_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tile_r1.name);
  }
}
var HelpTooltipComponent = class _HelpTooltipComponent {
  constructor() {
    this._data = inject(CustomTooltipData);
    this._settings = inject(SettingsService);
    this._tiles = this._settings.signal("help", []);
    this.close = () => {
      this._data?.close();
    };
  }
  /** Tiles to display on the help page */
  get tiles() {
    return this._tiles();
  }
  static {
    this.\u0275fac = function HelpTooltipComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpTooltipComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpTooltipComponent, selectors: [["help-tooltip"]], decls: 9, vars: 3, consts: [[1, "bg-base-100", "relative", "-top-12", "-right-1", "flex", "w-74", "flex-col", "rounded-sm", "shadow-sm", 3, "click"], ["matRipple", "", 1, "border-base-300", "flex", "items-center", "space-x-2", "border-b", "px-2", "py-4"], [1, "text-2xl"], [1, ""], ["matRipple", "", "target", "_blank", "ref", "noreferer noopener", 1, "w-full", "p-2", "text-left", 3, "href"], [1, "hover:bg-base-200", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-2"], [1, "text-xl", 3, "icon"]], template: function HelpTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function HelpTooltipComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "icon", 2);
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(7, HelpTooltipComponent_For_8_Template, 5, 3, "a", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "COMMON.CONTROLS_HELP"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tiles);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpTooltipComponent, [{
    type: Component,
    args: [{ selector: "help-tooltip", template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex w-74 flex-col rounded-sm shadow-sm"
            (click)="close()"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-4"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">{{ 'COMMON.CONTROLS_HELP' | translate }}</div>
            </div>
            @for (tile of tiles; track tile) {
                <a
                    matRipple
                    class="w-full p-2 text-left"
                    target="_blank"
                    ref="noreferer noopener"
                    [href]="tile.link"
                >
                    <div
                        class="hover:bg-base-200 flex w-full items-center space-x-2 rounded-sm p-2"
                    >
                        <icon class="text-xl" [icon]="tile.icon"></icon>
                        <div>{{ tile.name }}</div>
                    </div>
                </a>
            }
        </div>
    `, imports: [MatRippleModule, TranslatePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpTooltipComponent, { className: "HelpTooltipComponent", filePath: "libs/components/src/lib/help-tooltip.component.ts", lineNumber: 43 });
})();

// libs/components/src/lib/language-tooltip.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LanguageSelectComponent_For_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r2.local, " ");
  }
}
function LanguageSelectComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function LanguageSelectComponent_For_11_Template_button_click_0_listener() {
      const lang_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setLocale(lang_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LanguageSelectComponent_For_11_Conditional_6_Template, 2, 1, "div", 8);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("mt-2", \u0275\u0275pipeBind1(2, 8, lang_r2.name) !== lang_r2.local)("border", ctx_r2.active_locale === lang_r2.id)("border-info", ctx_r2.active_locale === lang_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, lang_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(7, 12, lang_r2.name) !== lang_r2.local ? 6 : -1);
  }
}
var LanguageSelectComponent = class _LanguageSelectComponent {
  constructor() {
    this._data = inject(CustomTooltipData);
    this._settings = inject(SettingsService);
    this._locale = inject(LocaleService);
    this._locales = this._settings.signal("locales", []);
    this.setLocale = (code) => {
      this._locale.setLocale(code);
      localStorage.setItem("PLACEOS.locale", code);
      setTimeout(() => location.reload(), 300);
    };
    this.close = () => this._data?.close();
  }
  get active_locale() {
    return this._locale.locale;
  }
  get locales() {
    return this._locales();
  }
  static {
    this.\u0275fac = function LanguageSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSelectComponent, selectors: [["language-select"]], decls: 12, vars: 6, consts: [[1, "bg-base-100", "relative", "-top-12", "-right-1", "flex", "max-h-[65vh]", "w-74", "flex-col", "overflow-auto", "rounded-sm", "pb-3", "shadow-sm", 3, "click"], ["matRipple", "", 1, "border-base-300", "flex", "items-center", "space-x-2", "border-b", "px-2", "py-3"], [1, "text-2xl"], [1, ""], [1, "px-4", "py-2", "text-xs", "opacity-60"], ["matRipple", "", 1, "flex", "h-14", "items-center", "justify-between", "space-x-8", "px-2", "text-left"], ["matRipple", "", 1, "flex", "h-14", "items-center", "justify-between", "space-x-8", "px-2", "text-left", 3, "click"], [1, "hover:bg-base-200", "flex", "flex-1", "items-center", "justify-between", "rounded-sm", "p-2", "leading-tight"], [1, "bg-base-300", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"]], template: function LanguageSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function LanguageSelectComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "icon", 2);
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, LanguageSelectComponent_For_11_Template, 8, 14, "button", 5, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "COMMON.LANGUAGE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "COMMON.LANGUAGE_SELECT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.locales);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectComponent, [{
    type: Component,
    args: [{ selector: "language-select", template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-74 flex-col overflow-auto rounded-sm pb-3 shadow-sm"
            (click)="close()"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-3"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">{{ 'COMMON.LANGUAGE' | translate }}</div>
            </div>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ 'COMMON.LANGUAGE_SELECT' | translate }}
            </div>
            @for (lang of locales; track lang.id) {
                <button
                    matRipple
                    (click)="setLocale(lang.id)"
                    class="flex h-14 items-center justify-between space-x-8 px-2 text-left"
                >
                    <div
                        class="hover:bg-base-200 flex flex-1 items-center justify-between rounded-sm p-2 leading-tight"
                        [class.mt-2]="(lang.name | translate) !== lang.local"
                        [class.border]="active_locale === lang.id"
                        [class.border-info]="active_locale === lang.id"
                    >
                        <div>{{ lang.name | translate }}</div>
                        @if ((lang.name | translate) !== lang.local) {
                            <div
                                class="bg-base-300 rounded-sm px-2 py-1 text-xs opacity-60"
                            >
                                {{ lang.local }}
                            </div>
                        }
                    </div>
                    <!-- <div class="text-3xl">{{ lang.flag }}</div> -->
                </button>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSelectComponent, { className: "LanguageSelectComponent", filePath: "libs/components/src/lib/language-tooltip.component.ts", lineNumber: 54 });
})();

// libs/components/src/lib/region-select.component.ts
function RegionSelectComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-button", 8);
    \u0275\u0275listener("click", function RegionSelectComponent_For_15_Template_mat_radio_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRegion(item_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.display_name || item_r2.name, " ");
  }
}
var RegionSelectComponent = class _RegionSelectComponent {
  constructor() {
    this._data = inject(CustomTooltipData);
    this._org = inject(OrganisationService);
    this.regions = this._org.region_list;
    this.region = this._org.active_region;
    this.setRegion = async (i) => {
      await this._org.setRegion(i);
      this._org.setBuilding(this._org.building, true);
      this._data?.close();
    };
    this.close = () => this._data?.close();
  }
  static {
    this.\u0275fac = function RegionSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionSelectComponent, selectors: [["region-select"]], decls: 16, vars: 8, consts: [[1, "bg-base-100", "relative", "-top-12", "-right-1", "flex", "max-h-[65vh]", "w-74", "flex-col", "overflow-auto", "rounded-sm", "pb-3", "shadow-sm", 3, "click"], ["matRipple", "", 1, "border-base-300", "flex", "items-center", "space-x-2", "border-b", "px-2", "py-3"], [1, "text-2xl"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2", "text-xs", "opacity-60"], [1, "flex", "flex-col", "space-y-2", "px-2", 3, "ngModel"], [3, "value"], [3, "click", "value"]], template: function RegionSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function RegionSelectComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "icon", 2);
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-radio-group", 6);
        \u0275\u0275repeaterCreate(14, RegionSelectComponent_For_15_Template, 2, 2, "mat-radio-button", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.region()?.display_name || ctx.region()?.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "RESOURCE.REGION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "COMMON.REGION_SELECT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.region()?.id);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.regions());
      }
    }, dependencies: [
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      IconComponent,
      MatRippleModule,
      MatRipple,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionSelectComponent, [{
    type: Component,
    args: [{ selector: "region-select", template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-74 flex-col overflow-auto rounded-sm pb-3 shadow-sm"
            (click)="close()"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-3"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="leading-tight">
                    <div>
                        {{ region()?.display_name || region()?.name }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ 'RESOURCE.REGION' | translate }}
                    </div>
                </div>
            </div>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ 'COMMON.REGION_SELECT' | translate }}
            </div>
            <mat-radio-group
                [ngModel]="region()?.id"
                class="flex flex-col space-y-2 px-2"
            >
                @for (item of regions(); track item) {
                    <mat-radio-button
                        [value]="item.id"
                        (click)="setRegion(item)"
                    >
                        {{ item.display_name || item.name }}
                    </mat-radio-button>
                }
            </mat-radio-group>
        </div>
    `, imports: [
      MatRadioModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionSelectComponent, { className: "RegionSelectComponent", filePath: "libs/components/src/lib/region-select.component.ts", lineNumber: 58 });
})();

// libs/components/src/lib/user-parking-tooltip.component.ts
var UserParkingTooltipComponent = class _UserParkingTooltipComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._tooltip = inject(CustomTooltipData, { optional: true });
    this.plate_number = signal(
      "",
      ...ngDevMode ? [{ debugName: "plate_number" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._settings.initialised);
    this.plate_number.set(this._settings.get("plate_number") || "");
  }
  save() {
    if (this.plate_number()) {
      this._settings.saveUserSetting("plate_number", this.plate_number());
    }
    notifySuccess(i18n("COMMON.PARKING_SETTINGS_SAVE"));
    this._tooltip?.close();
  }
  static {
    this.\u0275fac = function UserParkingTooltipComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserParkingTooltipComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserParkingTooltipComponent, selectors: [["user-parking-tooltip"]], decls: 14, vars: 13, consts: [[1, "border-base-300", "bg-base-100", "min-w-[20rem]", "space-y-2", "rounded-md", "border", "p-2"], [1, "border-base-300", "border-b", "text-lg", "font-medium"], [1, "flex", "flex-col"], ["for", "plate-number"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function UserParkingTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "input", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function UserParkingTooltipComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.plate_number, $event) || (ctx.plate_number = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function UserParkingTooltipComponent_Template_button_click_11_listener() {
          return ctx.save();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.CONTROLS_PARKING"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "BOOKINGS.PARKING_PLATE_NUMBER"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.plate_number);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "BOOKINGS.PARKING_PLATE_NUMBER"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "COMMON.SAVE"), " ");
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserParkingTooltipComponent, [{
    type: Component,
    args: [{ selector: "user-parking-tooltip", template: `
        <div
            class="border-base-300 bg-base-100 min-w-[20rem] space-y-2 rounded-md border p-2"
        >
            <h3 class="border-base-300 border-b text-lg font-medium">
                {{ 'COMMON.CONTROLS_PARKING' | translate }}
            </h3>
            <div class="flex flex-col">
                <label for="plate-number">{{
                    'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                }}</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        [(ngModel)]="plate_number"
                        [placeholder]="
                            'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                </mat-form-field>
            </div>
            <button btn matRipple class="w-full" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </div>
    `, imports: [MatFormFieldModule, MatInputModule, TranslatePipe, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserParkingTooltipComponent, { className: "UserParkingTooltipComponent", filePath: "libs/components/src/lib/user-parking-tooltip.component.ts", lineNumber: 45 });
})();

// libs/components/src/lib/work-location-tooltip.component.ts
function WorkLocationTooltipComponent_Conditional_12_For_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function WorkLocationTooltipComponent_Conditional_12_For_2_For_13_Template_button_click_0_listener() {
      const loc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const \u0275$index_22_r3 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLocation(\u0275$index_22_r3, loc_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "icon", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, loc_r2.name), " ");
  }
}
function WorkLocationTooltipComponent_Conditional_12_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function WorkLocationTooltipComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 12)(5, "button", 13)(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(12, WorkLocationTooltipComponent_Conditional_12_For_2_For_13_Template, 7, 4, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, WorkLocationTooltipComponent_Conditional_12_For_2_Conditional_18_Template, 1, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const \u0275$index_22_r3 = ctx.$index;
    const work_menu_r6 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-30", ctx_r3.now > ctx_r3.timeFrom(block_r5.end_time));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", ctx_r3.now < ctx_r3.timeFrom(block_r5.start_time) || ctx_r3.now > ctx_r3.timeFrom(block_r5.end_time))("bg-info", ctx_r3.now >= ctx_r3.timeFrom(block_r5.start_time) && ctx_r3.now <= ctx_r3.timeFrom(block_r5.end_time))("text-info-content", ctx_r3.now >= ctx_r3.timeFrom(block_r5.start_time) && ctx_r3.now <= ctx_r3.timeFrom(block_r5.end_time));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.location_icon(ctx_r3.timeFrom(block_r5.start_time)));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", work_menu_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.location(ctx_r3.timeFrom(block_r5.start_time)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.locations());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(16, 14, ctx_r3.timeFrom(block_r5.start_time), "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(17, 17, ctx_r3.timeFrom(block_r5.end_time), "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275$index_22_r3 > 0 ? 18 : -1);
  }
}
function WorkLocationTooltipComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, WorkLocationTooltipComponent_Conditional_12_For_2_Template, 19, 20, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.active_preference?.blocks);
  }
}
function WorkLocationTooltipComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 20);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "COMMON.WORK_LOCATION_EMPTY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.WORK_LOCATION_EDIT_INFO"), " ");
  }
}
var WorkLocationTooltipComponent = class _WorkLocationTooltipComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.locations = signal(
      [],
      ...ngDevMode ? [{ debugName: "locations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overrides = signal(
      {},
      ...ngDevMode ? [{ debugName: "overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get active_preference() {
    const date = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    if (this.overrides()[date])
      return this.overrides()[date];
    return this.settings()?.find((pref) => pref.day_of_week === (/* @__PURE__ */ new Date()).getDay());
  }
  get now() {
    return startOfMinute(Date.now()).getTime();
  }
  ngOnInit() {
    const user = currentUser();
    this.settings.set(user.work_preferences);
    this.overrides.set(user.work_overrides);
    this.locations.set([
      { id: "wfo", name: i18n("COMMON.WORK_OFFICE"), icon: "business" },
      { id: "wfh", name: i18n("COMMON.WORK_HOME"), icon: "home" },
      { id: "aol", name: i18n("COMMON.WORK_LEAVE"), icon: "event_busy" },
      { id: "sick", name: i18n("COMMON.WORK_SICK"), icon: "sick" }
    ]);
  }
  location_icon(time) {
    const user = currentUser();
    return user.location_icon(time + 1 * 60 * 1e3);
  }
  location(time) {
    const user = currentUser();
    return user.location_name_time(time + 1 * 60 * 1e3);
  }
  timeFrom(hours) {
    return startOfMinute(set(/* @__PURE__ */ new Date(), {
      hours: Math.floor(hours),
      minutes: hours * 60 % 60,
      seconds: 0,
      milliseconds: 0
    })).getTime();
  }
  editSettings() {
    this._dialog.open(WFHSettingsModalComponent);
  }
  async setLocation(index, location2) {
    const user = currentUser();
    const current_active_preference = this.active_preference;
    const date = format(Date.now(), "yyyy-MM-dd");
    const new_overrides = __spreadProps(__spreadValues({}, user.work_overrides), {
      [date]: __spreadProps(__spreadValues({}, current_active_preference), {
        blocks: [
          ...current_active_preference.blocks.slice(0, index),
          __spreadProps(__spreadValues({}, current_active_preference.blocks[index]), {
            location: location2
          }),
          ...current_active_preference.blocks.slice(index + 1)
        ]
      })
    });
    for (const key in new_overrides) {
      const key_date = parse(key, "yyyy-MM-dd", /* @__PURE__ */ new Date());
      if (!new_overrides[key].blocks.length || isBefore(key_date, addDays(startOfDay(Date.now()), -1))) {
        delete new_overrides[key];
      }
    }
    this.overrides.set(new_overrides);
    await Ga(user.id, __spreadProps(__spreadValues({}, user), {
      work_overrides: new_overrides
    }));
    reloadUserData();
  }
  static {
    this.\u0275fac = function WorkLocationTooltipComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WorkLocationTooltipComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkLocationTooltipComponent, selectors: [["work-location-tooltip"]], decls: 14, vars: 11, consts: [["work_menu", "matMenu"], [1, "bg-base-100", "relative", "-top-12", "-right-1", "flex", "w-74", "flex-col", "overflow-hidden", "rounded-sm", "shadow-sm"], [1, "flex", "items-center", "justify-between", "px-2"], [1, "px-2", "py-4", "font-medium"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "hover:bg-base-200", 3, "click", "matTooltip"], [1, "px-4", "text-sm", "font-medium"], [1, "pb-2"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "relative", "flex", "items-center", "px-4", "py-2", 3, "opacity-30"], [1, "relative", "flex", "items-center", "px-4", "py-2"], [1, "bg-base-200", "z-20", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"], [1, "ml-2", "flex-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "items-center", "space-x-2", "rounded-sm", "px-2", "py-1", "font-medium", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "px-2", "text-xs", "opacity-60"], [1, "border-base-200", "absolute", "-top-2", "left-7", "h-4", "w-0", "-translate-x-px", "border-l-2", "border-dashed"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-8"], [1, "text-6xl"], [1, "text-center", "text-sm"]], template: function WorkLocationTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("click", function WorkLocationTooltipComponent_Template_button_click_5_listener() {
          return ctx.editSettings();
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "edit_note");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "h3", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, WorkLocationTooltipComponent_Conditional_12_Template, 3, 0, "div", 6)(13, WorkLocationTooltipComponent_Conditional_13_Template, 9, 6, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.WORK_LOCATION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "COMMON.WORK_LOCATION_EDIT"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, ctx.now, "fullDate"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.active_preference?.blocks?.length ? 12 : 13);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkLocationTooltipComponent, [{
    type: Component,
    args: [{ selector: "work-location-tooltip", template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex w-74 flex-col overflow-hidden rounded-sm shadow-sm"
        >
            <div class="flex items-center justify-between px-2">
                <h3 class="px-2 py-4 font-medium">
                    {{ 'COMMON.WORK_LOCATION' | translate }}
                </h3>
                <button
                    icon
                    matRipple
                    [matTooltip]="'COMMON.WORK_LOCATION_EDIT' | translate"
                    matTooltipPosition="left"
                    class="hover:bg-base-200"
                    (click)="editSettings()"
                >
                    <icon>edit_note</icon>
                </button>
            </div>
            <h3 class="px-4 text-sm font-medium">
                {{ now | date: 'fullDate' }}
            </h3>
            @if (active_preference?.blocks?.length) {
                <div class="pb-2">
                    @for (
                        block of active_preference?.blocks;
                        track block;
                        let i = $index
                    ) {
                        <div
                            class="relative flex items-center px-4 py-2"
                            [class.opacity-30]="now > timeFrom(block.end_time)"
                        >
                            <div
                                class="bg-base-200 z-20 flex h-10 w-10 items-center justify-center rounded-full"
                                [class.bg-base-200]="
                                    now < timeFrom(block.start_time) ||
                                    now > timeFrom(block.end_time)
                                "
                                [class.bg-info]="
                                    now >= timeFrom(block.start_time) &&
                                    now <= timeFrom(block.end_time)
                                "
                                [class.text-info-content]="
                                    now >= timeFrom(block.start_time) &&
                                    now <= timeFrom(block.end_time)
                                "
                            >
                                <icon class="text-2xl">{{
                                    location_icon(timeFrom(block.start_time))
                                }}</icon>
                            </div>
                            <div class="ml-2 flex-1">
                                <button
                                    matRipple
                                    class="hover:bg-base-200 flex items-center space-x-2 rounded-sm px-2 py-1 font-medium"
                                    [matMenuTriggerFor]="work_menu"
                                >
                                    <div>
                                        {{
                                            location(timeFrom(block.start_time))
                                        }}
                                    </div>
                                    <icon>expand_more</icon>
                                </button>
                                <mat-menu #work_menu="matMenu">
                                    @for (loc of locations(); track loc) {
                                        <button
                                            mat-menu-item
                                            (click)="setLocation(i, loc.id)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl">{{
                                                    loc.icon
                                                }}</icon>
                                                <div class="pr-8">
                                                    {{ loc.name | translate }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                                <div class="px-2 text-xs opacity-60">
                                    {{
                                        timeFrom(block.start_time)
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{
                                        timeFrom(block.end_time)
                                            | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                            @if (i > 0) {
                                <div
                                    class="border-base-200 absolute -top-2 left-7 h-4 w-0 -translate-x-px border-l-2 border-dashed"
                                ></div>
                            }
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex w-full flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">event_busy</icon>
                    <p class="text-center text-sm">
                        {{ 'COMMON.WORK_LOCATION_EMPTY' | translate }}
                    </p>
                    <p class="text-center text-sm">
                        {{ 'COMMON.WORK_LOCATION_EDIT_INFO' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatDialogModule,
      MatMenuModule,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkLocationTooltipComponent, { className: "WorkLocationTooltipComponent", filePath: "libs/components/src/lib/work-location-tooltip.component.ts", lineNumber: 160 });
})();

// libs/components/src/lib/user-controls.component.ts
function UserControlsComponent_Conditional_7_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function UserControlsComponent_Conditional_7_For_17_Template_button_click_0_listener() {
      const loc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveSetting("work_location", loc_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "icon", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, loc_r2.name), " ");
  }
}
function UserControlsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 19);
    \u0275\u0275text(2, " Today's Work Location ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "icon", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "button", 25)(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-menu", null, 1);
    \u0275\u0275repeaterCreate(16, UserControlsComponent_Conditional_7_For_17_Template, 7, 4, "button", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 27);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const work_menu_r4 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.location_icon(ctx_r2.timeFrom(ctx_r2.active_block().start_time)));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", work_menu_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.location(ctx_r2.timeFrom(ctx_r2.active_block().start_time)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.pref_locations());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 5, ctx_r2.timeFrom(ctx_r2.active_block().start_time), "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(21, 8, ctx_r2.timeFrom(ctx_r2.active_block().end_time), "shortTime"), " ");
  }
}
function UserControlsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 34);
    \u0275\u0275text(9, " chevron_right ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r2.region_select);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.region()?.display_name || ctx_r2.region()?.name, " ");
  }
}
function UserControlsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 34);
    \u0275\u0275text(9, " chevron_right ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r2.building_select);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.building()?.display_name || ctx_r2.building()?.name, " ");
  }
}
function UserControlsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "help");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 34);
    \u0275\u0275text(10, " chevron_right ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r2.help_tooltip);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "COMMON.CONTROLS_HELP"), " ");
  }
}
function UserControlsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "share_location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 34);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r2.work_location_tooltip);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "COMMON.WORK_LOCATION"), " ");
  }
}
function UserControlsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "mode_night");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 34);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-b!", !ctx_r2.locales().length || !ctx_r2.desk_height());
    \u0275\u0275property("content", ctx_r2.accessibility_tooltip);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.CONTROLS_ACCESSIBILITY"), " ");
  }
}
function UserControlsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "desk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 34);
    \u0275\u0275text(10, " chevron_right ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const desk_height_tooltip_r5 = \u0275\u0275reference(15);
    \u0275\u0275classProp("border-b!", !ctx_r2.locales().length);
    \u0275\u0275property("content", desk_height_tooltip_r5);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.CONTROLS_DESKS"), " ");
  }
}
function UserControlsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-height-presets");
  }
}
function UserControlsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "parking_sign");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 34);
    \u0275\u0275text(10, " chevron_right ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-b!", !ctx_r2.locales().length);
    \u0275\u0275property("content", ctx_r2.parking_tooltip);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.CONTROLS_PARKING"), " ");
  }
}
function UserControlsComponent_Conditional_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Language ");
    \u0275\u0275elementEnd();
  }
}
function UserControlsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12)(2, "div", 31)(3, "div", 32)(4, "icon");
    \u0275\u0275text(5, "language");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "div")(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, UserControlsComponent_Conditional_17_Conditional_11_Template, 2, 0, "div", 37);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "icon", 34);
    \u0275\u0275text(18, " chevron_right ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r2.language_tooltip);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "COMMON.LANGUAGE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(12, 7, "COMMON.LANGUAGE") !== "Language" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 9, ctx_r2.active_locale));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, ctx_r2.active_locale), " ");
  }
}
function UserControlsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function UserControlsComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newSupportTicket());
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32)(3, "icon");
    \u0275\u0275text(4, "support_agent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "COMMON.CONTROLS_SUPPORT"), " ");
  }
}
function UserControlsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function UserControlsComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reloadPage());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CONTROLS_NEW_VERSION"), " ");
  }
}
function UserControlsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function UserControlsComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewChangelog());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.version.hash, " ");
  }
}
function UserControlsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.version.hash);
  }
}
var UserControlsComponent = class _UserControlsComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._locale = inject(LocaleService);
    this.building = this._org.active_building;
    this.region = this._org.active_region;
    this.regions = this._org.region_list;
    this.sidebar = input(
      false,
      ...ngDevMode ? [{ debugName: "sidebar" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.accessibility = settingSignal("allow_accessibility_changes", true);
    this.show_changelog = settingSignal("show_changelog", true);
    this.region_select = RegionSelectComponent;
    this.building_select = BuildingSelectComponent;
    this.help_tooltip = HelpTooltipComponent;
    this.accessibility_tooltip = AccessibilityTooltipComponent;
    this.language_tooltip = LanguageSelectComponent;
    this.work_location_tooltip = WorkLocationTooltipComponent;
    this.parking_tooltip = UserParkingTooltipComponent;
    this.features = settingSignal("features", []);
    this._locales = this._settings.signal("locales", []);
    this._desk_height = this._settings.signal("desks.height_enabled", false);
    this._use_region = this._settings.signal("use_region", false);
    this._disable_building_select = this._settings.signal("disable_building_select", false);
    this.pref_locations = signal(
      [],
      ...ngDevMode ? [{ debugName: "pref_locations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.work_prefs = signal(
      [],
      ...ngDevMode ? [{ debugName: "work_prefs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overrides = signal(
      {},
      ...ngDevMode ? [{ debugName: "overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_block = computed(
      () => {
        const date = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
        const day = (/* @__PURE__ */ new Date()).getDay();
        const pref = this.overrides()[date] ? this.overrides()[date] : this.work_prefs().find((pref2) => pref2.day_of_week === day);
        return pref?.blocks?.find((_) => this.now >= this.timeFrom(_.start_time) && this.now < this.timeFrom(_.end_time));
      },
      ...ngDevMode ? [{ debugName: "active_block" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_index = computed(
      () => {
        const date = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
        const day = (/* @__PURE__ */ new Date()).getDay();
        const pref = this.overrides()[date] ? this.overrides()[date] : this.work_prefs().find((pref2) => pref2.day_of_week === day);
        return pref?.blocks?.findIndex((_) => this.now >= this.timeFrom(_.start_time) && this.now < this.timeFrom(_.end_time));
      },
      ...ngDevMode ? [{ debugName: "active_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locales = this._locales;
    this.desk_height = this._desk_height;
    this.use_region = this._use_region;
    this.disable_building_select = this._disable_building_select;
  }
  location_icon(time) {
    const user = currentUser();
    return user.location_icon(time + 1 * 60 * 1e3);
  }
  location(time) {
    const user = currentUser();
    return user.location_name_time(time + 1 * 60 * 1e3);
  }
  timeFrom(hours) {
    return startOfMinute(set(/* @__PURE__ */ new Date(), {
      hours: Math.floor(hours),
      minutes: hours * 60 % 60,
      seconds: 0,
      milliseconds: 0
    })).getTime();
  }
  get user() {
    return currentUser();
  }
  get groups() {
    return this.user?.groups?.join("\n") || "";
  }
  get version() {
    return VERSION;
  }
  get active_locale() {
    const locale_list = this.locales();
    const locale = this._locale.locale;
    for (const item of locale_list) {
      if (item.id === locale)
        return item.name;
    }
    return "LANGUAGE.ENGLISH";
  }
  get now() {
    return startOfMinute(Date.now()).getTime();
  }
  get has_new_version() {
    return hasNewVersion();
  }
  ngOnInit() {
    const user = currentUser();
    this.work_prefs.set(user?.work_preferences || []);
    this.overrides.set(user?.work_overrides || {});
    this.pref_locations.set([
      { id: "wfo", name: i18n("COMMON.WORK_OFFICE"), icon: "business" },
      { id: "wfh", name: i18n("COMMON.WORK_HOME"), icon: "home" },
      { id: "aol", name: i18n("COMMON.WORK_LEAVE"), icon: "event_busy" },
      { id: "sick", name: i18n("COMMON.WORK_SICK"), icon: "sick" }
    ]);
  }
  logout() {
    Xr();
  }
  reloadPage() {
    location.reload();
  }
  newSupportTicket() {
    if (this._settings.get("app.external_support_url")) {
      window.open(this._settings.get("app.external_support_url"), "_blank");
    } else {
      this._dialog.open(SupportTicketModalComponent);
    }
  }
  openWfhModal() {
    this._dialog.open(WFHSettingsModalComponent);
  }
  async viewChangelog() {
    const changelog = await (await fetch("https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md")).text();
    this._dialog.open(ChangelogModalComponent, { data: { changelog } });
  }
  saveSetting(name, value) {
    this._settings.saveUserSetting(name, value);
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  static {
    this.\u0275fac = function UserControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserControlsComponent, selectors: [["user-controls"]], inputs: { sidebar: [1, "sidebar"] }, decls: 35, vars: 32, consts: [["desk_height_tooltip", ""], ["work_menu", "matMenu"], [1, "divide-base-200", "border-base-300", "bg-base-100", "relative", "mt-1", "flex", "flex-col", "divide-y", "overflow-auto", "rounded-sm", "border", "shadow-sm"], ["avatar", "", 1, "flex", "w-full", "min-w-72", "flex-col", "items-center", "p-2"], [1, "text-2xl", 3, "user", "matTooltip"], [1, ""], [1, "truncate", "text-xs", "opacity-60"], [1, "border-base-200", "w-full", "rounded-sm", "border-y", "py-2"], ["customTooltip", "", 1, "relative", 3, "content"], ["customTooltip", "", 3, "content"], ["customTooltip", "", 3, "content", "border-b!"], ["customTooltip", "", 1, "border-b!", 3, "content"], ["btn", "", "matRipple", "", 1, "clear", "h-14", "w-full", "text-left"], [1, "flex", "flex-col", "items-center", "p-4"], [1, "mb-4", "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], ["btn", "", "matRipple", ""], [1, "w-full", "text-xs", "opacity-60"], [1, "m-0", "border-none", "bg-none", "p-0", "text-xs", "underline"], [1, "w-full", "px-4", "pb-2", "text-sm", "font-medium"], [1, "w-full"], [1, "relative", "flex", "items-center", "px-4", "py-2"], [1, "bg-info", "text-info-content", "z-20", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"], [1, "ml-2", "flex-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "items-center", "space-x-2", "rounded-sm", "px-2", "py-1", "font-medium", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "px-2", "text-xs", "opacity-60"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-8"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "w-px", "flex-1", "truncate"], [1, "text-2xl", "opacity-60"], [1, "flex-1"], [1, "flex", "flex-1", "items-center", "justify-between", "space-x-4"], [1, "text-xs", "opacity-30"], [1, "bg-base-200", "max-w-24", "truncate", "rounded-sm", "px-2", "py-1", "text-sm", 3, "matTooltip"], ["btn", "", "matRipple", "", 1, "clear", "h-14", "w-full", "text-left", 3, "click"], ["btn", "", "matRipple", "", 3, "click"], [1, "m-0", "border-none", "bg-none", "p-0", "text-xs", "underline", 3, "click"]], template: function UserControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275element(2, "a-user-avatar", 4);
        \u0275\u0275elementStart(3, "div", 5);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, UserControlsComponent_Conditional_7_Template, 22, 11, "div", 7);
        \u0275\u0275conditionalCreate(8, UserControlsComponent_Conditional_8_Template, 10, 2, "div", 8);
        \u0275\u0275conditionalCreate(9, UserControlsComponent_Conditional_9_Template, 10, 2, "div", 8);
        \u0275\u0275conditionalCreate(10, UserControlsComponent_Conditional_10_Template, 11, 4, "div", 9);
        \u0275\u0275conditionalCreate(11, UserControlsComponent_Conditional_11_Template, 11, 4, "div", 9);
        \u0275\u0275conditionalCreate(12, UserControlsComponent_Conditional_12_Template, 11, 6, "div", 10);
        \u0275\u0275conditionalCreate(13, UserControlsComponent_Conditional_13_Template, 11, 6, "div", 10);
        \u0275\u0275template(14, UserControlsComponent_ng_template_14_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(16, UserControlsComponent_Conditional_16_Template, 11, 6, "div", 10);
        \u0275\u0275conditionalCreate(17, UserControlsComponent_Conditional_17_Template, 19, 13, "div", 11);
        \u0275\u0275conditionalCreate(18, UserControlsComponent_Conditional_18_Template, 8, 3, "button", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "button", 15);
        \u0275\u0275listener("click", function UserControlsComponent_Template_button_click_21_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, UserControlsComponent_Conditional_24_Template, 3, 3, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 17);
        \u0275\u0275elementContainerStart(26);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementContainerEnd();
        \u0275\u0275conditionalCreate(29, UserControlsComponent_Conditional_29_Template, 2, 1, "button", 18)(30, UserControlsComponent_Conditional_30_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 17);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "date");
        \u0275\u0275pipe(34, "date");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border", !ctx.sidebar());
        \u0275\u0275advance(2);
        \u0275\u0275property("user", ctx.user)("matTooltip", ctx.groups);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.user?.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.user?.email, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("wfh") && ctx.active_block() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.regions()?.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.disable_building_select() && !ctx.use_region() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("help") ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("wfh") ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.accessibility() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.desk_height() ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.features().includes("parking-controls") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.locales().length > 1 ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("support-ticket") ? 18 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 22, "COMMON.CONTROLS_SIGN_OUT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.has_new_version ? 24 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 24, "COMMON.CONTROLS_VERSION"), ": ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_changelog() ? 29 : 30);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(33, 26, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(34, 29, ctx.version.time, "shortTime"), ") ");
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      CustomTooltipComponent,
      MatTooltipModule,
      MatTooltip,
      UserAvatarComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      DeskHeightPresetsComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserControlsComponent, [{
    type: Component,
    args: [{ selector: "user-controls", template: `
        <div
            class="divide-base-200 border-base-300 bg-base-100 relative mt-1 flex flex-col divide-y overflow-auto rounded-sm border shadow-sm"
            [class.border]="!sidebar()"
        >
            <div avatar class="flex w-full min-w-72 flex-col items-center p-2">
                <a-user-avatar
                    class="text-2xl"
                    [user]="user"
                    [matTooltip]="groups"
                ></a-user-avatar>
                <div class="">{{ user?.name }}</div>
                <div class="truncate text-xs opacity-60">
                    {{ user?.email }}
                </div>
            </div>
            @if (features().includes('wfh') && active_block()) {
                <div class="border-base-200 w-full rounded-sm border-y py-2">
                    <h3 class="w-full px-4 pb-2 text-sm font-medium">
                        Today's Work Location
                    </h3>
                    <div class="w-full">
                        <div class="relative flex items-center px-4 py-2">
                            <div
                                class="bg-info text-info-content z-20 flex h-10 w-10 items-center justify-center rounded-full"
                            >
                                <icon class="text-2xl">{{
                                    location_icon(
                                        timeFrom(active_block().start_time)
                                    )
                                }}</icon>
                            </div>
                            <div class="ml-2 flex-1">
                                <button
                                    matRipple
                                    class="hover:bg-base-200 flex items-center space-x-2 rounded-sm px-2 py-1 font-medium"
                                    [matMenuTriggerFor]="work_menu"
                                >
                                    <div>
                                        {{
                                            location(
                                                timeFrom(
                                                    active_block().start_time
                                                )
                                            )
                                        }}
                                    </div>
                                    <icon>expand_more</icon>
                                </button>
                                <mat-menu #work_menu="matMenu">
                                    @for (loc of pref_locations(); track loc) {
                                        <button
                                            mat-menu-item
                                            (click)="
                                                saveSetting(
                                                    'work_location',
                                                    loc.id
                                                )
                                            "
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl">{{
                                                    loc.icon
                                                }}</icon>
                                                <div class="pr-8">
                                                    {{ loc.name | translate }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                                <div class="px-2 text-xs opacity-60">
                                    {{
                                        timeFrom(active_block().start_time)
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{
                                        timeFrom(active_block().end_time)
                                            | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            @if (regions()?.length) {
                <div customTooltip [content]="region_select" class="relative">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>layers</icon>
                            </div>
                            <div class="w-px flex-1 truncate">
                                {{ region()?.display_name || region()?.name }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (!disable_building_select() && !use_region()) {
                <div customTooltip [content]="building_select" class="relative">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>business</icon>
                            </div>
                            <div class="w-px flex-1 truncate">
                                {{
                                    building()?.display_name || building()?.name
                                }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (features().includes('help')) {
                <div customTooltip [content]="help_tooltip">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>help</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.CONTROLS_HELP' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (features().includes('wfh')) {
                <div customTooltip [content]="work_location_tooltip">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>share_location</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.WORK_LOCATION' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60"
                                >chevron_right</icon
                            >
                        </div>
                    </button>
                </div>
            }
            @if (accessibility()) {
                <div
                    customTooltip
                    [content]="accessibility_tooltip"
                    [class.border-b!]="!locales().length || !desk_height()"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>mode_night</icon>
                            </div>
                            <div class="flex-1">
                                {{
                                    'COMMON.CONTROLS_ACCESSIBILITY' | translate
                                }}
                            </div>
                            <icon class="text-2xl opacity-60"
                                >chevron_right</icon
                            >
                        </div>
                    </button>
                </div>
            }
            @if (desk_height()) {
                <div
                    customTooltip
                    [content]="desk_height_tooltip"
                    [class.border-b!]="!locales().length"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>desk</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.CONTROLS_DESKS' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            <ng-template #desk_height_tooltip>
                <desk-height-presets></desk-height-presets>
            </ng-template>

            @if (features().includes('parking-controls')) {
                <div
                    customTooltip
                    [content]="parking_tooltip"
                    [class.border-b!]="!locales().length"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>parking_sign</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.CONTROLS_PARKING' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (locales().length > 1) {
                <div
                    customTooltip
                    [content]="language_tooltip"
                    class="border-b!"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>language</icon>
                            </div>
                            <div
                                class="flex flex-1 items-center justify-between space-x-4"
                            >
                                <div>
                                    <div>
                                        {{ 'COMMON.LANGUAGE' | translate }}
                                    </div>
                                    @if (
                                        ('COMMON.LANGUAGE' | translate) !==
                                        'Language'
                                    ) {
                                        <div class="text-xs opacity-30">
                                            Language
                                        </div>
                                    }
                                </div>
                                <div
                                    class="bg-base-200 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                                    [matTooltip]="active_locale | translate"
                                >
                                    {{ active_locale | translate }}
                                </div>
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }

            @if (features().includes('support-ticket')) {
                <button
                    btn
                    matRipple
                    class="clear h-14 w-full text-left"
                    (click)="newSupportTicket()"
                >
                    <div class="flex w-full items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                        >
                            <icon>support_agent</icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_SUPPORT' | translate }}
                        </div>
                    </div>
                </button>
            }
            <div class="flex flex-col items-center p-4">
                <div class="mb-4 flex items-center justify-center space-x-2">
                    <button btn matRipple class="inverse" (click)="logout()">
                        {{ 'COMMON.CONTROLS_SIGN_OUT' | translate }}
                    </button>
                    @if (has_new_version) {
                        <button btn matRipple (click)="reloadPage()">
                            {{ 'COMMON.CONTROLS_NEW_VERSION' | translate }}
                        </button>
                    }
                </div>
                <div class="w-full text-xs opacity-60">
                    <ng-container>
                        {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    </ng-container>
                    @if (show_changelog()) {
                        <button
                            class="m-0 border-none bg-none p-0 text-xs underline"
                            (click)="viewChangelog()"
                        >
                            {{ version.hash }}
                        </button>
                    } @else {
                        <span>{{ version.hash }}</span>
                    }
                </div>
                <div class="w-full text-xs opacity-60">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      CustomTooltipComponent,
      MatTooltipModule,
      UserAvatarComponent,
      MatMenuModule,
      DeskHeightPresetsComponent
    ] }]
  }], null, { sidebar: [{ type: Input, args: [{ isSignal: true, alias: "sidebar", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserControlsComponent, { className: "UserControlsComponent", filePath: "libs/components/src/lib/user-controls.component.ts", lineNumber: 404 });
})();

// libs/components/src/lib/user-controls-sidebar.component.ts
var _c05 = ["*"];
function UserControlsSidebarComponent_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 2);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function UserControlsSidebarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 3);
    \u0275\u0275listener("click", function UserControlsSidebarComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275element(4, "user-controls", 6);
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function UserControlsSidebarComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(6, "icon", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r1.is_open())("opacity-0", !ctx_r1.is_open());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("translate-x-0", ctx_r1.is_open())("translate-x-full", !ctx_r1.is_open());
    \u0275\u0275advance();
    \u0275\u0275property("sidebar", true);
  }
}
var UserControlsSidebarComponent = class _UserControlsSidebarComponent {
  constructor() {
    this._close_timeout = null;
    this.is_open = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_open" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_rendered = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_rendered" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  open() {
    if (this._close_timeout) {
      clearTimeout(this._close_timeout);
      this._close_timeout = null;
    }
    this.is_rendered.set(true);
    requestAnimationFrame(() => this.is_open.set(true));
  }
  close() {
    this.is_open.set(false);
    this._close_timeout = setTimeout(() => {
      this.is_rendered.set(false);
      this._close_timeout = null;
    }, 200);
  }
  onEscape() {
    if (this.is_open())
      this.close();
  }
  static {
    this.\u0275fac = function UserControlsSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserControlsSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserControlsSidebarComponent, selectors: [["user-controls-sidebar"]], hostBindings: function UserControlsSidebarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function UserControlsSidebarComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, \u0275\u0275resolveDocument);
      }
    }, ngContentSelectors: _c05, decls: 4, vars: 1, consts: [["icon", "", "matRipple", "", "avatar", "", "type", "button", "name", "user-controls", 1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", 3, "click"], [1, "fixed", "inset-0", "z-9999", "overflow-hidden"], [1, "text-2xl"], ["type", "button", "aria-label", "Close user controls", 1, "absolute", "inset-0", "bg-black", "transition-opacity", "duration-200", 3, "click"], [1, "absolute", "inset-y-0", "right-0", "flex", "max-w-full"], [1, "bg-base-100", "relative", "h-full", "w-80", "max-w-[100vw]", "overflow-auto", "pt-[calc(env(safe-area-inset-top)+1rem)]", "pb-[env(safe-area-inset-bottom)]", "pr-[env(safe-area-inset-right)]", "shadow-xl", "transition-transform", "duration-200", "ease-out"], [3, "sidebar"], ["icon", "", "default", "", "matRipple", "", "type", "button", 1, "absolute", "top-[calc(env(safe-area-inset-top)+0.5rem)]", "right-[calc(env(safe-area-inset-right)+0.5rem)]", 3, "click"]], template: function UserControlsSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function UserControlsSidebarComponent_Template_button_click_0_listener() {
          return ctx.open();
        });
        \u0275\u0275projection(1, 0, null, UserControlsSidebarComponent_ProjectionFallback_1_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, UserControlsSidebarComponent_Conditional_3_Template, 8, 9, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.is_rendered() ? 3 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, UserControlsComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserControlsSidebarComponent, [{
    type: Component,
    args: [{
      selector: "user-controls-sidebar",
      template: `
        <button
            icon
            matRipple
            avatar
            type="button"
            name="user-controls"
            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
            (click)="open()"
        >
            <ng-content>
                <icon class="text-2xl">person</icon>
            </ng-content>
        </button>
        @if (is_rendered()) {
            <div class="fixed inset-0 z-9999 overflow-hidden">
                <button
                    type="button"
                    aria-label="Close user controls"
                    class="absolute inset-0 bg-black transition-opacity duration-200"
                    [class.opacity-50]="is_open()"
                    [class.opacity-0]="!is_open()"
                    (click)="close()"
                ></button>
                <div class="absolute inset-y-0 right-0 flex max-w-full">
                    <div
                        class="bg-base-100 relative h-full w-80 max-w-[100vw] overflow-auto pt-[calc(env(safe-area-inset-top)+1rem)] pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)] shadow-xl transition-transform duration-200 ease-out"
                        [class.translate-x-0]="is_open()"
                        [class.translate-x-full]="!is_open()"
                    >
                        <user-controls [sidebar]="true"></user-controls>
                        <button
                            icon
                            default
                            matRipple
                            type="button"
                            class="absolute top-[calc(env(safe-area-inset-top)+0.5rem)] right-[calc(env(safe-area-inset-right)+0.5rem)]"
                            (click)="close()"
                        >
                            <icon class="text-2xl">close</icon>
                        </button>
                    </div>
                </div>
            </div>
        }
    `,
      imports: [MatRippleModule, IconComponent, UserControlsComponent]
    }]
  }], null, { onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserControlsSidebarComponent, { className: "UserControlsSidebarComponent", filePath: "libs/components/src/lib/user-controls-sidebar.component.ts", lineNumber: 56 });
})();

// apps/workplace/src/app/components/footer-menu.component.ts
var _c06 = (a0) => ["/embedded", a0];
var _c13 = (a0) => [a0];
var _c22 = () => ["/explore"];
var _forTrack02 = ($index, $item) => $item.id;
function FooterMenuComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "icon", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("name", "footer-nav-" + item_r3.id)("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, item_r3.name), " ");
  }
}
function FooterMenuComponent_Conditional_0_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "icon", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("name", "footer-nav-embed-" + item_r4.id)("href", item_r4.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon || "open_in_browser");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon || "open_in_browser");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, item_r4.name), " ");
  }
}
function FooterMenuComponent_Conditional_0_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "icon", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("name", "footer-nav-embed-" + item_r4.id)("routerLink", \u0275\u0275pureFunction1(7, _c06, item_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon || "open_in_browser");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon || "open_in_browser");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, item_r4.name), " ");
  }
}
function FooterMenuComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FooterMenuComponent_Conditional_0_For_5_Conditional_0_Template, 8, 7, "a", 8)(1, FooterMenuComponent_Conditional_0_For_5_Conditional_1_Template, 8, 9, "a", 4);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.external ? 0 : 1);
  }
}
function FooterMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function FooterMenuComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.show_book_items.set(false);
      return \u0275\u0275resetView(ctx_r1.blur_backdrop.set(false));
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275repeaterCreate(2, FooterMenuComponent_Conditional_0_For_3_Template, 8, 7, "a", 4, _forTrack02);
    \u0275\u0275repeaterCreate(4, FooterMenuComponent_Conditional_0_For_5_Template, 2, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dark", ctx_r1.dark_mode());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.menu_items());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.menu_embeds());
  }
}
function FooterMenuComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 9)(2, "icon", 10);
    \u0275\u0275text(3, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 11);
    \u0275\u0275text(5, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 13);
    \u0275\u0275listener("click", function FooterMenuComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_book_items.set(!ctx_r1.show_book_items()));
    });
    \u0275\u0275elementStart(10, "icon", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 15)(13, "icon", 10);
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "icon", 11);
    \u0275\u0275text(16, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 12);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275element(21, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dark", ctx_r1.dark_mode());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c13, ctx_r1.default_page()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 19, "APP.WORKPLACE.MENU_HOME"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r1.show_book_items())("border-info!", ctx_r1.show_book_items())("bg-info", ctx_r1.show_book_items())("text-info-content", ctx_r1.show_book_items())("shadow-md", ctx_r1.show_book_items());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_book_items() ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r1.features().includes("explore"));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c22));
    \u0275\u0275attribute("disabled", !ctx_r1.features().includes("explore"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 21, "APP.WORKPLACE.MENU_EXPLORE"));
  }
}
var FEATURE_MENU_ITEMS = [
  {
    id: "spaces",
    name: "APP.WORKPLACE.MENU_ROOMS",
    icon: "meeting_room",
    route: ["/book", "meeting"]
  },
  {
    id: "desks",
    name: "APP.WORKPLACE.MENU_DESKS",
    icon: "desk",
    route: ["/book", "desk"]
  },
  {
    id: "parking",
    name: "APP.WORKPLACE.MENU_PARKING",
    icon: "directions_car",
    route: ["/book", "parking"]
  },
  {
    id: "parking-requests",
    name: "APP.WORKPLACE.MENU_PARKING_REQUESTS",
    icon: "local_parking",
    route: ["/book", "parking-request"]
  },
  {
    id: "visitor-invite",
    name: "APP.WORKPLACE.MENU_VISITORS",
    icon: "person_add",
    route: ["/book", "visitor"]
  },
  {
    id: "schedule",
    name: "APP.WORKPLACE.MENU_SCHEDULE",
    icon: "today",
    route: ["/your-bookings"]
  },
  {
    id: "group-events",
    name: "APP.WORKPLACE.MENU_EVENTS",
    icon: "local_activity",
    route: ["/group-events"]
  },
  {
    id: "lockers",
    name: "APP.WORKPLACE.MENU_LOCKERS",
    icon: "lock",
    route: ["/book", "locker"]
  },
  {
    id: "control",
    name: "APP.WORKPLACE.MENU_CONTROL",
    icon: "remote_gen",
    route: ["/control"]
  },
  {
    id: "deals-n-offers",
    name: "APP.WORKPLACE.MENU_DEALS",
    icon: "confirmation_number",
    route: ["/deals-n-offers"]
  },
  {
    id: "team-schedule",
    name: "APP.WORKPLACE.MENU_TEAM_SCHEDULE",
    icon: "groups",
    route: ["/team-schedule"]
  }
];
var FooterMenuComponent = class _FooterMenuComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.blur_backdrop = model(
      false,
      ...ngDevMode ? [{ debugName: "blur_backdrop" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_book_items = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_book_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dark_mode = computed(
      () => {
        this._org.active_building();
        return this._settings.get("app.allow_dark_mode") && this._settings.theme === "dark";
      },
      ...ngDevMode ? [{ debugName: "dark_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        this._org.active_building();
        return this._settings.get("app.features") || [];
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.default_page = computed(
      () => {
        this._org.active_building();
        return this._settings.get("app.default_route") || "/landing";
      },
      ...ngDevMode ? [{ debugName: "default_page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.menu_embeds = computed(
      () => {
        this._org.active_building();
        return (this._settings.get("app.menu_embeds") || []).filter((item) => item?.id && item?.name && item?.url);
      },
      ...ngDevMode ? [{ debugName: "menu_embeds" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.menu_items = computed(
      () => {
        const features = this.features();
        return FEATURE_MENU_ITEMS.filter((item) => features.includes(item.id));
      },
      ...ngDevMode ? [{ debugName: "menu_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.footer_item_count = computed(
      () => this.features().length + this.menu_embeds().length,
      ...ngDevMode ? [{ debugName: "footer_item_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275FooterMenuComponent_BaseFactory;
      return function FooterMenuComponent_Factory(__ngFactoryType__) {
        return (\u0275FooterMenuComponent_BaseFactory || (\u0275FooterMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FooterMenuComponent)))(__ngFactoryType__ || _FooterMenuComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterMenuComponent, selectors: [["footer-menu"]], inputs: { blur_backdrop: [1, "blur_backdrop"] }, outputs: { blur_backdrop: "blur_backdropChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [[1, "border-base-100", "fixed", "inset-0", "bottom-16", "z-30", "border-t"], [1, "border-base-200", "bg-base-100", "relative", "z-60", "flex", "min-h-16", "w-full", "items-center", "justify-center", "gap-3", "border-t", "px-2", "pr-[max(0.5rem,env(safe-area-inset-right))]", "pb-[env(safe-area-inset-bottom)]", "pl-[max(0.5rem,env(safe-area-inset-left))]", "shadow-sm", "sm:hidden"], [1, "border-base-100", "fixed", "inset-0", "bottom-16", "z-30", "border-t", 3, "click"], [1, "border-base-100", "bg-base-100", "absolute", "inset-x-0", "bottom-0", "grid", "max-h-[60vh]", "grid-cols-2", "gap-4", "overflow-y-auto", "rounded-t-xl", "border-t", "p-4"], ["matRipple", "", "routerLinkActive", "active", 1, "bg-base-100", "border-base-300", "hover:bg-base-200", "flex", "h-32", "w-full", "flex-col", "items-center", "justify-center", "gap-2", "rounded-2xl", "border", "p-2", "shadow-lg", 3, "name", "routerLink"], ["filled", "", 1, "text-4xl"], ["outline", "", "className", "material-symbols-outlined", 1, "text-base-400", "text-4xl"], [1, "text-center", "text-sm"], ["matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 1, "bg-base-100", "border-base-300", "hover:bg-base-200", "flex", "h-32", "w-full", "flex-col", "items-center", "justify-center", "gap-2", "rounded-2xl", "border", "p-2", "shadow-lg", 3, "name", "href"], ["matRipple", "", "name", "footer-nav-home", "routerLinkActive", "text-secondary active font-medium bg-secondary/10", 1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", "rounded-lg", 3, "routerLink"], ["filled", "", 1, "text-2xl"], ["outline", "", "className", "material-symbols-outlined", 1, "m-0!", "text-2xl"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "z-10", "mb-4", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", "border", 3, "click"], [1, "text-2xl"], ["matRipple", "", "routerLinkActive", "text-secondary active font-medium bg-secondary/10", 1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", "rounded-lg", 3, "routerLink"], [1, "absolute", "top-0", "left-1/2", "h-2", "w-24", "-translate-x-1/2", "-translate-y-full", "overflow-hidden"], [1, "border-base-200", "bg-base-100", "mx-auto", "h-16", "w-16", "rounded-full", "border-t", "shadow-sm"]], template: function FooterMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, FooterMenuComponent_Conditional_0_Template, 6, 1, "div", 0);
        \u0275\u0275conditionalCreate(1, FooterMenuComponent_Conditional_1_Template, 22, 26, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show_book_items() && ctx.footer_item_count() > 1 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.footer_item_count() > 1 ? 1 : -1);
      }
    }, dependencies: [IconComponent, RouterModule, RouterLink, RouterLinkActive, MatRippleModule, MatRipple, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  z-index: 20;\n}\na[_ngcontent-%COMP%]:not(.active)   [filled][_ngcontent-%COMP%], \na.active[_ngcontent-%COMP%]   [outline][_ngcontent-%COMP%] {\n  display: none;\n}\na.active[_ngcontent-%COMP%] {\n  background: var(--brand-200) !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=footer-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterMenuComponent, [{
    type: Component,
    args: [{ selector: "footer-menu", template: `
        @if (show_book_items() && footer_item_count() > 1) {
            <div
                class="border-base-100 fixed inset-0 bottom-16 z-30 border-t"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false); blur_backdrop.set(false)"
            >
                <div
                    class="border-base-100 bg-base-100 absolute inset-x-0 bottom-0 grid max-h-[60vh] grid-cols-2 gap-4 overflow-y-auto rounded-t-xl border-t p-4"
                >
                    @for (item of menu_items(); track item.id) {
                        <a
                            matRipple
                            [name]="'footer-nav-' + item.id"
                            [routerLink]="item.route"
                            routerLinkActive="active"
                            class="bg-base-100 border-base-300 hover:bg-base-200 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                        >
                            <icon class="text-4xl" filled>{{ item.icon }}</icon>
                            <icon
                                outline
                                class="text-base-400 text-4xl"
                                className="material-symbols-outlined"
                                >{{ item.icon }}</icon
                            >
                            <div class="text-center text-sm">
                                {{ item.name | translate }}
                            </div>
                        </a>
                    }
                    @for (item of menu_embeds(); track item.id) {
                        @if (item.external) {
                            <a
                                matRipple
                                [name]="'footer-nav-embed-' + item.id"
                                [href]="item.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-base-100 border-base-300 hover:bg-base-200 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled>{{
                                    item.icon || 'open_in_browser'
                                }}</icon>
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >{{ item.icon || 'open_in_browser' }}</icon
                                >
                                <div class="text-center text-sm">
                                    {{ item.name | translate }}
                                </div>
                            </a>
                        } @else {
                            <a
                                matRipple
                                [name]="'footer-nav-embed-' + item.id"
                                [routerLink]="['/embedded', item.id]"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 hover:bg-base-200 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled>{{
                                    item.icon || 'open_in_browser'
                                }}</icon>
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >{{ item.icon || 'open_in_browser' }}</icon
                                >
                                <div class="text-center text-sm">
                                    {{ item.name | translate }}
                                </div>
                            </a>
                        }
                    }
                </div>
            </div>
        }
        @if (footer_item_count() > 1) {
            <div
                class="border-base-200 bg-base-100 relative z-60 flex min-h-16 w-full items-center justify-center gap-3 border-t px-2 pr-[max(0.5rem,env(safe-area-inset-right))] pb-[env(safe-area-inset-bottom)] pl-[max(0.5rem,env(safe-area-inset-left))] shadow-sm sm:hidden"
                [attr.dark]="dark_mode()"
            >
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center rounded-lg"
                    [routerLink]="[default_page()]"
                    name="footer-nav-home"
                    routerLinkActive="text-secondary active font-medium bg-secondary/10"
                >
                    <icon filled class="text-2xl">home</icon>
                    <icon
                        outline
                        className="material-symbols-outlined"
                        class="m-0! text-2xl"
                        >home</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_HOME' | translate
                    }}</span>
                </a>
                <button
                    matRipple
                    class="border-base-300 z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border"
                    (click)="show_book_items.set(!show_book_items())"
                    [class.bg-base-200]="!show_book_items()"
                    [class.border-info!]="show_book_items()"
                    [class.bg-info]="show_book_items()"
                    [class.text-info-content]="show_book_items()"
                    [class.shadow-md]="show_book_items()"
                >
                    <icon class="text-2xl">{{
                        show_book_items() ? 'close' : 'add'
                    }}</icon>
                </button>
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center rounded-lg"
                    [routerLink]="['/explore']"
                    [attr.disabled]="!features().includes('explore')"
                    [class.opacity-0]="!features().includes('explore')"
                    routerLinkActive="text-secondary active font-medium bg-secondary/10"
                >
                    <icon filled class="text-2xl">place</icon>
                    <icon
                        outline
                        className="material-symbols-outlined"
                        class="m-0! text-2xl"
                        >place</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_EXPLORE' | translate
                    }}</span>
                </a>
                <div
                    class="absolute top-0 left-1/2 h-2 w-24 -translate-x-1/2 -translate-y-full overflow-hidden"
                >
                    <div
                        class="border-base-200 bg-base-100 mx-auto h-16 w-16 rounded-full border-t shadow-sm"
                    ></div>
                </div>
            </div>
        }
    `, imports: [TranslatePipe, IconComponent, RouterModule, MatRippleModule], styles: ["/* angular:styles/component:css;cc7cf53beb643ba1a774415ac9d09bf81e358e5febfcc85579a4011a50be70c7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/footer-menu.component.ts */\n:host {\n  position: relative;\n  z-index: 20;\n}\na:not(.active) [filled],\na.active [outline] {\n  display: none;\n}\na.active {\n  background: var(--brand-200) !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=footer-menu.component.css.map */\n"] }]
  }], null, { blur_backdrop: [{ type: Input, args: [{ isSignal: true, alias: "blur_backdrop", required: false }] }, { type: Output, args: ["blur_backdropChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterMenuComponent, { className: "FooterMenuComponent", filePath: "apps/workplace/src/app/components/footer-menu.component.ts", lineNumber: 255 });
})();

// libs/explore/src/lib/explore-search.service.ts
var EMERGENCY_CONTACTS_CATEGORY_NAME = "_EMERGENCY_CONTACTS_";
var BASE_ENDPOINT = "/api/engine/v2";
var ASCENDING_NAME_SORTER = new Intl.Collator(void 0, {
  numeric: true,
  sensitivity: "base"
});
function queryAssetCategoriesLocal(query = {}) {
  const q = toQueryString(query);
  return p(`${BASE_ENDPOINT}/asset_categories${q ? "?" + q : ""}`).then((_) => _);
}
function queryAssetTypesLocal(query = {}) {
  const q = toQueryString(query);
  return p(`${BASE_ENDPOINT}/asset_types${q ? "?" + q : ""}`).then((_) => _);
}
function queryAssetsLocal(query = {}) {
  const q = toQueryString(query);
  return p(`${BASE_ENDPOINT}/assets${q ? "?" + q : ""}`).then((_) => _);
}
var TYPES = ["space", "feature", "contact", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
function compareSearchResultsAscending(item_a, item_b) {
  return ASCENDING_NAME_SORTER.compare(item_a.name || "", item_b.name || "") || ASCENDING_NAME_SORTER.compare(item_a.description || "", item_b.description || "") || typeIndex(item_a) - typeIndex(item_b);
}
function sortGlobalSearchResults(results, local_zones) {
  const local_zone_set = new Set(local_zones.filter((_) => !!_));
  const local_contacts = results.filter((_) => _.is_role && !!_.zone && local_zone_set.has(_.zone || "")).sort(compareSearchResultsAscending);
  const remaining_results = results.filter((_) => !(_.is_role && !!_.zone && local_zone_set.has(_.zone || ""))).sort(compareSearchResultsAscending);
  return [...local_contacts, ...remaining_results];
}
var ExploreSearchService = class _ExploreSearchService {
  /** Extract zones from in-progress bookings */
  _getInProgressZones(bookings) {
    if (!bookings?.length)
      return [];
    const zones = [];
    for (const booking of bookings) {
      if (booking instanceof CalendarEvent) {
        if (booking.system?.zones?.length) {
          zones.push(...booking.system.zones);
        }
        booking.resources?.forEach((r) => {
          if (r.zones?.length) {
            zones.push(...r.zones);
          }
        });
      } else if (booking instanceof Booking) {
        if (booking.zones?.length) {
          zones.push(...booking.zones);
        }
      }
    }
    return zones.filter((z) => this._org.levelWithID([z]));
  }
  _getPriorityZones(bookings, current_level_id) {
    return Array.from(/* @__PURE__ */ new Set([
      ...current_level_id ? [current_level_id] : [],
      ...this._getInProgressZones(bookings)
    ]));
  }
  hideItem(name) {
    const hide_items = this._settings.get("app.hide_global_search_items") || [];
    return hide_items.includes(name);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._maps_people = inject(MapsPeopleService);
    this._state = inject(ExploreStateService);
    this._injector = inject(Injector);
    this._initialised = this._org.initialised;
    this._building = this._org.active_building;
    this._maps_people_available = this._maps_people.available;
    this._in_progress_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_in_progress_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._emergency_contacts = signal(
      [],
      ...ngDevMode ? [{ debugName: "_emergency_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_filter = debounced(this._filter, 400);
    this._slow_debounced_filter = debounced(this._filter, 1e3);
    this.emergency_contacts = this._emergency_contacts.asReadonly();
    this._asset_based_contacts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_asset_based_contacts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const bld = this._building();
        return bld ? { bld, search: this._debounced_filter.value() } : void 0;
      },
      loader: async ({ params: { bld } }) => {
        const categories = await queryAssetCategoriesLocal({
          zone_id: bld.id
        }).catch(() => []);
        const category = categories.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME) || null;
        if (!category)
          return [];
        const groups = await queryAssetTypesLocal({
          zone_id: bld.id,
          q: `"${category.name}"`
        }).catch(() => []);
        const asset_type = groups.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id) || null;
        if (!asset_type)
          return [];
        const assets = await queryAssetsLocal({
          zone_id: bld.id,
          type_id: asset_type.id,
          limit: 200
        }).catch(() => []);
        return assets.filter((a) => a.asset_type_id === asset_type.id).map((a) => {
          const zone = this._org.levelWithID(a.zones) || this._org.buildings.find((_) => a.zones.includes(_.id));
          return {
            id: a.id,
            name: a.identifier || "",
            email: a.other_data?.email || "",
            phone: a.other_data?.phone || "",
            roles: a.other_data?.roles || [],
            zone: zone?.id,
            zone_name: zone?.display_name || zone?.name
          };
        });
      }
    }));
    this._legacy_metadata_contacts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_legacy_metadata_contacts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async ({ params: bld }) => {
        const { details } = await Vu(bld.id, "emergency_contacts").catch(() => ({
          details: { contacts: [], migrated: false }
        }));
        const data = details;
        if (data?.migrated)
          return [];
        return data?.contacts || [];
      }
    }));
    this._role_assigned_contacts = computed(
      () => {
        const asset_contacts = this._asset_based_contacts.value() ?? [];
        if (asset_contacts.length > 0)
          return asset_contacts;
        return this._legacy_metadata_contacts.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "_role_assigned_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_filter.value() }),
      loader: ({ params: { q } }) => q?.length > 2 ? this.search_fn(q).catch(() => []) : Promise.resolve([])
    }));
    this._space_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_filter.value() }),
      loader: ({ params: { q } }) => q?.length > 2 ? ha({ q, zone_id: this._org.organisation.id }).then(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
        level: this._org.levelWithID(_.zones)
      })))).catch(() => []) : Promise.resolve([])
    }));
    this._desk_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => nc(bld.id, { name: "desks" }).then((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone })))))).catch(() => [])
    }));
    this._maps_people_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_maps_people_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        available: this._maps_people_available(),
        q: this._slow_debounced_filter.value(),
        bld: this._building()
      }),
      loader: async ({ params: { available, q } }) => {
        const list2 = available && q.length > 2 ? await mapsindoors?.services.LocationsService.getLocations({ q }) : [];
        return (list2 || []).map((_) => ({
          id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
          map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
          type: "feature",
          name: _.properties?.name || "",
          description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
        }));
      }
    }));
    this._map_features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_map_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async () => {
        const data = await nc(this._org.building.id, {
          name: "map_features"
        }).catch(() => []);
        const list2 = [];
        for (const item of data) {
          const metadata = item.metadata.map_features;
          if (!metadata)
            continue;
          const feature_list = metadata.details instanceof Array ? metadata.details : [];
          for (const feature of feature_list) {
            list2.push({
              id: feature.id,
              type: "feature",
              name: feature.name,
              description: "",
              zone: item.zone
            });
          }
        }
        return list2;
      }
    }));
    this._poi_metadata = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_poi_metadata" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._initialised() || void 0,
      loader: () => Vu(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }))
    }));
    this._poi_list = computed(
      () => {
        const bld = this._building();
        const metadata = this._poi_metadata.value();
        if (!bld?.id || !metadata)
          return [];
        const mapping = metadata.details || {};
        const levels = this._org.levelsForBuilding(bld);
        const list2 = flatten(levels.map((lvl) => mapping[lvl.id] || []));
        return list2.filter((_) => _.can_search);
      },
      ...ngDevMode ? [{ debugName: "_poi_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._points_of_interest = computed(
      () => this._poi_list().map((item) => ({
        id: item.location || item.id,
        type: "feature",
        name: item.name,
        description: "",
        zone: item.level_id
      })),
      ...ngDevMode ? [{ debugName: "_points_of_interest" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_results = computed(
      () => {
        const search = this._filter().toLowerCase();
        const spaces = this._space_search.value() ?? [];
        const desks = this._desk_search.value() ?? [];
        const users = this._user_search.value() ?? [];
        const contacts = this._emergency_contacts();
        const roled_contacts = this._role_assigned_contacts();
        const features = this._map_features.value() ?? [];
        const mapspeople_items = this._maps_people_search.value() ?? [];
        const points_of_interest = this._points_of_interest();
        const current_level = this._state.level();
        const in_progress_bookings = this._in_progress_bookings();
        let results = [];
        if (!this.hideItem("mapspeople"))
          results = results.concat(mapspeople_items);
        if (!this.hideItem("spaces")) {
          results = results.concat(spaces.map((s) => ({
            id: s.id,
            type: "space",
            email: s.email,
            name: s.display_name || s.name,
            description: `Capacity: ${s.capacity} `,
            zone: s.level?.id || ""
          })));
        }
        if (!this.hideItem("desks")) {
          results = results.concat(desks.map((s) => ({
            id: s.id,
            type: "feature",
            email: s.assigned_to,
            description: s.id,
            name: s.name || s.id,
            zone: s.zone?.id || ""
          })));
        }
        if (!this.hideItem("emergency_contacts")) {
          results = results.concat(flatten(roled_contacts.map((u) => u.roles.map((role) => ({
            id: u.email,
            type: role || "contact",
            is_role: true,
            name: u.name,
            email: u.email,
            description: u.email,
            zone: u.zone,
            zone_name: u.zone_name
          })))));
        }
        if (!this.hideItem("features")) {
          results = results.concat(features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
            id: s.id,
            type: "feature",
            name: s.name,
            description: "",
            zone: s.zone?.id,
            level_name: s.zone?.display_name || s.zone?.name
          })));
        }
        if (!this.hideItem("points_of_interest"))
          results = results.concat(points_of_interest);
        if (!this.hideItem("contacts")) {
          results = results.concat(contacts.map((u) => ({
            id: u.email,
            type: u.type || "contact",
            is_role: true,
            name: u.name,
            email: u.email,
            description: u.email
          })));
        }
        if (!this.hideItem("users")) {
          results = results.concat(users.map((u) => ({
            id: u.email,
            type: "user",
            name: u.name,
            email: u.email,
            description: u.email
          })));
        }
        results = results.filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || (_.email || "").toLowerCase().includes(search) || _.type.toLowerCase().includes(search) || _.zone_name?.toLowerCase().includes(search));
        const in_progress_zones = this._getInProgressZones(in_progress_bookings);
        results.sort((a, b) => {
          if (current_level?.id) {
            const a_on_level = a.zone === current_level.id;
            const b_on_level = b.zone === current_level.id;
            if (a_on_level && !b_on_level)
              return -1;
            if (!a_on_level && b_on_level)
              return 1;
          }
          if (in_progress_zones.length > 0) {
            const a_near_booking = in_progress_zones.includes(a.zone);
            const b_near_booking = in_progress_zones.includes(b.zone);
            if (a_near_booking && !b_near_booking)
              return -1;
            if (!a_near_booking && b_near_booking)
              return 1;
          }
          return typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name);
        });
        return results;
      },
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.global_search_results = computed(
      () => sortGlobalSearchResults(this.search_results(), this._getPriorityZones(this._in_progress_bookings(), this._state.level()?.id)),
      ...ngDevMode ? [{ debugName: "global_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._filter() !== this._debounced_filter.value() || this._user_search.isLoading() || this._space_search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? Fa({ q, authority_id: It()?.id }).then((_) => _.data) : searchStaff(q);
    this.init();
  }
  async init() {
    await firstValueWhere(this._initialised, (_) => !!_, this._injector);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const { is_public } = this._state.options();
    if (is_public)
      return;
    const mod = this._org.module("location_services", "LocationServices");
    if (mod) {
      const binding = mod.variable("emergency_contacts");
      binding.bindThenSubscribe((contacts_map) => {
        const list2 = [];
        for (const type in contacts_map) {
          for (const user of contacts_map[type]) {
            list2.push(__spreadProps(__spreadValues({}, user), { type }));
          }
        }
        this._emergency_contacts.set(list2);
      });
    }
  }
  setFilter(str) {
    this._filter.set(str);
  }
  /**
   * Set in-progress bookings for proximity-based sorting
   * @param bookings List of bookings/events that are currently in progress
   */
  setInProgressBookings(bookings) {
    this._in_progress_bookings.set(bookings || []);
  }
  static {
    this.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSearchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/schedule/schedule-state.service.ts
function isBookingForOtherUser(item, current_email = currentUser()?.email) {
  if (!(item instanceof Booking))
    return false;
  const current_user_email = current_email?.toLowerCase();
  const booked_by_email = item.booked_by_email?.toLowerCase();
  const user_email = item.user_email?.toLowerCase();
  return !!current_user_email && booked_by_email === current_user_email && !!user_email && user_email !== current_user_email;
}
function bookedForLabel(item) {
  if (!(item instanceof Booking))
    return "";
  return `${item.user_name || ""}`.trim() || `${item.user_email || ""}`.trim();
}
function deduplicateEventsByIcalUid(events_by_source) {
  const seen_ical_uids = /* @__PURE__ */ new Set();
  const result = [];
  for (const events of events_by_source) {
    for (const event of events) {
      const uid = event.ical_uid;
      if (!uid || !seen_ical_uids.has(uid)) {
        if (uid)
          seen_ical_uids.add(uid);
        result.push(event);
      }
    }
  }
  return result;
}
var ScheduleStateService = class _ScheduleStateService extends AsyncHandler {
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  get dateValue() {
    return this._date();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._injector = inject(Injector);
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event_sources = signal(
      ["api"],
      ...ngDevMode ? [{ debugName: "_event_sources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      { period: "day" },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filters = signal(
      {
        shown_types: [
          "event",
          "desk",
          "parking",
          "visitor",
          "locker",
          "group-event"
        ],
        show_bookings_for_others: false
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._end_date = signal(
      null,
      ...ngDevMode ? [{ debugName: "_end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._deleted = [];
    this._ignore_cancel = [];
    this._network_requested = false;
    this._network_started = false;
    this._booking_query_requests = /* @__PURE__ */ new Map();
    this._space_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_space_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_user_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._api_events = signal(
      [],
      ...ngDevMode ? [{ debugName: "_api_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._visitors = signal(
      [],
      ...ngDevMode ? [{ debugName: "_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desks = signal(
      [],
      ...ngDevMode ? [{ debugName: "_desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._parking_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_parking_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locker_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_locker_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lockers = signal(
      [],
      ...ngDevMode ? [{ debugName: "_lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._requests_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!region?.id) && !!building?.id && overrides.length >= required_overrides;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.filters = this._filters.asReadonly();
    this.date = this._date.asReadonly();
    this.end_date = this._end_date.asReadonly();
    this.loading = this._loading.asReadonly();
    this.event_sources = this._event_sources.asReadonly();
    this._query_params = computed(
      () => {
        this._poll();
        if (!this._requests_ready())
          return void 0;
        return {
          date: this._date(),
          end_date: this._end_date(),
          period: this._options().period
        };
      },
      ...ngDevMode ? [{ debugName: "_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._query_params_debounced = debounced(this._query_params, 300);
    this.week_date = computed(
      () => startOfWeek(this._date(), {
        weekStartsOn: this.offset_weekday
      }).valueOf(),
      ...ngDevMode ? [{ debugName: "week_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_options = computed(
      () => {
        if (!this._org.active_building())
          return [];
        const options2 = [];
        const date = startOfDay(Date.now());
        for (let i = -4; i < 48; i++) {
          const day = addWeeks(date, i);
          const week_s_date = startOfWeek(day, {
            weekStartsOn: this.offset_weekday
          });
          const week_e_date = endOfWeek(day, {
            weekStartsOn: this.offset_weekday
          });
          const this_week = isAfter(Date.now(), week_s_date) && isBefore(Date.now(), week_e_date);
          options2.push({
            id: week_s_date.valueOf(),
            name: `${format(week_s_date, "dd MMM")} - ${format(week_e_date, "dd MMM")}`,
            this_week
          });
        }
        return options2;
      },
      ...ngDevMode ? [{ debugName: "week_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.driver_events = computed(
      () => {
        if (!this._hasFeature("spaces"))
          return [];
        this._requestNetwork();
        return this._filterUserEvents(this._user_bookings());
      },
      ...ngDevMode ? [{ debugName: "driver_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ws_events = computed(
      () => {
        if (!this._hasFeature("spaces"))
          return [];
        this._requestNetwork();
        return this._filterUserEvents(this._space_bookings());
      },
      ...ngDevMode ? [{ debugName: "ws_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.api_events = computed(
      () => {
        if (!this._canLoadEvents())
          return [];
        this._requestNetwork();
        return this._api_events();
      },
      ...ngDevMode ? [{ debugName: "api_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_events = computed(
      () => {
        const sources = this._event_sources();
        if (!sources?.length)
          return [];
        const events_by_source = sources.map((source) => {
          switch (source) {
            case "driver":
              return this.driver_events();
            case "ws":
              return this.ws_events();
            case "api":
            default:
              return this.api_events();
          }
        });
        return deduplicateEventsByIcalUid(events_by_source);
      },
      ...ngDevMode ? [{ debugName: "raw_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.events = computed(
      () => this.raw_events().filter((_) => !_.extension_data?.shared_event),
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitors = computed(
      () => {
        if (!this._canLoadBookingType("visitor"))
          return [];
        this._requestNetwork();
        return this._visitors();
      },
      ...ngDevMode ? [{ debugName: "visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desks = computed(
      () => {
        if (!this._canLoadBookingType("desk"))
          return [];
        this._requestNetwork();
        return this._desks();
      },
      ...ngDevMode ? [{ debugName: "desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.parking = computed(
      () => {
        if (!this._canLoadBookingType("parking"))
          return [];
        this._requestNetwork();
        return this._parking_bookings();
      },
      ...ngDevMode ? [{ debugName: "parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_events = computed(
      () => this._hasFeature("group-events") ? this.raw_events().filter((_) => _.extension_data?.shared_event) : [],
      ...ngDevMode ? [{ debugName: "group_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locker_bookings = computed(
      () => {
        if (!this._canLoadBookingType("locker"))
          return [];
        this._requestNetwork();
        return this._locker_bookings();
      },
      ...ngDevMode ? [{ debugName: "locker_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.lockers = computed(
      () => {
        if (!this._canLoadBookingType("locker"))
          return [];
        this._requestNetwork();
        return this._lockers();
      },
      ...ngDevMode ? [{ debugName: "lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = computed(
      () => {
        const events = this.events();
        const visitors = this.visitors();
        const desks = this.desks();
        const parking = this.parking();
        const lockers = this.lockers();
        const locker_bookings = this.locker_bookings();
        const group_events = this.group_events();
        const filtered_events = events.filter((ev) => !desks.find((bkn) => `${ev.meeting_id}` === `${bkn.id}`) && ev.linked_bookings[0]?.booking_type !== "group-event");
        return [
          ...filtered_events,
          ...visitors,
          ...desks,
          ...parking,
          ...lockers,
          ...locker_bookings,
          ...group_events
        ].sort((a, b) => a.date - b.date);
      },
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_bookings = computed(
      () => this.bookings().filter((_) => {
        const filters = this._filters();
        if (this._deleted.includes(_.instance ? `${_.id}|${_.instance}` : _.id)) {
          return false;
        }
        if (this.isBookingForOtherUser(_) && !filters?.show_bookings_for_others) {
          return false;
        }
        if (_.extension_data?.shared_event && !filters?.shown_types?.includes("group-event")) {
          return false;
        }
        if (_ instanceof CalendarEvent && !_.extension_data?.shared_event && !filters?.shown_types?.includes("event")) {
          return false;
        }
        if (_ instanceof CalendarEvent)
          return true;
        return filters?.shown_types?.includes(_.booking_type);
      }),
      ...ngDevMode ? [{ debugName: "filtered_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._deleted = JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted") || "[]");
    effect(() => {
      this._org.active_building();
      this._setConfiguredEventSources();
    });
    effect(() => {
      this._settings.listen("CHAT:task_complete")();
      this.triggerPoll();
    });
  }
  _requestNetwork() {
    if (this._network_requested || this._network_started)
      return;
    this._network_requested = true;
    queueMicrotask(() => this._startNetwork());
  }
  _startNetwork() {
    if (this._network_started)
      return;
    this._network_started = true;
    this._loadSpaceBookings();
    this._loadUserBookings();
    this._loadApiEvents();
    this._loadBookingType("visitor", this._visitors, (list2) => list2.filter((_) => !_.linked_event));
    this._loadBookingType("desk", this._desks);
    this._loadBookingType("parking", this._parking_bookings, (list2) => this._resolveParkingNames(list2));
    this._loadBookingType("locker", this._locker_bookings);
    this._loadLockers();
    this.interval("wfh_checks", () => this._checkCancel(), 60 * 1e3);
    this._checkCancel();
  }
  _hasFeature(feature) {
    return (this._settings.get("app.features") || []).includes(feature);
  }
  _canLoadEvents() {
    return this._hasFeature("spaces") || this._hasFeature("group-events");
  }
  _canLoadBookingType(type) {
    switch (type) {
      case "desk":
        return this._hasFeature("desks");
      case "parking":
        return this._hasFeature("parking") || this._hasFeature("parking-requests");
      case "visitor":
        return this._hasFeature("visitor-invite");
      case "locker":
        return this._hasFeature("lockers");
      default:
        return true;
    }
  }
  setOptions(options2) {
    this._options.set(options2);
  }
  getOptions() {
    return this._options();
  }
  setEventSources(sources) {
    if (sources?.length)
      this._event_sources.set(sources);
  }
  getEventSources() {
    return this._event_sources();
  }
  triggerPoll() {
    if (this._network_started) {
      this._poll.set(Date.now());
      return;
    }
    this._poll.set(Date.now());
  }
  startPolling(delay = 3 * MINUTES) {
    this._startNetwork();
    this.interval("poll", () => this._poll.set(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setDate(date) {
    this._date.set(date);
  }
  setEndDate(date) {
    this._end_date.set(date);
  }
  setDateRange(start, end) {
    this._date.set(start);
    this._end_date.set(end);
  }
  removeItem(item) {
    this._startNetwork();
    this.setAsDeleted(item.instance ? `${item.id}|${item.instance}` : item.id);
    this._poll.set(Date.now());
  }
  setAsDeleted(id) {
    this._deleted.push(id);
    sessionStorage.setItem("PLACEOS.events.deleted", JSON.stringify(this._deleted));
  }
  setType(name, state) {
    const filters = this._filters();
    const { shown_types } = filters;
    if (shown_types.includes(name) === state)
      return;
    const new_types = state ? unique([...shown_types, name]) : shown_types.filter((_) => _ !== name);
    this._filters.set(__spreadProps(__spreadValues({}, filters), { shown_types: new_types }));
  }
  setBookingsForOthers(state) {
    const filters = this._filters();
    if (filters.show_bookings_for_others === state)
      return;
    this._filters.set(__spreadProps(__spreadValues({}, filters), { show_bookings_for_others: state }));
  }
  isBookingForOtherUser(item) {
    return isBookingForOtherUser(item);
  }
  toggleBookingsForOthers() {
    this.setBookingsForOthers(!this._filters().show_bookings_for_others);
  }
  async toggleType(name, clear = false) {
    const filters = this._filters();
    const { shown_types } = filters;
    if (shown_types && (shown_types.includes(name) || clear)) {
      this._filters.set(__spreadProps(__spreadValues({}, filters), {
        shown_types: shown_types.filter((_) => _ !== name)
      }));
    } else {
      this._filters.set(__spreadProps(__spreadValues({}, filters), {
        shown_types: [...shown_types, name]
      }));
    }
  }
  _loadSpaceBookings() {
    effect(async (onCleanup) => {
      const bld = this._org.active_building();
      if (!this._hasFeature("spaces") || !this._requests_ready() || !bld?.id) {
        this._space_bookings.set([]);
        return;
      }
      let active = true;
      const cleanups = [];
      onCleanup(() => {
        active = false;
        for (const cleanup of cleanups)
          cleanup();
      });
      this._loading.set(true);
      const spaces = await requestSpacesForZone(bld.id).toPromise().catch(() => []);
      const events_by_space = [];
      for (const [idx, space] of (spaces || []).entries()) {
        const binding = fd(space.id, "Bookings").variable("bookings");
        cleanups.push(binding.bindThenSubscribe((event_list) => {
          events_by_space[idx] = (event_list || []).map((i) => new CalendarEvent(__spreadProps(__spreadValues({}, i), {
            resources: i.attendees.filter((_) => _.email === space.email || _.resource),
            system: space
          })));
          if (active) {
            this._space_bookings.set(flatten(events_by_space));
          }
        }));
      }
      this._loading.set(false);
    }, { injector: this._injector });
  }
  _loadUserBookings() {
    effect(async () => {
      const bld = this._org.active_building();
      const query = this._query_params_debounced.value();
      if (!this._hasFeature("spaces") || !query || !bld?.id) {
        this._user_bookings.set([]);
        return;
      }
      this._loading.set(true);
      const mod = this._org.module("location_services", "LocationServices");
      const list2 = mod?.system ? await mod.execute("my_bookings").catch(() => []) : [];
      this._user_bookings.set((list2 || []).map((_) => new CalendarEvent(_)));
      this._loading.set(false);
    }, { injector: this._injector });
  }
  _loadApiEvents() {
    effect(async () => {
      const query_params = this._query_params_debounced.value();
      if (!this._canLoadEvents() || !query_params) {
        this._api_events.set([]);
        return;
      }
      const { date, end_date, period } = query_params;
      this._loading.set(true);
      const query = this._periodQuery(period, date, end_date);
      const list2 = this._settings.get("app.events.use_bookings") ? await queryBookings(__spreadProps(__spreadValues({}, query), { type: "room" })).then((_) => _.map((i) => newCalendarEventFromBooking(i))).catch(() => []) : await queryEvents(__spreadValues({}, query)).catch(() => []);
      this._api_events.set(list2);
      this.timeout("end_loading", () => this._loading.set(false));
    }, { injector: this._injector });
  }
  _loadBookingType(type, target, map_list = (list2) => list2) {
    effect(async () => {
      const query_params = this._query_params_debounced.value();
      if (!this._canLoadBookingType(type) || !query_params) {
        target.set([]);
        return;
      }
      const { date, end_date, period } = query_params;
      this._loading.set(true);
      const list2 = await this._bookingQuery(type, period, date, end_date);
      target.set(map_list(list2));
      this.timeout("end_loading", () => this._loading.set(false));
    }, { injector: this._injector });
  }
  /**
   * Replace the asset name of parking bookings with the human readable
   * parking space name/identifier. Without this the booking falls back to
   * showing the raw `asset_id` of the space.
   */
  _resolveParkingNames(list2) {
    const spaces = this._injector.get(ParkingService).spaces();
    return list2.map((booking) => {
      if (booking.asset_name && booking.asset_name !== booking.asset_id) {
        return booking;
      }
      const space = spaces.find((_) => _.id === booking.asset_id);
      const name = space?.name || space?.identifier;
      if (!name)
        return booking;
      return new Booking(__spreadProps(__spreadValues({}, booking.toJSON()), { asset_name: name }));
    });
  }
  _loadLockers() {
    effect(async () => {
      const bld = this._org.active_building();
      const region = this._org.active_region();
      if (!this._canLoadBookingType("locker") || !this._requests_ready()) {
        this._lockers.set([]);
        return;
      }
      const scope_id = this._settings.get("app.use_region") ? region?.id || this._org.region?.id : bld?.id;
      if (!scope_id) {
        this._lockers.set([]);
        return;
      }
      const lockers = await loadLockerResources(this._org, scope_id);
      const mod = this._org.module("lockers", "LockerLocations");
      const my_lockers = mod ? await mod.execute("lockers_allocated_to_me").catch(() => []) : [];
      this._lockers.set(my_lockers.map((i) => {
        const locker = lockers.find((lkr) => lkr.id === i.locker_id);
        if (!locker && (!i.level || !i.building)) {
          return null;
        }
        return new Booking({
          date: startOfDay(Date.now()).valueOf(),
          duration: 24 * 60 - 1,
          title: "Locker Booking",
          description: i.locker_name,
          booking_type: "locker",
          all_day: true,
          asset_id: locker.map_id,
          asset_name: i.locker_name,
          zones: [...locker.bank?.zones || []],
          extension_data: {}
        });
      }).filter((item) => item));
      this.timeout("end_loading", () => this._loading.set(false));
    }, { injector: this._injector });
  }
  _filterUserEvents(list2) {
    const user = currentUser();
    const date = this._date();
    return list2.filter((_) => isSameDay(_.date, date) && (_.host.toLowerCase() === user.email.toLowerCase() || _.attendees.find((a) => a.email.toLowerCase() === user.email.toLowerCase())) && !_.linked_bookings?.find((b) => b.booking_type === "group-event"));
  }
  _setConfiguredEventSources() {
    const sources_setting = this._settings.get("app.schedule.event_sources");
    if (sources_setting?.length) {
      this._event_sources.set(sources_setting);
    } else {
      const legacy_source = this._settings.get("app.schedule.use_driver") ? "driver" : this._settings.get("app.schedule.use_websocket") ? "ws" : "api";
      this._event_sources.set([legacy_source]);
    }
  }
  _periodQuery(period, date, end_date) {
    return {
      period_start: getUnixTime(period === "range" || period === "day" ? startOfDay(date) : startOfWeek(date, {
        weekStartsOn: this.offset_weekday
      })),
      period_end: getUnixTime(period === "range" ? endOfDay(end_date || date) : period === "day" ? endOfDay(date) : endOfWeek(date, {
        weekStartsOn: this.offset_weekday
      }))
    };
  }
  _bookingQuery(type, period, date, end_date) {
    const query = __spreadProps(__spreadValues({}, this._periodQuery(period, date, end_date)), {
      type,
      include_checked_out: true,
      include_booked_by: true,
      include_deleted: true
    });
    const key = JSON.stringify(query);
    const existing = this._booking_query_requests.get(key);
    if (existing)
      return existing;
    const request = queryBookings(query).catch(() => []).finally(() => this._booking_query_requests.delete(key));
    this._booking_query_requests.set(key, request);
    return request;
  }
  async _checkCancel() {
    const user = currentUser();
    if (!user?.id)
      return;
    const is_home = user.location !== "wfo";
    const auto_release = this._settings.get("app.auto_release");
    if (!auto_release || !is_home || !(auto_release.time_after || auto_release.time_before) || !auto_release.resources?.length) {
      return;
    }
    for (const type of auto_release.resources) {
      if (!this._canLoadBookingType(type))
        continue;
      const time_after = auto_release[`${type}_time_after`] || auto_release.time_after;
      const time_before = Math.min(60, auto_release[`${type}_time_before`] || auto_release.time_before || 0);
      const bookings = await queryBookings({
        period_start: getUnixTime(startOfMinute(Date.now())),
        period_end: getUnixTime(addMinutes(Date.now(), (time_after || 5) + time_before)),
        type
      });
      const check_block = (time_after || 0) + time_before;
      for (const booking of bookings) {
        if (this._ignore_cancel.includes(booking.id) || booking.checked_in || booking.rejected) {
          continue;
        }
        const start_time = booking.is_all_day ? setHours(booking.date, auto_release.all_day_start) : booking.date;
        this._dialog.closeAll();
        const diff = differenceInMinutes(addMinutes(start_time, time_after || 0), Date.now());
        if (diff > check_block || diff < 0)
          continue;
        const time = addMinutes(start_time, time_after || 0);
        const close_after = differenceInMilliseconds(time.getTime() + 60 * 1e3, Date.now());
        const wording = type === "parking" ? "reservation" : "booking";
        const result = await openConfirmModal({
          title: `Keep ${type} ${wording}`,
          content: `You have indicated you are not in the office.
                                Your  ${wording} for "<i>${booking.asset_name || booking.title}</i>" at ${format(booking.date, this._settings.time_format)} will be cancelled at ${format(time, this._settings.time_format)}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
          icon: { content: "event_busy" },
          confirm_text: "Keep",
          close_delay: close_after
        }, this._dialog);
        if (result.reason !== "done") {
          this._ignore_cancel.push(booking.id);
          continue;
        }
        result.loading("Checking in booking...");
        await setBookingCheckedIn(booking, true);
        result.close();
      }
    }
  }
  ///////////////////////////////////////////////////////////////
  async edit(event) {
    console.log("Edit Event:", event);
    this._router.navigate(["/book", "meeting", "form"]);
    if (event.creator !== event.mailbox) {
      event = (await queryEvents({
        period_start: event.event_start,
        period_end: event.event_end,
        ical_uid: event.ical_uid
      })).find((_) => _.ical_uid === event.ical_uid) || event;
    }
    const resources = event.resources?.length ? event.resources : event.system ? [event.system] : [];
    if (resources.length) {
      const full_resources = await Promise.all(resources.map(async (resource2) => {
        const lookup_key = resource2.email || resource2.id;
        if (!lookup_key)
          return resource2;
        let space = this._spaces.find(lookup_key);
        if (!space) {
          try {
            await this._spaces.loadSpace(lookup_key);
            space = this._spaces.find(lookup_key);
          } catch (err) {
            console.warn(`Failed to load space ${lookup_key}:`, err);
          }
        }
        return space || resource2;
      }));
      event = new CalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
        resources: full_resources
      }));
    }
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  editBooking(event) {
    console.log("Edit Booking:", event.type);
    const booking_type = `${event.booking_type || ""}`.trim() || event.type;
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(booking_type, event);
    if (booking_type === "visitor")
      return;
    setTimeout(() => {
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      }));
    }, 100);
  }
  async remove(item, remove_series = false) {
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resource_name = item instanceof CalendarEvent ? item.title || item.space?.display_name : item.title || item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_TITLE" : "APP.WORKPLACE.SCHEDULE_REMOVE_TITLE", { name: resource_name, time }),
      content: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_MSG" : "APP.WORKPLACE.SCHEDULE_REMOVE_MSG", { name: resource_name, time }),
      icon: { content: "delete" }
    }, this._dialog);
    if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
      item = (await queryEvents({
        period_start: item.event_start,
        period_end: item.event_end,
        ical_uid: item.ical_uid
      })).find((_) => _.ical_uid === item.ical_uid) || item;
    }
    if (resp.reason !== "done")
      return;
    resp.loading(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_LOADING" : "APP.WORKPLACE.SCHEDULE_REMOVE_LOADING"));
    await (item instanceof CalendarEvent ? removeEvent : removeBooking)(remove_series ? item.recurring_event_id || item.id : item.id, {
      calendar: this._settings.get("app.events.use_bookings") ? null : item.calendar || currentUser()?.email,
      system_id: item.system?.id,
      instance: remove_series ? void 0 : !!item.instance,
      start_time: item.instance ? item.instance : void 0
    }).catch((e) => {
      notifyError(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_ERROR" : "APP.WORKPLACE.SCHEDULE_REMOVE_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_SUCCESS" : "APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS"));
    if (item instanceof CalendarEvent)
      this.removeItem(item);
    else
      this.triggerPoll();
    this._dialog.closeAll();
  }
  async end(item) {
    const now = Date.now();
    const resource_name = item.asset_name || item.asset_id;
    if (isAfter(now, item.date_end)) {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ALREADY_ENDED_ERROR"));
      return;
    }
    if (isBefore(now, item.date)) {
      return this.remove(item);
    }
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resp = await openConfirmModal({
      title: i18n("APP.WORKPLACE.SCHEDULE_END_TITLE"),
      content: i18n("APP.WORKPLACE.SCHEDULE_END_MSG", {
        name: resource_name,
        time
      }),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.WORKPLACE.SCHEDULE_END_LOADING"));
    const promise = setBookingCheckedIn(item, false).catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    await promise;
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
    this.triggerPoll();
    this._dialog.closeAll();
  }
  static {
    this.\u0275fac = function ScheduleStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleStateService, factory: _ScheduleStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/components/global-search.component.ts
var _c07 = ["input"];
var _c14 = (a0, a1, a2, a3) => ({ "opacity-100": a0, "opacity-0": a1, "pointer-events-none": a2, open: a3 });
var _c23 = () => ["/explore"];
var _c32 = (a0) => ({ space: a0 });
var _c4 = (a0) => ({ user: a0 });
var _c5 = (a0, a1, a2) => ({ locate: a0, name: a1, zone: a2 });
var _forTrack03 = ($index, $item) => $item.id + $index;
function GlobalSearchComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SEARCH_EMPTY"), " ");
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.GLOBAL_SEARCH_START"), " ");
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GlobalSearchComponent_Conditional_11_Conditional_2_Conditional_0_Template, 3, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.results().length ? 0 : -1);
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c23))("queryParams", option_r3.type === "space" ? \u0275\u0275pureFunction1(6, _c32, option_r3.id) : option_r3.type === "user" || option_r3.is_role ? \u0275\u0275pureFunction1(8, _c4, option_r3.id) : \u0275\u0275pureFunction3(10, _c5, option_r3.id, option_r3.name, option_r3.zone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GlobalSearchComponent_Conditional_11_Conditional_3_For_1_Template, 8, 14, "a", 9, _forTrack03);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r1.results(), 0, 100));
  }
}
function GlobalSearchComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, GlobalSearchComponent_Conditional_11_Conditional_1_Template, 3, 3, "div", 8)(2, GlobalSearchComponent_Conditional_11_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, GlobalSearchComponent_Conditional_11_Conditional_3_Template, 3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(3, _c14, ctx_r1.show(), !ctx_r1.show(), !ctx_r1.show(), ctx_r1.show()));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.results().length && ctx_r1.filter_str() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.loading() && ctx_r1.filter_str() ? 3 : -1);
  }
}
var GlobalSearchComponent = class _GlobalSearchComponent extends AsyncHandler {
  constructor() {
    super();
    this._service = inject(ExploreSearchService);
    this._schedule = inject(ScheduleStateService);
    this.results = this._service.global_search_results;
    this.loading = this._service.loading;
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter_str = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter_str" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setFilter = (s) => s instanceof Object ? this.filter_str.set("") : this._service.setFilter(s);
    this._input_el = viewChild(
      "input",
      ...ngDevMode ? [{ debugName: "_input_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const in_progress = this._schedule.bookings().filter((b) => {
        const state = b.state;
        return state === "in_progress" || state === "started";
      });
      this._service.setInProgressBookings(in_progress);
    });
  }
  ngOnInit() {
  }
  showInput() {
    this.show.set(true);
    this._input_el().nativeElement.focus();
    this.clearTimeout("close");
  }
  hideInput() {
    this.timeout("close", () => this.show.set(false));
  }
  static {
    this.\u0275fac = function GlobalSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalSearchComponent, selectors: [["global-search"]], viewQuery: function GlobalSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c07, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 12, consts: [["input", ""], [1, "relative", "h-full", "w-12"], ["icon", "", "name", "global-search", "matRipple", "", 1, "bg-base-200", "h-10", "w-10", "rounded-full", 3, "click"], [1, "text-2xl"], ["search", "", 1, "border-neutral", "bg-base-100", "absolute", "top-1/2", "right-2", "z-50", "flex", "h-12", "w-[calc(100vw-4rem)]", "-translate-y-1/2", "items-center", "space-x-2", "rounded-[24px]", "border-2", "px-2", "shadow-sm", "sm:w-lg", 3, "click", "ngClass"], [1, "w-1/2", "flex-1", "py-2", "outline-hidden", 3, "ngModelChange", "blur", "placeholder", "ngModel"], [3, "diameter"], ["search", "", 1, "border-base-200", "bg-base-100", "absolute", "right-2", "bottom-0", "flex", "max-h-[40vh]", "w-[calc(100vw-4rem)]", "translate-y-[calc(100%-1rem)]", "flex-col", "items-center", "overflow-auto", "rounded-b", "border", "pt-4", "shadow-sm", "sm:w-lg", 3, "ngClass"], ["empty", "", 1, "w-full", "p-4", "text-center", "opacity-60"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "h-14", "min-h-14", "w-full", "items-center", "px-4", "py-2", "leading-tight", 3, "routerLink", "queryParams"], [1, "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs", "opacity-60"], [1, "bg-secondary", "text-secondary-content", "rounded-sm", "p-2", "text-xs", "font-medium", "text-white", "capitalize"]], template: function GlobalSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
        \u0275\u0275listener("click", function GlobalSearchComponent_Template_button_click_1_listener() {
          return ctx.showInput();
        });
        \u0275\u0275elementStart(2, "icon", 3);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275listener("click", function GlobalSearchComponent_Template_div_click_4_listener() {
          return ctx.showInput();
        });
        \u0275\u0275elementStart(5, "icon", 3);
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5, 0);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function GlobalSearchComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filter_str, $event) || (ctx.filter_str = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function GlobalSearchComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.setFilter($event);
        })("blur", function GlobalSearchComponent_Template_input_blur_7_listener() {
          return ctx.hideInput();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(10, GlobalSearchComponent_Conditional_10_Template, 1, 1, "mat-spinner", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, GlobalSearchComponent_Conditional_11_Template, 4, 8, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c14, ctx.show(), !ctx.show(), !ctx.show(), ctx.show()));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 5, "APP.WORKPLACE.GLOBAL_SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.filter_str);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filter_str() ? 11 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      RouterLink,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      SlicePipe,
      TranslatePipe
    ], styles: ["\n[search][_ngcontent-%COMP%] {\n  clip-path: inset(0 0 0 calc(100% - 3rem) round 24px);\n  transition: clip-path 220ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 160ms ease-out;\n}\n[search].open[_ngcontent-%COMP%] {\n  clip-path: inset(0 0 0 0 round 24px);\n}\n@media (prefers-reduced-motion: reduce) {\n  [search][_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=global-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSearchComponent, [{
    type: Component,
    args: [{ selector: "global-search", template: `
        <div class="relative h-full w-12">
            <button
                icon
                name="global-search"
                matRipple
                class="bg-base-200 h-10 w-10 rounded-full"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            <div
                search
                class="border-neutral bg-base-100 absolute top-1/2 right-2 z-50 flex h-12 w-[calc(100vw-4rem)] -translate-y-1/2 items-center space-x-2 rounded-[24px] border-2 px-2 shadow-sm sm:w-lg"
                [ngClass]="{
                    'opacity-100': show(),
                    'opacity-0': !show(),
                    'pointer-events-none': !show(),
                    open: show(),
                }"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
                <input
                    #input
                    [placeholder]="'APP.WORKPLACE.GLOBAL_SEARCH' | translate"
                    class="w-1/2 flex-1 py-2 outline-hidden"
                    [(ngModel)]="filter_str"
                    (ngModelChange)="setFilter($event)"
                    (blur)="hideInput()"
                />
                @if (loading()) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
            </div>
            @if (filter_str()) {
                <div
                    search
                    class="border-base-200 bg-base-100 absolute right-2 bottom-0 flex max-h-[40vh] w-[calc(100vw-4rem)] translate-y-[calc(100%-1rem)] flex-col items-center overflow-auto rounded-b border pt-4 shadow-sm sm:w-lg"
                    [ngClass]="{
                        'opacity-100': show(),
                        'opacity-0': !show(),
                        'pointer-events-none': !show(),
                        open: show(),
                    }"
                >
                    @if (!results().length && filter_str()) {
                        <div empty class="w-full p-4 text-center opacity-60">
                            {{ 'COMMON.SEARCH_EMPTY' | translate }}
                        </div>
                    } @else {
                        @if (!results().length) {
                            <div
                                empty
                                class="w-full p-4 text-center opacity-60"
                            >
                                {{
                                    'APP.WORKPLACE.GLOBAL_SEARCH_START'
                                        | translate
                                }}
                            </div>
                        }
                    }
                    @if (!loading() && filter_str()) {
                        @for (
                            option of results() | slice: 0 : 100;
                            track option.id + $index
                        ) {
                            <a
                                matRipple
                                [routerLink]="['/explore']"
                                [queryParams]="
                                    option.type === 'space'
                                        ? { space: option.id }
                                        : option.type === 'user' ||
                                            option.is_role
                                          ? { user: option.id }
                                          : {
                                                locate: option.id,
                                                name: option.name,
                                                zone: option.zone,
                                            }
                                "
                                class="hover:bg-base-200 flex h-14 min-h-14 w-full items-center px-4 py-2 leading-tight"
                            >
                                <div class="flex-1 overflow-hidden">
                                    <div class="w-full truncate">
                                        {{ option.name }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ option.description }}
                                    </div>
                                </div>
                                <div
                                    class="bg-secondary text-secondary-content rounded-sm p-2 text-xs font-medium text-white capitalize"
                                >
                                    {{ option.type }}
                                </div>
                            </a>
                        }
                    }
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      RouterModule,
      TranslatePipe,
      IconComponent,
      FormsModule,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;8cd3c76ed432c4eb2667bdd4d557d00fcced704ee0b7e39758e970bd22fc830a;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/global-search.component.ts */\n[search] {\n  clip-path: inset(0 0 0 calc(100% - 3rem) round 24px);\n  transition: clip-path 220ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 160ms ease-out;\n}\n[search].open {\n  clip-path: inset(0 0 0 0 round 24px);\n}\n@media (prefers-reduced-motion: reduce) {\n  [search] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=global-search.component.css.map */\n"] }]
  }], () => [], { _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalSearchComponent, { className: "GlobalSearchComponent", filePath: "apps/workplace/src/app/components/global-search.component.ts", lineNumber: 156 });
})();

// apps/workplace/src/app/components/top-menu.component.ts
var _c08 = ["menuContainer"];
var _c15 = (a0) => ({ route: a0 });
function _forTrack04($index, $item) {
  return this.trackRoute($item);
}
function TopMenuComponent_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const route_contents_r4 = \u0275\u0275reference(7);
    \u0275\u0275property("name", "nav-" + route_r3.id)("href", route_r3.url, \u0275\u0275sanitizeUrl)("matTooltip", route_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", route_contents_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c15, route_r3));
  }
}
function TopMenuComponent_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275element(2, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const route_contents_r4 = \u0275\u0275reference(7);
    \u0275\u0275property("name", "nav-" + route_r3.id)("routerLink", route_r3.route)("matTooltip", route_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", route_contents_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c15, route_r3));
  }
}
function TopMenuComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopMenuComponent_Conditional_0_For_3_Conditional_0_Template, 2, 7, "a", 7)(1, TopMenuComponent_Conditional_0_For_3_Conditional_1_Template, 3, 7, "a", 8);
  }
  if (rf & 2) {
    const route_r3 = ctx.$implicit;
    \u0275\u0275conditional(route_r3.external ? 0 : 1);
  }
}
function TopMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6, 3);
    \u0275\u0275listener("resize", function TopMenuComponent_Conditional_0_Template_div_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkMenu());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275repeaterCreate(2, TopMenuComponent_Conditional_0_For_3_Template, 2, 1, null, null, _forTrack04, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", ctx_r1.mobile_menu() || ctx_r1.checking())("h-0!", ctx_r1.mobile_menu());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.visible_routes());
  }
}
function TopMenuComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 11)(2, "icon");
    \u0275\u0275text(3, "menu");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r5 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
  }
}
function TopMenuComponent_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const mobile_route_contents_r7 = \u0275\u0275reference(9);
    \u0275\u0275property("href", route_r6.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", mobile_route_contents_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c15, route_r6));
  }
}
function TopMenuComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const mobile_route_contents_r7 = \u0275\u0275reference(9);
    \u0275\u0275property("routerLink", route_r6.route);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", mobile_route_contents_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c15, route_r6));
  }
}
function TopMenuComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopMenuComponent_For_5_Conditional_0_Template, 2, 5, "a", 12)(1, TopMenuComponent_For_5_Conditional_1_Template, 2, 5, "a", 13);
  }
  if (rf & 2) {
    const route_r6 = ctx.$implicit;
    \u0275\u0275conditional(route_r6.external ? 0 : 1);
  }
}
function TopMenuComponent_ng_template_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r8 = \u0275\u0275nextContext().route;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r8.name);
  }
}
function TopMenuComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "icon", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TopMenuComponent_ng_template_6_Conditional_4_Template, 2, 1, "span", 16);
  }
  if (rf & 2) {
    const route_r8 = ctx.route;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mx-auto", ctx_r1.hide_text());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r8.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("mx-auto", ctx_r1.hide_text());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", route_r8.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_text() ? 4 : -1);
  }
}
function TopMenuComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const route_r9 = ctx.route;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(route_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", route_r9.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(route_r9.name);
  }
}
var TOP_MENU_FEATURE_ALIASES = {
  "parking-requests": ["parking", "parking-requests"]
};
function hasActiveTopMenuFeature(type, features) {
  const feature_names = TOP_MENU_FEATURE_ALIASES[type] || [type];
  return feature_names.some((_) => features.includes(_));
}
function hasLoadedTopMenuSettings(state) {
  return !!state.settings_initialised && !!state.org_initialised && state.has_region_context && state.has_building_context && state.override_count >= state.required_override_count;
}
var TopMenuComponent = class _TopMenuComponent {
  constructor() {
    this._element = inject(ElementRef);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._destroy_ref = inject(DestroyRef);
    this.menu = viewChild(
      "menuContainer",
      ...ngDevMode ? [{ debugName: "menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = this._org.active_building;
    this.settings_initialised = signal(
      this._settings.is_initialised,
      ...ngDevMode ? [{ debugName: "settings_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const has_region_context = !this._org.regions.length || !!region?.id;
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return hasLoadedTopMenuSettings({
          settings_initialised: this.settings_initialised(),
          org_initialised: this._org.initialised(),
          has_region_context,
          has_building_context: !!building?.id,
          override_count: overrides.length,
          required_override_count: required_overrides
        });
      },
      ...ngDevMode ? [{ debugName: "settings_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previous_size = signal(
      9999,
      ...ngDevMode ? [{ debugName: "previous_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checking = signal(
      false,
      ...ngDevMode ? [{ debugName: "checking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mobile_menu = signal(
      false,
      ...ngDevMode ? [{ debugName: "mobile_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_text = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setBuilding = (b) => this._org.building = b;
    this.user = userSignal();
    this.feature_list = settingSignal("features", []);
    this.feature_groups = settingSignal("feature_groups", {});
    this.default_page = settingSignal("app.default_route", "/landing");
    this.new_features = settingSignal("app.new_features", false);
    this.menu_embeds = settingSignal("menu_embeds", []);
    this.is_admin = computed(
      () => {
        const groups = this.user().groups;
        return groups.includes("placeos_admin") || groups.includes("placeos_support");
      },
      ...ngDevMode ? [{ debugName: "is_admin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const feature_list = this.feature_list();
        const feature_groups = this.feature_groups();
        const groups = this.user().groups;
        return feature_list.filter((name) => !feature_groups[name]?.length || feature_groups[name].find((_) => groups.includes(_)));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.url = signal(
      this._router.url,
      ...ngDevMode ? [{ debugName: "url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = computed(
      () => {
        const url = this.url();
        const default_page = this.default_page();
        if (url.includes(default_page))
          return "home";
        if (url.includes("book/spaces"))
          return "spaces";
        if (url.includes("book/desk"))
          return "desks";
        if (url.includes("book/locker"))
          return "lockers";
        if (url.includes("book/parking-request"))
          return "parking-requests";
        if (url.includes("book/parking"))
          return "parking";
        if (url.includes("explore"))
          return "explore";
        if (url.includes("schedule"))
          return "schedule";
        return "";
      },
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.routes = computed(
      () => [
        {
          id: "home",
          route: this.default_page(),
          icon: "home",
          name: i18n("APP.WORKPLACE.MENU_HOME")
        },
        {
          id: "desks",
          route: "/book/desk",
          icon: "desk",
          name: i18n("APP.WORKPLACE.MENU_DESKS")
        },
        {
          id: "spaces",
          route: "/book/meeting",
          icon: "meeting_room",
          name: i18n("APP.WORKPLACE.MENU_ROOMS")
        },
        {
          id: "lockers",
          route: "/book/locker",
          icon: "lock",
          name: i18n("APP.WORKPLACE.MENU_LOCKERS")
        },
        {
          id: "parking",
          route: "/book/parking",
          icon: "directions_car",
          name: i18n("APP.WORKPLACE.MENU_PARKING")
        },
        {
          id: "parking-requests",
          route: "/book/parking-request",
          icon: "local_parking",
          name: i18n("APP.WORKPLACE.MENU_PARKING_REQUESTS")
        },
        {
          id: "visitor-invite",
          route: "/book/visitor",
          icon: "person",
          name: i18n("APP.WORKPLACE.MENU_VISITORS")
        },
        {
          id: "explore",
          route: "/explore",
          icon: "place",
          name: i18n("APP.WORKPLACE.MENU_EXPLORE")
        },
        {
          id: "schedule",
          route: "/your-bookings",
          icon: "event",
          name: i18n("APP.WORKPLACE.MENU_SCHEDULE")
        },
        {
          id: "control",
          route: "/control",
          icon: "remote_gen",
          name: i18n("APP.WORKPLACE.MENU_CONTROL")
        },
        {
          id: "group-events",
          route: "/group-events",
          icon: "local_activity",
          name: i18n("APP.WORKPLACE.MENU_EVENTS")
        },
        {
          id: "deals-n-offers",
          route: "/deals-n-offers",
          icon: "confirmation_number",
          name: i18n("APP.WORKPLACE.MENU_DEALS")
        },
        {
          id: "team-schedule",
          route: "/team-schedule",
          icon: "groups",
          name: i18n("APP.WORKPLACE.MENU_TEAM_SCHEDULE")
        },
        ...this.menu_embeds().filter((item) => item?.id && item?.name && item?.url).map((item) => ({
          id: `embed-${item.id}`,
          route: item.external ? item.url : `/embedded/${encodeURIComponent(item.id)}`,
          url: item.external ? item.url : void 0,
          icon: item.icon || "open_in_browser",
          name: item.name,
          embed: true,
          external: !!item.external
        }))
      ],
      ...ngDevMode ? [{ debugName: "routes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_routes = computed(
      () => {
        const features = this.features();
        return this.routes().filter((route) => route.embed || route.id === "home" || features.includes(route.id));
      },
      ...ngDevMode ? [{ debugName: "visible_routes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.trackRoute = (route) => route.id;
    this._check_menu_timer = null;
    this.checking.set(true);
    const settings_sub = this._settings.initialised.subscribe((value) => this.settings_initialised.set(value));
    const route_sub = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.url.set(this._router.url);
    });
    this._destroy_ref.onDestroy(() => {
      settings_sub.unsubscribe();
      route_sub.unsubscribe();
    });
    effect(() => {
      this.building();
      this.visible_routes();
      this._checkRoute();
    });
    afterNextRender(() => {
      this._scheduleCheckMenu(300);
    });
  }
  _checkRoute() {
    if (!this.settings_ready()) {
      this._scheduleCheckMenu(300);
      return;
    }
    const type = this.type();
    const features = this.features();
    if (type && type !== "home" && !hasActiveTopMenuFeature(type, features)) {
      this._router.navigate(["/"]);
    }
    this._scheduleCheckMenu(300);
  }
  _scheduleCheckMenu(delay) {
    if (this._check_menu_timer) {
      clearTimeout(this._check_menu_timer);
    }
    this._check_menu_timer = setTimeout(() => this.checkMenu(), delay);
  }
  checkMenu() {
    const menu_el = this.menu();
    const menu_width = menu_el?.nativeElement?.offsetWidth || 0;
    const container_width = this._element.nativeElement.parentElement?.offsetWidth || 0;
    this.checking.set(false);
    if (menu_width > container_width && !this.hide_text()) {
      this.hide_text.set(true);
      this._scheduleCheckMenu(20);
      this.checking.set(true);
      this.previous_size.set(container_width);
      return;
    }
    if (this.hide_text()) {
      this.mobile_menu.set(menu_width > container_width);
    }
    if (container_width > this.previous_size() && this.hide_text()) {
      this.hide_text.set(false);
      this._scheduleCheckMenu(20);
      this.checking.set(true);
    }
    this.previous_size.set(container_width);
  }
  static {
    this.\u0275fac = function TopMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopMenuComponent, selectors: [["top-menu"]], viewQuery: function TopMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.menu, _c08, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 10, vars: 2, consts: [["menu", "matMenu"], ["route_contents", ""], ["mobile_route_contents", ""], ["menuContainer", ""], ["menu", "", 1, "text-base-content", "flex", "h-full", "w-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", 3, "opacity-0", "h-0!"], [1, "absolute", "inset-y-0", "-right-20", "left-0", "flex", "items-center", "justify-end"], ["menu", "", 1, "text-base-content", "flex", "h-full", "w-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", 3, "resize"], ["matRipple", "", "target", "_blank", "rel", "noopener noreferrer", "matTooltipPosition", "below", 1, "relative", "flex", "items-center", "justify-center", "space-x-2", "px-8", 3, "name", "href", "matTooltip"], ["matRipple", "", "routerLinkActive", "text-secondary active", "matTooltipPosition", "below", 1, "relative", "flex", "items-center", "justify-center", "space-x-2", "px-8", 3, "name", "routerLink", "matTooltip"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["bar", "", 1, "bg-secondary", "absolute", "inset-x-0", "bottom-0", "h-0.5"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["mat-menu-item", "", "routerLinkActive", "bg-info-light! active", 3, "routerLink"], ["filled", "", 1, "text-xl"], ["outline", "", "className", "material-symbols-outlined", 1, "m-0!", "text-xl"], [1, "truncate"], [1, "flex", "items-center", "space-x-2"], ["outline", "", "className", "material-symbols-outlined", 1, "text-xl"], [1, "truncate", "pr-4"]], template: function TopMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TopMenuComponent_Conditional_0_Template, 4, 4, "div", 4);
        \u0275\u0275conditionalCreate(1, TopMenuComponent_Conditional_1_Template, 4, 1, "div", 5);
        \u0275\u0275elementStart(2, "mat-menu", null, 0);
        \u0275\u0275repeaterCreate(4, TopMenuComponent_For_5_Template, 2, 1, null, null, _forTrack04, true);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, TopMenuComponent_ng_template_6_Template, 5, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, TopMenuComponent_ng_template_8_Template, 7, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.routes().length > 1 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mobile_menu() ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.visible_routes());
      }
    }, dependencies: [
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      RouterModule,
      RouterLink,
      RouterLinkActive,
      MatTooltipModule,
      MatTooltip,
      NgTemplateOutlet
    ], styles: ["\n[menu][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  shrink: 1;\n}\n[bar][_ngcontent-%COMP%] {\n  display: none;\n}\n.active[_ngcontent-%COMP%]    > [bar][_ngcontent-%COMP%] {\n  display: block;\n}\na[_ngcontent-%COMP%]:not([mat-menu-item]):not(.active) {\n  opacity: 0.6;\n}\na[_ngcontent-%COMP%]:not([mat-menu-item]):not(.active):hover {\n  border-radius: 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  height: 3rem;\n  background-color: var(--base-200);\n  opacity: 0.4;\n}\na[_ngcontent-%COMP%]:not(.active)   [filled][_ngcontent-%COMP%], \na.active[_ngcontent-%COMP%]   [outline][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=top-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopMenuComponent, [{
    type: Component,
    args: [{ selector: "top-menu", template: `
        @if (routes().length > 1) {
            <div
                #menuContainer
                menu
                [class.opacity-0]="mobile_menu() || checking()"
                [class.h-0!]="mobile_menu()"
                (window:resize)="checkMenu()"
                class="text-base-content flex h-full w-full min-w-full items-center justify-center overflow-hidden"
            >
                @for (route of visible_routes(); track trackRoute(route)) {
                    @if (route.external) {
                        <a
                            matRipple
                            [name]="'nav-' + route.id"
                            class="relative flex items-center justify-center space-x-2 px-8"
                            [href]="route.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            [matTooltip]="route.name"
                            matTooltipPosition="below"
                        >
                            <ng-container
                                [ngTemplateOutlet]="route_contents"
                                [ngTemplateOutletContext]="{ route }"
                            />
                        </a>
                    } @else {
                        <a
                            matRipple
                            [name]="'nav-' + route.id"
                            class="relative flex items-center justify-center space-x-2 px-8"
                            [routerLink]="route.route"
                            routerLinkActive="text-secondary active"
                            [matTooltip]="route.name"
                            matTooltipPosition="below"
                        >
                            <ng-container
                                [ngTemplateOutlet]="route_contents"
                                [ngTemplateOutletContext]="{ route }"
                            />
                            <div
                                bar
                                class="bg-secondary absolute inset-x-0 bottom-0 h-0.5"
                            ></div>
                        </a>
                    }
                }
            </div>
        }
        @if (mobile_menu()) {
            <div
                class="absolute inset-y-0 -right-20 left-0 flex items-center justify-end"
            >
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>menu</icon>
                </button>
            </div>
        }
        <mat-menu #menu="matMenu">
            @for (route of visible_routes(); track trackRoute(route)) {
                @if (route.external) {
                    <a
                        mat-menu-item
                        [href]="route.url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ng-container
                            [ngTemplateOutlet]="mobile_route_contents"
                            [ngTemplateOutletContext]="{ route }"
                        />
                    </a>
                } @else {
                    <a
                        mat-menu-item
                        [routerLink]="route.route"
                        routerLinkActive="bg-info-light! active"
                    >
                        <ng-container
                            [ngTemplateOutlet]="mobile_route_contents"
                            [ngTemplateOutletContext]="{ route }"
                        />
                    </a>
                }
            }
        </mat-menu>
        <ng-template #route_contents let-route="route">
            <icon filled class="text-xl" [class.mx-auto]="hide_text()">{{
                route.icon
            }}</icon>
            <icon
                outline
                className="material-symbols-outlined"
                [class.mx-auto]="hide_text()"
                class="m-0! text-xl"
            >
                {{ route.icon }}
            </icon>
            @if (!hide_text()) {
                <span class="truncate">{{ route.name }}</span>
            }
        </ng-template>
        <ng-template #mobile_route_contents let-route="route">
            <div class="flex items-center space-x-2">
                <icon filled class="text-xl">{{ route.icon }}</icon>
                <icon
                    outline
                    className="material-symbols-outlined"
                    class="text-xl"
                >
                    {{ route.icon }}
                </icon>
                <div class="truncate pr-4">{{ route.name }}</div>
            </div>
        </ng-template>
    `, imports: [
      MatMenuModule,
      IconComponent,
      RouterModule,
      MatTooltipModule,
      NgTemplateOutlet
    ], styles: ["/* angular:styles/component:css;491d90d0153103a1df6c44daff3b497dac0fd06098e453fa2c33b0bea4e6cebc;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/top-menu.component.ts */\n[menu] > * {\n  height: 3.5rem;\n  shrink: 1;\n}\n[bar] {\n  display: none;\n}\n.active > [bar] {\n  display: block;\n}\na:not([mat-menu-item]):not(.active) {\n  opacity: 0.6;\n}\na:not([mat-menu-item]):not(.active):hover {\n  border-radius: 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  height: 3rem;\n  background-color: var(--base-200);\n  opacity: 0.4;\n}\na:not(.active) [filled],\na.active [outline] {\n  display: none;\n}\n/*# sourceMappingURL=top-menu.component.css.map */\n"] }]
  }], () => [], { menu: [{ type: ViewChild, args: ["menuContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopMenuComponent, { className: "TopMenuComponent", filePath: "apps/workplace/src/app/components/top-menu.component.ts", lineNumber: 233 });
})();

// apps/workplace/src/app/components/topbar.component.ts
var _c09 = () => ["/-"];
function TopbarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function TopbarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-search");
  }
}
var EMPTY = [];
var TopbarComponent = class _TopbarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.user = userSignal();
    this.user_controls = viewChild(
      UserControlsSidebarComponent,
      ...ngDevMode ? [{ debugName: "user_controls" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo = computed(
      () => {
        return this._settings.theme_signal() === "dark" ? settingSignal("logo_dark", "")() : settingSignal("logo_light", "")();
      },
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Text to display for page title */
  get title() {
    return this._settings.value("page_title");
  }
  /** Text to display for page title */
  get search() {
    return this._settings.get("app.global_search") !== false;
  }
  get new_features() {
    return !!this._settings.get("app.new_features");
  }
  get features() {
    return this._settings.get("app.features") || EMPTY;
  }
  static {
    this.\u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["topbar"]], viewQuery: function TopbarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.user_controls, UserControlsSidebarComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 10, vars: 8, consts: [["topbar", "", 1, "border-base-200", "bg-base-100", "relative", "z-50", "flex", "min-h-14", "items-center", "justify-between", "border-b", "shadow-sm", "pt-[env(safe-area-inset-top)]", "pl-[env(safe-area-inset-left)]", "pr-[env(safe-area-inset-right)]"], ["name", "nav-logo", 1, "flex", "h-full", "w-48", "items-center", "p-2", 3, "routerLink"], ["auth", "", "alt", "Logo", 1, "h-10", "sm:block", 3, "source"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-1", "items-center", "justify-center", "sm:flex"], [1, "flex", "w-48", "items-center", "justify-end"], [1, "mr-2"], [3, "user"]], template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275conditionalCreate(3, TopbarComponent_Conditional_3_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "top-menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275conditionalCreate(7, TopbarComponent_Conditional_7_Template, 1, 0, "global-search");
        \u0275\u0275elementStart(8, "user-controls-sidebar", 5);
        \u0275\u0275element(9, "a-user-avatar", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c09));
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.title);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.title ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.search ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("user", ctx.user());
      }
    }, dependencies: [
      GlobalSearchComponent,
      TopMenuComponent,
      AuthenticatedImageDirective,
      RouterModule,
      RouterLink,
      UserAvatarComponent,
      UserControlsSidebarComponent
    ], styles: ["\n.flex-3[_ngcontent-%COMP%] {\n  flex: 3 3 0%;\n}\n/*# sourceMappingURL=topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "topbar", template: `
        <div
            topbar
            class="border-base-200 bg-base-100 relative z-50 flex min-h-14 items-center justify-between border-b shadow-sm pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
        >
            <a
                name="nav-logo"
                class="flex h-full w-48 items-center p-2"
                [routerLink]="['/-']"
            >
                <img
                    auth
                    class="h-10 sm:block"
                    [class.hidden]="title"
                    alt="Logo"
                    [source]="$any(logo())?.src || logo()"
                />
                @if (title) {
                    <span>{{ title }}</span>
                }
            </a>
            <div
                class="relative hidden h-full w-1/2 flex-1 items-center justify-center sm:flex"
            >
                <top-menu />
            </div>
            <div class="flex w-48 items-center justify-end">
                @if (search) {
                    <global-search />
                }
                <user-controls-sidebar class="mr-2">
                    <a-user-avatar [user]="user()" />
                </user-controls-sidebar>
            </div>
        </div>
    `, imports: [
      GlobalSearchComponent,
      TopMenuComponent,
      AuthenticatedImageDirective,
      RouterModule,
      UserAvatarComponent,
      UserControlsSidebarComponent
    ], styles: ["/* angular:styles/component:css;a44fe1a1620c24b3fe7fa535fb11a46fbe2a82fc133187e049f6c240e05155eb;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/topbar.component.ts */\n.flex-3 {\n  flex: 3 3 0%;\n}\n/*# sourceMappingURL=topbar.component.css.map */\n"] }]
  }], null, { user_controls: [{ type: ViewChild, args: [forwardRef(() => UserControlsSidebarComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "apps/workplace/src/app/components/topbar.component.ts", lineNumber: 73 });
})();

export {
  parse,
  parse2,
  MatSlider,
  MatSliderThumb,
  MatSliderModule,
  DeskHeightPresetsComponent,
  FooterMenuComponent,
  isBookingForOtherUser,
  bookedForLabel,
  ScheduleStateService,
  TopbarComponent
};
//# sourceMappingURL=chunk-P5JMODFQ.js.map
