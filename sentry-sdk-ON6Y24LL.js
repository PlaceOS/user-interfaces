import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveEnd,
  Router
} from "./chunk-H574HJHJ.js";
import {
  Directive,
  ElementRef,
  HttpErrorResponse,
  Inject,
  Injectable,
  Input,
  NgModule,
  Subscription,
  VERSION,
  filter,
  setClassMetadata,
  tap,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-QU3LMPFF.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@sentry/core/build/esm/debug-build.js
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// node_modules/@sentry/core/build/esm/utils/worldwide.js
var GLOBAL_OBJ = globalThis;

// node_modules/@sentry/core/build/esm/utils/version.js
var SDK_VERSION = "11.9.0";

// node_modules/@sentry/core/build/esm/carrier.js
function getMainCarrier() {
  getSentryCarrier(GLOBAL_OBJ);
  return GLOBAL_OBJ;
}
function getSentryCarrier(carrier) {
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.version = __SENTRY__.version || SDK_VERSION;
  return __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
}
function getGlobalSingleton(name, creator, obj = GLOBAL_OBJ) {
  const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
  const carrier = __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
  return carrier[name] || (carrier[name] = creator());
}

// node_modules/@sentry/core/build/esm/utils/debug-logger.js
var CONSOLE_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
];
var PREFIX = "Sentry Logger ";
var originalConsoleMethods = {};
function consoleSandbox(callback) {
  if (!("console" in GLOBAL_OBJ)) {
    return callback();
  }
  const console2 = GLOBAL_OBJ.console;
  const wrappedFuncs = {};
  const wrappedLevels = Object.keys(originalConsoleMethods);
  wrappedLevels.forEach((level) => {
    const originalConsoleMethod = originalConsoleMethods[level];
    wrappedFuncs[level] = console2[level];
    console2[level] = originalConsoleMethod;
  });
  try {
    return callback();
  } finally {
    wrappedLevels.forEach((level) => {
      console2[level] = wrappedFuncs[level];
    });
  }
}
function enable() {
  _getLoggerSettings().enabled = true;
}
function disable() {
  _getLoggerSettings().enabled = false;
}
function isEnabled() {
  return _getLoggerSettings().enabled;
}
function log(...args) {
  _maybeLog("log", ...args);
}
function warn(...args) {
  _maybeLog("warn", ...args);
}
function error(...args) {
  _maybeLog("error", ...args);
}
function _maybeLog(level, ...args) {
  if (!DEBUG_BUILD) {
    return;
  }
  if (isEnabled()) {
    consoleSandbox(() => {
      GLOBAL_OBJ.console[level](`${PREFIX}[${level}]:`, ...args);
    });
  }
}
function _getLoggerSettings() {
  if (!DEBUG_BUILD) {
    return { enabled: false };
  }
  return getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
}
var debug = {
  /** Enable logging. */
  enable,
  /** Disable logging. */
  disable,
  /** Check if logging is enabled. */
  isEnabled,
  /** Log a message. */
  log,
  /** Log a warning. */
  warn,
  /** Log an error. */
  error
};

// node_modules/@sentry/core/build/esm/utils/stacktrace.js
var STACKTRACE_FRAME_LIMIT = 50;
var UNKNOWN_FUNCTION = "?";
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a2, b3) => a2[0] - b3[0]).map((p3) => p3[1]);
  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i3 = skipFirstLines; i3 < lines.length; i3++) {
      let line = lines[i3];
      if (line.length > 1024) {
        line = line.slice(0, 1024);
      }
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (cleanedLine.includes("Error: ")) {
        continue;
      }
      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);
        if (frame) {
          frames.push(frame);
          break;
        }
      }
      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }
    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  const localStack = Array.from(stack);
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
  }
  localStack.reverse();
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
      localStack.pop();
    }
  }
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => __spreadProps(__spreadValues({}, frame), {
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
var defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch {
    return defaultFunctionName;
  }
}
function getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    const frames = [];
    try {
      exception.values.forEach((value) => {
        if (value.stacktrace.frames) {
          frames.push(...value.stacktrace.frames);
        }
      });
      return frames;
    } catch {
      return void 0;
    }
  }
  return void 0;
}

// node_modules/@sentry/core/build/esm/instrument/handlers.js
var handlers = {};
var instrumented = {};
function addHandler(type, handler) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(handler);
  return () => {
    const typeHandlers = handlers[type];
    if (typeHandlers) {
      const index = typeHandlers.indexOf(handler);
      if (index !== -1) {
        typeHandlers.splice(index, 1);
      }
    }
  };
}
function maybeInstrument(type, instrumentFn) {
  if (!instrumented[type]) {
    instrumented[type] = true;
    try {
      instrumentFn();
    } catch (e4) {
      DEBUG_BUILD && debug.error(`Error while instrumenting ${type}`, e4);
    }
  }
}
function triggerHandlers(type, data) {
  const typeHandlers = type && handlers[type];
  if (!typeHandlers) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e4) {
      DEBUG_BUILD && debug.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
        e4
      );
    }
  }
}

// node_modules/@sentry/core/build/esm/instrument/globalError.js
var _oldOnErrorHandler = null;
function addGlobalErrorInstrumentationHandler(handler) {
  const type = "error";
  addHandler(type, handler);
  maybeInstrument(type, instrumentError);
}
function instrumentError() {
  _oldOnErrorHandler = GLOBAL_OBJ.onerror;
  GLOBAL_OBJ.onerror = function(msg, url, line, column, error2) {
    const handlerData = {
      column,
      error: error2,
      line,
      msg,
      url
    };
    triggerHandlers("error", handlerData);
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
  GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}

// node_modules/@sentry/core/build/esm/instrument/globalUnhandledRejection.js
var _oldOnUnhandledRejectionHandler = null;
function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
  const type = "unhandledrejection";
  addHandler(type, handler);
  maybeInstrument(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection;
  GLOBAL_OBJ.onunhandledrejection = function(e4) {
    const handlerData = e4;
    triggerHandlers("unhandledrejection", handlerData);
    if (_oldOnUnhandledRejectionHandler) {
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
  GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}

// node_modules/@sentry/core/build/esm/utils/is.js
var objectToString = Object.prototype.toString;
function isError(wat) {
  switch (objectToString.call(wat)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}
function isErrorEvent(wat) {
  return isBuiltin(wat, "ErrorEvent");
}
function isDOMError(wat) {
  return isBuiltin(wat, "DOMError");
}
function isDOMException(wat) {
  return isBuiltin(wat, "DOMException");
}
function isString(wat) {
  return isBuiltin(wat, "String");
}
function isParameterizedString(wat) {
  return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
function isPrimitive(wat) {
  return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject(wat) {
  return isBuiltin(wat, "Object");
}
function isObjectLike(wat) {
  return typeof wat === "object" && wat !== null;
}
function isEvent(wat) {
  return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isRegExp(wat) {
  return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
  return Boolean((wat == null ? void 0 : wat.then) && typeof wat.then === "function");
}
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch {
    return false;
  }
}
function isRequest(request) {
  return typeof Request !== "undefined" && isInstanceOf(request, Request);
}

// node_modules/@sentry/core/build/esm/utils/object.js
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  if (typeof original !== "function") {
    return;
  }
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    markFunctionWrapped(wrapped, original);
  }
  try {
    source[name] = wrapped;
  } catch {
    DEBUG_BUILD && debug.log(`Failed to replace method "${name}" in object`, source);
  }
}
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value,
      writable: true,
      configurable: true
    });
  } catch {
    DEBUG_BUILD && debug.log(`Failed to add non-enumerable property "${String(name)}" to object`, obj);
  }
}
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  } catch {
  }
}
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
function convertToPlainObject(value) {
  if (isError(value)) {
    return __spreadValues({
      message: value.message,
      name: value.name,
      stack: value.stack
    }, getOwnProperties(value));
  }
  if (isEvent(value)) {
    const { type, target, currentTarget, detail } = value;
    return __spreadValues(__spreadValues({
      type,
      target,
      currentTarget
    }, detail ? { detail } : {}), getOwnProperties(value));
  }
  return value;
}
function getOwnProperties(obj) {
  if (isObjectLike(obj)) {
    return Object.fromEntries(Object.entries(obj));
  }
  return {};
}
function extractExceptionKeysForMessage(exception) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  return !keys[0] ? "[object has no keys]" : keys.join(", ");
}

// node_modules/@sentry/core/build/esm/utils/randomSafeContext.js
var RESOLVED_RUNNER;
function withRandomSafeContext(cb) {
  if (RESOLVED_RUNNER !== void 0) {
    return RESOLVED_RUNNER ? RESOLVED_RUNNER(cb) : cb();
  }
  const sym = /* @__PURE__ */ Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const globalWithSymbol = GLOBAL_OBJ;
  if (sym in globalWithSymbol && typeof globalWithSymbol[sym] === "function") {
    RESOLVED_RUNNER = globalWithSymbol[sym];
    return RESOLVED_RUNNER(cb);
  }
  RESOLVED_RUNNER = null;
  return cb();
}
function safeMathRandom() {
  return withRandomSafeContext(() => Math.random());
}
function safeDateNow() {
  return withRandomSafeContext(() => Date.now());
}

// node_modules/@sentry/core/build/esm/utils/normalizationHints.js
var SENTRY_SKIP_NORMALIZATION = /* @__PURE__ */ Symbol.for("sentry.skipNormalization");
var SENTRY_OVERRIDE_NORMALIZATION_DEPTH = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
function hasSkipNormalizationHint(value) {
  return Boolean(value[SENTRY_SKIP_NORMALIZATION]);
}
function getNormalizationDepthOverrideHint(value) {
  const v2 = value[SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
  return typeof v2 === "number" ? v2 : void 0;
}

// node_modules/@sentry/core/build/esm/utils/normalize.js
var stringifier;
function setNormalizeStringifier(newStringifier) {
  stringifier = newStringifier;
}
function normalize(input, depth = 100, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value == null || // this matches null and undefined -> eqeq not eqeqeq
  ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (hasSkipNormalizationHint(value)) {
    return value;
  }
  const overrideDepth = getNormalizationDepthOverrideHint(value);
  const remainingDepth = overrideDepth !== void 0 ? overrideDepth : depth;
  if (remainingDepth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
function stringifyValue(key, value) {
  try {
    if (stringifier) {
      const stringified = stringifier(value);
      if (stringified) {
        return stringified;
      }
    }
    if (typeof global !== "undefined" && value === global) {
      return "[Global]";
    }
    if (typeof value === "number" && !Number.isFinite(value)) {
      return `[${value}]`;
    }
    if (typeof value === "function") {
      return `[Function: ${getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    const objName = getConstructorName(value);
    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);
  return (prototype == null ? void 0 : prototype.constructor) ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
function memoBuilder() {
  const inner = /* @__PURE__ */ new WeakSet();
  function memoize(obj) {
    if (inner.has(obj)) {
      return true;
    }
    inner.add(obj);
    return false;
  }
  function unmemoize(obj) {
    inner.delete(obj);
  }
  return [memoize, unmemoize];
}

// node_modules/@sentry/core/build/esm/utils/string.js
function truncate(str, max = 0) {
  if (typeof str !== "string" || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return "";
  }
  const output = [];
  for (let i3 = 0; i3 < input.length; i3++) {
    const value = input[i3];
    if (isPrimitive(value)) {
      output.push(String(value));
    } else if (value instanceof Error) {
      output.push(value.message ? `${value.name}: ${value.message}` : value.name);
    } else {
      output.push(stringifyValue(void 0, value));
    }
  }
  return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!isString(value)) {
    return false;
  }
  if (isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  if (typeof pattern === "function") {
    return pattern(value);
  }
  return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  for (const pattern of patterns) {
    if (isMatchingPattern(testString, pattern, requireExactStringMatch)) {
      return true;
    }
  }
  return false;
}

// node_modules/@sentry/core/build/esm/utils/misc.js
function getCrypto() {
  const gbl = GLOBAL_OBJ;
  return gbl.crypto || gbl.msCrypto;
}
var emptyUuid;
function getRandomByte() {
  return safeMathRandom() * 16;
}
function uuid4(crypto = getCrypto()) {
  try {
    if (crypto == null ? void 0 : crypto.randomUUID) {
      return withRandomSafeContext(() => crypto.randomUUID()).replace(/-/g, "");
    }
  } catch {
  }
  if (!emptyUuid) {
    emptyUuid = "10000000100040008000" + 1e11;
  }
  return emptyUuid.replace(
    /[018]/g,
    (c2) => (
      // eslint-disable-next-line no-bitwise
      (c2 ^ (getRandomByte() & 15) >> c2 / 4).toString(16)
    )
  );
}
function getFirstException(event) {
  var _a3, _b;
  return (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b[0];
}
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || "<unknown>";
  }
  return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = value || "";
  }
  if (!firstException.type) {
    firstException.type = type || "Error";
  }
}
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  applyExceptionMechanism(firstException, newMechanism);
}
function addExceptionMechanismToCapturedException(event, newMechanism) {
  var _a3;
  const exceptions = (_a3 = event.exception) == null ? void 0 : _a3.values;
  const capturedException = (exceptions == null ? void 0 : exceptions.find((exception) => {
    var _a4;
    return ((_a4 = exception.mechanism) == null ? void 0 : _a4.exception_id) === 0;
  })) ?? (exceptions == null ? void 0 : exceptions[0]);
  if (!capturedException) {
    return;
  }
  applyExceptionMechanism(capturedException, newMechanism);
}
function applyExceptionMechanism(exception, newMechanism) {
  const defaultMechanism = { type: "generic", handled: true };
  const currentMechanism = exception.mechanism;
  exception.mechanism = __spreadValues(__spreadValues(__spreadValues({}, defaultMechanism), currentMechanism), newMechanism);
  if (newMechanism && "data" in newMechanism) {
    exception.mechanism.data = __spreadValues(__spreadValues({}, currentMechanism == null ? void 0 : currentMechanism.data), newMechanism.data);
  }
}
function checkOrSetAlreadyCaught(exception) {
  if (isAlreadyCaptured(exception)) {
    return true;
  }
  try {
    addNonEnumerableProperty(exception, "__sentry_captured__", true);
  } catch {
  }
  return false;
}
function isAlreadyCaptured(exception) {
  try {
    return exception.__sentry_captured__;
  } catch {
  }
}

// node_modules/@sentry/core/build/esm/utils/time.js
var ONE_SECOND_IN_MS = 1e3;
var CLOCK_DRIFT_THRESHOLD_MS = 1e3;
var MAX_TIME_ORIGIN_SEGMENTS = 100;
function dateTimestampInSeconds() {
  return safeDateNow() / ONE_SECOND_IN_MS;
}
var _timeOriginSegments = [];
function createUnixTimestampInSecondsFunc() {
  const { performance: performance2 } = GLOBAL_OBJ;
  if (!(performance2 == null ? void 0 : performance2.now) || !performance2.timeOrigin) {
    if (performance2 == null ? void 0 : performance2.now) {
      _timeOriginSegments = [{ from: 0, origin: safeDateNow() - withRandomSafeContext(() => performance2.now()) }];
    }
    return dateTimestampInSeconds;
  }
  let correctedTimeOrigin = performance2.timeOrigin;
  _timeOriginSegments = [{ from: 0, origin: correctedTimeOrigin }];
  let isFirstCall = true;
  let lastCheckedPerformanceNow = 0;
  return () => {
    return withRandomSafeContext(() => {
      const performanceNow = performance2.now();
      const dateNow = Date.now();
      if (Math.abs(correctedTimeOrigin + performanceNow - dateNow) > CLOCK_DRIFT_THRESHOLD_MS) {
        correctedTimeOrigin = dateNow - performanceNow;
        if (isFirstCall) {
          _timeOriginSegments = [{ from: 0, origin: correctedTimeOrigin }];
        } else {
          _timeOriginSegments.push({ from: lastCheckedPerformanceNow, origin: correctedTimeOrigin });
          if (_timeOriginSegments.length > MAX_TIME_ORIGIN_SEGMENTS) {
            _timeOriginSegments.splice(1, 1);
          }
        }
      }
      isFirstCall = false;
      lastCheckedPerformanceNow = performanceNow;
      return (correctedTimeOrigin + performanceNow) / ONE_SECOND_IN_MS;
    });
  };
}
function safePerformanceNow() {
  const { performance: performance2 } = GLOBAL_OBJ;
  return (performance2 == null ? void 0 : performance2.now) ? withRandomSafeContext(() => performance2.now()) : void 0;
}
var _cachedTimestampInSecondsFn;
var _checkedForDriftInThisTask = false;
function performanceTimeToSeconds(monotonicTimeInMs, entryStartTimeInMs = monotonicTimeInMs) {
  const origin = browserPerformanceTimeOrigin(entryStartTimeInMs);
  return origin == null ? void 0 : (origin + monotonicTimeInMs) / ONE_SECOND_IN_MS;
}
function timestampInSeconds() {
  const func = _cachedTimestampInSecondsFn ?? (_cachedTimestampInSecondsFn = createUnixTimestampInSecondsFunc());
  return func();
}
function browserPerformanceTimeOrigin(monotonicTimeInMs = 0) {
  if (!_checkedForDriftInThisTask) {
    _checkedForDriftInThisTask = true;
    void Promise.resolve().then(() => {
      _checkedForDriftInThisTask = false;
    });
    timestampInSeconds();
  }
  let segment;
  for (const candidate of _timeOriginSegments) {
    if (segment && candidate.from > monotonicTimeInMs) {
      break;
    }
    segment = candidate;
  }
  return segment == null ? void 0 : segment.origin;
}

// node_modules/@sentry/core/build/esm/session.js
function makeSession(context) {
  const startingTime = timestampInSeconds();
  const session = {
    sid: uuid4(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session)
  };
  if (context) {
    updateSession(session, context);
  }
  return session;
}
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }
    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }
  session.timestamp = context.timestamp || timestampInSeconds();
  if (context.abnormal_mechanism) {
    session.abnormal_mechanism = context.abnormal_mechanism;
  }
  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    session.sid = context.sid.length === 32 ? context.sid : uuid4();
  }
  if (context.init !== void 0) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === "number") {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = void 0;
  } else if (typeof context.duration === "number") {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === "number") {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === "ok") {
    context = { status: "exited" };
  }
  updateSession(session, context);
}
function sessionToJSON(session) {
  return {
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1e3).toISOString(),
    timestamp: new Date(session.timestamp * 1e3).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
    duration: session.duration,
    abnormal_mechanism: session.abnormal_mechanism,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent
    }
  };
}

// node_modules/@sentry/core/build/esm/utils/merge.js
function merge(initialObj, mergeObj, levels = 2) {
  if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) {
    return mergeObj;
  }
  if (initialObj && Object.keys(mergeObj).length === 0) {
    return initialObj;
  }
  const output = __spreadValues({}, initialObj);
  for (const key in mergeObj) {
    if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
      output[key] = merge(output[key], mergeObj[key], levels - 1);
    }
  }
  return output;
}

// node_modules/@sentry/core/build/esm/utils/propagationContext.js
function generateTraceId() {
  return uuid4();
}
function generateSpanId() {
  return uuid4().substring(16);
}

// node_modules/@sentry/core/build/esm/scope.js
var DEFAULT_MAX_BREADCRUMBS = 100;
var Scope = class _Scope {
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    addNonEnumerableProperty(this, "refs", {});
    this._propagationContext = {
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    };
  }
  /**
   * Clone all data from this scope into a new scope.
   */
  clone() {
    const newScope = new _Scope();
    newScope._breadcrumbs = [...this._breadcrumbs];
    newScope._tags = __spreadValues({}, this._tags);
    newScope._attributes = __spreadValues({}, this._attributes);
    newScope._extra = __spreadValues({}, this._extra);
    newScope._contexts = __spreadValues({}, this._contexts);
    if (this._contexts.flags) {
      newScope._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    newScope._user = this._user;
    newScope._level = this._level;
    newScope._session = this._session;
    newScope._transactionName = this._transactionName;
    newScope._fingerprint = this._fingerprint;
    newScope._eventProcessors = [...this._eventProcessors];
    newScope._attachments = [...this._attachments];
    newScope._sdkProcessingMetadata = __spreadValues({}, this._sdkProcessingMetadata);
    newScope._propagationContext = __spreadValues({}, this._propagationContext);
    newScope._client = this._client;
    newScope._lastEventId = this._lastEventId;
    newScope._conversationId = this._conversationId;
    newScope.refs = __spreadValues({}, this.refs);
    return newScope;
  }
  /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */
  setClient(client) {
    this._client = client;
  }
  /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */
  setLastEventId(lastEventId2) {
    this._lastEventId = lastEventId2;
  }
  /**
   * Get the client assigned to this scope.
   */
  getClient() {
    return this._client;
  }
  /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }
  /**
   * Add an event processor that will be called before an event is sent.
   */
  addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }
  /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */
  setUser(user) {
    this._user = user || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    };
    if (this._session) {
      updateSession(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the user from this scope.
   */
  getUser() {
    return this._user;
  }
  /**
   * Set the conversation ID for this scope.
   * Set to `null` to unset the conversation ID.
   */
  setConversationId(conversationId) {
    this._conversationId = conversationId || void 0;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */
  setTags(tags) {
    this._tags = __spreadValues(__spreadValues({}, this._tags), tags);
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set a single tag that will be sent as tags data with the event.
   */
  setTag(key, value) {
    return this.setTags({ [key]: value });
  }
  /**
   * Sets attributes onto the scope.
   *
   * These attributes are applied to logs, metrics and streamed spans.
   *
   * Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
   *
   * @param newAttributes - The attributes to set on the scope, as key-value pairs.
   *
   * @example
   * ```typescript
   * scope.setAttributes({
   *   is_admin: true,
   *   payment_selection: 'credit_card',
   *   render_duration: 150,
   * });
   * ```
   */
  setAttributes(newAttributes) {
    this._attributes = __spreadValues(__spreadValues({}, this._attributes), newAttributes);
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets an attribute onto the scope.
   *
   * These attributes are applied to logs, metrics and streamed spans.
   *
   * Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
   *
   * @param key - The attribute key.
   * @param value - The attribute value.
   *
   * @example
   * ```typescript
   * scope.setAttribute('is_admin', true);
   * scope.setAttribute('render_duration', 150);
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAttribute(key, value) {
    return this.setAttributes({ [key]: value });
  }
  /**
   * Removes the attribute with the given key from the scope.
   *
   * @param key - The attribute key.
   *
   * @example
   * ```typescript
   * scope.removeAttribute('is_admin');
   * ```
   */
  removeAttribute(key) {
    if (key in this._attributes) {
      delete this._attributes[key];
      this._notifyScopeListeners();
    }
    return this;
  }
  /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */
  setExtras(extras) {
    this._extra = __spreadValues(__spreadValues({}, this._extra), extras);
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */
  setExtra(key, extra) {
    this._extra = __spreadProps(__spreadValues({}, this._extra), { [key]: extra });
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */
  setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the level on the scope for future events.
   */
  setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
  setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */
  setContext(key, context) {
    if (context === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set the session for the scope.
   */
  setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the session from the scope.
   */
  getSession() {
    return this._session;
  }
  /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */
  update(captureContext) {
    if (!captureContext) {
      return this;
    }
    const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
    const scopeInstance = scopeToMerge instanceof _Scope ? scopeToMerge.getScopeData() : isPlainObject(scopeToMerge) ? captureContext : void 0;
    const {
      tags,
      attributes,
      extra,
      user,
      contexts,
      level,
      fingerprint = [],
      propagationContext,
      conversationId
    } = scopeInstance || {};
    this._tags = __spreadValues(__spreadValues({}, this._tags), tags);
    this._attributes = __spreadValues(__spreadValues({}, this._attributes), attributes);
    this._extra = __spreadValues(__spreadValues({}, this._extra), extra);
    this._contexts = __spreadValues(__spreadValues({}, this._contexts), contexts);
    if (user && Object.keys(user).length) {
      this._user = user;
    }
    if (level) {
      this._level = level;
    }
    if (fingerprint.length) {
      this._fingerprint = fingerprint;
    }
    if (propagationContext) {
      this._propagationContext = propagationContext;
    }
    if (conversationId) {
      this._conversationId = conversationId;
    }
    return this;
  }
  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
  addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
    if (maxCrumbs <= 0) {
      return this;
    }
    const mergedBreadcrumb = __spreadProps(__spreadValues({
      timestamp: dateTimestampInSeconds()
    }, breadcrumb), {
      // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
      message: breadcrumb.message ? truncate(breadcrumb.message, 2048) : breadcrumb.message
    });
    this._breadcrumbs.push(mergedBreadcrumb);
    if (this._breadcrumbs.length > maxCrumbs) {
      this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the last breadcrumb of the scope.
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * Clear all breadcrumbs from the scope.
   */
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Add an attachment to the scope.
   */
  addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }
  /**
   * Clear all attachments from the scope.
   */
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  /**
   * Get the data of this scope, which should be applied to an event during processing.
   */
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      conversationId: this._conversationId
    };
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
  setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = merge(this._sdkProcessingMetadata, newData, 2);
    return this;
  }
  /**
   * Add propagation context to the scope, used for distributed tracing
   */
  setPropagationContext(context) {
    this._propagationContext = context;
    return this;
  }
  /**
   * Get propagation context from the scope, used for distributed tracing
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */
  captureException(exception, hint) {
    const eventId = (hint == null ? void 0 : hint.event_id) || uuid4();
    if (!this._client) {
      DEBUG_BUILD && debug.warn("No client configured on scope - will not capture exception!");
      return eventId;
    }
    const syntheticException = new Error("Sentry syntheticException");
    this._client.captureException(
      exception,
      __spreadProps(__spreadValues({
        originalException: exception,
        syntheticException
      }, hint), {
        event_id: eventId
      }),
      this
    );
    return eventId;
  }
  /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */
  captureMessage(message, level, hint) {
    const eventId = (hint == null ? void 0 : hint.event_id) || uuid4();
    if (!this._client) {
      DEBUG_BUILD && debug.warn("No client configured on scope - will not capture message!");
      return eventId;
    }
    const syntheticException = (hint == null ? void 0 : hint.syntheticException) ?? new Error(message);
    this._client.captureMessage(
      message,
      level,
      __spreadProps(__spreadValues({
        originalException: message,
        syntheticException
      }, hint), {
        event_id: eventId
      }),
      this
    );
    return eventId;
  }
  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
  captureEvent(event, hint) {
    const eventId = event.event_id || (hint == null ? void 0 : hint.event_id) || uuid4();
    if (!this._client) {
      DEBUG_BUILD && debug.warn("No client configured on scope - will not capture event!");
      return eventId;
    }
    this._client.captureEvent(event, __spreadProps(__spreadValues({}, hint), { event_id: eventId }), this);
    return eventId;
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((callback) => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
};

// node_modules/@sentry/core/build/esm/defaultScopes.js
function getDefaultCurrentScope() {
  return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
function getDefaultIsolationScope() {
  return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}

// node_modules/@sentry/core/build/esm/tracing/constants.js
var SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";

// node_modules/@sentry/core/build/esm/utils/chain-and-copy-promiselike.js
var isActualPromise = (p3) => p3 instanceof Promise && !p3[kChainedCopy];
var kChainedCopy = /* @__PURE__ */ Symbol("chained PromiseLike");
var chainAndCopyPromiseLike = (original, onSuccess, onError) => {
  const chained = original.then(
    (value) => {
      onSuccess(value);
      return value;
    },
    (err) => {
      onError(err);
      throw err;
    }
  );
  return isActualPromise(chained) && isActualPromise(original) ? chained : copyProps(original, chained);
};
var copyProps = (original, chained) => {
  if (!chained) return original;
  let mutated = false;
  for (const key in original) {
    if (key in chained) continue;
    mutated = true;
    const value = original[key];
    if (typeof value === "function") {
      Object.defineProperty(chained, key, {
        value: (...args) => value.apply(original, args),
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      chained[key] = value;
    }
  }
  if (mutated) Object.assign(chained, { [kChainedCopy]: true });
  return chained;
};

// node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
var AsyncContextStack = class {
  constructor(scope, isolationScope) {
    let assignedScope;
    if (!scope) {
      assignedScope = new Scope();
    } else {
      assignedScope = scope;
    }
    let assignedIsolationScope;
    if (!isolationScope) {
      assignedIsolationScope = new Scope();
    } else {
      assignedIsolationScope = isolationScope;
    }
    this._stack = [{ scope: assignedScope }];
    this._isolationScope = assignedIsolationScope;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(callback) {
    const scope = this._pushScope();
    let maybePromiseResult;
    try {
      maybePromiseResult = callback(scope);
    } catch (e4) {
      this._popScope();
      throw e4;
    }
    if (isThenable(maybePromiseResult)) {
      return chainAndCopyPromiseLike(
        maybePromiseResult,
        () => this._popScope(),
        () => this._popScope()
      );
    }
    this._popScope();
    return maybePromiseResult;
  }
  /**
   * Get the client of the stack.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * Get the isolation scope for the stack.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * Push a scope to the stack.
   */
  _pushScope() {
    const scope = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope
    });
    return scope;
  }
  /**
   * Pop a scope from the stack.
   */
  _popScope() {
    if (this._stack.length <= 1) return false;
    return !!this._stack.pop();
  }
};
function getAsyncContextStack() {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
function withScope(callback) {
  return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope, callback) {
  const stack = getAsyncContextStack();
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return callback(scope);
  });
}
function withIsolationScope(callback) {
  return getAsyncContextStack().withScope(() => {
    return callback(getAsyncContextStack().getIsolationScope());
  });
}
function getStackAsyncContextStrategy() {
  return {
    suppressTracing: suppressTracingInStack,
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope: (_isolationScope, callback) => {
      return withIsolationScope(callback);
    },
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope()
  };
}
function suppressTracingInStack(callback) {
  return withScope((scope) => {
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: true });
    const res = callback();
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: void 0 });
    return res;
  });
}

// node_modules/@sentry/core/build/esm/asyncContext/index.js
function getAsyncContextStrategy(carrier) {
  const sentry = getSentryCarrier(carrier);
  if (sentry.acs) {
    return sentry.acs;
  }
  return getStackAsyncContextStrategy();
}

// node_modules/@sentry/core/build/esm/attributes.js
function isAttributeObject(maybeObj) {
  return typeof maybeObj === "object" && maybeObj != null && !Array.isArray(maybeObj) && Object.keys(maybeObj).includes("value");
}
function attributeValueToTypedAttributeValue(rawValue, useFallback) {
  const { value, unit } = isAttributeObject(rawValue) ? rawValue : { value: rawValue, unit: void 0 };
  const attributeValue = getTypedAttributeValue(value);
  const checkedUnit = unit && typeof unit === "string" ? { unit } : {};
  if (attributeValue) {
    return __spreadValues(__spreadValues({}, attributeValue), checkedUnit);
  }
  if (!useFallback || useFallback === "skip-undefined" && value === void 0) {
    return;
  }
  let stringValue = "";
  try {
    stringValue = JSON.stringify(value) ?? "";
  } catch {
  }
  return __spreadValues({
    value: stringValue,
    type: "string"
  }, checkedUnit);
}
function serializeAttributes(attributes, fallback = false) {
  const serializedAttributes = {};
  for (const [key, value] of Object.entries(attributes ?? {})) {
    const typedValue = attributeValueToTypedAttributeValue(value, fallback);
    if (typedValue) {
      serializedAttributes[key] = typedValue;
    }
  }
  return serializedAttributes;
}
function estimateTypedAttributesSizeInBytes(attributes) {
  var _a3;
  if (!attributes) {
    return 0;
  }
  let weight = 0;
  for (const [key, attr] of Object.entries(attributes)) {
    weight += key.length * 2;
    weight += attr.type.length * 2;
    weight += (((_a3 = attr.unit) == null ? void 0 : _a3.length) ?? 0) * 2;
    const val = attr.value;
    if (Array.isArray(val)) {
      weight += estimatePrimitiveSizeInBytes(val[0]) * val.length;
    } else if (isPrimitive(val)) {
      weight += estimatePrimitiveSizeInBytes(val);
    } else {
      weight += 100;
    }
  }
  return weight;
}
function estimatePrimitiveSizeInBytes(value) {
  if (typeof value === "string") {
    return value.length * 2;
  } else if (typeof value === "boolean") {
    return 4;
  } else if (typeof value === "number") {
    return 8;
  }
  return 0;
}
function getTypedAttributeValue(value) {
  if (Array.isArray(value)) {
    return { value, type: "array" };
  }
  const primitiveType = typeof value === "string" ? "string" : typeof value === "boolean" ? "boolean" : typeof value === "number" && !Number.isNaN(value) ? Number.isInteger(value) ? "integer" : "double" : null;
  if (primitiveType) {
    return { value, type: primitiveType };
  }
}

// node_modules/@sentry/core/build/esm/currentScopes.js
function getExternalPropagationContext() {
  var _a3, _b;
  return (_b = (_a3 = getSentryCarrier(getMainCarrier())).externalPropagationContextProvider) == null ? void 0 : _b.call(_a3);
}
function hasExternalPropagationContext() {
  return getSentryCarrier(getMainCarrier()).externalPropagationContextProvider !== void 0;
}
function getCurrentScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getCurrentScope();
}
function getIsolationScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getIsolationScope();
}
function getGlobalScope() {
  return getGlobalSingleton("globalScope", () => new Scope());
}
function withScope2(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [scope, callback] = rest;
    if (!scope) {
      return acs.withScope(callback);
    }
    return acs.withSetScope(scope, callback);
  }
  return acs.withScope(rest[0]);
}
function getClient() {
  return getCurrentScope().getClient();
}
function getTraceContextFromScope(scope) {
  const externalContext = getExternalPropagationContext();
  if (externalContext) {
    return { trace_id: externalContext.traceId, span_id: externalContext.spanId };
  }
  const propagationContext = scope.getPropagationContext();
  const { traceId, parentSpanId, propagationSpanId } = propagationContext;
  const traceContext = {
    trace_id: traceId,
    span_id: propagationSpanId || generateSpanId()
  };
  if (parentSpanId) {
    traceContext.parent_span_id = parentSpanId;
  }
  return traceContext;
}

// node_modules/@sentry/conventions/dist/attributes.mjs
var Bt = "browser.navigation.id";
var Wt = "browser.navigation.type";
var Ht = "browser.paint.type";
var oi = "browser.web_vital.inp.interaction_type";
var li = "browser.web_vital.inp.target";
var na = "code.file.path";
var la = "code.function.name";
var wr = "gen_ai.conversation.id";
var Po = "http.request.header";
var Do = "http.request.method";
var Vo = "http.request.same_origin";
var Ho = "http.response.body.size";
var $o = "http.response.size";
var el = "http.response.status_code";
var Ic = "network.connection.effective_type";
var Ac = "network.connection.rtt";
var wc = "network.connection.type";
var Id = "sentry.description";
var Md = "sentry.environment";
var Vd = "sentry.exclusive_time";
var Qd = "sentry.idle_span_finish_reason";
var Jd = "sentry.is_localhost";
var $d = "sentry.link.type";
var mm = "sentry.op";
var gm = "sentry.origin";
var hm = "sentry.profile_id";
var km = "sentry.release";
var Tm = "sentry.replay_id";
var Om = "sentry.sdk.integrations";
var Im = "sentry.sdk.name";
var Am = "sentry.sdk.version";
var wm = "sentry.segment.id";
var Rm = "sentry.segment.name";
var Nm = "sentry.segment.name.source";
var Mm = "sentry.status.message";
var Fm = "sentry.trace_lifecycle";
var Wm = "sentry.transaction";
var tg = "server.address";
var ag = "server.port";
var Yg = "ui.component_name";
var eb = "url.domain";
var tb = "url.fragment";
var ib = "url.full";
var ab = "url.path";
var pb = "url.query";
var ub = "url.scheme";
var db = "url.template";
var mb = "user_agent.original";
var gb = "user.email";
var kb = "user.id";
var Tb = "user.ip_address";
var Sb = "user.name";

// node_modules/@sentry/core/build/esm/semanticAttributes.js
var SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = "sentry.previous_trace_sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
var SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";

// node_modules/@sentry/core/build/esm/types/spanStatus.js
var SPAN_STATUS_TYPES = [
  /** The operation completed successfully. */
  "ok",
  /** Deadline expired before operation could complete. */
  "deadline_exceeded",
  /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
  "unauthenticated",
  /** 403 Forbidden */
  "permission_denied",
  /** 404 Not Found. Some requested entity (file or directory) was not found. */
  "not_found",
  /** 429 Too Many Requests */
  "resource_exhausted",
  /** Client specified an invalid argument. 4xx. */
  "invalid_argument",
  /** 501 Not Implemented */
  "unimplemented",
  /** 503 Service Unavailable */
  "unavailable",
  /** Other/generic 5xx. */
  "internal_error",
  /** Unknown. Any non-standard HTTP status code. */
  "unknown_error",
  /** The operation was cancelled (typically by the user). */
  "cancelled",
  /** Already exists (409) */
  "already_exists",
  /** Operation was rejected because the system is not in a state required for the operation's */
  "failed_precondition",
  /** The operation was aborted, typically due to a concurrency issue. */
  "aborted",
  /** Operation was attempted past the valid range. */
  "out_of_range",
  /** Unrecoverable data loss or corruption */
  "data_loss"
];

// node_modules/@sentry/core/build/esm/tracing/spanstatus.js
var SPAN_STATUS_UNSET = 0;
var SPAN_STATUS_OK = 1;
var SPAN_STATUS_ERROR = 2;
function isStatusErrorMessageValid(message) {
  return message !== "ok" && SPAN_STATUS_TYPES.includes(message);
}
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return { code: SPAN_STATUS_OK };
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return { code: SPAN_STATUS_ERROR, message: "unauthenticated" };
      case 403:
        return { code: SPAN_STATUS_ERROR, message: "permission_denied" };
      case 404:
        return { code: SPAN_STATUS_ERROR, message: "not_found" };
      case 409:
        return { code: SPAN_STATUS_ERROR, message: "already_exists" };
      case 413:
        return { code: SPAN_STATUS_ERROR, message: "failed_precondition" };
      case 429:
        return { code: SPAN_STATUS_ERROR, message: "resource_exhausted" };
      case 499:
        return { code: SPAN_STATUS_ERROR, message: "cancelled" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "invalid_argument" };
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return { code: SPAN_STATUS_ERROR, message: "unimplemented" };
      case 503:
        return { code: SPAN_STATUS_ERROR, message: "unavailable" };
      case 504:
        return { code: SPAN_STATUS_ERROR, message: "deadline_exceeded" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "internal_error" };
    }
  }
  return { code: SPAN_STATUS_ERROR, message: "internal_error" };
}
function setHttpStatus(span, httpStatus) {
  span.setAttribute("http.response.status_code", httpStatus);
  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== "unknown_error") {
    span.setStatus(spanStatus);
  }
}

// node_modules/@sentry/core/build/esm/utils/weakRef.js
function makeWeakRef(value) {
  try {
    const WeakRefImpl = GLOBAL_OBJ.WeakRef;
    if (typeof WeakRefImpl === "function") {
      return new WeakRefImpl(value);
    }
  } catch {
  }
  return value;
}
function derefWeakRef(ref) {
  if (!ref) {
    return void 0;
  }
  if (typeof ref === "object" && "deref" in ref && typeof ref.deref === "function") {
    try {
      return ref.deref();
    } catch {
      return void 0;
    }
  }
  return ref;
}

// node_modules/@sentry/core/build/esm/tracing/utils.js
var SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
var ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
var TRACER_PROVIDER_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.tracerProviderSpan");
function setCapturedScopesOnSpan(span, scope, isolationScope) {
  if (span) {
    addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, makeWeakRef(isolationScope));
    addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
  }
}
function getCapturedScopesOnSpan(span) {
  const spanWithScopes = span;
  return {
    scope: spanWithScopes[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: derefWeakRef(spanWithScopes[ISOLATION_SCOPE_ON_START_SPAN_FIELD])
  };
}
function spanIsTracerProviderSpan(span) {
  return span[TRACER_PROVIDER_SPAN_FIELD] === true;
}

// node_modules/@sentry/core/build/esm/utils/baggage.js
var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
var MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
  const baggageObject = parseBaggageHeader(baggageHeader);
  if (!baggageObject) {
    return void 0;
  }
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.startsWith(SENTRY_BAGGAGE_KEY_PREFIX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext;
  } else {
    return void 0;
  }
}
function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
  if (!dynamicSamplingContext) {
    return void 0;
  }
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {}
  );
  return objectToBaggageHeader(sentryPrefixedDSC);
}
function parseBaggageHeader(baggageHeader) {
  if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) {
    return void 0;
  }
  if (Array.isArray(baggageHeader)) {
    return baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      Object.entries(currBaggageObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    }, {});
  }
  return baggageHeaderToObject(baggageHeader);
}
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader.split(",").map((baggageEntry) => {
    const eqIdx = baggageEntry.indexOf("=");
    if (eqIdx === -1) {
      return [];
    }
    const key = baggageEntry.slice(0, eqIdx);
    const value = baggageEntry.slice(eqIdx + 1);
    return [key, value].map((keyOrValue) => {
      try {
        return decodeURIComponent(keyOrValue.trim());
      } catch {
        return;
      }
    });
  }).reduce((acc, [key, value]) => {
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    return void 0;
  }
  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      DEBUG_BUILD && debug.warn(
        `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`
      );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, "");
}

// node_modules/@sentry/core/build/esm/utils/dsn.js
var ORG_ID_REGEX = /^o(\d+)\./;
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    consoleSandbox(() => {
      console.error(`Invalid Sentry Dsn: ${str}`);
    });
    return void 0;
  }
  const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
  let path = "";
  let projectId = lastPath;
  const split = projectId.split("/");
  if (split.length > 1) {
    path = split.slice(0, -1).join("/");
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
}
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || "",
    pass: components.pass || "",
    host: components.host,
    port: components.port || "",
    path: components.path || "",
    projectId: components.projectId
  };
}
function validateDsn(dsn) {
  if (!DEBUG_BUILD) {
    return true;
  }
  const { port, projectId, protocol } = dsn;
  const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
  const hasMissingRequiredComponent = requiredComponents.find((component) => {
    if (!dsn[component]) {
      debug.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });
  if (hasMissingRequiredComponent) {
    return false;
  }
  if (!projectId.match(/^\d+$/)) {
    debug.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }
  if (!isValidProtocol(protocol)) {
    debug.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }
  if (port && isNaN(parseInt(port, 10))) {
    debug.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }
  return true;
}
function extractOrgIdFromDsnHost(host) {
  const match = host.match(ORG_ID_REGEX);
  return match == null ? void 0 : match[1];
}
function extractOrgIdFromClient(client) {
  const options = client.getOptions();
  const { host } = client.getDsn() || {};
  let org_id;
  if (options.orgId) {
    org_id = String(options.orgId);
  } else if (host) {
    org_id = extractOrgIdFromDsnHost(host);
  }
  return org_id;
}
function makeDsn(from) {
  const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
  if (!components || !validateDsn(components)) {
    return void 0;
  }
  return components;
}

// node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
function parseSampleRate(sampleRate) {
  if (typeof sampleRate === "boolean") {
    return Number(sampleRate);
  }
  const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
  if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
    return void 0;
  }
  return rate;
}

// node_modules/@sentry/core/build/esm/utils/tracing.js
var TRACEPARENT_REGEXP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  // whitespace
);
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return void 0;
  }
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return void 0;
  }
  let parentSampled;
  if (matches[3] === "1") {
    parentSampled = true;
  } else if (matches[3] === "0") {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}
function propagationContextFromHeaders(sentryTrace, baggage) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = baggageHeaderToDynamicSamplingContext(baggage);
  if (!(traceparentData == null ? void 0 : traceparentData.traceId)) {
    return {
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    };
  }
  const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);
  if (dynamicSamplingContext) {
    dynamicSamplingContext.sample_rand = sampleRand.toString();
  }
  const { traceId, parentSpanId, parentSampled } = traceparentData;
  return {
    traceId,
    parentSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {},
    // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
    sampleRand
  };
}
function generateSentryTraceHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  let sampledString = "";
  if (sampled !== void 0) {
    sampledString = sampled ? "-1" : "-0";
  }
  return `${traceId}-${spanId}${sampledString}`;
}
function generateTraceparentHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  return `00-${traceId}-${spanId}-${sampled ? "01" : "00"}`;
}
function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
  const parsedSampleRand = parseSampleRate(dsc == null ? void 0 : dsc.sample_rand);
  if (parsedSampleRand !== void 0) {
    return parsedSampleRand;
  }
  const parsedSampleRate = parseSampleRate(dsc == null ? void 0 : dsc.sample_rate);
  if (parsedSampleRate && (traceparentData == null ? void 0 : traceparentData.parentSampled) !== void 0) {
    return traceparentData.parentSampled ? (
      // Returns a sample rand with positive sampling decision [0, sampleRate)
      safeMathRandom() * parsedSampleRate
    ) : (
      // Returns a sample rand with negative sampling decision [sampleRate, 1)
      parsedSampleRate + safeMathRandom() * (1 - parsedSampleRate)
    );
  } else {
    return safeMathRandom();
  }
}

// node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var SCOPE_SPAN_FIELD = "span";
function _setSpanForScope(scope, span) {
  if (span) {
    scope.refs[SCOPE_SPAN_FIELD] = makeWeakRef(span);
  } else {
    delete scope.refs[SCOPE_SPAN_FIELD];
  }
}
function _getSpanForScope(scope) {
  return derefWeakRef(scope.refs[SCOPE_SPAN_FIELD]);
}

// node_modules/@sentry/core/build/esm/utils/spanUtils.js
var TRACE_FLAG_NONE = 0;
var TRACE_FLAG_SAMPLED = 1;
function spanToTransactionTraceContext(span) {
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  const { data, op, parent_span_id, status, origin, links } = spanToStaticSpanJSON(span);
  return {
    parent_span_id,
    span_id,
    trace_id,
    data,
    op,
    status,
    origin,
    links
  };
}
function spanToTraceContext(span) {
  const { spanId, traceId: trace_id, isRemote } = span.spanContext();
  const parent_span_id = isRemote ? spanId : spanToStaticSpanJSON(span).parent_span_id;
  const scope = getCapturedScopesOnSpan(span).scope;
  const span_id = isRemote ? (scope == null ? void 0 : scope.getPropagationContext().propagationSpanId) || generateSpanId() : spanId;
  return {
    parent_span_id,
    span_id,
    trace_id
  };
}
function spanToTraceHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateSentryTraceHeader(traceId, spanId, sampled);
}
function spanToTraceparentHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateTraceparentHeader(traceId, spanId, sampled);
}
function convertSpanLinksForEnvelope(links) {
  if (links && links.length > 0) {
    return links.map((_a3) => {
      var _b = _a3, { context: _c } = _b, _d = _c, { spanId, traceId, traceFlags } = _d, restContext = __objRest(_d, ["spanId", "traceId", "traceFlags"]), { attributes } = _b;
      return __spreadValues({
        span_id: spanId,
        trace_id: traceId,
        sampled: traceFlags === TRACE_FLAG_SAMPLED,
        attributes
      }, restContext);
    });
  } else {
    return void 0;
  }
}
function getStreamedSpanLinks(links) {
  if (links == null ? void 0 : links.length) {
    return links.map(({ context: { spanId, traceId, traceFlags }, attributes }) => ({
      span_id: spanId,
      trace_id: traceId,
      sampled: traceFlags === TRACE_FLAG_SAMPLED,
      attributes
    }));
  } else {
    return void 0;
  }
}
function spanTimeInputToSeconds(input) {
  if (typeof input === "number") {
    return ensureTimestampInSeconds(input);
  }
  if (Array.isArray(input)) {
    return input[0] + input[1] / 1e9;
  }
  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }
  return timestampInSeconds();
}
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
function spanToStaticSpanJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getStaticSpanJSON();
  }
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, status, links } = span;
    return {
      span_id,
      trace_id,
      data: attributes,
      description: name,
      parent_span_id: getOtelParentSpanId(span),
      start_timestamp: spanTimeInputToSeconds(startTime),
      // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
      timestamp: spanTimeInputToSeconds(endTime) || void 0,
      status: getStatusMessage(status),
      op: attributes[mm],
      origin: attributes[gm],
      links: convertSpanLinksForEnvelope(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    status: "ok",
    data: {}
  };
}
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, status, links } = span;
    return {
      name,
      span_id,
      trace_id,
      parent_span_id: getOtelParentSpanId(span),
      start_timestamp: spanTimeInputToSeconds(startTime),
      // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
      end_timestamp: spanTimeInputToSeconds(endTime) || void 0,
      is_segment: spanIsSegment(span),
      status: getSimpleStatus(status),
      attributes: addStatusMessageAttribute(attributes, status),
      links: getStreamedSpanLinks(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    name: "",
    status: "ok",
    is_segment: spanIsSegment(span),
    attributes: {}
  };
}
function getOtelParentSpanId(span) {
  var _a3;
  return "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? (_a3 = span.parentSpanContext) == null ? void 0 : _a3.spanId : void 0;
}
function streamedSpanJsonToSerializedSpan(spanJson) {
  var _a3;
  return __spreadProps(__spreadValues({}, spanJson), {
    // We only ever send ended spans, but fall back to the start time (i.e. duration 0) so that
    // sent spans always carry an end timestamp.
    end_timestamp: spanJson.end_timestamp ?? spanJson.start_timestamp,
    attributes: serializeAttributes(spanJson.attributes),
    links: (_a3 = spanJson.links) == null ? void 0 : _a3.map((link) => __spreadProps(__spreadValues({}, link), {
      attributes: serializeAttributes(link.attributes)
    }))
  });
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
function spanIsSentrySpan(span) {
  return typeof span.getSpanJSON === "function";
}
function spanIsSampled(span) {
  const { traceFlags } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}
function getStatusMessage(status) {
  if (!status || status.code === SPAN_STATUS_UNSET) {
    return "ok";
  }
  if (status.code === SPAN_STATUS_OK) {
    return "ok";
  }
  return status.message && isStatusErrorMessageValid(status.message) ? status.message : "internal_error";
}
function getSimpleStatus(status) {
  return !status || status.code === SPAN_STATUS_OK || status.code === SPAN_STATUS_UNSET || status.message === "cancelled" ? "ok" : "error";
}
function addStatusMessageAttribute(attributes, status) {
  const statusMessage = getSimpleStatus(status) === "error" ? status == null ? void 0 : status.message : void 0;
  return __spreadValues(__spreadValues({}, statusMessage && { [Mm]: statusMessage }), attributes);
}
var CHILD_SPANS_FIELD = "_sentryChildSpans";
var ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, rootSpan);
  childSpan.setAttribute(Nm, void 0);
  if (!spanIsSampled(span)) {
    return;
  }
  if (!span.isRecording() && !rootSpan.isRecording()) {
    return;
  }
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    addNonEnumerableProperty(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([childSpan]));
  }
}
function removeChildSpanFromSpan(span, childSpan) {
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].delete(childSpan);
  }
}
function getSpanDescendants(span) {
  const resultSet = /* @__PURE__ */ new Set();
  function addSpanChildren(span2) {
    if (resultSet.has(span2)) {
      return;
    } else if (spanIsSampled(span2)) {
      resultSet.add(span2);
      const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }
  addSpanChildren(span);
  return Array.from(resultSet);
}
var getRootSpan = INTERNAL_getSegmentSpan;
function INTERNAL_getSegmentSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}
function spanIsSegment(span) {
  return span === INTERNAL_getSegmentSpan(span);
}
function getActiveSpan(scope) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan(scope);
  }
  return _getSpanForScope(scope || getCurrentScope());
}
function INTERNAL_setSegmentNameSourceIfSegment(span, source) {
  if (spanIsSegment(span)) {
    span.setAttribute(Nm, source);
  }
}

// node_modules/@sentry/core/build/esm/tracing/errors.js
var errorsInstrumented = false;
function registerSpanErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }
  function errorCallback() {
    const activeSpan = getActiveSpan();
    const rootSpan = activeSpan && getRootSpan(activeSpan);
    if (rootSpan) {
      const message = "internal_error";
      DEBUG_BUILD && debug.log(`[Tracing] Root span: ${message} -> Global error occurred`);
      rootSpan.setStatus({ code: SPAN_STATUS_ERROR, message });
    }
  }
  errorsInstrumented = true;
  addGlobalErrorInstrumentationHandler(errorCallback);
  addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
}

// node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
function hasSpansEnabled(maybeOptions) {
  var _a3;
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const options = maybeOptions || ((_a3 = getClient()) == null ? void 0 : _a3.getOptions());
  return !!options && // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
  (options.tracesSampleRate != null || !!options.tracesSampler);
}

// node_modules/@sentry/core/build/esm/utils/should-ignore-span.js
function logIgnoredSpan(droppedSpan) {
  debug.log(`Ignoring span ${droppedSpan.op} - ${droppedSpan.description} because it matches \`ignoreSpans\`.`);
}
function shouldIgnoreSpan(span, ignoreSpans) {
  if (!(ignoreSpans == null ? void 0 : ignoreSpans.length)) {
    return false;
  }
  for (const pattern of ignoreSpans) {
    if (isStringOrRegExp(pattern)) {
      if (span.description && isMatchingPattern(span.description, pattern)) {
        DEBUG_BUILD && logIgnoredSpan(span);
        return true;
      }
      continue;
    }
    const hasAttributes = !!pattern.attributes && Object.keys(pattern.attributes).length > 0;
    if (!pattern.name && !pattern.op && !hasAttributes) {
      continue;
    }
    const nameMatches = pattern.name ? span.description && isMatchingPattern(span.description, pattern.name) : true;
    const opMatches = pattern.op ? span.op && isMatchingPattern(span.op, pattern.op) : true;
    const attrsMatch = pattern.attributes ? Object.entries(pattern.attributes).every(
      ([key, valuePattern]) => {
        var _a3;
        return _matchesAttributeValue((_a3 = span.attributes) == null ? void 0 : _a3[key], valuePattern);
      }
    ) : true;
    if (nameMatches && opMatches && attrsMatch) {
      DEBUG_BUILD && logIgnoredSpan(span);
      return true;
    }
  }
  return false;
}
function _matchesAttributeValue(actual, pat) {
  if (typeof actual === "string" && (typeof pat === "string" || pat instanceof RegExp)) {
    return isMatchingPattern(actual, pat);
  }
  if (Array.isArray(actual) && Array.isArray(pat)) {
    return actual.length === pat.length && actual.every((v2, i3) => v2 === pat[i3]);
  }
  return actual === pat;
}
function reparentChildSpans(spans, dropSpan) {
  const droppedSpanParentId = dropSpan.parent_span_id;
  const droppedSpanId = dropSpan.span_id;
  if (!droppedSpanParentId) {
    return;
  }
  for (const span of spans) {
    if (span.parent_span_id === droppedSpanId) {
      span.parent_span_id = droppedSpanParentId;
    }
  }
}
function isStringOrRegExp(value) {
  return typeof value === "string" || value instanceof RegExp;
}

// node_modules/@sentry/core/build/esm/integration.js
var installedIntegrations = [];
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach((currentInstance) => {
    const { name } = currentInstance;
    const existingInstance = integrationsByName[name];
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name] = currentInstance;
  });
  return Object.values(integrationsByName);
}
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;
  defaultIntegrations.forEach((integration) => {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === "function") {
    const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
  } else {
    integrations = defaultIntegrations;
  }
  return filterDuplicates(integrations);
}
function setupIntegrations(client, integrations) {
  const integrationIndex = {};
  integrations.forEach((integration) => {
    if (integration == null ? void 0 : integration.beforeSetup) {
      integration.beforeSetup(client);
    }
  });
  integrations.forEach((integration) => {
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });
  return integrationIndex;
}
function afterSetupIntegrations(client, integrations) {
  for (const integration of integrations) {
    if (integration == null ? void 0 : integration.afterAllSetup) {
      integration.afterAllSetup(client);
    }
  }
}
function setupIntegration(client, integration, integrationIndex) {
  if (integrationIndex[integration.name]) {
    DEBUG_BUILD && debug.log(`Integration skipped because it was already installed: ${integration.name}`);
    return;
  }
  integrationIndex[integration.name] = integration;
  if (!installedIntegrations.includes(integration.name) && typeof integration.setupOnce === "function") {
    integration.setupOnce();
    installedIntegrations.push(integration.name);
  }
  if (integration.setup && typeof integration.setup === "function") {
    integration.setup(client);
  }
  if (typeof integration.preprocessEvent === "function") {
    const callback = integration.preprocessEvent.bind(integration);
    client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
  }
  if (typeof integration.processEvent === "function") {
    const callback = integration.processEvent.bind(integration);
    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name
    });
    client.addEventProcessor(processor);
  }
  ["processSpan", "processSegmentSpan"].forEach((hook) => {
    const callback = integration[hook];
    if (typeof callback === "function") {
      client.on(hook, (span) => callback.call(integration, span, client));
    }
  });
  DEBUG_BUILD && debug.log(`Integration installed: ${integration.name}`);
}
function defineIntegration(fn) {
  return fn;
}

// node_modules/@sentry/core/build/esm/constants.js
var DEFAULT_ENVIRONMENT = "production";

// node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
var NON_RECORDING_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.nonRecordingSpan");
var SentryNonRecordingSpan = class {
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    this.dropReason = spanContext.dropReason;
    addNonEnumerableProperty(this, NON_RECORDING_SPAN_FIELD, true);
  }
  /** @inheritdoc */
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  end(_timestamp) {
  }
  /** @inheritdoc */
  setAttribute(_key, _value) {
    return this;
  }
  /** @inheritdoc */
  setAttributes(_values) {
    return this;
  }
  /** @inheritdoc */
  setStatus(_status) {
    return this;
  }
  /** @inheritdoc */
  updateName(_name) {
    return this;
  }
  /** @inheritdoc */
  isRecording() {
    return false;
  }
  /** @inheritdoc */
  addEvent(_name, _attributesOrStartTime, _startTime) {
    return this;
  }
  /** @inheritDoc */
  addLink(_link) {
    return this;
  }
  /** @inheritDoc */
  addLinks(_links) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
};
function spanIsNonRecordingSpan(span) {
  return !!span && span[NON_RECORDING_SPAN_FIELD] === true;
}

// node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
var FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span;
  addNonEnumerableProperty(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();
  const { publicKey: public_key } = client.getDsn() || {};
  const dsc = {
    environment: options.environment || DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key,
    trace_id,
    org_id: extractOrgIdFromClient(client)
  };
  client.emit("createDsc", dsc);
  return dsc;
}
function getDynamicSamplingContextFromScope(client, scope) {
  if (getExternalPropagationContext()) {
    return void 0;
  }
  const propagationContext = scope.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
function getDynamicSamplingContextFromSpan(span) {
  var _a3;
  const client = getClient();
  if (!client) {
    return {};
  }
  const rootSpan = getRootSpan(span);
  const rootSpanJson = spanToStaticSpanJSON(rootSpan);
  const rootSpanAttributes = rootSpanJson.data;
  const traceState = rootSpan.spanContext().traceState;
  const rootSpanSampleRate = (traceState == null ? void 0 : traceState.get("sentry.sample_rate")) ?? rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
  function applyLocalSampleRateToDsc(dsc2) {
    if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") {
      dsc2.sample_rate = `${rootSpanSampleRate}`;
    }
    return dsc2;
  }
  const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return applyLocalSampleRateToDsc(frozenDsc);
  }
  const isNonRecordingRoot = spanIsNonRecordingSpan(rootSpan);
  const isIgnoredRoot = isNonRecordingRoot && rootSpan.dropReason === "ignored";
  if (isNonRecordingRoot && (!hasSpansEnabled(client.getOptions()) || isIgnoredRoot)) {
    const capturedScope = getCapturedScopesOnSpan(rootSpan).scope;
    const scopeDsc = capturedScope && getDynamicSamplingContextFromScope(client, capturedScope);
    if (scopeDsc) {
      const dsc2 = __spreadValues({}, scopeDsc);
      if (isIgnoredRoot) {
        dsc2.sampled = "false";
      }
      return applyLocalSampleRateToDsc(dsc2);
    }
  }
  const traceStateDsc = traceState == null ? void 0 : traceState.get("sentry.dsc");
  const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
  if (dscOnTraceState) {
    return applyLocalSampleRateToDsc(dscOnTraceState);
  }
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
  const source = rootSpanAttributes[Nm];
  const name = rootSpanJson.description;
  if (source !== "url" && name) {
    dsc.transaction = name;
  }
  if (hasSpansEnabled()) {
    dsc.sampled = String(spanIsSampled(rootSpan));
    dsc.sample_rand = // In OTEL we store the sample rand on the trace state because we cannot access scopes for NonRecordingSpans
    // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
    (traceState == null ? void 0 : traceState.get("sentry.sample_rand")) ?? // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
    ((_a3 = getCapturedScopesOnSpan(rootSpan).scope) == null ? void 0 : _a3.getPropagationContext().sampleRand.toString());
  }
  applyLocalSampleRateToDsc(dsc);
  client.emit("createDsc", dsc, rootSpan);
  return dsc;
}

// node_modules/@sentry/core/build/esm/utils/scopeData.js
function applyScopeDataToEvent(event, data) {
  const { fingerprint, breadcrumbs, sdkProcessingMetadata } = data;
  applyDataToEvent(event, data);
  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
function mergeScopeData(data, mergeData) {
  const {
    extra,
    tags,
    attributes,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName
  } = mergeData;
  mergeAndOverwriteScopeData(data, "extra", extra);
  mergeAndOverwriteScopeData(data, "tags", tags);
  mergeAndOverwriteScopeData(data, "attributes", attributes);
  mergeAndOverwriteScopeData(data, "user", user);
  mergeAndOverwriteScopeData(data, "contexts", contexts);
  data.sdkProcessingMetadata = merge(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    data.level = level;
  }
  if (transactionName) {
    data.transactionName = transactionName;
  }
  if (breadcrumbs.length) {
    data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
  }
  if (fingerprint.length) {
    data.fingerprint = [...data.fingerprint, ...fingerprint];
  }
  if (eventProcessors.length) {
    data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
  }
  if (attachments.length) {
    data.attachments = [...data.attachments, ...attachments];
  }
  data.propagationContext = __spreadValues(__spreadValues({}, data.propagationContext), propagationContext);
}
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
  data[prop] = merge(data[prop], mergeVal, 1);
}
function getCombinedScopeData(isolationScope, currentScope) {
  const scopeData = getGlobalScope().getScopeData();
  isolationScope && mergeScopeData(scopeData, isolationScope.getScopeData());
  currentScope && mergeScopeData(scopeData, currentScope.getScopeData());
  return scopeData;
}
function applyDataToEvent(event, data) {
  const { extra, tags, user, contexts, level, transactionName } = data;
  if (Object.keys(extra).length) {
    event.extra = __spreadValues(__spreadValues({}, extra), event.extra);
  }
  if (Object.keys(tags).length) {
    event.tags = __spreadValues(__spreadValues({}, tags), event.tags);
  }
  if (Object.keys(user).length) {
    event.user = __spreadValues(__spreadValues({}, user), event.user);
  }
  if (Object.keys(contexts).length) {
    event.contexts = __spreadValues(__spreadValues({}, contexts), event.contexts);
  }
  if (level) {
    event.level = level;
  }
  if (transactionName && event.type !== "transaction") {
    event.transaction = transactionName;
  }
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = __spreadValues(__spreadValues({}, event.sdkProcessingMetadata), sdkProcessingMetadata);
}
function applySpanToEvent(event, span) {
  event.contexts = __spreadValues({
    trace: spanToTraceContext(span)
  }, event.contexts);
  event.sdkProcessingMetadata = __spreadValues({
    dynamicSamplingContext: getDynamicSamplingContextFromSpan(span)
  }, event.sdkProcessingMetadata);
  const rootSpan = getRootSpan(span);
  const transactionName = spanToStaticSpanJSON(rootSpan).description;
  if (transactionName && !event.transaction && event.type === "transaction") {
    event.transaction = transactionName;
  }
}
function applyFingerprintToEvent(event, fingerprint) {
  event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }
  if (!event.fingerprint.length) {
    delete event.fingerprint;
  }
}

// node_modules/@sentry/core/build/esm/utils/safeCallback.js
function safeCallback(message, fn, fallback) {
  let result;
  try {
    result = fn();
  } catch (error2) {
    return recover(message, error2, fallback);
  }
  if (isThenable(result)) {
    return result.then(void 0, (error2) => recover(message, error2, fallback));
  }
  return result;
}
function recover(message, error2, fallback) {
  DEBUG_BUILD && debug.error(message, error2);
  return fallback(error2);
}

// node_modules/@sentry/core/build/esm/tracing/spans/beforeSendSpan.js
function isStaticBeforeSendSpanCallback(callback) {
  return !!callback && typeof callback === "function" && "_static" in callback && !!callback._static;
}
function applyBeforeSendSpanCallback(span, beforeSendSpan) {
  const modifiedSpan = safeCallback(
    DEBUG_BUILD ? "The `beforeSendSpan` callback threw an error, sending the span unmodified:" : "",
    () => beforeSendSpan(span),
    () => span
  );
  return modifiedSpan || span;
}

// node_modules/@sentry/core/build/esm/tracing/spans/spanJsonToStreamedSpan.js
function spanJsonToSerializedStreamedSpan(span) {
  const streamedSpan = {
    trace_id: span.trace_id,
    span_id: span.span_id,
    parent_span_id: span.parent_span_id,
    name: span.description || "",
    start_timestamp: span.start_timestamp,
    end_timestamp: span.timestamp,
    status: !span.status || span.status === "ok" || span.status === "cancelled" ? "ok" : "error",
    is_segment: false,
    attributes: __spreadValues({}, span.data),
    links: span.links
  };
  return streamedSpanJsonToSerializedSpan(streamedSpan);
}

// node_modules/@sentry/core/build/esm/tracing/spans/scopeContextAttributes.js
function scopeContextsToSpanAttributes(contexts) {
  const attrs = {};
  const { response, profile, cloud_resource, culture, state } = contexts;
  if (response) {
    if (response.status_code != null) {
      attrs["http.response.status_code"] = response.status_code;
    }
    if (response.body_size != null) {
      attrs["http.response.body.size"] = response.body_size;
    }
  }
  if (profile) {
    if (profile.profile_id) {
      attrs["sentry.profile_id"] = profile.profile_id;
    }
    if (profile.profiler_id) {
      attrs["sentry.profiler_id"] = profile.profiler_id;
    }
  }
  if (cloud_resource) {
    for (const [key, value] of Object.entries(cloud_resource)) {
      if (value != null) {
        attrs[key] = value;
      }
    }
  }
  if (culture) {
    if (culture.locale) {
      attrs["culture.locale"] = culture.locale;
    }
    if (culture.timezone) {
      attrs["culture.timezone"] = culture.timezone;
    }
  }
  if ((state == null ? void 0 : state.state) && typeof state.state.type === "string") {
    attrs["state.type"] = state.state.type;
  }
  const angular = contexts["angular"];
  if (angular) {
    const version = angular["version"];
    if (typeof version === "string" || typeof version === "number") {
      attrs["angular.version"] = version;
    }
  }
  const react = contexts["react"];
  if (react) {
    const version = react["version"];
    if (typeof version === "string" || typeof version === "number") {
      attrs["react.version"] = version;
    }
  }
  return attrs;
}

// node_modules/@sentry/core/build/esm/tracing/spans/captureSpan.js
function captureSpan(span, client) {
  const spanJSON = spanToJSON(span);
  if (spanJSON.attributes) {
    delete spanJSON.attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  }
  const segmentSpan = INTERNAL_getSegmentSpan(span);
  const serializedSegmentSpan = spanToJSON(segmentSpan);
  const { isolationScope: spanIsolationScope, scope: spanScope } = getCapturedScopesOnSpan(span);
  const finalScopeData = getCombinedScopeData(spanIsolationScope, spanScope);
  applyCommonSpanAttributes(spanJSON, serializedSegmentSpan, client, finalScopeData);
  client.emit("preprocessSpan", spanJSON);
  if (spanJSON.is_segment) {
    applyScopeToSegmentSpan(spanJSON, finalScopeData);
    applySdkMetadataToSegmentSpan(spanJSON, client);
    client.emit("processSegmentSpan", spanJSON);
  }
  client.emit("processSpan", spanJSON);
  const { beforeSendSpan, traceLifecycle } = client.getOptions();
  const processedSpan = (
    // check for traceLifecycle here because in static lifecycle,
    // captureSpan is called for INP spans. If an unmigrated beforeSendSpan
    // callback is run on these spans, it will throw an error.
    traceLifecycle !== "static" && beforeSendSpan && !isStaticBeforeSendSpanCallback(beforeSendSpan) ? applyBeforeSendSpanCallback(spanJSON, beforeSendSpan) : spanJSON
  );
  return __spreadProps(__spreadValues({}, streamedSpanJsonToSerializedSpan(processedSpan)), {
    _segmentSpan: segmentSpan
  });
}
function applyScopeToSegmentSpan(segmentSpanJSON, scopeData) {
  const contextAttributes = scopeContextsToSpanAttributes(scopeData.contexts);
  safeSetSpanJSONAttributes(segmentSpanJSON, contextAttributes);
}
function safeSetSpanJSONAttributes(spanJSON, newAttributes) {
  const originalAttributes = spanJSON.attributes ?? (spanJSON.attributes = {});
  Object.entries(newAttributes).forEach(([key, value]) => {
    if (value != null && !(key in originalAttributes)) {
      originalAttributes[key] = value;
    }
  });
}
function applySdkMetadataToSegmentSpan(segmentSpanJSON, client) {
  const integrationNames = client.getIntegrationNames();
  if (!integrationNames.length) return;
  safeSetSpanJSONAttributes(segmentSpanJSON, {
    [Om]: integrationNames
  });
}
function commonSpanAttributes(serializedSegmentSpan, client, scopeData, includeScopeAttributes = true) {
  var _a3, _b, _c, _d, _e, _f;
  const sdk = client.getSdkMetadata();
  const { release, environment } = client.getOptions();
  return __spreadValues({
    [Fm]: "stream",
    [Rm]: serializedSegmentSpan.name,
    [wm]: serializedSegmentSpan.span_id,
    [Im]: (_a3 = sdk == null ? void 0 : sdk.sdk) == null ? void 0 : _a3.name,
    [Am]: (_b = sdk == null ? void 0 : sdk.sdk) == null ? void 0 : _b.version,
    [km]: release,
    [Md]: environment || DEFAULT_ENVIRONMENT,
    [kb]: (_c = scopeData.user) == null ? void 0 : _c.id,
    [gb]: (_d = scopeData.user) == null ? void 0 : _d.email,
    [Tb]: (_e = scopeData.user) == null ? void 0 : _e.ip_address,
    [Sb]: (_f = scopeData.user) == null ? void 0 : _f.username
  }, includeScopeAttributes ? scopeData.attributes : void 0);
}
function applyCommonSpanAttributes(spanJSON, serializedSegmentSpan, client, scopeData) {
  safeSetSpanJSONAttributes(spanJSON, commonSpanAttributes(serializedSegmentSpan, client, scopeData));
}
function captureStandaloneSpanWithStaticCallback(span, client, beforeSendSpan) {
  const spanJSON = spanToStaticSpanJSON(span);
  const segmentSpan = INTERNAL_getSegmentSpan(span);
  const serializedSegmentSpan = spanToJSON(segmentSpan);
  const { isolationScope: spanIsolationScope, scope: spanScope } = getCapturedScopesOnSpan(span);
  const finalScopeData = getCombinedScopeData(spanIsolationScope, spanScope);
  const commonAttributes = commonSpanAttributes(serializedSegmentSpan, client, finalScopeData, false);
  Object.entries(commonAttributes).forEach(([key, value]) => {
    if (value != null && !(key in spanJSON.data)) {
      spanJSON.data[key] = value;
    }
  });
  const processedSpan = applyBeforeSendSpanCallback(spanJSON, beforeSendSpan);
  return spanJsonToSerializedStreamedSpan(processedSpan);
}

// node_modules/@sentry/core/build/esm/tracing/spans/hasSpanStreamingEnabled.js
function hasSpanStreamingEnabled(client) {
  return client.getOptions().traceLifecycle === "stream";
}

// node_modules/@sentry/core/build/esm/utils/timer.js
function safeUnref(timer) {
  if (typeof timer === "object" && typeof timer.unref === "function") {
    timer.unref();
  }
  return timer;
}

// node_modules/@sentry/core/build/esm/utils/envelope.js
function createEnvelope(headers, items = []) {
  return [headers, items];
}
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]];
}
function forEachEnvelopeItem(envelope, callback) {
  const envelopeItems = envelope[1];
  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);
    if (result) {
      return true;
    }
  }
  return false;
}
function envelopeContainsItemType(envelope, types) {
  return forEachEnvelopeItem(envelope, (_3, type) => types.includes(type));
}
function encodeUTF8(input) {
  const carrier = getSentryCarrier(GLOBAL_OBJ);
  return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
function serializeEnvelope(envelope) {
  const [envHeaders, items] = envelope;
  let parts = JSON.stringify(envHeaders);
  function append(next) {
    if (typeof parts === "string") {
      parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
    } else {
      parts.push(typeof next === "string" ? encodeUTF8(next) : next);
    }
  }
  for (const item of items) {
    const [itemHeaders, payload] = item;
    append(`
${JSON.stringify(itemHeaders)}
`);
    if (typeof payload === "string" || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch {
        stringifiedPayload = JSON.stringify(normalize(payload));
      }
      append(stringifiedPayload);
    }
  }
  return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }
  return merged;
}
function createAttachmentEnvelopeItem(attachment) {
  const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
  return [
    {
      type: "attachment",
      length: buffer.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType
    },
    buffer
  ];
}
var DATA_CATEGORY_OVERRIDES = {
  sessions: "session",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  raw_security: "security",
  log: "log_item",
  metric: "trace_metric"
};
function _isOverriddenType(type) {
  return type in DATA_CATEGORY_OVERRIDES;
}
function envelopeItemTypeToDataCategory(type) {
  return _isOverriddenType(type) ? DATA_CATEGORY_OVERRIDES[type] : type;
}
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!(metadataOrEvent == null ? void 0 : metadataOrEvent.sdk)) {
    return;
  }
  const { name, version } = metadataOrEvent.sdk;
  return { name, version };
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
  var _a3;
  const dynamicSamplingContext = (_a3 = event.sdkProcessingMetadata) == null ? void 0 : _a3.dynamicSamplingContext;
  return __spreadValues(__spreadValues(__spreadValues({
    event_id: event.event_id,
    sent_at: new Date(safeDateNow()).toISOString()
  }, sdkInfo && { sdk: sdkInfo }), !!tunnel && dsn && { dsn: dsnToString(dsn) }), dynamicSamplingContext && {
    trace: dynamicSamplingContext
  });
}
function getDataCategoryByType(type) {
  return type === "replay_event" ? "replay" : type || "error";
}

// node_modules/@sentry/core/build/esm/utils/env.js
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function getSDKSource() {
  /*! __SENTRY_SDK_SOURCE__ */
  return "npm";
}

// node_modules/@sentry/core/build/esm/utils/node.js
function isNodeEnv() {
  return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}

// node_modules/@sentry/core/build/esm/utils/isBrowser.js
function isBrowser() {
  return typeof window !== "undefined" && (!isNodeEnv() || isElectronNodeRenderer());
}
function isElectronNodeRenderer() {
  const process2 = GLOBAL_OBJ.process;
  return (process2 == null ? void 0 : process2.type) === "renderer";
}

// node_modules/@sentry/core/build/esm/tracing/spans/envelope.js
function createStreamedSpanEnvelope(serializedSpans, dsc, client) {
  const options = client.getOptions();
  const dsn = client.getDsn();
  const tunnel = options.tunnel;
  const sdk = getSdkMetadataForEnvelopeHeader(options._metadata);
  const headers = __spreadValues(__spreadValues(__spreadValues({
    sent_at: new Date(safeDateNow()).toISOString()
  }, dscHasRequiredProps(dsc) && { trace: dsc }), sdk && { sdk }), !!tunnel && dsn && { dsn: dsnToString(dsn) });
  return createEnvelope(headers, [createSpanContainerItem(serializedSpans, client)]);
}
function createSpanContainerItem(serializedSpans, client) {
  const inferSetting = client.getDataCollectionOptions().userInfo ? "auto" : "never";
  return [
    { type: "span", item_count: serializedSpans.length, content_type: "application/vnd.sentry.items.span.v2+json" },
    {
      version: 2,
      ingest_settings: isBrowser() ? { infer_ip: inferSetting, infer_user_agent: inferSetting } : void 0,
      items: serializedSpans
    }
  ];
}
function dscHasRequiredProps(dsc) {
  return !!dsc.trace_id && !!dsc.public_key;
}

// node_modules/@sentry/core/build/esm/tracing/spans/estimateSize.js
function estimateSerializedSpanSizeInBytes(span) {
  let weight = 156;
  weight += span.name.length * 2;
  weight += estimateTypedAttributesSizeInBytes(span.attributes);
  if (span.links && span.links.length > 0) {
    const firstLink = span.links[0];
    const attributes = firstLink == null ? void 0 : firstLink.attributes;
    const linkWeight = 100 + (attributes ? estimateTypedAttributesSizeInBytes(attributes) : 0);
    weight += linkWeight * span.links.length;
  }
  return weight;
}

// node_modules/@sentry/core/build/esm/tracing/spans/spanBuffer.js
var MAX_SPANS_PER_ENVELOPE = 1e3;
var MAX_TRACE_WEIGHT_IN_BYTES = 5e6;
var SpanBuffer = class {
  constructor(client, options) {
    this._traceBuckets = /* @__PURE__ */ new Map();
    this._client = client;
    const { maxSpanLimit, flushInterval, maxTraceWeightInBytes } = options ?? {};
    this._maxSpanLimit = maxSpanLimit && maxSpanLimit > 0 && maxSpanLimit <= MAX_SPANS_PER_ENVELOPE ? maxSpanLimit : MAX_SPANS_PER_ENVELOPE;
    this._flushInterval = flushInterval && flushInterval > 0 ? flushInterval : 5e3;
    this._maxTraceWeight = maxTraceWeightInBytes && maxTraceWeightInBytes > 0 ? maxTraceWeightInBytes : MAX_TRACE_WEIGHT_IN_BYTES;
    this._client.on("flush", () => {
      this.drain();
    });
    this._client.on("close", () => {
      this._traceBuckets.forEach((bucket) => {
        clearTimeout(bucket.timeout);
      });
      this._traceBuckets.clear();
    });
  }
  /**
   * Add a span to the buffer.
   */
  add(spanJSON) {
    const traceId = spanJSON.trace_id;
    let bucket = this._traceBuckets.get(traceId);
    if (!bucket) {
      bucket = {
        spans: /* @__PURE__ */ new Set(),
        size: 0,
        timeout: safeUnref(
          setTimeout(() => {
            this.flush(traceId);
          }, this._flushInterval)
        )
      };
      this._traceBuckets.set(traceId, bucket);
    }
    bucket.spans.add(spanJSON);
    bucket.size += estimateSerializedSpanSizeInBytes(spanJSON);
    if (bucket.spans.size >= this._maxSpanLimit || bucket.size >= this._maxTraceWeight) {
      this.flush(traceId);
    }
  }
  /**
   * Drain and flush all buffered traces.
   */
  drain() {
    if (!this._traceBuckets.size) {
      return;
    }
    DEBUG_BUILD && debug.log(`Flushing span tree map with ${this._traceBuckets.size} traces`);
    this._traceBuckets.forEach((_3, traceId) => {
      this.flush(traceId);
    });
  }
  /**
   * Flush spans of a specific trace.
   * In contrast to {@link SpanBuffer.drain}, this method does not flush all traces, but only the one with the given traceId.
   */
  flush(traceId) {
    var _a3;
    const bucket = this._traceBuckets.get(traceId);
    if (!bucket) {
      return;
    }
    if (!bucket.spans.size) {
      this._removeTrace(traceId);
      return;
    }
    const spans = Array.from(bucket.spans);
    const segmentSpan = (_a3 = spans[0]) == null ? void 0 : _a3._segmentSpan;
    if (!segmentSpan) {
      DEBUG_BUILD && debug.warn("No segment span reference found on span JSON, cannot compute DSC");
      this._removeTrace(traceId);
      return;
    }
    const dsc = getDynamicSamplingContextFromSpan(segmentSpan);
    const cleanedSpans = spans.map((spanJSON) => {
      const _a4 = spanJSON, { _segmentSpan } = _a4, cleanSpanJSON = __objRest(_a4, ["_segmentSpan"]);
      return cleanSpanJSON;
    });
    const envelope = createStreamedSpanEnvelope(cleanedSpans, dsc, this._client);
    DEBUG_BUILD && debug.log(`Sending span envelope for trace ${traceId} with ${cleanedSpans.length} spans`);
    this._client.sendEnvelope(envelope).then(null, (reason) => {
      DEBUG_BUILD && debug.error("Error while sending streamed span envelope:", reason);
    });
    this._removeTrace(traceId);
  }
  _removeTrace(traceId) {
    const bucket = this._traceBuckets.get(traceId);
    if (bucket) {
      clearTimeout(bucket.timeout);
    }
    this._traceBuckets.delete(traceId);
  }
};

// node_modules/@sentry/core/build/esm/integrations/spanStreaming.js
var INTEGRATION_NAME = "SpanStreaming";
var spanStreamingIntegration = defineIntegration((options = {}) => {
  const flushOnSegmentEnd = options.flushOnSegmentEnd ?? true;
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      if (!hasSpanStreamingEnabled(client)) {
        DEBUG_BUILD && debug.log(`[${INTEGRATION_NAME}] \`traceLifecycle\` is "static", skipping setup.`);
        return;
      }
      const buffer = new SpanBuffer(client);
      client.on("afterSpanEnd", (span) => {
        if (!spanIsSampled(span)) {
          return;
        }
        buffer.add(captureSpan(span, client));
      });
      client.on("flushTraceSpans", (traceId) => {
        buffer.flush(traceId);
      });
      if (flushOnSegmentEnd) {
        client.on("afterSegmentSpanEnd", (segmentSpan) => {
          const traceId = segmentSpan.spanContext().traceId;
          safeUnref(
            setTimeout(() => {
              buffer.flush(traceId);
            }, 500)
          );
        });
      }
    }
  };
});

// node_modules/@sentry/core/build/esm/utils/errorSpanAttribution.js
var escapedSpanTraceContexts = /* @__PURE__ */ new WeakMap();
function toWeakMapKey(error2) {
  return isPrimitive(error2) ? void 0 : error2;
}
function applyEscapedErrorSpanToEvent(event, hint, scope) {
  var _a3;
  const key = toWeakMapKey(hint.originalException);
  const traceContext = key && escapedSpanTraceContexts.get(key);
  if (!traceContext) {
    return;
  }
  const eventTraceContext = (_a3 = event.contexts) == null ? void 0 : _a3.trace;
  const eventTraceId = (eventTraceContext == null ? void 0 : eventTraceContext.trace_id) ?? (scope && getTraceContextFromScope(scope).trace_id);
  if (eventTraceId !== traceContext.trace_id) {
    return;
  }
  event.contexts = __spreadProps(__spreadValues({}, event.contexts), {
    trace: __spreadValues(__spreadValues({}, eventTraceContext), traceContext)
  });
}

// node_modules/@sentry/core/build/esm/tracing/logSpans.js
function logSpanStart(span) {
  if (!DEBUG_BUILD) return;
  const {
    description = "< unknown name >",
    op = "< unknown op >",
    parent_span_id: parentSpanId
  } = spanToStaticSpanJSON(span);
  const { spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
  const infoParts = [`op: ${op}`, `name: ${description}`, `ID: ${spanId}`];
  if (parentSpanId) {
    infoParts.push(`parent ID: ${parentSpanId}`);
  }
  if (!isRootSpan) {
    const { op: op2, description: description2 } = spanToStaticSpanJSON(rootSpan);
    infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
    if (op2) {
      infoParts.push(`root op: ${op2}`);
    }
    if (description2) {
      infoParts.push(`root description: ${description2}`);
    }
  }
  debug.log(`${header}
  ${infoParts.join("\n  ")}`);
}
function logSpanEnd(span) {
  if (!DEBUG_BUILD) return;
  const { description = "< unknown name >", op = "< unknown op >" } = spanToStaticSpanJSON(span);
  const { spanId } = span.spanContext();
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? "root " : ""}span "${description}" with ID ${spanId}`;
  debug.log(msg);
}

// node_modules/@sentry/core/build/esm/tracing/sampling.js
function sampleSpan(options, samplingContext, sampleRand) {
  if (!hasSpansEnabled(options)) {
    return [false];
  }
  const resolved = resolveSampleRate(options, samplingContext);
  if (!resolved) {
    return [false, void 0, void 0, "callback_error"];
  }
  const [sampleRate, localSampleRateWasApplied] = resolved;
  const parsedSampleRate = parseSampleRate(sampleRate);
  if (parsedSampleRate === void 0) {
    DEBUG_BUILD && debug.warn(
      `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        sampleRate
      )} of type ${JSON.stringify(typeof sampleRate)}.`
    );
    return [false];
  }
  if (!parsedSampleRate) {
    DEBUG_BUILD && debug.log(
      `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
    );
    return [false, parsedSampleRate, localSampleRateWasApplied];
  }
  const shouldSample = sampleRand < parsedSampleRate;
  if (!shouldSample) {
    DEBUG_BUILD && debug.log(
      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
        sampleRate
      )})`
    );
  }
  return [shouldSample, parsedSampleRate, localSampleRateWasApplied];
}
function resolveSampleRate(options, samplingContext) {
  const { tracesSampler, tracesSampleRate } = options;
  if (typeof tracesSampler === "function") {
    const samplerResult = safeCallback(
      DEBUG_BUILD ? "The `tracesSampler` callback threw an error, falling back to the parent sampling decision or `tracesSampleRate`:" : "",
      () => [
        tracesSampler(__spreadProps(__spreadValues({}, samplingContext), {
          inheritOrSampleWith: (fallbackSampleRate) => {
            if (typeof samplingContext.parentSampleRate === "number") {
              return samplingContext.parentSampleRate;
            }
            if (typeof samplingContext.parentSampled === "boolean") {
              return Number(samplingContext.parentSampled);
            }
            return fallbackSampleRate;
          }
        })),
        true
      ],
      () => void 0
    );
    if (samplerResult) {
      return samplerResult;
    }
  }
  if (samplingContext.parentSampled !== void 0) {
    return [samplingContext.parentSampled];
  }
  if (typeof tracesSampleRate !== "undefined") {
    return [tracesSampleRate, true];
  }
  return void 0;
}

// node_modules/@sentry/core/build/esm/tracing/measurement.js
function setMeasurement(name, value, unit, activeSpan = getActiveSpan()) {
  const rootSpan = activeSpan && getRootSpan(activeSpan);
  if (rootSpan) {
    DEBUG_BUILD && debug.log(`[Measurement] Setting measurement on root span: ${name} = ${value} ${unit}`);
    rootSpan.addEvent(name, {
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit
    });
  }
}
function timedEventsToMeasurements(events) {
  if (!events || events.length === 0) {
    return void 0;
  }
  const measurements = {};
  events.forEach((event) => {
    const attributes = event.attributes || {};
    const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
    const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
    if (typeof unit === "string" && typeof value === "number") {
      measurements[event.name] = { value, unit };
    }
  });
  return measurements;
}

// node_modules/@sentry/core/build/esm/tracing/segmentSpanCaptureStrategy.js
function getSegmentSpanCaptureStrategy() {
  return getSentryCarrier(getMainCarrier()).segmentSpanCaptureStrategy;
}

// node_modules/@sentry/core/build/esm/tracing/sentrySpan.js
var MAX_SPAN_COUNT = 1e3;
var SentrySpan = class {
  /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    if (spanContext.startTimestamp) {
      this._startTime = spanContext.startTimestamp;
    } else {
      this._startTime = timestampInSeconds();
      this._startPerformanceNow = safePerformanceNow();
    }
    this._links = spanContext.links;
    this._attributes = {};
    this.setAttributes(__spreadValues({
      [gm]: "manual",
      [mm]: spanContext.op
    }, spanContext.attributes));
    this._name = spanContext.name;
    if (spanContext.parentSpanId) {
      this._parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this._sampled = spanContext.sampled;
    }
    this._events = [];
    this._isStandaloneSpan = spanContext.isStandalone;
  }
  /** @inheritDoc */
  addLink(link) {
    if (this._frozen) {
      return this;
    }
    if (this._links) {
      this._links.push(link);
    } else {
      this._links = [link];
    }
    return this;
  }
  /** @inheritDoc */
  addLinks(links) {
    if (this._frozen) {
      return this;
    }
    if (this._links) {
      this._links.push(...links);
    } else {
      this._links = links;
    }
    return this;
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
  /** @inheritdoc */
  spanContext() {
    const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
    return {
      spanId,
      traceId,
      traceFlags: sampled ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  setAttribute(key, value) {
    if (this._frozen) {
      return this;
    }
    if (key === Nm && value !== void 0 && !spanIsSegment(this)) {
      DEBUG_BUILD && debug.warn("[Tracing] Ignoring name source on a child span: this attribute is only valid on the root span.");
      return this;
    }
    if (value === void 0) {
      delete this._attributes[key];
    } else {
      this._attributes[key] = value;
    }
    return this;
  }
  /** @inheritdoc */
  setAttributes(attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */
  updateStartTime(timeInput) {
    if (this._frozen) {
      return;
    }
    this._startTime = spanTimeInputToSeconds(timeInput);
    this._startPerformanceNow = void 0;
  }
  /**
   * @inheritDoc
   */
  setStatus(value) {
    if (this._frozen) {
      return this;
    }
    this._status = value;
    return this;
  }
  /**
   * @inheritDoc
   */
  updateName(name) {
    if (this._frozen) {
      return this;
    }
    this._name = name;
    INTERNAL_setSegmentNameSourceIfSegment(this, "custom");
    return this;
  }
  /** @inheritdoc */
  end(endTimestamp) {
    if (this._endTime) {
      return;
    }
    this._endTime = endTimestamp == null ? this._getEndTimeFromDuration() : spanTimeInputToSeconds(endTimestamp);
    logSpanEnd(this);
    this._onSpanEnded();
    this._frozen = spanIsTracerProviderSpan(this);
  }
  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getStaticSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[mm],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[gm],
      profile_id: this._attributes[hm],
      exclusive_time: this._attributes[Vd],
      measurements: timedEventsToMeasurements(this._events),
      links: convertSpanLinksForEnvelope(this._links)
    };
  }
  /**
   * Get {@link StreamedSpanJSON} representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getSpanJSON() {
    return {
      name: this._name ?? "",
      span_id: this._spanId,
      trace_id: this._traceId,
      parent_span_id: this._parentSpanId,
      start_timestamp: this._startTime,
      end_timestamp: this._endTime,
      is_segment: spanIsSegment(this),
      status: getSimpleStatus(this._status),
      attributes: addStatusMessageAttribute(this._attributes, this._status),
      links: getStreamedSpanLinks(this._links)
    };
  }
  /** @inheritdoc */
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  /**
   * @inheritdoc
   */
  addEvent(name, attributesOrStartTime, startTime) {
    if (this._frozen) {
      return this;
    }
    DEBUG_BUILD && debug.log("[Tracing] Adding an event to span:", name);
    const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
    const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
    const event = {
      name,
      time: spanTimeInputToSeconds(time),
      attributes
    };
    this._events.push(event);
    return this;
  }
  /**
   * Whether this span is sent on its own (as a v2 streamed span) rather than as part of a
   * transaction. Used internally; see `_isStandaloneSpan`.
   * @internal
   */
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  /**
   * Returns the start time plus the `performance.now()` time since the span started.
   *
   * This way, the duration is correct even if the time origin was corrected while the span was running (e.g. after the
   * device slept), and it can never be negative.
   */
  _getEndTimeFromDuration() {
    const performanceNow = safePerformanceNow();
    if (this._startPerformanceNow == null || performanceNow == null) {
      return timestampInSeconds();
    }
    return this._startTime + (performanceNow - this._startPerformanceNow) / 1e3;
  }
  /** Emit `spanEnd` when the span is ended. */
  _onSpanEnded() {
    const client = getClient();
    client == null ? void 0 : client.emit("spanEnd", this);
    if (this._isStandaloneSpan) {
      if (!client) return;
      if (this._sampled) {
        sendStandaloneSpan(this, client);
        return;
      }
      DEBUG_BUILD && debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
      return;
    }
    client == null ? void 0 : client.emit("afterSpanEnd", this);
    const rootSpan = getRootSpan(this);
    if (rootSpan !== this) {
      const strategy2 = getSegmentSpanCaptureStrategy();
      if (strategy2) {
        const scope2 = getCapturedScopesOnSpan(this).scope || getCurrentScope();
        strategy2.onChildSpanEnded(this, rootSpan, (options) => this._convertSpanToTransaction(options), scope2);
      }
      return;
    }
    if (client && hasSpanStreamingEnabled(client)) {
      client.emit("afterSegmentSpanEnd", this);
      return;
    }
    const scope = getCapturedScopesOnSpan(this).scope || getCurrentScope();
    const strategy = getSegmentSpanCaptureStrategy();
    if (strategy) {
      strategy.onSegmentSpanEnded((options) => this._convertSpanToTransaction(options), scope);
    } else {
      const transactionEvent = this._convertSpanToTransaction();
      if (transactionEvent) {
        scope.captureEvent(transactionEvent);
      }
    }
  }
  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
  _convertSpanToTransaction(options = {}) {
    var _a3, _b, _c, _d;
    if (!isFullFinishedSpan(spanToStaticSpanJSON(this))) {
      return void 0;
    }
    if (!this._name) {
      DEBUG_BUILD && debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this._name = "<unlabeled transaction>";
    }
    const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = getCapturedScopesOnSpan(this);
    const normalizedRequest = (_a3 = capturedSpanScope == null ? void 0 : capturedSpanScope.getScopeData().sdkProcessingMetadata) == null ? void 0 : _a3.normalizedRequest;
    if (this._sampled !== true) {
      return void 0;
    }
    (_b = options.onSpanCaptured) == null ? void 0 : _b.call(options, this);
    const spans = [];
    let droppedUnfinishedSpanCount = 0;
    for (const descendant of getSpanDescendants(this)) {
      if (descendant === this || isStandaloneSpan(descendant) || ((_c = options.isSpanAlreadyCaptured) == null ? void 0 : _c.call(options, descendant))) {
        continue;
      }
      const spanJSON = spanToStaticSpanJSON(descendant);
      if (!isFullFinishedSpan(spanJSON)) {
        if (!options.onSpanCaptured) {
          droppedUnfinishedSpanCount++;
        }
        continue;
      }
      (_d = options.onSpanCaptured) == null ? void 0 : _d.call(options, descendant);
      spans.push(spanJSON);
    }
    const client = (capturedSpanScope == null ? void 0 : capturedSpanScope.getClient()) || getClient();
    if (droppedUnfinishedSpanCount) {
      client == null ? void 0 : client.recordDroppedEvent("invalid", "span", droppedUnfinishedSpanCount);
    }
    if (spans.length > MAX_SPAN_COUNT) {
      client == null ? void 0 : client.recordDroppedEvent("buffer_overflow", "span", spans.length - MAX_SPAN_COUNT);
    }
    const source = this._attributes[Nm];
    delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    let hasGenAiSpans = false;
    spans.forEach((span) => {
      var _a4;
      delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
      if ((_a4 = span.op) == null ? void 0 : _a4.startsWith("gen_ai.")) {
        hasGenAiSpans = true;
      }
    });
    const transaction = __spreadValues({
      contexts: {
        trace: spanToTransactionTraceContext(this)
      },
      spans: (
        // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
        // we do not use spans anymore after this point
        spans.length > MAX_SPAN_COUNT ? spans.sort((a2, b3) => a2.start_timestamp - b3.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans
      ),
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope,
        capturedSpanIsolationScope,
        dynamicSamplingContext: getDynamicSamplingContextFromSpan(this),
        hasGenAiSpans
      },
      request: normalizedRequest
    }, source && {
      transaction_info: {
        source
      }
    });
    const measurements = timedEventsToMeasurements(this._events);
    const hasMeasurements = measurements && Object.keys(measurements).length;
    if (hasMeasurements) {
      DEBUG_BUILD && debug.log(
        "[Measurements] Adding measurements to transaction event",
        JSON.stringify(measurements, void 0, 2)
      );
      transaction.measurements = measurements;
    }
    return transaction;
  }
};
function isSpanTimeInput(value) {
  return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
function isFullFinishedSpan(input) {
  return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
function isStandaloneSpan(span) {
  return span instanceof SentrySpan && span.isStandaloneSpan();
}
function sendStandaloneSpan(span, client) {
  const { beforeSendSpan, traceLifecycle } = client.getOptions();
  if (traceLifecycle === "static" && isStaticBeforeSendSpanCallback(beforeSendSpan)) {
    const serializedSpan2 = captureStandaloneSpanWithStaticCallback(span, client, beforeSendSpan);
    const dsc2 = getDynamicSamplingContextFromSpan(span);
    client.sendEnvelope(createStreamedSpanEnvelope([serializedSpan2], dsc2, client));
    return;
  }
  const _a3 = captureSpan(span, client), { _segmentSpan } = _a3, serializedSpan = __objRest(_a3, ["_segmentSpan"]);
  const dsc = getDynamicSamplingContextFromSpan(_segmentSpan);
  client.sendEnvelope(createStreamedSpanEnvelope([serializedSpan], dsc, client));
}

// node_modules/@sentry/core/build/esm/tracing/trace.js
function startInactiveSpan(options) {
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
  const wrapper = customScope ? (callback) => withScope2(customScope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan(customParentSpan, callback) : (callback) => callback();
  return wrapper(() => {
    const scope = getCurrentScope();
    const parentSpan = getParentSpan(customScope ?? scope, customParentSpan);
    const client = getClient();
    const missingRequiredParent = options.onlyIfParent && !parentSpan;
    if (missingRequiredParent) {
      return startMissingRequiredParentSpan(scope, client);
    }
    return createChildOrRootSpan({
      parentSpan,
      spanArguments,
      forceTransaction,
      scope
    });
  });
}
function withActiveSpan(span, callback) {
  const acs = getAcs();
  if (acs.withActiveSpan) {
    return acs.withActiveSpan(span, callback);
  }
  return withScope2((scope) => {
    _setSpanForScope(scope, span || void 0);
    return callback(scope);
  });
}
function isTracingSuppressed(scope = getCurrentScope()) {
  const acs = getAcs();
  if (acs.isTracingSuppressed) {
    return acs.isTracingSuppressed(scope);
  }
  return scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] === true;
}
function startMissingRequiredParentSpan(scope, client) {
  client == null ? void 0 : client.recordDroppedEvent("no_parent_span", "span");
  const span = new SentryNonRecordingSpan({
    dropReason: "no_parent_span",
    traceId: scope.getPropagationContext().traceId
  });
  setCapturedScopesOnSpan(span, scope, getIsolationScope());
  return span;
}
function createChildOrRootSpan({
  parentSpan: resolvedParentSpan,
  spanArguments,
  forceTransaction,
  scope: currentScope
}) {
  var _a3;
  const isolationScope = getIsolationScope();
  const spanScope = {
    scope: currentScope,
    parentSpan: resolvedParentSpan
  };
  (_a3 = getClient()) == null ? void 0 : _a3.emit("prepareSpanScope", spanScope);
  const { scope, parentSpan } = spanScope;
  if (!hasSpansEnabled()) {
    const scopePropagationContext = scope.getPropagationContext();
    const traceId = parentSpan ? parentSpan.spanContext().traceId : scopePropagationContext.traceId;
    const span2 = new SentryNonRecordingSpan({ traceId });
    if (parentSpan && !forceTransaction) {
      addChildSpanToSpan(parentSpan, span2);
    }
    setCapturedScopesOnSpan(span2, scope, isolationScope);
    return span2;
  }
  const client = getClient();
  if (_shouldIgnoreStreamedSpan(client, spanArguments)) {
    if (!isTracingSuppressed(scope)) {
      client == null ? void 0 : client.recordDroppedEvent("ignored", "span");
    }
    const ignoredSpan = new SentryNonRecordingSpan({
      dropReason: "ignored",
      traceId: (parentSpan == null ? void 0 : parentSpan.spanContext().traceId) ?? scope.getPropagationContext().traceId
    });
    if (parentSpan && !forceTransaction) {
      addChildSpanToSpan(parentSpan, ignoredSpan);
    }
    setCapturedScopesOnSpan(ignoredSpan, scope, isolationScope);
    return ignoredSpan;
  }
  let span;
  if (parentSpan && !forceTransaction) {
    span = _startChildSpan(parentSpan, scope, spanArguments, isolationScope);
    addChildSpanToSpan(parentSpan, span);
  } else if (parentSpan) {
    const dsc = getDynamicSamplingContextFromSpan(parentSpan);
    const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
    const parentSampled = spanIsSampled(parentSpan);
    span = _startRootSpan(
      __spreadValues({
        traceId,
        parentSpanId
      }, spanArguments),
      scope,
      isolationScope,
      parentSampled
    );
    freezeDscOnSpan(span, dsc);
  } else {
    const { traceId, dsc, parentSpanId, sampled: parentSampled, sampleRand } = scope.getPropagationContext();
    span = _startRootSpan(
      __spreadValues({
        traceId,
        parentSpanId
      }, spanArguments),
      scope,
      isolationScope,
      parentSampled
    );
    if (dsc) {
      const dscWithSampleRand = Object.keys(dsc).length === 0 && sampleRand !== void 0 ? { sample_rand: sampleRand.toString() } : dsc;
      freezeDscOnSpan(span, dscWithSampleRand);
    }
  }
  logSpanStart(span);
  return span;
}
function parseSentrySpanArguments(options) {
  var _a3;
  const initialCtx = __spreadValues({
    // TODO(standalone): remove once the static (transaction) trace lifecycle is dropped.
    // oxlint-disable-next-line typescript/no-deprecated
    isStandalone: (_a3 = options.experimental) == null ? void 0 : _a3.standalone
  }, options);
  if (options.op) {
    initialCtx.attributes = __spreadValues({
      [mm]: options.op
    }, options.attributes);
  }
  if (options.startTime) {
    const ctx = __spreadValues({}, initialCtx);
    ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
    delete ctx.startTime;
    return ctx;
  }
  return initialCtx;
}
function getAcs() {
  const carrier = getMainCarrier();
  return getAsyncContextStrategy(carrier);
}
function _startRootSpan(spanArguments, scope, isolationScope, parentSampled) {
  var _a3;
  const client = getClient();
  const options = (client == null ? void 0 : client.getOptions()) || {};
  const { name = "" } = spanArguments;
  const mutableSpanSamplingData = { spanAttributes: __spreadValues({}, spanArguments.attributes), spanName: name, parentSampled };
  client == null ? void 0 : client.emit("beforeSampling", mutableSpanSamplingData, { decision: false });
  const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
  const finalAttributes = mutableSpanSamplingData.spanAttributes;
  const currentPropagationContext = scope.getPropagationContext();
  const _isTracingSuppressed = isTracingSuppressed(scope);
  const [sampled, sampleRate, localSampleRateWasApplied, dropReason] = _isTracingSuppressed ? [false] : sampleSpan(
    options,
    {
      name,
      parentSampled: finalParentSampled,
      attributes: finalAttributes,
      normalizedRequest: isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest,
      parentSampleRate: parseSampleRate((_a3 = currentPropagationContext.dsc) == null ? void 0 : _a3.sample_rate)
    },
    currentPropagationContext.sampleRand
  );
  const rootSpan = new SentrySpan(__spreadProps(__spreadValues({}, spanArguments), {
    attributes: __spreadValues({
      [Nm]: "custom",
      [SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate !== void 0 && localSampleRateWasApplied ? sampleRate : void 0
    }, finalAttributes),
    sampled
  }));
  if (!sampled && client && !_isTracingSuppressed) {
    DEBUG_BUILD && debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    const outcomeReason = dropReason || "sample_rate";
    if (!hasSpanStreamingEnabled(client) && !spanArguments.isStandalone) {
      client.recordDroppedEvent(outcomeReason, "transaction");
    }
    client.recordDroppedEvent(outcomeReason, "span");
  }
  setCapturedScopesOnSpan(rootSpan, scope, isolationScope);
  if (client) {
    client.emit("spanStart", rootSpan);
  }
  return rootSpan;
}
function _startChildSpan(parentSpan, scope, spanArguments, isolationScope) {
  const { spanId, traceId } = parentSpan.spanContext();
  const _isTracingSuppressed = isTracingSuppressed(scope);
  const sampled = _isTracingSuppressed ? false : spanIsSampled(parentSpan);
  const childSpan = sampled ? new SentrySpan(__spreadProps(__spreadValues({}, spanArguments), {
    parentSpanId: spanId,
    traceId,
    sampled
  })) : new SentryNonRecordingSpan({ traceId });
  addChildSpanToSpan(parentSpan, childSpan);
  setCapturedScopesOnSpan(childSpan, scope, isolationScope);
  const client = getClient();
  if (!client) {
    return childSpan;
  }
  if (spanIsNonRecordingSpan(childSpan)) {
    if (spanIsNonRecordingSpan(parentSpan) && parentSpan.dropReason) {
      childSpan.dropReason = parentSpan.dropReason;
      client.recordDroppedEvent(parentSpan.dropReason, "span");
    } else if (!_isTracingSuppressed) {
      childSpan.dropReason = "sample_rate";
      client.recordDroppedEvent("sample_rate", "span");
    }
  }
  client.emit("spanStart", childSpan);
  return childSpan;
}
function getParentSpan(scope, customParentSpan) {
  if (customParentSpan) {
    return customParentSpan;
  }
  if (customParentSpan === null) {
    return void 0;
  }
  const span = getActiveSpan(scope);
  if (!span) {
    return void 0;
  }
  const client = getClient();
  const options = client ? client.getOptions() : {};
  if (options.parentSpanIsAlwaysRootSpan) {
    return getRootSpan(span);
  }
  return span;
}
function _shouldIgnoreStreamedSpan(client, spanArguments) {
  var _a3;
  const ignoreSpans = client == null ? void 0 : client.getOptions().ignoreSpans;
  if (!client || !hasSpanStreamingEnabled(client) || !(ignoreSpans == null ? void 0 : ignoreSpans.length)) {
    return false;
  }
  return shouldIgnoreSpan(
    {
      description: spanArguments.name || "",
      op: ((_a3 = spanArguments.attributes) == null ? void 0 : _a3[mm]) || spanArguments.op,
      attributes: spanArguments.attributes
    },
    ignoreSpans
  );
}
function spanIsIgnored(span) {
  return spanIsNonRecordingSpan(span) && span.dropReason === "ignored";
}

// node_modules/@sentry/core/build/esm/tracing/browserSpanApi.js
var clientsWithIntegration = /* @__PURE__ */ new WeakSet();
function _INTERNAL_ensureBrowserSpanStreaming(client = getClient()) {
  if (!client || clientsWithIntegration.has(client) || !hasSpanStreamingEnabled(client)) {
    return;
  }
  clientsWithIntegration.add(client);
  client.addIntegration(spanStreamingIntegration());
}
function startInactiveSpan2(options) {
  _INTERNAL_ensureBrowserSpanStreaming();
  return startInactiveSpan(options);
}

// node_modules/@sentry/core/build/esm/tracing/idleSpan.js
var TRACING_DEFAULTS = {
  idleTimeout: 1e3,
  finalTimeout: 3e4,
  childSpanTimeout: 15e3
};
var FINISH_REASON_HEARTBEAT_FAILED = "heartbeatFailed";
var FINISH_REASON_IDLE_TIMEOUT = "idleTimeout";
var FINISH_REASON_FINAL_TIMEOUT = "finalTimeout";
var FINISH_REASON_EXTERNAL_FINISH = "externalFinish";
function startIdleSpan(startSpanOptions, options = {}) {
  const client = getClient();
  _INTERNAL_ensureBrowserSpanStreaming(client);
  const activities = /* @__PURE__ */ new Map();
  let _finished = false;
  let _idleTimeoutID;
  let _childSpanTimeoutID;
  let _finishReason = FINISH_REASON_EXTERNAL_FINISH;
  let _autoFinishAllowed = !options.disableAutoFinish;
  const _cleanupHooks = [];
  const {
    idleTimeout = TRACING_DEFAULTS.idleTimeout,
    finalTimeout = TRACING_DEFAULTS.finalTimeout,
    childSpanTimeout = TRACING_DEFAULTS.childSpanTimeout,
    trimIdleSpanEndTimestamp = true
  } = options;
  const scope = getCurrentScope();
  if (!client || !hasSpansEnabled()) {
    const span2 = new SentryNonRecordingSpan({ traceId: scope.getPropagationContext().traceId });
    setCapturedScopesOnSpan(span2, scope, getIsolationScope());
    return span2;
  }
  const previousActiveSpan = getActiveSpan();
  const span = startInactiveSpan(startSpanOptions);
  _setSpanForScope(getCurrentScope(), span);
  DEBUG_BUILD && debug.log("[Tracing] Started span is an idle span");
  span.end = new Proxy(span.end, {
    apply(target, thisArg, args) {
      client.emit("beforeIdleSpanEnd", span);
      if (spanIsNonRecordingSpan(thisArg)) {
        return;
      }
      const [definedEndTimestamp, ...rest] = args;
      const timestamp = definedEndTimestamp || timestampInSeconds();
      const spanEndTimestamp = spanTimeInputToSeconds(timestamp);
      const spans = getSpanDescendants(span).filter((child) => child !== span);
      const spanJson = spanToStaticSpanJSON(span);
      if (!spans.length || !trimIdleSpanEndTimestamp) {
        onIdleSpanEnded(spanEndTimestamp);
        return Reflect.apply(target, thisArg, [spanEndTimestamp, ...rest]);
      }
      const ignoreSpans = client.getOptions().ignoreSpans;
      const latestSpanEndTimestamp = spans == null ? void 0 : spans.reduce((acc, current) => {
        const currentSpanJson = spanToStaticSpanJSON(current);
        if (!currentSpanJson.timestamp) {
          return acc;
        }
        if (ignoreSpans && shouldIgnoreSpan(
          { description: currentSpanJson.description, op: currentSpanJson.op, attributes: currentSpanJson.data },
          ignoreSpans
        )) {
          return acc;
        }
        return acc ? Math.max(acc, currentSpanJson.timestamp) : currentSpanJson.timestamp;
      }, void 0);
      const spanStartTimestamp = spanJson.start_timestamp;
      const endTimestamp = Math.min(
        spanStartTimestamp ? spanStartTimestamp + finalTimeout / 1e3 : Infinity,
        Math.max(spanStartTimestamp || -Infinity, Math.min(spanEndTimestamp, latestSpanEndTimestamp || Infinity))
      );
      onIdleSpanEnded(endTimestamp);
      return Reflect.apply(target, thisArg, [endTimestamp, ...rest]);
    }
  });
  function _cancelIdleTimeout() {
    if (_idleTimeoutID) {
      clearTimeout(_idleTimeoutID);
      _idleTimeoutID = void 0;
    }
  }
  function _cancelChildSpanTimeout() {
    if (_childSpanTimeoutID) {
      clearTimeout(_childSpanTimeoutID);
      _childSpanTimeoutID = void 0;
    }
  }
  function _restartIdleTimeout(endTimestamp) {
    _cancelIdleTimeout();
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && activities.size === 0 && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_IDLE_TIMEOUT;
        span.end(endTimestamp);
      }
    }, idleTimeout);
  }
  function _restartChildSpanTimeout(endTimestamp) {
    _cancelChildSpanTimeout();
    _childSpanTimeoutID = setTimeout(() => {
      if (!_finished && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_HEARTBEAT_FAILED;
        span.end(endTimestamp);
      }
    }, childSpanTimeout);
  }
  function _pushActivity(spanId) {
    _cancelIdleTimeout();
    activities.set(spanId, true);
    const endTimestamp = timestampInSeconds();
    _restartChildSpanTimeout(endTimestamp + childSpanTimeout / 1e3);
  }
  function _popActivity(spanId) {
    if (activities.has(spanId)) {
      activities.delete(spanId);
    }
    if (activities.size === 0) {
      const endTimestamp = timestampInSeconds();
      _restartIdleTimeout(endTimestamp + idleTimeout / 1e3);
      _cancelChildSpanTimeout();
    }
  }
  function onIdleSpanEnded(endTimestamp) {
    _finished = true;
    activities.clear();
    _cleanupHooks.forEach((cleanup) => cleanup());
    _setSpanForScope(scope, previousActiveSpan);
    const spanJSON = spanToStaticSpanJSON(span);
    const { start_timestamp: startTimestamp } = spanJSON;
    if (!startTimestamp) {
      return;
    }
    const attributes = spanJSON.data;
    if (!attributes[Qd]) {
      span.setAttribute(Qd, _finishReason);
    }
    const currentStatus = spanJSON.status;
    if (!currentStatus || currentStatus === "unknown") {
      span.setStatus({ code: SPAN_STATUS_OK });
    }
    debug.log(`[Tracing] Idle span "${spanJSON.op}" finished`);
    const childSpans = getSpanDescendants(span).filter((child) => child !== span);
    let discardedSpans = 0;
    childSpans.forEach((childSpan) => {
      if (childSpan.isRecording()) {
        childSpan.setStatus({ code: SPAN_STATUS_ERROR, message: "cancelled" });
        childSpan.end(endTimestamp);
        DEBUG_BUILD && debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(childSpan, void 0, 2));
      }
      const childSpanJSON = spanToStaticSpanJSON(childSpan);
      const { timestamp: childEndTimestamp = 0, start_timestamp: childStartTimestamp = 0 } = childSpanJSON;
      const spanStartedBeforeIdleSpanEnd = childStartTimestamp <= endTimestamp;
      const timeoutWithMarginOfError = (finalTimeout + idleTimeout) / 1e3;
      const spanEndedBeforeFinalTimeout = childEndTimestamp - childStartTimestamp <= timeoutWithMarginOfError;
      if (DEBUG_BUILD) {
        const stringifiedSpan = JSON.stringify(childSpan, void 0, 2);
        if (!spanStartedBeforeIdleSpanEnd) {
          debug.log("[Tracing] Discarding span since it happened after idle span was finished", stringifiedSpan);
        } else if (!spanEndedBeforeFinalTimeout) {
          debug.log("[Tracing] Discarding span since it finished after idle span final timeout", stringifiedSpan);
        }
      }
      if (!spanEndedBeforeFinalTimeout || !spanStartedBeforeIdleSpanEnd) {
        removeChildSpanFromSpan(span, childSpan);
        discardedSpans++;
      }
    });
    if (discardedSpans > 0) {
      span.setAttribute("sentry.idle_span_discarded_spans", discardedSpans);
    }
  }
  _cleanupHooks.push(
    client.on("spanStart", (startedSpan) => {
      if (_finished || startedSpan === span || !!spanToJSON(startedSpan).end_timestamp || startedSpan instanceof SentrySpan && startedSpan.isStandaloneSpan()) {
        return;
      }
      const allSpans = getSpanDescendants(span);
      if (allSpans.includes(startedSpan)) {
        _pushActivity(startedSpan.spanContext().spanId);
      }
    })
  );
  _cleanupHooks.push(
    client.on("spanEnd", (endedSpan) => {
      if (_finished) {
        return;
      }
      _popActivity(endedSpan.spanContext().spanId);
    })
  );
  _cleanupHooks.push(
    client.on("idleSpanEnableAutoFinish", (spanToAllowAutoFinish) => {
      if (spanToAllowAutoFinish === span) {
        _autoFinishAllowed = true;
        _restartIdleTimeout();
        if (activities.size) {
          _restartChildSpanTimeout();
        }
      }
    })
  );
  if (!options.disableAutoFinish) {
    _restartIdleTimeout();
  }
  setTimeout(() => {
    if (!_finished) {
      span.setStatus({ code: SPAN_STATUS_ERROR, message: "deadline_exceeded" });
      _finishReason = FINISH_REASON_FINAL_TIMEOUT;
      span.end();
    }
  }, finalTimeout);
  return span;
}

// node_modules/@sentry/core/build/esm/utils/debounce.js
function debounce(func, wait, options) {
  let callbackReturnValue;
  let timerId;
  let maxTimerId;
  const maxWait = (options == null ? void 0 : options.maxWait) ? Math.max(options.maxWait, wait) : 0;
  const setTimeoutImpl = (options == null ? void 0 : options.setTimeoutImpl) || setTimeout;
  function invokeFunc() {
    cancelTimers();
    callbackReturnValue = func();
    return callbackReturnValue;
  }
  function cancelTimers() {
    timerId !== void 0 && clearTimeout(timerId);
    maxTimerId !== void 0 && clearTimeout(maxTimerId);
    timerId = maxTimerId = void 0;
  }
  function flush2() {
    if (timerId !== void 0 || maxTimerId !== void 0) {
      return invokeFunc();
    }
    return callbackReturnValue;
  }
  function debounced() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeoutImpl(invokeFunc, wait);
    if (maxWait && maxTimerId === void 0) {
      maxTimerId = setTimeoutImpl(invokeFunc, maxWait);
    }
    return callbackReturnValue;
  }
  debounced.cancel = cancelTimers;
  debounced.flush = flush2;
  return debounced;
}

// node_modules/@sentry/conventions/dist/op.mjs
var e = "pageload";
var E = "navigation";
var _ = "navigation.redirect";
var o = "resource.other";
var s = "browser.paint";
var S = "browser.unload_event";
var l = "browser.redirect";
var L = "browser.dom_content_loaded_event";
var p = "browser.load_event";
var P = "browser.connect";
var d = "browser.tls_ssl";
var D = "browser.cache";
var b = "browser.dns";
var B = "browser.request";
var m = "browser.response";
var V = "ui.mount";
var Q = "ui.long_task";
var W = "ui.long_animation_frame";
var h = "ui.interaction.click";
var H = "ui.interaction.hover";
var k = "ui.interaction.drag";
var K = "ui.interaction.press";
var f = "ui.webvital.lcp";
var F = "ui.webvital.cls";
var te = "cache.get";
var Te = "cache.put";
var ue = "cache.remove";
var TE = "router";
var UE = "http.client";

// node_modules/@sentry/core/build/esm/tracing/spans/spanNames.js
var PAGELOAD_SPAN_NAME_FALLBACK = "Pageload";
var NAVIGATION_SPAN_NAME_FALLBACK = "Navigation";
var RESOURCE_SPAN_NAME_FALLBACK = "Resource";
var ROUTER_SPAN_NAME_FALLBACK = "Router";
var UI_LONG_TASK_SPAN_NAME_FALLBACK = "Main UI thread blocked";
var UI_INTERACTION_CLICK_SPAN_NAME_FALLBACK = "Click";
var UI_INTERACTION_HOVER_SPAN_NAME_FALLBACK = "Hover";
var UI_INTERACTION_DRAG_SPAN_NAME_FALLBACK = "Drag";
var UI_INTERACTION_PRESS_SPAN_NAME_FALLBACK = "Key press";
var UI_WEBVITAL_LCP_SPAN_NAME_FALLBACK = "Largest contentful paint";
var UI_WEBVITAL_CLS_SPAN_NAME_FALLBACK = "Layout shift";
var CACHE_OPERATION_NAMES = {
  [te]: "get",
  [Te]: "put",
  [ue]: "remove"
};
var BROWSER_NAVIGATION_TIMING_SPAN_NAMES = {
  [D]: "Cache lookup",
  [b]: "DNS lookup",
  [P]: "Connect",
  [d]: "TLS handshake",
  [l]: "Redirect",
  [B]: "Request",
  [m]: "Response",
  [S]: "Unload event",
  [L]: "DOMContentLoaded event",
  [p]: "Load event"
};

// node_modules/@sentry/core/build/esm/envelope.js
function _enhanceEventWithSdkInfo(event, newSdkInfo) {
  var _a3, _b, _c, _d;
  if (!newSdkInfo) {
    return event;
  }
  const eventSdkInfo = event.sdk || {};
  event.sdk = __spreadProps(__spreadValues({}, eventSdkInfo), {
    name: eventSdkInfo.name || newSdkInfo.name,
    version: eventSdkInfo.version || newSdkInfo.version,
    integrations: [...((_a3 = event.sdk) == null ? void 0 : _a3.integrations) || [], ...newSdkInfo.integrations || []],
    packages: [...((_b = event.sdk) == null ? void 0 : _b.packages) || [], ...newSdkInfo.packages || []],
    settings: ((_c = event.sdk) == null ? void 0 : _c.settings) || newSdkInfo.settings ? __spreadValues(__spreadValues({}, (_d = event.sdk) == null ? void 0 : _d.settings), newSdkInfo.settings) : void 0
  });
  return event;
}
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = __spreadValues(__spreadValues({
    sent_at: new Date(safeDateNow()).toISOString()
  }, sdkInfo && { sdk: sdkInfo }), !!tunnel && dsn && { dsn: dsnToString(dsn) });
  const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
  return createEnvelope(envelopeHeaders, [envelopeItem]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  _enhanceEventWithSdkInfo(event, metadata == null ? void 0 : metadata.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}

// node_modules/@sentry/core/build/esm/utils/syncpromise.js
var STATE_PENDING = 0;
var STATE_RESOLVED = 1;
var STATE_REJECTED = 2;
function resolvedSyncPromise(value) {
  return new SyncPromise((resolve) => {
    resolve(value);
  });
}
function rejectedSyncPromise(reason) {
  return new SyncPromise((_3, reject) => {
    reject(reason);
  });
}
var SyncPromise = class _SyncPromise {
  constructor(executor) {
    this._state = STATE_PENDING;
    this._handlers = [];
    this._runExecutor(executor);
  }
  /** @inheritdoc */
  then(onfulfilled, onrejected) {
    return new _SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        (result) => {
          if (!onfulfilled) {
            resolve(result);
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e4) {
              reject(e4);
            }
          }
        },
        (reason) => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e4) {
              reject(e4);
            }
          }
        }
      ]);
      this._executeHandlers();
    });
  }
  /** @inheritdoc */
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  /** @inheritdoc */
  finally(onfinally) {
    return new _SyncPromise((resolve, reject) => {
      let val;
      let isRejected;
      return this.then(
        (value) => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        (reason) => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve(val);
      });
    });
  }
  /** Excute the resolve/reject handlers. */
  _executeHandlers() {
    if (this._state === STATE_PENDING) {
      return;
    }
    const cachedHandlers = this._handlers.slice();
    this._handlers = [];
    cachedHandlers.forEach((handler) => {
      if (handler[0]) {
        return;
      }
      if (this._state === STATE_RESOLVED) {
        handler[1](this._value);
      }
      if (this._state === STATE_REJECTED) {
        handler[2](this._value);
      }
      handler[0] = true;
    });
  }
  /** Run the executor for the SyncPromise. */
  _runExecutor(executor) {
    const setResult = (state, value) => {
      if (this._state !== STATE_PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(resolve, reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    };
    const resolve = (value) => {
      setResult(STATE_RESOLVED, value);
    };
    const reject = (reason) => {
      setResult(STATE_REJECTED, reason);
    };
    try {
      executor(resolve, reject);
    } catch (e4) {
      reject(e4);
    }
  }
};

// node_modules/@sentry/core/build/esm/eventProcessors.js
function notifyEventProcessors(processors, event, hint, index = 0, onDrop) {
  try {
    const result = _notifyEventProcessors(event, hint, processors, index, onDrop);
    return isThenable(result) ? result : resolvedSyncPromise(result);
  } catch (error2) {
    return rejectedSyncPromise(error2);
  }
}
function _notifyEventProcessors(event, hint, processors, index, onDrop) {
  const processor = processors[index];
  if (!event || !processor) {
    return event;
  }
  const processorName = `Event processor "${processor.id || "?"}"`;
  let callbackError = false;
  const result = safeCallback(
    DEBUG_BUILD ? `${processorName} threw an error, dropping event:` : "",
    () => processor(__spreadValues({}, event), hint),
    () => {
      callbackError = true;
      return null;
    }
  );
  DEBUG_BUILD && result === null && debug.log(`${processorName} dropped event`);
  if (isThenable(result)) {
    return result.then((final) => {
      if (!final) {
        onDrop == null ? void 0 : onDrop(callbackError ? "callback_error" : "event_processor");
        return null;
      }
      return _notifyEventProcessors(final, hint, processors, index + 1, onDrop);
    });
  }
  if (!result) {
    onDrop == null ? void 0 : onDrop(callbackError ? "callback_error" : "event_processor");
    return null;
  }
  return _notifyEventProcessors(result, hint, processors, index + 1, onDrop);
}

// node_modules/@sentry/core/build/esm/utils/debug-ids.js
var parsedStackResults;
var lastSentryKeysCount;
var lastNativeKeysCount;
var cachedFilenameDebugIds;
function getFilenameToDebugIdMap(stackParser) {
  const sentryDebugIdMap = GLOBAL_OBJ._sentryDebugIds;
  const nativeDebugIdMap = GLOBAL_OBJ._debugIds;
  if (!sentryDebugIdMap && !nativeDebugIdMap) {
    return {};
  }
  const sentryDebugIdKeys = sentryDebugIdMap ? Object.keys(sentryDebugIdMap) : [];
  const nativeDebugIdKeys = nativeDebugIdMap ? Object.keys(nativeDebugIdMap) : [];
  if (cachedFilenameDebugIds && sentryDebugIdKeys.length === lastSentryKeysCount && nativeDebugIdKeys.length === lastNativeKeysCount) {
    return cachedFilenameDebugIds;
  }
  lastSentryKeysCount = sentryDebugIdKeys.length;
  lastNativeKeysCount = nativeDebugIdKeys.length;
  cachedFilenameDebugIds = {};
  if (!parsedStackResults) {
    parsedStackResults = {};
  }
  const processDebugIds = (debugIdKeys, debugIdMap) => {
    for (const key of debugIdKeys) {
      const debugId = debugIdMap[key];
      const result = parsedStackResults == null ? void 0 : parsedStackResults[key];
      if (result && cachedFilenameDebugIds && debugId) {
        cachedFilenameDebugIds[result[0]] = debugId;
        if (parsedStackResults) {
          parsedStackResults[key] = [result[0], debugId];
        }
      } else if (debugId) {
        const parsedStack = stackParser(key);
        for (let i3 = parsedStack.length - 1; i3 >= 0; i3--) {
          const stackFrame = parsedStack[i3];
          const filename = stackFrame == null ? void 0 : stackFrame.filename;
          if (filename && cachedFilenameDebugIds && parsedStackResults) {
            cachedFilenameDebugIds[filename] = debugId;
            parsedStackResults[key] = [filename, debugId];
            break;
          }
        }
      }
    }
  };
  if (sentryDebugIdMap) {
    processDebugIds(sentryDebugIdKeys, sentryDebugIdMap);
  }
  if (nativeDebugIdMap) {
    processDebugIds(nativeDebugIdKeys, nativeDebugIdMap);
  }
  return cachedFilenameDebugIds;
}

// node_modules/@sentry/core/build/esm/utils/eventUtils.js
function isInternalException(hint) {
  var _a3;
  return ((_a3 = hint.data) == null ? void 0 : _a3.__sentry__) === true;
}
function getPossibleEventMessages(event) {
  const possibleMessages = [];
  if (event.message) {
    possibleMessages.push(event.message);
  }
  try {
    const lastException = event.exception.values[event.exception.values.length - 1];
    if (lastException == null ? void 0 : lastException.value) {
      possibleMessages.push(lastException.value);
      if (lastException.type) {
        possibleMessages.push(`${lastException.type}: ${lastException.value}`);
      }
    }
  } catch {
  }
  return possibleMessages;
}

// node_modules/@sentry/core/build/esm/utils/prepareEvent.js
function prepareEvent(options, event, hint, scope, client, isolationScope) {
  var _a3;
  const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
  const prepared = __spreadProps(__spreadValues({}, event), {
    event_id: event.event_id || hint.event_id || uuid4(),
    timestamp: event.timestamp || dateTimestampInSeconds()
  });
  const integrations = hint.integrations || options.integrations.map((i3) => i3.name);
  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);
  if (client) {
    client.emit("applyFrameMetadata", event);
  }
  if (event.type === void 0) {
    applyDebugIds(prepared, options.stackParser);
  }
  const finalScope = getFinalScope(scope, hint.captureContext);
  if (hint.mechanism) {
    addExceptionMechanismToCapturedException(prepared, hint.mechanism);
  }
  const clientEventProcessors = client ? client.getEventProcessors() : [];
  const data = getCombinedScopeData(isolationScope, finalScope);
  const attachments = [...hint.attachments || [], ...data.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }
  applyScopeDataToEvent(prepared, data);
  const span = getActiveSpan(finalScope);
  if (span) {
    applySpanToEvent(prepared, span);
  }
  applyEscapedErrorSpanToEvent(prepared, hint, finalScope);
  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data.eventProcessors
  ];
  const isTransaction = event.type === "transaction";
  const spanCountBeforeProcessing = ((_a3 = event.spans) == null ? void 0 : _a3.length) || 0;
  const result = isInternalException(hint) ? resolvedSyncPromise(prepared) : notifyEventProcessors(eventProcessors, prepared, hint, 0, (reason) => {
    if (!client) {
      return;
    }
    client.recordDroppedEvent(reason, getDataCategoryByType(event.type));
    if (isTransaction) {
      client.recordDroppedEvent(reason, "span", 1 + spanCountBeforeProcessing);
    }
  });
  return result.then((evt) => {
    var _a4;
    if (!evt) {
      return null;
    }
    if (isTransaction && client) {
      const droppedSpanCount = spanCountBeforeProcessing - (((_a4 = evt.spans) == null ? void 0 : _a4.length) || 0);
      if (droppedSpanCount > 0) {
        client.recordDroppedEvent("event_processor", "span", droppedSpanCount);
      }
    }
    applyDebugMeta(evt);
    if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}
function applyClientOptions(event, options) {
  var _a3, _b;
  const { environment, release, dist, maxValueLength } = options;
  event.environment = event.environment || environment || DEFAULT_ENVIRONMENT;
  if (!event.release && release) {
    event.release = release;
  }
  if (!event.dist && dist) {
    event.dist = dist;
  }
  const request = event.request;
  if ((request == null ? void 0 : request.url) && maxValueLength) {
    request.url = truncate(request.url, maxValueLength);
  }
  if (maxValueLength) {
    (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b.forEach((exception) => {
      if (exception.value) {
        exception.value = truncate(exception.value, maxValueLength);
      }
    });
  }
}
function applyDebugIds(event, stackParser) {
  var _a3, _b;
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
  (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b.forEach((exception) => {
    var _a4, _b2;
    (_b2 = (_a4 = exception.stacktrace) == null ? void 0 : _a4.frames) == null ? void 0 : _b2.forEach((frame) => {
      if (frame.filename) {
        frame.debug_id = filenameDebugIdMap[frame.filename];
      }
    });
  });
}
function applyDebugMeta(event) {
  var _a3, _b;
  const filenameDebugIdMap = {};
  (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b.forEach((exception) => {
    var _a4, _b2;
    (_b2 = (_a4 = exception.stacktrace) == null ? void 0 : _a4.frames) == null ? void 0 : _b2.forEach((frame) => {
      if (frame.debug_id) {
        if (frame.abs_path) {
          filenameDebugIdMap[frame.abs_path] = frame.debug_id;
        } else if (frame.filename) {
          filenameDebugIdMap[frame.filename] = frame.debug_id;
        }
        delete frame.debug_id;
      }
    });
  });
  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: "sourcemap",
      code_file: filename,
      debug_id
    });
  });
}
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
  }
}
function normalizeEvent(event, depth, maxBreadth) {
  var _a3, _b;
  if (!event) {
    return null;
  }
  const normalized = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, event), event.breadcrumbs && {
    breadcrumbs: event.breadcrumbs.map((b3) => __spreadValues(__spreadValues({}, b3), b3.data && {
      data: normalize(b3.data, depth, maxBreadth)
    }))
  }), event.user && {
    user: normalize(event.user, depth, maxBreadth)
  }), event.contexts && {
    contexts: normalize(event.contexts, depth, maxBreadth)
  }), event.extra && {
    extra: normalize(event.extra, depth, maxBreadth)
  });
  if (((_a3 = event.contexts) == null ? void 0 : _a3.trace) && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }
  if (event.spans) {
    normalized.spans = event.spans.map((span) => {
      return __spreadValues(__spreadValues({}, span), span.data && {
        data: normalize(span.data, depth, maxBreadth)
      });
    });
  }
  if (((_b = event.contexts) == null ? void 0 : _b.flags) && normalized.contexts) {
    normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
  }
  return normalized;
}
function getFinalScope(scope, captureContext) {
  if (!captureContext) {
    return scope;
  }
  const finalScope = scope ? scope.clone() : new Scope();
  finalScope.update(captureContext);
  return finalScope;
}
function parseEventHintOrCaptureContext(hint) {
  if (!hint) {
    return void 0;
  }
  if (hintIsScopeOrFunction(hint)) {
    return { captureContext: hint };
  }
  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint
    };
  }
  return hint;
}
function hintIsScopeOrFunction(hint) {
  return hint instanceof Scope || typeof hint === "function";
}
var captureContextKeys = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext"
];
function hintIsScopeContext(hint) {
  return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}

// node_modules/@sentry/core/build/esm/exports.js
function captureException(exception, hint) {
  return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
function captureEvent(event, hint) {
  return getCurrentScope().captureEvent(event, hint);
}
function setContext(name, context) {
  getIsolationScope().setContext(name, context);
}
function lastEventId() {
  return getIsolationScope().lastEventId();
}
function isEnabled2() {
  const client = getClient();
  return (client == null ? void 0 : client.getOptions().enabled) !== false && !!(client == null ? void 0 : client.getTransport());
}
function addEventProcessor(callback) {
  getIsolationScope().addEventProcessor(callback);
}
function startSession(context) {
  const isolationScope = getIsolationScope();
  const { user } = getCombinedScopeData(isolationScope, getCurrentScope());
  const { userAgent } = GLOBAL_OBJ.navigator || {};
  const session = makeSession(__spreadValues(__spreadValues({
    user
  }, userAgent && { userAgent }), context));
  const currentSession = isolationScope.getSession();
  if ((currentSession == null ? void 0 : currentSession.status) === "ok") {
    updateSession(currentSession, { status: "exited" });
  }
  endSession();
  isolationScope.setSession(session);
  return session;
}
function endSession() {
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const session = currentScope.getSession() || isolationScope.getSession();
  if (session) {
    closeSession(session);
  }
  _sendSessionUpdate();
  isolationScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = getIsolationScope();
  const client = getClient();
  const session = isolationScope.getSession();
  if (session && client) {
    client.captureSession(session);
  }
}
function captureSession(end = false) {
  if (end) {
    endSession();
    return;
  }
  _sendSessionUpdate();
}

// node_modules/@sentry/core/build/esm/api.js
var SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
function _encodedAuth(dsn, sdkInfo) {
  const params = {
    sentry_version: SENTRY_API_VERSION
  };
  if (dsn.publicKey) {
    params.sentry_key = dsn.publicKey;
  }
  if (sdkInfo) {
    params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
  }
  return new URLSearchParams(params).toString();
}
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
function getReportDialogEndpoint(dsnLike, dialogOptions) {
  const dsn = makeDsn(dsnLike);
  if (!dsn) {
    return "";
  }
  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
  let encodedOptions = `dsn=${dsnToString(dsn)}`;
  for (const key in dialogOptions) {
    if (key === "dsn") {
      continue;
    }
    if (key === "onClose" || key === "onError") {
      continue;
    }
    if (key === "user") {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
  }
  return `${endpoint}?${encodedOptions}`;
}

// node_modules/@sentry/core/build/esm/logs/envelope.js
function createLogContainerEnvelopeItem(items, inferUserData) {
  const inferSetting = inferUserData ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: items.length,
      content_type: "application/vnd.sentry.items.log+json"
    },
    __spreadProps(__spreadValues({
      version: 2
    }, isBrowser() && {
      ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
    }), {
      items
    })
  ];
}
function createLogEnvelope(logs, metadata, tunnel, dsn, inferUserData) {
  const headers = {};
  if (metadata == null ? void 0 : metadata.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  return createEnvelope(headers, [createLogContainerEnvelopeItem(logs, inferUserData)]);
}

// node_modules/@sentry/core/build/esm/logs/internal.js
function _INTERNAL_flushLogsBuffer(client, maybeLogBuffer) {
  const logBuffer = maybeLogBuffer ?? _INTERNAL_getLogBuffer(client) ?? [];
  if (logBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope = createLogEnvelope(
    logBuffer,
    clientOptions._metadata,
    clientOptions.tunnel,
    client.getDsn(),
    client.getDataCollectionOptions().userInfo
  );
  _getBufferMap().set(client, []);
  client.emit("flushLogs");
  client.sendEnvelope(envelope);
}
function _INTERNAL_getLogBuffer(client) {
  return _getBufferMap().get(client);
}
function _getBufferMap() {
  return getGlobalSingleton("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
}

// node_modules/@sentry/core/build/esm/metrics/envelope.js
function createMetricContainerEnvelopeItem(items, inferUserData) {
  const inferSetting = inferUserData ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: items.length,
      content_type: "application/vnd.sentry.items.trace-metric+json"
    },
    __spreadProps(__spreadValues({
      version: 2
    }, isBrowser() && {
      ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
    }), {
      items
    })
  ];
}
function createMetricEnvelope(metrics, metadata, tunnel, dsn, inferUserData) {
  const headers = {};
  if (metadata == null ? void 0 : metadata.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  return createEnvelope(headers, [createMetricContainerEnvelopeItem(metrics, inferUserData)]);
}

// node_modules/@sentry/core/build/esm/metrics/internal.js
function _INTERNAL_flushMetricsBuffer(client, maybeMetricBuffer) {
  const metricBuffer = maybeMetricBuffer ?? _INTERNAL_getMetricBuffer(client) ?? [];
  if (metricBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope = createMetricEnvelope(
    metricBuffer,
    clientOptions._metadata,
    clientOptions.tunnel,
    client.getDsn(),
    client.getDataCollectionOptions().userInfo
  );
  _getBufferMap2().set(client, []);
  client.emit("flushMetrics");
  client.sendEnvelope(envelope);
}
function _INTERNAL_getMetricBuffer(client) {
  return _getBufferMap2().get(client);
}
function _getBufferMap2() {
  return getGlobalSingleton("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
}

// node_modules/@sentry/core/build/esm/tracing/spans/extractGenAiSpans.js
function extractGenAiSpansFromEvent(event, client) {
  var _a3, _b, _c;
  if (event.type !== "transaction" || !((_a3 = event.spans) == null ? void 0 : _a3.length) || !((_b = event.sdkProcessingMetadata) == null ? void 0 : _b.hasGenAiSpans) || hasSpanStreamingEnabled(client)) {
    return void 0;
  }
  const genAiSpans = [];
  const remainingSpans = [];
  for (const span of event.spans) {
    if ((_c = span.op) == null ? void 0 : _c.startsWith("gen_ai.")) {
      genAiSpans.push(spanJsonToSerializedStreamedSpan(span));
    } else {
      remainingSpans.push(span);
    }
  }
  if (genAiSpans.length === 0) {
    return void 0;
  }
  event.spans = remainingSpans;
  return createSpanContainerItem(genAiSpans, client);
}

// node_modules/@sentry/core/build/esm/utils/promisebuffer.js
var SENTRY_BUFFER_FULL_ERROR = /* @__PURE__ */ Symbol.for("SentryBufferFullError");
function makePromiseBuffer(limit = 100) {
  const buffer = /* @__PURE__ */ new Set();
  function isReady() {
    return buffer.size < limit;
  }
  function remove(task) {
    buffer.delete(task);
  }
  function add(taskProducer) {
    if (!isReady()) {
      return rejectedSyncPromise(SENTRY_BUFFER_FULL_ERROR);
    }
    const task = taskProducer();
    buffer.add(task);
    void task.then(
      () => remove(task),
      () => remove(task)
    );
    return task;
  }
  function drain(timeout) {
    if (!buffer.size) {
      return resolvedSyncPromise(true);
    }
    const drainPromise = Promise.allSettled(Array.from(buffer)).then(() => true);
    if (!timeout) {
      return drainPromise;
    }
    const promises = [
      drainPromise,
      new Promise((resolve) => safeUnref(setTimeout(() => resolve(false), timeout)))
    ];
    return Promise.race(promises);
  }
  return {
    get $() {
      return Array.from(buffer);
    },
    add,
    drain
  };
}

// node_modules/@sentry/core/build/esm/utils/ratelimit.js
var DEFAULT_RETRY_AFTER = 60 * 1e3;
function parseRetryAfterHeader(header, now = safeDateNow()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1e3;
  }
  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }
  return DEFAULT_RETRY_AFTER;
}
function disabledUntil(limits, dataCategory) {
  return limits[dataCategory] || limits.all || 0;
}
function isRateLimited(limits, dataCategory, now = safeDateNow()) {
  return disabledUntil(limits, dataCategory) > now;
}
function updateRateLimits(limits, { statusCode, headers }, now = safeDateNow()) {
  const updatedRateLimits = __spreadValues({}, limits);
  const rateLimitHeader = headers == null ? void 0 : headers["x-sentry-rate-limits"];
  const retryAfterHeader = headers == null ? void 0 : headers["retry-after"];
  if (rateLimitHeader) {
    for (const limit of rateLimitHeader.trim().split(",")) {
      const [retryAfter, categories, , , namespaces] = limit.split(":", 5);
      const headerDelay = parseInt(retryAfter, 10);
      const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
      if (!categories) {
        updatedRateLimits.all = now + delay;
      } else {
        for (const category of categories.split(";")) {
          if (category === "metric_bucket") {
            if (!namespaces || namespaces.split(";").includes("custom")) {
              updatedRateLimits[category] = now + delay;
            }
          } else {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1e3;
  }
  return updatedRateLimits;
}

// node_modules/@sentry/core/build/esm/transports/base.js
var DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
function createTransport(options, makeRequest, buffer = makePromiseBuffer(
  options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
)) {
  let rateLimits = {};
  const flush2 = (timeout) => buffer.drain(timeout);
  function recordItemLoss(reason, [headers, payload], type) {
    var _a3;
    const dataCategory = envelopeItemTypeToDataCategory(type);
    if (type === "transaction") {
      options.recordDroppedEvent(reason, "span", (((_a3 = payload.spans) == null ? void 0 : _a3.length) ?? 0) + 1);
    }
    options.recordDroppedEvent(reason, dataCategory, typeof headers.item_count === "number" ? headers.item_count : 1);
  }
  function send(envelope) {
    const filteredEnvelopeItems = [];
    forEachEnvelopeItem(envelope, (item, type) => {
      if (isRateLimited(rateLimits, envelopeItemTypeToDataCategory(type))) {
        recordItemLoss("ratelimit_backoff", item, type);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });
    if (filteredEnvelopeItems.length === 0) {
      return Promise.resolve({});
    }
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
    const recordEnvelopeLoss = (reason) => {
      if (envelopeContainsItemType(filteredEnvelope, ["client_report"])) {
        DEBUG_BUILD && debug.warn(`Dropping client report. Will not send outcomes (reason: ${reason}).`);
        return;
      }
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        recordItemLoss(reason, item, type);
      });
    };
    const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope) }).then(
      (response) => {
        if (response.statusCode === 413) {
          DEBUG_BUILD && debug.error(
            "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
          );
          recordEnvelopeLoss("send_error");
          return response;
        }
        if (DEBUG_BUILD && response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
          debug.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
        }
        rateLimits = updateRateLimits(rateLimits, response);
        return response;
      },
      (error2) => {
        recordEnvelopeLoss("network_error");
        DEBUG_BUILD && debug.error("Encountered error running transport request:", error2);
        throw error2;
      }
    );
    return buffer.add(requestTask).then(
      (result) => result,
      (error2) => {
        if (error2 === SENTRY_BUFFER_FULL_ERROR) {
          DEBUG_BUILD && debug.error("Skipped sending event because buffer is full.");
          recordEnvelopeLoss("queue_overflow");
          return Promise.resolve({});
        } else {
          throw error2;
        }
      }
    );
  }
  return {
    send,
    flush: flush2
  };
}

// node_modules/@sentry/core/build/esm/utils/clientreport.js
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [
    { type: "client_report" },
    {
      timestamp: timestamp || dateTimestampInSeconds(),
      discarded_events
    }
  ];
  return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}

// node_modules/@sentry/core/build/esm/utils/transactionEvent.js
function convertTransactionEventToSpanJson(event) {
  var _a3;
  const { trace_id, parent_span_id, span_id, status, origin, data, op } = ((_a3 = event.contexts) == null ? void 0 : _a3.trace) ?? {};
  return {
    data: data ?? {},
    description: event.transaction,
    op,
    parent_span_id,
    span_id: span_id ?? "",
    start_timestamp: event.start_timestamp ?? 0,
    status: status ?? "ok",
    timestamp: event.timestamp,
    trace_id: trace_id ?? "",
    origin,
    profile_id: data == null ? void 0 : data[hm],
    exclusive_time: data == null ? void 0 : data[Vd],
    measurements: event.measurements,
    is_segment: true
  };
}
function convertSpanJsonToTransactionEvent(span) {
  return {
    type: "transaction",
    timestamp: span.timestamp,
    start_timestamp: span.start_timestamp,
    transaction: span.description,
    contexts: {
      trace: {
        trace_id: span.trace_id,
        span_id: span.span_id,
        parent_span_id: span.parent_span_id,
        op: span.op,
        status: span.status,
        origin: span.origin,
        data: __spreadValues(__spreadValues(__spreadValues({}, span.data), span.profile_id && { [hm]: span.profile_id }), span.exclusive_time && { [Vd]: span.exclusive_time })
      }
    },
    measurements: span.measurements
  };
}

// node_modules/@sentry/core/build/esm/utils/warnAboutIgnoredTransactionOptions.js
function maybeWarnAboutIgnoredTransactionOptions(options) {
  var _a3;
  if (options.traceLifecycle !== "stream" || // oxlint-disable-next-line typescript/no-deprecated
  !(options.beforeSendTransaction || ((_a3 = options.ignoreTransactions) == null ? void 0 : _a3.length))) {
    return;
  }
  consoleSandbox(() => {
    console.warn(
      "[Sentry] `beforeSendTransaction` and `ignoreTransactions` are ignored with `traceLifecycle: 'stream'` (enabled by default). Use `beforeSendSpan` and `ignoreSpans` instead, or set `traceLifecycle: 'static'`."
    );
  });
}

// node_modules/@sentry/core/build/esm/utils/data-collection/resolveDataCollectionOptions.js
var DEFAULTS = {
  userInfo: true,
  cookies: true,
  httpHeaders: { request: true, response: true },
  httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
  urlQueryParams: true,
  graphQL: { document: true, variables: true },
  genAI: { inputs: true, outputs: true },
  mcp: { inputs: true, outputs: true },
  databaseQueryData: true,
  queues: true,
  stackFrameVariables: true,
  frameContextLines: 5
};
function isCollectBehavior(value) {
  return typeof value === "boolean" || "allow" in value || "deny" in value;
}
function resolveHttpHeaders(httpHeaders) {
  if (httpHeaders === void 0) {
    return __spreadValues({}, DEFAULTS.httpHeaders);
  }
  if (isCollectBehavior(httpHeaders)) {
    return { request: httpHeaders, response: httpHeaders };
  }
  return {
    request: httpHeaders.request ?? DEFAULTS.httpHeaders.request,
    response: httpHeaders.response ?? DEFAULTS.httpHeaders.response
  };
}
function resolveDataCollectionOptions(options) {
  var _a3, _b, _c, _d, _e, _f;
  const dc = options.dataCollection ?? {};
  return {
    userInfo: dc.userInfo ?? DEFAULTS.userInfo,
    cookies: dc.cookies ?? DEFAULTS.cookies,
    httpHeaders: resolveHttpHeaders(dc.httpHeaders),
    httpBodies: dc.httpBodies ?? DEFAULTS.httpBodies,
    urlQueryParams: dc.urlQueryParams ?? DEFAULTS.urlQueryParams,
    graphQL: {
      document: ((_a3 = dc.graphQL) == null ? void 0 : _a3.document) ?? DEFAULTS.graphQL.document,
      variables: ((_b = dc.graphQL) == null ? void 0 : _b.variables) ?? DEFAULTS.graphQL.variables
    },
    genAI: {
      inputs: ((_c = dc.genAI) == null ? void 0 : _c.inputs) ?? DEFAULTS.genAI.inputs,
      outputs: ((_d = dc.genAI) == null ? void 0 : _d.outputs) ?? DEFAULTS.genAI.outputs
    },
    mcp: {
      inputs: ((_e = dc.mcp) == null ? void 0 : _e.inputs) ?? DEFAULTS.mcp.inputs,
      outputs: ((_f = dc.mcp) == null ? void 0 : _f.outputs) ?? DEFAULTS.mcp.outputs
    },
    databaseQueryData: dc.databaseQueryData ?? DEFAULTS.databaseQueryData,
    queues: dc.queues ?? DEFAULTS.queues,
    stackFrameVariables: dc.stackFrameVariables ?? DEFAULTS.stackFrameVariables,
    frameContextLines: dc.frameContextLines ?? DEFAULTS.frameContextLines
  };
}

// node_modules/@sentry/core/build/esm/client.js
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
var MISSING_RELEASE_FOR_SESSION_ERROR = "Discarded session because of missing or non-string release";
var INTERNAL_ERROR_SYMBOL = /* @__PURE__ */ Symbol.for("SentryInternalError");
var DO_NOT_SEND_EVENT_SYMBOL = /* @__PURE__ */ Symbol.for("SentryDoNotSendEventError");
var DEFAULT_FLUSH_INTERVAL = 5e3;
var CLOSED_CLIENT_SYMBOL = /* @__PURE__ */ Symbol.for("SentryClosedClient");
function isClientClosed(client) {
  return CLOSED_CLIENT_SYMBOL in client;
}
function _makeInternalError(message) {
  return {
    message,
    [INTERNAL_ERROR_SYMBOL]: true
  };
}
function _makeDoNotSendEventError(message) {
  return {
    message,
    [DO_NOT_SEND_EVENT_SYMBOL]: true
  };
}
function _isInternalError(error2) {
  return isObjectLike(error2) && INTERNAL_ERROR_SYMBOL in error2;
}
function _isDoNotSendEventError(error2) {
  return isObjectLike(error2) && DO_NOT_SEND_EVENT_SYMBOL in error2;
}
function setupWeightBasedFlushing(client, afterCaptureHook, flushHook, estimateSizeFn, flushFn) {
  let weight = 0;
  let flushTimeout;
  let isTimerActive = false;
  client.on(flushHook, () => {
    weight = 0;
    clearTimeout(flushTimeout);
    isTimerActive = false;
  });
  client.on(afterCaptureHook, (item) => {
    weight += estimateSizeFn(item);
    if (weight >= 8e5) {
      flushFn(client);
    } else if (!isTimerActive) {
      const flushInterval = client.getOptions()._flushInterval ?? DEFAULT_FLUSH_INTERVAL;
      if (flushInterval > 0) {
        isTimerActive = true;
        flushTimeout = safeUnref(
          setTimeout(() => {
            flushFn(client);
          }, flushInterval)
        );
      }
    }
  });
  client.on("flush", () => {
    flushFn(client);
  });
}
var Client = class {
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(options) {
    var _a3;
    this._options = __spreadProps(__spreadValues({
      attachStacktrace: true
    }, options), {
      traceLifecycle: options.traceLifecycle === "static" ? "static" : "stream"
    });
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = makePromiseBuffer(((_a3 = options.transportOptions) == null ? void 0 : _a3.bufferSize) ?? DEFAULT_TRANSPORT_BUFFER_SIZE);
    this._dataCollection = resolveDataCollectionOptions(options);
    this._unhandledSessionStatus = "crashed";
    if (options.dsn) {
      this._dsn = makeDsn(options.dsn);
    } else {
      DEBUG_BUILD && debug.warn("No DSN provided, client will not send events.");
    }
    const { beforeSendSpan, traceLifecycle } = this._options;
    if (DEBUG_BUILD && beforeSendSpan && isStaticBeforeSendSpanCallback(beforeSendSpan) !== (traceLifecycle === "static")) {
      consoleSandbox(() => {
        console.warn(
          `Ignoring \`beforeSendSpan\`: ${traceLifecycle === "static" ? "wrap it with" : "remove"} \`Sentry.withStaticSpan\` to use it with \`traceLifecycle: "${traceLifecycle}"\`.`
        );
      });
    }
    if (this._dsn) {
      const url = getEnvelopeEndpointWithUrlEncodedAuth(
        this._dsn,
        options.tunnel,
        options._metadata ? options._metadata.sdk : void 0
      );
      this._transport = options.transport(__spreadProps(__spreadValues({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this)
      }, options.transportOptions), {
        url
      }));
    }
    setupWeightBasedFlushing(this, "afterCaptureLog", "flushLogs", estimateLogSizeInBytes, _INTERNAL_flushLogsBuffer);
    setupWeightBasedFlushing(
      this,
      "afterCaptureMetric",
      "flushMetrics",
      estimateMetricSizeInBytes,
      _INTERNAL_flushMetricsBuffer
    );
  }
  /**
   * Captures an exception event and sends it to Sentry.
   *
   * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureException(exception, hint, scope) {
    const eventId = uuid4();
    if (checkOrSetAlreadyCaught(exception)) {
      DEBUG_BUILD && debug.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = __spreadValues({
      event_id: eventId
    }, hint);
    this._process(
      () => this.eventFromException(exception, hintWithEventId).then((event) => this._captureEvent(event, hintWithEventId, scope)).then((res) => res),
      "error"
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a message event and sends it to Sentry.
   *
   * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureMessage(message, level, hint, currentScope) {
    const hintWithEventId = __spreadValues({
      event_id: uuid4()
    }, hint);
    const eventMessage = isParameterizedString(message) ? message : String(message);
    const isMessage = isPrimitive(message);
    const promisedEvent = isMessage ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
    this._process(
      () => promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)),
      isMessage ? "unknown" : "error"
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a manually created event and sends it to Sentry.
   *
   * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureEvent(event, hint, currentScope) {
    const eventId = uuid4();
    if ((hint == null ? void 0 : hint.originalException) && checkOrSetAlreadyCaught(hint.originalException)) {
      DEBUG_BUILD && debug.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = __spreadValues({
      event_id: eventId
    }, hint);
    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
    const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
    const dataCategory = getDataCategoryByType(event.type);
    this._process(
      () => this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope),
      dataCategory
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a session.
   */
  captureSession(session) {
    this.sendSession(session);
    updateSession(session, { init: false });
  }
  /**
   * Get the current Dsn.
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * Get the current options.
   */
  getOptions() {
    return this._options;
  }
  /**
   * Get the resolved data collection configuration.
   */
  getDataCollectionOptions() {
    return this._dataCollection;
  }
  /**
   * Get the SDK metadata.
   * @see SdkMetadata
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * Returns the transport that is used by the client.
   * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
   */
  getTransport() {
    return this._transport;
  }
  /**
   * Wait for all events to be sent or the timeout to expire, whichever comes first.
   *
   * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
   *   cause the client to wait until all events are sent before resolving the promise.
   * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
   * still events in the queue when the timeout is reached.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async flush(timeout) {
    const transport = this._transport;
    this.emit("flush");
    if (!transport) {
      return true;
    }
    const clientFinished = await this._isClientDoneProcessing(timeout);
    const transportFlushed = await transport.flush(timeout);
    return clientFinished && transportFlushed;
  }
  /**
   * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
   *
   * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
   *   the client to wait until all events are sent before disabling itself.
   * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
   * it doesn't.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async close(timeout) {
    Object.defineProperty(this, CLOSED_CLIENT_SYMBOL, { value: true });
    const result = await this.flush(timeout);
    this.getOptions().enabled = false;
    this.emit("close");
    return result;
  }
  /**
   * Get all installed event processors.
   */
  getEventProcessors() {
    return this._eventProcessors;
  }
  /**
   * Adds an event processor that applies to any event processed by this client.
   */
  addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }
  /**
   * Initialize this client.
   * Call this after the client was set on a scope.
   */
  init() {
    if (this._isEnabled() || // Force integrations to be setup even if no DSN was set when we have
    // Spotlight enabled. This is particularly important for browser as we
    // don't support the `spotlight` option there and rely on the users
    // adding the `spotlightBrowserIntegration()` to their integrations which
    // wouldn't get initialized with the check below when there's no DSN set.
    this._options.integrations.some(({ name }) => name.startsWith("Spotlight"))) {
      this._setupIntegrations();
      maybeWarnAboutIgnoredTransactionOptions(this._options);
    }
  }
  /**
   * Gets an installed integration by its name.
   *
   * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
   */
  getIntegrationByName(integrationName) {
    return this._integrations[integrationName];
  }
  /**
   * Returns the names of all installed integrations.
   */
  getIntegrationNames() {
    return Object.keys(this._integrations);
  }
  /**
   * Add an integration to the client.
   * This can be used to e.g. lazy load integrations.
   * In most cases, this should not be necessary,
   * and you're better off just passing the integrations via `integrations: []` at initialization time.
   * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
   */
  addIntegration(integration) {
    const isAlreadyInstalled = this._integrations[integration.name];
    if (!isAlreadyInstalled && integration.beforeSetup) {
      integration.beforeSetup(this);
    }
    setupIntegration(this, integration, this._integrations);
    if (!isAlreadyInstalled) {
      afterSetupIntegrations(this, [integration]);
    }
  }
  /**
   * Send a fully prepared event to Sentry.
   */
  sendEvent(event, hint = {}) {
    this.emit("beforeSendEvent", event, hint);
    const genAiSpanItem = extractGenAiSpansFromEvent(event, this);
    let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
    if (!isInternalException(hint)) {
      for (const attachment of hint.attachments || []) {
        env = addItemToEnvelope(env, createAttachmentEnvelopeItem(attachment));
      }
    }
    if (genAiSpanItem) {
      env = addItemToEnvelope(env, genAiSpanItem);
    }
    this.sendEnvelope(env).then((sendResponse) => this.emit("afterSendEvent", event, sendResponse));
  }
  /**
   * Send a session or session aggregrates to Sentry.
   */
  sendSession(session) {
    const { release: clientReleaseOption, environment: clientEnvironmentOption = DEFAULT_ENVIRONMENT } = this._options;
    if ("aggregates" in session) {
      const sessionAttrs = session.attrs || {};
      if (!sessionAttrs.release && !clientReleaseOption) {
        DEBUG_BUILD && debug.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
      sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
      session.attrs = sessionAttrs;
    } else {
      if (!session.release && !clientReleaseOption) {
        DEBUG_BUILD && debug.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      session.release = session.release || clientReleaseOption;
      session.environment = session.environment || clientEnvironmentOption;
    }
    this.emit("beforeSendSession", session);
    const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(env);
  }
  /**
   * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
   */
  recordDroppedEvent(reason, category, count = 1) {
    if (this._options.sendClientReports) {
      const key = `${reason}:${category}`;
      DEBUG_BUILD && debug.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ""}`);
      this._outcomes[key] = (this._outcomes[key] || 0) + count;
    }
  }
  /**
   * Register a hook on this client.
   */
  on(hook, callback) {
    const hookCallbacks = this._hooks[hook] = this._hooks[hook] || /* @__PURE__ */ new Set();
    const uniqueCallback = (...args) => callback(...args);
    hookCallbacks.add(uniqueCallback);
    return () => {
      hookCallbacks.delete(uniqueCallback);
    };
  }
  /**
   * Emit a hook that was previously registered via `on()`.
   */
  emit(hook, ...rest) {
    const callbacks = this._hooks[hook];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...rest));
    }
  }
  /**
   * Send an envelope to Sentry.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async sendEnvelope(envelope) {
    this.emit("beforeEnvelope", envelope);
    if (this._isEnabled() && this._transport) {
      try {
        const result = await this._transport.send(envelope);
        this.emit("afterEnvelope", envelope);
        return result;
      } catch (reason) {
        DEBUG_BUILD && debug.error("Error while sending envelope:", reason);
        return {};
      }
    }
    DEBUG_BUILD && debug.error("Transport disabled");
    return {};
  }
  /**
   * Register a cleanup function to be called when the client is disposed.
   * This is useful for integrations that need to clean up global state.
   *
   * NOTE: This is a no-op in the base `Client` class. Subclasses like `ServerRuntimeClient`
   * override this method to actually register and execute cleanup callbacks.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerCleanup(callback) {
  }
  /**
   * Disposes of the client and releases all resources.
   *
   * Subclasses should override this method to clean up their own resources, including invoking
   * any callbacks registered via {@link Client.registerCleanup}. The base implementation is a
   * no-op and does NOT execute registered cleanup callbacks.
   *
   * After calling dispose(), the client should not be used anymore.
   */
  dispose() {
  }
  /* eslint-enable @typescript-eslint/unified-signatures */
  /** Setup integrations for this client. */
  _setupIntegrations() {
    const { integrations } = this._options;
    this._integrations = setupIntegrations(this, integrations);
    afterSetupIntegrations(this, integrations);
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(session, event) {
    var _a3, _b;
    let unhandled = event.level === "fatal";
    let errored = false;
    const exceptions = (_a3 = event.exception) == null ? void 0 : _a3.values;
    if (exceptions) {
      errored = true;
      unhandled = false;
      for (const ex of exceptions) {
        if (((_b = ex.mechanism) == null ? void 0 : _b.handled) === false) {
          unhandled = true;
          break;
        }
      }
    }
    const sessionNonTerminal = session.status === "ok";
    const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && unhandled;
    if (shouldUpdateAndSend) {
      updateSession(session, __spreadProps(__spreadValues({}, unhandled && { status: this._unhandledSessionStatus }), {
        errors: session.errors || Number(errored || unhandled)
      }));
      this.captureSession(session);
    }
  }
  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
  async _isClientDoneProcessing(timeout) {
    let ticked = 0;
    while (!timeout || ticked < timeout) {
      await new Promise((resolve) => setTimeout(resolve, 1));
      if (!this._numProcessing) {
        return true;
      }
      ticked++;
    }
    return false;
  }
  /** Determines whether this SDK is enabled and a transport is present. */
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== void 0;
  }
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A new event with more information.
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const integrations = this.getIntegrationNames();
    if (!hint.integrations && integrations.length) {
      hint.integrations = integrations;
    }
    this.emit("preprocessEvent", event, hint);
    if (!event.type) {
      isolationScope.setLastEventId(event.event_id || hint.event_id);
    }
    return prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
      var _a3;
      if (evt === null) {
        return evt;
      }
      this.emit("postprocessEvent", evt, hint);
      evt.contexts = __spreadValues({
        trace: __spreadValues(__spreadValues({}, (_a3 = evt.contexts) == null ? void 0 : _a3.trace), getTraceContextFromScope(currentScope))
      }, evt.contexts);
      const dynamicSamplingContext = getDynamicSamplingContextFromScope(this, currentScope);
      evt.sdkProcessingMetadata = __spreadValues({
        dynamicSamplingContext
      }, evt.sdkProcessingMetadata);
      return evt;
    });
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(event, hint = {}, currentScope = getCurrentScope(), isolationScope = getIsolationScope()) {
    if (DEBUG_BUILD && isErrorEvent2(event)) {
      debug.log(`Captured error event \`${getPossibleEventMessages(event)[0] || "<unknown>"}\``);
    }
    return this._processEvent(event, hint, currentScope, isolationScope).then(
      (finalEvent) => {
        return finalEvent.event_id;
      },
      (reason) => {
        if (DEBUG_BUILD) {
          if (_isDoNotSendEventError(reason)) {
            debug.log(reason.message);
          } else if (_isInternalError(reason)) {
            debug.warn(reason.message);
          } else {
            debug.warn(reason);
          }
        }
        return void 0;
      }
    );
  }
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
  _processEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const { sampleRate } = options;
    const isTransaction = isTransactionEvent(event);
    const isError2 = isErrorEvent2(event);
    const eventType = event.type || "error";
    const beforeSendLabel = `before send for type \`${eventType}\``;
    let beforeSendDropReason = "before_send";
    let ignoredSpanCount = 0;
    const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate(sampleRate);
    const dataCategory = getDataCategoryByType(event.type);
    let preparedSpanCount = 0;
    return this._prepareEvent(event, hint, currentScope, isolationScope).then((prepared) => {
      var _a3;
      if (prepared === null) {
        throw _makeDoNotSendEventError("An event processor returned `null`, will not send event.");
      }
      preparedSpanCount = ((_a3 = prepared.spans) == null ? void 0 : _a3.length) || 0;
      if (isInternalException(hint)) {
        return prepared;
      }
      return processBeforeSend(
        options,
        prepared,
        hint,
        (reason) => {
          beforeSendDropReason = reason;
        },
        (count) => {
          ignoredSpanCount = count;
        }
      );
    }).then((processedEvent) => {
      var _a3;
      if (ignoredSpanCount) {
        this.recordDroppedEvent("ignored", "span", ignoredSpanCount);
      }
      const isValidEvent = isPlainObject(processedEvent);
      if (!isValidEvent || processedEvent === null) {
        this.recordDroppedEvent(beforeSendDropReason, dataCategory);
        if (isTransaction) {
          this.recordDroppedEvent(beforeSendDropReason, "span", 1 + preparedSpanCount - ignoredSpanCount);
        }
        if (processedEvent !== null) {
          throw _makeInternalError(`${beforeSendLabel} must return \`null\` or a valid event.`);
        }
        const dropMessage = beforeSendDropReason === "ignored" ? "Transaction matched `ignoreSpans`" : `${beforeSendLabel} ${beforeSendDropReason === "callback_error" ? "threw an error" : "returned `null`"}`;
        throw _makeDoNotSendEventError(`${dropMessage}, will not send event.`);
      }
      const session = currentScope.getSession() || isolationScope.getSession();
      if (isError2 && session) {
        this._updateSessionFromEvent(session, processedEvent);
      }
      if (isError2 && typeof parsedSampleRate === "number" && safeMathRandom() > parsedSampleRate) {
        this.recordDroppedEvent("sample_rate", "error");
        throw _makeDoNotSendEventError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }
      if (isTransaction) {
        const droppedSpanCount = preparedSpanCount - ignoredSpanCount - (((_a3 = processedEvent.spans) == null ? void 0 : _a3.length) || 0);
        if (droppedSpanCount > 0) {
          this.recordDroppedEvent("before_send", "span", droppedSpanCount);
        }
      }
      const transactionInfo = processedEvent.transaction_info;
      if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
        const source = "custom";
        processedEvent.transaction_info = __spreadProps(__spreadValues({}, transactionInfo), {
          source
        });
      }
      this.sendEvent(processedEvent, hint);
      return processedEvent;
    }).then(null, (reason) => {
      if (_isDoNotSendEventError(reason) || _isInternalError(reason)) {
        throw reason;
      }
      this.captureException(reason, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: reason
      });
      throw _makeInternalError(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
      );
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(taskProducer, dataCategory) {
    this._numProcessing++;
    void this._promiseBuffer.add(taskProducer).then(
      (value) => {
        this._numProcessing--;
        return value;
      },
      (reason) => {
        this._numProcessing--;
        if (reason === SENTRY_BUFFER_FULL_ERROR) {
          this.recordDroppedEvent("queue_overflow", dataCategory);
        }
        return reason;
      }
    );
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.entries(outcomes).map(([key, quantity]) => {
      const [reason, category] = key.split(":");
      return {
        reason,
        category,
        quantity
      };
    });
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    DEBUG_BUILD && debug.log("Flushing outcomes...");
    const outcomes = this._clearOutcomes();
    if (outcomes.length === 0) {
      DEBUG_BUILD && debug.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      DEBUG_BUILD && debug.log("No dsn provided, will not send outcomes");
      return;
    }
    DEBUG_BUILD && debug.log("Sending outcomes:", outcomes);
    const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
    this.sendEnvelope(envelope);
  }
};
function processBeforeSend(options, event, hint, onDrop, onIgnoredSpans) {
  const {
    beforeSend,
    ignoreSpans,
    // oxlint-disable-next-line typescript/no-deprecated
    beforeSendTransaction
  } = options;
  const beforeSendSpan = isStaticBeforeSendSpanCallback(options.beforeSendSpan) && options.beforeSendSpan;
  let processedEvent = event;
  if (isErrorEvent2(processedEvent) && beforeSend) {
    const errorEvent = processedEvent;
    return safeCallback(
      DEBUG_BUILD ? "The `beforeSend` callback threw an error, dropping the event:" : "",
      () => beforeSend(errorEvent, hint),
      () => {
        onDrop("callback_error");
        return null;
      }
    );
  }
  if (isTransactionEvent(processedEvent)) {
    if (beforeSendSpan || ignoreSpans) {
      const rootSpanJson = convertTransactionEventToSpanJson(processedEvent);
      if ((ignoreSpans == null ? void 0 : ignoreSpans.length) && shouldIgnoreSpan(
        { description: rootSpanJson.description, op: rootSpanJson.op, attributes: rootSpanJson.data },
        ignoreSpans
      )) {
        onDrop("ignored");
        return null;
      }
      if (beforeSendSpan) {
        const processedRootSpanJson = applyBeforeSendSpanCallback(rootSpanJson, beforeSendSpan);
        processedEvent = merge(event, convertSpanJsonToTransactionEvent(processedRootSpanJson));
      }
      if (processedEvent.spans) {
        const processedSpans = [];
        const initialSpans = processedEvent.spans;
        for (const span of initialSpans) {
          if ((ignoreSpans == null ? void 0 : ignoreSpans.length) && shouldIgnoreSpan({ description: span.description, op: span.op, attributes: span.data }, ignoreSpans)) {
            reparentChildSpans(initialSpans, span);
            continue;
          }
          if (beforeSendSpan) {
            processedSpans.push(applyBeforeSendSpanCallback(span, beforeSendSpan));
          } else {
            processedSpans.push(span);
          }
        }
        onIgnoredSpans(initialSpans.length - processedSpans.length);
        processedEvent.spans = processedSpans;
      }
    }
    if (beforeSendTransaction) {
      return safeCallback(
        DEBUG_BUILD ? "The `beforeSendTransaction` callback threw an error, dropping the event:" : "",
        () => beforeSendTransaction(processedEvent, hint),
        () => {
          onDrop("callback_error");
          return null;
        }
      );
    }
  }
  return processedEvent;
}
function isErrorEvent2(event) {
  return event.type === void 0;
}
function isTransactionEvent(event) {
  return event.type === "transaction";
}
function estimateMetricSizeInBytes(metric) {
  let weight = 0;
  if (metric.name) {
    weight += metric.name.length * 2;
  }
  weight += 8;
  return weight + estimateAttributesSizeInBytes(metric.attributes);
}
function estimateLogSizeInBytes(log2) {
  let weight = 0;
  if (log2.message) {
    weight += log2.message.length * 2;
  }
  return weight + estimateAttributesSizeInBytes(log2.attributes);
}
function estimateAttributesSizeInBytes(attributes) {
  if (!attributes) {
    return 0;
  }
  let weight = 0;
  Object.values(attributes).forEach((value) => {
    if (Array.isArray(value)) {
      weight += value.length * estimatePrimitiveSizeInBytes2(value[0]);
    } else if (isPrimitive(value)) {
      weight += estimatePrimitiveSizeInBytes2(value);
    } else {
      weight += 100;
    }
  });
  return weight;
}
function estimatePrimitiveSizeInBytes2(value) {
  if (typeof value === "string") {
    return value.length * 2;
  } else if (typeof value === "number") {
    return 8;
  } else if (typeof value === "boolean") {
    return 4;
  }
  return 0;
}

// node_modules/@sentry/core/build/esm/sdk.js
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (DEBUG_BUILD) {
      debug.enable();
    } else {
      consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  warnIfClientIsActive();
  const scope = getCurrentScope();
  scope.update(options.initialScope);
  const client = new clientClass(options);
  setCurrentClient(client);
  client.init();
  return client;
}
function getActiveClient() {
  const client = getClient();
  return client && !isClientClosed(client) ? client : void 0;
}
function warnIfClientIsActive() {
  if (getActiveClient()) {
    consoleSandbox(() => {
      console.warn(
        "[Sentry] `Sentry.init()` was called more than once. The new client replaces the active client, but the active client is not closed, so state from both can mix. Call `Sentry.init()` only once, or call `await Sentry.close()` before you call it again."
      );
    });
  }
}
function setCurrentClient(client) {
  getCurrentScope().setClient(client);
}

// node_modules/@sentry/core/build/esm/utils/data-collection/filtering-snippets.js
var FILTERED_VALUE = "[Filtered]";
var SENSITIVE_KEY_SNIPPETS = [
  "auth",
  "token",
  "secret",
  "session",
  // for the user_session cookie
  "password",
  "passwd",
  "pwd",
  "key",
  "jwt",
  "bearer",
  "sso",
  "saml",
  "csrf",
  "xsrf",
  "credentials",
  "sid",
  "identity",
  // Always treat cookie headers as sensitive in case individual key-value cookie pairs cannot properly be extracted
  "set-cookie",
  "cookie"
];

// node_modules/@sentry/core/build/esm/utils/data-collection/filterKeyValueData.js
function isSensitiveKey(lower, denySnippets) {
  return denySnippets.some((snippet) => lower.includes(snippet));
}
function shouldFilterDataKey(key, behavior, additionalDenyTerms) {
  if (behavior === false) {
    return true;
  }
  const lowerKey = key.toLowerCase();
  const denySnippets = additionalDenyTerms != null ? [...SENSITIVE_KEY_SNIPPETS, ...additionalDenyTerms] : SENSITIVE_KEY_SNIPPETS;
  if (isSensitiveKey(lowerKey, denySnippets)) {
    return true;
  }
  if (behavior === true) {
    return false;
  }
  const terms = "deny" in behavior ? behavior.deny : behavior.allow;
  const matchesConfiguredTerm = terms.some((term) => lowerKey.includes(term.toLowerCase()));
  return "deny" in behavior ? matchesConfiguredTerm : !matchesConfiguredTerm;
}
function filterKeyValueData(data, behavior, additionalDenyTerms) {
  if (behavior === false) {
    return {};
  }
  const result = {};
  for (const key of Object.keys(data)) {
    result[key] = shouldFilterDataKey(key, behavior, additionalDenyTerms) ? FILTERED_VALUE : data[key];
  }
  return result;
}

// node_modules/@sentry/core/build/esm/utils/data-collection/filterQueryParams.js
function filterQueryParams(queryString, behavior) {
  if (!queryString || behavior === false) {
    return void 0;
  }
  return queryString.split("&").map((pair) => {
    const separatorIndex = pair.indexOf("=");
    const encodedKey = separatorIndex === -1 ? pair : pair.slice(0, separatorIndex);
    const key = new URLSearchParams(`${encodedKey}=`).keys().next().value;
    return key !== void 0 && shouldFilterDataKey(key, behavior) ? `${encodedKey}=${FILTERED_VALUE}` : pair;
  }).join("&");
}

// node_modules/@sentry/core/build/esm/utils/data-collection/filterUrlQuery.js
function filterUrlQuery(url, behavior) {
  const fragmentStart = url.indexOf("#");
  const queryEnd = fragmentStart === -1 ? url.length : fragmentStart;
  const queryStart = url.indexOf("?");
  if (queryStart === -1 || queryStart > queryEnd) {
    return url;
  }
  const prefix = url.slice(0, queryStart);
  const query = url.slice(queryStart + 1, queryEnd);
  const suffix = url.slice(queryEnd);
  const filtered = filterQueryParams(query, behavior);
  return filtered ? `${prefix}?${filtered}${suffix}` : `${prefix}${suffix}`;
}

// node_modules/@sentry/core/build/esm/utils/data-collection/filterCollectedUrl.js
function urlQueryParamsBehavior(client) {
  var _a3;
  return ((_a3 = client ?? getClient()) == null ? void 0 : _a3.getDataCollectionOptions().urlQueryParams) ?? true;
}
function filterCollectedUrl(url, client) {
  return url === void 0 ? void 0 : filterUrlQuery(url, urlQueryParamsBehavior(client));
}
function filterCollectedUrlQuery(query, client) {
  return query ? filterQueryParams(query, urlQueryParamsBehavior(client)) : void 0;
}

// node_modules/@sentry/core/build/esm/utils/url.js
var DEFAULT_BASE_URL = "thismessage:/";
function isURLObjectRelative(url) {
  return "isRelative" in url;
}
function parseStringToURLObject(url, urlBase) {
  const isRelative = url.indexOf("://") <= 0 && url.indexOf("//") !== 0;
  const base = urlBase ?? (isRelative ? DEFAULT_BASE_URL : void 0);
  try {
    if ("canParse" in URL && !URL.canParse(url, base)) {
      return void 0;
    }
    const fullUrlObject = new URL(url, base);
    if (isRelative) {
      return {
        isRelative,
        pathname: fullUrlObject.pathname,
        search: fullUrlObject.search,
        hash: fullUrlObject.hash
      };
    }
    return fullUrlObject;
  } catch {
  }
  return void 0;
}
function getSanitizedUrlStringFromUrlObject(url) {
  if (isURLObjectRelative(url)) {
    return url.pathname;
  }
  const newUrl = new URL(url);
  newUrl.search = "";
  newUrl.hash = "";
  if (["80", "443"].includes(newUrl.port)) {
    newUrl.port = "";
  }
  if (newUrl.password) {
    newUrl.password = "%filtered%";
  }
  if (newUrl.username) {
    newUrl.username = "%filtered%";
  }
  return newUrl.toString();
}
function getUrlQuery(query) {
  return (query == null ? void 0 : query.replace(/^\?/, "")) || void 0;
}
function getUrlFragment(fragment) {
  return (fragment == null ? void 0 : fragment.replace(/^#/, "")) || void 0;
}
function getUrlDomain(url, base) {
  try {
    return new URL(url, base).hostname || void 0;
  } catch {
    return void 0;
  }
}
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || "";
  const fragment = match[8] || "";
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment
    // everything minus origin
  };
}
function stripUrlQueryAndFragment(urlPath) {
  return urlPath.split(/[?#]/, 1)[0];
}
function stripDataUrlContent(url, includeDataPrefix = true) {
  if (url.startsWith("data:")) {
    const match = url.match(/^data:([^;,]+)/);
    const mimeType = match ? match[1] : "text/plain";
    const isBase64 = url.includes(";base64,");
    const dataStart = url.indexOf(",");
    let dataPrefix = "";
    if (includeDataPrefix && dataStart !== -1) {
      const data = url.slice(dataStart + 1);
      dataPrefix = data.length > 10 ? `${data.slice(0, 10)}... [truncated]` : data;
    }
    return `data:${mimeType}${isBase64 ? ",base64" : ""}${dataPrefix ? `,${dataPrefix}` : ""}`;
  }
  return url;
}

// node_modules/@sentry/core/build/esm/utils/isSentryRequestUrl.js
function isSentryRequestUrl(url, client) {
  const dsn = client == null ? void 0 : client.getDsn();
  const tunnel = client == null ? void 0 : client.getOptions().tunnel;
  return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}
function checkTunnel(url, tunnel) {
  if (!tunnel) {
    return false;
  }
  return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}
function checkDsn(url, dsn) {
  const urlParts = parseStringToURLObject(url);
  if (!urlParts || isURLObjectRelative(urlParts)) {
    return false;
  }
  if (!dsn) {
    return false;
  }
  return hostnameMatchesDsnHost(urlParts.hostname, dsn.host) && /(^|&|\?)sentry_key=/.test(urlParts.search);
}
function hostnameMatchesDsnHost(hostname, dsnHost) {
  return hostname === dsnHost || dsnHost.length > 0 && hostname.endsWith(`.${dsnHost}`);
}
function removeTrailingSlash(str) {
  return str[str.length - 1] === "/" ? str.slice(0, -1) : str;
}

// node_modules/@sentry/core/build/esm/utils/ipAddress.js
function addAutoIpAddressToSession(session) {
  var _a3;
  if ("aggregates" in session) {
    if (((_a3 = session.attrs) == null ? void 0 : _a3["ip_address"]) === void 0) {
      session.attrs = __spreadProps(__spreadValues({}, session.attrs), {
        ip_address: "{{auto}}"
      });
    }
  } else {
    if (session.ipAddress === void 0) {
      session.ipAddress = "{{auto}}";
    }
  }
}

// node_modules/@sentry/core/build/esm/utils/sdkMetadata.js
function applySdkMetadata(options, name, names = [name], source = "npm") {
  const sdk = (options._metadata = options._metadata || {}).sdk = options._metadata.sdk || {};
  if (!sdk.name) {
    sdk.name = `sentry.javascript.${name}`;
    sdk.packages = names.map((name2) => ({
      name: `${source}:@sentry/${name2}`,
      version: SDK_VERSION
    }));
    sdk.version = SDK_VERSION;
  }
}

// node_modules/@sentry/core/build/esm/utils/traceData.js
function getTraceData(options = {}) {
  const client = options.client || getClient();
  if (!isEnabled2() || !client) {
    return {};
  }
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }
  const scope = options.scope || getCurrentScope();
  const span = options.span || getActiveSpan();
  const isTwpPlaceholder = spanIsNonRecordingSpan(span) && !hasSpansEnabled(client.getOptions());
  if (!span && hasExternalPropagationContext()) {
    return {};
  }
  const sentryTrace = span && !isTwpPlaceholder ? spanToTraceHeader(span) : scopeToTraceHeader(scope);
  const dsc = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope);
  const baggage = dynamicSamplingContextToSentryBaggageHeader(dsc);
  const isValidSentryTraceHeader = TRACEPARENT_REGEXP.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    debug.warn("Invalid sentry-trace data. Cannot generate trace data");
    return {};
  }
  const traceData = {
    "sentry-trace": sentryTrace,
    baggage
  };
  if (options.propagateTraceparent) {
    traceData.traceparent = span && !isTwpPlaceholder ? spanToTraceparentHeader(span) : scopeToTraceparentHeader(scope);
  }
  return traceData;
}
function scopeToTraceHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return generateSentryTraceHeader(traceId, propagationSpanId, sampled);
}
function scopeToTraceparentHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return generateTraceparentHeader(traceId, propagationSpanId, sampled);
}

// node_modules/@sentry/core/build/esm/utils/tracePropagationTargets.js
var NORMALIZED_REGEXP_CACHE = /* @__PURE__ */ new WeakMap();
function normalizeRegExpTarget(pattern) {
  const flags = `${pattern.flags.replace(/[gy]/g, "")}${pattern.ignoreCase ? "" : "i"}`;
  if (flags === pattern.flags) {
    return pattern;
  }
  const cached = NORMALIZED_REGEXP_CACHE.get(pattern);
  if (cached) {
    return cached;
  }
  const normalizedPattern = new RegExp(pattern.source, flags);
  NORMALIZED_REGEXP_CACHE.set(pattern, normalizedPattern);
  return normalizedPattern;
}
function matchesTracePropagationTargets(value, tracePropagationTargets, requireExactStringMatch = false) {
  const lowerCaseValue = value.toLowerCase();
  for (const target of tracePropagationTargets) {
    if (isString(target)) {
      const lowerCaseTarget = target.toLowerCase();
      if (requireExactStringMatch ? lowerCaseValue === lowerCaseTarget : lowerCaseValue.includes(lowerCaseTarget)) {
        return true;
      }
    } else if (isRegExp(target) && normalizeRegExpTarget(target).test(value)) {
      return true;
    }
  }
  return false;
}

// node_modules/@sentry/core/build/esm/breadcrumbs.js
var DEFAULT_BREADCRUMBS = 100;
function addBreadcrumb(breadcrumb, hint) {
  const client = getClient();
  const isolationScope = getIsolationScope();
  if (!client) return;
  const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();
  if (maxBreadcrumbs <= 0) return;
  const timestamp = dateTimestampInSeconds();
  const mergedBreadcrumb = __spreadValues({ timestamp }, breadcrumb);
  const finalBreadcrumb = beforeBreadcrumb ? safeCallback(
    DEBUG_BUILD ? "The `beforeBreadcrumb` callback threw an error, dropping the breadcrumb:" : "",
    () => consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)),
    () => null
  ) : mergedBreadcrumb;
  if (finalBreadcrumb === null) return;
  if (client.emit) {
    client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
  }
  isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}

// node_modules/@sentry/core/build/esm/integrations/functiontostring.js
var INTEGRATION_NAME2 = "FunctionToString";
var SETUP_CLIENTS = /* @__PURE__ */ new WeakMap();
var _functionToStringIntegration = (() => {
  return {
    name: INTEGRATION_NAME2,
    setupOnce() {
      const originalFunctionToString = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...args) {
          const originalFunction = getOriginalFunction(this);
          let unwrappedFunction;
          try {
            if (SETUP_CLIENTS.has(getClient()) && originalFunction !== void 0) {
              unwrappedFunction = originalFunction;
            }
          } catch {
          }
          return originalFunctionToString.apply(unwrappedFunction ?? this, args);
        };
      } catch {
      }
    },
    setup(client) {
      SETUP_CLIENTS.set(client, true);
    }
  };
});
var functionToStringIntegration = defineIntegration(_functionToStringIntegration);

// node_modules/@sentry/core/build/esm/integrations/eventFilters.js
var DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  // The browser logs this when a ResizeObserver handler takes a bit longer. Usually this is not an actual issue though. It indicates slowness.
  /^Cannot redefine property: googletag$/,
  // This is thrown when google tag manager is used in combination with an ad blocker
  /^Can't find variable: gmo$/,
  // Error from Google Search App https://issuetracker.google.com/issues/396043331
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
  // Random error that happens but not actionable or noticeable to end-users.
  /can't redefine non-configurable property "solana"/,
  // Probably a browser extension or custom browser (Brave) throwing this error
  /vv\(\)\.getRestrictions is not a function/,
  // Error thrown by GTM, seemingly not affecting end-users
  /Can't find variable: _AutofillCallbackHandler/,
  // Unactionable error in instagram webview https://developers.facebook.com/community/threads/320013549791141/
  /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
  // unactionable error from CEFSharp, a .NET library that embeds chromium in .NET apps
  /Java exception was raised during method invocation$/,
  // error from Facebook Mobile browser (https://github.com/getsentry/sentry-javascript/issues/15065, https://github.com/getsentry/sentry-javascript/issues/23733)
  /Java object is gone$/
  // error from Facebook Mobile browser (https://github.com/getsentry/sentry-javascript/issues/15065, https://github.com/getsentry/sentry-javascript/issues/23733)
];
var INTEGRATION_NAME3 = "EventFilters";
var eventFiltersIntegration = defineIntegration((options = {}) => {
  let mergedOptions;
  return {
    name: INTEGRATION_NAME3,
    setup(client) {
      const clientOptions = client.getOptions();
      mergedOptions = _mergeOptions(options, clientOptions);
    },
    processEvent(event, _hint, client) {
      if (!mergedOptions) {
        const clientOptions = client.getOptions();
        mergedOptions = _mergeOptions(options, clientOptions);
      }
      return _shouldDropEvent(event, mergedOptions) ? null : event;
    }
  };
});
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [
      ...internalOptions.ignoreErrors || [],
      ...clientOptions.ignoreErrors || [],
      ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
    ],
    ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []]
  };
}
function _shouldDropEvent(event, options) {
  if (!event.type) {
    if (_isIgnoredError(event, options.ignoreErrors)) {
      DEBUG_BUILD && debug.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isUselessError(event)) {
      DEBUG_BUILD && debug.warn(
        `Event dropped due to not having an error message, error type or stacktrace.
Event: ${getEventDescription(
          event
        )}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      DEBUG_BUILD && debug.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      DEBUG_BUILD && debug.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
  } else if (event.type === "transaction") {
    if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
      DEBUG_BUILD && debug.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (!(ignoreErrors == null ? void 0 : ignoreErrors.length)) {
    return false;
  }
  return getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
  if (!(ignoreTransactions == null ? void 0 : ignoreTransactions.length)) {
    return false;
  }
  const name = event.transaction;
  return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
  if (!(denyUrls == null ? void 0 : denyUrls.length)) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
  if (!(allowUrls == null ? void 0 : allowUrls.length)) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
function _getLastValidUrl(frames = []) {
  for (let i3 = frames.length - 1; i3 >= 0; i3--) {
    const frame = frames[i3];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  var _a3, _b;
  try {
    const rootException = [...((_a3 = event.exception) == null ? void 0 : _a3.values) ?? []].reverse().find((value) => {
      var _a4, _b2, _c;
      return ((_a4 = value.mechanism) == null ? void 0 : _a4.parent_id) === void 0 && ((_c = (_b2 = value.stacktrace) == null ? void 0 : _b2.frames) == null ? void 0 : _c.length);
    });
    const frames = (_b = rootException == null ? void 0 : rootException.stacktrace) == null ? void 0 : _b.frames;
    return frames ? _getLastValidUrl(frames) : null;
  } catch {
    DEBUG_BUILD && debug.error(`Cannot extract url for event ${getEventDescription(event)}`);
    return null;
  }
}
function _isUselessError(event) {
  var _a3, _b;
  if (!((_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b.length)) {
    return false;
  }
  return (
    // No top-level message
    !event.message && // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value)
  );
}

// node_modules/@sentry/core/build/esm/utils/aggregate-errors.js
function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, key, limit, event, hint) {
  var _a3;
  if (!((_a3 = event.exception) == null ? void 0 : _a3.values) || !hint || !isError(hint.originalException)) {
    return;
  }
  const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
  if (originalException) {
    event.exception.values = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      hint.originalException,
      key,
      event.exception.values,
      originalException,
      0
    );
  }
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error2, key, prevExceptions, exception, exceptionId) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }
  let newExceptions = [...prevExceptions];
  if (isError(error2[key])) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId, error2);
    const newException = exceptionFromErrorImplementation(parser, error2[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error2[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId
    );
  }
  if (isExceptionGroup(error2)) {
    error2.errors.forEach((childError, i3) => {
      if (isError(childError)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId, error2);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i3}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId
        );
      }
    });
  }
  if (isSuppressedError(error2)) {
    ["error", "suppressed"].forEach((property) => {
      const childError = error2[property];
      if (isError(childError)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId, error2);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, property, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId
        );
      }
    });
  }
  return newExceptions;
}
function isExceptionGroup(error2) {
  return Array.isArray(error2.errors);
}
function isSuppressedError(error2) {
  return "error" in error2 && "suppressed" in error2;
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId, error2) {
  exception.mechanism = __spreadProps(__spreadValues(__spreadValues({
    handled: true,
    type: "auto.core.linked_errors"
  }, isExceptionGroup(error2) && { is_exception_group: true }), exception.mechanism), {
    exception_id: exceptionId
  });
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
  exception.mechanism = __spreadProps(__spreadValues({
    handled: true
  }, exception.mechanism), {
    type: "chained",
    source,
    exception_id: exceptionId,
    parent_id: parentId
  });
}

// node_modules/@sentry/core/build/esm/utils/eventbuilder.js
function hasSentryFetchUrlHost(error2) {
  return isError(error2) && "__sentry_fetch_url_host__" in error2 && typeof error2.__sentry_fetch_url_host__ === "string";
}
function _enhanceErrorWithSentryInfo(error2) {
  if (hasSentryFetchUrlHost(error2)) {
    return `${error2.message} (${error2.__sentry_fetch_url_host__})`;
  }
  return error2.message;
}

// node_modules/@sentry/core/build/esm/instrument/console.js
var _filter = /* @__PURE__ */ new Set([]);
function addConsoleInstrumentationHandler(handler) {
  const type = "console";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, instrumentConsole);
  return removeHandler;
}
function addConsoleInstrumentationFilter(filter2) {
  for (const f3 of filter2) {
    _filter.add(f3);
  }
  return () => {
    for (const f3 of filter2) {
      _filter.delete(f3);
    }
  };
}
var instrumentedLevels = /* @__PURE__ */ new Set();
function instrumentConsole() {
  if (!("console" in GLOBAL_OBJ)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (instrumentedLevels.has(level) || !(level in GLOBAL_OBJ.console)) {
      return;
    }
    instrumentedLevels.add(level);
    fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
      originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        const firstArg = args[0];
        const log2 = originalConsoleMethods[level];
        const isFiltered = _filter.size && typeof firstArg === "string" && stringMatchesSomePattern(firstArg, _filter);
        if (!isFiltered) {
          triggerHandlers("console", { args, level });
        }
        if (!isFiltered || DEBUG_BUILD && debug.isEnabled()) {
          log2 == null ? void 0 : log2.apply(GLOBAL_OBJ.console, args);
        }
      };
    });
  });
}

// node_modules/@sentry/core/build/esm/utils/severity.js
function severityLevelFromString(level) {
  return level === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(level) ? level : "log";
}

// node_modules/@sentry/core/build/esm/integrations/dedupe.js
var INTEGRATION_NAME4 = "Dedupe";
var _dedupeIntegration = (() => {
  let previousEvent;
  return {
    name: INTEGRATION_NAME4,
    processEvent(currentEvent) {
      if (currentEvent.type) {
        return currentEvent;
      }
      try {
        if (_shouldDropEvent2(currentEvent, previousEvent)) {
          DEBUG_BUILD && debug.warn("Event dropped due to being a duplicate of previously captured event.");
          return null;
        }
      } catch {
      }
      return previousEvent = currentEvent;
    }
  };
});
var dedupeIntegration = defineIntegration(_dedupeIntegration);
function _shouldDropEvent2(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;
  if (!currentMessage && !previousMessage) {
    return false;
  }
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
  const currentFrames = getFramesFromEvent(currentEvent);
  const previousFrames = getFramesFromEvent(previousEvent);
  if (!currentFrames || !previousFrames) {
    return !currentFrames && !previousFrames;
  }
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }
  for (let i3 = 0; i3 < previousFrames.length; i3++) {
    const frameA = previousFrames[i3];
    const frameB = currentFrames[i3];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
  const currentFingerprint = currentEvent.fingerprint;
  const previousFingerprint = previousEvent.fingerprint;
  if (!currentFingerprint || !previousFingerprint) {
    return !currentFingerprint && !previousFingerprint;
  }
  try {
    return !!(currentFingerprint.join("") === previousFingerprint.join(""));
  } catch {
    return false;
  }
}
function _getExceptionFromEvent(event) {
  var _a3, _b;
  return (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b[0];
}

// node_modules/@sentry/core/build/esm/integrations/console.js
var INTEGRATION_NAME5 = "Console";
var consoleIntegration = defineIntegration((options = {}) => {
  const levels = new Set(options.levels || CONSOLE_LEVELS);
  return {
    name: INTEGRATION_NAME5,
    setup(client) {
      const unsubscribe = addConsoleInstrumentationHandler(({ args, level }) => {
        if (getClient() !== client || !levels.has(level)) {
          return;
        }
        addConsoleBreadcrumb(level, args);
      });
      client.registerCleanup(unsubscribe);
      if (options.filter) {
        const unsubscribe2 = addConsoleInstrumentationFilter(options.filter);
        client.registerCleanup(unsubscribe2);
      }
    }
  };
});
function addConsoleBreadcrumb(level, args) {
  const breadcrumb = {
    category: "console",
    data: {
      arguments: args,
      logger: "console"
    },
    level: severityLevelFromString(level),
    message: formatConsoleArgs(args)
  };
  if (level === "assert") {
    if (args[0] === false) {
      const assertionArgs = args.slice(1);
      breadcrumb.message = assertionArgs.length > 0 ? `Assertion failed: ${formatConsoleArgs(assertionArgs)}` : "Assertion failed";
      breadcrumb.data.arguments = assertionArgs;
    } else {
      return;
    }
  }
  addBreadcrumb(breadcrumb, {
    input: args,
    level
  });
}
function formatConsoleArgs(values) {
  return "util" in GLOBAL_OBJ && typeof GLOBAL_OBJ.util.format === "function" ? GLOBAL_OBJ.util.format(...values) : safeJoin(values, " ");
}

// node_modules/@sentry/core/build/esm/integrations/conversationId.js
var INTEGRATION_NAME6 = "ConversationId";
var _conversationIdIntegration = (() => {
  return {
    name: INTEGRATION_NAME6,
    setup(client) {
      client.on("spanStart", (span) => {
        const scopeData = getCurrentScope().getScopeData();
        const isolationScopeData = getIsolationScope().getScopeData();
        const conversationId = scopeData.conversationId || isolationScopeData.conversationId;
        if (conversationId) {
          const { op, data: attributes, description: name } = spanToStaticSpanJSON(span);
          if (!(op == null ? void 0 : op.startsWith("gen_ai.")) && !attributes["ai.operationId"] && !(name == null ? void 0 : name.startsWith("ai."))) {
            return;
          }
          span.setAttribute(wr, conversationId);
        }
      });
    }
  };
});
var conversationIdIntegration = defineIntegration(_conversationIdIntegration);

// node_modules/@sentry/core/build/esm/fetch.js
function instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans, instrumentFetchRequestOptions) {
  if (!handlerData.fetchData) {
    return void 0;
  }
  const { method, url } = handlerData.fetchData;
  const shouldCreateSpanResult = hasSpansEnabled() && shouldCreateSpan(url);
  if (handlerData.endTimestamp) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;
    const span2 = spans[spanId];
    if (span2) {
      if (shouldCreateSpanResult) {
        endSpan(span2, handlerData);
        _callOnRequestSpanEnd(span2, handlerData, instrumentFetchRequestOptions);
      }
      delete spans[spanId];
    }
    return void 0;
  }
  const {
    spanOrigin = "auto.http.browser",
    propagateTraceparent = false,
    urlBase
  } = instrumentFetchRequestOptions ?? {};
  const client = getClient();
  const hasParent = !!getActiveSpan();
  const shouldEmitSpan = hasParent || !!client && hasSpanStreamingEnabled(client);
  const span = shouldCreateSpanResult && shouldEmitSpan ? startInactiveSpan(getSpanStartOptions(url, method, spanOrigin, client, urlBase)) : new SentryNonRecordingSpan();
  const spanForTraceHeaders = spanIsIgnored(span) && hasParent ? void 0 : span;
  if (shouldCreateSpanResult && !shouldEmitSpan) {
    client == null ? void 0 : client.recordDroppedEvent("no_parent_span", "span");
  }
  handlerData.fetchData.__span = span.spanContext().spanId;
  spans[span.spanContext().spanId] = span;
  if (shouldAttachHeaders2(handlerData.fetchData.url)) {
    const request = handlerData.args[0];
    const options = __spreadValues({}, handlerData.args[1] || {});
    const headers = _INTERNAL_getTracingHeadersForFetchRequest(
      request,
      options,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      hasSpansEnabled() && shouldEmitSpan ? spanForTraceHeaders : void 0,
      propagateTraceparent
    );
    if (headers) {
      handlerData.args[1] = options;
      options.headers = headers;
    }
  }
  if (client) {
    const fetchHint = {
      input: handlerData.args,
      response: handlerData.response,
      startTimestamp: handlerData.startTimestamp,
      endTimestamp: handlerData.endTimestamp
    };
    client.emit("beforeOutgoingRequestSpan", span, fetchHint);
  }
  return span;
}
function _callOnRequestSpanEnd(span, handlerData, instrumentFetchRequestOptions) {
  var _a3, _b;
  (_b = instrumentFetchRequestOptions == null ? void 0 : instrumentFetchRequestOptions.onRequestSpanEnd) == null ? void 0 : _b.call(instrumentFetchRequestOptions, span, {
    headers: (_a3 = handlerData.response) == null ? void 0 : _a3.headers,
    error: handlerData.error
  });
}
function _INTERNAL_getTracingHeadersForFetchRequest(request, fetchOptionsObj, span, propagateTraceparent) {
  const traceHeaders = getTraceData({ span, propagateTraceparent });
  const sentryTrace = traceHeaders["sentry-trace"];
  const baggage = traceHeaders.baggage;
  const traceparent = traceHeaders.traceparent;
  if (!sentryTrace) {
    return void 0;
  }
  const originalHeaders = fetchOptionsObj.headers || (isRequest(request) ? request.headers : void 0);
  if (!originalHeaders) {
    return __spreadValues(__spreadValues({
      "sentry-trace": sentryTrace
    }, baggage && { baggage }), traceparent && { traceparent });
  } else if (isHeaders(originalHeaders)) {
    const newHeaders = new Headers(originalHeaders);
    if (!newHeaders.get("sentry-trace")) {
      newHeaders.set("sentry-trace", sentryTrace);
    }
    if (propagateTraceparent && traceparent && !newHeaders.get("traceparent")) {
      newHeaders.set("traceparent", traceparent);
    }
    if (baggage) {
      const prevBaggageHeader = newHeaders.get("baggage");
      if (!prevBaggageHeader) {
        newHeaders.set("baggage", baggage);
      } else if (!baggageHeaderHasSentryBaggageValues(prevBaggageHeader)) {
        newHeaders.set("baggage", `${prevBaggageHeader},${baggage}`);
      }
    }
    return newHeaders;
  } else if (isHeadersInitTupleArray(originalHeaders)) {
    const newHeaders = [...originalHeaders];
    if (!newHeaders.find((header) => header[0] === "sentry-trace")) {
      newHeaders.push(["sentry-trace", sentryTrace]);
    }
    if (propagateTraceparent && traceparent && !newHeaders.find((header) => header[0] === "traceparent")) {
      newHeaders.push(["traceparent", traceparent]);
    }
    const prevBaggageHeaderWithSentryValues = originalHeaders.find(
      (header) => header[0] === "baggage" && typeof header[1] === "string" && baggageHeaderHasSentryBaggageValues(header[1])
    );
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newHeaders.push(["baggage", baggage]);
    }
    return newHeaders;
  } else {
    const existingSentryTraceHeader = "sentry-trace" in originalHeaders ? originalHeaders["sentry-trace"] : void 0;
    const existingTraceparentHeader = "traceparent" in originalHeaders ? originalHeaders.traceparent : void 0;
    const existingBaggageHeader = "baggage" in originalHeaders ? originalHeaders.baggage : void 0;
    const newBaggageHeaders = existingBaggageHeader ? Array.isArray(existingBaggageHeader) ? [...existingBaggageHeader] : [existingBaggageHeader] : [];
    const prevBaggageHeaderWithSentryValues = existingBaggageHeader && (Array.isArray(existingBaggageHeader) ? existingBaggageHeader.find((headerItem) => baggageHeaderHasSentryBaggageValues(headerItem)) : baggageHeaderHasSentryBaggageValues(existingBaggageHeader));
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newBaggageHeaders.push(baggage);
    }
    const newHeaders = Object.assign({}, originalHeaders, __spreadValues({
      "sentry-trace": existingSentryTraceHeader ?? sentryTrace
    }, newBaggageHeaders.length > 0 && { baggage: newBaggageHeaders.join(",") }));
    if (propagateTraceparent && traceparent && !existingTraceparentHeader) {
      newHeaders.traceparent = traceparent;
    }
    return newHeaders;
  }
}
function endSpan(span, handlerData) {
  var _a3, _b;
  if (handlerData.response) {
    setHttpStatus(span, handlerData.response.status);
    const contentLength = (_b = (_a3 = handlerData.response) == null ? void 0 : _a3.headers) == null ? void 0 : _b.get("content-length");
    if (contentLength) {
      const contentLengthNum = parseInt(contentLength);
      if (contentLengthNum > 0) {
        span.setAttribute(Ho, contentLengthNum);
      }
    }
  } else if (handlerData.error) {
    span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
  }
  span.end();
}
function baggageHeaderHasSentryBaggageValues(baggageHeader) {
  if (typeof baggageHeader !== "string") {
    return false;
  }
  return baggageHeader.split(",").some((baggageEntry) => baggageEntry.trim().startsWith(SENTRY_BAGGAGE_KEY_PREFIX));
}
function isHeaders(headers) {
  return typeof Headers !== "undefined" && isInstanceOf(headers, Headers);
}
function isHeadersInitTupleArray(headers) {
  if (!Array.isArray(headers)) {
    return false;
  }
  return headers.every(
    (item) => Array.isArray(item) && item.length === 2 && typeof item[0] === "string"
  );
}
function getSpanStartOptions(url, method, spanOrigin, client, urlBase) {
  const isStreamed = !!client && hasSpanStreamingEnabled(client);
  const domain = getUrlDomain(url, urlBase);
  if (url.startsWith("data:")) {
    const sanitizedUrl2 = stripDataUrlContent(url);
    return {
      name: isStreamed ? method : `${method} ${sanitizedUrl2}`,
      attributes: getFetchSpanAttributes(url, void 0, method, spanOrigin, client, domain)
    };
  }
  const parsedUrl = parseStringToURLObject(url);
  const sanitizedUrl = parsedUrl ? getSanitizedUrlStringFromUrlObject(parsedUrl) : url;
  return {
    name: isStreamed ? domain ? `${method} ${domain}` : method : `${method} ${sanitizedUrl}`,
    attributes: getFetchSpanAttributes(url, parsedUrl, method, spanOrigin, client, domain)
  };
}
function getFetchSpanAttributes(url, parsedUrl, method, spanOrigin, client, domain) {
  const attributes = {
    [ib]: filterCollectedUrl(stripDataUrlContent(url), client),
    type: "fetch",
    // oxlint-disable-next-line typescript/no-deprecated
    [Do]: method,
    [gm]: spanOrigin,
    [mm]: UE,
    [eb]: domain
  };
  if (parsedUrl) {
    if (!isURLObjectRelative(parsedUrl)) {
      attributes[ib] = filterCollectedUrl(stripDataUrlContent(parsedUrl.href), client);
      attributes[tg] = parsedUrl.hostname;
      attributes[ag] = parsedUrl.port ? Number(parsedUrl.port) : void 0;
    }
    attributes[pb] = filterCollectedUrlQuery(getUrlQuery(parsedUrl.search), client);
    attributes[tb] = getUrlFragment(parsedUrl.hash);
  }
  return attributes;
}

// node_modules/@sentry/core/build/esm/utils/supports.js
var WINDOW = GLOBAL_OBJ;
function _isFetchSupported() {
  if (!("fetch" in WINDOW)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
function isNativeFunction(func) {
  return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
function supportsNativeFetch() {
  var _a3;
  if (typeof EdgeRuntime === "string") {
    return true;
  }
  if (!_isFetchSupported()) {
    return false;
  }
  if (isNativeFunction(WINDOW.fetch)) {
    return true;
  }
  let result = false;
  const doc = WINDOW.document;
  if (doc && typeof doc.createElement === "function") {
    try {
      const sandbox = doc.createElement("iframe");
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if ((_a3 = sandbox.contentWindow) == null ? void 0 : _a3.fetch) {
        result = isNativeFunction(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      DEBUG_BUILD && debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
  }
  return result;
}

// node_modules/@sentry/core/build/esm/instrument/fetch.js
function addFetchInstrumentationHandler(handler) {
  const type = "fetch";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch());
  return removeHandler;
}
function instrumentFetch(onFetchResolved) {
  if (isBrowser() && !supportsNativeFetch()) {
    return;
  }
  fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
    return new Proxy(originalFetch, {
      apply(target, _thisArg, args) {
        const virtualError = new Error();
        const { method, url } = parseFetchArgs(args);
        const handlerData = {
          args,
          fetchData: {
            method,
            url
          },
          startTimestamp: timestampInSeconds() * 1e3,
          // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
          virtualError,
          headers: getHeadersFromFetchArgs(args)
        };
        if (!onFetchResolved) {
          triggerHandlers("fetch", __spreadValues({}, handlerData));
        }
        return Reflect.apply(target, GLOBAL_OBJ, args).then(
          async (response) => {
            if (onFetchResolved) {
              onFetchResolved(response);
            } else {
              triggerHandlers("fetch", __spreadProps(__spreadValues({}, handlerData), {
                endTimestamp: timestampInSeconds() * 1e3,
                response
              }));
            }
            return response;
          },
          (error2) => {
            triggerHandlers("fetch", __spreadProps(__spreadValues({}, handlerData), {
              endTimestamp: timestampInSeconds() * 1e3,
              error: error2
            }));
            if (isError(error2) && error2.stack === void 0) {
              error2.stack = virtualError.stack;
              addNonEnumerableProperty(error2, "framesToPop", 1);
            }
            const client = getClient();
            const enhanceOption = (client == null ? void 0 : client.getOptions().enhanceFetchErrorMessages) ?? "always";
            const shouldEnhance = enhanceOption !== false;
            if (shouldEnhance && isError(error2) && error2.name === "TypeError" && (error2.message === "Failed to fetch" || error2.message === "Load failed" || error2.message === "NetworkError when attempting to fetch resource.")) {
              try {
                const url2 = new URL(handlerData.fetchData.url);
                const hostname = url2.host;
                if (enhanceOption === "always") {
                  error2.message = `${error2.message} (${hostname})`;
                } else {
                  addNonEnumerableProperty(error2, "__sentry_fetch_url_host__", hostname);
                }
              } catch {
              }
            }
            throw error2;
          }
        );
      }
    });
  });
}
function hasProp(obj, prop) {
  return isObjectLike(obj) && !!obj[prop];
}
function getUrlFromResource(resource) {
  if (typeof resource === "string") {
    return resource;
  }
  if (!resource) {
    return "";
  }
  if (hasProp(resource, "url")) {
    return resource.url;
  }
  if (resource.toString) {
    return resource.toString();
  }
  return "";
}
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return { method: "GET", url: "" };
  }
  if (fetchArgs.length === 2) {
    const [resource, options] = fetchArgs;
    return {
      url: getUrlFromResource(resource),
      method: hasProp(options, "method") ? String(options.method).toUpperCase() : (
        // Request object as first argument
        isRequest(resource) && hasProp(resource, "method") ? String(resource.method).toUpperCase() : "GET"
      )
    };
  }
  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg),
    method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
  };
}
function getHeadersFromFetchArgs(fetchArgs) {
  const [requestArgument, optionsArgument] = fetchArgs;
  try {
    if (typeof optionsArgument === "object" && optionsArgument !== null && "headers" in optionsArgument && optionsArgument.headers) {
      return new Headers(optionsArgument.headers);
    }
    if (isRequest(requestArgument)) {
      return new Headers(requestArgument.headers);
    }
  } catch {
  }
  return;
}

// node_modules/@sentry/core/build/esm/utils/breadcrumb-log-level.js
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
  if (statusCode === void 0) {
    return void 0;
  } else if (statusCode >= 400 && statusCode < 500) {
    return "warning";
  } else if (statusCode >= 500) {
    return "error";
  } else {
    return void 0;
  }
}

// node_modules/@sentry/core/build/esm/utils/lru.js
var LRUMap = class {
  constructor(_maxSize) {
    this._maxSize = _maxSize;
    this._cache = /* @__PURE__ */ new Map();
  }
  /** Get the current size of the cache */
  get size() {
    return this._cache.size;
  }
  /** Get an entry or undefined if it was not in the cache. Re-inserts to update the recently used order */
  get(key) {
    const value = this._cache.get(key);
    if (value === void 0) {
      return void 0;
    }
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  }
  /** Insert an entry and evict an older entry if we've reached maxSize */
  set(key, value) {
    this._cache.delete(key);
    if (this._cache.size >= this._maxSize) {
      const nextKey = this._cache.keys().next().value;
      this._cache.delete(nextKey);
    }
    this._cache.set(key, value);
  }
  /** Remove an entry and return the entry if it was in the cache */
  remove(key) {
    const value = this._cache.get(key);
    if (value) {
      this._cache.delete(key);
    }
    return value;
  }
  /** Clear all entries */
  clear() {
    this._cache.clear();
  }
  /** Get all the keys */
  keys() {
    return Array.from(this._cache.keys());
  }
  /** Get all the values */
  values() {
    const values = [];
    this._cache.forEach((value) => values.push(value));
    return values;
  }
};

// node_modules/web-vitals/dist/web-vitals.js
var t = -1;
var n = () => t;
var e2 = (n3) => {
  addEventListener("pageshow", (e4) => {
    e4.persisted && (t = e4.timeStamp, n3(e4));
  }, true);
};
var i = (t3, n3, e4, i3) => {
  let o3, s3;
  return (a2) => {
    n3.value >= 0 && (a2 || i3) && (s3 = n3.value - (o3 ?? 0), (s3 || void 0 === o3) && (o3 = n3.value, n3.delta = s3, n3.rating = ((t4, n4) => t4 > n4[1] ? "poor" : t4 > n4[0] ? "needs-improvement" : "good")(n3.value, e4), t3(n3)));
  };
};
var o2 = (t3) => {
  requestAnimationFrame(() => requestAnimationFrame(() => t3()));
};
var s2 = () => {
  const t3 = performance.getEntriesByType("navigation")[0];
  if (t3 && t3.responseStart > 0 && t3.responseStart < performance.now()) return t3;
};
var a = () => {
  var _a3;
  return ((_a3 = s2()) == null ? void 0 : _a3.activationStart) ?? 0;
};
var r = -1;
var c = /* @__PURE__ */ new Set();
var f2 = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
var h2 = (t3) => {
  if ("hidden" === document.visibilityState) {
    if ("visibilitychange" === t3.type) for (const t4 of c) t4();
    isFinite(r) || (r = "visibilitychange" === t3.type ? t3.timeStamp : 0, removeEventListener("prerenderingchange", h2, true));
  }
};
var d2 = (t3 = false) => {
  var _a3;
  if (t3 && (r = 1 / 0), r < 0) {
    const t4 = a(), n3 = document.prerendering ? void 0 : (_a3 = globalThis.performance.getEntriesByType("visibility-state").find((n4) => "hidden" === n4.name && n4.startTime >= t4)) == null ? void 0 : _a3.startTime;
    r = n3 ?? f2(), addEventListener("visibilitychange", h2, true), addEventListener("prerenderingchange", h2, true), e2(() => {
      setTimeout(() => {
        r = f2();
      });
    });
  }
  return { get firstHiddenTime() {
    return r;
  }, onHidden(t4) {
    c.add(t4);
  } };
};
var l2 = (t3, e4 = -1, i3, o3 = 0, r2, c2, f3) => {
  const h3 = s2(), d3 = (h3 == null ? void 0 : h3.navigationId) || 0;
  let l3 = "navigate";
  i3 ? l3 = i3 : n() >= 0 ? l3 = "back-forward-cache" : h3 && (document.prerendering || a() > 0 ? l3 = "prerender" : document.wasDiscarded ? l3 = "restore" : h3.type && (l3 = h3.type.replace(/_/g, "-")));
  return { name: t3, value: e4, rating: "good", delta: 0, entries: [], id: `v6-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`, navigationType: l3, navigationId: o3 || d3, navigationInteractionId: r2, navigationURL: c2 || (h3 == null ? void 0 : h3.name), navigationStartTime: f3 || 0 };
};
var g = /* @__PURE__ */ new WeakMap();
function u(t3, n3) {
  let e4 = g.get(n3);
  return e4 || (e4 = /* @__PURE__ */ new WeakMap(), g.set(n3, e4)), e4.get(t3) || e4.set(t3, new n3()), e4.get(t3);
}
var v = class {
  t;
  i = 0;
  o = [];
  h(t3) {
    var _a3;
    if (t3.hadRecentInput) return;
    const n3 = this.o[0], e4 = this.o.at(-1);
    this.i && n3 && e4 && t3.startTime - e4.startTime < 1e3 && t3.startTime - n3.startTime < 5e3 ? (this.i += t3.value, this.o.push(t3)) : (this.i = t3.value, this.o = [t3]), (_a3 = this.t) == null ? void 0 : _a3.call(this, t3);
  }
};
var m2 = (t3, n3, e4 = {}) => {
  try {
    const i3 = t3.filter((t4) => PerformanceObserver.supportedEntryTypes.includes(t4));
    if (i3.length > 0) {
      const t4 = new PerformanceObserver((t5) => {
        queueMicrotask(() => {
          const e5 = t5.getEntries();
          i3.length > 1 && e5.sort((t6, n4) => t6.startTime + t6.duration - (n4.startTime + n4.duration)), n3(e5);
        });
      });
      for (const n4 of i3) t4.observe(__spreadValues({ type: n4, buffered: true }, e4));
      return t4;
    }
  } catch {
  }
};
var p2 = (t3) => {
  var _a3, _b, _c, _d;
  return ((_b = (_a3 = globalThis.PerformanceObserver) == null ? void 0 : _a3.supportedEntryTypes) == null ? void 0 : _b.includes("soft-navigation")) && "function" == typeof ((_d = (_c = globalThis.PerformanceSoftNavigation) == null ? void 0 : _c.prototype) == null ? void 0 : _d.getLargestInteractionContentfulPaint) && t3 && t3.reportSoftNavs;
};
var b2 = (t3, n3) => {
  if (t3.set(n3.navigationId, n3), t3.size > 2) {
    const n4 = t3.keys().next().value;
    void 0 !== n4 && t3.delete(n4);
  }
};
var T = (t3) => {
  let n3 = false;
  return () => {
    n3 || (t3(), n3 = true);
  };
};
var y = class {
  l;
};
var _2 = (t3) => {
  document.prerendering ? addEventListener("prerenderingchange", t3, true) : t3();
};
var E2 = [1800, 3e3];
var M = (t3, s3 = {}) => {
  const r2 = p2(s3);
  _2(() => {
    const c2 = u(s3, y), f3 = d2();
    let h3, g2 = l2("FCP");
    const v2 = m2(["paint"], (t4) => {
      for (const n3 of t4) "first-contentful-paint" === n3.name && (v2.disconnect(), n3.startTime < f3.firstHiddenTime && (g2.value = Math.max(n3.startTime - a(), 0), g2.entries.push(n3), g2.navigationId = n3.navigationId || g2.navigationId, h3(true)));
    });
    if (v2 && (h3 = i(t3, g2, E2, s3.reportAllChanges), e2((e4) => {
      g2 = l2("FCP", -1, "back-forward-cache", g2.navigationId, g2.navigationInteractionId, g2.navigationURL, n()), h3 = i(t3, g2, E2, s3.reportAllChanges), o2(() => {
        g2.value = performance.now() - e4.timeStamp, h3(true);
      });
    })), r2) {
      m2(["soft-navigation"], (n3) => {
        n3.forEach((n4) => {
          c2.l && n4.navigationId && b2(c2.l, n4);
          const e4 = Math.max((n4.presentationTime || n4.paintTime || 0) - n4.startTime, 0);
          g2 = l2("FCP", e4, "soft-navigation", n4.navigationId, n4.interactionId, n4.name, n4.startTime), h3 = i(t3, g2, E2, s3.reportAllChanges), h3(true);
        });
      }, s3);
    }
  });
};
var L2 = [0.1, 0.25];
var P2 = (t3, s3 = {}) => {
  const a2 = d2();
  M(T(() => {
    let r2, c2 = l2("CLS", 0);
    const f3 = u(s3, v), h3 = (n3, e4, o3, a3, h4) => {
      c2 = l2("CLS", 0, n3, e4, o3, a3, h4), f3.i = 0, r2 = i(t3, c2, L2, s3.reportAllChanges);
    }, d3 = (t4 = false) => {
      f3.i > c2.value && (c2.value = f3.i, c2.entries = f3.o), r2(t4);
    }, g2 = (t4) => {
      d3(true), h3("soft-navigation", t4.navigationId, t4.interactionId, t4.name, t4.startTime);
    }, b3 = (t4) => {
      for (const n3 of t4) "soft-navigation" !== n3.entryType ? f3.h(n3) : g2(n3);
      d3();
    }, T2 = ["layout-shift"];
    p2(s3) && T2.push("soft-navigation");
    const y2 = m2(T2, b3);
    y2 && (r2 = i(t3, c2, L2, s3.reportAllChanges), a2.onHidden(() => {
      b3(y2.takeRecords()), r2(true);
    }), e2(() => {
      h3("back-forward-cache", c2.navigationId, c2.navigationInteractionId, c2.navigationURL, n()), o2(r2);
    }), setTimeout(r2));
  }));
};
var w = 0;
var I = 1 / 0;
var k2 = 0;
var C = (t3) => {
  for (const n3 of t3) n3.interactionId && (I = Math.min(I, n3.interactionId), k2 = Math.max(k2, n3.interactionId), w = k2 ? (k2 - I) / 7 + 1 : 0);
};
var F2;
var N = () => F2 ? w : performance.interactionCount ?? 0;
var B2 = () => {
  "interactionCount" in performance || F2 || (F2 = m2(["event"], C, { durationThreshold: 0 }));
};
var S2 = class {
  u = 0;
  v = [];
  m = /* @__PURE__ */ new Map();
  p;
  T;
  _() {
    return N() - this.u;
  }
  M() {
    this.u = N(), this.v.length = 0, this.m.clear();
  }
  L(t3) {
    const n3 = this._(), e4 = Math.min(this.v.length - 1, Math.floor(n3 / 50));
    return !n3 || -1 !== e4 || "soft-navigation" !== t3 && "back-forward-cache" !== t3 ? this.v[e4] : { P: 8, id: -1, entries: [] };
  }
  h(t3) {
    var _a3, _b;
    if ((_a3 = this.p) == null ? void 0 : _a3.call(this, t3), !t3.interactionId) return;
    const n3 = this.v.at(-1);
    let e4 = this.m.get(t3.interactionId);
    if (e4 || this.v.length < 10 || t3.duration > n3.P) {
      if (e4 ? t3.duration > e4.P ? (e4.entries = [t3], e4.P = t3.duration) : t3.duration === e4.P && t3.startTime === e4.entries[0].startTime && e4.entries.push(t3) : (e4 = { id: t3.interactionId, entries: [t3], P: t3.duration }, this.m.set(e4.id, e4), this.v.push(e4)), this.v.sort((t4, n4) => n4.P - t4.P), this.v.length > 10) {
        const t4 = this.v.splice(10);
        for (const n4 of t4) this.m.delete(n4.id);
      }
      (_b = this.T) == null ? void 0 : _b.call(this, e4);
    }
  }
};
var q = (t3) => {
  const n3 = "requestIdleCallback" in globalThis ? 1e3 : 0, e4 = globalThis.requestIdleCallback || setTimeout, i3 = globalThis.cancelIdleCallback || clearTimeout;
  if ("hidden" === document.visibilityState) t3();
  else {
    const o3 = T(t3);
    let s3 = -1;
    const a2 = () => {
      i3(s3), o3();
    };
    addEventListener("visibilitychange", a2, { once: true, capture: true }), s3 = e4(() => {
      removeEventListener("visibilitychange", a2, { capture: true }), o3();
    }, { timeout: n3 });
  }
};
var A = [200, 500];
var x = (t3, o3 = {}) => {
  if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
  const s3 = d2();
  _2(() => {
    B2();
    let a2, r2 = l2("INP");
    const c2 = u(o3, S2), f3 = (n3, e4, s4, f4, h4) => {
      c2.M(), r2 = l2("INP", -1, n3, e4, s4, f4, h4), a2 = i(t3, r2, A, o3.reportAllChanges);
    }, h3 = () => {
      const t4 = c2.L(r2.navigationType);
      t4 && t4.P !== r2.value && (r2.value = t4.P, r2.entries = t4.entries, a2());
    }, d3 = (t4) => {
      h3(), a2(true), f3("soft-navigation", t4.navigationId, t4.interactionId, t4.name, t4.startTime);
    }, g2 = (t4, n3 = false) => {
      q(() => {
        for (const n4 of t4) "soft-navigation" !== n4.entryType ? c2.h(n4) : d3(n4);
        h3(), n3 && a2(true);
      });
    }, v2 = ["event", "first-input"];
    p2(o3) && v2.push("soft-navigation");
    const b3 = m2(v2, g2, __spreadProps(__spreadValues({}, o3), { durationThreshold: o3.durationThreshold ?? 40 }));
    a2 = i(t3, r2, A, o3.reportAllChanges), b3 && (s3.onHidden(() => {
      g2(b3.takeRecords(), true);
    }), e2(() => {
      f3("back-forward-cache", r2.navigationId, r2.navigationInteractionId, r2.navigationURL, n());
    }));
  });
};
var H2 = class {
  p;
  l;
  h(t3) {
    var _a3;
    (_a3 = this.p) == null ? void 0 : _a3.call(this, t3);
  }
};
var O = [2500, 4e3];
var U = (t3, s3 = {}) => {
  let r2 = false;
  const c2 = p2(s3);
  _2(() => {
    let f3, h3 = d2(), g2 = l2("LCP");
    const v2 = u(s3, H2), p3 = (n3, e4, o3, a2, c3) => {
      g2 = l2("LCP", -1, n3, e4, o3, a2, c3), f3 = i(t3, g2, O, s3.reportAllChanges), r2 = false, "soft-navigation" === n3 && (h3 = d2(true));
    }, T2 = (t4) => {
      var _a3;
      v2.l && t4.navigationId && b2(v2.l, t4), r2 || f3(true), p3("soft-navigation", t4.navigationId, t4.interactionId, t4.name, t4.startTime);
      const n3 = (_a3 = t4.getLargestInteractionContentfulPaint) == null ? void 0 : _a3.call(t4);
      n3 && y2([n3]);
    }, y2 = (t4) => {
      var _a3;
      s3.reportAllChanges || c2 || (t4 = t4.slice(-1));
      for (const n3 of t4) {
        if (!n3) continue;
        if ("soft-navigation" === n3.entryType) {
          T2(n3);
          continue;
        }
        let t5 = 0, e4 = [], i3 = n3.startTime;
        if ("largest-contentful-paint" === n3.entryType) t5 = Math.max(n3.startTime - a(), 0), v2.h(n3), e4 = [n3];
        else if ("interaction-contentful-paint" === n3.entryType) {
          const o3 = n3;
          if (!g2.navigationId) continue;
          if ("interactionId" in o3 && o3.interactionId != g2.navigationInteractionId) continue;
          i3 = ((_a3 = o3.largestContentfulPaint) == null ? void 0 : _a3.renderTime) || 0, t5 = Math.max(i3 - n3.startTime, 0), o3.largestContentfulPaint && (v2.h(o3.largestContentfulPaint), e4 = [o3.largestContentfulPaint]);
        }
        i3 < h3.firstHiddenTime && (g2.value = t5, g2.entries = e4, f3());
      }
    }, _3 = ["largest-contentful-paint"];
    c2 && _3.push("interaction-contentful-paint", "soft-navigation");
    const E3 = m2(_3, y2);
    if (E3) {
      f3 = i(t3, g2, O, s3.reportAllChanges);
      const a2 = ["keydown", "click", "visibilitychange"], h4 = (t4) => {
        if (t4.isTrusted && !r2) {
          const t5 = g2.id;
          q(() => {
            if (!r2) {
              if (!c2) {
                E3.disconnect();
                for (const t6 of a2) removeEventListener(t6, h4, { capture: true });
              }
              t5 === g2.id && (r2 = true, f3(true));
            }
          });
        }
      };
      for (const t4 of a2) addEventListener(t4, h4, { capture: true });
      e2((e4) => {
        p3("back-forward-cache", g2.navigationId, g2.navigationInteractionId, g2.navigationURL, n()), f3 = i(t3, g2, O, s3.reportAllChanges), o2(() => {
          g2.value = performance.now() - e4.timeStamp, r2 = true, f3(true);
        });
      });
    }
  });
};
var W2 = [800, 1800];
var $ = (t3) => {
  document.prerendering ? _2(() => $(t3)) : "complete" !== document.readyState ? addEventListener("load", () => $(t3), true) : setTimeout(t3);
};
var D2 = (t3, o3 = {}) => {
  const r2 = p2(o3);
  let c2 = l2("TTFB"), f3 = i(t3, c2, W2, o3.reportAllChanges);
  $(() => {
    const h3 = s2();
    if (h3) {
      const s3 = h3.responseStart;
      if (c2.value = Math.max(s3 - a(), 0), c2.entries = [h3], f3(true), e2(() => {
        c2 = l2("TTFB", 0, "back-forward-cache", c2.navigationId, c2.navigationInteractionId, c2.navigationURL, n()), f3 = i(t3, c2, W2, o3.reportAllChanges), f3(true);
      }), r2) {
        m2(["soft-navigation"], (n3) => {
          n3.forEach((n4) => {
            n4.navigationId && (c2 = l2("TTFB", 0, "soft-navigation", n4.navigationId, n4.interactionId, n4.name, n4.startTime), c2.entries = [n4], f3 = i(t3, c2, W2, o3.reportAllChanges), f3(true));
          });
        }, o3);
      }
    }
  });
};

// node_modules/@sentry/browser-utils/build/esm/debug-build.js
var DEBUG_BUILD2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// node_modules/@sentry/browser-utils/build/esm/instrumentation/performanceObserver.js
var handlers2 = {};
var instrumented2 = {};
var _previousCls;
var _previousLcp;
var _previousTtfb;
var _previousInp;
var _previousFcp;
var stopListeners = {};
var _reportSoftNavs = false;
var _reportBfcache = false;
function enableSoftNavigationReporting() {
  _reportSoftNavs = true;
}
function enableBfcacheReporting() {
  _reportBfcache = true;
}
function addClsInstrumentationHandler(callback, stopOnCallback = false) {
  return addMetricObserver("cls", callback, instrumentCls, _previousCls, stopOnCallback);
}
function addLcpInstrumentationHandler(callback, stopOnCallback = false) {
  return addMetricObserver("lcp", callback, instrumentLcp, _previousLcp, stopOnCallback);
}
function addTtfbInstrumentationHandler(callback) {
  return addMetricObserver("ttfb", callback, instrumentTtfb, _previousTtfb);
}
function addFcpInstrumentationHandler(callback) {
  return addMetricObserver("fcp", callback, instrumentFcp, _previousFcp);
}
function addInpInstrumentationHandler(callback) {
  return addMetricObserver("inp", callback, instrumentInp, _previousInp);
}
function addPerformanceInstrumentationHandler(type, callback) {
  addHandler2(type, callback);
  if (!instrumented2[type]) {
    instrumentPerformanceObserver(type);
    instrumented2[type] = true;
  }
  return getCleanupCallback(type, callback);
}
function triggerHandlers2(type, data) {
  const typeHandlers = handlers2[type];
  if (!(typeHandlers == null ? void 0 : typeHandlers.length)) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e4) {
      DEBUG_BUILD2 && debug.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
        e4
      );
    }
  }
}
function unlessBfcacheDisabled(callback) {
  return (metric) => {
    if (!_reportBfcache && metric.navigationType === "back-forward-cache") {
      return;
    }
    callback(metric);
  };
}
function instrumentCls() {
  return P2(
    unlessBfcacheDisabled((metric) => {
      triggerHandlers2("cls", {
        metric
      });
      _previousCls = metric;
    }),
    // We want the callback to be called whenever the CLS value updates.
    // By default, the callback is only called when the tab goes to the background.
    { reportAllChanges: !_reportSoftNavs && !_reportBfcache, reportSoftNavs: _reportSoftNavs }
  );
}
function instrumentLcp() {
  return U(
    unlessBfcacheDisabled((metric) => {
      triggerHandlers2("lcp", {
        metric
      });
      _previousLcp = metric;
    }),
    // We want the callback to be called whenever the LCP value updates.
    // By default, the callback is only called when the tab goes to the background.
    { reportAllChanges: !_reportSoftNavs && !_reportBfcache, reportSoftNavs: _reportSoftNavs }
  );
}
function instrumentTtfb() {
  return D2(
    unlessBfcacheDisabled((metric) => {
      triggerHandlers2("ttfb", {
        metric
      });
      _previousTtfb = metric;
    })
  );
}
function instrumentFcp() {
  return M(
    unlessBfcacheDisabled((metric) => {
      triggerHandlers2("fcp", {
        metric
      });
      _previousFcp = metric;
    })
  );
}
function instrumentInp() {
  return x(
    unlessBfcacheDisabled((metric) => {
      triggerHandlers2("inp", {
        metric
      });
      _previousInp = metric;
    }),
    { reportSoftNavs: _reportSoftNavs }
  );
}
function addMetricObserver(type, callback, instrumentFn, previousValue, stopOnCallback = false) {
  addHandler2(type, callback);
  if (!instrumented2[type]) {
    instrumented2[type] = true;
    void Promise.resolve().then(() => {
      stopListeners[type] = instrumentFn();
    });
  }
  if (previousValue) {
    callback({ metric: previousValue });
  }
  return getCleanupCallback(type, callback, stopOnCallback);
}
function instrumentPerformanceObserver(type) {
  const options = { type, buffered: true };
  if (type === "event") {
    options.durationThreshold = 0;
  }
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po = new PerformanceObserver((list) => {
        void Promise.resolve().then(() => {
          triggerHandlers2(type, { entries: list.getEntries() });
        });
      });
      po.observe(options);
    }
  } catch {
  }
}
function addHandler2(type, handler) {
  handlers2[type] = handlers2[type] || [];
  handlers2[type].push(handler);
}
function getCleanupCallback(type, callback, stopOnCleanup = false) {
  return () => {
    var _a3;
    if (stopOnCleanup) {
      (_a3 = stopListeners[type]) == null ? void 0 : _a3.call(stopListeners);
    }
    const typeHandlers = handlers2[type];
    if (!typeHandlers) {
      return;
    }
    const index = typeHandlers.indexOf(callback);
    if (index !== -1) {
      typeHandlers.splice(index, 1);
    }
  };
}
function isPerformanceEventTiming(entry) {
  return "duration" in entry;
}

// node_modules/@sentry/browser-utils/build/esm/types.js
var WINDOW2 = GLOBAL_OBJ;

// node_modules/@sentry/browser-utils/build/esm/web-vitals/softNavs.js
var MAX_TRACKED_NAVIGATIONS = 5;
var INTERACTION_MATCH_TOLERANCE_MS = 5;
var _pendingNavigation;
var _pendingInteraction;
var _lastInteractionTimestamp;
var _interactionIdToNavigationSpan = new LRUMap(MAX_TRACKED_NAVIGATIONS);
var _navigationIdToNavigationSpan = new LRUMap(MAX_TRACKED_NAVIGATIONS);
var _correlationStarted = false;
function interactionMatches(entryStartTime, interactionTimestamp) {
  return Math.abs(entryStartTime - interactionTimestamp) <= INTERACTION_MATCH_TOLERANCE_MS;
}
function supportsSoftNavigations() {
  var _a3, _b;
  try {
    return PerformanceObserver.supportedEntryTypes.includes("soft-navigation") && // Older implementations exposed this as an attribute rather than a method. Only the method
    // form shipped unflagged, so it's what web-vitals gates on.
    typeof ((_b = (_a3 = WINDOW2.PerformanceSoftNavigation) == null ? void 0 : _a3.prototype) == null ? void 0 : _b.getLargestInteractionContentfulPaint) === "function";
  } catch {
    return false;
  }
}
function startSoftNavigationCorrelation(client) {
  if (_correlationStarted || !supportsSoftNavigations()) {
    return;
  }
  _correlationStarted = true;
  const onInteraction = (event) => {
    if (event.isTrusted) {
      _lastInteractionTimestamp = event.timeStamp;
    }
  };
  WINDOW2.addEventListener("click", onInteraction, { capture: true, passive: true });
  WINDOW2.addEventListener("keydown", onInteraction, { capture: true, passive: true });
  client.on("spanStart", (span) => {
    var _a3;
    if (((_a3 = spanToJSON(span).attributes) == null ? void 0 : _a3[mm]) !== "navigation") {
      return;
    }
    _pendingNavigation = void 0;
    const interactionTimestamp = _lastInteractionTimestamp;
    if (interactionTimestamp == null) {
      return;
    }
    if ((_pendingInteraction == null ? void 0 : _pendingInteraction.interactionTimestamp) === interactionTimestamp) {
      _interactionIdToNavigationSpan.set(_pendingInteraction.interactionId, span);
      _pendingInteraction = void 0;
      return;
    }
    _pendingNavigation = { span, interactionTimestamp };
  });
  const bindInteractionToNavigationSpan = ({ entries }) => {
    for (const entry of entries) {
      if (!isPerformanceEventTiming(entry) || !entry.interactionId) {
        continue;
      }
      const pending = _pendingNavigation;
      if (pending && interactionMatches(entry.startTime, pending.interactionTimestamp)) {
        _interactionIdToNavigationSpan.set(entry.interactionId, pending.span);
        _pendingNavigation = void 0;
        continue;
      }
      if (_interactionIdToNavigationSpan.get(entry.interactionId)) {
        continue;
      }
      if (_lastInteractionTimestamp != null && interactionMatches(entry.startTime, _lastInteractionTimestamp)) {
        _pendingInteraction = { interactionId: entry.interactionId, interactionTimestamp: _lastInteractionTimestamp };
      }
    }
  };
  addPerformanceInstrumentationHandler("event", bindInteractionToNavigationSpan);
  addPerformanceInstrumentationHandler("first-input", bindInteractionToNavigationSpan);
  addPerformanceInstrumentationHandler("soft-navigation", ({ entries }) => {
    for (const entry of entries) {
      const span = _interactionIdToNavigationSpan.get(entry.interactionId);
      if (!span) {
        DEBUG_BUILD2 && debug.log(`[SoftNav] No navigation span found for soft navigation ${entry.navigationId}`, entry);
        continue;
      }
      _navigationIdToNavigationSpan.set(entry.navigationId, span);
      span.setAttribute(Bt, entry.navigationId);
    }
  });
}
function getNavigationSpanForMetric(metric) {
  if (metric.navigationType !== "soft-navigation") {
    return void 0;
  }
  const span = _navigationIdToNavigationSpan.get(metric.navigationId);
  if (span) {
    return span;
  }
  return metric.navigationInteractionId != null ? _interactionIdToNavigationSpan.get(metric.navigationInteractionId) : void 0;
}

// node_modules/@sentry/browser-utils/build/esm/performance/utils.js
function isMeasurementValue(value) {
  return typeof value === "number" && isFinite(value);
}
function startAndEndSpan(parentSpan, startTimeInSeconds, endTime, _a3) {
  var ctx = __objRest(_a3, []);
  const parentStartTime = spanToStaticSpanJSON(parentSpan).start_timestamp;
  if (parentStartTime && parentStartTime > startTimeInSeconds) {
    if (typeof parentSpan.updateStartTime === "function") {
      parentSpan.updateStartTime(startTimeInSeconds);
    }
  }
  return withActiveSpan(parentSpan, () => {
    const span = startInactiveSpan2(__spreadValues({
      startTime: startTimeInSeconds
    }, ctx));
    if (span) {
      span.end(endTime);
    }
    return span;
  });
}
function getBrowserPerformanceAPI() {
  return WINDOW2.addEventListener && WINDOW2.performance;
}
function msToSec(time) {
  return time / 1e3;
}
function extractNetworkProtocol(nextHopProtocol) {
  let name = "unknown";
  let version = "unknown";
  let _name = "";
  for (const char of nextHopProtocol) {
    if (char === "/") {
      [name, version] = nextHopProtocol.split("/");
      break;
    }
    if (!isNaN(Number(char))) {
      name = _name === "h" ? "http" : _name;
      version = nextHopProtocol.split(_name)[1];
      break;
    }
    _name += char;
  }
  if (_name === nextHopProtocol) {
    name = _name;
  }
  return { name, version };
}
function supportsWebVital(entryType) {
  try {
    return PerformanceObserver.supportedEntryTypes.includes(entryType);
  } catch {
    return false;
  }
}

// node_modules/@sentry/browser-utils/build/esm/performance/resourceTiming.js
function resourceTimingToSpanAttributes(resourceTiming) {
  const timingSpanData = {};
  if (resourceTiming.nextHopProtocol != void 0) {
    const { name, version } = extractNetworkProtocol(resourceTiming.nextHopProtocol);
    timingSpanData["network.protocol.version"] = version;
    timingSpanData["network.protocol.name"] = name;
  }
  if (performanceTimeToSeconds(resourceTiming.startTime) === void 0) {
    return timingSpanData;
  }
  const getAbsoluteTime2 = (time) => (
    // falsy values should be preserved so that we can later on drop undefined values and
    // preserve 0 vals for cross-origin resources without proper `Timing-Allow-Origin` header.
    time ? performanceTimeToSeconds(time, resourceTiming.startTime) : time
  );
  return dropUndefinedKeysFromObject(__spreadProps(__spreadValues({}, timingSpanData), {
    "http.request.redirect_start": getAbsoluteTime2(resourceTiming.redirectStart),
    "http.request.redirect_end": getAbsoluteTime2(resourceTiming.redirectEnd),
    "http.request.worker_start": getAbsoluteTime2(resourceTiming.workerStart),
    "http.request.fetch_start": getAbsoluteTime2(resourceTiming.fetchStart),
    "http.request.domain_lookup_start": getAbsoluteTime2(resourceTiming.domainLookupStart),
    "http.request.domain_lookup_end": getAbsoluteTime2(resourceTiming.domainLookupEnd),
    "http.request.connect_start": getAbsoluteTime2(resourceTiming.connectStart),
    "http.request.secure_connection_start": getAbsoluteTime2(resourceTiming.secureConnectionStart),
    "http.request.connection_end": getAbsoluteTime2(resourceTiming.connectEnd),
    "http.request.request_start": getAbsoluteTime2(resourceTiming.requestStart),
    "http.request.response_start": getAbsoluteTime2(resourceTiming.responseStart),
    "http.request.response_end": getAbsoluteTime2(resourceTiming.responseEnd),
    // For TTFB we actually want the relative time from timeOrigin to responseStart
    // This way, TTFB always measures the "first page load" experience.
    // see: https://web.dev/articles/ttfb#measure-resource-requests
    "http.request.time_to_first_byte": resourceTiming.responseStart != null ? msToSec(resourceTiming.responseStart) : void 0
  }));
}
function dropUndefinedKeysFromObject(attrs) {
  return Object.fromEntries(Object.entries(attrs).filter(([, value]) => value != null));
}

// node_modules/@sentry/browser-utils/build/esm/performance/entries.js
var MAX_INT_AS_BYTES = 2147483647;
var _performanceCursor = 0;
function startTrackingLongTasks() {
  addPerformanceInstrumentationHandler("longtask", ({ entries }) => {
    const parent = getActiveSpan();
    if (!parent) {
      return;
    }
    const { attributes: parentAttributes, start_timestamp: parentStartTimestamp } = spanToJSON(parent);
    for (const entry of entries) {
      const startTime = performanceTimeToSeconds(entry.startTime);
      if (!startTime) {
        continue;
      }
      const duration = msToSec(entry.duration);
      if (parentAttributes[mm] === "navigation" && parentStartTimestamp && startTime < parentStartTimestamp) {
        continue;
      }
      startAndEndSpan(parent, startTime, startTime + duration, {
        name: UI_LONG_TASK_SPAN_NAME_FALLBACK,
        op: Q,
        attributes: {
          [gm]: "auto.ui.browser.metrics"
        }
      });
    }
  });
}
function startTrackingLongAnimationFrames() {
  const observer = new PerformanceObserver((list) => {
    const parent = getActiveSpan();
    if (!parent) {
      return;
    }
    for (const entry of list.getEntries()) {
      const startTime = performanceTimeToSeconds(entry.startTime);
      if (!startTime || !entry.scripts[0]) {
        continue;
      }
      const {
        start_timestamp: parentStartTimestamp,
        attributes: { [mm]: parentOp }
      } = spanToJSON(parent);
      if (parentOp === "navigation" && parentStartTimestamp && startTime < parentStartTimestamp) {
        continue;
      }
      const duration = msToSec(entry.duration);
      const attributes = {
        [gm]: "auto.ui.browser.metrics"
      };
      const initialScript = entry.scripts[0];
      const { invoker, invokerType, sourceURL, sourceFunctionName, sourceCharPosition } = initialScript;
      attributes["browser.script.invoker"] = invoker;
      attributes["browser.script.invoker_type"] = invokerType;
      if (sourceURL) {
        attributes[na] = sourceURL;
      }
      if (sourceFunctionName) {
        attributes[la] = sourceFunctionName;
      }
      if (sourceCharPosition !== -1) {
        attributes["browser.script.source_char_position"] = sourceCharPosition;
      }
      startAndEndSpan(parent, startTime, startTime + duration, {
        name: UI_LONG_TASK_SPAN_NAME_FALLBACK,
        op: W,
        attributes
      });
    }
  });
  observer.observe({ type: "long-animation-frame", buffered: true });
}
function addPerformanceEntries(span, options) {
  const performance2 = getBrowserPerformanceAPI();
  if (!(performance2 == null ? void 0 : performance2.getEntries)) {
    return;
  }
  const { spanStreamingEnabled, ignoreResourceSpans } = options;
  const performanceEntries = performance2.getEntries();
  const { attributes, start_timestamp: transactionStartTime } = spanToJSON(span);
  performanceEntries.slice(_performanceCursor).forEach((entry) => {
    const startTimestamp = performanceTimeToSeconds(entry.startTime);
    if (!startTimestamp) {
      return;
    }
    const duration = msToSec(
      // Inexplicably, Chrome sometimes emits a negative duration. We need to work around this.
      // There is a SO post attempting to explain this, but it leaves one with open questions: https://stackoverflow.com/questions/23191918/peformance-getentries-and-negative-duration-display
      // The way we clamp the value is probably not accurate, since we have observed this happen for things that may take a while to load, like for example the replay worker.
      // TODO: Investigate why this happens and how to properly mitigate. For now, this is a workaround to prevent transactions being dropped due to negative duration spans.
      Math.max(0, entry.duration)
    );
    if (attributes[mm] === "navigation" && transactionStartTime && startTimestamp < transactionStartTime) {
      return;
    }
    switch (entry.entryType) {
      case "navigation": {
        _addNavigationSpans(span, entry, spanStreamingEnabled);
        break;
      }
      case "paint": {
        _addPaintSpan(span, entry, startTimestamp, duration);
        break;
      }
      case "resource": {
        _addResourceSpans(
          span,
          entry,
          entry.name,
          startTimestamp,
          duration,
          ignoreResourceSpans,
          spanStreamingEnabled
        );
        break;
      }
    }
  });
  _performanceCursor = Math.max(performanceEntries.length - 1, 0);
  _trackNavigator(span, spanStreamingEnabled);
}
function _addPaintSpan(span, entry, startTimestamp, duration) {
  startAndEndSpan(span, startTimestamp, startTimestamp + duration, {
    // The entry name (`first-paint`, `first-contentful-paint`) is already the low-cardinality name
    // the conventions ask for, so only the attribute backing it has to be added.
    name: entry.name,
    attributes: {
      [mm]: s,
      [gm]: "auto.resource.browser.metrics",
      [Ht]: entry.name
    }
  });
}
function _addNavigationSpans(span, entry, spanStreamingEnabled) {
  _addPerformanceNavigationTiming(span, entry, "unloadEvent", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "redirect", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "domContentLoadedEvent", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "loadEvent", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "connect", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "secureConnection", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "fetch", spanStreamingEnabled);
  _addPerformanceNavigationTiming(span, entry, "domainLookup", spanStreamingEnabled);
  _addRequest(span, entry, spanStreamingEnabled);
}
function _navigationTimeToSeconds(entry, time) {
  return performanceTimeToSeconds(time, entry.startTime);
}
var NAVIGATION_TIMING_SPAN_OPS = {
  secureConnection: d,
  fetch: D,
  domainLookup: b,
  unloadEvent: S,
  redirect: l,
  connect: P,
  domContentLoadedEvent: L,
  loadEvent: p
};
function _addPerformanceNavigationTiming(span, entry, event, spanStreamingEnabled) {
  const eventEnd = _getEndPropertyNameForNavigationTiming(event);
  const end = entry[eventEnd];
  const start = entry[`${event}Start`];
  if (!start || !end) {
    return;
  }
  const op = NAVIGATION_TIMING_SPAN_OPS[event];
  const filteredUrl = filterCollectedUrl(entry.name);
  startAndEndSpan(span, _navigationTimeToSeconds(entry, start), _navigationTimeToSeconds(entry, end), {
    // With span streaming, span names have to be low cardinality, so we can't fall back to the
    // document URL. `url.full` keeps it, and is what Relay derives the description from.
    name: spanStreamingEnabled ? BROWSER_NAVIGATION_TIMING_SPAN_NAMES[op] : filteredUrl,
    attributes: __spreadValues({
      [mm]: op,
      [gm]: "auto.ui.browser.metrics",
      [ib]: filteredUrl
    }, event === "redirect" && entry.redirectCount != null ? { "http.redirect_count": entry.redirectCount } : {})
  });
}
function _getEndPropertyNameForNavigationTiming(event) {
  if (event === "secureConnection") {
    return "connectEnd";
  }
  if (event === "fetch") {
    return "domainLookupStart";
  }
  return `${event}End`;
}
function _addRequest(span, entry, spanStreamingEnabled) {
  const requestStartTimestamp = _navigationTimeToSeconds(entry, entry.requestStart);
  const responseEndTimestamp = _navigationTimeToSeconds(entry, entry.responseEnd);
  const responseStartTimestamp = _navigationTimeToSeconds(entry, entry.responseStart);
  if (entry.responseEnd) {
    const filteredUrl = filterCollectedUrl(entry.name);
    startAndEndSpan(span, requestStartTimestamp, responseEndTimestamp, {
      name: spanStreamingEnabled ? BROWSER_NAVIGATION_TIMING_SPAN_NAMES[B] : filteredUrl,
      attributes: {
        [mm]: B,
        [gm]: "auto.ui.browser.metrics",
        [ib]: filteredUrl
      }
    });
    startAndEndSpan(span, responseStartTimestamp, responseEndTimestamp, {
      name: spanStreamingEnabled ? BROWSER_NAVIGATION_TIMING_SPAN_NAMES[m] : filteredUrl,
      attributes: {
        [mm]: m,
        [gm]: "auto.ui.browser.metrics",
        [ib]: filteredUrl
      }
    });
  }
}
function _addResourceSpans(span, entry, resourceUrl, startTimestamp, duration, ignoredResourceSpanOps, spanStreamingEnabled) {
  var _a3;
  if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") {
    return;
  }
  const op = entry.initiatorType ? `resource.${entry.initiatorType}` : o;
  if (ignoredResourceSpanOps == null ? void 0 : ignoredResourceSpanOps.includes(op)) {
    return;
  }
  const attributes = {
    [gm]: "auto.resource.browser.metrics"
  };
  const parsedUrl = parseUrl(resourceUrl);
  if (parsedUrl.protocol) {
    attributes[ub] = parsedUrl.protocol.split(":").pop();
  }
  const host = (_a3 = parsedUrl.host) == null ? void 0 : _a3.replace(/^.*@/, "");
  if (host) {
    attributes[tg] = host;
  }
  const domain = host == null ? void 0 : host.replace(/:\d+$/, "");
  if (domain) {
    attributes[eb] = domain;
  }
  attributes[Vo] = resourceUrl.includes(WINDOW2.location.origin);
  const filteredUrl = filterCollectedUrl(resourceUrl);
  attributes[ib] = filteredUrl;
  _setResourceRequestAttributes(entry, attributes, [
    // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStatus
    ["responseStatus", el],
    ["transferSize", $o],
    ["encodedBodySize", Ho],
    ["decodedBodySize", "http.response.body.decoded_size"],
    // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus
    ["renderBlockingStatus", "resource.render_blocking_status"],
    // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/deliveryType
    ["deliveryType", "http.response_delivery_type"]
  ]);
  const attributesWithResourceTiming = __spreadValues(__spreadValues({}, attributes), resourceTimingToSpanAttributes(entry));
  const endTimestamp = startTimestamp + duration;
  startAndEndSpan(span, startTimestamp, endTimestamp, {
    // With span streaming, span names have to be low cardinality, so we can't fall back to the URL.
    name: spanStreamingEnabled ? domain || RESOURCE_SPAN_NAME_FALLBACK : filteredUrl.replace(WINDOW2.location.origin, ""),
    op,
    attributes: attributesWithResourceTiming
  });
}
function _trackNavigator(span, spanStreamingEnabled) {
  const navigator = WINDOW2.navigator;
  if (!navigator) {
    return;
  }
  const connection = navigator.connection;
  if (connection) {
    if (connection.effectiveType) {
      span.setAttribute(
        spanStreamingEnabled ? Ic : "effectiveConnectionType",
        connection.effectiveType
      );
    }
    if (connection.type) {
      span.setAttribute(spanStreamingEnabled ? wc : "connectionType", connection.type);
    }
    if (isMeasurementValue(connection.rtt)) {
      if (spanStreamingEnabled) {
        span.setAttribute(Ac, connection.rtt);
      } else if (spanToJSON(span).attributes[mm] === "pageload") {
        setMeasurement("connection.rtt", connection.rtt, "millisecond");
      }
    }
  }
  if (isMeasurementValue(navigator.deviceMemory)) {
    if (spanStreamingEnabled) {
      span.setAttribute("device.memory.estimated_capacity", navigator.deviceMemory);
    } else {
      span.setAttribute("deviceMemory", `${navigator.deviceMemory} GB`);
    }
  }
  if (isMeasurementValue(navigator.hardwareConcurrency)) {
    if (spanStreamingEnabled) {
      span.setAttribute("device.processor_count", navigator.hardwareConcurrency);
    } else {
      span.setAttribute("hardwareConcurrency", String(navigator.hardwareConcurrency));
    }
  }
}
function _setResourceRequestAttributes(entry, attributes, properties) {
  properties.forEach(([entryKey, attributeKey]) => {
    const entryVal = entry[entryKey];
    if (entryVal != null && (typeof entryVal === "number" && entryVal < MAX_INT_AS_BYTES || typeof entryVal === "string")) {
      attributes[attributeKey] = entryVal;
    }
  });
}

// node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js
var DEFAULT_MAX_STRING_LENGTH = 80;
var accessors = {};
try {
  if (typeof Node !== "undefined") {
    accessors.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get;
  }
  if (typeof Element !== "undefined") {
    accessors.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get;
    accessors.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get;
    accessors.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get;
    accessors.getAttribute = Element.prototype.getAttribute;
  }
  if (typeof HTMLElement !== "undefined") {
    accessors.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get;
  }
} catch {
}
function _safeRead(el2, prop, arg) {
  const fn = accessors[prop];
  if (fn) {
    try {
      return fn.call(el2, arg);
    } catch {
    }
  }
  const val = el2[prop];
  return typeof val === "function" ? val.call(el2, arg) : val;
}
function htmlTreeAsString(elem, options = {}) {
  if (!elem) {
    return "<unknown>";
  }
  try {
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = " > ";
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
        break;
      }
      out.push(nextStr);
      len += nextStr.length;
      currentElem = _safeRead(currentElem, "parentNode");
    }
    return out.reverse().join(separator);
  } catch {
    return "<unknown>";
  }
}
function _htmlElementAsString(el2, keyAttrs) {
  const out = [];
  const tagName = _safeRead(el2, "tagName");
  if (!tagName) {
    return "";
  }
  if (typeof HTMLElement !== "undefined") {
    if (el2 instanceof HTMLElement) {
      const dataset = _safeRead(el2, "dataset");
      if (dataset) {
        if (dataset["sentryComponent"]) {
          return dataset["sentryComponent"];
        }
        if (dataset["sentryElement"]) {
          return dataset["sentryElement"];
        }
      }
    }
  }
  out.push(tagName.toLowerCase());
  const keyAttrPairs = (keyAttrs == null ? void 0 : keyAttrs.length) ? keyAttrs.filter((keyAttr) => _safeRead(el2, "getAttribute", keyAttr)).map((keyAttr) => [keyAttr, _safeRead(el2, "getAttribute", keyAttr)]) : null;
  if (keyAttrPairs == null ? void 0 : keyAttrPairs.length) {
    keyAttrPairs.forEach((keyAttrPair) => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    const id = _safeRead(el2, "id");
    if (id) {
      out.push(`#${id}`);
    }
    const className = _safeRead(el2, "className");
    if (className && isString(className)) {
      const classes = className.split(/\s+/);
      for (const c2 of classes) {
        out.push(`.${c2}`);
      }
    }
  }
  for (const k3 of ["aria-label", "type", "name", "title", "alt"]) {
    const attr = _safeRead(el2, "getAttribute", k3);
    if (attr) {
      out.push(`[${k3}="${attr}"]`);
    }
  }
  return out.join("");
}

// node_modules/@sentry/browser-utils/build/esm/web-vitals/lcp.js
var MAX_PLAUSIBLE_LCP_DURATION = 6e4;
function isValidLcpMetric(lcpValue) {
  return lcpValue != null && lcpValue > 0 && lcpValue <= MAX_PLAUSIBLE_LCP_DURATION;
}

// node_modules/@sentry/browser-utils/build/esm/web-vitals/utils.js
function addPageListener(type, listener, options) {
  if (WINDOW2.document) {
    WINDOW2.addEventListener(type, listener, options);
  }
}
function removePageListener(type, listener, options) {
  if (WINDOW2.document) {
    WINDOW2.removeEventListener(type, listener, options);
  }
}
var getNavigationEntry = (checkResponseStart = true) => {
  var _a3, _b;
  const navigationEntry = (_b = (_a3 = WINDOW2.performance) == null ? void 0 : _a3.getEntriesByType) == null ? void 0 : _b.call(_a3, "navigation")[0];
  if (
    // sentry-specific change:
    // We don't want to check for responseStart for our own use of `getNavigationEntry`
    !checkResponseStart || navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()
  ) {
    return navigationEntry;
  }
};
var getActivationStart = () => {
  const navEntry = getNavigationEntry();
  return (navEntry == null ? void 0 : navEntry.activationStart) ?? 0;
};
var onHidden = (cb) => {
  const onHiddenCallback = (event) => {
    var _a3;
    if (((_a3 = WINDOW2.document) == null ? void 0 : _a3.visibilityState) === "hidden") {
      cb(event);
    }
  };
  addPageListener("visibilitychange", onHiddenCallback, { capture: true });
};
var firstHiddenTime = -1;
var onHiddenFunctions = /* @__PURE__ */ new Set();
var initHiddenTime = () => {
  var _a3, _b;
  return ((_a3 = WINDOW2.document) == null ? void 0 : _a3.visibilityState) === "hidden" && !((_b = WINDOW2.document) == null ? void 0 : _b.prerendering) ? 0 : Infinity;
};
var onVisibilityUpdate = (event) => {
  var _a3;
  if (((_a3 = WINDOW2.document) == null ? void 0 : _a3.visibilityState) === "hidden" && firstHiddenTime > -1) {
    if (event.type === "visibilitychange") {
      for (const onHiddenFunction of onHiddenFunctions) {
        onHiddenFunction();
      }
    }
    if (!isFinite(firstHiddenTime)) {
      firstHiddenTime = event.type === "visibilitychange" ? event.timeStamp : 0;
      removePageListener("prerenderingchange", onVisibilityUpdate, true);
    }
  }
};
var getVisibilityWatcher = () => {
  var _a3;
  if (WINDOW2.document && firstHiddenTime < 0) {
    const activationStart = getActivationStart();
    const firstVisibilityStateHiddenTime = !WINDOW2.document.prerendering ? (_a3 = globalThis.performance.getEntriesByType("visibility-state").filter((e4) => e4.name === "hidden" && e4.startTime > activationStart)[0]) == null ? void 0 : _a3.startTime : void 0;
    firstHiddenTime = firstVisibilityStateHiddenTime ?? initHiddenTime();
    addPageListener("visibilitychange", onVisibilityUpdate, true);
    addPageListener("prerenderingchange", onVisibilityUpdate, true);
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    },
    onHidden(cb) {
      onHiddenFunctions.add(cb);
    }
  };
};
var whenIdleOrHidden = (cb) => {
  var _a3;
  const rIC = WINDOW2.requestIdleCallback || WINDOW2.setTimeout;
  if (((_a3 = WINDOW2.document) == null ? void 0 : _a3.visibilityState) === "hidden") {
    cb();
  } else {
    let called = false;
    const runOnce = () => {
      if (!called) {
        cb();
        called = true;
      }
    };
    addPageListener("visibilitychange", runOnce, { once: true, capture: true });
    rIC(() => {
      runOnce();
      removePageListener("visibilitychange", runOnce, { capture: true });
    });
  }
};

// node_modules/@sentry/browser-utils/build/esm/web-vitals/tracking.js
var _measurements = {};
var _lcpEntry;
var _clsEntry;
var _navigationType;
function startTrackingWebVitals({ trackCls, trackLcp }) {
  const performance2 = getBrowserPerformanceAPI();
  if (performance2 && browserPerformanceTimeOrigin()) {
    const lcpCleanupCallback = trackLcp ? _trackLCP() : void 0;
    const clsCleanupCallback = trackCls ? _trackCLS() : void 0;
    const ttfbCleanupCallback = _trackTtfb();
    const fcpCleanupCallback = _trackFcp();
    const fpCleanupCallback = _trackFp();
    return () => {
      ttfbCleanupCallback();
      fcpCleanupCallback();
      fpCleanupCallback();
      lcpCleanupCallback == null ? void 0 : lcpCleanupCallback();
      clsCleanupCallback == null ? void 0 : clsCleanupCallback();
    };
  }
  return () => void 0;
}
function _trackCLS() {
  return addClsInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    _measurements["cls"] = { value: metric.value, unit: "" };
    _clsEntry = entry;
  }, true);
}
function _trackLCP() {
  return addLcpInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry || !isValidLcpMetric(metric.value)) {
      return;
    }
    _measurements["lcp"] = { value: metric.value, unit: "millisecond" };
    _lcpEntry = entry;
  }, true);
}
function _trackTtfb() {
  return addTtfbInstrumentationHandler(({ metric }) => {
    _navigationType = metric.navigationType;
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    _measurements["ttfb"] = { value: metric.value, unit: "millisecond" };
  });
}
function _trackFcp() {
  return addFcpInstrumentationHandler(({ metric }) => {
    _navigationType = metric.navigationType;
    _measurements["fcp"] = { value: metric.value, unit: "millisecond" };
  });
}
function _trackFp() {
  return addPerformanceInstrumentationHandler("paint", ({ entries }) => {
    const firstHidden = getVisibilityWatcher();
    for (const entry of entries) {
      if (entry.name === "first-paint" && entry.startTime < firstHidden.firstHiddenTime) {
        _measurements["fp"] = { value: entry.startTime, unit: "millisecond" };
      }
    }
  });
}
function addWebVitalsToSpan(span, options) {
  var _a3;
  const origin = browserPerformanceTimeOrigin();
  if (!((_a3 = getBrowserPerformanceAPI()) == null ? void 0 : _a3.getEntries) || !origin) {
    resetWebVitalState();
    return;
  }
  const { spanStreamingEnabled, recordClsOnPageloadSpan, recordLcpOnPageloadSpan } = options;
  const timeOrigin = msToSec(origin);
  if (spanToJSON(span).attributes[mm] === "pageload") {
    _addTtfbRequestTimeToMeasurements(_measurements);
    _rebaseFpAgainstActivationStart(_measurements);
    if (spanStreamingEnabled) {
      const setAttr = (shortWebVitalName, value, customAttrName) => {
        const attrKey = customAttrName ?? `browser.web_vital.${shortWebVitalName}.value`;
        span.setAttribute(attrKey, value);
        DEBUG_BUILD2 && debug.log("Setting web vital attribute", { [attrKey]: value }, "on pageload span");
      };
      ["ttfb", "fp", "fcp"].forEach((measurementName) => {
        if (_measurements[measurementName]) {
          setAttr(measurementName, _measurements[measurementName].value);
        }
      });
      if (_measurements["ttfb.requestTime"]) {
        setAttr("ttfb.requestTime", _measurements["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
      }
    } else {
      if (!recordClsOnPageloadSpan) {
        delete _measurements.cls;
      }
      if (!recordLcpOnPageloadSpan) {
        delete _measurements.lcp;
      }
      Object.entries(_measurements).forEach(([measurementName, measurement]) => {
        setMeasurement(measurementName, measurement.value, measurement.unit, span);
      });
      _setWebVitalAttributes(span, options);
    }
    if (_navigationType) {
      span.setAttribute(Wt, _navigationType);
    }
    span.setAttribute(spanStreamingEnabled ? "browser.performance.time_origin" : "performance.timeOrigin", timeOrigin);
    span.setAttribute(
      spanStreamingEnabled ? "browser.performance.navigation.activation_start" : "performance.activationStart",
      getActivationStart()
    );
  }
  resetWebVitalState();
}
function resetWebVitalState() {
  _lcpEntry = void 0;
  _clsEntry = void 0;
  _navigationType = void 0;
  _measurements = {};
}
function _setWebVitalAttributes(span, options) {
  if (_lcpEntry && options.recordLcpOnPageloadSpan) {
    if (_lcpEntry.element) {
      span.setAttribute("lcp.element", htmlTreeAsString(_lcpEntry.element));
    }
    if (_lcpEntry.id) {
      span.setAttribute("lcp.id", _lcpEntry.id);
    }
    if (_lcpEntry.url) {
      span.setAttribute("lcp.url", filterCollectedUrl(_lcpEntry.url.trim()).slice(0, 200));
    }
    if (_lcpEntry.loadTime != null) {
      span.setAttribute("lcp.loadTime", _lcpEntry.loadTime);
    }
    if (_lcpEntry.renderTime != null) {
      span.setAttribute("lcp.renderTime", _lcpEntry.renderTime);
    }
    span.setAttribute("lcp.size", _lcpEntry.size);
  }
  if ((_clsEntry == null ? void 0 : _clsEntry.sources) && options.recordClsOnPageloadSpan) {
    _clsEntry.sources.forEach(
      (source, index) => span.setAttribute(`cls.source.${index + 1}`, htmlTreeAsString(source.node))
    );
  }
}
function _rebaseFpAgainstActivationStart(measurements) {
  const fp = measurements["fp"];
  if (fp) {
    fp.value = Math.max(fp.value - getActivationStart(), 0);
  }
}
function _addTtfbRequestTimeToMeasurements(_measurements2) {
  const navEntry = getNavigationEntry(false);
  if (!navEntry) {
    return;
  }
  const { responseStart, requestStart } = navEntry;
  if (requestStart <= responseStart) {
    _measurements2["ttfb.requestTime"] = {
      value: responseStart - requestStart,
      unit: "millisecond"
    };
  }
}

// node_modules/@sentry/browser-utils/build/esm/web-vitals/inp.js
var LAST_INTERACTIONS = [];
var INTERACTIONS_SPAN_MAP = /* @__PURE__ */ new Map();
var UNKNOWN_ELEMENT_NAME = "<unknown>";
var ELEMENT_NAME_TIMESTAMP_MAP = /* @__PURE__ */ new Map();
var MAX_PLAUSIBLE_INP_DURATION = 60;
var INP_ENTRY_MAP = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press"
};
function getCachedInteractionContext(interactionId) {
  return interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : void 0;
}
function registerInpInteractionListener() {
  const interactionEvents = Object.keys(INP_ENTRY_MAP);
  if (isBrowser()) {
    interactionEvents.forEach((eventType) => {
      WINDOW2.addEventListener(eventType, captureElementFromEvent, { capture: true, passive: true });
    });
  }
  function captureElementFromEvent(event) {
    const target = event.target;
    if (!target) {
      return;
    }
    const elementName = htmlTreeAsString(target);
    const timestamp = Math.round(event.timeStamp);
    if (!elementName || elementName === UNKNOWN_ELEMENT_NAME) {
      return;
    }
    if (ELEMENT_NAME_TIMESTAMP_MAP.has(timestamp)) {
      return;
    }
    ELEMENT_NAME_TIMESTAMP_MAP.set(timestamp, elementName);
    if (ELEMENT_NAME_TIMESTAMP_MAP.size > 50) {
      const firstKey = ELEMENT_NAME_TIMESTAMP_MAP.keys().next().value;
      if (firstKey !== void 0) {
        ELEMENT_NAME_TIMESTAMP_MAP.delete(firstKey);
      }
    }
  }
  function resolveElementNameFromEntry(entry) {
    const timestamp = Math.round(entry.startTime);
    let elementName = ELEMENT_NAME_TIMESTAMP_MAP.get(timestamp);
    if (!elementName) {
      for (let offset = -5; offset <= 5; offset++) {
        const nearbyName = ELEMENT_NAME_TIMESTAMP_MAP.get(timestamp + offset);
        if (nearbyName) {
          elementName = nearbyName;
          break;
        }
      }
    }
    return elementName || UNKNOWN_ELEMENT_NAME;
  }
  const handleEntries = ({ entries }) => {
    const activeSpan = getActiveSpan();
    const activeRootSpan = activeSpan && getRootSpan(activeSpan);
    entries.forEach((entry) => {
      if (!isPerformanceEventTiming(entry)) {
        return;
      }
      const interactionId = entry.interactionId;
      if (interactionId == null) {
        return;
      }
      if (INTERACTIONS_SPAN_MAP.has(interactionId)) {
        return;
      }
      const elementName = entry.target ? htmlTreeAsString(entry.target) : resolveElementNameFromEntry(entry);
      if (LAST_INTERACTIONS.length > 10) {
        const last = LAST_INTERACTIONS.shift();
        INTERACTIONS_SPAN_MAP.delete(last);
      }
      LAST_INTERACTIONS.push(interactionId);
      INTERACTIONS_SPAN_MAP.set(interactionId, {
        span: activeRootSpan,
        elementName
      });
    });
  };
  addPerformanceInstrumentationHandler("event", handleEntries);
  addPerformanceInstrumentationHandler("first-input", handleEntries);
}

// node_modules/@sentry/browser-utils/build/esm/isBotUserAgent.js
var BOT_USER_AGENT_RE = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
function isBotUserAgent() {
  const nav = WINDOW2.navigator;
  if (!(nav == null ? void 0 : nav.userAgent)) {
    return false;
  }
  return BOT_USER_AGENT_RE.test(nav.userAgent);
}

// node_modules/@sentry/browser-utils/build/esm/component-name.js
function getComponentName(elem, maxTraverseHeight = 5) {
  if (!GLOBAL_OBJ.HTMLElement) {
    return null;
  }
  let currentElem = elem;
  for (let i3 = 0; i3 < maxTraverseHeight; i3++) {
    if (!currentElem) {
      return null;
    }
    if (currentElem instanceof HTMLElement) {
      if (currentElem.dataset["sentryComponent"]) {
        return currentElem.dataset["sentryComponent"];
      }
      if (currentElem.dataset["sentryElement"]) {
        return currentElem.dataset["sentryElement"];
      }
    }
    currentElem = currentElem.parentNode;
  }
  return null;
}

// node_modules/@sentry/browser-utils/build/esm/getLocationHref.js
function getLocationHref() {
  var _a3;
  try {
    return ((_a3 = WINDOW2.document) == null ? void 0 : _a3.location.href) ?? "";
  } catch {
    return "";
  }
}

// node_modules/@sentry/browser-utils/build/esm/routing.js
var CLIENT_ROUTE_PROVIDERS = /* @__PURE__ */ new WeakMap();
function setRouteProvider(provider, client = getClient()) {
  if (!client) {
    DEBUG_BUILD2 && debug.warn("Cannot set a route provider without a client.");
    return;
  }
  if (DEBUG_BUILD2 && getRouteProvider(client)) {
    debug.warn(
      "A route provider is already registered for this client and will be replaced. Routes only the previous provider knows about will no longer resolve."
    );
  }
  CLIENT_ROUTE_PROVIDERS.set(client, provider);
}
function getRouteProvider(client = getClient()) {
  return client && CLIENT_ROUTE_PROVIDERS.get(client);
}

// node_modules/@sentry/browser-utils/build/esm/web-vitals/emitSpan.js
function _emitWebVitalSpan(options) {
  var _a3;
  const {
    name,
    op,
    origin,
    metricName,
    value,
    attributes: passedAttributes,
    parentSpan,
    startTime,
    endTime,
    standalone,
    softNavigationId,
    navigationType
  } = options;
  const segmentSpan = parentSpan && getRootSpan(parentSpan);
  const segmentName = segmentSpan ? spanToJSON(segmentSpan).name : getCurrentScope().getScopeData().transactionName;
  const attributes = __spreadValues({
    [gm]: origin,
    [mm]: op,
    [Vd]: 0,
    [`browser.web_vital.${metricName}.value`]: value,
    // oxlint-disable-next-line typescript-eslint/no-deprecated
    [Wm]: segmentName,
    [Rm]: segmentName,
    // Web vital score calculation relies on the user agent
    [mb]: (_a3 = WINDOW2.navigator) == null ? void 0 : _a3.userAgent
  }, passedAttributes);
  if (parentSpan && spanToJSON(parentSpan).attributes[mm] === "pageload") {
    attributes["sentry.pageload.span_id"] = parentSpan.spanContext().spanId;
  }
  if (softNavigationId != null) {
    attributes[Bt] = softNavigationId;
  }
  if (navigationType) {
    attributes[Wt] = navigationType;
  }
  if (standalone) {
    Object.assign(attributes, getReplayAttributes());
  }
  const span = startInactiveSpan2({
    name,
    attributes,
    startTime,
    parentSpan,
    // oxlint-disable-next-line typescript/no-deprecated -- intentional during the v1/v2 transition; see the TODO(standalone) above
    experimental: standalone ? { standalone: true } : void 0
  });
  if (span) {
    span.end(endTime ?? startTime);
  }
}
function getReplayAttributes() {
  var _a3;
  const replay = (_a3 = getClient()) == null ? void 0 : _a3.getIntegrationByName("Replay");
  const replayId = replay == null ? void 0 : replay.getReplayId(true);
  if (!replayId) {
    return {};
  }
  return {
    [Tm]: replayId,
    // Not the `SENTRY_REPLAY_IS_BUFFERING` convention: that one has no `sentry._internal.` prefix, and
    // the rest of the SDK sets the prefixed key (see `logs/internal.ts`, `metrics/internal.ts`).
    "sentry._internal.replay_is_buffering": replay.getRecordingMode() === "buffer" ? true : void 0
  };
}

// node_modules/@sentry/browser-utils/build/esm/web-vitals/reportEvents.js
function listenForWebVitalReportEvents(client, collectorCallback) {
  let pageloadSpan;
  let collected = false;
  function _runCollectorCallbackOnce() {
    if (!collected && pageloadSpan) {
      collectorCallback(pageloadSpan);
    }
    collected = true;
  }
  onHidden(() => {
    _runCollectorCallbackOnce();
  });
  const unsubscribeStartNavigation = client.on("beforeStartNavigationSpan", (_3, options) => {
    if (!(options == null ? void 0 : options.isRedirect)) {
      _runCollectorCallbackOnce();
      unsubscribeStartNavigation();
      unsubscribeAfterStartPageLoadSpan();
    }
  });
  const unsubscribeAfterStartPageLoadSpan = client.on("afterStartPageLoadSpan", (span) => {
    pageloadSpan = span;
    unsubscribeAfterStartPageLoadSpan();
  });
}

// node_modules/@sentry/browser-utils/build/esm/web-vitals/spans.js
var INTERACTION_TYPE_TO_SPAN_OP = {
  click: h,
  hover: H,
  drag: k,
  press: K
};
var INTERACTION_TYPE_TO_SPAN_NAME_FALLBACK = {
  click: UI_INTERACTION_CLICK_SPAN_NAME_FALLBACK,
  hover: UI_INTERACTION_HOVER_SPAN_NAME_FALLBACK,
  drag: UI_INTERACTION_DRAG_SPAN_NAME_FALLBACK,
  press: UI_INTERACTION_PRESS_SPAN_NAME_FALLBACK
};
function trackWebVitalPerNavigation(client, addInstrumentationHandler, send) {
  let pageloadSpan;
  client.on("afterStartPageLoadSpan", (span) => {
    pageloadSpan = span;
  });
  let bfcacheNavigationSpan;
  client.on("spanStart", (span) => {
    const attributes = spanToJSON(span).attributes;
    if ((attributes == null ? void 0 : attributes[mm]) === E && attributes[Wt] === "back-forward-cache") {
      bfcacheNavigationSpan = span;
    }
  });
  addInstrumentationHandler(({ metric }) => {
    const navigationSpan = getNavigationSpanForMetric(metric);
    if (metric.navigationType === "soft-navigation") {
      if (navigationSpan) {
        send(metric, navigationSpan, metric.navigationId);
      } else {
        DEBUG_BUILD2 && debug.log(`[SoftNav] Dropping ${metric.name} for uncorrelated soft navigation ${metric.navigationId}`);
      }
      return;
    }
    if (metric.navigationType === "back-forward-cache") {
      send(metric, bfcacheNavigationSpan, void 0);
      return;
    }
    send(metric, pageloadSpan, void 0);
  });
}
function trackLcpAsSpan(client, perNavigation = false) {
  if (!supportsWebVital("largest-contentful-paint")) {
    return;
  }
  if (perNavigation) {
    trackWebVitalPerNavigation(client, addLcpInstrumentationHandler, (metric, parentSpan, softNavigationId) => {
      const entry = metric.entries[metric.entries.length - 1];
      _sendLcpSpan(
        metric.value,
        entry,
        parentSpan,
        softNavigationId,
        metric.navigationType,
        metric.navigationStartTime
      );
    });
    return;
  }
  let lcpValue = 0;
  let lcpEntry;
  let lcpNavigationType;
  const cleanupLcpHandler = addLcpInstrumentationHandler(({ metric }) => {
    lcpNavigationType = metric.navigationType;
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry || !isValidLcpMetric(metric.value)) {
      return;
    }
    lcpValue = metric.value;
    lcpEntry = entry;
  }, true);
  listenForWebVitalReportEvents(client, (pageloadSpan) => {
    _sendLcpSpan(lcpValue, lcpEntry, pageloadSpan, void 0, lcpNavigationType);
    cleanupLcpHandler();
  });
}
function _sendLcpSpan(lcpValue, entry, pageloadSpan, softNavigationId, navigationType, navigationStartTime) {
  if (!isValidLcpMetric(lcpValue)) {
    return;
  }
  DEBUG_BUILD2 && debug.log(`Sending LCP span (${lcpValue})`);
  const navigationStart = navigationStartTime || 0;
  const startTime = performanceTimeToSeconds(navigationStart) ?? msToSec(navigationStart);
  const endTime = entry ? performanceTimeToSeconds(entry.startTime, navigationStart) ?? msToSec(entry.startTime) : startTime + msToSec(lcpValue);
  const selector = entry ? htmlTreeAsString(entry.element) : void 0;
  const componentName = (entry == null ? void 0 : entry.element) ? getComponentName(entry.element) : null;
  const client = getClient();
  const hasSpanStreaming = !!client && hasSpanStreamingEnabled(client);
  const name = hasSpanStreaming ? componentName || UI_WEBVITAL_LCP_SPAN_NAME_FALLBACK : selector ?? UI_WEBVITAL_LCP_SPAN_NAME_FALLBACK;
  const attributes = {};
  if (selector) {
    attributes["browser.web_vital.lcp.element"] = selector;
  }
  if (componentName) {
    attributes[Yg] = componentName;
  }
  (entry == null ? void 0 : entry.id) && (attributes["browser.web_vital.lcp.id"] = entry.id);
  (entry == null ? void 0 : entry.url) && (attributes["browser.web_vital.lcp.url"] = filterCollectedUrl(entry.url, client));
  (entry == null ? void 0 : entry.loadTime) != null && (attributes["browser.web_vital.lcp.load_time"] = entry.loadTime);
  (entry == null ? void 0 : entry.renderTime) != null && (attributes["browser.web_vital.lcp.render_time"] = entry.renderTime);
  (entry == null ? void 0 : entry.size) != null && (attributes["browser.web_vital.lcp.size"] = entry.size);
  _emitWebVitalSpan({
    name,
    op: f,
    origin: "auto.http.browser.lcp",
    metricName: "lcp",
    value: lcpValue,
    attributes,
    parentSpan: pageloadSpan,
    startTime,
    endTime,
    softNavigationId,
    navigationType
  });
}
function trackClsAsSpan(client, perNavigation = false) {
  if (!supportsWebVital("layout-shift")) {
    return;
  }
  if (perNavigation) {
    trackWebVitalPerNavigation(client, addClsInstrumentationHandler, (metric, parentSpan, softNavigationId) => {
      const entry = metric.entries[metric.entries.length - 1];
      _sendClsSpan(
        metric.value,
        entry,
        parentSpan,
        softNavigationId,
        metric.navigationType,
        metric.navigationStartTime
      );
    });
    return;
  }
  let clsValue = 0;
  let clsEntry;
  let clsNavigationType;
  const cleanupClsHandler = addClsInstrumentationHandler(({ metric }) => {
    clsNavigationType = metric.navigationType;
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    clsValue = metric.value;
    clsEntry = entry;
  }, true);
  listenForWebVitalReportEvents(client, (pageloadSpan) => {
    _sendClsSpan(clsValue, clsEntry, pageloadSpan, void 0, clsNavigationType);
    cleanupClsHandler();
  });
}
function _sendClsSpan(clsValue, entry, pageloadSpan, softNavigationId, navigationType, navigationStartTime) {
  var _a3;
  DEBUG_BUILD2 && debug.log(`Sending CLS span (${clsValue})`);
  const offset = (entry == null ? void 0 : entry.startTime) ?? navigationStartTime ?? 0;
  const startTime = performanceTimeToSeconds(offset) ?? timestampInSeconds();
  const firstSourceNode = (_a3 = entry == null ? void 0 : entry.sources[0]) == null ? void 0 : _a3.node;
  const selector = entry ? htmlTreeAsString(firstSourceNode) : void 0;
  const componentName = firstSourceNode ? getComponentName(firstSourceNode) : null;
  const client = getClient();
  const hasSpanStreaming = !!client && hasSpanStreamingEnabled(client);
  const name = hasSpanStreaming ? componentName || UI_WEBVITAL_CLS_SPAN_NAME_FALLBACK : selector ?? UI_WEBVITAL_CLS_SPAN_NAME_FALLBACK;
  const attributes = {};
  if (componentName) {
    attributes[Yg] = componentName;
  }
  if (entry == null ? void 0 : entry.sources) {
    entry.sources.forEach((source, index) => {
      attributes[`browser.web_vital.cls.source.${index + 1}`] = htmlTreeAsString(source.node);
    });
  }
  _emitWebVitalSpan({
    name,
    op: F,
    origin: "auto.http.browser.cls",
    metricName: "cls",
    value: clsValue,
    attributes,
    parentSpan: pageloadSpan,
    startTime,
    softNavigationId,
    navigationType
  });
}
function trackInpAsSpan(client, perNavigation = false) {
  const performance2 = getBrowserPerformanceAPI();
  if (!performance2 || !browserPerformanceTimeOrigin()) {
    return;
  }
  const standalone = !hasSpanStreamingEnabled(client);
  if (perNavigation) {
    trackWebVitalPerNavigation(client, addInpInstrumentationHandler, (metric, parentSpan, softNavigationId) => {
      if (isPlausibleInp(metric)) {
        _sendInpSpan(metric.value, findInpEntry(metric), standalone, parentSpan, softNavigationId, metric);
      }
    });
    return;
  }
  const onInp = ({ metric }) => {
    if (isPlausibleInp(metric)) {
      _sendInpSpan(metric.value, findInpEntry(metric), standalone, void 0, void 0, metric);
    }
  };
  addInpInstrumentationHandler(onInp);
}
function isPlausibleInp(metric) {
  return metric.value != null && msToSec(metric.value) <= MAX_PLAUSIBLE_INP_DURATION;
}
function findInpEntry(metric) {
  return metric.entries.find((e4) => e4.duration === metric.value && INP_ENTRY_MAP[e4.name]);
}
function _sendInpSpan(inpValue, entry, standalone = false, attributedSpan, softNavigationId, metric) {
  DEBUG_BUILD2 && debug.log(`Sending INP span (${inpValue})`);
  const startTime = performanceTimeToSeconds((entry == null ? void 0 : entry.startTime) ?? (metric == null ? void 0 : metric.navigationStartTime) ?? 0);
  if (!startTime) {
    return;
  }
  const duration = msToSec(inpValue);
  const entryInteractionType = entry && INP_ENTRY_MAP[entry.name];
  const interactionType = entryInteractionType || "click";
  const cachedContext = entry && getCachedInteractionContext(entry.interactionId);
  const activeSpan = getActiveSpan();
  const rootSpan = activeSpan ? getRootSpan(activeSpan) : void 0;
  const spanToUse = attributedSpan || (cachedContext == null ? void 0 : cachedContext.span) || rootSpan;
  const selector = (cachedContext == null ? void 0 : cachedContext.elementName) || (entry ? htmlTreeAsString(entry.target) : void 0);
  const componentName = (entry == null ? void 0 : entry.target) ? getComponentName(entry.target) : null;
  const client = getClient();
  const hasSpanStreaming = !!client && hasSpanStreamingEnabled(client);
  const fallbackName = INTERACTION_TYPE_TO_SPAN_NAME_FALLBACK[interactionType];
  const name = hasSpanStreaming ? componentName || fallbackName : selector ?? "Interaction to next paint";
  const attributes = {
    [Vd]: (entry == null ? void 0 : entry.duration) ?? inpValue
  };
  selector && selector !== UNKNOWN_ELEMENT_NAME && (attributes[li] = selector);
  entryInteractionType && (attributes[oi] = entryInteractionType);
  if (componentName) {
    attributes[Yg] = componentName;
  }
  _emitWebVitalSpan({
    name,
    op: INTERACTION_TYPE_TO_SPAN_OP[interactionType],
    origin: "auto.http.browser.inp",
    metricName: "inp",
    value: inpValue,
    attributes,
    startTime,
    endTime: startTime + duration,
    navigationType: metric == null ? void 0 : metric.navigationType,
    parentSpan: spanToUse,
    standalone,
    softNavigationId
  });
}

// node_modules/@sentry/browser-utils/build/esm/instrumentation/dom.js
var DEBOUNCE_DURATION = 1e3;
var debounceTimerID;
var lastCapturedEventType;
var lastCapturedEventTargetId;
function getCapture(options) {
  return typeof options === "boolean" ? options : !!(options == null ? void 0 : options.capture);
}
function addClickKeypressInstrumentationHandler(handler) {
  const type = "dom";
  addHandler(type, handler);
  maybeInstrument(type, instrumentDOM);
}
function instrumentDOM() {
  if (!WINDOW2.document) {
    return;
  }
  const triggerDOMHandler = triggerHandlers.bind(null, "dom");
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  WINDOW2.document.addEventListener("click", globalDOMEventHandler, false);
  WINDOW2.document.addEventListener("keypress", globalDOMEventHandler, false);
  ["EventTarget", "Node"].forEach((target) => {
    var _a3, _b;
    const globalObject = WINDOW2;
    const proto = (_a3 = globalObject[target]) == null ? void 0 : _a3.prototype;
    if (!((_b = proto == null ? void 0 : proto.hasOwnProperty) == null ? void 0 : _b.call(proto, "addEventListener"))) {
      return;
    }
    fill(proto, "addEventListener", function(originalAddEventListener) {
      return function(type, listener, options) {
        if ((type === "click" || type == "keypress") && listener) {
          try {
            const handlers4 = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers4[type] = handlers4[type] || {
              captureListeners: /* @__PURE__ */ new WeakSet(),
              bubbleListeners: /* @__PURE__ */ new WeakSet(),
              listenerCount: 0
            };
            const capture = getCapture(options);
            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              handlerForType.capture = capture;
              originalAddEventListener.call(this, type, handler, handlerForType.capture);
            }
            const listeners = handlerForType[capture ? "captureListeners" : "bubbleListeners"];
            if (!listeners.has(listener)) {
              if (typeof options === "object" && ((options == null ? void 0 : options.once) || (options == null ? void 0 : options.signal))) {
                handlerForType.sticky = true;
              } else {
                listeners.add(listener);
                handlerForType.listenerCount++;
              }
            }
          } catch {
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(type, listener, options) {
          if ((type === "click" || type == "keypress") && listener) {
            try {
              const handlers4 = this.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers4[type];
              if (handlerForType == null ? void 0 : handlerForType[getCapture(options) ? "captureListeners" : "bubbleListeners"].delete(listener)) {
                if (!--handlerForType.listenerCount && !handlerForType.sticky) {
                  originalRemoveEventListener.call(this, type, handlerForType.handler, handlerForType.capture);
                  handlerForType.handler = void 0;
                  delete handlers4[type];
                }
                if (Object.keys(handlers4).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch {
            }
          }
          return originalRemoveEventListener.call(this, type, listener, options);
        };
      }
    );
  });
}
function isSimilarToLastCapturedEvent(event) {
  if (event.type !== lastCapturedEventType) {
    return false;
  }
  try {
    if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) {
      return false;
    }
  } catch {
  }
  return true;
}
function shouldSkipDOMEvent(eventType, target) {
  if (eventType !== "keypress") {
    return false;
  }
  if (!(target == null ? void 0 : target.tagName)) {
    return true;
  }
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return false;
  }
  return true;
}
function makeDOMEventHandler(handler, globalListener = false) {
  return (event) => {
    if (!event || event["_sentryCaptured"]) {
      return;
    }
    const target = getEventTarget(event);
    if (shouldSkipDOMEvent(event.type, target)) {
      return;
    }
    addNonEnumerableProperty(event, "_sentryCaptured", true);
    if (target && !target._sentryId) {
      addNonEnumerableProperty(target, "_sentryId", uuid4());
    }
    const name = event.type === "keypress" ? "input" : event.type;
    if (!isSimilarToLastCapturedEvent(event)) {
      const handlerData = { event, name, global: globalListener };
      handler(handlerData);
      lastCapturedEventType = event.type;
      lastCapturedEventTargetId = target ? target._sentryId : void 0;
    }
    clearTimeout(debounceTimerID);
    debounceTimerID = WINDOW2.setTimeout(() => {
      lastCapturedEventTargetId = void 0;
      lastCapturedEventType = void 0;
    }, DEBOUNCE_DURATION);
  };
}
function getEventTarget(event) {
  try {
    return event.target;
  } catch {
    return null;
  }
}

// node_modules/@sentry/browser-utils/build/esm/instrumentation/history.js
var lastHref;
function supportsHistory() {
  return "history" in WINDOW2 && !!WINDOW2.history;
}
function addHistoryInstrumentationHandler(handler) {
  const type = "history";
  addHandler(type, handler);
  maybeInstrument(type, instrumentHistory);
}
function instrumentHistory() {
  WINDOW2.addEventListener("popstate", () => {
    const to = WINDOW2.location.href;
    const from = lastHref;
    lastHref = to;
    if (from === to) {
      return;
    }
    const handlerData = { from, to };
    triggerHandlers("history", handlerData);
  });
  if (!supportsHistory()) {
    return;
  }
  function historyReplacementFunction(originalHistoryFunction) {
    return function(...args) {
      const url = args.length > 2 ? args[2] : void 0;
      if (url) {
        const from = lastHref;
        const to = getAbsoluteUrl(String(url));
        lastHref = to;
        if (from === to) {
          return originalHistoryFunction.apply(this, args);
        }
        const handlerData = { from, to };
        triggerHandlers("history", handlerData);
      }
      return originalHistoryFunction.apply(this, args);
    };
  }
  fill(WINDOW2.history, "pushState", historyReplacementFunction);
  fill(WINDOW2.history, "replaceState", historyReplacementFunction);
}
function getAbsoluteUrl(urlOrPath) {
  try {
    const url = new URL(urlOrPath, WINDOW2.location.origin);
    return url.toString();
  } catch {
    return urlOrPath;
  }
}

// node_modules/@sentry/browser-utils/build/esm/getNativeImplementation.js
var cachedImplementations = {};
function getNativeImplementation(name) {
  const cached = cachedImplementations[name];
  if (cached) {
    return cached;
  }
  let impl = WINDOW2[name];
  if (isNativeFunction(impl)) {
    return cachedImplementations[name] = impl.bind(WINDOW2);
  }
  const document2 = WINDOW2.document;
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow == null ? void 0 : contentWindow[name]) {
        impl = contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e4) {
      DEBUG_BUILD2 && debug.warn(`Could not create sandbox iframe for ${name} check, bailing to window.${name}: `, e4);
    }
  }
  if (!impl) {
    return impl;
  }
  return cachedImplementations[name] = impl.bind(WINDOW2);
}
function clearCachedImplementation(name) {
  cachedImplementations[name] = void 0;
}
function setTimeout2(...rest) {
  try {
    return getNativeImplementation("setTimeout")(...rest);
  } catch (e4) {
    DEBUG_BUILD2 && debug.warn("Could not use native setTimeout implementation, falling back to window.setTimeout: ", e4);
    const fallback = WINDOW2.setTimeout.bind(WINDOW2);
    cachedImplementations.setTimeout = fallback;
    return fallback(...rest);
  }
}

// node_modules/@sentry/browser-utils/build/esm/instrumentation/xhr.js
var SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
function addXhrInstrumentationHandler(handler) {
  const type = "xhr";
  addHandler(type, handler);
  maybeInstrument(type, instrumentXHR);
}
function instrumentXHR() {
  if (!WINDOW2.XMLHttpRequest) {
    return;
  }
  const xhrproto = XMLHttpRequest.prototype;
  xhrproto.open = new Proxy(xhrproto.open, {
    apply(originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
      let virtualError = new Error();
      const startTimestamp = timestampInSeconds() * 1e3;
      const method = isString(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : void 0;
      const url = parseXhrUrlArg(xhrOpenArgArray[1]);
      if (!method || !url) {
        return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
      }
      xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
        method,
        url,
        request_headers: {}
      };
      if (method === "POST" && url.match(/sentry_key/)) {
        xhrOpenThisArg.__sentry_own_request__ = true;
      }
      const onreadystatechangeHandler = () => {
        const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];
        if (!xhrInfo) {
          return;
        }
        if (xhrOpenThisArg.readyState === 4) {
          try {
            xhrInfo.status_code = xhrOpenThisArg.status;
          } catch {
          }
          const handlerData = {
            endTimestamp: timestampInSeconds() * 1e3,
            startTimestamp,
            xhr: xhrOpenThisArg,
            virtualError
          };
          triggerHandlers("xhr", handlerData);
          virtualError = void 0;
          xhrOpenThisArg.removeEventListener("readystatechange", onreadystatechangeHandler);
        }
      };
      if ("onreadystatechange" in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === "function") {
        xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, {
          apply(originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
            onreadystatechangeHandler();
            return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
          }
        });
      } else {
        xhrOpenThisArg.addEventListener("readystatechange", onreadystatechangeHandler);
      }
      xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, {
        apply(originalSetRequestHeader, setRequestHeaderThisArg, setRequestHeaderArgArray) {
          const [header, value] = setRequestHeaderArgArray;
          const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];
          if (xhrInfo && isString(header) && isString(value)) {
            xhrInfo.request_headers[header.toLowerCase()] = value;
          }
          return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
        }
      });
      return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
    }
  });
  xhrproto.send = new Proxy(xhrproto.send, {
    apply(originalSend, sendThisArg, sendArgArray) {
      const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];
      if (!sentryXhrData) {
        return originalSend.apply(sendThisArg, sendArgArray);
      }
      if (sendArgArray[0] !== void 0) {
        sentryXhrData.body = sendArgArray[0];
      }
      const handlerData = {
        startTimestamp: timestampInSeconds() * 1e3,
        xhr: sendThisArg
      };
      triggerHandlers("xhr", handlerData);
      return originalSend.apply(sendThisArg, sendArgArray);
    }
  });
}
function parseXhrUrlArg(url) {
  if (isString(url)) {
    return url;
  }
  try {
    return url.toString();
  } catch {
  }
  return void 0;
}

// node_modules/@sentry/browser-utils/build/esm/networkUtils.js
var ORIGINAL_REQ_BODY = /* @__PURE__ */ Symbol.for("sentry__originalRequestBody");
function serializeFormData(formData) {
  return new URLSearchParams(formData).toString();
}
function getBodyString(body, _debug = debug) {
  try {
    if (typeof body === "string") {
      return [body];
    }
    if (body instanceof URLSearchParams) {
      return [body.toString()];
    }
    if (body instanceof FormData) {
      return [serializeFormData(body)];
    }
    if (!body) {
      return [void 0];
    }
  } catch (error2) {
    DEBUG_BUILD2 && _debug.error(error2, "Failed to serialize body", body);
    return [void 0, "BODY_PARSE_ERROR"];
  }
  DEBUG_BUILD2 && _debug.log("Skipping network body because of body type", body);
  return [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function getFetchRequestArgBody(fetchArgs = []) {
  if (fetchArgs.length >= 2 && fetchArgs[1] && typeof fetchArgs[1] === "object" && "body" in fetchArgs[1]) {
    return fetchArgs[1].body;
  }
  if (fetchArgs.length >= 1 && fetchArgs[0] instanceof Request) {
    const request = fetchArgs[0];
    const originalBody = request[ORIGINAL_REQ_BODY];
    if (originalBody !== void 0) {
      return originalBody;
    }
    return void 0;
  }
  return void 0;
}
function parseXhrResponseHeaders(xhr) {
  let headers;
  try {
    headers = xhr.getAllResponseHeaders();
  } catch (error2) {
    DEBUG_BUILD2 && debug.error(error2, "Failed to get xhr response headers", xhr);
    return {};
  }
  if (!headers) {
    return {};
  }
  return headers.split("\r\n").reduce((acc, line) => {
    const [key, value] = line.split(": ");
    if (value) {
      acc[key.toLowerCase()] = value;
    }
    return acc;
  }, {});
}

// node_modules/@sentry/browser-utils/build/esm/is.js
function isElement2(wat) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return wat instanceof Element;
  } catch {
    return false;
  }
}

// node_modules/@sentry/browser-utils/build/esm/instrumentation/location.js
function getAbsoluteUrl2(urlOrPath) {
  try {
    const url = new URL(urlOrPath, WINDOW2.location.origin);
    return url.toString();
  } catch {
    return urlOrPath;
  }
}

// node_modules/@sentry/browser/build/npm/esm/dev/helpers.js
var WINDOW3 = GLOBAL_OBJ;
var ignoreOnError = 0;
var ignoredErrorReports = [];
function shouldIgnoreOnError(data) {
  if (ignoreOnError > 0) {
    return true;
  }
  const index = data ? ignoredErrorReports.findIndex((report) => isSameErrorReport(report, data)) : -1;
  if (index === -1) {
    return false;
  }
  ignoredErrorReports.splice(index, 1);
  return true;
}
function isSameErrorReport(a2, b3) {
  return a2.msg === b3.msg && a2.url === b3.url && a2.line === b3.line && a2.column === b3.column;
}
function ignoreNextOnError() {
  ignoreOnError++;
  setTimeout(() => {
    ignoreOnError--;
  });
}
function wrap(fn, options = {}) {
  function isFunction(fn2) {
    return typeof fn2 === "function";
  }
  if (!isFunction(fn)) {
    return fn;
  }
  try {
    const hasOwnWrapper = Object.prototype.hasOwnProperty.call(fn, "__sentry_wrapped__");
    if (hasOwnWrapper) {
      const wrapper = fn.__sentry_wrapped__;
      if (typeof wrapper === "function") {
        return wrapper;
      } else {
        return fn;
      }
    }
    if (getOriginalFunction(fn)) {
      return fn;
    }
  } catch {
    return fn;
  }
  const sentryWrapped = function(...args) {
    GLOBAL_OBJ._sentryWrappedDepth = (GLOBAL_OBJ._sentryWrappedDepth || 0) + 1;
    try {
      const wrappedArguments = args.map((arg) => wrap(arg, options));
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();
      withScope2((scope) => {
        scope.addEventProcessor((event) => {
          if (options.mechanism) {
            addExceptionTypeValue(event, void 0, void 0);
            addExceptionMechanism(event, options.mechanism);
          }
          event.extra = __spreadProps(__spreadValues({}, event.extra), {
            arguments: args
          });
          return event;
        });
        captureException(ex);
      });
      throw ex;
    } finally {
      GLOBAL_OBJ._sentryWrappedDepth = (GLOBAL_OBJ._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch {
  }
  markFunctionWrapped(sentryWrapped, fn);
  addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
  try {
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, "name", {
        get() {
          return fn.name;
        }
      });
    }
  } catch {
  }
  return sentryWrapped;
}
function getHttpRequestData(client) {
  const url = getLocationHref();
  const { referrer } = WINDOW3.document || {};
  const { userAgent } = WINDOW3.navigator || {};
  const headers = __spreadValues(__spreadValues({}, referrer && { Referer: filterCollectedUrl(referrer, client) }), userAgent && { "User-Agent": userAgent });
  const request = {
    url,
    headers
  };
  return request;
}

// node_modules/@sentry/browser/build/npm/esm/dev/eventbuilder.js
function exceptionFromError2(stackParser, ex) {
  const frames = parseStackFrames2(stackParser, ex);
  const exception = {
    type: extractType(ex),
    value: extractMessage(ex)
  };
  if (frames.length) {
    exception.stacktrace = { frames };
  }
  if (exception.type === void 0 && exception.value === "") {
    exception.value = "Unrecoverable error caught";
  }
  return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
  const client = getClient();
  const normalizeDepth = client == null ? void 0 : client.getOptions().normalizeDepth;
  const errorFromProp = getErrorPropertyFromObject(exception);
  const extra = {
    __serialized__: normalizeToSize(exception, normalizeDepth)
  };
  if (errorFromProp) {
    return {
      exception: {
        values: [exceptionFromError2(stackParser, errorFromProp)]
      },
      extra
    };
  }
  const exceptionValue = {
    type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
    value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection })
  };
  const event = {
    exception: {
      values: [exceptionValue]
    },
    extra
  };
  if (syntheticException) {
    const frames = parseStackFrames2(stackParser, syntheticException);
    if (frames.length) {
      event.exception.values[0].stacktrace = { frames };
    }
  }
  return event;
}
function eventFromError(stackParser, ex) {
  return {
    exception: {
      values: [exceptionFromError2(stackParser, ex)]
    }
  };
}
function parseStackFrames2(stackParser, ex) {
  const stacktrace = ex.stacktrace || ex.stack || "";
  const skipLines = getSkipFirstStackStringLines(ex);
  const framesToPop = getPopFirstTopFrames(ex);
  try {
    return stackParser(stacktrace, skipLines, framesToPop);
  } catch {
  }
  return [];
}
var reactMinifiedRegexp = /Minified React error #\d+;/i;
function getSkipFirstStackStringLines(ex) {
  if (ex && reactMinifiedRegexp.test(ex.message)) {
    return 1;
  }
  return 0;
}
function getPopFirstTopFrames(ex) {
  if (typeof ex.framesToPop === "number") {
    return ex.framesToPop;
  }
  return 0;
}
function isWebAssemblyException(exception) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return exception instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function extractType(ex) {
  const name = ex == null ? void 0 : ex.name;
  if (!name && isWebAssemblyException(ex)) {
    const hasTypeInMessage = ex.message && Array.isArray(ex.message) && ex.message.length == 2;
    return hasTypeInMessage ? ex.message[0] : "WebAssembly.Exception";
  }
  return name;
}
function extractMessage(ex) {
  const message = ex == null ? void 0 : ex.message;
  if (isWebAssemblyException(ex)) {
    if (Array.isArray(ex.message) && ex.message.length == 2) {
      return ex.message[1];
    }
    return "wasm exception";
  }
  if (!message) {
    return "No error message";
  }
  if (message.error && typeof message.error.message === "string") {
    return _enhanceErrorWithSentryInfo(message.error);
  }
  return _enhanceErrorWithSentryInfo(ex);
}
function eventFromException(stackParser, exception, hint, attachStacktrace) {
  const syntheticException = (hint == null ? void 0 : hint.syntheticException) || void 0;
  const event = eventFromUnknownInput2(stackParser, exception, syntheticException, attachStacktrace);
  addExceptionMechanism(event);
  event.level = "error";
  if (hint == null ? void 0 : hint.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}
function eventFromMessage2(stackParser, message, level = "info", hint, attachStacktrace) {
  const syntheticException = (hint == null ? void 0 : hint.syntheticException) || void 0;
  const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
  event.level = level;
  if (hint == null ? void 0 : hint.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}
function eventFromUnknownInput2(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
  var _a3, _b;
  let event;
  if (isErrorEvent(exception) && exception.error) {
    const errorEvent = exception;
    return eventFromError(stackParser, errorEvent.error);
  }
  if (isDOMError(exception) || isDOMException(exception)) {
    const domException = exception;
    if ("stack" in exception) {
      event = eventFromError(stackParser, exception);
      const firstException = (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b[0];
      if (attachStacktrace && syntheticException && firstException && !firstException.stacktrace) {
        const frames = parseStackFrames2(stackParser, syntheticException);
        if (frames.length) {
          firstException.stacktrace = { frames };
          addExceptionMechanism(event, { synthetic: true });
        }
      }
    } else {
      const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
      const message = domException.message ? `${name}: ${domException.message}` : name;
      event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      addExceptionTypeValue(event, message);
    }
    return event;
  }
  if (isError(exception)) {
    return eventFromError(stackParser, exception);
  }
  if (isPlainObject(exception) || isEvent(exception)) {
    const objectException = exception;
    event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  const stringifiedException = String(exception);
  event = eventFromString(stackParser, stringifiedException, syntheticException, attachStacktrace);
  addExceptionTypeValue(event, stringifiedException, void 0);
  addExceptionMechanism(event, {
    synthetic: true
  });
  return event;
}
function eventFromString(stackParser, message, syntheticException, attachStacktrace) {
  const event = {};
  if (attachStacktrace && syntheticException) {
    const frames = parseStackFrames2(stackParser, syntheticException);
    if (frames.length) {
      event.exception = {
        values: [{ value: message, stacktrace: { frames } }]
      };
    }
    addExceptionMechanism(event, { synthetic: true });
  }
  if (isParameterizedString(message)) {
    const { __sentry_template_string__, __sentry_template_values__ } = message;
    event.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__
    };
    return event;
  }
  event.message = message;
  return event;
}
function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
  const keys = extractExceptionKeysForMessage(exception);
  const captureType = isUnhandledRejection ? "promise rejection" : "exception";
  if (isErrorEvent(exception)) {
    return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
  }
  if (isEvent(exception)) {
    const className = getObjectClassName(exception);
    return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
  }
  return `Object captured as ${captureType} with keys: ${keys}`;
}
function getObjectClassName(obj) {
  try {
    const prototype = Object.getPrototypeOf(obj);
    return prototype ? prototype.constructor.name : void 0;
  } catch {
  }
}
function getErrorPropertyFromObject(obj) {
  return Object.values(obj).find(isError);
}

// node_modules/@sentry/browser/build/npm/esm/dev/client.js
var BrowserClient = class extends Client {
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
  constructor(options) {
    var _a3;
    const opts = applyDefaultOptions(options);
    const sdkSource = WINDOW3.SENTRY_SDK_SOURCE || getSDKSource();
    applySdkMetadata(opts, "browser", ["browser"], sdkSource);
    super(opts);
    if (opts.routeProvider) {
      setRouteProvider(opts.routeProvider, this);
    }
    this._unhandledSessionStatus = "unhandled";
    const { userInfo } = this.getDataCollectionOptions();
    if ((_a3 = opts._metadata) == null ? void 0 : _a3.sdk) {
      opts._metadata.sdk.settings = __spreadValues({
        // Only allow IP inferral by Relay if the user opted in via dataCollection
        infer_ip: userInfo ? "auto" : "never"
      }, opts._metadata.sdk.settings);
    }
    const { sendClientReports } = this._options;
    const checkDrift = () => {
      timestampInSeconds();
    };
    const listeners = [
      // Flush buffered data when the page becomes hidden (e.g. tab switch, navigation, or the page
      // being discarded). `flush()` emits the `flush` hook, which drains the span (streaming), log and
      // metric buffers and hands the resulting envelopes to the transport (which uses `keepalive`).
      // Client report outcomes don't listen to the `flush` hook, so we flush them separately.
      [
        WINDOW3.document,
        "visibilitychange",
        () => {
          checkDrift();
          if (WINDOW3.document.visibilityState === "hidden") {
            if (sendClientReports) {
              this._flushOutcomes();
            }
            queueMicrotask(() => {
              void this.flush();
            });
          }
        }
      ],
      // `freeze` and `resume` are only fired by Chromium browsers. Other browsers never fire them, so these listeners
      // are no-ops there.
      [WINDOW3.document, "freeze", checkDrift],
      [WINDOW3.document, "resume", checkDrift],
      // Pages restored from the back/forward cache were paused while they were cached.
      [WINDOW3, "pagehide", checkDrift],
      [WINDOW3, "pageshow", checkDrift]
    ];
    listeners.forEach(([target, name, listener]) => {
      var _a4;
      return (_a4 = target == null ? void 0 : target.addEventListener) == null ? void 0 : _a4.call(target, name, listener);
    });
    this.on(
      "close",
      () => listeners.forEach(([target, name, listener]) => {
        var _a4;
        return (_a4 = target == null ? void 0 : target.removeEventListener) == null ? void 0 : _a4.call(target, name, listener);
      })
    );
    if (userInfo) {
      this.on("beforeSendSession", addAutoIpAddressToSession);
    }
  }
  /**
   * @inheritDoc
   */
  eventFromException(exception, hint) {
    return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(message, level = "info", hint) {
    return eventFromMessage2(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    event.platform = event.platform || "javascript";
    return super._prepareEvent(event, hint, currentScope, isolationScope);
  }
};
function applyDefaultOptions(optionsArg) {
  var _a3;
  return __spreadValues({
    release: typeof __SENTRY_RELEASE__ === "string" ? __SENTRY_RELEASE__ : (_a3 = WINDOW3.SENTRY_RELEASE) == null ? void 0 : _a3.id,
    // This supports the variable that sentry-webpack-plugin injects
    sendClientReports: true,
    // We default this to true, as it is the safer scenario
    parentSpanIsAlwaysRootSpan: true
  }, optionsArg);
}

// node_modules/@sentry/browser/build/npm/esm/dev/transports/fetch.js
var DEFAULT_BROWSER_TRANSPORT_BUFFER_SIZE = 40;
function makeFetchTransport(options, nativeFetch = getNativeImplementation("fetch")) {
  let pendingBodySize = 0;
  let pendingCount = 0;
  async function makeRequest(request) {
    const requestSize = request.body.length;
    pendingBodySize += requestSize;
    pendingCount++;
    const requestOptions = __spreadValues({
      body: request.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: options.headers,
      // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
      // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
      // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
      // frequently sending events right before the user is switching pages (eg. when finishing navigation transactions).
      // Gotchas:
      // - `keepalive` isn't supported by Firefox
      // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
      //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
      //   We will therefore only activate the flag when we're below that limit.
      // There is also a limit of requests that can be open at the same time, so we also limit this to 15
      // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
      keepalive: pendingBodySize <= 6e4 && pendingCount < 15
    }, options.fetchOptions);
    try {
      const response = await nativeFetch(options.url, requestOptions);
      return {
        statusCode: response.status,
        headers: {
          "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": response.headers.get("Retry-After")
        }
      };
    } catch (e4) {
      clearCachedImplementation("fetch");
      throw e4;
    } finally {
      pendingBodySize -= requestSize;
      pendingCount--;
    }
  }
  return createTransport(
    options,
    makeRequest,
    makePromiseBuffer(options.bufferSize || DEFAULT_BROWSER_TRANSPORT_BUFFER_SIZE)
  );
}

// node_modules/@sentry/browser/build/npm/esm/dev/debug-build.js
var DEBUG_BUILD3 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// node_modules/@sentry/browser/build/npm/esm/dev/stack-parsers.js
var CHROME_PRIORITY = 30;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
  const frame = {
    filename,
    function: func === "<anonymous>" ? UNKNOWN_FUNCTION : func,
    in_app: true
    // All browser frames are considered in_app
  };
  if (lineno !== void 0) {
    frame.lineno = lineno;
  }
  if (colno !== void 0) {
    frame.colno = colno;
  }
  return frame;
}
var chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chromeDataUriRegex = /at (.+?) ?\(data:(.+?),/;
var chromeStackParserFn = (line) => {
  var _a3;
  const dataUriMatch = line.match(chromeDataUriRegex);
  if (dataUriMatch) {
    return {
      filename: `<data:${dataUriMatch[2]}>`,
      function: dataUriMatch[1]
    };
  }
  const noFnParts = chromeRegexNoFnName.exec(line);
  if (noFnParts) {
    const [, filename, line2, col] = noFnParts;
    return createFrame(filename, UNKNOWN_FUNCTION, +line2, +col);
  }
  const parts = chromeRegex.exec(line);
  if (parts) {
    const isEval = ((_a3 = parts[2]) == null ? void 0 : _a3.indexOf("eval")) === 0;
    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]);
      if (subMatch) {
        parts[2] = subMatch[1];
        parts[3] = subMatch[2];
        parts[4] = subMatch[3];
      }
    }
    const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
    return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
  }
  return;
};
var chromeStackLineParser = [CHROME_PRIORITY, chromeStackParserFn];
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = (line) => {
  const parts = geckoREgex.exec(line);
  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]);
      if (subMatch) {
        parts[1] = parts[1] || "eval";
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = "";
      }
    }
    let filename = parts[3];
    let func = parts[1] || UNKNOWN_FUNCTION;
    [func, filename] = extractSafariExtensionDetails(func, filename);
    return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
  }
  return;
};
var geckoStackLineParser = [GECKO_PRIORITY, gecko];
var defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser];
var defaultStackParser = createStackParser(...defaultStackLineParsers);
var extractSafariExtensionDetails = (func, filename) => {
  const isSafariExtension = func.indexOf("safari-extension") !== -1;
  const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
  return isSafariExtension || isSafariWebExtension ? [
    func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
    isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
  ] : [func, filename];
};

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/breadcrumbs.js
var MAX_ALLOWED_STRING_LENGTH = 1024;
var INTEGRATION_NAME7 = "Breadcrumbs";
var _breadcrumbsIntegration = ((options = {}) => {
  const _options = __spreadValues({
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true
  }, options);
  return {
    name: INTEGRATION_NAME7,
    setup(client) {
      if (_options.dom) {
        addClickKeypressInstrumentationHandler(_getDomBreadcrumbHandler(client, _options.dom));
      }
      if (_options.xhr) {
        addXhrInstrumentationHandler(_getXhrBreadcrumbHandler(client));
      }
      if (_options.fetch) {
        addFetchInstrumentationHandler(_getFetchBreadcrumbHandler(client));
      }
      if (_options.history) {
        addHistoryInstrumentationHandler(_getHistoryBreadcrumbHandler(client));
      }
      if (_options.sentry) {
        client.on("beforeSendEvent", _getSentryBreadcrumbHandler(client));
      }
    }
  };
});
var breadcrumbsIntegration = defineIntegration(_breadcrumbsIntegration);
function _getSentryBreadcrumbHandler(client) {
  return function addSentryBreadcrumb(event) {
    if (getClient() !== client) {
      return;
    }
    addBreadcrumb(
      {
        category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
        event_id: event.event_id,
        level: event.level,
        message: getEventDescription(event)
      },
      {
        event
      }
    );
  };
}
function _getDomBreadcrumbHandler(client, dom) {
  return function _innerDomBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    let target;
    let componentName;
    let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
    let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
    if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
      DEBUG_BUILD3 && debug.warn(
        `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
      );
      maxStringLength = MAX_ALLOWED_STRING_LENGTH;
    }
    if (typeof keyAttrs === "string") {
      keyAttrs = [keyAttrs];
    }
    try {
      const event = handlerData.event;
      const element = _isEvent(event) ? event.target : event;
      target = htmlTreeAsString(element, { keyAttrs, maxStringLength });
      componentName = getComponentName(element);
    } catch {
      target = "<unknown>";
    }
    if (target.length === 0) {
      return;
    }
    const breadcrumb = {
      category: `ui.${handlerData.name}`,
      message: target
    };
    if (componentName) {
      breadcrumb.data = { "ui.component_name": componentName };
    }
    addBreadcrumb(breadcrumb, {
      event: handlerData.event,
      name: handlerData.name,
      global: handlerData.global
    });
  };
}
function _getXhrBreadcrumbHandler(client) {
  return function _xhrBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    const { startTimestamp, endTimestamp } = handlerData;
    const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
    if (!startTimestamp || !endTimestamp || !sentryXhrData) {
      return;
    }
    const { method, url, status_code, body } = sentryXhrData;
    const data = {
      method,
      url: filterCollectedUrl(url),
      status_code
    };
    const hint = {
      xhr: handlerData.xhr,
      input: body,
      startTimestamp,
      endTimestamp
    };
    const breadcrumb = {
      category: "xhr",
      data,
      type: "http",
      level: getBreadcrumbLogLevelFromHttpStatusCode(status_code)
    };
    client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
    addBreadcrumb(breadcrumb, hint);
  };
}
function _getFetchBreadcrumbHandler(client) {
  return function _fetchBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    const { startTimestamp, endTimestamp } = handlerData;
    if (!endTimestamp) {
      return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
      return;
    }
    if (handlerData.error) {
      const hint = {
        data: handlerData.error,
        input: handlerData.args,
        startTimestamp,
        endTimestamp
      };
      const breadcrumb = {
        category: "fetch",
        data: __spreadProps(__spreadValues({}, handlerData.fetchData), { url: filterCollectedUrl(handlerData.fetchData.url) }),
        level: "error",
        type: "http"
      };
      client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
      addBreadcrumb(breadcrumb, hint);
    } else {
      const response = handlerData.response;
      const data = __spreadProps(__spreadValues({}, handlerData.fetchData), {
        url: filterCollectedUrl(handlerData.fetchData.url),
        status_code: response == null ? void 0 : response.status
      });
      const hint = {
        input: handlerData.args,
        response,
        startTimestamp,
        endTimestamp
      };
      const breadcrumb = {
        category: "fetch",
        data,
        type: "http",
        level: getBreadcrumbLogLevelFromHttpStatusCode(data.status_code)
      };
      client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
      addBreadcrumb(breadcrumb, hint);
    }
  };
}
function _getHistoryBreadcrumbHandler(client) {
  return function _historyBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW3.location.href);
    let parsedFrom = from ? parseUrl(from) : void 0;
    const parsedTo = parseUrl(to);
    if (!(parsedFrom == null ? void 0 : parsedFrom.path)) {
      parsedFrom = parsedLoc;
    }
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }
    addBreadcrumb({
      category: "navigation",
      data: {
        from: filterCollectedUrl(from),
        to: filterCollectedUrl(to)
      }
    });
  };
}
function _isEvent(event) {
  return !!event && !!event.target;
}

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/browserapierrors.js
var DEFAULT_EVENT_TARGET = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
  ","
);
var INTEGRATION_NAME8 = "BrowserApiErrors";
var _browserApiErrorsIntegration = ((options = {}) => {
  const _options = __spreadValues({
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false
  }, options);
  return {
    name: INTEGRATION_NAME8,
    // TODO: This currently only works for the first client this is setup
    // We may want to adjust this to check for client etc.
    setupOnce() {
      if (_options.setTimeout) {
        fill(WINDOW3, "setTimeout", _wrapTimeFunction);
      }
      if (_options.setInterval) {
        fill(WINDOW3, "setInterval", _wrapTimeFunction);
      }
      if (_options.requestAnimationFrame) {
        fill(WINDOW3, "requestAnimationFrame", _wrapRAF);
      }
      if (_options.XMLHttpRequest && "XMLHttpRequest" in WINDOW3) {
        fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      const eventTargetOption = _options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach((target) => _wrapEventTarget(target, _options));
      }
    }
  };
});
var browserApiErrorsIntegration = defineIntegration(_browserApiErrorsIntegration);
function _wrapTimeFunction(original) {
  return function(...args) {
    const originalCallback = args[0];
    args[0] = wrap(originalCallback, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${getFunctionName(original)}`
      }
    });
    return original.apply(this, args);
  };
}
function _wrapRAF(original) {
  return function(callback) {
    return original.apply(this, [
      wrap(callback, {
        mechanism: {
          data: {
            handler: getFunctionName(original)
          },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame"
        }
      })
    ]);
  };
}
function _wrapXHR(originalSend) {
  return function(...args) {
    const xhr = this;
    const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
    xmlHttpRequestProps.forEach((prop) => {
      if (prop in xhr && typeof xhr[prop] === "function") {
        fill(xhr, prop, function(original) {
          const wrapOptions = {
            mechanism: {
              data: {
                handler: getFunctionName(original)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${prop}`
            }
          };
          const originalFunction = getOriginalFunction(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
          }
          return wrap(original, wrapOptions);
        });
      }
    });
    return originalSend.apply(this, args);
  };
}
function _wrapEventTarget(target, integrationOptions) {
  var _a3, _b;
  const globalObject = WINDOW3;
  const proto = (_a3 = globalObject[target]) == null ? void 0 : _a3.prototype;
  if (!((_b = proto == null ? void 0 : proto.hasOwnProperty) == null ? void 0 : _b.call(proto, "addEventListener"))) {
    return;
  }
  fill(proto, "addEventListener", function(original) {
    return function(eventName, fn, options) {
      try {
        if (isEventListenerObject(fn)) {
          fn.handleEvent = wrap(fn.handleEvent, {
            mechanism: {
              data: {
                handler: getFunctionName(fn),
                target
              },
              handled: false,
              type: "auto.browser.browserapierrors.handleEvent"
            }
          });
        }
      } catch {
      }
      if (integrationOptions.unregisterOriginalCallbacks) {
        unregisterOriginalCallback(this, eventName, fn);
      }
      return original.apply(this, [
        eventName,
        wrap(fn, {
          mechanism: {
            data: {
              handler: getFunctionName(fn),
              target
            },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener"
          }
        }),
        options
      ]);
    };
  });
  fill(proto, "removeEventListener", function(originalRemoveEventListener) {
    return function(eventName, fn, options) {
      try {
        if (Object.prototype.hasOwnProperty.call(fn, "__sentry_wrapped__")) {
          const originalEventHandler = fn.__sentry_wrapped__;
          if (originalEventHandler) {
            originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
          }
        }
      } catch {
      }
      return originalRemoveEventListener.call(this, eventName, fn, options);
    };
  });
}
function isEventListenerObject(obj) {
  return typeof obj.handleEvent === "function";
}
function unregisterOriginalCallback(target, eventName, fn) {
  if (target && typeof target === "object" && "removeEventListener" in target && typeof target.removeEventListener === "function") {
    target.removeEventListener(eventName, fn);
  }
}

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/browsersession.js
var browserSessionIntegration = defineIntegration((options = {}) => {
  const lifecycle = options.lifecycle ?? "page";
  return {
    name: "BrowserSession",
    setupOnce() {
      if (typeof WINDOW3.document === "undefined") {
        DEBUG_BUILD3 && debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
        return;
      }
      startSession({ ignoreDuration: true });
      let initialSessionSent = false;
      whenIdleOrHidden(() => {
        if (!initialSessionSent) {
          captureSession();
          initialSessionSent = true;
        }
      });
      const isolationScope = getIsolationScope();
      let previousUser = isolationScope.getUser();
      isolationScope.addScopeListener((scope) => {
        const maybeNewUser = scope.getUser();
        if ((previousUser == null ? void 0 : previousUser.id) !== (maybeNewUser == null ? void 0 : maybeNewUser.id) || (previousUser == null ? void 0 : previousUser.ip_address) !== (maybeNewUser == null ? void 0 : maybeNewUser.ip_address)) {
          previousUser = maybeNewUser;
          if (initialSessionSent) {
            captureSession();
          }
        }
      });
      if (lifecycle === "route") {
        addHistoryInstrumentationHandler(({ from, to }) => {
          if (from !== to) {
            startSession({ ignoreDuration: true });
            captureSession();
            initialSessionSent = true;
          }
        });
      }
    }
  };
});

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/culturecontext.js
var INTEGRATION_NAME9 = "CultureContext";
var _cultureContextIntegration = (() => {
  return {
    name: INTEGRATION_NAME9,
    preprocessEvent(event) {
      var _a3;
      const culture = getCultureContext();
      if (culture) {
        event.contexts = __spreadProps(__spreadValues({}, event.contexts), {
          culture: __spreadValues(__spreadValues({}, culture), (_a3 = event.contexts) == null ? void 0 : _a3.culture)
        });
      }
    },
    processSegmentSpan(span) {
      const culture = getCultureContext();
      if (culture) {
        safeSetSpanJSONAttributes(span, {
          "culture.locale": culture.locale,
          "culture.timezone": culture.timezone,
          "culture.calendar": culture.calendar
        });
      }
    }
  };
});
var cultureContextIntegration = defineIntegration(_cultureContextIntegration);
function getCultureContext() {
  try {
    const intl = WINDOW3.Intl;
    if (!intl) {
      return void 0;
    }
    const options = intl.DateTimeFormat().resolvedOptions();
    return {
      locale: options.locale,
      timezone: options.timeZone,
      calendar: options.calendar
    };
  } catch {
    return void 0;
  }
}

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/globalhandlers.js
var INTEGRATION_NAME10 = "GlobalHandlers";
var _globalHandlersIntegration = ((options = {}) => {
  const _options = __spreadValues({
    onerror: true,
    onunhandledrejection: true
  }, options);
  return {
    name: INTEGRATION_NAME10,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(client) {
      if (_options.onerror) {
        _installGlobalOnErrorHandler(client);
        globalHandlerLog("onerror");
      }
      if (_options.onunhandledrejection) {
        _installGlobalOnUnhandledRejectionHandler(client);
        globalHandlerLog("onunhandledrejection");
      }
    }
  };
});
var globalHandlersIntegration = defineIntegration(_globalHandlersIntegration);
function _installGlobalOnErrorHandler(client) {
  addGlobalErrorInstrumentationHandler((data) => {
    const { stackParser, attachStacktrace } = getOptions();
    if (getClient() !== client || shouldIgnoreOnError(data)) {
      return;
    }
    const { msg, url, line, column, error: error2 } = data;
    const event = _enhanceEventWithInitialFrame(
      eventFromUnknownInput2(stackParser, error2 || msg, void 0, attachStacktrace, false),
      url,
      line,
      column
    );
    event.level = "error";
    captureEvent(event, {
      originalException: error2,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function _installGlobalOnUnhandledRejectionHandler(client) {
  addGlobalUnhandledRejectionInstrumentationHandler((e4) => {
    const { stackParser, attachStacktrace } = getOptions();
    if (getClient() !== client || shouldIgnoreOnError()) {
      return;
    }
    const error2 = _getUnhandledRejectionError(e4);
    const event = isPrimitive(error2) ? _eventFromRejectionWithPrimitive(error2) : eventFromUnknownInput2(stackParser, error2, void 0, attachStacktrace, true);
    event.level = "error";
    captureEvent(event, {
      originalException: error2,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function _getUnhandledRejectionError(error2) {
  if (isPrimitive(error2)) {
    return error2;
  }
  try {
    if ("reason" in error2) {
      return error2.reason;
    }
    if ("detail" in error2 && "reason" in error2.detail) {
      return error2.detail.reason;
    }
  } catch {
  }
  return error2;
}
function _eventFromRejectionWithPrimitive(reason) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
          value: `Non-Error promise rejection captured with value: ${String(reason)}`
        }
      ]
    }
  };
}
function _enhanceEventWithInitialFrame(event, url, lineno, colno) {
  const e4 = event.exception = event.exception || {};
  const ev = e4.values = e4.values || [];
  const ev0 = ev[0] = ev[0] || {};
  const ev0s = ev0.stacktrace = ev0.stacktrace || {};
  const ev0sf = ev0s.frames = ev0s.frames || [];
  if (ev0sf.length === 0) {
    ev0sf.push({
      colno,
      lineno,
      filename: getFilenameFromUrl(url) ?? getLocationHref(),
      function: UNKNOWN_FUNCTION,
      in_app: true
    });
  }
  return event;
}
function globalHandlerLog(type) {
  DEBUG_BUILD3 && debug.log(`Global Handler attached: ${type}`);
}
function getOptions() {
  const client = getClient();
  const options = (client == null ? void 0 : client.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
  return options;
}
function getFilenameFromUrl(url) {
  if (!isString(url) || url.length === 0) {
    return void 0;
  }
  if (url.startsWith("data:")) {
    return `<${stripDataUrlContent(url, false)}>`;
  }
  return url;
}

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/httpcontext.js
var httpContextIntegration = defineIntegration(() => {
  return {
    name: "HttpContext",
    preprocessEvent(event, _hint, client) {
      var _a3;
      if (!WINDOW3.navigator && !WINDOW3.location && !WINDOW3.document) {
        return;
      }
      const { url, headers: collectedHeaders } = getHttpRequestData(client);
      const behavior = client.getDataCollectionOptions().httpHeaders.request;
      const userHeaders = Object.entries(((_a3 = event.request) == null ? void 0 : _a3.headers) ?? {}).filter(([key]) => !(key in collectedHeaders));
      const headers = __spreadValues(__spreadValues({}, filterKeyValueData(collectedHeaders, behavior)), Object.fromEntries(userHeaders));
      event.request = __spreadValues(__spreadValues({
        url: filterCollectedUrl(url, client)
      }, event.request), Object.keys(headers).length > 0 ? { headers } : { headers: void 0 });
    },
    processSpan(span, client) {
      var _a3;
      if (!WINDOW3.navigator && !WINDOW3.location && !WINDOW3.document) {
        return;
      }
      const reqData = getHttpRequestData(client);
      const headers = filterKeyValueData(
        reqData.headers,
        client.getDataCollectionOptions().httpHeaders.request
      );
      const referer = headers["Referer"];
      const { hostname, protocol } = WINDOW3.location || {};
      safeSetSpanJSONAttributes(span, __spreadValues({
        // This attribute is used by the "Filter out events from legacy browsers and crawlers" features on the Sentry backend.
        // Therefore, it's set on every span.
        [mb]: headers["User-Agent"],
        // Likewise for the "Filter out localhost events" feature. Deliberately inlined rather than
        // sharing the server-side helper, which costs bundle size for request headers and IPs that
        // don't exist here. Mirrors Relay's localhost filter (relay-filter/src/localhost.rs).
        [Jd]: protocol === "file:" || hostname === "localhost" || hostname === "127.0.0.1" || // `location.hostname` keeps the brackets for IPv6 hosts, so this is `[::1]`, not `::1`.
        hostname === "[::1]" || !!(hostname == null ? void 0 : hostname.endsWith(".localhost"))
      }, span.is_segment && {
        // Coerce empty string to undefined so the helper's nullish check drops it,
        // rather than writing an empty `url.full` attribute onto the span.
        [ib]: ((_a3 = span.attributes) == null ? void 0 : _a3[mm]) !== "http.client" ? filterCollectedUrl(reqData.url) : void 0,
        [`${Po}.referer`]: referer ? [referer] : void 0
      }));
    }
  };
});

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/linkederrors.js
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
var INTEGRATION_NAME11 = "LinkedErrors";
var _linkedErrorsIntegration = ((options = {}) => {
  const limit = options.limit || DEFAULT_LIMIT;
  const key = options.key || DEFAULT_KEY;
  return {
    name: INTEGRATION_NAME11,
    preprocessEvent(event, hint, client) {
      const options2 = client.getOptions();
      applyAggregateErrorsToEvent(
        // This differs from the LinkedErrors integration in core by using a different exceptionFromError function
        exceptionFromError2,
        options2.stackParser,
        key,
        limit,
        event,
        hint
      );
    }
  };
});
var linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/spotlight.js
var INTEGRATION_NAME12 = "SpotlightBrowser";
var SPOTLIGHT_IGNORE_SPANS = [
  { op: h, name: "#sentry-spotlight" },
  { op: h, attributes: { [li]: "#sentry-spotlight" } }
];
var _spotlightIntegration = ((options = {}) => {
  const sidecarUrl = options.sidecarUrl || "http://localhost:8969/stream";
  return {
    name: INTEGRATION_NAME12,
    setup: () => {
      DEBUG_BUILD3 && debug.log("Using Sidecar URL", sidecarUrl);
    },
    beforeSetup(client) {
      const opts = client.getOptions();
      opts.ignoreSpans = [...opts.ignoreSpans || [], ...SPOTLIGHT_IGNORE_SPANS];
    },
    afterAllSetup: (client) => {
      setupSidecarForwarding(client, sidecarUrl);
    }
  };
});
function setupSidecarForwarding(client, sidecarUrl) {
  const makeFetch = getNativeImplementation("fetch");
  let failCount = 0;
  client.on("beforeEnvelope", (envelope) => {
    if (failCount > 3) {
      debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", failCount);
      return;
    }
    makeFetch(sidecarUrl, {
      method: "POST",
      body: serializeEnvelope(envelope),
      headers: {
        "Content-Type": "application/x-sentry-envelope"
      },
      mode: "cors"
    }).then(
      (res) => {
        if (res.status >= 200 && res.status < 400) {
          failCount = 0;
        }
      },
      (err) => {
        failCount++;
        debug.error(
          "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
          err
        );
      }
    );
  });
}
var spotlightBrowserIntegration = defineIntegration(_spotlightIntegration);

// node_modules/@sentry/browser/build/npm/esm/dev/normalizeStringifyValue.js
var HTML_ELEMENT_CONSTRUCTOR_NAME_REGEX = /^HTML(\w*)Element$/;
function normalizeStringifyValue(value) {
  if (typeof window !== "undefined" && value === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && value === document) {
    return "[Document]";
  }
  if (isElement2(value)) {
    const objName = getConstructorName2(value);
    if (HTML_ELEMENT_CONSTRUCTOR_NAME_REGEX.test(objName)) {
      return `[HTMLElement: ${htmlTreeAsString(value)}]`;
    }
  }
  return void 0;
}
function getConstructorName2(value) {
  const prototype = Object.getPrototypeOf(value);
  return (prototype == null ? void 0 : prototype.constructor) ? prototype.constructor.name : "null prototype";
}

// node_modules/@sentry/browser/build/npm/esm/dev/utils/detectBrowserExtension.js
function checkAndWarnIfIsEmbeddedBrowserExtension() {
  if (_isEmbeddedBrowserExtension()) {
    if (DEBUG_BUILD3) {
      consoleSandbox(() => {
        console.error(
          "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
        );
      });
    }
    return true;
  }
  return false;
}
function _isEmbeddedBrowserExtension() {
  var _a3;
  if (typeof WINDOW3.window === "undefined") {
    return false;
  }
  const _window = WINDOW3;
  if (_window.nw) {
    return false;
  }
  const extensionObject = _window["chrome"] || _window["browser"];
  if (!((_a3 = extensionObject == null ? void 0 : extensionObject.runtime) == null ? void 0 : _a3.id)) {
    return false;
  }
  const href = getLocationHref();
  const isDedicatedExtensionPage = WINDOW3 === WINDOW3.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(href);
  return !isDedicatedExtensionPage;
}

// node_modules/@sentry/browser/build/npm/esm/dev/sdk.js
function getDefaultIntegrations(_options) {
  return [
    eventFiltersIntegration(),
    functionToStringIntegration(),
    conversationIdIntegration(),
    browserApiErrorsIntegration(),
    breadcrumbsIntegration(),
    consoleIntegration(),
    globalHandlersIntegration(),
    linkedErrorsIntegration(),
    dedupeIntegration(),
    httpContextIntegration(),
    cultureContextIntegration(),
    browserSessionIntegration()
  ];
}
function init(options = {}) {
  const shouldDisableBecauseIsBrowserExtenstion = !options.skipBrowserExtensionCheck && checkAndWarnIfIsEmbeddedBrowserExtension();
  let defaultIntegrations = options.defaultIntegrations == null ? getDefaultIntegrations() : options.defaultIntegrations;
  /*! rollup-include-development-only */
  if (options.spotlight) {
    if (!defaultIntegrations) {
      defaultIntegrations = [];
    }
    const args = typeof options.spotlight === "string" ? { sidecarUrl: options.spotlight } : void 0;
    defaultIntegrations.push(spotlightBrowserIntegration(args));
  }
  /*! rollup-include-development-only-end */
  const integrations = getIntegrationsToSetup({
    integrations: options.integrations,
    defaultIntegrations
  });
  const clientOptions = __spreadProps(__spreadValues({}, options), {
    enabled: shouldDisableBecauseIsBrowserExtenstion ? false : options.enabled,
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    integrations,
    transport: options.transport || makeFetchTransport
  });
  setNormalizeStringifier(normalizeStringifyValue);
  return initAndBind(BrowserClient, clientOptions);
}

// node_modules/@sentry/browser/build/npm/esm/dev/report-dialog.js
function showReportDialog(options = {}) {
  const optionalDocument = WINDOW3.document;
  const injectionPoint = (optionalDocument == null ? void 0 : optionalDocument.head) || (optionalDocument == null ? void 0 : optionalDocument.body);
  if (!injectionPoint) {
    DEBUG_BUILD3 && debug.error("[showReportDialog] Global document not defined");
    return;
  }
  const scope = getCurrentScope();
  const client = getClient();
  const dsn = client == null ? void 0 : client.getDsn();
  if (!dsn) {
    DEBUG_BUILD3 && debug.error("[showReportDialog] DSN not configured");
    return;
  }
  const mergedOptions = __spreadProps(__spreadValues({}, options), {
    user: __spreadValues(__spreadValues({}, scope.getUser()), options.user),
    eventId: options.eventId || lastEventId()
  });
  const { onLoad: onLoad2, onClose, onError } = mergedOptions;
  if (!mergedOptions.eventId) {
    DEBUG_BUILD3 && debug.error("[showReportDialog] No event ID");
    onError == null ? void 0 : onError(new Error("No event ID to show the report dialog for"));
    return;
  }
  const script = WINDOW3.document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = getReportDialogEndpoint(dsn, mergedOptions);
  if (onLoad2) {
    script.onload = onLoad2;
  }
  if (onError) {
    script.onerror = () => {
      onError(new Error("Failed to load the report dialog script"));
    };
  }
  if (onClose) {
    const reportDialogClosedMessageHandler = (event) => {
      if (event.data === "__sentry_reportdialog_closed__") {
        try {
          onClose();
        } finally {
          WINDOW3.removeEventListener("message", reportDialogClosedMessageHandler);
        }
      }
    };
    WINDOW3.addEventListener("message", reportDialogClosedMessageHandler);
    script.addEventListener("error", () => {
      WINDOW3.removeEventListener("message", reportDialogClosedMessageHandler);
    });
  }
  injectionPoint.appendChild(script);
}

// node_modules/@sentry/replay/build/npm/esm/index.js
var WINDOW4 = GLOBAL_OBJ;
var REPLAY_SESSION_KEY = "sentryReplaySession";
var REPLAY_EVENT_NAME = "replay_event";
var UNABLE_TO_SEND_REPLAY = "Unable to send Replay";
var SESSION_IDLE_PAUSE_DURATION = 3e5;
var SESSION_IDLE_EXPIRE_DURATION = 9e5;
var DEFAULT_FLUSH_MIN_DELAY = 5e3;
var DEFAULT_FLUSH_MAX_DELAY = 5500;
var BUFFER_CHECKOUT_TIME = 6e4;
var RETRY_BASE_INTERVAL = 5e3;
var RETRY_MAX_COUNT = 3;
var NETWORK_BODY_MAX_SIZE = 15e4;
var CONSOLE_ARG_MAX_SIZE = 5e3;
var SLOW_CLICK_THRESHOLD = 3e3;
var SLOW_CLICK_SCROLL_TIMEOUT = 300;
var REPLAY_MAX_EVENT_BUFFER_SIZE = 2e7;
var MIN_REPLAY_DURATION = 4999;
var MIN_REPLAY_DURATION_LIMIT = 5e4;
var MAX_REPLAY_DURATION = 36e5;
var Nm2 = "sentry.segment.name.source";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var NodeType$1 = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType$1 || {});
function isElement$1(n3) {
  return n3.nodeType === n3.ELEMENT_NODE;
}
function isShadowRoot(n3) {
  const host = n3 == null ? void 0 : n3.host;
  return Boolean((host == null ? void 0 : host.shadowRoot) === n3);
}
function isNativeShadowDom(shadowRoot) {
  return Object.prototype.toString.call(shadowRoot) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(
      /\sbackground-clip:\s*text;/g,
      " -webkit-background-clip: text; background-clip: text;"
    );
  }
  return cssText;
}
function escapeImportStatement(rule) {
  const { cssText } = rule;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule.href)})`];
  if (rule.layerName === "") {
    statement.push(`layer`);
  } else if (rule.layerName) {
    statement.push(`layer(${rule.layerName})`);
  }
  if (rule.supportsText) {
    statement.push(`supports(${rule.supportsText})`);
  }
  if (rule.media.length) {
    statement.push(rule.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s3) {
  try {
    const rules = s3.rules || s3.cssRules;
    return rules ? fixBrowserCompatibilityIssuesInCSS(
      Array.from(rules, stringifyRule).join("")
    ) : null;
  } catch (error2) {
    return null;
  }
}
function fixAllCssProperty(rule) {
  let styles = "";
  for (let i22 = 0; i22 < rule.style.length; i22++) {
    const styleDeclaration = rule.style;
    const attribute = styleDeclaration[i22];
    const isImportant = styleDeclaration.getPropertyPriority(attribute);
    styles += `${attribute}:${styleDeclaration.getPropertyValue(attribute)}${isImportant ? ` !important` : ""};`;
  }
  return `${rule.selectorText} { ${styles} }`;
}
function stringifyRule(rule) {
  let importStringified;
  if (isCSSImportRule(rule)) {
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule);
    } catch (error2) {
    }
  } else if (isCSSStyleRule(rule)) {
    let cssText = rule.cssText;
    const needsSafariColonFix = rule.selectorText.includes(":");
    const needsAllFix = typeof rule.style["all"] === "string" && rule.style["all"];
    if (needsAllFix) {
      cssText = fixAllCssProperty(rule);
    }
    if (needsSafariColonFix) {
      cssText = fixSafariColons(cssText);
    }
    if (needsSafariColonFix || needsAllFix) {
      return cssText;
    }
  }
  return importStringified || rule.cssText;
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule) {
  return "styleSheet" in rule;
}
function isCSSStyleRule(rule) {
  return "selectorText" in rule;
}
var Mirror = class {
  constructor() {
    __publicField(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n3) {
    var _a3;
    if (!n3) return -1;
    const id = (_a3 = this.getMeta(n3)) == null ? void 0 : _a3.id;
    return id ?? -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n3) {
    return this.nodeMetaMap.get(n3) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n3) {
    const id = this.getId(n3);
    this.idNodeMap.delete(id);
    if (n3.childNodes) {
      n3.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
    if (isElement$1(n3) && n3.shadowRoot) {
      this.removeNodeFromMap(n3.shadowRoot);
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node) {
    return this.nodeMetaMap.has(node);
  }
  add(n3, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n3);
    this.nodeMetaMap.set(n3, meta);
  }
  replace(id, n3) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n3, meta);
    }
    this.idNodeMap.set(id, n3);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
};
function createMirror() {
  return new Mirror();
}
function shouldMaskInput({
  maskInputOptions,
  tagName,
  type
}) {
  if (tagName === "OPTION") {
    tagName = "SELECT";
  }
  return Boolean(
    maskInputOptions[tagName.toLowerCase()] || type && maskInputOptions[type] || type === "password" || // Default to "text" option for inputs without a "type" attribute defined
    tagName === "INPUT" && !type && maskInputOptions["text"]
  );
}
function maskInputValue({
  isMasked,
  element,
  value,
  maskInputFn
}) {
  let text = value || "";
  if (!isMasked) {
    return text;
  }
  if (maskInputFn) {
    text = maskInputFn(text, element);
  }
  return "*".repeat(text.length);
}
function toLowerCase(str) {
  return str.toLowerCase();
}
function toUpperCase(str) {
  return str.toUpperCase();
}
var ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x2 = 0; x2 < canvas.width; x2 += chunkSize) {
    for (let y2 = 0; y2 < canvas.height; y2 += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(
          ctx,
          x2,
          y2,
          Math.min(chunkSize, canvas.width - x2),
          Math.min(chunkSize, canvas.height - y2)
        ).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function getInputValue(el2, tagName, type) {
  if (tagName === "INPUT" && (type === "radio" || type === "checkbox")) {
    return el2.getAttribute("value") || "";
  }
  return el2.value;
}
function extractFileExtension(path, baseURL) {
  let url;
  try {
    url = new URL(path, baseURL ?? window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return (match == null ? void 0 : match[1]) ?? null;
}
var cachedImplementations$1 = {};
function getImplementation$1(name) {
  const cached = cachedImplementations$1[name];
  if (cached) {
    return cached;
  }
  const windowImpl = window[name].bind(window);
  let impl = windowImpl;
  const document2 = window.document;
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        const sandboxImpl = contentWindow[name].bind(window);
        impl = (...args) => {
          try {
            return sandboxImpl(...args);
          } catch {
            cachedImplementations$1[name] = windowImpl;
            return windowImpl(...args);
          }
        };
      }
      document2.head.removeChild(sandbox);
    } catch (e4) {
    }
  }
  return cachedImplementations$1[name] = impl;
}
function setTimeout$1(...rest) {
  return getImplementation$1("setTimeout")(...rest);
}
function clearTimeout$1(...rest) {
  return getImplementation$1("clearTimeout")(...rest);
}
function getIFrameContentDocument$1(iframe) {
  try {
    return iframe.contentDocument;
  } catch {
  }
}
function getIFrameContentWindow$1(iframe) {
  try {
    return iframe.contentWindow;
  } catch {
  }
}
var _id = 1;
var tagNameRegex = new RegExp("[^a-z0-9-_:]");
var IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
var URL_WWW_MATCH = /^www\..*/i;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function filterCSSPropertiesFromInlineStyle(cssText, ignoredProperties) {
  if (!cssText || ignoredProperties.size === 0) {
    return cssText;
  }
  try {
    const properties = cssText.split(";");
    const filteredProperties = [];
    for (let property of properties) {
      property = property.trim();
      if (!property) continue;
      const colonIndex = property.indexOf(":");
      if (colonIndex === -1) {
        filteredProperties.push(property);
        continue;
      }
      const propertyName = property.slice(0, colonIndex).trim();
      if (!ignoredProperties.has(propertyName)) {
        filteredProperties.push(property);
      }
    }
    return filteredProperties.join("; ") + (filteredProperties.length > 0 && cssText.endsWith(";") ? ";" : "");
  } catch (error2) {
    console.warn("Error filtering CSS properties:", error2);
    return cssText;
  }
}
function absoluteToStylesheet(cssText, href) {
  return (cssText || "").replace(
    URL_IN_CSS_REF,
    (origin, quote1, path1, quote2, path2, path3) => {
      const filePath = path1 || path2 || path3;
      const maybeQuote = quote1 || quote2 || "";
      if (!filePath) {
        return origin;
      }
      if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (DATA_URI.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (filePath[0] === "/") {
        return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
      }
      const stack = href.split("/");
      const parts = filePath.split("/");
      stack.pop();
      for (const part of parts) {
        if (part === ".") {
          continue;
        } else if (part === "..") {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
      return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
    }
  );
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars2;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars2 = match[0];
      pos += chars2.length;
      return chars2;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c2 = attributeValue.charAt(pos);
        if (c2 === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c2 === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c2 === "(") {
            inParens = true;
          }
        } else {
          if (c2 === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c2;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
var cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el2) {
  return Boolean(el2.tagName === "svg" || el2.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a2 = cachedDocument.get(doc);
  if (!a2) {
    a2 = doc.createElement("a");
    cachedDocument.set(doc, a2);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a2.setAttribute("href", customHref);
  return a2.href;
}
function transformAttribute(doc, tagName, name, value, element, maskAttributeFn, ignoreCSSAttributes) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    let processedStyle = absoluteToStylesheet(value, getHref(doc));
    if (ignoreCSSAttributes && ignoreCSSAttributes.size > 0) {
      processedStyle = filterCSSPropertiesFromInlineStyle(
        processedStyle,
        ignoreCSSAttributes
      );
    }
    return processedStyle;
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  if (typeof maskAttributeFn === "function") {
    return maskAttributeFn(name, value, element);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector, unblockSelector) {
  try {
    if (unblockSelector && element.matches(unblockSelector)) {
      return false;
    }
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e4) {
  }
  return false;
}
function elementClassMatchesRegex(el2, regex) {
  for (let eIndex = el2.classList.length; eIndex--; ) {
    const className = el2.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  return false;
}
function distanceToMatch(node, matchPredicate, limit = Infinity, distance = 0) {
  if (!node) return -1;
  if (isShadowRoot(node)) {
    return distanceToMatch(node.host, matchPredicate, limit, distance + 1);
  }
  if (node.nodeType !== node.ELEMENT_NODE) return -1;
  if (distance > limit) return -1;
  if (matchPredicate(node)) return distance;
  return distanceToMatch(node.parentNode, matchPredicate, limit, distance + 1);
}
function createMatchPredicate(className, selector) {
  return (node) => {
    const el2 = node;
    if (el2 === null) return false;
    try {
      if (className) {
        if (typeof className === "string") {
          if (el2.matches(`.${className}`)) return true;
        } else if (elementClassMatchesRegex(el2, className)) {
          return true;
        }
      }
      if (selector && el2.matches(selector)) return true;
      return false;
    } catch {
      return false;
    }
  };
}
function needMaskingText(node, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText) {
  try {
    const el2 = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
    if (el2 === null) return false;
    if (el2.tagName === "INPUT") {
      const autocomplete = el2.getAttribute("autocomplete");
      const disallowedAutocompleteValues = [
        "current-password",
        "new-password",
        "cc-number",
        "cc-exp",
        "cc-exp-month",
        "cc-exp-year",
        "cc-csc"
      ];
      if (disallowedAutocompleteValues.includes(autocomplete)) {
        return true;
      }
    }
    let maskDistance = -1;
    let unmaskDistance = -1;
    if (maskAllText) {
      unmaskDistance = distanceToMatch(
        el2,
        createMatchPredicate(unmaskTextClass, unmaskTextSelector)
      );
      if (unmaskDistance < 0) {
        return true;
      }
      maskDistance = distanceToMatch(
        el2,
        createMatchPredicate(maskTextClass, maskTextSelector),
        unmaskDistance >= 0 ? unmaskDistance : Infinity
      );
    } else {
      maskDistance = distanceToMatch(
        el2,
        createMatchPredicate(maskTextClass, maskTextSelector)
      );
      if (maskDistance < 0) {
        return false;
      }
      unmaskDistance = distanceToMatch(
        el2,
        createMatchPredicate(unmaskTextClass, unmaskTextSelector),
        maskDistance >= 0 ? maskDistance : Infinity
      );
    }
    return maskDistance >= 0 ? unmaskDistance >= 0 ? maskDistance <= unmaskDistance : true : unmaskDistance >= 0 ? false : !!maskAllText;
  } catch (e4) {
  }
  return !!maskAllText;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = getIFrameContentWindow$1(iframeEl);
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error2) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout$1(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout$1(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout$1(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error2) {
    styleSheetLoaded = null;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout$1(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout$1(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n3, options) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskAttributeFn,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    ignoreCSSAttributes
  } = options;
  const rootId = getRootId(doc, mirror2);
  switch (n3.nodeType) {
    case n3.DOCUMENT_NODE:
      if (n3.compatMode !== "CSS1Compat") {
        return {
          type: NodeType$1.Document,
          childNodes: [],
          compatMode: n3.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType$1.Document,
          childNodes: []
        };
      }
    case n3.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType$1.DocumentType,
        name: n3.name,
        publicId: n3.publicId,
        systemId: n3.systemId,
        rootId
      };
    case n3.ELEMENT_NODE:
      return serializeElementNode(n3, {
        doc,
        blockClass,
        blockSelector,
        unblockSelector,
        inlineStylesheet,
        maskAttributeFn,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector,
        ignoreCSSAttributes
      });
    case n3.TEXT_NODE:
      return serializeTextNode(n3, {
        doc,
        maskAllText,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector,
        maskTextFn,
        maskInputOptions,
        maskInputFn,
        rootId
      });
    case n3.CDATA_SECTION_NODE:
      return {
        type: NodeType$1.CDATA,
        textContent: "",
        rootId
      };
    case n3.COMMENT_NODE:
      return {
        type: NodeType$1.Comment,
        textContent: n3.textContent || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror2) {
  if (!mirror2.hasNode(doc)) return void 0;
  const docId = mirror2.getId(doc);
  return docId === 1 ? void 0 : docId;
}
function serializeTextNode(n3, options) {
  var _a3;
  const {
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    maskTextFn,
    maskInputOptions,
    maskInputFn,
    rootId
  } = options;
  const parentTagName = n3.parentNode && n3.parentNode.tagName;
  let textContent = n3.textContent;
  const isStyle = parentTagName === "STYLE" ? true : void 0;
  const isScript = parentTagName === "SCRIPT" ? true : void 0;
  const isTextarea = parentTagName === "TEXTAREA" ? true : void 0;
  if (isStyle && textContent) {
    try {
      if (n3.nextSibling || n3.previousSibling) {
      } else if ((_a3 = n3.parentNode.sheet) == null ? void 0 : _a3.cssRules) {
        textContent = stringifyStylesheet(
          n3.parentNode.sheet
        );
      }
    } catch (err) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${err}`,
        n3
      );
    }
    textContent = absoluteToStylesheet(textContent, getHref(options.doc));
  }
  if (isScript) {
    textContent = "SCRIPT_PLACEHOLDER";
  }
  const forceMask = needMaskingText(
    n3,
    maskTextClass,
    maskTextSelector,
    unmaskTextClass,
    unmaskTextSelector,
    maskAllText
  );
  if (!isStyle && !isScript && !isTextarea && textContent && forceMask) {
    textContent = maskTextFn ? maskTextFn(textContent, n3.parentElement) : textContent.replace(/[\S]/g, "*");
  }
  if (isTextarea && textContent && (maskInputOptions.textarea || forceMask)) {
    textContent = maskInputFn ? maskInputFn(textContent, n3.parentNode) : textContent.replace(/[\S]/g, "*");
  }
  if (parentTagName === "OPTION" && textContent) {
    const isInputMasked = shouldMaskInput({
      type: null,
      tagName: parentTagName,
      maskInputOptions
    });
    textContent = maskInputValue({
      isMasked: needMaskingText(
        n3,
        maskTextClass,
        maskTextSelector,
        unmaskTextClass,
        unmaskTextSelector,
        isInputMasked
      ),
      element: n3,
      value: textContent,
      maskInputFn
    });
  }
  return {
    type: NodeType$1.Text,
    textContent: textContent || "",
    isStyle,
    rootId
  };
}
function serializeElementNode(n3, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    unblockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskAttributeFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    ignoreCSSAttributes
  } = options;
  const needBlock = _isBlockedElement(
    n3,
    blockClass,
    blockSelector,
    unblockSelector
  );
  const tagName = getValidTagName(n3);
  let attributes2 = {};
  const len = n3.attributes.length;
  for (let i22 = 0; i22 < len; i22++) {
    const attr = n3.attributes[i22];
    if (attr.name && !ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes2[attr.name] = transformAttribute(
        doc,
        tagName,
        toLowerCase(attr.name),
        attr.value,
        n3,
        maskAttributeFn,
        ignoreCSSAttributes
      );
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s3) => {
      return s3.href === n3.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      attributes2.rel = null;
      attributes2.href = null;
      attributes2.crossorigin = null;
      attributes2._cssText = absoluteToStylesheet(cssText, stylesheet.href);
    }
  }
  if (tagName === "style" && n3.sheet && // TODO: Currently we only try to get dynamic stylesheet when it is an empty style element
  !(n3.innerText || n3.textContent || "").trim().length) {
    const cssText = stringifyStylesheet(
      n3.sheet
    );
    if (cssText) {
      attributes2._cssText = absoluteToStylesheet(cssText, getHref(doc));
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select" || tagName === "option") {
    const el2 = n3;
    const type = getInputType(el2);
    const value = getInputValue(el2, toUpperCase(tagName), type);
    const checked = el2.checked;
    if (type !== "submit" && type !== "button" && value) {
      const forceMask = needMaskingText(
        el2,
        maskTextClass,
        maskTextSelector,
        unmaskTextClass,
        unmaskTextSelector,
        shouldMaskInput({
          type,
          tagName: toUpperCase(tagName),
          maskInputOptions
        })
      );
      attributes2.value = maskInputValue({
        isMasked: forceMask,
        element: el2,
        value,
        maskInputFn
      });
    }
    if (checked) {
      attributes2.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n3.selected && !maskInputOptions["select"]) {
      attributes2.selected = true;
    } else {
      delete attributes2.selected;
    }
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n3.__context === "2d") {
      if (!is2DCanvasBlank(n3)) {
        attributes2.rr_dataURL = n3.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      }
    } else if (!("__context" in n3)) {
      const canvasDataURL = n3.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n3.width;
      blankCanvas.height = n3.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes2.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n3;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes2.rr_dataURL = canvasService.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(
            `Cannot inline img src=${imageSrc}! Error: ${err}`
          );
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes2.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    attributes2.rr_mediaState = n3.paused ? "paused" : "played";
    attributes2.rr_mediaCurrentTime = n3.currentTime;
  }
  if (!newlyAddedElement) {
    if (n3.scrollLeft) {
      attributes2.rr_scrollLeft = n3.scrollLeft;
    }
    if (n3.scrollTop) {
      attributes2.rr_scrollTop = n3.scrollTop;
    }
  }
  if (needBlock) {
    const { width, height } = n3.getBoundingClientRect();
    attributes2 = {
      class: attributes2.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes2.src)) {
    if (!needBlock && !getIFrameContentDocument$1(n3)) {
      attributes2.rr_src = attributes2.src;
    }
    delete attributes2.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e4) {
  }
  return {
    type: NodeType$1.Element,
    tagName,
    attributes: attributes2,
    childNodes: [],
    isSVG: isSVGElement(n3) || void 0,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === void 0 || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType$1.Comment) {
    return true;
  } else if (sn.type === NodeType$1.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n3, options) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onBlockedImageLoad,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false,
    ignoreCSSAttributes
  } = options;
  let { preserveWhiteSpace = true } = options;
  const _serializedNode = serializeNode(n3, {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    maskAllText,
    unblockSelector,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    inlineStylesheet,
    maskInputOptions,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement,
    ignoreCSSAttributes
  });
  if (!_serializedNode) {
    console.warn(n3, "not serialized");
    return null;
  }
  let id;
  if (mirror2.hasNode(n3)) {
    id = mirror2.getId(n3);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType$1.Text && !_serializedNode.isStyle && !_serializedNode.textContent.trim().length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode2 = Object.assign(_serializedNode, { id });
  mirror2.add(n3, serializedNode2);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n3);
  }
  let recordChild = !skipChild;
  if (serializedNode2.type === NodeType$1.Element) {
    recordChild = recordChild && !serializedNode2.needBlock;
    const shadowRoot = n3.shadowRoot;
    if (shadowRoot && isNativeShadowDom(shadowRoot))
      serializedNode2.isShadowHost = true;
  }
  if ((serializedNode2.type === NodeType$1.Document || serializedNode2.type === NodeType$1.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode2.type === NodeType$1.Element && serializedNode2.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror: mirror2,
      blockClass,
      blockSelector,
      maskAllText,
      unblockSelector,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskAttributeFn,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onBlockedImageLoad,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn,
      ignoreCSSAttributes
    };
    const childNodes = n3.childNodes ? Array.from(n3.childNodes) : [];
    for (const childN of childNodes) {
      const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
      if (serializedChildNode) {
        serializedNode2.childNodes.push(serializedChildNode);
      }
    }
    if (isElement$1(n3) && n3.shadowRoot) {
      for (const childN of Array.from(n3.shadowRoot.childNodes)) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(n3.shadowRoot) && (serializedChildNode.isShadow = true);
          serializedNode2.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  if (n3.parentNode && isShadowRoot(n3.parentNode) && isNativeShadowDom(n3.parentNode)) {
    serializedNode2.isShadow = true;
  }
  if (serializedNode2.type === NodeType$1.Element && serializedNode2.tagName === "iframe" && !serializedNode2.needBlock) {
    onceIframeLoaded(
      n3,
      () => {
        const iframeDoc = getIFrameContentDocument$1(n3);
        if (iframeDoc && onIframeLoad) {
          const serializedIframeNode = serializeNodeWithId(iframeDoc, {
            doc: iframeDoc,
            mirror: mirror2,
            blockClass,
            blockSelector,
            unblockSelector,
            maskAllText,
            maskTextClass,
            unmaskTextClass,
            maskTextSelector,
            unmaskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskAttributeFn,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn,
            ignoreCSSAttributes
          });
          if (serializedIframeNode) {
            onIframeLoad(
              n3,
              serializedIframeNode
            );
          }
        }
      },
      iframeLoadTimeout
    );
  }
  if (serializedNode2.type === NodeType$1.Element && serializedNode2.tagName === "img" && !n3.complete && serializedNode2.needBlock) {
    const image = n3;
    const updateImageDimensions = () => {
      if (image.isConnected && !image.complete && onBlockedImageLoad) {
        try {
          const rect = image.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            onBlockedImageLoad(image, serializedNode2, rect);
          }
        } catch (error2) {
        }
      }
      image.removeEventListener("load", updateImageDimensions);
    };
    if (image.isConnected) {
      image.addEventListener("load", updateImageDimensions);
    }
  }
  if (serializedNode2.type === NodeType$1.Element && serializedNode2.tagName === "link" && typeof serializedNode2.attributes.rel === "string" && (serializedNode2.attributes.rel === "stylesheet" || serializedNode2.attributes.rel === "preload" && typeof serializedNode2.attributes.href === "string" && extractFileExtension(serializedNode2.attributes.href) === "css")) {
    onceStylesheetLoaded(
      n3,
      () => {
        if (onStylesheetLoad) {
          const serializedLinkNode = serializeNodeWithId(n3, {
            doc,
            mirror: mirror2,
            blockClass,
            blockSelector,
            unblockSelector,
            maskAllText,
            maskTextClass,
            unmaskTextClass,
            maskTextSelector,
            unmaskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskAttributeFn,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn,
            ignoreCSSAttributes
          });
          if (serializedLinkNode) {
            onStylesheetLoad(
              n3,
              serializedLinkNode
            );
          }
        }
      },
      stylesheetLoadTimeout
    );
  }
  if (serializedNode2.type === NodeType$1.Element) {
    delete serializedNode2.needBlock;
  }
  return serializedNode2;
}
function snapshot(n3, options) {
  const {
    mirror: mirror2 = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    unblockSelector = null,
    maskAllText = false,
    maskTextClass = "rr-mask",
    unmaskTextClass = null,
    maskTextSelector = null,
    unmaskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onBlockedImageLoad,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false,
    ignoreCSSAttributes = /* @__PURE__ */ new Set([])
  } = options || {};
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true
  } : maskAllInputs === false ? {} : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n3, {
    doc: n3,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onBlockedImageLoad,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false,
    ignoreCSSAttributes
  });
}
function on(type, fn, target = document) {
  const options = { capture: true, passive: true };
  target.addEventListener(type, fn, options);
  return () => target.removeEventListener(type, fn, options);
}
var DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
var _mirror = {
  map: {},
  getId() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
  _mirror = new Proxy(_mirror, {
    get(target, prop, receiver) {
      if (prop === "map") {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function throttle$1(func, wait, options = {}) {
  let timeout = null;
  let previous = 0;
  return function(...args) {
    const now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    const context = this;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout$2(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout$2(() => {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function hookSetter(target, key, d3, isRevoked, win = window) {
  const original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(
    target,
    key,
    isRevoked ? d3 : {
      set(value) {
        setTimeout$2(() => {
          d3.set.call(this, value);
        }, 0);
        if (original && original.set) {
          original.set.call(this, value);
        }
      }
    }
  );
  return () => hookSetter(target, key, original || {}, true);
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return () => {
      };
    }
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === "function") {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }
    source[name] = wrapped;
    return () => {
      source[name] = original;
    };
  } catch {
    return () => {
    };
  }
}
var nowTimestamp = Date.now;
if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) {
  nowTimestamp = () => (/* @__PURE__ */ new Date()).getTime();
}
function getWindowScroll(win) {
  var _a3, _b, _c, _d, _e, _f;
  const doc = win.document;
  return {
    left: doc.scrollingElement ? doc.scrollingElement.scrollLeft : win.pageXOffset !== void 0 ? win.pageXOffset : (doc == null ? void 0 : doc.documentElement.scrollLeft) || ((_b = (_a3 = doc == null ? void 0 : doc.body) == null ? void 0 : _a3.parentElement) == null ? void 0 : _b.scrollLeft) || ((_c = doc == null ? void 0 : doc.body) == null ? void 0 : _c.scrollLeft) || 0,
    top: doc.scrollingElement ? doc.scrollingElement.scrollTop : win.pageYOffset !== void 0 ? win.pageYOffset : (doc == null ? void 0 : doc.documentElement.scrollTop) || ((_e = (_d = doc == null ? void 0 : doc.body) == null ? void 0 : _d.parentElement) == null ? void 0 : _e.scrollTop) || ((_f = doc == null ? void 0 : doc.body) == null ? void 0 : _f.scrollTop) || 0
  };
}
function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function closestElementOfNode$1(node) {
  if (!node) {
    return null;
  }
  try {
    const el2 = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
    return el2;
  } catch (error2) {
    return null;
  }
}
function isBlocked(node, blockClass, blockSelector, unblockSelector, checkAncestors) {
  if (!node) {
    return false;
  }
  const el2 = closestElementOfNode$1(node);
  if (!el2) {
    return false;
  }
  const blockedPredicate = createMatchPredicate(blockClass, blockSelector);
  if (!checkAncestors) {
    const isUnblocked = unblockSelector && el2.matches(unblockSelector);
    return blockedPredicate(el2) && !isUnblocked;
  }
  const blockDistance = distanceToMatch(el2, blockedPredicate);
  let unblockDistance = -1;
  if (blockDistance < 0) {
    return false;
  }
  if (unblockSelector) {
    unblockDistance = distanceToMatch(
      el2,
      createMatchPredicate(null, unblockSelector)
    );
  }
  if (blockDistance > -1 && unblockDistance < 0) {
    return true;
  }
  return blockDistance < unblockDistance;
}
function isSerialized(n3, mirror2) {
  return mirror2.getId(n3) !== -1;
}
function isIgnored(n3, mirror2) {
  return mirror2.getId(n3) === IGNORED_NODE;
}
function isAncestorRemoved(target, mirror2) {
  if (isShadowRoot(target)) {
    return false;
  }
  const id = mirror2.getId(target);
  if (!mirror2.has(id)) {
    return true;
  }
  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }
  if (!target.parentNode) {
    return true;
  }
  return isAncestorRemoved(target.parentNode, mirror2);
}
function legacy_isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function polyfill(win = window) {
  if ("NodeList" in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if ("DOMTokenList" in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
  if (!Node.prototype.contains) {
    Node.prototype.contains = (...args) => {
      let node = args[0];
      if (!(0 in args)) {
        throw new TypeError("1 argument is required");
      }
      do {
        if (this === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }
}
function isSerializedIframe(n3, mirror2) {
  return Boolean(n3.nodeName === "IFRAME" && mirror2.getMeta(n3));
}
function isSerializedStylesheet(n3, mirror2) {
  return Boolean(
    n3.nodeName === "LINK" && n3.nodeType === n3.ELEMENT_NODE && n3.getAttribute && n3.getAttribute("rel") === "stylesheet" && mirror2.getMeta(n3)
  );
}
function hasShadowRoot(n3) {
  return Boolean(n3 == null ? void 0 : n3.shadowRoot);
}
var StyleSheetMirror = class {
  constructor() {
    this.id = 1;
    this.styleIDMap = /* @__PURE__ */ new WeakMap();
    this.idStyleMap = /* @__PURE__ */ new Map();
  }
  getId(stylesheet) {
    return this.styleIDMap.get(stylesheet) ?? -1;
  }
  has(stylesheet) {
    return this.styleIDMap.has(stylesheet);
  }
  /**
   * @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
   */
  add(stylesheet, id) {
    if (this.has(stylesheet)) return this.getId(stylesheet);
    let newId;
    if (id === void 0) {
      newId = this.id++;
    } else newId = id;
    this.styleIDMap.set(stylesheet, newId);
    this.idStyleMap.set(newId, stylesheet);
    return newId;
  }
  getStyle(id) {
    return this.idStyleMap.get(id) || null;
  }
  reset() {
    this.styleIDMap = /* @__PURE__ */ new WeakMap();
    this.idStyleMap = /* @__PURE__ */ new Map();
    this.id = 1;
  }
  generateId() {
    return this.id++;
  }
};
function getShadowHost(n3) {
  var _a3, _b;
  let shadowHost = null;
  if (((_b = (_a3 = n3.getRootNode) == null ? void 0 : _a3.call(n3)) == null ? void 0 : _b.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && n3.getRootNode().host)
    shadowHost = n3.getRootNode().host;
  return shadowHost;
}
function getRootShadowHost(n3) {
  let rootShadowHost = n3;
  let shadowHost;
  while (shadowHost = getShadowHost(rootShadowHost))
    rootShadowHost = shadowHost;
  return rootShadowHost;
}
function shadowHostInDom(n3) {
  const doc = n3.ownerDocument;
  if (!doc) return false;
  const shadowHost = getRootShadowHost(n3);
  return doc.contains(shadowHost);
}
function inDom(n3) {
  const doc = n3.ownerDocument;
  if (!doc) return false;
  return doc.contains(n3) || shadowHostInDom(n3);
}
var cachedImplementations2 = {};
function getImplementation(name) {
  const cached = cachedImplementations2[name];
  if (cached) {
    return cached;
  }
  const windowImpl = window[name].bind(window);
  let impl = windowImpl;
  const document2 = window.document;
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        const sandboxImpl = contentWindow[name].bind(window);
        impl = (...args) => {
          try {
            return sandboxImpl(...args);
          } catch {
            cachedImplementations2[name] = windowImpl;
            return windowImpl(...args);
          }
        };
      }
      document2.head.removeChild(sandbox);
    } catch (e4) {
    }
  }
  return cachedImplementations2[name] = impl;
}
function onRequestAnimationFrame(...rest) {
  return getImplementation("requestAnimationFrame")(...rest);
}
function setTimeout$2(...rest) {
  return getImplementation("setTimeout")(...rest);
}
function clearTimeout$2(...rest) {
  return getImplementation("clearTimeout")(...rest);
}
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType2[EventType2["Load"] = 1] = "Load";
  EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
  EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType2[EventType2["Meta"] = 4] = "Meta";
  EventType2[EventType2["Custom"] = 5] = "Custom";
  EventType2[EventType2["Plugin"] = 6] = "Plugin";
  return EventType2;
})(EventType || {});
var IncrementalSource = /* @__PURE__ */ ((IncrementalSource2) => {
  IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
  IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
  IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
  IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
  IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
  IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
  IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
  IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
  IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
  IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
  IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
  IncrementalSource2[IncrementalSource2["CustomElement"] = 16] = "CustomElement";
  return IncrementalSource2;
})(IncrementalSource || {});
var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
  MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
  MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
  MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
  MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
  MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
  MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
  MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
  MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
  return MouseInteractions2;
})(MouseInteractions || {});
var PointerTypes = /* @__PURE__ */ ((PointerTypes2) => {
  PointerTypes2[PointerTypes2["Mouse"] = 0] = "Mouse";
  PointerTypes2[PointerTypes2["Pen"] = 1] = "Pen";
  PointerTypes2[PointerTypes2["Touch"] = 2] = "Touch";
  return PointerTypes2;
})(PointerTypes || {});
var MediaInteractions = /* @__PURE__ */ ((MediaInteractions2) => {
  MediaInteractions2[MediaInteractions2["Play"] = 0] = "Play";
  MediaInteractions2[MediaInteractions2["Pause"] = 1] = "Pause";
  MediaInteractions2[MediaInteractions2["Seeked"] = 2] = "Seeked";
  MediaInteractions2[MediaInteractions2["VolumeChange"] = 3] = "VolumeChange";
  MediaInteractions2[MediaInteractions2["RateChange"] = 4] = "RateChange";
  return MediaInteractions2;
})(MediaInteractions || {});
var errorHandler;
function registerErrorHandler(handler) {
  errorHandler = handler;
}
function unregisterErrorHandler() {
  errorHandler = void 0;
}
var callbackWrapper = (cb) => {
  if (!errorHandler) {
    return cb;
  }
  const rrwebWrapped = ((...rest) => {
    try {
      return cb(...rest);
    } catch (error2) {
      if (errorHandler && errorHandler(error2) === true) {
        return () => {
        };
      }
      throw error2;
    }
  });
  return rrwebWrapped;
};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i2 = 0; i2 < chars.length; i2++) {
  lookup[chars.charCodeAt(i2)] = i2;
}
var i2;
var CanvasManagerNoop = class {
  reset() {
  }
  freeze() {
  }
  unfreeze() {
  }
  lock() {
  }
  unlock() {
  }
  snapshot() {
  }
  addWindow() {
  }
  addShadowRoot() {
  }
  resetShadowRoots() {
  }
};
function getIFrameContentDocument(iframe) {
  try {
    return iframe.contentDocument;
  } catch (e22) {
  }
}
function getIFrameContentWindow(iframe) {
  try {
    return iframe.contentWindow;
  } catch (e22) {
  }
}
var StyleDeclarationParser = class {
  constructor(doc) {
    this.doc = doc;
    this.unattachedDoc = null;
  }
  parse(styleText) {
    return this.parseWithConstructableStylesheet(styleText) || this.parseWithDetachedElement(styleText);
  }
  parseWithConstructableStylesheet(styleText) {
    if (typeof CSSStyleSheet === "undefined" || typeof CSSStyleSheet.prototype.replaceSync !== "function") {
      return null;
    }
    try {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(`x { ${styleText} }`);
      const rule = sheet.cssRules[0];
      if (!rule || rule.type !== CSSRule.STYLE_RULE) {
        return null;
      }
      return rule.style;
    } catch {
      return null;
    }
  }
  parseWithDetachedElement(styleText) {
    const old = this.getUnattachedDoc().createElement("span");
    old.setAttribute("style", styleText);
    return old.style;
  }
  getUnattachedDoc() {
    if (!this.unattachedDoc) {
      try {
        this.unattachedDoc = document.implementation.createHTMLDocument();
      } catch {
        this.unattachedDoc = this.doc;
      }
    }
    return this.unattachedDoc;
  }
};
function isNodeInLinkedList(n22) {
  return "__ln" in n22;
}
var DoubleLinkedList = class {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  get(position) {
    if (position >= this.length) {
      throw new Error("Position outside of list range");
    }
    let current = this.head;
    for (let index = 0; index < position; index++) {
      current = (current == null ? void 0 : current.next) || null;
    }
    return current;
  }
  addNode(n22) {
    const node = {
      value: n22,
      previous: null,
      next: null
    };
    n22.__ln = node;
    if (n22.previousSibling && isNodeInLinkedList(n22.previousSibling)) {
      const current = n22.previousSibling.__ln.next;
      node.next = current;
      node.previous = n22.previousSibling.__ln;
      n22.previousSibling.__ln.next = node;
      if (current) {
        current.previous = node;
      }
    } else if (n22.nextSibling && isNodeInLinkedList(n22.nextSibling) && n22.nextSibling.__ln.previous) {
      const current = n22.nextSibling.__ln.previous;
      node.previous = current;
      node.next = n22.nextSibling.__ln;
      n22.nextSibling.__ln.previous = node;
      if (current) {
        current.next = node;
      }
    } else {
      if (this.head) {
        this.head.previous = node;
      }
      node.next = this.head;
      this.head = node;
    }
    if (node.next === null) {
      this.tail = node;
    }
    this.length++;
  }
  removeNode(n22) {
    const current = n22.__ln;
    if (!this.head) {
      return;
    }
    if (!current.previous) {
      this.head = current.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
    } else {
      current.previous.next = current.next;
      if (current.next) {
        current.next.previous = current.previous;
      } else {
        this.tail = current.previous;
      }
    }
    if (n22.__ln) {
      delete n22.__ln;
    }
    this.length--;
  }
};
var moveKey = (id, parentId) => `${id}@${parentId}`;
var MutationBuffer = class {
  constructor() {
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.attributeMap = /* @__PURE__ */ new WeakMap();
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = /* @__PURE__ */ new Set();
    this.movedSet = /* @__PURE__ */ new Set();
    this.droppedSet = /* @__PURE__ */ new Set();
    this.processMutations = (mutations) => {
      mutations.forEach(this.processMutation);
      this.emit();
    };
    this.emit = () => {
      if (this.frozen || this.locked) {
        return;
      }
      const adds = [];
      const addedIds = /* @__PURE__ */ new Set();
      const addList = new DoubleLinkedList();
      const getNextId = (n22) => {
        let ns = n22;
        let nextId = IGNORED_NODE;
        while (nextId === IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && this.mirror.getId(ns);
        }
        return nextId;
      };
      const pushAdd = (n22) => {
        if (!n22.parentNode || !inDom(n22)) {
          return;
        }
        const parentId = isShadowRoot(n22.parentNode) ? this.mirror.getId(getShadowHost(n22)) : this.mirror.getId(n22.parentNode);
        const nextId = getNextId(n22);
        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n22);
        }
        const sn = serializeNodeWithId(n22, {
          doc: this.doc,
          mirror: this.mirror,
          blockClass: this.blockClass,
          blockSelector: this.blockSelector,
          maskAllText: this.maskAllText,
          unblockSelector: this.unblockSelector,
          maskTextClass: this.maskTextClass,
          unmaskTextClass: this.unmaskTextClass,
          maskTextSelector: this.maskTextSelector,
          unmaskTextSelector: this.unmaskTextSelector,
          skipChild: true,
          newlyAddedElement: true,
          inlineStylesheet: this.inlineStylesheet,
          maskInputOptions: this.maskInputOptions,
          maskAttributeFn: this.maskAttributeFn,
          maskTextFn: this.maskTextFn,
          maskInputFn: this.maskInputFn,
          slimDOMOptions: this.slimDOMOptions,
          dataURLOptions: this.dataURLOptions,
          recordCanvas: this.recordCanvas,
          inlineImages: this.inlineImages,
          onSerialize: (currentN) => {
            if (isSerializedIframe(currentN, this.mirror) && !isBlocked(
              currentN,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              false
            )) {
              this.iframeManager.addIframe(currentN);
            }
            if (isSerializedStylesheet(currentN, this.mirror)) {
              this.stylesheetManager.trackLinkElement(
                currentN
              );
            }
            if (hasShadowRoot(n22)) {
              this.shadowDomManager.addShadowRoot(n22.shadowRoot, this.doc);
            }
          },
          onIframeLoad: (iframe, childSn) => {
            if (isBlocked(
              iframe,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              false
            )) {
              return;
            }
            this.iframeManager.attachIframe(iframe, childSn);
            const contentWindow = getIFrameContentWindow(iframe);
            if (contentWindow) {
              this.canvasManager.addWindow(contentWindow);
            }
            this.shadowDomManager.observeAttachShadow(iframe);
          },
          onStylesheetLoad: (link, childSn) => {
            this.stylesheetManager.attachLinkElement(link, childSn);
          },
          onBlockedImageLoad: (_imageEl, serializedNode, { width, height }) => {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [
                {
                  id: serializedNode.id,
                  attributes: {
                    style: {
                      width: `${width}px`,
                      height: `${height}px`
                    }
                  }
                }
              ]
            });
          },
          ignoreCSSAttributes: this.ignoreCSSAttributes
        });
        if (sn) {
          adds.push({
            parentId,
            nextId,
            node: sn
          });
          addedIds.add(sn.id);
        }
      };
      while (this.mapRemoves.length) {
        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      }
      for (const n22 of this.movedSet) {
        if (isParentRemoved(this.removes, n22, this.mirror) && !this.movedSet.has(n22.parentNode)) {
          continue;
        }
        pushAdd(n22);
      }
      for (const n22 of this.addedSet) {
        if (!isAncestorInSet(this.droppedSet, n22) && !isParentRemoved(this.removes, n22, this.mirror)) {
          pushAdd(n22);
        } else if (isAncestorInSet(this.movedSet, n22)) {
          pushAdd(n22);
        } else {
          this.droppedSet.add(n22);
        }
      }
      let candidate = null;
      while (addList.length) {
        let node = null;
        if (candidate) {
          const parentId = this.mirror.getId(candidate.value.parentNode);
          const nextId = getNextId(candidate.value);
          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }
        if (!node) {
          let tailNode = addList.tail;
          while (tailNode) {
            const _node = tailNode;
            tailNode = tailNode.previous;
            if (_node) {
              const parentId = this.mirror.getId(_node.value.parentNode);
              const nextId = getNextId(_node.value);
              if (nextId === -1) continue;
              else if (parentId !== -1) {
                node = _node;
                break;
              } else {
                const unhandledNode = _node.value;
                if (unhandledNode.parentNode && unhandledNode.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const shadowHost = unhandledNode.parentNode.host;
                  const parentId2 = this.mirror.getId(shadowHost);
                  if (parentId2 !== -1) {
                    node = _node;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }
          break;
        }
        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }
      const payload = {
        texts: this.texts.map((text) => ({
          id: this.mirror.getId(text.node),
          value: text.value
        })).filter((text) => !addedIds.has(text.id)).filter((text) => this.mirror.has(text.id)),
        attributes: this.attributes.map((attribute) => {
          const { attributes } = attribute;
          if (typeof attributes.style === "string") {
            const diffAsStr = JSON.stringify(attribute.styleDiff);
            const unchangedAsStr = JSON.stringify(attribute._unchangedStyles);
            if (diffAsStr.length < attributes.style.length) {
              if ((diffAsStr + unchangedAsStr).split("var(").length === attributes.style.split("var(").length) {
                attributes.style = attribute.styleDiff;
              }
            }
          }
          return {
            id: this.mirror.getId(attribute.node),
            attributes
          };
        }).filter((attribute) => !addedIds.has(attribute.id)).filter((attribute) => this.mirror.has(attribute.id)),
        removes: this.removes,
        adds
      };
      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }
      this.texts = [];
      this.attributes = [];
      this.attributeMap = /* @__PURE__ */ new WeakMap();
      this.removes = [];
      this.addedSet = /* @__PURE__ */ new Set();
      this.movedSet = /* @__PURE__ */ new Set();
      this.droppedSet = /* @__PURE__ */ new Set();
      this.movedMap = {};
      this.mutationCb(payload);
    };
    this.processMutation = (m3) => {
      if (isIgnored(m3.target, this.mirror)) {
        return;
      }
      switch (m3.type) {
        case "characterData": {
          const value = m3.target.textContent;
          if (!isBlocked(
            m3.target,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            false
          ) && value !== m3.oldValue) {
            this.texts.push({
              value: needMaskingText(
                m3.target,
                this.maskTextClass,
                this.maskTextSelector,
                this.unmaskTextClass,
                this.unmaskTextSelector,
                this.maskAllText
              ) && value ? this.maskTextFn ? this.maskTextFn(value, closestElementOfNode$1(m3.target)) : value.replace(/[\S]/g, "*") : value,
              node: m3.target
            });
          }
          break;
        }
        case "attributes": {
          const target = m3.target;
          let attributeName = m3.attributeName;
          let value = m3.target.getAttribute(attributeName);
          if (attributeName === "value") {
            const type = getInputType(target);
            const tagName = target.tagName;
            value = getInputValue(target, tagName, type);
            const isInputMasked = shouldMaskInput({
              maskInputOptions: this.maskInputOptions,
              tagName,
              type
            });
            const forceMask = needMaskingText(
              m3.target,
              this.maskTextClass,
              this.maskTextSelector,
              this.unmaskTextClass,
              this.unmaskTextSelector,
              isInputMasked
            );
            value = maskInputValue({
              isMasked: forceMask,
              element: target,
              value,
              maskInputFn: this.maskInputFn
            });
          }
          if (isBlocked(
            m3.target,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            false
          ) || value === m3.oldValue) {
            return;
          }
          let item = this.attributeMap.get(m3.target);
          if (target.tagName === "IFRAME" && attributeName === "src" && !this.keepIframeSrcFn(value)) {
            const iframeDoc = getIFrameContentDocument(
              target
            );
            if (!iframeDoc) {
              attributeName = "rr_src";
            } else {
              return;
            }
          }
          if (!item) {
            item = {
              node: m3.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            };
            this.attributes.push(item);
            this.attributeMap.set(m3.target, item);
          }
          if (attributeName === "type" && target.tagName === "INPUT" && (m3.oldValue || "").toLowerCase() === "password") {
            target.setAttribute("data-rr-is-password", "true");
          }
          if (!ignoreAttribute(target.tagName, attributeName)) {
            item.attributes[attributeName] = transformAttribute(
              this.doc,
              toLowerCase(target.tagName),
              toLowerCase(attributeName),
              value,
              target,
              this.maskAttributeFn
            );
            if (attributeName === "style") {
              const oldStyle = m3.oldValue ? this.styleDeclarationParser.parse(m3.oldValue) : null;
              for (const pname of Array.from(target.style)) {
                const newValue = target.style.getPropertyValue(pname);
                const newPriority = target.style.getPropertyPriority(pname);
                if (newValue !== ((oldStyle == null ? void 0 : oldStyle.getPropertyValue(pname)) || "") || newPriority !== ((oldStyle == null ? void 0 : oldStyle.getPropertyPriority(pname)) || "")) {
                  if (newPriority === "") {
                    item.styleDiff[pname] = newValue;
                  } else {
                    item.styleDiff[pname] = [newValue, newPriority];
                  }
                } else {
                  item._unchangedStyles[pname] = [newValue, newPriority];
                }
              }
              if (oldStyle) {
                for (const pname of Array.from(oldStyle)) {
                  if (target.style.getPropertyValue(pname) === "") {
                    item.styleDiff[pname] = false;
                  }
                }
              }
            }
          }
          break;
        }
        case "childList": {
          if (isBlocked(
            m3.target,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            true
          )) {
            return;
          }
          m3.addedNodes.forEach((n22) => this.genAdds(n22, m3.target));
          m3.removedNodes.forEach((n22) => {
            const nodeId = this.mirror.getId(n22);
            const parentId = isShadowRoot(m3.target) ? this.mirror.getId(m3.target.host) : this.mirror.getId(m3.target);
            if (isBlocked(
              m3.target,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              false
            ) || isIgnored(n22, this.mirror) || !isSerialized(n22, this.mirror)) {
              return;
            }
            if (this.addedSet.has(n22)) {
              deepDelete(this.addedSet, n22);
              this.droppedSet.add(n22);
            } else if (this.addedSet.has(m3.target) && nodeId === -1) ;
            else if (isAncestorRemoved(m3.target, this.mirror)) ;
            else if (this.movedSet.has(n22) && this.movedMap[moveKey(nodeId, parentId)]) {
              deepDelete(this.movedSet, n22);
            } else {
              this.removes.push({
                parentId,
                id: nodeId,
                isShadow: isShadowRoot(m3.target) && isNativeShadowDom(m3.target) ? true : void 0
              });
            }
            this.mapRemoves.push(n22);
          });
          break;
        }
      }
    };
    this.genAdds = (n22, target) => {
      if (this.processedNodeManager.inOtherBuffer(n22, this)) return;
      if (this.addedSet.has(n22) || this.movedSet.has(n22)) return;
      if (this.mirror.hasNode(n22)) {
        if (isIgnored(n22, this.mirror)) {
          return;
        }
        this.movedSet.add(n22);
        let targetId = null;
        if (target && this.mirror.hasNode(target)) {
          targetId = this.mirror.getId(target);
        }
        if (targetId && targetId !== -1) {
          this.movedMap[moveKey(this.mirror.getId(n22), targetId)] = true;
        }
      } else {
        this.addedSet.add(n22);
        this.droppedSet.delete(n22);
      }
      if (!isBlocked(
        n22,
        this.blockClass,
        this.blockSelector,
        this.unblockSelector,
        false
      )) {
        if (n22.childNodes) {
          n22.childNodes.forEach((childN) => this.genAdds(childN));
        }
        if (hasShadowRoot(n22)) {
          n22.shadowRoot.childNodes.forEach((childN) => {
            this.processedNodeManager.add(childN, this);
            this.genAdds(childN, n22);
          });
        }
      }
    };
  }
  init(options) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
      "ignoreCSSAttributes"
    ].forEach((key) => {
      this[key] = options[key];
    });
    this.styleDeclarationParser = new StyleDeclarationParser(this.doc);
  }
  freeze() {
    this.frozen = true;
    this.canvasManager.freeze();
  }
  unfreeze() {
    this.frozen = false;
    this.canvasManager.unfreeze();
    this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    this.locked = true;
    this.canvasManager.lock();
  }
  unlock() {
    this.locked = false;
    this.canvasManager.unlock();
    this.emit();
  }
  reset() {
    this.shadowDomManager.reset();
    this.canvasManager.reset();
  }
};
function deepDelete(addsSet, n22) {
  var _a3;
  addsSet.delete(n22);
  (_a3 = n22.childNodes) == null ? void 0 : _a3.forEach((childN) => deepDelete(addsSet, childN));
}
function isParentRemoved(removes, n22, mirror2) {
  if (removes.length === 0) return false;
  return _isParentRemoved(removes, n22, mirror2);
}
function _isParentRemoved(removes, n22, mirror2) {
  let node = n22.parentNode;
  while (node) {
    const parentId = mirror2.getId(node);
    if (removes.some((r2) => r2.id === parentId)) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
function isAncestorInSet(set, n22) {
  if (set.size === 0) return false;
  return _isAncestorInSet(set, n22);
}
function _isAncestorInSet(set, n22) {
  const { parentNode } = n22;
  if (!parentNode) {
    return false;
  }
  if (set.has(parentNode)) {
    return true;
  }
  return _isAncestorInSet(set, parentNode);
}
var mutationBuffers = [];
function getEventTarget2(event) {
  try {
    if ("composedPath" in event) {
      const path = event.composedPath();
      if (path.length) {
        return path[0];
      }
    } else if ("path" in event && event.path.length) {
      return event.path[0];
    }
  } catch {
  }
  return event && event.target;
}
function initMutationObserver(options, rootEl) {
  var _a3, _b;
  const mutationBuffer = new MutationBuffer();
  mutationBuffers.push(mutationBuffer);
  mutationBuffer.init(options);
  let mutationObserverCtor = window.MutationObserver || /**
  * Some websites may disable MutationObserver by removing it from the window object.
  * If someone is using rrweb to build a browser extention or things like it, they
  * could not change the website's code but can have an opportunity to inject some
  * code before the website executing its JS logic.
  * Then they can do this to store the native MutationObserver:
  * window.__rrMutationObserver = MutationObserver
  */
  window.__rrMutationObserver;
  const angularZoneSymbol = (_b = (_a3 = window == null ? void 0 : window.Zone) == null ? void 0 : _a3.__symbol__) == null ? void 0 : _b.call(_a3, "MutationObserver");
  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }
  const observer = new mutationObserverCtor(
    callbackWrapper((mutations) => {
      if (options.onMutation && options.onMutation(mutations) === false) {
        return;
      }
      mutationBuffer.processMutations.bind(mutationBuffer)(mutations);
    })
  );
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}
function initMoveObserver({
  mousemoveCb,
  sampling,
  doc,
  mirror: mirror2
}) {
  if (sampling.mousemove === false) {
    return () => {
    };
  }
  const threshold = typeof sampling.mousemove === "number" ? sampling.mousemove : 50;
  const callbackThreshold = typeof sampling.mousemoveCallback === "number" ? sampling.mousemoveCallback : 500;
  let positions = [];
  let timeBaseline;
  const wrappedCb = throttle$1(
    callbackWrapper(
      (source) => {
        const totalOffset = Date.now() - timeBaseline;
        mousemoveCb(
          positions.map((p3) => {
            p3.timeOffset -= totalOffset;
            return p3;
          }),
          source
        );
        positions = [];
        timeBaseline = null;
      }
    ),
    callbackThreshold
  );
  const updatePosition = callbackWrapper(
    throttle$1(
      callbackWrapper((evt) => {
        const target = getEventTarget2(evt);
        const { clientX, clientY } = legacy_isTouchEvent(evt) ? evt.changedTouches[0] : evt;
        if (!timeBaseline) {
          timeBaseline = nowTimestamp();
        }
        positions.push({
          x: clientX,
          y: clientY,
          id: mirror2.getId(target),
          timeOffset: nowTimestamp() - timeBaseline
        });
        wrappedCb(
          typeof DragEvent !== "undefined" && evt instanceof DragEvent ? IncrementalSource.Drag : evt instanceof MouseEvent ? IncrementalSource.MouseMove : IncrementalSource.TouchMove
        );
      }),
      threshold,
      {
        trailing: false
      }
    )
  );
  const handlers4 = [
    on("mousemove", updatePosition, doc),
    on("touchmove", updatePosition, doc),
    on("drag", updatePosition, doc)
  ];
  return callbackWrapper(() => {
    handlers4.forEach((h3) => h3());
  });
}
function initMouseInteractionObserver({
  mouseInteractionCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  sampling
}) {
  if (sampling.mouseInteraction === false) {
    return () => {
    };
  }
  const disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === void 0 ? {} : sampling.mouseInteraction;
  const handlers4 = [];
  let currentPointerType = null;
  const getHandler = (eventKey) => {
    return (event) => {
      const target = getEventTarget2(event);
      if (isBlocked(target, blockClass, blockSelector, unblockSelector, true)) {
        return;
      }
      let pointerType = null;
      let thisEventKey = eventKey;
      if ("pointerType" in event) {
        switch (event.pointerType) {
          case "mouse":
            pointerType = PointerTypes.Mouse;
            break;
          case "touch":
            pointerType = PointerTypes.Touch;
            break;
          case "pen":
            pointerType = PointerTypes.Pen;
            break;
        }
        if (pointerType === PointerTypes.Touch) {
          if (MouseInteractions[eventKey] === MouseInteractions.MouseDown) {
            thisEventKey = "TouchStart";
          } else if (MouseInteractions[eventKey] === MouseInteractions.MouseUp) {
            thisEventKey = "TouchEnd";
          }
        } else if (pointerType === PointerTypes.Pen) ;
      } else if (legacy_isTouchEvent(event)) {
        pointerType = PointerTypes.Touch;
      }
      if (pointerType !== null) {
        currentPointerType = pointerType;
        if (thisEventKey.startsWith("Touch") && pointerType === PointerTypes.Touch || thisEventKey.startsWith("Mouse") && pointerType === PointerTypes.Mouse) {
          pointerType = null;
        }
      } else if (MouseInteractions[eventKey] === MouseInteractions.Click) {
        pointerType = currentPointerType;
        currentPointerType = null;
      }
      const e22 = legacy_isTouchEvent(event) ? event.changedTouches[0] : event;
      if (!e22) {
        return;
      }
      const id = mirror2.getId(target);
      const { clientX, clientY } = e22;
      callbackWrapper(mouseInteractionCb)(__spreadValues({
        type: MouseInteractions[thisEventKey],
        id,
        x: clientX,
        y: clientY
      }, pointerType !== null && { pointerType }));
    };
  };
  Object.keys(MouseInteractions).filter(
    (key) => Number.isNaN(Number(key)) && !key.endsWith("_Departed") && disableMap[key] !== false
  ).forEach((eventKey) => {
    let eventName = toLowerCase(eventKey);
    const handler = getHandler(eventKey);
    if (window.PointerEvent) {
      switch (MouseInteractions[eventKey]) {
        case MouseInteractions.MouseDown:
        case MouseInteractions.MouseUp:
          eventName = eventName.replace(
            "mouse",
            "pointer"
          );
          break;
        case MouseInteractions.TouchStart:
        case MouseInteractions.TouchEnd:
          return;
      }
    }
    handlers4.push(on(eventName, handler, doc));
  });
  return callbackWrapper(() => {
    handlers4.forEach((h3) => h3());
  });
}
function initScrollObserver({
  scrollCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  sampling
}) {
  const updatePosition = callbackWrapper(
    throttle$1(
      callbackWrapper((evt) => {
        const target = getEventTarget2(evt);
        if (!target || isBlocked(
          target,
          blockClass,
          blockSelector,
          unblockSelector,
          true
        )) {
          return;
        }
        const id = mirror2.getId(target);
        if (target === doc && doc.defaultView) {
          const scrollLeftTop = getWindowScroll(doc.defaultView);
          scrollCb({
            id,
            x: scrollLeftTop.left,
            y: scrollLeftTop.top
          });
        } else {
          scrollCb({
            id,
            x: target.scrollLeft,
            y: target.scrollTop
          });
        }
      }),
      sampling.scroll || 100
    )
  );
  return on("scroll", updatePosition, doc);
}
function initViewportResizeObserver({ viewportResizeCb }, { win }) {
  let lastH = -1;
  let lastW = -1;
  const updateDimension = callbackWrapper(
    throttle$1(
      callbackWrapper(() => {
        const height = getWindowHeight();
        const width = getWindowWidth();
        if (lastH !== height || lastW !== width) {
          viewportResizeCb({
            width: Number(width),
            height: Number(height)
          });
          lastH = height;
          lastW = width;
        }
      }),
      200
    )
  );
  return on("resize", updateDimension, win);
}
var INPUT_TAGS = ["INPUT", "TEXTAREA", "SELECT"];
var lastInputValueMap = /* @__PURE__ */ new WeakMap();
function initInputObserver({
  inputCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  ignoreClass,
  ignoreSelector,
  maskInputOptions,
  maskInputFn,
  sampling,
  userTriggeredOnInput,
  maskTextClass,
  unmaskTextClass,
  maskTextSelector,
  unmaskTextSelector
}) {
  function eventHandler(event) {
    let target = getEventTarget2(event);
    const userTriggered = event.isTrusted;
    const tagName = target && toUpperCase(target.tagName);
    if (tagName === "OPTION") target = target.parentElement;
    if (!target || !tagName || INPUT_TAGS.indexOf(tagName) < 0 || isBlocked(
      target,
      blockClass,
      blockSelector,
      unblockSelector,
      true
    )) {
      return;
    }
    const el2 = target;
    if (el2.classList.contains(ignoreClass) || ignoreSelector && el2.matches(ignoreSelector)) {
      return;
    }
    const type = getInputType(target);
    let text = getInputValue(el2, tagName, type);
    let isChecked = false;
    const isInputMasked = shouldMaskInput({
      maskInputOptions,
      tagName,
      type
    });
    const forceMask = needMaskingText(
      target,
      maskTextClass,
      maskTextSelector,
      unmaskTextClass,
      unmaskTextSelector,
      isInputMasked
    );
    if (type === "radio" || type === "checkbox") {
      isChecked = target.checked;
    }
    text = maskInputValue({
      isMasked: forceMask,
      element: target,
      value: text,
      maskInputFn
    });
    cbWithDedup(
      target,
      userTriggeredOnInput ? { text, isChecked, userTriggered } : { text, isChecked }
    );
    const name = target.name;
    if (type === "radio" && name && isChecked) {
      doc.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach((el22) => {
        if (el22 !== target) {
          const text2 = maskInputValue({
            // share mask behavior of `target`
            isMasked: forceMask,
            element: el22,
            value: getInputValue(el22, tagName, type),
            maskInputFn
          });
          cbWithDedup(
            el22,
            userTriggeredOnInput ? { text: text2, isChecked: !isChecked, userTriggered: false } : { text: text2, isChecked: !isChecked }
          );
        }
      });
    }
  }
  function cbWithDedup(target, v2) {
    const lastInputValue = lastInputValueMap.get(target);
    if (!lastInputValue || lastInputValue.text !== v2.text || lastInputValue.isChecked !== v2.isChecked) {
      lastInputValueMap.set(target, v2);
      const id = mirror2.getId(target);
      callbackWrapper(inputCb)(__spreadProps(__spreadValues({}, v2), {
        id
      }));
    }
  }
  const events = sampling.input === "last" ? ["change"] : ["input", "change"];
  const handlers4 = events.map(
    (eventName) => on(eventName, callbackWrapper(eventHandler), doc)
  );
  const currentWindow = doc.defaultView;
  if (!currentWindow) {
    return () => {
      handlers4.forEach((h3) => h3());
    };
  }
  const propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(
    currentWindow.HTMLInputElement.prototype,
    "value"
  );
  const hookProperties = [
    [currentWindow.HTMLInputElement.prototype, "value"],
    [currentWindow.HTMLInputElement.prototype, "checked"],
    [currentWindow.HTMLSelectElement.prototype, "value"],
    [currentWindow.HTMLTextAreaElement.prototype, "value"],
    // Some UI library use selectedIndex to set select value
    [currentWindow.HTMLSelectElement.prototype, "selectedIndex"],
    [currentWindow.HTMLOptionElement.prototype, "selected"]
  ];
  if (propertyDescriptor && propertyDescriptor.set) {
    handlers4.push(
      ...hookProperties.map(
        (p3) => hookSetter(
          p3[0],
          p3[1],
          {
            set() {
              callbackWrapper(eventHandler)({
                target: this,
                isTrusted: false
                // userTriggered to false as this could well be programmatic
              });
            }
          },
          false,
          currentWindow
        )
      )
    );
  }
  return callbackWrapper(() => {
    handlers4.forEach((h3) => h3());
  });
}
function getNestedCSSRulePositions(rule) {
  const positions = [];
  function recurse(childRule, pos) {
    if (hasNestedCSSRule("CSSGroupingRule") && childRule.parentRule instanceof CSSGroupingRule || hasNestedCSSRule("CSSMediaRule") && childRule.parentRule instanceof CSSMediaRule || hasNestedCSSRule("CSSSupportsRule") && childRule.parentRule instanceof CSSSupportsRule || hasNestedCSSRule("CSSConditionRule") && childRule.parentRule instanceof CSSConditionRule) {
      const rules2 = Array.from(
        childRule.parentRule.cssRules
      );
      const index = rules2.indexOf(childRule);
      pos.unshift(index);
    } else if (childRule.parentStyleSheet) {
      const rules2 = Array.from(childRule.parentStyleSheet.cssRules);
      const index = rules2.indexOf(childRule);
      pos.unshift(index);
    }
    return pos;
  }
  return recurse(rule, positions);
}
function getIdAndStyleId(sheet, mirror2, styleMirror) {
  let id, styleId;
  if (!sheet) return {};
  if (sheet.ownerNode) id = mirror2.getId(sheet.ownerNode);
  else styleId = styleMirror.getId(sheet);
  return {
    styleId,
    id
  };
}
function initStyleSheetObserver({ styleSheetRuleCb, mirror: mirror2, stylesheetManager }, { win }) {
  if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) {
    return () => {
    };
  }
  const insertRule = win.CSSStyleSheet.prototype.insertRule;
  win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        const [rule, index] = argumentsList;
        const { id, styleId } = getIdAndStyleId(
          thisArg,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            adds: [{ rule, index }]
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
  win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        const [index] = argumentsList;
        const { id, styleId } = getIdAndStyleId(
          thisArg,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            removes: [{ index }]
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  let replace;
  if (win.CSSStyleSheet.prototype.replace) {
    replace = win.CSSStyleSheet.prototype.replace;
    win.CSSStyleSheet.prototype.replace = new Proxy(replace, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          const [text] = argumentsList;
          const { id, styleId } = getIdAndStyleId(
            thisArg,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleSheetRuleCb({
              id,
              styleId,
              replace: text
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
  }
  let replaceSync;
  if (win.CSSStyleSheet.prototype.replaceSync) {
    replaceSync = win.CSSStyleSheet.prototype.replaceSync;
    win.CSSStyleSheet.prototype.replaceSync = new Proxy(replaceSync, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          const [text] = argumentsList;
          const { id, styleId } = getIdAndStyleId(
            thisArg,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleSheetRuleCb({
              id,
              styleId,
              replaceSync: text
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
  }
  const supportedNestedCSSRuleTypes = {};
  if (canMonkeyPatchNestedCSSRule("CSSGroupingRule")) {
    supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
  } else {
    if (canMonkeyPatchNestedCSSRule("CSSMediaRule")) {
      supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
    }
    if (canMonkeyPatchNestedCSSRule("CSSConditionRule")) {
      supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
    }
    if (canMonkeyPatchNestedCSSRule("CSSSupportsRule")) {
      supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
    }
  }
  const unmodifiedFunctions = {};
  Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
    unmodifiedFunctions[typeKey] = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      insertRule: type.prototype.insertRule,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      deleteRule: type.prototype.deleteRule
    };
    type.prototype.insertRule = new Proxy(
      unmodifiedFunctions[typeKey].insertRule,
      {
        apply: callbackWrapper(
          (target, thisArg, argumentsList) => {
            const [rule, index] = argumentsList;
            const { id, styleId } = getIdAndStyleId(
              thisArg.parentStyleSheet,
              mirror2,
              stylesheetManager.styleMirror
            );
            if (id && id !== -1 || styleId && styleId !== -1) {
              styleSheetRuleCb({
                id,
                styleId,
                adds: [
                  {
                    rule,
                    index: [
                      ...getNestedCSSRulePositions(thisArg),
                      index || 0
                      // defaults to 0
                    ]
                  }
                ]
              });
            }
            return target.apply(thisArg, argumentsList);
          }
        )
      }
    );
    type.prototype.deleteRule = new Proxy(
      unmodifiedFunctions[typeKey].deleteRule,
      {
        apply: callbackWrapper(
          (target, thisArg, argumentsList) => {
            const [index] = argumentsList;
            const { id, styleId } = getIdAndStyleId(
              thisArg.parentStyleSheet,
              mirror2,
              stylesheetManager.styleMirror
            );
            if (id && id !== -1 || styleId && styleId !== -1) {
              styleSheetRuleCb({
                id,
                styleId,
                removes: [
                  { index: [...getNestedCSSRulePositions(thisArg), index] }
                ]
              });
            }
            return target.apply(thisArg, argumentsList);
          }
        )
      }
    );
  });
  return callbackWrapper(() => {
    win.CSSStyleSheet.prototype.insertRule = insertRule;
    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
    replace && (win.CSSStyleSheet.prototype.replace = replace);
    replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
    Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
      type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
      type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
    });
  });
}
function initAdoptedStyleSheetObserver({
  mirror: mirror2,
  stylesheetManager
}, host) {
  var _a3, _b, _c;
  let hostId = null;
  if (host.nodeName === "#document") hostId = mirror2.getId(host);
  else hostId = mirror2.getId(host.host);
  const patchTarget = host.nodeName === "#document" ? (_a3 = host.defaultView) == null ? void 0 : _a3.Document : (_c = (_b = host.ownerDocument) == null ? void 0 : _b.defaultView) == null ? void 0 : _c.ShadowRoot;
  const originalPropertyDescriptor = (patchTarget == null ? void 0 : patchTarget.prototype) ? Object.getOwnPropertyDescriptor(
    patchTarget == null ? void 0 : patchTarget.prototype,
    "adoptedStyleSheets"
  ) : void 0;
  if (hostId === null || hostId === -1 || !patchTarget || !originalPropertyDescriptor)
    return () => {
    };
  Object.defineProperty(host, "adoptedStyleSheets", {
    configurable: originalPropertyDescriptor.configurable,
    enumerable: originalPropertyDescriptor.enumerable,
    get() {
      var _a4;
      return (_a4 = originalPropertyDescriptor.get) == null ? void 0 : _a4.call(this);
    },
    set(sheets) {
      var _a4;
      const result = (_a4 = originalPropertyDescriptor.set) == null ? void 0 : _a4.call(this, sheets);
      if (hostId !== null && hostId !== -1) {
        try {
          stylesheetManager.adoptStyleSheets(sheets, hostId);
        } catch (e22) {
        }
      }
      return result;
    }
  });
  return callbackWrapper(() => {
    Object.defineProperty(host, "adoptedStyleSheets", {
      configurable: originalPropertyDescriptor.configurable,
      enumerable: originalPropertyDescriptor.enumerable,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      get: originalPropertyDescriptor.get,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      set: originalPropertyDescriptor.set
    });
  });
}
function initStyleDeclarationObserver({
  styleDeclarationCb,
  mirror: mirror2,
  ignoreCSSAttributes,
  stylesheetManager
}, { win }) {
  const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
  win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        var _a3;
        const [property, value, priority] = argumentsList;
        if (ignoreCSSAttributes.has(property)) {
          return setProperty.apply(thisArg, [property, value, priority]);
        }
        const { id, styleId } = getIdAndStyleId(
          (_a3 = thisArg.parentRule) == null ? void 0 : _a3.parentStyleSheet,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleDeclarationCb({
            id,
            styleId,
            set: {
              property,
              value,
              priority
            },
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            index: getNestedCSSRulePositions(thisArg.parentRule)
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
  win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        var _a3;
        const [property] = argumentsList;
        if (ignoreCSSAttributes.has(property)) {
          return removeProperty.apply(thisArg, [property]);
        }
        const { id, styleId } = getIdAndStyleId(
          (_a3 = thisArg.parentRule) == null ? void 0 : _a3.parentStyleSheet,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleDeclarationCb({
            id,
            styleId,
            remove: {
              property
            },
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            index: getNestedCSSRulePositions(thisArg.parentRule)
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  return callbackWrapper(() => {
    win.CSSStyleDeclaration.prototype.setProperty = setProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
  });
}
function initMediaInteractionObserver({
  mediaInteractionCb,
  blockClass,
  blockSelector,
  unblockSelector,
  mirror: mirror2,
  sampling,
  doc
}) {
  const handler = callbackWrapper(
    (type) => throttle$1(
      callbackWrapper((event) => {
        const target = getEventTarget2(event);
        if (!target || isBlocked(
          target,
          blockClass,
          blockSelector,
          unblockSelector,
          true
        )) {
          return;
        }
        const { currentTime, volume, muted, playbackRate } = target;
        mediaInteractionCb({
          type,
          id: mirror2.getId(target),
          currentTime,
          volume,
          muted,
          playbackRate
        });
      }),
      sampling.media || 500
    )
  );
  const handlers4 = [
    on("play", handler(MediaInteractions.Play), doc),
    on("pause", handler(MediaInteractions.Pause), doc),
    on("seeked", handler(MediaInteractions.Seeked), doc),
    on("volumechange", handler(MediaInteractions.VolumeChange), doc),
    on("ratechange", handler(MediaInteractions.RateChange), doc)
  ];
  return callbackWrapper(() => {
    handlers4.forEach((h3) => h3());
  });
}
function initFontObserver({ fontCb, doc }) {
  const win = doc.defaultView;
  if (!win) {
    return () => {
    };
  }
  const handlers4 = [];
  const fontMap = /* @__PURE__ */ new WeakMap();
  const originalFontFace = win.FontFace;
  win.FontFace = function FontFace2(family, source, descriptors) {
    const fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family,
      buffer: typeof source !== "string",
      descriptors,
      fontSource: typeof source === "string" ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };
  const restoreHandler = patch(
    doc.fonts,
    "add",
    function(original) {
      return function(fontFace) {
        setTimeout$2(
          callbackWrapper(() => {
            const p3 = fontMap.get(fontFace);
            if (p3) {
              fontCb(p3);
              fontMap.delete(fontFace);
            }
          }),
          0
        );
        return original.apply(this, [fontFace]);
      };
    }
  );
  handlers4.push(() => {
    win.FontFace = originalFontFace;
  });
  handlers4.push(restoreHandler);
  return callbackWrapper(() => {
    handlers4.forEach((h3) => h3());
  });
}
function initSelectionObserver(param) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    selectionCb
  } = param;
  let collapsed = true;
  const updateSelection = callbackWrapper(() => {
    const selection = doc.getSelection();
    if (!selection || collapsed && (selection == null ? void 0 : selection.isCollapsed)) return;
    collapsed = selection.isCollapsed || false;
    const ranges = [];
    const count = selection.rangeCount || 0;
    for (let i22 = 0; i22 < count; i22++) {
      const range = selection.getRangeAt(i22);
      const { startContainer, startOffset, endContainer, endOffset } = range;
      const blocked = isBlocked(
        startContainer,
        blockClass,
        blockSelector,
        unblockSelector,
        true
      ) || isBlocked(
        endContainer,
        blockClass,
        blockSelector,
        unblockSelector,
        true
      );
      if (blocked) continue;
      ranges.push({
        start: mirror2.getId(startContainer),
        startOffset,
        end: mirror2.getId(endContainer),
        endOffset
      });
    }
    selectionCb({ ranges });
  });
  updateSelection();
  return on("selectionchange", updateSelection);
}
function initCustomElementObserver({
  doc,
  customElementCb
}) {
  const win = doc.defaultView;
  if (!win || !win.customElements) return () => {
  };
  const restoreHandler = patch(
    win.customElements,
    "define",
    function(original) {
      return function(name, constructor, options) {
        try {
          customElementCb({
            define: {
              name
            }
          });
        } catch (e22) {
        }
        return original.apply(this, [name, constructor, options]);
      };
    }
  );
  return restoreHandler;
}
function initObservers(o22, _hooks = {}) {
  const currentWindow = o22.doc.defaultView;
  if (!currentWindow) {
    return () => {
    };
  }
  let mutationObserver;
  if (o22.recordDOM) {
    mutationObserver = initMutationObserver(o22, o22.doc);
  }
  const mousemoveHandler = initMoveObserver(o22);
  const mouseInteractionHandler = initMouseInteractionObserver(o22);
  const scrollHandler = initScrollObserver(o22);
  const viewportResizeHandler = initViewportResizeObserver(o22, {
    win: currentWindow
  });
  const inputHandler = initInputObserver(o22);
  const mediaInteractionHandler = initMediaInteractionObserver(o22);
  let styleSheetObserver = () => {
  };
  let adoptedStyleSheetObserver = () => {
  };
  let styleDeclarationObserver = () => {
  };
  let fontObserver = () => {
  };
  if (o22.recordDOM) {
    styleSheetObserver = initStyleSheetObserver(o22, { win: currentWindow });
    adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o22, o22.doc);
    styleDeclarationObserver = initStyleDeclarationObserver(o22, {
      win: currentWindow
    });
    if (o22.collectFonts) {
      fontObserver = initFontObserver(o22);
    }
  }
  const selectionObserver = initSelectionObserver(o22);
  const customElementObserver = initCustomElementObserver(o22);
  const pluginHandlers = [];
  for (const plugin of o22.plugins) {
    pluginHandlers.push(
      plugin.observer(plugin.callback, currentWindow, plugin.options)
    );
  }
  return callbackWrapper(() => {
    mutationBuffers.forEach((b3) => b3.reset());
    mutationObserver == null ? void 0 : mutationObserver.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    adoptedStyleSheetObserver();
    styleDeclarationObserver();
    fontObserver();
    selectionObserver();
    customElementObserver();
    pluginHandlers.forEach((h3) => h3());
  });
}
function hasNestedCSSRule(prop) {
  return typeof window[prop] !== "undefined";
}
function canMonkeyPatchNestedCSSRule(prop) {
  return Boolean(
    typeof window[prop] !== "undefined" && // Note: Generally, this check _shouldn't_ be necessary
    // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
    window[prop].prototype && "insertRule" in window[prop].prototype && "deleteRule" in window[prop].prototype
  );
}
var CrossOriginIframeMirror = class {
  constructor(generateIdFn) {
    this.generateIdFn = generateIdFn;
    this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
    this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
  }
  getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
    const idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
    const remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
    let id = idToRemoteIdMap.get(remoteId);
    if (!id) {
      id = this.generateIdFn();
      idToRemoteIdMap.set(remoteId, id);
      remoteIdToIdMap.set(id, remoteId);
    }
    return id;
  }
  getIds(iframe, remoteId) {
    const idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
    const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
    return remoteId.map(
      (id) => this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap)
    );
  }
  getRemoteId(iframe, id, map) {
    const remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
    if (typeof id !== "number") return id;
    const remoteId = remoteIdToIdMap.get(id);
    if (!remoteId) return -1;
    return remoteId;
  }
  getRemoteIds(iframe, ids) {
    const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
    return ids.map((id) => this.getRemoteId(iframe, id, remoteIdToIdMap));
  }
  reset(iframe) {
    if (!iframe) {
      this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
      this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
      return;
    }
    this.iframeIdToRemoteIdMap.delete(iframe);
    this.iframeRemoteIdToIdMap.delete(iframe);
  }
  getIdToRemoteIdMap(iframe) {
    let idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
    if (!idToRemoteIdMap) {
      idToRemoteIdMap = /* @__PURE__ */ new Map();
      this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
    }
    return idToRemoteIdMap;
  }
  getRemoteIdToIdMap(iframe) {
    let remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
    if (!remoteIdToIdMap) {
      remoteIdToIdMap = /* @__PURE__ */ new Map();
      this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
    }
    return remoteIdToIdMap;
  }
};
var IframeManagerNoop = class {
  constructor() {
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.crossOriginIframeRootIdMap = /* @__PURE__ */ new WeakMap();
  }
  addIframe() {
  }
  addLoadListener() {
  }
  attachIframe() {
  }
};
var IframeManager = class {
  constructor(options) {
    this.iframes = /* @__PURE__ */ new WeakMap();
    this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap();
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.crossOriginIframeRootIdMap = /* @__PURE__ */ new WeakMap();
    this.mutationCb = options.mutationCb;
    this.wrappedEmit = options.wrappedEmit;
    this.stylesheetManager = options.stylesheetManager;
    this.recordCrossOriginIframes = options.recordCrossOriginIframes;
    this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(
      this.stylesheetManager.styleMirror.generateId.bind(
        this.stylesheetManager.styleMirror
      )
    );
    this.mirror = options.mirror;
    if (this.recordCrossOriginIframes) {
      window.addEventListener("message", this.handleMessage.bind(this));
    }
  }
  addIframe(iframeEl) {
    this.iframes.set(iframeEl, true);
    const contentWindow = getIFrameContentWindow(iframeEl);
    if (contentWindow) this.crossOriginIframeMap.set(contentWindow, iframeEl);
  }
  addLoadListener(cb) {
    this.loadListener = cb;
  }
  attachIframe(iframeEl, childSn) {
    var _a3, _b;
    this.mutationCb({
      adds: [
        {
          parentId: this.mirror.getId(iframeEl),
          nextId: null,
          node: childSn
        }
      ],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: true
    });
    if (this.recordCrossOriginIframes) {
      (_a3 = getIFrameContentWindow(iframeEl)) == null ? void 0 : _a3.addEventListener(
        "message",
        this.handleMessage.bind(this)
      );
    }
    (_b = this.loadListener) == null ? void 0 : _b.call(this, iframeEl);
    const iframeDoc = getIFrameContentDocument(iframeEl);
    if (iframeDoc && iframeDoc.adoptedStyleSheets && iframeDoc.adoptedStyleSheets.length > 0)
      this.stylesheetManager.adoptStyleSheets(
        iframeDoc.adoptedStyleSheets,
        this.mirror.getId(iframeDoc)
      );
  }
  handleMessage(message) {
    const crossOriginMessageEvent = message;
    if (crossOriginMessageEvent.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
    crossOriginMessageEvent.origin !== crossOriginMessageEvent.data.origin)
      return;
    const iframeSourceWindow = message.source;
    if (!iframeSourceWindow) return;
    const iframeEl = this.crossOriginIframeMap.get(message.source);
    if (!iframeEl) return;
    const transformedEvent = this.transformCrossOriginEvent(
      iframeEl,
      crossOriginMessageEvent.data.event
    );
    if (transformedEvent)
      this.wrappedEmit(
        transformedEvent,
        crossOriginMessageEvent.data.isCheckout
      );
  }
  transformCrossOriginEvent(iframeEl, e22) {
    var _a3;
    switch (e22.type) {
      case EventType.FullSnapshot: {
        this.crossOriginIframeMirror.reset(iframeEl);
        this.crossOriginIframeStyleMirror.reset(iframeEl);
        this.replaceIdOnNode(e22.data.node, iframeEl);
        const rootId = e22.data.node.id;
        this.crossOriginIframeRootIdMap.set(iframeEl, rootId);
        this.patchRootIdOnNode(e22.data.node, rootId);
        return {
          timestamp: e22.timestamp,
          type: EventType.IncrementalSnapshot,
          data: {
            source: IncrementalSource.Mutation,
            adds: [
              {
                parentId: this.mirror.getId(iframeEl),
                nextId: null,
                node: e22.data.node
              }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true
          }
        };
      }
      case EventType.Meta:
      case EventType.Load:
      case EventType.DomContentLoaded: {
        return false;
      }
      case EventType.Plugin: {
        return e22;
      }
      case EventType.Custom: {
        this.replaceIds(
          e22.data.payload,
          iframeEl,
          ["id", "parentId", "previousId", "nextId"]
        );
        return e22;
      }
      case EventType.IncrementalSnapshot: {
        switch (e22.data.source) {
          case IncrementalSource.Mutation: {
            e22.data.adds.forEach((n22) => {
              this.replaceIds(n22, iframeEl, [
                "parentId",
                "nextId",
                "previousId"
              ]);
              this.replaceIdOnNode(n22.node, iframeEl);
              const rootId = this.crossOriginIframeRootIdMap.get(iframeEl);
              rootId && this.patchRootIdOnNode(n22.node, rootId);
            });
            e22.data.removes.forEach((n22) => {
              this.replaceIds(n22, iframeEl, ["parentId", "id"]);
            });
            e22.data.attributes.forEach((n22) => {
              this.replaceIds(n22, iframeEl, ["id"]);
            });
            e22.data.texts.forEach((n22) => {
              this.replaceIds(n22, iframeEl, ["id"]);
            });
            return e22;
          }
          case IncrementalSource.Drag:
          case IncrementalSource.TouchMove:
          case IncrementalSource.MouseMove: {
            e22.data.positions.forEach((p3) => {
              this.replaceIds(p3, iframeEl, ["id"]);
            });
            return e22;
          }
          case IncrementalSource.ViewportResize: {
            return false;
          }
          case IncrementalSource.MediaInteraction:
          case IncrementalSource.MouseInteraction:
          case IncrementalSource.Scroll:
          case IncrementalSource.CanvasMutation:
          case IncrementalSource.Input: {
            this.replaceIds(e22.data, iframeEl, ["id"]);
            return e22;
          }
          case IncrementalSource.StyleSheetRule:
          case IncrementalSource.StyleDeclaration: {
            this.replaceIds(e22.data, iframeEl, ["id"]);
            this.replaceStyleIds(e22.data, iframeEl, ["styleId"]);
            return e22;
          }
          case IncrementalSource.Font: {
            return e22;
          }
          case IncrementalSource.Selection: {
            e22.data.ranges.forEach((range) => {
              this.replaceIds(range, iframeEl, ["start", "end"]);
            });
            return e22;
          }
          case IncrementalSource.AdoptedStyleSheet: {
            this.replaceIds(e22.data, iframeEl, ["id"]);
            this.replaceStyleIds(e22.data, iframeEl, ["styleIds"]);
            (_a3 = e22.data.styles) == null ? void 0 : _a3.forEach((style) => {
              this.replaceStyleIds(style, iframeEl, ["styleId"]);
            });
            return e22;
          }
        }
      }
    }
    return false;
  }
  replace(iframeMirror, obj, iframeEl, keys) {
    for (const key of keys) {
      if (!Array.isArray(obj[key]) && typeof obj[key] !== "number") continue;
      if (Array.isArray(obj[key])) {
        obj[key] = iframeMirror.getIds(
          iframeEl,
          obj[key]
        );
      } else {
        obj[key] = iframeMirror.getId(iframeEl, obj[key]);
      }
    }
    return obj;
  }
  replaceIds(obj, iframeEl, keys) {
    return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
  }
  replaceStyleIds(obj, iframeEl, keys) {
    return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
  }
  replaceIdOnNode(node, iframeEl) {
    this.replaceIds(node, iframeEl, ["id", "rootId"]);
    if ("childNodes" in node) {
      node.childNodes.forEach((child) => {
        this.replaceIdOnNode(child, iframeEl);
      });
    }
  }
  patchRootIdOnNode(node, rootId) {
    if (node.type !== NodeType$1.Document && !node.rootId) node.rootId = rootId;
    if ("childNodes" in node) {
      node.childNodes.forEach((child) => {
        this.patchRootIdOnNode(child, rootId);
      });
    }
  }
};
var ShadowDomManagerNoop = class {
  init() {
  }
  addShadowRoot() {
  }
  observeAttachShadow() {
  }
  reset() {
  }
};
var ShadowDomManager = class {
  constructor(options) {
    this.shadowDoms = /* @__PURE__ */ new WeakSet();
    this.restoreHandlers = [];
    this.mutationCb = options.mutationCb;
    this.scrollCb = options.scrollCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
    this.init();
  }
  init() {
    this.reset();
    this.patchAttachShadow(Element, document);
  }
  addShadowRoot(shadowRoot, doc) {
    if (!isNativeShadowDom(shadowRoot)) return;
    if (this.shadowDoms.has(shadowRoot)) return;
    this.shadowDoms.add(shadowRoot);
    this.bypassOptions.canvasManager.addShadowRoot(shadowRoot);
    const observer = initMutationObserver(
      __spreadProps(__spreadValues({}, this.bypassOptions), {
        doc,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      }),
      shadowRoot
    );
    this.restoreHandlers.push(() => observer.disconnect());
    this.restoreHandlers.push(
      initScrollObserver(__spreadProps(__spreadValues({}, this.bypassOptions), {
        scrollCb: this.scrollCb,
        // https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
        // scroll is not allowed to pass the boundary, so we need to listen the shadow document
        doc: shadowRoot,
        mirror: this.mirror
      }))
    );
    setTimeout$2(() => {
      if (shadowRoot.adoptedStyleSheets && shadowRoot.adoptedStyleSheets.length > 0)
        this.bypassOptions.stylesheetManager.adoptStyleSheets(
          shadowRoot.adoptedStyleSheets,
          this.mirror.getId(shadowRoot.host)
        );
      this.restoreHandlers.push(
        initAdoptedStyleSheetObserver(
          {
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          },
          shadowRoot
        )
      );
    }, 0);
  }
  /**
   * Monkey patch 'attachShadow' of an IFrameElement to observe newly added shadow doms.
   */
  observeAttachShadow(iframeElement) {
    const iframeDoc = getIFrameContentDocument(iframeElement);
    const iframeWindow = getIFrameContentWindow(iframeElement);
    if (!iframeDoc || !iframeWindow) return;
    let iframeElementConstructor;
    try {
      iframeElementConstructor = iframeWindow.Element;
    } catch (e22) {
      return;
    }
    if (!iframeElementConstructor) return;
    this.patchAttachShadow(iframeElementConstructor, iframeDoc);
  }
  /**
   * Patch 'attachShadow' to observe newly added shadow doms.
   */
  patchAttachShadow(element, doc) {
    const manager = this;
    this.restoreHandlers.push(
      patch(
        element.prototype,
        "attachShadow",
        function(original) {
          return function(option) {
            const shadowRoot = original.call(this, option);
            if (this.shadowRoot && inDom(this))
              manager.addShadowRoot(this.shadowRoot, doc);
            return shadowRoot;
          };
        }
      )
    );
  }
  reset() {
    this.restoreHandlers.forEach((handler) => {
      try {
        handler();
      } catch (e22) {
      }
    });
    this.restoreHandlers = [];
    this.shadowDoms = /* @__PURE__ */ new WeakSet();
    this.bypassOptions.canvasManager.resetShadowRoots();
  }
};
var StylesheetManager = class {
  constructor(options) {
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    this.styleMirror = new StyleSheetMirror();
    this.mutationCb = options.mutationCb;
    this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
  }
  attachLinkElement(linkEl, childSn) {
    if ("_cssText" in childSn.attributes)
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [
          {
            id: childSn.id,
            attributes: childSn.attributes
          }
        ]
      });
    this.trackLinkElement(linkEl);
  }
  trackLinkElement(linkEl) {
    if (this.trackedLinkElements.has(linkEl)) return;
    this.trackedLinkElements.add(linkEl);
    this.trackStylesheetInLinkElement(linkEl);
  }
  adoptStyleSheets(sheets, hostId) {
    if (sheets.length === 0) return;
    const adoptedStyleSheetData = {
      id: hostId,
      styleIds: []
    };
    const styles = [];
    for (const sheet of sheets) {
      let styleId;
      if (!this.styleMirror.has(sheet)) {
        styleId = this.styleMirror.add(sheet);
        styles.push({
          styleId,
          rules: Array.from(sheet.rules || CSSRule, (r2, index) => ({
            rule: stringifyRule(r2),
            index
          }))
        });
      } else styleId = this.styleMirror.getId(sheet);
      adoptedStyleSheetData.styleIds.push(styleId);
    }
    if (styles.length > 0) adoptedStyleSheetData.styles = styles;
    this.adoptedStyleSheetCb(adoptedStyleSheetData);
  }
  reset() {
    this.styleMirror.reset();
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }
  // TODO: take snapshot on stylesheet reload by applying event listener
  trackStylesheetInLinkElement(_linkEl) {
  }
};
var ProcessedNodeManager = class {
  constructor() {
    this.nodeMap = /* @__PURE__ */ new WeakMap();
    this.active = false;
  }
  inOtherBuffer(node, thisBuffer) {
    const buffers = this.nodeMap.get(node);
    return buffers && Array.from(buffers).some((buffer) => buffer !== thisBuffer);
  }
  add(node, buffer) {
    if (!this.active) {
      this.active = true;
      onRequestAnimationFrame(() => {
        this.nodeMap = /* @__PURE__ */ new WeakMap();
        this.active = false;
      });
    }
    this.nodeMap.set(node, (this.nodeMap.get(node) || /* @__PURE__ */ new Set()).add(buffer));
  }
  destroy() {
  }
};
var wrappedEmit;
var _takeFullSnapshot;
var _a;
try {
  if (Array.from([1], (x2) => x2 * 2)[0] !== 2) {
    const cleanFrame = document.createElement("iframe");
    document.body.appendChild(cleanFrame);
    Array.from = ((_a = cleanFrame.contentWindow) == null ? void 0 : _a.Array.from) || Array.from;
    document.body.removeChild(cleanFrame);
  }
} catch (err) {
  console.debug("Unable to override Array.from", err);
}
var mirror = createMirror();
function record(options = {}) {
  const {
    emit,
    checkoutEveryNms,
    checkoutEveryNth,
    blockClass = "rr-block",
    blockSelector = null,
    unblockSelector = null,
    ignoreClass = "rr-ignore",
    ignoreSelector = null,
    maskAllText = false,
    maskTextClass = "rr-mask",
    unmaskTextClass = null,
    maskTextSelector = null,
    unmaskTextSelector = null,
    inlineStylesheet = true,
    maskAllInputs,
    maskInputOptions: _maskInputOptions,
    slimDOMOptions: _slimDOMOptions,
    maskAttributeFn,
    maskInputFn,
    maskTextFn,
    maxCanvasSize = null,
    packFn,
    sampling = {},
    dataURLOptions = {},
    mousemoveWait,
    recordDOM = true,
    recordCanvas = false,
    recordCrossOriginIframes = false,
    recordAfter = options.recordAfter === "DOMContentLoaded" ? options.recordAfter : "load",
    userTriggeredOnInput = false,
    collectFonts = false,
    inlineImages = false,
    plugins,
    keepIframeSrcFn = () => false,
    ignoreCSSAttributes = /* @__PURE__ */ new Set([]),
    errorHandler: errorHandler2,
    onMutation,
    getCanvasManager
  } = options;
  registerErrorHandler(errorHandler2);
  const inEmittingFrame = recordCrossOriginIframes ? window.parent === window : true;
  let passEmitsToParent = false;
  if (!inEmittingFrame) {
    try {
      if (window.parent.document) {
        passEmitsToParent = false;
      }
    } catch (e22) {
      passEmitsToParent = true;
    }
  }
  if (inEmittingFrame && !emit) {
    throw new Error("emit function is required");
  }
  if (!inEmittingFrame && !passEmitsToParent) {
    return () => {
    };
  }
  if (mousemoveWait !== void 0 && sampling.mousemove === void 0) {
    sampling.mousemove = mousemoveWait;
  }
  mirror.reset();
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    radio: true,
    checkbox: true
  } : _maskInputOptions !== void 0 ? _maskInputOptions : {};
  const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === "all" ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    // the following are off for slimDOMOptions === true,
    // as they destroy some (hidden) info:
    headMetaAuthorship: _slimDOMOptions === "all",
    headMetaDescKeywords: _slimDOMOptions === "all"
  } : _slimDOMOptions ? _slimDOMOptions : {};
  polyfill();
  let lastFullSnapshotEvent;
  let incrementalSnapshotCount = 0;
  const eventProcessor = (e22) => {
    for (const plugin of plugins || []) {
      if (plugin.eventProcessor) {
        e22 = plugin.eventProcessor(e22);
      }
    }
    if (packFn && // Disable packing events which will be emitted to parent frames.
    !passEmitsToParent) {
      e22 = packFn(e22);
    }
    return e22;
  };
  wrappedEmit = (r2, isCheckout) => {
    var _a3;
    const e22 = r2;
    e22.timestamp = nowTimestamp();
    if (((_a3 = mutationBuffers[0]) == null ? void 0 : _a3.isFrozen()) && e22.type !== EventType.FullSnapshot && !(e22.type === EventType.IncrementalSnapshot && e22.data.source === IncrementalSource.Mutation)) {
      mutationBuffers.forEach((buf) => buf.unfreeze());
    }
    if (inEmittingFrame) {
      emit == null ? void 0 : emit(eventProcessor(e22), isCheckout);
    } else if (passEmitsToParent) {
      const message = {
        type: "rrweb",
        event: eventProcessor(e22),
        origin: window.location.origin,
        isCheckout
      };
      window.parent.postMessage(message, "*");
    }
    if (e22.type === EventType.FullSnapshot) {
      lastFullSnapshotEvent = e22;
      incrementalSnapshotCount = 0;
    } else if (e22.type === EventType.IncrementalSnapshot) {
      if (e22.data.source === IncrementalSource.Mutation && e22.data.isAttachIframe) {
        return;
      }
      incrementalSnapshotCount++;
      const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      const exceedTime = checkoutEveryNms && lastFullSnapshotEvent && e22.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
      if (exceedCount || exceedTime) {
        takeFullSnapshot2(true);
      }
    }
  };
  const wrappedMutationEmit = (m3) => {
    wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: __spreadValues({
        source: IncrementalSource.Mutation
      }, m3)
    });
  };
  const wrappedScrollEmit = (p3) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: __spreadValues({
      source: IncrementalSource.Scroll
    }, p3)
  });
  const wrappedCanvasMutationEmit = (p3) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: __spreadValues({
      source: IncrementalSource.CanvasMutation
    }, p3)
  });
  const wrappedAdoptedStyleSheetEmit = (a2) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: __spreadValues({
      source: IncrementalSource.AdoptedStyleSheet
    }, a2)
  });
  const stylesheetManager = new StylesheetManager({
    mutationCb: wrappedMutationEmit,
    adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit
  });
  const iframeManager = typeof __RRWEB_EXCLUDE_IFRAME__ === "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new IframeManagerNoop() : new IframeManager({
    mirror,
    mutationCb: wrappedMutationEmit,
    stylesheetManager,
    recordCrossOriginIframes,
    wrappedEmit
  });
  for (const plugin of plugins || []) {
    if (plugin.getMirror)
      plugin.getMirror({
        nodeMirror: mirror,
        crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror
      });
  }
  const processedNodeManager = new ProcessedNodeManager();
  const canvasManager = _getCanvasManager(
    getCanvasManager,
    {
      mirror,
      win: window,
      mutationCb: (p3) => wrappedEmit({
        type: EventType.IncrementalSnapshot,
        data: __spreadValues({
          source: IncrementalSource.CanvasMutation
        }, p3)
      }),
      recordCanvas,
      blockClass,
      blockSelector,
      unblockSelector,
      maxCanvasSize,
      sampling: sampling["canvas"],
      dataURLOptions,
      errorHandler: errorHandler2
    }
  );
  const shadowDomManager = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ === "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new ShadowDomManagerNoop() : new ShadowDomManager({
    mutationCb: wrappedMutationEmit,
    scrollCb: wrappedScrollEmit,
    bypassOptions: {
      onMutation,
      blockClass,
      blockSelector,
      unblockSelector,
      maskAllText,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      inlineStylesheet,
      maskInputOptions,
      dataURLOptions,
      maskAttributeFn,
      maskTextFn,
      maskInputFn,
      recordCanvas,
      inlineImages,
      sampling,
      slimDOMOptions,
      iframeManager,
      stylesheetManager,
      canvasManager,
      keepIframeSrcFn,
      processedNodeManager,
      ignoreCSSAttributes
    },
    mirror
  });
  const takeFullSnapshot2 = (isCheckout = false) => {
    if (!recordDOM) {
      return;
    }
    wrappedEmit(
      {
        type: EventType.Meta,
        data: {
          href: window.location.href,
          width: getWindowWidth(),
          height: getWindowHeight()
        }
      },
      isCheckout
    );
    stylesheetManager.reset();
    shadowDomManager.init();
    mutationBuffers.forEach((buf) => buf.lock());
    const node = snapshot(document, {
      mirror,
      blockClass,
      blockSelector,
      unblockSelector,
      maskAllText,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      inlineStylesheet,
      maskAllInputs: maskInputOptions,
      maskAttributeFn,
      maskInputFn,
      maskTextFn,
      slimDOM: slimDOMOptions,
      dataURLOptions,
      recordCanvas,
      inlineImages,
      onSerialize: (n22) => {
        if (isSerializedIframe(n22, mirror)) {
          iframeManager.addIframe(n22);
        }
        if (isSerializedStylesheet(n22, mirror)) {
          stylesheetManager.trackLinkElement(n22);
        }
        if (hasShadowRoot(n22)) {
          shadowDomManager.addShadowRoot(n22.shadowRoot, document);
        }
      },
      onIframeLoad: (iframe, childSn) => {
        iframeManager.attachIframe(iframe, childSn);
        const contentWindow = getIFrameContentWindow(iframe);
        if (contentWindow) {
          canvasManager.addWindow(contentWindow);
        }
        shadowDomManager.observeAttachShadow(iframe);
      },
      onStylesheetLoad: (linkEl, childSn) => {
        stylesheetManager.attachLinkElement(linkEl, childSn);
      },
      onBlockedImageLoad: (_imageEl, serializedNode, { width, height }) => {
        wrappedMutationEmit({
          adds: [],
          removes: [],
          texts: [],
          attributes: [
            {
              id: serializedNode.id,
              attributes: {
                style: {
                  width: `${width}px`,
                  height: `${height}px`
                }
              }
            }
          ]
        });
      },
      keepIframeSrcFn,
      ignoreCSSAttributes
    });
    if (!node) {
      return console.warn("Failed to snapshot the document");
    }
    wrappedEmit({
      type: EventType.FullSnapshot,
      data: {
        node,
        initialOffset: getWindowScroll(window)
      }
    });
    mutationBuffers.forEach((buf) => buf.unlock());
    if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0)
      stylesheetManager.adoptStyleSheets(
        document.adoptedStyleSheets,
        mirror.getId(document)
      );
  };
  _takeFullSnapshot = takeFullSnapshot2;
  try {
    const handlers4 = [];
    const observe = (doc) => {
      var _a3;
      return callbackWrapper(initObservers)(
        {
          onMutation,
          mutationCb: wrappedMutationEmit,
          mousemoveCb: (positions, source) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source,
              positions
            }
          }),
          mouseInteractionCb: (d3) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.MouseInteraction
            }, d3)
          }),
          scrollCb: wrappedScrollEmit,
          viewportResizeCb: (d3) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.ViewportResize
            }, d3)
          }),
          inputCb: (v2) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.Input
            }, v2)
          }),
          mediaInteractionCb: (p3) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.MediaInteraction
            }, p3)
          }),
          styleSheetRuleCb: (r2) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.StyleSheetRule
            }, r2)
          }),
          styleDeclarationCb: (r2) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.StyleDeclaration
            }, r2)
          }),
          canvasMutationCb: wrappedCanvasMutationEmit,
          fontCb: (p3) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.Font
            }, p3)
          }),
          selectionCb: (p3) => {
            wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: __spreadValues({
                source: IncrementalSource.Selection
              }, p3)
            });
          },
          customElementCb: (c2) => {
            wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: __spreadValues({
                source: IncrementalSource.CustomElement
              }, c2)
            });
          },
          blockClass,
          ignoreClass,
          ignoreSelector,
          maskAllText,
          maskTextClass,
          unmaskTextClass,
          maskTextSelector,
          unmaskTextSelector,
          maskInputOptions,
          inlineStylesheet,
          sampling,
          recordDOM,
          recordCanvas,
          inlineImages,
          userTriggeredOnInput,
          collectFonts,
          doc,
          maskAttributeFn,
          maskInputFn,
          maskTextFn,
          keepIframeSrcFn,
          blockSelector,
          unblockSelector,
          slimDOMOptions,
          dataURLOptions,
          mirror,
          iframeManager,
          stylesheetManager,
          shadowDomManager,
          processedNodeManager,
          canvasManager,
          ignoreCSSAttributes,
          plugins: ((_a3 = plugins == null ? void 0 : plugins.filter((p3) => p3.observer)) == null ? void 0 : _a3.map((p3) => ({
            observer: p3.observer,
            options: p3.options,
            callback: (payload) => wrappedEmit({
              type: EventType.Plugin,
              data: {
                plugin: p3.name,
                payload
              }
            })
          }))) || []
        },
        {}
      );
    };
    iframeManager.addLoadListener((iframeEl) => {
      try {
        handlers4.push(observe(iframeEl.contentDocument));
      } catch (error2) {
        console.warn(error2);
      }
    });
    const init3 = () => {
      takeFullSnapshot2();
      handlers4.push(observe(document));
    };
    if (document.readyState === "interactive" || document.readyState === "complete") {
      init3();
    } else {
      handlers4.push(
        on("DOMContentLoaded", () => {
          wrappedEmit({
            type: EventType.DomContentLoaded,
            data: {}
          });
          if (recordAfter === "DOMContentLoaded") init3();
        })
      );
      handlers4.push(
        on(
          "load",
          () => {
            wrappedEmit({
              type: EventType.Load,
              data: {}
            });
            if (recordAfter === "load") init3();
          },
          window
        )
      );
    }
    return () => {
      handlers4.forEach((h3) => h3());
      processedNodeManager.destroy();
      _takeFullSnapshot = void 0;
      unregisterErrorHandler();
    };
  } catch (error2) {
    console.warn(error2);
  }
}
function takeFullSnapshot(isCheckout) {
  if (!_takeFullSnapshot) {
    throw new Error("please take full snapshot after start recording");
  }
  _takeFullSnapshot(isCheckout);
}
record.mirror = mirror;
record.takeFullSnapshot = takeFullSnapshot;
function _getCanvasManager(getCanvasManagerFn, options) {
  try {
    return getCanvasManagerFn ? getCanvasManagerFn(options) : new CanvasManagerNoop();
  } catch {
    console.warn("Unable to initialize CanvasManager");
    return new CanvasManagerNoop();
  }
}
var n2;
!(function(t22) {
  t22[t22.NotStarted = 0] = "NotStarted", t22[t22.Running = 1] = "Running", t22[t22.Stopped = 2] = "Stopped";
})(n2 || (n2 = {}));
var ReplayEventTypeIncrementalSnapshot = 3;
var ReplayEventTypeCustom = 5;
function timestampToMs(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp : timestamp * 1e3;
}
function timestampToS(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
function addBreadcrumbEvent(replay, breadcrumb) {
  if (breadcrumb.category === "sentry.transaction") {
    return;
  }
  if (["ui.click", "ui.input"].includes(breadcrumb.category)) {
    replay.triggerUserActivity();
  } else {
    replay.checkAndHandleExpiredSession();
  }
  replay.addUpdate(() => {
    replay.throttledAddEvent({
      type: EventType.Custom,
      // TODO: We were converting from ms to seconds for breadcrumbs, spans,
      // but maybe we should just keep them as milliseconds
      timestamp: (breadcrumb.timestamp || 0) * 1e3,
      data: {
        tag: "breadcrumb",
        // normalize to max. 10 depth and 1_000 properties per object
        payload: normalize(breadcrumb, 10, 1e3)
      }
    });
    return breadcrumb.category === "console";
  });
}
var INTERACTIVE_SELECTOR = "button,a";
function getClosestInteractive(element) {
  const closestInteractive = element.closest(INTERACTIVE_SELECTOR);
  return closestInteractive || element;
}
function getClickTargetNode(event) {
  const target = getTargetNode(event);
  if (!target || !(target instanceof Element)) {
    return target;
  }
  return getClosestInteractive(target);
}
function getTargetNode(event) {
  if (isEventWithTarget(event)) {
    return event.target;
  }
  return event;
}
function isEventWithTarget(event) {
  return isObjectLike(event) && "target" in event;
}
var handlers3;
function onWindowOpen(cb) {
  if (!handlers3) {
    handlers3 = [];
    monkeyPatchWindowOpen();
  }
  handlers3.push(cb);
  return () => {
    const pos = handlers3 ? handlers3.indexOf(cb) : -1;
    if (pos > -1) {
      handlers3.splice(pos, 1);
    }
  };
}
function monkeyPatchWindowOpen() {
  fill(WINDOW4, "open", function(originalWindowOpen) {
    return function(...args) {
      if (handlers3) {
        try {
          handlers3.forEach((handler) => handler());
        } catch {
        }
      }
      return originalWindowOpen.apply(WINDOW4, args);
    };
  });
}
var IncrementalMutationSources = /* @__PURE__ */ new Set([
  IncrementalSource.Mutation,
  IncrementalSource.StyleSheetRule,
  IncrementalSource.StyleDeclaration,
  IncrementalSource.AdoptedStyleSheet,
  IncrementalSource.CanvasMutation,
  IncrementalSource.Selection,
  IncrementalSource.MediaInteraction
]);
function handleClick(clickDetector, clickBreadcrumb, node) {
  clickDetector.handleClick(clickBreadcrumb, node);
}
var ClickDetector = class {
  constructor(replay, slowClickConfig, _addBreadcrumbEvent = addBreadcrumbEvent) {
    this._lastMutation = 0;
    this._lastScroll = 0;
    this._clicks = [];
    this._timeout = slowClickConfig.timeout / 1e3;
    this._threshold = slowClickConfig.threshold / 1e3;
    this._scrollTimeout = slowClickConfig.scrollTimeout / 1e3;
    this._replay = replay;
    this._ignoreSelector = slowClickConfig.ignoreSelector;
    this._addBreadcrumbEvent = _addBreadcrumbEvent;
  }
  /** Register click detection handlers on mutation or scroll. */
  addListeners() {
    const cleanupWindowOpen = onWindowOpen(() => {
      this._lastMutation = nowInSeconds();
    });
    this._teardown = () => {
      cleanupWindowOpen();
      this._clicks = [];
      this._lastMutation = 0;
      this._lastScroll = 0;
    };
  }
  /** Clean up listeners. */
  removeListeners() {
    if (this._teardown) {
      this._teardown();
    }
    if (this._checkClickTimeout) {
      clearTimeout(this._checkClickTimeout);
    }
  }
  /** @inheritDoc */
  handleClick(breadcrumb, node) {
    if (ignoreElement(node, this._ignoreSelector) || !isClickBreadcrumb(breadcrumb)) {
      return;
    }
    const newClick = {
      timestamp: timestampToS(breadcrumb.timestamp),
      clickBreadcrumb: breadcrumb,
      // Set this to 0 so we know it originates from the click breadcrumb
      clickCount: 0,
      node
    };
    if (this._clicks.some((click) => click.node === newClick.node && Math.abs(click.timestamp - newClick.timestamp) < 1)) {
      return;
    }
    this._clicks.push(newClick);
    if (this._clicks.length === 1) {
      this._scheduleCheckClicks();
    }
  }
  /** @inheritDoc */
  registerMutation(timestamp = Date.now()) {
    this._lastMutation = timestampToS(timestamp);
  }
  /** @inheritDoc */
  registerScroll(timestamp = Date.now()) {
    this._lastScroll = timestampToS(timestamp);
  }
  /** @inheritDoc */
  registerClick(element) {
    const node = getClosestInteractive(element);
    this._handleMultiClick(node);
  }
  /** Count multiple clicks on elements. */
  _handleMultiClick(node) {
    this._getClicks(node).forEach((click) => {
      click.clickCount++;
    });
  }
  /** Get all pending clicks for a given node. */
  _getClicks(node) {
    return this._clicks.filter((click) => click.node === node);
  }
  /** Check the clicks that happened. */
  _checkClicks() {
    const timedOutClicks = [];
    const now = nowInSeconds();
    this._clicks.forEach((click) => {
      if (!click.mutationAfter && this._lastMutation) {
        click.mutationAfter = click.timestamp <= this._lastMutation ? this._lastMutation - click.timestamp : void 0;
      }
      if (!click.scrollAfter && this._lastScroll) {
        click.scrollAfter = click.timestamp <= this._lastScroll ? this._lastScroll - click.timestamp : void 0;
      }
      if (click.timestamp + this._timeout <= now) {
        timedOutClicks.push(click);
      }
    });
    for (const click of timedOutClicks) {
      const pos = this._clicks.indexOf(click);
      if (pos > -1) {
        this._generateBreadcrumbs(click);
        this._clicks.splice(pos, 1);
      }
    }
    if (this._clicks.length) {
      this._scheduleCheckClicks();
    }
  }
  /** Generate matching breadcrumb(s) for the click. */
  _generateBreadcrumbs(click) {
    const replay = this._replay;
    const hadScroll = click.scrollAfter && click.scrollAfter <= this._scrollTimeout;
    const hadMutation = click.mutationAfter && click.mutationAfter <= this._threshold;
    const isSlowClick = !hadScroll && !hadMutation;
    const { clickCount, clickBreadcrumb } = click;
    if (isSlowClick) {
      const timeAfterClickMs = Math.min(click.mutationAfter || this._timeout, this._timeout) * 1e3;
      const endReason = timeAfterClickMs < this._timeout * 1e3 ? "mutation" : "timeout";
      const breadcrumb = {
        type: "default",
        message: clickBreadcrumb.message,
        timestamp: clickBreadcrumb.timestamp,
        category: "ui.slowClickDetected",
        data: __spreadProps(__spreadValues({}, clickBreadcrumb.data), {
          url: WINDOW4.location.href,
          route: replay.getCurrentRoute(),
          timeAfterClickMs,
          endReason,
          // If clickCount === 0, it means multiClick was not correctly captured here
          // - we still want to send 1 in this case
          clickCount: clickCount || 1
        })
      };
      this._addBreadcrumbEvent(replay, breadcrumb);
      return;
    }
    if (clickCount > 1) {
      const breadcrumb = {
        type: "default",
        message: clickBreadcrumb.message,
        timestamp: clickBreadcrumb.timestamp,
        category: "ui.multiClick",
        data: __spreadProps(__spreadValues({}, clickBreadcrumb.data), {
          url: WINDOW4.location.href,
          route: replay.getCurrentRoute(),
          clickCount,
          metric: true
        })
      };
      this._addBreadcrumbEvent(replay, breadcrumb);
    }
  }
  /** Schedule to check current clicks. */
  _scheduleCheckClicks() {
    if (this._checkClickTimeout) {
      clearTimeout(this._checkClickTimeout);
    }
    this._checkClickTimeout = setTimeout2(() => this._checkClicks(), 1e3);
  }
};
var SLOW_CLICK_TAGS = ["A", "BUTTON", "INPUT"];
function ignoreElement(node, ignoreSelector) {
  if (!SLOW_CLICK_TAGS.includes(node.tagName)) {
    return true;
  }
  if (node.tagName === "INPUT" && !["submit", "button"].includes(node.getAttribute("type") || "")) {
    return true;
  }
  if (node.tagName === "A" && (node.hasAttribute("download") || node.hasAttribute("target") && node.getAttribute("target") !== "_self")) {
    return true;
  }
  if (ignoreSelector && node.matches(ignoreSelector)) {
    return true;
  }
  return false;
}
function isClickBreadcrumb(breadcrumb) {
  return !!(breadcrumb.data && typeof breadcrumb.data.nodeId === "number" && breadcrumb.timestamp);
}
function nowInSeconds() {
  return Date.now() / 1e3;
}
function updateClickDetectorForRecordingEvent(clickDetector, event) {
  try {
    if (!isIncrementalEvent(event)) {
      return;
    }
    const { source } = event.data;
    if (IncrementalMutationSources.has(source)) {
      clickDetector.registerMutation(event.timestamp);
    }
    if (source === IncrementalSource.Scroll) {
      clickDetector.registerScroll(event.timestamp);
    }
    if (isIncrementalMouseInteraction(event)) {
      const { type, id } = event.data;
      const node = record.mirror.getNode(id);
      if (node instanceof HTMLElement && type === MouseInteractions.Click) {
        clickDetector.registerClick(node);
      }
    }
  } catch {
  }
}
function isIncrementalEvent(event) {
  return event.type === ReplayEventTypeIncrementalSnapshot;
}
function isIncrementalMouseInteraction(event) {
  return event.data.source === IncrementalSource.MouseInteraction;
}
function createBreadcrumb(breadcrumb) {
  return __spreadValues({
    timestamp: Date.now() / 1e3,
    type: "default"
  }, breadcrumb);
}
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});
var ATTRIBUTES_TO_RECORD = /* @__PURE__ */ new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
  "data-sentry-component"
]);
var BREADCRUMB_RELEVANT_ATTRIBUTES = /* @__PURE__ */ new Set([...ATTRIBUTES_TO_RECORD, "data-sentry-element"]);
function getAttributesToRecord(attributes) {
  const obj = {};
  for (const key in attributes) {
    if (ATTRIBUTES_TO_RECORD.has(key)) {
      let normalizedKey = key;
      if (key === "data-testid" || key === "data-test-id") {
        normalizedKey = "testId";
      }
      obj[normalizedKey] = attributes[key];
    }
  }
  if (!obj["data-sentry-component"] && attributes["data-sentry-element"]) {
    obj["data-sentry-component"] = attributes["data-sentry-element"];
  }
  return obj;
}
var handleDomListener = (replay) => {
  return (handlerData) => {
    if (!replay.isEnabled()) {
      return;
    }
    const result = handleDom(handlerData);
    if (!result) {
      return;
    }
    const isClick = handlerData.name === "click";
    const event = isClick ? handlerData.event : void 0;
    if (isClick && replay.clickDetector && (event == null ? void 0 : event.target) && !event.altKey && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
      handleClick(replay.clickDetector, result, getClickTargetNode(handlerData.event));
    }
    addBreadcrumbEvent(replay, result);
  };
};
function getBaseDomBreadcrumb(target, message) {
  const nodeId = record.mirror.getId(target);
  const node = nodeId && record.mirror.getNode(nodeId);
  const meta = node && record.mirror.getMeta(node);
  const element = meta && isElement3(meta) ? meta : null;
  return {
    message,
    data: element ? {
      nodeId,
      node: {
        id: nodeId,
        tagName: element.tagName,
        textContent: Array.from(element.childNodes).map((node2) => node2.type === NodeType.Text && node2.textContent).filter(Boolean).map((text) => text.trim()).join(""),
        attributes: getAttributesToRecord(element.attributes)
      }
    } : {}
  };
}
function handleDom(handlerData) {
  const { target, message } = getDomTarget(handlerData);
  return createBreadcrumb(__spreadValues({
    category: `ui.${handlerData.name}`
  }, getBaseDomBreadcrumb(target, message)));
}
function getDomTarget(handlerData) {
  const isClick = handlerData.name === "click";
  let message;
  let target = null;
  try {
    target = isClick ? getClickTargetNode(handlerData.event) : getTargetNode(handlerData.event);
    message = htmlTreeAsString(target, { maxStringLength: 200 }) || "<unknown>";
  } catch {
    message = "<unknown>";
  }
  return { target, message };
}
function isElement3(node) {
  return node.type === NodeType.Element;
}
function handleKeyboardEvent(replay, event) {
  if (!replay.isEnabled()) {
    return;
  }
  replay.updateUserActivity();
  const breadcrumb = getKeyboardBreadcrumb(event);
  if (!breadcrumb) {
    return;
  }
  addBreadcrumbEvent(replay, breadcrumb);
}
function getKeyboardBreadcrumb(event) {
  const { metaKey, shiftKey, ctrlKey, altKey, key, target } = event;
  if (!target || isInputElement(target) || !key) {
    return null;
  }
  const hasModifierKey = metaKey || ctrlKey || altKey;
  const isCharacterKey = key.length === 1;
  if (!hasModifierKey && isCharacterKey) {
    return null;
  }
  const message = htmlTreeAsString(target, { maxStringLength: 200 }) || "<unknown>";
  const baseBreadcrumb = getBaseDomBreadcrumb(target, message);
  return createBreadcrumb({
    category: "ui.keyDown",
    message,
    data: __spreadProps(__spreadValues({}, baseBreadcrumb.data), {
      metaKey,
      shiftKey,
      ctrlKey,
      altKey,
      key
    })
  });
}
function isInputElement(target) {
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
}
var ENTRY_TYPES = {
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  resource: createResourceEntry,
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  paint: createPaintEntry,
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  navigation: createNavigationEntry
};
function webVitalHandler(getter, replay) {
  return ({ metric }) => void replay.replayPerformanceEntries.push(getter(metric));
}
function createPerformanceEntries(entries) {
  return entries.map(createPerformanceEntry).filter(Boolean);
}
function createPerformanceEntry(entry) {
  const entryType = ENTRY_TYPES[entry.entryType];
  if (!entryType) {
    return null;
  }
  return entryType(entry);
}
function getAbsoluteTime(time, entryStartTime = time) {
  return performanceTimeToSeconds(time, entryStartTime);
}
function createPaintEntry(entry) {
  const { duration, entryType, name, startTime } = entry;
  const start = getAbsoluteTime(startTime);
  return {
    type: entryType,
    name,
    start,
    end: start + duration,
    data: void 0
  };
}
function createNavigationEntry(entry) {
  const {
    entryType,
    name,
    decodedBodySize,
    duration,
    domComplete,
    encodedBodySize,
    domContentLoadedEventStart,
    domContentLoadedEventEnd,
    domInteractive,
    loadEventStart,
    loadEventEnd,
    redirectCount,
    startTime,
    transferSize,
    type
  } = entry;
  if (duration === 0) {
    return null;
  }
  return {
    type: `${entryType}.${type}`,
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(domComplete, startTime),
    name,
    data: {
      size: transferSize,
      decodedBodySize,
      encodedBodySize,
      duration,
      domInteractive,
      domContentLoadedEventStart,
      domContentLoadedEventEnd,
      loadEventStart,
      loadEventEnd,
      domComplete,
      redirectCount
    }
  };
}
function createResourceEntry(entry) {
  const {
    entryType,
    initiatorType,
    name,
    responseEnd,
    startTime,
    decodedBodySize,
    encodedBodySize,
    responseStatus,
    transferSize
  } = entry;
  if (["fetch", "xmlhttprequest"].includes(initiatorType)) {
    return null;
  }
  return {
    type: `${entryType}.${initiatorType}`,
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(responseEnd, startTime),
    name,
    data: {
      size: transferSize,
      statusCode: responseStatus,
      decodedBodySize,
      encodedBodySize
    }
  };
}
function getLargestContentfulPaint(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1];
  const node = (lastEntry == null ? void 0 : lastEntry.element) ? [lastEntry.element] : void 0;
  return getWebVital(metric, "largest-contentful-paint", node);
}
function isLayoutShift(entry) {
  return entry.sources !== void 0;
}
function getCumulativeLayoutShift(metric) {
  const layoutShifts = [];
  const nodes = [];
  for (const entry of metric.entries) {
    if (isLayoutShift(entry)) {
      const nodeIds = [];
      for (const source of entry.sources) {
        if (source.node) {
          nodes.push(source.node);
          const nodeId = record.mirror.getId(source.node);
          if (nodeId) {
            nodeIds.push(nodeId);
          }
        }
      }
      layoutShifts.push({ value: entry.value, nodeIds: nodeIds.length ? nodeIds : void 0 });
    }
  }
  return getWebVital(metric, "cumulative-layout-shift", nodes, layoutShifts);
}
function getInteractionToNextPaint(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1];
  const node = (lastEntry == null ? void 0 : lastEntry.target) ? [lastEntry.target] : void 0;
  return getWebVital(metric, "interaction-to-next-paint", node);
}
function getWebVital(metric, name, nodes, attributions) {
  const value = metric.value;
  const rating = metric.rating;
  const lastEntry = metric.entries[metric.entries.length - 1];
  const end = getAbsoluteTime((lastEntry == null ? void 0 : lastEntry.startTime) ?? (metric.navigationStartTime ?? 0) + value);
  return {
    type: "web-vital",
    name,
    start: end,
    end,
    data: {
      value,
      size: value,
      rating,
      nodeIds: nodes ? nodes.map((node) => record.mirror.getId(node)) : void 0,
      attributions
    }
  };
}
function setupPerformanceObserver(replay) {
  function addPerformanceEntry(entry) {
    if (!replay.performanceEntries.includes(entry)) {
      replay.performanceEntries.push(entry);
    }
  }
  function onEntries({ entries }) {
    entries.forEach(addPerformanceEntry);
  }
  const clearCallbacks = [];
  ["navigation", "paint", "resource"].forEach((type) => {
    clearCallbacks.push(addPerformanceInstrumentationHandler(type, onEntries));
  });
  clearCallbacks.push(
    addLcpInstrumentationHandler(webVitalHandler(getLargestContentfulPaint, replay)),
    addClsInstrumentationHandler(webVitalHandler(getCumulativeLayoutShift, replay)),
    addInpInstrumentationHandler(webVitalHandler(getInteractionToNextPaint, replay))
  );
  return () => {
    clearCallbacks.forEach((clearCallback) => clearCallback());
  };
}
var DEBUG_BUILD4 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
var t2 = `var t=Uint8Array,r=Uint16Array,n=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new r(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new n(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new r(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,n,e){for(var i=t.length,s=0,a=new r(n);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new r(n);for(s=1;s<n;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new r(1<<n);var f=15-n;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=n-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new r(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(r,n,e){return(null==e||e>r.length)&&(e=r.length),new t(r.subarray(n,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,r,n){var e=new Error(r||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!n)throw e;return e},z=function(t,r,n){n<<=7&r;var e=r/8|0;t[e]|=n,t[e+1]|=n>>8},_=function(t,r,n){n<<=7&r;var e=r/8|0;t[e]|=n,t[e+1]|=n>>8,t[e+2]|=n>>16},x=function(n,e){for(var i=[],s=0;s<n.length;++s)n[s]&&i.push({s:s,f:n[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,r){return t.f-r.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new r(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,r){return p[r.s]-p[t.s]||t.f-r.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,r,n){return-1==t.s?Math.max(A(t.l,r,n+1),A(t.r,r,n+1)):r[t.s]=n},D=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new r(++n),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=n;++h)if(t[h]==s&&h!=n)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:n}},T=function(t,r){for(var n=0,e=0;e<r.length;++e)n+=t[e]*r[e];return n},k=function(t,r,n){var e=n.length,i=m(r+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=n[s];return 8*(i+4+e)},U=function(t,n,a,o,h,f,l,u,c,v,m){z(n,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new r(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(n,m,t.subarray(c,c+v));if(z(n,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(n,m,S-257),z(n,m+5,j-1),z(n,m+10,K-4),m+=14;for(B=0;B<K;++B)z(n,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var rt=31&tt[B];z(n,m,Y[rt]),m+=H[rt],rt>15&&(z(n,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var nt=o[B];if(nt>255){_(n,m,N[(rt=nt>>18&31)+257]),m+=P[rt+257],rt>7&&(z(n,m,nt>>23&31),m+=e[rt]);var et=31&nt;_(n,m,Q[et]),m+=R[et],et>3&&(_(n,m,nt>>5&8191),m+=i[et])}else _(n,m,N[nt]),m+=P[nt]}return _(n,m,N[256]),m+P[256]},C=new n([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),r=0;r<256;++r){for(var n=r,e=9;--e;)n=(1&n&&-306674912)^n>>>1;t[r]=n}return t}(),S=function(){var t=1,r=0;return{p:function(n){for(var e=t,i=r,s=0|n.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=n[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,r=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(r%=65521))<<8|r>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new r(32768),x=c.h||new r(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new n(25e3),I=new r(288),S=new r(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),rt=0;for(P=0;P<tt;++P){var nt=j-W+P&32767,et=nt-_[nt]&32767;et>rt&&(rt=et,K=nt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,r,n){for(;n;++r)t[r]=n,n>>>=8},j=function(){function r(r,n){if("function"==typeof r&&(n=r,r={}),this.ondata=n,this.o=r||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return r.prototype.p=function(t,r){this.ondata(L(t,this.o,0,0,this.s),r)},r.prototype.push=function(r,n){this.ondata||E(5),this.s.l&&E(4);var e=r.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(r.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(r.subarray(s),32768),this.s.z=r.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(r,this.s.z),this.s.z+=r.length;this.s.l=1&n,(this.s.z>this.s.w+8191||n)&&(this.p(this.b,n||!1),this.s.w=this.s.i,this.s.i-=2),n&&(this.s=this.o={},this.b=F)},r.prototype.flush=function(r){if(this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,r){var n=new t(6);n[0]=this.s.r>>3;var e=k(n,this.s.r,F);this.s.r=0,this.ondata(n.subarray(0,e>>3),!1)}},r}();function q(t,r){r||(r={});var n=function(){var t=-1;return{p:function(r){for(var n=t,e=0;e<r.length;++e)n=I[255&n^r[e]]^n>>>8;t=n},d:function(){return~t}}}(),e=t.length;n.p(t);var i,s=L(t,r,10+((i=r).filename?i.filename.length+1:0),8),a=s.length;return function(t,r){var n=r.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=r.level<2?4:9==r.level?2:0,t[9]=3,0!=r.mtime&&O(t,4,Math.floor(new Date(r.mtime||Date.now())/1e3)),n){t[3]=8;for(var e=0;e<=n.length;++e)t[e+10]=n.charCodeAt(e)}}(s,r),O(s,a-8,n.d()),O(s,a-4,e),s}var B=function(){function t(t,r){this.c=S(),this.v=1,j.call(this,t,r)}return t.prototype.push=function(t,r){this.c.p(t),j.prototype.push.call(this,t,r)},t.prototype.p=function(t,r){var n=L(t,this.o,this.v&&(this.o.dictionary?6:2),r&&4,this.s);this.v&&(function(t,r){var n=r.level,e=0==n?0:n<6?1:9==n?3:2;if(t[0]=120,t[1]=e<<6|(r.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,r.dictionary){var i=S();i.p(r.dictionary),O(t,2,i.d())}}(n,this.o),this.v=0),r&&O(n,n.length-4,this.c.d()),this.ondata(n,r)},t.prototype.flush=function(t){j.prototype.flush.call(this,t)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,r){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=r||!1)},t}();function K(r,n){if(G)return G.encode(r);for(var e=r.length,i=new t(r.length+(r.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=r.charCodeAt(o);f<128||n?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&r.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const r=this._hasEvents?",":"";this.stream.push(r+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let r=0;for(const n of t)r+=n.length;const n=new Uint8Array(r);for(let r=0,e=0,i=t.length;r<i;r++){const i=t[r];n.set(i,e),e+=i.length}return n}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,r)=>{this._deflatedData.push(t)},this.stream=new J((t,r)=>{this.deflate.push(t,r)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const r=t.data.method,n=t.data.id,e=t.data.arg;if(r in P&&"function"==typeof P[r])try{const t=P[r](e);postMessage({id:n,method:r,success:!0,response:t})}catch(t){postMessage({id:n,method:r,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
function e3() {
  const e22 = new Blob([t2], { type: "text/javascript" });
  return URL.createObjectURL(e22);
}
var CONSOLE_LEVELS2 = ["log", "warn", "error"];
var PREFIX2 = "[Replay] ";
function _addBreadcrumb(message, level = "info") {
  addBreadcrumb(
    {
      category: "console",
      data: {
        logger: "replay"
      },
      level,
      message: `${PREFIX2}${message}`
    },
    { level }
  );
}
function makeReplayDebugLogger() {
  let _capture = false;
  let _trace = false;
  const _debug = {
    exception: () => void 0,
    infoTick: () => void 0,
    setConfig: (opts) => {
      _capture = !!opts.captureExceptions;
      _trace = !!opts.traceInternals;
    }
  };
  if (DEBUG_BUILD4) {
    CONSOLE_LEVELS2.forEach((name) => {
      _debug[name] = (...args) => {
        debug[name](PREFIX2, ...args);
        if (_trace) {
          _addBreadcrumb(args.join(""), severityLevelFromString(name));
        }
      };
    });
    _debug.exception = (error2, ...message) => {
      if (message.length && _debug.error) {
        _debug.error(...message);
      }
      debug.error(PREFIX2, error2);
      if (_capture) {
        captureException(error2, {
          mechanism: {
            handled: true,
            type: "auto.function.replay.debug"
          }
        });
      } else if (_trace) {
        _addBreadcrumb(error2, "error");
      }
    };
    _debug.infoTick = (...args) => {
      debug.log(PREFIX2, ...args);
      if (_trace) {
        setTimeout(() => _addBreadcrumb(args[0]), 0);
      }
    };
  } else {
    CONSOLE_LEVELS2.forEach((name) => {
      _debug[name] = () => void 0;
    });
  }
  return _debug;
}
var debug2 = makeReplayDebugLogger();
var EventBufferSizeExceededError = class extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${REPLAY_MAX_EVENT_BUFFER_SIZE}.`);
  }
};
var WorkerDestroyedError = class extends Error {
  constructor() {
    super("Worker destroyed");
  }
};
var EventBufferArray = class {
  constructor() {
    this.events = [];
    this._totalSize = 0;
    this.hasCheckout = false;
    this.waitForCheckout = false;
  }
  /** @inheritdoc */
  get hasEvents() {
    return this.events.length > 0;
  }
  /** @inheritdoc */
  get type() {
    return "sync";
  }
  /** @inheritdoc */
  destroy() {
    this.events = [];
  }
  /** @inheritdoc */
  async addEvent(event) {
    const eventSize = JSON.stringify(event).length;
    this._totalSize += eventSize;
    if (this._totalSize > REPLAY_MAX_EVENT_BUFFER_SIZE) {
      throw new EventBufferSizeExceededError();
    }
    this.events.push(event);
  }
  /** @inheritdoc */
  finish() {
    return new Promise((resolve) => {
      const eventsRet = this.events;
      this.clear();
      resolve(JSON.stringify(eventsRet));
    });
  }
  /** @inheritdoc */
  clear() {
    this.events = [];
    this._totalSize = 0;
    this.hasCheckout = false;
  }
  /** @inheritdoc */
  getEarliestTimestamp() {
    let ts = null;
    for (const { timestamp } of this.events) {
      if (ts === null || timestamp < ts) ts = timestamp;
    }
    return ts === null ? ts : timestampToMs(ts);
  }
};
var WorkerHandler = class {
  constructor(worker) {
    this._onMessage = ({ data }) => {
      const response = data;
      if (typeof response.id !== "number") {
        return;
      }
      const pending = this._pending.get(response.id);
      if (!pending || pending.method !== response.method) {
        return;
      }
      this._pending.delete(response.id);
      if (!response.success) {
        DEBUG_BUILD4 && debug2.error("Error in compression worker: ", response.response);
        pending.reject(new Error("Error in compression worker"));
        return;
      }
      pending.resolve(response.response);
    };
    this._worker = worker;
    this._id = 0;
    this._pending = /* @__PURE__ */ new Map();
    this._worker.addEventListener("message", this._onMessage);
  }
  /**
   * Ensure the worker is ready (or not).
   * This will either resolve when the worker is ready, or reject if an error occurred.
   */
  ensureReady() {
    if (this._ensureReadyPromise) {
      return this._ensureReadyPromise;
    }
    this._ensureReadyPromise = new Promise((resolve, reject) => {
      this._worker.addEventListener(
        "message",
        ({ data }) => {
          if (data.success) {
            resolve();
          } else {
            DEBUG_BUILD4 && debug2.warn("Received worker message with unsuccessful status", data);
            reject(new Error("Received worker message with unsuccessful status"));
          }
        },
        { once: true }
      );
      this._worker.addEventListener(
        "error",
        (error2) => {
          DEBUG_BUILD4 && debug2.warn("Failed to load Replay compression worker", error2);
          reject(
            new Error(
              `Failed to load Replay compression worker: ${error2 instanceof ErrorEvent && error2.message ? error2.message : "Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`
            )
          );
        },
        { once: true }
      );
    });
    return this._ensureReadyPromise;
  }
  /**
   * Destroy the worker.
   */
  destroy() {
    DEBUG_BUILD4 && debug2.log("Destroying compression worker");
    this._worker.removeEventListener("message", this._onMessage);
    this._pending.forEach((pending) => pending.reject(new WorkerDestroyedError()));
    this._pending.clear();
    this._worker.terminate();
  }
  /**
   * Post message to worker and wait for response before resolving promise.
   */
  postMessage(method, arg) {
    const id = this._getAndIncrementId();
    return new Promise((resolve, reject) => {
      this._pending.set(id, {
        method,
        resolve,
        reject
      });
      try {
        this._worker.postMessage({ id, method, arg });
      } catch (error2) {
        this._pending.delete(id);
        reject(error2);
      }
    });
  }
  /** Get the current ID and increment it for the next call. */
  _getAndIncrementId() {
    return this._id++;
  }
};
var EventBufferCompressionWorker = class {
  constructor(worker) {
    this._worker = new WorkerHandler(worker);
    this._earliestTimestamp = null;
    this._totalSize = 0;
    this.hasCheckout = false;
    this.waitForCheckout = false;
  }
  /** @inheritdoc */
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  /** @inheritdoc */
  get type() {
    return "worker";
  }
  /**
   * Ensure the worker is ready (or not).
   * This will either resolve when the worker is ready, or reject if an error occurred.
   */
  ensureReady() {
    return this._worker.ensureReady();
  }
  /**
   * Destroy the event buffer.
   */
  destroy() {
    this._worker.destroy();
  }
  /**
   * Add an event to the event buffer.
   *
   * Returns true if event was successfully received and processed by worker.
   */
  addEvent(event) {
    const timestamp = timestampToMs(event.timestamp);
    if (!this._earliestTimestamp || timestamp < this._earliestTimestamp) {
      this._earliestTimestamp = timestamp;
    }
    const data = JSON.stringify(event);
    this._totalSize += data.length;
    if (this._totalSize > REPLAY_MAX_EVENT_BUFFER_SIZE) {
      return Promise.reject(new EventBufferSizeExceededError());
    }
    return this._sendEventToWorker(data);
  }
  /**
   * Finish the event buffer and return the compressed data.
   */
  finish() {
    return this._finishRequest();
  }
  /** @inheritdoc */
  clear() {
    this._earliestTimestamp = null;
    this._totalSize = 0;
    this.hasCheckout = false;
    this._worker.postMessage("clear").then(null, (e4) => {
      DEBUG_BUILD4 && debug2.exception(e4, 'Sending "clear" message to worker failed', e4);
    });
  }
  /** @inheritdoc */
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  /**
   * Send the event to the worker.
   */
  _sendEventToWorker(data) {
    return this._worker.postMessage("addEvent", data);
  }
  /**
   * Finish the request and return the compressed data from the worker.
   */
  async _finishRequest() {
    const response = await this._worker.postMessage("finish");
    this._earliestTimestamp = null;
    this._totalSize = 0;
    return response;
  }
};
var EventBufferProxy = class {
  constructor(worker) {
    this._fallback = new EventBufferArray();
    this._compression = new EventBufferCompressionWorker(worker);
    this._used = this._fallback;
    this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
  }
  /** @inheritdoc */
  get waitForCheckout() {
    return this._used.waitForCheckout;
  }
  /** @inheritdoc */
  get type() {
    return this._used.type;
  }
  /** @inheritDoc */
  get hasEvents() {
    return this._used.hasEvents;
  }
  /** @inheritdoc */
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  /** @inheritdoc */
  set hasCheckout(value) {
    this._used.hasCheckout = value;
  }
  /** @inheritdoc */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set waitForCheckout(value) {
    this._used.waitForCheckout = value;
  }
  /** @inheritDoc */
  destroy() {
    this._fallback.destroy();
    this._compression.destroy();
  }
  /** @inheritdoc */
  clear() {
    return this._used.clear();
  }
  /** @inheritdoc */
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  /**
   * Add an event to the event buffer.
   *
   * Returns true if event was successfully added.
   */
  addEvent(event) {
    return this._used.addEvent(event);
  }
  /** @inheritDoc */
  async finish() {
    await this.ensureWorkerIsLoaded();
    return this._used.finish();
  }
  /** Ensure the worker has loaded. */
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  /** Actually check if the worker has been loaded. */
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch (error2) {
      DEBUG_BUILD4 && debug2.exception(error2, "Failed to load the compression worker, falling back to simple buffer");
      return;
    }
    await this._switchToCompressionWorker();
  }
  /** Switch the used buffer to the compression worker. */
  async _switchToCompressionWorker() {
    const { events, hasCheckout, waitForCheckout } = this._fallback;
    const addEventPromises = [];
    for (const event of events) {
      addEventPromises.push(this._compression.addEvent(event));
    }
    this._compression.hasCheckout = hasCheckout;
    this._compression.waitForCheckout = waitForCheckout;
    this._used = this._compression;
    try {
      await Promise.all(addEventPromises);
      this._fallback.clear();
    } catch (error2) {
      if (error2 instanceof WorkerDestroyedError) {
        return;
      }
      DEBUG_BUILD4 && debug2.exception(error2, "Failed to add events when switching buffers.");
    }
  }
};
function createEventBuffer({
  useCompression,
  workerUrl: customWorkerUrl
}) {
  if (useCompression && // eslint-disable-next-line no-restricted-globals
  window.Worker) {
    const worker = _loadWorker(customWorkerUrl);
    if (worker) {
      return worker;
    }
  }
  DEBUG_BUILD4 && debug2.log("Using simple buffer");
  return new EventBufferArray();
}
function _loadWorker(customWorkerUrl) {
  try {
    const workerUrl = customWorkerUrl || _getWorkerUrl();
    if (!workerUrl) {
      return;
    }
    DEBUG_BUILD4 && debug2.log(`Using compression worker${customWorkerUrl ? ` from ${customWorkerUrl}` : ""}`);
    const worker = new Worker(workerUrl);
    return new EventBufferProxy(worker);
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to create compression worker");
  }
}
function _getWorkerUrl() {
  if (typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ === "undefined" || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
    return e3();
  }
  return "";
}
function hasSessionStorage() {
  try {
    return "sessionStorage" in WINDOW4 && !!WINDOW4.sessionStorage;
  } catch {
    return false;
  }
}
function clearSession(replay) {
  deleteSession();
  replay.session = void 0;
}
function deleteSession() {
  if (!hasSessionStorage()) {
    return;
  }
  try {
    WINDOW4.sessionStorage.removeItem(REPLAY_SESSION_KEY);
  } catch {
  }
}
function isSampled(sampleRate) {
  if (sampleRate === void 0) {
    return false;
  }
  return Math.random() < sampleRate;
}
function saveSession(session) {
  if (!hasSessionStorage()) {
    return;
  }
  try {
    WINDOW4.sessionStorage.setItem(REPLAY_SESSION_KEY, JSON.stringify(session));
  } catch {
  }
}
function makeSession2(session) {
  const now = Date.now();
  const id = session.id || uuid4();
  const started = session.started || now;
  const lastActivity = session.lastActivity || now;
  const segmentId = session.segmentId || 0;
  const sampled = session.sampled;
  const previousSessionId = session.previousSessionId;
  const dirty = session.dirty || false;
  return {
    id,
    started,
    lastActivity,
    segmentId,
    sampled,
    previousSessionId,
    dirty
  };
}
function getSessionSampleType(sessionSampleRate, allowBuffering) {
  return isSampled(sessionSampleRate) ? "session" : allowBuffering ? "buffer" : false;
}
function createSession({ sessionSampleRate, allowBuffering, stickySession = false }, { previousSessionId } = {}) {
  const sampled = getSessionSampleType(sessionSampleRate, allowBuffering);
  const session = makeSession2({
    sampled,
    previousSessionId
  });
  if (stickySession) {
    saveSession(session);
  }
  return session;
}
function fetchSession() {
  if (!hasSessionStorage()) {
    return null;
  }
  try {
    const sessionStringFromStorage = WINDOW4.sessionStorage.getItem(REPLAY_SESSION_KEY);
    if (!sessionStringFromStorage) {
      return null;
    }
    const sessionObj = JSON.parse(sessionStringFromStorage);
    DEBUG_BUILD4 && debug2.infoTick("Loading existing session");
    return makeSession2(sessionObj);
  } catch {
    return null;
  }
}
function isExpired(initialTime, expiry, targetTime = +/* @__PURE__ */ new Date()) {
  if (initialTime === null || expiry === void 0 || expiry < 0) {
    return true;
  }
  if (expiry === 0) {
    return false;
  }
  return initialTime + expiry <= targetTime;
}
function isSessionExpired(session, {
  maxReplayDuration,
  sessionIdleExpire,
  targetTime = Date.now()
}) {
  return (
    // First, check that maximum session length has not been exceeded
    isExpired(session.started, maxReplayDuration, targetTime) || // check that the idle timeout has not been exceeded (i.e. user has
    // performed an action within the last `sessionIdleExpire` ms)
    isExpired(session.lastActivity, sessionIdleExpire, targetTime)
  );
}
function shouldRefreshSession(session, { sessionIdleExpire, maxReplayDuration }) {
  if (!isSessionExpired(session, { sessionIdleExpire, maxReplayDuration })) {
    return false;
  }
  if (session.sampled === "buffer" && session.segmentId === 0) {
    return false;
  }
  return true;
}
function loadOrCreateSession({
  sessionIdleExpire,
  maxReplayDuration,
  previousSessionId
}, sessionOptions) {
  const existingSession = sessionOptions.stickySession && fetchSession();
  if (!existingSession) {
    DEBUG_BUILD4 && debug2.infoTick("Creating new session");
    return createSession(sessionOptions, { previousSessionId });
  }
  if (!shouldRefreshSession(existingSession, { sessionIdleExpire, maxReplayDuration })) {
    return existingSession;
  }
  DEBUG_BUILD4 && debug2.infoTick("Session in sessionStorage is expired, creating new one...");
  return createSession(sessionOptions, { previousSessionId: existingSession.id });
}
function isCustomEvent(event) {
  return event.type === EventType.Custom;
}
function addEventSync(replay, event, isCheckout) {
  if (!shouldAddEvent(replay, event)) {
    return false;
  }
  _addEvent(replay, event, isCheckout);
  return true;
}
function addEvent(replay, event, isCheckout) {
  if (!shouldAddEvent(replay, event)) {
    return Promise.resolve(null);
  }
  return _addEvent(replay, event, isCheckout);
}
async function _addEvent(replay, event, isCheckout) {
  const { eventBuffer } = replay;
  if (!eventBuffer || eventBuffer.waitForCheckout && !isCheckout) {
    return null;
  }
  const isBufferMode = replay.recordingMode === "buffer";
  try {
    if (isCheckout && isBufferMode) {
      eventBuffer.clear();
    }
    if (isCheckout) {
      eventBuffer.hasCheckout = true;
      eventBuffer.waitForCheckout = false;
    }
    const replayOptions = replay.getOptions();
    const eventAfterPossibleCallback = maybeApplyCallback(event, replayOptions.beforeAddRecordingEvent);
    if (!eventAfterPossibleCallback) {
      return;
    }
    return await eventBuffer.addEvent(eventAfterPossibleCallback);
  } catch (error2) {
    if (!replay.isEnabled()) {
      replay.handleException(error2);
      return null;
    }
    const isExceeded = error2 && error2 instanceof EventBufferSizeExceededError;
    const reason = isExceeded ? "eventBufferOverflow" : "eventBufferError";
    const client = getClient();
    if (client) {
      const dropReason = isExceeded ? "buffer_overflow" : "internal_sdk_error";
      client.recordDroppedEvent(dropReason, "replay");
    }
    if (isExceeded && isBufferMode) {
      eventBuffer.clear();
      eventBuffer.waitForCheckout = true;
      return null;
    }
    replay.handleException(error2);
    await replay.stop({ reason });
  }
}
function shouldAddEvent(replay, event) {
  if (!replay.eventBuffer || replay.isPaused() || !replay.isEnabled()) {
    return false;
  }
  const timestampInMs = timestampToMs(event.timestamp);
  if (timestampInMs + replay.timeouts.sessionIdlePause < Date.now()) {
    return false;
  }
  if (timestampInMs > replay.getContext().initialTimestamp + replay.getOptions().maxReplayDuration) {
    DEBUG_BUILD4 && debug2.infoTick(`Skipping event with timestamp ${timestampInMs} because it is after maxReplayDuration`);
    return false;
  }
  return true;
}
function maybeApplyCallback(event, callback) {
  try {
    if (typeof callback === "function" && isCustomEvent(event)) {
      return callback(event);
    }
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...");
    return null;
  }
  return event;
}
var MAX_CONTEXT_VALUES = 100;
function addSegmentDetailsToContext(replay, traceId, segmentName) {
  const replayContext = replay.getContext();
  if (traceId && replayContext.traceIds.size < MAX_CONTEXT_VALUES) {
    replayContext.traceIds.add(traceId);
  }
  if (segmentName && replayContext.segmentNames.size < MAX_CONTEXT_VALUES) {
    replayContext.segmentNames.add(segmentName);
  }
}
function handleProcessSegmentSpan(replay) {
  return (spanJSON) => {
    if (!replay.isEnabled()) {
      return;
    }
    addSegmentDetailsToContext(replay, spanJSON.trace_id, spanJSON.name || void 0);
  };
}
function isErrorEvent3(event) {
  return !event.type;
}
function isTransactionEvent2(event) {
  return event.type === "transaction";
}
function isReplayEvent(event) {
  return event.type === "replay_event";
}
function isFeedbackEvent(event) {
  return event.type === "feedback";
}
function handleAfterSendEvent(replay) {
  return (event, sendResponse) => {
    if (!replay.isEnabled() || !isErrorEvent3(event) && !isTransactionEvent2(event)) {
      return;
    }
    const statusCode = sendResponse.statusCode;
    if (!statusCode || statusCode < 200 || statusCode >= 300) {
      return;
    }
    if (isTransactionEvent2(event)) {
      handleTransactionEvent(replay, event);
      return;
    }
    handleErrorEvent(replay, event);
  };
}
function handleTransactionEvent(replay, event) {
  var _a3, _b;
  addSegmentDetailsToContext(replay, (_b = (_a3 = event.contexts) == null ? void 0 : _a3.trace) == null ? void 0 : _b.trace_id, event.transaction);
}
function handleErrorEvent(replay, event) {
  var _a3;
  const replayContext = replay.getContext();
  if (event.event_id && replayContext.errorIds.size < 100) {
    replayContext.errorIds.add(event.event_id);
  }
  if (replay.recordingMode !== "buffer" || !((_a3 = event.tags) == null ? void 0 : _a3.replayId)) {
    return;
  }
  const { beforeErrorSampling } = replay.getOptions();
  if (typeof beforeErrorSampling === "function" && !beforeErrorSampling(event)) {
    return;
  }
  setTimeout2(async () => {
    try {
      await replay.sendBufferedReplayOrFlush();
    } catch (err) {
      replay.handleException(err);
    }
  });
}
function handleBeforeSendEvent(replay) {
  return (event) => {
    if (!replay.isEnabled() || !isErrorEvent3(event)) {
      return;
    }
    handleHydrationError(replay, event);
  };
}
function handleHydrationError(replay, event) {
  var _a3, _b, _c;
  const exceptionValue = (_c = (_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b[0]) == null ? void 0 : _c.value;
  if (typeof exceptionValue !== "string") {
    return;
  }
  if (
    // Only matches errors in production builds of react-dom
    // Example https://reactjs.org/docs/error-decoder.html?invariant=423
    // With newer React versions, the messages changed to a different website https://react.dev/errors/418
    exceptionValue.match(
      /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/
    ) || // Development builds of react-dom
    // Error 1: Hydration failed because the initial UI does not match what was rendered on the server.
    // Error 2: Text content does not match server-rendered HTML. Warning: Text content did not match.
    exceptionValue.match(/(does not match server-rendered HTML|Hydration failed because)/i)
  ) {
    const breadcrumb = createBreadcrumb({
      category: "replay.hydrate-error",
      data: {
        url: getLocationHref()
      }
    });
    addBreadcrumbEvent(replay, breadcrumb);
  }
}
function handleBreadcrumbs(replay) {
  const client = getClient();
  if (!client) {
    return;
  }
  client.on("beforeAddBreadcrumb", (breadcrumb) => beforeAddBreadcrumb(replay, breadcrumb));
}
function beforeAddBreadcrumb(replay, breadcrumb) {
  if (!replay.isEnabled() || !isBreadcrumbWithCategory(breadcrumb)) {
    return;
  }
  const result = normalizeBreadcrumb(breadcrumb);
  if (result) {
    addBreadcrumbEvent(replay, result);
  }
}
function normalizeBreadcrumb(breadcrumb) {
  if (!isBreadcrumbWithCategory(breadcrumb) || [
    // fetch & xhr are handled separately,in handleNetworkBreadcrumbs
    "fetch",
    "xhr",
    // These two are breadcrumbs for emitted sentry events, we don't care about them
    "sentry.event",
    "sentry.transaction"
  ].includes(breadcrumb.category) || // We capture UI breadcrumbs separately
  breadcrumb.category.startsWith("ui.")) {
    return null;
  }
  if (breadcrumb.category === "console") {
    return normalizeConsoleBreadcrumb(breadcrumb);
  }
  return createBreadcrumb(breadcrumb);
}
function normalizeConsoleBreadcrumb(breadcrumb) {
  var _a3;
  const args = (_a3 = breadcrumb.data) == null ? void 0 : _a3.arguments;
  if (!Array.isArray(args) || args.length === 0) {
    return createBreadcrumb(breadcrumb);
  }
  let isTruncated = false;
  const normalizedArgs = args.map((arg) => {
    if (!arg) {
      return arg;
    }
    if (typeof arg === "string") {
      if (arg.length > CONSOLE_ARG_MAX_SIZE) {
        isTruncated = true;
        return `${arg.slice(0, CONSOLE_ARG_MAX_SIZE)}\u2026`;
      }
      return arg;
    }
    if (typeof arg === "object") {
      try {
        const normalizedArg = normalize(arg, 7);
        const stringified = JSON.stringify(normalizedArg);
        if (stringified.length > CONSOLE_ARG_MAX_SIZE) {
          isTruncated = true;
          return `${JSON.stringify(normalizedArg, null, 2).slice(0, CONSOLE_ARG_MAX_SIZE)}\u2026`;
        }
        return normalizedArg;
      } catch {
      }
    }
    return arg;
  });
  return createBreadcrumb(__spreadProps(__spreadValues({}, breadcrumb), {
    data: __spreadValues(__spreadProps(__spreadValues({}, breadcrumb.data), {
      arguments: normalizedArgs
    }), isTruncated ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {})
  }));
}
function isBreadcrumbWithCategory(breadcrumb) {
  return !!breadcrumb.category;
}
function isRrwebError(event, hint) {
  var _a3, _b, _c;
  if (event.type || !((_b = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b.length)) {
    return false;
  }
  if ((_c = hint.originalException) == null ? void 0 : _c.__rrweb__) {
    return true;
  }
  return false;
}
function resetReplayIdOnDynamicSamplingContext() {
  const dsc = getCurrentScope().getPropagationContext().dsc;
  if (dsc) {
    delete dsc.replay_id;
  }
  const activeSpan = getActiveSpan();
  if (activeSpan) {
    const dsc2 = getDynamicSamplingContextFromSpan(activeSpan);
    delete dsc2.replay_id;
  }
}
function setReplayIdOnDynamicSamplingContext(replayId) {
  const dsc = getCurrentScope().getPropagationContext().dsc;
  if (dsc) {
    dsc.replay_id = replayId;
  }
  const activeSpan = getActiveSpan();
  if (activeSpan) {
    const dsc2 = getDynamicSamplingContextFromSpan(activeSpan);
    dsc2.replay_id = replayId;
  }
}
function addFeedbackBreadcrumb(replay, event) {
  replay.triggerUserActivity();
  replay.addUpdate(() => {
    if (!event.timestamp) {
      return true;
    }
    void replay.throttledAddEvent({
      type: EventType.Custom,
      timestamp: event.timestamp * 1e3,
      data: {
        tag: "breadcrumb",
        payload: {
          timestamp: event.timestamp,
          type: "default",
          category: "sentry.feedback",
          data: {
            feedbackId: event.event_id
          }
        }
      }
    });
    return false;
  });
}
function shouldSampleForBufferEvent(replay, event) {
  if (replay.recordingMode !== "buffer") {
    return false;
  }
  if (event.message === UNABLE_TO_SEND_REPLAY) {
    return false;
  }
  if (!event.exception || event.type) {
    return false;
  }
  return isSampled(replay.getOptions().errorSampleRate);
}
function handleGlobalEventListener(replay) {
  return Object.assign(
    (event, hint) => {
      var _a3;
      if (replay.session && shouldRefreshSession(replay.session, {
        maxReplayDuration: replay.getOptions().maxReplayDuration,
        sessionIdleExpire: replay.timeouts.sessionIdleExpire
      })) {
        resetReplayIdOnDynamicSamplingContext();
      }
      if (!replay.isEnabled() || replay.isPaused()) {
        return event;
      }
      if (isReplayEvent(event)) {
        delete event.breadcrumbs;
        return event;
      }
      if (!isErrorEvent3(event) && !isTransactionEvent2(event) && !isFeedbackEvent(event)) {
        return event;
      }
      const isSessionActive = replay.checkAndHandleExpiredSession();
      if (!isSessionActive) {
        resetReplayIdOnDynamicSamplingContext();
        return event;
      }
      if (isFeedbackEvent(event)) {
        const sessionId = replay.getSessionId();
        const feedbackReplayId = event.contexts.feedback.replay_id;
        if (feedbackReplayId && feedbackReplayId !== sessionId) {
          return event;
        }
        replay.flush();
        event.contexts.feedback.replay_id = sessionId;
        addFeedbackBreadcrumb(replay, event);
        return event;
      }
      if (isRrwebError(event, hint) && !replay.getOptions()._experiments.captureExceptions) {
        DEBUG_BUILD4 && debug2.log("Ignoring error from rrweb internals", event);
        return null;
      }
      const isErrorEventSampled = shouldSampleForBufferEvent(replay, event);
      const shouldTagReplayId = isErrorEventSampled || replay.recordingMode === "session";
      if (shouldTagReplayId) {
        event.tags = __spreadProps(__spreadValues({}, event.tags), { replayId: replay.getSessionId() });
      }
      if (isErrorEventSampled && replay.recordingMode === "buffer" && ((_a3 = replay.session) == null ? void 0 : _a3.sampled) === "buffer") {
        const session = replay.session;
        session.dirty = true;
        if (replay.getOptions().stickySession) {
          saveSession(session);
        }
      }
      return event;
    },
    { id: "Replay" }
  );
}
function createPerformanceSpans(replay, entries) {
  return entries.map(({ type, start, end, name, data }) => {
    const response = replay.throttledAddEvent({
      type: EventType.Custom,
      timestamp: start,
      data: {
        tag: "performanceSpan",
        payload: {
          op: type,
          description: name,
          startTimestamp: start,
          endTimestamp: end,
          data
        }
      }
    });
    return typeof response === "string" ? Promise.resolve(null) : response;
  });
}
function handleHistory(handlerData) {
  const { from, to } = handlerData;
  const now = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: now,
    end: now,
    name: to,
    data: {
      previous: from
    }
  };
}
function handleHistorySpanListener(replay) {
  return (handlerData) => {
    if (!replay.isEnabled()) {
      return;
    }
    const result = handleHistory(handlerData);
    if (result === null) {
      return;
    }
    replay.getContext().urls.push(result.name);
    replay.triggerUserActivity();
    replay.addUpdate(() => {
      createPerformanceSpans(replay, [result]);
      return false;
    });
  };
}
function shouldFilterRequest(replay, url) {
  if (DEBUG_BUILD4 && replay.getOptions()._experiments.traceInternals) {
    return false;
  }
  return isSentryRequestUrl(url, getClient());
}
function addNetworkBreadcrumb(replay, result) {
  if (!replay.isEnabled()) {
    return;
  }
  if (result === null) {
    return;
  }
  if (shouldFilterRequest(replay, result.name)) {
    return;
  }
  replay.addUpdate(() => {
    createPerformanceSpans(replay, [result]);
    return true;
  });
}
function getBodySize(body) {
  if (!body) {
    return void 0;
  }
  const textEncoder = new TextEncoder();
  try {
    if (typeof body === "string") {
      return textEncoder.encode(body).length;
    }
    if (body instanceof URLSearchParams) {
      return textEncoder.encode(body.toString()).length;
    }
    if (body instanceof FormData) {
      const formDataStr = serializeFormData(body);
      return textEncoder.encode(formDataStr).length;
    }
    if (body instanceof Blob) {
      return body.size;
    }
    if (body instanceof ArrayBuffer) {
      return body.byteLength;
    }
  } catch {
  }
  return void 0;
}
function parseContentLengthHeader(header) {
  if (!header) {
    return void 0;
  }
  const size = parseInt(header, 10);
  return isNaN(size) ? void 0 : size;
}
function mergeWarning(info, warning) {
  if (!info) {
    return {
      headers: {},
      size: void 0,
      _meta: {
        warnings: [warning]
      }
    };
  }
  const newMeta = __spreadValues({}, info._meta);
  const existingWarnings = newMeta.warnings || [];
  newMeta.warnings = [...existingWarnings, warning];
  info._meta = newMeta;
  return info;
}
function makeNetworkReplayBreadcrumb(type, data) {
  if (!data) {
    return null;
  }
  const { startTimestamp, endTimestamp, url, method, statusCode, request, response } = data;
  const result = {
    type,
    start: startTimestamp / 1e3,
    end: endTimestamp / 1e3,
    name: url,
    data: {
      method,
      statusCode,
      request,
      response
    }
  };
  return result;
}
function buildSkippedNetworkRequestOrResponse(bodySize) {
  return {
    headers: {},
    size: bodySize,
    _meta: {
      warnings: ["URL_SKIPPED"]
    }
  };
}
function buildNetworkRequestOrResponse(headers, bodySize, body) {
  if (!bodySize && Object.keys(headers).length === 0) {
    return void 0;
  }
  if (!bodySize) {
    return {
      headers
    };
  }
  if (!body) {
    return {
      headers,
      size: bodySize
    };
  }
  const info = {
    headers,
    size: bodySize
  };
  const { body: normalizedBody, warnings } = normalizeNetworkBody(body);
  info.body = normalizedBody;
  if (warnings == null ? void 0 : warnings.length) {
    info._meta = {
      warnings
    };
  }
  return info;
}
function getAllowedHeaders(headers, allowedHeaders) {
  return Object.entries(headers).reduce((filteredHeaders, [key, value]) => {
    const normalizedKey = key.toLowerCase();
    if (allowedHeaders.includes(normalizedKey) && headers[key]) {
      filteredHeaders[normalizedKey] = value;
    }
    return filteredHeaders;
  }, {});
}
function normalizeNetworkBody(body) {
  if (!body || typeof body !== "string") {
    return {
      body
    };
  }
  const exceedsSizeLimit = body.length > NETWORK_BODY_MAX_SIZE;
  const isProbablyJson = _strIsProbablyJson(body);
  if (exceedsSizeLimit) {
    const truncatedBody = body.slice(0, NETWORK_BODY_MAX_SIZE);
    if (isProbablyJson) {
      return {
        body: truncatedBody,
        warnings: ["MAYBE_JSON_TRUNCATED"]
      };
    }
    return {
      body: `${truncatedBody}\u2026`,
      warnings: ["TEXT_TRUNCATED"]
    };
  }
  if (isProbablyJson) {
    try {
      const jsonBody = JSON.parse(body);
      return {
        body: jsonBody
      };
    } catch {
    }
  }
  return {
    body
  };
}
function _strIsProbablyJson(str) {
  const first = str[0];
  const last = str[str.length - 1];
  return first === "[" && last === "]" || first === "{" && last === "}";
}
function urlMatches(url, urls) {
  const fullUrl = getFullUrl(url);
  return stringMatchesSomePattern(fullUrl, urls);
}
function getFullUrl(url, baseURI = WINDOW4.document.baseURI) {
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith(WINDOW4.location.origin)) {
    return url;
  }
  const fixedUrl = new URL(url, baseURI);
  if (fixedUrl.origin !== new URL(baseURI).origin) {
    return url;
  }
  const fullUrl = fixedUrl.href;
  if (!url.endsWith("/") && fullUrl.endsWith("/")) {
    return fullUrl.slice(0, -1);
  }
  return fullUrl;
}
async function captureFetchBreadcrumbToReplay(breadcrumb, hint, options) {
  try {
    const data = await _prepareFetchData(breadcrumb, hint, options);
    const result = makeNetworkReplayBreadcrumb("resource.fetch", data);
    addNetworkBreadcrumb(options.replay, result);
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to capture fetch breadcrumb");
  }
}
function enrichFetchBreadcrumb(breadcrumb, hint) {
  const { input, response } = hint;
  const body = input ? getFetchRequestArgBody(input) : void 0;
  const reqSize = getBodySize(body);
  const resSize = response ? parseContentLengthHeader(response.headers.get("content-length")) : void 0;
  if (reqSize !== void 0) {
    breadcrumb.data.request_body_size = reqSize;
  }
  if (resSize !== void 0) {
    breadcrumb.data.response_body_size = resSize;
  }
}
async function _prepareFetchData(breadcrumb, hint, options) {
  const now = Date.now();
  const { startTimestamp = now, endTimestamp = now } = hint;
  const {
    url,
    method,
    status_code: statusCode = 0,
    request_body_size: requestBodySize,
    response_body_size: responseBodySize
  } = breadcrumb.data;
  const captureDetails = urlMatches(url, options.networkDetailAllowUrls) && !urlMatches(url, options.networkDetailDenyUrls);
  const request = captureDetails ? _getRequestInfo(options, hint.input, requestBodySize) : buildSkippedNetworkRequestOrResponse(requestBodySize);
  const response = await _getResponseInfo(captureDetails, options, hint.response, responseBodySize);
  return {
    startTimestamp,
    endTimestamp,
    url,
    method,
    statusCode,
    request,
    response
  };
}
function _getRequestInfo({ networkCaptureBodies, networkRequestHeaders }, input, requestBodySize) {
  const headers = input ? getRequestHeaders(input, networkRequestHeaders) : {};
  if (!networkCaptureBodies) {
    return buildNetworkRequestOrResponse(headers, requestBodySize, void 0);
  }
  const requestBody = getFetchRequestArgBody(input);
  const [bodyStr, warning] = getBodyString(requestBody, debug2);
  const data = buildNetworkRequestOrResponse(headers, requestBodySize, bodyStr);
  if (warning) {
    return mergeWarning(data, warning);
  }
  return data;
}
async function _getResponseInfo(captureDetails, {
  networkCaptureBodies,
  networkResponseHeaders
}, response, responseBodySize) {
  if (!captureDetails && responseBodySize !== void 0) {
    return buildSkippedNetworkRequestOrResponse(responseBodySize);
  }
  const headers = response ? getAllHeaders(response.headers, networkResponseHeaders) : {};
  if (!response || !networkCaptureBodies && responseBodySize !== void 0) {
    return buildNetworkRequestOrResponse(headers, responseBodySize, void 0);
  }
  const [bodyText, warning] = await _parseFetchResponseBody(response);
  const result = getResponseData(bodyText, {
    networkCaptureBodies,
    responseBodySize,
    captureDetails,
    headers
  });
  if (warning) {
    return mergeWarning(result, warning);
  }
  return result;
}
function getResponseData(bodyText, {
  networkCaptureBodies,
  responseBodySize,
  captureDetails,
  headers
}) {
  try {
    const size = (bodyText == null ? void 0 : bodyText.length) && responseBodySize === void 0 ? getBodySize(bodyText) : responseBodySize;
    if (!captureDetails) {
      return buildSkippedNetworkRequestOrResponse(size);
    }
    if (networkCaptureBodies) {
      return buildNetworkRequestOrResponse(headers, size, bodyText);
    }
    return buildNetworkRequestOrResponse(headers, size, void 0);
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to serialize response body");
    return buildNetworkRequestOrResponse(headers, responseBodySize, void 0);
  }
}
async function _parseFetchResponseBody(response) {
  const res = _tryCloneResponse(response);
  if (!res) {
    return [void 0, "BODY_PARSE_ERROR"];
  }
  try {
    const text = await _tryGetResponseText(res);
    return [text];
  } catch (error2) {
    if (error2 instanceof Error && error2.message.indexOf("Timeout") > -1) {
      DEBUG_BUILD4 && debug2.warn("Parsing text body from response timed out");
      return [void 0, "BODY_PARSE_TIMEOUT"];
    }
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to get text body from response");
    return [void 0, "BODY_PARSE_ERROR"];
  }
}
function getAllHeaders(headers, allowedHeaders) {
  const allHeaders = {};
  allowedHeaders.forEach((header) => {
    if (headers.get(header)) {
      allHeaders[header] = headers.get(header);
    }
  });
  return allHeaders;
}
function getRequestHeaders(fetchArgs, allowedHeaders) {
  if (fetchArgs.length === 1 && typeof fetchArgs[0] !== "string") {
    return getHeadersFromOptions(fetchArgs[0], allowedHeaders);
  }
  if (fetchArgs.length === 2) {
    return getHeadersFromOptions(fetchArgs[1], allowedHeaders);
  }
  return {};
}
function getHeadersFromOptions(input, allowedHeaders) {
  if (!input) {
    return {};
  }
  const headers = input.headers;
  if (!headers) {
    return {};
  }
  if (headers instanceof Headers) {
    return getAllHeaders(headers, allowedHeaders);
  }
  if (Array.isArray(headers)) {
    return {};
  }
  return getAllowedHeaders(headers, allowedHeaders);
}
function _tryCloneResponse(response) {
  try {
    return response.clone();
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to clone response body");
  }
}
function _tryGetResponseText(response) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout2(() => reject(new Error("Timeout while trying to read response body")), 500);
    _getResponseText(response).then(
      (txt) => resolve(txt),
      (reason) => reject(reason)
    ).finally(() => clearTimeout(timeout));
  });
}
async function _getResponseText(response) {
  return response.text();
}
async function captureXhrBreadcrumbToReplay(breadcrumb, hint, options) {
  try {
    const data = _prepareXhrData(breadcrumb, hint, options);
    const result = makeNetworkReplayBreadcrumb("resource.xhr", data);
    addNetworkBreadcrumb(options.replay, result);
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to capture xhr breadcrumb");
  }
}
function enrichXhrBreadcrumb(breadcrumb, hint) {
  const { xhr, input } = hint;
  if (!xhr) {
    return;
  }
  const reqSize = getBodySize(input);
  const resSize = xhr.getResponseHeader("content-length") ? parseContentLengthHeader(xhr.getResponseHeader("content-length")) : _getBodySize(xhr.response, xhr.responseType);
  if (reqSize !== void 0) {
    breadcrumb.data.request_body_size = reqSize;
  }
  if (resSize !== void 0) {
    breadcrumb.data.response_body_size = resSize;
  }
}
function _prepareXhrData(breadcrumb, hint, options) {
  const now = Date.now();
  const { startTimestamp = now, endTimestamp = now, input, xhr } = hint;
  const {
    url,
    method,
    status_code: statusCode = 0,
    request_body_size: requestBodySize,
    response_body_size: responseBodySize
  } = breadcrumb.data;
  if (!url) {
    return null;
  }
  if (!xhr || !urlMatches(url, options.networkDetailAllowUrls) || urlMatches(url, options.networkDetailDenyUrls)) {
    const request2 = buildSkippedNetworkRequestOrResponse(requestBodySize);
    const response2 = buildSkippedNetworkRequestOrResponse(responseBodySize);
    return {
      startTimestamp,
      endTimestamp,
      url,
      method,
      statusCode,
      request: request2,
      response: response2
    };
  }
  const xhrInfo = xhr[SENTRY_XHR_DATA_KEY];
  const networkRequestHeaders = xhrInfo ? getAllowedHeaders(xhrInfo.request_headers, options.networkRequestHeaders) : {};
  const networkResponseHeaders = getAllowedHeaders(parseXhrResponseHeaders(xhr), options.networkResponseHeaders);
  const [requestBody, requestWarning] = options.networkCaptureBodies ? getBodyString(input, debug2) : [void 0];
  const [responseBody, responseWarning] = options.networkCaptureBodies ? _getXhrResponseBody(xhr) : [void 0];
  const request = buildNetworkRequestOrResponse(networkRequestHeaders, requestBodySize, requestBody);
  const response = buildNetworkRequestOrResponse(networkResponseHeaders, responseBodySize, responseBody);
  return {
    startTimestamp,
    endTimestamp,
    url,
    method,
    statusCode,
    request: requestWarning ? mergeWarning(request, requestWarning) : request,
    response: responseWarning ? mergeWarning(response, responseWarning) : response
  };
}
function _getXhrResponseBody(xhr) {
  const errors = [];
  try {
    return [xhr.responseText];
  } catch (e4) {
    errors.push(e4);
  }
  try {
    return _parseXhrResponse(xhr.response, xhr.responseType);
  } catch (e4) {
    errors.push(e4);
  }
  DEBUG_BUILD4 && debug2.warn("Failed to get xhr response body", ...errors);
  return [void 0];
}
function _parseXhrResponse(body, responseType) {
  try {
    if (typeof body === "string") {
      return [body];
    }
    if (body instanceof Document) {
      return [body.body.outerHTML];
    }
    if (responseType === "json" && isObjectLike(body)) {
      return [JSON.stringify(body)];
    }
    if (!body) {
      return [void 0];
    }
  } catch (error2) {
    DEBUG_BUILD4 && debug2.exception(error2, "Failed to serialize body", body);
    return [void 0, "BODY_PARSE_ERROR"];
  }
  DEBUG_BUILD4 && debug2.log("Skipping network body because of body type", body);
  return [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function _getBodySize(body, responseType) {
  try {
    const bodyStr = responseType === "json" && isObjectLike(body) ? JSON.stringify(body) : body;
    return getBodySize(bodyStr);
  } catch {
    return void 0;
  }
}
function handleNetworkBreadcrumbs(replay) {
  const client = getClient();
  try {
    const {
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders,
      networkResponseHeaders
    } = replay.getOptions();
    const options = {
      replay,
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders,
      networkResponseHeaders
    };
    if (client) {
      client.on("beforeAddBreadcrumb", (breadcrumb, hint) => beforeAddNetworkBreadcrumb(options, breadcrumb, hint));
    }
  } catch {
  }
}
function beforeAddNetworkBreadcrumb(options, breadcrumb, hint) {
  if (!breadcrumb.data) {
    return;
  }
  try {
    if (_isXhrBreadcrumb(breadcrumb) && _isXhrHint(hint)) {
      enrichXhrBreadcrumb(breadcrumb, hint);
      captureXhrBreadcrumbToReplay(breadcrumb, hint, options);
    }
    if (_isFetchBreadcrumb(breadcrumb) && _isFetchHint(hint)) {
      enrichFetchBreadcrumb(breadcrumb, hint);
      captureFetchBreadcrumbToReplay(breadcrumb, hint, options);
    }
  } catch (e4) {
    DEBUG_BUILD4 && debug2.exception(e4, "Error when enriching network breadcrumb");
  }
}
function _isXhrBreadcrumb(breadcrumb) {
  return breadcrumb.category === "xhr";
}
function _isFetchBreadcrumb(breadcrumb) {
  return breadcrumb.category === "fetch";
}
function _isXhrHint(hint) {
  return hint == null ? void 0 : hint.xhr;
}
function _isFetchHint(hint) {
  return (hint == null ? void 0 : hint.input) !== void 0;
}
function addGlobalListeners(replay) {
  const client = getClient();
  addClickKeypressInstrumentationHandler(handleDomListener(replay));
  addHistoryInstrumentationHandler(handleHistorySpanListener(replay));
  handleBreadcrumbs(replay);
  handleNetworkBreadcrumbs(replay);
  const eventProcessor = handleGlobalEventListener(replay);
  addEventProcessor(eventProcessor);
  if (client) {
    client.on("beforeSendEvent", handleBeforeSendEvent(replay));
    client.on("afterSendEvent", handleAfterSendEvent(replay));
    client.on("createDsc", (dsc) => {
      const replayId = replay.getSessionId();
      if (replayId && replay.isEnabled() && replay.recordingMode === "session") {
        const isSessionActive = replay.checkAndHandleExpiredSession();
        if (isSessionActive) {
          dsc.replay_id = replayId;
        }
      }
    });
    client.on("processSegmentSpan", handleProcessSegmentSpan(replay));
    client.on("spanStart", (span) => {
      replay.lastActiveSpan = span;
    });
    client.on("spanEnd", (span) => {
      replay.lastActiveSpan = span;
    });
    let replayIdOnFeedbackOpen;
    client.on("beforeSendFeedback", async (feedbackEvent, options) => {
      var _a3;
      const feedbackContext = (_a3 = feedbackEvent.contexts) == null ? void 0 : _a3.feedback;
      if (!(options == null ? void 0 : options.includeReplay) || !feedbackContext) {
        return;
      }
      if (feedbackContext.source === "widget" && replayIdOnFeedbackOpen) {
        feedbackContext.replay_id = replayIdOnFeedbackOpen;
        replayIdOnFeedbackOpen = void 0;
        return;
      }
      const replayId = replay.getSessionId();
      if (replay.isEnabled() && replayId) {
        if (feedbackContext.source === "api") {
          await replay.sendBufferedReplayOrFlush();
        }
        feedbackContext.replay_id = replayId;
      }
    });
    client.on("openFeedbackWidget", async () => {
      replayIdOnFeedbackOpen = void 0;
      await replay.sendBufferedReplayOrFlush();
      replayIdOnFeedbackOpen = replay.isEnabled() ? replay.getSessionId() : void 0;
    });
  }
}
async function addMemoryEntry(replay) {
  try {
    return await Promise.all(
      createPerformanceSpans(replay, [
        // @ts-expect-error memory doesn't exist on type Performance as the API is non-standard (we check that it exists above)
        createMemoryEntry(WINDOW4.performance.memory)
      ])
    );
  } catch {
    return [];
  }
}
function createMemoryEntry(memoryEntry) {
  const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = memoryEntry;
  const time = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: time,
    end: time,
    data: {
      memory: {
        jsHeapSizeLimit,
        totalJSHeapSize,
        usedJSHeapSize
      }
    }
  };
}
function debounce2(func, wait, options) {
  return debounce(func, wait, __spreadProps(__spreadValues({}, options), {
    // @ts-expect-error - Not quite sure why these types do not match, but this is fine
    setTimeoutImpl: setTimeout2
  }));
}
var NAVIGATOR = GLOBAL_OBJ.navigator;
function getRecordingSamplingOptions() {
  if (/iPhone|iPad|iPod/i.test((NAVIGATOR == null ? void 0 : NAVIGATOR.userAgent) ?? "") || /Macintosh/i.test((NAVIGATOR == null ? void 0 : NAVIGATOR.userAgent) ?? "") && (NAVIGATOR == null ? void 0 : NAVIGATOR.maxTouchPoints) && (NAVIGATOR == null ? void 0 : NAVIGATOR.maxTouchPoints) > 1) {
    return {
      sampling: {
        mousemove: false
      }
    };
  }
  return {};
}
function getHandleRecordingEmit(replay) {
  let hadFirstEvent = false;
  return (event, _isCheckout) => {
    try {
      if (!replay.checkAndHandleExpiredSession()) {
        DEBUG_BUILD4 && debug2.warn("Received replay event after session expired.");
        return;
      }
      const isCheckout = _isCheckout || !hadFirstEvent;
      hadFirstEvent = true;
      syncMirrorAttributesFromMutationEvent(event);
      if (replay.clickDetector) {
        updateClickDetectorForRecordingEvent(replay.clickDetector, event);
      }
      replay.addUpdate(() => {
        if (replay.recordingMode === "buffer" && isCheckout) {
          replay.setInitialState();
        }
        if (!addEventSync(replay, event, isCheckout)) {
          return true;
        }
        if (!isCheckout) {
          return false;
        }
        const session = replay.session;
        addSettingsEvent(replay, isCheckout);
        if (replay.recordingMode === "buffer" && session && replay.eventBuffer && !session.dirty) {
          const earliestEvent = replay.eventBuffer.getEarliestTimestamp();
          if (earliestEvent) {
            DEBUG_BUILD4 && debug2.log(`Updating session start time to earliest event in buffer to ${new Date(earliestEvent)}`);
            session.started = earliestEvent;
            if (replay.getOptions().stickySession) {
              saveSession(session);
            }
          }
        }
        if (session == null ? void 0 : session.previousSessionId) {
          return true;
        }
        if (replay.recordingMode === "session") {
          void replay.flush();
        }
        return true;
      });
    } catch (error2) {
      replay.handleException(error2);
    }
  };
}
function syncMirrorAttributesFromMutationEvent(event) {
  const data = event.data;
  if (event.type !== EventType.IncrementalSnapshot || !data || typeof data !== "object" || !("source" in data) || data.source !== IncrementalSource.Mutation || !("attributes" in data) || !Array.isArray(data.attributes)) {
    return;
  }
  for (const mutation of data.attributes) {
    const node = record.mirror.getNode(mutation.id);
    const meta = node && record.mirror.getMeta(node);
    if (!node || (meta == null ? void 0 : meta.type) !== NodeType.Element) {
      continue;
    }
    const attributes = __spreadValues({}, meta.attributes);
    let changed = false;
    for (const [attributeName, value] of Object.entries(mutation.attributes)) {
      if (!BREADCRUMB_RELEVANT_ATTRIBUTES.has(attributeName)) {
        continue;
      }
      if (value === null) {
        delete attributes[attributeName];
      } else {
        attributes[attributeName] = value;
      }
      changed = true;
    }
    if (changed) {
      record.mirror.add(node, __spreadProps(__spreadValues({}, meta), { attributes }));
    }
  }
}
function createOptionsEvent(replay) {
  const options = replay.getOptions();
  return {
    type: EventType.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        shouldRecordCanvas: replay.isRecordingCanvas(),
        sessionSampleRate: options.sessionSampleRate,
        errorSampleRate: options.errorSampleRate,
        useCompressionOption: options.useCompression,
        blockAllMedia: options.blockAllMedia,
        maskAllText: options.maskAllText,
        maskAllInputs: options.maskAllInputs,
        useCompression: replay.eventBuffer ? replay.eventBuffer.type === "worker" : false,
        networkDetailHasUrls: options.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: options.networkCaptureBodies,
        networkRequestHasHeaders: options.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: options.networkResponseHeaders.length > 0
      }
    }
  };
}
function addSettingsEvent(replay, isCheckout) {
  var _a3;
  if (!isCheckout || ((_a3 = replay.session) == null ? void 0 : _a3.segmentId) !== 0) {
    return;
  }
  addEventSync(replay, createOptionsEvent(replay), false);
}
function closestElementOfNode(node) {
  if (!node) {
    return null;
  }
  try {
    const el2 = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
    return el2;
  } catch {
    return null;
  }
}
function createReplayEnvelope(replayEvent, recordingData, dsn, tunnel) {
  return createEnvelope(
    createEventEnvelopeHeaders(replayEvent, getSdkMetadataForEnvelopeHeader(replayEvent), tunnel, dsn),
    [
      [{ type: "replay_event" }, replayEvent],
      [
        {
          type: "replay_recording",
          // If string then we need to encode to UTF8, otherwise will have
          // wrong size. TextEncoder has similar browser support to
          // MutationObserver, although it does not accept IE11.
          length: typeof recordingData === "string" ? new TextEncoder().encode(recordingData).length : recordingData.length
        },
        recordingData
      ]
    ]
  );
}
function prepareRecordingData({
  recordingData,
  headers
}) {
  let payloadWithSequence;
  const replayHeaders = `${JSON.stringify(headers)}
`;
  if (typeof recordingData === "string") {
    payloadWithSequence = `${replayHeaders}${recordingData}`;
  } else {
    const enc = new TextEncoder();
    const sequence = enc.encode(replayHeaders);
    payloadWithSequence = new Uint8Array(sequence.length + recordingData.length);
    payloadWithSequence.set(sequence);
    payloadWithSequence.set(recordingData, sequence.length);
  }
  return payloadWithSequence;
}
async function prepareReplayEvent({
  client,
  scope,
  replayId: event_id,
  event
}) {
  const integrations = typeof client["_integrations"] === "object" && client["_integrations"] !== null && !Array.isArray(client["_integrations"]) ? Object.keys(client["_integrations"]) : void 0;
  const eventHint = { event_id, integrations };
  client.emit("preprocessEvent", event, eventHint);
  const preparedEvent = await prepareEvent(
    client.getOptions(),
    event,
    eventHint,
    scope,
    client,
    getIsolationScope()
  );
  if (!preparedEvent) {
    return null;
  }
  client.emit("postprocessEvent", preparedEvent, eventHint);
  preparedEvent.platform = preparedEvent.platform || "javascript";
  const metadata = client.getSdkMetadata();
  const { name, version, settings } = (metadata == null ? void 0 : metadata.sdk) || {};
  preparedEvent.sdk = __spreadProps(__spreadValues({}, preparedEvent.sdk), {
    name: name || "sentry.javascript.unknown",
    version: version || "0.0.0",
    settings
  });
  return preparedEvent;
}
async function sendReplayRequest({
  recordingData,
  replayId,
  segmentId: segment_id,
  eventContext,
  timestamp,
  session
}) {
  const preparedRecordingData = prepareRecordingData({
    recordingData,
    headers: {
      segment_id
    }
  });
  const { urls, errorIds, traceIds, segmentNames, initialTimestamp } = eventContext;
  const client = getClient();
  const scope = getCurrentScope();
  const transport = client == null ? void 0 : client.getTransport();
  const dsn = client == null ? void 0 : client.getDsn();
  if (!client || !transport || !dsn || !session.sampled) {
    return Promise.resolve({});
  }
  const baseEvent = {
    type: REPLAY_EVENT_NAME,
    replay_start_timestamp: initialTimestamp / 1e3,
    timestamp: timestamp / 1e3,
    error_ids: errorIds,
    trace_ids: traceIds,
    segment_names: segmentNames,
    urls,
    replay_id: replayId,
    segment_id,
    replay_type: session.sampled
  };
  const replayEvent = await prepareReplayEvent({ scope, client, replayId, event: baseEvent });
  if (!replayEvent) {
    DEBUG_BUILD4 && debug2.log("An event processor returned `null`, will not send event.");
    return Promise.resolve({});
  }
  delete replayEvent.sdkProcessingMetadata;
  const envelope = createReplayEnvelope(replayEvent, preparedRecordingData, dsn, client.getOptions().tunnel);
  let response;
  try {
    response = await transport.send(envelope);
  } catch (err) {
    const error2 = new Error(UNABLE_TO_SEND_REPLAY);
    try {
      error2.cause = err;
    } catch {
    }
    throw error2;
  }
  const rateLimits = updateRateLimits({}, response);
  if (isRateLimited(rateLimits, "replay")) {
    throw new RateLimitError(rateLimits);
  }
  if (typeof response.statusCode === "number" && (response.statusCode < 200 || response.statusCode >= 300)) {
    throw new TransportStatusCodeError(response.statusCode);
  }
  return response;
}
var TransportStatusCodeError = class extends Error {
  constructor(statusCode) {
    super(`Transport returned status code ${statusCode}`);
  }
};
var RateLimitError = class extends Error {
  constructor(rateLimits) {
    super("Rate limit hit");
    this.rateLimits = rateLimits;
  }
};
var ReplayDurationLimitError = class extends Error {
  constructor() {
    super("Session is too long, not sending replay");
  }
};
async function sendReplay(replayData, retryConfig = {
  count: 0,
  interval: RETRY_BASE_INTERVAL
}) {
  const { recordingData, onError } = replayData;
  if (!recordingData.length) {
    return;
  }
  try {
    await sendReplayRequest(replayData);
    return true;
  } catch (err) {
    if (err instanceof TransportStatusCodeError || err instanceof RateLimitError) {
      throw err;
    }
    setContext("Replays", {
      _retryCount: retryConfig.count
    });
    if (onError) {
      onError(err);
    }
    if (retryConfig.count >= RETRY_MAX_COUNT) {
      const error2 = new Error(`${UNABLE_TO_SEND_REPLAY} - max retries exceeded`);
      try {
        error2.cause = err;
      } catch {
      }
      throw error2;
    }
    retryConfig.interval *= ++retryConfig.count;
    return new Promise((resolve, reject) => {
      setTimeout2(async () => {
        try {
          await sendReplay(replayData, retryConfig);
          resolve(true);
        } catch (err2) {
          reject(err2);
        }
      }, retryConfig.interval);
    });
  }
}
var THROTTLED = "__THROTTLED";
var SKIPPED = "__SKIPPED";
function throttle(fn, maxCount, durationSeconds) {
  const counter = /* @__PURE__ */ new Map();
  const _cleanup = (now) => {
    const threshold = now - durationSeconds;
    counter.forEach((_value, key) => {
      if (key < threshold) {
        counter.delete(key);
      }
    });
  };
  const _getTotalCount = () => {
    return [...counter.values()].reduce((a2, b3) => a2 + b3, 0);
  };
  let isThrottled = false;
  return (...rest) => {
    const now = Math.floor(Date.now() / 1e3);
    _cleanup(now);
    if (_getTotalCount() >= maxCount) {
      const wasThrottled = isThrottled;
      isThrottled = true;
      return wasThrottled ? SKIPPED : THROTTLED;
    }
    isThrottled = false;
    const count = counter.get(now) || 0;
    counter.set(now, count + 1);
    return fn(...rest);
  };
}
var ReplayContainer = class {
  constructor({
    options,
    recordingOptions
  }) {
    this.eventBuffer = null;
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    this.recordingMode = "session";
    this.timeouts = {
      sessionIdlePause: SESSION_IDLE_PAUSE_DURATION,
      sessionIdleExpire: SESSION_IDLE_EXPIRE_DURATION
    };
    this._lastActivity = Date.now();
    this._isEnabled = false;
    this._isPaused = false;
    this._requiresManualStart = false;
    this._hasInitializedCoreListeners = false;
    this._context = {
      errorIds: /* @__PURE__ */ new Set(),
      traceIds: /* @__PURE__ */ new Set(),
      segmentNames: /* @__PURE__ */ new Set(),
      urls: [],
      initialTimestamp: Date.now(),
      initialUrl: ""
    };
    this._recordingOptions = recordingOptions;
    this._options = options;
    this._debouncedFlush = debounce2(() => this._flush(), this._options.flushMinDelay, {
      maxWait: this._options.flushMaxDelay
    });
    this._throttledAddEvent = throttle(
      (event, isCheckout) => addEvent(this, event, isCheckout),
      // Max 300 events...
      300,
      // ... per 5s
      5
    );
    const { slowClickTimeout, slowClickIgnoreSelectors } = this.getOptions();
    const slowClickConfig = slowClickTimeout ? {
      threshold: Math.min(SLOW_CLICK_THRESHOLD, slowClickTimeout),
      timeout: slowClickTimeout,
      scrollTimeout: SLOW_CLICK_SCROLL_TIMEOUT,
      ignoreSelector: slowClickIgnoreSelectors ? slowClickIgnoreSelectors.join(",") : ""
    } : void 0;
    if (slowClickConfig) {
      this.clickDetector = new ClickDetector(this, slowClickConfig);
    }
    if (DEBUG_BUILD4) {
      const experiments = options._experiments;
      debug2.setConfig({
        captureExceptions: !!experiments.captureExceptions,
        traceInternals: !!experiments.traceInternals
      });
    }
    this._handleVisibilityChange = () => {
      if (WINDOW4.document.visibilityState === "visible") {
        this._doChangeToForegroundTasks();
      } else {
        this._doChangeToBackgroundTasks();
      }
    };
    this._handleWindowBlur = () => {
      const breadcrumb = createBreadcrumb({
        category: "ui.blur"
      });
      this._doChangeToBackgroundTasks(breadcrumb);
    };
    this._handleWindowFocus = () => {
      const breadcrumb = createBreadcrumb({
        category: "ui.focus"
      });
      this._doChangeToForegroundTasks(breadcrumb);
    };
    this._handleKeyboardEvent = (event) => {
      handleKeyboardEvent(this, event);
    };
  }
  /** Get the event context. */
  getContext() {
    return this._context;
  }
  /** If recording is currently enabled. */
  isEnabled() {
    return this._isEnabled;
  }
  /** If recording is currently paused. */
  isPaused() {
    return this._isPaused;
  }
  /**
   * Determine if canvas recording is enabled
   */
  isRecordingCanvas() {
    return Boolean(this._canvas);
  }
  /** Get the replay integration options. */
  getOptions() {
    return this._options;
  }
  /** A wrapper to conditionally capture exceptions. */
  handleException(error2) {
    DEBUG_BUILD4 && debug2.exception(error2);
    if (this._options.onError) {
      this._options.onError(error2);
    }
  }
  /**
   * Initializes the plugin based on sampling configuration. Should not be
   * called outside of constructor.
   */
  initializeSampling(previousSessionId) {
    const { errorSampleRate, sessionSampleRate } = this._options;
    const requiresManualStart = errorSampleRate <= 0 && sessionSampleRate <= 0;
    this._requiresManualStart = requiresManualStart;
    if (requiresManualStart) {
      return;
    }
    this._initializeSessionForSampling(previousSessionId);
    if (!this.session) {
      DEBUG_BUILD4 && debug2.exception(new Error("Unable to initialize and create session"));
      return;
    }
    if (this.session.sampled === false) {
      return;
    }
    this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session";
    DEBUG_BUILD4 && debug2.infoTick(`Starting replay in ${this.recordingMode} mode`);
    this._initializeRecording();
  }
  /**
   * Start a replay regardless of sampling rate. Calling this will always
   * create a new session. Will log a message if replay is already in progress.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM,
   * _performanceObserver, Recording, Sentry SDK, etc)
   */
  start() {
    if (this._isEnabled && this.recordingMode === "session") {
      DEBUG_BUILD4 && debug2.log("Recording is already in progress");
      return;
    }
    if (this._isEnabled && this.recordingMode === "buffer") {
      DEBUG_BUILD4 && debug2.log("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    DEBUG_BUILD4 && debug2.infoTick("Starting replay in session mode");
    this._updateUserActivity();
    const session = loadOrCreateSession(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire
      },
      {
        stickySession: this._options.stickySession,
        // This is intentional: create a new session-based replay when calling `start()`
        sessionSampleRate: 1,
        allowBuffering: false
      }
    );
    this.session = session;
    this.recordingMode = "session";
    this._initializeRecording();
  }
  /**
   * Start replay buffering. Buffers until `flush()` is called or, if
   * `replaysOnErrorSampleRate` > 0, an error occurs.
   */
  startBuffering() {
    if (this._isEnabled) {
      DEBUG_BUILD4 && debug2.log("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    DEBUG_BUILD4 && debug2.infoTick("Starting replay in buffer mode");
    const session = loadOrCreateSession(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: true
      }
    );
    this.session = session;
    this.recordingMode = "buffer";
    this._initializeRecording();
  }
  /**
   * Start recording.
   *
   * Note that this will cause a new DOM checkout
   */
  startRecording() {
    try {
      const canvasOptions = this._canvas;
      this._stopRecording = record(__spreadValues(__spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, this._recordingOptions), this.recordingMode === "buffer" ? { checkoutEveryNms: BUFFER_CHECKOUT_TIME } : (
        // Otherwise, use experimental option w/ min checkout time of 6 minutes
        // This is to improve playback seeking as there could potentially be
        // less mutations to process in the worse cases.
        //
        // checkout by "N" events is probably ideal, but means we have less
        // control about the number of checkouts we make (which generally
        // increases replay size)
        this._options._experiments.continuousCheckout && {
          // Minimum checkout time is 6 minutes
          checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
        }
      )), {
        emit: getHandleRecordingEmit(this)
      }), getRecordingSamplingOptions()), {
        onMutation: this._onMutationHandler.bind(this)
      }), canvasOptions ? {
        recordCanvas: canvasOptions.recordCanvas,
        getCanvasManager: canvasOptions.getCanvasManager,
        sampling: canvasOptions.sampling,
        dataURLOptions: canvasOptions.dataURLOptions
      } : {}));
    } catch (err) {
      this.handleException(err);
    }
  }
  /**
   * Stops the recording, if it was running.
   *
   * Returns true if it was previously stopped, or is now stopped,
   * otherwise false.
   */
  stopRecording() {
    try {
      if (this._stopRecording) {
        this._stopRecording();
        this._stopRecording = void 0;
      }
      return true;
    } catch (err) {
      this.handleException(err);
      return false;
    }
  }
  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
   * does not support a teardown
   */
  async stop({
    forceFlush = false,
    reason
  } = {}) {
    var _a3, _b, _c;
    if (!this._isEnabled) {
      return;
    }
    this._isEnabled = false;
    this.recordingMode = "buffer";
    const stopReason = reason ?? "manual";
    (_b = getClient()) == null ? void 0 : _b.emit("replayEnd", { sessionId: (_a3 = this.session) == null ? void 0 : _a3.id, reason: stopReason });
    try {
      DEBUG_BUILD4 && debug2.log(`Stopping Replay triggered by ${stopReason}`);
      resetReplayIdOnDynamicSamplingContext();
      this._removeListeners();
      this.stopRecording();
      this._debouncedFlush.cancel();
      if (forceFlush) {
        await this._flush({ force: true });
      }
      (_c = this.eventBuffer) == null ? void 0 : _c.destroy();
      this.eventBuffer = null;
      clearSession(this);
    } catch (err) {
      this.handleException(err);
    }
  }
  /**
   * Pause some replay functionality. See comments for `_isPaused`.
   * This differs from stop as this only stops DOM recording, it is
   * not as thorough of a shutdown as `stop()`.
   */
  pause() {
    if (this._isPaused) {
      return;
    }
    this._isPaused = true;
    this.stopRecording();
    DEBUG_BUILD4 && debug2.log("Pausing replay");
  }
  /**
   * Resumes recording, see notes for `pause().
   *
   * Note that calling `startRecording()` here will cause a
   * new DOM checkout.`
   */
  resume() {
    if (!this._isPaused || !this._checkSession()) {
      return;
    }
    this._isPaused = false;
    this.startRecording();
    DEBUG_BUILD4 && debug2.log("Resuming replay");
  }
  /**
   * If not in "session" recording mode, flush event buffer which will create a new replay.
   * Unless `continueRecording` is false, the replay will continue to record and
   * behave as a "session"-based replay.
   *
   * Otherwise, queue up a flush.
   */
  async sendBufferedReplayOrFlush({ continueRecording = true } = {}) {
    if (this.recordingMode === "session") {
      return this.flushImmediate();
    }
    const activityTime = Date.now();
    DEBUG_BUILD4 && debug2.log("Converting buffer to session");
    await this.flushImmediate();
    const hasStoppedRecording = this.stopRecording();
    if (!continueRecording || !hasStoppedRecording) {
      return;
    }
    if (this.recordingMode === "session") {
      return;
    }
    this.recordingMode = "session";
    if (this.session) {
      this.session.dirty = false;
      this._updateUserActivity(activityTime);
      this._updateSessionActivity(activityTime);
      this._maybeSaveSession();
      setReplayIdOnDynamicSamplingContext(this.session.id);
    }
    this.startRecording();
  }
  /**
   * We want to batch uploads of replay events. Save events only if
   * `<flushMinDelay>` milliseconds have elapsed since the last event
   * *OR* if `<flushMaxDelay>` milliseconds have elapsed.
   *
   * Accepts a callback to perform side-effects and returns true to stop batch
   * processing and hand back control to caller.
   */
  addUpdate(cb) {
    const cbResult = cb();
    if (this.recordingMode === "buffer" || !this._isEnabled) {
      return;
    }
    if (cbResult === true) {
      return;
    }
    this._debouncedFlush();
  }
  /**
   * Updates the user activity timestamp and resumes recording. This should be
   * called in an event handler for a user action that we consider as the user
   * being "active" (e.g. a mouse click).
   */
  triggerUserActivity() {
    this._updateUserActivity();
    if (!this._stopRecording) {
      if (!this._checkSession()) {
        return;
      }
      this.resume();
      return;
    }
    this.checkAndHandleExpiredSession();
    this._updateSessionActivity();
  }
  /**
   * Updates the user activity timestamp *without* resuming
   * recording. Some user events (e.g. keydown) can be create
   * low-value replays that only contain the keypress as a
   * breadcrumb. Instead this would require other events to
   * create a new replay after a session has expired.
   */
  updateUserActivity() {
    this._updateUserActivity();
    this._updateSessionActivity();
  }
  /**
   * Only flush if `this.recordingMode === 'session'`
   */
  conditionalFlush() {
    if (this.recordingMode === "buffer") {
      return Promise.resolve();
    }
    return this.flushImmediate();
  }
  /**
   * Flush using debounce flush
   */
  flush() {
    return this._debouncedFlush();
  }
  /**
   * Always flush via `_debouncedFlush` so that we do not have flushes triggered
   * from calling both `flush` and `_debouncedFlush`. Otherwise, there could be
   * cases of multiple flushes happening closely together.
   */
  flushImmediate() {
    this._debouncedFlush();
    return this._debouncedFlush.flush();
  }
  /**
   * Cancels queued up flushes.
   */
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  /** Get the current session (=replay) ID
   *
   * @param onlyIfSampled - If true, will only return the session ID if the session is sampled.
   */
  getSessionId(onlyIfSampled) {
    var _a3, _b;
    if (onlyIfSampled && ((_a3 = this.session) == null ? void 0 : _a3.sampled) === false) {
      return void 0;
    }
    return (_b = this.session) == null ? void 0 : _b.id;
  }
  /**
   * Checks if recording should be stopped due to user inactivity. Otherwise
   * check if session is expired and create a new session if so. Triggers a new
   * full snapshot on new session.
   *
   * Returns true if session is not expired, false otherwise.
   * @hidden
   */
  checkAndHandleExpiredSession() {
    var _a3;
    if (this._lastActivity && isExpired(this._lastActivity, this.timeouts.sessionIdlePause) && ((_a3 = this.session) == null ? void 0 : _a3.sampled) === "session") {
      this.pause();
      return;
    }
    if (!this._checkSession()) {
      return false;
    }
    return true;
  }
  /**
   * Capture some initial state that can change throughout the lifespan of the
   * replay. This is required because otherwise they would be captured at the
   * first flush.
   */
  setInitialState() {
    const urlPath = `${WINDOW4.location.pathname}${WINDOW4.location.hash}${WINDOW4.location.search}`;
    const url = `${WINDOW4.location.origin}${urlPath}`;
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    this._clearContext();
    this._context.initialUrl = url;
    this._context.initialTimestamp = Date.now();
    this._context.urls.push(url);
  }
  /**
   * Add a breadcrumb event, that may be throttled.
   * If it was throttled, we add a custom breadcrumb to indicate that.
   */
  throttledAddEvent(event, isCheckout) {
    const res = this._throttledAddEvent(event, isCheckout);
    if (res === THROTTLED) {
      const breadcrumb = createBreadcrumb({
        category: "replay.throttled"
      });
      this.addUpdate(() => {
        return !addEventSync(this, {
          type: ReplayEventTypeCustom,
          timestamp: breadcrumb.timestamp || 0,
          data: {
            tag: "breadcrumb",
            payload: breadcrumb,
            metric: true
          }
        });
      });
    }
    return res;
  }
  /**
   * This will get the parametrized route name of the current page.
   * This is only available if performance is enabled, and if an instrumented router is used.
   */
  getCurrentRoute() {
    const lastActiveSpan = this.lastActiveSpan || getActiveSpan();
    const lastRootSpan = lastActiveSpan && getRootSpan(lastActiveSpan);
    if (!lastRootSpan) {
      return void 0;
    }
    const spanJson = spanToJSON(lastRootSpan);
    const source = spanJson.attributes[Nm2];
    if (!source || !["route", "custom"].includes(source)) {
      return void 0;
    }
    return spanJson.name;
  }
  /**
   * Initialize and start all listeners to varying events (DOM,
   * Performance Observer, Recording, Sentry SDK, etc)
   */
  _initializeRecording() {
    var _a3;
    this.setInitialState();
    this._updateSessionActivity();
    this.eventBuffer = createEventBuffer({
      useCompression: this._options.useCompression,
      workerUrl: this._options.workerUrl
    });
    this._removeListeners();
    this._addListeners();
    this._isEnabled = true;
    this._isPaused = false;
    if (this.session) {
      (_a3 = getClient()) == null ? void 0 : _a3.emit("replayStart", {
        sessionId: this.session.id,
        recordingMode: this.recordingMode
      });
    }
    this.startRecording();
    if (this.recordingMode === "session" && this.session) {
      setReplayIdOnDynamicSamplingContext(this.session.id);
    }
  }
  /**
   * Loads (or refreshes) the current session.
   */
  _initializeSessionForSampling(previousSessionId) {
    const allowBuffering = this._options.errorSampleRate > 0;
    const session = loadOrCreateSession(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
        previousSessionId
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: this._options.sessionSampleRate,
        allowBuffering
      }
    );
    this.session = session;
  }
  /**
   * Checks and potentially refreshes the current session.
   * Returns false if session is not recorded.
   */
  _checkSession() {
    if (!this.session) {
      return false;
    }
    const currentSession = this.session;
    if (shouldRefreshSession(currentSession, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration
    })) {
      this._refreshSession(currentSession);
      return false;
    }
    return true;
  }
  /**
   * Refresh a session with a new one.
   * This stops the current session (without forcing a flush, as that would never work since we are expired),
   * and then does a new sampling based on the refreshed session.
   */
  async _refreshSession(session) {
    if (!this._isEnabled) {
      return;
    }
    await this.stop({ reason: "sessionExpired" });
    this.initializeSampling(session.id);
  }
  /**
   * Adds listeners to record events for the replay
   */
  _addListeners() {
    try {
      WINDOW4.document.addEventListener("visibilitychange", this._handleVisibilityChange);
      WINDOW4.addEventListener("blur", this._handleWindowBlur);
      WINDOW4.addEventListener("focus", this._handleWindowFocus);
      WINDOW4.addEventListener("keydown", this._handleKeyboardEvent);
      if (this.clickDetector) {
        this.clickDetector.addListeners();
      }
      if (!this._hasInitializedCoreListeners) {
        addGlobalListeners(this);
        this._hasInitializedCoreListeners = true;
      }
    } catch (err) {
      this.handleException(err);
    }
    this._performanceCleanupCallback = setupPerformanceObserver(this);
  }
  /**
   * Cleans up listeners that were created in `_addListeners`
   */
  _removeListeners() {
    try {
      WINDOW4.document.removeEventListener("visibilitychange", this._handleVisibilityChange);
      WINDOW4.removeEventListener("blur", this._handleWindowBlur);
      WINDOW4.removeEventListener("focus", this._handleWindowFocus);
      WINDOW4.removeEventListener("keydown", this._handleKeyboardEvent);
      if (this.clickDetector) {
        this.clickDetector.removeListeners();
      }
      if (this._performanceCleanupCallback) {
        this._performanceCleanupCallback();
      }
    } catch (err) {
      this.handleException(err);
    }
  }
  /**
   * Tasks to run when we consider a page to be hidden (via blurring and/or visibility)
   */
  _doChangeToBackgroundTasks(breadcrumb) {
    if (!this.session) {
      return;
    }
    const expired = shouldRefreshSession(this.session, {
      maxReplayDuration: this._options.maxReplayDuration,
      sessionIdleExpire: this.timeouts.sessionIdleExpire
    });
    if (expired) {
      resetReplayIdOnDynamicSamplingContext();
      return;
    }
    if (breadcrumb) {
      this._createCustomBreadcrumb(breadcrumb);
    }
    void this.conditionalFlush();
  }
  /**
   * Tasks to run when we consider a page to be visible (via focus and/or visibility)
   */
  _doChangeToForegroundTasks(breadcrumb) {
    if (!this.session) {
      return;
    }
    const isSessionActive = this.checkAndHandleExpiredSession();
    if (!isSessionActive) {
      DEBUG_BUILD4 && debug2.log("Document has become active, but session has expired");
      return;
    }
    if (breadcrumb) {
      this._createCustomBreadcrumb(breadcrumb);
    }
  }
  /**
   * Update user activity (across session lifespans)
   */
  _updateUserActivity(_lastActivity = Date.now()) {
    this._lastActivity = _lastActivity;
  }
  /**
   * Updates the session's last activity timestamp
   */
  _updateSessionActivity(_lastActivity = Date.now()) {
    if (this.session) {
      this.session.lastActivity = _lastActivity;
      this._maybeSaveSession();
    }
  }
  /**
   * Helper to create (and buffer) a replay breadcrumb from a core SDK breadcrumb
   */
  _createCustomBreadcrumb(breadcrumb) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: EventType.Custom,
        timestamp: breadcrumb.timestamp || 0,
        data: {
          tag: "breadcrumb",
          payload: breadcrumb
        }
      });
    });
  }
  /**
   * Observed performance events are added to `this.performanceEntries`. These
   * are included in the replay event before it is finished and sent to Sentry.
   */
  _addPerformanceEntries() {
    let performanceEntries = createPerformanceEntries(this.performanceEntries).concat(this.replayPerformanceEntries);
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    if (this._requiresManualStart) {
      const initialTimestampInSeconds = this._context.initialTimestamp / 1e3;
      performanceEntries = performanceEntries.filter((entry) => entry.start >= initialTimestampInSeconds);
    }
    return Promise.all(createPerformanceSpans(this, performanceEntries));
  }
  /**
   * Clear _context
   */
  _clearContext() {
    this._context.errorIds.clear();
    this._context.traceIds.clear();
    this._context.segmentNames.clear();
    this._context.urls = [];
  }
  /** Update the initial timestamp based on the buffer content. */
  _updateInitialTimestampFromEventBuffer() {
    const { session, eventBuffer } = this;
    if (!session || !eventBuffer || this._requiresManualStart) {
      return;
    }
    if (session.segmentId) {
      return;
    }
    const earliestEvent = eventBuffer.getEarliestTimestamp();
    if (earliestEvent && earliestEvent < this._context.initialTimestamp) {
      this._context.initialTimestamp = earliestEvent;
    }
  }
  /**
   * Return and clear _context
   */
  _popEventContext() {
    const _context = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      segmentNames: Array.from(this._context.segmentNames),
      urls: this._context.urls
    };
    this._clearContext();
    return _context;
  }
  /**
   * Flushes replay event buffer to Sentry.
   *
   * Performance events are only added right before flushing - this is
   * due to the buffered performance observer events.
   *
   * Should never be called directly, only by `flush`
   */
  async _runFlush() {
    var _a3;
    const replayId = this.getSessionId();
    if (!this.session || !this.eventBuffer || !replayId) {
      DEBUG_BUILD4 && debug2.error("No session or eventBuffer found to flush.");
      return;
    }
    await this._addPerformanceEntries();
    if (!((_a3 = this.eventBuffer) == null ? void 0 : _a3.hasEvents)) {
      return;
    }
    await addMemoryEntry(this);
    if (!this.eventBuffer) {
      return;
    }
    if (replayId !== this.getSessionId()) {
      return;
    }
    try {
      this._updateInitialTimestampFromEventBuffer();
      const timestamp = Date.now();
      if (timestamp - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) {
        throw new ReplayDurationLimitError();
      }
      const eventContext = this._popEventContext();
      const segmentId = this.session.segmentId++;
      this._maybeSaveSession();
      const recordingData = await this.eventBuffer.finish();
      await sendReplay({
        replayId,
        recordingData,
        segmentId,
        eventContext,
        session: this.session,
        timestamp,
        onError: (err) => this.handleException(err)
      });
    } catch (err) {
      this.handleException(err);
      this.stop({ reason: "sendError" });
      const client = getClient();
      if (client) {
        let dropReason;
        if (err instanceof RateLimitError) {
          dropReason = "ratelimit_backoff";
        } else if (err instanceof ReplayDurationLimitError) {
          dropReason = "invalid";
        } else {
          dropReason = "send_error";
        }
        client.recordDroppedEvent(dropReason, "replay");
      }
    }
  }
  /**
   * Flush recording data to Sentry. Creates a lock so that only a single flush
   * can be active at a time. Do not call this directly.
   */
  async _flush({
    force = false
  } = {}) {
    if (!this._isEnabled && !force) {
      return;
    }
    if (!this.checkAndHandleExpiredSession()) {
      DEBUG_BUILD4 && debug2.error("Attempting to finish replay event after session expired.");
      return;
    }
    if (!this.session) {
      return;
    }
    const start = this.session.started;
    const now = Date.now();
    const duration = now - start;
    this._debouncedFlush.cancel();
    const tooShort = duration < this._options.minReplayDuration;
    const tooLong = duration > this._options.maxReplayDuration + 5e3;
    if (tooShort || tooLong) {
      DEBUG_BUILD4 && debug2.log(
        `Session duration (${Math.floor(duration / 1e3)}s) is too ${tooShort ? "short" : "long"}, not sending replay.`
      );
      if (tooShort) {
        this._debouncedFlush();
      }
      return;
    }
    const eventBuffer = this.eventBuffer;
    if (eventBuffer && this.session.segmentId === 0 && !eventBuffer.hasCheckout) {
      DEBUG_BUILD4 && debug2.log("Flushing initial segment without checkout.");
    }
    const _flushInProgress = !!this._flushLock;
    if (!this._flushLock) {
      this._flushLock = this._runFlush();
    }
    try {
      await this._flushLock;
    } catch (err) {
      this.handleException(err);
    } finally {
      this._flushLock = void 0;
      if (_flushInProgress) {
        this._debouncedFlush();
      }
    }
  }
  /** Save the session, if it is sticky */
  _maybeSaveSession() {
    if (this.session && this._options.stickySession) {
      saveSession(this.session);
    }
  }
  /** Handler for rrweb.record.onMutation */
  _onMutationHandler(mutations) {
    const { ignoreMutations } = this._options._experiments;
    if (ignoreMutations == null ? void 0 : ignoreMutations.length) {
      if (mutations.some((mutation) => {
        const el2 = closestElementOfNode(mutation.target);
        const selector = ignoreMutations.join(",");
        return el2 == null ? void 0 : el2.matches(selector);
      })) {
        return false;
      }
    }
    const count = mutations.length;
    const mutationLimit = this._options.mutationLimit;
    const mutationBreadcrumbLimit = this._options.mutationBreadcrumbLimit;
    const overMutationLimit = mutationLimit && count > mutationLimit;
    if (count > mutationBreadcrumbLimit || overMutationLimit) {
      const breadcrumb = createBreadcrumb({
        category: "replay.mutations",
        data: {
          count,
          limit: overMutationLimit
        }
      });
      this._createCustomBreadcrumb(breadcrumb);
    }
    if (overMutationLimit) {
      this.stop({ reason: "mutationLimit", forceFlush: this.recordingMode === "session" });
      return false;
    }
    return true;
  }
};
function getOption(selectors, defaultSelectors) {
  return [
    ...selectors,
    // sentry defaults
    ...defaultSelectors
  ].join(",");
}
function getPrivacyOptions({ mask, unmask, block, unblock, ignore }) {
  const defaultBlockedElements = ["base", "iframe[srcdoc]:not([src])"];
  const maskSelector = getOption(mask, [".sentry-mask", "[data-sentry-mask]"]);
  const unmaskSelector = getOption(unmask, []);
  const options = {
    // We are making the decision to make text and input selectors the same
    maskTextSelector: maskSelector,
    unmaskTextSelector: unmaskSelector,
    blockSelector: getOption(block, [".sentry-block", "[data-sentry-block]", ...defaultBlockedElements]),
    unblockSelector: getOption(unblock, []),
    ignoreSelector: getOption(ignore, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
  };
  return options;
}
function maskAttribute({
  el: el2,
  key,
  maskAttributes,
  maskAllText,
  privacyOptions,
  value
}) {
  if (privacyOptions.unmaskTextSelector && el2.matches(privacyOptions.unmaskTextSelector)) {
    return value;
  }
  const masksNamedAttribute = maskAttributes.includes(key);
  const masksSubmitButtonValue = maskAllText && key === "value" && el2.tagName === "INPUT" && ["submit", "button"].includes(el2.getAttribute("type") || "");
  if (masksNamedAttribute || masksSubmitButtonValue) {
    return value.replace(/[\S]/g, "*");
  }
  return value;
}
var MEDIA_SELECTORS = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]';
var DEFAULT_NETWORK_HEADERS = ["content-length", "content-type", "accept"];
var ORIGINAL_BODY = /* @__PURE__ */ Symbol.for("sentry__originalRequestBody");
var _initialized = false;
var _isRequestInstrumented = false;
function _INTERNAL_instrumentRequestInterface() {
  if (typeof Request === "undefined" || _isRequestInstrumented) {
    return;
  }
  const OriginalRequest = Request;
  try {
    const SentryRequest = function(input, init3) {
      const request = new OriginalRequest(input, init3);
      if ((init3 == null ? void 0 : init3.body) != null) {
        request[ORIGINAL_BODY] = init3.body;
      }
      return request;
    };
    SentryRequest.prototype = OriginalRequest.prototype;
    GLOBAL_OBJ.Request = SentryRequest;
    _isRequestInstrumented = true;
  } catch {
  }
}
var replayIntegration = ((options) => {
  return new Replay(options);
});
var Replay = class {
  constructor({
    flushMinDelay = DEFAULT_FLUSH_MIN_DELAY,
    flushMaxDelay = DEFAULT_FLUSH_MAX_DELAY,
    minReplayDuration = MIN_REPLAY_DURATION,
    maxReplayDuration = MAX_REPLAY_DURATION,
    stickySession = true,
    useCompression = true,
    workerUrl,
    _experiments = {},
    maskAllText = true,
    maskAllInputs = true,
    blockAllMedia = true,
    mutationBreadcrumbLimit = 750,
    mutationLimit = 1e4,
    slowClickTimeout = 7e3,
    slowClickIgnoreSelectors = [],
    networkDetailAllowUrls = [],
    networkDetailDenyUrls = [],
    networkCaptureBodies = true,
    networkRequestHeaders = [],
    networkResponseHeaders = [],
    mask = [],
    maskAttributes = ["title", "placeholder", "aria-label"],
    unmask = [],
    block = [],
    unblock = [],
    ignore = [],
    maskFn,
    beforeAddRecordingEvent,
    beforeErrorSampling,
    onError,
    attachRawBodyFromRequest = false
  } = {}) {
    this.name = "Replay";
    const privacyOptions = getPrivacyOptions({
      mask,
      unmask,
      block,
      unblock,
      ignore
    });
    this._recordingOptions = __spreadProps(__spreadValues({
      maskAllInputs,
      maskAllText,
      maskInputOptions: { password: true },
      maskTextFn: maskFn,
      maskInputFn: maskFn,
      maskAttributeFn: (key, value, el2) => maskAttribute({
        maskAttributes,
        maskAllText,
        privacyOptions,
        key,
        value,
        el: el2
      })
    }, privacyOptions), {
      // Our defaults
      slimDOMOptions: "all",
      inlineStylesheet: true,
      // Disable inline images as it will increase segment/replay size
      inlineImages: false,
      // collect fonts, but be aware that `sentry.io` needs to be an allowed
      // origin for playback
      collectFonts: true,
      errorHandler: (err) => {
        try {
          err.__rrweb__ = true;
        } catch {
        }
      },
      // experimental support for recording iframes from different origins
      recordCrossOriginIframes: Boolean(_experiments.recordCrossOriginIframes)
    });
    this._initialOptions = {
      flushMinDelay,
      flushMaxDelay,
      minReplayDuration: Math.min(minReplayDuration, MIN_REPLAY_DURATION_LIMIT),
      maxReplayDuration: Math.min(maxReplayDuration, MAX_REPLAY_DURATION),
      stickySession,
      useCompression,
      workerUrl,
      blockAllMedia,
      maskAllInputs,
      maskAllText,
      mutationBreadcrumbLimit,
      mutationLimit,
      slowClickTimeout,
      slowClickIgnoreSelectors,
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders: _getMergedNetworkHeaders(networkRequestHeaders),
      networkResponseHeaders: _getMergedNetworkHeaders(networkResponseHeaders),
      beforeAddRecordingEvent,
      beforeErrorSampling,
      onError,
      attachRawBodyFromRequest,
      _experiments
    };
    if (this._initialOptions.blockAllMedia) {
      this._recordingOptions.blockSelector = !this._recordingOptions.blockSelector ? MEDIA_SELECTORS : `${this._recordingOptions.blockSelector},${MEDIA_SELECTORS}`;
      this._recordingOptions.ignoreCSSAttributes = /* @__PURE__ */ new Set(["background-image"]);
    }
    if (this._isInitialized && isBrowser()) {
      throw new Error("Multiple Sentry Session Replay instances are not supported");
    }
    this._isInitialized = true;
  }
  /** If replay has already been initialized */
  get _isInitialized() {
    return _initialized;
  }
  /** Update _isInitialized */
  set _isInitialized(value) {
    _initialized = value;
  }
  /**
   * Setup and initialize replay container
   */
  afterAllSetup(client) {
    if (!isBrowser() || this._replay) {
      return;
    }
    if (this._initialOptions.attachRawBodyFromRequest) {
      _INTERNAL_instrumentRequestInterface();
    }
    this._setup(client);
    this._initialize(client);
  }
  /**
   * Start a replay regardless of sampling rate. Calling this will always
   * create a new session. Will log a message if replay is already in progress.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM,
   * PerformanceObserver, Recording, Sentry SDK, etc)
   */
  start() {
    if (!this._replay) {
      return;
    }
    this._replay.start();
  }
  /**
   * Start replay buffering. Buffers until `flush()` is called or, if
   * `replaysOnErrorSampleRate` > 0, until an error occurs.
   */
  startBuffering() {
    if (!this._replay) {
      return;
    }
    this._replay.startBuffering();
  }
  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
   * does not support a teardown
   *
   * @param options.flush - Whether to flush the pending replay segment when stopping.
   * When recording in `session` mode, `stop()` flushes the buffered-but-unsent segment by
   * default (`flush: true`), matching the previous behavior. Pass `flush: false` to stop
   * recording without sending that pending segment — useful when a user withdraws consent
   * and no further data should leave the browser.
   *
   * Note: `flush: false` only prevents the *pending* (final) segment from being sent. It does
   * **not** retract segments that were already sent earlier during `session` recording.
   */
  stop(options) {
    if (!this._replay) {
      return Promise.resolve();
    }
    return this._replay.stop({
      forceFlush: (options == null ? void 0 : options.flush) ?? this._replay.recordingMode === "session",
      reason: "manual"
    });
  }
  /**
   * If not in "session" recording mode, flush event buffer which will create a new replay.
   * If replay is not enabled, a new session replay is started.
   * Unless `continueRecording` is false, the replay will continue to record and
   * behave as a "session"-based replay.
   *
   * Otherwise, queue up a flush.
   */
  flush(options) {
    if (!this._replay) {
      return Promise.resolve();
    }
    if (!this._replay.isEnabled()) {
      this._replay.start();
      return Promise.resolve();
    }
    return this._replay.sendBufferedReplayOrFlush(options);
  }
  /**
   * Get the current session ID.
   *
   * @param onlyIfSampled - If true, will only return the session ID if the session is sampled.
   *
   */
  getReplayId(onlyIfSampled) {
    var _a3;
    if (!((_a3 = this._replay) == null ? void 0 : _a3.isEnabled())) {
      return;
    }
    return this._replay.getSessionId(onlyIfSampled);
  }
  /**
   * Get the current recording mode. This can be either `session` or `buffer`.
   *
   * `session`: Recording the whole session, sending it continuously
   * `buffer`: Always keeping the last 60s of recording, requires:
   *   - having replaysOnErrorSampleRate > 0 to capture replay when an error occurs
   *   - or calling `flush()` to send the replay
   */
  getRecordingMode() {
    var _a3;
    if (!((_a3 = this._replay) == null ? void 0 : _a3.isEnabled())) {
      return;
    }
    return this._replay.recordingMode;
  }
  processSpan(span) {
    const replayId = this.getReplayId(true);
    if (replayId) {
      safeSetSpanJSONAttributes(span, { "sentry.replay_id": replayId });
      if (this.getRecordingMode() === "buffer") {
        safeSetSpanJSONAttributes(span, { "sentry._internal.replay_is_buffering": true });
      }
    }
  }
  /**
   * Initializes replay.
   */
  _initialize(client) {
    if (!this._replay) {
      return;
    }
    this._maybeLoadFromReplayCanvasIntegration(client);
    this._replay.initializeSampling();
  }
  /** Setup the integration. */
  _setup(client) {
    const finalOptions = loadReplayOptionsFromClient(this._initialOptions, client);
    this._replay = new ReplayContainer({
      options: finalOptions,
      recordingOptions: this._recordingOptions
    });
  }
  /** Get canvas options from ReplayCanvas integration, if it is also added. */
  _maybeLoadFromReplayCanvasIntegration(client) {
    try {
      const canvasIntegration = client.getIntegrationByName("ReplayCanvas");
      if (!canvasIntegration) {
        return;
      }
      this._replay["_canvas"] = canvasIntegration.getOptions();
    } catch {
    }
  }
};
function loadReplayOptionsFromClient(initialOptions, client) {
  const opt = client.getOptions();
  const finalOptions = __spreadValues({
    sessionSampleRate: 0,
    errorSampleRate: 0
  }, initialOptions);
  const replaysSessionSampleRate = parseSampleRate(opt.replaysSessionSampleRate);
  const replaysOnErrorSampleRate = parseSampleRate(opt.replaysOnErrorSampleRate);
  if (replaysSessionSampleRate == null && replaysOnErrorSampleRate == null) {
    consoleSandbox(() => {
      console.warn(
        "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
      );
    });
  }
  if (replaysSessionSampleRate != null) {
    finalOptions.sessionSampleRate = replaysSessionSampleRate;
  }
  if (replaysOnErrorSampleRate != null) {
    finalOptions.errorSampleRate = replaysOnErrorSampleRate;
  }
  return finalOptions;
}
function _getMergedNetworkHeaders(headers) {
  return [...DEFAULT_NETWORK_HEADERS, ...headers.map((header) => header.toLowerCase())];
}

// node_modules/@sentry/browser/build/npm/esm/dev/tracing/utils.js
function baggageHeaderHasSentryValues(baggageHeader) {
  return baggageHeader.split(",").some((value) => value.trim().startsWith("sentry-"));
}
function getFullURL(url) {
  try {
    const parsed = new URL(url, WINDOW3.location.origin);
    return parsed.href;
  } catch {
    return void 0;
  }
}
function isPerformanceResourceTiming(entry) {
  return entry.entryType === "resource" && "initiatorType" in entry && typeof entry.nextHopProtocol === "string" && (entry.initiatorType === "fetch" || entry.initiatorType === "xmlhttprequest");
}
function createHeadersSafely(headers) {
  try {
    return new Headers(headers);
  } catch {
    return void 0;
  }
}

// node_modules/@sentry/browser/build/npm/esm/dev/tracing/request.js
var defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  enableHTTPTimings: true
};
function instrumentOutgoingRequests(client, _options) {
  const {
    traceFetch,
    traceXHR,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
    tracePropagationTargets,
    onRequestSpanStart,
    onRequestSpanEnd
  } = __spreadValues(__spreadValues({}, defaultRequestInstrumentationOptions), _options);
  const shouldCreateSpan = typeof shouldCreateSpanForRequest === "function" ? shouldCreateSpanForRequest : (_3) => true;
  const shouldAttachHeadersWithTargets = (url) => shouldAttachHeaders(url, tracePropagationTargets);
  const spans = {};
  const propagateTraceparent = client.getOptions().propagateTraceparent;
  if (traceFetch) {
    addFetchInstrumentationHandler((handlerData) => {
      var _a3, _b;
      const createdSpan = instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans, {
        propagateTraceparent,
        onRequestSpanEnd,
        // The generic fetch instrumentation has no page origin to resolve relative URLs against.
        urlBase: (_a3 = WINDOW3.location) == null ? void 0 : _a3.origin
      });
      if (createdSpan) {
        const fullUrl = getFullURL(handlerData.fetchData.url);
        const host = fullUrl ? (_b = parseUrl(fullUrl).host) == null ? void 0 : _b.replace(/^.*@/, "") : void 0;
        const sanitizedFullUrl = fullUrl ? stripDataUrlContent(fullUrl) : void 0;
        createdSpan.setAttributes({
          [ib]: filterCollectedUrl(sanitizedFullUrl),
          [tg]: host
        });
        if (enableHTTPTimings) {
          addHTTPTimings(createdSpan, client);
        }
        onRequestSpanStart == null ? void 0 : onRequestSpanStart(createdSpan, { headers: handlerData.headers });
      }
    });
  }
  if (traceXHR) {
    addXhrInstrumentationHandler((handlerData) => {
      var _a3;
      const createdSpan = xhrCallback(
        handlerData,
        shouldCreateSpan,
        shouldAttachHeadersWithTargets,
        spans,
        propagateTraceparent,
        onRequestSpanEnd
      );
      if (createdSpan) {
        if (enableHTTPTimings) {
          addHTTPTimings(createdSpan, client);
        }
        onRequestSpanStart == null ? void 0 : onRequestSpanStart(createdSpan, {
          headers: createHeadersSafely((_a3 = handlerData.xhr.__sentry_xhr_v3__) == null ? void 0 : _a3.request_headers)
        });
      }
    });
  }
}
var HTTP_TIMING_WAIT_MS = 300;
function addHTTPTimings(span, client) {
  const url = spanToJSON(span).attributes[ib];
  if (!url || typeof url !== "string") {
    return;
  }
  let onEntryFound = () => void setTimeout(unsubscribePerformanceObsever);
  if (hasSpanStreamingEnabled(client)) {
    const originalEnd = span.end.bind(span);
    span.end = (endTimestamp) => {
      const capturedEndTimestamp = endTimestamp ?? timestampInSeconds();
      let isEnded = false;
      const endSpanAndCleanup = () => {
        if (isEnded) {
          return;
        }
        isEnded = true;
        setTimeout(unsubscribePerformanceObsever);
        originalEnd(capturedEndTimestamp);
        clearTimeout(fallbackTimeout);
      };
      onEntryFound = endSpanAndCleanup;
      const fallbackTimeout = setTimeout(endSpanAndCleanup, HTTP_TIMING_WAIT_MS);
    };
  }
  const unsubscribePerformanceObsever = addPerformanceInstrumentationHandler("resource", ({ entries }) => {
    entries.forEach((entry) => {
      if (isPerformanceResourceTiming(entry) && entry.name.endsWith(url)) {
        span.setAttributes(resourceTimingToSpanAttributes(entry));
        onEntryFound();
      }
    });
  });
}
function shouldAttachHeaders(targetUrl, tracePropagationTargets) {
  const href = getLocationHref();
  if (!href) {
    const isRelativeSameOriginRequest = !!targetUrl.match(/^\/(?!\/)/);
    if (!tracePropagationTargets) {
      return isRelativeSameOriginRequest;
    } else {
      return matchesTracePropagationTargets(targetUrl, tracePropagationTargets);
    }
  } else {
    let resolvedUrl;
    let currentOrigin;
    try {
      resolvedUrl = new URL(targetUrl, href);
      currentOrigin = new URL(href).origin;
    } catch {
      return false;
    }
    const isSameOriginRequest = resolvedUrl.origin === currentOrigin;
    if (!tracePropagationTargets) {
      return isSameOriginRequest;
    } else {
      return matchesTracePropagationTargets(resolvedUrl.toString(), tracePropagationTargets) || isSameOriginRequest && matchesTracePropagationTargets(resolvedUrl.pathname, tracePropagationTargets);
    }
  }
}
function xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans, propagateTraceparent, onRequestSpanEnd) {
  var _a3;
  const xhr = handlerData.xhr;
  const sentryXhrData = xhr == null ? void 0 : xhr[SENTRY_XHR_DATA_KEY];
  if (!xhr || xhr.__sentry_own_request__ || !sentryXhrData) {
    return void 0;
  }
  const { url, method } = sentryXhrData;
  const shouldCreateSpanResult = hasSpansEnabled() && shouldCreateSpan(url);
  if (handlerData.endTimestamp) {
    const spanId = xhr.__sentry_xhr_span_id__;
    if (!spanId) return;
    const span2 = spans[spanId];
    if (span2) {
      if (shouldCreateSpanResult && sentryXhrData.status_code !== void 0) {
        setHttpStatus(span2, sentryXhrData.status_code);
        span2.end();
        onRequestSpanEnd == null ? void 0 : onRequestSpanEnd(span2, {
          headers: createHeadersSafely(parseXhrResponseHeaders(xhr)),
          error: handlerData.error
        });
      }
      delete spans[spanId];
    }
    return void 0;
  }
  const fullUrl = getFullURL(url);
  const parsedUrl = fullUrl ? parseUrl(fullUrl) : parseUrl(url);
  const sanitizedFullUrl = fullUrl ? stripDataUrlContent(fullUrl) : void 0;
  const urlForSpanName = stripDataUrlContent(stripUrlQueryAndFragment(url));
  const client = getClient();
  const hasParent = !!getActiveSpan();
  const shouldEmitSpan = hasParent || !!client && hasSpanStreamingEnabled(client);
  const host = (_a3 = parsedUrl == null ? void 0 : parsedUrl.host) == null ? void 0 : _a3.replace(/^.*@/, "");
  const domain = getUrlDomain(fullUrl || url);
  const streamedName = domain ? `${method} ${domain}` : method;
  const span = shouldCreateSpanResult && shouldEmitSpan ? startInactiveSpan2({
    name: !!client && hasSpanStreamingEnabled(client) ? streamedName : `${method} ${urlForSpanName}`,
    attributes: {
      type: "xhr",
      // eslint-disable-next-line typescript/no-deprecated
      [Do]: method,
      [ib]: filterCollectedUrl(sanitizedFullUrl),
      [tg]: host,
      [eb]: domain,
      [gm]: "auto.http.browser",
      [mm]: UE,
      [pb]: filterCollectedUrlQuery(getUrlQuery(parsedUrl == null ? void 0 : parsedUrl.search)),
      [tb]: getUrlFragment(parsedUrl == null ? void 0 : parsedUrl.hash)
    }
  }) : new SentryNonRecordingSpan();
  const spanForTraceHeaders = spanIsIgnored(span) && hasParent ? void 0 : span;
  if (shouldCreateSpanResult && !shouldEmitSpan) {
    client == null ? void 0 : client.recordDroppedEvent("no_parent_span", "span");
  }
  xhr.__sentry_xhr_span_id__ = span.spanContext().spanId;
  spans[xhr.__sentry_xhr_span_id__] = span;
  if (shouldAttachHeaders2(url)) {
    addTracingHeadersToXhrRequest(
      xhr,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      hasSpansEnabled() && shouldEmitSpan ? spanForTraceHeaders : void 0,
      propagateTraceparent
    );
  }
  if (client) {
    client.emit("beforeOutgoingRequestSpan", span, handlerData);
  }
  return span;
}
function addTracingHeadersToXhrRequest(xhr, span, propagateTraceparent) {
  const { "sentry-trace": sentryTrace, baggage, traceparent } = getTraceData({ span, propagateTraceparent });
  if (sentryTrace) {
    setHeaderOnXhr(xhr, sentryTrace, baggage, traceparent);
  }
}
function setHeaderOnXhr(xhr, sentryTraceHeader, sentryBaggageHeader, traceparentHeader) {
  var _a3;
  const originalHeaders = (_a3 = xhr.__sentry_xhr_v3__) == null ? void 0 : _a3.request_headers;
  if ((originalHeaders == null ? void 0 : originalHeaders["sentry-trace"]) || !xhr.setRequestHeader) {
    return;
  }
  try {
    xhr.setRequestHeader("sentry-trace", sentryTraceHeader);
    if (traceparentHeader && !(originalHeaders == null ? void 0 : originalHeaders["traceparent"])) {
      xhr.setRequestHeader("traceparent", traceparentHeader);
    }
    if (sentryBaggageHeader) {
      const originalBaggageHeader = originalHeaders == null ? void 0 : originalHeaders["baggage"];
      if (!originalBaggageHeader || !baggageHeaderHasSentryValues(originalBaggageHeader)) {
        xhr.setRequestHeader("baggage", sentryBaggageHeader);
      }
    }
  } catch {
  }
}

// node_modules/@sentry/browser/build/npm/esm/dev/integrations/webVitals.js
var WEB_VITALS_INTEGRATION_NAME = "WebVitals";
var webVitalsIntegration = defineIntegration((options = {}) => {
  const { ignore = [], softNavigations = true, bfcacheNavigations = true } = options;
  const ignored = new Set(ignore);
  return {
    name: WEB_VITALS_INTEGRATION_NAME,
    setup(client) {
      const spanStreamingEnabled = hasSpanStreamingEnabled(client);
      const reportSoftNavs = softNavigations && spanStreamingEnabled && supportsSoftNavigations();
      const reportBfcache = bfcacheNavigations && spanStreamingEnabled;
      const perNavigation = reportSoftNavs || reportBfcache;
      if (reportSoftNavs) {
        enableSoftNavigationReporting();
        startSoftNavigationCorrelation(client);
      }
      if (reportBfcache) {
        enableBfcacheReporting();
      }
      const trackClsOnPageloadSpan = !spanStreamingEnabled && !ignored.has("cls");
      const trackLcpOnPageloadSpan = !spanStreamingEnabled && !ignored.has("lcp");
      const finalizeWebVitals = startTrackingWebVitals({
        trackCls: trackClsOnPageloadSpan,
        trackLcp: trackLcpOnPageloadSpan,
        client
      });
      const pageloadSpans = /* @__PURE__ */ new WeakSet();
      client.on("afterStartPageLoadSpan", (span) => {
        pageloadSpans.add(span);
      });
      client.on("spanEnd", (span) => {
        if (!pageloadSpans.delete(span)) {
          return;
        }
        finalizeWebVitals();
        addWebVitalsToSpan(span, {
          recordClsOnPageloadSpan: trackClsOnPageloadSpan,
          recordLcpOnPageloadSpan: trackLcpOnPageloadSpan,
          spanStreamingEnabled
        });
      });
      if (spanStreamingEnabled) {
        if (!ignored.has("lcp")) {
          trackLcpAsSpan(client, perNavigation);
        }
        if (!ignored.has("cls")) {
          trackClsAsSpan(client, perNavigation);
        }
      }
      if (!ignored.has("inp")) {
        trackInpAsSpan(client, perNavigation);
      }
    },
    afterAllSetup() {
      if (!ignored.has("inp")) {
        registerInpInteractionListener();
      }
    }
  };
});

// node_modules/@sentry/browser/build/npm/esm/dev/tracing/backgroundtab.js
function registerBackgroundTabDetection() {
  if (WINDOW3.document) {
    WINDOW3.document.addEventListener("visibilitychange", () => {
      const activeSpan = getActiveSpan();
      if (!activeSpan) {
        return;
      }
      const rootSpan = getRootSpan(activeSpan);
      if (WINDOW3.document.hidden && rootSpan) {
        const cancelledStatus = "cancelled";
        const {
          attributes: { [mm]: op },
          status
        } = spanToJSON(rootSpan);
        if (DEBUG_BUILD3) {
          debug.log(`[Tracing] Transaction: ${cancelledStatus} -> since tab moved to the background, op: ${op}`);
        }
        if (status === "ok") {
          rootSpan.setStatus({ code: SPAN_STATUS_ERROR, message: cancelledStatus });
        }
        rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
        rootSpan.end();
      }
    });
  } else {
    DEBUG_BUILD3 && debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
}

// node_modules/@sentry/browser/build/npm/esm/dev/tracing/linkedTraces.js
var PREVIOUS_TRACE_MAX_DURATION = 3600;
var PREVIOUS_TRACE_KEY = "sentry_previous_trace";
var PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = "sentry.previous_trace";
function linkTraces(client, {
  linkPreviousTrace,
  consistentTraceSampling
}) {
  const useSessionStorage = linkPreviousTrace === "session-storage";
  let inMemoryPreviousTraceInfo = useSessionStorage ? getPreviousTraceFromSessionStorage() : void 0;
  client.on("spanStart", (span) => {
    if (getRootSpan(span) !== span) {
      return;
    }
    const oldPropagationContext = getCurrentScope().getPropagationContext();
    inMemoryPreviousTraceInfo = addPreviousTraceSpanLink(inMemoryPreviousTraceInfo, span, oldPropagationContext);
    if (useSessionStorage) {
      storePreviousTraceInSessionStorage(inMemoryPreviousTraceInfo);
    }
  });
  let isFirstTraceOnPageload = true;
  if (consistentTraceSampling) {
    client.on("beforeSampling", (mutableSamplingContextData) => {
      if (!inMemoryPreviousTraceInfo) {
        return;
      }
      const scope = getCurrentScope();
      const currentPropagationContext = scope.getPropagationContext();
      if (isFirstTraceOnPageload && currentPropagationContext.parentSpanId) {
        isFirstTraceOnPageload = false;
        return;
      }
      scope.setPropagationContext(__spreadProps(__spreadValues({}, currentPropagationContext), {
        dsc: __spreadProps(__spreadValues({}, currentPropagationContext.dsc), {
          sample_rate: String(inMemoryPreviousTraceInfo.sampleRate),
          sampled: String(spanContextSampled(inMemoryPreviousTraceInfo.spanContext))
        }),
        sampleRand: inMemoryPreviousTraceInfo.sampleRand
      }));
      mutableSamplingContextData.parentSampled = spanContextSampled(inMemoryPreviousTraceInfo.spanContext);
      mutableSamplingContextData.parentSampleRate = inMemoryPreviousTraceInfo.sampleRate;
      mutableSamplingContextData.spanAttributes = __spreadProps(__spreadValues({}, mutableSamplingContextData.spanAttributes), {
        [SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE]: inMemoryPreviousTraceInfo.sampleRate
      });
    });
  }
}
function addPreviousTraceSpanLink(previousTraceInfo, span, oldPropagationContext) {
  const spanJson = spanToJSON(span);
  function getSampleRate() {
    var _a3;
    try {
      const oldSampleRate = Number(
        spanJson.attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? ((_a3 = oldPropagationContext.dsc) == null ? void 0 : _a3.sample_rate)
      );
      return Number.isNaN(oldSampleRate) ? 0 : oldSampleRate;
    } catch {
      return 0;
    }
  }
  const updatedPreviousTraceInfo = {
    spanContext: span.spanContext(),
    startTimestamp: spanJson.start_timestamp,
    sampleRate: getSampleRate(),
    sampleRand: oldPropagationContext.sampleRand
  };
  if (!previousTraceInfo) {
    return updatedPreviousTraceInfo;
  }
  const previousTraceSpanCtx = previousTraceInfo.spanContext;
  if (previousTraceSpanCtx.traceId === spanJson.trace_id) {
    return previousTraceInfo;
  }
  if (Date.now() / 1e3 - previousTraceInfo.startTimestamp <= PREVIOUS_TRACE_MAX_DURATION) {
    if (DEBUG_BUILD3) {
      debug.log(
        `Adding previous_trace \`${JSON.stringify(previousTraceSpanCtx)}\` link to span \`${JSON.stringify(__spreadValues({
          op: spanJson.attributes[mm]
        }, span.spanContext()))}\``
      );
    }
    span.addLink({
      context: previousTraceSpanCtx,
      attributes: {
        [$d]: "previous_trace"
      }
    });
    span.setAttribute(
      PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE,
      `${previousTraceSpanCtx.traceId}-${previousTraceSpanCtx.spanId}-${spanContextSampled(previousTraceSpanCtx) ? 1 : 0}`
    );
  }
  return updatedPreviousTraceInfo;
}
function storePreviousTraceInSessionStorage(previousTraceInfo) {
  try {
    WINDOW3.sessionStorage.setItem(PREVIOUS_TRACE_KEY, JSON.stringify(previousTraceInfo));
  } catch (e4) {
    DEBUG_BUILD3 && debug.warn("Could not store previous trace in sessionStorage", e4);
  }
}
function getPreviousTraceFromSessionStorage() {
  var _a3;
  try {
    const previousTraceInfo = (_a3 = WINDOW3.sessionStorage) == null ? void 0 : _a3.getItem(PREVIOUS_TRACE_KEY);
    return JSON.parse(previousTraceInfo);
  } catch {
    return void 0;
  }
}
function spanContextSampled(ctx) {
  return ctx.traceFlags === 1;
}

// node_modules/@sentry/browser/build/npm/esm/dev/tracing/browserTracingIntegration.js
var BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
var DEFAULT_BROWSER_TRACING_OPTIONS = __spreadValues(__spreadProps(__spreadValues({}, TRACING_DEFAULTS), {
  instrumentNavigation: true,
  instrumentBfcacheRestore: true,
  instrumentPageLoad: true,
  markBackgroundSpan: true,
  enableLongTask: true,
  enableLongAnimationFrame: true,
  // oxlint-disable-next-line typescript/no-deprecated -- still honoured until it is removed
  enableInp: true,
  ignoreResourceSpans: [],
  detectRedirects: true,
  linkPreviousTrace: "in-memory",
  consistentTraceSampling: false,
  enableReportPageLoaded: false
}), defaultRequestInstrumentationOptions);
var browserTracingIntegration = ((options = {}) => {
  if ("enableElementTiming" in options) {
    consoleSandbox(() => {
      console.warn(
        "[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead."
      );
    });
  }
  const optionalWindowDocument = WINDOW3.document;
  const {
    // oxlint-disable-next-line typescript/no-deprecated -- still honoured until it is removed
    enableInp,
    enableLongTask,
    enableLongAnimationFrame,
    webVitals,
    beforeStartSpan,
    idleTimeout,
    finalTimeout,
    childSpanTimeout,
    markBackgroundSpan,
    traceFetch,
    traceXHR,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
    ignoreResourceSpans,
    instrumentPageLoad,
    instrumentNavigation,
    instrumentBfcacheRestore,
    detectRedirects,
    linkPreviousTrace,
    consistentTraceSampling,
    enableReportPageLoaded,
    onRequestSpanStart,
    onRequestSpanEnd
  } = __spreadValues(__spreadValues({}, DEFAULT_BROWSER_TRACING_OPTIONS), options);
  const _isBot = isBotUserAgent();
  let lastInteractionTimestamp;
  let _pageloadSpan;
  function _createRouteSpan(client, startSpanOptions, makeActive = true, url) {
    const isPageloadSpan = startSpanOptions.op === "pageload";
    const initialSpanName = startSpanOptions.name;
    const finalStartSpanOptions = beforeStartSpan ? beforeStartSpan(startSpanOptions) : startSpanOptions;
    const urlObject = parseStringToURLObject(url || getLocationHref());
    const attributes = __spreadValues(__spreadValues(__spreadValues({}, (urlObject == null ? void 0 : urlObject.pathname) && { [ab]: urlObject.pathname }), urlObject && !isURLObjectRelative(urlObject) && { [ib]: filterCollectedUrl(urlObject.href) }), finalStartSpanOptions.attributes);
    if (initialSpanName !== finalStartSpanOptions.name) {
      attributes[Nm] = "custom";
    }
    finalStartSpanOptions.attributes = attributes;
    if (!makeActive) {
      const now = dateTimestampInSeconds();
      startInactiveSpan2(__spreadProps(__spreadValues({}, finalStartSpanOptions), {
        startTime: now
      })).end(now);
      return;
    }
    const idleSpan = startIdleSpan(finalStartSpanOptions, {
      idleTimeout,
      finalTimeout,
      childSpanTimeout,
      // should wait for finish signal if it's a pageload transaction
      disableAutoFinish: isPageloadSpan,
      trimIdleSpanEndTimestamp: !enableReportPageLoaded
    });
    if (isPageloadSpan && enableReportPageLoaded) {
      _pageloadSpan = idleSpan;
    }
    setActiveIdleSpan(client, idleSpan);
    function emitFinish() {
      if (optionalWindowDocument && ["interactive", "complete"].includes(optionalWindowDocument.readyState)) {
        client.emit("idleSpanEnableAutoFinish", idleSpan);
        optionalWindowDocument.removeEventListener("readystatechange", emitFinish);
      }
    }
    if (isPageloadSpan && !enableReportPageLoaded && optionalWindowDocument) {
      optionalWindowDocument.addEventListener("readystatechange", emitFinish);
      emitFinish();
    }
  }
  return {
    name: BROWSER_TRACING_INTEGRATION_ID,
    setup(client) {
      var _a3, _b, _c;
      if (_isBot) {
        DEBUG_BUILD3 && debug.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
        return;
      }
      registerSpanErrorInstrumentation();
      if (enableLongAnimationFrame && GLOBAL_OBJ.PerformanceObserver && ((_a3 = PerformanceObserver.supportedEntryTypes) == null ? void 0 : _a3.includes("long-animation-frame"))) {
        startTrackingLongAnimationFrames();
      } else if (enableLongTask) {
        startTrackingLongTasks();
      }
      if (detectRedirects && optionalWindowDocument) {
        const interactionHandler = () => {
          lastInteractionTimestamp = timestampInSeconds();
        };
        addEventListener("click", interactionHandler, { capture: true });
        addEventListener("keydown", interactionHandler, { capture: true, passive: true });
      }
      function maybeEndActiveSpan() {
        const activeSpan = getActiveIdleSpan(client);
        if (activeSpan && !spanToJSON(activeSpan).end_timestamp) {
          DEBUG_BUILD3 && debug.log(
            `[Tracing] Finishing current active span with op: ${spanToJSON(activeSpan).attributes[mm]}`
          );
          activeSpan.setAttribute(Qd, "cancelled");
          activeSpan.end();
        }
      }
      client.on("beforeIdleSpanEnd", (span) => {
        if (getActiveIdleSpan(client) !== span) {
          return;
        }
        addPerformanceEntries(span, {
          ignoreResourceSpans,
          spanStreamingEnabled: hasSpanStreamingEnabled(client)
        });
        setActiveIdleSpan(client, void 0);
        const scope = getCurrentScope();
        const oldPropagationContext = scope.getPropagationContext();
        scope.setPropagationContext(__spreadProps(__spreadValues({}, oldPropagationContext), {
          traceId: span.spanContext().traceId,
          sampled: spanIsSampled(span),
          dsc: getDynamicSamplingContextFromSpan(span)
        }));
        if (_pageloadSpan === span) {
          _pageloadSpan = void 0;
        }
      });
      client.on("startNavigationSpan", (startSpanOptions, navigationOptions) => {
        if (getClient() !== client) {
          return;
        }
        if (navigationOptions == null ? void 0 : navigationOptions.isRedirect) {
          DEBUG_BUILD3 && debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span.");
          _createRouteSpan(
            client,
            __spreadValues({
              op: _
            }, startSpanOptions),
            false,
            navigationOptions.url
          );
          return;
        }
        lastInteractionTimestamp = void 0;
        maybeEndActiveSpan();
        const scope = getCurrentScope();
        scope.setPropagationContext({
          traceId: generateTraceId(),
          sampleRand: Math.random(),
          propagationSpanId: hasSpansEnabled() ? void 0 : generateSpanId()
        });
        scope.setSDKProcessingMetadata({
          normalizedRequest: void 0
        });
        _createRouteSpan(
          client,
          __spreadProps(__spreadValues({
            op: E
          }, startSpanOptions), {
            // Navigation starts a new trace and is NOT parented under any active interaction (e.g. ui.action.click)
            parentSpan: null
          }),
          true,
          navigationOptions == null ? void 0 : navigationOptions.url
        );
      });
      client.on("startPageLoadSpan", (startSpanOptions, traceOptions = {}) => {
        if (getClient() !== client) {
          return;
        }
        maybeEndActiveSpan();
        const sentryTrace = traceOptions.sentryTrace || getMetaContent("sentry-trace") || getServerTiming("sentry-trace");
        const baggage = traceOptions.baggage || getMetaContent("baggage") || getServerTiming("baggage");
        const propagationContext = propagationContextFromHeaders(sentryTrace, baggage);
        const scope = getCurrentScope();
        scope.setPropagationContext(propagationContext);
        if (!hasSpansEnabled()) {
          scope.getPropagationContext().propagationSpanId = generateSpanId();
        }
        const requestData = getHttpRequestData(client);
        scope.setSDKProcessingMetadata({
          normalizedRequest: __spreadProps(__spreadValues({}, requestData), { url: filterCollectedUrl(requestData.url, client) })
        });
        _createRouteSpan(client, __spreadValues({
          op: e
        }, startSpanOptions));
      });
      client.on("endPageloadSpan", () => {
        if (enableReportPageLoaded && _pageloadSpan) {
          _pageloadSpan.setAttribute(Qd, "reportPageLoaded");
          _pageloadSpan.end();
        }
      });
      (_c = (_b = WINDOW3).addEventListener) == null ? void 0 : _c.call(_b, "pagehide", () => {
        const activeSpan = getActiveIdleSpan(client);
        if (activeSpan && !spanToJSON(activeSpan).end_timestamp) {
          activeSpan.setAttribute(Qd, "documentHidden");
          activeSpan.end();
        }
        void client.flush();
      });
    },
    afterAllSetup(client) {
      var _a3, _b, _c;
      if (_isBot) {
        return;
      }
      _INTERNAL_ensureBrowserSpanStreaming(client);
      if (client.addIntegration && !((_a3 = client.getIntegrationByName) == null ? void 0 : _a3.call(client, WEB_VITALS_INTEGRATION_NAME))) {
        const ignore = (webVitals == null ? void 0 : webVitals.ignore) ?? [];
        client.addIntegration(
          webVitalsIntegration(__spreadProps(__spreadValues({}, webVitals), {
            ignore: enableInp || ignore.includes("inp") ? ignore : [...ignore, "inp"]
          }))
        );
      }
      let startingUrl = getLocationHref();
      if (linkPreviousTrace !== "off") {
        linkTraces(client, { linkPreviousTrace, consistentTraceSampling });
      }
      if (WINDOW3.location) {
        if (instrumentPageLoad) {
          startBrowserTracingPageLoadSpan(client, {
            // With span streaming, span names have to be low cardinality, and there is no route
            // information available here.
            name: hasSpanStreamingEnabled(client) ? PAGELOAD_SPAN_NAME_FALLBACK : WINDOW3.location.pathname,
            attributes: {
              [Nm]: "url",
              [gm]: "auto.pageload.browser"
            }
          });
        }
        if (instrumentNavigation) {
          addHistoryInstrumentationHandler(({ to, from }) => {
            if (from === void 0 && startingUrl !== void 0 && startingUrl.indexOf(to) !== -1) {
              startingUrl = void 0;
              return;
            }
            startingUrl = void 0;
            const parsed = parseStringToURLObject(to);
            const activeSpan = getActiveIdleSpan(client);
            const navigationIsRedirect = activeSpan && detectRedirects && isRedirect(activeSpan, lastInteractionTimestamp);
            startBrowserTracingNavigationSpan(
              client,
              {
                // With span streaming, span names have to be low cardinality, and there is no route
                // information available here.
                name: hasSpanStreamingEnabled(client) ? NAVIGATION_SPAN_NAME_FALLBACK : (parsed == null ? void 0 : parsed.pathname) || WINDOW3.location.pathname,
                attributes: {
                  [Nm]: "url",
                  [gm]: "auto.navigation.browser"
                }
              },
              { url: to, isRedirect: navigationIsRedirect }
            );
          });
        }
        if (instrumentBfcacheRestore) {
          (_c = (_b = WINDOW3).addEventListener) == null ? void 0 : _c.call(_b, "pageshow", (event) => {
            var _a4, _b2;
            if (!event.persisted) {
              return;
            }
            startingUrl = void 0;
            startBrowserTracingNavigationSpan(
              client,
              {
                // Deliberately no `startTime`: the span starts now, at the restore. The
                // `PerformanceNavigationTiming` entry still describes the original document load and
                // would date the span to before the page was frozen.
                //
                // TODO(routing): resolve the parameterized route via the route provider (#23551) and set
                // the source from it. No router event fires on a restore, so in a framework app this is
                // the only navigation span still named from a raw pathname.
                name: hasSpanStreamingEnabled(client) ? NAVIGATION_SPAN_NAME_FALLBACK : ((_a4 = WINDOW3.location) == null ? void 0 : _a4.pathname) || "/",
                attributes: {
                  [Nm]: "url",
                  [gm]: "auto.navigation.browser.bfcache",
                  // A bfcache restore is near-instant, so these spans would otherwise drag
                  // navigation duration percentiles down with no way to tell them apart.
                  [Wt]: "back-forward-cache"
                }
              },
              { url: (_b2 = WINDOW3.location) == null ? void 0 : _b2.href }
            );
          });
        }
      }
      if (markBackgroundSpan) {
        registerBackgroundTabDetection();
      }
      instrumentOutgoingRequests(client, {
        traceFetch,
        traceXHR,
        tracePropagationTargets: client.getOptions().tracePropagationTargets,
        shouldCreateSpanForRequest,
        enableHTTPTimings,
        onRequestSpanStart,
        onRequestSpanEnd
      });
    }
  };
});
function startBrowserTracingPageLoadSpan(client, spanOptions, traceOptions) {
  var _a3;
  const isFallbackSpanName = spanOptions.name === PAGELOAD_SPAN_NAME_FALLBACK;
  getCurrentScope().setTransactionName(isFallbackSpanName ? (_a3 = WINDOW3.location) == null ? void 0 : _a3.pathname : spanOptions.name);
  const timeOrigin = browserPerformanceTimeOrigin();
  const pageloadSpanOptions = __spreadProps(__spreadValues({}, spanOptions), {
    // startTime needs to be in seconds, not ms
    startTime: spanOptions.startTime ?? (timeOrigin ? timeOrigin / 1e3 : void 0)
  });
  client.emit("startPageLoadSpan", pageloadSpanOptions, traceOptions);
  const pageloadSpan = getActiveIdleSpan(client);
  if (pageloadSpan) {
    client.emit("afterStartPageLoadSpan", pageloadSpan);
  }
  return pageloadSpan;
}
function startBrowserTracingNavigationSpan(client, spanOptions, options) {
  var _a3, _b;
  const { url, isRedirect: isRedirect2 } = options || {};
  client.emit("beforeStartNavigationSpan", spanOptions, { isRedirect: isRedirect2, url });
  client.emit("startNavigationSpan", spanOptions, { isRedirect: isRedirect2, url });
  const scope = getCurrentScope();
  const isFallbackSpanName = spanOptions.name === NAVIGATION_SPAN_NAME_FALLBACK;
  scope.setTransactionName(
    isFallbackSpanName ? url && ((_a3 = parseStringToURLObject(url)) == null ? void 0 : _a3.pathname) || ((_b = WINDOW3.location) == null ? void 0 : _b.pathname) : spanOptions.name
  );
  if (url && !isRedirect2) {
    scope.setSDKProcessingMetadata({
      normalizedRequest: __spreadProps(__spreadValues({}, getHttpRequestData(client)), {
        url: filterCollectedUrl(url, client)
      })
    });
  }
  return getActiveIdleSpan(client);
}
function getMetaContent(metaName) {
  const optionalWindowDocument = WINDOW3.document;
  const metaTag = optionalWindowDocument == null ? void 0 : optionalWindowDocument.querySelector(`meta[name=${metaName}]`);
  return (metaTag == null ? void 0 : metaTag.getAttribute("content")) || void 0;
}
function getServerTiming(name) {
  var _a3, _b, _c;
  const navigation = (_b = (_a3 = WINDOW3.performance) == null ? void 0 : _a3.getEntriesByType) == null ? void 0 : _b.call(_a3, "navigation")[0];
  const entry = (_c = navigation == null ? void 0 : navigation.serverTiming) == null ? void 0 : _c.find((entry2) => entry2.name === name);
  return entry == null ? void 0 : entry.description;
}
var ACTIVE_IDLE_SPAN_PROPERTY = "_sentry_idleSpan";
function getActiveIdleSpan(client) {
  return client[ACTIVE_IDLE_SPAN_PROPERTY];
}
function setActiveIdleSpan(client, span) {
  addNonEnumerableProperty(client, ACTIVE_IDLE_SPAN_PROPERTY, span);
}
var REDIRECT_THRESHOLD = 1.5;
function isRedirect(activeSpan, lastInteractionTimestamp) {
  const spanData = spanToJSON(activeSpan);
  const now = dateTimestampInSeconds();
  const startTimestamp = spanData.start_timestamp;
  if (now - startTimestamp > REDIRECT_THRESHOLD) {
    return false;
  }
  if (lastInteractionTimestamp && now - lastInteractionTimestamp <= REDIRECT_THRESHOLD) {
    return false;
  }
  return true;
}

// node_modules/@sentry/angular/fesm2020/sentry-angular.mjs
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" ? true : __SENTRY_DEBUG__;
function getDefaultIntegrations2(_options = {}) {
  return [eventFiltersIntegration(), functionToStringIntegration(), conversationIdIntegration(), breadcrumbsIntegration(), consoleIntegration(), globalHandlersIntegration(), linkedErrorsIntegration(), dedupeIntegration(), httpContextIntegration(), cultureContextIntegration(), browserSessionIntegration()];
}
function init2(options) {
  const opts = __spreadValues({
    defaultIntegrations: getDefaultIntegrations2()
  }, options);
  applySdkMetadata(opts, "angular");
  checkAndSetAngularVersion();
  return init(opts);
}
function checkAndSetAngularVersion() {
  var _a3;
  const ANGULAR_MINIMUM_VERSION = 14;
  const angularVersion = ((_a3 = VERSION) == null ? void 0 : _a3.major) && parseInt(VERSION.major, 10);
  if (angularVersion) {
    if (angularVersion < ANGULAR_MINIMUM_VERSION) {
      IS_DEBUG_BUILD && debug.warn(`This Sentry SDK does not officially support Angular ${angularVersion}.`, `This SDK only supports Angular ${ANGULAR_MINIMUM_VERSION} and above.`, "If you're using lower Angular versions, check the Angular Version Compatibility table in our docs: https://docs.sentry.io/platforms/javascript/guides/angular/#angular-version-compatibility.", "Otherwise, please consider upgrading your Angular version.");
    }
    setContext("angular", {
      version: angularVersion
    });
  }
}
var _a2;
var isNgZoneEnabled = typeof Zone !== "undefined" && ((_a2 = Zone.root) == null ? void 0 : _a2.run);
function runOutsideAngular(callback) {
  return isNgZoneEnabled ? Zone.root.run(callback) : callback();
}
function tryToUnwrapZonejsError(error2) {
  return (error2 == null ? void 0 : error2.ngOriginalError) ? error2.ngOriginalError : error2;
}
function extractHttpModuleError(error2) {
  if (isErrorOrErrorLikeObject(error2.error)) {
    return error2.error;
  }
  if (typeof ErrorEvent !== "undefined" && error2.error instanceof ErrorEvent && error2.error.message) {
    return error2.error.message;
  }
  if (typeof error2.error === "string") {
    return `Server returned code ${error2.status} with body "${error2.error}"`;
  }
  return error2.message;
}
function isErrorOrErrorLikeObject(value) {
  if (value instanceof Error) {
    return true;
  }
  if (value === null || typeof value !== "object") {
    return false;
  }
  const candidate = value;
  return isString(candidate.name) && isString(candidate.message) && (void 0 === candidate.stack || isString(candidate.stack));
}
var SentryErrorHandler = class {
  constructor(options) {
    this._options = __spreadValues({
      logErrors: true
    }, options);
  }
  /**
   * Method executed when the injector is destroyed.
   */
  ngOnDestroy() {
    if (this._removeAfterSendEventListener) {
      this._removeAfterSendEventListener();
    }
  }
  /**
   * Method called for every value captured through the ErrorHandler
   */
  handleError(error2) {
    const extractedError = this._extractError(error2) || "Handled unknown error";
    const eventId = runOutsideAngular(() => captureException(extractedError, {
      mechanism: {
        type: "auto.function.angular.error_handler",
        handled: false
      }
    }));
    if (this._options.logErrors) {
      consoleSandbox(() => console.error(extractedError));
    }
    if (this._options.showDialog) {
      const client = getClient();
      if (client && !this._removeAfterSendEventListener) {
        this._removeAfterSendEventListener = client.on("afterSendEvent", (event) => {
          if (!event.type && event.event_id) {
            runOutsideAngular(() => {
              showReportDialog(__spreadProps(__spreadValues({}, this._options.dialogOptions), {
                eventId: event.event_id
              }));
            });
          }
        });
      } else if (!client) {
        runOutsideAngular(() => {
          showReportDialog(__spreadProps(__spreadValues({}, this._options.dialogOptions), {
            eventId
          }));
        });
      }
    }
  }
  /**
   * Used to pull a desired value that will be used to capture an event out of the raw value captured by ErrorHandler.
   */
  _extractError(error2) {
    if (this._options.extractor) {
      const defaultExtractor = this._defaultExtractor.bind(this);
      return this._options.extractor(error2, defaultExtractor);
    }
    return this._defaultExtractor(error2);
  }
  /**
   * Default implementation of error extraction that handles default error wrapping, HTTP responses, ErrorEvent and few other known cases.
   */
  _defaultExtractor(errorCandidate) {
    const error2 = tryToUnwrapZonejsError(errorCandidate);
    if (error2 instanceof HttpErrorResponse) {
      return extractHttpModuleError(error2);
    }
    if (typeof error2 === "string" || isErrorOrErrorLikeObject(error2)) {
      return error2;
    }
    return null;
  }
};
SentryErrorHandler.\u0275fac = function SentryErrorHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SentryErrorHandler)(\u0275\u0275inject("errorHandlerOptions"));
};
SentryErrorHandler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: SentryErrorHandler,
  factory: SentryErrorHandler.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SentryErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["errorHandlerOptions"]
      }]
    }];
  }, null);
})();
function createErrorHandler(config) {
  return new SentryErrorHandler(config);
}
var instrumentationInitialized;
function browserTracingIntegration2(options = {}) {
  if (options.instrumentNavigation !== false) {
    instrumentationInitialized = true;
  }
  return browserTracingIntegration(__spreadProps(__spreadValues({}, options), {
    instrumentNavigation: false
  }));
}
function _updateSpanAttributesForParametrizedUrl(route, url, span) {
  var _a3;
  if (!span) {
    return;
  }
  const attributes = spanToJSON(span).attributes;
  if (!attributes || attributes[Nm] === "url") {
    span.updateName(route);
    const absoluteUrl = getAbsoluteUrl2(url);
    span.setAttributes({
      [gm]: `auto.${attributes[mm]}.angular`,
      [Nm]: "route",
      [ib]: filterCollectedUrl(absoluteUrl),
      [ab]: (_a3 = parseStringToURLObject(absoluteUrl)) == null ? void 0 : _a3.pathname,
      [db]: route
    });
  }
}
var TraceService = class {
  constructor(_router) {
    this._router = _router;
    this.navStart$ = this._router.events.pipe(filter((event) => event instanceof NavigationStart), tap((navigationEvent) => {
      if (!instrumentationInitialized) {
        IS_DEBUG_BUILD && debug.error("Angular integration has tracing enabled, but Tracing integration is not configured");
        return;
      }
      if (this._routingSpan) {
        this._routingSpan.end();
        this._routingSpan = null;
      }
      const client = getClient();
      const strippedUrl = stripUrlQueryAndFragment(navigationEvent.url);
      if (client) {
        if (!this._isPageloadOngoing()) {
          runOutsideAngular(() => {
            startBrowserTracingNavigationSpan(client, {
              // With span streaming, span names have to be low cardinality. The parameterized route
              // is only known on `ResolveEnd`, which updates the span name then.
              name: hasSpanStreamingEnabled(client) ? NAVIGATION_SPAN_NAME_FALLBACK : strippedUrl,
              attributes: {
                [gm]: "auto.navigation.angular",
                [Nm]: "url"
              }
            }, {
              url: getAbsoluteUrl2(navigationEvent.url)
            });
          });
        } else {
          this._pageloadOngoing = false;
        }
        this._routingSpan = runOutsideAngular(() => startInactiveSpan2({
          // With span streaming, span names have to be low cardinality. The parameterized route is only
          // known at `ResolveEnd`, well after this span starts, so there is nothing but the fallback.
          name: hasSpanStreamingEnabled(client) ? ROUTER_SPAN_NAME_FALLBACK : `${navigationEvent.url}`,
          attributes: __spreadValues({
            [mm]: TE,
            [gm]: "auto.ui.angular",
            [ib]: strippedUrl
          }, navigationEvent.navigationTrigger && {
            navigationTrigger: navigationEvent.navigationTrigger
          })
        })) || null;
        return;
      }
    }));
    this.resEnd$ = this._router.events.pipe(filter((event) => event instanceof ResolveEnd), tap((event) => {
      const route = getParameterizedRouteFromSnapshot(event.state.root);
      if (route) {
        getCurrentScope().setTransactionName(route);
      }
      const activeSpan = getActiveSpan();
      const rootSpan = activeSpan && getRootSpan(activeSpan);
      _updateSpanAttributesForParametrizedUrl(route, event.urlAfterRedirects, rootSpan);
    }));
    this.navEnd$ = this._router.events.pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError), tap(() => {
      if (this._routingSpan) {
        runOutsideAngular(() => {
          this._routingSpan.end();
        });
        this._routingSpan = null;
      }
    }));
    this._routingSpan = null;
    this._pageloadOngoing = true;
    this._subscription = new Subscription();
    this._subscription.add(this.navStart$.subscribe());
    this._subscription.add(this.resEnd$.subscribe());
    this._subscription.add(this.navEnd$.subscribe());
  }
  /**
   * This is used to prevent memory leaks when the root view is created and destroyed multiple times,
   * since `subscribe` callbacks capture `this` and prevent many resources from being GC'd.
   */
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  /**
   * We only _avoid_ creating a navigation root span in one case:
   *
   * There is an ongoing pageload span AND the router didn't yet emit the first navigation start event
   *
   * The first navigation start event will create the child routing span
   * and update the pageload root span name on ResolveEnd.
   *
   * There's an edge case we need to avoid here: If the router fires the first navigation start event
   * _after_ the pageload root span finished. This is why we check for the pageload root span.
   * Possible real-world scenario: Angular application and/or router is bootstrapped after the pageload
   * idle root span finished
   *
   * The overall rationale is:
   * - if we already avoided creating a navigation root span once, we don't avoid it again
   *   (i.e. set `_pageloadOngoing` to `false`)
   * - if `_pageloadOngoing` is already `false`, create a navigation root span
   * - if there's no active/pageload root span, create a navigation root span
   * - only if there's an ongoing pageload root span AND `_pageloadOngoing` is still `true,
   *   don't create a navigation root span
   */
  _isPageloadOngoing() {
    if (!this._pageloadOngoing) {
      return false;
    }
    const activeSpan = getActiveSpan();
    if (!activeSpan) {
      this._pageloadOngoing = false;
      return false;
    }
    const rootSpan = getRootSpan(activeSpan);
    this._pageloadOngoing = spanToJSON(rootSpan).attributes[mm] === "pageload";
    return this._pageloadOngoing;
  }
};
TraceService.\u0275fac = function TraceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TraceService)(\u0275\u0275inject(Router));
};
TraceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: TraceService,
  factory: TraceService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Router
    }];
  }, null);
})();
var TraceDirective = class {
  constructor(_host) {
    this._host = _host;
  }
  /**
   * Implementation of OnInit lifecycle method
   * @inheritdoc
   */
  ngOnInit() {
    if (!this.componentName) {
      this.componentName = this._host.nativeElement.tagName.toLowerCase();
    }
    if (getActiveSpan()) {
      const client = getClient();
      const hasSpanStreaming = !!client && hasSpanStreamingEnabled(client);
      const componentName = this.componentName;
      const description = `<${componentName}>`;
      this._tracingSpan = runOutsideAngular(() => startInactiveSpan2({
        name: hasSpanStreaming ? componentName : description,
        attributes: __spreadValues({
          [mm]: V,
          [gm]: "auto.ui.angular.trace_directive",
          [Yg]: componentName
        }, hasSpanStreaming && {
          [Id]: description
        })
      }));
    }
  }
  /**
   * Implementation of AfterViewInit lifecycle method
   * @inheritdoc
   */
  ngAfterViewInit() {
    const span = this._tracingSpan;
    if (span) {
      runOutsideAngular(() => span.end());
    }
  }
};
TraceDirective.\u0275fac = function TraceDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TraceDirective)(\u0275\u0275directiveInject(ElementRef));
};
TraceDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TraceDirective,
  selectors: [["", "trace", ""]],
  inputs: {
    componentName: [0, "trace", "componentName"]
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceDirective, [{
    type: Directive,
    args: [{
      selector: "[trace]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    componentName: [{
      type: Input,
      args: ["trace"]
    }]
  });
})();
var TraceModule = class {
};
TraceModule.\u0275fac = function TraceModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TraceModule)();
};
TraceModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: TraceModule,
  declarations: [TraceDirective],
  exports: [TraceDirective]
});
TraceModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceModule, [{
    type: NgModule,
    args: [{
      declarations: [TraceDirective],
      exports: [TraceDirective]
    }]
  }], null, null);
})();
function getParameterizedRouteFromSnapshot(route) {
  const parts = [];
  let currentRoute = route == null ? void 0 : route.firstChild;
  while (currentRoute) {
    const path = (currentRoute == null ? void 0 : currentRoute.routeConfig) && currentRoute.routeConfig.path;
    if (path === null || path === void 0) {
      break;
    }
    parts.push(path);
    currentRoute = currentRoute.firstChild;
  }
  const fullPath = parts.filter((part) => part).join("/");
  return fullPath ? `/${fullPath}/` : "/";
}
export {
  TraceService,
  browserTracingIntegration2 as browserTracingIntegration,
  createErrorHandler,
  init2 as init,
  makeFetchTransport,
  replayIntegration
};
//# debugId=080f0f92-ea24-5087-992d-3910e95f3779
//# sourceMappingURL=sentry-sdk-ON6Y24LL.js.map
