import {
  A,
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActiveDescendantKeyManager,
  ApplicationRef,
  AsyncHandler,
  BidiModule,
  COMMA,
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  CdkScrollable,
  CdkScrollableModule,
  ChangeDetectorRef,
  Clipboard,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  CustomTooltipComponent,
  CustomTooltipData,
  DOCUMENT,
  DOWN_ARROW,
  Da,
  DatePipe,
  DefaultValueAccessor,
  Directionality,
  Directive,
  DomPortalOutlet,
  DomSanitizer,
  ENTER,
  ESCAPE,
  ElementRef,
  ErrorStateMatcher,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  FormField,
  FormGroupDirective,
  FormsModule,
  HostAttributeToken,
  HostListener,
  IconComponent,
  InjectionToken,
  Injector,
  Input,
  LEFT_ARROW,
  LiveAnnouncer,
  LocaleService,
  MAT_DIALOG_DATA,
  MAT_FORM_FIELD,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatOptionModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NO_ERRORS_SCHEMA,
  Na,
  NgControl,
  NgControlStatus,
  NgForm,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  OVERLAY_DEFAULT_CONFIG,
  OrganisationService,
  Output,
  OverlayConfig,
  OverlayModule,
  Pipe,
  Platform,
  Qr,
  QueryList,
  RIGHT_ARROW,
  Renderer2,
  RippleState,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Rt,
  SPACE,
  SafePipe,
  SanitizePipe,
  ScrollDispatcher,
  SecurityContext,
  Service,
  SettingsService,
  Subject,
  Subscription,
  TemplatePortal,
  TemplateRef,
  TranslatePipe,
  UPLOAD_PERMISSIONS_MODAL,
  UP_ARROW,
  UploadCancelledError,
  UploadsService,
  VERSION,
  Validators,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  X,
  Ye,
  _CdkPrivateStyleLoader,
  _ErrorStateTracker,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getAnimationsState,
  _getEventTarget,
  _getOptionScrollPosition,
  _getShadowRoot,
  addDays,
  addMinutes,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  constructFrom,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  currentUser,
  current_user,
  defer,
  effect,
  enUS,
  endOfDay,
  endOfDayInTimezone,
  filter,
  firstTruthyValueFrom,
  form,
  format,
  formatTimeInTimezone,
  forwardRef,
  getDefaultOptions,
  getDefaultOptions2,
  getISOWeek,
  getTimeInTimezone,
  getTimezoneOffsetInMilliseconds,
  getTimezoneOffsetString,
  getWeek,
  getWeekYear,
  hasModifierKey,
  hasNewVersion,
  i18n,
  inject,
  input,
  isAfter,
  isBefore,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  longFormatters,
  map,
  markUserDateChange,
  marked,
  merge,
  millisecondsInHour,
  millisecondsInMinute,
  millisecondsInSecond,
  model,
  notifyError,
  notifyInfo,
  notifySuccess,
  numberAttribute,
  of,
  output,
  reloadUserData,
  required,
  roundToNearestMinutes,
  set,
  setClassMetadata,
  setTimeInTimezone,
  settingSignal,
  signal,
  skipWhile,
  startOfDay,
  startOfDayInTimezone,
  startOfISOWeek,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  take,
  takeUntil,
  toDate,
  unique,
  userSignal,
  viewChild,
  warnOrThrowProtectedError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdefineService,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
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
} from "./chunk-FG7LXQD4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
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
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
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
  set(date, flags, value, options) {
    const currentYear = getWeekYear(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
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
function setWeek(date, week, options) {
  const date_ = toDate(date, options?.in);
  const diff = getWeek(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return toDate(date_, options?.in);
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
  set(date, _flags, value, options) {
    return startOfWeek(setWeek(date, value, options), options);
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
function setISOWeek(date, week, options) {
  const _date = toDate(date, options?.in);
  const diff = getISOWeek(_date, options) - week;
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
function setDay(date, day, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const date_ = toDate(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(date_, diff, options);
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
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
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
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
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
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
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
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
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

// node_modules/date-fns/getISODay.js
function getISODay(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}

// node_modules/date-fns/setISODay.js
function setISODay(date, day, options) {
  const date_ = toDate(date, options?.in);
  const currentDay = getISODay(date_, options);
  const diff = day - currentDay;
  return addDays(date_, diff, options);
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
function parse(dateStr, formatStr, referenceDate, options) {
  const invalidDate = () => constructFrom(options?.in || referenceDate, NaN);
  const defaultOptions = getDefaultOptions2();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (!formatStr)
    return dateStr ? invalidDate() : toDate(referenceDate, options?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  const setters = [new DateTimezoneSetter(options?.in, referenceDate)];
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
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`
        );
      }
      usedTokens.push({ token: firstCharacter, fullToken: token });
      const parseResult = parser.run(
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
  let date = toDate(referenceDate, options?.in);
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

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: () => ({
    diameter: BASE_SIZE
  })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  _noopAnimations;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  _determinateCircle;
  constructor() {
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    const animationsState = _getAnimationsState();
    const element = this._elementRef.nativeElement;
    this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
    this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (!this._noopAnimations && animationsState === "reduced-motion") {
      element.classList.add("mat-progress-spinner-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  mode;
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mat-progress-spinner-size", ctx.diameter + "px")("--mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner {\n  --mat-progress-spinner-animation-multiplier: 1;\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n  position: relative;\n  direction: ltr;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-progress-spinner circle {\n  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);\n}\n.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {\n  transition: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {\n  animation: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {\n  stroke-dasharray: 0 !important;\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {\n    stroke: currentColor;\n    stroke: CanvasText;\n  }\n}\n\n.mat-progress-spinner-reduced-motion {\n  --mat-progress-spinner-animation-multiplier: 1.25;\n}\n\n.mdc-circular-progress__determinate-container,\n.mdc-circular-progress__indeterminate-circle-graphic,\n.mdc-circular-progress__indeterminate-container,\n.mdc-circular-progress__spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-circular-progress__determinate-container {\n  transform: rotate(-90deg);\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {\n  opacity: 0;\n}\n\n.mdc-circular-progress__indeterminate-container {\n  font-size: 0;\n  letter-spacing: 0;\n  white-space: nowrap;\n  opacity: 0;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {\n  opacity: 1;\n  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;\n}\n\n.mdc-circular-progress__determinate-circle-graphic,\n.mdc-circular-progress__indeterminate-circle-graphic {\n  fill: transparent;\n}\n\n.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n    stroke: CanvasText;\n  }\n}\n\n.mdc-circular-progress__determinate-circle {\n  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-circular-progress__gap-patch {\n  position: absolute;\n  top: 0;\n  left: 47.5%;\n  box-sizing: border-box;\n  width: 5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -900%;\n  width: 2000%;\n  transform: rotate(180deg);\n}\n.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {\n  width: 200%;\n}\n.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -100%;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdc-circular-progress__circle-clipper {\n  display: inline-flex;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {\n  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@keyframes mdc-circular-progress-container-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mdc-circular-progress-spinner-layer-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  100% {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes mdc-circular-progress-left-spin {\n  from {\n    transform: rotate(265deg);\n  }\n  50% {\n    transform: rotate(130deg);\n  }\n  to {\n    transform: rotate(265deg);\n  }\n}\n@keyframes mdc-circular-progress-right-spin {\n  from {\n    transform: rotate(-265deg);\n  }\n  50% {\n    transform: rotate(-130deg);\n  }\n  to {\n    transform: rotate(-265deg);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner {\n  --mat-progress-spinner-animation-multiplier: 1;\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n  position: relative;\n  direction: ltr;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-progress-spinner circle {\n  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);\n}\n.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {\n  transition: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {\n  animation: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {\n  stroke-dasharray: 0 !important;\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {\n    stroke: currentColor;\n    stroke: CanvasText;\n  }\n}\n\n.mat-progress-spinner-reduced-motion {\n  --mat-progress-spinner-animation-multiplier: 1.25;\n}\n\n.mdc-circular-progress__determinate-container,\n.mdc-circular-progress__indeterminate-circle-graphic,\n.mdc-circular-progress__indeterminate-container,\n.mdc-circular-progress__spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-circular-progress__determinate-container {\n  transform: rotate(-90deg);\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {\n  opacity: 0;\n}\n\n.mdc-circular-progress__indeterminate-container {\n  font-size: 0;\n  letter-spacing: 0;\n  white-space: nowrap;\n  opacity: 0;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {\n  opacity: 1;\n  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;\n}\n\n.mdc-circular-progress__determinate-circle-graphic,\n.mdc-circular-progress__indeterminate-circle-graphic {\n  fill: transparent;\n}\n\n.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n    stroke: CanvasText;\n  }\n}\n\n.mdc-circular-progress__determinate-circle {\n  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-circular-progress__gap-patch {\n  position: absolute;\n  top: 0;\n  left: 47.5%;\n  box-sizing: border-box;\n  width: 5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -900%;\n  width: 2000%;\n  transform: rotate(180deg);\n}\n.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {\n  width: 200%;\n}\n.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -100%;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdc-circular-progress__circle-clipper {\n  display: inline-flex;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {\n  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@keyframes mdc-circular-progress-container-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mdc-circular-progress-spinner-layer-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  100% {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes mdc-circular-progress-left-spin {\n  from {\n    transform: rotate(265deg);\n  }\n  50% {\n    transform: rotate(130deg);\n  }\n  to {\n    transform: rotate(265deg);\n  }\n}\n@keyframes mdc-circular-progress-right-spin {\n  from {\n    transform: rotate(-265deg);\n  }\n  50% {\n    transform: rotate(-130deg);\n  }\n  to {\n    transform: rotate(-265deg);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule,
    imports: [MatProgressSpinner, MatSpinner],
    exports: [MatProgressSpinner, MatSpinner, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c02 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c1 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c2 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    });
    \u0275\u0275domElementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
    \u0275\u0275domProperty("id", ctx_r1.panelId);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  role = "menuitem";
  disabled = false;
  disableRipple = false;
  _hovered = new Subject();
  _focused = new Subject();
  _highlighted = false;
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static \u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275conditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [MatRipple],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  _attached = new Subject();
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static \u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], null, null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: () => ({
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  })
});
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  _animationsDisabled = _animationsDisabled();
  _allItems;
  _directDescendantItems = new QueryList();
  _classList = {};
  _panelAnimationState = "void";
  _animationDone = new Subject();
  _isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "_isAnimating"
  }] : []);
  parentMenu;
  direction;
  overlayPanelClass;
  backdropClass;
  ariaLabel;
  ariaLabelledby;
  ariaDescribedby;
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  templateRef;
  items;
  lazyContent;
  overlapTrigger = false;
  hasBackdrop;
  get panelClass() {
    return this._previousPanelClass;
  }
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass = "";
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  closed = new EventEmitter();
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  addItem(_item) {
  }
  removeItem(_item) {
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  setElevation(_depth) {
  }
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating.set(false);
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating.set(true);
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static \u0275fac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5)(dirIndex, MatMenuItem, 5)(dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }])],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ['mat-menu {\n  display: none;\n}\n\n.mat-mdc-menu-content {\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n}\n.mat-mdc-menu-content,\n.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1;\n  white-space: normal;\n  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));\n}\n\n@keyframes _mat-menu-enter {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-menu-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-menu-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  box-sizing: border-box;\n  outline: 0;\n  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));\n  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));\n  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  will-change: transform, opacity;\n}\n.mat-mdc-menu-panel.mat-menu-panel-exit-animation {\n  animation: _mat-menu-exit 100ms 25ms linear forwards;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {\n  animation: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating {\n  pointer-events: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {\n  display: none;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-panel {\n    outline: solid 1px;\n  }\n}\n.mat-mdc-menu-panel .mat-divider {\n  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));\n  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);\n  margin-top: var(--mat-menu-divider-top-spacing, 8px);\n}\n\n.mat-mdc-menu-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  text-decoration: none;\n  margin: 0;\n  min-height: 48px;\n  padding-left: var(--mat-menu-item-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-trailing-spacing, 12px);\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-menu-item::-moz-focus-inner {\n  border: 0;\n}\n[dir=rtl] .mat-mdc-menu-item {\n  padding-left: var(--mat-menu-item-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-leading-spacing, 12px);\n}\n.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n}\n.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {\n  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-menu-item .mat-icon-no-color,\n.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {\n  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-menu-item[disabled] {\n  cursor: default;\n  opacity: 0.38;\n}\n.mat-mdc-menu-item[disabled]::after {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.mat-mdc-menu-item:focus {\n  outline: 0;\n}\n.mat-mdc-menu-item .mat-icon {\n  flex-shrink: 0;\n  margin-right: var(--mat-menu-item-spacing, 12px);\n  height: var(--mat-menu-item-icon-size, 24px);\n  width: var(--mat-menu-item-icon-size, 24px);\n}\n[dir=rtl] .mat-mdc-menu-item {\n  text-align: right;\n}\n[dir=rtl] .mat-mdc-menu-item .mat-icon {\n  margin-right: 0;\n  margin-left: var(--mat-menu-item-spacing, 12px);\n}\n.mat-mdc-menu-item:not([disabled]):hover {\n  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {\n  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-item {\n    margin-top: 1px;\n  }\n}\n\n.mat-mdc-menu-submenu-icon {\n  width: var(--mat-menu-item-icon-size, 24px);\n  height: 10px;\n  fill: currentColor;\n  padding-left: var(--mat-menu-item-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon {\n  padding-right: var(--mat-menu-item-spacing, 12px);\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon polygon {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-submenu-icon {\n    fill: CanvasText;\n  }\n}\n\n.mat-mdc-menu-item .mat-mdc-menu-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating()"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu {\n  display: none;\n}\n\n.mat-mdc-menu-content {\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n}\n.mat-mdc-menu-content,\n.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1;\n  white-space: normal;\n  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));\n}\n\n@keyframes _mat-menu-enter {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-menu-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-menu-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  box-sizing: border-box;\n  outline: 0;\n  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));\n  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));\n  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  will-change: transform, opacity;\n}\n.mat-mdc-menu-panel.mat-menu-panel-exit-animation {\n  animation: _mat-menu-exit 100ms 25ms linear forwards;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {\n  animation: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating {\n  pointer-events: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {\n  display: none;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-panel {\n    outline: solid 1px;\n  }\n}\n.mat-mdc-menu-panel .mat-divider {\n  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));\n  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);\n  margin-top: var(--mat-menu-divider-top-spacing, 8px);\n}\n\n.mat-mdc-menu-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  text-decoration: none;\n  margin: 0;\n  min-height: 48px;\n  padding-left: var(--mat-menu-item-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-trailing-spacing, 12px);\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-menu-item::-moz-focus-inner {\n  border: 0;\n}\n[dir=rtl] .mat-mdc-menu-item {\n  padding-left: var(--mat-menu-item-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-leading-spacing, 12px);\n}\n.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n}\n.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {\n  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-menu-item .mat-icon-no-color,\n.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {\n  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-menu-item[disabled] {\n  cursor: default;\n  opacity: 0.38;\n}\n.mat-mdc-menu-item[disabled]::after {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.mat-mdc-menu-item:focus {\n  outline: 0;\n}\n.mat-mdc-menu-item .mat-icon {\n  flex-shrink: 0;\n  margin-right: var(--mat-menu-item-spacing, 12px);\n  height: var(--mat-menu-item-icon-size, 24px);\n  width: var(--mat-menu-item-icon-size, 24px);\n}\n[dir=rtl] .mat-mdc-menu-item {\n  text-align: right;\n}\n[dir=rtl] .mat-mdc-menu-item .mat-icon {\n  margin-right: 0;\n  margin-left: var(--mat-menu-item-spacing, 12px);\n}\n.mat-mdc-menu-item:not([disabled]):hover {\n  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {\n  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-item {\n    margin-top: 1px;\n  }\n}\n\n.mat-mdc-menu-submenu-icon {\n  width: var(--mat-menu-item-icon-size, 24px);\n  height: 10px;\n  fill: currentColor;\n  padding-left: var(--mat-menu-item-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon {\n  padding-right: var(--mat-menu-item-spacing, 12px);\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon polygon {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-submenu-icon {\n    fill: CanvasText;\n  }\n}\n\n.mat-mdc-menu-item .mat-mdc-menu-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n']
    }]
  }], () => [], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
  _canHaveBackdrop;
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  _parentMaterialMenu;
  _parentInnerPadding;
  _openedBy = void 0;
  get _menu() {
    return this._menuInternal;
  }
  set _menu(menu) {
    if (menu === this._menuInternal) {
      return;
    }
    this._menuInternal = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    } else {
      this._destroyMenu();
    }
    this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
  }
  _menuInternal = null;
  constructor(_canHaveBackdrop) {
    this._canHaveBackdrop = _canHaveBackdrop;
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
  }
  ngOnDestroy() {
    if (this._menu && this._ownsMenu(this._menu)) {
      PANELS_TO_TRIGGERS.delete(this._menu);
    }
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  get menuOpen() {
    return this._menuOpen;
  }
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
  }
  _closeMenu() {
    this._menu?.close.emit();
  }
  _openMenu(autoFocus) {
    if (this._triggerIsAriaDisabled()) {
      return;
    }
    const menu = this._menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger._closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    if (this._canHaveBackdrop) {
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
    } else {
      overlayConfig.hasBackdrop = menu.hasBackdrop ?? false;
    }
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
    menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    if (autoFocus) {
      menu.focusFirstItem(this._openedBy || "program");
    }
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        if (!PANELS_TO_TRIGGERS.has(menu)) {
          menu.lazyContent?.detach();
        }
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this._triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe((event) => {
        if (this._menu instanceof MatMenu) {
          this._menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this._triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  _menuClosingActions() {
    const outsideClicks = this._getOutsideClickStream(this._overlayRef);
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(outsideClicks, parentClose, hover, detachments);
  }
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  _triggerIsAriaDisabled() {
    return booleanAttribute(this._element.nativeElement.getAttribute("aria-disabled"));
  }
  static \u0275fac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTriggerBase
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTriggerBase, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
  _cleanupTouchstart;
  _hoverSubscription = Subscription.EMPTY;
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  menuData;
  restoreFocus = true;
  menuOpened = new EventEmitter();
  onMenuOpen = this.menuOpened;
  menuClosed = new EventEmitter();
  onMenuClose = this.menuClosed;
  constructor() {
    super(true);
    const renderer = inject(Renderer2);
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  triggersSubmenu() {
    return super._triggersSubmenu();
  }
  toggleMenu() {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }
  openMenu() {
    this._openMenu(true);
  }
  closeMenu() {
    this._closeMenu();
  }
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTouchstart();
    this._hoverSubscription.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._element;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.backdropClick();
  }
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
        if (active === this._menuItemInstance && !active.disabled && this._parentMaterialMenu?._panelAnimationState !== "void") {
          this._openedBy = "mouse";
          this._openMenu(false);
        }
      });
    }
  }
  static \u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu?.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
  _point = {
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    initialScrollX: 0,
    initialScrollY: 0
  };
  _triggerPressedControl = false;
  _rootNode;
  _document = inject(DOCUMENT);
  _viewportRuler = inject(ViewportRuler);
  _scrollDispatcher = inject(ScrollDispatcher);
  _scrollSubscription;
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  menuData;
  restoreFocus = true;
  disabled = false;
  menuOpened = new EventEmitter();
  menuClosed = new EventEmitter();
  constructor() {
    super(false);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._scrollSubscription?.unsubscribe();
  }
  _handleContextMenuEvent(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.menuOpen) {
        this._initializePoint(event.clientX, event.clientY);
        this._updatePosition();
      } else {
        this._openContextMenu(event);
      }
    }
  }
  _destroyMenu(reason) {
    super._destroyMenu(reason);
    this._scrollSubscription?.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._point;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
      if (event.type === "contextmenu") {
        return this._isWithinMenuOrTrigger(_getEventTarget(event));
      } else if (event.type === "auxclick") {
        if (index === 0) {
          return true;
        }
        this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
        return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
      }
      return this._triggerPressedControl && index === 0 && event.ctrlKey;
    }));
  }
  _isWithinMenuOrTrigger(target) {
    if (!target) {
      return false;
    }
    const element = this._element.nativeElement;
    if (target === element || element.contains(target)) {
      return true;
    }
    const overlay = this._overlayRef?.hostElement;
    return overlay === target || !!overlay?.contains(target);
  }
  _openContextMenu(event) {
    if (event.button === 2) {
      this._openedBy = "mouse";
    } else {
      this._openedBy = event.button === 0 ? "keyboard" : void 0;
    }
    this._initializePoint(event.clientX, event.clientY);
    this._triggerPressedControl = event.ctrlKey;
    super._openMenu(true);
    this._scrollSubscription?.unsubscribe();
    this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
      const position = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.y = point.initialY + (point.initialScrollY - position.top);
      point.x = point.initialX + (point.initialScrollX - position.left);
      this._updatePosition();
    });
  }
  _initializePoint(x, y) {
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    const point = this._point;
    point.x = point.initialX = x;
    point.y = point.initialY = y;
    point.initialScrollX = scrollPosition.left;
    point.initialScrollY = scrollPosition.top;
  }
  _updatePosition() {
    const overlayRef = this._overlayRef;
    if (overlayRef) {
      const positionStrategy = overlayRef.getConfig().positionStrategy;
      positionStrategy.setOrigin(this._point);
      overlayRef.updatePosition();
    }
  }
  static \u0275fac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatContextMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatContextMenuTrigger,
    selectors: [["", "matContextMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-context-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._handleContextMenuEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx.menuOpen ? ctx.menu?.panelId : null);
        \u0275\u0275classProp("mat-context-menu-trigger-disabled", ctx.disabled);
      }
    },
    inputs: {
      menu: [0, "matContextMenuTriggerFor", "menu"],
      menuData: [0, "matContextMenuTriggerData", "menuData"],
      restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
      disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      menuOpened: "menuOpened",
      menuClosed: "menuClosed"
    },
    exportAs: ["matContextMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[matContextMenuTriggerFor]",
      host: {
        "class": "mat-context-menu-trigger",
        "[class.mat-context-menu-trigger-disabled]": "disabled",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(contextmenu)": "_handleContextMenuEvent($event)"
      },
      exportAs: "matContextMenuTrigger"
    }]
  }], () => [], {
    menu: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerFor",
        required: true
      }]
    }],
    menuData: [{
      type: Input,
      args: ["matContextMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matContextMenuTriggerRestoreFocus"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerDisabled",
        transform: booleanAttribute
      }]
    }],
    menuOpened: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static \u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatMenuModule,
    imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
    exports: [BidiModule, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, OverlayModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      exports: [BidiModule, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_selection-model-chunk.mjs
var SelectionModel = class {
  _multiple;
  _emitChanges;
  compareWith;
  _selection = /* @__PURE__ */ new Set();
  _deselectedToEmit = [];
  _selectedToEmit = [];
  _selected = null;
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  changed = new Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  isEmpty() {
    return this._selection.size === 0;
  }
  hasValue() {
    return !this.isEmpty();
  }
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  isMultipleSelection() {
    return this._multiple;
  }
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}

// node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/select.mjs
var _c03 = ["trigger"];
var _c12 = ["panel"];
var _c22 = [[["mat-select-trigger"]], "*"];
var _c3 = ["mat-select-trigger", "*"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275conditionalCreate(1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12, 1);
    \u0275\u0275listener("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._handleKeydown($event));
    });
    \u0275\u0275projection(2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.panelClass);
    \u0275\u0275classProp("mat-select-panel-animations-enabled", !ctx_r0._animationsDisabled)("mat-primary", ctx_r0._parentFormField?.color === "primary")("mat-accent", ctx_r0._parentFormField?.color === "accent")("mat-warn", ctx_r0._parentFormField?.color === "warn")("mat-undefined", !ctx_r0._parentFormField?.color);
    \u0275\u0275attribute("id", ctx_r0.id + "-panel")("aria-multiselectable", ctx_r0.multiple)("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby());
  }
}
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
var MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
var MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
var MatSelectChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatSelect = class _MatSelect {
  _viewportRuler = inject(ViewportRuler);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _idGenerator = inject(_IdGenerator);
  _renderer = inject(Renderer2);
  _parentFormField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  ngControl = inject(NgControl, {
    self: true,
    optional: true
  });
  _liveAnnouncer = inject(LiveAnnouncer);
  _defaultOptions = inject(MAT_SELECT_CONFIG, {
    optional: true
  });
  _animationsDisabled = _animationsDisabled();
  _popoverLocation;
  _initialized = new Subject();
  _cleanupDetach;
  options;
  optionGroups;
  customTrigger;
  _positions = [{
    originX: "start",
    originY: "bottom",
    overlayX: "start",
    overlayY: "top"
  }, {
    originX: "end",
    originY: "bottom",
    overlayX: "end",
    overlayY: "top"
  }, {
    originX: "start",
    originY: "top",
    overlayX: "start",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }, {
    originX: "end",
    originY: "top",
    overlayX: "end",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }];
  _scrollOptionIntoView(index) {
    const option = this.options.toArray()[index];
    if (option) {
      const panel = this.panel.nativeElement;
      const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
      const element = option._getHostElement();
      if (index === 0 && labelCount === 1) {
        panel.scrollTop = 0;
      } else {
        panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
      }
    }
  }
  _positioningSettled() {
    this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
  }
  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
  _panelOpen = false;
  _compareWith = (o1, o2) => o1 === o2;
  _uid = this._idGenerator.getId("mat-select-");
  _triggerAriaLabelledBy = null;
  _previousControl;
  _destroy = new Subject();
  _errorStateTracker;
  stateChanges = new Subject();
  disableAutomaticLabeling = true;
  userAriaDescribedBy;
  _selectionModel;
  _keyManager;
  _preferredOverlayOrigin;
  _overlayWidth;
  _onChange = () => {
  };
  _onTouched = () => {
  };
  _valueId = this._idGenerator.getId("mat-select-value-");
  _scrollStrategy;
  _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
  get focused() {
    return this._focused || this._panelOpen;
  }
  _focused = false;
  controlType = "mat-select";
  trigger;
  panel;
  _overlayDir;
  panelClass;
  disabled = false;
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  tabIndex = 0;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  _placeholder;
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  _required;
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }
    this._multiple = value;
  }
  _multiple = false;
  disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }
    this._compareWith = fn;
    if (this._selectionModel) {
      this._initializeSelection();
    }
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  _value;
  ariaLabel = "";
  ariaLabelledby;
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  typeaheadDebounceInterval;
  sortComparator;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  _id;
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
  canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
  optionSelectionChanges = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
  });
  openedChange = new EventEmitter();
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  selectionChange = new EventEmitter();
  valueChange = new EventEmitter();
  constructor() {
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaultPopoverConfig = inject(OVERLAY_DEFAULT_CONFIG, {
      optional: true
    });
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    if (this._defaultOptions?.typeaheadDebounceInterval != null) {
      this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this._popoverLocation = defaultPopoverConfig?.usePopover === false ? null : "inline";
    this.id = this.id;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple);
    this.stateChanges.next();
    this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._changeDetectorRef.detectChanges();
      }
    });
  }
  ngAfterContentInit() {
    this._initialized.next();
    this._initialized.complete();
    this._initKeyManager();
    this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
      event.added.forEach((option) => option.select());
      event.removed.forEach((option) => option.deselect());
    });
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._initializeSelection();
    });
  }
  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();
    const ngControl = this.ngControl;
    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;
      if (newAriaLabelledby) {
        element.setAttribute("aria-labelledby", newAriaLabelledby);
      } else {
        element.removeAttribute("aria-labelledby");
      }
    }
    if (ngControl) {
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["userAriaDescribedBy"]) {
      this.stateChanges.next();
    }
    if (changes["typeaheadDebounceInterval"] && this._keyManager) {
      this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
    }
    if (changes["panelClass"] && this.panelClass instanceof Set) {
      this.panelClass = Array.from(this.panelClass);
    }
  }
  ngOnDestroy() {
    this._cleanupDetach?.();
    this._keyManager?.destroy();
    this._destroy.next();
    this._destroy.complete();
    this.stateChanges.complete();
  }
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  open() {
    if (!this._canOpen()) {
      return;
    }
    if (this._parentFormField) {
      this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
    }
    this._cleanupDetach?.();
    this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
    this._panelOpen = true;
    this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this._positioningSettled();
    });
    this._overlayDir.attachOverlay();
    this._keyManager.withHorizontalOrientation(null);
    this._highlightCorrectOption();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
    Promise.resolve().then(() => this.openedChange.emit(true));
  }
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._exitAndDetach();
      this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
      this._changeDetectorRef.markForCheck();
      this._onTouched();
      this.stateChanges.next();
      Promise.resolve().then(() => this.openedChange.emit(false));
    }
  }
  _exitAndDetach() {
    if (this._animationsDisabled || !this.panel) {
      this._detachOverlay();
      return;
    }
    this._cleanupDetach?.();
    this._cleanupDetach = () => {
      cleanupEvent();
      clearTimeout(exitFallbackTimer);
      this._cleanupDetach = void 0;
    };
    const panel = this.panel.nativeElement;
    const cleanupEvent = this._renderer.listen(panel, "animationend", (event) => {
      if (event.animationName === "_mat-select-exit") {
        this._cleanupDetach?.();
        this._detachOverlay();
      }
    });
    const exitFallbackTimer = setTimeout(() => {
      this._cleanupDetach?.();
      this._detachOverlay();
    }, 200);
    panel.classList.add("mat-select-panel-exit");
  }
  _detachOverlay() {
    this._overlayDir.detachOverlay();
    this._changeDetectorRef.markForCheck();
  }
  writeValue(value) {
    this._assignValue(value);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  get panelOpen() {
    return this._panelOpen;
  }
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  get triggerValue() {
    if (this.empty) {
      return "";
    }
    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
      if (this._isRtl()) {
        selectedOptions.reverse();
      }
      return selectedOptions.join(", ");
    }
    return this._selectionModel.selected[0].viewValue;
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _isRtl() {
    return this._dir ? this._dir.value === "rtl" : false;
  }
  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
    const isOpenKey = keyCode === ENTER || keyCode === SPACE;
    const manager = this._keyManager;
    if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault();
      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected;
      if (selectedOption && previouslySelectedOption !== selectedOption) {
        this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
      }
    }
  }
  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
    const isTyping = manager.isTyping();
    if (isArrowKey && event.altKey) {
      event.preventDefault();
      this.close();
    } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
      event.preventDefault();
      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
      this.options.forEach((option) => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);
      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }
  _handleOverlayKeydown(event) {
    if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
      event.preventDefault();
      this.close();
    }
  }
  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  _onBlur() {
    this._focused = false;
    this._keyManager?.cancelTypeahead();
    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }
  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }
  _initializeSelection() {
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }
      this._setSelectionByValue(this._value);
      this.stateChanges.next();
    });
  }
  _setSelectionByValue(value) {
    this.options.forEach((option) => option.setInactiveStyles());
    this._selectionModel.clear();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }
      value.forEach((currentValue) => this._selectOptionByValue(currentValue));
      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value);
      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        this._keyManager.updateActiveItem(-1);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  _selectOptionByValue(value) {
    const correspondingOption = this.options.find((option) => {
      if (this._selectionModel.isSelected(option)) {
        return false;
      }
      try {
        return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }
    return correspondingOption;
  }
  _assignValue(newValue) {
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }
      this._value = newValue;
      return true;
    }
    return false;
  }
  _skipPredicate = (option) => {
    if (this.panelOpen) {
      return false;
    }
    return option.disabled;
  };
  _getOverlayWidth(preferredOrigin) {
    if (this.panelWidth === "auto") {
      const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
      return refToMeasure.nativeElement.getBoundingClientRect().width;
    }
    return this.panelWidth === null ? "" : this.panelWidth;
  }
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  _initKeyManager() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
    this._keyManager.tabOut.subscribe(() => {
      if (this.panelOpen) {
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
        this.focus();
        this.close();
      }
    });
    this._keyManager.change.subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  _resetOptions() {
    const changedOrDestroyed = merge(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
      this._onSelect(event.source, event.isUserInput);
      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    });
    merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this.stateChanges.next();
    });
  }
  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);
    if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
      option.deselect();
      this._selectionModel.clear();
      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }
      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }
      if (this.multiple) {
        this._sortValues();
        if (isUserInput) {
          this.focus();
        }
      }
    }
    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }
    this.stateChanges.next();
  }
  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  _propagateChanges(fallbackValue) {
    let valueToEmit;
    if (this.multiple) {
      valueToEmit = this.selected.map((option) => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this.selectionChange.emit(this._getChangeEvent(valueToEmit));
    this._changeDetectorRef.markForCheck();
  }
  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        let firstEnabledOptionIndex = -1;
        for (let index = 0; index < this.options.length; index++) {
          const option = this.options.get(index);
          if (!option.disabled) {
            firstEnabledOptionIndex = index;
            break;
          }
        }
        this._keyManager.setActiveItem(firstEnabledOptionIndex);
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
  }
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId() || null;
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }
    return null;
  }
  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    let value = this._parentFormField?.getLabelId() || "";
    if (this.ariaLabelledby) {
      value += " " + this.ariaLabelledby;
    }
    if (!value) {
      value = this._valueId;
    }
    return value;
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  onContainerClick(event) {
    const target = _getEventTarget(event);
    if (target && (target.tagName === "MAT-OPTION" || target.classList.contains("cdk-overlay-backdrop") || target.closest(".mat-mdc-select-panel"))) {
      return;
    }
    this.focus();
    this.open();
  }
  get shouldLabelFloat() {
    return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
  }
  static \u0275fac = function MatSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelect)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSelect,
    selectors: [["mat-select"]],
    contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SELECT_TRIGGER, 5)(dirIndex, MatOption, 5)(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customTrigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5)(_c12, 5)(CdkConnectedOverlay, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._overlayDir = _t.first);
      }
    },
    hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
    hostVars: 21,
    hostBindings: function MatSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatSelect_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatSelect_focus_HostBindingHandler() {
          return ctx._onFocus();
        })("blur", function MatSelect_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
        \u0275\u0275classProp("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple)("mat-select-open", ctx.panelOpen);
      }
    },
    inputs: {
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      panelClass: "panelClass",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      placeholder: "placeholder",
      required: [2, "required", "required", booleanAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", booleanAttribute],
      compareWith: "compareWith",
      value: "value",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      errorStateMatcher: "errorStateMatcher",
      typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute],
      sortComparator: "sortComparator",
      id: "id",
      panelWidth: "panelWidth",
      canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute]
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    },
    exportAs: ["matSelect"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatSelect
    }, {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatSelect
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 11,
    vars: 10,
    consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayUsePopover"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 1, "mat-mdc-select-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "keydown"]],
    template: function MatSelect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c22);
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275listener("click", function MatSelect_Template_div_click_0_listener() {
          return ctx.open();
        });
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, MatSelect_Conditional_4_Template, 2, 1, "span", 4)(5, MatSelect_Conditional_5_Template, 3, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(10, MatSelect_ng_template_10_Template, 3, 16, "ng-template", 10);
        \u0275\u0275listener("detach", function MatSelect_Template_ng_template_detach_10_listener() {
          return ctx.close();
        })("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
          return ctx.close();
        })("overlayKeydown", function MatSelect_Template_ng_template_overlayKeydown_10_listener($event) {
          return ctx._handleOverlayKeydown($event);
        });
      }
      if (rf & 2) {
        const fallbackOverlayOrigin_r3 = \u0275\u0275reference(1);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("id", ctx._valueId);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.empty ? 4 : 5);
        \u0275\u0275advance(6);
        \u0275\u0275property("cdkConnectedOverlayDisableClose", true)("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || fallbackOverlayOrigin_r3)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", true)("cdkConnectedOverlayUsePopover", ctx._popoverLocation);
      }
    },
    dependencies: [CdkOverlayOrigin, CdkConnectedOverlay],
    styles: ['@keyframes _mat-select-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-select-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-select {\n  display: inline-block;\n  width: 100%;\n  outline: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\ndiv.mat-mdc-select-panel {\n  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n}\n\n.mat-mdc-select-disabled {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-select-disabled .mat-mdc-select-placeholder {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-select-trigger {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n}\n.mat-mdc-select-disabled .mat-mdc-select-trigger {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n.mat-mdc-select-value {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mat-mdc-select-value-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-mdc-select-arrow-wrapper {\n  height: 24px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {\n  transform: none;\n}\n\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,\n.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {\n  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));\n}\n\n.mat-mdc-select-arrow {\n  width: 10px;\n  height: 5px;\n  position: relative;\n  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {\n  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {\n  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-select-open .mat-mdc-select-arrow {\n  transform: rotate(180deg);\n}\n.mat-form-field-animations-enabled .mat-mdc-select-arrow {\n  transition: transform 80ms linear;\n}\n.mat-mdc-select-arrow svg {\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media (forced-colors: active) {\n  .mat-mdc-select-arrow svg {\n    fill: CanvasText;\n  }\n  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {\n    fill: GrayText;\n  }\n}\n\ndiv.mat-mdc-select-panel {\n  width: 100%;\n  max-height: 275px;\n  outline: 0;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  transform-origin: top center;\n  border-radius: 0 0 4px 4px;\n  position: relative;\n  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));\n}\n.mat-mdc-select-panel-above div.mat-mdc-select-panel {\n  border-radius: 4px 4px 0 0;\n  transform-origin: bottom center;\n}\n@media (forced-colors: active) {\n  div.mat-mdc-select-panel {\n    outline: solid 1px;\n  }\n}\n\n.mat-select-panel-animations-enabled {\n  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-select-panel-animations-enabled.mat-select-panel-exit {\n  animation: _mat-select-exit 100ms linear;\n}\n\n.mat-mdc-select-placeholder {\n  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {\n  transition: none;\n}\n.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n  display: block;\n}\n\n.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {\n  cursor: pointer;\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {\n  max-width: calc(100% - 18px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 24px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {\n  max-width: calc(100% - 24px);\n}\n\n.mat-mdc-select-min-line:empty::before {\n  content: " ";\n  white-space: pre;\n  width: 1px;\n  display: inline-block;\n  visibility: hidden;\n}\n\n.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {\n  transform: var(--mat-select-arrow-transform, translateY(-8px));\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelect, [{
    type: Component,
    args: [{
      selector: "mat-select",
      exportAs: "matSelect",
      encapsulation: ViewEncapsulation.None,
      host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "[class.mat-select-open]": "panelOpen",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      imports: [CdkOverlayOrigin, CdkConnectedOverlay],
      template: `<div
  cdk-overlay-origin
  class="mat-mdc-select-trigger"
  (click)="open()"
  #fallbackOverlayOrigin="cdkOverlayOrigin"
  #trigger
>
  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  [cdkConnectedOverlayUsePopover]="_popoverLocation"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <!-- \`mat-undefined\` is weird, but we were using it internally -->
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open"
    [class]="panelClass"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_parentFormField?.color === 'primary'"
    [class.mat-accent]="_parentFormField?.color === 'accent'"
    [class.mat-warn]="_parentFormField?.color === 'warn'"
    [class.mat-undefined]="!_parentFormField?.color"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ['@keyframes _mat-select-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-select-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-select {\n  display: inline-block;\n  width: 100%;\n  outline: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\ndiv.mat-mdc-select-panel {\n  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n}\n\n.mat-mdc-select-disabled {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-select-disabled .mat-mdc-select-placeholder {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-select-trigger {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n}\n.mat-mdc-select-disabled .mat-mdc-select-trigger {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n.mat-mdc-select-value {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mat-mdc-select-value-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-mdc-select-arrow-wrapper {\n  height: 24px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {\n  transform: none;\n}\n\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,\n.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {\n  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));\n}\n\n.mat-mdc-select-arrow {\n  width: 10px;\n  height: 5px;\n  position: relative;\n  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {\n  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {\n  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-select-open .mat-mdc-select-arrow {\n  transform: rotate(180deg);\n}\n.mat-form-field-animations-enabled .mat-mdc-select-arrow {\n  transition: transform 80ms linear;\n}\n.mat-mdc-select-arrow svg {\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media (forced-colors: active) {\n  .mat-mdc-select-arrow svg {\n    fill: CanvasText;\n  }\n  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {\n    fill: GrayText;\n  }\n}\n\ndiv.mat-mdc-select-panel {\n  width: 100%;\n  max-height: 275px;\n  outline: 0;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  transform-origin: top center;\n  border-radius: 0 0 4px 4px;\n  position: relative;\n  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));\n}\n.mat-mdc-select-panel-above div.mat-mdc-select-panel {\n  border-radius: 4px 4px 0 0;\n  transform-origin: bottom center;\n}\n@media (forced-colors: active) {\n  div.mat-mdc-select-panel {\n    outline: solid 1px;\n  }\n}\n\n.mat-select-panel-animations-enabled {\n  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-select-panel-animations-enabled.mat-select-panel-exit {\n  animation: _mat-select-exit 100ms linear;\n}\n\n.mat-mdc-select-placeholder {\n  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {\n  transition: none;\n}\n.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n  display: block;\n}\n\n.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {\n  cursor: pointer;\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {\n  max-width: calc(100% - 18px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 24px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {\n  max-width: calc(100% - 24px);\n}\n\n.mat-mdc-select-min-line:empty::before {\n  content: " ";\n  white-space: pre;\n  width: 1px;\n  display: inline-block;\n  visibility: hidden;\n}\n\n.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {\n  transform: var(--mat-select-arrow-transform, translateY(-8px));\n}\n']
    }]
  }], () => [], {
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    panelClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableOptionCentering: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    errorStateMatcher: [{
      type: Input
    }],
    typeaheadDebounceInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortComparator: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    panelWidth: [{
      type: Input
    }],
    canSelectNullableOptions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var MatSelectTrigger = class _MatSelectTrigger {
  static \u0275fac = function MatSelectTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSelectTrigger,
    selectors: [["mat-select-trigger"]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SELECT_TRIGGER,
      useExisting: _MatSelectTrigger
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectTrigger, [{
    type: Directive,
    args: [{
      selector: "mat-select-trigger",
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();
var MatSelectModule = class _MatSelectModule {
  static \u0275fac = function MatSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSelectModule,
    imports: [OverlayModule, MatOptionModule, MatSelect, MatSelectTrigger],
    exports: [BidiModule, CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayModule, MatOptionModule, BidiModule, CdkScrollableModule, MatFormFieldModule, MatOptionModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatSelect, MatSelectTrigger],
      exports: [BidiModule, CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c04 = ["input"];
var _c13 = ["label"];
var _c23 = ["*"];
var checkboxDefaults = {
  color: "accent",
  clickAction: "check-indeterminate",
  disabledInteractive: false
};
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: () => checkboxDefaults
});
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
  source;
  checked;
};
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  ariaLabel = "";
  ariaLabelledby = null;
  ariaDescribedby;
  ariaExpanded;
  ariaControls;
  ariaOwns;
  _uniqueId;
  id;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  required = false;
  labelPosition = "after";
  name = null;
  change = new EventEmitter();
  indeterminateChange = new EventEmitter();
  value;
  disableRipple = false;
  _inputElement;
  _labelElement;
  tabIndex;
  color;
  disabledInteractive;
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || checkboxDefaults;
    this.color = this._options.color || checkboxDefaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static \u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5)(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatCheckbox),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c23,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], ["aria-hidden", "true", 1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], ["aria-hidden", "true", 1, "mdc-checkbox__ripple"], ["aria-hidden", "true", 1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", "aria-hidden", "true", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
          return ctx._preventBubblingFromLabel($event);
        });
        \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
          return ctx._onTouchTargetClick();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          return ctx._onBlur();
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          return ctx._onInputClick();
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          return ctx._onInteractionEvent($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 7);
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 9);
        \u0275\u0275element(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "label", 13, 2);
        \u0275\u0275projection(14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const checkbox_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
        \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        \u0275\u0275advance(7);
        \u0275\u0275property("matRippleTrigger", checkbox_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox:hover > .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-checkbox-state-layer-size, 40px);\n  height: var(--mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));\n  background-color: transparent;\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-checkbox label {\n  cursor: pointer;\n}\n.mat-mdc-checkbox .mat-internal-form-field {\n  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n  cursor: default;\n  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n    color: GrayText;\n  }\n}\n.mat-mdc-checkbox label:empty {\n  display: none;\n}\n.mat-mdc-checkbox .mdc-checkbox__ripple {\n  opacity: 0;\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple,\n.mdc-checkbox__ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),\n.mdc-checkbox__ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-mdc-checkbox-ripple .mat-ripple-element {\n  opacity: 0.1;\n}\n\n.mat-mdc-checkbox-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-checkbox-touch-target-size, 48px);\n  width: var(--mat-checkbox-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-checkbox-touch-target-display, block);\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {\n  border-radius: 50%;\n}\n\n.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div
      class="mat-mdc-checkbox-touch-target"
      (click)="_onTouchTargetClick()"
      aria-hidden="true"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple" aria-hidden="true"></div>
    <div class="mdc-checkbox__background" aria-hidden="true">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator"
      mat-ripple
      aria-hidden="true"
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox:hover > .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-checkbox-state-layer-size, 40px);\n  height: var(--mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));\n  background-color: transparent;\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-checkbox label {\n  cursor: pointer;\n}\n.mat-mdc-checkbox .mat-internal-form-field {\n  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n  cursor: default;\n  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n    color: GrayText;\n  }\n}\n.mat-mdc-checkbox label:empty {\n  display: none;\n}\n.mat-mdc-checkbox .mdc-checkbox__ripple {\n  opacity: 0;\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple,\n.mdc-checkbox__ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),\n.mdc-checkbox__ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-mdc-checkbox-ripple .mat-ripple-element {\n  opacity: 0.1;\n}\n\n.mat-mdc-checkbox-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-checkbox-touch-target-size, 48px);\n  width: var(--mat-checkbox-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-checkbox-touch-target-display, block);\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {\n  border-radius: 50%;\n}\n\n.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static \u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox],
    exports: [MatCheckbox, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCheckbox, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox],
      exports: [MatCheckbox, BidiModule]
    }]
  }], null, null);
})();

// libs/components/src/lib/settings-toggle.component.ts
var _c05 = ["*"];
function SettingsToggleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 3);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function SettingsToggleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "div", 8)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.value())("bg-info", ctx_r0.value())("border-info!", ctx_r0.value());
    \u0275\u0275advance();
    \u0275\u0275classProp("left-1", !ctx_r0.value())("left-5", ctx_r0.value())("bg-base-400", !ctx_r0.value())("bg-info-light", ctx_r0.value());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.value() ? "done" : "remove");
  }
}
function SettingsToggleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 9);
    \u0275\u0275listener("ngModelChange", function SettingsToggleComponent_Conditional_8_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.value());
    \u0275\u0275control();
  }
}
var SettingsToggleComponent = class _SettingsToggleComponent {
  constructor() {
    this.toggle = input(
      void 0,
      ...ngDevMode ? [{ debugName: "toggle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input(
      void 0,
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.info = input(
      void 0,
      ...ngDevMode ? [{ debugName: "info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value.set(new_value);
    if (this._onChange)
      this._onChange(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  static {
    this.\u0275fac = function SettingsToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { toggle: [1, "toggle"], label: [1, "label"], info: [1, "info"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _SettingsToggleComponent),
        multi: true
      }
    ])], ngContentSelectors: _c05, decls: 9, vars: 8, consts: [["type", "button", "matRipple", "", 1, "hover:bg-base-200", "relative", "flex", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-1", "pl-2", 3, "click"], [1, "z-10", "flex", "flex-1", "items-center", "space-x-2", "p-2", "text-left"], [1, "w-full"], [3, "matTooltip"], [1, "bg-info", "absolute", "inset-0", "z-0", "m-0!", "opacity-10"], [1, "px-2"], [1, "pointer-events-none", 3, "ngModel"], ["toggle", "", 1, "border-base-400", "relative", "h-8", "w-12", "rounded-full", "border-2"], [1, "absolute", "top-1/2", "flex", "h-6", "w-6", "-translate-x-0.5", "-translate-y-1/2", "items-center", "justify-center", "rounded-full", "text-black", "shadow-sm"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
          return ctx.setValue(!ctx.value());
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, SettingsToggleComponent_Conditional_5_Template, 2, 1, "icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 1, 0, "div", 4);
        \u0275\u0275conditionalCreate(7, SettingsToggleComponent_Conditional_7_Template, 5, 15, "div", 5)(8, SettingsToggleComponent_Conditional_8_Template, 1, 1, "mat-checkbox", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-base-300", !ctx.value())("border-info", ctx.value());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.info() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggle() ? 7 : 8);
      }
    }, dependencies: [MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n[toggle][_ngcontent-%COMP%] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsToggleComponent, [{
    type: Component,
    args: [{ selector: "settings-toggle", template: `
        <button
            type="button"
            matRipple
            class="hover:bg-base-200 relative flex flex-1 items-center space-x-2 overflow-hidden rounded-sm border py-1 pr-1 pl-2"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            (click)="setValue(!value())"
        >
            <div class="z-10 flex flex-1 items-center space-x-2 p-2 text-left">
                <div class="w-full">
                    {{ label() }}
                    <ng-content></ng-content>
                </div>
                @if (info()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            @if (value()) {
                <div class="bg-info absolute inset-0 z-0 m-0! opacity-10"></div>
            }
            @if (toggle()) {
                <div class="px-2">
                    <div
                        toggle
                        class="border-base-400 relative h-8 w-12 rounded-full border-2"
                        [class.bg-base-200]="!value()"
                        [class.bg-info]="value()"
                        [class.border-info!]="value()"
                    >
                        <div
                            class="absolute top-1/2 flex h-6 w-6 -translate-x-0.5 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-sm"
                            [class.left-1]="!value()"
                            [class.left-5]="value()"
                            [class.bg-base-400]="!value()"
                            [class.bg-info-light]="value()"
                        >
                            <icon>{{ value() ? 'done' : 'remove' }}</icon>
                        </div>
                    </div>
                </div>
            } @else {
                <mat-checkbox
                    [ngModel]="value()"
                    (ngModelChange)="setValue($event)"
                    class="pointer-events-none"
                ></mat-checkbox>
            }
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SettingsToggleComponent),
        multi: true
      }
    ], imports: [MatCheckboxModule, FormsModule, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;09d472dfc67150cf01347a580874515fc3cc343b61a90041f2b167ad15a01cf4;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/settings-toggle.component.ts */\n:host {\n  display: flex;\n}\n[toggle] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */\n"] }]
  }], null, { toggle: [{ type: Input, args: [{ isSignal: true, alias: "toggle", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "libs/components/src/lib/settings-toggle.component.ts", lineNumber: 85 });
})();

// libs/components/src/lib/authenticated-image.pipe.ts
var IMAGE_STORE = /* @__PURE__ */ new Map();
var SESSION_IMAGE_CACHE_NAME = "PlaceOS.image-cache-v1";
var SESSION_IMAGE_CACHE_KEYS = "PlaceOS.image-cache-keys-v1";
var LOADING_STORE = /* @__PURE__ */ new Map();
var _session_image_keys = null;
function getSessionImageKeys() {
  if (_session_image_keys)
    return _session_image_keys;
  if (typeof sessionStorage === "undefined")
    return [];
  try {
    const stored_value = sessionStorage.getItem(SESSION_IMAGE_CACHE_KEYS);
    _session_image_keys = stored_value ? JSON.parse(stored_value) : [];
    return _session_image_keys;
  } catch {
    return [];
  }
}
function setSessionImageKeys(keys) {
  _session_image_keys = Array.from(new Set(keys));
  if (typeof sessionStorage === "undefined")
    return;
  try {
    sessionStorage.setItem(SESSION_IMAGE_CACHE_KEYS, JSON.stringify(_session_image_keys));
  } catch {
  }
}
async function getSessionImageCache() {
  if (typeof caches === "undefined")
    return null;
  try {
    return await caches.open(SESSION_IMAGE_CACHE_NAME);
  } catch {
    return null;
  }
}
async function getSessionCachedResponse(source) {
  if (!getSessionImageKeys().includes(source))
    return null;
  const cache = await getSessionImageCache();
  if (!cache)
    return null;
  try {
    return await cache.match(source) || null;
  } catch {
    return null;
  }
}
async function storeSessionCachedResponse(source, response) {
  const cache = await getSessionImageCache();
  if (!cache)
    return;
  try {
    await cache.put(source, response);
    setSessionImageKeys([...getSessionImageKeys(), source]);
  } catch {
  }
}
function setAuthCookie(cookie_path) {
  const tkn = X();
  document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Ye()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=${cookie_path};samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
}
function authHeaders() {
  const tkn = X();
  return tkn === "x-api-key" ? { "X-API-Key": Ye() } : { Authorization: `Bearer ${tkn}` };
}
async function responseToObjectUrl(source, response) {
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  IMAGE_STORE.set(source, url);
  return url;
}
async function loadAuthenticatedImage(source, cookie_path) {
  return _loadAuthenticatedImage(source, () => {
    setAuthCookie(cookie_path);
    return fetch(source);
  });
}
async function loadAuthenticatedImageWithHeader(source) {
  return _loadAuthenticatedImage(source, () => fetch(source, { headers: authHeaders() }));
}
async function _loadAuthenticatedImage(source, request) {
  if (IMAGE_STORE.has(source))
    return IMAGE_STORE.get(source);
  const cached_response = await getSessionCachedResponse(source);
  if (cached_response) {
    return responseToObjectUrl(source, cached_response);
  }
  const response = await request();
  if (!response || !response.ok) {
    throw new Error(`Failed to fetch image: ${response?.status}`);
  }
  void storeSessionCachedResponse(source, response.clone());
  return responseToObjectUrl(source, response);
}
var AuthenticatedImagePipe = class _AuthenticatedImagePipe {
  constructor() {
    this._subscriptions = /* @__PURE__ */ new Set();
  }
  ngOnDestroy() {
    this._subscriptions.clear();
  }
  transform(source) {
    if (!source || typeof source !== "string")
      return "";
    if (!source.includes("/api/engine/v2/uploads"))
      return source;
    if (IMAGE_STORE.has(source))
      return IMAGE_STORE.get(source);
    if (LOADING_STORE.has(source))
      return "";
    this._loadImage(source);
    return "";
  }
  async _loadImage(source) {
    if (!Rt()) {
      setTimeout(() => LOADING_STORE.delete(source), 300);
      return;
    }
    const loadPromise = this._fetchImage(source);
    LOADING_STORE.set(source, loadPromise);
    this._subscriptions.add(source);
    try {
      await loadPromise;
    } catch (error) {
      console.info("Failed to load image:", source, error);
    } finally {
      LOADING_STORE.delete(source);
      this._subscriptions.delete(source);
    }
  }
  async _fetchImage(source) {
    return loadAuthenticatedImage(source, "/api/engine/v2/uploads");
  }
  static {
    this.\u0275fac = function AuthenticatedImagePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticatedImagePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "authenticatedImage,authImage", type: _AuthenticatedImagePipe, pure: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImagePipe, [{
    type: Pipe,
    args: [{
      name: "authenticatedImage,authImage",
      pure: false
      // Impure pipe to handle async loading
    }]
  }], null, null);
})();

// libs/components/src/lib/authenticated-image.directive.ts
var AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this.source = input(
      void 0,
      ...ngDevMode ? [{ debugName: "source" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnChanges(changes) {
    if (changes.source && this.source())
      this._loadImage();
  }
  async _loadImage() {
    const source = this.source();
    if (typeof source !== "string")
      return;
    if (!this._element || !Rt()) {
      return this.timeout("load", () => this._loadImage(), 300);
    }
    if (!this._isLocalUrl(source)) {
      this._element.nativeElement.src = source;
      return;
    }
    if (IMAGE_STORE.has(source)) {
      this._element.nativeElement.src = IMAGE_STORE.get(source);
      return;
    }
    const is_api = source.includes("/api/engine/v2/uploads") || source.includes("/api/engine/v2/signage");
    try {
      this._element.nativeElement.src = is_api ? await loadAuthenticatedImage(source, this._cookiePath(source)) : await loadAuthenticatedImageWithHeader(source);
    } catch (error) {
      this._element.nativeElement.dispatchEvent(new ErrorEvent("error", { error }));
    }
  }
  /** Whether the source resolves to the current origin */
  _isLocalUrl(source) {
    try {
      return new URL(source, location.href).origin === location.origin;
    } catch {
      return false;
    }
  }
  /** Cookie path scoped to the resource so the auth cookie is sent on fetch */
  _cookiePath(source) {
    return source.includes("/api/engine/v2/uploads") ? "/api/engine/v2/uploads" : "/api/engine/v2/signage";
  }
  static {
    this.\u0275fac = function AuthenticatedImageDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticatedImageDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuthenticatedImageDirective, selectors: [["img", "auth", ""], ["video", "auth", ""], ["audio", "auth", ""]], inputs: { source: [1, "source"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[auth], video[auth], audio[auth]"
    }]
  }], () => [], { source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }] });
})();

// libs/components/src/lib/fullscreen-modal-shell.component.ts
var _c06 = ["*"];
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenModalShellComponent, selectors: [["fullscreen-modal-shell"], ["", "fs-modal-shell", ""]], inputs: { loading: [1, "loading"], heading: [1, "heading"], confirm_text: [1, "confirm_text"], confirm_hotkey: [1, "confirm_hotkey"], confirm_disabled: [1, "confirm_disabled"], close: [1, "close"], hide_confirm: [1, "hide_confirm"], hide_close: [1, "hide_close"], full_width: [1, "full_width"] }, outputs: { confirm: "confirm", closed: "closed" }, ngContentSelectors: _c06, decls: 10, vars: 14, consts: [["cdkScrollable", "", 1, "bg-base-200", "fixed", "inset-0", "flex", "flex-col", "items-center", "overflow-auto", "px-2"], [1, "border-base-300", "bg-base-100", "fixed", "top-0", "mx-auto", "h-screen", "max-w-full", "border-x"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "flex", "items-center", "text-xl", "font-medium", "capitalize", 3, "innerHTML"], [1, "z-0", "mx-auto", "h-1/2", "w-full", "flex-1", "space-y-8", "p-2"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4", "p-12"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2", 3, "max-w-156"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "h-24", "w-full"], [3, "diameter"], [1, "text-center", "opacity-50"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], [1, "border-base-300", "bg-base-100", "text-base-content", "rounded", "border", "px-2", "py-1", "text-xs", "leading-none", "shadow-sm"]], template: function FullscreenModalShellComponent_Template(rf, ctx) {
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

// node_modules/@angular/material/fesm2022/radio.mjs
var _c07 = ["input"];
var _c14 = ["formField"];
var _c24 = ["*"];
var MatRadioChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: () => ({
    color: "accent",
    disabledInteractive: false
  })
});
var MatRadioGroup = class _MatRadioGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _value = null;
  _name = inject(_IdGenerator).getId("mat-radio-group-");
  _selected = null;
  _isInitialized = false;
  _labelPosition = "after";
  _disabled = false;
  _required = false;
  _buttonChanges;
  _controlValueAccessorChangeFn = () => {
  };
  onTouched = () => {
  };
  change = new EventEmitter();
  _radios;
  color;
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  _disabledInteractive = false;
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static \u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRadioGroup,
    selectors: [["mat-radio-group"]],
    contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
      }
    },
    hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
    inputs: {
      color: "color",
      name: "name",
      labelPosition: "labelPosition",
      value: "value",
      selected: "selected",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
      provide: MAT_RADIO_GROUP,
      useExisting: _MatRadioGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      }
    }]
  }], null, {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  _elementRef = inject(ElementRef);
  _changeDetector = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _radioDispatcher = inject(UniqueSelectionDispatcher);
  _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _uniqueId = inject(_IdGenerator).getId("mat-radio-");
  _cleanupClick;
  id = this._uniqueId;
  name;
  ariaLabel;
  ariaLabelledby;
  ariaDescribedby;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  _labelPosition;
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    if (value !== this._required) {
      this._changeDetector.markForCheck();
    }
    this._required = value;
  }
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  change = new EventEmitter();
  radioGroup;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  _checked = false;
  _disabled = false;
  _required = false;
  _value = null;
  _removeUniqueSelectionListener = () => {
  };
  _previousTabIndex;
  _inputElement;
  _rippleTrigger;
  _noopAnimations = _animationsDisabled();
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const radioGroup = inject(MAT_RADIO_GROUP, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.radioGroup = radioGroup;
    this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  _onInputClick = (event) => {
    if (this.disabled && this.disabledInteractive) {
      event.preventDefault();
    }
  };
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input2 = this._inputElement?.nativeElement;
      if (input2) {
        input2.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input2) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input2) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static \u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRadioButton,
    selectors: [["mat-radio-button"]],
    viewQuery: function MatRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5)(_c14, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-radio-button"],
    hostVars: 19,
    hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
          return ctx._inputElement.nativeElement.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      id: "id",
      name: "name",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      value: "value",
      labelPosition: "labelPosition",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioButton"],
    ngContentSelectors: _c24,
    decls: 13,
    vars: 17,
    consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], ["aria-hidden", "true", 1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", "aria-invalid", "false", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], ["aria-hidden", "true", 1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", "aria-hidden", "true", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
    template: function MatRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
        \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
          return ctx._onTouchTargetClick($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 5, 1);
        \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
          return ctx._onInputInteraction($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "div", 7)(8, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(5);
        \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mat-mdc-radio-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-radio-button .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {\n  opacity: 0.04;\n  transform: scale(1);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-radio-button .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-radio-button .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-radio-button .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {\n  pointer-events: auto;\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-radio-button label {\n  cursor: pointer;\n}\n.mat-mdc-radio-button label:empty {\n  display: none;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {\n  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mat-internal-form-field {\n  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-radio-button .mdc-radio--disabled + label {\n  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-radio-button .mat-radio-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {\n  opacity: 0.14;\n}\n.mat-mdc-radio-button .mat-radio-ripple::before {\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-radio-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-radio-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-radio-touch-target-size, 48px);\n  width: var(--mat-radio-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-radio-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-radio-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple, _MatInternalFormField],
      template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div\n      class="mat-mdc-radio-touch-target"\n      (click)="_onTouchTargetClick($event)"\n      aria-hidden="true"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background" aria-hidden="true">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true"\n         aria-hidden="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
      styles: ['.mat-mdc-radio-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-radio-button .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {\n  opacity: 0.04;\n  transform: scale(1);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-radio-button .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-radio-button .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-radio-button .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {\n  pointer-events: auto;\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-radio-button label {\n  cursor: pointer;\n}\n.mat-mdc-radio-button label:empty {\n  display: none;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {\n  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mat-internal-form-field {\n  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-radio-button .mdc-radio--disabled + label {\n  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-radio-button .mat-radio-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {\n  opacity: 0.14;\n}\n.mat-mdc-radio-button .mat-radio-ripple::before {\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-radio-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-radio-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-radio-touch-target-size, 48px);\n  width: var(--mat-radio-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-radio-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-radio-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static \u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatRadioModule,
    imports: [MatRippleModule, MatRadioGroup, MatRadioButton],
    exports: [BidiModule, MatRadioGroup, MatRadioButton]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, MatRadioButton, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [BidiModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
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
var _c08 = (a0, a1, a2) => ({ file: a0, is_public: a1, permissions: a2 });
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
        \u0275\u0275property("mat-dialog-close", \u0275\u0275pureFunction3(3, _c08, ctx.file, ctx.is_public(), ctx.permissions()));
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
var _c09 = ["image_list"];
var _c15 = ["file_input"];
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
      const list = this.upload_list();
      const id_list = this.upload_ids();
      for (const id of id_list) {
        const item = list.find((_) => _?.id === id);
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
    const list = value || [];
    this.list.set(list);
    if (this._onChange)
      this._onChange(list);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.list.set(value || []);
  }
  async _updateUploadHistory() {
    const list = this.upload_ids();
    if (list.length === 0)
      return;
    const global_list = this._uploads.upload_list();
    const new_list = global_list.filter((_) => list.find((i) => i === _?.id));
    const done_list = new_list.filter((file) => file.progress >= 100);
    this.upload_list.set(new_list);
    done_list.forEach((i) => {
      console.log("ID:", __spreadValues({}, i));
      this.upload_map[i?.id] = i.upload?.id || i?.id;
      delete i.upload;
    });
    if (done_list.length >= list.length)
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
        \u0275\u0275viewQuerySignal(ctx._list_el, _c09, 5)(ctx._file_input, _c15, 5);
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

// libs/components/src/lib/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", ctx_r0.initials)("source", ctx_r0.user().photo);
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.user().photo ? 1 : 2);
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  constructor() {
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_valid = computed(
      () => {
        const user = this.user();
        if (!user)
          return false;
        const name = (user.name || "").trim();
        const email = (user.email || "").trim();
        if (name.startsWith("<empty>") || email.startsWith("<empty>")) {
          return false;
        }
        return !!(name || email || user.first_name || user.last_name);
      },
      ...ngDevMode ? [{ debugName: "is_valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get initials() {
    const user = this.user();
    if (!user)
      return "NA";
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`;
    }
    let name = (user.name || "").replace(/<[^>]*>/g, " ").trim();
    if (!name)
      name = (user.email || user.name || "").split("@")[0];
    const parts = name.replace(/[()[\]\-+=\\/@<>]+/gi, " ").split(/\s+/).filter(Boolean);
    if (parts.length === 0)
      return "NA";
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0].slice(0, 2);
  }
  static {
    this.\u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAvatarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "border-base-100", "bg-base-200", "flex", "h-[2.5em]", "w-[2.5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2"], ["initials", "", 1, "text-base-content", "uppercase", "opacity-60"], ["auth", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", "object-center", 3, "alt", "source"]], template: function UserAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.is_valid() ? 0 : -1);
      }
    }, dependencies: [AuthenticatedImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (is_valid()) {
            <div
                class="border-base-100 bg-base-200 flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="text-base-content uppercase opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="flex h-full w-full items-center justify-center object-cover object-center"
                        [alt]="initials"
                        [source]="user().photo"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "libs/components/src/lib/user-avatar.component.ts", lineNumber: 34 });
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
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.email);
      required(p.description);
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

// libs/form-fields/src/lib/time-field.component.ts
var _c010 = ["*"];
var _forTrack0 = ($index, $item) => $item.id;
function TimeFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.active_time(), ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.force_time(), ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TimeFieldComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(ctx_r0.force_time().toString()));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_Conditional_10_Conditional_6_Template, 3, 5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_Conditional_10_Conditional_7_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.force_time());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.force_time(), ctx_r0.time_format()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time() === ctx_r0.force_time() ? 7 : -1);
  }
}
function TimeFieldComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r4.date, ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TimeFieldComponent_For_12_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_For_12_Conditional_6_Template, 3, 5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_For_12_Conditional_7_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275attribute("data-time", option_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 6, option_r4.date, ctx_r0.time_format()), " ", ctx_r0.extra_info_fn()(option_r4.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time() === option_r4.date ? 7 : -1);
  }
}
function TimeFieldComponent_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "No time options to select");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function toHourOfDay(value) {
  if (value === null || value === void 0 || value === "")
    return null;
  const hour = Number(value);
  return Number.isFinite(hour) ? hour : null;
}
var TimeFieldComponent = class _TimeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.step = input(
      15,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_past_times = input(
      true,
      ...ngDevMode ? [{ debugName: "no_past_times" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = input(
      false,
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "force_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_error = input(
      void 0,
      ...ngDevMode ? [{ debugName: "no_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extra_info_fn = input(
      (t) => "",
      ...ngDevMode ? [{ debugName: "extra_info_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.from = input(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.range = input(
      void 0,
      ...ngDevMode ? [{ debugName: "range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._range = computed(
      () => {
        const range = this.range();
        if (!range)
          return void 0;
        const start = toHourOfDay(range.start);
        const end = toHourOfDay(range.end);
        if (start === null || end === null || end <= start)
          return void 0;
        return { start, end };
      },
      ...ngDevMode ? [{ debugName: "_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = input(
      0,
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      (/* @__PURE__ */ new Date()).valueOf(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = signal(
      format(/* @__PURE__ */ new Date(), "HH:mm"),
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._time_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "_time_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_select = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "active_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_options = signal(
      false,
      ...ngDevMode ? [{ debugName: "no_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._menu_trigger = viewChild(
      MatMenuTrigger,
      ...ngDevMode ? [{ debugName: "_menu_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.tz = computed(
      () => {
        const tz = this.timezone();
        if (!tz)
          return "";
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? "" : tz_offset;
      },
      ...ngDevMode ? [{ debugName: "tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.show_select.set(true);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
    this._updateNoOptions();
    this.timeout("hide", () => this.show_select.set(false));
    const tz = this.timezone() || void 0;
    this.active_time.set(this._time_options().find((_) => _.id === formatTimeInTimezone(this.date(), tz))?.date || this.active_time());
  }
  ngOnChanges(changes) {
    if (changes.no_past_times || changes.step || changes.from || changes.range || changes.min_duration) {
      this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
      this._updateNoOptions();
    }
  }
  ngAfterViewInit() {
    const trigger = this._menu_trigger();
    if (trigger) {
      this.subscription("menu_opened", trigger.menuOpened.subscribe(() => {
        this._scrollToSelectedTime();
      }));
    }
  }
  /** Scroll the menu to the selected or nearest time option */
  _scrollToSelectedTime() {
    requestAnimationFrame(() => {
      const trigger = this._menu_trigger();
      if (!trigger?.menu)
        return;
      const panel = document.querySelector(".mat-mdc-menu-panel");
      if (!panel)
        return;
      const tz = this.timezone() || void 0;
      const target_time = this.time() || formatTimeInTimezone(/* @__PURE__ */ new Date(), tz);
      let target_element = panel.querySelector(`[data-time="${target_time}"]`);
      if (!target_element && this._time_options().length) {
        const current_minutes = this._timeToMinutes(target_time);
        let closest_option = this._time_options()[0];
        let closest_diff = Infinity;
        for (const option of this._time_options()) {
          const option_minutes = this._timeToMinutes(option.id);
          const diff = Math.abs(option_minutes - current_minutes);
          if (diff < closest_diff) {
            closest_diff = diff;
            closest_option = option;
          }
        }
        target_element = panel.querySelector(`[data-time="${closest_option.id}"]`);
      }
      if (target_element) {
        if (typeof target_element.scrollIntoView !== "function") {
          return;
        }
        target_element.scrollIntoView({
          block: "center",
          behavior: "instant"
        });
      }
    });
  }
  /** Convert time string (HH:mm) to minutes since midnight */
  _timeToMinutes(time_str) {
    const [hours, minutes] = time_str.split(":").map(Number);
    return hours * 60 + minutes;
  }
  /** Available time blocks for the selected date */
  time_options() {
    const tz = this.timezone() || void 0;
    const time = (this.time() || "00:00").split(":");
    const date_value = setTimeInTimezone(this.date(), +time[0], +time[1], tz);
    const { minutes } = getTimeInTimezone(date_value, tz);
    const time_str = formatTimeInTimezone(date_value, tz);
    const time_options = [...this._time_options()];
    if (minutes % this.step() !== 0 && this._isWithinRange(date_value) && !time_options.find((t) => t.id === time_str)) {
      time_options.push({
        date: date_value,
        id: time_str
      });
      time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
    }
    return time_options;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.time.set(new_value);
    const tz = this.timezone() || void 0;
    if (this._onChange) {
      const time2 = (this.time() || "00:00").split(":");
      const date_value2 = setTimeInTimezone(this.date(), +time2[0], +time2[1], tz);
      markUserDateChange();
      this._onChange(date_value2);
    }
    const time = this.force_time() || this.time();
    const time_parts = (typeof time === "string" ? time : formatTimeInTimezone(time, tz)).split(":");
    const date_value = setTimeInTimezone(this.date(), +time_parts[0], +time_parts[1], tz);
    this.active_time.set(this._time_options().find((_) => _.id === (typeof time === "string" ? time : formatTimeInTimezone(time, tz)))?.date || date_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date.set(value || this.date());
    const tz = this.timezone() || void 0;
    let date = startOfMinute(this.date());
    date = roundToNearestMinutes(date, { nearestTo: 5 });
    this.time.set(formatTimeInTimezone(date, tz));
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
    this._updateNoOptions();
    const force = this.force_time();
    const time_id = force ? formatTimeInTimezone(force, tz) : this.time();
    this.active_time.set(this._time_options().find((_) => _.id === time_id)?.date || date.valueOf());
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times() || disabled, this.step()));
    this._updateNoOptions();
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /** Update whether the field should show as disabled due to no options */
  _updateNoOptions() {
    this.no_options.set(!this.disabled() && (!this._time_options() || this._time_options().length === 0) && !this.force_time());
  }
  /**
   * Generate a list of time options for the given date
   * @param datestamp Date to generate options for
   * @param show_past Whether past times should be options
   */
  generateAvailableTimes(datestamp, show_past, step = 15) {
    const min_date = show_past ? this.from() : Math.max(this.from(), Date.now());
    const blocks = [];
    const time_range = this._range();
    const tz = this.timezone() || void 0;
    const day_start = tz ? startOfDayInTimezone(datestamp, tz) : startOfDay(datestamp).valueOf();
    const day_end = tz ? endOfDayInTimezone(datestamp, tz) : endOfDay(datestamp).valueOf();
    const min_dur = this.min_duration() || 0;
    const start_minutes = time_range ? time_range.start * 60 : void 0;
    const end_minutes = time_range ? time_range.end * 60 : void 0;
    const effective_end = end_minutes != null && min_dur > 0 ? end_minutes - min_dur : end_minutes;
    const range_start = Math.max(day_start, min_date, start_minutes != null ? day_start + start_minutes * 60 * 1e3 : day_start);
    const range_end = Math.min(day_end, effective_end != null ? day_start + effective_end * 60 * 1e3 : day_end);
    if (range_start > range_end) {
      return blocks;
    }
    let date = this._roundUpToStep(range_start, step);
    const end = this._roundDownToStep(range_end, step);
    while (!isAfter(date, end)) {
      blocks.push({
        date: date.valueOf(),
        id: formatTimeInTimezone(date, tz)
      });
      date = addMinutes(date, step);
    }
    return blocks;
  }
  _isWithinRange(date) {
    if (isBefore(date, this.from())) {
      return false;
    }
    const time_range = this._range();
    if (!time_range) {
      return true;
    }
    const start_minutes = time_range.start * 60;
    const end_minutes = time_range.end * 60;
    const min_dur = this.min_duration() || 0;
    const effective_end = min_dur > 0 ? end_minutes - min_dur : end_minutes;
    const tz = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(date, tz);
    const mins = hours * 60 + minutes;
    if (mins < start_minutes || mins > effective_end) {
      return false;
    }
    return true;
  }
  _roundUpToStep(datestamp, step) {
    let date = roundToNearestMinutes(datestamp, { nearestTo: step });
    if (isBefore(date, datestamp)) {
      date = addMinutes(date, step);
    }
    return startOfMinute(date);
  }
  _roundDownToStep(datestamp, step) {
    let date = roundToNearestMinutes(datestamp, { nearestTo: step });
    if (isAfter(date, datestamp)) {
      date = addMinutes(date, -step);
    }
    return startOfMinute(date);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275TimeFieldComponent_BaseFactory;
      return function TimeFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275TimeFieldComponent_BaseFactory || (\u0275TimeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeFieldComponent)))(__ngFactoryType__ || _TimeFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeFieldComponent, selectors: [["a-time-field"], ["time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._menu_trigger, MatMenuTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { step: [1, "step"], disabled: [1, "disabled"], no_past_times: [1, "no_past_times"], use_24hr: [1, "use_24hr"], force_time: [1, "force_time"], no_error: [1, "no_error"], extra_info_fn: [1, "extra_info_fn"], from: [1, "from"], range: [1, "range"], min_duration: [1, "min_duration"], timezone: [1, "timezone"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _TimeFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c010, decls: 15, vars: 12, consts: [["menu", "matMenu"], ["type", "button", "time-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-60", "min-w-[18rem]"], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "value"], ["mat-menu-item", "", "disabled", ""], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click", "value"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, ""], [1, "text-xs", "opacity-30"], [1, "ml-2", "text-2xl"]], template: function TimeFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, TimeFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "icon", 5);
        \u0275\u0275text(7, "arrow_drop_down");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-menu", 6, 0);
        \u0275\u0275conditionalCreate(10, TimeFieldComponent_Conditional_10_Template, 8, 7, "button", 7);
        \u0275\u0275repeaterCreate(11, TimeFieldComponent_For_12_Template, 8, 9, "button", 7, _forTrack0, false, TimeFieldComponent_ForEmpty_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, TimeFieldComponent_Conditional_14_Template, 2, 0, "mat-error");
      }
      if (rf & 2) {
        const menu_r5 = \u0275\u0275reference(9);
        \u0275\u0275classProp("opacity-30", ctx.disabled() || ctx.no_options());
        \u0275\u0275property("disabled", ctx.disabled() || ctx.no_options())("matMenuTriggerFor", menu_r5);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 9, ctx.active_time(), ctx.time_format()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 5 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.force_time() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.time_options());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.no_error() ? 14 : -1);
      }
    }, dependencies: [CommonModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, IconComponent, DatePipe], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFieldComponent, [{
    type: Component,
    args: [{ selector: "a-time-field,time-field", template: `
        <button
            type="button"
            time-field
            matRipple
            class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
            [disabled]="disabled() || no_options()"
            [class.opacity-30]="disabled() || no_options()"
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{ active_time() | date: time_format() }}
                </div>
                @if (timezone() && tz()) {
                    <div class="truncate text-xs opacity-30">
                        {{
                            active_time() | date: time_format() + ' (z)' : tz()
                        }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            @if (force_time()) {
                <button
                    type="button"
                    mat-menu-item
                    [value]="force_time()"
                    class="text-left"
                    (click)="setValue(force_time().toString())"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ force_time() | date: time_format() }}
                            </div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        force_time()
                                            | date
                                                : time_format() + ' (z)'
                                                : tz()
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time() === force_time()) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
            @for (option of time_options(); track option.id) {
                <button
                    type="button"
                    mat-menu-item
                    [attr.data-time]="option.id"
                    [value]="option.id"
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ option.date | date: time_format() }}
                                {{ extra_info_fn()(option.date) }}
                            </div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        option.date
                                            | date
                                                : time_format() + ' (z)'
                                                : tz()
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time() === option.date) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            } @empty {
                <div mat-menu-item disabled>No time options to select</div>
            }
        </mat-menu>
        @if (!no_error()) {
            <mat-error><ng-content /></mat-error>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeFieldComponent),
        multi: true
      }
    ], imports: [CommonModule, MatMenuModule, MatFormFieldModule, IconComponent], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/time-field.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], no_past_times: [{ type: Input, args: [{ isSignal: true, alias: "no_past_times", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], force_time: [{ type: Input, args: [{ isSignal: true, alias: "force_time", required: false }] }], no_error: [{ type: Input, args: [{ isSignal: true, alias: "no_error", required: false }] }], extra_info_fn: [{ type: Input, args: [{ isSignal: true, alias: "extra_info_fn", required: false }] }], from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], min_duration: [{ type: Input, args: [{ isSignal: true, alias: "min_duration", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], _menu_trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeFieldComponent, { className: "TimeFieldComponent", filePath: "libs/form-fields/src/lib/time-field.component.ts", lineNumber: 169 });
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
    const options = [
      { id: "wfo", name: i18n("COMMON.WORK_OFFICE"), icon: "business" },
      { id: "wfh", name: i18n("COMMON.WORK_HOME"), icon: "home" },
      { id: "aol", name: i18n("COMMON.WORK_LEAVE"), icon: "event_busy" }
    ];
    this.options.set(options);
    this.option.set(options[0].id);
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
  setEndTime(block, day, time) {
    setTimeout(() => {
      block.end_time = this.fromTime(time);
      this.cleanupBlocks(this.settings()[day]);
      this.settings.update((settings) => [...settings]);
    }, 50);
  }
  setStartTime(block, day, time) {
    setTimeout(() => {
      block.start_time = this.fromTime(time);
      this.cleanupBlocks(this.settings()[day]);
      this.settings.update((settings) => [...settings]);
    }, 50);
  }
  cleanupBlocks(pref) {
    if (!pref?.blocks?.length)
      return;
    for (let i = 0; i < pref.blocks.length; i++) {
      const block = pref.blocks[i];
      if (i > 0) {
        if (block.start_time < pref.blocks[i - 1].end_time) {
          block.start_time = pref.blocks[i - 1].end_time;
        }
      }
      if (block.end_time <= block.start_time) {
        block.end_time = block.start_time + 1;
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
      const user = await Na("current");
      await Da(user.id, __spreadProps(__spreadValues({}, user), {
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
var _c011 = ["knob"];
var _c16 = ["valueIndicatorContainer"];
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
var _c25 = ["trackActive"];
var _c32 = ["*"];
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
        \u0275\u0275viewQuery(MatRipple, 5)(_c011, 5)(_c16, 5);
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
        \u0275\u0275viewQuery(_c25, 5)(MAT_SLIDER_VISUAL_THUMB, 5);
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
    ngContentSelectors: _c32,
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
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
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
var _forTrack02 = ($index, $item) => $item.id;
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
        \u0275\u0275repeaterCreate(10, LanguageSelectComponent_For_11_Template, 8, 14, "button", 5, _forTrack02);
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
    await Da(user.id, __spreadProps(__spreadValues({}, user), {
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
    Qr();
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
var _c012 = ["*"];
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
    }, ngContentSelectors: _c012, decls: 4, vars: 1, consts: [["icon", "", "matRipple", "", "avatar", "", "type", "button", "name", "user-controls", 1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", 3, "click"], [1, "fixed", "inset-0", "z-9999", "overflow-hidden"], [1, "text-2xl"], ["type", "button", "aria-label", "Close user controls", 1, "absolute", "inset-0", "bg-black", "transition-opacity", "duration-200", 3, "click"], [1, "absolute", "inset-y-0", "right-0", "flex", "max-w-full"], [1, "bg-base-100", "relative", "h-full", "w-80", "max-w-[100vw]", "overflow-auto", "pt-[calc(env(safe-area-inset-top)+1rem)]", "pb-[env(safe-area-inset-bottom)]", "pr-[env(safe-area-inset-right)]", "shadow-xl", "transition-transform", "duration-200", "ease-out"], [3, "sidebar"], ["icon", "", "default", "", "matRipple", "", "type", "button", 1, "absolute", "top-[calc(env(safe-area-inset-top)+0.5rem)]", "right-[calc(env(safe-area-inset-right)+0.5rem)]", 3, "click"]], template: function UserControlsSidebarComponent_Template(rf, ctx) {
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

// libs/form-fields/src/lib/rich-text-input.component.ts
var _c013 = ["editor"];
function RichTextInputComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertImage());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Conditional_47_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertAttachment());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "attachment");
    \u0275\u0275elementEnd()();
  }
}
function RichTextInputComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "select", 5);
    \u0275\u0275listener("change", function RichTextInputComponent_Conditional_2_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFontFace($event));
    });
    \u0275\u0275elementStart(2, "option", 6);
    \u0275\u0275text(3, "Font");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 7);
    \u0275\u0275text(5, "Arial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 8);
    \u0275\u0275text(7, "Helvetica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 9);
    \u0275\u0275text(9, "Georgia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 10);
    \u0275\u0275text(11, "Times New Roman");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 11);
    \u0275\u0275listener("change", function RichTextInputComponent_Conditional_2_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFontSize($event));
    });
    \u0275\u0275elementStart(13, "option", 12);
    \u0275\u0275text(14, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 13);
    \u0275\u0275text(16, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 14);
    \u0275\u0275text(18, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 15);
    \u0275\u0275text(20, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 16);
    \u0275\u0275text(22, "18");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 17);
    \u0275\u0275text(24, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 18);
    \u0275\u0275text(26, "32");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 19);
    \u0275\u0275text(28, "48");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBold());
    });
    \u0275\u0275elementStart(30, "icon");
    \u0275\u0275text(31, "format_bold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItalic());
    });
    \u0275\u0275elementStart(33, "icon");
    \u0275\u0275text(34, "format_italic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUnderline());
    });
    \u0275\u0275elementStart(36, "icon");
    \u0275\u0275text(37, "format_underlined");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeUnorderedList());
    });
    \u0275\u0275elementStart(39, "icon");
    \u0275\u0275text(40, "format_list_bulleted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeOrderedList());
    });
    \u0275\u0275elementStart(42, "icon");
    \u0275\u0275text(43, "format_list_numbered");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.insertLink());
    });
    \u0275\u0275elementStart(45, "icon");
    \u0275\u0275text(46, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, RichTextInputComponent_Conditional_2_Conditional_47_Template, 6, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(29);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().bold)("text-info", ctx_r1.toolbar_state().bold);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().italic)("text-info", ctx_r1.toolbar_state().italic);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().underline)("text-info", ctx_r1.toolbar_state().underline);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().unordered_list)("text-info", ctx_r1.toolbar_state().unordered_list);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().ordered_list)("text-info", ctx_r1.toolbar_state().ordered_list);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().link)("text-info", ctx_r1.toolbar_state().link);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.images_allowed() ? 47 : -1);
  }
}
var RichTextInputComponent = class _RichTextInputComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._uploads = inject(UploadsService);
    this._dom_sanitizer = inject(DomSanitizer);
    this._ng_zone = inject(NgZone);
    this.placeholder = input(
      "",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.readonly = input(
      false,
      ...ngDevMode ? [{ debugName: "readonly" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.images_allowed = input(
      false,
      ...ngDevMode ? [{ debugName: "images_allowed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._editor_el = viewChild(
      "editor",
      ...ngDevMode ? [{ debugName: "_editor_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._onChange = () => void 0;
    this._onTouch = () => void 0;
    this.toolbar_state = signal(
      {
        bold: false,
        italic: false,
        underline: false,
        unordered_list: false,
        ordered_list: false,
        link: false
      },
      ...ngDevMode ? [{ debugName: "toolbar_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this._syncValue = () => {
      if (!this._editor)
        return;
      this.setValue(this._editor.getHTML());
    };
    this._handleTouched = () => {
      if (!this._editor)
        return;
      this._onTouch();
    };
    this._refreshToolbarState = () => {
      if (!this._editor)
        return;
      this._ng_zone.run(() => {
        this.toolbar_state.set({
          bold: this._editor.hasFormat("B"),
          italic: this._editor.hasFormat("I"),
          underline: this._editor.hasFormat("U"),
          unordered_list: this._editor.hasFormat("UL"),
          ordered_list: this._editor.hasFormat("OL"),
          link: this._editor.hasFormat("A")
        });
      });
    };
  }
  ngOnChanges(changes) {
    if (changes.placeholder) {
      this.timeout("init", () => this._initialiseEditor());
    }
    if (changes.readonly && this._editor) {
      this._setReadonlyState();
    }
  }
  ngAfterViewInit() {
    this.timeout("init", () => this._initialiseEditor());
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.timeout("write", () => {
      if (this._editor) {
        this._editor.setHTML(value || "");
        this._setPlaceholder();
      } else
        this.timeout("write", () => this.writeValue(value));
    });
  }
  toggleBold() {
    this._toggleFormat("B", () => this._editor.removeBold(), () => this._editor.bold());
  }
  toggleItalic() {
    this._toggleFormat("I", () => this._editor.removeItalic(), () => this._editor.italic());
  }
  toggleUnderline() {
    this._toggleFormat("U", () => this._editor.removeUnderline(), () => this._editor.underline());
  }
  makeUnorderedList() {
    this._toggleFormat("UL", () => this._editor.removeList(), () => this._editor.makeUnorderedList());
  }
  makeOrderedList() {
    this._toggleFormat("OL", () => this._editor.removeList(), () => this._editor.makeOrderedList());
  }
  insertLink() {
    if (!this._editor)
      return;
    if (this._editor.hasFormat("A")) {
      this._editor.removeLink();
      this._syncValue();
      this._refreshToolbarState();
      return;
    }
    const link_url = prompt("Enter URL");
    if (!link_url)
      return;
    this._editor.makeLink(link_url);
    this._syncValue();
    this._refreshToolbarState();
  }
  setFontFace(event) {
    if (!this._editor)
      return;
    const font_face = event.target.value;
    if (!font_face)
      return;
    this._editor.setFontFace(font_face === "default" ? "inherit" : font_face);
    this._syncValue();
  }
  setFontSize(event) {
    if (!this._editor)
      return;
    const font_size = event.target.value;
    if (!font_size)
      return;
    this._editor.setFontSize(font_size);
    this._syncValue();
  }
  insertImage() {
    this._embedFile(true);
  }
  insertAttachment() {
    this._embedFile(false);
  }
  async _initialiseEditor() {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el) {
      return this.timeout("init", () => this._initialiseEditor());
    }
    const { default: Squire } = await import("./squire-VCCEXQGR.js");
    if (this._editor) {
      this._editor.destroy();
    }
    _editor_el.innerHTML = "";
    this._editor = new Squire(_editor_el, {
      blockTag: "div",
      sanitizeToDOMFragment: (html) => {
        const sanitized_html = this._dom_sanitizer.sanitize(SecurityContext.HTML, html || "") || "";
        const template = document.createElement("template");
        template.innerHTML = sanitized_html;
        return template.content.cloneNode(true);
      }
    });
    this._editor.addEventListener("input", this._syncValue);
    this._editor.addEventListener("blur", this._handleTouched);
    this._editor.addEventListener("cursor", this._refreshToolbarState);
    this._editor.addEventListener("select", this._refreshToolbarState);
    this._editor.addEventListener("pathChange", this._refreshToolbarState);
    this._setReadonlyState();
    this._setPlaceholder();
    this._refreshToolbarState();
  }
  _embedFile(images_only) {
    if (!this._editor)
      return;
    const file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    if (images_only)
      file_input.setAttribute("accept", "image/*");
    file_input.click();
    file_input.onchange = () => {
      const file = file_input.files?.[0];
      if (!file)
        return;
      this._uploads.uploadFile(file, true).then((upload_id) => {
        if (!upload_id)
          return;
        const link = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
        this._setAuth();
        setTimeout(() => {
          this._insertUploadedFile(link, file, images_only);
          this._syncValue();
        }, 100);
      }).catch((error) => {
        if (error instanceof UploadCancelledError)
          return;
        notifyError(`Failed to upload ${file.name}: ${error?.message || "Unknown error"}`);
      });
    };
  }
  _setReadonlyState() {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el)
      return;
    _editor_el.setAttribute("contenteditable", `${!this.readonly()}`);
  }
  _setPlaceholder() {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el)
      return;
    _editor_el.setAttribute("data-placeholder", this.placeholder() || "");
  }
  _toggleFormat(format2, disable_action, enable_action) {
    if (!this._editor)
      return;
    if (this._editor.hasFormat(format2))
      disable_action();
    else
      enable_action();
    this._syncValue();
    this._refreshToolbarState();
  }
  _insertUploadedFile(link, file, images_only) {
    const is_image = file.type.startsWith("image/");
    if (images_only || is_image) {
      this._editor.insertHTML(`<img src="${link}" alt="${file.name}" />`);
      return;
    }
    this._editor.insertHTML(`<a href="${link}" target="_blank">${file.name}</a>`);
  }
  _setAuth() {
    const tkn = X();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Ye()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RichTextInputComponent_BaseFactory;
      return function RichTextInputComponent_Factory(__ngFactoryType__) {
        return (\u0275RichTextInputComponent_BaseFactory || (\u0275RichTextInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RichTextInputComponent)))(__ngFactoryType__ || _RichTextInputComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RichTextInputComponent, selectors: [["rich-text-input"]], viewQuery: function RichTextInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._editor_el, _c013, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { placeholder: [1, "placeholder"], readonly: [1, "readonly"], images_allowed: [1, "images_allowed"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _RichTextInputComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 5, vars: 1, consts: [["container", ""], ["editor", ""], [1, "w-full"], [1, "border-base-300", "bg-base-100", "flex", "flex-wrap", "items-center", "gap-1", "rounded-t", "border", "p-2"], [1, "squire-editor"], [1, "border-base-300", "bg-base-100", "rounded", "border", "p-2", "text-sm", 3, "change"], ["value", "default"], ["value", "Arial"], ["value", "Helvetica"], ["value", "Georgia"], ["value", "Times New Roman"], [1, "border-base-300", "bg-base-100", "min-w-24", "rounded", "border", "p-2", "text-sm", 3, "change"], ["value", ""], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "24px"], ["value", "32px"], ["value", "48px"], ["icon", "", "type", "button", 1, "border-base-300", "rounded", "border", "px-2", "py-1", "text-sm", 3, "click"]], template: function RichTextInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275conditionalCreate(2, RichTextInputComponent_Conditional_2_Template, 48, 25, "div", 3);
        \u0275\u0275element(3, "div", 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.readonly() ? 2 : -1);
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n[_nghost-%COMP%]     .squire-editor {\n  border-radius: 0.25rem;\n  border: 1px solid var(--base-300);\n  padding: 0.5rem;\n  min-height: 8rem;\n  width: 100%;\n  outline: none;\n}\n[_nghost-%COMP%]     .squire-editor:empty::before {\n  content: attr(data-placeholder);\n  color: var(--base-content);\n  opacity: 0.5;\n}\n[_nghost-%COMP%]     .squire-editor ul {\n  list-style-type: disc;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n[_nghost-%COMP%]     .squire-editor ol {\n  list-style-type: decimal;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n[_nghost-%COMP%]     .squire-editor li {\n  margin: 0.125rem 0;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RichTextInputComponent, [{
    type: Component,
    args: [{ selector: "rich-text-input", template: `
        <div #container class="w-full">
            @if (!readonly()) {
                <div
                    class="border-base-300 bg-base-100 flex flex-wrap items-center gap-1 rounded-t border p-2"
                >
                    <select
                        class="border-base-300 bg-base-100 rounded border p-2 text-sm"
                        (change)="setFontFace($event)"
                    >
                        <option value="default">Font</option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <select
                        class="border-base-300 bg-base-100 min-w-24 rounded border p-2 text-sm"
                        (change)="setFontSize($event)"
                    >
                        <option value="">Size</option>
                        <option value="12px">12</option>
                        <option value="14px">14</option>
                        <option value="16px">16</option>
                        <option value="18px">18</option>
                        <option value="24px">24</option>
                        <option value="32px">32</option>
                        <option value="48px">48</option>
                    </select>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().bold"
                        [class.text-info]="toolbar_state().bold"
                        (click)="toggleBold()"
                    >
                        <icon>format_bold</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().italic"
                        [class.text-info]="toolbar_state().italic"
                        (click)="toggleItalic()"
                    >
                        <icon>format_italic</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().underline"
                        [class.text-info]="toolbar_state().underline"
                        (click)="toggleUnderline()"
                    >
                        <icon>format_underlined</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().unordered_list"
                        [class.text-info]="toolbar_state().unordered_list"
                        (click)="makeUnorderedList()"
                    >
                        <icon>format_list_bulleted</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().ordered_list"
                        [class.text-info]="toolbar_state().ordered_list"
                        (click)="makeOrderedList()"
                    >
                        <icon>format_list_numbered</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().link"
                        [class.text-info]="toolbar_state().link"
                        (click)="insertLink()"
                    >
                        <icon>link</icon>
                    </button>
                    @if (images_allowed()) {
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertImage()"
                        >
                            <icon>image</icon>
                        </button>
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertAttachment()"
                        >
                            <icon>attachment</icon>
                        </button>
                    }
                </div>
            }
            <div #editor class="squire-editor"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => RichTextInputComponent),
        multi: true
      }
    ], imports: [IconComponent], styles: ["/* angular:styles/component:css;6dc2ae98694a2e57d7771f92bf30507b7e159114e70a4aebfdbd049028218be6;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/rich-text-input.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n:host ::ng-deep .squire-editor {\n  border-radius: 0.25rem;\n  border: 1px solid var(--base-300);\n  padding: 0.5rem;\n  min-height: 8rem;\n  width: 100%;\n  outline: none;\n}\n:host ::ng-deep .squire-editor:empty::before {\n  content: attr(data-placeholder);\n  color: var(--base-content);\n  opacity: 0.5;\n}\n:host ::ng-deep .squire-editor ul {\n  list-style-type: disc;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n:host ::ng-deep .squire-editor ol {\n  list-style-type: decimal;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n:host ::ng-deep .squire-editor li {\n  margin: 0.125rem 0;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */\n"] }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], images_allowed: [{ type: Input, args: [{ isSignal: true, alias: "images_allowed", required: false }] }], _editor_el: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RichTextInputComponent, { className: "RichTextInputComponent", filePath: "libs/form-fields/src/lib/rich-text-input.component.ts", lineNumber: 191 });
})();

// apps/concierge/src/app/ui/app-sidebar.component.ts
var _forTrack03 = ($index, $item) => $item.id + "" + $index;
function ApplicationSidebarComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1)(1, "icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", link_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.name);
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const link_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBlock(link_r1.id || link_r1._id));
    });
    \u0275\u0275elementStart(1, "icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 8);
    \u0275\u0275text(6, "arrow_drop_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r1.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r1.name, " ");
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "icon", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", child_r4.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r4.name);
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275repeaterCreate(1, ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_For_2_Template, 4, 2, "a", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@show", !ctx_r2.isBlockCollapsed(link_r1.id || link_r1._id) ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(link_r1.children);
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApplicationSidebarComponent_For_2_Conditional_1_Conditional_0_Template, 7, 2, "button", 4);
    \u0275\u0275conditionalCreate(1, ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_Template, 3, 1, "section", 5);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(link_r1.children?.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.children?.length ? 1 : -1);
  }
}
function ApplicationSidebarComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApplicationSidebarComponent_For_2_Conditional_0_Template, 5, 3, "a", 1)(1, ApplicationSidebarComponent_For_2_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275conditional(!link_r1.children ? 0 : 1);
  }
}
var ApplicationSidebarComponent = class _ApplicationSidebarComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._element_ref = inject(ElementRef);
    this.show_block = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_block" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.links = [];
    this.filtered_links = signal(
      [],
      ...ngDevMode ? [{ debugName: "filtered_links" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const building = this._org.active_building();
      if (!building)
        return;
      this.timeout("update_links", () => this.updateFilteredLinks(), 500);
    });
  }
  get feature_list() {
    return this._settings.get("app.features") || [];
  }
  get feature_groups() {
    return this._settings.get("app.feature_groups") || {};
  }
  get is_admin() {
    const groups = currentUser().groups || [];
    const admin_group = this._settings.get("app.admin_group") || "admin";
    return groups.includes(admin_group) || groups.includes("placeos_admin") || groups.includes("placeos_support");
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.links = [
      {
        name: i18n("APP.CONCIERGE.MENU_BOOKINGS"),
        icon: "add_circle",
        children: [
          {
            id: "spaces",
            name: i18n("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),
            route: ["/book/rooms"]
          },
          {
            id: "desks",
            name: i18n("APP.CONCIERGE.MENU_DESK_BOOKINGS"),
            route: ["/book/desks/events"]
          },
          {
            id: "parking",
            name: i18n("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),
            route: ["/book/parking/events"]
          },
          {
            id: "parking-bookings",
            name: i18n("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),
            route: ["/book/parking/events"]
          },
          {
            id: "lockers",
            name: i18n("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),
            route: ["/book/lockers/events"]
          },
          {
            id: "assets",
            name: i18n("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),
            route: ["/book/assets/list/requests"]
          },
          {
            id: "catering",
            name: i18n("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),
            route: ["/book/catering/orders"]
          },
          {
            id: "visitors",
            name: i18n("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),
            route: ["/book/visitors"]
          },
          {
            id: "visitor-rules",
            name: i18n("APP.CONCIERGE.MENU_VISITOR_RULES"),
            route: ["/book/visitors/rules"]
          }
        ]
      },
      {
        id: "facilities",
        name: i18n("APP.CONCIERGE.MENU_MANAGEMENT"),
        icon: "place",
        children: [
          // {
          //     id: 'facilities',
          //     name: 'Building Map',
          //     route: ['/facilities'],
          // },
          {
            id: "zones",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_ZONES"),
            route: ["/zone-management"]
          },
          {
            id: "spaces",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_ROOMS"),
            route: ["/room-management"]
          },
          {
            id: "desks",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_DESKS"),
            route: ["/book/desks/manage"]
          },
          {
            id: "parking",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_PARKING"),
            route: ["/book/parking/manage"]
          },
          {
            id: "parking-manage",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_PARKING"),
            route: ["/book/parking/manage"]
          },
          {
            id: "lockers",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),
            route: ["/book/lockers/manage"]
          },
          {
            id: "catering",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_CATERING"),
            route: ["/book/catering/menu"]
          },
          {
            id: "points",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_POINTS"),
            route: ["/points-management"]
          },
          {
            id: "emergency-contacts",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),
            icon: "assignment_ind",
            route: ["/users/staff/emergency-contacts"]
          },
          {
            id: "signage",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),
            route: ["/signage"]
          },
          {
            id: "points-of-interest",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),
            route: ["/points-of-interest"]
          },
          {
            id: "url-management",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_URLS"),
            route: ["/url-management"]
          },
          {
            id: "email-templates",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_EMAILS"),
            route: ["/email-templates"]
          },
          {
            id: "deals-n-offers",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_DEALS"),
            route: ["/deals-n-offers"]
          }
        ]
      },
      {
        id: "assets",
        name: i18n("APP.CONCIERGE.MENU_ASSETS"),
        route: ["/book/assets/list/items"],
        icon: "vibration"
      },
      {
        id: "internal-users",
        name: i18n("APP.CONCIERGE.MENU_USER_LIST"),
        icon: "assignment_ind",
        route: ["/users/staff"]
      },
      {
        id: "events",
        name: i18n("APP.CONCIERGE.MENU_EVENTS"),
        route: ["/entertainment/events"],
        icon: "confirmation_number"
      },
      {
        id: "surveys",
        name: i18n("APP.CONCIERGE.MENU_SURVEYS"),
        route: ["/surveys"],
        icon: "add_reaction"
      },
      {
        _id: "reports",
        name: i18n("APP.CONCIERGE.MENU_REPORTS"),
        icon: "analytics",
        children: [
          {
            id: "attendance-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"),
            route: ["/reports/attendance"]
          },
          {
            id: "booking-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_ROOMS"),
            route: ["/reports/bookings"]
          },
          {
            id: "desk-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_DESKS"),
            route: ["/reports/desks"]
          },
          {
            id: "parking-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_PARKING"),
            route: ["/reports/parking"]
          },
          {
            id: "lockers-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_LOCKERS"),
            route: ["/reports/lockers"]
          },
          {
            id: "catering-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_CATERING"),
            route: ["/reports/catering"]
          },
          {
            id: "contact-tracing-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),
            route: ["/reports/contact-tracing"]
          },
          {
            id: "assets-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_ASSETS"),
            route: ["/reports/assets"]
          },
          {
            id: "visitors-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_VISITORS"),
            route: ["/reports/visitors"]
          }
        ]
      }
    ];
    this.updateFilteredLinks();
    this.timeout("update_inview", () => this._moveActiveLinkIntoView(), 50);
    this.timeout("update_links", () => this.updateFilteredLinks(), 500);
  }
  _isFeatureAvailable(name) {
    if (name.startsWith("*")) {
      return true;
    }
    const has_feature = this.feature_list.includes(name);
    const feature_groups = this.feature_groups[name] || [];
    const groups = currentUser().groups;
    if (has_feature && (this.is_admin || !feature_groups.length || groups.find((grp) => feature_groups.includes(grp)))) {
      return true;
    }
    return false;
  }
  updateFilteredLinks() {
    const custom_reports = this._settings.get("app.custom_reports") || [];
    if (custom_reports.length && this.links.find((_) => _._id === "reports")) {
      const reports = this.links.find((_) => _._id === "reports");
      reports.children = unique(reports.children.concat(custom_reports.map((_) => __spreadProps(__spreadValues({}, _), {
        id: `*${_.id}`,
        route: ["/reports", _.id]
      }))), "id");
    }
    this.filtered_links.set(this.links.map((link) => __spreadProps(__spreadValues({}, link), {
      children: link.children ? link.children.filter((_) => this._isFeatureAvailable(_.id)) : null
    })).filter((_) => (!_.id || _.id === "home" || this._isFeatureAvailable(_.id)) && _.route || _.children?.length));
    if (this.filtered_links().find((_) => _.id === "home")) {
      const link = this.filtered_links().find((_) => _.id === "home");
      link.route = this._settings.get("app.default_route") || ["/"];
    }
    if (!this.is_admin) {
      this.filtered_links.update((links) => links.filter((_) => _.id !== "facilities"));
    }
  }
  toggleBlock(id) {
    this.show_block.update((state) => __spreadProps(__spreadValues({}, state), {
      [id]: !state[id]
    }));
  }
  isBlockCollapsed(id) {
    return !!this.show_block()[id];
  }
  _moveActiveLinkIntoView() {
    const active_link = this._element_ref.nativeElement.querySelector("a.active");
    if (!active_link)
      return;
    active_link.scrollIntoView({
      block: "center",
      behavior: "instant"
    });
  }
  static {
    this.\u0275fac = function ApplicationSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplicationSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationSidebarComponent, selectors: [["app-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[1, "border-base-200", "h-full", "w-64", "overflow-auto", "border-r", "py-2", "pr-3"], ["matRipple", "", "routerLinkActive", "active", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1", 3, "routerLink"], [1, "text-2xl", "opacity-60"], [1, "font-medium"], ["matRipple", "", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1"], [1, "w-full", "overflow-hidden"], ["matRipple", "", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1", 3, "click"], [1, "flex-1", "text-left", "font-medium"], [1, "text-2xl"], ["routerLinkActive", "active", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1", 3, "routerLink"]], template: function ApplicationSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ApplicationSidebarComponent_For_2_Template, 2, 1, null, null, _forTrack03);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_links());
      }
    }, dependencies: [RouterModule, RouterLink, RouterLinkActive, MatRippleModule, MatRipple, IconComponent], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\na.active[_ngcontent-%COMP%]:hover {\n  color: var(--base-content);\n  opacity: 0.75;\n}\n/*# sourceMappingURL=app-sidebar.component.css.map */"], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", template: `
        <div
            class="border-base-200 h-full w-64 overflow-auto border-r py-2 pr-3"
        >
            @for (link of filtered_links(); track link.id + '' + $index) {
                @if (!link.children) {
                    <a
                        matRipple
                        class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                        [routerLink]="link.route"
                        routerLinkActive="active"
                    >
                        <icon class="text-2xl opacity-60">{{ link.icon }}</icon>
                        <span class="font-medium">{{ link.name }}</span>
                    </a>
                } @else {
                    @if (link.children?.length) {
                        <button
                            matRipple
                            class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                            (click)="toggleBlock(link.id || link._id)"
                        >
                            <icon class="text-2xl opacity-60">
                                {{ link.icon }}
                            </icon>
                            <div class="flex-1 text-left font-medium">
                                {{ link.name }}
                            </div>
                            <icon class="text-2xl">arrow_drop_down</icon>
                        </button>
                    }
                    @if (link.children?.length) {
                        <section
                            class="w-full overflow-hidden"
                            [@show]="
                                !isBlockCollapsed(link.id || link._id)
                                    ? 'show'
                                    : 'hide'
                            "
                        >
                            @for (child of link.children; track child) {
                                <a
                                    class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                                    [routerLink]="child.route"
                                    routerLinkActive="active"
                                >
                                    <icon class="text-2xl"></icon>
                                    <span>{{ child.name }}</span>
                                </a>
                            }
                        </section>
                    }
                }
            }
        </div>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [RouterModule, MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;16f026b0cd79cf99fd5847e1262b1714d61b9cb4f6a812ea3e15fe855e48f1d1;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-sidebar.component.ts */\n:host {\n  height: 100%;\n}\na.active {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\na.active:hover {\n  color: var(--base-content);\n  opacity: 0.75;\n}\n/*# sourceMappingURL=app-sidebar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationSidebarComponent, { className: "ApplicationSidebarComponent", filePath: "apps/concierge/src/app/ui/app-sidebar.component.ts", lineNumber: 100 });
})();

// apps/concierge/src/app/ui/app-topbar.component.ts
var _c014 = () => ["/"];
var ApplicationTopbarComponent = class _ApplicationTopbarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._theme = this._settings.theme_signal;
    this._logo_dark = this._settings.signal("app.logo_dark", {}, true);
    this._logo_light = this._settings.signal("app.logo_light", {}, true);
    this.logo_src = computed(
      () => {
        const logo = this.logo();
        return typeof logo === "string" ? logo : logo?.src || "";
      },
      ...ngDevMode ? [{ debugName: "logo_src" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo = computed(
      () => (this._theme() === "dark" ? this._logo_dark() : this._logo_light()) || {},
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = userSignal();
  }
  static {
    this.\u0275fac = function ApplicationTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplicationTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationTopbarComponent, selectors: [["app-topbar"]], decls: 10, vars: 4, consts: [[1, "border-base-200", "flex", "items-center", "border-b", "p-2"], [1, "w-64"], [3, "routerLink"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex", "flex-1", "items-center", "justify-end", "space-x-2"], ["btn", "", "icon", "", "matRipple", ""], [1, "text-2xl"], [1, "mr-2"], [3, "user"]], template: function ApplicationTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "button", 5)(6, "icon", 6);
        \u0275\u0275text(7, "notifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "user-controls-sidebar", 7);
        \u0275\u0275element(9, "a-user-avatar", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c014));
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.logo_src());
        \u0275\u0275advance(6);
        \u0275\u0275property("user", ctx.user());
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      UserAvatarComponent,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      IconComponent,
      UserControlsSidebarComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=app-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationTopbarComponent, [{
    type: Component,
    args: [{ selector: "app-topbar", template: `
        <div class="border-base-200 flex items-center border-b p-2">
            <div class="w-64">
                <a [routerLink]="['/']">
                    <img auth class="h-12" [source]="logo_src()" />
                </a>
            </div>
            <!-- <mat-form-field
                appearance="outline"
                class="flex-1 max-w-[65vw] h-13"
            >
                <icon matPrefix class="text-2xl relative -left-1">
                    search
                </icon>
                <input
                    matInput
                    placeholder="Search for bookings, people or locations"
                />
            </mat-form-field> -->
            <div class="flex flex-1 items-center justify-end space-x-2">
                <button btn icon matRipple>
                    <icon class="text-2xl">notifications</icon>
                </button>
                <user-controls-sidebar class="mr-2">
                    <a-user-avatar [user]="user()"></a-user-avatar>
                </user-controls-sidebar>
            </div>
        </div>
    `, imports: [
      RouterModule,
      UserAvatarComponent,
      MatRippleModule,
      AuthenticatedImageDirective,
      IconComponent,
      UserControlsSidebarComponent
    ], styles: ["/* angular:styles/component:css;8f1598eabb5851faa0aa50753a7849bdec2ea83af5dd5d861f90aba4becc5d8c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-topbar.component.ts */\n:host {\n  width: 100%;\n}\n/*# sourceMappingURL=app-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationTopbarComponent, { className: "ApplicationTopbarComponent", filePath: "apps/concierge/src/app/ui/app-topbar.component.ts", lineNumber: 59 });
})();

export {
  setDay,
  parse,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatMenuItem,
  MatMenu,
  MatMenuTrigger,
  MatMenuModule,
  MatSelect,
  MatSelectTrigger,
  MatSelectModule,
  MatCheckbox,
  MatCheckboxModule,
  SettingsToggleComponent,
  setAuthCookie,
  AuthenticatedImageDirective,
  FullscreenModalShellComponent,
  MatRadioGroup,
  MatRadioButton,
  MatRadioModule,
  UserAvatarComponent,
  UploadPermissionsModalComponent,
  ImageListFieldComponent,
  RichTextInputComponent,
  TimeFieldComponent,
  WFHSettingsModalComponent,
  MatSlider,
  MatSliderThumb,
  MatSliderModule,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
};
//# sourceMappingURL=chunk-WXVSOSHS.js.map
